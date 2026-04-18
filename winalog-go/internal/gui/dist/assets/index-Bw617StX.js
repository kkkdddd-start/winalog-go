var Sy=Object.defineProperty;var Cy=(t,e,n)=>e in t?Sy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>Cy(t,typeof e!="symbol"?e+"":e,n);function Ey(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Vm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wc={exports:{}},mr={},Hc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Ry(){if(Uf)return Se;Uf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function y(D,Y,fe){this.props=D,this.context=Y,this.refs=N,this.updater=fe||w}y.prototype.isReactComponent={},y.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=y.prototype;function S(D,Y,fe){this.props=D,this.context=Y,this.refs=N,this.updater=fe||w}var A=S.prototype=new _;A.constructor=S,j(A,y.prototype),A.isPureReactComponent=!0;var z=Array.isArray,R=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function C(D,Y,fe){var ve,be={},ye=null,Ae=null;if(Y!=null)for(ve in Y.ref!==void 0&&(Ae=Y.ref),Y.key!==void 0&&(ye=""+Y.key),Y)R.call(Y,ve)&&!M.hasOwnProperty(ve)&&(be[ve]=Y[ve]);var Re=arguments.length-2;if(Re===1)be.children=fe;else if(1<Re){for(var Fe=Array(Re),mt=0;mt<Re;mt++)Fe[mt]=arguments[mt+2];be.children=Fe}if(D&&D.defaultProps)for(ve in Re=D.defaultProps,Re)be[ve]===void 0&&(be[ve]=Re[ve]);return{$$typeof:t,type:D,key:ye,ref:Ae,props:be,_owner:I.current}}function O(D,Y){return{$$typeof:t,type:D.type,key:Y,ref:D.ref,props:D.props,_owner:D._owner}}function W(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function X(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(fe){return Y[fe]})}var F=/\/+/g;function te(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?X(""+D.key):Y.toString(36)}function V(D,Y,fe,ve,be){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var Ae=!1;if(D===null)Ae=!0;else switch(ye){case"string":case"number":Ae=!0;break;case"object":switch(D.$$typeof){case t:case e:Ae=!0}}if(Ae)return Ae=D,be=be(Ae),D=ve===""?"."+te(Ae,0):ve,z(be)?(fe="",D!=null&&(fe=D.replace(F,"$&/")+"/"),V(be,Y,fe,"",function(mt){return mt})):be!=null&&(W(be)&&(be=O(be,fe+(!be.key||Ae&&Ae.key===be.key?"":(""+be.key).replace(F,"$&/")+"/")+D)),Y.push(be)),1;if(Ae=0,ve=ve===""?".":ve+":",z(D))for(var Re=0;Re<D.length;Re++){ye=D[Re];var Fe=ve+te(ye,Re);Ae+=V(ye,Y,fe,Fe,be)}else if(Fe=b(D),typeof Fe=="function")for(D=Fe.call(D),Re=0;!(ye=D.next()).done;)ye=ye.value,Fe=ve+te(ye,Re++),Ae+=V(ye,Y,fe,Fe,be);else if(ye==="object")throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ae}function ae(D,Y,fe){if(D==null)return D;var ve=[],be=0;return V(D,ve,"","",function(ye){return Y.call(fe,ye,be++)}),ve}function U(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(fe){(D._status===0||D._status===-1)&&(D._status=1,D._result=fe)},function(fe){(D._status===0||D._status===-1)&&(D._status=2,D._result=fe)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var ie={current:null},K={transition:null},re={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:K,ReactCurrentOwner:I};function G(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ae,forEach:function(D,Y,fe){ae(D,function(){Y.apply(this,arguments)},fe)},count:function(D){var Y=0;return ae(D,function(){Y++}),Y},toArray:function(D){return ae(D,function(Y){return Y})||[]},only:function(D){if(!W(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Se.Component=y,Se.Fragment=n,Se.Profiler=o,Se.PureComponent=S,Se.StrictMode=i,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Se.act=G,Se.cloneElement=function(D,Y,fe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ve=j({},D.props),be=D.key,ye=D.ref,Ae=D._owner;if(Y!=null){if(Y.ref!==void 0&&(ye=Y.ref,Ae=I.current),Y.key!==void 0&&(be=""+Y.key),D.type&&D.type.defaultProps)var Re=D.type.defaultProps;for(Fe in Y)R.call(Y,Fe)&&!M.hasOwnProperty(Fe)&&(ve[Fe]=Y[Fe]===void 0&&Re!==void 0?Re[Fe]:Y[Fe])}var Fe=arguments.length-2;if(Fe===1)ve.children=fe;else if(1<Fe){Re=Array(Fe);for(var mt=0;mt<Fe;mt++)Re[mt]=arguments[mt+2];ve.children=Re}return{$$typeof:t,type:D.type,key:be,ref:ye,props:ve,_owner:Ae}},Se.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Se.createElement=C,Se.createFactory=function(D){var Y=C.bind(null,D);return Y.type=D,Y},Se.createRef=function(){return{current:null}},Se.forwardRef=function(D){return{$$typeof:u,render:D}},Se.isValidElement=W,Se.lazy=function(D){return{$$typeof:m,_payload:{_status:-1,_result:D},_init:U}},Se.memo=function(D,Y){return{$$typeof:p,type:D,compare:Y===void 0?null:Y}},Se.startTransition=function(D){var Y=K.transition;K.transition={};try{D()}finally{K.transition=Y}},Se.unstable_act=G,Se.useCallback=function(D,Y){return ie.current.useCallback(D,Y)},Se.useContext=function(D){return ie.current.useContext(D)},Se.useDebugValue=function(){},Se.useDeferredValue=function(D){return ie.current.useDeferredValue(D)},Se.useEffect=function(D,Y){return ie.current.useEffect(D,Y)},Se.useId=function(){return ie.current.useId()},Se.useImperativeHandle=function(D,Y,fe){return ie.current.useImperativeHandle(D,Y,fe)},Se.useInsertionEffect=function(D,Y){return ie.current.useInsertionEffect(D,Y)},Se.useLayoutEffect=function(D,Y){return ie.current.useLayoutEffect(D,Y)},Se.useMemo=function(D,Y){return ie.current.useMemo(D,Y)},Se.useReducer=function(D,Y,fe){return ie.current.useReducer(D,Y,fe)},Se.useRef=function(D){return ie.current.useRef(D)},Se.useState=function(D){return ie.current.useState(D)},Se.useSyncExternalStore=function(D,Y,fe){return ie.current.useSyncExternalStore(D,Y,fe)},Se.useTransition=function(){return ie.current.useTransition()},Se.version="18.3.1",Se}var Wf;function Td(){return Wf||(Wf=1,Hc.exports=Ry()),Hc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Py(){if(Hf)return mr;Hf=1;var t=Td(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var m,v={},b=null,w=null;p!==void 0&&(b=""+p),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)i.call(h,m)&&!l.hasOwnProperty(m)&&(v[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:u,key:b,ref:w,props:v,_owner:o.current}}return mr.Fragment=n,mr.jsx=c,mr.jsxs=c,mr}var Vf;function Ay(){return Vf||(Vf=1,Wc.exports=Py()),Wc.exports}var r=Ay(),E=Td();const qm=Vm(E),Ty=Ey({__proto__:null,default:qm},[E]);var ro={},Vc={exports:{}},Mt={},qc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Dy(){return qf||(qf=1,(function(t){function e(K,re){var G=K.length;K.push(re);e:for(;0<G;){var D=G-1>>>1,Y=K[D];if(0<o(Y,re))K[D]=re,K[G]=Y,G=D;else break e}}function n(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var re=K[0],G=K.pop();if(G!==re){K[0]=G;e:for(var D=0,Y=K.length,fe=Y>>>1;D<fe;){var ve=2*(D+1)-1,be=K[ve],ye=ve+1,Ae=K[ye];if(0>o(be,G))ye<Y&&0>o(Ae,be)?(K[D]=Ae,K[ye]=G,D=ye):(K[D]=be,K[ve]=G,D=ve);else if(ye<Y&&0>o(Ae,G))K[D]=Ae,K[ye]=G,D=ye;else break e}}return re}function o(K,re){var G=K.sortIndex-re.sortIndex;return G!==0?G:K.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],m=1,v=null,b=3,w=!1,j=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var re=n(p);re!==null;){if(re.callback===null)i(p);else if(re.startTime<=K)i(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(p)}}function z(K){if(N=!1,A(K),!j)if(n(h)!==null)j=!0,U(R);else{var re=n(p);re!==null&&ie(z,re.startTime-K)}}function R(K,re){j=!1,N&&(N=!1,_(C),C=-1),w=!0;var G=b;try{for(A(re),v=n(h);v!==null&&(!(v.expirationTime>re)||K&&!X());){var D=v.callback;if(typeof D=="function"){v.callback=null,b=v.priorityLevel;var Y=D(v.expirationTime<=re);re=t.unstable_now(),typeof Y=="function"?v.callback=Y:v===n(h)&&i(h),A(re)}else i(h);v=n(h)}if(v!==null)var fe=!0;else{var ve=n(p);ve!==null&&ie(z,ve.startTime-re),fe=!1}return fe}finally{v=null,b=G,w=!1}}var I=!1,M=null,C=-1,O=5,W=-1;function X(){return!(t.unstable_now()-W<O)}function F(){if(M!==null){var K=t.unstable_now();W=K;var re=!0;try{re=M(!0,K)}finally{re?te():(I=!1,M=null)}}else I=!1}var te;if(typeof S=="function")te=function(){S(F)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ae=V.port2;V.port1.onmessage=F,te=function(){ae.postMessage(null)}}else te=function(){y(F,0)};function U(K){M=K,I||(I=!0,te())}function ie(K,re){C=y(function(){K(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){j||w||(j=!0,U(R))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(K){switch(b){case 1:case 2:case 3:var re=3;break;default:re=b}var G=b;b=re;try{return K()}finally{b=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var G=b;b=K;try{return re()}finally{b=G}},t.unstable_scheduleCallback=function(K,re,G){var D=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?D+G:D):G=D,K){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=G+Y,K={id:m++,callback:re,priorityLevel:K,startTime:G,expirationTime:Y,sortIndex:-1},G>D?(K.sortIndex=G,e(p,K),n(h)===null&&K===n(p)&&(N?(_(C),C=-1):N=!0,ie(z,G-D))):(K.sortIndex=Y,e(h,K),j||w||(j=!0,U(R))),K},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(K){var re=b;return function(){var G=b;b=re;try{return K.apply(this,arguments)}finally{b=G}}}})(Yc)),Yc}var Yf;function My(){return Yf||(Yf=1,qc.exports=Dy()),qc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Ly(){if(Qf)return Mt;Qf=1;var t=Td(),e=My();function n(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(s,a){c(s,a),c(s+"Capture",a)}function c(s,a){for(o[s]=a,s=0;s<a.length;s++)i.add(a[s])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function b(s){return h.call(v,s)?!0:h.call(m,s)?!1:p.test(s)?v[s]=!0:(m[s]=!0,!1)}function w(s,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function j(s,a,d,f){if(a===null||typeof a>"u"||w(s,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function N(s,a,d,f,g,x,k){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=s,this.type=a,this.sanitizeURL=x,this.removeEmptyString=k}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){y[s]=new N(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];y[a]=new N(a,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){y[s]=new N(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){y[s]=new N(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){y[s]=new N(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){y[s]=new N(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){y[s]=new N(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){y[s]=new N(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){y[s]=new N(s,5,!1,s.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function S(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){y[s]=new N(s,1,!1,s.toLowerCase(),null,!1,!1)}),y.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){y[s]=new N(s,1,!1,s.toLowerCase(),null,!0,!0)});function A(s,a,d,f){var g=y.hasOwnProperty(a)?y[a]:null;(g!==null?g.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(j(a,d,g,f)&&(d=null),f||g===null?b(a)&&(d===null?s.removeAttribute(a):s.setAttribute(a,""+d)):g.mustUseProperty?s[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,f=g.attributeNamespace,d===null?s.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,f?s.setAttributeNS(f,a,d):s.setAttribute(a,d))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),I=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),K=Symbol.iterator;function re(s){return s===null||typeof s!="object"?null:(s=K&&s[K]||s["@@iterator"],typeof s=="function"?s:null)}var G=Object.assign,D;function Y(s){if(D===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);D=a&&a[1]||""}return`
`+D+s}var fe=!1;function ve(s,a){if(!s||fe)return"";fe=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(H){var f=H}Reflect.construct(s,[],a)}else{try{a.call()}catch(H){f=H}s.call(a.prototype)}else{try{throw Error()}catch(H){f=H}s()}}catch(H){if(H&&f&&typeof H.stack=="string"){for(var g=H.stack.split(`
`),x=f.stack.split(`
`),k=g.length-1,P=x.length-1;1<=k&&0<=P&&g[k]!==x[P];)P--;for(;1<=k&&0<=P;k--,P--)if(g[k]!==x[P]){if(k!==1||P!==1)do if(k--,P--,0>P||g[k]!==x[P]){var T=`
`+g[k].replace(" at new "," at ");return s.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",s.displayName)),T}while(1<=k&&0<=P);break}}}finally{fe=!1,Error.prepareStackTrace=d}return(s=s?s.displayName||s.name:"")?Y(s):""}function be(s){switch(s.tag){case 5:return Y(s.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return s=ve(s.type,!1),s;case 11:return s=ve(s.type.render,!1),s;case 1:return s=ve(s.type,!0),s;default:return""}}function ye(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case M:return"Fragment";case I:return"Portal";case O:return"Profiler";case C:return"StrictMode";case te:return"Suspense";case V:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case X:return(s.displayName||"Context")+".Consumer";case W:return(s._context.displayName||"Context")+".Provider";case F:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case ae:return a=s.displayName||null,a!==null?a:ye(s.type)||"Memo";case U:a=s._payload,s=s._init;try{return ye(s(a))}catch{}}return null}function Ae(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Re(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Fe(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function mt(s){var a=Fe(s)?"checked":"value",d=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),f=""+s[a];if(!s.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,x=d.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return g.call(this)},set:function(k){f=""+k,x.call(this,k)}}),Object.defineProperty(s,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(k){f=""+k},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function nn(s){s._valueTracker||(s._valueTracker=mt(s))}function ge(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return s&&(f=Fe(s)?s.checked?"true":"false":s.value),s=f,s!==d?(a.setValue(s),!0):!1}function Ft(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function ys(s,a){var d=a.checked;return G({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??s._wrapperState.initialChecked})}function Hn(s,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=Re(a.value!=null?a.value:d),s._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Js(s,a){a=a.checked,a!=null&&A(s,"checked",a,!1)}function Sn(s,a){Js(s,a);var d=Re(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&s.value===""||s.value!=d)&&(s.value=""+d):s.value!==""+d&&(s.value=""+d);else if(f==="submit"||f==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?fn(s,a.type,d):a.hasOwnProperty("defaultValue")&&fn(s,a.type,Re(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function bs(s,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,d||a===s.value||(s.value=a),s.defaultValue=a}d=s.name,d!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,d!==""&&(s.name=d)}function fn(s,a,d){(a!=="number"||Ft(s.ownerDocument)!==s)&&(d==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+d&&(s.defaultValue=""+d))}var Q=Array.isArray;function pe(s,a,d,f){if(s=s.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<s.length;d++)g=a.hasOwnProperty("$"+s[d].value),s[d].selected!==g&&(s[d].selected=g),g&&f&&(s[d].defaultSelected=!0)}else{for(d=""+Re(d),a=null,g=0;g<s.length;g++){if(s[g].value===d){s[g].selected=!0,f&&(s[g].defaultSelected=!0);return}a!==null||s[g].disabled||(a=s[g])}a!==null&&(a.selected=!0)}}function Ce(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Bt(s,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(n(92));if(Q(d)){if(1<d.length)throw Error(n(93));d=d[0]}a=d}a==null&&(a=""),d=a}s._wrapperState={initialValue:Re(d)}}function Z(s,a){var d=Re(a.value),f=Re(a.defaultValue);d!=null&&(d=""+d,d!==s.value&&(s.value=d),a.defaultValue==null&&s.defaultValue!==d&&(s.defaultValue=d)),f!=null&&(s.defaultValue=""+f)}function le(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function De(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?De(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var ct,dt=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,g){MSApp.execUnsafeLocalFunction(function(){return s(a,d,f,g)})}:s})(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(ct=ct||document.createElement("div"),ct.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=ct.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function nt(s,a){if(a){var d=s.firstChild;if(d&&d===s.lastChild&&d.nodeType===3){d.nodeValue=a;return}}s.textContent=a}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pn=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(s){pn.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),Le[a]=Le[s]})});function Gr(s,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Le.hasOwnProperty(s)&&Le[s]?(""+a).trim():a+"px"}function su(s,a){s=s.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,g=Gr(d,a[d],f);d==="float"&&(d="cssFloat"),f?s.setProperty(d,g):s[d]=g}}var Ax=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(s,a){if(a){if(Ax[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function nl(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function il(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var rl=null,Zs=null,ei=null;function iu(s){if(s=er(s)){if(typeof rl!="function")throw Error(n(280));var a=s.stateNode;a&&(a=ba(a),rl(s.stateNode,s.type,a))}}function ru(s){Zs?ei?ei.push(s):ei=[s]:Zs=s}function au(){if(Zs){var s=Zs,a=ei;if(ei=Zs=null,iu(s),a)for(s=0;s<a.length;s++)iu(a[s])}}function ou(s,a){return s(a)}function lu(){}var al=!1;function cu(s,a,d){if(al)return s(a,d);al=!0;try{return ou(s,a,d)}finally{al=!1,(Zs!==null||ei!==null)&&(lu(),au())}}function Di(s,a){var d=s.stateNode;if(d===null)return null;var f=ba(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(d&&typeof d!="function")throw Error(n(231,a,typeof d));return d}var ol=!1;if(u)try{var Mi={};Object.defineProperty(Mi,"passive",{get:function(){ol=!0}}),window.addEventListener("test",Mi,Mi),window.removeEventListener("test",Mi,Mi)}catch{ol=!1}function Tx(s,a,d,f,g,x,k,P,T){var H=Array.prototype.slice.call(arguments,3);try{a.apply(d,H)}catch(ee){this.onError(ee)}}var Li=!1,Jr=null,Zr=!1,ll=null,Dx={onError:function(s){Li=!0,Jr=s}};function Mx(s,a,d,f,g,x,k,P,T){Li=!1,Jr=null,Tx.apply(Dx,arguments)}function Lx(s,a,d,f,g,x,k,P,T){if(Mx.apply(this,arguments),Li){if(Li){var H=Jr;Li=!1,Jr=null}else throw Error(n(198));Zr||(Zr=!0,ll=H)}}function js(s){var a=s,d=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(d=a.return),s=a.return;while(s)}return a.tag===3?d:null}function du(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function uu(s){if(js(s)!==s)throw Error(n(188))}function Ox(s){var a=s.alternate;if(!a){if(a=js(s),a===null)throw Error(n(188));return a!==s?null:s}for(var d=s,f=a;;){var g=d.return;if(g===null)break;var x=g.alternate;if(x===null){if(f=g.return,f!==null){d=f;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===d)return uu(g),s;if(x===f)return uu(g),a;x=x.sibling}throw Error(n(188))}if(d.return!==f.return)d=g,f=x;else{for(var k=!1,P=g.child;P;){if(P===d){k=!0,d=g,f=x;break}if(P===f){k=!0,f=g,d=x;break}P=P.sibling}if(!k){for(P=x.child;P;){if(P===d){k=!0,d=x,f=g;break}if(P===f){k=!0,f=x,d=g;break}P=P.sibling}if(!k)throw Error(n(189))}}if(d.alternate!==f)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?s:a}function hu(s){return s=Ox(s),s!==null?fu(s):null}function fu(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=fu(s);if(a!==null)return a;s=s.sibling}return null}var pu=e.unstable_scheduleCallback,mu=e.unstable_cancelCallback,zx=e.unstable_shouldYield,Ix=e.unstable_requestPaint,Ge=e.unstable_now,Fx=e.unstable_getCurrentPriorityLevel,cl=e.unstable_ImmediatePriority,gu=e.unstable_UserBlockingPriority,ea=e.unstable_NormalPriority,Bx=e.unstable_LowPriority,xu=e.unstable_IdlePriority,ta=null,mn=null;function $x(s){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(ta,s,void 0,(s.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Hx,Ux=Math.log,Wx=Math.LN2;function Hx(s){return s>>>=0,s===0?32:31-(Ux(s)/Wx|0)|0}var na=64,sa=4194304;function Oi(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function ia(s,a){var d=s.pendingLanes;if(d===0)return 0;var f=0,g=s.suspendedLanes,x=s.pingedLanes,k=d&268435455;if(k!==0){var P=k&~g;P!==0?f=Oi(P):(x&=k,x!==0&&(f=Oi(x)))}else k=d&~g,k!==0?f=Oi(k):x!==0&&(f=Oi(x));if(f===0)return 0;if(a!==0&&a!==f&&(a&g)===0&&(g=f&-f,x=a&-a,g>=x||g===16&&(x&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=f;0<a;)d=31-sn(a),g=1<<d,f|=s[d],a&=~g;return f}function Vx(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(s,a){for(var d=s.suspendedLanes,f=s.pingedLanes,g=s.expirationTimes,x=s.pendingLanes;0<x;){var k=31-sn(x),P=1<<k,T=g[k];T===-1?((P&d)===0||(P&f)!==0)&&(g[k]=Vx(P,a)):T<=a&&(s.expiredLanes|=P),x&=~P}}function dl(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function vu(){var s=na;return na<<=1,(na&4194240)===0&&(na=64),s}function ul(s){for(var a=[],d=0;31>d;d++)a.push(s);return a}function zi(s,a,d){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-sn(a),s[a]=d}function Yx(s,a){var d=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var f=s.eventTimes;for(s=s.expirationTimes;0<d;){var g=31-sn(d),x=1<<g;a[g]=0,f[g]=-1,s[g]=-1,d&=~x}}function hl(s,a){var d=s.entangledLanes|=a;for(s=s.entanglements;d;){var f=31-sn(d),g=1<<f;g&a|s[f]&a&&(s[f]|=a),d&=~g}}var Oe=0;function yu(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var bu,fl,ju,wu,Nu,pl=!1,ra=[],Vn=null,qn=null,Yn=null,Ii=new Map,Fi=new Map,Qn=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(s,a){switch(s){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Ii.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(a.pointerId)}}function Bi(s,a,d,f,g,x){return s===null||s.nativeEvent!==x?(s={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:x,targetContainers:[g]},a!==null&&(a=er(a),a!==null&&fl(a)),s):(s.eventSystemFlags|=f,a=s.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),s)}function Kx(s,a,d,f,g){switch(a){case"focusin":return Vn=Bi(Vn,s,a,d,f,g),!0;case"dragenter":return qn=Bi(qn,s,a,d,f,g),!0;case"mouseover":return Yn=Bi(Yn,s,a,d,f,g),!0;case"pointerover":var x=g.pointerId;return Ii.set(x,Bi(Ii.get(x)||null,s,a,d,f,g)),!0;case"gotpointercapture":return x=g.pointerId,Fi.set(x,Bi(Fi.get(x)||null,s,a,d,f,g)),!0}return!1}function ku(s){var a=ws(s.target);if(a!==null){var d=js(a);if(d!==null){if(a=d.tag,a===13){if(a=du(d),a!==null){s.blockedOn=a,Nu(s.priority,function(){ju(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){s.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}s.blockedOn=null}function aa(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var d=gl(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(d===null){d=s.nativeEvent;var f=new d.constructor(d.type,d);sl=f,d.target.dispatchEvent(f),sl=null}else return a=er(d),a!==null&&fl(a),s.blockedOn=d,!1;a.shift()}return!0}function Su(s,a,d){aa(s)&&d.delete(a)}function Xx(){pl=!1,Vn!==null&&aa(Vn)&&(Vn=null),qn!==null&&aa(qn)&&(qn=null),Yn!==null&&aa(Yn)&&(Yn=null),Ii.forEach(Su),Fi.forEach(Su)}function $i(s,a){s.blockedOn===a&&(s.blockedOn=null,pl||(pl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xx)))}function Ui(s){function a(g){return $i(g,s)}if(0<ra.length){$i(ra[0],s);for(var d=1;d<ra.length;d++){var f=ra[d];f.blockedOn===s&&(f.blockedOn=null)}}for(Vn!==null&&$i(Vn,s),qn!==null&&$i(qn,s),Yn!==null&&$i(Yn,s),Ii.forEach(a),Fi.forEach(a),d=0;d<Qn.length;d++)f=Qn[d],f.blockedOn===s&&(f.blockedOn=null);for(;0<Qn.length&&(d=Qn[0],d.blockedOn===null);)ku(d),d.blockedOn===null&&Qn.shift()}var ti=z.ReactCurrentBatchConfig,oa=!0;function Gx(s,a,d,f){var g=Oe,x=ti.transition;ti.transition=null;try{Oe=1,ml(s,a,d,f)}finally{Oe=g,ti.transition=x}}function Jx(s,a,d,f){var g=Oe,x=ti.transition;ti.transition=null;try{Oe=4,ml(s,a,d,f)}finally{Oe=g,ti.transition=x}}function ml(s,a,d,f){if(oa){var g=gl(s,a,d,f);if(g===null)Dl(s,a,f,la,d),_u(s,f);else if(Kx(g,s,a,d,f))f.stopPropagation();else if(_u(s,f),a&4&&-1<Qx.indexOf(s)){for(;g!==null;){var x=er(g);if(x!==null&&bu(x),x=gl(s,a,d,f),x===null&&Dl(s,a,f,la,d),x===g)break;g=x}g!==null&&f.stopPropagation()}else Dl(s,a,f,null,d)}}var la=null;function gl(s,a,d,f){if(la=null,s=il(f),s=ws(s),s!==null)if(a=js(s),a===null)s=null;else if(d=a.tag,d===13){if(s=du(a),s!==null)return s;s=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return la=s,null}function Cu(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fx()){case cl:return 1;case gu:return 4;case ea:case Bx:return 16;case xu:return 536870912;default:return 16}default:return 16}}var Kn=null,xl=null,ca=null;function Eu(){if(ca)return ca;var s,a=xl,d=a.length,f,g="value"in Kn?Kn.value:Kn.textContent,x=g.length;for(s=0;s<d&&a[s]===g[s];s++);var k=d-s;for(f=1;f<=k&&a[d-f]===g[x-f];f++);return ca=g.slice(s,1<f?1-f:void 0)}function da(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function ua(){return!0}function Ru(){return!1}function $t(s){function a(d,f,g,x,k){this._reactName=d,this._targetInst=g,this.type=f,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var P in s)s.hasOwnProperty(P)&&(d=s[P],this[P]=d?d(x):x[P]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ua:Ru,this.isPropagationStopped=Ru,this}return G(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),a}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=$t(ni),Wi=G({},ni,{view:0,detail:0}),Zx=$t(Wi),yl,bl,Hi,ha=G({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wl,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Hi&&(Hi&&s.type==="mousemove"?(yl=s.screenX-Hi.screenX,bl=s.screenY-Hi.screenY):bl=yl=0,Hi=s),yl)},movementY:function(s){return"movementY"in s?s.movementY:bl}}),Pu=$t(ha),ev=G({},ha,{dataTransfer:0}),tv=$t(ev),nv=G({},Wi,{relatedTarget:0}),jl=$t(nv),sv=G({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=$t(sv),rv=G({},ni,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),av=$t(rv),ov=G({},ni,{data:0}),Au=$t(ov),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uv(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=dv[s])?!!a[s]:!1}function wl(){return uv}var hv=G({},Wi,{key:function(s){if(s.key){var a=lv[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=da(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?cv[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wl,charCode:function(s){return s.type==="keypress"?da(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?da(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),fv=$t(hv),pv=G({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=$t(pv),mv=G({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wl}),gv=$t(mv),xv=G({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=$t(xv),yv=G({},ha,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=$t(yv),jv=[9,13,27,32],Nl=u&&"CompositionEvent"in window,Vi=null;u&&"documentMode"in document&&(Vi=document.documentMode);var wv=u&&"TextEvent"in window&&!Vi,Du=u&&(!Nl||Vi&&8<Vi&&11>=Vi),Mu=" ",Lu=!1;function Ou(s,a){switch(s){case"keyup":return jv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var si=!1;function Nv(s,a){switch(s){case"compositionend":return zu(a);case"keypress":return a.which!==32?null:(Lu=!0,Mu);case"textInput":return s=a.data,s===Mu&&Lu?null:s;default:return null}}function _v(s,a){if(si)return s==="compositionend"||!Nl&&Ou(s,a)?(s=Eu(),ca=xl=Kn=null,si=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Du&&a.locale!=="ko"?null:a.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!kv[s.type]:a==="textarea"}function Fu(s,a,d,f){ru(f),a=xa(a,"onChange"),0<a.length&&(d=new vl("onChange","change",null,d,f),s.push({event:d,listeners:a}))}var qi=null,Yi=null;function Sv(s){sh(s,0)}function fa(s){var a=li(s);if(ge(a))return s}function Cv(s,a){if(s==="change")return a}var Bu=!1;if(u){var _l;if(u){var kl="oninput"in document;if(!kl){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),kl=typeof $u.oninput=="function"}_l=kl}else _l=!1;Bu=_l&&(!document.documentMode||9<document.documentMode)}function Uu(){qi&&(qi.detachEvent("onpropertychange",Wu),Yi=qi=null)}function Wu(s){if(s.propertyName==="value"&&fa(Yi)){var a=[];Fu(a,Yi,s,il(s)),cu(Sv,a)}}function Ev(s,a,d){s==="focusin"?(Uu(),qi=a,Yi=d,qi.attachEvent("onpropertychange",Wu)):s==="focusout"&&Uu()}function Rv(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return fa(Yi)}function Pv(s,a){if(s==="click")return fa(a)}function Av(s,a){if(s==="input"||s==="change")return fa(a)}function Tv(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var rn=typeof Object.is=="function"?Object.is:Tv;function Qi(s,a){if(rn(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var d=Object.keys(s),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var g=d[f];if(!h.call(a,g)||!rn(s[g],a[g]))return!1}return!0}function Hu(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Vu(s,a){var d=Hu(s);s=0;for(var f;d;){if(d.nodeType===3){if(f=s+d.textContent.length,s<=a&&f>=a)return{node:d,offset:a-s};s=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Hu(d)}}function qu(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?qu(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function Yu(){for(var s=window,a=Ft();a instanceof s.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)s=a.contentWindow;else break;a=Ft(s.document)}return a}function Sl(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function Dv(s){var a=Yu(),d=s.focusedElem,f=s.selectionRange;if(a!==d&&d&&d.ownerDocument&&qu(d.ownerDocument.documentElement,d)){if(f!==null&&Sl(d)){if(a=f.start,s=f.end,s===void 0&&(s=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(s,d.value.length);else if(s=(a=d.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var g=d.textContent.length,x=Math.min(f.start,g);f=f.end===void 0?x:Math.min(f.end,g),!s.extend&&x>f&&(g=f,f=x,x=g),g=Vu(d,x);var k=Vu(d,f);g&&k&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==k.node||s.focusOffset!==k.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),s.removeAllRanges(),x>f?(s.addRange(a),s.extend(k.node,k.offset)):(a.setEnd(k.node,k.offset),s.addRange(a)))}}for(a=[],s=d;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)s=a[d],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Mv=u&&"documentMode"in document&&11>=document.documentMode,ii=null,Cl=null,Ki=null,El=!1;function Qu(s,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;El||ii==null||ii!==Ft(f)||(f=ii,"selectionStart"in f&&Sl(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ki&&Qi(Ki,f)||(Ki=f,f=xa(Cl,"onSelect"),0<f.length&&(a=new vl("onSelect","select",null,a,d),s.push({event:a,listeners:f}),a.target=ii)))}function pa(s,a){var d={};return d[s.toLowerCase()]=a.toLowerCase(),d["Webkit"+s]="webkit"+a,d["Moz"+s]="moz"+a,d}var ri={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Rl={},Ku={};u&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function ma(s){if(Rl[s])return Rl[s];if(!ri[s])return s;var a=ri[s],d;for(d in a)if(a.hasOwnProperty(d)&&d in Ku)return Rl[s]=a[d];return s}var Xu=ma("animationend"),Gu=ma("animationiteration"),Ju=ma("animationstart"),Zu=ma("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(s,a){eh.set(s,a),l(a,[s])}for(var Pl=0;Pl<th.length;Pl++){var Al=th[Pl],Lv=Al.toLowerCase(),Ov=Al[0].toUpperCase()+Al.slice(1);Xn(Lv,"on"+Ov)}Xn(Xu,"onAnimationEnd"),Xn(Gu,"onAnimationIteration"),Xn(Ju,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Zu,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function nh(s,a,d){var f=s.type||"unknown-event";s.currentTarget=d,Lx(f,a,void 0,s),s.currentTarget=null}function sh(s,a){a=(a&4)!==0;for(var d=0;d<s.length;d++){var f=s[d],g=f.event;f=f.listeners;e:{var x=void 0;if(a)for(var k=f.length-1;0<=k;k--){var P=f[k],T=P.instance,H=P.currentTarget;if(P=P.listener,T!==x&&g.isPropagationStopped())break e;nh(g,P,H),x=T}else for(k=0;k<f.length;k++){if(P=f[k],T=P.instance,H=P.currentTarget,P=P.listener,T!==x&&g.isPropagationStopped())break e;nh(g,P,H),x=T}}}if(Zr)throw s=ll,Zr=!1,ll=null,s}function $e(s,a){var d=a[Fl];d===void 0&&(d=a[Fl]=new Set);var f=s+"__bubble";d.has(f)||(ih(a,s,2,!1),d.add(f))}function Tl(s,a,d){var f=0;a&&(f|=4),ih(d,s,f,a)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Gi(s){if(!s[ga]){s[ga]=!0,i.forEach(function(d){d!=="selectionchange"&&(zv.has(d)||Tl(d,!1,s),Tl(d,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[ga]||(a[ga]=!0,Tl("selectionchange",!1,a))}}function ih(s,a,d,f){switch(Cu(a)){case 1:var g=Gx;break;case 4:g=Jx;break;default:g=ml}d=g.bind(null,a,d,s),g=void 0,!ol||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),f?g!==void 0?s.addEventListener(a,d,{capture:!0,passive:g}):s.addEventListener(a,d,!0):g!==void 0?s.addEventListener(a,d,{passive:g}):s.addEventListener(a,d,!1)}function Dl(s,a,d,f,g){var x=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var k=f.tag;if(k===3||k===4){var P=f.stateNode.containerInfo;if(P===g||P.nodeType===8&&P.parentNode===g)break;if(k===4)for(k=f.return;k!==null;){var T=k.tag;if((T===3||T===4)&&(T=k.stateNode.containerInfo,T===g||T.nodeType===8&&T.parentNode===g))return;k=k.return}for(;P!==null;){if(k=ws(P),k===null)return;if(T=k.tag,T===5||T===6){f=x=k;continue e}P=P.parentNode}}f=f.return}cu(function(){var H=x,ee=il(d),ne=[];e:{var J=eh.get(s);if(J!==void 0){var ce=vl,ue=s;switch(s){case"keypress":if(da(d)===0)break e;case"keydown":case"keyup":ce=fv;break;case"focusin":ue="focus",ce=jl;break;case"focusout":ue="blur",ce=jl;break;case"beforeblur":case"afterblur":ce=jl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=gv;break;case Xu:case Gu:case Ju:ce=iv;break;case Zu:ce=vv;break;case"scroll":ce=Zx;break;case"wheel":ce=bv;break;case"copy":case"cut":case"paste":ce=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Tu}var he=(a&4)!==0,Je=!he&&s==="scroll",B=he?J!==null?J+"Capture":null:J;he=[];for(var L=H,$;L!==null;){$=L;var se=$.stateNode;if($.tag===5&&se!==null&&($=se,B!==null&&(se=Di(L,B),se!=null&&he.push(Ji(L,se,$)))),Je)break;L=L.return}0<he.length&&(J=new ce(J,ue,null,d,ee),ne.push({event:J,listeners:he}))}}if((a&7)===0){e:{if(J=s==="mouseover"||s==="pointerover",ce=s==="mouseout"||s==="pointerout",J&&d!==sl&&(ue=d.relatedTarget||d.fromElement)&&(ws(ue)||ue[Cn]))break e;if((ce||J)&&(J=ee.window===ee?ee:(J=ee.ownerDocument)?J.defaultView||J.parentWindow:window,ce?(ue=d.relatedTarget||d.toElement,ce=H,ue=ue?ws(ue):null,ue!==null&&(Je=js(ue),ue!==Je||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ce=null,ue=H),ce!==ue)){if(he=Pu,se="onMouseLeave",B="onMouseEnter",L="mouse",(s==="pointerout"||s==="pointerover")&&(he=Tu,se="onPointerLeave",B="onPointerEnter",L="pointer"),Je=ce==null?J:li(ce),$=ue==null?J:li(ue),J=new he(se,L+"leave",ce,d,ee),J.target=Je,J.relatedTarget=$,se=null,ws(ee)===H&&(he=new he(B,L+"enter",ue,d,ee),he.target=$,he.relatedTarget=Je,se=he),Je=se,ce&&ue)t:{for(he=ce,B=ue,L=0,$=he;$;$=ai($))L++;for($=0,se=B;se;se=ai(se))$++;for(;0<L-$;)he=ai(he),L--;for(;0<$-L;)B=ai(B),$--;for(;L--;){if(he===B||B!==null&&he===B.alternate)break t;he=ai(he),B=ai(B)}he=null}else he=null;ce!==null&&rh(ne,J,ce,he,!1),ue!==null&&Je!==null&&rh(ne,Je,ue,he,!0)}}e:{if(J=H?li(H):window,ce=J.nodeName&&J.nodeName.toLowerCase(),ce==="select"||ce==="input"&&J.type==="file")var xe=Cv;else if(Iu(J))if(Bu)xe=Av;else{xe=Rv;var je=Ev}else(ce=J.nodeName)&&ce.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(xe=Pv);if(xe&&(xe=xe(s,H))){Fu(ne,xe,d,ee);break e}je&&je(s,J,H),s==="focusout"&&(je=J._wrapperState)&&je.controlled&&J.type==="number"&&fn(J,"number",J.value)}switch(je=H?li(H):window,s){case"focusin":(Iu(je)||je.contentEditable==="true")&&(ii=je,Cl=H,Ki=null);break;case"focusout":Ki=Cl=ii=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,Qu(ne,d,ee);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":Qu(ne,d,ee)}var we;if(Nl)e:{switch(s){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else si?Ou(s,d)&&(_e="onCompositionEnd"):s==="keydown"&&d.keyCode===229&&(_e="onCompositionStart");_e&&(Du&&d.locale!=="ko"&&(si||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&si&&(we=Eu()):(Kn=ee,xl="value"in Kn?Kn.value:Kn.textContent,si=!0)),je=xa(H,_e),0<je.length&&(_e=new Au(_e,s,null,d,ee),ne.push({event:_e,listeners:je}),we?_e.data=we:(we=zu(d),we!==null&&(_e.data=we)))),(we=wv?Nv(s,d):_v(s,d))&&(H=xa(H,"onBeforeInput"),0<H.length&&(ee=new Au("onBeforeInput","beforeinput",null,d,ee),ne.push({event:ee,listeners:H}),ee.data=we))}sh(ne,a)})}function Ji(s,a,d){return{instance:s,listener:a,currentTarget:d}}function xa(s,a){for(var d=a+"Capture",f=[];s!==null;){var g=s,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Di(s,d),x!=null&&f.unshift(Ji(s,x,g)),x=Di(s,a),x!=null&&f.push(Ji(s,x,g))),s=s.return}return f}function ai(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function rh(s,a,d,f,g){for(var x=a._reactName,k=[];d!==null&&d!==f;){var P=d,T=P.alternate,H=P.stateNode;if(T!==null&&T===f)break;P.tag===5&&H!==null&&(P=H,g?(T=Di(d,x),T!=null&&k.unshift(Ji(d,T,P))):g||(T=Di(d,x),T!=null&&k.push(Ji(d,T,P)))),d=d.return}k.length!==0&&s.push({event:a,listeners:k})}var Iv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function ah(s){return(typeof s=="string"?s:""+s).replace(Iv,`
`).replace(Fv,"")}function va(s,a,d){if(a=ah(a),ah(s)!==a&&d)throw Error(n(425))}function ya(){}var Ml=null,Ll=null;function Ol(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var zl=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(s){return oh.resolve(null).then(s).catch(Uv)}:zl;function Uv(s){setTimeout(function(){throw s})}function Il(s,a){var d=a,f=0;do{var g=d.nextSibling;if(s.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(f===0){s.removeChild(g),Ui(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=g}while(d);Ui(a)}function Gn(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function lh(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return s;a--}else d==="/$"&&a++}s=s.previousSibling}return null}var oi=Math.random().toString(36).slice(2),gn="__reactFiber$"+oi,Zi="__reactProps$"+oi,Cn="__reactContainer$"+oi,Fl="__reactEvents$"+oi,Wv="__reactListeners$"+oi,Hv="__reactHandles$"+oi;function ws(s){var a=s[gn];if(a)return a;for(var d=s.parentNode;d;){if(a=d[Cn]||d[gn]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(s=lh(s);s!==null;){if(d=s[gn])return d;s=lh(s)}return a}s=d,d=s.parentNode}return null}function er(s){return s=s[gn]||s[Cn],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function li(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function ba(s){return s[Zi]||null}var Bl=[],ci=-1;function Jn(s){return{current:s}}function Ue(s){0>ci||(s.current=Bl[ci],Bl[ci]=null,ci--)}function Be(s,a){ci++,Bl[ci]=s.current,s.current=a}var Zn={},vt=Jn(Zn),Rt=Jn(!1),Ns=Zn;function di(s,a){var d=s.type.contextTypes;if(!d)return Zn;var f=s.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in d)g[x]=a[x];return f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=g),g}function Pt(s){return s=s.childContextTypes,s!=null}function ja(){Ue(Rt),Ue(vt)}function ch(s,a,d){if(vt.current!==Zn)throw Error(n(168));Be(vt,a),Be(Rt,d)}function dh(s,a,d){var f=s.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var g in f)if(!(g in a))throw Error(n(108,Ae(s)||"Unknown",g));return G({},d,f)}function wa(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Zn,Ns=vt.current,Be(vt,s),Be(Rt,Rt.current),!0}function uh(s,a,d){var f=s.stateNode;if(!f)throw Error(n(169));d?(s=dh(s,a,Ns),f.__reactInternalMemoizedMergedChildContext=s,Ue(Rt),Ue(vt),Be(vt,s)):Ue(Rt),Be(Rt,d)}var En=null,Na=!1,$l=!1;function hh(s){En===null?En=[s]:En.push(s)}function Vv(s){Na=!0,hh(s)}function es(){if(!$l&&En!==null){$l=!0;var s=0,a=Oe;try{var d=En;for(Oe=1;s<d.length;s++){var f=d[s];do f=f(!0);while(f!==null)}En=null,Na=!1}catch(g){throw En!==null&&(En=En.slice(s+1)),pu(cl,es),g}finally{Oe=a,$l=!1}}return null}var ui=[],hi=0,_a=null,ka=0,qt=[],Yt=0,_s=null,Rn=1,Pn="";function ks(s,a){ui[hi++]=ka,ui[hi++]=_a,_a=s,ka=a}function fh(s,a,d){qt[Yt++]=Rn,qt[Yt++]=Pn,qt[Yt++]=_s,_s=s;var f=Rn;s=Pn;var g=32-sn(f)-1;f&=~(1<<g),d+=1;var x=32-sn(a)+g;if(30<x){var k=g-g%5;x=(f&(1<<k)-1).toString(32),f>>=k,g-=k,Rn=1<<32-sn(a)+g|d<<g|f,Pn=x+s}else Rn=1<<x|d<<g|f,Pn=s}function Ul(s){s.return!==null&&(ks(s,1),fh(s,1,0))}function Wl(s){for(;s===_a;)_a=ui[--hi],ui[hi]=null,ka=ui[--hi],ui[hi]=null;for(;s===_s;)_s=qt[--Yt],qt[Yt]=null,Pn=qt[--Yt],qt[Yt]=null,Rn=qt[--Yt],qt[Yt]=null}var Ut=null,Wt=null,He=!1,an=null;function ph(s,a){var d=Gt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=s,a=s.deletions,a===null?(s.deletions=[d],s.flags|=16):a.push(d)}function mh(s,a){switch(s.tag){case 5:var d=s.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,Ut=s,Wt=Gn(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,Ut=s,Wt=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=_s!==null?{id:Rn,overflow:Pn}:null,s.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Gt(18,null,null,0),d.stateNode=a,d.return=s,s.child=d,Ut=s,Wt=null,!0):!1;default:return!1}}function Hl(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Vl(s){if(He){var a=Wt;if(a){var d=a;if(!mh(s,a)){if(Hl(s))throw Error(n(418));a=Gn(d.nextSibling);var f=Ut;a&&mh(s,a)?ph(f,d):(s.flags=s.flags&-4097|2,He=!1,Ut=s)}}else{if(Hl(s))throw Error(n(418));s.flags=s.flags&-4097|2,He=!1,Ut=s}}}function gh(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Ut=s}function Sa(s){if(s!==Ut)return!1;if(!He)return gh(s),He=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!Ol(s.type,s.memoizedProps)),a&&(a=Wt)){if(Hl(s))throw xh(),Error(n(418));for(;a;)ph(s,a),a=Gn(a.nextSibling)}if(gh(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="/$"){if(a===0){Wt=Gn(s.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}s=s.nextSibling}Wt=null}}else Wt=Ut?Gn(s.stateNode.nextSibling):null;return!0}function xh(){for(var s=Wt;s;)s=Gn(s.nextSibling)}function fi(){Wt=Ut=null,He=!1}function ql(s){an===null?an=[s]:an.push(s)}var qv=z.ReactCurrentBatchConfig;function tr(s,a,d){if(s=d.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var f=d.stateNode}if(!f)throw Error(n(147,s));var g=f,x=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(k){var P=g.refs;k===null?delete P[x]:P[x]=k},a._stringRef=x,a)}if(typeof s!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,s))}return s}function Ca(s,a){throw s=Object.prototype.toString.call(a),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function vh(s){var a=s._init;return a(s._payload)}function yh(s){function a(B,L){if(s){var $=B.deletions;$===null?(B.deletions=[L],B.flags|=16):$.push(L)}}function d(B,L){if(!s)return null;for(;L!==null;)a(B,L),L=L.sibling;return null}function f(B,L){for(B=new Map;L!==null;)L.key!==null?B.set(L.key,L):B.set(L.index,L),L=L.sibling;return B}function g(B,L){return B=ls(B,L),B.index=0,B.sibling=null,B}function x(B,L,$){return B.index=$,s?($=B.alternate,$!==null?($=$.index,$<L?(B.flags|=2,L):$):(B.flags|=2,L)):(B.flags|=1048576,L)}function k(B){return s&&B.alternate===null&&(B.flags|=2),B}function P(B,L,$,se){return L===null||L.tag!==6?(L=zc($,B.mode,se),L.return=B,L):(L=g(L,$),L.return=B,L)}function T(B,L,$,se){var xe=$.type;return xe===M?ee(B,L,$.props.children,se,$.key):L!==null&&(L.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&vh(xe)===L.type)?(se=g(L,$.props),se.ref=tr(B,L,$),se.return=B,se):(se=Ga($.type,$.key,$.props,null,B.mode,se),se.ref=tr(B,L,$),se.return=B,se)}function H(B,L,$,se){return L===null||L.tag!==4||L.stateNode.containerInfo!==$.containerInfo||L.stateNode.implementation!==$.implementation?(L=Ic($,B.mode,se),L.return=B,L):(L=g(L,$.children||[]),L.return=B,L)}function ee(B,L,$,se,xe){return L===null||L.tag!==7?(L=Ds($,B.mode,se,xe),L.return=B,L):(L=g(L,$),L.return=B,L)}function ne(B,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return L=zc(""+L,B.mode,$),L.return=B,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case R:return $=Ga(L.type,L.key,L.props,null,B.mode,$),$.ref=tr(B,null,L),$.return=B,$;case I:return L=Ic(L,B.mode,$),L.return=B,L;case U:var se=L._init;return ne(B,se(L._payload),$)}if(Q(L)||re(L))return L=Ds(L,B.mode,$,null),L.return=B,L;Ca(B,L)}return null}function J(B,L,$,se){var xe=L!==null?L.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return xe!==null?null:P(B,L,""+$,se);if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return $.key===xe?T(B,L,$,se):null;case I:return $.key===xe?H(B,L,$,se):null;case U:return xe=$._init,J(B,L,xe($._payload),se)}if(Q($)||re($))return xe!==null?null:ee(B,L,$,se,null);Ca(B,$)}return null}function ce(B,L,$,se,xe){if(typeof se=="string"&&se!==""||typeof se=="number")return B=B.get($)||null,P(L,B,""+se,xe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case R:return B=B.get(se.key===null?$:se.key)||null,T(L,B,se,xe);case I:return B=B.get(se.key===null?$:se.key)||null,H(L,B,se,xe);case U:var je=se._init;return ce(B,L,$,je(se._payload),xe)}if(Q(se)||re(se))return B=B.get($)||null,ee(L,B,se,xe,null);Ca(L,se)}return null}function ue(B,L,$,se){for(var xe=null,je=null,we=L,_e=L=0,ft=null;we!==null&&_e<$.length;_e++){we.index>_e?(ft=we,we=null):ft=we.sibling;var Te=J(B,we,$[_e],se);if(Te===null){we===null&&(we=ft);break}s&&we&&Te.alternate===null&&a(B,we),L=x(Te,L,_e),je===null?xe=Te:je.sibling=Te,je=Te,we=ft}if(_e===$.length)return d(B,we),He&&ks(B,_e),xe;if(we===null){for(;_e<$.length;_e++)we=ne(B,$[_e],se),we!==null&&(L=x(we,L,_e),je===null?xe=we:je.sibling=we,je=we);return He&&ks(B,_e),xe}for(we=f(B,we);_e<$.length;_e++)ft=ce(we,B,_e,$[_e],se),ft!==null&&(s&&ft.alternate!==null&&we.delete(ft.key===null?_e:ft.key),L=x(ft,L,_e),je===null?xe=ft:je.sibling=ft,je=ft);return s&&we.forEach(function(cs){return a(B,cs)}),He&&ks(B,_e),xe}function he(B,L,$,se){var xe=re($);if(typeof xe!="function")throw Error(n(150));if($=xe.call($),$==null)throw Error(n(151));for(var je=xe=null,we=L,_e=L=0,ft=null,Te=$.next();we!==null&&!Te.done;_e++,Te=$.next()){we.index>_e?(ft=we,we=null):ft=we.sibling;var cs=J(B,we,Te.value,se);if(cs===null){we===null&&(we=ft);break}s&&we&&cs.alternate===null&&a(B,we),L=x(cs,L,_e),je===null?xe=cs:je.sibling=cs,je=cs,we=ft}if(Te.done)return d(B,we),He&&ks(B,_e),xe;if(we===null){for(;!Te.done;_e++,Te=$.next())Te=ne(B,Te.value,se),Te!==null&&(L=x(Te,L,_e),je===null?xe=Te:je.sibling=Te,je=Te);return He&&ks(B,_e),xe}for(we=f(B,we);!Te.done;_e++,Te=$.next())Te=ce(we,B,_e,Te.value,se),Te!==null&&(s&&Te.alternate!==null&&we.delete(Te.key===null?_e:Te.key),L=x(Te,L,_e),je===null?xe=Te:je.sibling=Te,je=Te);return s&&we.forEach(function(ky){return a(B,ky)}),He&&ks(B,_e),xe}function Je(B,L,$,se){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case R:e:{for(var xe=$.key,je=L;je!==null;){if(je.key===xe){if(xe=$.type,xe===M){if(je.tag===7){d(B,je.sibling),L=g(je,$.props.children),L.return=B,B=L;break e}}else if(je.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&vh(xe)===je.type){d(B,je.sibling),L=g(je,$.props),L.ref=tr(B,je,$),L.return=B,B=L;break e}d(B,je);break}else a(B,je);je=je.sibling}$.type===M?(L=Ds($.props.children,B.mode,se,$.key),L.return=B,B=L):(se=Ga($.type,$.key,$.props,null,B.mode,se),se.ref=tr(B,L,$),se.return=B,B=se)}return k(B);case I:e:{for(je=$.key;L!==null;){if(L.key===je)if(L.tag===4&&L.stateNode.containerInfo===$.containerInfo&&L.stateNode.implementation===$.implementation){d(B,L.sibling),L=g(L,$.children||[]),L.return=B,B=L;break e}else{d(B,L);break}else a(B,L);L=L.sibling}L=Ic($,B.mode,se),L.return=B,B=L}return k(B);case U:return je=$._init,Je(B,L,je($._payload),se)}if(Q($))return ue(B,L,$,se);if(re($))return he(B,L,$,se);Ca(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,L!==null&&L.tag===6?(d(B,L.sibling),L=g(L,$),L.return=B,B=L):(d(B,L),L=zc($,B.mode,se),L.return=B,B=L),k(B)):d(B,L)}return Je}var pi=yh(!0),bh=yh(!1),Ea=Jn(null),Ra=null,mi=null,Yl=null;function Ql(){Yl=mi=Ra=null}function Kl(s){var a=Ea.current;Ue(Ea),s._currentValue=a}function Xl(s,a,d){for(;s!==null;){var f=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),s===d)break;s=s.return}}function gi(s,a){Ra=s,Yl=mi=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&a)!==0&&(At=!0),s.firstContext=null)}function Qt(s){var a=s._currentValue;if(Yl!==s)if(s={context:s,memoizedValue:a,next:null},mi===null){if(Ra===null)throw Error(n(308));mi=s,Ra.dependencies={lanes:0,firstContext:s}}else mi=mi.next=s;return a}var Ss=null;function Gl(s){Ss===null?Ss=[s]:Ss.push(s)}function jh(s,a,d,f){var g=a.interleaved;return g===null?(d.next=d,Gl(a)):(d.next=g.next,g.next=d),a.interleaved=d,An(s,f)}function An(s,a){s.lanes|=a;var d=s.alternate;for(d!==null&&(d.lanes|=a),d=s,s=s.return;s!==null;)s.childLanes|=a,d=s.alternate,d!==null&&(d.childLanes|=a),d=s,s=s.return;return d.tag===3?d.stateNode:null}var ts=!1;function Jl(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Tn(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function ns(s,a,d){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,(Pe&2)!==0){var g=f.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a,An(s,d)}return g=f.interleaved,g===null?(a.next=a,Gl(f)):(a.next=g.next,g.next=a),f.interleaved=a,An(s,d)}function Pa(s,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,hl(s,d)}}function Nh(s,a){var d=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var g=null,x=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};x===null?g=x=k:x=x.next=k,d=d.next}while(d!==null);x===null?g=x=a:x=x.next=a}else g=x=a;d={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:f.shared,effects:f.effects},s.updateQueue=d;return}s=d.lastBaseUpdate,s===null?d.firstBaseUpdate=a:s.next=a,d.lastBaseUpdate=a}function Aa(s,a,d,f){var g=s.updateQueue;ts=!1;var x=g.firstBaseUpdate,k=g.lastBaseUpdate,P=g.shared.pending;if(P!==null){g.shared.pending=null;var T=P,H=T.next;T.next=null,k===null?x=H:k.next=H,k=T;var ee=s.alternate;ee!==null&&(ee=ee.updateQueue,P=ee.lastBaseUpdate,P!==k&&(P===null?ee.firstBaseUpdate=H:P.next=H,ee.lastBaseUpdate=T))}if(x!==null){var ne=g.baseState;k=0,ee=H=T=null,P=x;do{var J=P.lane,ce=P.eventTime;if((f&J)===J){ee!==null&&(ee=ee.next={eventTime:ce,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ue=s,he=P;switch(J=a,ce=d,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){ne=ue.call(ce,ne,J);break e}ne=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,J=typeof ue=="function"?ue.call(ce,ne,J):ue,J==null)break e;ne=G({},ne,J);break e;case 2:ts=!0}}P.callback!==null&&P.lane!==0&&(s.flags|=64,J=g.effects,J===null?g.effects=[P]:J.push(P))}else ce={eventTime:ce,lane:J,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ee===null?(H=ee=ce,T=ne):ee=ee.next=ce,k|=J;if(P=P.next,P===null){if(P=g.shared.pending,P===null)break;J=P,P=J.next,J.next=null,g.lastBaseUpdate=J,g.shared.pending=null}}while(!0);if(ee===null&&(T=ne),g.baseState=T,g.firstBaseUpdate=H,g.lastBaseUpdate=ee,a=g.shared.interleaved,a!==null){g=a;do k|=g.lane,g=g.next;while(g!==a)}else x===null&&(g.shared.lanes=0);Rs|=k,s.lanes=k,s.memoizedState=ne}}function _h(s,a,d){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var f=s[a],g=f.callback;if(g!==null){if(f.callback=null,f=d,typeof g!="function")throw Error(n(191,g));g.call(f)}}}var nr={},xn=Jn(nr),sr=Jn(nr),ir=Jn(nr);function Cs(s){if(s===nr)throw Error(n(174));return s}function Zl(s,a){switch(Be(ir,a),Be(sr,s),Be(xn,nr),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Xe(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=Xe(a,s)}Ue(xn),Be(xn,a)}function xi(){Ue(xn),Ue(sr),Ue(ir)}function kh(s){Cs(ir.current);var a=Cs(xn.current),d=Xe(a,s.type);a!==d&&(Be(sr,s),Be(xn,d))}function ec(s){sr.current===s&&(Ue(xn),Ue(sr))}var Ve=Jn(0);function Ta(s){for(var a=s;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var tc=[];function nc(){for(var s=0;s<tc.length;s++)tc[s]._workInProgressVersionPrimary=null;tc.length=0}var Da=z.ReactCurrentDispatcher,sc=z.ReactCurrentBatchConfig,Es=0,qe=null,at=null,ut=null,Ma=!1,rr=!1,ar=0,Yv=0;function yt(){throw Error(n(321))}function ic(s,a){if(a===null)return!1;for(var d=0;d<a.length&&d<s.length;d++)if(!rn(s[d],a[d]))return!1;return!0}function rc(s,a,d,f,g,x){if(Es=x,qe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Da.current=s===null||s.memoizedState===null?Gv:Jv,s=d(f,g),rr){x=0;do{if(rr=!1,ar=0,25<=x)throw Error(n(301));x+=1,ut=at=null,a.updateQueue=null,Da.current=Zv,s=d(f,g)}while(rr)}if(Da.current=za,a=at!==null&&at.next!==null,Es=0,ut=at=qe=null,Ma=!1,a)throw Error(n(300));return s}function ac(){var s=ar!==0;return ar=0,s}function vn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?qe.memoizedState=ut=s:ut=ut.next=s,ut}function Kt(){if(at===null){var s=qe.alternate;s=s!==null?s.memoizedState:null}else s=at.next;var a=ut===null?qe.memoizedState:ut.next;if(a!==null)ut=a,at=s;else{if(s===null)throw Error(n(310));at=s,s={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ut===null?qe.memoizedState=ut=s:ut=ut.next=s}return ut}function or(s,a){return typeof a=="function"?a(s):a}function oc(s){var a=Kt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=at,g=f.baseQueue,x=d.pending;if(x!==null){if(g!==null){var k=g.next;g.next=x.next,x.next=k}f.baseQueue=g=x,d.pending=null}if(g!==null){x=g.next,f=f.baseState;var P=k=null,T=null,H=x;do{var ee=H.lane;if((Es&ee)===ee)T!==null&&(T=T.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),f=H.hasEagerState?H.eagerState:s(f,H.action);else{var ne={lane:ee,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};T===null?(P=T=ne,k=f):T=T.next=ne,qe.lanes|=ee,Rs|=ee}H=H.next}while(H!==null&&H!==x);T===null?k=f:T.next=P,rn(f,a.memoizedState)||(At=!0),a.memoizedState=f,a.baseState=k,a.baseQueue=T,d.lastRenderedState=f}if(s=d.interleaved,s!==null){g=s;do x=g.lane,qe.lanes|=x,Rs|=x,g=g.next;while(g!==s)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function lc(s){var a=Kt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=d.dispatch,g=d.pending,x=a.memoizedState;if(g!==null){d.pending=null;var k=g=g.next;do x=s(x,k.action),k=k.next;while(k!==g);rn(x,a.memoizedState)||(At=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),d.lastRenderedState=x}return[x,f]}function Sh(){}function Ch(s,a){var d=qe,f=Kt(),g=a(),x=!rn(f.memoizedState,g);if(x&&(f.memoizedState=g,At=!0),f=f.queue,cc(Ph.bind(null,d,f,s),[s]),f.getSnapshot!==a||x||ut!==null&&ut.memoizedState.tag&1){if(d.flags|=2048,lr(9,Rh.bind(null,d,f,g,a),void 0,null),ht===null)throw Error(n(349));(Es&30)!==0||Eh(d,a,g)}return g}function Eh(s,a,d){s.flags|=16384,s={getSnapshot:a,value:d},a=qe.updateQueue,a===null?(a={lastEffect:null,stores:null},qe.updateQueue=a,a.stores=[s]):(d=a.stores,d===null?a.stores=[s]:d.push(s))}function Rh(s,a,d,f){a.value=d,a.getSnapshot=f,Ah(a)&&Th(s)}function Ph(s,a,d){return d(function(){Ah(a)&&Th(s)})}function Ah(s){var a=s.getSnapshot;s=s.value;try{var d=a();return!rn(s,d)}catch{return!0}}function Th(s){var a=An(s,1);a!==null&&dn(a,s,1,-1)}function Dh(s){var a=vn();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:s},a.queue=s,s=s.dispatch=Xv.bind(null,qe,s),[a.memoizedState,s]}function lr(s,a,d,f){return s={tag:s,create:a,destroy:d,deps:f,next:null},a=qe.updateQueue,a===null?(a={lastEffect:null,stores:null},qe.updateQueue=a,a.lastEffect=s.next=s):(d=a.lastEffect,d===null?a.lastEffect=s.next=s:(f=d.next,d.next=s,s.next=f,a.lastEffect=s)),s}function Mh(){return Kt().memoizedState}function La(s,a,d,f){var g=vn();qe.flags|=s,g.memoizedState=lr(1|a,d,void 0,f===void 0?null:f)}function Oa(s,a,d,f){var g=Kt();f=f===void 0?null:f;var x=void 0;if(at!==null){var k=at.memoizedState;if(x=k.destroy,f!==null&&ic(f,k.deps)){g.memoizedState=lr(a,d,x,f);return}}qe.flags|=s,g.memoizedState=lr(1|a,d,x,f)}function Lh(s,a){return La(8390656,8,s,a)}function cc(s,a){return Oa(2048,8,s,a)}function Oh(s,a){return Oa(4,2,s,a)}function zh(s,a){return Oa(4,4,s,a)}function Ih(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function Fh(s,a,d){return d=d!=null?d.concat([s]):null,Oa(4,4,Ih.bind(null,a,s),d)}function dc(){}function Bh(s,a){var d=Kt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&ic(a,f[1])?f[0]:(d.memoizedState=[s,a],s)}function $h(s,a){var d=Kt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&ic(a,f[1])?f[0]:(s=s(),d.memoizedState=[s,a],s)}function Uh(s,a,d){return(Es&21)===0?(s.baseState&&(s.baseState=!1,At=!0),s.memoizedState=d):(rn(d,a)||(d=vu(),qe.lanes|=d,Rs|=d,s.baseState=!0),a)}function Qv(s,a){var d=Oe;Oe=d!==0&&4>d?d:4,s(!0);var f=sc.transition;sc.transition={};try{s(!1),a()}finally{Oe=d,sc.transition=f}}function Wh(){return Kt().memoizedState}function Kv(s,a,d){var f=as(s);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Hh(s))Vh(a,d);else if(d=jh(s,a,d,f),d!==null){var g=Et();dn(d,s,f,g),qh(d,a,f)}}function Xv(s,a,d){var f=as(s),g={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Hh(s))Vh(a,g);else{var x=s.alternate;if(s.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var k=a.lastRenderedState,P=x(k,d);if(g.hasEagerState=!0,g.eagerState=P,rn(P,k)){var T=a.interleaved;T===null?(g.next=g,Gl(a)):(g.next=T.next,T.next=g),a.interleaved=g;return}}catch{}finally{}d=jh(s,a,g,f),d!==null&&(g=Et(),dn(d,s,f,g),qh(d,a,f))}}function Hh(s){var a=s.alternate;return s===qe||a!==null&&a===qe}function Vh(s,a){rr=Ma=!0;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}function qh(s,a,d){if((d&4194240)!==0){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,hl(s,d)}}var za={readContext:Qt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},Gv={readContext:Qt,useCallback:function(s,a){return vn().memoizedState=[s,a===void 0?null:a],s},useContext:Qt,useEffect:Lh,useImperativeHandle:function(s,a,d){return d=d!=null?d.concat([s]):null,La(4194308,4,Ih.bind(null,a,s),d)},useLayoutEffect:function(s,a){return La(4194308,4,s,a)},useInsertionEffect:function(s,a){return La(4,2,s,a)},useMemo:function(s,a){var d=vn();return a=a===void 0?null:a,s=s(),d.memoizedState=[s,a],s},useReducer:function(s,a,d){var f=vn();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},f.queue=s,s=s.dispatch=Kv.bind(null,qe,s),[f.memoizedState,s]},useRef:function(s){var a=vn();return s={current:s},a.memoizedState=s},useState:Dh,useDebugValue:dc,useDeferredValue:function(s){return vn().memoizedState=s},useTransition:function(){var s=Dh(!1),a=s[0];return s=Qv.bind(null,s[1]),vn().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,d){var f=qe,g=vn();if(He){if(d===void 0)throw Error(n(407));d=d()}else{if(d=a(),ht===null)throw Error(n(349));(Es&30)!==0||Eh(f,a,d)}g.memoizedState=d;var x={value:d,getSnapshot:a};return g.queue=x,Lh(Ph.bind(null,f,x,s),[s]),f.flags|=2048,lr(9,Rh.bind(null,f,x,d,a),void 0,null),d},useId:function(){var s=vn(),a=ht.identifierPrefix;if(He){var d=Pn,f=Rn;d=(f&~(1<<32-sn(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=ar++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=Yv++,a=":"+a+"r"+d.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},Jv={readContext:Qt,useCallback:Bh,useContext:Qt,useEffect:cc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:$h,useReducer:oc,useRef:Mh,useState:function(){return oc(or)},useDebugValue:dc,useDeferredValue:function(s){var a=Kt();return Uh(a,at.memoizedState,s)},useTransition:function(){var s=oc(or)[0],a=Kt().memoizedState;return[s,a]},useMutableSource:Sh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1},Zv={readContext:Qt,useCallback:Bh,useContext:Qt,useEffect:cc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:$h,useReducer:lc,useRef:Mh,useState:function(){return lc(or)},useDebugValue:dc,useDeferredValue:function(s){var a=Kt();return at===null?a.memoizedState=s:Uh(a,at.memoizedState,s)},useTransition:function(){var s=lc(or)[0],a=Kt().memoizedState;return[s,a]},useMutableSource:Sh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1};function on(s,a){if(s&&s.defaultProps){a=G({},a),s=s.defaultProps;for(var d in s)a[d]===void 0&&(a[d]=s[d]);return a}return a}function uc(s,a,d,f){a=s.memoizedState,d=d(f,a),d=d==null?a:G({},a,d),s.memoizedState=d,s.lanes===0&&(s.updateQueue.baseState=d)}var Ia={isMounted:function(s){return(s=s._reactInternals)?js(s)===s:!1},enqueueSetState:function(s,a,d){s=s._reactInternals;var f=Et(),g=as(s),x=Tn(f,g);x.payload=a,d!=null&&(x.callback=d),a=ns(s,x,g),a!==null&&(dn(a,s,g,f),Pa(a,s,g))},enqueueReplaceState:function(s,a,d){s=s._reactInternals;var f=Et(),g=as(s),x=Tn(f,g);x.tag=1,x.payload=a,d!=null&&(x.callback=d),a=ns(s,x,g),a!==null&&(dn(a,s,g,f),Pa(a,s,g))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var d=Et(),f=as(s),g=Tn(d,f);g.tag=2,a!=null&&(g.callback=a),a=ns(s,g,f),a!==null&&(dn(a,s,f,d),Pa(a,s,f))}};function Yh(s,a,d,f,g,x,k){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,x,k):a.prototype&&a.prototype.isPureReactComponent?!Qi(d,f)||!Qi(g,x):!0}function Qh(s,a,d){var f=!1,g=Zn,x=a.contextType;return typeof x=="object"&&x!==null?x=Qt(x):(g=Pt(a)?Ns:vt.current,f=a.contextTypes,x=(f=f!=null)?di(s,g):Zn),a=new a(d,x),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ia,s.stateNode=a,a._reactInternals=s,f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=x),a}function Kh(s,a,d,f){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==s&&Ia.enqueueReplaceState(a,a.state,null)}function hc(s,a,d,f){var g=s.stateNode;g.props=d,g.state=s.memoizedState,g.refs={},Jl(s);var x=a.contextType;typeof x=="object"&&x!==null?g.context=Qt(x):(x=Pt(a)?Ns:vt.current,g.context=di(s,x)),g.state=s.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(uc(s,a,x,d),g.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&Ia.enqueueReplaceState(g,g.state,null),Aa(s,d,g,f),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function vi(s,a){try{var d="",f=a;do d+=be(f),f=f.return;while(f);var g=d}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:s,source:a,stack:g,digest:null}}function fc(s,a,d){return{value:s,source:null,stack:d??null,digest:a??null}}function pc(s,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Xh(s,a,d){d=Tn(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){Va||(Va=!0,Rc=f),pc(s,a)},d}function Gh(s,a,d){d=Tn(-1,d),d.tag=3;var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var g=a.value;d.payload=function(){return f(g)},d.callback=function(){pc(s,a)}}var x=s.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(d.callback=function(){pc(s,a),typeof f!="function"&&(is===null?is=new Set([this]):is.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})}),d}function Jh(s,a,d){var f=s.pingCache;if(f===null){f=s.pingCache=new ey;var g=new Set;f.set(a,g)}else g=f.get(a),g===void 0&&(g=new Set,f.set(a,g));g.has(d)||(g.add(d),s=py.bind(null,s,a,d),a.then(s,s))}function Zh(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function ef(s,a,d,f,g){return(s.mode&1)===0?(s===a?s.flags|=65536:(s.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Tn(-1,1),a.tag=2,ns(d,a,1))),d.lanes|=1),s):(s.flags|=65536,s.lanes=g,s)}var ty=z.ReactCurrentOwner,At=!1;function Ct(s,a,d,f){a.child=s===null?bh(a,null,d,f):pi(a,s.child,d,f)}function tf(s,a,d,f,g){d=d.render;var x=a.ref;return gi(a,g),f=rc(s,a,d,f,x,g),d=ac(),s!==null&&!At?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~g,Dn(s,a,g)):(He&&d&&Ul(a),a.flags|=1,Ct(s,a,f,g),a.child)}function nf(s,a,d,f,g){if(s===null){var x=d.type;return typeof x=="function"&&!Oc(x)&&x.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=x,sf(s,a,x,f,g)):(s=Ga(d.type,null,f,a,a.mode,g),s.ref=a.ref,s.return=a,a.child=s)}if(x=s.child,(s.lanes&g)===0){var k=x.memoizedProps;if(d=d.compare,d=d!==null?d:Qi,d(k,f)&&s.ref===a.ref)return Dn(s,a,g)}return a.flags|=1,s=ls(x,f),s.ref=a.ref,s.return=a,a.child=s}function sf(s,a,d,f,g){if(s!==null){var x=s.memoizedProps;if(Qi(x,f)&&s.ref===a.ref)if(At=!1,a.pendingProps=f=x,(s.lanes&g)!==0)(s.flags&131072)!==0&&(At=!0);else return a.lanes=s.lanes,Dn(s,a,g)}return mc(s,a,d,f,g)}function rf(s,a,d){var f=a.pendingProps,g=f.children,x=s!==null?s.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(bi,Ht),Ht|=d;else{if((d&1073741824)===0)return s=x!==null?x.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,Be(bi,Ht),Ht|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:d,Be(bi,Ht),Ht|=f}else x!==null?(f=x.baseLanes|d,a.memoizedState=null):f=d,Be(bi,Ht),Ht|=f;return Ct(s,a,g,d),a.child}function af(s,a){var d=a.ref;(s===null&&d!==null||s!==null&&s.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function mc(s,a,d,f,g){var x=Pt(d)?Ns:vt.current;return x=di(a,x),gi(a,g),d=rc(s,a,d,f,x,g),f=ac(),s!==null&&!At?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~g,Dn(s,a,g)):(He&&f&&Ul(a),a.flags|=1,Ct(s,a,d,g),a.child)}function of(s,a,d,f,g){if(Pt(d)){var x=!0;wa(a)}else x=!1;if(gi(a,g),a.stateNode===null)Ba(s,a),Qh(a,d,f),hc(a,d,f,g),f=!0;else if(s===null){var k=a.stateNode,P=a.memoizedProps;k.props=P;var T=k.context,H=d.contextType;typeof H=="object"&&H!==null?H=Qt(H):(H=Pt(d)?Ns:vt.current,H=di(a,H));var ee=d.getDerivedStateFromProps,ne=typeof ee=="function"||typeof k.getSnapshotBeforeUpdate=="function";ne||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(P!==f||T!==H)&&Kh(a,k,f,H),ts=!1;var J=a.memoizedState;k.state=J,Aa(a,f,k,g),T=a.memoizedState,P!==f||J!==T||Rt.current||ts?(typeof ee=="function"&&(uc(a,d,ee,f),T=a.memoizedState),(P=ts||Yh(a,d,P,f,J,T,H))?(ne||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(a.flags|=4194308)):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=T),k.props=f,k.state=T,k.context=H,f=P):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{k=a.stateNode,wh(s,a),P=a.memoizedProps,H=a.type===a.elementType?P:on(a.type,P),k.props=H,ne=a.pendingProps,J=k.context,T=d.contextType,typeof T=="object"&&T!==null?T=Qt(T):(T=Pt(d)?Ns:vt.current,T=di(a,T));var ce=d.getDerivedStateFromProps;(ee=typeof ce=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(P!==ne||J!==T)&&Kh(a,k,f,T),ts=!1,J=a.memoizedState,k.state=J,Aa(a,f,k,g);var ue=a.memoizedState;P!==ne||J!==ue||Rt.current||ts?(typeof ce=="function"&&(uc(a,d,ce,f),ue=a.memoizedState),(H=ts||Yh(a,d,H,f,J,ue,T)||!1)?(ee||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(f,ue,T),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(f,ue,T)),typeof k.componentDidUpdate=="function"&&(a.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof k.componentDidUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=ue),k.props=f,k.state=ue,k.context=T,f=H):(typeof k.componentDidUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=1024),f=!1)}return gc(s,a,d,f,x,g)}function gc(s,a,d,f,g,x){af(s,a);var k=(a.flags&128)!==0;if(!f&&!k)return g&&uh(a,d,!1),Dn(s,a,x);f=a.stateNode,ty.current=a;var P=k&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,s!==null&&k?(a.child=pi(a,s.child,null,x),a.child=pi(a,null,P,x)):Ct(s,a,P,x),a.memoizedState=f.state,g&&uh(a,d,!0),a.child}function lf(s){var a=s.stateNode;a.pendingContext?ch(s,a.pendingContext,a.pendingContext!==a.context):a.context&&ch(s,a.context,!1),Zl(s,a.containerInfo)}function cf(s,a,d,f,g){return fi(),ql(g),a.flags|=256,Ct(s,a,d,f),a.child}var xc={dehydrated:null,treeContext:null,retryLane:0};function vc(s){return{baseLanes:s,cachePool:null,transitions:null}}function df(s,a,d){var f=a.pendingProps,g=Ve.current,x=!1,k=(a.flags&128)!==0,P;if((P=k)||(P=s!==null&&s.memoizedState===null?!1:(g&2)!==0),P?(x=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),Be(Ve,g&1),s===null)return Vl(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((a.mode&1)===0?a.lanes=1:s.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(k=f.children,s=f.fallback,x?(f=a.mode,x=a.child,k={mode:"hidden",children:k},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=k):x=Ja(k,f,0,null),s=Ds(s,f,d,null),x.return=a,s.return=a,x.sibling=s,a.child=x,a.child.memoizedState=vc(d),a.memoizedState=xc,s):yc(a,k));if(g=s.memoizedState,g!==null&&(P=g.dehydrated,P!==null))return ny(s,a,k,f,P,g,d);if(x){x=f.fallback,k=a.mode,g=s.child,P=g.sibling;var T={mode:"hidden",children:f.children};return(k&1)===0&&a.child!==g?(f=a.child,f.childLanes=0,f.pendingProps=T,a.deletions=null):(f=ls(g,T),f.subtreeFlags=g.subtreeFlags&14680064),P!==null?x=ls(P,x):(x=Ds(x,k,d,null),x.flags|=2),x.return=a,f.return=a,f.sibling=x,a.child=f,f=x,x=a.child,k=s.child.memoizedState,k=k===null?vc(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=s.childLanes&~d,a.memoizedState=xc,f}return x=s.child,s=x.sibling,f=ls(x,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,s!==null&&(d=a.deletions,d===null?(a.deletions=[s],a.flags|=16):d.push(s)),a.child=f,a.memoizedState=null,f}function yc(s,a){return a=Ja({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function Fa(s,a,d,f){return f!==null&&ql(f),pi(a,s.child,null,d),s=yc(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function ny(s,a,d,f,g,x,k){if(d)return a.flags&256?(a.flags&=-257,f=fc(Error(n(422))),Fa(s,a,k,f)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(x=f.fallback,g=a.mode,f=Ja({mode:"visible",children:f.children},g,0,null),x=Ds(x,g,k,null),x.flags|=2,f.return=a,x.return=a,f.sibling=x,a.child=f,(a.mode&1)!==0&&pi(a,s.child,null,k),a.child.memoizedState=vc(k),a.memoizedState=xc,x);if((a.mode&1)===0)return Fa(s,a,k,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var P=f.dgst;return f=P,x=Error(n(419)),f=fc(x,f,void 0),Fa(s,a,k,f)}if(P=(k&s.childLanes)!==0,At||P){if(f=ht,f!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|k))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,An(s,g),dn(f,s,g,-1))}return Lc(),f=fc(Error(n(421))),Fa(s,a,k,f)}return g.data==="$?"?(a.flags|=128,a.child=s.child,a=my.bind(null,s),g._reactRetry=a,null):(s=x.treeContext,Wt=Gn(g.nextSibling),Ut=a,He=!0,an=null,s!==null&&(qt[Yt++]=Rn,qt[Yt++]=Pn,qt[Yt++]=_s,Rn=s.id,Pn=s.overflow,_s=a),a=yc(a,f.children),a.flags|=4096,a)}function uf(s,a,d){s.lanes|=a;var f=s.alternate;f!==null&&(f.lanes|=a),Xl(s.return,a,d)}function bc(s,a,d,f,g){var x=s.memoizedState;x===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:g}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=d,x.tailMode=g)}function hf(s,a,d){var f=a.pendingProps,g=f.revealOrder,x=f.tail;if(Ct(s,a,f.children,d),f=Ve.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&uf(s,d,a);else if(s.tag===19)uf(s,d,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}if(Be(Ve,f),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)s=d.alternate,s!==null&&Ta(s)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),bc(a,!1,g,d,x);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(s=g.alternate,s!==null&&Ta(s)===null){a.child=g;break}s=g.sibling,g.sibling=d,d=g,g=s}bc(a,!0,d,null,x);break;case"together":bc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ba(s,a){(a.mode&1)===0&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function Dn(s,a,d){if(s!==null&&(a.dependencies=s.dependencies),Rs|=a.lanes,(d&a.childLanes)===0)return null;if(s!==null&&a.child!==s.child)throw Error(n(153));if(a.child!==null){for(s=a.child,d=ls(s,s.pendingProps),a.child=d,d.return=a;s.sibling!==null;)s=s.sibling,d=d.sibling=ls(s,s.pendingProps),d.return=a;d.sibling=null}return a.child}function sy(s,a,d){switch(a.tag){case 3:lf(a),fi();break;case 5:kh(a);break;case 1:Pt(a.type)&&wa(a);break;case 4:Zl(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,g=a.memoizedProps.value;Be(Ea,f._currentValue),f._currentValue=g;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(Be(Ve,Ve.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?df(s,a,d):(Be(Ve,Ve.current&1),s=Dn(s,a,d),s!==null?s.sibling:null);Be(Ve,Ve.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(s.flags&128)!==0){if(f)return hf(s,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Be(Ve,Ve.current),f)break;return null;case 22:case 23:return a.lanes=0,rf(s,a,d)}return Dn(s,a,d)}var ff,jc,pf,mf;ff=function(s,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},jc=function(){},pf=function(s,a,d,f){var g=s.memoizedProps;if(g!==f){s=a.stateNode,Cs(xn.current);var x=null;switch(d){case"input":g=ys(s,g),f=ys(s,f),x=[];break;case"select":g=G({},g,{value:void 0}),f=G({},f,{value:void 0}),x=[];break;case"textarea":g=Ce(s,g),f=Ce(s,f),x=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(s.onclick=ya)}tl(d,f);var k;d=null;for(H in g)if(!f.hasOwnProperty(H)&&g.hasOwnProperty(H)&&g[H]!=null)if(H==="style"){var P=g[H];for(k in P)P.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?x||(x=[]):(x=x||[]).push(H,null));for(H in f){var T=f[H];if(P=g!=null?g[H]:void 0,f.hasOwnProperty(H)&&T!==P&&(T!=null||P!=null))if(H==="style")if(P){for(k in P)!P.hasOwnProperty(k)||T&&T.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in T)T.hasOwnProperty(k)&&P[k]!==T[k]&&(d||(d={}),d[k]=T[k])}else d||(x||(x=[]),x.push(H,d)),d=T;else H==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(x=x||[]).push(H,T)):H==="children"?typeof T!="string"&&typeof T!="number"||(x=x||[]).push(H,""+T):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(T!=null&&H==="onScroll"&&$e("scroll",s),x||P===T||(x=[])):(x=x||[]).push(H,T))}d&&(x=x||[]).push("style",d);var H=x;(a.updateQueue=H)&&(a.flags|=4)}},mf=function(s,a,d,f){d!==f&&(a.flags|=4)};function cr(s,a){if(!He)switch(s.tailMode){case"hidden":a=s.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s.tail=null:d.sibling=null;break;case"collapsed":d=s.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function bt(s){var a=s.alternate!==null&&s.alternate.child===s.child,d=0,f=0;if(a)for(var g=s.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=f,s.childLanes=d,a}function iy(s,a,d){var f=a.pendingProps;switch(Wl(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(a),null;case 1:return Pt(a.type)&&ja(),bt(a),null;case 3:return f=a.stateNode,xi(),Ue(Rt),Ue(vt),nc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(s===null||s.child===null)&&(Sa(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,an!==null&&(Tc(an),an=null))),jc(s,a),bt(a),null;case 5:ec(a);var g=Cs(ir.current);if(d=a.type,s!==null&&a.stateNode!=null)pf(s,a,d,f,g),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(n(166));return bt(a),null}if(s=Cs(xn.current),Sa(a)){f=a.stateNode,d=a.type;var x=a.memoizedProps;switch(f[gn]=a,f[Zi]=x,s=(a.mode&1)!==0,d){case"dialog":$e("cancel",f),$e("close",f);break;case"iframe":case"object":case"embed":$e("load",f);break;case"video":case"audio":for(g=0;g<Xi.length;g++)$e(Xi[g],f);break;case"source":$e("error",f);break;case"img":case"image":case"link":$e("error",f),$e("load",f);break;case"details":$e("toggle",f);break;case"input":Hn(f,x),$e("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},$e("invalid",f);break;case"textarea":Bt(f,x),$e("invalid",f)}tl(d,x),g=null;for(var k in x)if(x.hasOwnProperty(k)){var P=x[k];k==="children"?typeof P=="string"?f.textContent!==P&&(x.suppressHydrationWarning!==!0&&va(f.textContent,P,s),g=["children",P]):typeof P=="number"&&f.textContent!==""+P&&(x.suppressHydrationWarning!==!0&&va(f.textContent,P,s),g=["children",""+P]):o.hasOwnProperty(k)&&P!=null&&k==="onScroll"&&$e("scroll",f)}switch(d){case"input":nn(f),bs(f,x,!0);break;case"textarea":nn(f),le(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=ya)}f=g,a.updateQueue=f,f!==null&&(a.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=De(d)),s==="http://www.w3.org/1999/xhtml"?d==="script"?(s=k.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof f.is=="string"?s=k.createElement(d,{is:f.is}):(s=k.createElement(d),d==="select"&&(k=s,f.multiple?k.multiple=!0:f.size&&(k.size=f.size))):s=k.createElementNS(s,d),s[gn]=a,s[Zi]=f,ff(s,a,!1,!1),a.stateNode=s;e:{switch(k=nl(d,f),d){case"dialog":$e("cancel",s),$e("close",s),g=f;break;case"iframe":case"object":case"embed":$e("load",s),g=f;break;case"video":case"audio":for(g=0;g<Xi.length;g++)$e(Xi[g],s);g=f;break;case"source":$e("error",s),g=f;break;case"img":case"image":case"link":$e("error",s),$e("load",s),g=f;break;case"details":$e("toggle",s),g=f;break;case"input":Hn(s,f),g=ys(s,f),$e("invalid",s);break;case"option":g=f;break;case"select":s._wrapperState={wasMultiple:!!f.multiple},g=G({},f,{value:void 0}),$e("invalid",s);break;case"textarea":Bt(s,f),g=Ce(s,f),$e("invalid",s);break;default:g=f}tl(d,g),P=g;for(x in P)if(P.hasOwnProperty(x)){var T=P[x];x==="style"?su(s,T):x==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&dt(s,T)):x==="children"?typeof T=="string"?(d!=="textarea"||T!=="")&&nt(s,T):typeof T=="number"&&nt(s,""+T):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?T!=null&&x==="onScroll"&&$e("scroll",s):T!=null&&A(s,x,T,k))}switch(d){case"input":nn(s),bs(s,f,!1);break;case"textarea":nn(s),le(s);break;case"option":f.value!=null&&s.setAttribute("value",""+Re(f.value));break;case"select":s.multiple=!!f.multiple,x=f.value,x!=null?pe(s,!!f.multiple,x,!1):f.defaultValue!=null&&pe(s,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=ya)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return bt(a),null;case 6:if(s&&a.stateNode!=null)mf(s,a,s.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(n(166));if(d=Cs(ir.current),Cs(xn.current),Sa(a)){if(f=a.stateNode,d=a.memoizedProps,f[gn]=a,(x=f.nodeValue!==d)&&(s=Ut,s!==null))switch(s.tag){case 3:va(f.nodeValue,d,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&va(f.nodeValue,d,(s.mode&1)!==0)}x&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[gn]=a,a.stateNode=f}return bt(a),null;case 13:if(Ue(Ve),f=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(He&&Wt!==null&&(a.mode&1)!==0&&(a.flags&128)===0)xh(),fi(),a.flags|=98560,x=!1;else if(x=Sa(a),f!==null&&f.dehydrated!==null){if(s===null){if(!x)throw Error(n(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[gn]=a}else fi(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;bt(a),x=!1}else an!==null&&(Tc(an),an=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(s!==null&&s.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(s===null||(Ve.current&1)!==0?ot===0&&(ot=3):Lc())),a.updateQueue!==null&&(a.flags|=4),bt(a),null);case 4:return xi(),jc(s,a),s===null&&Gi(a.stateNode.containerInfo),bt(a),null;case 10:return Kl(a.type._context),bt(a),null;case 17:return Pt(a.type)&&ja(),bt(a),null;case 19:if(Ue(Ve),x=a.memoizedState,x===null)return bt(a),null;if(f=(a.flags&128)!==0,k=x.rendering,k===null)if(f)cr(x,!1);else{if(ot!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(k=Ta(s),k!==null){for(a.flags|=128,cr(x,!1),f=k.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)x=d,s=f,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=s,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,s=k.dependencies,x.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),d=d.sibling;return Be(Ve,Ve.current&1|2),a.child}s=s.sibling}x.tail!==null&&Ge()>ji&&(a.flags|=128,f=!0,cr(x,!1),a.lanes=4194304)}else{if(!f)if(s=Ta(k),s!==null){if(a.flags|=128,f=!0,d=s.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),cr(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!He)return bt(a),null}else 2*Ge()-x.renderingStartTime>ji&&d!==1073741824&&(a.flags|=128,f=!0,cr(x,!1),a.lanes=4194304);x.isBackwards?(k.sibling=a.child,a.child=k):(d=x.last,d!==null?d.sibling=k:a.child=k,x.last=k)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=Ge(),a.sibling=null,d=Ve.current,Be(Ve,f?d&1|2:d&1),a):(bt(a),null);case 22:case 23:return Mc(),f=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Ht&1073741824)!==0&&(bt(a),a.subtreeFlags&6&&(a.flags|=8192)):bt(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function ry(s,a){switch(Wl(a),a.tag){case 1:return Pt(a.type)&&ja(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return xi(),Ue(Rt),Ue(vt),nc(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 5:return ec(a),null;case 13:if(Ue(Ve),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(n(340));fi()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return Ue(Ve),null;case 4:return xi(),null;case 10:return Kl(a.type._context),null;case 22:case 23:return Mc(),null;case 24:return null;default:return null}}var $a=!1,jt=!1,ay=typeof WeakSet=="function"?WeakSet:Set,de=null;function yi(s,a){var d=s.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Qe(s,a,f)}else d.current=null}function wc(s,a,d){try{d()}catch(f){Qe(s,a,f)}}var gf=!1;function oy(s,a){if(Ml=oa,s=Yu(),Sl(s)){if("selectionStart"in s)var d={start:s.selectionStart,end:s.selectionEnd};else e:{d=(d=s.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var g=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{d.nodeType,x.nodeType}catch{d=null;break e}var k=0,P=-1,T=-1,H=0,ee=0,ne=s,J=null;t:for(;;){for(var ce;ne!==d||g!==0&&ne.nodeType!==3||(P=k+g),ne!==x||f!==0&&ne.nodeType!==3||(T=k+f),ne.nodeType===3&&(k+=ne.nodeValue.length),(ce=ne.firstChild)!==null;)J=ne,ne=ce;for(;;){if(ne===s)break t;if(J===d&&++H===g&&(P=k),J===x&&++ee===f&&(T=k),(ce=ne.nextSibling)!==null)break;ne=J,J=ne.parentNode}ne=ce}d=P===-1||T===-1?null:{start:P,end:T}}else d=null}d=d||{start:0,end:0}}else d=null;for(Ll={focusedElem:s,selectionRange:d},oa=!1,de=a;de!==null;)if(a=de,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,de=s;else for(;de!==null;){a=de;try{var ue=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,Je=ue.memoizedState,B=a.stateNode,L=B.getSnapshotBeforeUpdate(a.elementType===a.type?he:on(a.type,he),Je);B.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var $=a.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(se){Qe(a,a.return,se)}if(s=a.sibling,s!==null){s.return=a.return,de=s;break}de=a.return}return ue=gf,gf=!1,ue}function dr(s,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&s)===s){var x=g.destroy;g.destroy=void 0,x!==void 0&&wc(a,d,x)}g=g.next}while(g!==f)}}function Ua(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&s)===s){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function Nc(s){var a=s.ref;if(a!==null){var d=s.stateNode;switch(s.tag){case 5:s=d;break;default:s=d}typeof a=="function"?a(s):a.current=s}}function xf(s){var a=s.alternate;a!==null&&(s.alternate=null,xf(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[gn],delete a[Zi],delete a[Fl],delete a[Wv],delete a[Hv])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function vf(s){return s.tag===5||s.tag===3||s.tag===4}function yf(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||vf(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function _c(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(s,a):d.insertBefore(s,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(s,d)):(a=d,a.appendChild(s)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=ya));else if(f!==4&&(s=s.child,s!==null))for(_c(s,a,d),s=s.sibling;s!==null;)_c(s,a,d),s=s.sibling}function kc(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.insertBefore(s,a):d.appendChild(s);else if(f!==4&&(s=s.child,s!==null))for(kc(s,a,d),s=s.sibling;s!==null;)kc(s,a,d),s=s.sibling}var gt=null,ln=!1;function ss(s,a,d){for(d=d.child;d!==null;)bf(s,a,d),d=d.sibling}function bf(s,a,d){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(ta,d)}catch{}switch(d.tag){case 5:jt||yi(d,a);case 6:var f=gt,g=ln;gt=null,ss(s,a,d),gt=f,ln=g,gt!==null&&(ln?(s=gt,d=d.stateNode,s.nodeType===8?s.parentNode.removeChild(d):s.removeChild(d)):gt.removeChild(d.stateNode));break;case 18:gt!==null&&(ln?(s=gt,d=d.stateNode,s.nodeType===8?Il(s.parentNode,d):s.nodeType===1&&Il(s,d),Ui(s)):Il(gt,d.stateNode));break;case 4:f=gt,g=ln,gt=d.stateNode.containerInfo,ln=!0,ss(s,a,d),gt=f,ln=g;break;case 0:case 11:case 14:case 15:if(!jt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var x=g,k=x.destroy;x=x.tag,k!==void 0&&((x&2)!==0||(x&4)!==0)&&wc(d,a,k),g=g.next}while(g!==f)}ss(s,a,d);break;case 1:if(!jt&&(yi(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(P){Qe(d,a,P)}ss(s,a,d);break;case 21:ss(s,a,d);break;case 22:d.mode&1?(jt=(f=jt)||d.memoizedState!==null,ss(s,a,d),jt=f):ss(s,a,d);break;default:ss(s,a,d)}}function jf(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var d=s.stateNode;d===null&&(d=s.stateNode=new ay),a.forEach(function(f){var g=gy.bind(null,s,f);d.has(f)||(d.add(f),f.then(g,g))})}}function cn(s,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var g=d[f];try{var x=s,k=a,P=k;e:for(;P!==null;){switch(P.tag){case 5:gt=P.stateNode,ln=!1;break e;case 3:gt=P.stateNode.containerInfo,ln=!0;break e;case 4:gt=P.stateNode.containerInfo,ln=!0;break e}P=P.return}if(gt===null)throw Error(n(160));bf(x,k,g),gt=null,ln=!1;var T=g.alternate;T!==null&&(T.return=null),g.return=null}catch(H){Qe(g,a,H)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)wf(a,s),a=a.sibling}function wf(s,a){var d=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(cn(a,s),yn(s),f&4){try{dr(3,s,s.return),Ua(3,s)}catch(he){Qe(s,s.return,he)}try{dr(5,s,s.return)}catch(he){Qe(s,s.return,he)}}break;case 1:cn(a,s),yn(s),f&512&&d!==null&&yi(d,d.return);break;case 5:if(cn(a,s),yn(s),f&512&&d!==null&&yi(d,d.return),s.flags&32){var g=s.stateNode;try{nt(g,"")}catch(he){Qe(s,s.return,he)}}if(f&4&&(g=s.stateNode,g!=null)){var x=s.memoizedProps,k=d!==null?d.memoizedProps:x,P=s.type,T=s.updateQueue;if(s.updateQueue=null,T!==null)try{P==="input"&&x.type==="radio"&&x.name!=null&&Js(g,x),nl(P,k);var H=nl(P,x);for(k=0;k<T.length;k+=2){var ee=T[k],ne=T[k+1];ee==="style"?su(g,ne):ee==="dangerouslySetInnerHTML"?dt(g,ne):ee==="children"?nt(g,ne):A(g,ee,ne,H)}switch(P){case"input":Sn(g,x);break;case"textarea":Z(g,x);break;case"select":var J=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var ce=x.value;ce!=null?pe(g,!!x.multiple,ce,!1):J!==!!x.multiple&&(x.defaultValue!=null?pe(g,!!x.multiple,x.defaultValue,!0):pe(g,!!x.multiple,x.multiple?[]:"",!1))}g[Zi]=x}catch(he){Qe(s,s.return,he)}}break;case 6:if(cn(a,s),yn(s),f&4){if(s.stateNode===null)throw Error(n(162));g=s.stateNode,x=s.memoizedProps;try{g.nodeValue=x}catch(he){Qe(s,s.return,he)}}break;case 3:if(cn(a,s),yn(s),f&4&&d!==null&&d.memoizedState.isDehydrated)try{Ui(a.containerInfo)}catch(he){Qe(s,s.return,he)}break;case 4:cn(a,s),yn(s);break;case 13:cn(a,s),yn(s),g=s.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Ec=Ge())),f&4&&jf(s);break;case 22:if(ee=d!==null&&d.memoizedState!==null,s.mode&1?(jt=(H=jt)||ee,cn(a,s),jt=H):cn(a,s),yn(s),f&8192){if(H=s.memoizedState!==null,(s.stateNode.isHidden=H)&&!ee&&(s.mode&1)!==0)for(de=s,ee=s.child;ee!==null;){for(ne=de=ee;de!==null;){switch(J=de,ce=J.child,J.tag){case 0:case 11:case 14:case 15:dr(4,J,J.return);break;case 1:yi(J,J.return);var ue=J.stateNode;if(typeof ue.componentWillUnmount=="function"){f=J,d=J.return;try{a=f,ue.props=a.memoizedProps,ue.state=a.memoizedState,ue.componentWillUnmount()}catch(he){Qe(f,d,he)}}break;case 5:yi(J,J.return);break;case 22:if(J.memoizedState!==null){kf(ne);continue}}ce!==null?(ce.return=J,de=ce):kf(ne)}ee=ee.sibling}e:for(ee=null,ne=s;;){if(ne.tag===5){if(ee===null){ee=ne;try{g=ne.stateNode,H?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(P=ne.stateNode,T=ne.memoizedProps.style,k=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=Gr("display",k))}catch(he){Qe(s,s.return,he)}}}else if(ne.tag===6){if(ee===null)try{ne.stateNode.nodeValue=H?"":ne.memoizedProps}catch(he){Qe(s,s.return,he)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===s)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===s)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===s)break e;ee===ne&&(ee=null),ne=ne.return}ee===ne&&(ee=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:cn(a,s),yn(s),f&4&&jf(s);break;case 21:break;default:cn(a,s),yn(s)}}function yn(s){var a=s.flags;if(a&2){try{e:{for(var d=s.return;d!==null;){if(vf(d)){var f=d;break e}d=d.return}throw Error(n(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(nt(g,""),f.flags&=-33);var x=yf(s);kc(s,x,g);break;case 3:case 4:var k=f.stateNode.containerInfo,P=yf(s);_c(s,P,k);break;default:throw Error(n(161))}}catch(T){Qe(s,s.return,T)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function ly(s,a,d){de=s,Nf(s)}function Nf(s,a,d){for(var f=(s.mode&1)!==0;de!==null;){var g=de,x=g.child;if(g.tag===22&&f){var k=g.memoizedState!==null||$a;if(!k){var P=g.alternate,T=P!==null&&P.memoizedState!==null||jt;P=$a;var H=jt;if($a=k,(jt=T)&&!H)for(de=g;de!==null;)k=de,T=k.child,k.tag===22&&k.memoizedState!==null?Sf(g):T!==null?(T.return=k,de=T):Sf(g);for(;x!==null;)de=x,Nf(x),x=x.sibling;de=g,$a=P,jt=H}_f(s)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,de=x):_f(s)}}function _f(s){for(;de!==null;){var a=de;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:jt||Ua(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!jt)if(d===null)f.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:on(a.type,d.memoizedProps);f.componentDidUpdate(g,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&_h(a,x,f);break;case 3:var k=a.updateQueue;if(k!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}_h(a,k,d)}break;case 5:var P=a.stateNode;if(d===null&&a.flags&4){d=P;var T=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&d.focus();break;case"img":T.src&&(d.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var H=a.alternate;if(H!==null){var ee=H.memoizedState;if(ee!==null){var ne=ee.dehydrated;ne!==null&&Ui(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}jt||a.flags&512&&Nc(a)}catch(J){Qe(a,a.return,J)}}if(a===s){de=null;break}if(d=a.sibling,d!==null){d.return=a.return,de=d;break}de=a.return}}function kf(s){for(;de!==null;){var a=de;if(a===s){de=null;break}var d=a.sibling;if(d!==null){d.return=a.return,de=d;break}de=a.return}}function Sf(s){for(;de!==null;){var a=de;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Ua(4,a)}catch(T){Qe(a,d,T)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var g=a.return;try{f.componentDidMount()}catch(T){Qe(a,g,T)}}var x=a.return;try{Nc(a)}catch(T){Qe(a,x,T)}break;case 5:var k=a.return;try{Nc(a)}catch(T){Qe(a,k,T)}}}catch(T){Qe(a,a.return,T)}if(a===s){de=null;break}var P=a.sibling;if(P!==null){P.return=a.return,de=P;break}de=a.return}}var cy=Math.ceil,Wa=z.ReactCurrentDispatcher,Sc=z.ReactCurrentOwner,Xt=z.ReactCurrentBatchConfig,Pe=0,ht=null,st=null,xt=0,Ht=0,bi=Jn(0),ot=0,ur=null,Rs=0,Ha=0,Cc=0,hr=null,Tt=null,Ec=0,ji=1/0,Mn=null,Va=!1,Rc=null,is=null,qa=!1,rs=null,Ya=0,fr=0,Pc=null,Qa=-1,Ka=0;function Et(){return(Pe&6)!==0?Ge():Qa!==-1?Qa:Qa=Ge()}function as(s){return(s.mode&1)===0?1:(Pe&2)!==0&&xt!==0?xt&-xt:qv.transition!==null?(Ka===0&&(Ka=vu()),Ka):(s=Oe,s!==0||(s=window.event,s=s===void 0?16:Cu(s.type)),s)}function dn(s,a,d,f){if(50<fr)throw fr=0,Pc=null,Error(n(185));zi(s,d,f),((Pe&2)===0||s!==ht)&&(s===ht&&((Pe&2)===0&&(Ha|=d),ot===4&&os(s,xt)),Dt(s,f),d===1&&Pe===0&&(a.mode&1)===0&&(ji=Ge()+500,Na&&es()))}function Dt(s,a){var d=s.callbackNode;qx(s,a);var f=ia(s,s===ht?xt:0);if(f===0)d!==null&&mu(d),s.callbackNode=null,s.callbackPriority=0;else if(a=f&-f,s.callbackPriority!==a){if(d!=null&&mu(d),a===1)s.tag===0?Vv(Ef.bind(null,s)):hh(Ef.bind(null,s)),$v(function(){(Pe&6)===0&&es()}),d=null;else{switch(yu(f)){case 1:d=cl;break;case 4:d=gu;break;case 16:d=ea;break;case 536870912:d=xu;break;default:d=ea}d=Of(d,Cf.bind(null,s))}s.callbackPriority=a,s.callbackNode=d}}function Cf(s,a){if(Qa=-1,Ka=0,(Pe&6)!==0)throw Error(n(327));var d=s.callbackNode;if(wi()&&s.callbackNode!==d)return null;var f=ia(s,s===ht?xt:0);if(f===0)return null;if((f&30)!==0||(f&s.expiredLanes)!==0||a)a=Xa(s,f);else{a=f;var g=Pe;Pe|=2;var x=Pf();(ht!==s||xt!==a)&&(Mn=null,ji=Ge()+500,As(s,a));do try{hy();break}catch(P){Rf(s,P)}while(!0);Ql(),Wa.current=x,Pe=g,st!==null?a=0:(ht=null,xt=0,a=ot)}if(a!==0){if(a===2&&(g=dl(s),g!==0&&(f=g,a=Ac(s,g))),a===1)throw d=ur,As(s,0),os(s,f),Dt(s,Ge()),d;if(a===6)os(s,f);else{if(g=s.current.alternate,(f&30)===0&&!dy(g)&&(a=Xa(s,f),a===2&&(x=dl(s),x!==0&&(f=x,a=Ac(s,x))),a===1))throw d=ur,As(s,0),os(s,f),Dt(s,Ge()),d;switch(s.finishedWork=g,s.finishedLanes=f,a){case 0:case 1:throw Error(n(345));case 2:Ts(s,Tt,Mn);break;case 3:if(os(s,f),(f&130023424)===f&&(a=Ec+500-Ge(),10<a)){if(ia(s,0)!==0)break;if(g=s.suspendedLanes,(g&f)!==f){Et(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=zl(Ts.bind(null,s,Tt,Mn),a);break}Ts(s,Tt,Mn);break;case 4:if(os(s,f),(f&4194240)===f)break;for(a=s.eventTimes,g=-1;0<f;){var k=31-sn(f);x=1<<k,k=a[k],k>g&&(g=k),f&=~x}if(f=g,f=Ge()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*cy(f/1960))-f,10<f){s.timeoutHandle=zl(Ts.bind(null,s,Tt,Mn),f);break}Ts(s,Tt,Mn);break;case 5:Ts(s,Tt,Mn);break;default:throw Error(n(329))}}}return Dt(s,Ge()),s.callbackNode===d?Cf.bind(null,s):null}function Ac(s,a){var d=hr;return s.current.memoizedState.isDehydrated&&(As(s,a).flags|=256),s=Xa(s,a),s!==2&&(a=Tt,Tt=d,a!==null&&Tc(a)),s}function Tc(s){Tt===null?Tt=s:Tt.push.apply(Tt,s)}function dy(s){for(var a=s;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var g=d[f],x=g.getSnapshot;g=g.value;try{if(!rn(x(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function os(s,a){for(a&=~Cc,a&=~Ha,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var d=31-sn(a),f=1<<d;s[d]=-1,a&=~f}}function Ef(s){if((Pe&6)!==0)throw Error(n(327));wi();var a=ia(s,0);if((a&1)===0)return Dt(s,Ge()),null;var d=Xa(s,a);if(s.tag!==0&&d===2){var f=dl(s);f!==0&&(a=f,d=Ac(s,f))}if(d===1)throw d=ur,As(s,0),os(s,a),Dt(s,Ge()),d;if(d===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,Ts(s,Tt,Mn),Dt(s,Ge()),null}function Dc(s,a){var d=Pe;Pe|=1;try{return s(a)}finally{Pe=d,Pe===0&&(ji=Ge()+500,Na&&es())}}function Ps(s){rs!==null&&rs.tag===0&&(Pe&6)===0&&wi();var a=Pe;Pe|=1;var d=Xt.transition,f=Oe;try{if(Xt.transition=null,Oe=1,s)return s()}finally{Oe=f,Xt.transition=d,Pe=a,(Pe&6)===0&&es()}}function Mc(){Ht=bi.current,Ue(bi)}function As(s,a){s.finishedWork=null,s.finishedLanes=0;var d=s.timeoutHandle;if(d!==-1&&(s.timeoutHandle=-1,Bv(d)),st!==null)for(d=st.return;d!==null;){var f=d;switch(Wl(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ja();break;case 3:xi(),Ue(Rt),Ue(vt),nc();break;case 5:ec(f);break;case 4:xi();break;case 13:Ue(Ve);break;case 19:Ue(Ve);break;case 10:Kl(f.type._context);break;case 22:case 23:Mc()}d=d.return}if(ht=s,st=s=ls(s.current,null),xt=Ht=a,ot=0,ur=null,Cc=Ha=Rs=0,Tt=hr=null,Ss!==null){for(a=0;a<Ss.length;a++)if(d=Ss[a],f=d.interleaved,f!==null){d.interleaved=null;var g=f.next,x=d.pending;if(x!==null){var k=x.next;x.next=g,f.next=k}d.pending=f}Ss=null}return s}function Rf(s,a){do{var d=st;try{if(Ql(),Da.current=za,Ma){for(var f=qe.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Ma=!1}if(Es=0,ut=at=qe=null,rr=!1,ar=0,Sc.current=null,d===null||d.return===null){ot=1,ur=a,st=null;break}e:{var x=s,k=d.return,P=d,T=a;if(a=xt,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=T,ee=P,ne=ee.tag;if((ee.mode&1)===0&&(ne===0||ne===11||ne===15)){var J=ee.alternate;J?(ee.updateQueue=J.updateQueue,ee.memoizedState=J.memoizedState,ee.lanes=J.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ce=Zh(k);if(ce!==null){ce.flags&=-257,ef(ce,k,P,x,a),ce.mode&1&&Jh(x,H,a),a=ce,T=H;var ue=a.updateQueue;if(ue===null){var he=new Set;he.add(T),a.updateQueue=he}else ue.add(T);break e}else{if((a&1)===0){Jh(x,H,a),Lc();break e}T=Error(n(426))}}else if(He&&P.mode&1){var Je=Zh(k);if(Je!==null){(Je.flags&65536)===0&&(Je.flags|=256),ef(Je,k,P,x,a),ql(vi(T,P));break e}}x=T=vi(T,P),ot!==4&&(ot=2),hr===null?hr=[x]:hr.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var B=Xh(x,T,a);Nh(x,B);break e;case 1:P=T;var L=x.type,$=x.stateNode;if((x.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(is===null||!is.has($)))){x.flags|=65536,a&=-a,x.lanes|=a;var se=Gh(x,P,a);Nh(x,se);break e}}x=x.return}while(x!==null)}Tf(d)}catch(xe){a=xe,st===d&&d!==null&&(st=d=d.return);continue}break}while(!0)}function Pf(){var s=Wa.current;return Wa.current=za,s===null?za:s}function Lc(){(ot===0||ot===3||ot===2)&&(ot=4),ht===null||(Rs&268435455)===0&&(Ha&268435455)===0||os(ht,xt)}function Xa(s,a){var d=Pe;Pe|=2;var f=Pf();(ht!==s||xt!==a)&&(Mn=null,As(s,a));do try{uy();break}catch(g){Rf(s,g)}while(!0);if(Ql(),Pe=d,Wa.current=f,st!==null)throw Error(n(261));return ht=null,xt=0,ot}function uy(){for(;st!==null;)Af(st)}function hy(){for(;st!==null&&!zx();)Af(st)}function Af(s){var a=Lf(s.alternate,s,Ht);s.memoizedProps=s.pendingProps,a===null?Tf(s):st=a,Sc.current=null}function Tf(s){var a=s;do{var d=a.alternate;if(s=a.return,(a.flags&32768)===0){if(d=iy(d,a,Ht),d!==null){st=d;return}}else{if(d=ry(d,a),d!==null){d.flags&=32767,st=d;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{ot=6,st=null;return}}if(a=a.sibling,a!==null){st=a;return}st=a=s}while(a!==null);ot===0&&(ot=5)}function Ts(s,a,d){var f=Oe,g=Xt.transition;try{Xt.transition=null,Oe=1,fy(s,a,d,f)}finally{Xt.transition=g,Oe=f}return null}function fy(s,a,d,f){do wi();while(rs!==null);if((Pe&6)!==0)throw Error(n(327));d=s.finishedWork;var g=s.finishedLanes;if(d===null)return null;if(s.finishedWork=null,s.finishedLanes=0,d===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var x=d.lanes|d.childLanes;if(Yx(s,x),s===ht&&(st=ht=null,xt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||qa||(qa=!0,Of(ea,function(){return wi(),null})),x=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||x){x=Xt.transition,Xt.transition=null;var k=Oe;Oe=1;var P=Pe;Pe|=4,Sc.current=null,oy(s,d),wf(d,s),Dv(Ll),oa=!!Ml,Ll=Ml=null,s.current=d,ly(d),Ix(),Pe=P,Oe=k,Xt.transition=x}else s.current=d;if(qa&&(qa=!1,rs=s,Ya=g),x=s.pendingLanes,x===0&&(is=null),$x(d.stateNode),Dt(s,Ge()),a!==null)for(f=s.onRecoverableError,d=0;d<a.length;d++)g=a[d],f(g.value,{componentStack:g.stack,digest:g.digest});if(Va)throw Va=!1,s=Rc,Rc=null,s;return(Ya&1)!==0&&s.tag!==0&&wi(),x=s.pendingLanes,(x&1)!==0?s===Pc?fr++:(fr=0,Pc=s):fr=0,es(),null}function wi(){if(rs!==null){var s=yu(Ya),a=Xt.transition,d=Oe;try{if(Xt.transition=null,Oe=16>s?16:s,rs===null)var f=!1;else{if(s=rs,rs=null,Ya=0,(Pe&6)!==0)throw Error(n(331));var g=Pe;for(Pe|=4,de=s.current;de!==null;){var x=de,k=x.child;if((de.flags&16)!==0){var P=x.deletions;if(P!==null){for(var T=0;T<P.length;T++){var H=P[T];for(de=H;de!==null;){var ee=de;switch(ee.tag){case 0:case 11:case 15:dr(8,ee,x)}var ne=ee.child;if(ne!==null)ne.return=ee,de=ne;else for(;de!==null;){ee=de;var J=ee.sibling,ce=ee.return;if(xf(ee),ee===H){de=null;break}if(J!==null){J.return=ce,de=J;break}de=ce}}}var ue=x.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var Je=he.sibling;he.sibling=null,he=Je}while(he!==null)}}de=x}}if((x.subtreeFlags&2064)!==0&&k!==null)k.return=x,de=k;else e:for(;de!==null;){if(x=de,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:dr(9,x,x.return)}var B=x.sibling;if(B!==null){B.return=x.return,de=B;break e}de=x.return}}var L=s.current;for(de=L;de!==null;){k=de;var $=k.child;if((k.subtreeFlags&2064)!==0&&$!==null)$.return=k,de=$;else e:for(k=L;de!==null;){if(P=de,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Ua(9,P)}}catch(xe){Qe(P,P.return,xe)}if(P===k){de=null;break e}var se=P.sibling;if(se!==null){se.return=P.return,de=se;break e}de=P.return}}if(Pe=g,es(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(ta,s)}catch{}f=!0}return f}finally{Oe=d,Xt.transition=a}}return!1}function Df(s,a,d){a=vi(d,a),a=Xh(s,a,1),s=ns(s,a,1),a=Et(),s!==null&&(zi(s,1,a),Dt(s,a))}function Qe(s,a,d){if(s.tag===3)Df(s,s,d);else for(;a!==null;){if(a.tag===3){Df(a,s,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(is===null||!is.has(f))){s=vi(d,s),s=Gh(a,s,1),a=ns(a,s,1),s=Et(),a!==null&&(zi(a,1,s),Dt(a,s));break}}a=a.return}}function py(s,a,d){var f=s.pingCache;f!==null&&f.delete(a),a=Et(),s.pingedLanes|=s.suspendedLanes&d,ht===s&&(xt&d)===d&&(ot===4||ot===3&&(xt&130023424)===xt&&500>Ge()-Ec?As(s,0):Cc|=d),Dt(s,a)}function Mf(s,a){a===0&&((s.mode&1)===0?a=1:(a=sa,sa<<=1,(sa&130023424)===0&&(sa=4194304)));var d=Et();s=An(s,a),s!==null&&(zi(s,a,d),Dt(s,d))}function my(s){var a=s.memoizedState,d=0;a!==null&&(d=a.retryLane),Mf(s,d)}function gy(s,a){var d=0;switch(s.tag){case 13:var f=s.stateNode,g=s.memoizedState;g!==null&&(d=g.retryLane);break;case 19:f=s.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(a),Mf(s,d)}var Lf;Lf=function(s,a,d){if(s!==null)if(s.memoizedProps!==a.pendingProps||Rt.current)At=!0;else{if((s.lanes&d)===0&&(a.flags&128)===0)return At=!1,sy(s,a,d);At=(s.flags&131072)!==0}else At=!1,He&&(a.flags&1048576)!==0&&fh(a,ka,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;Ba(s,a),s=a.pendingProps;var g=di(a,vt.current);gi(a,d),g=rc(null,a,f,s,g,d);var x=ac();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Pt(f)?(x=!0,wa(a)):x=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Jl(a),g.updater=Ia,a.stateNode=g,g._reactInternals=a,hc(a,f,s,d),a=gc(null,a,f,!0,x,d)):(a.tag=0,He&&x&&Ul(a),Ct(null,a,g,d),a=a.child),a;case 16:f=a.elementType;e:{switch(Ba(s,a),s=a.pendingProps,g=f._init,f=g(f._payload),a.type=f,g=a.tag=vy(f),s=on(f,s),g){case 0:a=mc(null,a,f,s,d);break e;case 1:a=of(null,a,f,s,d);break e;case 11:a=tf(null,a,f,s,d);break e;case 14:a=nf(null,a,f,on(f.type,s),d);break e}throw Error(n(306,f,""))}return a;case 0:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:on(f,g),mc(s,a,f,g,d);case 1:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:on(f,g),of(s,a,f,g,d);case 3:e:{if(lf(a),s===null)throw Error(n(387));f=a.pendingProps,x=a.memoizedState,g=x.element,wh(s,a),Aa(a,f,null,d);var k=a.memoizedState;if(f=k.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){g=vi(Error(n(423)),a),a=cf(s,a,f,d,g);break e}else if(f!==g){g=vi(Error(n(424)),a),a=cf(s,a,f,d,g);break e}else for(Wt=Gn(a.stateNode.containerInfo.firstChild),Ut=a,He=!0,an=null,d=bh(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(fi(),f===g){a=Dn(s,a,d);break e}Ct(s,a,f,d)}a=a.child}return a;case 5:return kh(a),s===null&&Vl(a),f=a.type,g=a.pendingProps,x=s!==null?s.memoizedProps:null,k=g.children,Ol(f,g)?k=null:x!==null&&Ol(f,x)&&(a.flags|=32),af(s,a),Ct(s,a,k,d),a.child;case 6:return s===null&&Vl(a),null;case 13:return df(s,a,d);case 4:return Zl(a,a.stateNode.containerInfo),f=a.pendingProps,s===null?a.child=pi(a,null,f,d):Ct(s,a,f,d),a.child;case 11:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:on(f,g),tf(s,a,f,g,d);case 7:return Ct(s,a,a.pendingProps,d),a.child;case 8:return Ct(s,a,a.pendingProps.children,d),a.child;case 12:return Ct(s,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,g=a.pendingProps,x=a.memoizedProps,k=g.value,Be(Ea,f._currentValue),f._currentValue=k,x!==null)if(rn(x.value,k)){if(x.children===g.children&&!Rt.current){a=Dn(s,a,d);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var P=x.dependencies;if(P!==null){k=x.child;for(var T=P.firstContext;T!==null;){if(T.context===f){if(x.tag===1){T=Tn(-1,d&-d),T.tag=2;var H=x.updateQueue;if(H!==null){H=H.shared;var ee=H.pending;ee===null?T.next=T:(T.next=ee.next,ee.next=T),H.pending=T}}x.lanes|=d,T=x.alternate,T!==null&&(T.lanes|=d),Xl(x.return,d,a),P.lanes|=d;break}T=T.next}}else if(x.tag===10)k=x.type===a.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(n(341));k.lanes|=d,P=k.alternate,P!==null&&(P.lanes|=d),Xl(k,d,a),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===a){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}Ct(s,a,g.children,d),a=a.child}return a;case 9:return g=a.type,f=a.pendingProps.children,gi(a,d),g=Qt(g),f=f(g),a.flags|=1,Ct(s,a,f,d),a.child;case 14:return f=a.type,g=on(f,a.pendingProps),g=on(f.type,g),nf(s,a,f,g,d);case 15:return sf(s,a,a.type,a.pendingProps,d);case 17:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:on(f,g),Ba(s,a),a.tag=1,Pt(f)?(s=!0,wa(a)):s=!1,gi(a,d),Qh(a,f,g),hc(a,f,g,d),gc(null,a,f,!0,s,d);case 19:return hf(s,a,d);case 22:return rf(s,a,d)}throw Error(n(156,a.tag))};function Of(s,a){return pu(s,a)}function xy(s,a,d,f){this.tag=s,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(s,a,d,f){return new xy(s,a,d,f)}function Oc(s){return s=s.prototype,!(!s||!s.isReactComponent)}function vy(s){if(typeof s=="function")return Oc(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===ae)return 14}return 2}function ls(s,a){var d=s.alternate;return d===null?(d=Gt(s.tag,a,s.key,s.mode),d.elementType=s.elementType,d.type=s.type,d.stateNode=s.stateNode,d.alternate=s,s.alternate=d):(d.pendingProps=a,d.type=s.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=s.flags&14680064,d.childLanes=s.childLanes,d.lanes=s.lanes,d.child=s.child,d.memoizedProps=s.memoizedProps,d.memoizedState=s.memoizedState,d.updateQueue=s.updateQueue,a=s.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=s.sibling,d.index=s.index,d.ref=s.ref,d}function Ga(s,a,d,f,g,x){var k=2;if(f=s,typeof s=="function")Oc(s)&&(k=1);else if(typeof s=="string")k=5;else e:switch(s){case M:return Ds(d.children,g,x,a);case C:k=8,g|=8;break;case O:return s=Gt(12,d,a,g|2),s.elementType=O,s.lanes=x,s;case te:return s=Gt(13,d,a,g),s.elementType=te,s.lanes=x,s;case V:return s=Gt(19,d,a,g),s.elementType=V,s.lanes=x,s;case ie:return Ja(d,g,x,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case W:k=10;break e;case X:k=9;break e;case F:k=11;break e;case ae:k=14;break e;case U:k=16,f=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return a=Gt(k,d,a,g),a.elementType=s,a.type=f,a.lanes=x,a}function Ds(s,a,d,f){return s=Gt(7,s,f,a),s.lanes=d,s}function Ja(s,a,d,f){return s=Gt(22,s,f,a),s.elementType=ie,s.lanes=d,s.stateNode={isHidden:!1},s}function zc(s,a,d){return s=Gt(6,s,null,a),s.lanes=d,s}function Ic(s,a,d){return a=Gt(4,s.children!==null?s.children:[],s.key,a),a.lanes=d,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function yy(s,a,d,f,g){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Fc(s,a,d,f,g,x,k,P,T){return s=new yy(s,a,d,P,T),a===1?(a=1,x===!0&&(a|=8)):a=0,x=Gt(3,null,null,a),s.current=x,x.stateNode=s,x.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(x),s}function by(s,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:s,containerInfo:a,implementation:d}}function zf(s){if(!s)return Zn;s=s._reactInternals;e:{if(js(s)!==s||s.tag!==1)throw Error(n(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(s.tag===1){var d=s.type;if(Pt(d))return dh(s,d,a)}return a}function If(s,a,d,f,g,x,k,P,T){return s=Fc(d,f,!0,s,g,x,k,P,T),s.context=zf(null),d=s.current,f=Et(),g=as(d),x=Tn(f,g),x.callback=a??null,ns(d,x,g),s.current.lanes=g,zi(s,g,f),Dt(s,f),s}function Za(s,a,d,f){var g=a.current,x=Et(),k=as(g);return d=zf(d),a.context===null?a.context=d:a.pendingContext=d,a=Tn(x,k),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ns(g,a,k),s!==null&&(dn(s,g,k,x),Pa(s,g,k)),k}function eo(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Ff(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var d=s.retryLane;s.retryLane=d!==0&&d<a?d:a}}function Bc(s,a){Ff(s,a),(s=s.alternate)&&Ff(s,a)}function jy(){return null}var Bf=typeof reportError=="function"?reportError:function(s){console.error(s)};function $c(s){this._internalRoot=s}to.prototype.render=$c.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(n(409));Za(s,a,null,null)},to.prototype.unmount=$c.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;Ps(function(){Za(null,s,null,null)}),a[Cn]=null}};function to(s){this._internalRoot=s}to.prototype.unstable_scheduleHydration=function(s){if(s){var a=wu();s={blockedOn:null,target:s,priority:a};for(var d=0;d<Qn.length&&a!==0&&a<Qn[d].priority;d++);Qn.splice(d,0,s),d===0&&ku(s)}};function Uc(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function no(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function $f(){}function wy(s,a,d,f,g){if(g){if(typeof f=="function"){var x=f;f=function(){var H=eo(k);x.call(H)}}var k=If(a,f,s,0,null,!1,!1,"",$f);return s._reactRootContainer=k,s[Cn]=k.current,Gi(s.nodeType===8?s.parentNode:s),Ps(),k}for(;g=s.lastChild;)s.removeChild(g);if(typeof f=="function"){var P=f;f=function(){var H=eo(T);P.call(H)}}var T=Fc(s,0,!1,null,null,!1,!1,"",$f);return s._reactRootContainer=T,s[Cn]=T.current,Gi(s.nodeType===8?s.parentNode:s),Ps(function(){Za(a,T,d,f)}),T}function so(s,a,d,f,g){var x=d._reactRootContainer;if(x){var k=x;if(typeof g=="function"){var P=g;g=function(){var T=eo(k);P.call(T)}}Za(a,k,s,g)}else k=wy(d,a,s,g,f);return eo(k)}bu=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var d=Oi(a.pendingLanes);d!==0&&(hl(a,d|1),Dt(a,Ge()),(Pe&6)===0&&(ji=Ge()+500,es()))}break;case 13:Ps(function(){var f=An(s,1);if(f!==null){var g=Et();dn(f,s,1,g)}}),Bc(s,1)}},fl=function(s){if(s.tag===13){var a=An(s,134217728);if(a!==null){var d=Et();dn(a,s,134217728,d)}Bc(s,134217728)}},ju=function(s){if(s.tag===13){var a=as(s),d=An(s,a);if(d!==null){var f=Et();dn(d,s,a,f)}Bc(s,a)}},wu=function(){return Oe},Nu=function(s,a){var d=Oe;try{return Oe=s,a()}finally{Oe=d}},rl=function(s,a,d){switch(a){case"input":if(Sn(s,d),a=d.name,d.type==="radio"&&a!=null){for(d=s;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==s&&f.form===s.form){var g=ba(f);if(!g)throw Error(n(90));ge(f),Sn(f,g)}}}break;case"textarea":Z(s,d);break;case"select":a=d.value,a!=null&&pe(s,!!d.multiple,a,!1)}},ou=Dc,lu=Ps;var Ny={usingClientEntryPoint:!1,Events:[er,li,ba,ru,au,Dc]},pr={findFiberByHostInstance:ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_y={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=hu(s),s===null?null:s.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ta=io.inject(_y),mn=io}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ny,Mt.createPortal=function(s,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uc(a))throw Error(n(200));return by(s,a,null,d)},Mt.createRoot=function(s,a){if(!Uc(s))throw Error(n(299));var d=!1,f="",g=Bf;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Fc(s,1,!1,null,null,d,!1,f,g),s[Cn]=a.current,Gi(s.nodeType===8?s.parentNode:s),new $c(a)},Mt.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=hu(a),s=s===null?null:s.stateNode,s},Mt.flushSync=function(s){return Ps(s)},Mt.hydrate=function(s,a,d){if(!no(a))throw Error(n(200));return so(null,s,a,!0,d)},Mt.hydrateRoot=function(s,a,d){if(!Uc(s))throw Error(n(405));var f=d!=null&&d.hydratedSources||null,g=!1,x="",k=Bf;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(x=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),a=If(a,null,s,1,d??null,g,!1,x,k),s[Cn]=a.current,Gi(s),f)for(s=0;s<f.length;s++)d=f[s],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new to(a)},Mt.render=function(s,a,d){if(!no(a))throw Error(n(200));return so(null,s,a,!1,d)},Mt.unmountComponentAtNode=function(s){if(!no(s))throw Error(n(40));return s._reactRootContainer?(Ps(function(){so(null,null,s,!1,function(){s._reactRootContainer=null,s[Cn]=null})}),!0):!1},Mt.unstable_batchedUpdates=Dc,Mt.unstable_renderSubtreeIntoContainer=function(s,a,d,f){if(!no(d))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return so(s,a,d,!1,f)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var Kf;function Ym(){if(Kf)return Vc.exports;Kf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Vc.exports=Ly(),Vc.exports}var Xf;function Oy(){if(Xf)return ro;Xf=1;var t=Ym();return ro.createRoot=t.createRoot,ro.hydrateRoot=t.hydrateRoot,ro}var zy=Oy();const Iy=Vm(zy);Ym();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dr.apply(this,arguments)}var us;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(us||(us={}));const Gf="popstate";function Fy(t){t===void 0&&(t={});function e(i,o){let{pathname:l,search:c,hash:u}=i.location;return pd("",{pathname:l,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Po(o)}return $y(e,n,null,t)}function rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Dd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function By(){return Math.random().toString(36).substr(2,8)}function Jf(t,e){return{usr:t.state,key:t.key,idx:e}}function pd(t,e,n,i){return n===void 0&&(n=null),Dr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Pi(e):e,{state:n,key:e&&e.key||i||By()})}function Po(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Pi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function $y(t,e,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,u=us.Pop,h=null,p=m();p==null&&(p=0,c.replaceState(Dr({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function v(){u=us.Pop;let y=m(),_=y==null?null:y-p;p=y,h&&h({action:u,location:N.location,delta:_})}function b(y,_){u=us.Push;let S=pd(N.location,y,_);p=m()+1;let A=Jf(S,p),z=N.createHref(S);try{c.pushState(A,"",z)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(z)}l&&h&&h({action:u,location:N.location,delta:1})}function w(y,_){u=us.Replace;let S=pd(N.location,y,_);p=m();let A=Jf(S,p),z=N.createHref(S);c.replaceState(A,"",z),l&&h&&h({action:u,location:N.location,delta:0})}function j(y){let _=o.location.origin!=="null"?o.location.origin:o.location.href,S=typeof y=="string"?y:Po(y);return S=S.replace(/ $/,"%20"),rt(_,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,_)}let N={get action(){return u},get location(){return t(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Gf,v),h=y,()=>{o.removeEventListener(Gf,v),h=null}},createHref(y){return e(o,y)},createURL:j,encodeLocation(y){let _=j(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:b,replace:w,go(y){return c.go(y)}};return N}var Zf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zf||(Zf={}));function Uy(t,e,n){return n===void 0&&(n="/"),Wy(t,e,n)}function Wy(t,e,n,i){let o=typeof e=="string"?Pi(e):e,l=Md(o.pathname||"/",n);if(l==null)return null;let c=Qm(t);Hy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=n0(l);u=Zy(c[h],p)}return u}function Qm(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,c,u)=>{let h={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(rt(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let p=ms([i,h.relativePath]),m=n.concat(h);l.children&&l.children.length>0&&(rt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Qm(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Gy(p,l.index),routesMeta:m})};return t.forEach((l,c)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,c);else for(let h of Km(l.path))o(l,c,h)}),e}function Km(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Km(i.join("/")),u=[];return u.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function Hy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Jy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Vy=/^:[\w-]+$/,qy=3,Yy=2,Qy=1,Ky=10,Xy=-2,ep=t=>t==="*";function Gy(t,e){let n=t.split("/"),i=n.length;return n.some(ep)&&(i+=Xy),e&&(i+=Yy),n.filter(o=>!ep(o)).reduce((o,l)=>o+(Vy.test(l)?qy:l===""?Qy:Ky),i)}function Jy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function Zy(t,e,n){let{routesMeta:i}=t,o={},l="/",c=[];for(let u=0;u<i.length;++u){let h=i[u],p=u===i.length-1,m=l==="/"?e:e.slice(l.length)||"/",v=e0({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),b=h.route;if(!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:ms([l,v.pathname]),pathnameBase:o0(ms([l,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(l=ms([l,v.pathnameBase]))}return c}function e0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=t0(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((p,m,v)=>{let{paramName:b,isOptional:w}=m;if(b==="*"){let N=u[v]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const j=u[v];return w&&!j?p[b]=void 0:p[b]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function t0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Dd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(i.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function n0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Dd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Md(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const s0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,i0=t=>s0.test(t);function r0(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?Pi(t):t,l;if(n)if(i0(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Dd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?l=tp(n.substring(1),"/"):l=tp(n,e)}else l=e;return{pathname:l,search:l0(i),hash:c0(o)}}function tp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xm(t,e){let n=a0(t);return e?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Gm(t,e,n,i){i===void 0&&(i=!1);let o;typeof t=="string"?o=Pi(t):(o=Dr({},t),rt(!o.pathname||!o.pathname.includes("?"),Qc("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),Qc("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),Qc("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,u;if(c==null)u=n;else{let v=e.length-1;if(!i&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),v-=1;o.pathname=b.join("/")}u=v>=0?e[v]:"/"}let h=r0(o,u),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const ms=t=>t.join("/").replace(/\/\/+/g,"/"),o0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),l0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,c0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function d0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jm=["post","put","patch","delete"];new Set(Jm);const u0=["get",...Jm];new Set(u0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mr.apply(this,arguments)}const Ld=E.createContext(null),h0=E.createContext(null),Xs=E.createContext(null),Uo=E.createContext(null),vs=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=E.createContext(null);function f0(t,e){let{relative:n}=e===void 0?{}:e;Wr()||rt(!1);let{basename:i,navigator:o}=E.useContext(Xs),{hash:l,pathname:c,search:u}=ng(t,{relative:n}),h=c;return i!=="/"&&(h=c==="/"?i:ms([i,c])),o.createHref({pathname:h,search:u,hash:l})}function Wr(){return E.useContext(Uo)!=null}function Wo(){return Wr()||rt(!1),E.useContext(Uo).location}function eg(t){E.useContext(Xs).static||E.useLayoutEffect(t)}function Wn(){let{isDataRoute:t}=E.useContext(vs);return t?S0():p0()}function p0(){Wr()||rt(!1);let t=E.useContext(Ld),{basename:e,future:n,navigator:i}=E.useContext(Xs),{matches:o}=E.useContext(vs),{pathname:l}=Wo(),c=JSON.stringify(Xm(o,n.v7_relativeSplatPath)),u=E.useRef(!1);return eg(()=>{u.current=!0}),E.useCallback(function(p,m){if(m===void 0&&(m={}),!u.current)return;if(typeof p=="number"){i.go(p);return}let v=Gm(p,JSON.parse(c),l,m.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ms([e,v.pathname])),(m.replace?i.replace:i.push)(v,m.state,m)},[e,i,c,l,t])}function tg(){let{matches:t}=E.useContext(vs),e=t[t.length-1];return e?e.params:{}}function ng(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=E.useContext(Xs),{matches:o}=E.useContext(vs),{pathname:l}=Wo(),c=JSON.stringify(Xm(o,i.v7_relativeSplatPath));return E.useMemo(()=>Gm(t,JSON.parse(c),l,n==="path"),[t,c,l,n])}function m0(t,e){return g0(t,e)}function g0(t,e,n,i){Wr()||rt(!1);let{navigator:o}=E.useContext(Xs),{matches:l}=E.useContext(vs),c=l[l.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=Wo(),m;if(e){var v;let y=typeof e=="string"?Pi(e):e;h==="/"||(v=y.pathname)!=null&&v.startsWith(h)||rt(!1),m=y}else m=p;let b=m.pathname||"/",w=b;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(y.length).join("/")}let j=Uy(t,{pathname:w}),N=j0(j&&j.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:ms([h,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:ms([h,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,n,i);return e&&N?E.createElement(Uo.Provider,{value:{location:Mr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:us.Pop}},N):N}function x0(){let t=k0(),e=d0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:o},n):null,null)}const v0=E.createElement(x0,null);class y0 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(vs.Provider,{value:this.props.routeContext},E.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function b0(t){let{routeContext:e,match:n,children:i}=t,o=E.useContext(Ld);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(vs.Provider,{value:e},i)}function j0(t,e,n,i){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let c=t,u=(o=n)==null?void 0:o.errors;if(u!=null){let m=c.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);m>=0||rt(!1),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(n&&i&&i.v7_partialHydration)for(let m=0;m<c.length;m++){let v=c[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=m),v.route.id){let{loaderData:b,errors:w}=n,j=v.route.loader&&b[v.route.id]===void 0&&(!w||w[v.route.id]===void 0);if(v.route.lazy||j){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,v,b)=>{let w,j=!1,N=null,y=null;n&&(w=u&&v.route.id?u[v.route.id]:void 0,N=v.route.errorElement||v0,h&&(p<0&&b===0?(C0("route-fallback"),j=!0,y=null):p===b&&(j=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,b+1)),S=()=>{let A;return w?A=N:j?A=y:v.route.Component?A=E.createElement(v.route.Component,null):v.route.element?A=v.route.element:A=m,E.createElement(b0,{match:v,routeContext:{outlet:m,matches:_,isDataRoute:n!=null},children:A})};return n&&(v.route.ErrorBoundary||v.route.errorElement||b===0)?E.createElement(y0,{location:n.location,revalidation:n.revalidation,component:N,error:w,children:S(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):S()},null)}var sg=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(sg||{}),ig=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(ig||{});function w0(t){let e=E.useContext(Ld);return e||rt(!1),e}function N0(t){let e=E.useContext(h0);return e||rt(!1),e}function _0(t){let e=E.useContext(vs);return e||rt(!1),e}function rg(t){let e=_0(),n=e.matches[e.matches.length-1];return n.route.id||rt(!1),n.route.id}function k0(){var t;let e=E.useContext(Zm),n=N0(),i=rg();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function S0(){let{router:t}=w0(sg.UseNavigateStable),e=rg(ig.UseNavigateStable),n=E.useRef(!1);return eg(()=>{n.current=!0}),E.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,Mr({fromRouteId:e},l)))},[t,e])}const np={};function C0(t,e,n){np[t]||(np[t]=!0)}function E0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ke(t){rt(!1)}function R0(t){let{basename:e="/",children:n=null,location:i,navigationType:o=us.Pop,navigator:l,static:c=!1,future:u}=t;Wr()&&rt(!1);let h=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:h,navigator:l,static:c,future:Mr({v7_relativeSplatPath:!1},u)}),[h,u,l,c]);typeof i=="string"&&(i=Pi(i));let{pathname:m="/",search:v="",hash:b="",state:w=null,key:j="default"}=i,N=E.useMemo(()=>{let y=Md(m,h);return y==null?null:{location:{pathname:y,search:v,hash:b,state:w,key:j},navigationType:o}},[h,m,v,b,w,j,o]);return N==null?null:E.createElement(Xs.Provider,{value:p},E.createElement(Uo.Provider,{children:n,value:N}))}function P0(t){let{children:e,location:n}=t;return m0(md(e),n)}new Promise(()=>{});function md(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(i,o)=>{if(!E.isValidElement(i))return;let l=[...e,o];if(i.type===E.Fragment){n.push.apply(n,md(i.props.children,l));return}i.type!==Ke&&rt(!1),!i.props.index||!i.props.children||rt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=md(i.props.children,l)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gd.apply(this,arguments)}function A0(t,e){if(t==null)return{};var n={},i=Object.keys(t),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function T0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function D0(t,e){return t.button===0&&(!e||e==="_self")&&!T0(t)}const M0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],L0="6";try{window.__reactRouterVersion=L0}catch{}const O0="startTransition",sp=Ty[O0];function z0(t){let{basename:e,children:n,future:i,window:o}=t,l=E.useRef();l.current==null&&(l.current=Fy({window:o,v5Compat:!0}));let c=l.current,[u,h]=E.useState({action:c.action,location:c.location}),{v7_startTransition:p}=i||{},m=E.useCallback(v=>{p&&sp?sp(()=>h(v)):h(v)},[h,p]);return E.useLayoutEffect(()=>c.listen(m),[c,m]),E.useEffect(()=>E0(i),[i]),E.createElement(R0,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,future:i})}const I0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=E.forwardRef(function(e,n){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:u,target:h,to:p,preventScrollReset:m,viewTransition:v}=e,b=A0(e,M0),{basename:w}=E.useContext(Xs),j,N=!1;if(typeof p=="string"&&F0.test(p)&&(j=p,I0))try{let A=new URL(window.location.href),z=p.startsWith("//")?new URL(A.protocol+p):new URL(p),R=Md(z.pathname,w);z.origin===A.origin&&R!=null?p=R+z.search+z.hash:N=!0}catch{}let y=f0(p,{relative:o}),_=B0(p,{replace:c,state:u,target:h,preventScrollReset:m,relative:o,viewTransition:v});function S(A){i&&i(A),A.defaultPrevented||_(A)}return E.createElement("a",gd({},b,{href:j||y,onClick:N||l?i:S,ref:n,target:h}))});var ip;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ip||(ip={}));var rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));function B0(t,e){let{target:n,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:u}=e===void 0?{}:e,h=Wn(),p=Wo(),m=ng(t,{relative:c});return E.useCallback(v=>{if(D0(v,n)){v.preventDefault();let b=i!==void 0?i:Po(p)===Po(m);h(t,{replace:b,state:o,preventScrollReset:l,relative:c,viewTransition:u})}},[p,h,m,i,o,n,t,l,c,u])}const $0={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",database:"数据库",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",collection:"采集",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据"}},U0={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",database:"Database",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",collection:"Collection",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warn",error:"Error",save:"Save Settings",saved:"Settings saved"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data"}},W0={zh:$0,en:U0},ag=E.createContext(void 0);function H0(t,e){const n=e.split(".");let i=t;for(const o of n)if(i&&typeof i=="object"&&o in i)i=i[o];else return e;return typeof i=="string"?i:e}function V0({children:t}){const[e,n]=E.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),i=E.useCallback(c=>{n(c),localStorage.setItem("locale",c)},[]),o=E.useCallback(()=>{i(e==="zh"?"en":"zh")},[e,i]),l=E.useCallback((c,u)=>{let h=H0(W0[e],c);return u&&Object.entries(u).forEach(([p,m])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(m))}),h},[e]);return r.jsx(ag.Provider,{value:{locale:e,t:l,setLocale:i,toggleLocale:o},children:t})}function pt(){const t=E.useContext(ag);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function q0(){const{locale:t,toggleLocale:e}=pt();return r.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function og(t,e){return function(){return t.apply(e,arguments)}}const{toString:Y0}=Object.prototype,{getPrototypeOf:Od}=Object,{iterator:Ho,toStringTag:lg}=Symbol,Vo=(t=>e=>{const n=Y0.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),hn=t=>(t=t.toLowerCase(),e=>Vo(e)===t),qo=t=>e=>typeof e===t,{isArray:Ai}=Array,Ci=qo("undefined");function Hr(t){return t!==null&&!Ci(t)&&t.constructor!==null&&!Ci(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const cg=hn("ArrayBuffer");function Q0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&cg(t.buffer),e}const K0=qo("string"),zt=qo("function"),dg=qo("number"),Vr=t=>t!==null&&typeof t=="object",X0=t=>t===!0||t===!1,wo=t=>{if(Vo(t)!=="object")return!1;const e=Od(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(lg in t)&&!(Ho in t)},G0=t=>{if(!Vr(t)||Hr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},J0=hn("Date"),Z0=hn("File"),eb=t=>!!(t&&typeof t.uri<"u"),tb=t=>t&&typeof t.getParts<"u",nb=hn("Blob"),sb=hn("FileList"),ib=t=>Vr(t)&&zt(t.pipe);function rb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ap=rb(),op=typeof ap.FormData<"u"?ap.FormData:void 0,ab=t=>{let e;return t&&(op&&t instanceof op||zt(t.append)&&((e=Vo(t))==="formdata"||e==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},ob=hn("URLSearchParams"),[lb,cb,db,ub]=["ReadableStream","Request","Response","Headers"].map(hn),hb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function qr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,o;if(typeof t!="object"&&(t=[t]),Ai(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{if(Hr(t))return;const l=n?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let u;for(i=0;i<c;i++)u=l[i],e.call(null,t[u],u,t)}}function ug(t,e){if(Hr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,o;for(;i-- >0;)if(o=n[i],e===o.toLowerCase())return o;return null}const Us=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hg=t=>!Ci(t)&&t!==Us;function xd(){const{caseless:t,skipUndefined:e}=hg(this)&&this||{},n={},i=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const c=t&&ug(n,l)||l;wo(n[c])&&wo(o)?n[c]=xd(n[c],o):wo(o)?n[c]=xd({},o):Ai(o)?n[c]=o.slice():(!e||!Ci(o))&&(n[c]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&qr(arguments[o],i);return n}const fb=(t,e,n,{allOwnKeys:i}={})=>(qr(e,(o,l)=>{n&&zt(o)?Object.defineProperty(t,l,{value:og(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),pb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),mb=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},gb=(t,e,n,i)=>{let o,l,c;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)c=o[l],(!i||i(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=n!==!1&&Od(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},xb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},vb=t=>{if(!t)return null;if(Ai(t))return t;let e=t.length;if(!dg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},yb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Od(Uint8Array)),bb=(t,e)=>{const i=(t&&t[Ho]).call(t);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},jb=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},wb=hn("HTMLFormElement"),Nb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),lp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),_b=hn("RegExp"),fg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};qr(n,(o,l)=>{let c;(c=e(o,l,t))!==!1&&(i[l]=c||o)}),Object.defineProperties(t,i)},kb=t=>{fg(t,(e,n)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(zt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sb=(t,e)=>{const n={},i=o=>{o.forEach(l=>{n[l]=!0})};return Ai(t)?i(t):i(String(t).split(e)),n},Cb=()=>{},Eb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Rb(t){return!!(t&&zt(t.append)&&t[lg]==="FormData"&&t[Ho])}const Pb=t=>{const e=new Array(10),n=(i,o)=>{if(Vr(i)){if(e.indexOf(i)>=0)return;if(Hr(i))return i;if(!("toJSON"in i)){e[o]=i;const l=Ai(i)?[]:{};return qr(i,(c,u)=>{const h=n(c,o+1);!Ci(h)&&(l[u]=h)}),e[o]=void 0,l}}return i};return n(t,0)},Ab=hn("AsyncFunction"),Tb=t=>t&&(Vr(t)||zt(t))&&zt(t.then)&&zt(t.catch),pg=((t,e)=>t?setImmediate:e?((n,i)=>(Us.addEventListener("message",({source:o,data:l})=>{o===Us&&l===n&&i.length&&i.shift()()},!1),o=>{i.push(o),Us.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",zt(Us.postMessage)),Db=typeof queueMicrotask<"u"?queueMicrotask.bind(Us):typeof process<"u"&&process.nextTick||pg,Mb=t=>t!=null&&zt(t[Ho]),q={isArray:Ai,isArrayBuffer:cg,isBuffer:Hr,isFormData:ab,isArrayBufferView:Q0,isString:K0,isNumber:dg,isBoolean:X0,isObject:Vr,isPlainObject:wo,isEmptyObject:G0,isReadableStream:lb,isRequest:cb,isResponse:db,isHeaders:ub,isUndefined:Ci,isDate:J0,isFile:Z0,isReactNativeBlob:eb,isReactNative:tb,isBlob:nb,isRegExp:_b,isFunction:zt,isStream:ib,isURLSearchParams:ob,isTypedArray:yb,isFileList:sb,forEach:qr,merge:xd,extend:fb,trim:hb,stripBOM:pb,inherits:mb,toFlatObject:gb,kindOf:Vo,kindOfTest:hn,endsWith:xb,toArray:vb,forEachEntry:bb,matchAll:jb,isHTMLForm:wb,hasOwnProperty:lp,hasOwnProp:lp,reduceDescriptors:fg,freezeMethods:kb,toObjectSet:Sb,toCamelCase:Nb,noop:Cb,toFiniteNumber:Eb,findKey:ug,global:Us,isContextDefined:hg,isSpecCompliantForm:Rb,toJSONObject:Pb,isAsyncFn:Ab,isThenable:Tb,setImmediate:pg,asap:Db,isIterable:Mb};let Ne=class mg extends Error{static from(e,n,i,o,l,c){const u=new mg(e.message,n||e.code,i,o,l);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,n,i,o,l){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};Ne.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ne.ERR_BAD_OPTION="ERR_BAD_OPTION";Ne.ECONNABORTED="ECONNABORTED";Ne.ETIMEDOUT="ETIMEDOUT";Ne.ERR_NETWORK="ERR_NETWORK";Ne.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ne.ERR_DEPRECATED="ERR_DEPRECATED";Ne.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ne.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ne.ERR_CANCELED="ERR_CANCELED";Ne.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ne.ERR_INVALID_URL="ERR_INVALID_URL";const Lb=null;function vd(t){return q.isPlainObject(t)||q.isArray(t)}function gg(t){return q.endsWith(t,"[]")?t.slice(0,-2):t}function Kc(t,e,n){return t?t.concat(e).map(function(o,l){return o=gg(o),!n&&l?"["+o+"]":o}).join(n?".":""):e}function Ob(t){return q.isArray(t)&&!t.some(vd)}const zb=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Yo(t,e,n){if(!q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,y){return!q.isUndefined(y[N])});const i=n.metaTokens,o=n.visitor||m,l=n.dots,c=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function p(j){if(j===null)return"";if(q.isDate(j))return j.toISOString();if(q.isBoolean(j))return j.toString();if(!h&&q.isBlob(j))throw new Ne("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(j)||q.isTypedArray(j)?h&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function m(j,N,y){let _=j;if(q.isReactNative(e)&&q.isReactNativeBlob(j))return e.append(Kc(y,N,l),p(j)),!1;if(j&&!y&&typeof j=="object"){if(q.endsWith(N,"{}"))N=i?N:N.slice(0,-2),j=JSON.stringify(j);else if(q.isArray(j)&&Ob(j)||(q.isFileList(j)||q.endsWith(N,"[]"))&&(_=q.toArray(j)))return N=gg(N),_.forEach(function(A,z){!(q.isUndefined(A)||A===null)&&e.append(c===!0?Kc([N],z,l):c===null?N:N+"[]",p(A))}),!1}return vd(j)?!0:(e.append(Kc(y,N,l),p(j)),!1)}const v=[],b=Object.assign(zb,{defaultVisitor:m,convertValue:p,isVisitable:vd});function w(j,N){if(!q.isUndefined(j)){if(v.indexOf(j)!==-1)throw Error("Circular reference detected in "+N.join("."));v.push(j),q.forEach(j,function(_,S){(!(q.isUndefined(_)||_===null)&&o.call(e,_,q.isString(S)?S.trim():S,N,b))===!0&&w(_,N?N.concat(S):[S])}),v.pop()}}if(!q.isObject(t))throw new TypeError("data must be an object");return w(t),e}function cp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function zd(t,e){this._pairs=[],t&&Yo(t,this,e)}const xg=zd.prototype;xg.append=function(e,n){this._pairs.push([e,n])};xg.toString=function(e){const n=e?function(i){return e.call(this,i,cp)}:cp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ib(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function vg(t,e,n){if(!e)return t;const i=n&&n.encode||Ib,o=q.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let c;if(l?c=l(e,o):c=q.isURLSearchParams(e)?e.toString():new zd(e,o).toString(i),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class dp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Id={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Fb=typeof URLSearchParams<"u"?URLSearchParams:zd,Bb=typeof FormData<"u"?FormData:null,$b=typeof Blob<"u"?Blob:null,Ub={isBrowser:!0,classes:{URLSearchParams:Fb,FormData:Bb,Blob:$b},protocols:["http","https","file","blob","url","data"]},Fd=typeof window<"u"&&typeof document<"u",yd=typeof navigator=="object"&&navigator||void 0,Wb=Fd&&(!yd||["ReactNative","NativeScript","NS"].indexOf(yd.product)<0),Hb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vb=Fd&&window.location.href||"http://localhost",qb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fd,hasStandardBrowserEnv:Wb,hasStandardBrowserWebWorkerEnv:Hb,navigator:yd,origin:Vb},Symbol.toStringTag,{value:"Module"})),Nt={...qb,...Ub};function Yb(t,e){return Yo(t,new Nt.classes.URLSearchParams,{visitor:function(n,i,o,l){return Nt.isNode&&q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function Qb(t){return q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Kb(t){const e={},n=Object.keys(t);let i;const o=n.length;let l;for(i=0;i<o;i++)l=n[i],e[l]=t[l];return e}function yg(t){function e(n,i,o,l){let c=n[l++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=l>=n.length;return c=!c&&q.isArray(o)?o.length:c,h?(q.hasOwnProp(o,c)?o[c]=[o[c],i]:o[c]=i,!u):((!o[c]||!q.isObject(o[c]))&&(o[c]=[]),e(n,i,o[c],l)&&q.isArray(o[c])&&(o[c]=Kb(o[c])),!u)}if(q.isFormData(t)&&q.isFunction(t.entries)){const n={};return q.forEachEntry(t,(i,o)=>{e(Qb(i),o,n,0)}),n}return null}function Xb(t,e,n){if(q.isString(t))try{return(e||JSON.parse)(t),q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Yr={transitional:Id,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,l=q.isObject(e);if(l&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return o?JSON.stringify(yg(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Yb(e,this.formSerializer).toString();if((u=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Yo(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Xb(e)):e}],transformResponse:[function(e){const n=this.transitional||Yr.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!this.responseType||o)){const c=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?Ne.from(u,Ne.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],t=>{Yr.headers[t]={}});const Gb=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jb=t=>{const e={};let n,i,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),n=c.substring(0,o).trim().toLowerCase(),i=c.substring(o+1).trim(),!(!n||e[n]&&Gb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},up=Symbol("internals"),Zb=t=>!/[\r\n]/.test(t);function bg(t,e){if(!(t===!1||t==null)){if(q.isArray(t)){t.forEach(n=>bg(n,e));return}if(!Zb(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function gr(t){return t&&String(t).trim().toLowerCase()}function ej(t){let e=t.length;for(;e>0;){const n=t.charCodeAt(e-1);if(n!==10&&n!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function No(t){return t===!1||t==null?t:q.isArray(t)?t.map(No):ej(String(t))}function tj(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const nj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Xc(t,e,n,i,o){if(q.isFunction(i))return i.call(this,e,n);if(o&&(e=n),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function sj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function ij(t,e){const n=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(o,l,c){return this[i].call(this,e,o,l,c)},configurable:!0})})}let It=class{constructor(e){e&&this.set(e)}set(e,n,i){const o=this;function l(u,h,p){const m=gr(h);if(!m)throw new Error("header name must be a non-empty string");const v=q.findKey(o,m);(!v||o[v]===void 0||p===!0||p===void 0&&o[v]!==!1)&&(bg(u,h),o[v||h]=No(u))}const c=(u,h)=>q.forEach(u,(p,m)=>l(p,m,h));if(q.isPlainObject(e)||e instanceof this.constructor)c(e,n);else if(q.isString(e)&&(e=e.trim())&&!nj(e))c(Jb(e),n);else if(q.isObject(e)&&q.isIterable(e)){let u={},h,p;for(const m of e){if(!q.isArray(m))throw TypeError("Object iterator must return a key-value pair");u[p=m[0]]=(h=u[p])?q.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}c(u,n)}else e!=null&&l(n,e,i);return this}get(e,n){if(e=gr(e),e){const i=q.findKey(this,e);if(i){const o=this[i];if(!n)return o;if(n===!0)return tj(o);if(q.isFunction(n))return n.call(this,o,i);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=gr(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Xc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let o=!1;function l(c){if(c=gr(c),c){const u=q.findKey(i,c);u&&(!n||Xc(i,i[u],u,n))&&(delete i[u],o=!0)}}return q.isArray(e)?e.forEach(l):l(e),o}clear(e){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const l=n[i];(!e||Xc(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const n=this,i={};return q.forEach(this,(o,l)=>{const c=q.findKey(i,l);if(c){n[c]=No(o),delete n[l];return}const u=e?sj(l):String(l).trim();u!==l&&delete n[l],n[u]=No(o),i[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return q.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=e&&q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[up]=this[up]={accessors:{}}).accessors,o=this.prototype;function l(c){const u=gr(c);i[u]||(ij(o,c),i[u]=!0)}return q.isArray(e)?e.forEach(l):l(e),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(It.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});q.freezeMethods(It);function Gc(t,e){const n=this||Yr,i=e||n,o=It.from(i.headers);let l=i.data;return q.forEach(t,function(u){l=u.call(n,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function jg(t){return!!(t&&t.__CANCEL__)}let Qr=class extends Ne{constructor(e,n,i){super(e??"canceled",Ne.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function wg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ne("Request failed with status code "+n.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function rj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function aj(t,e){t=t||10;const n=new Array(t),i=new Array(t);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),m=i[l];c||(c=p),n[o]=h,i[o]=p;let v=l,b=0;for(;v!==o;)b+=n[v++],v=v%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),p-c<e)return;const w=m&&p-m;return w?Math.round(b*1e3/w):void 0}}function oj(t,e){let n=0,i=1e3/e,o,l;const c=(p,m=Date.now())=>{n=m,o=null,l&&(clearTimeout(l),l=null),t(...p)};return[(...p)=>{const m=Date.now(),v=m-n;v>=i?c(p,m):(o=p,l||(l=setTimeout(()=>{l=null,c(o)},i-v)))},()=>o&&c(o)]}const Ao=(t,e,n=3)=>{let i=0;const o=aj(50,250);return oj(l=>{const c=l.loaded,u=l.lengthComputable?l.total:void 0,h=c-i,p=o(h),m=c<=u;i=c;const v={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&m?(u-c)/p:void 0,event:l,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(v)},n)},hp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},fp=t=>(...e)=>q.asap(()=>t(...e)),lj=Nt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Nt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,cj=Nt.hasStandardBrowserEnv?{write(t,e,n,i,o,l,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];q.isNumber(n)&&u.push(`expires=${new Date(n).toUTCString()}`),q.isString(i)&&u.push(`path=${i}`),q.isString(o)&&u.push(`domain=${o}`),l===!0&&u.push("secure"),q.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function dj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function uj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ng(t,e,n){let i=!dj(e);return t&&(i||n==!1)?uj(t,e):e}const pp=t=>t instanceof It?{...t}:t;function Ys(t,e){e=e||{};const n={};function i(p,m,v,b){return q.isPlainObject(p)&&q.isPlainObject(m)?q.merge.call({caseless:b},p,m):q.isPlainObject(m)?q.merge({},m):q.isArray(m)?m.slice():m}function o(p,m,v,b){if(q.isUndefined(m)){if(!q.isUndefined(p))return i(void 0,p,v,b)}else return i(p,m,v,b)}function l(p,m){if(!q.isUndefined(m))return i(void 0,m)}function c(p,m){if(q.isUndefined(m)){if(!q.isUndefined(p))return i(void 0,p)}else return i(void 0,m)}function u(p,m,v){if(v in e)return i(p,m);if(v in t)return i(void 0,p)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,m,v)=>o(pp(p),pp(m),v,!0)};return q.forEach(Object.keys({...t,...e}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const v=q.hasOwnProp(h,m)?h[m]:o,b=v(t[m],e[m],m);q.isUndefined(b)&&v!==u||(n[m]=b)}),n}const _g=t=>{const e=Ys({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:u}=e;if(e.headers=c=It.from(c),e.url=vg(Ng(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),q.isFormData(n)){if(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const h=n.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([m,v])=>{p.includes(m.toLowerCase())&&c.set(m,v)})}}if(Nt.hasStandardBrowserEnv&&(i&&q.isFunction(i)&&(i=i(e)),i||i!==!1&&lj(e.url))){const h=o&&l&&cj.read(l);h&&c.set(o,h)}return e},hj=typeof XMLHttpRequest<"u",fj=hj&&function(t){return new Promise(function(n,i){const o=_g(t);let l=o.data;const c=It.from(o.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=o,m,v,b,w,j;function N(){w&&w(),j&&j(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(){if(!y)return;const A=It.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),R={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:A,config:t,request:y};wg(function(M){n(M),N()},function(M){i(M),N()},R),y=null}"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){y&&(i(new Ne("Request aborted",Ne.ECONNABORTED,t,y)),y=null)},y.onerror=function(z){const R=z&&z.message?z.message:"Network Error",I=new Ne(R,Ne.ERR_NETWORK,t,y);I.event=z||null,i(I),y=null},y.ontimeout=function(){let z=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const R=o.transitional||Id;o.timeoutErrorMessage&&(z=o.timeoutErrorMessage),i(new Ne(z,R.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,t,y)),y=null},l===void 0&&c.setContentType(null),"setRequestHeader"in y&&q.forEach(c.toJSON(),function(z,R){y.setRequestHeader(R,z)}),q.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),u&&u!=="json"&&(y.responseType=o.responseType),p&&([b,j]=Ao(p,!0),y.addEventListener("progress",b)),h&&y.upload&&([v,w]=Ao(h),y.upload.addEventListener("progress",v),y.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(m=A=>{y&&(i(!A||A.type?new Qr(null,t,y):A),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const S=rj(o.url);if(S&&Nt.protocols.indexOf(S)===-1){i(new Ne("Unsupported protocol "+S+":",Ne.ERR_BAD_REQUEST,t));return}y.send(l||null)})},pj=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,o;const l=function(p){if(!o){o=!0,u();const m=p instanceof Error?p:this.reason;i.abort(m instanceof Ne?m:new Qr(m instanceof Error?m.message:m))}};let c=e&&setTimeout(()=>{c=null,l(new Ne(`timeout of ${e}ms exceeded`,Ne.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),t=null)};t.forEach(p=>p.addEventListener("abort",l));const{signal:h}=i;return h.unsubscribe=()=>q.asap(u),h}},mj=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,o;for(;i<n;)o=i+e,yield t.slice(i,o),i=o},gj=async function*(t,e){for await(const n of xj(t))yield*mj(n,e)},xj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},mp=(t,e,n,i)=>{const o=gj(t,e);let l=0,c,u=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:p,value:m}=await o.next();if(p){u(),h.close();return}let v=m.byteLength;if(n){let b=l+=v;n(b)}h.enqueue(new Uint8Array(m))}catch(p){throw u(p),p}},cancel(h){return u(h),o.return()}},{highWaterMark:2})},gp=64*1024,{isFunction:ao}=q,vj=(({Request:t,Response:e})=>({Request:t,Response:e}))(q.global),{ReadableStream:xp,TextEncoder:vp}=q.global,yp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},yj=t=>{t=q.merge.call({skipUndefined:!0},vj,t);const{fetch:e,Request:n,Response:i}=t,o=e?ao(e):typeof fetch=="function",l=ao(n),c=ao(i);if(!o)return!1;const u=o&&ao(xp),h=o&&(typeof vp=="function"?(j=>N=>j.encode(N))(new vp):async j=>new Uint8Array(await new n(j).arrayBuffer())),p=l&&u&&yp(()=>{let j=!1;const N=new xp,y=new n(Nt.origin,{body:N,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return N.cancel(),j&&!y}),m=c&&u&&yp(()=>q.isReadableStream(new i("").body)),v={stream:m&&(j=>j.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!v[j]&&(v[j]=(N,y)=>{let _=N&&N[j];if(_)return _.call(N);throw new Ne(`Response type '${j}' is not supported`,Ne.ERR_NOT_SUPPORT,y)})});const b=async j=>{if(j==null)return 0;if(q.isBlob(j))return j.size;if(q.isSpecCompliantForm(j))return(await new n(Nt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(q.isArrayBufferView(j)||q.isArrayBuffer(j))return j.byteLength;if(q.isURLSearchParams(j)&&(j=j+""),q.isString(j))return(await h(j)).byteLength},w=async(j,N)=>{const y=q.toFiniteNumber(j.getContentLength());return y??b(N)};return async j=>{let{url:N,method:y,data:_,signal:S,cancelToken:A,timeout:z,onDownloadProgress:R,onUploadProgress:I,responseType:M,headers:C,withCredentials:O="same-origin",fetchOptions:W}=_g(j),X=e||fetch;M=M?(M+"").toLowerCase():"text";let F=pj([S,A&&A.toAbortSignal()],z),te=null;const V=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let ae;try{if(I&&p&&y!=="get"&&y!=="head"&&(ae=await w(C,_))!==0){let D=new n(N,{method:"POST",body:_,duplex:"half"}),Y;if(q.isFormData(_)&&(Y=D.headers.get("content-type"))&&C.setContentType(Y),D.body){const[fe,ve]=hp(ae,Ao(fp(I)));_=mp(D.body,gp,fe,ve)}}q.isString(O)||(O=O?"include":"omit");const U=l&&"credentials"in n.prototype,ie={...W,signal:F,method:y.toUpperCase(),headers:C.normalize().toJSON(),body:_,duplex:"half",credentials:U?O:void 0};te=l&&new n(N,ie);let K=await(l?X(te,W):X(N,ie));const re=m&&(M==="stream"||M==="response");if(m&&(R||re&&V)){const D={};["status","statusText","headers"].forEach(be=>{D[be]=K[be]});const Y=q.toFiniteNumber(K.headers.get("content-length")),[fe,ve]=R&&hp(Y,Ao(fp(R),!0))||[];K=new i(mp(K.body,gp,fe,()=>{ve&&ve(),V&&V()}),D)}M=M||"text";let G=await v[q.findKey(v,M)||"text"](K,j);return!re&&V&&V(),await new Promise((D,Y)=>{wg(D,Y,{data:G,headers:It.from(K.headers),status:K.status,statusText:K.statusText,config:j,request:te})})}catch(U){throw V&&V(),U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)?Object.assign(new Ne("Network Error",Ne.ERR_NETWORK,j,te,U&&U.response),{cause:U.cause||U}):Ne.from(U,U&&U.code,j,te,U&&U.response)}}},bj=new Map,kg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:o}=e,l=[i,o,n];let c=l.length,u=c,h,p,m=bj;for(;u--;)h=l[u],p=m.get(h),p===void 0&&m.set(h,p=u?new Map:yj(e)),m=p;return p};kg();const Bd={http:Lb,xhr:fj,fetch:{get:kg}};q.forEach(Bd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const bp=t=>`- ${t}`,jj=t=>q.isFunction(t)||t===null||t===!1;function wj(t,e){t=q.isArray(t)?t:[t];const{length:n}=t;let i,o;const l={};for(let c=0;c<n;c++){i=t[c];let u;if(o=i,!jj(i)&&(o=Bd[(u=String(i)).toLowerCase()],o===void 0))throw new Ne(`Unknown adapter '${u}'`);if(o&&(q.isFunction(o)||(o=o.get(e))))break;l[u||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=n?c.length>1?`since :
`+c.map(bp).join(`
`):" "+bp(c[0]):"as no adapter specified";throw new Ne("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o}const Sg={getAdapter:wj,adapters:Bd};function Jc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Qr(null,t)}function jp(t){return Jc(t),t.headers=It.from(t.headers),t.data=Gc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Sg.getAdapter(t.adapter||Yr.adapter,t)(t).then(function(i){return Jc(t),i.data=Gc.call(t,t.transformResponse,i),i.headers=It.from(i.headers),i},function(i){return jg(i)||(Jc(t),i&&i.response&&(i.response.data=Gc.call(t,t.transformResponse,i.response),i.response.headers=It.from(i.response.headers))),Promise.reject(i)})}const Cg="1.15.0",Qo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Qo[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const wp={};Qo.transitional=function(e,n,i){function o(l,c){return"[Axios v"+Cg+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,u)=>{if(e===!1)throw new Ne(o(c," has been removed"+(n?" in "+n:"")),Ne.ERR_DEPRECATED);return n&&!wp[c]&&(wp[c]=!0,console.warn(o(c," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(l,c,u):!0}};Qo.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Nj(t,e,n){if(typeof t!="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let o=i.length;for(;o-- >0;){const l=i[o],c=e[l];if(c){const u=t[l],h=u===void 0||c(u,l,t);if(h!==!0)throw new Ne("option "+l+" must be "+h,Ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ne("Unknown option "+l,Ne.ERR_BAD_OPTION)}}const _o={assertOptions:Nj,validators:Qo},Jt=_o.validators;let Hs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new dp,response:new dp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=(()=>{if(!o.stack)return"";const c=o.stack.indexOf(`
`);return c===-1?"":o.stack.slice(c+1)})();try{if(!i.stack)i.stack=l;else if(l){const c=l.indexOf(`
`),u=c===-1?-1:l.indexOf(`
`,c+1),h=u===-1?"":l.slice(u+1);String(i.stack).endsWith(h)||(i.stack+=`
`+l)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ys(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:l}=n;i!==void 0&&_o.assertOptions(i,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean),legacyInterceptorReqResOrdering:Jt.transitional(Jt.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:_o.assertOptions(o,{encode:Jt.function,serialize:Jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),_o.assertOptions(n,{baseUrl:Jt.spelling("baseURL"),withXsrfToken:Jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=l&&q.merge(l.common,l[n.method]);l&&q.forEach(["delete","get","head","post","put","patch","common"],j=>{delete l[j]}),n.headers=It.concat(c,l);const u=[];let h=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(n)===!1)return;h=h&&N.synchronous;const y=n.transitional||Id;y&&y.legacyInterceptorReqResOrdering?u.unshift(N.fulfilled,N.rejected):u.push(N.fulfilled,N.rejected)});const p=[];this.interceptors.response.forEach(function(N){p.push(N.fulfilled,N.rejected)});let m,v=0,b;if(!h){const j=[jp.bind(this),void 0];for(j.unshift(...u),j.push(...p),b=j.length,m=Promise.resolve(n);v<b;)m=m.then(j[v++],j[v++]);return m}b=u.length;let w=n;for(;v<b;){const j=u[v++],N=u[v++];try{w=j(w)}catch(y){N.call(this,y);break}}try{m=jp.call(this,w)}catch(j){return Promise.reject(j)}for(v=0,b=p.length;v<b;)m=m.then(p[v++],p[v++]);return m}getUri(e){e=Ys(this.defaults,e);const n=Ng(e.baseURL,e.url,e.allowAbsoluteUrls);return vg(n,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){Hs.prototype[e]=function(n,i){return this.request(Ys(i||{},{method:e,url:n,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function n(i){return function(l,c,u){return this.request(Ys(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Hs.prototype[e]=n(),Hs.prototype[e+"Form"]=n(!0)});let _j=class Eg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(u=>{i.subscribe(u),l=u}).then(o);return c.cancel=function(){i.unsubscribe(l)},c},e(function(l,c,u){i.reason||(i.reason=new Qr(l,c,u),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Eg(function(o){e=o}),cancel:e}}};function kj(t){return function(n){return t.apply(null,n)}}function Sj(t){return q.isObject(t)&&t.isAxiosError===!0}const bd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(bd).forEach(([t,e])=>{bd[e]=t});function Rg(t){const e=new Hs(t),n=og(Hs.prototype.request,e);return q.extend(n,Hs.prototype,e,{allOwnKeys:!0}),q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Rg(Ys(t,o))},n}const tt=Rg(Yr);tt.Axios=Hs;tt.CanceledError=Qr;tt.CancelToken=_j;tt.isCancel=jg;tt.VERSION=Cg;tt.toFormData=Yo;tt.AxiosError=Ne;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=kj;tt.isAxiosError=Sj;tt.mergeConfig=Ys;tt.AxiosHeaders=It;tt.formToJSON=t=>yg(q.isHTMLForm(t)?new FormData(t):t);tt.getAdapter=Sg.getAdapter;tt.HttpStatusCode=bd;tt.default=tt;const{Axios:Zk,AxiosError:eS,CanceledError:tS,isCancel:nS,CancelToken:sS,VERSION:iS,all:rS,Cancel:aS,isAxiosError:oS,spread:lS,toFormData:cS,AxiosHeaders:dS,HttpStatusCode:uS,formToJSON:hS,getAdapter:fS,mergeConfig:pS}=tt,oe=tt.create({baseURL:"/api",timeout:3e4});oe.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Is={list:(t=1,e=100,n)=>{let i=`/events?page=${t}&page_size=${e}`;return n&&(n.levels&&n.levels.length>0&&n.levels.forEach(o=>i+=`&levels=${o}`),n.event_ids&&n.event_ids.length>0&&n.event_ids.forEach(o=>i+=`&event_ids=${o}`),n.log_names&&n.log_names.length>0&&n.log_names.forEach(o=>i+=`&log_names=${encodeURIComponent(o)}`),n.sources&&n.sources.length>0&&n.sources.forEach(o=>i+=`&sources=${encodeURIComponent(o)}`),n.users&&n.users.length>0&&n.users.forEach(o=>i+=`&users=${encodeURIComponent(o)}`),n.computers&&n.computers.length>0&&n.computers.forEach(o=>i+=`&computers=${encodeURIComponent(o)}`),n.start_time&&(i+=`&start_time=${encodeURIComponent(n.start_time)}`),n.end_time&&(i+=`&end_time=${encodeURIComponent(n.end_time)}`),n.sort_by&&(i+=`&sort_by=${n.sort_by}`),n.sort_order&&(i+=`&sort_order=${n.sort_order}`)),oe.get(i)},get:t=>oe.get(`/events/${t}`),search:t=>oe.post("/events/search",t),export:t=>oe.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},_n={list:(t=1,e=100,n)=>oe.get(`/alerts?page=${t}&page_size=${e}${n?`&severity=${n}`:""}`),get:t=>oe.get(`/alerts/${t}`),stats:()=>oe.get("/alerts/stats"),trend:(t=7)=>oe.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>oe.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>oe.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>oe.delete(`/alerts/${t}`),batchAction:(t,e,n)=>oe.post("/alerts/batch",{ids:t,action:e,notes:n})},Cj={collect:t=>oe.post("/collect",t),getStatus:()=>oe.get("/collect/status")},Ej={importLogs:t=>oe.post("/import/logs",{files:t}),getStatus:()=>oe.get("/import/status")},Rj={getStats:()=>oe.get("/live/stats"),streamEvents:(t,e,n)=>{const i=new EventSource("/api/live/events");return i.onmessage=o=>{try{const l=JSON.parse(o.data);l.type==="event"?t(l.data):l.type==="stats"&&e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},i.onerror=o=>{console.error("SSE error:",o),n==null||n(o)},i}},Fs={health:()=>oe.get("/health"),getInfo:()=>oe.get("/system/info"),getMetrics:()=>oe.get("/system/metrics"),getProcesses:(t=100)=>oe.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>oe.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>oe.get("/system/env"),getLoadedDLLs:(t=100)=>oe.get(`/system/dlls?limit=${t}`),getDrivers:()=>oe.get("/system/drivers")},Ln={list:()=>oe.get("/rules"),get:t=>oe.get(`/rules/${t}`),toggle:(t,e)=>oe.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>oe.post("/rules/save",t),validate:(t,e)=>oe.post("/rules/validate",{rule:t,content:e}),import:t=>oe.post("/rules/import",{rules:t}),export:(t="json")=>oe.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>oe.get("/rules/templates"),getTemplate:t=>oe.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>oe.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},xr={list:()=>oe.get("/reports"),generate:t=>oe.post("/reports",t),get:t=>oe.get(`/reports/${t}`),export:t=>oe.get(`/reports/export?format=${t}`,{responseType:"blob"})},Ms={calculateHash:t=>oe.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>oe.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>oe.get(`/forensics/signature?path=${t}`),isSigned:t=>oe.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>oe.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>oe.get("/forensics/evidence"),getEvidence:t=>oe.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>oe.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>oe.get("/forensics/chain-of-custody"),memoryDump:t=>oe.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},jd={get:(t=200,e,n)=>{let i=`/timeline?limit=${t}`;return e&&(i+=`&start_time=${e}`),n&&(i+=`&end_time=${n}`),oe.get(i)},deleteAlert:t=>oe.delete(`/timeline/alerts/${t}`)},Pg={getCollectionStats:()=>oe.get("/dashboard/collection-stats"),getLogNames:()=>oe.get("/dashboard/log-names")},Ag={run:(t,e)=>oe.post(`/analyze/${t}`,e||{}),list:()=>oe.get("/analyzers"),info:t=>oe.get(`/analyzers/${t}`)},Zc={get:()=>oe.get("/settings"),save:t=>oe.post("/settings",t),reset:()=>oe.post("/settings/reset")},Pj={detect:()=>oe.get("/persistence/detect"),detectStream:(t,e)=>{const n=new EventSource("/api/persistence/detect/stream");return n.onmessage=i=>{try{const o=JSON.parse(i.data);t(o)}catch(o){console.error("Failed to parse SSE data:",o)}},n.onerror=i=>{console.error("SSE error:",i),e==null||e(i)},n},listCategories:()=>oe.get("/persistence/categories"),listTechniques:()=>oe.get("/persistence/techniques")},Aj={analyze:t=>oe.post("/correlation/analyze",t||{})},Tj={analyze:t=>oe.post("/multi/analyze",t||{}),lateral:()=>oe.get("/multi/lateral")},Dj={execute:t=>oe.post("/query/execute",t)},oo={list:()=>oe.get("/suppress"),create:t=>oe.post("/suppress",t),update:(t,e)=>oe.put(`/suppress/${t}`,e),delete:t=>oe.delete(`/suppress/${t}`),toggle:(t,e)=>oe.post(`/suppress/${t}/toggle`,{enabled:e})},Np={analyze:t=>oe.post("/ueba/analyze",t||{}),profiles:()=>oe.get("/ueba/profiles")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Kr(t){return t+.5|0}const hs=(t,e,n)=>Math.max(Math.min(t,n),e);function Nr(t){return hs(Kr(t*2.55),0,255)}function gs(t){return hs(Kr(t*255),0,255)}function Fn(t){return hs(Kr(t/2.55)/100,0,1)}function _p(t){return hs(Kr(t*100),0,100)}const Zt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},wd=[..."0123456789ABCDEF"],Mj=t=>wd[t&15],Lj=t=>wd[(t&240)>>4]+wd[t&15],lo=t=>(t&240)>>4===(t&15),Oj=t=>lo(t.r)&&lo(t.g)&&lo(t.b)&&lo(t.a);function zj(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Zt[t[1]]*17,g:255&Zt[t[2]]*17,b:255&Zt[t[3]]*17,a:e===5?Zt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Zt[t[1]]<<4|Zt[t[2]],g:Zt[t[3]]<<4|Zt[t[4]],b:Zt[t[5]]<<4|Zt[t[6]],a:e===9?Zt[t[7]]<<4|Zt[t[8]]:255})),n}const Ij=(t,e)=>t<255?e(t):"";function Fj(t){var e=Oj(t)?Mj:Lj;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Ij(t.a,e):void 0}const Bj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Tg(t,e,n){const i=e*Math.min(n,1-n),o=(l,c=(l+t/30)%12)=>n-i*Math.max(Math.min(c-3,9-c,1),-1);return[o(0),o(8),o(4)]}function $j(t,e,n){const i=(o,l=(o+t/60)%6)=>n-n*e*Math.max(Math.min(l,4-l,1),0);return[i(5),i(3),i(1)]}function Uj(t,e,n){const i=Tg(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)i[o]*=1-e-n,i[o]+=e;return i}function Wj(t,e,n,i,o){return t===o?(e-n)/i+(e<n?6:0):e===o?(n-t)/i+2:(t-e)/i+4}function $d(t){const n=t.r/255,i=t.g/255,o=t.b/255,l=Math.max(n,i,o),c=Math.min(n,i,o),u=(l+c)/2;let h,p,m;return l!==c&&(m=l-c,p=u>.5?m/(2-l-c):m/(l+c),h=Wj(n,i,o,m,l),h=h*60+.5),[h|0,p||0,u]}function Ud(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(gs)}function Wd(t,e,n){return Ud(Tg,t,e,n)}function Hj(t,e,n){return Ud(Uj,t,e,n)}function Vj(t,e,n){return Ud($j,t,e,n)}function Dg(t){return(t%360+360)%360}function qj(t){const e=Bj.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?Nr(+e[5]):gs(+e[5]));const o=Dg(+e[2]),l=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?i=Hj(o,l,c):e[1]==="hsv"?i=Vj(o,l,c):i=Wd(o,l,c),{r:i[0],g:i[1],b:i[2],a:n}}function Yj(t,e){var n=$d(t);n[0]=Dg(n[0]+e),n=Wd(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Qj(t){if(!t)return;const e=$d(t),n=e[0],i=_p(e[1]),o=_p(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${o}%, ${Fn(t.a)})`:`hsl(${n}, ${i}%, ${o}%)`}const kp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Sp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Kj(){const t={},e=Object.keys(Sp),n=Object.keys(kp);let i,o,l,c,u;for(i=0;i<e.length;i++){for(c=u=e[i],o=0;o<n.length;o++)l=n[o],u=u.replace(l,kp[l]);l=parseInt(Sp[c],16),t[u]=[l>>16&255,l>>8&255,l&255]}return t}let co;function Xj(t){co||(co=Kj(),co.transparent=[0,0,0,0]);const e=co[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Gj=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Jj(t){const e=Gj.exec(t);let n=255,i,o,l;if(e){if(e[7]!==i){const c=+e[7];n=e[8]?Nr(c):hs(c*255,0,255)}return i=+e[1],o=+e[3],l=+e[5],i=255&(e[2]?Nr(i):hs(i,0,255)),o=255&(e[4]?Nr(o):hs(o,0,255)),l=255&(e[6]?Nr(l):hs(l,0,255)),{r:i,g:o,b:l,a:n}}}function Zj(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Fn(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const ed=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Ni=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function e1(t,e,n){const i=Ni(Fn(t.r)),o=Ni(Fn(t.g)),l=Ni(Fn(t.b));return{r:gs(ed(i+n*(Ni(Fn(e.r))-i))),g:gs(ed(o+n*(Ni(Fn(e.g))-o))),b:gs(ed(l+n*(Ni(Fn(e.b))-l))),a:t.a+n*(e.a-t.a)}}function uo(t,e,n){if(t){let i=$d(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Wd(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Mg(t,e){return t&&Object.assign(e||{},t)}function Cp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=gs(t[3]))):(e=Mg(t,{r:0,g:0,b:0,a:1}),e.a=gs(e.a)),e}function t1(t){return t.charAt(0)==="r"?Jj(t):qj(t)}class Lr{constructor(e){if(e instanceof Lr)return e;const n=typeof e;let i;n==="object"?i=Cp(e):n==="string"&&(i=zj(e)||Xj(e)||t1(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Mg(this._rgb);return e&&(e.a=Fn(e.a)),e}set rgb(e){this._rgb=Cp(e)}rgbString(){return this._valid?Zj(this._rgb):void 0}hexString(){return this._valid?Fj(this._rgb):void 0}hslString(){return this._valid?Qj(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,o=e.rgb;let l;const c=n===l?.5:n,u=2*c-1,h=i.a-o.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;l=1-p,i.r=255&p*i.r+l*o.r+.5,i.g=255&p*i.g+l*o.g+.5,i.b=255&p*i.b+l*o.b+.5,i.a=c*i.a+(1-c)*o.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=e1(this._rgb,e._rgb,n)),this}clone(){return new Lr(this.rgb)}alpha(e){return this._rgb.a=gs(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Kr(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return uo(this._rgb,2,e),this}darken(e){return uo(this._rgb,2,-e),this}saturate(e){return uo(this._rgb,1,e),this}desaturate(e){return uo(this._rgb,1,-e),this}rotate(e){return Yj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function On(){}const n1=(()=>{let t=0;return()=>t++})();function Me(t){return t==null}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ee(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function St(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function bn(t,e){return St(t)?t:e}function ke(t,e){return typeof t>"u"?e:t}const s1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Lg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function We(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function ze(t,e,n,i){let o,l,c;if(it(t))for(l=t.length,o=0;o<l;o++)e.call(n,t[o],o);else if(Ee(t))for(c=Object.keys(t),l=c.length,o=0;o<l;o++)e.call(n,t[c[o]],c[o])}function To(t,e){let n,i,o,l;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(o=t[n],l=e[n],o.datasetIndex!==l.datasetIndex||o.index!==l.index)return!1;return!0}function Do(t){if(it(t))return t.map(Do);if(Ee(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let o=0;for(;o<i;++o)e[n[o]]=Do(t[n[o]]);return e}return t}function Og(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function i1(t,e,n,i){if(!Og(t))return;const o=e[t],l=n[t];Ee(o)&&Ee(l)?Or(o,l,i):e[t]=Do(l)}function Or(t,e,n){const i=it(e)?e:[e],o=i.length;if(!Ee(t))return t;n=n||{};const l=n.merger||i1;let c;for(let u=0;u<o;++u){if(c=i[u],!Ee(c))continue;const h=Object.keys(c);for(let p=0,m=h.length;p<m;++p)l(h[p],t,c,n)}return t}function Er(t,e){return Or(t,e,{merger:r1})}function r1(t,e,n){if(!Og(t))return;const i=e[t],o=n[t];Ee(i)&&Ee(o)?Er(i,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Do(o))}const Ep={"":t=>t,x:t=>t.x,y:t=>t.y};function a1(t){const e=t.split("."),n=[];let i="";for(const o of e)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function o1(t){const e=a1(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Qs(t,e){return(Ep[e]||(Ep[e]=o1(e)))(t)}function Hd(t){return t.charAt(0).toUpperCase()+t.slice(1)}const zr=t=>typeof t<"u",xs=t=>typeof t=="function",Rp=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function l1(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Ie=Math.PI,Ye=2*Ie,c1=Ye+Ie,Mo=Number.POSITIVE_INFINITY,d1=Ie/180,lt=Ie/2,Ls=Ie/4,Pp=Ie*2/3,zg=Math.log10,kn=Math.sign;function Rr(t,e,n){return Math.abs(t-e)<n}function Ap(t){const e=Math.round(t);t=Rr(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(zg(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function u1(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((o,l)=>o-l).pop(),e}function h1(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Ir(t){return!h1(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function f1(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function p1(t,e,n){let i,o,l;for(i=0,o=t.length;i<o;i++)l=t[i][n],isNaN(l)||(e.min=Math.min(e.min,l),e.max=Math.max(e.max,l))}function Bn(t){return t*(Ie/180)}function m1(t){return t*(180/Ie)}function Tp(t){if(!St(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Ig(t,e){const n=e.x-t.x,i=e.y-t.y,o=Math.sqrt(n*n+i*i);let l=Math.atan2(i,n);return l<-.5*Ie&&(l+=Ye),{angle:l,distance:o}}function Nd(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function g1(t,e){return(t-e+c1)%Ye-Ie}function Vt(t){return(t%Ye+Ye)%Ye}function Fr(t,e,n,i){const o=Vt(t),l=Vt(e),c=Vt(n),u=Vt(l-o),h=Vt(c-o),p=Vt(o-l),m=Vt(o-c);return o===l||o===c||i&&l===c||u>h&&p<m}function _t(t,e,n){return Math.max(e,Math.min(n,t))}function x1(t){return _t(t,-32768,32767)}function $n(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function Vd(t,e,n){n=n||(c=>t[c]<e);let i=t.length-1,o=0,l;for(;i-o>1;)l=o+i>>1,n(l)?o=l:i=l;return{lo:o,hi:i}}const Ws=(t,e,n,i)=>Vd(t,n,i?o=>{const l=t[o][e];return l<n||l===n&&t[o+1][e]===n}:o=>t[o][e]<n),v1=(t,e,n)=>Vd(t,n,i=>t[i][e]>=n);function y1(t,e,n){let i=0,o=t.length;for(;i<o&&t[i]<e;)i++;for(;o>i&&t[o-1]>n;)o--;return i>0||o<t.length?t.slice(i,o):t}const Fg=["push","pop","shift","splice","unshift"];function b1(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Fg.forEach(n=>{const i="_onData"+Hd(n),o=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...l){const c=o.apply(this,l);return t._chartjs.listeners.forEach(u=>{typeof u[i]=="function"&&u[i](...l)}),c}})})}function Dp(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),!(i.length>0)&&(Fg.forEach(l=>{delete t[l]}),delete t._chartjs)}function Bg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const $g=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function Ug(t,e){let n=[],i=!1;return function(...o){n=o,i||(i=!0,$g.call(window,()=>{i=!1,t.apply(e,n)}))}}function j1(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const qd=t=>t==="start"?"left":t==="end"?"right":"center",wt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,w1=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function N1(t,e,n){const i=e.length;let o=0,l=i;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,m=c.axis,{min:v,max:b,minDefined:w,maxDefined:j}=c.getUserBounds();if(w){if(o=Math.min(Ws(h,m,v).lo,n?i:Ws(e,m,c.getPixelForValue(v)).lo),p){const N=h.slice(0,o+1).reverse().findIndex(y=>!Me(y[u.axis]));o-=Math.max(0,N)}o=_t(o,0,i-1)}if(j){let N=Math.max(Ws(h,c.axis,b,!0).hi+1,n?0:Ws(e,m,c.getPixelForValue(b),!0).hi+1);if(p){const y=h.slice(N-1).findIndex(_=>!Me(_[u.axis]));N+=Math.max(0,y)}l=_t(N,o,i)-o}else l=i-o}return{start:o,count:l}}function _1(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=o,!0;const l=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,o),l}const ho=t=>t===0||t===1,Mp=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ye/n)),Lp=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ye/n)+1,Pr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*lt)+1,easeOutSine:t=>Math.sin(t*lt),easeInOutSine:t=>-.5*(Math.cos(Ie*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>ho(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ho(t)?t:Mp(t,.075,.3),easeOutElastic:t=>ho(t)?t:Lp(t,.075,.3),easeInOutElastic(t){return ho(t)?t:t<.5?.5*Mp(t*2,.1125,.45):.5+.5*Lp(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Pr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Pr.easeInBounce(t*2)*.5:Pr.easeOutBounce(t*2-1)*.5+.5};function Yd(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Op(t){return Yd(t)?t:new Lr(t)}function td(t){return Yd(t)?t:new Lr(t).saturate(.5).darken(.1).hexString()}const k1=["x","y","borderWidth","radius","tension"],S1=["color","borderColor","backgroundColor"];function C1(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:S1},numbers:{type:"number",properties:k1}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function E1(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zp=new Map;function R1(t,e){e=e||{};const n=t+JSON.stringify(e);let i=zp.get(n);return i||(i=new Intl.NumberFormat(t,e),zp.set(n,i)),i}function Qd(t,e,n){return R1(e,n).format(t)}const P1={values(t){return it(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let o,l=t;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(o="scientific"),l=A1(t,n)}const c=zg(Math.abs(l)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:o,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),Qd(t,i,h)}};function A1(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Wg={formatters:P1};function T1(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Wg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ks=Object.create(null),_d=Object.create(null);function Ar(t,e){if(!e)return t;const n=e.split(".");for(let i=0,o=n.length;i<o;++i){const l=n[i];t=t[l]||(t[l]=Object.create(null))}return t}function nd(t,e,n){return typeof e=="string"?Or(Ar(t,e),n):Or(Ar(t,""),e)}class D1{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>td(o.backgroundColor),this.hoverBorderColor=(i,o)=>td(o.borderColor),this.hoverColor=(i,o)=>td(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return nd(this,e,n)}get(e){return Ar(this,e)}describe(e,n){return nd(_d,e,n)}override(e,n){return nd(Ks,e,n)}route(e,n,i,o){const l=Ar(this,e),c=Ar(this,i),u="_"+n;Object.defineProperties(l,{[u]:{value:l[n],writable:!0},[n]:{enumerable:!0,get(){const h=this[u],p=c[o];return Ee(h)?Object.assign({},p,h):ke(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(n=>n(this))}}var et=new D1({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[C1,E1,T1]);function M1(t){return!t||Me(t.size)||Me(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ip(t,e,n,i,o){let l=e[o];return l||(l=e[o]=t.measureText(o).width,n.push(o)),l>i&&(i=l),i}function Os(t,e,n){const i=t.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((e-o)*i)/i+o}function Fp(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function kd(t,e,n,i){Hg(t,e,n,i,null)}function Hg(t,e,n,i,o){let l,c,u,h,p,m,v,b;const w=e.pointStyle,j=e.rotation,N=e.radius;let y=(j||0)*d1;if(w&&typeof w=="object"&&(l=w.toString(),l==="[object HTMLImageElement]"||l==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(y),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(N)||N<=0)){switch(t.beginPath(),w){default:o?t.ellipse(n,i,o/2,N,0,0,Ye):t.arc(n,i,N,0,Ye),t.closePath();break;case"triangle":m=o?o/2:N,t.moveTo(n+Math.sin(y)*m,i-Math.cos(y)*N),y+=Pp,t.lineTo(n+Math.sin(y)*m,i-Math.cos(y)*N),y+=Pp,t.lineTo(n+Math.sin(y)*m,i-Math.cos(y)*N),t.closePath();break;case"rectRounded":p=N*.516,h=N-p,c=Math.cos(y+Ls)*h,v=Math.cos(y+Ls)*(o?o/2-p:h),u=Math.sin(y+Ls)*h,b=Math.sin(y+Ls)*(o?o/2-p:h),t.arc(n-v,i-u,p,y-Ie,y-lt),t.arc(n+b,i-c,p,y-lt,y),t.arc(n+v,i+u,p,y,y+lt),t.arc(n-b,i+c,p,y+lt,y+Ie),t.closePath();break;case"rect":if(!j){h=Math.SQRT1_2*N,m=o?o/2:h,t.rect(n-m,i-h,2*m,2*h);break}y+=Ls;case"rectRot":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+b,i-c),t.lineTo(n+v,i+u),t.lineTo(n-b,i+c),t.closePath();break;case"crossRot":y+=Ls;case"cross":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c);break;case"star":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c),y+=Ls,v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c);break;case"line":c=o?o/2:Math.cos(y)*N,u=Math.sin(y)*N,t.moveTo(n-c,i-u),t.lineTo(n+c,i+u);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(y)*(o?o/2:N),i+Math.sin(y)*N);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Br(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ko(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Xo(t){t.restore()}function L1(t,e,n,i,o){if(!e)return t.lineTo(n.x,n.y);if(o==="middle"){const l=(e.x+n.x)/2;t.lineTo(l,e.y),t.lineTo(l,n.y)}else o==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function O1(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function z1(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Me(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function I1(t,e,n,i,o){if(o.strikethrough||o.underline){const l=t.measureText(i),c=e-l.actualBoundingBoxLeft,u=e+l.actualBoundingBoxRight,h=n-l.actualBoundingBoxAscent,p=n+l.actualBoundingBoxDescent,m=o.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,m),t.lineTo(u,m),t.stroke()}}function F1(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function $r(t,e,n,i,o,l={}){const c=it(e)?e:[e],u=l.strokeWidth>0&&l.strokeColor!=="";let h,p;for(t.save(),t.font=o.string,z1(t,l),h=0;h<c.length;++h)p=c[h],l.backdrop&&F1(t,l.backdrop),u&&(l.strokeColor&&(t.strokeStyle=l.strokeColor),Me(l.strokeWidth)||(t.lineWidth=l.strokeWidth),t.strokeText(p,n,i,l.maxWidth)),t.fillText(p,n,i,l.maxWidth),I1(t,n,i,p,l),i+=Number(o.lineHeight);t.restore()}function Lo(t,e){const{x:n,y:i,w:o,h:l,radius:c}=e;t.arc(n+c.topLeft,i+c.topLeft,c.topLeft,1.5*Ie,Ie,!0),t.lineTo(n,i+l-c.bottomLeft),t.arc(n+c.bottomLeft,i+l-c.bottomLeft,c.bottomLeft,Ie,lt,!0),t.lineTo(n+o-c.bottomRight,i+l),t.arc(n+o-c.bottomRight,i+l-c.bottomRight,c.bottomRight,lt,0,!0),t.lineTo(n+o,i+c.topRight),t.arc(n+o-c.topRight,i+c.topRight,c.topRight,0,-lt,!0),t.lineTo(n+c.topLeft,i)}const B1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,$1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function U1(t,e){const n=(""+t).match(B1);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const W1=t=>+t||0;function Kd(t,e){const n={},i=Ee(e),o=i?Object.keys(e):e,l=Ee(t)?i?c=>ke(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of o)n[c]=W1(l(c));return n}function Vg(t){return Kd(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ki(t){return Kd(t,["topLeft","topRight","bottomLeft","bottomRight"])}function tn(t){const e=Vg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function kt(t,e){t=t||{},e=e||et.font;let n=ke(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=ke(t.style,e.style);i&&!(""+i).match($1)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const o={family:ke(t.family,e.family),lineHeight:U1(ke(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:ke(t.weight,e.weight),string:""};return o.string=M1(o),o}function fo(t,e,n,i){let o,l,c;for(o=0,l=t.length;o<l;++o)if(c=t[o],c!==void 0&&c!==void 0)return c}function H1(t,e,n){const{min:i,max:o}=t,l=Lg(e,(o-i)/2),c=(u,h)=>n&&u===0?0:u+h;return{min:c(i,-Math.abs(l)),max:c(o,l)}}function Gs(t,e){return Object.assign(Object.create(t),e)}function Xd(t,e=[""],n,i,o=()=>t[0]){const l=n||t;typeof i>"u"&&(i=Kg("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:l,_fallback:i,_getTarget:o,override:u=>Xd([u,...t],e,l,i)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return Yg(u,h,()=>J1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return $p(u).includes(h)},ownKeys(u){return $p(u)},set(u,h,p){const m=u._storage||(u._storage=o());return u[h]=m[h]=p,delete u._keys,!0}})}function Ei(t,e,n,i){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:qg(t,i),setContext:l=>Ei(t,l,n,i),override:l=>Ei(t.override(l),e,n,i)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete t[c],!0},get(l,c,u){return Yg(l,c,()=>q1(l,c,u))},getOwnPropertyDescriptor(l,c){return l._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(l,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(l,c,u){return t[c]=u,delete l[c],!0}})}function qg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:i,isScriptable:xs(n)?n:()=>n,isIndexable:xs(i)?i:()=>i}}const V1=(t,e)=>t?t+Hd(e):e,Gd=(t,e)=>Ee(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Yg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function q1(t,e,n){const{_proxy:i,_context:o,_subProxy:l,_descriptors:c}=t;let u=i[e];return xs(u)&&c.isScriptable(e)&&(u=Y1(e,u,t,n)),it(u)&&u.length&&(u=Q1(e,u,t,c.isIndexable)),Gd(e,u)&&(u=Ei(u,o,l&&l[e],c)),u}function Y1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_stack:u}=n;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(l,c||i);return u.delete(t),Gd(t,h)&&(h=Jd(o._scopes,o,t,h)),h}function Q1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_descriptors:u}=n;if(typeof l.index<"u"&&i(t))return e[l.index%e.length];if(Ee(e[0])){const h=e,p=o._scopes.filter(m=>m!==h);e=[];for(const m of h){const v=Jd(p,o,t,m);e.push(Ei(v,l,c&&c[t],u))}}return e}function Qg(t,e,n){return xs(t)?t(e,n):t}const K1=(t,e)=>t===!0?e:typeof t=="string"?Qs(e,t):void 0;function X1(t,e,n,i,o){for(const l of e){const c=K1(n,l);if(c){t.add(c);const u=Qg(c._fallback,n,o);if(typeof u<"u"&&u!==n&&u!==i)return u}else if(c===!1&&typeof i<"u"&&n!==i)return null}return!1}function Jd(t,e,n,i){const o=e._rootScopes,l=Qg(e._fallback,n,i),c=[...t,...o],u=new Set;u.add(i);let h=Bp(u,c,n,l||n,i);return h===null||typeof l<"u"&&l!==n&&(h=Bp(u,c,l,h,i),h===null)?!1:Xd(Array.from(u),[""],o,l,()=>G1(e,n,i))}function Bp(t,e,n,i,o){for(;n;)n=X1(t,e,n,i,o);return n}function G1(t,e,n){const i=t._getTarget();e in i||(i[e]={});const o=i[e];return it(o)&&Ee(n)?n:o||{}}function J1(t,e,n,i){let o;for(const l of e)if(o=Kg(V1(l,t),n),typeof o<"u")return Gd(t,o)?Jd(n,i,t,o):o}function Kg(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function $p(t){let e=t._keys;return e||(e=t._keys=Z1(t._scopes)),e}function Z1(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(o=>!o.startsWith("_")))e.add(i);return Array.from(e)}const ew=Number.EPSILON||1e-14,Ri=(t,e)=>e<t.length&&!t[e].skip&&t[e],Xg=t=>t==="x"?"y":"x";function tw(t,e,n,i){const o=t.skip?e:t,l=e,c=n.skip?e:n,u=Nd(l,o),h=Nd(c,l);let p=u/(u+h),m=h/(u+h);p=isNaN(p)?0:p,m=isNaN(m)?0:m;const v=i*p,b=i*m;return{previous:{x:l.x-v*(c.x-o.x),y:l.y-v*(c.y-o.y)},next:{x:l.x+b*(c.x-o.x),y:l.y+b*(c.y-o.y)}}}function nw(t,e,n){const i=t.length;let o,l,c,u,h,p=Ri(t,0);for(let m=0;m<i-1;++m)if(h=p,p=Ri(t,m+1),!(!h||!p)){if(Rr(e[m],0,ew)){n[m]=n[m+1]=0;continue}o=n[m]/e[m],l=n[m+1]/e[m],u=Math.pow(o,2)+Math.pow(l,2),!(u<=9)&&(c=3/Math.sqrt(u),n[m]=o*c*e[m],n[m+1]=l*c*e[m])}}function sw(t,e,n="x"){const i=Xg(n),o=t.length;let l,c,u,h=Ri(t,0);for(let p=0;p<o;++p){if(c=u,u=h,h=Ri(t,p+1),!u)continue;const m=u[n],v=u[i];c&&(l=(m-c[n])/3,u[`cp1${n}`]=m-l,u[`cp1${i}`]=v-l*e[p]),h&&(l=(h[n]-m)/3,u[`cp2${n}`]=m+l,u[`cp2${i}`]=v+l*e[p])}}function iw(t,e="x"){const n=Xg(e),i=t.length,o=Array(i).fill(0),l=Array(i);let c,u,h,p=Ri(t,0);for(c=0;c<i;++c)if(u=h,h=p,p=Ri(t,c+1),!!h){if(p){const m=p[e]-h[e];o[c]=m!==0?(p[n]-h[n])/m:0}l[c]=u?p?kn(o[c-1])!==kn(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}nw(t,o,l),sw(t,l,e)}function po(t,e,n){return Math.max(Math.min(t,n),e)}function rw(t,e){let n,i,o,l,c,u=Br(t[0],e);for(n=0,i=t.length;n<i;++n)c=l,l=u,u=n<i-1&&Br(t[n+1],e),l&&(o=t[n],c&&(o.cp1x=po(o.cp1x,e.left,e.right),o.cp1y=po(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=po(o.cp2x,e.left,e.right),o.cp2y=po(o.cp2y,e.top,e.bottom)))}function aw(t,e,n,i,o){let l,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")iw(t,o);else{let p=i?t[t.length-1]:t[0];for(l=0,c=t.length;l<c;++l)u=t[l],h=tw(p,u,t[Math.min(l+1,c-(i?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&rw(t,n)}function Zd(){return typeof window<"u"&&typeof document<"u"}function eu(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Oo(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Go=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function ow(t,e){return Go(t).getPropertyValue(e)}const lw=["top","right","bottom","left"];function Vs(t,e,n){const i={};n=n?"-"+n:"";for(let o=0;o<4;o++){const l=lw[o];i[l]=parseFloat(t[e+"-"+l+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const cw=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function dw(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:o,offsetY:l}=i;let c=!1,u,h;if(cw(o,l,t.target))u=o,h=l;else{const p=e.getBoundingClientRect();u=i.clientX-p.left,h=i.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Bs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,o=Go(n),l=o.boxSizing==="border-box",c=Vs(o,"padding"),u=Vs(o,"border","width"),{x:h,y:p,box:m}=dw(t,n),v=c.left+(m&&u.left),b=c.top+(m&&u.top);let{width:w,height:j}=e;return l&&(w-=c.width+u.width,j-=c.height+u.height),{x:Math.round((h-v)/w*n.width/i),y:Math.round((p-b)/j*n.height/i)}}function uw(t,e,n){let i,o;if(e===void 0||n===void 0){const l=t&&eu(t);if(!l)e=t.clientWidth,n=t.clientHeight;else{const c=l.getBoundingClientRect(),u=Go(l),h=Vs(u,"border","width"),p=Vs(u,"padding");e=c.width-p.width-h.width,n=c.height-p.height-h.height,i=Oo(u.maxWidth,l,"clientWidth"),o=Oo(u.maxHeight,l,"clientHeight")}}return{width:e,height:n,maxWidth:i||Mo,maxHeight:o||Mo}}const fs=t=>Math.round(t*10)/10;function hw(t,e,n,i){const o=Go(t),l=Vs(o,"margin"),c=Oo(o.maxWidth,t,"clientWidth")||Mo,u=Oo(o.maxHeight,t,"clientHeight")||Mo,h=uw(t,e,n);let{width:p,height:m}=h;if(o.boxSizing==="content-box"){const b=Vs(o,"border","width"),w=Vs(o,"padding");p-=w.width+b.width,m-=w.height+b.height}return p=Math.max(0,p-l.width),m=Math.max(0,i?p/i:m-l.height),p=fs(Math.min(p,c,h.maxWidth)),m=fs(Math.min(m,u,h.maxHeight)),p&&!m&&(m=fs(p/2)),(e!==void 0||n!==void 0)&&i&&h.height&&m>h.height&&(m=h.height,p=fs(Math.floor(m*i))),{width:p,height:m}}function Up(t,e,n){const i=e||1,o=fs(t.height*i),l=fs(t.width*i);t.height=fs(t.height),t.width=fs(t.width);const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||c.height!==o||c.width!==l?(t.currentDevicePixelRatio=i,c.height=o,c.width=l,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const fw=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Zd()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Wp(t,e){const n=ow(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function $s(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function pw(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function mw(t,e,n,i){const o={x:t.cp2x,y:t.cp2y},l={x:e.cp1x,y:e.cp1y},c=$s(t,o,n),u=$s(o,l,n),h=$s(l,e,n),p=$s(c,u,n),m=$s(u,h,n);return $s(p,m,n)}const gw=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},xw=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Si(t,e,n){return t?gw(e,n):xw()}function Gg(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Jg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Zg(t){return t==="angle"?{between:Fr,compare:g1,normalize:Vt}:{between:$n,compare:(e,n)=>e-n,normalize:e=>e}}function Hp({start:t,end:e,count:n,loop:i,style:o}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:o}}function vw(t,e,n){const{property:i,start:o,end:l}=n,{between:c,normalize:u}=Zg(i),h=e.length;let{start:p,end:m,loop:v}=t,b,w;if(v){for(p+=h,m+=h,b=0,w=h;b<w&&c(u(e[p%h][i]),o,l);++b)p--,m--;p%=h,m%=h}return m<p&&(m+=h),{start:p,end:m,loop:v,style:t.style}}function ex(t,e,n){if(!n)return[t];const{property:i,start:o,end:l}=n,c=e.length,{compare:u,between:h,normalize:p}=Zg(i),{start:m,end:v,loop:b,style:w}=vw(t,e,n),j=[];let N=!1,y=null,_,S,A;const z=()=>h(o,A,_)&&u(o,A)!==0,R=()=>u(l,_)===0||h(l,A,_),I=()=>N||z(),M=()=>!N||R();for(let C=m,O=m;C<=v;++C)S=e[C%c],!S.skip&&(_=p(S[i]),_!==A&&(N=h(_,o,l),y===null&&I()&&(y=u(_,o)===0?C:O),y!==null&&M()&&(j.push(Hp({start:y,end:C,loop:b,count:c,style:w})),y=null),O=C,A=_));return y!==null&&j.push(Hp({start:y,end:v,loop:b,count:c,style:w})),j}function tx(t,e){const n=[],i=t.segments;for(let o=0;o<i.length;o++){const l=ex(i[o],t.points,e);l.length&&n.push(...l)}return n}function yw(t,e,n,i){let o=0,l=e-1;if(n&&!i)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(l+=o);l>o&&t[l%e].skip;)l--;return l%=e,{start:o,end:l}}function bw(t,e,n,i){const o=t.length,l=[];let c=e,u=t[e],h;for(h=e+1;h<=n;++h){const p=t[h%o];p.skip||p.stop?u.skip||(i=!1,l.push({start:e%o,end:(h-1)%o,loop:i}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&l.push({start:e%o,end:c%o,loop:i}),l}function jw(t,e){const n=t.points,i=t.options.spanGaps,o=n.length;if(!o)return[];const l=!!t._loop,{start:c,end:u}=yw(n,o,l,i);if(i===!0)return Vp(t,[{start:c,end:u,loop:l}],n,e);const h=u<c?u+o:u,p=!!t._fullLoop&&c===0&&u===o-1;return Vp(t,bw(n,c,h,p),n,e)}function Vp(t,e,n,i){return!i||!i.setContext||!n?e:ww(t,e,n,i)}function ww(t,e,n,i){const o=t._chart.getContext(),l=qp(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=n.length,p=[];let m=l,v=e[0].start,b=v;function w(j,N,y,_){const S=u?-1:1;if(j!==N){for(j+=h;n[j%h].skip;)j-=S;for(;n[N%h].skip;)N+=S;j%h!==N%h&&(p.push({start:j%h,end:N%h,loop:y,style:_}),m=_,v=N%h)}}for(const j of e){v=u?v:j.start;let N=n[v%h],y;for(b=v+1;b<=j.end;b++){const _=n[b%h];y=qp(i.setContext(Gs(o,{type:"segment",p0:N,p1:_,p0DataIndex:(b-1)%h,p1DataIndex:b%h,datasetIndex:c}))),Nw(y,m)&&w(v,b-1,j.loop,m),N=_,m=y}v<b-1&&w(v,b-1,j.loop,m)}return p}function qp(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Nw(t,e){if(!e)return!1;const n=[],i=function(o,l){return Yd(l)?(n.includes(l)||n.push(l),n.indexOf(l)):l};return JSON.stringify(t,i)!==JSON.stringify(e,i)}function mo(t,e,n){return t.options.clip?t[n]:e[n]}function _w(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:mo(n,e,"left"),right:mo(n,e,"right"),top:mo(i,e,"top"),bottom:mo(i,e,"bottom")}:e}function nx(t,e){const n=e._clip;if(n.disabled)return!1;const i=_w(e,t.chartArea);return{left:n.left===!1?0:i.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:i.right+(n.right===!0?0:n.right),top:n.top===!1?0:i.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:i.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class kw{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,o){const l=n.listeners[o],c=n.duration;l.forEach(u=>u({chart:e,initial:n.initial,numSteps:c,currentStep:Math.min(i-n.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=$g.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;const l=i.items;let c=l.length-1,u=!1,h;for(;c>=0;--c)h=l[c],h._active?(h._total>i.duration&&(i.duration=h._total),h.tick(e),u=!0):(l[c]=l[l.length-1],l.pop());u&&(o.draw(),this._notify(o,i,e,"progress")),l.length||(i.running=!1,this._notify(o,i,e,"complete"),i.initial=!1),n+=l.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var zn=new kw;const Yp="transparent",Sw={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Op(t||Yp),o=i.valid&&Op(e||Yp);return o&&o.valid?o.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Cw{constructor(e,n,i,o){const l=n[i];o=fo([e.to,o,l,e.from]);const c=fo([e.from,l,o]);this._active=!0,this._fn=e.fn||Sw[e.type||typeof c],this._easing=Pr[e.easing]||Pr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=c,this._to=o,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const o=this._target[this._prop],l=i-this._start,c=this._duration-l;this._start=i,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=l,this._loop=!!e.loop,this._to=fo([e.to,n,o,e.from]),this._from=fo([e.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,o=this._prop,l=this._from,c=this._loop,u=this._to;let h;if(this._active=l!==u&&(c||n<i),!this._active){this._target[o]=u,this._notify(!0);return}if(n<0){this._target[o]=l;return}h=n/i%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[o]=this._fn(l,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][n]()}}class sx{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Ee(e))return;const n=Object.keys(et.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const l=e[o];if(!Ee(l))return;const c={};for(const u of n)c[u]=l[u];(it(l.properties)&&l.properties||[o]).forEach(u=>{(u===o||!i.has(u))&&i.set(u,c)})})}_animateOptions(e,n){const i=n.options,o=Rw(e,i);if(!o)return[];const l=this._createAnimations(o,i);return i.$shared&&Ew(e.options.$animations,i).then(()=>{e.options=i},()=>{}),l}_createAnimations(e,n){const i=this._properties,o=[],l=e.$animations||(e.$animations={}),c=Object.keys(n),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){o.push(...this._animateOptions(e,n));continue}const m=n[p];let v=l[p];const b=i.get(p);if(v)if(b&&v.active()){v.update(b,m,u);continue}else v.cancel();if(!b||!b.duration){e[p]=m;continue}l[p]=v=new Cw(b,e,p,m),o.push(v)}return o}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return zn.add(this._chart,i),!0}}function Ew(t,e){const n=[],i=Object.keys(e);for(let o=0;o<i.length;o++){const l=t[i[o]];l&&l.active()&&n.push(l.wait())}return Promise.all(n)}function Rw(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Qp(t,e){const n=t&&t.options||{},i=n.reverse,o=n.min===void 0?e:0,l=n.max===void 0?e:0;return{start:i?l:o,end:i?o:l}}function Pw(t,e,n){if(n===!1)return!1;const i=Qp(t,n),o=Qp(e,n);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function Aw(t){let e,n,i,o;return Ee(t)?(e=t.top,n=t.right,i=t.bottom,o=t.left):e=n=i=o=t,{top:e,right:n,bottom:i,left:o,disabled:t===!1}}function ix(t,e){const n=[],i=t._getSortedDatasetMetas(e);let o,l;for(o=0,l=i.length;o<l;++o)n.push(i[o].index);return n}function Kp(t,e,n,i={}){const o=t.keys,l=i.mode==="single";let c,u,h,p;if(e===null)return;let m=!1;for(c=0,u=o.length;c<u;++c){if(h=+o[c],h===n){if(m=!0,i.all)continue;break}p=t.values[h],St(p)&&(l||e===0||kn(e)===kn(p))&&(e+=p)}return!m&&!i.all?0:e}function Tw(t,e){const{iScale:n,vScale:i}=e,o=n.axis==="x"?"x":"y",l=i.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,m;for(h=0,p=c.length;h<p;++h)m=c[h],u[h]={[o]:m,[l]:t[m]};return u}function sd(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Dw(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Mw(t){const{min:e,max:n,minDefined:i,maxDefined:o}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function Lw(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Xp(t,e,n,i){for(const o of e.getMatchingVisibleMetas(i).reverse()){const l=t[o.index];if(n&&l>0||!n&&l<0)return o.index}return null}function Gp(t,e){const{chart:n,_cachedMeta:i}=t,o=n._stacks||(n._stacks={}),{iScale:l,vScale:c,index:u}=i,h=l.axis,p=c.axis,m=Dw(l,c,i),v=e.length;let b;for(let w=0;w<v;++w){const j=e[w],{[h]:N,[p]:y}=j,_=j._stacks||(j._stacks={});b=_[p]=Lw(o,m,N),b[u]=y,b._top=Xp(b,c,!0,i.type),b._bottom=Xp(b,c,!1,i.type);const S=b._visualValues||(b._visualValues={});S[u]=y}}function id(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Ow(t,e){return Gs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function zw(t,e,n){return Gs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function vr(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const o of e){const l=o._stacks;if(!l||l[i]===void 0||l[i][n]===void 0)return;delete l[i][n],l[i]._visualValues!==void 0&&l[i]._visualValues[n]!==void 0&&delete l[i]._visualValues[n]}}}const rd=t=>t==="reset"||t==="none",Jp=(t,e)=>e?t:Object.assign({},t),Iw=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:ix(n,!0),values:null};class qs{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=sd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&vr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),o=(v,b,w,j)=>v==="x"?b:v==="r"?j:w,l=n.xAxisID=ke(i.xAxisID,id(e,"x")),c=n.yAxisID=ke(i.yAxisID,id(e,"y")),u=n.rAxisID=ke(i.rAxisID,id(e,"r")),h=n.indexAxis,p=n.iAxisID=o(h,l,c,u),m=n.vAxisID=o(h,c,l,u);n.xScale=this.getScaleForId(l),n.yScale=this.getScaleForId(c),n.rScale=this.getScaleForId(u),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Dp(this._data,this),e._stacked&&vr(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Ee(n)){const o=this._cachedMeta;this._data=Tw(n,o)}else if(i!==n){if(i){Dp(i,this);const o=this._cachedMeta;vr(o),o._parsed=[]}n&&Object.isExtensible(n)&&b1(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const l=n._stacked;n._stacked=sd(n.vScale,n),n.stack!==i.stack&&(o=!0,vr(n),n.stack=i.stack),this._resyncElements(e),(o||l!==n._stacked)&&(Gp(this,n._parsed),n._stacked=sd(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:o}=this,{iScale:l,_stacked:c}=i,u=l.axis;let h=e===0&&n===o.length?!0:i._sorted,p=e>0&&i._parsed[e-1],m,v,b;if(this._parsing===!1)i._parsed=o,i._sorted=!0,b=o;else{it(o[e])?b=this.parseArrayData(i,o,e,n):Ee(o[e])?b=this.parseObjectData(i,o,e,n):b=this.parsePrimitiveData(i,o,e,n);const w=()=>v[u]===null||p&&v[u]<p[u];for(m=0;m<n;++m)i._parsed[m+e]=v=b[m],h&&(w()&&(h=!1),p=v);i._sorted=h}c&&Gp(this,b)}parsePrimitiveData(e,n,i,o){const{iScale:l,vScale:c}=e,u=l.axis,h=c.axis,p=l.getLabels(),m=l===c,v=new Array(o);let b,w,j;for(b=0,w=o;b<w;++b)j=b+i,v[b]={[u]:m||l.parse(p[j],j),[h]:c.parse(n[j],j)};return v}parseArrayData(e,n,i,o){const{xScale:l,yScale:c}=e,u=new Array(o);let h,p,m,v;for(h=0,p=o;h<p;++h)m=h+i,v=n[m],u[h]={x:l.parse(v[0],m),y:c.parse(v[1],m)};return u}parseObjectData(e,n,i,o){const{xScale:l,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(o);let m,v,b,w;for(m=0,v=o;m<v;++m)b=m+i,w=n[b],p[m]={x:l.parse(Qs(w,u),b),y:c.parse(Qs(w,h),b)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const o=this.chart,l=this._cachedMeta,c=n[e.axis],u={keys:ix(o,!0),values:n._stacks[e.axis]._visualValues};return Kp(u,c,l.index,{mode:i})}updateRangeFromParsed(e,n,i,o){const l=i[n.axis];let c=l===null?NaN:l;const u=o&&i._stacks[n.axis];o&&u&&(o.values=u,c=Kp(o,l,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,n){const i=this._cachedMeta,o=i._parsed,l=i._sorted&&e===i.iScale,c=o.length,u=this._getOtherScale(e),h=Iw(n,i,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:v}=Mw(u);let b,w;function j(){w=o[b];const N=w[u.axis];return!St(w[e.axis])||m>N||v<N}for(b=0;b<c&&!(!j()&&(this.updateRangeFromParsed(p,e,w,h),l));++b);if(l){for(b=c-1;b>=0;--b)if(!j()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let o,l,c;for(o=0,l=n.length;o<l;++o)c=n[o][e.axis],St(c)&&i.push(c);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,o=n.vScale,l=this.getParsed(e);return{label:i?""+i.getLabelForValue(l[i.axis]):"",value:o?""+o.getLabelForValue(l[o.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Aw(ke(this.options.clip,Pw(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,o=i.data||[],l=n.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||o.length-u,p=this.options.drawActiveElementsOnTop;let m;for(i.dataset&&i.dataset.draw(e,l,u,h),m=u;m<u+h;++m){const v=o[m];v.hidden||(v.active&&p?c.push(v):v.draw(e,l))}for(m=0;m<c.length;++m)c[m].draw(e,l)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const o=this.getDataset();let l;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];l=c.$context||(c.$context=zw(this.getContext(),e,c)),l.parsed=this.getParsed(e),l.raw=o.data[e],l.index=l.dataIndex=e}else l=this.$context||(this.$context=Ow(this.chart.getContext(),this.index)),l.dataset=o,l.index=l.datasetIndex=this.index;return l.active=!!n,l.mode=i,l}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const o=n==="active",l=this._cachedDataOpts,c=e+"-"+n,u=l[c],h=this.enableOptionSharing&&zr(i);if(u)return Jp(u,h);const p=this.chart.config,m=p.datasetElementScopeKeys(this._type,e),v=o?[`${e}Hover`,"hover",e,""]:[e,""],b=p.getOptionScopes(this.getDataset(),m),w=Object.keys(et.elements[e]),j=()=>this.getContext(i,o,n),N=p.resolveNamedOptions(b,w,j,v);return N.$shared&&(N.$shared=h,l[c]=Object.freeze(Jp(N,h))),N}_resolveAnimations(e,n,i){const o=this.chart,l=this._cachedDataOpts,c=`animation-${n}`,u=l[c];if(u)return u;let h;if(o.options.animation!==!1){const m=this.chart.config,v=m.datasetAnimationScopeKeys(this._type,n),b=m.getOptionScopes(this.getDataset(),v);h=m.createResolver(b,this.getContext(e,i,n))}const p=new sx(o,h&&h.animations);return h&&h._cacheable&&(l[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||rd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),o=this._sharedOptions,l=this.getSharedOptions(i),c=this.includeOptions(n,l)||l!==o;return this.updateSharedOptions(l,n,i),{sharedOptions:l,includeOptions:c}}updateElement(e,n,i,o){rd(o)?Object.assign(e,i):this._resolveAnimations(n,o).update(e,i)}updateSharedOptions(e,n,i){e&&!rd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,o){e.active=o;const l=this.getStyle(n,o);this._resolveAnimations(n,i,o).update(e,{options:!o&&this.getSharedOptions(l)||l})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const o=i.length,l=n.length,c=Math.min(l,o);c&&this.parse(0,c),l>o?this._insertElements(o,l-o,e):l<o&&this._removeElements(l,o-l)}_insertElements(e,n,i=!0){const o=this._cachedMeta,l=o.data,c=e+n;let u;const h=p=>{for(p.length+=n,u=p.length-1;u>=c;u--)p[u]=p[u-n]};for(h(l),u=e;u<c;++u)l[u]=new this.dataElementType;this._parsing&&h(o._parsed),this.parse(e,n),i&&this.updateElements(l,e,n,"reset")}updateElements(e,n,i,o){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(e,n);i._stacked&&vr(i,o)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,o]=e;this[n](i,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}me(qs,"defaults",{}),me(qs,"datasetElementType",null),me(qs,"dataElementType",null);function Fw(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let o=0,l=n.length;o<l;o++)i=i.concat(n[o].controller.getAllParsedValues(t));t._cache.$bar=Bg(i.sort((o,l)=>o-l))}return t._cache.$bar}function Bw(t){const e=t.iScale,n=Fw(e,t.type);let i=e._length,o,l,c,u;const h=()=>{c===32767||c===-32768||(zr(u)&&(i=Math.min(i,Math.abs(c-u)||i)),u=c)};for(o=0,l=n.length;o<l;++o)c=e.getPixelForValue(n[o]),h();for(u=void 0,o=0,l=e.ticks.length;o<l;++o)c=e.getPixelForTick(o),h();return i}function $w(t,e,n,i){const o=n.barThickness;let l,c;return Me(o)?(l=e.min*n.categoryPercentage,c=n.barPercentage):(l=o*i,c=1),{chunk:l/i,ratio:c,start:e.pixels[t]-l/2}}function Uw(t,e,n,i){const o=e.pixels,l=o[t];let c=t>0?o[t-1]:null,u=t<o.length-1?o[t+1]:null;const h=n.categoryPercentage;c===null&&(c=l-(u===null?e.end-e.start:u-l)),u===null&&(u=l+l-c);const p=l-(l-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/i,ratio:n.barPercentage,start:p}}function Ww(t,e,n,i){const o=n.parse(t[0],i),l=n.parse(t[1],i),c=Math.min(o,l),u=Math.max(o,l);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[n.axis]=p,e._custom={barStart:h,barEnd:p,start:o,end:l,min:c,max:u}}function rx(t,e,n,i){return it(t)?Ww(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Zp(t,e,n,i){const o=t.iScale,l=t.vScale,c=o.getLabels(),u=o===l,h=[];let p,m,v,b;for(p=n,m=n+i;p<m;++p)b=e[p],v={},v[o.axis]=u||o.parse(c[p],p),h.push(rx(b,v,l,p));return h}function ad(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function Hw(t,e,n){return t!==0?kn(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function Vw(t){let e,n,i,o,l;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(o="end",l="start"):(o="start",l="end"),{start:n,end:i,reverse:e,top:o,bottom:l}}function qw(t,e,n,i){let o=e.borderSkipped;const l={};if(!o){t.borderSkipped=l;return}if(o===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:m}=Vw(t);o==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?o=p:(n._bottom||0)===i?o=m:(l[em(m,c,u,h)]=!0,o=p)),l[em(o,c,u,h)]=!0,t.borderSkipped=l}function em(t,e,n,i){return i?(t=Yw(t,e,n),t=tm(t,n,e)):t=tm(t,e,n),t}function Yw(t,e,n){return t===e?n:t===n?e:t}function tm(t,e,n){return t==="start"?e:t==="end"?n:t}function Qw(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class ko extends qs{parsePrimitiveData(e,n,i,o){return Zp(e,n,i,o)}parseArrayData(e,n,i,o){return Zp(e,n,i,o)}parseObjectData(e,n,i,o){const{iScale:l,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=l.axis==="x"?u:h,m=c.axis==="x"?u:h,v=[];let b,w,j,N;for(b=i,w=i+o;b<w;++b)N=n[b],j={},j[l.axis]=l.parse(Qs(N,p),b),v.push(rx(Qs(N,m),j,c,b));return v}updateRangeFromParsed(e,n,i,o){super.updateRangeFromParsed(e,n,i,o);const l=i._custom;l&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,l.min),e.max=Math.max(e.max,l.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:o}=n,l=this.getParsed(e),c=l._custom,u=ad(c)?"["+c.start+", "+c.end+"]":""+o.getLabelForValue(l[o.axis]);return{label:""+i.getLabelForValue(l[i.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,o){const l=o==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),m=this._getRuler(),{sharedOptions:v,includeOptions:b}=this._getSharedOptions(n,o);for(let w=n;w<n+i;w++){const j=this.getParsed(w),N=l||Me(j[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,m),_=(j._stacks||{})[u.axis],S={horizontal:p,base:N.base,enableBorderRadius:!_||ad(j._custom)||c===_._top||c===_._bottom,x:p?N.head:y.center,y:p?y.center:N.head,height:p?y.size:Math.abs(N.size),width:p?Math.abs(N.size):y.size};b&&(S.options=v||this.resolveDataElementOptions(w,e[w].active?"active":o));const A=S.options||e[w].options;qw(S,A,_,c),Qw(S,A,m.ratio),this.updateElement(e[w],w,S,o)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),l=i.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(n),h=u&&u[i.axis],p=m=>{const v=m._parsed.find(w=>w[i.axis]===h),b=v&&v[m.vScale.axis];if(Me(b)||isNaN(b))return!0};for(const m of o)if(!(n!==void 0&&p(m))&&((l===!1||c.indexOf(m.stack)===-1||l===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(i=>e[i].axis===n).shift()}_getAxis(){const e={},n=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)e[ke(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,i){const o=this._getStacks(e,i),l=n!==void 0?o.indexOf(n):-1;return l===-1?o.length-1:l}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,o=[];let l,c;for(l=0,c=n.data.length;l<c;++l)o.push(i.getPixelForValue(this.getParsed(l)[i.axis],l));const u=e.barThickness;return{min:u||Bw(n),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:o},options:{base:l,minBarLength:c}}=this,u=l||0,h=this.getParsed(e),p=h._custom,m=ad(p);let v=h[n.axis],b=0,w=i?this.applyStack(n,h,i):v,j,N;w!==v&&(b=w-v,w=v),m&&(v=p.barStart,w=p.barEnd-p.barStart,v!==0&&kn(v)!==kn(p.barEnd)&&(b=0),b+=v);const y=!Me(l)&&!m?l:b;let _=n.getPixelForValue(y);if(this.chart.getDataVisibility(e)?j=n.getPixelForValue(b+w):j=_,N=j-_,Math.abs(N)<c){N=Hw(N,n,u)*c,v===u&&(_-=N/2);const S=n.getPixelForDecimal(0),A=n.getPixelForDecimal(1),z=Math.min(S,A),R=Math.max(S,A);_=Math.max(Math.min(_,R),z),j=_+N,i&&!m&&(h._stacks[n.axis]._visualValues[o]=n.getValueForPixel(j)-n.getValueForPixel(_))}if(_===n.getPixelForValue(u)){const S=kn(N)*n.getLineWidthForValue(u)/2;_+=S,N-=S}return{size:N,base:_,head:j,center:j+N/2}}_calculateBarIndexPixels(e,n){const i=n.scale,o=this.options,l=o.skipNull,c=ke(o.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(n.grouped){const m=l?this._getStackCount(e):n.stackCount,v=o.barThickness==="flex"?Uw(e,n,o,m*p):$w(e,n,o,m*p),b=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(ke(b,this.getFirstScaleIdForIndexAxis())),j=this._getStackIndex(this.index,this._cachedMeta.stack,l?e:void 0)+w;u=v.start+v.chunk*j+v.chunk/2,h=Math.min(c,v.chunk*v.ratio)}else u=i.getPixelForValue(this.getParsed(e)[i.axis],e),h=Math.min(c,n.min*n.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,o=i.length;let l=0;for(;l<o;++l)this.getParsed(l)[n.axis]!==null&&!i[l].hidden&&i[l].draw(this._ctx)}}me(ko,"id","bar"),me(ko,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),me(ko,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function Kw(t,e,n){let i=1,o=1,l=0,c=0;if(e<Ye){const u=t,h=u+e,p=Math.cos(u),m=Math.sin(u),v=Math.cos(h),b=Math.sin(h),w=(A,z,R)=>Fr(A,u,h,!0)?1:Math.max(z,z*n,R,R*n),j=(A,z,R)=>Fr(A,u,h,!0)?-1:Math.min(z,z*n,R,R*n),N=w(0,p,v),y=w(lt,m,b),_=j(Ie,p,v),S=j(Ie+lt,m,b);i=(N-_)/2,o=(y-S)/2,l=-(N+_)/2,c=-(y+S)/2}return{ratioX:i,ratioY:o,offsetX:l,offsetY:c}}class _r extends qs{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=i;else{let l=h=>+i[h];if(Ee(i[e])){const{key:h="value"}=this._parsing;l=p=>+Qs(i[p],h)}let c,u;for(c=e,u=e+n;c<u;++c)o._parsed[c]=l(c)}}_getRotation(){return Bn(this.options.rotation-90)}_getCircumference(){return Bn(this.options.circumference)}_getRotationExtents(){let e=Ye,n=-Ye;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const o=this.chart.getDatasetMeta(i).controller,l=o._getRotation(),c=o._getCircumference();e=Math.min(e,l),n=Math.max(n,l+c)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,o=this._cachedMeta,l=o.data,c=this.getMaxBorderWidth()+this.getMaxOffset(l)+this.options.spacing,u=Math.max((Math.min(i.width,i.height)-c)/2,0),h=Math.min(s1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:m,rotation:v}=this._getRotationExtents(),{ratioX:b,ratioY:w,offsetX:j,offsetY:N}=Kw(v,m,h),y=(i.width-c)/b,_=(i.height-c)/w,S=Math.max(Math.min(y,_)/2,0),A=Lg(this.options.radius,S),z=Math.max(A*h,0),R=(A-z)/this._getVisibleDatasetWeightTotal();this.offsetX=j*A,this.offsetY=N*A,o.total=this.calculateTotal(),this.outerRadius=A-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*p,0),this.updateElements(l,0,l.length,e)}_circumference(e,n){const i=this.options,o=this._cachedMeta,l=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||o._parsed[e]===null||o.data[e].hidden?0:this.calculateCircumference(o._parsed[e]*l/Ye)}updateElements(e,n,i,o){const l=o==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,m=(u.left+u.right)/2,v=(u.top+u.bottom)/2,b=l&&p.animateScale,w=b?0:this.innerRadius,j=b?0:this.outerRadius,{sharedOptions:N,includeOptions:y}=this._getSharedOptions(n,o);let _=this._getRotation(),S;for(S=0;S<n;++S)_+=this._circumference(S,l);for(S=n;S<n+i;++S){const A=this._circumference(S,l),z=e[S],R={x:m+this.offsetX,y:v+this.offsetY,startAngle:_,endAngle:_+A,circumference:A,outerRadius:j,innerRadius:w};y&&(R.options=N||this.resolveDataElementOptions(S,z.active?"active":o)),_+=A,this.updateElement(z,S,R,o)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,o;for(o=0;o<n.length;o++){const l=e._parsed[o];l!==null&&!isNaN(l)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(i+=Math.abs(l))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Ye*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,o=i.data.labels||[],l=Qd(n._parsed[e],i.options.locale);return{label:o[e]||"",value:l}}getMaxBorderWidth(e){let n=0;const i=this.chart;let o,l,c,u,h;if(!e){for(o=0,l=i.data.datasets.length;o<l;++o)if(i.isDatasetVisible(o)){c=i.getDatasetMeta(o),e=c.data,u=c.controller;break}}if(!e)return 0;for(o=0,l=e.length;o<l;++o)h=u.resolveDataElementOptions(o),h.borderAlign!=="inner"&&(n=Math.max(n,h.borderWidth||0,h.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,o=e.length;i<o;++i){const l=this.resolveDataElementOptions(i);n=Math.max(n,l.offset||0,l.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(ke(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}me(_r,"id","doughnut"),me(_r,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),me(_r,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),me(_r,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data,{labels:{pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=e.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((h,p)=>{const v=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:v.backgroundColor,fontColor:l,hidden:!e.getDataVisibility(p),lineDash:v.borderDash,lineDashOffset:v.borderDashOffset,lineJoin:v.borderJoinStyle,lineWidth:v.borderWidth,strokeStyle:v.borderColor,textAlign:o,pointStyle:i,borderRadius:c&&(u||v.borderRadius),index:p}}):[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class So extends qs{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:o=[],_dataset:l}=n,c=this.chart._animationsDisabled;let{start:u,count:h}=N1(n,o,c);this._drawStart=u,this._drawCount=h,_1(n)&&(u=0,h=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!l._decimated,i.points=o;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(i,void 0,{animated:!c,options:p},e),this.updateElements(o,u,h,e)}updateElements(e,n,i,o){const l=o==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:m,includeOptions:v}=this._getSharedOptions(n,o),b=c.axis,w=u.axis,{spanGaps:j,segment:N}=this.options,y=Ir(j)?j:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||l||o==="none",S=n+i,A=e.length;let z=n>0&&this.getParsed(n-1);for(let R=0;R<A;++R){const I=e[R],M=_?I:{};if(R<n||R>=S){M.skip=!0;continue}const C=this.getParsed(R),O=Me(C[w]),W=M[b]=c.getPixelForValue(C[b],R),X=M[w]=l||O?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,C,h):C[w],R);M.skip=isNaN(W)||isNaN(X)||O,M.stop=R>0&&Math.abs(C[b]-z[b])>y,N&&(M.parsed=C,M.raw=p.data[R]),v&&(M.options=m||this.resolveDataElementOptions(R,I.active?"active":o)),_||this.updateElement(I,R,M,o),z=C}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,o=e.data||[];if(!o.length)return i;const l=o[0].size(this.resolveDataElementOptions(0)),c=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,l,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}me(So,"id","line"),me(So,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),me(So,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function zs(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class tu{constructor(e){me(this,"options");this.options=e||{}}static override(e){Object.assign(tu.prototype,e)}init(){}formats(){return zs()}parse(){return zs()}format(){return zs()}add(){return zs()}diff(){return zs()}startOf(){return zs()}endOf(){return zs()}}var Xw={_date:tu};function Gw(t,e,n,i){const{controller:o,data:l,_sorted:c}=t,u=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&l.length){const p=u._reversePixels?v1:Ws;if(i){if(o._sharedOptions){const m=l[0],v=typeof m.getRange=="function"&&m.getRange(e);if(v){const b=p(l,e,n-v),w=p(l,e,n+v);return{lo:b.lo,hi:w.hi}}}}else{const m=p(l,e,n);if(h){const{vScale:v}=o._cachedMeta,{_parsed:b}=t,w=b.slice(0,m.lo+1).reverse().findIndex(N=>!Me(N[v.axis]));m.lo-=Math.max(0,w);const j=b.slice(m.hi).findIndex(N=>!Me(N[v.axis]));m.hi+=Math.max(0,j)}return m}}return{lo:0,hi:l.length-1}}function Jo(t,e,n,i,o){const l=t.getSortedVisibleDatasetMetas(),c=n[e];for(let u=0,h=l.length;u<h;++u){const{index:p,data:m}=l[u],{lo:v,hi:b}=Gw(l[u],e,c,o);for(let w=v;w<=b;++w){const j=m[w];j.skip||i(j,p,w)}}}function Jw(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,o){const l=e?Math.abs(i.x-o.x):0,c=n?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(l,2)+Math.pow(c,2))}}function od(t,e,n,i,o){const l=[];return!o&&!t.isPointInArea(e)||Jo(t,n,e,function(u,h,p){!o&&!Br(u,t.chartArea,0)||u.inRange(e.x,e.y,i)&&l.push({element:u,datasetIndex:h,index:p})},!0),l}function Zw(t,e,n,i){let o=[];function l(c,u,h){const{startAngle:p,endAngle:m}=c.getProps(["startAngle","endAngle"],i),{angle:v}=Ig(c,{x:e.x,y:e.y});Fr(v,p,m)&&o.push({element:c,datasetIndex:u,index:h})}return Jo(t,n,e,l),o}function eN(t,e,n,i,o,l){let c=[];const u=Jw(n);let h=Number.POSITIVE_INFINITY;function p(m,v,b){const w=m.inRange(e.x,e.y,o);if(i&&!w)return;const j=m.getCenterPoint(o);if(!(!!l||t.isPointInArea(j))&&!w)return;const y=u(e,j);y<h?(c=[{element:m,datasetIndex:v,index:b}],h=y):y===h&&c.push({element:m,datasetIndex:v,index:b})}return Jo(t,n,e,p),c}function ld(t,e,n,i,o,l){return!l&&!t.isPointInArea(e)?[]:n==="r"&&!i?Zw(t,e,n,o):eN(t,e,n,i,o,l)}function nm(t,e,n,i,o){const l=[],c=n==="x"?"inXRange":"inYRange";let u=!1;return Jo(t,n,e,(h,p,m)=>{h[c]&&h[c](e[n],o)&&(l.push({element:h,datasetIndex:p,index:m}),u=u||h.inRange(e.x,e.y,o))}),i&&!u?[]:l}var tN={modes:{index(t,e,n,i){const o=Bs(e,t),l=n.axis||"x",c=n.includeInvisible||!1,u=n.intersect?od(t,o,l,i,c):ld(t,o,l,!1,i,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const m=u[0].index,v=p.data[m];v&&!v.skip&&h.push({element:v,datasetIndex:p.index,index:m})}),h):[]},dataset(t,e,n,i){const o=Bs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;let u=n.intersect?od(t,o,l,i,c):ld(t,o,l,!1,i,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let m=0;m<p.length;++m)u.push({element:p[m],datasetIndex:h,index:m})}return u},point(t,e,n,i){const o=Bs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return od(t,o,l,i,c)},nearest(t,e,n,i){const o=Bs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return ld(t,o,l,n.intersect,i,c)},x(t,e,n,i){const o=Bs(e,t);return nm(t,o,"x",n.intersect,i)},y(t,e,n,i){const o=Bs(e,t);return nm(t,o,"y",n.intersect,i)}}};const ax=["left","top","right","bottom"];function yr(t,e){return t.filter(n=>n.pos===e)}function sm(t,e){return t.filter(n=>ax.indexOf(n.pos)===-1&&n.box.axis===e)}function br(t,e){return t.sort((n,i)=>{const o=e?i:n,l=e?n:i;return o.weight===l.weight?o.index-l.index:o.weight-l.weight})}function nN(t){const e=[];let n,i,o,l,c,u;for(n=0,i=(t||[]).length;n<i;++n)o=t[n],{position:l,options:{stack:c,stackWeight:u=1}}=o,e.push({index:n,box:o,pos:l,horizontal:o.isHorizontal(),weight:o.weight,stack:c&&l+c,stackWeight:u});return e}function sN(t){const e={};for(const n of t){const{stack:i,pos:o,stackWeight:l}=n;if(!i||!ax.includes(o))continue;const c=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=l}return e}function iN(t,e){const n=sN(t),{vBoxMaxWidth:i,hBoxMaxHeight:o}=e;let l,c,u;for(l=0,c=t.length;l<c;++l){u=t[l];const{fullSize:h}=u.box,p=n[u.stack],m=p&&u.stackWeight/p.weight;u.horizontal?(u.width=m?m*i:h&&e.availableWidth,u.height=o):(u.width=i,u.height=m?m*o:h&&e.availableHeight)}return n}function rN(t){const e=nN(t),n=br(e.filter(p=>p.box.fullSize),!0),i=br(yr(e,"left"),!0),o=br(yr(e,"right")),l=br(yr(e,"top"),!0),c=br(yr(e,"bottom")),u=sm(e,"x"),h=sm(e,"y");return{fullSize:n,leftAndTop:i.concat(l),rightAndBottom:o.concat(h).concat(c).concat(u),chartArea:yr(e,"chartArea"),vertical:i.concat(o).concat(h),horizontal:l.concat(c).concat(u)}}function im(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ox(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function aN(t,e,n,i){const{pos:o,box:l}=n,c=t.maxPadding;if(!Ee(o)){n.size&&(t[o]-=n.size);const v=i[n.stack]||{size:0,count:1};v.size=Math.max(v.size,n.horizontal?l.height:l.width),n.size=v.size/v.count,t[o]+=n.size}l.getPadding&&ox(c,l.getPadding());const u=Math.max(0,e.outerWidth-im(c,t,"left","right")),h=Math.max(0,e.outerHeight-im(c,t,"top","bottom")),p=u!==t.w,m=h!==t.h;return t.w=u,t.h=h,n.horizontal?{same:p,other:m}:{same:m,other:p}}function oN(t){const e=t.maxPadding;function n(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function lN(t,e){const n=e.maxPadding;function i(o){const l={left:0,top:0,right:0,bottom:0};return o.forEach(c=>{l[c]=Math.max(e[c],n[c])}),l}return i(t?["left","right"]:["top","bottom"])}function kr(t,e,n,i){const o=[];let l,c,u,h,p,m;for(l=0,c=t.length,p=0;l<c;++l){u=t[l],h=u.box,h.update(u.width||e.w,u.height||e.h,lN(u.horizontal,e));const{same:v,other:b}=aN(e,n,u,i);p|=v&&o.length,m=m||b,h.fullSize||o.push(u)}return p&&kr(o,e,n,i)||m}function go(t,e,n,i,o){t.top=n,t.left=e,t.right=e+i,t.bottom=n+o,t.width=i,t.height=o}function rm(t,e,n,i){const o=n.padding;let{x:l,y:c}=e;for(const u of t){const h=u.box,p=i[u.stack]||{placed:0,weight:1},m=u.stackWeight/p.weight||1;if(u.horizontal){const v=e.w*m,b=p.size||h.height;zr(p.start)&&(c=p.start),h.fullSize?go(h,o.left,c,n.outerWidth-o.right-o.left,b):go(h,e.left+p.placed,c,v,b),p.start=c,p.placed+=v,c=h.bottom}else{const v=e.h*m,b=p.size||h.width;zr(p.start)&&(l=p.start),h.fullSize?go(h,l,o.top,b,n.outerHeight-o.bottom-o.top):go(h,l,e.top+p.placed,b,v),p.start=l,p.placed+=v,l=h.right}}e.x=l,e.y=c}var en={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const o=tn(t.options.layout.padding),l=Math.max(e-o.width,0),c=Math.max(n-o.height,0),u=rN(t.boxes),h=u.vertical,p=u.horizontal;ze(t.boxes,N=>{typeof N.beforeLayout=="function"&&N.beforeLayout()});const m=h.reduce((N,y)=>y.box.options&&y.box.options.display===!1?N:N+1,0)||1,v=Object.freeze({outerWidth:e,outerHeight:n,padding:o,availableWidth:l,availableHeight:c,vBoxMaxWidth:l/2/m,hBoxMaxHeight:c/2}),b=Object.assign({},o);ox(b,tn(i));const w=Object.assign({maxPadding:b,w:l,h:c,x:o.left,y:o.top},o),j=iN(h.concat(p),v);kr(u.fullSize,w,v,j),kr(h,w,v,j),kr(p,w,v,j)&&kr(h,w,v,j),oN(w),rm(u.leftAndTop,w,v,j),w.x+=w.w,w.y+=w.h,rm(u.rightAndBottom,w,v,j),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},ze(u.chartArea,N=>{const y=N.box;Object.assign(y,t.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class lx{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,o){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,o?Math.floor(n/o):i)}}isAttached(e){return!0}updateConfig(e){}}class cN extends lx{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Co="$chartjs",dN={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},am=t=>t===null||t==="";function uN(t,e){const n=t.style,i=t.getAttribute("height"),o=t.getAttribute("width");if(t[Co]={initial:{height:i,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",am(o)){const l=Wp(t,"width");l!==void 0&&(t.width=l)}if(am(i))if(t.style.height==="")t.height=t.width/(e||2);else{const l=Wp(t,"height");l!==void 0&&(t.height=l)}return t}const cx=fw?{passive:!0}:!1;function hN(t,e,n){t&&t.addEventListener(e,n,cx)}function fN(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,cx)}function pN(t,e){const n=dN[t.type]||t.type,{x:i,y:o}=Bs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:o!==void 0?o:null}}function zo(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function mN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||zo(u.addedNodes,i),c=c&&!zo(u.removedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function gN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||zo(u.removedNodes,i),c=c&&!zo(u.addedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const Ur=new Map;let om=0;function dx(){const t=window.devicePixelRatio;t!==om&&(om=t,Ur.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function xN(t,e){Ur.size||window.addEventListener("resize",dx),Ur.set(t,e)}function vN(t){Ur.delete(t),Ur.size||window.removeEventListener("resize",dx)}function yN(t,e,n){const i=t.canvas,o=i&&eu(i);if(!o)return;const l=Ug((u,h)=>{const p=o.clientWidth;n(u,h),p<o.clientWidth&&n()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,m=h.contentRect.height;p===0&&m===0||l(p,m)});return c.observe(o),xN(t,l),c}function cd(t,e,n){n&&n.disconnect(),e==="resize"&&vN(t)}function bN(t,e,n){const i=t.canvas,o=Ug(l=>{t.ctx!==null&&n(pN(l,t))},t);return hN(i,e,o),o}class jN extends lx{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(uN(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Co])return!1;const i=n[Co].initial;["height","width"].forEach(l=>{const c=i[l];Me(c)?n.removeAttribute(l):n.setAttribute(l,c)});const o=i.style||{};return Object.keys(o).forEach(l=>{n.style[l]=o[l]}),n.width=n.width,delete n[Co],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const o=e.$proxies||(e.$proxies={}),c={attach:mN,detach:gN,resize:yN}[n]||bN;o[n]=c(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),o=i[n];if(!o)return;({attach:cd,detach:cd,resize:cd}[n]||fN)(e,n,o),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,o){return hw(e,n,i,o)}isAttached(e){const n=e&&eu(e);return!!(n&&n.isConnected)}}function wN(t){return!Zd()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?cN:jN}class un{constructor(){me(this,"x");me(this,"y");me(this,"active",!1);me(this,"options");me(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Ir(this.x)&&Ir(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const o={};return e.forEach(l=>{o[l]=i[l]&&i[l].active()?i[l]._to:this[l]}),o}}me(un,"defaults",{}),me(un,"defaultRoutes");function NN(t,e){const n=t.options.ticks,i=_N(t),o=Math.min(n.maxTicksLimit||i,i),l=n.major.enabled?SN(e):[],c=l.length,u=l[0],h=l[c-1],p=[];if(c>o)return CN(e,p,l,c/o),p;const m=kN(l,e,o);if(c>0){let v,b;const w=c>1?Math.round((h-u)/(c-1)):null;for(xo(e,p,m,Me(w)?0:u-w,u),v=0,b=c-1;v<b;v++)xo(e,p,m,l[v],l[v+1]);return xo(e,p,m,h,Me(w)?e.length:h+w),p}return xo(e,p,m),p}function _N(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),o=t._maxLength/n;return Math.floor(Math.min(i,o))}function kN(t,e,n){const i=EN(t),o=e.length/n;if(!i)return Math.max(o,1);const l=u1(i);for(let c=0,u=l.length-1;c<u;c++){const h=l[c];if(h>o)return h}return Math.max(o,1)}function SN(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function CN(t,e,n,i){let o=0,l=n[0],c;for(i=Math.ceil(i),c=0;c<t.length;c++)c===l&&(e.push(t[c]),o++,l=n[o*i])}function xo(t,e,n,i,o){const l=ke(i,0),c=Math.min(ke(o,t.length),t.length);let u=0,h,p,m;for(n=Math.ceil(n),o&&(h=o-i,n=h/Math.floor(h/n)),m=l;m<0;)u++,m=Math.round(l+u*n);for(p=Math.max(l,0);p<c;p++)p===m&&(e.push(t[p]),u++,m=Math.round(l+u*n))}function EN(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const RN=t=>t==="left"?"right":t==="right"?"left":t,lm=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,cm=(t,e)=>Math.min(e||t,t);function dm(t,e){const n=[],i=t.length/e,o=t.length;let l=0;for(;l<o;l+=i)n.push(t[Math.floor(l)]);return n}function PN(t,e,n){const i=t.ticks.length,o=Math.min(e,i-1),l=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(o),p;if(!(n&&(i===1?p=Math.max(h-l,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(o-1))/2,h+=o<e?p:-p,h<l-u||h>c+u)))return h}function AN(t,e){ze(t,n=>{const i=n.gc,o=i.length/2;let l;if(o>e){for(l=0;l<o;++l)delete n.data[i[l]];i.splice(0,o)}})}function jr(t){return t.drawTicks?t.tickLength:0}function um(t,e){if(!t.display)return 0;const n=kt(t.font,e),i=tn(t.padding);return(it(t.text)?t.text.length:1)*n.lineHeight+i.height}function TN(t,e){return Gs(t,{scale:e,type:"scale"})}function DN(t,e,n){return Gs(t,{tick:n,index:e,type:"tick"})}function MN(t,e,n){let i=qd(t);return(n&&e!=="right"||!n&&e==="right")&&(i=RN(i)),i}function LN(t,e,n,i){const{top:o,left:l,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:m}=h;let v=0,b,w,j;const N=c-o,y=u-l;if(t.isHorizontal()){if(w=wt(i,l,u),Ee(n)){const _=Object.keys(n)[0],S=n[_];j=m[_].getPixelForValue(S)+N-e}else n==="center"?j=(p.bottom+p.top)/2+N-e:j=lm(t,n,e);b=u-l}else{if(Ee(n)){const _=Object.keys(n)[0],S=n[_];w=m[_].getPixelForValue(S)-y+e}else n==="center"?w=(p.left+p.right)/2-y+e:w=lm(t,n,e);j=wt(i,c,o),v=n==="left"?-lt:lt}return{titleX:w,titleY:j,maxWidth:b,rotation:v}}class Ti extends un{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:o}=this;return e=bn(e,Number.POSITIVE_INFINITY),n=bn(n,Number.NEGATIVE_INFINITY),i=bn(i,Number.POSITIVE_INFINITY),o=bn(o,Number.NEGATIVE_INFINITY),{min:bn(e,i),max:bn(n,o),minDefined:St(e),maxDefined:St(n)}}getMinMax(e){let{min:n,max:i,minDefined:o,maxDefined:l}=this.getUserBounds(),c;if(o&&l)return{min:n,max:i};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),o||(n=Math.min(n,c.min)),l||(i=Math.max(i,c.max));return n=l&&n>i?i:n,i=o&&n>i?n:i,{min:bn(n,bn(i,n)),max:bn(i,bn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){We(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:o,grace:l,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=H1(this,l,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?dm(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=NN(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){We(this.options.afterUpdate,[this])}beforeSetDimensions(){We(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){We(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),We(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){We(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,o,l;for(i=0,o=e.length;i<o;i++)l=e[i],l.label=We(n.callback,[l.value,i,e],this)}afterTickToLabelConversion(){We(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){We(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=cm(this.ticks.length,e.ticks.maxTicksLimit),o=n.minRotation||0,l=n.maxRotation;let c=o,u,h,p;if(!this._isVisible()||!n.display||o>=l||i<=1||!this.isHorizontal()){this.labelRotation=o;return}const m=this._getLabelSizes(),v=m.widest.width,b=m.highest.height,w=_t(this.chart.width-v,0,this.maxWidth);u=e.offset?this.maxWidth/i:w/(i-1),v+6>u&&(u=w/(i-(e.offset?.5:1)),h=this.maxHeight-jr(e.grid)-n.padding-um(e.title,this.chart.options.font),p=Math.sqrt(v*v+b*b),c=m1(Math.min(Math.asin(_t((m.highest.height+6)/u,-1,1)),Math.asin(_t(h/p,-1,1))-Math.asin(_t(b/p,-1,1)))),c=Math.max(o,Math.min(l,c))),this.labelRotation=c}afterCalculateLabelRotation(){We(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){We(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:o,grid:l}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=um(o,n.options.font);if(u?(e.width=this.maxWidth,e.height=jr(l)+h):(e.height=this.maxHeight,e.width=jr(l)+h),i.display&&this.ticks.length){const{first:p,last:m,widest:v,highest:b}=this._getLabelSizes(),w=i.padding*2,j=Bn(this.labelRotation),N=Math.cos(j),y=Math.sin(j);if(u){const _=i.mirror?0:y*v.width+N*b.height;e.height=Math.min(this.maxHeight,e.height+_+w)}else{const _=i.mirror?0:N*v.width+y*b.height;e.width=Math.min(this.maxWidth,e.width+_+w)}this._calculatePadding(p,m,y,N)}}this._handleMargins(),u?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,o){const{ticks:{align:l,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let b=0,w=0;h?p?(b=o*e.width,w=i*n.height):(b=i*e.height,w=o*n.width):l==="start"?w=n.width:l==="end"?b=e.width:l!=="inner"&&(b=e.width/2,w=n.width/2),this.paddingLeft=Math.max((b-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((w-v+c)*this.width/(this.width-v),0)}else{let m=n.height/2,v=e.height/2;l==="start"?(m=0,v=e.height):l==="end"&&(m=n.height,v=0),this.paddingTop=m+c,this.paddingBottom=v+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){We(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)Me(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=dm(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:o,_longestTextCache:l}=this,c=[],u=[],h=Math.floor(n/cm(n,i));let p=0,m=0,v,b,w,j,N,y,_,S,A,z,R;for(v=0;v<n;v+=h){if(j=e[v].label,N=this._resolveTickFontOptions(v),o.font=y=N.string,_=l[y]=l[y]||{data:{},gc:[]},S=N.lineHeight,A=z=0,!Me(j)&&!it(j))A=Ip(o,_.data,_.gc,A,j),z=S;else if(it(j))for(b=0,w=j.length;b<w;++b)R=j[b],!Me(R)&&!it(R)&&(A=Ip(o,_.data,_.gc,A,R),z+=S);c.push(A),u.push(z),p=Math.max(A,p),m=Math.max(z,m)}AN(l,n);const I=c.indexOf(p),M=u.indexOf(m),C=O=>({width:c[O]||0,height:u[O]||0});return{first:C(0),last:C(n-1),widest:C(I),highest:C(M),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return x1(this._alignToPixels?Os(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=DN(this.getContext(),e,i))}return this.$context||(this.$context=TN(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Bn(this.labelRotation),i=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),l=this._getLabelSizes(),c=e.autoSkipPadding||0,u=l?l.widest.width+c:0,h=l?l.highest.height+c:0;return this.isHorizontal()?h*i>u*o?u/i:h/o:h*o<u*i?h/i:u/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,o=this.options,{grid:l,position:c,border:u}=o,h=l.offset,p=this.isHorizontal(),v=this.ticks.length+(h?1:0),b=jr(l),w=[],j=u.setContext(this.getContext()),N=j.display?j.width:0,y=N/2,_=function(U){return Os(i,U,N)};let S,A,z,R,I,M,C,O,W,X,F,te;if(c==="top")S=_(this.bottom),M=this.bottom-b,O=S-y,X=_(e.top)+y,te=e.bottom;else if(c==="bottom")S=_(this.top),X=e.top,te=_(e.bottom)-y,M=S+y,O=this.top+b;else if(c==="left")S=_(this.right),I=this.right-b,C=S-y,W=_(e.left)+y,F=e.right;else if(c==="right")S=_(this.left),W=e.left,F=_(e.right)-y,I=S+y,C=this.left+b;else if(n==="x"){if(c==="center")S=_((e.top+e.bottom)/2+.5);else if(Ee(c)){const U=Object.keys(c)[0],ie=c[U];S=_(this.chart.scales[U].getPixelForValue(ie))}X=e.top,te=e.bottom,M=S+y,O=M+b}else if(n==="y"){if(c==="center")S=_((e.left+e.right)/2);else if(Ee(c)){const U=Object.keys(c)[0],ie=c[U];S=_(this.chart.scales[U].getPixelForValue(ie))}I=S-y,C=I-b,W=e.left,F=e.right}const V=ke(o.ticks.maxTicksLimit,v),ae=Math.max(1,Math.ceil(v/V));for(A=0;A<v;A+=ae){const U=this.getContext(A),ie=l.setContext(U),K=u.setContext(U),re=ie.lineWidth,G=ie.color,D=K.dash||[],Y=K.dashOffset,fe=ie.tickWidth,ve=ie.tickColor,be=ie.tickBorderDash||[],ye=ie.tickBorderDashOffset;z=PN(this,A,h),z!==void 0&&(R=Os(i,z,re),p?I=C=W=F=R:M=O=X=te=R,w.push({tx1:I,ty1:M,tx2:C,ty2:O,x1:W,y1:X,x2:F,y2:te,width:re,color:G,borderDash:D,borderDashOffset:Y,tickWidth:fe,tickColor:ve,tickBorderDash:be,tickBorderDashOffset:ye}))}return this._ticksLength=v,this._borderValue=S,w}_computeLabelItems(e){const n=this.axis,i=this.options,{position:o,ticks:l}=i,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:m,mirror:v}=l,b=jr(i.grid),w=b+m,j=v?-m:w,N=-Bn(this.labelRotation),y=[];let _,S,A,z,R,I,M,C,O,W,X,F,te="middle";if(o==="top")I=this.bottom-j,M=this._getXAxisLabelAlignment();else if(o==="bottom")I=this.top+j,M=this._getXAxisLabelAlignment();else if(o==="left"){const ae=this._getYAxisLabelAlignment(b);M=ae.textAlign,R=ae.x}else if(o==="right"){const ae=this._getYAxisLabelAlignment(b);M=ae.textAlign,R=ae.x}else if(n==="x"){if(o==="center")I=(e.top+e.bottom)/2+w;else if(Ee(o)){const ae=Object.keys(o)[0],U=o[ae];I=this.chart.scales[ae].getPixelForValue(U)+w}M=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")R=(e.left+e.right)/2-w;else if(Ee(o)){const ae=Object.keys(o)[0],U=o[ae];R=this.chart.scales[ae].getPixelForValue(U)}M=this._getYAxisLabelAlignment(b).textAlign}n==="y"&&(h==="start"?te="top":h==="end"&&(te="bottom"));const V=this._getLabelSizes();for(_=0,S=u.length;_<S;++_){A=u[_],z=A.label;const ae=l.setContext(this.getContext(_));C=this.getPixelForTick(_)+l.labelOffset,O=this._resolveTickFontOptions(_),W=O.lineHeight,X=it(z)?z.length:1;const U=X/2,ie=ae.color,K=ae.textStrokeColor,re=ae.textStrokeWidth;let G=M;c?(R=C,M==="inner"&&(_===S-1?G=this.options.reverse?"left":"right":_===0?G=this.options.reverse?"right":"left":G="center"),o==="top"?p==="near"||N!==0?F=-X*W+W/2:p==="center"?F=-V.highest.height/2-U*W+W:F=-V.highest.height+W/2:p==="near"||N!==0?F=W/2:p==="center"?F=V.highest.height/2-U*W:F=V.highest.height-X*W,v&&(F*=-1),N!==0&&!ae.showLabelBackdrop&&(R+=W/2*Math.sin(N))):(I=C,F=(1-X)*W/2);let D;if(ae.showLabelBackdrop){const Y=tn(ae.backdropPadding),fe=V.heights[_],ve=V.widths[_];let be=F-Y.top,ye=0-Y.left;switch(te){case"middle":be-=fe/2;break;case"bottom":be-=fe;break}switch(M){case"center":ye-=ve/2;break;case"right":ye-=ve;break;case"inner":_===S-1?ye-=ve:_>0&&(ye-=ve/2);break}D={left:ye,top:be,width:ve+Y.width,height:fe+Y.height,color:ae.backdropColor}}y.push({label:z,font:O,textOffset:F,options:{rotation:N,color:ie,strokeColor:K,strokeWidth:re,textAlign:G,textBaseline:te,translation:[R,I],backdrop:D}})}return y}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Bn(this.labelRotation))return e==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:o,padding:l}}=this.options,c=this._getLabelSizes(),u=e+l,h=c.widest.width;let p,m;return n==="left"?o?(m=this.right+l,i==="near"?p="left":i==="center"?(p="center",m+=h/2):(p="right",m+=h)):(m=this.right-u,i==="near"?p="right":i==="center"?(p="center",m-=h/2):(p="left",m=this.left)):n==="right"?o?(m=this.left+l,i==="near"?p="right":i==="center"?(p="center",m-=h/2):(p="left",m-=h)):(m=this.left+u,i==="near"?p="left":i==="center"?(p="center",m+=h/2):(p="right",m=this.right)):p="right",{textAlign:p,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:o,width:l,height:c}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,o,l,c),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(l=>l.value===e);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let l,c;const u=(h,p,m)=>{!m.width||!m.color||(i.save(),i.lineWidth=m.width,i.strokeStyle=m.color,i.setLineDash(m.borderDash||[]),i.lineDashOffset=m.borderDashOffset,i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(p.x,p.y),i.stroke(),i.restore())};if(n.display)for(l=0,c=o.length;l<c;++l){const h=o[l];n.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),n.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:o}}=this,l=i.setContext(this.getContext()),c=i.display?l.width:0;if(!c)return;const u=o.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,m,v,b;this.isHorizontal()?(p=Os(e,this.left,c)-c/2,m=Os(e,this.right,u)+u/2,v=b=h):(v=Os(e,this.top,c)-c/2,b=Os(e,this.bottom,u)+u/2,p=m=h),n.save(),n.lineWidth=l.width,n.strokeStyle=l.color,n.beginPath(),n.moveTo(p,v),n.lineTo(m,b),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,o=this._computeLabelArea();o&&Ko(i,o);const l=this.getLabelItems(e);for(const c of l){const u=c.options,h=c.font,p=c.label,m=c.textOffset;$r(i,p,0,m,h,u)}o&&Xo(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:o}}=this;if(!i.display)return;const l=kt(i.font),c=tn(i.padding),u=i.align;let h=l.lineHeight/2;n==="bottom"||n==="center"||Ee(n)?(h+=c.bottom,it(i.text)&&(h+=l.lineHeight*(i.text.length-1))):h+=c.top;const{titleX:p,titleY:m,maxWidth:v,rotation:b}=LN(this,h,n,u);$r(e,i.text,0,0,l,{color:i.color,maxWidth:v,rotation:b,textAlign:MN(u,n,o),textBaseline:"middle",translation:[p,m]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=ke(e.grid&&e.grid.z,-1),o=ke(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Ti.prototype.draw?[{z:n,draw:l=>{this.draw(l)}}]:[{z:i,draw:l=>{this.drawBackground(),this.drawGrid(l),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:l=>{this.drawLabels(l)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let l,c;for(l=0,c=n.length;l<c;++l){const u=n[l];u[i]===this.id&&(!e||u.type===e)&&o.push(u)}return o}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return kt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class vo{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;IN(n)&&(i=this.register(n));const o=this.items,l=e.id,c=this.scope+"."+l;if(!l)throw new Error("class does not have id: "+e);return l in o||(o[l]=e,ON(e,c,i),this.override&&et.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,o=this.scope;i in n&&delete n[i],o&&i in et[o]&&(delete et[o][i],this.override&&delete Ks[i])}}function ON(t,e,n){const i=Or(Object.create(null),[n?et.get(n):{},et.get(e),t.defaults]);et.set(e,i),t.defaultRoutes&&zN(e,t.defaultRoutes),t.descriptors&&et.describe(e,t.descriptors)}function zN(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),o=i.pop(),l=[t].concat(i).join("."),c=e[n].split("."),u=c.pop(),h=c.join(".");et.route(l,o,h,u)})}function IN(t){return"id"in t&&"defaults"in t}class FN{constructor(){this.controllers=new vo(qs,"datasets",!0),this.elements=new vo(un,"elements"),this.plugins=new vo(Object,"plugins"),this.scales=new vo(Ti,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(o=>{const l=i||this._getRegistryForType(o);i||l.isForType(o)||l===this.plugins&&o.id?this._exec(e,l,o):ze(o,c=>{const u=i||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,n,i){const o=Hd(e);We(i["before"+o],[],i),n[e](i),We(i["after"+o],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const o=n.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return o}}var Nn=new FN;class BN{constructor(){this._init=void 0}notify(e,n,i,o){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const l=o?this._descriptors(e).filter(o):this._descriptors(e),c=this._notify(l,e,n,i);return n==="afterDestroy"&&(this._notify(l,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,n,i,o){o=o||{};for(const l of e){const c=l.plugin,u=c[i],h=[n,o,l.options];if(We(u,h,c)===!1&&o.cancelable)return!1}return!0}invalidate(){Me(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,o=ke(i.options&&i.options.plugins,{}),l=$N(i);return o===!1&&!n?[]:WN(e,l,o,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,o=(l,c)=>l.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(o(n,i),e,"stop"),this._notify(o(i,n),e,"start")}}function $N(t){const e={},n=[],i=Object.keys(Nn.plugins.items);for(let l=0;l<i.length;l++)n.push(Nn.getPlugin(i[l]));const o=t.plugins||[];for(let l=0;l<o.length;l++){const c=o[l];n.indexOf(c)===-1&&(n.push(c),e[c.id]=!0)}return{plugins:n,localIds:e}}function UN(t,e){return!e&&t===!1?null:t===!0?{}:t}function WN(t,{plugins:e,localIds:n},i,o){const l=[],c=t.getContext();for(const u of e){const h=u.id,p=UN(i[h],o);p!==null&&l.push({plugin:u,options:HN(t.config,{plugin:u,local:n[h]},p,c)})}return l}function HN(t,{plugin:e,local:n},i,o){const l=t.pluginScopeKeys(e),c=t.getOptionScopes(i,l);return n&&e.defaults&&c.push(e.defaults),t.createResolver(c,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Sd(t,e){const n=et.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function VN(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function qN(t,e){return t===e?"_index_":"_value_"}function hm(t){if(t==="x"||t==="y"||t==="r")return t}function YN(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Cd(t,...e){if(hm(t))return t;for(const n of e){const i=n.axis||YN(n.position)||t.length>1&&hm(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function fm(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function QN(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return fm(t,"x",n[0])||fm(t,"y",n[0])}return{}}function KN(t,e){const n=Ks[t.type]||{scales:{}},i=e.scales||{},o=Sd(t.type,e),l=Object.create(null);return Object.keys(i).forEach(c=>{const u=i[c];if(!Ee(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=Cd(c,u,QN(c,t),et.scales[u.type]),p=qN(h,o),m=n.scales||{};l[c]=Er(Object.create(null),[{axis:h},u,m[h],m[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||Sd(u,e),m=(Ks[u]||{}).scales||{};Object.keys(m).forEach(v=>{const b=VN(v,h),w=c[b+"AxisID"]||b;l[w]=l[w]||Object.create(null),Er(l[w],[{axis:b},i[w],m[v]])})}),Object.keys(l).forEach(c=>{const u=l[c];Er(u,[et.scales[u.type],et.scale])}),l}function ux(t){const e=t.options||(t.options={});e.plugins=ke(e.plugins,{}),e.scales=KN(t,e)}function hx(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function XN(t){return t=t||{},t.data=hx(t.data),ux(t),t}const pm=new Map,fx=new Set;function yo(t,e){let n=pm.get(t);return n||(n=e(),pm.set(t,n),fx.add(n)),n}const wr=(t,e,n)=>{const i=Qs(e,n);i!==void 0&&t.add(i)};class GN{constructor(e){this._config=XN(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=hx(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),ux(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return yo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return yo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return yo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return yo(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let o=i.get(e);return(!o||n)&&(o=new Map,i.set(e,o)),o}getOptionScopes(e,n,i){const{options:o,type:l}=this,c=this._cachedScopes(e,i),u=c.get(n);if(u)return u;const h=new Set;n.forEach(m=>{e&&(h.add(e),m.forEach(v=>wr(h,e,v))),m.forEach(v=>wr(h,o,v)),m.forEach(v=>wr(h,Ks[l]||{},v)),m.forEach(v=>wr(h,et,v)),m.forEach(v=>wr(h,_d,v))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),fx.has(n)&&c.set(n,p),p}chartOptionScopes(){const{options:e,type:n}=this;return[e,Ks[n]||{},et.datasets[n]||{},{type:n},et,_d]}resolveNamedOptions(e,n,i,o=[""]){const l={$shared:!0},{resolver:c,subPrefixes:u}=mm(this._resolverCache,e,o);let h=c;if(ZN(c,n)){l.$shared=!1,i=xs(i)?i():i;const p=this.createResolver(e,i,u);h=Ei(c,i,p)}for(const p of n)l[p]=h[p];return l}createResolver(e,n,i=[""],o){const{resolver:l}=mm(this._resolverCache,e,i);return Ee(n)?Ei(l,n,void 0,o):l}}function mm(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const o=n.join();let l=i.get(o);return l||(l={resolver:Xd(e,n),subPrefixes:n.filter(u=>!u.toLowerCase().includes("hover"))},i.set(o,l)),l}const JN=t=>Ee(t)&&Object.getOwnPropertyNames(t).some(e=>xs(t[e]));function ZN(t,e){const{isScriptable:n,isIndexable:i}=qg(t);for(const o of e){const l=n(o),c=i(o),u=(c||l)&&t[o];if(l&&(xs(u)||JN(u))||c&&it(u))return!0}return!1}var e_="4.5.1";const t_=["top","bottom","left","right","chartArea"];function gm(t,e){return t==="top"||t==="bottom"||t_.indexOf(t)===-1&&e==="x"}function xm(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function vm(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),We(n&&n.onComplete,[t],e)}function n_(t){const e=t.chart,n=e.options.animation;We(n&&n.onProgress,[t],e)}function px(t){return Zd()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Eo={},ym=t=>{const e=px(t);return Object.values(Eo).filter(n=>n.canvas===e).pop()};function s_(t,e,n){const i=Object.keys(t);for(const o of i){const l=+o;if(l>=e){const c=t[o];delete t[o],(n>0||l>e)&&(t[l+n]=c)}}}function i_(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}var ds;let Xr=(ds=class{static register(...e){Nn.add(...e),bm()}static unregister(...e){Nn.remove(...e),bm()}constructor(e,n){const i=this.config=new GN(n),o=px(e),l=ym(o);if(l)throw new Error("Canvas is already in use. Chart with ID '"+l.id+"' must be destroyed before the canvas with ID '"+l.canvas.id+"' can be reused.");const c=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||wN(o)),this.platform.updateConfig(i);const u=this.platform.acquireContext(o,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,m=h&&h.width;if(this.id=n1(),this.ctx=u,this.canvas=h,this.width=m,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new BN,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=j1(v=>this.update(v),c.resizeDelay||0),this._dataChanges=[],Eo[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}zn.listen(this,"complete",vm),zn.listen(this,"progress",n_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:o,_aspectRatio:l}=this;return Me(e)?n&&l?l:o?i/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Nn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Up(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Fp(this.canvas,this.ctx),this}stop(){return zn.stop(this),this}resize(e,n){zn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,o=this.canvas,l=i.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(o,e,n,l),u=i.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Up(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),We(i.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};ze(n,(i,o)=>{i.id=o})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,o=Object.keys(i).reduce((c,u)=>(c[u]=!1,c),{});let l=[];n&&(l=l.concat(Object.keys(n).map(c=>{const u=n[c],h=Cd(c,u),p=h==="r",m=h==="x";return{options:u,dposition:p?"chartArea":m?"bottom":"left",dtype:p?"radialLinear":m?"category":"linear"}}))),ze(l,c=>{const u=c.options,h=u.id,p=Cd(h,u),m=ke(u.type,c.dtype);(u.position===void 0||gm(u.position,p)!==gm(c.dposition))&&(u.position=c.dposition),o[h]=!0;let v=null;if(h in i&&i[h].type===m)v=i[h];else{const b=Nn.getScale(m);v=new b({id:h,type:m,ctx:this.ctx,chart:this}),i[v.id]=v}v.init(u,e)}),ze(o,(c,u)=>{c||delete i[u]}),ze(i,c=>{en.configure(this,c,c.options),en.addBox(this,c)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((o,l)=>o.index-l.index),i>n){for(let o=n;o<i;++o)this._destroyDatasetMeta(o);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(xm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,o)=>{n.filter(l=>l===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=n.length;i<o;i++){const l=n[i];let c=this.getDatasetMeta(i);const u=l.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(i),c=this.getDatasetMeta(i)),c.type=u,c.indexAxis=l.indexAxis||Sd(u,this.options),c.order=l.order||0,c.index=i,c.label=""+l.label,c.visible=this.isDatasetVisible(i),c.controller)c.controller.updateIndex(i),c.controller.linkScales();else{const h=Nn.getController(u),{datasetElementType:p,dataElementType:m}=et.datasets[u];Object.assign(h,{dataElementType:Nn.getElement(m),datasetElementType:p&&Nn.getElement(p)}),c.controller=new h(this,i),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){ze(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const l=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,m=this.data.datasets.length;p<m;p++){const{controller:v}=this.getDatasetMeta(p),b=!o&&l.indexOf(v)===-1;v.buildOrUpdateElements(b),c=Math.max(+v.getMaxOverflow(),c)}c=this._minPadding=i.layout.autoPadding?c:0,this._updateLayout(c),o||ze(l,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(xm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){ze(this.scales,e=>{en.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!Rp(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:l}of n){const c=i==="_removeElements"?-l:l;s_(e,o,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=l=>new Set(e.filter(c=>c[0]===l).map((c,u)=>u+","+c.splice(1).join(","))),o=i(0);for(let l=1;l<n;l++)if(!Rp(o,i(l)))return;return Array.from(o).map(l=>l.split(",")).map(l=>({method:l[1],start:+l[2],count:+l[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;en.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],ze(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,l)=>{o._idx=l}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,xs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),o={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(zn.has(this)?this.attached&&!zn.running(this)&&zn.start(this):(this.draw(),vm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let o,l;for(o=0,l=n.length;o<l;++o){const c=n[o];(!e||c.visible)&&i.push(c)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i={meta:e,index:e.index,cancelable:!0},o=nx(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&Ko(n,o),e.controller.draw(),o&&Xo(n),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return Br(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,o){const l=tN.modes[n];return typeof l=="function"?l(this,e,i,o):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let o=i.filter(l=>l&&l._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=Gs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const o=i?"show":"hide",l=this.getDatasetMeta(e),c=l.controller._resolveAnimations(void 0,o);zr(n)?(l.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),c.update(l,{visible:i}),this.update(u=>u.datasetIndex===e?o:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),zn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Fp(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Eo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},o=(l,c,u)=>{l.offsetX=c,l.offsetY=u,this._eventHandler(l)};ze(this.options.events,l=>i(l,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(h,p)=>{n.addEventListener(this,h,p),e[h]=p},o=(h,p)=>{e[h]&&(n.removeEventListener(this,h,p),delete e[h])},l=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{o("attach",u),this.attached=!0,this.resize(),i("resize",l),i("detach",c)};c=()=>{this.attached=!1,o("resize",l),this._stop(),this._resize(0,0),i("attach",u)},n.isAttached(this.canvas)?u():c()}unbindEvents(){ze(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},ze(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const o=i?"set":"remove";let l,c,u,h;for(n==="dataset"&&(l=this.getDatasetMeta(e[0].datasetIndex),l.controller["_"+o+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[o+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:l,index:c})=>{const u=this.getDatasetMeta(l);if(!u)throw new Error("No dataset found at index "+l);return{datasetIndex:l,element:u.data[c],index:c}});!To(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const o=this.options.hover,l=(h,p)=>h.filter(m=>!p.some(v=>m.datasetIndex===v.datasetIndex&&m.index===v.index)),c=l(n,e),u=i?e:l(e,n);c.length&&this.updateHoverStyle(c,o.mode,!1),u.length&&o.mode&&this.updateHoverStyle(u,o.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},o=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;const l=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(l||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:o=[],options:l}=this,c=n,u=this._getActiveElements(e,o,i,c),h=l1(e),p=i_(e,this._lastEvent,i,h);i&&(this._lastEvent=null,We(l.onHover,[e,u,this],this),h&&We(l.onClick,[e,u,this],this));const m=!To(u,o);return(m||n)&&(this._active=u,this._updateHoverStyles(u,o,n)),this._lastEvent=p,m}_getActiveElements(e,n,i,o){if(e.type==="mouseout")return[];if(!i)return n;const l=this.options.hover;return this.getElementsAtEventForMode(e,l.mode,l,o)}},me(ds,"defaults",et),me(ds,"instances",Eo),me(ds,"overrides",Ks),me(ds,"registry",Nn),me(ds,"version",e_),me(ds,"getChart",ym),ds);function bm(){return ze(Xr.instances,t=>t._plugins.invalidate())}function r_(t,e,n){const{startAngle:i,x:o,y:l,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:m}=h,v=Math.min(p/c,Vt(i-n));if(t.beginPath(),t.arc(o,l,c-p/2,i+v/2,n-v/2),u>0){const b=Math.min(p/u,Vt(i-n));t.arc(o,l,u+p/2,n-b/2,i+b/2,!0)}else{const b=Math.min(p/2,c*Vt(i-n));if(m==="round")t.arc(o,l,b,n-Ie/2,i+Ie/2,!0);else if(m==="bevel"){const w=2*b*b,j=-w*Math.cos(n+Ie/2)+o,N=-w*Math.sin(n+Ie/2)+l,y=w*Math.cos(i+Ie/2)+o,_=w*Math.sin(i+Ie/2)+l;t.lineTo(j,N),t.lineTo(y,_)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function a_(t,e,n){const{startAngle:i,pixelMargin:o,x:l,y:c,outerRadius:u,innerRadius:h}=e;let p=o/u;t.beginPath(),t.arc(l,c,u,i-p,n+p),h>o?(p=o/h,t.arc(l,c,h,n+p,i-p,!0)):t.arc(l,c,o,n+lt,i-lt),t.closePath(),t.clip()}function o_(t){return Kd(t,["outerStart","outerEnd","innerStart","innerEnd"])}function l_(t,e,n,i){const o=o_(t.options.borderRadius),l=(n-e)/2,c=Math.min(l,i*e/2),u=h=>{const p=(n-Math.min(l,h))*i/2;return _t(h,0,Math.min(l,p))};return{outerStart:u(o.outerStart),outerEnd:u(o.outerEnd),innerStart:_t(o.innerStart,0,c),innerEnd:_t(o.innerEnd,0,c)}}function _i(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Io(t,e,n,i,o,l){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:m}=e,v=Math.max(e.outerRadius+i+n-p,0),b=m>0?m+i+n+p:0;let w=0;const j=o-h;if(i){const ae=m>0?m-i:0,U=v>0?v-i:0,ie=(ae+U)/2,K=ie!==0?j*ie/(ie+i):j;w=(j-K)/2}const N=Math.max(.001,j*v-n/Ie)/v,y=(j-N)/2,_=h+y+w,S=o-y-w,{outerStart:A,outerEnd:z,innerStart:R,innerEnd:I}=l_(e,b,v,S-_),M=v-A,C=v-z,O=_+A/M,W=S-z/C,X=b+R,F=b+I,te=_+R/X,V=S-I/F;if(t.beginPath(),l){const ae=(O+W)/2;if(t.arc(c,u,v,O,ae),t.arc(c,u,v,ae,W),z>0){const re=_i(C,W,c,u);t.arc(re.x,re.y,z,W,S+lt)}const U=_i(F,S,c,u);if(t.lineTo(U.x,U.y),I>0){const re=_i(F,V,c,u);t.arc(re.x,re.y,I,S+lt,V+Math.PI)}const ie=(S-I/b+(_+R/b))/2;if(t.arc(c,u,b,S-I/b,ie,!0),t.arc(c,u,b,ie,_+R/b,!0),R>0){const re=_i(X,te,c,u);t.arc(re.x,re.y,R,te+Math.PI,_-lt)}const K=_i(M,_,c,u);if(t.lineTo(K.x,K.y),A>0){const re=_i(M,O,c,u);t.arc(re.x,re.y,A,_-lt,O)}}else{t.moveTo(c,u);const ae=Math.cos(O)*v+c,U=Math.sin(O)*v+u;t.lineTo(ae,U);const ie=Math.cos(W)*v+c,K=Math.sin(W)*v+u;t.lineTo(ie,K)}t.closePath()}function c_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u}=e;let h=e.endAngle;if(l){Io(t,e,n,i,h,o);for(let p=0;p<l;++p)t.fill();isNaN(u)||(h=c+(u%Ye||Ye))}return Io(t,e,n,i,h,o),t.fill(),h}function d_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:m,borderDash:v,borderDashOffset:b,borderRadius:w}=h,j=h.borderAlign==="inner";if(!p)return;t.setLineDash(v||[]),t.lineDashOffset=b,j?(t.lineWidth=p*2,t.lineJoin=m||"round"):(t.lineWidth=p,t.lineJoin=m||"bevel");let N=e.endAngle;if(l){Io(t,e,n,i,N,o);for(let y=0;y<l;++y)t.stroke();isNaN(u)||(N=c+(u%Ye||Ye))}j&&a_(t,e,N),h.selfJoin&&N-c>=Ie&&w===0&&m!=="miter"&&r_(t,e,N),l||(Io(t,e,n,i,N,o),t.stroke())}class Sr extends un{constructor(n){super();me(this,"circumference");me(this,"endAngle");me(this,"fullCircles");me(this,"innerRadius");me(this,"outerRadius");me(this,"pixelMargin");me(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.getProps(["x","y"],o),{angle:c,distance:u}=Ig(l,{x:n,y:i}),{startAngle:h,endAngle:p,innerRadius:m,outerRadius:v,circumference:b}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),w=(this.options.spacing+this.options.borderWidth)/2,j=ke(b,p-h),N=Fr(c,h,p)&&h!==p,y=j>=Ye||N,_=$n(u,m+w,v+w);return y&&_}getCenterPoint(n){const{x:i,y:o,startAngle:l,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:p,spacing:m}=this.options,v=(l+c)/2,b=(u+h+m+p)/2;return{x:i+Math.cos(v)*b,y:o+Math.sin(v)*b}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:o}=this,l=(i.offset||0)/4,c=(i.spacing||0)/2,u=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>Ye?Math.floor(o/Ye):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const h=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(h)*l,Math.sin(h)*l);const p=1-Math.sin(Math.min(Ie,o||0)),m=l*p;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,c_(n,this,m,c,u),d_(n,this,m,c,u),n.restore()}}me(Sr,"id","arc"),me(Sr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),me(Sr,"defaultRoutes",{backgroundColor:"backgroundColor"}),me(Sr,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function mx(t,e,n=e){t.lineCap=ke(n.borderCapStyle,e.borderCapStyle),t.setLineDash(ke(n.borderDash,e.borderDash)),t.lineDashOffset=ke(n.borderDashOffset,e.borderDashOffset),t.lineJoin=ke(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ke(n.borderWidth,e.borderWidth),t.strokeStyle=ke(n.borderColor,e.borderColor)}function u_(t,e,n){t.lineTo(n.x,n.y)}function h_(t){return t.stepped?L1:t.tension||t.cubicInterpolationMode==="monotone"?O1:u_}function gx(t,e,n={}){const i=t.length,{start:o=0,end:l=i-1}=n,{start:c,end:u}=e,h=Math.max(o,c),p=Math.min(l,u),m=o<c&&l<c||o>u&&l>u;return{count:i,start:h,loop:e.loop,ilen:p<h&&!m?i+p-h:p-h}}function f_(t,e,n,i){const{points:o,options:l}=e,{count:c,start:u,loop:h,ilen:p}=gx(o,n,i),m=h_(l);let{move:v=!0,reverse:b}=i||{},w,j,N;for(w=0;w<=p;++w)j=o[(u+(b?p-w:w))%c],!j.skip&&(v?(t.moveTo(j.x,j.y),v=!1):m(t,N,j,b,l.stepped),N=j);return h&&(j=o[(u+(b?p:0))%c],m(t,N,j,b,l.stepped)),!!h}function p_(t,e,n,i){const o=e.points,{count:l,start:c,ilen:u}=gx(o,n,i),{move:h=!0,reverse:p}=i||{};let m=0,v=0,b,w,j,N,y,_;const S=z=>(c+(p?u-z:z))%l,A=()=>{N!==y&&(t.lineTo(m,y),t.lineTo(m,N),t.lineTo(m,_))};for(h&&(w=o[S(0)],t.moveTo(w.x,w.y)),b=0;b<=u;++b){if(w=o[S(b)],w.skip)continue;const z=w.x,R=w.y,I=z|0;I===j?(R<N?N=R:R>y&&(y=R),m=(v*m+z)/++v):(A(),t.lineTo(z,R),j=I,v=0,N=y=R),_=R}A()}function Ed(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?p_:f_}function m_(t){return t.stepped?pw:t.tension||t.cubicInterpolationMode==="monotone"?mw:$s}function g_(t,e,n,i){let o=e._path;o||(o=e._path=new Path2D,e.path(o,n,i)&&o.closePath()),mx(t,e.options),t.stroke(o)}function x_(t,e,n,i){const{segments:o,options:l}=e,c=Ed(e);for(const u of o)mx(t,l,u.style),t.beginPath(),c(t,e,u,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const v_=typeof Path2D=="function";function y_(t,e,n,i){v_&&!e.options.segment?g_(t,e,n,i):x_(t,e,n,i)}class Un extends un{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;aw(this._points,i,e,o,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=jw(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,o=e[n],l=this.points,c=tx(this,{property:n,start:o,end:o});if(!c.length)return;const u=[],h=m_(i);let p,m;for(p=0,m=c.length;p<m;++p){const{start:v,end:b}=c[p],w=l[v],j=l[b];if(w===j){u.push(w);continue}const N=Math.abs((o-w[n])/(j[n]-w[n])),y=h(w,j,N,i.stepped);y[n]=e[n],u.push(y)}return u.length===1?u[0]:u}pathSegment(e,n,i){return Ed(this)(e,this,n,i)}path(e,n,i){const o=this.segments,l=Ed(this);let c=this._loop;n=n||0,i=i||this.points.length-n;for(const u of o)c&=l(e,this,u,{start:n,end:n+i-1});return!!c}draw(e,n,i,o){const l=this.options||{};(this.points||[]).length&&l.borderWidth&&(e.save(),y_(e,this,i,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}me(Un,"id","line"),me(Un,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),me(Un,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),me(Un,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function jm(t,e,n,i){const o=t.options,{[n]:l}=t.getProps([n],i);return Math.abs(e-l)<o.radius+o.hitRadius}class Tr extends un{constructor(n){super();me(this,"parsed");me(this,"skip");me(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.options,{x:c,y:u}=this.getProps(["x","y"],o);return Math.pow(n-c,2)+Math.pow(i-u,2)<Math.pow(l.hitRadius+l.radius,2)}inXRange(n,i){return jm(this,n,"x",i)}inYRange(n,i){return jm(this,n,"y",i)}getCenterPoint(n){const{x:i,y:o}=this.getProps(["x","y"],n);return{x:i,y:o}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const o=i&&n.borderWidth||0;return(i+o)*2}draw(n,i){const o=this.options;this.skip||o.radius<.1||!Br(this,i,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,kd(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}me(Tr,"id","point"),me(Tr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),me(Tr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function xx(t,e){const{x:n,y:i,base:o,width:l,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,m,v;return t.horizontal?(v=c/2,u=Math.min(n,o),h=Math.max(n,o),p=i-v,m=i+v):(v=l/2,u=n-v,h=n+v,p=Math.min(i,o),m=Math.max(i,o)),{left:u,top:p,right:h,bottom:m}}function ps(t,e,n,i){return t?0:_t(e,n,i)}function b_(t,e,n){const i=t.options.borderWidth,o=t.borderSkipped,l=Vg(i);return{t:ps(o.top,l.top,0,n),r:ps(o.right,l.right,0,e),b:ps(o.bottom,l.bottom,0,n),l:ps(o.left,l.left,0,e)}}function j_(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,l=ki(o),c=Math.min(e,n),u=t.borderSkipped,h=i||Ee(o);return{topLeft:ps(!h||u.top||u.left,l.topLeft,0,c),topRight:ps(!h||u.top||u.right,l.topRight,0,c),bottomLeft:ps(!h||u.bottom||u.left,l.bottomLeft,0,c),bottomRight:ps(!h||u.bottom||u.right,l.bottomRight,0,c)}}function w_(t){const e=xx(t),n=e.right-e.left,i=e.bottom-e.top,o=b_(t,n/2,i/2),l=j_(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:l},inner:{x:e.left+o.l,y:e.top+o.t,w:n-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,l.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,l.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,l.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,l.bottomRight-Math.max(o.b,o.r))}}}}function dd(t,e,n,i){const o=e===null,l=n===null,u=t&&!(o&&l)&&xx(t,i);return u&&(o||$n(e,u.left,u.right))&&(l||$n(n,u.top,u.bottom))}function N_(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function __(t,e){t.rect(e.x,e.y,e.w,e.h)}function ud(t,e,n={}){const i=t.x!==n.x?-e:0,o=t.y!==n.y?-e:0,l=(t.x+t.w!==n.x+n.w?e:0)-i,c=(t.y+t.h!==n.y+n.h?e:0)-o;return{x:t.x+i,y:t.y+o,w:t.w+l,h:t.h+c,radius:t.radius}}class Ro extends un{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:o}}=this,{inner:l,outer:c}=w_(this),u=N_(c.radius)?Lo:__;e.save(),(c.w!==l.w||c.h!==l.h)&&(e.beginPath(),u(e,ud(c,n,l)),e.clip(),u(e,ud(l,-n,c)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),u(e,ud(l,n)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,n,i){return dd(this,e,n,i)}inXRange(e,n){return dd(this,e,null,n)}inYRange(e,n){return dd(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:o,horizontal:l}=this.getProps(["x","y","base","horizontal"],e);return{x:l?(n+o)/2:n,y:l?i:(i+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}me(Ro,"id","bar"),me(Ro,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),me(Ro,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function k_(t,e,n){const i=t.segments,o=t.points,l=e.points,c=[];for(const u of i){let{start:h,end:p}=u;p=Zo(h,p,o);const m=Rd(n,o[h],o[p],u.loop);if(!e.segments){c.push({source:u,target:m,start:o[h],end:o[p]});continue}const v=tx(e,m);for(const b of v){const w=Rd(n,l[b.start],l[b.end],b.loop),j=ex(u,o,w);for(const N of j)c.push({source:N,target:b,start:{[n]:wm(m,w,"start",Math.max)},end:{[n]:wm(m,w,"end",Math.min)}})}}return c}function Rd(t,e,n,i){if(i)return;let o=e[t],l=n[t];return t==="angle"&&(o=Vt(o),l=Vt(l)),{property:t,start:o,end:l}}function S_(t,e){const{x:n=null,y:i=null}=t||{},o=e.points,l=[];return e.segments.forEach(({start:c,end:u})=>{u=Zo(c,u,o);const h=o[c],p=o[u];i!==null?(l.push({x:h.x,y:i}),l.push({x:p.x,y:i})):n!==null&&(l.push({x:n,y:h.y}),l.push({x:n,y:p.y}))}),l}function Zo(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function wm(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function vx(t,e){let n=[],i=!1;return it(t)?(i=!0,n=t):n=S_(t,e),n.length?new Un({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function Nm(t){return t&&t.fill!==!1}function C_(t,e,n){let o=t[e].fill;const l=[e];let c;if(!n)return o;for(;o!==!1&&l.indexOf(o)===-1;){if(!St(o))return o;if(c=t[o],!c)return!1;if(c.visible)return o;l.push(o),o=c.fill}return!1}function E_(t,e,n){const i=T_(t);if(Ee(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return St(o)&&Math.floor(o)===o?R_(i[0],e,o,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function R_(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function P_(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Ee(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function A_(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:Ee(t)?i=t.value:i=e.getBaseValue(),i}function T_(t){const e=t.options,n=e.fill;let i=ke(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function D_(t){const{scale:e,index:n,line:i}=t,o=[],l=i.segments,c=i.points,u=M_(e,n);u.push(vx({x:null,y:e.bottom},i));for(let h=0;h<l.length;h++){const p=l[h];for(let m=p.start;m<=p.end;m++)L_(o,c[m],u)}return new Un({points:o,options:{}})}function M_(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){const l=i[o];if(l.index===e)break;l.hidden||n.unshift(l.dataset)}return n}function L_(t,e,n){const i=[];for(let o=0;o<n.length;o++){const l=n[o],{first:c,last:u,point:h}=O_(l,e,"x");if(!(!h||c&&u)){if(c)i.unshift(h);else if(t.push(h),!u)break}}t.push(...i)}function O_(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const o=i[n],l=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<l.length;p++){const m=l[p],v=c[m.start][n],b=c[m.end][n];if($n(o,v,b)){u=o===v,h=o===b;break}}return{first:u,last:h,point:i}}class yx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:o,y:l,radius:c}=this;return n=n||{start:0,end:Ye},e.arc(o,l,c,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:o}=this,l=e.angle;return{x:n+Math.cos(l)*o,y:i+Math.sin(l)*o,angle:l}}}function z_(t){const{chart:e,fill:n,line:i}=t;if(St(n))return I_(e,n);if(n==="stack")return D_(t);if(n==="shape")return!0;const o=F_(t);return o instanceof yx?o:vx(o,i)}function I_(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function F_(t){return(t.scale||{}).getPointPositionForValue?$_(t):B_(t)}function B_(t){const{scale:e={},fill:n}=t,i=P_(n,e);if(St(i)){const o=e.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function $_(t){const{scale:e,fill:n}=t,i=e.options,o=e.getLabels().length,l=i.reverse?e.max:e.min,c=A_(n,e,l),u=[];if(i.grid.circular){const h=e.getPointPositionForValue(0,l);return new yx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<o;++h)u.push(e.getPointPositionForValue(h,c));return u}function hd(t,e,n){const i=z_(e),{chart:o,index:l,line:c,scale:u,axis:h}=e,p=c.options,m=p.fill,v=p.backgroundColor,{above:b=v,below:w=v}=m||{},j=o.getDatasetMeta(l),N=nx(o,j);i&&c.points.length&&(Ko(t,n),U_(t,{line:c,target:i,above:b,below:w,area:n,scale:u,axis:h,clip:N}),Xo(t))}function U_(t,e){const{line:n,target:i,above:o,below:l,area:c,scale:u,clip:h}=e,p=n._loop?"angle":e.axis;t.save();let m=l;l!==o&&(p==="x"?(_m(t,i,c.top),fd(t,{line:n,target:i,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),_m(t,i,c.bottom)):p==="y"&&(km(t,i,c.left),fd(t,{line:n,target:i,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),km(t,i,c.right),m=o)),fd(t,{line:n,target:i,color:m,scale:u,property:p,clip:h}),t.restore()}function _m(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,m=o[h],v=o[Zo(h,p,o)];l?(t.moveTo(m.x,m.y),l=!1):(t.lineTo(m.x,n),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(v.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function km(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,m=o[h],v=o[Zo(h,p,o)];l?(t.moveTo(m.x,m.y),l=!1):(t.lineTo(n,m.y),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(n,v.y)}t.lineTo(n,e.first().y),t.closePath(),t.clip()}function fd(t,e){const{line:n,target:i,property:o,color:l,scale:c,clip:u}=e,h=k_(n,i,o);for(const{source:p,target:m,start:v,end:b}of h){const{style:{backgroundColor:w=l}={}}=p,j=i!==!0;t.save(),t.fillStyle=w,W_(t,c,u,j&&Rd(o,v,b)),t.beginPath();const N=!!n.pathSegment(t,p);let y;if(j){N?t.closePath():Sm(t,i,b,o);const _=!!i.pathSegment(t,m,{move:N,reverse:!0});y=N&&_,y||Sm(t,i,v,o)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function W_(t,e,n,i){const o=e.chart.chartArea,{property:l,start:c,end:u}=i||{};if(l==="x"||l==="y"){let h,p,m,v;l==="x"?(h=c,p=o.top,m=u,v=o.bottom):(h=o.left,p=c,m=o.right,v=u),t.beginPath(),n&&(h=Math.max(h,n.left),m=Math.min(m,n.right),p=Math.max(p,n.top),v=Math.min(v,n.bottom)),t.rect(h,p,m-h,v-p),t.clip()}}function Sm(t,e,n,i){const o=e.interpolate(n,i);o&&t.lineTo(o.x,o.y)}var bx={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,o=[];let l,c,u,h;for(c=0;c<i;++c)l=t.getDatasetMeta(c),u=l.dataset,h=null,u&&u.options&&u instanceof Un&&(h={visible:t.isDatasetVisible(c),index:c,fill:E_(u,c,i),chart:t,axis:l.controller.options.indexAxis,scale:l.vScale,line:u}),l.$filler=h,o.push(h);for(c=0;c<i;++c)h=o[c],!(!h||h.fill===!1)&&(h.fill=C_(o,c,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),l=t.chartArea;for(let c=o.length-1;c>=0;--c){const u=o[c].$filler;u&&(u.line.updateControlPoints(l,u.axis),i&&u.fill&&hd(t.ctx,u,l))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){const l=i[o].$filler;Nm(l)&&hd(t.ctx,l,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!Nm(i)||n.drawTime!=="beforeDatasetDraw"||hd(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Cm=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},H_=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Em extends un{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=We(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,o)=>e.sort(i,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,o=kt(i.font),l=o.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Cm(i,l);let p,m;n.font=o.string,this.isHorizontal()?(p=this.maxWidth,m=this._fitRows(c,l,u,h)+10):(m=this.maxHeight,p=this._fitCols(c,o,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(m,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,o){const{ctx:l,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],m=o+u;let v=e;l.textAlign="left",l.textBaseline="middle";let b=-1,w=-m;return this.legendItems.forEach((j,N)=>{const y=i+n/2+l.measureText(j.text).width;(N===0||p[p.length-1]+y+2*u>c)&&(v+=m,p[p.length-(N>0?0:1)]=0,w+=m,b++),h[N]={left:0,top:w,row:b,width:y,height:o},p[p.length-1]+=y+u}),v}_fitCols(e,n,i,o){const{ctx:l,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],m=c-e;let v=u,b=0,w=0,j=0,N=0;return this.legendItems.forEach((y,_)=>{const{itemWidth:S,itemHeight:A}=V_(i,n,l,y,o);_>0&&w+A+2*u>m&&(v+=b+u,p.push({width:b,height:w}),j+=b+u,N++,b=w=0),h[_]={left:j,top:w,col:N,width:S,height:A},b=Math.max(b,S),w+=A+u}),v+=b,p.push({width:b,height:w}),v}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:o},rtl:l}}=this,c=Si(l,this.left,this.width);if(this.isHorizontal()){let u=0,h=wt(i,this.left+o,this.right-this.lineWidths[u]);for(const p of n)u!==p.row&&(u=p.row,h=wt(i,this.left+o,this.right-this.lineWidths[u])),p.top+=this.top+e+o,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+o}else{let u=0,h=wt(i,this.top+e+o,this.bottom-this.columnSizes[u].height);for(const p of n)p.col!==u&&(u=p.col,h=wt(i,this.top+e+o,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+o,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Ko(e,this),this._draw(),Xo(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:o}=this,{align:l,labels:c}=e,u=et.color,h=Si(e.rtl,this.left,this.width),p=kt(c.font),{padding:m}=c,v=p.size,b=v/2;let w;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=p.string;const{boxWidth:j,boxHeight:N,itemHeight:y}=Cm(c,v),_=function(I,M,C){if(isNaN(j)||j<=0||isNaN(N)||N<0)return;o.save();const O=ke(C.lineWidth,1);if(o.fillStyle=ke(C.fillStyle,u),o.lineCap=ke(C.lineCap,"butt"),o.lineDashOffset=ke(C.lineDashOffset,0),o.lineJoin=ke(C.lineJoin,"miter"),o.lineWidth=O,o.strokeStyle=ke(C.strokeStyle,u),o.setLineDash(ke(C.lineDash,[])),c.usePointStyle){const W={radius:N*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:O},X=h.xPlus(I,j/2),F=M+b;Hg(o,W,X,F,c.pointStyleWidth&&j)}else{const W=M+Math.max((v-N)/2,0),X=h.leftForLtr(I,j),F=ki(C.borderRadius);o.beginPath(),Object.values(F).some(te=>te!==0)?Lo(o,{x:X,y:W,w:j,h:N,radius:F}):o.rect(X,W,j,N),o.fill(),O!==0&&o.stroke()}o.restore()},S=function(I,M,C){$r(o,C.text,I,M+y/2,p,{strikethrough:C.hidden,textAlign:h.textAlign(C.textAlign)})},A=this.isHorizontal(),z=this._computeTitleHeight();A?w={x:wt(l,this.left+m,this.right-i[0]),y:this.top+m+z,line:0}:w={x:this.left+m,y:wt(l,this.top+z+m,this.bottom-n[0].height),line:0},Gg(this.ctx,e.textDirection);const R=y+m;this.legendItems.forEach((I,M)=>{o.strokeStyle=I.fontColor,o.fillStyle=I.fontColor;const C=o.measureText(I.text).width,O=h.textAlign(I.textAlign||(I.textAlign=c.textAlign)),W=j+b+C;let X=w.x,F=w.y;h.setWidth(this.width),A?M>0&&X+W+m>this.right&&(F=w.y+=R,w.line++,X=w.x=wt(l,this.left+m,this.right-i[w.line])):M>0&&F+R>this.bottom&&(X=w.x=X+n[w.line].width+m,w.line++,F=w.y=wt(l,this.top+z+m,this.bottom-n[w.line].height));const te=h.x(X);if(_(te,F,I),X=w1(O,X+j+b,A?X+W:this.right,e.rtl),S(h.x(X),F,I),A)w.x+=W+m;else if(typeof I.text!="string"){const V=p.lineHeight;w.y+=jx(I,V)+m}else w.y+=R}),Jg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=kt(n.font),o=tn(n.padding);if(!n.display)return;const l=Si(e.rtl,this.left,this.width),c=this.ctx,u=n.position,h=i.size/2,p=o.top+h;let m,v=this.left,b=this.width;if(this.isHorizontal())b=Math.max(...this.lineWidths),m=this.top+p,v=wt(e.align,v,this.right-b);else{const j=this.columnSizes.reduce((N,y)=>Math.max(N,y.height),0);m=p+wt(e.align,this.top,this.bottom-j-e.labels.padding-this._computeTitleHeight())}const w=wt(u,v,v+b);c.textAlign=l.textAlign(qd(u)),c.textBaseline="middle",c.strokeStyle=n.color,c.fillStyle=n.color,c.font=i.string,$r(c,n.text,w,m,i)}_computeTitleHeight(){const e=this.options.title,n=kt(e.font),i=tn(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,o,l;if($n(e,this.left,this.right)&&$n(n,this.top,this.bottom)){for(l=this.legendHitBoxes,i=0;i<l.length;++i)if(o=l[i],$n(e,o.left,o.left+o.width)&&$n(n,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Q_(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,l=H_(o,i);o&&!l&&We(n.onLeave,[e,o,this],this),this._hoveredItem=i,i&&!l&&We(n.onHover,[e,i,this],this)}else i&&We(n.onClick,[e,i,this],this)}}function V_(t,e,n,i,o){const l=q_(i,t,e,n),c=Y_(o,i,e.lineHeight);return{itemWidth:l,itemHeight:c}}function q_(t,e,n,i){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((l,c)=>l.length>c.length?l:c)),e+n.size/2+i.measureText(o).width}function Y_(t,e,n){let i=t;return typeof e.text!="string"&&(i=jx(e,n)),i}function jx(t,e){const n=t.text?t.text.length:0;return e*n}function Q_(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var wx={id:"legend",_element:Em,start(t,e,n){const i=t.legend=new Em({ctx:t.ctx,options:n,chart:t});en.configure(t,i,n),en.addBox(t,i)},stop(t){en.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;en.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,o=n.chart;o.isDatasetVisible(i)?(o.hide(i),e.hidden=!0):(o.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(n?0:void 0),m=tn(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:l,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:p.borderColor,pointStyle:i||p.pointStyle,rotation:p.rotation,textAlign:o||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Nx extends un{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const o=it(i.text)?i.text.length:1;this._padding=tn(i.padding);const l=o*kt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=l:this.width=l}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:o,right:l,options:c}=this,u=c.align;let h=0,p,m,v;return this.isHorizontal()?(m=wt(u,i,l),v=n+e,p=l-i):(c.position==="left"?(m=i+e,v=wt(u,o,n),h=Ie*-.5):(m=l-e,v=wt(u,n,o),h=Ie*.5),p=o-n),{titleX:m,titleY:v,maxWidth:p,rotation:h}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=kt(n.font),l=i.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(l);$r(e,n.text,0,0,i,{color:n.color,maxWidth:h,rotation:p,textAlign:qd(n.align),textBaseline:"middle",translation:[c,u]})}}function K_(t,e){const n=new Nx({ctx:t.ctx,options:e,chart:t});en.configure(t,n,e),en.addBox(t,n),t.titleBlock=n}var _x={id:"title",_element:Nx,start(t,e,n){K_(t,n)},stop(t){const e=t.titleBlock;en.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;en.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Cr={average(t){if(!t.length)return!1;let e,n,i=new Set,o=0,l=0;for(e=0,n=t.length;e<n;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();i.add(h.x),o+=h.y,++l}}return l===0||i.size===0?!1:{x:[...i].reduce((u,h)=>u+h)/i.size,y:o/l}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,o=Number.POSITIVE_INFINITY,l,c,u;for(l=0,c=t.length;l<c;++l){const h=t[l].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),m=Nd(e,p);m<o&&(o=m,u=h)}}if(u){const h=u.tooltipPosition();n=h.x,i=h.y}return{x:n,y:i}}};function wn(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function In(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function X_(t,e){const{element:n,datasetIndex:i,index:o}=e,l=t.getDatasetMeta(i).controller,{label:c,value:u}=l.getLabelAndValue(o);return{chart:t,label:c,parsed:l.getParsed(o),raw:t.data.datasets[i].data[o],formattedValue:u,dataset:l.getDataset(),dataIndex:o,datasetIndex:i,element:n}}function Rm(t,e){const n=t.chart.ctx,{body:i,footer:o,title:l}=t,{boxWidth:c,boxHeight:u}=e,h=kt(e.bodyFont),p=kt(e.titleFont),m=kt(e.footerFont),v=l.length,b=o.length,w=i.length,j=tn(e.padding);let N=j.height,y=0,_=i.reduce((z,R)=>z+R.before.length+R.lines.length+R.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,v&&(N+=v*p.lineHeight+(v-1)*e.titleSpacing+e.titleMarginBottom),_){const z=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;N+=w*z+(_-w)*h.lineHeight+(_-1)*e.bodySpacing}b&&(N+=e.footerMarginTop+b*m.lineHeight+(b-1)*e.footerSpacing);let S=0;const A=function(z){y=Math.max(y,n.measureText(z).width+S)};return n.save(),n.font=p.string,ze(t.title,A),n.font=h.string,ze(t.beforeBody.concat(t.afterBody),A),S=e.displayColors?c+2+e.boxPadding:0,ze(i,z=>{ze(z.before,A),ze(z.lines,A),ze(z.after,A)}),S=0,n.font=m.string,ze(t.footer,A),n.restore(),y+=j.width,{width:y,height:N}}function G_(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function J_(t,e,n,i){const{x:o,width:l}=i,c=n.caretSize+n.caretPadding;if(t==="left"&&o+l+c>e.width||t==="right"&&o-l-c<0)return!0}function Z_(t,e,n,i){const{x:o,width:l}=n,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return i==="center"?p=o<=(u+h)/2?"left":"right":o<=l/2?p="left":o>=c-l/2&&(p="right"),J_(p,t,e,n)&&(p="center"),p}function Pm(t,e,n){const i=n.yAlign||e.yAlign||G_(t,n);return{xAlign:n.xAlign||e.xAlign||Z_(t,e,n,i),yAlign:i}}function ek(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function tk(t,e,n){let{y:i,height:o}=t;return e==="top"?i+=n:e==="bottom"?i-=o+n:i-=o/2,i}function Am(t,e,n,i){const{caretSize:o,caretPadding:l,cornerRadius:c}=t,{xAlign:u,yAlign:h}=n,p=o+l,{topLeft:m,topRight:v,bottomLeft:b,bottomRight:w}=ki(c);let j=ek(e,u);const N=tk(e,h,p);return h==="center"?u==="left"?j+=p:u==="right"&&(j-=p):u==="left"?j-=Math.max(m,b)+o:u==="right"&&(j+=Math.max(v,w)+o),{x:_t(j,0,i.width-e.width),y:_t(N,0,i.height-e.height)}}function bo(t,e,n){const i=tn(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Tm(t){return wn([],In(t))}function nk(t,e,n){return Gs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Dm(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const kx={beforeTitle:On,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:On,beforeBody:On,beforeLabel:On,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Me(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:On,afterBody:On,beforeFooter:On,footer:On,afterFooter:On};function Lt(t,e,n,i){const o=t[e].call(n,i);return typeof o>"u"?kx[e].call(n,i):o}class Pd extends un{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&n.options.animation&&i.animations,l=new sx(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(l)),l}getContext(){return this.$context||(this.$context=nk(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,o=Lt(i,"beforeTitle",this,e),l=Lt(i,"title",this,e),c=Lt(i,"afterTitle",this,e);let u=[];return u=wn(u,In(o)),u=wn(u,In(l)),u=wn(u,In(c)),u}getBeforeBody(e,n){return Tm(Lt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,o=[];return ze(e,l=>{const c={before:[],lines:[],after:[]},u=Dm(i,l);wn(c.before,In(Lt(u,"beforeLabel",this,l))),wn(c.lines,Lt(u,"label",this,l)),wn(c.after,In(Lt(u,"afterLabel",this,l))),o.push(c)}),o}getAfterBody(e,n){return Tm(Lt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,o=Lt(i,"beforeFooter",this,e),l=Lt(i,"footer",this,e),c=Lt(i,"afterFooter",this,e);let u=[];return u=wn(u,In(o)),u=wn(u,In(l)),u=wn(u,In(c)),u}_createItems(e){const n=this._active,i=this.chart.data,o=[],l=[],c=[];let u=[],h,p;for(h=0,p=n.length;h<p;++h)u.push(X_(this.chart,n[h]));return e.filter&&(u=u.filter((m,v,b)=>e.filter(m,v,b,i))),e.itemSort&&(u=u.sort((m,v)=>e.itemSort(m,v,i))),ze(u,m=>{const v=Dm(e.callbacks,m);o.push(Lt(v,"labelColor",this,m)),l.push(Lt(v,"labelPointStyle",this,m)),c.push(Lt(v,"labelTextColor",this,m))}),this.labelColors=o,this.labelPointStyles=l,this.labelTextColors=c,this.dataPoints=u,u}update(e,n){const i=this.options.setContext(this.getContext()),o=this._active;let l,c=[];if(!o.length)this.opacity!==0&&(l={opacity:0});else{const u=Cr[i.position].call(this,o,this._eventPosition);c=this._createItems(i),this.title=this.getTitle(c,i),this.beforeBody=this.getBeforeBody(c,i),this.body=this.getBody(c,i),this.afterBody=this.getAfterBody(c,i),this.footer=this.getFooter(c,i);const h=this._size=Rm(this,i),p=Object.assign({},u,h),m=Pm(this.chart,i,p),v=Am(i,p,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,l={opacity:1,x:v.x,y:v.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,l&&this._resolveAnimations().update(this,l),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,o){const l=this.getCaretPosition(e,i,o);n.lineTo(l.x1,l.y1),n.lineTo(l.x2,l.y2),n.lineTo(l.x3,l.y3)}getCaretPosition(e,n,i){const{xAlign:o,yAlign:l}=this,{caretSize:c,cornerRadius:u}=i,{topLeft:h,topRight:p,bottomLeft:m,bottomRight:v}=ki(u),{x:b,y:w}=e,{width:j,height:N}=n;let y,_,S,A,z,R;return l==="center"?(z=w+N/2,o==="left"?(y=b,_=y-c,A=z+c,R=z-c):(y=b+j,_=y+c,A=z-c,R=z+c),S=y):(o==="left"?_=b+Math.max(h,m)+c:o==="right"?_=b+j-Math.max(p,v)-c:_=this.caretX,l==="top"?(A=w,z=A-c,y=_-c,S=_+c):(A=w+N,z=A+c,y=_+c,S=_-c),R=A),{x1:y,x2:_,x3:S,y1:A,y2:z,y3:R}}drawTitle(e,n,i){const o=this.title,l=o.length;let c,u,h;if(l){const p=Si(i.rtl,this.x,this.width);for(e.x=bo(this,i.titleAlign,i),n.textAlign=p.textAlign(i.titleAlign),n.textBaseline="middle",c=kt(i.titleFont),u=i.titleSpacing,n.fillStyle=i.titleColor,n.font=c.string,h=0;h<l;++h)n.fillText(o[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===l&&(e.y+=i.titleMarginBottom-u)}}_drawColorBox(e,n,i,o,l){const c=this.labelColors[i],u=this.labelPointStyles[i],{boxHeight:h,boxWidth:p}=l,m=kt(l.bodyFont),v=bo(this,"left",l),b=o.x(v),w=h<m.lineHeight?(m.lineHeight-h)/2:0,j=n.y+w;if(l.usePointStyle){const N={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=o.leftForLtr(b,p)+p/2,_=j+h/2;e.strokeStyle=l.multiKeyBackground,e.fillStyle=l.multiKeyBackground,kd(e,N,y,_),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,kd(e,N,y,_)}else{e.lineWidth=Ee(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const N=o.leftForLtr(b,p),y=o.leftForLtr(o.xPlus(b,1),p-2),_=ki(c.borderRadius);Object.values(_).some(S=>S!==0)?(e.beginPath(),e.fillStyle=l.multiKeyBackground,Lo(e,{x:N,y:j,w:p,h,radius:_}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),Lo(e,{x:y,y:j+1,w:p-2,h:h-2,radius:_}),e.fill()):(e.fillStyle=l.multiKeyBackground,e.fillRect(N,j,p,h),e.strokeRect(N,j,p,h),e.fillStyle=c.backgroundColor,e.fillRect(y,j+1,p-2,h-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:o}=this,{bodySpacing:l,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:m}=i,v=kt(i.bodyFont);let b=v.lineHeight,w=0;const j=Si(i.rtl,this.x,this.width),N=function(C){n.fillText(C,j.x(e.x+w),e.y+b/2),e.y+=b+l},y=j.textAlign(c);let _,S,A,z,R,I,M;for(n.textAlign=c,n.textBaseline="middle",n.font=v.string,e.x=bo(this,y,i),n.fillStyle=i.bodyColor,ze(this.beforeBody,N),w=u&&y!=="right"?c==="center"?p/2+m:p+2+m:0,z=0,I=o.length;z<I;++z){for(_=o[z],S=this.labelTextColors[z],n.fillStyle=S,ze(_.before,N),A=_.lines,u&&A.length&&(this._drawColorBox(n,e,z,j,i),b=Math.max(v.lineHeight,h)),R=0,M=A.length;R<M;++R)N(A[R]),b=v.lineHeight;ze(_.after,N)}w=0,b=v.lineHeight,ze(this.afterBody,N),e.y-=l}drawFooter(e,n,i){const o=this.footer,l=o.length;let c,u;if(l){const h=Si(i.rtl,this.x,this.width);for(e.x=bo(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=h.textAlign(i.footerAlign),n.textBaseline="middle",c=kt(i.footerFont),n.fillStyle=i.footerColor,n.font=c.string,u=0;u<l;++u)n.fillText(o[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+i.footerSpacing}}drawBackground(e,n,i,o){const{xAlign:l,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:m}=i,{topLeft:v,topRight:b,bottomLeft:w,bottomRight:j}=ki(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(u+v,h),c==="top"&&this.drawCaret(e,n,i,o),n.lineTo(u+p-b,h),n.quadraticCurveTo(u+p,h,u+p,h+b),c==="center"&&l==="right"&&this.drawCaret(e,n,i,o),n.lineTo(u+p,h+m-j),n.quadraticCurveTo(u+p,h+m,u+p-j,h+m),c==="bottom"&&this.drawCaret(e,n,i,o),n.lineTo(u+w,h+m),n.quadraticCurveTo(u,h+m,u,h+m-w),c==="center"&&l==="left"&&this.drawCaret(e,n,i,o),n.lineTo(u,h+v),n.quadraticCurveTo(u,h,u+v,h),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,o=i&&i.x,l=i&&i.y;if(o||l){const c=Cr[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Rm(this,e),h=Object.assign({},c,this._size),p=Pm(n,e,h),m=Am(e,h,p,n);(o._to!==m.x||l._to!==m.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},l={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const c=tn(n.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&u&&(e.save(),e.globalAlpha=i,this.drawBackground(l,e,o,n),Gg(e,n.textDirection),l.y+=c.top,this.drawTitle(l,e,n),this.drawBody(l,e,n),this.drawFooter(l,e,n),Jg(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,o=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),l=!To(i,o),c=this._positionChanged(o,n);(l||c)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,l=this._active||[],c=this._getActiveElements(e,l,n,i),u=this._positionChanged(c,e),h=n||!To(c,l)||u;return h&&(this._active=c,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),h}_getActiveElements(e,n,i,o){const l=this.options;if(e.type==="mouseout")return[];if(!o)return n.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,l.mode,l,i);return l.reverse&&c.reverse(),c}_positionChanged(e,n){const{caretX:i,caretY:o,options:l}=this,c=Cr[l.position].call(this,e,n);return c!==!1&&(i!==c.x||o!==c.y)}}me(Pd,"positioners",Cr);var Sx={id:"tooltip",_element:Pd,positioners:Cr,afterInit(t,e,n){n&&(t.tooltip=new Pd({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:kx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const sk=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function ik(t,e,n,i){const o=t.indexOf(e);if(o===-1)return sk(t,e,n,i);const l=t.lastIndexOf(e);return o!==l?n:o}const rk=(t,e)=>t===null?null:_t(Math.round(t),0,e);function Mm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Fo extends Ti{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:o,label:l}of n)i[o]===l&&i.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Me(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:ik(i,e,ke(n,e),this._addedLabels),rk(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,o=[];let l=this.getLabels();l=e===0&&n===l.length-1?l:l.slice(e,n+1),this._valueRange=Math.max(l.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let c=e;c<=n;c++)o.push({value:c});return o}getLabelForValue(e){return Mm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}me(Fo,"id","category"),me(Fo,"defaults",{ticks:{callback:Mm}});function ak(t,e){const n=[],{bounds:o,step:l,min:c,max:u,precision:h,count:p,maxTicks:m,maxDigits:v,includeBounds:b}=t,w=l||1,j=m-1,{min:N,max:y}=e,_=!Me(c),S=!Me(u),A=!Me(p),z=(y-N)/(v+1);let R=Ap((y-N)/j/w)*w,I,M,C,O;if(R<1e-14&&!_&&!S)return[{value:N},{value:y}];O=Math.ceil(y/R)-Math.floor(N/R),O>j&&(R=Ap(O*R/j/w)*w),Me(h)||(I=Math.pow(10,h),R=Math.ceil(R*I)/I),o==="ticks"?(M=Math.floor(N/R)*R,C=Math.ceil(y/R)*R):(M=N,C=y),_&&S&&l&&f1((u-c)/l,R/1e3)?(O=Math.round(Math.min((u-c)/R,m)),R=(u-c)/O,M=c,C=u):A?(M=_?c:M,C=S?u:C,O=p-1,R=(C-M)/O):(O=(C-M)/R,Rr(O,Math.round(O),R/1e3)?O=Math.round(O):O=Math.ceil(O));const W=Math.max(Tp(R),Tp(M));I=Math.pow(10,Me(h)?W:h),M=Math.round(M*I)/I,C=Math.round(C*I)/I;let X=0;for(_&&(b&&M!==c?(n.push({value:c}),M<c&&X++,Rr(Math.round((M+X*R)*I)/I,c,Lm(c,z,t))&&X++):M<c&&X++);X<O;++X){const F=Math.round((M+X*R)*I)/I;if(S&&F>u)break;n.push({value:F})}return S&&b&&C!==u?n.length&&Rr(n[n.length-1].value,u,Lm(u,z,t))?n[n.length-1].value=u:n.push({value:u}):(!S||C===u)&&n.push({value:C}),n}function Lm(t,e,{horizontal:n,minRotation:i}){const o=Bn(i),l=(n?Math.sin(o):Math.cos(o))||.001,c=.75*e*(""+t).length;return Math.min(e/l,c)}class ok extends Ti{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Me(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:o,max:l}=this;const c=h=>o=n?o:h,u=h=>l=i?l:h;if(e){const h=kn(o),p=kn(l);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(o===l){let h=l===0?1:Math.abs(l*.05);u(l+h),e||c(o-h)}this.min=o,this.max=l}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},l=this._range||this,c=ak(o,l);return e.bounds==="ticks"&&p1(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const o=(i-n)/Math.max(e.length-1,1)/2;n-=o,i+=o}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Qd(e,this.chart.options.locale,this.options.ticks.format)}}class Bo extends ok{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=St(e)?e:0,this.max=St(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Bn(this.options.ticks.minRotation),o=(e?Math.sin(i):Math.cos(i))||.001,l=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,l.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}me(Bo,"id","linear"),me(Bo,"defaults",{ticks:{callback:Wg.formatters.numeric}});const el={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ot=Object.keys(el);function Om(t,e){return t-e}function zm(t,e){if(Me(e))return null;const n=t._adapter,{parser:i,round:o,isoWeekday:l}=t._parseOpts;let c=e;return typeof i=="function"&&(c=i(c)),St(c)||(c=typeof i=="string"?n.parse(c,i):n.parse(c)),c===null?null:(o&&(c=o==="week"&&(Ir(l)||l===!0)?n.startOf(c,"isoWeek",l):n.startOf(c,o)),+c)}function Im(t,e,n,i){const o=Ot.length;for(let l=Ot.indexOf(t);l<o-1;++l){const c=el[Ot[l]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((n-e)/(u*c.size))<=i)return Ot[l]}return Ot[o-1]}function lk(t,e,n,i,o){for(let l=Ot.length-1;l>=Ot.indexOf(n);l--){const c=Ot[l];if(el[c].common&&t._adapter.diff(o,i,c)>=e-1)return c}return Ot[n?Ot.indexOf(n):0]}function ck(t){for(let e=Ot.indexOf(t)+1,n=Ot.length;e<n;++e)if(el[Ot[e]].common)return Ot[e]}function Fm(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:o}=Vd(n,e),l=n[i]>=e?n[i]:n[o];t[l]=!0}}function dk(t,e,n,i){const o=t._adapter,l=+o.startOf(e[0].value,i),c=e[e.length-1].value;let u,h;for(u=l;u<=c;u=+o.add(u,1,i))h=n[u],h>=0&&(e[h].major=!0);return e}function Bm(t,e,n){const i=[],o={},l=e.length;let c,u;for(c=0;c<l;++c)u=e[c],o[u]=c,i.push({value:u,major:!1});return l===0||!n?i:dk(t,i,o,n)}class $o extends Ti{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),o=this._adapter=new Xw._date(e.adapters.date);o.init(n),Er(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:zm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:o,max:l,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(o=Math.min(o,p.min)),!u&&!isNaN(p.max)&&(l=Math.max(l,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),o=St(o)&&!isNaN(o)?o:+n.startOf(Date.now(),i),l=St(l)&&!isNaN(l)?l:+n.endOf(Date.now(),i)+1,this.min=Math.min(o,l-1),this.max=Math.max(o+1,l)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const l=this.min,c=this.max,u=y1(o,l,c);return this._unit=n.unit||(i.autoSkip?Im(n.minUnit,this.min,this.max,this._getLabelCapacity(l)):lk(this,u.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:ck(this._unit),this.initOffsets(o),e.reverse&&u.reverse(),Bm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,o,l;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?n=1-o:n=(this.getDecimalForValue(e[1])-o)/2,l=this.getDecimalForValue(e[e.length-1]),e.length===1?i=l:i=(l-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;n=_t(n,0,c),i=_t(i,0,c),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,o=this.options,l=o.time,c=l.unit||Im(l.minUnit,n,i,this._getLabelCapacity(n)),u=ke(o.ticks.stepSize,1),h=c==="week"?l.isoWeekday:!1,p=Ir(h)||h===!0,m={};let v=n,b,w;if(p&&(v=+e.startOf(v,"isoWeek",h)),v=+e.startOf(v,p?"day":c),e.diff(i,n,c)>1e5*u)throw new Error(n+" and "+i+" are too far apart with stepSize of "+u+" "+c);const j=o.ticks.source==="data"&&this.getDataTimestamps();for(b=v,w=0;b<i;b=+e.add(b,u,c),w++)Fm(m,b,j);return(b===i||o.bounds==="ticks"||w===1)&&Fm(m,b,j),Object.keys(m).sort(Om).map(N=>+N)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const o=this.options.time.displayFormats,l=this._unit,c=n||o[l];return this._adapter.format(e,c)}_tickFormatFunction(e,n,i,o){const l=this.options,c=l.ticks.callback;if(c)return We(c,[e,n,i],this);const u=l.time.displayFormats,h=this._unit,p=this._majorUnit,m=h&&u[h],v=p&&u[p],b=i[n],w=p&&v&&b&&b.major;return this._adapter.format(e,o||(w?v:m))}generateTickLabels(e){let n,i,o;for(n=0,i=e.length;n<i;++n)o=e[n],o.label=this._tickFormatFunction(o.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,o=Bn(this.isHorizontal()?n.maxRotation:n.minRotation),l=Math.cos(o),c=Math.sin(o),u=this._resolveTickFontOptions(0).size;return{w:i*l+u*c,h:i*c+u*l}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,o=i[n.unit]||i.millisecond,l=this._tickFormatFunction(e,0,Bm(this,[e],this._majorUnit),o),c=this._getLabelSize(l),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,i=o.length;n<i;++n)e=e.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const o=this.getLabels();for(n=0,i=o.length;n<i;++n)e.push(zm(this,o[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Bg(e.sort(Om))}}me($o,"id","time"),me($o,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function jo(t,e,n){let i=0,o=t.length-1,l,c,u,h;n?(e>=t[i].pos&&e<=t[o].pos&&({lo:i,hi:o}=Ws(t,"pos",e)),{pos:l,time:u}=t[i],{pos:c,time:h}=t[o]):(e>=t[i].time&&e<=t[o].time&&({lo:i,hi:o}=Ws(t,"time",e)),{time:l,pos:u}=t[i],{time:c,pos:h}=t[o]);const p=c-l;return p?u+(h-u)*(e-l)/p:u}class $m extends $o{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=jo(n,this.min),this._tableRange=jo(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,o=[],l=[];let c,u,h,p,m;for(c=0,u=e.length;c<u;++c)p=e[c],p>=n&&p<=i&&o.push(p);if(o.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(c=0,u=o.length;c<u;++c)m=o[c+1],h=o[c-1],p=o[c],Math.round((m+h)/2)!==p&&l.push({time:p,pos:c/(u-1)});return l}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((o,l)=>o-l)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(jo(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return jo(this._table,i*this._tableRange+this._minPos,!0)}}me($m,"id","timeseries"),me($m,"defaults",$o.defaults);const Cx="label";function Um(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function uk(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Ex(t,e){t.labels=e}function Rx(t,e,n=Cx){const i=[];t.datasets=e.map(o=>{const l=t.datasets.find(c=>c[n]===o[n]);return!l||!o.data||i.includes(l)?{...o}:(i.push(l),Object.assign(l,o),l)})}function hk(t,e=Cx){const n={labels:[],datasets:[]};return Ex(n,t.labels),Rx(n,t.datasets,e),n}function fk(t,e){const{height:n=150,width:i=300,redraw:o=!1,datasetIdKey:l,type:c,data:u,options:h,plugins:p=[],fallbackContent:m,updateMode:v,...b}=t,w=E.useRef(null),j=E.useRef(null),N=()=>{w.current&&(j.current=new Xr(w.current,{type:c,data:hk(u,l),options:h&&{...h},plugins:p}),Um(e,j.current))},y=()=>{Um(e,null),j.current&&(j.current.destroy(),j.current=null)};return E.useEffect(()=>{!o&&j.current&&h&&uk(j.current,h)},[o,h]),E.useEffect(()=>{!o&&j.current&&Ex(j.current.config.data,u.labels)},[o,u.labels]),E.useEffect(()=>{!o&&j.current&&u.datasets&&Rx(j.current.config.data,u.datasets,l)},[o,u.datasets]),E.useEffect(()=>{j.current&&(o?(y(),setTimeout(N)):j.current.update(v))},[o,h,u.labels,u.datasets,v]),E.useEffect(()=>{j.current&&(y(),setTimeout(N))},[c]),E.useEffect(()=>(N(),()=>y()),[]),r.jsx("canvas",{ref:w,role:"img",height:n,width:i,...b,children:m})}const pk=E.forwardRef(fk);function nu(t,e){return Xr.register(e),E.forwardRef((n,i)=>r.jsx(pk,{...n,ref:i,type:t}))}const Ad=nu("line",So),mk=nu("bar",ko),gk=nu("doughnut",_r);Xr.register(Fo,Bo,Tr,Un,Ro,Sr,_x,Sx,wx,bx);function xk(){var _,S,A,z,R,I,M,C,O;const{t}=pt(),e=Wn(),[n,i]=E.useState(null),[o,l]=E.useState(null),[c,u]=E.useState(null),[h,p]=E.useState(!0);if(E.useEffect(()=>{Promise.all([_n.stats(),jd.get(24),Pg.getCollectionStats()]).then(([W,X,F])=>{var ie,K;i(W.data);const te=24,V=[],ae=[],U=[];for(let re=te-1;re>=0;re--){const G=new Date;G.setHours(G.getHours()-re),V.push(G.getHours()+":00");const D=new Date(G);D.setMinutes(0,0,0);const Y=new Date(G);Y.setMinutes(59,59,999);const fe=((ie=X.data.entries)==null?void 0:ie.filter(be=>{const ye=new Date(be.timestamp);return be.type==="event"&&ye>=D&&ye<=Y}).length)||0,ve=((K=X.data.entries)==null?void 0:K.filter(be=>{const ye=new Date(be.timestamp);return be.type==="alert"&&ye>=D&&ye<=Y}).length)||0;ae.push(fe),U.push(ve)}l({labels:V,events:ae,alerts:U}),u(F.data),p(!1)}).catch(()=>{i({total:0,by_severity:{},by_status:{}}),l({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return r.jsx("div",{className:"dashboard",children:r.jsxs("div",{className:"dashboard-loading",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})});const m=n!=null&&n.by_type?Object.entries(n.by_type).sort((W,X)=>X[1]-W[1]).slice(0,5):[],v={labels:(o==null?void 0:o.labels)||[],datasets:[{label:t("dashboard.events"),data:(o==null?void 0:o.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(o==null?void 0:o.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:m.map(([W])=>W),datasets:[{data:m.map(([,W])=>W),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},j={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},N={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((_=n==null?void 0:n.by_severity)==null?void 0:_.critical)||0,((S=n==null?void 0:n.by_severity)==null?void 0:S.high)||0,((A=n==null?void 0:n.by_severity)==null?void 0:A.medium)||0,((z=n==null?void 0:n.by_severity)==null?void 0:z.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return r.jsxs("div",{className:"dashboard",children:[r.jsxs("div",{className:"dashboard-header",children:[r.jsx("h2",{children:t("dashboard.title")}),r.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),r.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((R=n==null?void 0:n.by_severity)==null?void 0:R.critical)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((I=n==null?void 0:n.by_severity)==null?void 0:I.high)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[r.jsx("div",{className:"stat-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((M=n==null?void 0:n.by_severity)==null?void 0:M.medium)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((C=n==null?void 0:n.by_severity)==null?void 0:C.low)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),r.jsx("div",{className:"stat-glow"})]})]}),r.jsxs("div",{className:"dashboard-grid",children:[r.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.eventTrend")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),r.jsx("div",{className:"chart-body",children:r.jsx(Ad,{data:v,options:b})})]}),r.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.topAlertTypes")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),r.jsx("div",{className:"chart-body",children:m.length>0?r.jsx(gk,{data:w,options:j}):r.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),r.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.bySeverity")})}),r.jsx("div",{className:"chart-body",children:r.jsx(mk,{data:N,options:y})})]}),r.jsxs("div",{className:"chart-card chart-collection",children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.collectionStatus")})}),r.jsxs("div",{className:"chart-body collection-stats",children:[r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),r.jsx("span",{className:"collection-value",children:((O=c==null?void 0:c.total_events)==null?void 0:O.toLocaleString())||0})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),r.jsxs("div",{className:"collection-sources",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),r.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(W=>r.jsx("span",{className:"source-tag",children:W},W))})]})]})]})]}),r.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("dashboard.recentAlerts")}),r.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),r.jsx("div",{className:"recent-alerts-list",children:n&&n.total>0?r.jsxs("div",{className:"alert-preview",children:[r.jsx("div",{className:"alert-count-badge",children:n.total}),r.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):r.jsxs("div",{className:"no-alerts",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function vk(){var Bt;const[t,e]=E.useState([]),[n,i]=E.useState(!0),[o,l]=E.useState(1),[c,u]=E.useState(50),[h,p]=E.useState(""),[m,v]=E.useState(1),[b,w]=E.useState(0),[j,N]=E.useState(!1),[y,_]=E.useState(!1),[S,A]=E.useState(0),[z,R]=E.useState(!1),[I,M]=E.useState([]),[C,O]=E.useState(!1),[W,X]=E.useState("timestamp"),[F,te]=E.useState("desc"),[V,ae]=E.useState(""),[U,ie]=E.useState(""),[K,re]=E.useState(""),[G,D]=E.useState(""),[Y,fe]=E.useState(null),[ve,be]=E.useState({x:0,y:0}),[ye,Ae]=E.useState("AND"),[Re,Fe]=E.useState([]),[mt,nn]=E.useState(!1),[ge,Ft]=E.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),ys=(Z=1)=>{i(!0);const le={Critical:1,Error:2,Warning:3,Info:4,Debug:5},De=G.split(",").map(Le=>parseInt(Le.trim(),10)).filter(Le=>!isNaN(Le)),Xe=V.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),ct=U.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),dt=K.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),nt={keywords:(ge==null?void 0:ge.keywords)||"",keyword_mode:ye,regex:C,page:Z,page_size:c,sort_by:W,sort_order:F,start_time:(ge==null?void 0:ge.start_time)||void 0,end_time:(ge==null?void 0:ge.end_time)||void 0,levels:I.map(Le=>le[Le]).filter(Le=>Le),event_ids:De.length>0?De:void 0,log_names:ge!=null&&ge.log_names&&ge.log_names.length>0?ge.log_names:void 0,sources:Xe.length>0?Xe:void 0,users:ct.length>0?ct:void 0,computers:dt.length>0?dt:void 0};Is.search(nt).then(Le=>{const pn=Le.data;e(pn.events||[]),w(pn.total||0);const Gr=Math.ceil((pn.total||0)/c);v(Gr||1),A(pn.query_time_ms||0),_(!0),i(!1)}).catch(()=>{Is.list(Z,c).then(Le=>{const pn=Le.data;e(pn.events||[]),w(pn.total||0),v(pn.total_pages||1),_(!1),i(!1)}).catch(()=>i(!1))})},Hn=()=>{l(1),ys(1)},Js=()=>{Ft({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),M([]),O(!1),X("timestamp"),te("desc"),ae(""),ie(""),re(""),D(""),_(!1),Ae("AND"),l(1)};E.useEffect(()=>{i(!0);const Z=ge&&(ge.log_names&&ge.log_names.length>0||ge.levels&&ge.levels.length>0||ge.event_ids&&ge.event_ids.length>0||ge.start_time||ge.end_time);ge!=null&&ge.keywords&&ge.keywords.trim()!==""?Is.search({keywords:ge.keywords,keyword_mode:ye,regex:C,page:o,page_size:c,sort_by:W,sort_order:F,levels:I.map(le=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[le]||0).filter(le=>le>0),start_time:ge.start_time,end_time:ge.end_time}).then(le=>{const De=le.data;e(De.events||[]),w(De.total||0);const Xe=Math.ceil((De.total||0)/c);v(Xe||1),i(!1)}).catch(()=>i(!1)):Z?Is.list(o,c,{log_names:ge.log_names,levels:ge.levels,event_ids:ge.event_ids,start_time:ge.start_time,end_time:ge.end_time,sort_by:W,sort_order:F}).then(le=>{const De=le.data;e(De.events||[]),w(De.total||0),v(De.total_pages||1),i(!1)}).catch(()=>i(!1)):Is.list(o,c,{sort_by:W,sort_order:F}).then(le=>{const De=le.data;e(De.events||[]),w(De.total||0),v(De.total_pages||1),i(!1)}).catch(()=>i(!1))},[o,ge,W,F,c,I,ye,C]);const Sn=Z=>{u(Z),l(1)},bs=Z=>{Z.preventDefault();const le=parseInt(h,10);!isNaN(le)&&le>=1&&le<=m&&(l(le),p(""))};E.useEffect(()=>{Pg.getLogNames().then(Z=>{const le=Z.data;Fe(le.log_names||[])}).catch(()=>{})},[]);const fn=async Z=>{N(!0);try{const le=await Is.export({format:Z,filters:ge});if(Z==="json"){const De=new Blob([JSON.stringify(le.data,null,2)],{type:"application/json"});Q(De,`events_export.${Z}`)}else{const De=new Blob([le.data],{type:Z==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});Q(De,`events_export.${Z==="excel"?"xlsx":Z}`)}}catch(le){console.error("Export failed:",le)}finally{N(!1)}},Q=(Z,le)=>{const De=URL.createObjectURL(Z),Xe=document.createElement("a");Xe.href=De,Xe.download=le,document.body.appendChild(Xe),Xe.click(),document.body.removeChild(Xe),URL.revokeObjectURL(De)},pe=Z=>{const le=String(Z).toLowerCase();return le==="1"||le==="critical"||le==="crit"?"level-critical":le==="2"||le==="error"?"level-error":le==="3"||le==="warning"||le==="warn"?"level-warning":le==="4"||le==="info"?"level-info":le==="5"||le==="debug"?"level-debug":""},Ce=Z=>{const le=String(Z);return le==="1"||le==="critical"?"Critical":le==="2"||le==="error"?"Error":le==="3"||le==="warning"||le==="warn"?"Warning":le==="4"||le==="info"?"Info":le==="5"||le==="debug"?"Debug":le};return r.jsxs("div",{className:"events-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>R(!z),children:z?"Hide Filters":"Show Filters"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>fn("csv"),children:"CSV"}),r.jsx("button",{onClick:()=>fn("json"),children:"JSON"}),r.jsx("button",{onClick:()=>fn("excel"),children:"Excel"})]})]})]})]}),r.jsxs("div",{className:"search-bar",children:[r.jsxs("div",{className:"search-input-wrapper",children:[r.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(ge==null?void 0:ge.keywords)||"",onChange:Z=>Ft({...ge,keywords:Z.target.value}),onKeyDown:Z=>Z.key==="Enter"&&Hn()}),r.jsx("button",{className:"search-btn",onClick:Hn,children:"Search"})]}),r.jsxs("div",{className:"keyword-mode-toggle",children:[r.jsx("span",{className:"mode-label",children:"Keywords:"}),r.jsx("button",{className:`mode-btn ${ye==="AND"?"active":""}`,onClick:()=>Ae("AND"),title:"All keywords must match",children:"AND"}),r.jsx("button",{className:`mode-btn ${ye==="OR"?"active":""}`,onClick:()=>Ae("OR"),title:"Any keyword can match",children:"OR"})]})]}),z&&r.jsxs("div",{className:"filters-panel",children:[r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Start Time"}),r.jsx("input",{type:"datetime-local",value:(ge==null?void 0:ge.start_time)||"",onChange:Z=>Ft({...ge,start_time:Z.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"End Time"}),r.jsx("input",{type:"datetime-local",value:(ge==null?void 0:ge.end_time)||"",onChange:Z=>Ft({...ge,end_time:Z.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Event IDs"}),r.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:G,onChange:Z=>D(Z.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Log Names"}),r.jsxs("select",{value:((Bt=ge==null?void 0:ge.log_names)==null?void 0:Bt[0])||"",onChange:Z=>{const le=Z.target.value;Ft({...ge,log_names:le?[le]:[]})},className:"select-input",children:[r.jsx("option",{value:"",children:"All Log Names"}),Re.map(Z=>r.jsx("option",{value:Z,children:Z},Z))]})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sources"}),r.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:V,onChange:Z=>ae(Z.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Users"}),r.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:U,onChange:Z=>ie(Z.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Computers"}),r.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:K,onChange:Z=>re(Z.target.value),className:"text-input"})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Level"}),r.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(Z=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:I.includes(Z),onChange:le=>{le.target.checked?M([...I,Z]):M(I.filter(De=>De!==Z))}}),Z]},Z))})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort By"}),r.jsxs("select",{value:W,onChange:Z=>X(Z.target.value),className:"select-input",children:[r.jsx("option",{value:"timestamp",children:"Timestamp"}),r.jsx("option",{value:"event_id",children:"Event ID"}),r.jsx("option",{value:"level",children:"Level"}),r.jsx("option",{value:"source",children:"Source"}),r.jsx("option",{value:"log_name",children:"Log Name"})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort Order"}),r.jsxs("select",{value:F,onChange:Z=>te(Z.target.value),className:"select-input",children:[r.jsx("option",{value:"desc",children:"Descending"}),r.jsx("option",{value:"asc",children:"Ascending"})]})]}),r.jsx("div",{className:"filter-group",children:r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:C,onChange:Z=>O(Z.target.checked)}),"Use Regex"]})})]}),r.jsxs("div",{className:"filter-actions",children:[r.jsx("button",{onClick:Hn,className:"btn-primary",children:"Apply Filters"}),y&&r.jsx("button",{onClick:Js,className:"btn-secondary",children:"Clear All"})]})]}),y&&r.jsxs("div",{className:"search-info",children:[r.jsxs("span",{className:"search-count",children:["Found ",r.jsx("strong",{children:b.toLocaleString()})," events"]}),S>0&&r.jsxs("span",{className:"query-time",children:["Query time: ",S,"ms"]})]}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:b.toLocaleString()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Current Page"}),r.jsxs("span",{className:"stat-value",children:[o," / ",m]})]})]}),n?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading events..."})]}):t.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{children:"No events found"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"table-container",children:r.jsxs("table",{className:"events-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Time"}),r.jsx("th",{children:"Level"}),r.jsx("th",{children:"Event ID"}),r.jsx("th",{children:"Source"}),r.jsx("th",{children:"Computer"}),r.jsx("th",{children:"Message"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:t.map(Z=>r.jsxs("tr",{children:[r.jsx("td",{className:"id-cell",children:Z.id}),r.jsx("td",{className:"time-cell",children:new Date(Z.timestamp).toLocaleString()}),r.jsx("td",{children:r.jsx("span",{className:`level-badge ${pe(Z.level)}`,children:Ce(Z.level)})}),r.jsx("td",{className:"event-id",children:Z.event_id}),r.jsxs("td",{className:"source-cell",title:Z.source||"",children:[r.jsx("span",{className:"cell-content",children:Z.source||"-"}),r.jsx("button",{className:"cell-btn",onClick:le=>{le.stopPropagation(),fe(Z),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]}),r.jsx("td",{className:"computer-cell",children:Z.computer||"-"}),r.jsxs("td",{className:"message-cell",title:Z.message||"",children:[r.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:Z.message?Z.message.length>50?Z.message.substring(0,50)+"...":Z.message:"-"}),r.jsx("button",{className:"cell-btn",onClick:le=>{le.stopPropagation(),fe(Z),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]}),r.jsxs("td",{className:"action-cell",children:[r.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(Z,null,2))},title:"Copy all event data",children:"Copy"}),r.jsx("button",{className:"action-detail-btn",onClick:le=>{fe(Z),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]})]},Z.id))})]})}),r.jsxs("div",{className:"pagination",children:[r.jsxs("div",{className:"page-size-selector",children:[r.jsx("span",{children:"Show:"}),r.jsxs("select",{value:c,onChange:Z=>Sn(Number(Z.target.value)),className:"select-input",children:[r.jsx("option",{value:10,children:"10"}),r.jsx("option",{value:25,children:"25"}),r.jsx("option",{value:50,children:"50"}),r.jsx("option",{value:100,children:"100"}),r.jsx("option",{value:200,children:"200"})]}),r.jsx("span",{children:"per page"})]}),r.jsxs("div",{className:"page-nav",children:[r.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{l(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),r.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{l(Z=>Z-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),r.jsxs("form",{onSubmit:bs,className:"page-input-form",children:[r.jsx("input",{type:"number",min:1,max:m,value:h,onChange:Z=>p(Z.target.value),placeholder:`1-${m}`,className:"page-input"}),r.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),r.jsxs("span",{className:"page-info",children:["Page ",r.jsx("strong",{children:o})," of ",r.jsx("strong",{children:m}),"(",b," total)"]}),r.jsx("button",{className:"page-btn",disabled:o>=m,onClick:()=>{l(Z=>Z+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),r.jsx("button",{className:"page-btn",disabled:o>=m,onClick:()=>{l(m),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),Y&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"message-float-panel",style:{left:ve.x,top:ve.y,position:"fixed"},children:[r.jsxs("div",{className:"float-panel-header",children:[r.jsx("span",{children:"Event Details"}),r.jsxs("div",{className:"float-panel-actions",children:[r.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(Y,null,2))},children:"Copy"}),Y.raw_xml&&r.jsx("button",{className:"float-panel-formatted",onClick:()=>{const Z=(()=>{try{return JSON.stringify(JSON.parse(Y.raw_xml),null,2)}catch{return Y.raw_xml||""}})();navigator.clipboard.writeText(Z)},children:"Copy JSON"}),Y.raw_xml&&r.jsx("button",{className:"float-panel-view",onClick:()=>nn(!0),children:"View JSON"}),r.jsx("button",{className:"float-panel-close",onClick:()=>{fe(null),nn(!1)},children:"×"})]})]}),r.jsxs("div",{className:"float-panel-content",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"ID:"})," ",Y.id]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Time:"})," ",new Date(Y.timestamp).toLocaleString()]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Level:"})," ",Y.level]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Event ID:"})," ",Y.event_id]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Source:"})," ",Y.source||"-"]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Computer:"})," ",Y.computer||"-"]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Log Name:"})," ",Y.log_name]}),r.jsx("div",{style:{marginTop:"8px"},children:r.jsx("strong",{children:"Message:"})}),r.jsx("div",{children:Y.message||"-"})]})]}),mt&&Y.raw_xml&&r.jsx("div",{className:"modal-overlay",onClick:()=>nn(!1),children:r.jsxs("div",{className:"modal-content modal-large",onClick:Z=>Z.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("span",{children:["Raw JSON - Event #",Y.id]}),r.jsx("button",{className:"modal-close",onClick:()=>nn(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:r.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(Y.raw_xml),null,2)}catch{return Y.raw_xml}})()})})]})})]})]}),r.jsx("style",{children:`
        .events-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .events-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: 10px;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #00d9ff;
        }
        
        .export-dropdown {
          position: relative;
        }
        
        .export-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 6px;
          overflow: hidden;
          z-index: 100;
        }
        
        .export-dropdown:hover .export-menu {
          display: block;
        }
        
        .export-menu button {
          display: block;
          width: 100%;
          padding: 10px 20px;
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }
        
        .export-menu button:hover {
          background: rgba(0, 217, 255, 0.1);
        }
        
        .search-bar {
          margin-bottom: 16px;
        }
        
        .search-input-wrapper {
          display: flex;
          gap: 8px;
        }
        
        .search-input-wrapper input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
        }
        
        .search-input-wrapper input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .search-btn {
          padding: 12px 24px;
          background: #00d9ff;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
        }
        
        .keyword-mode-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 12px;
        }
        
        .mode-label {
          color: #888;
          font-size: 13px;
        }
        
        .mode-btn {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 4px;
          color: #888;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .mode-btn:hover {
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .mode-btn.active {
          background: rgba(0, 217, 255, 0.1);
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .filters-panel {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }
        
        .filter-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .filter-group label {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
        }
        
        .filter-group input[type="datetime-local"] {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
        }
        
        .filter-group .text-input {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          min-width: 150px;
        }
        
        .filter-group .text-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .filter-group .select-input {
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
        
        .filter-group .select-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .level-checkboxes {
          display: flex;
          gap: 12px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          color: #ddd;
          cursor: pointer;
        }
        
        .filter-actions {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #333;
        }
        
        .btn-primary {
          padding: 8px 20px;
          background: #00d9ff;
          border: none;
          border-radius: 6px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
        }
        
        .search-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 8px;
          margin-bottom: 16px;
        }
        
        .search-count {
          color: #00d9ff;
        }
        
        .query-time {
          color: #888;
          font-size: 13px;
        }
        
        .stats-bar {
          display: flex;
          gap: 20px;
          margin-bottom: 16px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 11px;
          color: #888;
          text-transform: uppercase;
        }
        
        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
        }
        
        .loading-state, .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .empty-icon {
          font-size: 48px;
        }
        
        .table-container {
          flex: 1;
          overflow: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .events-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        
        .events-table th {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 14px 12px;
          text-align: left;
          font-weight: 600;
          position: sticky;
          top: 0;
          white-space: nowrap;
        }
        
        .events-table td {
          padding: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #ddd;
        }
        
        .events-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .id-cell {
          color: #888;
          font-family: monospace;
          font-size: 12px;
        }
        
        .time-cell {
          white-space: nowrap;
          color: #888;
          font-size: 12px;
        }
        
        .level-badge {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .level-critical { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
        .level-error { background: rgba(239, 68, 68, 0.15); color: #f87171; }
        .level-warning { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
        .level-info { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }
        .level-debug { background: rgba(107, 114, 128, 0.2); color: #9ca3af; }
        
        .event-id {
          font-family: monospace;
          color: #00d9ff;
        }
        
        .source-cell, .computer-cell {
          max-width: 120px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .message-cell {
          max-width: 400px;
        }
        
        .cell-btn {
          background: transparent;
          border: none;
          color: #555;
          cursor: pointer;
          font-size: 14px;
          font-weight: bold;
          padding: 0 4px;
          margin-left: 4px;
        }
        
        .cell-btn:hover {
          color: #00d9ff;
        }
        
        .message-float-panel {
          position: fixed;
          width: 400px;
          max-height: 500px;
          overflow: hidden;
          background: #0a0a1a;
          border: 1px solid #00d9ff;
          border-radius: 8px;
          padding: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
        }
        
        .float-panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0, 217, 255, 0.1);
          border-bottom: 1px solid #00d9ff;
        }
        
        .float-panel-header span {
          font-weight: bold;
          color: #00d9ff;
        }
        
        .float-panel-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .float-panel-close {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 16px;
          padding: 0 4px;
          margin-left: 8px;
        }
        
        .float-panel-close:hover {
          color: #fff;
        }
        
        .float-panel-copy {
          background: #444;
          border: 1px solid #555;
          color: #fff;
          cursor: pointer;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 3px;
        }
        
        .float-panel-copy:hover {
          background: #555;
          border-color: #666;
        }
        
        .float-panel-formatted {
          background: #1a4d1a;
          border: 1px solid #2e7d32;
          color: #fff;
          cursor: pointer;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 3px;
        }
        
        .float-panel-formatted:hover {
          background: #2e7d32;
        }
        
        .float-panel-view {
          background: #1a3d5c;
          border: 1px solid #00d9ff;
          color: #00d9ff;
          cursor: pointer;
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 3px;
        }
        
        .float-panel-view:hover {
          background: #00d9ff;
          color: #0a0a1a;
        }
        
        .float-panel-content {
          padding: 12px;
          max-height: 540px;
          overflow: auto;
          white-space: pre-wrap;
          word-break: break-all;
          margin: 0;
          font-size: 12px;
          color: #ccc;
        }
        
        .timestamp-toggle.active {
          color: #00d9ff;
          background: rgba(0, 217, 255, 0.1);
        }
        
        .pagination {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 16px;
          margin-top: 16px;
        }
        
        .page-size-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #888;
        }
        
        .page-size-selector .select-input {
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
        }
        
        .page-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .page-btn {
          padding: 8px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .page-btn:hover:not(:disabled) {
          background: rgba(0, 217, 255, 0.1);
          border-color: #00d9ff;
        }
        
        .page-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .page-input-form {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .page-input {
          width: 70px;
          padding: 8px 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          text-align: center;
        }
        
        .page-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .page-input::-webkit-inner-spin-button,
        .page-input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        .go-btn {
          padding: 8px 12px;
          background: rgba(0, 217, 255, 0.1);
          border-color: #00d9ff;
        }
        
        .page-info {
          padding: 0 16px;
          color: #888;
        }
        
        .page-info strong {
          color: #00d9ff;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }
        
        .modal-content {
          background: #0a0a1a;
          border: 1px solid #00d9ff;
          border-radius: 8px;
          max-width: 90vw;
          max-height: 90vh;
          overflow: hidden;
        }
        
        .modal-large {
          width: 90vw;
          height: 85vh;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: #1a1a2e;
          border-bottom: 1px solid #333;
        }
        
        .modal-header span {
          font-weight: bold;
          color: #00d9ff;
        }
        
        .modal-close {
          background: none;
          border: none;
          color: #e0e0e0;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        
        .modal-close:hover {
          color: #00d9ff;
        }
        
        .modal-body {
          padding: 20px;
          overflow: auto;
          max-height: calc(85vh - 60px);
        }
        
        .json-large {
          margin: 0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          line-height: 1.5;
          color: #e0e0e0;
          white-space: pre-wrap;
          word-break: break-all;
        }
      `})]})}function Px({keyName:t,value:e,depth:n,isLast:i,collapsedPaths:o,onToggleCollapse:l}){const c="  ".repeat(n),u=t.startsWith("[")?t:`"${t}"`;if(e&&typeof e=="object"){const m=Array.isArray(e),v=m?e.map((N,y)=>({key:`[${y}]`,value:N})):Object.entries(e).map(([N,y])=>({key:N,value:y})),b=v.length===0,w=`${u}`,j=o.has(w);return b?r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:m?"[]":"{}"}),!i&&r.jsx("span",{className:"json-punct",children:","})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"json-line json-collapsible",onClick:()=>l(w),children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:m?"[":"{"}),r.jsx("span",{className:"json-collapse-hint",children:j?` ... ${v.length} items }`:""}),!i&&r.jsx("span",{className:"json-punct",children:","}),r.jsx("span",{className:"json-toggle",children:j?"▶":"▼"})]}),!j&&v.map((N,y)=>r.jsx(Px,{keyName:N.key,value:N.value,depth:n+1,isLast:y===v.length-1,collapsedPaths:o,onToggleCollapse:l},N.key)),!j&&r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-punct",children:m?"]":"}"}),!i&&r.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof e=="string"?`"${e}"`:String(e);return typeof e=="number"?h="json-number":typeof e=="boolean"?h="json-boolean":e===null&&(h="json-null"),r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:": "}),r.jsx("span",{className:h,children:p}),!i&&r.jsx("span",{className:"json-punct",children:","})]})}function yk(t){return["Unknown","Critical","Error","Warning","Info"][t]||"Unknown"}function bk(){const{id:t}=tg(),[e,n]=E.useState(null),[i,o]=E.useState(!0),[l,c]=E.useState(new Set),[u,h]=E.useState(!1);E.useEffect(()=>{t&&(o(!0),Is.get(Number(t)).then(j=>{n(j.data),o(!1)}).catch(()=>o(!1)))},[t]);const p=E.useCallback(j=>{c(N=>{const y=new Set(N);return y.has(j)?y.delete(j):y.add(j),y})},[]),m=()=>{c(new Set)},v=()=>{if(e!=null&&e.raw_xml)try{const j=JSON.parse(e.raw_xml),N=(_,S)=>{if(!_||typeof _!="object")return[];const A=[];return Array.isArray(_)?(_.length>3&&A.push(S),_.forEach((z,R)=>{A.push(...N(_[R],`${S}[${R}]`))})):Object.values(_).forEach((z,R)=>{const I=Object.keys(_)[R];A.push(...N(z,`${S}"${I}"`))}),A},y=N(j,"");c(new Set(y.filter(_=>_.includes("[")||!_.startsWith('"'))))}catch{}},b=()=>{if(e!=null&&e.raw_xml)try{const j=JSON.stringify(JSON.parse(e.raw_xml),null,2);navigator.clipboard.writeText(j)}catch{navigator.clipboard.writeText(e.raw_xml)}};if(i)return r.jsx("div",{children:"Loading..."});if(!e)return r.jsx("div",{children:"Event not found"});let w=null;if(e.raw_xml)try{const j=JSON.parse(e.raw_xml),N=Object.entries(j);w=N.map(([y,_],S)=>r.jsx(Px,{keyName:y,value:_,depth:0,isLast:S===N.length-1,collapsedPaths:l,onToggleCollapse:p},y))}catch{w=r.jsx("pre",{className:"xml-box",children:e.raw_xml})}return r.jsxs("div",{className:"event-detail",children:[r.jsx(Ze,{to:"/events",children:"← Back to Events"}),r.jsxs("div",{className:"detail-panel",children:[r.jsxs("h3",{children:["Event #",e.id]}),r.jsxs("div",{className:"detail-layout",children:[r.jsxs("div",{className:"detail-fields",children:[r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Timestamp:"}),r.jsx("span",{className:"field-value",children:new Date(e.timestamp).toLocaleString()})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Level:"}),r.jsx("span",{className:"field-value",children:yk(e.level)})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Event ID:"}),r.jsx("span",{className:"field-value",children:e.event_id})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Source:"}),r.jsx("span",{className:"field-value",children:e.source})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Log Name:"}),r.jsx("span",{className:"field-value",children:e.log_name})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Computer:"}),r.jsx("span",{className:"field-value",children:e.computer})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"User:"}),r.jsx("span",{className:"field-value",children:e.user||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"User SID:"}),r.jsx("span",{className:"field-value",children:e.user_sid||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Session ID:"}),r.jsx("span",{className:"field-value",children:e.session_id||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"IP Address:"}),r.jsx("span",{className:"field-value",children:e.ip_address||"N/A"})]})]}),r.jsxs("div",{className:"detail-actions",children:[e.raw_xml&&r.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),e.raw_xml&&r.jsx("button",{className:"btn-action btn-copy",onClick:b,children:"Copy JSON"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Message:"}),r.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&r.jsxs("div",{className:"detail-section",children:[r.jsxs("div",{className:"raw-json-header",children:[r.jsx("label",{children:"Raw JSON:"}),r.jsxs("div",{className:"raw-json-actions",children:[r.jsx("button",{className:"btn-small",onClick:m,children:"Expand All"}),r.jsx("button",{className:"btn-small",onClick:v,children:"Collapse All"})]})]}),r.jsx("div",{className:"json-tree",children:w})]})]}),u&&e.raw_xml&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal-content modal-large",onClick:j=>j.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("span",{children:["Raw JSON - Event #",e.id]}),r.jsxs("div",{className:"modal-header-actions",children:[r.jsx("button",{className:"btn-small",onClick:b,children:"Copy"}),r.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),r.jsx("div",{className:"modal-body",children:r.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(e.raw_xml),null,2)})})]})}),r.jsx("style",{children:`
        .detail-layout {
          display: flex;
          margin-bottom: 20px;
          gap: 20px;
        }
        .detail-fields {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .detail-field {
          display: flex;
          gap: 15px;
          padding: 8px 0;
          border-bottom: 1px solid #333;
        }
        .field-label {
          width: 140px;
          font-weight: bold;
          color: #00d9ff;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .field-value {
          color: #e0e0e0;
          word-break: break-all;
        }
        .detail-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 10px;
          border-left: 1px solid #333;
          min-width: 140px;
        }
        .btn-action {
          padding: 10px 20px;
          background: #1a3d5c;
          color: #00d9ff;
          border: 1px solid #00d9ff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          text-align: center;
        }
        .btn-action:hover {
          background: #00d9ff;
          color: #0a0a1a;
        }
        .btn-action.btn-copy {
          background: #1a4d1a;
          border-color: #2e7d32;
          color: #4caf50;
        }
        .btn-action.btn-copy:hover {
          background: #2e7d32;
          color: #fff;
        }
        .detail-section {
          margin-top: 15px;
        }
        .detail-section label {
          display: block;
          font-weight: bold;
          color: #00d9ff;
          margin-bottom: 5px;
        }
        .message-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .raw-json-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .raw-json-header label {
          margin-bottom: 0 !important;
        }
        .raw-json-actions {
          display: flex;
          gap: 8px;
        }
        .btn-small {
          padding: 4px 10px;
          font-size: 12px;
          background: #1a1a2e;
          color: #00d9ff;
          border: 1px solid #00d9ff;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-small:hover {
          background: #00d9ff;
          color: #0a0a1a;
        }
        .json-tree {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          max-height: 500px;
          overflow-y: auto;
        }
        .json-line {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          line-height: 1.5;
          white-space: pre;
        }
        .json-collapsible {
          cursor: pointer;
          user-select: none;
        }
        .json-collapsible:hover {
          background: rgba(0, 217, 255, 0.1);
        }
        .json-key {
          color: #00d9ff;
        }
        .json-string {
          color: #a5d6a7;
        }
        .json-number {
          color: #ffcc02;
        }
        .json-boolean {
          color: #ce93d8;
        }
        .json-null {
          color: #78909c;
        }
        .json-punct {
          color: #e0e0e0;
        }
        .json-collapse-hint {
          color: #78909c;
          font-style: italic;
        }
        .json-toggle {
          color: #00d9ff;
          margin-left: 5px;
          font-size: 10px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #0a0a1a;
          border: 1px solid #00d9ff;
          border-radius: 8px;
          max-width: 90vw;
          max-height: 90vh;
          overflow: hidden;
        }
        .modal-large {
          width: 90vw;
          height: 85vh;
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: #1a1a2e;
          border-bottom: 1px solid #333;
        }
        .modal-header span {
          font-weight: bold;
          color: #00d9ff;
        }
        .modal-close {
          background: none;
          border: none;
          color: #e0e0e0;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }
        .modal-close:hover {
          color: #00d9ff;
        }
        .modal-body {
          padding: 20px;
          overflow: auto;
          max-height: calc(85vh - 60px);
        }
        .json-large {
          margin: 0;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          line-height: 1.5;
          color: #e0e0e0;
          white-space: pre-wrap;
          word-break: break-all;
        }
      `})]})}function jk(){const{t}=pt(),e=Wn(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState(1),[h,p]=E.useState(""),[m,v]=E.useState([]),[b,w]=E.useState("brute-force"),[j,N]=E.useState(!1),[y,_]=E.useState(!1);E.useEffect(()=>{l(!0),_n.list(c,50,h||void 0).then(F=>{const te=F.data;i(te.alerts||[]),l(!1)}).catch(()=>l(!1))},[c,h]);const S=F=>{_n.resolve(F,"Resolved via Web UI").then(()=>{i(n.map(te=>te.id===F?{...te,resolved:!0}:te))})},A=F=>{const te=prompt("Enter reason for marking as false positive:");te&&_n.markFalsePositive(F,te).then(()=>{i(n.filter(V=>V.id!==F)),v(V=>V.filter(ae=>ae!==F))}).catch(V=>{console.error("Failed to mark as false positive:",V)})},z=F=>{confirm("Are you sure you want to delete this alert?")&&_n.delete(F).then(()=>{i(n.filter(te=>te.id!==F)),v(te=>te.filter(V=>V!==F))}).catch(te=>{console.error("Failed to delete alert:",te)})},R=F=>{m.length!==0&&_n.batchAction(m,F).then(()=>{F==="resolve"?i(n.map(te=>m.includes(te.id)?{...te,resolved:!0}:te)):F==="delete"&&i(n.filter(te=>!m.includes(te.id))),v([])}).catch(te=>{console.error("Batch action failed:",te)})},I=F=>{v(te=>te.includes(F)?te.filter(V=>V!==F):[...te,F])},M=()=>{m.length===n.length?v([]):v(n.map(F=>F.id))},C=()=>{m.forEach(F=>{_n.resolve(F,"Batch resolved via Web UI")}),i(n.map(F=>m.includes(F.id)?{...F,resolved:!0}:F)),v([])},O=()=>{_(!0),Ag.run(b,{hours:24}).then(()=>{_(!1),N(!1),e("/analyze")}).catch(F=>{console.error("Analysis failed:",F),_(!1),N(!1),e("/analyze")})},W=F=>{switch(F){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},X={total:n.length,critical:n.filter(F=>F.severity==="critical").length,high:n.filter(F=>F.severity==="high").length,medium:n.filter(F=>F.severity==="medium").length,low:n.filter(F=>F.severity==="low").length};return r.jsxs("div",{className:"alerts-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("alerts.title")}),r.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-analyze",onClick:()=>N(!0),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"}),r.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),r.jsxs("div",{className:"alerts-stats-grid",children:[r.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.total}),r.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),r.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.critical}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),r.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.high}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),r.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[r.jsx("span",{className:"stat-icon",children:"🟡"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.medium}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),r.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[r.jsx("span",{className:"stat-icon",children:"🟢"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.low}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),r.jsxs("div",{className:"alerts-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("select",{className:"severity-select",value:h,onChange:F=>p(F.target.value),children:[r.jsx("option",{value:"",children:t("alerts.allSeverities")}),r.jsx("option",{value:"critical",children:t("dashboard.critical")}),r.jsx("option",{value:"high",children:t("dashboard.high")}),r.jsx("option",{value:"medium",children:t("dashboard.medium")}),r.jsx("option",{value:"low",children:t("dashboard.low")})]})}),r.jsx("div",{className:"toolbar-right",children:m.length>0&&r.jsxs("div",{className:"batch-actions",children:[r.jsxs("span",{className:"selected-count",children:[m.length," selected"]}),r.jsx("button",{className:"btn-batch-resolve",onClick:C,children:t("alerts.resolveSelected")}),r.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>R("false-positive"),children:"Mark False Positive"}),r.jsx("button",{className:"btn-batch-delete",onClick:()=>R("delete"),children:"Delete"})]})})]}),o?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]}):r.jsxs("div",{className:"alerts-table-container",children:[r.jsxs("table",{className:"alerts-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:m.length===n.length&&n.length>0,onChange:M})}),r.jsx("th",{children:"ID"}),r.jsx("th",{children:t("alerts.severity")}),r.jsx("th",{children:t("alerts.rule")}),r.jsx("th",{children:t("alerts.message")}),r.jsx("th",{children:t("alerts.count")}),r.jsx("th",{children:t("alerts.status")}),r.jsx("th",{children:t("alerts.actions")})]})}),r.jsx("tbody",{children:n.map(F=>{var te;return r.jsxs("tr",{className:m.includes(F.id)?"selected":"",children:[r.jsx("td",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:m.includes(F.id),onChange:()=>I(F.id)})}),r.jsx("td",{className:"id-col",children:F.id}),r.jsx("td",{children:r.jsx("span",{className:`badge ${W(F.severity)}`,children:F.severity})}),r.jsx("td",{className:"rule-col",children:F.rule_name}),r.jsxs("td",{className:"message-col",children:[(te=F.message)==null?void 0:te.substring(0,100),"..."]}),r.jsx("td",{className:"count-col",children:F.count}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${F.resolved?"resolved":"active"}`,children:F.resolved?t("alerts.resolved"):t("alerts.active")})}),r.jsxs("td",{className:"actions-col",children:[r.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${F.id}`),children:"Detail"}),!F.resolved&&r.jsx("button",{className:"btn-resolve",onClick:()=>S(F.id),children:t("alerts.resolve")}),r.jsx("button",{className:"btn-falsepositive",onClick:()=>A(F.id),children:"False Positive"}),r.jsx("button",{className:"btn-delete",onClick:()=>z(F.id),children:"Delete"})]})]},F.id)})})]}),n.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"🛡️"}),r.jsx("p",{children:t("alerts.noAlerts")})]})]}),j&&r.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:r.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("alerts.runAnalysis")}),r.jsx("button",{className:"close-btn",onClick:()=>N(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),r.jsxs("div",{className:"analyzer-select-group",children:[r.jsx("label",{children:t("alerts.selectAnalyzer")}),r.jsx("div",{className:"analyzer-options",children:[{id:"brute-force",icon:"🔐",name:t("analyze.bruteForce")},{id:"login",icon:"🔑",name:t("analyze.login")},{id:"kerberos",icon:"🎭",name:t("analyze.kerberos")},{id:"powershell",icon:"⚡",name:t("analyze.powershell")}].map(F=>r.jsxs("div",{className:`analyzer-option ${b===F.id?"selected":""}`,onClick:()=>w(F.id),children:[r.jsx("span",{className:"analyzer-icon",children:F.icon}),r.jsx("span",{className:"analyzer-name",children:F.name})]},F.id))})]}),r.jsxs("div",{className:"analysis-summary",children:[r.jsx("h4",{children:t("alerts.analysisSummary")}),r.jsxs("ul",{children:[r.jsxs("li",{children:[t("alerts.analysisTarget"),": ",m.length>0?`${m.length} ${t("alerts.selectedAlerts")}`:t("alerts.allAlerts")]}),r.jsxs("li",{children:[t("alerts.analysisScope"),": ",h||t("alerts.allSeverities")]})]})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-cancel",onClick:()=>N(!1),children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:O,disabled:y,children:y?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("alerts.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]})]})})]})}function wk(){const{id:t}=tg(),e=Wn(),[n,i]=E.useState(null),[o,l]=E.useState(!0),[c,u]=E.useState(""),[h,p]=E.useState(!1);E.useEffect(()=>{t&&(l(!0),_n.get(Number(t)).then(j=>{i(j.data),l(!1)}).catch(()=>l(!1)))},[t]);const m=async()=>{if(n){p(!0);try{await _n.resolve(n.id,c),i({...n,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(j){console.error("Failed to resolve:",j)}finally{p(!1)}}},v=async()=>{if(n){p(!0);try{await _n.markFalsePositive(n.id,c),i({...n,false_positive:!0,notes:c})}catch(j){console.error("Failed to mark false positive:",j)}finally{p(!1)}}},b=()=>{if(!n)return;const j=new URLSearchParams;n.message&&j.set("keywords",n.message.substring(0,100)),n.first_seen&&j.set("start_time",n.first_seen),n.last_seen&&j.set("end_time",n.last_seen),n.log_name&&j.set("log_names",n.log_name),e(`/events?${j.toString()}`)};if(o)return r.jsx("div",{children:"Loading..."});if(!n)return r.jsx("div",{children:"Alert not found"});const w=j=>{switch(j){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return r.jsxs("div",{className:"alert-detail",children:[r.jsx(Ze,{to:"/alerts",children:"← Back to Alerts"}),r.jsxs("div",{className:"detail-panel",children:[r.jsxs("h3",{children:["Alert #",n.id]}),r.jsxs("div",{className:"status-badges",children:[r.jsx("span",{className:`badge ${w(n.severity)}`,children:n.severity.toUpperCase()}),n.resolved&&r.jsx("span",{className:"badge",style:{background:"#28a745"},children:"Resolved"}),n.false_positive&&r.jsx("span",{className:"badge",style:{background:"#6c757d"},children:"False Positive"})]}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Rule Name:"}),r.jsx("span",{children:n.rule_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Score:"}),r.jsx("span",{children:n.rule_score.toFixed(2)})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Log Name:"}),r.jsx("span",{children:n.log_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Count:"}),r.jsx("span",{children:n.count})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"First Seen:"}),r.jsx("span",{children:new Date(n.first_seen).toLocaleString()})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Last Seen:"}),r.jsx("span",{children:new Date(n.last_seen).toLocaleString()})]}),n.resolved_time&&r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Resolved Time:"}),r.jsx("span",{children:new Date(n.resolved_time).toLocaleString()})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Message:"}),r.jsx("pre",{className:"message-box",children:n.message})]}),n.mitre_attack&&n.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"MITRE ATT&CK:"}),r.jsx("div",{className:"mitre-tags",children:n.mitre_attack.map((j,N)=>r.jsx("span",{className:"mitre-tag",children:j},N))})]}),!n.resolved&&!n.false_positive&&r.jsxs("div",{className:"actions-section",children:[r.jsx("h4",{children:"Actions"}),r.jsx("textarea",{placeholder:"Add notes...",value:c,onChange:j=>u(j.target.value),rows:3}),r.jsxs("div",{className:"action-buttons",children:[r.jsx("button",{onClick:m,disabled:h,children:h?"Processing...":"Resolve"}),r.jsx("button",{onClick:v,disabled:h,style:{background:"#6c757d"},children:"Mark as False Positive"}),r.jsx("button",{onClick:b,style:{background:"#00d9ff",color:"#000"},children:"Search Related Events"})]})]}),n.notes&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Notes:"}),r.jsx("pre",{className:"notes-box",children:n.notes})]})]}),r.jsx("style",{children:`
        .status-badges {
          display: flex;
          gap: 10px;
          margin: 15px 0;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }
        .detail-item {
          display: flex;
          gap: 10px;
        }
        .detail-item label {
          font-weight: bold;
          color: #00d9ff;
        }
        .detail-section {
          margin-top: 15px;
        }
        .detail-section label {
          display: block;
          font-weight: bold;
          color: #00d9ff;
          margin-bottom: 5px;
        }
        .message-box, .notes-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          white-space: pre-wrap;
        }
        .mitre-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .mitre-tag {
          background: #1f4068;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85em;
        }
        .actions-section {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #333;
        }
        .actions-section textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 4px;
          background: #16213e;
          color: #eee;
          margin-bottom: 10px;
        }
        .action-buttons {
          display: flex;
          gap: 10px;
        }
      `})]})}function Nk(){const{t}=pt(),e=Wn(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState({eventCount:0,alertCount:0}),[h,p]=E.useState("all"),[m,v]=E.useState("24h");E.useEffect(()=>{l(!0),jd.get(300).then(_=>{const S=_.data;i(S.entries||[]),u({eventCount:S.event_count,alertCount:S.alert_count}),l(!1)}).catch(()=>l(!1))},[]);const b=(_,S)=>{if(_==="alert")switch(S){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},w=(_,S)=>{if(_==="alert")switch(S){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},j=_=>_==="alert"?"ALERT":"EVENT",N=n.filter(_=>h==="all"?!0:h==="events"?_.type==="event":h==="alerts"?_.type==="alert":!0),y=_=>{jd.deleteAlert(_).then(()=>{i(n.filter(S=>!(S.type==="alert"&&S.alert_id===_)))}).catch(S=>console.error("Failed to delete alert:",S))};return o?r.jsx("div",{className:"timeline-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})}):r.jsxs("div",{className:"timeline-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("timeline.title")}),r.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),r.jsxs("div",{className:"timeline-stats-cards",children:[r.jsxs("div",{className:"stat-card events",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.eventCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill events",style:{width:`${c.eventCount>0?c.eventCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card alerts",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.alertCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${c.alertCount>0?c.alertCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card ratio",children:[r.jsx("div",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsxs("span",{className:"stat-value",children:[c.eventCount+c.alertCount>0?(c.alertCount/(c.eventCount+c.alertCount)*100).toFixed(1):0,"%"]}),r.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),r.jsxs("div",{className:"timeline-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("div",{className:"filter-tabs",children:[r.jsxs("button",{className:`filter-tab ${h==="all"?"active":""}`,onClick:()=>p("all"),children:[t("timeline.all"),r.jsx("span",{className:"count",children:c.eventCount+c.alertCount})]}),r.jsxs("button",{className:`filter-tab ${h==="events"?"active":""}`,onClick:()=>p("events"),children:[t("timeline.eventsOnly"),r.jsx("span",{className:"count events",children:c.eventCount})]}),r.jsxs("button",{className:`filter-tab ${h==="alerts"?"active":""}`,onClick:()=>p("alerts"),children:[t("timeline.alertsOnly"),r.jsx("span",{className:"count alerts",children:c.alertCount})]})]})}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("select",{className:"time-range-select",value:m,onChange:_=>v(_.target.value),children:[r.jsx("option",{value:"1h",children:t("timeline.last1h")}),r.jsx("option",{value:"6h",children:t("timeline.last6h")}),r.jsx("option",{value:"24h",children:t("timeline.last24h")}),r.jsx("option",{value:"7d",children:t("timeline.last7d")}),r.jsx("option",{value:"30d",children:t("timeline.last30d")})]})})]}),r.jsx("div",{className:"timeline-container",children:N.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"📭"}),r.jsx("p",{children:t("timeline.noEntries")})]}):r.jsx("div",{className:"timeline",children:N.map((_,S)=>r.jsxs("div",{className:`timeline-item ${_.type}`,children:[r.jsxs("div",{className:"timeline-marker",style:{"--marker-color":w(_.type,_.severity)},children:[r.jsx("div",{className:"marker-dot"}),r.jsx("div",{className:"marker-line"})]}),r.jsxs("div",{className:"timeline-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"card-left",children:[r.jsx("span",{className:"card-icon",children:b(_.type,_.severity)}),r.jsx("span",{className:`timeline-type ${_.type}`,style:{color:w(_.type,_.severity)},children:j(_.type)}),_.type==="event"&&_.event_id&&r.jsxs("span",{className:"event-id-badge",children:["Event ",_.event_id]}),_.type==="alert"&&_.severity&&r.jsx("span",{className:`severity-badge ${_.severity}`,style:{background:`${w(_.type,_.severity)}20`,color:w(_.type,_.severity)},children:_.severity.toUpperCase()})]}),r.jsx("span",{className:"card-time",children:new Date(_.timestamp).toLocaleString()})]}),r.jsx("p",{className:"card-message",children:_.message}),_.type==="alert"&&_.rule_name&&r.jsxs("div",{className:"card-meta",children:[r.jsxs("span",{className:"rule-badge",children:[r.jsx("span",{className:"rule-icon",children:"📌"}),_.rule_name]}),_.mitre_attack&&_.mitre_attack.length>0&&r.jsxs("span",{className:"mitre-badge",children:[r.jsx("span",{className:"mitre-icon",children:"🎯"}),_.mitre_attack.join(", ")]})]}),_.type==="alert"&&_.alert_id&&r.jsxs("div",{className:"card-actions",children:[r.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${_.alert_id}`),children:t("timeline.viewDetails")}),r.jsx("button",{className:"btn-delete",onClick:()=>_.alert_id&&y(_.alert_id),children:t("timeline.delete")})]})]})]},`${_.type}-${_.id}-${S}`))})})]})}function _k(){const{t}=pt(),[e,n]=E.useState(!1),[i,o]=E.useState("security"),[l,c]=E.useState("html"),[u,h]=E.useState("7d"),[p,m]=E.useState([]),[v,b]=E.useState(null),[w,j]=E.useState(null);E.useEffect(()=>{xr.list().then(R=>m(R.data.reports)).catch(console.error)},[]);const N=async()=>{n(!0),j(null);try{const R=new Date,I=new Date;switch(u){case"24h":I.setHours(I.getHours()-24);break;case"7d":I.setDate(I.getDate()-7);break;case"30d":I.setDate(I.getDate()-30);break;case"90d":I.setDate(I.getDate()-90);break}await xr.generate({type:i,format:l,start_time:I.toISOString(),end_time:R.toISOString()}),b(new Date().toLocaleString());const C=(await xr.list()).data.reports||[];if(m(C),C.length>0){const O=C[0];confirm(`Report generated successfully!

Report: ${O.name}
Type: ${O.type}
Format: ${O.format}

Click OK to download now, or Cancel to view in reports list.`)&&_(O)}}catch(R){console.error("Report generation failed:",R),j("Failed to generate report. Please try again.")}finally{n(!1)}},y=async R=>{try{const I=await xr.get(R.id);if(I.data.content){const M=window.open("","_blank");M&&(R.format==="html"?(M.document.write(I.data.content),M.document.close()):(M.document.write(`<pre>${JSON.stringify(I.data,null,2)}</pre>`),M.document.close()))}else alert("Report content not available")}catch(I){console.error("Failed to view report:",I),alert("Failed to view report")}},_=async R=>{try{const I=R.format||"json",M=await xr.export(I),C=new Blob([M.data],{type:M.headers["content-type"]||"application/octet-stream"}),O=URL.createObjectURL(C),W=document.createElement("a");W.href=O,W.download=`${R.name||R.id}.${I}`,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(O)}catch(I){console.error("Failed to download report:",I),alert("Failed to download report")}},S=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB",A=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],z=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return r.jsxs("div",{className:"reports-page",children:[r.jsx("h2",{children:t("reports.title")}),r.jsxs("div",{className:"reports-grid",children:[r.jsxs("div",{className:"reports-card main-config",children:[r.jsx("h3",{children:t("reports.generateReport")}),r.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Report Type"}),r.jsx("div",{className:"type-grid",children:A.map(R=>r.jsxs("div",{className:`type-option ${i===R.value?"selected":""}`,onClick:()=>o(R.value),children:[r.jsx("div",{className:"type-icon",children:R.icon}),r.jsx("div",{className:"type-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Output Format"}),r.jsx("div",{className:"format-row",children:z.map(R=>r.jsxs("div",{className:`format-option ${l===R.value?"selected":""}`,onClick:()=>c(R.value),children:[r.jsx("div",{className:"format-icon",children:R.icon}),r.jsx("div",{className:"format-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Time Range"}),r.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(R=>r.jsxs("button",{className:`range-btn ${u===R?"active":""}`,onClick:()=>h(R),children:[R==="24h"&&"Last 24 Hours",R==="7d"&&"Last 7 Days",R==="30d"&&"Last 30 Days",R==="90d"&&"Last 90 Days"]},R))})]}),w&&r.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),r.jsx("button",{className:"btn-primary generate-btn",onClick:N,disabled:e,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):r.jsxs(r.Fragment,{children:["📊 ",t("reports.generate")]})}),v&&r.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",v]})]}),r.jsxs("div",{className:"reports-card stats-card",children:[r.jsx("h3",{children:"Report Statistics"}),r.jsxs("div",{className:"stats-preview",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"📁"}),r.jsx("div",{className:"stat-value",children:p.length}),r.jsx("div",{className:"stat-label",children:"Total Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🛡️"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="security").length}),r.jsx("div",{className:"stat-label",children:"Security Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="alert").length}),r.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),r.jsxs("div",{className:"chart-placeholder",children:[r.jsx("div",{className:"chart-label",children:"Reports by Type"}),r.jsxs("div",{className:"mini-chart",children:[r.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),r.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),r.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),r.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),r.jsxs("div",{className:"reports-card full-width",children:[r.jsx("h3",{children:t("reports.recentReports")}),p.length>0?r.jsx("div",{className:"reports-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Report Name"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Format"}),r.jsx("th",{children:"Generated"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:p.map(R=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"report-name",children:[r.jsxs("span",{className:"report-icon",children:[R.type==="security"&&"🛡️",R.type==="alert"&&"🚨",R.type==="timeline"&&"📊",R.type==="compliance"&&"📋"]}),R.name]})}),r.jsx("td",{children:r.jsx("span",{className:`type-badge ${R.type}`,children:R.type})}),r.jsx("td",{children:r.jsx("span",{className:"format-badge",children:R.format.toUpperCase()})}),r.jsx("td",{children:new Date(R.generated_at).toLocaleString()}),r.jsx("td",{children:S(R.size)}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>y(R),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>_(R),children:"Download"})]})]},R.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📊"}),r.jsx("div",{className:"empty-text",children:t("reports.noReports")}),r.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),r.jsx("style",{children:`
        .reports-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin-bottom: 24px;
        }
        
        .reports-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .reports-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #333;
        }
        
        .reports-card.full-width {
          grid-column: 1 / -1;
        }
        
        .reports-card h3 {
          color: #00d9ff;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        
        .card-desc {
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 24px;
        }
        
        .config-section {
          margin-bottom: 24px;
        }
        
        .section-label {
          display: block;
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .type-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .type-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        
        .type-option:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .type-option.selected {
          border-color: #00d9ff;
          background: rgba(0, 217, 255, 0.1);
        }
        
        .type-icon {
          font-size: 1.5rem;
        }
        
        .type-label {
          color: #eee;
          font-weight: 500;
        }
        
        .format-row {
          display: flex;
          gap: 12px;
        }
        
        .format-option {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        
        .format-option:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .format-option.selected {
          border-color: #00d9ff;
          background: rgba(0, 217, 255, 0.1);
        }
        
        .format-icon {
          font-size: 1.5rem;
        }
        
        .format-label {
          color: #eee;
          font-size: 0.9rem;
        }
        
        .date-range-selector {
          display: flex;
          gap: 8px;
        }
        
        .range-btn {
          flex: 1;
          padding: 10px 16px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.85rem;
        }
        
        .range-btn:hover {
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .range-btn.active {
          background: #00d9ff;
          border-color: #00d9ff;
          color: #1a1a2e;
        }
        
        .generate-btn {
          width: 100%;
          padding: 14px 24px;
          font-size: 1rem;
        }
        
        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #1a1a2e;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .last-generated {
          text-align: center;
          color: #22c55e;
          font-size: 0.85rem;
          margin-top: 12px;
        }
        
        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 0.9rem;
        }
        
        .stats-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .stat-item {
          text-align: center;
          padding: 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
        }
        
        .stat-icon {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
        
        .stat-value {
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
          margin-top: 4px;
        }
        
        .chart-placeholder {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 16px;
        }
        
        .chart-label {
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 16px;
        }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 80px;
        }
        
        .bar {
          flex: 1;
          border-radius: 4px 4px 0 0;
          min-height: 8px;
        }
        
        .reports-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .reports-table th,
        .reports-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #333;
        }
        
        .reports-table th {
          background: rgba(0, 0, 0, 0.2);
          color: #00d9ff;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        
        .reports-table tr:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .report-name {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: monospace;
        }
        
        .report-icon {
          font-size: 1.2rem;
        }
        
        .type-badge, .format-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
          text-transform: uppercase;
        }
        
        .type-badge.security { background: rgba(0, 217, 255, 0.1); color: #00d9ff; }
        .type-badge.alert { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
        .type-badge.timeline { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
        .type-badge.compliance { background: rgba(234, 179, 8, 0.1); color: #eab308; }
        
        .format-badge {
          background: rgba(255, 255, 255, 0.05);
          color: #888;
        }
        
        .btn-small {
          padding: 6px 12px;
          font-size: 0.8rem;
          margin-right: 8px;
        }
        
        .empty-state {
          text-align: center;
          padding: 40px;
        }
        
        .empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        
        .empty-text {
          color: #888;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        
        .empty-hint {
          color: #555;
          font-size: 0.85rem;
        }
      `})]})}function kk(){const{t}=pt(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(""),[u,h]=E.useState(null),[p,m]=E.useState(!1),[v,b]=E.useState(!1),[w,j]=E.useState([]),[N,y]=E.useState(""),[_,S]=E.useState(["eventlogs","registry","prefetch"]),[A,z]=E.useState([]),[R,I]=E.useState(!1);E.useEffect(()=>{M(),C()},[]);const M=()=>{Ms.listEvidence().then(U=>{U.data&&Array.isArray(U.data)&&j(U.data)}).catch(U=>console.error("Failed to load evidence:",U))},C=()=>{Ms.chainOfCustody().then(U=>{U.data&&Array.isArray(U.data)&&z(U.data)}).catch(U=>console.error("Failed to load chain of custody:",U))},O=async()=>{var U,ie;if(l.trim()){b(!0);try{const K=await Ms.calculateHash(l);o(K.data.hash||"")}catch(K){console.error("Failed to calculate hash:",K),alert("Failed to calculate hash: "+(((ie=(U=K.response)==null?void 0:U.data)==null?void 0:ie.error)||K.message))}finally{b(!1)}}},W=async()=>{n(!0),y("starting");try{for(const U of _)y(`collecting:${U}`),await Ms.collect(U,`/tmp/forensics_${U}`);M(),C(),y("completed")}catch(U){console.error("Collection failed:",U),y("error")}finally{n(!1)}},X=async()=>{var U,ie;if(!(!i.trim()||!l.trim())){m(!0),h(null);try{const K=await Ms.verifyHash(l,i);h({verified:K.data.match||!1,expected:i,actual:K.data.actual||i,path:l})}catch(K){h({verified:!1,expected:i,actual:((ie=(U=K.response)==null?void 0:U.data)==null?void 0:ie.error)||"Hash verification failed",path:l})}finally{m(!1)}}},F=U=>{S(ie=>ie.includes(U)?ie.filter(K=>K!==U):[...ie,U])},te=async U=>{try{const ie=await Ms.getEvidence(U.id);if(ie.data.content){const K=window.open("","_blank");K&&(K.document.write(`<pre>${JSON.stringify(ie.data,null,2)}</pre>`),K.document.close())}else alert("Evidence content not available")}catch(ie){console.error("Failed to view evidence:",ie),alert("Failed to view evidence")}},V=async U=>{try{const ie=await Ms.exportEvidence(U.id,"json"),K=new Blob([ie.data],{type:ie.headers["content-type"]||"application/octet-stream"}),re=URL.createObjectURL(K),G=document.createElement("a");G.href=re,G.download=`evidence_${U.type}_${U.id}.json`,document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(re)}catch(ie){console.error("Failed to export evidence:",ie),alert("Failed to export evidence")}},ae=U=>U<1024?U+" B":U<1024*1024?(U/1024).toFixed(1)+" KB":(U/(1024*1024)).toFixed(1)+" MB";return r.jsxs("div",{className:"forensics-page",children:[r.jsx("h2",{children:t("forensics.title")}),r.jsxs("div",{className:"forensics-grid",children:[r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.evidenceCollection")}),r.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),r.jsxs("div",{className:"collection-types",children:[r.jsxs("div",{className:"type-item",onClick:()=>F("eventlogs"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("eventlogs")?"checked":""}`,children:_.includes("eventlogs")&&"✓"}),r.jsx("div",{className:"type-icon",children:"📋"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),r.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("registry"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("registry")?"checked":""}`,children:_.includes("registry")&&"✓"}),r.jsx("div",{className:"type-icon",children:"🔧"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.registry")}),r.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("memory"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("memory")?"checked":""}`,children:_.includes("memory")&&"✓"}),r.jsx("div",{className:"type-icon",children:"💾"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),r.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("prefetch"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("prefetch")?"checked":""}`,children:_.includes("prefetch")&&"✓"}),r.jsx("div",{className:"type-icon",children:"⚡"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),r.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),N&&r.jsxs("div",{className:`collect-status ${N}`,children:[N==="starting"&&"📡 Initializing collection...",N.startsWith("collecting:")&&`🔍 Collecting ${N.split(":")[1]}...`,N==="completed"&&"✅ Collection completed",N==="error"&&"❌ Collection failed"]}),r.jsx("button",{className:"btn-primary forensics-btn",onClick:W,disabled:e||_.length===0,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):r.jsxs(r.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.hashVerification")}),r.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),r.jsxs("div",{className:"hash-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"File Path"}),r.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:l,onChange:U=>c(U.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Expected SHA256 Hash"}),r.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:i,onChange:U=>o(U.target.value)})]}),r.jsx("button",{className:"btn-secondary",onClick:O,disabled:v||!l.trim(),children:v?"Calculating...":"Calculate Hash"}),r.jsx("button",{className:"btn-secondary",onClick:X,disabled:p||!i.trim()||!l.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&r.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[r.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),r.jsxs("div",{className:"result-content",children:[r.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),r.jsxs("div",{className:"result-details",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"File:"})," ",u.path]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Expected:"})," ",r.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Actual:"})," ",r.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),r.jsxs("div",{className:"forensics-card full-width",children:[r.jsxs("div",{className:"section-header",children:[r.jsxs("div",{children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),r.jsx("button",{className:"btn-secondary",onClick:()=>I(!0),children:"View Full Chain"})]}),w.length>0?r.jsx("div",{className:"evidence-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Collected At"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Hash"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:w.map(U=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"evidence-type",children:U.type})}),r.jsx("td",{children:new Date(U.collected_at).toLocaleString()}),r.jsx("td",{children:r.jsx("code",{className:"evidence-path",children:U.path})}),r.jsx("td",{children:ae(U.size)}),r.jsx("td",{children:r.jsxs("code",{className:"evidence-hash",children:[U.hash.substring(0,16),"..."]})}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>te(U),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>V(U),children:"Export"})]})]},U.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📦"}),r.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),r.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),R&&r.jsx("div",{className:"modal-overlay",onClick:()=>I(!1),children:r.jsxs("div",{className:"modal-content chain-modal",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("button",{className:"close-btn",onClick:()=>I(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:A.length>0?r.jsx("div",{className:"chain-timeline",children:A.map((U,ie)=>r.jsxs("div",{className:"chain-entry",children:[r.jsx("div",{className:"chain-dot",children:ie+1}),r.jsxs("div",{className:"chain-content",children:[r.jsx("div",{className:"chain-action",children:U.action}),r.jsx("div",{className:"chain-details",children:U.details}),r.jsxs("div",{className:"chain-meta",children:[r.jsx("span",{className:"chain-time",children:new Date(U.timestamp).toLocaleString()}),U.user&&r.jsxs("span",{className:"chain-user",children:["by ",U.user]})]})]})]},U.id))}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),r.jsx("style",{children:`
        .forensics-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin-bottom: 24px;
        }
        
        .forensics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .forensics-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #333;
        }
        
        .forensics-card.full-width {
          grid-column: 1 / -1;
        }
        
        .forensics-card h3 {
          color: #00d9ff;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        
        .card-desc {
          color: #888;
          font-size: 0.85rem;
          margin-bottom: 20px;
        }
        
        .collection-types {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .type-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        
        .type-item:hover {
          background: rgba(0, 217, 255, 0.05);
          border-color: rgba(0, 217, 255, 0.2);
        }
        
        .type-checkbox {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 2px solid #444;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #00d9ff;
          transition: all 0.2s;
        }
        
        .type-checkbox.checked {
          background: #00d9ff;
          border-color: #00d9ff;
          color: #1a1a2e;
        }
        
        .type-icon {
          font-size: 1.5rem;
        }
        
        .type-name {
          color: #eee;
          font-weight: 500;
        }
        
        .type-desc {
          color: #666;
          font-size: 0.8rem;
        }
        
        .collect-status {
          padding: 12px 16px;
          border-radius: 8px;
          margin-bottom: 16px;
          font-size: 0.9rem;
        }
        
        .collect-status.starting, .collect-status.completed {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }
        
        .collect-status.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }
        
        .collect-status.collecting {
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid rgba(0, 217, 255, 0.3);
          color: #00d9ff;
        }
        
        .btn-primary.forensics-btn {
          width: 100%;
          padding: 14px 24px;
          font-size: 1rem;
        }
        
        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #1a1a2e;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
          margin-right: 8px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .hash-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .form-group label {
          color: #888;
          font-size: 0.85rem;
        }
        
        .form-group input {
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #333;
          border-radius: 6px;
          color: #eee;
          font-size: 0.9rem;
          font-family: monospace;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .hash-result {
          display: flex;
          gap: 16px;
          padding: 16px;
          border-radius: 8px;
          margin-top: 16px;
        }
        
        .hash-result.match {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .hash-result.no-match {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .result-icon {
          font-size: 2rem;
        }
        
        .result-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .hash-result.match .result-title { color: #22c55e; }
        .hash-result.no-match .result-title { color: #ef4444; }
        
        .result-details {
          font-size: 0.85rem;
          color: #888;
        }
        
        .result-details code {
          font-family: monospace;
          color: #00d9ff;
        }
        
        .evidence-table {
          overflow-x: auto;
        }
        
        .evidence-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .evidence-table th,
        .evidence-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #333;
        }
        
        .evidence-table th {
          background: rgba(0, 0, 0, 0.2);
          color: #00d9ff;
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        
        .evidence-table tr:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .evidence-type {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        
        .evidence-path {
          font-family: monospace;
          font-size: 0.85rem;
          color: #10b981;
        }
        
        .evidence-hash {
          font-family: monospace;
          font-size: 0.85rem;
          color: #f59e0b;
        }
        
        .btn-small {
          padding: 6px 12px;
          font-size: 0.8rem;
          margin-right: 8px;
        }
        
        .empty-state {
          text-align: center;
          padding: 40px;
        }
        
        .empty-icon {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        
        .empty-text {
          color: #888;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        
        .empty-hint {
          color: #555;
          font-size: 0.85rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .section-header h3 {
          margin-bottom: 4px;
        }

        .section-header .btn-secondary {
          padding: 8px 16px;
        }

        .chain-modal {
          max-width: 700px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .chain-timeline {
          position: relative;
          padding-left: 30px;
        }

        .chain-timeline::before {
          content: '';
          position: absolute;
          left: 10px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #333;
        }

        .chain-entry {
          position: relative;
          margin-bottom: 24px;
        }

        .chain-dot {
          position: absolute;
          left: -34px;
          top: 0;
          width: 24px;
          height: 24px;
          background: #00d9ff;
          color: #1a1a2e;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .chain-content {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 12px 16px;
          border: 1px solid #333;
        }

        .chain-action {
          color: #fff;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .chain-details {
          color: #888;
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .chain-meta {
          display: flex;
          gap: 16px;
          font-size: 0.8rem;
          color: #666;
        }

        .chain-user {
          color: #00d9ff;
        }
      `})]})}function Sk(){var F,te;const{t}=pt(),[e,n]=E.useState("system"),[i,o]=E.useState(null),[l,c]=E.useState([]),[u,h]=E.useState([]),[p,m]=E.useState([]),[v,b]=E.useState([]),[w,j]=E.useState([]),[N,y]=E.useState(!0),[_,S]=E.useState(null);E.useEffect(()=>{A()},[]);const A=()=>{y(!0),Fs.getInfo().then(V=>{o(V.data),y(!1)}).catch(V=>{S(V.message||t("common.error")),y(!1)})},z=()=>{l.length>0||(y(!0),Fs.getProcesses(50).then(V=>{c(V.data.processes||[]),y(!1)}).catch(()=>y(!1)))},R=()=>{u.length>0||(y(!0),Fs.getNetwork(50).then(V=>{h(V.data.connections||[]),y(!1)}).catch(()=>y(!1)))},I=()=>{p.length>0||(y(!0),Fs.getEnvVariables().then(V=>{m(V.data.variables||[]),y(!1)}).catch(()=>y(!1)))},M=()=>{v.length>0||(y(!0),Fs.getLoadedDLLs(100).then(V=>{b(V.data.modules||[]),y(!1)}).catch(()=>y(!1)))},C=()=>{w.length>0||(y(!0),Fs.getDrivers().then(V=>{j(V.data.drivers||[]),y(!1)}).catch(()=>y(!1)))},O=V=>{n(V),V==="processes"&&z(),V==="network"&&R(),V==="env"&&I(),V==="dlls"&&M(),V==="drivers"&&C()},W=V=>{const ae=Math.floor(V/86400),U=Math.floor(V%86400/3600),ie=Math.floor(V%3600/60);return ae>0?`${ae}d ${U}h ${ie}m`:U>0?`${U}h ${ie}m`:`${ie}m`},X=V=>{switch(V==null?void 0:V.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return N&&!i?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})}):_?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"error-state",children:["Error: ",_]})}):r.jsxs("div",{className:"systeminfo-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("systemInfo.title")}),r.jsx("div",{className:"header-actions",children:r.jsx("button",{className:"btn-refresh",onClick:A,children:"Refresh"})})]}),r.jsxs("div",{className:"tab-nav",children:[r.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>O("system"),children:"System"}),r.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>O("processes"),children:["Processes (",l.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>O("network"),children:["Network (",u.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>O("env"),children:["Env (",p.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>O("dlls"),children:["DLLs (",v.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>O("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&i&&r.jsxs("div",{className:"system-grid",children:[r.jsxs("div",{className:"system-card os-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"OS"}),r.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),r.jsxs("div",{className:"system-status",children:[r.jsx("div",{className:"status-indicator online"}),r.jsx("span",{children:"System Online"})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),r.jsx("span",{className:"info-value highlight",children:i.hostname||"N/A"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),r.jsx("span",{className:"info-value",children:i.domain||"WORKGROUP"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),r.jsx("span",{className:"info-value",children:i.os_name||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),r.jsx("span",{className:"info-value",children:i.os_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),r.jsx("span",{className:"info-value badge",children:i.architecture||"x64"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),r.jsx("span",{className:"info-value",children:i.timezone||"UTC"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),r.jsx("span",{className:`info-value badge ${i.is_admin?"admin":"user"}`,children:i.is_admin?"Root/Admin":"Standard User"})]})]})]}),r.jsxs("div",{className:"system-card runtime-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Runtime"}),r.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),r.jsx("span",{className:"info-value mono",children:i.go_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),r.jsxs("span",{className:"info-value",children:[i.cpu_count||0," Cores"]})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),r.jsx("span",{className:"info-value",children:W(i.uptime_seconds||0)})]})]})]}),r.jsxs("div",{className:"system-card resources-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Resources"}),r.jsx("h3",{children:"System Resources"})]}),r.jsxs("div",{className:"resource-bars",children:[r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Memory"}),r.jsxs("span",{className:"resource-value",children:[i.memory_free_gb?(i.memory_total_gb-i.memory_free_gb).toFixed(1):"0"," / ",((F=i.memory_total_gb)==null?void 0:F.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill",style:{width:i.memory_total_gb?`${(i.memory_total_gb-i.memory_free_gb)/i.memory_total_gb*100}%`:"0%"}})})]}),r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Free Memory"}),r.jsxs("span",{className:"resource-value",children:[((te=i.memory_free_gb)==null?void 0:te.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill memory",style:{width:i.memory_total_gb?`${i.memory_free_gb/i.memory_total_gb*100}%`:"0%"}})})]})]})]}),r.jsxs("div",{className:"system-card time-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Time"}),r.jsx("h3",{children:"Time Information"})]}),r.jsxs("div",{className:"time-display",children:[r.jsx("div",{className:"current-time",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),r.jsx("div",{className:"current-date",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),r.jsx("div",{className:"info-list",children:r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"UTC Time"}),r.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"PPID"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"User"}),r.jsx("th",{children:"Command"})]})}),r.jsx("tbody",{children:l.map((V,ae)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:V.pid}),r.jsx("td",{className:"mono",children:V.ppid}),r.jsx("td",{children:V.name}),r.jsx("td",{children:V.user}),r.jsx("td",{className:"truncate",title:V.args,children:V.args||V.exe})]},`${V.pid}-${ae}`))})]}),l.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Protocol"}),r.jsx("th",{children:"Local Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"Remote Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"State"}),r.jsx("th",{children:"Process"})]})}),r.jsx("tbody",{children:u.map((V,ae)=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"protocol-badge",children:V.protocol})}),r.jsx("td",{className:"mono",children:V.local_addr}),r.jsx("td",{className:"mono",children:V.local_port}),r.jsx("td",{className:"mono",children:V.remote_addr||"-"}),r.jsx("td",{className:"mono",children:V.remote_port||"-"}),r.jsx("td",{children:r.jsx("span",{className:"state-badge",style:{color:X(V.state)},children:V.state})}),r.jsx("td",{children:V.process_name||V.pid||"-"})]},`${V.protocol}-${V.local_addr}-${V.local_port}-${ae}`))})]}),u.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Variable Name"}),r.jsx("th",{children:"Value"}),r.jsx("th",{children:"Type"})]})}),r.jsx("tbody",{children:p.map((V,ae)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:V.name}),r.jsx("td",{className:"truncate",title:V.value,children:V.value}),r.jsx("td",{children:r.jsx("span",{className:"type-badge",children:V.type})})]},`${V.name}-${ae}`))})]}),p.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"Process"}),r.jsx("th",{children:"DLL Name"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"})]})}),r.jsx("tbody",{children:v.map((V,ae)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:V.process_id}),r.jsx("td",{children:V.process_name}),r.jsx("td",{className:"mono highlight",children:V.name}),r.jsx("td",{className:"truncate",title:V.path,children:V.path}),r.jsxs("td",{className:"mono",children:[(V.size/1024).toFixed(1)," KB"]})]},`${V.process_id}-${V.name}-${ae}`))})]}),v.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Display Name"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Path"})]})}),r.jsx("tbody",{children:w.map((V,ae)=>{var U;return r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:V.name}),r.jsx("td",{children:V.display_name||V.name}),r.jsx("td",{className:"truncate",title:V.description,children:V.description||"-"}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${(U=V.status)==null?void 0:U.toLowerCase()}`,children:V.status})}),r.jsx("td",{className:"truncate mono",title:V.path,children:V.path||"-"})]},`${V.name}-${ae}`)})})]}),w.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No driver information available"})]}),r.jsx("style",{children:`
        .systeminfo-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .systeminfo-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .btn-refresh {
          padding: 8px 16px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
        }
        
        .btn-refresh:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .tab-nav {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
          background: rgba(255,255,255,0.05);
          padding: 4px;
          border-radius: 8px;
        }
        
        .tab-btn {
          padding: 10px 20px;
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s;
        }
        
        .tab-btn:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        
        .tab-btn.active {
          background: #00d9ff;
          color: #000;
        }
        
        .system-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .system-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #333;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .card-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 217, 255, 0.1);
          border-radius: 8px;
          color: #00d9ff;
          font-weight: bold;
        }
        
        .card-header h3 {
          color: #00d9ff;
          font-size: 1.1rem;
          margin: 0;
        }
        
        .system-status {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 8px 12px;
          background: rgba(34, 197, 94, 0.1);
          border-radius: 6px;
          color: #22c55e;
          font-size: 0.9rem;
        }
        
        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .status-indicator.online {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        
        .info-label {
          color: #888;
          font-size: 0.9rem;
        }
        
        .info-value {
          color: #eee;
          font-weight: 500;
        }
        
        .info-value.highlight {
          color: #00d9ff;
          font-size: 1.1rem;
        }
        
        .info-value.mono {
          font-family: monospace;
          font-size: 0.85rem;
        }
        
        .info-value.badge {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        
        .info-value.badge.admin {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .info-value.badge.user {
          background: rgba(255, 255, 255, 0.1);
          color: #888;
        }
        
        .resource-bars {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .resource-item {}
        
        .resource-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .resource-name {
          color: #888;
          font-size: 0.85rem;
        }
        
        .resource-value {
          color: #eee;
          font-size: 0.85rem;
          font-family: monospace;
        }
        
        .resource-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .resource-fill {
          height: 100%;
          background: linear-gradient(90deg, #00d9ff, #0099cc);
          border-radius: 4px;
          transition: width 0.3s;
        }
        
        .resource-fill.memory {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }
        
        .time-display {
          text-align: center;
          padding: 20px 0;
        }
        
        .current-time {
          font-size: 2.5rem;
          font-weight: bold;
          color: #fff;
          font-family: monospace;
        }
        
        .current-date {
          font-size: 1rem;
          color: #888;
          margin-top: 4px;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        .data-table-container {
          flex: 1;
          overflow: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
          padding: 12px 16px;
          text-align: left;
          font-weight: 600;
          position: sticky;
          top: 0;
        }
        
        .data-table td {
          padding: 10px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          color: #ddd;
        }
        
        .data-table tr:hover td {
          background: rgba(255,255,255,0.02);
        }
        
        .data-table .mono {
          font-family: monospace;
          color: #888;
        }
        
        .data-table .truncate {
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .protocol-badge {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .state-badge {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .state-badge.running {
          color: #22c55e;
        }

        .state-badge.stopped {
          color: #ef4444;
        }
        
        .empty-state {
          padding: 40px;
          text-align: center;
          color: #888;
        }

        .data-table .highlight {
          color: #00d9ff;
        }

        .type-badge {
          background: rgba(168, 85, 247, 0.2);
          color: #a855f7;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
      `})]})}function Ck(){const[t,e]=E.useState([]),[n,i]=E.useState(!0),[o,l]=E.useState(null),[c,u]=E.useState(0),[h,p]=E.useState(0),[m,v]=E.useState("all"),[b,w]=E.useState("all"),[j,N]=E.useState(""),[y,_]=E.useState(null),[S,A]=E.useState(!1),[z,R]=E.useState(!1),[I,M]=E.useState(!1),[C,O]=E.useState([]),[W,X]=E.useState(null),[F,te]=E.useState({}),[V,ae]=E.useState(null),[U,ie]=E.useState(!1),[K,re]=E.useState(!1),[G,D]=E.useState(null),Y=E.useRef(null),fe=()=>{Ln.list().then(Q=>{e(Q.data.rules||[]),u(Q.data.total_count||0),p(Q.data.enabled_count||0),i(!1)}).catch(Q=>{l(Q.message||"Failed to load rules"),i(!1)})};E.useEffect(()=>{fe()},[]);const ve=()=>{Ln.listTemplates().then(Q=>{O(Q.data.templates||[])}).catch(Q=>{console.error("Failed to load templates:",Q)})},be=()=>{ve(),M(!0)},ye=Q=>{X(Q);const pe={};Q.parameters.forEach(Ce=>{pe[Ce.name]=Ce.default||""}),te(pe)},Ae=()=>{W&&Ln.instantiateTemplate(W.name,F).then(()=>{M(!1),X(null),te({}),fe()}).catch(Q=>{console.error("Failed to create rule from template:",Q),alert("Failed to create rule from template")})},Re=(Q,pe)=>{Ln.toggle(Q,!pe).then(()=>{e(t.map(Ce=>Ce.name===Q?{...Ce,enabled:!pe}:Ce)),p(Ce=>pe?Ce-1:Ce+1)}).catch(Ce=>{console.error("Failed to toggle rule:",Ce)})},Fe=Q=>{if(!Q.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?"))return;const pe=prompt("Edit rule description:",Q.description);pe!==null&&pe!==Q.description&&Ln.save({...Q,description:pe}).then(()=>{e(t.map(Ce=>Ce.name===Q.name?{...Ce,description:pe}:Ce))}).catch(Ce=>{console.error("Failed to update rule:",Ce)})},mt=()=>{const Q=prompt(`Add rule: (1) From template, (2) Custom rule
Enter 1 or 2:`);if(Q==="1")be();else if(Q==="2"){const pe=prompt("Enter rule name:");if(!pe)return;const Ce=prompt("Enter rule description:")||"",Bt=prompt("Enter severity (critical/high/medium/low):","medium")||"medium";Ln.save({name:pe,description:Ce,severity:Bt,enabled:!0,score:50}).then(()=>{fe()}).catch(Z=>{console.error("Failed to add rule:",Z)})}},nn=()=>{A(!0),ae(null)},ge=Q=>{ie(!0),Ln.validate(Q).then(pe=>{ae(pe.data)}).catch(pe=>{ae({valid:!1,errors:[pe.message||"Validation failed"],warnings:[]})}).finally(()=>{ie(!1)})},Ft=Q=>{Ln.export(Q).then(pe=>{const Ce=new Blob([pe.data],{type:Q==="yaml"?"text/yaml":"application/json"}),Bt=URL.createObjectURL(Ce),Z=document.createElement("a");Z.href=Bt,Z.download=`rules_export.${Q}`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(Bt)}).catch(pe=>{console.error("Failed to export rules:",pe),alert("Failed to export rules")})},ys=()=>{R(!0),D(null)},Hn=Q=>{var Bt;const pe=(Bt=Q.target.files)==null?void 0:Bt[0];if(!pe)return;const Ce=new FileReader;Ce.onload=Z=>{var le;try{const De=(le=Z.target)==null?void 0:le.result;let Xe=[];if(pe.name.endsWith(".yaml")||pe.name.endsWith(".yml")){const ct=De.split(`
`);let dt={};for(const nt of ct)nt.startsWith("- name:")?(dt.name&&Xe.push(dt),dt={name:nt.replace("- name:","").trim(),mitre_attack:[]}):nt.startsWith("  description:")?dt.description=nt.replace("  description:","").trim():nt.startsWith("  severity:")?dt.severity=nt.replace("  severity:","").trim():nt.startsWith("  enabled:")?dt.enabled=nt.replace("  enabled:","").trim()==="true":nt.startsWith("  score:")?dt.score=parseFloat(nt.replace("  score:","").trim())||50:nt.startsWith("    - ")&&(dt.mitre_attack||(dt.mitre_attack=[]),dt.mitre_attack.push(nt.replace("    - ","").trim()));dt.name&&Xe.push(dt)}else{const ct=JSON.parse(De);Xe=Array.isArray(ct)?ct:ct.rules||[]}if(Xe.length===0){D({imported:0,failed:0,errors:["No valid rules found in file"]});return}re(!0),Ln.import(Xe).then(ct=>{D(ct.data),ct.data.imported>0&&fe()}).catch(ct=>{D({imported:0,failed:Xe.length,errors:[ct.message||"Import failed"]})}).finally(()=>{re(!1)})}catch(De){D({imported:0,failed:0,errors:["Failed to parse file: "+(De.message||"Invalid format")]})}},Ce.readAsText(pe)},Js=Q=>{_(Q)},Sn=Q=>{switch(Q==null?void 0:Q.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},bs=Q=>{switch(Q==null?void 0:Q.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},fn=t.filter(Q=>{var pe;return!(m!=="all"&&((pe=Q.severity)==null?void 0:pe.toLowerCase())!==m||b==="enabled"&&!Q.enabled||b==="disabled"&&Q.enabled||j&&!Q.name.toLowerCase().includes(j.toLowerCase()))});return n?r.jsx("div",{className:"rules-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading rules..."})]})}):o?r.jsx("div",{className:"rules-page",children:r.jsx("div",{className:"error-state",children:o})}):r.jsxs("div",{className:"rules-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Detection Rules"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:nn,children:"Validate"}),r.jsx("button",{className:"btn-secondary",onClick:ys,children:"Import"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",children:"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>Ft("json"),children:"JSON"}),r.jsx("button",{onClick:()=>Ft("yaml"),children:"YAML"})]})]}),r.jsx("button",{className:"btn-primary",onClick:mt,children:"Add Rule"})]})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value",children:c}),r.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon enabled",children:"✓"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value enabled",children:h}),r.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon disabled",children:"✗"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value disabled",children:c-h}),r.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),r.jsxs("div",{className:"filter-bar",children:[r.jsx("input",{type:"text",placeholder:"Search rules...",value:j,onChange:Q=>N(Q.target.value),className:"search-input"}),r.jsxs("select",{value:m,onChange:Q=>v(Q.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Severities"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"high",children:"High"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"low",children:"Low"})]}),r.jsxs("select",{value:b,onChange:Q=>w(Q.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"enabled",children:"Enabled"}),r.jsx("option",{value:"disabled",children:"Disabled"})]})]}),r.jsx("div",{className:"rules-grid",children:fn.map(Q=>{var pe;return r.jsxs("div",{className:`rule-card ${Q.enabled?"":"disabled"}`,children:[r.jsxs("div",{className:"rule-header",children:[r.jsxs("div",{className:"rule-title",children:[r.jsx("span",{className:`severity-dot ${Sn(Q.severity)}`}),r.jsx("span",{className:"rule-name",children:Q.name})]}),r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox",checked:Q.enabled,onChange:()=>Re(Q.name,Q.enabled)}),r.jsx("span",{className:"slider"})]})]}),r.jsxs("div",{className:"rule-meta",children:[r.jsxs("span",{className:`severity-badge ${Sn(Q.severity)}`,children:[bs(Q.severity)," ",Q.severity]}),r.jsxs("span",{className:"score-badge",children:["Score: ",Q.score]}),!Q.is_custom&&r.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),r.jsx("p",{className:"rule-description",children:Q.description}),r.jsxs("div",{className:"rule-footer",children:[r.jsxs("div",{className:"mitre-tags",children:[(pe=Q.mitre_attack)==null?void 0:pe.slice(0,3).map(Ce=>r.jsx("span",{className:"mitre-tag",children:Ce},Ce)),Q.mitre_attack&&Q.mitre_attack.length>3&&r.jsxs("span",{className:"mitre-tag",children:["+",Q.mitre_attack.length-3]})]}),r.jsxs("div",{className:"rule-actions",children:[r.jsx("button",{className:"rule-action",onClick:()=>Js(Q),children:"Details"}),r.jsx("button",{className:"rule-action",onClick:()=>Fe(Q),children:"Edit"})]})]})]},Q.id)})}),fn.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🛡️"}),r.jsx("div",{children:"No rules match your filters"})]}),y&&r.jsx("div",{className:"modal-overlay",onClick:()=>_(null),children:r.jsxs("div",{className:"modal-content rule-modal",onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Rule Details"}),r.jsx("button",{className:"close-btn",onClick:()=>_(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Name:"}),r.jsx("span",{className:"detail-value",children:y.name})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"ID:"}),r.jsx("span",{className:"detail-value mono",children:y.id})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Severity:"}),r.jsxs("span",{className:`severity-badge ${Sn(y.severity)}`,children:[bs(y.severity)," ",y.severity]})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Score:"}),r.jsx("span",{className:"detail-value",children:y.score})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Status:"}),r.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Description"}),r.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"MITRE ATT&CK"}),r.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(Q=>r.jsx("span",{className:"mitre-tag",children:Q},Q))})]}),y.tags&&y.tags.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Tags"}),r.jsx("div",{className:"tags-list",children:y.tags.map(Q=>r.jsx("span",{className:"tag-item",children:Q},Q))})]})]})]})}),S&&r.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:r.jsxs("div",{className:"modal-content",onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Validate Rule"}),r.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),r.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:()=>{const Q=document.querySelector(".validate-input");if(Q!=null&&Q.value){const pe=Q.value;try{if(pe.trim().startsWith("-"))ge({name:"temp",description:pe,severity:"medium",enabled:!0,score:50});else{const Ce=JSON.parse(pe);ge(Ce)}}catch{ge({name:"temp",description:pe,severity:"medium",enabled:!0,score:50})}}},disabled:U,children:U?"Validating...":"Validate"})]}),V&&r.jsxs("div",{className:`validation-result ${V.valid?"valid":"invalid"}`,children:[r.jsx("div",{className:"result-header",children:V.valid?"✓ Valid Rule":"✗ Invalid Rule"}),V.errors.length>0&&r.jsxs("div",{className:"result-errors",children:[r.jsx("strong",{children:"Errors:"}),r.jsx("ul",{children:V.errors.map((Q,pe)=>r.jsx("li",{children:Q},pe))})]}),V.warnings.length>0&&r.jsxs("div",{className:"result-warnings",children:[r.jsx("strong",{children:"Warnings:"}),r.jsx("ul",{children:V.warnings.map((Q,pe)=>r.jsx("li",{children:Q},pe))})]})]})]})]})}),z&&r.jsx("div",{className:"modal-overlay",onClick:()=>R(!1),children:r.jsxs("div",{className:"modal-content",onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Import Rules"}),r.jsx("button",{className:"close-btn",onClick:()=>R(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),r.jsx("input",{type:"file",ref:Y,accept:".yaml,.yml,.json",onChange:Hn,style:{display:"none"}}),r.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var Q;return(Q=Y.current)==null?void 0:Q.click()},disabled:K,children:K?"Importing...":"Choose File"}),G&&r.jsxs("div",{className:`import-result ${G.imported>0?"success":"error"}`,children:[r.jsx("div",{className:"result-header",children:G.imported>0?`✓ Imported ${G.imported} rules`:"✗ Import failed"}),G.failed>0&&r.jsxs("div",{className:"result-info",children:["Failed: ",G.failed]}),G.errors.length>0&&r.jsx("div",{className:"result-errors",children:r.jsx("ul",{children:G.errors.map((Q,pe)=>r.jsx("li",{children:Q},pe))})})]}),r.jsx("div",{className:"modal-actions",children:r.jsx("button",{className:"btn-secondary",onClick:()=>R(!1),children:"Close"})})]})]})}),I&&r.jsx("div",{className:"modal-overlay",onClick:()=>M(!1),children:r.jsxs("div",{className:"modal-content template-modal",onClick:Q=>Q.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Create Rule from Template"}),r.jsx("button",{className:"close-btn",onClick:()=>M(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:W?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"selected-template-header",children:[r.jsx("button",{className:"btn-back",onClick:()=>X(null),children:"← Back"}),r.jsx("h4",{children:W.name})]}),r.jsx("div",{className:"template-params-form",children:W.parameters.map(Q=>r.jsxs("div",{className:"param-item",children:[r.jsxs("label",{children:[Q.name,Q.required&&r.jsx("span",{className:"required",children:"*"})]}),r.jsx("p",{className:"param-desc",children:Q.description}),Q.options&&Q.options.length>0?r.jsxs("select",{value:F[Q.name]||"",onChange:pe=>te({...F,[Q.name]:pe.target.value}),children:[r.jsx("option",{value:"",children:"Select..."}),Q.options.map(pe=>r.jsx("option",{value:pe,children:pe},pe))]}):r.jsx("input",{type:Q.type==="number"?"number":"text",value:F[Q.name]||"",onChange:pe=>te({...F,[Q.name]:pe.target.value}),placeholder:Q.default||""})]},Q.name))}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>M(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:Ae,disabled:W.parameters.some(Q=>Q.required&&!F[Q.name]),children:"Create Rule"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"modal-desc",children:"Select a template:"}),r.jsx("div",{className:"template-list",children:C.length===0?r.jsx("div",{className:"empty-state",children:"No templates available"}):C.map(Q=>r.jsxs("div",{className:"template-card",onClick:()=>ye(Q),children:[r.jsx("div",{className:"template-name",children:Q.name}),r.jsx("div",{className:"template-desc",children:Q.description}),r.jsxs("div",{className:"template-params",children:[Q.parameters.length," parameters"]})]},Q.name))})]})})]})}),r.jsx("style",{children:`
        .rules-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .rules-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-primary {
          padding: 10px 20px;
          background: #00d9ff;
          border: none;
          border-radius: 6px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-primary:hover {
          background: #00c4e6;
        }
        
        .btn-secondary {
          padding: 10px 20px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .export-dropdown {
          position: relative;
        }
        
        .export-menu {
          display: none;
          position: absolute;
          top: 100%;
          right: 0;
          background: #1a1a2e;
          border: 1px solid #333;
          border-radius: 6px;
          overflow: hidden;
          z-index: 100;
        }
        
        .export-dropdown:hover .export-menu {
          display: block;
        }
        
        .export-menu button {
          display: block;
          width: 100%;
          padding: 10px 20px;
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          cursor: pointer;
        }
        
        .export-menu button:hover {
          background: rgba(0, 217, 255, 0.1);
        }
        
        .stats-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .stat-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .stat-icon.enabled {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .stat-icon.disabled {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }
        
        .stat-value.enabled { color: #22c55e; }
        .stat-value.disabled { color: #ef4444; }
        
        .stat-label {
          font-size: 13px;
          color: #888;
          margin-top: 4px;
        }
        
        .filter-bar {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .search-input {
          flex: 1;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .filter-select {
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 8px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
        
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 16px;
          flex: 1;
          overflow-y: auto;
        }
        
        .rule-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.2s;
        }
        
        .rule-card:hover {
          border-color: #00d9ff;
          transform: translateY(-2px);
        }
        
        .rule-card.disabled {
          opacity: 0.6;
        }
        
        .rule-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .rule-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .severity-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .severity-dot.severity-critical { background: #ef4444; box-shadow: 0 0 8px #ef4444; }
        .severity-dot.severity-high { background: #f97316; box-shadow: 0 0 8px #f97316; }
        .severity-dot.severity-medium { background: #eab308; box-shadow: 0 0 8px #eab308; }
        .severity-dot.severity-low { background: #22c55e; box-shadow: 0 0 8px #22c55e; }
        .severity-dot.severity-info { background: #6b7280; }
        
        .rule-name {
          font-weight: 600;
          color: #fff;
          font-size: 15px;
        }
        
        .switch {
          position: relative;
          width: 44px;
          height: 24px;
        }
        
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: #333;
          border-radius: 24px;
          transition: 0.3s;
        }
        
        .slider:before {
          content: "";
          position: absolute;
          width: 18px;
          height: 18px;
          left: 3px;
          bottom: 3px;
          background: #fff;
          border-radius: 50%;
          transition: 0.3s;
        }
        
        input:checked + .slider {
          background: #22c55e;
        }
        
        input:checked + .slider:before {
          transform: translateX(20px);
        }
        
        .rule-meta {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        
        .severity-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .severity-badge.severity-critical { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
        .severity-badge.severity-high { background: rgba(249, 115, 22, 0.2); color: #f97316; }
        .severity-badge.severity-medium { background: rgba(234, 179, 8, 0.2); color: #eab308; }
        .severity-badge.severity-low { background: rgba(34, 197, 94, 0.2); color: #22c55e; }
        .severity-badge.severity-info { background: rgba(107, 114, 128, 0.2); color: #9ca3af; }
        
        .score-badge {
          font-size: 12px;
          color: #888;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        .builtin-badge {
          font-size: 11px;
          color: #f59e0b;
          padding: 4px 8px;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 4px;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }
        
        .rule-description {
          color: #888;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }
        
        .rule-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid #333;
        }
        
        .rule-actions {
          display: flex;
          gap: 8px;
        }
        
        .mitre-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .mitre-tag {
          font-size: 11px;
          padding: 3px 8px;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-radius: 4px;
          font-family: monospace;
        }
        
        .rule-action {
          padding: 6px 12px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .rule-action:hover {
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .loading-state, .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
        }
        
        .empty-icon {
          font-size: 48px;
        }
        
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: #1a1a2e;
          border-radius: 12px;
          padding: 24px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          border: 1px solid #333;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h3 {
          color: #00d9ff;
          margin: 0;
        }
        
        .close-btn {
          background: none;
          border: none;
          color: #888;
          font-size: 24px;
          cursor: pointer;
        }
        
        .close-btn:hover {
          color: #fff;
        }
        
        .modal-desc {
          color: #888;
          margin-bottom: 16px;
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          margin-top: 16px;
        }
        
        .validate-input {
          width: 100%;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #333;
          border-radius: 6px;
          color: #eee;
          font-family: monospace;
          font-size: 13px;
          resize: vertical;
        }
        
        .validate-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .validation-result, .import-result {
          margin-top: 16px;
          padding: 12px;
          border-radius: 8px;
        }
        
        .validation-result.valid, .import-result.success {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }
        
        .validation-result.invalid, .import-result.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        .result-header {
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .validation-result.valid .result-header { color: #22c55e; }
        .validation-result.invalid .result-header { color: #ef4444; }
        .import-result.success .result-header { color: #22c55e; }
        .import-result.error .result-header { color: #ef4444; }
        
        .result-errors, .result-warnings {
          font-size: 13px;
          color: #888;
        }
        
        .result-errors ul, .result-warnings ul {
          margin: 8px 0 0 0;
          padding-left: 20px;
        }
        
        .result-errors { color: #ef4444; }
        .result-warnings { color: #f59e0b; }
        
        .btn-upload {
          width: 100%;
        }
        
        .rule-modal .detail-section {
          margin-bottom: 20px;
        }
        
        .rule-modal .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .detail-label {
          color: #888;
          font-size: 14px;
        }
        
        .detail-value {
          color: #fff;
          font-weight: 500;
        }
        
        .detail-value.mono {
          font-family: monospace;
          font-size: 13px;
        }
        
        .status-badge {
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .status-badge.enabled {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }
        
        .status-badge.disabled {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .rule-modal h4 {
          color: #00d9ff;
          margin: 0 0 12px 0;
          font-size: 14px;
        }
        
        .detail-description {
          color: #ccc;
          line-height: 1.6;
          margin: 0;
        }
        
        .tags-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .tag-item {
          padding: 4px 10px;
          background: rgba(168, 85, 247, 0.1);
          color: #a855f7;
          border-radius: 4px;
          font-size: 12px;
        }
        
        .template-modal {
          max-width: 600px;
        }
        
        .template-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .template-card {
          padding: 15px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid #333;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .template-card:hover {
          background: rgba(0, 217, 255, 0.05);
          border-color: #00d9ff;
        }
        
        .template-name {
          font-weight: bold;
          color: #00d9ff;
          margin-bottom: 5px;
        }
        
        .template-desc {
          font-size: 13px;
          color: #888;
          margin-bottom: 8px;
        }
        
        .template-params {
          font-size: 12px;
          color: #666;
        }
        
        .selected-template-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .selected-template-header h4 {
          margin: 0;
          color: #00d9ff;
        }
        
        .btn-back {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          padding: 5px 10px;
        }
        
        .btn-back:hover {
          color: #00d9ff;
        }
        
        .template-params-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .param-item label {
          display: block;
          font-weight: bold;
          color: #ccc;
          margin-bottom: 5px;
        }
        
        .param-item .required {
          color: #ef4444;
          margin-left: 4px;
        }
        
        .param-desc {
          font-size: 12px;
          color: #666;
          margin: 0 0 8px 0;
        }
        
        .param-item input,
        .param-item select {
          width: 100%;
          padding: 8px 12px;
          background: #16213e;
          border: 1px solid #333;
          border-radius: 4px;
          color: #eee;
          font-size: 14px;
        }
        
        .param-item input:focus,
        .param-item select:focus {
          outline: none;
          border-color: #00d9ff;
        }
      `})]})}function Ek(){const[t,e]=E.useState("general"),[n,i]=E.useState(!1),[o,l]=E.useState(!1),[c,u]=E.useState(null),[h,p]=E.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});E.useEffect(()=>{Zc.get().then(w=>{const j=w.data;p({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const m=async()=>{var w,j;l(!0),u(null);try{await Zc.save({database_path:h.databasePath,log_level:h.logLevel,max_events:h.maxEvents,retention_days:h.retentionDays,enable_alerting:h.enableAlerting,enable_live_collection:h.enableLiveCollection,enable_auto_update:h.enableAutoUpdate,api_port:h.apiPort,api_host:h.apiHost,cors_enabled:h.corsEnabled,max_import_file_size:h.maxImportFileSize,export_directory:h.exportDirectory,parser_workers:h.parserWorkers,memory_limit:h.memoryLimit}),i(!0),setTimeout(()=>i(!1),3e3)}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to save settings")}finally{l(!1)}},v=async()=>{var w,j;l(!0),u(null);try{await Zc.reset(),window.location.reload()}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to reset settings"),l(!1)}},b=(w,j)=>{p({...h,[w]:j})};return r.jsxs("div",{className:"settings-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Settings"}),n&&r.jsx("span",{className:"save-indicator",children:"✓ Saved"})]}),r.jsxs("div",{className:"settings-layout",children:[r.jsxs("div",{className:"settings-nav",children:[r.jsxs("button",{className:`nav-item ${t==="general"?"active":""}`,onClick:()=>e("general"),children:[r.jsx("span",{className:"nav-icon",children:"⚙️"}),"General"]}),r.jsxs("button",{className:`nav-item ${t==="database"?"active":""}`,onClick:()=>e("database"),children:[r.jsx("span",{className:"nav-icon",children:"💾"}),"Database"]}),r.jsxs("button",{className:`nav-item ${t==="api"?"active":""}`,onClick:()=>e("api"),children:[r.jsx("span",{className:"nav-icon",children:"🔌"}),"API Server"]}),r.jsxs("button",{className:`nav-item ${t==="collection"?"active":""}`,onClick:()=>e("collection"),children:[r.jsx("span",{className:"nav-icon",children:"📡"}),"Collection"]}),r.jsxs("button",{className:`nav-item ${t==="advanced"?"active":""}`,onClick:()=>e("advanced"),children:[r.jsx("span",{className:"nav-icon",children:"🔧"}),"Advanced"]})]}),r.jsxs("div",{className:"settings-content",children:[t==="general"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"General Settings"}),r.jsx("p",{children:"Configure basic application settings"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Log Level"}),r.jsx("p",{children:"Minimum severity level for logging"})]}),r.jsxs("select",{value:h.logLevel,onChange:w=>b("logLevel",w.target.value),children:[r.jsx("option",{value:"debug",children:"Debug"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"warn",children:"Warning"}),r.jsx("option",{value:"error",children:"Error"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Export Directory"}),r.jsx("p",{children:"Default directory for exported files"})]}),r.jsx("input",{type:"text",value:h.exportDirectory,onChange:w=>b("exportDirectory",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Auto Update Rules"}),r.jsx("p",{children:"Automatically update detection rules"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAutoUpdate,onChange:w=>b("enableAutoUpdate",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="database"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Database Settings"}),r.jsx("p",{children:"Configure database storage and retention"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Database Path"}),r.jsx("p",{children:"Path to SQLite database file"})]}),r.jsx("input",{type:"text",value:h.databasePath,onChange:w=>b("databasePath",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Event Retention (days)"}),r.jsx("p",{children:"Automatically delete events older than this"})]}),r.jsx("input",{type:"number",value:h.retentionDays,onChange:w=>b("retentionDays",Number(w.target.value)),className:"number-input",min:"1",max:"365"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Maximum Events"}),r.jsx("p",{children:"Maximum number of events to store"})]}),r.jsx("input",{type:"number",value:h.maxEvents,onChange:w=>b("maxEvents",Number(w.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),t==="api"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"API Server Settings"}),r.jsx("p",{children:"Configure the HTTP API server"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Host"}),r.jsx("p",{children:"Host address to bind the API server"})]}),r.jsx("input",{type:"text",value:h.apiHost,onChange:w=>b("apiHost",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Port"}),r.jsx("p",{children:"Port number for the API server"})]}),r.jsx("input",{type:"number",value:h.apiPort,onChange:w=>b("apiPort",Number(w.target.value)),className:"number-input",min:"1",max:"65535"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable CORS"}),r.jsx("p",{children:"Allow cross-origin requests"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.corsEnabled,onChange:w=>b("corsEnabled",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="collection"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Collection Settings"}),r.jsx("p",{children:"Configure event collection behavior"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Alerting"}),r.jsx("p",{children:"Generate alerts when rules match"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAlerting,onChange:w=>b("enableAlerting",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Live Collection"}),r.jsx("p",{children:"Continuously monitor Windows Event Logs"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableLiveCollection,onChange:w=>b("enableLiveCollection",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Max Import File Size (MB)"}),r.jsx("p",{children:"Maximum size for imported files"})]}),r.jsx("input",{type:"number",value:h.maxImportFileSize,onChange:w=>b("maxImportFileSize",Number(w.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),t==="advanced"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Advanced Settings"}),r.jsx("p",{children:"Expert configuration options"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"⚠️ Warning"}),r.jsx("p",{children:"Advanced settings may affect performance and stability. Only modify if you know what you're doing."})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Parser Workers"}),r.jsx("p",{children:"Number of parallel parsing workers"})]}),r.jsx("input",{type:"number",value:h.parserWorkers,onChange:w=>b("parserWorkers",Number(w.target.value)),className:"number-input",min:"1",max:"32"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Memory Limit (MB)"}),r.jsx("p",{children:"Maximum memory usage for event processing"})]}),r.jsx("input",{type:"number",value:h.memoryLimit,onChange:w=>b("memoryLimit",Number(w.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),r.jsxs("div",{className:"settings-actions",children:[c&&r.jsx("span",{className:"error-text",children:c}),r.jsx("button",{onClick:m,className:"btn-primary",disabled:o,children:o?"Saving...":"Save Changes"}),r.jsx("button",{onClick:v,className:"btn-secondary",disabled:o,children:"Reset to Defaults"})]})]})]}),r.jsx("style",{children:`
        .settings-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .settings-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .save-indicator {
          color: #22c55e;
          font-size: 14px;
          animation: fadeIn 0.3s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .settings-layout {
          display: flex;
          gap: 20px;
          flex: 1;
        }
        
        .settings-nav {
          width: 220px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: rgba(255, 255, 255, 0.02);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: 8px;
          color: #888;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        
        .nav-item.active {
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
        }
        
        .nav-icon {
          font-size: 18px;
        }
        
        .settings-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }
        
        .settings-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .section-header {
          margin-bottom: 8px;
        }
        
        .section-header h3 {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
        }
        
        .section-header p {
          color: #888;
          font-size: 13px;
          margin: 0;
        }
        
        .setting-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 10px;
          border: 1px solid #333;
        }
        
        .setting-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .setting-info label {
          color: #fff;
          font-weight: 500;
        }
        
        .setting-info p {
          color: #888;
          font-size: 12px;
          margin: 0;
        }
        
        .text-input {
          width: 250px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
        }
        
        .text-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .number-input {
          width: 120px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          text-align: center;
        }
        
        .number-input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        select {
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          min-width: 120px;
        }
        
        .toggle {
          position: relative;
          width: 48px;
          height: 26px;
        }
        
        .toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: #333;
          border-radius: 26px;
          transition: 0.3s;
        }
        
        .toggle-slider:before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          left: 3px;
          bottom: 3px;
          background: #fff;
          border-radius: 50%;
          transition: 0.3s;
        }
        
        .toggle input:checked + .toggle-slider {
          background: #00d9ff;
        }
        
        .toggle input:checked + .toggle-slider:before {
          transform: translateX(22px);
        }
        
        .info-card {
          padding: 16px 20px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 10px;
        }
        
        .info-card h4 {
          color: #f59e0b;
          margin: 0 0 8px 0;
          font-size: 14px;
        }
        
        .info-card p {
          color: #888;
          font-size: 13px;
          margin: 0;
          line-height: 1.5;
        }
        
        .settings-actions {
          display: flex;
          gap: 12px;
          padding: 16px 0;
          margin-top: auto;
          border-top: 1px solid #333;
          align-items: center;
        }
        
        .error-text {
          color: #ef4444;
          font-size: 13px;
          margin-right: auto;
        }
        
        .btn-primary {
          padding: 12px 28px;
          background: #00d9ff;
          border: none;
          border-radius: 8px;
          color: #000;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-primary:hover {
          background: #00c4e6;
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          padding: 12px 28px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          border-color: #fff;
          color: #fff;
        }
      `})]})}function Rk(){const{t}=pt(),[e,n]=E.useState(null),[i,o]=E.useState(!0),[l,c]=E.useState(null),[u,h]=E.useState("5m"),[p,m]=E.useState({events:[],alerts:[],memory:[],timestamps:[]}),v=E.useRef(null),b=()=>{Fs.getMetrics().then(_=>{n(_.data),o(!1),m(S=>{const A=new Date().toLocaleTimeString(),z=[...S.events,_.data.total_events].slice(-20),R=[...S.alerts,_.data.total_alerts].slice(-20),I=[...S.memory,_.data.memory_usage_mb].slice(-20),M=[...S.timestamps,A].slice(-20);return{events:z,alerts:R,memory:I,timestamps:M}})}).catch(_=>{c(_.message||t("common.error")),o(!1)})};E.useEffect(()=>{b();const _=setInterval(b,5e3);return()=>clearInterval(_)},[]),E.useEffect(()=>{v.current&&p.events.length>1&&w()},[p]);const w=()=>{const _=v.current;if(!_)return;const S=_.getContext("2d");if(!S)return;const A=_.width,z=_.height,R=40;S.clearRect(0,0,A,z);const I=Math.max(...p.events,1),M=Math.min(...p.events,0),C=I-M||1;S.strokeStyle="#333",S.lineWidth=1;for(let W=0;W<=4;W++){const X=R+(z-2*R)*W/4;S.beginPath(),S.moveTo(R,X),S.lineTo(A-R,X),S.stroke()}const O=(A-2*R)/(p.events.length-1);S.strokeStyle="#00d9ff",S.lineWidth=2,S.beginPath(),p.events.forEach((W,X)=>{const F=R+X*O,te=R+(z-2*R)*(1-(W-M)/C);X===0?S.moveTo(F,te):S.lineTo(F,te)}),S.stroke(),S.fillStyle="#00d9ff",p.events.forEach((W,X)=>{const F=R+X*O,te=R+(z-2*R)*(1-(W-M)/C);S.beginPath(),S.arc(F,te,3,0,Math.PI*2),S.fill()})},j=_=>{const S=Math.floor(_/86400),A=Math.floor(_%86400/3600),z=Math.floor(_%3600/60);return S>0?`${S}d ${A}h ${z}m`:A>0?`${A}h ${z}m`:`${z}m`};if(i)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})});if(l)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"error-state",children:["❌ ",l]})});const N=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return r.jsxs("div",{className:"metrics-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("metrics.title")}),r.jsxs("div",{className:"time-range-selector",children:[r.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),r.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),r.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-card large",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"📊"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),r.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),r.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"🚨"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),r.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),r.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"💾"}),r.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),r.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),r.jsx("div",{className:"metric-bar",children:r.jsx("div",{className:"metric-bar-fill",style:{width:`${N}%`}})}),r.jsxs("div",{className:"metric-sub",children:[N,"% of limit"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"⚡"}),r.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),r.jsx("div",{className:"metric-value uptime",children:j((e==null?void 0:e.uptime_seconds)||0)}),r.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),r.jsx("div",{className:"chart-section",children:r.jsxs("div",{className:"chart-card",children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:"Event Throughput"}),r.jsx("div",{className:"chart-legend",children:r.jsxs("span",{className:"legend-item",children:[r.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),r.jsx("div",{className:"chart-container",children:r.jsx("canvas",{ref:v,width:800,height:200})})]})}),r.jsxs("div",{className:"prometheus-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("metrics.prometheusFormat")}),r.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),r.jsx("pre",{className:"prometheus-code",children:y()})]}),r.jsx("style",{children:`
        .metrics-page {
          padding: 20px;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .metrics-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
        }
        
        .time-range-selector {
          display: flex;
          gap: 4px;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px;
          border-radius: 6px;
        }
        
        .time-range-selector button {
          padding: 6px 12px;
          background: transparent;
          border: none;
          color: #888;
          cursor: pointer;
          border-radius: 4px;
          font-size: 0.85rem;
        }
        
        .time-range-selector button:hover {
          color: #00d9ff;
        }
        
        .time-range-selector button.active {
          background: #00d9ff;
          color: #1a1a2e;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .metric-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #333;
        }
        
        .metric-card.large {
          grid-row: span 2;
        }
        
        .metric-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .metric-icon {
          font-size: 1.2rem;
        }
        
        .metric-title {
          color: #888;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        
        .metric-value {
          font-size: 2.2rem;
          font-weight: bold;
          color: #fff;
          margin-bottom: 8px;
        }
        
        .metric-value.alert {
          color: #ef4444;
        }
        
        .metric-value.memory {
          color: #f97316;
        }
        
        .metric-value.uptime {
          font-size: 1.8rem;
        }
        
        .metric-trend {
          font-size: 0.9rem;
        }
        
        .metric-trend.up {
          color: #22c55e;
        }
        
        .metric-trend.down {
          color: #ef4444;
        }
        
        .metric-sub {
          color: #666;
          font-size: 0.8rem;
          margin-top: 4px;
        }
        
        .metric-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          margin-top: 8px;
          overflow: hidden;
        }
        
        .metric-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #f97316, #ea580c);
          border-radius: 3px;
        }
        
        .chart-section {
          margin-bottom: 24px;
        }
        
        .chart-card {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #333;
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .chart-header h3 {
          color: #00d9ff;
          font-size: 1rem;
          margin: 0;
        }
        
        .chart-legend {
          display: flex;
          gap: 16px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #888;
        }
        
        .legend-item .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .legend-item .dot.cyan {
          background: #00d9ff;
        }
        
        .chart-container {
          height: 200px;
          position: relative;
        }
        
        .chart-container canvas {
          width: 100%;
          height: 100%;
        }
        
        .prometheus-section {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #333;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .section-header h3 {
          color: #00d9ff;
          font-size: 1rem;
          margin: 0;
        }
        
        .btn-copy {
          padding: 6px 12px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 4px;
          color: #00d9ff;
          cursor: pointer;
          font-size: 0.85rem;
        }
        
        .btn-copy:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .prometheus-code {
          background: rgba(0, 0, 0, 0.4);
          padding: 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 0.8rem;
          color: #22c55e;
          overflow-x: auto;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          gap: 16px;
          color: #888;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #16213e;
          border-top: 3px solid #00d9ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .error-state {
          padding: 40px;
          text-align: center;
          color: #ef4444;
          font-size: 1.1rem;
        }
      `})]});function y(){return`# HELP winalog_events_total Total number of events
# TYPE winalog_events_total counter
winalog_events_total ${(e==null?void 0:e.total_events)||0}

# HELP winalog_alerts_total Total number of alerts
# TYPE winalog_alerts_total counter
winalog_alerts_total ${(e==null?void 0:e.total_alerts)||0}

# HELP winalog_events_per_minute Event ingestion rate
# TYPE winalog_events_per_minute gauge
winalog_events_per_minute ${(e==null?void 0:e.events_per_minute)||0}

# HELP winalog_alerts_per_hour Alert generation rate
# TYPE winalog_alerts_per_hour gauge
winalog_alerts_per_hour ${(e==null?void 0:e.alerts_per_hour)||0}

# HELP winalog_uptime_seconds Application uptime in seconds
# TYPE winalog_uptime_seconds counter
winalog_uptime_seconds ${(e==null?void 0:e.uptime_seconds)||0}

# HELP winalog_cpu_count Number of CPUs
# TYPE winalog_cpu_count gauge
winalog_cpu_count ${(e==null?void 0:e.cpu_count)||0}

# HELP winalog_memory_bytes Process memory usage in bytes
# TYPE winalog_memory_bytes gauge
winalog_memory_bytes ${(((e==null?void 0:e.memory_usage_mb)||0)*1024*1024).toFixed(0)}

# HELP go_info Go version info
# TYPE go_info gauge
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}Xr.register(Fo,Bo,Tr,Un,_x,Sx,wx,bx);function Pk(){const{t}=pt(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!0),[u,h]=E.useState(null),[p,m]=E.useState(null),[v,b]=E.useState({});E.useEffect(()=>{w()},[]);const w=async()=>{try{c(!0);const A=(await Pj.detect()).data;n(A.detections||[]),o(j(A.detections||[])),h(null)}catch(S){h(S instanceof Error?S.message:"Unknown error")}finally{c(!1)}},j=S=>{const A={total_detections:S.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return S.forEach(z=>{var I;const R=((I=z.severity)==null?void 0:I.toLowerCase())||"info";R in A.by_severity&&A.by_severity[R]++,A.by_category[z.category]=(A.by_category[z.category]||0)+1,A.by_technique[z.technique]=(A.by_technique[z.technique]||0)+1}),A},N=e.filter(S=>{var A;return!(v.severity&&((A=S.severity)==null?void 0:A.toLowerCase())!==v.severity||v.category&&S.category!==v.category||v.technique&&S.technique!==v.technique)}),y={labels:Object.keys((i==null?void 0:i.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((i==null?void 0:i.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},_={labels:Object.keys((i==null?void 0:i.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((i==null?void 0:i.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return l?r.jsx("div",{className:"persistence-page",children:r.jsx("div",{className:"loading",children:t("common.loading")})}):u?r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("common.confirm")})]}):r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{children:t("persistence.title")}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("persistence.rescan")})]}),i&&r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-card stat-total",children:[r.jsx("div",{className:"stat-value",children:i.total_detections}),r.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),r.jsxs("div",{className:"stat-card stat-critical",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.critical}),r.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),r.jsxs("div",{className:"stat-card stat-high",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.high}),r.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),r.jsxs("div",{className:"stat-card stat-medium",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.medium}),r.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),r.jsxs("div",{className:"stat-card stat-low",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.low}),r.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),r.jsxs("div",{className:"charts-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.bySeverity")}),r.jsx("div",{className:"chart-container",children:r.jsx(Ad,{data:y,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.byCategory")}),r.jsx("div",{className:"chart-container",children:r.jsx(Ad,{data:_,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),r.jsx("div",{className:"filters",children:r.jsxs("select",{value:v.severity||"",onChange:S=>b({...v,severity:S.target.value||void 0}),children:[r.jsx("option",{value:"",children:t("persistence.allSeverities")}),r.jsx("option",{value:"critical",children:t("persistence.critical")}),r.jsx("option",{value:"high",children:t("persistence.high")}),r.jsx("option",{value:"medium",children:t("persistence.medium")}),r.jsx("option",{value:"low",children:t("persistence.low")})]})}),r.jsx("div",{className:"detections-table-container",children:r.jsxs("table",{className:"detections-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("persistence.severity")}),r.jsx("th",{children:t("persistence.technique")}),r.jsx("th",{children:t("persistence.category")}),r.jsx("th",{children:t("persistence.title")}),r.jsx("th",{children:t("persistence.evidence")}),r.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),r.jsx("tbody",{children:N.map(S=>{var A,z,R,I;return r.jsxs("tr",{onClick:()=>m(S),className:"detection-row",children:[r.jsx("td",{children:r.jsx("span",{className:`severity-badge severity-${(A=S.severity)==null?void 0:A.toLowerCase()}`,children:t(`persistence.${(z=S.severity)==null?void 0:z.toLowerCase()}`)})}),r.jsx("td",{children:r.jsx("span",{className:"technique-tag",children:S.technique})}),r.jsx("td",{children:S.category}),r.jsx("td",{children:S.title}),r.jsx("td",{className:"evidence-cell",children:((R=S.evidence)==null?void 0:R.key)&&r.jsx("div",{className:"evidence-key",children:S.evidence.key})}),r.jsx("td",{children:t(`persistence.${(I=S.false_positive_risk)==null?void 0:I.toLowerCase()}Risk`)||S.false_positive_risk})]},S.id)})})]})}),p&&r.jsx("div",{className:"modal-overlay",onClick:()=>m(null),children:r.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:p.title}),r.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.basicInfo")}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.description")}),r.jsx("p",{children:p.description})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.recommendedAction")}),r.jsx("p",{children:p.recommended_action})]})]})]})})]})}const jn={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},Ak={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},Tk=(t,e="zh")=>{const n=e.startsWith("zh")?"zh":"en";return Ak[n][t]||t},Dk=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function Mk(){var y,_;const{t,locale:e}=pt(),n=Wn(),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState("brute-force"),[p,m]=E.useState(24),[v,b]=E.useState(""),w=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:jn["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:jn.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:jn.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:jn.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:jn["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:jn["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:jn.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:jn["privilege-escalation"],category:"privilege-escalation",recommended:!1}],j=async()=>{var S,A;o(!0),b("");try{const z=await Ag.run(u,{hours:p});c(z.data)}catch(z){b(((A=(S=z.response)==null?void 0:S.data)==null?void 0:A.error)||"Failed to run analyzer")}finally{o(!1)}},N=w.reduce((S,A)=>(S[A.category]||(S[A.category]=[]),S[A.category].push(A),S),{});return r.jsxs("div",{className:"analyze-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("analyze.title")}),r.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),r.jsxs("div",{className:"analyze-grid",children:[r.jsxs("div",{className:"analyzer-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(N).map(([S,A])=>{var z;return r.jsxs("div",{className:"analyzer-category",children:[r.jsx("div",{className:"category-header",children:((z=Dk.find(R=>R.id===S))==null?void 0:z.name)||S}),r.jsx("div",{className:"analyzer-list",children:A.map(R=>r.jsxs("div",{className:`analyzer-card ${u===R.id?"selected":""}`,onClick:()=>h(R.id),children:[r.jsx("div",{className:"analyzer-icon",children:R.icon}),r.jsxs("div",{className:"analyzer-content",children:[r.jsxs("div",{className:"analyzer-header",children:[r.jsx("span",{className:"analyzer-name",children:R.name}),R.recommended&&r.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),r.jsx("p",{className:"analyzer-desc",children:R.desc})]}),r.jsx("div",{className:"select-indicator",children:u===R.id&&"✓"})]},R.id))})]},S)})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.configuration")})}),r.jsxs("div",{className:"config-card",children:[r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.selectedAnalyzer")}),r.jsxs("div",{className:"selected-analyzer-display",children:[r.jsx("span",{className:"analyzer-icon",children:jn[u]}),r.jsx("span",{children:(y=w.find(S=>S.id===u))==null?void 0:y.name})]})]}),r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.timeWindow")}),r.jsxs("div",{className:"time-selector",children:[r.jsx("button",{className:p===1?"active":"",onClick:()=>m(1),children:"1h"}),r.jsx("button",{className:p===6?"active":"",onClick:()=>m(6),children:"6h"}),r.jsx("button",{className:p===24?"active":"",onClick:()=>m(24),children:"24h"}),r.jsx("button",{className:p===72?"active":"",onClick:()=>m(72),children:"72h"}),r.jsx("button",{className:p===168?"active":"",onClick:()=>m(168),children:"7d"})]})]}),r.jsx("button",{onClick:j,disabled:i,className:"btn-primary btn-run",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),v&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:v})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("analyze.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>n("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),l&&r.jsxs("div",{className:"results-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.results")})}),r.jsxs("div",{className:"results-grid",children:[r.jsxs("div",{className:"result-summary-card",children:[r.jsxs("div",{className:"result-header",children:[r.jsx("span",{className:"result-icon",children:jn[l.type]}),r.jsx("span",{className:"result-type",children:(_=w.find(S=>S.id===l.type))==null?void 0:_.name})]}),r.jsxs("div",{className:"result-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.severity")}),r.jsx("span",{className:`severity-badge severity-${l.severity}`,children:l.severity.toUpperCase()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.score")}),r.jsx("span",{className:"score-value",children:l.score.toFixed(1)})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.findings")}),r.jsx("span",{className:"findings-count",children:l.findings.length})]})]}),r.jsx("p",{className:"result-summary",children:l.summary})]}),l.findings.length>0&&r.jsxs("div",{className:"findings-card",children:[r.jsx("h4",{children:t("analyze.findingsList")}),r.jsx("div",{className:"findings-list",children:l.findings.map((S,A)=>r.jsxs("div",{className:"finding-item",children:[r.jsxs("div",{className:"finding-header",children:[r.jsx("span",{className:`severity-indicator severity-${S.severity}`}),r.jsx("span",{className:"finding-desc",children:Tk(S.description,e)})]}),r.jsxs("div",{className:"finding-meta",children:[S.rule_name&&r.jsx("span",{className:"rule-name",children:S.rule_name}),r.jsxs("span",{className:"finding-score",children:["Score: ",S.score.toFixed(1)]}),S.evidence&&S.evidence.length>0&&r.jsxs("span",{className:"evidence-count",children:[S.evidence.length," events"]})]}),S.evidence&&S.evidence.length>0&&r.jsxs("div",{className:"evidence-list",children:[r.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),S.evidence.slice(0,5).map((z,R)=>{var I;return r.jsxs("div",{className:"evidence-item",children:[r.jsx("span",{className:"evidence-time",children:new Date(z.timestamp).toLocaleString()}),r.jsx("span",{className:"evidence-user",children:z.user||"-"}),r.jsx("span",{className:"evidence-computer",children:z.computer||"-"}),r.jsxs("span",{className:"evidence-msg",title:z.message,children:[(I=z.message)==null?void 0:I.substring(0,80),z.message&&z.message.length>80?"...":""]})]},R)}),S.evidence.length>5&&r.jsxs("div",{className:"evidence-more",children:["+",S.evidence.length-5," more events"]})]})]},A))})]})]})]}),r.jsxs("div",{className:"analyzer-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),r.jsx("div",{className:"info-grid",children:w.slice(0,4).map(S=>r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:S.icon}),r.jsxs("div",{className:"info-content",children:[r.jsx("h4",{children:S.name}),r.jsx("p",{children:S.desc})]})]},S.id))})]})]})}const Wm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},Lk={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function Ok(){const{t}=pt(),e=Wn(),[n,i]=E.useState(!1),[o,l]=E.useState([]),[c,u]=E.useState("24h"),[h,p]=E.useState(""),[m,v]=E.useState(!1),[b,w]=E.useState(null),j=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],N=async()=>{var M,C;i(!0),p("");try{const O=await Aj.analyze({time_window:c});l(O.data.results||[]),v(!0)}catch(O){p(((C=(M=O.response)==null?void 0:M.data)==null?void 0:C.error)||"Failed to run correlation analysis")}finally{i(!1)}},y=M=>Wm[M.toLowerCase()]||Wm.info,_=M=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[M.toLowerCase()]||M,S=M=>{for(const[C,O]of Object.entries(Lk))if(M.includes(C))return O;return"🎯"},A=M=>{try{return new Date(M).toLocaleString()}catch{return M}},z=(M,C)=>{try{const O=new Date(M).getTime(),X=new Date(C).getTime()-O,F=Math.floor(X/1e3),te=Math.floor(F/60),V=Math.floor(te/60);return V>0?`${V}h ${te%60}m`:te>0?`${te}m ${F%60}s`:`${F}s`}catch{return"N/A"}},R=E.useMemo(()=>{if(o.length===0)return null;const M={critical:0,high:0,medium:0,low:0};return o.forEach(C=>{const O=C.severity.toLowerCase();M.hasOwnProperty(O)&&M[O]++}),{totalEvents:o.reduce((C,O)=>C+O.event_count,0),severityCounts:M,avgEventsPerRule:Math.round(o.reduce((C,O)=>C+O.event_count,0)/o.length)}},[o]),I=E.useMemo(()=>{if(o.length===0)return[];const M=Math.max(...o.map(C=>C.event_count));return o.map(C=>{const O=Math.round(C.event_count/M*20);return{...C,bar:"█".repeat(O)+"░".repeat(20-O)}})},[o]);return r.jsxs("div",{className:"correlation-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("correlation.title")}),r.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),r.jsxs("div",{className:"correlation-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("correlation.timeWindow")}),r.jsx("div",{className:"time-selector",children:j.map(M=>r.jsx("button",{className:c===M.value?"active":"",onClick:()=>u(M.value),children:M.label},M.value))})]}),r.jsx("button",{onClick:N,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:h})]}),m&&!n&&o.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h3",{children:t("correlation.noResults")}),r.jsx("p",{children:t("correlation.noResultsDesc")})]}),R&&r.jsxs("div",{className:"correlation-stats",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:o.length}),r.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📝"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.totalEvents.toLocaleString()}),r.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),r.jsxs("div",{className:"stat-card critical",children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.critical}),r.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),r.jsxs("div",{className:"stat-card high",children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.high}),r.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),I.length>0&&r.jsxs("div",{className:"attack-chain-visual",children:[r.jsx("h3",{children:t("correlation.attackChainTimeline")}),r.jsx("div",{className:"chain-bars",children:I.map((M,C)=>r.jsxs("div",{className:"chain-bar-item",children:[r.jsxs("div",{className:"chain-bar-header",children:[r.jsx("span",{className:"chain-icon",children:S(M.description)}),r.jsx("span",{className:"chain-name",children:M.rule_name}),r.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(M.severity)}})]}),r.jsx("div",{className:"chain-bar-track",children:r.jsx("span",{className:"chain-bar-fill",style:{width:`${M.event_count/R.totalEvents*100}%`,backgroundColor:y(M.severity)}})}),r.jsxs("div",{className:"chain-bar-meta",children:[r.jsxs("span",{className:"chain-events",children:[M.event_count," events"]}),r.jsx("span",{className:"chain-duration",children:z(M.start_time,M.end_time)})]})]},C))})]}),o.length>0&&r.jsxs("div",{className:"correlation-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("correlation.results")}),r.jsxs("span",{className:"results-count",children:[o.length," ",t("correlation.rulesTriggered")]})]}),r.jsx("div",{className:"results-grid",children:o.map((M,C)=>r.jsxs("div",{className:`correlation-card ${b===C?"expanded":""}`,onClick:()=>w(b===C?null:C),children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"rule-info",children:[r.jsx("span",{className:"severity-badge",style:{backgroundColor:y(M.severity)},children:_(M.severity)}),r.jsx("h4",{children:M.rule_name})]}),r.jsxs("div",{className:"event-count",children:[r.jsx("span",{className:"count-value",children:M.event_count}),r.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),r.jsx("div",{className:"card-icon",children:S(M.description)}),r.jsx("p",{className:"rule-description",children:M.description}),r.jsxs("div",{className:"card-footer",children:[r.jsxs("div",{className:"time-info",children:[r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),r.jsx("span",{className:"time-value",children:A(M.start_time)})]}),r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),r.jsx("span",{className:"time-value",children:A(M.end_time)})]})]}),r.jsxs("div",{className:"duration-badge",children:["⏱️ ",z(M.start_time,M.end_time)]})]}),b===C&&r.jsxs("div",{className:"card-expanded",children:[r.jsxs("div",{className:"expanded-section",children:[r.jsx("h5",{children:t("correlation.attackPattern")}),r.jsxs("div",{className:"pattern-visual",children:[r.jsx("span",{className:"pattern-icon",children:"🎯"}),r.jsx("span",{className:"pattern-text",children:M.rule_name}),r.jsx("span",{className:"pattern-arrow",children:"→"}),r.jsxs("span",{className:"pattern-target",children:[_(M.severity)," Risk"]})]})]}),r.jsxs("div",{className:"expanded-actions",children:[r.jsxs("button",{className:"action-btn",onClick:O=>{O.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"action-btn",onClick:O=>{O.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},C))})]}),r.jsxs("div",{className:"correlation-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("correlation.aboutCorrelation")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("correlation.aboutDesc")})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("correlation.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const Hm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function zk(){const{t}=pt(),e=Wn(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState(""),[h,p]=E.useState("overview"),m=async()=>{var y,_;i(!0),u("");try{const S=await Tj.analyze();l(S.data)}catch(S){u(((_=(y=S.response)==null?void 0:y.data)==null?void 0:_.error)||"Failed to run multi-machine analysis")}finally{i(!1)}},v=y=>Hm[y.toLowerCase()]||Hm.info,b=y=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[y.toLowerCase()]||y,w=E.useMemo(()=>{if(!o||o.machines.length===0)return{nodes:[],edges:[]};const y=o.machines.map(S=>({id:S.id,name:S.name,ip:S.ip,role:S.role,suspicious:o.lateral_movement.some(A=>A.source_machine===S.name||A.target_machine===S.name)})),_=[];return o.lateral_movement.forEach(S=>{const A=y.find(R=>R.name===S.source_machine),z=y.find(R=>R.name===S.target_machine);A&&z&&_.push({from:A.id,to:z.id,user:S.user,severity:S.severity})}),{nodes:y,edges:_}},[o]),j=y=>{try{return new Date(y).toLocaleString()}catch{return y}},N=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return r.jsxs("div",{className:"multi-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("multi.title")}),r.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),r.jsx("div",{className:"multi-toolbar",children:r.jsx("button",{onClick:m,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:c})]}),o&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"analysis-summary",children:[r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.analysisId")}),r.jsx("p",{className:"analysis-id",children:o.analysis_id})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.machinesFound")}),r.jsx("p",{className:"summary-value",children:o.machines.length})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.suspiciousActivities")}),r.jsx("p",{className:"summary-value",style:{color:o.suspicious_count>0?"#dc2626":"#16a34a"},children:o.suspicious_count})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.lateralMovements")}),r.jsx("p",{className:"summary-value",children:o.lateral_movement.length})]})]}),r.jsx("p",{className:"summary-text",children:o.summary}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),r.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),r.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&r.jsx("div",{className:"tab-content",children:o.machines.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🖥️"}),r.jsx("h3",{children:t("multi.noMachines")}),r.jsx("p",{children:t("multi.noMachinesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"machine-graph",children:[r.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),r.jsxs("div",{className:"graph-container",children:[r.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,_)=>{const S=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return r.jsxs("div",{className:`graph-node ${S?"suspicious":""}`,style:{top:`${20+_%3*25}%`,left:`${20+_%4*20}%`},children:[r.jsx("span",{className:"node-icon",children:N(y.role)}),r.jsx("span",{className:"node-name",children:y.name}),r.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),S&&r.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),r.jsxs("div",{className:"graph-legend",children:[r.jsx("span",{className:"legend-item",children:"🖥️ Server"}),r.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),r.jsx("span",{className:"legend-item",children:"💻 Workstation"}),r.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),r.jsx("div",{className:"machines-grid",children:o.machines.map((y,_)=>{const S=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return r.jsxs("div",{className:`machine-card ${S?"alert":""}`,children:[r.jsxs("div",{className:"machine-header",children:[r.jsx("span",{className:"machine-icon",children:N(y.role)}),r.jsx("h4",{children:y.name}),S&&r.jsx("span",{className:"alert-badge",children:"⚠️"})]}),r.jsxs("div",{className:"machine-details",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"IP:"}),r.jsx("span",{className:"value",children:y.ip||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),r.jsx("span",{className:"value",children:y.domain||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),r.jsx("span",{className:"value",children:y.role||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"OS:"}),r.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),r.jsx("span",{className:"value",children:j(y.last_seen)})]})]}),S&&r.jsx("div",{className:"machine-alert-indicator",children:r.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},_)})})]})}),h==="crossmachine"&&r.jsx("div",{className:"tab-content",children:o.cross_machine_activity.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noSuspiciousActivity")}),r.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):r.jsx("div",{className:"activity-list",children:o.cross_machine_activity.map((y,_)=>r.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[r.jsxs("div",{className:"activity-header",children:[r.jsxs("div",{className:"user-info",children:[r.jsx("span",{className:"user-icon",children:"👤"}),r.jsx("span",{className:"user-name",children:y.user})]}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:b(y.severity)})]}),r.jsxs("div",{className:"activity-body",children:[r.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",y.machine_count," ",t("multi.machines"),":"]}),r.jsx("div",{className:"machine-tags",children:y.machines.map((S,A)=>r.jsx("span",{className:"machine-tag",children:S},A))}),r.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",y.login_count]}),r.jsxs("div",{className:"recommendation",children:[r.jsx("span",{className:"rec-icon",children:"💡"}),r.jsx("span",{children:y.recommendation})]})]})]},_))})}),h==="lateral"&&r.jsx("div",{className:"tab-content",children:o.lateral_movement.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noLateralMovement")}),r.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lateral-summary",children:r.jsxs("div",{className:"lateral-stat",children:[r.jsx("span",{className:"stat-icon",children:"🔄"}),r.jsxs("span",{className:"stat-text",children:[o.lateral_movement.length," lateral movements detected"]})]})}),r.jsx("div",{className:"lateral-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("multi.time")}),r.jsx("th",{children:t("multi.source")}),r.jsx("th",{children:t("multi.target")}),r.jsx("th",{children:t("multi.user")}),r.jsx("th",{children:t("multi.event")}),r.jsx("th",{children:t("multi.description")}),r.jsx("th",{children:t("multi.severity")}),r.jsx("th",{children:"MITRE"})]})}),r.jsx("tbody",{children:o.lateral_movement.map((y,_)=>r.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[r.jsx("td",{className:"time-cell",children:j(y.timestamp)}),r.jsx("td",{className:"source-cell",children:r.jsx("span",{className:"machine-badge source",children:y.source_machine})}),r.jsx("td",{className:"target-cell",children:r.jsx("span",{className:"machine-badge target",children:y.target_machine})}),r.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),r.jsx("td",{className:"event-cell",children:y.event_id}),r.jsx("td",{className:"desc-cell",children:y.description}),r.jsx("td",{children:r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:b(y.severity)})}),r.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((S,A)=>r.jsx("span",{className:"mitre-tag",children:S},A))})]},_))})]})})]})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("multi.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function Ik(){const{t}=pt(),[e,n]=E.useState("SELECT * FROM events LIMIT 10"),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState(""),[p,m]=E.useState([]),[v,b]=E.useState(!1),[w,j]=E.useState(""),N=E.useRef(null),y=async()=>{var O,W;if(!e.trim()){h(t("query.sqlRequired"));return}o(!0),h(""),c(null);const C=performance.now();try{const X=await Dj.execute({sql:e,limit:100}),F=((performance.now()-C)/1e3).toFixed(2);j(F),c(X.data),_(e,!0,X.data.count,F)}catch(X){const F=((performance.now()-C)/1e3).toFixed(2);h(((W=(O=X.response)==null?void 0:O.data)==null?void 0:W.error)||"Failed to execute query"),_(e,!1,0,F),_(e,!1,0)}finally{o(!1)}},_=(C,O,W,X)=>{const F={id:Date.now().toString(),sql:C,timestamp:new Date().toISOString(),success:O,rowCount:W,duration:X};m(te=>[F,...te.slice(0,49)])},S=C=>{n(C.sql),b(!1)},A=()=>{m([])},z=C=>{const O=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],W=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],X=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],F=[],te=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,V=C.match(te)||[];let ae=0;for(const U of V){const ie=U.toUpperCase();U.startsWith("'")&&U.endsWith("'")?F.push(r.jsx("span",{className:"sql-string",children:U},ae++)):U.startsWith('"')&&U.endsWith('"')?F.push(r.jsx("span",{className:"sql-string",children:U},ae++)):X.includes(U)?F.push(r.jsx("span",{className:"sql-operator",children:U},ae++)):W.includes(ie)?F.push(r.jsx("span",{className:"sql-function",children:U},ae++)):O.includes(ie)?F.push(r.jsx("span",{className:"sql-keyword",children:U},ae++)):/^\d+$/.test(U)?F.push(r.jsx("span",{className:"sql-number",children:U},ae++)):F.push(r.jsx("span",{className:"sql-identifier",children:U},ae++))}return r.jsx(r.Fragment,{children:F})},R=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],I=C=>{C.key==="Enter"&&(C.ctrlKey||C.metaKey)&&(C.preventDefault(),y())},M=C=>{if(!l)return;let O,W,X;if(C==="json")O=JSON.stringify(l,null,2),W="query_result.json",X="application/json";else{const ae=l.columns.join(","),U=l.rows.map(ie=>l.columns.map(K=>{const re=ie[K];if(re==null)return"";const G=String(re);return G.includes(",")||G.includes('"')?`"${G.replace(/"/g,'""')}"`:G}).join(",")).join(`
`);O=ae+`
`+U,W="query_result.csv",X="text/csv"}const F=new Blob([O],{type:X}),te=URL.createObjectURL(F),V=document.createElement("a");V.href=te,V.download=W,V.click(),URL.revokeObjectURL(te)};return r.jsxs("div",{className:"query-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("query.title")}),r.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),r.jsxs("div",{className:"query-toolbar",children:[r.jsxs("div",{className:"preset-queries",children:[r.jsx("label",{children:t("query.presets")}),r.jsx("div",{className:"preset-buttons",children:R.map((C,O)=>r.jsx("button",{className:"preset-btn",onClick:()=>n(C.sql),title:C.sql,children:C.label},O))})]}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("button",{className:"history-btn",onClick:()=>b(!v),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),v&&r.jsxs("div",{className:"query-history-panel",children:[r.jsxs("div",{className:"history-header",children:[r.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),r.jsx("button",{className:"clear-btn",onClick:A,children:"🗑️ Clear"})]}),r.jsx("div",{className:"history-list",children:p.length===0?r.jsx("p",{className:"empty-history",children:"No query history"}):p.map(C=>r.jsxs("div",{className:`history-item ${C.success?"success":"error"}`,onClick:()=>S(C),children:[r.jsx("div",{className:"history-sql",children:C.sql}),r.jsxs("div",{className:"history-meta",children:[r.jsx("span",{className:"history-status",children:C.success?"✓":"✗"}),r.jsxs("span",{className:"history-rows",children:[C.rowCount," rows"]}),C.duration&&r.jsxs("span",{className:"history-duration",children:[C.duration,"s"]}),r.jsx("span",{className:"history-time",children:new Date(C.timestamp).toLocaleTimeString()})]})]},C.id))})]}),r.jsxs("div",{className:"query-editor",children:[r.jsxs("div",{className:"editor-header",children:[r.jsx("label",{children:t("query.sqlQuery")}),r.jsx("div",{className:"editor-actions",children:r.jsx("button",{className:"format-btn",onClick:()=>{const C=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();n(C)},children:"🎨 Format"})})]}),r.jsxs("div",{className:"editor-wrapper",children:[r.jsx("div",{className:"sql-highlight",children:z(e)}),r.jsx("textarea",{ref:N,className:"sql-input",value:e,onChange:C=>n(C.target.value),onKeyDown:I,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),r.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),r.jsxs("div",{className:"query-actions",children:[r.jsx("button",{onClick:y,disabled:i,className:"btn-primary",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),l&&r.jsxs("div",{className:"result-actions",children:[r.jsx("button",{className:"export-btn",onClick:()=>M("json"),children:"📥 JSON"}),r.jsx("button",{className:"export-btn",onClick:()=>M("csv"),children:"📥 CSV"})]})]}),u&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:u})]}),l&&r.jsxs("div",{className:"query-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("query.results")}),r.jsxs("div",{className:"results-meta",children:[r.jsxs("span",{className:"results-count",children:[l.count," ",t("query.rowsReturned")]}),w&&r.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),l.columns.length>0&&l.rows.length>0?r.jsx("div",{className:"results-table-wrapper",children:r.jsxs("table",{className:"results-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"row-num",children:"#"}),l.columns.map((C,O)=>r.jsx("th",{children:C},O))]})}),r.jsx("tbody",{children:l.rows.map((C,O)=>r.jsxs("tr",{children:[r.jsx("td",{className:"row-num",children:O+1}),l.columns.map((W,X)=>r.jsx("td",{className:C[W]===null?"null-value":"",children:Fk(C[W])},X))]},O))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📭"}),r.jsx("h3",{children:t("query.noResults")}),r.jsx("p",{children:t("query.noResultsDesc")})]})]}),r.jsxs("div",{className:"query-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("query.aboutQuery")})}),r.jsxs("div",{className:"info-content",children:[r.jsx("p",{children:t("query.aboutDesc")}),r.jsxs("div",{className:"example-queries",children:[r.jsx("h4",{children:t("query.exampleQueries")}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),r.jsx("p",{children:t("query.example1Desc")})]}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),r.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function Fk(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const Bk={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},$k={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Uk(){const{t}=pt(),e=Wn(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState([]),[h,p]=E.useState("analyze"),[m,v]=E.useState(24),[b,w]=E.useState(""),[j,N]=E.useState(null),y=async()=>{var C,O;i(!0),w("");try{const W=await Np.analyze({hours:m});l(W.data)}catch(W){w(((O=(C=W.response)==null?void 0:C.data)==null?void 0:O.error)||"Failed to run UEBA analysis")}finally{i(!1)}},_=async()=>{i(!0),w("");try{const X=((await Np.profiles()).data.profiles||[]).map(F=>({...F,risk_score:Math.random()*100}));u(X)}catch(C){w(C.message||"Failed to load profiles")}finally{i(!1)}},S=C=>Bk[C.toLowerCase()]||"#2563eb",A=C=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[C.toLowerCase()]||C,z=C=>$k[C]||{icon:"⚠️",color:"#2563eb",description:C},R=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],I=E.useMemo(()=>{if(!o)return null;const C=o.total_anomaly||1,O=o.high_risk_count/C,W=o.medium_risk_count/C,X=1-O-W;return{high:{value:o.high_risk_count,percentage:O*100},medium:{value:o.medium_risk_count,percentage:W*100},low:{value:C-o.high_risk_count-o.medium_risk_count,percentage:X*100}}},[o]),M=C=>{try{return new Date(C).toLocaleString()}catch{return C}};return r.jsxs("div",{className:"ueba-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("ueba.title")}),r.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),r.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),_()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"ueba-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("ueba.timeWindow")}),r.jsx("div",{className:"time-selector",children:R.map(C=>r.jsx("button",{className:m===C.value?"active":"",onClick:()=>v(C.value),children:C.label},C.value))})]}),r.jsx("button",{onClick:y,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),b&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:b})]}),o&&r.jsxs("div",{className:"ueba-results",children:[r.jsxs("div",{className:"results-summary",children:[r.jsxs("div",{className:"summary-card large",children:[r.jsx("div",{className:"summary-icon",children:"📊"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.totalAnomalies")}),r.jsx("p",{className:"summary-value",children:o.total_anomaly}),r.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:m})})]})]}),I&&r.jsxs("div",{className:"risk-gauge-card",children:[r.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),r.jsxs("div",{className:"risk-gauge",children:[r.jsxs("div",{className:"gauge-bar",children:[r.jsx("div",{className:"gauge-segment critical",style:{width:`${I.high.percentage}%`}}),r.jsx("div",{className:"gauge-segment warning",style:{width:`${I.medium.percentage}%`}}),r.jsx("div",{className:"gauge-segment low",style:{width:`${I.low.percentage}%`}})]}),r.jsxs("div",{className:"gauge-legend",children:[r.jsxs("span",{className:"legend-item critical",children:["🔴 ",I.high.value," ",t("severity.critical")||"Critical"]}),r.jsxs("span",{className:"legend-item warning",children:["🟠 ",I.medium.value," ",t("severity.medium")||"Medium"]}),r.jsxs("span",{className:"legend-item low",children:["🟢 ",I.low.value," ",t("severity.low")||"Low"]})]})]})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("div",{className:"summary-icon",children:"⏱️"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.duration")}),r.jsx("p",{className:"summary-value small",children:o.duration})]})]})]}),o.anomalies.length===0?r.jsxs("div",{className:"empty-state success",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("ueba.noAnomalies")}),r.jsx("p",{children:t("ueba.noAnomaliesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):r.jsxs("div",{className:"anomalies-list",children:[r.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",o.anomalies.length,")"]}),r.jsx("div",{className:"anomaly-timeline",children:o.anomalies.map((C,O)=>{const W=z(C.type);return r.jsxs("div",{className:`anomaly-item ${j===O?"expanded":""}`,onClick:()=>N(j===O?null:O),children:[r.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:W.color}}),r.jsx("div",{className:"anomaly-icon",children:W.icon}),r.jsxs("div",{className:"anomaly-content",children:[r.jsxs("div",{className:"anomaly-header",children:[r.jsx("span",{className:"anomaly-type",children:C.type.replace(/_/g," ")}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:S(C.severity)},children:A(C.severity)})]}),C.user&&r.jsxs("div",{className:"anomaly-user",children:["👤 ",r.jsx("span",{children:C.user})]}),r.jsx("p",{className:"anomaly-description",children:C.description}),r.jsxs("div",{className:"anomaly-meta",children:[r.jsxs("span",{className:"anomaly-score",children:["Score: ",r.jsx("strong",{children:C.score.toFixed(2)})]}),C.event_ids&&C.event_ids.length>0&&r.jsxs("span",{className:"anomaly-events",children:[C.event_ids.length," related events"]})]})]}),j===O&&r.jsxs("div",{className:"anomaly-expanded",children:[C.details&&Object.keys(C.details).length>0&&r.jsxs("div",{className:"anomaly-details-section",children:[r.jsx("h5",{children:t("ueba.details")}),r.jsx("div",{className:"details-grid",children:Object.entries(C.details).map(([X,F])=>r.jsxs("div",{className:"detail-item",children:[r.jsxs("span",{className:"detail-key",children:[X,":"]}),r.jsx("span",{className:"detail-value",children:String(F)})]},X))})]}),r.jsxs("div",{className:"anomaly-actions",children:[r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/events",{state:{user:C.user}})},children:"📊 View Events"}),r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},O)})})]})]})]}),h==="profiles"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"profiles-header",children:[r.jsx("h3",{children:t("ueba.userProfiles")}),r.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),n?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"btn-spinner"}),r.jsx("span",{children:"Loading profiles..."})]}):c.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"👥"}),r.jsx("h3",{children:t("ueba.noProfiles")}),r.jsx("p",{children:t("ueba.noProfilesDesc")}),r.jsxs("div",{className:"empty-hint",children:[r.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),r.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):r.jsx("div",{className:"profiles-grid",children:c.map((C,O)=>r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsx("div",{className:"profile-avatar",children:r.jsx("span",{className:"avatar-icon",children:"👤"})}),r.jsxs("div",{className:"profile-info",children:[r.jsx("h4",{children:C.user}),r.jsxs("p",{className:"profile-meta",children:["Last updated: ",M(C.last_updated)]})]}),C.risk_score!==void 0&&r.jsx("div",{className:`risk-indicator ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,children:C.risk_score.toFixed(0)})]}),r.jsxs("div",{className:"profile-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),r.jsx("span",{className:"stat-value",children:C.login_count})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),r.jsx("span",{className:"stat-value",children:C.avg_events_per_day.toFixed(1)})]})]}),C.risk_score!==void 0&&r.jsxs("div",{className:"profile-risk-bar",children:[r.jsx("div",{className:"risk-bar-track",children:r.jsx("div",{className:`risk-bar-fill ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,style:{width:`${C.risk_score}%`}})}),r.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},O))})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("ueba.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}function Wk(){const{t}=pt(),[e,n]=E.useState([]),[i,o]=E.useState(!1),[l,c]=E.useState(""),[u,h]=E.useState(!1),[p,m]=E.useState({name:"",duration:60,scope:"global",expires_at:""});E.useEffect(()=>{v()},[]);const v=async()=>{o(!0),c("");try{const S=(await oo.list()).data;n(S.rules||[])}catch(_){c(_.message||"Failed to load suppress rules")}finally{o(!1)}},b=async()=>{o(!0),c("");try{await oo.create({name:p.name,duration:p.duration,scope:p.scope,expires_at:p.expires_at,conditions:[],enabled:!0}),h(!1),m({name:"",duration:60,scope:"global",expires_at:""}),v()}catch(_){c(_.message||"Failed to create rule")}finally{o(!1)}},w=async _=>{if(confirm(t("suppress.confirmDelete"))){o(!0),c("");try{await oo.delete(_),v()}catch(S){c(S.message||"Failed to delete rule")}finally{o(!1)}}},j=async(_,S)=>{o(!0),c("");try{await oo.toggle(_,!S),v()}catch(A){c(A.message||"Failed to toggle rule")}finally{o(!1)}},N=_=>({global:t("suppress.scopeGlobal"),user:t("suppress.scopeUser"),computer:t("suppress.scopeComputer")})[_]||_,y=_=>_<60?`${_}m`:_<1440?`${Math.floor(_/60)}h`:`${Math.floor(_/1440)}d`;return r.jsxs("div",{className:"suppress-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("suppress.title")}),r.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),r.jsx("div",{className:"suppress-toolbar",children:r.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),l&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:l})]}),i&&e.length===0?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"spinner"}),r.jsx("span",{children:t("common.loading")})]}):e.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("h3",{children:t("suppress.noRules")}),r.jsx("p",{children:t("suppress.noRulesDesc")})]}):r.jsx("div",{className:"rules-list",children:r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("suppress.name")}),r.jsx("th",{children:t("suppress.scope")}),r.jsx("th",{children:t("suppress.duration")}),r.jsx("th",{children:t("suppress.expiresAt")}),r.jsx("th",{children:t("suppress.status")}),r.jsx("th",{children:t("suppress.actions")})]})}),r.jsx("tbody",{children:e.map(_=>r.jsxs("tr",{className:_.enabled?"":"disabled",children:[r.jsx("td",{className:"name-cell",children:r.jsx("span",{className:"rule-name",children:_.name})}),r.jsx("td",{children:r.jsx("span",{className:"scope-badge",children:N(_.scope)})}),r.jsx("td",{children:y(_.duration)}),r.jsx("td",{children:_.expires_at?new Date(_.expires_at).toLocaleString():"-"}),r.jsx("td",{children:r.jsx("button",{className:`toggle-btn ${_.enabled?"enabled":"disabled"}`,onClick:()=>j(_.id,_.enabled),children:_.enabled?t("suppress.enabled"):t("suppress.disabled")})}),r.jsx("td",{children:r.jsx("div",{className:"action-buttons",children:r.jsx("button",{className:"btn-icon delete",onClick:()=>w(_.id),title:t("suppress.delete"),children:"🗑️"})})})]},_.id))})]})}),u&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("suppress.addRule")}),r.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"✕"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.name")}),r.jsx("input",{type:"text",value:p.name,onChange:_=>m({...p,name:_.target.value}),placeholder:t("suppress.namePlaceholder")})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.scope")}),r.jsxs("select",{value:p.scope,onChange:_=>m({...p,scope:_.target.value}),children:[r.jsx("option",{value:"global",children:t("suppress.scopeGlobal")}),r.jsx("option",{value:"user",children:t("suppress.scopeUser")}),r.jsx("option",{value:"computer",children:t("suppress.scopeComputer")})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.duration")}),r.jsxs("select",{value:p.duration,onChange:_=>m({...p,duration:parseInt(_.target.value)}),children:[r.jsx("option",{value:"60",children:"1 hour"}),r.jsx("option",{value:"360",children:"6 hours"}),r.jsx("option",{value:"1440",children:"24 hours"}),r.jsx("option",{value:"10080",children:"7 days"}),r.jsx("option",{value:"43200",children:"30 days"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.expiresAt")}),r.jsx("input",{type:"datetime-local",value:p.expires_at,onChange:_=>m({...p,expires_at:_.target.value})})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:b,disabled:!p.name||i,children:t("suppress.create")})]})]})}),r.jsxs("div",{className:"suppress-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("suppress.about")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("suppress.aboutDesc")})})]})]})}function Hk(){var z,R;const{t}=pt(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!1),[u,h]=E.useState(null),[p,m]=E.useState("all"),v=E.useRef(null),b=E.useRef(null);E.useEffect(()=>(w(),()=>{v.current&&v.current.close()}),[]),E.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[e]);const w=()=>{h(null);const I=Rj.streamEvents(M=>{n(C=>{const O=[M,...C];return O.length>100&&O.pop(),O})},M=>{o({total_events:M.total_events||0,events_per_sec:M.events_per_sec||0,uptime:M.uptime||"0s",alerts:M.alerts||0})},M=>{console.error("Stream error:",M),c(!1),M.type==="error"&&h("Connection lost. Reconnecting...")});I.onopen=()=>{c(!0),h(null)},v.current=I},j=()=>{v.current&&(v.current.close(),v.current=null),c(!1)},N=()=>{j(),w()},y=()=>{n([])},_=I=>{switch(I==null?void 0:I.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},S=e.filter(I=>{var M;return p==="all"?!0:((M=I.level)==null?void 0:M.toLowerCase())===p}),A=I=>{try{return new Date(I).toLocaleTimeString()}catch{return I}};return r.jsxs("div",{className:"live-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("live.title")}),r.jsxs("div",{className:`connection-status ${l?"connected":"disconnected"}`,children:[r.jsx("span",{className:"status-dot"}),l?"Connected":"Disconnected"]})]}),r.jsxs("div",{className:"header-actions",children:[r.jsxs("select",{className:"filter-select",value:p,onChange:I=>m(I.target.value),children:[r.jsx("option",{value:"all",children:"All Levels"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"error",children:"Error"}),r.jsx("option",{value:"warning",children:"Warning"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"verbose",children:"Verbose"})]}),r.jsx("button",{className:"btn-secondary",onClick:y,children:"Clear"}),l?r.jsx("button",{className:"btn-danger",onClick:j,children:"Disconnect"}):r.jsx("button",{className:"btn-primary",onClick:N,children:"Connect"})]})]}),u&&r.jsx("div",{className:"error-banner",children:u}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:((z=i==null?void 0:i.total_events)==null?void 0:z.toLocaleString())||"0"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Events/sec"}),r.jsx("span",{className:"stat-value",children:((R=i==null?void 0:i.events_per_sec)==null?void 0:R.toFixed(2))||"0.00"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Alerts"}),r.jsx("span",{className:"stat-value alerts",children:(i==null?void 0:i.alerts)||0})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Uptime"}),r.jsx("span",{className:"stat-value mono",children:(i==null?void 0:i.uptime)||"0s"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Buffered"}),r.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),r.jsx("div",{className:"events-container",ref:b,children:S.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📡"}),r.jsx("div",{className:"empty-text",children:l?"Waiting for events...":"Click Connect to start monitoring"})]}):r.jsx("div",{className:"events-list",children:S.map((I,M)=>r.jsxs("div",{className:"event-card",style:{borderLeftColor:_(I.level)},children:[r.jsxs("div",{className:"event-header",children:[r.jsx("span",{className:"event-time",children:A(I.timestamp)}),r.jsx("span",{className:"event-level",style:{color:_(I.level)},children:I.level||"UNKNOWN"}),r.jsxs("span",{className:"event-id",children:["Event #",I.event_id]}),r.jsx("span",{className:"event-source",children:I.source||I.log_name})]}),r.jsx("div",{className:"event-body",children:r.jsx("div",{className:"event-message",children:I.message||"(No message)"})}),r.jsxs("div",{className:"event-footer",children:[r.jsx("span",{className:"event-computer",children:I.computer}),I.user&&r.jsx("span",{className:"event-user",children:I.user}),I.ip_address&&r.jsx("span",{className:"event-ip",children:I.ip_address})]})]},`${I.id}-${M}`))})}),r.jsx("style",{children:`
        .live-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .live-page h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .connection-status.connected {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .connection-status.disconnected {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .connection-status.connected .status-dot {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .connection-status.disconnected .status-dot {
          background: #ef4444;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .filter-select {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          cursor: pointer;
        }
        
        .btn-secondary:hover {
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .btn-primary {
          padding: 8px 16px;
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 6px;
          color: #00d9ff;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .btn-danger {
          padding: 8px 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 6px;
          color: #ef4444;
          cursor: pointer;
        }
        
        .btn-danger:hover {
          background: rgba(239, 68, 68, 0.2);
        }
        
        .error-banner {
          padding: 12px 20px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          margin-bottom: 16px;
          text-align: center;
        }
        
        .stats-bar {
          display: flex;
          gap: 24px;
          padding: 16px 20px;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
          margin-bottom: 20px;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
        }
        
        .stat-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
        }
        
        .stat-value.alerts {
          color: #f59e0b;
        }
        
        .stat-value.mono {
          font-family: monospace;
          font-size: 1.1rem;
        }
        
        .events-container {
          flex: 1;
          overflow-y: auto;
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          border: 1px solid #333;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: #888;
        }
        
        .empty-icon {
          font-size: 4rem;
        }
        
        .empty-text {
          font-size: 1.1rem;
        }
        
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 16px;
        }
        
        .event-card {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          border-left: 3px solid #888;
          padding: 12px 16px;
          transition: all 0.2s;
        }
        
        .event-card:hover {
          background: rgba(0, 217, 255, 0.05);
        }
        
        .event-header {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.85rem;
        }
        
        .event-time {
          color: #888;
          font-family: monospace;
        }
        
        .event-level {
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
        }
        
        .event-id {
          color: #00d9ff;
          font-family: monospace;
        }
        
        .event-source {
          color: #6b7280;
        }
        
        .event-body {
          margin-bottom: 8px;
        }
        
        .event-message {
          color: #ddd;
          font-size: 0.9rem;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .event-footer {
          display: flex;
          gap: 16px;
          font-size: 0.75rem;
          color: #666;
        }
        
        .event-computer {
          color: #22c55e;
        }
        
        .event-user {
          color: #a855f7;
        }
        
        .event-ip {
          color: #f59e0b;
        }
      `})]})}function Vk(){const{t}=pt(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(2),[u,h]=E.useState(""),[p,m]=E.useState(""),[v,b]=E.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[w,j]=E.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[N,y]=E.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,compress:!0,calculateHash:!0}),_=C=>{b(O=>O.map(W=>W.id===C?{...W,enabled:!W.enabled}:W))},S=C=>{j(O=>O.map(W=>W.id===C?{...W,enabled:!W.enabled}:W))},A=C=>{y(O=>({...O,[C]:!O[C]}))},z=async()=>{n(!0),o(t("collect.starting"));const C=v.filter(O=>O.enabled).map(O=>O.name);try{const O=await Cj.collect({sources:C,options:{compress:N.compress,calculate_hash:N.calculateHash}});O.data.status==="completed"?o(`${t("collect.completed")}
${O.data.output_path}
Duration: ${O.data.duration}`):O.data.status==="error"?o(`${t("collect.failed")}: ${O.data.message}`):o(`${t("collect.collecting")}...
${t("collect.sources")}: ${C.join(", ")}`)}catch(O){o(`${t("collect.failed")}: ${O instanceof Error?O.message:"Unknown error"}`)}n(!1)},R=async()=>{var C;n(!0),o(t("collect.importing"));try{const O=u.split(`
`).map(X=>X.trim()).filter(X=>X.length>0);if(O.length===0){o(t("collect.noFilesSelected")),n(!1);return}const W=await Ej.importLogs(O);W.data.success?o(`${t("collect.importDone")}
Imported: ${W.data.files_imported}
Failed: ${W.data.files_failed}
Events: ${W.data.events_imported}`):o(`${t("collect.failed")}: ${((C=W.data.errors)==null?void 0:C.join(", "))||"Unknown error"}`)}catch(O){o(`${t("collect.failed")}: ${O instanceof Error?O.message:"Unknown error"}`)}n(!1)},I=v.reduce((C,O)=>(C[O.category]||(C[O.category]=[]),C[O.category].push(O),C),{}),M=w.reduce((C,O)=>(C[O.category]||(C[O.category]=[]),C[O.category].push(O),C),{});return r.jsxs("div",{className:"collect-page",children:[r.jsx("div",{className:"page-header",children:r.jsx("h2",{children:t("collect.title")})}),r.jsxs("div",{className:"collect-grid",children:[r.jsxs("div",{className:"collect-section main-options",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("collect.oneClickCollection")}),r.jsx("p",{children:t("collect.oneClickDesc")})]}),r.jsxs("div",{className:"options-group",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeSystemInfo,onChange:()=>A("includeSystemInfo")}),r.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeLogs,onChange:()=>A("includeLogs")}),r.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),r.jsxs("div",{className:"performance-section",children:[r.jsx("h4",{children:t("collect.performanceSettings")}),r.jsxs("div",{className:"performance-grid",children:[r.jsxs("div",{className:"performance-item",children:[r.jsx("label",{children:t("collect.threads")}),r.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(C=>r.jsx("button",{className:l===C?"active":"",onClick:()=>c(C),children:C},C))})]}),r.jsxs("div",{className:"performance-hint",children:[r.jsx("span",{className:"hint-icon",children:"💡"}),r.jsx("span",{children:t("collect.threadHint")})]})]})]}),r.jsxs("div",{className:"compression-options",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.compress,onChange:()=>A("compress")}),r.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.calculateHash,onChange:()=>A("calculateHash")}),r.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),r.jsxs("div",{className:"action-buttons",children:[r.jsx("button",{onClick:z,disabled:e,className:"btn-primary btn-collect",children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),r.jsx("button",{onClick:R,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[r.jsx("h3",{children:t("collect.logSources")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(I).map(([C,O])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:C}),O.map(W=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:W.enabled,onChange:()=>_(W.id)}),r.jsx("span",{className:"checkbox-text",children:W.name})]},W.id))]},C))]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.excludedLogs")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(M).map(([C,O])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),O.map(W=>r.jsxs("label",{className:"checkbox-label exclude",children:[r.jsx("input",{type:"checkbox",checked:W.enabled,onChange:()=>S(W.id)}),r.jsx("span",{className:"checkbox-text",children:W.name})]},W.id))]},C)),r.jsxs("div",{className:"custom-exclude",children:[r.jsx("label",{children:t("collect.customExclude")}),r.jsx("input",{type:"text",value:p,onChange:C=>m(C.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.customPaths")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),r.jsxs("div",{className:"custom-path-section",children:[r.jsx("label",{children:t("collect.customPathsLabel")}),r.jsx("textarea",{value:u,onChange:C=>h(C.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),r.jsxs("div",{className:"additional-options",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.additionalArtifacts")})}),r.jsxs("div",{className:"artifacts-grid",children:[r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includePrefetch,onChange:()=>A("includePrefetch")}),r.jsx("div",{className:"artifact-icon",children:"📁"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),r.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeShimcache,onChange:()=>A("includeShimcache")}),r.jsx("div",{className:"artifact-icon",children:"🔧"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeAmcache,onChange:()=>A("includeAmcache")}),r.jsx("div",{className:"artifact-icon",children:"📝"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeUserassist,onChange:()=>A("includeUserassist")}),r.jsx("div",{className:"artifact-icon",children:"🎯"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),r.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeRegistry,onChange:()=>A("includeRegistry")}),r.jsx("div",{className:"artifact-icon",children:"🗄️"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.registry")}),r.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeTasks,onChange:()=>A("includeTasks")}),r.jsx("div",{className:"artifact-icon",children:"📅"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),r.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),i&&r.jsxs("div",{className:"status-panel",children:[r.jsxs("div",{className:"status-header",children:[r.jsx("span",{className:"status-icon",children:"📊"}),r.jsx("span",{children:t("collect.status")}),r.jsx("button",{className:"status-close",onClick:()=>o(""),children:"×"})]}),r.jsx("pre",{className:"status-content",children:i})]}),r.jsxs("div",{className:"cli-reference",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.cliReference")})}),r.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${l}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function qk(){const{t}=pt();return r.jsxs("nav",{className:"sidebar",children:[r.jsx("h1",{children:t("app.title")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Ze,{to:"/",children:t("nav.dashboard")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/events",children:t("nav.events")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/alerts",children:t("nav.alerts")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/timeline",children:t("nav.timeline")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/collect",children:t("nav.collect")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/analyze",children:t("nav.analyze")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/correlation",children:t("nav.correlation")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/multi",children:t("nav.multi")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/query",children:t("nav.query")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/ueba",children:t("nav.ueba")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/suppress",children:t("nav.suppress")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/live",children:t("nav.live")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/persistence",children:t("nav.persistence")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/reports",children:t("nav.reports")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/forensics",children:t("nav.forensics")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/system-info",children:t("nav.systemInfo")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/rules",children:t("nav.rules")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/metrics",children:t("nav.metrics")})}),r.jsx("li",{children:r.jsx(Ze,{to:"/settings",children:t("nav.settings")})})]})]})}function Yk(){return r.jsxs(r.Fragment,{children:[r.jsx(q0,{}),r.jsx(qk,{}),r.jsx("main",{className:"content",children:r.jsxs(P0,{children:[r.jsx(Ke,{path:"/",element:r.jsx(xk,{})}),r.jsx(Ke,{path:"/events",element:r.jsx(vk,{})}),r.jsx(Ke,{path:"/events/:id",element:r.jsx(bk,{})}),r.jsx(Ke,{path:"/alerts",element:r.jsx(jk,{})}),r.jsx(Ke,{path:"/alerts/:id",element:r.jsx(wk,{})}),r.jsx(Ke,{path:"/timeline",element:r.jsx(Nk,{})}),r.jsx(Ke,{path:"/collect",element:r.jsx(Vk,{})}),r.jsx(Ke,{path:"/analyze",element:r.jsx(Mk,{})}),r.jsx(Ke,{path:"/correlation",element:r.jsx(Ok,{})}),r.jsx(Ke,{path:"/multi",element:r.jsx(zk,{})}),r.jsx(Ke,{path:"/query",element:r.jsx(Ik,{})}),r.jsx(Ke,{path:"/ueba",element:r.jsx(Uk,{})}),r.jsx(Ke,{path:"/suppress",element:r.jsx(Wk,{})}),r.jsx(Ke,{path:"/live",element:r.jsx(Hk,{})}),r.jsx(Ke,{path:"/persistence",element:r.jsx(Pk,{})}),r.jsx(Ke,{path:"/reports",element:r.jsx(_k,{})}),r.jsx(Ke,{path:"/forensics",element:r.jsx(kk,{})}),r.jsx(Ke,{path:"/system-info",element:r.jsx(Sk,{})}),r.jsx(Ke,{path:"/rules",element:r.jsx(Ck,{})}),r.jsx(Ke,{path:"/settings",element:r.jsx(Ek,{})}),r.jsx(Ke,{path:"/metrics",element:r.jsx(Rk,{})})]})})]})}function Qk(){return r.jsx(V0,{children:r.jsx("div",{className:"app",children:r.jsx(Yk,{})})})}Iy.createRoot(document.getElementById("root")).render(r.jsx(qm.StrictMode,{children:r.jsx(z0,{children:r.jsx(Qk,{})})}));
