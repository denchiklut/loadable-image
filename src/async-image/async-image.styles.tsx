import { CSSProperties, ReactNode, MutableRefObject, forwardRef } from 'react'

interface Props {
	style?: CSSProperties
	children?: ReactNode
}

export const Placeholder = forwardRef(({ children, style }: Props, ref) => (
	<div
		style={{
			width: '100%',
			height: '100%',
			display: 'flex',
			overflow: 'hidden',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			position: 'relative',
			...style
		}}
		ref={ref as MutableRefObject<HTMLDivElement>}
	>
		{children}
	</div>
))

export const absolute: CSSProperties = {
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	position: 'absolute'
}

export const Image = ({
	objectFit = 'cover',
	...props
}: {
	src: string
	srcSet?: string
	alt?: string
	objectFit?: CSSProperties['objectFit']
}) => <img style={{ ...absolute, objectFit }} {...props} />

export const Fallback = <div style={{ ...absolute, backgroundColor: '#eee' }}></div>
