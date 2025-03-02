"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{"./node_modules/loadable-image/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>g});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),__defProp=Object.defineProperty,__publicField=(obj,key,value)=>((obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value)(obj,"symbol"!=typeof key?key+"":key,value),observerMap=new Map,RootIds=new WeakMap,rootId=0,unsupportedValue=void 0;function optionsToId(options){return Object.keys(options).sort().filter((key=>void 0!==options[key])).map((key=>`${key}_${"root"===key?function getRootId(root){return root?(RootIds.has(root)||(rootId+=1,RootIds.set(root,rootId.toString())),RootIds.get(root)):"0"}(options.root):options[key]}`)).toString()}function observe(element,callback,options={},fallbackInView=unsupportedValue){if(void 0===window.IntersectionObserver&&void 0!==fallbackInView){const bounds=element.getBoundingClientRect();return callback(fallbackInView,{isIntersecting:fallbackInView,target:element,intersectionRatio:"number"==typeof options.threshold?options.threshold:0,time:0,boundingClientRect:bounds,intersectionRect:bounds,rootBounds:bounds}),()=>{}}const{id,observer,elements}=function createObserver(options){const id=optionsToId(options);let instance=observerMap.get(id);if(!instance){const elements=new Map;let thresholds;const observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{var _a;const inView=entry.isIntersecting&&thresholds.some((threshold=>entry.intersectionRatio>=threshold));options.trackVisibility&&void 0===entry.isVisible&&(entry.isVisible=inView),null==(_a=elements.get(entry.target))||_a.forEach((callback=>{callback(inView,entry)}))}))}),options);thresholds=observer.thresholds||(Array.isArray(options.threshold)?options.threshold:[options.threshold||0]),instance={id,observer,elements},observerMap.set(id,instance)}return instance}(options),callbacks=elements.get(element)||[];return elements.has(element)||elements.set(element,callbacks),callbacks.push(callback),observer.observe(element),function unobserve(){callbacks.splice(callbacks.indexOf(callback),1),0===callbacks.length&&(elements.delete(element),observer.unobserve(element)),0===elements.size&&(observer.disconnect(),observerMap.delete(id))}}var InView=class extends react.Component{constructor(props){super(props),__publicField(this,"node",null),__publicField(this,"_unobserveCb",null),__publicField(this,"handleNode",(node=>{this.node&&(this.unobserve(),node||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=node||null,this.observeNode()})),__publicField(this,"handleChange",((inView,entry)=>{inView&&this.props.triggerOnce&&this.unobserve(),function isPlainChildren(props){return"function"!=typeof props.children}(this.props)||this.setState({inView,entry}),this.props.onChange&&this.props.onChange(inView,entry)})),this.state={inView:!!props.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(prevProps){prevProps.rootMargin===this.props.rootMargin&&prevProps.root===this.props.root&&prevProps.threshold===this.props.threshold&&prevProps.skip===this.props.skip&&prevProps.trackVisibility===this.props.trackVisibility&&prevProps.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold,root,rootMargin,trackVisibility,delay,fallbackInView}=this.props;this._unobserveCb=observe(this.node,this.handleChange,{threshold,root,rootMargin,trackVisibility,delay},fallbackInView)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children}=this.props;if("function"==typeof children){const{inView,entry}=this.state;return children({inView,entry,ref:this.handleNode})}const{as,triggerOnce,threshold,root,rootMargin,onChange,skip,trackVisibility,delay,initialInView,fallbackInView,...props}=this.props;return react.createElement(as||"div",{ref:this.handleNode,...props},children)}};var index_esm=__webpack_require__("./node_modules/transitions-kit/dist/index.esm.js");function c(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;const l=(0,react.forwardRef)(((r,t)=>{var{style:o}=r,i=c(r,["style"]);return(0,jsx_runtime.jsx)("div",Object.assign({ref:t},i,{className:`AsyncImage-root ${i.className}`.trim(),style:Object.assign(Object.assign({},o),{display:"flex",overflow:"hidden",backgroundRepeat:"no-repeat",boxSizing:"border-box",backgroundSize:"cover",position:"relative"})}))})),b={top:0,left:0,width:"100%",height:"100%",position:"absolute",boxSizing:"border-box"},d=(0,jsx_runtime.jsx)("div",{className:"AsyncImage-loader",style:{backgroundColor:"#eee"}}),p=(0,jsx_runtime.jsx)("div",{className:"Asyncimage-error",style:{backgroundColor:"#eee"},children:(0,jsx_runtime.jsx)("svg",{fill:"#00000061",viewBox:"0 0 24 24",style:{position:"absolute",inset:0,width:"50%",height:"50%",margin:"auto"},children:(0,jsx_runtime.jsx)("path",{d:"M21 5c0-1.1-.9-2-2-2H5.83L21 18.17V5zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1H6z"})})});var u,e;(e=u||(u={}))[e.LOADING=0]="LOADING",e[e.LOADED=1]="LOADED",e[e.FAILED=2]="FAILED";const m=o=>{var{error:i,loader:l,onLoad:d,onError:p,objectFit:m="cover",Transition:g=index_esm.zW,timeout:O=1e3,sources:y=[],inView:j}=o,f=c(o,["error","loader","onLoad","onError","objectFit","Transition","timeout","sources","inView"]);const[h,v]=(0,react.useState)(u.LOADING);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_esm.zW,{appear:!1,in:h===u.LOADING,timeout:O,unmountOnExit:!0,children:(0,react.cloneElement)(l,{style:Object.assign(Object.assign({},l.props.style),b)})}),j&&(0,jsx_runtime.jsx)(g,{in:h===u.LOADED,timeout:O,children:(0,jsx_runtime.jsxs)("picture",{style:b,children:[y.map((r=>(0,jsx_runtime.jsx)("source",Object.assign({},r),r.srcSet))),(0,jsx_runtime.jsx)("img",Object.assign({},f,{className:"AsyncImage-image",style:Object.assign({objectFit:m},b),onLoad:e=>{v(u.LOADED),null==d||d(e)},onError:e=>{v(u.FAILED),null==p||p(e)}}))]})}),(0,jsx_runtime.jsx)(g,{in:h===u.FAILED,timeout:O,mountOnEnter:!0,unmountOnExit:!0,children:(0,react.cloneElement)(i,{style:Object.assign(Object.assign({},i.props.style),b)})})]})},g=r=>{var{loader:t=d,error:i=p,rootMargin:n="600px 0px",objectFit:s="cover",style:a={},className:b=""}=r,u=c(r,["loader","error","rootMargin","objectFit","style","className"]);return(0,jsx_runtime.jsx)(InView,{rootMargin:n,triggerOnce:!0,children:({ref:r,inView:o})=>{var n;return(0,jsx_runtime.jsx)(l,{ref:r,className:b,style:a,children:(0,jsx_runtime.jsx)(m,Object.assign({error:i,loader:t,objectFit:null!==(n=a.objectFit)&&void 0!==n?n:s,inView:o},u))})}})}},"./node_modules/transitions-kit/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{mY:()=>j,zW:()=>O,Kx:()=>H,q7:()=>z});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const config_disabled=!1,TransitionGroupContext=react.createContext(null);var Transition=function(_React$Component){function Transition(props,context){var _this;_this=_React$Component.call(this,props,context)||this;var initialStatus,appear=context&&!context.isMounting?props.enter:props.appear;return _this.appearStatus=null,props.in?appear?(initialStatus="exited",_this.appearStatus="entering"):initialStatus="entered":initialStatus=props.unmountOnExit||props.mountOnEnter?"unmounted":"exited",_this.state={status:initialStatus},_this.nextCallback=null,_this}!function _inheritsLoose(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,_setPrototypeOf(t,o)}(Transition,_React$Component),Transition.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){return _ref.in&&"unmounted"===prevState.status?{status:"exited"}:null};var _proto=Transition.prototype;return _proto.componentDidMount=function componentDidMount(){this.updateStatus(!0,this.appearStatus)},_proto.componentDidUpdate=function componentDidUpdate(prevProps){var nextStatus=null;if(prevProps!==this.props){var status=this.state.status;this.props.in?"entering"!==status&&"entered"!==status&&(nextStatus="entering"):"entering"!==status&&"entered"!==status||(nextStatus="exiting")}this.updateStatus(!1,nextStatus)},_proto.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback()},_proto.getTimeouts=function getTimeouts(){var exit,enter,appear,timeout=this.props.timeout;return exit=enter=appear=timeout,null!=timeout&&"number"!=typeof timeout&&(exit=timeout.exit,enter=timeout.enter,appear=void 0!==timeout.appear?timeout.appear:enter),{exit,enter,appear}},_proto.updateStatus=function updateStatus(mounting,nextStatus){if(void 0===mounting&&(mounting=!1),null!==nextStatus)if(this.cancelNextCallback(),"entering"===nextStatus){if(this.props.unmountOnExit||this.props.mountOnEnter){var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this);node&&function forceReflow(node){node.scrollTop}(node)}this.performEnter(mounting)}else this.performExit();else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},_proto.performEnter=function performEnter(mounting){var _this2=this,enter=this.props.enter,appearing=this.context?this.context.isMounting:mounting,_ref2=this.props.nodeRef?[appearing]:[react_dom.findDOMNode(this),appearing],maybeNode=_ref2[0],maybeAppearing=_ref2[1],timeouts=this.getTimeouts(),enterTimeout=appearing?timeouts.appear:timeouts.enter;!mounting&&!enter||config_disabled?this.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode)})):(this.props.onEnter(maybeNode,maybeAppearing),this.safeSetState({status:"entering"},(function(){_this2.props.onEntering(maybeNode,maybeAppearing),_this2.onTransitionEnd(enterTimeout,(function(){_this2.safeSetState({status:"entered"},(function(){_this2.props.onEntered(maybeNode,maybeAppearing)}))}))})))},_proto.performExit=function performExit(){var _this3=this,exit=this.props.exit,timeouts=this.getTimeouts(),maybeNode=this.props.nodeRef?void 0:react_dom.findDOMNode(this);exit&&!config_disabled?(this.props.onExit(maybeNode),this.safeSetState({status:"exiting"},(function(){_this3.props.onExiting(maybeNode),_this3.onTransitionEnd(timeouts.exit,(function(){_this3.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))}))}))):this.safeSetState({status:"exited"},(function(){_this3.props.onExited(maybeNode)}))},_proto.cancelNextCallback=function cancelNextCallback(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},_proto.safeSetState=function safeSetState(nextState,callback){callback=this.setNextCallback(callback),this.setState(nextState,callback)},_proto.setNextCallback=function setNextCallback(callback){var _this4=this,active=!0;return this.nextCallback=function(event){active&&(active=!1,_this4.nextCallback=null,callback(event))},this.nextCallback.cancel=function(){active=!1},this.nextCallback},_proto.onTransitionEnd=function onTransitionEnd(timeout,handler){this.setNextCallback(handler);var node=this.props.nodeRef?this.props.nodeRef.current:react_dom.findDOMNode(this),doesNotHaveTimeoutOrListener=null==timeout&&!this.props.addEndListener;if(node&&!doesNotHaveTimeoutOrListener){if(this.props.addEndListener){var _ref3=this.props.nodeRef?[this.nextCallback]:[node,this.nextCallback],maybeNode=_ref3[0],maybeNextCallback=_ref3[1];this.props.addEndListener(maybeNode,maybeNextCallback)}null!=timeout&&setTimeout(this.nextCallback,timeout)}else setTimeout(this.nextCallback,0)},_proto.render=function render(){var status=this.state.status;if("unmounted"===status)return null;var _this$props=this.props,children=_this$props.children,childProps=(_this$props.in,_this$props.mountOnEnter,_this$props.unmountOnExit,_this$props.appear,_this$props.enter,_this$props.exit,_this$props.timeout,_this$props.addEndListener,_this$props.onEnter,_this$props.onEntering,_this$props.onEntered,_this$props.onExit,_this$props.onExiting,_this$props.onExited,_this$props.nodeRef,function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(-1!==e.indexOf(n))continue;t[n]=r[n]}return t}(_this$props,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return react.createElement(TransitionGroupContext.Provider,{value:null},"function"==typeof children?children(status,childProps):react.cloneElement(react.Children.only(children),childProps))},Transition}(react.Component);function noop(){}Transition.contextType=TransitionGroupContext,Transition.propTypes={},Transition.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop},Transition.UNMOUNTED="unmounted",Transition.EXITED="exited",Transition.ENTERING="entering",Transition.ENTERED="entered",Transition.EXITING="exiting";const esm_Transition=Transition;function l(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}"function"==typeof SuppressedError&&SuppressedError;const d={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},c={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function u(t,e){var n,i;const{timeout:r,easing:o,style:s={}}=t;return{duration:null!==(n=s.transitionDuration)&&void 0!==n?n:"number"==typeof r||"string"==typeof r?r:r[e.mode]||0,easing:null!==(i=s.transitionTimingFunction)&&void 0!==i?i:"object"==typeof o?o[e.mode]:o,delay:s.transitionDelay}}const g=(t=["all"],e={})=>{const{duration:n=c.standard,easing:i=d.easeInOut,delay:r=0}=e,o=t=>`${Math.round(t)}ms`;return(Array.isArray(t)?t:[t]).map((t=>`${t} ${"string"==typeof n?n:o(n)} ${i} ${"string"==typeof r?r:o(r)}`)).join(",")},y=t=>{if(!t)return 0;const e=t/36;return Math.round(10*(4+15*Math.pow(e,.25)+e/5))},p=(...t)=>(0,react.useMemo)((()=>t.every((t=>null==t))?null:e=>{t.forEach((t=>{((t,e)=>{"function"==typeof t?t(e):t&&(t.current=e)})(t,e)}))}),t),E=(t,e=166)=>{let n;function i(...i){clearTimeout(n),n=setTimeout((()=>{t.apply(this,i)}),e)}return i.clear=()=>{clearTimeout(n)},i};function f(t){return function m(t){return t&&t.ownerDocument||document}(t).defaultView||window}const h=t=>t.scrollTop,b={entering:{opacity:1},entered:{opacity:1}},O=(0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,onEnter:f,onEntered:x,onEntering:O,onExit:v,onExited:j,onExiting:w,style:S,timeout:$=o}=e,T=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),L=(0,react.useRef)(null),z=p(y.ref,n),k=p(L,z),R=t=>e=>{const n=L.current;t&&n&&(void 0===e?t(n):t(n,e))},D=R(O),I=R(x),H=R(w),N=R(j),P=R(((t,e)=>{h(t);const n=u({style:S,timeout:$,easing:E},{mode:"enter"});t.style.webkitTransition=g("opacity",n),t.style.transition=g("opacity",n),null==f||f(t,e)})),A=R((t=>{const e=u({style:S,timeout:$,easing:E},{mode:"exit"});t.style.webkitTransition=g("opacity",e),t.style.transition=g("opacity",e),null==v||v(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:L,onExit:A,onEnter:P,addEndListener:t=>{L.current&&(null==s||s(L.current,t))},onEntering:D,onEntered:I,onExiting:H,onExited:N,timeout:$},T,{children:t=>(0,react.cloneElement)(y,{ref:k,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:"exited"!==t||m?void 0:"hidden"},b[t]),S),y.props.style)})}))})),v=t=>({entering:{opacity:1,filter:"blur(0)"},entered:{opacity:1,filter:"blur(0)"},exiting:{opacity:0,filter:`blur(${t}px)`},exited:{opacity:0,filter:`blur(${t}px)`}}),j=(0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,radius:f=25,onEnter:x,onEntered:b,onEntering:O,onExit:j,onExited:w,onExiting:S,style:$,timeout:T=o}=e,L=l(e,["addEndListener","appear","children","easing","in","radius","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),z=(0,react.useRef)(null),k=p(y.ref,n),R=p(z,k),D=t=>e=>{const n=z.current;t&&n&&(void 0===e?t(n):t(n,e))},I=D(O),H=D(b),N=D(S),P=D(w),A=D(((t,e)=>{h(t);const n=u({style:$,timeout:T,easing:E},{mode:"enter"});t.style.webkitTransition=g(["opacity","filter"],n),t.style.transition=g(["opacity","filter"],n),null==x||x(t,e)})),F=D((t=>{const e=u({style:$,timeout:T,easing:E},{mode:"exit"});t.style.webkitTransition=g(["opacity","filter"],e),t.style.transition=g(["opacity","filter"],e),null==j||j(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:z,onExit:F,onEnter:A,addEndListener:t=>{z.current&&(null==s||s(z.current,t))},onEntering:I,onEntered:H,onExiting:N,onExited:P,timeout:T},L,{children:t=>(0,react.cloneElement)(y,{ref:R,style:Object.assign(Object.assign(Object.assign({opacity:0,visibility:"exited"!==t||m?void 0:"hidden"},v(f)[t]),$),y.props.style)})}))})),w=(0,react.forwardRef)((({children:e,ownerState:n,style:i={}},r)=>(0,jsx_runtime.jsx)("div",{ref:r,style:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},i),{height:0,overflow:"hidden",transition:g("height")}),"horizontal"===n.orientation&&{height:"auto",width:0,transition:g("width")}),"entered"===n.state&&Object.assign({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"})),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"}),children:e}))),S=(0,react.forwardRef)((({children:e,ownerState:n,style:i},r)=>(0,jsx_runtime.jsx)("div",{ref:r,style:Object.assign({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"}),children:e}))),$=({children:e,ownerState:n})=>(0,jsx_runtime.jsx)("div",{style:Object.assign({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"}),children:e});(0,react.forwardRef)(((e,n)=>{const{addEndListener:r,children:s,className:d,collapsedSize:g="0px",easing:E,in:m,onEnter:f,onEntered:x,onEntering:b,onExit:O,onExited:v,onExiting:j,orientation:T="vertical",style:L,timeout:z=c.standard}=e,k=l(e,["addEndListener","children","className","collapsedSize","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout"]),R=Object.assign(Object.assign({},e),{orientation:T,collapsedSize:g}),D=(0,react.useRef)(),I=(0,react.useRef)(null),H=p(I,n),N=(0,react.useRef)(null),P=(0,react.useRef)(),A="number"==typeof g?`${g}px`:g,F="horizontal"===T,X=F?"width":"height";(0,react.useEffect)((()=>()=>{clearTimeout(D.current)}),[]);const Y=t=>e=>{const n=I.current;t&&n&&(void 0===e?t(n):t(n,e))},C=()=>N.current?N.current[F?"scrollWidth":"scrollHeight"]:0,M=Y(((t,e)=>{t.style[X]=A,null==f||f(t,e)})),V=Y(((t,e)=>{const n=C(),{duration:i,easing:r}=u({style:L,timeout:z,easing:E},{mode:"enter"});if("auto"===z){const e=y(n);t.style.transitionDuration=`${e}ms`,P.current=e}else t.style.transitionDuration="string"==typeof i?i:`${i}ms`;t.style[X]=`${n}px`,t.style.transitionTimingFunction=`${r}`,null==b||b(t,e)})),W=Y(((t,e)=>{t.style[X]="auto",null==x||x(t,e)})),B=Y((t=>{t.style[X]=`${C()}px`,N.current&&h(N.current),null==O||O(t)})),_=Y((t=>{const e=C(),{duration:n,easing:i}=u({style:L,timeout:z,easing:E},{mode:"exit"});if("auto"===z){const n=y(e);t.style.transitionDuration=`${n}ms`,P.current=n}else t.style.transitionDuration="string"==typeof n?n:`${n}ms`;t.style[X]=A,t.style.transitionTimingFunction=null!=i?i:"",null==j||j(t)})),q=Y(v);return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,nodeRef:I,onEnter:M,onEntered:W,onEntering:V,onExit:B,onExited:q,onExiting:_,addEndListener:t=>{"auto"===z&&(D.current=window.setTimeout(t,Number(P.current)||0)),I.current&&(null==r||r(I.current,t))},timeout:"auto"===z?void 0:z},k,{children:e=>(0,jsx_runtime.jsx)(w,{ref:H,ownerState:Object.assign(Object.assign({},R),{state:e}),style:Object.assign({[F?"minWidth":"minHeight"]:A},L),children:(0,jsx_runtime.jsx)(S,{ownerState:Object.assign(Object.assign({},R),{state:e}),ref:N,children:(0,jsx_runtime.jsx)($,{ownerState:Object.assign(Object.assign({},R),{state:e}),children:s})})})}))}));function L(t,e,n){var i;const r=function(t,e,n){const i=e.getBoundingClientRect(),r=null==n?void 0:n.getBoundingClientRect(),o=f(e),s=o.getComputedStyle(e),a=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform");let l=0,d=0;if(a&&"none"!==a&&"string"==typeof a){const t=a.split("(")[1].split(")")[0].split(",");l=parseInt(t[4],10),d=parseInt(t[5],10)}return"left"===t?r?`translateX(${r.right+l-i.left}px)`:`translateX(${o.innerWidth+l-i.left}px)`:"right"===t?r?`translateX(-${i.right-r.left-l}px)`:`translateX(-${i.left+i.width-l}px)`:"up"===t?r?`translateY(${r.bottom+d-i.top}px)`:`translateY(${o.innerHeight+d-i.top}px)`:r?`translateY(-${i.top-r.top+i.height-d}px)`:`translateY(-${i.top+i.height-d}px)`}(t,e,"function"==typeof(i=n)?i():i);r&&(e.style.webkitTransform=r,e.style.transform=r)}const z=(0,react.forwardRef)(((e,n)=>{const y={enter:d.easeOut,exit:d.sharp},m={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:x,appear:b=!0,children:O,container:v,direction:j="down",easing:w=y,in:S,onEnter:$,onEntered:T,onEntering:z,onExit:k,onExited:R,onExiting:D,style:I,timeout:H=m}=e,N=l(e,["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),P=(0,react.useRef)(void 0),A=p(O.ref,P),F=p(A,n),X=t=>e=>{const n=P.current;t&&n&&(void 0===e?t(n):t(n,e))},Y=X(((t,e)=>{L(j,t,v),h(t),null==$||$(t,e)})),C=X(((t,e)=>{const n=u({timeout:H,style:I,easing:w},{mode:"enter"});t.style.webkitTransition=g("-webkit-transform",n),t.style.transition=g("transform",n),t.style.webkitTransform="none",t.style.transform="none",null==z||z(t,e)})),M=X((t=>{const e=u({timeout:H,style:I,easing:w},{mode:"exit"});t.style.webkitTransition=g("-webkit-transform",e),t.style.transition=g("transform",e),L(j,t,v),null==k||k(t)})),V=X((t=>{t.style.webkitTransition="",t.style.transition="",null==R||R(t)})),W=(0,react.useCallback)((()=>{P.current&&L(j,P.current,v)}),[j,v]);return(0,react.useEffect)((()=>{if(S||"down"===j||"right"===j)return;const t=E((()=>{P.current&&L(j,P.current,v)})),e=f(P.current);return e.addEventListener("resize",t),()=>{t.clear(),e.removeEventListener("resize",t)}}),[j,S,v]),(0,react.useEffect)((()=>{S||W()}),[S,W]),(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:S,appear:b,nodeRef:P,timeout:H,onEnter:Y,onEntered:T,onEntering:C,onExit:M,onExited:V,onExiting:D,addEndListener:t=>{P.current&&(null==x||x(P.current,t))}},N,{children:t=>(0,react.cloneElement)(O,{ref:F,style:Object.assign(Object.assign({visibility:"exited"!==t||S?void 0:"hidden"},I),O.props.style)})}))})),k={entering:{transform:"none"},entered:{transform:"none"}},D=((0,react.forwardRef)(((e,n)=>{const o={enter:c.enteringScreen,exit:c.leavingScreen},{addEndListener:s,appear:d=!0,children:y,easing:E,in:m,onEnter:f,onEntered:x,onEntering:b,onExit:O,onExited:v,onExiting:j,style:w,timeout:S=o}=e,$=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),T=(0,react.useRef)(null),L=p(y.ref,n),z=p(T,L),R=t=>e=>{const n=T.current;t&&n&&(void 0===e?t(n):t(n,e))},D=R(x),I=R(b),H=R(v),N=R(j),P=R(((t,e)=>{h(t);const n=u({style:w,timeout:S,easing:E},{mode:"enter"});t.style.webkitTransition=g("transform",n),t.style.transition=g("transform",n),null==f||f(t,e)})),A=R((t=>{const e=u({style:w,timeout:S,easing:E},{mode:"exit"});t.style.webkitTransition=g("transform",e),t.style.transition=g("transform",e),null==O||O(t)}));return(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:T,onEnter:P,onEntered:D,onEntering:I,onExit:A,onExited:H,onExiting:N,addEndListener:t=>{T.current&&(null==s||s(T.current,t))},timeout:S},$,{children:t=>(0,react.cloneElement)(y,{ref:z,style:Object.assign(Object.assign(Object.assign({transform:"scale(0)",visibility:"exited"!==t||m?void 0:"hidden"},k[t]),w),y.props.style)})}))})),{entering:{opacity:1,transform:"scale(1)"},entered:{opacity:1,transform:"none"}}),I="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),H=(0,react.forwardRef)(((e,n)=>{const{addEndListener:s,appear:d=!0,children:c,easing:E,in:m,onEnter:f,onEntered:x,onEntering:b,onExit:O,onExited:v,onExiting:j,style:w,timeout:S="auto"}=e,$=l(e,["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout"]),T=(0,react.useRef)(),L=(0,react.useRef)(),z=(0,react.useRef)(null),k=p(c.ref,n),R=p(z,k),H=t=>e=>{const n=z.current;t&&n&&(void 0===e?t(n):t(n,e))},N=H(x),P=H(b),A=H(v),F=H(j),X=H(((t,e)=>{h(t);const{duration:n,delay:i,easing:r}=u({style:w,timeout:S,easing:E},{mode:"enter"});let o;"auto"===S?(o=y(t.clientHeight),L.current=o):o=n,t.style.transition=[g("opacity",{duration:o,delay:i}),g("transform",{duration:I||"string"==typeof o?o:.666*o,delay:i,easing:r})].join(","),null==f||f(t,e)})),Y=H((t=>{const{duration:e,delay:n,easing:i}=u({style:w,timeout:S,easing:E},{mode:"exit"});let r;"auto"===S?(r=y(t.clientHeight),L.current=r):r=e,t.style.transition=[g("opacity",{duration:r,delay:n}),g("transform",{duration:I||"string"==typeof r?r:.666*r,delay:I||"string"==typeof r?n:n||.333*r,easing:i})].join(","),t.style.opacity="0",t.style.transform="scale(0.75)",null==O||O(t)}));return(0,react.useEffect)((()=>()=>{clearTimeout(T.current)}),[]),(0,jsx_runtime.jsx)(esm_Transition,Object.assign({in:m,appear:d,nodeRef:z,onEnter:X,onEntered:N,onEntering:P,onExit:Y,onExited:A,onExiting:F,addEndListener:t=>{"auto"===S&&(T.current=window.setTimeout(t,L.current||0)),z.current&&(null==s||s(z.current,t))},timeout:"auto"===S?void 0:S},$,{children:t=>(0,react.cloneElement)(c,{ref:R,style:Object.assign(Object.assign(Object.assign({opacity:0,transform:"scale(0.75)",visibility:"exited"!==t||m?void 0:"hidden"},D[t]),w),c.props.style)})}))}))}}]);