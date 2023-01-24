import type { CSSProperties, ReactElement } from 'react'

export interface AsyncImageProps {
	src: string
	alt?: string
	srcSet?: string
	objectFit?: CSSProperties['objectFit']
	rootMargin?: string
	error?: JSX.Element
	crossOrigin?: string
	loader?: ReactElement
	style?: CSSProperties
	referrerPolicy?: string
	onLoad?: (event: Event) => void
	onError?: (error: string | Event) => void
}
