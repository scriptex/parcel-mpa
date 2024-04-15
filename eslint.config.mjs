import compat from 'eslint-plugin-compat';
import prettier from 'eslint-config-prettier';
import tsEsLint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
	{
		files: ['./src/scripts/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: 'tsconfig.json',
				sourceType: 'module'
			}
		},
		plugins: {
			compat,
			prettier,
			tsEsLint
		},
		rules: {
			'no-console': 'error'
		}
	}
];
