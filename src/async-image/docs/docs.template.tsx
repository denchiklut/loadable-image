import { useState } from 'react'
import { Fade } from 'transitions-kit'
import { Story } from '@storybook/react'
import { Blur, Stack, Card, Error, Title } from './docs.styles'
import { Image, Placeholder, absolute } from '../async-image.styles'
import { AsyncIMageProps } from '../async-image.types'
import loader from './images/thumbnail-loader.jpeg'
import image from './images/thumbnail.jpeg'

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
						<Blur src={loader} />
					</Fade>

					<Fade in={status === 'loaded'} timeout={1000}>
						<Image src={image} objectFit='cover' />
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
