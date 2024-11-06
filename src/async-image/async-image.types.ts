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

export interface AsyncImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string
	sources?: SourceProps[]
	rootMargin?: RootMargin
	error?: ReactElement
	loader?: ReactElement
	timeout?: TransitionProps['timeout']
	objectFit?: CSSProperties['objectFit']
	Transition?: ComponentType<TransitionProps>
}
