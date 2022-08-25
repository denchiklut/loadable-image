import { AsyncIMageProps } from '../async-image.types'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

export type LazyProps = Omit<AsyncIMageProps, 'rootMargin' | 'loader' | 'error'> & {
	error: JSX.Element
	loader: JSX.Element
}
