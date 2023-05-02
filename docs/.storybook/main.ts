import type { StorybookConfig } from '@storybook/react-webpack5'

export default {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	}
} satisfies StorybookConfig
