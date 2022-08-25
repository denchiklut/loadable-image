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
    sx={{ width: 200, height: 200 }}
    loader={<Loader />}
    error={<Error />}
/>`
		}
	}
}
