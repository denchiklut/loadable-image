import { useState } from 'react'
import { Fade } from 'transitions-kit'
import { Story } from '@storybook/react'
import { Blur, Stack, Card, Error, Title, Placeholder, absolute } from './styles'
import { AsyncIMageProps } from 'loadable-image'
import loader from './images/thumbnail-loader.jpeg'
import image from './images/thumbnail.jpeg'

export const Template: Story<AsyncIMageProps> = () => {
	const [status, setStatus] = useState('loading')

	return (
		<Stack direction='row' style={{ gap: 20, alignItems: 'start' }}>
			<fieldset
				style={{
					gap: 8,
					minWidth: 130,
					borderRadius: 4,
					outline: 'none',
					border: '1px solid #808080',
					display: 'grid',
					padding: 12
				}}
			>
				<legend>STATE:</legend>

				<label style={{ cursor: 'pointer' }}>
					<input
						type='radio'
						value='loaded'
						checked={status === 'loaded'}
						onChange={({ target }) => setStatus(target.value)}
					/>
					Loaded
				</label>

				<label style={{ cursor: 'pointer' }}>
					<input
						type='radio'
						value='loading'
						checked={status === 'loading'}
						onChange={({ target }) => setStatus(target.value)}
					/>
					Loading
				</label>

				<label style={{ cursor: 'pointer' }}>
					<input
						type='radio'
						value='failed'
						checked={status === 'failed'}
						onChange={({ target }) => setStatus(target.value)}
					/>
					Failed
				</label>
			</fieldset>

			<Card style={{ width: 250 }}>
				<Title>{status}</Title>
				<Placeholder style={{ width: 250, height: 250 }}>
					<Fade appear={false} in={status === 'loading'} timeout={1000} unmountOnExit>
						<Blur src={loader} />
					</Fade>

					<Fade in={status === 'loaded'} timeout={1000}>
						<img
							src={image}
							data-testid='loaded-image'
							style={{ objectFit: 'cover', ...absolute }}
						/>
					</Fade>

					<Fade in={status === 'failed'} timeout={1000} mountOnEnter unmountOnExit>
						<Error style={absolute}>
							<span
								className='material-symbols-rounded'
								style={{ fontSize: 108, color: 'whitesmoke' }}
							>
								image_not_supported
							</span>
						</Error>
					</Fade>
				</Placeholder>
			</Card>
		</Stack>
	)
}
