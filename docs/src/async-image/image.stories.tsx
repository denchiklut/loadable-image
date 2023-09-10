import type { Meta, StoryObj } from '@storybook/react'
import { AsyncImage as Image, AsyncImageProps } from 'loadable-image'
import loader from './images/thumbnail-loader.jpeg'
import imageJpeg from './images/thumbnail.jpeg'
import imageWebp from './images/thumbnail.webp'

const AsyncImage = Image
AsyncImage.displayName = 'AsyncImage'

export default {
	component: AsyncImage,
	argTypes: {
		src: { type: 'string', description: 'Image source.' },
		sources: { description: 'Array of `source` objects.' },
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
		src: imageJpeg,
		loader: <img src={loader} style={{ filter: 'blur(25px)' }} />,
		style: { width: 300, height: 300, borderRadius: 3 }
	}
}

export const WebP: StoryObj<AsyncImageProps> = {
	args: {
		src: imageJpeg,
		sources: [{ type: 'image/webp', srcSet: imageWebp }],
		style: { width: 300, height: 300, borderRadius: 3 }
	}
}
