import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// 프리즈마 관련 파일들을 가장 먼저 무시
	{
		ignores: ['lib/generated/**/*', 'prisma/**/*'],
	},
	js.configs.recommended,
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			// 여기에 추가적인 규칙을 설정할 수 있습니다
			'no-unused-vars': 'warn',
			'no-console': 'warn',
		},
	},
	eslintConfigPrettier,
];

export default eslintConfig;
