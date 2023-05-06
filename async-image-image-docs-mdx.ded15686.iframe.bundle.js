"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[806],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/async-image/image.docs.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>image_docs});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),index_esm=__webpack_require__("./node_modules/loadable-image/dist/index.esm.js"),image_stories=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs"),__webpack_require__("./src/async-image/image.stories.tsx"));const image_docs=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",p:"p",div:"div",pre:"pre",code:"code",h2:"h2"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"LoadableImage",of:image_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"demo",children:"Demo"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Try to scroll down and see images start loading. You can also try to disconnect from the internet and see how error image is shown."}),"\n",(0,jsx_runtime.jsx)("div",{style:{gap:4,padding:4,borderRadius:4,display:"grid",justifyContent:"start",gridTemplateColumns:"auto auto",background:"#262626",border:"1px solid",overflow:"scroll",height:450},children:Array.from({length:30},((value,index)=>index)).map((i=>(0,jsx_runtime.jsx)(index_esm.b,{src:[6,11].includes(i)?"badURL":"https://picsum.photos/"+(i<10?"86"+i:"6"+i),style:{width:200,height:200,borderRadius:3},loader:(0,jsx_runtime.jsx)(_components.div,{style:{background:"#888"}})})))}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { AsyncImage } from 'loadable-image'\n...\n<AsyncImage\n  src='https://picsum.photos/1900'\n  style={{ width: 150, height: 150 }}\n  loader={<div style={{ background: '#888' }}/>}\n/>\n\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"blur-effect",children:"Blur effect"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To achieve blur effect you can use smaller image as a ",(0,jsx_runtime.jsx)(_components.code,{children:"loader"}),". See example below."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{of:image_stories.Blur,sourceState:"shown"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)("div",{style:{overflowX:"auto"},children:(0,jsx_runtime.jsx)(dist.ZX,{of:image_stories.Blur})})]})}}},"./src/async-image/image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Blur:()=>Blur,__namedExportsOrder:()=>__namedExportsOrder,default:()=>image_stories});var index_esm=__webpack_require__("./node_modules/loadable-image/dist/index.esm.js");const thumbnail_loader_namespaceObject=__webpack_require__.p+"static/media/thumbnail-loader.1fdcfd22.jpeg",thumbnail_namespaceObject=__webpack_require__.p+"static/media/thumbnail.ebf086b4.jpeg";var _Blur$parameters,_Blur$parameters2,_Blur$parameters2$doc,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var AsyncImage=index_esm.b;AsyncImage.displayName="AsyncImage";const image_stories={component:AsyncImage,argTypes:{src:{type:"string",description:"Image source."},style:{description:"CSSStyleDeclaration object."},rootMargin:{type:"string",defaultValue:"600px 0px",description:"Margin around the root. Specifies when to trigger an image download."},loader:{defaultValue:(0,jsx_runtime.jsx)("div",{style:{background:"#eee"}}),description:"React element to display a `loading` state."},error:{defaultValue:(0,jsx_runtime.jsx)("div",{style:{background:"#eee"}}),description:"React element to display an `error` state."},alt:{type:"string",description:"Specifies an alternate text for an image."},srcSet:{type:"string",description:"Comma separated list of possible image sources for the user agent  to use"},crossOrigin:{type:"string",description:"Allow images from third-party sites that allow cross-origin access to be used with canvas."},referrerPolicy:{type:"string",description:"Specifies which referrer information to use when fetching an image."},onLoad:{type:"function",description:"A callback function fires when the image resource is loaded."},onError:{type:"function",description:"A callback function fires when an error occurs while attempting to load the image."}}};var Blur={args:{src:thumbnail_namespaceObject,onLoad:void 0,onError:void 0,loader:(0,jsx_runtime.jsx)("img",{src:thumbnail_loader_namespaceObject,style:{filter:"blur(25px)"}}),style:{width:300,height:300,borderRadius:3}}};Blur.parameters=_objectSpread(_objectSpread({},Blur.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Blur$parameters=Blur.parameters)||void 0===_Blur$parameters?void 0:_Blur$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    src: image,\n    onLoad: undefined,\n    onError: undefined,\n    loader: <img src={loader} style={{\n      filter: 'blur(25px)'\n    }} />,\n    style: {\n      width: 300,\n      height: 300,\n      borderRadius: 3\n    }\n  }\n}"},null===(_Blur$parameters2=Blur.parameters)||void 0===_Blur$parameters2||null===(_Blur$parameters2$doc=_Blur$parameters2.docs)||void 0===_Blur$parameters2$doc?void 0:_Blur$parameters2$doc.source)})});var __namedExportsOrder=["Blur"]}}]);