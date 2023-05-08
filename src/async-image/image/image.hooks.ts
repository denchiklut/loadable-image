import { useEffect, useState } from 'react'
import { Status } from './image.types'

interface Props {
	src: string
	srcSet?: string
	crossOrigin?: string
	referrerPolicy?: string
	onLoad?: (event: Event) => void
	onError?: (error: string | Event) => void
	inView: boolean
}

export const useImage = ({
	inView,
	src,
	srcSet,
	crossOrigin,
	referrerPolicy,
	onLoad,
	onError
}: Props) => {
	const [status, setStatus] = useState(Status.LOADING)

	useEffect(() => {
		if (status === Status.LOADING && inView) {
			const img = new Image()

			img.onload = event => {
				setStatus(Status.LOADED)
				onLoad?.(event)
			}

			img.onerror = event => {
				setStatus(Status.FAILED)
				onError?.(event)
			}

			img.src = src
			if (srcSet) img.srcset = srcSet
			if (crossOrigin) img.crossOrigin = crossOrigin
			if (referrerPolicy) img.referrerPolicy = referrerPolicy
		}
	}, [status, src, srcSet, inView])

	return { status }
}
