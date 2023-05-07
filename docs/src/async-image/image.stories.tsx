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
		style: { description: 'CSSStyleDeclaration object.' },
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
		},
		alt: { type: 'string', description: 'Specifies an alternate text for an image.' },
		srcSet: {
			type: 'string',
			description: 'Comma separated list of possible image sources for the user agent  to use'
		},
		crossOrigin: {
			type: 'string',
			description:
				'Allow images from third-party sites that allow cross-origin access to be used with canvas.'
		},
		referrerPolicy: {
			type: 'string',
			description: 'Specifies which referrer information to use when fetching an image.'
		},
		onLoad: {
			type: 'function',
			description: 'A callback function fires when the image resource is loaded.'
		},
		onError: {
			type: 'function',
			description:
				'A callback function fires when an error occurs while attempting to load the image.'
		}
	}
} satisfies Meta<AsyncImageProps>

export const Blur: StoryObj<AsyncImageProps> = {
	args: {
		src: image,
		onLoad: undefined,
		onError: undefined,
		loader: <img src={loader} style={{ filter: 'blur(25px)' }} />,
		style: { width: 300, height: 300, borderRadius: 3 }
	}
}
