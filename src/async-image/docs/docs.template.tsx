import { useState } from 'react'
import { Fade } from 'transitions-kit'
import { Story } from '@storybook/react'
import { Image, Placeholder, absolute } from '../async-image.styles'
import { Blur, Stack, Card, Error, Title } from './docs.styles'
import { AsyncIMageProps } from '../async-image.types'

export const Template: Story<AsyncIMageProps> = () => {
	const [status, setStatus] = useState('loading')

	return (
		<Stack direction='row' style={{ gap: 20, alignItems: 'start' }}>
			<fieldset style={{ minWidth: 100 }}>
				<legend>STATE:</legend>

				<div>
					<label>
						<input
							type='radio'
							value='loaded'
							checked={status === 'loaded'}
							onChange={({ target }) => setStatus(target.value)}
						/>
						Loaded
					</label>
				</div>

				<div>
					<label>
						<input
							type='radio'
							value='loading'
							checked={status === 'loading'}
							onChange={({ target }) => setStatus(target.value)}
						/>
						Loading
					</label>
				</div>

				<div>
					<label>
						<input
							type='radio'
							value='failed'
							checked={status === 'failed'}
							onChange={({ target }) => setStatus(target.value)}
						/>
						Failed
					</label>
				</div>
			</fieldset>

			<Card style={{ width: 250 }}>
				<Title>{status}</Title>
				<Placeholder style={{ width: 250, height: 250 }}>
					<Fade appear={false} in={status === 'loading'} timeout={1000} unmountOnExit>
						<Blur src='https://artist-dev.s3.amazonaws.com/4cbf2f96-926e-46d2-b2ef-1af6942b1a49/thumbnail320x320_loader.jpeg' />
					</Fade>

					<Fade in={status === 'loaded'} timeout={1000}>
						<Image
							src='https://artist-dev.s3.amazonaws.com/4cbf2f96-926e-46d2-b2ef-1af6942b1a49/thumbnail320x320.jpeg'
							objectFit='cover'
						/>
					</Fade>

					<Fade in={status === 'failed'} timeout={1000} mountOnEnter unmountOnExit>
						<Error style={absolute}>
							<p>broken image</p>
						</Error>
					</Fade>
				</Placeholder>
			</Card>
		</Stack>
	)
}
