import type { CSSProperties, ReactElement } from 'react'

export type Style = CSSProperties & Required<Pick<CSSProperties, 'height' | 'width'>>
export interface AsyncImageProps {
	src: string
	alt?: string
	srcSet?: string
	rootMargin?: string
	error?: ReactElement
	crossOrigin?: string
	loader?: ReactElement
	style: Style
	referrerPolicy?: string
	onLoad?: (event: Event) => void
	onError?: (error: string | Event) => void
}
