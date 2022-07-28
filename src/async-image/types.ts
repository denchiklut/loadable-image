import type { CSSProperties, ReactElement } from 'react'

export interface AsyncIMageProps {
	src: string
	alt?: string
	srcSet?: string
	objectFit?: string
	rootMargin?: string
	error?: JSX.Element
	crossOrigin?: string
	loader?: ReactElement
	style?: CSSProperties
	referrerPolicy?: string
	onLoad?: (event: Event) => void
	onError?: (error: string | Event) => void
}

export type LazyProps = Omit<AsyncIMageProps, 'rootMargin' | 'loader' | 'error'> & {
	error: JSX.Element
	loader: JSX.Element
}
