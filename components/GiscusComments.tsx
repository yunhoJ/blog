'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
	const { theme } = useTheme();
	return (
		<Giscus
			repo="yunhoJ/blog"
			repoId="R_kgDOOsOmEg"
			category="Announcements"
			categoryId="DIC_kwDOOsOmEs4CqvL8"
			mapping="pathname"
			strict="0"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="bottom"
			theme={theme === 'dark' ? 'dark' : 'light'}
			lang="ko"
			loading="lazy"
		/>
	);
}
