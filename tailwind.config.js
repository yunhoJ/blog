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
						// '--tw-prose-quote-borders': 'var(--color-pink-900)',
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
						// '--tw-prose-invert-quote-borders': 'var(--color-pink-700)',
						// '--tw-prose-invert-captions': 'var(--color-pink-400)',
						// '--tw-prose-invert-code': 'var(--color-white)',
						// '--tw-prose-invert-pre-code': 'var(--color-pink-300)',
						// '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						// '--tw-prose-invert-th-borders': 'var(--color-pink-600)',
						// '--tw-prose-invert-td-borders': 'var(--color-pink-700)',

						h1: {
							fontSize: '1.75rem',
							fontWeight: '800',
							color: '#4589b1',
							borderBottom: '2px solid',
							borderColor: 'currentColor',
							lineHeight: '1.4',
							margin: '1rem 0',
						},

						h2: {
							fontSize: '1.6rem',
							fontWeight: '800',
							color: '#a51eb9',
							margin: '0.5rem 0',
							lineHeight: '1.4',
						},

						h3: {
							fontSize: '1.45rem',
							fontWeight: '700',
							color: '#1b66d1',
							margin: '0.5rem 0',
							lineHeight: '1.4',
						},

						h4: {
							fontSize: '1.4rem',
							fontWeight: '600',
							color: '#d6a94c',
							margin: '0.5rem 0',
							lineHeight: '1.4',
						},

						h5: {
							fontSize: '1.25rem',
							fontWeight: '600',
							color: '#d32f2f',
							margin: '0.5rem 0',
							lineHeight: '1.4',
						},

						h6: {
							fontSize: '1.1rem',
							fontWeight: '500',
							color: '#666666',
							margin: '0.5rem 0',
							lineHeight: '1.4',
						},
						p: {
							lineHeight: '1.5',
							margin: '0.3rem 0',
							wordWrap: 'break-word',
						},
						img: {
							borderRadius: theme('borderRadius.3xl'),
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
					},
				},
			}),
		},
	},
	plugins: [typography],
};

export default tailwindConfig;
