import { CSSProperties, ReactNode, Ref, forwardRef } from 'react'

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
			boxSizing: 'border-box',
			backgroundSize: 'cover',
			position: 'relative',
			...style
		}}
		ref={ref as Ref<HTMLDivElement>}
	>
		{children}
	</div>
))

export const absolute: CSSProperties = {
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	position: 'absolute',
	boxSizing: 'border-box'
}

export const Fallback = <div style={{ ...absolute, backgroundColor: '#eee' }}></div>
