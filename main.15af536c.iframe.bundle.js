(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[179],{"./.storybook/preview.js":()=>{},"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),_home_runner_work_loadable_image_loadable_image_docs_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./.storybook/preview.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(_home_runner_work_loadable_image_loadable_image_docs_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__).forEach((function(key){var value=_home_runner_work_loadable_image_loadable_image_docs_storybook_preview_js__WEBPACK_IMPORTED_MODULE_9__[key];switch(key){case"args":return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.uc)(value);case"argTypes":return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.HZ)(loader,!1)}));case"parameters":return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__._C)(enhancer)}));case"render":return(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_home_runner_work_loadable_image_loadable_image_docs_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_10__.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/async-image/image.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>image_stories});__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var index_esm=__webpack_require__("./node_modules/loadable-image/dist/index.esm.js"),react=(__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/react/index.js")),dist_index_esm=__webpack_require__("./node_modules/transitions-kit/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),absolute={top:0,left:0,width:"100%",height:"100%",position:"absolute",boxSizing:"border-box"},Placeholder=(0,react.forwardRef)((function(_ref,ref){var children=_ref.children,style=_ref.style;return(0,jsx_runtime.jsx)("div",{style:Object.assign({width:"100%",height:"100%",display:"flex",overflow:"hidden",backgroundRepeat:"no-repeat",boxSizing:"border-box",backgroundSize:"cover",position:"relative"},style),ref,children})})),Card=function Card(_ref2){var children=_ref2.children,style=_ref2.style;return(0,jsx_runtime.jsx)("div",{style:Object.assign({minWidth:250,borderRadius:"3px",boxShadow:"0 1px 6px 0 rgb(0 0 0 / 20%)",overflow:"hidden",background:"#eee"},style),children})};Card.displayName="Card";var Title=function Title(props){return(0,jsx_runtime.jsx)("p",Object.assign({style:{background:"#222",color:"white",textAlign:"center",textTransform:"uppercase",fontWeight:"bold",boxShadow:"0 1px 6px 0 rgb(0 0 0 / 20%)",padding:"8px",margin:0}},props))};Title.displayName="Title";var Blur=(0,react.forwardRef)((function(pops,ref){return(0,jsx_runtime.jsx)("img",Object.assign({alt:"..."},pops,{ref,style:Object.assign({},absolute,{backgroundColor:"#eee",objectFit:"cover",filter:"blur(20px)",transform:"scale(1)"})}))})),Error=(0,react.forwardRef)((function(_ref3,ref){var children=_ref3.children,style=_ref3.style;return(0,jsx_runtime.jsx)("div",{ref,style:Object.assign({color:"white",width:"100%",display:"grid",background:"#bbb",placeContent:"center"},style),children})})),Stack=function Stack(_ref4){var direction=_ref4.direction,style=_ref4.style,children=_ref4.children;return(0,jsx_runtime.jsx)("div",{style:Object.assign({display:"flex",flexDirection:direction},style),children})};Stack.displayName="Stack";try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/async-image/template/styles.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/async-image/template/styles.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}try{Title.displayName="Title",Title.__docgenInfo={description:"",displayName:"Title",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/async-image/template/styles.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}try{Blur.displayName="Blur",Blur.__docgenInfo={description:"",displayName:"Blur",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Blur"]={docgenInfo:Blur.__docgenInfo,name:"Blur",path:"src/async-image/template/styles.tsx#Blur"})}catch(__react_docgen_typescript_loader_error){}try{Error.displayName="Error",Error.__docgenInfo={description:"",displayName:"Error",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Error"]={docgenInfo:Error.__docgenInfo,name:"Error",path:"src/async-image/template/styles.tsx#Error"})}catch(__react_docgen_typescript_loader_error){}try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/async-image/template/styles.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/async-image/template/styles.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}const thumbnail_loader_namespaceObject=__webpack_require__.p+"static/media/thumbnail-loader.1fdcfd22.jpeg",thumbnail_namespaceObject=__webpack_require__.p+"static/media/thumbnail.ebf086b4.jpeg";function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Template=function Template(){var _useState2=_slicedToArray((0,react.useState)("loading"),2),status=_useState2[0],setStatus=_useState2[1];return(0,jsx_runtime.jsxs)(Stack,{direction:"row",style:{gap:20,alignItems:"start"},children:[(0,jsx_runtime.jsxs)("fieldset",{style:{gap:8,minWidth:130,borderRadius:4,outline:"none",border:"1px solid #808080",display:"grid",padding:12},children:[(0,jsx_runtime.jsx)("legend",{children:"STATE:"}),(0,jsx_runtime.jsxs)("label",{style:{cursor:"pointer"},children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:"loaded",checked:"loaded"===status,onChange:function onChange(_ref){var target=_ref.target;return setStatus(target.value)}}),"Loaded"]}),(0,jsx_runtime.jsxs)("label",{style:{cursor:"pointer"},children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:"loading",checked:"loading"===status,onChange:function onChange(_ref2){var target=_ref2.target;return setStatus(target.value)}}),"Loading"]}),(0,jsx_runtime.jsxs)("label",{style:{cursor:"pointer"},children:[(0,jsx_runtime.jsx)("input",{type:"radio",value:"failed",checked:"failed"===status,onChange:function onChange(_ref3){var target=_ref3.target;return setStatus(target.value)}}),"Failed"]})]}),(0,jsx_runtime.jsxs)(Card,{style:{width:250},children:[(0,jsx_runtime.jsx)(Title,{children:status}),(0,jsx_runtime.jsxs)(Placeholder,{style:{width:250,height:250},children:[(0,jsx_runtime.jsx)(dist_index_esm.pT,{appear:!1,in:"loading"===status,timeout:1e3,unmountOnExit:!0,children:(0,jsx_runtime.jsx)(Blur,{src:thumbnail_loader_namespaceObject})}),(0,jsx_runtime.jsx)(dist_index_esm.pT,{in:"loaded"===status,timeout:1e3,children:(0,jsx_runtime.jsx)("img",{src:thumbnail_namespaceObject,"data-testid":"loaded-image",style:Object.assign({objectFit:"cover"},absolute)})}),(0,jsx_runtime.jsx)(dist_index_esm.pT,{in:"failed"===status,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0,children:(0,jsx_runtime.jsx)(Error,{style:absolute,children:(0,jsx_runtime.jsx)("span",{className:"material-symbols-rounded",style:{fontSize:108,color:"whitesmoke"},children:"image_not_supported"})})})]})]})]})};Template.displayName="Template";const image_stories={component:index_esm.b,title:"Other/AsyncImage"};var Basic=Template.bind({});Basic.parameters={docs:{source:{code:"\n<AsyncImage\n    src={src}\n    style={{ ...css }}\n    loader={<img src={lowSrc} style={{ filter: 'blur(25px)'}} />}\n    error={<div style={{ ...css }} bgcolor='#eee' />}\n/>"}}},Basic.parameters=Object.assign({storySource:{source:"Template.bind({})"}},Basic.parameters);var __namedExportsOrder=["Basic"]},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./async-image/image.stories.tsx":"./src/async-image/image.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[854],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);