import type { StorybookConfig } from '@storybook/react-vite'

export default {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: ['@storybook/addon-links'],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
} satisfies StorybookConfig
