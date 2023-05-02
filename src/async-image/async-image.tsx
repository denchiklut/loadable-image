import { type FC, cloneElement } from 'react'
import { InView } from 'react-intersection-observer'
import { Placeholder, Fallback, absolute } from './async-image.styles'
import type { AsyncImageProps } from './async-image.types'
import { Lazy } from './lazy'

export const AsyncImage: FC<AsyncImageProps> = ({
	loader = Fallback,
	error = Fallback,
	rootMargin = '600px 0px',
	style,
	...props
}) => (
	<InView rootMargin={rootMargin} triggerOnce>
		{({ ref, inView }) => (
			<Placeholder ref={ref} style={style}>
				{inView ? (
					<Lazy loader={loader} error={error} objectFit={style.objectFit} {...props} />
				) : (
					cloneElement(loader, { style: absolute })
				)}
			</Placeholder>
		)}
	</InView>
)