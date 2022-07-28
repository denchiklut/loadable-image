import { Fade } from 'transitions-kit'
import { type FC, cloneElement, CSSProperties } from 'react'
import { Status, useImage } from './image.hook'
import type { LazyProps } from './types'
import { absolute } from './styles'

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
	const { status } = useImage({
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
				<img
					alt={alt}
					src={src}
					srcSet={srcSet}
					style={{ ...absolute, objectFit } as CSSProperties}
				/>
			</Fade>
			<Fade in={status === Status.FAILED} timeout={1000} mountOnEnter unmountOnExit>
				{cloneElement(error, { style: absolute })}
			</Fade>
		</>
	)
}
