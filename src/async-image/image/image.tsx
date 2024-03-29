import { Fade } from 'transitions-kit'
import { type FC, cloneElement, useState } from 'react'
import { Status, type ImageProps } from './image.types'
import { absolute } from '../async-image.styles'
import { Sources } from './sources'

export const Image: FC<ImageProps> = ({
	error,
	loader,
	onLoad,
	onError,
	objectFit = 'cover',
	Transition = Fade,
	sources = [],
	inView,
	...imageProps
}) => {
	const [status, setStatus] = useState(Status.LOADING)

	return (
		<>
			<Fade appear={false} in={status === Status.LOADING} timeout={1000} unmountOnExit>
				{cloneElement(loader, { style: { ...loader.props.style, ...absolute } })}
			</Fade>
			{inView && (
				<Transition in={status === Status.LOADED} timeout={1000}>
					<picture style={absolute}>
						<Sources sources={sources} />

						<img
							{...imageProps}
							className='AsyncImage-image'
							style={{ objectFit, ...absolute }}
							onLoad={event => {
								setStatus(Status.LOADED)
								onLoad?.(event)
							}}
							onError={event => {
								setStatus(Status.FAILED)
								onError?.(event)
							}}
						/>
					</picture>
				</Transition>
			)}
			<Fade in={status === Status.FAILED} timeout={1000} mountOnEnter unmountOnExit>
				{cloneElement(error, { style: { ...error.props.style, ...absolute } })}
			</Fade>
		</>
	)
}
