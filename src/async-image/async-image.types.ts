import type { CSSProperties, ReactElement, ImgHTMLAttributes, ComponentType } from 'react'
import type { TransitionProps } from 'transitions-kit'

type PX = `${number}px`
type RootMargin = `${PX} ${PX} ${PX} ${PX}` | `${PX} ${PX} ${PX}` | `${PX} ${PX}` | `${PX}`

interface BaseSource {
	width?: number
	height?: number
	media?: string
	sizes?: string
	type?: string
}
export type SourceProps =
	| (BaseSource & { src: string; srcSet?: never })
	| (BaseSource & { src?: never; srcSet: string })

export interface AsyncImageProps
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {
	src: string
	rootMargin?: RootMargin
	error?: ReactElement
	objectFit?: CSSProperties['objectFit']
	loader?: ReactElement
	Transition?: ComponentType<TransitionProps>
	sources?: Array<SourceProps>
	style?: CSSProperties
}
