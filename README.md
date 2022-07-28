## loadable-image
React Component to lazy load images

## Installation
 ```npm i loadable-image```

## Usage example
##### Loader example

```jsx
import { AsyncImage } from 'loadable-image'

const Image = ({ src }) => (
    <AsyncImage
        src={src}
        style={{ ...css }}
        loader={<Skeleton animation='wave' />}
        error={<div style={{ ...css }} bgcolor='#eee' />}
    />
)
```

##### Blur example
```jsx
import { AsyncImage } from 'loadable-image'

const Image = ({ src, lowSrc, css }) => (
    <AsyncImage
        src={src}
        style={{ ...css }}
        loader={<img src={lowSrc} style={{ filter: 'blur(25px)'}} />}
        error={<div style={{ ...css }} bgcolor='#eee' />}
    />
)
```
