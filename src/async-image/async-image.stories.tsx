import { AsyncImage } from './index'
import { Template } from './docs'

export default {
	component: AsyncImage,
	title: 'Other/AsyncImage'
}

export const Basic = Template.bind({})
Basic.parameters = {
	docs: {
		source: {
			code: `
<AsyncImage
    src={src}
    style={{ ...css }}
    loader={<img src={lowSrc} style={{ filter: 'blur(25px)'}} />}
    error={<div style={{ ...css }} bgcolor='#eee' />}
/>`
		}
	}
}
