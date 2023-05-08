import type { CSSProperties } from 'react'
import type { AsyncImageProps } from '../async-image.types'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

export type ImageProps = Omit<AsyncImageProps, 'rootMargin' | 'loader' | 'error' | 'style'> & {
	error: JSX.Element
	loader: JSX.Element
	objectFit?: CSSProperties['objectFit']
}
