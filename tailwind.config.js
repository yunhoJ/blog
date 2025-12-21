// tailwind.config.js
import typography from '@tailwindcss/typography';

const tailwindConfig = {
	content: ['./app/**/*.{js,ts,jsx,tsx,md,mdx}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						maxWidth: 'none',

						// '--tw-prose-body': 'var(--color-pink-800)',
						// '--tw-prose-headings': 'var(--color-pink-900)',
						// '--tw-prose-lead': 'var(--color-pink-700)',
						// '--tw-prose-links': 'var(--color-pink-900)',
						'--tw-prose-bold': 'var(--color-pink-600)',
						'--tw-prose-counters': 'var(--color-purple-800)',
						'--tw-prose-bullets': 'var(--color-purple-800)',
						// '--tw-prose-hr': 'var(--color-pink-300)',
						// '--tw-prose-quotes': 'var(--color-pink-900)',
						// '--tw-prose-quote-borders': 'var(--color-purple-800)',
						// '--tw-prose-captions': 'var(--color-pink-700)',
						// '--tw-prose-code': 'var(--color-pink-900)',
						// '--tw-prose-pre-code': 'var(--color-pink-100)',
						// '--tw-prose-pre-bg': 'var(--color-pink-900)',
						// '--tw-prose-th-borders': 'var(--color-pink-300)',
						// '--tw-prose-td-borders': 'var(--color-pink-200)',
						// '--tw-prose-invert-body': 'var(--color-pink-200)',
						// '--tw-prose-invert-headings': 'var(--color-white)',
						// '--tw-prose-invert-lead': 'var(--color-pink-300)',
						// '--tw-prose-invert-links': 'var(--color-white)',
						'--tw-prose-invert-bold': 'var(--color-pink-400)',
						'--tw-prose-invert-counters': 'var(--color-purple-400)',
						'--tw-prose-invert-bullets': 'var(--color-purple-400)',
						// '--tw-prose-invert-hr': 'var(--color-pink-700)',
						// '--tw-prose-invert-quotes': 'var(--color-pink-100)',
						'--tw-prose-invert-quote-borders': 'var(--color-purple-400)',
						// '--tw-prose-invert-captions': 'var(--color-pink-400)',
						// '--tw-prose-invert-code': 'var(--color-white)',
						// '--tw-prose-invert-pre-code': 'var(--color-pink-300)',
						// '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						// '--tw-prose-invert-th-borders': 'var(--color-pink-600)',
						// '--tw-prose-invert-td-borders': 'var(--color-pink-700)',

						h1: {
							fontSize: '1.9rem',
							fontWeight: '800',
							color: '#4589b1',
							borderBottom: '2px solid',
							borderColor: 'currentColor',
							lineHeight: '1.5',
							margin: '1rem 0',
						},

						h2: {
							fontSize: '1.7rem',
							fontWeight: '700',
							color: '#a51eb9',
							margin: '0.5rem 0',
							lineHeight: '1.5',
						},

						h3: {
							fontSize: '1.5rem',
							fontWeight: '700',
							color: '#1b66d1',
							margin: '0.5rem 0',
							lineHeight: '1.5',
						},

						h4: {
							fontSize: '1.35rem',
							fontWeight: '500',
							color: '#d6a94c',
							margin: '0.5rem 0',
							lineHeight: '1.5',
						},

						h5: {
							fontSize: '1.2rem',
							fontWeight: '500',
							color: '#d32f2f',
							margin: '0.5rem 0',
							lineHeight: '1.5',
						},

						h6: {
							fontSize: '1.1rem',
							fontWeight: '400',
							color: '#666666',
							margin: '0.5rem 0',
							lineHeight: '1.5',
						},
						p: {
							lineHeight: '1.5',
							margin: '0.3rem 0',
							wordWrap: 'break-word',
						},

						// [!important] 등을 아이콘으로 교체하는 CSS 방법
						'p::before': {
							content: '""',
							marginRight: '0.25rem',
						},

						blockquote: {
							borderRadius: theme('borderRadius.xl'),
							backgroundColor: 'var(--color-purple-50)',
							padding: '1rem 2rem',
							borderLeft: '4px solid',
							borderColor: 'var(--color-purple-800)',
						},
						img: {
							borderRadius: theme('borderRadius.xl'),
						},
						pre: {
							paddingTop: '2rem',
							position: 'relative',
							overflowX: 'scroll',
						},
						'pre::-webkit-scrollbar': {
							height: '8px',
							display: 'block',
						},
						'pre::-webkit-scrollbar-thumb': {
							background: 'var(--color-neutral-500)',
							borderRadius: '4px',
						},

						// 언어별 아이콘 - 공통 스타일
						'pre[data-language]::before': {
							content: '""',
							position: 'absolute',
							top: '0.5rem',
							right: '0.5rem',
							zIndex: '10',
							display: 'inline-block',
							width: '1.25rem',
							height: '1.25rem',
						},

						// JavaScript
						'pre[data-language="js"]::before, pre[data-language="javascript"]::before': {
							content: '""',
							backgroundImage: 'url("/icons/Javascript.svg")',
						},

						// TypeScript
						'pre[data-language="ts"], pre[data-language="typescript"]::before': {
							content: '""',

							backgroundImage: 'url("/icons/Typescript.svg")',
						},

						// React
						'pre[data-language="jsx"], pre[data-language="tsx"]::before': {
							content: '""',
							backgroundImage: 'url("/icons/React.svg")',
						},

						// Python
						'pre[data-language="py"], pre[data-language="python"]::before': {
							content: '""',
							backgroundImage: 'url("/icons/Python.svg")',
						},
						// Java
						'pre[data-language="java"]::before': {
							content: '""',
							backgroundImage: 'url("/icons/Java.svg")',
						},
						// yaml
						'pre[data-language="yml"]::before, pre[data-language="yaml"]::before': {
							content: '""',
							backgroundImage: 'url("/icons/Yaml.svg")',
							backgroundColor: 'var(--color-muted)',
						},
						// json
						'pre[data-language="json"]::before': {
							content: '"json"',
							marginRight: '1.25rem',
							fontSize: '0.8rem',
						},
						// sh
						'pre[data-language="sh"]::before, pre[data-language="bash"]::before': {
							content: '"shell"',
							marginRight: '1.25rem',
							fontSize: '0.8rem',
						},
					},
				},

				invert: {
					css: {
						h1: { color: '#82c3ec' },
						h2: { color: '#d67df3' },
						h3: { color: '#74a9f8' },
						h4: { color: '#f0ca8d' },
						h5: { color: '#ff7b7b' },
						h6: { color: '#a0a0a0' },
						blockquote: {
							backgroundColor: 'var(--color-muted)',
							borderColor: 'var(--color-purple-400)',
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
};

export default tailwindConfig;
