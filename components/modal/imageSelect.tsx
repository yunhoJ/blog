'use client';
import { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../ui/carousel';
import { postApi } from '@/app/api/services/api';
import Image from 'next/image';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import { DialogDescription } from '@radix-ui/react-dialog';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';
import { toastError } from '@/lib/toasttError';
import { userId } from '@/app/api/constant/const';
import { resizeImageBlob } from '../features/MarkdownEditor';

type CarouselApi = UseEmblaCarouselType[1];

interface ImageList {
	name: string;
	publicUrl: string;
}
interface ImageSelectProps {
	selectedImageUrl: (url: string) => void;
}

export default function ImageSelect({ selectedImageUrl }: ImageSelectProps) {
	const [imageList, setImageList] = useState<ImageList[]>([]);
	const [api, setApi] = useState<CarouselApi>();
	const [isImageListEmpty, setIsImageListEmpty] = useState(true);
	const [current, setCurrent] = useState(0);
	const [isUploading, setIsUploading] = useState(false);
	const getImageList = async () => {
		const postHash = localStorage.getItem('postHash') as string;
		if (!postHash) {
			return;
		}

		const response = await postApi.getImageList(postHash);
		if (response.imageList.length !== 0) {
			setIsImageListEmpty(false);
		}
		setImageList(response.imageList);
	};
	useEffect(() => {
		getImageList();
	}, []);

	const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		// 포스트 해시가 없으면 임시저장 생성
		let postHash = localStorage.getItem('postHash') as string;
		if (!postHash) {
			try {
				postHash = (await postApi.createPostMeta({ userId })) as string;
				localStorage.setItem('postHash', postHash);
			} catch {
				toastError(new Error('포스트 생성 실패'));
				return;
			}
		}

		setIsUploading(true);
		try {
			// 기존 resizeImageBlob 함수 재사용 (File 객체 반환)
			const resizedFile = await resizeImageBlob(file) as File;

			const formData = new FormData();
			formData.append('uploadImages', resizedFile);
			formData.append('postHash', postHash);

			// 기존 postApi.uploadImage 함수 재사용 (Supabase에 업로드)
			await postApi.uploadImage(formData);
			// 이미지 목록 새로고침
			await getImageList();
		} catch {
			toastError(new Error('이미지 업로드 실패'));
		} finally {
			setIsUploading(false);
		}
	};

	// 캐러셀 API 설정 및 현재 슬라이드 추적
	useEffect(() => {
		if (!api) {
			return;
		}

		// 현재 선택된 슬라이드 업데이트
		const updateCurrent = () => {
			const currentIndex = api.selectedScrollSnap();
			setCurrent(currentIndex);

			// 현재 슬라이드의 이미지 URL을 자동으로 선택
			if (imageList[currentIndex]) {
				selectedImageUrl(imageList[currentIndex].publicUrl);
			}
		};

		// 초기 설정
		updateCurrent();

		// 슬라이드 변경 이벤트 리스너 등록
		api.on('select', updateCurrent);

		return () => {
			api.off('select', updateCurrent);
		};
	}, [api, imageList, selectedImageUrl]);

	return (
		<>
			{isImageListEmpty ? (
				<div className="flex flex-row items-center justify-between ">
					<DialogDescription>대표 이미지가 없습니다.</DialogDescription>
					<Button asChild disabled={isUploading} variant="outline">
						<label className="cursor-pointer">
							<input
								type="file"
								accept="image/*"
								onChange={handleFileSelect}
								disabled={isUploading}
								className="hidden"
							/>
							<span className="flex items-center gap-2">
								<Upload className="h-4 w-4" />
								{isUploading ? '업로드 중...' : '이미지 업로드'}
							</span>
						</label>
					</Button>
				</div>
			) : (
				<>
					<DialogDescription>대표 이미지 선택</DialogDescription>
					<Carousel setApi={setApi} className="mx-auto max-h-[220px] max-w-sm">
						<CarouselContent>
							{imageList.map((image, index) => (
								<CarouselItem
									key={image.name}
									className={`cursor-pointer transition-opacity ${
										index === current ? 'opacity-100' : 'opacity-50'
									}`}
								>
									<Image
										src={image.publicUrl}
										alt={image.name}
										width={200}
										height={200}
										className="h-full max-h-[200px] w-full rounded-lg object-cover"
									/>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</>
			)}
		</>
	);
}
