import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'

export default [
	{
		ignores: ['**/node_modules', '**/dist', '**/webpack']
	},
	{
		files: ['*.ts', '*.tsx'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			prettier,
			react
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest
			},
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
]
