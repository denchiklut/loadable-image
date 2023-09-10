import type { FC } from 'react'
import type { SourceProps } from '../../async-image.types'
import { getKey } from './sources.utils'

interface Props {
	sources: SourceProps[]
}
export const Sources: FC<Props> = ({ sources = [] }) => {
	if (!sources.length) return null

	return (
		<>
			{sources.map(props => (
				<source key={getKey(props)} {...props} />
			))}
		</>
	)
}
