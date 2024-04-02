import type { FC } from 'react'
import type { SourceProps } from '../../async-image.types'

interface Props {
	sources: SourceProps[]
}
export const Sources: FC<Props> = ({ sources = [] }) => {
	if (!sources.length) return null

	return (
		<>
			{sources.map((props, idx) => (
				<source key={props.srcSet} {...props} />
			))}
		</>
	)
}
