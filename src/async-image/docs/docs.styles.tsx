import { CSSProperties } from 'react'

export const Card = ({ children, style }: { style?: CSSProperties; children: JSX.Element[] }) => (
	<div
		style={{
			minWidth: 250,
			borderRadius: '3px',
			boxShadow: '0 1px 6px 0 rgb(0 0 0 / 20%)',
			overflow: 'hidden',
			background: '#eee',
			...style
		}}
	>
		{children}
	</div>
)

export const Title = (props: { children: string }) => (
	<p
		style={{
			background: '#222',
			color: 'white',
			textAlign: 'center',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			boxShadow: '0 1px 6px 0 rgb(0 0 0 / 20%)',
			padding: '8px',
			margin: 0
		}}
		{...props}
	/>
)
export const Blur = (pops: { src: string }) => (
	<img
		alt='...'
		{...pops}
		style={{
			backgroundColor: '#eee',
			objectFit: 'cover',
			filter: 'blur(25px)',
			transform: 'scale(1)'
		}}
	/>
)

export const Error = ({ children, style }: { style?: CSSProperties; children: JSX.Element }) => (
	<div
		style={{
			background: '#bbb',
			color: 'white',
			display: 'grid',
			width: '100%',
			placeContent: 'center',
			...style
		}}
	>
		{children}
	</div>
)

export const Stack = ({
	direction,
	style,
	children
}: {
	style?: CSSProperties
	direction?: 'column' | 'row'
	children: JSX.Element[]
}) => (
	<div
		style={{
			display: 'flex',
			flexDirection: direction,
			...style
		}}
	>
		{children}
	</div>
)
