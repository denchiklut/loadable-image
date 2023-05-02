import type { Meta } from '@storybook/react'
import { AsyncImage as Image, AsyncImageProps } from 'loadable-image'
import loader from './images/thumbnail-loader.jpeg'
import image from './images/thumbnail.jpeg'

const AsyncImage = Image
AsyncImage.displayName = 'AsyncImage'

export default { component: AsyncImage } satisfies Meta<AsyncImageProps>

export const Blur = {
	args: {
		src: image,
		loader: <img src={loader} style={{ filter: 'blur(25px)' }} />,
		style: { width: 300, height: 300, borderRadius: 3 }
	}
}
