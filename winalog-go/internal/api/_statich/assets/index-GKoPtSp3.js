var Ly=Object.defineProperty;var Oy=(t,e,s)=>e in t?Ly(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var be=(t,e,s)=>Oy(t,typeof e!="symbol"?e+"":e,s);function zy(t,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in t)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(t,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();function sg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sd={exports:{}},Dr={},nd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function Iy(){if(Kf)return Re;Kf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function N(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function y(M,Z,ue){this.props=M,this.context=Z,this.refs=j,this.updater=ue||w}y.prototype.isReactComponent={},y.prototype.setState=function(M,Z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Z,"setState")},y.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function C(){}C.prototype=y.prototype;function R(M,Z,ue){this.props=M,this.context=Z,this.refs=j,this.updater=ue||w}var T=R.prototype=new C;T.constructor=R,b(T,y.prototype),T.isPureReactComponent=!0;var W=Array.isArray,_=Object.prototype.hasOwnProperty,H={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function P(M,Z,ue){var pe,Ne={},ee=null,ce=null;if(Z!=null)for(pe in Z.ref!==void 0&&(ce=Z.ref),Z.key!==void 0&&(ee=""+Z.key),Z)_.call(Z,pe)&&!L.hasOwnProperty(pe)&&(Ne[pe]=Z[pe]);var fe=arguments.length-2;if(fe===1)Ne.children=ue;else if(1<fe){for(var Ee=Array(fe),Me=0;Me<fe;Me++)Ee[Me]=arguments[Me+2];Ne.children=Ee}if(M&&M.defaultProps)for(pe in fe=M.defaultProps,fe)Ne[pe]===void 0&&(Ne[pe]=fe[pe]);return{$$typeof:t,type:M,key:ee,ref:ce,props:Ne,_owner:H.current}}function A(M,Z){return{$$typeof:t,type:M.type,key:Z,ref:M.ref,props:M.props,_owner:M._owner}}function K(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function q(M){var Z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ue){return Z[ue]})}var I=/\/+/g;function $(M,Z){return typeof M=="object"&&M!==null&&M.key!=null?q(""+M.key):Z.toString(36)}function U(M,Z,ue,pe,Ne){var ee=typeof M;(ee==="undefined"||ee==="boolean")&&(M=null);var ce=!1;if(M===null)ce=!0;else switch(ee){case"string":case"number":ce=!0;break;case"object":switch(M.$$typeof){case t:case e:ce=!0}}if(ce)return ce=M,Ne=Ne(ce),M=pe===""?"."+$(ce,0):pe,W(Ne)?(ue="",M!=null&&(ue=M.replace(I,"$&/")+"/"),U(Ne,Z,ue,"",function(Me){return Me})):Ne!=null&&(K(Ne)&&(Ne=A(Ne,ue+(!Ne.key||ce&&ce.key===Ne.key?"":(""+Ne.key).replace(I,"$&/")+"/")+M)),Z.push(Ne)),1;if(ce=0,pe=pe===""?".":pe+":",W(M))for(var fe=0;fe<M.length;fe++){ee=M[fe];var Ee=pe+$(ee,fe);ce+=U(ee,Z,ue,Ee,Ne)}else if(Ee=N(M),typeof Ee=="function")for(M=Ee.call(M),fe=0;!(ee=M.next()).done;)ee=ee.value,Ee=pe+$(ee,fe++),ce+=U(ee,Z,ue,Ee,Ne);else if(ee==="object")throw Z=String(M),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ce}function X(M,Z,ue){if(M==null)return M;var pe=[],Ne=0;return U(M,pe,"","",function(ee){return Z.call(ue,ee,Ne++)}),pe}function k(M){if(M._status===-1){var Z=M._result;Z=Z(),Z.then(function(ue){(M._status===0||M._status===-1)&&(M._status=1,M._result=ue)},function(ue){(M._status===0||M._status===-1)&&(M._status=2,M._result=ue)}),M._status===-1&&(M._status=0,M._result=Z)}if(M._status===1)return M._result.default;throw M._result}var z={current:null},B={transition:null},te={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:B,ReactCurrentOwner:H};function se(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:X,forEach:function(M,Z,ue){X(M,function(){Z.apply(this,arguments)},ue)},count:function(M){var Z=0;return X(M,function(){Z++}),Z},toArray:function(M){return X(M,function(Z){return Z})||[]},only:function(M){if(!K(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Re.Component=y,Re.Fragment=s,Re.Profiler=l,Re.PureComponent=R,Re.StrictMode=r,Re.Suspense=h,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Re.act=se,Re.cloneElement=function(M,Z,ue){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var pe=b({},M.props),Ne=M.key,ee=M.ref,ce=M._owner;if(Z!=null){if(Z.ref!==void 0&&(ee=Z.ref,ce=H.current),Z.key!==void 0&&(Ne=""+Z.key),M.type&&M.type.defaultProps)var fe=M.type.defaultProps;for(Ee in Z)_.call(Z,Ee)&&!L.hasOwnProperty(Ee)&&(pe[Ee]=Z[Ee]===void 0&&fe!==void 0?fe[Ee]:Z[Ee])}var Ee=arguments.length-2;if(Ee===1)pe.children=ue;else if(1<Ee){fe=Array(Ee);for(var Me=0;Me<Ee;Me++)fe[Me]=arguments[Me+2];pe.children=fe}return{$$typeof:t,type:M.type,key:Ne,ref:ee,props:pe,_owner:ce}},Re.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:o,_context:M},M.Consumer=M},Re.createElement=P,Re.createFactory=function(M){var Z=P.bind(null,M);return Z.type=M,Z},Re.createRef=function(){return{current:null}},Re.forwardRef=function(M){return{$$typeof:u,render:M}},Re.isValidElement=K,Re.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:k}},Re.memo=function(M,Z){return{$$typeof:p,type:M,compare:Z===void 0?null:Z}},Re.startTransition=function(M){var Z=B.transition;B.transition={};try{M()}finally{B.transition=Z}},Re.unstable_act=se,Re.useCallback=function(M,Z){return z.current.useCallback(M,Z)},Re.useContext=function(M){return z.current.useContext(M)},Re.useDebugValue=function(){},Re.useDeferredValue=function(M){return z.current.useDeferredValue(M)},Re.useEffect=function(M,Z){return z.current.useEffect(M,Z)},Re.useId=function(){return z.current.useId()},Re.useImperativeHandle=function(M,Z,ue){return z.current.useImperativeHandle(M,Z,ue)},Re.useInsertionEffect=function(M,Z){return z.current.useInsertionEffect(M,Z)},Re.useLayoutEffect=function(M,Z){return z.current.useLayoutEffect(M,Z)},Re.useMemo=function(M,Z){return z.current.useMemo(M,Z)},Re.useReducer=function(M,Z,ue){return z.current.useReducer(M,Z,ue)},Re.useRef=function(M){return z.current.useRef(M)},Re.useState=function(M){return z.current.useState(M)},Re.useSyncExternalStore=function(M,Z,ue){return z.current.useSyncExternalStore(M,Z,ue)},Re.useTransition=function(){return z.current.useTransition()},Re.version="18.3.1",Re}var Xf;function qd(){return Xf||(Xf=1,nd.exports=Iy()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Fy(){if(Gf)return Dr;Gf=1;var t=qd(),e=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var m,x={},N=null,w=null;p!==void 0&&(N=""+p),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)r.call(h,m)&&!o.hasOwnProperty(m)&&(x[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)x[m]===void 0&&(x[m]=h[m]);return{$$typeof:e,type:u,key:N,ref:w,props:x,_owner:l.current}}return Dr.Fragment=s,Dr.jsx=c,Dr.jsxs=c,Dr}var Jf;function By(){return Jf||(Jf=1,sd.exports=Fy()),sd.exports}var n=By(),E=qd();const ng=sg(E),$y=zy({__proto__:null,default:ng},[E]);var wl={},id={exports:{}},Mt={},rd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function Wy(){return Zf||(Zf=1,(function(t){function e(B,te){var se=B.length;B.push(te);e:for(;0<se;){var M=se-1>>>1,Z=B[M];if(0<l(Z,te))B[M]=te,B[se]=Z,se=M;else break e}}function s(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var te=B[0],se=B.pop();if(se!==te){B[0]=se;e:for(var M=0,Z=B.length,ue=Z>>>1;M<ue;){var pe=2*(M+1)-1,Ne=B[pe],ee=pe+1,ce=B[ee];if(0>l(Ne,se))ee<Z&&0>l(ce,Ne)?(B[M]=ce,B[ee]=se,M=ee):(B[M]=Ne,B[pe]=se,M=pe);else if(ee<Z&&0>l(ce,se))B[M]=ce,B[ee]=se,M=ee;else break e}}return te}function l(B,te){var se=B.sortIndex-te.sortIndex;return se!==0?se:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],m=1,x=null,N=3,w=!1,b=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(B){for(var te=s(p);te!==null;){if(te.callback===null)r(p);else if(te.startTime<=B)r(p),te.sortIndex=te.expirationTime,e(h,te);else break;te=s(p)}}function W(B){if(j=!1,T(B),!b)if(s(h)!==null)b=!0,k(_);else{var te=s(p);te!==null&&z(W,te.startTime-B)}}function _(B,te){b=!1,j&&(j=!1,C(P),P=-1),w=!0;var se=N;try{for(T(te),x=s(h);x!==null&&(!(x.expirationTime>te)||B&&!q());){var M=x.callback;if(typeof M=="function"){x.callback=null,N=x.priorityLevel;var Z=M(x.expirationTime<=te);te=t.unstable_now(),typeof Z=="function"?x.callback=Z:x===s(h)&&r(h),T(te)}else r(h);x=s(h)}if(x!==null)var ue=!0;else{var pe=s(p);pe!==null&&z(W,pe.startTime-te),ue=!1}return ue}finally{x=null,N=se,w=!1}}var H=!1,L=null,P=-1,A=5,K=-1;function q(){return!(t.unstable_now()-K<A)}function I(){if(L!==null){var B=t.unstable_now();K=B;var te=!0;try{te=L(!0,B)}finally{te?$():(H=!1,L=null)}}else H=!1}var $;if(typeof R=="function")$=function(){R(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,X=U.port2;U.port1.onmessage=I,$=function(){X.postMessage(null)}}else $=function(){y(I,0)};function k(B){L=B,H||(H=!0,$())}function z(B,te){P=y(function(){B(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){b||w||(b=!0,k(_))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return s(h)},t.unstable_next=function(B){switch(N){case 1:case 2:case 3:var te=3;break;default:te=N}var se=N;N=te;try{return B()}finally{N=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=N;N=B;try{return te()}finally{N=se}},t.unstable_scheduleCallback=function(B,te,se){var M=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?M+se:M):se=M,B){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=se+Z,B={id:m++,callback:te,priorityLevel:B,startTime:se,expirationTime:Z,sortIndex:-1},se>M?(B.sortIndex=se,e(p,B),s(h)===null&&B===s(p)&&(j?(C(P),P=-1):j=!0,z(W,se-M))):(B.sortIndex=Z,e(h,B),b||w||(b=!0,k(_))),B},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(B){var te=N;return function(){var se=N;N=te;try{return B.apply(this,arguments)}finally{N=se}}}})(ad)),ad}var ep;function Uy(){return ep||(ep=1,rd.exports=Wy()),rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Hy(){if(tp)return Mt;tp=1;var t=qd(),e=Uy();function s(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function o(i,a){c(i,a),c(i+"Capture",a)}function c(i,a){for(l[i]=a,i=0;i<a.length;i++)r.add(a[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function N(i){return h.call(x,i)?!0:h.call(m,i)?!1:p.test(i)?x[i]=!0:(m[i]=!0,!1)}function w(i,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,a,d,f){if(a===null||typeof a>"u"||w(i,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function j(i,a,d,f,g,v,S){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=i,this.type=a,this.sanitizeURL=v,this.removeEmptyString=S}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new j(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new j(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new j(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new j(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new j(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new j(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new j(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new j(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new j(i,5,!1,i.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(C,R);y[a]=new j(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(C,R);y[a]=new j(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(C,R);y[a]=new j(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!0,!0)});function T(i,a,d,f){var g=y.hasOwnProperty(a)?y[a]:null;(g!==null?g.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(b(a,d,g,f)&&(d=null),f||g===null?N(a)&&(d===null?i.removeAttribute(a):i.setAttribute(a,""+d)):g.mustUseProperty?i[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,f=g.attributeNamespace,d===null?i.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,f?i.setAttributeNS(f,a,d):i.setAttribute(a,d))))}var W=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),H=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),q=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.for("react.offscreen"),B=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,M;function Z(i){if(M===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);M=a&&a[1]||""}return`
`+M+i}var ue=!1;function pe(i,a){if(!i||ue)return"";ue=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(G){var f=G}Reflect.construct(i,[],a)}else{try{a.call()}catch(G){f=G}i.call(a.prototype)}else{try{throw Error()}catch(G){f=G}i()}}catch(G){if(G&&f&&typeof G.stack=="string"){for(var g=G.stack.split(`
`),v=f.stack.split(`
`),S=g.length-1,D=v.length-1;1<=S&&0<=D&&g[S]!==v[D];)D--;for(;1<=S&&0<=D;S--,D--)if(g[S]!==v[D]){if(S!==1||D!==1)do if(S--,D--,0>D||g[S]!==v[D]){var O=`
`+g[S].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=S&&0<=D);break}}}finally{ue=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?Z(i):""}function Ne(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=pe(i.type,!1),i;case 11:return i=pe(i.type.render,!1),i;case 1:return i=pe(i.type,!0),i;default:return""}}function ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case L:return"Fragment";case H:return"Portal";case A:return"Profiler";case P:return"StrictMode";case $:return"Suspense";case U:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case q:return(i.displayName||"Context")+".Consumer";case K:return(i._context.displayName||"Context")+".Provider";case I:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case X:return a=i.displayName||null,a!==null?a:ee(i.type)||"Memo";case k:a=i._payload,i=i._init;try{return ee(i(a))}catch{}}return null}function ce(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(a);case 8:return a===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function fe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ee(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Me(i){var a=Ee(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),f=""+i[a];if(!i.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,v=d.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(S){f=""+S,v.call(this,S)}}),Object.defineProperty(i,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(S){f=""+S},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Vt(i){i._valueTracker||(i._valueTracker=Me(i))}function vs(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return i&&(f=Ee(i)?i.checked?"true":"false":i.value),i=f,i!==d?(a.setValue(i),!0):!1}function xe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function qt(i,a){var d=a.checked;return se({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function oi(i,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=fe(a.value!=null?a.value:d),i._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Ks(i,a){a=a.checked,a!=null&&T(i,"checked",a,!1)}function _n(i,a){Ks(i,a);var d=fe(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Sn(i,a.type,d):a.hasOwnProperty("defaultValue")&&Sn(i,a.type,fe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function ci(i,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,d||a===i.value||(i.value=a),i.defaultValue=a}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function Sn(i,a,d){(a!=="number"||xe(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var is=Array.isArray;function rs(i,a,d,f){if(i=i.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<i.length;d++)g=a.hasOwnProperty("$"+i[d].value),i[d].selected!==g&&(i[d].selected=g),g&&f&&(i[d].defaultSelected=!0)}else{for(d=""+fe(d),a=null,g=0;g<i.length;g++){if(i[g].value===d){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function Cn(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(s(91));return se({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function di(i,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(s(92));if(is(d)){if(1<d.length)throw Error(s(93));d=d[0]}a=d}a==null&&(a=""),d=a}i._wrapperState={initialValue:fe(d)}}function En(i,a){var d=fe(a.value),f=fe(a.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),a.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),f!=null&&(i.defaultValue=""+f)}function re(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?de(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var nt,as=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,g){MSApp.execUnsafeLocalFunction(function(){return i(a,d,f,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(nt=nt||document.createElement("div"),nt.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=nt.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function ys(i,a){if(a){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=a;return}}i.textContent=a}var Ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ds).forEach(function(i){ze.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Ds[a]=Ds[i]})});function Et(i,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Ds.hasOwnProperty(i)&&Ds[i]?(""+a).trim():a+"px"}function Rn(i,a){i=i.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,g=Et(d,a[d],f);d==="float"&&(d="cssFloat"),f?i.setProperty(d,g):i[d]=g}}var ma=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(i,a){if(a){if(ma[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(s(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(s(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(s(61))}if(a.style!=null&&typeof a.style!="object")throw Error(s(62))}}function hi(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function V(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var me=null,Le=null,Yt=null;function bs(i){if(i=mr(i)){if(typeof me!="function")throw Error(s(280));var a=i.stateNode;a&&(a=Ia(a),me(i.stateNode,i.type,a))}}function Yi(i){Le?Yt?Yt.push(i):Yt=[i]:Le=i}function Dn(){if(Le){var i=Le,a=Yt;if(Yt=Le=null,bs(i),a)for(i=0;i<a.length;i++)bs(a[i])}}function Ps(i,a){return i(a)}function Ft(){}var mt=!1;function _t(i,a,d){if(mt)return i(a,d);mt=!0;try{return Ps(i,a,d)}finally{mt=!1,(Le!==null||Yt!==null)&&(Ft(),Dn())}}function Qi(i,a){var d=i.stateNode;if(d===null)return null;var f=Ia(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(s(231,a,typeof d));return d}var bo=!1;if(u)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){bo=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{bo=!1}function $x(i,a,d,f,g,v,S,D,O){var G=Array.prototype.slice.call(arguments,3);try{a.apply(d,G)}catch(ie){this.onError(ie)}}var Xi=!1,ga=null,xa=!1,jo=null,Wx={onError:function(i){Xi=!0,ga=i}};function Ux(i,a,d,f,g,v,S,D,O){Xi=!1,ga=null,$x.apply(Wx,arguments)}function Hx(i,a,d,f,g,v,S,D,O){if(Ux.apply(this,arguments),Xi){if(Xi){var G=ga;Xi=!1,ga=null}else throw Error(s(198));xa||(xa=!0,jo=G)}}function Pn(i){var a=i,d=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(d=a.return),i=a.return;while(i)}return a.tag===3?d:null}function xu(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function vu(i){if(Pn(i)!==i)throw Error(s(188))}function Vx(i){var a=i.alternate;if(!a){if(a=Pn(i),a===null)throw Error(s(188));return a!==i?null:i}for(var d=i,f=a;;){var g=d.return;if(g===null)break;var v=g.alternate;if(v===null){if(f=g.return,f!==null){d=f;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===d)return vu(g),i;if(v===f)return vu(g),a;v=v.sibling}throw Error(s(188))}if(d.return!==f.return)d=g,f=v;else{for(var S=!1,D=g.child;D;){if(D===d){S=!0,d=g,f=v;break}if(D===f){S=!0,f=g,d=v;break}D=D.sibling}if(!S){for(D=v.child;D;){if(D===d){S=!0,d=v,f=g;break}if(D===f){S=!0,f=v,d=g;break}D=D.sibling}if(!S)throw Error(s(189))}}if(d.alternate!==f)throw Error(s(190))}if(d.tag!==3)throw Error(s(188));return d.stateNode.current===d?i:a}function yu(i){return i=Vx(i),i!==null?bu(i):null}function bu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=bu(i);if(a!==null)return a;i=i.sibling}return null}var ju=e.unstable_scheduleCallback,Nu=e.unstable_cancelCallback,qx=e.unstable_shouldYield,Yx=e.unstable_requestPaint,Je=e.unstable_now,Qx=e.unstable_getCurrentPriorityLevel,No=e.unstable_ImmediatePriority,wu=e.unstable_UserBlockingPriority,va=e.unstable_NormalPriority,Kx=e.unstable_LowPriority,ku=e.unstable_IdlePriority,ya=null,js=null;function Xx(i){if(js&&typeof js.onCommitFiberRoot=="function")try{js.onCommitFiberRoot(ya,i,void 0,(i.current.flags&128)===128)}catch{}}var ls=Math.clz32?Math.clz32:Zx,Gx=Math.log,Jx=Math.LN2;function Zx(i){return i>>>=0,i===0?32:31-(Gx(i)/Jx|0)|0}var ba=64,ja=4194304;function Gi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Na(i,a){var d=i.pendingLanes;if(d===0)return 0;var f=0,g=i.suspendedLanes,v=i.pingedLanes,S=d&268435455;if(S!==0){var D=S&~g;D!==0?f=Gi(D):(v&=S,v!==0&&(f=Gi(v)))}else S=d&~g,S!==0?f=Gi(S):v!==0&&(f=Gi(v));if(f===0)return 0;if(a!==0&&a!==f&&(a&g)===0&&(g=f&-f,v=a&-a,g>=v||g===16&&(v&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=f;0<a;)d=31-ls(a),g=1<<d,f|=i[d],a&=~g;return f}function ev(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(i,a){for(var d=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,v=i.pendingLanes;0<v;){var S=31-ls(v),D=1<<S,O=g[S];O===-1?((D&d)===0||(D&f)!==0)&&(g[S]=ev(D,a)):O<=a&&(i.expiredLanes|=D),v&=~D}}function wo(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function _u(){var i=ba;return ba<<=1,(ba&4194240)===0&&(ba=64),i}function ko(i){for(var a=[],d=0;31>d;d++)a.push(i);return a}function Ji(i,a,d){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ls(a),i[a]=d}function sv(i,a){var d=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<d;){var g=31-ls(d),v=1<<g;a[g]=0,f[g]=-1,i[g]=-1,d&=~v}}function _o(i,a){var d=i.entangledLanes|=a;for(i=i.entanglements;d;){var f=31-ls(d),g=1<<f;g&a|i[f]&a&&(i[f]|=a),d&=~g}}var Ie=0;function Su(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cu,So,Eu,Ru,Du,Co=!1,wa=[],Xs=null,Gs=null,Js=null,Zi=new Map,er=new Map,Zs=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(i,a){switch(i){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":Zi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(a.pointerId)}}function tr(i,a,d,f,g,v){return i===null||i.nativeEvent!==v?(i={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:v,targetContainers:[g]},a!==null&&(a=mr(a),a!==null&&So(a)),i):(i.eventSystemFlags|=f,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function iv(i,a,d,f,g){switch(a){case"focusin":return Xs=tr(Xs,i,a,d,f,g),!0;case"dragenter":return Gs=tr(Gs,i,a,d,f,g),!0;case"mouseover":return Js=tr(Js,i,a,d,f,g),!0;case"pointerover":var v=g.pointerId;return Zi.set(v,tr(Zi.get(v)||null,i,a,d,f,g)),!0;case"gotpointercapture":return v=g.pointerId,er.set(v,tr(er.get(v)||null,i,a,d,f,g)),!0}return!1}function Au(i){var a=An(i.target);if(a!==null){var d=Pn(a);if(d!==null){if(a=d.tag,a===13){if(a=xu(d),a!==null){i.blockedOn=a,Du(i.priority,function(){Eu(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ka(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var d=Ro(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var f=new d.constructor(d.type,d);fi=f,d.target.dispatchEvent(f),fi=null}else return a=mr(d),a!==null&&So(a),i.blockedOn=d,!1;a.shift()}return!0}function Tu(i,a,d){ka(i)&&d.delete(a)}function rv(){Co=!1,Xs!==null&&ka(Xs)&&(Xs=null),Gs!==null&&ka(Gs)&&(Gs=null),Js!==null&&ka(Js)&&(Js=null),Zi.forEach(Tu),er.forEach(Tu)}function sr(i,a){i.blockedOn===a&&(i.blockedOn=null,Co||(Co=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rv)))}function nr(i){function a(g){return sr(g,i)}if(0<wa.length){sr(wa[0],i);for(var d=1;d<wa.length;d++){var f=wa[d];f.blockedOn===i&&(f.blockedOn=null)}}for(Xs!==null&&sr(Xs,i),Gs!==null&&sr(Gs,i),Js!==null&&sr(Js,i),Zi.forEach(a),er.forEach(a),d=0;d<Zs.length;d++)f=Zs[d],f.blockedOn===i&&(f.blockedOn=null);for(;0<Zs.length&&(d=Zs[0],d.blockedOn===null);)Au(d),d.blockedOn===null&&Zs.shift()}var pi=W.ReactCurrentBatchConfig,_a=!0;function av(i,a,d,f){var g=Ie,v=pi.transition;pi.transition=null;try{Ie=1,Eo(i,a,d,f)}finally{Ie=g,pi.transition=v}}function lv(i,a,d,f){var g=Ie,v=pi.transition;pi.transition=null;try{Ie=4,Eo(i,a,d,f)}finally{Ie=g,pi.transition=v}}function Eo(i,a,d,f){if(_a){var g=Ro(i,a,d,f);if(g===null)qo(i,a,f,Sa,d),Pu(i,f);else if(iv(g,i,a,d,f))f.stopPropagation();else if(Pu(i,f),a&4&&-1<nv.indexOf(i)){for(;g!==null;){var v=mr(g);if(v!==null&&Cu(v),v=Ro(i,a,d,f),v===null&&qo(i,a,f,Sa,d),v===g)break;g=v}g!==null&&f.stopPropagation()}else qo(i,a,f,null,d)}}var Sa=null;function Ro(i,a,d,f){if(Sa=null,i=V(f),i=An(i),i!==null)if(a=Pn(i),a===null)i=null;else if(d=a.tag,d===13){if(i=xu(a),i!==null)return i;i=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return Sa=i,null}function Mu(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case No:return 1;case wu:return 4;case va:case Kx:return 16;case ku:return 536870912;default:return 16}default:return 16}}var en=null,Do=null,Ca=null;function Lu(){if(Ca)return Ca;var i,a=Do,d=a.length,f,g="value"in en?en.value:en.textContent,v=g.length;for(i=0;i<d&&a[i]===g[i];i++);var S=d-i;for(f=1;f<=S&&a[d-f]===g[v-f];f++);return Ca=g.slice(i,1<f?1-f:void 0)}function Ea(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ra(){return!0}function Ou(){return!1}function Bt(i){function a(d,f,g,v,S){this._reactName=d,this._targetInst=g,this.type=f,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var D in i)i.hasOwnProperty(D)&&(d=i[D],this[D]=d?d(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ra:Ou,this.isPropagationStopped=Ou,this}return se(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),a}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Bt(mi),ir=se({},mi,{view:0,detail:0}),ov=Bt(ir),Ao,To,rr,Da=se({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==rr&&(rr&&i.type==="mousemove"?(Ao=i.screenX-rr.screenX,To=i.screenY-rr.screenY):To=Ao=0,rr=i),Ao)},movementY:function(i){return"movementY"in i?i.movementY:To}}),zu=Bt(Da),cv=se({},Da,{dataTransfer:0}),dv=Bt(cv),uv=se({},ir,{relatedTarget:0}),Mo=Bt(uv),hv=se({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Bt(hv),pv=se({},mi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),mv=Bt(pv),gv=se({},mi,{data:0}),Iu=Bt(gv),xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=yv[i])?!!a[i]:!1}function Lo(){return bv}var jv=se({},ir,{key:function(i){if(i.key){var a=xv[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Ea(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vv[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(i){return i.type==="keypress"?Ea(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ea(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Nv=Bt(jv),wv=se({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Bt(wv),kv=se({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),_v=Bt(kv),Sv=se({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Bt(Sv),Ev=se({},Da,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Bt(Ev),Dv=[9,13,27,32],Oo=u&&"CompositionEvent"in window,ar=null;u&&"documentMode"in document&&(ar=document.documentMode);var Pv=u&&"TextEvent"in window&&!ar,Bu=u&&(!Oo||ar&&8<ar&&11>=ar),$u=" ",Wu=!1;function Uu(i,a){switch(i){case"keyup":return Dv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var gi=!1;function Av(i,a){switch(i){case"compositionend":return Hu(a);case"keypress":return a.which!==32?null:(Wu=!0,$u);case"textInput":return i=a.data,i===$u&&Wu?null:i;default:return null}}function Tv(i,a){if(gi)return i==="compositionend"||!Oo&&Uu(i,a)?(i=Lu(),Ca=Do=en=null,gi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Bu&&a.locale!=="ko"?null:a.data;default:return null}}var Mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!Mv[i.type]:a==="textarea"}function qu(i,a,d,f){Yi(f),a=La(a,"onChange"),0<a.length&&(d=new Po("onChange","change",null,d,f),i.push({event:d,listeners:a}))}var lr=null,or=null;function Lv(i){dh(i,0)}function Pa(i){var a=ji(i);if(vs(a))return i}function Ov(i,a){if(i==="change")return a}var Yu=!1;if(u){var zo;if(u){var Io="oninput"in document;if(!Io){var Qu=document.createElement("div");Qu.setAttribute("oninput","return;"),Io=typeof Qu.oninput=="function"}zo=Io}else zo=!1;Yu=zo&&(!document.documentMode||9<document.documentMode)}function Ku(){lr&&(lr.detachEvent("onpropertychange",Xu),or=lr=null)}function Xu(i){if(i.propertyName==="value"&&Pa(or)){var a=[];qu(a,or,i,V(i)),_t(Lv,a)}}function zv(i,a,d){i==="focusin"?(Ku(),lr=a,or=d,lr.attachEvent("onpropertychange",Xu)):i==="focusout"&&Ku()}function Iv(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Pa(or)}function Fv(i,a){if(i==="click")return Pa(a)}function Bv(i,a){if(i==="input"||i==="change")return Pa(a)}function $v(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var os=typeof Object.is=="function"?Object.is:$v;function cr(i,a){if(os(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var d=Object.keys(i),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var g=d[f];if(!h.call(a,g)||!os(i[g],a[g]))return!1}return!0}function Gu(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ju(i,a){var d=Gu(i);i=0;for(var f;d;){if(d.nodeType===3){if(f=i+d.textContent.length,i<=a&&f>=a)return{node:d,offset:a-i};i=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Gu(d)}}function Zu(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Zu(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function eh(){for(var i=window,a=xe();a instanceof i.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)i=a.contentWindow;else break;a=xe(i.document)}return a}function Fo(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function Wv(i){var a=eh(),d=i.focusedElem,f=i.selectionRange;if(a!==d&&d&&d.ownerDocument&&Zu(d.ownerDocument.documentElement,d)){if(f!==null&&Fo(d)){if(a=f.start,i=f.end,i===void 0&&(i=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(i,d.value.length);else if(i=(a=d.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=d.textContent.length,v=Math.min(f.start,g);f=f.end===void 0?v:Math.min(f.end,g),!i.extend&&v>f&&(g=f,f=v,v=g),g=Ju(d,v);var S=Ju(d,f);g&&S&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==S.node||i.focusOffset!==S.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),v>f?(i.addRange(a),i.extend(S.node,S.offset)):(a.setEnd(S.node,S.offset),i.addRange(a)))}}for(a=[],i=d;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)i=a[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Uv=u&&"documentMode"in document&&11>=document.documentMode,xi=null,Bo=null,dr=null,$o=!1;function th(i,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;$o||xi==null||xi!==xe(f)||(f=xi,"selectionStart"in f&&Fo(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),dr&&cr(dr,f)||(dr=f,f=La(Bo,"onSelect"),0<f.length&&(a=new Po("onSelect","select",null,a,d),i.push({event:a,listeners:f}),a.target=xi)))}function Aa(i,a){var d={};return d[i.toLowerCase()]=a.toLowerCase(),d["Webkit"+i]="webkit"+a,d["Moz"+i]="moz"+a,d}var vi={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Wo={},sh={};u&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Ta(i){if(Wo[i])return Wo[i];if(!vi[i])return i;var a=vi[i],d;for(d in a)if(a.hasOwnProperty(d)&&d in sh)return Wo[i]=a[d];return i}var nh=Ta("animationend"),ih=Ta("animationiteration"),rh=Ta("animationstart"),ah=Ta("transitionend"),lh=new Map,oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(i,a){lh.set(i,a),o(a,[i])}for(var Uo=0;Uo<oh.length;Uo++){var Ho=oh[Uo],Hv=Ho.toLowerCase(),Vv=Ho[0].toUpperCase()+Ho.slice(1);tn(Hv,"on"+Vv)}tn(nh,"onAnimationEnd"),tn(ih,"onAnimationIteration"),tn(rh,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(ah,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function ch(i,a,d){var f=i.type||"unknown-event";i.currentTarget=d,Hx(f,a,void 0,i),i.currentTarget=null}function dh(i,a){a=(a&4)!==0;for(var d=0;d<i.length;d++){var f=i[d],g=f.event;f=f.listeners;e:{var v=void 0;if(a)for(var S=f.length-1;0<=S;S--){var D=f[S],O=D.instance,G=D.currentTarget;if(D=D.listener,O!==v&&g.isPropagationStopped())break e;ch(g,D,G),v=O}else for(S=0;S<f.length;S++){if(D=f[S],O=D.instance,G=D.currentTarget,D=D.listener,O!==v&&g.isPropagationStopped())break e;ch(g,D,G),v=O}}}if(xa)throw i=jo,xa=!1,jo=null,i}function We(i,a){var d=a[Jo];d===void 0&&(d=a[Jo]=new Set);var f=i+"__bubble";d.has(f)||(uh(a,i,2,!1),d.add(f))}function Vo(i,a,d){var f=0;a&&(f|=4),uh(d,i,f,a)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function hr(i){if(!i[Ma]){i[Ma]=!0,r.forEach(function(d){d!=="selectionchange"&&(qv.has(d)||Vo(d,!1,i),Vo(d,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Ma]||(a[Ma]=!0,Vo("selectionchange",!1,a))}}function uh(i,a,d,f){switch(Mu(a)){case 1:var g=av;break;case 4:g=lv;break;default:g=Eo}d=g.bind(null,a,d,i),g=void 0,!bo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(a,d,{capture:!0,passive:g}):i.addEventListener(a,d,!0):g!==void 0?i.addEventListener(a,d,{passive:g}):i.addEventListener(a,d,!1)}function qo(i,a,d,f,g){var v=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var S=f.tag;if(S===3||S===4){var D=f.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(S===4)for(S=f.return;S!==null;){var O=S.tag;if((O===3||O===4)&&(O=S.stateNode.containerInfo,O===g||O.nodeType===8&&O.parentNode===g))return;S=S.return}for(;D!==null;){if(S=An(D),S===null)return;if(O=S.tag,O===5||O===6){f=v=S;continue e}D=D.parentNode}}f=f.return}_t(function(){var G=v,ie=V(d),ae=[];e:{var ne=lh.get(i);if(ne!==void 0){var he=Po,ve=i;switch(i){case"keypress":if(Ea(d)===0)break e;case"keydown":case"keyup":he=Nv;break;case"focusin":ve="focus",he=Mo;break;case"focusout":ve="blur",he=Mo;break;case"beforeblur":case"afterblur":he=Mo;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=_v;break;case nh:case ih:case rh:he=fv;break;case ah:he=Cv;break;case"scroll":he=ov;break;case"wheel":he=Rv;break;case"copy":case"cut":case"paste":he=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Fu}var ye=(a&4)!==0,Ze=!ye&&i==="scroll",Y=ye?ne!==null?ne+"Capture":null:ne;ye=[];for(var F=G,Q;F!==null;){Q=F;var oe=Q.stateNode;if(Q.tag===5&&oe!==null&&(Q=oe,Y!==null&&(oe=Qi(F,Y),oe!=null&&ye.push(fr(F,oe,Q)))),Ze)break;F=F.return}0<ye.length&&(ne=new he(ne,ve,null,d,ie),ae.push({event:ne,listeners:ye}))}}if((a&7)===0){e:{if(ne=i==="mouseover"||i==="pointerover",he=i==="mouseout"||i==="pointerout",ne&&d!==fi&&(ve=d.relatedTarget||d.fromElement)&&(An(ve)||ve[As]))break e;if((he||ne)&&(ne=ie.window===ie?ie:(ne=ie.ownerDocument)?ne.defaultView||ne.parentWindow:window,he?(ve=d.relatedTarget||d.toElement,he=G,ve=ve?An(ve):null,ve!==null&&(Ze=Pn(ve),ve!==Ze||ve.tag!==5&&ve.tag!==6)&&(ve=null)):(he=null,ve=G),he!==ve)){if(ye=zu,oe="onMouseLeave",Y="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(ye=Fu,oe="onPointerLeave",Y="onPointerEnter",F="pointer"),Ze=he==null?ne:ji(he),Q=ve==null?ne:ji(ve),ne=new ye(oe,F+"leave",he,d,ie),ne.target=Ze,ne.relatedTarget=Q,oe=null,An(ie)===G&&(ye=new ye(Y,F+"enter",ve,d,ie),ye.target=Q,ye.relatedTarget=Ze,oe=ye),Ze=oe,he&&ve)t:{for(ye=he,Y=ve,F=0,Q=ye;Q;Q=yi(Q))F++;for(Q=0,oe=Y;oe;oe=yi(oe))Q++;for(;0<F-Q;)ye=yi(ye),F--;for(;0<Q-F;)Y=yi(Y),Q--;for(;F--;){if(ye===Y||Y!==null&&ye===Y.alternate)break t;ye=yi(ye),Y=yi(Y)}ye=null}else ye=null;he!==null&&hh(ae,ne,he,ye,!1),ve!==null&&Ze!==null&&hh(ae,Ze,ve,ye,!0)}}e:{if(ne=G?ji(G):window,he=ne.nodeName&&ne.nodeName.toLowerCase(),he==="select"||he==="input"&&ne.type==="file")var je=Ov;else if(Vu(ne))if(Yu)je=Bv;else{je=Iv;var we=zv}else(he=ne.nodeName)&&he.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(je=Fv);if(je&&(je=je(i,G))){qu(ae,je,d,ie);break e}we&&we(i,ne,G),i==="focusout"&&(we=ne._wrapperState)&&we.controlled&&ne.type==="number"&&Sn(ne,"number",ne.value)}switch(we=G?ji(G):window,i){case"focusin":(Vu(we)||we.contentEditable==="true")&&(xi=we,Bo=G,dr=null);break;case"focusout":dr=Bo=xi=null;break;case"mousedown":$o=!0;break;case"contextmenu":case"mouseup":case"dragend":$o=!1,th(ae,d,ie);break;case"selectionchange":if(Uv)break;case"keydown":case"keyup":th(ae,d,ie)}var ke;if(Oo)e:{switch(i){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else gi?Uu(i,d)&&(Se="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(Se="onCompositionStart");Se&&(Bu&&d.locale!=="ko"&&(gi||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&gi&&(ke=Lu()):(en=ie,Do="value"in en?en.value:en.textContent,gi=!0)),we=La(G,Se),0<we.length&&(Se=new Iu(Se,i,null,d,ie),ae.push({event:Se,listeners:we}),ke?Se.data=ke:(ke=Hu(d),ke!==null&&(Se.data=ke)))),(ke=Pv?Av(i,d):Tv(i,d))&&(G=La(G,"onBeforeInput"),0<G.length&&(ie=new Iu("onBeforeInput","beforeinput",null,d,ie),ae.push({event:ie,listeners:G}),ie.data=ke))}dh(ae,a)})}function fr(i,a,d){return{instance:i,listener:a,currentTarget:d}}function La(i,a){for(var d=a+"Capture",f=[];i!==null;){var g=i,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Qi(i,d),v!=null&&f.unshift(fr(i,v,g)),v=Qi(i,a),v!=null&&f.push(fr(i,v,g))),i=i.return}return f}function yi(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hh(i,a,d,f,g){for(var v=a._reactName,S=[];d!==null&&d!==f;){var D=d,O=D.alternate,G=D.stateNode;if(O!==null&&O===f)break;D.tag===5&&G!==null&&(D=G,g?(O=Qi(d,v),O!=null&&S.unshift(fr(d,O,D))):g||(O=Qi(d,v),O!=null&&S.push(fr(d,O,D)))),d=d.return}S.length!==0&&i.push({event:a,listeners:S})}var Yv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function fh(i){return(typeof i=="string"?i:""+i).replace(Yv,`
`).replace(Qv,"")}function Oa(i,a,d){if(a=fh(a),fh(i)!==a&&d)throw Error(s(425))}function za(){}var Yo=null,Qo=null;function Ko(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(i){return ph.resolve(null).then(i).catch(Gv)}:Xo;function Gv(i){setTimeout(function(){throw i})}function Go(i,a){var d=a,f=0;do{var g=d.nextSibling;if(i.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(f===0){i.removeChild(g),nr(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=g}while(d);nr(a)}function sn(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function mh(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return i;a--}else d==="/$"&&a++}i=i.previousSibling}return null}var bi=Math.random().toString(36).slice(2),Ns="__reactFiber$"+bi,pr="__reactProps$"+bi,As="__reactContainer$"+bi,Jo="__reactEvents$"+bi,Jv="__reactListeners$"+bi,Zv="__reactHandles$"+bi;function An(i){var a=i[Ns];if(a)return a;for(var d=i.parentNode;d;){if(a=d[As]||d[Ns]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(i=mh(i);i!==null;){if(d=i[Ns])return d;i=mh(i)}return a}i=d,d=i.parentNode}return null}function mr(i){return i=i[Ns]||i[As],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ji(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(s(33))}function Ia(i){return i[pr]||null}var Zo=[],Ni=-1;function nn(i){return{current:i}}function Ue(i){0>Ni||(i.current=Zo[Ni],Zo[Ni]=null,Ni--)}function $e(i,a){Ni++,Zo[Ni]=i.current,i.current=a}var rn={},gt=nn(rn),Rt=nn(!1),Tn=rn;function wi(i,a){var d=i.type.contextTypes;if(!d)return rn;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in d)g[v]=a[v];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function Dt(i){return i=i.childContextTypes,i!=null}function Fa(){Ue(Rt),Ue(gt)}function gh(i,a,d){if(gt.current!==rn)throw Error(s(168));$e(gt,a),$e(Rt,d)}function xh(i,a,d){var f=i.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var g in f)if(!(g in a))throw Error(s(108,ce(i)||"Unknown",g));return se({},d,f)}function Ba(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||rn,Tn=gt.current,$e(gt,i),$e(Rt,Rt.current),!0}function vh(i,a,d){var f=i.stateNode;if(!f)throw Error(s(169));d?(i=xh(i,a,Tn),f.__reactInternalMemoizedMergedChildContext=i,Ue(Rt),Ue(gt),$e(gt,i)):Ue(Rt),$e(Rt,d)}var Ts=null,$a=!1,ec=!1;function yh(i){Ts===null?Ts=[i]:Ts.push(i)}function ey(i){$a=!0,yh(i)}function an(){if(!ec&&Ts!==null){ec=!0;var i=0,a=Ie;try{var d=Ts;for(Ie=1;i<d.length;i++){var f=d[i];do f=f(!0);while(f!==null)}Ts=null,$a=!1}catch(g){throw Ts!==null&&(Ts=Ts.slice(i+1)),ju(No,an),g}finally{Ie=a,ec=!1}}return null}var ki=[],_i=0,Wa=null,Ua=0,Qt=[],Kt=0,Mn=null,Ms=1,Ls="";function Ln(i,a){ki[_i++]=Ua,ki[_i++]=Wa,Wa=i,Ua=a}function bh(i,a,d){Qt[Kt++]=Ms,Qt[Kt++]=Ls,Qt[Kt++]=Mn,Mn=i;var f=Ms;i=Ls;var g=32-ls(f)-1;f&=~(1<<g),d+=1;var v=32-ls(a)+g;if(30<v){var S=g-g%5;v=(f&(1<<S)-1).toString(32),f>>=S,g-=S,Ms=1<<32-ls(a)+g|d<<g|f,Ls=v+i}else Ms=1<<v|d<<g|f,Ls=i}function tc(i){i.return!==null&&(Ln(i,1),bh(i,1,0))}function sc(i){for(;i===Wa;)Wa=ki[--_i],ki[_i]=null,Ua=ki[--_i],ki[_i]=null;for(;i===Mn;)Mn=Qt[--Kt],Qt[Kt]=null,Ls=Qt[--Kt],Qt[Kt]=null,Ms=Qt[--Kt],Qt[Kt]=null}var $t=null,Wt=null,Ve=!1,cs=null;function jh(i,a){var d=Zt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=i,a=i.deletions,a===null?(i.deletions=[d],i.flags|=16):a.push(d)}function Nh(i,a){switch(i.tag){case 5:var d=i.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,$t=i,Wt=sn(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,$t=i,Wt=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=Mn!==null?{id:Ms,overflow:Ls}:null,i.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Zt(18,null,null,0),d.stateNode=a,d.return=i,i.child=d,$t=i,Wt=null,!0):!1;default:return!1}}function nc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ic(i){if(Ve){var a=Wt;if(a){var d=a;if(!Nh(i,a)){if(nc(i))throw Error(s(418));a=sn(d.nextSibling);var f=$t;a&&Nh(i,a)?jh(f,d):(i.flags=i.flags&-4097|2,Ve=!1,$t=i)}}else{if(nc(i))throw Error(s(418));i.flags=i.flags&-4097|2,Ve=!1,$t=i}}}function wh(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$t=i}function Ha(i){if(i!==$t)return!1;if(!Ve)return wh(i),Ve=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ko(i.type,i.memoizedProps)),a&&(a=Wt)){if(nc(i))throw kh(),Error(s(418));for(;a;)jh(i,a),a=sn(a.nextSibling)}if(wh(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(a===0){Wt=sn(i.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}i=i.nextSibling}Wt=null}}else Wt=$t?sn(i.stateNode.nextSibling):null;return!0}function kh(){for(var i=Wt;i;)i=sn(i.nextSibling)}function Si(){Wt=$t=null,Ve=!1}function rc(i){cs===null?cs=[i]:cs.push(i)}var ty=W.ReactCurrentBatchConfig;function gr(i,a,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(s(309));var f=d.stateNode}if(!f)throw Error(s(147,i));var g=f,v=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===v?a.ref:(a=function(S){var D=g.refs;S===null?delete D[v]:D[v]=S},a._stringRef=v,a)}if(typeof i!="string")throw Error(s(284));if(!d._owner)throw Error(s(290,i))}return i}function Va(i,a){throw i=Object.prototype.toString.call(a),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function _h(i){var a=i._init;return a(i._payload)}function Sh(i){function a(Y,F){if(i){var Q=Y.deletions;Q===null?(Y.deletions=[F],Y.flags|=16):Q.push(F)}}function d(Y,F){if(!i)return null;for(;F!==null;)a(Y,F),F=F.sibling;return null}function f(Y,F){for(Y=new Map;F!==null;)F.key!==null?Y.set(F.key,F):Y.set(F.index,F),F=F.sibling;return Y}function g(Y,F){return Y=pn(Y,F),Y.index=0,Y.sibling=null,Y}function v(Y,F,Q){return Y.index=Q,i?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<F?(Y.flags|=2,F):Q):(Y.flags|=2,F)):(Y.flags|=1048576,F)}function S(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,F,Q,oe){return F===null||F.tag!==6?(F=Xc(Q,Y.mode,oe),F.return=Y,F):(F=g(F,Q),F.return=Y,F)}function O(Y,F,Q,oe){var je=Q.type;return je===L?ie(Y,F,Q.props.children,oe,Q.key):F!==null&&(F.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===k&&_h(je)===F.type)?(oe=g(F,Q.props),oe.ref=gr(Y,F,Q),oe.return=Y,oe):(oe=ml(Q.type,Q.key,Q.props,null,Y.mode,oe),oe.ref=gr(Y,F,Q),oe.return=Y,oe)}function G(Y,F,Q,oe){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=Gc(Q,Y.mode,oe),F.return=Y,F):(F=g(F,Q.children||[]),F.return=Y,F)}function ie(Y,F,Q,oe,je){return F===null||F.tag!==7?(F=Un(Q,Y.mode,oe,je),F.return=Y,F):(F=g(F,Q),F.return=Y,F)}function ae(Y,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Xc(""+F,Y.mode,Q),F.return=Y,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case _:return Q=ml(F.type,F.key,F.props,null,Y.mode,Q),Q.ref=gr(Y,null,F),Q.return=Y,Q;case H:return F=Gc(F,Y.mode,Q),F.return=Y,F;case k:var oe=F._init;return ae(Y,oe(F._payload),Q)}if(is(F)||te(F))return F=Un(F,Y.mode,Q,null),F.return=Y,F;Va(Y,F)}return null}function ne(Y,F,Q,oe){var je=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return je!==null?null:D(Y,F,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===je?O(Y,F,Q,oe):null;case H:return Q.key===je?G(Y,F,Q,oe):null;case k:return je=Q._init,ne(Y,F,je(Q._payload),oe)}if(is(Q)||te(Q))return je!==null?null:ie(Y,F,Q,oe,null);Va(Y,Q)}return null}function he(Y,F,Q,oe,je){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return Y=Y.get(Q)||null,D(F,Y,""+oe,je);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case _:return Y=Y.get(oe.key===null?Q:oe.key)||null,O(F,Y,oe,je);case H:return Y=Y.get(oe.key===null?Q:oe.key)||null,G(F,Y,oe,je);case k:var we=oe._init;return he(Y,F,Q,we(oe._payload),je)}if(is(oe)||te(oe))return Y=Y.get(Q)||null,ie(F,Y,oe,je,null);Va(F,oe)}return null}function ve(Y,F,Q,oe){for(var je=null,we=null,ke=F,Se=F=0,ht=null;ke!==null&&Se<Q.length;Se++){ke.index>Se?(ht=ke,ke=null):ht=ke.sibling;var Te=ne(Y,ke,Q[Se],oe);if(Te===null){ke===null&&(ke=ht);break}i&&ke&&Te.alternate===null&&a(Y,ke),F=v(Te,F,Se),we===null?je=Te:we.sibling=Te,we=Te,ke=ht}if(Se===Q.length)return d(Y,ke),Ve&&Ln(Y,Se),je;if(ke===null){for(;Se<Q.length;Se++)ke=ae(Y,Q[Se],oe),ke!==null&&(F=v(ke,F,Se),we===null?je=ke:we.sibling=ke,we=ke);return Ve&&Ln(Y,Se),je}for(ke=f(Y,ke);Se<Q.length;Se++)ht=he(ke,Y,Se,Q[Se],oe),ht!==null&&(i&&ht.alternate!==null&&ke.delete(ht.key===null?Se:ht.key),F=v(ht,F,Se),we===null?je=ht:we.sibling=ht,we=ht);return i&&ke.forEach(function(mn){return a(Y,mn)}),Ve&&Ln(Y,Se),je}function ye(Y,F,Q,oe){var je=te(Q);if(typeof je!="function")throw Error(s(150));if(Q=je.call(Q),Q==null)throw Error(s(151));for(var we=je=null,ke=F,Se=F=0,ht=null,Te=Q.next();ke!==null&&!Te.done;Se++,Te=Q.next()){ke.index>Se?(ht=ke,ke=null):ht=ke.sibling;var mn=ne(Y,ke,Te.value,oe);if(mn===null){ke===null&&(ke=ht);break}i&&ke&&mn.alternate===null&&a(Y,ke),F=v(mn,F,Se),we===null?je=mn:we.sibling=mn,we=mn,ke=ht}if(Te.done)return d(Y,ke),Ve&&Ln(Y,Se),je;if(ke===null){for(;!Te.done;Se++,Te=Q.next())Te=ae(Y,Te.value,oe),Te!==null&&(F=v(Te,F,Se),we===null?je=Te:we.sibling=Te,we=Te);return Ve&&Ln(Y,Se),je}for(ke=f(Y,ke);!Te.done;Se++,Te=Q.next())Te=he(ke,Y,Se,Te.value,oe),Te!==null&&(i&&Te.alternate!==null&&ke.delete(Te.key===null?Se:Te.key),F=v(Te,F,Se),we===null?je=Te:we.sibling=Te,we=Te);return i&&ke.forEach(function(My){return a(Y,My)}),Ve&&Ln(Y,Se),je}function Ze(Y,F,Q,oe){if(typeof Q=="object"&&Q!==null&&Q.type===L&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:e:{for(var je=Q.key,we=F;we!==null;){if(we.key===je){if(je=Q.type,je===L){if(we.tag===7){d(Y,we.sibling),F=g(we,Q.props.children),F.return=Y,Y=F;break e}}else if(we.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===k&&_h(je)===we.type){d(Y,we.sibling),F=g(we,Q.props),F.ref=gr(Y,we,Q),F.return=Y,Y=F;break e}d(Y,we);break}else a(Y,we);we=we.sibling}Q.type===L?(F=Un(Q.props.children,Y.mode,oe,Q.key),F.return=Y,Y=F):(oe=ml(Q.type,Q.key,Q.props,null,Y.mode,oe),oe.ref=gr(Y,F,Q),oe.return=Y,Y=oe)}return S(Y);case H:e:{for(we=Q.key;F!==null;){if(F.key===we)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){d(Y,F.sibling),F=g(F,Q.children||[]),F.return=Y,Y=F;break e}else{d(Y,F);break}else a(Y,F);F=F.sibling}F=Gc(Q,Y.mode,oe),F.return=Y,Y=F}return S(Y);case k:return we=Q._init,Ze(Y,F,we(Q._payload),oe)}if(is(Q))return ve(Y,F,Q,oe);if(te(Q))return ye(Y,F,Q,oe);Va(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,F!==null&&F.tag===6?(d(Y,F.sibling),F=g(F,Q),F.return=Y,Y=F):(d(Y,F),F=Xc(Q,Y.mode,oe),F.return=Y,Y=F),S(Y)):d(Y,F)}return Ze}var Ci=Sh(!0),Ch=Sh(!1),qa=nn(null),Ya=null,Ei=null,ac=null;function lc(){ac=Ei=Ya=null}function oc(i){var a=qa.current;Ue(qa),i._currentValue=a}function cc(i,a,d){for(;i!==null;){var f=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),i===d)break;i=i.return}}function Ri(i,a){Ya=i,ac=Ei=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Pt=!0),i.firstContext=null)}function Xt(i){var a=i._currentValue;if(ac!==i)if(i={context:i,memoizedValue:a,next:null},Ei===null){if(Ya===null)throw Error(s(308));Ei=i,Ya.dependencies={lanes:0,firstContext:i}}else Ei=Ei.next=i;return a}var On=null;function dc(i){On===null?On=[i]:On.push(i)}function Eh(i,a,d,f){var g=a.interleaved;return g===null?(d.next=d,dc(a)):(d.next=g.next,g.next=d),a.interleaved=d,Os(i,f)}function Os(i,a){i.lanes|=a;var d=i.alternate;for(d!==null&&(d.lanes|=a),d=i,i=i.return;i!==null;)i.childLanes|=a,d=i.alternate,d!==null&&(d.childLanes|=a),d=i,i=i.return;return d.tag===3?d.stateNode:null}var ln=!1;function uc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zs(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function on(i,a,d){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Ae&2)!==0){var g=f.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a,Os(i,d)}return g=f.interleaved,g===null?(a.next=a,dc(f)):(a.next=g.next,g.next=a),f.interleaved=a,Os(i,d)}function Qa(i,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,_o(i,d)}}function Dh(i,a){var d=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var g=null,v=null;if(d=d.firstBaseUpdate,d!==null){do{var S={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};v===null?g=v=S:v=v.next=S,d=d.next}while(d!==null);v===null?g=v=a:v=v.next=a}else g=v=a;d={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:f.shared,effects:f.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=a:i.next=a,d.lastBaseUpdate=a}function Ka(i,a,d,f){var g=i.updateQueue;ln=!1;var v=g.firstBaseUpdate,S=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var O=D,G=O.next;O.next=null,S===null?v=G:S.next=G,S=O;var ie=i.alternate;ie!==null&&(ie=ie.updateQueue,D=ie.lastBaseUpdate,D!==S&&(D===null?ie.firstBaseUpdate=G:D.next=G,ie.lastBaseUpdate=O))}if(v!==null){var ae=g.baseState;S=0,ie=G=O=null,D=v;do{var ne=D.lane,he=D.eventTime;if((f&ne)===ne){ie!==null&&(ie=ie.next={eventTime:he,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ve=i,ye=D;switch(ne=a,he=d,ye.tag){case 1:if(ve=ye.payload,typeof ve=="function"){ae=ve.call(he,ae,ne);break e}ae=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=ye.payload,ne=typeof ve=="function"?ve.call(he,ae,ne):ve,ne==null)break e;ae=se({},ae,ne);break e;case 2:ln=!0}}D.callback!==null&&D.lane!==0&&(i.flags|=64,ne=g.effects,ne===null?g.effects=[D]:ne.push(D))}else he={eventTime:he,lane:ne,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ie===null?(G=ie=he,O=ae):ie=ie.next=he,S|=ne;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;ne=D,D=ne.next,ne.next=null,g.lastBaseUpdate=ne,g.shared.pending=null}}while(!0);if(ie===null&&(O=ae),g.baseState=O,g.firstBaseUpdate=G,g.lastBaseUpdate=ie,a=g.shared.interleaved,a!==null){g=a;do S|=g.lane,g=g.next;while(g!==a)}else v===null&&(g.shared.lanes=0);Fn|=S,i.lanes=S,i.memoizedState=ae}}function Ph(i,a,d){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var f=i[a],g=f.callback;if(g!==null){if(f.callback=null,f=d,typeof g!="function")throw Error(s(191,g));g.call(f)}}}var xr={},ws=nn(xr),vr=nn(xr),yr=nn(xr);function zn(i){if(i===xr)throw Error(s(174));return i}function hc(i,a){switch($e(yr,a),$e(vr,i),$e(ws,xr),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Pe(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Pe(a,i)}Ue(ws),$e(ws,a)}function Di(){Ue(ws),Ue(vr),Ue(yr)}function Ah(i){zn(yr.current);var a=zn(ws.current),d=Pe(a,i.type);a!==d&&($e(vr,i),$e(ws,d))}function fc(i){vr.current===i&&(Ue(ws),Ue(vr))}var Ye=nn(0);function Xa(i){for(var a=i;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var pc=[];function mc(){for(var i=0;i<pc.length;i++)pc[i]._workInProgressVersionPrimary=null;pc.length=0}var Ga=W.ReactCurrentDispatcher,gc=W.ReactCurrentBatchConfig,In=0,Qe=null,lt=null,dt=null,Ja=!1,br=!1,jr=0,sy=0;function xt(){throw Error(s(321))}function xc(i,a){if(a===null)return!1;for(var d=0;d<a.length&&d<i.length;d++)if(!os(i[d],a[d]))return!1;return!0}function vc(i,a,d,f,g,v){if(In=v,Qe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ga.current=i===null||i.memoizedState===null?ay:ly,i=d(f,g),br){v=0;do{if(br=!1,jr=0,25<=v)throw Error(s(301));v+=1,dt=lt=null,a.updateQueue=null,Ga.current=oy,i=d(f,g)}while(br)}if(Ga.current=tl,a=lt!==null&&lt.next!==null,In=0,dt=lt=Qe=null,Ja=!1,a)throw Error(s(300));return i}function yc(){var i=jr!==0;return jr=0,i}function ks(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Qe.memoizedState=dt=i:dt=dt.next=i,dt}function Gt(){if(lt===null){var i=Qe.alternate;i=i!==null?i.memoizedState:null}else i=lt.next;var a=dt===null?Qe.memoizedState:dt.next;if(a!==null)dt=a,lt=i;else{if(i===null)throw Error(s(310));lt=i,i={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?Qe.memoizedState=dt=i:dt=dt.next=i}return dt}function Nr(i,a){return typeof a=="function"?a(i):a}function bc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=lt,g=f.baseQueue,v=d.pending;if(v!==null){if(g!==null){var S=g.next;g.next=v.next,v.next=S}f.baseQueue=g=v,d.pending=null}if(g!==null){v=g.next,f=f.baseState;var D=S=null,O=null,G=v;do{var ie=G.lane;if((In&ie)===ie)O!==null&&(O=O.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),f=G.hasEagerState?G.eagerState:i(f,G.action);else{var ae={lane:ie,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};O===null?(D=O=ae,S=f):O=O.next=ae,Qe.lanes|=ie,Fn|=ie}G=G.next}while(G!==null&&G!==v);O===null?S=f:O.next=D,os(f,a.memoizedState)||(Pt=!0),a.memoizedState=f,a.baseState=S,a.baseQueue=O,d.lastRenderedState=f}if(i=d.interleaved,i!==null){g=i;do v=g.lane,Qe.lanes|=v,Fn|=v,g=g.next;while(g!==i)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function jc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=d.dispatch,g=d.pending,v=a.memoizedState;if(g!==null){d.pending=null;var S=g=g.next;do v=i(v,S.action),S=S.next;while(S!==g);os(v,a.memoizedState)||(Pt=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),d.lastRenderedState=v}return[v,f]}function Th(){}function Mh(i,a){var d=Qe,f=Gt(),g=a(),v=!os(f.memoizedState,g);if(v&&(f.memoizedState=g,Pt=!0),f=f.queue,Nc(zh.bind(null,d,f,i),[i]),f.getSnapshot!==a||v||dt!==null&&dt.memoizedState.tag&1){if(d.flags|=2048,wr(9,Oh.bind(null,d,f,g,a),void 0,null),ut===null)throw Error(s(349));(In&30)!==0||Lh(d,a,g)}return g}function Lh(i,a,d){i.flags|=16384,i={getSnapshot:a,value:d},a=Qe.updateQueue,a===null?(a={lastEffect:null,stores:null},Qe.updateQueue=a,a.stores=[i]):(d=a.stores,d===null?a.stores=[i]:d.push(i))}function Oh(i,a,d,f){a.value=d,a.getSnapshot=f,Ih(a)&&Fh(i)}function zh(i,a,d){return d(function(){Ih(a)&&Fh(i)})}function Ih(i){var a=i.getSnapshot;i=i.value;try{var d=a();return!os(i,d)}catch{return!0}}function Fh(i){var a=Os(i,1);a!==null&&fs(a,i,1,-1)}function Bh(i){var a=ks();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:i},a.queue=i,i=i.dispatch=ry.bind(null,Qe,i),[a.memoizedState,i]}function wr(i,a,d,f){return i={tag:i,create:a,destroy:d,deps:f,next:null},a=Qe.updateQueue,a===null?(a={lastEffect:null,stores:null},Qe.updateQueue=a,a.lastEffect=i.next=i):(d=a.lastEffect,d===null?a.lastEffect=i.next=i:(f=d.next,d.next=i,i.next=f,a.lastEffect=i)),i}function $h(){return Gt().memoizedState}function Za(i,a,d,f){var g=ks();Qe.flags|=i,g.memoizedState=wr(1|a,d,void 0,f===void 0?null:f)}function el(i,a,d,f){var g=Gt();f=f===void 0?null:f;var v=void 0;if(lt!==null){var S=lt.memoizedState;if(v=S.destroy,f!==null&&xc(f,S.deps)){g.memoizedState=wr(a,d,v,f);return}}Qe.flags|=i,g.memoizedState=wr(1|a,d,v,f)}function Wh(i,a){return Za(8390656,8,i,a)}function Nc(i,a){return el(2048,8,i,a)}function Uh(i,a){return el(4,2,i,a)}function Hh(i,a){return el(4,4,i,a)}function Vh(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function qh(i,a,d){return d=d!=null?d.concat([i]):null,el(4,4,Vh.bind(null,a,i),d)}function wc(){}function Yh(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&xc(a,f[1])?f[0]:(d.memoizedState=[i,a],i)}function Qh(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&xc(a,f[1])?f[0]:(i=i(),d.memoizedState=[i,a],i)}function Kh(i,a,d){return(In&21)===0?(i.baseState&&(i.baseState=!1,Pt=!0),i.memoizedState=d):(os(d,a)||(d=_u(),Qe.lanes|=d,Fn|=d,i.baseState=!0),a)}function ny(i,a){var d=Ie;Ie=d!==0&&4>d?d:4,i(!0);var f=gc.transition;gc.transition={};try{i(!1),a()}finally{Ie=d,gc.transition=f}}function Xh(){return Gt().memoizedState}function iy(i,a,d){var f=hn(i);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Gh(i))Jh(a,d);else if(d=Eh(i,a,d,f),d!==null){var g=Ct();fs(d,i,f,g),Zh(d,a,f)}}function ry(i,a,d){var f=hn(i),g={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Gh(i))Jh(a,g);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var S=a.lastRenderedState,D=v(S,d);if(g.hasEagerState=!0,g.eagerState=D,os(D,S)){var O=a.interleaved;O===null?(g.next=g,dc(a)):(g.next=O.next,O.next=g),a.interleaved=g;return}}catch{}finally{}d=Eh(i,a,g,f),d!==null&&(g=Ct(),fs(d,i,f,g),Zh(d,a,f))}}function Gh(i){var a=i.alternate;return i===Qe||a!==null&&a===Qe}function Jh(i,a){br=Ja=!0;var d=i.pending;d===null?a.next=a:(a.next=d.next,d.next=a),i.pending=a}function Zh(i,a,d){if((d&4194240)!==0){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,_o(i,d)}}var tl={readContext:Xt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},ay={readContext:Xt,useCallback:function(i,a){return ks().memoizedState=[i,a===void 0?null:a],i},useContext:Xt,useEffect:Wh,useImperativeHandle:function(i,a,d){return d=d!=null?d.concat([i]):null,Za(4194308,4,Vh.bind(null,a,i),d)},useLayoutEffect:function(i,a){return Za(4194308,4,i,a)},useInsertionEffect:function(i,a){return Za(4,2,i,a)},useMemo:function(i,a){var d=ks();return a=a===void 0?null:a,i=i(),d.memoizedState=[i,a],i},useReducer:function(i,a,d){var f=ks();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},f.queue=i,i=i.dispatch=iy.bind(null,Qe,i),[f.memoizedState,i]},useRef:function(i){var a=ks();return i={current:i},a.memoizedState=i},useState:Bh,useDebugValue:wc,useDeferredValue:function(i){return ks().memoizedState=i},useTransition:function(){var i=Bh(!1),a=i[0];return i=ny.bind(null,i[1]),ks().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,d){var f=Qe,g=ks();if(Ve){if(d===void 0)throw Error(s(407));d=d()}else{if(d=a(),ut===null)throw Error(s(349));(In&30)!==0||Lh(f,a,d)}g.memoizedState=d;var v={value:d,getSnapshot:a};return g.queue=v,Wh(zh.bind(null,f,v,i),[i]),f.flags|=2048,wr(9,Oh.bind(null,f,v,d,a),void 0,null),d},useId:function(){var i=ks(),a=ut.identifierPrefix;if(Ve){var d=Ls,f=Ms;d=(f&~(1<<32-ls(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=jr++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=sy++,a=":"+a+"r"+d.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},ly={readContext:Xt,useCallback:Yh,useContext:Xt,useEffect:Nc,useImperativeHandle:qh,useInsertionEffect:Uh,useLayoutEffect:Hh,useMemo:Qh,useReducer:bc,useRef:$h,useState:function(){return bc(Nr)},useDebugValue:wc,useDeferredValue:function(i){var a=Gt();return Kh(a,lt.memoizedState,i)},useTransition:function(){var i=bc(Nr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Th,useSyncExternalStore:Mh,useId:Xh,unstable_isNewReconciler:!1},oy={readContext:Xt,useCallback:Yh,useContext:Xt,useEffect:Nc,useImperativeHandle:qh,useInsertionEffect:Uh,useLayoutEffect:Hh,useMemo:Qh,useReducer:jc,useRef:$h,useState:function(){return jc(Nr)},useDebugValue:wc,useDeferredValue:function(i){var a=Gt();return lt===null?a.memoizedState=i:Kh(a,lt.memoizedState,i)},useTransition:function(){var i=jc(Nr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Th,useSyncExternalStore:Mh,useId:Xh,unstable_isNewReconciler:!1};function ds(i,a){if(i&&i.defaultProps){a=se({},a),i=i.defaultProps;for(var d in i)a[d]===void 0&&(a[d]=i[d]);return a}return a}function kc(i,a,d,f){a=i.memoizedState,d=d(f,a),d=d==null?a:se({},a,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var sl={isMounted:function(i){return(i=i._reactInternals)?Pn(i)===i:!1},enqueueSetState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),v=zs(f,g);v.payload=a,d!=null&&(v.callback=d),a=on(i,v,g),a!==null&&(fs(a,i,g,f),Qa(a,i,g))},enqueueReplaceState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),v=zs(f,g);v.tag=1,v.payload=a,d!=null&&(v.callback=d),a=on(i,v,g),a!==null&&(fs(a,i,g,f),Qa(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var d=Ct(),f=hn(i),g=zs(d,f);g.tag=2,a!=null&&(g.callback=a),a=on(i,g,f),a!==null&&(fs(a,i,f,d),Qa(a,i,f))}};function ef(i,a,d,f,g,v,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,v,S):a.prototype&&a.prototype.isPureReactComponent?!cr(d,f)||!cr(g,v):!0}function tf(i,a,d){var f=!1,g=rn,v=a.contextType;return typeof v=="object"&&v!==null?v=Xt(v):(g=Dt(a)?Tn:gt.current,f=a.contextTypes,v=(f=f!=null)?wi(i,g):rn),a=new a(d,v),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=sl,i.stateNode=a,a._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=v),a}function sf(i,a,d,f){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==i&&sl.enqueueReplaceState(a,a.state,null)}function _c(i,a,d,f){var g=i.stateNode;g.props=d,g.state=i.memoizedState,g.refs={},uc(i);var v=a.contextType;typeof v=="object"&&v!==null?g.context=Xt(v):(v=Dt(a)?Tn:gt.current,g.context=wi(i,v)),g.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(kc(i,a,v,d),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&sl.enqueueReplaceState(g,g.state,null),Ka(i,d,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Pi(i,a){try{var d="",f=a;do d+=Ne(f),f=f.return;while(f);var g=d}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:a,stack:g,digest:null}}function Sc(i,a,d){return{value:i,source:null,stack:d??null,digest:a??null}}function Cc(i,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var cy=typeof WeakMap=="function"?WeakMap:Map;function nf(i,a,d){d=zs(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){cl||(cl=!0,Wc=f),Cc(i,a)},d}function rf(i,a,d){d=zs(-1,d),d.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=a.value;d.payload=function(){return f(g)},d.callback=function(){Cc(i,a)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(d.callback=function(){Cc(i,a),typeof f!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})}),d}function af(i,a,d){var f=i.pingCache;if(f===null){f=i.pingCache=new cy;var g=new Set;f.set(a,g)}else g=f.get(a),g===void 0&&(g=new Set,f.set(a,g));g.has(d)||(g.add(d),i=wy.bind(null,i,a,d),a.then(i,i))}function lf(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function of(i,a,d,f,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=zs(-1,1),a.tag=2,on(d,a,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var dy=W.ReactCurrentOwner,Pt=!1;function St(i,a,d,f){a.child=i===null?Ch(a,null,d,f):Ci(a,i.child,d,f)}function cf(i,a,d,f,g){d=d.render;var v=a.ref;return Ri(a,g),f=vc(i,a,d,f,v,g),d=yc(),i!==null&&!Pt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&d&&tc(a),a.flags|=1,St(i,a,f,g),a.child)}function df(i,a,d,f,g){if(i===null){var v=d.type;return typeof v=="function"&&!Kc(v)&&v.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=v,uf(i,a,v,f,g)):(i=ml(d.type,null,f,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(v=i.child,(i.lanes&g)===0){var S=v.memoizedProps;if(d=d.compare,d=d!==null?d:cr,d(S,f)&&i.ref===a.ref)return Is(i,a,g)}return a.flags|=1,i=pn(v,f),i.ref=a.ref,i.return=a,a.child=i}function uf(i,a,d,f,g){if(i!==null){var v=i.memoizedProps;if(cr(v,f)&&i.ref===a.ref)if(Pt=!1,a.pendingProps=f=v,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Pt=!0);else return a.lanes=i.lanes,Is(i,a,g)}return Ec(i,a,d,f,g)}function hf(i,a,d){var f=a.pendingProps,g=f.children,v=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Ti,Ut),Ut|=d;else{if((d&1073741824)===0)return i=v!==null?v.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,$e(Ti,Ut),Ut|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:d,$e(Ti,Ut),Ut|=f}else v!==null?(f=v.baseLanes|d,a.memoizedState=null):f=d,$e(Ti,Ut),Ut|=f;return St(i,a,g,d),a.child}function ff(i,a){var d=a.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function Ec(i,a,d,f,g){var v=Dt(d)?Tn:gt.current;return v=wi(a,v),Ri(a,g),d=vc(i,a,d,f,v,g),f=yc(),i!==null&&!Pt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&f&&tc(a),a.flags|=1,St(i,a,d,g),a.child)}function pf(i,a,d,f,g){if(Dt(d)){var v=!0;Ba(a)}else v=!1;if(Ri(a,g),a.stateNode===null)il(i,a),tf(a,d,f),_c(a,d,f,g),f=!0;else if(i===null){var S=a.stateNode,D=a.memoizedProps;S.props=D;var O=S.context,G=d.contextType;typeof G=="object"&&G!==null?G=Xt(G):(G=Dt(d)?Tn:gt.current,G=wi(a,G));var ie=d.getDerivedStateFromProps,ae=typeof ie=="function"||typeof S.getSnapshotBeforeUpdate=="function";ae||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(D!==f||O!==G)&&sf(a,S,f,G),ln=!1;var ne=a.memoizedState;S.state=ne,Ka(a,f,S,g),O=a.memoizedState,D!==f||ne!==O||Rt.current||ln?(typeof ie=="function"&&(kc(a,d,ie,f),O=a.memoizedState),(D=ln||ef(a,d,D,f,ne,O,G))?(ae||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(a.flags|=4194308)):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=O),S.props=f,S.state=O,S.context=G,f=D):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{S=a.stateNode,Rh(i,a),D=a.memoizedProps,G=a.type===a.elementType?D:ds(a.type,D),S.props=G,ae=a.pendingProps,ne=S.context,O=d.contextType,typeof O=="object"&&O!==null?O=Xt(O):(O=Dt(d)?Tn:gt.current,O=wi(a,O));var he=d.getDerivedStateFromProps;(ie=typeof he=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(D!==ae||ne!==O)&&sf(a,S,f,O),ln=!1,ne=a.memoizedState,S.state=ne,Ka(a,f,S,g);var ve=a.memoizedState;D!==ae||ne!==ve||Rt.current||ln?(typeof he=="function"&&(kc(a,d,he,f),ve=a.memoizedState),(G=ln||ef(a,d,G,f,ne,ve,O)||!1)?(ie||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(f,ve,O),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(f,ve,O)),typeof S.componentDidUpdate=="function"&&(a.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof S.componentDidUpdate!="function"||D===i.memoizedProps&&ne===i.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ne===i.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=ve),S.props=f,S.state=ve,S.context=O,f=G):(typeof S.componentDidUpdate!="function"||D===i.memoizedProps&&ne===i.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ne===i.memoizedState||(a.flags|=1024),f=!1)}return Rc(i,a,d,f,v,g)}function Rc(i,a,d,f,g,v){ff(i,a);var S=(a.flags&128)!==0;if(!f&&!S)return g&&vh(a,d,!1),Is(i,a,v);f=a.stateNode,dy.current=a;var D=S&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,i!==null&&S?(a.child=Ci(a,i.child,null,v),a.child=Ci(a,null,D,v)):St(i,a,D,v),a.memoizedState=f.state,g&&vh(a,d,!0),a.child}function mf(i){var a=i.stateNode;a.pendingContext?gh(i,a.pendingContext,a.pendingContext!==a.context):a.context&&gh(i,a.context,!1),hc(i,a.containerInfo)}function gf(i,a,d,f,g){return Si(),rc(g),a.flags|=256,St(i,a,d,f),a.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Pc(i){return{baseLanes:i,cachePool:null,transitions:null}}function xf(i,a,d){var f=a.pendingProps,g=Ye.current,v=!1,S=(a.flags&128)!==0,D;if((D=S)||(D=i!==null&&i.memoizedState===null?!1:(g&2)!==0),D?(v=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),$e(Ye,g&1),i===null)return ic(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(S=f.children,i=f.fallback,v?(f=a.mode,v=a.child,S={mode:"hidden",children:S},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=S):v=gl(S,f,0,null),i=Un(i,f,d,null),v.return=a,i.return=a,v.sibling=i,a.child=v,a.child.memoizedState=Pc(d),a.memoizedState=Dc,i):Ac(a,S));if(g=i.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return uy(i,a,S,f,D,g,d);if(v){v=f.fallback,S=a.mode,g=i.child,D=g.sibling;var O={mode:"hidden",children:f.children};return(S&1)===0&&a.child!==g?(f=a.child,f.childLanes=0,f.pendingProps=O,a.deletions=null):(f=pn(g,O),f.subtreeFlags=g.subtreeFlags&14680064),D!==null?v=pn(D,v):(v=Un(v,S,d,null),v.flags|=2),v.return=a,f.return=a,f.sibling=v,a.child=f,f=v,v=a.child,S=i.child.memoizedState,S=S===null?Pc(d):{baseLanes:S.baseLanes|d,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=i.childLanes&~d,a.memoizedState=Dc,f}return v=i.child,i=v.sibling,f=pn(v,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,i!==null&&(d=a.deletions,d===null?(a.deletions=[i],a.flags|=16):d.push(i)),a.child=f,a.memoizedState=null,f}function Ac(i,a){return a=gl({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function nl(i,a,d,f){return f!==null&&rc(f),Ci(a,i.child,null,d),i=Ac(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function uy(i,a,d,f,g,v,S){if(d)return a.flags&256?(a.flags&=-257,f=Sc(Error(s(422))),nl(i,a,S,f)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(v=f.fallback,g=a.mode,f=gl({mode:"visible",children:f.children},g,0,null),v=Un(v,g,S,null),v.flags|=2,f.return=a,v.return=a,f.sibling=v,a.child=f,(a.mode&1)!==0&&Ci(a,i.child,null,S),a.child.memoizedState=Pc(S),a.memoizedState=Dc,v);if((a.mode&1)===0)return nl(i,a,S,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var D=f.dgst;return f=D,v=Error(s(419)),f=Sc(v,f,void 0),nl(i,a,S,f)}if(D=(S&i.childLanes)!==0,Pt||D){if(f=ut,f!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|S))!==0?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Os(i,g),fs(f,i,g,-1))}return Qc(),f=Sc(Error(s(421))),nl(i,a,S,f)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=ky.bind(null,i),g._reactRetry=a,null):(i=v.treeContext,Wt=sn(g.nextSibling),$t=a,Ve=!0,cs=null,i!==null&&(Qt[Kt++]=Ms,Qt[Kt++]=Ls,Qt[Kt++]=Mn,Ms=i.id,Ls=i.overflow,Mn=a),a=Ac(a,f.children),a.flags|=4096,a)}function vf(i,a,d){i.lanes|=a;var f=i.alternate;f!==null&&(f.lanes|=a),cc(i.return,a,d)}function Tc(i,a,d,f,g){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:g}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=d,v.tailMode=g)}function yf(i,a,d){var f=a.pendingProps,g=f.revealOrder,v=f.tail;if(St(i,a,f.children,d),f=Ye.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&vf(i,d,a);else if(i.tag===19)vf(i,d,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if($e(Ye,f),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)i=d.alternate,i!==null&&Xa(i)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),Tc(a,!1,g,d,v);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&Xa(i)===null){a.child=g;break}i=g.sibling,g.sibling=d,d=g,g=i}Tc(a,!0,d,null,v);break;case"together":Tc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function il(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Is(i,a,d){if(i!==null&&(a.dependencies=i.dependencies),Fn|=a.lanes,(d&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(s(153));if(a.child!==null){for(i=a.child,d=pn(i,i.pendingProps),a.child=d,d.return=a;i.sibling!==null;)i=i.sibling,d=d.sibling=pn(i,i.pendingProps),d.return=a;d.sibling=null}return a.child}function hy(i,a,d){switch(a.tag){case 3:mf(a),Si();break;case 5:Ah(a);break;case 1:Dt(a.type)&&Ba(a);break;case 4:hc(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,g=a.memoizedProps.value;$e(qa,f._currentValue),f._currentValue=g;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?($e(Ye,Ye.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?xf(i,a,d):($e(Ye,Ye.current&1),i=Is(i,a,d),i!==null?i.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(i.flags&128)!==0){if(f)return yf(i,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),$e(Ye,Ye.current),f)break;return null;case 22:case 23:return a.lanes=0,hf(i,a,d)}return Is(i,a,d)}var bf,Mc,jf,Nf;bf=function(i,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Mc=function(){},jf=function(i,a,d,f){var g=i.memoizedProps;if(g!==f){i=a.stateNode,zn(ws.current);var v=null;switch(d){case"input":g=qt(i,g),f=qt(i,f),v=[];break;case"select":g=se({},g,{value:void 0}),f=se({},f,{value:void 0}),v=[];break;case"textarea":g=Cn(i,g),f=Cn(i,f),v=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=za)}ui(d,f);var S;d=null;for(G in g)if(!f.hasOwnProperty(G)&&g.hasOwnProperty(G)&&g[G]!=null)if(G==="style"){var D=g[G];for(S in D)D.hasOwnProperty(S)&&(d||(d={}),d[S]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(l.hasOwnProperty(G)?v||(v=[]):(v=v||[]).push(G,null));for(G in f){var O=f[G];if(D=g!=null?g[G]:void 0,f.hasOwnProperty(G)&&O!==D&&(O!=null||D!=null))if(G==="style")if(D){for(S in D)!D.hasOwnProperty(S)||O&&O.hasOwnProperty(S)||(d||(d={}),d[S]="");for(S in O)O.hasOwnProperty(S)&&D[S]!==O[S]&&(d||(d={}),d[S]=O[S])}else d||(v||(v=[]),v.push(G,d)),d=O;else G==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(v=v||[]).push(G,O)):G==="children"?typeof O!="string"&&typeof O!="number"||(v=v||[]).push(G,""+O):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(l.hasOwnProperty(G)?(O!=null&&G==="onScroll"&&We("scroll",i),v||D===O||(v=[])):(v=v||[]).push(G,O))}d&&(v=v||[]).push("style",d);var G=v;(a.updateQueue=G)&&(a.flags|=4)}},Nf=function(i,a,d,f){d!==f&&(a.flags|=4)};function kr(i,a){if(!Ve)switch(i.tailMode){case"hidden":a=i.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function vt(i){var a=i.alternate!==null&&i.alternate.child===i.child,d=0,f=0;if(a)for(var g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=d,a}function fy(i,a,d){var f=a.pendingProps;switch(sc(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return Dt(a.type)&&Fa(),vt(a),null;case 3:return f=a.stateNode,Di(),Ue(Rt),Ue(gt),mc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ha(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cs!==null&&(Vc(cs),cs=null))),Mc(i,a),vt(a),null;case 5:fc(a);var g=zn(yr.current);if(d=a.type,i!==null&&a.stateNode!=null)jf(i,a,d,f,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(s(166));return vt(a),null}if(i=zn(ws.current),Ha(a)){f=a.stateNode,d=a.type;var v=a.memoizedProps;switch(f[Ns]=a,f[pr]=v,i=(a.mode&1)!==0,d){case"dialog":We("cancel",f),We("close",f);break;case"iframe":case"object":case"embed":We("load",f);break;case"video":case"audio":for(g=0;g<ur.length;g++)We(ur[g],f);break;case"source":We("error",f);break;case"img":case"image":case"link":We("error",f),We("load",f);break;case"details":We("toggle",f);break;case"input":oi(f,v),We("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},We("invalid",f);break;case"textarea":di(f,v),We("invalid",f)}ui(d,v),g=null;for(var S in v)if(v.hasOwnProperty(S)){var D=v[S];S==="children"?typeof D=="string"?f.textContent!==D&&(v.suppressHydrationWarning!==!0&&Oa(f.textContent,D,i),g=["children",D]):typeof D=="number"&&f.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&Oa(f.textContent,D,i),g=["children",""+D]):l.hasOwnProperty(S)&&D!=null&&S==="onScroll"&&We("scroll",f)}switch(d){case"input":Vt(f),ci(f,v,!0);break;case"textarea":Vt(f),re(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=za)}f=g,a.updateQueue=f,f!==null&&(a.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=S.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=S.createElement(d,{is:f.is}):(i=S.createElement(d),d==="select"&&(S=i,f.multiple?S.multiple=!0:f.size&&(S.size=f.size))):i=S.createElementNS(i,d),i[Ns]=a,i[pr]=f,bf(i,a,!1,!1),a.stateNode=i;e:{switch(S=hi(d,f),d){case"dialog":We("cancel",i),We("close",i),g=f;break;case"iframe":case"object":case"embed":We("load",i),g=f;break;case"video":case"audio":for(g=0;g<ur.length;g++)We(ur[g],i);g=f;break;case"source":We("error",i),g=f;break;case"img":case"image":case"link":We("error",i),We("load",i),g=f;break;case"details":We("toggle",i),g=f;break;case"input":oi(i,f),g=qt(i,f),We("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=se({},f,{value:void 0}),We("invalid",i);break;case"textarea":di(i,f),g=Cn(i,f),We("invalid",i);break;default:g=f}ui(d,g),D=g;for(v in D)if(D.hasOwnProperty(v)){var O=D[v];v==="style"?Rn(i,O):v==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&as(i,O)):v==="children"?typeof O=="string"?(d!=="textarea"||O!=="")&&ys(i,O):typeof O=="number"&&ys(i,""+O):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(l.hasOwnProperty(v)?O!=null&&v==="onScroll"&&We("scroll",i):O!=null&&T(i,v,O,S))}switch(d){case"input":Vt(i),ci(i,f,!1);break;case"textarea":Vt(i),re(i);break;case"option":f.value!=null&&i.setAttribute("value",""+fe(f.value));break;case"select":i.multiple=!!f.multiple,v=f.value,v!=null?rs(i,!!f.multiple,v,!1):f.defaultValue!=null&&rs(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=za)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return vt(a),null;case 6:if(i&&a.stateNode!=null)Nf(i,a,i.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(s(166));if(d=zn(yr.current),zn(ws.current),Ha(a)){if(f=a.stateNode,d=a.memoizedProps,f[Ns]=a,(v=f.nodeValue!==d)&&(i=$t,i!==null))switch(i.tag){case 3:Oa(f.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Oa(f.nodeValue,d,(i.mode&1)!==0)}v&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[Ns]=a,a.stateNode=f}return vt(a),null;case 13:if(Ue(Ye),f=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ve&&Wt!==null&&(a.mode&1)!==0&&(a.flags&128)===0)kh(),Si(),a.flags|=98560,v=!1;else if(v=Ha(a),f!==null&&f.dehydrated!==null){if(i===null){if(!v)throw Error(s(318));if(v=a.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(s(317));v[Ns]=a}else Si(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),v=!1}else cs!==null&&(Vc(cs),cs=null),v=!0;if(!v)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(Ye.current&1)!==0?ot===0&&(ot=3):Qc())),a.updateQueue!==null&&(a.flags|=4),vt(a),null);case 4:return Di(),Mc(i,a),i===null&&hr(a.stateNode.containerInfo),vt(a),null;case 10:return oc(a.type._context),vt(a),null;case 17:return Dt(a.type)&&Fa(),vt(a),null;case 19:if(Ue(Ye),v=a.memoizedState,v===null)return vt(a),null;if(f=(a.flags&128)!==0,S=v.rendering,S===null)if(f)kr(v,!1);else{if(ot!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(S=Xa(i),S!==null){for(a.flags|=128,kr(v,!1),f=S.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)v=d,i=f,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,i=S.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return $e(Ye,Ye.current&1|2),a.child}i=i.sibling}v.tail!==null&&Je()>Mi&&(a.flags|=128,f=!0,kr(v,!1),a.lanes=4194304)}else{if(!f)if(i=Xa(S),i!==null){if(a.flags|=128,f=!0,d=i.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),kr(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!Ve)return vt(a),null}else 2*Je()-v.renderingStartTime>Mi&&d!==1073741824&&(a.flags|=128,f=!0,kr(v,!1),a.lanes=4194304);v.isBackwards?(S.sibling=a.child,a.child=S):(d=v.last,d!==null?d.sibling=S:a.child=S,v.last=S)}return v.tail!==null?(a=v.tail,v.rendering=a,v.tail=a.sibling,v.renderingStartTime=Je(),a.sibling=null,d=Ye.current,$e(Ye,f?d&1|2:d&1),a):(vt(a),null);case 22:case 23:return Yc(),f=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Ut&1073741824)!==0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),null;case 24:return null;case 25:return null}throw Error(s(156,a.tag))}function py(i,a){switch(sc(a),a.tag){case 1:return Dt(a.type)&&Fa(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Di(),Ue(Rt),Ue(gt),mc(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return fc(a),null;case 13:if(Ue(Ye),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Si()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Ue(Ye),null;case 4:return Di(),null;case 10:return oc(a.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var rl=!1,yt=!1,my=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ai(i,a){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Ge(i,a,f)}else d.current=null}function Lc(i,a,d){try{d()}catch(f){Ge(i,a,f)}}var wf=!1;function gy(i,a){if(Yo=_a,i=eh(),Fo(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var g=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{d.nodeType,v.nodeType}catch{d=null;break e}var S=0,D=-1,O=-1,G=0,ie=0,ae=i,ne=null;t:for(;;){for(var he;ae!==d||g!==0&&ae.nodeType!==3||(D=S+g),ae!==v||f!==0&&ae.nodeType!==3||(O=S+f),ae.nodeType===3&&(S+=ae.nodeValue.length),(he=ae.firstChild)!==null;)ne=ae,ae=he;for(;;){if(ae===i)break t;if(ne===d&&++G===g&&(D=S),ne===v&&++ie===f&&(O=S),(he=ae.nextSibling)!==null)break;ae=ne,ne=ae.parentNode}ae=he}d=D===-1||O===-1?null:{start:D,end:O}}else d=null}d=d||{start:0,end:0}}else d=null;for(Qo={focusedElem:i,selectionRange:d},_a=!1,ge=a;ge!==null;)if(a=ge,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,ge=i;else for(;ge!==null;){a=ge;try{var ve=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(ve!==null){var ye=ve.memoizedProps,Ze=ve.memoizedState,Y=a.stateNode,F=Y.getSnapshotBeforeUpdate(a.elementType===a.type?ye:ds(a.type,ye),Ze);Y.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Q=a.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(oe){Ge(a,a.return,oe)}if(i=a.sibling,i!==null){i.return=a.return,ge=i;break}ge=a.return}return ve=wf,wf=!1,ve}function _r(i,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var v=g.destroy;g.destroy=void 0,v!==void 0&&Lc(a,d,v)}g=g.next}while(g!==f)}}function al(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&i)===i){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function Oc(i){var a=i.ref;if(a!==null){var d=i.stateNode;switch(i.tag){case 5:i=d;break;default:i=d}typeof a=="function"?a(i):a.current=i}}function kf(i){var a=i.alternate;a!==null&&(i.alternate=null,kf(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[Ns],delete a[pr],delete a[Jo],delete a[Jv],delete a[Zv])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _f(i){return i.tag===5||i.tag===3||i.tag===4}function Sf(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_f(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function zc(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(i,a):d.insertBefore(i,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(i,d)):(a=d,a.appendChild(i)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=za));else if(f!==4&&(i=i.child,i!==null))for(zc(i,a,d),i=i.sibling;i!==null;)zc(i,a,d),i=i.sibling}function Ic(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.insertBefore(i,a):d.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Ic(i,a,d),i=i.sibling;i!==null;)Ic(i,a,d),i=i.sibling}var ft=null,us=!1;function cn(i,a,d){for(d=d.child;d!==null;)Cf(i,a,d),d=d.sibling}function Cf(i,a,d){if(js&&typeof js.onCommitFiberUnmount=="function")try{js.onCommitFiberUnmount(ya,d)}catch{}switch(d.tag){case 5:yt||Ai(d,a);case 6:var f=ft,g=us;ft=null,cn(i,a,d),ft=f,us=g,ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):ft.removeChild(d.stateNode));break;case 18:ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?Go(i.parentNode,d):i.nodeType===1&&Go(i,d),nr(i)):Go(ft,d.stateNode));break;case 4:f=ft,g=us,ft=d.stateNode.containerInfo,us=!0,cn(i,a,d),ft=f,us=g;break;case 0:case 11:case 14:case 15:if(!yt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var v=g,S=v.destroy;v=v.tag,S!==void 0&&((v&2)!==0||(v&4)!==0)&&Lc(d,a,S),g=g.next}while(g!==f)}cn(i,a,d);break;case 1:if(!yt&&(Ai(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(D){Ge(d,a,D)}cn(i,a,d);break;case 21:cn(i,a,d);break;case 22:d.mode&1?(yt=(f=yt)||d.memoizedState!==null,cn(i,a,d),yt=f):cn(i,a,d);break;default:cn(i,a,d)}}function Ef(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new my),a.forEach(function(f){var g=_y.bind(null,i,f);d.has(f)||(d.add(f),f.then(g,g))})}}function hs(i,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var g=d[f];try{var v=i,S=a,D=S;e:for(;D!==null;){switch(D.tag){case 5:ft=D.stateNode,us=!1;break e;case 3:ft=D.stateNode.containerInfo,us=!0;break e;case 4:ft=D.stateNode.containerInfo,us=!0;break e}D=D.return}if(ft===null)throw Error(s(160));Cf(v,S,g),ft=null,us=!1;var O=g.alternate;O!==null&&(O.return=null),g.return=null}catch(G){Ge(g,a,G)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)Rf(a,i),a=a.sibling}function Rf(i,a){var d=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hs(a,i),_s(i),f&4){try{_r(3,i,i.return),al(3,i)}catch(ye){Ge(i,i.return,ye)}try{_r(5,i,i.return)}catch(ye){Ge(i,i.return,ye)}}break;case 1:hs(a,i),_s(i),f&512&&d!==null&&Ai(d,d.return);break;case 5:if(hs(a,i),_s(i),f&512&&d!==null&&Ai(d,d.return),i.flags&32){var g=i.stateNode;try{ys(g,"")}catch(ye){Ge(i,i.return,ye)}}if(f&4&&(g=i.stateNode,g!=null)){var v=i.memoizedProps,S=d!==null?d.memoizedProps:v,D=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&Ks(g,v),hi(D,S);var G=hi(D,v);for(S=0;S<O.length;S+=2){var ie=O[S],ae=O[S+1];ie==="style"?Rn(g,ae):ie==="dangerouslySetInnerHTML"?as(g,ae):ie==="children"?ys(g,ae):T(g,ie,ae,G)}switch(D){case"input":_n(g,v);break;case"textarea":En(g,v);break;case"select":var ne=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var he=v.value;he!=null?rs(g,!!v.multiple,he,!1):ne!==!!v.multiple&&(v.defaultValue!=null?rs(g,!!v.multiple,v.defaultValue,!0):rs(g,!!v.multiple,v.multiple?[]:"",!1))}g[pr]=v}catch(ye){Ge(i,i.return,ye)}}break;case 6:if(hs(a,i),_s(i),f&4){if(i.stateNode===null)throw Error(s(162));g=i.stateNode,v=i.memoizedProps;try{g.nodeValue=v}catch(ye){Ge(i,i.return,ye)}}break;case 3:if(hs(a,i),_s(i),f&4&&d!==null&&d.memoizedState.isDehydrated)try{nr(a.containerInfo)}catch(ye){Ge(i,i.return,ye)}break;case 4:hs(a,i),_s(i);break;case 13:hs(a,i),_s(i),g=i.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||($c=Je())),f&4&&Ef(i);break;case 22:if(ie=d!==null&&d.memoizedState!==null,i.mode&1?(yt=(G=yt)||ie,hs(a,i),yt=G):hs(a,i),_s(i),f&8192){if(G=i.memoizedState!==null,(i.stateNode.isHidden=G)&&!ie&&(i.mode&1)!==0)for(ge=i,ie=i.child;ie!==null;){for(ae=ge=ie;ge!==null;){switch(ne=ge,he=ne.child,ne.tag){case 0:case 11:case 14:case 15:_r(4,ne,ne.return);break;case 1:Ai(ne,ne.return);var ve=ne.stateNode;if(typeof ve.componentWillUnmount=="function"){f=ne,d=ne.return;try{a=f,ve.props=a.memoizedProps,ve.state=a.memoizedState,ve.componentWillUnmount()}catch(ye){Ge(f,d,ye)}}break;case 5:Ai(ne,ne.return);break;case 22:if(ne.memoizedState!==null){Af(ae);continue}}he!==null?(he.return=ne,ge=he):Af(ae)}ie=ie.sibling}e:for(ie=null,ae=i;;){if(ae.tag===5){if(ie===null){ie=ae;try{g=ae.stateNode,G?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=ae.stateNode,O=ae.memoizedProps.style,S=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Et("display",S))}catch(ye){Ge(i,i.return,ye)}}}else if(ae.tag===6){if(ie===null)try{ae.stateNode.nodeValue=G?"":ae.memoizedProps}catch(ye){Ge(i,i.return,ye)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===i)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===i)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===i)break e;ie===ae&&(ie=null),ae=ae.return}ie===ae&&(ie=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:hs(a,i),_s(i),f&4&&Ef(i);break;case 21:break;default:hs(a,i),_s(i)}}function _s(i){var a=i.flags;if(a&2){try{e:{for(var d=i.return;d!==null;){if(_f(d)){var f=d;break e}d=d.return}throw Error(s(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(ys(g,""),f.flags&=-33);var v=Sf(i);Ic(i,v,g);break;case 3:case 4:var S=f.stateNode.containerInfo,D=Sf(i);zc(i,D,S);break;default:throw Error(s(161))}}catch(O){Ge(i,i.return,O)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function xy(i,a,d){ge=i,Df(i)}function Df(i,a,d){for(var f=(i.mode&1)!==0;ge!==null;){var g=ge,v=g.child;if(g.tag===22&&f){var S=g.memoizedState!==null||rl;if(!S){var D=g.alternate,O=D!==null&&D.memoizedState!==null||yt;D=rl;var G=yt;if(rl=S,(yt=O)&&!G)for(ge=g;ge!==null;)S=ge,O=S.child,S.tag===22&&S.memoizedState!==null?Tf(g):O!==null?(O.return=S,ge=O):Tf(g);for(;v!==null;)ge=v,Df(v),v=v.sibling;ge=g,rl=D,yt=G}Pf(i)}else(g.subtreeFlags&8772)!==0&&v!==null?(v.return=g,ge=v):Pf(i)}}function Pf(i){for(;ge!==null;){var a=ge;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:yt||al(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!yt)if(d===null)f.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:ds(a.type,d.memoizedProps);f.componentDidUpdate(g,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=a.updateQueue;v!==null&&Ph(a,v,f);break;case 3:var S=a.updateQueue;if(S!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}Ph(a,S,d)}break;case 5:var D=a.stateNode;if(d===null&&a.flags&4){d=D;var O=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&d.focus();break;case"img":O.src&&(d.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var G=a.alternate;if(G!==null){var ie=G.memoizedState;if(ie!==null){var ae=ie.dehydrated;ae!==null&&nr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}yt||a.flags&512&&Oc(a)}catch(ne){Ge(a,a.return,ne)}}if(a===i){ge=null;break}if(d=a.sibling,d!==null){d.return=a.return,ge=d;break}ge=a.return}}function Af(i){for(;ge!==null;){var a=ge;if(a===i){ge=null;break}var d=a.sibling;if(d!==null){d.return=a.return,ge=d;break}ge=a.return}}function Tf(i){for(;ge!==null;){var a=ge;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{al(4,a)}catch(O){Ge(a,d,O)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var g=a.return;try{f.componentDidMount()}catch(O){Ge(a,g,O)}}var v=a.return;try{Oc(a)}catch(O){Ge(a,v,O)}break;case 5:var S=a.return;try{Oc(a)}catch(O){Ge(a,S,O)}}}catch(O){Ge(a,a.return,O)}if(a===i){ge=null;break}var D=a.sibling;if(D!==null){D.return=a.return,ge=D;break}ge=a.return}}var vy=Math.ceil,ll=W.ReactCurrentDispatcher,Fc=W.ReactCurrentOwner,Jt=W.ReactCurrentBatchConfig,Ae=0,ut=null,it=null,pt=0,Ut=0,Ti=nn(0),ot=0,Sr=null,Fn=0,ol=0,Bc=0,Cr=null,At=null,$c=0,Mi=1/0,Fs=null,cl=!1,Wc=null,dn=null,dl=!1,un=null,ul=0,Er=0,Uc=null,hl=-1,fl=0;function Ct(){return(Ae&6)!==0?Je():hl!==-1?hl:hl=Je()}function hn(i){return(i.mode&1)===0?1:(Ae&2)!==0&&pt!==0?pt&-pt:ty.transition!==null?(fl===0&&(fl=_u()),fl):(i=Ie,i!==0||(i=window.event,i=i===void 0?16:Mu(i.type)),i)}function fs(i,a,d,f){if(50<Er)throw Er=0,Uc=null,Error(s(185));Ji(i,d,f),((Ae&2)===0||i!==ut)&&(i===ut&&((Ae&2)===0&&(ol|=d),ot===4&&fn(i,pt)),Tt(i,f),d===1&&Ae===0&&(a.mode&1)===0&&(Mi=Je()+500,$a&&an()))}function Tt(i,a){var d=i.callbackNode;tv(i,a);var f=Na(i,i===ut?pt:0);if(f===0)d!==null&&Nu(d),i.callbackNode=null,i.callbackPriority=0;else if(a=f&-f,i.callbackPriority!==a){if(d!=null&&Nu(d),a===1)i.tag===0?ey(Lf.bind(null,i)):yh(Lf.bind(null,i)),Xv(function(){(Ae&6)===0&&an()}),d=null;else{switch(Su(f)){case 1:d=No;break;case 4:d=wu;break;case 16:d=va;break;case 536870912:d=ku;break;default:d=va}d=Uf(d,Mf.bind(null,i))}i.callbackPriority=a,i.callbackNode=d}}function Mf(i,a){if(hl=-1,fl=0,(Ae&6)!==0)throw Error(s(327));var d=i.callbackNode;if(Li()&&i.callbackNode!==d)return null;var f=Na(i,i===ut?pt:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||a)a=pl(i,f);else{a=f;var g=Ae;Ae|=2;var v=zf();(ut!==i||pt!==a)&&(Fs=null,Mi=Je()+500,$n(i,a));do try{jy();break}catch(D){Of(i,D)}while(!0);lc(),ll.current=v,Ae=g,it!==null?a=0:(ut=null,pt=0,a=ot)}if(a!==0){if(a===2&&(g=wo(i),g!==0&&(f=g,a=Hc(i,g))),a===1)throw d=Sr,$n(i,0),fn(i,f),Tt(i,Je()),d;if(a===6)fn(i,f);else{if(g=i.current.alternate,(f&30)===0&&!yy(g)&&(a=pl(i,f),a===2&&(v=wo(i),v!==0&&(f=v,a=Hc(i,v))),a===1))throw d=Sr,$n(i,0),fn(i,f),Tt(i,Je()),d;switch(i.finishedWork=g,i.finishedLanes=f,a){case 0:case 1:throw Error(s(345));case 2:Wn(i,At,Fs);break;case 3:if(fn(i,f),(f&130023424)===f&&(a=$c+500-Je(),10<a)){if(Na(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Ct(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Xo(Wn.bind(null,i,At,Fs),a);break}Wn(i,At,Fs);break;case 4:if(fn(i,f),(f&4194240)===f)break;for(a=i.eventTimes,g=-1;0<f;){var S=31-ls(f);v=1<<S,S=a[S],S>g&&(g=S),f&=~v}if(f=g,f=Je()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*vy(f/1960))-f,10<f){i.timeoutHandle=Xo(Wn.bind(null,i,At,Fs),f);break}Wn(i,At,Fs);break;case 5:Wn(i,At,Fs);break;default:throw Error(s(329))}}}return Tt(i,Je()),i.callbackNode===d?Mf.bind(null,i):null}function Hc(i,a){var d=Cr;return i.current.memoizedState.isDehydrated&&($n(i,a).flags|=256),i=pl(i,a),i!==2&&(a=At,At=d,a!==null&&Vc(a)),i}function Vc(i){At===null?At=i:At.push.apply(At,i)}function yy(i){for(var a=i;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var g=d[f],v=g.getSnapshot;g=g.value;try{if(!os(v(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fn(i,a){for(a&=~Bc,a&=~ol,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var d=31-ls(a),f=1<<d;i[d]=-1,a&=~f}}function Lf(i){if((Ae&6)!==0)throw Error(s(327));Li();var a=Na(i,0);if((a&1)===0)return Tt(i,Je()),null;var d=pl(i,a);if(i.tag!==0&&d===2){var f=wo(i);f!==0&&(a=f,d=Hc(i,f))}if(d===1)throw d=Sr,$n(i,0),fn(i,a),Tt(i,Je()),d;if(d===6)throw Error(s(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Wn(i,At,Fs),Tt(i,Je()),null}function qc(i,a){var d=Ae;Ae|=1;try{return i(a)}finally{Ae=d,Ae===0&&(Mi=Je()+500,$a&&an())}}function Bn(i){un!==null&&un.tag===0&&(Ae&6)===0&&Li();var a=Ae;Ae|=1;var d=Jt.transition,f=Ie;try{if(Jt.transition=null,Ie=1,i)return i()}finally{Ie=f,Jt.transition=d,Ae=a,(Ae&6)===0&&an()}}function Yc(){Ut=Ti.current,Ue(Ti)}function $n(i,a){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,Kv(d)),it!==null)for(d=it.return;d!==null;){var f=d;switch(sc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Fa();break;case 3:Di(),Ue(Rt),Ue(gt),mc();break;case 5:fc(f);break;case 4:Di();break;case 13:Ue(Ye);break;case 19:Ue(Ye);break;case 10:oc(f.type._context);break;case 22:case 23:Yc()}d=d.return}if(ut=i,it=i=pn(i.current,null),pt=Ut=a,ot=0,Sr=null,Bc=ol=Fn=0,At=Cr=null,On!==null){for(a=0;a<On.length;a++)if(d=On[a],f=d.interleaved,f!==null){d.interleaved=null;var g=f.next,v=d.pending;if(v!==null){var S=v.next;v.next=g,f.next=S}d.pending=f}On=null}return i}function Of(i,a){do{var d=it;try{if(lc(),Ga.current=tl,Ja){for(var f=Qe.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Ja=!1}if(In=0,dt=lt=Qe=null,br=!1,jr=0,Fc.current=null,d===null||d.return===null){ot=1,Sr=a,it=null;break}e:{var v=i,S=d.return,D=d,O=a;if(a=pt,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=O,ie=D,ae=ie.tag;if((ie.mode&1)===0&&(ae===0||ae===11||ae===15)){var ne=ie.alternate;ne?(ie.updateQueue=ne.updateQueue,ie.memoizedState=ne.memoizedState,ie.lanes=ne.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var he=lf(S);if(he!==null){he.flags&=-257,of(he,S,D,v,a),he.mode&1&&af(v,G,a),a=he,O=G;var ve=a.updateQueue;if(ve===null){var ye=new Set;ye.add(O),a.updateQueue=ye}else ve.add(O);break e}else{if((a&1)===0){af(v,G,a),Qc();break e}O=Error(s(426))}}else if(Ve&&D.mode&1){var Ze=lf(S);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),of(Ze,S,D,v,a),rc(Pi(O,D));break e}}v=O=Pi(O,D),ot!==4&&(ot=2),Cr===null?Cr=[v]:Cr.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,a&=-a,v.lanes|=a;var Y=nf(v,O,a);Dh(v,Y);break e;case 1:D=O;var F=v.type,Q=v.stateNode;if((v.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(dn===null||!dn.has(Q)))){v.flags|=65536,a&=-a,v.lanes|=a;var oe=rf(v,D,a);Dh(v,oe);break e}}v=v.return}while(v!==null)}Ff(d)}catch(je){a=je,it===d&&d!==null&&(it=d=d.return);continue}break}while(!0)}function zf(){var i=ll.current;return ll.current=tl,i===null?tl:i}function Qc(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||(Fn&268435455)===0&&(ol&268435455)===0||fn(ut,pt)}function pl(i,a){var d=Ae;Ae|=2;var f=zf();(ut!==i||pt!==a)&&(Fs=null,$n(i,a));do try{by();break}catch(g){Of(i,g)}while(!0);if(lc(),Ae=d,ll.current=f,it!==null)throw Error(s(261));return ut=null,pt=0,ot}function by(){for(;it!==null;)If(it)}function jy(){for(;it!==null&&!qx();)If(it)}function If(i){var a=Wf(i.alternate,i,Ut);i.memoizedProps=i.pendingProps,a===null?Ff(i):it=a,Fc.current=null}function Ff(i){var a=i;do{var d=a.alternate;if(i=a.return,(a.flags&32768)===0){if(d=fy(d,a,Ut),d!==null){it=d;return}}else{if(d=py(d,a),d!==null){d.flags&=32767,it=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ot=6,it=null;return}}if(a=a.sibling,a!==null){it=a;return}it=a=i}while(a!==null);ot===0&&(ot=5)}function Wn(i,a,d){var f=Ie,g=Jt.transition;try{Jt.transition=null,Ie=1,Ny(i,a,d,f)}finally{Jt.transition=g,Ie=f}return null}function Ny(i,a,d,f){do Li();while(un!==null);if((Ae&6)!==0)throw Error(s(327));d=i.finishedWork;var g=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(s(177));i.callbackNode=null,i.callbackPriority=0;var v=d.lanes|d.childLanes;if(sv(i,v),i===ut&&(it=ut=null,pt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||dl||(dl=!0,Uf(va,function(){return Li(),null})),v=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||v){v=Jt.transition,Jt.transition=null;var S=Ie;Ie=1;var D=Ae;Ae|=4,Fc.current=null,gy(i,d),Rf(d,i),Wv(Qo),_a=!!Yo,Qo=Yo=null,i.current=d,xy(d),Yx(),Ae=D,Ie=S,Jt.transition=v}else i.current=d;if(dl&&(dl=!1,un=i,ul=g),v=i.pendingLanes,v===0&&(dn=null),Xx(d.stateNode),Tt(i,Je()),a!==null)for(f=i.onRecoverableError,d=0;d<a.length;d++)g=a[d],f(g.value,{componentStack:g.stack,digest:g.digest});if(cl)throw cl=!1,i=Wc,Wc=null,i;return(ul&1)!==0&&i.tag!==0&&Li(),v=i.pendingLanes,(v&1)!==0?i===Uc?Er++:(Er=0,Uc=i):Er=0,an(),null}function Li(){if(un!==null){var i=Su(ul),a=Jt.transition,d=Ie;try{if(Jt.transition=null,Ie=16>i?16:i,un===null)var f=!1;else{if(i=un,un=null,ul=0,(Ae&6)!==0)throw Error(s(331));var g=Ae;for(Ae|=4,ge=i.current;ge!==null;){var v=ge,S=v.child;if((ge.flags&16)!==0){var D=v.deletions;if(D!==null){for(var O=0;O<D.length;O++){var G=D[O];for(ge=G;ge!==null;){var ie=ge;switch(ie.tag){case 0:case 11:case 15:_r(8,ie,v)}var ae=ie.child;if(ae!==null)ae.return=ie,ge=ae;else for(;ge!==null;){ie=ge;var ne=ie.sibling,he=ie.return;if(kf(ie),ie===G){ge=null;break}if(ne!==null){ne.return=he,ge=ne;break}ge=he}}}var ve=v.alternate;if(ve!==null){var ye=ve.child;if(ye!==null){ve.child=null;do{var Ze=ye.sibling;ye.sibling=null,ye=Ze}while(ye!==null)}}ge=v}}if((v.subtreeFlags&2064)!==0&&S!==null)S.return=v,ge=S;else e:for(;ge!==null;){if(v=ge,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:_r(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,ge=Y;break e}ge=v.return}}var F=i.current;for(ge=F;ge!==null;){S=ge;var Q=S.child;if((S.subtreeFlags&2064)!==0&&Q!==null)Q.return=S,ge=Q;else e:for(S=F;ge!==null;){if(D=ge,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:al(9,D)}}catch(je){Ge(D,D.return,je)}if(D===S){ge=null;break e}var oe=D.sibling;if(oe!==null){oe.return=D.return,ge=oe;break e}ge=D.return}}if(Ae=g,an(),js&&typeof js.onPostCommitFiberRoot=="function")try{js.onPostCommitFiberRoot(ya,i)}catch{}f=!0}return f}finally{Ie=d,Jt.transition=a}}return!1}function Bf(i,a,d){a=Pi(d,a),a=nf(i,a,1),i=on(i,a,1),a=Ct(),i!==null&&(Ji(i,1,a),Tt(i,a))}function Ge(i,a,d){if(i.tag===3)Bf(i,i,d);else for(;a!==null;){if(a.tag===3){Bf(a,i,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(dn===null||!dn.has(f))){i=Pi(d,i),i=rf(a,i,1),a=on(a,i,1),i=Ct(),a!==null&&(Ji(a,1,i),Tt(a,i));break}}a=a.return}}function wy(i,a,d){var f=i.pingCache;f!==null&&f.delete(a),a=Ct(),i.pingedLanes|=i.suspendedLanes&d,ut===i&&(pt&d)===d&&(ot===4||ot===3&&(pt&130023424)===pt&&500>Je()-$c?$n(i,0):Bc|=d),Tt(i,a)}function $f(i,a){a===0&&((i.mode&1)===0?a=1:(a=ja,ja<<=1,(ja&130023424)===0&&(ja=4194304)));var d=Ct();i=Os(i,a),i!==null&&(Ji(i,a,d),Tt(i,d))}function ky(i){var a=i.memoizedState,d=0;a!==null&&(d=a.retryLane),$f(i,d)}function _y(i,a){var d=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(d=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(s(314))}f!==null&&f.delete(a),$f(i,d)}var Wf;Wf=function(i,a,d){if(i!==null)if(i.memoizedProps!==a.pendingProps||Rt.current)Pt=!0;else{if((i.lanes&d)===0&&(a.flags&128)===0)return Pt=!1,hy(i,a,d);Pt=(i.flags&131072)!==0}else Pt=!1,Ve&&(a.flags&1048576)!==0&&bh(a,Ua,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;il(i,a),i=a.pendingProps;var g=wi(a,gt.current);Ri(a,d),g=vc(null,a,f,i,g,d);var v=yc();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Dt(f)?(v=!0,Ba(a)):v=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,uc(a),g.updater=sl,a.stateNode=g,g._reactInternals=a,_c(a,f,i,d),a=Rc(null,a,f,!0,v,d)):(a.tag=0,Ve&&v&&tc(a),St(null,a,g,d),a=a.child),a;case 16:f=a.elementType;e:{switch(il(i,a),i=a.pendingProps,g=f._init,f=g(f._payload),a.type=f,g=a.tag=Cy(f),i=ds(f,i),g){case 0:a=Ec(null,a,f,i,d);break e;case 1:a=pf(null,a,f,i,d);break e;case 11:a=cf(null,a,f,i,d);break e;case 14:a=df(null,a,f,ds(f.type,i),d);break e}throw Error(s(306,f,""))}return a;case 0:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),Ec(i,a,f,g,d);case 1:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),pf(i,a,f,g,d);case 3:e:{if(mf(a),i===null)throw Error(s(387));f=a.pendingProps,v=a.memoizedState,g=v.element,Rh(i,a),Ka(a,f,null,d);var S=a.memoizedState;if(f=S.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){g=Pi(Error(s(423)),a),a=gf(i,a,f,d,g);break e}else if(f!==g){g=Pi(Error(s(424)),a),a=gf(i,a,f,d,g);break e}else for(Wt=sn(a.stateNode.containerInfo.firstChild),$t=a,Ve=!0,cs=null,d=Ch(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Si(),f===g){a=Is(i,a,d);break e}St(i,a,f,d)}a=a.child}return a;case 5:return Ah(a),i===null&&ic(a),f=a.type,g=a.pendingProps,v=i!==null?i.memoizedProps:null,S=g.children,Ko(f,g)?S=null:v!==null&&Ko(f,v)&&(a.flags|=32),ff(i,a),St(i,a,S,d),a.child;case 6:return i===null&&ic(a),null;case 13:return xf(i,a,d);case 4:return hc(a,a.stateNode.containerInfo),f=a.pendingProps,i===null?a.child=Ci(a,null,f,d):St(i,a,f,d),a.child;case 11:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),cf(i,a,f,g,d);case 7:return St(i,a,a.pendingProps,d),a.child;case 8:return St(i,a,a.pendingProps.children,d),a.child;case 12:return St(i,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,g=a.pendingProps,v=a.memoizedProps,S=g.value,$e(qa,f._currentValue),f._currentValue=S,v!==null)if(os(v.value,S)){if(v.children===g.children&&!Rt.current){a=Is(i,a,d);break e}}else for(v=a.child,v!==null&&(v.return=a);v!==null;){var D=v.dependencies;if(D!==null){S=v.child;for(var O=D.firstContext;O!==null;){if(O.context===f){if(v.tag===1){O=zs(-1,d&-d),O.tag=2;var G=v.updateQueue;if(G!==null){G=G.shared;var ie=G.pending;ie===null?O.next=O:(O.next=ie.next,ie.next=O),G.pending=O}}v.lanes|=d,O=v.alternate,O!==null&&(O.lanes|=d),cc(v.return,d,a),D.lanes|=d;break}O=O.next}}else if(v.tag===10)S=v.type===a.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(s(341));S.lanes|=d,D=S.alternate,D!==null&&(D.lanes|=d),cc(S,d,a),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===a){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}St(i,a,g.children,d),a=a.child}return a;case 9:return g=a.type,f=a.pendingProps.children,Ri(a,d),g=Xt(g),f=f(g),a.flags|=1,St(i,a,f,d),a.child;case 14:return f=a.type,g=ds(f,a.pendingProps),g=ds(f.type,g),df(i,a,f,g,d);case 15:return uf(i,a,a.type,a.pendingProps,d);case 17:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),il(i,a),a.tag=1,Dt(f)?(i=!0,Ba(a)):i=!1,Ri(a,d),tf(a,f,g),_c(a,f,g,d),Rc(null,a,f,!0,i,d);case 19:return yf(i,a,d);case 22:return hf(i,a,d)}throw Error(s(156,a.tag))};function Uf(i,a){return ju(i,a)}function Sy(i,a,d,f){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(i,a,d,f){return new Sy(i,a,d,f)}function Kc(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Cy(i){if(typeof i=="function")return Kc(i)?1:0;if(i!=null){if(i=i.$$typeof,i===I)return 11;if(i===X)return 14}return 2}function pn(i,a){var d=i.alternate;return d===null?(d=Zt(i.tag,a,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=a,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,a=i.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function ml(i,a,d,f,g,v){var S=2;if(f=i,typeof i=="function")Kc(i)&&(S=1);else if(typeof i=="string")S=5;else e:switch(i){case L:return Un(d.children,g,v,a);case P:S=8,g|=8;break;case A:return i=Zt(12,d,a,g|2),i.elementType=A,i.lanes=v,i;case $:return i=Zt(13,d,a,g),i.elementType=$,i.lanes=v,i;case U:return i=Zt(19,d,a,g),i.elementType=U,i.lanes=v,i;case z:return gl(d,g,v,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case K:S=10;break e;case q:S=9;break e;case I:S=11;break e;case X:S=14;break e;case k:S=16,f=null;break e}throw Error(s(130,i==null?i:typeof i,""))}return a=Zt(S,d,a,g),a.elementType=i,a.type=f,a.lanes=v,a}function Un(i,a,d,f){return i=Zt(7,i,f,a),i.lanes=d,i}function gl(i,a,d,f){return i=Zt(22,i,f,a),i.elementType=z,i.lanes=d,i.stateNode={isHidden:!1},i}function Xc(i,a,d){return i=Zt(6,i,null,a),i.lanes=d,i}function Gc(i,a,d){return a=Zt(4,i.children!==null?i.children:[],i.key,a),a.lanes=d,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function Ey(i,a,d,f,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Jc(i,a,d,f,g,v,S,D,O){return i=new Ey(i,a,d,D,O),a===1?(a=1,v===!0&&(a|=8)):a=0,v=Zt(3,null,null,a),i.current=v,v.stateNode=i,v.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},uc(v),i}function Ry(i,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:f==null?null:""+f,children:i,containerInfo:a,implementation:d}}function Hf(i){if(!i)return rn;i=i._reactInternals;e:{if(Pn(i)!==i||i.tag!==1)throw Error(s(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Dt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(s(171))}if(i.tag===1){var d=i.type;if(Dt(d))return xh(i,d,a)}return a}function Vf(i,a,d,f,g,v,S,D,O){return i=Jc(d,f,!0,i,g,v,S,D,O),i.context=Hf(null),d=i.current,f=Ct(),g=hn(d),v=zs(f,g),v.callback=a??null,on(d,v,g),i.current.lanes=g,Ji(i,g,f),Tt(i,f),i}function xl(i,a,d,f){var g=a.current,v=Ct(),S=hn(g);return d=Hf(d),a.context===null?a.context=d:a.pendingContext=d,a=zs(v,S),a.payload={element:i},f=f===void 0?null:f,f!==null&&(a.callback=f),i=on(g,a,S),i!==null&&(fs(i,g,S,v),Qa(i,g,S)),S}function vl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function qf(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<a?d:a}}function Zc(i,a){qf(i,a),(i=i.alternate)&&qf(i,a)}function Dy(){return null}var Yf=typeof reportError=="function"?reportError:function(i){console.error(i)};function ed(i){this._internalRoot=i}yl.prototype.render=ed.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(s(409));xl(i,a,null,null)},yl.prototype.unmount=ed.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Bn(function(){xl(null,i,null,null)}),a[As]=null}};function yl(i){this._internalRoot=i}yl.prototype.unstable_scheduleHydration=function(i){if(i){var a=Ru();i={blockedOn:null,target:i,priority:a};for(var d=0;d<Zs.length&&a!==0&&a<Zs[d].priority;d++);Zs.splice(d,0,i),d===0&&Au(i)}};function td(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function bl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Py(i,a,d,f,g){if(g){if(typeof f=="function"){var v=f;f=function(){var G=vl(S);v.call(G)}}var S=Vf(a,f,i,0,null,!1,!1,"",Qf);return i._reactRootContainer=S,i[As]=S.current,hr(i.nodeType===8?i.parentNode:i),Bn(),S}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var D=f;f=function(){var G=vl(O);D.call(G)}}var O=Jc(i,0,!1,null,null,!1,!1,"",Qf);return i._reactRootContainer=O,i[As]=O.current,hr(i.nodeType===8?i.parentNode:i),Bn(function(){xl(a,O,d,f)}),O}function jl(i,a,d,f,g){var v=d._reactRootContainer;if(v){var S=v;if(typeof g=="function"){var D=g;g=function(){var O=vl(S);D.call(O)}}xl(a,S,i,g)}else S=Py(d,a,i,g,f);return vl(S)}Cu=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var d=Gi(a.pendingLanes);d!==0&&(_o(a,d|1),Tt(a,Je()),(Ae&6)===0&&(Mi=Je()+500,an()))}break;case 13:Bn(function(){var f=Os(i,1);if(f!==null){var g=Ct();fs(f,i,1,g)}}),Zc(i,1)}},So=function(i){if(i.tag===13){var a=Os(i,134217728);if(a!==null){var d=Ct();fs(a,i,134217728,d)}Zc(i,134217728)}},Eu=function(i){if(i.tag===13){var a=hn(i),d=Os(i,a);if(d!==null){var f=Ct();fs(d,i,a,f)}Zc(i,a)}},Ru=function(){return Ie},Du=function(i,a){var d=Ie;try{return Ie=i,a()}finally{Ie=d}},me=function(i,a,d){switch(a){case"input":if(_n(i,d),a=d.name,d.type==="radio"&&a!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==i&&f.form===i.form){var g=Ia(f);if(!g)throw Error(s(90));vs(f),_n(f,g)}}}break;case"textarea":En(i,d);break;case"select":a=d.value,a!=null&&rs(i,!!d.multiple,a,!1)}},Ps=qc,Ft=Bn;var Ay={usingClientEntryPoint:!1,Events:[mr,ji,Ia,Yi,Dn,qc]},Rr={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ty={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=yu(i),i===null?null:i.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Dy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{ya=Nl.inject(Ty),js=Nl}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ay,Mt.createPortal=function(i,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(a))throw Error(s(200));return Ry(i,a,null,d)},Mt.createRoot=function(i,a){if(!td(i))throw Error(s(299));var d=!1,f="",g=Yf;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Jc(i,1,!1,null,null,d,!1,f,g),i[As]=a.current,hr(i.nodeType===8?i.parentNode:i),new ed(a)},Mt.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=yu(a),i=i===null?null:i.stateNode,i},Mt.flushSync=function(i){return Bn(i)},Mt.hydrate=function(i,a,d){if(!bl(a))throw Error(s(200));return jl(null,i,a,!0,d)},Mt.hydrateRoot=function(i,a,d){if(!td(i))throw Error(s(405));var f=d!=null&&d.hydratedSources||null,g=!1,v="",S=Yf;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(v=d.identifierPrefix),d.onRecoverableError!==void 0&&(S=d.onRecoverableError)),a=Vf(a,null,i,1,d??null,g,!1,v,S),i[As]=a.current,hr(i),f)for(i=0;i<f.length;i++)d=f[i],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new yl(a)},Mt.render=function(i,a,d){if(!bl(a))throw Error(s(200));return jl(null,i,a,!1,d)},Mt.unmountComponentAtNode=function(i){if(!bl(i))throw Error(s(40));return i._reactRootContainer?(Bn(function(){jl(null,null,i,!1,function(){i._reactRootContainer=null,i[As]=null})}),!0):!1},Mt.unstable_batchedUpdates=qc,Mt.unstable_renderSubtreeIntoContainer=function(i,a,d,f){if(!bl(d))throw Error(s(200));if(i==null||i._reactInternals===void 0)throw Error(s(38));return jl(i,a,d,!1,f)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var sp;function ig(){if(sp)return id.exports;sp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),id.exports=Hy(),id.exports}var np;function Vy(){if(np)return wl;np=1;var t=ig();return wl.createRoot=t.createRoot,wl.hydrateRoot=t.hydrateRoot,wl}var qy=Vy();const Yy=sg(qy);ig();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Xr.apply(this,arguments)}var xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xn||(xn={}));const ip="popstate";function Qy(t){t===void 0&&(t={});function e(r,l){let{pathname:o,search:c,hash:u}=r.location;return Ed("",{pathname:o,search:c,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function s(r,l){return typeof l=="string"?l:Kl(l)}return Xy(e,s,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ky(){return Math.random().toString(36).substr(2,8)}function rp(t,e){return{usr:t.state,key:t.key,idx:e}}function Ed(t,e,s,r){return s===void 0&&(s=null),Xr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hi(e):e,{state:s,key:e&&e.key||r||Ky()})}function Kl(t){let{pathname:e="/",search:s="",hash:r=""}=t;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hi(t){let e={};if(t){let s=t.indexOf("#");s>=0&&(e.hash=t.substr(s),t=t.substr(0,s));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Xy(t,e,s,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,c=l.history,u=xn.Pop,h=null,p=m();p==null&&(p=0,c.replaceState(Xr({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function x(){u=xn.Pop;let y=m(),C=y==null?null:y-p;p=y,h&&h({action:u,location:j.location,delta:C})}function N(y,C){u=xn.Push;let R=Ed(j.location,y,C);p=m()+1;let T=rp(R,p),W=j.createHref(R);try{c.pushState(T,"",W)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;l.location.assign(W)}o&&h&&h({action:u,location:j.location,delta:1})}function w(y,C){u=xn.Replace;let R=Ed(j.location,y,C);p=m();let T=rp(R,p),W=j.createHref(R);c.replaceState(T,"",W),o&&h&&h({action:u,location:j.location,delta:0})}function b(y){let C=l.location.origin!=="null"?l.location.origin:l.location.href,R=typeof y=="string"?y:Kl(y);return R=R.replace(/ $/,"%20"),at(C,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,C)}let j={get action(){return u},get location(){return t(l,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(ip,x),h=y,()=>{l.removeEventListener(ip,x),h=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let C=b(y);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:N,replace:w,go(y){return c.go(y)}};return j}var ap;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ap||(ap={}));function Gy(t,e,s){return s===void 0&&(s="/"),Jy(t,e,s)}function Jy(t,e,s,r){let l=typeof e=="string"?Hi(e):e,o=Qd(l.pathname||"/",s);if(o==null)return null;let c=rg(t);Zy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=ub(o);u=ob(c[h],p)}return u}function rg(t,e,s,r){e===void 0&&(e=[]),s===void 0&&(s=[]),r===void 0&&(r="");let l=(o,c,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};h.relativePath.startsWith("/")&&(at(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=jn([r,h.relativePath]),m=s.concat(h);o.children&&o.children.length>0&&(at(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),rg(o.children,e,m,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:ab(p,o.index),routesMeta:m})};return t.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,c);else for(let h of ag(o.path))l(o,c,h)}),e}function ag(t){let e=t.split("/");if(e.length===0)return[];let[s,...r]=e,l=s.endsWith("?"),o=s.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let c=ag(r.join("/")),u=[];return u.push(...c.map(h=>h===""?o:[o,h].join("/"))),l&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function Zy(t){t.sort((e,s)=>e.score!==s.score?s.score-e.score:lb(e.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}const eb=/^:[\w-]+$/,tb=3,sb=2,nb=1,ib=10,rb=-2,lp=t=>t==="*";function ab(t,e){let s=t.split("/"),r=s.length;return s.some(lp)&&(r+=rb),e&&(r+=sb),s.filter(l=>!lp(l)).reduce((l,o)=>l+(eb.test(o)?tb:o===""?nb:ib),r)}function lb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,l)=>r===e[l])?t[t.length-1]-e[e.length-1]:0}function ob(t,e,s){let{routesMeta:r}=t,l={},o="/",c=[];for(let u=0;u<r.length;++u){let h=r[u],p=u===r.length-1,m=o==="/"?e:e.slice(o.length)||"/",x=cb({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),N=h.route;if(!x)return null;Object.assign(l,x.params),c.push({params:l,pathname:jn([o,x.pathname]),pathnameBase:gb(jn([o,x.pathnameBase])),route:N}),x.pathnameBase!=="/"&&(o=jn([o,x.pathnameBase]))}return c}function cb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,r]=db(t.path,t.caseSensitive,t.end),l=e.match(s);if(!l)return null;let o=l[0],c=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((p,m,x)=>{let{paramName:N,isOptional:w}=m;if(N==="*"){let j=u[x]||"";c=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const b=u[x];return w&&!b?p[N]=void 0:p[N]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:t}}function db(t,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),Yd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(r.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function ub(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,r=t.charAt(s);return r&&r!=="/"?null:t.slice(s)||"/"}const hb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fb=t=>hb.test(t);function pb(t,e){e===void 0&&(e="/");let{pathname:s,search:r="",hash:l=""}=typeof t=="string"?Hi(t):t,o;if(s)if(fb(s))o=s;else{if(s.includes("//")){let c=s;s=s.replace(/\/\/+/g,"/"),Yd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+s))}s.startsWith("/")?o=op(s.substring(1),"/"):o=op(s,e)}else o=e;return{pathname:o,search:xb(r),hash:vb(l)}}function op(t,e){let s=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?s.length>1&&s.pop():l!=="."&&s.push(l)}),s.length>1?s.join("/"):"/"}function ld(t,e,s,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mb(t){return t.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function lg(t,e){let s=mb(t);return e?s.map((r,l)=>l===s.length-1?r.pathname:r.pathnameBase):s.map(r=>r.pathnameBase)}function og(t,e,s,r){r===void 0&&(r=!1);let l;typeof t=="string"?l=Hi(t):(l=Xr({},t),at(!l.pathname||!l.pathname.includes("?"),ld("?","pathname","search",l)),at(!l.pathname||!l.pathname.includes("#"),ld("#","pathname","hash",l)),at(!l.search||!l.search.includes("#"),ld("#","search","hash",l)));let o=t===""||l.pathname==="",c=o?"/":l.pathname,u;if(c==null)u=s;else{let x=e.length-1;if(!r&&c.startsWith("..")){let N=c.split("/");for(;N[0]==="..";)N.shift(),x-=1;l.pathname=N.join("/")}u=x>=0?e[x]:"/"}let h=pb(l,u),p=c&&c!=="/"&&c.endsWith("/"),m=(o||c===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),gb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),xb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,vb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function yb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cg=["post","put","patch","delete"];new Set(cg);const bb=["get",...cg];new Set(bb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Gr.apply(this,arguments)}const Kd=E.createContext(null),jb=E.createContext(null),ai=E.createContext(null),lo=E.createContext(null),kn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),dg=E.createContext(null);function Nb(t,e){let{relative:s}=e===void 0?{}:e;aa()||at(!1);let{basename:r,navigator:l}=E.useContext(ai),{hash:o,pathname:c,search:u}=fg(t,{relative:s}),h=c;return r!=="/"&&(h=c==="/"?r:jn([r,c])),l.createHref({pathname:h,search:u,hash:o})}function aa(){return E.useContext(lo)!=null}function la(){return aa()||at(!1),E.useContext(lo).location}function ug(t){E.useContext(ai).static||E.useLayoutEffect(t)}function Qs(){let{isDataRoute:t}=E.useContext(kn);return t?Lb():wb()}function wb(){aa()||at(!1);let t=E.useContext(Kd),{basename:e,future:s,navigator:r}=E.useContext(ai),{matches:l}=E.useContext(kn),{pathname:o}=la(),c=JSON.stringify(lg(l,s.v7_relativeSplatPath)),u=E.useRef(!1);return ug(()=>{u.current=!0}),E.useCallback(function(p,m){if(m===void 0&&(m={}),!u.current)return;if(typeof p=="number"){r.go(p);return}let x=og(p,JSON.parse(c),o,m.relative==="path");t==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:jn([e,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[e,r,c,o,t])}function hg(){let{matches:t}=E.useContext(kn),e=t[t.length-1];return e?e.params:{}}function fg(t,e){let{relative:s}=e===void 0?{}:e,{future:r}=E.useContext(ai),{matches:l}=E.useContext(kn),{pathname:o}=la(),c=JSON.stringify(lg(l,r.v7_relativeSplatPath));return E.useMemo(()=>og(t,JSON.parse(c),o,s==="path"),[t,c,o,s])}function kb(t,e){return _b(t,e)}function _b(t,e,s,r){aa()||at(!1);let{navigator:l}=E.useContext(ai),{matches:o}=E.useContext(kn),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=la(),m;if(e){var x;let y=typeof e=="string"?Hi(e):e;h==="/"||(x=y.pathname)!=null&&x.startsWith(h)||at(!1),m=y}else m=p;let N=m.pathname||"/",w=N;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+N.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=Gy(t,{pathname:w}),j=Db(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:jn([h,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:jn([h,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,s,r);return e&&j?E.createElement(lo.Provider,{value:{location:Gr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:xn.Pop}},j):j}function Sb(){let t=Mb(),e=yb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),s?E.createElement("pre",{style:l},s):null,null)}const Cb=E.createElement(Sb,null);class Eb extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?E.createElement(kn.Provider,{value:this.props.routeContext},E.createElement(dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Rb(t){let{routeContext:e,match:s,children:r}=t,l=E.useContext(Kd);return l&&l.static&&l.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=s.route.id),E.createElement(kn.Provider,{value:e},r)}function Db(t,e,s,r){var l;if(e===void 0&&(e=[]),s===void 0&&(s=null),r===void 0&&(r=null),t==null){var o;if(!s)return null;if(s.errors)t=s.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let c=t,u=(l=s)==null?void 0:l.errors;if(u!=null){let m=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);m>=0||at(!1),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(s&&r&&r.v7_partialHydration)for(let m=0;m<c.length;m++){let x=c[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=m),x.route.id){let{loaderData:N,errors:w}=s,b=x.route.loader&&N[x.route.id]===void 0&&(!w||w[x.route.id]===void 0);if(x.route.lazy||b){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,x,N)=>{let w,b=!1,j=null,y=null;s&&(w=u&&x.route.id?u[x.route.id]:void 0,j=x.route.errorElement||Cb,h&&(p<0&&N===0?(Ob("route-fallback"),b=!0,y=null):p===N&&(b=!0,y=x.route.hydrateFallbackElement||null)));let C=e.concat(c.slice(0,N+1)),R=()=>{let T;return w?T=j:b?T=y:x.route.Component?T=E.createElement(x.route.Component,null):x.route.element?T=x.route.element:T=m,E.createElement(Rb,{match:x,routeContext:{outlet:m,matches:C,isDataRoute:s!=null},children:T})};return s&&(x.route.ErrorBoundary||x.route.errorElement||N===0)?E.createElement(Eb,{location:s.location,revalidation:s.revalidation,component:j,error:w,children:R(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):R()},null)}var pg=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(pg||{}),mg=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(mg||{});function Pb(t){let e=E.useContext(Kd);return e||at(!1),e}function Ab(t){let e=E.useContext(jb);return e||at(!1),e}function Tb(t){let e=E.useContext(kn);return e||at(!1),e}function gg(t){let e=Tb(),s=e.matches[e.matches.length-1];return s.route.id||at(!1),s.route.id}function Mb(){var t;let e=E.useContext(dg),s=Ab(),r=gg();return e!==void 0?e:(t=s.errors)==null?void 0:t[r]}function Lb(){let{router:t}=Pb(pg.UseNavigateStable),e=gg(mg.UseNavigateStable),s=E.useRef(!1);return ug(()=>{s.current=!0}),E.useCallback(function(l,o){o===void 0&&(o={}),s.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Gr({fromRouteId:e},o)))},[t,e])}const cp={};function Ob(t,e,s){cp[t]||(cp[t]=!0)}function zb(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function qe(t){at(!1)}function Ib(t){let{basename:e="/",children:s=null,location:r,navigationType:l=xn.Pop,navigator:o,static:c=!1,future:u}=t;aa()&&at(!1);let h=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:h,navigator:o,static:c,future:Gr({v7_relativeSplatPath:!1},u)}),[h,u,o,c]);typeof r=="string"&&(r=Hi(r));let{pathname:m="/",search:x="",hash:N="",state:w=null,key:b="default"}=r,j=E.useMemo(()=>{let y=Qd(m,h);return y==null?null:{location:{pathname:y,search:x,hash:N,state:w,key:b},navigationType:l}},[h,m,x,N,w,b,l]);return j==null?null:E.createElement(ai.Provider,{value:p},E.createElement(lo.Provider,{children:s,value:j}))}function Fb(t){let{children:e,location:s}=t;return kb(Rd(e),s)}new Promise(()=>{});function Rd(t,e){e===void 0&&(e=[]);let s=[];return E.Children.forEach(t,(r,l)=>{if(!E.isValidElement(r))return;let o=[...e,l];if(r.type===E.Fragment){s.push.apply(s,Rd(r.props.children,o));return}r.type!==qe&&at(!1),!r.props.index||!r.props.children||at(!1);let c={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Rd(r.props.children,o)),s.push(c)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Dd.apply(this,arguments)}function Bb(t,e){if(t==null)return{};var s={},r=Object.keys(t),l,o;for(o=0;o<r.length;o++)l=r[o],!(e.indexOf(l)>=0)&&(s[l]=t[l]);return s}function $b(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Wb(t,e){return t.button===0&&(!e||e==="_self")&&!$b(t)}const Ub=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Hb="6";try{window.__reactRouterVersion=Hb}catch{}const Vb="startTransition",dp=$y[Vb];function qb(t){let{basename:e,children:s,future:r,window:l}=t,o=E.useRef();o.current==null&&(o.current=Qy({window:l,v5Compat:!0}));let c=o.current,[u,h]=E.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},m=E.useCallback(x=>{p&&dp?dp(()=>h(x)):h(x)},[h,p]);return E.useLayoutEffect(()=>c.listen(m),[c,m]),E.useEffect(()=>zb(r),[r]),E.createElement(Ib,{basename:e,children:s,location:u.location,navigationType:u.action,navigator:c,future:r})}const Yb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ke=E.forwardRef(function(e,s){let{onClick:r,relative:l,reloadDocument:o,replace:c,state:u,target:h,to:p,preventScrollReset:m,viewTransition:x}=e,N=Bb(e,Ub),{basename:w}=E.useContext(ai),b,j=!1;if(typeof p=="string"&&Qb.test(p)&&(b=p,Yb))try{let T=new URL(window.location.href),W=p.startsWith("//")?new URL(T.protocol+p):new URL(p),_=Qd(W.pathname,w);W.origin===T.origin&&_!=null?p=_+W.search+W.hash:j=!0}catch{}let y=Nb(p,{relative:l}),C=Kb(p,{replace:c,state:u,target:h,preventScrollReset:m,relative:l,viewTransition:x});function R(T){r&&r(T),T.defaultPrevented||C(T)}return E.createElement("a",Dd({},N,{href:b||y,onClick:j||o?r:R,ref:s,target:h}))});var up;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(up||(up={}));var hp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hp||(hp={}));function Kb(t,e){let{target:s,replace:r,state:l,preventScrollReset:o,relative:c,viewTransition:u}=e===void 0?{}:e,h=Qs(),p=la(),m=fg(t,{relative:c});return E.useCallback(x=>{if(Wb(x,s)){x.preventDefault();let N=r!==void 0?r:Kl(p)===Kl(m);h(t,{replace:N,state:l,preventScrollReset:o,relative:c,viewTransition:u})}},[p,h,m,r,l,s,t,o,c,u])}const Xb={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",monitor:"系统监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",detail:"详情",falsePositive:"误报",markFalsePositive:"标记为误报",deleteAlert:"删除告警",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",systemProcesses:"进程信息",systemNetwork:"网络连接",systemDlls:"加载的DLL",systemDrivers:"驱动程序",systemUsers:"本地用户",systemRegistry:"注册表持久化",systemTasks:"计划任务",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",importWithAlertBtn:"导入并分析",withAlert:"(含告警分析)",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成",evtx2csvBtn:"导入 EVTX 并转换 CSV",evtx2csvConverting:"正在转换 EVTX 为 CSV...",evtx2csvDone:"转换完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",domainController:"域控专项分析",domainControllerDesc:"分析 Active Directory 安全事件，检测 DCSync、敏感组修改、特权账户操作等",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件",editRule:"编辑规则",ruleEditor:"规则编辑器",thresholds:"阈值配置",patterns:"检测模式",patternsDesc:"触发检测的关键词或模式",addPattern:"添加模式",whitelist:"白名单",whitelistDesc:"不会触发检测的条目",addWhitelist:"添加白名单"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",explanation:"规则解读",recommendation:"处置建议",realCase:"真实案例",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知",detectorConfig:"检测器配置",detectorConfigDesc:"启用或禁用单个检测器。更改将在下次扫描时生效。",editRule:"编辑规则",ruleEditor:"规则编辑器",enabled:"已启用",disabled:"已禁用",registryPaths:"注册表路径",suspiciousIndicators:"可疑指标",indicatorDesc:"在目标中检测到这些关键词将触发告警",addIndicator:"添加指标",whitelistEntries:"白名单条目",whitelistDesc:"这些条目不会触发检测",addWhitelist:"添加白名单"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",general:"通用",database:"数据库",apiServer:"API服务器",collection:"采集",advanced:"高级",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存",generalSettings:"通用设置",configureBasic:"配置基本应用设置",logLevelDesc:"日志记录的最低严重级别",exportDirectory:"导出目录",exportDirectoryDesc:"导出文件的默认目录",autoUpdateRules:"自动更新规则",autoUpdateRulesDesc:"自动更新检测规则",databaseSettings:"数据库设置",configureDatabase:"配置数据库存储和保留策略",databasePathDesc:"SQLite数据库文件路径",eventRetentionDesc:"自动删除早于此时间的事件",maxEventsDesc:"最大存储事件数",apiServerSettings:"API服务器设置",configureApiServer:"配置HTTP API服务器",apiHost:"API主机",apiHostDesc:"API服务器绑定地址",apiPort:"API端口",apiPortDesc:"API服务器端口号",enableCors:"启用CORS",enableCorsDesc:"允许跨域请求",collectionSettings:"采集设置",configureCollection:"配置事件采集行为",enableAlertingDesc:"当规则匹配时生成告警",enableLiveCollectionDesc:"持续监控Windows事件日志",maxImportFileSize:"最大导入文件大小 (MB)",maxImportFileSizeDesc:"导入文件的最大大小",advancedSettings:"高级设置",expertConfig:"专家配置选项",warning:"警告",warningDesc:"高级设置可能影响性能和稳定性。仅在您确定时修改。",parserWorkers:"解析器工作线程",parserWorkersDesc:"并行解析工作线程数",memoryLimit:"内存限制 (MB)",memoryLimitDesc:"事件处理的最大内存使用量",saveChanges:"保存更改",saving:"保存中...",resetDefaults:"重置为默认"},logs:{title:"日志查看",refresh:"刷新",totalEntries:"总条目数",currentPage:"当前页",logFiles:"日志文件",filterByLevel:"按级别筛选",all:"全部",current:"当前",viewer:"日志查看器",noLogs:"暂无日志",timestamp:"时间戳",level:"级别",message:"消息",details:"详情",first:"首页",last:"末页",metrics:"性能",startup:"启动",panic:"崩溃"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},monitor:{title:"实时监控",pageDesc:"实时监控系统进程、网络连接和DNS查询",processMonitoring:"进程监控",processMonitoringDesc:"通过WMI监控新进程创建",networkMonitoring:"网络连接监控",networkMonitoringDesc:"轮询活动网络连接",dnsMonitoring:"DNS缓存监控",dnsMonitoringDesc:"轮询DNS缓存解析记录",pollInterval:"轮询间隔 (秒)",enableProcess:"启用进程监控",enableNetwork:"启用网络监控",enableDNS:"启用DNS监控",start:"启动监控",stop:"停止监控",running:"监控中",stopped:"已停止",stats:"监控统计",processCount:"进程事件",networkCount:"网络事件",dnsCount:"DNS事件",alertCount:"告警事件",startTime:"开始时间",events:"监控事件",noEvents:"暂无监控事件",eventType:"类型",severity:"严重级别",timestamp:"时间",details:"详情",process:"进程",network:"网络",dns:"DNS",pid:"进程ID",ppid:"父进程ID",path:"路径",commandLine:"命令行",user:"用户",protocol:"协议",sourceIp:"源IP",sourcePort:"源端口",destIp:"目标IP",destPort:"目标端口",state:"状态",queryName:"查询域名",queryType:"查询类型",results:"结果",ttl:"TTL",clearEvents:"清除事件",exportEvents:"导出事件",aboutMonitor:"关于实时监控",aboutDesc:"实时监控通过WMI和轮询方式监控系统的进程创建、网络连接和DNS查询活动。所有监控功能默认关闭，需要手动启用。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据",apply:"应用",clear:"清除"}},Gb={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",monitor:"Monitor",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings",logs:"Logs"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",detail:"Detail",falsePositive:"False Positive",markFalsePositive:"Mark False Positive",deleteAlert:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",systemProcesses:"Process Info",systemNetwork:"Network Connections",systemDlls:"Loaded DLLs",systemDrivers:"Drivers",systemUsers:"Local Users",systemRegistry:"Registry Persistence",systemTasks:"Scheduled Tasks",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",importWithAlertBtn:"Import & Analyze",withAlert:"(with alert analysis)",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed",evtx2csvBtn:"Import & Convert",evtx2csvConverting:"Converting EVTX to CSV...",evtx2csvDone:"Conversion completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",domainController:"Domain Controller Analyzer",domainControllerDesc:"Analyze Active Directory security events, detect DCSync, sensitive group modifications, privileged account operations",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events",editRule:"Edit Rule",ruleEditor:"Rule Editor",thresholds:"Thresholds",patterns:"Detection Patterns",patternsDesc:"Keywords or patterns that trigger detection",addPattern:"Add Pattern",whitelist:"Whitelist",whitelistDesc:"Entries that will not trigger detection",addWhitelist:"Add Whitelist Entry"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",explanation:"Rule Explanation",recommendation:"Recommendation",realCase:"Real Case",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown",detectorConfig:"Detector Config",detectorConfigDesc:"Enable or disable individual detectors. Changes will take effect on next scan.",editRule:"Edit Rule",ruleEditor:"Rule Editor",enabled:"Enabled",disabled:"Disabled",registryPaths:"Registry Paths",suspiciousIndicators:"Suspicious Indicators",indicatorDesc:"Keywords that trigger detection when found in the target",addIndicator:"Add Indicator",whitelistEntries:"Whitelist Entries",whitelistDesc:"Entries that will not trigger detection",addWhitelist:"Add Whitelist Entry"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",general:"General",database:"Database",apiServer:"API Server",collection:"Collection",advanced:"Advanced",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warning",error:"Error",save:"Save Settings",saved:"Settings saved",generalSettings:"General Settings",configureBasic:"Configure basic application settings",logLevelDesc:"Minimum severity level for logging",exportDirectory:"Export Directory",exportDirectoryDesc:"Default directory for exported files",autoUpdateRules:"Auto Update Rules",autoUpdateRulesDesc:"Automatically update detection rules",databaseSettings:"Database Settings",configureDatabase:"Configure database storage and retention",databasePathDesc:"Path to SQLite database file",eventRetentionDesc:"Automatically delete events older than this",maxEventsDesc:"Maximum number of events to store",apiServerSettings:"API Server Settings",configureApiServer:"Configure the HTTP API server",apiHost:"API Host",apiHostDesc:"Host address to bind the API server",apiPort:"API Port",apiPortDesc:"Port number for the API server",enableCors:"Enable CORS",enableCorsDesc:"Allow cross-origin requests",collectionSettings:"Collection Settings",configureCollection:"Configure event collection behavior",enableAlertingDesc:"Generate alerts when rules match",enableLiveCollectionDesc:"Continuously monitor Windows Event Logs",maxImportFileSize:"Max Import File Size (MB)",maxImportFileSizeDesc:"Maximum size for imported files",advancedSettings:"Advanced Settings",expertConfig:"Expert configuration options",warning:"Warning",warningDesc:"Advanced settings may affect performance and stability. Only modify if you know what you are doing.",parserWorkers:"Parser Workers",parserWorkersDesc:"Number of parallel parsing workers",memoryLimit:"Memory Limit (MB)",memoryLimitDesc:"Maximum memory usage for event processing",saveChanges:"Save Changes",saving:"Saving...",resetDefaults:"Reset to Defaults"},logs:{title:"Log Viewer",refresh:"Refresh",totalEntries:"Total Entries",currentPage:"Current Page",logFiles:"Log Files",filterByLevel:"Filter by Level",all:"All",current:"Current",viewer:"Log Viewer",noLogs:"No logs available",timestamp:"Timestamp",level:"Level",message:"Message",details:"Details",first:"First",last:"Last",metrics:"Metrics",startup:"Startup",panic:"Panic"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},monitor:{title:"Real-time Monitor",pageDesc:"Monitor system processes, network connections, and DNS queries in real-time",processMonitoring:"Process Monitoring",processMonitoringDesc:"Monitor new process creation via WMI",networkMonitoring:"Network Connection Monitoring",networkMonitoringDesc:"Poll active network connections",dnsMonitoring:"DNS Cache Monitoring",dnsMonitoringDesc:"Poll DNS cache resolution records",pollInterval:"Poll Interval (seconds)",enableProcess:"Enable Process Monitoring",enableNetwork:"Enable Network Monitoring",enableDNS:"Enable DNS Monitoring",start:"Start Monitor",stop:"Stop Monitor",running:"Running",stopped:"Stopped",stats:"Monitor Stats",processCount:"Process Events",networkCount:"Network Events",dnsCount:"DNS Events",alertCount:"Alert Events",startTime:"Start Time",events:"Monitor Events",noEvents:"No monitor events",eventType:"Type",severity:"Severity",timestamp:"Time",details:"Details",process:"Process",network:"Network",dns:"DNS",pid:"Process ID",ppid:"Parent Process ID",path:"Path",commandLine:"Command Line",user:"User",protocol:"Protocol",sourceIp:"Source IP",sourcePort:"Source Port",destIp:"Destination IP",destPort:"Destination Port",state:"State",queryName:"Query Name",queryType:"Query Type",results:"Results",ttl:"TTL",clearEvents:"Clear Events",exportEvents:"Export Events",aboutMonitor:"About Real-time Monitor",aboutDesc:"Real-time monitoring uses WMI and polling to monitor system process creation, network connections, and DNS query activities. All monitoring features are disabled by default and must be manually enabled."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data",apply:"Apply",clear:"Clear"}},Jb={zh:Xb,en:Gb},xg=E.createContext(void 0);function Zb(t,e){const s=e.split(".");let r=t;for(const l of s)if(r&&typeof r=="object"&&l in r)r=r[l];else return e;return typeof r=="string"?r:e}function e0({children:t}){const[e,s]=E.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),r=E.useCallback(c=>{s(c),localStorage.setItem("locale",c)},[]),l=E.useCallback(()=>{r(e==="zh"?"en":"zh")},[e,r]),o=E.useCallback((c,u)=>{let h=Zb(Jb[e],c);return u&&Object.entries(u).forEach(([p,m])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(m))}),h},[e]);return n.jsx(xg.Provider,{value:{locale:e,t:o,setLocale:r,toggleLocale:l},children:t})}function st(){const t=E.useContext(xg);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function t0(){const{locale:t,toggleLocale:e}=st();return n.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function vg(t,e){return function(){return t.apply(e,arguments)}}const{toString:s0}=Object.prototype,{getPrototypeOf:Xd}=Object,{iterator:oo,toStringTag:yg}=Symbol,co=(t=>e=>{const s=s0.call(e);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),xs=t=>(t=t.toLowerCase(),e=>co(e)===t),uo=t=>e=>typeof e===t,{isArray:Vi}=Array,$i=uo("undefined");function oa(t){return t!==null&&!$i(t)&&t.constructor!==null&&!$i(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const bg=xs("ArrayBuffer");function n0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&bg(t.buffer),e}const i0=uo("string"),zt=uo("function"),jg=uo("number"),ca=t=>t!==null&&typeof t=="object",r0=t=>t===!0||t===!1,$l=t=>{if(co(t)!=="object")return!1;const e=Xd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(yg in t)&&!(oo in t)},a0=t=>{if(!ca(t)||oa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},l0=xs("Date"),o0=xs("File"),c0=t=>!!(t&&typeof t.uri<"u"),d0=t=>t&&typeof t.getParts<"u",u0=xs("Blob"),h0=xs("FileList"),f0=t=>ca(t)&&zt(t.pipe);function p0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const fp=p0(),pp=typeof fp.FormData<"u"?fp.FormData:void 0,m0=t=>{let e;return t&&(pp&&t instanceof pp||zt(t.append)&&((e=co(t))==="formdata"||e==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},g0=xs("URLSearchParams"),[x0,v0,y0,b0]=["ReadableStream","Request","Response","Headers"].map(xs),j0=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function da(t,e,{allOwnKeys:s=!1}={}){if(t===null||typeof t>"u")return;let r,l;if(typeof t!="object"&&(t=[t]),Vi(t))for(r=0,l=t.length;r<l;r++)e.call(null,t[r],r,t);else{if(oa(t))return;const o=s?Object.getOwnPropertyNames(t):Object.keys(t),c=o.length;let u;for(r=0;r<c;r++)u=o[r],e.call(null,t[u],u,t)}}function Ng(t,e){if(oa(t))return null;e=e.toLowerCase();const s=Object.keys(t);let r=s.length,l;for(;r-- >0;)if(l=s[r],e===l.toLowerCase())return l;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wg=t=>!$i(t)&&t!==Jn;function Pd(){const{caseless:t,skipUndefined:e}=wg(this)&&this||{},s={},r=(l,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=t&&Ng(s,o)||o;$l(s[c])&&$l(l)?s[c]=Pd(s[c],l):$l(l)?s[c]=Pd({},l):Vi(l)?s[c]=l.slice():(!e||!$i(l))&&(s[c]=l)};for(let l=0,o=arguments.length;l<o;l++)arguments[l]&&da(arguments[l],r);return s}const N0=(t,e,s,{allOwnKeys:r}={})=>(da(e,(l,o)=>{s&&zt(l)?Object.defineProperty(t,o,{value:vg(l,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,o,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),w0=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),k0=(t,e,s,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),s&&Object.assign(t.prototype,s)},_0=(t,e,s,r)=>{let l,o,c;const u={};if(e=e||{},t==null)return e;do{for(l=Object.getOwnPropertyNames(t),o=l.length;o-- >0;)c=l[o],(!r||r(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=s!==!1&&Xd(t)}while(t&&(!s||s(t,e))&&t!==Object.prototype);return e},S0=(t,e,s)=>{t=String(t),(s===void 0||s>t.length)&&(s=t.length),s-=e.length;const r=t.indexOf(e,s);return r!==-1&&r===s},C0=t=>{if(!t)return null;if(Vi(t))return t;let e=t.length;if(!jg(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},E0=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Xd(Uint8Array)),R0=(t,e)=>{const r=(t&&t[oo]).call(t);let l;for(;(l=r.next())&&!l.done;){const o=l.value;e.call(t,o[0],o[1])}},D0=(t,e)=>{let s;const r=[];for(;(s=t.exec(e))!==null;)r.push(s);return r},P0=xs("HTMLFormElement"),A0=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,r,l){return r.toUpperCase()+l}),mp=(({hasOwnProperty:t})=>(e,s)=>t.call(e,s))(Object.prototype),T0=xs("RegExp"),kg=(t,e)=>{const s=Object.getOwnPropertyDescriptors(t),r={};da(s,(l,o)=>{let c;(c=e(l,o,t))!==!1&&(r[o]=c||l)}),Object.defineProperties(t,r)},M0=t=>{kg(t,(e,s)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const r=t[s];if(zt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},L0=(t,e)=>{const s={},r=l=>{l.forEach(o=>{s[o]=!0})};return Vi(t)?r(t):r(String(t).split(e)),s},O0=()=>{},z0=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function I0(t){return!!(t&&zt(t.append)&&t[yg]==="FormData"&&t[oo])}const F0=t=>{const e=new Array(10),s=(r,l)=>{if(ca(r)){if(e.indexOf(r)>=0)return;if(oa(r))return r;if(!("toJSON"in r)){e[l]=r;const o=Vi(r)?[]:{};return da(r,(c,u)=>{const h=s(c,l+1);!$i(h)&&(o[u]=h)}),e[l]=void 0,o}}return r};return s(t,0)},B0=xs("AsyncFunction"),$0=t=>t&&(ca(t)||zt(t))&&zt(t.then)&&zt(t.catch),_g=((t,e)=>t?setImmediate:e?((s,r)=>(Jn.addEventListener("message",({source:l,data:o})=>{l===Jn&&o===s&&r.length&&r.shift()()},!1),l=>{r.push(l),Jn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",zt(Jn.postMessage)),W0=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||_g,U0=t=>t!=null&&zt(t[oo]),J={isArray:Vi,isArrayBuffer:bg,isBuffer:oa,isFormData:m0,isArrayBufferView:n0,isString:i0,isNumber:jg,isBoolean:r0,isObject:ca,isPlainObject:$l,isEmptyObject:a0,isReadableStream:x0,isRequest:v0,isResponse:y0,isHeaders:b0,isUndefined:$i,isDate:l0,isFile:o0,isReactNativeBlob:c0,isReactNative:d0,isBlob:u0,isRegExp:T0,isFunction:zt,isStream:f0,isURLSearchParams:g0,isTypedArray:E0,isFileList:h0,forEach:da,merge:Pd,extend:N0,trim:j0,stripBOM:w0,inherits:k0,toFlatObject:_0,kindOf:co,kindOfTest:xs,endsWith:S0,toArray:C0,forEachEntry:R0,matchAll:D0,isHTMLForm:P0,hasOwnProperty:mp,hasOwnProp:mp,reduceDescriptors:kg,freezeMethods:M0,toObjectSet:L0,toCamelCase:A0,noop:O0,toFiniteNumber:z0,findKey:Ng,global:Jn,isContextDefined:wg,isSpecCompliantForm:I0,toJSONObject:F0,isAsyncFn:B0,isThenable:$0,setImmediate:_g,asap:W0,isIterable:U0};let _e=class Sg extends Error{static from(e,s,r,l,o,c){const u=new Sg(e.message,s||e.code,r,l,o);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,s,r,l,o){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),r&&(this.config=r),l&&(this.request=l),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}};_e.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";_e.ERR_BAD_OPTION="ERR_BAD_OPTION";_e.ECONNABORTED="ECONNABORTED";_e.ETIMEDOUT="ETIMEDOUT";_e.ERR_NETWORK="ERR_NETWORK";_e.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";_e.ERR_DEPRECATED="ERR_DEPRECATED";_e.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";_e.ERR_BAD_REQUEST="ERR_BAD_REQUEST";_e.ERR_CANCELED="ERR_CANCELED";_e.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";_e.ERR_INVALID_URL="ERR_INVALID_URL";const H0=null;function Ad(t){return J.isPlainObject(t)||J.isArray(t)}function Cg(t){return J.endsWith(t,"[]")?t.slice(0,-2):t}function od(t,e,s){return t?t.concat(e).map(function(l,o){return l=Cg(l),!s&&o?"["+l+"]":l}).join(s?".":""):e}function V0(t){return J.isArray(t)&&!t.some(Ad)}const q0=J.toFlatObject(J,{},null,function(e){return/^is[A-Z]/.test(e)});function ho(t,e,s){if(!J.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,s=J.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,y){return!J.isUndefined(y[j])});const r=s.metaTokens,l=s.visitor||m,o=s.dots,c=s.indexes,h=(s.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(e);if(!J.isFunction(l))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(J.isDate(b))return b.toISOString();if(J.isBoolean(b))return b.toString();if(!h&&J.isBlob(b))throw new _e("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(b)||J.isTypedArray(b)?h&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,j,y){let C=b;if(J.isReactNative(e)&&J.isReactNativeBlob(b))return e.append(od(y,j,o),p(b)),!1;if(b&&!y&&typeof b=="object"){if(J.endsWith(j,"{}"))j=r?j:j.slice(0,-2),b=JSON.stringify(b);else if(J.isArray(b)&&V0(b)||(J.isFileList(b)||J.endsWith(j,"[]"))&&(C=J.toArray(b)))return j=Cg(j),C.forEach(function(T,W){!(J.isUndefined(T)||T===null)&&e.append(c===!0?od([j],W,o):c===null?j:j+"[]",p(T))}),!1}return Ad(b)?!0:(e.append(od(y,j,o),p(b)),!1)}const x=[],N=Object.assign(q0,{defaultVisitor:m,convertValue:p,isVisitable:Ad});function w(b,j){if(!J.isUndefined(b)){if(x.indexOf(b)!==-1)throw Error("Circular reference detected in "+j.join("."));x.push(b),J.forEach(b,function(C,R){(!(J.isUndefined(C)||C===null)&&l.call(e,C,J.isString(R)?R.trim():R,j,N))===!0&&w(C,j?j.concat(R):[R])}),x.pop()}}if(!J.isObject(t))throw new TypeError("data must be an object");return w(t),e}function gp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Gd(t,e){this._pairs=[],t&&ho(t,this,e)}const Eg=Gd.prototype;Eg.append=function(e,s){this._pairs.push([e,s])};Eg.toString=function(e){const s=e?function(r){return e.call(this,r,gp)}:gp;return this._pairs.map(function(l){return s(l[0])+"="+s(l[1])},"").join("&")};function Y0(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Rg(t,e,s){if(!e)return t;const r=s&&s.encode||Y0,l=J.isFunction(s)?{serialize:s}:s,o=l&&l.serialize;let c;if(o?c=o(e,l):c=J.isURLSearchParams(e)?e.toString():new Gd(e,l).toString(r),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class xp{constructor(){this.handlers=[]}use(e,s,r){return this.handlers.push({fulfilled:e,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Jd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Q0=typeof URLSearchParams<"u"?URLSearchParams:Gd,K0=typeof FormData<"u"?FormData:null,X0=typeof Blob<"u"?Blob:null,G0={isBrowser:!0,classes:{URLSearchParams:Q0,FormData:K0,Blob:X0},protocols:["http","https","file","blob","url","data"]},Zd=typeof window<"u"&&typeof document<"u",Td=typeof navigator=="object"&&navigator||void 0,J0=Zd&&(!Td||["ReactNative","NativeScript","NS"].indexOf(Td.product)<0),Z0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ej=Zd&&window.location.href||"http://localhost",tj=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zd,hasStandardBrowserEnv:J0,hasStandardBrowserWebWorkerEnv:Z0,navigator:Td,origin:ej},Symbol.toStringTag,{value:"Module"})),jt={...tj,...G0};function sj(t,e){return ho(t,new jt.classes.URLSearchParams,{visitor:function(s,r,l,o){return jt.isNode&&J.isBuffer(s)?(this.append(r,s.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...e})}function nj(t){return J.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function ij(t){const e={},s=Object.keys(t);let r;const l=s.length;let o;for(r=0;r<l;r++)o=s[r],e[o]=t[o];return e}function Dg(t){function e(s,r,l,o){let c=s[o++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=o>=s.length;return c=!c&&J.isArray(l)?l.length:c,h?(J.hasOwnProp(l,c)?l[c]=[l[c],r]:l[c]=r,!u):((!l[c]||!J.isObject(l[c]))&&(l[c]=[]),e(s,r,l[c],o)&&J.isArray(l[c])&&(l[c]=ij(l[c])),!u)}if(J.isFormData(t)&&J.isFunction(t.entries)){const s={};return J.forEachEntry(t,(r,l)=>{e(nj(r),l,s,0)}),s}return null}function rj(t,e,s){if(J.isString(t))try{return(e||JSON.parse)(t),J.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(t)}const ua={transitional:Jd,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const r=s.getContentType()||"",l=r.indexOf("application/json")>-1,o=J.isObject(e);if(o&&J.isHTMLForm(e)&&(e=new FormData(e)),J.isFormData(e))return l?JSON.stringify(Dg(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sj(e,this.formSerializer).toString();if((u=J.isFileList(e))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ho(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return o||l?(s.setContentType("application/json",!1),rj(e)):e}],transformResponse:[function(e){const s=this.transitional||ua.transitional,r=s&&s.forcedJSONParsing,l=this.responseType==="json";if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(r&&!this.responseType||l)){const c=!(s&&s.silentJSONParsing)&&l;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?_e.from(u,_e.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],t=>{ua.headers[t]={}});const aj=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lj=t=>{const e={};let s,r,l;return t&&t.split(`
`).forEach(function(c){l=c.indexOf(":"),s=c.substring(0,l).trim().toLowerCase(),r=c.substring(l+1).trim(),!(!s||e[s]&&aj[s])&&(s==="set-cookie"?e[s]?e[s].push(r):e[s]=[r]:e[s]=e[s]?e[s]+", "+r:r)}),e},vp=Symbol("internals"),oj=t=>!/[\r\n]/.test(t);function Pg(t,e){if(!(t===!1||t==null)){if(J.isArray(t)){t.forEach(s=>Pg(s,e));return}if(!oj(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function Pr(t){return t&&String(t).trim().toLowerCase()}function cj(t){let e=t.length;for(;e>0;){const s=t.charCodeAt(e-1);if(s!==10&&s!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function Wl(t){return t===!1||t==null?t:J.isArray(t)?t.map(Wl):cj(String(t))}function dj(t){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(t);)e[r[1]]=r[2];return e}const uj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function cd(t,e,s,r,l){if(J.isFunction(r))return r.call(this,e,s);if(l&&(e=s),!!J.isString(e)){if(J.isString(r))return e.indexOf(r)!==-1;if(J.isRegExp(r))return r.test(e)}}function hj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,r)=>s.toUpperCase()+r)}function fj(t,e){const s=J.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+s,{value:function(l,o,c){return this[r].call(this,e,l,o,c)},configurable:!0})})}let It=class{constructor(e){e&&this.set(e)}set(e,s,r){const l=this;function o(u,h,p){const m=Pr(h);if(!m)throw new Error("header name must be a non-empty string");const x=J.findKey(l,m);(!x||l[x]===void 0||p===!0||p===void 0&&l[x]!==!1)&&(Pg(u,h),l[x||h]=Wl(u))}const c=(u,h)=>J.forEach(u,(p,m)=>o(p,m,h));if(J.isPlainObject(e)||e instanceof this.constructor)c(e,s);else if(J.isString(e)&&(e=e.trim())&&!uj(e))c(lj(e),s);else if(J.isObject(e)&&J.isIterable(e)){let u={},h,p;for(const m of e){if(!J.isArray(m))throw TypeError("Object iterator must return a key-value pair");u[p=m[0]]=(h=u[p])?J.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}c(u,s)}else e!=null&&o(s,e,r);return this}get(e,s){if(e=Pr(e),e){const r=J.findKey(this,e);if(r){const l=this[r];if(!s)return l;if(s===!0)return dj(l);if(J.isFunction(s))return s.call(this,l,r);if(J.isRegExp(s))return s.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Pr(e),e){const r=J.findKey(this,e);return!!(r&&this[r]!==void 0&&(!s||cd(this,this[r],r,s)))}return!1}delete(e,s){const r=this;let l=!1;function o(c){if(c=Pr(c),c){const u=J.findKey(r,c);u&&(!s||cd(r,r[u],u,s))&&(delete r[u],l=!0)}}return J.isArray(e)?e.forEach(o):o(e),l}clear(e){const s=Object.keys(this);let r=s.length,l=!1;for(;r--;){const o=s[r];(!e||cd(this,this[o],o,e,!0))&&(delete this[o],l=!0)}return l}normalize(e){const s=this,r={};return J.forEach(this,(l,o)=>{const c=J.findKey(r,o);if(c){s[c]=Wl(l),delete s[o];return}const u=e?hj(o):String(o).trim();u!==o&&delete s[o],s[u]=Wl(l),r[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return J.forEach(this,(r,l)=>{r!=null&&r!==!1&&(s[l]=e&&J.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const r=new this(e);return s.forEach(l=>r.set(l)),r}static accessor(e){const r=(this[vp]=this[vp]={accessors:{}}).accessors,l=this.prototype;function o(c){const u=Pr(c);r[u]||(fj(l,c),r[u]=!0)}return J.isArray(e)?e.forEach(o):o(e),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(It.prototype,({value:t},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[s]=r}}});J.freezeMethods(It);function dd(t,e){const s=this||ua,r=e||s,l=It.from(r.headers);let o=r.data;return J.forEach(t,function(u){o=u.call(s,o,l.normalize(),e?e.status:void 0)}),l.normalize(),o}function Ag(t){return!!(t&&t.__CANCEL__)}let ha=class extends _e{constructor(e,s,r){super(e??"canceled",_e.ERR_CANCELED,s,r),this.name="CanceledError",this.__CANCEL__=!0}};function Tg(t,e,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):e(new _e("Request failed with status code "+s.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function pj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function mj(t,e){t=t||10;const s=new Array(t),r=new Array(t);let l=0,o=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),m=r[o];c||(c=p),s[l]=h,r[l]=p;let x=o,N=0;for(;x!==l;)N+=s[x++],x=x%t;if(l=(l+1)%t,l===o&&(o=(o+1)%t),p-c<e)return;const w=m&&p-m;return w?Math.round(N*1e3/w):void 0}}function gj(t,e){let s=0,r=1e3/e,l,o;const c=(p,m=Date.now())=>{s=m,l=null,o&&(clearTimeout(o),o=null),t(...p)};return[(...p)=>{const m=Date.now(),x=m-s;x>=r?c(p,m):(l=p,o||(o=setTimeout(()=>{o=null,c(l)},r-x)))},()=>l&&c(l)]}const Xl=(t,e,s=3)=>{let r=0;const l=mj(50,250);return gj(o=>{const c=o.loaded,u=o.lengthComputable?o.total:void 0,h=c-r,p=l(h),m=c<=u;r=c;const x={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&m?(u-c)/p:void 0,event:o,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(x)},s)},yp=(t,e)=>{const s=t!=null;return[r=>e[0]({lengthComputable:s,total:t,loaded:r}),e[1]]},bp=t=>(...e)=>J.asap(()=>t(...e)),xj=jt.hasStandardBrowserEnv?((t,e)=>s=>(s=new URL(s,jt.origin),t.protocol===s.protocol&&t.host===s.host&&(e||t.port===s.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,vj=jt.hasStandardBrowserEnv?{write(t,e,s,r,l,o,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];J.isNumber(s)&&u.push(`expires=${new Date(s).toUTCString()}`),J.isString(r)&&u.push(`path=${r}`),J.isString(l)&&u.push(`domain=${l}`),o===!0&&u.push("secure"),J.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function yj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function bj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Mg(t,e,s){let r=!yj(e);return t&&(r||s==!1)?bj(t,e):e}const jp=t=>t instanceof It?{...t}:t;function ni(t,e){e=e||{};const s={};function r(p,m,x,N){return J.isPlainObject(p)&&J.isPlainObject(m)?J.merge.call({caseless:N},p,m):J.isPlainObject(m)?J.merge({},m):J.isArray(m)?m.slice():m}function l(p,m,x,N){if(J.isUndefined(m)){if(!J.isUndefined(p))return r(void 0,p,x,N)}else return r(p,m,x,N)}function o(p,m){if(!J.isUndefined(m))return r(void 0,m)}function c(p,m){if(J.isUndefined(m)){if(!J.isUndefined(p))return r(void 0,p)}else return r(void 0,m)}function u(p,m,x){if(x in e)return r(p,m);if(x in t)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,m,x)=>l(jp(p),jp(m),x,!0)};return J.forEach(Object.keys({...t,...e}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=J.hasOwnProp(h,m)?h[m]:l,N=x(t[m],e[m],m);J.isUndefined(N)&&x!==u||(s[m]=N)}),s}const Lg=t=>{const e=ni({},t);let{data:s,withXSRFToken:r,xsrfHeaderName:l,xsrfCookieName:o,headers:c,auth:u}=e;if(e.headers=c=It.from(c),e.url=Rg(Mg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),J.isFormData(s)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(J.isFunction(s.getHeaders)){const h=s.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([m,x])=>{p.includes(m.toLowerCase())&&c.set(m,x)})}}if(jt.hasStandardBrowserEnv&&(r&&J.isFunction(r)&&(r=r(e)),r||r!==!1&&xj(e.url))){const h=l&&o&&vj.read(o);h&&c.set(l,h)}return e},jj=typeof XMLHttpRequest<"u",Nj=jj&&function(t){return new Promise(function(s,r){const l=Lg(t);let o=l.data;const c=It.from(l.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=l,m,x,N,w,b;function j(){w&&w(),b&&b(),l.cancelToken&&l.cancelToken.unsubscribe(m),l.signal&&l.signal.removeEventListener("abort",m)}let y=new XMLHttpRequest;y.open(l.method.toUpperCase(),l.url,!0),y.timeout=l.timeout;function C(){if(!y)return;const T=It.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),_={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:T,config:t,request:y};Tg(function(L){s(L),j()},function(L){r(L),j()},_),y=null}"onloadend"in y?y.onloadend=C:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(C)},y.onabort=function(){y&&(r(new _e("Request aborted",_e.ECONNABORTED,t,y)),y=null)},y.onerror=function(W){const _=W&&W.message?W.message:"Network Error",H=new _e(_,_e.ERR_NETWORK,t,y);H.event=W||null,r(H),y=null},y.ontimeout=function(){let W=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const _=l.transitional||Jd;l.timeoutErrorMessage&&(W=l.timeoutErrorMessage),r(new _e(W,_.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,t,y)),y=null},o===void 0&&c.setContentType(null),"setRequestHeader"in y&&J.forEach(c.toJSON(),function(W,_){y.setRequestHeader(_,W)}),J.isUndefined(l.withCredentials)||(y.withCredentials=!!l.withCredentials),u&&u!=="json"&&(y.responseType=l.responseType),p&&([N,b]=Xl(p,!0),y.addEventListener("progress",N)),h&&y.upload&&([x,w]=Xl(h),y.upload.addEventListener("progress",x),y.upload.addEventListener("loadend",w)),(l.cancelToken||l.signal)&&(m=T=>{y&&(r(!T||T.type?new ha(null,t,y):T),y.abort(),y=null)},l.cancelToken&&l.cancelToken.subscribe(m),l.signal&&(l.signal.aborted?m():l.signal.addEventListener("abort",m)));const R=pj(l.url);if(R&&jt.protocols.indexOf(R)===-1){r(new _e("Unsupported protocol "+R+":",_e.ERR_BAD_REQUEST,t));return}y.send(o||null)})},wj=(t,e)=>{const{length:s}=t=t?t.filter(Boolean):[];if(e||s){let r=new AbortController,l;const o=function(p){if(!l){l=!0,u();const m=p instanceof Error?p:this.reason;r.abort(m instanceof _e?m:new ha(m instanceof Error?m.message:m))}};let c=e&&setTimeout(()=>{c=null,o(new _e(`timeout of ${e}ms exceeded`,_e.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(o):p.removeEventListener("abort",o)}),t=null)};t.forEach(p=>p.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=()=>J.asap(u),h}},kj=function*(t,e){let s=t.byteLength;if(s<e){yield t;return}let r=0,l;for(;r<s;)l=r+e,yield t.slice(r,l),r=l},_j=async function*(t,e){for await(const s of Sj(t))yield*kj(s,e)},Sj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:s,value:r}=await e.read();if(s)break;yield r}}finally{await e.cancel()}},Np=(t,e,s,r)=>{const l=_j(t,e);let o=0,c,u=h=>{c||(c=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:p,value:m}=await l.next();if(p){u(),h.close();return}let x=m.byteLength;if(s){let N=o+=x;s(N)}h.enqueue(new Uint8Array(m))}catch(p){throw u(p),p}},cancel(h){return u(h),l.return()}},{highWaterMark:2})},wp=64*1024,{isFunction:kl}=J,Cj=(({Request:t,Response:e})=>({Request:t,Response:e}))(J.global),{ReadableStream:kp,TextEncoder:_p}=J.global,Sp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Ej=t=>{t=J.merge.call({skipUndefined:!0},Cj,t);const{fetch:e,Request:s,Response:r}=t,l=e?kl(e):typeof fetch=="function",o=kl(s),c=kl(r);if(!l)return!1;const u=l&&kl(kp),h=l&&(typeof _p=="function"?(b=>j=>b.encode(j))(new _p):async b=>new Uint8Array(await new s(b).arrayBuffer())),p=o&&u&&Sp(()=>{let b=!1;const j=new kp,y=new s(jt.origin,{body:j,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return j.cancel(),b&&!y}),m=c&&u&&Sp(()=>J.isReadableStream(new r("").body)),x={stream:m&&(b=>b.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!x[b]&&(x[b]=(j,y)=>{let C=j&&j[b];if(C)return C.call(j);throw new _e(`Response type '${b}' is not supported`,_e.ERR_NOT_SUPPORT,y)})});const N=async b=>{if(b==null)return 0;if(J.isBlob(b))return b.size;if(J.isSpecCompliantForm(b))return(await new s(jt.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(J.isArrayBufferView(b)||J.isArrayBuffer(b))return b.byteLength;if(J.isURLSearchParams(b)&&(b=b+""),J.isString(b))return(await h(b)).byteLength},w=async(b,j)=>{const y=J.toFiniteNumber(b.getContentLength());return y??N(j)};return async b=>{let{url:j,method:y,data:C,signal:R,cancelToken:T,timeout:W,onDownloadProgress:_,onUploadProgress:H,responseType:L,headers:P,withCredentials:A="same-origin",fetchOptions:K}=Lg(b),q=e||fetch;L=L?(L+"").toLowerCase():"text";let I=wj([R,T&&T.toAbortSignal()],W),$=null;const U=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let X;try{if(H&&p&&y!=="get"&&y!=="head"&&(X=await w(P,C))!==0){let M=new s(j,{method:"POST",body:C,duplex:"half"}),Z;if(J.isFormData(C)&&(Z=M.headers.get("content-type"))&&P.setContentType(Z),M.body){const[ue,pe]=yp(X,Xl(bp(H)));C=Np(M.body,wp,ue,pe)}}J.isString(A)||(A=A?"include":"omit");const k=o&&"credentials"in s.prototype,z={...K,signal:I,method:y.toUpperCase(),headers:P.normalize().toJSON(),body:C,duplex:"half",credentials:k?A:void 0};$=o&&new s(j,z);let B=await(o?q($,K):q(j,z));const te=m&&(L==="stream"||L==="response");if(m&&(_||te&&U)){const M={};["status","statusText","headers"].forEach(Ne=>{M[Ne]=B[Ne]});const Z=J.toFiniteNumber(B.headers.get("content-length")),[ue,pe]=_&&yp(Z,Xl(bp(_),!0))||[];B=new r(Np(B.body,wp,ue,()=>{pe&&pe(),U&&U()}),M)}L=L||"text";let se=await x[J.findKey(x,L)||"text"](B,b);return!te&&U&&U(),await new Promise((M,Z)=>{Tg(M,Z,{data:se,headers:It.from(B.headers),status:B.status,statusText:B.statusText,config:b,request:$})})}catch(k){throw U&&U(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new _e("Network Error",_e.ERR_NETWORK,b,$,k&&k.response),{cause:k.cause||k}):_e.from(k,k&&k.code,b,$,k&&k.response)}}},Rj=new Map,Og=t=>{let e=t&&t.env||{};const{fetch:s,Request:r,Response:l}=e,o=[r,l,s];let c=o.length,u=c,h,p,m=Rj;for(;u--;)h=o[u],p=m.get(h),p===void 0&&m.set(h,p=u?new Map:Ej(e)),m=p;return p};Og();const eu={http:H0,xhr:Nj,fetch:{get:Og}};J.forEach(eu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Cp=t=>`- ${t}`,Dj=t=>J.isFunction(t)||t===null||t===!1;function Pj(t,e){t=J.isArray(t)?t:[t];const{length:s}=t;let r,l;const o={};for(let c=0;c<s;c++){r=t[c];let u;if(l=r,!Dj(r)&&(l=eu[(u=String(r)).toLowerCase()],l===void 0))throw new _e(`Unknown adapter '${u}'`);if(l&&(J.isFunction(l)||(l=l.get(e))))break;o[u||"#"+c]=l}if(!l){const c=Object.entries(o).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=s?c.length>1?`since :
`+c.map(Cp).join(`
`):" "+Cp(c[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return l}const zg={getAdapter:Pj,adapters:eu};function ud(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ha(null,t)}function Ep(t){return ud(t),t.headers=It.from(t.headers),t.data=dd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),zg.getAdapter(t.adapter||ua.adapter,t)(t).then(function(r){return ud(t),r.data=dd.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return Ag(r)||(ud(t),r&&r.response&&(r.response.data=dd.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const Ig="1.15.0",fo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Rp={};fo.transitional=function(e,s,r){function l(o,c){return"[Axios v"+Ig+"] Transitional option '"+o+"'"+c+(r?". "+r:"")}return(o,c,u)=>{if(e===!1)throw new _e(l(c," has been removed"+(s?" in "+s:"")),_e.ERR_DEPRECATED);return s&&!Rp[c]&&(Rp[c]=!0,console.warn(l(c," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(o,c,u):!0}};fo.spelling=function(e){return(s,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Aj(t,e,s){if(typeof t!="object")throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let l=r.length;for(;l-- >0;){const o=r[l],c=e[o];if(c){const u=t[o],h=u===void 0||c(u,o,t);if(h!==!0)throw new _e("option "+o+" must be "+h,_e.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new _e("Unknown option "+o,_e.ERR_BAD_OPTION)}}const Ul={assertOptions:Aj,validators:fo},es=Ul.validators;let ei=class{constructor(e){this.defaults=e||{},this.interceptors={request:new xp,response:new xp}}async request(e,s){try{return await this._request(e,s)}catch(r){if(r instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const o=(()=>{if(!l.stack)return"";const c=l.stack.indexOf(`
`);return c===-1?"":l.stack.slice(c+1)})();try{if(!r.stack)r.stack=o;else if(o){const c=o.indexOf(`
`),u=c===-1?-1:o.indexOf(`
`,c+1),h=u===-1?"":o.slice(u+1);String(r.stack).endsWith(h)||(r.stack+=`
`+o)}}catch{}}throw r}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=ni(this.defaults,s);const{transitional:r,paramsSerializer:l,headers:o}=s;r!==void 0&&Ul.assertOptions(r,{silentJSONParsing:es.transitional(es.boolean),forcedJSONParsing:es.transitional(es.boolean),clarifyTimeoutError:es.transitional(es.boolean),legacyInterceptorReqResOrdering:es.transitional(es.boolean)},!1),l!=null&&(J.isFunction(l)?s.paramsSerializer={serialize:l}:Ul.assertOptions(l,{encode:es.function,serialize:es.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Ul.assertOptions(s,{baseUrl:es.spelling("baseURL"),withXsrfToken:es.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let c=o&&J.merge(o.common,o[s.method]);o&&J.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),s.headers=It.concat(c,o);const u=[];let h=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(s)===!1)return;h=h&&j.synchronous;const y=s.transitional||Jd;y&&y.legacyInterceptorReqResOrdering?u.unshift(j.fulfilled,j.rejected):u.push(j.fulfilled,j.rejected)});const p=[];this.interceptors.response.forEach(function(j){p.push(j.fulfilled,j.rejected)});let m,x=0,N;if(!h){const b=[Ep.bind(this),void 0];for(b.unshift(...u),b.push(...p),N=b.length,m=Promise.resolve(s);x<N;)m=m.then(b[x++],b[x++]);return m}N=u.length;let w=s;for(;x<N;){const b=u[x++],j=u[x++];try{w=b(w)}catch(y){j.call(this,y);break}}try{m=Ep.call(this,w)}catch(b){return Promise.reject(b)}for(x=0,N=p.length;x<N;)m=m.then(p[x++],p[x++]);return m}getUri(e){e=ni(this.defaults,e);const s=Mg(e.baseURL,e.url,e.allowAbsoluteUrls);return Rg(s,e.params,e.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(e){ei.prototype[e]=function(s,r){return this.request(ni(r||{},{method:e,url:s,data:(r||{}).data}))}});J.forEach(["post","put","patch"],function(e){function s(r){return function(o,c,u){return this.request(ni(u||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}ei.prototype[e]=s(),ei.prototype[e+"Form"]=s(!0)});let Tj=class Fg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(o){s=o});const r=this;this.promise.then(l=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](l);r._listeners=null}),this.promise.then=l=>{let o;const c=new Promise(u=>{r.subscribe(u),o=u}).then(l);return c.cancel=function(){r.unsubscribe(o)},c},e(function(o,c,u){r.reason||(r.reason=new ha(o,c,u),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=r=>{e.abort(r)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Fg(function(l){e=l}),cancel:e}}};function Mj(t){return function(s){return t.apply(null,s)}}function Lj(t){return J.isObject(t)&&t.isAxiosError===!0}const Md={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Md).forEach(([t,e])=>{Md[e]=t});function Bg(t){const e=new ei(t),s=vg(ei.prototype.request,e);return J.extend(s,ei.prototype,e,{allOwnKeys:!0}),J.extend(s,e,null,{allOwnKeys:!0}),s.create=function(l){return Bg(ni(t,l))},s}const tt=Bg(ua);tt.Axios=ei;tt.CanceledError=ha;tt.CancelToken=Tj;tt.isCancel=Ag;tt.VERSION=Ig;tt.toFormData=ho;tt.AxiosError=_e;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=Mj;tt.isAxiosError=Lj;tt.mergeConfig=ni;tt.AxiosHeaders=It;tt.formToJSON=t=>Dg(J.isHTMLForm(t)?new FormData(t):t);tt.getAdapter=zg.getAdapter;tt.HttpStatusCode=Md;tt.default=tt;const{Axios:h2,AxiosError:f2,CanceledError:p2,isCancel:m2,CancelToken:g2,VERSION:x2,all:v2,Cancel:y2,isAxiosError:b2,spread:j2,toFormData:N2,AxiosHeaders:w2,HttpStatusCode:k2,formToJSON:_2,getAdapter:S2,mergeConfig:C2}=tt,le=tt.create({baseURL:"/api",timeout:3e4});le.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Qn={list:(t=1,e=100,s)=>{let r=`/events?page=${t}&page_size=${e}`;return s&&(s.levels&&s.levels.length>0&&s.levels.forEach(l=>r+=`&levels=${l}`),s.event_ids&&s.event_ids.length>0&&s.event_ids.forEach(l=>r+=`&event_ids=${l}`),s.log_names&&s.log_names.length>0&&s.log_names.forEach(l=>r+=`&log_names=${encodeURIComponent(l)}`),s.sources&&s.sources.length>0&&s.sources.forEach(l=>r+=`&sources=${encodeURIComponent(l)}`),s.users&&s.users.length>0&&s.users.forEach(l=>r+=`&users=${encodeURIComponent(l)}`),s.computers&&s.computers.length>0&&s.computers.forEach(l=>r+=`&computers=${encodeURIComponent(l)}`),s.start_time&&(r+=`&start_time=${encodeURIComponent(s.start_time)}`),s.end_time&&(r+=`&end_time=${encodeURIComponent(s.end_time)}`),s.sort_by&&(r+=`&sort_by=${s.sort_by}`),s.sort_order&&(r+=`&sort_order=${s.sort_order}`)),le.get(r)},get:t=>le.get(`/events/${t}`),search:t=>le.post("/events/search",t),export:t=>le.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},ms={list:(t=1,e=100,s)=>le.get(`/alerts?page=${t}&page_size=${e}${s?`&severity=${s}`:""}`),get:t=>le.get(`/alerts/${t}`),stats:()=>le.get("/alerts/stats"),trend:(t=7)=>le.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>le.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>le.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>le.delete(`/alerts/${t}`),batchAction:(t,e,s)=>le.post("/alerts/batch",{ids:t,action:e,notes:s}),runAnalysis:()=>le.post("/alerts/run-analysis")},Dp={collect:t=>le.post("/collect",t),getStatus:()=>le.get("/collect/status"),evtx2csv:(t,e,s)=>le.post("/collect/evtx2csv",{file_paths:t,output_dir:e,limit:s})},Pp={importLogs:t=>le.post("/import/logs",{files:t}),importLogsWithAlert:t=>le.post("/import/logs",{files:t,alert_on_import:!0}),getStatus:()=>le.get("/import/status")},Oj={getStats:()=>le.get("/live/stats"),streamEvents:(t,e,s)=>{const r=new EventSource("/api/live/events");return r.onmessage=l=>{try{const o=JSON.parse(l.data);o.type==="event"?t(o.data):o.type==="stats"&&e(o)}catch(o){console.error("Failed to parse SSE data:",o)}},r.onerror=l=>{console.error("SSE error:",l),s==null||s(l)},r}},Kn={health:()=>le.get("/health"),getInfo:()=>le.get("/system/info"),getMetrics:()=>le.get("/system/metrics"),getProcesses:(t=100)=>le.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>le.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>le.get("/system/env"),getLoadedDLLs:(t=100)=>le.get(`/system/dlls?limit=${t}`),getDrivers:()=>le.get("/system/drivers")},Bs={list:()=>le.get("/rules"),get:t=>le.get(`/rules/${t}`),toggle:(t,e)=>le.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>le.post("/rules",t),update:(t,e)=>le.put(`/rules/${t}`,e),validate:(t,e)=>le.post("/rules/validate",{rule:t,content:e}),import:t=>le.post("/rules/import",{rules:t}),export:(t="json")=>le.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>le.get("/rules/templates"),getTemplate:t=>le.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>le.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},Ar={list:()=>le.get("/reports"),generate:t=>le.post("/reports",t),get:t=>le.get(`/reports/${t}`),export:t=>le.get(`/reports/export?format=${t}`,{responseType:"blob"}),download:t=>le.get(`/reports/${t}/download`,{responseType:"blob"})},Hn={calculateHash:t=>le.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>le.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>le.get(`/forensics/signature?path=${t}`),isSigned:t=>le.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>le.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>le.get("/forensics/evidence"),getEvidence:t=>le.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>le.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>le.get("/forensics/chain-of-custody"),memoryDump:t=>le.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},Ld={get:(t=200,e,s)=>{let r=`/timeline?limit=${t}`;return e&&(r+=`&start_time=${e}`),s&&(r+=`&end_time=${s}`),le.get(r)},deleteAlert:t=>le.delete(`/timeline/alerts/${t}`)},$g={getCollectionStats:()=>le.get("/dashboard/collection-stats"),getLogNames:()=>le.get("/dashboard/log-names")},hd={run:(t,e)=>le.post(`/analyze/${t}`,e||{}),list:()=>le.get("/analyzers"),info:t=>le.get(`/analyzers/${t}`),listRules:()=>le.get("/analyzer-rules"),getRule:t=>le.get(`/analyzer-rules/${t}`),updateRule:t=>le.put(`/analyzer-rules/${t.name}`,t)},fd={get:()=>le.get("/settings"),save:t=>le.post("/settings",t),reset:()=>le.post("/settings/reset")},Oi={detect:t=>le.get(`/persistence/detect${t||""}`),detectStream:(t,e)=>{const s=new EventSource("/api/persistence/detect/stream");return s.onmessage=r=>{try{const l=JSON.parse(r.data);t(l)}catch(l){console.error("Failed to parse SSE data:",l)}},s.onerror=r=>{console.error("SSE error:",r),e==null||e(r)},s},listCategories:()=>le.get("/persistence/categories"),listTechniques:()=>le.get("/persistence/techniques"),listDetectors:()=>le.get("/persistence/detectors"),updateDetectors:t=>le.post("/persistence/detectors/config",{detectors:t}),listRules:()=>le.get("/persistence/rules"),getRule:t=>le.get(`/persistence/rules/${t}`),updateRule:t=>le.put("/persistence/rules",t)},zj={analyze:t=>le.post("/correlation/analyze",t||{})},Ij={analyze:t=>le.post("/multi/analyze",t||{}),lateral:()=>le.get("/multi/lateral")},Fj={execute:t=>le.post("/query/execute",t)},Tr={list:()=>le.get("/suppress"),create:t=>le.post("/suppress",t),update:(t,e)=>le.put(`/suppress/${t}`,e),delete:t=>le.delete(`/suppress/${t}`),toggle:(t,e)=>le.post(`/suppress/${t}/toggle`,{enabled:e})},Ap={analyze:t=>le.post("/ueba/analyze",t||{}),profiles:()=>le.get("/ueba/profiles")},Mr={getStats:()=>le.get("/monitor/stats"),getEvents:t=>{let e="/monitor/events?";return t&&(t.type&&(e+=`type=${t.type}&`),t.severity&&(e+=`severity=${t.severity}&`),t.limit&&(e+=`limit=${t.limit}&`),t.offset&&(e+=`offset=${t.offset}&`),t.start_time&&(e+=`start_time=${encodeURIComponent(t.start_time)}&`),t.end_time&&(e+=`end_time=${encodeURIComponent(t.end_time)}&`)),le.get(e)},updateConfig:t=>le.post("/monitor/config",t),startStop:t=>le.post("/monitor/action",{action:t}),streamEvents:(t,e)=>{const s=new EventSource("/api/monitor/events/stream");return s.onmessage=r=>{try{const l=JSON.parse(r.data);t(l)}catch(l){console.error("Failed to parse SSE data:",l)}},s.onerror=r=>{console.error("SSE error:",r),e==null||e(r)},s}};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function fa(t){return t+.5|0}const vn=(t,e,s)=>Math.max(Math.min(t,s),e);function Br(t){return vn(fa(t*2.55),0,255)}function Nn(t){return vn(fa(t*255),0,255)}function Hs(t){return vn(fa(t/2.55)/100,0,1)}function Tp(t){return vn(fa(t*100),0,100)}const ts={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Od=[..."0123456789ABCDEF"],Bj=t=>Od[t&15],$j=t=>Od[(t&240)>>4]+Od[t&15],_l=t=>(t&240)>>4===(t&15),Wj=t=>_l(t.r)&&_l(t.g)&&_l(t.b)&&_l(t.a);function Uj(t){var e=t.length,s;return t[0]==="#"&&(e===4||e===5?s={r:255&ts[t[1]]*17,g:255&ts[t[2]]*17,b:255&ts[t[3]]*17,a:e===5?ts[t[4]]*17:255}:(e===7||e===9)&&(s={r:ts[t[1]]<<4|ts[t[2]],g:ts[t[3]]<<4|ts[t[4]],b:ts[t[5]]<<4|ts[t[6]],a:e===9?ts[t[7]]<<4|ts[t[8]]:255})),s}const Hj=(t,e)=>t<255?e(t):"";function Vj(t){var e=Wj(t)?Bj:$j;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Hj(t.a,e):void 0}const qj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Wg(t,e,s){const r=e*Math.min(s,1-s),l=(o,c=(o+t/30)%12)=>s-r*Math.max(Math.min(c-3,9-c,1),-1);return[l(0),l(8),l(4)]}function Yj(t,e,s){const r=(l,o=(l+t/60)%6)=>s-s*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Qj(t,e,s){const r=Wg(t,1,.5);let l;for(e+s>1&&(l=1/(e+s),e*=l,s*=l),l=0;l<3;l++)r[l]*=1-e-s,r[l]+=e;return r}function Kj(t,e,s,r,l){return t===l?(e-s)/r+(e<s?6:0):e===l?(s-t)/r+2:(t-e)/r+4}function tu(t){const s=t.r/255,r=t.g/255,l=t.b/255,o=Math.max(s,r,l),c=Math.min(s,r,l),u=(o+c)/2;let h,p,m;return o!==c&&(m=o-c,p=u>.5?m/(2-o-c):m/(o+c),h=Kj(s,r,l,m,o),h=h*60+.5),[h|0,p||0,u]}function su(t,e,s,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,s,r)).map(Nn)}function nu(t,e,s){return su(Wg,t,e,s)}function Xj(t,e,s){return su(Qj,t,e,s)}function Gj(t,e,s){return su(Yj,t,e,s)}function Ug(t){return(t%360+360)%360}function Jj(t){const e=qj.exec(t);let s=255,r;if(!e)return;e[5]!==r&&(s=e[6]?Br(+e[5]):Nn(+e[5]));const l=Ug(+e[2]),o=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?r=Xj(l,o,c):e[1]==="hsv"?r=Gj(l,o,c):r=nu(l,o,c),{r:r[0],g:r[1],b:r[2],a:s}}function Zj(t,e){var s=tu(t);s[0]=Ug(s[0]+e),s=nu(s),t.r=s[0],t.g=s[1],t.b=s[2]}function eN(t){if(!t)return;const e=tu(t),s=e[0],r=Tp(e[1]),l=Tp(e[2]);return t.a<255?`hsla(${s}, ${r}%, ${l}%, ${Hs(t.a)})`:`hsl(${s}, ${r}%, ${l}%)`}const Mp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Lp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function tN(){const t={},e=Object.keys(Lp),s=Object.keys(Mp);let r,l,o,c,u;for(r=0;r<e.length;r++){for(c=u=e[r],l=0;l<s.length;l++)o=s[l],u=u.replace(o,Mp[o]);o=parseInt(Lp[c],16),t[u]=[o>>16&255,o>>8&255,o&255]}return t}let Sl;function sN(t){Sl||(Sl=tN(),Sl.transparent=[0,0,0,0]);const e=Sl[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const nN=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function iN(t){const e=nN.exec(t);let s=255,r,l,o;if(e){if(e[7]!==r){const c=+e[7];s=e[8]?Br(c):vn(c*255,0,255)}return r=+e[1],l=+e[3],o=+e[5],r=255&(e[2]?Br(r):vn(r,0,255)),l=255&(e[4]?Br(l):vn(l,0,255)),o=255&(e[6]?Br(o):vn(o,0,255)),{r,g:l,b:o,a:s}}}function rN(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Hs(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const pd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,zi=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function aN(t,e,s){const r=zi(Hs(t.r)),l=zi(Hs(t.g)),o=zi(Hs(t.b));return{r:Nn(pd(r+s*(zi(Hs(e.r))-r))),g:Nn(pd(l+s*(zi(Hs(e.g))-l))),b:Nn(pd(o+s*(zi(Hs(e.b))-o))),a:t.a+s*(e.a-t.a)}}function Cl(t,e,s){if(t){let r=tu(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*s,e===0?360:1)),r=nu(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Hg(t,e){return t&&Object.assign(e||{},t)}function Op(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Nn(t[3]))):(e=Hg(t,{r:0,g:0,b:0,a:1}),e.a=Nn(e.a)),e}function lN(t){return t.charAt(0)==="r"?iN(t):Jj(t)}class Jr{constructor(e){if(e instanceof Jr)return e;const s=typeof e;let r;s==="object"?r=Op(e):s==="string"&&(r=Uj(e)||sN(e)||lN(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Hg(this._rgb);return e&&(e.a=Hs(e.a)),e}set rgb(e){this._rgb=Op(e)}rgbString(){return this._valid?rN(this._rgb):void 0}hexString(){return this._valid?Vj(this._rgb):void 0}hslString(){return this._valid?eN(this._rgb):void 0}mix(e,s){if(e){const r=this.rgb,l=e.rgb;let o;const c=s===o?.5:s,u=2*c-1,h=r.a-l.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;o=1-p,r.r=255&p*r.r+o*l.r+.5,r.g=255&p*r.g+o*l.g+.5,r.b=255&p*r.b+o*l.b+.5,r.a=c*r.a+(1-c)*l.a,this.rgb=r}return this}interpolate(e,s){return e&&(this._rgb=aN(this._rgb,e._rgb,s)),this}clone(){return new Jr(this.rgb)}alpha(e){return this._rgb.a=Nn(e),this}clearer(e){const s=this._rgb;return s.a*=1-e,this}greyscale(){const e=this._rgb,s=fa(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=s,this}opaquer(e){const s=this._rgb;return s.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Cl(this._rgb,2,e),this}darken(e){return Cl(this._rgb,2,-e),this}saturate(e){return Cl(this._rgb,1,e),this}desaturate(e){return Cl(this._rgb,1,-e),this}rotate(e){return Zj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function $s(){}const oN=(()=>{let t=0;return()=>t++})();function Oe(t){return t==null}function rt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function De(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function kt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function Ss(t,e){return kt(t)?t:e}function Ce(t,e){return typeof t>"u"?e:t}const cN=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Vg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function He(t,e,s){if(t&&typeof t.call=="function")return t.apply(s,e)}function Fe(t,e,s,r){let l,o,c;if(rt(t))for(o=t.length,l=0;l<o;l++)e.call(s,t[l],l);else if(De(t))for(c=Object.keys(t),o=c.length,l=0;l<o;l++)e.call(s,t[c[l]],c[l])}function Gl(t,e){let s,r,l,o;if(!t||!e||t.length!==e.length)return!1;for(s=0,r=t.length;s<r;++s)if(l=t[s],o=e[s],l.datasetIndex!==o.datasetIndex||l.index!==o.index)return!1;return!0}function Jl(t){if(rt(t))return t.map(Jl);if(De(t)){const e=Object.create(null),s=Object.keys(t),r=s.length;let l=0;for(;l<r;++l)e[s[l]]=Jl(t[s[l]]);return e}return t}function qg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function dN(t,e,s,r){if(!qg(t))return;const l=e[t],o=s[t];De(l)&&De(o)?Zr(l,o,r):e[t]=Jl(o)}function Zr(t,e,s){const r=rt(e)?e:[e],l=r.length;if(!De(t))return t;s=s||{};const o=s.merger||dN;let c;for(let u=0;u<l;++u){if(c=r[u],!De(c))continue;const h=Object.keys(c);for(let p=0,m=h.length;p<m;++p)o(h[p],t,c,s)}return t}function Vr(t,e){return Zr(t,e,{merger:uN})}function uN(t,e,s){if(!qg(t))return;const r=e[t],l=s[t];De(r)&&De(l)?Vr(r,l):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Jl(l))}const zp={"":t=>t,x:t=>t.x,y:t=>t.y};function hN(t){const e=t.split("."),s=[];let r="";for(const l of e)r+=l,r.endsWith("\\")?r=r.slice(0,-1)+".":(s.push(r),r="");return s}function fN(t){const e=hN(t);return s=>{for(const r of e){if(r==="")break;s=s&&s[r]}return s}}function ii(t,e){return(zp[e]||(zp[e]=fN(e)))(t)}function iu(t){return t.charAt(0).toUpperCase()+t.slice(1)}const ea=t=>typeof t<"u",wn=t=>typeof t=="function",Ip=(t,e)=>{if(t.size!==e.size)return!1;for(const s of t)if(!e.has(s))return!1;return!0};function pN(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Be=Math.PI,Xe=2*Be,mN=Xe+Be,Zl=Number.POSITIVE_INFINITY,gN=Be/180,ct=Be/2,Vn=Be/4,Fp=Be*2/3,Yg=Math.log10,Rs=Math.sign;function qr(t,e,s){return Math.abs(t-e)<s}function Bp(t){const e=Math.round(t);t=qr(t,e,t/1e3)?e:t;const s=Math.pow(10,Math.floor(Yg(t))),r=t/s;return(r<=1?1:r<=2?2:r<=5?5:10)*s}function xN(t){const e=[],s=Math.sqrt(t);let r;for(r=1;r<s;r++)t%r===0&&(e.push(r),e.push(t/r));return s===(s|0)&&e.push(s),e.sort((l,o)=>l-o).pop(),e}function vN(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function ta(t){return!vN(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function yN(t,e){const s=Math.round(t);return s-e<=t&&s+e>=t}function bN(t,e,s){let r,l,o;for(r=0,l=t.length;r<l;r++)o=t[r][s],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function Vs(t){return t*(Be/180)}function jN(t){return t*(180/Be)}function $p(t){if(!kt(t))return;let e=1,s=0;for(;Math.round(t*e)/e!==t;)e*=10,s++;return s}function Qg(t,e){const s=e.x-t.x,r=e.y-t.y,l=Math.sqrt(s*s+r*r);let o=Math.atan2(r,s);return o<-.5*Be&&(o+=Xe),{angle:o,distance:l}}function zd(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function NN(t,e){return(t-e+mN)%Xe-Be}function Ht(t){return(t%Xe+Xe)%Xe}function sa(t,e,s,r){const l=Ht(t),o=Ht(e),c=Ht(s),u=Ht(o-l),h=Ht(c-l),p=Ht(l-o),m=Ht(l-c);return l===o||l===c||r&&o===c||u>h&&p<m}function Nt(t,e,s){return Math.max(e,Math.min(s,t))}function wN(t){return Nt(t,-32768,32767)}function qs(t,e,s,r=1e-6){return t>=Math.min(e,s)-r&&t<=Math.max(e,s)+r}function ru(t,e,s){s=s||(c=>t[c]<e);let r=t.length-1,l=0,o;for(;r-l>1;)o=l+r>>1,s(o)?l=o:r=o;return{lo:l,hi:r}}const Zn=(t,e,s,r)=>ru(t,s,r?l=>{const o=t[l][e];return o<s||o===s&&t[l+1][e]===s}:l=>t[l][e]<s),kN=(t,e,s)=>ru(t,s,r=>t[r][e]>=s);function _N(t,e,s){let r=0,l=t.length;for(;r<l&&t[r]<e;)r++;for(;l>r&&t[l-1]>s;)l--;return r>0||l<t.length?t.slice(r,l):t}const Kg=["push","pop","shift","splice","unshift"];function SN(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Kg.forEach(s=>{const r="_onData"+iu(s),l=t[s];Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value(...o){const c=l.apply(this,o);return t._chartjs.listeners.forEach(u=>{typeof u[r]=="function"&&u[r](...o)}),c}})})}function Wp(t,e){const s=t._chartjs;if(!s)return;const r=s.listeners,l=r.indexOf(e);l!==-1&&r.splice(l,1),!(r.length>0)&&(Kg.forEach(o=>{delete t[o]}),delete t._chartjs)}function Xg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Gg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function Jg(t,e){let s=[],r=!1;return function(...l){s=l,r||(r=!0,Gg.call(window,()=>{r=!1,t.apply(e,s)}))}}function CN(t,e){let s;return function(...r){return e?(clearTimeout(s),s=setTimeout(t,e,r)):t.apply(this,r),e}}const au=t=>t==="start"?"left":t==="end"?"right":"center",bt=(t,e,s)=>t==="start"?e:t==="end"?s:(e+s)/2,EN=(t,e,s,r)=>t===(r?"left":"right")?s:t==="center"?(e+s)/2:e;function RN(t,e,s){const r=e.length;let l=0,o=r;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,m=c.axis,{min:x,max:N,minDefined:w,maxDefined:b}=c.getUserBounds();if(w){if(l=Math.min(Zn(h,m,x).lo,s?r:Zn(e,m,c.getPixelForValue(x)).lo),p){const j=h.slice(0,l+1).reverse().findIndex(y=>!Oe(y[u.axis]));l-=Math.max(0,j)}l=Nt(l,0,r-1)}if(b){let j=Math.max(Zn(h,c.axis,N,!0).hi+1,s?0:Zn(e,m,c.getPixelForValue(N),!0).hi+1);if(p){const y=h.slice(j-1).findIndex(C=>!Oe(C[u.axis]));j+=Math.max(0,y)}o=Nt(j,l,r)-l}else o=r-l}return{start:l,count:o}}function DN(t){const{xScale:e,yScale:s,_scaleRanges:r}=t,l={xmin:e.min,xmax:e.max,ymin:s.min,ymax:s.max};if(!r)return t._scaleRanges=l,!0;const o=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==s.min||r.ymax!==s.max;return Object.assign(r,l),o}const El=t=>t===0||t===1,Up=(t,e,s)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Xe/s)),Hp=(t,e,s)=>Math.pow(2,-10*t)*Math.sin((t-e)*Xe/s)+1,Yr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ct)+1,easeOutSine:t=>Math.sin(t*ct),easeInOutSine:t=>-.5*(Math.cos(Be*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>El(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>El(t)?t:Up(t,.075,.3),easeOutElastic:t=>El(t)?t:Hp(t,.075,.3),easeInOutElastic(t){return El(t)?t:t<.5?.5*Up(t*2,.1125,.45):.5+.5*Hp(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Yr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Yr.easeInBounce(t*2)*.5:Yr.easeOutBounce(t*2-1)*.5+.5};function lu(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Vp(t){return lu(t)?t:new Jr(t)}function md(t){return lu(t)?t:new Jr(t).saturate(.5).darken(.1).hexString()}const PN=["x","y","borderWidth","radius","tension"],AN=["color","borderColor","backgroundColor"];function TN(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:AN},numbers:{type:"number",properties:PN}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function MN(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const qp=new Map;function LN(t,e){e=e||{};const s=t+JSON.stringify(e);let r=qp.get(s);return r||(r=new Intl.NumberFormat(t,e),qp.set(s,r)),r}function ou(t,e,s){return LN(e,s).format(t)}const ON={values(t){return rt(t)?t:""+t},numeric(t,e,s){if(t===0)return"0";const r=this.chart.options.locale;let l,o=t;if(s.length>1){const p=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(p<1e-4||p>1e15)&&(l="scientific"),o=zN(t,s)}const c=Yg(Math.abs(o)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:l,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),ou(t,r,h)}};function zN(t,e){let s=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(s)>=1&&t!==Math.floor(t)&&(s=t-Math.floor(t)),s}var Zg={formatters:ON};function IN(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,s)=>s.lineWidth,tickColor:(e,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Zg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const ri=Object.create(null),Id=Object.create(null);function Qr(t,e){if(!e)return t;const s=e.split(".");for(let r=0,l=s.length;r<l;++r){const o=s[r];t=t[o]||(t[o]=Object.create(null))}return t}function gd(t,e,s){return typeof e=="string"?Zr(Qr(t,e),s):Zr(Qr(t,""),e)}class FN{constructor(e,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,l)=>md(l.backgroundColor),this.hoverBorderColor=(r,l)=>md(l.borderColor),this.hoverColor=(r,l)=>md(l.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(s)}set(e,s){return gd(this,e,s)}get(e){return Qr(this,e)}describe(e,s){return gd(Id,e,s)}override(e,s){return gd(ri,e,s)}route(e,s,r,l){const o=Qr(this,e),c=Qr(this,r),u="_"+s;Object.defineProperties(o,{[u]:{value:o[s],writable:!0},[s]:{enumerable:!0,get(){const h=this[u],p=c[l];return De(h)?Object.assign({},p,h):Ce(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(s=>s(this))}}var et=new FN({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[TN,MN,IN]);function BN(t){return!t||Oe(t.size)||Oe(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Yp(t,e,s,r,l){let o=e[l];return o||(o=e[l]=t.measureText(l).width,s.push(l)),o>r&&(r=o),r}function qn(t,e,s){const r=t.currentDevicePixelRatio,l=s!==0?Math.max(s/2,.5):0;return Math.round((e-l)*r)/r+l}function Qp(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Fd(t,e,s,r){ex(t,e,s,r,null)}function ex(t,e,s,r,l){let o,c,u,h,p,m,x,N;const w=e.pointStyle,b=e.rotation,j=e.radius;let y=(b||0)*gN;if(w&&typeof w=="object"&&(o=w.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){t.save(),t.translate(s,r),t.rotate(y),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(j)||j<=0)){switch(t.beginPath(),w){default:l?t.ellipse(s,r,l/2,j,0,0,Xe):t.arc(s,r,j,0,Xe),t.closePath();break;case"triangle":m=l?l/2:j,t.moveTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Fp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Fp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),t.closePath();break;case"rectRounded":p=j*.516,h=j-p,c=Math.cos(y+Vn)*h,x=Math.cos(y+Vn)*(l?l/2-p:h),u=Math.sin(y+Vn)*h,N=Math.sin(y+Vn)*(l?l/2-p:h),t.arc(s-x,r-u,p,y-Be,y-ct),t.arc(s+N,r-c,p,y-ct,y),t.arc(s+x,r+u,p,y,y+ct),t.arc(s-N,r+c,p,y+ct,y+Be),t.closePath();break;case"rect":if(!b){h=Math.SQRT1_2*j,m=l?l/2:h,t.rect(s-m,r-h,2*m,2*h);break}y+=Vn;case"rectRot":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-x,r-u),t.lineTo(s+N,r-c),t.lineTo(s+x,r+u),t.lineTo(s-N,r+c),t.closePath();break;case"crossRot":y+=Vn;case"cross":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"star":x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c),y+=Vn,x=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"line":c=l?l/2:Math.cos(y)*j,u=Math.sin(y)*j,t.moveTo(s-c,r-u),t.lineTo(s+c,r+u);break;case"dash":t.moveTo(s,r),t.lineTo(s+Math.cos(y)*(l?l/2:j),r+Math.sin(y)*j);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function na(t,e,s){return s=s||.5,!e||t&&t.x>e.left-s&&t.x<e.right+s&&t.y>e.top-s&&t.y<e.bottom+s}function po(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function mo(t){t.restore()}function $N(t,e,s,r,l){if(!e)return t.lineTo(s.x,s.y);if(l==="middle"){const o=(e.x+s.x)/2;t.lineTo(o,e.y),t.lineTo(o,s.y)}else l==="after"!=!!r?t.lineTo(e.x,s.y):t.lineTo(s.x,e.y);t.lineTo(s.x,s.y)}function WN(t,e,s,r){if(!e)return t.lineTo(s.x,s.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?s.cp2x:s.cp1x,r?s.cp2y:s.cp1y,s.x,s.y)}function UN(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Oe(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function HN(t,e,s,r,l){if(l.strikethrough||l.underline){const o=t.measureText(r),c=e-o.actualBoundingBoxLeft,u=e+o.actualBoundingBoxRight,h=s-o.actualBoundingBoxAscent,p=s+o.actualBoundingBoxDescent,m=l.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=l.decorationWidth||2,t.moveTo(c,m),t.lineTo(u,m),t.stroke()}}function VN(t,e){const s=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=s}function ia(t,e,s,r,l,o={}){const c=rt(e)?e:[e],u=o.strokeWidth>0&&o.strokeColor!=="";let h,p;for(t.save(),t.font=l.string,UN(t,o),h=0;h<c.length;++h)p=c[h],o.backdrop&&VN(t,o.backdrop),u&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),Oe(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(p,s,r,o.maxWidth)),t.fillText(p,s,r,o.maxWidth),HN(t,s,r,p,o),r+=Number(l.lineHeight);t.restore()}function eo(t,e){const{x:s,y:r,w:l,h:o,radius:c}=e;t.arc(s+c.topLeft,r+c.topLeft,c.topLeft,1.5*Be,Be,!0),t.lineTo(s,r+o-c.bottomLeft),t.arc(s+c.bottomLeft,r+o-c.bottomLeft,c.bottomLeft,Be,ct,!0),t.lineTo(s+l-c.bottomRight,r+o),t.arc(s+l-c.bottomRight,r+o-c.bottomRight,c.bottomRight,ct,0,!0),t.lineTo(s+l,r+c.topRight),t.arc(s+l-c.topRight,r+c.topRight,c.topRight,0,-ct,!0),t.lineTo(s+c.topLeft,r)}const qN=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,YN=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function QN(t,e){const s=(""+t).match(qN);if(!s||s[1]==="normal")return e*1.2;switch(t=+s[2],s[3]){case"px":return t;case"%":t/=100;break}return e*t}const KN=t=>+t||0;function cu(t,e){const s={},r=De(e),l=r?Object.keys(e):e,o=De(t)?r?c=>Ce(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of l)s[c]=KN(o(c));return s}function tx(t){return cu(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Fi(t){return cu(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ns(t){const e=tx(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function wt(t,e){t=t||{},e=e||et.font;let s=Ce(t.size,e.size);typeof s=="string"&&(s=parseInt(s,10));let r=Ce(t.style,e.style);r&&!(""+r).match(YN)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const l={family:Ce(t.family,e.family),lineHeight:QN(Ce(t.lineHeight,e.lineHeight),s),size:s,style:r,weight:Ce(t.weight,e.weight),string:""};return l.string=BN(l),l}function Rl(t,e,s,r){let l,o,c;for(l=0,o=t.length;l<o;++l)if(c=t[l],c!==void 0&&c!==void 0)return c}function XN(t,e,s){const{min:r,max:l}=t,o=Vg(e,(l-r)/2),c=(u,h)=>s&&u===0?0:u+h;return{min:c(r,-Math.abs(o)),max:c(l,o)}}function li(t,e){return Object.assign(Object.create(t),e)}function du(t,e=[""],s,r,l=()=>t[0]){const o=s||t;typeof r>"u"&&(r=rx("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:o,_fallback:r,_getTarget:l,override:u=>du([u,...t],e,o,r)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return nx(u,h,()=>i1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return Xp(u).includes(h)},ownKeys(u){return Xp(u)},set(u,h,p){const m=u._storage||(u._storage=l());return u[h]=m[h]=p,delete u._keys,!0}})}function Wi(t,e,s,r){const l={_cacheable:!1,_proxy:t,_context:e,_subProxy:s,_stack:new Set,_descriptors:sx(t,r),setContext:o=>Wi(t,o,s,r),override:o=>Wi(t.override(o),e,s,r)};return new Proxy(l,{deleteProperty(o,c){return delete o[c],delete t[c],!0},get(o,c,u){return nx(o,c,()=>JN(o,c,u))},getOwnPropertyDescriptor(o,c){return o._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(o,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(o,c,u){return t[c]=u,delete o[c],!0}})}function sx(t,e={scriptable:!0,indexable:!0}){const{_scriptable:s=e.scriptable,_indexable:r=e.indexable,_allKeys:l=e.allKeys}=t;return{allKeys:l,scriptable:s,indexable:r,isScriptable:wn(s)?s:()=>s,isIndexable:wn(r)?r:()=>r}}const GN=(t,e)=>t?t+iu(e):e,uu=(t,e)=>De(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function nx(t,e,s){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=s();return t[e]=r,r}function JN(t,e,s){const{_proxy:r,_context:l,_subProxy:o,_descriptors:c}=t;let u=r[e];return wn(u)&&c.isScriptable(e)&&(u=ZN(e,u,t,s)),rt(u)&&u.length&&(u=e1(e,u,t,c.isIndexable)),uu(e,u)&&(u=Wi(u,l,o&&o[e],c)),u}function ZN(t,e,s,r){const{_proxy:l,_context:o,_subProxy:c,_stack:u}=s;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(o,c||r);return u.delete(t),uu(t,h)&&(h=hu(l._scopes,l,t,h)),h}function e1(t,e,s,r){const{_proxy:l,_context:o,_subProxy:c,_descriptors:u}=s;if(typeof o.index<"u"&&r(t))return e[o.index%e.length];if(De(e[0])){const h=e,p=l._scopes.filter(m=>m!==h);e=[];for(const m of h){const x=hu(p,l,t,m);e.push(Wi(x,o,c&&c[t],u))}}return e}function ix(t,e,s){return wn(t)?t(e,s):t}const t1=(t,e)=>t===!0?e:typeof t=="string"?ii(e,t):void 0;function s1(t,e,s,r,l){for(const o of e){const c=t1(s,o);if(c){t.add(c);const u=ix(c._fallback,s,l);if(typeof u<"u"&&u!==s&&u!==r)return u}else if(c===!1&&typeof r<"u"&&s!==r)return null}return!1}function hu(t,e,s,r){const l=e._rootScopes,o=ix(e._fallback,s,r),c=[...t,...l],u=new Set;u.add(r);let h=Kp(u,c,s,o||s,r);return h===null||typeof o<"u"&&o!==s&&(h=Kp(u,c,o,h,r),h===null)?!1:du(Array.from(u),[""],l,o,()=>n1(e,s,r))}function Kp(t,e,s,r,l){for(;s;)s=s1(t,e,s,r,l);return s}function n1(t,e,s){const r=t._getTarget();e in r||(r[e]={});const l=r[e];return rt(l)&&De(s)?s:l||{}}function i1(t,e,s,r){let l;for(const o of e)if(l=rx(GN(o,t),s),typeof l<"u")return uu(t,l)?hu(s,r,t,l):l}function rx(t,e){for(const s of e){if(!s)continue;const r=s[t];if(typeof r<"u")return r}}function Xp(t){let e=t._keys;return e||(e=t._keys=r1(t._scopes)),e}function r1(t){const e=new Set;for(const s of t)for(const r of Object.keys(s).filter(l=>!l.startsWith("_")))e.add(r);return Array.from(e)}const a1=Number.EPSILON||1e-14,Ui=(t,e)=>e<t.length&&!t[e].skip&&t[e],ax=t=>t==="x"?"y":"x";function l1(t,e,s,r){const l=t.skip?e:t,o=e,c=s.skip?e:s,u=zd(o,l),h=zd(c,o);let p=u/(u+h),m=h/(u+h);p=isNaN(p)?0:p,m=isNaN(m)?0:m;const x=r*p,N=r*m;return{previous:{x:o.x-x*(c.x-l.x),y:o.y-x*(c.y-l.y)},next:{x:o.x+N*(c.x-l.x),y:o.y+N*(c.y-l.y)}}}function o1(t,e,s){const r=t.length;let l,o,c,u,h,p=Ui(t,0);for(let m=0;m<r-1;++m)if(h=p,p=Ui(t,m+1),!(!h||!p)){if(qr(e[m],0,a1)){s[m]=s[m+1]=0;continue}l=s[m]/e[m],o=s[m+1]/e[m],u=Math.pow(l,2)+Math.pow(o,2),!(u<=9)&&(c=3/Math.sqrt(u),s[m]=l*c*e[m],s[m+1]=o*c*e[m])}}function c1(t,e,s="x"){const r=ax(s),l=t.length;let o,c,u,h=Ui(t,0);for(let p=0;p<l;++p){if(c=u,u=h,h=Ui(t,p+1),!u)continue;const m=u[s],x=u[r];c&&(o=(m-c[s])/3,u[`cp1${s}`]=m-o,u[`cp1${r}`]=x-o*e[p]),h&&(o=(h[s]-m)/3,u[`cp2${s}`]=m+o,u[`cp2${r}`]=x+o*e[p])}}function d1(t,e="x"){const s=ax(e),r=t.length,l=Array(r).fill(0),o=Array(r);let c,u,h,p=Ui(t,0);for(c=0;c<r;++c)if(u=h,h=p,p=Ui(t,c+1),!!h){if(p){const m=p[e]-h[e];l[c]=m!==0?(p[s]-h[s])/m:0}o[c]=u?p?Rs(l[c-1])!==Rs(l[c])?0:(l[c-1]+l[c])/2:l[c-1]:l[c]}o1(t,l,o),c1(t,o,e)}function Dl(t,e,s){return Math.max(Math.min(t,s),e)}function u1(t,e){let s,r,l,o,c,u=na(t[0],e);for(s=0,r=t.length;s<r;++s)c=o,o=u,u=s<r-1&&na(t[s+1],e),o&&(l=t[s],c&&(l.cp1x=Dl(l.cp1x,e.left,e.right),l.cp1y=Dl(l.cp1y,e.top,e.bottom)),u&&(l.cp2x=Dl(l.cp2x,e.left,e.right),l.cp2y=Dl(l.cp2y,e.top,e.bottom)))}function h1(t,e,s,r,l){let o,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")d1(t,l);else{let p=r?t[t.length-1]:t[0];for(o=0,c=t.length;o<c;++o)u=t[o],h=l1(p,u,t[Math.min(o+1,c-(r?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&u1(t,s)}function fu(){return typeof window<"u"&&typeof document<"u"}function pu(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function to(t,e,s){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[s])):r=t,r}const go=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function f1(t,e){return go(t).getPropertyValue(e)}const p1=["top","right","bottom","left"];function ti(t,e,s){const r={};s=s?"-"+s:"";for(let l=0;l<4;l++){const o=p1[l];r[o]=parseFloat(t[e+"-"+o+s])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const m1=(t,e,s)=>(t>0||e>0)&&(!s||!s.shadowRoot);function g1(t,e){const s=t.touches,r=s&&s.length?s[0]:t,{offsetX:l,offsetY:o}=r;let c=!1,u,h;if(m1(l,o,t.target))u=l,h=o;else{const p=e.getBoundingClientRect();u=r.clientX-p.left,h=r.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Xn(t,e){if("native"in t)return t;const{canvas:s,currentDevicePixelRatio:r}=e,l=go(s),o=l.boxSizing==="border-box",c=ti(l,"padding"),u=ti(l,"border","width"),{x:h,y:p,box:m}=g1(t,s),x=c.left+(m&&u.left),N=c.top+(m&&u.top);let{width:w,height:b}=e;return o&&(w-=c.width+u.width,b-=c.height+u.height),{x:Math.round((h-x)/w*s.width/r),y:Math.round((p-N)/b*s.height/r)}}function x1(t,e,s){let r,l;if(e===void 0||s===void 0){const o=t&&pu(t);if(!o)e=t.clientWidth,s=t.clientHeight;else{const c=o.getBoundingClientRect(),u=go(o),h=ti(u,"border","width"),p=ti(u,"padding");e=c.width-p.width-h.width,s=c.height-p.height-h.height,r=to(u.maxWidth,o,"clientWidth"),l=to(u.maxHeight,o,"clientHeight")}}return{width:e,height:s,maxWidth:r||Zl,maxHeight:l||Zl}}const yn=t=>Math.round(t*10)/10;function v1(t,e,s,r){const l=go(t),o=ti(l,"margin"),c=to(l.maxWidth,t,"clientWidth")||Zl,u=to(l.maxHeight,t,"clientHeight")||Zl,h=x1(t,e,s);let{width:p,height:m}=h;if(l.boxSizing==="content-box"){const N=ti(l,"border","width"),w=ti(l,"padding");p-=w.width+N.width,m-=w.height+N.height}return p=Math.max(0,p-o.width),m=Math.max(0,r?p/r:m-o.height),p=yn(Math.min(p,c,h.maxWidth)),m=yn(Math.min(m,u,h.maxHeight)),p&&!m&&(m=yn(p/2)),(e!==void 0||s!==void 0)&&r&&h.height&&m>h.height&&(m=h.height,p=yn(Math.floor(m*r))),{width:p,height:m}}function Gp(t,e,s){const r=e||1,l=yn(t.height*r),o=yn(t.width*r);t.height=yn(t.height),t.width=yn(t.width);const c=t.canvas;return c.style&&(s||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||c.height!==l||c.width!==o?(t.currentDevicePixelRatio=r,c.height=l,c.width=o,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const y1=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};fu()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Jp(t,e){const s=f1(t,e),r=s&&s.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Gn(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:t.y+s*(e.y-t.y)}}function b1(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:r==="middle"?s<.5?t.y:e.y:r==="after"?s<1?t.y:e.y:s>0?e.y:t.y}}function j1(t,e,s,r){const l={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},c=Gn(t,l,s),u=Gn(l,o,s),h=Gn(o,e,s),p=Gn(c,u,s),m=Gn(u,h,s);return Gn(p,m,s)}const N1=function(t,e){return{x(s){return t+t+e-s},setWidth(s){e=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,r){return s-r},leftForLtr(s,r){return s-r}}},w1=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Bi(t,e,s){return t?N1(e,s):w1()}function lx(t,e){let s,r;(e==="ltr"||e==="rtl")&&(s=t.canvas.style,r=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",e,"important"),t.prevTextDirection=r)}function ox(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function cx(t){return t==="angle"?{between:sa,compare:NN,normalize:Ht}:{between:qs,compare:(e,s)=>e-s,normalize:e=>e}}function Zp({start:t,end:e,count:s,loop:r,style:l}){return{start:t%s,end:e%s,loop:r&&(e-t+1)%s===0,style:l}}function k1(t,e,s){const{property:r,start:l,end:o}=s,{between:c,normalize:u}=cx(r),h=e.length;let{start:p,end:m,loop:x}=t,N,w;if(x){for(p+=h,m+=h,N=0,w=h;N<w&&c(u(e[p%h][r]),l,o);++N)p--,m--;p%=h,m%=h}return m<p&&(m+=h),{start:p,end:m,loop:x,style:t.style}}function dx(t,e,s){if(!s)return[t];const{property:r,start:l,end:o}=s,c=e.length,{compare:u,between:h,normalize:p}=cx(r),{start:m,end:x,loop:N,style:w}=k1(t,e,s),b=[];let j=!1,y=null,C,R,T;const W=()=>h(l,T,C)&&u(l,T)!==0,_=()=>u(o,C)===0||h(o,T,C),H=()=>j||W(),L=()=>!j||_();for(let P=m,A=m;P<=x;++P)R=e[P%c],!R.skip&&(C=p(R[r]),C!==T&&(j=h(C,l,o),y===null&&H()&&(y=u(C,l)===0?P:A),y!==null&&L()&&(b.push(Zp({start:y,end:P,loop:N,count:c,style:w})),y=null),A=P,T=C));return y!==null&&b.push(Zp({start:y,end:x,loop:N,count:c,style:w})),b}function ux(t,e){const s=[],r=t.segments;for(let l=0;l<r.length;l++){const o=dx(r[l],t.points,e);o.length&&s.push(...o)}return s}function _1(t,e,s,r){let l=0,o=e-1;if(s&&!r)for(;l<e&&!t[l].skip;)l++;for(;l<e&&t[l].skip;)l++;for(l%=e,s&&(o+=l);o>l&&t[o%e].skip;)o--;return o%=e,{start:l,end:o}}function S1(t,e,s,r){const l=t.length,o=[];let c=e,u=t[e],h;for(h=e+1;h<=s;++h){const p=t[h%l];p.skip||p.stop?u.skip||(r=!1,o.push({start:e%l,end:(h-1)%l,loop:r}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&o.push({start:e%l,end:c%l,loop:r}),o}function C1(t,e){const s=t.points,r=t.options.spanGaps,l=s.length;if(!l)return[];const o=!!t._loop,{start:c,end:u}=_1(s,l,o,r);if(r===!0)return em(t,[{start:c,end:u,loop:o}],s,e);const h=u<c?u+l:u,p=!!t._fullLoop&&c===0&&u===l-1;return em(t,S1(s,c,h,p),s,e)}function em(t,e,s,r){return!r||!r.setContext||!s?e:E1(t,e,s,r)}function E1(t,e,s,r){const l=t._chart.getContext(),o=tm(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=s.length,p=[];let m=o,x=e[0].start,N=x;function w(b,j,y,C){const R=u?-1:1;if(b!==j){for(b+=h;s[b%h].skip;)b-=R;for(;s[j%h].skip;)j+=R;b%h!==j%h&&(p.push({start:b%h,end:j%h,loop:y,style:C}),m=C,x=j%h)}}for(const b of e){x=u?x:b.start;let j=s[x%h],y;for(N=x+1;N<=b.end;N++){const C=s[N%h];y=tm(r.setContext(li(l,{type:"segment",p0:j,p1:C,p0DataIndex:(N-1)%h,p1DataIndex:N%h,datasetIndex:c}))),R1(y,m)&&w(x,N-1,b.loop,m),j=C,m=y}x<N-1&&w(x,N-1,b.loop,m)}return p}function tm(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function R1(t,e){if(!e)return!1;const s=[],r=function(l,o){return lu(o)?(s.includes(o)||s.push(o),s.indexOf(o)):o};return JSON.stringify(t,r)!==JSON.stringify(e,r)}function Pl(t,e,s){return t.options.clip?t[s]:e[s]}function D1(t,e){const{xScale:s,yScale:r}=t;return s&&r?{left:Pl(s,e,"left"),right:Pl(s,e,"right"),top:Pl(r,e,"top"),bottom:Pl(r,e,"bottom")}:e}function hx(t,e){const s=e._clip;if(s.disabled)return!1;const r=D1(e,t.chartArea);return{left:s.left===!1?0:r.left-(s.left===!0?0:s.left),right:s.right===!1?t.width:r.right+(s.right===!0?0:s.right),top:s.top===!1?0:r.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?t.height:r.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class P1{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,s,r,l){const o=s.listeners[l],c=s.duration;o.forEach(u=>u({chart:e,initial:s.initial,numSteps:c,currentStep:Math.min(r-s.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Gg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let s=0;this._charts.forEach((r,l)=>{if(!r.running||!r.items.length)return;const o=r.items;let c=o.length-1,u=!1,h;for(;c>=0;--c)h=o[c],h._active?(h._total>r.duration&&(r.duration=h._total),h.tick(e),u=!0):(o[c]=o[o.length-1],o.pop());u&&(l.draw(),this._notify(l,r,e,"progress")),o.length||(r.running=!1,this._notify(l,r,e,"complete"),r.initial=!1),s+=o.length}),this._lastDate=e,s===0&&(this._running=!1)}_getAnims(e){const s=this._charts;let r=s.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(e,r)),r}listen(e,s,r){this._getAnims(e).listeners[s].push(r)}add(e,s){!s||!s.length||this._getAnims(e).items.push(...s)}has(e){return this._getAnims(e).items.length>0}start(e){const s=this._charts.get(e);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((r,l)=>Math.max(r,l._duration),0),this._refresh())}running(e){if(!this._running)return!1;const s=this._charts.get(e);return!(!s||!s.running||!s.items.length)}stop(e){const s=this._charts.get(e);if(!s||!s.items.length)return;const r=s.items;let l=r.length-1;for(;l>=0;--l)r[l].cancel();s.items=[],this._notify(e,s,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ws=new P1;const sm="transparent",A1={boolean(t,e,s){return s>.5?e:t},color(t,e,s){const r=Vp(t||sm),l=r.valid&&Vp(e||sm);return l&&l.valid?l.mix(r,s).hexString():e},number(t,e,s){return t+(e-t)*s}};class T1{constructor(e,s,r,l){const o=s[r];l=Rl([e.to,l,o,e.from]);const c=Rl([e.from,o,l]);this._active=!0,this._fn=e.fn||A1[e.type||typeof c],this._easing=Yr[e.easing]||Yr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=s,this._prop=r,this._from=c,this._to=l,this._promises=void 0}active(){return this._active}update(e,s,r){if(this._active){this._notify(!1);const l=this._target[this._prop],o=r-this._start,c=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=o,this._loop=!!e.loop,this._to=Rl([e.to,s,l,e.from]),this._from=Rl([e.from,l,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const s=e-this._start,r=this._duration,l=this._prop,o=this._from,c=this._loop,u=this._to;let h;if(this._active=o!==u&&(c||s<r),!this._active){this._target[l]=u,this._notify(!0);return}if(s<0){this._target[l]=o;return}h=s/r%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[l]=this._fn(o,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((s,r)=>{e.push({res:s,rej:r})})}_notify(e){const s=e?"res":"rej",r=this._promises||[];for(let l=0;l<r.length;l++)r[l][s]()}}class fx{constructor(e,s){this._chart=e,this._properties=new Map,this.configure(s)}configure(e){if(!De(e))return;const s=Object.keys(et.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(l=>{const o=e[l];if(!De(o))return;const c={};for(const u of s)c[u]=o[u];(rt(o.properties)&&o.properties||[l]).forEach(u=>{(u===l||!r.has(u))&&r.set(u,c)})})}_animateOptions(e,s){const r=s.options,l=L1(e,r);if(!l)return[];const o=this._createAnimations(l,r);return r.$shared&&M1(e.options.$animations,r).then(()=>{e.options=r},()=>{}),o}_createAnimations(e,s){const r=this._properties,l=[],o=e.$animations||(e.$animations={}),c=Object.keys(s),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){l.push(...this._animateOptions(e,s));continue}const m=s[p];let x=o[p];const N=r.get(p);if(x)if(N&&x.active()){x.update(N,m,u);continue}else x.cancel();if(!N||!N.duration){e[p]=m;continue}o[p]=x=new T1(N,e,p,m),l.push(x)}return l}update(e,s){if(this._properties.size===0){Object.assign(e,s);return}const r=this._createAnimations(e,s);if(r.length)return Ws.add(this._chart,r),!0}}function M1(t,e){const s=[],r=Object.keys(e);for(let l=0;l<r.length;l++){const o=t[r[l]];o&&o.active()&&s.push(o.wait())}return Promise.all(s)}function L1(t,e){if(!e)return;let s=t.options;if(!s){t.options=e;return}return s.$shared&&(t.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function nm(t,e){const s=t&&t.options||{},r=s.reverse,l=s.min===void 0?e:0,o=s.max===void 0?e:0;return{start:r?o:l,end:r?l:o}}function O1(t,e,s){if(s===!1)return!1;const r=nm(t,s),l=nm(e,s);return{top:l.end,right:r.end,bottom:l.start,left:r.start}}function z1(t){let e,s,r,l;return De(t)?(e=t.top,s=t.right,r=t.bottom,l=t.left):e=s=r=l=t,{top:e,right:s,bottom:r,left:l,disabled:t===!1}}function px(t,e){const s=[],r=t._getSortedDatasetMetas(e);let l,o;for(l=0,o=r.length;l<o;++l)s.push(r[l].index);return s}function im(t,e,s,r={}){const l=t.keys,o=r.mode==="single";let c,u,h,p;if(e===null)return;let m=!1;for(c=0,u=l.length;c<u;++c){if(h=+l[c],h===s){if(m=!0,r.all)continue;break}p=t.values[h],kt(p)&&(o||e===0||Rs(e)===Rs(p))&&(e+=p)}return!m&&!r.all?0:e}function I1(t,e){const{iScale:s,vScale:r}=e,l=s.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,m;for(h=0,p=c.length;h<p;++h)m=c[h],u[h]={[l]:m,[o]:t[m]};return u}function xd(t,e){const s=t&&t.options.stacked;return s||s===void 0&&e.stack!==void 0}function F1(t,e,s){return`${t.id}.${e.id}.${s.stack||s.type}`}function B1(t){const{min:e,max:s,minDefined:r,maxDefined:l}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:l?s:Number.POSITIVE_INFINITY}}function $1(t,e,s){const r=t[e]||(t[e]={});return r[s]||(r[s]={})}function rm(t,e,s,r){for(const l of e.getMatchingVisibleMetas(r).reverse()){const o=t[l.index];if(s&&o>0||!s&&o<0)return l.index}return null}function am(t,e){const{chart:s,_cachedMeta:r}=t,l=s._stacks||(s._stacks={}),{iScale:o,vScale:c,index:u}=r,h=o.axis,p=c.axis,m=F1(o,c,r),x=e.length;let N;for(let w=0;w<x;++w){const b=e[w],{[h]:j,[p]:y}=b,C=b._stacks||(b._stacks={});N=C[p]=$1(l,m,j),N[u]=y,N._top=rm(N,c,!0,r.type),N._bottom=rm(N,c,!1,r.type);const R=N._visualValues||(N._visualValues={});R[u]=y}}function vd(t,e){const s=t.scales;return Object.keys(s).filter(r=>s[r].axis===e).shift()}function W1(t,e){return li(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function U1(t,e,s){return li(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:s,index:e,mode:"default",type:"data"})}function Lr(t,e){const s=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const l of e){const o=l._stacks;if(!o||o[r]===void 0||o[r][s]===void 0)return;delete o[r][s],o[r]._visualValues!==void 0&&o[r]._visualValues[s]!==void 0&&delete o[r]._visualValues[s]}}}const yd=t=>t==="reset"||t==="none",lm=(t,e)=>e?t:Object.assign({},t),H1=(t,e,s)=>t&&!e.hidden&&e._stacked&&{keys:px(s,!0),values:null};class si{constructor(e,s){this.chart=e,this._ctx=e.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=xd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Lr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,s=this._cachedMeta,r=this.getDataset(),l=(x,N,w,b)=>x==="x"?N:x==="r"?b:w,o=s.xAxisID=Ce(r.xAxisID,vd(e,"x")),c=s.yAxisID=Ce(r.yAxisID,vd(e,"y")),u=s.rAxisID=Ce(r.rAxisID,vd(e,"r")),h=s.indexAxis,p=s.iAxisID=l(h,o,c,u),m=s.vAxisID=l(h,c,o,u);s.xScale=this.getScaleForId(o),s.yScale=this.getScaleForId(c),s.rScale=this.getScaleForId(u),s.iScale=this.getScaleForId(p),s.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const s=this._cachedMeta;return e===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Wp(this._data,this),e._stacked&&Lr(e)}_dataCheck(){const e=this.getDataset(),s=e.data||(e.data=[]),r=this._data;if(De(s)){const l=this._cachedMeta;this._data=I1(s,l)}else if(r!==s){if(r){Wp(r,this);const l=this._cachedMeta;Lr(l),l._parsed=[]}s&&Object.isExtensible(s)&&SN(s,this),this._syncList=[],this._data=s}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const s=this._cachedMeta,r=this.getDataset();let l=!1;this._dataCheck();const o=s._stacked;s._stacked=xd(s.vScale,s),s.stack!==r.stack&&(l=!0,Lr(s),s.stack=r.stack),this._resyncElements(e),(l||o!==s._stacked)&&(am(this,s._parsed),s._stacked=xd(s.vScale,s))}configure(){const e=this.chart.config,s=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),s,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,s){const{_cachedMeta:r,_data:l}=this,{iScale:o,_stacked:c}=r,u=o.axis;let h=e===0&&s===l.length?!0:r._sorted,p=e>0&&r._parsed[e-1],m,x,N;if(this._parsing===!1)r._parsed=l,r._sorted=!0,N=l;else{rt(l[e])?N=this.parseArrayData(r,l,e,s):De(l[e])?N=this.parseObjectData(r,l,e,s):N=this.parsePrimitiveData(r,l,e,s);const w=()=>x[u]===null||p&&x[u]<p[u];for(m=0;m<s;++m)r._parsed[m+e]=x=N[m],h&&(w()&&(h=!1),p=x);r._sorted=h}c&&am(this,N)}parsePrimitiveData(e,s,r,l){const{iScale:o,vScale:c}=e,u=o.axis,h=c.axis,p=o.getLabels(),m=o===c,x=new Array(l);let N,w,b;for(N=0,w=l;N<w;++N)b=N+r,x[N]={[u]:m||o.parse(p[b],b),[h]:c.parse(s[b],b)};return x}parseArrayData(e,s,r,l){const{xScale:o,yScale:c}=e,u=new Array(l);let h,p,m,x;for(h=0,p=l;h<p;++h)m=h+r,x=s[m],u[h]={x:o.parse(x[0],m),y:c.parse(x[1],m)};return u}parseObjectData(e,s,r,l){const{xScale:o,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(l);let m,x,N,w;for(m=0,x=l;m<x;++m)N=m+r,w=s[N],p[m]={x:o.parse(ii(w,u),N),y:c.parse(ii(w,h),N)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,s,r){const l=this.chart,o=this._cachedMeta,c=s[e.axis],u={keys:px(l,!0),values:s._stacks[e.axis]._visualValues};return im(u,c,o.index,{mode:r})}updateRangeFromParsed(e,s,r,l){const o=r[s.axis];let c=o===null?NaN:o;const u=l&&r._stacks[s.axis];l&&u&&(l.values=u,c=im(l,o,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,s){const r=this._cachedMeta,l=r._parsed,o=r._sorted&&e===r.iScale,c=l.length,u=this._getOtherScale(e),h=H1(s,r,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:x}=B1(u);let N,w;function b(){w=l[N];const j=w[u.axis];return!kt(w[e.axis])||m>j||x<j}for(N=0;N<c&&!(!b()&&(this.updateRangeFromParsed(p,e,w,h),o));++N);if(o){for(N=c-1;N>=0;--N)if(!b()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const s=this._cachedMeta._parsed,r=[];let l,o,c;for(l=0,o=s.length;l<o;++l)c=s[l][e.axis],kt(c)&&r.push(c);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const s=this._cachedMeta,r=s.iScale,l=s.vScale,o=this.getParsed(e);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:l?""+l.getLabelForValue(o[l.axis]):""}}_update(e){const s=this._cachedMeta;this.update(e||"default"),s._clip=z1(Ce(this.options.clip,O1(s.xScale,s.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,s=this.chart,r=this._cachedMeta,l=r.data||[],o=s.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||l.length-u,p=this.options.drawActiveElementsOnTop;let m;for(r.dataset&&r.dataset.draw(e,o,u,h),m=u;m<u+h;++m){const x=l[m];x.hidden||(x.active&&p?c.push(x):x.draw(e,o))}for(m=0;m<c.length;++m)c[m].draw(e,o)}getStyle(e,s){const r=s?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,s,r){const l=this.getDataset();let o;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];o=c.$context||(c.$context=U1(this.getContext(),e,c)),o.parsed=this.getParsed(e),o.raw=l.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=W1(this.chart.getContext(),this.index)),o.dataset=l,o.index=o.datasetIndex=this.index;return o.active=!!s,o.mode=r,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,s){return this._resolveElementOptions(this.dataElementType.id,s,e)}_resolveElementOptions(e,s="default",r){const l=s==="active",o=this._cachedDataOpts,c=e+"-"+s,u=o[c],h=this.enableOptionSharing&&ea(r);if(u)return lm(u,h);const p=this.chart.config,m=p.datasetElementScopeKeys(this._type,e),x=l?[`${e}Hover`,"hover",e,""]:[e,""],N=p.getOptionScopes(this.getDataset(),m),w=Object.keys(et.elements[e]),b=()=>this.getContext(r,l,s),j=p.resolveNamedOptions(N,w,b,x);return j.$shared&&(j.$shared=h,o[c]=Object.freeze(lm(j,h))),j}_resolveAnimations(e,s,r){const l=this.chart,o=this._cachedDataOpts,c=`animation-${s}`,u=o[c];if(u)return u;let h;if(l.options.animation!==!1){const m=this.chart.config,x=m.datasetAnimationScopeKeys(this._type,s),N=m.getOptionScopes(this.getDataset(),x);h=m.createResolver(N,this.getContext(e,r,s))}const p=new fx(l,h&&h.animations);return h&&h._cacheable&&(o[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,s){return!s||yd(e)||this.chart._animationsDisabled}_getSharedOptions(e,s){const r=this.resolveDataElementOptions(e,s),l=this._sharedOptions,o=this.getSharedOptions(r),c=this.includeOptions(s,o)||o!==l;return this.updateSharedOptions(o,s,r),{sharedOptions:o,includeOptions:c}}updateElement(e,s,r,l){yd(l)?Object.assign(e,r):this._resolveAnimations(s,l).update(e,r)}updateSharedOptions(e,s,r){e&&!yd(s)&&this._resolveAnimations(void 0,s).update(e,r)}_setStyle(e,s,r,l){e.active=l;const o=this.getStyle(s,l);this._resolveAnimations(s,r,l).update(e,{options:!l&&this.getSharedOptions(o)||o})}removeHoverStyle(e,s,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,s,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const s=this._data,r=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const l=r.length,o=s.length,c=Math.min(o,l);c&&this.parse(0,c),o>l?this._insertElements(l,o-l,e):o<l&&this._removeElements(o,l-o)}_insertElements(e,s,r=!0){const l=this._cachedMeta,o=l.data,c=e+s;let u;const h=p=>{for(p.length+=s,u=p.length-1;u>=c;u--)p[u]=p[u-s]};for(h(o),u=e;u<c;++u)o[u]=new this.dataElementType;this._parsing&&h(l._parsed),this.parse(e,s),r&&this.updateElements(o,e,s,"reset")}updateElements(e,s,r,l){}_removeElements(e,s){const r=this._cachedMeta;if(this._parsing){const l=r._parsed.splice(e,s);r._stacked&&Lr(r,l)}r.data.splice(e,s)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[s,r,l]=e;this[s](r,l)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,s){s&&this._sync(["_removeElements",e,s]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}be(si,"defaults",{}),be(si,"datasetElementType",null),be(si,"dataElementType",null);function V1(t,e){if(!t._cache.$bar){const s=t.getMatchingVisibleMetas(e);let r=[];for(let l=0,o=s.length;l<o;l++)r=r.concat(s[l].controller.getAllParsedValues(t));t._cache.$bar=Xg(r.sort((l,o)=>l-o))}return t._cache.$bar}function q1(t){const e=t.iScale,s=V1(e,t.type);let r=e._length,l,o,c,u;const h=()=>{c===32767||c===-32768||(ea(u)&&(r=Math.min(r,Math.abs(c-u)||r)),u=c)};for(l=0,o=s.length;l<o;++l)c=e.getPixelForValue(s[l]),h();for(u=void 0,l=0,o=e.ticks.length;l<o;++l)c=e.getPixelForTick(l),h();return r}function Y1(t,e,s,r){const l=s.barThickness;let o,c;return Oe(l)?(o=e.min*s.categoryPercentage,c=s.barPercentage):(o=l*r,c=1),{chunk:o/r,ratio:c,start:e.pixels[t]-o/2}}function Q1(t,e,s,r){const l=e.pixels,o=l[t];let c=t>0?l[t-1]:null,u=t<l.length-1?l[t+1]:null;const h=s.categoryPercentage;c===null&&(c=o-(u===null?e.end-e.start:u-o)),u===null&&(u=o+o-c);const p=o-(o-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/r,ratio:s.barPercentage,start:p}}function K1(t,e,s,r){const l=s.parse(t[0],r),o=s.parse(t[1],r),c=Math.min(l,o),u=Math.max(l,o);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[s.axis]=p,e._custom={barStart:h,barEnd:p,start:l,end:o,min:c,max:u}}function mx(t,e,s,r){return rt(t)?K1(t,e,s,r):e[s.axis]=s.parse(t,r),e}function om(t,e,s,r){const l=t.iScale,o=t.vScale,c=l.getLabels(),u=l===o,h=[];let p,m,x,N;for(p=s,m=s+r;p<m;++p)N=e[p],x={},x[l.axis]=u||l.parse(c[p],p),h.push(mx(N,x,o,p));return h}function bd(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function X1(t,e,s){return t!==0?Rs(t):(e.isHorizontal()?1:-1)*(e.min>=s?1:-1)}function G1(t){let e,s,r,l,o;return t.horizontal?(e=t.base>t.x,s="left",r="right"):(e=t.base<t.y,s="bottom",r="top"),e?(l="end",o="start"):(l="start",o="end"),{start:s,end:r,reverse:e,top:l,bottom:o}}function J1(t,e,s,r){let l=e.borderSkipped;const o={};if(!l){t.borderSkipped=o;return}if(l===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:m}=G1(t);l==="middle"&&s&&(t.enableBorderRadius=!0,(s._top||0)===r?l=p:(s._bottom||0)===r?l=m:(o[cm(m,c,u,h)]=!0,l=p)),o[cm(l,c,u,h)]=!0,t.borderSkipped=o}function cm(t,e,s,r){return r?(t=Z1(t,e,s),t=dm(t,s,e)):t=dm(t,e,s),t}function Z1(t,e,s){return t===e?s:t===s?e:t}function dm(t,e,s){return t==="start"?e:t==="end"?s:t}function ew(t,{inflateAmount:e},s){t.inflateAmount=e==="auto"?s===1?.33:0:e}class Hl extends si{parsePrimitiveData(e,s,r,l){return om(e,s,r,l)}parseArrayData(e,s,r,l){return om(e,s,r,l)}parseObjectData(e,s,r,l){const{iScale:o,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=o.axis==="x"?u:h,m=c.axis==="x"?u:h,x=[];let N,w,b,j;for(N=r,w=r+l;N<w;++N)j=s[N],b={},b[o.axis]=o.parse(ii(j,p),N),x.push(mx(ii(j,m),b,c,N));return x}updateRangeFromParsed(e,s,r,l){super.updateRangeFromParsed(e,s,r,l);const o=r._custom;o&&s===this._cachedMeta.vScale&&(e.min=Math.min(e.min,o.min),e.max=Math.max(e.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const s=this._cachedMeta,{iScale:r,vScale:l}=s,o=this.getParsed(e),c=o._custom,u=bd(c)?"["+c.start+", "+c.end+"]":""+l.getLabelForValue(o[l.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,e)}updateElements(e,s,r,l){const o=l==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),m=this._getRuler(),{sharedOptions:x,includeOptions:N}=this._getSharedOptions(s,l);for(let w=s;w<s+r;w++){const b=this.getParsed(w),j=o||Oe(b[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,m),C=(b._stacks||{})[u.axis],R={horizontal:p,base:j.base,enableBorderRadius:!C||bd(b._custom)||c===C._top||c===C._bottom,x:p?j.head:y.center,y:p?y.center:j.head,height:p?y.size:Math.abs(j.size),width:p?Math.abs(j.size):y.size};N&&(R.options=x||this.resolveDataElementOptions(w,e[w].active?"active":l));const T=R.options||e[w].options;J1(R,T,C,c),ew(R,T,m.ratio),this.updateElement(e[w],w,R,l)}}_getStacks(e,s){const{iScale:r}=this._cachedMeta,l=r.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),o=r.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(s),h=u&&u[r.axis],p=m=>{const x=m._parsed.find(w=>w[r.axis]===h),N=x&&x[m.vScale.axis];if(Oe(N)||isNaN(N))return!0};for(const m of l)if(!(s!==void 0&&p(m))&&((o===!1||c.indexOf(m.stack)===-1||o===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===s).shift()}_getAxis(){const e={},s=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[Ce(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,s)]=!0;return Object.keys(e)}_getStackIndex(e,s,r){const l=this._getStacks(e,r),o=s!==void 0?l.indexOf(s):-1;return o===-1?l.length-1:o}_getRuler(){const e=this.options,s=this._cachedMeta,r=s.iScale,l=[];let o,c;for(o=0,c=s.data.length;o<c;++o)l.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const u=e.barThickness;return{min:u||q1(s),pixels:l,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:s,_stacked:r,index:l},options:{base:o,minBarLength:c}}=this,u=o||0,h=this.getParsed(e),p=h._custom,m=bd(p);let x=h[s.axis],N=0,w=r?this.applyStack(s,h,r):x,b,j;w!==x&&(N=w-x,w=x),m&&(x=p.barStart,w=p.barEnd-p.barStart,x!==0&&Rs(x)!==Rs(p.barEnd)&&(N=0),N+=x);const y=!Oe(o)&&!m?o:N;let C=s.getPixelForValue(y);if(this.chart.getDataVisibility(e)?b=s.getPixelForValue(N+w):b=C,j=b-C,Math.abs(j)<c){j=X1(j,s,u)*c,x===u&&(C-=j/2);const R=s.getPixelForDecimal(0),T=s.getPixelForDecimal(1),W=Math.min(R,T),_=Math.max(R,T);C=Math.max(Math.min(C,_),W),b=C+j,r&&!m&&(h._stacks[s.axis]._visualValues[l]=s.getValueForPixel(b)-s.getValueForPixel(C))}if(C===s.getPixelForValue(u)){const R=Rs(j)*s.getLineWidthForValue(u)/2;C+=R,j-=R}return{size:j,base:C,head:b,center:b+j/2}}_calculateBarIndexPixels(e,s){const r=s.scale,l=this.options,o=l.skipNull,c=Ce(l.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(s.grouped){const m=o?this._getStackCount(e):s.stackCount,x=l.barThickness==="flex"?Q1(e,s,l,m*p):Y1(e,s,l,m*p),N=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(Ce(N,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,o?e:void 0)+w;u=x.start+x.chunk*b+x.chunk/2,h=Math.min(c,x.chunk*x.ratio)}else u=r.getPixelForValue(this.getParsed(e)[r.axis],e),h=Math.min(c,s.min*s.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,s=e.vScale,r=e.data,l=r.length;let o=0;for(;o<l;++o)this.getParsed(o)[s.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}be(Hl,"id","bar"),be(Hl,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),be(Hl,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function tw(t,e,s){let r=1,l=1,o=0,c=0;if(e<Xe){const u=t,h=u+e,p=Math.cos(u),m=Math.sin(u),x=Math.cos(h),N=Math.sin(h),w=(T,W,_)=>sa(T,u,h,!0)?1:Math.max(W,W*s,_,_*s),b=(T,W,_)=>sa(T,u,h,!0)?-1:Math.min(W,W*s,_,_*s),j=w(0,p,x),y=w(ct,m,N),C=b(Be,p,x),R=b(Be+ct,m,N);r=(j-C)/2,l=(y-R)/2,o=-(j+C)/2,c=-(y+R)/2}return{ratioX:r,ratioY:l,offsetX:o,offsetY:c}}class $r extends si{constructor(e,s){super(e,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,s){const r=this.getDataset().data,l=this._cachedMeta;if(this._parsing===!1)l._parsed=r;else{let o=h=>+r[h];if(De(r[e])){const{key:h="value"}=this._parsing;o=p=>+ii(r[p],h)}let c,u;for(c=e,u=e+s;c<u;++c)l._parsed[c]=o(c)}}_getRotation(){return Vs(this.options.rotation-90)}_getCircumference(){return Vs(this.options.circumference)}_getRotationExtents(){let e=Xe,s=-Xe;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const l=this.chart.getDatasetMeta(r).controller,o=l._getRotation(),c=l._getCircumference();e=Math.min(e,o),s=Math.max(s,o+c)}return{rotation:e,circumference:s-e}}update(e){const s=this.chart,{chartArea:r}=s,l=this._cachedMeta,o=l.data,c=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,u=Math.max((Math.min(r.width,r.height)-c)/2,0),h=Math.min(cN(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:m,rotation:x}=this._getRotationExtents(),{ratioX:N,ratioY:w,offsetX:b,offsetY:j}=tw(x,m,h),y=(r.width-c)/N,C=(r.height-c)/w,R=Math.max(Math.min(y,C)/2,0),T=Vg(this.options.radius,R),W=Math.max(T*h,0),_=(T-W)/this._getVisibleDatasetWeightTotal();this.offsetX=b*T,this.offsetY=j*T,l.total=this.calculateTotal(),this.outerRadius=T-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*p,0),this.updateElements(o,0,o.length,e)}_circumference(e,s){const r=this.options,l=this._cachedMeta,o=this._getCircumference();return s&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||l._parsed[e]===null||l.data[e].hidden?0:this.calculateCircumference(l._parsed[e]*o/Xe)}updateElements(e,s,r,l){const o=l==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,m=(u.left+u.right)/2,x=(u.top+u.bottom)/2,N=o&&p.animateScale,w=N?0:this.innerRadius,b=N?0:this.outerRadius,{sharedOptions:j,includeOptions:y}=this._getSharedOptions(s,l);let C=this._getRotation(),R;for(R=0;R<s;++R)C+=this._circumference(R,o);for(R=s;R<s+r;++R){const T=this._circumference(R,o),W=e[R],_={x:m+this.offsetX,y:x+this.offsetY,startAngle:C,endAngle:C+T,circumference:T,outerRadius:b,innerRadius:w};y&&(_.options=j||this.resolveDataElementOptions(R,W.active?"active":l)),C+=T,this.updateElement(W,R,_,l)}}calculateTotal(){const e=this._cachedMeta,s=e.data;let r=0,l;for(l=0;l<s.length;l++){const o=e._parsed[l];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(l)&&!s[l].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(e){const s=this._cachedMeta.total;return s>0&&!isNaN(e)?Xe*(Math.abs(e)/s):0}getLabelAndValue(e){const s=this._cachedMeta,r=this.chart,l=r.data.labels||[],o=ou(s._parsed[e],r.options.locale);return{label:l[e]||"",value:o}}getMaxBorderWidth(e){let s=0;const r=this.chart;let l,o,c,u,h;if(!e){for(l=0,o=r.data.datasets.length;l<o;++l)if(r.isDatasetVisible(l)){c=r.getDatasetMeta(l),e=c.data,u=c.controller;break}}if(!e)return 0;for(l=0,o=e.length;l<o;++l)h=u.resolveDataElementOptions(l),h.borderAlign!=="inner"&&(s=Math.max(s,h.borderWidth||0,h.hoverBorderWidth||0));return s}getMaxOffset(e){let s=0;for(let r=0,l=e.length;r<l;++r){const o=this.resolveDataElementOptions(r);s=Math.max(s,o.offset||0,o.hoverOffset||0)}return s}_getRingWeightOffset(e){let s=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(s+=this._getRingWeight(r));return s}_getRingWeight(e){return Math.max(Ce(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}be($r,"id","doughnut"),be($r,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),be($r,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),be($r,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const s=e.data,{labels:{pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=e.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((h,p)=>{const x=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:x.backgroundColor,fontColor:o,hidden:!e.getDataVisibility(p),lineDash:x.borderDash,lineDashOffset:x.borderDashOffset,lineJoin:x.borderJoinStyle,lineWidth:x.borderWidth,strokeStyle:x.borderColor,textAlign:l,pointStyle:r,borderRadius:c&&(u||x.borderRadius),index:p}}):[]}},onClick(e,s,r){r.chart.toggleDataVisibility(s.index),r.chart.update()}}}});class Vl extends si{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const s=this._cachedMeta,{dataset:r,data:l=[],_dataset:o}=s,c=this.chart._animationsDisabled;let{start:u,count:h}=RN(s,l,c);this._drawStart=u,this._drawCount=h,DN(s)&&(u=0,h=l.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=l;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(r,void 0,{animated:!c,options:p},e),this.updateElements(l,u,h,e)}updateElements(e,s,r,l){const o=l==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:m,includeOptions:x}=this._getSharedOptions(s,l),N=c.axis,w=u.axis,{spanGaps:b,segment:j}=this.options,y=ta(b)?b:Number.POSITIVE_INFINITY,C=this.chart._animationsDisabled||o||l==="none",R=s+r,T=e.length;let W=s>0&&this.getParsed(s-1);for(let _=0;_<T;++_){const H=e[_],L=C?H:{};if(_<s||_>=R){L.skip=!0;continue}const P=this.getParsed(_),A=Oe(P[w]),K=L[N]=c.getPixelForValue(P[N],_),q=L[w]=o||A?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,P,h):P[w],_);L.skip=isNaN(K)||isNaN(q)||A,L.stop=_>0&&Math.abs(P[N]-W[N])>y,j&&(L.parsed=P,L.raw=p.data[_]),x&&(L.options=m||this.resolveDataElementOptions(_,H.active?"active":l)),C||this.updateElement(H,_,L,l),W=P}}getMaxOverflow(){const e=this._cachedMeta,s=e.dataset,r=s.options&&s.options.borderWidth||0,l=e.data||[];if(!l.length)return r;const o=l[0].size(this.resolveDataElementOptions(0)),c=l[l.length-1].size(this.resolveDataElementOptions(l.length-1));return Math.max(r,o,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}be(Vl,"id","line"),be(Vl,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),be(Vl,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Yn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class mu{constructor(e){be(this,"options");this.options=e||{}}static override(e){Object.assign(mu.prototype,e)}init(){}formats(){return Yn()}parse(){return Yn()}format(){return Yn()}add(){return Yn()}diff(){return Yn()}startOf(){return Yn()}endOf(){return Yn()}}var sw={_date:mu};function nw(t,e,s,r){const{controller:l,data:o,_sorted:c}=t,u=l._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&o.length){const p=u._reversePixels?kN:Zn;if(r){if(l._sharedOptions){const m=o[0],x=typeof m.getRange=="function"&&m.getRange(e);if(x){const N=p(o,e,s-x),w=p(o,e,s+x);return{lo:N.lo,hi:w.hi}}}}else{const m=p(o,e,s);if(h){const{vScale:x}=l._cachedMeta,{_parsed:N}=t,w=N.slice(0,m.lo+1).reverse().findIndex(j=>!Oe(j[x.axis]));m.lo-=Math.max(0,w);const b=N.slice(m.hi).findIndex(j=>!Oe(j[x.axis]));m.hi+=Math.max(0,b)}return m}}return{lo:0,hi:o.length-1}}function xo(t,e,s,r,l){const o=t.getSortedVisibleDatasetMetas(),c=s[e];for(let u=0,h=o.length;u<h;++u){const{index:p,data:m}=o[u],{lo:x,hi:N}=nw(o[u],e,c,l);for(let w=x;w<=N;++w){const b=m[w];b.skip||r(b,p,w)}}}function iw(t){const e=t.indexOf("x")!==-1,s=t.indexOf("y")!==-1;return function(r,l){const o=e?Math.abs(r.x-l.x):0,c=s?Math.abs(r.y-l.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(c,2))}}function jd(t,e,s,r,l){const o=[];return!l&&!t.isPointInArea(e)||xo(t,s,e,function(u,h,p){!l&&!na(u,t.chartArea,0)||u.inRange(e.x,e.y,r)&&o.push({element:u,datasetIndex:h,index:p})},!0),o}function rw(t,e,s,r){let l=[];function o(c,u,h){const{startAngle:p,endAngle:m}=c.getProps(["startAngle","endAngle"],r),{angle:x}=Qg(c,{x:e.x,y:e.y});sa(x,p,m)&&l.push({element:c,datasetIndex:u,index:h})}return xo(t,s,e,o),l}function aw(t,e,s,r,l,o){let c=[];const u=iw(s);let h=Number.POSITIVE_INFINITY;function p(m,x,N){const w=m.inRange(e.x,e.y,l);if(r&&!w)return;const b=m.getCenterPoint(l);if(!(!!o||t.isPointInArea(b))&&!w)return;const y=u(e,b);y<h?(c=[{element:m,datasetIndex:x,index:N}],h=y):y===h&&c.push({element:m,datasetIndex:x,index:N})}return xo(t,s,e,p),c}function Nd(t,e,s,r,l,o){return!o&&!t.isPointInArea(e)?[]:s==="r"&&!r?rw(t,e,s,l):aw(t,e,s,r,l,o)}function um(t,e,s,r,l){const o=[],c=s==="x"?"inXRange":"inYRange";let u=!1;return xo(t,s,e,(h,p,m)=>{h[c]&&h[c](e[s],l)&&(o.push({element:h,datasetIndex:p,index:m}),u=u||h.inRange(e.x,e.y,l))}),r&&!u?[]:o}var lw={modes:{index(t,e,s,r){const l=Xn(e,t),o=s.axis||"x",c=s.includeInvisible||!1,u=s.intersect?jd(t,l,o,r,c):Nd(t,l,o,!1,r,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const m=u[0].index,x=p.data[m];x&&!x.skip&&h.push({element:x,datasetIndex:p.index,index:m})}),h):[]},dataset(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;let u=s.intersect?jd(t,l,o,r,c):Nd(t,l,o,!1,r,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let m=0;m<p.length;++m)u.push({element:p[m],datasetIndex:h,index:m})}return u},point(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;return jd(t,l,o,r,c)},nearest(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;return Nd(t,l,o,s.intersect,r,c)},x(t,e,s,r){const l=Xn(e,t);return um(t,l,"x",s.intersect,r)},y(t,e,s,r){const l=Xn(e,t);return um(t,l,"y",s.intersect,r)}}};const gx=["left","top","right","bottom"];function Or(t,e){return t.filter(s=>s.pos===e)}function hm(t,e){return t.filter(s=>gx.indexOf(s.pos)===-1&&s.box.axis===e)}function zr(t,e){return t.sort((s,r)=>{const l=e?r:s,o=e?s:r;return l.weight===o.weight?l.index-o.index:l.weight-o.weight})}function ow(t){const e=[];let s,r,l,o,c,u;for(s=0,r=(t||[]).length;s<r;++s)l=t[s],{position:o,options:{stack:c,stackWeight:u=1}}=l,e.push({index:s,box:l,pos:o,horizontal:l.isHorizontal(),weight:l.weight,stack:c&&o+c,stackWeight:u});return e}function cw(t){const e={};for(const s of t){const{stack:r,pos:l,stackWeight:o}=s;if(!r||!gx.includes(l))continue;const c=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=o}return e}function dw(t,e){const s=cw(t),{vBoxMaxWidth:r,hBoxMaxHeight:l}=e;let o,c,u;for(o=0,c=t.length;o<c;++o){u=t[o];const{fullSize:h}=u.box,p=s[u.stack],m=p&&u.stackWeight/p.weight;u.horizontal?(u.width=m?m*r:h&&e.availableWidth,u.height=l):(u.width=r,u.height=m?m*l:h&&e.availableHeight)}return s}function uw(t){const e=ow(t),s=zr(e.filter(p=>p.box.fullSize),!0),r=zr(Or(e,"left"),!0),l=zr(Or(e,"right")),o=zr(Or(e,"top"),!0),c=zr(Or(e,"bottom")),u=hm(e,"x"),h=hm(e,"y");return{fullSize:s,leftAndTop:r.concat(o),rightAndBottom:l.concat(h).concat(c).concat(u),chartArea:Or(e,"chartArea"),vertical:r.concat(l).concat(h),horizontal:o.concat(c).concat(u)}}function fm(t,e,s,r){return Math.max(t[s],e[s])+Math.max(t[r],e[r])}function xx(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function hw(t,e,s,r){const{pos:l,box:o}=s,c=t.maxPadding;if(!De(l)){s.size&&(t[l]-=s.size);const x=r[s.stack]||{size:0,count:1};x.size=Math.max(x.size,s.horizontal?o.height:o.width),s.size=x.size/x.count,t[l]+=s.size}o.getPadding&&xx(c,o.getPadding());const u=Math.max(0,e.outerWidth-fm(c,t,"left","right")),h=Math.max(0,e.outerHeight-fm(c,t,"top","bottom")),p=u!==t.w,m=h!==t.h;return t.w=u,t.h=h,s.horizontal?{same:p,other:m}:{same:m,other:p}}function fw(t){const e=t.maxPadding;function s(r){const l=Math.max(e[r]-t[r],0);return t[r]+=l,l}t.y+=s("top"),t.x+=s("left"),s("right"),s("bottom")}function pw(t,e){const s=e.maxPadding;function r(l){const o={left:0,top:0,right:0,bottom:0};return l.forEach(c=>{o[c]=Math.max(e[c],s[c])}),o}return r(t?["left","right"]:["top","bottom"])}function Wr(t,e,s,r){const l=[];let o,c,u,h,p,m;for(o=0,c=t.length,p=0;o<c;++o){u=t[o],h=u.box,h.update(u.width||e.w,u.height||e.h,pw(u.horizontal,e));const{same:x,other:N}=hw(e,s,u,r);p|=x&&l.length,m=m||N,h.fullSize||l.push(u)}return p&&Wr(l,e,s,r)||m}function Al(t,e,s,r,l){t.top=s,t.left=e,t.right=e+r,t.bottom=s+l,t.width=r,t.height=l}function pm(t,e,s,r){const l=s.padding;let{x:o,y:c}=e;for(const u of t){const h=u.box,p=r[u.stack]||{placed:0,weight:1},m=u.stackWeight/p.weight||1;if(u.horizontal){const x=e.w*m,N=p.size||h.height;ea(p.start)&&(c=p.start),h.fullSize?Al(h,l.left,c,s.outerWidth-l.right-l.left,N):Al(h,e.left+p.placed,c,x,N),p.start=c,p.placed+=x,c=h.bottom}else{const x=e.h*m,N=p.size||h.width;ea(p.start)&&(o=p.start),h.fullSize?Al(h,o,l.top,N,s.outerHeight-l.bottom-l.top):Al(h,o,e.top+p.placed,N,x),p.start=o,p.placed+=x,o=h.right}}e.x=o,e.y=c}var ss={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(s){e.draw(s)}}]},t.boxes.push(e)},removeBox(t,e){const s=t.boxes?t.boxes.indexOf(e):-1;s!==-1&&t.boxes.splice(s,1)},configure(t,e,s){e.fullSize=s.fullSize,e.position=s.position,e.weight=s.weight},update(t,e,s,r){if(!t)return;const l=ns(t.options.layout.padding),o=Math.max(e-l.width,0),c=Math.max(s-l.height,0),u=uw(t.boxes),h=u.vertical,p=u.horizontal;Fe(t.boxes,j=>{typeof j.beforeLayout=="function"&&j.beforeLayout()});const m=h.reduce((j,y)=>y.box.options&&y.box.options.display===!1?j:j+1,0)||1,x=Object.freeze({outerWidth:e,outerHeight:s,padding:l,availableWidth:o,availableHeight:c,vBoxMaxWidth:o/2/m,hBoxMaxHeight:c/2}),N=Object.assign({},l);xx(N,ns(r));const w=Object.assign({maxPadding:N,w:o,h:c,x:l.left,y:l.top},l),b=dw(h.concat(p),x);Wr(u.fullSize,w,x,b),Wr(h,w,x,b),Wr(p,w,x,b)&&Wr(h,w,x,b),fw(w),pm(u.leftAndTop,w,x,b),w.x+=w.w,w.y+=w.h,pm(u.rightAndBottom,w,x,b),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Fe(u.chartArea,j=>{const y=j.box;Object.assign(y,t.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class vx{acquireContext(e,s){}releaseContext(e){return!1}addEventListener(e,s,r){}removeEventListener(e,s,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,s,r,l){return s=Math.max(0,s||e.width),r=r||e.height,{width:s,height:Math.max(0,l?Math.floor(s/l):r)}}isAttached(e){return!0}updateConfig(e){}}class mw extends vx{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ql="$chartjs",gw={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},mm=t=>t===null||t==="";function xw(t,e){const s=t.style,r=t.getAttribute("height"),l=t.getAttribute("width");if(t[ql]={initial:{height:r,width:l,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",mm(l)){const o=Jp(t,"width");o!==void 0&&(t.width=o)}if(mm(r))if(t.style.height==="")t.height=t.width/(e||2);else{const o=Jp(t,"height");o!==void 0&&(t.height=o)}return t}const yx=y1?{passive:!0}:!1;function vw(t,e,s){t&&t.addEventListener(e,s,yx)}function yw(t,e,s){t&&t.canvas&&t.canvas.removeEventListener(e,s,yx)}function bw(t,e){const s=gw[t.type]||t.type,{x:r,y:l}=Xn(t,e);return{type:s,chart:e,native:t,x:r!==void 0?r:null,y:l!==void 0?l:null}}function so(t,e){for(const s of t)if(s===e||s.contains(e))return!0}function jw(t,e,s){const r=t.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||so(u.addedNodes,r),c=c&&!so(u.removedNodes,r);c&&s()});return l.observe(document,{childList:!0,subtree:!0}),l}function Nw(t,e,s){const r=t.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||so(u.removedNodes,r),c=c&&!so(u.addedNodes,r);c&&s()});return l.observe(document,{childList:!0,subtree:!0}),l}const ra=new Map;let gm=0;function bx(){const t=window.devicePixelRatio;t!==gm&&(gm=t,ra.forEach((e,s)=>{s.currentDevicePixelRatio!==t&&e()}))}function ww(t,e){ra.size||window.addEventListener("resize",bx),ra.set(t,e)}function kw(t){ra.delete(t),ra.size||window.removeEventListener("resize",bx)}function _w(t,e,s){const r=t.canvas,l=r&&pu(r);if(!l)return;const o=Jg((u,h)=>{const p=l.clientWidth;s(u,h),p<l.clientWidth&&s()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,m=h.contentRect.height;p===0&&m===0||o(p,m)});return c.observe(l),ww(t,o),c}function wd(t,e,s){s&&s.disconnect(),e==="resize"&&kw(t)}function Sw(t,e,s){const r=t.canvas,l=Jg(o=>{t.ctx!==null&&s(bw(o,t))},t);return vw(r,e,l),l}class Cw extends vx{acquireContext(e,s){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(xw(e,s),r):null}releaseContext(e){const s=e.canvas;if(!s[ql])return!1;const r=s[ql].initial;["height","width"].forEach(o=>{const c=r[o];Oe(c)?s.removeAttribute(o):s.setAttribute(o,c)});const l=r.style||{};return Object.keys(l).forEach(o=>{s.style[o]=l[o]}),s.width=s.width,delete s[ql],!0}addEventListener(e,s,r){this.removeEventListener(e,s);const l=e.$proxies||(e.$proxies={}),c={attach:jw,detach:Nw,resize:_w}[s]||Sw;l[s]=c(e,s,r)}removeEventListener(e,s){const r=e.$proxies||(e.$proxies={}),l=r[s];if(!l)return;({attach:wd,detach:wd,resize:wd}[s]||yw)(e,s,l),r[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,s,r,l){return v1(e,s,r,l)}isAttached(e){const s=e&&pu(e);return!!(s&&s.isConnected)}}function Ew(t){return!fu()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?mw:Cw}class gs{constructor(){be(this,"x");be(this,"y");be(this,"active",!1);be(this,"options");be(this,"$animations")}tooltipPosition(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}hasValue(){return ta(this.x)&&ta(this.y)}getProps(e,s){const r=this.$animations;if(!s||!r)return this;const l={};return e.forEach(o=>{l[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),l}}be(gs,"defaults",{}),be(gs,"defaultRoutes");function Rw(t,e){const s=t.options.ticks,r=Dw(t),l=Math.min(s.maxTicksLimit||r,r),o=s.major.enabled?Aw(e):[],c=o.length,u=o[0],h=o[c-1],p=[];if(c>l)return Tw(e,p,o,c/l),p;const m=Pw(o,e,l);if(c>0){let x,N;const w=c>1?Math.round((h-u)/(c-1)):null;for(Tl(e,p,m,Oe(w)?0:u-w,u),x=0,N=c-1;x<N;x++)Tl(e,p,m,o[x],o[x+1]);return Tl(e,p,m,h,Oe(w)?e.length:h+w),p}return Tl(e,p,m),p}function Dw(t){const e=t.options.offset,s=t._tickSize(),r=t._length/s+(e?0:1),l=t._maxLength/s;return Math.floor(Math.min(r,l))}function Pw(t,e,s){const r=Mw(t),l=e.length/s;if(!r)return Math.max(l,1);const o=xN(r);for(let c=0,u=o.length-1;c<u;c++){const h=o[c];if(h>l)return h}return Math.max(l,1)}function Aw(t){const e=[];let s,r;for(s=0,r=t.length;s<r;s++)t[s].major&&e.push(s);return e}function Tw(t,e,s,r){let l=0,o=s[0],c;for(r=Math.ceil(r),c=0;c<t.length;c++)c===o&&(e.push(t[c]),l++,o=s[l*r])}function Tl(t,e,s,r,l){const o=Ce(r,0),c=Math.min(Ce(l,t.length),t.length);let u=0,h,p,m;for(s=Math.ceil(s),l&&(h=l-r,s=h/Math.floor(h/s)),m=o;m<0;)u++,m=Math.round(o+u*s);for(p=Math.max(o,0);p<c;p++)p===m&&(e.push(t[p]),u++,m=Math.round(o+u*s))}function Mw(t){const e=t.length;let s,r;if(e<2)return!1;for(r=t[0],s=1;s<e;++s)if(t[s]-t[s-1]!==r)return!1;return r}const Lw=t=>t==="left"?"right":t==="right"?"left":t,xm=(t,e,s)=>e==="top"||e==="left"?t[e]+s:t[e]-s,vm=(t,e)=>Math.min(e||t,t);function ym(t,e){const s=[],r=t.length/e,l=t.length;let o=0;for(;o<l;o+=r)s.push(t[Math.floor(o)]);return s}function Ow(t,e,s){const r=t.ticks.length,l=Math.min(e,r-1),o=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(l),p;if(!(s&&(r===1?p=Math.max(h-o,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(l-1))/2,h+=l<e?p:-p,h<o-u||h>c+u)))return h}function zw(t,e){Fe(t,s=>{const r=s.gc,l=r.length/2;let o;if(l>e){for(o=0;o<l;++o)delete s.data[r[o]];r.splice(0,l)}})}function Ir(t){return t.drawTicks?t.tickLength:0}function bm(t,e){if(!t.display)return 0;const s=wt(t.font,e),r=ns(t.padding);return(rt(t.text)?t.text.length:1)*s.lineHeight+r.height}function Iw(t,e){return li(t,{scale:e,type:"scale"})}function Fw(t,e,s){return li(t,{tick:s,index:e,type:"tick"})}function Bw(t,e,s){let r=au(t);return(s&&e!=="right"||!s&&e==="right")&&(r=Lw(r)),r}function $w(t,e,s,r){const{top:l,left:o,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:m}=h;let x=0,N,w,b;const j=c-l,y=u-o;if(t.isHorizontal()){if(w=bt(r,o,u),De(s)){const C=Object.keys(s)[0],R=s[C];b=m[C].getPixelForValue(R)+j-e}else s==="center"?b=(p.bottom+p.top)/2+j-e:b=xm(t,s,e);N=u-o}else{if(De(s)){const C=Object.keys(s)[0],R=s[C];w=m[C].getPixelForValue(R)-y+e}else s==="center"?w=(p.left+p.right)/2-y+e:w=xm(t,s,e);b=bt(r,c,l),x=s==="left"?-ct:ct}return{titleX:w,titleY:b,maxWidth:N,rotation:x}}class qi extends gs{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,s){return e}getUserBounds(){let{_userMin:e,_userMax:s,_suggestedMin:r,_suggestedMax:l}=this;return e=Ss(e,Number.POSITIVE_INFINITY),s=Ss(s,Number.NEGATIVE_INFINITY),r=Ss(r,Number.POSITIVE_INFINITY),l=Ss(l,Number.NEGATIVE_INFINITY),{min:Ss(e,r),max:Ss(s,l),minDefined:kt(e),maxDefined:kt(s)}}getMinMax(e){let{min:s,max:r,minDefined:l,maxDefined:o}=this.getUserBounds(),c;if(l&&o)return{min:s,max:r};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),l||(s=Math.min(s,c.min)),o||(r=Math.max(r,c.max));return s=o&&s>r?r:s,r=l&&s>r?s:r,{min:Ss(s,Ss(r,s)),max:Ss(r,Ss(s,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){He(this.options.beforeUpdate,[this])}update(e,s,r){const{beginAtZero:l,grace:o,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=s,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=XN(this,o,l),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?ym(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=Rw(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,s,r;this.isHorizontal()?(s=this.left,r=this.right):(s=this.top,r=this.bottom,e=!e),this._startPixel=s,this._endPixel=r,this._reversePixels=e,this._length=r-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){He(this.options.afterUpdate,[this])}beforeSetDimensions(){He(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){He(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),He(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){He(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const s=this.options.ticks;let r,l,o;for(r=0,l=e.length;r<l;r++)o=e[r],o.label=He(s.callback,[o.value,r,e],this)}afterTickToLabelConversion(){He(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){He(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,s=e.ticks,r=vm(this.ticks.length,e.ticks.maxTicksLimit),l=s.minRotation||0,o=s.maxRotation;let c=l,u,h,p;if(!this._isVisible()||!s.display||l>=o||r<=1||!this.isHorizontal()){this.labelRotation=l;return}const m=this._getLabelSizes(),x=m.widest.width,N=m.highest.height,w=Nt(this.chart.width-x,0,this.maxWidth);u=e.offset?this.maxWidth/r:w/(r-1),x+6>u&&(u=w/(r-(e.offset?.5:1)),h=this.maxHeight-Ir(e.grid)-s.padding-bm(e.title,this.chart.options.font),p=Math.sqrt(x*x+N*N),c=jN(Math.min(Math.asin(Nt((m.highest.height+6)/u,-1,1)),Math.asin(Nt(h/p,-1,1))-Math.asin(Nt(N/p,-1,1)))),c=Math.max(l,Math.min(o,c))),this.labelRotation=c}afterCalculateLabelRotation(){He(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){He(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:s,options:{ticks:r,title:l,grid:o}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=bm(l,s.options.font);if(u?(e.width=this.maxWidth,e.height=Ir(o)+h):(e.height=this.maxHeight,e.width=Ir(o)+h),r.display&&this.ticks.length){const{first:p,last:m,widest:x,highest:N}=this._getLabelSizes(),w=r.padding*2,b=Vs(this.labelRotation),j=Math.cos(b),y=Math.sin(b);if(u){const C=r.mirror?0:y*x.width+j*N.height;e.height=Math.min(this.maxHeight,e.height+C+w)}else{const C=r.mirror?0:j*x.width+y*N.height;e.width=Math.min(this.maxWidth,e.width+C+w)}this._calculatePadding(p,m,y,j)}}this._handleMargins(),u?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,s,r,l){const{ticks:{align:o,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,x=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,w=0;h?p?(N=l*e.width,w=r*s.height):(N=r*e.height,w=l*s.width):o==="start"?w=s.width:o==="end"?N=e.width:o!=="inner"&&(N=e.width/2,w=s.width/2),this.paddingLeft=Math.max((N-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((w-x+c)*this.width/(this.width-x),0)}else{let m=s.height/2,x=e.height/2;o==="start"?(m=0,x=e.height):o==="end"&&(m=s.height,x=0),this.paddingTop=m+c,this.paddingBottom=x+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){He(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:s}=this.options;return s==="top"||s==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let s,r;for(s=0,r=e.length;s<r;s++)Oe(e[s].label)&&(e.splice(s,1),r--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const s=this.options.ticks.sampleSize;let r=this.ticks;s<r.length&&(r=ym(r,s)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,s,r){const{ctx:l,_longestTextCache:o}=this,c=[],u=[],h=Math.floor(s/vm(s,r));let p=0,m=0,x,N,w,b,j,y,C,R,T,W,_;for(x=0;x<s;x+=h){if(b=e[x].label,j=this._resolveTickFontOptions(x),l.font=y=j.string,C=o[y]=o[y]||{data:{},gc:[]},R=j.lineHeight,T=W=0,!Oe(b)&&!rt(b))T=Yp(l,C.data,C.gc,T,b),W=R;else if(rt(b))for(N=0,w=b.length;N<w;++N)_=b[N],!Oe(_)&&!rt(_)&&(T=Yp(l,C.data,C.gc,T,_),W+=R);c.push(T),u.push(W),p=Math.max(T,p),m=Math.max(W,m)}zw(o,s);const H=c.indexOf(p),L=u.indexOf(m),P=A=>({width:c[A]||0,height:u[A]||0});return{first:P(0),last:P(s-1),widest:P(H),highest:P(L),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,s){return NaN}getValueForPixel(e){}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const s=this._startPixel+e*this._length;return wN(this._alignToPixels?qn(this.chart,s,0):s)}getDecimalForPixel(e){const s=(e-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:s}=this;return e<0&&s<0?s:e>0&&s>0?e:0}getContext(e){const s=this.ticks||[];if(e>=0&&e<s.length){const r=s[e];return r.$context||(r.$context=Fw(this.getContext(),e,r))}return this.$context||(this.$context=Iw(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,s=Vs(this.labelRotation),r=Math.abs(Math.cos(s)),l=Math.abs(Math.sin(s)),o=this._getLabelSizes(),c=e.autoSkipPadding||0,u=o?o.widest.width+c:0,h=o?o.highest.height+c:0;return this.isHorizontal()?h*r>u*l?u/r:h/l:h*l<u*r?h/r:u/l}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const s=this.axis,r=this.chart,l=this.options,{grid:o,position:c,border:u}=l,h=o.offset,p=this.isHorizontal(),x=this.ticks.length+(h?1:0),N=Ir(o),w=[],b=u.setContext(this.getContext()),j=b.display?b.width:0,y=j/2,C=function(k){return qn(r,k,j)};let R,T,W,_,H,L,P,A,K,q,I,$;if(c==="top")R=C(this.bottom),L=this.bottom-N,A=R-y,q=C(e.top)+y,$=e.bottom;else if(c==="bottom")R=C(this.top),q=e.top,$=C(e.bottom)-y,L=R+y,A=this.top+N;else if(c==="left")R=C(this.right),H=this.right-N,P=R-y,K=C(e.left)+y,I=e.right;else if(c==="right")R=C(this.left),K=e.left,I=C(e.right)-y,H=R+y,P=this.left+N;else if(s==="x"){if(c==="center")R=C((e.top+e.bottom)/2+.5);else if(De(c)){const k=Object.keys(c)[0],z=c[k];R=C(this.chart.scales[k].getPixelForValue(z))}q=e.top,$=e.bottom,L=R+y,A=L+N}else if(s==="y"){if(c==="center")R=C((e.left+e.right)/2);else if(De(c)){const k=Object.keys(c)[0],z=c[k];R=C(this.chart.scales[k].getPixelForValue(z))}H=R-y,P=H-N,K=e.left,I=e.right}const U=Ce(l.ticks.maxTicksLimit,x),X=Math.max(1,Math.ceil(x/U));for(T=0;T<x;T+=X){const k=this.getContext(T),z=o.setContext(k),B=u.setContext(k),te=z.lineWidth,se=z.color,M=B.dash||[],Z=B.dashOffset,ue=z.tickWidth,pe=z.tickColor,Ne=z.tickBorderDash||[],ee=z.tickBorderDashOffset;W=Ow(this,T,h),W!==void 0&&(_=qn(r,W,te),p?H=P=K=I=_:L=A=q=$=_,w.push({tx1:H,ty1:L,tx2:P,ty2:A,x1:K,y1:q,x2:I,y2:$,width:te,color:se,borderDash:M,borderDashOffset:Z,tickWidth:ue,tickColor:pe,tickBorderDash:Ne,tickBorderDashOffset:ee}))}return this._ticksLength=x,this._borderValue=R,w}_computeLabelItems(e){const s=this.axis,r=this.options,{position:l,ticks:o}=r,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:m,mirror:x}=o,N=Ir(r.grid),w=N+m,b=x?-m:w,j=-Vs(this.labelRotation),y=[];let C,R,T,W,_,H,L,P,A,K,q,I,$="middle";if(l==="top")H=this.bottom-b,L=this._getXAxisLabelAlignment();else if(l==="bottom")H=this.top+b,L=this._getXAxisLabelAlignment();else if(l==="left"){const X=this._getYAxisLabelAlignment(N);L=X.textAlign,_=X.x}else if(l==="right"){const X=this._getYAxisLabelAlignment(N);L=X.textAlign,_=X.x}else if(s==="x"){if(l==="center")H=(e.top+e.bottom)/2+w;else if(De(l)){const X=Object.keys(l)[0],k=l[X];H=this.chart.scales[X].getPixelForValue(k)+w}L=this._getXAxisLabelAlignment()}else if(s==="y"){if(l==="center")_=(e.left+e.right)/2-w;else if(De(l)){const X=Object.keys(l)[0],k=l[X];_=this.chart.scales[X].getPixelForValue(k)}L=this._getYAxisLabelAlignment(N).textAlign}s==="y"&&(h==="start"?$="top":h==="end"&&($="bottom"));const U=this._getLabelSizes();for(C=0,R=u.length;C<R;++C){T=u[C],W=T.label;const X=o.setContext(this.getContext(C));P=this.getPixelForTick(C)+o.labelOffset,A=this._resolveTickFontOptions(C),K=A.lineHeight,q=rt(W)?W.length:1;const k=q/2,z=X.color,B=X.textStrokeColor,te=X.textStrokeWidth;let se=L;c?(_=P,L==="inner"&&(C===R-1?se=this.options.reverse?"left":"right":C===0?se=this.options.reverse?"right":"left":se="center"),l==="top"?p==="near"||j!==0?I=-q*K+K/2:p==="center"?I=-U.highest.height/2-k*K+K:I=-U.highest.height+K/2:p==="near"||j!==0?I=K/2:p==="center"?I=U.highest.height/2-k*K:I=U.highest.height-q*K,x&&(I*=-1),j!==0&&!X.showLabelBackdrop&&(_+=K/2*Math.sin(j))):(H=P,I=(1-q)*K/2);let M;if(X.showLabelBackdrop){const Z=ns(X.backdropPadding),ue=U.heights[C],pe=U.widths[C];let Ne=I-Z.top,ee=0-Z.left;switch($){case"middle":Ne-=ue/2;break;case"bottom":Ne-=ue;break}switch(L){case"center":ee-=pe/2;break;case"right":ee-=pe;break;case"inner":C===R-1?ee-=pe:C>0&&(ee-=pe/2);break}M={left:ee,top:Ne,width:pe+Z.width,height:ue+Z.height,color:X.backdropColor}}y.push({label:W,font:A,textOffset:I,options:{rotation:j,color:z,strokeColor:B,strokeWidth:te,textAlign:se,textBaseline:$,translation:[_,H],backdrop:M}})}return y}_getXAxisLabelAlignment(){const{position:e,ticks:s}=this.options;if(-Vs(this.labelRotation))return e==="top"?"left":"right";let l="center";return s.align==="start"?l="left":s.align==="end"?l="right":s.align==="inner"&&(l="inner"),l}_getYAxisLabelAlignment(e){const{position:s,ticks:{crossAlign:r,mirror:l,padding:o}}=this.options,c=this._getLabelSizes(),u=e+o,h=c.widest.width;let p,m;return s==="left"?l?(m=this.right+o,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m+=h)):(m=this.right-u,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m=this.left)):s==="right"?l?(m=this.left+o,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m-=h)):(m=this.left+u,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m=this.right)):p="right",{textAlign:p,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:s},left:r,top:l,width:o,height:c}=this;s&&(e.save(),e.fillStyle=s,e.fillRect(r,l,o,c),e.restore())}getLineWidthForValue(e){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const l=this.ticks.findIndex(o=>o.value===e);return l>=0?s.setContext(this.getContext(l)).lineWidth:0}drawGrid(e){const s=this.options.grid,r=this.ctx,l=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let o,c;const u=(h,p,m)=>{!m.width||!m.color||(r.save(),r.lineWidth=m.width,r.strokeStyle=m.color,r.setLineDash(m.borderDash||[]),r.lineDashOffset=m.borderDashOffset,r.beginPath(),r.moveTo(h.x,h.y),r.lineTo(p.x,p.y),r.stroke(),r.restore())};if(s.display)for(o=0,c=l.length;o<c;++o){const h=l[o];s.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),s.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:s,options:{border:r,grid:l}}=this,o=r.setContext(this.getContext()),c=r.display?o.width:0;if(!c)return;const u=l.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,m,x,N;this.isHorizontal()?(p=qn(e,this.left,c)-c/2,m=qn(e,this.right,u)+u/2,x=N=h):(x=qn(e,this.top,c)-c/2,N=qn(e,this.bottom,u)+u/2,p=m=h),s.save(),s.lineWidth=o.width,s.strokeStyle=o.color,s.beginPath(),s.moveTo(p,x),s.lineTo(m,N),s.stroke(),s.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,l=this._computeLabelArea();l&&po(r,l);const o=this.getLabelItems(e);for(const c of o){const u=c.options,h=c.font,p=c.label,m=c.textOffset;ia(r,p,0,m,h,u)}l&&mo(r)}drawTitle(){const{ctx:e,options:{position:s,title:r,reverse:l}}=this;if(!r.display)return;const o=wt(r.font),c=ns(r.padding),u=r.align;let h=o.lineHeight/2;s==="bottom"||s==="center"||De(s)?(h+=c.bottom,rt(r.text)&&(h+=o.lineHeight*(r.text.length-1))):h+=c.top;const{titleX:p,titleY:m,maxWidth:x,rotation:N}=$w(this,h,s,u);ia(e,r.text,0,0,o,{color:r.color,maxWidth:x,rotation:N,textAlign:Bw(u,s,l),textBaseline:"middle",translation:[p,m]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,s=e.ticks&&e.ticks.z||0,r=Ce(e.grid&&e.grid.z,-1),l=Ce(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==qi.prototype.draw?[{z:s,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:l,draw:()=>{this.drawBorder()}},{z:s,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(e){const s=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",l=[];let o,c;for(o=0,c=s.length;o<c;++o){const u=s[o];u[r]===this.id&&(!e||u.type===e)&&l.push(u)}return l}_resolveTickFontOptions(e){const s=this.options.ticks.setContext(this.getContext(e));return wt(s.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Ml{constructor(e,s,r){this.type=e,this.scope=s,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const s=Object.getPrototypeOf(e);let r;Hw(s)&&(r=this.register(s));const l=this.items,o=e.id,c=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+e);return o in l||(l[o]=e,Ww(e,c,r),this.override&&et.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const s=this.items,r=e.id,l=this.scope;r in s&&delete s[r],l&&r in et[l]&&(delete et[l][r],this.override&&delete ri[r])}}function Ww(t,e,s){const r=Zr(Object.create(null),[s?et.get(s):{},et.get(e),t.defaults]);et.set(e,r),t.defaultRoutes&&Uw(e,t.defaultRoutes),t.descriptors&&et.describe(e,t.descriptors)}function Uw(t,e){Object.keys(e).forEach(s=>{const r=s.split("."),l=r.pop(),o=[t].concat(r).join("."),c=e[s].split("."),u=c.pop(),h=c.join(".");et.route(o,l,h,u)})}function Hw(t){return"id"in t&&"defaults"in t}class Vw{constructor(){this.controllers=new Ml(si,"datasets",!0),this.elements=new Ml(gs,"elements"),this.plugins=new Ml(Object,"plugins"),this.scales=new Ml(qi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,s,r){[...s].forEach(l=>{const o=r||this._getRegistryForType(l);r||o.isForType(l)||o===this.plugins&&l.id?this._exec(e,o,l):Fe(l,c=>{const u=r||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,s,r){const l=iu(e);He(r["before"+l],[],r),s[e](r),He(r["after"+l],[],r)}_getRegistryForType(e){for(let s=0;s<this._typedRegistries.length;s++){const r=this._typedRegistries[s];if(r.isForType(e))return r}return this.plugins}_get(e,s,r){const l=s.get(e);if(l===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return l}}var Es=new Vw;class qw{constructor(){this._init=void 0}notify(e,s,r,l){if(s==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const o=l?this._descriptors(e).filter(l):this._descriptors(e),c=this._notify(o,e,s,r);return s==="afterDestroy"&&(this._notify(o,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,s,r,l){l=l||{};for(const o of e){const c=o.plugin,u=c[r],h=[s,l,o.options];if(He(u,h,c)===!1&&l.cancelable)return!1}return!0}invalidate(){Oe(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),s}_createDescriptors(e,s){const r=e&&e.config,l=Ce(r.options&&r.options.plugins,{}),o=Yw(r);return l===!1&&!s?[]:Kw(e,o,l,s)}_notifyStateChanges(e){const s=this._oldCache||[],r=this._cache,l=(o,c)=>o.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(l(s,r),e,"stop"),this._notify(l(r,s),e,"start")}}function Yw(t){const e={},s=[],r=Object.keys(Es.plugins.items);for(let o=0;o<r.length;o++)s.push(Es.getPlugin(r[o]));const l=t.plugins||[];for(let o=0;o<l.length;o++){const c=l[o];s.indexOf(c)===-1&&(s.push(c),e[c.id]=!0)}return{plugins:s,localIds:e}}function Qw(t,e){return!e&&t===!1?null:t===!0?{}:t}function Kw(t,{plugins:e,localIds:s},r,l){const o=[],c=t.getContext();for(const u of e){const h=u.id,p=Qw(r[h],l);p!==null&&o.push({plugin:u,options:Xw(t.config,{plugin:u,local:s[h]},p,c)})}return o}function Xw(t,{plugin:e,local:s},r,l){const o=t.pluginScopeKeys(e),c=t.getOptionScopes(r,o);return s&&e.defaults&&c.push(e.defaults),t.createResolver(c,l,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Bd(t,e){const s=et.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||s.indexAxis||"x"}function Gw(t,e){let s=t;return t==="_index_"?s=e:t==="_value_"&&(s=e==="x"?"y":"x"),s}function Jw(t,e){return t===e?"_index_":"_value_"}function jm(t){if(t==="x"||t==="y"||t==="r")return t}function Zw(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function $d(t,...e){if(jm(t))return t;for(const s of e){const r=s.axis||Zw(s.position)||t.length>1&&jm(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function Nm(t,e,s){if(s[e+"AxisID"]===t)return{axis:e}}function ek(t,e){if(e.data&&e.data.datasets){const s=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(s.length)return Nm(t,"x",s[0])||Nm(t,"y",s[0])}return{}}function tk(t,e){const s=ri[t.type]||{scales:{}},r=e.scales||{},l=Bd(t.type,e),o=Object.create(null);return Object.keys(r).forEach(c=>{const u=r[c];if(!De(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=$d(c,u,ek(c,t),et.scales[u.type]),p=Jw(h,l),m=s.scales||{};o[c]=Vr(Object.create(null),[{axis:h},u,m[h],m[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||Bd(u,e),m=(ri[u]||{}).scales||{};Object.keys(m).forEach(x=>{const N=Gw(x,h),w=c[N+"AxisID"]||N;o[w]=o[w]||Object.create(null),Vr(o[w],[{axis:N},r[w],m[x]])})}),Object.keys(o).forEach(c=>{const u=o[c];Vr(u,[et.scales[u.type],et.scale])}),o}function jx(t){const e=t.options||(t.options={});e.plugins=Ce(e.plugins,{}),e.scales=tk(t,e)}function Nx(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function sk(t){return t=t||{},t.data=Nx(t.data),jx(t),t}const wm=new Map,wx=new Set;function Ll(t,e){let s=wm.get(t);return s||(s=e(),wm.set(t,s),wx.add(s)),s}const Fr=(t,e,s)=>{const r=ii(e,s);r!==void 0&&t.add(r)};class nk{constructor(e){this._config=sk(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=Nx(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),jx(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Ll(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,s){return Ll(`${e}.transition.${s}`,()=>[[`datasets.${e}.transitions.${s}`,`transitions.${s}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,s){return Ll(`${e}-${s}`,()=>[[`datasets.${e}.elements.${s}`,`datasets.${e}`,`elements.${s}`,""]])}pluginScopeKeys(e){const s=e.id,r=this.type;return Ll(`${r}-plugin-${s}`,()=>[[`plugins.${s}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,s){const r=this._scopeCache;let l=r.get(e);return(!l||s)&&(l=new Map,r.set(e,l)),l}getOptionScopes(e,s,r){const{options:l,type:o}=this,c=this._cachedScopes(e,r),u=c.get(s);if(u)return u;const h=new Set;s.forEach(m=>{e&&(h.add(e),m.forEach(x=>Fr(h,e,x))),m.forEach(x=>Fr(h,l,x)),m.forEach(x=>Fr(h,ri[o]||{},x)),m.forEach(x=>Fr(h,et,x)),m.forEach(x=>Fr(h,Id,x))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),wx.has(s)&&c.set(s,p),p}chartOptionScopes(){const{options:e,type:s}=this;return[e,ri[s]||{},et.datasets[s]||{},{type:s},et,Id]}resolveNamedOptions(e,s,r,l=[""]){const o={$shared:!0},{resolver:c,subPrefixes:u}=km(this._resolverCache,e,l);let h=c;if(rk(c,s)){o.$shared=!1,r=wn(r)?r():r;const p=this.createResolver(e,r,u);h=Wi(c,r,p)}for(const p of s)o[p]=h[p];return o}createResolver(e,s,r=[""],l){const{resolver:o}=km(this._resolverCache,e,r);return De(s)?Wi(o,s,void 0,l):o}}function km(t,e,s){let r=t.get(e);r||(r=new Map,t.set(e,r));const l=s.join();let o=r.get(l);return o||(o={resolver:du(e,s),subPrefixes:s.filter(u=>!u.toLowerCase().includes("hover"))},r.set(l,o)),o}const ik=t=>De(t)&&Object.getOwnPropertyNames(t).some(e=>wn(t[e]));function rk(t,e){const{isScriptable:s,isIndexable:r}=sx(t);for(const l of e){const o=s(l),c=r(l),u=(c||o)&&t[l];if(o&&(wn(u)||ik(u))||c&&rt(u))return!0}return!1}var ak="4.5.1";const lk=["top","bottom","left","right","chartArea"];function _m(t,e){return t==="top"||t==="bottom"||lk.indexOf(t)===-1&&e==="x"}function Sm(t,e){return function(s,r){return s[t]===r[t]?s[e]-r[e]:s[t]-r[t]}}function Cm(t){const e=t.chart,s=e.options.animation;e.notifyPlugins("afterRender"),He(s&&s.onComplete,[t],e)}function ok(t){const e=t.chart,s=e.options.animation;He(s&&s.onProgress,[t],e)}function kx(t){return fu()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Yl={},Em=t=>{const e=kx(t);return Object.values(Yl).filter(s=>s.canvas===e).pop()};function ck(t,e,s){const r=Object.keys(t);for(const l of r){const o=+l;if(o>=e){const c=t[l];delete t[l],(s>0||o>e)&&(t[o+s]=c)}}}function dk(t,e,s,r){return!s||t.type==="mouseout"?null:r?e:t}var gn;let pa=(gn=class{static register(...e){Es.add(...e),Rm()}static unregister(...e){Es.remove(...e),Rm()}constructor(e,s){const r=this.config=new nk(s),l=kx(e),o=Em(l);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const c=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||Ew(l)),this.platform.updateConfig(r);const u=this.platform.acquireContext(l,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,m=h&&h.width;if(this.id=oN(),this.ctx=u,this.canvas=h,this.width=m,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new qw,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=CN(x=>this.update(x),c.resizeDelay||0),this._dataChanges=[],Yl[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}Ws.listen(this,"complete",Cm),Ws.listen(this,"progress",ok),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:s},width:r,height:l,_aspectRatio:o}=this;return Oe(e)?s&&o?o:l?r/l:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Es}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Gp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Qp(this.canvas,this.ctx),this}stop(){return Ws.stop(this),this}resize(e,s){Ws.running(this)?this._resizeBeforeDraw={width:e,height:s}:this._resize(e,s)}_resize(e,s){const r=this.options,l=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(l,e,s,o),u=r.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Gp(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),He(r.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};Fe(s,(r,l)=>{r.id=l})}buildOrUpdateScales(){const e=this.options,s=e.scales,r=this.scales,l=Object.keys(r).reduce((c,u)=>(c[u]=!1,c),{});let o=[];s&&(o=o.concat(Object.keys(s).map(c=>{const u=s[c],h=$d(c,u),p=h==="r",m=h==="x";return{options:u,dposition:p?"chartArea":m?"bottom":"left",dtype:p?"radialLinear":m?"category":"linear"}}))),Fe(o,c=>{const u=c.options,h=u.id,p=$d(h,u),m=Ce(u.type,c.dtype);(u.position===void 0||_m(u.position,p)!==_m(c.dposition))&&(u.position=c.dposition),l[h]=!0;let x=null;if(h in r&&r[h].type===m)x=r[h];else{const N=Es.getScale(m);x=new N({id:h,type:m,ctx:this.ctx,chart:this}),r[x.id]=x}x.init(u,e)}),Fe(l,(c,u)=>{c||delete r[u]}),Fe(r,c=>{ss.configure(this,c,c.options),ss.addBox(this,c)})}_updateMetasets(){const e=this._metasets,s=this.data.datasets.length,r=e.length;if(e.sort((l,o)=>l.index-o.index),r>s){for(let l=s;l<r;++l)this._destroyDatasetMeta(l);e.splice(s,r-s)}this._sortedMetasets=e.slice(0).sort(Sm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:s}}=this;e.length>s.length&&delete this._stacks,e.forEach((r,l)=>{s.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(l)})}buildOrUpdateControllers(){const e=[],s=this.data.datasets;let r,l;for(this._removeUnreferencedMetasets(),r=0,l=s.length;r<l;r++){const o=s[r];let c=this.getDatasetMeta(r);const u=o.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(r),c=this.getDatasetMeta(r)),c.type=u,c.indexAxis=o.indexAxis||Bd(u,this.options),c.order=o.order||0,c.index=r,c.label=""+o.label,c.visible=this.isDatasetVisible(r),c.controller)c.controller.updateIndex(r),c.controller.linkScales();else{const h=Es.getController(u),{datasetElementType:p,dataElementType:m}=et.datasets[u];Object.assign(h,{dataElementType:Es.getElement(m),datasetElementType:p&&Es.getElement(p)}),c.controller=new h(this,r),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Fe(this.data.datasets,(e,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const s=this.config;s.update();const r=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),l=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,m=this.data.datasets.length;p<m;p++){const{controller:x}=this.getDatasetMeta(p),N=!l&&o.indexOf(x)===-1;x.buildOrUpdateElements(N),c=Math.max(+x.getMaxOverflow(),c)}c=this._minPadding=r.layout.autoPadding?c:0,this._updateLayout(c),l||Fe(o,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(Sm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Fe(this.scales,e=>{ss.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,s=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!Ip(s,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,s=this._getUniformDataChanges()||[];for(const{method:r,start:l,count:o}of s){const c=r==="_removeElements"?-o:o;ck(e,l,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const s=this.data.datasets.length,r=o=>new Set(e.filter(c=>c[0]===o).map((c,u)=>u+","+c.splice(1).join(","))),l=r(0);for(let o=1;o<s;o++)if(!Ip(l,r(o)))return;return Array.from(l).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ss.update(this,this.width,this.height,e);const s=this.chartArea,r=s.width<=0||s.height<=0;this._layers=[],Fe(this.boxes,l=>{r&&l.position==="chartArea"||(l.configure&&l.configure(),this._layers.push(...l._layers()))},this),this._layers.forEach((l,o)=>{l._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let s=0,r=this.data.datasets.length;s<r;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,r=this.data.datasets.length;s<r;++s)this._updateDataset(s,wn(e)?e({datasetIndex:s}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,s){const r=this.getDatasetMeta(e),l={meta:r,index:e,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",l)!==!1&&(r.controller._update(s),l.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",l))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ws.has(this)?this.attached&&!Ws.running(this)&&Ws.start(this):(this.draw(),Cm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:l}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,l)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(e=0;e<s.length&&s[e].z<=0;++e)s[e].draw(this.chartArea);for(this._drawDatasets();e<s.length;++e)s[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const s=this._sortedMetasets,r=[];let l,o;for(l=0,o=s.length;l<o;++l){const c=s[l];(!e||c.visible)&&r.push(c)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let s=e.length-1;s>=0;--s)this._drawDataset(e[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const s=this.ctx,r={meta:e,index:e.index,cancelable:!0},l=hx(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(l&&po(s,l),e.controller.draw(),l&&mo(s),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return na(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,s,r,l){const o=lw.modes[s];return typeof o=="function"?o(this,e,r,l):[]}getDatasetMeta(e){const s=this.data.datasets[e],r=this._metasets;let l=r.filter(o=>o&&o._dataset===s).pop();return l||(l={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:e,_dataset:s,_parsed:[],_sorted:!1},r.push(l)),l}getContext(){return this.$context||(this.$context=li(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const s=this.data.datasets[e];if(!s)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!s.hidden}setDatasetVisibility(e,s){const r=this.getDatasetMeta(e);r.hidden=!s}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,s,r){const l=r?"show":"hide",o=this.getDatasetMeta(e),c=o.controller._resolveAnimations(void 0,l);ea(s)?(o.data[s].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),c.update(o,{visible:r}),this.update(u=>u.datasetIndex===e?l:void 0))}hide(e,s){this._updateVisibility(e,s,!1)}show(e,s){this._updateVisibility(e,s,!0)}_destroyDatasetMeta(e){const s=this._metasets[e];s&&s.controller&&s.controller._destroy(),delete this._metasets[e]}_stop(){let e,s;for(this.stop(),Ws.remove(this),e=0,s=this.data.datasets.length;e<s;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:s}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Qp(e,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Yl[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,s=this.platform,r=(o,c)=>{s.addEventListener(this,o,c),e[o]=c},l=(o,c,u)=>{o.offsetX=c,o.offsetY=u,this._eventHandler(o)};Fe(this.options.events,o=>r(o,l))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,s=this.platform,r=(h,p)=>{s.addEventListener(this,h,p),e[h]=p},l=(h,p)=>{e[h]&&(s.removeEventListener(this,h,p),delete e[h])},o=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{l("attach",u),this.attached=!0,this.resize(),r("resize",o),r("detach",c)};c=()=>{this.attached=!1,l("resize",o),this._stop(),this._resize(0,0),r("attach",u)},s.isAttached(this.canvas)?u():c()}unbindEvents(){Fe(this._listeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._listeners={},Fe(this._responsiveListeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,s,r){const l=r?"set":"remove";let o,c,u,h;for(s==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+l+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[l+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const s=this._active||[],r=e.map(({datasetIndex:o,index:c})=>{const u=this.getDatasetMeta(o);if(!u)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:u.data[c],index:c}});!Gl(r,s)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,s))}notifyPlugins(e,s,r){return this._plugins.notify(this,e,s,r)}isPluginEnabled(e){return this._plugins._cache.filter(s=>s.plugin.id===e).length===1}_updateHoverStyles(e,s,r){const l=this.options.hover,o=(h,p)=>h.filter(m=>!p.some(x=>m.datasetIndex===x.datasetIndex&&m.index===x.index)),c=o(s,e),u=r?e:o(e,s);c.length&&this.updateHoverStyle(c,l.mode,!1),u.length&&l.mode&&this.updateHoverStyle(u,l.mode,!0)}_eventHandler(e,s){const r={event:e,replay:s,cancelable:!0,inChartArea:this.isPointInArea(e)},l=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,l)===!1)return;const o=this._handleEvent(e,s,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,l),(o||r.changed)&&this.render(),this}_handleEvent(e,s,r){const{_active:l=[],options:o}=this,c=s,u=this._getActiveElements(e,l,r,c),h=pN(e),p=dk(e,this._lastEvent,r,h);r&&(this._lastEvent=null,He(o.onHover,[e,u,this],this),h&&He(o.onClick,[e,u,this],this));const m=!Gl(u,l);return(m||s)&&(this._active=u,this._updateHoverStyles(u,l,s)),this._lastEvent=p,m}_getActiveElements(e,s,r,l){if(e.type==="mouseout")return[];if(!r)return s;const o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,l)}},be(gn,"defaults",et),be(gn,"instances",Yl),be(gn,"overrides",ri),be(gn,"registry",Es),be(gn,"version",ak),be(gn,"getChart",Em),gn);function Rm(){return Fe(pa.instances,t=>t._plugins.invalidate())}function uk(t,e,s){const{startAngle:r,x:l,y:o,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:m}=h,x=Math.min(p/c,Ht(r-s));if(t.beginPath(),t.arc(l,o,c-p/2,r+x/2,s-x/2),u>0){const N=Math.min(p/u,Ht(r-s));t.arc(l,o,u+p/2,s-N/2,r+N/2,!0)}else{const N=Math.min(p/2,c*Ht(r-s));if(m==="round")t.arc(l,o,N,s-Be/2,r+Be/2,!0);else if(m==="bevel"){const w=2*N*N,b=-w*Math.cos(s+Be/2)+l,j=-w*Math.sin(s+Be/2)+o,y=w*Math.cos(r+Be/2)+l,C=w*Math.sin(r+Be/2)+o;t.lineTo(b,j),t.lineTo(y,C)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function hk(t,e,s){const{startAngle:r,pixelMargin:l,x:o,y:c,outerRadius:u,innerRadius:h}=e;let p=l/u;t.beginPath(),t.arc(o,c,u,r-p,s+p),h>l?(p=l/h,t.arc(o,c,h,s+p,r-p,!0)):t.arc(o,c,l,s+ct,r-ct),t.closePath(),t.clip()}function fk(t){return cu(t,["outerStart","outerEnd","innerStart","innerEnd"])}function pk(t,e,s,r){const l=fk(t.options.borderRadius),o=(s-e)/2,c=Math.min(o,r*e/2),u=h=>{const p=(s-Math.min(o,h))*r/2;return Nt(h,0,Math.min(o,p))};return{outerStart:u(l.outerStart),outerEnd:u(l.outerEnd),innerStart:Nt(l.innerStart,0,c),innerEnd:Nt(l.innerEnd,0,c)}}function Ii(t,e,s,r){return{x:s+t*Math.cos(e),y:r+t*Math.sin(e)}}function no(t,e,s,r,l,o){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:m}=e,x=Math.max(e.outerRadius+r+s-p,0),N=m>0?m+r+s+p:0;let w=0;const b=l-h;if(r){const X=m>0?m-r:0,k=x>0?x-r:0,z=(X+k)/2,B=z!==0?b*z/(z+r):b;w=(b-B)/2}const j=Math.max(.001,b*x-s/Be)/x,y=(b-j)/2,C=h+y+w,R=l-y-w,{outerStart:T,outerEnd:W,innerStart:_,innerEnd:H}=pk(e,N,x,R-C),L=x-T,P=x-W,A=C+T/L,K=R-W/P,q=N+_,I=N+H,$=C+_/q,U=R-H/I;if(t.beginPath(),o){const X=(A+K)/2;if(t.arc(c,u,x,A,X),t.arc(c,u,x,X,K),W>0){const te=Ii(P,K,c,u);t.arc(te.x,te.y,W,K,R+ct)}const k=Ii(I,R,c,u);if(t.lineTo(k.x,k.y),H>0){const te=Ii(I,U,c,u);t.arc(te.x,te.y,H,R+ct,U+Math.PI)}const z=(R-H/N+(C+_/N))/2;if(t.arc(c,u,N,R-H/N,z,!0),t.arc(c,u,N,z,C+_/N,!0),_>0){const te=Ii(q,$,c,u);t.arc(te.x,te.y,_,$+Math.PI,C-ct)}const B=Ii(L,C,c,u);if(t.lineTo(B.x,B.y),T>0){const te=Ii(L,A,c,u);t.arc(te.x,te.y,T,C-ct,A)}}else{t.moveTo(c,u);const X=Math.cos(A)*x+c,k=Math.sin(A)*x+u;t.lineTo(X,k);const z=Math.cos(K)*x+c,B=Math.sin(K)*x+u;t.lineTo(z,B)}t.closePath()}function mk(t,e,s,r,l){const{fullCircles:o,startAngle:c,circumference:u}=e;let h=e.endAngle;if(o){no(t,e,s,r,h,l);for(let p=0;p<o;++p)t.fill();isNaN(u)||(h=c+(u%Xe||Xe))}return no(t,e,s,r,h,l),t.fill(),h}function gk(t,e,s,r,l){const{fullCircles:o,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:m,borderDash:x,borderDashOffset:N,borderRadius:w}=h,b=h.borderAlign==="inner";if(!p)return;t.setLineDash(x||[]),t.lineDashOffset=N,b?(t.lineWidth=p*2,t.lineJoin=m||"round"):(t.lineWidth=p,t.lineJoin=m||"bevel");let j=e.endAngle;if(o){no(t,e,s,r,j,l);for(let y=0;y<o;++y)t.stroke();isNaN(u)||(j=c+(u%Xe||Xe))}b&&hk(t,e,j),h.selfJoin&&j-c>=Be&&w===0&&m!=="miter"&&uk(t,e,j),o||(no(t,e,s,r,j,l),t.stroke())}class Ur extends gs{constructor(s){super();be(this,"circumference");be(this,"endAngle");be(this,"fullCircles");be(this,"innerRadius");be(this,"outerRadius");be(this,"pixelMargin");be(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,s&&Object.assign(this,s)}inRange(s,r,l){const o=this.getProps(["x","y"],l),{angle:c,distance:u}=Qg(o,{x:s,y:r}),{startAngle:h,endAngle:p,innerRadius:m,outerRadius:x,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],l),w=(this.options.spacing+this.options.borderWidth)/2,b=Ce(N,p-h),j=sa(c,h,p)&&h!==p,y=b>=Xe||j,C=qs(u,m+w,x+w);return y&&C}getCenterPoint(s){const{x:r,y:l,startAngle:o,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],s),{offset:p,spacing:m}=this.options,x=(o+c)/2,N=(u+h+m+p)/2;return{x:r+Math.cos(x)*N,y:l+Math.sin(x)*N}}tooltipPosition(s){return this.getCenterPoint(s)}draw(s){const{options:r,circumference:l}=this,o=(r.offset||0)/4,c=(r.spacing||0)/2,u=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=l>Xe?Math.floor(l/Xe):0,l===0||this.innerRadius<0||this.outerRadius<0)return;s.save();const h=(this.startAngle+this.endAngle)/2;s.translate(Math.cos(h)*o,Math.sin(h)*o);const p=1-Math.sin(Math.min(Be,l||0)),m=o*p;s.fillStyle=r.backgroundColor,s.strokeStyle=r.borderColor,mk(s,this,m,c,u),gk(s,this,m,c,u),s.restore()}}be(Ur,"id","arc"),be(Ur,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),be(Ur,"defaultRoutes",{backgroundColor:"backgroundColor"}),be(Ur,"descriptors",{_scriptable:!0,_indexable:s=>s!=="borderDash"});function _x(t,e,s=e){t.lineCap=Ce(s.borderCapStyle,e.borderCapStyle),t.setLineDash(Ce(s.borderDash,e.borderDash)),t.lineDashOffset=Ce(s.borderDashOffset,e.borderDashOffset),t.lineJoin=Ce(s.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Ce(s.borderWidth,e.borderWidth),t.strokeStyle=Ce(s.borderColor,e.borderColor)}function xk(t,e,s){t.lineTo(s.x,s.y)}function vk(t){return t.stepped?$N:t.tension||t.cubicInterpolationMode==="monotone"?WN:xk}function Sx(t,e,s={}){const r=t.length,{start:l=0,end:o=r-1}=s,{start:c,end:u}=e,h=Math.max(l,c),p=Math.min(o,u),m=l<c&&o<c||l>u&&o>u;return{count:r,start:h,loop:e.loop,ilen:p<h&&!m?r+p-h:p-h}}function yk(t,e,s,r){const{points:l,options:o}=e,{count:c,start:u,loop:h,ilen:p}=Sx(l,s,r),m=vk(o);let{move:x=!0,reverse:N}=r||{},w,b,j;for(w=0;w<=p;++w)b=l[(u+(N?p-w:w))%c],!b.skip&&(x?(t.moveTo(b.x,b.y),x=!1):m(t,j,b,N,o.stepped),j=b);return h&&(b=l[(u+(N?p:0))%c],m(t,j,b,N,o.stepped)),!!h}function bk(t,e,s,r){const l=e.points,{count:o,start:c,ilen:u}=Sx(l,s,r),{move:h=!0,reverse:p}=r||{};let m=0,x=0,N,w,b,j,y,C;const R=W=>(c+(p?u-W:W))%o,T=()=>{j!==y&&(t.lineTo(m,y),t.lineTo(m,j),t.lineTo(m,C))};for(h&&(w=l[R(0)],t.moveTo(w.x,w.y)),N=0;N<=u;++N){if(w=l[R(N)],w.skip)continue;const W=w.x,_=w.y,H=W|0;H===b?(_<j?j=_:_>y&&(y=_),m=(x*m+W)/++x):(T(),t.lineTo(W,_),b=H,x=0,j=y=_),C=_}T()}function Wd(t){const e=t.options,s=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!s?bk:yk}function jk(t){return t.stepped?b1:t.tension||t.cubicInterpolationMode==="monotone"?j1:Gn}function Nk(t,e,s,r){let l=e._path;l||(l=e._path=new Path2D,e.path(l,s,r)&&l.closePath()),_x(t,e.options),t.stroke(l)}function wk(t,e,s,r){const{segments:l,options:o}=e,c=Wd(e);for(const u of l)_x(t,o,u.style),t.beginPath(),c(t,e,u,{start:s,end:s+r-1})&&t.closePath(),t.stroke()}const kk=typeof Path2D=="function";function _k(t,e,s,r){kk&&!e.options.segment?Nk(t,e,s,r):wk(t,e,s,r)}class Ys extends gs{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,s){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const l=r.spanGaps?this._loop:this._fullLoop;h1(this._points,r,e,l,s),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=C1(this,this.options.segment))}first(){const e=this.segments,s=this.points;return e.length&&s[e[0].start]}last(){const e=this.segments,s=this.points,r=e.length;return r&&s[e[r-1].end]}interpolate(e,s){const r=this.options,l=e[s],o=this.points,c=ux(this,{property:s,start:l,end:l});if(!c.length)return;const u=[],h=jk(r);let p,m;for(p=0,m=c.length;p<m;++p){const{start:x,end:N}=c[p],w=o[x],b=o[N];if(w===b){u.push(w);continue}const j=Math.abs((l-w[s])/(b[s]-w[s])),y=h(w,b,j,r.stepped);y[s]=e[s],u.push(y)}return u.length===1?u[0]:u}pathSegment(e,s,r){return Wd(this)(e,this,s,r)}path(e,s,r){const l=this.segments,o=Wd(this);let c=this._loop;s=s||0,r=r||this.points.length-s;for(const u of l)c&=o(e,this,u,{start:s,end:s+r-1});return!!c}draw(e,s,r,l){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),_k(e,this,r,l),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}be(Ys,"id","line"),be(Ys,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),be(Ys,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),be(Ys,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function Dm(t,e,s,r){const l=t.options,{[s]:o}=t.getProps([s],r);return Math.abs(e-o)<l.radius+l.hitRadius}class Kr extends gs{constructor(s){super();be(this,"parsed");be(this,"skip");be(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,s&&Object.assign(this,s)}inRange(s,r,l){const o=this.options,{x:c,y:u}=this.getProps(["x","y"],l);return Math.pow(s-c,2)+Math.pow(r-u,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(s,r){return Dm(this,s,"x",r)}inYRange(s,r){return Dm(this,s,"y",r)}getCenterPoint(s){const{x:r,y:l}=this.getProps(["x","y"],s);return{x:r,y:l}}size(s){s=s||this.options||{};let r=s.radius||0;r=Math.max(r,r&&s.hoverRadius||0);const l=r&&s.borderWidth||0;return(r+l)*2}draw(s,r){const l=this.options;this.skip||l.radius<.1||!na(this,r,this.size(l)/2)||(s.strokeStyle=l.borderColor,s.lineWidth=l.borderWidth,s.fillStyle=l.backgroundColor,Fd(s,l,this.x,this.y))}getRange(){const s=this.options||{};return s.radius+s.hitRadius}}be(Kr,"id","point"),be(Kr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),be(Kr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Cx(t,e){const{x:s,y:r,base:l,width:o,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,m,x;return t.horizontal?(x=c/2,u=Math.min(s,l),h=Math.max(s,l),p=r-x,m=r+x):(x=o/2,u=s-x,h=s+x,p=Math.min(r,l),m=Math.max(r,l)),{left:u,top:p,right:h,bottom:m}}function bn(t,e,s,r){return t?0:Nt(e,s,r)}function Sk(t,e,s){const r=t.options.borderWidth,l=t.borderSkipped,o=tx(r);return{t:bn(l.top,o.top,0,s),r:bn(l.right,o.right,0,e),b:bn(l.bottom,o.bottom,0,s),l:bn(l.left,o.left,0,e)}}function Ck(t,e,s){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),l=t.options.borderRadius,o=Fi(l),c=Math.min(e,s),u=t.borderSkipped,h=r||De(l);return{topLeft:bn(!h||u.top||u.left,o.topLeft,0,c),topRight:bn(!h||u.top||u.right,o.topRight,0,c),bottomLeft:bn(!h||u.bottom||u.left,o.bottomLeft,0,c),bottomRight:bn(!h||u.bottom||u.right,o.bottomRight,0,c)}}function Ek(t){const e=Cx(t),s=e.right-e.left,r=e.bottom-e.top,l=Sk(t,s/2,r/2),o=Ck(t,s/2,r/2);return{outer:{x:e.left,y:e.top,w:s,h:r,radius:o},inner:{x:e.left+l.l,y:e.top+l.t,w:s-l.l-l.r,h:r-l.t-l.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(l.t,l.l)),topRight:Math.max(0,o.topRight-Math.max(l.t,l.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(l.b,l.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(l.b,l.r))}}}}function kd(t,e,s,r){const l=e===null,o=s===null,u=t&&!(l&&o)&&Cx(t,r);return u&&(l||qs(e,u.left,u.right))&&(o||qs(s,u.top,u.bottom))}function Rk(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function Dk(t,e){t.rect(e.x,e.y,e.w,e.h)}function _d(t,e,s={}){const r=t.x!==s.x?-e:0,l=t.y!==s.y?-e:0,o=(t.x+t.w!==s.x+s.w?e:0)-r,c=(t.y+t.h!==s.y+s.h?e:0)-l;return{x:t.x+r,y:t.y+l,w:t.w+o,h:t.h+c,radius:t.radius}}class Ql extends gs{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:s,options:{borderColor:r,backgroundColor:l}}=this,{inner:o,outer:c}=Ek(this),u=Rk(c.radius)?eo:Dk;e.save(),(c.w!==o.w||c.h!==o.h)&&(e.beginPath(),u(e,_d(c,s,o)),e.clip(),u(e,_d(o,-s,c)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),u(e,_d(o,s)),e.fillStyle=l,e.fill(),e.restore()}inRange(e,s,r){return kd(this,e,s,r)}inXRange(e,s){return kd(this,e,null,s)}inYRange(e,s){return kd(this,null,e,s)}getCenterPoint(e){const{x:s,y:r,base:l,horizontal:o}=this.getProps(["x","y","base","horizontal"],e);return{x:o?(s+l)/2:s,y:o?r:(r+l)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}be(Ql,"id","bar"),be(Ql,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),be(Ql,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Pk(t,e,s){const r=t.segments,l=t.points,o=e.points,c=[];for(const u of r){let{start:h,end:p}=u;p=vo(h,p,l);const m=Ud(s,l[h],l[p],u.loop);if(!e.segments){c.push({source:u,target:m,start:l[h],end:l[p]});continue}const x=ux(e,m);for(const N of x){const w=Ud(s,o[N.start],o[N.end],N.loop),b=dx(u,l,w);for(const j of b)c.push({source:j,target:N,start:{[s]:Pm(m,w,"start",Math.max)},end:{[s]:Pm(m,w,"end",Math.min)}})}}return c}function Ud(t,e,s,r){if(r)return;let l=e[t],o=s[t];return t==="angle"&&(l=Ht(l),o=Ht(o)),{property:t,start:l,end:o}}function Ak(t,e){const{x:s=null,y:r=null}=t||{},l=e.points,o=[];return e.segments.forEach(({start:c,end:u})=>{u=vo(c,u,l);const h=l[c],p=l[u];r!==null?(o.push({x:h.x,y:r}),o.push({x:p.x,y:r})):s!==null&&(o.push({x:s,y:h.y}),o.push({x:s,y:p.y}))}),o}function vo(t,e,s){for(;e>t;e--){const r=s[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function Pm(t,e,s,r){return t&&e?r(t[s],e[s]):t?t[s]:e?e[s]:0}function Ex(t,e){let s=[],r=!1;return rt(t)?(r=!0,s=t):s=Ak(t,e),s.length?new Ys({points:s,options:{tension:0},_loop:r,_fullLoop:r}):null}function Am(t){return t&&t.fill!==!1}function Tk(t,e,s){let l=t[e].fill;const o=[e];let c;if(!s)return l;for(;l!==!1&&o.indexOf(l)===-1;){if(!kt(l))return l;if(c=t[l],!c)return!1;if(c.visible)return l;o.push(l),l=c.fill}return!1}function Mk(t,e,s){const r=Ik(t);if(De(r))return isNaN(r.value)?!1:r;let l=parseFloat(r);return kt(l)&&Math.floor(l)===l?Lk(r[0],e,l,s):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function Lk(t,e,s,r){return(t==="-"||t==="+")&&(s=e+s),s===e||s<0||s>=r?!1:s}function Ok(t,e){let s=null;return t==="start"?s=e.bottom:t==="end"?s=e.top:De(t)?s=e.getPixelForValue(t.value):e.getBasePixel&&(s=e.getBasePixel()),s}function zk(t,e,s){let r;return t==="start"?r=s:t==="end"?r=e.options.reverse?e.min:e.max:De(t)?r=t.value:r=e.getBaseValue(),r}function Ik(t){const e=t.options,s=e.fill;let r=Ce(s&&s.target,s);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function Fk(t){const{scale:e,index:s,line:r}=t,l=[],o=r.segments,c=r.points,u=Bk(e,s);u.push(Ex({x:null,y:e.bottom},r));for(let h=0;h<o.length;h++){const p=o[h];for(let m=p.start;m<=p.end;m++)$k(l,c[m],u)}return new Ys({points:l,options:{}})}function Bk(t,e){const s=[],r=t.getMatchingVisibleMetas("line");for(let l=0;l<r.length;l++){const o=r[l];if(o.index===e)break;o.hidden||s.unshift(o.dataset)}return s}function $k(t,e,s){const r=[];for(let l=0;l<s.length;l++){const o=s[l],{first:c,last:u,point:h}=Wk(o,e,"x");if(!(!h||c&&u)){if(c)r.unshift(h);else if(t.push(h),!u)break}}t.push(...r)}function Wk(t,e,s){const r=t.interpolate(e,s);if(!r)return{};const l=r[s],o=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<o.length;p++){const m=o[p],x=c[m.start][s],N=c[m.end][s];if(qs(l,x,N)){u=l===x,h=l===N;break}}return{first:u,last:h,point:r}}class Rx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,s,r){const{x:l,y:o,radius:c}=this;return s=s||{start:0,end:Xe},e.arc(l,o,c,s.end,s.start,!0),!r.bounds}interpolate(e){const{x:s,y:r,radius:l}=this,o=e.angle;return{x:s+Math.cos(o)*l,y:r+Math.sin(o)*l,angle:o}}}function Uk(t){const{chart:e,fill:s,line:r}=t;if(kt(s))return Hk(e,s);if(s==="stack")return Fk(t);if(s==="shape")return!0;const l=Vk(t);return l instanceof Rx?l:Ex(l,r)}function Hk(t,e){const s=t.getDatasetMeta(e);return s&&t.isDatasetVisible(e)?s.dataset:null}function Vk(t){return(t.scale||{}).getPointPositionForValue?Yk(t):qk(t)}function qk(t){const{scale:e={},fill:s}=t,r=Ok(s,e);if(kt(r)){const l=e.isHorizontal();return{x:l?r:null,y:l?null:r}}return null}function Yk(t){const{scale:e,fill:s}=t,r=e.options,l=e.getLabels().length,o=r.reverse?e.max:e.min,c=zk(s,e,o),u=[];if(r.grid.circular){const h=e.getPointPositionForValue(0,o);return new Rx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<l;++h)u.push(e.getPointPositionForValue(h,c));return u}function Sd(t,e,s){const r=Uk(e),{chart:l,index:o,line:c,scale:u,axis:h}=e,p=c.options,m=p.fill,x=p.backgroundColor,{above:N=x,below:w=x}=m||{},b=l.getDatasetMeta(o),j=hx(l,b);r&&c.points.length&&(po(t,s),Qk(t,{line:c,target:r,above:N,below:w,area:s,scale:u,axis:h,clip:j}),mo(t))}function Qk(t,e){const{line:s,target:r,above:l,below:o,area:c,scale:u,clip:h}=e,p=s._loop?"angle":e.axis;t.save();let m=o;o!==l&&(p==="x"?(Tm(t,r,c.top),Cd(t,{line:s,target:r,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),Tm(t,r,c.bottom)):p==="y"&&(Mm(t,r,c.left),Cd(t,{line:s,target:r,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),Mm(t,r,c.right),m=l)),Cd(t,{line:s,target:r,color:m,scale:u,property:p,clip:h}),t.restore()}function Tm(t,e,s){const{segments:r,points:l}=e;let o=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],x=l[vo(h,p,l)];o?(t.moveTo(m.x,m.y),o=!1):(t.lineTo(m.x,s),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(x.x,s)}t.lineTo(e.first().x,s),t.closePath(),t.clip()}function Mm(t,e,s){const{segments:r,points:l}=e;let o=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],x=l[vo(h,p,l)];o?(t.moveTo(m.x,m.y),o=!1):(t.lineTo(s,m.y),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(s,x.y)}t.lineTo(s,e.first().y),t.closePath(),t.clip()}function Cd(t,e){const{line:s,target:r,property:l,color:o,scale:c,clip:u}=e,h=Pk(s,r,l);for(const{source:p,target:m,start:x,end:N}of h){const{style:{backgroundColor:w=o}={}}=p,b=r!==!0;t.save(),t.fillStyle=w,Kk(t,c,u,b&&Ud(l,x,N)),t.beginPath();const j=!!s.pathSegment(t,p);let y;if(b){j?t.closePath():Lm(t,r,N,l);const C=!!r.pathSegment(t,m,{move:j,reverse:!0});y=j&&C,y||Lm(t,r,x,l)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function Kk(t,e,s,r){const l=e.chart.chartArea,{property:o,start:c,end:u}=r||{};if(o==="x"||o==="y"){let h,p,m,x;o==="x"?(h=c,p=l.top,m=u,x=l.bottom):(h=l.left,p=c,m=l.right,x=u),t.beginPath(),s&&(h=Math.max(h,s.left),m=Math.min(m,s.right),p=Math.max(p,s.top),x=Math.min(x,s.bottom)),t.rect(h,p,m-h,x-p),t.clip()}}function Lm(t,e,s,r){const l=e.interpolate(s,r);l&&t.lineTo(l.x,l.y)}var Dx={id:"filler",afterDatasetsUpdate(t,e,s){const r=(t.data.datasets||[]).length,l=[];let o,c,u,h;for(c=0;c<r;++c)o=t.getDatasetMeta(c),u=o.dataset,h=null,u&&u.options&&u instanceof Ys&&(h={visible:t.isDatasetVisible(c),index:c,fill:Mk(u,c,r),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:u}),o.$filler=h,l.push(h);for(c=0;c<r;++c)h=l[c],!(!h||h.fill===!1)&&(h.fill=Tk(l,c,s.propagate))},beforeDraw(t,e,s){const r=s.drawTime==="beforeDraw",l=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let c=l.length-1;c>=0;--c){const u=l[c].$filler;u&&(u.line.updateControlPoints(o,u.axis),r&&u.fill&&Sd(t.ctx,u,o))}},beforeDatasetsDraw(t,e,s){if(s.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let l=r.length-1;l>=0;--l){const o=r[l].$filler;Am(o)&&Sd(t.ctx,o,t.chartArea)}},beforeDatasetDraw(t,e,s){const r=e.meta.$filler;!Am(r)||s.drawTime!=="beforeDatasetDraw"||Sd(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Om=(t,e)=>{let{boxHeight:s=e,boxWidth:r=e}=t;return t.usePointStyle&&(s=Math.min(s,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:s,itemHeight:Math.max(e,s)}},Xk=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class zm extends gs{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s,r){this.maxWidth=e,this.maxHeight=s,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let s=He(e.generateLabels,[this.chart],this)||[];e.filter&&(s=s.filter(r=>e.filter(r,this.chart.data))),e.sort&&(s=s.sort((r,l)=>e.sort(r,l,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:e,ctx:s}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,l=wt(r.font),o=l.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Om(r,o);let p,m;s.font=l.string,this.isHorizontal()?(p=this.maxWidth,m=this._fitRows(c,o,u,h)+10):(m=this.maxHeight,p=this._fitCols(c,l,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(m,e.maxHeight||this.maxHeight)}_fitRows(e,s,r,l){const{ctx:o,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],m=l+u;let x=e;o.textAlign="left",o.textBaseline="middle";let N=-1,w=-m;return this.legendItems.forEach((b,j)=>{const y=r+s/2+o.measureText(b.text).width;(j===0||p[p.length-1]+y+2*u>c)&&(x+=m,p[p.length-(j>0?0:1)]=0,w+=m,N++),h[j]={left:0,top:w,row:N,width:y,height:l},p[p.length-1]+=y+u}),x}_fitCols(e,s,r,l){const{ctx:o,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],m=c-e;let x=u,N=0,w=0,b=0,j=0;return this.legendItems.forEach((y,C)=>{const{itemWidth:R,itemHeight:T}=Gk(r,s,o,y,l);C>0&&w+T+2*u>m&&(x+=N+u,p.push({width:N,height:w}),b+=N+u,j++,N=w=0),h[C]={left:b,top:w,col:j,width:R,height:T},N=Math.max(N,R),w+=T+u}),x+=N,p.push({width:N,height:w}),x}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:r,labels:{padding:l},rtl:o}}=this,c=Bi(o,this.left,this.width);if(this.isHorizontal()){let u=0,h=bt(r,this.left+l,this.right-this.lineWidths[u]);for(const p of s)u!==p.row&&(u=p.row,h=bt(r,this.left+l,this.right-this.lineWidths[u])),p.top+=this.top+e+l,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+l}else{let u=0,h=bt(r,this.top+e+l,this.bottom-this.columnSizes[u].height);for(const p of s)p.col!==u&&(u=p.col,h=bt(r,this.top+e+l,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+l,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+l}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;po(e,this),this._draw(),mo(e)}}_draw(){const{options:e,columnSizes:s,lineWidths:r,ctx:l}=this,{align:o,labels:c}=e,u=et.color,h=Bi(e.rtl,this.left,this.width),p=wt(c.font),{padding:m}=c,x=p.size,N=x/2;let w;this.drawTitle(),l.textAlign=h.textAlign("left"),l.textBaseline="middle",l.lineWidth=.5,l.font=p.string;const{boxWidth:b,boxHeight:j,itemHeight:y}=Om(c,x),C=function(H,L,P){if(isNaN(b)||b<=0||isNaN(j)||j<0)return;l.save();const A=Ce(P.lineWidth,1);if(l.fillStyle=Ce(P.fillStyle,u),l.lineCap=Ce(P.lineCap,"butt"),l.lineDashOffset=Ce(P.lineDashOffset,0),l.lineJoin=Ce(P.lineJoin,"miter"),l.lineWidth=A,l.strokeStyle=Ce(P.strokeStyle,u),l.setLineDash(Ce(P.lineDash,[])),c.usePointStyle){const K={radius:j*Math.SQRT2/2,pointStyle:P.pointStyle,rotation:P.rotation,borderWidth:A},q=h.xPlus(H,b/2),I=L+N;ex(l,K,q,I,c.pointStyleWidth&&b)}else{const K=L+Math.max((x-j)/2,0),q=h.leftForLtr(H,b),I=Fi(P.borderRadius);l.beginPath(),Object.values(I).some($=>$!==0)?eo(l,{x:q,y:K,w:b,h:j,radius:I}):l.rect(q,K,b,j),l.fill(),A!==0&&l.stroke()}l.restore()},R=function(H,L,P){ia(l,P.text,H,L+y/2,p,{strikethrough:P.hidden,textAlign:h.textAlign(P.textAlign)})},T=this.isHorizontal(),W=this._computeTitleHeight();T?w={x:bt(o,this.left+m,this.right-r[0]),y:this.top+m+W,line:0}:w={x:this.left+m,y:bt(o,this.top+W+m,this.bottom-s[0].height),line:0},lx(this.ctx,e.textDirection);const _=y+m;this.legendItems.forEach((H,L)=>{l.strokeStyle=H.fontColor,l.fillStyle=H.fontColor;const P=l.measureText(H.text).width,A=h.textAlign(H.textAlign||(H.textAlign=c.textAlign)),K=b+N+P;let q=w.x,I=w.y;h.setWidth(this.width),T?L>0&&q+K+m>this.right&&(I=w.y+=_,w.line++,q=w.x=bt(o,this.left+m,this.right-r[w.line])):L>0&&I+_>this.bottom&&(q=w.x=q+s[w.line].width+m,w.line++,I=w.y=bt(o,this.top+W+m,this.bottom-s[w.line].height));const $=h.x(q);if(C($,I,H),q=EN(A,q+b+N,T?q+K:this.right,e.rtl),R(h.x(q),I,H),T)w.x+=K+m;else if(typeof H.text!="string"){const U=p.lineHeight;w.y+=Px(H,U)+m}else w.y+=_}),ox(this.ctx,e.textDirection)}drawTitle(){const e=this.options,s=e.title,r=wt(s.font),l=ns(s.padding);if(!s.display)return;const o=Bi(e.rtl,this.left,this.width),c=this.ctx,u=s.position,h=r.size/2,p=l.top+h;let m,x=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),m=this.top+p,x=bt(e.align,x,this.right-N);else{const b=this.columnSizes.reduce((j,y)=>Math.max(j,y.height),0);m=p+bt(e.align,this.top,this.bottom-b-e.labels.padding-this._computeTitleHeight())}const w=bt(u,x,x+N);c.textAlign=o.textAlign(au(u)),c.textBaseline="middle",c.strokeStyle=s.color,c.fillStyle=s.color,c.font=r.string,ia(c,s.text,w,m,r)}_computeTitleHeight(){const e=this.options.title,s=wt(e.font),r=ns(e.padding);return e.display?s.lineHeight+r.height:0}_getLegendItemAt(e,s){let r,l,o;if(qs(e,this.left,this.right)&&qs(s,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(l=o[r],qs(e,l.left,l.left+l.width)&&qs(s,l.top,l.top+l.height))return this.legendItems[r]}return null}handleEvent(e){const s=this.options;if(!e_(e.type,s))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const l=this._hoveredItem,o=Xk(l,r);l&&!o&&He(s.onLeave,[e,l,this],this),this._hoveredItem=r,r&&!o&&He(s.onHover,[e,r,this],this)}else r&&He(s.onClick,[e,r,this],this)}}function Gk(t,e,s,r,l){const o=Jk(r,t,e,s),c=Zk(l,r,e.lineHeight);return{itemWidth:o,itemHeight:c}}function Jk(t,e,s,r){let l=t.text;return l&&typeof l!="string"&&(l=l.reduce((o,c)=>o.length>c.length?o:c)),e+s.size/2+r.measureText(l).width}function Zk(t,e,s){let r=t;return typeof e.text!="string"&&(r=Px(e,s)),r}function Px(t,e){const s=t.text?t.text.length:0;return e*s}function e_(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Ax={id:"legend",_element:zm,start(t,e,s){const r=t.legend=new zm({ctx:t.ctx,options:s,chart:t});ss.configure(t,r,s),ss.addBox(t,r)},stop(t){ss.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,s){const r=t.legend;ss.configure(t,r,s),r.options=s},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,s){const r=e.datasetIndex,l=s.chart;l.isDatasetVisible(r)?(l.hide(r),e.hidden=!0):(l.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:s,pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(s?0:void 0),m=ns(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:o,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:p.borderColor,pointStyle:r||p.pointStyle,rotation:p.rotation,textAlign:l||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Tx extends gs{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=s;const l=rt(r.text)?r.text.length:1;this._padding=ns(r.padding);const o=l*wt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:s,left:r,bottom:l,right:o,options:c}=this,u=c.align;let h=0,p,m,x;return this.isHorizontal()?(m=bt(u,r,o),x=s+e,p=o-r):(c.position==="left"?(m=r+e,x=bt(u,l,s),h=Be*-.5):(m=o-e,x=bt(u,s,l),h=Be*.5),p=l-s),{titleX:m,titleY:x,maxWidth:p,rotation:h}}draw(){const e=this.ctx,s=this.options;if(!s.display)return;const r=wt(s.font),o=r.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(o);ia(e,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:p,textAlign:au(s.align),textBaseline:"middle",translation:[c,u]})}}function t_(t,e){const s=new Tx({ctx:t.ctx,options:e,chart:t});ss.configure(t,s,e),ss.addBox(t,s),t.titleBlock=s}var Mx={id:"title",_element:Tx,start(t,e,s){t_(t,s)},stop(t){const e=t.titleBlock;ss.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,s){const r=t.titleBlock;ss.configure(t,r,s),r.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Hr={average(t){if(!t.length)return!1;let e,s,r=new Set,l=0,o=0;for(e=0,s=t.length;e<s;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();r.add(h.x),l+=h.y,++o}}return o===0||r.size===0?!1:{x:[...r].reduce((u,h)=>u+h)/r.size,y:l/o}},nearest(t,e){if(!t.length)return!1;let s=e.x,r=e.y,l=Number.POSITIVE_INFINITY,o,c,u;for(o=0,c=t.length;o<c;++o){const h=t[o].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),m=zd(e,p);m<l&&(l=m,u=h)}}if(u){const h=u.tooltipPosition();s=h.x,r=h.y}return{x:s,y:r}}};function Cs(t,e){return e&&(rt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Us(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function s_(t,e){const{element:s,datasetIndex:r,index:l}=e,o=t.getDatasetMeta(r).controller,{label:c,value:u}=o.getLabelAndValue(l);return{chart:t,label:c,parsed:o.getParsed(l),raw:t.data.datasets[r].data[l],formattedValue:u,dataset:o.getDataset(),dataIndex:l,datasetIndex:r,element:s}}function Im(t,e){const s=t.chart.ctx,{body:r,footer:l,title:o}=t,{boxWidth:c,boxHeight:u}=e,h=wt(e.bodyFont),p=wt(e.titleFont),m=wt(e.footerFont),x=o.length,N=l.length,w=r.length,b=ns(e.padding);let j=b.height,y=0,C=r.reduce((W,_)=>W+_.before.length+_.lines.length+_.after.length,0);if(C+=t.beforeBody.length+t.afterBody.length,x&&(j+=x*p.lineHeight+(x-1)*e.titleSpacing+e.titleMarginBottom),C){const W=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;j+=w*W+(C-w)*h.lineHeight+(C-1)*e.bodySpacing}N&&(j+=e.footerMarginTop+N*m.lineHeight+(N-1)*e.footerSpacing);let R=0;const T=function(W){y=Math.max(y,s.measureText(W).width+R)};return s.save(),s.font=p.string,Fe(t.title,T),s.font=h.string,Fe(t.beforeBody.concat(t.afterBody),T),R=e.displayColors?c+2+e.boxPadding:0,Fe(r,W=>{Fe(W.before,T),Fe(W.lines,T),Fe(W.after,T)}),R=0,s.font=m.string,Fe(t.footer,T),s.restore(),y+=b.width,{width:y,height:j}}function n_(t,e){const{y:s,height:r}=e;return s<r/2?"top":s>t.height-r/2?"bottom":"center"}function i_(t,e,s,r){const{x:l,width:o}=r,c=s.caretSize+s.caretPadding;if(t==="left"&&l+o+c>e.width||t==="right"&&l-o-c<0)return!0}function r_(t,e,s,r){const{x:l,width:o}=s,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return r==="center"?p=l<=(u+h)/2?"left":"right":l<=o/2?p="left":l>=c-o/2&&(p="right"),i_(p,t,e,s)&&(p="center"),p}function Fm(t,e,s){const r=s.yAlign||e.yAlign||n_(t,s);return{xAlign:s.xAlign||e.xAlign||r_(t,e,s,r),yAlign:r}}function a_(t,e){let{x:s,width:r}=t;return e==="right"?s-=r:e==="center"&&(s-=r/2),s}function l_(t,e,s){let{y:r,height:l}=t;return e==="top"?r+=s:e==="bottom"?r-=l+s:r-=l/2,r}function Bm(t,e,s,r){const{caretSize:l,caretPadding:o,cornerRadius:c}=t,{xAlign:u,yAlign:h}=s,p=l+o,{topLeft:m,topRight:x,bottomLeft:N,bottomRight:w}=Fi(c);let b=a_(e,u);const j=l_(e,h,p);return h==="center"?u==="left"?b+=p:u==="right"&&(b-=p):u==="left"?b-=Math.max(m,N)+l:u==="right"&&(b+=Math.max(x,w)+l),{x:Nt(b,0,r.width-e.width),y:Nt(j,0,r.height-e.height)}}function Ol(t,e,s){const r=ns(s.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function $m(t){return Cs([],Us(t))}function o_(t,e,s){return li(t,{tooltip:e,tooltipItems:s,type:"tooltip"})}function Wm(t,e){const s=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return s?t.override(s):t}const Lx={beforeTitle:$s,title(t){if(t.length>0){const e=t[0],s=e.chart.data.labels,r=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return s[e.dataIndex]}return""},afterTitle:$s,beforeBody:$s,beforeLabel:$s,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const s=t.formattedValue;return Oe(s)||(e+=s),e},labelColor(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:$s,afterBody:$s,beforeFooter:$s,footer:$s,afterFooter:$s};function Lt(t,e,s,r){const l=t[e].call(s,r);return typeof l>"u"?Lx[e].call(s,r):l}class Hd extends gs{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const s=this.chart,r=this.options.setContext(this.getContext()),l=r.enabled&&s.options.animation&&r.animations,o=new fx(this.chart,l);return l._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=o_(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,s){const{callbacks:r}=s,l=Lt(r,"beforeTitle",this,e),o=Lt(r,"title",this,e),c=Lt(r,"afterTitle",this,e);let u=[];return u=Cs(u,Us(l)),u=Cs(u,Us(o)),u=Cs(u,Us(c)),u}getBeforeBody(e,s){return $m(Lt(s.callbacks,"beforeBody",this,e))}getBody(e,s){const{callbacks:r}=s,l=[];return Fe(e,o=>{const c={before:[],lines:[],after:[]},u=Wm(r,o);Cs(c.before,Us(Lt(u,"beforeLabel",this,o))),Cs(c.lines,Lt(u,"label",this,o)),Cs(c.after,Us(Lt(u,"afterLabel",this,o))),l.push(c)}),l}getAfterBody(e,s){return $m(Lt(s.callbacks,"afterBody",this,e))}getFooter(e,s){const{callbacks:r}=s,l=Lt(r,"beforeFooter",this,e),o=Lt(r,"footer",this,e),c=Lt(r,"afterFooter",this,e);let u=[];return u=Cs(u,Us(l)),u=Cs(u,Us(o)),u=Cs(u,Us(c)),u}_createItems(e){const s=this._active,r=this.chart.data,l=[],o=[],c=[];let u=[],h,p;for(h=0,p=s.length;h<p;++h)u.push(s_(this.chart,s[h]));return e.filter&&(u=u.filter((m,x,N)=>e.filter(m,x,N,r))),e.itemSort&&(u=u.sort((m,x)=>e.itemSort(m,x,r))),Fe(u,m=>{const x=Wm(e.callbacks,m);l.push(Lt(x,"labelColor",this,m)),o.push(Lt(x,"labelPointStyle",this,m)),c.push(Lt(x,"labelTextColor",this,m))}),this.labelColors=l,this.labelPointStyles=o,this.labelTextColors=c,this.dataPoints=u,u}update(e,s){const r=this.options.setContext(this.getContext()),l=this._active;let o,c=[];if(!l.length)this.opacity!==0&&(o={opacity:0});else{const u=Hr[r.position].call(this,l,this._eventPosition);c=this._createItems(r),this.title=this.getTitle(c,r),this.beforeBody=this.getBeforeBody(c,r),this.body=this.getBody(c,r),this.afterBody=this.getAfterBody(c,r),this.footer=this.getFooter(c,r);const h=this._size=Im(this,r),p=Object.assign({},u,h),m=Fm(this.chart,r,p),x=Bm(r,p,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,o={opacity:1,x:x.x,y:x.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(e,s,r,l){const o=this.getCaretPosition(e,r,l);s.lineTo(o.x1,o.y1),s.lineTo(o.x2,o.y2),s.lineTo(o.x3,o.y3)}getCaretPosition(e,s,r){const{xAlign:l,yAlign:o}=this,{caretSize:c,cornerRadius:u}=r,{topLeft:h,topRight:p,bottomLeft:m,bottomRight:x}=Fi(u),{x:N,y:w}=e,{width:b,height:j}=s;let y,C,R,T,W,_;return o==="center"?(W=w+j/2,l==="left"?(y=N,C=y-c,T=W+c,_=W-c):(y=N+b,C=y+c,T=W-c,_=W+c),R=y):(l==="left"?C=N+Math.max(h,m)+c:l==="right"?C=N+b-Math.max(p,x)-c:C=this.caretX,o==="top"?(T=w,W=T-c,y=C-c,R=C+c):(T=w+j,W=T+c,y=C+c,R=C-c),_=T),{x1:y,x2:C,x3:R,y1:T,y2:W,y3:_}}drawTitle(e,s,r){const l=this.title,o=l.length;let c,u,h;if(o){const p=Bi(r.rtl,this.x,this.width);for(e.x=Ol(this,r.titleAlign,r),s.textAlign=p.textAlign(r.titleAlign),s.textBaseline="middle",c=wt(r.titleFont),u=r.titleSpacing,s.fillStyle=r.titleColor,s.font=c.string,h=0;h<o;++h)s.fillText(l[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===o&&(e.y+=r.titleMarginBottom-u)}}_drawColorBox(e,s,r,l,o){const c=this.labelColors[r],u=this.labelPointStyles[r],{boxHeight:h,boxWidth:p}=o,m=wt(o.bodyFont),x=Ol(this,"left",o),N=l.x(x),w=h<m.lineHeight?(m.lineHeight-h)/2:0,b=s.y+w;if(o.usePointStyle){const j={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=l.leftForLtr(N,p)+p/2,C=b+h/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,Fd(e,j,y,C),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Fd(e,j,y,C)}else{e.lineWidth=De(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const j=l.leftForLtr(N,p),y=l.leftForLtr(l.xPlus(N,1),p-2),C=Fi(c.borderRadius);Object.values(C).some(R=>R!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,eo(e,{x:j,y:b,w:p,h,radius:C}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),eo(e,{x:y,y:b+1,w:p-2,h:h-2,radius:C}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(j,b,p,h),e.strokeRect(j,b,p,h),e.fillStyle=c.backgroundColor,e.fillRect(y,b+1,p-2,h-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,s,r){const{body:l}=this,{bodySpacing:o,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:m}=r,x=wt(r.bodyFont);let N=x.lineHeight,w=0;const b=Bi(r.rtl,this.x,this.width),j=function(P){s.fillText(P,b.x(e.x+w),e.y+N/2),e.y+=N+o},y=b.textAlign(c);let C,R,T,W,_,H,L;for(s.textAlign=c,s.textBaseline="middle",s.font=x.string,e.x=Ol(this,y,r),s.fillStyle=r.bodyColor,Fe(this.beforeBody,j),w=u&&y!=="right"?c==="center"?p/2+m:p+2+m:0,W=0,H=l.length;W<H;++W){for(C=l[W],R=this.labelTextColors[W],s.fillStyle=R,Fe(C.before,j),T=C.lines,u&&T.length&&(this._drawColorBox(s,e,W,b,r),N=Math.max(x.lineHeight,h)),_=0,L=T.length;_<L;++_)j(T[_]),N=x.lineHeight;Fe(C.after,j)}w=0,N=x.lineHeight,Fe(this.afterBody,j),e.y-=o}drawFooter(e,s,r){const l=this.footer,o=l.length;let c,u;if(o){const h=Bi(r.rtl,this.x,this.width);for(e.x=Ol(this,r.footerAlign,r),e.y+=r.footerMarginTop,s.textAlign=h.textAlign(r.footerAlign),s.textBaseline="middle",c=wt(r.footerFont),s.fillStyle=r.footerColor,s.font=c.string,u=0;u<o;++u)s.fillText(l[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+r.footerSpacing}}drawBackground(e,s,r,l){const{xAlign:o,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:m}=r,{topLeft:x,topRight:N,bottomLeft:w,bottomRight:b}=Fi(l.cornerRadius);s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=l.borderWidth,s.beginPath(),s.moveTo(u+x,h),c==="top"&&this.drawCaret(e,s,r,l),s.lineTo(u+p-N,h),s.quadraticCurveTo(u+p,h,u+p,h+N),c==="center"&&o==="right"&&this.drawCaret(e,s,r,l),s.lineTo(u+p,h+m-b),s.quadraticCurveTo(u+p,h+m,u+p-b,h+m),c==="bottom"&&this.drawCaret(e,s,r,l),s.lineTo(u+w,h+m),s.quadraticCurveTo(u,h+m,u,h+m-w),c==="center"&&o==="left"&&this.drawCaret(e,s,r,l),s.lineTo(u,h+x),s.quadraticCurveTo(u,h,u+x,h),s.closePath(),s.fill(),l.borderWidth>0&&s.stroke()}_updateAnimationTarget(e){const s=this.chart,r=this.$animations,l=r&&r.x,o=r&&r.y;if(l||o){const c=Hr[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Im(this,e),h=Object.assign({},c,this._size),p=Fm(s,e,h),m=Bm(e,h,p,s);(l._to!==m.x||o._to!==m.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(e){const s=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(s);const l={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const c=ns(s.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&u&&(e.save(),e.globalAlpha=r,this.drawBackground(o,e,l,s),lx(e,s.textDirection),o.y+=c.top,this.drawTitle(o,e,s),this.drawBody(o,e,s),this.drawFooter(o,e,s),ox(e,s.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,s){const r=this._active,l=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),o=!Gl(r,l),c=this._positionChanged(l,s);(o||c)&&(this._active=l,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,s,r=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const l=this.options,o=this._active||[],c=this._getActiveElements(e,o,s,r),u=this._positionChanged(c,e),h=s||!Gl(c,o)||u;return h&&(this._active=c,(l.enabled||l.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,s))),h}_getActiveElements(e,s,r,l){const o=this.options;if(e.type==="mouseout")return[];if(!l)return s.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,o.mode,o,r);return o.reverse&&c.reverse(),c}_positionChanged(e,s){const{caretX:r,caretY:l,options:o}=this,c=Hr[o.position].call(this,e,s);return c!==!1&&(r!==c.x||l!==c.y)}}be(Hd,"positioners",Hr);var Ox={id:"tooltip",_element:Hd,positioners:Hr,afterInit(t,e,s){s&&(t.tooltip=new Hd({chart:t,options:s}))},beforeUpdate(t,e,s){t.tooltip&&t.tooltip.initialize(s)},reset(t,e,s){t.tooltip&&t.tooltip.initialize(s)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const s={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",s)}},afterEvent(t,e){if(t.tooltip){const s=e.replay;t.tooltip.handleEvent(e.event,s,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Lx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const c_=(t,e,s,r)=>(typeof e=="string"?(s=t.push(e)-1,r.unshift({index:s,label:e})):isNaN(e)&&(s=null),s);function d_(t,e,s,r){const l=t.indexOf(e);if(l===-1)return c_(t,e,s,r);const o=t.lastIndexOf(e);return l!==o?s:l}const u_=(t,e)=>t===null?null:Nt(Math.round(t),0,e);function Um(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class io extends qi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const s=this._addedLabels;if(s.length){const r=this.getLabels();for(const{index:l,label:o}of s)r[l]===o&&r.splice(l,1);this._addedLabels=[]}super.init(e)}parse(e,s){if(Oe(e))return null;const r=this.getLabels();return s=isFinite(s)&&r[s]===e?s:d_(r,e,Ce(s,e),this._addedLabels),u_(s,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:l}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),s||(l=this.getLabels().length-1)),this.min=r,this.max=l}buildTicks(){const e=this.min,s=this.max,r=this.options.offset,l=[];let o=this.getLabels();o=e===0&&s===o.length-1?o:o.slice(e,s+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let c=e;c<=s;c++)l.push({value:c});return l}getLabelForValue(e){return Um.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}be(io,"id","category"),be(io,"defaults",{ticks:{callback:Um}});function h_(t,e){const s=[],{bounds:l,step:o,min:c,max:u,precision:h,count:p,maxTicks:m,maxDigits:x,includeBounds:N}=t,w=o||1,b=m-1,{min:j,max:y}=e,C=!Oe(c),R=!Oe(u),T=!Oe(p),W=(y-j)/(x+1);let _=Bp((y-j)/b/w)*w,H,L,P,A;if(_<1e-14&&!C&&!R)return[{value:j},{value:y}];A=Math.ceil(y/_)-Math.floor(j/_),A>b&&(_=Bp(A*_/b/w)*w),Oe(h)||(H=Math.pow(10,h),_=Math.ceil(_*H)/H),l==="ticks"?(L=Math.floor(j/_)*_,P=Math.ceil(y/_)*_):(L=j,P=y),C&&R&&o&&yN((u-c)/o,_/1e3)?(A=Math.round(Math.min((u-c)/_,m)),_=(u-c)/A,L=c,P=u):T?(L=C?c:L,P=R?u:P,A=p-1,_=(P-L)/A):(A=(P-L)/_,qr(A,Math.round(A),_/1e3)?A=Math.round(A):A=Math.ceil(A));const K=Math.max($p(_),$p(L));H=Math.pow(10,Oe(h)?K:h),L=Math.round(L*H)/H,P=Math.round(P*H)/H;let q=0;for(C&&(N&&L!==c?(s.push({value:c}),L<c&&q++,qr(Math.round((L+q*_)*H)/H,c,Hm(c,W,t))&&q++):L<c&&q++);q<A;++q){const I=Math.round((L+q*_)*H)/H;if(R&&I>u)break;s.push({value:I})}return R&&N&&P!==u?s.length&&qr(s[s.length-1].value,u,Hm(u,W,t))?s[s.length-1].value=u:s.push({value:u}):(!R||P===u)&&s.push({value:P}),s}function Hm(t,e,{horizontal:s,minRotation:r}){const l=Vs(r),o=(s?Math.sin(l):Math.cos(l))||.001,c=.75*e*(""+t).length;return Math.min(e/o,c)}class f_ extends qi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,s){return Oe(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:s,maxDefined:r}=this.getUserBounds();let{min:l,max:o}=this;const c=h=>l=s?l:h,u=h=>o=r?o:h;if(e){const h=Rs(l),p=Rs(o);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(l===o){let h=o===0?1:Math.abs(o*.05);u(o+h),e||c(l-h)}this.min=l,this.max=o}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:s,stepSize:r}=e,l;return r?(l=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,l>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${l} ticks. Limiting to 1000.`),l=1e3)):(l=this.computeTickLimit(),s=s||11),s&&(l=Math.min(s,l)),l}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,s=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const l={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},o=this._range||this,c=h_(l,o);return e.bounds==="ticks"&&bN(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let s=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const l=(r-s)/Math.max(e.length-1,1)/2;s-=l,r+=l}this._startValue=s,this._endValue=r,this._valueRange=r-s}getLabelForValue(e){return ou(e,this.chart.options.locale,this.options.ticks.format)}}class ro extends f_{determineDataLimits(){const{min:e,max:s}=this.getMinMax(!0);this.min=kt(e)?e:0,this.max=kt(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),s=e?this.width:this.height,r=Vs(this.options.ticks.minRotation),l=(e?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,o.lineHeight/l))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}be(ro,"id","linear"),be(ro,"defaults",{ticks:{callback:Zg.formatters.numeric}});const yo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ot=Object.keys(yo);function Vm(t,e){return t-e}function qm(t,e){if(Oe(e))return null;const s=t._adapter,{parser:r,round:l,isoWeekday:o}=t._parseOpts;let c=e;return typeof r=="function"&&(c=r(c)),kt(c)||(c=typeof r=="string"?s.parse(c,r):s.parse(c)),c===null?null:(l&&(c=l==="week"&&(ta(o)||o===!0)?s.startOf(c,"isoWeek",o):s.startOf(c,l)),+c)}function Ym(t,e,s,r){const l=Ot.length;for(let o=Ot.indexOf(t);o<l-1;++o){const c=yo[Ot[o]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((s-e)/(u*c.size))<=r)return Ot[o]}return Ot[l-1]}function p_(t,e,s,r,l){for(let o=Ot.length-1;o>=Ot.indexOf(s);o--){const c=Ot[o];if(yo[c].common&&t._adapter.diff(l,r,c)>=e-1)return c}return Ot[s?Ot.indexOf(s):0]}function m_(t){for(let e=Ot.indexOf(t)+1,s=Ot.length;e<s;++e)if(yo[Ot[e]].common)return Ot[e]}function Qm(t,e,s){if(!s)t[e]=!0;else if(s.length){const{lo:r,hi:l}=ru(s,e),o=s[r]>=e?s[r]:s[l];t[o]=!0}}function g_(t,e,s,r){const l=t._adapter,o=+l.startOf(e[0].value,r),c=e[e.length-1].value;let u,h;for(u=o;u<=c;u=+l.add(u,1,r))h=s[u],h>=0&&(e[h].major=!0);return e}function Km(t,e,s){const r=[],l={},o=e.length;let c,u;for(c=0;c<o;++c)u=e[c],l[u]=c,r.push({value:u,major:!1});return o===0||!s?r:g_(t,r,l,s)}class ao extends qi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,s={}){const r=e.time||(e.time={}),l=this._adapter=new sw._date(e.adapters.date);l.init(s),Vr(r.displayFormats,l.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=s.normalized}parse(e,s){return e===void 0?null:qm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,s=this._adapter,r=e.time.unit||"day";let{min:l,max:o,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(l=Math.min(l,p.min)),!u&&!isNaN(p.max)&&(o=Math.max(o,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),l=kt(l)&&!isNaN(l)?l:+s.startOf(Date.now(),r),o=kt(o)&&!isNaN(o)?o:+s.endOf(Date.now(),r)+1,this.min=Math.min(l,o-1),this.max=Math.max(l+1,o)}_getLabelBounds(){const e=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(s=e[0],r=e[e.length-1]),{min:s,max:r}}buildTicks(){const e=this.options,s=e.time,r=e.ticks,l=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&l.length&&(this.min=this._userMin||l[0],this.max=this._userMax||l[l.length-1]);const o=this.min,c=this.max,u=_N(l,o,c);return this._unit=s.unit||(r.autoSkip?Ym(s.minUnit,this.min,this.max,this._getLabelCapacity(o)):p_(this,u.length,s.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:m_(this._unit),this.initOffsets(l),e.reverse&&u.reverse(),Km(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let s=0,r=0,l,o;this.options.offset&&e.length&&(l=this.getDecimalForValue(e[0]),e.length===1?s=1-l:s=(this.getDecimalForValue(e[1])-l)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?r=o:r=(o-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;s=Nt(s,0,c),r=Nt(r,0,c),this._offsets={start:s,end:r,factor:1/(s+1+r)}}_generate(){const e=this._adapter,s=this.min,r=this.max,l=this.options,o=l.time,c=o.unit||Ym(o.minUnit,s,r,this._getLabelCapacity(s)),u=Ce(l.ticks.stepSize,1),h=c==="week"?o.isoWeekday:!1,p=ta(h)||h===!0,m={};let x=s,N,w;if(p&&(x=+e.startOf(x,"isoWeek",h)),x=+e.startOf(x,p?"day":c),e.diff(r,s,c)>1e5*u)throw new Error(s+" and "+r+" are too far apart with stepSize of "+u+" "+c);const b=l.ticks.source==="data"&&this.getDataTimestamps();for(N=x,w=0;N<r;N=+e.add(N,u,c),w++)Qm(m,N,b);return(N===r||l.bounds==="ticks"||w===1)&&Qm(m,N,b),Object.keys(m).sort(Vm).map(j=>+j)}getLabelForValue(e){const s=this._adapter,r=this.options.time;return r.tooltipFormat?s.format(e,r.tooltipFormat):s.format(e,r.displayFormats.datetime)}format(e,s){const l=this.options.time.displayFormats,o=this._unit,c=s||l[o];return this._adapter.format(e,c)}_tickFormatFunction(e,s,r,l){const o=this.options,c=o.ticks.callback;if(c)return He(c,[e,s,r],this);const u=o.time.displayFormats,h=this._unit,p=this._majorUnit,m=h&&u[h],x=p&&u[p],N=r[s],w=p&&x&&N&&N.major;return this._adapter.format(e,l||(w?x:m))}generateTickLabels(e){let s,r,l;for(s=0,r=e.length;s<r;++s)l=e[s],l.label=this._tickFormatFunction(l.value,s,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const s=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((s.start+r)*s.factor)}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const s=this.options.ticks,r=this.ctx.measureText(e).width,l=Vs(this.isHorizontal()?s.maxRotation:s.minRotation),o=Math.cos(l),c=Math.sin(l),u=this._resolveTickFontOptions(0).size;return{w:r*o+u*c,h:r*c+u*o}}_getLabelCapacity(e){const s=this.options.time,r=s.displayFormats,l=r[s.unit]||r.millisecond,o=this._tickFormatFunction(e,0,Km(this,[e],this._majorUnit),l),c=this._getLabelSize(o),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],s,r;if(e.length)return e;const l=this.getMatchingVisibleMetas();if(this._normalized&&l.length)return this._cache.data=l[0].controller.getAllParsedValues(this);for(s=0,r=l.length;s<r;++s)e=e.concat(l[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let s,r;if(e.length)return e;const l=this.getLabels();for(s=0,r=l.length;s<r;++s)e.push(qm(this,l[s]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Xg(e.sort(Vm))}}be(ao,"id","time"),be(ao,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function zl(t,e,s){let r=0,l=t.length-1,o,c,u,h;s?(e>=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=Zn(t,"pos",e)),{pos:o,time:u}=t[r],{pos:c,time:h}=t[l]):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=Zn(t,"time",e)),{time:o,pos:u}=t[r],{time:c,pos:h}=t[l]);const p=c-o;return p?u+(h-u)*(e-o)/p:u}class Xm extends ao{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(e);this._minPos=zl(s,this.min),this._tableRange=zl(s,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:s,max:r}=this,l=[],o=[];let c,u,h,p,m;for(c=0,u=e.length;c<u;++c)p=e[c],p>=s&&p<=r&&l.push(p);if(l.length<2)return[{time:s,pos:0},{time:r,pos:1}];for(c=0,u=l.length;c<u;++c)m=l[c+1],h=l[c-1],p=l[c],Math.round((m+h)/2)!==p&&o.push({time:p,pos:c/(u-1)});return o}_generate(){const e=this.min,s=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(s)||r.length===1)&&r.push(s),r.sort((l,o)=>l-o)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const s=this.getDataTimestamps(),r=this.getLabelTimestamps();return s.length&&r.length?e=this.normalize(s.concat(r)):e=s.length?s:r,e=this._cache.all=e,e}getDecimalForValue(e){return(zl(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return zl(this._table,r*this._tableRange+this._minPos,!0)}}be(Xm,"id","timeseries"),be(Xm,"defaults",ao.defaults);const zx="label";function Gm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function x_(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function Ix(t,e){t.labels=e}function Fx(t,e,s=zx){const r=[];t.datasets=e.map(l=>{const o=t.datasets.find(c=>c[s]===l[s]);return!o||!l.data||r.includes(o)?{...l}:(r.push(o),Object.assign(o,l),o)})}function v_(t,e=zx){const s={labels:[],datasets:[]};return Ix(s,t.labels),Fx(s,t.datasets,e),s}function y_(t,e){const{height:s=150,width:r=300,redraw:l=!1,datasetIdKey:o,type:c,data:u,options:h,plugins:p=[],fallbackContent:m,updateMode:x,...N}=t,w=E.useRef(null),b=E.useRef(null),j=()=>{w.current&&(b.current=new pa(w.current,{type:c,data:v_(u,o),options:h&&{...h},plugins:p}),Gm(e,b.current))},y=()=>{Gm(e,null),b.current&&(b.current.destroy(),b.current=null)};return E.useEffect(()=>{!l&&b.current&&h&&x_(b.current,h)},[l,h]),E.useEffect(()=>{!l&&b.current&&Ix(b.current.config.data,u.labels)},[l,u.labels]),E.useEffect(()=>{!l&&b.current&&u.datasets&&Fx(b.current.config.data,u.datasets,o)},[l,u.datasets]),E.useEffect(()=>{b.current&&(l?(y(),setTimeout(j)):b.current.update(x))},[l,h,u.labels,u.datasets,x]),E.useEffect(()=>{b.current&&(y(),setTimeout(j))},[c]),E.useEffect(()=>(j(),()=>y()),[]),n.jsx("canvas",{ref:w,role:"img",height:s,width:r,...N,children:m})}const b_=E.forwardRef(y_);function gu(t,e){return pa.register(e),E.forwardRef((s,r)=>n.jsx(b_,{...s,ref:r,type:t}))}const Vd=gu("line",Vl),j_=gu("bar",Hl),N_=gu("doughnut",$r);pa.register(io,ro,Kr,Ys,Ql,Ur,Mx,Ox,Ax,Dx);function w_(){var C,R,T,W,_,H,L,P,A;const{t}=st(),e=Qs(),[s,r]=E.useState(null),[l,o]=E.useState(null),[c,u]=E.useState(null),[h,p]=E.useState(!0);if(E.useEffect(()=>{Promise.all([ms.stats(),Ld.get(24),$g.getCollectionStats()]).then(([K,q,I])=>{var z,B;r(K.data);const $=24,U=[],X=[],k=[];for(let te=$-1;te>=0;te--){const se=new Date;se.setHours(se.getHours()-te),U.push(se.getHours()+":00");const M=new Date(se);M.setMinutes(0,0,0);const Z=new Date(se);Z.setMinutes(59,59,999);const ue=((z=q.data.entries)==null?void 0:z.filter(Ne=>{const ee=new Date(Ne.timestamp);return Ne.type==="event"&&ee>=M&&ee<=Z}).length)||0,pe=((B=q.data.entries)==null?void 0:B.filter(Ne=>{const ee=new Date(Ne.timestamp);return Ne.type==="alert"&&ee>=M&&ee<=Z}).length)||0;X.push(ue),k.push(pe)}o({labels:U,events:X,alerts:k}),u(I.data),p(!1)}).catch(()=>{r({total:0,by_severity:{},by_status:{}}),o({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return n.jsx("div",{className:"dashboard",children:n.jsxs("div",{className:"dashboard-loading",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})});const m=s!=null&&s.by_type?Object.entries(s.by_type).sort((K,q)=>q[1]-K[1]).slice(0,5):[],x={labels:(l==null?void 0:l.labels)||[],datasets:[{label:t("dashboard.events"),data:(l==null?void 0:l.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(l==null?void 0:l.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},N={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:m.map(([K])=>K),datasets:[{data:m.map(([,K])=>K),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},j={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((C=s==null?void 0:s.by_severity)==null?void 0:C.critical)||0,((R=s==null?void 0:s.by_severity)==null?void 0:R.high)||0,((T=s==null?void 0:s.by_severity)==null?void 0:T.medium)||0,((W=s==null?void 0:s.by_severity)==null?void 0:W.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return n.jsxs("div",{className:"dashboard",children:[n.jsxs("div",{className:"dashboard-header",children:[n.jsx("h2",{children:t("dashboard.title")}),n.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),n.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((_=s==null?void 0:s.by_severity)==null?void 0:_.critical)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((H=s==null?void 0:s.by_severity)==null?void 0:H.high)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[n.jsx("div",{className:"stat-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((L=s==null?void 0:s.by_severity)==null?void 0:L.medium)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((P=s==null?void 0:s.by_severity)==null?void 0:P.low)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),n.jsx("div",{className:"stat-glow"})]})]}),n.jsxs("div",{className:"dashboard-grid",children:[n.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.eventTrend")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),n.jsx("div",{className:"chart-body",children:n.jsx(Vd,{data:x,options:N})})]}),n.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.topAlertTypes")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),n.jsx("div",{className:"chart-body",children:m.length>0?n.jsx(N_,{data:w,options:b}):n.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),n.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.bySeverity")})}),n.jsx("div",{className:"chart-body",children:n.jsx(j_,{data:j,options:y})})]}),n.jsxs("div",{className:"chart-card chart-collection",children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.collectionStatus")})}),n.jsxs("div",{className:"chart-body collection-stats",children:[n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),n.jsx("span",{className:"collection-value",children:((A=c==null?void 0:c.total_events)==null?void 0:A.toLocaleString())||0})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),n.jsxs("div",{className:"collection-sources",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),n.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(K=>n.jsx("span",{className:"source-tag",children:K},K))})]})]})]})]}),n.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("dashboard.recentAlerts")}),n.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),n.jsx("div",{className:"recent-alerts-list",children:s&&s.total>0?n.jsxs("div",{className:"alert-preview",children:[n.jsx("div",{className:"alert-count-badge",children:s.total}),n.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):n.jsxs("div",{className:"no-alerts",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),n.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function k_(){var En;const t=la(),[e,s]=E.useState([]),[r,l]=E.useState(!0),[o,c]=E.useState(1),[u,h]=E.useState(50),[p,m]=E.useState(""),[x,N]=E.useState(1),[w,b]=E.useState(0),[j,y]=E.useState(!1),[C,R]=E.useState(!1),[T,W]=E.useState(0),[_,H]=E.useState(!1),[L,P]=E.useState([]),[A,K]=E.useState(!1),[q,I]=E.useState("timestamp"),[$,U]=E.useState("desc"),[X,k]=E.useState(""),[z,B]=E.useState(""),[te,se]=E.useState(""),[M,Z]=E.useState(""),[ue,pe]=E.useState(null),[Ne,ee]=E.useState({x:0,y:0}),[ce,fe]=E.useState("AND"),[Ee,Me]=E.useState([]),[Vt,vs]=E.useState(!1),[xe,qt]=E.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4});E.useEffect(()=>{const re=new URLSearchParams(t.search),de=re.get("event_ids"),Pe=re.get("keywords");(de||Pe)&&(R(!0),qt(nt=>({...nt,event_ids:de?de.split(",").map(as=>parseInt(as.trim(),10)).filter(as=>!isNaN(as)):[],keywords:Pe||""})),de&&Z(de))},[t.search]);const oi=(re=1)=>{l(!0);const de={Critical:1,Error:2,Warning:3,Info:4,Debug:5},Pe=M.split(",").map(ze=>parseInt(ze.trim(),10)).filter(ze=>!isNaN(ze)),nt=X.split(",").map(ze=>ze.trim()).filter(ze=>ze.length>0),as=z.split(",").map(ze=>ze.trim()).filter(ze=>ze.length>0),ys=te.split(",").map(ze=>ze.trim()).filter(ze=>ze.length>0),Ds={keywords:(xe==null?void 0:xe.keywords)||"",keyword_mode:ce,regex:A,page:re,page_size:u,sort_by:q,sort_order:$,start_time:(xe==null?void 0:xe.start_time)||void 0,end_time:(xe==null?void 0:xe.end_time)||void 0,levels:L.map(ze=>de[ze]).filter(ze=>ze),event_ids:Pe.length>0?Pe:void 0,log_names:xe!=null&&xe.log_names&&xe.log_names.length>0?xe.log_names:void 0,sources:nt.length>0?nt:void 0,users:as.length>0?as:void 0,computers:ys.length>0?ys:void 0};Qn.search(Ds).then(ze=>{const Et=ze.data;s(Et.events||[]),b(Et.total||0);const Rn=Math.ceil((Et.total||0)/u);N(Rn||1),W(Et.query_time_ms||0),R(!0),l(!1)}).catch(()=>{Qn.list(re,u).then(ze=>{const Et=ze.data;s(Et.events||[]),b(Et.total||0),N(Et.total_pages||1),R(!1),l(!1)}).catch(()=>l(!1))})},Ks=()=>{c(1),oi(1)},_n=()=>{qt({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),P([]),K(!1),I("timestamp"),U("desc"),k(""),B(""),se(""),Z(""),R(!1),fe("AND"),c(1)};E.useEffect(()=>{l(!0);const re=xe&&(xe.log_names&&xe.log_names.length>0||xe.levels&&xe.levels.length>0||xe.event_ids&&xe.event_ids.length>0||xe.start_time||xe.end_time);xe!=null&&xe.keywords&&xe.keywords.trim()!==""?Qn.search({keywords:xe.keywords,keyword_mode:ce,regex:A,page:o,page_size:u,sort_by:q,sort_order:$,levels:L.map(de=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[de]||0).filter(de=>de>0),start_time:xe.start_time,end_time:xe.end_time}).then(de=>{const Pe=de.data;s(Pe.events||[]),b(Pe.total||0);const nt=Math.ceil((Pe.total||0)/u);N(nt||1),l(!1)}).catch(()=>l(!1)):re?Qn.list(o,u,{log_names:xe.log_names,levels:xe.levels,event_ids:xe.event_ids,start_time:xe.start_time,end_time:xe.end_time,sort_by:q,sort_order:$}).then(de=>{const Pe=de.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),l(!1)}).catch(()=>l(!1)):Qn.list(o,u,{sort_by:q,sort_order:$}).then(de=>{const Pe=de.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),l(!1)}).catch(()=>l(!1))},[o,xe,q,$,u,L,ce,A]);const ci=re=>{h(re),c(1)},Sn=re=>{re.preventDefault();const de=parseInt(p,10);!isNaN(de)&&de>=1&&de<=x&&(c(de),m(""))};E.useEffect(()=>{$g.getLogNames().then(re=>{const de=re.data;Me(de.log_names||[])}).catch(()=>{})},[]);const is=async re=>{y(!0);try{const de=await Qn.export({format:re,filters:xe});if(re==="json"){const Pe=new Blob([JSON.stringify(de.data,null,2)],{type:"application/json"});rs(Pe,`events_export.${re}`)}else{const Pe=new Blob([de.data],{type:re==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});rs(Pe,`events_export.${re==="excel"?"xlsx":re}`)}}catch(de){console.error("Export failed:",de)}finally{y(!1)}},rs=(re,de)=>{const Pe=URL.createObjectURL(re),nt=document.createElement("a");nt.href=Pe,nt.download=de,document.body.appendChild(nt),nt.click(),document.body.removeChild(nt),URL.revokeObjectURL(Pe)},Cn=re=>{const de=String(re).toLowerCase();return de==="1"||de==="critical"||de==="crit"?"level-critical":de==="2"||de==="error"?"level-error":de==="3"||de==="warning"||de==="warn"?"level-warning":de==="4"||de==="info"?"level-info":de==="5"||de==="debug"?"level-debug":""},di=re=>{const de=String(re);return de==="1"||de==="critical"?"Critical":de==="2"||de==="error"?"Error":de==="3"||de==="warning"||de==="warn"?"Warning":de==="4"||de==="info"?"Info":de==="5"||de==="debug"?"Debug":de};return n.jsxs("div",{className:"events-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Events"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>H(!_),children:_?"Hide Filters":"Show Filters"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>is("csv"),children:"CSV"}),n.jsx("button",{onClick:()=>is("json"),children:"JSON"}),n.jsx("button",{onClick:()=>is("excel"),children:"Excel"})]})]})]})]}),n.jsxs("div",{className:"search-bar",children:[n.jsxs("div",{className:"search-input-wrapper",children:[n.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(xe==null?void 0:xe.keywords)||"",onChange:re=>qt({...xe,keywords:re.target.value}),onKeyDown:re=>re.key==="Enter"&&Ks()}),n.jsx("button",{className:"search-btn",onClick:Ks,children:"Search"})]}),n.jsxs("div",{className:"keyword-mode-toggle",children:[n.jsx("span",{className:"mode-label",children:"Keywords:"}),n.jsx("button",{className:`mode-btn ${ce==="AND"?"active":""}`,onClick:()=>fe("AND"),title:"All keywords must match",children:"AND"}),n.jsx("button",{className:`mode-btn ${ce==="OR"?"active":""}`,onClick:()=>fe("OR"),title:"Any keyword can match",children:"OR"})]})]}),_&&n.jsxs("div",{className:"filters-panel",children:[n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Start Time"}),n.jsx("input",{type:"datetime-local",value:(xe==null?void 0:xe.start_time)||"",onChange:re=>qt({...xe,start_time:re.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"End Time"}),n.jsx("input",{type:"datetime-local",value:(xe==null?void 0:xe.end_time)||"",onChange:re=>qt({...xe,end_time:re.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Event IDs"}),n.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:M,onChange:re=>Z(re.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Log Names"}),n.jsxs("select",{value:((En=xe==null?void 0:xe.log_names)==null?void 0:En[0])||"",onChange:re=>{const de=re.target.value;qt({...xe,log_names:de?[de]:[]})},className:"select-input",children:[n.jsx("option",{value:"",children:"All Log Names"}),Ee.map(re=>n.jsx("option",{value:re,children:re},re))]})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sources"}),n.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:X,onChange:re=>k(re.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Users"}),n.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:z,onChange:re=>B(re.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Computers"}),n.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:te,onChange:re=>se(re.target.value),className:"text-input"})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Level"}),n.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(re=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:L.includes(re),onChange:de=>{de.target.checked?P([...L,re]):P(L.filter(Pe=>Pe!==re))}}),re]},re))})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort By"}),n.jsxs("select",{value:q,onChange:re=>I(re.target.value),className:"select-input",children:[n.jsx("option",{value:"timestamp",children:"Timestamp"}),n.jsx("option",{value:"event_id",children:"Event ID"}),n.jsx("option",{value:"level",children:"Level"}),n.jsx("option",{value:"source",children:"Source"}),n.jsx("option",{value:"log_name",children:"Log Name"})]})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort Order"}),n.jsxs("select",{value:$,onChange:re=>U(re.target.value),className:"select-input",children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]}),n.jsx("div",{className:"filter-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:A,onChange:re=>K(re.target.checked)}),"Use Regex"]})})]}),n.jsxs("div",{className:"filter-actions",children:[n.jsx("button",{onClick:Ks,className:"btn-primary",children:"Apply Filters"}),C&&n.jsx("button",{onClick:_n,className:"btn-secondary",children:"Clear All"})]})]}),C&&n.jsxs("div",{className:"search-info",children:[n.jsxs("span",{className:"search-count",children:["Found ",n.jsx("strong",{children:w.toLocaleString()})," events"]}),T>0&&n.jsxs("span",{className:"query-time",children:["Query time: ",T,"ms"]})]}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:w.toLocaleString()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Current Page"}),n.jsxs("span",{className:"stat-value",children:[o," / ",x]})]})]}),r?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading events..."})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{children:"No events found"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"table-container",children:n.jsxs("table",{className:"events-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Time"}),n.jsx("th",{children:"Level"}),n.jsx("th",{children:"Event ID"}),n.jsx("th",{children:"Source"}),n.jsx("th",{children:"Computer"}),n.jsx("th",{children:"Message"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:e.map(re=>n.jsxs("tr",{children:[n.jsx("td",{className:"id-cell",children:re.id}),n.jsx("td",{className:"time-cell",children:new Date(re.timestamp).toLocaleString()}),n.jsx("td",{children:n.jsx("span",{className:`level-badge ${Cn(re.level)}`,children:di(re.level)})}),n.jsx("td",{className:"event-id",children:re.event_id}),n.jsxs("td",{className:"source-cell",title:re.source||"",children:[n.jsx("span",{className:"cell-content",children:re.source||"-"}),n.jsx("button",{className:"cell-btn",onClick:de=>{de.stopPropagation(),pe(re),ee({x:de.clientX-200,y:de.clientY+20})},title:"View details",children:"..."})]}),n.jsx("td",{className:"computer-cell",children:re.computer||"-"}),n.jsxs("td",{className:"message-cell",title:re.message||"",children:[n.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:re.message?re.message.length>50?re.message.substring(0,50)+"...":re.message:"-"}),n.jsx("button",{className:"cell-btn",onClick:de=>{de.stopPropagation(),pe(re),ee({x:de.clientX-200,y:de.clientY+20})},title:"View details",children:"..."})]}),n.jsxs("td",{className:"action-cell",children:[n.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(re,null,2))},title:"Copy all event data",children:"Copy"}),n.jsx("button",{className:"action-detail-btn",onClick:de=>{pe(re),ee({x:de.clientX-200,y:de.clientY+20})},title:"View details",children:"..."})]})]},re.id))})]})}),n.jsxs("div",{className:"pagination",children:[n.jsxs("div",{className:"page-size-selector",children:[n.jsx("span",{children:"Show:"}),n.jsxs("select",{value:u,onChange:re=>ci(Number(re.target.value)),className:"select-input",children:[n.jsx("option",{value:10,children:"10"}),n.jsx("option",{value:25,children:"25"}),n.jsx("option",{value:50,children:"50"}),n.jsx("option",{value:100,children:"100"}),n.jsx("option",{value:200,children:"200"})]}),n.jsx("span",{children:"per page"})]}),n.jsxs("div",{className:"page-nav",children:[n.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),n.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(re=>re-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),n.jsxs("form",{onSubmit:Sn,className:"page-input-form",children:[n.jsx("input",{type:"number",min:1,max:x,value:p,onChange:re=>m(re.target.value),placeholder:`1-${x}`,className:"page-input"}),n.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),n.jsxs("span",{className:"page-info",children:["Page ",n.jsx("strong",{children:o})," of ",n.jsx("strong",{children:x}),"(",w," total)"]}),n.jsx("button",{className:"page-btn",disabled:o>=x,onClick:()=>{c(re=>re+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),n.jsx("button",{className:"page-btn",disabled:o>=x,onClick:()=>{c(x),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),ue&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"message-float-panel",style:{left:Ne.x,top:Ne.y,position:"fixed"},children:[n.jsxs("div",{className:"float-panel-header",children:[n.jsx("span",{children:"Event Details"}),n.jsxs("div",{className:"float-panel-actions",children:[n.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ue,null,2))},children:"Copy"}),ue.raw_xml&&n.jsx("button",{className:"float-panel-formatted",onClick:()=>{const re=(()=>{try{return JSON.stringify(JSON.parse(ue.raw_xml),null,2)}catch{return ue.raw_xml||""}})();navigator.clipboard.writeText(re)},children:"Copy JSON"}),ue.raw_xml&&n.jsx("button",{className:"float-panel-view",onClick:()=>vs(!0),children:"View JSON"}),n.jsx("button",{className:"float-panel-close",onClick:()=>{pe(null),vs(!1)},children:"×"})]})]}),n.jsxs("div",{className:"float-panel-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"ID:"})," ",ue.id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Time:"})," ",new Date(ue.timestamp).toLocaleString()]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Level:"})," ",ue.level]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Event ID:"})," ",ue.event_id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Source:"})," ",ue.source||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Computer:"})," ",ue.computer||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Log Name:"})," ",ue.log_name]}),n.jsx("div",{style:{marginTop:"8px"},children:n.jsx("strong",{children:"Message:"})}),n.jsx("div",{children:ue.message||"-"})]})]}),Vt&&ue.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>vs(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:re=>re.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",ue.id]}),n.jsx("button",{className:"modal-close",onClick:()=>vs(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(ue.raw_xml),null,2)}catch{return ue.raw_xml}})()})})]})})]})]}),n.jsx("style",{children:`
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
      `})]})}function Bx({keyName:t,value:e,depth:s,isLast:r,collapsedPaths:l,onToggleCollapse:o}){const c="  ".repeat(s),u=t.startsWith("[")?t:`"${t}"`;if(e&&typeof e=="object"){const m=Array.isArray(e),x=m?e.map((j,y)=>({key:`[${y}]`,value:j})):Object.entries(e).map(([j,y])=>({key:j,value:y})),N=x.length===0,w=`${u}`,b=l.has(w);return N?n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[]":"{}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"json-line json-collapsible",onClick:()=>o(w),children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[":"{"}),n.jsx("span",{className:"json-collapse-hint",children:b?` ... ${x.length} items }`:""}),!r&&n.jsx("span",{className:"json-punct",children:","}),n.jsx("span",{className:"json-toggle",children:b?"▶":"▼"})]}),!b&&x.map((j,y)=>n.jsx(Bx,{keyName:j.key,value:j.value,depth:s+1,isLast:y===x.length-1,collapsedPaths:l,onToggleCollapse:o},j.key)),!b&&n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-punct",children:m?"]":"}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof e=="string"?`"${e}"`:String(e);return typeof e=="number"?h="json-number":typeof e=="boolean"?h="json-boolean":e===null&&(h="json-null"),n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:": "}),n.jsx("span",{className:h,children:p}),!r&&n.jsx("span",{className:"json-punct",children:","})]})}function __(t){return["Unknown","Critical","Error","Warning","Info"][t]||"Unknown"}function S_(){const{id:t}=hg(),[e,s]=E.useState(null),[r,l]=E.useState(!0),[o,c]=E.useState(new Set),[u,h]=E.useState(!1);E.useEffect(()=>{t&&(l(!0),Qn.get(Number(t)).then(b=>{s(b.data),l(!1)}).catch(()=>l(!1)))},[t]);const p=E.useCallback(b=>{c(j=>{const y=new Set(j);return y.has(b)?y.delete(b):y.add(b),y})},[]),m=()=>{c(new Set)},x=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=(C,R)=>{if(!C||typeof C!="object")return[];const T=[];return Array.isArray(C)?(C.length>3&&T.push(R),C.forEach((W,_)=>{T.push(...j(C[_],`${R}[${_}]`))})):Object.values(C).forEach((W,_)=>{const H=Object.keys(C)[_];T.push(...j(W,`${R}"${H}"`))}),T},y=j(b,"");c(new Set(y.filter(C=>C.includes("[")||!C.startsWith('"'))))}catch{}},N=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.stringify(JSON.parse(e.raw_xml),null,2);navigator.clipboard.writeText(b)}catch{navigator.clipboard.writeText(e.raw_xml)}};if(r)return n.jsx("div",{children:"Loading..."});if(!e)return n.jsx("div",{children:"Event not found"});let w=null;if(e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=Object.entries(b);w=j.map(([y,C],R)=>n.jsx(Bx,{keyName:y,value:C,depth:0,isLast:R===j.length-1,collapsedPaths:o,onToggleCollapse:p},y))}catch{w=n.jsx("pre",{className:"xml-box",children:e.raw_xml})}return n.jsxs("div",{className:"event-detail",children:[n.jsx(Ke,{to:"/events",children:"← Back to Events"}),n.jsxs("div",{className:"detail-panel",children:[n.jsxs("h3",{children:["Event #",e.id]}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-fields",children:[n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Timestamp:"}),n.jsx("span",{className:"field-value",children:new Date(e.timestamp).toLocaleString()})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Level:"}),n.jsx("span",{className:"field-value",children:__(e.level)})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Event ID:"}),n.jsx("span",{className:"field-value",children:e.event_id})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Source:"}),n.jsx("span",{className:"field-value",children:e.source})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Log Name:"}),n.jsx("span",{className:"field-value",children:e.log_name})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Computer:"}),n.jsx("span",{className:"field-value",children:e.computer})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User:"}),n.jsx("span",{className:"field-value",children:e.user||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User SID:"}),n.jsx("span",{className:"field-value",children:e.user_sid||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Session ID:"}),n.jsx("span",{className:"field-value",children:e.session_id||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"IP Address:"}),n.jsx("span",{className:"field-value",children:e.ip_address||"N/A"})]})]}),n.jsxs("div",{className:"detail-actions",children:[e.raw_xml&&n.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),e.raw_xml&&n.jsx("button",{className:"btn-action btn-copy",onClick:N,children:"Copy JSON"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"Message:"}),n.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"raw-json-header",children:[n.jsx("label",{children:"Raw JSON:"}),n.jsxs("div",{className:"raw-json-actions",children:[n.jsx("button",{className:"btn-small",onClick:m,children:"Expand All"}),n.jsx("button",{className:"btn-small",onClick:x,children:"Collapse All"})]})]}),n.jsx("div",{className:"json-tree",children:w})]})]}),u&&e.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:b=>b.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",e.id]}),n.jsxs("div",{className:"modal-header-actions",children:[n.jsx("button",{className:"btn-small",onClick:N,children:"Copy"}),n.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(e.raw_xml),null,2)})})]})}),n.jsx("style",{children:`
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
      `})]})}function C_(){const{t}=st(),e=Qs(),[s,r]=E.useState([]),[l,o]=E.useState(!0),[c,u]=E.useState(1),[h,p]=E.useState(""),[m,x]=E.useState([]),[N,w]=E.useState(!1),[b,j]=E.useState(!1),[y,C]=E.useState(null);E.useEffect(()=>{o(!0),ms.list(c,50,h||void 0).then(I=>{const $=I.data;r($.alerts||[]),o(!1)}).catch(()=>o(!1))},[c,h]);const R=I=>{ms.resolve(I,"Resolved via Web UI").then(()=>{r(s.map($=>$.id===I?{...$,resolved:!0}:$))})},T=I=>{const $=prompt("Enter reason for marking as false positive:");$&&ms.markFalsePositive(I,$).then(()=>{r(s.filter(U=>U.id!==I)),x(U=>U.filter(X=>X!==I))}).catch(U=>{console.error("Failed to mark as false positive:",U)})},W=I=>{confirm(t("alerts.confirmDelete"))&&ms.delete(I).then(()=>{r(s.filter($=>$.id!==I)),x($=>$.filter(U=>U!==I))}).catch($=>{console.error("Failed to delete alert:",$)})},_=I=>{m.length!==0&&ms.batchAction(m,I).then(()=>{I==="resolve"?r(s.map($=>m.includes($.id)?{...$,resolved:!0}:$)):I==="delete"&&r(s.filter($=>!m.includes($.id))),x([])}).catch($=>{console.error("Batch action failed:",$)})},H=I=>{x($=>$.includes(I)?$.filter(U=>U!==I):[...$,I])},L=()=>{m.length===s.length?x([]):x(s.map(I=>I.id))},P=()=>{m.forEach(I=>{ms.resolve(I,"Batch resolved via Web UI")}),r(s.map(I=>m.includes(I.id)?{...I,resolved:!0}:I)),x([])},A=()=>{j(!0),C(null),ms.runAnalysis().then(I=>{const $=I.data;C($),j(!1)}).catch(I=>{var $,U;console.error("Analysis failed:",I),j(!1),C({success:!1,alerts_created:0,events_analyzed:0,rules_executed:0,duration:"0s",errors:[((U=($=I.response)==null?void 0:$.data)==null?void 0:U.error)||"Analysis failed"]})})},K=I=>{switch(I){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},q={total:s.length,critical:s.filter(I=>I.severity==="critical").length,high:s.filter(I=>I.severity==="high").length,medium:s.filter(I=>I.severity==="medium").length,low:s.filter(I=>I.severity==="low").length};return n.jsxs("div",{className:"alerts-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("alerts.title")}),n.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-analyze",onClick:()=>w(!0),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"}),n.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),n.jsxs("div",{className:"alerts-stats-grid",children:[n.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:q.total}),n.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),n.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:q.critical}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),n.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:q.high}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),n.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[n.jsx("span",{className:"stat-icon",children:"🟡"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:q.medium}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),n.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[n.jsx("span",{className:"stat-icon",children:"🟢"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:q.low}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),n.jsxs("div",{className:"alerts-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("select",{className:"severity-select",value:h,onChange:I=>p(I.target.value),children:[n.jsx("option",{value:"",children:t("alerts.allSeverities")}),n.jsx("option",{value:"critical",children:t("dashboard.critical")}),n.jsx("option",{value:"high",children:t("dashboard.high")}),n.jsx("option",{value:"medium",children:t("dashboard.medium")}),n.jsx("option",{value:"low",children:t("dashboard.low")})]})}),n.jsx("div",{className:"toolbar-right",children:m.length>0&&n.jsxs("div",{className:"batch-actions",children:[n.jsxs("span",{className:"selected-count",children:[m.length," selected"]}),n.jsx("button",{className:"btn-batch-resolve",onClick:P,children:t("alerts.resolveSelected")}),n.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>_("false-positive"),children:t("alerts.markFalsePositive")}),n.jsx("button",{className:"btn-batch-delete",onClick:()=>_("delete"),children:t("common.delete")})]})})]}),l?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]}):n.jsxs("div",{className:"alerts-table-container",children:[n.jsxs("table",{className:"alerts-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.length===s.length&&s.length>0,onChange:L})}),n.jsx("th",{children:"ID"}),n.jsx("th",{children:t("alerts.severity")}),n.jsx("th",{children:t("alerts.rule")}),n.jsx("th",{children:t("alerts.message")}),n.jsx("th",{children:t("alerts.count")}),n.jsx("th",{children:t("alerts.status")}),n.jsx("th",{children:t("alerts.actions")})]})}),n.jsx("tbody",{children:s.map(I=>{var $;return n.jsxs("tr",{className:m.includes(I.id)?"selected":"",children:[n.jsx("td",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.includes(I.id),onChange:()=>H(I.id)})}),n.jsx("td",{className:"id-col",children:I.id}),n.jsx("td",{children:n.jsx("span",{className:`badge ${K(I.severity)}`,children:I.severity})}),n.jsx("td",{className:"rule-col",children:I.rule_name}),n.jsxs("td",{className:"message-col",children:[($=I.message)==null?void 0:$.substring(0,100),"..."]}),n.jsx("td",{className:"count-col",children:I.count}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${I.resolved?"resolved":"active"}`,children:I.resolved?t("alerts.resolved"):t("alerts.active")})}),n.jsxs("td",{className:"actions-col",children:[n.jsx("button",{className:"btn-action btn-detail",onClick:()=>e(`/alerts/${I.id}`),children:t("alerts.detail")}),!I.resolved&&n.jsx("button",{className:"btn-action btn-resolve",onClick:()=>R(I.id),children:t("alerts.resolve")}),n.jsx("button",{className:"btn-action btn-falsepositive",onClick:()=>T(I.id),children:t("alerts.falsePositive")}),n.jsx("button",{className:"btn-action btn-delete",onClick:()=>W(I.id),children:t("common.delete")})]})]},I.id)})})]}),s.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"🛡️"}),n.jsx("p",{children:t("alerts.noAlerts")})]})]}),N&&n.jsx("div",{className:"modal-overlay",onClick:()=>{w(!1),C(null)},children:n.jsxs("div",{className:"modal-content",onClick:I=>I.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("alerts.runAnalysis")}),n.jsx("button",{className:"close-btn",onClick:()=>{w(!1),C(null)},children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[!b&&!y&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),n.jsxs("div",{className:"analysis-summary",children:[n.jsx("h4",{children:t("alerts.analysisSummary")}),n.jsxs("ul",{children:[n.jsxs("li",{children:[t("alerts.analysisTarget"),": ",t("alerts.allEvents")]}),n.jsxs("li",{children:[t("alerts.analysisScope"),": ",t("alerts.allEnabledRules")]})]})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-cancel",onClick:()=>{w(!1),C(null)},children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:A,children:n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]}),b&&n.jsxs("div",{className:"analyzing-state",children:[n.jsx("div",{className:"analyzing-spinner"}),n.jsx("p",{children:t("alerts.analyzing")}),n.jsx("p",{className:"analyzing-hint",children:t("alerts.analyzingHint")})]}),y&&n.jsxs("div",{className:"analysis-result",children:[n.jsxs("div",{className:`result-header ${y.success?"success":"error"}`,children:[y.success?"✓":"✗"," ",y.success?"Analysis Complete":"Analysis Failed"]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.alertsCreated")}),n.jsx("span",{className:"stat-value",children:y.alerts_created})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.eventsAnalyzed")}),n.jsx("span",{className:"stat-value",children:y.events_analyzed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.rulesExecuted")}),n.jsx("span",{className:"stat-value",children:y.rules_executed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.duration")}),n.jsx("span",{className:"stat-value",children:y.duration})]})]}),y.errors&&y.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("h4",{children:"Errors:"}),n.jsx("ul",{children:y.errors.map((I,$)=>n.jsx("li",{children:I},$))})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-primary",onClick:()=>{w(!1),C(null),e("/alerts")},children:t("common.done")})})]})]})]})})]})}function E_(){const{id:t}=hg(),e=Qs(),[s,r]=E.useState(null),[l,o]=E.useState(!0),[c,u]=E.useState(""),[h,p]=E.useState(!1);E.useEffect(()=>{t&&(o(!0),ms.get(Number(t)).then(b=>{r(b.data),o(!1)}).catch(()=>o(!1)))},[t]);const m=async()=>{if(s){p(!0);try{await ms.resolve(s.id,c),r({...s,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(b){console.error("Failed to resolve:",b)}finally{p(!1)}}},x=async()=>{if(s){p(!0);try{await ms.markFalsePositive(s.id,c),r({...s,false_positive:!0,notes:c})}catch(b){console.error("Failed to mark false positive:",b)}finally{p(!1)}}},N=()=>{if(!s)return;const b=new URLSearchParams;s.event_ids&&s.event_ids.length>0&&b.set("event_ids",s.event_ids.join(",")),s.keywords&&b.set("keywords",s.keywords),e(`/events?${b.toString()}`)};if(l)return n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading..."})]});if(!s)return n.jsx("div",{className:"alert-not-found",children:"Alert not found"});const w=b=>{switch(b){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return n.jsxs("div",{className:"alert-detail",children:[n.jsx(Ke,{to:"/alerts",className:"back-link",children:"← 返回告警列表"}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-main",children:[n.jsxs("div",{className:"detail-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h3",{children:["告警 #",s.id]}),n.jsxs("div",{className:"status-badges",children:[n.jsx("span",{className:`badge ${w(s.severity)}`,children:s.severity.toUpperCase()}),s.resolved&&n.jsx("span",{className:"badge resolved",children:"已解决"}),s.false_positive&&n.jsx("span",{className:"badge false-positive",children:"误报"})]})]}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"规则名称:"}),n.jsx("span",{className:"rule-name",children:s.rule_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"威胁评分:"}),n.jsx("span",{className:"score-value",children:s.rule_score.toFixed(2)})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"日志名称:"}),n.jsx("span",{children:s.log_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"触发次数:"}),n.jsx("span",{children:s.count})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"首次出现:"}),n.jsx("span",{children:new Date(s.first_seen).toLocaleString()})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"最后出现:"}),n.jsx("span",{children:new Date(s.last_seen).toLocaleString()})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"触发事件ID:"}),n.jsx("div",{className:"event-ids",children:s.event_ids&&s.event_ids.length>0?s.event_ids.map((b,j)=>n.jsx("span",{className:"event-id-badge",children:b},j)):n.jsx("span",{className:"no-data",children:"无"})})]}),s.keywords&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"匹配关键字:"}),n.jsx("div",{className:"keywords",children:s.keywords.split(" ").filter(b=>b).map((b,j)=>n.jsx("span",{className:"keyword-badge",children:b},j))})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"告警消息:"}),n.jsx("pre",{className:"message-box",children:s.message})]}),s.mitre_attack&&s.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"MITRE ATT&CK:"}),n.jsx("div",{className:"mitre-tags",children:s.mitre_attack.map((b,j)=>n.jsx("span",{className:"mitre-tag",children:b},j))})]})]}),s.explanation&&n.jsxs("div",{className:"detail-panel explanation-panel",children:[n.jsx("h4",{children:"规则解读"}),n.jsx("p",{className:"explanation-text",children:s.explanation})]}),s.recommendation&&n.jsxs("div",{className:"detail-panel recommendation-panel",children:[n.jsx("h4",{children:"处置建议"}),n.jsx("div",{className:"recommendation-text",children:s.recommendation.split(`
`).filter(b=>b).map((b,j)=>n.jsx("p",{children:b},j))})]}),s.real_case&&n.jsxs("div",{className:"detail-panel case-panel",children:[n.jsx("h4",{children:"真实案例"}),n.jsx("p",{className:"case-text",children:s.real_case})]}),s.matched_events&&s.matched_events.length>0&&n.jsxs("div",{className:"detail-panel events-panel",children:[n.jsxs("h4",{children:["关联日志 (",s.matched_events.length,")"]}),n.jsx("div",{className:"events-list",children:s.matched_events.map(b=>n.jsxs("div",{className:"event-item",children:[n.jsxs("div",{className:"event-header",children:[n.jsxs("span",{className:"event-id",children:["Event ID: ",b.event_id]}),n.jsx("span",{className:"event-time",children:new Date(b.timestamp).toLocaleString()}),n.jsx("span",{className:`event-level level-${b.level.toLowerCase()}`,children:b.level})]}),n.jsxs("div",{className:"event-source",children:["来源: ",b.source]}),n.jsxs("div",{className:"event-computer",children:["计算机: ",b.computer]}),n.jsx("div",{className:"event-message",children:b.message})]},b.id))})]})]}),n.jsx("div",{className:"detail-sidebar",children:n.jsxs("div",{className:"sidebar-panel",children:[n.jsx("h4",{children:"操作"}),!s.resolved&&!s.false_positive&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{placeholder:"添加备注...",value:c,onChange:b=>u(b.target.value),rows:3}),n.jsx("button",{onClick:m,disabled:h,className:"btn-action btn-resolve",children:"标记为已解决"}),n.jsx("button",{onClick:x,disabled:h,className:"btn-action btn-falsepositive",children:"标记为误报"})]}),n.jsx("button",{onClick:N,className:"btn-action btn-search",children:"搜索关联事件"}),s.notes&&n.jsxs("div",{className:"notes-section",children:[n.jsx("label",{children:"备注:"}),n.jsx("pre",{className:"notes-box",children:s.notes})]})]})})]}),n.jsx("style",{children:`
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
      `})]})}function R_(){const{t}=st(),e=Qs(),[s,r]=E.useState([]),[l,o]=E.useState(!0),[c,u]=E.useState("all"),[h,p]=E.useState(""),[m,x]=E.useState(""),[N,w]=E.useState(""),[b,j]=E.useState(""),y=()=>{o(!0);let A,K;h&&m?A=new Date(`${h}T${m}:00Z`).toISOString():h&&(A=new Date(`${h}T00:00:00Z`).toISOString()),N&&b?K=new Date(`${N}T${b}:59Z`).toISOString():N&&(K=new Date(`${N}T23:59:59Z`).toISOString()),Ld.get(1e3,A,K).then(q=>{const I=q.data;r(I.entries||[]),o(!1)}).catch(()=>o(!1))};E.useEffect(()=>{y()},[]);const C=()=>{y()},R=()=>{p(""),x(""),w(""),j(""),y()},T=(A,K)=>{if(A==="alert")switch(K){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},W=(A,K)=>{if(A==="alert")switch(K){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},_=A=>A==="alert"?"ALERT":"EVENT",H=s.filter(A=>c==="all"?!0:c==="events"?A.type==="event":c==="alerts"?A.type==="alert":!0),L={eventCount:H.filter(A=>A.type==="event").length,alertCount:H.filter(A=>A.type==="alert").length},P=A=>{Ld.deleteAlert(A).then(()=>{r(s.filter(K=>!(K.type==="alert"&&K.alert_id===A)))}).catch(K=>console.error("Failed to delete alert:",K))};return l?n.jsx("div",{className:"timeline-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})}):n.jsxs("div",{className:"timeline-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("timeline.title")}),n.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),n.jsxs("div",{className:"timeline-stats-cards",children:[n.jsxs("div",{className:"stat-card events",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:L.eventCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill events",style:{width:`${L.eventCount+L.alertCount>0?L.eventCount/(L.eventCount+L.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card alerts",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:L.alertCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${L.alertCount>0?L.alertCount/(L.eventCount+L.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card ratio",children:[n.jsx("div",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsxs("span",{className:"stat-value",children:[L.eventCount+L.alertCount>0?(L.alertCount/(L.eventCount+L.alertCount)*100).toFixed(1):0,"%"]}),n.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),n.jsxs("div",{className:"timeline-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("div",{className:"filter-tabs",children:[n.jsxs("button",{className:`filter-tab ${c==="all"?"active":""}`,onClick:()=>u("all"),children:[t("timeline.all"),n.jsx("span",{className:"count",children:L.eventCount+L.alertCount})]}),n.jsxs("button",{className:`filter-tab ${c==="events"?"active":""}`,onClick:()=>u("events"),children:[t("timeline.eventsOnly"),n.jsx("span",{className:"count events",children:L.eventCount})]}),n.jsxs("button",{className:`filter-tab ${c==="alerts"?"active":""}`,onClick:()=>u("alerts"),children:[t("timeline.alertsOnly"),n.jsx("span",{className:"count alerts",children:L.alertCount})]})]})}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("div",{className:"datetime-filter",children:[n.jsx("input",{type:"date",value:h,onChange:A=>p(A.target.value),placeholder:"Start date"}),n.jsx("input",{type:"time",value:m,onChange:A=>x(A.target.value),placeholder:"Start time"}),n.jsx("span",{className:"datetime-separator",children:"-"}),n.jsx("input",{type:"date",value:N,onChange:A=>w(A.target.value),placeholder:"End date"}),n.jsx("input",{type:"time",value:b,onChange:A=>j(A.target.value),placeholder:"End time"}),n.jsx("button",{className:"btn-apply-filter",onClick:C,children:t("common.apply")}),n.jsx("button",{className:"btn-clear-filter",onClick:R,children:t("common.clear")})]})})]}),n.jsx("div",{className:"timeline-container",children:H.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"📭"}),n.jsx("p",{children:t("timeline.noEntries")})]}):n.jsx("div",{className:"timeline",children:H.map((A,K)=>n.jsxs("div",{className:`timeline-item ${A.type}`,children:[n.jsxs("div",{className:"timeline-marker",style:{"--marker-color":W(A.type,A.severity)},children:[n.jsx("div",{className:"marker-dot"}),n.jsx("div",{className:"marker-line"})]}),n.jsxs("div",{className:"timeline-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-left",children:[n.jsx("span",{className:"card-icon",children:T(A.type,A.severity)}),n.jsx("span",{className:`timeline-type ${A.type}`,style:{color:W(A.type,A.severity)},children:_(A.type)}),A.type==="event"&&A.event_id&&n.jsxs("span",{className:"event-id-badge",children:["Event ",A.event_id]}),A.type==="event"&&A.computer&&n.jsx("span",{className:"computer-badge",children:A.computer}),A.type==="alert"&&A.severity&&n.jsx("span",{className:`severity-badge ${A.severity}`,style:{background:`${W(A.type,A.severity)}20`,color:W(A.type,A.severity)},children:A.severity.toUpperCase()})]}),n.jsx("span",{className:"card-time",children:new Date(A.timestamp).toLocaleString()})]}),n.jsx("p",{className:"card-message",children:A.message}),A.type==="alert"&&A.rule_name&&n.jsxs("div",{className:"card-meta",children:[n.jsxs("span",{className:"rule-badge",children:[n.jsx("span",{className:"rule-icon",children:"📌"}),A.rule_name]}),A.mitre_attack&&A.mitre_attack.length>0&&n.jsxs("span",{className:"mitre-badge",children:[n.jsx("span",{className:"mitre-icon",children:"🎯"}),A.mitre_attack.join(", ")]})]}),A.type==="alert"&&A.alert_id&&n.jsxs("div",{className:"card-actions",children:[n.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${A.alert_id}`),children:t("timeline.viewDetails")}),n.jsx("button",{className:"btn-delete",onClick:()=>A.alert_id&&P(A.alert_id),children:t("timeline.delete")})]})]})]},`${A.type}-${A.id}-${K}`))})})]})}function D_(){const{t}=st(),[e,s]=E.useState(!1),[r,l]=E.useState("security"),[o,c]=E.useState("html"),[u,h]=E.useState("7d"),[p,m]=E.useState([]),[x,N]=E.useState(null),[w,b]=E.useState(null);E.useEffect(()=>{Ar.list().then(_=>m(_.data.reports)).catch(console.error)},[]);const j=async()=>{s(!0),b(null);try{const _=new Date,H=new Date;switch(u){case"24h":H.setHours(H.getHours()-24);break;case"7d":H.setDate(H.getDate()-7);break;case"30d":H.setDate(H.getDate()-30);break;case"90d":H.setDate(H.getDate()-90);break}await Ar.generate({type:r,format:o,start_time:H.toISOString(),end_time:_.toISOString()}),N(new Date().toLocaleString());const P=(await Ar.list()).data.reports||[];if(m(P),P.length>0){const A=P[0];confirm(`Report generated successfully!

Report: ${A.name}
Type: ${A.type}
Format: ${A.format}

Click OK to download now, or Cancel to view in reports list.`)&&C(A)}}catch(_){console.error("Report generation failed:",_),b("Failed to generate report. Please try again.")}finally{s(!1)}},y=async _=>{try{const H=await Ar.get(_.id);if(H.data.content){const L=window.open("","_blank");L&&(_.format==="html"?(L.document.write(H.data.content),L.document.close()):(L.document.write(`<pre>${JSON.stringify(H.data,null,2)}</pre>`),L.document.close()))}else alert("Report content not available")}catch(H){console.error("Failed to view report:",H),alert("Failed to view report")}},C=async _=>{try{const H=await Ar.download(_.id),L=new Blob([H.data],{type:H.headers["content-type"]||"application/octet-stream"}),P=URL.createObjectURL(L),A=document.createElement("a");A.href=P,A.download=`${_.name||_.id}.${_.format}`,document.body.appendChild(A),A.click(),document.body.removeChild(A),URL.revokeObjectURL(P)}catch(H){console.error("Failed to download report:",H),alert("Failed to download report")}},R=_=>_<1024?_+" B":_<1024*1024?(_/1024).toFixed(1)+" KB":(_/(1024*1024)).toFixed(1)+" MB",T=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],W=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return n.jsxs("div",{className:"reports-page",children:[n.jsx("h2",{children:t("reports.title")}),n.jsxs("div",{className:"reports-grid",children:[n.jsxs("div",{className:"reports-card main-config",children:[n.jsx("h3",{children:t("reports.generateReport")}),n.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Report Type"}),n.jsx("div",{className:"type-grid",children:T.map(_=>n.jsxs("div",{className:`type-option ${r===_.value?"selected":""}`,onClick:()=>l(_.value),children:[n.jsx("div",{className:"type-icon",children:_.icon}),n.jsx("div",{className:"type-label",children:_.label})]},_.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Output Format"}),n.jsx("div",{className:"format-row",children:W.map(_=>n.jsxs("div",{className:`format-option ${o===_.value?"selected":""}`,onClick:()=>c(_.value),children:[n.jsx("div",{className:"format-icon",children:_.icon}),n.jsx("div",{className:"format-label",children:_.label})]},_.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Time Range"}),n.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(_=>n.jsxs("button",{className:`range-btn ${u===_?"active":""}`,onClick:()=>h(_),children:[_==="24h"&&"Last 24 Hours",_==="7d"&&"Last 7 Days",_==="30d"&&"Last 30 Days",_==="90d"&&"Last 90 Days"]},_))})]}),w&&n.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),n.jsx("button",{className:"btn-primary generate-btn",onClick:j,disabled:e,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):n.jsxs(n.Fragment,{children:["📊 ",t("reports.generate")]})}),x&&n.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",x]})]}),n.jsxs("div",{className:"reports-card stats-card",children:[n.jsx("h3",{children:"Report Statistics"}),n.jsxs("div",{className:"stats-preview",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"📁"}),n.jsx("div",{className:"stat-value",children:p.length}),n.jsx("div",{className:"stat-label",children:"Total Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🛡️"}),n.jsx("div",{className:"stat-value",children:p.filter(_=>_.type==="security").length}),n.jsx("div",{className:"stat-label",children:"Security Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsx("div",{className:"stat-value",children:p.filter(_=>_.type==="alert").length}),n.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),n.jsxs("div",{className:"chart-placeholder",children:[n.jsx("div",{className:"chart-label",children:"Reports by Type"}),n.jsxs("div",{className:"mini-chart",children:[n.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),n.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),n.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),n.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),n.jsxs("div",{className:"reports-card full-width",children:[n.jsx("h3",{children:t("reports.recentReports")}),p.length>0?n.jsx("div",{className:"reports-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Report Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Format"}),n.jsx("th",{children:"Generated"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:p.map(_=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs("div",{className:"report-name",children:[n.jsxs("span",{className:"report-icon",children:[_.type==="security"&&"🛡️",_.type==="alert"&&"🚨",_.type==="timeline"&&"📊",_.type==="compliance"&&"📋"]}),_.name]})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${_.type}`,children:_.type})}),n.jsx("td",{children:n.jsx("span",{className:"format-badge",children:_.format.toUpperCase()})}),n.jsx("td",{children:new Date(_.generated_at).toLocaleString()}),n.jsx("td",{children:R(_.size)}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>y(_),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>C(_),children:"Download"})]})]},_.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📊"}),n.jsx("div",{className:"empty-text",children:t("reports.noReports")}),n.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),n.jsx("style",{children:`
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
      `})]})}function P_(){const{t}=st(),[e,s]=E.useState(!1),[r,l]=E.useState(""),[o,c]=E.useState(""),[u,h]=E.useState(null),[p,m]=E.useState(!1),[x,N]=E.useState(!1),[w,b]=E.useState([]),[j,y]=E.useState(""),[C,R]=E.useState(["eventlogs","registry","prefetch"]),[T,W]=E.useState([]),[_,H]=E.useState(!1);E.useEffect(()=>{L(),P()},[]);const L=()=>{Hn.listEvidence().then(k=>{k.data&&Array.isArray(k.data)&&b(k.data)}).catch(k=>console.error("Failed to load evidence:",k))},P=()=>{Hn.chainOfCustody().then(k=>{k.data&&Array.isArray(k.data)&&W(k.data)}).catch(k=>console.error("Failed to load chain of custody:",k))},A=async()=>{var k,z;if(o.trim()){N(!0);try{const B=await Hn.calculateHash(o);l(B.data.hash||"")}catch(B){console.error("Failed to calculate hash:",B),alert("Failed to calculate hash: "+(((z=(k=B.response)==null?void 0:k.data)==null?void 0:z.error)||B.message))}finally{N(!1)}}},K=async()=>{s(!0),y("starting");try{for(const k of C)y(`collecting:${k}`),await Hn.collect(k,`/tmp/forensics_${k}`);L(),P(),y("completed")}catch(k){console.error("Collection failed:",k),y("error")}finally{s(!1)}},q=async()=>{var k,z;if(!(!r.trim()||!o.trim())){m(!0),h(null);try{const B=await Hn.verifyHash(o,r);h({verified:B.data.match||!1,expected:r,actual:B.data.actual||r,path:o})}catch(B){h({verified:!1,expected:r,actual:((z=(k=B.response)==null?void 0:k.data)==null?void 0:z.error)||"Hash verification failed",path:o})}finally{m(!1)}}},I=k=>{R(z=>z.includes(k)?z.filter(B=>B!==k):[...z,k])},$=async k=>{try{const z=await Hn.getEvidence(k.id);if(z.data.content){const B=window.open("","_blank");B&&(B.document.write(`<pre>${JSON.stringify(z.data,null,2)}</pre>`),B.document.close())}else alert("Evidence content not available")}catch(z){console.error("Failed to view evidence:",z),alert("Failed to view evidence")}},U=async k=>{try{const z=await Hn.exportEvidence(k.id,"json"),B=new Blob([z.data],{type:z.headers["content-type"]||"application/octet-stream"}),te=URL.createObjectURL(B),se=document.createElement("a");se.href=te,se.download=`evidence_${k.type}_${k.id}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(te)}catch(z){console.error("Failed to export evidence:",z),alert("Failed to export evidence")}},X=k=>k<1024?k+" B":k<1024*1024?(k/1024).toFixed(1)+" KB":(k/(1024*1024)).toFixed(1)+" MB";return n.jsxs("div",{className:"forensics-page",children:[n.jsx("h2",{children:t("forensics.title")}),n.jsxs("div",{className:"forensics-grid",children:[n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.evidenceCollection")}),n.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),n.jsxs("div",{className:"collection-types",children:[n.jsxs("div",{className:"type-item",onClick:()=>I("eventlogs"),children:[n.jsx("div",{className:`type-checkbox ${C.includes("eventlogs")?"checked":""}`,children:C.includes("eventlogs")&&"✓"}),n.jsx("div",{className:"type-icon",children:"📋"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),n.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>I("registry"),children:[n.jsx("div",{className:`type-checkbox ${C.includes("registry")?"checked":""}`,children:C.includes("registry")&&"✓"}),n.jsx("div",{className:"type-icon",children:"🔧"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.registry")}),n.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>I("memory"),children:[n.jsx("div",{className:`type-checkbox ${C.includes("memory")?"checked":""}`,children:C.includes("memory")&&"✓"}),n.jsx("div",{className:"type-icon",children:"💾"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),n.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>I("prefetch"),children:[n.jsx("div",{className:`type-checkbox ${C.includes("prefetch")?"checked":""}`,children:C.includes("prefetch")&&"✓"}),n.jsx("div",{className:"type-icon",children:"⚡"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),n.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),j&&n.jsxs("div",{className:`collect-status ${j}`,children:[j==="starting"&&"📡 Initializing collection...",j.startsWith("collecting:")&&`🔍 Collecting ${j.split(":")[1]}...`,j==="completed"&&"✅ Collection completed",j==="error"&&"❌ Collection failed"]}),n.jsx("button",{className:"btn-primary forensics-btn",onClick:K,disabled:e||C.length===0,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):n.jsxs(n.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.hashVerification")}),n.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),n.jsxs("div",{className:"hash-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"File Path"}),n.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:o,onChange:k=>c(k.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expected SHA256 Hash"}),n.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:r,onChange:k=>l(k.target.value)})]}),n.jsx("button",{className:"btn-secondary",onClick:A,disabled:x||!o.trim(),children:x?"Calculating...":"Calculate Hash"}),n.jsx("button",{className:"btn-secondary",onClick:q,disabled:p||!r.trim()||!o.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&n.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[n.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),n.jsxs("div",{className:"result-content",children:[n.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),n.jsxs("div",{className:"result-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"File:"})," ",u.path]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),n.jsxs("div",{className:"forensics-card full-width",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),n.jsx("button",{className:"btn-secondary",onClick:()=>H(!0),children:"View Full Chain"})]}),w.length>0?n.jsx("div",{className:"evidence-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Collected At"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Hash"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:w.map(k=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"evidence-type",children:k.type})}),n.jsx("td",{children:new Date(k.collected_at).toLocaleString()}),n.jsx("td",{children:n.jsx("code",{className:"evidence-path",children:k.path})}),n.jsx("td",{children:X(k.size)}),n.jsx("td",{children:n.jsxs("code",{className:"evidence-hash",children:[k.hash.substring(0,16),"..."]})}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>$(k),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>U(k),children:"Export"})]})]},k.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📦"}),n.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),n.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),_&&n.jsx("div",{className:"modal-overlay",onClick:()=>H(!1),children:n.jsxs("div",{className:"modal-content chain-modal",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("button",{className:"close-btn",onClick:()=>H(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:T.length>0?n.jsx("div",{className:"chain-timeline",children:T.map((k,z)=>n.jsxs("div",{className:"chain-entry",children:[n.jsx("div",{className:"chain-dot",children:z+1}),n.jsxs("div",{className:"chain-content",children:[n.jsx("div",{className:"chain-action",children:k.action}),n.jsx("div",{className:"chain-details",children:k.details}),n.jsxs("div",{className:"chain-meta",children:[n.jsx("span",{className:"chain-time",children:new Date(k.timestamp).toLocaleString()}),k.user&&n.jsxs("span",{className:"chain-user",children:["by ",k.user]})]})]})]},k.id))}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),n.jsx("style",{children:`
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
      `})]})}function A_(){var I,$;const{t}=st(),[e,s]=E.useState("system"),[r,l]=E.useState(null),[o,c]=E.useState([]),[u,h]=E.useState([]),[p,m]=E.useState([]),[x,N]=E.useState([]),[w,b]=E.useState([]),[j,y]=E.useState(!0),[C,R]=E.useState(null);E.useEffect(()=>{T()},[]);const T=()=>{y(!0),Kn.getInfo().then(U=>{l(U.data),y(!1)}).catch(U=>{R(U.message||t("common.error")),y(!1)})},W=()=>{o.length>0||(y(!0),Kn.getProcesses(50).then(U=>{c(U.data.processes||[]),y(!1)}).catch(()=>y(!1)))},_=()=>{u.length>0||(y(!0),Kn.getNetwork(50).then(U=>{h(U.data.connections||[]),y(!1)}).catch(()=>y(!1)))},H=()=>{p.length>0||(y(!0),Kn.getEnvVariables().then(U=>{m(U.data.variables||[]),y(!1)}).catch(()=>y(!1)))},L=()=>{x.length>0||(y(!0),Kn.getLoadedDLLs(100).then(U=>{N(U.data.modules||[]),y(!1)}).catch(()=>y(!1)))},P=()=>{w.length>0||(y(!0),Kn.getDrivers().then(U=>{b(U.data.drivers||[]),y(!1)}).catch(()=>y(!1)))},A=U=>{s(U),U==="processes"&&W(),U==="network"&&_(),U==="env"&&H(),U==="dlls"&&L(),U==="drivers"&&P()},K=U=>{const X=Math.floor(U/86400),k=Math.floor(U%86400/3600),z=Math.floor(U%3600/60);return X>0?`${X}d ${k}h ${z}m`:k>0?`${k}h ${z}m`:`${z}m`},q=U=>{switch(U==null?void 0:U.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return j&&!r?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})}):C?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"error-state",children:["Error: ",C]})}):n.jsxs("div",{className:"systeminfo-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("systemInfo.title")}),n.jsx("div",{className:"header-actions",children:n.jsx("button",{className:"btn-refresh",onClick:T,children:"Refresh"})})]}),n.jsxs("div",{className:"tab-nav",children:[n.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>A("system"),children:"System"}),n.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>A("processes"),children:["Processes (",o.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>A("network"),children:["Network (",u.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>A("env"),children:["Env (",p.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>A("dlls"),children:["DLLs (",x.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>A("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&r&&n.jsxs("div",{className:"system-grid",children:[n.jsxs("div",{className:"system-card os-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"OS"}),n.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),n.jsxs("div",{className:"system-status",children:[n.jsx("div",{className:"status-indicator online"}),n.jsx("span",{children:"System Online"})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),n.jsx("span",{className:"info-value highlight",children:r.hostname||"N/A"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),n.jsx("span",{className:"info-value",children:r.domain||"WORKGROUP"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),n.jsx("span",{className:"info-value",children:r.os_name||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),n.jsx("span",{className:"info-value",children:r.os_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),n.jsx("span",{className:"info-value badge",children:r.architecture||"x64"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),n.jsx("span",{className:"info-value",children:r.timezone||"UTC"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),n.jsx("span",{className:`info-value badge ${r.is_admin?"admin":"user"}`,children:r.is_admin?"Root/Admin":"Standard User"})]})]})]}),n.jsxs("div",{className:"system-card runtime-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Runtime"}),n.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),n.jsx("span",{className:"info-value mono",children:r.go_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),n.jsxs("span",{className:"info-value",children:[r.cpu_count||0," Cores"]})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),n.jsx("span",{className:"info-value",children:K(r.uptime_seconds||0)})]})]})]}),n.jsxs("div",{className:"system-card resources-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Resources"}),n.jsx("h3",{children:"System Resources"})]}),n.jsxs("div",{className:"resource-bars",children:[n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Memory"}),n.jsxs("span",{className:"resource-value",children:[r.memory_free_gb?(r.memory_total_gb-r.memory_free_gb).toFixed(1):"0"," / ",((I=r.memory_total_gb)==null?void 0:I.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill",style:{width:r.memory_total_gb?`${(r.memory_total_gb-r.memory_free_gb)/r.memory_total_gb*100}%`:"0%"}})})]}),n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Free Memory"}),n.jsxs("span",{className:"resource-value",children:[(($=r.memory_free_gb)==null?void 0:$.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill memory",style:{width:r.memory_total_gb?`${r.memory_free_gb/r.memory_total_gb*100}%`:"0%"}})})]})]})]}),n.jsxs("div",{className:"system-card time-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Time"}),n.jsx("h3",{children:"Time Information"})]}),n.jsxs("div",{className:"time-display",children:[n.jsx("div",{className:"current-time",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),n.jsx("div",{className:"current-date",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),n.jsx("div",{className:"info-list",children:n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"UTC Time"}),n.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"PPID"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"User"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Command Line"})]})}),n.jsx("tbody",{children:o.map((U,X)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:U.pid}),n.jsx("td",{className:"mono",children:U.ppid}),n.jsx("td",{className:"highlight",children:U.name}),n.jsx("td",{children:U.user||"-"}),n.jsx("td",{className:"truncate mono",title:U.exe,children:U.exe||"-"}),n.jsx("td",{className:"truncate",title:U.args,children:U.args||"-"})]},`${U.pid}-${X}`))})]}),o.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Protocol"}),n.jsx("th",{children:"Local Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"Remote Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"State"}),n.jsx("th",{children:"Process"})]})}),n.jsx("tbody",{children:u.map((U,X)=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"protocol-badge",children:U.protocol})}),n.jsx("td",{className:"mono",children:U.local_addr}),n.jsx("td",{className:"mono",children:U.local_port}),n.jsx("td",{className:"mono",children:U.remote_addr||"-"}),n.jsx("td",{className:"mono",children:U.remote_port||"-"}),n.jsx("td",{children:n.jsx("span",{className:"state-badge",style:{color:q(U.state)},children:U.state})}),n.jsx("td",{children:U.process_name||U.pid||"-"})]},`${U.protocol}-${U.local_addr}-${U.local_port}-${X}`))})]}),u.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Variable Name"}),n.jsx("th",{children:"Value"}),n.jsx("th",{children:"Type"})]})}),n.jsx("tbody",{children:p.map((U,X)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:U.name}),n.jsx("td",{className:"truncate",title:U.value,children:U.value}),n.jsx("td",{children:n.jsx("span",{className:"type-badge",children:U.type})})]},`${U.name}-${X}`))})]}),p.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"Process"}),n.jsx("th",{children:"DLL Name"}),n.jsx("th",{children:"Version"}),n.jsx("th",{children:"Signed"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"})]})}),n.jsx("tbody",{children:x.map((U,X)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:U.process_id}),n.jsx("td",{children:U.process_name}),n.jsx("td",{className:"mono highlight",children:U.name}),n.jsx("td",{className:"mono",children:U.version||"-"}),n.jsx("td",{children:n.jsx("span",{className:`signature-badge ${U.is_signed?"signed":"unsigned"}`,children:U.is_signed?"Signed":"Unsigned"})}),n.jsx("td",{className:"truncate",title:U.path,children:U.path}),n.jsxs("td",{className:"mono",children:[(U.size/1024).toFixed(1)," KB"]})]},`${U.process_id}-${U.name}-${X}`))})]}),x.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Display Name"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Path"})]})}),n.jsx("tbody",{children:w.map((U,X)=>{var k;return n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:U.name}),n.jsx("td",{children:U.display_name||U.name}),n.jsx("td",{className:"truncate",title:U.description,children:U.description||"-"}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${(k=U.status)==null?void 0:k.toLowerCase()}`,children:U.status})}),n.jsx("td",{className:"truncate mono",title:U.path,children:U.path||"-"})]},`${U.name}-${X}`)})})]}),w.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No driver information available"})]}),n.jsx("style",{children:`
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
      `})]})}function T_(){var ma,ui,hi,fi;const[t,e]=E.useState([]),[s,r]=E.useState(!0),[l,o]=E.useState(null),[c,u]=E.useState(0),[h,p]=E.useState(0),[m,x]=E.useState("all"),[N,w]=E.useState("all"),[b,j]=E.useState(""),[y,C]=E.useState(null),[R,T]=E.useState(!1),[W,_]=E.useState(!1),[H,L]=E.useState(!1),[P,A]=E.useState(!1),[K,q]=E.useState(null),[I,$]=E.useState(!1),[U,X]=E.useState("choice"),[k,z]=E.useState({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""}),[B,te]=E.useState([]),[se,M]=E.useState(null),[Z,ue]=E.useState({}),[pe,Ne]=E.useState(null),[ee,ce]=E.useState(!1),[fe,Ee]=E.useState(!1),[Me,Vt]=E.useState(null),vs=E.useRef(null),xe=()=>{Bs.list().then(V=>{e(V.data.rules||[]),u(V.data.total_count||0),p(V.data.enabled_count||0),r(!1)}).catch(V=>{o(V.message||"Failed to load rules"),r(!1)})};E.useEffect(()=>{xe()},[]);const qt=()=>{Bs.listTemplates().then(V=>{te(V.data.templates||[])}).catch(V=>{console.error("Failed to load templates:",V)})},oi=()=>{qt(),L(!0)},Ks=V=>{M(V);const me={};V.parameters.forEach(Le=>{me[Le.name]=Le.default||""}),ue(me)},_n=()=>{se&&Bs.instantiateTemplate(se.name,Z).then(()=>{L(!1),M(null),ue({}),xe()}).catch(V=>{console.error("Failed to create rule from template:",V),alert("Failed to create rule from template")})},ci=(V,me)=>{Bs.toggle(V,!me).then(()=>{e(t.map(Le=>Le.name===V?{...Le,enabled:!me}:Le)),p(Le=>me?Le-1:Le+1)}).catch(Le=>{console.error("Failed to toggle rule:",Le)})},Sn=V=>{!V.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?")||(q({...V}),A(!0))},is=V=>{if(!V.is_custom){alert("Cannot delete built-in rules");return}confirm(`Are you sure you want to delete rule "${V.name}"?`)&&le.delete(`/rules/${V.name}`).then(()=>{xe()}).catch(Le=>{console.error("Failed to delete rule:",Le),alert("Failed to delete rule")})},rs=()=>{K&&Bs.update(K.name,K).then(()=>{A(!1),q(null),xe()}).catch(V=>{console.error("Failed to update rule:",V),alert("Failed to update rule")})},Cn=()=>{$(!0),X("choice"),z({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""})},di=()=>{$(!1),oi()},En=()=>{X("custom")},re=()=>{if(!k.name.trim()){alert("Rule name is required");return}Bs.save({name:k.name,description:k.description,severity:k.severity,enabled:!0,score:k.score,mitre_attack:k.mitre_attack,event_ids:k.event_ids,message:k.message}).then(()=>{$(!1),xe()}).catch(V=>{console.error("Failed to add rule:",V),alert("Failed to create rule")})},de=()=>{T(!0),Ne(null)},Pe=V=>{ce(!0),Bs.validate(V).then(me=>{Ne(me.data)}).catch(me=>{Ne({valid:!1,errors:[me.message||"Validation failed"],warnings:[]})}).finally(()=>{ce(!1)})},nt=V=>{Bs.export(V).then(me=>{const Le=new Blob([me.data],{type:V==="yaml"?"text/yaml":"application/json"}),Yt=URL.createObjectURL(Le),bs=document.createElement("a");bs.href=Yt,bs.download=`rules_export.${V}`,document.body.appendChild(bs),bs.click(),document.body.removeChild(bs),URL.revokeObjectURL(Yt)}).catch(me=>{console.error("Failed to export rules:",me),alert("Failed to export rules")})},as=()=>{_(!0),Vt(null)},ys=V=>{var Yt;const me=(Yt=V.target.files)==null?void 0:Yt[0];if(!me)return;const Le=new FileReader;Le.onload=bs=>{var Yi;try{const Dn=(Yi=bs.target)==null?void 0:Yi.result;let Ps=[];if(me.name.endsWith(".yaml")||me.name.endsWith(".yml")){const Ft=Dn.split(`
`);let mt={};for(const _t of Ft)_t.startsWith("- name:")?(mt.name&&Ps.push(mt),mt={name:_t.replace("- name:","").trim(),mitre_attack:[]}):_t.startsWith("  description:")?mt.description=_t.replace("  description:","").trim():_t.startsWith("  severity:")?mt.severity=_t.replace("  severity:","").trim():_t.startsWith("  enabled:")?mt.enabled=_t.replace("  enabled:","").trim()==="true":_t.startsWith("  score:")?mt.score=parseFloat(_t.replace("  score:","").trim())||50:_t.startsWith("    - ")&&(mt.mitre_attack||(mt.mitre_attack=[]),mt.mitre_attack.push(_t.replace("    - ","").trim()));mt.name&&Ps.push(mt)}else{const Ft=JSON.parse(Dn);Ps=Array.isArray(Ft)?Ft:Ft.rules||[]}if(Ps.length===0){Vt({imported:0,failed:0,errors:["No valid rules found in file"]});return}Ee(!0),Bs.import(Ps).then(Ft=>{Vt(Ft.data),Ft.data.imported>0&&xe()}).catch(Ft=>{Vt({imported:0,failed:Ps.length,errors:[Ft.message||"Import failed"]})}).finally(()=>{Ee(!1)})}catch(Dn){Vt({imported:0,failed:0,errors:["Failed to parse file: "+(Dn.message||"Invalid format")]})}},Le.readAsText(me)},Ds=V=>{C(V)},ze=V=>{switch(V==null?void 0:V.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},Et=V=>{switch(V==null?void 0:V.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Rn=t.filter(V=>{var me;return!(m!=="all"&&((me=V.severity)==null?void 0:me.toLowerCase())!==m||N==="enabled"&&!V.enabled||N==="disabled"&&V.enabled||b&&!V.name.toLowerCase().includes(b.toLowerCase()))});return s?n.jsx("div",{className:"rules-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading rules..."})]})}):l?n.jsx("div",{className:"rules-page",children:n.jsx("div",{className:"error-state",children:l})}):n.jsxs("div",{className:"rules-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Detection Rules"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:de,children:"Validate"}),n.jsx("button",{className:"btn-secondary",onClick:as,children:"Import"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",children:"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>nt("json"),children:"JSON"}),n.jsx("button",{onClick:()=>nt("yaml"),children:"YAML"})]})]}),n.jsx("button",{className:"btn-primary",onClick:Cn,children:"Add Rule"})]})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value",children:c}),n.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon enabled",children:"✓"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value enabled",children:h}),n.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon disabled",children:"✗"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value disabled",children:c-h}),n.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),n.jsxs("div",{className:"filter-bar",children:[n.jsx("input",{type:"text",placeholder:"Search rules...",value:b,onChange:V=>j(V.target.value),className:"search-input"}),n.jsxs("select",{value:m,onChange:V=>x(V.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Severities"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"})]}),n.jsxs("select",{value:N,onChange:V=>w(V.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Status"}),n.jsx("option",{value:"enabled",children:"Enabled"}),n.jsx("option",{value:"disabled",children:"Disabled"})]})]}),n.jsx("div",{className:"rules-grid",children:Rn.map(V=>{var me;return n.jsxs("div",{className:`rule-card ${V.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`severity-dot ${ze(V.severity)}`}),n.jsx("span",{className:"rule-name",children:V.name})]}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:V.enabled,onChange:()=>ci(V.name,V.enabled)}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`severity-badge ${ze(V.severity)}`,children:[Et(V.severity)," ",V.severity]}),n.jsxs("span",{className:"score-badge",children:["Score: ",V.score]}),!V.is_custom&&n.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),n.jsx("p",{className:"rule-description",children:V.description}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("div",{className:"mitre-tags",children:[(me=V.mitre_attack)==null?void 0:me.slice(0,3).map(Le=>n.jsx("span",{className:"mitre-tag",children:Le},Le)),V.mitre_attack&&V.mitre_attack.length>3&&n.jsxs("span",{className:"mitre-tag",children:["+",V.mitre_attack.length-3]})]}),n.jsxs("div",{className:"rule-actions",children:[n.jsx("button",{className:"rule-action",onClick:()=>Ds(V),children:"Details"}),n.jsx("button",{className:"rule-action",onClick:()=>Sn(V),children:"Edit"}),V.is_custom&&n.jsx("button",{className:"rule-action rule-action-delete",onClick:()=>is(V),children:"Delete"})]})]})]},V.id)})}),Rn.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("div",{children:"No rules match your filters"})]}),y&&n.jsx("div",{className:"modal-overlay",onClick:()=>C(null),children:n.jsxs("div",{className:"modal-content rule-modal",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>C(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:y.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"ID:"}),n.jsx("span",{className:"detail-value mono",children:y.id})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Severity:"}),n.jsxs("span",{className:`severity-badge ${ze(y.severity)}`,children:[Et(y.severity)," ",y.severity]})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Score:"}),n.jsx("span",{className:"detail-value",children:y.score})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Description"}),n.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"MITRE ATT&CK"}),n.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(V=>n.jsx("span",{className:"mitre-tag",children:V},V))})]}),y.tags&&y.tags.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Tags"}),n.jsx("div",{className:"tags-list",children:y.tags.map(V=>n.jsx("span",{className:"tag-item",children:V},V))})]})]})]})}),R&&n.jsx("div",{className:"modal-overlay",onClick:()=>T(!1),children:n.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Validate Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>T(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),n.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>T(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:()=>{const V=document.querySelector(".validate-input");if(V!=null&&V.value){const me=V.value;try{if(me.trim().startsWith("-"))Pe({name:"temp",description:me,severity:"medium",enabled:!0,score:50});else{const Le=JSON.parse(me);Pe(Le)}}catch{Pe({name:"temp",description:me,severity:"medium",enabled:!0,score:50})}}},disabled:ee,children:ee?"Validating...":"Validate"})]}),pe&&n.jsxs("div",{className:`validation-result ${pe.valid?"valid":"invalid"}`,children:[n.jsx("div",{className:"result-header",children:pe.valid?"✓ Valid Rule":"✗ Invalid Rule"}),pe.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("strong",{children:"Errors:"}),n.jsx("ul",{children:pe.errors.map((V,me)=>n.jsx("li",{children:V},me))})]}),pe.warnings.length>0&&n.jsxs("div",{className:"result-warnings",children:[n.jsx("strong",{children:"Warnings:"}),n.jsx("ul",{children:pe.warnings.map((V,me)=>n.jsx("li",{children:V},me))})]})]})]})]})}),I&&n.jsx("div",{className:"modal-overlay",onClick:()=>$(!1),children:n.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add New Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>$(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:U==="choice"?n.jsxs("div",{className:"add-rule-choice",children:[n.jsx("p",{className:"modal-desc",children:"Choose how to create a new rule:"}),n.jsxs("div",{className:"choice-cards",children:[n.jsxs("div",{className:"choice-card",onClick:di,children:[n.jsx("div",{className:"choice-icon",children:"📋"}),n.jsx("div",{className:"choice-title",children:"From Template"}),n.jsx("div",{className:"choice-desc",children:"Create a rule from a pre-defined template with customizable parameters"})]}),n.jsxs("div",{className:"choice-card",onClick:En,children:[n.jsx("div",{className:"choice-icon",children:"✏️"}),n.jsx("div",{className:"choice-title",children:"Custom Rule"}),n.jsx("div",{className:"choice-desc",children:"Create a custom rule by filling in the rule details manually"})]})]})]}):n.jsxs("div",{className:"add-rule-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:k.name,onChange:V=>z({...k,name:V.target.value}),placeholder:"e.g. suspicious-login-detected"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:k.description,onChange:V=>z({...k,description:V.target.value}),rows:3,placeholder:"Describe what this rule detects..."})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:k.severity,onChange:V=>z({...k,severity:V.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:k.score,onChange:V=>z({...k,score:parseFloat(V.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK (comma-separated)"}),n.jsx("input",{type:"text",value:((ma=k.mitre_attack)==null?void 0:ma.join(", "))||"",onChange:V=>z({...k,mitre_attack:V.target.value.split(",").map(me=>me.trim()).filter(me=>me)}),placeholder:"T1055, T1056"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((ui=k.event_ids)==null?void 0:ui.join(", "))||"",onChange:V=>z({...k,event_ids:V.target.value.split(",").map(me=>parseInt(me.trim())).filter(me=>!isNaN(me))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Alert Message"}),n.jsx("input",{type:"text",value:k.message,onChange:V=>z({...k,message:V.target.value}),placeholder:"Alert message when rule triggers"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>X("choice"),children:"Back"}),n.jsx("button",{className:"btn-primary",onClick:re,children:"Create Rule"})]})]})})]})}),W&&n.jsx("div",{className:"modal-overlay",onClick:()=>_(!1),children:n.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Import Rules"}),n.jsx("button",{className:"close-btn",onClick:()=>_(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),n.jsxs("details",{className:"format-example",children:[n.jsx("summary",{children:"View Format Examples"}),n.jsxs("div",{className:"format-content",children:[n.jsx("h5",{children:"JSON Format:"}),n.jsx("pre",{children:`[
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
]`}),n.jsx("h5",{children:"YAML Format:"}),n.jsx("pre",{children:`- name: custom-rule-1
  description: My custom rule
  severity: high
  enabled: true
  score: 80
  mitre_attack:
    - T1055
  event_ids:
    - 4624
    - 4625
  message: Suspicious activity detected`})]})]}),n.jsx("input",{type:"file",ref:vs,accept:".yaml,.yml,.json",onChange:ys,style:{display:"none"}}),n.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var V;return(V=vs.current)==null?void 0:V.click()},disabled:fe,children:fe?"Importing...":"Choose File"}),Me&&n.jsxs("div",{className:`import-result ${Me.imported>0?"success":"error"}`,children:[n.jsx("div",{className:"result-header",children:Me.imported>0?`✓ Imported ${Me.imported} rules`:"✗ Import failed"}),Me.failed>0&&n.jsxs("div",{className:"result-info",children:["Failed: ",Me.failed]}),Me.errors.length>0&&n.jsx("div",{className:"result-errors",children:n.jsx("ul",{children:Me.errors.map((V,me)=>n.jsx("li",{children:V},me))})})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-secondary",onClick:()=>_(!1),children:"Close"})})]})]})}),H&&n.jsx("div",{className:"modal-overlay",onClick:()=>L(!1),children:n.jsxs("div",{className:"modal-content template-modal",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Create Rule from Template"}),n.jsx("button",{className:"close-btn",onClick:()=>L(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:se?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"selected-template-header",children:[n.jsx("button",{className:"btn-back",onClick:()=>M(null),children:"← Back"}),n.jsx("h4",{children:se.name})]}),n.jsx("div",{className:"template-params-form",children:se.parameters.map(V=>n.jsxs("div",{className:"param-item",children:[n.jsxs("label",{children:[V.name,V.required&&n.jsx("span",{className:"required",children:"*"})]}),n.jsx("p",{className:"param-desc",children:V.description}),V.options&&V.options.length>0?n.jsxs("select",{value:Z[V.name]||"",onChange:me=>ue({...Z,[V.name]:me.target.value}),children:[n.jsx("option",{value:"",children:"Select..."}),V.options.map(me=>n.jsx("option",{value:me,children:me},me))]}):n.jsx("input",{type:V.type==="number"?"number":"text",value:Z[V.name]||"",onChange:me=>ue({...Z,[V.name]:me.target.value}),placeholder:V.default||""})]},V.name))}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>L(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:_n,disabled:se.parameters.some(V=>V.required&&!Z[V.name]),children:"Create Rule"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:"Select a template:"}),n.jsx("div",{className:"template-list",children:B.length===0?n.jsx("div",{className:"empty-state",children:"No templates available"}):B.map(V=>n.jsxs("div",{className:"template-card",onClick:()=>Ks(V),children:[n.jsx("div",{className:"template-name",children:V.name}),n.jsx("div",{className:"template-desc",children:V.description}),n.jsxs("div",{className:"template-params",children:[V.parameters.length," parameters"]})]},V.name))})]})})]})}),P&&K&&n.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:n.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:K.name,onChange:V=>q({...K,name:V.target.value}),disabled:!K.is_custom})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:K.description,onChange:V=>q({...K,description:V.target.value}),rows:3})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:K.severity,onChange:V=>q({...K,severity:V.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:K.score,onChange:V=>q({...K,score:parseFloat(V.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK"}),n.jsx("input",{type:"text",value:((hi=K.mitre_attack)==null?void 0:hi.join(", "))||"",onChange:V=>q({...K,mitre_attack:V.target.value.split(",").map(me=>me.trim()).filter(me=>me)}),placeholder:"T1234, T5678"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((fi=K.event_ids)==null?void 0:fi.join(", "))||"",onChange:V=>q({...K,event_ids:V.target.value.split(",").map(me=>parseInt(me.trim())).filter(me=>!isNaN(me))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message"}),n.jsx("input",{type:"text",value:K.message||"",onChange:V=>q({...K,message:V.target.value})})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:rs,children:"Save Changes"})]})]})]})}),n.jsx("style",{children:`
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
      `})]})}function M_(){const{t}=st(),[e,s]=E.useState("general"),[r,l]=E.useState(!1),[o,c]=E.useState(!1),[u,h]=E.useState(null),[p,m]=E.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});E.useEffect(()=>{fd.get().then(b=>{const j=b.data;m({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const x=async()=>{var b,j;c(!0),h(null);try{await fd.save({database_path:p.databasePath,log_level:p.logLevel,max_events:p.maxEvents,retention_days:p.retentionDays,enable_alerting:p.enableAlerting,enable_live_collection:p.enableLiveCollection,enable_auto_update:p.enableAutoUpdate,api_port:p.apiPort,api_host:p.apiHost,cors_enabled:p.corsEnabled,max_import_file_size:p.maxImportFileSize,export_directory:p.exportDirectory,parser_workers:p.parserWorkers,memory_limit:p.memoryLimit}),l(!0),setTimeout(()=>l(!1),3e3)}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to save settings")}finally{c(!1)}},N=async()=>{var b,j;c(!0),h(null);try{await fd.reset(),window.location.reload()}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to reset settings"),c(!1)}},w=(b,j)=>{m({...p,[b]:j})};return n.jsxs("div",{className:"settings-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("settings.title")}),r&&n.jsxs("span",{className:"save-indicator",children:["✓ ",t("settings.saved")]})]}),n.jsxs("div",{className:"settings-layout",children:[n.jsxs("div",{className:"settings-nav",children:[n.jsxs("button",{className:`nav-item ${e==="general"?"active":""}`,onClick:()=>s("general"),children:[n.jsx("span",{className:"nav-icon",children:"⚙️"}),t("settings.general")]}),n.jsxs("button",{className:`nav-item ${e==="database"?"active":""}`,onClick:()=>s("database"),children:[n.jsx("span",{className:"nav-icon",children:"💾"}),t("settings.database")]}),n.jsxs("button",{className:`nav-item ${e==="api"?"active":""}`,onClick:()=>s("api"),children:[n.jsx("span",{className:"nav-icon",children:"🔌"}),t("settings.apiServer")]}),n.jsxs("button",{className:`nav-item ${e==="collection"?"active":""}`,onClick:()=>s("collection"),children:[n.jsx("span",{className:"nav-icon",children:"📡"}),t("settings.collection")]}),n.jsxs("button",{className:`nav-item ${e==="advanced"?"active":""}`,onClick:()=>s("advanced"),children:[n.jsx("span",{className:"nav-icon",children:"🔧"}),t("settings.advanced")]})]}),n.jsxs("div",{className:"settings-content",children:[e==="general"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.generalSettings")}),n.jsx("p",{children:t("settings.configureBasic")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.logLevel")}),n.jsx("p",{children:t("settings.logLevelDesc")})]}),n.jsxs("select",{value:p.logLevel,onChange:b=>w("logLevel",b.target.value),children:[n.jsx("option",{value:"debug",children:t("settings.debug")}),n.jsx("option",{value:"info",children:t("settings.info")}),n.jsx("option",{value:"warn",children:t("settings.warn")}),n.jsx("option",{value:"error",children:t("settings.error")})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.exportDirectory")}),n.jsx("p",{children:t("settings.exportDirectoryDesc")})]}),n.jsx("input",{type:"text",value:p.exportDirectory,onChange:b=>w("exportDirectory",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.autoUpdateRules")}),n.jsx("p",{children:t("settings.autoUpdateRulesDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAutoUpdate,onChange:b=>w("enableAutoUpdate",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="database"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.databaseSettings")}),n.jsx("p",{children:t("settings.configureDatabase")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.databasePath")}),n.jsx("p",{children:t("settings.databasePathDesc")})]}),n.jsx("input",{type:"text",value:p.databasePath,onChange:b=>w("databasePath",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.eventRetention")}),n.jsx("p",{children:t("settings.eventRetentionDesc")})]}),n.jsx("input",{type:"number",value:p.retentionDays,onChange:b=>w("retentionDays",Number(b.target.value)),className:"number-input",min:"1",max:"365"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxEvents")}),n.jsx("p",{children:t("settings.maxEventsDesc")})]}),n.jsx("input",{type:"number",value:p.maxEvents,onChange:b=>w("maxEvents",Number(b.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),e==="api"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.apiServerSettings")}),n.jsx("p",{children:t("settings.configureApiServer")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiHost")}),n.jsx("p",{children:t("settings.apiHostDesc")})]}),n.jsx("input",{type:"text",value:p.apiHost,onChange:b=>w("apiHost",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiPort")}),n.jsx("p",{children:t("settings.apiPortDesc")})]}),n.jsx("input",{type:"number",value:p.apiPort,onChange:b=>w("apiPort",Number(b.target.value)),className:"number-input",min:"1",max:"65535"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableCors")}),n.jsx("p",{children:t("settings.enableCorsDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.corsEnabled,onChange:b=>w("corsEnabled",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="collection"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.collectionSettings")}),n.jsx("p",{children:t("settings.configureCollection")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableAlerting")}),n.jsx("p",{children:t("settings.enableAlertingDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAlerting,onChange:b=>w("enableAlerting",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableLiveCollection")}),n.jsx("p",{children:t("settings.enableLiveCollectionDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableLiveCollection,onChange:b=>w("enableLiveCollection",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxImportFileSize")}),n.jsx("p",{children:t("settings.maxImportFileSizeDesc")})]}),n.jsx("input",{type:"number",value:p.maxImportFileSize,onChange:b=>w("maxImportFileSize",Number(b.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),e==="advanced"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.advancedSettings")}),n.jsx("p",{children:t("settings.expertConfig")})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("h4",{children:["⚠️ ",t("settings.warning")]}),n.jsx("p",{children:t("settings.warningDesc")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.parserWorkers")}),n.jsx("p",{children:t("settings.parserWorkersDesc")})]}),n.jsx("input",{type:"number",value:p.parserWorkers,onChange:b=>w("parserWorkers",Number(b.target.value)),className:"number-input",min:"1",max:"32"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.memoryLimit")}),n.jsx("p",{children:t("settings.memoryLimitDesc")})]}),n.jsx("input",{type:"number",value:p.memoryLimit,onChange:b=>w("memoryLimit",Number(b.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),n.jsxs("div",{className:"settings-actions",children:[u&&n.jsx("span",{className:"error-text",children:u}),n.jsx("button",{onClick:x,className:"btn-primary",disabled:o,children:t(o?"settings.saving":"settings.saveChanges")}),n.jsx("button",{onClick:N,className:"btn-secondary",disabled:o,children:t("settings.resetDefaults")})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function L_(){const{t}=st(),[e,s]=E.useState(null),[r,l]=E.useState(!0),[o,c]=E.useState(null),[u,h]=E.useState("5m"),[p,m]=E.useState({events:[],alerts:[],memory:[],timestamps:[]}),x=E.useRef(null),N=()=>{Kn.getMetrics().then(C=>{s(C.data),l(!1),m(R=>{const T=new Date().toLocaleTimeString(),W=[...R.events,C.data.total_events].slice(-20),_=[...R.alerts,C.data.total_alerts].slice(-20),H=[...R.memory,C.data.memory_usage_mb].slice(-20),L=[...R.timestamps,T].slice(-20);return{events:W,alerts:_,memory:H,timestamps:L}})}).catch(C=>{c(C.message||t("common.error")),l(!1)})};E.useEffect(()=>{N();const C=setInterval(N,5e3);return()=>clearInterval(C)},[]),E.useEffect(()=>{x.current&&p.events.length>1&&w()},[p]);const w=()=>{const C=x.current;if(!C)return;const R=C.getContext("2d");if(!R)return;const T=C.width,W=C.height,_=40;R.clearRect(0,0,T,W);const H=Math.max(...p.events,1),L=Math.min(...p.events,0),P=H-L||1;R.strokeStyle="#333",R.lineWidth=1;for(let K=0;K<=4;K++){const q=_+(W-2*_)*K/4;R.beginPath(),R.moveTo(_,q),R.lineTo(T-_,q),R.stroke()}const A=(T-2*_)/(p.events.length-1);R.strokeStyle="#00d9ff",R.lineWidth=2,R.beginPath(),p.events.forEach((K,q)=>{const I=_+q*A,$=_+(W-2*_)*(1-(K-L)/P);q===0?R.moveTo(I,$):R.lineTo(I,$)}),R.stroke(),R.fillStyle="#00d9ff",p.events.forEach((K,q)=>{const I=_+q*A,$=_+(W-2*_)*(1-(K-L)/P);R.beginPath(),R.arc(I,$,3,0,Math.PI*2),R.fill()})},b=C=>{const R=Math.floor(C/86400),T=Math.floor(C%86400/3600),W=Math.floor(C%3600/60);return R>0?`${R}d ${T}h ${W}m`:T>0?`${T}h ${W}m`:`${W}m`};if(r)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})});if(o)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"error-state",children:["❌ ",o]})});const j=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return n.jsxs("div",{className:"metrics-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("metrics.title")}),n.jsxs("div",{className:"time-range-selector",children:[n.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),n.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),n.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card large",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"📊"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),n.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),n.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"🚨"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),n.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),n.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"💾"}),n.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),n.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),n.jsx("div",{className:"metric-bar",children:n.jsx("div",{className:"metric-bar-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"metric-sub",children:[j,"% of limit"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"⚡"}),n.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),n.jsx("div",{className:"metric-value uptime",children:b((e==null?void 0:e.uptime_seconds)||0)}),n.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),n.jsx("div",{className:"chart-section",children:n.jsxs("div",{className:"chart-card",children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:"Event Throughput"}),n.jsx("div",{className:"chart-legend",children:n.jsxs("span",{className:"legend-item",children:[n.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),n.jsx("div",{className:"chart-container",children:n.jsx("canvas",{ref:x,width:800,height:200})})]})}),n.jsxs("div",{className:"prometheus-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("metrics.prometheusFormat")}),n.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),n.jsx("pre",{className:"prometheus-code",children:y()})]}),n.jsx("style",{children:`
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}pa.register(io,ro,Kr,Ys,Mx,Ox,Ax,Dx);function O_(){const{t}=st(),[e,s]=E.useState([]),[r,l]=E.useState(null),[o,c]=E.useState(!0),[u,h]=E.useState(null),[p,m]=E.useState(null),[x,N]=E.useState({}),[w,b]=E.useState(!1),[j,y]=E.useState(!1),[C,R]=E.useState([]),[T,W]=E.useState(!1),[_,H]=E.useState(null),[L,P]=E.useState(!1);E.useEffect(()=>{M()},[]);const A=async()=>{try{W(!0);const ee=await Oi.listDetectors();R(ee.data.detectors||[])}catch(ee){console.error("Failed to fetch detectors:",ee)}finally{W(!1)}},K=ee=>{R(C.map(ce=>ce.name===ee?{...ce,enabled:!ce.enabled}:ce))},q=async()=>{try{await Oi.updateDetectors(C.map(ee=>({name:ee.name,enabled:ee.enabled}))),b(!1)}catch(ee){console.error("Failed to save detector config:",ee),alert("Failed to save configuration")}},I=()=>{A(),b(!0)},$=async ee=>{P(!0);try{if(ee){const fe=(await Oi.getRule(ee)).data.detector;H({...fe,suspicious_indicators:fe.suspicious_indicators||[],whitelist:fe.whitelist||[]})}else{const fe=(await Oi.listRules()).data.rules[0];H({...fe,suspicious_indicators:fe.suspicious_indicators||[],whitelist:fe.whitelist||[]})}y(!0)}catch(ce){console.error("Failed to fetch rule details:",ce)}finally{P(!1)}},U=async()=>{if(_)try{await Oi.updateRule({name:_.name,enabled:_.enabled,suspicious_indicators:_.suspicious_indicators,whitelist:_.whitelist}),y(!1),H(null)}catch(ee){console.error("Failed to save rule:",ee),alert("Failed to save rule configuration")}},X=(ee,ce)=>{if(!_)return;const fe=[..._.suspicious_indicators];fe[ee]=ce,H({..._,suspicious_indicators:fe})},k=()=>{_&&H({..._,suspicious_indicators:[..._.suspicious_indicators,""]})},z=ee=>{if(!_)return;const ce=_.suspicious_indicators.filter((fe,Ee)=>Ee!==ee);H({..._,suspicious_indicators:ce})},B=(ee,ce)=>{if(!_)return;const fe=[..._.whitelist];fe[ee]=ce,H({..._,whitelist:fe})},te=()=>{_&&H({..._,whitelist:[..._.whitelist,""]})},se=ee=>{if(!_)return;const ce=_.whitelist.filter((fe,Ee)=>Ee!==ee);H({..._,whitelist:ce})},M=async()=>{try{c(!0);const ee=new URLSearchParams;x.category&&ee.append("category",x.category),x.technique&&ee.append("technique",x.technique);const fe=(await Oi.detect(ee.toString()?`?${ee.toString()}`:"")).data;s(fe.detections||[]),l(Z(fe.detections||[])),h(null)}catch(ee){h(ee instanceof Error?ee.message:"Unknown error")}finally{c(!1)}},Z=ee=>{const ce={total_detections:ee.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return ee.forEach(fe=>{var Me;const Ee=((Me=fe.severity)==null?void 0:Me.toLowerCase())||"info";Ee in ce.by_severity&&ce.by_severity[Ee]++,ce.by_category[fe.category]=(ce.by_category[fe.category]||0)+1,ce.by_technique[fe.technique]=(ce.by_technique[fe.technique]||0)+1}),ce},ue=e.filter(ee=>{var ce;return!(x.severity&&((ce=ee.severity)==null?void 0:ce.toLowerCase())!==x.severity||x.category&&ee.category!==x.category||x.technique&&ee.technique!==x.technique)}),pe={labels:Object.keys((r==null?void 0:r.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((r==null?void 0:r.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},Ne={labels:Object.keys((r==null?void 0:r.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((r==null?void 0:r.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return o?n.jsx("div",{className:"persistence-page",children:n.jsx("div",{className:"loading",children:t("common.loading")})}):u?n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),n.jsx("button",{onClick:M,className:"btn btn-primary",children:t("common.confirm")})]}):n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:t("persistence.title")}),n.jsx("button",{onClick:M,className:"btn btn-primary",children:t("persistence.rescan")}),n.jsx("button",{onClick:I,className:"btn btn-secondary",children:t("persistence.detectorConfig")||"Detector Config"})]}),w&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:n.jsxs("div",{className:"modal-content detector-config-modal",onClick:ee=>ee.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:t("persistence.detectorConfig")||"Detector Configuration"}),n.jsx("button",{className:"close-btn",onClick:()=>b(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"config-description",children:t("persistence.detectorConfigDesc")||"Enable or disable individual detectors. Changes will take effect on next scan."}),T?n.jsx("div",{className:"loading",children:t("common.loading")}):n.jsx("div",{className:"detectors-list",children:C.map(ee=>n.jsxs("div",{className:"detector-item",children:[n.jsxs("label",{className:"detector-checkbox",children:[n.jsx("input",{type:"checkbox",checked:ee.enabled,onChange:()=>K(ee.name)}),n.jsx("span",{className:"detector-name",children:ee.name.replace(/_/g," ")})]}),n.jsx("span",{className:"detector-technique",children:ee.technique}),n.jsx("span",{className:"detector-description",children:ee.description}),n.jsx("button",{className:"edit-rule-btn",onClick:ce=>{ce.stopPropagation(),b(!1),$(ee.name)},children:t("persistence.editRule")||"Edit Rule"})]},ee.name))}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:q,className:"btn btn-primary",children:t("common.save")||"Save"}),n.jsx("button",{onClick:()=>b(!1),className:"btn btn-secondary",children:t("common.cancel")||"Cancel"})]})]})]})}),r&&n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card stat-total",children:[n.jsx("div",{className:"stat-value",children:r.total_detections}),n.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),n.jsxs("div",{className:"stat-card stat-critical",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.critical}),n.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),n.jsxs("div",{className:"stat-card stat-high",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.high}),n.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),n.jsxs("div",{className:"stat-card stat-medium",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.medium}),n.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),n.jsxs("div",{className:"stat-card stat-low",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.low}),n.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),n.jsxs("div",{className:"charts-grid",children:[n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.bySeverity")}),n.jsx("div",{className:"chart-container",children:n.jsx(Vd,{data:pe,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.byCategory")}),n.jsx("div",{className:"chart-container",children:n.jsx(Vd,{data:Ne,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),n.jsxs("div",{className:"filters",children:[n.jsxs("select",{value:x.severity||"",onChange:ee=>N({...x,severity:ee.target.value||void 0}),children:[n.jsx("option",{value:"",children:t("persistence.allSeverities")}),n.jsx("option",{value:"critical",children:t("persistence.critical")}),n.jsx("option",{value:"high",children:t("persistence.high")}),n.jsx("option",{value:"medium",children:t("persistence.medium")}),n.jsx("option",{value:"low",children:t("persistence.low")})]}),n.jsxs("select",{value:x.category||"",onChange:ee=>N({...x,category:ee.target.value||void 0}),children:[n.jsx("option",{value:"",children:t("persistence.allCategories")}),n.jsx("option",{value:"Registry",children:"注册表"}),n.jsx("option",{value:"ScheduledTask",children:"计划任务"}),n.jsx("option",{value:"Service",children:"服务"}),n.jsx("option",{value:"WMI",children:"WMI"}),n.jsx("option",{value:"COM",children:"COM"}),n.jsx("option",{value:"BITS",children:"BITS"}),n.jsx("option",{value:"Accessibility",children:"辅助功能"})]}),n.jsx("button",{onClick:M,className:"btn btn-secondary",children:t("persistence.rescan")})]}),n.jsx("div",{className:"detections-table-container",children:n.jsxs("table",{className:"detections-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("persistence.severity")}),n.jsx("th",{children:t("persistence.technique")}),n.jsx("th",{children:t("persistence.category")}),n.jsx("th",{children:t("persistence.title")}),n.jsx("th",{children:t("persistence.evidence")}),n.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),n.jsx("tbody",{children:ue.map(ee=>{var ce,fe,Ee,Me;return n.jsxs("tr",{onClick:()=>m(ee),className:"detection-row",children:[n.jsx("td",{children:n.jsx("span",{className:`severity-badge severity-${(ce=ee.severity)==null?void 0:ce.toLowerCase()}`,children:t(`persistence.${(fe=ee.severity)==null?void 0:fe.toLowerCase()}`)})}),n.jsx("td",{children:n.jsx("span",{className:"technique-tag",children:ee.technique})}),n.jsx("td",{children:ee.category}),n.jsx("td",{children:ee.title}),n.jsx("td",{className:"evidence-cell",children:((Ee=ee.evidence)==null?void 0:Ee.key)&&n.jsx("div",{className:"evidence-key",children:ee.evidence.key})}),n.jsx("td",{children:t(`persistence.${(Me=ee.false_positive_risk)==null?void 0:Me.toLowerCase()}Risk`)||ee.false_positive_risk})]},ee.id)})})]})}),p&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(null),children:n.jsxs("div",{className:"modal-content",onClick:ee=>ee.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:p.title}),n.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.basicInfo")}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),p.explanation&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.explanation")||"规则解读"}),n.jsx("p",{children:p.explanation})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.description")}),n.jsx("p",{children:p.description})]}),p.recommendation&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.recommendation")||"处置建议"}),n.jsx("p",{style:{whiteSpace:"pre-wrap"},children:p.recommendation})]}),p.real_case&&p.real_case!=="暂无真实案例"&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.realCase")||"真实案例"}),n.jsx("p",{children:p.real_case})]})]})]})}),j&&_&&n.jsx("div",{className:"modal-overlay",onClick:()=>y(!1),children:n.jsxs("div",{className:"modal-content rule-editor-modal",onClick:ee=>ee.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:t("persistence.ruleEditor")||"Rule Editor"}),n.jsx("button",{className:"close-btn",onClick:()=>y(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[L?n.jsx("div",{className:"loading",children:t("common.loading")}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"rule-editor-header",children:[n.jsxs("div",{className:"rule-info",children:[n.jsx("h3",{children:_.name.replace(/_/g," ")}),n.jsx("p",{children:_.description}),n.jsx("span",{className:"technique-tag",children:_.technique})]}),n.jsxs("label",{className:"rule-enabled-toggle",children:[n.jsx("input",{type:"checkbox",checked:_.enabled,onChange:ee=>H({..._,enabled:ee.target.checked})}),n.jsx("span",{children:_.enabled?t("persistence.enabled")||"Enabled":t("persistence.disabled")||"Disabled"})]})]}),_.registry_paths&&_.registry_paths.length>0&&n.jsxs("div",{className:"rule-section",children:[n.jsx("h4",{children:t("persistence.registryPaths")||"Registry Paths"}),n.jsx("div",{className:"paths-list",children:_.registry_paths.map((ee,ce)=>n.jsx("div",{className:"path-item",children:ee},ce))})]}),n.jsxs("div",{className:"rule-section",children:[n.jsx("h4",{children:t("persistence.suspiciousIndicators")||"Suspicious Indicators"}),n.jsx("p",{className:"section-desc",children:t("persistence.indicatorDesc")||"Keywords that trigger detection when found in the target"}),n.jsxs("div",{className:"indicators-list",children:[_.suspicious_indicators.map((ee,ce)=>n.jsxs("div",{className:"indicator-item",children:[n.jsx("input",{type:"text",value:ee,onChange:fe=>X(ce,fe.target.value),placeholder:"Enter indicator..."}),n.jsx("button",{className:"remove-btn",onClick:()=>z(ce),children:"×"})]},ce)),n.jsxs("button",{className:"add-btn",onClick:k,children:["+ ",t("persistence.addIndicator")||"Add Indicator"]})]})]}),n.jsxs("div",{className:"rule-section",children:[n.jsx("h4",{children:t("persistence.whitelistEntries")||"Whitelist Entries"}),n.jsx("p",{className:"section-desc",children:t("persistence.whitelistDesc")||"Entries that will not trigger detection"}),n.jsxs("div",{className:"whitelist-list",children:[_.whitelist.map((ee,ce)=>n.jsxs("div",{className:"whitelist-item",children:[n.jsx("input",{type:"text",value:ee,onChange:fe=>B(ce,fe.target.value),placeholder:"Enter whitelist entry..."}),n.jsx("button",{className:"remove-btn",onClick:()=>se(ce),children:"×"})]},ce)),n.jsxs("button",{className:"add-btn",onClick:te,children:["+ ",t("persistence.addWhitelist")||"Add Whitelist Entry"]})]})]})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:()=>y(!1),className:"btn btn-secondary",children:t("common.cancel")||"Cancel"}),n.jsx("button",{onClick:U,className:"btn btn-primary",children:t("common.save")||"Save"})]})]})]})})]})}const ps={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍","domain-controller":"🏢"},z_={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},I_=(t,e="zh")=>{const s=e.startsWith("zh")?"zh":"en";return z_[s][t]||t},F_=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"},{id:"domain-services",name:"Domain Services"}];function B_(){var U,X;const{t,locale:e}=st(),s=Qs(),[r,l]=E.useState(!1),[o,c]=E.useState(null),[u,h]=E.useState("brute-force"),[p,m]=E.useState(24),[x,N]=E.useState(""),[w,b]=E.useState(!1),[j,y]=E.useState(null),[C,R]=E.useState(!1),T=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:ps["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:ps.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:ps.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:ps.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:ps["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:ps["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:ps.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:ps["privilege-escalation"],category:"privilege-escalation",recommended:!1},{id:"domain_controller",name:t("analyze.domainController"),desc:t("analyze.domainControllerDesc"),icon:ps["domain-controller"],category:"domain-services",recommended:!1}],W=async()=>{var k,z;l(!0),N("");try{const B=u.replace(/_/g,"-"),te=await hd.run(B,{hours:p});c(te.data)}catch(B){N(((z=(k=B.response)==null?void 0:k.data)==null?void 0:z.error)||"Failed to run analyzer")}finally{l(!1)}},_=async k=>{R(!0);try{const z=await hd.getRule(k);y(z.data.rule),b(!0)}catch(z){console.error("Failed to fetch rule:",z)}finally{R(!1)}},H=async()=>{if(j)try{await hd.updateRule({name:j.name,enabled:j.enabled,thresholds:j.thresholds,patterns:j.patterns,whitelist:j.whitelist}),b(!1),y(null)}catch(k){console.error("Failed to save rule:",k),alert("Failed to save rule configuration")}},L=(k,z)=>{if(!j)return;const B=[...j.patterns];B[k]=z,y({...j,patterns:B})},P=()=>{j&&y({...j,patterns:[...j.patterns,""]})},A=k=>{if(!j)return;const z=j.patterns.filter((B,te)=>te!==k);y({...j,patterns:z})},K=(k,z)=>{if(!j)return;const B=[...j.whitelist];B[k]=z,y({...j,whitelist:B})},q=()=>{j&&y({...j,whitelist:[...j.whitelist,""]})},I=k=>{if(!j)return;const z=j.whitelist.filter((B,te)=>te!==k);y({...j,whitelist:z})},$=T.reduce((k,z)=>(k[z.category]||(k[z.category]=[]),k[z.category].push(z),k),{});return n.jsxs("div",{className:"analyze-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("analyze.title")}),n.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),n.jsxs("div",{className:"analyze-grid",children:[n.jsxs("div",{className:"analyzer-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries($).map(([k,z])=>{var B;return n.jsxs("div",{className:"analyzer-category",children:[n.jsx("div",{className:"category-header",children:((B=F_.find(te=>te.id===k))==null?void 0:B.name)||k}),n.jsx("div",{className:"analyzer-list",children:z.map(te=>n.jsxs("div",{className:`analyzer-card ${u===te.id?"selected":""}`,onClick:()=>h(te.id),children:[n.jsx("div",{className:"analyzer-icon",children:te.icon}),n.jsxs("div",{className:"analyzer-content",children:[n.jsxs("div",{className:"analyzer-header",children:[n.jsx("span",{className:"analyzer-name",children:te.name}),te.recommended&&n.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),n.jsx("p",{className:"analyzer-desc",children:te.desc})]}),n.jsx("div",{className:"select-indicator",children:u===te.id&&"✓"})]},te.id))})]},k)})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.configuration")})}),n.jsxs("div",{className:"config-card",children:[n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.selectedAnalyzer")}),n.jsxs("div",{className:"selected-analyzer-display",children:[n.jsx("span",{className:"analyzer-icon",children:ps[u]}),n.jsx("span",{children:(U=T.find(k=>k.id===u))==null?void 0:U.name})]})]}),n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.timeWindow")}),n.jsxs("div",{className:"time-selector",children:[n.jsx("button",{className:p===1?"active":"",onClick:()=>m(1),children:"1h"}),n.jsx("button",{className:p===6?"active":"",onClick:()=>m(6),children:"6h"}),n.jsx("button",{className:p===24?"active":"",onClick:()=>m(24),children:"24h"}),n.jsx("button",{className:p===72?"active":"",onClick:()=>m(72),children:"72h"}),n.jsx("button",{className:p===168?"active":"",onClick:()=>m(168),children:"7d"})]})]}),n.jsx("button",{onClick:W,disabled:r,className:"btn-primary btn-run",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})}),n.jsx("button",{onClick:()=>_(u),className:"btn-secondary btn-edit-rule",children:t("analyze.editRule")||"Edit Rule"})]}),x&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:x})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("analyze.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>s("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),o&&n.jsxs("div",{className:"results-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.results")})}),n.jsxs("div",{className:"results-grid",children:[n.jsxs("div",{className:"result-summary-card",children:[n.jsxs("div",{className:"result-header",children:[n.jsx("span",{className:"result-icon",children:ps[o.type]}),n.jsx("span",{className:"result-type",children:(X=T.find(k=>k.id===o.type))==null?void 0:X.name})]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.severity")}),n.jsx("span",{className:`severity-badge severity-${o.severity}`,children:o.severity.toUpperCase()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.score")}),n.jsx("span",{className:"score-value",children:o.score.toFixed(1)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.findings")}),n.jsx("span",{className:"findings-count",children:o.findings.length})]})]}),n.jsx("p",{className:"result-summary",children:o.summary})]}),o.findings.length>0&&n.jsxs("div",{className:"findings-card",children:[n.jsx("h4",{children:t("analyze.findingsList")}),n.jsx("div",{className:"findings-list",children:o.findings.map((k,z)=>n.jsxs("div",{className:"finding-item",children:[n.jsxs("div",{className:"finding-header",children:[n.jsx("span",{className:`severity-indicator severity-${k.severity}`}),n.jsx("span",{className:"finding-desc",children:I_(k.description,e)})]}),n.jsxs("div",{className:"finding-meta",children:[k.rule_name&&n.jsx("span",{className:"rule-name",children:k.rule_name}),n.jsxs("span",{className:"finding-score",children:["Score: ",k.score.toFixed(1)]}),k.evidence&&k.evidence.length>0&&n.jsxs("span",{className:"evidence-count",children:[k.evidence.length," events"]})]}),k.evidence&&k.evidence.length>0&&n.jsxs("div",{className:"evidence-list",children:[n.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),k.evidence.slice(0,5).map((B,te)=>{var se;return n.jsxs("div",{className:"evidence-item",children:[n.jsx("span",{className:"evidence-time",children:new Date(B.timestamp).toLocaleString()}),n.jsx("span",{className:"evidence-user",children:B.user||"-"}),n.jsx("span",{className:"evidence-computer",children:B.computer||"-"}),n.jsxs("span",{className:"evidence-msg",title:B.message,children:[(se=B.message)==null?void 0:se.substring(0,80),B.message&&B.message.length>80?"...":""]})]},te)}),k.evidence.length>5&&n.jsxs("div",{className:"evidence-more",children:["+",k.evidence.length-5," more events"]})]})]},z))})]})]})]}),n.jsxs("div",{className:"analyzer-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),n.jsx("div",{className:"info-grid",children:T.slice(0,4).map(k=>n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:k.icon}),n.jsxs("div",{className:"info-content",children:[n.jsx("h4",{children:k.name}),n.jsx("p",{children:k.desc})]})]},k.id))})]}),w&&j&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:n.jsxs("div",{className:"modal-content rule-editor-modal",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"rule-editor-header",children:[n.jsxs("div",{className:"rule-info",children:[n.jsx("h3",{children:j.name.replace(/_/g," ")}),n.jsx("p",{children:j.description}),n.jsx("span",{className:"technique-tag",children:j.technique})]}),n.jsxs("label",{className:"rule-enabled-toggle",children:[n.jsx("input",{type:"checkbox",checked:j.enabled,onChange:k=>y({...j,enabled:k.target.checked})}),n.jsx("span",{className:j.enabled?"enabled":"disabled",children:j.enabled?t("persistence.enabled")||"Enabled":t("persistence.disabled")||"Disabled"})]})]}),n.jsxs("div",{className:"modal-body",children:[C?n.jsx("div",{className:"loading",children:t("common.loading")}):n.jsxs(n.Fragment,{children:[j.thresholds&&Object.keys(j.thresholds).length>0&&n.jsxs("div",{className:"rule-section",children:[n.jsxs("h4",{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 20V10M18 20V4M6 20v-4"})}),t("analyze.thresholds")||"Thresholds"]}),n.jsx("div",{className:"thresholds-list",children:Object.entries(j.thresholds).map(([k,z])=>n.jsxs("div",{className:"threshold-item",children:[n.jsx("span",{className:"threshold-key",children:k.replace(/_/g," ")}),n.jsx("input",{type:"number",value:z,onChange:B=>y({...j,thresholds:{...j.thresholds,[k]:parseInt(B.target.value)||0}})})]},k))})]}),n.jsxs("div",{className:"rule-section",children:[n.jsxs("h4",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("analyze.patterns")||"Detection Patterns"]}),n.jsx("p",{className:"section-desc",children:t("analyze.patternsDesc")||"Keywords or patterns that trigger detection"}),n.jsxs("div",{className:"patterns-list",children:[j.patterns.map((k,z)=>n.jsxs("div",{className:"pattern-item",children:[n.jsx("input",{type:"text",value:k,onChange:B=>L(z,B.target.value),placeholder:"Enter pattern..."}),n.jsx("button",{className:"remove-btn",onClick:()=>A(z),children:"×"})]},z)),n.jsxs("button",{className:"add-btn",onClick:P,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),t("analyze.addPattern")||"Add Pattern"]})]})]}),n.jsxs("div",{className:"rule-section",children:[n.jsxs("h4",{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M9 12l2 2 4-4"}),n.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"})]}),t("analyze.whitelist")||"Whitelist"]}),n.jsx("p",{className:"section-desc",children:t("analyze.whitelistDesc")||"Entries that will not trigger detection"}),n.jsxs("div",{className:"whitelist-list",children:[j.whitelist.map((k,z)=>n.jsxs("div",{className:"whitelist-item",children:[n.jsx("input",{type:"text",value:k,onChange:B=>K(z,B.target.value),placeholder:"Enter whitelist entry..."}),n.jsx("button",{className:"remove-btn",onClick:()=>I(z),children:"×"})]},z)),n.jsxs("button",{className:"add-btn",onClick:q,children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M12 5v14M5 12h14"})}),t("analyze.addWhitelist")||"Add Whitelist Entry"]})]})]})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsxs("button",{onClick:()=>b(!1),className:"btn btn-secondary",children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M6 18L18 6M6 6l12 12"})}),t("common.cancel")||"Cancel"]}),n.jsxs("button",{onClick:H,className:"btn btn-primary",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"}),n.jsx("polyline",{points:"17,21 17,13 7,13 7,21"}),n.jsx("polyline",{points:"7,3 7,8 15,8"})]}),t("common.save")||"Save"]})]})]})]})})]})}const Jm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},$_={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function W_(){const{t}=st(),e=Qs(),[s,r]=E.useState(!1),[l,o]=E.useState([]),[c,u]=E.useState("24h"),[h,p]=E.useState(""),[m,x]=E.useState(!1),[N,w]=E.useState(null),b=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],j=async()=>{var L,P;r(!0),p("");try{const A=await zj.analyze({time_window:c});o(A.data.results||[]),x(!0)}catch(A){p(((P=(L=A.response)==null?void 0:L.data)==null?void 0:P.error)||"Failed to run correlation analysis")}finally{r(!1)}},y=L=>Jm[L.toLowerCase()]||Jm.info,C=L=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[L.toLowerCase()]||L,R=L=>{for(const[P,A]of Object.entries($_))if(L.includes(P))return A;return"🎯"},T=L=>{try{return new Date(L).toLocaleString()}catch{return L}},W=(L,P)=>{try{const A=new Date(L).getTime(),q=new Date(P).getTime()-A,I=Math.floor(q/1e3),$=Math.floor(I/60),U=Math.floor($/60);return U>0?`${U}h ${$%60}m`:$>0?`${$}m ${I%60}s`:`${I}s`}catch{return"N/A"}},_=E.useMemo(()=>{if(l.length===0)return null;const L={critical:0,high:0,medium:0,low:0};return l.forEach(P=>{const A=P.severity.toLowerCase();L.hasOwnProperty(A)&&L[A]++}),{totalEvents:l.reduce((P,A)=>P+A.event_count,0),severityCounts:L,avgEventsPerRule:Math.round(l.reduce((P,A)=>P+A.event_count,0)/l.length)}},[l]),H=E.useMemo(()=>{if(l.length===0)return[];const L=Math.max(...l.map(P=>P.event_count));return l.map(P=>{const A=Math.round(P.event_count/L*20);return{...P,bar:"█".repeat(A)+"░".repeat(20-A)}})},[l]);return n.jsxs("div",{className:"correlation-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("correlation.title")}),n.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),n.jsxs("div",{className:"correlation-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("correlation.timeWindow")}),n.jsx("div",{className:"time-selector",children:b.map(L=>n.jsx("button",{className:c===L.value?"active":"",onClick:()=>u(L.value),children:L.label},L.value))})]}),n.jsx("button",{onClick:j,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:h})]}),m&&!s&&l.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🔍"}),n.jsx("h3",{children:t("correlation.noResults")}),n.jsx("p",{children:t("correlation.noResultsDesc")})]}),_&&n.jsxs("div",{className:"correlation-stats",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:l.length}),n.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📝"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:_.totalEvents.toLocaleString()}),n.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),n.jsxs("div",{className:"stat-card critical",children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:_.severityCounts.critical}),n.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),n.jsxs("div",{className:"stat-card high",children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:_.severityCounts.high}),n.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),H.length>0&&n.jsxs("div",{className:"attack-chain-visual",children:[n.jsx("h3",{children:t("correlation.attackChainTimeline")}),n.jsx("div",{className:"chain-bars",children:H.map((L,P)=>n.jsxs("div",{className:"chain-bar-item",children:[n.jsxs("div",{className:"chain-bar-header",children:[n.jsx("span",{className:"chain-icon",children:R(L.description)}),n.jsx("span",{className:"chain-name",children:L.rule_name}),n.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(L.severity)}})]}),n.jsx("div",{className:"chain-bar-track",children:n.jsx("span",{className:"chain-bar-fill",style:{width:`${L.event_count/_.totalEvents*100}%`,backgroundColor:y(L.severity)}})}),n.jsxs("div",{className:"chain-bar-meta",children:[n.jsxs("span",{className:"chain-events",children:[L.event_count," events"]}),n.jsx("span",{className:"chain-duration",children:W(L.start_time,L.end_time)})]})]},P))})]}),l.length>0&&n.jsxs("div",{className:"correlation-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("correlation.results")}),n.jsxs("span",{className:"results-count",children:[l.length," ",t("correlation.rulesTriggered")]})]}),n.jsx("div",{className:"results-grid",children:l.map((L,P)=>n.jsxs("div",{className:`correlation-card ${N===P?"expanded":""}`,onClick:()=>w(N===P?null:P),children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"rule-info",children:[n.jsx("span",{className:"severity-badge",style:{backgroundColor:y(L.severity)},children:C(L.severity)}),n.jsx("h4",{children:L.rule_name})]}),n.jsxs("div",{className:"event-count",children:[n.jsx("span",{className:"count-value",children:L.event_count}),n.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),n.jsx("div",{className:"card-icon",children:R(L.description)}),n.jsx("p",{className:"rule-description",children:L.description}),n.jsxs("div",{className:"card-footer",children:[n.jsxs("div",{className:"time-info",children:[n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),n.jsx("span",{className:"time-value",children:T(L.start_time)})]}),n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),n.jsx("span",{className:"time-value",children:T(L.end_time)})]})]}),n.jsxs("div",{className:"duration-badge",children:["⏱️ ",W(L.start_time,L.end_time)]})]}),N===P&&n.jsxs("div",{className:"card-expanded",children:[n.jsxs("div",{className:"expanded-section",children:[n.jsx("h5",{children:t("correlation.attackPattern")}),n.jsxs("div",{className:"pattern-visual",children:[n.jsx("span",{className:"pattern-icon",children:"🎯"}),n.jsx("span",{className:"pattern-text",children:L.rule_name}),n.jsx("span",{className:"pattern-arrow",children:"→"}),n.jsxs("span",{className:"pattern-target",children:[C(L.severity)," Risk"]})]})]}),n.jsxs("div",{className:"expanded-actions",children:[n.jsxs("button",{className:"action-btn",onClick:A=>{A.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"action-btn",onClick:A=>{A.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},P))})]}),n.jsxs("div",{className:"correlation-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("correlation.aboutCorrelation")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("correlation.aboutDesc")})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("correlation.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const Zm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function U_(){const{t}=st(),e=Qs(),[s,r]=E.useState(!1),[l,o]=E.useState(null),[c,u]=E.useState(""),[h,p]=E.useState("overview"),m=async()=>{var y,C;r(!0),u("");try{const R=await Ij.analyze();o(R.data)}catch(R){u(((C=(y=R.response)==null?void 0:y.data)==null?void 0:C.error)||"Failed to run multi-machine analysis")}finally{r(!1)}},x=y=>Zm[y.toLowerCase()]||Zm.info,N=y=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[y.toLowerCase()]||y,w=E.useMemo(()=>{if(!l||l.machines.length===0)return{nodes:[],edges:[]};const y=l.machines.map(R=>({id:R.id,name:R.name,ip:R.ip,role:R.role,suspicious:l.lateral_movement.some(T=>T.source_machine===R.name||T.target_machine===R.name)})),C=[];return l.lateral_movement.forEach(R=>{const T=y.find(_=>_.name===R.source_machine),W=y.find(_=>_.name===R.target_machine);T&&W&&C.push({from:T.id,to:W.id,user:R.user,severity:R.severity})}),{nodes:y,edges:C}},[l]),b=y=>{try{return new Date(y).toLocaleString()}catch{return y}},j=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return n.jsxs("div",{className:"multi-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("multi.title")}),n.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),n.jsx("div",{className:"multi-toolbar",children:n.jsx("button",{onClick:m,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:c})]}),l&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"analysis-summary",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.analysisId")}),n.jsx("p",{className:"analysis-id",children:l.analysis_id})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.machinesFound")}),n.jsx("p",{className:"summary-value",children:l.machines.length})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.suspiciousActivities")}),n.jsx("p",{className:"summary-value",style:{color:l.suspicious_count>0?"#dc2626":"#16a34a"},children:l.suspicious_count})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.lateralMovements")}),n.jsx("p",{className:"summary-value",children:l.lateral_movement.length})]})]}),n.jsx("p",{className:"summary-text",children:l.summary}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),n.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),n.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&n.jsx("div",{className:"tab-content",children:l.machines.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🖥️"}),n.jsx("h3",{children:t("multi.noMachines")}),n.jsx("p",{children:t("multi.noMachinesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"machine-graph",children:[n.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),n.jsxs("div",{className:"graph-container",children:[n.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,C)=>{const R=l.lateral_movement.some(T=>T.source_machine===y.name||T.target_machine===y.name);return n.jsxs("div",{className:`graph-node ${R?"suspicious":""}`,style:{top:`${20+C%3*25}%`,left:`${20+C%4*20}%`},children:[n.jsx("span",{className:"node-icon",children:j(y.role)}),n.jsx("span",{className:"node-name",children:y.name}),n.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),R&&n.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),n.jsxs("div",{className:"graph-legend",children:[n.jsx("span",{className:"legend-item",children:"🖥️ Server"}),n.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),n.jsx("span",{className:"legend-item",children:"💻 Workstation"}),n.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),n.jsx("div",{className:"machines-grid",children:l.machines.map((y,C)=>{const R=l.lateral_movement.some(T=>T.source_machine===y.name||T.target_machine===y.name);return n.jsxs("div",{className:`machine-card ${R?"alert":""}`,children:[n.jsxs("div",{className:"machine-header",children:[n.jsx("span",{className:"machine-icon",children:j(y.role)}),n.jsx("h4",{children:y.name}),R&&n.jsx("span",{className:"alert-badge",children:"⚠️"})]}),n.jsxs("div",{className:"machine-details",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"IP:"}),n.jsx("span",{className:"value",children:y.ip||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),n.jsx("span",{className:"value",children:y.domain||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),n.jsx("span",{className:"value",children:y.role||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"OS:"}),n.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),n.jsx("span",{className:"value",children:b(y.last_seen)})]})]}),R&&n.jsx("div",{className:"machine-alert-indicator",children:n.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},C)})})]})}),h==="crossmachine"&&n.jsx("div",{className:"tab-content",children:l.cross_machine_activity.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noSuspiciousActivity")}),n.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):n.jsx("div",{className:"activity-list",children:l.cross_machine_activity.map((y,C)=>n.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[n.jsxs("div",{className:"activity-header",children:[n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-icon",children:"👤"}),n.jsx("span",{className:"user-name",children:y.user})]}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})]}),n.jsxs("div",{className:"activity-body",children:[n.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",y.machine_count," ",t("multi.machines"),":"]}),n.jsx("div",{className:"machine-tags",children:y.machines.map((R,T)=>n.jsx("span",{className:"machine-tag",children:R},T))}),n.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",y.login_count]}),n.jsxs("div",{className:"recommendation",children:[n.jsx("span",{className:"rec-icon",children:"💡"}),n.jsx("span",{children:y.recommendation})]})]})]},C))})}),h==="lateral"&&n.jsx("div",{className:"tab-content",children:l.lateral_movement.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noLateralMovement")}),n.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"lateral-summary",children:n.jsxs("div",{className:"lateral-stat",children:[n.jsx("span",{className:"stat-icon",children:"🔄"}),n.jsxs("span",{className:"stat-text",children:[l.lateral_movement.length," lateral movements detected"]})]})}),n.jsx("div",{className:"lateral-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("multi.time")}),n.jsx("th",{children:t("multi.source")}),n.jsx("th",{children:t("multi.target")}),n.jsx("th",{children:t("multi.user")}),n.jsx("th",{children:t("multi.event")}),n.jsx("th",{children:t("multi.description")}),n.jsx("th",{children:t("multi.severity")}),n.jsx("th",{children:"MITRE"})]})}),n.jsx("tbody",{children:l.lateral_movement.map((y,C)=>n.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[n.jsx("td",{className:"time-cell",children:b(y.timestamp)}),n.jsx("td",{className:"source-cell",children:n.jsx("span",{className:"machine-badge source",children:y.source_machine})}),n.jsx("td",{className:"target-cell",children:n.jsx("span",{className:"machine-badge target",children:y.target_machine})}),n.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),n.jsx("td",{className:"event-cell",children:y.event_id}),n.jsx("td",{className:"desc-cell",children:y.description}),n.jsx("td",{children:n.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})}),n.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((R,T)=>n.jsx("span",{className:"mitre-tag",children:R},T))})]},C))})]})})]})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("multi.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function H_(){const{t}=st(),[e,s]=E.useState("SELECT * FROM events LIMIT 10"),[r,l]=E.useState(!1),[o,c]=E.useState(null),[u,h]=E.useState(""),[p,m]=E.useState([]),[x,N]=E.useState(!1),[w,b]=E.useState(""),j=E.useRef(null),y=async()=>{var A,K;if(!e.trim()){h(t("query.sqlRequired"));return}l(!0),h(""),c(null);const P=performance.now();try{const q=await Fj.execute({query:e,limit:100}),I=((performance.now()-P)/1e3).toFixed(2);b(I),c(q.data),C(e,!0,q.data.count,I)}catch(q){const I=((performance.now()-P)/1e3).toFixed(2);h(((K=(A=q.response)==null?void 0:A.data)==null?void 0:K.error)||"Failed to execute query"),C(e,!1,0,I),C(e,!1,0)}finally{l(!1)}},C=(P,A,K,q)=>{const I={id:Date.now().toString(),sql:P,timestamp:new Date().toISOString(),success:A,rowCount:K,duration:q};m($=>[I,...$.slice(0,49)])},R=P=>{s(P.sql),N(!1)},T=()=>{m([])},W=P=>{const A=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],K=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],q=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],I=[],$=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,U=P.match($)||[];let X=0;for(const k of U){const z=k.toUpperCase();k.startsWith("'")&&k.endsWith("'")?I.push(n.jsx("span",{className:"sql-string",children:k},X++)):k.startsWith('"')&&k.endsWith('"')?I.push(n.jsx("span",{className:"sql-string",children:k},X++)):q.includes(k)?I.push(n.jsx("span",{className:"sql-operator",children:k},X++)):K.includes(z)?I.push(n.jsx("span",{className:"sql-function",children:k},X++)):A.includes(z)?I.push(n.jsx("span",{className:"sql-keyword",children:k},X++)):/^\d+$/.test(k)?I.push(n.jsx("span",{className:"sql-number",children:k},X++)):I.push(n.jsx("span",{className:"sql-identifier",children:k},X++))}return n.jsx(n.Fragment,{children:I})},_=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],H=P=>{P.key==="Enter"&&(P.ctrlKey||P.metaKey)&&(P.preventDefault(),y())},L=P=>{if(!o)return;let A,K,q;if(P==="json")A=JSON.stringify(o,null,2),K="query_result.json",q="application/json";else{const X=o.columns.join(","),k=o.rows.map(z=>o.columns.map(B=>{const te=z[B];if(te==null)return"";const se=String(te);return se.includes(",")||se.includes('"')?`"${se.replace(/"/g,'""')}"`:se}).join(",")).join(`
`);A=X+`
`+k,K="query_result.csv",q="text/csv"}const I=new Blob([A],{type:q}),$=URL.createObjectURL(I),U=document.createElement("a");U.href=$,U.download=K,U.click(),URL.revokeObjectURL($)};return n.jsxs("div",{className:"query-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("query.title")}),n.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),n.jsxs("div",{className:"query-toolbar",children:[n.jsxs("div",{className:"preset-queries",children:[n.jsx("label",{children:t("query.presets")}),n.jsx("div",{className:"preset-buttons",children:_.map((P,A)=>n.jsx("button",{className:"preset-btn",onClick:()=>s(P.sql),title:P.sql,children:P.label},A))})]}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("button",{className:"history-btn",onClick:()=>N(!x),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),x&&n.jsxs("div",{className:"query-history-panel",children:[n.jsxs("div",{className:"history-header",children:[n.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),n.jsx("button",{className:"clear-btn",onClick:T,children:"🗑️ Clear"})]}),n.jsx("div",{className:"history-list",children:p.length===0?n.jsx("p",{className:"empty-history",children:"No query history"}):p.map(P=>n.jsxs("div",{className:`history-item ${P.success?"success":"error"}`,onClick:()=>R(P),children:[n.jsx("div",{className:"history-sql",children:P.sql}),n.jsxs("div",{className:"history-meta",children:[n.jsx("span",{className:"history-status",children:P.success?"✓":"✗"}),n.jsxs("span",{className:"history-rows",children:[P.rowCount," rows"]}),P.duration&&n.jsxs("span",{className:"history-duration",children:[P.duration,"s"]}),n.jsx("span",{className:"history-time",children:new Date(P.timestamp).toLocaleTimeString()})]})]},P.id))})]}),n.jsxs("div",{className:"query-editor",children:[n.jsxs("div",{className:"editor-header",children:[n.jsx("label",{children:t("query.sqlQuery")}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"format-btn",onClick:()=>{const P=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();s(P)},children:"🎨 Format"})})]}),n.jsxs("div",{className:"editor-wrapper",children:[n.jsx("div",{className:"sql-highlight",children:W(e)}),n.jsx("textarea",{ref:j,className:"sql-input",value:e,onChange:P=>s(P.target.value),onKeyDown:H,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),n.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),n.jsxs("div",{className:"query-actions",children:[n.jsx("button",{onClick:y,disabled:r,className:"btn-primary",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),o&&n.jsxs("div",{className:"result-actions",children:[n.jsx("button",{className:"export-btn",onClick:()=>L("json"),children:"📥 JSON"}),n.jsx("button",{className:"export-btn",onClick:()=>L("csv"),children:"📥 CSV"})]})]}),u&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:u})]}),o&&n.jsxs("div",{className:"query-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("query.results")}),n.jsxs("div",{className:"results-meta",children:[n.jsxs("span",{className:"results-count",children:[o.count," ",t("query.rowsReturned")]}),w&&n.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),o.columns.length>0&&o.rows.length>0?n.jsx("div",{className:"results-table-wrapper",children:n.jsxs("table",{className:"results-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"row-num",children:"#"}),o.columns.map((P,A)=>n.jsx("th",{children:P},A))]})}),n.jsx("tbody",{children:o.rows.map((P,A)=>n.jsxs("tr",{children:[n.jsx("td",{className:"row-num",children:A+1}),o.columns.map((K,q)=>n.jsx("td",{className:P[K]===null?"null-value":"",children:V_(P[K])},q))]},A))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📭"}),n.jsx("h3",{children:t("query.noResults")}),n.jsx("p",{children:t("query.noResultsDesc")})]})]}),n.jsxs("div",{className:"query-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("query.aboutQuery")})}),n.jsxs("div",{className:"info-content",children:[n.jsx("p",{children:t("query.aboutDesc")}),n.jsxs("div",{className:"example-queries",children:[n.jsx("h4",{children:t("query.exampleQueries")}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),n.jsx("p",{children:t("query.example1Desc")})]}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),n.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function V_(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const q_={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},Y_={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Q_(){const{t}=st(),e=Qs(),[s,r]=E.useState(!1),[l,o]=E.useState(null),[c,u]=E.useState([]),[h,p]=E.useState("analyze"),[m,x]=E.useState(24),[N,w]=E.useState(""),[b,j]=E.useState(null),y=async()=>{var P,A;r(!0),w("");try{const K=await Ap.analyze({hours:m});o(K.data)}catch(K){w(((A=(P=K.response)==null?void 0:P.data)==null?void 0:A.error)||"Failed to run UEBA analysis")}finally{r(!1)}},C=async()=>{r(!0),w("");try{const q=((await Ap.profiles()).data.profiles||[]).map(I=>({...I,risk_score:Math.random()*100}));u(q)}catch(P){w(P.message||"Failed to load profiles")}finally{r(!1)}},R=P=>q_[P.toLowerCase()]||"#2563eb",T=P=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[P.toLowerCase()]||P,W=P=>Y_[P]||{icon:"⚠️",color:"#2563eb",description:P},_=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],H=E.useMemo(()=>{if(!l)return null;const P=l.total_anomaly||1,A=l.high_risk_count/P,K=l.medium_risk_count/P,q=1-A-K;return{high:{value:l.high_risk_count,percentage:A*100},medium:{value:l.medium_risk_count,percentage:K*100},low:{value:P-l.high_risk_count-l.medium_risk_count,percentage:q*100}}},[l]),L=P=>{try{return new Date(P).toLocaleString()}catch{return P}};return n.jsxs("div",{className:"ueba-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("ueba.title")}),n.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),n.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),C()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"ueba-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("ueba.timeWindow")}),n.jsx("div",{className:"time-selector",children:_.map(P=>n.jsx("button",{className:m===P.value?"active":"",onClick:()=>x(P.value),children:P.label},P.value))})]}),n.jsx("button",{onClick:y,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),N&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:N})]}),l&&n.jsxs("div",{className:"ueba-results",children:[n.jsxs("div",{className:"results-summary",children:[n.jsxs("div",{className:"summary-card large",children:[n.jsx("div",{className:"summary-icon",children:"📊"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.totalAnomalies")}),n.jsx("p",{className:"summary-value",children:l.total_anomaly}),n.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:m})})]})]}),H&&n.jsxs("div",{className:"risk-gauge-card",children:[n.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),n.jsxs("div",{className:"risk-gauge",children:[n.jsxs("div",{className:"gauge-bar",children:[n.jsx("div",{className:"gauge-segment critical",style:{width:`${H.high.percentage}%`}}),n.jsx("div",{className:"gauge-segment warning",style:{width:`${H.medium.percentage}%`}}),n.jsx("div",{className:"gauge-segment low",style:{width:`${H.low.percentage}%`}})]}),n.jsxs("div",{className:"gauge-legend",children:[n.jsxs("span",{className:"legend-item critical",children:["🔴 ",H.high.value," ",t("severity.critical")||"Critical"]}),n.jsxs("span",{className:"legend-item warning",children:["🟠 ",H.medium.value," ",t("severity.medium")||"Medium"]}),n.jsxs("span",{className:"legend-item low",children:["🟢 ",H.low.value," ",t("severity.low")||"Low"]})]})]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:"⏱️"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.duration")}),n.jsx("p",{className:"summary-value small",children:l.duration})]})]})]}),l.anomalies.length===0?n.jsxs("div",{className:"empty-state success",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("ueba.noAnomalies")}),n.jsx("p",{children:t("ueba.noAnomaliesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):n.jsxs("div",{className:"anomalies-list",children:[n.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",l.anomalies.length,")"]}),n.jsx("div",{className:"anomaly-timeline",children:l.anomalies.map((P,A)=>{const K=W(P.type);return n.jsxs("div",{className:`anomaly-item ${b===A?"expanded":""}`,onClick:()=>j(b===A?null:A),children:[n.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:K.color}}),n.jsx("div",{className:"anomaly-icon",children:K.icon}),n.jsxs("div",{className:"anomaly-content",children:[n.jsxs("div",{className:"anomaly-header",children:[n.jsx("span",{className:"anomaly-type",children:P.type.replace(/_/g," ")}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:R(P.severity)},children:T(P.severity)})]}),P.user&&n.jsxs("div",{className:"anomaly-user",children:["👤 ",n.jsx("span",{children:P.user})]}),n.jsx("p",{className:"anomaly-description",children:P.description}),n.jsxs("div",{className:"anomaly-meta",children:[n.jsxs("span",{className:"anomaly-score",children:["Score: ",n.jsx("strong",{children:P.score.toFixed(2)})]}),P.event_ids&&P.event_ids.length>0&&n.jsxs("span",{className:"anomaly-events",children:[P.event_ids.length," related events"]})]})]}),b===A&&n.jsxs("div",{className:"anomaly-expanded",children:[P.details&&Object.keys(P.details).length>0&&n.jsxs("div",{className:"anomaly-details-section",children:[n.jsx("h5",{children:t("ueba.details")}),n.jsx("div",{className:"details-grid",children:Object.entries(P.details).map(([q,I])=>n.jsxs("div",{className:"detail-item",children:[n.jsxs("span",{className:"detail-key",children:[q,":"]}),n.jsx("span",{className:"detail-value",children:String(I)})]},q))})]}),n.jsxs("div",{className:"anomaly-actions",children:[n.jsx("button",{className:"action-btn",onClick:q=>{q.stopPropagation(),e("/events",{state:{user:P.user}})},children:"📊 View Events"}),n.jsx("button",{className:"action-btn",onClick:q=>{q.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},A)})})]})]})]}),h==="profiles"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"profiles-header",children:[n.jsx("h3",{children:t("ueba.userProfiles")}),n.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),s?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"btn-spinner"}),n.jsx("span",{children:"Loading profiles..."})]}):c.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"👥"}),n.jsx("h3",{children:t("ueba.noProfiles")}),n.jsx("p",{children:t("ueba.noProfilesDesc")}),n.jsxs("div",{className:"empty-hint",children:[n.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),n.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):n.jsx("div",{className:"profiles-grid",children:c.map((P,A)=>n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-header",children:[n.jsx("div",{className:"profile-avatar",children:n.jsx("span",{className:"avatar-icon",children:"👤"})}),n.jsxs("div",{className:"profile-info",children:[n.jsx("h4",{children:P.user}),n.jsxs("p",{className:"profile-meta",children:["Last updated: ",L(P.last_updated)]})]}),P.risk_score!==void 0&&n.jsx("div",{className:`risk-indicator ${P.risk_score>70?"high":P.risk_score>30?"medium":"low"}`,children:P.risk_score.toFixed(0)})]}),n.jsxs("div",{className:"profile-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),n.jsx("span",{className:"stat-value",children:P.login_count})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),n.jsx("span",{className:"stat-value",children:P.avg_events_per_day.toFixed(1)})]})]}),P.risk_score!==void 0&&n.jsxs("div",{className:"profile-risk-bar",children:[n.jsx("div",{className:"risk-bar-track",children:n.jsx("div",{className:`risk-bar-fill ${P.risk_score>70?"high":P.risk_score>30?"medium":"low"}`,style:{width:`${P.risk_score}%`}})}),n.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},A))})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("ueba.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}const K_=[{value:"event_id",label:"Event ID"},{value:"source",label:"Source"},{value:"log_name",label:"Log Name"},{value:"computer",label:"Computer"},{value:"user",label:"User"},{value:"user_sid",label:"User SID"},{value:"ip_address",label:"IP Address"}],X_=[{value:"equals",label:"Equals"},{value:"contains",label:"Contains"},{value:"starts_with",label:"Starts With"},{value:"ends_with",label:"Ends With"}],eg=[{value:60,label:"1 hour"},{value:360,label:"6 hours"},{value:1440,label:"24 hours"},{value:10080,label:"7 days"},{value:43200,label:"30 days"},{value:0,label:"Permanent"}];function G_(){const{t}=st(),[e,s]=E.useState([]),[r,l]=E.useState(!1),[o,c]=E.useState(""),[u,h]=E.useState(!1),[p,m]=E.useState(!1),[x,N]=E.useState(null),[w,b]=E.useState(null),[j,y]=E.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]}),[C,R]=E.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[],enabled:!0});E.useEffect(()=>{T()},[]);const T=async()=>{l(!0),c("");try{const k=await Tr.list();s(k.data.rules||[])}catch(k){c(k.message||"Failed to load suppress rules")}finally{l(!1)}},W=()=>{y({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]})},_=async()=>{if(!j.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Tr.create({name:j.name,duration:j.duration,scope:j.scope,expires_at:j.expires_at,conditions:j.conditions,enabled:!0}),h(!1),W(),T()}catch(k){c(k.message||"Failed to create rule")}finally{l(!1)}},H=k=>{N(k),R({name:k.name,duration:k.duration,scope:k.scope,expires_at:k.expires_at,conditions:k.conditions||[],enabled:k.enabled}),m(!0)},L=async()=>{if(x){if(!C.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Tr.update(x.id,{name:C.name,duration:C.duration,scope:C.scope,expires_at:C.expires_at,conditions:C.conditions,enabled:C.enabled}),m(!1),N(null),T()}catch(k){c(k.message||"Failed to update rule")}finally{l(!1)}}},P=async k=>{if(confirm("Are you sure you want to delete this rule?")){l(!0),c("");try{await Tr.delete(k),T()}catch(z){c(z.message||"Failed to delete rule")}finally{l(!1)}}},A=async(k,z)=>{l(!0),c("");try{await Tr.toggle(k,!z),T()}catch(B){c(B.message||"Failed to toggle rule")}finally{l(!1)}},K=(k,z)=>{k([...z,{field:"event_id",operator:"equals",value:""}])},q=(k,z,B,te,se)=>{const M=[...z];M[B]={...M[B],[te]:se},k(M)},I=(k,z,B)=>{k(z.filter((te,se)=>se!==B))},$=k=>k===0?"Permanent":k<60?`${k}m`:k<1440?`${Math.floor(k/60)}h`:`${Math.floor(k/1440)}d`,U=k=>!k||k.length===0?"No conditions (global suppress)":k.map(z=>`${z.field} ${z.operator} "${z.value}"`).join(" AND "),X=(k,z,B)=>n.jsxs("div",{className:"conditions-section",children:[n.jsxs("div",{className:"conditions-header",children:[n.jsx("label",{children:"Conditions"}),n.jsx("button",{type:"button",className:"btn-add-condition",onClick:()=>K(z,k),children:"+ Add Condition"})]}),k.length===0?n.jsx("p",{className:"no-conditions",children:"No conditions - will suppress all matching alerts"}):n.jsx("div",{className:"conditions-list",children:k.map((te,se)=>n.jsxs("div",{className:"condition-row",children:[n.jsx("select",{value:te.field,onChange:M=>q(z,k,se,"field",M.target.value),children:K_.map(M=>n.jsx("option",{value:M.value,children:M.label},M.value))}),n.jsx("select",{value:te.operator,onChange:M=>q(z,k,se,"operator",M.target.value),children:X_.map(M=>n.jsx("option",{value:M.value,children:M.label},M.value))}),n.jsx("input",{type:"text",value:te.value,onChange:M=>q(z,k,se,"value",M.target.value),placeholder:"Value"}),n.jsx("button",{type:"button",className:"btn-remove-condition",onClick:()=>I(z,k,se),children:"×"})]},se))})]});return n.jsxs("div",{className:"suppress-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("suppress.title")}),n.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),n.jsx("div",{className:"suppress-toolbar",children:n.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),o&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:o})]}),r&&e.length===0?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"spinner"}),n.jsx("span",{children:t("common.loading")})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("h3",{children:t("suppress.noRules")}),n.jsx("p",{children:t("suppress.noRulesDesc")})]}):n.jsx("div",{className:"rules-grid",children:e.map(k=>n.jsxs("div",{className:`rule-card ${k.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`status-dot ${k.enabled?"enabled":"disabled"}`}),n.jsx("span",{className:"rule-name",children:k.name})]}),n.jsxs("div",{className:"rule-actions-header",children:[n.jsx("button",{className:"btn-icon",onClick:()=>H(k),title:"Edit",children:"✏️"}),n.jsx("button",{className:"btn-icon delete",onClick:()=>P(k.id),title:t("suppress.delete"),children:"🗑️"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`scope-badge scope-${k.scope}`,children:[k.scope==="global"?"🌐":k.scope==="user"?"👤":"💻"," ",k.scope]}),n.jsxs("span",{className:"duration-badge",children:["⏱️ ",$(k.duration)]}),k.expires_at&&n.jsxs("span",{className:"expires-badge",children:["📅 ",new Date(k.expires_at).toLocaleDateString()]})]}),n.jsxs("div",{className:"rule-conditions",children:[n.jsx("label",{children:"Conditions:"}),n.jsx("p",{className:"conditions-text",children:U(k.conditions)})]}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("span",{className:"created-at",children:["Created: ",new Date(k.created_at).toLocaleDateString()]}),n.jsx("button",{className:`toggle-btn ${k.enabled?"enabled":"disabled"}`,onClick:()=>A(k.id,k.enabled),children:k.enabled?t("suppress.enabled"):t("suppress.disabled")})]})]},k.id))}),u&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:j.name,onChange:k=>y({...j,name:k.target.value}),placeholder:"e.g. suppress-admin-alerts"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:j.scope,onChange:k=>y({...j,scope:k.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:j.duration,onChange:k=>y({...j,duration:parseInt(k.target.value)}),children:eg.map(k=>n.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:j.expires_at,onChange:k=>y({...j,expires_at:k.target.value})})]}),X(j.conditions,k=>y({...j,conditions:k}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:_,disabled:!j.name||r,children:t("suppress.create")})]})]})}),p&&x&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:n.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>m(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:C.name,onChange:k=>R({...C,name:k.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:C.scope,onChange:k=>R({...C,scope:k.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:C.duration,onChange:k=>R({...C,duration:parseInt(k.target.value)}),children:eg.map(k=>n.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:C.expires_at,onChange:k=>R({...C,expires_at:k.target.value})})]}),n.jsx("div",{className:"form-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:C.enabled,onChange:k=>R({...C,enabled:k.target.checked})}),n.jsx("span",{children:"Enabled"})]})}),X(C.conditions,k=>R({...C,conditions:k}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>m(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:L,disabled:!C.name||r,children:"Save Changes"})]})]})}),w&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:n.jsxs("div",{className:"modal-content",onClick:k=>k.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>b(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:w.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Scope:"}),n.jsx("span",{className:"detail-value",children:w.scope})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Duration:"}),n.jsx("span",{className:"detail-value",children:$(w.duration)})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${w.enabled?"enabled":"disabled"}`,children:w.enabled?"Enabled":"Disabled"})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Conditions"}),n.jsx("p",{className:"detail-description",children:U(w.conditions)})]})]})]})}),n.jsxs("div",{className:"suppress-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("suppress.about")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("suppress.aboutDesc")})})]}),n.jsx("style",{children:`
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
      `})]})}function J_(){var A,K;const{t}=st(),[e,s]=E.useState([]),[r,l]=E.useState(null),[o,c]=E.useState(!1),[u,h]=E.useState(null),[p,m]=E.useState("all"),[x,N]=E.useState(0),w=E.useRef(null),b=E.useRef(null),j=E.useRef(null),y=5;E.useEffect(()=>(C(),()=>{w.current&&w.current.close(),j.current&&clearTimeout(j.current)}),[]),E.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[e]);const C=()=>{h(null);const q=Oj.streamEvents(I=>{s($=>{const U=[I,...$];return U.length>100&&U.pop(),U}),N(0)},I=>{l({total_events:I.total_events||0,events_per_sec:I.events_per_sec||0,uptime:I.uptime||"0s",alerts:I.alerts||0})},I=>{console.error("Stream error:",I),c(!1),I.type==="error"&&(h("Connection lost. Reconnecting..."),W())});q.onopen=()=>{c(!0),h(null)},w.current=q},R=()=>{w.current&&(w.current.close(),w.current=null),j.current&&(clearTimeout(j.current),j.current=null),c(!1),N(0)},T=()=>{j.current&&(clearTimeout(j.current),j.current=null),R(),C()},W=()=>{if(x>=y){h("Max reconnection attempts reached. Please click Connect to retry.");return}const q=Math.min(1e3*Math.pow(2,x),3e4);N(I=>I+1),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{T()},q)},_=()=>{s([])},H=q=>{switch(q==null?void 0:q.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},L=e.filter(q=>{var I;return p==="all"?!0:((I=q.level)==null?void 0:I.toLowerCase())===p}),P=q=>{try{return new Date(q).toLocaleTimeString()}catch{return q}};return n.jsxs("div",{className:"live-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("live.title")}),n.jsxs("div",{className:`connection-status ${o?"connected":"disconnected"}`,children:[n.jsx("span",{className:"status-dot"}),o?"Connected":"Disconnected"]})]}),n.jsxs("div",{className:"header-actions",children:[n.jsxs("select",{className:"filter-select",value:p,onChange:q=>m(q.target.value),children:[n.jsx("option",{value:"all",children:"All Levels"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"error",children:"Error"}),n.jsx("option",{value:"warning",children:"Warning"}),n.jsx("option",{value:"info",children:"Info"}),n.jsx("option",{value:"verbose",children:"Verbose"})]}),n.jsx("button",{className:"btn-secondary",onClick:_,children:"Clear"}),o?n.jsx("button",{className:"btn-danger",onClick:R,children:"Disconnect"}):n.jsx("button",{className:"btn-primary",onClick:T,children:"Connect"})]})]}),u&&n.jsxs("div",{className:"error-banner",children:[u,x>0&&x<y&&n.jsxs("span",{className:"reconnect-info",children:[" ","Reconnecting in ",Math.min(1e3*Math.pow(2,x-1),3e4)/1e3,"s... (Attempt ",x,"/",y,")"]})]}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:((A=r==null?void 0:r.total_events)==null?void 0:A.toLocaleString())||"0"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Events/sec"}),n.jsx("span",{className:"stat-value",children:((K=r==null?void 0:r.events_per_sec)==null?void 0:K.toFixed(2))||"0.00"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Alerts"}),n.jsx("span",{className:"stat-value alerts",children:(r==null?void 0:r.alerts)||0})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Uptime"}),n.jsx("span",{className:"stat-value mono",children:(r==null?void 0:r.uptime)||"0s"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Buffered"}),n.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),n.jsx("div",{className:"events-container",ref:b,children:L.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📡"}),n.jsx("div",{className:"empty-text",children:o?"Waiting for events...":"Click Connect to start monitoring"})]}):n.jsx("div",{className:"events-list",children:L.map((q,I)=>n.jsxs("div",{className:"event-card",style:{borderLeftColor:H(q.level)},children:[n.jsxs("div",{className:"event-header",children:[n.jsx("span",{className:"event-time",children:P(q.timestamp)}),n.jsx("span",{className:"event-level",style:{color:H(q.level)},children:q.level||"UNKNOWN"}),n.jsxs("span",{className:"event-id",children:["Event #",q.event_id]}),n.jsx("span",{className:"event-source",children:q.source||q.log_name})]}),n.jsx("div",{className:"event-body",children:n.jsx("div",{className:"event-message",children:q.message||"(No message)"})}),n.jsxs("div",{className:"event-footer",children:[n.jsx("span",{className:"event-computer",children:q.computer}),q.user&&n.jsx("span",{className:"event-user",children:q.user}),q.ip_address&&n.jsx("span",{className:"event-ip",children:q.ip_address})]})]},`${q.id}-${I}`))})}),n.jsx("style",{children:`
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
      `})]})}const Il=()=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),n.jsx("path",{d:"M9 9h6M9 12h6M9 15h4"})]}),Fl=()=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),Bl=()=>n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})}),tg=()=>n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),n.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),Z_=()=>n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("polygon",{points:"5,3 19,12 5,21"})}),e2=()=>n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"})}),t2=()=>n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"spinner",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10",strokeOpacity:"0.3"}),n.jsx("path",{d:"M12 2a10 10 0 0 1 10 10",strokeLinecap:"round"})]});function s2(){const{t}=st(),[e,s]=E.useState(null),[r,l]=E.useState([]),[o,c]=E.useState({process_enabled:!1,network_enabled:!1,dns_enabled:!1,poll_interval:5}),[u,h]=E.useState(!1),[p,m]=E.useState("all"),[x,N]=E.useState(null),w=E.useCallback(async()=>{try{const _=await Mr.getStats();s(_.data.stats)}catch(_){console.error("Failed to fetch stats:",_)}},[]),b=E.useCallback(async()=>{try{const _={limit:100};p!=="all"&&(_.type=p);const H=await Mr.getEvents(_);l(H.data.events)}catch(_){console.error("Failed to fetch events:",_)}},[p]);E.useEffect(()=>{w();const _=setInterval(w,5e3);return()=>clearInterval(_)},[w]),E.useEffect(()=>{b();const _=setInterval(b,5e3);return()=>clearInterval(_)},[b]);const j=async _=>{if(!(e!=null&&e.is_running))return;const H={...o,[_]:!o[_]};try{await Mr.updateConfig(H),c(H),w()}catch(L){console.error("Failed to update config:",L)}},y=async()=>{h(!0);try{e!=null&&e.is_running&&await Mr.updateConfig({process_enabled:!1,network_enabled:!1,dns_enabled:!1}),await Mr.startStop(e!=null&&e.is_running?"stop":"start"),w(),b()}catch(_){console.error("Failed to start/stop monitor:",_)}finally{h(!1)}},C=_=>{switch(_){case"critical":return{bg:"rgba(239, 68, 68, 0.15)",color:"#ef4444",border:"#ef4444"};case"high":return{bg:"rgba(249, 115, 22, 0.15)",color:"#f97316",border:"#f97316"};case"medium":return{bg:"rgba(234, 179, 8, 0.15)",color:"#eab308",border:"#eab308"};case"low":return{bg:"rgba(34, 197, 94, 0.15)",color:"#22c55e",border:"#22c55e"};default:return{bg:"rgba(107, 114, 128, 0.15)",color:"#6b7280",border:"#6b7280"}}},R=_=>{switch(_){case"process":return n.jsx(Il,{});case"network":return n.jsx(Fl,{});case"dns":return n.jsx(Bl,{});default:return n.jsx(tg,{})}},T=r.filter(_=>p==="all"?!0:_.type===p),W=_=>{switch(_.type){case"process":return n.jsxs("div",{className:"event-summary-content",children:[n.jsx("span",{className:"event-main",children:_.data.process_name||"Unknown Process"}),n.jsxs("span",{className:"event-sub",children:["PID: ",_.data.pid||"N/A"," | PPID: ",_.data.ppid||"N/A"]})]});case"network":return n.jsxs("div",{className:"event-summary-content",children:[n.jsxs("span",{className:"event-main",children:[_.data.protocol," Connection"]}),n.jsxs("span",{className:"event-sub",children:[_.data.source_ip,":",_.data.source_port," → ",_.data.dest_ip,":",_.data.dest_port]})]});case"dns":return n.jsxs("div",{className:"event-summary-content",children:[n.jsx("span",{className:"event-main",children:_.data.query_name}),n.jsxs("span",{className:"event-sub",children:["Type: ",_.data.query_type," | TTL: ",_.data.ttl||"N/A"]})]});default:return n.jsx("span",{children:"Unknown event type"})}};return n.jsxs("div",{className:"monitor-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-content",children:[n.jsx("h2",{children:t("monitor.title")}),n.jsx("p",{className:"page-desc",children:t("monitor.pageDesc")})]}),n.jsxs("div",{className:`status-badge ${e!=null&&e.is_running?"running":"stopped"}`,children:[n.jsx("span",{className:"status-dot-animated"}),e!=null&&e.is_running?t("monitor.running"):t("monitor.stopped")]})]}),n.jsxs("div",{className:"monitor-grid",children:[n.jsxs("div",{className:"stats-row",children:[n.jsxs("div",{className:"stat-card-monitor",children:[n.jsx("div",{className:"stat-icon-wrapper process",children:n.jsx(Il,{})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:(e==null?void 0:e.process_count)||0}),n.jsx("span",{className:"stat-label",children:t("monitor.processCount")})]}),n.jsx("div",{className:`stat-toggle ${o.process_enabled?"active":""}`,children:n.jsxs("label",{className:"toggle-switch-small",children:[n.jsx("input",{type:"checkbox",checked:o.process_enabled,onChange:()=>j("process_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider-small"})]})})]}),n.jsxs("div",{className:"stat-card-monitor",children:[n.jsx("div",{className:"stat-icon-wrapper network",children:n.jsx(Fl,{})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:(e==null?void 0:e.network_count)||0}),n.jsx("span",{className:"stat-label",children:t("monitor.networkCount")})]}),n.jsx("div",{className:`stat-toggle ${o.network_enabled?"active":""}`,children:n.jsxs("label",{className:"toggle-switch-small",children:[n.jsx("input",{type:"checkbox",checked:o.network_enabled,onChange:()=>j("network_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider-small"})]})})]}),n.jsxs("div",{className:"stat-card-monitor",children:[n.jsx("div",{className:"stat-icon-wrapper dns",children:n.jsx(Bl,{})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:(e==null?void 0:e.dns_count)||0}),n.jsx("span",{className:"stat-label",children:t("monitor.dnsCount")})]}),n.jsx("div",{className:`stat-toggle ${o.dns_enabled?"active":""}`,children:n.jsxs("label",{className:"toggle-switch-small",children:[n.jsx("input",{type:"checkbox",checked:o.dns_enabled,onChange:()=>j("dns_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider-small"})]})})]}),n.jsxs("div",{className:"stat-card-monitor alert",children:[n.jsx("div",{className:"stat-icon-wrapper alert",children:n.jsx(tg,{})}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:(e==null?void 0:e.alert_count)||0}),n.jsx("span",{className:"stat-label",children:t("monitor.alertCount")})]})]})]}),n.jsxs("div",{className:"control-section",children:[n.jsxs("div",{className:"control-card",children:[n.jsxs("div",{className:"control-card-header",children:[n.jsx("h3",{children:t("monitor.title")}),(e==null?void 0:e.start_time)&&n.jsxs("span",{className:"start-time",children:[t("monitor.startTime"),": ",new Date(e.start_time).toLocaleString()]})]}),n.jsxs("div",{className:"monitor-toggles",children:[n.jsxs("div",{className:"toggle-item",children:[n.jsxs("div",{className:"toggle-info",children:[n.jsx("div",{className:"toggle-icon process",children:n.jsx(Il,{})}),n.jsxs("div",{className:"toggle-text",children:[n.jsx("span",{className:"toggle-title",children:t("monitor.processMonitoring")}),n.jsx("span",{className:"toggle-desc",children:t("monitor.processMonitoringDesc")})]})]}),n.jsxs("label",{className:"toggle-switch",children:[n.jsx("input",{type:"checkbox",checked:o.process_enabled,onChange:()=>j("process_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"toggle-item",children:[n.jsxs("div",{className:"toggle-info",children:[n.jsx("div",{className:"toggle-icon network",children:n.jsx(Fl,{})}),n.jsxs("div",{className:"toggle-text",children:[n.jsx("span",{className:"toggle-title",children:t("monitor.networkMonitoring")}),n.jsx("span",{className:"toggle-desc",children:t("monitor.networkMonitoringDesc")})]})]}),n.jsxs("label",{className:"toggle-switch",children:[n.jsx("input",{type:"checkbox",checked:o.network_enabled,onChange:()=>j("network_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"toggle-item",children:[n.jsxs("div",{className:"toggle-info",children:[n.jsx("div",{className:"toggle-icon dns",children:n.jsx(Bl,{})}),n.jsxs("div",{className:"toggle-text",children:[n.jsx("span",{className:"toggle-title",children:t("monitor.dnsMonitoring")}),n.jsx("span",{className:"toggle-desc",children:t("monitor.dnsMonitoringDesc")})]})]}),n.jsxs("label",{className:"toggle-switch",children:[n.jsx("input",{type:"checkbox",checked:o.dns_enabled,onChange:()=>j("dns_enabled"),disabled:!(e!=null&&e.is_running)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),n.jsx("button",{className:`btn-monitor-action ${e!=null&&e.is_running?"btn-stop":"btn-start"}`,onClick:y,disabled:u,children:u?n.jsx(t2,{}):e!=null&&e.is_running?n.jsxs(n.Fragment,{children:[n.jsx(e2,{}),t("monitor.stop")]}):n.jsxs(n.Fragment,{children:[n.jsx(Z_,{}),t("monitor.start")]})})]}),n.jsxs("div",{className:"about-card",children:[n.jsx("h4",{children:t("monitor.aboutMonitor")}),n.jsx("p",{children:t("monitor.aboutDesc")})]})]})]}),n.jsxs("div",{className:"events-container",children:[n.jsxs("div",{className:"events-header-section",children:[n.jsx("h3",{children:t("monitor.events")}),n.jsxs("div",{className:"filter-tabs",children:[n.jsxs("button",{className:`filter-tab ${p==="all"?"active":""}`,onClick:()=>m("all"),children:[n.jsx("span",{className:"tab-label",children:"All"}),n.jsx("span",{className:"tab-count",children:r.length})]}),n.jsxs("button",{className:`filter-tab process ${p==="process"?"active":""}`,onClick:()=>m("process"),children:[n.jsx(Il,{}),n.jsx("span",{className:"tab-label",children:"Process"}),n.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="process").length})]}),n.jsxs("button",{className:`filter-tab network ${p==="network"?"active":""}`,onClick:()=>m("network"),children:[n.jsx(Fl,{}),n.jsx("span",{className:"tab-label",children:"Network"}),n.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="network").length})]}),n.jsxs("button",{className:`filter-tab dns ${p==="dns"?"active":""}`,onClick:()=>m("dns"),children:[n.jsx(Bl,{}),n.jsx("span",{className:"tab-label",children:"DNS"}),n.jsx("span",{className:"tab-count",children:r.filter(_=>_.type==="dns").length})]})]})]}),n.jsx("div",{className:"events-list-modern",children:T.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:n.jsx("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:n.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),n.jsx("h4",{children:t("monitor.noEvents")}),n.jsx("p",{children:t("monitor.noEventsDesc")})]}):T.map(_=>n.jsxs("div",{className:`event-card ${x===_.id?"expanded":""}`,onClick:()=>N(x===_.id?null:_.id),children:[n.jsxs("div",{className:"event-card-main",children:[n.jsx("div",{className:`event-type-icon ${_.type}`,children:R(_.type)}),n.jsxs("div",{className:"event-info",children:[n.jsxs("div",{className:"event-header-row",children:[n.jsx("span",{className:"severity-pill",style:{backgroundColor:C(_.severity).bg,color:C(_.severity).color,borderColor:C(_.severity).border},children:_.severity.toUpperCase()}),n.jsx("span",{className:"event-time",children:new Date(_.timestamp).toLocaleTimeString()})]}),W(_)]}),n.jsx("div",{className:`type-indicator ${_.type}`,children:_.type.toUpperCase()})]}),x===_.id&&n.jsx("div",{className:"event-details-panel",children:n.jsxs("div",{className:"details-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.eventType")}),n.jsx("span",{className:"detail-value",children:_.id})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.timestamp")}),n.jsx("span",{className:"detail-value",children:new Date(_.timestamp).toLocaleString()})]}),_.type==="process"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.pid")}),n.jsx("span",{className:"detail-value",children:_.data.pid||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.ppid")}),n.jsx("span",{className:"detail-value",children:_.data.ppid||"N/A"})]}),n.jsxs("div",{className:"detail-item full-width",children:[n.jsx("span",{className:"detail-label",children:t("monitor.path")}),n.jsx("span",{className:"detail-value code",children:_.data.path||"N/A"})]}),n.jsxs("div",{className:"detail-item full-width",children:[n.jsx("span",{className:"detail-label",children:t("monitor.commandLine")}),n.jsx("span",{className:"detail-value code",children:_.data.command_line||"N/A"})]})]}),_.type==="network"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.protocol")}),n.jsx("span",{className:"detail-value",children:_.data.protocol||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.state")}),n.jsx("span",{className:"detail-value",children:_.data.state||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.sourceIp")}),n.jsx("span",{className:"detail-value",children:_.data.source_ip||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.sourcePort")}),n.jsx("span",{className:"detail-value",children:_.data.source_port||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.destIp")}),n.jsx("span",{className:"detail-value",children:_.data.dest_ip||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.destPort")}),n.jsx("span",{className:"detail-value",children:_.data.dest_port||"N/A"})]})]}),_.type==="dns"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"detail-item full-width",children:[n.jsx("span",{className:"detail-label",children:t("monitor.queryName")}),n.jsx("span",{className:"detail-value",children:_.data.query_name||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.queryType")}),n.jsx("span",{className:"detail-value",children:_.data.query_type||"N/A"})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:t("monitor.ttl")}),n.jsx("span",{className:"detail-value",children:_.data.ttl||"N/A"})]}),n.jsxs("div",{className:"detail-item full-width",children:[n.jsx("span",{className:"detail-label",children:t("monitor.results")}),n.jsx("span",{className:"detail-value",children:(_.data.results||[]).join(", ")||"N/A"})]})]})]})})]},_.id))})]})]})}function n2(){const{t}=st(),[e,s]=E.useState(!1),[r,l]=E.useState(""),[o,c]=E.useState(2),[u,h]=E.useState(""),[p,m]=E.useState(""),[x,N]=E.useState([]),[w,b]=E.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[j,y]=E.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[C,R]=E.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,includeProcesses:!0,includeNetwork:!0,includeDlls:!1,includeDrivers:!1,includeUsers:!0,includeSysInfo:!0,compress:!0,calculateHash:!0}),T=X=>{b(k=>k.map(z=>z.id===X?{...z,enabled:!z.enabled}:z))},W=X=>{y(k=>k.map(z=>z.id===X?{...z,enabled:!z.enabled}:z))},_=X=>{R(k=>({...k,[X]:!k[X]}))},H=X=>{if(X.target.files&&X.target.files.length>0){const k=Array.from(X.target.files);N(B=>[...B,...k]);const z=k.map(B=>B.path||B.name).join(`
`);h(B=>B?B+`
`+z:z)}},L=X=>{N(k=>{const z=[...k];z.splice(X,1);const B=new Set;return z.forEach(te=>B.add(te.path||te.name)),h(te=>te.split(`
`).filter(se=>B.has(se)).join(`
`)),z})},P=()=>{N([]),h("")},A=async()=>{s(!0),l(t("collect.starting"));const X=w.filter(k=>k.enabled).map(k=>k.name);try{const k=await Dp.collect({sources:X,options:{workers:o,include_prefetch:C.includePrefetch,include_registry:C.includeRegistry,include_system_info:C.includeSystemInfo,include_shimcache:C.includeShimcache,include_amcache:C.includeAmcache,include_userassist:C.includeUserassist,include_tasks:C.includeTasks,include_logs:C.includeLogs,include_processes:C.includeProcesses,include_network:C.includeNetwork,include_dlls:C.includeDlls,include_drivers:C.includeDrivers,include_users:C.includeUsers,compress:C.compress,calculate_hash:C.calculateHash}});k.data.status==="completed"?l(`${t("collect.completed")}
${k.data.output_path}
Duration: ${k.data.duration}`):k.data.status==="error"?l(`${t("collect.failed")}: ${k.data.message}`):l(`${t("collect.collecting")}...
${t("collect.sources")}: ${X.join(", ")}`)}catch(k){l(`${t("collect.failed")}: ${k instanceof Error?k.message:"Unknown error"}`)}s(!1)},K=async()=>{var X;s(!0),l(t("collect.importing"));try{const k=u.split(`
`).map(B=>B.trim()).filter(B=>B.length>0);if(k.length===0){l(t("collect.noFilesSelected")),s(!1);return}const z=await Pp.importLogs(k);z.data.success?l(`${t("collect.importDone")}
Imported: ${z.data.files_imported}
Failed: ${z.data.files_failed}
Events: ${z.data.events_imported}`):l(`${t("collect.failed")}: ${((X=z.data.errors)==null?void 0:X.join(", "))||"Unknown error"}`)}catch(k){l(`${t("collect.failed")}: ${k instanceof Error?k.message:"Unknown error"}`)}s(!1)},q=async()=>{s(!0),l(t("collect.importing")+" "+t("collect.withAlert"));try{const X=u.split(`
`).map(z=>z.trim()).filter(z=>z.length>0);if(X.length===0){l(t("collect.noFilesSelected")),s(!1);return}const k=await Pp.importLogsWithAlert(X);if(k.data.status==="completed"){let z=`${t("collect.importDone")}
Imported: ${k.data.imported}
Failed: ${k.data.failed}
Events: ${k.data.total_events}`;k.data.alerts_generated!==void 0&&(z+=`
Alerts: ${k.data.alerts_generated}`),k.data.alert_error&&(z+=`
Alert Error: ${k.data.alert_error}`),l(z)}else l(`${t("collect.failed")}: ${k.data.message||"Unknown error"}`)}catch(X){l(`${t("collect.failed")}: ${X instanceof Error?X.message:"Unknown error"}`)}s(!1)},I=async()=>{s(!0),l(t("collect.evtx2csvConverting")||"Converting EVTX to CSV...");try{const X=u.split(`
`).map(z=>z.trim()).filter(z=>z.length>0);if(X.length===0){l(t("collect.noFilesSelected")),s(!1);return}const k=await Dp.evtx2csv(X);if(k.data){let z=`${t("collect.evtx2csvDone")||"Conversion completed"}
`;z+=`Total Events: ${k.data.total_events}
`,z+=`Successful: ${k.data.total_files-k.data.failed_files}
`,z+=`Failed: ${k.data.failed_files}
`,k.data.results&&k.data.results.length>0&&(z+=`
Files:
`,k.data.results.forEach(B=>{B.error?z+=`- ${B.input_path}: ERROR - ${B.error}
`:z+=`- ${B.input_path} -> ${B.output_path} (${B.event_count} events)
`})),k.data.errors&&k.data.errors.length>0&&(z+=`
Errors:
`+k.data.errors.join(`
`)),l(z)}else l(`${t("collect.failed")}: Unknown error`)}catch(X){l(`${t("collect.failed")}: ${X instanceof Error?X.message:"Unknown error"}`)}s(!1)},$=w.reduce((X,k)=>(X[k.category]||(X[k.category]=[]),X[k.category].push(k),X),{}),U=j.reduce((X,k)=>(X[k.category]||(X[k.category]=[]),X[k.category].push(k),X),{});return n.jsxs("div",{className:"collect-page",children:[n.jsx("div",{className:"page-header",children:n.jsx("h2",{children:t("collect.title")})}),n.jsxs("div",{className:"collect-grid",children:[n.jsxs("div",{className:"collect-section main-options",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("collect.oneClickCollection")}),n.jsx("p",{children:t("collect.oneClickDesc")})]}),n.jsxs("div",{className:"options-group",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:C.includeSystemInfo,onChange:()=>_("includeSystemInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),C.includeSystemInfo&&n.jsxs("div",{className:"sub-options",children:[n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeSysInfo,onChange:()=>_("includeSysInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeProcesses,onChange:()=>_("includeProcesses")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemProcesses")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeNetwork,onChange:()=>_("includeNetwork")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemNetwork")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeDlls,onChange:()=>_("includeDlls")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDlls")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeDrivers,onChange:()=>_("includeDrivers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDrivers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeUsers,onChange:()=>_("includeUsers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemUsers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeRegistry,onChange:()=>_("includeRegistry")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemRegistry")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:C.includeTasks,onChange:()=>_("includeTasks")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemTasks")})]})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:C.includeLogs,onChange:()=>_("includeLogs")}),n.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),n.jsxs("div",{className:"performance-section",children:[n.jsx("h4",{children:t("collect.performanceSettings")}),n.jsxs("div",{className:"performance-grid",children:[n.jsxs("div",{className:"performance-item",children:[n.jsx("label",{children:t("collect.threads")}),n.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(X=>n.jsx("button",{className:o===X?"active":"",onClick:()=>c(X),children:X},X))})]}),n.jsxs("div",{className:"performance-hint",children:[n.jsx("span",{className:"hint-icon",children:"💡"}),n.jsx("span",{children:t("collect.threadHint")})]})]})]}),n.jsxs("div",{className:"compression-options",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:C.compress,onChange:()=>_("compress")}),n.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:C.calculateHash,onChange:()=>_("calculateHash")}),n.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:A,disabled:e,className:"btn-primary btn-collect",children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n.jsx("polyline",{points:"7 10 12 15 17 10"}),n.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),n.jsx("button",{onClick:K,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")}),n.jsx("button",{onClick:q,disabled:e,className:"btn-secondary btn-import-alert",children:t("collect.importWithAlertBtn")}),n.jsx("button",{onClick:I,disabled:e,className:"btn-secondary btn-evtx2csv",children:t("collect.evtx2csvBtn")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[n.jsx("h3",{children:t("collect.logSources")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries($).map(([X,k])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:X}),k.map(z=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:z.enabled,onChange:()=>T(z.id)}),n.jsx("span",{className:"checkbox-text",children:z.name})]},z.id))]},X))]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.excludedLogs")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(U).map(([X,k])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),k.map(z=>n.jsxs("label",{className:"checkbox-label exclude",children:[n.jsx("input",{type:"checkbox",checked:z.enabled,onChange:()=>W(z.id)}),n.jsx("span",{className:"checkbox-text",children:z.name})]},z.id))]},X)),n.jsxs("div",{className:"custom-exclude",children:[n.jsx("label",{children:t("collect.customExclude")}),n.jsx("input",{type:"text",value:p,onChange:X=>m(X.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.customPaths")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),n.jsxs("div",{className:"custom-path-section",children:[n.jsx("label",{children:t("collect.customPathsLabel")}),n.jsxs("div",{className:"file-selector",children:[n.jsx("input",{type:"file",id:"file-input",multiple:!0,accept:".evtx,.etl,.csv,.log",onChange:H,style:{display:"none"}}),n.jsxs("label",{htmlFor:"file-input",className:"file-select-btn",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n.jsx("polyline",{points:"17 8 12 3 7 8"}),n.jsx("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]}),t("collect.selectFiles")||"Select Files"]}),x.length>0&&n.jsxs("div",{className:"selected-files",children:[n.jsxs("div",{className:"selected-files-header",children:[n.jsxs("span",{children:[x.length," ",t("collect.filesSelected")||"files selected"]}),n.jsx("button",{onClick:P,className:"clear-files-btn",children:t("collect.clearAll")||"Clear All"})]}),n.jsx("ul",{className:"file-list",children:x.map((X,k)=>n.jsxs("li",{className:"file-item",children:[n.jsx("span",{className:"file-name",children:X.name}),n.jsx("button",{onClick:()=>L(k),className:"remove-file-btn",children:"×"})]},k))})]})]}),n.jsx("textarea",{value:u,onChange:X=>h(X.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),n.jsxs("div",{className:"additional-options",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.additionalArtifacts")})}),n.jsxs("div",{className:"artifacts-grid",children:[n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includePrefetch,onChange:()=>_("includePrefetch")}),n.jsx("div",{className:"artifact-icon",children:"📁"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),n.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includeShimcache,onChange:()=>_("includeShimcache")}),n.jsx("div",{className:"artifact-icon",children:"🔧"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includeAmcache,onChange:()=>_("includeAmcache")}),n.jsx("div",{className:"artifact-icon",children:"📝"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includeUserassist,onChange:()=>_("includeUserassist")}),n.jsx("div",{className:"artifact-icon",children:"🎯"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),n.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includeRegistry,onChange:()=>_("includeRegistry")}),n.jsx("div",{className:"artifact-icon",children:"🗄️"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.registry")}),n.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:C.includeTasks,onChange:()=>_("includeTasks")}),n.jsx("div",{className:"artifact-icon",children:"📅"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),n.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),r&&n.jsxs("div",{className:"status-panel",children:[n.jsxs("div",{className:"status-header",children:[n.jsx("span",{className:"status-icon",children:"📊"}),n.jsx("span",{children:t("collect.status")}),n.jsx("button",{className:"status-close",onClick:()=>l(""),children:"×"})]}),n.jsx("pre",{className:"status-content",children:r})]}),n.jsxs("div",{className:"cli-reference",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.cliReference")})}),n.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${o}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function i2(){const{t}=st(),[e,s]=E.useState([]),[r,l]=E.useState([]),[o,c]=E.useState(0),[u,h]=E.useState(0),[p]=E.useState(100),[m,x]=E.useState(!1),[N,w]=E.useState(null),[b,j]=E.useState("all");E.useEffect(()=>{y(),C()},[]);const y=()=>{fetch("/api/logs/files").then($=>$.json()).then($=>{l($.files||[])}).catch(console.error)},C=($=0)=>{x(!0),w(null),fetch(`/api/logs?offset=${$}&limit=${p}`).then(U=>U.json()).then(U=>{s(U.entries||[]),c(U.total||0),h($),x(!1)}).catch(U=>{w(U.message||t("common.error")),x(!1)})},R=()=>{C(u)},T=$=>{j($)},W=$=>{switch($.toLowerCase()){case"debug":return"#888";case"info":return"#00d9ff";case"warn":return"#f59e0b";case"error":return"#ef4444";case"fatal":return"#dc2626";default:return"#888"}},_=b==="all"?e:e.filter($=>$.level.toLowerCase()===b.toLowerCase()),H=$=>$.message==="[METRICS]",L=$=>$.message==="[STARTUP]",P=$=>$.message==="[PANIC]",A=$=>{try{return new Date($).toLocaleString()}catch{return $}},K=$=>{if($===0)return"0 B";const U=1024,X=["B","KB","MB","GB"],k=Math.floor(Math.log($)/Math.log(U));return parseFloat(($/Math.pow(U,k)).toFixed(2))+" "+X[k]},q=Math.ceil(o/p),I=Math.floor(u/p)+1;return n.jsxs("div",{className:"logs-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("logs.title")}),n.jsx("button",{onClick:R,className:"btn-secondary",disabled:m,children:t(m?"common.loading":"logs.refresh")})]}),n.jsxs("div",{className:"logs-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.totalEntries"),":"]}),n.jsx("span",{className:"info-value",children:o})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.currentPage"),":"]}),n.jsxs("span",{className:"info-value",children:[I," / ",q]})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.logFiles"),":"]}),n.jsx("span",{className:"info-value",children:r.length})]})]}),n.jsx("div",{className:"logs-filters",children:n.jsxs("div",{className:"filter-group",children:[n.jsxs("span",{className:"filter-label",children:[t("logs.filterByLevel"),":"]}),n.jsx("button",{className:`filter-btn ${b==="all"?"active":""}`,onClick:()=>T("all"),children:t("logs.all")}),n.jsx("button",{className:`filter-btn ${b==="debug"?"active":""}`,onClick:()=>T("debug"),children:t("settings.debug")}),n.jsx("button",{className:`filter-btn ${b==="info"?"active":""}`,onClick:()=>T("info"),children:t("settings.info")}),n.jsx("button",{className:`filter-btn ${b==="warn"?"active":""}`,onClick:()=>T("warn"),children:t("settings.warn")}),n.jsx("button",{className:`filter-btn ${b==="error"?"active":""}`,onClick:()=>T("error"),children:t("settings.error")})]})}),n.jsxs("div",{className:"logs-files",children:[n.jsx("h3",{children:t("logs.logFiles")}),n.jsx("div",{className:"files-list",children:r.map(($,U)=>n.jsxs("div",{className:"file-item",children:[n.jsx("span",{className:"file-name",children:$.name}),n.jsx("span",{className:"file-size",children:K($.size)}),n.jsx("span",{className:"file-time",children:new Date($.mod_time).toLocaleString()}),$.is_main&&n.jsx("span",{className:"file-badge",children:t("logs.current")})]},U))})]}),n.jsxs("div",{className:"logs-viewer",children:[n.jsx("h3",{children:t("logs.viewer")}),N&&n.jsx("div",{className:"error-message",children:N}),n.jsx("div",{className:"logs-container",children:m?n.jsx("div",{className:"loading-state",children:t("common.loading")}):_.length===0?n.jsx("div",{className:"empty-state",children:t("logs.noLogs")}):n.jsxs("table",{className:"logs-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("logs.timestamp")}),n.jsx("th",{children:t("logs.level")}),n.jsx("th",{children:t("logs.message")}),n.jsx("th",{children:t("logs.details")})]})}),n.jsx("tbody",{children:_.map(($,U)=>{var X,k,z,B;return n.jsxs("tr",{className:`log-entry log-level-${$.level.toLowerCase()}`,children:[n.jsx("td",{className:"log-time",children:A($.timestamp)}),n.jsx("td",{className:"log-level",style:{color:W($.level)},children:$.level.toUpperCase()}),n.jsxs("td",{className:"log-message",children:[H($)&&n.jsx("span",{className:"log-badge metrics",children:t("logs.metrics")}),L($)&&n.jsx("span",{className:"log-badge startup",children:t("logs.startup")}),P($)&&n.jsx("span",{className:"log-badge panic",children:t("logs.panic")}),$.message]}),n.jsxs("td",{className:"log-details",children:[$.message==="[METRICS]"&&n.jsxs("div",{className:"metrics-details",children:[n.jsxs("span",{className:"metric-item",children:["Mem Alloc: ",n.jsxs("b",{children:[(X=$.mem_alloc_mb)==null?void 0:X.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Total: ",n.jsxs("b",{children:[(k=$.mem_total_mb)==null?void 0:k.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Sys: ",n.jsxs("b",{children:[(z=$.mem_sys_mb)==null?void 0:z.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Goroutines: ",n.jsx("b",{children:$.num_goroutine})]}),n.jsxs("span",{className:"metric-item",children:["CPU: ",n.jsx("b",{children:$.num_cpu})]}),n.jsxs("span",{className:"metric-item",children:["Heap Objects: ",n.jsx("b",{children:(B=$.heap_objects)==null?void 0:B.toLocaleString()})]})]}),$.message==="[API]"&&n.jsxs("div",{className:"api-details",children:[n.jsx("span",{className:"api-method",children:$.method}),n.jsx("span",{className:"api-path",children:$.path}),n.jsx("span",{className:"api-status",style:{color:$.status&&$.status>=400?"#ef4444":"#22c55e"},children:$.status}),n.jsx("span",{className:"api-latency",children:$.latency}),n.jsx("span",{className:"api-ip",children:$.client_ip})]}),$.message==="[STARTUP]"&&n.jsxs("span",{className:"startup-reason",children:["Reason: ",$.reason]}),$.message==="[PANIC]"&&n.jsxs("div",{className:"panic-details",children:[n.jsx("span",{className:"panic-error",children:$.error}),n.jsxs("span",{className:"panic-path",children:["Path: ",$.path]})]}),$.message==="[ERROR]"&&n.jsxs("div",{className:"error-details",children:[n.jsxs("span",{className:"error-module",children:["Module: ",$.module]}),n.jsx("span",{className:"error-msg",children:$.error})]})]})]},U)})})]})}),n.jsxs("div",{className:"pagination",children:[n.jsx("button",{onClick:()=>C(0),disabled:u===0||m,children:t("logs.first")}),n.jsx("button",{onClick:()=>C(Math.max(0,u-p)),disabled:u===0||m,children:t("events.previous")}),n.jsx("span",{className:"page-info",children:t("events.page",{page:I,total:q})}),n.jsx("button",{onClick:()=>C(u+p),disabled:u+p>=o||m,children:t("events.next")}),n.jsx("button",{onClick:()=>C(Math.max(0,(q-1)*p)),disabled:u+p>=o||m,children:t("logs.last")})]})]}),n.jsx("style",{children:`
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
      `})]})}function r2(){const{t}=st();return n.jsxs("nav",{className:"sidebar",children:[n.jsx("h1",{children:t("app.title")}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(Ke,{to:"/",children:t("nav.dashboard")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/events",children:t("nav.events")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/alerts",children:t("nav.alerts")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/timeline",children:t("nav.timeline")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/collect",children:t("nav.collect")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/analyze",children:t("nav.analyze")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/correlation",children:t("nav.correlation")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/multi",children:t("nav.multi")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/query",children:t("nav.query")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/ueba",children:t("nav.ueba")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/suppress",children:t("nav.suppress")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/live",children:t("nav.live")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/monitor",children:t("nav.monitor")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/persistence",children:t("nav.persistence")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/reports",children:t("nav.reports")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/forensics",children:t("nav.forensics")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/system-info",children:t("nav.systemInfo")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/rules",children:t("nav.rules")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/metrics",children:t("nav.metrics")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/logs",children:t("nav.logs")})}),n.jsx("li",{children:n.jsx(Ke,{to:"/settings",children:t("nav.settings")})})]})]})}function a2(){return n.jsxs(n.Fragment,{children:[n.jsx(t0,{}),n.jsx(r2,{}),n.jsx("main",{className:"content",children:n.jsxs(Fb,{children:[n.jsx(qe,{path:"/",element:n.jsx(w_,{})}),n.jsx(qe,{path:"/events",element:n.jsx(k_,{})}),n.jsx(qe,{path:"/events/:id",element:n.jsx(S_,{})}),n.jsx(qe,{path:"/alerts",element:n.jsx(C_,{})}),n.jsx(qe,{path:"/alerts/:id",element:n.jsx(E_,{})}),n.jsx(qe,{path:"/timeline",element:n.jsx(R_,{})}),n.jsx(qe,{path:"/collect",element:n.jsx(n2,{})}),n.jsx(qe,{path:"/analyze",element:n.jsx(B_,{})}),n.jsx(qe,{path:"/correlation",element:n.jsx(W_,{})}),n.jsx(qe,{path:"/multi",element:n.jsx(U_,{})}),n.jsx(qe,{path:"/query",element:n.jsx(H_,{})}),n.jsx(qe,{path:"/ueba",element:n.jsx(Q_,{})}),n.jsx(qe,{path:"/suppress",element:n.jsx(G_,{})}),n.jsx(qe,{path:"/live",element:n.jsx(J_,{})}),n.jsx(qe,{path:"/monitor",element:n.jsx(s2,{})}),n.jsx(qe,{path:"/persistence",element:n.jsx(O_,{})}),n.jsx(qe,{path:"/reports",element:n.jsx(D_,{})}),n.jsx(qe,{path:"/forensics",element:n.jsx(P_,{})}),n.jsx(qe,{path:"/system-info",element:n.jsx(A_,{})}),n.jsx(qe,{path:"/rules",element:n.jsx(T_,{})}),n.jsx(qe,{path:"/settings",element:n.jsx(M_,{})}),n.jsx(qe,{path:"/metrics",element:n.jsx(L_,{})}),n.jsx(qe,{path:"/logs",element:n.jsx(i2,{})})]})})]})}function l2(){return n.jsx(e0,{children:n.jsx("div",{className:"app",children:n.jsx(a2,{})})})}Yy.createRoot(document.getElementById("root")).render(n.jsx(ng.StrictMode,{children:n.jsx(qb,{children:n.jsx(l2,{})})}));
