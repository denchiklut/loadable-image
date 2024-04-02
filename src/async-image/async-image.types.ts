import type {
	CSSProperties,
	ReactElement,
	ImgHTMLAttributes,
	ComponentType,
	SourceHTMLAttributes
} from 'react'
import type { TransitionProps } from 'transitions-kit'

type PX = `${number}px`
type RootMargin = `${PX} ${PX} ${PX} ${PX}` | `${PX} ${PX} ${PX}` | `${PX} ${PX}` | `${PX}`

export type SourceProps = Omit<SourceHTMLAttributes<HTMLSourceElement>, 'src'> & { srcSet: string }
export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'>

export interface AsyncImageProps extends ImageProps {
	src: string
	sources?: SourceProps[]
	rootMargin?: RootMargin
	error?: ReactElement
	loader?: ReactElement
	objectFit?: CSSProperties['objectFit']
	Transition?: ComponentType<TransitionProps>
}
