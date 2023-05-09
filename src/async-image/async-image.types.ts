import type { CSSProperties, ReactElement, ImgHTMLAttributes } from 'react'

type PX = `${number}px`
type RootMargin = `${PX} ${PX} ${PX} ${PX}` | `${PX} ${PX} ${PX}` | `${PX} ${PX}` | `${PX}`

export type Style = CSSProperties & Required<Pick<CSSProperties, 'height' | 'width'>>

export interface AsyncImageProps
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {
	src: string
	rootMargin?: RootMargin
	error?: ReactElement
	loader?: ReactElement
	style: Style
}
