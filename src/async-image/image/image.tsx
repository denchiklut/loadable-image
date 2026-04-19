import { type CSSProperties, cloneElement, type FC, type ReactElement, useState } from 'react'
import { Fade } from 'transitions-kit'

import { absolute } from '../async-image.styles'
import { type ImageProps, Status } from './image.types'

type WithStyle = { style?: CSSProperties }

export const Image: FC<ImageProps> = ({
	error,
	loader,
	onLoad,
	onError,
	objectFit = 'cover',
	Transition = Fade,
	timeout = 1000,
	sources = [],
	inView,
	...imageProps
}) => {
	const [status, setStatus] = useState(Status.LOADING)

	return (
		<>
			<Fade appear={false} in={status === Status.LOADING} timeout={timeout} unmountOnExit>
				{cloneElement(loader as ReactElement<WithStyle>, {
					style: { ...(loader as ReactElement<WithStyle>).props.style, ...absolute }
				})}
			</Fade>
			{inView && (
				<Transition in={status === Status.LOADED} timeout={timeout}>
					<picture style={absolute}>
						{sources.map(sp => (
							<source key={sp.srcSet} {...sp} />
						))}

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
			<Transition in={status === Status.FAILED} timeout={timeout} mountOnEnter unmountOnExit>
				{cloneElement(error as ReactElement<WithStyle>, {
					style: { ...(error as ReactElement<WithStyle>).props.style, ...absolute }
				})}
			</Transition>
		</>
	)
}
