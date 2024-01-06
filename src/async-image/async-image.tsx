import type { FC } from 'react'
import { InView } from 'react-intersection-observer'
import { Placeholder, FallbackLoader, FallbackError } from './async-image.styles'
import type { AsyncImageProps } from './async-image.types'
import { Image } from './image'

export const AsyncImage: FC<AsyncImageProps> = ({
	loader = FallbackLoader,
	error = FallbackError,
	rootMargin = '600px 0px',
	objectFit = 'cover',
	style = {},
	className = '',
	...imageProps
}) => (
	<InView rootMargin={rootMargin} triggerOnce>
		{({ ref, inView }) => (
			<Placeholder ref={ref} className={className} style={style}>
				<Image
					error={error}
					loader={loader}
					objectFit={style.objectFit ?? objectFit}
					inView={inView}
					{...imageProps}
				/>
			</Placeholder>
		)}
	</InView>
)
