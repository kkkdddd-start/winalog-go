var Ly=Object.defineProperty;var Oy=(e,t,n)=>t in e?Ly(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var je=(e,t,n)=>Oy(e,typeof t!="symbol"?t+"":t,n);function Iy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},Dr={},nd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function zy(){if(Kf)return De;Kf=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function N(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function y(L,Z,ue){this.props=L,this.context=Z,this.refs=j,this.updater=ue||w}y.prototype.isReactComponent={},y.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function C(){}C.prototype=y.prototype;function D(L,Z,ue){this.props=L,this.context=Z,this.refs=j,this.updater=ue||w}var T=D.prototype=new C;T.constructor=D,b(T,y.prototype),T.isPureReactComponent=!0;var W=Array.isArray,_=Object.prototype.hasOwnProperty,H={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function R(L,Z,ue){var fe,we={},ee=null,de=null;if(Z!=null)for(fe in Z.ref!==void 0&&(de=Z.ref),Z.key!==void 0&&(ee=""+Z.key),Z)_.call(Z,fe)&&!M.hasOwnProperty(fe)&&(we[fe]=Z[fe]);var pe=arguments.length-2;if(pe===1)we.children=ue;else if(1<pe){for(var O=Array(pe),ke=0;ke<pe;ke++)O[ke]=arguments[ke+2];we.children=O}if(L&&L.defaultProps)for(fe in pe=L.defaultProps,pe)we[fe]===void 0&&(we[fe]=pe[fe]);return{$$typeof:e,type:L,key:ee,ref:de,props:we,_owner:H.current}}function A(L,Z){return{$$typeof:e,type:L.type,key:Z,ref:L.ref,props:L.props,_owner:L._owner}}function K(L){return typeof L=="object"&&L!==null&&L.$$typeof===e}function V(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ue){return Z[ue]})}var F=/\/+/g;function U(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?V(""+L.key):Z.toString(36)}function re(L,Z,ue,fe,we){var ee=typeof L;(ee==="undefined"||ee==="boolean")&&(L=null);var de=!1;if(L===null)de=!0;else switch(ee){case"string":case"number":de=!0;break;case"object":switch(L.$$typeof){case e:case t:de=!0}}if(de)return de=L,we=we(de),L=fe===""?"."+U(de,0):fe,W(we)?(ue="",L!=null&&(ue=L.replace(F,"$&/")+"/"),re(we,Z,ue,"",function(ke){return ke})):we!=null&&(K(we)&&(we=A(we,ue+(!we.key||de&&de.key===we.key?"":(""+we.key).replace(F,"$&/")+"/")+L)),Z.push(we)),1;if(de=0,fe=fe===""?".":fe+":",W(L))for(var pe=0;pe<L.length;pe++){ee=L[pe];var O=fe+U(ee,pe);de+=re(ee,Z,ue,O,we)}else if(O=N(L),typeof O=="function")for(L=O.call(L),pe=0;!(ee=L.next()).done;)ee=ee.value,O=fe+U(ee,pe++),de+=re(ee,Z,ue,O,we);else if(ee==="object")throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return de}function J(L,Z,ue){if(L==null)return L;var fe=[],we=0;return re(L,fe,"","",function(ee){return Z.call(ue,ee,we++)}),fe}function k(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(ue){(L._status===0||L._status===-1)&&(L._status=1,L._result=ue)},function(ue){(L._status===0||L._status===-1)&&(L._status=2,L._result=ue)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var z={current:null},$={transition:null},te={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:$,ReactCurrentOwner:H};function se(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:J,forEach:function(L,Z,ue){J(L,function(){Z.apply(this,arguments)},ue)},count:function(L){var Z=0;return J(L,function(){Z++}),Z},toArray:function(L){return J(L,function(Z){return Z})||[]},only:function(L){if(!K(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},De.Component=y,De.Fragment=n,De.Profiler=l,De.PureComponent=D,De.StrictMode=r,De.Suspense=h,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,De.act=se,De.cloneElement=function(L,Z,ue){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var fe=b({},L.props),we=L.key,ee=L.ref,de=L._owner;if(Z!=null){if(Z.ref!==void 0&&(ee=Z.ref,de=H.current),Z.key!==void 0&&(we=""+Z.key),L.type&&L.type.defaultProps)var pe=L.type.defaultProps;for(O in Z)_.call(Z,O)&&!M.hasOwnProperty(O)&&(fe[O]=Z[O]===void 0&&pe!==void 0?pe[O]:Z[O])}var O=arguments.length-2;if(O===1)fe.children=ue;else if(1<O){pe=Array(O);for(var ke=0;ke<O;ke++)pe[ke]=arguments[ke+2];fe.children=pe}return{$$typeof:e,type:L.type,key:we,ref:ee,props:fe,_owner:de}},De.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:o,_context:L},L.Consumer=L},De.createElement=R,De.createFactory=function(L){var Z=R.bind(null,L);return Z.type=L,Z},De.createRef=function(){return{current:null}},De.forwardRef=function(L){return{$$typeof:u,render:L}},De.isValidElement=K,De.lazy=function(L){return{$$typeof:m,_payload:{_status:-1,_result:L},_init:k}},De.memo=function(L,Z){return{$$typeof:p,type:L,compare:Z===void 0?null:Z}},De.startTransition=function(L){var Z=$.transition;$.transition={};try{L()}finally{$.transition=Z}},De.unstable_act=se,De.useCallback=function(L,Z){return z.current.useCallback(L,Z)},De.useContext=function(L){return z.current.useContext(L)},De.useDebugValue=function(){},De.useDeferredValue=function(L){return z.current.useDeferredValue(L)},De.useEffect=function(L,Z){return z.current.useEffect(L,Z)},De.useId=function(){return z.current.useId()},De.useImperativeHandle=function(L,Z,ue){return z.current.useImperativeHandle(L,Z,ue)},De.useInsertionEffect=function(L,Z){return z.current.useInsertionEffect(L,Z)},De.useLayoutEffect=function(L,Z){return z.current.useLayoutEffect(L,Z)},De.useMemo=function(L,Z){return z.current.useMemo(L,Z)},De.useReducer=function(L,Z,ue){return z.current.useReducer(L,Z,ue)},De.useRef=function(L){return z.current.useRef(L)},De.useState=function(L){return z.current.useState(L)},De.useSyncExternalStore=function(L,Z,ue){return z.current.useSyncExternalStore(L,Z,ue)},De.useTransition=function(){return z.current.useTransition()},De.version="18.3.1",De}var Xf;function qd(){return Xf||(Xf=1,nd.exports=zy()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Fy(){if(Gf)return Dr;Gf=1;var e=qd(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var m,x={},N=null,w=null;p!==void 0&&(N=""+p),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)r.call(h,m)&&!o.hasOwnProperty(m)&&(x[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)x[m]===void 0&&(x[m]=h[m]);return{$$typeof:t,type:u,key:N,ref:w,props:x,_owner:l.current}}return Dr.Fragment=n,Dr.jsx=c,Dr.jsxs=c,Dr}var Jf;function By(){return Jf||(Jf=1,sd.exports=Fy()),sd.exports}var s=By(),E=qd();const ng=sg(E),$y=Iy({__proto__:null,default:ng},[E]);var wl={},id={exports:{}},Ot={},rd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function Uy(){return Zf||(Zf=1,(function(e){function t($,te){var se=$.length;$.push(te);e:for(;0<se;){var L=se-1>>>1,Z=$[L];if(0<l(Z,te))$[L]=te,$[se]=Z,se=L;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var te=$[0],se=$.pop();if(se!==te){$[0]=se;e:for(var L=0,Z=$.length,ue=Z>>>1;L<ue;){var fe=2*(L+1)-1,we=$[fe],ee=fe+1,de=$[ee];if(0>l(we,se))ee<Z&&0>l(de,we)?($[L]=de,$[ee]=se,L=ee):($[L]=we,$[fe]=se,L=fe);else if(ee<Z&&0>l(de,se))$[L]=de,$[ee]=se,L=ee;else break e}}return te}function l($,te){var se=$.sortIndex-te.sortIndex;return se!==0?se:$.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();e.unstable_now=function(){return c.now()-u}}var h=[],p=[],m=1,x=null,N=3,w=!1,b=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T($){for(var te=n(p);te!==null;){if(te.callback===null)r(p);else if(te.startTime<=$)r(p),te.sortIndex=te.expirationTime,t(h,te);else break;te=n(p)}}function W($){if(j=!1,T($),!b)if(n(h)!==null)b=!0,k(_);else{var te=n(p);te!==null&&z(W,te.startTime-$)}}function _($,te){b=!1,j&&(j=!1,C(R),R=-1),w=!0;var se=N;try{for(T(te),x=n(h);x!==null&&(!(x.expirationTime>te)||$&&!V());){var L=x.callback;if(typeof L=="function"){x.callback=null,N=x.priorityLevel;var Z=L(x.expirationTime<=te);te=e.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(h)&&r(h),T(te)}else r(h);x=n(h)}if(x!==null)var ue=!0;else{var fe=n(p);fe!==null&&z(W,fe.startTime-te),ue=!1}return ue}finally{x=null,N=se,w=!1}}var H=!1,M=null,R=-1,A=5,K=-1;function V(){return!(e.unstable_now()-K<A)}function F(){if(M!==null){var $=e.unstable_now();K=$;var te=!0;try{te=M(!0,$)}finally{te?U():(H=!1,M=null)}}else H=!1}var U;if(typeof D=="function")U=function(){D(F)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,J=re.port2;re.port1.onmessage=F,U=function(){J.postMessage(null)}}else U=function(){y(F,0)};function k($){M=$,H||(H=!0,U())}function z($,te){R=y(function(){$(e.unstable_now())},te)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){b||w||(b=!0,k(_))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return N},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function($){switch(N){case 1:case 2:case 3:var te=3;break;default:te=N}var se=N;N=te;try{return $()}finally{N=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,te){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=N;N=$;try{return te()}finally{N=se}},e.unstable_scheduleCallback=function($,te,se){var L=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=se+Z,$={id:m++,callback:te,priorityLevel:$,startTime:se,expirationTime:Z,sortIndex:-1},se>L?($.sortIndex=se,t(p,$),n(h)===null&&$===n(p)&&(j?(C(R),R=-1):j=!0,z(W,se-L))):($.sortIndex=Z,t(h,$),b||w||(b=!0,k(_))),$},e.unstable_shouldYield=V,e.unstable_wrapCallback=function($){var te=N;return function(){var se=N;N=te;try{return $.apply(this,arguments)}finally{N=se}}}})(ad)),ad}var ep;function Wy(){return ep||(ep=1,rd.exports=Uy()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Hy(){if(tp)return Ot;tp=1;var e=qd(),t=Wy();function n(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function o(i,a){c(i,a),c(i+"Capture",a)}function c(i,a){for(l[i]=a,i=0;i<a.length;i++)r.add(a[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function N(i){return h.call(x,i)?!0:h.call(m,i)?!1:p.test(i)?x[i]=!0:(m[i]=!0,!1)}function w(i,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,a,d,f){if(a===null||typeof a>"u"||w(i,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function j(i,a,d,f,g,v,S){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=i,this.type=a,this.sanitizeURL=v,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new j(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new j(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new j(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new j(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new j(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new j(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new j(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new j(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new j(i,5,!1,i.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(C,D);y[a]=new j(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(C,D);y[a]=new j(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(C,D);y[a]=new j(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,a,d,f){var g=y.hasOwnProperty(a)?y[a]:null;(g!==null?g.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(b(a,d,g,f)&&(d=null),f||g===null?N(a)&&(d===null?i.removeAttribute(a):i.setAttribute(a,""+d)):g.mustUseProperty?i[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,f=g.attributeNamespace,d===null?i.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,f?i.setAttributeNS(f,a,d):i.setAttribute(a,d))))}var W=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),H=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),V=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),$=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=$&&i[$]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,L;function Z(i){if(L===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);L=a&&a[1]||""}return`
`+L+i}var ue=!1;function fe(i,a){if(!i||ue)return"";ue=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(X){var f=X}Reflect.construct(i,[],a)}else{try{a.call()}catch(X){f=X}i.call(a.prototype)}else{try{throw Error()}catch(X){f=X}i()}}catch(X){if(X&&f&&typeof X.stack=="string"){for(var g=X.stack.split(`
`),v=f.stack.split(`
`),S=g.length-1,P=v.length-1;1<=S&&0<=P&&g[S]!==v[P];)P--;for(;1<=S&&0<=P;S--,P--)if(g[S]!==v[P]){if(S!==1||P!==1)do if(S--,P--,0>P||g[S]!==v[P]){var I=`
`+g[S].replace(" at new "," at ");return i.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",i.displayName)),I}while(1<=S&&0<=P);break}}}finally{ue=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?Z(i):""}function we(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=fe(i.type,!1),i;case 11:return i=fe(i.type.render,!1),i;case 1:return i=fe(i.type,!0),i;default:return""}}function ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case M:return"Fragment";case H:return"Portal";case A:return"Profiler";case R:return"StrictMode";case U:return"Suspense";case re:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case K:return(i._context.displayName||"Context")+".Provider";case F:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return a=i.displayName||null,a!==null?a:ee(i.type)||"Memo";case k:a=i._payload,i=i._init;try{return ee(i(a))}catch{}}return null}function de(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(a);case 8:return a===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function O(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ke(i){var a=O(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),f=""+i[a];if(!i.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,v=d.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(S){f=""+S,v.call(this,S)}}),Object.defineProperty(i,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(S){f=""+S},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Ue(i){i._valueTracker||(i._valueTracker=ke(i))}function pt(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return i&&(f=O(i)?i.checked?"true":"false":i.value),i=f,i!==d?(a.setValue(i),!0):!1}function ve(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Yt(i,a){var d=a.checked;return se({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function oi(i,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=pe(a.value!=null?a.value:d),i._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Xs(i,a){a=a.checked,a!=null&&T(i,"checked",a,!1)}function Sn(i,a){Xs(i,a);var d=pe(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Cn(i,a.type,d):a.hasOwnProperty("defaultValue")&&Cn(i,a.type,pe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function ci(i,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,d||a===i.value||(i.value=a),i.defaultValue=a}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function Cn(i,a,d){(a!=="number"||ve(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var rs=Array.isArray;function as(i,a,d,f){if(i=i.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<i.length;d++)g=a.hasOwnProperty("$"+i[d].value),i[d].selected!==g&&(i[d].selected=g),g&&f&&(i[d].defaultSelected=!0)}else{for(d=""+pe(d),a=null,g=0;g<i.length;g++){if(i[g].value===d){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function En(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function di(i,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(n(92));if(rs(d)){if(1<d.length)throw Error(n(93));d=d[0]}a=d}a==null&&(a=""),d=a}i._wrapperState={initialValue:pe(d)}}function Rn(i,a){var d=pe(a.value),f=pe(a.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),a.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),f!=null&&(i.defaultValue=""+f)}function ae(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function he(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?he(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var it,ls=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,g){MSApp.execUnsafeLocalFunction(function(){return i(a,d,f,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(it=it||document.createElement("div"),it.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=it.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function bs(i,a){if(a){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=a;return}}i.textContent=a}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(i){Ie.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Ps[a]=Ps[i]})});function Dt(i,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Ps.hasOwnProperty(i)&&Ps[i]?(""+a).trim():a+"px"}function Dn(i,a){i=i.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,g=Dt(d,a[d],f);d==="float"&&(d="cssFloat"),f?i.setProperty(d,g):i[d]=g}}var ma=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(i,a){if(a){if(ma[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function hi(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function q(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ge=null,Le=null,Qt=null;function js(i){if(i=mr(i)){if(typeof ge!="function")throw Error(n(280));var a=i.stateNode;a&&(a=za(a),ge(i.stateNode,i.type,a))}}function Yi(i){Le?Qt?Qt.push(i):Qt=[i]:Le=i}function Pn(){if(Le){var i=Le,a=Qt;if(Qt=Le=null,js(i),a)for(i=0;i<a.length;i++)js(a[i])}}function As(i,a){return i(a)}function $t(){}var xt=!1;function Ct(i,a,d){if(xt)return i(a,d);xt=!0;try{return As(i,a,d)}finally{xt=!1,(Le!==null||Qt!==null)&&($t(),Pn())}}function Qi(i,a){var d=i.stateNode;if(d===null)return null;var f=za(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(n(231,a,typeof d));return d}var bo=!1;if(u)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{bo=!1}function $x(i,a,d,f,g,v,S,P,I){var X=Array.prototype.slice.call(arguments,3);try{a.apply(d,X)}catch(ie){this.onError(ie)}}var Xi=!1,ga=null,xa=!1,jo=null,Ux={onError:function(i){Xi=!0,ga=i}};function Wx(i,a,d,f,g,v,S,P,I){Xi=!1,ga=null,$x.apply(Ux,arguments)}function Hx(i,a,d,f,g,v,S,P,I){if(Wx.apply(this,arguments),Xi){if(Xi){var X=ga;Xi=!1,ga=null}else throw Error(n(198));xa||(xa=!0,jo=X)}}function An(i){var a=i,d=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(d=a.return),i=a.return;while(i)}return a.tag===3?d:null}function xu(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function vu(i){if(An(i)!==i)throw Error(n(188))}function Vx(i){var a=i.alternate;if(!a){if(a=An(i),a===null)throw Error(n(188));return a!==i?null:i}for(var d=i,f=a;;){var g=d.return;if(g===null)break;var v=g.alternate;if(v===null){if(f=g.return,f!==null){d=f;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===d)return vu(g),i;if(v===f)return vu(g),a;v=v.sibling}throw Error(n(188))}if(d.return!==f.return)d=g,f=v;else{for(var S=!1,P=g.child;P;){if(P===d){S=!0,d=g,f=v;break}if(P===f){S=!0,f=g,d=v;break}P=P.sibling}if(!S){for(P=v.child;P;){if(P===d){S=!0,d=v,f=g;break}if(P===f){S=!0,f=v,d=g;break}P=P.sibling}if(!S)throw Error(n(189))}}if(d.alternate!==f)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?i:a}function yu(i){return i=Vx(i),i!==null?bu(i):null}function bu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=bu(i);if(a!==null)return a;i=i.sibling}return null}var ju=t.unstable_scheduleCallback,Nu=t.unstable_cancelCallback,qx=t.unstable_shouldYield,Yx=t.unstable_requestPaint,Ze=t.unstable_now,Qx=t.unstable_getCurrentPriorityLevel,No=t.unstable_ImmediatePriority,wu=t.unstable_UserBlockingPriority,va=t.unstable_NormalPriority,Kx=t.unstable_LowPriority,ku=t.unstable_IdlePriority,ya=null,Ns=null;function Xx(i){if(Ns&&typeof Ns.onCommitFiberRoot=="function")try{Ns.onCommitFiberRoot(ya,i,void 0,(i.current.flags&128)===128)}catch{}}var os=Math.clz32?Math.clz32:Zx,Gx=Math.log,Jx=Math.LN2;function Zx(i){return i>>>=0,i===0?32:31-(Gx(i)/Jx|0)|0}var ba=64,ja=4194304;function Gi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Na(i,a){var d=i.pendingLanes;if(d===0)return 0;var f=0,g=i.suspendedLanes,v=i.pingedLanes,S=d&268435455;if(S!==0){var P=S&~g;P!==0?f=Gi(P):(v&=S,v!==0&&(f=Gi(v)))}else S=d&~g,S!==0?f=Gi(S):v!==0&&(f=Gi(v));if(f===0)return 0;if(a!==0&&a!==f&&(a&g)===0&&(g=f&-f,v=a&-a,g>=v||g===16&&(v&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=f;0<a;)d=31-os(a),g=1<<d,f|=i[d],a&=~g;return f}function ev(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(i,a){for(var d=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,v=i.pendingLanes;0<v;){var S=31-os(v),P=1<<S,I=g[S];I===-1?((P&d)===0||(P&f)!==0)&&(g[S]=ev(P,a)):I<=a&&(i.expiredLanes|=P),v&=~P}}function wo(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function _u(){var i=ba;return ba<<=1,(ba&4194240)===0&&(ba=64),i}function ko(i){for(var a=[],d=0;31>d;d++)a.push(i);return a}function Ji(i,a,d){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-os(a),i[a]=d}function sv(i,a){var d=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<d;){var g=31-os(d),v=1<<g;a[g]=0,f[g]=-1,i[g]=-1,d&=~v}}function _o(i,a){var d=i.entangledLanes|=a;for(i=i.entanglements;d;){var f=31-os(d),g=1<<f;g&a|i[f]&a&&(i[f]|=a),d&=~g}}var ze=0;function Su(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cu,So,Eu,Ru,Du,Co=!1,wa=[],Gs=null,Js=null,Zs=null,Zi=new Map,er=new Map,en=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(i,a){switch(i){case"focusin":case"focusout":Gs=null;break;case"dragenter":case"dragleave":Js=null;break;case"mouseover":case"mouseout":Zs=null;break;case"pointerover":case"pointerout":Zi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(a.pointerId)}}function tr(i,a,d,f,g,v){return i===null||i.nativeEvent!==v?(i={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:v,targetContainers:[g]},a!==null&&(a=mr(a),a!==null&&So(a)),i):(i.eventSystemFlags|=f,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function iv(i,a,d,f,g){switch(a){case"focusin":return Gs=tr(Gs,i,a,d,f,g),!0;case"dragenter":return Js=tr(Js,i,a,d,f,g),!0;case"mouseover":return Zs=tr(Zs,i,a,d,f,g),!0;case"pointerover":var v=g.pointerId;return Zi.set(v,tr(Zi.get(v)||null,i,a,d,f,g)),!0;case"gotpointercapture":return v=g.pointerId,er.set(v,tr(er.get(v)||null,i,a,d,f,g)),!0}return!1}function Au(i){var a=Tn(i.target);if(a!==null){var d=An(a);if(d!==null){if(a=d.tag,a===13){if(a=xu(d),a!==null){i.blockedOn=a,Du(i.priority,function(){Eu(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ka(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var d=Ro(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var f=new d.constructor(d.type,d);fi=f,d.target.dispatchEvent(f),fi=null}else return a=mr(d),a!==null&&So(a),i.blockedOn=d,!1;a.shift()}return!0}function Tu(i,a,d){ka(i)&&d.delete(a)}function rv(){Co=!1,Gs!==null&&ka(Gs)&&(Gs=null),Js!==null&&ka(Js)&&(Js=null),Zs!==null&&ka(Zs)&&(Zs=null),Zi.forEach(Tu),er.forEach(Tu)}function sr(i,a){i.blockedOn===a&&(i.blockedOn=null,Co||(Co=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,rv)))}function nr(i){function a(g){return sr(g,i)}if(0<wa.length){sr(wa[0],i);for(var d=1;d<wa.length;d++){var f=wa[d];f.blockedOn===i&&(f.blockedOn=null)}}for(Gs!==null&&sr(Gs,i),Js!==null&&sr(Js,i),Zs!==null&&sr(Zs,i),Zi.forEach(a),er.forEach(a),d=0;d<en.length;d++)f=en[d],f.blockedOn===i&&(f.blockedOn=null);for(;0<en.length&&(d=en[0],d.blockedOn===null);)Au(d),d.blockedOn===null&&en.shift()}var pi=W.ReactCurrentBatchConfig,_a=!0;function av(i,a,d,f){var g=ze,v=pi.transition;pi.transition=null;try{ze=1,Eo(i,a,d,f)}finally{ze=g,pi.transition=v}}function lv(i,a,d,f){var g=ze,v=pi.transition;pi.transition=null;try{ze=4,Eo(i,a,d,f)}finally{ze=g,pi.transition=v}}function Eo(i,a,d,f){if(_a){var g=Ro(i,a,d,f);if(g===null)qo(i,a,f,Sa,d),Pu(i,f);else if(iv(g,i,a,d,f))f.stopPropagation();else if(Pu(i,f),a&4&&-1<nv.indexOf(i)){for(;g!==null;){var v=mr(g);if(v!==null&&Cu(v),v=Ro(i,a,d,f),v===null&&qo(i,a,f,Sa,d),v===g)break;g=v}g!==null&&f.stopPropagation()}else qo(i,a,f,null,d)}}var Sa=null;function Ro(i,a,d,f){if(Sa=null,i=q(f),i=Tn(i),i!==null)if(a=An(i),a===null)i=null;else if(d=a.tag,d===13){if(i=xu(a),i!==null)return i;i=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return Sa=i,null}function Mu(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case No:return 1;case wu:return 4;case va:case Kx:return 16;case ku:return 536870912;default:return 16}default:return 16}}var tn=null,Do=null,Ca=null;function Lu(){if(Ca)return Ca;var i,a=Do,d=a.length,f,g="value"in tn?tn.value:tn.textContent,v=g.length;for(i=0;i<d&&a[i]===g[i];i++);var S=d-i;for(f=1;f<=S&&a[d-f]===g[v-f];f++);return Ca=g.slice(i,1<f?1-f:void 0)}function Ea(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ra(){return!0}function Ou(){return!1}function Ut(i){function a(d,f,g,v,S){this._reactName=d,this._targetInst=g,this.type=f,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var P in i)i.hasOwnProperty(P)&&(d=i[P],this[P]=d?d(v):v[P]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ra:Ou,this.isPropagationStopped=Ou,this}return se(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),a}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Ut(mi),ir=se({},mi,{view:0,detail:0}),ov=Ut(ir),Ao,To,rr,Da=se({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==rr&&(rr&&i.type==="mousemove"?(Ao=i.screenX-rr.screenX,To=i.screenY-rr.screenY):To=Ao=0,rr=i),Ao)},movementY:function(i){return"movementY"in i?i.movementY:To}}),Iu=Ut(Da),cv=se({},Da,{dataTransfer:0}),dv=Ut(cv),uv=se({},ir,{relatedTarget:0}),Mo=Ut(uv),hv=se({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Ut(hv),pv=se({},mi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),mv=Ut(pv),gv=se({},mi,{data:0}),zu=Ut(gv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=yv[i])?!!a[i]:!1}function Lo(){return bv}var jv=se({},ir,{key:function(i){if(i.key){var a=xv[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vv[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(i){return i.type==="keypress"?Ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Nv=Ut(jv),wv=se({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Ut(wv),kv=se({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),_v=Ut(kv),Sv=se({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Ut(Sv),Ev=se({},Da,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Ut(Ev),Dv=[9,13,27,32],Oo=u&&"CompositionEvent"in window,ar=null;u&&"documentMode"in document&&(ar=document.documentMode);var Pv=u&&"TextEvent"in window&&!ar,Bu=u&&(!Oo||ar&&8<ar&&11>=ar),$u=" ",Uu=!1;function Wu(i,a){switch(i){case"keyup":return Dv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var gi=!1;function Av(i,a){switch(i){case"compositionend":return Hu(a);case"keypress":return a.which!==32?null:(Uu=!0,$u);case"textInput":return i=a.data,i===$u&&Uu?null:i;default:return null}}function Tv(i,a){if(gi)return i==="compositionend"||!Oo&&Wu(i,a)?(i=Lu(),Ca=Do=tn=null,gi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Bu&&a.locale!=="ko"?null:a.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!Mv[i.type]:a==="textarea"}function qu(i,a,d,f){Yi(f),a=La(a,"onChange"),0<a.length&&(d=new Po("onChange","change",null,d,f),i.push({event:d,listeners:a}))}var lr=null,or=null;function Lv(i){dh(i,0)}function Pa(i){var a=ji(i);if(pt(a))return i}function Ov(i,a){if(i==="change")return a}var Yu=!1;if(u){var Io;if(u){var zo="oninput"in document;if(!zo){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),zo=typeof Qu.oninput=="function"}Io=zo}else Io=!1;Yu=Io&&(!document.documentMode||9<document.documentMode)}function Ku(){lr&&(lr.detachEvent("onpropertychange",Xu),or=lr=null)}function Xu(i){if(i.propertyName==="value"&&Pa(or)){var a=[];qu(a,or,i,q(i)),Ct(Lv,a)}}function Iv(i,a,d){i==="focusin"?(Ku(),lr=a,or=d,lr.attachEvent("onpropertychange",Xu)):i==="focusout"&&Ku()}function zv(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Pa(or)}function Fv(i,a){if(i==="click")return Pa(a)}function Bv(i,a){if(i==="input"||i==="change")return Pa(a)}function $v(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var cs=typeof Object.is=="function"?Object.is:$v;function cr(i,a){if(cs(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var d=Object.keys(i),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var g=d[f];if(!h.call(a,g)||!cs(i[g],a[g]))return!1}return!0}function Gu(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ju(i,a){var d=Gu(i);i=0;for(var f;d;){if(d.nodeType===3){if(f=i+d.textContent.length,i<=a&&f>=a)return{node:d,offset:a-i};i=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Gu(d)}}function Zu(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Zu(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function eh(){for(var i=window,a=ve();a instanceof i.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)i=a.contentWindow;else break;a=ve(i.document)}return a}function Fo(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function Uv(i){var a=eh(),d=i.focusedElem,f=i.selectionRange;if(a!==d&&d&&d.ownerDocument&&Zu(d.ownerDocument.documentElement,d)){if(f!==null&&Fo(d)){if(a=f.start,i=f.end,i===void 0&&(i=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(i,d.value.length);else if(i=(a=d.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=d.textContent.length,v=Math.min(f.start,g);f=f.end===void 0?v:Math.min(f.end,g),!i.extend&&v>f&&(g=f,f=v,v=g),g=Ju(d,v);var S=Ju(d,f);g&&S&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==S.node||i.focusOffset!==S.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),v>f?(i.addRange(a),i.extend(S.node,S.offset)):(a.setEnd(S.node,S.offset),i.addRange(a)))}}for(a=[],i=d;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)i=a[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Wv=u&&"documentMode"in document&&11>=document.documentMode,xi=null,Bo=null,dr=null,$o=!1;function th(i,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;$o||xi==null||xi!==ve(f)||(f=xi,"selectionStart"in f&&Fo(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),dr&&cr(dr,f)||(dr=f,f=La(Bo,"onSelect"),0<f.length&&(a=new Po("onSelect","select",null,a,d),i.push({event:a,listeners:f}),a.target=xi)))}function Aa(i,a){var d={};return d[i.toLowerCase()]=a.toLowerCase(),d["Webkit"+i]="webkit"+a,d["Moz"+i]="moz"+a,d}var vi={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Uo={},sh={};u&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Ta(i){if(Uo[i])return Uo[i];if(!vi[i])return i;var a=vi[i],d;for(d in a)if(a.hasOwnProperty(d)&&d in sh)return Uo[i]=a[d];return i}var nh=Ta("animationend"),ih=Ta("animationiteration"),rh=Ta("animationstart"),ah=Ta("transitionend"),lh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(i,a){lh.set(i,a),o(a,[i])}for(var Wo=0;Wo<oh.length;Wo++){var Ho=oh[Wo],Hv=Ho.toLowerCase(),Vv=Ho[0].toUpperCase()+Ho.slice(1);sn(Hv,"on"+Vv)}sn(nh,"onAnimationEnd"),sn(ih,"onAnimationIteration"),sn(rh,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function ch(i,a,d){var f=i.type||"unknown-event";i.currentTarget=d,Hx(f,a,void 0,i),i.currentTarget=null}function dh(i,a){a=(a&4)!==0;for(var d=0;d<i.length;d++){var f=i[d],g=f.event;f=f.listeners;e:{var v=void 0;if(a)for(var S=f.length-1;0<=S;S--){var P=f[S],I=P.instance,X=P.currentTarget;if(P=P.listener,I!==v&&g.isPropagationStopped())break e;ch(g,P,X),v=I}else for(S=0;S<f.length;S++){if(P=f[S],I=P.instance,X=P.currentTarget,P=P.listener,I!==v&&g.isPropagationStopped())break e;ch(g,P,X),v=I}}}if(xa)throw i=jo,xa=!1,jo=null,i}function We(i,a){var d=a[Jo];d===void 0&&(d=a[Jo]=new Set);var f=i+"__bubble";d.has(f)||(uh(a,i,2,!1),d.add(f))}function Vo(i,a,d){var f=0;a&&(f|=4),uh(d,i,f,a)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function hr(i){if(!i[Ma]){i[Ma]=!0,r.forEach(function(d){d!=="selectionchange"&&(qv.has(d)||Vo(d,!1,i),Vo(d,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ma]||(a[Ma]=!0,Vo("selectionchange",!1,a))}}function uh(i,a,d,f){switch(Mu(a)){case 1:var g=av;break;case 4:g=lv;break;default:g=Eo}d=g.bind(null,a,d,i),g=void 0,!bo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(a,d,{capture:!0,passive:g}):i.addEventListener(a,d,!0):g!==void 0?i.addEventListener(a,d,{passive:g}):i.addEventListener(a,d,!1)}function qo(i,a,d,f,g){var v=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var S=f.tag;if(S===3||S===4){var P=f.stateNode.containerInfo;if(P===g||P.nodeType===8&&P.parentNode===g)break;if(S===4)for(S=f.return;S!==null;){var I=S.tag;if((I===3||I===4)&&(I=S.stateNode.containerInfo,I===g||I.nodeType===8&&I.parentNode===g))return;S=S.return}for(;P!==null;){if(S=Tn(P),S===null)return;if(I=S.tag,I===5||I===6){f=v=S;continue e}P=P.parentNode}}f=f.return}Ct(function(){var X=v,ie=q(d),le=[];e:{var ne=lh.get(i);if(ne!==void 0){var me=Po,ye=i;switch(i){case"keypress":if(Ea(d)===0)break e;case"keydown":case"keyup":me=Nv;break;case"focusin":ye="focus",me=Mo;break;case"focusout":ye="blur",me=Mo;break;case"beforeblur":case"afterblur":me=Mo;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=_v;break;case nh:case ih:case rh:me=fv;break;case ah:me=Cv;break;case"scroll":me=ov;break;case"wheel":me=Rv;break;case"copy":case"cut":case"paste":me=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Fu}var be=(a&4)!==0,et=!be&&i==="scroll",Y=be?ne!==null?ne+"Capture":null:ne;be=[];for(var B=X,Q;B!==null;){Q=B;var ce=Q.stateNode;if(Q.tag===5&&ce!==null&&(Q=ce,Y!==null&&(ce=Qi(B,Y),ce!=null&&be.push(fr(B,ce,Q)))),et)break;B=B.return}0<be.length&&(ne=new me(ne,ye,null,d,ie),le.push({event:ne,listeners:be}))}}if((a&7)===0){e:{if(ne=i==="mouseover"||i==="pointerover",me=i==="mouseout"||i==="pointerout",ne&&d!==fi&&(ye=d.relatedTarget||d.fromElement)&&(Tn(ye)||ye[Ts]))break e;if((me||ne)&&(ne=ie.window===ie?ie:(ne=ie.ownerDocument)?ne.defaultView||ne.parentWindow:window,me?(ye=d.relatedTarget||d.toElement,me=X,ye=ye?Tn(ye):null,ye!==null&&(et=An(ye),ye!==et||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(me=null,ye=X),me!==ye)){if(be=Iu,ce="onMouseLeave",Y="onMouseEnter",B="mouse",(i==="pointerout"||i==="pointerover")&&(be=Fu,ce="onPointerLeave",Y="onPointerEnter",B="pointer"),et=me==null?ne:ji(me),Q=ye==null?ne:ji(ye),ne=new be(ce,B+"leave",me,d,ie),ne.target=et,ne.relatedTarget=Q,ce=null,Tn(ie)===X&&(be=new be(Y,B+"enter",ye,d,ie),be.target=Q,be.relatedTarget=et,ce=be),et=ce,me&&ye)t:{for(be=me,Y=ye,B=0,Q=be;Q;Q=yi(Q))B++;for(Q=0,ce=Y;ce;ce=yi(ce))Q++;for(;0<B-Q;)be=yi(be),B--;for(;0<Q-B;)Y=yi(Y),Q--;for(;B--;){if(be===Y||Y!==null&&be===Y.alternate)break t;be=yi(be),Y=yi(Y)}be=null}else be=null;me!==null&&hh(le,ne,me,be,!1),ye!==null&&et!==null&&hh(le,et,ye,be,!0)}}e:{if(ne=X?ji(X):window,me=ne.nodeName&&ne.nodeName.toLowerCase(),me==="select"||me==="input"&&ne.type==="file")var Ne=Ov;else if(Vu(ne))if(Yu)Ne=Bv;else{Ne=zv;var _e=Iv}else(me=ne.nodeName)&&me.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(Ne=Fv);if(Ne&&(Ne=Ne(i,X))){qu(le,Ne,d,ie);break e}_e&&_e(i,ne,X),i==="focusout"&&(_e=ne._wrapperState)&&_e.controlled&&ne.type==="number"&&Cn(ne,"number",ne.value)}switch(_e=X?ji(X):window,i){case"focusin":(Vu(_e)||_e.contentEditable==="true")&&(xi=_e,Bo=X,dr=null);break;case"focusout":dr=Bo=xi=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,th(le,d,ie);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":th(le,d,ie)}var Se;if(Oo)e:{switch(i){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else gi?Wu(i,d)&&(Ee="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(Ee="onCompositionStart");Ee&&(Bu&&d.locale!=="ko"&&(gi||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&gi&&(Se=Lu()):(tn=ie,Do="value"in tn?tn.value:tn.textContent,gi=!0)),_e=La(X,Ee),0<_e.length&&(Ee=new zu(Ee,i,null,d,ie),le.push({event:Ee,listeners:_e}),Se?Ee.data=Se:(Se=Hu(d),Se!==null&&(Ee.data=Se)))),(Se=Pv?Av(i,d):Tv(i,d))&&(X=La(X,"onBeforeInput"),0<X.length&&(ie=new zu("onBeforeInput","beforeinput",null,d,ie),le.push({event:ie,listeners:X}),ie.data=Se))}dh(le,a)})}function fr(i,a,d){return{instance:i,listener:a,currentTarget:d}}function La(i,a){for(var d=a+"Capture",f=[];i!==null;){var g=i,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Qi(i,d),v!=null&&f.unshift(fr(i,v,g)),v=Qi(i,a),v!=null&&f.push(fr(i,v,g))),i=i.return}return f}function yi(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hh(i,a,d,f,g){for(var v=a._reactName,S=[];d!==null&&d!==f;){var P=d,I=P.alternate,X=P.stateNode;if(I!==null&&I===f)break;P.tag===5&&X!==null&&(P=X,g?(I=Qi(d,v),I!=null&&S.unshift(fr(d,I,P))):g||(I=Qi(d,v),I!=null&&S.push(fr(d,I,P)))),d=d.return}S.length!==0&&i.push({event:a,listeners:S})}var Yv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function fh(i){return(typeof i=="string"?i:""+i).replace(Yv,`
`).replace(Qv,"")}function Oa(i,a,d){if(a=fh(a),fh(i)!==a&&d)throw Error(n(425))}function Ia(){}var Yo=null,Qo=null;function Ko(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(i){return ph.resolve(null).then(i).catch(Gv)}:Xo;function Gv(i){setTimeout(function(){throw i})}function Go(i,a){var d=a,f=0;do{var g=d.nextSibling;if(i.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(f===0){i.removeChild(g),nr(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=g}while(d);nr(a)}function nn(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function mh(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return i;a--}else d==="/$"&&a++}i=i.previousSibling}return null}var bi=Math.random().toString(36).slice(2),ws="__reactFiber$"+bi,pr="__reactProps$"+bi,Ts="__reactContainer$"+bi,Jo="__reactEvents$"+bi,Jv="__reactListeners$"+bi,Zv="__reactHandles$"+bi;function Tn(i){var a=i[ws];if(a)return a;for(var d=i.parentNode;d;){if(a=d[Ts]||d[ws]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(i=mh(i);i!==null;){if(d=i[ws])return d;i=mh(i)}return a}i=d,d=i.parentNode}return null}function mr(i){return i=i[ws]||i[Ts],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ji(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function za(i){return i[pr]||null}var Zo=[],Ni=-1;function rn(i){return{current:i}}function He(i){0>Ni||(i.current=Zo[Ni],Zo[Ni]=null,Ni--)}function $e(i,a){Ni++,Zo[Ni]=i.current,i.current=a}var an={},vt=rn(an),Pt=rn(!1),Mn=an;function wi(i,a){var d=i.type.contextTypes;if(!d)return an;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in d)g[v]=a[v];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function At(i){return i=i.childContextTypes,i!=null}function Fa(){He(Pt),He(vt)}function gh(i,a,d){if(vt.current!==an)throw Error(n(168));$e(vt,a),$e(Pt,d)}function xh(i,a,d){var f=i.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var g in f)if(!(g in a))throw Error(n(108,de(i)||"Unknown",g));return se({},d,f)}function Ba(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||an,Mn=vt.current,$e(vt,i),$e(Pt,Pt.current),!0}function vh(i,a,d){var f=i.stateNode;if(!f)throw Error(n(169));d?(i=xh(i,a,Mn),f.__reactInternalMemoizedMergedChildContext=i,He(Pt),He(vt),$e(vt,i)):He(Pt),$e(Pt,d)}var Ms=null,$a=!1,ec=!1;function yh(i){Ms===null?Ms=[i]:Ms.push(i)}function ey(i){$a=!0,yh(i)}function ln(){if(!ec&&Ms!==null){ec=!0;var i=0,a=ze;try{var d=Ms;for(ze=1;i<d.length;i++){var f=d[i];do f=f(!0);while(f!==null)}Ms=null,$a=!1}catch(g){throw Ms!==null&&(Ms=Ms.slice(i+1)),ju(No,ln),g}finally{ze=a,ec=!1}}return null}var ki=[],_i=0,Ua=null,Wa=0,Kt=[],Xt=0,Ln=null,Ls=1,Os="";function On(i,a){ki[_i++]=Wa,ki[_i++]=Ua,Ua=i,Wa=a}function bh(i,a,d){Kt[Xt++]=Ls,Kt[Xt++]=Os,Kt[Xt++]=Ln,Ln=i;var f=Ls;i=Os;var g=32-os(f)-1;f&=~(1<<g),d+=1;var v=32-os(a)+g;if(30<v){var S=g-g%5;v=(f&(1<<S)-1).toString(32),f>>=S,g-=S,Ls=1<<32-os(a)+g|d<<g|f,Os=v+i}else Ls=1<<v|d<<g|f,Os=i}function tc(i){i.return!==null&&(On(i,1),bh(i,1,0))}function sc(i){for(;i===Ua;)Ua=ki[--_i],ki[_i]=null,Wa=ki[--_i],ki[_i]=null;for(;i===Ln;)Ln=Kt[--Xt],Kt[Xt]=null,Os=Kt[--Xt],Kt[Xt]=null,Ls=Kt[--Xt],Kt[Xt]=null}var Wt=null,Ht=null,qe=!1,ds=null;function jh(i,a){var d=es(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=i,a=i.deletions,a===null?(i.deletions=[d],i.flags|=16):a.push(d)}function Nh(i,a){switch(i.tag){case 5:var d=i.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,Wt=i,Ht=nn(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,Wt=i,Ht=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=Ln!==null?{id:Ls,overflow:Os}:null,i.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=es(18,null,null,0),d.stateNode=a,d.return=i,i.child=d,Wt=i,Ht=null,!0):!1;default:return!1}}function nc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ic(i){if(qe){var a=Ht;if(a){var d=a;if(!Nh(i,a)){if(nc(i))throw Error(n(418));a=nn(d.nextSibling);var f=Wt;a&&Nh(i,a)?jh(f,d):(i.flags=i.flags&-4097|2,qe=!1,Wt=i)}}else{if(nc(i))throw Error(n(418));i.flags=i.flags&-4097|2,qe=!1,Wt=i}}}function wh(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Wt=i}function Ha(i){if(i!==Wt)return!1;if(!qe)return wh(i),qe=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ko(i.type,i.memoizedProps)),a&&(a=Ht)){if(nc(i))throw kh(),Error(n(418));for(;a;)jh(i,a),a=nn(a.nextSibling)}if(wh(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(a===0){Ht=nn(i.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}i=i.nextSibling}Ht=null}}else Ht=Wt?nn(i.stateNode.nextSibling):null;return!0}function kh(){for(var i=Ht;i;)i=nn(i.nextSibling)}function Si(){Ht=Wt=null,qe=!1}function rc(i){ds===null?ds=[i]:ds.push(i)}var ty=W.ReactCurrentBatchConfig;function gr(i,a,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var f=d.stateNode}if(!f)throw Error(n(147,i));var g=f,v=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===v?a.ref:(a=function(S){var P=g.refs;S===null?delete P[v]:P[v]=S},a._stringRef=v,a)}if(typeof i!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,i))}return i}function Va(i,a){throw i=Object.prototype.toString.call(a),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function _h(i){var a=i._init;return a(i._payload)}function Sh(i){function a(Y,B){if(i){var Q=Y.deletions;Q===null?(Y.deletions=[B],Y.flags|=16):Q.push(B)}}function d(Y,B){if(!i)return null;for(;B!==null;)a(Y,B),B=B.sibling;return null}function f(Y,B){for(Y=new Map;B!==null;)B.key!==null?Y.set(B.key,B):Y.set(B.index,B),B=B.sibling;return Y}function g(Y,B){return Y=mn(Y,B),Y.index=0,Y.sibling=null,Y}function v(Y,B,Q){return Y.index=Q,i?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<B?(Y.flags|=2,B):Q):(Y.flags|=2,B)):(Y.flags|=1048576,B)}function S(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function P(Y,B,Q,ce){return B===null||B.tag!==6?(B=Xc(Q,Y.mode,ce),B.return=Y,B):(B=g(B,Q),B.return=Y,B)}function I(Y,B,Q,ce){var Ne=Q.type;return Ne===M?ie(Y,B,Q.props.children,ce,Q.key):B!==null&&(B.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===k&&_h(Ne)===B.type)?(ce=g(B,Q.props),ce.ref=gr(Y,B,Q),ce.return=Y,ce):(ce=ml(Q.type,Q.key,Q.props,null,Y.mode,ce),ce.ref=gr(Y,B,Q),ce.return=Y,ce)}function X(Y,B,Q,ce){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=Gc(Q,Y.mode,ce),B.return=Y,B):(B=g(B,Q.children||[]),B.return=Y,B)}function ie(Y,B,Q,ce,Ne){return B===null||B.tag!==7?(B=Hn(Q,Y.mode,ce,Ne),B.return=Y,B):(B=g(B,Q),B.return=Y,B)}function le(Y,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number")return B=Xc(""+B,Y.mode,Q),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case _:return Q=ml(B.type,B.key,B.props,null,Y.mode,Q),Q.ref=gr(Y,null,B),Q.return=Y,Q;case H:return B=Gc(B,Y.mode,Q),B.return=Y,B;case k:var ce=B._init;return le(Y,ce(B._payload),Q)}if(rs(B)||te(B))return B=Hn(B,Y.mode,Q,null),B.return=Y,B;Va(Y,B)}return null}function ne(Y,B,Q,ce){var Ne=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ne!==null?null:P(Y,B,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Ne?I(Y,B,Q,ce):null;case H:return Q.key===Ne?X(Y,B,Q,ce):null;case k:return Ne=Q._init,ne(Y,B,Ne(Q._payload),ce)}if(rs(Q)||te(Q))return Ne!==null?null:ie(Y,B,Q,ce,null);Va(Y,Q)}return null}function me(Y,B,Q,ce,Ne){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return Y=Y.get(Q)||null,P(B,Y,""+ce,Ne);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case _:return Y=Y.get(ce.key===null?Q:ce.key)||null,I(B,Y,ce,Ne);case H:return Y=Y.get(ce.key===null?Q:ce.key)||null,X(B,Y,ce,Ne);case k:var _e=ce._init;return me(Y,B,Q,_e(ce._payload),Ne)}if(rs(ce)||te(ce))return Y=Y.get(Q)||null,ie(B,Y,ce,Ne,null);Va(B,ce)}return null}function ye(Y,B,Q,ce){for(var Ne=null,_e=null,Se=B,Ee=B=0,ft=null;Se!==null&&Ee<Q.length;Ee++){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var Me=ne(Y,Se,Q[Ee],ce);if(Me===null){Se===null&&(Se=ft);break}i&&Se&&Me.alternate===null&&a(Y,Se),B=v(Me,B,Ee),_e===null?Ne=Me:_e.sibling=Me,_e=Me,Se=ft}if(Ee===Q.length)return d(Y,Se),qe&&On(Y,Ee),Ne;if(Se===null){for(;Ee<Q.length;Ee++)Se=le(Y,Q[Ee],ce),Se!==null&&(B=v(Se,B,Ee),_e===null?Ne=Se:_e.sibling=Se,_e=Se);return qe&&On(Y,Ee),Ne}for(Se=f(Y,Se);Ee<Q.length;Ee++)ft=me(Se,Y,Ee,Q[Ee],ce),ft!==null&&(i&&ft.alternate!==null&&Se.delete(ft.key===null?Ee:ft.key),B=v(ft,B,Ee),_e===null?Ne=ft:_e.sibling=ft,_e=ft);return i&&Se.forEach(function(gn){return a(Y,gn)}),qe&&On(Y,Ee),Ne}function be(Y,B,Q,ce){var Ne=te(Q);if(typeof Ne!="function")throw Error(n(150));if(Q=Ne.call(Q),Q==null)throw Error(n(151));for(var _e=Ne=null,Se=B,Ee=B=0,ft=null,Me=Q.next();Se!==null&&!Me.done;Ee++,Me=Q.next()){Se.index>Ee?(ft=Se,Se=null):ft=Se.sibling;var gn=ne(Y,Se,Me.value,ce);if(gn===null){Se===null&&(Se=ft);break}i&&Se&&gn.alternate===null&&a(Y,Se),B=v(gn,B,Ee),_e===null?Ne=gn:_e.sibling=gn,_e=gn,Se=ft}if(Me.done)return d(Y,Se),qe&&On(Y,Ee),Ne;if(Se===null){for(;!Me.done;Ee++,Me=Q.next())Me=le(Y,Me.value,ce),Me!==null&&(B=v(Me,B,Ee),_e===null?Ne=Me:_e.sibling=Me,_e=Me);return qe&&On(Y,Ee),Ne}for(Se=f(Y,Se);!Me.done;Ee++,Me=Q.next())Me=me(Se,Y,Ee,Me.value,ce),Me!==null&&(i&&Me.alternate!==null&&Se.delete(Me.key===null?Ee:Me.key),B=v(Me,B,Ee),_e===null?Ne=Me:_e.sibling=Me,_e=Me);return i&&Se.forEach(function(My){return a(Y,My)}),qe&&On(Y,Ee),Ne}function et(Y,B,Q,ce){if(typeof Q=="object"&&Q!==null&&Q.type===M&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:e:{for(var Ne=Q.key,_e=B;_e!==null;){if(_e.key===Ne){if(Ne=Q.type,Ne===M){if(_e.tag===7){d(Y,_e.sibling),B=g(_e,Q.props.children),B.return=Y,Y=B;break e}}else if(_e.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===k&&_h(Ne)===_e.type){d(Y,_e.sibling),B=g(_e,Q.props),B.ref=gr(Y,_e,Q),B.return=Y,Y=B;break e}d(Y,_e);break}else a(Y,_e);_e=_e.sibling}Q.type===M?(B=Hn(Q.props.children,Y.mode,ce,Q.key),B.return=Y,Y=B):(ce=ml(Q.type,Q.key,Q.props,null,Y.mode,ce),ce.ref=gr(Y,B,Q),ce.return=Y,Y=ce)}return S(Y);case H:e:{for(_e=Q.key;B!==null;){if(B.key===_e)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){d(Y,B.sibling),B=g(B,Q.children||[]),B.return=Y,Y=B;break e}else{d(Y,B);break}else a(Y,B);B=B.sibling}B=Gc(Q,Y.mode,ce),B.return=Y,Y=B}return S(Y);case k:return _e=Q._init,et(Y,B,_e(Q._payload),ce)}if(rs(Q))return ye(Y,B,Q,ce);if(te(Q))return be(Y,B,Q,ce);Va(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,B!==null&&B.tag===6?(d(Y,B.sibling),B=g(B,Q),B.return=Y,Y=B):(d(Y,B),B=Xc(Q,Y.mode,ce),B.return=Y,Y=B),S(Y)):d(Y,B)}return et}var Ci=Sh(!0),Ch=Sh(!1),qa=rn(null),Ya=null,Ei=null,ac=null;function lc(){ac=Ei=Ya=null}function oc(i){var a=qa.current;He(qa),i._currentValue=a}function cc(i,a,d){for(;i!==null;){var f=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),i===d)break;i=i.return}}function Ri(i,a){Ya=i,ac=Ei=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Tt=!0),i.firstContext=null)}function Gt(i){var a=i._currentValue;if(ac!==i)if(i={context:i,memoizedValue:a,next:null},Ei===null){if(Ya===null)throw Error(n(308));Ei=i,Ya.dependencies={lanes:0,firstContext:i}}else Ei=Ei.next=i;return a}var In=null;function dc(i){In===null?In=[i]:In.push(i)}function Eh(i,a,d,f){var g=a.interleaved;return g===null?(d.next=d,dc(a)):(d.next=g.next,g.next=d),a.interleaved=d,Is(i,f)}function Is(i,a){i.lanes|=a;var d=i.alternate;for(d!==null&&(d.lanes|=a),d=i,i=i.return;i!==null;)i.childLanes|=a,d=i.alternate,d!==null&&(d.childLanes|=a),d=i,i=i.return;return d.tag===3?d.stateNode:null}var on=!1;function uc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zs(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function cn(i,a,d){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Te&2)!==0){var g=f.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a,Is(i,d)}return g=f.interleaved,g===null?(a.next=a,dc(f)):(a.next=g.next,g.next=a),f.interleaved=a,Is(i,d)}function Qa(i,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,_o(i,d)}}function Dh(i,a){var d=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var g=null,v=null;if(d=d.firstBaseUpdate,d!==null){do{var S={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};v===null?g=v=S:v=v.next=S,d=d.next}while(d!==null);v===null?g=v=a:v=v.next=a}else g=v=a;d={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:f.shared,effects:f.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=a:i.next=a,d.lastBaseUpdate=a}function Ka(i,a,d,f){var g=i.updateQueue;on=!1;var v=g.firstBaseUpdate,S=g.lastBaseUpdate,P=g.shared.pending;if(P!==null){g.shared.pending=null;var I=P,X=I.next;I.next=null,S===null?v=X:S.next=X,S=I;var ie=i.alternate;ie!==null&&(ie=ie.updateQueue,P=ie.lastBaseUpdate,P!==S&&(P===null?ie.firstBaseUpdate=X:P.next=X,ie.lastBaseUpdate=I))}if(v!==null){var le=g.baseState;S=0,ie=X=I=null,P=v;do{var ne=P.lane,me=P.eventTime;if((f&ne)===ne){ie!==null&&(ie=ie.next={eventTime:me,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ye=i,be=P;switch(ne=a,me=d,be.tag){case 1:if(ye=be.payload,typeof ye=="function"){le=ye.call(me,le,ne);break e}le=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=be.payload,ne=typeof ye=="function"?ye.call(me,le,ne):ye,ne==null)break e;le=se({},le,ne);break e;case 2:on=!0}}P.callback!==null&&P.lane!==0&&(i.flags|=64,ne=g.effects,ne===null?g.effects=[P]:ne.push(P))}else me={eventTime:me,lane:ne,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ie===null?(X=ie=me,I=le):ie=ie.next=me,S|=ne;if(P=P.next,P===null){if(P=g.shared.pending,P===null)break;ne=P,P=ne.next,ne.next=null,g.lastBaseUpdate=ne,g.shared.pending=null}}while(!0);if(ie===null&&(I=le),g.baseState=I,g.firstBaseUpdate=X,g.lastBaseUpdate=ie,a=g.shared.interleaved,a!==null){g=a;do S|=g.lane,g=g.next;while(g!==a)}else v===null&&(g.shared.lanes=0);Bn|=S,i.lanes=S,i.memoizedState=le}}function Ph(i,a,d){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var f=i[a],g=f.callback;if(g!==null){if(f.callback=null,f=d,typeof g!="function")throw Error(n(191,g));g.call(f)}}}var xr={},ks=rn(xr),vr=rn(xr),yr=rn(xr);function zn(i){if(i===xr)throw Error(n(174));return i}function hc(i,a){switch($e(yr,a),$e(vr,i),$e(ks,xr),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ae(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Ae(a,i)}He(ks),$e(ks,a)}function Di(){He(ks),He(vr),He(yr)}function Ah(i){zn(yr.current);var a=zn(ks.current),d=Ae(a,i.type);a!==d&&($e(vr,i),$e(ks,d))}function fc(i){vr.current===i&&(He(ks),He(vr))}var Qe=rn(0);function Xa(i){for(var a=i;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var pc=[];function mc(){for(var i=0;i<pc.length;i++)pc[i]._workInProgressVersionPrimary=null;pc.length=0}var Ga=W.ReactCurrentDispatcher,gc=W.ReactCurrentBatchConfig,Fn=0,Ke=null,ot=null,ut=null,Ja=!1,br=!1,jr=0,sy=0;function yt(){throw Error(n(321))}function xc(i,a){if(a===null)return!1;for(var d=0;d<a.length&&d<i.length;d++)if(!cs(i[d],a[d]))return!1;return!0}function vc(i,a,d,f,g,v){if(Fn=v,Ke=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ga.current=i===null||i.memoizedState===null?ay:ly,i=d(f,g),br){v=0;do{if(br=!1,jr=0,25<=v)throw Error(n(301));v+=1,ut=ot=null,a.updateQueue=null,Ga.current=oy,i=d(f,g)}while(br)}if(Ga.current=tl,a=ot!==null&&ot.next!==null,Fn=0,ut=ot=Ke=null,Ja=!1,a)throw Error(n(300));return i}function yc(){var i=jr!==0;return jr=0,i}function _s(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ke.memoizedState=ut=i:ut=ut.next=i,ut}function Jt(){if(ot===null){var i=Ke.alternate;i=i!==null?i.memoizedState:null}else i=ot.next;var a=ut===null?Ke.memoizedState:ut.next;if(a!==null)ut=a,ot=i;else{if(i===null)throw Error(n(310));ot=i,i={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},ut===null?Ke.memoizedState=ut=i:ut=ut.next=i}return ut}function Nr(i,a){return typeof a=="function"?a(i):a}function bc(i){var a=Jt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=i;var f=ot,g=f.baseQueue,v=d.pending;if(v!==null){if(g!==null){var S=g.next;g.next=v.next,v.next=S}f.baseQueue=g=v,d.pending=null}if(g!==null){v=g.next,f=f.baseState;var P=S=null,I=null,X=v;do{var ie=X.lane;if((Fn&ie)===ie)I!==null&&(I=I.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),f=X.hasEagerState?X.eagerState:i(f,X.action);else{var le={lane:ie,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};I===null?(P=I=le,S=f):I=I.next=le,Ke.lanes|=ie,Bn|=ie}X=X.next}while(X!==null&&X!==v);I===null?S=f:I.next=P,cs(f,a.memoizedState)||(Tt=!0),a.memoizedState=f,a.baseState=S,a.baseQueue=I,d.lastRenderedState=f}if(i=d.interleaved,i!==null){g=i;do v=g.lane,Ke.lanes|=v,Bn|=v,g=g.next;while(g!==i)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function jc(i){var a=Jt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=i;var f=d.dispatch,g=d.pending,v=a.memoizedState;if(g!==null){d.pending=null;var S=g=g.next;do v=i(v,S.action),S=S.next;while(S!==g);cs(v,a.memoizedState)||(Tt=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),d.lastRenderedState=v}return[v,f]}function Th(){}function Mh(i,a){var d=Ke,f=Jt(),g=a(),v=!cs(f.memoizedState,g);if(v&&(f.memoizedState=g,Tt=!0),f=f.queue,Nc(Ih.bind(null,d,f,i),[i]),f.getSnapshot!==a||v||ut!==null&&ut.memoizedState.tag&1){if(d.flags|=2048,wr(9,Oh.bind(null,d,f,g,a),void 0,null),ht===null)throw Error(n(349));(Fn&30)!==0||Lh(d,a,g)}return g}function Lh(i,a,d){i.flags|=16384,i={getSnapshot:a,value:d},a=Ke.updateQueue,a===null?(a={lastEffect:null,stores:null},Ke.updateQueue=a,a.stores=[i]):(d=a.stores,d===null?a.stores=[i]:d.push(i))}function Oh(i,a,d,f){a.value=d,a.getSnapshot=f,zh(a)&&Fh(i)}function Ih(i,a,d){return d(function(){zh(a)&&Fh(i)})}function zh(i){var a=i.getSnapshot;i=i.value;try{var d=a();return!cs(i,d)}catch{return!0}}function Fh(i){var a=Is(i,1);a!==null&&ps(a,i,1,-1)}function Bh(i){var a=_s();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:i},a.queue=i,i=i.dispatch=ry.bind(null,Ke,i),[a.memoizedState,i]}function wr(i,a,d,f){return i={tag:i,create:a,destroy:d,deps:f,next:null},a=Ke.updateQueue,a===null?(a={lastEffect:null,stores:null},Ke.updateQueue=a,a.lastEffect=i.next=i):(d=a.lastEffect,d===null?a.lastEffect=i.next=i:(f=d.next,d.next=i,i.next=f,a.lastEffect=i)),i}function $h(){return Jt().memoizedState}function Za(i,a,d,f){var g=_s();Ke.flags|=i,g.memoizedState=wr(1|a,d,void 0,f===void 0?null:f)}function el(i,a,d,f){var g=Jt();f=f===void 0?null:f;var v=void 0;if(ot!==null){var S=ot.memoizedState;if(v=S.destroy,f!==null&&xc(f,S.deps)){g.memoizedState=wr(a,d,v,f);return}}Ke.flags|=i,g.memoizedState=wr(1|a,d,v,f)}function Uh(i,a){return Za(8390656,8,i,a)}function Nc(i,a){return el(2048,8,i,a)}function Wh(i,a){return el(4,2,i,a)}function Hh(i,a){return el(4,4,i,a)}function Vh(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function qh(i,a,d){return d=d!=null?d.concat([i]):null,el(4,4,Vh.bind(null,a,i),d)}function wc(){}function Yh(i,a){var d=Jt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&xc(a,f[1])?f[0]:(d.memoizedState=[i,a],i)}function Qh(i,a){var d=Jt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&xc(a,f[1])?f[0]:(i=i(),d.memoizedState=[i,a],i)}function Kh(i,a,d){return(Fn&21)===0?(i.baseState&&(i.baseState=!1,Tt=!0),i.memoizedState=d):(cs(d,a)||(d=_u(),Ke.lanes|=d,Bn|=d,i.baseState=!0),a)}function ny(i,a){var d=ze;ze=d!==0&&4>d?d:4,i(!0);var f=gc.transition;gc.transition={};try{i(!1),a()}finally{ze=d,gc.transition=f}}function Xh(){return Jt().memoizedState}function iy(i,a,d){var f=fn(i);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Gh(i))Jh(a,d);else if(d=Eh(i,a,d,f),d!==null){var g=Rt();ps(d,i,f,g),Zh(d,a,f)}}function ry(i,a,d){var f=fn(i),g={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Gh(i))Jh(a,g);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var S=a.lastRenderedState,P=v(S,d);if(g.hasEagerState=!0,g.eagerState=P,cs(P,S)){var I=a.interleaved;I===null?(g.next=g,dc(a)):(g.next=I.next,I.next=g),a.interleaved=g;return}}catch{}finally{}d=Eh(i,a,g,f),d!==null&&(g=Rt(),ps(d,i,f,g),Zh(d,a,f))}}function Gh(i){var a=i.alternate;return i===Ke||a!==null&&a===Ke}function Jh(i,a){br=Ja=!0;var d=i.pending;d===null?a.next=a:(a.next=d.next,d.next=a),i.pending=a}function Zh(i,a,d){if((d&4194240)!==0){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,_o(i,d)}}var tl={readContext:Gt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},ay={readContext:Gt,useCallback:function(i,a){return _s().memoizedState=[i,a===void 0?null:a],i},useContext:Gt,useEffect:Uh,useImperativeHandle:function(i,a,d){return d=d!=null?d.concat([i]):null,Za(4194308,4,Vh.bind(null,a,i),d)},useLayoutEffect:function(i,a){return Za(4194308,4,i,a)},useInsertionEffect:function(i,a){return Za(4,2,i,a)},useMemo:function(i,a){var d=_s();return a=a===void 0?null:a,i=i(),d.memoizedState=[i,a],i},useReducer:function(i,a,d){var f=_s();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},f.queue=i,i=i.dispatch=iy.bind(null,Ke,i),[f.memoizedState,i]},useRef:function(i){var a=_s();return i={current:i},a.memoizedState=i},useState:Bh,useDebugValue:wc,useDeferredValue:function(i){return _s().memoizedState=i},useTransition:function(){var i=Bh(!1),a=i[0];return i=ny.bind(null,i[1]),_s().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,d){var f=Ke,g=_s();if(qe){if(d===void 0)throw Error(n(407));d=d()}else{if(d=a(),ht===null)throw Error(n(349));(Fn&30)!==0||Lh(f,a,d)}g.memoizedState=d;var v={value:d,getSnapshot:a};return g.queue=v,Uh(Ih.bind(null,f,v,i),[i]),f.flags|=2048,wr(9,Oh.bind(null,f,v,d,a),void 0,null),d},useId:function(){var i=_s(),a=ht.identifierPrefix;if(qe){var d=Os,f=Ls;d=(f&~(1<<32-os(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=jr++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=sy++,a=":"+a+"r"+d.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},ly={readContext:Gt,useCallback:Yh,useContext:Gt,useEffect:Nc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Hh,useMemo:Qh,useReducer:bc,useRef:$h,useState:function(){return bc(Nr)},useDebugValue:wc,useDeferredValue:function(i){var a=Jt();return Kh(a,ot.memoizedState,i)},useTransition:function(){var i=bc(Nr)[0],a=Jt().memoizedState;return[i,a]},useMutableSource:Th,useSyncExternalStore:Mh,useId:Xh,unstable_isNewReconciler:!1},oy={readContext:Gt,useCallback:Yh,useContext:Gt,useEffect:Nc,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Hh,useMemo:Qh,useReducer:jc,useRef:$h,useState:function(){return jc(Nr)},useDebugValue:wc,useDeferredValue:function(i){var a=Jt();return ot===null?a.memoizedState=i:Kh(a,ot.memoizedState,i)},useTransition:function(){var i=jc(Nr)[0],a=Jt().memoizedState;return[i,a]},useMutableSource:Th,useSyncExternalStore:Mh,useId:Xh,unstable_isNewReconciler:!1};function us(i,a){if(i&&i.defaultProps){a=se({},a),i=i.defaultProps;for(var d in i)a[d]===void 0&&(a[d]=i[d]);return a}return a}function kc(i,a,d,f){a=i.memoizedState,d=d(f,a),d=d==null?a:se({},a,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var sl={isMounted:function(i){return(i=i._reactInternals)?An(i)===i:!1},enqueueSetState:function(i,a,d){i=i._reactInternals;var f=Rt(),g=fn(i),v=zs(f,g);v.payload=a,d!=null&&(v.callback=d),a=cn(i,v,g),a!==null&&(ps(a,i,g,f),Qa(a,i,g))},enqueueReplaceState:function(i,a,d){i=i._reactInternals;var f=Rt(),g=fn(i),v=zs(f,g);v.tag=1,v.payload=a,d!=null&&(v.callback=d),a=cn(i,v,g),a!==null&&(ps(a,i,g,f),Qa(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var d=Rt(),f=fn(i),g=zs(d,f);g.tag=2,a!=null&&(g.callback=a),a=cn(i,g,f),a!==null&&(ps(a,i,f,d),Qa(a,i,f))}};function ef(i,a,d,f,g,v,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,v,S):a.prototype&&a.prototype.isPureReactComponent?!cr(d,f)||!cr(g,v):!0}function tf(i,a,d){var f=!1,g=an,v=a.contextType;return typeof v=="object"&&v!==null?v=Gt(v):(g=At(a)?Mn:vt.current,f=a.contextTypes,v=(f=f!=null)?wi(i,g):an),a=new a(d,v),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=sl,i.stateNode=a,a._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=v),a}function sf(i,a,d,f){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==i&&sl.enqueueReplaceState(a,a.state,null)}function _c(i,a,d,f){var g=i.stateNode;g.props=d,g.state=i.memoizedState,g.refs={},uc(i);var v=a.contextType;typeof v=="object"&&v!==null?g.context=Gt(v):(v=At(a)?Mn:vt.current,g.context=wi(i,v)),g.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(kc(i,a,v,d),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&sl.enqueueReplaceState(g,g.state,null),Ka(i,d,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Pi(i,a){try{var d="",f=a;do d+=we(f),f=f.return;while(f);var g=d}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:a,stack:g,digest:null}}function Sc(i,a,d){return{value:i,source:null,stack:d??null,digest:a??null}}function Cc(i,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function nf(i,a,d){d=zs(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){cl||(cl=!0,Uc=f),Cc(i,a)},d}function rf(i,a,d){d=zs(-1,d),d.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=a.value;d.payload=function(){return f(g)},d.callback=function(){Cc(i,a)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(d.callback=function(){Cc(i,a),typeof f!="function"&&(un===null?un=new Set([this]):un.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})}),d}function af(i,a,d){var f=i.pingCache;if(f===null){f=i.pingCache=new cy;var g=new Set;f.set(a,g)}else g=f.get(a),g===void 0&&(g=new Set,f.set(a,g));g.has(d)||(g.add(d),i=wy.bind(null,i,a,d),a.then(i,i))}function lf(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function of(i,a,d,f,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=zs(-1,1),a.tag=2,cn(d,a,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var dy=W.ReactCurrentOwner,Tt=!1;function Et(i,a,d,f){a.child=i===null?Ch(a,null,d,f):Ci(a,i.child,d,f)}function cf(i,a,d,f,g){d=d.render;var v=a.ref;return Ri(a,g),f=vc(i,a,d,f,v,g),d=yc(),i!==null&&!Tt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Fs(i,a,g)):(qe&&d&&tc(a),a.flags|=1,Et(i,a,f,g),a.child)}function df(i,a,d,f,g){if(i===null){var v=d.type;return typeof v=="function"&&!Kc(v)&&v.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=v,uf(i,a,v,f,g)):(i=ml(d.type,null,f,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(v=i.child,(i.lanes&g)===0){var S=v.memoizedProps;if(d=d.compare,d=d!==null?d:cr,d(S,f)&&i.ref===a.ref)return Fs(i,a,g)}return a.flags|=1,i=mn(v,f),i.ref=a.ref,i.return=a,a.child=i}function uf(i,a,d,f,g){if(i!==null){var v=i.memoizedProps;if(cr(v,f)&&i.ref===a.ref)if(Tt=!1,a.pendingProps=f=v,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Tt=!0);else return a.lanes=i.lanes,Fs(i,a,g)}return Ec(i,a,d,f,g)}function hf(i,a,d){var f=a.pendingProps,g=f.children,v=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Ti,Vt),Vt|=d;else{if((d&1073741824)===0)return i=v!==null?v.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,$e(Ti,Vt),Vt|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:d,$e(Ti,Vt),Vt|=f}else v!==null?(f=v.baseLanes|d,a.memoizedState=null):f=d,$e(Ti,Vt),Vt|=f;return Et(i,a,g,d),a.child}function ff(i,a){var d=a.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function Ec(i,a,d,f,g){var v=At(d)?Mn:vt.current;return v=wi(a,v),Ri(a,g),d=vc(i,a,d,f,v,g),f=yc(),i!==null&&!Tt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Fs(i,a,g)):(qe&&f&&tc(a),a.flags|=1,Et(i,a,d,g),a.child)}function pf(i,a,d,f,g){if(At(d)){var v=!0;Ba(a)}else v=!1;if(Ri(a,g),a.stateNode===null)il(i,a),tf(a,d,f),_c(a,d,f,g),f=!0;else if(i===null){var S=a.stateNode,P=a.memoizedProps;S.props=P;var I=S.context,X=d.contextType;typeof X=="object"&&X!==null?X=Gt(X):(X=At(d)?Mn:vt.current,X=wi(a,X));var ie=d.getDerivedStateFromProps,le=typeof ie=="function"||typeof S.getSnapshotBeforeUpdate=="function";le||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==f||I!==X)&&sf(a,S,f,X),on=!1;var ne=a.memoizedState;S.state=ne,Ka(a,f,S,g),I=a.memoizedState,P!==f||ne!==I||Pt.current||on?(typeof ie=="function"&&(kc(a,d,ie,f),I=a.memoizedState),(P=on||ef(a,d,P,f,ne,I,X))?(le||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(a.flags|=4194308)):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=I),S.props=f,S.state=I,S.context=X,f=P):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{S=a.stateNode,Rh(i,a),P=a.memoizedProps,X=a.type===a.elementType?P:us(a.type,P),S.props=X,le=a.pendingProps,ne=S.context,I=d.contextType,typeof I=="object"&&I!==null?I=Gt(I):(I=At(d)?Mn:vt.current,I=wi(a,I));var me=d.getDerivedStateFromProps;(ie=typeof me=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==le||ne!==I)&&sf(a,S,f,I),on=!1,ne=a.memoizedState,S.state=ne,Ka(a,f,S,g);var ye=a.memoizedState;P!==le||ne!==ye||Pt.current||on?(typeof me=="function"&&(kc(a,d,me,f),ye=a.memoizedState),(X=on||ef(a,d,X,f,ne,ye,I)||!1)?(ie||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(f,ye,I),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(f,ye,I)),typeof S.componentDidUpdate=="function"&&(a.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof S.componentDidUpdate!="function"||P===i.memoizedProps&&ne===i.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&ne===i.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=ye),S.props=f,S.state=ye,S.context=I,f=X):(typeof S.componentDidUpdate!="function"||P===i.memoizedProps&&ne===i.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===i.memoizedProps&&ne===i.memoizedState||(a.flags|=1024),f=!1)}return Rc(i,a,d,f,v,g)}function Rc(i,a,d,f,g,v){ff(i,a);var S=(a.flags&128)!==0;if(!f&&!S)return g&&vh(a,d,!1),Fs(i,a,v);f=a.stateNode,dy.current=a;var P=S&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,i!==null&&S?(a.child=Ci(a,i.child,null,v),a.child=Ci(a,null,P,v)):Et(i,a,P,v),a.memoizedState=f.state,g&&vh(a,d,!0),a.child}function mf(i){var a=i.stateNode;a.pendingContext?gh(i,a.pendingContext,a.pendingContext!==a.context):a.context&&gh(i,a.context,!1),hc(i,a.containerInfo)}function gf(i,a,d,f,g){return Si(),rc(g),a.flags|=256,Et(i,a,d,f),a.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Pc(i){return{baseLanes:i,cachePool:null,transitions:null}}function xf(i,a,d){var f=a.pendingProps,g=Qe.current,v=!1,S=(a.flags&128)!==0,P;if((P=S)||(P=i!==null&&i.memoizedState===null?!1:(g&2)!==0),P?(v=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),$e(Qe,g&1),i===null)return ic(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(S=f.children,i=f.fallback,v?(f=a.mode,v=a.child,S={mode:"hidden",children:S},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=S):v=gl(S,f,0,null),i=Hn(i,f,d,null),v.return=a,i.return=a,v.sibling=i,a.child=v,a.child.memoizedState=Pc(d),a.memoizedState=Dc,i):Ac(a,S));if(g=i.memoizedState,g!==null&&(P=g.dehydrated,P!==null))return uy(i,a,S,f,P,g,d);if(v){v=f.fallback,S=a.mode,g=i.child,P=g.sibling;var I={mode:"hidden",children:f.children};return(S&1)===0&&a.child!==g?(f=a.child,f.childLanes=0,f.pendingProps=I,a.deletions=null):(f=mn(g,I),f.subtreeFlags=g.subtreeFlags&14680064),P!==null?v=mn(P,v):(v=Hn(v,S,d,null),v.flags|=2),v.return=a,f.return=a,f.sibling=v,a.child=f,f=v,v=a.child,S=i.child.memoizedState,S=S===null?Pc(d):{baseLanes:S.baseLanes|d,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=i.childLanes&~d,a.memoizedState=Dc,f}return v=i.child,i=v.sibling,f=mn(v,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,i!==null&&(d=a.deletions,d===null?(a.deletions=[i],a.flags|=16):d.push(i)),a.child=f,a.memoizedState=null,f}function Ac(i,a){return a=gl({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function nl(i,a,d,f){return f!==null&&rc(f),Ci(a,i.child,null,d),i=Ac(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function uy(i,a,d,f,g,v,S){if(d)return a.flags&256?(a.flags&=-257,f=Sc(Error(n(422))),nl(i,a,S,f)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(v=f.fallback,g=a.mode,f=gl({mode:"visible",children:f.children},g,0,null),v=Hn(v,g,S,null),v.flags|=2,f.return=a,v.return=a,f.sibling=v,a.child=f,(a.mode&1)!==0&&Ci(a,i.child,null,S),a.child.memoizedState=Pc(S),a.memoizedState=Dc,v);if((a.mode&1)===0)return nl(i,a,S,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var P=f.dgst;return f=P,v=Error(n(419)),f=Sc(v,f,void 0),nl(i,a,S,f)}if(P=(S&i.childLanes)!==0,Tt||P){if(f=ht,f!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|S))!==0?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Is(i,g),ps(f,i,g,-1))}return Qc(),f=Sc(Error(n(421))),nl(i,a,S,f)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=ky.bind(null,i),g._reactRetry=a,null):(i=v.treeContext,Ht=nn(g.nextSibling),Wt=a,qe=!0,ds=null,i!==null&&(Kt[Xt++]=Ls,Kt[Xt++]=Os,Kt[Xt++]=Ln,Ls=i.id,Os=i.overflow,Ln=a),a=Ac(a,f.children),a.flags|=4096,a)}function vf(i,a,d){i.lanes|=a;var f=i.alternate;f!==null&&(f.lanes|=a),cc(i.return,a,d)}function Tc(i,a,d,f,g){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:g}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=d,v.tailMode=g)}function yf(i,a,d){var f=a.pendingProps,g=f.revealOrder,v=f.tail;if(Et(i,a,f.children,d),f=Qe.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vf(i,d,a);else if(i.tag===19)vf(i,d,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if($e(Qe,f),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)i=d.alternate,i!==null&&Xa(i)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),Tc(a,!1,g,d,v);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&Xa(i)===null){a.child=g;break}i=g.sibling,g.sibling=d,d=g,g=i}Tc(a,!0,d,null,v);break;case"together":Tc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function il(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Fs(i,a,d){if(i!==null&&(a.dependencies=i.dependencies),Bn|=a.lanes,(d&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(n(153));if(a.child!==null){for(i=a.child,d=mn(i,i.pendingProps),a.child=d,d.return=a;i.sibling!==null;)i=i.sibling,d=d.sibling=mn(i,i.pendingProps),d.return=a;d.sibling=null}return a.child}function hy(i,a,d){switch(a.tag){case 3:mf(a),Si();break;case 5:Ah(a);break;case 1:At(a.type)&&Ba(a);break;case 4:hc(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,g=a.memoizedProps.value;$e(qa,f._currentValue),f._currentValue=g;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?($e(Qe,Qe.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?xf(i,a,d):($e(Qe,Qe.current&1),i=Fs(i,a,d),i!==null?i.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(i.flags&128)!==0){if(f)return yf(i,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),$e(Qe,Qe.current),f)break;return null;case 22:case 23:return a.lanes=0,hf(i,a,d)}return Fs(i,a,d)}var bf,Mc,jf,Nf;bf=function(i,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Mc=function(){},jf=function(i,a,d,f){var g=i.memoizedProps;if(g!==f){i=a.stateNode,zn(ks.current);var v=null;switch(d){case"input":g=Yt(i,g),f=Yt(i,f),v=[];break;case"select":g=se({},g,{value:void 0}),f=se({},f,{value:void 0}),v=[];break;case"textarea":g=En(i,g),f=En(i,f),v=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ia)}ui(d,f);var S;d=null;for(X in g)if(!f.hasOwnProperty(X)&&g.hasOwnProperty(X)&&g[X]!=null)if(X==="style"){var P=g[X];for(S in P)P.hasOwnProperty(S)&&(d||(d={}),d[S]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(l.hasOwnProperty(X)?v||(v=[]):(v=v||[]).push(X,null));for(X in f){var I=f[X];if(P=g!=null?g[X]:void 0,f.hasOwnProperty(X)&&I!==P&&(I!=null||P!=null))if(X==="style")if(P){for(S in P)!P.hasOwnProperty(S)||I&&I.hasOwnProperty(S)||(d||(d={}),d[S]="");for(S in I)I.hasOwnProperty(S)&&P[S]!==I[S]&&(d||(d={}),d[S]=I[S])}else d||(v||(v=[]),v.push(X,d)),d=I;else X==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,P=P?P.__html:void 0,I!=null&&P!==I&&(v=v||[]).push(X,I)):X==="children"?typeof I!="string"&&typeof I!="number"||(v=v||[]).push(X,""+I):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(l.hasOwnProperty(X)?(I!=null&&X==="onScroll"&&We("scroll",i),v||P===I||(v=[])):(v=v||[]).push(X,I))}d&&(v=v||[]).push("style",d);var X=v;(a.updateQueue=X)&&(a.flags|=4)}},Nf=function(i,a,d,f){d!==f&&(a.flags|=4)};function kr(i,a){if(!qe)switch(i.tailMode){case"hidden":a=i.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function bt(i){var a=i.alternate!==null&&i.alternate.child===i.child,d=0,f=0;if(a)for(var g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=d,a}function fy(i,a,d){var f=a.pendingProps;switch(sc(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(a),null;case 1:return At(a.type)&&Fa(),bt(a),null;case 3:return f=a.stateNode,Di(),He(Pt),He(vt),mc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ha(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ds!==null&&(Vc(ds),ds=null))),Mc(i,a),bt(a),null;case 5:fc(a);var g=zn(yr.current);if(d=a.type,i!==null&&a.stateNode!=null)jf(i,a,d,f,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(n(166));return bt(a),null}if(i=zn(ks.current),Ha(a)){f=a.stateNode,d=a.type;var v=a.memoizedProps;switch(f[ws]=a,f[pr]=v,i=(a.mode&1)!==0,d){case"dialog":We("cancel",f),We("close",f);break;case"iframe":case"object":case"embed":We("load",f);break;case"video":case"audio":for(g=0;g<ur.length;g++)We(ur[g],f);break;case"source":We("error",f);break;case"img":case"image":case"link":We("error",f),We("load",f);break;case"details":We("toggle",f);break;case"input":oi(f,v),We("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},We("invalid",f);break;case"textarea":di(f,v),We("invalid",f)}ui(d,v),g=null;for(var S in v)if(v.hasOwnProperty(S)){var P=v[S];S==="children"?typeof P=="string"?f.textContent!==P&&(v.suppressHydrationWarning!==!0&&Oa(f.textContent,P,i),g=["children",P]):typeof P=="number"&&f.textContent!==""+P&&(v.suppressHydrationWarning!==!0&&Oa(f.textContent,P,i),g=["children",""+P]):l.hasOwnProperty(S)&&P!=null&&S==="onScroll"&&We("scroll",f)}switch(d){case"input":Ue(f),ci(f,v,!0);break;case"textarea":Ue(f),ae(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Ia)}f=g,a.updateQueue=f,f!==null&&(a.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=he(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=S.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=S.createElement(d,{is:f.is}):(i=S.createElement(d),d==="select"&&(S=i,f.multiple?S.multiple=!0:f.size&&(S.size=f.size))):i=S.createElementNS(i,d),i[ws]=a,i[pr]=f,bf(i,a,!1,!1),a.stateNode=i;e:{switch(S=hi(d,f),d){case"dialog":We("cancel",i),We("close",i),g=f;break;case"iframe":case"object":case"embed":We("load",i),g=f;break;case"video":case"audio":for(g=0;g<ur.length;g++)We(ur[g],i);g=f;break;case"source":We("error",i),g=f;break;case"img":case"image":case"link":We("error",i),We("load",i),g=f;break;case"details":We("toggle",i),g=f;break;case"input":oi(i,f),g=Yt(i,f),We("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=se({},f,{value:void 0}),We("invalid",i);break;case"textarea":di(i,f),g=En(i,f),We("invalid",i);break;default:g=f}ui(d,g),P=g;for(v in P)if(P.hasOwnProperty(v)){var I=P[v];v==="style"?Dn(i,I):v==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&ls(i,I)):v==="children"?typeof I=="string"?(d!=="textarea"||I!=="")&&bs(i,I):typeof I=="number"&&bs(i,""+I):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(l.hasOwnProperty(v)?I!=null&&v==="onScroll"&&We("scroll",i):I!=null&&T(i,v,I,S))}switch(d){case"input":Ue(i),ci(i,f,!1);break;case"textarea":Ue(i),ae(i);break;case"option":f.value!=null&&i.setAttribute("value",""+pe(f.value));break;case"select":i.multiple=!!f.multiple,v=f.value,v!=null?as(i,!!f.multiple,v,!1):f.defaultValue!=null&&as(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Ia)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return bt(a),null;case 6:if(i&&a.stateNode!=null)Nf(i,a,i.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(n(166));if(d=zn(yr.current),zn(ks.current),Ha(a)){if(f=a.stateNode,d=a.memoizedProps,f[ws]=a,(v=f.nodeValue!==d)&&(i=Wt,i!==null))switch(i.tag){case 3:Oa(f.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Oa(f.nodeValue,d,(i.mode&1)!==0)}v&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[ws]=a,a.stateNode=f}return bt(a),null;case 13:if(He(Qe),f=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qe&&Ht!==null&&(a.mode&1)!==0&&(a.flags&128)===0)kh(),Si(),a.flags|=98560,v=!1;else if(v=Ha(a),f!==null&&f.dehydrated!==null){if(i===null){if(!v)throw Error(n(318));if(v=a.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[ws]=a}else Si(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;bt(a),v=!1}else ds!==null&&(Vc(ds),ds=null),v=!0;if(!v)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(Qe.current&1)!==0?ct===0&&(ct=3):Qc())),a.updateQueue!==null&&(a.flags|=4),bt(a),null);case 4:return Di(),Mc(i,a),i===null&&hr(a.stateNode.containerInfo),bt(a),null;case 10:return oc(a.type._context),bt(a),null;case 17:return At(a.type)&&Fa(),bt(a),null;case 19:if(He(Qe),v=a.memoizedState,v===null)return bt(a),null;if(f=(a.flags&128)!==0,S=v.rendering,S===null)if(f)kr(v,!1);else{if(ct!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(S=Xa(i),S!==null){for(a.flags|=128,kr(v,!1),f=S.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)v=d,i=f,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,i=S.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return $e(Qe,Qe.current&1|2),a.child}i=i.sibling}v.tail!==null&&Ze()>Mi&&(a.flags|=128,f=!0,kr(v,!1),a.lanes=4194304)}else{if(!f)if(i=Xa(S),i!==null){if(a.flags|=128,f=!0,d=i.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),kr(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!qe)return bt(a),null}else 2*Ze()-v.renderingStartTime>Mi&&d!==1073741824&&(a.flags|=128,f=!0,kr(v,!1),a.lanes=4194304);v.isBackwards?(S.sibling=a.child,a.child=S):(d=v.last,d!==null?d.sibling=S:a.child=S,v.last=S)}return v.tail!==null?(a=v.tail,v.rendering=a,v.tail=a.sibling,v.renderingStartTime=Ze(),a.sibling=null,d=Qe.current,$e(Qe,f?d&1|2:d&1),a):(bt(a),null);case 22:case 23:return Yc(),f=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Vt&1073741824)!==0&&(bt(a),a.subtreeFlags&6&&(a.flags|=8192)):bt(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function py(i,a){switch(sc(a),a.tag){case 1:return At(a.type)&&Fa(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Di(),He(Pt),He(vt),mc(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return fc(a),null;case 13:if(He(Qe),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(n(340));Si()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return He(Qe),null;case 4:return Di(),null;case 10:return oc(a.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var rl=!1,jt=!1,my=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ai(i,a){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Je(i,a,f)}else d.current=null}function Lc(i,a,d){try{d()}catch(f){Je(i,a,f)}}var wf=!1;function gy(i,a){if(Yo=_a,i=eh(),Fo(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var g=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{d.nodeType,v.nodeType}catch{d=null;break e}var S=0,P=-1,I=-1,X=0,ie=0,le=i,ne=null;t:for(;;){for(var me;le!==d||g!==0&&le.nodeType!==3||(P=S+g),le!==v||f!==0&&le.nodeType!==3||(I=S+f),le.nodeType===3&&(S+=le.nodeValue.length),(me=le.firstChild)!==null;)ne=le,le=me;for(;;){if(le===i)break t;if(ne===d&&++X===g&&(P=S),ne===v&&++ie===f&&(I=S),(me=le.nextSibling)!==null)break;le=ne,ne=le.parentNode}le=me}d=P===-1||I===-1?null:{start:P,end:I}}else d=null}d=d||{start:0,end:0}}else d=null;for(Qo={focusedElem:i,selectionRange:d},_a=!1,xe=a;xe!==null;)if(a=xe,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,xe=i;else for(;xe!==null;){a=xe;try{var ye=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var be=ye.memoizedProps,et=ye.memoizedState,Y=a.stateNode,B=Y.getSnapshotBeforeUpdate(a.elementType===a.type?be:us(a.type,be),et);Y.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var Q=a.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ce){Je(a,a.return,ce)}if(i=a.sibling,i!==null){i.return=a.return,xe=i;break}xe=a.return}return ye=wf,wf=!1,ye}function _r(i,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var v=g.destroy;g.destroy=void 0,v!==void 0&&Lc(a,d,v)}g=g.next}while(g!==f)}}function al(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&i)===i){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function Oc(i){var a=i.ref;if(a!==null){var d=i.stateNode;switch(i.tag){case 5:i=d;break;default:i=d}typeof a=="function"?a(i):a.current=i}}function kf(i){var a=i.alternate;a!==null&&(i.alternate=null,kf(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[ws],delete a[pr],delete a[Jo],delete a[Jv],delete a[Zv])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _f(i){return i.tag===5||i.tag===3||i.tag===4}function Sf(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_f(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ic(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(i,a):d.insertBefore(i,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(i,d)):(a=d,a.appendChild(i)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=Ia));else if(f!==4&&(i=i.child,i!==null))for(Ic(i,a,d),i=i.sibling;i!==null;)Ic(i,a,d),i=i.sibling}function zc(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.insertBefore(i,a):d.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(zc(i,a,d),i=i.sibling;i!==null;)zc(i,a,d),i=i.sibling}var mt=null,hs=!1;function dn(i,a,d){for(d=d.child;d!==null;)Cf(i,a,d),d=d.sibling}function Cf(i,a,d){if(Ns&&typeof Ns.onCommitFiberUnmount=="function")try{Ns.onCommitFiberUnmount(ya,d)}catch{}switch(d.tag){case 5:jt||Ai(d,a);case 6:var f=mt,g=hs;mt=null,dn(i,a,d),mt=f,hs=g,mt!==null&&(hs?(i=mt,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):mt.removeChild(d.stateNode));break;case 18:mt!==null&&(hs?(i=mt,d=d.stateNode,i.nodeType===8?Go(i.parentNode,d):i.nodeType===1&&Go(i,d),nr(i)):Go(mt,d.stateNode));break;case 4:f=mt,g=hs,mt=d.stateNode.containerInfo,hs=!0,dn(i,a,d),mt=f,hs=g;break;case 0:case 11:case 14:case 15:if(!jt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var v=g,S=v.destroy;v=v.tag,S!==void 0&&((v&2)!==0||(v&4)!==0)&&Lc(d,a,S),g=g.next}while(g!==f)}dn(i,a,d);break;case 1:if(!jt&&(Ai(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(P){Je(d,a,P)}dn(i,a,d);break;case 21:dn(i,a,d);break;case 22:d.mode&1?(jt=(f=jt)||d.memoizedState!==null,dn(i,a,d),jt=f):dn(i,a,d);break;default:dn(i,a,d)}}function Ef(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new my),a.forEach(function(f){var g=_y.bind(null,i,f);d.has(f)||(d.add(f),f.then(g,g))})}}function fs(i,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var g=d[f];try{var v=i,S=a,P=S;e:for(;P!==null;){switch(P.tag){case 5:mt=P.stateNode,hs=!1;break e;case 3:mt=P.stateNode.containerInfo,hs=!0;break e;case 4:mt=P.stateNode.containerInfo,hs=!0;break e}P=P.return}if(mt===null)throw Error(n(160));Cf(v,S,g),mt=null,hs=!1;var I=g.alternate;I!==null&&(I.return=null),g.return=null}catch(X){Je(g,a,X)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Rf(a,i),a=a.sibling}function Rf(i,a){var d=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(fs(a,i),Ss(i),f&4){try{_r(3,i,i.return),al(3,i)}catch(be){Je(i,i.return,be)}try{_r(5,i,i.return)}catch(be){Je(i,i.return,be)}}break;case 1:fs(a,i),Ss(i),f&512&&d!==null&&Ai(d,d.return);break;case 5:if(fs(a,i),Ss(i),f&512&&d!==null&&Ai(d,d.return),i.flags&32){var g=i.stateNode;try{bs(g,"")}catch(be){Je(i,i.return,be)}}if(f&4&&(g=i.stateNode,g!=null)){var v=i.memoizedProps,S=d!==null?d.memoizedProps:v,P=i.type,I=i.updateQueue;if(i.updateQueue=null,I!==null)try{P==="input"&&v.type==="radio"&&v.name!=null&&Xs(g,v),hi(P,S);var X=hi(P,v);for(S=0;S<I.length;S+=2){var ie=I[S],le=I[S+1];ie==="style"?Dn(g,le):ie==="dangerouslySetInnerHTML"?ls(g,le):ie==="children"?bs(g,le):T(g,ie,le,X)}switch(P){case"input":Sn(g,v);break;case"textarea":Rn(g,v);break;case"select":var ne=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var me=v.value;me!=null?as(g,!!v.multiple,me,!1):ne!==!!v.multiple&&(v.defaultValue!=null?as(g,!!v.multiple,v.defaultValue,!0):as(g,!!v.multiple,v.multiple?[]:"",!1))}g[pr]=v}catch(be){Je(i,i.return,be)}}break;case 6:if(fs(a,i),Ss(i),f&4){if(i.stateNode===null)throw Error(n(162));g=i.stateNode,v=i.memoizedProps;try{g.nodeValue=v}catch(be){Je(i,i.return,be)}}break;case 3:if(fs(a,i),Ss(i),f&4&&d!==null&&d.memoizedState.isDehydrated)try{nr(a.containerInfo)}catch(be){Je(i,i.return,be)}break;case 4:fs(a,i),Ss(i);break;case 13:fs(a,i),Ss(i),g=i.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||($c=Ze())),f&4&&Ef(i);break;case 22:if(ie=d!==null&&d.memoizedState!==null,i.mode&1?(jt=(X=jt)||ie,fs(a,i),jt=X):fs(a,i),Ss(i),f&8192){if(X=i.memoizedState!==null,(i.stateNode.isHidden=X)&&!ie&&(i.mode&1)!==0)for(xe=i,ie=i.child;ie!==null;){for(le=xe=ie;xe!==null;){switch(ne=xe,me=ne.child,ne.tag){case 0:case 11:case 14:case 15:_r(4,ne,ne.return);break;case 1:Ai(ne,ne.return);var ye=ne.stateNode;if(typeof ye.componentWillUnmount=="function"){f=ne,d=ne.return;try{a=f,ye.props=a.memoizedProps,ye.state=a.memoizedState,ye.componentWillUnmount()}catch(be){Je(f,d,be)}}break;case 5:Ai(ne,ne.return);break;case 22:if(ne.memoizedState!==null){Af(le);continue}}me!==null?(me.return=ne,xe=me):Af(le)}ie=ie.sibling}e:for(ie=null,le=i;;){if(le.tag===5){if(ie===null){ie=le;try{g=le.stateNode,X?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(P=le.stateNode,I=le.memoizedProps.style,S=I!=null&&I.hasOwnProperty("display")?I.display:null,P.style.display=Dt("display",S))}catch(be){Je(i,i.return,be)}}}else if(le.tag===6){if(ie===null)try{le.stateNode.nodeValue=X?"":le.memoizedProps}catch(be){Je(i,i.return,be)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===i)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===i)break e;for(;le.sibling===null;){if(le.return===null||le.return===i)break e;ie===le&&(ie=null),le=le.return}ie===le&&(ie=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:fs(a,i),Ss(i),f&4&&Ef(i);break;case 21:break;default:fs(a,i),Ss(i)}}function Ss(i){var a=i.flags;if(a&2){try{e:{for(var d=i.return;d!==null;){if(_f(d)){var f=d;break e}d=d.return}throw Error(n(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(bs(g,""),f.flags&=-33);var v=Sf(i);zc(i,v,g);break;case 3:case 4:var S=f.stateNode.containerInfo,P=Sf(i);Ic(i,P,S);break;default:throw Error(n(161))}}catch(I){Je(i,i.return,I)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function xy(i,a,d){xe=i,Df(i)}function Df(i,a,d){for(var f=(i.mode&1)!==0;xe!==null;){var g=xe,v=g.child;if(g.tag===22&&f){var S=g.memoizedState!==null||rl;if(!S){var P=g.alternate,I=P!==null&&P.memoizedState!==null||jt;P=rl;var X=jt;if(rl=S,(jt=I)&&!X)for(xe=g;xe!==null;)S=xe,I=S.child,S.tag===22&&S.memoizedState!==null?Tf(g):I!==null?(I.return=S,xe=I):Tf(g);for(;v!==null;)xe=v,Df(v),v=v.sibling;xe=g,rl=P,jt=X}Pf(i)}else(g.subtreeFlags&8772)!==0&&v!==null?(v.return=g,xe=v):Pf(i)}}function Pf(i){for(;xe!==null;){var a=xe;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:jt||al(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!jt)if(d===null)f.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:us(a.type,d.memoizedProps);f.componentDidUpdate(g,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=a.updateQueue;v!==null&&Ph(a,v,f);break;case 3:var S=a.updateQueue;if(S!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}Ph(a,S,d)}break;case 5:var P=a.stateNode;if(d===null&&a.flags&4){d=P;var I=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&d.focus();break;case"img":I.src&&(d.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var X=a.alternate;if(X!==null){var ie=X.memoizedState;if(ie!==null){var le=ie.dehydrated;le!==null&&nr(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}jt||a.flags&512&&Oc(a)}catch(ne){Je(a,a.return,ne)}}if(a===i){xe=null;break}if(d=a.sibling,d!==null){d.return=a.return,xe=d;break}xe=a.return}}function Af(i){for(;xe!==null;){var a=xe;if(a===i){xe=null;break}var d=a.sibling;if(d!==null){d.return=a.return,xe=d;break}xe=a.return}}function Tf(i){for(;xe!==null;){var a=xe;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{al(4,a)}catch(I){Je(a,d,I)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var g=a.return;try{f.componentDidMount()}catch(I){Je(a,g,I)}}var v=a.return;try{Oc(a)}catch(I){Je(a,v,I)}break;case 5:var S=a.return;try{Oc(a)}catch(I){Je(a,S,I)}}}catch(I){Je(a,a.return,I)}if(a===i){xe=null;break}var P=a.sibling;if(P!==null){P.return=a.return,xe=P;break}xe=a.return}}var vy=Math.ceil,ll=W.ReactCurrentDispatcher,Fc=W.ReactCurrentOwner,Zt=W.ReactCurrentBatchConfig,Te=0,ht=null,rt=null,gt=0,Vt=0,Ti=rn(0),ct=0,Sr=null,Bn=0,ol=0,Bc=0,Cr=null,Mt=null,$c=0,Mi=1/0,Bs=null,cl=!1,Uc=null,un=null,dl=!1,hn=null,ul=0,Er=0,Wc=null,hl=-1,fl=0;function Rt(){return(Te&6)!==0?Ze():hl!==-1?hl:hl=Ze()}function fn(i){return(i.mode&1)===0?1:(Te&2)!==0&&gt!==0?gt&-gt:ty.transition!==null?(fl===0&&(fl=_u()),fl):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Mu(i.type)),i)}function ps(i,a,d,f){if(50<Er)throw Er=0,Wc=null,Error(n(185));Ji(i,d,f),((Te&2)===0||i!==ht)&&(i===ht&&((Te&2)===0&&(ol|=d),ct===4&&pn(i,gt)),Lt(i,f),d===1&&Te===0&&(a.mode&1)===0&&(Mi=Ze()+500,$a&&ln()))}function Lt(i,a){var d=i.callbackNode;tv(i,a);var f=Na(i,i===ht?gt:0);if(f===0)d!==null&&Nu(d),i.callbackNode=null,i.callbackPriority=0;else if(a=f&-f,i.callbackPriority!==a){if(d!=null&&Nu(d),a===1)i.tag===0?ey(Lf.bind(null,i)):yh(Lf.bind(null,i)),Xv(function(){(Te&6)===0&&ln()}),d=null;else{switch(Su(f)){case 1:d=No;break;case 4:d=wu;break;case 16:d=va;break;case 536870912:d=ku;break;default:d=va}d=Wf(d,Mf.bind(null,i))}i.callbackPriority=a,i.callbackNode=d}}function Mf(i,a){if(hl=-1,fl=0,(Te&6)!==0)throw Error(n(327));var d=i.callbackNode;if(Li()&&i.callbackNode!==d)return null;var f=Na(i,i===ht?gt:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||a)a=pl(i,f);else{a=f;var g=Te;Te|=2;var v=If();(ht!==i||gt!==a)&&(Bs=null,Mi=Ze()+500,Un(i,a));do try{jy();break}catch(P){Of(i,P)}while(!0);lc(),ll.current=v,Te=g,rt!==null?a=0:(ht=null,gt=0,a=ct)}if(a!==0){if(a===2&&(g=wo(i),g!==0&&(f=g,a=Hc(i,g))),a===1)throw d=Sr,Un(i,0),pn(i,f),Lt(i,Ze()),d;if(a===6)pn(i,f);else{if(g=i.current.alternate,(f&30)===0&&!yy(g)&&(a=pl(i,f),a===2&&(v=wo(i),v!==0&&(f=v,a=Hc(i,v))),a===1))throw d=Sr,Un(i,0),pn(i,f),Lt(i,Ze()),d;switch(i.finishedWork=g,i.finishedLanes=f,a){case 0:case 1:throw Error(n(345));case 2:Wn(i,Mt,Bs);break;case 3:if(pn(i,f),(f&130023424)===f&&(a=$c+500-Ze(),10<a)){if(Na(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Rt(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Xo(Wn.bind(null,i,Mt,Bs),a);break}Wn(i,Mt,Bs);break;case 4:if(pn(i,f),(f&4194240)===f)break;for(a=i.eventTimes,g=-1;0<f;){var S=31-os(f);v=1<<S,S=a[S],S>g&&(g=S),f&=~v}if(f=g,f=Ze()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*vy(f/1960))-f,10<f){i.timeoutHandle=Xo(Wn.bind(null,i,Mt,Bs),f);break}Wn(i,Mt,Bs);break;case 5:Wn(i,Mt,Bs);break;default:throw Error(n(329))}}}return Lt(i,Ze()),i.callbackNode===d?Mf.bind(null,i):null}function Hc(i,a){var d=Cr;return i.current.memoizedState.isDehydrated&&(Un(i,a).flags|=256),i=pl(i,a),i!==2&&(a=Mt,Mt=d,a!==null&&Vc(a)),i}function Vc(i){Mt===null?Mt=i:Mt.push.apply(Mt,i)}function yy(i){for(var a=i;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var g=d[f],v=g.getSnapshot;g=g.value;try{if(!cs(v(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function pn(i,a){for(a&=~Bc,a&=~ol,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var d=31-os(a),f=1<<d;i[d]=-1,a&=~f}}function Lf(i){if((Te&6)!==0)throw Error(n(327));Li();var a=Na(i,0);if((a&1)===0)return Lt(i,Ze()),null;var d=pl(i,a);if(i.tag!==0&&d===2){var f=wo(i);f!==0&&(a=f,d=Hc(i,f))}if(d===1)throw d=Sr,Un(i,0),pn(i,a),Lt(i,Ze()),d;if(d===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Wn(i,Mt,Bs),Lt(i,Ze()),null}function qc(i,a){var d=Te;Te|=1;try{return i(a)}finally{Te=d,Te===0&&(Mi=Ze()+500,$a&&ln())}}function $n(i){hn!==null&&hn.tag===0&&(Te&6)===0&&Li();var a=Te;Te|=1;var d=Zt.transition,f=ze;try{if(Zt.transition=null,ze=1,i)return i()}finally{ze=f,Zt.transition=d,Te=a,(Te&6)===0&&ln()}}function Yc(){Vt=Ti.current,He(Ti)}function Un(i,a){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,Kv(d)),rt!==null)for(d=rt.return;d!==null;){var f=d;switch(sc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Fa();break;case 3:Di(),He(Pt),He(vt),mc();break;case 5:fc(f);break;case 4:Di();break;case 13:He(Qe);break;case 19:He(Qe);break;case 10:oc(f.type._context);break;case 22:case 23:Yc()}d=d.return}if(ht=i,rt=i=mn(i.current,null),gt=Vt=a,ct=0,Sr=null,Bc=ol=Bn=0,Mt=Cr=null,In!==null){for(a=0;a<In.length;a++)if(d=In[a],f=d.interleaved,f!==null){d.interleaved=null;var g=f.next,v=d.pending;if(v!==null){var S=v.next;v.next=g,f.next=S}d.pending=f}In=null}return i}function Of(i,a){do{var d=rt;try{if(lc(),Ga.current=tl,Ja){for(var f=Ke.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Ja=!1}if(Fn=0,ut=ot=Ke=null,br=!1,jr=0,Fc.current=null,d===null||d.return===null){ct=1,Sr=a,rt=null;break}e:{var v=i,S=d.return,P=d,I=a;if(a=gt,P.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var X=I,ie=P,le=ie.tag;if((ie.mode&1)===0&&(le===0||le===11||le===15)){var ne=ie.alternate;ne?(ie.updateQueue=ne.updateQueue,ie.memoizedState=ne.memoizedState,ie.lanes=ne.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var me=lf(S);if(me!==null){me.flags&=-257,of(me,S,P,v,a),me.mode&1&&af(v,X,a),a=me,I=X;var ye=a.updateQueue;if(ye===null){var be=new Set;be.add(I),a.updateQueue=be}else ye.add(I);break e}else{if((a&1)===0){af(v,X,a),Qc();break e}I=Error(n(426))}}else if(qe&&P.mode&1){var et=lf(S);if(et!==null){(et.flags&65536)===0&&(et.flags|=256),of(et,S,P,v,a),rc(Pi(I,P));break e}}v=I=Pi(I,P),ct!==4&&(ct=2),Cr===null?Cr=[v]:Cr.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,a&=-a,v.lanes|=a;var Y=nf(v,I,a);Dh(v,Y);break e;case 1:P=I;var B=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(un===null||!un.has(Q)))){v.flags|=65536,a&=-a,v.lanes|=a;var ce=rf(v,P,a);Dh(v,ce);break e}}v=v.return}while(v!==null)}Ff(d)}catch(Ne){a=Ne,rt===d&&d!==null&&(rt=d=d.return);continue}break}while(!0)}function If(){var i=ll.current;return ll.current=tl,i===null?tl:i}function Qc(){(ct===0||ct===3||ct===2)&&(ct=4),ht===null||(Bn&268435455)===0&&(ol&268435455)===0||pn(ht,gt)}function pl(i,a){var d=Te;Te|=2;var f=If();(ht!==i||gt!==a)&&(Bs=null,Un(i,a));do try{by();break}catch(g){Of(i,g)}while(!0);if(lc(),Te=d,ll.current=f,rt!==null)throw Error(n(261));return ht=null,gt=0,ct}function by(){for(;rt!==null;)zf(rt)}function jy(){for(;rt!==null&&!qx();)zf(rt)}function zf(i){var a=Uf(i.alternate,i,Vt);i.memoizedProps=i.pendingProps,a===null?Ff(i):rt=a,Fc.current=null}function Ff(i){var a=i;do{var d=a.alternate;if(i=a.return,(a.flags&32768)===0){if(d=fy(d,a,Vt),d!==null){rt=d;return}}else{if(d=py(d,a),d!==null){d.flags&=32767,rt=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ct=6,rt=null;return}}if(a=a.sibling,a!==null){rt=a;return}rt=a=i}while(a!==null);ct===0&&(ct=5)}function Wn(i,a,d){var f=ze,g=Zt.transition;try{Zt.transition=null,ze=1,Ny(i,a,d,f)}finally{Zt.transition=g,ze=f}return null}function Ny(i,a,d,f){do Li();while(hn!==null);if((Te&6)!==0)throw Error(n(327));d=i.finishedWork;var g=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var v=d.lanes|d.childLanes;if(sv(i,v),i===ht&&(rt=ht=null,gt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||dl||(dl=!0,Wf(va,function(){return Li(),null})),v=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||v){v=Zt.transition,Zt.transition=null;var S=ze;ze=1;var P=Te;Te|=4,Fc.current=null,gy(i,d),Rf(d,i),Uv(Qo),_a=!!Yo,Qo=Yo=null,i.current=d,xy(d),Yx(),Te=P,ze=S,Zt.transition=v}else i.current=d;if(dl&&(dl=!1,hn=i,ul=g),v=i.pendingLanes,v===0&&(un=null),Xx(d.stateNode),Lt(i,Ze()),a!==null)for(f=i.onRecoverableError,d=0;d<a.length;d++)g=a[d],f(g.value,{componentStack:g.stack,digest:g.digest});if(cl)throw cl=!1,i=Uc,Uc=null,i;return(ul&1)!==0&&i.tag!==0&&Li(),v=i.pendingLanes,(v&1)!==0?i===Wc?Er++:(Er=0,Wc=i):Er=0,ln(),null}function Li(){if(hn!==null){var i=Su(ul),a=Zt.transition,d=ze;try{if(Zt.transition=null,ze=16>i?16:i,hn===null)var f=!1;else{if(i=hn,hn=null,ul=0,(Te&6)!==0)throw Error(n(331));var g=Te;for(Te|=4,xe=i.current;xe!==null;){var v=xe,S=v.child;if((xe.flags&16)!==0){var P=v.deletions;if(P!==null){for(var I=0;I<P.length;I++){var X=P[I];for(xe=X;xe!==null;){var ie=xe;switch(ie.tag){case 0:case 11:case 15:_r(8,ie,v)}var le=ie.child;if(le!==null)le.return=ie,xe=le;else for(;xe!==null;){ie=xe;var ne=ie.sibling,me=ie.return;if(kf(ie),ie===X){xe=null;break}if(ne!==null){ne.return=me,xe=ne;break}xe=me}}}var ye=v.alternate;if(ye!==null){var be=ye.child;if(be!==null){ye.child=null;do{var et=be.sibling;be.sibling=null,be=et}while(be!==null)}}xe=v}}if((v.subtreeFlags&2064)!==0&&S!==null)S.return=v,xe=S;else e:for(;xe!==null;){if(v=xe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:_r(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,xe=Y;break e}xe=v.return}}var B=i.current;for(xe=B;xe!==null;){S=xe;var Q=S.child;if((S.subtreeFlags&2064)!==0&&Q!==null)Q.return=S,xe=Q;else e:for(S=B;xe!==null;){if(P=xe,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:al(9,P)}}catch(Ne){Je(P,P.return,Ne)}if(P===S){xe=null;break e}var ce=P.sibling;if(ce!==null){ce.return=P.return,xe=ce;break e}xe=P.return}}if(Te=g,ln(),Ns&&typeof Ns.onPostCommitFiberRoot=="function")try{Ns.onPostCommitFiberRoot(ya,i)}catch{}f=!0}return f}finally{ze=d,Zt.transition=a}}return!1}function Bf(i,a,d){a=Pi(d,a),a=nf(i,a,1),i=cn(i,a,1),a=Rt(),i!==null&&(Ji(i,1,a),Lt(i,a))}function Je(i,a,d){if(i.tag===3)Bf(i,i,d);else for(;a!==null;){if(a.tag===3){Bf(a,i,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(un===null||!un.has(f))){i=Pi(d,i),i=rf(a,i,1),a=cn(a,i,1),i=Rt(),a!==null&&(Ji(a,1,i),Lt(a,i));break}}a=a.return}}function wy(i,a,d){var f=i.pingCache;f!==null&&f.delete(a),a=Rt(),i.pingedLanes|=i.suspendedLanes&d,ht===i&&(gt&d)===d&&(ct===4||ct===3&&(gt&130023424)===gt&&500>Ze()-$c?Un(i,0):Bc|=d),Lt(i,a)}function $f(i,a){a===0&&((i.mode&1)===0?a=1:(a=ja,ja<<=1,(ja&130023424)===0&&(ja=4194304)));var d=Rt();i=Is(i,a),i!==null&&(Ji(i,a,d),Lt(i,d))}function ky(i){var a=i.memoizedState,d=0;a!==null&&(d=a.retryLane),$f(i,d)}function _y(i,a){var d=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(d=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(a),$f(i,d)}var Uf;Uf=function(i,a,d){if(i!==null)if(i.memoizedProps!==a.pendingProps||Pt.current)Tt=!0;else{if((i.lanes&d)===0&&(a.flags&128)===0)return Tt=!1,hy(i,a,d);Tt=(i.flags&131072)!==0}else Tt=!1,qe&&(a.flags&1048576)!==0&&bh(a,Wa,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;il(i,a),i=a.pendingProps;var g=wi(a,vt.current);Ri(a,d),g=vc(null,a,f,i,g,d);var v=yc();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,At(f)?(v=!0,Ba(a)):v=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,uc(a),g.updater=sl,a.stateNode=g,g._reactInternals=a,_c(a,f,i,d),a=Rc(null,a,f,!0,v,d)):(a.tag=0,qe&&v&&tc(a),Et(null,a,g,d),a=a.child),a;case 16:f=a.elementType;e:{switch(il(i,a),i=a.pendingProps,g=f._init,f=g(f._payload),a.type=f,g=a.tag=Cy(f),i=us(f,i),g){case 0:a=Ec(null,a,f,i,d);break e;case 1:a=pf(null,a,f,i,d);break e;case 11:a=cf(null,a,f,i,d);break e;case 14:a=df(null,a,f,us(f.type,i),d);break e}throw Error(n(306,f,""))}return a;case 0:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:us(f,g),Ec(i,a,f,g,d);case 1:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:us(f,g),pf(i,a,f,g,d);case 3:e:{if(mf(a),i===null)throw Error(n(387));f=a.pendingProps,v=a.memoizedState,g=v.element,Rh(i,a),Ka(a,f,null,d);var S=a.memoizedState;if(f=S.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){g=Pi(Error(n(423)),a),a=gf(i,a,f,d,g);break e}else if(f!==g){g=Pi(Error(n(424)),a),a=gf(i,a,f,d,g);break e}else for(Ht=nn(a.stateNode.containerInfo.firstChild),Wt=a,qe=!0,ds=null,d=Ch(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Si(),f===g){a=Fs(i,a,d);break e}Et(i,a,f,d)}a=a.child}return a;case 5:return Ah(a),i===null&&ic(a),f=a.type,g=a.pendingProps,v=i!==null?i.memoizedProps:null,S=g.children,Ko(f,g)?S=null:v!==null&&Ko(f,v)&&(a.flags|=32),ff(i,a),Et(i,a,S,d),a.child;case 6:return i===null&&ic(a),null;case 13:return xf(i,a,d);case 4:return hc(a,a.stateNode.containerInfo),f=a.pendingProps,i===null?a.child=Ci(a,null,f,d):Et(i,a,f,d),a.child;case 11:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:us(f,g),cf(i,a,f,g,d);case 7:return Et(i,a,a.pendingProps,d),a.child;case 8:return Et(i,a,a.pendingProps.children,d),a.child;case 12:return Et(i,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,g=a.pendingProps,v=a.memoizedProps,S=g.value,$e(qa,f._currentValue),f._currentValue=S,v!==null)if(cs(v.value,S)){if(v.children===g.children&&!Pt.current){a=Fs(i,a,d);break e}}else for(v=a.child,v!==null&&(v.return=a);v!==null;){var P=v.dependencies;if(P!==null){S=v.child;for(var I=P.firstContext;I!==null;){if(I.context===f){if(v.tag===1){I=zs(-1,d&-d),I.tag=2;var X=v.updateQueue;if(X!==null){X=X.shared;var ie=X.pending;ie===null?I.next=I:(I.next=ie.next,ie.next=I),X.pending=I}}v.lanes|=d,I=v.alternate,I!==null&&(I.lanes|=d),cc(v.return,d,a),P.lanes|=d;break}I=I.next}}else if(v.tag===10)S=v.type===a.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(n(341));S.lanes|=d,P=S.alternate,P!==null&&(P.lanes|=d),cc(S,d,a),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===a){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}Et(i,a,g.children,d),a=a.child}return a;case 9:return g=a.type,f=a.pendingProps.children,Ri(a,d),g=Gt(g),f=f(g),a.flags|=1,Et(i,a,f,d),a.child;case 14:return f=a.type,g=us(f,a.pendingProps),g=us(f.type,g),df(i,a,f,g,d);case 15:return uf(i,a,a.type,a.pendingProps,d);case 17:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:us(f,g),il(i,a),a.tag=1,At(f)?(i=!0,Ba(a)):i=!1,Ri(a,d),tf(a,f,g),_c(a,f,g,d),Rc(null,a,f,!0,i,d);case 19:return yf(i,a,d);case 22:return hf(i,a,d)}throw Error(n(156,a.tag))};function Wf(i,a){return ju(i,a)}function Sy(i,a,d,f){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function es(i,a,d,f){return new Sy(i,a,d,f)}function Kc(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Cy(i){if(typeof i=="function")return Kc(i)?1:0;if(i!=null){if(i=i.$$typeof,i===F)return 11;if(i===J)return 14}return 2}function mn(i,a){var d=i.alternate;return d===null?(d=es(i.tag,a,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=a,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,a=i.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function ml(i,a,d,f,g,v){var S=2;if(f=i,typeof i=="function")Kc(i)&&(S=1);else if(typeof i=="string")S=5;else e:switch(i){case M:return Hn(d.children,g,v,a);case R:S=8,g|=8;break;case A:return i=es(12,d,a,g|2),i.elementType=A,i.lanes=v,i;case U:return i=es(13,d,a,g),i.elementType=U,i.lanes=v,i;case re:return i=es(19,d,a,g),i.elementType=re,i.lanes=v,i;case z:return gl(d,g,v,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case K:S=10;break e;case V:S=9;break e;case F:S=11;break e;case J:S=14;break e;case k:S=16,f=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return a=es(S,d,a,g),a.elementType=i,a.type=f,a.lanes=v,a}function Hn(i,a,d,f){return i=es(7,i,f,a),i.lanes=d,i}function gl(i,a,d,f){return i=es(22,i,f,a),i.elementType=z,i.lanes=d,i.stateNode={isHidden:!1},i}function Xc(i,a,d){return i=es(6,i,null,a),i.lanes=d,i}function Gc(i,a,d){return a=es(4,i.children!==null?i.children:[],i.key,a),a.lanes=d,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function Ey(i,a,d,f,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Jc(i,a,d,f,g,v,S,P,I){return i=new Ey(i,a,d,P,I),a===1?(a=1,v===!0&&(a|=8)):a=0,v=es(3,null,null,a),i.current=v,v.stateNode=i,v.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(v),i}function Ry(i,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:f==null?null:""+f,children:i,containerInfo:a,implementation:d}}function Hf(i){if(!i)return an;i=i._reactInternals;e:{if(An(i)!==i||i.tag!==1)throw Error(n(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(At(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(i.tag===1){var d=i.type;if(At(d))return xh(i,d,a)}return a}function Vf(i,a,d,f,g,v,S,P,I){return i=Jc(d,f,!0,i,g,v,S,P,I),i.context=Hf(null),d=i.current,f=Rt(),g=fn(d),v=zs(f,g),v.callback=a??null,cn(d,v,g),i.current.lanes=g,Ji(i,g,f),Lt(i,f),i}function xl(i,a,d,f){var g=a.current,v=Rt(),S=fn(g);return d=Hf(d),a.context===null?a.context=d:a.pendingContext=d,a=zs(v,S),a.payload={element:i},f=f===void 0?null:f,f!==null&&(a.callback=f),i=cn(g,a,S),i!==null&&(ps(i,g,S,v),Qa(i,g,S)),S}function vl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function qf(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<a?d:a}}function Zc(i,a){qf(i,a),(i=i.alternate)&&qf(i,a)}function Dy(){return null}var Yf=typeof reportError=="function"?reportError:function(i){console.error(i)};function ed(i){this._internalRoot=i}yl.prototype.render=ed.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(n(409));xl(i,a,null,null)},yl.prototype.unmount=ed.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;$n(function(){xl(null,i,null,null)}),a[Ts]=null}};function yl(i){this._internalRoot=i}yl.prototype.unstable_scheduleHydration=function(i){if(i){var a=Ru();i={blockedOn:null,target:i,priority:a};for(var d=0;d<en.length&&a!==0&&a<en[d].priority;d++);en.splice(d,0,i),d===0&&Au(i)}};function td(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Py(i,a,d,f,g){if(g){if(typeof f=="function"){var v=f;f=function(){var X=vl(S);v.call(X)}}var S=Vf(a,f,i,0,null,!1,!1,"",Qf);return i._reactRootContainer=S,i[Ts]=S.current,hr(i.nodeType===8?i.parentNode:i),$n(),S}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var P=f;f=function(){var X=vl(I);P.call(X)}}var I=Jc(i,0,!1,null,null,!1,!1,"",Qf);return i._reactRootContainer=I,i[Ts]=I.current,hr(i.nodeType===8?i.parentNode:i),$n(function(){xl(a,I,d,f)}),I}function jl(i,a,d,f,g){var v=d._reactRootContainer;if(v){var S=v;if(typeof g=="function"){var P=g;g=function(){var I=vl(S);P.call(I)}}xl(a,S,i,g)}else S=Py(d,a,i,g,f);return vl(S)}Cu=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var d=Gi(a.pendingLanes);d!==0&&(_o(a,d|1),Lt(a,Ze()),(Te&6)===0&&(Mi=Ze()+500,ln()))}break;case 13:$n(function(){var f=Is(i,1);if(f!==null){var g=Rt();ps(f,i,1,g)}}),Zc(i,1)}},So=function(i){if(i.tag===13){var a=Is(i,134217728);if(a!==null){var d=Rt();ps(a,i,134217728,d)}Zc(i,134217728)}},Eu=function(i){if(i.tag===13){var a=fn(i),d=Is(i,a);if(d!==null){var f=Rt();ps(d,i,a,f)}Zc(i,a)}},Ru=function(){return ze},Du=function(i,a){var d=ze;try{return ze=i,a()}finally{ze=d}},ge=function(i,a,d){switch(a){case"input":if(Sn(i,d),a=d.name,d.type==="radio"&&a!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==i&&f.form===i.form){var g=za(f);if(!g)throw Error(n(90));pt(f),Sn(f,g)}}}break;case"textarea":Rn(i,d);break;case"select":a=d.value,a!=null&&as(i,!!d.multiple,a,!1)}},As=qc,$t=$n;var Ay={usingClientEntryPoint:!1,Events:[mr,ji,za,Yi,Pn,qc]},Rr={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ty={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=yu(i),i===null?null:i.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{ya=Nl.inject(Ty),Ns=Nl}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay,Ot.createPortal=function(i,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(a))throw Error(n(200));return Ry(i,a,null,d)},Ot.createRoot=function(i,a){if(!td(i))throw Error(n(299));var d=!1,f="",g=Yf;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Jc(i,1,!1,null,null,d,!1,f,g),i[Ts]=a.current,hr(i.nodeType===8?i.parentNode:i),new ed(a)},Ot.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=yu(a),i=i===null?null:i.stateNode,i},Ot.flushSync=function(i){return $n(i)},Ot.hydrate=function(i,a,d){if(!bl(a))throw Error(n(200));return jl(null,i,a,!0,d)},Ot.hydrateRoot=function(i,a,d){if(!td(i))throw Error(n(405));var f=d!=null&&d.hydratedSources||null,g=!1,v="",S=Yf;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(v=d.identifierPrefix),d.onRecoverableError!==void 0&&(S=d.onRecoverableError)),a=Vf(a,null,i,1,d??null,g,!1,v,S),i[Ts]=a.current,hr(i),f)for(i=0;i<f.length;i++)d=f[i],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new yl(a)},Ot.render=function(i,a,d){if(!bl(a))throw Error(n(200));return jl(null,i,a,!1,d)},Ot.unmountComponentAtNode=function(i){if(!bl(i))throw Error(n(40));return i._reactRootContainer?($n(function(){jl(null,null,i,!1,function(){i._reactRootContainer=null,i[Ts]=null})}),!0):!1},Ot.unstable_batchedUpdates=qc,Ot.unstable_renderSubtreeIntoContainer=function(i,a,d,f){if(!bl(d))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return jl(i,a,d,!1,f)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var sp;function ig(){if(sp)return id.exports;sp=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),id.exports=Hy(),id.exports}var np;function Vy(){if(np)return wl;np=1;var e=ig();return wl.createRoot=e.createRoot,wl.hydrateRoot=e.hydrateRoot,wl}var qy=Vy();const Yy=sg(qy);ig();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vn||(vn={}));const ip="popstate";function Qy(e){e===void 0&&(e={});function t(r,l){let{pathname:o,search:c,hash:u}=r.location;return Ed("",{pathname:o,search:c,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Kl(l)}return Xy(t,n,null,e)}function lt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ky(){return Math.random().toString(36).substr(2,8)}function rp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ed(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hi(t):t,{state:n,key:t&&t.key||r||Ky()})}function Kl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xy(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,c=l.history,u=vn.Pop,h=null,p=m();p==null&&(p=0,c.replaceState(Xr({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function x(){u=vn.Pop;let y=m(),C=y==null?null:y-p;p=y,h&&h({action:u,location:j.location,delta:C})}function N(y,C){u=vn.Push;let D=Ed(j.location,y,C);p=m()+1;let T=rp(D,p),W=j.createHref(D);try{c.pushState(T,"",W)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(W)}o&&h&&h({action:u,location:j.location,delta:1})}function w(y,C){u=vn.Replace;let D=Ed(j.location,y,C);p=m();let T=rp(D,p),W=j.createHref(D);c.replaceState(T,"",W),o&&h&&h({action:u,location:j.location,delta:0})}function b(y){let C=l.location.origin!=="null"?l.location.origin:l.location.href,D=typeof y=="string"?y:Kl(y);return D=D.replace(/ $/,"%20"),lt(C,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,C)}let j={get action(){return u},get location(){return e(l,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(ip,x),h=y,()=>{l.removeEventListener(ip,x),h=null}},createHref(y){return t(l,y)},createURL:b,encodeLocation(y){let C=b(y);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:N,replace:w,go(y){return c.go(y)}};return j}var ap;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ap||(ap={}));function Gy(e,t,n){return n===void 0&&(n="/"),Jy(e,t,n)}function Jy(e,t,n,r){let l=typeof t=="string"?Hi(t):t,o=Qd(l.pathname||"/",n);if(o==null)return null;let c=rg(e);Zy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=ub(o);u=ob(c[h],p)}return u}function rg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,c,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};h.relativePath.startsWith("/")&&(lt(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=Nn([r,h.relativePath]),m=n.concat(h);o.children&&o.children.length>0&&(lt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),rg(o.children,t,m,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:ab(p,o.index),routesMeta:m})};return e.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,c);else for(let h of ag(o.path))l(o,c,h)}),t}function ag(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let c=ag(r.join("/")),u=[];return u.push(...c.map(h=>h===""?o:[o,h].join("/"))),l&&u.push(...c),u.map(h=>e.startsWith("/")&&h===""?"/":h)}function Zy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:lb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eb=/^:[\w-]+$/,tb=3,sb=2,nb=1,ib=10,rb=-2,lp=e=>e==="*";function ab(e,t){let n=e.split("/"),r=n.length;return n.some(lp)&&(r+=rb),t&&(r+=sb),n.filter(l=>!lp(l)).reduce((l,o)=>l+(eb.test(o)?tb:o===""?nb:ib),r)}function lb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function ob(e,t,n){let{routesMeta:r}=e,l={},o="/",c=[];for(let u=0;u<r.length;++u){let h=r[u],p=u===r.length-1,m=o==="/"?t:t.slice(o.length)||"/",x=cb({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),N=h.route;if(!x)return null;Object.assign(l,x.params),c.push({params:l,pathname:Nn([o,x.pathname]),pathnameBase:gb(Nn([o,x.pathnameBase])),route:N}),x.pathnameBase!=="/"&&(o=Nn([o,x.pathnameBase]))}return c}function cb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=db(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],c=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((p,m,x)=>{let{paramName:N,isOptional:w}=m;if(N==="*"){let j=u[x]||"";c=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const b=u[x];return w&&!b?p[N]=void 0:p[N]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:e}}function db(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(r.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ub(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const hb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fb=e=>hb.test(e);function pb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?Hi(e):e,o;if(n)if(fb(n))o=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Yd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?o=op(n.substring(1),"/"):o=op(n,t)}else o=t;return{pathname:o,search:xb(r),hash:vb(l)}}function op(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ld(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function lg(e,t){let n=mb(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function og(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=Hi(e):(l=Xr({},e),lt(!l.pathname||!l.pathname.includes("?"),ld("?","pathname","search",l)),lt(!l.pathname||!l.pathname.includes("#"),ld("#","pathname","hash",l)),lt(!l.search||!l.search.includes("#"),ld("#","search","hash",l)));let o=e===""||l.pathname==="",c=o?"/":l.pathname,u;if(c==null)u=n;else{let x=t.length-1;if(!r&&c.startsWith("..")){let N=c.split("/");for(;N[0]==="..";)N.shift(),x-=1;l.pathname=N.join("/")}u=x>=0?t[x]:"/"}let h=pb(l,u),p=c&&c!=="/"&&c.endsWith("/"),m=(o||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),gb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),xb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,vb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function yb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cg=["post","put","patch","delete"];new Set(cg);const bb=["get",...cg];new Set(bb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}const Kd=E.createContext(null),jb=E.createContext(null),ai=E.createContext(null),lo=E.createContext(null),_n=E.createContext({outlet:null,matches:[],isDataRoute:!1}),dg=E.createContext(null);function Nb(e,t){let{relative:n}=t===void 0?{}:t;aa()||lt(!1);let{basename:r,navigator:l}=E.useContext(ai),{hash:o,pathname:c,search:u}=fg(e,{relative:n}),h=c;return r!=="/"&&(h=c==="/"?r:Nn([r,c])),l.createHref({pathname:h,search:u,hash:o})}function aa(){return E.useContext(lo)!=null}function la(){return aa()||lt(!1),E.useContext(lo).location}function ug(e){E.useContext(ai).static||E.useLayoutEffect(e)}function Ks(){let{isDataRoute:e}=E.useContext(_n);return e?Lb():wb()}function wb(){aa()||lt(!1);let e=E.useContext(Kd),{basename:t,future:n,navigator:r}=E.useContext(ai),{matches:l}=E.useContext(_n),{pathname:o}=la(),c=JSON.stringify(lg(l,n.v7_relativeSplatPath)),u=E.useRef(!1);return ug(()=>{u.current=!0}),E.useCallback(function(p,m){if(m===void 0&&(m={}),!u.current)return;if(typeof p=="number"){r.go(p);return}let x=og(p,JSON.parse(c),o,m.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:Nn([t,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[t,r,c,o,e])}function hg(){let{matches:e}=E.useContext(_n),t=e[e.length-1];return t?t.params:{}}function fg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(ai),{matches:l}=E.useContext(_n),{pathname:o}=la(),c=JSON.stringify(lg(l,r.v7_relativeSplatPath));return E.useMemo(()=>og(e,JSON.parse(c),o,n==="path"),[e,c,o,n])}function kb(e,t){return _b(e,t)}function _b(e,t,n,r){aa()||lt(!1);let{navigator:l}=E.useContext(ai),{matches:o}=E.useContext(_n),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=la(),m;if(t){var x;let y=typeof t=="string"?Hi(t):t;h==="/"||(x=y.pathname)!=null&&x.startsWith(h)||lt(!1),m=y}else m=p;let N=m.pathname||"/",w=N;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+N.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=Gy(e,{pathname:w}),j=Db(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:Nn([h,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:Nn([h,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,r);return t&&j?E.createElement(lo.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:vn.Pop}},j):j}function Sb(){let e=Mb(),t=yb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:l},n):null,null)}const Cb=E.createElement(Sb,null);class Eb extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(_n.Provider,{value:this.props.routeContext},E.createElement(dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rb(e){let{routeContext:t,match:n,children:r}=e,l=E.useContext(Kd);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(_n.Provider,{value:t},r)}function Db(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let c=e,u=(l=n)==null?void 0:l.errors;if(u!=null){let m=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);m>=0||lt(!1),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<c.length;m++){let x=c[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=m),x.route.id){let{loaderData:N,errors:w}=n,b=x.route.loader&&N[x.route.id]===void 0&&(!w||w[x.route.id]===void 0);if(x.route.lazy||b){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,x,N)=>{let w,b=!1,j=null,y=null;n&&(w=u&&x.route.id?u[x.route.id]:void 0,j=x.route.errorElement||Cb,h&&(p<0&&N===0?(Ob("route-fallback"),b=!0,y=null):p===N&&(b=!0,y=x.route.hydrateFallbackElement||null)));let C=t.concat(c.slice(0,N+1)),D=()=>{let T;return w?T=j:b?T=y:x.route.Component?T=E.createElement(x.route.Component,null):x.route.element?T=x.route.element:T=m,E.createElement(Rb,{match:x,routeContext:{outlet:m,matches:C,isDataRoute:n!=null},children:T})};return n&&(x.route.ErrorBoundary||x.route.errorElement||N===0)?E.createElement(Eb,{location:n.location,revalidation:n.revalidation,component:j,error:w,children:D(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):D()},null)}var pg=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(pg||{}),mg=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(mg||{});function Pb(e){let t=E.useContext(Kd);return t||lt(!1),t}function Ab(e){let t=E.useContext(jb);return t||lt(!1),t}function Tb(e){let t=E.useContext(_n);return t||lt(!1),t}function gg(e){let t=Tb(),n=t.matches[t.matches.length-1];return n.route.id||lt(!1),n.route.id}function Mb(){var e;let t=E.useContext(dg),n=Ab(),r=gg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Lb(){let{router:e}=Pb(pg.UseNavigateStable),t=gg(mg.UseNavigateStable),n=E.useRef(!1);return ug(()=>{n.current=!0}),E.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Gr({fromRouteId:t},o)))},[e,t])}const cp={};function Ob(e,t,n){cp[e]||(cp[e]=!0)}function Ib(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ye(e){lt(!1)}function zb(e){let{basename:t="/",children:n=null,location:r,navigationType:l=vn.Pop,navigator:o,static:c=!1,future:u}=e;aa()&&lt(!1);let h=t.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:h,navigator:o,static:c,future:Gr({v7_relativeSplatPath:!1},u)}),[h,u,o,c]);typeof r=="string"&&(r=Hi(r));let{pathname:m="/",search:x="",hash:N="",state:w=null,key:b="default"}=r,j=E.useMemo(()=>{let y=Qd(m,h);return y==null?null:{location:{pathname:y,search:x,hash:N,state:w,key:b},navigationType:l}},[h,m,x,N,w,b,l]);return j==null?null:E.createElement(ai.Provider,{value:p},E.createElement(lo.Provider,{children:n,value:j}))}function Fb(e){let{children:t,location:n}=e;return kb(Rd(t),n)}new Promise(()=>{});function Rd(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,l)=>{if(!E.isValidElement(r))return;let o=[...t,l];if(r.type===E.Fragment){n.push.apply(n,Rd(r.props.children,o));return}r.type!==Ye&&lt(!1),!r.props.index||!r.props.children||lt(!1);let c={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Rd(r.props.children,o)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dd.apply(this,arguments)}function Bb(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function $b(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ub(e,t){return e.button===0&&(!t||t==="_self")&&!$b(e)}const Wb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hb="6";try{window.__reactRouterVersion=Hb}catch{}const Vb="startTransition",dp=$y[Vb];function qb(e){let{basename:t,children:n,future:r,window:l}=e,o=E.useRef();o.current==null&&(o.current=Qy({window:l,v5Compat:!0}));let c=o.current,[u,h]=E.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},m=E.useCallback(x=>{p&&dp?dp(()=>h(x)):h(x)},[h,p]);return E.useLayoutEffect(()=>c.listen(m),[c,m]),E.useEffect(()=>Ib(r),[r]),E.createElement(zb,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:c,future:r})}const Yb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=E.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:c,state:u,target:h,to:p,preventScrollReset:m,viewTransition:x}=t,N=Bb(t,Wb),{basename:w}=E.useContext(ai),b,j=!1;if(typeof p=="string"&&Qb.test(p)&&(b=p,Yb))try{let T=new URL(window.location.href),W=p.startsWith("//")?new URL(T.protocol+p):new URL(p),_=Qd(W.pathname,w);W.origin===T.origin&&_!=null?p=_+W.search+W.hash:j=!0}catch{}let y=Nb(p,{relative:l}),C=Kb(p,{replace:c,state:u,target:h,preventScrollReset:m,relative:l,viewTransition:x});function D(T){r&&r(T),T.defaultPrevented||C(T)}return E.createElement("a",Dd({},N,{href:b||y,onClick:j||o?r:D,ref:n,target:h}))});var up;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(up||(up={}));var hp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(hp||(hp={}));function Kb(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:c,viewTransition:u}=t===void 0?{}:t,h=Ks(),p=la(),m=fg(e,{relative:c});return E.useCallback(x=>{if(Ub(x,n)){x.preventDefault();let N=r!==void 0?r:Kl(p)===Kl(m);h(e,{replace:N,state:l,preventScrollReset:o,relative:c,viewTransition:u})}},[p,h,m,r,l,n,e,o,c,u])}const Xb={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",monitor:"系统监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",detail:"详情",falsePositive:"误报",markFalsePositive:"标记为误报",deleteAlert:"删除告警",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",systemProcesses:"进程信息",systemNetwork:"网络连接",systemDlls:"加载的DLL",systemDrivers:"驱动程序",systemUsers:"本地用户",systemRegistry:"注册表持久化",systemTasks:"计划任务",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",importWithAlertBtn:"导入并分析",withAlert:"(含告警分析)",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成",evtx2csvBtn:"导入 EVTX 并转换 CSV",evtx2csvConverting:"正在转换 EVTX 为 CSV...",evtx2csvDone:"转换完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",domainController:"域控专项分析",domainControllerDesc:"分析 Active Directory 安全事件，检测 DCSync、敏感组修改、特权账户操作等",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件",editRule:"编辑规则",ruleEditor:"规则编辑器",thresholds:"阈值配置",patterns:"检测模式",patternsDesc:"触发检测的关键词或模式",addPattern:"添加模式",whitelist:"白名单",whitelistDesc:"不会触发检测的条目",addWhitelist:"添加白名单"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",explanation:"规则解读",recommendation:"处置建议",realCase:"真实案例",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知",detectorConfig:"检测器配置",detectorConfigDesc:"启用或禁用单个检测器。更改将在下次扫描时生效。",editRule:"编辑规则",ruleEditor:"规则编辑器",enabled:"已启用",disabled:"已禁用",registryPaths:"注册表路径",suspiciousIndicators:"可疑指标",indicatorDesc:"在目标中检测到这些关键词将触发告警",addIndicator:"添加指标",whitelistEntries:"白名单条目",whitelistDesc:"这些条目不会触发检测",addWhitelist:"添加白名单"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",system:"系统",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",adminUser:"管理员",standardUser:"标准用户",yes:"是",no:"否",localTime:"本地时间",runtime:"运行时",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",cores:"核心",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未",resources:"资源",systemResources:"系统资源",memory:"内存",freeMemory:"可用内存",time:"时间",timeInfo:"时间信息",systemOnline:"系统在线",processes:"进程",network:"网络",drivers:"驱动",users:"用户",registry:"注册表",tasks:"任务",env:"环境变量",dlls:"动态链接库",process:"进程",protocol:"协议",localAddress:"本地地址",remoteAddress:"远程地址",port:"端口",state:"状态",varName:"变量名",value:"值",type:"类型",dllName:"DLL名称",version:"版本",size:"大小",name:"名称",path:"路径",displayName:"显示名称",description:"描述",status:"状态",fullName:"全名",homeDir:"主目录",enabled:"已启用",disabled:"已禁用",keyPath:"注册表路径",taskName:"任务名称",signed:"已签名",unsigned:"未签名",showUnsignedOnly:"仅显示未签名",pid:"PID",ppid:"PPID",user:"用户",signature:"签名",commandLine:"命令行",noProcessData:"暂无进程数据",noNetworkData:"暂无网络连接数据",noEnvVars:"暂无环境变量",noDllData:"暂无DLL信息",noDriverData:"暂无驱动信息",noUserData:"暂无用户信息",noRegistryData:"暂无注册表持久化键",noTasksData:"暂无计划任务",sid:"SID"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",general:"通用",database:"数据库",apiServer:"API服务器",collection:"采集",advanced:"高级",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存",generalSettings:"通用设置",configureBasic:"配置基本应用设置",logLevelDesc:"日志记录的最低严重级别",exportDirectory:"导出目录",exportDirectoryDesc:"导出文件的默认目录",autoUpdateRules:"自动更新规则",autoUpdateRulesDesc:"自动更新检测规则",databaseSettings:"数据库设置",configureDatabase:"配置数据库存储和保留策略",databasePathDesc:"SQLite数据库文件路径",eventRetentionDesc:"自动删除早于此时间的事件",maxEventsDesc:"最大存储事件数",apiServerSettings:"API服务器设置",configureApiServer:"配置HTTP API服务器",apiHost:"API主机",apiHostDesc:"API服务器绑定地址",apiPort:"API端口",apiPortDesc:"API服务器端口号",enableCors:"启用CORS",enableCorsDesc:"允许跨域请求",collectionSettings:"采集设置",configureCollection:"配置事件采集行为",enableAlertingDesc:"当规则匹配时生成告警",enableLiveCollectionDesc:"持续监控Windows事件日志",maxImportFileSize:"最大导入文件大小 (MB)",maxImportFileSizeDesc:"导入文件的最大大小",advancedSettings:"高级设置",expertConfig:"专家配置选项",warning:"警告",warningDesc:"高级设置可能影响性能和稳定性。仅在您确定时修改。",parserWorkers:"解析器工作线程",parserWorkersDesc:"并行解析工作线程数",memoryLimit:"内存限制 (MB)",memoryLimitDesc:"事件处理的最大内存使用量",saveChanges:"保存更改",saving:"保存中...",resetDefaults:"重置为默认"},logs:{title:"日志查看",refresh:"刷新",totalEntries:"总条目数",currentPage:"当前页",logFiles:"日志文件",filterByLevel:"按级别筛选",all:"全部",current:"当前",viewer:"日志查看器",noLogs:"暂无日志",timestamp:"时间戳",level:"级别",message:"消息",details:"详情",first:"首页",last:"末页",metrics:"性能",startup:"启动",panic:"崩溃"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},monitor:{title:"实时监控",pageDesc:"实时监控系统进程、网络连接和DNS查询",processMonitoring:"进程监控",processMonitoringDesc:"通过WMI监控新进程创建",networkMonitoring:"网络连接监控",networkMonitoringDesc:"轮询活动网络连接",dnsMonitoring:"DNS缓存监控",dnsMonitoringDesc:"轮询DNS缓存解析记录",pollInterval:"轮询间隔 (秒)",enableProcess:"启用进程监控",enableNetwork:"启用网络监控",enableDNS:"启用DNS监控",start:"启动监控",stop:"停止监控",running:"监控中",stopped:"已停止",stats:"监控统计",processCount:"进程事件",networkCount:"网络事件",dnsCount:"DNS事件",alertCount:"告警事件",startTime:"开始时间",events:"监控事件",noEvents:"暂无监控事件",eventType:"类型",severity:"严重级别",timestamp:"时间",details:"详情",process:"进程",network:"网络",dns:"DNS",pid:"进程ID",ppid:"父进程ID",path:"路径",commandLine:"命令行",user:"用户",protocol:"协议",sourceIp:"源IP",sourcePort:"源端口",destIp:"目标IP",destPort:"目标端口",state:"状态",queryName:"查询域名",queryType:"查询类型",results:"结果",ttl:"TTL",clearEvents:"清除事件",exportEvents:"导出事件",aboutMonitor:"关于实时监控",aboutDesc:"实时监控通过WMI和轮询方式监控系统的进程创建、网络连接和DNS查询活动。所有监控功能默认关闭，需要手动启用。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据",apply:"应用",clear:"清除"}},Gb={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",monitor:"Monitor",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings",logs:"Logs"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",detail:"Detail",falsePositive:"False Positive",markFalsePositive:"Mark False Positive",deleteAlert:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",systemProcesses:"Process Info",systemNetwork:"Network Connections",systemDlls:"Loaded DLLs",systemDrivers:"Drivers",systemUsers:"Local Users",systemRegistry:"Registry Persistence",systemTasks:"Scheduled Tasks",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",importWithAlertBtn:"Import & Analyze",withAlert:"(with alert analysis)",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed",evtx2csvBtn:"Import & Convert",evtx2csvConverting:"Converting EVTX to CSV...",evtx2csvDone:"Conversion completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",domainController:"Domain Controller Analyzer",domainControllerDesc:"Analyze Active Directory security events, detect DCSync, sensitive group modifications, privileged account operations",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events",editRule:"Edit Rule",ruleEditor:"Rule Editor",thresholds:"Thresholds",patterns:"Detection Patterns",patternsDesc:"Keywords or patterns that trigger detection",addPattern:"Add Pattern",whitelist:"Whitelist",whitelistDesc:"Entries that will not trigger detection",addWhitelist:"Add Whitelist Entry"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",explanation:"Rule Explanation",recommendation:"Recommendation",realCase:"Real Case",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown",detectorConfig:"Detector Config",detectorConfigDesc:"Enable or disable individual detectors. Changes will take effect on next scan.",editRule:"Edit Rule",ruleEditor:"Rule Editor",enabled:"Enabled",disabled:"Disabled",registryPaths:"Registry Paths",suspiciousIndicators:"Suspicious Indicators",indicatorDesc:"Keywords that trigger detection when found in the target",addIndicator:"Add Indicator",whitelistEntries:"Whitelist Entries",whitelistDesc:"Entries that will not trigger detection",addWhitelist:"Add Whitelist Entry"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",system:"System",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",adminUser:"Administrator",standardUser:"Standard User",yes:"Yes",no:"No",localTime:"Local Time",runtime:"Runtime",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",cores:"Cores",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never",resources:"Resources",systemResources:"System Resources",memory:"Memory",freeMemory:"Free Memory",time:"Time",timeInfo:"Time Information",systemOnline:"System Online",processes:"Processes",network:"Network",drivers:"Drivers",users:"Users",registry:"Registry",tasks:"Tasks",env:"Environment",dlls:"DLLs",process:"Process",protocol:"Protocol",localAddress:"Local Address",remoteAddress:"Remote Address",port:"Port",state:"State",varName:"Variable",value:"Value",type:"Type",dllName:"DLL Name",version:"Version",size:"Size",name:"Name",path:"Path",displayName:"Display Name",description:"Description",status:"Status",fullName:"Full Name",homeDir:"Home Directory",enabled:"Enabled",disabled:"Disabled",keyPath:"Registry Path",taskName:"Task Name",signed:"Signed",unsigned:"Unsigned",showUnsignedOnly:"Show unsigned only",pid:"PID",ppid:"PPID",user:"User",signature:"Signature",commandLine:"Command Line",noProcessData:"No process data available",noNetworkData:"No network connection data",noEnvVars:"No environment variables",noDllData:"No DLL information",noDriverData:"No driver information",noUserData:"No user information",noRegistryData:"No registry persistence keys",noTasksData:"No scheduled tasks",sid:"SID"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",general:"General",database:"Database",apiServer:"API Server",collection:"Collection",advanced:"Advanced",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warning",error:"Error",save:"Save Settings",saved:"Settings saved",generalSettings:"General Settings",configureBasic:"Configure basic application settings",logLevelDesc:"Minimum severity level for logging",exportDirectory:"Export Directory",exportDirectoryDesc:"Default directory for exported files",autoUpdateRules:"Auto Update Rules",autoUpdateRulesDesc:"Automatically update detection rules",databaseSettings:"Database Settings",configureDatabase:"Configure database storage and retention",databasePathDesc:"Path to SQLite database file",eventRetentionDesc:"Automatically delete events older than this",maxEventsDesc:"Maximum number of events to store",apiServerSettings:"API Server Settings",configureApiServer:"Configure the HTTP API server",apiHost:"API Host",apiHostDesc:"Host address to bind the API server",apiPort:"API Port",apiPortDesc:"Port number for the API server",enableCors:"Enable CORS",enableCorsDesc:"Allow cross-origin requests",collectionSettings:"Collection Settings",configureCollection:"Configure event collection behavior",enableAlertingDesc:"Generate alerts when rules match",enableLiveCollectionDesc:"Continuously monitor Windows Event Logs",maxImportFileSize:"Max Import File Size (MB)",maxImportFileSizeDesc:"Maximum size for imported files",advancedSettings:"Advanced Settings",expertConfig:"Expert configuration options",warning:"Warning",warningDesc:"Advanced settings may affect performance and stability. Only modify if you know what you are doing.",parserWorkers:"Parser Workers",parserWorkersDesc:"Number of parallel parsing workers",memoryLimit:"Memory Limit (MB)",memoryLimitDesc:"Maximum memory usage for event processing",saveChanges:"Save Changes",saving:"Saving...",resetDefaults:"Reset to Defaults"},logs:{title:"Log Viewer",refresh:"Refresh",totalEntries:"Total Entries",currentPage:"Current Page",logFiles:"Log Files",filterByLevel:"Filter by Level",all:"All",current:"Current",viewer:"Log Viewer",noLogs:"No logs available",timestamp:"Timestamp",level:"Level",message:"Message",details:"Details",first:"First",last:"Last",metrics:"Metrics",startup:"Startup",panic:"Panic"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},monitor:{title:"Real-time Monitor",pageDesc:"Monitor system processes, network connections, and DNS queries in real-time",processMonitoring:"Process Monitoring",processMonitoringDesc:"Monitor new process creation via WMI",networkMonitoring:"Network Connection Monitoring",networkMonitoringDesc:"Poll active network connections",dnsMonitoring:"DNS Cache Monitoring",dnsMonitoringDesc:"Poll DNS cache resolution records",pollInterval:"Poll Interval (seconds)",enableProcess:"Enable Process Monitoring",enableNetwork:"Enable Network Monitoring",enableDNS:"Enable DNS Monitoring",start:"Start Monitor",stop:"Stop Monitor",running:"Running",stopped:"Stopped",stats:"Monitor Stats",processCount:"Process Events",networkCount:"Network Events",dnsCount:"DNS Events",alertCount:"Alert Events",startTime:"Start Time",events:"Monitor Events",noEvents:"No monitor events",eventType:"Type",severity:"Severity",timestamp:"Time",details:"Details",process:"Process",network:"Network",dns:"DNS",pid:"Process ID",ppid:"Parent Process ID",path:"Path",commandLine:"Command Line",user:"User",protocol:"Protocol",sourceIp:"Source IP",sourcePort:"Source Port",destIp:"Destination IP",destPort:"Destination Port",state:"State",queryName:"Query Name",queryType:"Query Type",results:"Results",ttl:"TTL",clearEvents:"Clear Events",exportEvents:"Export Events",aboutMonitor:"About Real-time Monitor",aboutDesc:"Real-time monitoring uses WMI and polling to monitor system process creation, network connections, and DNS query activities. All monitoring features are disabled by default and must be manually enabled."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data",apply:"Apply",clear:"Clear"}},Jb={zh:Xb,en:Gb},xg=E.createContext(void 0);function Zb(e,t){const n=t.split(".");let r=e;for(const l of n)if(r&&typeof r=="object"&&l in r)r=r[l];else return t;return typeof r=="string"?r:t}function e0({children:e}){const[t,n]=E.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),r=E.useCallback(c=>{n(c),localStorage.setItem("locale",c)},[]),l=E.useCallback(()=>{r(t==="zh"?"en":"zh")},[t,r]),o=E.useCallback((c,u)=>{let h=Zb(Jb[t],c);return u&&Object.entries(u).forEach(([p,m])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(m))}),h},[t]);return s.jsx(xg.Provider,{value:{locale:t,t:o,setLocale:r,toggleLocale:l},children:e})}function nt(){const e=E.useContext(xg);if(!e)throw new Error("useI18n must be used within I18nProvider");return e}function t0(){const{locale:e,toggleLocale:t}=nt();return s.jsx("button",{className:"lang-switcher",onClick:t,children:e==="zh"?"EN":"中"})}function vg(e,t){return function(){return e.apply(t,arguments)}}const{toString:s0}=Object.prototype,{getPrototypeOf:Xd}=Object,{iterator:oo,toStringTag:yg}=Symbol,co=(e=>t=>{const n=s0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ys=e=>(e=e.toLowerCase(),t=>co(t)===e),uo=e=>t=>typeof t===e,{isArray:Vi}=Array,$i=uo("undefined");function oa(e){return e!==null&&!$i(e)&&e.constructor!==null&&!$i(e.constructor)&&Ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bg=ys("ArrayBuffer");function n0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bg(e.buffer),t}const i0=uo("string"),Ft=uo("function"),jg=uo("number"),ca=e=>e!==null&&typeof e=="object",r0=e=>e===!0||e===!1,$l=e=>{if(co(e)!=="object")return!1;const t=Xd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(yg in e)&&!(oo in e)},a0=e=>{if(!ca(e)||oa(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},l0=ys("Date"),o0=ys("File"),c0=e=>!!(e&&typeof e.uri<"u"),d0=e=>e&&typeof e.getParts<"u",u0=ys("Blob"),h0=ys("FileList"),f0=e=>ca(e)&&Ft(e.pipe);function p0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const fp=p0(),pp=typeof fp.FormData<"u"?fp.FormData:void 0,m0=e=>{let t;return e&&(pp&&e instanceof pp||Ft(e.append)&&((t=co(e))==="formdata"||t==="object"&&Ft(e.toString)&&e.toString()==="[object FormData]"))},g0=ys("URLSearchParams"),[x0,v0,y0,b0]=["ReadableStream","Request","Response","Headers"].map(ys),j0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function da(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,l;if(typeof e!="object"&&(e=[e]),Vi(e))for(r=0,l=e.length;r<l;r++)t.call(null,e[r],r,e);else{if(oa(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),c=o.length;let u;for(r=0;r<c;r++)u=o[r],t.call(null,e[u],u,e)}}function Ng(e,t){if(oa(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,l;for(;r-- >0;)if(l=n[r],t===l.toLowerCase())return l;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wg=e=>!$i(e)&&e!==Jn;function Pd(){const{caseless:e,skipUndefined:t}=wg(this)&&this||{},n={},r=(l,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=e&&Ng(n,o)||o;$l(n[c])&&$l(l)?n[c]=Pd(n[c],l):$l(l)?n[c]=Pd({},l):Vi(l)?n[c]=l.slice():(!t||!$i(l))&&(n[c]=l)};for(let l=0,o=arguments.length;l<o;l++)arguments[l]&&da(arguments[l],r);return n}const N0=(e,t,n,{allOwnKeys:r}={})=>(da(t,(l,o)=>{n&&Ft(l)?Object.defineProperty(e,o,{value:vg(l,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),w0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),k0=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_0=(e,t,n,r)=>{let l,o,c;const u={};if(t=t||{},e==null)return t;do{for(l=Object.getOwnPropertyNames(e),o=l.length;o-- >0;)c=l[o],(!r||r(c,e,t))&&!u[c]&&(t[c]=e[c],u[c]=!0);e=n!==!1&&Xd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},S0=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},C0=e=>{if(!e)return null;if(Vi(e))return e;let t=e.length;if(!jg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},E0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Xd(Uint8Array)),R0=(e,t)=>{const r=(e&&e[oo]).call(e);let l;for(;(l=r.next())&&!l.done;){const o=l.value;t.call(e,o[0],o[1])}},D0=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},P0=ys("HTMLFormElement"),A0=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,l){return r.toUpperCase()+l}),mp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),T0=ys("RegExp"),kg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};da(n,(l,o)=>{let c;(c=t(l,o,e))!==!1&&(r[o]=c||l)}),Object.defineProperties(e,r)},M0=e=>{kg(e,(t,n)=>{if(Ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},L0=(e,t)=>{const n={},r=l=>{l.forEach(o=>{n[o]=!0})};return Vi(e)?r(e):r(String(e).split(t)),n},O0=()=>{},I0=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function z0(e){return!!(e&&Ft(e.append)&&e[yg]==="FormData"&&e[oo])}const F0=e=>{const t=new Array(10),n=(r,l)=>{if(ca(r)){if(t.indexOf(r)>=0)return;if(oa(r))return r;if(!("toJSON"in r)){t[l]=r;const o=Vi(r)?[]:{};return da(r,(c,u)=>{const h=n(c,l+1);!$i(h)&&(o[u]=h)}),t[l]=void 0,o}}return r};return n(e,0)},B0=ys("AsyncFunction"),$0=e=>e&&(ca(e)||Ft(e))&&Ft(e.then)&&Ft(e.catch),_g=((e,t)=>e?setImmediate:t?((n,r)=>(Jn.addEventListener("message",({source:l,data:o})=>{l===Jn&&o===n&&r.length&&r.shift()()},!1),l=>{r.push(l),Jn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ft(Jn.postMessage)),U0=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||_g,W0=e=>e!=null&&Ft(e[oo]),G={isArray:Vi,isArrayBuffer:bg,isBuffer:oa,isFormData:m0,isArrayBufferView:n0,isString:i0,isNumber:jg,isBoolean:r0,isObject:ca,isPlainObject:$l,isEmptyObject:a0,isReadableStream:x0,isRequest:v0,isResponse:y0,isHeaders:b0,isUndefined:$i,isDate:l0,isFile:o0,isReactNativeBlob:c0,isReactNative:d0,isBlob:u0,isRegExp:T0,isFunction:Ft,isStream:f0,isURLSearchParams:g0,isTypedArray:E0,isFileList:h0,forEach:da,merge:Pd,extend:N0,trim:j0,stripBOM:w0,inherits:k0,toFlatObject:_0,kindOf:co,kindOfTest:ys,endsWith:S0,toArray:C0,forEachEntry:R0,matchAll:D0,isHTMLForm:P0,hasOwnProperty:mp,hasOwnProp:mp,reduceDescriptors:kg,freezeMethods:M0,toObjectSet:L0,toCamelCase:A0,noop:O0,toFiniteNumber:I0,findKey:Ng,global:Jn,isContextDefined:wg,isSpecCompliantForm:z0,toJSONObject:F0,isAsyncFn:B0,isThenable:$0,setImmediate:_g,asap:U0,isIterable:W0};let Ce=class Sg extends Error{static from(t,n,r,l,o,c){const u=new Sg(t.message,n||t.code,r,l,o);return u.cause=t,u.name=t.name,t.status!=null&&u.status==null&&(u.status=t.status),c&&Object.assign(u,c),u}constructor(t,n,r,l,o){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),l&&(this.request=l),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.status}}};Ce.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ce.ERR_BAD_OPTION="ERR_BAD_OPTION";Ce.ECONNABORTED="ECONNABORTED";Ce.ETIMEDOUT="ETIMEDOUT";Ce.ERR_NETWORK="ERR_NETWORK";Ce.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ce.ERR_DEPRECATED="ERR_DEPRECATED";Ce.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ce.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ce.ERR_CANCELED="ERR_CANCELED";Ce.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ce.ERR_INVALID_URL="ERR_INVALID_URL";const H0=null;function Ad(e){return G.isPlainObject(e)||G.isArray(e)}function Cg(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function od(e,t,n){return e?e.concat(t).map(function(l,o){return l=Cg(l),!n&&o?"["+l+"]":l}).join(n?".":""):t}function V0(e){return G.isArray(e)&&!e.some(Ad)}const q0=G.toFlatObject(G,{},null,function(t){return/^is[A-Z]/.test(t)});function ho(e,t,n){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,y){return!G.isUndefined(y[j])});const r=n.metaTokens,l=n.visitor||m,o=n.dots,c=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(l))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(G.isDate(b))return b.toISOString();if(G.isBoolean(b))return b.toString();if(!h&&G.isBlob(b))throw new Ce("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(b)||G.isTypedArray(b)?h&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,j,y){let C=b;if(G.isReactNative(t)&&G.isReactNativeBlob(b))return t.append(od(y,j,o),p(b)),!1;if(b&&!y&&typeof b=="object"){if(G.endsWith(j,"{}"))j=r?j:j.slice(0,-2),b=JSON.stringify(b);else if(G.isArray(b)&&V0(b)||(G.isFileList(b)||G.endsWith(j,"[]"))&&(C=G.toArray(b)))return j=Cg(j),C.forEach(function(T,W){!(G.isUndefined(T)||T===null)&&t.append(c===!0?od([j],W,o):c===null?j:j+"[]",p(T))}),!1}return Ad(b)?!0:(t.append(od(y,j,o),p(b)),!1)}const x=[],N=Object.assign(q0,{defaultVisitor:m,convertValue:p,isVisitable:Ad});function w(b,j){if(!G.isUndefined(b)){if(x.indexOf(b)!==-1)throw Error("Circular reference detected in "+j.join("."));x.push(b),G.forEach(b,function(C,D){(!(G.isUndefined(C)||C===null)&&l.call(t,C,G.isString(D)?D.trim():D,j,N))===!0&&w(C,j?j.concat(D):[D])}),x.pop()}}if(!G.isObject(e))throw new TypeError("data must be an object");return w(e),t}function gp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Gd(e,t){this._pairs=[],e&&ho(e,this,t)}const Eg=Gd.prototype;Eg.append=function(t,n){this._pairs.push([t,n])};Eg.toString=function(t){const n=t?function(r){return t.call(this,r,gp)}:gp;return this._pairs.map(function(l){return n(l[0])+"="+n(l[1])},"").join("&")};function Y0(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Rg(e,t,n){if(!t)return e;const r=n&&n.encode||Y0,l=G.isFunction(n)?{serialize:n}:n,o=l&&l.serialize;let c;if(o?c=o(t,l):c=G.isURLSearchParams(t)?t.toString():new Gd(t,l).toString(r),c){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class xp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){G.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Jd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Q0=typeof URLSearchParams<"u"?URLSearchParams:Gd,K0=typeof FormData<"u"?FormData:null,X0=typeof Blob<"u"?Blob:null,G0={isBrowser:!0,classes:{URLSearchParams:Q0,FormData:K0,Blob:X0},protocols:["http","https","file","blob","url","data"]},Zd=typeof window<"u"&&typeof document<"u",Td=typeof navigator=="object"&&navigator||void 0,J0=Zd&&(!Td||["ReactNative","NativeScript","NS"].indexOf(Td.product)<0),Z0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ej=Zd&&window.location.href||"http://localhost",tj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zd,hasStandardBrowserEnv:J0,hasStandardBrowserWebWorkerEnv:Z0,navigator:Td,origin:ej},Symbol.toStringTag,{value:"Module"})),wt={...tj,...G0};function sj(e,t){return ho(e,new wt.classes.URLSearchParams,{visitor:function(n,r,l,o){return wt.isNode&&G.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function nj(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ij(e){const t={},n=Object.keys(e);let r;const l=n.length;let o;for(r=0;r<l;r++)o=n[r],t[o]=e[o];return t}function Dg(e){function t(n,r,l,o){let c=n[o++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=o>=n.length;return c=!c&&G.isArray(l)?l.length:c,h?(G.hasOwnProp(l,c)?l[c]=[l[c],r]:l[c]=r,!u):((!l[c]||!G.isObject(l[c]))&&(l[c]=[]),t(n,r,l[c],o)&&G.isArray(l[c])&&(l[c]=ij(l[c])),!u)}if(G.isFormData(e)&&G.isFunction(e.entries)){const n={};return G.forEachEntry(e,(r,l)=>{t(nj(r),l,n,0)}),n}return null}function rj(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ua={transitional:Jd,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",l=r.indexOf("application/json")>-1,o=G.isObject(t);if(o&&G.isHTMLForm(t)&&(t=new FormData(t)),G.isFormData(t))return l?JSON.stringify(Dg(t)):t;if(G.isArrayBuffer(t)||G.isBuffer(t)||G.isStream(t)||G.isFile(t)||G.isBlob(t)||G.isReadableStream(t))return t;if(G.isArrayBufferView(t))return t.buffer;if(G.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sj(t,this.formSerializer).toString();if((u=G.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ho(u?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||l?(n.setContentType("application/json",!1),rj(t)):t}],transformResponse:[function(t){const n=this.transitional||ua.transitional,r=n&&n.forcedJSONParsing,l=this.responseType==="json";if(G.isResponse(t)||G.isReadableStream(t))return t;if(t&&G.isString(t)&&(r&&!this.responseType||l)){const c=!(n&&n.silentJSONParsing)&&l;try{return JSON.parse(t,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?Ce.from(u,Ce.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],e=>{ua.headers[e]={}});const aj=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lj=e=>{const t={};let n,r,l;return e&&e.split(`
`).forEach(function(c){l=c.indexOf(":"),n=c.substring(0,l).trim().toLowerCase(),r=c.substring(l+1).trim(),!(!n||t[n]&&aj[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},vp=Symbol("internals"),oj=e=>!/[\r\n]/.test(e);function Pg(e,t){if(!(e===!1||e==null)){if(G.isArray(e)){e.forEach(n=>Pg(n,t));return}if(!oj(String(e)))throw new Error(`Invalid character in header content ["${t}"]`)}}function Pr(e){return e&&String(e).trim().toLowerCase()}function cj(e){let t=e.length;for(;t>0;){const n=e.charCodeAt(t-1);if(n!==10&&n!==13)break;t-=1}return t===e.length?e:e.slice(0,t)}function Ul(e){return e===!1||e==null?e:G.isArray(e)?e.map(Ul):cj(String(e))}function dj(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const uj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function cd(e,t,n,r,l){if(G.isFunction(r))return r.call(this,t,n);if(l&&(t=n),!!G.isString(t)){if(G.isString(r))return t.indexOf(r)!==-1;if(G.isRegExp(r))return r.test(t)}}function hj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fj(e,t){const n=G.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(l,o,c){return this[r].call(this,t,l,o,c)},configurable:!0})})}let Bt=class{constructor(t){t&&this.set(t)}set(t,n,r){const l=this;function o(u,h,p){const m=Pr(h);if(!m)throw new Error("header name must be a non-empty string");const x=G.findKey(l,m);(!x||l[x]===void 0||p===!0||p===void 0&&l[x]!==!1)&&(Pg(u,h),l[x||h]=Ul(u))}const c=(u,h)=>G.forEach(u,(p,m)=>o(p,m,h));if(G.isPlainObject(t)||t instanceof this.constructor)c(t,n);else if(G.isString(t)&&(t=t.trim())&&!uj(t))c(lj(t),n);else if(G.isObject(t)&&G.isIterable(t)){let u={},h,p;for(const m of t){if(!G.isArray(m))throw TypeError("Object iterator must return a key-value pair");u[p=m[0]]=(h=u[p])?G.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}c(u,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=Pr(t),t){const r=G.findKey(this,t);if(r){const l=this[r];if(!n)return l;if(n===!0)return dj(l);if(G.isFunction(n))return n.call(this,l,r);if(G.isRegExp(n))return n.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Pr(t),t){const r=G.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||cd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let l=!1;function o(c){if(c=Pr(c),c){const u=G.findKey(r,c);u&&(!n||cd(r,r[u],u,n))&&(delete r[u],l=!0)}}return G.isArray(t)?t.forEach(o):o(t),l}clear(t){const n=Object.keys(this);let r=n.length,l=!1;for(;r--;){const o=n[r];(!t||cd(this,this[o],o,t,!0))&&(delete this[o],l=!0)}return l}normalize(t){const n=this,r={};return G.forEach(this,(l,o)=>{const c=G.findKey(r,o);if(c){n[c]=Ul(l),delete n[o];return}const u=t?hj(o):String(o).trim();u!==o&&delete n[o],n[u]=Ul(l),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return G.forEach(this,(r,l)=>{r!=null&&r!==!1&&(n[l]=t&&G.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(l=>r.set(l)),r}static accessor(t){const r=(this[vp]=this[vp]={accessors:{}}).accessors,l=this.prototype;function o(c){const u=Pr(c);r[u]||(fj(l,c),r[u]=!0)}return G.isArray(t)?t.forEach(o):o(t),this}};Bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(Bt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});G.freezeMethods(Bt);function dd(e,t){const n=this||ua,r=t||n,l=Bt.from(r.headers);let o=r.data;return G.forEach(e,function(u){o=u.call(n,o,l.normalize(),t?t.status:void 0)}),l.normalize(),o}function Ag(e){return!!(e&&e.__CANCEL__)}let ha=class extends Ce{constructor(t,n,r){super(t??"canceled",Ce.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Tg(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Ce("Request failed with status code "+n.status,[Ce.ERR_BAD_REQUEST,Ce.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function pj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mj(e,t){e=e||10;const n=new Array(e),r=new Array(e);let l=0,o=0,c;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),m=r[o];c||(c=p),n[l]=h,r[l]=p;let x=o,N=0;for(;x!==l;)N+=n[x++],x=x%e;if(l=(l+1)%e,l===o&&(o=(o+1)%e),p-c<t)return;const w=m&&p-m;return w?Math.round(N*1e3/w):void 0}}function gj(e,t){let n=0,r=1e3/t,l,o;const c=(p,m=Date.now())=>{n=m,l=null,o&&(clearTimeout(o),o=null),e(...p)};return[(...p)=>{const m=Date.now(),x=m-n;x>=r?c(p,m):(l=p,o||(o=setTimeout(()=>{o=null,c(l)},r-x)))},()=>l&&c(l)]}const Xl=(e,t,n=3)=>{let r=0;const l=mj(50,250);return gj(o=>{const c=o.loaded,u=o.lengthComputable?o.total:void 0,h=c-r,p=l(h),m=c<=u;r=c;const x={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&m?(u-c)/p:void 0,event:o,lengthComputable:u!=null,[t?"download":"upload"]:!0};e(x)},n)},yp=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},bp=e=>(...t)=>G.asap(()=>e(...t)),xj=wt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,wt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(wt.origin),wt.navigator&&/(msie|trident)/i.test(wt.navigator.userAgent)):()=>!0,vj=wt.hasStandardBrowserEnv?{write(e,t,n,r,l,o,c){if(typeof document>"u")return;const u=[`${e}=${encodeURIComponent(t)}`];G.isNumber(n)&&u.push(`expires=${new Date(n).toUTCString()}`),G.isString(r)&&u.push(`path=${r}`),G.isString(l)&&u.push(`domain=${l}`),o===!0&&u.push("secure"),G.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function yj(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Mg(e,t,n){let r=!yj(t);return e&&(r||n==!1)?bj(e,t):t}const jp=e=>e instanceof Bt?{...e}:e;function ni(e,t){t=t||{};const n={};function r(p,m,x,N){return G.isPlainObject(p)&&G.isPlainObject(m)?G.merge.call({caseless:N},p,m):G.isPlainObject(m)?G.merge({},m):G.isArray(m)?m.slice():m}function l(p,m,x,N){if(G.isUndefined(m)){if(!G.isUndefined(p))return r(void 0,p,x,N)}else return r(p,m,x,N)}function o(p,m){if(!G.isUndefined(m))return r(void 0,m)}function c(p,m){if(G.isUndefined(m)){if(!G.isUndefined(p))return r(void 0,p)}else return r(void 0,m)}function u(p,m,x){if(x in t)return r(p,m);if(x in e)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,m,x)=>l(jp(p),jp(m),x,!0)};return G.forEach(Object.keys({...e,...t}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=G.hasOwnProp(h,m)?h[m]:l,N=x(e[m],t[m],m);G.isUndefined(N)&&x!==u||(n[m]=N)}),n}const Lg=e=>{const t=ni({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:l,xsrfCookieName:o,headers:c,auth:u}=t;if(t.headers=c=Bt.from(c),t.url=Rg(Mg(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),G.isFormData(n)){if(wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(G.isFunction(n.getHeaders)){const h=n.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([m,x])=>{p.includes(m.toLowerCase())&&c.set(m,x)})}}if(wt.hasStandardBrowserEnv&&(r&&G.isFunction(r)&&(r=r(t)),r||r!==!1&&xj(t.url))){const h=l&&o&&vj.read(o);h&&c.set(l,h)}return t},jj=typeof XMLHttpRequest<"u",Nj=jj&&function(e){return new Promise(function(n,r){const l=Lg(e);let o=l.data;const c=Bt.from(l.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=l,m,x,N,w,b;function j(){w&&w(),b&&b(),l.cancelToken&&l.cancelToken.unsubscribe(m),l.signal&&l.signal.removeEventListener("abort",m)}let y=new XMLHttpRequest;y.open(l.method.toUpperCase(),l.url,!0),y.timeout=l.timeout;function C(){if(!y)return;const T=Bt.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),_={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:T,config:e,request:y};Tg(function(M){n(M),j()},function(M){r(M),j()},_),y=null}"onloadend"in y?y.onloadend=C:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(C)},y.onabort=function(){y&&(r(new Ce("Request aborted",Ce.ECONNABORTED,e,y)),y=null)},y.onerror=function(W){const _=W&&W.message?W.message:"Network Error",H=new Ce(_,Ce.ERR_NETWORK,e,y);H.event=W||null,r(H),y=null},y.ontimeout=function(){let W=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const _=l.transitional||Jd;l.timeoutErrorMessage&&(W=l.timeoutErrorMessage),r(new Ce(W,_.clarifyTimeoutError?Ce.ETIMEDOUT:Ce.ECONNABORTED,e,y)),y=null},o===void 0&&c.setContentType(null),"setRequestHeader"in y&&G.forEach(c.toJSON(),function(W,_){y.setRequestHeader(_,W)}),G.isUndefined(l.withCredentials)||(y.withCredentials=!!l.withCredentials),u&&u!=="json"&&(y.responseType=l.responseType),p&&([N,b]=Xl(p,!0),y.addEventListener("progress",N)),h&&y.upload&&([x,w]=Xl(h),y.upload.addEventListener("progress",x),y.upload.addEventListener("loadend",w)),(l.cancelToken||l.signal)&&(m=T=>{y&&(r(!T||T.type?new ha(null,e,y):T),y.abort(),y=null)},l.cancelToken&&l.cancelToken.subscribe(m),l.signal&&(l.signal.aborted?m():l.signal.addEventListener("abort",m)));const D=pj(l.url);if(D&&wt.protocols.indexOf(D)===-1){r(new Ce("Unsupported protocol "+D+":",Ce.ERR_BAD_REQUEST,e));return}y.send(o||null)})},wj=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,l;const o=function(p){if(!l){l=!0,u();const m=p instanceof Error?p:this.reason;r.abort(m instanceof Ce?m:new ha(m instanceof Error?m.message:m))}};let c=t&&setTimeout(()=>{c=null,o(new Ce(`timeout of ${t}ms exceeded`,Ce.ETIMEDOUT))},t);const u=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(o):p.removeEventListener("abort",o)}),e=null)};e.forEach(p=>p.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=()=>G.asap(u),h}},kj=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,l;for(;r<n;)l=r+t,yield e.slice(r,l),r=l},_j=async function*(e,t){for await(const n of Sj(e))yield*kj(n,t)},Sj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Np=(e,t,n,r)=>{const l=_j(e,t);let o=0,c,u=h=>{c||(c=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:p,value:m}=await l.next();if(p){u(),h.close();return}let x=m.byteLength;if(n){let N=o+=x;n(N)}h.enqueue(new Uint8Array(m))}catch(p){throw u(p),p}},cancel(h){return u(h),l.return()}},{highWaterMark:2})},wp=64*1024,{isFunction:kl}=G,Cj=(({Request:e,Response:t})=>({Request:e,Response:t}))(G.global),{ReadableStream:kp,TextEncoder:_p}=G.global,Sp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ej=e=>{e=G.merge.call({skipUndefined:!0},Cj,e);const{fetch:t,Request:n,Response:r}=e,l=t?kl(t):typeof fetch=="function",o=kl(n),c=kl(r);if(!l)return!1;const u=l&&kl(kp),h=l&&(typeof _p=="function"?(b=>j=>b.encode(j))(new _p):async b=>new Uint8Array(await new n(b).arrayBuffer())),p=o&&u&&Sp(()=>{let b=!1;const j=new kp,y=new n(wt.origin,{body:j,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return j.cancel(),b&&!y}),m=c&&u&&Sp(()=>G.isReadableStream(new r("").body)),x={stream:m&&(b=>b.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!x[b]&&(x[b]=(j,y)=>{let C=j&&j[b];if(C)return C.call(j);throw new Ce(`Response type '${b}' is not supported`,Ce.ERR_NOT_SUPPORT,y)})});const N=async b=>{if(b==null)return 0;if(G.isBlob(b))return b.size;if(G.isSpecCompliantForm(b))return(await new n(wt.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(G.isArrayBufferView(b)||G.isArrayBuffer(b))return b.byteLength;if(G.isURLSearchParams(b)&&(b=b+""),G.isString(b))return(await h(b)).byteLength},w=async(b,j)=>{const y=G.toFiniteNumber(b.getContentLength());return y??N(j)};return async b=>{let{url:j,method:y,data:C,signal:D,cancelToken:T,timeout:W,onDownloadProgress:_,onUploadProgress:H,responseType:M,headers:R,withCredentials:A="same-origin",fetchOptions:K}=Lg(b),V=t||fetch;M=M?(M+"").toLowerCase():"text";let F=wj([D,T&&T.toAbortSignal()],W),U=null;const re=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let J;try{if(H&&p&&y!=="get"&&y!=="head"&&(J=await w(R,C))!==0){let L=new n(j,{method:"POST",body:C,duplex:"half"}),Z;if(G.isFormData(C)&&(Z=L.headers.get("content-type"))&&R.setContentType(Z),L.body){const[ue,fe]=yp(J,Xl(bp(H)));C=Np(L.body,wp,ue,fe)}}G.isString(A)||(A=A?"include":"omit");const k=o&&"credentials"in n.prototype,z={...K,signal:F,method:y.toUpperCase(),headers:R.normalize().toJSON(),body:C,duplex:"half",credentials:k?A:void 0};U=o&&new n(j,z);let $=await(o?V(U,K):V(j,z));const te=m&&(M==="stream"||M==="response");if(m&&(_||te&&re)){const L={};["status","statusText","headers"].forEach(we=>{L[we]=$[we]});const Z=G.toFiniteNumber($.headers.get("content-length")),[ue,fe]=_&&yp(Z,Xl(bp(_),!0))||[];$=new r(Np($.body,wp,ue,()=>{fe&&fe(),re&&re()}),L)}M=M||"text";let se=await x[G.findKey(x,M)||"text"]($,b);return!te&&re&&re(),await new Promise((L,Z)=>{Tg(L,Z,{data:se,headers:Bt.from($.headers),status:$.status,statusText:$.statusText,config:b,request:U})})}catch(k){throw re&&re(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new Ce("Network Error",Ce.ERR_NETWORK,b,U,k&&k.response),{cause:k.cause||k}):Ce.from(k,k&&k.code,b,U,k&&k.response)}}},Rj=new Map,Og=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:l}=t,o=[r,l,n];let c=o.length,u=c,h,p,m=Rj;for(;u--;)h=o[u],p=m.get(h),p===void 0&&m.set(h,p=u?new Map:Ej(t)),m=p;return p};Og();const eu={http:H0,xhr:Nj,fetch:{get:Og}};G.forEach(eu,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Cp=e=>`- ${e}`,Dj=e=>G.isFunction(e)||e===null||e===!1;function Pj(e,t){e=G.isArray(e)?e:[e];const{length:n}=e;let r,l;const o={};for(let c=0;c<n;c++){r=e[c];let u;if(l=r,!Dj(r)&&(l=eu[(u=String(r)).toLowerCase()],l===void 0))throw new Ce(`Unknown adapter '${u}'`);if(l&&(G.isFunction(l)||(l=l.get(t))))break;o[u||"#"+c]=l}if(!l){const c=Object.entries(o).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=n?c.length>1?`since :
`+c.map(Cp).join(`
`):" "+Cp(c[0]):"as no adapter specified";throw new Ce("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return l}const Ig={getAdapter:Pj,adapters:eu};function ud(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ha(null,e)}function Ep(e){return ud(e),e.headers=Bt.from(e.headers),e.data=dd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ig.getAdapter(e.adapter||ua.adapter,e)(e).then(function(r){return ud(e),r.data=dd.call(e,e.transformResponse,r),r.headers=Bt.from(r.headers),r},function(r){return Ag(r)||(ud(e),r&&r.response&&(r.response.data=dd.call(e,e.transformResponse,r.response),r.response.headers=Bt.from(r.response.headers))),Promise.reject(r)})}const zg="1.15.0",fo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Rp={};fo.transitional=function(t,n,r){function l(o,c){return"[Axios v"+zg+"] Transitional option '"+o+"'"+c+(r?". "+r:"")}return(o,c,u)=>{if(t===!1)throw new Ce(l(c," has been removed"+(n?" in "+n:"")),Ce.ERR_DEPRECATED);return n&&!Rp[c]&&(Rp[c]=!0,console.warn(l(c," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,c,u):!0}};fo.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Aj(e,t,n){if(typeof e!="object")throw new Ce("options must be an object",Ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let l=r.length;for(;l-- >0;){const o=r[l],c=t[o];if(c){const u=e[o],h=u===void 0||c(u,o,e);if(h!==!0)throw new Ce("option "+o+" must be "+h,Ce.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ce("Unknown option "+o,Ce.ERR_BAD_OPTION)}}const Wl={assertOptions:Aj,validators:fo},ts=Wl.validators;let ei=class{constructor(t){this.defaults=t||{},this.interceptors={request:new xp,response:new xp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const o=(()=>{if(!l.stack)return"";const c=l.stack.indexOf(`
`);return c===-1?"":l.stack.slice(c+1)})();try{if(!r.stack)r.stack=o;else if(o){const c=o.indexOf(`
`),u=c===-1?-1:o.indexOf(`
`,c+1),h=u===-1?"":o.slice(u+1);String(r.stack).endsWith(h)||(r.stack+=`
`+o)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ni(this.defaults,n);const{transitional:r,paramsSerializer:l,headers:o}=n;r!==void 0&&Wl.assertOptions(r,{silentJSONParsing:ts.transitional(ts.boolean),forcedJSONParsing:ts.transitional(ts.boolean),clarifyTimeoutError:ts.transitional(ts.boolean),legacyInterceptorReqResOrdering:ts.transitional(ts.boolean)},!1),l!=null&&(G.isFunction(l)?n.paramsSerializer={serialize:l}:Wl.assertOptions(l,{encode:ts.function,serialize:ts.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Wl.assertOptions(n,{baseUrl:ts.spelling("baseURL"),withXsrfToken:ts.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=o&&G.merge(o.common,o[n.method]);o&&G.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),n.headers=Bt.concat(c,o);const u=[];let h=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(n)===!1)return;h=h&&j.synchronous;const y=n.transitional||Jd;y&&y.legacyInterceptorReqResOrdering?u.unshift(j.fulfilled,j.rejected):u.push(j.fulfilled,j.rejected)});const p=[];this.interceptors.response.forEach(function(j){p.push(j.fulfilled,j.rejected)});let m,x=0,N;if(!h){const b=[Ep.bind(this),void 0];for(b.unshift(...u),b.push(...p),N=b.length,m=Promise.resolve(n);x<N;)m=m.then(b[x++],b[x++]);return m}N=u.length;let w=n;for(;x<N;){const b=u[x++],j=u[x++];try{w=b(w)}catch(y){j.call(this,y);break}}try{m=Ep.call(this,w)}catch(b){return Promise.reject(b)}for(x=0,N=p.length;x<N;)m=m.then(p[x++],p[x++]);return m}getUri(t){t=ni(this.defaults,t);const n=Mg(t.baseURL,t.url,t.allowAbsoluteUrls);return Rg(n,t.params,t.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(t){ei.prototype[t]=function(n,r){return this.request(ni(r||{},{method:t,url:n,data:(r||{}).data}))}});G.forEach(["post","put","patch"],function(t){function n(r){return function(o,c,u){return this.request(ni(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}ei.prototype[t]=n(),ei.prototype[t+"Form"]=n(!0)});let Tj=class Fg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(l=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](l);r._listeners=null}),this.promise.then=l=>{let o;const c=new Promise(u=>{r.subscribe(u),o=u}).then(l);return c.cancel=function(){r.unsubscribe(o)},c},t(function(o,c,u){r.reason||(r.reason=new ha(o,c,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Fg(function(l){t=l}),cancel:t}}};function Mj(e){return function(n){return e.apply(null,n)}}function Lj(e){return G.isObject(e)&&e.isAxiosError===!0}const Md={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Md).forEach(([e,t])=>{Md[t]=e});function Bg(e){const t=new ei(e),n=vg(ei.prototype.request,t);return G.extend(n,ei.prototype,t,{allOwnKeys:!0}),G.extend(n,t,null,{allOwnKeys:!0}),n.create=function(l){return Bg(ni(e,l))},n}const st=Bg(ua);st.Axios=ei;st.CanceledError=ha;st.CancelToken=Tj;st.isCancel=Ag;st.VERSION=zg;st.toFormData=ho;st.AxiosError=Ce;st.Cancel=st.CanceledError;st.all=function(t){return Promise.all(t)};st.spread=Mj;st.isAxiosError=Lj;st.mergeConfig=ni;st.AxiosHeaders=Bt;st.formToJSON=e=>Dg(G.isHTMLForm(e)?new FormData(e):e);st.getAdapter=Ig.getAdapter;st.HttpStatusCode=Md;st.default=st;const{Axios:h2,AxiosError:f2,CanceledError:p2,isCancel:m2,CancelToken:g2,VERSION:x2,all:v2,Cancel:y2,isAxiosError:b2,spread:j2,toFormData:N2,AxiosHeaders:w2,HttpStatusCode:k2,formToJSON:_2,getAdapter:S2,mergeConfig:C2}=st,oe=st.create({baseURL:"/api",timeout:3e4});oe.interceptors.response.use(e=>e,e=>(console.error("API Error:",e),Promise.reject(e)));const Kn={list:(e=1,t=100,n)=>{let r=`/events?page=${e}&page_size=${t}`;return n&&(n.levels&&n.levels.length>0&&n.levels.forEach(l=>r+=`&levels=${l}`),n.event_ids&&n.event_ids.length>0&&n.event_ids.forEach(l=>r+=`&event_ids=${l}`),n.log_names&&n.log_names.length>0&&n.log_names.forEach(l=>r+=`&log_names=${encodeURIComponent(l)}`),n.sources&&n.sources.length>0&&n.sources.forEach(l=>r+=`&sources=${encodeURIComponent(l)}`),n.users&&n.users.length>0&&n.users.forEach(l=>r+=`&users=${encodeURIComponent(l)}`),n.computers&&n.computers.length>0&&n.computers.forEach(l=>r+=`&computers=${encodeURIComponent(l)}`),n.start_time&&(r+=`&start_time=${encodeURIComponent(n.start_time)}`),n.end_time&&(r+=`&end_time=${encodeURIComponent(n.end_time)}`),n.sort_by&&(r+=`&sort_by=${n.sort_by}`),n.sort_order&&(r+=`&sort_order=${n.sort_order}`)),oe.get(r)},get:e=>oe.get(`/events/${e}`),search:e=>oe.post("/events/search",e),export:e=>oe.post("/events/export",e,{responseType:e.format==="json"?"json":"blob"})},xs={list:(e=1,t=100,n)=>oe.get(`/alerts?page=${e}&page_size=${t}${n?`&severity=${n}`:""}`),get:e=>oe.get(`/alerts/${e}`),stats:()=>oe.get("/alerts/stats"),trend:(e=7)=>oe.get(`/alerts/trend?days=${e}`),resolve:(e,t)=>oe.post(`/alerts/${e}/resolve`,{notes:t}),markFalsePositive:(e,t)=>oe.post(`/alerts/${e}/false-positive`,{reason:t}),delete:e=>oe.delete(`/alerts/${e}`),batchAction:(e,t,n)=>oe.post("/alerts/batch",{ids:e,action:t,notes:n}),runAnalysis:()=>oe.post("/alerts/run-analysis")},Dp={collect:e=>oe.post("/collect",e),getStatus:()=>oe.get("/collect/status"),evtx2csv:(e,t,n)=>oe.post("/collect/evtx2csv",{file_paths:e,output_dir:t,limit:n})},Pp={importLogs:e=>oe.post("/import/logs",{files:e}),importLogsWithAlert:e=>oe.post("/import/logs",{files:e,alert_on_import:!0}),getStatus:()=>oe.get("/import/status")},Oj={getStats:()=>oe.get("/live/stats"),streamEvents:(e,t,n)=>{const r=new EventSource("/api/live/events");return r.onmessage=l=>{try{const o=JSON.parse(l.data);o.type==="event"?e(o.data):o.type==="stats"&&t(o)}catch(o){console.error("Failed to parse SSE data:",o)}},r.onerror=l=>{console.error("SSE error:",l),n==null||n(l)},r}},gs={health:()=>oe.get("/health"),getInfo:()=>oe.get("/system/info"),getMetrics:()=>oe.get("/system/metrics"),getProcesses:(e=100)=>oe.get(`/system/processes?limit=${e}`),getNetwork:(e=100,t)=>oe.get(`/system/network?limit=${e}${t?`&protocol=${t}`:""}`),getEnvVariables:()=>oe.get("/system/env"),getLoadedDLLs:(e=100)=>oe.get(`/system/dlls?limit=${e}`),getProcessDLLs:e=>oe.get(`/system/process/${e}/dlls`),getDrivers:()=>oe.get("/system/drivers"),getUsers:()=>oe.get("/system/users"),getRegistry:()=>oe.get("/system/registry"),getTasks:()=>oe.get("/system/tasks")},$s={list:()=>oe.get("/rules"),get:e=>oe.get(`/rules/${e}`),toggle:(e,t)=>oe.post(`/rules/${e}/toggle?enabled=${t}`),save:e=>oe.post("/rules",e),update:(e,t)=>oe.put(`/rules/${e}`,t),validate:(e,t)=>oe.post("/rules/validate",{rule:e,content:t}),import:e=>oe.post("/rules/import",{rules:e}),export:(e="json")=>oe.get(`/rules/export?format=${e}`,{responseType:"blob"}),listTemplates:()=>oe.get("/rules/templates"),getTemplate:e=>oe.get(`/rules/templates/${e}`),instantiateTemplate:(e,t)=>oe.post(`/rules/templates/${e}/instantiate`,{name:e,params:t})},Ar={list:()=>oe.get("/reports"),generate:e=>oe.post("/reports",e),get:e=>oe.get(`/reports/${e}`),export:e=>oe.get(`/reports/export?format=${e}`,{responseType:"blob"}),download:e=>oe.get(`/reports/${e}/download`,{responseType:"blob"})},Vn={calculateHash:e=>oe.post("/forensics/hash",{path:e}),verifyHash:(e,t)=>oe.get(`/forensics/verify-hash?path=${e}&expected=${t}`),verifySignature:e=>oe.get(`/forensics/signature?path=${e}`),isSigned:e=>oe.get(`/forensics/is-signed?path=${e}`),collect:(e,t)=>oe.post("/forensics/collect",{type:e,output_path:t}),listEvidence:()=>oe.get("/forensics/evidence"),getEvidence:e=>oe.get(`/forensics/evidence/${e}`),exportEvidence:(e,t)=>oe.get(`/forensics/evidence/${e}/export?format=${t}`,{responseType:"blob"}),chainOfCustody:()=>oe.get("/forensics/chain-of-custody"),memoryDump:e=>oe.get(`/forensics/memory-dump${e?`?pid=${e}`:""}`)},Ld={get:(e=200,t,n)=>{let r=`/timeline?limit=${e}`;return t&&(r+=`&start_time=${t}`),n&&(r+=`&end_time=${n}`),oe.get(r)},deleteAlert:e=>oe.delete(`/timeline/alerts/${e}`)},$g={getCollectionStats:()=>oe.get("/dashboard/collection-stats"),getLogNames:()=>oe.get("/dashboard/log-names")},hd={run:(e,t)=>oe.post(`/analyze/${e}`,t||{}),list:()=>oe.get("/analyzers"),info:e=>oe.get(`/analyzers/${e}`),listRules:()=>oe.get("/analyzer-rules"),getRule:e=>oe.get(`/analyzer-rules/${e}`),updateRule:e=>oe.put(`/analyzer-rules/${e.name}`,e)},fd={get:()=>oe.get("/settings"),save:e=>oe.post("/settings",e),reset:()=>oe.post("/settings/reset")},Oi={detect:e=>oe.get(`/persistence/detect${e||""}`),detectStream:(e,t)=>{const n=new EventSource("/api/persistence/detect/stream");return n.onmessage=r=>{try{const l=JSON.parse(r.data);e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},n.onerror=r=>{console.error("SSE error:",r),t==null||t(r)},n},listCategories:()=>oe.get("/persistence/categories"),listTechniques:()=>oe.get("/persistence/techniques"),listDetectors:()=>oe.get("/persistence/detectors"),updateDetectors:e=>oe.post("/persistence/detectors/config",{detectors:e}),listRules:()=>oe.get("/persistence/rules"),getRule:e=>oe.get(`/persistence/rules/${e}`),updateRule:e=>oe.put("/persistence/rules",e)},Ij={analyze:e=>oe.post("/correlation/analyze",e||{})},zj={analyze:e=>oe.post("/multi/analyze",e||{}),lateral:()=>oe.get("/multi/lateral")},Fj={execute:e=>oe.post("/query/execute",e)},Tr={list:()=>oe.get("/suppress"),create:e=>oe.post("/suppress",e),update:(e,t)=>oe.put(`/suppress/${e}`,t),delete:e=>oe.delete(`/suppress/${e}`),toggle:(e,t)=>oe.post(`/suppress/${e}/toggle`,{enabled:t})},Ap={analyze:e=>oe.post("/ueba/analyze",e||{}),profiles:()=>oe.get("/ueba/profiles")},Mr={getStats:()=>oe.get("/monitor/stats"),getEvents:e=>{let t="/monitor/events?";return e&&(e.type&&(t+=`type=${e.type}&`),e.severity&&(t+=`severity=${e.severity}&`),e.limit&&(t+=`limit=${e.limit}&`),e.offset&&(t+=`offset=${e.offset}&`),e.start_time&&(t+=`start_time=${encodeURIComponent(e.start_time)}&`),e.end_time&&(t+=`end_time=${encodeURIComponent(e.end_time)}&`)),oe.get(t)},updateConfig:e=>oe.post("/monitor/config",e),startStop:e=>oe.post("/monitor/action",{action:e}),streamEvents:(e,t)=>{const n=new EventSource("/api/monitor/events/stream");return n.onmessage=r=>{try{const l=JSON.parse(r.data);e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},n.onerror=r=>{console.error("SSE error:",r),t==null||t(r)},n}};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function fa(e){return e+.5|0}const yn=(e,t,n)=>Math.max(Math.min(e,n),t);function Br(e){return yn(fa(e*2.55),0,255)}function wn(e){return yn(fa(e*255),0,255)}function Vs(e){return yn(fa(e/2.55)/100,0,1)}function Tp(e){return yn(fa(e*100),0,100)}const ss={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Od=[..."0123456789ABCDEF"],Bj=e=>Od[e&15],$j=e=>Od[(e&240)>>4]+Od[e&15],_l=e=>(e&240)>>4===(e&15),Uj=e=>_l(e.r)&&_l(e.g)&&_l(e.b)&&_l(e.a);function Wj(e){var t=e.length,n;return e[0]==="#"&&(t===4||t===5?n={r:255&ss[e[1]]*17,g:255&ss[e[2]]*17,b:255&ss[e[3]]*17,a:t===5?ss[e[4]]*17:255}:(t===7||t===9)&&(n={r:ss[e[1]]<<4|ss[e[2]],g:ss[e[3]]<<4|ss[e[4]],b:ss[e[5]]<<4|ss[e[6]],a:t===9?ss[e[7]]<<4|ss[e[8]]:255})),n}const Hj=(e,t)=>e<255?t(e):"";function Vj(e){var t=Uj(e)?Bj:$j;return e?"#"+t(e.r)+t(e.g)+t(e.b)+Hj(e.a,t):void 0}const qj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ug(e,t,n){const r=t*Math.min(n,1-n),l=(o,c=(o+e/30)%12)=>n-r*Math.max(Math.min(c-3,9-c,1),-1);return[l(0),l(8),l(4)]}function Yj(e,t,n){const r=(l,o=(l+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Qj(e,t,n){const r=Ug(e,1,.5);let l;for(t+n>1&&(l=1/(t+n),t*=l,n*=l),l=0;l<3;l++)r[l]*=1-t-n,r[l]+=t;return r}function Kj(e,t,n,r,l){return e===l?(t-n)/r+(t<n?6:0):t===l?(n-e)/r+2:(e-t)/r+4}function tu(e){const n=e.r/255,r=e.g/255,l=e.b/255,o=Math.max(n,r,l),c=Math.min(n,r,l),u=(o+c)/2;let h,p,m;return o!==c&&(m=o-c,p=u>.5?m/(2-o-c):m/(o+c),h=Kj(n,r,l,m,o),h=h*60+.5),[h|0,p||0,u]}function su(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(wn)}function nu(e,t,n){return su(Ug,e,t,n)}function Xj(e,t,n){return su(Qj,e,t,n)}function Gj(e,t,n){return su(Yj,e,t,n)}function Wg(e){return(e%360+360)%360}function Jj(e){const t=qj.exec(e);let n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Br(+t[5]):wn(+t[5]));const l=Wg(+t[2]),o=+t[3]/100,c=+t[4]/100;return t[1]==="hwb"?r=Xj(l,o,c):t[1]==="hsv"?r=Gj(l,o,c):r=nu(l,o,c),{r:r[0],g:r[1],b:r[2],a:n}}function Zj(e,t){var n=tu(e);n[0]=Wg(n[0]+t),n=nu(n),e.r=n[0],e.g=n[1],e.b=n[2]}function eN(e){if(!e)return;const t=tu(e),n=t[0],r=Tp(t[1]),l=Tp(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${l}%, ${Vs(e.a)})`:`hsl(${n}, ${r}%, ${l}%)`}const Mp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function tN(){const e={},t=Object.keys(Lp),n=Object.keys(Mp);let r,l,o,c,u;for(r=0;r<t.length;r++){for(c=u=t[r],l=0;l<n.length;l++)o=n[l],u=u.replace(o,Mp[o]);o=parseInt(Lp[c],16),e[u]=[o>>16&255,o>>8&255,o&255]}return e}let Sl;function sN(e){Sl||(Sl=tN(),Sl.transparent=[0,0,0,0]);const t=Sl[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const nN=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function iN(e){const t=nN.exec(e);let n=255,r,l,o;if(t){if(t[7]!==r){const c=+t[7];n=t[8]?Br(c):yn(c*255,0,255)}return r=+t[1],l=+t[3],o=+t[5],r=255&(t[2]?Br(r):yn(r,0,255)),l=255&(t[4]?Br(l):yn(l,0,255)),o=255&(t[6]?Br(o):yn(o,0,255)),{r,g:l,b:o,a:n}}}function rN(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Vs(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const pd=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Ii=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function aN(e,t,n){const r=Ii(Vs(e.r)),l=Ii(Vs(e.g)),o=Ii(Vs(e.b));return{r:wn(pd(r+n*(Ii(Vs(t.r))-r))),g:wn(pd(l+n*(Ii(Vs(t.g))-l))),b:wn(pd(o+n*(Ii(Vs(t.b))-o))),a:e.a+n*(t.a-e.a)}}function Cl(e,t,n){if(e){let r=tu(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=nu(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Hg(e,t){return e&&Object.assign(t||{},e)}function Op(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=wn(e[3]))):(t=Hg(e,{r:0,g:0,b:0,a:1}),t.a=wn(t.a)),t}function lN(e){return e.charAt(0)==="r"?iN(e):Jj(e)}class Jr{constructor(t){if(t instanceof Jr)return t;const n=typeof t;let r;n==="object"?r=Op(t):n==="string"&&(r=Wj(t)||sN(t)||lN(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var t=Hg(this._rgb);return t&&(t.a=Vs(t.a)),t}set rgb(t){this._rgb=Op(t)}rgbString(){return this._valid?rN(this._rgb):void 0}hexString(){return this._valid?Vj(this._rgb):void 0}hslString(){return this._valid?eN(this._rgb):void 0}mix(t,n){if(t){const r=this.rgb,l=t.rgb;let o;const c=n===o?.5:n,u=2*c-1,h=r.a-l.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;o=1-p,r.r=255&p*r.r+o*l.r+.5,r.g=255&p*r.g+o*l.g+.5,r.b=255&p*r.b+o*l.b+.5,r.a=c*r.a+(1-c)*l.a,this.rgb=r}return this}interpolate(t,n){return t&&(this._rgb=aN(this._rgb,t._rgb,n)),this}clone(){return new Jr(this.rgb)}alpha(t){return this._rgb.a=wn(t),this}clearer(t){const n=this._rgb;return n.a*=1-t,this}greyscale(){const t=this._rgb,n=fa(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=n,this}opaquer(t){const n=this._rgb;return n.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Cl(this._rgb,2,t),this}darken(t){return Cl(this._rgb,2,-t),this}saturate(t){return Cl(this._rgb,1,t),this}desaturate(t){return Cl(this._rgb,1,-t),this}rotate(t){return Zj(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Us(){}const oN=(()=>{let e=0;return()=>e++})();function Oe(e){return e==null}function at(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function Pe(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function St(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Cs(e,t){return St(e)?e:t}function Re(e,t){return typeof e>"u"?t:e}const cN=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,Vg=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function Ve(e,t,n){if(e&&typeof e.call=="function")return e.apply(n,t)}function Fe(e,t,n,r){let l,o,c;if(at(e))for(o=e.length,l=0;l<o;l++)t.call(n,e[l],l);else if(Pe(e))for(c=Object.keys(e),o=c.length,l=0;l<o;l++)t.call(n,e[c[l]],c[l])}function Gl(e,t){let n,r,l,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(l=e[n],o=t[n],l.datasetIndex!==o.datasetIndex||l.index!==o.index)return!1;return!0}function Jl(e){if(at(e))return e.map(Jl);if(Pe(e)){const t=Object.create(null),n=Object.keys(e),r=n.length;let l=0;for(;l<r;++l)t[n[l]]=Jl(e[n[l]]);return t}return e}function qg(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function dN(e,t,n,r){if(!qg(e))return;const l=t[e],o=n[e];Pe(l)&&Pe(o)?Zr(l,o,r):t[e]=Jl(o)}function Zr(e,t,n){const r=at(t)?t:[t],l=r.length;if(!Pe(e))return e;n=n||{};const o=n.merger||dN;let c;for(let u=0;u<l;++u){if(c=r[u],!Pe(c))continue;const h=Object.keys(c);for(let p=0,m=h.length;p<m;++p)o(h[p],e,c,n)}return e}function Vr(e,t){return Zr(e,t,{merger:uN})}function uN(e,t,n){if(!qg(e))return;const r=t[e],l=n[e];Pe(r)&&Pe(l)?Vr(r,l):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Jl(l))}const Ip={"":e=>e,x:e=>e.x,y:e=>e.y};function hN(e){const t=e.split("."),n=[];let r="";for(const l of t)r+=l,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}function fN(e){const t=hN(e);return n=>{for(const r of t){if(r==="")break;n=n&&n[r]}return n}}function ii(e,t){return(Ip[t]||(Ip[t]=fN(t)))(e)}function iu(e){return e.charAt(0).toUpperCase()+e.slice(1)}const ea=e=>typeof e<"u",kn=e=>typeof e=="function",zp=(e,t)=>{if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0};function pN(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const Be=Math.PI,Ge=2*Be,mN=Ge+Be,Zl=Number.POSITIVE_INFINITY,gN=Be/180,dt=Be/2,qn=Be/4,Fp=Be*2/3,Yg=Math.log10,Ds=Math.sign;function qr(e,t,n){return Math.abs(e-t)<n}function Bp(e){const t=Math.round(e);e=qr(e,t,e/1e3)?t:e;const n=Math.pow(10,Math.floor(Yg(e))),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function xN(e){const t=[],n=Math.sqrt(e);let r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((l,o)=>l-o).pop(),t}function vN(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function ta(e){return!vN(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function yN(e,t){const n=Math.round(e);return n-t<=e&&n+t>=e}function bN(e,t,n){let r,l,o;for(r=0,l=e.length;r<l;r++)o=e[r][n],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function qs(e){return e*(Be/180)}function jN(e){return e*(180/Be)}function $p(e){if(!St(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function Qg(e,t){const n=t.x-e.x,r=t.y-e.y,l=Math.sqrt(n*n+r*r);let o=Math.atan2(r,n);return o<-.5*Be&&(o+=Ge),{angle:o,distance:l}}function Id(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function NN(e,t){return(e-t+mN)%Ge-Be}function qt(e){return(e%Ge+Ge)%Ge}function sa(e,t,n,r){const l=qt(e),o=qt(t),c=qt(n),u=qt(o-l),h=qt(c-l),p=qt(l-o),m=qt(l-c);return l===o||l===c||r&&o===c||u>h&&p<m}function kt(e,t,n){return Math.max(t,Math.min(n,e))}function wN(e){return kt(e,-32768,32767)}function Ys(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function ru(e,t,n){n=n||(c=>e[c]<t);let r=e.length-1,l=0,o;for(;r-l>1;)o=l+r>>1,n(o)?l=o:r=o;return{lo:l,hi:r}}const Zn=(e,t,n,r)=>ru(e,n,r?l=>{const o=e[l][t];return o<n||o===n&&e[l+1][t]===n}:l=>e[l][t]<n),kN=(e,t,n)=>ru(e,n,r=>e[r][t]>=n);function _N(e,t,n){let r=0,l=e.length;for(;r<l&&e[r]<t;)r++;for(;l>r&&e[l-1]>n;)l--;return r>0||l<e.length?e.slice(r,l):e}const Kg=["push","pop","shift","splice","unshift"];function SN(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Kg.forEach(n=>{const r="_onData"+iu(n),l=e[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value(...o){const c=l.apply(this,o);return e._chartjs.listeners.forEach(u=>{typeof u[r]=="function"&&u[r](...o)}),c}})})}function Up(e,t){const n=e._chartjs;if(!n)return;const r=n.listeners,l=r.indexOf(t);l!==-1&&r.splice(l,1),!(r.length>0)&&(Kg.forEach(o=>{delete e[o]}),delete e._chartjs)}function Xg(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const Gg=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Jg(e,t){let n=[],r=!1;return function(...l){n=l,r||(r=!0,Gg.call(window,()=>{r=!1,e.apply(t,n)}))}}function CN(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}const au=e=>e==="start"?"left":e==="end"?"right":"center",Nt=(e,t,n)=>e==="start"?t:e==="end"?n:(t+n)/2,EN=(e,t,n,r)=>e===(r?"left":"right")?n:e==="center"?(t+n)/2:t;function RN(e,t,n){const r=t.length;let l=0,o=r;if(e._sorted){const{iScale:c,vScale:u,_parsed:h}=e,p=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,m=c.axis,{min:x,max:N,minDefined:w,maxDefined:b}=c.getUserBounds();if(w){if(l=Math.min(Zn(h,m,x).lo,n?r:Zn(t,m,c.getPixelForValue(x)).lo),p){const j=h.slice(0,l+1).reverse().findIndex(y=>!Oe(y[u.axis]));l-=Math.max(0,j)}l=kt(l,0,r-1)}if(b){let j=Math.max(Zn(h,c.axis,N,!0).hi+1,n?0:Zn(t,m,c.getPixelForValue(N),!0).hi+1);if(p){const y=h.slice(j-1).findIndex(C=>!Oe(C[u.axis]));j+=Math.max(0,y)}o=kt(j,l,r)-l}else o=r-l}return{start:l,count:o}}function DN(e){const{xScale:t,yScale:n,_scaleRanges:r}=e,l={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=l,!0;const o=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,l),o}const El=e=>e===0||e===1,Wp=(e,t,n)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Ge/n)),Hp=(e,t,n)=>Math.pow(2,-10*e)*Math.sin((e-t)*Ge/n)+1,Yr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*dt)+1,easeOutSine:e=>Math.sin(e*dt),easeInOutSine:e=>-.5*(Math.cos(Be*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>El(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>El(e)?e:Wp(e,.075,.3),easeOutElastic:e=>El(e)?e:Hp(e,.075,.3),easeInOutElastic(e){return El(e)?e:e<.5?.5*Wp(e*2,.1125,.45):.5+.5*Hp(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Yr.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Yr.easeInBounce(e*2)*.5:Yr.easeOutBounce(e*2-1)*.5+.5};function lu(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Vp(e){return lu(e)?e:new Jr(e)}function md(e){return lu(e)?e:new Jr(e).saturate(.5).darken(.1).hexString()}const PN=["x","y","borderWidth","radius","tension"],AN=["color","borderColor","backgroundColor"];function TN(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:AN},numbers:{type:"number",properties:PN}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function MN(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const qp=new Map;function LN(e,t){t=t||{};const n=e+JSON.stringify(t);let r=qp.get(n);return r||(r=new Intl.NumberFormat(e,t),qp.set(n,r)),r}function ou(e,t,n){return LN(t,n).format(e)}const ON={values(e){return at(e)?e:""+e},numeric(e,t,n){if(e===0)return"0";const r=this.chart.options.locale;let l,o=e;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(l="scientific"),o=IN(e,n)}const c=Yg(Math.abs(o)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:l,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),ou(e,r,h)}};function IN(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var Zg={formatters:ON};function zN(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,n)=>n.lineWidth,tickColor:(t,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Zg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ri=Object.create(null),zd=Object.create(null);function Qr(e,t){if(!t)return e;const n=t.split(".");for(let r=0,l=n.length;r<l;++r){const o=n[r];e=e[o]||(e[o]=Object.create(null))}return e}function gd(e,t,n){return typeof t=="string"?Zr(Qr(e,t),n):Zr(Qr(e,""),t)}class FN{constructor(t,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,l)=>md(l.backgroundColor),this.hoverBorderColor=(r,l)=>md(l.borderColor),this.hoverColor=(r,l)=>md(l.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(n)}set(t,n){return gd(this,t,n)}get(t){return Qr(this,t)}describe(t,n){return gd(zd,t,n)}override(t,n){return gd(ri,t,n)}route(t,n,r,l){const o=Qr(this,t),c=Qr(this,r),u="_"+n;Object.defineProperties(o,{[u]:{value:o[n],writable:!0},[n]:{enumerable:!0,get(){const h=this[u],p=c[l];return Pe(h)?Object.assign({},p,h):Re(h,p)},set(h){this[u]=h}}})}apply(t){t.forEach(n=>n(this))}}var tt=new FN({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[TN,MN,zN]);function BN(e){return!e||Oe(e.size)||Oe(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Yp(e,t,n,r,l){let o=t[l];return o||(o=t[l]=e.measureText(l).width,n.push(l)),o>r&&(r=o),r}function Yn(e,t,n){const r=e.currentDevicePixelRatio,l=n!==0?Math.max(n/2,.5):0;return Math.round((t-l)*r)/r+l}function Qp(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Fd(e,t,n,r){ex(e,t,n,r,null)}function ex(e,t,n,r,l){let o,c,u,h,p,m,x,N;const w=t.pointStyle,b=t.rotation,j=t.radius;let y=(b||0)*gN;if(w&&typeof w=="object"&&(o=w.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){e.save(),e.translate(n,r),e.rotate(y),e.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),e.restore();return}if(!(isNaN(j)||j<=0)){switch(e.beginPath(),w){default:l?e.ellipse(n,r,l/2,j,0,0,Ge):e.arc(n,r,j,0,Ge),e.closePath();break;case"triangle":m=l?l/2:j,e.moveTo(n+Math.sin(y)*m,r-Math.cos(y)*j),y+=Fp,e.lineTo(n+Math.sin(y)*m,r-Math.cos(y)*j),y+=Fp,e.lineTo(n+Math.sin(y)*m,r-Math.cos(y)*j),e.closePath();break;case"rectRounded":p=j*.516,h=j-p,c=Math.cos(y+qn)*h,x=Math.cos(y+qn)*(l?l/2-p:h),u=Math.sin(y+qn)*h,N=Math.sin(y+qn)*(l?l/2-p:h),e.arc(n-x,r-u,p,y-Be,y-dt),e.arc(n+N,r-c,p,y-dt,y),e.arc(n+x,r+u,p,y,y+dt),e.arc(n-N,r+c,p,y+dt,y+Be),e.closePath();break;case"rect":if(!b){h=Math.SQRT1_2*j,m=l?l/2:h,e.rect(n-m,r-h,2*m,2*h);break}y+=qn;case"rectRot":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),e.moveTo(n-x,r-u),e.lineTo(n+N,r-c),e.lineTo(n+x,r+u),e.lineTo(n-N,r+c),e.closePath();break;case"crossRot":y+=qn;case"cross":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),e.moveTo(n-x,r-u),e.lineTo(n+x,r+u),e.moveTo(n+N,r-c),e.lineTo(n-N,r+c);break;case"star":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),e.moveTo(n-x,r-u),e.lineTo(n+x,r+u),e.moveTo(n+N,r-c),e.lineTo(n-N,r+c),y+=qn,x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),e.moveTo(n-x,r-u),e.lineTo(n+x,r+u),e.moveTo(n+N,r-c),e.lineTo(n-N,r+c);break;case"line":c=l?l/2:Math.cos(y)*j,u=Math.sin(y)*j,e.moveTo(n-c,r-u),e.lineTo(n+c,r+u);break;case"dash":e.moveTo(n,r),e.lineTo(n+Math.cos(y)*(l?l/2:j),r+Math.sin(y)*j);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function na(e,t,n){return n=n||.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function po(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function mo(e){e.restore()}function $N(e,t,n,r,l){if(!t)return e.lineTo(n.x,n.y);if(l==="middle"){const o=(t.x+n.x)/2;e.lineTo(o,t.y),e.lineTo(o,n.y)}else l==="after"!=!!r?e.lineTo(t.x,n.y):e.lineTo(n.x,t.y);e.lineTo(n.x,n.y)}function UN(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function WN(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),Oe(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function HN(e,t,n,r,l){if(l.strikethrough||l.underline){const o=e.measureText(r),c=t-o.actualBoundingBoxLeft,u=t+o.actualBoundingBoxRight,h=n-o.actualBoundingBoxAscent,p=n+o.actualBoundingBoxDescent,m=l.strikethrough?(h+p)/2:p;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=l.decorationWidth||2,e.moveTo(c,m),e.lineTo(u,m),e.stroke()}}function VN(e,t){const n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function ia(e,t,n,r,l,o={}){const c=at(t)?t:[t],u=o.strokeWidth>0&&o.strokeColor!=="";let h,p;for(e.save(),e.font=l.string,WN(e,o),h=0;h<c.length;++h)p=c[h],o.backdrop&&VN(e,o.backdrop),u&&(o.strokeColor&&(e.strokeStyle=o.strokeColor),Oe(o.strokeWidth)||(e.lineWidth=o.strokeWidth),e.strokeText(p,n,r,o.maxWidth)),e.fillText(p,n,r,o.maxWidth),HN(e,n,r,p,o),r+=Number(l.lineHeight);e.restore()}function eo(e,t){const{x:n,y:r,w:l,h:o,radius:c}=t;e.arc(n+c.topLeft,r+c.topLeft,c.topLeft,1.5*Be,Be,!0),e.lineTo(n,r+o-c.bottomLeft),e.arc(n+c.bottomLeft,r+o-c.bottomLeft,c.bottomLeft,Be,dt,!0),e.lineTo(n+l-c.bottomRight,r+o),e.arc(n+l-c.bottomRight,r+o-c.bottomRight,c.bottomRight,dt,0,!0),e.lineTo(n+l,r+c.topRight),e.arc(n+l-c.topRight,r+c.topRight,c.topRight,0,-dt,!0),e.lineTo(n+c.topLeft,r)}const qN=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,YN=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function QN(e,t){const n=(""+e).match(qN);if(!n||n[1]==="normal")return t*1.2;switch(e=+n[2],n[3]){case"px":return e;case"%":e/=100;break}return t*e}const KN=e=>+e||0;function cu(e,t){const n={},r=Pe(t),l=r?Object.keys(t):t,o=Pe(e)?r?c=>Re(e[c],e[t[c]]):c=>e[c]:()=>e;for(const c of l)n[c]=KN(o(c));return n}function tx(e){return cu(e,{top:"y",right:"x",bottom:"y",left:"x"})}function Fi(e){return cu(e,["topLeft","topRight","bottomLeft","bottomRight"])}function is(e){const t=tx(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function _t(e,t){e=e||{},t=t||tt.font;let n=Re(e.size,t.size);typeof n=="string"&&(n=parseInt(n,10));let r=Re(e.style,t.style);r&&!(""+r).match(YN)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const l={family:Re(e.family,t.family),lineHeight:QN(Re(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:Re(e.weight,t.weight),string:""};return l.string=BN(l),l}function Rl(e,t,n,r){let l,o,c;for(l=0,o=e.length;l<o;++l)if(c=e[l],c!==void 0&&c!==void 0)return c}function XN(e,t,n){const{min:r,max:l}=e,o=Vg(t,(l-r)/2),c=(u,h)=>n&&u===0?0:u+h;return{min:c(r,-Math.abs(o)),max:c(l,o)}}function li(e,t){return Object.assign(Object.create(e),t)}function du(e,t=[""],n,r,l=()=>e[0]){const o=n||e;typeof r>"u"&&(r=rx("_fallback",e));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:o,_fallback:r,_getTarget:l,override:u=>du([u,...e],t,o,r)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete e[0][h],!0},get(u,h){return nx(u,h,()=>i1(h,t,e,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(u,h){return Xp(u).includes(h)},ownKeys(u){return Xp(u)},set(u,h,p){const m=u._storage||(u._storage=l());return u[h]=m[h]=p,delete u._keys,!0}})}function Ui(e,t,n,r){const l={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:sx(e,r),setContext:o=>Ui(e,o,n,r),override:o=>Ui(e.override(o),t,n,r)};return new Proxy(l,{deleteProperty(o,c){return delete o[c],delete e[c],!0},get(o,c,u){return nx(o,c,()=>JN(o,c,u))},getOwnPropertyDescriptor(o,c){return o._descriptors.allKeys?Reflect.has(e,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,c)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(o,c){return Reflect.has(e,c)},ownKeys(){return Reflect.ownKeys(e)},set(o,c,u){return e[c]=u,delete o[c],!0}})}function sx(e,t={scriptable:!0,indexable:!0}){const{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:l=t.allKeys}=e;return{allKeys:l,scriptable:n,indexable:r,isScriptable:kn(n)?n:()=>n,isIndexable:kn(r)?r:()=>r}}const GN=(e,t)=>e?e+iu(t):t,uu=(e,t)=>Pe(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function nx(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const r=n();return e[t]=r,r}function JN(e,t,n){const{_proxy:r,_context:l,_subProxy:o,_descriptors:c}=e;let u=r[t];return kn(u)&&c.isScriptable(t)&&(u=ZN(t,u,e,n)),at(u)&&u.length&&(u=e1(t,u,e,c.isIndexable)),uu(t,u)&&(u=Ui(u,l,o&&o[t],c)),u}function ZN(e,t,n,r){const{_proxy:l,_context:o,_subProxy:c,_stack:u}=n;if(u.has(e))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+e);u.add(e);let h=t(o,c||r);return u.delete(e),uu(e,h)&&(h=hu(l._scopes,l,e,h)),h}function e1(e,t,n,r){const{_proxy:l,_context:o,_subProxy:c,_descriptors:u}=n;if(typeof o.index<"u"&&r(e))return t[o.index%t.length];if(Pe(t[0])){const h=t,p=l._scopes.filter(m=>m!==h);t=[];for(const m of h){const x=hu(p,l,e,m);t.push(Ui(x,o,c&&c[e],u))}}return t}function ix(e,t,n){return kn(e)?e(t,n):e}const t1=(e,t)=>e===!0?t:typeof e=="string"?ii(t,e):void 0;function s1(e,t,n,r,l){for(const o of t){const c=t1(n,o);if(c){e.add(c);const u=ix(c._fallback,n,l);if(typeof u<"u"&&u!==n&&u!==r)return u}else if(c===!1&&typeof r<"u"&&n!==r)return null}return!1}function hu(e,t,n,r){const l=t._rootScopes,o=ix(t._fallback,n,r),c=[...e,...l],u=new Set;u.add(r);let h=Kp(u,c,n,o||n,r);return h===null||typeof o<"u"&&o!==n&&(h=Kp(u,c,o,h,r),h===null)?!1:du(Array.from(u),[""],l,o,()=>n1(t,n,r))}function Kp(e,t,n,r,l){for(;n;)n=s1(e,t,n,r,l);return n}function n1(e,t,n){const r=e._getTarget();t in r||(r[t]={});const l=r[t];return at(l)&&Pe(n)?n:l||{}}function i1(e,t,n,r){let l;for(const o of t)if(l=rx(GN(o,e),n),typeof l<"u")return uu(e,l)?hu(n,r,e,l):l}function rx(e,t){for(const n of t){if(!n)continue;const r=n[e];if(typeof r<"u")return r}}function Xp(e){let t=e._keys;return t||(t=e._keys=r1(e._scopes)),t}function r1(e){const t=new Set;for(const n of e)for(const r of Object.keys(n).filter(l=>!l.startsWith("_")))t.add(r);return Array.from(t)}const a1=Number.EPSILON||1e-14,Wi=(e,t)=>t<e.length&&!e[t].skip&&e[t],ax=e=>e==="x"?"y":"x";function l1(e,t,n,r){const l=e.skip?t:e,o=t,c=n.skip?t:n,u=Id(o,l),h=Id(c,o);let p=u/(u+h),m=h/(u+h);p=isNaN(p)?0:p,m=isNaN(m)?0:m;const x=r*p,N=r*m;return{previous:{x:o.x-x*(c.x-l.x),y:o.y-x*(c.y-l.y)},next:{x:o.x+N*(c.x-l.x),y:o.y+N*(c.y-l.y)}}}function o1(e,t,n){const r=e.length;let l,o,c,u,h,p=Wi(e,0);for(let m=0;m<r-1;++m)if(h=p,p=Wi(e,m+1),!(!h||!p)){if(qr(t[m],0,a1)){n[m]=n[m+1]=0;continue}l=n[m]/t[m],o=n[m+1]/t[m],u=Math.pow(l,2)+Math.pow(o,2),!(u<=9)&&(c=3/Math.sqrt(u),n[m]=l*c*t[m],n[m+1]=o*c*t[m])}}function c1(e,t,n="x"){const r=ax(n),l=e.length;let o,c,u,h=Wi(e,0);for(let p=0;p<l;++p){if(c=u,u=h,h=Wi(e,p+1),!u)continue;const m=u[n],x=u[r];c&&(o=(m-c[n])/3,u[`cp1${n}`]=m-o,u[`cp1${r}`]=x-o*t[p]),h&&(o=(h[n]-m)/3,u[`cp2${n}`]=m+o,u[`cp2${r}`]=x+o*t[p])}}function d1(e,t="x"){const n=ax(t),r=e.length,l=Array(r).fill(0),o=Array(r);let c,u,h,p=Wi(e,0);for(c=0;c<r;++c)if(u=h,h=p,p=Wi(e,c+1),!!h){if(p){const m=p[t]-h[t];l[c]=m!==0?(p[n]-h[n])/m:0}o[c]=u?p?Ds(l[c-1])!==Ds(l[c])?0:(l[c-1]+l[c])/2:l[c-1]:l[c]}o1(e,l,o),c1(e,o,t)}function Dl(e,t,n){return Math.max(Math.min(e,n),t)}function u1(e,t){let n,r,l,o,c,u=na(e[0],t);for(n=0,r=e.length;n<r;++n)c=o,o=u,u=n<r-1&&na(e[n+1],t),o&&(l=e[n],c&&(l.cp1x=Dl(l.cp1x,t.left,t.right),l.cp1y=Dl(l.cp1y,t.top,t.bottom)),u&&(l.cp2x=Dl(l.cp2x,t.left,t.right),l.cp2y=Dl(l.cp2y,t.top,t.bottom)))}function h1(e,t,n,r,l){let o,c,u,h;if(t.spanGaps&&(e=e.filter(p=>!p.skip)),t.cubicInterpolationMode==="monotone")d1(e,l);else{let p=r?e[e.length-1]:e[0];for(o=0,c=e.length;o<c;++o)u=e[o],h=l1(p,u,e[Math.min(o+1,c-(r?0:1))%c],t.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}t.capBezierPoints&&u1(e,n)}function fu(){return typeof window<"u"&&typeof document<"u"}function pu(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function to(e,t,n){let r;return typeof e=="string"?(r=parseInt(e,10),e.indexOf("%")!==-1&&(r=r/100*t.parentNode[n])):r=e,r}const go=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function f1(e,t){return go(e).getPropertyValue(t)}const p1=["top","right","bottom","left"];function ti(e,t,n){const r={};n=n?"-"+n:"";for(let l=0;l<4;l++){const o=p1[l];r[o]=parseFloat(e[t+"-"+o+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const m1=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function g1(e,t){const n=e.touches,r=n&&n.length?n[0]:e,{offsetX:l,offsetY:o}=r;let c=!1,u,h;if(m1(l,o,e.target))u=l,h=o;else{const p=t.getBoundingClientRect();u=r.clientX-p.left,h=r.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Xn(e,t){if("native"in e)return e;const{canvas:n,currentDevicePixelRatio:r}=t,l=go(n),o=l.boxSizing==="border-box",c=ti(l,"padding"),u=ti(l,"border","width"),{x:h,y:p,box:m}=g1(e,n),x=c.left+(m&&u.left),N=c.top+(m&&u.top);let{width:w,height:b}=t;return o&&(w-=c.width+u.width,b-=c.height+u.height),{x:Math.round((h-x)/w*n.width/r),y:Math.round((p-N)/b*n.height/r)}}function x1(e,t,n){let r,l;if(t===void 0||n===void 0){const o=e&&pu(e);if(!o)t=e.clientWidth,n=e.clientHeight;else{const c=o.getBoundingClientRect(),u=go(o),h=ti(u,"border","width"),p=ti(u,"padding");t=c.width-p.width-h.width,n=c.height-p.height-h.height,r=to(u.maxWidth,o,"clientWidth"),l=to(u.maxHeight,o,"clientHeight")}}return{width:t,height:n,maxWidth:r||Zl,maxHeight:l||Zl}}const bn=e=>Math.round(e*10)/10;function v1(e,t,n,r){const l=go(e),o=ti(l,"margin"),c=to(l.maxWidth,e,"clientWidth")||Zl,u=to(l.maxHeight,e,"clientHeight")||Zl,h=x1(e,t,n);let{width:p,height:m}=h;if(l.boxSizing==="content-box"){const N=ti(l,"border","width"),w=ti(l,"padding");p-=w.width+N.width,m-=w.height+N.height}return p=Math.max(0,p-o.width),m=Math.max(0,r?p/r:m-o.height),p=bn(Math.min(p,c,h.maxWidth)),m=bn(Math.min(m,u,h.maxHeight)),p&&!m&&(m=bn(p/2)),(t!==void 0||n!==void 0)&&r&&h.height&&m>h.height&&(m=h.height,p=bn(Math.floor(m*r))),{width:p,height:m}}function Gp(e,t,n){const r=t||1,l=bn(e.height*r),o=bn(e.width*r);e.height=bn(e.height),e.width=bn(e.width);const c=e.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${e.height}px`,c.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||c.height!==l||c.width!==o?(e.currentDevicePixelRatio=r,c.height=l,c.width=o,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}const y1=(function(){let e=!1;try{const t={get passive(){return e=!0,!1}};fu()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e})();function Jp(e,t){const n=f1(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Gn(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function b1(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r==="middle"?n<.5?e.y:t.y:r==="after"?n<1?e.y:t.y:n>0?t.y:e.y}}function j1(e,t,n,r){const l={x:e.cp2x,y:e.cp2y},o={x:t.cp1x,y:t.cp1y},c=Gn(e,l,n),u=Gn(l,o,n),h=Gn(o,t,n),p=Gn(c,u,n),m=Gn(u,h,n);return Gn(p,m,n)}const N1=function(e,t){return{x(n){return e+e+t-n},setWidth(n){t=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,r){return n-r},leftForLtr(n,r){return n-r}}},w1=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Bi(e,t,n){return e?N1(t,n):w1()}function lx(e,t){let n,r;(t==="ltr"||t==="rtl")&&(n=e.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",t,"important"),e.prevTextDirection=r)}function ox(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function cx(e){return e==="angle"?{between:sa,compare:NN,normalize:qt}:{between:Ys,compare:(t,n)=>t-n,normalize:t=>t}}function Zp({start:e,end:t,count:n,loop:r,style:l}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:l}}function k1(e,t,n){const{property:r,start:l,end:o}=n,{between:c,normalize:u}=cx(r),h=t.length;let{start:p,end:m,loop:x}=e,N,w;if(x){for(p+=h,m+=h,N=0,w=h;N<w&&c(u(t[p%h][r]),l,o);++N)p--,m--;p%=h,m%=h}return m<p&&(m+=h),{start:p,end:m,loop:x,style:e.style}}function dx(e,t,n){if(!n)return[e];const{property:r,start:l,end:o}=n,c=t.length,{compare:u,between:h,normalize:p}=cx(r),{start:m,end:x,loop:N,style:w}=k1(e,t,n),b=[];let j=!1,y=null,C,D,T;const W=()=>h(l,T,C)&&u(l,T)!==0,_=()=>u(o,C)===0||h(o,T,C),H=()=>j||W(),M=()=>!j||_();for(let R=m,A=m;R<=x;++R)D=t[R%c],!D.skip&&(C=p(D[r]),C!==T&&(j=h(C,l,o),y===null&&H()&&(y=u(C,l)===0?R:A),y!==null&&M()&&(b.push(Zp({start:y,end:R,loop:N,count:c,style:w})),y=null),A=R,T=C));return y!==null&&b.push(Zp({start:y,end:x,loop:N,count:c,style:w})),b}function ux(e,t){const n=[],r=e.segments;for(let l=0;l<r.length;l++){const o=dx(r[l],e.points,t);o.length&&n.push(...o)}return n}function _1(e,t,n,r){let l=0,o=t-1;if(n&&!r)for(;l<t&&!e[l].skip;)l++;for(;l<t&&e[l].skip;)l++;for(l%=t,n&&(o+=l);o>l&&e[o%t].skip;)o--;return o%=t,{start:l,end:o}}function S1(e,t,n,r){const l=e.length,o=[];let c=t,u=e[t],h;for(h=t+1;h<=n;++h){const p=e[h%l];p.skip||p.stop?u.skip||(r=!1,o.push({start:t%l,end:(h-1)%l,loop:r}),t=c=p.stop?h:null):(c=h,u.skip&&(t=h)),u=p}return c!==null&&o.push({start:t%l,end:c%l,loop:r}),o}function C1(e,t){const n=e.points,r=e.options.spanGaps,l=n.length;if(!l)return[];const o=!!e._loop,{start:c,end:u}=_1(n,l,o,r);if(r===!0)return em(e,[{start:c,end:u,loop:o}],n,t);const h=u<c?u+l:u,p=!!e._fullLoop&&c===0&&u===l-1;return em(e,S1(n,c,h,p),n,t)}function em(e,t,n,r){return!r||!r.setContext||!n?t:E1(e,t,n,r)}function E1(e,t,n,r){const l=e._chart.getContext(),o=tm(e.options),{_datasetIndex:c,options:{spanGaps:u}}=e,h=n.length,p=[];let m=o,x=t[0].start,N=x;function w(b,j,y,C){const D=u?-1:1;if(b!==j){for(b+=h;n[b%h].skip;)b-=D;for(;n[j%h].skip;)j+=D;b%h!==j%h&&(p.push({start:b%h,end:j%h,loop:y,style:C}),m=C,x=j%h)}}for(const b of t){x=u?x:b.start;let j=n[x%h],y;for(N=x+1;N<=b.end;N++){const C=n[N%h];y=tm(r.setContext(li(l,{type:"segment",p0:j,p1:C,p0DataIndex:(N-1)%h,p1DataIndex:N%h,datasetIndex:c}))),R1(y,m)&&w(x,N-1,b.loop,m),j=C,m=y}x<N-1&&w(x,N-1,b.loop,m)}return p}function tm(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function R1(e,t){if(!t)return!1;const n=[],r=function(l,o){return lu(o)?(n.includes(o)||n.push(o),n.indexOf(o)):o};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Pl(e,t,n){return e.options.clip?e[n]:t[n]}function D1(e,t){const{xScale:n,yScale:r}=e;return n&&r?{left:Pl(n,t,"left"),right:Pl(n,t,"right"),top:Pl(r,t,"top"),bottom:Pl(r,t,"bottom")}:t}function hx(e,t){const n=t._clip;if(n.disabled)return!1;const r=D1(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class P1{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,n,r,l){const o=n.listeners[l],c=n.duration;o.forEach(u=>u({chart:t,initial:n.initial,numSteps:c,currentStep:Math.min(r-n.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Gg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let n=0;this._charts.forEach((r,l)=>{if(!r.running||!r.items.length)return;const o=r.items;let c=o.length-1,u=!1,h;for(;c>=0;--c)h=o[c],h._active?(h._total>r.duration&&(r.duration=h._total),h.tick(t),u=!0):(o[c]=o[o.length-1],o.pop());u&&(l.draw(),this._notify(l,r,t,"progress")),o.length||(r.running=!1,this._notify(l,r,t,"complete"),r.initial=!1),n+=o.length}),this._lastDate=t,n===0&&(this._running=!1)}_getAnims(t){const n=this._charts;let r=n.get(t);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(t,r)),r}listen(t,n,r){this._getAnims(t).listeners[n].push(r)}add(t,n){!n||!n.length||this._getAnims(t).items.push(...n)}has(t){return this._getAnims(t).items.length>0}start(t){const n=this._charts.get(t);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((r,l)=>Math.max(r,l._duration),0),this._refresh())}running(t){if(!this._running)return!1;const n=this._charts.get(t);return!(!n||!n.running||!n.items.length)}stop(t){const n=this._charts.get(t);if(!n||!n.items.length)return;const r=n.items;let l=r.length-1;for(;l>=0;--l)r[l].cancel();n.items=[],this._notify(t,n,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ws=new P1;const sm="transparent",A1={boolean(e,t,n){return n>.5?t:e},color(e,t,n){const r=Vp(e||sm),l=r.valid&&Vp(t||sm);return l&&l.valid?l.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}};class T1{constructor(t,n,r,l){const o=n[r];l=Rl([t.to,l,o,t.from]);const c=Rl([t.from,o,l]);this._active=!0,this._fn=t.fn||A1[t.type||typeof c],this._easing=Yr[t.easing]||Yr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=n,this._prop=r,this._from=c,this._to=l,this._promises=void 0}active(){return this._active}update(t,n,r){if(this._active){this._notify(!1);const l=this._target[this._prop],o=r-this._start,c=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(c,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Rl([t.to,n,l,t.from]),this._from=Rl([t.from,l,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const n=t-this._start,r=this._duration,l=this._prop,o=this._from,c=this._loop,u=this._to;let h;if(this._active=o!==u&&(c||n<r),!this._active){this._target[l]=u,this._notify(!0);return}if(n<0){this._target[l]=o;return}h=n/r%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[l]=this._fn(o,u,h)}wait(){const t=this._promises||(this._promises=[]);return new Promise((n,r)=>{t.push({res:n,rej:r})})}_notify(t){const n=t?"res":"rej",r=this._promises||[];for(let l=0;l<r.length;l++)r[l][n]()}}class fx{constructor(t,n){this._chart=t,this._properties=new Map,this.configure(n)}configure(t){if(!Pe(t))return;const n=Object.keys(tt.animation),r=this._properties;Object.getOwnPropertyNames(t).forEach(l=>{const o=t[l];if(!Pe(o))return;const c={};for(const u of n)c[u]=o[u];(at(o.properties)&&o.properties||[l]).forEach(u=>{(u===l||!r.has(u))&&r.set(u,c)})})}_animateOptions(t,n){const r=n.options,l=L1(t,r);if(!l)return[];const o=this._createAnimations(l,r);return r.$shared&&M1(t.options.$animations,r).then(()=>{t.options=r},()=>{}),o}_createAnimations(t,n){const r=this._properties,l=[],o=t.$animations||(t.$animations={}),c=Object.keys(n),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){l.push(...this._animateOptions(t,n));continue}const m=n[p];let x=o[p];const N=r.get(p);if(x)if(N&&x.active()){x.update(N,m,u);continue}else x.cancel();if(!N||!N.duration){t[p]=m;continue}o[p]=x=new T1(N,t,p,m),l.push(x)}return l}update(t,n){if(this._properties.size===0){Object.assign(t,n);return}const r=this._createAnimations(t,n);if(r.length)return Ws.add(this._chart,r),!0}}function M1(e,t){const n=[],r=Object.keys(t);for(let l=0;l<r.length;l++){const o=e[r[l]];o&&o.active()&&n.push(o.wait())}return Promise.all(n)}function L1(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function nm(e,t){const n=e&&e.options||{},r=n.reverse,l=n.min===void 0?t:0,o=n.max===void 0?t:0;return{start:r?o:l,end:r?l:o}}function O1(e,t,n){if(n===!1)return!1;const r=nm(e,n),l=nm(t,n);return{top:l.end,right:r.end,bottom:l.start,left:r.start}}function I1(e){let t,n,r,l;return Pe(e)?(t=e.top,n=e.right,r=e.bottom,l=e.left):t=n=r=l=e,{top:t,right:n,bottom:r,left:l,disabled:e===!1}}function px(e,t){const n=[],r=e._getSortedDatasetMetas(t);let l,o;for(l=0,o=r.length;l<o;++l)n.push(r[l].index);return n}function im(e,t,n,r={}){const l=e.keys,o=r.mode==="single";let c,u,h,p;if(t===null)return;let m=!1;for(c=0,u=l.length;c<u;++c){if(h=+l[c],h===n){if(m=!0,r.all)continue;break}p=e.values[h],St(p)&&(o||t===0||Ds(t)===Ds(p))&&(t+=p)}return!m&&!r.all?0:t}function z1(e,t){const{iScale:n,vScale:r}=t,l=n.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",c=Object.keys(e),u=new Array(c.length);let h,p,m;for(h=0,p=c.length;h<p;++h)m=c[h],u[h]={[l]:m,[o]:e[m]};return u}function xd(e,t){const n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function F1(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function B1(e){const{min:t,max:n,minDefined:r,maxDefined:l}=e.getUserBounds();return{min:r?t:Number.NEGATIVE_INFINITY,max:l?n:Number.POSITIVE_INFINITY}}function $1(e,t,n){const r=e[t]||(e[t]={});return r[n]||(r[n]={})}function rm(e,t,n,r){for(const l of t.getMatchingVisibleMetas(r).reverse()){const o=e[l.index];if(n&&o>0||!n&&o<0)return l.index}return null}function am(e,t){const{chart:n,_cachedMeta:r}=e,l=n._stacks||(n._stacks={}),{iScale:o,vScale:c,index:u}=r,h=o.axis,p=c.axis,m=F1(o,c,r),x=t.length;let N;for(let w=0;w<x;++w){const b=t[w],{[h]:j,[p]:y}=b,C=b._stacks||(b._stacks={});N=C[p]=$1(l,m,j),N[u]=y,N._top=rm(N,c,!0,r.type),N._bottom=rm(N,c,!1,r.type);const D=N._visualValues||(N._visualValues={});D[u]=y}}function vd(e,t){const n=e.scales;return Object.keys(n).filter(r=>n[r].axis===t).shift()}function U1(e,t){return li(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function W1(e,t,n){return li(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:"default",type:"data"})}function Lr(e,t){const n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t=t||e._parsed;for(const l of t){const o=l._stacks;if(!o||o[r]===void 0||o[r][n]===void 0)return;delete o[r][n],o[r]._visualValues!==void 0&&o[r]._visualValues[n]!==void 0&&delete o[r]._visualValues[n]}}}const yd=e=>e==="reset"||e==="none",lm=(e,t)=>t?e:Object.assign({},e),H1=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:px(n,!0),values:null};class si{constructor(t,n){this.chart=t,this._ctx=t.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xd(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Lr(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,n=this._cachedMeta,r=this.getDataset(),l=(x,N,w,b)=>x==="x"?N:x==="r"?b:w,o=n.xAxisID=Re(r.xAxisID,vd(t,"x")),c=n.yAxisID=Re(r.yAxisID,vd(t,"y")),u=n.rAxisID=Re(r.rAxisID,vd(t,"r")),h=n.indexAxis,p=n.iAxisID=l(h,o,c,u),m=n.vAxisID=l(h,c,o,u);n.xScale=this.getScaleForId(o),n.yScale=this.getScaleForId(c),n.rScale=this.getScaleForId(u),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const n=this._cachedMeta;return t===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Up(this._data,this),t._stacked&&Lr(t)}_dataCheck(){const t=this.getDataset(),n=t.data||(t.data=[]),r=this._data;if(Pe(n)){const l=this._cachedMeta;this._data=z1(n,l)}else if(r!==n){if(r){Up(r,this);const l=this._cachedMeta;Lr(l),l._parsed=[]}n&&Object.isExtensible(n)&&SN(n,this),this._syncList=[],this._data=n}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const n=this._cachedMeta,r=this.getDataset();let l=!1;this._dataCheck();const o=n._stacked;n._stacked=xd(n.vScale,n),n.stack!==r.stack&&(l=!0,Lr(n),n.stack=r.stack),this._resyncElements(t),(l||o!==n._stacked)&&(am(this,n._parsed),n._stacked=xd(n.vScale,n))}configure(){const t=this.chart.config,n=t.datasetScopeKeys(this._type),r=t.getOptionScopes(this.getDataset(),n,!0);this.options=t.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,n){const{_cachedMeta:r,_data:l}=this,{iScale:o,_stacked:c}=r,u=o.axis;let h=t===0&&n===l.length?!0:r._sorted,p=t>0&&r._parsed[t-1],m,x,N;if(this._parsing===!1)r._parsed=l,r._sorted=!0,N=l;else{at(l[t])?N=this.parseArrayData(r,l,t,n):Pe(l[t])?N=this.parseObjectData(r,l,t,n):N=this.parsePrimitiveData(r,l,t,n);const w=()=>x[u]===null||p&&x[u]<p[u];for(m=0;m<n;++m)r._parsed[m+t]=x=N[m],h&&(w()&&(h=!1),p=x);r._sorted=h}c&&am(this,N)}parsePrimitiveData(t,n,r,l){const{iScale:o,vScale:c}=t,u=o.axis,h=c.axis,p=o.getLabels(),m=o===c,x=new Array(l);let N,w,b;for(N=0,w=l;N<w;++N)b=N+r,x[N]={[u]:m||o.parse(p[b],b),[h]:c.parse(n[b],b)};return x}parseArrayData(t,n,r,l){const{xScale:o,yScale:c}=t,u=new Array(l);let h,p,m,x;for(h=0,p=l;h<p;++h)m=h+r,x=n[m],u[h]={x:o.parse(x[0],m),y:c.parse(x[1],m)};return u}parseObjectData(t,n,r,l){const{xScale:o,yScale:c}=t,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(l);let m,x,N,w;for(m=0,x=l;m<x;++m)N=m+r,w=n[N],p[m]={x:o.parse(ii(w,u),N),y:c.parse(ii(w,h),N)};return p}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,n,r){const l=this.chart,o=this._cachedMeta,c=n[t.axis],u={keys:px(l,!0),values:n._stacks[t.axis]._visualValues};return im(u,c,o.index,{mode:r})}updateRangeFromParsed(t,n,r,l){const o=r[n.axis];let c=o===null?NaN:o;const u=l&&r._stacks[n.axis];l&&u&&(l.values=u,c=im(l,o,this._cachedMeta.index)),t.min=Math.min(t.min,c),t.max=Math.max(t.max,c)}getMinMax(t,n){const r=this._cachedMeta,l=r._parsed,o=r._sorted&&t===r.iScale,c=l.length,u=this._getOtherScale(t),h=H1(n,r,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:x}=B1(u);let N,w;function b(){w=l[N];const j=w[u.axis];return!St(w[t.axis])||m>j||x<j}for(N=0;N<c&&!(!b()&&(this.updateRangeFromParsed(p,t,w,h),o));++N);if(o){for(N=c-1;N>=0;--N)if(!b()){this.updateRangeFromParsed(p,t,w,h);break}}return p}getAllParsedValues(t){const n=this._cachedMeta._parsed,r=[];let l,o,c;for(l=0,o=n.length;l<o;++l)c=n[l][t.axis],St(c)&&r.push(c);return r}getMaxOverflow(){return!1}getLabelAndValue(t){const n=this._cachedMeta,r=n.iScale,l=n.vScale,o=this.getParsed(t);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:l?""+l.getLabelForValue(o[l.axis]):""}}_update(t){const n=this._cachedMeta;this.update(t||"default"),n._clip=I1(Re(this.options.clip,O1(n.xScale,n.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,n=this.chart,r=this._cachedMeta,l=r.data||[],o=n.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||l.length-u,p=this.options.drawActiveElementsOnTop;let m;for(r.dataset&&r.dataset.draw(t,o,u,h),m=u;m<u+h;++m){const x=l[m];x.hidden||(x.active&&p?c.push(x):x.draw(t,o))}for(m=0;m<c.length;++m)c[m].draw(t,o)}getStyle(t,n){const r=n?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(t||0,r)}getContext(t,n,r){const l=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const c=this._cachedMeta.data[t];o=c.$context||(c.$context=W1(this.getContext(),t,c)),o.parsed=this.getParsed(t),o.raw=l.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=U1(this.chart.getContext(),this.index)),o.dataset=l,o.index=o.datasetIndex=this.index;return o.active=!!n,o.mode=r,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,n){return this._resolveElementOptions(this.dataElementType.id,n,t)}_resolveElementOptions(t,n="default",r){const l=n==="active",o=this._cachedDataOpts,c=t+"-"+n,u=o[c],h=this.enableOptionSharing&&ea(r);if(u)return lm(u,h);const p=this.chart.config,m=p.datasetElementScopeKeys(this._type,t),x=l?[`${t}Hover`,"hover",t,""]:[t,""],N=p.getOptionScopes(this.getDataset(),m),w=Object.keys(tt.elements[t]),b=()=>this.getContext(r,l,n),j=p.resolveNamedOptions(N,w,b,x);return j.$shared&&(j.$shared=h,o[c]=Object.freeze(lm(j,h))),j}_resolveAnimations(t,n,r){const l=this.chart,o=this._cachedDataOpts,c=`animation-${n}`,u=o[c];if(u)return u;let h;if(l.options.animation!==!1){const m=this.chart.config,x=m.datasetAnimationScopeKeys(this._type,n),N=m.getOptionScopes(this.getDataset(),x);h=m.createResolver(N,this.getContext(t,r,n))}const p=new fx(l,h&&h.animations);return h&&h._cacheable&&(o[c]=Object.freeze(p)),p}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,n){return!n||yd(t)||this.chart._animationsDisabled}_getSharedOptions(t,n){const r=this.resolveDataElementOptions(t,n),l=this._sharedOptions,o=this.getSharedOptions(r),c=this.includeOptions(n,o)||o!==l;return this.updateSharedOptions(o,n,r),{sharedOptions:o,includeOptions:c}}updateElement(t,n,r,l){yd(l)?Object.assign(t,r):this._resolveAnimations(n,l).update(t,r)}updateSharedOptions(t,n,r){t&&!yd(n)&&this._resolveAnimations(void 0,n).update(t,r)}_setStyle(t,n,r,l){t.active=l;const o=this.getStyle(n,l);this._resolveAnimations(n,r,l).update(t,{options:!l&&this.getSharedOptions(o)||o})}removeHoverStyle(t,n,r){this._setStyle(t,r,"active",!1)}setHoverStyle(t,n,r){this._setStyle(t,r,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const n=this._data,r=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const l=r.length,o=n.length,c=Math.min(o,l);c&&this.parse(0,c),o>l?this._insertElements(l,o-l,t):o<l&&this._removeElements(o,l-o)}_insertElements(t,n,r=!0){const l=this._cachedMeta,o=l.data,c=t+n;let u;const h=p=>{for(p.length+=n,u=p.length-1;u>=c;u--)p[u]=p[u-n]};for(h(o),u=t;u<c;++u)o[u]=new this.dataElementType;this._parsing&&h(l._parsed),this.parse(t,n),r&&this.updateElements(o,t,n,"reset")}updateElements(t,n,r,l){}_removeElements(t,n){const r=this._cachedMeta;if(this._parsing){const l=r._parsed.splice(t,n);r._stacked&&Lr(r,l)}r.data.splice(t,n)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[n,r,l]=t;this[n](r,l)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,n){n&&this._sync(["_removeElements",t,n]);const r=arguments.length-2;r&&this._sync(["_insertElements",t,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}je(si,"defaults",{}),je(si,"datasetElementType",null),je(si,"dataElementType",null);function V1(e,t){if(!e._cache.$bar){const n=e.getMatchingVisibleMetas(t);let r=[];for(let l=0,o=n.length;l<o;l++)r=r.concat(n[l].controller.getAllParsedValues(e));e._cache.$bar=Xg(r.sort((l,o)=>l-o))}return e._cache.$bar}function q1(e){const t=e.iScale,n=V1(t,e.type);let r=t._length,l,o,c,u;const h=()=>{c===32767||c===-32768||(ea(u)&&(r=Math.min(r,Math.abs(c-u)||r)),u=c)};for(l=0,o=n.length;l<o;++l)c=t.getPixelForValue(n[l]),h();for(u=void 0,l=0,o=t.ticks.length;l<o;++l)c=t.getPixelForTick(l),h();return r}function Y1(e,t,n,r){const l=n.barThickness;let o,c;return Oe(l)?(o=t.min*n.categoryPercentage,c=n.barPercentage):(o=l*r,c=1),{chunk:o/r,ratio:c,start:t.pixels[e]-o/2}}function Q1(e,t,n,r){const l=t.pixels,o=l[e];let c=e>0?l[e-1]:null,u=e<l.length-1?l[e+1]:null;const h=n.categoryPercentage;c===null&&(c=o-(u===null?t.end-t.start:u-o)),u===null&&(u=o+o-c);const p=o-(o-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/r,ratio:n.barPercentage,start:p}}function K1(e,t,n,r){const l=n.parse(e[0],r),o=n.parse(e[1],r),c=Math.min(l,o),u=Math.max(l,o);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),t[n.axis]=p,t._custom={barStart:h,barEnd:p,start:l,end:o,min:c,max:u}}function mx(e,t,n,r){return at(e)?K1(e,t,n,r):t[n.axis]=n.parse(e,r),t}function om(e,t,n,r){const l=e.iScale,o=e.vScale,c=l.getLabels(),u=l===o,h=[];let p,m,x,N;for(p=n,m=n+r;p<m;++p)N=t[p],x={},x[l.axis]=u||l.parse(c[p],p),h.push(mx(N,x,o,p));return h}function bd(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function X1(e,t,n){return e!==0?Ds(e):(t.isHorizontal()?1:-1)*(t.min>=n?1:-1)}function G1(e){let t,n,r,l,o;return e.horizontal?(t=e.base>e.x,n="left",r="right"):(t=e.base<e.y,n="bottom",r="top"),t?(l="end",o="start"):(l="start",o="end"),{start:n,end:r,reverse:t,top:l,bottom:o}}function J1(e,t,n,r){let l=t.borderSkipped;const o={};if(!l){e.borderSkipped=o;return}if(l===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:m}=G1(e);l==="middle"&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?l=p:(n._bottom||0)===r?l=m:(o[cm(m,c,u,h)]=!0,l=p)),o[cm(l,c,u,h)]=!0,e.borderSkipped=o}function cm(e,t,n,r){return r?(e=Z1(e,t,n),e=dm(e,n,t)):e=dm(e,t,n),e}function Z1(e,t,n){return e===t?n:e===n?t:e}function dm(e,t,n){return e==="start"?t:e==="end"?n:e}function ew(e,{inflateAmount:t},n){e.inflateAmount=t==="auto"?n===1?.33:0:t}class Hl extends si{parsePrimitiveData(t,n,r,l){return om(t,n,r,l)}parseArrayData(t,n,r,l){return om(t,n,r,l)}parseObjectData(t,n,r,l){const{iScale:o,vScale:c}=t,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=o.axis==="x"?u:h,m=c.axis==="x"?u:h,x=[];let N,w,b,j;for(N=r,w=r+l;N<w;++N)j=n[N],b={},b[o.axis]=o.parse(ii(j,p),N),x.push(mx(ii(j,m),b,c,N));return x}updateRangeFromParsed(t,n,r,l){super.updateRangeFromParsed(t,n,r,l);const o=r._custom;o&&n===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const n=this._cachedMeta,{iScale:r,vScale:l}=n,o=this.getParsed(t),c=o._custom,u=bd(c)?"["+c.start+", "+c.end+"]":""+l.getLabelForValue(o[l.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,t)}updateElements(t,n,r,l){const o=l==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),m=this._getRuler(),{sharedOptions:x,includeOptions:N}=this._getSharedOptions(n,l);for(let w=n;w<n+r;w++){const b=this.getParsed(w),j=o||Oe(b[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,m),C=(b._stacks||{})[u.axis],D={horizontal:p,base:j.base,enableBorderRadius:!C||bd(b._custom)||c===C._top||c===C._bottom,x:p?j.head:y.center,y:p?y.center:j.head,height:p?y.size:Math.abs(j.size),width:p?Math.abs(j.size):y.size};N&&(D.options=x||this.resolveDataElementOptions(w,t[w].active?"active":l));const T=D.options||t[w].options;J1(D,T,C,c),ew(D,T,m.ratio),this.updateElement(t[w],w,D,l)}}_getStacks(t,n){const{iScale:r}=this._cachedMeta,l=r.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),o=r.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(n),h=u&&u[r.axis],p=m=>{const x=m._parsed.find(w=>w[r.axis]===h),N=x&&x[m.vScale.axis];if(Oe(N)||isNaN(N))return!0};for(const m of l)if(!(n!==void 0&&p(m))&&((o===!1||c.indexOf(m.stack)===-1||o===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===t))break;return c.length||c.push(void 0),c}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(t).filter(r=>t[r].axis===n).shift()}_getAxis(){const t={},n=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)t[Re(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,n)]=!0;return Object.keys(t)}_getStackIndex(t,n,r){const l=this._getStacks(t,r),o=n!==void 0?l.indexOf(n):-1;return o===-1?l.length-1:o}_getRuler(){const t=this.options,n=this._cachedMeta,r=n.iScale,l=[];let o,c;for(o=0,c=n.data.length;o<c;++o)l.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const u=t.barThickness;return{min:u||q1(n),pixels:l,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:t.grouped,ratio:u?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:n,_stacked:r,index:l},options:{base:o,minBarLength:c}}=this,u=o||0,h=this.getParsed(t),p=h._custom,m=bd(p);let x=h[n.axis],N=0,w=r?this.applyStack(n,h,r):x,b,j;w!==x&&(N=w-x,w=x),m&&(x=p.barStart,w=p.barEnd-p.barStart,x!==0&&Ds(x)!==Ds(p.barEnd)&&(N=0),N+=x);const y=!Oe(o)&&!m?o:N;let C=n.getPixelForValue(y);if(this.chart.getDataVisibility(t)?b=n.getPixelForValue(N+w):b=C,j=b-C,Math.abs(j)<c){j=X1(j,n,u)*c,x===u&&(C-=j/2);const D=n.getPixelForDecimal(0),T=n.getPixelForDecimal(1),W=Math.min(D,T),_=Math.max(D,T);C=Math.max(Math.min(C,_),W),b=C+j,r&&!m&&(h._stacks[n.axis]._visualValues[l]=n.getValueForPixel(b)-n.getValueForPixel(C))}if(C===n.getPixelForValue(u)){const D=Ds(j)*n.getLineWidthForValue(u)/2;C+=D,j-=D}return{size:j,base:C,head:b,center:b+j/2}}_calculateBarIndexPixels(t,n){const r=n.scale,l=this.options,o=l.skipNull,c=Re(l.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(n.grouped){const m=o?this._getStackCount(t):n.stackCount,x=l.barThickness==="flex"?Q1(t,n,l,m*p):Y1(t,n,l,m*p),N=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(Re(N,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+w;u=x.start+x.chunk*b+x.chunk/2,h=Math.min(c,x.chunk*x.ratio)}else u=r.getPixelForValue(this.getParsed(t)[r.axis],t),h=Math.min(c,n.min*n.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const t=this._cachedMeta,n=t.vScale,r=t.data,l=r.length;let o=0;for(;o<l;++o)this.getParsed(o)[n.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}je(Hl,"id","bar"),je(Hl,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),je(Hl,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function tw(e,t,n){let r=1,l=1,o=0,c=0;if(t<Ge){const u=e,h=u+t,p=Math.cos(u),m=Math.sin(u),x=Math.cos(h),N=Math.sin(h),w=(T,W,_)=>sa(T,u,h,!0)?1:Math.max(W,W*n,_,_*n),b=(T,W,_)=>sa(T,u,h,!0)?-1:Math.min(W,W*n,_,_*n),j=w(0,p,x),y=w(dt,m,N),C=b(Be,p,x),D=b(Be+dt,m,N);r=(j-C)/2,l=(y-D)/2,o=-(j+C)/2,c=-(y+D)/2}return{ratioX:r,ratioY:l,offsetX:o,offsetY:c}}class $r extends si{constructor(t,n){super(t,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,n){const r=this.getDataset().data,l=this._cachedMeta;if(this._parsing===!1)l._parsed=r;else{let o=h=>+r[h];if(Pe(r[t])){const{key:h="value"}=this._parsing;o=p=>+ii(r[p],h)}let c,u;for(c=t,u=t+n;c<u;++c)l._parsed[c]=o(c)}}_getRotation(){return qs(this.options.rotation-90)}_getCircumference(){return qs(this.options.circumference)}_getRotationExtents(){let t=Ge,n=-Ge;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const l=this.chart.getDatasetMeta(r).controller,o=l._getRotation(),c=l._getCircumference();t=Math.min(t,o),n=Math.max(n,o+c)}return{rotation:t,circumference:n-t}}update(t){const n=this.chart,{chartArea:r}=n,l=this._cachedMeta,o=l.data,c=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,u=Math.max((Math.min(r.width,r.height)-c)/2,0),h=Math.min(cN(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:m,rotation:x}=this._getRotationExtents(),{ratioX:N,ratioY:w,offsetX:b,offsetY:j}=tw(x,m,h),y=(r.width-c)/N,C=(r.height-c)/w,D=Math.max(Math.min(y,C)/2,0),T=Vg(this.options.radius,D),W=Math.max(T*h,0),_=(T-W)/this._getVisibleDatasetWeightTotal();this.offsetX=b*T,this.offsetY=j*T,l.total=this.calculateTotal(),this.outerRadius=T-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*p,0),this.updateElements(o,0,o.length,t)}_circumference(t,n){const r=this.options,l=this._cachedMeta,o=this._getCircumference();return n&&r.animation.animateRotate||!this.chart.getDataVisibility(t)||l._parsed[t]===null||l.data[t].hidden?0:this.calculateCircumference(l._parsed[t]*o/Ge)}updateElements(t,n,r,l){const o=l==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,m=(u.left+u.right)/2,x=(u.top+u.bottom)/2,N=o&&p.animateScale,w=N?0:this.innerRadius,b=N?0:this.outerRadius,{sharedOptions:j,includeOptions:y}=this._getSharedOptions(n,l);let C=this._getRotation(),D;for(D=0;D<n;++D)C+=this._circumference(D,o);for(D=n;D<n+r;++D){const T=this._circumference(D,o),W=t[D],_={x:m+this.offsetX,y:x+this.offsetY,startAngle:C,endAngle:C+T,circumference:T,outerRadius:b,innerRadius:w};y&&(_.options=j||this.resolveDataElementOptions(D,W.active?"active":l)),C+=T,this.updateElement(W,D,_,l)}}calculateTotal(){const t=this._cachedMeta,n=t.data;let r=0,l;for(l=0;l<n.length;l++){const o=t._parsed[l];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(l)&&!n[l].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(t){const n=this._cachedMeta.total;return n>0&&!isNaN(t)?Ge*(Math.abs(t)/n):0}getLabelAndValue(t){const n=this._cachedMeta,r=this.chart,l=r.data.labels||[],o=ou(n._parsed[t],r.options.locale);return{label:l[t]||"",value:o}}getMaxBorderWidth(t){let n=0;const r=this.chart;let l,o,c,u,h;if(!t){for(l=0,o=r.data.datasets.length;l<o;++l)if(r.isDatasetVisible(l)){c=r.getDatasetMeta(l),t=c.data,u=c.controller;break}}if(!t)return 0;for(l=0,o=t.length;l<o;++l)h=u.resolveDataElementOptions(l),h.borderAlign!=="inner"&&(n=Math.max(n,h.borderWidth||0,h.hoverBorderWidth||0));return n}getMaxOffset(t){let n=0;for(let r=0,l=t.length;r<l;++r){const o=this.resolveDataElementOptions(r);n=Math.max(n,o.offset||0,o.hoverOffset||0)}return n}_getRingWeightOffset(t){let n=0;for(let r=0;r<t;++r)this.chart.isDatasetVisible(r)&&(n+=this._getRingWeight(r));return n}_getRingWeight(t){return Math.max(Re(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}je($r,"id","doughnut"),je($r,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),je($r,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),je($r,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const n=t.data,{labels:{pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=t.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((h,p)=>{const x=t.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:x.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(p),lineDash:x.borderDash,lineDashOffset:x.borderDashOffset,lineJoin:x.borderJoinStyle,lineWidth:x.borderWidth,strokeStyle:x.borderColor,textAlign:l,pointStyle:r,borderRadius:c&&(u||x.borderRadius),index:p}}):[]}},onClick(t,n,r){r.chart.toggleDataVisibility(n.index),r.chart.update()}}}});class Vl extends si{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const n=this._cachedMeta,{dataset:r,data:l=[],_dataset:o}=n,c=this.chart._animationsDisabled;let{start:u,count:h}=RN(n,l,c);this._drawStart=u,this._drawCount=h,DN(n)&&(u=0,h=l.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=l;const p=this.resolveDatasetElementOptions(t);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(r,void 0,{animated:!c,options:p},t),this.updateElements(l,u,h,t)}updateElements(t,n,r,l){const o=l==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:m,includeOptions:x}=this._getSharedOptions(n,l),N=c.axis,w=u.axis,{spanGaps:b,segment:j}=this.options,y=ta(b)?b:Number.POSITIVE_INFINITY,C=this.chart._animationsDisabled||o||l==="none",D=n+r,T=t.length;let W=n>0&&this.getParsed(n-1);for(let _=0;_<T;++_){const H=t[_],M=C?H:{};if(_<n||_>=D){M.skip=!0;continue}const R=this.getParsed(_),A=Oe(R[w]),K=M[N]=c.getPixelForValue(R[N],_),V=M[w]=o||A?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,R,h):R[w],_);M.skip=isNaN(K)||isNaN(V)||A,M.stop=_>0&&Math.abs(R[N]-W[N])>y,j&&(M.parsed=R,M.raw=p.data[_]),x&&(M.options=m||this.resolveDataElementOptions(_,H.active?"active":l)),C||this.updateElement(H,_,M,l),W=R}}getMaxOverflow(){const t=this._cachedMeta,n=t.dataset,r=n.options&&n.options.borderWidth||0,l=t.data||[];if(!l.length)return r;const o=l[0].size(this.resolveDataElementOptions(0)),c=l[l.length-1].size(this.resolveDataElementOptions(l.length-1));return Math.max(r,o,c)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}je(Vl,"id","line"),je(Vl,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),je(Vl,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Qn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class mu{constructor(t){je(this,"options");this.options=t||{}}static override(t){Object.assign(mu.prototype,t)}init(){}formats(){return Qn()}parse(){return Qn()}format(){return Qn()}add(){return Qn()}diff(){return Qn()}startOf(){return Qn()}endOf(){return Qn()}}var sw={_date:mu};function nw(e,t,n,r){const{controller:l,data:o,_sorted:c}=e,u=l._cachedMeta.iScale,h=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(u&&t===u.axis&&t!=="r"&&c&&o.length){const p=u._reversePixels?kN:Zn;if(r){if(l._sharedOptions){const m=o[0],x=typeof m.getRange=="function"&&m.getRange(t);if(x){const N=p(o,t,n-x),w=p(o,t,n+x);return{lo:N.lo,hi:w.hi}}}}else{const m=p(o,t,n);if(h){const{vScale:x}=l._cachedMeta,{_parsed:N}=e,w=N.slice(0,m.lo+1).reverse().findIndex(j=>!Oe(j[x.axis]));m.lo-=Math.max(0,w);const b=N.slice(m.hi).findIndex(j=>!Oe(j[x.axis]));m.hi+=Math.max(0,b)}return m}}return{lo:0,hi:o.length-1}}function xo(e,t,n,r,l){const o=e.getSortedVisibleDatasetMetas(),c=n[t];for(let u=0,h=o.length;u<h;++u){const{index:p,data:m}=o[u],{lo:x,hi:N}=nw(o[u],t,c,l);for(let w=x;w<=N;++w){const b=m[w];b.skip||r(b,p,w)}}}function iw(e){const t=e.indexOf("x")!==-1,n=e.indexOf("y")!==-1;return function(r,l){const o=t?Math.abs(r.x-l.x):0,c=n?Math.abs(r.y-l.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(c,2))}}function jd(e,t,n,r,l){const o=[];return!l&&!e.isPointInArea(t)||xo(e,n,t,function(u,h,p){!l&&!na(u,e.chartArea,0)||u.inRange(t.x,t.y,r)&&o.push({element:u,datasetIndex:h,index:p})},!0),o}function rw(e,t,n,r){let l=[];function o(c,u,h){const{startAngle:p,endAngle:m}=c.getProps(["startAngle","endAngle"],r),{angle:x}=Qg(c,{x:t.x,y:t.y});sa(x,p,m)&&l.push({element:c,datasetIndex:u,index:h})}return xo(e,n,t,o),l}function aw(e,t,n,r,l,o){let c=[];const u=iw(n);let h=Number.POSITIVE_INFINITY;function p(m,x,N){const w=m.inRange(t.x,t.y,l);if(r&&!w)return;const b=m.getCenterPoint(l);if(!(!!o||e.isPointInArea(b))&&!w)return;const y=u(t,b);y<h?(c=[{element:m,datasetIndex:x,index:N}],h=y):y===h&&c.push({element:m,datasetIndex:x,index:N})}return xo(e,n,t,p),c}function Nd(e,t,n,r,l,o){return!o&&!e.isPointInArea(t)?[]:n==="r"&&!r?rw(e,t,n,l):aw(e,t,n,r,l,o)}function um(e,t,n,r,l){const o=[],c=n==="x"?"inXRange":"inYRange";let u=!1;return xo(e,n,t,(h,p,m)=>{h[c]&&h[c](t[n],l)&&(o.push({element:h,datasetIndex:p,index:m}),u=u||h.inRange(t.x,t.y,l))}),r&&!u?[]:o}var lw={modes:{index(e,t,n,r){const l=Xn(t,e),o=n.axis||"x",c=n.includeInvisible||!1,u=n.intersect?jd(e,l,o,r,c):Nd(e,l,o,!1,r,c),h=[];return u.length?(e.getSortedVisibleDatasetMetas().forEach(p=>{const m=u[0].index,x=p.data[m];x&&!x.skip&&h.push({element:x,datasetIndex:p.index,index:m})}),h):[]},dataset(e,t,n,r){const l=Xn(t,e),o=n.axis||"xy",c=n.includeInvisible||!1;let u=n.intersect?jd(e,l,o,r,c):Nd(e,l,o,!1,r,c);if(u.length>0){const h=u[0].datasetIndex,p=e.getDatasetMeta(h).data;u=[];for(let m=0;m<p.length;++m)u.push({element:p[m],datasetIndex:h,index:m})}return u},point(e,t,n,r){const l=Xn(t,e),o=n.axis||"xy",c=n.includeInvisible||!1;return jd(e,l,o,r,c)},nearest(e,t,n,r){const l=Xn(t,e),o=n.axis||"xy",c=n.includeInvisible||!1;return Nd(e,l,o,n.intersect,r,c)},x(e,t,n,r){const l=Xn(t,e);return um(e,l,"x",n.intersect,r)},y(e,t,n,r){const l=Xn(t,e);return um(e,l,"y",n.intersect,r)}}};const gx=["left","top","right","bottom"];function Or(e,t){return e.filter(n=>n.pos===t)}function hm(e,t){return e.filter(n=>gx.indexOf(n.pos)===-1&&n.box.axis===t)}function Ir(e,t){return e.sort((n,r)=>{const l=t?r:n,o=t?n:r;return l.weight===o.weight?l.index-o.index:l.weight-o.weight})}function ow(e){const t=[];let n,r,l,o,c,u;for(n=0,r=(e||[]).length;n<r;++n)l=e[n],{position:o,options:{stack:c,stackWeight:u=1}}=l,t.push({index:n,box:l,pos:o,horizontal:l.isHorizontal(),weight:l.weight,stack:c&&o+c,stackWeight:u});return t}function cw(e){const t={};for(const n of e){const{stack:r,pos:l,stackWeight:o}=n;if(!r||!gx.includes(l))continue;const c=t[r]||(t[r]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=o}return t}function dw(e,t){const n=cw(e),{vBoxMaxWidth:r,hBoxMaxHeight:l}=t;let o,c,u;for(o=0,c=e.length;o<c;++o){u=e[o];const{fullSize:h}=u.box,p=n[u.stack],m=p&&u.stackWeight/p.weight;u.horizontal?(u.width=m?m*r:h&&t.availableWidth,u.height=l):(u.width=r,u.height=m?m*l:h&&t.availableHeight)}return n}function uw(e){const t=ow(e),n=Ir(t.filter(p=>p.box.fullSize),!0),r=Ir(Or(t,"left"),!0),l=Ir(Or(t,"right")),o=Ir(Or(t,"top"),!0),c=Ir(Or(t,"bottom")),u=hm(t,"x"),h=hm(t,"y");return{fullSize:n,leftAndTop:r.concat(o),rightAndBottom:l.concat(h).concat(c).concat(u),chartArea:Or(t,"chartArea"),vertical:r.concat(l).concat(h),horizontal:o.concat(c).concat(u)}}function fm(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function xx(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function hw(e,t,n,r){const{pos:l,box:o}=n,c=e.maxPadding;if(!Pe(l)){n.size&&(e[l]-=n.size);const x=r[n.stack]||{size:0,count:1};x.size=Math.max(x.size,n.horizontal?o.height:o.width),n.size=x.size/x.count,e[l]+=n.size}o.getPadding&&xx(c,o.getPadding());const u=Math.max(0,t.outerWidth-fm(c,e,"left","right")),h=Math.max(0,t.outerHeight-fm(c,e,"top","bottom")),p=u!==e.w,m=h!==e.h;return e.w=u,e.h=h,n.horizontal?{same:p,other:m}:{same:m,other:p}}function fw(e){const t=e.maxPadding;function n(r){const l=Math.max(t[r]-e[r],0);return e[r]+=l,l}e.y+=n("top"),e.x+=n("left"),n("right"),n("bottom")}function pw(e,t){const n=t.maxPadding;function r(l){const o={left:0,top:0,right:0,bottom:0};return l.forEach(c=>{o[c]=Math.max(t[c],n[c])}),o}return r(e?["left","right"]:["top","bottom"])}function Ur(e,t,n,r){const l=[];let o,c,u,h,p,m;for(o=0,c=e.length,p=0;o<c;++o){u=e[o],h=u.box,h.update(u.width||t.w,u.height||t.h,pw(u.horizontal,t));const{same:x,other:N}=hw(t,n,u,r);p|=x&&l.length,m=m||N,h.fullSize||l.push(u)}return p&&Ur(l,t,n,r)||m}function Al(e,t,n,r,l){e.top=n,e.left=t,e.right=t+r,e.bottom=n+l,e.width=r,e.height=l}function pm(e,t,n,r){const l=n.padding;let{x:o,y:c}=t;for(const u of e){const h=u.box,p=r[u.stack]||{placed:0,weight:1},m=u.stackWeight/p.weight||1;if(u.horizontal){const x=t.w*m,N=p.size||h.height;ea(p.start)&&(c=p.start),h.fullSize?Al(h,l.left,c,n.outerWidth-l.right-l.left,N):Al(h,t.left+p.placed,c,x,N),p.start=c,p.placed+=x,c=h.bottom}else{const x=t.h*m,N=p.size||h.width;ea(p.start)&&(o=p.start),h.fullSize?Al(h,o,l.top,N,n.outerHeight-l.bottom-l.top):Al(h,o,t.top+p.placed,N,x),p.start=o,p.placed+=x,o=h.right}}t.x=o,t.y=c}var ns={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(n){t.draw(n)}}]},e.boxes.push(t)},removeBox(e,t){const n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;const l=is(e.options.layout.padding),o=Math.max(t-l.width,0),c=Math.max(n-l.height,0),u=uw(e.boxes),h=u.vertical,p=u.horizontal;Fe(e.boxes,j=>{typeof j.beforeLayout=="function"&&j.beforeLayout()});const m=h.reduce((j,y)=>y.box.options&&y.box.options.display===!1?j:j+1,0)||1,x=Object.freeze({outerWidth:t,outerHeight:n,padding:l,availableWidth:o,availableHeight:c,vBoxMaxWidth:o/2/m,hBoxMaxHeight:c/2}),N=Object.assign({},l);xx(N,is(r));const w=Object.assign({maxPadding:N,w:o,h:c,x:l.left,y:l.top},l),b=dw(h.concat(p),x);Ur(u.fullSize,w,x,b),Ur(h,w,x,b),Ur(p,w,x,b)&&Ur(h,w,x,b),fw(w),pm(u.leftAndTop,w,x,b),w.x+=w.w,w.y+=w.h,pm(u.rightAndBottom,w,x,b),e.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Fe(u.chartArea,j=>{const y=j.box;Object.assign(y,e.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class vx{acquireContext(t,n){}releaseContext(t){return!1}addEventListener(t,n,r){}removeEventListener(t,n,r){}getDevicePixelRatio(){return 1}getMaximumSize(t,n,r,l){return n=Math.max(0,n||t.width),r=r||t.height,{width:n,height:Math.max(0,l?Math.floor(n/l):r)}}isAttached(t){return!0}updateConfig(t){}}class mw extends vx{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ql="$chartjs",gw={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},mm=e=>e===null||e==="";function xw(e,t){const n=e.style,r=e.getAttribute("height"),l=e.getAttribute("width");if(e[ql]={initial:{height:r,width:l,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",mm(l)){const o=Jp(e,"width");o!==void 0&&(e.width=o)}if(mm(r))if(e.style.height==="")e.height=e.width/(t||2);else{const o=Jp(e,"height");o!==void 0&&(e.height=o)}return e}const yx=y1?{passive:!0}:!1;function vw(e,t,n){e&&e.addEventListener(t,n,yx)}function yw(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,yx)}function bw(e,t){const n=gw[e.type]||e.type,{x:r,y:l}=Xn(e,t);return{type:n,chart:t,native:e,x:r!==void 0?r:null,y:l!==void 0?l:null}}function so(e,t){for(const n of e)if(n===t||n.contains(t))return!0}function jw(e,t,n){const r=e.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||so(u.addedNodes,r),c=c&&!so(u.removedNodes,r);c&&n()});return l.observe(document,{childList:!0,subtree:!0}),l}function Nw(e,t,n){const r=e.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||so(u.removedNodes,r),c=c&&!so(u.addedNodes,r);c&&n()});return l.observe(document,{childList:!0,subtree:!0}),l}const ra=new Map;let gm=0;function bx(){const e=window.devicePixelRatio;e!==gm&&(gm=e,ra.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function ww(e,t){ra.size||window.addEventListener("resize",bx),ra.set(e,t)}function kw(e){ra.delete(e),ra.size||window.removeEventListener("resize",bx)}function _w(e,t,n){const r=e.canvas,l=r&&pu(r);if(!l)return;const o=Jg((u,h)=>{const p=l.clientWidth;n(u,h),p<l.clientWidth&&n()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,m=h.contentRect.height;p===0&&m===0||o(p,m)});return c.observe(l),ww(e,o),c}function wd(e,t,n){n&&n.disconnect(),t==="resize"&&kw(e)}function Sw(e,t,n){const r=e.canvas,l=Jg(o=>{e.ctx!==null&&n(bw(o,e))},e);return vw(r,t,l),l}class Cw extends vx{acquireContext(t,n){const r=t&&t.getContext&&t.getContext("2d");return r&&r.canvas===t?(xw(t,n),r):null}releaseContext(t){const n=t.canvas;if(!n[ql])return!1;const r=n[ql].initial;["height","width"].forEach(o=>{const c=r[o];Oe(c)?n.removeAttribute(o):n.setAttribute(o,c)});const l=r.style||{};return Object.keys(l).forEach(o=>{n.style[o]=l[o]}),n.width=n.width,delete n[ql],!0}addEventListener(t,n,r){this.removeEventListener(t,n);const l=t.$proxies||(t.$proxies={}),c={attach:jw,detach:Nw,resize:_w}[n]||Sw;l[n]=c(t,n,r)}removeEventListener(t,n){const r=t.$proxies||(t.$proxies={}),l=r[n];if(!l)return;({attach:wd,detach:wd,resize:wd}[n]||yw)(t,n,l),r[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,n,r,l){return v1(t,n,r,l)}isAttached(t){const n=t&&pu(t);return!!(n&&n.isConnected)}}function Ew(e){return!fu()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?mw:Cw}class vs{constructor(){je(this,"x");je(this,"y");je(this,"active",!1);je(this,"options");je(this,"$animations")}tooltipPosition(t){const{x:n,y:r}=this.getProps(["x","y"],t);return{x:n,y:r}}hasValue(){return ta(this.x)&&ta(this.y)}getProps(t,n){const r=this.$animations;if(!n||!r)return this;const l={};return t.forEach(o=>{l[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),l}}je(vs,"defaults",{}),je(vs,"defaultRoutes");function Rw(e,t){const n=e.options.ticks,r=Dw(e),l=Math.min(n.maxTicksLimit||r,r),o=n.major.enabled?Aw(t):[],c=o.length,u=o[0],h=o[c-1],p=[];if(c>l)return Tw(t,p,o,c/l),p;const m=Pw(o,t,l);if(c>0){let x,N;const w=c>1?Math.round((h-u)/(c-1)):null;for(Tl(t,p,m,Oe(w)?0:u-w,u),x=0,N=c-1;x<N;x++)Tl(t,p,m,o[x],o[x+1]);return Tl(t,p,m,h,Oe(w)?t.length:h+w),p}return Tl(t,p,m),p}function Dw(e){const t=e.options.offset,n=e._tickSize(),r=e._length/n+(t?0:1),l=e._maxLength/n;return Math.floor(Math.min(r,l))}function Pw(e,t,n){const r=Mw(e),l=t.length/n;if(!r)return Math.max(l,1);const o=xN(r);for(let c=0,u=o.length-1;c<u;c++){const h=o[c];if(h>l)return h}return Math.max(l,1)}function Aw(e){const t=[];let n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Tw(e,t,n,r){let l=0,o=n[0],c;for(r=Math.ceil(r),c=0;c<e.length;c++)c===o&&(t.push(e[c]),l++,o=n[l*r])}function Tl(e,t,n,r,l){const o=Re(r,0),c=Math.min(Re(l,e.length),e.length);let u=0,h,p,m;for(n=Math.ceil(n),l&&(h=l-r,n=h/Math.floor(h/n)),m=o;m<0;)u++,m=Math.round(o+u*n);for(p=Math.max(o,0);p<c;p++)p===m&&(t.push(e[p]),u++,m=Math.round(o+u*n))}function Mw(e){const t=e.length;let n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}const Lw=e=>e==="left"?"right":e==="right"?"left":e,xm=(e,t,n)=>t==="top"||t==="left"?e[t]+n:e[t]-n,vm=(e,t)=>Math.min(t||e,e);function ym(e,t){const n=[],r=e.length/t,l=e.length;let o=0;for(;o<l;o+=r)n.push(e[Math.floor(o)]);return n}function Ow(e,t,n){const r=e.ticks.length,l=Math.min(t,r-1),o=e._startPixel,c=e._endPixel,u=1e-6;let h=e.getPixelForTick(l),p;if(!(n&&(r===1?p=Math.max(h-o,c-h):t===0?p=(e.getPixelForTick(1)-h)/2:p=(h-e.getPixelForTick(l-1))/2,h+=l<t?p:-p,h<o-u||h>c+u)))return h}function Iw(e,t){Fe(e,n=>{const r=n.gc,l=r.length/2;let o;if(l>t){for(o=0;o<l;++o)delete n.data[r[o]];r.splice(0,l)}})}function zr(e){return e.drawTicks?e.tickLength:0}function bm(e,t){if(!e.display)return 0;const n=_t(e.font,t),r=is(e.padding);return(at(e.text)?e.text.length:1)*n.lineHeight+r.height}function zw(e,t){return li(e,{scale:t,type:"scale"})}function Fw(e,t,n){return li(e,{tick:n,index:t,type:"tick"})}function Bw(e,t,n){let r=au(e);return(n&&t!=="right"||!n&&t==="right")&&(r=Lw(r)),r}function $w(e,t,n,r){const{top:l,left:o,bottom:c,right:u,chart:h}=e,{chartArea:p,scales:m}=h;let x=0,N,w,b;const j=c-l,y=u-o;if(e.isHorizontal()){if(w=Nt(r,o,u),Pe(n)){const C=Object.keys(n)[0],D=n[C];b=m[C].getPixelForValue(D)+j-t}else n==="center"?b=(p.bottom+p.top)/2+j-t:b=xm(e,n,t);N=u-o}else{if(Pe(n)){const C=Object.keys(n)[0],D=n[C];w=m[C].getPixelForValue(D)-y+t}else n==="center"?w=(p.left+p.right)/2-y+t:w=xm(e,n,t);b=Nt(r,c,l),x=n==="left"?-dt:dt}return{titleX:w,titleY:b,maxWidth:N,rotation:x}}class qi extends vs{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,n){return t}getUserBounds(){let{_userMin:t,_userMax:n,_suggestedMin:r,_suggestedMax:l}=this;return t=Cs(t,Number.POSITIVE_INFINITY),n=Cs(n,Number.NEGATIVE_INFINITY),r=Cs(r,Number.POSITIVE_INFINITY),l=Cs(l,Number.NEGATIVE_INFINITY),{min:Cs(t,r),max:Cs(n,l),minDefined:St(t),maxDefined:St(n)}}getMinMax(t){let{min:n,max:r,minDefined:l,maxDefined:o}=this.getUserBounds(),c;if(l&&o)return{min:n,max:r};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,t),l||(n=Math.min(n,c.min)),o||(r=Math.max(r,c.max));return n=o&&n>r?r:n,r=l&&n>r?n:r,{min:Cs(n,Cs(r,n)),max:Cs(r,Cs(n,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ve(this.options.beforeUpdate,[this])}update(t,n,r){const{beginAtZero:l,grace:o,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=n,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=XN(this,o,l),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?ym(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=Rw(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,n,r;this.isHorizontal()?(n=this.left,r=this.right):(n=this.top,r=this.bottom,t=!t),this._startPixel=n,this._endPixel=r,this._reversePixels=t,this._length=r-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ve(this.options.afterUpdate,[this])}beforeSetDimensions(){Ve(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ve(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Ve(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ve(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const n=this.options.ticks;let r,l,o;for(r=0,l=t.length;r<l;r++)o=t[r],o.label=Ve(n.callback,[o.value,r,t],this)}afterTickToLabelConversion(){Ve(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ve(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,n=t.ticks,r=vm(this.ticks.length,t.ticks.maxTicksLimit),l=n.minRotation||0,o=n.maxRotation;let c=l,u,h,p;if(!this._isVisible()||!n.display||l>=o||r<=1||!this.isHorizontal()){this.labelRotation=l;return}const m=this._getLabelSizes(),x=m.widest.width,N=m.highest.height,w=kt(this.chart.width-x,0,this.maxWidth);u=t.offset?this.maxWidth/r:w/(r-1),x+6>u&&(u=w/(r-(t.offset?.5:1)),h=this.maxHeight-zr(t.grid)-n.padding-bm(t.title,this.chart.options.font),p=Math.sqrt(x*x+N*N),c=jN(Math.min(Math.asin(kt((m.highest.height+6)/u,-1,1)),Math.asin(kt(h/p,-1,1))-Math.asin(kt(N/p,-1,1)))),c=Math.max(l,Math.min(o,c))),this.labelRotation=c}afterCalculateLabelRotation(){Ve(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ve(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:n,options:{ticks:r,title:l,grid:o}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=bm(l,n.options.font);if(u?(t.width=this.maxWidth,t.height=zr(o)+h):(t.height=this.maxHeight,t.width=zr(o)+h),r.display&&this.ticks.length){const{first:p,last:m,widest:x,highest:N}=this._getLabelSizes(),w=r.padding*2,b=qs(this.labelRotation),j=Math.cos(b),y=Math.sin(b);if(u){const C=r.mirror?0:y*x.width+j*N.height;t.height=Math.min(this.maxHeight,t.height+C+w)}else{const C=r.mirror?0:j*x.width+y*N.height;t.width=Math.min(this.maxWidth,t.width+C+w)}this._calculatePadding(p,m,y,j)}}this._handleMargins(),u?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,n,r,l){const{ticks:{align:o,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,x=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,w=0;h?p?(N=l*t.width,w=r*n.height):(N=r*t.height,w=l*n.width):o==="start"?w=n.width:o==="end"?N=t.width:o!=="inner"&&(N=t.width/2,w=n.width/2),this.paddingLeft=Math.max((N-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((w-x+c)*this.width/(this.width-x),0)}else{let m=n.height/2,x=t.height/2;o==="start"?(m=0,x=t.height):o==="end"&&(m=n.height,x=0),this.paddingTop=m+c,this.paddingBottom=x+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ve(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:n}=this.options;return n==="top"||n==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let n,r;for(n=0,r=t.length;n<r;n++)Oe(t[n].label)&&(t.splice(n,1),r--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const n=this.options.ticks.sampleSize;let r=this.ticks;n<r.length&&(r=ym(r,n)),this._labelSizes=t=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,n,r){const{ctx:l,_longestTextCache:o}=this,c=[],u=[],h=Math.floor(n/vm(n,r));let p=0,m=0,x,N,w,b,j,y,C,D,T,W,_;for(x=0;x<n;x+=h){if(b=t[x].label,j=this._resolveTickFontOptions(x),l.font=y=j.string,C=o[y]=o[y]||{data:{},gc:[]},D=j.lineHeight,T=W=0,!Oe(b)&&!at(b))T=Yp(l,C.data,C.gc,T,b),W=D;else if(at(b))for(N=0,w=b.length;N<w;++N)_=b[N],!Oe(_)&&!at(_)&&(T=Yp(l,C.data,C.gc,T,_),W+=D);c.push(T),u.push(W),p=Math.max(T,p),m=Math.max(W,m)}Iw(o,n);const H=c.indexOf(p),M=u.indexOf(m),R=A=>({width:c[A]||0,height:u[A]||0});return{first:R(0),last:R(n-1),widest:R(H),highest:R(M),widths:c,heights:u}}getLabelForValue(t){return t}getPixelForValue(t,n){return NaN}getValueForPixel(t){}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const n=this._startPixel+t*this._length;return wN(this._alignToPixels?Yn(this.chart,n,0):n)}getDecimalForPixel(t){const n=(t-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:n}=this;return t<0&&n<0?n:t>0&&n>0?t:0}getContext(t){const n=this.ticks||[];if(t>=0&&t<n.length){const r=n[t];return r.$context||(r.$context=Fw(this.getContext(),t,r))}return this.$context||(this.$context=zw(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,n=qs(this.labelRotation),r=Math.abs(Math.cos(n)),l=Math.abs(Math.sin(n)),o=this._getLabelSizes(),c=t.autoSkipPadding||0,u=o?o.widest.width+c:0,h=o?o.highest.height+c:0;return this.isHorizontal()?h*r>u*l?u/r:h/l:h*l<u*r?h/r:u/l}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const n=this.axis,r=this.chart,l=this.options,{grid:o,position:c,border:u}=l,h=o.offset,p=this.isHorizontal(),x=this.ticks.length+(h?1:0),N=zr(o),w=[],b=u.setContext(this.getContext()),j=b.display?b.width:0,y=j/2,C=function(k){return Yn(r,k,j)};let D,T,W,_,H,M,R,A,K,V,F,U;if(c==="top")D=C(this.bottom),M=this.bottom-N,A=D-y,V=C(t.top)+y,U=t.bottom;else if(c==="bottom")D=C(this.top),V=t.top,U=C(t.bottom)-y,M=D+y,A=this.top+N;else if(c==="left")D=C(this.right),H=this.right-N,R=D-y,K=C(t.left)+y,F=t.right;else if(c==="right")D=C(this.left),K=t.left,F=C(t.right)-y,H=D+y,R=this.left+N;else if(n==="x"){if(c==="center")D=C((t.top+t.bottom)/2+.5);else if(Pe(c)){const k=Object.keys(c)[0],z=c[k];D=C(this.chart.scales[k].getPixelForValue(z))}V=t.top,U=t.bottom,M=D+y,A=M+N}else if(n==="y"){if(c==="center")D=C((t.left+t.right)/2);else if(Pe(c)){const k=Object.keys(c)[0],z=c[k];D=C(this.chart.scales[k].getPixelForValue(z))}H=D-y,R=H-N,K=t.left,F=t.right}const re=Re(l.ticks.maxTicksLimit,x),J=Math.max(1,Math.ceil(x/re));for(T=0;T<x;T+=J){const k=this.getContext(T),z=o.setContext(k),$=u.setContext(k),te=z.lineWidth,se=z.color,L=$.dash||[],Z=$.dashOffset,ue=z.tickWidth,fe=z.tickColor,we=z.tickBorderDash||[],ee=z.tickBorderDashOffset;W=Ow(this,T,h),W!==void 0&&(_=Yn(r,W,te),p?H=R=K=F=_:M=A=V=U=_,w.push({tx1:H,ty1:M,tx2:R,ty2:A,x1:K,y1:V,x2:F,y2:U,width:te,color:se,borderDash:L,borderDashOffset:Z,tickWidth:ue,tickColor:fe,tickBorderDash:we,tickBorderDashOffset:ee}))}return this._ticksLength=x,this._borderValue=D,w}_computeLabelItems(t){const n=this.axis,r=this.options,{position:l,ticks:o}=r,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:m,mirror:x}=o,N=zr(r.grid),w=N+m,b=x?-m:w,j=-qs(this.labelRotation),y=[];let C,D,T,W,_,H,M,R,A,K,V,F,U="middle";if(l==="top")H=this.bottom-b,M=this._getXAxisLabelAlignment();else if(l==="bottom")H=this.top+b,M=this._getXAxisLabelAlignment();else if(l==="left"){const J=this._getYAxisLabelAlignment(N);M=J.textAlign,_=J.x}else if(l==="right"){const J=this._getYAxisLabelAlignment(N);M=J.textAlign,_=J.x}else if(n==="x"){if(l==="center")H=(t.top+t.bottom)/2+w;else if(Pe(l)){const J=Object.keys(l)[0],k=l[J];H=this.chart.scales[J].getPixelForValue(k)+w}M=this._getXAxisLabelAlignment()}else if(n==="y"){if(l==="center")_=(t.left+t.right)/2-w;else if(Pe(l)){const J=Object.keys(l)[0],k=l[J];_=this.chart.scales[J].getPixelForValue(k)}M=this._getYAxisLabelAlignment(N).textAlign}n==="y"&&(h==="start"?U="top":h==="end"&&(U="bottom"));const re=this._getLabelSizes();for(C=0,D=u.length;C<D;++C){T=u[C],W=T.label;const J=o.setContext(this.getContext(C));R=this.getPixelForTick(C)+o.labelOffset,A=this._resolveTickFontOptions(C),K=A.lineHeight,V=at(W)?W.length:1;const k=V/2,z=J.color,$=J.textStrokeColor,te=J.textStrokeWidth;let se=M;c?(_=R,M==="inner"&&(C===D-1?se=this.options.reverse?"left":"right":C===0?se=this.options.reverse?"right":"left":se="center"),l==="top"?p==="near"||j!==0?F=-V*K+K/2:p==="center"?F=-re.highest.height/2-k*K+K:F=-re.highest.height+K/2:p==="near"||j!==0?F=K/2:p==="center"?F=re.highest.height/2-k*K:F=re.highest.height-V*K,x&&(F*=-1),j!==0&&!J.showLabelBackdrop&&(_+=K/2*Math.sin(j))):(H=R,F=(1-V)*K/2);let L;if(J.showLabelBackdrop){const Z=is(J.backdropPadding),ue=re.heights[C],fe=re.widths[C];let we=F-Z.top,ee=0-Z.left;switch(U){case"middle":we-=ue/2;break;case"bottom":we-=ue;break}switch(M){case"center":ee-=fe/2;break;case"right":ee-=fe;break;case"inner":C===D-1?ee-=fe:C>0&&(ee-=fe/2);break}L={left:ee,top:we,width:fe+Z.width,height:ue+Z.height,color:J.backdropColor}}y.push({label:W,font:A,textOffset:F,options:{rotation:j,color:z,strokeColor:$,strokeWidth:te,textAlign:se,textBaseline:U,translation:[_,H],backdrop:L}})}return y}_getXAxisLabelAlignment(){const{position:t,ticks:n}=this.options;if(-qs(this.labelRotation))return t==="top"?"left":"right";let l="center";return n.align==="start"?l="left":n.align==="end"?l="right":n.align==="inner"&&(l="inner"),l}_getYAxisLabelAlignment(t){const{position:n,ticks:{crossAlign:r,mirror:l,padding:o}}=this.options,c=this._getLabelSizes(),u=t+o,h=c.widest.width;let p,m;return n==="left"?l?(m=this.right+o,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m+=h)):(m=this.right-u,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m=this.left)):n==="right"?l?(m=this.left+o,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m-=h)):(m=this.left+u,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m=this.right)):p="right",{textAlign:p,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:n},left:r,top:l,width:o,height:c}=this;n&&(t.save(),t.fillStyle=n,t.fillRect(r,l,o,c),t.restore())}getLineWidthForValue(t){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const l=this.ticks.findIndex(o=>o.value===t);return l>=0?n.setContext(this.getContext(l)).lineWidth:0}drawGrid(t){const n=this.options.grid,r=this.ctx,l=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,c;const u=(h,p,m)=>{!m.width||!m.color||(r.save(),r.lineWidth=m.width,r.strokeStyle=m.color,r.setLineDash(m.borderDash||[]),r.lineDashOffset=m.borderDashOffset,r.beginPath(),r.moveTo(h.x,h.y),r.lineTo(p.x,p.y),r.stroke(),r.restore())};if(n.display)for(o=0,c=l.length;o<c;++o){const h=l[o];n.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),n.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:n,options:{border:r,grid:l}}=this,o=r.setContext(this.getContext()),c=r.display?o.width:0;if(!c)return;const u=l.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,m,x,N;this.isHorizontal()?(p=Yn(t,this.left,c)-c/2,m=Yn(t,this.right,u)+u/2,x=N=h):(x=Yn(t,this.top,c)-c/2,N=Yn(t,this.bottom,u)+u/2,p=m=h),n.save(),n.lineWidth=o.width,n.strokeStyle=o.color,n.beginPath(),n.moveTo(p,x),n.lineTo(m,N),n.stroke(),n.restore()}drawLabels(t){if(!this.options.ticks.display)return;const r=this.ctx,l=this._computeLabelArea();l&&po(r,l);const o=this.getLabelItems(t);for(const c of o){const u=c.options,h=c.font,p=c.label,m=c.textOffset;ia(r,p,0,m,h,u)}l&&mo(r)}drawTitle(){const{ctx:t,options:{position:n,title:r,reverse:l}}=this;if(!r.display)return;const o=_t(r.font),c=is(r.padding),u=r.align;let h=o.lineHeight/2;n==="bottom"||n==="center"||Pe(n)?(h+=c.bottom,at(r.text)&&(h+=o.lineHeight*(r.text.length-1))):h+=c.top;const{titleX:p,titleY:m,maxWidth:x,rotation:N}=$w(this,h,n,u);ia(t,r.text,0,0,o,{color:r.color,maxWidth:x,rotation:N,textAlign:Bw(u,n,l),textBaseline:"middle",translation:[p,m]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,n=t.ticks&&t.ticks.z||0,r=Re(t.grid&&t.grid.z,-1),l=Re(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==qi.prototype.draw?[{z:n,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:l,draw:()=>{this.drawBorder()}},{z:n,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",l=[];let o,c;for(o=0,c=n.length;o<c;++o){const u=n[o];u[r]===this.id&&(!t||u.type===t)&&l.push(u)}return l}_resolveTickFontOptions(t){const n=this.options.ticks.setContext(this.getContext(t));return _t(n.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Ml{constructor(t,n,r){this.type=t,this.scope=n,this.override=r,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const n=Object.getPrototypeOf(t);let r;Hw(n)&&(r=this.register(n));const l=this.items,o=t.id,c=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in l||(l[o]=t,Uw(t,c,r),this.override&&tt.override(t.id,t.overrides)),c}get(t){return this.items[t]}unregister(t){const n=this.items,r=t.id,l=this.scope;r in n&&delete n[r],l&&r in tt[l]&&(delete tt[l][r],this.override&&delete ri[r])}}function Uw(e,t,n){const r=Zr(Object.create(null),[n?tt.get(n):{},tt.get(t),e.defaults]);tt.set(t,r),e.defaultRoutes&&Ww(t,e.defaultRoutes),e.descriptors&&tt.describe(t,e.descriptors)}function Ww(e,t){Object.keys(t).forEach(n=>{const r=n.split("."),l=r.pop(),o=[e].concat(r).join("."),c=t[n].split("."),u=c.pop(),h=c.join(".");tt.route(o,l,h,u)})}function Hw(e){return"id"in e&&"defaults"in e}class Vw{constructor(){this.controllers=new Ml(si,"datasets",!0),this.elements=new Ml(vs,"elements"),this.plugins=new Ml(Object,"plugins"),this.scales=new Ml(qi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,n,r){[...n].forEach(l=>{const o=r||this._getRegistryForType(l);r||o.isForType(l)||o===this.plugins&&l.id?this._exec(t,o,l):Fe(l,c=>{const u=r||this._getRegistryForType(c);this._exec(t,u,c)})})}_exec(t,n,r){const l=iu(t);Ve(r["before"+l],[],r),n[t](r),Ve(r["after"+l],[],r)}_getRegistryForType(t){for(let n=0;n<this._typedRegistries.length;n++){const r=this._typedRegistries[n];if(r.isForType(t))return r}return this.plugins}_get(t,n,r){const l=n.get(t);if(l===void 0)throw new Error('"'+t+'" is not a registered '+r+".");return l}}var Rs=new Vw;class qw{constructor(){this._init=void 0}notify(t,n,r,l){if(n==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=l?this._descriptors(t).filter(l):this._descriptors(t),c=this._notify(o,t,n,r);return n==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),c}_notify(t,n,r,l){l=l||{};for(const o of t){const c=o.plugin,u=c[r],h=[n,l,o.options];if(Ve(u,h,c)===!1&&l.cancelable)return!1}return!0}invalidate(){Oe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),n}_createDescriptors(t,n){const r=t&&t.config,l=Re(r.options&&r.options.plugins,{}),o=Yw(r);return l===!1&&!n?[]:Kw(t,o,l,n)}_notifyStateChanges(t){const n=this._oldCache||[],r=this._cache,l=(o,c)=>o.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(l(n,r),t,"stop"),this._notify(l(r,n),t,"start")}}function Yw(e){const t={},n=[],r=Object.keys(Rs.plugins.items);for(let o=0;o<r.length;o++)n.push(Rs.getPlugin(r[o]));const l=e.plugins||[];for(let o=0;o<l.length;o++){const c=l[o];n.indexOf(c)===-1&&(n.push(c),t[c.id]=!0)}return{plugins:n,localIds:t}}function Qw(e,t){return!t&&e===!1?null:e===!0?{}:e}function Kw(e,{plugins:t,localIds:n},r,l){const o=[],c=e.getContext();for(const u of t){const h=u.id,p=Qw(r[h],l);p!==null&&o.push({plugin:u,options:Xw(e.config,{plugin:u,local:n[h]},p,c)})}return o}function Xw(e,{plugin:t,local:n},r,l){const o=e.pluginScopeKeys(t),c=e.getOptionScopes(r,o);return n&&t.defaults&&c.push(t.defaults),e.createResolver(c,l,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Bd(e,t){const n=tt.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||"x"}function Gw(e,t){let n=e;return e==="_index_"?n=t:e==="_value_"&&(n=t==="x"?"y":"x"),n}function Jw(e,t){return e===t?"_index_":"_value_"}function jm(e){if(e==="x"||e==="y"||e==="r")return e}function Zw(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function $d(e,...t){if(jm(e))return e;for(const n of t){const r=n.axis||Zw(n.position)||e.length>1&&jm(e[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Nm(e,t,n){if(n[t+"AxisID"]===e)return{axis:t}}function ek(e,t){if(t.data&&t.data.datasets){const n=t.data.datasets.filter(r=>r.xAxisID===e||r.yAxisID===e);if(n.length)return Nm(e,"x",n[0])||Nm(e,"y",n[0])}return{}}function tk(e,t){const n=ri[e.type]||{scales:{}},r=t.scales||{},l=Bd(e.type,t),o=Object.create(null);return Object.keys(r).forEach(c=>{const u=r[c];if(!Pe(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=$d(c,u,ek(c,e),tt.scales[u.type]),p=Jw(h,l),m=n.scales||{};o[c]=Vr(Object.create(null),[{axis:h},u,m[h],m[p]])}),e.data.datasets.forEach(c=>{const u=c.type||e.type,h=c.indexAxis||Bd(u,t),m=(ri[u]||{}).scales||{};Object.keys(m).forEach(x=>{const N=Gw(x,h),w=c[N+"AxisID"]||N;o[w]=o[w]||Object.create(null),Vr(o[w],[{axis:N},r[w],m[x]])})}),Object.keys(o).forEach(c=>{const u=o[c];Vr(u,[tt.scales[u.type],tt.scale])}),o}function jx(e){const t=e.options||(e.options={});t.plugins=Re(t.plugins,{}),t.scales=tk(e,t)}function Nx(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function sk(e){return e=e||{},e.data=Nx(e.data),jx(e),e}const wm=new Map,wx=new Set;function Ll(e,t){let n=wm.get(e);return n||(n=t(),wm.set(e,n),wx.add(n)),n}const Fr=(e,t,n)=>{const r=ii(t,n);r!==void 0&&e.add(r)};class nk{constructor(t){this._config=sk(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Nx(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),jx(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Ll(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,n){return Ll(`${t}.transition.${n}`,()=>[[`datasets.${t}.transitions.${n}`,`transitions.${n}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,n){return Ll(`${t}-${n}`,()=>[[`datasets.${t}.elements.${n}`,`datasets.${t}`,`elements.${n}`,""]])}pluginScopeKeys(t){const n=t.id,r=this.type;return Ll(`${r}-plugin-${n}`,()=>[[`plugins.${n}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,n){const r=this._scopeCache;let l=r.get(t);return(!l||n)&&(l=new Map,r.set(t,l)),l}getOptionScopes(t,n,r){const{options:l,type:o}=this,c=this._cachedScopes(t,r),u=c.get(n);if(u)return u;const h=new Set;n.forEach(m=>{t&&(h.add(t),m.forEach(x=>Fr(h,t,x))),m.forEach(x=>Fr(h,l,x)),m.forEach(x=>Fr(h,ri[o]||{},x)),m.forEach(x=>Fr(h,tt,x)),m.forEach(x=>Fr(h,zd,x))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),wx.has(n)&&c.set(n,p),p}chartOptionScopes(){const{options:t,type:n}=this;return[t,ri[n]||{},tt.datasets[n]||{},{type:n},tt,zd]}resolveNamedOptions(t,n,r,l=[""]){const o={$shared:!0},{resolver:c,subPrefixes:u}=km(this._resolverCache,t,l);let h=c;if(rk(c,n)){o.$shared=!1,r=kn(r)?r():r;const p=this.createResolver(t,r,u);h=Ui(c,r,p)}for(const p of n)o[p]=h[p];return o}createResolver(t,n,r=[""],l){const{resolver:o}=km(this._resolverCache,t,r);return Pe(n)?Ui(o,n,void 0,l):o}}function km(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));const l=n.join();let o=r.get(l);return o||(o={resolver:du(t,n),subPrefixes:n.filter(u=>!u.toLowerCase().includes("hover"))},r.set(l,o)),o}const ik=e=>Pe(e)&&Object.getOwnPropertyNames(e).some(t=>kn(e[t]));function rk(e,t){const{isScriptable:n,isIndexable:r}=sx(e);for(const l of t){const o=n(l),c=r(l),u=(c||o)&&e[l];if(o&&(kn(u)||ik(u))||c&&at(u))return!0}return!1}var ak="4.5.1";const lk=["top","bottom","left","right","chartArea"];function _m(e,t){return e==="top"||e==="bottom"||lk.indexOf(e)===-1&&t==="x"}function Sm(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Cm(e){const t=e.chart,n=t.options.animation;t.notifyPlugins("afterRender"),Ve(n&&n.onComplete,[e],t)}function ok(e){const t=e.chart,n=t.options.animation;Ve(n&&n.onProgress,[e],t)}function kx(e){return fu()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Yl={},Em=e=>{const t=kx(e);return Object.values(Yl).filter(n=>n.canvas===t).pop()};function ck(e,t,n){const r=Object.keys(e);for(const l of r){const o=+l;if(o>=t){const c=e[l];delete e[l],(n>0||o>t)&&(e[o+n]=c)}}}function dk(e,t,n,r){return!n||e.type==="mouseout"?null:r?t:e}var xn;let pa=(xn=class{static register(...t){Rs.add(...t),Rm()}static unregister(...t){Rs.remove(...t),Rm()}constructor(t,n){const r=this.config=new nk(n),l=kx(t),o=Em(l);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const c=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Ew(l)),this.platform.updateConfig(r);const u=this.platform.acquireContext(l,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,m=h&&h.width;if(this.id=oN(),this.ctx=u,this.canvas=h,this.width=m,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new qw,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=CN(x=>this.update(x),c.resizeDelay||0),this._dataChanges=[],Yl[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}Ws.listen(this,"complete",Cm),Ws.listen(this,"progress",ok),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:n},width:r,height:l,_aspectRatio:o}=this;return Oe(t)?n&&o?o:l?r/l:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Rs}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Gp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Qp(this.canvas,this.ctx),this}stop(){return Ws.stop(this),this}resize(t,n){Ws.running(this)?this._resizeBeforeDraw={width:t,height:n}:this._resize(t,n)}_resize(t,n){const r=this.options,l=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(l,t,n,o),u=r.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Gp(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),Ve(r.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Fe(n,(r,l)=>{r.id=l})}buildOrUpdateScales(){const t=this.options,n=t.scales,r=this.scales,l=Object.keys(r).reduce((c,u)=>(c[u]=!1,c),{});let o=[];n&&(o=o.concat(Object.keys(n).map(c=>{const u=n[c],h=$d(c,u),p=h==="r",m=h==="x";return{options:u,dposition:p?"chartArea":m?"bottom":"left",dtype:p?"radialLinear":m?"category":"linear"}}))),Fe(o,c=>{const u=c.options,h=u.id,p=$d(h,u),m=Re(u.type,c.dtype);(u.position===void 0||_m(u.position,p)!==_m(c.dposition))&&(u.position=c.dposition),l[h]=!0;let x=null;if(h in r&&r[h].type===m)x=r[h];else{const N=Rs.getScale(m);x=new N({id:h,type:m,ctx:this.ctx,chart:this}),r[x.id]=x}x.init(u,t)}),Fe(l,(c,u)=>{c||delete r[u]}),Fe(r,c=>{ns.configure(this,c,c.options),ns.addBox(this,c)})}_updateMetasets(){const t=this._metasets,n=this.data.datasets.length,r=t.length;if(t.sort((l,o)=>l.index-o.index),r>n){for(let l=n;l<r;++l)this._destroyDatasetMeta(l);t.splice(n,r-n)}this._sortedMetasets=t.slice(0).sort(Sm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:n}}=this;t.length>n.length&&delete this._stacks,t.forEach((r,l)=>{n.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(l)})}buildOrUpdateControllers(){const t=[],n=this.data.datasets;let r,l;for(this._removeUnreferencedMetasets(),r=0,l=n.length;r<l;r++){const o=n[r];let c=this.getDatasetMeta(r);const u=o.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(r),c=this.getDatasetMeta(r)),c.type=u,c.indexAxis=o.indexAxis||Bd(u,this.options),c.order=o.order||0,c.index=r,c.label=""+o.label,c.visible=this.isDatasetVisible(r),c.controller)c.controller.updateIndex(r),c.controller.linkScales();else{const h=Rs.getController(u),{datasetElementType:p,dataElementType:m}=tt.datasets[u];Object.assign(h,{dataElementType:Rs.getElement(m),datasetElementType:p&&Rs.getElement(p)}),c.controller=new h(this,r),t.push(c.controller)}}return this._updateMetasets(),t}_resetElements(){Fe(this.data.datasets,(t,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const n=this.config;n.update();const r=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),l=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,m=this.data.datasets.length;p<m;p++){const{controller:x}=this.getDatasetMeta(p),N=!l&&o.indexOf(x)===-1;x.buildOrUpdateElements(N),c=Math.max(+x.getMaxOverflow(),c)}c=this._minPadding=r.layout.autoPadding?c:0,this._updateLayout(c),l||Fe(o,p=>{p.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Sm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Fe(this.scales,t=>{ns.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,n=new Set(Object.keys(this._listeners)),r=new Set(t.events);(!zp(n,r)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,n=this._getUniformDataChanges()||[];for(const{method:r,start:l,count:o}of n){const c=r==="_removeElements"?-o:o;ck(t,l,c)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const n=this.data.datasets.length,r=o=>new Set(t.filter(c=>c[0]===o).map((c,u)=>u+","+c.splice(1).join(","))),l=r(0);for(let o=1;o<n;o++)if(!zp(l,r(o)))return;return Array.from(l).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ns.update(this,this.width,this.height,t);const n=this.chartArea,r=n.width<=0||n.height<=0;this._layers=[],Fe(this.boxes,l=>{r&&l.position==="chartArea"||(l.configure&&l.configure(),this._layers.push(...l._layers()))},this),this._layers.forEach((l,o)=>{l._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let n=0,r=this.data.datasets.length;n<r;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,r=this.data.datasets.length;n<r;++n)this._updateDataset(n,kn(t)?t({datasetIndex:n}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,n){const r=this.getDatasetMeta(t),l={meta:r,index:t,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",l)!==!1&&(r.controller._update(n),l.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",l))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ws.has(this)?this.attached&&!Ws.running(this)&&Ws.start(this):(this.draw(),Cm({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:r,height:l}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,l)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(t=0;t<n.length&&n[t].z<=0;++t)n[t].draw(this.chartArea);for(this._drawDatasets();t<n.length;++t)n[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const n=this._sortedMetasets,r=[];let l,o;for(l=0,o=n.length;l<o;++l){const c=n[l];(!t||c.visible)&&r.push(c)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let n=t.length-1;n>=0;--n)this._drawDataset(t[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const n=this.ctx,r={meta:t,index:t.index,cancelable:!0},l=hx(this,t);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(l&&po(n,l),t.controller.draw(),l&&mo(n),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(t){return na(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,n,r,l){const o=lw.modes[n];return typeof o=="function"?o(this,t,r,l):[]}getDatasetMeta(t){const n=this.data.datasets[t],r=this._metasets;let l=r.filter(o=>o&&o._dataset===n).pop();return l||(l={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},r.push(l)),l}getContext(){return this.$context||(this.$context=li(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const n=this.data.datasets[t];if(!n)return!1;const r=this.getDatasetMeta(t);return typeof r.hidden=="boolean"?!r.hidden:!n.hidden}setDatasetVisibility(t,n){const r=this.getDatasetMeta(t);r.hidden=!n}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,n,r){const l=r?"show":"hide",o=this.getDatasetMeta(t),c=o.controller._resolveAnimations(void 0,l);ea(n)?(o.data[n].hidden=!r,this.update()):(this.setDatasetVisibility(t,r),c.update(o,{visible:r}),this.update(u=>u.datasetIndex===t?l:void 0))}hide(t,n){this._updateVisibility(t,n,!1)}show(t,n){this._updateVisibility(t,n,!0)}_destroyDatasetMeta(t){const n=this._metasets[t];n&&n.controller&&n.controller._destroy(),delete this._metasets[t]}_stop(){let t,n;for(this.stop(),Ws.remove(this),t=0,n=this.data.datasets.length;t<n;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:n}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Qp(t,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Yl[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,n=this.platform,r=(o,c)=>{n.addEventListener(this,o,c),t[o]=c},l=(o,c,u)=>{o.offsetX=c,o.offsetY=u,this._eventHandler(o)};Fe(this.options.events,o=>r(o,l))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,n=this.platform,r=(h,p)=>{n.addEventListener(this,h,p),t[h]=p},l=(h,p)=>{t[h]&&(n.removeEventListener(this,h,p),delete t[h])},o=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{l("attach",u),this.attached=!0,this.resize(),r("resize",o),r("detach",c)};c=()=>{this.attached=!1,l("resize",o),this._stop(),this._resize(0,0),r("attach",u)},n.isAttached(this.canvas)?u():c()}unbindEvents(){Fe(this._listeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._listeners={},Fe(this._responsiveListeners,(t,n)=>{this.platform.removeEventListener(this,n,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,n,r){const l=r?"set":"remove";let o,c,u,h;for(n==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+l+"DatasetHoverStyle"]()),u=0,h=t.length;u<h;++u){c=t[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[l+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const n=this._active||[],r=t.map(({datasetIndex:o,index:c})=>{const u=this.getDatasetMeta(o);if(!u)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:u.data[c],index:c}});!Gl(r,n)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,n))}notifyPlugins(t,n,r){return this._plugins.notify(this,t,n,r)}isPluginEnabled(t){return this._plugins._cache.filter(n=>n.plugin.id===t).length===1}_updateHoverStyles(t,n,r){const l=this.options.hover,o=(h,p)=>h.filter(m=>!p.some(x=>m.datasetIndex===x.datasetIndex&&m.index===x.index)),c=o(n,t),u=r?t:o(t,n);c.length&&this.updateHoverStyle(c,l.mode,!1),u.length&&l.mode&&this.updateHoverStyle(u,l.mode,!0)}_eventHandler(t,n){const r={event:t,replay:n,cancelable:!0,inChartArea:this.isPointInArea(t)},l=c=>(c.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",r,l)===!1)return;const o=this._handleEvent(t,n,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,l),(o||r.changed)&&this.render(),this}_handleEvent(t,n,r){const{_active:l=[],options:o}=this,c=n,u=this._getActiveElements(t,l,r,c),h=pN(t),p=dk(t,this._lastEvent,r,h);r&&(this._lastEvent=null,Ve(o.onHover,[t,u,this],this),h&&Ve(o.onClick,[t,u,this],this));const m=!Gl(u,l);return(m||n)&&(this._active=u,this._updateHoverStyles(u,l,n)),this._lastEvent=p,m}_getActiveElements(t,n,r,l){if(t.type==="mouseout")return[];if(!r)return n;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,l)}},je(xn,"defaults",tt),je(xn,"instances",Yl),je(xn,"overrides",ri),je(xn,"registry",Rs),je(xn,"version",ak),je(xn,"getChart",Em),xn);function Rm(){return Fe(pa.instances,e=>e._plugins.invalidate())}function uk(e,t,n){const{startAngle:r,x:l,y:o,outerRadius:c,innerRadius:u,options:h}=t,{borderWidth:p,borderJoinStyle:m}=h,x=Math.min(p/c,qt(r-n));if(e.beginPath(),e.arc(l,o,c-p/2,r+x/2,n-x/2),u>0){const N=Math.min(p/u,qt(r-n));e.arc(l,o,u+p/2,n-N/2,r+N/2,!0)}else{const N=Math.min(p/2,c*qt(r-n));if(m==="round")e.arc(l,o,N,n-Be/2,r+Be/2,!0);else if(m==="bevel"){const w=2*N*N,b=-w*Math.cos(n+Be/2)+l,j=-w*Math.sin(n+Be/2)+o,y=w*Math.cos(r+Be/2)+l,C=w*Math.sin(r+Be/2)+o;e.lineTo(b,j),e.lineTo(y,C)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function hk(e,t,n){const{startAngle:r,pixelMargin:l,x:o,y:c,outerRadius:u,innerRadius:h}=t;let p=l/u;e.beginPath(),e.arc(o,c,u,r-p,n+p),h>l?(p=l/h,e.arc(o,c,h,n+p,r-p,!0)):e.arc(o,c,l,n+dt,r-dt),e.closePath(),e.clip()}function fk(e){return cu(e,["outerStart","outerEnd","innerStart","innerEnd"])}function pk(e,t,n,r){const l=fk(e.options.borderRadius),o=(n-t)/2,c=Math.min(o,r*t/2),u=h=>{const p=(n-Math.min(o,h))*r/2;return kt(h,0,Math.min(o,p))};return{outerStart:u(l.outerStart),outerEnd:u(l.outerEnd),innerStart:kt(l.innerStart,0,c),innerEnd:kt(l.innerEnd,0,c)}}function zi(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function no(e,t,n,r,l,o){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:m}=t,x=Math.max(t.outerRadius+r+n-p,0),N=m>0?m+r+n+p:0;let w=0;const b=l-h;if(r){const J=m>0?m-r:0,k=x>0?x-r:0,z=(J+k)/2,$=z!==0?b*z/(z+r):b;w=(b-$)/2}const j=Math.max(.001,b*x-n/Be)/x,y=(b-j)/2,C=h+y+w,D=l-y-w,{outerStart:T,outerEnd:W,innerStart:_,innerEnd:H}=pk(t,N,x,D-C),M=x-T,R=x-W,A=C+T/M,K=D-W/R,V=N+_,F=N+H,U=C+_/V,re=D-H/F;if(e.beginPath(),o){const J=(A+K)/2;if(e.arc(c,u,x,A,J),e.arc(c,u,x,J,K),W>0){const te=zi(R,K,c,u);e.arc(te.x,te.y,W,K,D+dt)}const k=zi(F,D,c,u);if(e.lineTo(k.x,k.y),H>0){const te=zi(F,re,c,u);e.arc(te.x,te.y,H,D+dt,re+Math.PI)}const z=(D-H/N+(C+_/N))/2;if(e.arc(c,u,N,D-H/N,z,!0),e.arc(c,u,N,z,C+_/N,!0),_>0){const te=zi(V,U,c,u);e.arc(te.x,te.y,_,U+Math.PI,C-dt)}const $=zi(M,C,c,u);if(e.lineTo($.x,$.y),T>0){const te=zi(M,A,c,u);e.arc(te.x,te.y,T,C-dt,A)}}else{e.moveTo(c,u);const J=Math.cos(A)*x+c,k=Math.sin(A)*x+u;e.lineTo(J,k);const z=Math.cos(K)*x+c,$=Math.sin(K)*x+u;e.lineTo(z,$)}e.closePath()}function mk(e,t,n,r,l){const{fullCircles:o,startAngle:c,circumference:u}=t;let h=t.endAngle;if(o){no(e,t,n,r,h,l);for(let p=0;p<o;++p)e.fill();isNaN(u)||(h=c+(u%Ge||Ge))}return no(e,t,n,r,h,l),e.fill(),h}function gk(e,t,n,r,l){const{fullCircles:o,startAngle:c,circumference:u,options:h}=t,{borderWidth:p,borderJoinStyle:m,borderDash:x,borderDashOffset:N,borderRadius:w}=h,b=h.borderAlign==="inner";if(!p)return;e.setLineDash(x||[]),e.lineDashOffset=N,b?(e.lineWidth=p*2,e.lineJoin=m||"round"):(e.lineWidth=p,e.lineJoin=m||"bevel");let j=t.endAngle;if(o){no(e,t,n,r,j,l);for(let y=0;y<o;++y)e.stroke();isNaN(u)||(j=c+(u%Ge||Ge))}b&&hk(e,t,j),h.selfJoin&&j-c>=Be&&w===0&&m!=="miter"&&uk(e,t,j),o||(no(e,t,n,r,j,l),e.stroke())}class Wr extends vs{constructor(n){super();je(this,"circumference");je(this,"endAngle");je(this,"fullCircles");je(this,"innerRadius");je(this,"outerRadius");je(this,"pixelMargin");je(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,r,l){const o=this.getProps(["x","y"],l),{angle:c,distance:u}=Qg(o,{x:n,y:r}),{startAngle:h,endAngle:p,innerRadius:m,outerRadius:x,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],l),w=(this.options.spacing+this.options.borderWidth)/2,b=Re(N,p-h),j=sa(c,h,p)&&h!==p,y=b>=Ge||j,C=Ys(u,m+w,x+w);return y&&C}getCenterPoint(n){const{x:r,y:l,startAngle:o,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:p,spacing:m}=this.options,x=(o+c)/2,N=(u+h+m+p)/2;return{x:r+Math.cos(x)*N,y:l+Math.sin(x)*N}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:r,circumference:l}=this,o=(r.offset||0)/4,c=(r.spacing||0)/2,u=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=l>Ge?Math.floor(l/Ge):0,l===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const h=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(h)*o,Math.sin(h)*o);const p=1-Math.sin(Math.min(Be,l||0)),m=o*p;n.fillStyle=r.backgroundColor,n.strokeStyle=r.borderColor,mk(n,this,m,c,u),gk(n,this,m,c,u),n.restore()}}je(Wr,"id","arc"),je(Wr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),je(Wr,"defaultRoutes",{backgroundColor:"backgroundColor"}),je(Wr,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function _x(e,t,n=t){e.lineCap=Re(n.borderCapStyle,t.borderCapStyle),e.setLineDash(Re(n.borderDash,t.borderDash)),e.lineDashOffset=Re(n.borderDashOffset,t.borderDashOffset),e.lineJoin=Re(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=Re(n.borderWidth,t.borderWidth),e.strokeStyle=Re(n.borderColor,t.borderColor)}function xk(e,t,n){e.lineTo(n.x,n.y)}function vk(e){return e.stepped?$N:e.tension||e.cubicInterpolationMode==="monotone"?UN:xk}function Sx(e,t,n={}){const r=e.length,{start:l=0,end:o=r-1}=n,{start:c,end:u}=t,h=Math.max(l,c),p=Math.min(o,u),m=l<c&&o<c||l>u&&o>u;return{count:r,start:h,loop:t.loop,ilen:p<h&&!m?r+p-h:p-h}}function yk(e,t,n,r){const{points:l,options:o}=t,{count:c,start:u,loop:h,ilen:p}=Sx(l,n,r),m=vk(o);let{move:x=!0,reverse:N}=r||{},w,b,j;for(w=0;w<=p;++w)b=l[(u+(N?p-w:w))%c],!b.skip&&(x?(e.moveTo(b.x,b.y),x=!1):m(e,j,b,N,o.stepped),j=b);return h&&(b=l[(u+(N?p:0))%c],m(e,j,b,N,o.stepped)),!!h}function bk(e,t,n,r){const l=t.points,{count:o,start:c,ilen:u}=Sx(l,n,r),{move:h=!0,reverse:p}=r||{};let m=0,x=0,N,w,b,j,y,C;const D=W=>(c+(p?u-W:W))%o,T=()=>{j!==y&&(e.lineTo(m,y),e.lineTo(m,j),e.lineTo(m,C))};for(h&&(w=l[D(0)],e.moveTo(w.x,w.y)),N=0;N<=u;++N){if(w=l[D(N)],w.skip)continue;const W=w.x,_=w.y,H=W|0;H===b?(_<j?j=_:_>y&&(y=_),m=(x*m+W)/++x):(T(),e.lineTo(W,_),b=H,x=0,j=y=_),C=_}T()}function Ud(e){const t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!n?bk:yk}function jk(e){return e.stepped?b1:e.tension||e.cubicInterpolationMode==="monotone"?j1:Gn}function Nk(e,t,n,r){let l=t._path;l||(l=t._path=new Path2D,t.path(l,n,r)&&l.closePath()),_x(e,t.options),e.stroke(l)}function wk(e,t,n,r){const{segments:l,options:o}=t,c=Ud(t);for(const u of l)_x(e,o,u.style),e.beginPath(),c(e,t,u,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}const kk=typeof Path2D=="function";function _k(e,t,n,r){kk&&!t.options.segment?Nk(e,t,n,r):wk(e,t,n,r)}class Qs extends vs{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,n){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const l=r.spanGaps?this._loop:this._fullLoop;h1(this._points,r,t,l,n),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=C1(this,this.options.segment))}first(){const t=this.segments,n=this.points;return t.length&&n[t[0].start]}last(){const t=this.segments,n=this.points,r=t.length;return r&&n[t[r-1].end]}interpolate(t,n){const r=this.options,l=t[n],o=this.points,c=ux(this,{property:n,start:l,end:l});if(!c.length)return;const u=[],h=jk(r);let p,m;for(p=0,m=c.length;p<m;++p){const{start:x,end:N}=c[p],w=o[x],b=o[N];if(w===b){u.push(w);continue}const j=Math.abs((l-w[n])/(b[n]-w[n])),y=h(w,b,j,r.stepped);y[n]=t[n],u.push(y)}return u.length===1?u[0]:u}pathSegment(t,n,r){return Ud(this)(t,this,n,r)}path(t,n,r){const l=this.segments,o=Ud(this);let c=this._loop;n=n||0,r=r||this.points.length-n;for(const u of l)c&=o(t,this,u,{start:n,end:n+r-1});return!!c}draw(t,n,r,l){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),_k(t,this,r,l),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}je(Qs,"id","line"),je(Qs,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),je(Qs,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),je(Qs,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Dm(e,t,n,r){const l=e.options,{[n]:o}=e.getProps([n],r);return Math.abs(t-o)<l.radius+l.hitRadius}class Kr extends vs{constructor(n){super();je(this,"parsed");je(this,"skip");je(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,r,l){const o=this.options,{x:c,y:u}=this.getProps(["x","y"],l);return Math.pow(n-c,2)+Math.pow(r-u,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(n,r){return Dm(this,n,"x",r)}inYRange(n,r){return Dm(this,n,"y",r)}getCenterPoint(n){const{x:r,y:l}=this.getProps(["x","y"],n);return{x:r,y:l}}size(n){n=n||this.options||{};let r=n.radius||0;r=Math.max(r,r&&n.hoverRadius||0);const l=r&&n.borderWidth||0;return(r+l)*2}draw(n,r){const l=this.options;this.skip||l.radius<.1||!na(this,r,this.size(l)/2)||(n.strokeStyle=l.borderColor,n.lineWidth=l.borderWidth,n.fillStyle=l.backgroundColor,Fd(n,l,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}je(Kr,"id","point"),je(Kr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),je(Kr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Cx(e,t){const{x:n,y:r,base:l,width:o,height:c}=e.getProps(["x","y","base","width","height"],t);let u,h,p,m,x;return e.horizontal?(x=c/2,u=Math.min(n,l),h=Math.max(n,l),p=r-x,m=r+x):(x=o/2,u=n-x,h=n+x,p=Math.min(r,l),m=Math.max(r,l)),{left:u,top:p,right:h,bottom:m}}function jn(e,t,n,r){return e?0:kt(t,n,r)}function Sk(e,t,n){const r=e.options.borderWidth,l=e.borderSkipped,o=tx(r);return{t:jn(l.top,o.top,0,n),r:jn(l.right,o.right,0,t),b:jn(l.bottom,o.bottom,0,n),l:jn(l.left,o.left,0,t)}}function Ck(e,t,n){const{enableBorderRadius:r}=e.getProps(["enableBorderRadius"]),l=e.options.borderRadius,o=Fi(l),c=Math.min(t,n),u=e.borderSkipped,h=r||Pe(l);return{topLeft:jn(!h||u.top||u.left,o.topLeft,0,c),topRight:jn(!h||u.top||u.right,o.topRight,0,c),bottomLeft:jn(!h||u.bottom||u.left,o.bottomLeft,0,c),bottomRight:jn(!h||u.bottom||u.right,o.bottomRight,0,c)}}function Ek(e){const t=Cx(e),n=t.right-t.left,r=t.bottom-t.top,l=Sk(e,n/2,r/2),o=Ck(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:o},inner:{x:t.left+l.l,y:t.top+l.t,w:n-l.l-l.r,h:r-l.t-l.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(l.t,l.l)),topRight:Math.max(0,o.topRight-Math.max(l.t,l.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(l.b,l.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(l.b,l.r))}}}}function kd(e,t,n,r){const l=t===null,o=n===null,u=e&&!(l&&o)&&Cx(e,r);return u&&(l||Ys(t,u.left,u.right))&&(o||Ys(n,u.top,u.bottom))}function Rk(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Dk(e,t){e.rect(t.x,t.y,t.w,t.h)}function _d(e,t,n={}){const r=e.x!==n.x?-t:0,l=e.y!==n.y?-t:0,o=(e.x+e.w!==n.x+n.w?t:0)-r,c=(e.y+e.h!==n.y+n.h?t:0)-l;return{x:e.x+r,y:e.y+l,w:e.w+o,h:e.h+c,radius:e.radius}}class Ql extends vs{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:n,options:{borderColor:r,backgroundColor:l}}=this,{inner:o,outer:c}=Ek(this),u=Rk(c.radius)?eo:Dk;t.save(),(c.w!==o.w||c.h!==o.h)&&(t.beginPath(),u(t,_d(c,n,o)),t.clip(),u(t,_d(o,-n,c)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),u(t,_d(o,n)),t.fillStyle=l,t.fill(),t.restore()}inRange(t,n,r){return kd(this,t,n,r)}inXRange(t,n){return kd(this,t,null,n)}inYRange(t,n){return kd(this,null,t,n)}getCenterPoint(t){const{x:n,y:r,base:l,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(n+l)/2:n,y:o?r:(r+l)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}je(Ql,"id","bar"),je(Ql,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),je(Ql,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Pk(e,t,n){const r=e.segments,l=e.points,o=t.points,c=[];for(const u of r){let{start:h,end:p}=u;p=vo(h,p,l);const m=Wd(n,l[h],l[p],u.loop);if(!t.segments){c.push({source:u,target:m,start:l[h],end:l[p]});continue}const x=ux(t,m);for(const N of x){const w=Wd(n,o[N.start],o[N.end],N.loop),b=dx(u,l,w);for(const j of b)c.push({source:j,target:N,start:{[n]:Pm(m,w,"start",Math.max)},end:{[n]:Pm(m,w,"end",Math.min)}})}}return c}function Wd(e,t,n,r){if(r)return;let l=t[e],o=n[e];return e==="angle"&&(l=qt(l),o=qt(o)),{property:e,start:l,end:o}}function Ak(e,t){const{x:n=null,y:r=null}=e||{},l=t.points,o=[];return t.segments.forEach(({start:c,end:u})=>{u=vo(c,u,l);const h=l[c],p=l[u];r!==null?(o.push({x:h.x,y:r}),o.push({x:p.x,y:r})):n!==null&&(o.push({x:n,y:h.y}),o.push({x:n,y:p.y}))}),o}function vo(e,t,n){for(;t>e;t--){const r=n[t];if(!isNaN(r.x)&&!isNaN(r.y))break}return t}function Pm(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function Ex(e,t){let n=[],r=!1;return at(e)?(r=!0,n=e):n=Ak(e,t),n.length?new Qs({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function Am(e){return e&&e.fill!==!1}function Tk(e,t,n){let l=e[t].fill;const o=[t];let c;if(!n)return l;for(;l!==!1&&o.indexOf(l)===-1;){if(!St(l))return l;if(c=e[l],!c)return!1;if(c.visible)return l;o.push(l),l=c.fill}return!1}function Mk(e,t,n){const r=zk(e);if(Pe(r))return isNaN(r.value)?!1:r;let l=parseFloat(r);return St(l)&&Math.floor(l)===l?Lk(r[0],t,l,n):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function Lk(e,t,n,r){return(e==="-"||e==="+")&&(n=t+n),n===t||n<0||n>=r?!1:n}function Ok(e,t){let n=null;return e==="start"?n=t.bottom:e==="end"?n=t.top:Pe(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function Ik(e,t,n){let r;return e==="start"?r=n:e==="end"?r=t.options.reverse?t.min:t.max:Pe(e)?r=e.value:r=t.getBaseValue(),r}function zk(e){const t=e.options,n=t.fill;let r=Re(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function Fk(e){const{scale:t,index:n,line:r}=e,l=[],o=r.segments,c=r.points,u=Bk(t,n);u.push(Ex({x:null,y:t.bottom},r));for(let h=0;h<o.length;h++){const p=o[h];for(let m=p.start;m<=p.end;m++)$k(l,c[m],u)}return new Qs({points:l,options:{}})}function Bk(e,t){const n=[],r=e.getMatchingVisibleMetas("line");for(let l=0;l<r.length;l++){const o=r[l];if(o.index===t)break;o.hidden||n.unshift(o.dataset)}return n}function $k(e,t,n){const r=[];for(let l=0;l<n.length;l++){const o=n[l],{first:c,last:u,point:h}=Uk(o,t,"x");if(!(!h||c&&u)){if(c)r.unshift(h);else if(e.push(h),!u)break}}e.push(...r)}function Uk(e,t,n){const r=e.interpolate(t,n);if(!r)return{};const l=r[n],o=e.segments,c=e.points;let u=!1,h=!1;for(let p=0;p<o.length;p++){const m=o[p],x=c[m.start][n],N=c[m.end][n];if(Ys(l,x,N)){u=l===x,h=l===N;break}}return{first:u,last:h,point:r}}class Rx{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,n,r){const{x:l,y:o,radius:c}=this;return n=n||{start:0,end:Ge},t.arc(l,o,c,n.end,n.start,!0),!r.bounds}interpolate(t){const{x:n,y:r,radius:l}=this,o=t.angle;return{x:n+Math.cos(o)*l,y:r+Math.sin(o)*l,angle:o}}}function Wk(e){const{chart:t,fill:n,line:r}=e;if(St(n))return Hk(t,n);if(n==="stack")return Fk(e);if(n==="shape")return!0;const l=Vk(e);return l instanceof Rx?l:Ex(l,r)}function Hk(e,t){const n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function Vk(e){return(e.scale||{}).getPointPositionForValue?Yk(e):qk(e)}function qk(e){const{scale:t={},fill:n}=e,r=Ok(n,t);if(St(r)){const l=t.isHorizontal();return{x:l?r:null,y:l?null:r}}return null}function Yk(e){const{scale:t,fill:n}=e,r=t.options,l=t.getLabels().length,o=r.reverse?t.max:t.min,c=Ik(n,t,o),u=[];if(r.grid.circular){const h=t.getPointPositionForValue(0,o);return new Rx({x:h.x,y:h.y,radius:t.getDistanceFromCenterForValue(c)})}for(let h=0;h<l;++h)u.push(t.getPointPositionForValue(h,c));return u}function Sd(e,t,n){const r=Wk(t),{chart:l,index:o,line:c,scale:u,axis:h}=t,p=c.options,m=p.fill,x=p.backgroundColor,{above:N=x,below:w=x}=m||{},b=l.getDatasetMeta(o),j=hx(l,b);r&&c.points.length&&(po(e,n),Qk(e,{line:c,target:r,above:N,below:w,area:n,scale:u,axis:h,clip:j}),mo(e))}function Qk(e,t){const{line:n,target:r,above:l,below:o,area:c,scale:u,clip:h}=t,p=n._loop?"angle":t.axis;e.save();let m=o;o!==l&&(p==="x"?(Tm(e,r,c.top),Cd(e,{line:n,target:r,color:l,scale:u,property:p,clip:h}),e.restore(),e.save(),Tm(e,r,c.bottom)):p==="y"&&(Mm(e,r,c.left),Cd(e,{line:n,target:r,color:o,scale:u,property:p,clip:h}),e.restore(),e.save(),Mm(e,r,c.right),m=l)),Cd(e,{line:n,target:r,color:m,scale:u,property:p,clip:h}),e.restore()}function Tm(e,t,n){const{segments:r,points:l}=t;let o=!0,c=!1;e.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],x=l[vo(h,p,l)];o?(e.moveTo(m.x,m.y),o=!1):(e.lineTo(m.x,n),e.lineTo(m.x,m.y)),c=!!t.pathSegment(e,u,{move:c}),c?e.closePath():e.lineTo(x.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function Mm(e,t,n){const{segments:r,points:l}=t;let o=!0,c=!1;e.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],x=l[vo(h,p,l)];o?(e.moveTo(m.x,m.y),o=!1):(e.lineTo(n,m.y),e.lineTo(m.x,m.y)),c=!!t.pathSegment(e,u,{move:c}),c?e.closePath():e.lineTo(n,x.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function Cd(e,t){const{line:n,target:r,property:l,color:o,scale:c,clip:u}=t,h=Pk(n,r,l);for(const{source:p,target:m,start:x,end:N}of h){const{style:{backgroundColor:w=o}={}}=p,b=r!==!0;e.save(),e.fillStyle=w,Kk(e,c,u,b&&Wd(l,x,N)),e.beginPath();const j=!!n.pathSegment(e,p);let y;if(b){j?e.closePath():Lm(e,r,N,l);const C=!!r.pathSegment(e,m,{move:j,reverse:!0});y=j&&C,y||Lm(e,r,x,l)}e.closePath(),e.fill(y?"evenodd":"nonzero"),e.restore()}}function Kk(e,t,n,r){const l=t.chart.chartArea,{property:o,start:c,end:u}=r||{};if(o==="x"||o==="y"){let h,p,m,x;o==="x"?(h=c,p=l.top,m=u,x=l.bottom):(h=l.left,p=c,m=l.right,x=u),e.beginPath(),n&&(h=Math.max(h,n.left),m=Math.min(m,n.right),p=Math.max(p,n.top),x=Math.min(x,n.bottom)),e.rect(h,p,m-h,x-p),e.clip()}}function Lm(e,t,n,r){const l=t.interpolate(n,r);l&&e.lineTo(l.x,l.y)}var Dx={id:"filler",afterDatasetsUpdate(e,t,n){const r=(e.data.datasets||[]).length,l=[];let o,c,u,h;for(c=0;c<r;++c)o=e.getDatasetMeta(c),u=o.dataset,h=null,u&&u.options&&u instanceof Qs&&(h={visible:e.isDatasetVisible(c),index:c,fill:Mk(u,c,r),chart:e,axis:o.controller.options.indexAxis,scale:o.vScale,line:u}),o.$filler=h,l.push(h);for(c=0;c<r;++c)h=l[c],!(!h||h.fill===!1)&&(h.fill=Tk(l,c,n.propagate))},beforeDraw(e,t,n){const r=n.drawTime==="beforeDraw",l=e.getSortedVisibleDatasetMetas(),o=e.chartArea;for(let c=l.length-1;c>=0;--c){const u=l[c].$filler;u&&(u.line.updateControlPoints(o,u.axis),r&&u.fill&&Sd(e.ctx,u,o))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!=="beforeDatasetsDraw")return;const r=e.getSortedVisibleDatasetMetas();for(let l=r.length-1;l>=0;--l){const o=r[l].$filler;Am(o)&&Sd(e.ctx,o,e.chartArea)}},beforeDatasetDraw(e,t,n){const r=t.meta.$filler;!Am(r)||n.drawTime!=="beforeDatasetDraw"||Sd(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Om=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},Xk=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class Im extends vs{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n,r){this.maxWidth=t,this.maxHeight=n,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let n=Ve(t.generateLabels,[this.chart],this)||[];t.filter&&(n=n.filter(r=>t.filter(r,this.chart.data))),t.sort&&(n=n.sort((r,l)=>t.sort(r,l,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:t,ctx:n}=this;if(!t.display){this.width=this.height=0;return}const r=t.labels,l=_t(r.font),o=l.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Om(r,o);let p,m;n.font=l.string,this.isHorizontal()?(p=this.maxWidth,m=this._fitRows(c,o,u,h)+10):(m=this.maxHeight,p=this._fitCols(c,l,u,h)+10),this.width=Math.min(p,t.maxWidth||this.maxWidth),this.height=Math.min(m,t.maxHeight||this.maxHeight)}_fitRows(t,n,r,l){const{ctx:o,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],m=l+u;let x=t;o.textAlign="left",o.textBaseline="middle";let N=-1,w=-m;return this.legendItems.forEach((b,j)=>{const y=r+n/2+o.measureText(b.text).width;(j===0||p[p.length-1]+y+2*u>c)&&(x+=m,p[p.length-(j>0?0:1)]=0,w+=m,N++),h[j]={left:0,top:w,row:N,width:y,height:l},p[p.length-1]+=y+u}),x}_fitCols(t,n,r,l){const{ctx:o,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],m=c-t;let x=u,N=0,w=0,b=0,j=0;return this.legendItems.forEach((y,C)=>{const{itemWidth:D,itemHeight:T}=Gk(r,n,o,y,l);C>0&&w+T+2*u>m&&(x+=N+u,p.push({width:N,height:w}),b+=N+u,j++,N=w=0),h[C]={left:b,top:w,col:j,width:D,height:T},N=Math.max(N,D),w+=T+u}),x+=N,p.push({width:N,height:w}),x}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:r,labels:{padding:l},rtl:o}}=this,c=Bi(o,this.left,this.width);if(this.isHorizontal()){let u=0,h=Nt(r,this.left+l,this.right-this.lineWidths[u]);for(const p of n)u!==p.row&&(u=p.row,h=Nt(r,this.left+l,this.right-this.lineWidths[u])),p.top+=this.top+t+l,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+l}else{let u=0,h=Nt(r,this.top+t+l,this.bottom-this.columnSizes[u].height);for(const p of n)p.col!==u&&(u=p.col,h=Nt(r,this.top+t+l,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+l,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+l}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;po(t,this),this._draw(),mo(t)}}_draw(){const{options:t,columnSizes:n,lineWidths:r,ctx:l}=this,{align:o,labels:c}=t,u=tt.color,h=Bi(t.rtl,this.left,this.width),p=_t(c.font),{padding:m}=c,x=p.size,N=x/2;let w;this.drawTitle(),l.textAlign=h.textAlign("left"),l.textBaseline="middle",l.lineWidth=.5,l.font=p.string;const{boxWidth:b,boxHeight:j,itemHeight:y}=Om(c,x),C=function(H,M,R){if(isNaN(b)||b<=0||isNaN(j)||j<0)return;l.save();const A=Re(R.lineWidth,1);if(l.fillStyle=Re(R.fillStyle,u),l.lineCap=Re(R.lineCap,"butt"),l.lineDashOffset=Re(R.lineDashOffset,0),l.lineJoin=Re(R.lineJoin,"miter"),l.lineWidth=A,l.strokeStyle=Re(R.strokeStyle,u),l.setLineDash(Re(R.lineDash,[])),c.usePointStyle){const K={radius:j*Math.SQRT2/2,pointStyle:R.pointStyle,rotation:R.rotation,borderWidth:A},V=h.xPlus(H,b/2),F=M+N;ex(l,K,V,F,c.pointStyleWidth&&b)}else{const K=M+Math.max((x-j)/2,0),V=h.leftForLtr(H,b),F=Fi(R.borderRadius);l.beginPath(),Object.values(F).some(U=>U!==0)?eo(l,{x:V,y:K,w:b,h:j,radius:F}):l.rect(V,K,b,j),l.fill(),A!==0&&l.stroke()}l.restore()},D=function(H,M,R){ia(l,R.text,H,M+y/2,p,{strikethrough:R.hidden,textAlign:h.textAlign(R.textAlign)})},T=this.isHorizontal(),W=this._computeTitleHeight();T?w={x:Nt(o,this.left+m,this.right-r[0]),y:this.top+m+W,line:0}:w={x:this.left+m,y:Nt(o,this.top+W+m,this.bottom-n[0].height),line:0},lx(this.ctx,t.textDirection);const _=y+m;this.legendItems.forEach((H,M)=>{l.strokeStyle=H.fontColor,l.fillStyle=H.fontColor;const R=l.measureText(H.text).width,A=h.textAlign(H.textAlign||(H.textAlign=c.textAlign)),K=b+N+R;let V=w.x,F=w.y;h.setWidth(this.width),T?M>0&&V+K+m>this.right&&(F=w.y+=_,w.line++,V=w.x=Nt(o,this.left+m,this.right-r[w.line])):M>0&&F+_>this.bottom&&(V=w.x=V+n[w.line].width+m,w.line++,F=w.y=Nt(o,this.top+W+m,this.bottom-n[w.line].height));const U=h.x(V);if(C(U,F,H),V=EN(A,V+b+N,T?V+K:this.right,t.rtl),D(h.x(V),F,H),T)w.x+=K+m;else if(typeof H.text!="string"){const re=p.lineHeight;w.y+=Px(H,re)+m}else w.y+=_}),ox(this.ctx,t.textDirection)}drawTitle(){const t=this.options,n=t.title,r=_t(n.font),l=is(n.padding);if(!n.display)return;const o=Bi(t.rtl,this.left,this.width),c=this.ctx,u=n.position,h=r.size/2,p=l.top+h;let m,x=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),m=this.top+p,x=Nt(t.align,x,this.right-N);else{const b=this.columnSizes.reduce((j,y)=>Math.max(j,y.height),0);m=p+Nt(t.align,this.top,this.bottom-b-t.labels.padding-this._computeTitleHeight())}const w=Nt(u,x,x+N);c.textAlign=o.textAlign(au(u)),c.textBaseline="middle",c.strokeStyle=n.color,c.fillStyle=n.color,c.font=r.string,ia(c,n.text,w,m,r)}_computeTitleHeight(){const t=this.options.title,n=_t(t.font),r=is(t.padding);return t.display?n.lineHeight+r.height:0}_getLegendItemAt(t,n){let r,l,o;if(Ys(t,this.left,this.right)&&Ys(n,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(l=o[r],Ys(t,l.left,l.left+l.width)&&Ys(n,l.top,l.top+l.height))return this.legendItems[r]}return null}handleEvent(t){const n=this.options;if(!e_(t.type,n))return;const r=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const l=this._hoveredItem,o=Xk(l,r);l&&!o&&Ve(n.onLeave,[t,l,this],this),this._hoveredItem=r,r&&!o&&Ve(n.onHover,[t,r,this],this)}else r&&Ve(n.onClick,[t,r,this],this)}}function Gk(e,t,n,r,l){const o=Jk(r,e,t,n),c=Zk(l,r,t.lineHeight);return{itemWidth:o,itemHeight:c}}function Jk(e,t,n,r){let l=e.text;return l&&typeof l!="string"&&(l=l.reduce((o,c)=>o.length>c.length?o:c)),t+n.size/2+r.measureText(l).width}function Zk(e,t,n){let r=e;return typeof t.text!="string"&&(r=Px(t,n)),r}function Px(e,t){const n=e.text?e.text.length:0;return t*n}function e_(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Ax={id:"legend",_element:Im,start(e,t,n){const r=e.legend=new Im({ctx:e.ctx,options:n,chart:e});ns.configure(e,r,n),ns.addBox(e,r)},stop(e){ns.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){const r=e.legend;ns.configure(e,r,n),r.options=n},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){const r=t.datasetIndex,l=n.chart;l.isDatasetVisible(r)?(l.hide(r),t.hidden=!0):(l.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=e.legend.options;return e._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(n?0:void 0),m=is(p.borderWidth);return{text:t[h.index].label,fillStyle:p.backgroundColor,fontColor:o,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:p.borderColor,pointStyle:r||p.pointStyle,rotation:p.rotation,textAlign:l||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Tx extends vs{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,n){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=n;const l=at(r.text)?r.text.length:1;this._padding=is(r.padding);const o=l*_t(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:n,left:r,bottom:l,right:o,options:c}=this,u=c.align;let h=0,p,m,x;return this.isHorizontal()?(m=Nt(u,r,o),x=n+t,p=o-r):(c.position==="left"?(m=r+t,x=Nt(u,l,n),h=Be*-.5):(m=o-t,x=Nt(u,n,l),h=Be*.5),p=l-n),{titleX:m,titleY:x,maxWidth:p,rotation:h}}draw(){const t=this.ctx,n=this.options;if(!n.display)return;const r=_t(n.font),o=r.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(o);ia(t,n.text,0,0,r,{color:n.color,maxWidth:h,rotation:p,textAlign:au(n.align),textBaseline:"middle",translation:[c,u]})}}function t_(e,t){const n=new Tx({ctx:e.ctx,options:t,chart:e});ns.configure(e,n,t),ns.addBox(e,n),e.titleBlock=n}var Mx={id:"title",_element:Tx,start(e,t,n){t_(e,n)},stop(e){const t=e.titleBlock;ns.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){const r=e.titleBlock;ns.configure(e,r,n),r.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Hr={average(e){if(!e.length)return!1;let t,n,r=new Set,l=0,o=0;for(t=0,n=e.length;t<n;++t){const u=e[t].element;if(u&&u.hasValue()){const h=u.tooltipPosition();r.add(h.x),l+=h.y,++o}}return o===0||r.size===0?!1:{x:[...r].reduce((u,h)=>u+h)/r.size,y:l/o}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,l=Number.POSITIVE_INFINITY,o,c,u;for(o=0,c=e.length;o<c;++o){const h=e[o].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),m=Id(t,p);m<l&&(l=m,u=h)}}if(u){const h=u.tooltipPosition();n=h.x,r=h.y}return{x:n,y:r}}};function Es(e,t){return t&&(at(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Hs(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function s_(e,t){const{element:n,datasetIndex:r,index:l}=t,o=e.getDatasetMeta(r).controller,{label:c,value:u}=o.getLabelAndValue(l);return{chart:e,label:c,parsed:o.getParsed(l),raw:e.data.datasets[r].data[l],formattedValue:u,dataset:o.getDataset(),dataIndex:l,datasetIndex:r,element:n}}function zm(e,t){const n=e.chart.ctx,{body:r,footer:l,title:o}=e,{boxWidth:c,boxHeight:u}=t,h=_t(t.bodyFont),p=_t(t.titleFont),m=_t(t.footerFont),x=o.length,N=l.length,w=r.length,b=is(t.padding);let j=b.height,y=0,C=r.reduce((W,_)=>W+_.before.length+_.lines.length+_.after.length,0);if(C+=e.beforeBody.length+e.afterBody.length,x&&(j+=x*p.lineHeight+(x-1)*t.titleSpacing+t.titleMarginBottom),C){const W=t.displayColors?Math.max(u,h.lineHeight):h.lineHeight;j+=w*W+(C-w)*h.lineHeight+(C-1)*t.bodySpacing}N&&(j+=t.footerMarginTop+N*m.lineHeight+(N-1)*t.footerSpacing);let D=0;const T=function(W){y=Math.max(y,n.measureText(W).width+D)};return n.save(),n.font=p.string,Fe(e.title,T),n.font=h.string,Fe(e.beforeBody.concat(e.afterBody),T),D=t.displayColors?c+2+t.boxPadding:0,Fe(r,W=>{Fe(W.before,T),Fe(W.lines,T),Fe(W.after,T)}),D=0,n.font=m.string,Fe(e.footer,T),n.restore(),y+=b.width,{width:y,height:j}}function n_(e,t){const{y:n,height:r}=t;return n<r/2?"top":n>e.height-r/2?"bottom":"center"}function i_(e,t,n,r){const{x:l,width:o}=r,c=n.caretSize+n.caretPadding;if(e==="left"&&l+o+c>t.width||e==="right"&&l-o-c<0)return!0}function r_(e,t,n,r){const{x:l,width:o}=n,{width:c,chartArea:{left:u,right:h}}=e;let p="center";return r==="center"?p=l<=(u+h)/2?"left":"right":l<=o/2?p="left":l>=c-o/2&&(p="right"),i_(p,e,t,n)&&(p="center"),p}function Fm(e,t,n){const r=n.yAlign||t.yAlign||n_(e,n);return{xAlign:n.xAlign||t.xAlign||r_(e,t,n,r),yAlign:r}}function a_(e,t){let{x:n,width:r}=e;return t==="right"?n-=r:t==="center"&&(n-=r/2),n}function l_(e,t,n){let{y:r,height:l}=e;return t==="top"?r+=n:t==="bottom"?r-=l+n:r-=l/2,r}function Bm(e,t,n,r){const{caretSize:l,caretPadding:o,cornerRadius:c}=e,{xAlign:u,yAlign:h}=n,p=l+o,{topLeft:m,topRight:x,bottomLeft:N,bottomRight:w}=Fi(c);let b=a_(t,u);const j=l_(t,h,p);return h==="center"?u==="left"?b+=p:u==="right"&&(b-=p):u==="left"?b-=Math.max(m,N)+l:u==="right"&&(b+=Math.max(x,w)+l),{x:kt(b,0,r.width-t.width),y:kt(j,0,r.height-t.height)}}function Ol(e,t,n){const r=is(n.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-r.right:e.x+r.left}function $m(e){return Es([],Hs(e))}function o_(e,t,n){return li(e,{tooltip:t,tooltipItems:n,type:"tooltip"})}function Um(e,t){const n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}const Lx={beforeTitle:Us,title(e){if(e.length>0){const t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return""},afterTitle:Us,beforeBody:Us,beforeLabel:Us,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const n=e.formattedValue;return Oe(n)||(t+=n),t},labelColor(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const n=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Us,afterBody:Us,beforeFooter:Us,footer:Us,afterFooter:Us};function It(e,t,n,r){const l=e[t].call(n,r);return typeof l>"u"?Lx[t].call(n,r):l}class Hd extends vs{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const n=this.chart,r=this.options.setContext(this.getContext()),l=r.enabled&&n.options.animation&&r.animations,o=new fx(this.chart,l);return l._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=o_(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,n){const{callbacks:r}=n,l=It(r,"beforeTitle",this,t),o=It(r,"title",this,t),c=It(r,"afterTitle",this,t);let u=[];return u=Es(u,Hs(l)),u=Es(u,Hs(o)),u=Es(u,Hs(c)),u}getBeforeBody(t,n){return $m(It(n.callbacks,"beforeBody",this,t))}getBody(t,n){const{callbacks:r}=n,l=[];return Fe(t,o=>{const c={before:[],lines:[],after:[]},u=Um(r,o);Es(c.before,Hs(It(u,"beforeLabel",this,o))),Es(c.lines,It(u,"label",this,o)),Es(c.after,Hs(It(u,"afterLabel",this,o))),l.push(c)}),l}getAfterBody(t,n){return $m(It(n.callbacks,"afterBody",this,t))}getFooter(t,n){const{callbacks:r}=n,l=It(r,"beforeFooter",this,t),o=It(r,"footer",this,t),c=It(r,"afterFooter",this,t);let u=[];return u=Es(u,Hs(l)),u=Es(u,Hs(o)),u=Es(u,Hs(c)),u}_createItems(t){const n=this._active,r=this.chart.data,l=[],o=[],c=[];let u=[],h,p;for(h=0,p=n.length;h<p;++h)u.push(s_(this.chart,n[h]));return t.filter&&(u=u.filter((m,x,N)=>t.filter(m,x,N,r))),t.itemSort&&(u=u.sort((m,x)=>t.itemSort(m,x,r))),Fe(u,m=>{const x=Um(t.callbacks,m);l.push(It(x,"labelColor",this,m)),o.push(It(x,"labelPointStyle",this,m)),c.push(It(x,"labelTextColor",this,m))}),this.labelColors=l,this.labelPointStyles=o,this.labelTextColors=c,this.dataPoints=u,u}update(t,n){const r=this.options.setContext(this.getContext()),l=this._active;let o,c=[];if(!l.length)this.opacity!==0&&(o={opacity:0});else{const u=Hr[r.position].call(this,l,this._eventPosition);c=this._createItems(r),this.title=this.getTitle(c,r),this.beforeBody=this.getBeforeBody(c,r),this.body=this.getBody(c,r),this.afterBody=this.getAfterBody(c,r),this.footer=this.getFooter(c,r);const h=this._size=zm(this,r),p=Object.assign({},u,h),m=Fm(this.chart,r,p),x=Bm(r,p,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,o={opacity:1,x:x.x,y:x.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(t,n,r,l){const o=this.getCaretPosition(t,r,l);n.lineTo(o.x1,o.y1),n.lineTo(o.x2,o.y2),n.lineTo(o.x3,o.y3)}getCaretPosition(t,n,r){const{xAlign:l,yAlign:o}=this,{caretSize:c,cornerRadius:u}=r,{topLeft:h,topRight:p,bottomLeft:m,bottomRight:x}=Fi(u),{x:N,y:w}=t,{width:b,height:j}=n;let y,C,D,T,W,_;return o==="center"?(W=w+j/2,l==="left"?(y=N,C=y-c,T=W+c,_=W-c):(y=N+b,C=y+c,T=W-c,_=W+c),D=y):(l==="left"?C=N+Math.max(h,m)+c:l==="right"?C=N+b-Math.max(p,x)-c:C=this.caretX,o==="top"?(T=w,W=T-c,y=C-c,D=C+c):(T=w+j,W=T+c,y=C+c,D=C-c),_=T),{x1:y,x2:C,x3:D,y1:T,y2:W,y3:_}}drawTitle(t,n,r){const l=this.title,o=l.length;let c,u,h;if(o){const p=Bi(r.rtl,this.x,this.width);for(t.x=Ol(this,r.titleAlign,r),n.textAlign=p.textAlign(r.titleAlign),n.textBaseline="middle",c=_t(r.titleFont),u=r.titleSpacing,n.fillStyle=r.titleColor,n.font=c.string,h=0;h<o;++h)n.fillText(l[h],p.x(t.x),t.y+c.lineHeight/2),t.y+=c.lineHeight+u,h+1===o&&(t.y+=r.titleMarginBottom-u)}}_drawColorBox(t,n,r,l,o){const c=this.labelColors[r],u=this.labelPointStyles[r],{boxHeight:h,boxWidth:p}=o,m=_t(o.bodyFont),x=Ol(this,"left",o),N=l.x(x),w=h<m.lineHeight?(m.lineHeight-h)/2:0,b=n.y+w;if(o.usePointStyle){const j={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=l.leftForLtr(N,p)+p/2,C=b+h/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Fd(t,j,y,C),t.strokeStyle=c.borderColor,t.fillStyle=c.backgroundColor,Fd(t,j,y,C)}else{t.lineWidth=Pe(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,t.strokeStyle=c.borderColor,t.setLineDash(c.borderDash||[]),t.lineDashOffset=c.borderDashOffset||0;const j=l.leftForLtr(N,p),y=l.leftForLtr(l.xPlus(N,1),p-2),C=Fi(c.borderRadius);Object.values(C).some(D=>D!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,eo(t,{x:j,y:b,w:p,h,radius:C}),t.fill(),t.stroke(),t.fillStyle=c.backgroundColor,t.beginPath(),eo(t,{x:y,y:b+1,w:p-2,h:h-2,radius:C}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(j,b,p,h),t.strokeRect(j,b,p,h),t.fillStyle=c.backgroundColor,t.fillRect(y,b+1,p-2,h-2))}t.fillStyle=this.labelTextColors[r]}drawBody(t,n,r){const{body:l}=this,{bodySpacing:o,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:m}=r,x=_t(r.bodyFont);let N=x.lineHeight,w=0;const b=Bi(r.rtl,this.x,this.width),j=function(R){n.fillText(R,b.x(t.x+w),t.y+N/2),t.y+=N+o},y=b.textAlign(c);let C,D,T,W,_,H,M;for(n.textAlign=c,n.textBaseline="middle",n.font=x.string,t.x=Ol(this,y,r),n.fillStyle=r.bodyColor,Fe(this.beforeBody,j),w=u&&y!=="right"?c==="center"?p/2+m:p+2+m:0,W=0,H=l.length;W<H;++W){for(C=l[W],D=this.labelTextColors[W],n.fillStyle=D,Fe(C.before,j),T=C.lines,u&&T.length&&(this._drawColorBox(n,t,W,b,r),N=Math.max(x.lineHeight,h)),_=0,M=T.length;_<M;++_)j(T[_]),N=x.lineHeight;Fe(C.after,j)}w=0,N=x.lineHeight,Fe(this.afterBody,j),t.y-=o}drawFooter(t,n,r){const l=this.footer,o=l.length;let c,u;if(o){const h=Bi(r.rtl,this.x,this.width);for(t.x=Ol(this,r.footerAlign,r),t.y+=r.footerMarginTop,n.textAlign=h.textAlign(r.footerAlign),n.textBaseline="middle",c=_t(r.footerFont),n.fillStyle=r.footerColor,n.font=c.string,u=0;u<o;++u)n.fillText(l[u],h.x(t.x),t.y+c.lineHeight/2),t.y+=c.lineHeight+r.footerSpacing}}drawBackground(t,n,r,l){const{xAlign:o,yAlign:c}=this,{x:u,y:h}=t,{width:p,height:m}=r,{topLeft:x,topRight:N,bottomLeft:w,bottomRight:b}=Fi(l.cornerRadius);n.fillStyle=l.backgroundColor,n.strokeStyle=l.borderColor,n.lineWidth=l.borderWidth,n.beginPath(),n.moveTo(u+x,h),c==="top"&&this.drawCaret(t,n,r,l),n.lineTo(u+p-N,h),n.quadraticCurveTo(u+p,h,u+p,h+N),c==="center"&&o==="right"&&this.drawCaret(t,n,r,l),n.lineTo(u+p,h+m-b),n.quadraticCurveTo(u+p,h+m,u+p-b,h+m),c==="bottom"&&this.drawCaret(t,n,r,l),n.lineTo(u+w,h+m),n.quadraticCurveTo(u,h+m,u,h+m-w),c==="center"&&o==="left"&&this.drawCaret(t,n,r,l),n.lineTo(u,h+x),n.quadraticCurveTo(u,h,u+x,h),n.closePath(),n.fill(),l.borderWidth>0&&n.stroke()}_updateAnimationTarget(t){const n=this.chart,r=this.$animations,l=r&&r.x,o=r&&r.y;if(l||o){const c=Hr[t.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=zm(this,t),h=Object.assign({},c,this._size),p=Fm(n,t,h),m=Bm(t,h,p,n);(l._to!==m.x||o._to!==m.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(t){const n=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(n);const l={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const c=is(n.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&u&&(t.save(),t.globalAlpha=r,this.drawBackground(o,t,l,n),lx(t,n.textDirection),o.y+=c.top,this.drawTitle(o,t,n),this.drawBody(o,t,n),this.drawFooter(o,t,n),ox(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,n){const r=this._active,l=t.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),o=!Gl(r,l),c=this._positionChanged(l,n);(o||c)&&(this._active=l,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,n,r=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const l=this.options,o=this._active||[],c=this._getActiveElements(t,o,n,r),u=this._positionChanged(c,t),h=n||!Gl(c,o)||u;return h&&(this._active=c,(l.enabled||l.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,n))),h}_getActiveElements(t,n,r,l){const o=this.options;if(t.type==="mouseout")return[];if(!l)return n.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(t,o.mode,o,r);return o.reverse&&c.reverse(),c}_positionChanged(t,n){const{caretX:r,caretY:l,options:o}=this,c=Hr[o.position].call(this,t,n);return c!==!1&&(r!==c.x||l!==c.y)}}je(Hd,"positioners",Hr);var Ox={id:"tooltip",_element:Hd,positioners:Hr,afterInit(e,t,n){n&&(e.tooltip=new Hd({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const n={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",n)}},afterEvent(e,t){if(e.tooltip){const n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Lx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const c_=(e,t,n,r)=>(typeof t=="string"?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function d_(e,t,n,r){const l=e.indexOf(t);if(l===-1)return c_(e,t,n,r);const o=e.lastIndexOf(t);return l!==o?n:l}const u_=(e,t)=>e===null?null:kt(Math.round(e),0,t);function Wm(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class io extends qi{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const n=this._addedLabels;if(n.length){const r=this.getLabels();for(const{index:l,label:o}of n)r[l]===o&&r.splice(l,1);this._addedLabels=[]}super.init(t)}parse(t,n){if(Oe(t))return null;const r=this.getLabels();return n=isFinite(n)&&r[n]===t?n:d_(r,t,Re(n,t),this._addedLabels),u_(n,r.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:n}=this.getUserBounds();let{min:r,max:l}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(r=0),n||(l=this.getLabels().length-1)),this.min=r,this.max=l}buildTicks(){const t=this.min,n=this.max,r=this.options.offset,l=[];let o=this.getLabels();o=t===0&&n===o.length-1?o:o.slice(t,n+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let c=t;c<=n;c++)l.push({value:c});return l}getLabelForValue(t){return Wm.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const n=this.ticks;return t<0||t>n.length-1?null:this.getPixelForValue(n[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}je(io,"id","category"),je(io,"defaults",{ticks:{callback:Wm}});function h_(e,t){const n=[],{bounds:l,step:o,min:c,max:u,precision:h,count:p,maxTicks:m,maxDigits:x,includeBounds:N}=e,w=o||1,b=m-1,{min:j,max:y}=t,C=!Oe(c),D=!Oe(u),T=!Oe(p),W=(y-j)/(x+1);let _=Bp((y-j)/b/w)*w,H,M,R,A;if(_<1e-14&&!C&&!D)return[{value:j},{value:y}];A=Math.ceil(y/_)-Math.floor(j/_),A>b&&(_=Bp(A*_/b/w)*w),Oe(h)||(H=Math.pow(10,h),_=Math.ceil(_*H)/H),l==="ticks"?(M=Math.floor(j/_)*_,R=Math.ceil(y/_)*_):(M=j,R=y),C&&D&&o&&yN((u-c)/o,_/1e3)?(A=Math.round(Math.min((u-c)/_,m)),_=(u-c)/A,M=c,R=u):T?(M=C?c:M,R=D?u:R,A=p-1,_=(R-M)/A):(A=(R-M)/_,qr(A,Math.round(A),_/1e3)?A=Math.round(A):A=Math.ceil(A));const K=Math.max($p(_),$p(M));H=Math.pow(10,Oe(h)?K:h),M=Math.round(M*H)/H,R=Math.round(R*H)/H;let V=0;for(C&&(N&&M!==c?(n.push({value:c}),M<c&&V++,qr(Math.round((M+V*_)*H)/H,c,Hm(c,W,e))&&V++):M<c&&V++);V<A;++V){const F=Math.round((M+V*_)*H)/H;if(D&&F>u)break;n.push({value:F})}return D&&N&&R!==u?n.length&&qr(n[n.length-1].value,u,Hm(u,W,e))?n[n.length-1].value=u:n.push({value:u}):(!D||R===u)&&n.push({value:R}),n}function Hm(e,t,{horizontal:n,minRotation:r}){const l=qs(r),o=(n?Math.sin(l):Math.cos(l))||.001,c=.75*t*(""+e).length;return Math.min(t/o,c)}class f_ extends qi{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,n){return Oe(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:n,maxDefined:r}=this.getUserBounds();let{min:l,max:o}=this;const c=h=>l=n?l:h,u=h=>o=r?o:h;if(t){const h=Ds(l),p=Ds(o);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(l===o){let h=o===0?1:Math.abs(o*.05);u(o+h),t||c(l-h)}this.min=l,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:n,stepSize:r}=t,l;return r?(l=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,l>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${l} ticks. Limiting to 1000.`),l=1e3)):(l=this.computeTickLimit(),n=n||11),n&&(l=Math.min(n,l)),l}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,n=t.ticks;let r=this.getTickLimit();r=Math.max(2,r);const l={maxTicks:r,bounds:t.bounds,min:t.min,max:t.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},o=this._range||this,c=h_(l,o);return t.bounds==="ticks"&&bN(c,this,"value"),t.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const t=this.ticks;let n=this.min,r=this.max;if(super.configure(),this.options.offset&&t.length){const l=(r-n)/Math.max(t.length-1,1)/2;n-=l,r+=l}this._startValue=n,this._endValue=r,this._valueRange=r-n}getLabelForValue(t){return ou(t,this.chart.options.locale,this.options.ticks.format)}}class ro extends f_{determineDataLimits(){const{min:t,max:n}=this.getMinMax(!0);this.min=St(t)?t:0,this.max=St(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),n=t?this.width:this.height,r=qs(this.options.ticks.minRotation),l=(t?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,o.lineHeight/l))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}je(ro,"id","linear"),je(ro,"defaults",{ticks:{callback:Zg.formatters.numeric}});const yo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},zt=Object.keys(yo);function Vm(e,t){return e-t}function qm(e,t){if(Oe(t))return null;const n=e._adapter,{parser:r,round:l,isoWeekday:o}=e._parseOpts;let c=t;return typeof r=="function"&&(c=r(c)),St(c)||(c=typeof r=="string"?n.parse(c,r):n.parse(c)),c===null?null:(l&&(c=l==="week"&&(ta(o)||o===!0)?n.startOf(c,"isoWeek",o):n.startOf(c,l)),+c)}function Ym(e,t,n,r){const l=zt.length;for(let o=zt.indexOf(e);o<l-1;++o){const c=yo[zt[o]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((n-t)/(u*c.size))<=r)return zt[o]}return zt[l-1]}function p_(e,t,n,r,l){for(let o=zt.length-1;o>=zt.indexOf(n);o--){const c=zt[o];if(yo[c].common&&e._adapter.diff(l,r,c)>=t-1)return c}return zt[n?zt.indexOf(n):0]}function m_(e){for(let t=zt.indexOf(e)+1,n=zt.length;t<n;++t)if(yo[zt[t]].common)return zt[t]}function Qm(e,t,n){if(!n)e[t]=!0;else if(n.length){const{lo:r,hi:l}=ru(n,t),o=n[r]>=t?n[r]:n[l];e[o]=!0}}function g_(e,t,n,r){const l=e._adapter,o=+l.startOf(t[0].value,r),c=t[t.length-1].value;let u,h;for(u=o;u<=c;u=+l.add(u,1,r))h=n[u],h>=0&&(t[h].major=!0);return t}function Km(e,t,n){const r=[],l={},o=t.length;let c,u;for(c=0;c<o;++c)u=t[c],l[u]=c,r.push({value:u,major:!1});return o===0||!n?r:g_(e,r,l,n)}class ao extends qi{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,n={}){const r=t.time||(t.time={}),l=this._adapter=new sw._date(t.adapters.date);l.init(n),Vr(r.displayFormats,l.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(t),this._normalized=n.normalized}parse(t,n){return t===void 0?null:qm(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,n=this._adapter,r=t.time.unit||"day";let{min:l,max:o,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(l=Math.min(l,p.min)),!u&&!isNaN(p.max)&&(o=Math.max(o,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&h(this.getMinMax(!1))),l=St(l)&&!isNaN(l)?l:+n.startOf(Date.now(),r),o=St(o)&&!isNaN(o)?o:+n.endOf(Date.now(),r)+1,this.min=Math.min(l,o-1),this.max=Math.max(l+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return t.length&&(n=t[0],r=t[t.length-1]),{min:n,max:r}}buildTicks(){const t=this.options,n=t.time,r=t.ticks,l=r.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&l.length&&(this.min=this._userMin||l[0],this.max=this._userMax||l[l.length-1]);const o=this.min,c=this.max,u=_N(l,o,c);return this._unit=n.unit||(r.autoSkip?Ym(n.minUnit,this.min,this.max,this._getLabelCapacity(o)):p_(this,u.length,n.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:m_(this._unit),this.initOffsets(l),t.reverse&&u.reverse(),Km(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let n=0,r=0,l,o;this.options.offset&&t.length&&(l=this.getDecimalForValue(t[0]),t.length===1?n=1-l:n=(this.getDecimalForValue(t[1])-l)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?r=o:r=(o-this.getDecimalForValue(t[t.length-2]))/2);const c=t.length<3?.5:.25;n=kt(n,0,c),r=kt(r,0,c),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){const t=this._adapter,n=this.min,r=this.max,l=this.options,o=l.time,c=o.unit||Ym(o.minUnit,n,r,this._getLabelCapacity(n)),u=Re(l.ticks.stepSize,1),h=c==="week"?o.isoWeekday:!1,p=ta(h)||h===!0,m={};let x=n,N,w;if(p&&(x=+t.startOf(x,"isoWeek",h)),x=+t.startOf(x,p?"day":c),t.diff(r,n,c)>1e5*u)throw new Error(n+" and "+r+" are too far apart with stepSize of "+u+" "+c);const b=l.ticks.source==="data"&&this.getDataTimestamps();for(N=x,w=0;N<r;N=+t.add(N,u,c),w++)Qm(m,N,b);return(N===r||l.bounds==="ticks"||w===1)&&Qm(m,N,b),Object.keys(m).sort(Vm).map(j=>+j)}getLabelForValue(t){const n=this._adapter,r=this.options.time;return r.tooltipFormat?n.format(t,r.tooltipFormat):n.format(t,r.displayFormats.datetime)}format(t,n){const l=this.options.time.displayFormats,o=this._unit,c=n||l[o];return this._adapter.format(t,c)}_tickFormatFunction(t,n,r,l){const o=this.options,c=o.ticks.callback;if(c)return Ve(c,[t,n,r],this);const u=o.time.displayFormats,h=this._unit,p=this._majorUnit,m=h&&u[h],x=p&&u[p],N=r[n],w=p&&x&&N&&N.major;return this._adapter.format(t,l||(w?x:m))}generateTickLabels(t){let n,r,l;for(n=0,r=t.length;n<r;++n)l=t[n],l.label=this._tickFormatFunction(l.value,n,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const n=this._offsets,r=this.getDecimalForValue(t);return this.getPixelForDecimal((n.start+r)*n.factor)}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return this.min+r*(this.max-this.min)}_getLabelSize(t){const n=this.options.ticks,r=this.ctx.measureText(t).width,l=qs(this.isHorizontal()?n.maxRotation:n.minRotation),o=Math.cos(l),c=Math.sin(l),u=this._resolveTickFontOptions(0).size;return{w:r*o+u*c,h:r*c+u*o}}_getLabelCapacity(t){const n=this.options.time,r=n.displayFormats,l=r[n.unit]||r.millisecond,o=this._tickFormatFunction(t,0,Km(this,[t],this._majorUnit),l),c=this._getLabelSize(o),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let t=this._cache.data||[],n,r;if(t.length)return t;const l=this.getMatchingVisibleMetas();if(this._normalized&&l.length)return this._cache.data=l[0].controller.getAllParsedValues(this);for(n=0,r=l.length;n<r;++n)t=t.concat(l[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let n,r;if(t.length)return t;const l=this.getLabels();for(n=0,r=l.length;n<r;++n)t.push(qm(this,l[n]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Xg(t.sort(Vm))}}je(ao,"id","time"),je(ao,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Il(e,t,n){let r=0,l=e.length-1,o,c,u,h;n?(t>=e[r].pos&&t<=e[l].pos&&({lo:r,hi:l}=Zn(e,"pos",t)),{pos:o,time:u}=e[r],{pos:c,time:h}=e[l]):(t>=e[r].time&&t<=e[l].time&&({lo:r,hi:l}=Zn(e,"time",t)),{time:o,pos:u}=e[r],{time:c,pos:h}=e[l]);const p=c-o;return p?u+(h-u)*(t-o)/p:u}class Xm extends ao{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(t);this._minPos=Il(n,this.min),this._tableRange=Il(n,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:n,max:r}=this,l=[],o=[];let c,u,h,p,m;for(c=0,u=t.length;c<u;++c)p=t[c],p>=n&&p<=r&&l.push(p);if(l.length<2)return[{time:n,pos:0},{time:r,pos:1}];for(c=0,u=l.length;c<u;++c)m=l[c+1],h=l[c-1],p=l[c],Math.round((m+h)/2)!==p&&o.push({time:p,pos:c/(u-1)});return o}_generate(){const t=this.min,n=this.max;let r=super.getDataTimestamps();return(!r.includes(t)||!r.length)&&r.splice(0,0,t),(!r.includes(n)||r.length===1)&&r.push(n),r.sort((l,o)=>l-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const n=this.getDataTimestamps(),r=this.getLabelTimestamps();return n.length&&r.length?t=this.normalize(n.concat(r)):t=n.length?n:r,t=this._cache.all=t,t}getDecimalForValue(t){return(Il(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const n=this._offsets,r=this.getDecimalForPixel(t)/n.factor-n.end;return Il(this._table,r*this._tableRange+this._minPos,!0)}}je(Xm,"id","timeseries"),je(Xm,"defaults",ao.defaults);const Ix="label";function Gm(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function x_(e,t){const n=e.options;n&&t&&Object.assign(n,t)}function zx(e,t){e.labels=t}function Fx(e,t,n=Ix){const r=[];e.datasets=t.map(l=>{const o=e.datasets.find(c=>c[n]===l[n]);return!o||!l.data||r.includes(o)?{...l}:(r.push(o),Object.assign(o,l),o)})}function v_(e,t=Ix){const n={labels:[],datasets:[]};return zx(n,e.labels),Fx(n,e.datasets,t),n}function y_(e,t){const{height:n=150,width:r=300,redraw:l=!1,datasetIdKey:o,type:c,data:u,options:h,plugins:p=[],fallbackContent:m,updateMode:x,...N}=e,w=E.useRef(null),b=E.useRef(null),j=()=>{w.current&&(b.current=new pa(w.current,{type:c,data:v_(u,o),options:h&&{...h},plugins:p}),Gm(t,b.current))},y=()=>{Gm(t,null),b.current&&(b.current.destroy(),b.current=null)};return E.useEffect(()=>{!l&&b.current&&h&&x_(b.current,h)},[l,h]),E.useEffect(()=>{!l&&b.current&&zx(b.current.config.data,u.labels)},[l,u.labels]),E.useEffect(()=>{!l&&b.current&&u.datasets&&Fx(b.current.config.data,u.datasets,o)},[l,u.datasets]),E.useEffect(()=>{b.current&&(l?(y(),setTimeout(j)):b.current.update(x))},[l,h,u.labels,u.datasets,x]),E.useEffect(()=>{b.current&&(y(),setTimeout(j))},[c]),E.useEffect(()=>(j(),()=>y()),[]),s.jsx("canvas",{ref:w,role:"img",height:n,width:r,...N,children:m})}const b_=E.forwardRef(y_);function gu(e,t){return pa.register(t),E.forwardRef((n,r)=>s.jsx(b_,{...n,ref:r,type:e}))}const Vd=gu("line",Vl),j_=gu("bar",Hl),N_=gu("doughnut",$r);pa.register(io,ro,Kr,Qs,Ql,Wr,Mx,Ox,Ax,Dx);function w_(){var C,D,T,W,_,H,M,R,A;const{t:e}=nt(),t=Ks(),[n,r]=E.useState(null),[l,o]=E.useState(null),[c,u]=E.useState(null),[h,p]=E.useState(!0);if(E.useEffect(()=>{Promise.all([xs.stats(),Ld.get(24),$g.getCollectionStats()]).then(([K,V,F])=>{var z,$;r(K.data);const U=24,re=[],J=[],k=[];for(let te=U-1;te>=0;te--){const se=new Date;se.setHours(se.getHours()-te),re.push(se.getHours()+":00");const L=new Date(se);L.setMinutes(0,0,0);const Z=new Date(se);Z.setMinutes(59,59,999);const ue=((z=V.data.entries)==null?void 0:z.filter(we=>{const ee=new Date(we.timestamp);return we.type==="event"&&ee>=L&&ee<=Z}).length)||0,fe=(($=V.data.entries)==null?void 0:$.filter(we=>{const ee=new Date(we.timestamp);return we.type==="alert"&&ee>=L&&ee<=Z}).length)||0;J.push(ue),k.push(fe)}o({labels:re,events:J,alerts:k}),u(F.data),p(!1)}).catch(()=>{r({total:0,by_severity:{},by_status:{}}),o({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return s.jsx("div",{className:"dashboard",children:s.jsxs("div",{className:"dashboard-loading",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:e("common.loading")})]})});const m=n!=null&&n.by_type?Object.entries(n.by_type).sort((K,V)=>V[1]-K[1]).slice(0,5):[],x={labels:(l==null?void 0:l.labels)||[],datasets:[{label:e("dashboard.events"),data:(l==null?void 0:l.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:e("dashboard.alerts"),data:(l==null?void 0:l.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},N={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:m.map(([K])=>K),datasets:[{data:m.map(([,K])=>K),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},j={labels:[e("dashboard.critical"),e("dashboard.high"),e("dashboard.medium"),e("dashboard.low")],datasets:[{label:e("dashboard.alerts"),data:[((C=n==null?void 0:n.by_severity)==null?void 0:C.critical)||0,((D=n==null?void 0:n.by_severity)==null?void 0:D.high)||0,((T=n==null?void 0:n.by_severity)==null?void 0:T.medium)||0,((W=n==null?void 0:n.by_severity)==null?void 0:W.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return s.jsxs("div",{className:"dashboard",children:[s.jsxs("div",{className:"dashboard-header",children:[s.jsx("h2",{children:e("dashboard.title")}),s.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),s.jsxs("div",{className:"stats-cards",children:[s.jsxs("div",{className:"stat-card glow-critical",onClick:()=>t("/alerts?severity=critical"),children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),s.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),s.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:((_=n==null?void 0:n.by_severity)==null?void 0:_.critical)||0}),s.jsx("span",{className:"stat-label",children:e("dashboard.critical")})]}),s.jsx("div",{className:"stat-glow"})]}),s.jsxs("div",{className:"stat-card glow-high",onClick:()=>t("/alerts?severity=high"),children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),s.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:((H=n==null?void 0:n.by_severity)==null?void 0:H.high)||0}),s.jsx("span",{className:"stat-label",children:e("dashboard.high")})]}),s.jsx("div",{className:"stat-glow"})]}),s.jsxs("div",{className:"stat-card glow-medium",onClick:()=>t("/alerts?severity=medium"),children:[s.jsx("div",{className:"stat-icon",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:((M=n==null?void 0:n.by_severity)==null?void 0:M.medium)||0}),s.jsx("span",{className:"stat-label",children:e("dashboard.medium")})]}),s.jsx("div",{className:"stat-glow"})]}),s.jsxs("div",{className:"stat-card glow-low",onClick:()=>t("/alerts?severity=low"),children:[s.jsx("div",{className:"stat-icon",children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),s.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:((R=n==null?void 0:n.by_severity)==null?void 0:R.low)||0}),s.jsx("span",{className:"stat-label",children:e("dashboard.low")})]}),s.jsx("div",{className:"stat-glow"})]})]}),s.jsxs("div",{className:"dashboard-grid",children:[s.jsxs("div",{className:"chart-card chart-trend",onClick:()=>t("/timeline"),children:[s.jsxs("div",{className:"chart-header",children:[s.jsx("h3",{children:e("dashboard.eventTrend")}),s.jsx("span",{className:"chart-subtitle",children:e("dashboard.last24Hours")})]}),s.jsx("div",{className:"chart-body",children:s.jsx(Vd,{data:x,options:N})})]}),s.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>t("/alerts"),children:[s.jsxs("div",{className:"chart-header",children:[s.jsx("h3",{children:e("dashboard.topAlertTypes")}),s.jsx("span",{className:"chart-subtitle",children:e("dashboard.clickToView")})]}),s.jsx("div",{className:"chart-body",children:m.length>0?s.jsx(N_,{data:w,options:b}):s.jsx("div",{className:"chart-empty",children:e("dashboard.noData")})})]}),s.jsxs("div",{className:"chart-card chart-severity",onClick:()=>t("/alerts"),children:[s.jsx("div",{className:"chart-header",children:s.jsx("h3",{children:e("dashboard.bySeverity")})}),s.jsx("div",{className:"chart-body",children:s.jsx(j_,{data:j,options:y})})]}),s.jsxs("div",{className:"chart-card chart-collection",children:[s.jsx("div",{className:"chart-header",children:s.jsx("h3",{children:e("dashboard.collectionStatus")})}),s.jsxs("div",{className:"chart-body collection-stats",children:[s.jsxs("div",{className:"collection-item",children:[s.jsx("span",{className:"collection-label",children:e("dashboard.totalEvents")}),s.jsx("span",{className:"collection-value",children:((A=c==null?void 0:c.total_events)==null?void 0:A.toLocaleString())||0})]}),s.jsxs("div",{className:"collection-item",children:[s.jsx("span",{className:"collection-label",children:e("dashboard.dataSize")}),s.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),s.jsxs("div",{className:"collection-item",children:[s.jsx("span",{className:"collection-label",children:e("dashboard.lastImport")}),s.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),s.jsxs("div",{className:"collection-sources",children:[s.jsx("span",{className:"collection-label",children:e("dashboard.sources")}),s.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(K=>s.jsx("span",{className:"source-tag",children:K},K))})]})]})]})]}),s.jsxs("div",{className:"recent-section",onClick:()=>t("/alerts"),children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("dashboard.recentAlerts")}),s.jsxs("span",{className:"view-more",children:[e("dashboard.viewAll")," →"]})]}),s.jsx("div",{className:"recent-alerts-list",children:n&&n.total>0?s.jsxs("div",{className:"alert-preview",children:[s.jsx("div",{className:"alert-count-badge",children:n.total}),s.jsx("span",{children:e("dashboard.totalAlertsDesc")})]}):s.jsxs("div",{className:"no-alerts",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),s.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),s.jsx("span",{children:e("dashboard.noAlerts")})]})})]})]})}function k_(){var Rn;const e=la(),[t,n]=E.useState([]),[r,l]=E.useState(!0),[o,c]=E.useState(1),[u,h]=E.useState(50),[p,m]=E.useState(""),[x,N]=E.useState(1),[w,b]=E.useState(0),[j,y]=E.useState(!1),[C,D]=E.useState(!1),[T,W]=E.useState(0),[_,H]=E.useState(!1),[M,R]=E.useState([]),[A,K]=E.useState(!1),[V,F]=E.useState("timestamp"),[U,re]=E.useState("desc"),[J,k]=E.useState(""),[z,$]=E.useState(""),[te,se]=E.useState(""),[L,Z]=E.useState(""),[ue,fe]=E.useState(null),[we,ee]=E.useState({x:0,y:0}),[de,pe]=E.useState("AND"),[O,ke]=E.useState([]),[Ue,pt]=E.useState(!1),[ve,Yt]=E.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4});E.useEffect(()=>{const ae=new URLSearchParams(e.search),he=ae.get("event_ids"),Ae=ae.get("keywords");(he||Ae)&&(D(!0),Yt(it=>({...it,event_ids:he?he.split(",").map(ls=>parseInt(ls.trim(),10)).filter(ls=>!isNaN(ls)):[],keywords:Ae||""})),he&&Z(he))},[e.search]);const oi=(ae=1)=>{l(!0);const he={Critical:1,Error:2,Warning:3,Info:4,Debug:5},Ae=L.split(",").map(Ie=>parseInt(Ie.trim(),10)).filter(Ie=>!isNaN(Ie)),it=J.split(",").map(Ie=>Ie.trim()).filter(Ie=>Ie.length>0),ls=z.split(",").map(Ie=>Ie.trim()).filter(Ie=>Ie.length>0),bs=te.split(",").map(Ie=>Ie.trim()).filter(Ie=>Ie.length>0),Ps={keywords:(ve==null?void 0:ve.keywords)||"",keyword_mode:de,regex:A,page:ae,page_size:u,sort_by:V,sort_order:U,start_time:(ve==null?void 0:ve.start_time)||void 0,end_time:(ve==null?void 0:ve.end_time)||void 0,levels:M.map(Ie=>he[Ie]).filter(Ie=>Ie),event_ids:Ae.length>0?Ae:void 0,log_names:ve!=null&&ve.log_names&&ve.log_names.length>0?ve.log_names:void 0,sources:it.length>0?it:void 0,users:ls.length>0?ls:void 0,computers:bs.length>0?bs:void 0};Kn.search(Ps).then(Ie=>{const Dt=Ie.data;n(Dt.events||[]),b(Dt.total||0);const Dn=Math.ceil((Dt.total||0)/u);N(Dn||1),W(Dt.query_time_ms||0),D(!0),l(!1)}).catch(()=>{Kn.list(ae,u).then(Ie=>{const Dt=Ie.data;n(Dt.events||[]),b(Dt.total||0),N(Dt.total_pages||1),D(!1),l(!1)}).catch(()=>l(!1))})},Xs=()=>{c(1),oi(1)},Sn=()=>{Yt({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),R([]),K(!1),F("timestamp"),re("desc"),k(""),$(""),se(""),Z(""),D(!1),pe("AND"),c(1)};E.useEffect(()=>{l(!0);const ae=ve&&(ve.log_names&&ve.log_names.length>0||ve.levels&&ve.levels.length>0||ve.event_ids&&ve.event_ids.length>0||ve.start_time||ve.end_time);ve!=null&&ve.keywords&&ve.keywords.trim()!==""?Kn.search({keywords:ve.keywords,keyword_mode:de,regex:A,page:o,page_size:u,sort_by:V,sort_order:U,levels:M.map(he=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[he]||0).filter(he=>he>0),start_time:ve.start_time,end_time:ve.end_time}).then(he=>{const Ae=he.data;n(Ae.events||[]),b(Ae.total||0);const it=Math.ceil((Ae.total||0)/u);N(it||1),l(!1)}).catch(()=>l(!1)):ae?Kn.list(o,u,{log_names:ve.log_names,levels:ve.levels,event_ids:ve.event_ids,start_time:ve.start_time,end_time:ve.end_time,sort_by:V,sort_order:U}).then(he=>{const Ae=he.data;n(Ae.events||[]),b(Ae.total||0),N(Ae.total_pages||1),l(!1)}).catch(()=>l(!1)):Kn.list(o,u,{sort_by:V,sort_order:U}).then(he=>{const Ae=he.data;n(Ae.events||[]),b(Ae.total||0),N(Ae.total_pages||1),l(!1)}).catch(()=>l(!1))},[o,ve,V,U,u,M,de,A]);const ci=ae=>{h(ae),c(1)},Cn=ae=>{ae.preventDefault();const he=parseInt(p,10);!isNaN(he)&&he>=1&&he<=x&&(c(he),m(""))};E.useEffect(()=>{$g.getLogNames().then(ae=>{const he=ae.data;ke(he.log_names||[])}).catch(()=>{})},[]);const rs=async ae=>{y(!0);try{const he=await Kn.export({format:ae,filters:ve});if(ae==="json"){const Ae=new Blob([JSON.stringify(he.data,null,2)],{type:"application/json"});as(Ae,`events_export.${ae}`)}else{const Ae=new Blob([he.data],{type:ae==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});as(Ae,`events_export.${ae==="excel"?"xlsx":ae}`)}}catch(he){console.error("Export failed:",he)}finally{y(!1)}},as=(ae,he)=>{const Ae=URL.createObjectURL(ae),it=document.createElement("a");it.href=Ae,it.download=he,document.body.appendChild(it),it.click(),document.body.removeChild(it),URL.revokeObjectURL(Ae)},En=ae=>{const he=String(ae).toLowerCase();return he==="1"||he==="critical"||he==="crit"?"level-critical":he==="2"||he==="error"?"level-error":he==="3"||he==="warning"||he==="warn"?"level-warning":he==="4"||he==="info"?"level-info":he==="5"||he==="debug"?"level-debug":""},di=ae=>{const he=String(ae);return he==="1"||he==="critical"?"Critical":he==="2"||he==="error"?"Error":he==="3"||he==="warning"||he==="warn"?"Warning":he==="4"||he==="info"?"Info":he==="5"||he==="debug"?"Debug":he};return s.jsxs("div",{className:"events-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:"Events"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>H(!_),children:_?"Hide Filters":"Show Filters"}),s.jsxs("div",{className:"export-dropdown",children:[s.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),s.jsxs("div",{className:"export-menu",children:[s.jsx("button",{onClick:()=>rs("csv"),children:"CSV"}),s.jsx("button",{onClick:()=>rs("json"),children:"JSON"}),s.jsx("button",{onClick:()=>rs("excel"),children:"Excel"})]})]})]})]}),s.jsxs("div",{className:"search-bar",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(ve==null?void 0:ve.keywords)||"",onChange:ae=>Yt({...ve,keywords:ae.target.value}),onKeyDown:ae=>ae.key==="Enter"&&Xs()}),s.jsx("button",{className:"search-btn",onClick:Xs,children:"Search"})]}),s.jsxs("div",{className:"keyword-mode-toggle",children:[s.jsx("span",{className:"mode-label",children:"Keywords:"}),s.jsx("button",{className:`mode-btn ${de==="AND"?"active":""}`,onClick:()=>pe("AND"),title:"All keywords must match",children:"AND"}),s.jsx("button",{className:`mode-btn ${de==="OR"?"active":""}`,onClick:()=>pe("OR"),title:"Any keyword can match",children:"OR"})]})]}),_&&s.jsxs("div",{className:"filters-panel",children:[s.jsxs("div",{className:"filter-row",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Start Time"}),s.jsx("input",{type:"datetime-local",value:(ve==null?void 0:ve.start_time)||"",onChange:ae=>Yt({...ve,start_time:ae.target.value})})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"End Time"}),s.jsx("input",{type:"datetime-local",value:(ve==null?void 0:ve.end_time)||"",onChange:ae=>Yt({...ve,end_time:ae.target.value})})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Event IDs"}),s.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:L,onChange:ae=>Z(ae.target.value),className:"text-input"})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Log Names"}),s.jsxs("select",{value:((Rn=ve==null?void 0:ve.log_names)==null?void 0:Rn[0])||"",onChange:ae=>{const he=ae.target.value;Yt({...ve,log_names:he?[he]:[]})},className:"select-input",children:[s.jsx("option",{value:"",children:"All Log Names"}),O.map(ae=>s.jsx("option",{value:ae,children:ae},ae))]})]})]}),s.jsxs("div",{className:"filter-row",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Sources"}),s.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:J,onChange:ae=>k(ae.target.value),className:"text-input"})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Users"}),s.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:z,onChange:ae=>$(ae.target.value),className:"text-input"})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Computers"}),s.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:te,onChange:ae=>se(ae.target.value),className:"text-input"})]})]}),s.jsxs("div",{className:"filter-row",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Level"}),s.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(ae=>s.jsxs("label",{className:"checkbox-label",children:[s.jsx("input",{type:"checkbox",checked:M.includes(ae),onChange:he=>{he.target.checked?R([...M,ae]):R(M.filter(Ae=>Ae!==ae))}}),ae]},ae))})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Sort By"}),s.jsxs("select",{value:V,onChange:ae=>F(ae.target.value),className:"select-input",children:[s.jsx("option",{value:"timestamp",children:"Timestamp"}),s.jsx("option",{value:"event_id",children:"Event ID"}),s.jsx("option",{value:"level",children:"Level"}),s.jsx("option",{value:"source",children:"Source"}),s.jsx("option",{value:"log_name",children:"Log Name"})]})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Sort Order"}),s.jsxs("select",{value:U,onChange:ae=>re(ae.target.value),className:"select-input",children:[s.jsx("option",{value:"desc",children:"Descending"}),s.jsx("option",{value:"asc",children:"Ascending"})]})]}),s.jsx("div",{className:"filter-group",children:s.jsxs("label",{className:"checkbox-label",children:[s.jsx("input",{type:"checkbox",checked:A,onChange:ae=>K(ae.target.checked)}),"Use Regex"]})})]}),s.jsxs("div",{className:"filter-actions",children:[s.jsx("button",{onClick:Xs,className:"btn-primary",children:"Apply Filters"}),C&&s.jsx("button",{onClick:Sn,className:"btn-secondary",children:"Clear All"})]})]}),C&&s.jsxs("div",{className:"search-info",children:[s.jsxs("span",{className:"search-count",children:["Found ",s.jsx("strong",{children:w.toLocaleString()})," events"]}),T>0&&s.jsxs("span",{className:"query-time",children:["Query time: ",T,"ms"]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Total Events"}),s.jsx("span",{className:"stat-value",children:w.toLocaleString()})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Current Page"}),s.jsxs("span",{className:"stat-value",children:[o," / ",x]})]})]}),r?s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"spinner"}),s.jsx("div",{children:"Loading events..."})]}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📋"}),s.jsx("div",{children:"No events found"})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"table-container",children:s.jsxs("table",{className:"events-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"ID"}),s.jsx("th",{children:"Time"}),s.jsx("th",{children:"Level"}),s.jsx("th",{children:"Event ID"}),s.jsx("th",{children:"Source"}),s.jsx("th",{children:"Computer"}),s.jsx("th",{children:"Message"}),s.jsx("th",{children:"Action"})]})}),s.jsx("tbody",{children:t.map(ae=>s.jsxs("tr",{children:[s.jsx("td",{className:"id-cell",children:ae.id}),s.jsx("td",{className:"time-cell",children:new Date(ae.timestamp).toLocaleString()}),s.jsx("td",{children:s.jsx("span",{className:`level-badge ${En(ae.level)}`,children:di(ae.level)})}),s.jsx("td",{className:"event-id",children:ae.event_id}),s.jsxs("td",{className:"source-cell",title:ae.source||"",children:[s.jsx("span",{className:"cell-content",children:ae.source||"-"}),s.jsx("button",{className:"cell-btn",onClick:he=>{he.stopPropagation(),fe(ae),ee({x:he.clientX-200,y:he.clientY+20})},title:"View details",children:"..."})]}),s.jsx("td",{className:"computer-cell",children:ae.computer||"-"}),s.jsxs("td",{className:"message-cell",title:ae.message||"",children:[s.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:ae.message?ae.message.length>50?ae.message.substring(0,50)+"...":ae.message:"-"}),s.jsx("button",{className:"cell-btn",onClick:he=>{he.stopPropagation(),fe(ae),ee({x:he.clientX-200,y:he.clientY+20})},title:"View details",children:"..."})]}),s.jsxs("td",{className:"action-cell",children:[s.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ae,null,2))},title:"Copy all event data",children:"Copy"}),s.jsx("button",{className:"action-detail-btn",onClick:he=>{fe(ae),ee({x:he.clientX-200,y:he.clientY+20})},title:"View details",children:"..."})]})]},ae.id))})]})}),s.jsxs("div",{className:"pagination",children:[s.jsxs("div",{className:"page-size-selector",children:[s.jsx("span",{children:"Show:"}),s.jsxs("select",{value:u,onChange:ae=>ci(Number(ae.target.value)),className:"select-input",children:[s.jsx("option",{value:10,children:"10"}),s.jsx("option",{value:25,children:"25"}),s.jsx("option",{value:50,children:"50"}),s.jsx("option",{value:100,children:"100"}),s.jsx("option",{value:200,children:"200"})]}),s.jsx("span",{children:"per page"})]}),s.jsxs("div",{className:"page-nav",children:[s.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),s.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(ae=>ae-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),s.jsxs("form",{onSubmit:Cn,className:"page-input-form",children:[s.jsx("input",{type:"number",min:1,max:x,value:p,onChange:ae=>m(ae.target.value),placeholder:`1-${x}`,className:"page-input"}),s.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),s.jsxs("span",{className:"page-info",children:["Page ",s.jsx("strong",{children:o})," of ",s.jsx("strong",{children:x}),"(",w," total)"]}),s.jsx("button",{className:"page-btn",disabled:o>=x,onClick:()=>{c(ae=>ae+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),s.jsx("button",{className:"page-btn",disabled:o>=x,onClick:()=>{c(x),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),ue&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"message-float-panel",style:{left:we.x,top:we.y,position:"fixed"},children:[s.jsxs("div",{className:"float-panel-header",children:[s.jsx("span",{children:"Event Details"}),s.jsxs("div",{className:"float-panel-actions",children:[s.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ue,null,2))},children:"Copy"}),ue.raw_xml&&s.jsx("button",{className:"float-panel-formatted",onClick:()=>{const ae=(()=>{try{return JSON.stringify(JSON.parse(ue.raw_xml),null,2)}catch{return ue.raw_xml||""}})();navigator.clipboard.writeText(ae)},children:"Copy JSON"}),ue.raw_xml&&s.jsx("button",{className:"float-panel-view",onClick:()=>pt(!0),children:"View JSON"}),s.jsx("button",{className:"float-panel-close",onClick:()=>{fe(null),pt(!1)},children:"×"})]})]}),s.jsxs("div",{className:"float-panel-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"ID:"})," ",ue.id]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Time:"})," ",new Date(ue.timestamp).toLocaleString()]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Level:"})," ",ue.level]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Event ID:"})," ",ue.event_id]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Source:"})," ",ue.source||"-"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Computer:"})," ",ue.computer||"-"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Log Name:"})," ",ue.log_name]}),s.jsx("div",{style:{marginTop:"8px"},children:s.jsx("strong",{children:"Message:"})}),s.jsx("div",{children:ue.message||"-"})]})]}),Ue&&ue.raw_xml&&s.jsx("div",{className:"modal-overlay",onClick:()=>pt(!1),children:s.jsxs("div",{className:"modal-content modal-large",onClick:ae=>ae.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("span",{children:["Raw JSON - Event #",ue.id]}),s.jsx("button",{className:"modal-close",onClick:()=>pt(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:s.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(ue.raw_xml),null,2)}catch{return ue.raw_xml}})()})})]})})]})]}),s.jsx("style",{children:`
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
      `})]})}function Bx({keyName:e,value:t,depth:n,isLast:r,collapsedPaths:l,onToggleCollapse:o}){const c="  ".repeat(n),u=e.startsWith("[")?e:`"${e}"`;if(t&&typeof t=="object"){const m=Array.isArray(t),x=m?t.map((j,y)=>({key:`[${y}]`,value:j})):Object.entries(t).map(([j,y])=>({key:j,value:y})),N=x.length===0,w=`${u}`,b=l.has(w);return N?s.jsxs("div",{className:"json-line",children:[c,s.jsx("span",{className:"json-key",children:e}),s.jsx("span",{className:"json-punct",children:m?"[]":"{}"}),!r&&s.jsx("span",{className:"json-punct",children:","})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"json-line json-collapsible",onClick:()=>o(w),children:[c,s.jsx("span",{className:"json-key",children:e}),s.jsx("span",{className:"json-punct",children:m?"[":"{"}),s.jsx("span",{className:"json-collapse-hint",children:b?` ... ${x.length} items }`:""}),!r&&s.jsx("span",{className:"json-punct",children:","}),s.jsx("span",{className:"json-toggle",children:b?"▶":"▼"})]}),!b&&x.map((j,y)=>s.jsx(Bx,{keyName:j.key,value:j.value,depth:n+1,isLast:y===x.length-1,collapsedPaths:l,onToggleCollapse:o},j.key)),!b&&s.jsxs("div",{className:"json-line",children:[c,s.jsx("span",{className:"json-punct",children:m?"]":"}"}),!r&&s.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof t=="string"?`"${t}"`:String(t);return typeof t=="number"?h="json-number":typeof t=="boolean"?h="json-boolean":t===null&&(h="json-null"),s.jsxs("div",{className:"json-line",children:[c,s.jsx("span",{className:"json-key",children:e}),s.jsx("span",{className:"json-punct",children:": "}),s.jsx("span",{className:h,children:p}),!r&&s.jsx("span",{className:"json-punct",children:","})]})}function __(e){return["Unknown","Critical","Error","Warning","Info"][e]||"Unknown"}function S_(){const{id:e}=hg(),[t,n]=E.useState(null),[r,l]=E.useState(!0),[o,c]=E.useState(new Set),[u,h]=E.useState(!1);E.useEffect(()=>{e&&(l(!0),Kn.get(Number(e)).then(b=>{n(b.data),l(!1)}).catch(()=>l(!1)))},[e]);const p=E.useCallback(b=>{c(j=>{const y=new Set(j);return y.has(b)?y.delete(b):y.add(b),y})},[]),m=()=>{c(new Set)},x=()=>{if(t!=null&&t.raw_xml)try{const b=JSON.parse(t.raw_xml),j=(C,D)=>{if(!C||typeof C!="object")return[];const T=[];return Array.isArray(C)?(C.length>3&&T.push(D),C.forEach((W,_)=>{T.push(...j(C[_],`${D}[${_}]`))})):Object.values(C).forEach((W,_)=>{const H=Object.keys(C)[_];T.push(...j(W,`${D}"${H}"`))}),T},y=j(b,"");c(new Set(y.filter(C=>C.includes("[")||!C.startsWith('"'))))}catch{}},N=()=>{if(t!=null&&t.raw_xml)try{const b=JSON.stringify(JSON.parse(t.raw_xml),null,2);navigator.clipboard.writeText(b)}catch{navigator.clipboard.writeText(t.raw_xml)}};if(r)return s.jsx("div",{children:"Loading..."});if(!t)return s.jsx("div",{children:"Event not found"});let w=null;if(t.raw_xml)try{const b=JSON.parse(t.raw_xml),j=Object.entries(b);w=j.map(([y,C],D)=>s.jsx(Bx,{keyName:y,value:C,depth:0,isLast:D===j.length-1,collapsedPaths:o,onToggleCollapse:p},y))}catch{w=s.jsx("pre",{className:"xml-box",children:t.raw_xml})}return s.jsxs("div",{className:"event-detail",children:[s.jsx(Xe,{to:"/events",children:"← Back to Events"}),s.jsxs("div",{className:"detail-panel",children:[s.jsxs("h3",{children:["Event #",t.id]}),s.jsxs("div",{className:"detail-layout",children:[s.jsxs("div",{className:"detail-fields",children:[s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Timestamp:"}),s.jsx("span",{className:"field-value",children:new Date(t.timestamp).toLocaleString()})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Level:"}),s.jsx("span",{className:"field-value",children:__(t.level)})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Event ID:"}),s.jsx("span",{className:"field-value",children:t.event_id})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Source:"}),s.jsx("span",{className:"field-value",children:t.source})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Log Name:"}),s.jsx("span",{className:"field-value",children:t.log_name})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Computer:"}),s.jsx("span",{className:"field-value",children:t.computer})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"User:"}),s.jsx("span",{className:"field-value",children:t.user||"N/A"})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"User SID:"}),s.jsx("span",{className:"field-value",children:t.user_sid||"N/A"})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"Session ID:"}),s.jsx("span",{className:"field-value",children:t.session_id||"N/A"})]}),s.jsxs("div",{className:"detail-field",children:[s.jsx("span",{className:"field-label",children:"IP Address:"}),s.jsx("span",{className:"field-value",children:t.ip_address||"N/A"})]})]}),s.jsxs("div",{className:"detail-actions",children:[t.raw_xml&&s.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),t.raw_xml&&s.jsx("button",{className:"btn-action btn-copy",onClick:N,children:"Copy JSON"})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("label",{children:"Message:"}),s.jsx("pre",{className:"message-box",children:t.message})]}),t.raw_xml&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"raw-json-header",children:[s.jsx("label",{children:"Raw JSON:"}),s.jsxs("div",{className:"raw-json-actions",children:[s.jsx("button",{className:"btn-small",onClick:m,children:"Expand All"}),s.jsx("button",{className:"btn-small",onClick:x,children:"Collapse All"})]})]}),s.jsx("div",{className:"json-tree",children:w})]})]}),u&&t.raw_xml&&s.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:s.jsxs("div",{className:"modal-content modal-large",onClick:b=>b.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("span",{children:["Raw JSON - Event #",t.id]}),s.jsxs("div",{className:"modal-header-actions",children:[s.jsx("button",{className:"btn-small",onClick:N,children:"Copy"}),s.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),s.jsx("div",{className:"modal-body",children:s.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(t.raw_xml),null,2)})})]})}),s.jsx("style",{children:`
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
      `})]})}function C_(){const{t:e}=nt(),t=Ks(),[n,r]=E.useState([]),[l,o]=E.useState(!0),[c,u]=E.useState(1),[h,p]=E.useState(""),[m,x]=E.useState([]),[N,w]=E.useState(!1),[b,j]=E.useState(!1),[y,C]=E.useState(null);E.useEffect(()=>{o(!0),xs.list(c,50,h||void 0).then(F=>{const U=F.data;r(U.alerts||[]),o(!1)}).catch(()=>o(!1))},[c,h]);const D=F=>{xs.resolve(F,"Resolved via Web UI").then(()=>{r(n.map(U=>U.id===F?{...U,resolved:!0}:U))})},T=F=>{const U=prompt("Enter reason for marking as false positive:");U&&xs.markFalsePositive(F,U).then(()=>{r(n.filter(re=>re.id!==F)),x(re=>re.filter(J=>J!==F))}).catch(re=>{console.error("Failed to mark as false positive:",re)})},W=F=>{confirm(e("alerts.confirmDelete"))&&xs.delete(F).then(()=>{r(n.filter(U=>U.id!==F)),x(U=>U.filter(re=>re!==F))}).catch(U=>{console.error("Failed to delete alert:",U)})},_=F=>{m.length!==0&&xs.batchAction(m,F).then(()=>{F==="resolve"?r(n.map(U=>m.includes(U.id)?{...U,resolved:!0}:U)):F==="delete"&&r(n.filter(U=>!m.includes(U.id))),x([])}).catch(U=>{console.error("Batch action failed:",U)})},H=F=>{x(U=>U.includes(F)?U.filter(re=>re!==F):[...U,F])},M=()=>{m.length===n.length?x([]):x(n.map(F=>F.id))},R=()=>{m.forEach(F=>{xs.resolve(F,"Batch resolved via Web UI")}),r(n.map(F=>m.includes(F.id)?{...F,resolved:!0}:F)),x([])},A=()=>{j(!0),C(null),xs.runAnalysis().then(F=>{const U=F.data;C(U),j(!1)}).catch(F=>{var U,re;console.error("Analysis failed:",F),j(!1),C({success:!1,alerts_created:0,events_analyzed:0,rules_executed:0,duration:"0s",errors:[((re=(U=F.response)==null?void 0:U.data)==null?void 0:re.error)||"Analysis failed"]})})},K=F=>{switch(F){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},V={total:n.length,critical:n.filter(F=>F.severity==="critical").length,high:n.filter(F=>F.severity==="high").length,medium:n.filter(F=>F.severity==="medium").length,low:n.filter(F=>F.severity==="low").length};return s.jsxs("div",{className:"alerts-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h2",{children:e("alerts.title")}),s.jsx("p",{className:"header-desc",children:e("alerts.pageDesc")})]}),s.jsx("div",{className:"header-actions",children:s.jsxs("button",{className:"btn-analyze",onClick:()=>w(!0),children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"m21 21-4.35-4.35"}),s.jsx("path",{d:"M11 8v6M8 11h6"})]}),e("alerts.runAnalysis")]})})]}),s.jsxs("div",{className:"alerts-stats-grid",children:[s.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[s.jsx("span",{className:"stat-icon",children:"📊"}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:V.total}),s.jsx("span",{className:"stat-label",children:e("alerts.total")})]})]}),s.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[s.jsx("span",{className:"stat-icon",children:"🔴"}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:V.critical}),s.jsx("span",{className:"stat-label",children:e("dashboard.critical")})]})]}),s.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[s.jsx("span",{className:"stat-icon",children:"🟠"}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:V.high}),s.jsx("span",{className:"stat-label",children:e("dashboard.high")})]})]}),s.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[s.jsx("span",{className:"stat-icon",children:"🟡"}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:V.medium}),s.jsx("span",{className:"stat-label",children:e("dashboard.medium")})]})]}),s.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[s.jsx("span",{className:"stat-icon",children:"🟢"}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:V.low}),s.jsx("span",{className:"stat-label",children:e("dashboard.low")})]})]})]}),s.jsxs("div",{className:"alerts-toolbar",children:[s.jsx("div",{className:"toolbar-left",children:s.jsxs("select",{className:"severity-select",value:h,onChange:F=>p(F.target.value),children:[s.jsx("option",{value:"",children:e("alerts.allSeverities")}),s.jsx("option",{value:"critical",children:e("dashboard.critical")}),s.jsx("option",{value:"high",children:e("dashboard.high")}),s.jsx("option",{value:"medium",children:e("dashboard.medium")}),s.jsx("option",{value:"low",children:e("dashboard.low")})]})}),s.jsx("div",{className:"toolbar-right",children:m.length>0&&s.jsxs("div",{className:"batch-actions",children:[s.jsxs("span",{className:"selected-count",children:[m.length," selected"]}),s.jsx("button",{className:"btn-batch-resolve",onClick:R,children:e("alerts.resolveSelected")}),s.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>_("false-positive"),children:e("alerts.markFalsePositive")}),s.jsx("button",{className:"btn-batch-delete",onClick:()=>_("delete"),children:e("common.delete")})]})})]}),l?s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:e("common.loading")})]}):s.jsxs("div",{className:"alerts-table-container",children:[s.jsxs("table",{className:"alerts-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"checkbox-col",children:s.jsx("input",{type:"checkbox",checked:m.length===n.length&&n.length>0,onChange:M})}),s.jsx("th",{children:"ID"}),s.jsx("th",{children:e("alerts.severity")}),s.jsx("th",{children:e("alerts.rule")}),s.jsx("th",{children:e("alerts.message")}),s.jsx("th",{children:e("alerts.count")}),s.jsx("th",{children:e("alerts.status")}),s.jsx("th",{children:e("alerts.actions")})]})}),s.jsx("tbody",{children:n.map(F=>{var U;return s.jsxs("tr",{className:m.includes(F.id)?"selected":"",children:[s.jsx("td",{className:"checkbox-col",children:s.jsx("input",{type:"checkbox",checked:m.includes(F.id),onChange:()=>H(F.id)})}),s.jsx("td",{className:"id-col",children:F.id}),s.jsx("td",{children:s.jsx("span",{className:`badge ${K(F.severity)}`,children:F.severity})}),s.jsx("td",{className:"rule-col",children:F.rule_name}),s.jsxs("td",{className:"message-col",children:[(U=F.message)==null?void 0:U.substring(0,100),"..."]}),s.jsx("td",{className:"count-col",children:F.count}),s.jsx("td",{children:s.jsx("span",{className:`status-badge ${F.resolved?"resolved":"active"}`,children:F.resolved?e("alerts.resolved"):e("alerts.active")})}),s.jsxs("td",{className:"actions-col",children:[s.jsx("button",{className:"btn-action btn-detail",onClick:()=>t(`/alerts/${F.id}`),children:e("alerts.detail")}),!F.resolved&&s.jsx("button",{className:"btn-action btn-resolve",onClick:()=>D(F.id),children:e("alerts.resolve")}),s.jsx("button",{className:"btn-action btn-falsepositive",onClick:()=>T(F.id),children:e("alerts.falsePositive")}),s.jsx("button",{className:"btn-action btn-delete",onClick:()=>W(F.id),children:e("common.delete")})]})]},F.id)})})]}),n.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx("span",{className:"empty-icon",children:"🛡️"}),s.jsx("p",{children:e("alerts.noAlerts")})]})]}),N&&s.jsx("div",{className:"modal-overlay",onClick:()=>{w(!1),C(null)},children:s.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:e("alerts.runAnalysis")}),s.jsx("button",{className:"close-btn",onClick:()=>{w(!1),C(null)},children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[!b&&!y&&s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"modal-desc",children:e("alerts.analysisDesc")}),s.jsxs("div",{className:"analysis-summary",children:[s.jsx("h4",{children:e("alerts.analysisSummary")}),s.jsxs("ul",{children:[s.jsxs("li",{children:[e("alerts.analysisTarget"),": ",e("alerts.allEvents")]}),s.jsxs("li",{children:[e("alerts.analysisScope"),": ",e("alerts.allEnabledRules")]})]})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"btn-cancel",onClick:()=>{w(!1),C(null)},children:e("common.cancel")}),s.jsx("button",{className:"btn-primary",onClick:A,children:s.jsxs(s.Fragment,{children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),e("alerts.startAnalysis")]})})]})]}),b&&s.jsxs("div",{className:"analyzing-state",children:[s.jsx("div",{className:"analyzing-spinner"}),s.jsx("p",{children:e("alerts.analyzing")}),s.jsx("p",{className:"analyzing-hint",children:e("alerts.analyzingHint")})]}),y&&s.jsxs("div",{className:"analysis-result",children:[s.jsxs("div",{className:`result-header ${y.success?"success":"error"}`,children:[y.success?"✓":"✗"," ",y.success?"Analysis Complete":"Analysis Failed"]}),s.jsxs("div",{className:"result-stats",children:[s.jsxs("div",{className:"result-stat",children:[s.jsx("span",{className:"stat-label",children:e("alerts.alertsCreated")}),s.jsx("span",{className:"stat-value",children:y.alerts_created})]}),s.jsxs("div",{className:"result-stat",children:[s.jsx("span",{className:"stat-label",children:e("alerts.eventsAnalyzed")}),s.jsx("span",{className:"stat-value",children:y.events_analyzed})]}),s.jsxs("div",{className:"result-stat",children:[s.jsx("span",{className:"stat-label",children:e("alerts.rulesExecuted")}),s.jsx("span",{className:"stat-value",children:y.rules_executed})]}),s.jsxs("div",{className:"result-stat",children:[s.jsx("span",{className:"stat-label",children:e("alerts.duration")}),s.jsx("span",{className:"stat-value",children:y.duration})]})]}),y.errors&&y.errors.length>0&&s.jsxs("div",{className:"result-errors",children:[s.jsx("h4",{children:"Errors:"}),s.jsx("ul",{children:y.errors.map((F,U)=>s.jsx("li",{children:F},U))})]}),s.jsx("div",{className:"modal-actions",children:s.jsx("button",{className:"btn-primary",onClick:()=>{w(!1),C(null),t("/alerts")},children:e("common.done")})})]})]})]})})]})}function E_(){const{id:e}=hg(),t=Ks(),[n,r]=E.useState(null),[l,o]=E.useState(!0),[c,u]=E.useState(""),[h,p]=E.useState(!1);E.useEffect(()=>{e&&(o(!0),xs.get(Number(e)).then(b=>{r(b.data),o(!1)}).catch(()=>o(!1)))},[e]);const m=async()=>{if(n){p(!0);try{await xs.resolve(n.id,c),r({...n,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(b){console.error("Failed to resolve:",b)}finally{p(!1)}}},x=async()=>{if(n){p(!0);try{await xs.markFalsePositive(n.id,c),r({...n,false_positive:!0,notes:c})}catch(b){console.error("Failed to mark false positive:",b)}finally{p(!1)}}},N=()=>{if(!n)return;const b=new URLSearchParams;n.event_ids&&n.event_ids.length>0&&b.set("event_ids",n.event_ids.join(",")),n.keywords&&b.set("keywords",n.keywords),t(`/events?${b.toString()}`)};if(l)return s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:"Loading..."})]});if(!n)return s.jsx("div",{className:"alert-not-found",children:"Alert not found"});const w=b=>{switch(b){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return s.jsxs("div",{className:"alert-detail",children:[s.jsx(Xe,{to:"/alerts",className:"back-link",children:"← 返回告警列表"}),s.jsxs("div",{className:"detail-layout",children:[s.jsxs("div",{className:"detail-main",children:[s.jsxs("div",{className:"detail-panel",children:[s.jsxs("div",{className:"panel-header",children:[s.jsxs("h3",{children:["告警 #",n.id]}),s.jsxs("div",{className:"status-badges",children:[s.jsx("span",{className:`badge ${w(n.severity)}`,children:n.severity.toUpperCase()}),n.resolved&&s.jsx("span",{className:"badge resolved",children:"已解决"}),n.false_positive&&s.jsx("span",{className:"badge false-positive",children:"误报"})]})]}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"规则名称:"}),s.jsx("span",{className:"rule-name",children:n.rule_name})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"威胁评分:"}),s.jsx("span",{className:"score-value",children:n.rule_score.toFixed(2)})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"日志名称:"}),s.jsx("span",{children:n.log_name})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"触发次数:"}),s.jsx("span",{children:n.count})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"首次出现:"}),s.jsx("span",{children:new Date(n.first_seen).toLocaleString()})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("label",{children:"最后出现:"}),s.jsx("span",{children:new Date(n.last_seen).toLocaleString()})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("label",{children:"触发事件ID:"}),s.jsx("div",{className:"event-ids",children:n.event_ids&&n.event_ids.length>0?n.event_ids.map((b,j)=>s.jsx("span",{className:"event-id-badge",children:b},j)):s.jsx("span",{className:"no-data",children:"无"})})]}),n.keywords&&s.jsxs("div",{className:"detail-section",children:[s.jsx("label",{children:"匹配关键字:"}),s.jsx("div",{className:"keywords",children:n.keywords.split(" ").filter(b=>b).map((b,j)=>s.jsx("span",{className:"keyword-badge",children:b},j))})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("label",{children:"告警消息:"}),s.jsx("pre",{className:"message-box",children:n.message})]}),n.mitre_attack&&n.mitre_attack.length>0&&s.jsxs("div",{className:"detail-section",children:[s.jsx("label",{children:"MITRE ATT&CK:"}),s.jsx("div",{className:"mitre-tags",children:n.mitre_attack.map((b,j)=>s.jsx("span",{className:"mitre-tag",children:b},j))})]})]}),n.explanation&&s.jsxs("div",{className:"detail-panel explanation-panel",children:[s.jsx("h4",{children:"规则解读"}),s.jsx("p",{className:"explanation-text",children:n.explanation})]}),n.recommendation&&s.jsxs("div",{className:"detail-panel recommendation-panel",children:[s.jsx("h4",{children:"处置建议"}),s.jsx("div",{className:"recommendation-text",children:n.recommendation.split(`
`).filter(b=>b).map((b,j)=>s.jsx("p",{children:b},j))})]}),n.real_case&&s.jsxs("div",{className:"detail-panel case-panel",children:[s.jsx("h4",{children:"真实案例"}),s.jsx("p",{className:"case-text",children:n.real_case})]}),n.matched_events&&n.matched_events.length>0&&s.jsxs("div",{className:"detail-panel events-panel",children:[s.jsxs("h4",{children:["关联日志 (",n.matched_events.length,")"]}),s.jsx("div",{className:"events-list",children:n.matched_events.map(b=>s.jsxs("div",{className:"event-item",children:[s.jsxs("div",{className:"event-header",children:[s.jsxs("span",{className:"event-id",children:["Event ID: ",b.event_id]}),s.jsx("span",{className:"event-time",children:new Date(b.timestamp).toLocaleString()}),s.jsx("span",{className:`event-level level-${b.level.toLowerCase()}`,children:b.level})]}),s.jsxs("div",{className:"event-source",children:["来源: ",b.source]}),s.jsxs("div",{className:"event-computer",children:["计算机: ",b.computer]}),s.jsx("div",{className:"event-message",children:b.message})]},b.id))})]})]}),s.jsx("div",{className:"detail-sidebar",children:s.jsxs("div",{className:"sidebar-panel",children:[s.jsx("h4",{children:"操作"}),!n.resolved&&!n.false_positive&&s.jsxs(s.Fragment,{children:[s.jsx("textarea",{placeholder:"添加备注...",value:c,onChange:b=>u(b.target.value),rows:3}),s.jsx("button",{onClick:m,disabled:h,className:"btn-action btn-resolve",children:"标记为已解决"}),s.jsx("button",{onClick:x,disabled:h,className:"btn-action btn-falsepositive",children:"标记为误报"})]}),s.jsx("button",{onClick:N,className:"btn-action btn-search",children:"搜索关联事件"}),n.notes&&s.jsxs("div",{className:"notes-section",children:[s.jsx("label",{children:"备注:"}),s.jsx("pre",{className:"notes-box",children:n.notes})]})]})})]}),s.jsx("style",{children:`
        .alert-detail {
          padding: 20px;
        }
        .back-link {
          color: #00d9ff;
          text-decoration: none;
          margin-bottom: 20px;
          display: inline-block;
        }
        .back-link:hover {
          text-decoration: underline;
        }
        .detail-layout {
          display: flex;
          gap: 20px;
        }
        .detail-main {
          flex: 1;
        }
        .detail-sidebar {
          width: 280px;
        }
        .detail-panel {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #333;
        }
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .panel-header h3 {
          margin: 0;
          color: #fff;
        }
        .status-badges {
          display: flex;
          gap: 8px;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .detail-item label {
          font-size: 0.85em;
          color: #888;
        }
        .detail-item span {
          color: #fff;
        }
        .rule-name {
          color: #00d9ff !important;
          font-weight: bold;
        }
        .score-value {
          color: #f59e0b !important;
          font-weight: bold;
        }
        .detail-section {
          margin-top: 15px;
        }
        .detail-section label {
          display: block;
          font-weight: bold;
          color: #00d9ff;
          margin-bottom: 8px;
        }
        .event-ids, .keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .event-id-badge {
          background: #1f4068;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.9em;
          color: #fff;
        }
        .keyword-badge {
          background: rgba(0, 217, 255, 0.2);
          border: 1px solid #00d9ff;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.85em;
          color: #00d9ff;
        }
        .message-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 8px;
          white-space: pre-wrap;
          color: #eee;
          font-size: 0.9em;
          max-height: 200px;
          overflow-y: auto;
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
          color: #fff;
        }
        .explanation-panel {
          border-left: 4px solid #00d9ff;
        }
        .explanation-panel h4 {
          color: #00d9ff;
          margin: 0 0 10px 0;
        }
        .explanation-text {
          color: #eee;
          line-height: 1.6;
          margin: 0;
        }
        .recommendation-panel {
          border-left: 4px solid #22c55e;
        }
        .recommendation-panel h4 {
          color: #22c55e;
          margin: 0 0 10px 0;
        }
        .recommendation-text {
          color: #eee;
        }
        .recommendation-text p {
          margin: 5px 0;
          padding-left: 15px;
          position: relative;
        }
        .recommendation-text p::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #22c55e;
        }
        .case-panel {
          border-left: 4px solid #f59e0b;
        }
        .case-panel h4 {
          color: #f59e0b;
          margin: 0 0 10px 0;
        }
        .case-text {
          color: #eee;
          line-height: 1.6;
          margin: 0;
          font-style: italic;
        }
        .events-panel {
          border-left: 4px solid #8b5cf6;
        }
        .events-panel h4 {
          color: #8b5cf6;
          margin: 0 0 15px 0;
        }
        .events-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-height: 500px;
          overflow-y: auto;
        }
        .event-item {
          background: #0a0a1a;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #333;
        }
        .event-header {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }
        .event-id {
          color: #00d9ff;
          font-weight: bold;
        }
        .event-time {
          color: #888;
          font-size: 0.85em;
        }
        .event-level {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8em;
        }
        .level-error, .level-warning {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        .level-info {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }
        .event-source, .event-computer {
          color: #888;
          font-size: 0.85em;
          margin-bottom: 4px;
        }
        .event-message {
          color: #eee;
          font-size: 0.9em;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .sidebar-panel {
          background: linear-gradient(135deg, #16213e 0%, #1a1a2e 100%);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #333;
          position: sticky;
          top: 20px;
        }
        .sidebar-panel h4 {
          margin: 0 0 15px 0;
          color: #fff;
        }
        .sidebar-panel textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 8px;
          background: #16213e;
          color: #eee;
          margin-bottom: 10px;
          resize: vertical;
        }
        .btn-action {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          margin-bottom: 10px;
          transition: all 0.2s;
        }
        .btn-resolve {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid #22c55e;
          color: #22c55e;
        }
        .btn-resolve:hover {
          background: rgba(34, 197, 94, 0.3);
        }
        .btn-falsepositive {
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid #f59e0b;
          color: #f59e0b;
        }
        .btn-falsepositive:hover {
          background: rgba(245, 158, 11, 0.3);
        }
        .btn-search {
          background: rgba(0, 217, 255, 0.2);
          border: 1px solid #00d9ff;
          color: #00d9ff;
        }
        .btn-search:hover {
          background: rgba(0, 217, 255, 0.3);
        }
        .notes-section {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #333;
        }
        .notes-section label {
          display: block;
          color: #888;
          font-size: 0.85em;
          margin-bottom: 5px;
        }
        .notes-box {
          background: #0a0a1a;
          padding: 10px;
          border-radius: 4px;
          color: #eee;
          white-space: pre-wrap;
          font-size: 0.9em;
        }
        .no-data {
          color: #666;
          font-style: italic;
        }
        .severity-critical { background: rgba(239, 68, 68, 0.2); color: #ef4444; padding: 4px 10px; border-radius: 4px; }
        .severity-high { background: rgba(245, 158, 11, 0.2); color: #f59e0b; padding: 4px 10px; border-radius: 4px; }
        .severity-medium { background: rgba(59, 130, 246, 0.2); color: #3b82f6; padding: 4px 10px; border-radius: 4px; }
        .severity-low { background: rgba(34, 197, 94, 0.2); color: #22c55e; padding: 4px 10px; border-radius: 4px; }
        .badge.resolved { background: #28a745; color: #fff; }
        .badge.false-positive { background: #6c757d; color: #fff; }
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px;
          color: #888;
        }
        .alert-not-found {
          text-align: center;
          padding: 60px;
          color: #ef4444;
        }
        @media (max-width: 1024px) {
          .detail-layout {
            flex-direction: column;
          }
          .detail-sidebar {
            width: 100%;
          }
        }
      `})]})}function R_(){const{t:e}=nt(),t=Ks(),[n,r]=E.useState([]),[l,o]=E.useState(!0),[c,u]=E.useState("all"),[h,p]=E.useState(""),[m,x]=E.useState(""),[N,w]=E.useState(""),[b,j]=E.useState(""),y=()=>{o(!0);let A,K;h&&m?A=new Date(`${h}T${m}:00Z`).toISOString():h&&(A=new Date(`${h}T00:00:00Z`).toISOString()),N&&b?K=new Date(`${N}T${b}:59Z`).toISOString():N&&(K=new Date(`${N}T23:59:59Z`).toISOString()),Ld.get(1e3,A,K).then(V=>{const F=V.data;r(F.entries||[]),o(!1)}).catch(()=>o(!1))};E.useEffect(()=>{y()},[]);const C=()=>{y()},D=()=>{p(""),x(""),w(""),j(""),y()},T=(A,K)=>{if(A==="alert")switch(K){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},W=(A,K)=>{if(A==="alert")switch(K){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},_=A=>A==="alert"?"ALERT":"EVENT",H=n.filter(A=>c==="all"?!0:c==="events"?A.type==="event":c==="alerts"?A.type==="alert":!0),M={eventCount:H.filter(A=>A.type==="event").length,alertCount:H.filter(A=>A.type==="alert").length},R=A=>{Ld.deleteAlert(A).then(()=>{r(n.filter(K=>!(K.type==="alert"&&K.alert_id===A)))}).catch(K=>console.error("Failed to delete alert:",K))};return l?s.jsx("div",{className:"timeline-page",children:s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:e("common.loading")})]})}):s.jsxs("div",{className:"timeline-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h2",{children:e("timeline.title")}),s.jsx("p",{className:"header-desc",children:e("timeline.pageDesc")})]}),s.jsx("div",{className:"header-actions",children:s.jsxs("button",{className:"btn-secondary",onClick:()=>t("/analyze"),children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"m21 21-4.35-4.35"})]}),e("timeline.runAnalysis")]})})]}),s.jsxs("div",{className:"timeline-stats-cards",children:[s.jsxs("div",{className:"stat-card events",children:[s.jsx("div",{className:"stat-icon",children:"📋"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:M.eventCount}),s.jsx("span",{className:"stat-label",children:e("timeline.totalEvents")})]}),s.jsx("div",{className:"stat-bar",children:s.jsx("div",{className:"stat-bar-fill events",style:{width:`${M.eventCount+M.alertCount>0?M.eventCount/(M.eventCount+M.alertCount)*100:0}%`}})})]}),s.jsxs("div",{className:"stat-card alerts",children:[s.jsx("div",{className:"stat-icon",children:"🚨"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:M.alertCount}),s.jsx("span",{className:"stat-label",children:e("timeline.totalAlerts")})]}),s.jsx("div",{className:"stat-bar",children:s.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${M.alertCount>0?M.alertCount/(M.eventCount+M.alertCount)*100:0}%`}})})]}),s.jsxs("div",{className:"stat-card ratio",children:[s.jsx("div",{className:"stat-icon",children:"📊"}),s.jsxs("div",{className:"stat-content",children:[s.jsxs("span",{className:"stat-value",children:[M.eventCount+M.alertCount>0?(M.alertCount/(M.eventCount+M.alertCount)*100).toFixed(1):0,"%"]}),s.jsx("span",{className:"stat-label",children:e("timeline.alertRatio")})]})]})]}),s.jsxs("div",{className:"timeline-toolbar",children:[s.jsx("div",{className:"toolbar-left",children:s.jsxs("div",{className:"filter-tabs",children:[s.jsxs("button",{className:`filter-tab ${c==="all"?"active":""}`,onClick:()=>u("all"),children:[e("timeline.all"),s.jsx("span",{className:"count",children:M.eventCount+M.alertCount})]}),s.jsxs("button",{className:`filter-tab ${c==="events"?"active":""}`,onClick:()=>u("events"),children:[e("timeline.eventsOnly"),s.jsx("span",{className:"count events",children:M.eventCount})]}),s.jsxs("button",{className:`filter-tab ${c==="alerts"?"active":""}`,onClick:()=>u("alerts"),children:[e("timeline.alertsOnly"),s.jsx("span",{className:"count alerts",children:M.alertCount})]})]})}),s.jsx("div",{className:"toolbar-right",children:s.jsxs("div",{className:"datetime-filter",children:[s.jsx("input",{type:"date",value:h,onChange:A=>p(A.target.value),placeholder:"Start date"}),s.jsx("input",{type:"time",value:m,onChange:A=>x(A.target.value),placeholder:"Start time"}),s.jsx("span",{className:"datetime-separator",children:"-"}),s.jsx("input",{type:"date",value:N,onChange:A=>w(A.target.value),placeholder:"End date"}),s.jsx("input",{type:"time",value:b,onChange:A=>j(A.target.value),placeholder:"End time"}),s.jsx("button",{className:"btn-apply-filter",onClick:C,children:e("common.apply")}),s.jsx("button",{className:"btn-clear-filter",onClick:D,children:e("common.clear")})]})})]}),s.jsx("div",{className:"timeline-container",children:H.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("span",{className:"empty-icon",children:"📭"}),s.jsx("p",{children:e("timeline.noEntries")})]}):s.jsx("div",{className:"timeline",children:H.map((A,K)=>s.jsxs("div",{className:`timeline-item ${A.type}`,children:[s.jsxs("div",{className:"timeline-marker",style:{"--marker-color":W(A.type,A.severity)},children:[s.jsx("div",{className:"marker-dot"}),s.jsx("div",{className:"marker-line"})]}),s.jsxs("div",{className:"timeline-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"card-left",children:[s.jsx("span",{className:"card-icon",children:T(A.type,A.severity)}),s.jsx("span",{className:`timeline-type ${A.type}`,style:{color:W(A.type,A.severity)},children:_(A.type)}),A.type==="event"&&A.event_id&&s.jsxs("span",{className:"event-id-badge",children:["Event ",A.event_id]}),A.type==="event"&&A.computer&&s.jsx("span",{className:"computer-badge",children:A.computer}),A.type==="alert"&&A.severity&&s.jsx("span",{className:`severity-badge ${A.severity}`,style:{background:`${W(A.type,A.severity)}20`,color:W(A.type,A.severity)},children:A.severity.toUpperCase()})]}),s.jsx("span",{className:"card-time",children:new Date(A.timestamp).toLocaleString()})]}),s.jsx("p",{className:"card-message",children:A.message}),A.type==="alert"&&A.rule_name&&s.jsxs("div",{className:"card-meta",children:[s.jsxs("span",{className:"rule-badge",children:[s.jsx("span",{className:"rule-icon",children:"📌"}),A.rule_name]}),A.mitre_attack&&A.mitre_attack.length>0&&s.jsxs("span",{className:"mitre-badge",children:[s.jsx("span",{className:"mitre-icon",children:"🎯"}),A.mitre_attack.join(", ")]})]}),A.type==="alert"&&A.alert_id&&s.jsxs("div",{className:"card-actions",children:[s.jsx("button",{className:"btn-detail",onClick:()=>t(`/alerts/${A.alert_id}`),children:e("timeline.viewDetails")}),s.jsx("button",{className:"btn-delete",onClick:()=>A.alert_id&&R(A.alert_id),children:e("timeline.delete")})]})]})]},`${A.type}-${A.id}-${K}`))})})]})}function D_(){const{t:e}=nt(),[t,n]=E.useState(!1),[r,l]=E.useState("security"),[o,c]=E.useState("html"),[u,h]=E.useState("7d"),[p,m]=E.useState([]),[x,N]=E.useState(null),[w,b]=E.useState(null);E.useEffect(()=>{Ar.list().then(_=>m(_.data.reports)).catch(console.error)},[]);const j=async()=>{n(!0),b(null);try{const _=new Date,H=new Date;switch(u){case"24h":H.setHours(H.getHours()-24);break;case"7d":H.setDate(H.getDate()-7);break;case"30d":H.setDate(H.getDate()-30);break;case"90d":H.setDate(H.getDate()-90);break}await Ar.generate({type:r,format:o,start_time:H.toISOString(),end_time:_.toISOString()}),N(new Date().toLocaleString());const R=(await Ar.list()).data.reports||[];if(m(R),R.length>0){const A=R[0];confirm(`Report generated successfully!

Report: ${A.name}
Type: ${A.type}
Format: ${A.format}

Click OK to download now, or Cancel to view in reports list.`)&&C(A)}}catch(_){console.error("Report generation failed:",_),b("Failed to generate report. Please try again.")}finally{n(!1)}},y=async _=>{try{const H=await Ar.get(_.id);if(H.data.content){const M=window.open("","_blank");M&&(_.format==="html"?(M.document.write(H.data.content),M.document.close()):(M.document.write(`<pre>${JSON.stringify(H.data,null,2)}</pre>`),M.document.close()))}else alert("Report content not available")}catch(H){console.error("Failed to view report:",H),alert("Failed to view report")}},C=async _=>{try{const H=await Ar.download(_.id),M=new Blob([H.data],{type:H.headers["content-type"]||"application/octet-stream"}),R=URL.createObjectURL(M),A=document.createElement("a");A.href=R,A.download=`${_.name||_.id}.${_.format}`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(R)}catch(H){console.error("Failed to download report:",H),alert("Failed to download report")}},D=_=>_<1024?_+" B":_<1024*1024?(_/1024).toFixed(1)+" KB":(_/(1024*1024)).toFixed(1)+" MB",T=[{value:"security",label:e("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:e("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:e("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:e("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],W=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return s.jsxs("div",{className:"reports-page",children:[s.jsx("h2",{children:e("reports.title")}),s.jsxs("div",{className:"reports-grid",children:[s.jsxs("div",{className:"reports-card main-config",children:[s.jsx("h3",{children:e("reports.generateReport")}),s.jsx("p",{className:"card-desc",children:e("reports.generateDesc")}),s.jsxs("div",{className:"config-section",children:[s.jsx("label",{className:"section-label",children:"Report Type"}),s.jsx("div",{className:"type-grid",children:T.map(_=>s.jsxs("div",{className:`type-option ${r===_.value?"selected":""}`,onClick:()=>l(_.value),children:[s.jsx("div",{className:"type-icon",children:_.icon}),s.jsx("div",{className:"type-label",children:_.label})]},_.value))})]}),s.jsxs("div",{className:"config-section",children:[s.jsx("label",{className:"section-label",children:"Output Format"}),s.jsx("div",{className:"format-row",children:W.map(_=>s.jsxs("div",{className:`format-option ${o===_.value?"selected":""}`,onClick:()=>c(_.value),children:[s.jsx("div",{className:"format-icon",children:_.icon}),s.jsx("div",{className:"format-label",children:_.label})]},_.value))})]}),s.jsxs("div",{className:"config-section",children:[s.jsx("label",{className:"section-label",children:"Time Range"}),s.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(_=>s.jsxs("button",{className:`range-btn ${u===_?"active":""}`,onClick:()=>h(_),children:[_==="24h"&&"Last 24 Hours",_==="7d"&&"Last 7 Days",_==="30d"&&"Last 30 Days",_==="90d"&&"Last 90 Days"]},_))})]}),w&&s.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),s.jsx("button",{className:"btn-primary generate-btn",onClick:j,disabled:t,children:t?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):s.jsxs(s.Fragment,{children:["📊 ",e("reports.generate")]})}),x&&s.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",x]})]}),s.jsxs("div",{className:"reports-card stats-card",children:[s.jsx("h3",{children:"Report Statistics"}),s.jsxs("div",{className:"stats-preview",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:"📁"}),s.jsx("div",{className:"stat-value",children:p.length}),s.jsx("div",{className:"stat-label",children:"Total Reports"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:"🛡️"}),s.jsx("div",{className:"stat-value",children:p.filter(_=>_.type==="security").length}),s.jsx("div",{className:"stat-label",children:"Security Reports"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("div",{className:"stat-icon",children:"🚨"}),s.jsx("div",{className:"stat-value",children:p.filter(_=>_.type==="alert").length}),s.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),s.jsxs("div",{className:"chart-placeholder",children:[s.jsx("div",{className:"chart-label",children:"Reports by Type"}),s.jsxs("div",{className:"mini-chart",children:[s.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),s.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),s.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),s.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),s.jsxs("div",{className:"reports-card full-width",children:[s.jsx("h3",{children:e("reports.recentReports")}),p.length>0?s.jsx("div",{className:"reports-table",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Report Name"}),s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Format"}),s.jsx("th",{children:"Generated"}),s.jsx("th",{children:"Size"}),s.jsx("th",{children:"Actions"})]})}),s.jsx("tbody",{children:p.map(_=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"report-name",children:[s.jsxs("span",{className:"report-icon",children:[_.type==="security"&&"🛡️",_.type==="alert"&&"🚨",_.type==="timeline"&&"📊",_.type==="compliance"&&"📋"]}),_.name]})}),s.jsx("td",{children:s.jsx("span",{className:`type-badge ${_.type}`,children:_.type})}),s.jsx("td",{children:s.jsx("span",{className:"format-badge",children:_.format.toUpperCase()})}),s.jsx("td",{children:new Date(_.generated_at).toLocaleString()}),s.jsx("td",{children:D(_.size)}),s.jsxs("td",{children:[s.jsx("button",{className:"btn-small",onClick:()=>y(_),children:"View"}),s.jsx("button",{className:"btn-small",onClick:()=>C(_),children:"Download"})]})]},_.id))})]})}):s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📊"}),s.jsx("div",{className:"empty-text",children:e("reports.noReports")}),s.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),s.jsx("style",{children:`
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
      `})]})}function P_(){const{t:e}=nt(),[t,n]=E.useState(!1),[r,l]=E.useState(""),[o,c]=E.useState(""),[u,h]=E.useState(null),[p,m]=E.useState(!1),[x,N]=E.useState(!1),[w,b]=E.useState([]),[j,y]=E.useState(""),[C,D]=E.useState(["eventlogs","registry","prefetch"]),[T,W]=E.useState([]),[_,H]=E.useState(!1);E.useEffect(()=>{M(),R()},[]);const M=()=>{Vn.listEvidence().then(k=>{k.data&&Array.isArray(k.data)&&b(k.data)}).catch(k=>console.error("Failed to load evidence:",k))},R=()=>{Vn.chainOfCustody().then(k=>{k.data&&Array.isArray(k.data)&&W(k.data)}).catch(k=>console.error("Failed to load chain of custody:",k))},A=async()=>{var k,z;if(o.trim()){N(!0);try{const $=await Vn.calculateHash(o);l($.data.hash||"")}catch($){console.error("Failed to calculate hash:",$),alert("Failed to calculate hash: "+(((z=(k=$.response)==null?void 0:k.data)==null?void 0:z.error)||$.message))}finally{N(!1)}}},K=async()=>{n(!0),y("starting");try{for(const k of C)y(`collecting:${k}`),await Vn.collect(k,`/tmp/forensics_${k}`);M(),R(),y("completed")}catch(k){console.error("Collection failed:",k),y("error")}finally{n(!1)}},V=async()=>{var k,z;if(!(!r.trim()||!o.trim())){m(!0),h(null);try{const $=await Vn.verifyHash(o,r);h({verified:$.data.match||!1,expected:r,actual:$.data.actual||r,path:o})}catch($){h({verified:!1,expected:r,actual:((z=(k=$.response)==null?void 0:k.data)==null?void 0:z.error)||"Hash verification failed",path:o})}finally{m(!1)}}},F=k=>{D(z=>z.includes(k)?z.filter($=>$!==k):[...z,k])},U=async k=>{try{const z=await Vn.getEvidence(k.id);if(z.data.content){const $=window.open("","_blank");$&&($.document.write(`<pre>${JSON.stringify(z.data,null,2)}</pre>`),$.document.close())}else alert("Evidence content not available")}catch(z){console.error("Failed to view evidence:",z),alert("Failed to view evidence")}},re=async k=>{try{const z=await Vn.exportEvidence(k.id,"json"),$=new Blob([z.data],{type:z.headers["content-type"]||"application/octet-stream"}),te=URL.createObjectURL($),se=document.createElement("a");se.href=te,se.download=`evidence_${k.type}_${k.id}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(te)}catch(z){console.error("Failed to export evidence:",z),alert("Failed to export evidence")}},J=k=>k<1024?k+" B":k<1024*1024?(k/1024).toFixed(1)+" KB":(k/(1024*1024)).toFixed(1)+" MB";return s.jsxs("div",{className:"forensics-page",children:[s.jsx("h2",{children:e("forensics.title")}),s.jsxs("div",{className:"forensics-grid",children:[s.jsxs("div",{className:"forensics-card",children:[s.jsx("h3",{children:e("forensics.evidenceCollection")}),s.jsx("p",{className:"card-desc",children:e("forensics.evidenceCollectionDesc")}),s.jsxs("div",{className:"collection-types",children:[s.jsxs("div",{className:"type-item",onClick:()=>F("eventlogs"),children:[s.jsx("div",{className:`type-checkbox ${C.includes("eventlogs")?"checked":""}`,children:C.includes("eventlogs")&&"✓"}),s.jsx("div",{className:"type-icon",children:"📋"}),s.jsxs("div",{className:"type-info",children:[s.jsx("div",{className:"type-name",children:e("forensics.eventLogs")}),s.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),s.jsxs("div",{className:"type-item",onClick:()=>F("registry"),children:[s.jsx("div",{className:`type-checkbox ${C.includes("registry")?"checked":""}`,children:C.includes("registry")&&"✓"}),s.jsx("div",{className:"type-icon",children:"🔧"}),s.jsxs("div",{className:"type-info",children:[s.jsx("div",{className:"type-name",children:e("forensics.registry")}),s.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),s.jsxs("div",{className:"type-item",onClick:()=>F("memory"),children:[s.jsx("div",{className:`type-checkbox ${C.includes("memory")?"checked":""}`,children:C.includes("memory")&&"✓"}),s.jsx("div",{className:"type-icon",children:"💾"}),s.jsxs("div",{className:"type-info",children:[s.jsx("div",{className:"type-name",children:e("forensics.memoryDump")}),s.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),s.jsxs("div",{className:"type-item",onClick:()=>F("prefetch"),children:[s.jsx("div",{className:`type-checkbox ${C.includes("prefetch")?"checked":""}`,children:C.includes("prefetch")&&"✓"}),s.jsx("div",{className:"type-icon",children:"⚡"}),s.jsxs("div",{className:"type-info",children:[s.jsx("div",{className:"type-name",children:e("forensics.prefetch")}),s.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),j&&s.jsxs("div",{className:`collect-status ${j}`,children:[j==="starting"&&"📡 Initializing collection...",j.startsWith("collecting:")&&`🔍 Collecting ${j.split(":")[1]}...`,j==="completed"&&"✅ Collection completed",j==="error"&&"❌ Collection failed"]}),s.jsx("button",{className:"btn-primary forensics-btn",onClick:K,disabled:t||C.length===0,children:t?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):s.jsxs(s.Fragment,{children:["🚀 ",e("forensics.startCollection")]})})]}),s.jsxs("div",{className:"forensics-card",children:[s.jsx("h3",{children:e("forensics.hashVerification")}),s.jsx("p",{className:"card-desc",children:e("forensics.hashVerificationDesc")}),s.jsxs("div",{className:"hash-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"File Path"}),s.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:o,onChange:k=>c(k.target.value)})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Expected SHA256 Hash"}),s.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:r,onChange:k=>l(k.target.value)})]}),s.jsx("button",{className:"btn-secondary",onClick:A,disabled:x||!o.trim(),children:x?"Calculating...":"Calculate Hash"}),s.jsx("button",{className:"btn-secondary",onClick:V,disabled:p||!r.trim()||!o.trim(),children:p?"Verifying...":e("forensics.verify")})]}),u&&s.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[s.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),s.jsxs("div",{className:"result-content",children:[s.jsx("div",{className:"result-title",children:u.verified?e("forensics.hashMatch"):e("forensics.hashNoMatch")}),s.jsxs("div",{className:"result-details",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"File:"})," ",u.path]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Expected:"})," ",s.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Actual:"})," ",s.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),s.jsxs("div",{className:"forensics-card full-width",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("div",{children:[s.jsx("h3",{children:e("forensics.chainOfCustody")}),s.jsx("p",{className:"card-desc",children:e("forensics.chainOfCustodyDesc")})]}),s.jsx("button",{className:"btn-secondary",onClick:()=>H(!0),children:"View Full Chain"})]}),w.length>0?s.jsx("div",{className:"evidence-table",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Type"}),s.jsx("th",{children:"Collected At"}),s.jsx("th",{children:"Path"}),s.jsx("th",{children:"Size"}),s.jsx("th",{children:"Hash"}),s.jsx("th",{children:"Actions"})]})}),s.jsx("tbody",{children:w.map(k=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"evidence-type",children:k.type})}),s.jsx("td",{children:new Date(k.collected_at).toLocaleString()}),s.jsx("td",{children:s.jsx("code",{className:"evidence-path",children:k.path})}),s.jsx("td",{children:J(k.size)}),s.jsx("td",{children:s.jsxs("code",{className:"evidence-hash",children:[k.hash.substring(0,16),"..."]})}),s.jsxs("td",{children:[s.jsx("button",{className:"btn-small",onClick:()=>U(k),children:"View"}),s.jsx("button",{className:"btn-small",onClick:()=>re(k),children:"Export"})]})]},k.id))})]})}):s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📦"}),s.jsx("div",{className:"empty-text",children:e("forensics.noEvidence")}),s.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),_&&s.jsx("div",{className:"modal-overlay",onClick:()=>H(!1),children:s.jsxs("div",{className:"modal-content chain-modal",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:e("forensics.chainOfCustody")}),s.jsx("button",{className:"close-btn",onClick:()=>H(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:T.length>0?s.jsx("div",{className:"chain-timeline",children:T.map((k,z)=>s.jsxs("div",{className:"chain-entry",children:[s.jsx("div",{className:"chain-dot",children:z+1}),s.jsxs("div",{className:"chain-content",children:[s.jsx("div",{className:"chain-action",children:k.action}),s.jsx("div",{className:"chain-details",children:k.details}),s.jsxs("div",{className:"chain-meta",children:[s.jsx("span",{className:"chain-time",children:new Date(k.timestamp).toLocaleString()}),k.user&&s.jsxs("span",{className:"chain-user",children:["by ",k.user]})]})]})]},k.id))}):s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📋"}),s.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),s.jsx("style",{children:`
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
      `})]})}function A_(){var de,pe;const{t:e}=nt(),[t,n]=E.useState("system"),[r,l]=E.useState(null),[o,c]=E.useState([]),[u,h]=E.useState([]),[p,m]=E.useState([]),[x,N]=E.useState([]),[w,b]=E.useState([]),[j,y]=E.useState([]),[C,D]=E.useState([]),[T,W]=E.useState([]),[_,H]=E.useState(null),[M,R]=E.useState(!0),[A,K]=E.useState(null),[V,F]=E.useState({processes:!1,network:!1,dlls:!1,drivers:!1,env:!1,users:!1,registry:!1,tasks:!1}),[U,re]=E.useState(!1);E.useEffect(()=>{J()},[]);const J=()=>{R(!0),gs.getInfo().then(O=>{l(O.data),R(!1)}).catch(O=>{K(O.message||e("common.error")),R(!1)})},k=()=>{o.length>0||(R(!0),gs.getProcesses(50).then(O=>{c(O.data.processes||[]),R(!1)}).catch(()=>R(!1)))},z=()=>{u.length>0||(R(!0),gs.getNetwork(50).then(O=>{h(O.data.connections||[]),R(!1)}).catch(()=>R(!1)))},$=()=>{p.length>0||(R(!0),gs.getEnvVariables().then(O=>{m(O.data.variables||[]),R(!1)}).catch(()=>R(!1)))},te=O=>{R(!0),O?(H(O),gs.getProcessDLLs(O).then(ke=>{N(ke.data.dlls||[]),R(!1)}).catch(()=>R(!1))):gs.getLoadedDLLs(100).then(ke=>{N(ke.data.modules||[]),R(!1)}).catch(()=>R(!1))},se=()=>{w.length>0||(R(!0),gs.getDrivers().then(O=>{b(O.data.drivers||[]),R(!1)}).catch(()=>R(!1)))},L=()=>{j.length>0||(R(!0),gs.getUsers().then(O=>{y(O.data.users||[]),R(!1)}).catch(()=>R(!1)))},Z=()=>{C.length>0||(R(!0),gs.getRegistry().then(O=>{D(O.data.run_keys||[]),R(!1)}).catch(()=>R(!1)))},ue=()=>{T.length>0||(R(!0),gs.getTasks().then(O=>{W(O.data.tasks||[]),R(!1)}).catch(()=>R(!1)))},fe=O=>{n(O),O==="processes"&&k(),O==="network"&&z(),O==="env"&&$(),O==="dlls"&&(o.length>0&&!_||(_?te(_):te())),O==="drivers"&&se(),O==="users"&&L(),O==="registry"&&Z(),O==="tasks"&&ue()},we=O=>{const ke=Math.floor(O/86400),Ue=Math.floor(O%86400/3600),pt=Math.floor(O%3600/60);return ke>0?`${ke}d ${Ue}h ${pt}m`:Ue>0?`${Ue}h ${pt}m`:`${pt}m`},ee=O=>{switch(O==null?void 0:O.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return M&&!r?s.jsx("div",{className:"systeminfo-page",children:s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"spinner"}),s.jsx("div",{children:e("common.loading")})]})}):A?s.jsx("div",{className:"systeminfo-page",children:s.jsxs("div",{className:"error-state",children:["Error: ",A]})}):s.jsxs("div",{className:"systeminfo-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("systemInfo.title")}),s.jsx("div",{className:"header-actions",children:s.jsx("button",{className:"btn-refresh",onClick:J,children:e("common.refresh")||"刷新"})})]}),s.jsxs("div",{className:"tab-nav",children:[s.jsx("button",{className:`tab-btn ${t==="system"?"active":""}`,onClick:()=>fe("system"),children:e("systemInfo.system")||"系统"}),s.jsxs("button",{className:`tab-btn ${t==="processes"?"active":""}`,onClick:()=>fe("processes"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.processes")||"进程"," (",o.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.processes,onChange:()=>F(O=>({...O,processes:!O.processes}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="network"?"active":""}`,onClick:()=>fe("network"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.network")||"网络"," (",u.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.network,onChange:()=>F(O=>({...O,network:!O.network}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="env"?"active":""}`,onClick:()=>fe("env"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.env")||"环境变量"," (",p.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.env,onChange:()=>F(O=>({...O,env:!O.env}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="dlls"?"active":""}`,onClick:()=>fe("dlls"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.dlls")||"动态链接库"," (",x.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.dlls,onChange:()=>F(O=>({...O,dlls:!O.dlls}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="drivers"?"active":""}`,onClick:()=>fe("drivers"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.drivers")||"驱动"," (",w.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.drivers,onChange:()=>F(O=>({...O,drivers:!O.drivers}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="users"?"active":""}`,onClick:()=>fe("users"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.users")||"用户"," (",j.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.users,onChange:()=>F(O=>({...O,users:!O.users}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="registry"?"active":""}`,onClick:()=>fe("registry"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.registry")||"注册表"," (",C.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.registry,onChange:()=>F(O=>({...O,registry:!O.registry}))}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("button",{className:`tab-btn ${t==="tasks"?"active":""}`,onClick:()=>fe("tasks"),children:[s.jsxs("span",{className:"tab-label",children:[e("systemInfo.tasks")||"任务"," (",T.length||"...",")"]}),s.jsxs("label",{className:"module-toggle",onClick:O=>O.stopPropagation(),children:[s.jsx("input",{type:"checkbox",checked:V.tasks,onChange:()=>F(O=>({...O,tasks:!O.tasks}))}),s.jsx("span",{className:"toggle-slider"})]})]})]}),t==="system"&&r&&s.jsxs("div",{className:"system-grid",children:[s.jsxs("div",{className:"system-card os-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:"OS"}),s.jsx("h3",{children:e("systemInfo.operatingSystem")})]}),s.jsxs("div",{className:"system-status",children:[s.jsx("div",{className:"status-indicator online"}),s.jsx("span",{children:e("systemInfo.systemOnline")||"系统在线"})]}),s.jsxs("div",{className:"info-list",children:[s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.hostname")}),s.jsx("span",{className:"info-value highlight",children:r.hostname||e("common.notAvailable")||"N/A"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.domain")}),s.jsx("span",{className:"info-value",children:r.domain||"WORKGROUP"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.osName")}),s.jsx("span",{className:"info-value",children:r.os_name||e("common.unknown")||"Unknown"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.osVersion")}),s.jsx("span",{className:"info-value",children:r.os_version||e("common.unknown")||"Unknown"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.architecture")}),s.jsx("span",{className:"info-value badge",children:r.architecture||"x64"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.timezone")}),s.jsx("span",{className:"info-value",children:r.timezone||"UTC"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.admin")}),s.jsx("span",{className:`info-value badge ${r.is_admin?"admin":"user"}`,children:r.is_admin?e("systemInfo.adminUser")||"管理员":e("systemInfo.standardUser")||"标准用户"})]})]})]}),s.jsxs("div",{className:"system-card runtime-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:e("systemInfo.runtime")||"运行时"}),s.jsx("h3",{children:e("systemInfo.runtimeInfo")})]}),s.jsxs("div",{className:"info-list",children:[s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.goVersion")}),s.jsx("span",{className:"info-value mono",children:r.go_version||e("common.unknown")||"Unknown"})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.cpuCount")}),s.jsxs("span",{className:"info-value",children:[r.cpu_count||0," ",e("systemInfo.cores")||"核心"]})]}),s.jsxs("div",{className:"info-row",children:[s.jsx("span",{className:"info-label",children:e("systemInfo.uptime")}),s.jsx("span",{className:"info-value",children:we(r.uptime_seconds||0)})]})]})]}),s.jsxs("div",{className:"system-card resources-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:e("systemInfo.resources")||"资源"}),s.jsx("h3",{children:e("systemInfo.systemResources")||"系统资源"})]}),s.jsxs("div",{className:"resource-bars",children:[s.jsxs("div",{className:"resource-item",children:[s.jsxs("div",{className:"resource-header",children:[s.jsx("span",{className:"resource-name",children:e("systemInfo.memory")||"内存"}),s.jsxs("span",{className:"resource-value",children:[r.memory_free_gb?(r.memory_total_gb-r.memory_free_gb).toFixed(1):"0"," / ",((de=r.memory_total_gb)==null?void 0:de.toFixed(1))||"0"," GB"]})]}),s.jsx("div",{className:"resource-bar",children:s.jsx("div",{className:"resource-fill",style:{width:r.memory_total_gb?`${(r.memory_total_gb-r.memory_free_gb)/r.memory_total_gb*100}%`:"0%"}})})]}),s.jsxs("div",{className:"resource-item",children:[s.jsxs("div",{className:"resource-header",children:[s.jsx("span",{className:"resource-name",children:e("systemInfo.freeMemory")||"可用内存"}),s.jsxs("span",{className:"resource-value",children:[((pe=r.memory_free_gb)==null?void 0:pe.toFixed(1))||"0"," GB"]})]}),s.jsx("div",{className:"resource-bar",children:s.jsx("div",{className:"resource-fill memory",style:{width:r.memory_total_gb?`${r.memory_free_gb/r.memory_total_gb*100}%`:"0%"}})})]})]})]}),s.jsxs("div",{className:"system-card time-card",children:[s.jsxs("div",{className:"card-header",children:[s.jsx("div",{className:"card-icon",children:e("systemInfo.time")||"时间"}),s.jsx("h3",{children:e("systemInfo.timeInfo")||"时间信息"})]}),s.jsxs("div",{className:"time-display",children:[s.jsx("div",{className:"current-time",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),s.jsx("div",{className:"current-date",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),s.jsx("div",{className:"info-list",children:s.jsxs("div",{className:"info-row",children:[s.jsxs("span",{className:"info-label",children:["UTC ",e("systemInfo.time")||"时间"]}),s.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),t==="processes"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("div",{className:"table-toolbar",children:[s.jsxs("label",{className:"unsigned-filter",children:[s.jsx("input",{type:"checkbox",checked:U,onChange:()=>re(!U)}),s.jsx("span",{children:e("systemInfo.showUnsignedOnly")||"仅显示未签名（黄色高亮）"})]}),s.jsxs("span",{className:"process-count",children:[U?o.filter(O=>!O.is_signed).length:o.length," ",e("systemInfo.processes")||"进程",!U&&o.filter(O=>!O.is_signed).length>0&&s.jsxs("span",{className:"unsigned-count",children:["(",o.filter(O=>!O.is_signed).length," ",e("systemInfo.unsigned")||"未签名",")"]})]})]}),s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.pid")||"PID"}),s.jsx("th",{children:e("systemInfo.ppid")||"PPID"}),s.jsx("th",{children:e("systemInfo.name")||"名称"}),s.jsx("th",{children:e("systemInfo.user")||"用户"}),s.jsx("th",{children:e("systemInfo.signature")||"签名"}),s.jsx("th",{children:e("systemInfo.path")||"路径"}),s.jsx("th",{children:e("systemInfo.commandLine")||"命令行"})]})}),s.jsx("tbody",{children:(U?o.filter(O=>!O.is_signed):o).map((O,ke)=>{var Ue,pt;return s.jsxs("tr",{className:O.is_signed?"":"unsigned-process",children:[s.jsx("td",{className:"mono",children:O.pid}),s.jsx("td",{className:"mono",children:O.ppid}),s.jsx("td",{className:"highlight",children:O.name}),s.jsx("td",{children:O.user||"-"}),s.jsx("td",{children:O.is_signed?s.jsxs("span",{className:"signature-badge valid",title:`Issuer: ${((Ue=O.signature)==null?void 0:Ue.issuer)||"N/A"}
Thumbprint: ${((pt=O.signature)==null?void 0:pt.thumbprint)||"N/A"}`,children:["✓ ",e("systemInfo.signed")||"已签名"]}):s.jsxs("span",{className:"signature-badge unsigned",children:["✗ ",e("systemInfo.unsigned")||"未签名"]})}),s.jsx("td",{className:"truncate mono",title:O.exe||O.path,children:O.exe||O.path||"-"}),s.jsx("td",{className:"truncate",title:O.args||O.command_line,children:O.args||O.command_line||"-"})]},`${O.pid}-${ke}`)})})]}),o.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noProcessData")||"暂无进程数据"})]}),t==="network"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.protocol")||"协议"}),s.jsx("th",{children:e("systemInfo.localAddress")||"本地地址"}),s.jsx("th",{children:e("systemInfo.port")||"端口"}),s.jsx("th",{children:e("systemInfo.remoteAddress")||"远程地址"}),s.jsx("th",{children:e("systemInfo.port")||"端口"}),s.jsx("th",{children:e("systemInfo.state")||"状态"}),s.jsx("th",{children:e("systemInfo.process")||"进程"})]})}),s.jsx("tbody",{children:u.map((O,ke)=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("span",{className:"protocol-badge",children:O.protocol})}),s.jsx("td",{className:"mono",children:O.local_addr}),s.jsx("td",{className:"mono",children:O.local_port}),s.jsx("td",{className:"mono",children:O.remote_addr||"-"}),s.jsx("td",{className:"mono",children:O.remote_port||"-"}),s.jsx("td",{children:s.jsx("span",{className:"state-badge",style:{color:ee(O.state)},children:O.state})}),s.jsx("td",{children:O.process_name||O.pid||"-"})]},`${O.protocol}-${O.local_addr}-${O.local_port}-${ke}`))})]}),u.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noNetworkData")||"暂无网络连接数据"})]}),t==="env"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.varName")||"变量名"}),s.jsx("th",{children:e("systemInfo.value")||"值"}),s.jsx("th",{children:e("systemInfo.type")||"类型"})]})}),s.jsx("tbody",{children:p.map((O,ke)=>s.jsxs("tr",{children:[s.jsx("td",{className:"mono highlight",children:O.name}),s.jsx("td",{className:"truncate",title:O.value,children:O.value}),s.jsx("td",{children:s.jsx("span",{className:"type-badge",children:O.type})})]},`${O.name}-${ke}`))})]}),p.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noEnvVars")||"暂无环境变量"})]}),t==="dlls"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.pid")||"PID"}),s.jsx("th",{children:e("systemInfo.process")||"进程"}),s.jsx("th",{children:e("systemInfo.dllName")||"DLL名称"}),s.jsx("th",{children:e("systemInfo.version")||"版本"}),s.jsx("th",{children:e("systemInfo.signed")||"签名"}),s.jsx("th",{children:e("systemInfo.path")||"路径"}),s.jsx("th",{children:e("systemInfo.size")||"大小"})]})}),s.jsx("tbody",{children:x.map((O,ke)=>s.jsxs("tr",{children:[s.jsx("td",{className:"mono",children:O.process_id}),s.jsx("td",{children:O.process_name}),s.jsx("td",{className:"mono highlight",children:O.name}),s.jsx("td",{className:"mono",children:O.version||"-"}),s.jsx("td",{children:s.jsx("span",{className:`signature-badge ${O.is_signed?"signed":"unsigned"}`,children:O.is_signed?e("systemInfo.signed")||"已签名":e("systemInfo.unsigned")||"未签名"})}),s.jsx("td",{className:"truncate",title:O.path,children:O.path}),s.jsxs("td",{className:"mono",children:[(O.size/1024).toFixed(1)," KB"]})]},`${O.process_id}-${O.name}-${ke}`))})]}),x.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noDllData")||"暂无DLL信息"})]}),t==="drivers"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.name")||"名称"}),s.jsx("th",{children:e("systemInfo.displayName")||"显示名称"}),s.jsx("th",{children:e("systemInfo.description")||"描述"}),s.jsx("th",{children:e("systemInfo.status")||"状态"}),s.jsx("th",{children:e("systemInfo.path")||"路径"})]})}),s.jsx("tbody",{children:w.map((O,ke)=>{var Ue;return s.jsxs("tr",{children:[s.jsx("td",{className:"mono highlight",children:O.name}),s.jsx("td",{children:O.display_name||O.name}),s.jsx("td",{className:"truncate",children:O.description||"-"}),s.jsx("td",{children:s.jsx("span",{className:`status-badge ${((Ue=O.status)==null?void 0:Ue.toLowerCase())==="running"?"running":"stopped"}`,children:O.status||e("common.unknown")})}),s.jsx("td",{className:"truncate mono",title:O.path,children:O.path||"-"})]},`${O.name}-${ke}`)})})]}),w.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noDriverData")||"暂无驱动信息"})]}),t==="users"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.name")||"名称"}),s.jsx("th",{children:e("systemInfo.fullName")||"全名"}),s.jsx("th",{children:e("systemInfo.sid")||"SID"}),s.jsx("th",{children:e("systemInfo.type")||"类型"}),s.jsx("th",{children:e("systemInfo.enabled")||"已启用"}),s.jsx("th",{children:e("systemInfo.homeDir")||"主目录"})]})}),s.jsx("tbody",{children:j.map((O,ke)=>s.jsxs("tr",{children:[s.jsx("td",{className:"highlight",children:O.name}),s.jsx("td",{children:O.full_name||"-"}),s.jsx("td",{className:"mono",children:O.sid||"-"}),s.jsx("td",{children:O.type||e("systemInfo.user")||"用户"}),s.jsx("td",{children:s.jsx("span",{className:`status-badge ${O.enabled?"running":"stopped"}`,children:O.enabled?e("systemInfo.enabled")||"已启用":e("systemInfo.disabled")||"已禁用"})}),s.jsx("td",{className:"truncate",children:O.home_dir||"-"})]},`${O.name}-${ke}`))})]}),j.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noUserData")||"暂无用户信息"})]}),t==="registry"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.keyPath")||"注册表路径"}),s.jsx("th",{children:e("systemInfo.name")||"名称"}),s.jsx("th",{children:e("systemInfo.value")||"值"}),s.jsx("th",{children:e("systemInfo.type")||"类型"})]})}),s.jsx("tbody",{children:C.map((O,ke)=>s.jsxs("tr",{children:[s.jsx("td",{className:"truncate mono",title:O.path,children:O.path}),s.jsx("td",{className:"highlight",children:O.name}),s.jsx("td",{className:"truncate",title:O.value,children:O.value||"-"}),s.jsx("td",{children:s.jsx("span",{className:"type-badge",children:O.type})})]},`${O.path}-${ke}`))})]}),C.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noRegistryData")||"暂无注册表持久化键"})]}),t==="tasks"&&s.jsxs("div",{className:"data-table-container",children:[s.jsxs("table",{className:"data-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("systemInfo.taskName")||"任务名称"}),s.jsx("th",{children:e("systemInfo.path")||"路径"}),s.jsx("th",{children:e("systemInfo.state")||"状态"})]})}),s.jsx("tbody",{children:T.map((O,ke)=>{var Ue;return s.jsxs("tr",{children:[s.jsx("td",{className:"highlight",children:O.name}),s.jsx("td",{className:"truncate mono",title:O.path,children:O.path||"-"}),s.jsx("td",{children:s.jsx("span",{className:`status-badge ${((Ue=O.state)==null?void 0:Ue.toLowerCase())==="running"?"running":"stopped"}`,children:O.state||e("common.unknown")})})]},`${O.name}-${ke}`)})})]}),T.length===0&&!M&&s.jsx("div",{className:"empty-state",children:e("systemInfo.noTasksData")||"暂无计划任务"})]}),s.jsx("style",{children:`
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

        .signature-badge {
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .signature-badge.signed {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
        }

        .signature-badge.unsigned {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
      `})]})}function T_(){var ma,ui,hi,fi;const[e,t]=E.useState([]),[n,r]=E.useState(!0),[l,o]=E.useState(null),[c,u]=E.useState(0),[h,p]=E.useState(0),[m,x]=E.useState("all"),[N,w]=E.useState("all"),[b,j]=E.useState(""),[y,C]=E.useState(null),[D,T]=E.useState(!1),[W,_]=E.useState(!1),[H,M]=E.useState(!1),[R,A]=E.useState(!1),[K,V]=E.useState(null),[F,U]=E.useState(!1),[re,J]=E.useState("choice"),[k,z]=E.useState({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""}),[$,te]=E.useState([]),[se,L]=E.useState(null),[Z,ue]=E.useState({}),[fe,we]=E.useState(null),[ee,de]=E.useState(!1),[pe,O]=E.useState(!1),[ke,Ue]=E.useState(null),pt=E.useRef(null),ve=()=>{$s.list().then(q=>{t(q.data.rules||[]),u(q.data.total_count||0),p(q.data.enabled_count||0),r(!1)}).catch(q=>{o(q.message||"Failed to load rules"),r(!1)})};E.useEffect(()=>{ve()},[]);const Yt=()=>{$s.listTemplates().then(q=>{te(q.data.templates||[])}).catch(q=>{console.error("Failed to load templates:",q)})},oi=()=>{Yt(),M(!0)},Xs=q=>{L(q);const ge={};q.parameters.forEach(Le=>{ge[Le.name]=Le.default||""}),ue(ge)},Sn=()=>{se&&$s.instantiateTemplate(se.name,Z).then(()=>{M(!1),L(null),ue({}),ve()}).catch(q=>{console.error("Failed to create rule from template:",q),alert("Failed to create rule from template")})},ci=(q,ge)=>{$s.toggle(q,!ge).then(()=>{t(e.map(Le=>Le.name===q?{...Le,enabled:!ge}:Le)),p(Le=>ge?Le-1:Le+1)}).catch(Le=>{console.error("Failed to toggle rule:",Le)})},Cn=q=>{!q.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?")||(V({...q}),A(!0))},rs=q=>{if(!q.is_custom){alert("Cannot delete built-in rules");return}confirm(`Are you sure you want to delete rule "${q.name}"?`)&&oe.delete(`/rules/${q.name}`).then(()=>{ve()}).catch(Le=>{console.error("Failed to delete rule:",Le),alert("Failed to delete rule")})},as=()=>{K&&$s.update(K.name,K).then(()=>{A(!1),V(null),ve()}).catch(q=>{console.error("Failed to update rule:",q),alert("Failed to update rule")})},En=()=>{U(!0),J("choice"),z({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""})},di=()=>{U(!1),oi()},Rn=()=>{J("custom")},ae=()=>{if(!k.name.trim()){alert("Rule name is required");return}$s.save({name:k.name,description:k.description,severity:k.severity,enabled:!0,score:k.score,mitre_attack:k.mitre_attack,event_ids:k.event_ids,message:k.message}).then(()=>{U(!1),ve()}).catch(q=>{console.error("Failed to add rule:",q),alert("Failed to create rule")})},he=()=>{T(!0),we(null)},Ae=q=>{de(!0),$s.validate(q).then(ge=>{we(ge.data)}).catch(ge=>{we({valid:!1,errors:[ge.message||"Validation failed"],warnings:[]})}).finally(()=>{de(!1)})},it=q=>{$s.export(q).then(ge=>{const Le=new Blob([ge.data],{type:q==="yaml"?"text/yaml":"application/json"}),Qt=URL.createObjectURL(Le),js=document.createElement("a");js.href=Qt,js.download=`rules_export.${q}`,document.body.appendChild(js),js.click(),document.body.removeChild(js),URL.revokeObjectURL(Qt)}).catch(ge=>{console.error("Failed to export rules:",ge),alert("Failed to export rules")})},ls=()=>{_(!0),Ue(null)},bs=q=>{var Qt;const ge=(Qt=q.target.files)==null?void 0:Qt[0];if(!ge)return;const Le=new FileReader;Le.onload=js=>{var Yi;try{const Pn=(Yi=js.target)==null?void 0:Yi.result;let As=[];if(ge.name.endsWith(".yaml")||ge.name.endsWith(".yml")){const $t=Pn.split(`
`);let xt={};for(const Ct of $t)Ct.startsWith("- name:")?(xt.name&&As.push(xt),xt={name:Ct.replace("- name:","").trim(),mitre_attack:[]}):Ct.startsWith("  description:")?xt.description=Ct.replace("  description:","").trim():Ct.startsWith("  severity:")?xt.severity=Ct.replace("  severity:","").trim():Ct.startsWith("  enabled:")?xt.enabled=Ct.replace("  enabled:","").trim()==="true":Ct.startsWith("  score:")?xt.score=parseFloat(Ct.replace("  score:","").trim())||50:Ct.startsWith("    - ")&&(xt.mitre_attack||(xt.mitre_attack=[]),xt.mitre_attack.push(Ct.replace("    - ","").trim()));xt.name&&As.push(xt)}else{const $t=JSON.parse(Pn);As=Array.isArray($t)?$t:$t.rules||[]}if(As.length===0){Ue({imported:0,failed:0,errors:["No valid rules found in file"]});return}O(!0),$s.import(As).then($t=>{Ue($t.data),$t.data.imported>0&&ve()}).catch($t=>{Ue({imported:0,failed:As.length,errors:[$t.message||"Import failed"]})}).finally(()=>{O(!1)})}catch(Pn){Ue({imported:0,failed:0,errors:["Failed to parse file: "+(Pn.message||"Invalid format")]})}},Le.readAsText(ge)},Ps=q=>{C(q)},Ie=q=>{switch(q==null?void 0:q.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},Dt=q=>{switch(q==null?void 0:q.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Dn=e.filter(q=>{var ge;return!(m!=="all"&&((ge=q.severity)==null?void 0:ge.toLowerCase())!==m||N==="enabled"&&!q.enabled||N==="disabled"&&q.enabled||b&&!q.name.toLowerCase().includes(b.toLowerCase()))});return n?s.jsx("div",{className:"rules-page",children:s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"spinner"}),s.jsx("div",{children:"Loading rules..."})]})}):l?s.jsx("div",{className:"rules-page",children:s.jsx("div",{className:"error-state",children:l})}):s.jsxs("div",{className:"rules-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:"Detection Rules"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:he,children:"Validate"}),s.jsx("button",{className:"btn-secondary",onClick:ls,children:"Import"}),s.jsxs("div",{className:"export-dropdown",children:[s.jsx("button",{className:"btn-secondary",children:"Export"}),s.jsxs("div",{className:"export-menu",children:[s.jsx("button",{onClick:()=>it("json"),children:"JSON"}),s.jsx("button",{onClick:()=>it("yaml"),children:"YAML"})]})]}),s.jsx("button",{className:"btn-primary",onClick:En,children:"Add Rule"})]})]}),s.jsxs("div",{className:"stats-cards",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",children:"📋"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value",children:c}),s.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon enabled",children:"✓"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value enabled",children:h}),s.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon disabled",children:"✗"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("div",{className:"stat-value disabled",children:c-h}),s.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),s.jsxs("div",{className:"filter-bar",children:[s.jsx("input",{type:"text",placeholder:"Search rules...",value:b,onChange:q=>j(q.target.value),className:"search-input"}),s.jsxs("select",{value:m,onChange:q=>x(q.target.value),className:"filter-select",children:[s.jsx("option",{value:"all",children:"All Severities"}),s.jsx("option",{value:"critical",children:"Critical"}),s.jsx("option",{value:"high",children:"High"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"low",children:"Low"})]}),s.jsxs("select",{value:N,onChange:q=>w(q.target.value),className:"filter-select",children:[s.jsx("option",{value:"all",children:"All Status"}),s.jsx("option",{value:"enabled",children:"Enabled"}),s.jsx("option",{value:"disabled",children:"Disabled"})]})]}),s.jsx("div",{className:"rules-grid",children:Dn.map(q=>{var ge;return s.jsxs("div",{className:`rule-card ${q.enabled?"":"disabled"}`,children:[s.jsxs("div",{className:"rule-header",children:[s.jsxs("div",{className:"rule-title",children:[s.jsx("span",{className:`severity-dot ${Ie(q.severity)}`}),s.jsx("span",{className:"rule-name",children:q.name})]}),s.jsxs("label",{className:"switch",children:[s.jsx("input",{type:"checkbox",checked:q.enabled,onChange:()=>ci(q.name,q.enabled)}),s.jsx("span",{className:"slider"})]})]}),s.jsxs("div",{className:"rule-meta",children:[s.jsxs("span",{className:`severity-badge ${Ie(q.severity)}`,children:[Dt(q.severity)," ",q.severity]}),s.jsxs("span",{className:"score-badge",children:["Score: ",q.score]}),!q.is_custom&&s.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),s.jsx("p",{className:"rule-description",children:q.description}),s.jsxs("div",{className:"rule-footer",children:[s.jsxs("div",{className:"mitre-tags",children:[(ge=q.mitre_attack)==null?void 0:ge.slice(0,3).map(Le=>s.jsx("span",{className:"mitre-tag",children:Le},Le)),q.mitre_attack&&q.mitre_attack.length>3&&s.jsxs("span",{className:"mitre-tag",children:["+",q.mitre_attack.length-3]})]}),s.jsxs("div",{className:"rule-actions",children:[s.jsx("button",{className:"rule-action",onClick:()=>Ps(q),children:"Details"}),s.jsx("button",{className:"rule-action",onClick:()=>Cn(q),children:"Edit"}),q.is_custom&&s.jsx("button",{className:"rule-action rule-action-delete",onClick:()=>rs(q),children:"Delete"})]})]})]},q.id)})}),Dn.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"🛡️"}),s.jsx("div",{children:"No rules match your filters"})]}),y&&s.jsx("div",{className:"modal-overlay",onClick:()=>C(null),children:s.jsxs("div",{className:"modal-content rule-modal",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Rule Details"}),s.jsx("button",{className:"close-btn",onClick:()=>C(null),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Name:"}),s.jsx("span",{className:"detail-value",children:y.name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"ID:"}),s.jsx("span",{className:"detail-value mono",children:y.id})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Severity:"}),s.jsxs("span",{className:`severity-badge ${Ie(y.severity)}`,children:[Dt(y.severity)," ",y.severity]})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Score:"}),s.jsx("span",{className:"detail-value",children:y.score})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Status:"}),s.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:"MITRE ATT&CK"}),s.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(q=>s.jsx("span",{className:"mitre-tag",children:q},q))})]}),y.tags&&y.tags.length>0&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:"Tags"}),s.jsx("div",{className:"tags-list",children:y.tags.map(q=>s.jsx("span",{className:"tag-item",children:q},q))})]})]})]})}),D&&s.jsx("div",{className:"modal-overlay",onClick:()=>T(!1),children:s.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Validate Rule"}),s.jsx("button",{className:"close-btn",onClick:()=>T(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),s.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>T(!1),children:"Cancel"}),s.jsx("button",{className:"btn-primary",onClick:()=>{const q=document.querySelector(".validate-input");if(q!=null&&q.value){const ge=q.value;try{if(ge.trim().startsWith("-"))Ae({name:"temp",description:ge,severity:"medium",enabled:!0,score:50});else{const Le=JSON.parse(ge);Ae(Le)}}catch{Ae({name:"temp",description:ge,severity:"medium",enabled:!0,score:50})}}},disabled:ee,children:ee?"Validating...":"Validate"})]}),fe&&s.jsxs("div",{className:`validation-result ${fe.valid?"valid":"invalid"}`,children:[s.jsx("div",{className:"result-header",children:fe.valid?"✓ Valid Rule":"✗ Invalid Rule"}),fe.errors.length>0&&s.jsxs("div",{className:"result-errors",children:[s.jsx("strong",{children:"Errors:"}),s.jsx("ul",{children:fe.errors.map((q,ge)=>s.jsx("li",{children:q},ge))})]}),fe.warnings.length>0&&s.jsxs("div",{className:"result-warnings",children:[s.jsx("strong",{children:"Warnings:"}),s.jsx("ul",{children:fe.warnings.map((q,ge)=>s.jsx("li",{children:q},ge))})]})]})]})]})}),F&&s.jsx("div",{className:"modal-overlay",onClick:()=>U(!1),children:s.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Add New Rule"}),s.jsx("button",{className:"close-btn",onClick:()=>U(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:re==="choice"?s.jsxs("div",{className:"add-rule-choice",children:[s.jsx("p",{className:"modal-desc",children:"Choose how to create a new rule:"}),s.jsxs("div",{className:"choice-cards",children:[s.jsxs("div",{className:"choice-card",onClick:di,children:[s.jsx("div",{className:"choice-icon",children:"📋"}),s.jsx("div",{className:"choice-title",children:"From Template"}),s.jsx("div",{className:"choice-desc",children:"Create a rule from a pre-defined template with customizable parameters"})]}),s.jsxs("div",{className:"choice-card",onClick:Rn,children:[s.jsx("div",{className:"choice-icon",children:"✏️"}),s.jsx("div",{className:"choice-title",children:"Custom Rule"}),s.jsx("div",{className:"choice-desc",children:"Create a custom rule by filling in the rule details manually"})]})]})]}):s.jsxs("div",{className:"add-rule-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Rule Name ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"text",value:k.name,onChange:q=>z({...k,name:q.target.value}),placeholder:"e.g. suspicious-login-detected"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:k.description,onChange:q=>z({...k,description:q.target.value}),rows:3,placeholder:"Describe what this rule detects..."})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Severity"}),s.jsxs("select",{value:k.severity,onChange:q=>z({...k,severity:q.target.value}),children:[s.jsx("option",{value:"critical",children:"Critical"}),s.jsx("option",{value:"high",children:"High"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"low",children:"Low"}),s.jsx("option",{value:"info",children:"Info"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Score (0-100)"}),s.jsx("input",{type:"number",min:"0",max:"100",value:k.score,onChange:q=>z({...k,score:parseFloat(q.target.value)||0})})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"MITRE ATT&CK (comma-separated)"}),s.jsx("input",{type:"text",value:((ma=k.mitre_attack)==null?void 0:ma.join(", "))||"",onChange:q=>z({...k,mitre_attack:q.target.value.split(",").map(ge=>ge.trim()).filter(ge=>ge)}),placeholder:"T1055, T1056"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Event IDs (comma-separated)"}),s.jsx("input",{type:"text",value:((ui=k.event_ids)==null?void 0:ui.join(", "))||"",onChange:q=>z({...k,event_ids:q.target.value.split(",").map(ge=>parseInt(ge.trim())).filter(ge=>!isNaN(ge))}),placeholder:"4624, 4625"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Alert Message"}),s.jsx("input",{type:"text",value:k.message,onChange:q=>z({...k,message:q.target.value}),placeholder:"Alert message when rule triggers"})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>J("choice"),children:"Back"}),s.jsx("button",{className:"btn-primary",onClick:ae,children:"Create Rule"})]})]})})]})}),W&&s.jsx("div",{className:"modal-overlay",onClick:()=>_(!1),children:s.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Import Rules"}),s.jsx("button",{className:"close-btn",onClick:()=>_(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),s.jsxs("details",{className:"format-example",children:[s.jsx("summary",{children:"View Format Examples"}),s.jsxs("div",{className:"format-content",children:[s.jsx("h5",{children:"JSON Format:"}),s.jsx("pre",{children:`[
  {
    "name": "custom-rule-1",
    "description": "My custom rule",
    "severity": "high",
    "enabled": true,
    "score": 80,
    "mitre_attack": ["T1055"],
    "event_ids": [4624, 4625],
    "message": "Suspicious activity detected"
  }
]`}),s.jsx("h5",{children:"YAML Format:"}),s.jsx("pre",{children:`- name: custom-rule-1
  description: My custom rule
  severity: high
  enabled: true
  score: 80
  mitre_attack:
    - T1055
  event_ids:
    - 4624
    - 4625
  message: Suspicious activity detected`})]})]}),s.jsx("input",{type:"file",ref:pt,accept:".yaml,.yml,.json",onChange:bs,style:{display:"none"}}),s.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var q;return(q=pt.current)==null?void 0:q.click()},disabled:pe,children:pe?"Importing...":"Choose File"}),ke&&s.jsxs("div",{className:`import-result ${ke.imported>0?"success":"error"}`,children:[s.jsx("div",{className:"result-header",children:ke.imported>0?`✓ Imported ${ke.imported} rules`:"✗ Import failed"}),ke.failed>0&&s.jsxs("div",{className:"result-info",children:["Failed: ",ke.failed]}),ke.errors.length>0&&s.jsx("div",{className:"result-errors",children:s.jsx("ul",{children:ke.errors.map((q,ge)=>s.jsx("li",{children:q},ge))})})]}),s.jsx("div",{className:"modal-actions",children:s.jsx("button",{className:"btn-secondary",onClick:()=>_(!1),children:"Close"})})]})]})}),H&&s.jsx("div",{className:"modal-overlay",onClick:()=>M(!1),children:s.jsxs("div",{className:"modal-content template-modal",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Create Rule from Template"}),s.jsx("button",{className:"close-btn",onClick:()=>M(!1),children:"×"})]}),s.jsx("div",{className:"modal-body",children:se?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"selected-template-header",children:[s.jsx("button",{className:"btn-back",onClick:()=>L(null),children:"← Back"}),s.jsx("h4",{children:se.name})]}),s.jsx("div",{className:"template-params-form",children:se.parameters.map(q=>s.jsxs("div",{className:"param-item",children:[s.jsxs("label",{children:[q.name,q.required&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("p",{className:"param-desc",children:q.description}),q.options&&q.options.length>0?s.jsxs("select",{value:Z[q.name]||"",onChange:ge=>ue({...Z,[q.name]:ge.target.value}),children:[s.jsx("option",{value:"",children:"Select..."}),q.options.map(ge=>s.jsx("option",{value:ge,children:ge},ge))]}):s.jsx("input",{type:q.type==="number"?"number":"text",value:Z[q.name]||"",onChange:ge=>ue({...Z,[q.name]:ge.target.value}),placeholder:q.default||""})]},q.name))}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>M(!1),children:"Cancel"}),s.jsx("button",{className:"btn-primary",onClick:Sn,disabled:se.parameters.some(q=>q.required&&!Z[q.name]),children:"Create Rule"})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"modal-desc",children:"Select a template:"}),s.jsx("div",{className:"template-list",children:$.length===0?s.jsx("div",{className:"empty-state",children:"No templates available"}):$.map(q=>s.jsxs("div",{className:"template-card",onClick:()=>Xs(q),children:[s.jsx("div",{className:"template-name",children:q.name}),s.jsx("div",{className:"template-desc",children:q.description}),s.jsxs("div",{className:"template-params",children:[q.parameters.length," parameters"]})]},q.name))})]})})]})}),R&&K&&s.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:s.jsxs("div",{className:"modal-content",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Edit Rule"}),s.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:K.name,onChange:q=>V({...K,name:q.target.value}),disabled:!K.is_custom})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:K.description,onChange:q=>V({...K,description:q.target.value}),rows:3})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Severity"}),s.jsxs("select",{value:K.severity,onChange:q=>V({...K,severity:q.target.value}),children:[s.jsx("option",{value:"critical",children:"Critical"}),s.jsx("option",{value:"high",children:"High"}),s.jsx("option",{value:"medium",children:"Medium"}),s.jsx("option",{value:"low",children:"Low"}),s.jsx("option",{value:"info",children:"Info"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Score (0-100)"}),s.jsx("input",{type:"number",min:"0",max:"100",value:K.score,onChange:q=>V({...K,score:parseFloat(q.target.value)||0})})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"MITRE ATT&CK"}),s.jsx("input",{type:"text",value:((hi=K.mitre_attack)==null?void 0:hi.join(", "))||"",onChange:q=>V({...K,mitre_attack:q.target.value.split(",").map(ge=>ge.trim()).filter(ge=>ge)}),placeholder:"T1234, T5678"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Event IDs (comma-separated)"}),s.jsx("input",{type:"text",value:((fi=K.event_ids)==null?void 0:fi.join(", "))||"",onChange:q=>V({...K,event_ids:q.target.value.split(",").map(ge=>parseInt(ge.trim())).filter(ge=>!isNaN(ge))}),placeholder:"4624, 4625"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Message"}),s.jsx("input",{type:"text",value:K.message||"",onChange:q=>V({...K,message:q.target.value})})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),s.jsx("button",{className:"btn-primary",onClick:as,children:"Save Changes"})]})]})]})}),s.jsx("style",{children:`
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
        
        .rule-action-delete {
          color: #ef4444;
          border-color: #ef4444;
        }
        
        .rule-action-delete:hover {
          background: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
          color: #ef4444;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #888;
          font-size: 13px;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #333;
          border-radius: 6px;
          color: #eee;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .form-group input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .format-example {
          margin-bottom: 16px;
          padding: 12px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          border: 1px solid #333;
        }
        
        .format-example summary {
          cursor: pointer;
          color: #00d9ff;
          font-weight: 500;
        }
        
        .format-content h5 {
          color: #888;
          margin: 12px 0 8px 0;
          font-size: 13px;
        }
        
        .format-content pre {
          background: rgba(0, 0, 0, 0.3);
          padding: 12px;
          border-radius: 4px;
          font-size: 12px;
          color: #ccc;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        
        .add-rule-choice {
          padding: 10px 0;
        }
        
        .add-rule-choice .modal-desc {
          margin-bottom: 20px;
        }
        
        .choice-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .choice-card {
          padding: 24px 20px;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid #333;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
        
        .choice-card:hover {
          border-color: #00d9ff;
          background: rgba(0, 217, 255, 0.05);
          transform: translateY(-2px);
        }
        
        .choice-icon {
          font-size: 36px;
          margin-bottom: 12px;
        }
        
        .choice-title {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }
        
        .choice-desc {
          font-size: 13px;
          color: #888;
          line-height: 1.4;
        }
        
        .add-rule-form {
          padding: 10px 0;
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
      `})]})}function M_(){const{t:e}=nt(),[t,n]=E.useState("general"),[r,l]=E.useState(!1),[o,c]=E.useState(!1),[u,h]=E.useState(null),[p,m]=E.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});E.useEffect(()=>{fd.get().then(b=>{const j=b.data;m({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const x=async()=>{var b,j;c(!0),h(null);try{await fd.save({database_path:p.databasePath,log_level:p.logLevel,max_events:p.maxEvents,retention_days:p.retentionDays,enable_alerting:p.enableAlerting,enable_live_collection:p.enableLiveCollection,enable_auto_update:p.enableAutoUpdate,api_port:p.apiPort,api_host:p.apiHost,cors_enabled:p.corsEnabled,max_import_file_size:p.maxImportFileSize,export_directory:p.exportDirectory,parser_workers:p.parserWorkers,memory_limit:p.memoryLimit}),l(!0),setTimeout(()=>l(!1),3e3)}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to save settings")}finally{c(!1)}},N=async()=>{var b,j;c(!0),h(null);try{await fd.reset(),window.location.reload()}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to reset settings"),c(!1)}},w=(b,j)=>{m({...p,[b]:j})};return s.jsxs("div",{className:"settings-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("settings.title")}),r&&s.jsxs("span",{className:"save-indicator",children:["✓ ",e("settings.saved")]})]}),s.jsxs("div",{className:"settings-layout",children:[s.jsxs("div",{className:"settings-nav",children:[s.jsxs("button",{className:`nav-item ${t==="general"?"active":""}`,onClick:()=>n("general"),children:[s.jsx("span",{className:"nav-icon",children:"⚙️"}),e("settings.general")]}),s.jsxs("button",{className:`nav-item ${t==="database"?"active":""}`,onClick:()=>n("database"),children:[s.jsx("span",{className:"nav-icon",children:"💾"}),e("settings.database")]}),s.jsxs("button",{className:`nav-item ${t==="api"?"active":""}`,onClick:()=>n("api"),children:[s.jsx("span",{className:"nav-icon",children:"🔌"}),e("settings.apiServer")]}),s.jsxs("button",{className:`nav-item ${t==="collection"?"active":""}`,onClick:()=>n("collection"),children:[s.jsx("span",{className:"nav-icon",children:"📡"}),e("settings.collection")]}),s.jsxs("button",{className:`nav-item ${t==="advanced"?"active":""}`,onClick:()=>n("advanced"),children:[s.jsx("span",{className:"nav-icon",children:"🔧"}),e("settings.advanced")]})]}),s.jsxs("div",{className:"settings-content",children:[t==="general"&&s.jsxs("div",{className:"settings-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("settings.generalSettings")}),s.jsx("p",{children:e("settings.configureBasic")})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.logLevel")}),s.jsx("p",{children:e("settings.logLevelDesc")})]}),s.jsxs("select",{value:p.logLevel,onChange:b=>w("logLevel",b.target.value),children:[s.jsx("option",{value:"debug",children:e("settings.debug")}),s.jsx("option",{value:"info",children:e("settings.info")}),s.jsx("option",{value:"warn",children:e("settings.warn")}),s.jsx("option",{value:"error",children:e("settings.error")})]})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.exportDirectory")}),s.jsx("p",{children:e("settings.exportDirectoryDesc")})]}),s.jsx("input",{type:"text",value:p.exportDirectory,onChange:b=>w("exportDirectory",b.target.value),className:"text-input"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.autoUpdateRules")}),s.jsx("p",{children:e("settings.autoUpdateRulesDesc")})]}),s.jsxs("label",{className:"toggle",children:[s.jsx("input",{type:"checkbox",checked:p.enableAutoUpdate,onChange:b=>w("enableAutoUpdate",b.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]})]}),t==="database"&&s.jsxs("div",{className:"settings-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("settings.databaseSettings")}),s.jsx("p",{children:e("settings.configureDatabase")})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.databasePath")}),s.jsx("p",{children:e("settings.databasePathDesc")})]}),s.jsx("input",{type:"text",value:p.databasePath,onChange:b=>w("databasePath",b.target.value),className:"text-input"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.eventRetention")}),s.jsx("p",{children:e("settings.eventRetentionDesc")})]}),s.jsx("input",{type:"number",value:p.retentionDays,onChange:b=>w("retentionDays",Number(b.target.value)),className:"number-input",min:"1",max:"365"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.maxEvents")}),s.jsx("p",{children:e("settings.maxEventsDesc")})]}),s.jsx("input",{type:"number",value:p.maxEvents,onChange:b=>w("maxEvents",Number(b.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),t==="api"&&s.jsxs("div",{className:"settings-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("settings.apiServerSettings")}),s.jsx("p",{children:e("settings.configureApiServer")})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.apiHost")}),s.jsx("p",{children:e("settings.apiHostDesc")})]}),s.jsx("input",{type:"text",value:p.apiHost,onChange:b=>w("apiHost",b.target.value),className:"text-input"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.apiPort")}),s.jsx("p",{children:e("settings.apiPortDesc")})]}),s.jsx("input",{type:"number",value:p.apiPort,onChange:b=>w("apiPort",Number(b.target.value)),className:"number-input",min:"1",max:"65535"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.enableCors")}),s.jsx("p",{children:e("settings.enableCorsDesc")})]}),s.jsxs("label",{className:"toggle",children:[s.jsx("input",{type:"checkbox",checked:p.corsEnabled,onChange:b=>w("corsEnabled",b.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]})]}),t==="collection"&&s.jsxs("div",{className:"settings-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("settings.collectionSettings")}),s.jsx("p",{children:e("settings.configureCollection")})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.enableAlerting")}),s.jsx("p",{children:e("settings.enableAlertingDesc")})]}),s.jsxs("label",{className:"toggle",children:[s.jsx("input",{type:"checkbox",checked:p.enableAlerting,onChange:b=>w("enableAlerting",b.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.enableLiveCollection")}),s.jsx("p",{children:e("settings.enableLiveCollectionDesc")})]}),s.jsxs("label",{className:"toggle",children:[s.jsx("input",{type:"checkbox",checked:p.enableLiveCollection,onChange:b=>w("enableLiveCollection",b.target.checked)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.maxImportFileSize")}),s.jsx("p",{children:e("settings.maxImportFileSizeDesc")})]}),s.jsx("input",{type:"number",value:p.maxImportFileSize,onChange:b=>w("maxImportFileSize",Number(b.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),t==="advanced"&&s.jsxs("div",{className:"settings-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("settings.advancedSettings")}),s.jsx("p",{children:e("settings.expertConfig")})]}),s.jsxs("div",{className:"info-card",children:[s.jsxs("h4",{children:["⚠️ ",e("settings.warning")]}),s.jsx("p",{children:e("settings.warningDesc")})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.parserWorkers")}),s.jsx("p",{children:e("settings.parserWorkersDesc")})]}),s.jsx("input",{type:"number",value:p.parserWorkers,onChange:b=>w("parserWorkers",Number(b.target.value)),className:"number-input",min:"1",max:"32"})]}),s.jsxs("div",{className:"setting-card",children:[s.jsxs("div",{className:"setting-info",children:[s.jsx("label",{children:e("settings.memoryLimit")}),s.jsx("p",{children:e("settings.memoryLimitDesc")})]}),s.jsx("input",{type:"number",value:p.memoryLimit,onChange:b=>w("memoryLimit",Number(b.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),s.jsxs("div",{className:"settings-actions",children:[u&&s.jsx("span",{className:"error-text",children:u}),s.jsx("button",{onClick:x,className:"btn-primary",disabled:o,children:e(o?"settings.saving":"settings.saveChanges")}),s.jsx("button",{onClick:N,className:"btn-secondary",disabled:o,children:e("settings.resetDefaults")})]})]})]}),s.jsx("style",{children:`
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
      `})]})}function L_(){const{t:e}=nt(),[t,n]=E.useState(null),[r,l]=E.useState(!0),[o,c]=E.useState(null),[u,h]=E.useState("5m"),[p,m]=E.useState({events:[],alerts:[],memory:[],timestamps:[]}),x=E.useRef(null),N=()=>{gs.getMetrics().then(C=>{n(C.data),l(!1),m(D=>{const T=new Date().toLocaleTimeString(),W=[...D.events,C.data.total_events].slice(-20),_=[...D.alerts,C.data.total_alerts].slice(-20),H=[...D.memory,C.data.memory_usage_mb].slice(-20),M=[...D.timestamps,T].slice(-20);return{events:W,alerts:_,memory:H,timestamps:M}})}).catch(C=>{c(C.message||e("common.error")),l(!1)})};E.useEffect(()=>{N();const C=setInterval(N,5e3);return()=>clearInterval(C)},[]),E.useEffect(()=>{x.current&&p.events.length>1&&w()},[p]);const w=()=>{const C=x.current;if(!C)return;const D=C.getContext("2d");if(!D)return;const T=C.width,W=C.height,_=40;D.clearRect(0,0,T,W);const H=Math.max(...p.events,1),M=Math.min(...p.events,0),R=H-M||1;D.strokeStyle="#333",D.lineWidth=1;for(let K=0;K<=4;K++){const V=_+(W-2*_)*K/4;D.beginPath(),D.moveTo(_,V),D.lineTo(T-_,V),D.stroke()}const A=(T-2*_)/(p.events.length-1);D.strokeStyle="#00d9ff",D.lineWidth=2,D.beginPath(),p.events.forEach((K,V)=>{const F=_+V*A,U=_+(W-2*_)*(1-(K-M)/R);V===0?D.moveTo(F,U):D.lineTo(F,U)}),D.stroke(),D.fillStyle="#00d9ff",p.events.forEach((K,V)=>{const F=_+V*A,U=_+(W-2*_)*(1-(K-M)/R);D.beginPath(),D.arc(F,U,3,0,Math.PI*2),D.fill()})},b=C=>{const D=Math.floor(C/86400),T=Math.floor(C%86400/3600),W=Math.floor(C%3600/60);return D>0?`${D}d ${T}h ${W}m`:T>0?`${T}h ${W}m`:`${W}m`};if(r)return s.jsx("div",{className:"metrics-page",children:s.jsxs("div",{className:"loading-state",children:[s.jsx("div",{className:"spinner"}),s.jsx("div",{children:e("common.loading")})]})});if(o)return s.jsx("div",{className:"metrics-page",children:s.jsxs("div",{className:"error-state",children:["❌ ",o]})});const j=t?(t.memory_usage_mb/(t.memory_limit_mb||512)*100).toFixed(1):"0";return s.jsxs("div",{className:"metrics-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("metrics.title")}),s.jsxs("div",{className:"time-range-selector",children:[s.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),s.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),s.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),s.jsxs("div",{className:"metrics-grid",children:[s.jsxs("div",{className:"metric-card large",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("span",{className:"metric-icon",children:"📊"}),s.jsx("span",{className:"metric-title",children:e("metrics.totalEvents")})]}),s.jsx("div",{className:"metric-value",children:((t==null?void 0:t.total_events)||0).toLocaleString()}),s.jsxs("div",{className:"metric-trend up",children:["📈 ",((t==null?void 0:t.events_per_minute)||0).toFixed(1),"/min"]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("span",{className:"metric-icon",children:"🚨"}),s.jsx("span",{className:"metric-title",children:e("metrics.totalAlerts")})]}),s.jsx("div",{className:"metric-value alert",children:((t==null?void 0:t.total_alerts)||0).toLocaleString()}),s.jsxs("div",{className:"metric-sub",children:[((t==null?void 0:t.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("span",{className:"metric-icon",children:"💾"}),s.jsx("span",{className:"metric-title",children:e("metrics.memory")})]}),s.jsx("div",{className:"metric-value memory",children:((t==null?void 0:t.memory_usage_mb)||0).toFixed(1)}),s.jsx("div",{className:"metric-bar",children:s.jsx("div",{className:"metric-bar-fill",style:{width:`${j}%`}})}),s.jsxs("div",{className:"metric-sub",children:[j,"% of limit"]})]}),s.jsxs("div",{className:"metric-card",children:[s.jsxs("div",{className:"metric-header",children:[s.jsx("span",{className:"metric-icon",children:"⚡"}),s.jsx("span",{className:"metric-title",children:e("systemInfo.uptime")})]}),s.jsx("div",{className:"metric-value uptime",children:b((t==null?void 0:t.uptime_seconds)||0)}),s.jsxs("div",{className:"metric-sub",children:[(t==null?void 0:t.uptime_seconds)||0,"s total"]})]})]}),s.jsx("div",{className:"chart-section",children:s.jsxs("div",{className:"chart-card",children:[s.jsxs("div",{className:"chart-header",children:[s.jsx("h3",{children:"Event Throughput"}),s.jsx("div",{className:"chart-legend",children:s.jsxs("span",{className:"legend-item",children:[s.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),s.jsx("div",{className:"chart-container",children:s.jsx("canvas",{ref:x,width:800,height:200})})]})}),s.jsxs("div",{className:"prometheus-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("metrics.prometheusFormat")}),s.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),s.jsx("pre",{className:"prometheus-code",children:y()})]}),s.jsx("style",{children:`
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
winalog_events_total ${(t==null?void 0:t.total_events)||0}

# HELP winalog_alerts_total Total number of alerts
# TYPE winalog_alerts_total counter
winalog_alerts_total ${(t==null?void 0:t.total_alerts)||0}

# HELP winalog_events_per_minute Event ingestion rate
# TYPE winalog_events_per_minute gauge
winalog_events_per_minute ${(t==null?void 0:t.events_per_minute)||0}

# HELP winalog_alerts_per_hour Alert generation rate
# TYPE winalog_alerts_per_hour gauge
winalog_alerts_per_hour ${(t==null?void 0:t.alerts_per_hour)||0}

# HELP winalog_uptime_seconds Application uptime in seconds
# TYPE winalog_uptime_seconds counter
winalog_uptime_seconds ${(t==null?void 0:t.uptime_seconds)||0}

# HELP winalog_cpu_count Number of CPUs
# TYPE winalog_cpu_count gauge
winalog_cpu_count ${(t==null?void 0:t.cpu_count)||0}

# HELP winalog_memory_bytes Process memory usage in bytes
# TYPE winalog_memory_bytes gauge
winalog_memory_bytes ${(((t==null?void 0:t.memory_usage_mb)||0)*1024*1024).toFixed(0)}

# HELP go_info Go version info
# TYPE go_info gauge
go_info{version="${(t==null?void 0:t.go_version)||"unknown"}"} 1`}}pa.register(io,ro,Kr,Qs,Mx,Ox,Ax,Dx);function O_(){const{t:e}=nt(),[t,n]=E.useState([]),[r,l]=E.useState(null),[o,c]=E.useState(!0),[u,h]=E.useState(null),[p,m]=E.useState(null),[x,N]=E.useState({}),[w,b]=E.useState(!1),[j,y]=E.useState(!1),[C,D]=E.useState([]),[T,W]=E.useState(!1),[_,H]=E.useState(null),[M,R]=E.useState(!1);E.useEffect(()=>{L()},[]);const A=async()=>{try{W(!0);const ee=await Oi.listDetectors();D(ee.data.detectors||[])}catch(ee){console.error("Failed to fetch detectors:",ee)}finally{W(!1)}},K=ee=>{D(C.map(de=>de.name===ee?{...de,enabled:!de.enabled}:de))},V=async()=>{try{await Oi.updateDetectors(C.map(ee=>({name:ee.name,enabled:ee.enabled}))),b(!1)}catch(ee){console.error("Failed to save detector config:",ee),alert("Failed to save configuration")}},F=()=>{A(),b(!0)},U=async ee=>{R(!0);try{if(ee){const pe=(await Oi.getRule(ee)).data.detector;H({...pe,suspicious_indicators:pe.patterns||[],whitelist:pe.whitelist||[]})}else{const pe=(await Oi.listRules()).data.rules[0];H({...pe,suspicious_indicators:pe.patterns||[],whitelist:pe.whitelist||[]})}y(!0)}catch(de){console.error("Failed to fetch rule details:",de)}finally{R(!1)}},re=async()=>{if(_)try{await Oi.updateRule({name:_.name,enabled:_.enabled,suspicious_indicators:_.suspicious_indicators,whitelist:_.whitelist}),y(!1),H(null)}catch(ee){console.error("Failed to save rule:",ee),alert("Failed to save rule configuration")}},J=(ee,de)=>{if(!_)return;const pe=[..._.suspicious_indicators];pe[ee]=de,H({..._,suspicious_indicators:pe})},k=()=>{_&&H({..._,suspicious_indicators:[..._.suspicious_indicators,""]})},z=ee=>{if(!_)return;const de=_.suspicious_indicators.filter((pe,O)=>O!==ee);H({..._,suspicious_indicators:de})},$=(ee,de)=>{if(!_)return;const pe=[..._.whitelist];pe[ee]=de,H({..._,whitelist:pe})},te=()=>{_&&H({..._,whitelist:[..._.whitelist,""]})},se=ee=>{if(!_)return;const de=_.whitelist.filter((pe,O)=>O!==ee);H({..._,whitelist:de})},L=async()=>{try{c(!0);const ee=new URLSearchParams;x.category&&ee.append("category",x.category),x.technique&&ee.append("technique",x.technique);const pe=(await Oi.detect(ee.toString()?`?${ee.toString()}`:"")).data;n(pe.detections||[]),l(Z(pe.detections||[])),h(null)}catch(ee){h(ee instanceof Error?ee.message:"Unknown error")}finally{c(!1)}},Z=ee=>{const de={total_detections:ee.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return ee.forEach(pe=>{var ke;const O=((ke=pe.severity)==null?void 0:ke.toLowerCase())||"info";O in de.by_severity&&de.by_severity[O]++,de.by_category[pe.category]=(de.by_category[pe.category]||0)+1,de.by_technique[pe.technique]=(de.by_technique[pe.technique]||0)+1}),de},ue=t.filter(ee=>{var de;return!(x.severity&&((de=ee.severity)==null?void 0:de.toLowerCase())!==x.severity||x.category&&ee.category!==x.category||x.technique&&ee.technique!==x.technique)}),fe={labels:Object.keys((r==null?void 0:r.by_severity)||{}),datasets:[{label:e("persistence.bySeverity"),data:Object.values((r==null?void 0:r.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},we={labels:Object.keys((r==null?void 0:r.by_category)||{}),datasets:[{label:e("persistence.byCategory"),data:Object.values((r==null?void 0:r.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return o?s.jsx("div",{className:"persistence-page",children:s.jsx("div",{className:"loading",children:e("common.loading")})}):u?s.jsxs("div",{className:"persistence-page",children:[s.jsxs("div",{className:"error",children:[e("common.error"),": ",u]}),s.jsx("button",{onClick:L,className:"btn btn-primary",children:e("common.confirm")})]}):s.jsxs("div",{className:"persistence-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h1",{children:e("persistence.title")}),s.jsx("button",{onClick:L,className:"btn btn-primary",children:e("persistence.rescan")}),s.jsx("button",{onClick:F,className:"btn btn-secondary",children:e("persistence.detectorConfig")||"Detector Config"})]}),w&&s.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:s.jsxs("div",{className:"modal-content detector-config-modal",onClick:ee=>ee.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:e("persistence.detectorConfig")||"Detector Configuration"}),s.jsx("button",{className:"close-btn",onClick:()=>b(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsx("p",{className:"config-description",children:e("persistence.detectorConfigDesc")||"Enable or disable individual detectors. Changes will take effect on next scan."}),T?s.jsx("div",{className:"loading",children:e("common.loading")}):s.jsx("div",{className:"detectors-list",children:C.map(ee=>s.jsxs("div",{className:"detector-item",children:[s.jsxs("label",{className:"detector-checkbox",children:[s.jsx("input",{type:"checkbox",checked:ee.enabled,onChange:()=>K(ee.name)}),s.jsx("span",{className:"detector-name",children:ee.name.replace(/_/g," ")})]}),s.jsx("span",{className:"detector-technique",children:ee.technique}),s.jsx("span",{className:"detector-description",children:ee.description}),s.jsx("button",{className:"edit-rule-btn",onClick:de=>{de.stopPropagation(),b(!1),U(ee.name)},children:e("persistence.editRule")||"Edit Rule"})]},ee.name))}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{onClick:V,className:"btn btn-primary",children:e("common.save")||"Save"}),s.jsx("button",{onClick:()=>b(!1),className:"btn btn-secondary",children:e("common.cancel")||"Cancel"})]})]})]})}),r&&s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card stat-total",children:[s.jsx("div",{className:"stat-value",children:r.total_detections}),s.jsx("div",{className:"stat-label",children:e("persistence.total")})]}),s.jsxs("div",{className:"stat-card stat-critical",children:[s.jsx("div",{className:"stat-value",children:r.by_severity.critical}),s.jsx("div",{className:"stat-label",children:e("persistence.critical")})]}),s.jsxs("div",{className:"stat-card stat-high",children:[s.jsx("div",{className:"stat-value",children:r.by_severity.high}),s.jsx("div",{className:"stat-label",children:e("persistence.high")})]}),s.jsxs("div",{className:"stat-card stat-medium",children:[s.jsx("div",{className:"stat-value",children:r.by_severity.medium}),s.jsx("div",{className:"stat-label",children:e("persistence.medium")})]}),s.jsxs("div",{className:"stat-card stat-low",children:[s.jsx("div",{className:"stat-value",children:r.by_severity.low}),s.jsx("div",{className:"stat-label",children:e("persistence.low")})]})]}),s.jsxs("div",{className:"charts-grid",children:[s.jsxs("div",{className:"chart-card",children:[s.jsx("h3",{children:e("persistence.bySeverity")}),s.jsx("div",{className:"chart-container",children:s.jsx(Vd,{data:fe,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),s.jsxs("div",{className:"chart-card",children:[s.jsx("h3",{children:e("persistence.byCategory")}),s.jsx("div",{className:"chart-container",children:s.jsx(Vd,{data:we,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),s.jsxs("div",{className:"filters",children:[s.jsxs("select",{value:x.severity||"",onChange:ee=>N({...x,severity:ee.target.value||void 0}),children:[s.jsx("option",{value:"",children:e("persistence.allSeverities")}),s.jsx("option",{value:"critical",children:e("persistence.critical")}),s.jsx("option",{value:"high",children:e("persistence.high")}),s.jsx("option",{value:"medium",children:e("persistence.medium")}),s.jsx("option",{value:"low",children:e("persistence.low")})]}),s.jsxs("select",{value:x.category||"",onChange:ee=>N({...x,category:ee.target.value||void 0}),children:[s.jsx("option",{value:"",children:e("persistence.allCategories")}),s.jsx("option",{value:"Registry",children:"注册表"}),s.jsx("option",{value:"ScheduledTask",children:"计划任务"}),s.jsx("option",{value:"Service",children:"服务"}),s.jsx("option",{value:"WMI",children:"WMI"}),s.jsx("option",{value:"COM",children:"COM"}),s.jsx("option",{value:"BITS",children:"BITS"}),s.jsx("option",{value:"Accessibility",children:"辅助功能"})]}),s.jsx("button",{onClick:L,className:"btn btn-secondary",children:e("persistence.rescan")})]}),s.jsx("div",{className:"detections-table-container",children:s.jsxs("table",{className:"detections-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("persistence.severity")}),s.jsx("th",{children:e("persistence.technique")}),s.jsx("th",{children:e("persistence.category")}),s.jsx("th",{children:e("persistence.title")}),s.jsx("th",{children:e("persistence.evidence")}),s.jsx("th",{children:e("persistence.falsePositiveRisk")})]})}),s.jsx("tbody",{children:ue.map(ee=>{var de,pe,O,ke;return s.jsxs("tr",{onClick:()=>m(ee),className:"detection-row",children:[s.jsx("td",{children:s.jsx("span",{className:`severity-badge severity-${(de=ee.severity)==null?void 0:de.toLowerCase()}`,children:e(`persistence.${(pe=ee.severity)==null?void 0:pe.toLowerCase()}`)})}),s.jsx("td",{children:s.jsx("span",{className:"technique-tag",children:ee.technique})}),s.jsx("td",{children:ee.category}),s.jsx("td",{children:ee.title}),s.jsx("td",{className:"evidence-cell",children:((O=ee.evidence)==null?void 0:O.key)&&s.jsx("div",{className:"evidence-key",children:ee.evidence.key})}),s.jsx("td",{children:e(`persistence.${(ke=ee.false_positive_risk)==null?void 0:ke.toLowerCase()}Risk`)||ee.false_positive_risk})]},ee.id)})})]})}),p&&s.jsx("div",{className:"modal-overlay",onClick:()=>m(null),children:s.jsxs("div",{className:"modal-content",onClick:ee=>ee.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:p.title}),s.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:e("persistence.basicInfo")}),s.jsxs("p",{children:[s.jsxs("strong",{children:[e("persistence.severity"),":"]})," ",p.severity]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[e("persistence.technique"),":"]})," ",p.technique]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[e("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),p.explanation&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:e("persistence.explanation")||"规则解读"}),s.jsx("p",{children:p.explanation})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:e("persistence.description")}),s.jsx("p",{children:p.description})]}),p.recommendation&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:e("persistence.recommendation")||"处置建议"}),s.jsx("p",{style:{whiteSpace:"pre-wrap"},children:p.recommendation})]}),p.real_case&&p.real_case!=="暂无真实案例"&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:e("persistence.realCase")||"真实案例"}),s.jsx("p",{children:p.real_case})]})]})]})}),j&&_&&s.jsx("div",{className:"modal-overlay",onClick:()=>y(!1),children:s.jsxs("div",{className:"modal-content rule-editor-modal",onClick:ee=>ee.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:e("persistence.ruleEditor")||"Rule Editor"}),s.jsx("button",{className:"close-btn",onClick:()=>y(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[M?s.jsx("div",{className:"loading",children:e("common.loading")}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"rule-editor-header",children:[s.jsxs("div",{className:"rule-info",children:[s.jsx("h3",{children:_.name.replace(/_/g," ")}),s.jsx("p",{children:_.description}),s.jsx("span",{className:"technique-tag",children:_.technique})]}),s.jsxs("label",{className:"rule-enabled-toggle",children:[s.jsx("input",{type:"checkbox",checked:_.enabled,onChange:ee=>H({..._,enabled:ee.target.checked})}),s.jsx("span",{children:_.enabled?e("persistence.enabled")||"Enabled":e("persistence.disabled")||"Disabled"})]})]}),_.registry_paths&&_.registry_paths.length>0&&s.jsxs("div",{className:"rule-section",children:[s.jsx("h4",{children:e("persistence.registryPaths")||"Registry Paths"}),s.jsx("div",{className:"paths-list",children:_.registry_paths.map((ee,de)=>s.jsx("div",{className:"path-item",children:ee},de))})]}),s.jsxs("div",{className:"rule-section",children:[s.jsx("h4",{children:e("persistence.suspiciousIndicators")||"Suspicious Indicators"}),s.jsx("p",{className:"section-desc",children:e("persistence.indicatorDesc")||"Keywords that trigger detection when found in the target"}),s.jsxs("div",{className:"indicators-list",children:[_.suspicious_indicators.map((ee,de)=>s.jsxs("div",{className:"indicator-item",children:[s.jsx("input",{type:"text",value:ee,onChange:pe=>J(de,pe.target.value),placeholder:"Enter indicator..."}),s.jsx("button",{className:"remove-btn",onClick:()=>z(de),children:"×"})]},de)),s.jsxs("button",{className:"add-btn",onClick:k,children:["+ ",e("persistence.addIndicator")||"Add Indicator"]})]})]}),s.jsxs("div",{className:"rule-section",children:[s.jsx("h4",{children:e("persistence.whitelistEntries")||"Whitelist Entries"}),s.jsx("p",{className:"section-desc",children:e("persistence.whitelistDesc")||"Entries that will not trigger detection"}),s.jsxs("div",{className:"whitelist-list",children:[_.whitelist.map((ee,de)=>s.jsxs("div",{className:"whitelist-item",children:[s.jsx("input",{type:"text",value:ee,onChange:pe=>$(de,pe.target.value),placeholder:"Enter whitelist entry..."}),s.jsx("button",{className:"remove-btn",onClick:()=>se(de),children:"×"})]},de)),s.jsxs("button",{className:"add-btn",onClick:te,children:["+ ",e("persistence.addWhitelist")||"Add Whitelist Entry"]})]})]})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{onClick:()=>y(!1),className:"btn btn-secondary",children:e("common.cancel")||"Cancel"}),s.jsx("button",{onClick:re,className:"btn btn-primary",children:e("common.save")||"Save"})]})]})]})})]})}const ms={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍","domain-controller":"🏢"},I_={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},z_=(e,t="zh")=>{const n=t.startsWith("zh")?"zh":"en";return I_[n][e]||e},F_=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"},{id:"domain-services",name:"Domain Services"}];function B_(){var re,J;const{t:e,locale:t}=nt(),n=Ks(),[r,l]=E.useState(!1),[o,c]=E.useState(null),[u,h]=E.useState("brute-force"),[p,m]=E.useState(24),[x,N]=E.useState(""),[w,b]=E.useState(!1),[j,y]=E.useState(null),[C,D]=E.useState(!1),T=[{id:"brute_force",name:e("analyze.bruteForce"),desc:e("analyze.bruteForceDesc"),icon:ms["brute-force"],category:"authentication",recommended:!0},{id:"login",name:e("analyze.login"),desc:e("analyze.loginDesc"),icon:ms.login,category:"authentication",recommended:!1},{id:"kerberos",name:e("analyze.kerberos"),desc:e("analyze.kerberosDesc"),icon:ms.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:e("analyze.powershell"),desc:e("analyze.powershellDesc"),icon:ms.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:e("analyze.lateralMovement"),desc:e("analyze.lateralMovementDesc"),icon:ms["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:e("analyze.dataExfil"),desc:e("analyze.dataExfilDesc"),icon:ms["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:e("analyze.persistence"),desc:e("analyze.persistenceDesc"),icon:ms.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:e("analyze.privilegeEscalation"),desc:e("analyze.privilegeEscalationDesc"),icon:ms["privilege-escalation"],category:"privilege-escalation",recommended:!1},{id:"domain_controller",name:e("analyze.domainController"),desc:e("analyze.domainControllerDesc"),icon:ms["domain-controller"],category:"domain-services",recommended:!1}],W=async()=>{var k,z;l(!0),N("");try{const $=u.replace(/_/g,"-"),te=await hd.run($,{hours:p});c(te.data)}catch($){N(((z=(k=$.response)==null?void 0:k.data)==null?void 0:z.error)||"Failed to run analyzer")}finally{l(!1)}},_=async k=>{D(!0);try{const z=await hd.getRule(k);y(z.data.rule),b(!0)}catch(z){console.error("Failed to fetch rule:",z)}finally{D(!1)}},H=async()=>{if(j)try{await hd.updateRule({name:j.name,enabled:j.enabled,thresholds:j.thresholds,patterns:j.patterns,whitelist:j.whitelist}),b(!1),y(null)}catch(k){console.error("Failed to save rule:",k),alert("Failed to save rule configuration")}},M=(k,z)=>{if(!j)return;const $=[...j.patterns];$[k]=z,y({...j,patterns:$})},R=()=>{j&&y({...j,patterns:[...j.patterns,""]})},A=k=>{if(!j)return;const z=j.patterns.filter(($,te)=>te!==k);y({...j,patterns:z})},K=(k,z)=>{if(!j)return;const $=[...j.whitelist];$[k]=z,y({...j,whitelist:$})},V=()=>{j&&y({...j,whitelist:[...j.whitelist,""]})},F=k=>{if(!j)return;const z=j.whitelist.filter(($,te)=>te!==k);y({...j,whitelist:z})},U=T.reduce((k,z)=>(k[z.category]||(k[z.category]=[]),k[z.category].push(z),k),{});return s.jsxs("div",{className:"analyze-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("analyze.title")}),s.jsx("p",{className:"page-desc",children:e("analyze.pageDesc")})]}),s.jsxs("div",{className:"analyze-grid",children:[s.jsxs("div",{className:"analyzer-section",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("analyze.selectAnalyzer")})}),Object.entries(U).map(([k,z])=>{var $;return s.jsxs("div",{className:"analyzer-category",children:[s.jsx("div",{className:"category-header",children:(($=F_.find(te=>te.id===k))==null?void 0:$.name)||k}),s.jsx("div",{className:"analyzer-list",children:z.map(te=>s.jsxs("div",{className:`analyzer-card ${u===te.id?"selected":""}`,onClick:()=>h(te.id),children:[s.jsx("div",{className:"analyzer-icon",children:te.icon}),s.jsxs("div",{className:"analyzer-content",children:[s.jsxs("div",{className:"analyzer-header",children:[s.jsx("span",{className:"analyzer-name",children:te.name}),te.recommended&&s.jsx("span",{className:"recommended-badge",children:e("analyze.recommended")})]}),s.jsx("p",{className:"analyzer-desc",children:te.desc})]}),s.jsx("div",{className:"select-indicator",children:u===te.id&&"✓"})]},te.id))})]},k)})]}),s.jsxs("div",{className:"config-section",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("analyze.configuration")})}),s.jsxs("div",{className:"config-card",children:[s.jsxs("div",{className:"config-item",children:[s.jsx("label",{children:e("analyze.selectedAnalyzer")}),s.jsxs("div",{className:"selected-analyzer-display",children:[s.jsx("span",{className:"analyzer-icon",children:ms[u]}),s.jsx("span",{children:(re=T.find(k=>k.id===u))==null?void 0:re.name})]})]}),s.jsxs("div",{className:"config-item",children:[s.jsx("label",{children:e("analyze.timeWindow")}),s.jsxs("div",{className:"time-selector",children:[s.jsx("button",{className:p===1?"active":"",onClick:()=>m(1),children:"1h"}),s.jsx("button",{className:p===6?"active":"",onClick:()=>m(6),children:"6h"}),s.jsx("button",{className:p===24?"active":"",onClick:()=>m(24),children:"24h"}),s.jsx("button",{className:p===72?"active":"",onClick:()=>m(72),children:"72h"}),s.jsx("button",{className:p===168?"active":"",onClick:()=>m(168),children:"7d"})]})]}),s.jsx("button",{onClick:W,disabled:r,className:"btn-primary btn-run",children:r?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("analyze.running")]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),e("analyze.runAnalyzer")]})}),s.jsx("button",{onClick:()=>_(u),className:"btn-secondary btn-edit-rule",children:e("analyze.editRule")||"Edit Rule"})]}),x&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:x})]}),s.jsxs("div",{className:"quick-actions",children:[s.jsx("h4",{children:e("analyze.quickActions")}),s.jsxs("div",{className:"quick-buttons",children:[s.jsxs("button",{className:"quick-btn",onClick:()=>n("/timeline"),children:["📊 ",e("analyze.viewTimeline")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>n("/alerts"),children:["🔔 ",e("analyze.viewAlerts")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>n("/persistence"),children:["🎯 ",e("analyze.detectPersistence")]})]})]})]})]}),o&&s.jsxs("div",{className:"results-section",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("analyze.results")})}),s.jsxs("div",{className:"results-grid",children:[s.jsxs("div",{className:"result-summary-card",children:[s.jsxs("div",{className:"result-header",children:[s.jsx("span",{className:"result-icon",children:ms[o.type]}),s.jsx("span",{className:"result-type",children:(J=T.find(k=>k.id===o.type))==null?void 0:J.name})]}),s.jsxs("div",{className:"result-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:e("analyze.severity")}),s.jsx("span",{className:`severity-badge severity-${o.severity}`,children:o.severity.toUpperCase()})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:e("analyze.score")}),s.jsx("span",{className:"score-value",children:o.score.toFixed(1)})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:e("analyze.findings")}),s.jsx("span",{className:"findings-count",children:o.findings.length})]})]}),s.jsx("p",{className:"result-summary",children:o.summary})]}),o.findings.length>0&&s.jsxs("div",{className:"findings-card",children:[s.jsx("h4",{children:e("analyze.findingsList")}),s.jsx("div",{className:"findings-list",children:o.findings.map((k,z)=>s.jsxs("div",{className:"finding-item",children:[s.jsxs("div",{className:"finding-header",children:[s.jsx("span",{className:`severity-indicator severity-${k.severity}`}),s.jsx("span",{className:"finding-desc",children:z_(k.description,t)})]}),s.jsxs("div",{className:"finding-meta",children:[k.rule_name&&s.jsx("span",{className:"rule-name",children:k.rule_name}),s.jsxs("span",{className:"finding-score",children:["Score: ",k.score.toFixed(1)]}),k.evidence&&k.evidence.length>0&&s.jsxs("span",{className:"evidence-count",children:[k.evidence.length," events"]})]}),k.evidence&&k.evidence.length>0&&s.jsxs("div",{className:"evidence-list",children:[s.jsx("div",{className:"evidence-header",children:e("analyze.relatedEvents")}),k.evidence.slice(0,5).map(($,te)=>{var se;return s.jsxs("div",{className:"evidence-item",children:[s.jsx("span",{className:"evidence-time",children:new Date($.timestamp).toLocaleString()}),s.jsx("span",{className:"evidence-user",children:$.user||"-"}),s.jsx("span",{className:"evidence-computer",children:$.computer||"-"}),s.jsxs("span",{className:"evidence-msg",title:$.message,children:[(se=$.message)==null?void 0:se.substring(0,80),$.message&&$.message.length>80?"...":""]})]},te)}),k.evidence.length>5&&s.jsxs("div",{className:"evidence-more",children:["+",k.evidence.length-5," more events"]})]})]},z))})]})]})]}),s.jsxs("div",{className:"analyzer-info",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("analyze.aboutAnalyzers")})}),s.jsx("div",{className:"info-grid",children:T.slice(0,4).map(k=>s.jsxs("div",{className:"info-card",children:[s.jsx("div",{className:"info-icon",children:k.icon}),s.jsxs("div",{className:"info-content",children:[s.jsx("h4",{children:k.name}),s.jsx("p",{children:k.desc})]})]},k.id))})]}),w&&j&&s.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:s.jsxs("div",{className:"modal-content rule-editor-modal",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"rule-editor-header",children:[s.jsxs("div",{className:"rule-info",children:[s.jsx("h3",{children:j.name.replace(/_/g," ")}),s.jsx("p",{children:j.description}),s.jsx("span",{className:"technique-tag",children:j.technique})]}),s.jsxs("label",{className:"rule-enabled-toggle",children:[s.jsx("input",{type:"checkbox",checked:j.enabled,onChange:k=>y({...j,enabled:k.target.checked})}),s.jsx("span",{className:j.enabled?"enabled":"disabled",children:j.enabled?e("persistence.enabled")||"Enabled":e("persistence.disabled")||"Disabled"})]})]}),s.jsxs("div",{className:"modal-body",children:[C?s.jsx("div",{className:"loading",children:e("common.loading")}):s.jsxs(s.Fragment,{children:[j.thresholds&&Object.keys(j.thresholds).length>0&&s.jsxs("div",{className:"rule-section",children:[s.jsxs("h4",{children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 20V10M18 20V4M6 20v-4"})}),e("analyze.thresholds")||"Thresholds"]}),s.jsx("div",{className:"thresholds-list",children:Object.entries(j.thresholds).map(([k,z])=>s.jsxs("div",{className:"threshold-item",children:[s.jsx("span",{className:"threshold-key",children:k.replace(/_/g," ")}),s.jsx("input",{type:"number",value:z,onChange:$=>y({...j,thresholds:{...j.thresholds,[k]:parseInt($.target.value)||0}})})]},k))})]}),s.jsxs("div",{className:"rule-section",children:[s.jsxs("h4",{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"M21 21l-4.35-4.35"})]}),e("analyze.patterns")||"Detection Patterns"]}),s.jsx("p",{className:"section-desc",children:e("analyze.patternsDesc")||"Keywords or patterns that trigger detection"}),s.jsxs("div",{className:"patterns-list",children:[j.patterns.map((k,z)=>s.jsxs("div",{className:"pattern-item",children:[s.jsx("input",{type:"text",value:k,onChange:$=>M(z,$.target.value),placeholder:"Enter pattern..."}),s.jsx("button",{className:"remove-btn",onClick:()=>A(z),children:"×"})]},z)),s.jsxs("button",{className:"add-btn",onClick:R,children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 5v14M5 12h14"})}),e("analyze.addPattern")||"Add Pattern"]})]})]}),s.jsxs("div",{className:"rule-section",children:[s.jsxs("h4",{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M9 12l2 2 4-4"}),s.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"})]}),e("analyze.whitelist")||"Whitelist"]}),s.jsx("p",{className:"section-desc",children:e("analyze.whitelistDesc")||"Entries that will not trigger detection"}),s.jsxs("div",{className:"whitelist-list",children:[j.whitelist.map((k,z)=>s.jsxs("div",{className:"whitelist-item",children:[s.jsx("input",{type:"text",value:k,onChange:$=>K(z,$.target.value),placeholder:"Enter whitelist entry..."}),s.jsx("button",{className:"remove-btn",onClick:()=>F(z),children:"×"})]},z)),s.jsxs("button",{className:"add-btn",onClick:V,children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M12 5v14M5 12h14"})}),e("analyze.addWhitelist")||"Add Whitelist Entry"]})]})]})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsxs("button",{onClick:()=>b(!1),className:"btn btn-secondary",children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M6 18L18 6M6 6l12 12"})}),e("common.cancel")||"Cancel"]}),s.jsxs("button",{onClick:H,className:"btn btn-primary",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"}),s.jsx("polyline",{points:"17,21 17,13 7,13 7,21"}),s.jsx("polyline",{points:"7,3 7,8 15,8"})]}),e("common.save")||"Save"]})]})]})]})})]})}const Jm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},$_={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function U_(){const{t:e}=nt(),t=Ks(),[n,r]=E.useState(!1),[l,o]=E.useState([]),[c,u]=E.useState("24h"),[h,p]=E.useState(""),[m,x]=E.useState(!1),[N,w]=E.useState(null),b=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],j=async()=>{var M,R;r(!0),p("");try{const A=await Ij.analyze({time_window:c});o(A.data.results||[]),x(!0)}catch(A){p(((R=(M=A.response)==null?void 0:M.data)==null?void 0:R.error)||"Failed to run correlation analysis")}finally{r(!1)}},y=M=>Jm[M.toLowerCase()]||Jm.info,C=M=>({critical:e("severity.critical")||"Critical",high:e("severity.high")||"High",medium:e("severity.medium")||"Medium",low:e("severity.low")||"Low",info:e("severity.info")||"Info"})[M.toLowerCase()]||M,D=M=>{for(const[R,A]of Object.entries($_))if(M.includes(R))return A;return"🎯"},T=M=>{try{return new Date(M).toLocaleString()}catch{return M}},W=(M,R)=>{try{const A=new Date(M).getTime(),V=new Date(R).getTime()-A,F=Math.floor(V/1e3),U=Math.floor(F/60),re=Math.floor(U/60);return re>0?`${re}h ${U%60}m`:U>0?`${U}m ${F%60}s`:`${F}s`}catch{return"N/A"}},_=E.useMemo(()=>{if(l.length===0)return null;const M={critical:0,high:0,medium:0,low:0};return l.forEach(R=>{const A=R.severity.toLowerCase();M.hasOwnProperty(A)&&M[A]++}),{totalEvents:l.reduce((R,A)=>R+A.event_count,0),severityCounts:M,avgEventsPerRule:Math.round(l.reduce((R,A)=>R+A.event_count,0)/l.length)}},[l]),H=E.useMemo(()=>{if(l.length===0)return[];const M=Math.max(...l.map(R=>R.event_count));return l.map(R=>{const A=Math.round(R.event_count/M*20);return{...R,bar:"█".repeat(A)+"░".repeat(20-A)}})},[l]);return s.jsxs("div",{className:"correlation-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("correlation.title")}),s.jsx("p",{className:"page-desc",children:e("correlation.pageDesc")})]}),s.jsxs("div",{className:"correlation-toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx("label",{children:e("correlation.timeWindow")}),s.jsx("div",{className:"time-selector",children:b.map(M=>s.jsx("button",{className:c===M.value?"active":"",onClick:()=>u(M.value),children:M.label},M.value))})]}),s.jsx("button",{onClick:j,disabled:n,className:"btn-primary",children:n?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("correlation.analyzing")]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"M21 21l-4.35-4.35"})]}),e("correlation.runAnalysis")]})})]}),h&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:h})]}),m&&!n&&l.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"🔍"}),s.jsx("h3",{children:e("correlation.noResults")}),s.jsx("p",{children:e("correlation.noResultsDesc")})]}),_&&s.jsxs("div",{className:"correlation-stats",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"📊"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:l.length}),s.jsx("span",{className:"stat-label",children:e("correlation.rulesTriggered")})]})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-icon",children:"📝"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:_.totalEvents.toLocaleString()}),s.jsx("span",{className:"stat-label",children:e("correlation.totalEvents")})]})]}),s.jsxs("div",{className:"stat-card critical",children:[s.jsx("span",{className:"stat-icon",children:"🔴"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:_.severityCounts.critical}),s.jsx("span",{className:"stat-label",children:e("severity.critical")})]})]}),s.jsxs("div",{className:"stat-card high",children:[s.jsx("span",{className:"stat-icon",children:"🟠"}),s.jsxs("div",{className:"stat-content",children:[s.jsx("span",{className:"stat-value",children:_.severityCounts.high}),s.jsx("span",{className:"stat-label",children:e("severity.high")})]})]})]}),H.length>0&&s.jsxs("div",{className:"attack-chain-visual",children:[s.jsx("h3",{children:e("correlation.attackChainTimeline")}),s.jsx("div",{className:"chain-bars",children:H.map((M,R)=>s.jsxs("div",{className:"chain-bar-item",children:[s.jsxs("div",{className:"chain-bar-header",children:[s.jsx("span",{className:"chain-icon",children:D(M.description)}),s.jsx("span",{className:"chain-name",children:M.rule_name}),s.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(M.severity)}})]}),s.jsx("div",{className:"chain-bar-track",children:s.jsx("span",{className:"chain-bar-fill",style:{width:`${M.event_count/_.totalEvents*100}%`,backgroundColor:y(M.severity)}})}),s.jsxs("div",{className:"chain-bar-meta",children:[s.jsxs("span",{className:"chain-events",children:[M.event_count," events"]}),s.jsx("span",{className:"chain-duration",children:W(M.start_time,M.end_time)})]})]},R))})]}),l.length>0&&s.jsxs("div",{className:"correlation-results",children:[s.jsxs("div",{className:"results-header",children:[s.jsx("h3",{children:e("correlation.results")}),s.jsxs("span",{className:"results-count",children:[l.length," ",e("correlation.rulesTriggered")]})]}),s.jsx("div",{className:"results-grid",children:l.map((M,R)=>s.jsxs("div",{className:`correlation-card ${N===R?"expanded":""}`,onClick:()=>w(N===R?null:R),children:[s.jsxs("div",{className:"card-header",children:[s.jsxs("div",{className:"rule-info",children:[s.jsx("span",{className:"severity-badge",style:{backgroundColor:y(M.severity)},children:C(M.severity)}),s.jsx("h4",{children:M.rule_name})]}),s.jsxs("div",{className:"event-count",children:[s.jsx("span",{className:"count-value",children:M.event_count}),s.jsx("span",{className:"count-label",children:e("correlation.events")})]})]}),s.jsx("div",{className:"card-icon",children:D(M.description)}),s.jsx("p",{className:"rule-description",children:M.description}),s.jsxs("div",{className:"card-footer",children:[s.jsxs("div",{className:"time-info",children:[s.jsxs("div",{className:"time-range",children:[s.jsxs("span",{className:"time-label",children:[e("correlation.startTime"),":"]}),s.jsx("span",{className:"time-value",children:T(M.start_time)})]}),s.jsxs("div",{className:"time-range",children:[s.jsxs("span",{className:"time-label",children:[e("correlation.endTime"),":"]}),s.jsx("span",{className:"time-value",children:T(M.end_time)})]})]}),s.jsxs("div",{className:"duration-badge",children:["⏱️ ",W(M.start_time,M.end_time)]})]}),N===R&&s.jsxs("div",{className:"card-expanded",children:[s.jsxs("div",{className:"expanded-section",children:[s.jsx("h5",{children:e("correlation.attackPattern")}),s.jsxs("div",{className:"pattern-visual",children:[s.jsx("span",{className:"pattern-icon",children:"🎯"}),s.jsx("span",{className:"pattern-text",children:M.rule_name}),s.jsx("span",{className:"pattern-arrow",children:"→"}),s.jsxs("span",{className:"pattern-target",children:[C(M.severity)," Risk"]})]})]}),s.jsxs("div",{className:"expanded-actions",children:[s.jsxs("button",{className:"action-btn",onClick:A=>{A.stopPropagation(),t("/timeline")},children:["📊 ",e("correlation.viewTimeline")]}),s.jsxs("button",{className:"action-btn",onClick:A=>{A.stopPropagation(),t("/alerts")},children:["🔔 ",e("correlation.viewAlerts")]})]})]})]},R))})]}),s.jsxs("div",{className:"correlation-info",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("correlation.aboutCorrelation")})}),s.jsx("div",{className:"info-content",children:s.jsx("p",{children:e("correlation.aboutDesc")})})]}),s.jsxs("div",{className:"quick-actions",children:[s.jsx("h4",{children:e("correlation.quickActions")}),s.jsxs("div",{className:"quick-buttons",children:[s.jsxs("button",{className:"quick-btn",onClick:()=>t("/timeline"),children:["📊 ",e("correlation.viewTimeline")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/alerts"),children:["🔔 ",e("correlation.viewAlerts")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/analyze"),children:["⚡ ",e("correlation.runAnalyzers")]})]})]})]})}const Zm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function W_(){const{t:e}=nt(),t=Ks(),[n,r]=E.useState(!1),[l,o]=E.useState(null),[c,u]=E.useState(""),[h,p]=E.useState("overview"),m=async()=>{var y,C;r(!0),u("");try{const D=await zj.analyze();o(D.data)}catch(D){u(((C=(y=D.response)==null?void 0:y.data)==null?void 0:C.error)||"Failed to run multi-machine analysis")}finally{r(!1)}},x=y=>Zm[y.toLowerCase()]||Zm.info,N=y=>({critical:e("severity.critical")||"Critical",high:e("severity.high")||"High",medium:e("severity.medium")||"Medium",low:e("severity.low")||"Low"})[y.toLowerCase()]||y,w=E.useMemo(()=>{if(!l||l.machines.length===0)return{nodes:[],edges:[]};const y=l.machines.map(D=>({id:D.id,name:D.name,ip:D.ip,role:D.role,suspicious:l.lateral_movement.some(T=>T.source_machine===D.name||T.target_machine===D.name)})),C=[];return l.lateral_movement.forEach(D=>{const T=y.find(_=>_.name===D.source_machine),W=y.find(_=>_.name===D.target_machine);T&&W&&C.push({from:T.id,to:W.id,user:D.user,severity:D.severity})}),{nodes:y,edges:C}},[l]),b=y=>{try{return new Date(y).toLocaleString()}catch{return y}},j=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return s.jsxs("div",{className:"multi-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("multi.title")}),s.jsx("p",{className:"page-desc",children:e("multi.pageDesc")})]}),s.jsx("div",{className:"multi-toolbar",children:s.jsx("button",{onClick:m,disabled:n,className:"btn-primary",children:n?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("multi.analyzing")]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M12 6v6l4 2"})]}),e("multi.runAnalysis")]})})}),c&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:c})]}),l&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"analysis-summary",children:[s.jsxs("div",{className:"summary-card",children:[s.jsx("h4",{children:e("multi.analysisId")}),s.jsx("p",{className:"analysis-id",children:l.analysis_id})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("h4",{children:e("multi.machinesFound")}),s.jsx("p",{className:"summary-value",children:l.machines.length})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("h4",{children:e("multi.suspiciousActivities")}),s.jsx("p",{className:"summary-value",style:{color:l.suspicious_count>0?"#dc2626":"#16a34a"},children:l.suspicious_count})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("h4",{children:e("multi.lateralMovements")}),s.jsx("p",{className:"summary-value",children:l.lateral_movement.length})]})]}),s.jsx("p",{className:"summary-text",children:l.summary}),s.jsxs("div",{className:"tabs",children:[s.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",e("multi.machineOverview")]}),s.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",e("multi.crossMachine")]}),s.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",e("multi.lateralMovement")]})]}),h==="overview"&&s.jsx("div",{className:"tab-content",children:l.machines.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"🖥️"}),s.jsx("h3",{children:e("multi.noMachines")}),s.jsx("p",{children:e("multi.noMachinesDesc")}),s.jsx("div",{className:"empty-hint",children:s.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"machine-graph",children:[s.jsxs("h4",{children:["🏢 ",e("multi.machineRelationship")]}),s.jsxs("div",{className:"graph-container",children:[s.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,C)=>{const D=l.lateral_movement.some(T=>T.source_machine===y.name||T.target_machine===y.name);return s.jsxs("div",{className:`graph-node ${D?"suspicious":""}`,style:{top:`${20+C%3*25}%`,left:`${20+C%4*20}%`},children:[s.jsx("span",{className:"node-icon",children:j(y.role)}),s.jsx("span",{className:"node-name",children:y.name}),s.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),D&&s.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),s.jsxs("div",{className:"graph-legend",children:[s.jsx("span",{className:"legend-item",children:"🖥️ Server"}),s.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),s.jsx("span",{className:"legend-item",children:"💻 Workstation"}),s.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),s.jsx("div",{className:"machines-grid",children:l.machines.map((y,C)=>{const D=l.lateral_movement.some(T=>T.source_machine===y.name||T.target_machine===y.name);return s.jsxs("div",{className:`machine-card ${D?"alert":""}`,children:[s.jsxs("div",{className:"machine-header",children:[s.jsx("span",{className:"machine-icon",children:j(y.role)}),s.jsx("h4",{children:y.name}),D&&s.jsx("span",{className:"alert-badge",children:"⚠️"})]}),s.jsxs("div",{className:"machine-details",children:[s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"IP:"}),s.jsx("span",{className:"value",children:y.ip||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsxs("span",{className:"label",children:[e("multi.domain"),":"]}),s.jsx("span",{className:"value",children:y.domain||"N/A"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsxs("span",{className:"label",children:[e("multi.role"),":"]}),s.jsx("span",{className:"value",children:y.role||"Unknown"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"label",children:"OS:"}),s.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),s.jsxs("div",{className:"detail-row",children:[s.jsxs("span",{className:"label",children:[e("multi.lastSeen"),":"]}),s.jsx("span",{className:"value",children:b(y.last_seen)})]})]}),D&&s.jsx("div",{className:"machine-alert-indicator",children:s.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},C)})})]})}),h==="crossmachine"&&s.jsx("div",{className:"tab-content",children:l.cross_machine_activity.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"✅"}),s.jsx("h3",{children:e("multi.noSuspiciousActivity")}),s.jsx("p",{children:e("multi.noSuspiciousActivityDesc")})]}):s.jsx("div",{className:"activity-list",children:l.cross_machine_activity.map((y,C)=>s.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[s.jsxs("div",{className:"activity-header",children:[s.jsxs("div",{className:"user-info",children:[s.jsx("span",{className:"user-icon",children:"👤"}),s.jsx("span",{className:"user-name",children:y.user})]}),s.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})]}),s.jsxs("div",{className:"activity-body",children:[s.jsxs("p",{className:"activity-desc",children:[e("multi.loggedInto")," ",y.machine_count," ",e("multi.machines"),":"]}),s.jsx("div",{className:"machine-tags",children:y.machines.map((D,T)=>s.jsx("span",{className:"machine-tag",children:D},T))}),s.jsxs("p",{className:"login-count",children:[e("multi.totalLogins"),": ",y.login_count]}),s.jsxs("div",{className:"recommendation",children:[s.jsx("span",{className:"rec-icon",children:"💡"}),s.jsx("span",{children:y.recommendation})]})]})]},C))})}),h==="lateral"&&s.jsx("div",{className:"tab-content",children:l.lateral_movement.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"✅"}),s.jsx("h3",{children:e("multi.noLateralMovement")}),s.jsx("p",{children:e("multi.noLateralMovementDesc")})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"lateral-summary",children:s.jsxs("div",{className:"lateral-stat",children:[s.jsx("span",{className:"stat-icon",children:"🔄"}),s.jsxs("span",{className:"stat-text",children:[l.lateral_movement.length," lateral movements detected"]})]})}),s.jsx("div",{className:"lateral-table",children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("multi.time")}),s.jsx("th",{children:e("multi.source")}),s.jsx("th",{children:e("multi.target")}),s.jsx("th",{children:e("multi.user")}),s.jsx("th",{children:e("multi.event")}),s.jsx("th",{children:e("multi.description")}),s.jsx("th",{children:e("multi.severity")}),s.jsx("th",{children:"MITRE"})]})}),s.jsx("tbody",{children:l.lateral_movement.map((y,C)=>s.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[s.jsx("td",{className:"time-cell",children:b(y.timestamp)}),s.jsx("td",{className:"source-cell",children:s.jsx("span",{className:"machine-badge source",children:y.source_machine})}),s.jsx("td",{className:"target-cell",children:s.jsx("span",{className:"machine-badge target",children:y.target_machine})}),s.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),s.jsx("td",{className:"event-cell",children:y.event_id}),s.jsx("td",{className:"desc-cell",children:y.description}),s.jsx("td",{children:s.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})}),s.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((D,T)=>s.jsx("span",{className:"mitre-tag",children:D},T))})]},C))})]})})]})})]}),s.jsxs("div",{className:"quick-actions",children:[s.jsx("h4",{children:e("multi.quickActions")}),s.jsxs("div",{className:"quick-buttons",children:[s.jsxs("button",{className:"quick-btn",onClick:()=>t("/correlation"),children:["🔗 ",e("multi.viewCorrelation")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/timeline"),children:["📊 ",e("multi.viewTimeline")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/alerts"),children:["🔔 ",e("multi.viewAlerts")]})]})]})]})}function H_(){const{t:e}=nt(),[t,n]=E.useState("SELECT * FROM events LIMIT 10"),[r,l]=E.useState(!1),[o,c]=E.useState(null),[u,h]=E.useState(""),[p,m]=E.useState([]),[x,N]=E.useState(!1),[w,b]=E.useState(""),j=E.useRef(null),y=async()=>{var A,K;if(!t.trim()){h(e("query.sqlRequired"));return}l(!0),h(""),c(null);const R=performance.now();try{const V=await Fj.execute({query:t,limit:100}),F=((performance.now()-R)/1e3).toFixed(2);b(F),c(V.data),C(t,!0,V.data.count,F)}catch(V){const F=((performance.now()-R)/1e3).toFixed(2);h(((K=(A=V.response)==null?void 0:A.data)==null?void 0:K.error)||"Failed to execute query"),C(t,!1,0,F),C(t,!1,0)}finally{l(!1)}},C=(R,A,K,V)=>{const F={id:Date.now().toString(),sql:R,timestamp:new Date().toISOString(),success:A,rowCount:K,duration:V};m(U=>[F,...U.slice(0,49)])},D=R=>{n(R.sql),N(!1)},T=()=>{m([])},W=R=>{const A=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],K=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],V=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],F=[],U=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,re=R.match(U)||[];let J=0;for(const k of re){const z=k.toUpperCase();k.startsWith("'")&&k.endsWith("'")?F.push(s.jsx("span",{className:"sql-string",children:k},J++)):k.startsWith('"')&&k.endsWith('"')?F.push(s.jsx("span",{className:"sql-string",children:k},J++)):V.includes(k)?F.push(s.jsx("span",{className:"sql-operator",children:k},J++)):K.includes(z)?F.push(s.jsx("span",{className:"sql-function",children:k},J++)):A.includes(z)?F.push(s.jsx("span",{className:"sql-keyword",children:k},J++)):/^\d+$/.test(k)?F.push(s.jsx("span",{className:"sql-number",children:k},J++)):F.push(s.jsx("span",{className:"sql-identifier",children:k},J++))}return s.jsx(s.Fragment,{children:F})},_=[{label:e("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:e("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:e("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:e("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:e("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:e("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],H=R=>{R.key==="Enter"&&(R.ctrlKey||R.metaKey)&&(R.preventDefault(),y())},M=R=>{if(!o)return;let A,K,V;if(R==="json")A=JSON.stringify(o,null,2),K="query_result.json",V="application/json";else{const J=o.columns.join(","),k=o.rows.map(z=>o.columns.map($=>{const te=z[$];if(te==null)return"";const se=String(te);return se.includes(",")||se.includes('"')?`"${se.replace(/"/g,'""')}"`:se}).join(",")).join(`
`);A=J+`
`+k,K="query_result.csv",V="text/csv"}const F=new Blob([A],{type:V}),U=URL.createObjectURL(F),re=document.createElement("a");re.href=U,re.download=K,re.click(),URL.revokeObjectURL(U)};return s.jsxs("div",{className:"query-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("query.title")}),s.jsx("p",{className:"page-desc",children:e("query.pageDesc")})]}),s.jsxs("div",{className:"query-toolbar",children:[s.jsxs("div",{className:"preset-queries",children:[s.jsx("label",{children:e("query.presets")}),s.jsx("div",{className:"preset-buttons",children:_.map((R,A)=>s.jsx("button",{className:"preset-btn",onClick:()=>n(R.sql),title:R.sql,children:R.label},A))})]}),s.jsx("div",{className:"toolbar-right",children:s.jsxs("button",{className:"history-btn",onClick:()=>N(!x),children:["📜 ",e("query.history")||"History"," (",p.length,")"]})})]}),x&&s.jsxs("div",{className:"query-history-panel",children:[s.jsxs("div",{className:"history-header",children:[s.jsx("h4",{children:e("query.recentQueries")||"Recent Queries"}),s.jsx("button",{className:"clear-btn",onClick:T,children:"🗑️ Clear"})]}),s.jsx("div",{className:"history-list",children:p.length===0?s.jsx("p",{className:"empty-history",children:"No query history"}):p.map(R=>s.jsxs("div",{className:`history-item ${R.success?"success":"error"}`,onClick:()=>D(R),children:[s.jsx("div",{className:"history-sql",children:R.sql}),s.jsxs("div",{className:"history-meta",children:[s.jsx("span",{className:"history-status",children:R.success?"✓":"✗"}),s.jsxs("span",{className:"history-rows",children:[R.rowCount," rows"]}),R.duration&&s.jsxs("span",{className:"history-duration",children:[R.duration,"s"]}),s.jsx("span",{className:"history-time",children:new Date(R.timestamp).toLocaleTimeString()})]})]},R.id))})]}),s.jsxs("div",{className:"query-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx("label",{children:e("query.sqlQuery")}),s.jsx("div",{className:"editor-actions",children:s.jsx("button",{className:"format-btn",onClick:()=>{const R=t.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();n(R)},children:"🎨 Format"})})]}),s.jsxs("div",{className:"editor-wrapper",children:[s.jsx("div",{className:"sql-highlight",children:W(t)}),s.jsx("textarea",{ref:j,className:"sql-input",value:t,onChange:R=>n(R.target.value),onKeyDown:H,placeholder:e("query.enterSQL"),rows:8,spellCheck:!1})]}),s.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),s.jsxs("div",{className:"query-actions",children:[s.jsx("button",{onClick:y,disabled:r,className:"btn-primary",children:r?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("query.executing")]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),e("query.execute")]})}),o&&s.jsxs("div",{className:"result-actions",children:[s.jsx("button",{className:"export-btn",onClick:()=>M("json"),children:"📥 JSON"}),s.jsx("button",{className:"export-btn",onClick:()=>M("csv"),children:"📥 CSV"})]})]}),u&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:u})]}),o&&s.jsxs("div",{className:"query-results",children:[s.jsxs("div",{className:"results-header",children:[s.jsx("h3",{children:e("query.results")}),s.jsxs("div",{className:"results-meta",children:[s.jsxs("span",{className:"results-count",children:[o.count," ",e("query.rowsReturned")]}),w&&s.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),o.columns.length>0&&o.rows.length>0?s.jsx("div",{className:"results-table-wrapper",children:s.jsxs("table",{className:"results-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{className:"row-num",children:"#"}),o.columns.map((R,A)=>s.jsx("th",{children:R},A))]})}),s.jsx("tbody",{children:o.rows.map((R,A)=>s.jsxs("tr",{children:[s.jsx("td",{className:"row-num",children:A+1}),o.columns.map((K,V)=>s.jsx("td",{className:R[K]===null?"null-value":"",children:V_(R[K])},V))]},A))})]})}):s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📭"}),s.jsx("h3",{children:e("query.noResults")}),s.jsx("p",{children:e("query.noResultsDesc")})]})]}),s.jsxs("div",{className:"query-info",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("query.aboutQuery")})}),s.jsxs("div",{className:"info-content",children:[s.jsx("p",{children:e("query.aboutDesc")}),s.jsxs("div",{className:"example-queries",children:[s.jsx("h4",{children:e("query.exampleQueries")}),s.jsxs("div",{className:"example-item",children:[s.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),s.jsx("p",{children:e("query.example1Desc")})]}),s.jsxs("div",{className:"example-item",children:[s.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),s.jsx("p",{children:e("query.example2Desc")})]})]})]})]})]})}function V_(e){if(e==null)return"NULL";if(typeof e=="object")return JSON.stringify(e);const t=String(e);return t.length>200?t.substring(0,200)+"...":t}const q_={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},Y_={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Q_(){const{t:e}=nt(),t=Ks(),[n,r]=E.useState(!1),[l,o]=E.useState(null),[c,u]=E.useState([]),[h,p]=E.useState("analyze"),[m,x]=E.useState(24),[N,w]=E.useState(""),[b,j]=E.useState(null),y=async()=>{var R,A;r(!0),w("");try{const K=await Ap.analyze({hours:m});o(K.data)}catch(K){w(((A=(R=K.response)==null?void 0:R.data)==null?void 0:A.error)||"Failed to run UEBA analysis")}finally{r(!1)}},C=async()=>{r(!0),w("");try{const V=((await Ap.profiles()).data.profiles||[]).map(F=>({...F,risk_score:Math.random()*100}));u(V)}catch(R){w(R.message||"Failed to load profiles")}finally{r(!1)}},D=R=>q_[R.toLowerCase()]||"#2563eb",T=R=>({critical:e("severity.critical")||"Critical",high:e("severity.high")||"High",medium:e("severity.medium")||"Medium",low:e("severity.low")||"Low"})[R.toLowerCase()]||R,W=R=>Y_[R]||{icon:"⚠️",color:"#2563eb",description:R},_=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],H=E.useMemo(()=>{if(!l)return null;const R=l.total_anomaly||1,A=l.high_risk_count/R,K=l.medium_risk_count/R,V=1-A-K;return{high:{value:l.high_risk_count,percentage:A*100},medium:{value:l.medium_risk_count,percentage:K*100},low:{value:R-l.high_risk_count-l.medium_risk_count,percentage:V*100}}},[l]),M=R=>{try{return new Date(R).toLocaleString()}catch{return R}};return s.jsxs("div",{className:"ueba-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("ueba.title")}),s.jsx("p",{className:"page-desc",children:e("ueba.pageDesc")})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",e("ueba.analyze")]}),s.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),C()},children:["👥 ",e("ueba.profiles")]})]}),h==="analyze"&&s.jsxs("div",{className:"tab-content",children:[s.jsxs("div",{className:"ueba-toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx("label",{children:e("ueba.timeWindow")}),s.jsx("div",{className:"time-selector",children:_.map(R=>s.jsx("button",{className:m===R.value?"active":"",onClick:()=>x(R.value),children:R.label},R.value))})]}),s.jsx("button",{onClick:y,disabled:n,className:"btn-primary",children:n?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("ueba.analyzing")]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"8"}),s.jsx("path",{d:"M21 21l-4.35-4.35"})]}),e("ueba.runAnalysis")]})})]}),N&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:N})]}),l&&s.jsxs("div",{className:"ueba-results",children:[s.jsxs("div",{className:"results-summary",children:[s.jsxs("div",{className:"summary-card large",children:[s.jsx("div",{className:"summary-icon",children:"📊"}),s.jsxs("div",{className:"summary-content",children:[s.jsx("h4",{children:e("ueba.totalAnomalies")}),s.jsx("p",{className:"summary-value",children:l.total_anomaly}),s.jsx("p",{className:"summary-subtitle",children:e("ueba.detectedInHours",{hours:m})})]})]}),H&&s.jsxs("div",{className:"risk-gauge-card",children:[s.jsx("h4",{children:e("ueba.riskDistribution")||"Risk Distribution"}),s.jsxs("div",{className:"risk-gauge",children:[s.jsxs("div",{className:"gauge-bar",children:[s.jsx("div",{className:"gauge-segment critical",style:{width:`${H.high.percentage}%`}}),s.jsx("div",{className:"gauge-segment warning",style:{width:`${H.medium.percentage}%`}}),s.jsx("div",{className:"gauge-segment low",style:{width:`${H.low.percentage}%`}})]}),s.jsxs("div",{className:"gauge-legend",children:[s.jsxs("span",{className:"legend-item critical",children:["🔴 ",H.high.value," ",e("severity.critical")||"Critical"]}),s.jsxs("span",{className:"legend-item warning",children:["🟠 ",H.medium.value," ",e("severity.medium")||"Medium"]}),s.jsxs("span",{className:"legend-item low",children:["🟢 ",H.low.value," ",e("severity.low")||"Low"]})]})]})]}),s.jsxs("div",{className:"summary-card",children:[s.jsx("div",{className:"summary-icon",children:"⏱️"}),s.jsxs("div",{className:"summary-content",children:[s.jsx("h4",{children:e("ueba.duration")}),s.jsx("p",{className:"summary-value small",children:l.duration})]})]})]}),l.anomalies.length===0?s.jsxs("div",{className:"empty-state success",children:[s.jsx("div",{className:"empty-icon",children:"✅"}),s.jsx("h3",{children:e("ueba.noAnomalies")}),s.jsx("p",{children:e("ueba.noAnomaliesDesc")}),s.jsx("div",{className:"empty-hint",children:s.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):s.jsxs("div",{className:"anomalies-list",children:[s.jsxs("h3",{children:[e("ueba.detectedAnomalies")," (",l.anomalies.length,")"]}),s.jsx("div",{className:"anomaly-timeline",children:l.anomalies.map((R,A)=>{const K=W(R.type);return s.jsxs("div",{className:`anomaly-item ${b===A?"expanded":""}`,onClick:()=>j(b===A?null:A),children:[s.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:K.color}}),s.jsx("div",{className:"anomaly-icon",children:K.icon}),s.jsxs("div",{className:"anomaly-content",children:[s.jsxs("div",{className:"anomaly-header",children:[s.jsx("span",{className:"anomaly-type",children:R.type.replace(/_/g," ")}),s.jsx("span",{className:"severity-badge",style:{backgroundColor:D(R.severity)},children:T(R.severity)})]}),R.user&&s.jsxs("div",{className:"anomaly-user",children:["👤 ",s.jsx("span",{children:R.user})]}),s.jsx("p",{className:"anomaly-description",children:R.description}),s.jsxs("div",{className:"anomaly-meta",children:[s.jsxs("span",{className:"anomaly-score",children:["Score: ",s.jsx("strong",{children:R.score.toFixed(2)})]}),R.event_ids&&R.event_ids.length>0&&s.jsxs("span",{className:"anomaly-events",children:[R.event_ids.length," related events"]})]})]}),b===A&&s.jsxs("div",{className:"anomaly-expanded",children:[R.details&&Object.keys(R.details).length>0&&s.jsxs("div",{className:"anomaly-details-section",children:[s.jsx("h5",{children:e("ueba.details")}),s.jsx("div",{className:"details-grid",children:Object.entries(R.details).map(([V,F])=>s.jsxs("div",{className:"detail-item",children:[s.jsxs("span",{className:"detail-key",children:[V,":"]}),s.jsx("span",{className:"detail-value",children:String(F)})]},V))})]}),s.jsxs("div",{className:"anomaly-actions",children:[s.jsx("button",{className:"action-btn",onClick:V=>{V.stopPropagation(),t("/events",{state:{user:R.user}})},children:"📊 View Events"}),s.jsx("button",{className:"action-btn",onClick:V=>{V.stopPropagation(),t("/timeline")},children:"📈 View Timeline"})]})]})]},A)})})]})]})]}),h==="profiles"&&s.jsxs("div",{className:"tab-content",children:[s.jsxs("div",{className:"profiles-header",children:[s.jsx("h3",{children:e("ueba.userProfiles")}),s.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),n?s.jsxs("div",{className:"loading-state",children:[s.jsx("span",{className:"btn-spinner"}),s.jsx("span",{children:"Loading profiles..."})]}):c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"👥"}),s.jsx("h3",{children:e("ueba.noProfiles")}),s.jsx("p",{children:e("ueba.noProfilesDesc")}),s.jsxs("div",{className:"empty-hint",children:[s.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),s.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):s.jsx("div",{className:"profiles-grid",children:c.map((R,A)=>s.jsxs("div",{className:"profile-card",children:[s.jsxs("div",{className:"profile-header",children:[s.jsx("div",{className:"profile-avatar",children:s.jsx("span",{className:"avatar-icon",children:"👤"})}),s.jsxs("div",{className:"profile-info",children:[s.jsx("h4",{children:R.user}),s.jsxs("p",{className:"profile-meta",children:["Last updated: ",M(R.last_updated)]})]}),R.risk_score!==void 0&&s.jsx("div",{className:`risk-indicator ${R.risk_score>70?"high":R.risk_score>30?"medium":"low"}`,children:R.risk_score.toFixed(0)})]}),s.jsxs("div",{className:"profile-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:e("ueba.loginCount")}),s.jsx("span",{className:"stat-value",children:R.login_count})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:e("ueba.avgEventsPerDay")}),s.jsx("span",{className:"stat-value",children:R.avg_events_per_day.toFixed(1)})]})]}),R.risk_score!==void 0&&s.jsxs("div",{className:"profile-risk-bar",children:[s.jsx("div",{className:"risk-bar-track",children:s.jsx("div",{className:`risk-bar-fill ${R.risk_score>70?"high":R.risk_score>30?"medium":"low"}`,style:{width:`${R.risk_score}%`}})}),s.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},A))})]}),s.jsxs("div",{className:"quick-actions",children:[s.jsx("h4",{children:e("ueba.quickActions")}),s.jsxs("div",{className:"quick-buttons",children:[s.jsxs("button",{className:"quick-btn",onClick:()=>t("/correlation"),children:["🔗 ",e("ueba.viewCorrelation")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/alerts"),children:["🔔 ",e("ueba.viewAlerts")]}),s.jsxs("button",{className:"quick-btn",onClick:()=>t("/timeline"),children:["📊 ",e("ueba.viewTimeline")]})]})]})]})}const K_=[{value:"event_id",label:"Event ID"},{value:"source",label:"Source"},{value:"log_name",label:"Log Name"},{value:"computer",label:"Computer"},{value:"user",label:"User"},{value:"user_sid",label:"User SID"},{value:"ip_address",label:"IP Address"}],X_=[{value:"equals",label:"Equals"},{value:"contains",label:"Contains"},{value:"starts_with",label:"Starts With"},{value:"ends_with",label:"Ends With"}],eg=[{value:60,label:"1 hour"},{value:360,label:"6 hours"},{value:1440,label:"24 hours"},{value:10080,label:"7 days"},{value:43200,label:"30 days"},{value:0,label:"Permanent"}];function G_(){const{t:e}=nt(),[t,n]=E.useState([]),[r,l]=E.useState(!1),[o,c]=E.useState(""),[u,h]=E.useState(!1),[p,m]=E.useState(!1),[x,N]=E.useState(null),[w,b]=E.useState(null),[j,y]=E.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]}),[C,D]=E.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[],enabled:!0});E.useEffect(()=>{T()},[]);const T=async()=>{l(!0),c("");try{const k=await Tr.list();n(k.data.rules||[])}catch(k){c(k.message||"Failed to load suppress rules")}finally{l(!1)}},W=()=>{y({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]})},_=async()=>{if(!j.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Tr.create({name:j.name,duration:j.duration,scope:j.scope,expires_at:j.expires_at,conditions:j.conditions,enabled:!0}),h(!1),W(),T()}catch(k){c(k.message||"Failed to create rule")}finally{l(!1)}},H=k=>{N(k),D({name:k.name,duration:k.duration,scope:k.scope,expires_at:k.expires_at,conditions:k.conditions||[],enabled:k.enabled}),m(!0)},M=async()=>{if(x){if(!C.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Tr.update(x.id,{name:C.name,duration:C.duration,scope:C.scope,expires_at:C.expires_at,conditions:C.conditions,enabled:C.enabled}),m(!1),N(null),T()}catch(k){c(k.message||"Failed to update rule")}finally{l(!1)}}},R=async k=>{if(confirm("Are you sure you want to delete this rule?")){l(!0),c("");try{await Tr.delete(k),T()}catch(z){c(z.message||"Failed to delete rule")}finally{l(!1)}}},A=async(k,z)=>{l(!0),c("");try{await Tr.toggle(k,!z),T()}catch($){c($.message||"Failed to toggle rule")}finally{l(!1)}},K=(k,z)=>{k([...z,{field:"event_id",operator:"equals",value:""}])},V=(k,z,$,te,se)=>{const L=[...z];L[$]={...L[$],[te]:se},k(L)},F=(k,z,$)=>{k(z.filter((te,se)=>se!==$))},U=k=>k===0?"Permanent":k<60?`${k}m`:k<1440?`${Math.floor(k/60)}h`:`${Math.floor(k/1440)}d`,re=k=>!k||k.length===0?"No conditions (global suppress)":k.map(z=>`${z.field} ${z.operator} "${z.value}"`).join(" AND "),J=(k,z,$)=>s.jsxs("div",{className:"conditions-section",children:[s.jsxs("div",{className:"conditions-header",children:[s.jsx("label",{children:"Conditions"}),s.jsx("button",{type:"button",className:"btn-add-condition",onClick:()=>K(z,k),children:"+ Add Condition"})]}),k.length===0?s.jsx("p",{className:"no-conditions",children:"No conditions - will suppress all matching alerts"}):s.jsx("div",{className:"conditions-list",children:k.map((te,se)=>s.jsxs("div",{className:"condition-row",children:[s.jsx("select",{value:te.field,onChange:L=>V(z,k,se,"field",L.target.value),children:K_.map(L=>s.jsx("option",{value:L.value,children:L.label},L.value))}),s.jsx("select",{value:te.operator,onChange:L=>V(z,k,se,"operator",L.target.value),children:X_.map(L=>s.jsx("option",{value:L.value,children:L.label},L.value))}),s.jsx("input",{type:"text",value:te.value,onChange:L=>V(z,k,se,"value",L.target.value),placeholder:"Value"}),s.jsx("button",{type:"button",className:"btn-remove-condition",onClick:()=>F(z,k,se),children:"×"})]},se))})]});return s.jsxs("div",{className:"suppress-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("suppress.title")}),s.jsx("p",{className:"page-desc",children:e("suppress.pageDesc")})]}),s.jsx("div",{className:"suppress-toolbar",children:s.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),e("suppress.addRule")]})}),o&&s.jsxs("div",{className:"error-panel",children:[s.jsx("span",{className:"error-icon",children:"⚠️"}),s.jsx("span",{children:o})]}),r&&t.length===0?s.jsxs("div",{className:"loading-state",children:[s.jsx("span",{className:"spinner"}),s.jsx("span",{children:e("common.loading")})]}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"🛡️"}),s.jsx("h3",{children:e("suppress.noRules")}),s.jsx("p",{children:e("suppress.noRulesDesc")})]}):s.jsx("div",{className:"rules-grid",children:t.map(k=>s.jsxs("div",{className:`rule-card ${k.enabled?"":"disabled"}`,children:[s.jsxs("div",{className:"rule-header",children:[s.jsxs("div",{className:"rule-title",children:[s.jsx("span",{className:`status-dot ${k.enabled?"enabled":"disabled"}`}),s.jsx("span",{className:"rule-name",children:k.name})]}),s.jsxs("div",{className:"rule-actions-header",children:[s.jsx("button",{className:"btn-icon",onClick:()=>H(k),title:"Edit",children:"✏️"}),s.jsx("button",{className:"btn-icon delete",onClick:()=>R(k.id),title:e("suppress.delete"),children:"🗑️"})]})]}),s.jsxs("div",{className:"rule-meta",children:[s.jsxs("span",{className:`scope-badge scope-${k.scope}`,children:[k.scope==="global"?"🌐":k.scope==="user"?"👤":"💻"," ",k.scope]}),s.jsxs("span",{className:"duration-badge",children:["⏱️ ",U(k.duration)]}),k.expires_at&&s.jsxs("span",{className:"expires-badge",children:["📅 ",new Date(k.expires_at).toLocaleDateString()]})]}),s.jsxs("div",{className:"rule-conditions",children:[s.jsx("label",{children:"Conditions:"}),s.jsx("p",{className:"conditions-text",children:re(k.conditions)})]}),s.jsxs("div",{className:"rule-footer",children:[s.jsxs("span",{className:"created-at",children:["Created: ",new Date(k.created_at).toLocaleDateString()]}),s.jsx("button",{className:`toggle-btn ${k.enabled?"enabled":"disabled"}`,onClick:()=>A(k.id,k.enabled),children:k.enabled?e("suppress.enabled"):e("suppress.disabled")})]})]},k.id))}),u&&s.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:s.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Add Suppress Rule"}),s.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Rule Name ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"text",value:j.name,onChange:k=>y({...j,name:k.target.value}),placeholder:"e.g. suppress-admin-alerts"})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Scope"}),s.jsxs("select",{value:j.scope,onChange:k=>y({...j,scope:k.target.value}),children:[s.jsx("option",{value:"global",children:"🌐 Global"}),s.jsx("option",{value:"user",children:"👤 User"}),s.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("select",{value:j.duration,onChange:k=>y({...j,duration:parseInt(k.target.value)}),children:eg.map(k=>s.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Expires At (Optional)"}),s.jsx("input",{type:"datetime-local",value:j.expires_at,onChange:k=>y({...j,expires_at:k.target.value})})]}),J(j.conditions,k=>y({...j,conditions:k}))]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:e("common.cancel")}),s.jsx("button",{className:"btn-primary",onClick:_,disabled:!j.name||r,children:e("suppress.create")})]})]})}),p&&x&&s.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:s.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Edit Suppress Rule"}),s.jsx("button",{className:"close-btn",onClick:()=>m(!1),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"form-group",children:[s.jsxs("label",{children:["Rule Name ",s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:"text",value:C.name,onChange:k=>D({...C,name:k.target.value})})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Scope"}),s.jsxs("select",{value:C.scope,onChange:k=>D({...C,scope:k.target.value}),children:[s.jsx("option",{value:"global",children:"🌐 Global"}),s.jsx("option",{value:"user",children:"👤 User"}),s.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Duration"}),s.jsx("select",{value:C.duration,onChange:k=>D({...C,duration:parseInt(k.target.value)}),children:eg.map(k=>s.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Expires At (Optional)"}),s.jsx("input",{type:"datetime-local",value:C.expires_at,onChange:k=>D({...C,expires_at:k.target.value})})]}),s.jsx("div",{className:"form-group",children:s.jsxs("label",{className:"checkbox-label",children:[s.jsx("input",{type:"checkbox",checked:C.enabled,onChange:k=>D({...C,enabled:k.target.checked})}),s.jsx("span",{children:"Enabled"})]})}),J(C.conditions,k=>D({...C,conditions:k}))]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{className:"btn-secondary",onClick:()=>m(!1),children:e("common.cancel")}),s.jsx("button",{className:"btn-primary",onClick:M,disabled:!C.name||r,children:"Save Changes"})]})]})}),w&&s.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:s.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:"Rule Details"}),s.jsx("button",{className:"close-btn",onClick:()=>b(null),children:"×"})]}),s.jsxs("div",{className:"modal-body",children:[s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Name:"}),s.jsx("span",{className:"detail-value",children:w.name})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Scope:"}),s.jsx("span",{className:"detail-value",children:w.scope})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Duration:"}),s.jsx("span",{className:"detail-value",children:U(w.duration)})]}),s.jsxs("div",{className:"detail-row",children:[s.jsx("span",{className:"detail-label",children:"Status:"}),s.jsx("span",{className:`status-badge ${w.enabled?"enabled":"disabled"}`,children:w.enabled?"Enabled":"Disabled"})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{children:"Conditions"}),s.jsx("p",{className:"detail-description",children:re(w.conditions)})]})]})]})}),s.jsxs("div",{className:"suppress-info",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("suppress.about")})}),s.jsx("div",{className:"info-content",children:s.jsx("p",{children:e("suppress.aboutDesc")})})]}),s.jsx("style",{children:`
        .suppress-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .suppress-toolbar {
          margin-bottom: 20px;
        }
        
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
        
        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        
        .status-dot.enabled {
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }
        
        .status-dot.disabled {
          background: #ef4444;
        }
        
        .rule-name {
          font-weight: 600;
          color: #fff;
          font-size: 16px;
        }
        
        .rule-actions-header {
          display: flex;
          gap: 8px;
        }
        
        .btn-icon {
          background: transparent;
          border: 1px solid #333;
          border-radius: 6px;
          padding: 6px 10px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-icon:hover {
          border-color: #00d9ff;
        }
        
        .btn-icon.delete:hover {
          border-color: #ef4444;
        }
        
        .rule-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .scope-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          background: rgba(0, 217, 255, 0.1);
          color: #00d9ff;
        }
        
        .duration-badge, .expires-badge {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: #888;
        }
        
        .rule-conditions {
          flex: 1;
        }
        
        .rule-conditions label {
          font-size: 12px;
          color: #666;
          display: block;
          margin-bottom: 4px;
        }
        
        .conditions-text {
          color: #ccc;
          font-size: 13px;
          line-height: 1.4;
          margin: 0;
        }
        
        .rule-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid #333;
        }
        
        .created-at {
          font-size: 12px;
          color: #666;
        }
        
        .toggle-btn {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid;
        }
        
        .toggle-btn.enabled {
          background: rgba(34, 197, 94, 0.1);
          border-color: #22c55e;
          color: #22c55e;
        }
        
        .toggle-btn.enabled:hover {
          background: rgba(34, 197, 94, 0.2);
        }
        
        .toggle-btn.disabled {
          background: rgba(239, 68, 68, 0.1);
          border-color: #ef4444;
          color: #ef4444;
        }
        
        .toggle-btn.disabled:hover {
          background: rgba(239, 68, 68, 0.2);
        }
        
        .modal-content {
          max-width: 600px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .checkbox-label input {
          width: 18px;
          height: 18px;
        }
        
        .conditions-section {
          margin-top: 16px;
          padding: 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          border: 1px solid #333;
        }
        
        .conditions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .conditions-header label {
          color: #888;
          font-size: 13px;
          font-weight: 500;
        }
        
        .btn-add-condition {
          background: rgba(0, 217, 255, 0.1);
          border: 1px solid #00d9ff;
          border-radius: 4px;
          color: #00d9ff;
          padding: 4px 12px;
          font-size: 12px;
          cursor: pointer;
        }
        
        .btn-add-condition:hover {
          background: rgba(0, 217, 255, 0.2);
        }
        
        .no-conditions {
          color: #666;
          font-size: 13px;
          margin: 0;
          text-align: center;
          padding: 12px;
        }
        
        .conditions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .condition-row {
          display: grid;
          grid-template-columns: 1fr 1fr 2fr auto;
          gap: 8px;
          align-items: center;
        }
        
        .condition-row select,
        .condition-row input {
          padding: 8px 10px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #333;
          border-radius: 4px;
          color: #eee;
          font-size: 13px;
        }
        
        .condition-row select:focus,
        .condition-row input:focus {
          outline: none;
          border-color: #00d9ff;
        }
        
        .btn-remove-condition {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 4px;
          color: #ef4444;
          width: 28px;
          height: 28px;
          cursor: pointer;
          font-size: 16px;
        }
        
        .btn-remove-condition:hover {
          background: rgba(239, 68, 68, 0.2);
        }
        
        .detail-row {
          display: flex;
          justify-content: space-between;
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
        
        .detail-section {
          margin-top: 16px;
        }
        
        .detail-section h4 {
          color: #00d9ff;
          margin: 0 0 8px 0;
          font-size: 14px;
        }
        
        .detail-description {
          color: #ccc;
          line-height: 1.5;
          margin: 0;
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
        
        .required {
          color: #ef4444;
        }
      `})]})}function J_(){var A,K;const{t:e}=nt(),[t,n]=E.useState([]),[r,l]=E.useState(null),[o,c]=E.useState(!1),[u,h]=E.useState(null),[p,m]=E.useState("all"),[x,N]=E.useState(0),w=E.useRef(null),b=E.useRef(null),j=E.useRef(null),y=5;E.useEffect(()=>(C(),()=>{w.current&&w.current.close(),j.current&&clearTimeout(j.current)}),[]),E.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[t]);const C=()=>{h(null);const V=Oj.streamEvents(F=>{n(U=>{const re=[F,...U];return re.length>100&&re.pop(),re}),N(0)},F=>{l({total_events:F.total_events||0,events_per_sec:F.events_per_sec||0,uptime:F.uptime||"0s",alerts:F.alerts||0})},F=>{console.error("Stream error:",F),c(!1),F.type==="error"&&(h("Connection lost. Reconnecting..."),W())});V.onopen=()=>{c(!0),h(null)},w.current=V},D=()=>{w.current&&(w.current.close(),w.current=null),j.current&&(clearTimeout(j.current),j.current=null),c(!1),N(0)},T=()=>{j.current&&(clearTimeout(j.current),j.current=null),D(),C()},W=()=>{if(x>=y){h("Max reconnection attempts reached. Please click Connect to retry.");return}const V=Math.min(1e3*Math.pow(2,x),3e4);N(F=>F+1),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{T()},V)},_=()=>{n([])},H=V=>{switch(V==null?void 0:V.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},M=t.filter(V=>{var F;return p==="all"?!0:((F=V.level)==null?void 0:F.toLowerCase())===p}),R=V=>{try{return new Date(V).toLocaleTimeString()}catch{return V}};return s.jsxs("div",{className:"live-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h2",{children:e("live.title")}),s.jsxs("div",{className:`connection-status ${o?"connected":"disconnected"}`,children:[s.jsx("span",{className:"status-dot"}),o?"Connected":"Disconnected"]})]}),s.jsxs("div",{className:"header-actions",children:[s.jsxs("select",{className:"filter-select",value:p,onChange:V=>m(V.target.value),children:[s.jsx("option",{value:"all",children:"All Levels"}),s.jsx("option",{value:"critical",children:"Critical"}),s.jsx("option",{value:"error",children:"Error"}),s.jsx("option",{value:"warning",children:"Warning"}),s.jsx("option",{value:"info",children:"Info"}),s.jsx("option",{value:"verbose",children:"Verbose"})]}),s.jsx("button",{className:"btn-secondary",onClick:_,children:"Clear"}),o?s.jsx("button",{className:"btn-danger",onClick:D,children:"Disconnect"}):s.jsx("button",{className:"btn-primary",onClick:T,children:"Connect"})]})]}),u&&s.jsxs("div",{className:"error-banner",children:[u,x>0&&x<y&&s.jsxs("span",{className:"reconnect-info",children:[" ","Reconnecting in ",Math.min(1e3*Math.pow(2,x-1),3e4)/1e3,"s... (Attempt ",x,"/",y,")"]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Total Events"}),s.jsx("span",{className:"stat-value",children:((A=r==null?void 0:r.total_events)==null?void 0:A.toLocaleString())||"0"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Events/sec"}),s.jsx("span",{className:"stat-value",children:((K=r==null?void 0:r.events_per_sec)==null?void 0:K.toFixed(2))||"0.00"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Alerts"}),s.jsx("span",{className:"stat-value alerts",children:(r==null?void 0:r.alerts)||0})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Uptime"}),s.jsx("span",{className:"stat-value mono",children:(r==null?void 0:r.uptime)||"0s"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-label",children:"Buffered"}),s.jsxs("span",{className:"stat-value",children:[t.length,"/100"]})]})]}),s.jsx("div",{className:"events-container",ref:b,children:M.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:"📡"}),s.jsx("div",{className:"empty-text",children:o?"Waiting for events...":"Click Connect to start monitoring"})]}):s.jsx("div",{className:"events-list",children:M.map((V,F)=>s.jsxs("div",{className:"event-card",style:{borderLeftColor:H(V.level)},children:[s.jsxs("div",{className:"event-header",children:[s.jsx("span",{className:"event-time",children:R(V.timestamp)}),s.jsx("span",{className:"event-level",style:{color:H(V.level)},children:V.level||"UNKNOWN"}),s.jsxs("span",{className:"event-id",children:["Event #",V.event_id]}),s.jsx("span",{className:"event-source",children:V.source||V.log_name})]}),s.jsx("div",{className:"event-body",children:s.jsx("div",{className:"event-message",children:V.message||"(No message)"})}),s.jsxs("div",{className:"event-footer",children:[s.jsx("span",{className:"event-computer",children:V.computer}),V.user&&s.jsx("span",{className:"event-user",children:V.user}),V.ip_address&&s.jsx("span",{className:"event-ip",children:V.ip_address})]})]},`${V.id}-${F}`))})}),s.jsx("style",{children:`
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
        
        .reconnect-info {
          color: #888;
          font-size: 0.85rem;
          margin-left: 8px;
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
      `})]})}const zl=()=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),s.jsx("path",{d:"M9 9h6M9 12h6M9 15h4"})]}),Fl=()=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Bl=()=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),tg=()=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),s.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),s.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),Z_=()=>s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("polygon",{points:"5,3 19,12 5,21"})}),e2=()=>s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),t2=()=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:[s.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.3"}),s.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",strokeLinecap:"round"})]});function s2(){const{t:e}=nt(),[t,n]=E.useState(null),[r,l]=E.useState([]),[o,c]=E.useState({process_enabled:!1,network_enabled:!1,dns_enabled:!1,poll_interval:5}),[u,h]=E.useState(!1),[p,m]=E.useState("all"),[x,N]=E.useState(null),w=E.useCallback(async()=>{try{const _=await Mr.getStats();n(_.data.stats)}catch(_){console.error("Failed to fetch stats:",_)}},[]),b=E.useCallback(async()=>{try{const _={limit:100};p!=="all"&&(_.type=p);const H=await Mr.getEvents(_);l(H.data.events)}catch(_){console.error("Failed to fetch events:",_)}},[p]);E.useEffect(()=>{w();const _=setInterval(w,5e3);return()=>clearInterval(_)},[w]),E.useEffect(()=>{b();const _=setInterval(b,5e3);return()=>clearInterval(_)},[b]);const j=async _=>{if(!(t!=null&&t.is_running))return;const H={...o,[_]:!o[_]};try{await Mr.updateConfig(H),c(H),w()}catch(M){console.error("Failed to update config:",M)}},y=async()=>{h(!0);try{t!=null&&t.is_running&&await Mr.updateConfig({process_enabled:!1,network_enabled:!1,dns_enabled:!1}),await Mr.startStop(t!=null&&t.is_running?"stop":"start"),w(),b()}catch(_){console.error("Failed to start/stop monitor:",_)}finally{h(!1)}},C=_=>{switch(_){case"critical":return{bg:"rgba(239, 68, 68, 0.15)",color:"#ef4444",border:"#ef4444"};case"high":return{bg:"rgba(249, 115, 22, 0.15)",color:"#f97316",border:"#f97316"};case"medium":return{bg:"rgba(234, 179, 8, 0.15)",color:"#eab308",border:"#eab308"};case"low":return{bg:"rgba(34, 197, 94, 0.15)",color:"#22c55e",border:"#22c55e"};default:return{bg:"rgba(107, 114, 128, 0.15)",color:"#6b7280",border:"#6b7280"}}},D=_=>{switch(_){case"process":return s.jsx(zl,{});case"network":return s.jsx(Fl,{});case"dns":return s.jsx(Bl,{});default:return s.jsx(tg,{})}},T=r.filter(_=>p==="all"?!0:_.type===p),W=_=>{switch(_.type){case"process":return s.jsxs("div",{className:"event-summary-content",children:[s.jsx("span",{className:"event-main",children:_.data.process_name||"Unknown Process"}),s.jsxs("span",{className:"event-sub",children:["PID: ",_.data.pid||"N/A"," | PPID: ",_.data.ppid||"N/A"]})]});case"network":return s.jsxs("div",{className:"event-summary-content",children:[s.jsxs("span",{className:"event-main",children:[_.data.protocol," Connection"]}),s.jsxs("span",{className:"event-sub",children:[_.data.source_ip,":",_.data.source_port," → ",_.data.dest_ip,":",_.data.dest_port]})]});case"dns":return s.jsxs("div",{className:"event-summary-content",children:[s.jsx("span",{className:"event-main",children:_.data.query_name}),s.jsxs("span",{className:"event-sub",children:["Type: ",_.data.query_type," | TTL: ",_.data.ttl||"N/A"]})]});default:return s.jsx("span",{children:"Unknown event type"})}};return s.jsxs("div",{className:"monitor-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsxs("div",{className:"header-content",children:[s.jsx("h2",{children:e("monitor.title")}),s.jsx("p",{className:"page-desc",children:e("monitor.pageDesc")})]}),s.jsxs("div",{className:`status-badge ${t!=null&&t.is_running?"running":"stopped"}`,children:[s.jsx("span",{className:"status-dot-animated"}),t!=null&&t.is_running?e("monitor.running"):e("monitor.stopped")]})]}),s.jsxs("div",{className:"monitor-grid",children:[s.jsxs("div",{className:"stats-row",children:[s.jsxs("div",{className:"stat-card-monitor",children:[s.jsx("div",{className:"stat-icon-wrapper process",children:s.jsx(zl,{})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:(t==null?void 0:t.process_count)||0}),s.jsx("span",{className:"stat-label",children:e("monitor.processCount")})]}),s.jsx("div",{className:`stat-toggle ${o.process_enabled?"active":""}`,children:s.jsxs("label",{className:"toggle-switch-small",children:[s.jsx("input",{type:"checkbox",checked:o.process_enabled,onChange:()=>j("process_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider-small"})]})})]}),s.jsxs("div",{className:"stat-card-monitor",children:[s.jsx("div",{className:"stat-icon-wrapper network",children:s.jsx(Fl,{})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:(t==null?void 0:t.network_count)||0}),s.jsx("span",{className:"stat-label",children:e("monitor.networkCount")})]}),s.jsx("div",{className:`stat-toggle ${o.network_enabled?"active":""}`,children:s.jsxs("label",{className:"toggle-switch-small",children:[s.jsx("input",{type:"checkbox",checked:o.network_enabled,onChange:()=>j("network_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider-small"})]})})]}),s.jsxs("div",{className:"stat-card-monitor",children:[s.jsx("div",{className:"stat-icon-wrapper dns",children:s.jsx(Bl,{})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:(t==null?void 0:t.dns_count)||0}),s.jsx("span",{className:"stat-label",children:e("monitor.dnsCount")})]}),s.jsx("div",{className:`stat-toggle ${o.dns_enabled?"active":""}`,children:s.jsxs("label",{className:"toggle-switch-small",children:[s.jsx("input",{type:"checkbox",checked:o.dns_enabled,onChange:()=>j("dns_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider-small"})]})})]}),s.jsxs("div",{className:"stat-card-monitor alert",children:[s.jsx("div",{className:"stat-icon-wrapper alert",children:s.jsx(tg,{})}),s.jsxs("div",{className:"stat-info",children:[s.jsx("span",{className:"stat-value",children:(t==null?void 0:t.alert_count)||0}),s.jsx("span",{className:"stat-label",children:e("monitor.alertCount")})]})]})]}),s.jsxs("div",{className:"control-section",children:[s.jsxs("div",{className:"control-card",children:[s.jsxs("div",{className:"control-card-header",children:[s.jsx("h3",{children:e("monitor.title")}),(t==null?void 0:t.start_time)&&s.jsxs("span",{className:"start-time",children:[e("monitor.startTime"),": ",new Date(t.start_time).toLocaleString()]})]}),s.jsxs("div",{className:"monitor-toggles",children:[s.jsxs("div",{className:"toggle-item",children:[s.jsxs("div",{className:"toggle-info",children:[s.jsx("div",{className:"toggle-icon process",children:s.jsx(zl,{})}),s.jsxs("div",{className:"toggle-text",children:[s.jsx("span",{className:"toggle-title",children:e("monitor.processMonitoring")}),s.jsx("span",{className:"toggle-desc",children:e("monitor.processMonitoringDesc")})]})]}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:o.process_enabled,onChange:()=>j("process_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"toggle-item",children:[s.jsxs("div",{className:"toggle-info",children:[s.jsx("div",{className:"toggle-icon network",children:s.jsx(Fl,{})}),s.jsxs("div",{className:"toggle-text",children:[s.jsx("span",{className:"toggle-title",children:e("monitor.networkMonitoring")}),s.jsx("span",{className:"toggle-desc",children:e("monitor.networkMonitoringDesc")})]})]}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:o.network_enabled,onChange:()=>j("network_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"toggle-item",children:[s.jsxs("div",{className:"toggle-info",children:[s.jsx("div",{className:"toggle-icon dns",children:s.jsx(Bl,{})}),s.jsxs("div",{className:"toggle-text",children:[s.jsx("span",{className:"toggle-title",children:e("monitor.dnsMonitoring")}),s.jsx("span",{className:"toggle-desc",children:e("monitor.dnsMonitoringDesc")})]})]}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:o.dns_enabled,onChange:()=>j("dns_enabled"),disabled:!(t!=null&&t.is_running)}),s.jsx("span",{className:"toggle-slider"})]})]})]}),s.jsx("button",{className:`btn-monitor-action ${t!=null&&t.is_running?"btn-stop":"btn-start"}`,onClick:y,disabled:u,children:u?s.jsx(t2,{}):t!=null&&t.is_running?s.jsxs(s.Fragment,{children:[s.jsx(e2,{}),e("monitor.stop")]}):s.jsxs(s.Fragment,{children:[s.jsx(Z_,{}),e("monitor.start")]})})]}),s.jsxs("div",{className:"about-card",children:[s.jsx("h4",{children:e("monitor.aboutMonitor")}),s.jsx("p",{children:e("monitor.aboutDesc")})]})]})]}),s.jsxs("div",{className:"events-container",children:[s.jsxs("div",{className:"events-header-section",children:[s.jsx("h3",{children:e("monitor.events")}),s.jsxs("div",{className:"filter-tabs",children:[s.jsxs("button",{className:`filter-tab ${p==="all"?"active":""}`,onClick:()=>m("all"),children:[s.jsx("span",{className:"tab-label",children:"All"}),s.jsx("span",{className:"tab-count",children:r.length})]}),s.jsxs("button",{className:`filter-tab process ${p==="process"?"active":""}`,onClick:()=>m("process"),children:[s.jsx(zl,{}),s.jsx("span",{className:"tab-label",children:"Process"}),s.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="process").length})]}),s.jsxs("button",{className:`filter-tab network ${p==="network"?"active":""}`,onClick:()=>m("network"),children:[s.jsx(Fl,{}),s.jsx("span",{className:"tab-label",children:"Network"}),s.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="network").length})]}),s.jsxs("button",{className:`filter-tab dns ${p==="dns"?"active":""}`,onClick:()=>m("dns"),children:[s.jsx(Bl,{}),s.jsx("span",{className:"tab-label",children:"DNS"}),s.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="dns").length})]})]})]}),s.jsx("div",{className:"events-list-modern",children:T.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx("div",{className:"empty-icon",children:s.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:s.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),s.jsx("h4",{children:e("monitor.noEvents")}),s.jsx("p",{children:e("monitor.noEventsDesc")})]}):T.map(_=>s.jsxs("div",{className:`event-card ${x===_.id?"expanded":""}`,onClick:()=>N(x===_.id?null:_.id),children:[s.jsxs("div",{className:"event-card-main",children:[s.jsx("div",{className:`event-type-icon ${_.type}`,children:D(_.type)}),s.jsxs("div",{className:"event-info",children:[s.jsxs("div",{className:"event-header-row",children:[s.jsx("span",{className:"severity-pill",style:{backgroundColor:C(_.severity).bg,color:C(_.severity).color,borderColor:C(_.severity).border},children:_.severity.toUpperCase()}),s.jsx("span",{className:"event-time",children:new Date(_.timestamp).toLocaleTimeString()})]}),W(_)]}),s.jsx("div",{className:`type-indicator ${_.type}`,children:_.type.toUpperCase()})]}),x===_.id&&s.jsx("div",{className:"event-details-panel",children:s.jsxs("div",{className:"details-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.eventType")}),s.jsx("span",{className:"detail-value",children:_.id})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.timestamp")}),s.jsx("span",{className:"detail-value",children:new Date(_.timestamp).toLocaleString()})]}),_.type==="process"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.pid")}),s.jsx("span",{className:"detail-value",children:_.data.pid||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.ppid")}),s.jsx("span",{className:"detail-value",children:_.data.ppid||"N/A"})]}),s.jsxs("div",{className:"detail-item full-width",children:[s.jsx("span",{className:"detail-label",children:e("monitor.path")}),s.jsx("span",{className:"detail-value code",children:_.data.path||"N/A"})]}),s.jsxs("div",{className:"detail-item full-width",children:[s.jsx("span",{className:"detail-label",children:e("monitor.commandLine")}),s.jsx("span",{className:"detail-value code",children:_.data.command_line||"N/A"})]})]}),_.type==="network"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.protocol")}),s.jsx("span",{className:"detail-value",children:_.data.protocol||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.state")}),s.jsx("span",{className:"detail-value",children:_.data.state||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.sourceIp")}),s.jsx("span",{className:"detail-value",children:_.data.source_ip||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.sourcePort")}),s.jsx("span",{className:"detail-value",children:_.data.source_port||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.destIp")}),s.jsx("span",{className:"detail-value",children:_.data.dest_ip||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.destPort")}),s.jsx("span",{className:"detail-value",children:_.data.dest_port||"N/A"})]})]}),_.type==="dns"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"detail-item full-width",children:[s.jsx("span",{className:"detail-label",children:e("monitor.queryName")}),s.jsx("span",{className:"detail-value",children:_.data.query_name||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.queryType")}),s.jsx("span",{className:"detail-value",children:_.data.query_type||"N/A"})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:e("monitor.ttl")}),s.jsx("span",{className:"detail-value",children:_.data.ttl||"N/A"})]}),s.jsxs("div",{className:"detail-item full-width",children:[s.jsx("span",{className:"detail-label",children:e("monitor.results")}),s.jsx("span",{className:"detail-value",children:(_.data.results||[]).join(", ")||"N/A"})]})]})]})})]},_.id))})]})]})}function n2(){const{t:e}=nt(),[t,n]=E.useState(!1),[r,l]=E.useState(""),[o,c]=E.useState(2),[u,h]=E.useState(""),[p,m]=E.useState(""),[x,N]=E.useState([]),[w,b]=E.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[j,y]=E.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[C,D]=E.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,includeProcesses:!0,includeNetwork:!0,includeDlls:!1,includeDrivers:!1,includeUsers:!0,includeSysInfo:!0,compress:!0,calculateHash:!0}),T=J=>{b(k=>k.map(z=>z.id===J?{...z,enabled:!z.enabled}:z))},W=J=>{y(k=>k.map(z=>z.id===J?{...z,enabled:!z.enabled}:z))},_=J=>{D(k=>({...k,[J]:!k[J]}))},H=J=>{if(J.target.files&&J.target.files.length>0){const k=Array.from(J.target.files);N($=>[...$,...k]);const z=k.map($=>$.path||$.name).join(`
`);h($=>$?$+`
`+z:z)}},M=J=>{N(k=>{const z=[...k];z.splice(J,1);const $=new Set;return z.forEach(te=>$.add(te.path||te.name)),h(te=>te.split(`
`).filter(se=>$.has(se)).join(`
`)),z})},R=()=>{N([]),h("")},A=async()=>{n(!0),l(e("collect.starting"));const J=w.filter(k=>k.enabled).map(k=>k.name);try{const k=await Dp.collect({sources:J,options:{workers:o,include_prefetch:C.includePrefetch,include_registry:C.includeRegistry,include_system_info:C.includeSystemInfo,include_shimcache:C.includeShimcache,include_amcache:C.includeAmcache,include_userassist:C.includeUserassist,include_tasks:C.includeTasks,include_logs:C.includeLogs,include_processes:C.includeProcesses,include_network:C.includeNetwork,include_dlls:C.includeDlls,include_drivers:C.includeDrivers,include_users:C.includeUsers,compress:C.compress,calculate_hash:C.calculateHash}});k.data.status==="completed"?l(`${e("collect.completed")}
${k.data.output_path}
Duration: ${k.data.duration}`):k.data.status==="error"?l(`${e("collect.failed")}: ${k.data.message}`):l(`${e("collect.collecting")}...
${e("collect.sources")}: ${J.join(", ")}`)}catch(k){l(`${e("collect.failed")}: ${k instanceof Error?k.message:"Unknown error"}`)}n(!1)},K=async()=>{var J;n(!0),l(e("collect.importing"));try{const k=u.split(`
`).map($=>$.trim()).filter($=>$.length>0);if(k.length===0){l(e("collect.noFilesSelected")),n(!1);return}const z=await Pp.importLogs(k);z.data.success?l(`${e("collect.importDone")}
Imported: ${z.data.files_imported}
Failed: ${z.data.files_failed}
Events: ${z.data.events_imported}`):l(`${e("collect.failed")}: ${((J=z.data.errors)==null?void 0:J.join(", "))||"Unknown error"}`)}catch(k){l(`${e("collect.failed")}: ${k instanceof Error?k.message:"Unknown error"}`)}n(!1)},V=async()=>{n(!0),l(e("collect.importing")+" "+e("collect.withAlert"));try{const J=u.split(`
`).map(z=>z.trim()).filter(z=>z.length>0);if(J.length===0){l(e("collect.noFilesSelected")),n(!1);return}const k=await Pp.importLogsWithAlert(J);if(k.data.status==="completed"){let z=`${e("collect.importDone")}
Imported: ${k.data.imported}
Failed: ${k.data.failed}
Events: ${k.data.total_events}`;k.data.alerts_generated!==void 0&&(z+=`
Alerts: ${k.data.alerts_generated}`),k.data.alert_error&&(z+=`
Alert Error: ${k.data.alert_error}`),l(z)}else l(`${e("collect.failed")}: ${k.data.message||"Unknown error"}`)}catch(J){l(`${e("collect.failed")}: ${J instanceof Error?J.message:"Unknown error"}`)}n(!1)},F=async()=>{n(!0),l(e("collect.evtx2csvConverting")||"Converting EVTX to CSV...");try{const J=u.split(`
`).map(z=>z.trim()).filter(z=>z.length>0);if(J.length===0){l(e("collect.noFilesSelected")),n(!1);return}const k=await Dp.evtx2csv(J);if(k.data){let z=`${e("collect.evtx2csvDone")||"Conversion completed"}
`;z+=`Total Events: ${k.data.total_events}
`,z+=`Successful: ${k.data.total_files-k.data.failed_files}
`,z+=`Failed: ${k.data.failed_files}
`,k.data.results&&k.data.results.length>0&&(z+=`
Files:
`,k.data.results.forEach($=>{$.error?z+=`- ${$.input_path}: ERROR - ${$.error}
`:z+=`- ${$.input_path} -> ${$.output_path} (${$.event_count} events)
`})),k.data.errors&&k.data.errors.length>0&&(z+=`
Errors:
`+k.data.errors.join(`
`)),l(z)}else l(`${e("collect.failed")}: Unknown error`)}catch(J){l(`${e("collect.failed")}: ${J instanceof Error?J.message:"Unknown error"}`)}n(!1)},U=w.reduce((J,k)=>(J[k.category]||(J[k.category]=[]),J[k.category].push(k),J),{}),re=j.reduce((J,k)=>(J[k.category]||(J[k.category]=[]),J[k.category].push(k),J),{});return s.jsxs("div",{className:"collect-page",children:[s.jsx("div",{className:"page-header",children:s.jsx("h2",{children:e("collect.title")})}),s.jsxs("div",{className:"collect-grid",children:[s.jsxs("div",{className:"collect-section main-options",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h3",{children:e("collect.oneClickCollection")}),s.jsx("p",{children:e("collect.oneClickDesc")})]}),s.jsxs("div",{className:"options-group",children:[s.jsxs("label",{className:"toggle-label",children:[s.jsx("input",{type:"checkbox",checked:C.includeSystemInfo,onChange:()=>_("includeSystemInfo")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemInfo")})]}),C.includeSystemInfo&&s.jsxs("div",{className:"sub-options",children:[s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeSysInfo,onChange:()=>_("includeSysInfo")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemInfo")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeProcesses,onChange:()=>_("includeProcesses")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemProcesses")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeNetwork,onChange:()=>_("includeNetwork")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemNetwork")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeDlls,onChange:()=>_("includeDlls")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemDlls")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeDrivers,onChange:()=>_("includeDrivers")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemDrivers")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeUsers,onChange:()=>_("includeUsers")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemUsers")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeRegistry,onChange:()=>_("includeRegistry")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemRegistry")})]}),s.jsxs("label",{className:"toggle-label sub",children:[s.jsx("input",{type:"checkbox",checked:C.includeTasks,onChange:()=>_("includeTasks")}),s.jsx("span",{className:"toggle-text",children:e("collect.systemTasks")})]})]}),s.jsxs("label",{className:"toggle-label",children:[s.jsx("input",{type:"checkbox",checked:C.includeLogs,onChange:()=>_("includeLogs")}),s.jsx("span",{className:"toggle-text",children:e("collect.windowsEventLogs")})]})]}),s.jsxs("div",{className:"performance-section",children:[s.jsx("h4",{children:e("collect.performanceSettings")}),s.jsxs("div",{className:"performance-grid",children:[s.jsxs("div",{className:"performance-item",children:[s.jsx("label",{children:e("collect.threads")}),s.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(J=>s.jsx("button",{className:o===J?"active":"",onClick:()=>c(J),children:J},J))})]}),s.jsxs("div",{className:"performance-hint",children:[s.jsx("span",{className:"hint-icon",children:"💡"}),s.jsx("span",{children:e("collect.threadHint")})]})]})]}),s.jsxs("div",{className:"compression-options",children:[s.jsxs("label",{className:"toggle-label",children:[s.jsx("input",{type:"checkbox",checked:C.compress,onChange:()=>_("compress")}),s.jsx("span",{className:"toggle-text",children:e("collect.compressOutput")})]}),s.jsxs("label",{className:"toggle-label",children:[s.jsx("input",{type:"checkbox",checked:C.calculateHash,onChange:()=>_("calculateHash")}),s.jsx("span",{className:"toggle-text",children:e("collect.calculateHash")})]})]}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{onClick:A,disabled:t,className:"btn-primary btn-collect",children:t?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"btn-spinner"}),e("collect.collecting")]}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"7 10 12 15 17 10"}),s.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),e("collect.startCollection")]})}),s.jsx("button",{onClick:K,disabled:t,className:"btn-secondary",children:e("collect.importLogsBtn")}),s.jsx("button",{onClick:V,disabled:t,className:"btn-secondary btn-import-alert",children:e("collect.importWithAlertBtn")}),s.jsx("button",{onClick:F,disabled:t,className:"btn-secondary btn-evtx2csv",children:e("collect.evtx2csvBtn")})]})]}),s.jsxs("div",{className:"collect-section",children:[s.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[s.jsx("h3",{children:e("collect.logSources")}),s.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(U).map(([J,k])=>s.jsxs("div",{className:"log-group",children:[s.jsx("div",{className:"group-header",children:J}),k.map(z=>s.jsxs("label",{className:"checkbox-label",children:[s.jsx("input",{type:"checkbox",checked:z.enabled,onChange:()=>T(z.id)}),s.jsx("span",{className:"checkbox-text",children:z.name})]},z.id))]},J))]}),s.jsxs("div",{className:"collect-section",children:[s.jsxs("div",{className:"section-header collapsible",children:[s.jsx("h3",{children:e("collect.excludedLogs")}),s.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(re).map(([J,k])=>s.jsxs("div",{className:"log-group",children:[s.jsx("div",{className:"group-header",children:e("collect.commonExcludes")}),k.map(z=>s.jsxs("label",{className:"checkbox-label exclude",children:[s.jsx("input",{type:"checkbox",checked:z.enabled,onChange:()=>W(z.id)}),s.jsx("span",{className:"checkbox-text",children:z.name})]},z.id))]},J)),s.jsxs("div",{className:"custom-exclude",children:[s.jsx("label",{children:e("collect.customExclude")}),s.jsx("input",{type:"text",value:p,onChange:J=>m(J.target.value),placeholder:e("collect.customExcludePlaceholder")})]})]}),s.jsxs("div",{className:"collect-section",children:[s.jsxs("div",{className:"section-header collapsible",children:[s.jsx("h3",{children:e("collect.customPaths")}),s.jsx("span",{className:"collapse-icon",children:"▼"})]}),s.jsxs("div",{className:"custom-path-section",children:[s.jsx("label",{children:e("collect.customPathsLabel")}),s.jsxs("div",{className:"file-selector",children:[s.jsx("input",{type:"file",id:"file-input",multiple:!0,accept:".evtx,.etl,.csv,.log",onChange:H,style:{display:"none"}}),s.jsxs("label",{htmlFor:"file-input",className:"file-select-btn",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),s.jsx("polyline",{points:"17 8 12 3 7 8"}),s.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),e("collect.selectFiles")||"Select Files"]}),x.length>0&&s.jsxs("div",{className:"selected-files",children:[s.jsxs("div",{className:"selected-files-header",children:[s.jsxs("span",{children:[x.length," ",e("collect.filesSelected")||"files selected"]}),s.jsx("button",{onClick:R,className:"clear-files-btn",children:e("collect.clearAll")||"Clear All"})]}),s.jsx("ul",{className:"file-list",children:x.map((J,k)=>s.jsxs("li",{className:"file-item",children:[s.jsx("span",{className:"file-name",children:J.name}),s.jsx("button",{onClick:()=>M(k),className:"remove-file-btn",children:"×"})]},k))})]})]}),s.jsx("textarea",{value:u,onChange:J=>h(J.target.value),placeholder:e("collect.customPathsPlaceholder"),rows:4})]})]})]}),s.jsxs("div",{className:"additional-options",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("collect.additionalArtifacts")})}),s.jsxs("div",{className:"artifacts-grid",children:[s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includePrefetch,onChange:()=>_("includePrefetch")}),s.jsx("div",{className:"artifact-icon",children:"📁"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.prefetch")}),s.jsx("span",{className:"artifact-desc",children:e("collect.prefetchDesc")})]})]}),s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includeShimcache,onChange:()=>_("includeShimcache")}),s.jsx("div",{className:"artifact-icon",children:"🔧"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.shimcache")}),s.jsx("span",{className:"artifact-desc",children:e("collect.shimcacheDesc")})]})]}),s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includeAmcache,onChange:()=>_("includeAmcache")}),s.jsx("div",{className:"artifact-icon",children:"📝"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.amcache")}),s.jsx("span",{className:"artifact-desc",children:e("collect.amcacheDesc")})]})]}),s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includeUserassist,onChange:()=>_("includeUserassist")}),s.jsx("div",{className:"artifact-icon",children:"🎯"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.userassist")}),s.jsx("span",{className:"artifact-desc",children:e("collect.userassistDesc")})]})]}),s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includeRegistry,onChange:()=>_("includeRegistry")}),s.jsx("div",{className:"artifact-icon",children:"🗄️"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.registry")}),s.jsx("span",{className:"artifact-desc",children:e("collect.registryDesc")})]})]}),s.jsxs("label",{className:"artifact-card",children:[s.jsx("input",{type:"checkbox",checked:C.includeTasks,onChange:()=>_("includeTasks")}),s.jsx("div",{className:"artifact-icon",children:"📅"}),s.jsxs("div",{className:"artifact-info",children:[s.jsx("span",{className:"artifact-name",children:e("collect.scheduledTasks")}),s.jsx("span",{className:"artifact-desc",children:e("collect.tasksDesc")})]})]})]})]}),r&&s.jsxs("div",{className:"status-panel",children:[s.jsxs("div",{className:"status-header",children:[s.jsx("span",{className:"status-icon",children:"📊"}),s.jsx("span",{children:e("collect.status")}),s.jsx("button",{className:"status-close",onClick:()=>l(""),children:"×"})]}),s.jsx("pre",{className:"status-content",children:r})]}),s.jsxs("div",{className:"cli-reference",children:[s.jsx("div",{className:"section-header",children:s.jsx("h3",{children:e("collect.cliReference")})}),s.jsx("pre",{className:"cli-code",children:`# ${e("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${o}

# ${e("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${e("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function i2(){const{t:e}=nt(),[t,n]=E.useState([]),[r,l]=E.useState([]),[o,c]=E.useState(0),[u,h]=E.useState(0),[p]=E.useState(100),[m,x]=E.useState(!1),[N,w]=E.useState(null),[b,j]=E.useState("all");E.useEffect(()=>{y(),C()},[]);const y=()=>{fetch("/api/logs/files").then(U=>U.json()).then(U=>{l(U.files||[])}).catch(console.error)},C=(U=0)=>{x(!0),w(null),fetch(`/api/logs?offset=${U}&limit=${p}`).then(re=>re.json()).then(re=>{n(re.entries||[]),c(re.total||0),h(U),x(!1)}).catch(re=>{w(re.message||e("common.error")),x(!1)})},D=()=>{C(u)},T=U=>{j(U)},W=U=>{switch(U.toLowerCase()){case"debug":return"#888";case"info":return"#00d9ff";case"warn":return"#f59e0b";case"error":return"#ef4444";case"fatal":return"#dc2626";default:return"#888"}},_=b==="all"?t:t.filter(U=>U.level.toLowerCase()===b.toLowerCase()),H=U=>U.message==="[METRICS]",M=U=>U.message==="[STARTUP]",R=U=>U.message==="[PANIC]",A=U=>{try{return new Date(U).toLocaleString()}catch{return U}},K=U=>{if(U===0)return"0 B";const re=1024,J=["B","KB","MB","GB"],k=Math.floor(Math.log(U)/Math.log(re));return parseFloat((U/Math.pow(re,k)).toFixed(2))+" "+J[k]},V=Math.ceil(o/p),F=Math.floor(u/p)+1;return s.jsxs("div",{className:"logs-page",children:[s.jsxs("div",{className:"page-header",children:[s.jsx("h2",{children:e("logs.title")}),s.jsx("button",{onClick:D,className:"btn-secondary",disabled:m,children:e(m?"common.loading":"logs.refresh")})]}),s.jsxs("div",{className:"logs-info",children:[s.jsxs("div",{className:"info-card",children:[s.jsxs("span",{className:"info-label",children:[e("logs.totalEntries"),":"]}),s.jsx("span",{className:"info-value",children:o})]}),s.jsxs("div",{className:"info-card",children:[s.jsxs("span",{className:"info-label",children:[e("logs.currentPage"),":"]}),s.jsxs("span",{className:"info-value",children:[F," / ",V]})]}),s.jsxs("div",{className:"info-card",children:[s.jsxs("span",{className:"info-label",children:[e("logs.logFiles"),":"]}),s.jsx("span",{className:"info-value",children:r.length})]})]}),s.jsx("div",{className:"logs-filters",children:s.jsxs("div",{className:"filter-group",children:[s.jsxs("span",{className:"filter-label",children:[e("logs.filterByLevel"),":"]}),s.jsx("button",{className:`filter-btn ${b==="all"?"active":""}`,onClick:()=>T("all"),children:e("logs.all")}),s.jsx("button",{className:`filter-btn ${b==="debug"?"active":""}`,onClick:()=>T("debug"),children:e("settings.debug")}),s.jsx("button",{className:`filter-btn ${b==="info"?"active":""}`,onClick:()=>T("info"),children:e("settings.info")}),s.jsx("button",{className:`filter-btn ${b==="warn"?"active":""}`,onClick:()=>T("warn"),children:e("settings.warn")}),s.jsx("button",{className:`filter-btn ${b==="error"?"active":""}`,onClick:()=>T("error"),children:e("settings.error")})]})}),s.jsxs("div",{className:"logs-files",children:[s.jsx("h3",{children:e("logs.logFiles")}),s.jsx("div",{className:"files-list",children:r.map((U,re)=>s.jsxs("div",{className:"file-item",children:[s.jsx("span",{className:"file-name",children:U.name}),s.jsx("span",{className:"file-size",children:K(U.size)}),s.jsx("span",{className:"file-time",children:new Date(U.mod_time).toLocaleString()}),U.is_main&&s.jsx("span",{className:"file-badge",children:e("logs.current")})]},re))})]}),s.jsxs("div",{className:"logs-viewer",children:[s.jsx("h3",{children:e("logs.viewer")}),N&&s.jsx("div",{className:"error-message",children:N}),s.jsx("div",{className:"logs-container",children:m?s.jsx("div",{className:"loading-state",children:e("common.loading")}):_.length===0?s.jsx("div",{className:"empty-state",children:e("logs.noLogs")}):s.jsxs("table",{className:"logs-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:e("logs.timestamp")}),s.jsx("th",{children:e("logs.level")}),s.jsx("th",{children:e("logs.message")}),s.jsx("th",{children:e("logs.details")})]})}),s.jsx("tbody",{children:_.map((U,re)=>{var J,k,z,$;return s.jsxs("tr",{className:`log-entry log-level-${U.level.toLowerCase()}`,children:[s.jsx("td",{className:"log-time",children:A(U.timestamp)}),s.jsx("td",{className:"log-level",style:{color:W(U.level)},children:U.level.toUpperCase()}),s.jsxs("td",{className:"log-message",children:[H(U)&&s.jsx("span",{className:"log-badge metrics",children:e("logs.metrics")}),M(U)&&s.jsx("span",{className:"log-badge startup",children:e("logs.startup")}),R(U)&&s.jsx("span",{className:"log-badge panic",children:e("logs.panic")}),U.message]}),s.jsxs("td",{className:"log-details",children:[U.message==="[METRICS]"&&s.jsxs("div",{className:"metrics-details",children:[s.jsxs("span",{className:"metric-item",children:["Mem Alloc: ",s.jsxs("b",{children:[(J=U.mem_alloc_mb)==null?void 0:J.toFixed(2)," MB"]})]}),s.jsxs("span",{className:"metric-item",children:["Total: ",s.jsxs("b",{children:[(k=U.mem_total_mb)==null?void 0:k.toFixed(2)," MB"]})]}),s.jsxs("span",{className:"metric-item",children:["Sys: ",s.jsxs("b",{children:[(z=U.mem_sys_mb)==null?void 0:z.toFixed(2)," MB"]})]}),s.jsxs("span",{className:"metric-item",children:["Goroutines: ",s.jsx("b",{children:U.num_goroutine})]}),s.jsxs("span",{className:"metric-item",children:["CPU: ",s.jsx("b",{children:U.num_cpu})]}),s.jsxs("span",{className:"metric-item",children:["Heap Objects: ",s.jsx("b",{children:($=U.heap_objects)==null?void 0:$.toLocaleString()})]})]}),U.message==="[API]"&&s.jsxs("div",{className:"api-details",children:[s.jsx("span",{className:"api-method",children:U.method}),s.jsx("span",{className:"api-path",children:U.path}),s.jsx("span",{className:"api-status",style:{color:U.status&&U.status>=400?"#ef4444":"#22c55e"},children:U.status}),s.jsx("span",{className:"api-latency",children:U.latency}),s.jsx("span",{className:"api-ip",children:U.client_ip})]}),U.message==="[STARTUP]"&&s.jsxs("span",{className:"startup-reason",children:["Reason: ",U.reason]}),U.message==="[PANIC]"&&s.jsxs("div",{className:"panic-details",children:[s.jsx("span",{className:"panic-error",children:U.error}),s.jsxs("span",{className:"panic-path",children:["Path: ",U.path]})]}),U.message==="[ERROR]"&&s.jsxs("div",{className:"error-details",children:[s.jsxs("span",{className:"error-module",children:["Module: ",U.module]}),s.jsx("span",{className:"error-msg",children:U.error})]})]})]},re)})})]})}),s.jsxs("div",{className:"pagination",children:[s.jsx("button",{onClick:()=>C(0),disabled:u===0||m,children:e("logs.first")}),s.jsx("button",{onClick:()=>C(Math.max(0,u-p)),disabled:u===0||m,children:e("events.previous")}),s.jsx("span",{className:"page-info",children:e("events.page",{page:F,total:V})}),s.jsx("button",{onClick:()=>C(u+p),disabled:u+p>=o||m,children:e("events.next")}),s.jsx("button",{onClick:()=>C(Math.max(0,(V-1)*p)),disabled:u+p>=o||m,children:e("logs.last")})]})]}),s.jsx("style",{children:`
        .logs-page {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .page-header h2 {
          font-size: 1.8rem;
          color: #00d9ff;
          margin: 0;
        }
        
        .logs-info {
          display: flex;
          gap: 16px;
        }
        
        .info-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 20px;
          border-radius: 8px;
          display: flex;
          gap: 8px;
        }
        
        .info-label {
          color: #888;
        }
        
        .info-value {
          color: #fff;
          font-weight: 600;
        }
        
        .logs-filters {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        
        .filter-group {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .filter-label {
          color: #888;
          margin-right: 8px;
        }
        
        .filter-btn {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        .filter-btn.active {
          background: rgba(0, 217, 255, 0.2);
          border-color: #00d9ff;
          color: #00d9ff;
        }
        
        .logs-files {
          background: rgba(255, 255, 255, 0.02);
          padding: 16px;
          border-radius: 8px;
          border: 1px solid #333;
        }
        
        .logs-files h3 {
          color: #fff;
          margin: 0 0 12px 0;
          font-size: 1rem;
        }
        
        .files-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .file-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 6px;
        }
        
        .file-name {
          color: #00d9ff;
          font-family: monospace;
          flex: 1;
        }
        
        .file-size {
          color: #888;
          font-size: 13px;
        }
        
        .file-time {
          color: #666;
          font-size: 12px;
        }
        
        .file-badge {
          background: rgba(0, 217, 255, 0.2);
          color: #00d9ff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 11px;
        }
        
        .logs-viewer {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border: 1px solid #333;
          overflow: hidden;
        }
        
        .logs-viewer h3 {
          color: #fff;
          margin: 0;
          padding: 16px;
          border-bottom: 1px solid #333;
          font-size: 1rem;
        }
        
        .logs-container {
          flex: 1;
          overflow: auto;
          max-height: 500px;
        }
        
        .logs-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }
        
        .logs-table th {
          background: rgba(255, 255, 255, 0.05);
          color: #888;
          text-align: left;
          padding: 10px 12px;
          font-weight: 500;
          position: sticky;
          top: 0;
        }
        
        .logs-table td {
          padding: 8px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .log-time {
          color: #888;
          font-family: monospace;
          white-space: nowrap;
          width: 180px;
        }
        
        .log-level {
          font-weight: 600;
          width: 80px;
        }
        
        .log-message {
          color: #e0e0e0;
          font-family: monospace;
          word-break: break-word;
        }
        
        .log-details {
          color: #888;
          font-size: 12px;
          font-family: monospace;
        }
        
        .log-badge {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          margin-right: 6px;
        }
        
        .log-badge.metrics {
          background: rgba(139, 92, 246, 0.2);
          color: #a78bfa;
        }
        
        .log-badge.startup {
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }
        
        .log-badge.panic {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .metrics-info {
          color: #a78bfa;
        }
        
        .api-info {
          color: #888;
        }
        
        .error-info {
          color: #ef4444;
        }
        
        .metrics-details {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .metric-item {
          color: #a78bfa;
          font-size: 11px;
          background: rgba(139, 92, 246, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .metric-item b {
          color: #c4b5fd;
        }
        
        .api-details {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
        }
        
        .api-method {
          color: #22c55e;
          font-weight: 600;
          font-size: 11px;
          background: rgba(34, 197, 94, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .api-path {
          color: #60a5fa;
          font-size: 11px;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .api-status {
          font-weight: 600;
          font-size: 11px;
        }
        
        .api-latency {
          color: #888;
          font-size: 11px;
        }
        
        .api-ip {
          color: #666;
          font-size: 10px;
        }
        
        .startup-reason {
          color: #4ade80;
          font-size: 12px;
        }
        
        .panic-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .panic-error {
          color: #ef4444;
          font-size: 12px;
          font-weight: 500;
        }
        
        .panic-path {
          color: #888;
          font-size: 11px;
        }
        
        .error-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .error-module {
          color: #f59e0b;
          font-size: 11px;
        }
        
        .error-msg {
          color: #ef4444;
          font-size: 12px;
        }
        
        .log-entry:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .pagination {
          display: flex;
          gap: 8px;
          align-items: center;
          padding: 12px 16px;
          border-top: 1px solid #333;
          background: rgba(255, 255, 255, 0.02);
        }
        
        .pagination button {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 6px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .pagination button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }
        
        .pagination button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .page-info {
          color: #888;
          margin: 0 auto;
        }
        
        .loading-state, .empty-state {
          padding: 40px;
          text-align: center;
          color: #888;
        }
        
        .error-message {
          padding: 12px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 6px;
          color: #ef4444;
          margin: 16px;
        }
        
        .btn-secondary {
          padding: 10px 20px;
          background: transparent;
          border: 1px solid #333;
          border-radius: 8px;
          color: #888;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover:not(:disabled) {
          border-color: #00d9ff;
          color: #00d9ff;
        }
      `})]})}function r2(){const{t:e}=nt();return s.jsxs("nav",{className:"sidebar",children:[s.jsx("h1",{children:e("app.title")}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx(Xe,{to:"/",children:e("nav.dashboard")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/events",children:e("nav.events")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/alerts",children:e("nav.alerts")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/timeline",children:e("nav.timeline")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/collect",children:e("nav.collect")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/analyze",children:e("nav.analyze")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/correlation",children:e("nav.correlation")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/multi",children:e("nav.multi")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/query",children:e("nav.query")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/ueba",children:e("nav.ueba")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/suppress",children:e("nav.suppress")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/live",children:e("nav.live")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/monitor",children:e("nav.monitor")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/persistence",children:e("nav.persistence")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/reports",children:e("nav.reports")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/forensics",children:e("nav.forensics")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/system-info",children:e("nav.systemInfo")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/rules",children:e("nav.rules")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/metrics",children:e("nav.metrics")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/logs",children:e("nav.logs")})}),s.jsx("li",{children:s.jsx(Xe,{to:"/settings",children:e("nav.settings")})})]})]})}function a2(){return s.jsxs(s.Fragment,{children:[s.jsx(t0,{}),s.jsx(r2,{}),s.jsx("main",{className:"content",children:s.jsxs(Fb,{children:[s.jsx(Ye,{path:"/",element:s.jsx(w_,{})}),s.jsx(Ye,{path:"/events",element:s.jsx(k_,{})}),s.jsx(Ye,{path:"/events/:id",element:s.jsx(S_,{})}),s.jsx(Ye,{path:"/alerts",element:s.jsx(C_,{})}),s.jsx(Ye,{path:"/alerts/:id",element:s.jsx(E_,{})}),s.jsx(Ye,{path:"/timeline",element:s.jsx(R_,{})}),s.jsx(Ye,{path:"/collect",element:s.jsx(n2,{})}),s.jsx(Ye,{path:"/analyze",element:s.jsx(B_,{})}),s.jsx(Ye,{path:"/correlation",element:s.jsx(U_,{})}),s.jsx(Ye,{path:"/multi",element:s.jsx(W_,{})}),s.jsx(Ye,{path:"/query",element:s.jsx(H_,{})}),s.jsx(Ye,{path:"/ueba",element:s.jsx(Q_,{})}),s.jsx(Ye,{path:"/suppress",element:s.jsx(G_,{})}),s.jsx(Ye,{path:"/live",element:s.jsx(J_,{})}),s.jsx(Ye,{path:"/monitor",element:s.jsx(s2,{})}),s.jsx(Ye,{path:"/persistence",element:s.jsx(O_,{})}),s.jsx(Ye,{path:"/reports",element:s.jsx(D_,{})}),s.jsx(Ye,{path:"/forensics",element:s.jsx(P_,{})}),s.jsx(Ye,{path:"/system-info",element:s.jsx(A_,{})}),s.jsx(Ye,{path:"/rules",element:s.jsx(T_,{})}),s.jsx(Ye,{path:"/settings",element:s.jsx(M_,{})}),s.jsx(Ye,{path:"/metrics",element:s.jsx(L_,{})}),s.jsx(Ye,{path:"/logs",element:s.jsx(i2,{})})]})})]})}function l2(){return s.jsx(e0,{children:s.jsx("div",{className:"app",children:s.jsx(a2,{})})})}Yy.createRoot(document.getElementById("root")).render(s.jsx(ng.StrictMode,{children:s.jsx(qb,{children:s.jsx(l2,{})})}));
