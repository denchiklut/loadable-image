import { Fade } from 'transitions-kit'
import { type FC, cloneElement } from 'react'
import { absolute } from '../async-image.styles'
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
			<Fade appear={false} in={status === Status.LOADING} timeout={1000} unmountOnExit>
				{cloneElement(loader, { style: { ...loader.props.style, ...absolute } })}
			</Fade>
			<Fade in={status === Status.LOADED} timeout={1000}>
				<img
					src={src}
					srcSet={srcSet}
					data-testid='loaded-image'
					style={{ objectFit, ...absolute }}
					alt={alt}
				/>
			</Fade>
			<Fade in={status === Status.FAILED} timeout={1000} mountOnEnter unmountOnExit>
				{cloneElement(error, { style: { ...error.props.style, ...absolute } })}
			</Fade>
		</>
	)
}
