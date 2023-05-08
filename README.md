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

## Usage example

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

## Props
| Property       | Type                                                                                            | Description                                                                                |
|----------------|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| src            | `string`                                                                                        | Image source                                                                               |
| style          | `CSSProperties` object with required `width` & `height`                                         | CSSStyleDeclaration object                                                                 |
| rootMargin     | `string` by default: `'600px 0px'`                                                              | Margin around the root. Specifies when to trigger an image download.                       |
| loader         | `JSX.Element`                                                                                   | React element to display a `loading` state.                                                |
| error          | `JSX.Element`                                                                                   | React element to display an `error` state.                                                 |
| alt            | `string`                                                                                        | Specifies an alternate text for an image.                                                  |
| srcSet         | `string`                                                                                        | Comma separated list of possible image sources for the user agent  to use                  |
| crossorigin    | `anonymous`, `use-credentials`                                                                  | Allow images from third-party sites that allow cross-origin access to be used with canvas. |
| referrerpolicy | `no-referrer`, `no-referrer-when-downgrade`, `origin`, `origin-when-cross-origin`, `unsafe-url` | Specifies which referrer information to use when fetching an image.                        |
| onLoad         | `(event: Event) => void`                                                                        | A callback function fires when the image resource is loaded.                               |
| onError        | `(event: string \| Event) => void`                                                              | A callback function fires when an error occurs while attempting to load the image.         | 
