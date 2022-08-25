import { Fade } from 'transitions-kit'
import { type FC, cloneElement } from 'react'
import { Image, absolute } from '../async-image.styles'
import { Status, type LazyProps } from './lazy.types'
import { useLazy } from './lazy.hooks'

export const Lazy: FC<LazyProps> = ({
	src,
	alt,
	error,
	srcSet,
	onLoad,
	loader,
	onError,
	crossOrigin,
	referrerPolicy,
	objectFit = 'cover'
}) => {
	const { status } = useLazy({
		src,
		srcSet,
		crossOrigin,
		referrerPolicy,
		onLoad,
		onError
	})

	return (
		<>
			<Fade in={status === Status.LOADING} timeout={1000} unmountOnExit>
				{cloneElement(loader, { style: absolute })}
			</Fade>
			<Fade in={status === Status.LOADED} timeout={1000}>
				<Image
					data-testid='loaded-image'
					src={src}
					srcSet={srcSet}
					objectFit={objectFit}
					alt={alt}
				/>
			</Fade>
			<Fade in={status === Status.FAILED} timeout={1000} mountOnEnter unmountOnExit>
				{cloneElement(error, { style: absolute })}
			</Fade>
		</>
	)
}
