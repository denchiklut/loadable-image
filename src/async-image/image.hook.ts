import { useEffect, useState } from 'react'

export enum Status {
	LOADING,
	LOADED,
	FAILED
}

interface Props {
	src: string
	srcSet?: string
	crossOrigin?: string
	referrerPolicy?: string
	onLoad?: (event: Event) => void
	onError?: (error: string | Event) => void
}

export const useImage = ({ src, srcSet, crossOrigin, referrerPolicy, onLoad, onError }: Props) => {
	const [status, setStatus] = useState<Status>(Status.LOADING)

	useEffect(() => {
		if (status === Status.LOADING) {
			const img = new Image()

			img.onload = (event: Event) => {
				setStatus(Status.LOADED)
				onLoad?.(event)
			}
			img.onerror = (error: string | Event) => {
				setStatus(Status.FAILED)
				onError?.(error)
			}

			img.src = src
			if (srcSet) img.srcset = srcSet
			if (crossOrigin) img.crossOrigin = crossOrigin
			if (referrerPolicy) img.referrerPolicy = referrerPolicy
		}
	}, [status, src, srcSet])

	return { status }
}
