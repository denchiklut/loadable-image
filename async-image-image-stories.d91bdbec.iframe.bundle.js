"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[721],{"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./src/async-image/image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Blur:()=>Blur,__namedExportsOrder:()=>__namedExportsOrder,default:()=>image_stories});var index_esm=__webpack_require__("./node_modules/loadable-image/dist/index.esm.js");const thumbnail_loader_namespaceObject=__webpack_require__.p+"static/media/thumbnail-loader.1fdcfd22.jpeg",thumbnail_namespaceObject=__webpack_require__.p+"static/media/thumbnail.ebf086b4.jpeg";var _Blur$parameters,_Blur$parameters2,_Blur$parameters2$doc,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var AsyncImage=index_esm.b;AsyncImage.displayName="AsyncImage";const image_stories={component:AsyncImage,argTypes:{src:{type:"string",description:"Image source."},style:{description:"CSSStyleDeclaration object with required: `width` & `height`"},rootMargin:{type:"string",table:{defaultValue:{summary:"600px 0px"}},description:"Margin around the root. Specifies when to trigger an image download."},loader:{defaultValue:(0,jsx_runtime.jsx)("div",{style:{background:"#eee"}}),description:"React element to display a `loading` state."},error:{defaultValue:(0,jsx_runtime.jsx)("div",{style:{background:"#eee"}}),description:"React element to display an `error` state."}}};var Blur={args:{src:thumbnail_namespaceObject,loader:(0,jsx_runtime.jsx)("img",{src:thumbnail_loader_namespaceObject,style:{filter:"blur(25px)"}}),style:{width:300,height:300,borderRadius:3}}};Blur.parameters=_objectSpread(_objectSpread({},Blur.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Blur$parameters=Blur.parameters)||void 0===_Blur$parameters?void 0:_Blur$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    src: image,\n    loader: <img src={loader} style={{\n      filter: 'blur(25px)'\n    }} />,\n    style: {\n      width: 300,\n      height: 300,\n      borderRadius: 3\n    }\n  }\n}"},null===(_Blur$parameters2=Blur.parameters)||void 0===_Blur$parameters2||null===(_Blur$parameters2$doc=_Blur$parameters2.docs)||void 0===_Blur$parameters2$doc?void 0:_Blur$parameters2$doc.source)})});var __namedExportsOrder=["Blur"]}}]);