'use client';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@/components/theme/editorColorPicker.css';
import '@/components/theme/editorColorPlugin.css';
import dynamic from 'next/dynamic';
import type { Editor as EditorType } from '@toast-ui/react-editor';
import { postApi } from '@/app/api/services/api';
import { toastError } from '@/lib/toasttError';
import { userId } from '@/app/api/constant/const';
import { useEffect, useState } from 'react';

const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
	ssr: false,
});

interface MarkdownEditorProps {
	editorRef: React.RefObject<EditorType | null>;
	initialContent?: string;
	saveBtn: () => void;
}

function getCompressionQuality(fileSize: number): number {
	// fileSize는 바이트 단위
	const sizeInKb = fileSize / 1024; // MB로 변환

	if (sizeInKb > 300) return 0.3; // 300kb 이상 → 강하게 압축
	if (sizeInKb > 100) return 0.5; // 100kb ~ 300kb → 중간 압축
	if (sizeInKb > 50) return 0.8; // 50kb ~ 100kb → 약하게 압축
	return 0.9; // 50kb 이하 → 거의 무압축
}

async function resizeImageBlob(
	blob: Blob,
	maxWidth: number = 1024,
	maxHeight: number = 1024
): Promise<Blob> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => {
			let { width, height } = img;

			// 가로/세로 비율 유지하며 크기 조절
			if (width > maxWidth || height > maxHeight) {
				const ratio = Math.min(maxWidth / width, maxHeight / height);
				width = width * ratio;
				height = height * ratio;
			}
			const canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext('2d');
			if (!ctx) {
				return reject(new Error('Canvas Context를 가져올 수 없음'));
			}

			ctx.drawImage(img, 0, 0, width, height);
			canvas.toBlob(
				(resizedBlob) => {
					if (resizedBlob) {
						const fileName = blob instanceof File && blob.name ? blob.name : 'resized.jpeg';

						const fileWithName = new File([resizedBlob], fileName, {
							type: 'image/jpeg',
							lastModified: Date.now(),
						});

						resolve(fileWithName);
					} else {
						reject(new Error('Blob 변환 실패'));
					}
				},
				'image/jpeg',
				getCompressionQuality(blob.size)
			);
		};
		img.onerror = () => reject(new Error('이미지 로드 실패'));
		img.src = URL.createObjectURL(blob);
	});
}
async function getPostHash() {
	// 해시 존재 여부 확인
	let postHash = localStorage.getItem('postHash');
	let autoSave = false;
	if (!postHash) {
		autoSave = true;
		postHash = (await postApi.createPostMeta({ userId })) as string;
		localStorage.setItem('postHash', postHash);
	}
	return { postHash, autoSave };
}
async function addImageBlobHook(
	blob: Blob,
	callback: (url: string, altText: string) => void,
	saveBtn: () => void
) {
	try {
		const { postHash, autoSave } = await getPostHash();
		const formData = new FormData();
		const resizedBlob = await resizeImageBlob(blob);
		formData.append('uploadImages', resizedBlob);
		formData.append('postHash', postHash);
		const response = await postApi.uploadImage(formData);
		callback(response.imageUrl, response.imageName);
		if (autoSave) {
			// 임시 저장이 없을경우에만 자동 저장함
			saveBtn();
		}
	} catch (error) {
		console.error('이미지 업로드 실패 ', error);
		toastError(new Error('이미지 업로드 실패'));
	}
}

export default function MarkdownEditor({
	editorRef,
	initialContent,
	saveBtn,
}: MarkdownEditorProps) {
	const [plugins, setPlugins] = useState<unknown[]>([]);
	//color preset
	const colorSyntaxOptions = {
		preset: [
			'#F48FB1', // 소프트 핑크
			'#E53935', // 딥 레드
			'#FFAB91', // 라이트 코랄
			'#FF8A65', // 딥 오렌지
			'#FFB347', // 코랄 오렌지
			'#FFD966', // 밝은 옐로우
			'#FFF176', // 라이트 머스타드
			'#A7F3D0', // 민트
			'#6EE7B7', // 라이트 그린
			'#6EC1E4', // 소프트 블루
			'#4FC3F7', // 스카이 블루
			'#B39DDB', // 라이트 퍼플
			'#8B5CF6', // 퍼플
			'#9575CD', // 딥 라일락
			'#CFD8DC', // 라이트 그레이
			'#6C757D', // 그레이
		],
	};
	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('@toast-ui/editor-plugin-color-syntax').then((mod) => {
				// 플러그인 함수를 옵션과 함께 래핑
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const pluginWithOptions = (context: any) => mod.default(context, colorSyntaxOptions);
				setPlugins([pluginWithOptions]);
			});
		}
	}, []);

	const handleAddImageBlobHook = (blob: Blob, callback: (url: string, altText: string) => void) => {
		return addImageBlobHook(blob, callback, saveBtn);
	};

	return (
		<Editor
			key={initialContent}
			ref={editorRef}
			initialValue={initialContent}
			previewStyle="vertical"
			initialEditType={
				typeof window !== 'undefined' && window.innerWidth <= 768 ? 'wysiwyg' : 'markdown'
			}
			height="100%"
			useCommandShortcut={true}
			hooks={{ addImageBlobHook: handleAddImageBlobHook }}
			plugins={plugins}
		/>
	);
}
