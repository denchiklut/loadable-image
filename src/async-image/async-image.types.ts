import type { CSSProperties, ReactElement, ImgHTMLAttributes, ComponentType } from 'react'
import type { TransitionProps } from 'transitions-kit'

type PX = `${number}px`
type RootMargin = `${PX} ${PX} ${PX} ${PX}` | `${PX} ${PX} ${PX}` | `${PX} ${PX}` | `${PX}`

export type Style = CSSProperties & Required<Pick<CSSProperties, 'height' | 'width'>>

export interface AsyncImageProps
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {
	src: string
	rootMargin?: RootMargin
	error?: ReactElement
	loader?: ReactElement
	Transition?: ComponentType<TransitionProps>
	sources?: Array<ReactElement>
	style: Style
}
