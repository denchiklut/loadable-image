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

## Usage examples
`<AsyncImage />` accepts all props of `<img />` tag.
The only requirement is to specify `width` and `height` of the image in **`style`** prop.
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

## Custom Transitions
Under the hood `AsyncImage` uses [transitions-kit](https://github.com/denchiklut/transitions-kit) library
it's a collection Transition components built on top of [react-transition-group](https://github.com/reactjs/react-transition-group) its a small library maintained by **React** team for animating between different views.
You can pass your own `Transition` as a prop to `AsyncImage` component.

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

### Blur transition
Here is how you can use `Blur` transition and specify custom `radius` of the blur.
```tsx
import { Blur } from 'transitions-kit'
import { AsyncImage } from 'loadable-image'
...
<AsyncImage
  src='https://picsum.photos/1900'
  style={{ width: 150, height: 150 }}
  Transition={props => <Blur radius={10} {...props}/>}
  loader={<div style={{ background: '#888' }}/>}
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

| Property   | Type                                                    | Description                                                                                                                     |
|------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| style      | `CSSProperties` object with required `width` & `height` | CSSStyleDeclaration object                                                                                                      |
| rootMargin | `string` by default: `'600px 0px'`                      | Margin around the root. Specifies when to trigger an image download.                                                            |
| loader     | `ReactElement`                                          | React element to display a `loading` state.                                                                                     |
| error      | `ReactElement`                                          | React element to display an `error` state.                                                                                      |
| sources    | `ReactElement`                                          | An array of `<source />` elements.                                                                                              |
| Transition | `ComponentType<TransitionProps>`                        | Custom Transition component. Check out [transitions-kit](https://github.com/denchiklut/transitions-kit)'s predefined components |
