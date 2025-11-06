'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { postApi } from '@/app/api/services/api';
interface GiscusCommentsProps {
	postHash: string;
	postReactionCount: number;
}
export default function GiscusComments({ postHash, postReactionCount }: GiscusCommentsProps) {
	const { theme } = useTheme();

	const reactionCountRef = useRef(postReactionCount);

	// Giscus 메시지 이벤트로 댓글 수 가져오기 (실시간)
	useEffect(() => {
		const handleMessage = async (event: MessageEvent) => {
			if (event.origin !== 'https://giscus.app') return;
			const data = event.data;
			const reactionCount = data?.giscus?.discussion?.reactionCount;
			if (typeof reactionCount !== 'number') {
				return;
			}

			if (reactionCountRef.current !== reactionCount) {
				reactionCountRef.current = reactionCount;
				try {
					const response = await postApi.updatePostReactionCount(postHash, reactionCount);
				} catch (error) {
					console.error('포스트 리액션 수 업데이트 중 오류가 발생했습니다.', error);
				}
			}
		};
		window.addEventListener('message', handleMessage);
		return () => {
			window.removeEventListener('message', handleMessage);
		};
	}, [postHash]);

	return (
		<Giscus
			repo="yunhoJ/blog"
			repoId="R_kgDOOsOmEg"
			category="Announcements"
			categoryId="DIC_kwDOOsOmEs4CqvL8"
			mapping="pathname"
			strict="0"
			reactionsEnabled="1"
			emitMetadata="1"
			inputPosition="bottom"
			theme={theme === 'dark' ? 'dark' : 'light'}
			lang="ko"
			loading="lazy"
		/>
	);
}
