import type { CSSProperties, ReactElement, ImgHTMLAttributes } from 'react'

export type Style = CSSProperties & Required<Pick<CSSProperties, 'height' | 'width'>>
export interface AsyncImageProps
	extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {
	src: string
	rootMargin?: string
	error?: ReactElement
	loader?: ReactElement
	style: Style
}
