import { Fade } from 'transitions-kit'
import { type FC, cloneElement } from 'react'
import { absolute } from '../async-image.styles'
import { Status, type ImageProps } from './image.types'
import { useImage } from './image.hooks'

export const Image: FC<ImageProps> = ({
	src,
	alt,
	error,
	srcSet,
	onLoad,
	loader,
	onError,
	crossOrigin,
	referrerPolicy,
	objectFit = 'cover',
	inView
}) => {
	const { status } = useImage({
		src,
		srcSet,
		crossOrigin,
		referrerPolicy,
		onLoad,
		onError,
		inView
	})

	return (
		<>
			<Fade appear={false} in={status === Status.LOADING} timeout={1000} unmountOnExit>
				{cloneElement(loader, { style: { ...loader.props.style, ...absolute } })}
			</Fade>
			{inView && (
				<Fade in={status === Status.LOADED} timeout={1000}>
					<img
						src={src}
						srcSet={srcSet}
						data-testid='loaded-image'
						style={{ objectFit, ...absolute }}
						alt={alt}
					/>
				</Fade>
			)}
			<Fade in={status === Status.FAILED} timeout={1000} mountOnEnter unmountOnExit>
				{cloneElement(error, { style: { ...error.props.style, ...absolute } })}
			</Fade>
		</>
	)
}
