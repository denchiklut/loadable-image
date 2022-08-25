import { type FC, cloneElement } from 'react'
import { InView } from 'react-intersection-observer'
import { Placeholder, Fallback, absolute } from './async-image.styles'
import type { AsyncIMageProps } from './async-image.types'
import { Lazy } from './lazy'

export const AsyncImage: FC<AsyncIMageProps> = ({
	style,
	loader = Fallback,
	error = Fallback,
	rootMargin = '600px 0px',
	...props
}) => (
	<InView rootMargin={rootMargin} triggerOnce>
		{({ ref, inView }) => (
			<Placeholder ref={ref} style={style}>
				{inView ? (
					<Lazy {...props} error={error} loader={loader} />
				) : (
					cloneElement(loader, { style: absolute })
				)}
			</Placeholder>
		)}
	</InView>
)
