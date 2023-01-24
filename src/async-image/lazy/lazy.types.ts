import { AsyncImageProps } from '../async-image.types'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

export type LazyProps = Omit<AsyncImageProps, 'rootMargin' | 'loader' | 'error'> & {
	error: JSX.Element
	loader: JSX.Element
}
