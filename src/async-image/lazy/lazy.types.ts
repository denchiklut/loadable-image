import type { CSSProperties } from 'react'
import type { AsyncImageProps } from '../async-image.types'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

export type LazyProps = Omit<AsyncImageProps, 'rootMargin' | 'loader' | 'error' | 'style'> & {
	error: JSX.Element
	loader: JSX.Element
	objectFit?: CSSProperties['objectFit']
}
