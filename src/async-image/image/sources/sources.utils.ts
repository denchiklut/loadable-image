import type { SourceProps } from '../../async-image.types'

export const getKey = (p: SourceProps) => p.src ?? p.srcSet
