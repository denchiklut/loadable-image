import { CSSProperties, ForwardedRef, ReactNode, Ref, forwardRef } from 'react'

export const absolute: CSSProperties = {
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	position: 'absolute',
	boxSizing: 'border-box'
}

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

export const Blur = forwardRef((pops: { src: string }, ref: ForwardedRef<HTMLImageElement>) => (
	<img
		alt='...'
		{...pops}
		ref={ref}
		style={{
			...absolute,
			backgroundColor: '#eee',
			objectFit: 'cover',
			filter: 'blur(20px)',
			transform: 'scale(1)'
		}}
	/>
))

export const Error = forwardRef(
	(
		{ children, style }: { style?: CSSProperties; children: JSX.Element },
		ref: ForwardedRef<HTMLDivElement>
	) => (
		<div
			ref={ref}
			style={{
				color: 'white',
				width: '100%',
				display: 'grid',
				background: '#bbb',
				placeContent: 'center',
				...style
			}}
		>
			{children}
		</div>
	)
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
