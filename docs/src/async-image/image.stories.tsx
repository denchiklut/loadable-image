import type { Meta, StoryObj } from '@storybook/react'
import { AsyncImage as Image, AsyncImageProps } from 'loadable-image'
import loader from './images/thumbnail-loader.jpeg'
import image from './images/thumbnail.jpeg'

const AsyncImage = Image
AsyncImage.displayName = 'AsyncImage'

export default {
	component: AsyncImage,
	argTypes: {
		src: { type: 'string', description: 'Image source.' },
		style: { description: 'CSSStyleDeclaration object with required: `width` & `height`' },
		rootMargin: {
			type: 'string',
			table: { defaultValue: { summary: '600px 0px' } },
			description: 'Margin around the root. Specifies when to trigger an image download.'
		},
		loader: {
			defaultValue: <div style={{ background: '#eee' }} />,
			description: 'React element to display a `loading` state.'
		},
		error: {
			defaultValue: <div style={{ background: '#eee' }} />,
			description: 'React element to display an `error` state.'
		}
	}
} satisfies Meta<AsyncImageProps>

export const Blur: StoryObj<AsyncImageProps> = {
	args: {
		src: image,
		loader: <img src={loader} style={{ filter: 'blur(25px)' }} />,
		style: { width: 300, height: 300, borderRadius: 3 }
	}
}
