## loadable-image
React Component to lazy load images.

### See the  [demo](https://denchiklut.github.io/loadable-image)
#### Default example

#### Blur example
<img width="200px" src="https://github.com/denchiklut/loadable-image/blob/main/public/demo.gif?raw=true"/><img width="200px" src="https://github.com/denchiklut/loadable-image/blob/main/public/loaded.gif?raw=true"/><img width="200px" src="https://github.com/denchiklut/loadable-image/blob/main/public/failed.gif?raw=true"/>
## Installation
 ```
 npm i loadable-image
 ```
Or via yarn
```
yarn add loadable-image
```

### Usage example

```jsx
import { AsyncImage } from 'loadable-image'

const Image = ({ src, lowSrc }) => (
  <AsyncImage
    src={src}
    style={{ width: 100, height: 100 }}
    loader={<img src={lowSrc} style={{ filter: 'blur(25px)'}} />}
    error={<div style={{ background:'#eee' }}  />}
  />
)
```

### Props
`<AsyncImage />` accepts all standard props for `HtmlImageElement` and the following:

| Property   | Type                                                    | Description                                                                                |
|------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------|
| style      | `CSSProperties` object with required `width` & `height` | CSSStyleDeclaration object                                                                 |
| rootMargin | `string` by default: `'600px 0px'`                      | Margin around the root. Specifies when to trigger an image download.                       |
| loader     | `ReactElement`                                          | React element to display a `loading` state.                                                |
| error      | `ReactElement`                                          | React element to display an `error` state.                                                 |
