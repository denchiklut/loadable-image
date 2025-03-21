## loadable-image

[![NPM Version](https://img.shields.io/npm/v/loadable-image)](https://www.npmjs.com/package/loadable-image)
[![storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://denchiklut.github.io/loadable-image)
[![NPM Downloads](https://img.shields.io/npm/dw/loadable-image)](https://www.npmjs.com/package/loadable-image)
[![GitHub Repo stars](https://img.shields.io/github/stars/denchiklut/loadable-image)](https://github.com/denchiklut/loadable-image)


<img src="https://github.com/denchiklut/loadable-image/blob/main/public/cover.jpg?raw=true" alt="..." /> React Component to lazy load images.

[![Edit loadable-image](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/loadable-image-ci4440?fontsize=14&hidenavigation=1&theme=dark)

## Installation
 ```
 npm i loadable-image
 ```
Or via yarn
```
yarn add loadable-image
```

## Usage examples
`<AsyncImage />` accepts all props of `<img />` tag.
```tsx
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: 150, height: 150 }}
/>
```

### Custom `Loader`/`Error`
You can pass your own `loader` and `error` components as props to `AsyncImage` component.
```tsx
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: 150, height: 150 }}
  loader={<div style={{ background: '#888' }}/>}
  error={<div style={{ background: '#eee' }}/>}
/>
```

### Modern formats (WebP, Avif) with fallback
Since under the hood `<AsyncImage />` is just a `picture` element. You can pass an array of different `Sources` as a prop. And browser will pick the first one that it supports.
```tsx
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src="./image.jpg"
  sources={[ 
      { type:"image/avif",  srcSet:"./image.avif" }, 
      { type:"image/webp",  srcSet:"./image.webp" } 
  ]}
  style={{ width: 200, height: 200 }}
/>
```

### Responsive image
To make image responsive you can use `aspectRatio` property in `style` prop. This way you can specify only `width` or `height` as `100%` and the other one as `auto`.
Note that if you support older browsers you might need to use `aspectRatio` [padding-hack](https://nikitahl.com/css-aspect-ratio).
```tsx
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: "100%", height: "auto", aspectRatio: 16 / 9 }}
/>
```

## Custom Transitions
Under the hood `AsyncImage` uses [transitions-kit](https://github.com/denchiklut/transitions-kit) library
it's a collection Transition components built on top of [react-transition-group](https://github.com/reactjs/react-transition-group) its a small library maintained by **React** team for animating between different views.
You can pass your own `Transition` as a prop to `AsyncImage` component.

### Blur transition
Here’s how you can implement a `Blur` transition that replaces a `low-resolution image` with a `high-resolution` one
```tsx
import { Blur } from 'transitions-kit'
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='./original-image.jpg'
  style={{ width: 150, height: 150 }}
  Transition={props => <Blur radius={10} {...props}/>}
  loader={<img src='./extra-small-1x1.jpg' />}
/>
```

### Fade transition
By default `AsyncImage` uses `Fade` transition.
```tsx
import { Fade } from 'transitions-kit'
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: 150, height: 150 }}
  loader={<div style={{ background: '#888' }}/>}
  Transition={Fade}
/>
```

### Other transitions
There are plenty different already predefined Transition components such as `Grow`, `Zoom`, `Slide`, `Blur`, `Fade` etc. in [transitions-kit](https://github.com/denchiklut/transitions-kit).
Feel free to try any of them. 
```tsx
import { Grow } from 'transitions-kit'
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: 150, height: 150 }}
  loader={<div style={{ background: '#888' }}/>}
  Transition={Grow}
/>
```


### Props
`<AsyncImage />` accepts all standard props for `HtmlImageElement` and the following:

| Property   | Type                               | Description                                                                                                                             |
|------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| className  | `String`                           | NOTE: CSS from `style` object has a higher priority                                                                                     |
| style      | `CSSProperties`                    | CSSStyleDeclaration object                                                                                                              |
| rootMargin | `string` by default: `'600px 0px'` | Margin around the root. Specifies when to trigger an image download.                                                                    |
| loader     | `ReactElement`                     | React element to display a `loading` state.                                                                                             |
| error      | `ReactElement`                     | React element to display an `error` state.                                                                                              |
| sources    | `Array<SourceProps>`               | An array of `options` for `<source />` element.                                                                                         |
| timeout    | `Number` or `Object`               | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |
| Transition | `ComponentType<TransitionProps>`   | Custom Transition component. Check out [transitions-kit](https://github.com/denchiklut/transitions-kit)'s predefined components         |

### Requirements for loader & error props:
- Forward the ref: The transition components require the first child element to forward its ref to the DOM node. This is usually done with React.forwardRef.
- Single element: The transition components require only one child element (React.Fragment is not allowed).
