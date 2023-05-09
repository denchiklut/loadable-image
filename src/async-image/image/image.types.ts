import type { ReactElement, CSSProperties } from 'react'
import type { AsyncImageProps } from '../async-image.types'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

export type ImageProps = Omit<AsyncImageProps, 'rootMargin' | 'loader' | 'error' | 'style'> & {
	error: ReactElement
	loader: ReactElement
	objectFit?: CSSProperties['objectFit']
	inView: boolean
}
