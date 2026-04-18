var ky=Object.defineProperty;var Sy=(t,e,n)=>e in t?ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var me=(t,e,n)=>Sy(t,typeof e!="symbol"?e+"":e,n);function Cy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uc={exports:{}},pr={},Wc={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Ey(){if(Uf)return ke;Uf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function b(D,Q,ge){this.props=D,this.context=Q,this.refs=N,this.updater=ge||w}b.prototype.isReactComponent={},b.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},b.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function k(){}k.prototype=b.prototype;function S(D,Q,ge){this.props=D,this.context=Q,this.refs=N,this.updater=ge||w}var A=S.prototype=new k;A.constructor=S,j(A,b.prototype),A.isPureReactComponent=!0;var z=Array.isArray,R=Object.prototype.hasOwnProperty,I={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function C(D,Q,ge){var ve,je={},Z=null,Ee=null;if(Q!=null)for(ve in Q.ref!==void 0&&(Ee=Q.ref),Q.key!==void 0&&(Z=""+Q.key),Q)R.call(Q,ve)&&!L.hasOwnProperty(ve)&&(je[ve]=Q[ve]);var Re=arguments.length-2;if(Re===1)je.children=ge;else if(1<Re){for(var Te=Array(Re),dt=0;dt<Re;dt++)Te[dt]=arguments[dt+2];je.children=Te}if(D&&D.defaultProps)for(ve in Re=D.defaultProps,Re)je[ve]===void 0&&(je[ve]=Re[ve]);return{$$typeof:t,type:D,key:Z,ref:Ee,props:je,_owner:I.current}}function O(D,Q){return{$$typeof:t,type:D.type,key:Q,ref:D.ref,props:D.props,_owner:D._owner}}function H(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function X(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ge){return Q[ge]})}var F=/\/+/g;function te(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?X(""+D.key):Q.toString(36)}function q(D,Q,ge,ve,je){var Z=typeof D;(Z==="undefined"||Z==="boolean")&&(D=null);var Ee=!1;if(D===null)Ee=!0;else switch(Z){case"string":case"number":Ee=!0;break;case"object":switch(D.$$typeof){case t:case e:Ee=!0}}if(Ee)return Ee=D,je=je(Ee),D=ve===""?"."+te(Ee,0):ve,z(je)?(ge="",D!=null&&(ge=D.replace(F,"$&/")+"/"),q(je,Q,ge,"",function(dt){return dt})):je!=null&&(H(je)&&(je=O(je,ge+(!je.key||Ee&&Ee.key===je.key?"":(""+je.key).replace(F,"$&/")+"/")+D)),Q.push(je)),1;if(Ee=0,ve=ve===""?".":ve+":",z(D))for(var Re=0;Re<D.length;Re++){Z=D[Re];var Te=ve+te(Z,Re);Ee+=q(Z,Q,ge,Te,je)}else if(Te=y(D),typeof Te=="function")for(D=Te.call(D),Re=0;!(Z=D.next()).done;)Z=Z.value,Te=ve+te(Z,Re++),Ee+=q(Z,Q,ge,Te,je);else if(Z==="object")throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ee}function oe(D,Q,ge){if(D==null)return D;var ve=[],je=0;return q(D,ve,"","",function(Z){return Q.call(ge,Z,je++)}),ve}function $(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(ge){(D._status===0||D._status===-1)&&(D._status=1,D._result=ge)},function(ge){(D._status===0||D._status===-1)&&(D._status=2,D._result=ge)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var ie={current:null},K={transition:null},re={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:K,ReactCurrentOwner:I};function G(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:oe,forEach:function(D,Q,ge){oe(D,function(){Q.apply(this,arguments)},ge)},count:function(D){var Q=0;return oe(D,function(){Q++}),Q},toArray:function(D){return oe(D,function(Q){return Q})||[]},only:function(D){if(!H(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ke.Component=b,ke.Fragment=n,ke.Profiler=o,ke.PureComponent=S,ke.StrictMode=i,ke.Suspense=h,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,ke.act=G,ke.cloneElement=function(D,Q,ge){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ve=j({},D.props),je=D.key,Z=D.ref,Ee=D._owner;if(Q!=null){if(Q.ref!==void 0&&(Z=Q.ref,Ee=I.current),Q.key!==void 0&&(je=""+Q.key),D.type&&D.type.defaultProps)var Re=D.type.defaultProps;for(Te in Q)R.call(Q,Te)&&!L.hasOwnProperty(Te)&&(ve[Te]=Q[Te]===void 0&&Re!==void 0?Re[Te]:Q[Te])}var Te=arguments.length-2;if(Te===1)ve.children=ge;else if(1<Te){Re=Array(Te);for(var dt=0;dt<Te;dt++)Re[dt]=arguments[dt+2];ve.children=Re}return{$$typeof:t,type:D.type,key:je,ref:Z,props:ve,_owner:Ee}},ke.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},ke.createElement=C,ke.createFactory=function(D){var Q=C.bind(null,D);return Q.type=D,Q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(D){return{$$typeof:u,render:D}},ke.isValidElement=H,ke.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:$}},ke.memo=function(D,Q){return{$$typeof:p,type:D,compare:Q===void 0?null:Q}},ke.startTransition=function(D){var Q=K.transition;K.transition={};try{D()}finally{K.transition=Q}},ke.unstable_act=G,ke.useCallback=function(D,Q){return ie.current.useCallback(D,Q)},ke.useContext=function(D){return ie.current.useContext(D)},ke.useDebugValue=function(){},ke.useDeferredValue=function(D){return ie.current.useDeferredValue(D)},ke.useEffect=function(D,Q){return ie.current.useEffect(D,Q)},ke.useId=function(){return ie.current.useId()},ke.useImperativeHandle=function(D,Q,ge){return ie.current.useImperativeHandle(D,Q,ge)},ke.useInsertionEffect=function(D,Q){return ie.current.useInsertionEffect(D,Q)},ke.useLayoutEffect=function(D,Q){return ie.current.useLayoutEffect(D,Q)},ke.useMemo=function(D,Q){return ie.current.useMemo(D,Q)},ke.useReducer=function(D,Q,ge){return ie.current.useReducer(D,Q,ge)},ke.useRef=function(D){return ie.current.useRef(D)},ke.useState=function(D){return ie.current.useState(D)},ke.useSyncExternalStore=function(D,Q,ge){return ie.current.useSyncExternalStore(D,Q,ge)},ke.useTransition=function(){return ie.current.useTransition()},ke.version="18.3.1",ke}var Wf;function Pd(){return Wf||(Wf=1,Wc.exports=Ey()),Wc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Ry(){if($f)return pr;$f=1;var t=Pd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var g,v={},y=null,w=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(w=h.ref);for(g in h)i.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:u,key:y,ref:w,props:v,_owner:o.current}}return pr.Fragment=n,pr.jsx=c,pr.jsxs=c,pr}var Hf;function Py(){return Hf||(Hf=1,Uc.exports=Ry()),Uc.exports}var r=Py(),E=Pd();const Vm=Hm(E),Ay=Cy({__proto__:null,default:Vm},[E]);var so={},$c={exports:{}},Dt={},Hc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function Ty(){return Vf||(Vf=1,(function(t){function e(K,re){var G=K.length;K.push(re);e:for(;0<G;){var D=G-1>>>1,Q=K[D];if(0<o(Q,re))K[D]=re,K[G]=Q,G=D;else break e}}function n(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var re=K[0],G=K.pop();if(G!==re){K[0]=G;e:for(var D=0,Q=K.length,ge=Q>>>1;D<ge;){var ve=2*(D+1)-1,je=K[ve],Z=ve+1,Ee=K[Z];if(0>o(je,G))Z<Q&&0>o(Ee,je)?(K[D]=Ee,K[Z]=G,D=Z):(K[D]=je,K[ve]=G,D=ve);else if(Z<Q&&0>o(Ee,G))K[D]=Ee,K[Z]=G,D=Z;else break e}}return re}function o(K,re){var G=K.sortIndex-re.sortIndex;return G!==0?G:K.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],g=1,v=null,y=3,w=!1,j=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var re=n(p);re!==null;){if(re.callback===null)i(p);else if(re.startTime<=K)i(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(p)}}function z(K){if(N=!1,A(K),!j)if(n(h)!==null)j=!0,$(R);else{var re=n(p);re!==null&&ie(z,re.startTime-K)}}function R(K,re){j=!1,N&&(N=!1,k(C),C=-1),w=!0;var G=y;try{for(A(re),v=n(h);v!==null&&(!(v.expirationTime>re)||K&&!X());){var D=v.callback;if(typeof D=="function"){v.callback=null,y=v.priorityLevel;var Q=D(v.expirationTime<=re);re=t.unstable_now(),typeof Q=="function"?v.callback=Q:v===n(h)&&i(h),A(re)}else i(h);v=n(h)}if(v!==null)var ge=!0;else{var ve=n(p);ve!==null&&ie(z,ve.startTime-re),ge=!1}return ge}finally{v=null,y=G,w=!1}}var I=!1,L=null,C=-1,O=5,H=-1;function X(){return!(t.unstable_now()-H<O)}function F(){if(L!==null){var K=t.unstable_now();H=K;var re=!0;try{re=L(!0,K)}finally{re?te():(I=!1,L=null)}}else I=!1}var te;if(typeof S=="function")te=function(){S(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,oe=q.port2;q.port1.onmessage=F,te=function(){oe.postMessage(null)}}else te=function(){b(F,0)};function $(K){L=K,I||(I=!0,te())}function ie(K,re){C=b(function(){K(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){j||w||(j=!0,$(R))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(K){switch(y){case 1:case 2:case 3:var re=3;break;default:re=y}var G=y;y=re;try{return K()}finally{y=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var G=y;y=K;try{return re()}finally{y=G}},t.unstable_scheduleCallback=function(K,re,G){var D=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?D+G:D):G=D,K){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=G+Q,K={id:g++,callback:re,priorityLevel:K,startTime:G,expirationTime:Q,sortIndex:-1},G>D?(K.sortIndex=G,e(p,K),n(h)===null&&K===n(p)&&(N?(k(C),C=-1):N=!0,ie(z,G-D))):(K.sortIndex=Q,e(h,K),j||w||(j=!0,$(R))),K},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(K){var re=y;return function(){var G=y;y=re;try{return K.apply(this,arguments)}finally{y=G}}}})(Vc)),Vc}var qf;function Dy(){return qf||(qf=1,Hc.exports=Ty()),Hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Ly(){if(Yf)return Dt;Yf=1;var t=Pd(),e=Dy();function n(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(s,a){c(s,a),c(s+"Capture",a)}function c(s,a){for(o[s]=a,s=0;s<a.length;s++)i.add(a[s])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(s){return h.call(v,s)?!0:h.call(g,s)?!1:p.test(s)?v[s]=!0:(g[s]=!0,!1)}function w(s,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function j(s,a,d,f){if(a===null||typeof a>"u"||w(s,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function N(s,a,d,f,m,x,_){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=d,this.propertyName=s,this.type=a,this.sanitizeURL=x,this.removeEmptyString=_}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){b[s]=new N(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];b[a]=new N(a,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){b[s]=new N(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){b[s]=new N(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){b[s]=new N(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){b[s]=new N(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){b[s]=new N(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){b[s]=new N(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){b[s]=new N(s,5,!1,s.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function S(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(k,S);b[a]=new N(a,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(k,S);b[a]=new N(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(k,S);b[a]=new N(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){b[s]=new N(s,1,!1,s.toLowerCase(),null,!1,!1)}),b.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){b[s]=new N(s,1,!1,s.toLowerCase(),null,!0,!0)});function A(s,a,d,f){var m=b.hasOwnProperty(a)?b[a]:null;(m!==null?m.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(j(a,d,m,f)&&(d=null),f||m===null?y(a)&&(d===null?s.removeAttribute(a):s.setAttribute(a,""+d)):m.mustUseProperty?s[m.propertyName]=d===null?m.type===3?!1:"":d:(a=m.attributeName,f=m.attributeNamespace,d===null?s.removeAttribute(a):(m=m.type,d=m===3||m===4&&d===!0?"":""+d,f?s.setAttributeNS(f,a,d):s.setAttribute(a,d))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),I=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),K=Symbol.iterator;function re(s){return s===null||typeof s!="object"?null:(s=K&&s[K]||s["@@iterator"],typeof s=="function"?s:null)}var G=Object.assign,D;function Q(s){if(D===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);D=a&&a[1]||""}return`
`+D+s}var ge=!1;function ve(s,a){if(!s||ge)return"";ge=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(V){var f=V}Reflect.construct(s,[],a)}else{try{a.call()}catch(V){f=V}s.call(a.prototype)}else{try{throw Error()}catch(V){f=V}s()}}catch(V){if(V&&f&&typeof V.stack=="string"){for(var m=V.stack.split(`
`),x=f.stack.split(`
`),_=m.length-1,P=x.length-1;1<=_&&0<=P&&m[_]!==x[P];)P--;for(;1<=_&&0<=P;_--,P--)if(m[_]!==x[P]){if(_!==1||P!==1)do if(_--,P--,0>P||m[_]!==x[P]){var T=`
`+m[_].replace(" at new "," at ");return s.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",s.displayName)),T}while(1<=_&&0<=P);break}}}finally{ge=!1,Error.prepareStackTrace=d}return(s=s?s.displayName||s.name:"")?Q(s):""}function je(s){switch(s.tag){case 5:return Q(s.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return s=ve(s.type,!1),s;case 11:return s=ve(s.type.render,!1),s;case 1:return s=ve(s.type,!0),s;default:return""}}function Z(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case L:return"Fragment";case I:return"Portal";case O:return"Profiler";case C:return"StrictMode";case te:return"Suspense";case q:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case X:return(s.displayName||"Context")+".Consumer";case H:return(s._context.displayName||"Context")+".Provider";case F:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case oe:return a=s.displayName||null,a!==null?a:Z(s.type)||"Memo";case $:a=s._payload,s=s._init;try{return Z(s(a))}catch{}}return null}function Ee(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Re(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Te(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function dt(s){var a=Te(s)?"checked":"value",d=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),f=""+s[a];if(!s.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var m=d.get,x=d.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return m.call(this)},set:function(_){f=""+_,x.call(this,_)}}),Object.defineProperty(s,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(_){f=""+_},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function Un(s){s._valueTracker||(s._valueTracker=dt(s))}function Wn(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return s&&(f=Te(s)?s.checked?"true":"false":s.value),s=f,s!==d?(a.setValue(s),!0):!1}function tn(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function $n(s,a){var d=a.checked;return G({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??s._wrapperState.initialChecked})}function Ks(s,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=Re(a.value!=null?a.value:d),s._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Xs(s,a){a=a.checked,a!=null&&A(s,"checked",a,!1)}function hn(s,a){Xs(s,a);var d=Re(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&s.value===""||s.value!=d)&&(s.value=""+d):s.value!==""+d&&(s.value=""+d);else if(f==="submit"||f==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?fe(s,a.type,d):a.hasOwnProperty("defaultValue")&&fe(s,a.type,Re(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function ae(s,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,d||a===s.value||(s.value=a),s.defaultValue=a}d=s.name,d!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,d!==""&&(s.name=d)}function fe(s,a,d){(a!=="number"||tn(s.ownerDocument)!==s)&&(d==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+d&&(s.defaultValue=""+d))}var U=Array.isArray;function ce(s,a,d,f){if(s=s.options,a){a={};for(var m=0;m<d.length;m++)a["$"+d[m]]=!0;for(d=0;d<s.length;d++)m=a.hasOwnProperty("$"+s[d].value),s[d].selected!==m&&(s[d].selected=m),m&&f&&(s[d].defaultSelected=!0)}else{for(d=""+Re(d),a=null,m=0;m<s.length;m++){if(s[m].value===d){s[m].selected=!0,f&&(s[m].defaultSelected=!0);return}a!==null||s[m].disabled||(a=s[m])}a!==null&&(a.selected=!0)}}function Se(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return G({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function It(s,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(n(92));if(U(d)){if(1<d.length)throw Error(n(93));d=d[0]}a=d}a==null&&(a=""),d=a}s._wrapperState={initialValue:Re(d)}}function Ct(s,a){var d=Re(a.value),f=Re(a.defaultValue);d!=null&&(d=""+d,d!==s.value&&(s.value=d),a.defaultValue==null&&s.defaultValue!==d&&(s.defaultValue=d)),f!=null&&(s.defaultValue=""+f)}function Le(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function ft(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?ft(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Nt,_t=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,m){MSApp.execUnsafeLocalFunction(function(){return s(a,d,f,m)})}:s})(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(Nt=Nt||document.createElement("div"),Nt.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Nt.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function rt(s,a){if(a){var d=s.firstChild;if(d&&d===s.lastChild&&d.nodeType===3){d.nodeValue=a;return}}s.textContent=a}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rx=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(s){Rx.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),Ai[a]=Ai[s]})});function tu(s,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Ai.hasOwnProperty(s)&&Ai[s]?(""+a).trim():a+"px"}function nu(s,a){s=s.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,m=tu(d,a[d],f);d==="float"&&(d="cssFloat"),f?s.setProperty(d,m):s[d]=m}}var Px=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zo(s,a){if(a){if(Px[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function el(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tl=null;function nl(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var sl=null,Gs=null,Js=null;function su(s){if(s=Zi(s)){if(typeof sl!="function")throw Error(n(280));var a=s.stateNode;a&&(a=va(a),sl(s.stateNode,s.type,a))}}function iu(s){Gs?Js?Js.push(s):Js=[s]:Gs=s}function ru(){if(Gs){var s=Gs,a=Js;if(Js=Gs=null,su(s),a)for(s=0;s<a.length;s++)su(a[s])}}function au(s,a){return s(a)}function ou(){}var il=!1;function lu(s,a,d){if(il)return s(a,d);il=!0;try{return au(s,a,d)}finally{il=!1,(Gs!==null||Js!==null)&&(ou(),ru())}}function Ti(s,a){var d=s.stateNode;if(d===null)return null;var f=va(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(d&&typeof d!="function")throw Error(n(231,a,typeof d));return d}var rl=!1;if(u)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){rl=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{rl=!1}function Ax(s,a,d,f,m,x,_,P,T){var V=Array.prototype.slice.call(arguments,3);try{a.apply(d,V)}catch(ee){this.onError(ee)}}var Li=!1,Xr=null,Gr=!1,al=null,Tx={onError:function(s){Li=!0,Xr=s}};function Dx(s,a,d,f,m,x,_,P,T){Li=!1,Xr=null,Ax.apply(Tx,arguments)}function Lx(s,a,d,f,m,x,_,P,T){if(Dx.apply(this,arguments),Li){if(Li){var V=Xr;Li=!1,Xr=null}else throw Error(n(198));Gr||(Gr=!0,al=V)}}function vs(s){var a=s,d=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(d=a.return),s=a.return;while(s)}return a.tag===3?d:null}function cu(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function du(s){if(vs(s)!==s)throw Error(n(188))}function Mx(s){var a=s.alternate;if(!a){if(a=vs(s),a===null)throw Error(n(188));return a!==s?null:s}for(var d=s,f=a;;){var m=d.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){d=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===d)return du(m),s;if(x===f)return du(m),a;x=x.sibling}throw Error(n(188))}if(d.return!==f.return)d=m,f=x;else{for(var _=!1,P=m.child;P;){if(P===d){_=!0,d=m,f=x;break}if(P===f){_=!0,f=m,d=x;break}P=P.sibling}if(!_){for(P=x.child;P;){if(P===d){_=!0,d=x,f=m;break}if(P===f){_=!0,f=x,d=m;break}P=P.sibling}if(!_)throw Error(n(189))}}if(d.alternate!==f)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?s:a}function uu(s){return s=Mx(s),s!==null?hu(s):null}function hu(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=hu(s);if(a!==null)return a;s=s.sibling}return null}var fu=e.unstable_scheduleCallback,pu=e.unstable_cancelCallback,Ox=e.unstable_shouldYield,zx=e.unstable_requestPaint,Qe=e.unstable_now,Ix=e.unstable_getCurrentPriorityLevel,ol=e.unstable_ImmediatePriority,mu=e.unstable_UserBlockingPriority,Jr=e.unstable_NormalPriority,Fx=e.unstable_LowPriority,gu=e.unstable_IdlePriority,Zr=null,fn=null;function Bx(s){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Zr,s,void 0,(s.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:$x,Ux=Math.log,Wx=Math.LN2;function $x(s){return s>>>=0,s===0?32:31-(Ux(s)/Wx|0)|0}var ea=64,ta=4194304;function Mi(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function na(s,a){var d=s.pendingLanes;if(d===0)return 0;var f=0,m=s.suspendedLanes,x=s.pingedLanes,_=d&268435455;if(_!==0){var P=_&~m;P!==0?f=Mi(P):(x&=_,x!==0&&(f=Mi(x)))}else _=d&~m,_!==0?f=Mi(_):x!==0&&(f=Mi(x));if(f===0)return 0;if(a!==0&&a!==f&&(a&m)===0&&(m=f&-f,x=a&-a,m>=x||m===16&&(x&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=f;0<a;)d=31-nn(a),m=1<<d,f|=s[d],a&=~m;return f}function Hx(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vx(s,a){for(var d=s.suspendedLanes,f=s.pingedLanes,m=s.expirationTimes,x=s.pendingLanes;0<x;){var _=31-nn(x),P=1<<_,T=m[_];T===-1?((P&d)===0||(P&f)!==0)&&(m[_]=Hx(P,a)):T<=a&&(s.expiredLanes|=P),x&=~P}}function ll(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function xu(){var s=ea;return ea<<=1,(ea&4194240)===0&&(ea=64),s}function cl(s){for(var a=[],d=0;31>d;d++)a.push(s);return a}function Oi(s,a,d){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-nn(a),s[a]=d}function qx(s,a){var d=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var f=s.eventTimes;for(s=s.expirationTimes;0<d;){var m=31-nn(d),x=1<<m;a[m]=0,f[m]=-1,s[m]=-1,d&=~x}}function dl(s,a){var d=s.entangledLanes|=a;for(s=s.entanglements;d;){var f=31-nn(d),m=1<<f;m&a|s[f]&a&&(s[f]|=a),d&=~m}}var Me=0;function vu(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var yu,ul,bu,ju,wu,hl=!1,sa=[],Hn=null,Vn=null,qn=null,zi=new Map,Ii=new Map,Yn=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(s,a){switch(s){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":qn=null;break;case"pointerover":case"pointerout":zi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(a.pointerId)}}function Fi(s,a,d,f,m,x){return s===null||s.nativeEvent!==x?(s={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},a!==null&&(a=Zi(a),a!==null&&ul(a)),s):(s.eventSystemFlags|=f,a=s.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),s)}function Qx(s,a,d,f,m){switch(a){case"focusin":return Hn=Fi(Hn,s,a,d,f,m),!0;case"dragenter":return Vn=Fi(Vn,s,a,d,f,m),!0;case"mouseover":return qn=Fi(qn,s,a,d,f,m),!0;case"pointerover":var x=m.pointerId;return zi.set(x,Fi(zi.get(x)||null,s,a,d,f,m)),!0;case"gotpointercapture":return x=m.pointerId,Ii.set(x,Fi(Ii.get(x)||null,s,a,d,f,m)),!0}return!1}function _u(s){var a=ys(s.target);if(a!==null){var d=vs(a);if(d!==null){if(a=d.tag,a===13){if(a=cu(d),a!==null){s.blockedOn=a,wu(s.priority,function(){bu(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){s.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}s.blockedOn=null}function ia(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var d=pl(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(d===null){d=s.nativeEvent;var f=new d.constructor(d.type,d);tl=f,d.target.dispatchEvent(f),tl=null}else return a=Zi(d),a!==null&&ul(a),s.blockedOn=d,!1;a.shift()}return!0}function ku(s,a,d){ia(s)&&d.delete(a)}function Kx(){hl=!1,Hn!==null&&ia(Hn)&&(Hn=null),Vn!==null&&ia(Vn)&&(Vn=null),qn!==null&&ia(qn)&&(qn=null),zi.forEach(ku),Ii.forEach(ku)}function Bi(s,a){s.blockedOn===a&&(s.blockedOn=null,hl||(hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kx)))}function Ui(s){function a(m){return Bi(m,s)}if(0<sa.length){Bi(sa[0],s);for(var d=1;d<sa.length;d++){var f=sa[d];f.blockedOn===s&&(f.blockedOn=null)}}for(Hn!==null&&Bi(Hn,s),Vn!==null&&Bi(Vn,s),qn!==null&&Bi(qn,s),zi.forEach(a),Ii.forEach(a),d=0;d<Yn.length;d++)f=Yn[d],f.blockedOn===s&&(f.blockedOn=null);for(;0<Yn.length&&(d=Yn[0],d.blockedOn===null);)_u(d),d.blockedOn===null&&Yn.shift()}var Zs=z.ReactCurrentBatchConfig,ra=!0;function Xx(s,a,d,f){var m=Me,x=Zs.transition;Zs.transition=null;try{Me=1,fl(s,a,d,f)}finally{Me=m,Zs.transition=x}}function Gx(s,a,d,f){var m=Me,x=Zs.transition;Zs.transition=null;try{Me=4,fl(s,a,d,f)}finally{Me=m,Zs.transition=x}}function fl(s,a,d,f){if(ra){var m=pl(s,a,d,f);if(m===null)Al(s,a,f,aa,d),Nu(s,f);else if(Qx(m,s,a,d,f))f.stopPropagation();else if(Nu(s,f),a&4&&-1<Yx.indexOf(s)){for(;m!==null;){var x=Zi(m);if(x!==null&&yu(x),x=pl(s,a,d,f),x===null&&Al(s,a,f,aa,d),x===m)break;m=x}m!==null&&f.stopPropagation()}else Al(s,a,f,null,d)}}var aa=null;function pl(s,a,d,f){if(aa=null,s=nl(f),s=ys(s),s!==null)if(a=vs(s),a===null)s=null;else if(d=a.tag,d===13){if(s=cu(a),s!==null)return s;s=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return aa=s,null}function Su(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ix()){case ol:return 1;case mu:return 4;case Jr:case Fx:return 16;case gu:return 536870912;default:return 16}default:return 16}}var Qn=null,ml=null,oa=null;function Cu(){if(oa)return oa;var s,a=ml,d=a.length,f,m="value"in Qn?Qn.value:Qn.textContent,x=m.length;for(s=0;s<d&&a[s]===m[s];s++);var _=d-s;for(f=1;f<=_&&a[d-f]===m[x-f];f++);return oa=m.slice(s,1<f?1-f:void 0)}function la(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function ca(){return!0}function Eu(){return!1}function Ft(s){function a(d,f,m,x,_){this._reactName=d,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=_,this.currentTarget=null;for(var P in s)s.hasOwnProperty(P)&&(d=s[P],this[P]=d?d(x):x[P]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?ca:Eu,this.isPropagationStopped=Eu,this}return G(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),a}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=Ft(ei),Wi=G({},ei,{view:0,detail:0}),Jx=Ft(Wi),xl,vl,$i,da=G({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bl,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==$i&&($i&&s.type==="mousemove"?(xl=s.screenX-$i.screenX,vl=s.screenY-$i.screenY):vl=xl=0,$i=s),xl)},movementY:function(s){return"movementY"in s?s.movementY:vl}}),Ru=Ft(da),Zx=G({},da,{dataTransfer:0}),ev=Ft(Zx),tv=G({},Wi,{relatedTarget:0}),yl=Ft(tv),nv=G({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=Ft(nv),iv=G({},ei,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),rv=Ft(iv),av=G({},ei,{data:0}),Pu=Ft(av),ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=cv[s])?!!a[s]:!1}function bl(){return dv}var uv=G({},Wi,{key:function(s){if(s.key){var a=ov[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=la(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?lv[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bl,charCode:function(s){return s.type==="keypress"?la(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?la(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),hv=Ft(uv),fv=G({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Ft(fv),pv=G({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bl}),mv=Ft(pv),gv=G({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=Ft(gv),vv=G({},da,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=Ft(vv),bv=[9,13,27,32],jl=u&&"CompositionEvent"in window,Hi=null;u&&"documentMode"in document&&(Hi=document.documentMode);var jv=u&&"TextEvent"in window&&!Hi,Tu=u&&(!jl||Hi&&8<Hi&&11>=Hi),Du=" ",Lu=!1;function Mu(s,a){switch(s){case"keyup":return bv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ou(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ti=!1;function wv(s,a){switch(s){case"compositionend":return Ou(a);case"keypress":return a.which!==32?null:(Lu=!0,Du);case"textInput":return s=a.data,s===Du&&Lu?null:s;default:return null}}function Nv(s,a){if(ti)return s==="compositionend"||!jl&&Mu(s,a)?(s=Cu(),oa=ml=Qn=null,ti=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Tu&&a.locale!=="ko"?null:a.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!_v[s.type]:a==="textarea"}function Iu(s,a,d,f){iu(f),a=ma(a,"onChange"),0<a.length&&(d=new gl("onChange","change",null,d,f),s.push({event:d,listeners:a}))}var Vi=null,qi=null;function kv(s){nh(s,0)}function ua(s){var a=ai(s);if(Wn(a))return s}function Sv(s,a){if(s==="change")return a}var Fu=!1;if(u){var wl;if(u){var Nl="oninput"in document;if(!Nl){var Bu=document.createElement("div");Bu.setAttribute("oninput","return;"),Nl=typeof Bu.oninput=="function"}wl=Nl}else wl=!1;Fu=wl&&(!document.documentMode||9<document.documentMode)}function Uu(){Vi&&(Vi.detachEvent("onpropertychange",Wu),qi=Vi=null)}function Wu(s){if(s.propertyName==="value"&&ua(qi)){var a=[];Iu(a,qi,s,nl(s)),lu(kv,a)}}function Cv(s,a,d){s==="focusin"?(Uu(),Vi=a,qi=d,Vi.attachEvent("onpropertychange",Wu)):s==="focusout"&&Uu()}function Ev(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return ua(qi)}function Rv(s,a){if(s==="click")return ua(a)}function Pv(s,a){if(s==="input"||s==="change")return ua(a)}function Av(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var sn=typeof Object.is=="function"?Object.is:Av;function Yi(s,a){if(sn(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var d=Object.keys(s),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var m=d[f];if(!h.call(a,m)||!sn(s[m],a[m]))return!1}return!0}function $u(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Hu(s,a){var d=$u(s);s=0;for(var f;d;){if(d.nodeType===3){if(f=s+d.textContent.length,s<=a&&f>=a)return{node:d,offset:a-s};s=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=$u(d)}}function Vu(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?Vu(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function qu(){for(var s=window,a=tn();a instanceof s.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)s=a.contentWindow;else break;a=tn(s.document)}return a}function _l(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function Tv(s){var a=qu(),d=s.focusedElem,f=s.selectionRange;if(a!==d&&d&&d.ownerDocument&&Vu(d.ownerDocument.documentElement,d)){if(f!==null&&_l(d)){if(a=f.start,s=f.end,s===void 0&&(s=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(s,d.value.length);else if(s=(a=d.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var m=d.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!s.extend&&x>f&&(m=f,f=x,x=m),m=Hu(d,x);var _=Hu(d,f);m&&_&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==_.node||s.focusOffset!==_.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),s.removeAllRanges(),x>f?(s.addRange(a),s.extend(_.node,_.offset)):(a.setEnd(_.node,_.offset),s.addRange(a)))}}for(a=[],s=d;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)s=a[d],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Dv=u&&"documentMode"in document&&11>=document.documentMode,ni=null,kl=null,Qi=null,Sl=!1;function Yu(s,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Sl||ni==null||ni!==tn(f)||(f=ni,"selectionStart"in f&&_l(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Qi&&Yi(Qi,f)||(Qi=f,f=ma(kl,"onSelect"),0<f.length&&(a=new gl("onSelect","select",null,a,d),s.push({event:a,listeners:f}),a.target=ni)))}function ha(s,a){var d={};return d[s.toLowerCase()]=a.toLowerCase(),d["Webkit"+s]="webkit"+a,d["Moz"+s]="moz"+a,d}var si={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Cl={},Qu={};u&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete si.animationend.animation,delete si.animationiteration.animation,delete si.animationstart.animation),"TransitionEvent"in window||delete si.transitionend.transition);function fa(s){if(Cl[s])return Cl[s];if(!si[s])return s;var a=si[s],d;for(d in a)if(a.hasOwnProperty(d)&&d in Qu)return Cl[s]=a[d];return s}var Ku=fa("animationend"),Xu=fa("animationiteration"),Gu=fa("animationstart"),Ju=fa("transitionend"),Zu=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(s,a){Zu.set(s,a),l(a,[s])}for(var El=0;El<eh.length;El++){var Rl=eh[El],Lv=Rl.toLowerCase(),Mv=Rl[0].toUpperCase()+Rl.slice(1);Kn(Lv,"on"+Mv)}Kn(Ku,"onAnimationEnd"),Kn(Xu,"onAnimationIteration"),Kn(Gu,"onAnimationStart"),Kn("dblclick","onDoubleClick"),Kn("focusin","onFocus"),Kn("focusout","onBlur"),Kn(Ju,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));function th(s,a,d){var f=s.type||"unknown-event";s.currentTarget=d,Lx(f,a,void 0,s),s.currentTarget=null}function nh(s,a){a=(a&4)!==0;for(var d=0;d<s.length;d++){var f=s[d],m=f.event;f=f.listeners;e:{var x=void 0;if(a)for(var _=f.length-1;0<=_;_--){var P=f[_],T=P.instance,V=P.currentTarget;if(P=P.listener,T!==x&&m.isPropagationStopped())break e;th(m,P,V),x=T}else for(_=0;_<f.length;_++){if(P=f[_],T=P.instance,V=P.currentTarget,P=P.listener,T!==x&&m.isPropagationStopped())break e;th(m,P,V),x=T}}}if(Gr)throw s=al,Gr=!1,al=null,s}function Fe(s,a){var d=a[zl];d===void 0&&(d=a[zl]=new Set);var f=s+"__bubble";d.has(f)||(sh(a,s,2,!1),d.add(f))}function Pl(s,a,d){var f=0;a&&(f|=4),sh(d,s,f,a)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Xi(s){if(!s[pa]){s[pa]=!0,i.forEach(function(d){d!=="selectionchange"&&(Ov.has(d)||Pl(d,!1,s),Pl(d,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[pa]||(a[pa]=!0,Pl("selectionchange",!1,a))}}function sh(s,a,d,f){switch(Su(a)){case 1:var m=Xx;break;case 4:m=Gx;break;default:m=fl}d=m.bind(null,a,d,s),m=void 0,!rl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),f?m!==void 0?s.addEventListener(a,d,{capture:!0,passive:m}):s.addEventListener(a,d,!0):m!==void 0?s.addEventListener(a,d,{passive:m}):s.addEventListener(a,d,!1)}function Al(s,a,d,f,m){var x=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var _=f.tag;if(_===3||_===4){var P=f.stateNode.containerInfo;if(P===m||P.nodeType===8&&P.parentNode===m)break;if(_===4)for(_=f.return;_!==null;){var T=_.tag;if((T===3||T===4)&&(T=_.stateNode.containerInfo,T===m||T.nodeType===8&&T.parentNode===m))return;_=_.return}for(;P!==null;){if(_=ys(P),_===null)return;if(T=_.tag,T===5||T===6){f=x=_;continue e}P=P.parentNode}}f=f.return}lu(function(){var V=x,ee=nl(d),ne=[];e:{var J=Zu.get(s);if(J!==void 0){var de=gl,he=s;switch(s){case"keypress":if(la(d)===0)break e;case"keydown":case"keyup":de=hv;break;case"focusin":he="focus",de=yl;break;case"focusout":he="blur",de=yl;break;case"beforeblur":case"afterblur":de=yl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=mv;break;case Ku:case Xu:case Gu:de=sv;break;case Ju:de=xv;break;case"scroll":de=Jx;break;case"wheel":de=yv;break;case"copy":case"cut":case"paste":de=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Au}var pe=(a&4)!==0,Ke=!pe&&s==="scroll",B=pe?J!==null?J+"Capture":null:J;pe=[];for(var M=V,W;M!==null;){W=M;var se=W.stateNode;if(W.tag===5&&se!==null&&(W=se,B!==null&&(se=Ti(M,B),se!=null&&pe.push(Gi(M,se,W)))),Ke)break;M=M.return}0<pe.length&&(J=new de(J,he,null,d,ee),ne.push({event:J,listeners:pe}))}}if((a&7)===0){e:{if(J=s==="mouseover"||s==="pointerover",de=s==="mouseout"||s==="pointerout",J&&d!==tl&&(he=d.relatedTarget||d.fromElement)&&(ys(he)||he[_n]))break e;if((de||J)&&(J=ee.window===ee?ee:(J=ee.ownerDocument)?J.defaultView||J.parentWindow:window,de?(he=d.relatedTarget||d.toElement,de=V,he=he?ys(he):null,he!==null&&(Ke=vs(he),he!==Ke||he.tag!==5&&he.tag!==6)&&(he=null)):(de=null,he=V),de!==he)){if(pe=Ru,se="onMouseLeave",B="onMouseEnter",M="mouse",(s==="pointerout"||s==="pointerover")&&(pe=Au,se="onPointerLeave",B="onPointerEnter",M="pointer"),Ke=de==null?J:ai(de),W=he==null?J:ai(he),J=new pe(se,M+"leave",de,d,ee),J.target=Ke,J.relatedTarget=W,se=null,ys(ee)===V&&(pe=new pe(B,M+"enter",he,d,ee),pe.target=W,pe.relatedTarget=Ke,se=pe),Ke=se,de&&he)t:{for(pe=de,B=he,M=0,W=pe;W;W=ii(W))M++;for(W=0,se=B;se;se=ii(se))W++;for(;0<M-W;)pe=ii(pe),M--;for(;0<W-M;)B=ii(B),W--;for(;M--;){if(pe===B||B!==null&&pe===B.alternate)break t;pe=ii(pe),B=ii(B)}pe=null}else pe=null;de!==null&&ih(ne,J,de,pe,!1),he!==null&&Ke!==null&&ih(ne,Ke,he,pe,!0)}}e:{if(J=V?ai(V):window,de=J.nodeName&&J.nodeName.toLowerCase(),de==="select"||de==="input"&&J.type==="file")var xe=Sv;else if(zu(J))if(Fu)xe=Pv;else{xe=Ev;var ye=Cv}else(de=J.nodeName)&&de.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(xe=Rv);if(xe&&(xe=xe(s,V))){Iu(ne,xe,d,ee);break e}ye&&ye(s,J,V),s==="focusout"&&(ye=J._wrapperState)&&ye.controlled&&J.type==="number"&&fe(J,"number",J.value)}switch(ye=V?ai(V):window,s){case"focusin":(zu(ye)||ye.contentEditable==="true")&&(ni=ye,kl=V,Qi=null);break;case"focusout":Qi=kl=ni=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Yu(ne,d,ee);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Yu(ne,d,ee)}var be;if(jl)e:{switch(s){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else ti?Mu(s,d)&&(Ne="onCompositionEnd"):s==="keydown"&&d.keyCode===229&&(Ne="onCompositionStart");Ne&&(Tu&&d.locale!=="ko"&&(ti||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&ti&&(be=Cu()):(Qn=ee,ml="value"in Qn?Qn.value:Qn.textContent,ti=!0)),ye=ma(V,Ne),0<ye.length&&(Ne=new Pu(Ne,s,null,d,ee),ne.push({event:Ne,listeners:ye}),be?Ne.data=be:(be=Ou(d),be!==null&&(Ne.data=be)))),(be=jv?wv(s,d):Nv(s,d))&&(V=ma(V,"onBeforeInput"),0<V.length&&(ee=new Pu("onBeforeInput","beforeinput",null,d,ee),ne.push({event:ee,listeners:V}),ee.data=be))}nh(ne,a)})}function Gi(s,a,d){return{instance:s,listener:a,currentTarget:d}}function ma(s,a){for(var d=a+"Capture",f=[];s!==null;){var m=s,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Ti(s,d),x!=null&&f.unshift(Gi(s,x,m)),x=Ti(s,a),x!=null&&f.push(Gi(s,x,m))),s=s.return}return f}function ii(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function ih(s,a,d,f,m){for(var x=a._reactName,_=[];d!==null&&d!==f;){var P=d,T=P.alternate,V=P.stateNode;if(T!==null&&T===f)break;P.tag===5&&V!==null&&(P=V,m?(T=Ti(d,x),T!=null&&_.unshift(Gi(d,T,P))):m||(T=Ti(d,x),T!=null&&_.push(Gi(d,T,P)))),d=d.return}_.length!==0&&s.push({event:a,listeners:_})}var zv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function rh(s){return(typeof s=="string"?s:""+s).replace(zv,`
`).replace(Iv,"")}function ga(s,a,d){if(a=rh(a),rh(s)!==a&&d)throw Error(n(425))}function xa(){}var Tl=null,Dl=null;function Ll(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ml=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(s){return ah.resolve(null).then(s).catch(Uv)}:Ml;function Uv(s){setTimeout(function(){throw s})}function Ol(s,a){var d=a,f=0;do{var m=d.nextSibling;if(s.removeChild(d),m&&m.nodeType===8)if(d=m.data,d==="/$"){if(f===0){s.removeChild(m),Ui(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=m}while(d);Ui(a)}function Xn(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function oh(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return s;a--}else d==="/$"&&a++}s=s.previousSibling}return null}var ri=Math.random().toString(36).slice(2),pn="__reactFiber$"+ri,Ji="__reactProps$"+ri,_n="__reactContainer$"+ri,zl="__reactEvents$"+ri,Wv="__reactListeners$"+ri,$v="__reactHandles$"+ri;function ys(s){var a=s[pn];if(a)return a;for(var d=s.parentNode;d;){if(a=d[_n]||d[pn]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(s=oh(s);s!==null;){if(d=s[pn])return d;s=oh(s)}return a}s=d,d=s.parentNode}return null}function Zi(s){return s=s[pn]||s[_n],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function ai(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function va(s){return s[Ji]||null}var Il=[],oi=-1;function Gn(s){return{current:s}}function Be(s){0>oi||(s.current=Il[oi],Il[oi]=null,oi--)}function Ie(s,a){oi++,Il[oi]=s.current,s.current=a}var Jn={},pt=Gn(Jn),Et=Gn(!1),bs=Jn;function li(s,a){var d=s.type.contextTypes;if(!d)return Jn;var f=s.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in d)m[x]=a[x];return f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=m),m}function Rt(s){return s=s.childContextTypes,s!=null}function ya(){Be(Et),Be(pt)}function lh(s,a,d){if(pt.current!==Jn)throw Error(n(168));Ie(pt,a),Ie(Et,d)}function ch(s,a,d){var f=s.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var m in f)if(!(m in a))throw Error(n(108,Ee(s)||"Unknown",m));return G({},d,f)}function ba(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Jn,bs=pt.current,Ie(pt,s),Ie(Et,Et.current),!0}function dh(s,a,d){var f=s.stateNode;if(!f)throw Error(n(169));d?(s=ch(s,a,bs),f.__reactInternalMemoizedMergedChildContext=s,Be(Et),Be(pt),Ie(pt,s)):Be(Et),Ie(Et,d)}var kn=null,ja=!1,Fl=!1;function uh(s){kn===null?kn=[s]:kn.push(s)}function Hv(s){ja=!0,uh(s)}function Zn(){if(!Fl&&kn!==null){Fl=!0;var s=0,a=Me;try{var d=kn;for(Me=1;s<d.length;s++){var f=d[s];do f=f(!0);while(f!==null)}kn=null,ja=!1}catch(m){throw kn!==null&&(kn=kn.slice(s+1)),fu(ol,Zn),m}finally{Me=a,Fl=!1}}return null}var ci=[],di=0,wa=null,Na=0,Vt=[],qt=0,js=null,Sn=1,Cn="";function ws(s,a){ci[di++]=Na,ci[di++]=wa,wa=s,Na=a}function hh(s,a,d){Vt[qt++]=Sn,Vt[qt++]=Cn,Vt[qt++]=js,js=s;var f=Sn;s=Cn;var m=32-nn(f)-1;f&=~(1<<m),d+=1;var x=32-nn(a)+m;if(30<x){var _=m-m%5;x=(f&(1<<_)-1).toString(32),f>>=_,m-=_,Sn=1<<32-nn(a)+m|d<<m|f,Cn=x+s}else Sn=1<<x|d<<m|f,Cn=s}function Bl(s){s.return!==null&&(ws(s,1),hh(s,1,0))}function Ul(s){for(;s===wa;)wa=ci[--di],ci[di]=null,Na=ci[--di],ci[di]=null;for(;s===js;)js=Vt[--qt],Vt[qt]=null,Cn=Vt[--qt],Vt[qt]=null,Sn=Vt[--qt],Vt[qt]=null}var Bt=null,Ut=null,We=!1,rn=null;function fh(s,a){var d=Xt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=s,a=s.deletions,a===null?(s.deletions=[d],s.flags|=16):a.push(d)}function ph(s,a){switch(s.tag){case 5:var d=s.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,Bt=s,Ut=Xn(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,Bt=s,Ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=js!==null?{id:Sn,overflow:Cn}:null,s.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Xt(18,null,null,0),d.stateNode=a,d.return=s,s.child=d,Bt=s,Ut=null,!0):!1;default:return!1}}function Wl(s){return(s.mode&1)!==0&&(s.flags&128)===0}function $l(s){if(We){var a=Ut;if(a){var d=a;if(!ph(s,a)){if(Wl(s))throw Error(n(418));a=Xn(d.nextSibling);var f=Bt;a&&ph(s,a)?fh(f,d):(s.flags=s.flags&-4097|2,We=!1,Bt=s)}}else{if(Wl(s))throw Error(n(418));s.flags=s.flags&-4097|2,We=!1,Bt=s}}}function mh(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Bt=s}function _a(s){if(s!==Bt)return!1;if(!We)return mh(s),We=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!Ll(s.type,s.memoizedProps)),a&&(a=Ut)){if(Wl(s))throw gh(),Error(n(418));for(;a;)fh(s,a),a=Xn(a.nextSibling)}if(mh(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="/$"){if(a===0){Ut=Xn(s.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}s=s.nextSibling}Ut=null}}else Ut=Bt?Xn(s.stateNode.nextSibling):null;return!0}function gh(){for(var s=Ut;s;)s=Xn(s.nextSibling)}function ui(){Ut=Bt=null,We=!1}function Hl(s){rn===null?rn=[s]:rn.push(s)}var Vv=z.ReactCurrentBatchConfig;function er(s,a,d){if(s=d.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var f=d.stateNode}if(!f)throw Error(n(147,s));var m=f,x=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(_){var P=m.refs;_===null?delete P[x]:P[x]=_},a._stringRef=x,a)}if(typeof s!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,s))}return s}function ka(s,a){throw s=Object.prototype.toString.call(a),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function xh(s){var a=s._init;return a(s._payload)}function vh(s){function a(B,M){if(s){var W=B.deletions;W===null?(B.deletions=[M],B.flags|=16):W.push(M)}}function d(B,M){if(!s)return null;for(;M!==null;)a(B,M),M=M.sibling;return null}function f(B,M){for(B=new Map;M!==null;)M.key!==null?B.set(M.key,M):B.set(M.index,M),M=M.sibling;return B}function m(B,M){return B=os(B,M),B.index=0,B.sibling=null,B}function x(B,M,W){return B.index=W,s?(W=B.alternate,W!==null?(W=W.index,W<M?(B.flags|=2,M):W):(B.flags|=2,M)):(B.flags|=1048576,M)}function _(B){return s&&B.alternate===null&&(B.flags|=2),B}function P(B,M,W,se){return M===null||M.tag!==6?(M=Mc(W,B.mode,se),M.return=B,M):(M=m(M,W),M.return=B,M)}function T(B,M,W,se){var xe=W.type;return xe===L?ee(B,M,W.props.children,se,W.key):M!==null&&(M.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===$&&xh(xe)===M.type)?(se=m(M,W.props),se.ref=er(B,M,W),se.return=B,se):(se=Ka(W.type,W.key,W.props,null,B.mode,se),se.ref=er(B,M,W),se.return=B,se)}function V(B,M,W,se){return M===null||M.tag!==4||M.stateNode.containerInfo!==W.containerInfo||M.stateNode.implementation!==W.implementation?(M=Oc(W,B.mode,se),M.return=B,M):(M=m(M,W.children||[]),M.return=B,M)}function ee(B,M,W,se,xe){return M===null||M.tag!==7?(M=Ps(W,B.mode,se,xe),M.return=B,M):(M=m(M,W),M.return=B,M)}function ne(B,M,W){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Mc(""+M,B.mode,W),M.return=B,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case R:return W=Ka(M.type,M.key,M.props,null,B.mode,W),W.ref=er(B,null,M),W.return=B,W;case I:return M=Oc(M,B.mode,W),M.return=B,M;case $:var se=M._init;return ne(B,se(M._payload),W)}if(U(M)||re(M))return M=Ps(M,B.mode,W,null),M.return=B,M;ka(B,M)}return null}function J(B,M,W,se){var xe=M!==null?M.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return xe!==null?null:P(B,M,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case R:return W.key===xe?T(B,M,W,se):null;case I:return W.key===xe?V(B,M,W,se):null;case $:return xe=W._init,J(B,M,xe(W._payload),se)}if(U(W)||re(W))return xe!==null?null:ee(B,M,W,se,null);ka(B,W)}return null}function de(B,M,W,se,xe){if(typeof se=="string"&&se!==""||typeof se=="number")return B=B.get(W)||null,P(M,B,""+se,xe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case R:return B=B.get(se.key===null?W:se.key)||null,T(M,B,se,xe);case I:return B=B.get(se.key===null?W:se.key)||null,V(M,B,se,xe);case $:var ye=se._init;return de(B,M,W,ye(se._payload),xe)}if(U(se)||re(se))return B=B.get(W)||null,ee(M,B,se,xe,null);ka(M,se)}return null}function he(B,M,W,se){for(var xe=null,ye=null,be=M,Ne=M=0,lt=null;be!==null&&Ne<W.length;Ne++){be.index>Ne?(lt=be,be=null):lt=be.sibling;var Ae=J(B,be,W[Ne],se);if(Ae===null){be===null&&(be=lt);break}s&&be&&Ae.alternate===null&&a(B,be),M=x(Ae,M,Ne),ye===null?xe=Ae:ye.sibling=Ae,ye=Ae,be=lt}if(Ne===W.length)return d(B,be),We&&ws(B,Ne),xe;if(be===null){for(;Ne<W.length;Ne++)be=ne(B,W[Ne],se),be!==null&&(M=x(be,M,Ne),ye===null?xe=be:ye.sibling=be,ye=be);return We&&ws(B,Ne),xe}for(be=f(B,be);Ne<W.length;Ne++)lt=de(be,B,Ne,W[Ne],se),lt!==null&&(s&&lt.alternate!==null&&be.delete(lt.key===null?Ne:lt.key),M=x(lt,M,Ne),ye===null?xe=lt:ye.sibling=lt,ye=lt);return s&&be.forEach(function(ls){return a(B,ls)}),We&&ws(B,Ne),xe}function pe(B,M,W,se){var xe=re(W);if(typeof xe!="function")throw Error(n(150));if(W=xe.call(W),W==null)throw Error(n(151));for(var ye=xe=null,be=M,Ne=M=0,lt=null,Ae=W.next();be!==null&&!Ae.done;Ne++,Ae=W.next()){be.index>Ne?(lt=be,be=null):lt=be.sibling;var ls=J(B,be,Ae.value,se);if(ls===null){be===null&&(be=lt);break}s&&be&&ls.alternate===null&&a(B,be),M=x(ls,M,Ne),ye===null?xe=ls:ye.sibling=ls,ye=ls,be=lt}if(Ae.done)return d(B,be),We&&ws(B,Ne),xe;if(be===null){for(;!Ae.done;Ne++,Ae=W.next())Ae=ne(B,Ae.value,se),Ae!==null&&(M=x(Ae,M,Ne),ye===null?xe=Ae:ye.sibling=Ae,ye=Ae);return We&&ws(B,Ne),xe}for(be=f(B,be);!Ae.done;Ne++,Ae=W.next())Ae=de(be,B,Ne,Ae.value,se),Ae!==null&&(s&&Ae.alternate!==null&&be.delete(Ae.key===null?Ne:Ae.key),M=x(Ae,M,Ne),ye===null?xe=Ae:ye.sibling=Ae,ye=Ae);return s&&be.forEach(function(_y){return a(B,_y)}),We&&ws(B,Ne),xe}function Ke(B,M,W,se){if(typeof W=="object"&&W!==null&&W.type===L&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case R:e:{for(var xe=W.key,ye=M;ye!==null;){if(ye.key===xe){if(xe=W.type,xe===L){if(ye.tag===7){d(B,ye.sibling),M=m(ye,W.props.children),M.return=B,B=M;break e}}else if(ye.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===$&&xh(xe)===ye.type){d(B,ye.sibling),M=m(ye,W.props),M.ref=er(B,ye,W),M.return=B,B=M;break e}d(B,ye);break}else a(B,ye);ye=ye.sibling}W.type===L?(M=Ps(W.props.children,B.mode,se,W.key),M.return=B,B=M):(se=Ka(W.type,W.key,W.props,null,B.mode,se),se.ref=er(B,M,W),se.return=B,B=se)}return _(B);case I:e:{for(ye=W.key;M!==null;){if(M.key===ye)if(M.tag===4&&M.stateNode.containerInfo===W.containerInfo&&M.stateNode.implementation===W.implementation){d(B,M.sibling),M=m(M,W.children||[]),M.return=B,B=M;break e}else{d(B,M);break}else a(B,M);M=M.sibling}M=Oc(W,B.mode,se),M.return=B,B=M}return _(B);case $:return ye=W._init,Ke(B,M,ye(W._payload),se)}if(U(W))return he(B,M,W,se);if(re(W))return pe(B,M,W,se);ka(B,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,M!==null&&M.tag===6?(d(B,M.sibling),M=m(M,W),M.return=B,B=M):(d(B,M),M=Mc(W,B.mode,se),M.return=B,B=M),_(B)):d(B,M)}return Ke}var hi=vh(!0),yh=vh(!1),Sa=Gn(null),Ca=null,fi=null,Vl=null;function ql(){Vl=fi=Ca=null}function Yl(s){var a=Sa.current;Be(Sa),s._currentValue=a}function Ql(s,a,d){for(;s!==null;){var f=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),s===d)break;s=s.return}}function pi(s,a){Ca=s,Vl=fi=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&a)!==0&&(Pt=!0),s.firstContext=null)}function Yt(s){var a=s._currentValue;if(Vl!==s)if(s={context:s,memoizedValue:a,next:null},fi===null){if(Ca===null)throw Error(n(308));fi=s,Ca.dependencies={lanes:0,firstContext:s}}else fi=fi.next=s;return a}var Ns=null;function Kl(s){Ns===null?Ns=[s]:Ns.push(s)}function bh(s,a,d,f){var m=a.interleaved;return m===null?(d.next=d,Kl(a)):(d.next=m.next,m.next=d),a.interleaved=d,En(s,f)}function En(s,a){s.lanes|=a;var d=s.alternate;for(d!==null&&(d.lanes|=a),d=s,s=s.return;s!==null;)s.childLanes|=a,d=s.alternate,d!==null&&(d.childLanes|=a),d=s,s=s.return;return d.tag===3?d.stateNode:null}var es=!1;function Xl(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Rn(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function ts(s,a,d){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,(Pe&2)!==0){var m=f.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),f.pending=a,En(s,d)}return m=f.interleaved,m===null?(a.next=a,Kl(f)):(a.next=m.next,m.next=a),f.interleaved=a,En(s,d)}function Ea(s,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,dl(s,d)}}function wh(s,a){var d=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var m=null,x=null;if(d=d.firstBaseUpdate,d!==null){do{var _={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};x===null?m=x=_:x=x.next=_,d=d.next}while(d!==null);x===null?m=x=a:x=x.next=a}else m=x=a;d={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},s.updateQueue=d;return}s=d.lastBaseUpdate,s===null?d.firstBaseUpdate=a:s.next=a,d.lastBaseUpdate=a}function Ra(s,a,d,f){var m=s.updateQueue;es=!1;var x=m.firstBaseUpdate,_=m.lastBaseUpdate,P=m.shared.pending;if(P!==null){m.shared.pending=null;var T=P,V=T.next;T.next=null,_===null?x=V:_.next=V,_=T;var ee=s.alternate;ee!==null&&(ee=ee.updateQueue,P=ee.lastBaseUpdate,P!==_&&(P===null?ee.firstBaseUpdate=V:P.next=V,ee.lastBaseUpdate=T))}if(x!==null){var ne=m.baseState;_=0,ee=V=T=null,P=x;do{var J=P.lane,de=P.eventTime;if((f&J)===J){ee!==null&&(ee=ee.next={eventTime:de,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var he=s,pe=P;switch(J=a,de=d,pe.tag){case 1:if(he=pe.payload,typeof he=="function"){ne=he.call(de,ne,J);break e}ne=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=pe.payload,J=typeof he=="function"?he.call(de,ne,J):he,J==null)break e;ne=G({},ne,J);break e;case 2:es=!0}}P.callback!==null&&P.lane!==0&&(s.flags|=64,J=m.effects,J===null?m.effects=[P]:J.push(P))}else de={eventTime:de,lane:J,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ee===null?(V=ee=de,T=ne):ee=ee.next=de,_|=J;if(P=P.next,P===null){if(P=m.shared.pending,P===null)break;J=P,P=J.next,J.next=null,m.lastBaseUpdate=J,m.shared.pending=null}}while(!0);if(ee===null&&(T=ne),m.baseState=T,m.firstBaseUpdate=V,m.lastBaseUpdate=ee,a=m.shared.interleaved,a!==null){m=a;do _|=m.lane,m=m.next;while(m!==a)}else x===null&&(m.shared.lanes=0);Ss|=_,s.lanes=_,s.memoizedState=ne}}function Nh(s,a,d){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var f=s[a],m=f.callback;if(m!==null){if(f.callback=null,f=d,typeof m!="function")throw Error(n(191,m));m.call(f)}}}var tr={},mn=Gn(tr),nr=Gn(tr),sr=Gn(tr);function _s(s){if(s===tr)throw Error(n(174));return s}function Gl(s,a){switch(Ie(sr,a),Ie(nr,s),Ie(mn,tr),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ht(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=Ht(a,s)}Be(mn),Ie(mn,a)}function mi(){Be(mn),Be(nr),Be(sr)}function _h(s){_s(sr.current);var a=_s(mn.current),d=Ht(a,s.type);a!==d&&(Ie(nr,s),Ie(mn,d))}function Jl(s){nr.current===s&&(Be(mn),Be(nr))}var $e=Gn(0);function Pa(s){for(var a=s;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Zl=[];function ec(){for(var s=0;s<Zl.length;s++)Zl[s]._workInProgressVersionPrimary=null;Zl.length=0}var Aa=z.ReactCurrentDispatcher,tc=z.ReactCurrentBatchConfig,ks=0,He=null,nt=null,at=null,Ta=!1,ir=!1,rr=0,qv=0;function mt(){throw Error(n(321))}function nc(s,a){if(a===null)return!1;for(var d=0;d<a.length&&d<s.length;d++)if(!sn(s[d],a[d]))return!1;return!0}function sc(s,a,d,f,m,x){if(ks=x,He=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Aa.current=s===null||s.memoizedState===null?Xv:Gv,s=d(f,m),ir){x=0;do{if(ir=!1,rr=0,25<=x)throw Error(n(301));x+=1,at=nt=null,a.updateQueue=null,Aa.current=Jv,s=d(f,m)}while(ir)}if(Aa.current=Ma,a=nt!==null&&nt.next!==null,ks=0,at=nt=He=null,Ta=!1,a)throw Error(n(300));return s}function ic(){var s=rr!==0;return rr=0,s}function gn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?He.memoizedState=at=s:at=at.next=s,at}function Qt(){if(nt===null){var s=He.alternate;s=s!==null?s.memoizedState:null}else s=nt.next;var a=at===null?He.memoizedState:at.next;if(a!==null)at=a,nt=s;else{if(s===null)throw Error(n(310));nt=s,s={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},at===null?He.memoizedState=at=s:at=at.next=s}return at}function ar(s,a){return typeof a=="function"?a(s):a}function rc(s){var a=Qt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=nt,m=f.baseQueue,x=d.pending;if(x!==null){if(m!==null){var _=m.next;m.next=x.next,x.next=_}f.baseQueue=m=x,d.pending=null}if(m!==null){x=m.next,f=f.baseState;var P=_=null,T=null,V=x;do{var ee=V.lane;if((ks&ee)===ee)T!==null&&(T=T.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),f=V.hasEagerState?V.eagerState:s(f,V.action);else{var ne={lane:ee,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};T===null?(P=T=ne,_=f):T=T.next=ne,He.lanes|=ee,Ss|=ee}V=V.next}while(V!==null&&V!==x);T===null?_=f:T.next=P,sn(f,a.memoizedState)||(Pt=!0),a.memoizedState=f,a.baseState=_,a.baseQueue=T,d.lastRenderedState=f}if(s=d.interleaved,s!==null){m=s;do x=m.lane,He.lanes|=x,Ss|=x,m=m.next;while(m!==s)}else m===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function ac(s){var a=Qt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=d.dispatch,m=d.pending,x=a.memoizedState;if(m!==null){d.pending=null;var _=m=m.next;do x=s(x,_.action),_=_.next;while(_!==m);sn(x,a.memoizedState)||(Pt=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),d.lastRenderedState=x}return[x,f]}function kh(){}function Sh(s,a){var d=He,f=Qt(),m=a(),x=!sn(f.memoizedState,m);if(x&&(f.memoizedState=m,Pt=!0),f=f.queue,oc(Rh.bind(null,d,f,s),[s]),f.getSnapshot!==a||x||at!==null&&at.memoizedState.tag&1){if(d.flags|=2048,or(9,Eh.bind(null,d,f,m,a),void 0,null),ot===null)throw Error(n(349));(ks&30)!==0||Ch(d,a,m)}return m}function Ch(s,a,d){s.flags|=16384,s={getSnapshot:a,value:d},a=He.updateQueue,a===null?(a={lastEffect:null,stores:null},He.updateQueue=a,a.stores=[s]):(d=a.stores,d===null?a.stores=[s]:d.push(s))}function Eh(s,a,d,f){a.value=d,a.getSnapshot=f,Ph(a)&&Ah(s)}function Rh(s,a,d){return d(function(){Ph(a)&&Ah(s)})}function Ph(s){var a=s.getSnapshot;s=s.value;try{var d=a();return!sn(s,d)}catch{return!0}}function Ah(s){var a=En(s,1);a!==null&&cn(a,s,1,-1)}function Th(s){var a=gn();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:s},a.queue=s,s=s.dispatch=Kv.bind(null,He,s),[a.memoizedState,s]}function or(s,a,d,f){return s={tag:s,create:a,destroy:d,deps:f,next:null},a=He.updateQueue,a===null?(a={lastEffect:null,stores:null},He.updateQueue=a,a.lastEffect=s.next=s):(d=a.lastEffect,d===null?a.lastEffect=s.next=s:(f=d.next,d.next=s,s.next=f,a.lastEffect=s)),s}function Dh(){return Qt().memoizedState}function Da(s,a,d,f){var m=gn();He.flags|=s,m.memoizedState=or(1|a,d,void 0,f===void 0?null:f)}function La(s,a,d,f){var m=Qt();f=f===void 0?null:f;var x=void 0;if(nt!==null){var _=nt.memoizedState;if(x=_.destroy,f!==null&&nc(f,_.deps)){m.memoizedState=or(a,d,x,f);return}}He.flags|=s,m.memoizedState=or(1|a,d,x,f)}function Lh(s,a){return Da(8390656,8,s,a)}function oc(s,a){return La(2048,8,s,a)}function Mh(s,a){return La(4,2,s,a)}function Oh(s,a){return La(4,4,s,a)}function zh(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function Ih(s,a,d){return d=d!=null?d.concat([s]):null,La(4,4,zh.bind(null,a,s),d)}function lc(){}function Fh(s,a){var d=Qt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&nc(a,f[1])?f[0]:(d.memoizedState=[s,a],s)}function Bh(s,a){var d=Qt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&nc(a,f[1])?f[0]:(s=s(),d.memoizedState=[s,a],s)}function Uh(s,a,d){return(ks&21)===0?(s.baseState&&(s.baseState=!1,Pt=!0),s.memoizedState=d):(sn(d,a)||(d=xu(),He.lanes|=d,Ss|=d,s.baseState=!0),a)}function Yv(s,a){var d=Me;Me=d!==0&&4>d?d:4,s(!0);var f=tc.transition;tc.transition={};try{s(!1),a()}finally{Me=d,tc.transition=f}}function Wh(){return Qt().memoizedState}function Qv(s,a,d){var f=rs(s);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},$h(s))Hh(a,d);else if(d=bh(s,a,d,f),d!==null){var m=St();cn(d,s,f,m),Vh(d,a,f)}}function Kv(s,a,d){var f=rs(s),m={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if($h(s))Hh(a,m);else{var x=s.alternate;if(s.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var _=a.lastRenderedState,P=x(_,d);if(m.hasEagerState=!0,m.eagerState=P,sn(P,_)){var T=a.interleaved;T===null?(m.next=m,Kl(a)):(m.next=T.next,T.next=m),a.interleaved=m;return}}catch{}finally{}d=bh(s,a,m,f),d!==null&&(m=St(),cn(d,s,f,m),Vh(d,a,f))}}function $h(s){var a=s.alternate;return s===He||a!==null&&a===He}function Hh(s,a){ir=Ta=!0;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}function Vh(s,a,d){if((d&4194240)!==0){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,dl(s,d)}}var Ma={readContext:Yt,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},Xv={readContext:Yt,useCallback:function(s,a){return gn().memoizedState=[s,a===void 0?null:a],s},useContext:Yt,useEffect:Lh,useImperativeHandle:function(s,a,d){return d=d!=null?d.concat([s]):null,Da(4194308,4,zh.bind(null,a,s),d)},useLayoutEffect:function(s,a){return Da(4194308,4,s,a)},useInsertionEffect:function(s,a){return Da(4,2,s,a)},useMemo:function(s,a){var d=gn();return a=a===void 0?null:a,s=s(),d.memoizedState=[s,a],s},useReducer:function(s,a,d){var f=gn();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},f.queue=s,s=s.dispatch=Qv.bind(null,He,s),[f.memoizedState,s]},useRef:function(s){var a=gn();return s={current:s},a.memoizedState=s},useState:Th,useDebugValue:lc,useDeferredValue:function(s){return gn().memoizedState=s},useTransition:function(){var s=Th(!1),a=s[0];return s=Yv.bind(null,s[1]),gn().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,d){var f=He,m=gn();if(We){if(d===void 0)throw Error(n(407));d=d()}else{if(d=a(),ot===null)throw Error(n(349));(ks&30)!==0||Ch(f,a,d)}m.memoizedState=d;var x={value:d,getSnapshot:a};return m.queue=x,Lh(Rh.bind(null,f,x,s),[s]),f.flags|=2048,or(9,Eh.bind(null,f,x,d,a),void 0,null),d},useId:function(){var s=gn(),a=ot.identifierPrefix;if(We){var d=Cn,f=Sn;d=(f&~(1<<32-nn(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=rr++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=qv++,a=":"+a+"r"+d.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},Gv={readContext:Yt,useCallback:Fh,useContext:Yt,useEffect:oc,useImperativeHandle:Ih,useInsertionEffect:Mh,useLayoutEffect:Oh,useMemo:Bh,useReducer:rc,useRef:Dh,useState:function(){return rc(ar)},useDebugValue:lc,useDeferredValue:function(s){var a=Qt();return Uh(a,nt.memoizedState,s)},useTransition:function(){var s=rc(ar)[0],a=Qt().memoizedState;return[s,a]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Wh,unstable_isNewReconciler:!1},Jv={readContext:Yt,useCallback:Fh,useContext:Yt,useEffect:oc,useImperativeHandle:Ih,useInsertionEffect:Mh,useLayoutEffect:Oh,useMemo:Bh,useReducer:ac,useRef:Dh,useState:function(){return ac(ar)},useDebugValue:lc,useDeferredValue:function(s){var a=Qt();return nt===null?a.memoizedState=s:Uh(a,nt.memoizedState,s)},useTransition:function(){var s=ac(ar)[0],a=Qt().memoizedState;return[s,a]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Wh,unstable_isNewReconciler:!1};function an(s,a){if(s&&s.defaultProps){a=G({},a),s=s.defaultProps;for(var d in s)a[d]===void 0&&(a[d]=s[d]);return a}return a}function cc(s,a,d,f){a=s.memoizedState,d=d(f,a),d=d==null?a:G({},a,d),s.memoizedState=d,s.lanes===0&&(s.updateQueue.baseState=d)}var Oa={isMounted:function(s){return(s=s._reactInternals)?vs(s)===s:!1},enqueueSetState:function(s,a,d){s=s._reactInternals;var f=St(),m=rs(s),x=Rn(f,m);x.payload=a,d!=null&&(x.callback=d),a=ts(s,x,m),a!==null&&(cn(a,s,m,f),Ea(a,s,m))},enqueueReplaceState:function(s,a,d){s=s._reactInternals;var f=St(),m=rs(s),x=Rn(f,m);x.tag=1,x.payload=a,d!=null&&(x.callback=d),a=ts(s,x,m),a!==null&&(cn(a,s,m,f),Ea(a,s,m))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var d=St(),f=rs(s),m=Rn(d,f);m.tag=2,a!=null&&(m.callback=a),a=ts(s,m,f),a!==null&&(cn(a,s,f,d),Ea(a,s,f))}};function qh(s,a,d,f,m,x,_){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,x,_):a.prototype&&a.prototype.isPureReactComponent?!Yi(d,f)||!Yi(m,x):!0}function Yh(s,a,d){var f=!1,m=Jn,x=a.contextType;return typeof x=="object"&&x!==null?x=Yt(x):(m=Rt(a)?bs:pt.current,f=a.contextTypes,x=(f=f!=null)?li(s,m):Jn),a=new a(d,x),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Oa,s.stateNode=a,a._reactInternals=s,f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=x),a}function Qh(s,a,d,f){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==s&&Oa.enqueueReplaceState(a,a.state,null)}function dc(s,a,d,f){var m=s.stateNode;m.props=d,m.state=s.memoizedState,m.refs={},Xl(s);var x=a.contextType;typeof x=="object"&&x!==null?m.context=Yt(x):(x=Rt(a)?bs:pt.current,m.context=li(s,x)),m.state=s.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(cc(s,a,x,d),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&Oa.enqueueReplaceState(m,m.state,null),Ra(s,d,m,f),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function gi(s,a){try{var d="",f=a;do d+=je(f),f=f.return;while(f);var m=d}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:s,source:a,stack:m,digest:null}}function uc(s,a,d){return{value:s,source:null,stack:d??null,digest:a??null}}function hc(s,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Kh(s,a,d){d=Rn(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){$a||($a=!0,Cc=f),hc(s,a)},d}function Xh(s,a,d){d=Rn(-1,d),d.tag=3;var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=a.value;d.payload=function(){return f(m)},d.callback=function(){hc(s,a)}}var x=s.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(d.callback=function(){hc(s,a),typeof f!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var _=a.stack;this.componentDidCatch(a.value,{componentStack:_!==null?_:""})}),d}function Gh(s,a,d){var f=s.pingCache;if(f===null){f=s.pingCache=new Zv;var m=new Set;f.set(a,m)}else m=f.get(a),m===void 0&&(m=new Set,f.set(a,m));m.has(d)||(m.add(d),s=fy.bind(null,s,a,d),a.then(s,s))}function Jh(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function Zh(s,a,d,f,m){return(s.mode&1)===0?(s===a?s.flags|=65536:(s.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=Rn(-1,1),a.tag=2,ts(d,a,1))),d.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var ey=z.ReactCurrentOwner,Pt=!1;function kt(s,a,d,f){a.child=s===null?yh(a,null,d,f):hi(a,s.child,d,f)}function ef(s,a,d,f,m){d=d.render;var x=a.ref;return pi(a,m),f=sc(s,a,d,f,x,m),d=ic(),s!==null&&!Pt?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Pn(s,a,m)):(We&&d&&Bl(a),a.flags|=1,kt(s,a,f,m),a.child)}function tf(s,a,d,f,m){if(s===null){var x=d.type;return typeof x=="function"&&!Lc(x)&&x.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=x,nf(s,a,x,f,m)):(s=Ka(d.type,null,f,a,a.mode,m),s.ref=a.ref,s.return=a,a.child=s)}if(x=s.child,(s.lanes&m)===0){var _=x.memoizedProps;if(d=d.compare,d=d!==null?d:Yi,d(_,f)&&s.ref===a.ref)return Pn(s,a,m)}return a.flags|=1,s=os(x,f),s.ref=a.ref,s.return=a,a.child=s}function nf(s,a,d,f,m){if(s!==null){var x=s.memoizedProps;if(Yi(x,f)&&s.ref===a.ref)if(Pt=!1,a.pendingProps=f=x,(s.lanes&m)!==0)(s.flags&131072)!==0&&(Pt=!0);else return a.lanes=s.lanes,Pn(s,a,m)}return fc(s,a,d,f,m)}function sf(s,a,d){var f=a.pendingProps,m=f.children,x=s!==null?s.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(vi,Wt),Wt|=d;else{if((d&1073741824)===0)return s=x!==null?x.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,Ie(vi,Wt),Wt|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:d,Ie(vi,Wt),Wt|=f}else x!==null?(f=x.baseLanes|d,a.memoizedState=null):f=d,Ie(vi,Wt),Wt|=f;return kt(s,a,m,d),a.child}function rf(s,a){var d=a.ref;(s===null&&d!==null||s!==null&&s.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function fc(s,a,d,f,m){var x=Rt(d)?bs:pt.current;return x=li(a,x),pi(a,m),d=sc(s,a,d,f,x,m),f=ic(),s!==null&&!Pt?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Pn(s,a,m)):(We&&f&&Bl(a),a.flags|=1,kt(s,a,d,m),a.child)}function af(s,a,d,f,m){if(Rt(d)){var x=!0;ba(a)}else x=!1;if(pi(a,m),a.stateNode===null)Ia(s,a),Yh(a,d,f),dc(a,d,f,m),f=!0;else if(s===null){var _=a.stateNode,P=a.memoizedProps;_.props=P;var T=_.context,V=d.contextType;typeof V=="object"&&V!==null?V=Yt(V):(V=Rt(d)?bs:pt.current,V=li(a,V));var ee=d.getDerivedStateFromProps,ne=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function";ne||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==f||T!==V)&&Qh(a,_,f,V),es=!1;var J=a.memoizedState;_.state=J,Ra(a,f,_,m),T=a.memoizedState,P!==f||J!==T||Et.current||es?(typeof ee=="function"&&(cc(a,d,ee,f),T=a.memoizedState),(P=es||qh(a,d,P,f,J,T,V))?(ne||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=T),_.props=f,_.state=T,_.context=V,f=P):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{_=a.stateNode,jh(s,a),P=a.memoizedProps,V=a.type===a.elementType?P:an(a.type,P),_.props=V,ne=a.pendingProps,J=_.context,T=d.contextType,typeof T=="object"&&T!==null?T=Yt(T):(T=Rt(d)?bs:pt.current,T=li(a,T));var de=d.getDerivedStateFromProps;(ee=typeof de=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==ne||J!==T)&&Qh(a,_,f,T),es=!1,J=a.memoizedState,_.state=J,Ra(a,f,_,m);var he=a.memoizedState;P!==ne||J!==he||Et.current||es?(typeof de=="function"&&(cc(a,d,de,f),he=a.memoizedState),(V=es||qh(a,d,V,f,J,he,T)||!1)?(ee||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(f,he,T),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(f,he,T)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=he),_.props=f,_.state=he,_.context=T,f=V):(typeof _.componentDidUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&J===s.memoizedState||(a.flags|=1024),f=!1)}return pc(s,a,d,f,x,m)}function pc(s,a,d,f,m,x){rf(s,a);var _=(a.flags&128)!==0;if(!f&&!_)return m&&dh(a,d,!1),Pn(s,a,x);f=a.stateNode,ey.current=a;var P=_&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,s!==null&&_?(a.child=hi(a,s.child,null,x),a.child=hi(a,null,P,x)):kt(s,a,P,x),a.memoizedState=f.state,m&&dh(a,d,!0),a.child}function of(s){var a=s.stateNode;a.pendingContext?lh(s,a.pendingContext,a.pendingContext!==a.context):a.context&&lh(s,a.context,!1),Gl(s,a.containerInfo)}function lf(s,a,d,f,m){return ui(),Hl(m),a.flags|=256,kt(s,a,d,f),a.child}var mc={dehydrated:null,treeContext:null,retryLane:0};function gc(s){return{baseLanes:s,cachePool:null,transitions:null}}function cf(s,a,d){var f=a.pendingProps,m=$e.current,x=!1,_=(a.flags&128)!==0,P;if((P=_)||(P=s!==null&&s.memoizedState===null?!1:(m&2)!==0),P?(x=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),Ie($e,m&1),s===null)return $l(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((a.mode&1)===0?a.lanes=1:s.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(_=f.children,s=f.fallback,x?(f=a.mode,x=a.child,_={mode:"hidden",children:_},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=_):x=Xa(_,f,0,null),s=Ps(s,f,d,null),x.return=a,s.return=a,x.sibling=s,a.child=x,a.child.memoizedState=gc(d),a.memoizedState=mc,s):xc(a,_));if(m=s.memoizedState,m!==null&&(P=m.dehydrated,P!==null))return ty(s,a,_,f,P,m,d);if(x){x=f.fallback,_=a.mode,m=s.child,P=m.sibling;var T={mode:"hidden",children:f.children};return(_&1)===0&&a.child!==m?(f=a.child,f.childLanes=0,f.pendingProps=T,a.deletions=null):(f=os(m,T),f.subtreeFlags=m.subtreeFlags&14680064),P!==null?x=os(P,x):(x=Ps(x,_,d,null),x.flags|=2),x.return=a,f.return=a,f.sibling=x,a.child=f,f=x,x=a.child,_=s.child.memoizedState,_=_===null?gc(d):{baseLanes:_.baseLanes|d,cachePool:null,transitions:_.transitions},x.memoizedState=_,x.childLanes=s.childLanes&~d,a.memoizedState=mc,f}return x=s.child,s=x.sibling,f=os(x,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,s!==null&&(d=a.deletions,d===null?(a.deletions=[s],a.flags|=16):d.push(s)),a.child=f,a.memoizedState=null,f}function xc(s,a){return a=Xa({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function za(s,a,d,f){return f!==null&&Hl(f),hi(a,s.child,null,d),s=xc(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function ty(s,a,d,f,m,x,_){if(d)return a.flags&256?(a.flags&=-257,f=uc(Error(n(422))),za(s,a,_,f)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(x=f.fallback,m=a.mode,f=Xa({mode:"visible",children:f.children},m,0,null),x=Ps(x,m,_,null),x.flags|=2,f.return=a,x.return=a,f.sibling=x,a.child=f,(a.mode&1)!==0&&hi(a,s.child,null,_),a.child.memoizedState=gc(_),a.memoizedState=mc,x);if((a.mode&1)===0)return za(s,a,_,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var P=f.dgst;return f=P,x=Error(n(419)),f=uc(x,f,void 0),za(s,a,_,f)}if(P=(_&s.childLanes)!==0,Pt||P){if(f=ot,f!==null){switch(_&-_){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|_))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,En(s,m),cn(f,s,m,-1))}return Dc(),f=uc(Error(n(421))),za(s,a,_,f)}return m.data==="$?"?(a.flags|=128,a.child=s.child,a=py.bind(null,s),m._reactRetry=a,null):(s=x.treeContext,Ut=Xn(m.nextSibling),Bt=a,We=!0,rn=null,s!==null&&(Vt[qt++]=Sn,Vt[qt++]=Cn,Vt[qt++]=js,Sn=s.id,Cn=s.overflow,js=a),a=xc(a,f.children),a.flags|=4096,a)}function df(s,a,d){s.lanes|=a;var f=s.alternate;f!==null&&(f.lanes|=a),Ql(s.return,a,d)}function vc(s,a,d,f,m){var x=s.memoizedState;x===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:m}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=d,x.tailMode=m)}function uf(s,a,d){var f=a.pendingProps,m=f.revealOrder,x=f.tail;if(kt(s,a,f.children,d),f=$e.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&df(s,d,a);else if(s.tag===19)df(s,d,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}if(Ie($e,f),(a.mode&1)===0)a.memoizedState=null;else switch(m){case"forwards":for(d=a.child,m=null;d!==null;)s=d.alternate,s!==null&&Pa(s)===null&&(m=d),d=d.sibling;d=m,d===null?(m=a.child,a.child=null):(m=d.sibling,d.sibling=null),vc(a,!1,m,d,x);break;case"backwards":for(d=null,m=a.child,a.child=null;m!==null;){if(s=m.alternate,s!==null&&Pa(s)===null){a.child=m;break}s=m.sibling,m.sibling=d,d=m,m=s}vc(a,!0,d,null,x);break;case"together":vc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ia(s,a){(a.mode&1)===0&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function Pn(s,a,d){if(s!==null&&(a.dependencies=s.dependencies),Ss|=a.lanes,(d&a.childLanes)===0)return null;if(s!==null&&a.child!==s.child)throw Error(n(153));if(a.child!==null){for(s=a.child,d=os(s,s.pendingProps),a.child=d,d.return=a;s.sibling!==null;)s=s.sibling,d=d.sibling=os(s,s.pendingProps),d.return=a;d.sibling=null}return a.child}function ny(s,a,d){switch(a.tag){case 3:of(a),ui();break;case 5:_h(a);break;case 1:Rt(a.type)&&ba(a);break;case 4:Gl(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,m=a.memoizedProps.value;Ie(Sa,f._currentValue),f._currentValue=m;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(Ie($e,$e.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?cf(s,a,d):(Ie($e,$e.current&1),s=Pn(s,a,d),s!==null?s.sibling:null);Ie($e,$e.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(s.flags&128)!==0){if(f)return uf(s,a,d);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ie($e,$e.current),f)break;return null;case 22:case 23:return a.lanes=0,sf(s,a,d)}return Pn(s,a,d)}var hf,yc,ff,pf;hf=function(s,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},yc=function(){},ff=function(s,a,d,f){var m=s.memoizedProps;if(m!==f){s=a.stateNode,_s(mn.current);var x=null;switch(d){case"input":m=$n(s,m),f=$n(s,f),x=[];break;case"select":m=G({},m,{value:void 0}),f=G({},f,{value:void 0}),x=[];break;case"textarea":m=Se(s,m),f=Se(s,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(s.onclick=xa)}Zo(d,f);var _;d=null;for(V in m)if(!f.hasOwnProperty(V)&&m.hasOwnProperty(V)&&m[V]!=null)if(V==="style"){var P=m[V];for(_ in P)P.hasOwnProperty(_)&&(d||(d={}),d[_]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(o.hasOwnProperty(V)?x||(x=[]):(x=x||[]).push(V,null));for(V in f){var T=f[V];if(P=m!=null?m[V]:void 0,f.hasOwnProperty(V)&&T!==P&&(T!=null||P!=null))if(V==="style")if(P){for(_ in P)!P.hasOwnProperty(_)||T&&T.hasOwnProperty(_)||(d||(d={}),d[_]="");for(_ in T)T.hasOwnProperty(_)&&P[_]!==T[_]&&(d||(d={}),d[_]=T[_])}else d||(x||(x=[]),x.push(V,d)),d=T;else V==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(x=x||[]).push(V,T)):V==="children"?typeof T!="string"&&typeof T!="number"||(x=x||[]).push(V,""+T):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(o.hasOwnProperty(V)?(T!=null&&V==="onScroll"&&Fe("scroll",s),x||P===T||(x=[])):(x=x||[]).push(V,T))}d&&(x=x||[]).push("style",d);var V=x;(a.updateQueue=V)&&(a.flags|=4)}},pf=function(s,a,d,f){d!==f&&(a.flags|=4)};function lr(s,a){if(!We)switch(s.tailMode){case"hidden":a=s.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s.tail=null:d.sibling=null;break;case"collapsed":d=s.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function gt(s){var a=s.alternate!==null&&s.alternate.child===s.child,d=0,f=0;if(a)for(var m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=f,s.childLanes=d,a}function sy(s,a,d){var f=a.pendingProps;switch(Ul(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(a),null;case 1:return Rt(a.type)&&ya(),gt(a),null;case 3:return f=a.stateNode,mi(),Be(Et),Be(pt),ec(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(s===null||s.child===null)&&(_a(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,rn!==null&&(Pc(rn),rn=null))),yc(s,a),gt(a),null;case 5:Jl(a);var m=_s(sr.current);if(d=a.type,s!==null&&a.stateNode!=null)ff(s,a,d,f,m),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(n(166));return gt(a),null}if(s=_s(mn.current),_a(a)){f=a.stateNode,d=a.type;var x=a.memoizedProps;switch(f[pn]=a,f[Ji]=x,s=(a.mode&1)!==0,d){case"dialog":Fe("cancel",f),Fe("close",f);break;case"iframe":case"object":case"embed":Fe("load",f);break;case"video":case"audio":for(m=0;m<Ki.length;m++)Fe(Ki[m],f);break;case"source":Fe("error",f);break;case"img":case"image":case"link":Fe("error",f),Fe("load",f);break;case"details":Fe("toggle",f);break;case"input":Ks(f,x),Fe("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Fe("invalid",f);break;case"textarea":It(f,x),Fe("invalid",f)}Zo(d,x),m=null;for(var _ in x)if(x.hasOwnProperty(_)){var P=x[_];_==="children"?typeof P=="string"?f.textContent!==P&&(x.suppressHydrationWarning!==!0&&ga(f.textContent,P,s),m=["children",P]):typeof P=="number"&&f.textContent!==""+P&&(x.suppressHydrationWarning!==!0&&ga(f.textContent,P,s),m=["children",""+P]):o.hasOwnProperty(_)&&P!=null&&_==="onScroll"&&Fe("scroll",f)}switch(d){case"input":Un(f),ae(f,x,!0);break;case"textarea":Un(f),Le(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=xa)}f=m,a.updateQueue=f,f!==null&&(a.flags|=4)}else{_=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=ft(d)),s==="http://www.w3.org/1999/xhtml"?d==="script"?(s=_.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof f.is=="string"?s=_.createElement(d,{is:f.is}):(s=_.createElement(d),d==="select"&&(_=s,f.multiple?_.multiple=!0:f.size&&(_.size=f.size))):s=_.createElementNS(s,d),s[pn]=a,s[Ji]=f,hf(s,a,!1,!1),a.stateNode=s;e:{switch(_=el(d,f),d){case"dialog":Fe("cancel",s),Fe("close",s),m=f;break;case"iframe":case"object":case"embed":Fe("load",s),m=f;break;case"video":case"audio":for(m=0;m<Ki.length;m++)Fe(Ki[m],s);m=f;break;case"source":Fe("error",s),m=f;break;case"img":case"image":case"link":Fe("error",s),Fe("load",s),m=f;break;case"details":Fe("toggle",s),m=f;break;case"input":Ks(s,f),m=$n(s,f),Fe("invalid",s);break;case"option":m=f;break;case"select":s._wrapperState={wasMultiple:!!f.multiple},m=G({},f,{value:void 0}),Fe("invalid",s);break;case"textarea":It(s,f),m=Se(s,f),Fe("invalid",s);break;default:m=f}Zo(d,m),P=m;for(x in P)if(P.hasOwnProperty(x)){var T=P[x];x==="style"?nu(s,T):x==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&_t(s,T)):x==="children"?typeof T=="string"?(d!=="textarea"||T!=="")&&rt(s,T):typeof T=="number"&&rt(s,""+T):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?T!=null&&x==="onScroll"&&Fe("scroll",s):T!=null&&A(s,x,T,_))}switch(d){case"input":Un(s),ae(s,f,!1);break;case"textarea":Un(s),Le(s);break;case"option":f.value!=null&&s.setAttribute("value",""+Re(f.value));break;case"select":s.multiple=!!f.multiple,x=f.value,x!=null?ce(s,!!f.multiple,x,!1):f.defaultValue!=null&&ce(s,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=xa)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return gt(a),null;case 6:if(s&&a.stateNode!=null)pf(s,a,s.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(n(166));if(d=_s(sr.current),_s(mn.current),_a(a)){if(f=a.stateNode,d=a.memoizedProps,f[pn]=a,(x=f.nodeValue!==d)&&(s=Bt,s!==null))switch(s.tag){case 3:ga(f.nodeValue,d,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&ga(f.nodeValue,d,(s.mode&1)!==0)}x&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[pn]=a,a.stateNode=f}return gt(a),null;case 13:if(Be($e),f=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(We&&Ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)gh(),ui(),a.flags|=98560,x=!1;else if(x=_a(a),f!==null&&f.dehydrated!==null){if(s===null){if(!x)throw Error(n(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[pn]=a}else ui(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;gt(a),x=!1}else rn!==null&&(Pc(rn),rn=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(s!==null&&s.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(s===null||($e.current&1)!==0?st===0&&(st=3):Dc())),a.updateQueue!==null&&(a.flags|=4),gt(a),null);case 4:return mi(),yc(s,a),s===null&&Xi(a.stateNode.containerInfo),gt(a),null;case 10:return Yl(a.type._context),gt(a),null;case 17:return Rt(a.type)&&ya(),gt(a),null;case 19:if(Be($e),x=a.memoizedState,x===null)return gt(a),null;if(f=(a.flags&128)!==0,_=x.rendering,_===null)if(f)lr(x,!1);else{if(st!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(_=Pa(s),_!==null){for(a.flags|=128,lr(x,!1),f=_.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)x=d,s=f,x.flags&=14680066,_=x.alternate,_===null?(x.childLanes=0,x.lanes=s,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=_.childLanes,x.lanes=_.lanes,x.child=_.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=_.memoizedProps,x.memoizedState=_.memoizedState,x.updateQueue=_.updateQueue,x.type=_.type,s=_.dependencies,x.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),d=d.sibling;return Ie($e,$e.current&1|2),a.child}s=s.sibling}x.tail!==null&&Qe()>yi&&(a.flags|=128,f=!0,lr(x,!1),a.lanes=4194304)}else{if(!f)if(s=Pa(_),s!==null){if(a.flags|=128,f=!0,d=s.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),lr(x,!0),x.tail===null&&x.tailMode==="hidden"&&!_.alternate&&!We)return gt(a),null}else 2*Qe()-x.renderingStartTime>yi&&d!==1073741824&&(a.flags|=128,f=!0,lr(x,!1),a.lanes=4194304);x.isBackwards?(_.sibling=a.child,a.child=_):(d=x.last,d!==null?d.sibling=_:a.child=_,x.last=_)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=Qe(),a.sibling=null,d=$e.current,Ie($e,f?d&1|2:d&1),a):(gt(a),null);case 22:case 23:return Tc(),f=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Wt&1073741824)!==0&&(gt(a),a.subtreeFlags&6&&(a.flags|=8192)):gt(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function iy(s,a){switch(Ul(a),a.tag){case 1:return Rt(a.type)&&ya(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return mi(),Be(Et),Be(pt),ec(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 5:return Jl(a),null;case 13:if(Be($e),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(n(340));ui()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return Be($e),null;case 4:return mi(),null;case 10:return Yl(a.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var Fa=!1,xt=!1,ry=typeof WeakSet=="function"?WeakSet:Set,ue=null;function xi(s,a){var d=s.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){qe(s,a,f)}else d.current=null}function bc(s,a,d){try{d()}catch(f){qe(s,a,f)}}var mf=!1;function ay(s,a){if(Tl=ra,s=qu(),_l(s)){if("selectionStart"in s)var d={start:s.selectionStart,end:s.selectionEnd};else e:{d=(d=s.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{d.nodeType,x.nodeType}catch{d=null;break e}var _=0,P=-1,T=-1,V=0,ee=0,ne=s,J=null;t:for(;;){for(var de;ne!==d||m!==0&&ne.nodeType!==3||(P=_+m),ne!==x||f!==0&&ne.nodeType!==3||(T=_+f),ne.nodeType===3&&(_+=ne.nodeValue.length),(de=ne.firstChild)!==null;)J=ne,ne=de;for(;;){if(ne===s)break t;if(J===d&&++V===m&&(P=_),J===x&&++ee===f&&(T=_),(de=ne.nextSibling)!==null)break;ne=J,J=ne.parentNode}ne=de}d=P===-1||T===-1?null:{start:P,end:T}}else d=null}d=d||{start:0,end:0}}else d=null;for(Dl={focusedElem:s,selectionRange:d},ra=!1,ue=a;ue!==null;)if(a=ue,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,ue=s;else for(;ue!==null;){a=ue;try{var he=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var pe=he.memoizedProps,Ke=he.memoizedState,B=a.stateNode,M=B.getSnapshotBeforeUpdate(a.elementType===a.type?pe:an(a.type,pe),Ke);B.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var W=a.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(se){qe(a,a.return,se)}if(s=a.sibling,s!==null){s.return=a.return,ue=s;break}ue=a.return}return he=mf,mf=!1,he}function cr(s,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&s)===s){var x=m.destroy;m.destroy=void 0,x!==void 0&&bc(a,d,x)}m=m.next}while(m!==f)}}function Ba(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&s)===s){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function jc(s){var a=s.ref;if(a!==null){var d=s.stateNode;switch(s.tag){case 5:s=d;break;default:s=d}typeof a=="function"?a(s):a.current=s}}function gf(s){var a=s.alternate;a!==null&&(s.alternate=null,gf(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[pn],delete a[Ji],delete a[zl],delete a[Wv],delete a[$v])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function xf(s){return s.tag===5||s.tag===3||s.tag===4}function vf(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||xf(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function wc(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(s,a):d.insertBefore(s,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(s,d)):(a=d,a.appendChild(s)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=xa));else if(f!==4&&(s=s.child,s!==null))for(wc(s,a,d),s=s.sibling;s!==null;)wc(s,a,d),s=s.sibling}function Nc(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.insertBefore(s,a):d.appendChild(s);else if(f!==4&&(s=s.child,s!==null))for(Nc(s,a,d),s=s.sibling;s!==null;)Nc(s,a,d),s=s.sibling}var ut=null,on=!1;function ns(s,a,d){for(d=d.child;d!==null;)yf(s,a,d),d=d.sibling}function yf(s,a,d){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Zr,d)}catch{}switch(d.tag){case 5:xt||xi(d,a);case 6:var f=ut,m=on;ut=null,ns(s,a,d),ut=f,on=m,ut!==null&&(on?(s=ut,d=d.stateNode,s.nodeType===8?s.parentNode.removeChild(d):s.removeChild(d)):ut.removeChild(d.stateNode));break;case 18:ut!==null&&(on?(s=ut,d=d.stateNode,s.nodeType===8?Ol(s.parentNode,d):s.nodeType===1&&Ol(s,d),Ui(s)):Ol(ut,d.stateNode));break;case 4:f=ut,m=on,ut=d.stateNode.containerInfo,on=!0,ns(s,a,d),ut=f,on=m;break;case 0:case 11:case 14:case 15:if(!xt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,_=x.destroy;x=x.tag,_!==void 0&&((x&2)!==0||(x&4)!==0)&&bc(d,a,_),m=m.next}while(m!==f)}ns(s,a,d);break;case 1:if(!xt&&(xi(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(P){qe(d,a,P)}ns(s,a,d);break;case 21:ns(s,a,d);break;case 22:d.mode&1?(xt=(f=xt)||d.memoizedState!==null,ns(s,a,d),xt=f):ns(s,a,d);break;default:ns(s,a,d)}}function bf(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var d=s.stateNode;d===null&&(d=s.stateNode=new ry),a.forEach(function(f){var m=my.bind(null,s,f);d.has(f)||(d.add(f),f.then(m,m))})}}function ln(s,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var m=d[f];try{var x=s,_=a,P=_;e:for(;P!==null;){switch(P.tag){case 5:ut=P.stateNode,on=!1;break e;case 3:ut=P.stateNode.containerInfo,on=!0;break e;case 4:ut=P.stateNode.containerInfo,on=!0;break e}P=P.return}if(ut===null)throw Error(n(160));yf(x,_,m),ut=null,on=!1;var T=m.alternate;T!==null&&(T.return=null),m.return=null}catch(V){qe(m,a,V)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)jf(a,s),a=a.sibling}function jf(s,a){var d=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(ln(a,s),xn(s),f&4){try{cr(3,s,s.return),Ba(3,s)}catch(pe){qe(s,s.return,pe)}try{cr(5,s,s.return)}catch(pe){qe(s,s.return,pe)}}break;case 1:ln(a,s),xn(s),f&512&&d!==null&&xi(d,d.return);break;case 5:if(ln(a,s),xn(s),f&512&&d!==null&&xi(d,d.return),s.flags&32){var m=s.stateNode;try{rt(m,"")}catch(pe){qe(s,s.return,pe)}}if(f&4&&(m=s.stateNode,m!=null)){var x=s.memoizedProps,_=d!==null?d.memoizedProps:x,P=s.type,T=s.updateQueue;if(s.updateQueue=null,T!==null)try{P==="input"&&x.type==="radio"&&x.name!=null&&Xs(m,x),el(P,_);var V=el(P,x);for(_=0;_<T.length;_+=2){var ee=T[_],ne=T[_+1];ee==="style"?nu(m,ne):ee==="dangerouslySetInnerHTML"?_t(m,ne):ee==="children"?rt(m,ne):A(m,ee,ne,V)}switch(P){case"input":hn(m,x);break;case"textarea":Ct(m,x);break;case"select":var J=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var de=x.value;de!=null?ce(m,!!x.multiple,de,!1):J!==!!x.multiple&&(x.defaultValue!=null?ce(m,!!x.multiple,x.defaultValue,!0):ce(m,!!x.multiple,x.multiple?[]:"",!1))}m[Ji]=x}catch(pe){qe(s,s.return,pe)}}break;case 6:if(ln(a,s),xn(s),f&4){if(s.stateNode===null)throw Error(n(162));m=s.stateNode,x=s.memoizedProps;try{m.nodeValue=x}catch(pe){qe(s,s.return,pe)}}break;case 3:if(ln(a,s),xn(s),f&4&&d!==null&&d.memoizedState.isDehydrated)try{Ui(a.containerInfo)}catch(pe){qe(s,s.return,pe)}break;case 4:ln(a,s),xn(s);break;case 13:ln(a,s),xn(s),m=s.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Sc=Qe())),f&4&&bf(s);break;case 22:if(ee=d!==null&&d.memoizedState!==null,s.mode&1?(xt=(V=xt)||ee,ln(a,s),xt=V):ln(a,s),xn(s),f&8192){if(V=s.memoizedState!==null,(s.stateNode.isHidden=V)&&!ee&&(s.mode&1)!==0)for(ue=s,ee=s.child;ee!==null;){for(ne=ue=ee;ue!==null;){switch(J=ue,de=J.child,J.tag){case 0:case 11:case 14:case 15:cr(4,J,J.return);break;case 1:xi(J,J.return);var he=J.stateNode;if(typeof he.componentWillUnmount=="function"){f=J,d=J.return;try{a=f,he.props=a.memoizedProps,he.state=a.memoizedState,he.componentWillUnmount()}catch(pe){qe(f,d,pe)}}break;case 5:xi(J,J.return);break;case 22:if(J.memoizedState!==null){_f(ne);continue}}de!==null?(de.return=J,ue=de):_f(ne)}ee=ee.sibling}e:for(ee=null,ne=s;;){if(ne.tag===5){if(ee===null){ee=ne;try{m=ne.stateNode,V?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(P=ne.stateNode,T=ne.memoizedProps.style,_=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=tu("display",_))}catch(pe){qe(s,s.return,pe)}}}else if(ne.tag===6){if(ee===null)try{ne.stateNode.nodeValue=V?"":ne.memoizedProps}catch(pe){qe(s,s.return,pe)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===s)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===s)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===s)break e;ee===ne&&(ee=null),ne=ne.return}ee===ne&&(ee=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:ln(a,s),xn(s),f&4&&bf(s);break;case 21:break;default:ln(a,s),xn(s)}}function xn(s){var a=s.flags;if(a&2){try{e:{for(var d=s.return;d!==null;){if(xf(d)){var f=d;break e}d=d.return}throw Error(n(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(rt(m,""),f.flags&=-33);var x=vf(s);Nc(s,x,m);break;case 3:case 4:var _=f.stateNode.containerInfo,P=vf(s);wc(s,P,_);break;default:throw Error(n(161))}}catch(T){qe(s,s.return,T)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function oy(s,a,d){ue=s,wf(s)}function wf(s,a,d){for(var f=(s.mode&1)!==0;ue!==null;){var m=ue,x=m.child;if(m.tag===22&&f){var _=m.memoizedState!==null||Fa;if(!_){var P=m.alternate,T=P!==null&&P.memoizedState!==null||xt;P=Fa;var V=xt;if(Fa=_,(xt=T)&&!V)for(ue=m;ue!==null;)_=ue,T=_.child,_.tag===22&&_.memoizedState!==null?kf(m):T!==null?(T.return=_,ue=T):kf(m);for(;x!==null;)ue=x,wf(x),x=x.sibling;ue=m,Fa=P,xt=V}Nf(s)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ue=x):Nf(s)}}function Nf(s){for(;ue!==null;){var a=ue;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:xt||Ba(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!xt)if(d===null)f.componentDidMount();else{var m=a.elementType===a.type?d.memoizedProps:an(a.type,d.memoizedProps);f.componentDidUpdate(m,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&Nh(a,x,f);break;case 3:var _=a.updateQueue;if(_!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}Nh(a,_,d)}break;case 5:var P=a.stateNode;if(d===null&&a.flags&4){d=P;var T=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&d.focus();break;case"img":T.src&&(d.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var V=a.alternate;if(V!==null){var ee=V.memoizedState;if(ee!==null){var ne=ee.dehydrated;ne!==null&&Ui(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xt||a.flags&512&&jc(a)}catch(J){qe(a,a.return,J)}}if(a===s){ue=null;break}if(d=a.sibling,d!==null){d.return=a.return,ue=d;break}ue=a.return}}function _f(s){for(;ue!==null;){var a=ue;if(a===s){ue=null;break}var d=a.sibling;if(d!==null){d.return=a.return,ue=d;break}ue=a.return}}function kf(s){for(;ue!==null;){var a=ue;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Ba(4,a)}catch(T){qe(a,d,T)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var m=a.return;try{f.componentDidMount()}catch(T){qe(a,m,T)}}var x=a.return;try{jc(a)}catch(T){qe(a,x,T)}break;case 5:var _=a.return;try{jc(a)}catch(T){qe(a,_,T)}}}catch(T){qe(a,a.return,T)}if(a===s){ue=null;break}var P=a.sibling;if(P!==null){P.return=a.return,ue=P;break}ue=a.return}}var ly=Math.ceil,Ua=z.ReactCurrentDispatcher,_c=z.ReactCurrentOwner,Kt=z.ReactCurrentBatchConfig,Pe=0,ot=null,Ze=null,ht=0,Wt=0,vi=Gn(0),st=0,dr=null,Ss=0,Wa=0,kc=0,ur=null,At=null,Sc=0,yi=1/0,An=null,$a=!1,Cc=null,ss=null,Ha=!1,is=null,Va=0,hr=0,Ec=null,qa=-1,Ya=0;function St(){return(Pe&6)!==0?Qe():qa!==-1?qa:qa=Qe()}function rs(s){return(s.mode&1)===0?1:(Pe&2)!==0&&ht!==0?ht&-ht:Vv.transition!==null?(Ya===0&&(Ya=xu()),Ya):(s=Me,s!==0||(s=window.event,s=s===void 0?16:Su(s.type)),s)}function cn(s,a,d,f){if(50<hr)throw hr=0,Ec=null,Error(n(185));Oi(s,d,f),((Pe&2)===0||s!==ot)&&(s===ot&&((Pe&2)===0&&(Wa|=d),st===4&&as(s,ht)),Tt(s,f),d===1&&Pe===0&&(a.mode&1)===0&&(yi=Qe()+500,ja&&Zn()))}function Tt(s,a){var d=s.callbackNode;Vx(s,a);var f=na(s,s===ot?ht:0);if(f===0)d!==null&&pu(d),s.callbackNode=null,s.callbackPriority=0;else if(a=f&-f,s.callbackPriority!==a){if(d!=null&&pu(d),a===1)s.tag===0?Hv(Cf.bind(null,s)):uh(Cf.bind(null,s)),Bv(function(){(Pe&6)===0&&Zn()}),d=null;else{switch(vu(f)){case 1:d=ol;break;case 4:d=mu;break;case 16:d=Jr;break;case 536870912:d=gu;break;default:d=Jr}d=Mf(d,Sf.bind(null,s))}s.callbackPriority=a,s.callbackNode=d}}function Sf(s,a){if(qa=-1,Ya=0,(Pe&6)!==0)throw Error(n(327));var d=s.callbackNode;if(bi()&&s.callbackNode!==d)return null;var f=na(s,s===ot?ht:0);if(f===0)return null;if((f&30)!==0||(f&s.expiredLanes)!==0||a)a=Qa(s,f);else{a=f;var m=Pe;Pe|=2;var x=Rf();(ot!==s||ht!==a)&&(An=null,yi=Qe()+500,Es(s,a));do try{uy();break}catch(P){Ef(s,P)}while(!0);ql(),Ua.current=x,Pe=m,Ze!==null?a=0:(ot=null,ht=0,a=st)}if(a!==0){if(a===2&&(m=ll(s),m!==0&&(f=m,a=Rc(s,m))),a===1)throw d=dr,Es(s,0),as(s,f),Tt(s,Qe()),d;if(a===6)as(s,f);else{if(m=s.current.alternate,(f&30)===0&&!cy(m)&&(a=Qa(s,f),a===2&&(x=ll(s),x!==0&&(f=x,a=Rc(s,x))),a===1))throw d=dr,Es(s,0),as(s,f),Tt(s,Qe()),d;switch(s.finishedWork=m,s.finishedLanes=f,a){case 0:case 1:throw Error(n(345));case 2:Rs(s,At,An);break;case 3:if(as(s,f),(f&130023424)===f&&(a=Sc+500-Qe(),10<a)){if(na(s,0)!==0)break;if(m=s.suspendedLanes,(m&f)!==f){St(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Ml(Rs.bind(null,s,At,An),a);break}Rs(s,At,An);break;case 4:if(as(s,f),(f&4194240)===f)break;for(a=s.eventTimes,m=-1;0<f;){var _=31-nn(f);x=1<<_,_=a[_],_>m&&(m=_),f&=~x}if(f=m,f=Qe()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ly(f/1960))-f,10<f){s.timeoutHandle=Ml(Rs.bind(null,s,At,An),f);break}Rs(s,At,An);break;case 5:Rs(s,At,An);break;default:throw Error(n(329))}}}return Tt(s,Qe()),s.callbackNode===d?Sf.bind(null,s):null}function Rc(s,a){var d=ur;return s.current.memoizedState.isDehydrated&&(Es(s,a).flags|=256),s=Qa(s,a),s!==2&&(a=At,At=d,a!==null&&Pc(a)),s}function Pc(s){At===null?At=s:At.push.apply(At,s)}function cy(s){for(var a=s;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var m=d[f],x=m.getSnapshot;m=m.value;try{if(!sn(x(),m))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function as(s,a){for(a&=~kc,a&=~Wa,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var d=31-nn(a),f=1<<d;s[d]=-1,a&=~f}}function Cf(s){if((Pe&6)!==0)throw Error(n(327));bi();var a=na(s,0);if((a&1)===0)return Tt(s,Qe()),null;var d=Qa(s,a);if(s.tag!==0&&d===2){var f=ll(s);f!==0&&(a=f,d=Rc(s,f))}if(d===1)throw d=dr,Es(s,0),as(s,a),Tt(s,Qe()),d;if(d===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,Rs(s,At,An),Tt(s,Qe()),null}function Ac(s,a){var d=Pe;Pe|=1;try{return s(a)}finally{Pe=d,Pe===0&&(yi=Qe()+500,ja&&Zn())}}function Cs(s){is!==null&&is.tag===0&&(Pe&6)===0&&bi();var a=Pe;Pe|=1;var d=Kt.transition,f=Me;try{if(Kt.transition=null,Me=1,s)return s()}finally{Me=f,Kt.transition=d,Pe=a,(Pe&6)===0&&Zn()}}function Tc(){Wt=vi.current,Be(vi)}function Es(s,a){s.finishedWork=null,s.finishedLanes=0;var d=s.timeoutHandle;if(d!==-1&&(s.timeoutHandle=-1,Fv(d)),Ze!==null)for(d=Ze.return;d!==null;){var f=d;switch(Ul(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ya();break;case 3:mi(),Be(Et),Be(pt),ec();break;case 5:Jl(f);break;case 4:mi();break;case 13:Be($e);break;case 19:Be($e);break;case 10:Yl(f.type._context);break;case 22:case 23:Tc()}d=d.return}if(ot=s,Ze=s=os(s.current,null),ht=Wt=a,st=0,dr=null,kc=Wa=Ss=0,At=ur=null,Ns!==null){for(a=0;a<Ns.length;a++)if(d=Ns[a],f=d.interleaved,f!==null){d.interleaved=null;var m=f.next,x=d.pending;if(x!==null){var _=x.next;x.next=m,f.next=_}d.pending=f}Ns=null}return s}function Ef(s,a){do{var d=Ze;try{if(ql(),Aa.current=Ma,Ta){for(var f=He.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Ta=!1}if(ks=0,at=nt=He=null,ir=!1,rr=0,_c.current=null,d===null||d.return===null){st=1,dr=a,Ze=null;break}e:{var x=s,_=d.return,P=d,T=a;if(a=ht,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=T,ee=P,ne=ee.tag;if((ee.mode&1)===0&&(ne===0||ne===11||ne===15)){var J=ee.alternate;J?(ee.updateQueue=J.updateQueue,ee.memoizedState=J.memoizedState,ee.lanes=J.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var de=Jh(_);if(de!==null){de.flags&=-257,Zh(de,_,P,x,a),de.mode&1&&Gh(x,V,a),a=de,T=V;var he=a.updateQueue;if(he===null){var pe=new Set;pe.add(T),a.updateQueue=pe}else he.add(T);break e}else{if((a&1)===0){Gh(x,V,a),Dc();break e}T=Error(n(426))}}else if(We&&P.mode&1){var Ke=Jh(_);if(Ke!==null){(Ke.flags&65536)===0&&(Ke.flags|=256),Zh(Ke,_,P,x,a),Hl(gi(T,P));break e}}x=T=gi(T,P),st!==4&&(st=2),ur===null?ur=[x]:ur.push(x),x=_;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var B=Kh(x,T,a);wh(x,B);break e;case 1:P=T;var M=x.type,W=x.stateNode;if((x.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(ss===null||!ss.has(W)))){x.flags|=65536,a&=-a,x.lanes|=a;var se=Xh(x,P,a);wh(x,se);break e}}x=x.return}while(x!==null)}Af(d)}catch(xe){a=xe,Ze===d&&d!==null&&(Ze=d=d.return);continue}break}while(!0)}function Rf(){var s=Ua.current;return Ua.current=Ma,s===null?Ma:s}function Dc(){(st===0||st===3||st===2)&&(st=4),ot===null||(Ss&268435455)===0&&(Wa&268435455)===0||as(ot,ht)}function Qa(s,a){var d=Pe;Pe|=2;var f=Rf();(ot!==s||ht!==a)&&(An=null,Es(s,a));do try{dy();break}catch(m){Ef(s,m)}while(!0);if(ql(),Pe=d,Ua.current=f,Ze!==null)throw Error(n(261));return ot=null,ht=0,st}function dy(){for(;Ze!==null;)Pf(Ze)}function uy(){for(;Ze!==null&&!Ox();)Pf(Ze)}function Pf(s){var a=Lf(s.alternate,s,Wt);s.memoizedProps=s.pendingProps,a===null?Af(s):Ze=a,_c.current=null}function Af(s){var a=s;do{var d=a.alternate;if(s=a.return,(a.flags&32768)===0){if(d=sy(d,a,Wt),d!==null){Ze=d;return}}else{if(d=iy(d,a),d!==null){d.flags&=32767,Ze=d;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{st=6,Ze=null;return}}if(a=a.sibling,a!==null){Ze=a;return}Ze=a=s}while(a!==null);st===0&&(st=5)}function Rs(s,a,d){var f=Me,m=Kt.transition;try{Kt.transition=null,Me=1,hy(s,a,d,f)}finally{Kt.transition=m,Me=f}return null}function hy(s,a,d,f){do bi();while(is!==null);if((Pe&6)!==0)throw Error(n(327));d=s.finishedWork;var m=s.finishedLanes;if(d===null)return null;if(s.finishedWork=null,s.finishedLanes=0,d===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var x=d.lanes|d.childLanes;if(qx(s,x),s===ot&&(Ze=ot=null,ht=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||Ha||(Ha=!0,Mf(Jr,function(){return bi(),null})),x=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||x){x=Kt.transition,Kt.transition=null;var _=Me;Me=1;var P=Pe;Pe|=4,_c.current=null,ay(s,d),jf(d,s),Tv(Dl),ra=!!Tl,Dl=Tl=null,s.current=d,oy(d),zx(),Pe=P,Me=_,Kt.transition=x}else s.current=d;if(Ha&&(Ha=!1,is=s,Va=m),x=s.pendingLanes,x===0&&(ss=null),Bx(d.stateNode),Tt(s,Qe()),a!==null)for(f=s.onRecoverableError,d=0;d<a.length;d++)m=a[d],f(m.value,{componentStack:m.stack,digest:m.digest});if($a)throw $a=!1,s=Cc,Cc=null,s;return(Va&1)!==0&&s.tag!==0&&bi(),x=s.pendingLanes,(x&1)!==0?s===Ec?hr++:(hr=0,Ec=s):hr=0,Zn(),null}function bi(){if(is!==null){var s=vu(Va),a=Kt.transition,d=Me;try{if(Kt.transition=null,Me=16>s?16:s,is===null)var f=!1;else{if(s=is,is=null,Va=0,(Pe&6)!==0)throw Error(n(331));var m=Pe;for(Pe|=4,ue=s.current;ue!==null;){var x=ue,_=x.child;if((ue.flags&16)!==0){var P=x.deletions;if(P!==null){for(var T=0;T<P.length;T++){var V=P[T];for(ue=V;ue!==null;){var ee=ue;switch(ee.tag){case 0:case 11:case 15:cr(8,ee,x)}var ne=ee.child;if(ne!==null)ne.return=ee,ue=ne;else for(;ue!==null;){ee=ue;var J=ee.sibling,de=ee.return;if(gf(ee),ee===V){ue=null;break}if(J!==null){J.return=de,ue=J;break}ue=de}}}var he=x.alternate;if(he!==null){var pe=he.child;if(pe!==null){he.child=null;do{var Ke=pe.sibling;pe.sibling=null,pe=Ke}while(pe!==null)}}ue=x}}if((x.subtreeFlags&2064)!==0&&_!==null)_.return=x,ue=_;else e:for(;ue!==null;){if(x=ue,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:cr(9,x,x.return)}var B=x.sibling;if(B!==null){B.return=x.return,ue=B;break e}ue=x.return}}var M=s.current;for(ue=M;ue!==null;){_=ue;var W=_.child;if((_.subtreeFlags&2064)!==0&&W!==null)W.return=_,ue=W;else e:for(_=M;ue!==null;){if(P=ue,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Ba(9,P)}}catch(xe){qe(P,P.return,xe)}if(P===_){ue=null;break e}var se=P.sibling;if(se!==null){se.return=P.return,ue=se;break e}ue=P.return}}if(Pe=m,Zn(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Zr,s)}catch{}f=!0}return f}finally{Me=d,Kt.transition=a}}return!1}function Tf(s,a,d){a=gi(d,a),a=Kh(s,a,1),s=ts(s,a,1),a=St(),s!==null&&(Oi(s,1,a),Tt(s,a))}function qe(s,a,d){if(s.tag===3)Tf(s,s,d);else for(;a!==null;){if(a.tag===3){Tf(a,s,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(ss===null||!ss.has(f))){s=gi(d,s),s=Xh(a,s,1),a=ts(a,s,1),s=St(),a!==null&&(Oi(a,1,s),Tt(a,s));break}}a=a.return}}function fy(s,a,d){var f=s.pingCache;f!==null&&f.delete(a),a=St(),s.pingedLanes|=s.suspendedLanes&d,ot===s&&(ht&d)===d&&(st===4||st===3&&(ht&130023424)===ht&&500>Qe()-Sc?Es(s,0):kc|=d),Tt(s,a)}function Df(s,a){a===0&&((s.mode&1)===0?a=1:(a=ta,ta<<=1,(ta&130023424)===0&&(ta=4194304)));var d=St();s=En(s,a),s!==null&&(Oi(s,a,d),Tt(s,d))}function py(s){var a=s.memoizedState,d=0;a!==null&&(d=a.retryLane),Df(s,d)}function my(s,a){var d=0;switch(s.tag){case 13:var f=s.stateNode,m=s.memoizedState;m!==null&&(d=m.retryLane);break;case 19:f=s.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(a),Df(s,d)}var Lf;Lf=function(s,a,d){if(s!==null)if(s.memoizedProps!==a.pendingProps||Et.current)Pt=!0;else{if((s.lanes&d)===0&&(a.flags&128)===0)return Pt=!1,ny(s,a,d);Pt=(s.flags&131072)!==0}else Pt=!1,We&&(a.flags&1048576)!==0&&hh(a,Na,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;Ia(s,a),s=a.pendingProps;var m=li(a,pt.current);pi(a,d),m=sc(null,a,f,s,m,d);var x=ic();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Rt(f)?(x=!0,ba(a)):x=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Xl(a),m.updater=Oa,a.stateNode=m,m._reactInternals=a,dc(a,f,s,d),a=pc(null,a,f,!0,x,d)):(a.tag=0,We&&x&&Bl(a),kt(null,a,m,d),a=a.child),a;case 16:f=a.elementType;e:{switch(Ia(s,a),s=a.pendingProps,m=f._init,f=m(f._payload),a.type=f,m=a.tag=xy(f),s=an(f,s),m){case 0:a=fc(null,a,f,s,d);break e;case 1:a=af(null,a,f,s,d);break e;case 11:a=ef(null,a,f,s,d);break e;case 14:a=tf(null,a,f,an(f.type,s),d);break e}throw Error(n(306,f,""))}return a;case 0:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:an(f,m),fc(s,a,f,m,d);case 1:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:an(f,m),af(s,a,f,m,d);case 3:e:{if(of(a),s===null)throw Error(n(387));f=a.pendingProps,x=a.memoizedState,m=x.element,jh(s,a),Ra(a,f,null,d);var _=a.memoizedState;if(f=_.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){m=gi(Error(n(423)),a),a=lf(s,a,f,d,m);break e}else if(f!==m){m=gi(Error(n(424)),a),a=lf(s,a,f,d,m);break e}else for(Ut=Xn(a.stateNode.containerInfo.firstChild),Bt=a,We=!0,rn=null,d=yh(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ui(),f===m){a=Pn(s,a,d);break e}kt(s,a,f,d)}a=a.child}return a;case 5:return _h(a),s===null&&$l(a),f=a.type,m=a.pendingProps,x=s!==null?s.memoizedProps:null,_=m.children,Ll(f,m)?_=null:x!==null&&Ll(f,x)&&(a.flags|=32),rf(s,a),kt(s,a,_,d),a.child;case 6:return s===null&&$l(a),null;case 13:return cf(s,a,d);case 4:return Gl(a,a.stateNode.containerInfo),f=a.pendingProps,s===null?a.child=hi(a,null,f,d):kt(s,a,f,d),a.child;case 11:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:an(f,m),ef(s,a,f,m,d);case 7:return kt(s,a,a.pendingProps,d),a.child;case 8:return kt(s,a,a.pendingProps.children,d),a.child;case 12:return kt(s,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,m=a.pendingProps,x=a.memoizedProps,_=m.value,Ie(Sa,f._currentValue),f._currentValue=_,x!==null)if(sn(x.value,_)){if(x.children===m.children&&!Et.current){a=Pn(s,a,d);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var P=x.dependencies;if(P!==null){_=x.child;for(var T=P.firstContext;T!==null;){if(T.context===f){if(x.tag===1){T=Rn(-1,d&-d),T.tag=2;var V=x.updateQueue;if(V!==null){V=V.shared;var ee=V.pending;ee===null?T.next=T:(T.next=ee.next,ee.next=T),V.pending=T}}x.lanes|=d,T=x.alternate,T!==null&&(T.lanes|=d),Ql(x.return,d,a),P.lanes|=d;break}T=T.next}}else if(x.tag===10)_=x.type===a.type?null:x.child;else if(x.tag===18){if(_=x.return,_===null)throw Error(n(341));_.lanes|=d,P=_.alternate,P!==null&&(P.lanes|=d),Ql(_,d,a),_=x.sibling}else _=x.child;if(_!==null)_.return=x;else for(_=x;_!==null;){if(_===a){_=null;break}if(x=_.sibling,x!==null){x.return=_.return,_=x;break}_=_.return}x=_}kt(s,a,m.children,d),a=a.child}return a;case 9:return m=a.type,f=a.pendingProps.children,pi(a,d),m=Yt(m),f=f(m),a.flags|=1,kt(s,a,f,d),a.child;case 14:return f=a.type,m=an(f,a.pendingProps),m=an(f.type,m),tf(s,a,f,m,d);case 15:return nf(s,a,a.type,a.pendingProps,d);case 17:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:an(f,m),Ia(s,a),a.tag=1,Rt(f)?(s=!0,ba(a)):s=!1,pi(a,d),Yh(a,f,m),dc(a,f,m,d),pc(null,a,f,!0,s,d);case 19:return uf(s,a,d);case 22:return sf(s,a,d)}throw Error(n(156,a.tag))};function Mf(s,a){return fu(s,a)}function gy(s,a,d,f){this.tag=s,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(s,a,d,f){return new gy(s,a,d,f)}function Lc(s){return s=s.prototype,!(!s||!s.isReactComponent)}function xy(s){if(typeof s=="function")return Lc(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===oe)return 14}return 2}function os(s,a){var d=s.alternate;return d===null?(d=Xt(s.tag,a,s.key,s.mode),d.elementType=s.elementType,d.type=s.type,d.stateNode=s.stateNode,d.alternate=s,s.alternate=d):(d.pendingProps=a,d.type=s.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=s.flags&14680064,d.childLanes=s.childLanes,d.lanes=s.lanes,d.child=s.child,d.memoizedProps=s.memoizedProps,d.memoizedState=s.memoizedState,d.updateQueue=s.updateQueue,a=s.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=s.sibling,d.index=s.index,d.ref=s.ref,d}function Ka(s,a,d,f,m,x){var _=2;if(f=s,typeof s=="function")Lc(s)&&(_=1);else if(typeof s=="string")_=5;else e:switch(s){case L:return Ps(d.children,m,x,a);case C:_=8,m|=8;break;case O:return s=Xt(12,d,a,m|2),s.elementType=O,s.lanes=x,s;case te:return s=Xt(13,d,a,m),s.elementType=te,s.lanes=x,s;case q:return s=Xt(19,d,a,m),s.elementType=q,s.lanes=x,s;case ie:return Xa(d,m,x,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case H:_=10;break e;case X:_=9;break e;case F:_=11;break e;case oe:_=14;break e;case $:_=16,f=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return a=Xt(_,d,a,m),a.elementType=s,a.type=f,a.lanes=x,a}function Ps(s,a,d,f){return s=Xt(7,s,f,a),s.lanes=d,s}function Xa(s,a,d,f){return s=Xt(22,s,f,a),s.elementType=ie,s.lanes=d,s.stateNode={isHidden:!1},s}function Mc(s,a,d){return s=Xt(6,s,null,a),s.lanes=d,s}function Oc(s,a,d){return a=Xt(4,s.children!==null?s.children:[],s.key,a),a.lanes=d,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function vy(s,a,d,f,m){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function zc(s,a,d,f,m,x,_,P,T){return s=new vy(s,a,d,P,T),a===1?(a=1,x===!0&&(a|=8)):a=0,x=Xt(3,null,null,a),s.current=x,x.stateNode=s,x.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(x),s}function yy(s,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:s,containerInfo:a,implementation:d}}function Of(s){if(!s)return Jn;s=s._reactInternals;e:{if(vs(s)!==s||s.tag!==1)throw Error(n(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Rt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(s.tag===1){var d=s.type;if(Rt(d))return ch(s,d,a)}return a}function zf(s,a,d,f,m,x,_,P,T){return s=zc(d,f,!0,s,m,x,_,P,T),s.context=Of(null),d=s.current,f=St(),m=rs(d),x=Rn(f,m),x.callback=a??null,ts(d,x,m),s.current.lanes=m,Oi(s,m,f),Tt(s,f),s}function Ga(s,a,d,f){var m=a.current,x=St(),_=rs(m);return d=Of(d),a.context===null?a.context=d:a.pendingContext=d,a=Rn(x,_),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ts(m,a,_),s!==null&&(cn(s,m,_,x),Ea(s,m,_)),_}function Ja(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function If(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var d=s.retryLane;s.retryLane=d!==0&&d<a?d:a}}function Ic(s,a){If(s,a),(s=s.alternate)&&If(s,a)}function by(){return null}var Ff=typeof reportError=="function"?reportError:function(s){console.error(s)};function Fc(s){this._internalRoot=s}Za.prototype.render=Fc.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(n(409));Ga(s,a,null,null)},Za.prototype.unmount=Fc.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;Cs(function(){Ga(null,s,null,null)}),a[_n]=null}};function Za(s){this._internalRoot=s}Za.prototype.unstable_scheduleHydration=function(s){if(s){var a=ju();s={blockedOn:null,target:s,priority:a};for(var d=0;d<Yn.length&&a!==0&&a<Yn[d].priority;d++);Yn.splice(d,0,s),d===0&&_u(s)}};function Bc(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function eo(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function jy(s,a,d,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var V=Ja(_);x.call(V)}}var _=zf(a,f,s,0,null,!1,!1,"",Bf);return s._reactRootContainer=_,s[_n]=_.current,Xi(s.nodeType===8?s.parentNode:s),Cs(),_}for(;m=s.lastChild;)s.removeChild(m);if(typeof f=="function"){var P=f;f=function(){var V=Ja(T);P.call(V)}}var T=zc(s,0,!1,null,null,!1,!1,"",Bf);return s._reactRootContainer=T,s[_n]=T.current,Xi(s.nodeType===8?s.parentNode:s),Cs(function(){Ga(a,T,d,f)}),T}function to(s,a,d,f,m){var x=d._reactRootContainer;if(x){var _=x;if(typeof m=="function"){var P=m;m=function(){var T=Ja(_);P.call(T)}}Ga(a,_,s,m)}else _=jy(d,a,s,m,f);return Ja(_)}yu=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var d=Mi(a.pendingLanes);d!==0&&(dl(a,d|1),Tt(a,Qe()),(Pe&6)===0&&(yi=Qe()+500,Zn()))}break;case 13:Cs(function(){var f=En(s,1);if(f!==null){var m=St();cn(f,s,1,m)}}),Ic(s,1)}},ul=function(s){if(s.tag===13){var a=En(s,134217728);if(a!==null){var d=St();cn(a,s,134217728,d)}Ic(s,134217728)}},bu=function(s){if(s.tag===13){var a=rs(s),d=En(s,a);if(d!==null){var f=St();cn(d,s,a,f)}Ic(s,a)}},ju=function(){return Me},wu=function(s,a){var d=Me;try{return Me=s,a()}finally{Me=d}},sl=function(s,a,d){switch(a){case"input":if(hn(s,d),a=d.name,d.type==="radio"&&a!=null){for(d=s;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==s&&f.form===s.form){var m=va(f);if(!m)throw Error(n(90));Wn(f),hn(f,m)}}}break;case"textarea":Ct(s,d);break;case"select":a=d.value,a!=null&&ce(s,!!d.multiple,a,!1)}},au=Ac,ou=Cs;var wy={usingClientEntryPoint:!1,Events:[Zi,ai,va,iu,ru,Ac]},fr={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=uu(s),s===null?null:s.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{Zr=no.inject(Ny),fn=no}catch{}}return Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy,Dt.createPortal=function(s,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(a))throw Error(n(200));return yy(s,a,null,d)},Dt.createRoot=function(s,a){if(!Bc(s))throw Error(n(299));var d=!1,f="",m=Ff;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=zc(s,1,!1,null,null,d,!1,f,m),s[_n]=a.current,Xi(s.nodeType===8?s.parentNode:s),new Fc(a)},Dt.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=uu(a),s=s===null?null:s.stateNode,s},Dt.flushSync=function(s){return Cs(s)},Dt.hydrate=function(s,a,d){if(!eo(a))throw Error(n(200));return to(null,s,a,!0,d)},Dt.hydrateRoot=function(s,a,d){if(!Bc(s))throw Error(n(405));var f=d!=null&&d.hydratedSources||null,m=!1,x="",_=Ff;if(d!=null&&(d.unstable_strictMode===!0&&(m=!0),d.identifierPrefix!==void 0&&(x=d.identifierPrefix),d.onRecoverableError!==void 0&&(_=d.onRecoverableError)),a=zf(a,null,s,1,d??null,m,!1,x,_),s[_n]=a.current,Xi(s),f)for(s=0;s<f.length;s++)d=f[s],m=d._getVersion,m=m(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,m]:a.mutableSourceEagerHydrationData.push(d,m);return new Za(a)},Dt.render=function(s,a,d){if(!eo(a))throw Error(n(200));return to(null,s,a,!1,d)},Dt.unmountComponentAtNode=function(s){if(!eo(s))throw Error(n(40));return s._reactRootContainer?(Cs(function(){to(null,null,s,!1,function(){s._reactRootContainer=null,s[_n]=null})}),!0):!1},Dt.unstable_batchedUpdates=Ac,Dt.unstable_renderSubtreeIntoContainer=function(s,a,d,f){if(!eo(d))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return to(s,a,d,!1,f)},Dt.version="18.3.1-next-f1338f8080-20240426",Dt}var Qf;function qm(){if(Qf)return $c.exports;Qf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),$c.exports=Ly(),$c.exports}var Kf;function My(){if(Kf)return so;Kf=1;var t=qm();return so.createRoot=t.createRoot,so.hydrateRoot=t.hydrateRoot,so}var Oy=My();const zy=Hm(Oy);qm();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tr(){return Tr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tr.apply(this,arguments)}var ds;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ds||(ds={}));const Xf="popstate";function Iy(t){t===void 0&&(t={});function e(i,o){let{pathname:l,search:c,hash:u}=i.location;return hd("",{pathname:l,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:Eo(o)}return By(e,n,null,t)}function tt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ad(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fy(){return Math.random().toString(36).substr(2,8)}function Gf(t,e){return{usr:t.state,key:t.key,idx:e}}function hd(t,e,n,i){return n===void 0&&(n=null),Tr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ei(e):e,{state:n,key:e&&e.key||i||Fy()})}function Eo(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function By(t,e,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,u=ds.Pop,h=null,p=g();p==null&&(p=0,c.replaceState(Tr({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function v(){u=ds.Pop;let b=g(),k=b==null?null:b-p;p=b,h&&h({action:u,location:N.location,delta:k})}function y(b,k){u=ds.Push;let S=hd(N.location,b,k);p=g()+1;let A=Gf(S,p),z=N.createHref(S);try{c.pushState(A,"",z)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(z)}l&&h&&h({action:u,location:N.location,delta:1})}function w(b,k){u=ds.Replace;let S=hd(N.location,b,k);p=g();let A=Gf(S,p),z=N.createHref(S);c.replaceState(A,"",z),l&&h&&h({action:u,location:N.location,delta:0})}function j(b){let k=o.location.origin!=="null"?o.location.origin:o.location.href,S=typeof b=="string"?b:Eo(b);return S=S.replace(/ $/,"%20"),tt(k,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,k)}let N={get action(){return u},get location(){return t(o,c)},listen(b){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Xf,v),h=b,()=>{o.removeEventListener(Xf,v),h=null}},createHref(b){return e(o,b)},createURL:j,encodeLocation(b){let k=j(b);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:y,replace:w,go(b){return c.go(b)}};return N}var Jf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jf||(Jf={}));function Uy(t,e,n){return n===void 0&&(n="/"),Wy(t,e,n)}function Wy(t,e,n,i){let o=typeof e=="string"?Ei(e):e,l=Td(o.pathname||"/",n);if(l==null)return null;let c=Ym(t);$y(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=t0(l);u=Jy(c[h],p)}return u}function Ym(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,c,u)=>{let h={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(tt(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let p=ps([i,h.relativePath]),g=n.concat(h);l.children&&l.children.length>0&&(tt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Ym(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Xy(p,l.index),routesMeta:g})};return t.forEach((l,c)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,c);else for(let h of Qm(l.path))o(l,c,h)}),e}function Qm(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Qm(i.join("/")),u=[];return u.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function $y(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Hy=/^:[\w-]+$/,Vy=3,qy=2,Yy=1,Qy=10,Ky=-2,Zf=t=>t==="*";function Xy(t,e){let n=t.split("/"),i=n.length;return n.some(Zf)&&(i+=Ky),e&&(i+=qy),n.filter(o=>!Zf(o)).reduce((o,l)=>o+(Hy.test(l)?Vy:l===""?Yy:Qy),i)}function Gy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function Jy(t,e,n){let{routesMeta:i}=t,o={},l="/",c=[];for(let u=0;u<i.length;++u){let h=i[u],p=u===i.length-1,g=l==="/"?e:e.slice(l.length)||"/",v=Zy({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),y=h.route;if(!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:ps([l,v.pathname]),pathnameBase:a0(ps([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=ps([l,v.pathnameBase]))}return c}function Zy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=e0(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((p,g,v)=>{let{paramName:y,isOptional:w}=g;if(y==="*"){let N=u[v]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const j=u[v];return w&&!j?p[y]=void 0:p[y]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function e0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ad(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(i.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function t0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ad(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Td(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=t=>n0.test(t);function i0(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?Ei(t):t,l;if(n)if(s0(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Ad(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?l=ep(n.substring(1),"/"):l=ep(n,e)}else l=e;return{pathname:l,search:o0(i),hash:l0(o)}}function ep(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function qc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Km(t,e){let n=r0(t);return e?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Xm(t,e,n,i){i===void 0&&(i=!1);let o;typeof t=="string"?o=Ei(t):(o=Tr({},t),tt(!o.pathname||!o.pathname.includes("?"),qc("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),qc("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),qc("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,u;if(c==null)u=n;else{let v=e.length-1;if(!i&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}u=v>=0?e[v]:"/"}let h=i0(o,u),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}const ps=t=>t.join("/").replace(/\/\/+/g,"/"),a0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gm=["post","put","patch","delete"];new Set(Gm);const d0=["get",...Gm];new Set(d0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dr.apply(this,arguments)}const Dd=E.createContext(null),u0=E.createContext(null),Ys=E.createContext(null),Bo=E.createContext(null),xs=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Jm=E.createContext(null);function h0(t,e){let{relative:n}=e===void 0?{}:e;Wr()||tt(!1);let{basename:i,navigator:o}=E.useContext(Ys),{hash:l,pathname:c,search:u}=tg(t,{relative:n}),h=c;return i!=="/"&&(h=c==="/"?i:ps([i,c])),o.createHref({pathname:h,search:u,hash:l})}function Wr(){return E.useContext(Bo)!=null}function Uo(){return Wr()||tt(!1),E.useContext(Bo).location}function Zm(t){E.useContext(Ys).static||E.useLayoutEffect(t)}function Bn(){let{isDataRoute:t}=E.useContext(xs);return t?k0():f0()}function f0(){Wr()||tt(!1);let t=E.useContext(Dd),{basename:e,future:n,navigator:i}=E.useContext(Ys),{matches:o}=E.useContext(xs),{pathname:l}=Uo(),c=JSON.stringify(Km(o,n.v7_relativeSplatPath)),u=E.useRef(!1);return Zm(()=>{u.current=!0}),E.useCallback(function(p,g){if(g===void 0&&(g={}),!u.current)return;if(typeof p=="number"){i.go(p);return}let v=Xm(p,JSON.parse(c),l,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ps([e,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[e,i,c,l,t])}function eg(){let{matches:t}=E.useContext(xs),e=t[t.length-1];return e?e.params:{}}function tg(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=E.useContext(Ys),{matches:o}=E.useContext(xs),{pathname:l}=Uo(),c=JSON.stringify(Km(o,i.v7_relativeSplatPath));return E.useMemo(()=>Xm(t,JSON.parse(c),l,n==="path"),[t,c,l,n])}function p0(t,e){return m0(t,e)}function m0(t,e,n,i){Wr()||tt(!1);let{navigator:o}=E.useContext(Ys),{matches:l}=E.useContext(xs),c=l[l.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=Uo(),g;if(e){var v;let b=typeof e=="string"?Ei(e):e;h==="/"||(v=b.pathname)!=null&&v.startsWith(h)||tt(!1),g=b}else g=p;let y=g.pathname||"/",w=y;if(h!=="/"){let b=h.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(b.length).join("/")}let j=Uy(t,{pathname:w}),N=b0(j&&j.map(b=>Object.assign({},b,{params:Object.assign({},u,b.params),pathname:ps([h,o.encodeLocation?o.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?h:ps([h,o.encodeLocation?o.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),l,n,i);return e&&N?E.createElement(Bo.Provider,{value:{location:Dr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ds.Pop}},N):N}function g0(){let t=_0(),e=c0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:o},n):null,null)}const x0=E.createElement(g0,null);class v0 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(xs.Provider,{value:this.props.routeContext},E.createElement(Jm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y0(t){let{routeContext:e,match:n,children:i}=t,o=E.useContext(Dd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(xs.Provider,{value:e},i)}function b0(t,e,n,i){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let c=t,u=(o=n)==null?void 0:o.errors;if(u!=null){let g=c.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);g>=0||tt(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,p=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:y,errors:w}=n,j=v.route.loader&&y[v.route.id]===void 0&&(!w||w[v.route.id]===void 0);if(v.route.lazy||j){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,v,y)=>{let w,j=!1,N=null,b=null;n&&(w=u&&v.route.id?u[v.route.id]:void 0,N=v.route.errorElement||x0,h&&(p<0&&y===0?(S0("route-fallback"),j=!0,b=null):p===y&&(j=!0,b=v.route.hydrateFallbackElement||null)));let k=e.concat(c.slice(0,y+1)),S=()=>{let A;return w?A=N:j?A=b:v.route.Component?A=E.createElement(v.route.Component,null):v.route.element?A=v.route.element:A=g,E.createElement(y0,{match:v,routeContext:{outlet:g,matches:k,isDataRoute:n!=null},children:A})};return n&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?E.createElement(v0,{location:n.location,revalidation:n.revalidation,component:N,error:w,children:S(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):S()},null)}var ng=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(ng||{}),sg=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(sg||{});function j0(t){let e=E.useContext(Dd);return e||tt(!1),e}function w0(t){let e=E.useContext(u0);return e||tt(!1),e}function N0(t){let e=E.useContext(xs);return e||tt(!1),e}function ig(t){let e=N0(),n=e.matches[e.matches.length-1];return n.route.id||tt(!1),n.route.id}function _0(){var t;let e=E.useContext(Jm),n=w0(),i=ig();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function k0(){let{router:t}=j0(ng.UseNavigateStable),e=ig(sg.UseNavigateStable),n=E.useRef(!1);return Zm(()=>{n.current=!0}),E.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,Dr({fromRouteId:e},l)))},[t,e])}const tp={};function S0(t,e,n){tp[t]||(tp[t]=!0)}function C0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ye(t){tt(!1)}function E0(t){let{basename:e="/",children:n=null,location:i,navigationType:o=ds.Pop,navigator:l,static:c=!1,future:u}=t;Wr()&&tt(!1);let h=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:h,navigator:l,static:c,future:Dr({v7_relativeSplatPath:!1},u)}),[h,u,l,c]);typeof i=="string"&&(i=Ei(i));let{pathname:g="/",search:v="",hash:y="",state:w=null,key:j="default"}=i,N=E.useMemo(()=>{let b=Td(g,h);return b==null?null:{location:{pathname:b,search:v,hash:y,state:w,key:j},navigationType:o}},[h,g,v,y,w,j,o]);return N==null?null:E.createElement(Ys.Provider,{value:p},E.createElement(Bo.Provider,{children:n,value:N}))}function R0(t){let{children:e,location:n}=t;return p0(fd(e),n)}new Promise(()=>{});function fd(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(i,o)=>{if(!E.isValidElement(i))return;let l=[...e,o];if(i.type===E.Fragment){n.push.apply(n,fd(i.props.children,l));return}i.type!==Ye&&tt(!1),!i.props.index||!i.props.children||tt(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=fd(i.props.children,l)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pd(){return pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pd.apply(this,arguments)}function P0(t,e){if(t==null)return{};var n={},i=Object.keys(t),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function A0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function T0(t,e){return t.button===0&&(!e||e==="_self")&&!A0(t)}const D0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],L0="6";try{window.__reactRouterVersion=L0}catch{}const M0="startTransition",np=Ay[M0];function O0(t){let{basename:e,children:n,future:i,window:o}=t,l=E.useRef();l.current==null&&(l.current=Iy({window:o,v5Compat:!0}));let c=l.current,[u,h]=E.useState({action:c.action,location:c.location}),{v7_startTransition:p}=i||{},g=E.useCallback(v=>{p&&np?np(()=>h(v)):h(v)},[h,p]);return E.useLayoutEffect(()=>c.listen(g),[c,g]),E.useEffect(()=>C0(i),[i]),E.createElement(E0,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,future:i})}const z0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xe=E.forwardRef(function(e,n){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:u,target:h,to:p,preventScrollReset:g,viewTransition:v}=e,y=P0(e,D0),{basename:w}=E.useContext(Ys),j,N=!1;if(typeof p=="string"&&I0.test(p)&&(j=p,z0))try{let A=new URL(window.location.href),z=p.startsWith("//")?new URL(A.protocol+p):new URL(p),R=Td(z.pathname,w);z.origin===A.origin&&R!=null?p=R+z.search+z.hash:N=!0}catch{}let b=h0(p,{relative:o}),k=F0(p,{replace:c,state:u,target:h,preventScrollReset:g,relative:o,viewTransition:v});function S(A){i&&i(A),A.defaultPrevented||k(A)}return E.createElement("a",pd({},y,{href:j||b,onClick:N||l?i:S,ref:n,target:h}))});var sp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sp||(sp={}));var ip;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ip||(ip={}));function F0(t,e){let{target:n,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:u}=e===void 0?{}:e,h=Bn(),p=Uo(),g=tg(t,{relative:c});return E.useCallback(v=>{if(T0(v,n)){v.preventDefault();let y=i!==void 0?i:Eo(p)===Eo(g);h(t,{replace:y,state:o,preventScrollReset:l,relative:c,viewTransition:u})}},[p,h,g,i,o,n,t,l,c,u])}const B0={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",database:"数据库",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",collection:"采集",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据"}},U0={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",database:"Database",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",collection:"Collection",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warn",error:"Error",save:"Save Settings",saved:"Settings saved"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data"}},W0={zh:B0,en:U0},rg=E.createContext(void 0);function $0(t,e){const n=e.split(".");let i=t;for(const o of n)if(i&&typeof i=="object"&&o in i)i=i[o];else return e;return typeof i=="string"?i:e}function H0({children:t}){const[e,n]=E.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),i=E.useCallback(c=>{n(c),localStorage.setItem("locale",c)},[]),o=E.useCallback(()=>{i(e==="zh"?"en":"zh")},[e,i]),l=E.useCallback((c,u)=>{let h=$0(W0[e],c);return u&&Object.entries(u).forEach(([p,g])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(g))}),h},[e]);return r.jsx(rg.Provider,{value:{locale:e,t:l,setLocale:i,toggleLocale:o},children:t})}function ct(){const t=E.useContext(rg);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function V0(){const{locale:t,toggleLocale:e}=ct();return r.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function ag(t,e){return function(){return t.apply(e,arguments)}}const{toString:q0}=Object.prototype,{getPrototypeOf:Ld}=Object,{iterator:Wo,toStringTag:og}=Symbol,$o=(t=>e=>{const n=q0.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),un=t=>(t=t.toLowerCase(),e=>$o(e)===t),Ho=t=>e=>typeof e===t,{isArray:Ri}=Array,ki=Ho("undefined");function $r(t){return t!==null&&!ki(t)&&t.constructor!==null&&!ki(t.constructor)&&Ot(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const lg=un("ArrayBuffer");function Y0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&lg(t.buffer),e}const Q0=Ho("string"),Ot=Ho("function"),cg=Ho("number"),Hr=t=>t!==null&&typeof t=="object",K0=t=>t===!0||t===!1,bo=t=>{if($o(t)!=="object")return!1;const e=Ld(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(og in t)&&!(Wo in t)},X0=t=>{if(!Hr(t)||$r(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},G0=un("Date"),J0=un("File"),Z0=t=>!!(t&&typeof t.uri<"u"),eb=t=>t&&typeof t.getParts<"u",tb=un("Blob"),nb=un("FileList"),sb=t=>Hr(t)&&Ot(t.pipe);function ib(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const rp=ib(),ap=typeof rp.FormData<"u"?rp.FormData:void 0,rb=t=>{let e;return t&&(ap&&t instanceof ap||Ot(t.append)&&((e=$o(t))==="formdata"||e==="object"&&Ot(t.toString)&&t.toString()==="[object FormData]"))},ab=un("URLSearchParams"),[ob,lb,cb,db]=["ReadableStream","Request","Response","Headers"].map(un),ub=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,o;if(typeof t!="object"&&(t=[t]),Ri(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{if($r(t))return;const l=n?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let u;for(i=0;i<c;i++)u=l[i],e.call(null,t[u],u,t)}}function dg(t,e){if($r(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,o;for(;i-- >0;)if(o=n[i],e===o.toLowerCase())return o;return null}const Fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ug=t=>!ki(t)&&t!==Fs;function md(){const{caseless:t,skipUndefined:e}=ug(this)&&this||{},n={},i=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const c=t&&dg(n,l)||l;bo(n[c])&&bo(o)?n[c]=md(n[c],o):bo(o)?n[c]=md({},o):Ri(o)?n[c]=o.slice():(!e||!ki(o))&&(n[c]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Vr(arguments[o],i);return n}const hb=(t,e,n,{allOwnKeys:i}={})=>(Vr(e,(o,l)=>{n&&Ot(o)?Object.defineProperty(t,l,{value:ag(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),fb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),pb=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},mb=(t,e,n,i)=>{let o,l,c;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)c=o[l],(!i||i(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=n!==!1&&Ld(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},gb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},xb=t=>{if(!t)return null;if(Ri(t))return t;let e=t.length;if(!cg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ld(Uint8Array)),yb=(t,e)=>{const i=(t&&t[Wo]).call(t);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},bb=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},jb=un("HTMLFormElement"),wb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),op=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Nb=un("RegExp"),hg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Vr(n,(o,l)=>{let c;(c=e(o,l,t))!==!1&&(i[l]=c||o)}),Object.defineProperties(t,i)},_b=t=>{hg(t,(e,n)=>{if(Ot(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Ot(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kb=(t,e)=>{const n={},i=o=>{o.forEach(l=>{n[l]=!0})};return Ri(t)?i(t):i(String(t).split(e)),n},Sb=()=>{},Cb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Eb(t){return!!(t&&Ot(t.append)&&t[og]==="FormData"&&t[Wo])}const Rb=t=>{const e=new Array(10),n=(i,o)=>{if(Hr(i)){if(e.indexOf(i)>=0)return;if($r(i))return i;if(!("toJSON"in i)){e[o]=i;const l=Ri(i)?[]:{};return Vr(i,(c,u)=>{const h=n(c,o+1);!ki(h)&&(l[u]=h)}),e[o]=void 0,l}}return i};return n(t,0)},Pb=un("AsyncFunction"),Ab=t=>t&&(Hr(t)||Ot(t))&&Ot(t.then)&&Ot(t.catch),fg=((t,e)=>t?setImmediate:e?((n,i)=>(Fs.addEventListener("message",({source:o,data:l})=>{o===Fs&&l===n&&i.length&&i.shift()()},!1),o=>{i.push(o),Fs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ot(Fs.postMessage)),Tb=typeof queueMicrotask<"u"?queueMicrotask.bind(Fs):typeof process<"u"&&process.nextTick||fg,Db=t=>t!=null&&Ot(t[Wo]),Y={isArray:Ri,isArrayBuffer:lg,isBuffer:$r,isFormData:rb,isArrayBufferView:Y0,isString:Q0,isNumber:cg,isBoolean:K0,isObject:Hr,isPlainObject:bo,isEmptyObject:X0,isReadableStream:ob,isRequest:lb,isResponse:cb,isHeaders:db,isUndefined:ki,isDate:G0,isFile:J0,isReactNativeBlob:Z0,isReactNative:eb,isBlob:tb,isRegExp:Nb,isFunction:Ot,isStream:sb,isURLSearchParams:ab,isTypedArray:vb,isFileList:nb,forEach:Vr,merge:md,extend:hb,trim:ub,stripBOM:fb,inherits:pb,toFlatObject:mb,kindOf:$o,kindOfTest:un,endsWith:gb,toArray:xb,forEachEntry:yb,matchAll:bb,isHTMLForm:jb,hasOwnProperty:op,hasOwnProp:op,reduceDescriptors:hg,freezeMethods:_b,toObjectSet:kb,toCamelCase:wb,noop:Sb,toFiniteNumber:Cb,findKey:dg,global:Fs,isContextDefined:ug,isSpecCompliantForm:Eb,toJSONObject:Rb,isAsyncFn:Pb,isThenable:Ab,setImmediate:fg,asap:Tb,isIterable:Db};let we=class pg extends Error{static from(e,n,i,o,l,c){const u=new pg(e.message,n||e.code,i,o,l);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,n,i,o,l){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}};we.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";we.ERR_BAD_OPTION="ERR_BAD_OPTION";we.ECONNABORTED="ECONNABORTED";we.ETIMEDOUT="ETIMEDOUT";we.ERR_NETWORK="ERR_NETWORK";we.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";we.ERR_DEPRECATED="ERR_DEPRECATED";we.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";we.ERR_BAD_REQUEST="ERR_BAD_REQUEST";we.ERR_CANCELED="ERR_CANCELED";we.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";we.ERR_INVALID_URL="ERR_INVALID_URL";const Lb=null;function gd(t){return Y.isPlainObject(t)||Y.isArray(t)}function mg(t){return Y.endsWith(t,"[]")?t.slice(0,-2):t}function Yc(t,e,n){return t?t.concat(e).map(function(o,l){return o=mg(o),!n&&l?"["+o+"]":o}).join(n?".":""):e}function Mb(t){return Y.isArray(t)&&!t.some(gd)}const Ob=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function Vo(t,e,n){if(!Y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,b){return!Y.isUndefined(b[N])});const i=n.metaTokens,o=n.visitor||g,l=n.dots,c=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(e);if(!Y.isFunction(o))throw new TypeError("visitor must be a function");function p(j){if(j===null)return"";if(Y.isDate(j))return j.toISOString();if(Y.isBoolean(j))return j.toString();if(!h&&Y.isBlob(j))throw new we("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(j)||Y.isTypedArray(j)?h&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function g(j,N,b){let k=j;if(Y.isReactNative(e)&&Y.isReactNativeBlob(j))return e.append(Yc(b,N,l),p(j)),!1;if(j&&!b&&typeof j=="object"){if(Y.endsWith(N,"{}"))N=i?N:N.slice(0,-2),j=JSON.stringify(j);else if(Y.isArray(j)&&Mb(j)||(Y.isFileList(j)||Y.endsWith(N,"[]"))&&(k=Y.toArray(j)))return N=mg(N),k.forEach(function(A,z){!(Y.isUndefined(A)||A===null)&&e.append(c===!0?Yc([N],z,l):c===null?N:N+"[]",p(A))}),!1}return gd(j)?!0:(e.append(Yc(b,N,l),p(j)),!1)}const v=[],y=Object.assign(Ob,{defaultVisitor:g,convertValue:p,isVisitable:gd});function w(j,N){if(!Y.isUndefined(j)){if(v.indexOf(j)!==-1)throw Error("Circular reference detected in "+N.join("."));v.push(j),Y.forEach(j,function(k,S){(!(Y.isUndefined(k)||k===null)&&o.call(e,k,Y.isString(S)?S.trim():S,N,y))===!0&&w(k,N?N.concat(S):[S])}),v.pop()}}if(!Y.isObject(t))throw new TypeError("data must be an object");return w(t),e}function lp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Md(t,e){this._pairs=[],t&&Vo(t,this,e)}const gg=Md.prototype;gg.append=function(e,n){this._pairs.push([e,n])};gg.toString=function(e){const n=e?function(i){return e.call(this,i,lp)}:lp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function zb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xg(t,e,n){if(!e)return t;const i=n&&n.encode||zb,o=Y.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let c;if(l?c=l(e,o):c=Y.isURLSearchParams(e)?e.toString():new Md(e,o).toString(i),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class cp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Od={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Ib=typeof URLSearchParams<"u"?URLSearchParams:Md,Fb=typeof FormData<"u"?FormData:null,Bb=typeof Blob<"u"?Blob:null,Ub={isBrowser:!0,classes:{URLSearchParams:Ib,FormData:Fb,Blob:Bb},protocols:["http","https","file","blob","url","data"]},zd=typeof window<"u"&&typeof document<"u",xd=typeof navigator=="object"&&navigator||void 0,Wb=zd&&(!xd||["ReactNative","NativeScript","NS"].indexOf(xd.product)<0),$b=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Hb=zd&&window.location.href||"http://localhost",Vb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zd,hasStandardBrowserEnv:Wb,hasStandardBrowserWebWorkerEnv:$b,navigator:xd,origin:Hb},Symbol.toStringTag,{value:"Module"})),yt={...Vb,...Ub};function qb(t,e){return Vo(t,new yt.classes.URLSearchParams,{visitor:function(n,i,o,l){return yt.isNode&&Y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function Yb(t){return Y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Qb(t){const e={},n=Object.keys(t);let i;const o=n.length;let l;for(i=0;i<o;i++)l=n[i],e[l]=t[l];return e}function vg(t){function e(n,i,o,l){let c=n[l++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=l>=n.length;return c=!c&&Y.isArray(o)?o.length:c,h?(Y.hasOwnProp(o,c)?o[c]=[o[c],i]:o[c]=i,!u):((!o[c]||!Y.isObject(o[c]))&&(o[c]=[]),e(n,i,o[c],l)&&Y.isArray(o[c])&&(o[c]=Qb(o[c])),!u)}if(Y.isFormData(t)&&Y.isFunction(t.entries)){const n={};return Y.forEachEntry(t,(i,o)=>{e(Yb(i),o,n,0)}),n}return null}function Kb(t,e,n){if(Y.isString(t))try{return(e||JSON.parse)(t),Y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const qr={transitional:Od,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,l=Y.isObject(e);if(l&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return o?JSON.stringify(vg(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return qb(e,this.formSerializer).toString();if((u=Y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Vo(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Kb(e)):e}],transformResponse:[function(e){const n=this.transitional||qr.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(i&&!this.responseType||o)){const c=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?we.from(u,we.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],t=>{qr.headers[t]={}});const Xb=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gb=t=>{const e={};let n,i,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),n=c.substring(0,o).trim().toLowerCase(),i=c.substring(o+1).trim(),!(!n||e[n]&&Xb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},dp=Symbol("internals"),Jb=t=>!/[\r\n]/.test(t);function yg(t,e){if(!(t===!1||t==null)){if(Y.isArray(t)){t.forEach(n=>yg(n,e));return}if(!Jb(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function mr(t){return t&&String(t).trim().toLowerCase()}function Zb(t){let e=t.length;for(;e>0;){const n=t.charCodeAt(e-1);if(n!==10&&n!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function jo(t){return t===!1||t==null?t:Y.isArray(t)?t.map(jo):Zb(String(t))}function ej(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const tj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qc(t,e,n,i,o){if(Y.isFunction(i))return i.call(this,e,n);if(o&&(e=n),!!Y.isString(e)){if(Y.isString(i))return e.indexOf(i)!==-1;if(Y.isRegExp(i))return i.test(e)}}function nj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function sj(t,e){const n=Y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(o,l,c){return this[i].call(this,e,o,l,c)},configurable:!0})})}let zt=class{constructor(e){e&&this.set(e)}set(e,n,i){const o=this;function l(u,h,p){const g=mr(h);if(!g)throw new Error("header name must be a non-empty string");const v=Y.findKey(o,g);(!v||o[v]===void 0||p===!0||p===void 0&&o[v]!==!1)&&(yg(u,h),o[v||h]=jo(u))}const c=(u,h)=>Y.forEach(u,(p,g)=>l(p,g,h));if(Y.isPlainObject(e)||e instanceof this.constructor)c(e,n);else if(Y.isString(e)&&(e=e.trim())&&!tj(e))c(Gb(e),n);else if(Y.isObject(e)&&Y.isIterable(e)){let u={},h,p;for(const g of e){if(!Y.isArray(g))throw TypeError("Object iterator must return a key-value pair");u[p=g[0]]=(h=u[p])?Y.isArray(h)?[...h,g[1]]:[h,g[1]]:g[1]}c(u,n)}else e!=null&&l(n,e,i);return this}get(e,n){if(e=mr(e),e){const i=Y.findKey(this,e);if(i){const o=this[i];if(!n)return o;if(n===!0)return ej(o);if(Y.isFunction(n))return n.call(this,o,i);if(Y.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=mr(e),e){const i=Y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Qc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let o=!1;function l(c){if(c=mr(c),c){const u=Y.findKey(i,c);u&&(!n||Qc(i,i[u],u,n))&&(delete i[u],o=!0)}}return Y.isArray(e)?e.forEach(l):l(e),o}clear(e){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const l=n[i];(!e||Qc(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const n=this,i={};return Y.forEach(this,(o,l)=>{const c=Y.findKey(i,l);if(c){n[c]=jo(o),delete n[l];return}const u=e?nj(l):String(l).trim();u!==l&&delete n[l],n[u]=jo(o),i[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=e&&Y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[dp]=this[dp]={accessors:{}}).accessors,o=this.prototype;function l(c){const u=mr(c);i[u]||(sj(o,c),i[u]=!0)}return Y.isArray(e)?e.forEach(l):l(e),this}};zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(zt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Y.freezeMethods(zt);function Kc(t,e){const n=this||qr,i=e||n,o=zt.from(i.headers);let l=i.data;return Y.forEach(t,function(u){l=u.call(n,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function bg(t){return!!(t&&t.__CANCEL__)}let Yr=class extends we{constructor(e,n,i){super(e??"canceled",we.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function jg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ij(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rj(t,e){t=t||10;const n=new Array(t),i=new Array(t);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),g=i[l];c||(c=p),n[o]=h,i[o]=p;let v=l,y=0;for(;v!==o;)y+=n[v++],v=v%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),p-c<e)return;const w=g&&p-g;return w?Math.round(y*1e3/w):void 0}}function aj(t,e){let n=0,i=1e3/e,o,l;const c=(p,g=Date.now())=>{n=g,o=null,l&&(clearTimeout(l),l=null),t(...p)};return[(...p)=>{const g=Date.now(),v=g-n;v>=i?c(p,g):(o=p,l||(l=setTimeout(()=>{l=null,c(o)},i-v)))},()=>o&&c(o)]}const Ro=(t,e,n=3)=>{let i=0;const o=rj(50,250);return aj(l=>{const c=l.loaded,u=l.lengthComputable?l.total:void 0,h=c-i,p=o(h),g=c<=u;i=c;const v={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&g?(u-c)/p:void 0,event:l,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(v)},n)},up=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},hp=t=>(...e)=>Y.asap(()=>t(...e)),oj=yt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,yt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(yt.origin),yt.navigator&&/(msie|trident)/i.test(yt.navigator.userAgent)):()=>!0,lj=yt.hasStandardBrowserEnv?{write(t,e,n,i,o,l,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];Y.isNumber(n)&&u.push(`expires=${new Date(n).toUTCString()}`),Y.isString(i)&&u.push(`path=${i}`),Y.isString(o)&&u.push(`domain=${o}`),l===!0&&u.push("secure"),Y.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wg(t,e,n){let i=!cj(e);return t&&(i||n==!1)?dj(t,e):e}const fp=t=>t instanceof zt?{...t}:t;function Hs(t,e){e=e||{};const n={};function i(p,g,v,y){return Y.isPlainObject(p)&&Y.isPlainObject(g)?Y.merge.call({caseless:y},p,g):Y.isPlainObject(g)?Y.merge({},g):Y.isArray(g)?g.slice():g}function o(p,g,v,y){if(Y.isUndefined(g)){if(!Y.isUndefined(p))return i(void 0,p,v,y)}else return i(p,g,v,y)}function l(p,g){if(!Y.isUndefined(g))return i(void 0,g)}function c(p,g){if(Y.isUndefined(g)){if(!Y.isUndefined(p))return i(void 0,p)}else return i(void 0,g)}function u(p,g,v){if(v in e)return i(p,g);if(v in t)return i(void 0,p)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,g,v)=>o(fp(p),fp(g),v,!0)};return Y.forEach(Object.keys({...t,...e}),function(g){if(g==="__proto__"||g==="constructor"||g==="prototype")return;const v=Y.hasOwnProp(h,g)?h[g]:o,y=v(t[g],e[g],g);Y.isUndefined(y)&&v!==u||(n[g]=y)}),n}const Ng=t=>{const e=Hs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:u}=e;if(e.headers=c=zt.from(c),e.url=xg(wg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),Y.isFormData(n)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(Y.isFunction(n.getHeaders)){const h=n.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([g,v])=>{p.includes(g.toLowerCase())&&c.set(g,v)})}}if(yt.hasStandardBrowserEnv&&(i&&Y.isFunction(i)&&(i=i(e)),i||i!==!1&&oj(e.url))){const h=o&&l&&lj.read(l);h&&c.set(o,h)}return e},uj=typeof XMLHttpRequest<"u",hj=uj&&function(t){return new Promise(function(n,i){const o=Ng(t);let l=o.data;const c=zt.from(o.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=o,g,v,y,w,j;function N(){w&&w(),j&&j(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let b=new XMLHttpRequest;b.open(o.method.toUpperCase(),o.url,!0),b.timeout=o.timeout;function k(){if(!b)return;const A=zt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),R={data:!u||u==="text"||u==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:A,config:t,request:b};jg(function(L){n(L),N()},function(L){i(L),N()},R),b=null}"onloadend"in b?b.onloadend=k:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(k)},b.onabort=function(){b&&(i(new we("Request aborted",we.ECONNABORTED,t,b)),b=null)},b.onerror=function(z){const R=z&&z.message?z.message:"Network Error",I=new we(R,we.ERR_NETWORK,t,b);I.event=z||null,i(I),b=null},b.ontimeout=function(){let z=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const R=o.transitional||Od;o.timeoutErrorMessage&&(z=o.timeoutErrorMessage),i(new we(z,R.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,t,b)),b=null},l===void 0&&c.setContentType(null),"setRequestHeader"in b&&Y.forEach(c.toJSON(),function(z,R){b.setRequestHeader(R,z)}),Y.isUndefined(o.withCredentials)||(b.withCredentials=!!o.withCredentials),u&&u!=="json"&&(b.responseType=o.responseType),p&&([y,j]=Ro(p,!0),b.addEventListener("progress",y)),h&&b.upload&&([v,w]=Ro(h),b.upload.addEventListener("progress",v),b.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(g=A=>{b&&(i(!A||A.type?new Yr(null,t,b):A),b.abort(),b=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const S=ij(o.url);if(S&&yt.protocols.indexOf(S)===-1){i(new we("Unsupported protocol "+S+":",we.ERR_BAD_REQUEST,t));return}b.send(l||null)})},fj=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,o;const l=function(p){if(!o){o=!0,u();const g=p instanceof Error?p:this.reason;i.abort(g instanceof we?g:new Yr(g instanceof Error?g.message:g))}};let c=e&&setTimeout(()=>{c=null,l(new we(`timeout of ${e}ms exceeded`,we.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),t=null)};t.forEach(p=>p.addEventListener("abort",l));const{signal:h}=i;return h.unsubscribe=()=>Y.asap(u),h}},pj=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,o;for(;i<n;)o=i+e,yield t.slice(i,o),i=o},mj=async function*(t,e){for await(const n of gj(t))yield*pj(n,e)},gj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},pp=(t,e,n,i)=>{const o=mj(t,e);let l=0,c,u=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:p,value:g}=await o.next();if(p){u(),h.close();return}let v=g.byteLength;if(n){let y=l+=v;n(y)}h.enqueue(new Uint8Array(g))}catch(p){throw u(p),p}},cancel(h){return u(h),o.return()}},{highWaterMark:2})},mp=64*1024,{isFunction:io}=Y,xj=(({Request:t,Response:e})=>({Request:t,Response:e}))(Y.global),{ReadableStream:gp,TextEncoder:xp}=Y.global,vp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},vj=t=>{t=Y.merge.call({skipUndefined:!0},xj,t);const{fetch:e,Request:n,Response:i}=t,o=e?io(e):typeof fetch=="function",l=io(n),c=io(i);if(!o)return!1;const u=o&&io(gp),h=o&&(typeof xp=="function"?(j=>N=>j.encode(N))(new xp):async j=>new Uint8Array(await new n(j).arrayBuffer())),p=l&&u&&vp(()=>{let j=!1;const N=new gp,b=new n(yt.origin,{body:N,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return N.cancel(),j&&!b}),g=c&&u&&vp(()=>Y.isReadableStream(new i("").body)),v={stream:g&&(j=>j.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!v[j]&&(v[j]=(N,b)=>{let k=N&&N[j];if(k)return k.call(N);throw new we(`Response type '${j}' is not supported`,we.ERR_NOT_SUPPORT,b)})});const y=async j=>{if(j==null)return 0;if(Y.isBlob(j))return j.size;if(Y.isSpecCompliantForm(j))return(await new n(yt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(Y.isArrayBufferView(j)||Y.isArrayBuffer(j))return j.byteLength;if(Y.isURLSearchParams(j)&&(j=j+""),Y.isString(j))return(await h(j)).byteLength},w=async(j,N)=>{const b=Y.toFiniteNumber(j.getContentLength());return b??y(N)};return async j=>{let{url:N,method:b,data:k,signal:S,cancelToken:A,timeout:z,onDownloadProgress:R,onUploadProgress:I,responseType:L,headers:C,withCredentials:O="same-origin",fetchOptions:H}=Ng(j),X=e||fetch;L=L?(L+"").toLowerCase():"text";let F=fj([S,A&&A.toAbortSignal()],z),te=null;const q=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let oe;try{if(I&&p&&b!=="get"&&b!=="head"&&(oe=await w(C,k))!==0){let D=new n(N,{method:"POST",body:k,duplex:"half"}),Q;if(Y.isFormData(k)&&(Q=D.headers.get("content-type"))&&C.setContentType(Q),D.body){const[ge,ve]=up(oe,Ro(hp(I)));k=pp(D.body,mp,ge,ve)}}Y.isString(O)||(O=O?"include":"omit");const $=l&&"credentials"in n.prototype,ie={...H,signal:F,method:b.toUpperCase(),headers:C.normalize().toJSON(),body:k,duplex:"half",credentials:$?O:void 0};te=l&&new n(N,ie);let K=await(l?X(te,H):X(N,ie));const re=g&&(L==="stream"||L==="response");if(g&&(R||re&&q)){const D={};["status","statusText","headers"].forEach(je=>{D[je]=K[je]});const Q=Y.toFiniteNumber(K.headers.get("content-length")),[ge,ve]=R&&up(Q,Ro(hp(R),!0))||[];K=new i(pp(K.body,mp,ge,()=>{ve&&ve(),q&&q()}),D)}L=L||"text";let G=await v[Y.findKey(v,L)||"text"](K,j);return!re&&q&&q(),await new Promise((D,Q)=>{jg(D,Q,{data:G,headers:zt.from(K.headers),status:K.status,statusText:K.statusText,config:j,request:te})})}catch($){throw q&&q(),$&&$.name==="TypeError"&&/Load failed|fetch/i.test($.message)?Object.assign(new we("Network Error",we.ERR_NETWORK,j,te,$&&$.response),{cause:$.cause||$}):we.from($,$&&$.code,j,te,$&&$.response)}}},yj=new Map,_g=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:o}=e,l=[i,o,n];let c=l.length,u=c,h,p,g=yj;for(;u--;)h=l[u],p=g.get(h),p===void 0&&g.set(h,p=u?new Map:vj(e)),g=p;return p};_g();const Id={http:Lb,xhr:hj,fetch:{get:_g}};Y.forEach(Id,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const yp=t=>`- ${t}`,bj=t=>Y.isFunction(t)||t===null||t===!1;function jj(t,e){t=Y.isArray(t)?t:[t];const{length:n}=t;let i,o;const l={};for(let c=0;c<n;c++){i=t[c];let u;if(o=i,!bj(i)&&(o=Id[(u=String(i)).toLowerCase()],o===void 0))throw new we(`Unknown adapter '${u}'`);if(o&&(Y.isFunction(o)||(o=o.get(e))))break;l[u||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=n?c.length>1?`since :
`+c.map(yp).join(`
`):" "+yp(c[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o}const kg={getAdapter:jj,adapters:Id};function Xc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yr(null,t)}function bp(t){return Xc(t),t.headers=zt.from(t.headers),t.data=Kc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),kg.getAdapter(t.adapter||qr.adapter,t)(t).then(function(i){return Xc(t),i.data=Kc.call(t,t.transformResponse,i),i.headers=zt.from(i.headers),i},function(i){return bg(i)||(Xc(t),i&&i.response&&(i.response.data=Kc.call(t,t.transformResponse,i.response),i.response.headers=zt.from(i.response.headers))),Promise.reject(i)})}const Sg="1.15.0",qo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{qo[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const jp={};qo.transitional=function(e,n,i){function o(l,c){return"[Axios v"+Sg+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,u)=>{if(e===!1)throw new we(o(c," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!jp[c]&&(jp[c]=!0,console.warn(o(c," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(l,c,u):!0}};qo.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function wj(t,e,n){if(typeof t!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let o=i.length;for(;o-- >0;){const l=i[o],c=e[l];if(c){const u=t[l],h=u===void 0||c(u,l,t);if(h!==!0)throw new we("option "+l+" must be "+h,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+l,we.ERR_BAD_OPTION)}}const wo={assertOptions:wj,validators:qo},Gt=wo.validators;let Us=class{constructor(e){this.defaults=e||{},this.interceptors={request:new cp,response:new cp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=(()=>{if(!o.stack)return"";const c=o.stack.indexOf(`
`);return c===-1?"":o.stack.slice(c+1)})();try{if(!i.stack)i.stack=l;else if(l){const c=l.indexOf(`
`),u=c===-1?-1:l.indexOf(`
`,c+1),h=u===-1?"":l.slice(u+1);String(i.stack).endsWith(h)||(i.stack+=`
`+l)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Hs(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:l}=n;i!==void 0&&wo.assertOptions(i,{silentJSONParsing:Gt.transitional(Gt.boolean),forcedJSONParsing:Gt.transitional(Gt.boolean),clarifyTimeoutError:Gt.transitional(Gt.boolean),legacyInterceptorReqResOrdering:Gt.transitional(Gt.boolean)},!1),o!=null&&(Y.isFunction(o)?n.paramsSerializer={serialize:o}:wo.assertOptions(o,{encode:Gt.function,serialize:Gt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),wo.assertOptions(n,{baseUrl:Gt.spelling("baseURL"),withXsrfToken:Gt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=l&&Y.merge(l.common,l[n.method]);l&&Y.forEach(["delete","get","head","post","put","patch","common"],j=>{delete l[j]}),n.headers=zt.concat(c,l);const u=[];let h=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(n)===!1)return;h=h&&N.synchronous;const b=n.transitional||Od;b&&b.legacyInterceptorReqResOrdering?u.unshift(N.fulfilled,N.rejected):u.push(N.fulfilled,N.rejected)});const p=[];this.interceptors.response.forEach(function(N){p.push(N.fulfilled,N.rejected)});let g,v=0,y;if(!h){const j=[bp.bind(this),void 0];for(j.unshift(...u),j.push(...p),y=j.length,g=Promise.resolve(n);v<y;)g=g.then(j[v++],j[v++]);return g}y=u.length;let w=n;for(;v<y;){const j=u[v++],N=u[v++];try{w=j(w)}catch(b){N.call(this,b);break}}try{g=bp.call(this,w)}catch(j){return Promise.reject(j)}for(v=0,y=p.length;v<y;)g=g.then(p[v++],p[v++]);return g}getUri(e){e=Hs(this.defaults,e);const n=wg(e.baseURL,e.url,e.allowAbsoluteUrls);return xg(n,e.params,e.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(e){Us.prototype[e]=function(n,i){return this.request(Hs(i||{},{method:e,url:n,data:(i||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function n(i){return function(l,c,u){return this.request(Hs(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Us.prototype[e]=n(),Us.prototype[e+"Form"]=n(!0)});let Nj=class Cg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(u=>{i.subscribe(u),l=u}).then(o);return c.cancel=function(){i.unsubscribe(l)},c},e(function(l,c,u){i.reason||(i.reason=new Yr(l,c,u),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Cg(function(o){e=o}),cancel:e}}};function _j(t){return function(n){return t.apply(null,n)}}function kj(t){return Y.isObject(t)&&t.isAxiosError===!0}const vd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(vd).forEach(([t,e])=>{vd[e]=t});function Eg(t){const e=new Us(t),n=ag(Us.prototype.request,e);return Y.extend(n,Us.prototype,e,{allOwnKeys:!0}),Y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Eg(Hs(t,o))},n}const Je=Eg(qr);Je.Axios=Us;Je.CanceledError=Yr;Je.CancelToken=Nj;Je.isCancel=bg;Je.VERSION=Sg;Je.toFormData=Vo;Je.AxiosError=we;Je.Cancel=Je.CanceledError;Je.all=function(e){return Promise.all(e)};Je.spread=_j;Je.isAxiosError=kj;Je.mergeConfig=Hs;Je.AxiosHeaders=zt;Je.formToJSON=t=>vg(Y.isHTMLForm(t)?new FormData(t):t);Je.getAdapter=kg.getAdapter;Je.HttpStatusCode=vd;Je.default=Je;const{Axios:Gk,AxiosError:Jk,CanceledError:Zk,isCancel:eS,CancelToken:tS,VERSION:nS,all:sS,Cancel:iS,isAxiosError:rS,spread:aS,toFormData:oS,AxiosHeaders:lS,HttpStatusCode:cS,formToJSON:dS,getAdapter:uS,mergeConfig:hS}=Je,le=Je.create({baseURL:"/api",timeout:3e4});le.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Ms={list:(t=1,e=100,n)=>{let i=`/events?page=${t}&page_size=${e}`;return n&&(n.levels&&n.levels.length>0&&n.levels.forEach(o=>i+=`&levels=${o}`),n.event_ids&&n.event_ids.length>0&&n.event_ids.forEach(o=>i+=`&event_ids=${o}`),n.log_names&&n.log_names.length>0&&n.log_names.forEach(o=>i+=`&log_names=${encodeURIComponent(o)}`),n.sources&&n.sources.length>0&&n.sources.forEach(o=>i+=`&sources=${encodeURIComponent(o)}`),n.users&&n.users.length>0&&n.users.forEach(o=>i+=`&users=${encodeURIComponent(o)}`),n.computers&&n.computers.length>0&&n.computers.forEach(o=>i+=`&computers=${encodeURIComponent(o)}`),n.start_time&&(i+=`&start_time=${encodeURIComponent(n.start_time)}`),n.end_time&&(i+=`&end_time=${encodeURIComponent(n.end_time)}`),n.sort_by&&(i+=`&sort_by=${n.sort_by}`),n.sort_order&&(i+=`&sort_order=${n.sort_order}`)),le.get(i)},get:t=>le.get(`/events/${t}`),search:t=>le.post("/events/search",t),export:t=>le.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},wn={list:(t=1,e=100,n)=>le.get(`/alerts?page=${t}&page_size=${e}${n?`&severity=${n}`:""}`),get:t=>le.get(`/alerts/${t}`),stats:()=>le.get("/alerts/stats"),trend:(t=7)=>le.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>le.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>le.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>le.delete(`/alerts/${t}`),batchAction:(t,e,n)=>le.post("/alerts/batch",{ids:t,action:e,notes:n})},Sj={collect:t=>le.post("/collect",t),getStatus:()=>le.get("/collect/status")},Cj={importLogs:t=>le.post("/import/logs",{files:t}),getStatus:()=>le.get("/import/status")},Ej={getStats:()=>le.get("/live/stats"),streamEvents:(t,e,n)=>{const i=new EventSource("/api/live/events");return i.onmessage=o=>{try{const l=JSON.parse(o.data);l.type==="event"?t(l.data):l.type==="stats"&&e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},i.onerror=o=>{console.error("SSE error:",o),n==null||n(o)},i}},Os={health:()=>le.get("/health"),getInfo:()=>le.get("/system/info"),getMetrics:()=>le.get("/system/metrics"),getProcesses:(t=100)=>le.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>le.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>le.get("/system/env"),getLoadedDLLs:(t=100)=>le.get(`/system/dlls?limit=${t}`),getDrivers:()=>le.get("/system/drivers")},Tn={list:()=>le.get("/rules"),get:t=>le.get(`/rules/${t}`),toggle:(t,e)=>le.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>le.post("/rules/save",t),validate:(t,e)=>le.post("/rules/validate",{rule:t,content:e}),import:t=>le.post("/rules/import",{rules:t}),export:(t="json")=>le.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>le.get("/rules/templates"),getTemplate:t=>le.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>le.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},gr={list:()=>le.get("/reports"),generate:t=>le.post("/reports",t),get:t=>le.get(`/reports/${t}`),export:t=>le.get(`/reports/export?format=${t}`,{responseType:"blob"})},As={calculateHash:t=>le.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>le.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>le.get(`/forensics/signature?path=${t}`),isSigned:t=>le.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>le.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>le.get("/forensics/evidence"),getEvidence:t=>le.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>le.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>le.get("/forensics/chain-of-custody"),memoryDump:t=>le.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},yd={get:(t=200,e,n)=>{let i=`/timeline?limit=${t}`;return e&&(i+=`&start_time=${e}`),n&&(i+=`&end_time=${n}`),le.get(i)},deleteAlert:t=>le.delete(`/timeline/alerts/${t}`)},Rg={getCollectionStats:()=>le.get("/dashboard/collection-stats"),getLogNames:()=>le.get("/dashboard/log-names")},Pg={run:(t,e)=>le.post(`/analyze/${t}`,e||{}),list:()=>le.get("/analyzers"),info:t=>le.get(`/analyzers/${t}`)},Gc={get:()=>le.get("/settings"),save:t=>le.post("/settings",t),reset:()=>le.post("/settings/reset")},Rj={detect:()=>le.get("/persistence/detect"),detectStream:(t,e)=>{const n=new EventSource("/api/persistence/detect/stream");return n.onmessage=i=>{try{const o=JSON.parse(i.data);t(o)}catch(o){console.error("Failed to parse SSE data:",o)}},n.onerror=i=>{console.error("SSE error:",i),e==null||e(i)},n},listCategories:()=>le.get("/persistence/categories"),listTechniques:()=>le.get("/persistence/techniques")},Pj={analyze:t=>le.post("/correlation/analyze",t||{})},Aj={analyze:t=>le.post("/multi/analyze",t||{}),lateral:()=>le.get("/multi/lateral")},Tj={execute:t=>le.post("/query/execute",t)},ro={list:()=>le.get("/suppress"),create:t=>le.post("/suppress",t),update:(t,e)=>le.put(`/suppress/${t}`,e),delete:t=>le.delete(`/suppress/${t}`),toggle:(t,e)=>le.post(`/suppress/${t}/toggle`,{enabled:e})},wp={analyze:t=>le.post("/ueba/analyze",t||{}),profiles:()=>le.get("/ueba/profiles")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Qr(t){return t+.5|0}const us=(t,e,n)=>Math.max(Math.min(t,n),e);function wr(t){return us(Qr(t*2.55),0,255)}function ms(t){return us(Qr(t*255),0,255)}function On(t){return us(Qr(t/2.55)/100,0,1)}function Np(t){return us(Qr(t*100),0,100)}const Jt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},bd=[..."0123456789ABCDEF"],Dj=t=>bd[t&15],Lj=t=>bd[(t&240)>>4]+bd[t&15],ao=t=>(t&240)>>4===(t&15),Mj=t=>ao(t.r)&&ao(t.g)&&ao(t.b)&&ao(t.a);function Oj(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Jt[t[1]]*17,g:255&Jt[t[2]]*17,b:255&Jt[t[3]]*17,a:e===5?Jt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Jt[t[1]]<<4|Jt[t[2]],g:Jt[t[3]]<<4|Jt[t[4]],b:Jt[t[5]]<<4|Jt[t[6]],a:e===9?Jt[t[7]]<<4|Jt[t[8]]:255})),n}const zj=(t,e)=>t<255?e(t):"";function Ij(t){var e=Mj(t)?Dj:Lj;return t?"#"+e(t.r)+e(t.g)+e(t.b)+zj(t.a,e):void 0}const Fj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ag(t,e,n){const i=e*Math.min(n,1-n),o=(l,c=(l+t/30)%12)=>n-i*Math.max(Math.min(c-3,9-c,1),-1);return[o(0),o(8),o(4)]}function Bj(t,e,n){const i=(o,l=(o+t/60)%6)=>n-n*e*Math.max(Math.min(l,4-l,1),0);return[i(5),i(3),i(1)]}function Uj(t,e,n){const i=Ag(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)i[o]*=1-e-n,i[o]+=e;return i}function Wj(t,e,n,i,o){return t===o?(e-n)/i+(e<n?6:0):e===o?(n-t)/i+2:(t-e)/i+4}function Fd(t){const n=t.r/255,i=t.g/255,o=t.b/255,l=Math.max(n,i,o),c=Math.min(n,i,o),u=(l+c)/2;let h,p,g;return l!==c&&(g=l-c,p=u>.5?g/(2-l-c):g/(l+c),h=Wj(n,i,o,g,l),h=h*60+.5),[h|0,p||0,u]}function Bd(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ms)}function Ud(t,e,n){return Bd(Ag,t,e,n)}function $j(t,e,n){return Bd(Uj,t,e,n)}function Hj(t,e,n){return Bd(Bj,t,e,n)}function Tg(t){return(t%360+360)%360}function Vj(t){const e=Fj.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?wr(+e[5]):ms(+e[5]));const o=Tg(+e[2]),l=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?i=$j(o,l,c):e[1]==="hsv"?i=Hj(o,l,c):i=Ud(o,l,c),{r:i[0],g:i[1],b:i[2],a:n}}function qj(t,e){var n=Fd(t);n[0]=Tg(n[0]+e),n=Ud(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Yj(t){if(!t)return;const e=Fd(t),n=e[0],i=Np(e[1]),o=Np(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${o}%, ${On(t.a)})`:`hsl(${n}, ${i}%, ${o}%)`}const _p={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},kp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Qj(){const t={},e=Object.keys(kp),n=Object.keys(_p);let i,o,l,c,u;for(i=0;i<e.length;i++){for(c=u=e[i],o=0;o<n.length;o++)l=n[o],u=u.replace(l,_p[l]);l=parseInt(kp[c],16),t[u]=[l>>16&255,l>>8&255,l&255]}return t}let oo;function Kj(t){oo||(oo=Qj(),oo.transparent=[0,0,0,0]);const e=oo[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Xj=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Gj(t){const e=Xj.exec(t);let n=255,i,o,l;if(e){if(e[7]!==i){const c=+e[7];n=e[8]?wr(c):us(c*255,0,255)}return i=+e[1],o=+e[3],l=+e[5],i=255&(e[2]?wr(i):us(i,0,255)),o=255&(e[4]?wr(o):us(o,0,255)),l=255&(e[6]?wr(l):us(l,0,255)),{r:i,g:o,b:l,a:n}}}function Jj(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${On(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Jc=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,ji=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Zj(t,e,n){const i=ji(On(t.r)),o=ji(On(t.g)),l=ji(On(t.b));return{r:ms(Jc(i+n*(ji(On(e.r))-i))),g:ms(Jc(o+n*(ji(On(e.g))-o))),b:ms(Jc(l+n*(ji(On(e.b))-l))),a:t.a+n*(e.a-t.a)}}function lo(t,e,n){if(t){let i=Fd(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Ud(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Dg(t,e){return t&&Object.assign(e||{},t)}function Sp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ms(t[3]))):(e=Dg(t,{r:0,g:0,b:0,a:1}),e.a=ms(e.a)),e}function e1(t){return t.charAt(0)==="r"?Gj(t):Vj(t)}class Lr{constructor(e){if(e instanceof Lr)return e;const n=typeof e;let i;n==="object"?i=Sp(e):n==="string"&&(i=Oj(e)||Kj(e)||e1(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Dg(this._rgb);return e&&(e.a=On(e.a)),e}set rgb(e){this._rgb=Sp(e)}rgbString(){return this._valid?Jj(this._rgb):void 0}hexString(){return this._valid?Ij(this._rgb):void 0}hslString(){return this._valid?Yj(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,o=e.rgb;let l;const c=n===l?.5:n,u=2*c-1,h=i.a-o.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;l=1-p,i.r=255&p*i.r+l*o.r+.5,i.g=255&p*i.g+l*o.g+.5,i.b=255&p*i.b+l*o.b+.5,i.a=c*i.a+(1-c)*o.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=Zj(this._rgb,e._rgb,n)),this}clone(){return new Lr(this.rgb)}alpha(e){return this._rgb.a=ms(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Qr(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return lo(this._rgb,2,e),this}darken(e){return lo(this._rgb,2,-e),this}saturate(e){return lo(this._rgb,1,e),this}desaturate(e){return lo(this._rgb,1,-e),this}rotate(e){return qj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Dn(){}const t1=(()=>{let t=0;return()=>t++})();function De(t){return t==null}function et(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ce(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function wt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function vn(t,e){return wt(t)?t:e}function _e(t,e){return typeof t>"u"?e:t}const n1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Lg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ue(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Oe(t,e,n,i){let o,l,c;if(et(t))for(l=t.length,o=0;o<l;o++)e.call(n,t[o],o);else if(Ce(t))for(c=Object.keys(t),l=c.length,o=0;o<l;o++)e.call(n,t[c[o]],c[o])}function Po(t,e){let n,i,o,l;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(o=t[n],l=e[n],o.datasetIndex!==l.datasetIndex||o.index!==l.index)return!1;return!0}function Ao(t){if(et(t))return t.map(Ao);if(Ce(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let o=0;for(;o<i;++o)e[n[o]]=Ao(t[n[o]]);return e}return t}function Mg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function s1(t,e,n,i){if(!Mg(t))return;const o=e[t],l=n[t];Ce(o)&&Ce(l)?Mr(o,l,i):e[t]=Ao(l)}function Mr(t,e,n){const i=et(e)?e:[e],o=i.length;if(!Ce(t))return t;n=n||{};const l=n.merger||s1;let c;for(let u=0;u<o;++u){if(c=i[u],!Ce(c))continue;const h=Object.keys(c);for(let p=0,g=h.length;p<g;++p)l(h[p],t,c,n)}return t}function Cr(t,e){return Mr(t,e,{merger:i1})}function i1(t,e,n){if(!Mg(t))return;const i=e[t],o=n[t];Ce(i)&&Ce(o)?Cr(i,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Ao(o))}const Cp={"":t=>t,x:t=>t.x,y:t=>t.y};function r1(t){const e=t.split("."),n=[];let i="";for(const o of e)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function a1(t){const e=r1(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Vs(t,e){return(Cp[e]||(Cp[e]=a1(e)))(t)}function Wd(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Or=t=>typeof t<"u",gs=t=>typeof t=="function",Ep=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function o1(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const ze=Math.PI,Ve=2*ze,l1=Ve+ze,To=Number.POSITIVE_INFINITY,c1=ze/180,it=ze/2,Ts=ze/4,Rp=ze*2/3,Og=Math.log10,Nn=Math.sign;function Er(t,e,n){return Math.abs(t-e)<n}function Pp(t){const e=Math.round(t);t=Er(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Og(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function d1(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((o,l)=>o-l).pop(),e}function u1(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function zr(t){return!u1(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function h1(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function f1(t,e,n){let i,o,l;for(i=0,o=t.length;i<o;i++)l=t[i][n],isNaN(l)||(e.min=Math.min(e.min,l),e.max=Math.max(e.max,l))}function zn(t){return t*(ze/180)}function p1(t){return t*(180/ze)}function Ap(t){if(!wt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function zg(t,e){const n=e.x-t.x,i=e.y-t.y,o=Math.sqrt(n*n+i*i);let l=Math.atan2(i,n);return l<-.5*ze&&(l+=Ve),{angle:l,distance:o}}function jd(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function m1(t,e){return(t-e+l1)%Ve-ze}function $t(t){return(t%Ve+Ve)%Ve}function Ir(t,e,n,i){const o=$t(t),l=$t(e),c=$t(n),u=$t(l-o),h=$t(c-o),p=$t(o-l),g=$t(o-c);return o===l||o===c||i&&l===c||u>h&&p<g}function bt(t,e,n){return Math.max(e,Math.min(n,t))}function g1(t){return bt(t,-32768,32767)}function In(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function $d(t,e,n){n=n||(c=>t[c]<e);let i=t.length-1,o=0,l;for(;i-o>1;)l=o+i>>1,n(l)?o=l:i=l;return{lo:o,hi:i}}const Bs=(t,e,n,i)=>$d(t,n,i?o=>{const l=t[o][e];return l<n||l===n&&t[o+1][e]===n}:o=>t[o][e]<n),x1=(t,e,n)=>$d(t,n,i=>t[i][e]>=n);function v1(t,e,n){let i=0,o=t.length;for(;i<o&&t[i]<e;)i++;for(;o>i&&t[o-1]>n;)o--;return i>0||o<t.length?t.slice(i,o):t}const Ig=["push","pop","shift","splice","unshift"];function y1(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Ig.forEach(n=>{const i="_onData"+Wd(n),o=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...l){const c=o.apply(this,l);return t._chartjs.listeners.forEach(u=>{typeof u[i]=="function"&&u[i](...l)}),c}})})}function Tp(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),!(i.length>0)&&(Ig.forEach(l=>{delete t[l]}),delete t._chartjs)}function Fg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Bg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function Ug(t,e){let n=[],i=!1;return function(...o){n=o,i||(i=!0,Bg.call(window,()=>{i=!1,t.apply(e,n)}))}}function b1(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Hd=t=>t==="start"?"left":t==="end"?"right":"center",vt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,j1=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function w1(t,e,n){const i=e.length;let o=0,l=i;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,g=c.axis,{min:v,max:y,minDefined:w,maxDefined:j}=c.getUserBounds();if(w){if(o=Math.min(Bs(h,g,v).lo,n?i:Bs(e,g,c.getPixelForValue(v)).lo),p){const N=h.slice(0,o+1).reverse().findIndex(b=>!De(b[u.axis]));o-=Math.max(0,N)}o=bt(o,0,i-1)}if(j){let N=Math.max(Bs(h,c.axis,y,!0).hi+1,n?0:Bs(e,g,c.getPixelForValue(y),!0).hi+1);if(p){const b=h.slice(N-1).findIndex(k=>!De(k[u.axis]));N+=Math.max(0,b)}l=bt(N,o,i)-o}else l=i-o}return{start:o,count:l}}function N1(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=o,!0;const l=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,o),l}const co=t=>t===0||t===1,Dp=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ve/n)),Lp=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ve/n)+1,Rr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*it)+1,easeOutSine:t=>Math.sin(t*it),easeInOutSine:t=>-.5*(Math.cos(ze*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>co(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>co(t)?t:Dp(t,.075,.3),easeOutElastic:t=>co(t)?t:Lp(t,.075,.3),easeInOutElastic(t){return co(t)?t:t<.5?.5*Dp(t*2,.1125,.45):.5+.5*Lp(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Rr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Rr.easeInBounce(t*2)*.5:Rr.easeOutBounce(t*2-1)*.5+.5};function Vd(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Mp(t){return Vd(t)?t:new Lr(t)}function Zc(t){return Vd(t)?t:new Lr(t).saturate(.5).darken(.1).hexString()}const _1=["x","y","borderWidth","radius","tension"],k1=["color","borderColor","backgroundColor"];function S1(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:k1},numbers:{type:"number",properties:_1}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function C1(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Op=new Map;function E1(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Op.get(n);return i||(i=new Intl.NumberFormat(t,e),Op.set(n,i)),i}function qd(t,e,n){return E1(e,n).format(t)}const R1={values(t){return et(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let o,l=t;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(o="scientific"),l=P1(t,n)}const c=Og(Math.abs(l)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:o,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),qd(t,i,h)}};function P1(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Wg={formatters:R1};function A1(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Wg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const qs=Object.create(null),wd=Object.create(null);function Pr(t,e){if(!e)return t;const n=e.split(".");for(let i=0,o=n.length;i<o;++i){const l=n[i];t=t[l]||(t[l]=Object.create(null))}return t}function ed(t,e,n){return typeof e=="string"?Mr(Pr(t,e),n):Mr(Pr(t,""),e)}class T1{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>Zc(o.backgroundColor),this.hoverBorderColor=(i,o)=>Zc(o.borderColor),this.hoverColor=(i,o)=>Zc(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return ed(this,e,n)}get(e){return Pr(this,e)}describe(e,n){return ed(wd,e,n)}override(e,n){return ed(qs,e,n)}route(e,n,i,o){const l=Pr(this,e),c=Pr(this,i),u="_"+n;Object.defineProperties(l,{[u]:{value:l[n],writable:!0},[n]:{enumerable:!0,get(){const h=this[u],p=c[o];return Ce(h)?Object.assign({},p,h):_e(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(n=>n(this))}}var Ge=new T1({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[S1,C1,A1]);function D1(t){return!t||De(t.size)||De(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function zp(t,e,n,i,o){let l=e[o];return l||(l=e[o]=t.measureText(o).width,n.push(o)),l>i&&(i=l),i}function Ds(t,e,n){const i=t.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((e-o)*i)/i+o}function Ip(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Nd(t,e,n,i){$g(t,e,n,i,null)}function $g(t,e,n,i,o){let l,c,u,h,p,g,v,y;const w=e.pointStyle,j=e.rotation,N=e.radius;let b=(j||0)*c1;if(w&&typeof w=="object"&&(l=w.toString(),l==="[object HTMLImageElement]"||l==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(b),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(N)||N<=0)){switch(t.beginPath(),w){default:o?t.ellipse(n,i,o/2,N,0,0,Ve):t.arc(n,i,N,0,Ve),t.closePath();break;case"triangle":g=o?o/2:N,t.moveTo(n+Math.sin(b)*g,i-Math.cos(b)*N),b+=Rp,t.lineTo(n+Math.sin(b)*g,i-Math.cos(b)*N),b+=Rp,t.lineTo(n+Math.sin(b)*g,i-Math.cos(b)*N),t.closePath();break;case"rectRounded":p=N*.516,h=N-p,c=Math.cos(b+Ts)*h,v=Math.cos(b+Ts)*(o?o/2-p:h),u=Math.sin(b+Ts)*h,y=Math.sin(b+Ts)*(o?o/2-p:h),t.arc(n-v,i-u,p,b-ze,b-it),t.arc(n+y,i-c,p,b-it,b),t.arc(n+v,i+u,p,b,b+it),t.arc(n-y,i+c,p,b+it,b+ze),t.closePath();break;case"rect":if(!j){h=Math.SQRT1_2*N,g=o?o/2:h,t.rect(n-g,i-h,2*g,2*h);break}b+=Ts;case"rectRot":v=Math.cos(b)*(o?o/2:N),c=Math.cos(b)*N,u=Math.sin(b)*N,y=Math.sin(b)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+y,i-c),t.lineTo(n+v,i+u),t.lineTo(n-y,i+c),t.closePath();break;case"crossRot":b+=Ts;case"cross":v=Math.cos(b)*(o?o/2:N),c=Math.cos(b)*N,u=Math.sin(b)*N,y=Math.sin(b)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c);break;case"star":v=Math.cos(b)*(o?o/2:N),c=Math.cos(b)*N,u=Math.sin(b)*N,y=Math.sin(b)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c),b+=Ts,v=Math.cos(b)*(o?o/2:N),c=Math.cos(b)*N,u=Math.sin(b)*N,y=Math.sin(b)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c);break;case"line":c=o?o/2:Math.cos(b)*N,u=Math.sin(b)*N,t.moveTo(n-c,i-u),t.lineTo(n+c,i+u);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(b)*(o?o/2:N),i+Math.sin(b)*N);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Fr(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Yo(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Qo(t){t.restore()}function L1(t,e,n,i,o){if(!e)return t.lineTo(n.x,n.y);if(o==="middle"){const l=(e.x+n.x)/2;t.lineTo(l,e.y),t.lineTo(l,n.y)}else o==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function M1(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function O1(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),De(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function z1(t,e,n,i,o){if(o.strikethrough||o.underline){const l=t.measureText(i),c=e-l.actualBoundingBoxLeft,u=e+l.actualBoundingBoxRight,h=n-l.actualBoundingBoxAscent,p=n+l.actualBoundingBoxDescent,g=o.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,g),t.lineTo(u,g),t.stroke()}}function I1(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Br(t,e,n,i,o,l={}){const c=et(e)?e:[e],u=l.strokeWidth>0&&l.strokeColor!=="";let h,p;for(t.save(),t.font=o.string,O1(t,l),h=0;h<c.length;++h)p=c[h],l.backdrop&&I1(t,l.backdrop),u&&(l.strokeColor&&(t.strokeStyle=l.strokeColor),De(l.strokeWidth)||(t.lineWidth=l.strokeWidth),t.strokeText(p,n,i,l.maxWidth)),t.fillText(p,n,i,l.maxWidth),z1(t,n,i,p,l),i+=Number(o.lineHeight);t.restore()}function Do(t,e){const{x:n,y:i,w:o,h:l,radius:c}=e;t.arc(n+c.topLeft,i+c.topLeft,c.topLeft,1.5*ze,ze,!0),t.lineTo(n,i+l-c.bottomLeft),t.arc(n+c.bottomLeft,i+l-c.bottomLeft,c.bottomLeft,ze,it,!0),t.lineTo(n+o-c.bottomRight,i+l),t.arc(n+o-c.bottomRight,i+l-c.bottomRight,c.bottomRight,it,0,!0),t.lineTo(n+o,i+c.topRight),t.arc(n+o-c.topRight,i+c.topRight,c.topRight,0,-it,!0),t.lineTo(n+c.topLeft,i)}const F1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,B1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function U1(t,e){const n=(""+t).match(F1);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const W1=t=>+t||0;function Yd(t,e){const n={},i=Ce(e),o=i?Object.keys(e):e,l=Ce(t)?i?c=>_e(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of o)n[c]=W1(l(c));return n}function Hg(t){return Yd(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ni(t){return Yd(t,["topLeft","topRight","bottomLeft","bottomRight"])}function en(t){const e=Hg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function jt(t,e){t=t||{},e=e||Ge.font;let n=_e(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=_e(t.style,e.style);i&&!(""+i).match(B1)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const o={family:_e(t.family,e.family),lineHeight:U1(_e(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:_e(t.weight,e.weight),string:""};return o.string=D1(o),o}function uo(t,e,n,i){let o,l,c;for(o=0,l=t.length;o<l;++o)if(c=t[o],c!==void 0&&c!==void 0)return c}function $1(t,e,n){const{min:i,max:o}=t,l=Lg(e,(o-i)/2),c=(u,h)=>n&&u===0?0:u+h;return{min:c(i,-Math.abs(l)),max:c(o,l)}}function Qs(t,e){return Object.assign(Object.create(t),e)}function Qd(t,e=[""],n,i,o=()=>t[0]){const l=n||t;typeof i>"u"&&(i=Qg("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:l,_fallback:i,_getTarget:o,override:u=>Qd([u,...t],e,l,i)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return qg(u,h,()=>G1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return Bp(u).includes(h)},ownKeys(u){return Bp(u)},set(u,h,p){const g=u._storage||(u._storage=o());return u[h]=g[h]=p,delete u._keys,!0}})}function Si(t,e,n,i){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Vg(t,i),setContext:l=>Si(t,l,n,i),override:l=>Si(t.override(l),e,n,i)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete t[c],!0},get(l,c,u){return qg(l,c,()=>V1(l,c,u))},getOwnPropertyDescriptor(l,c){return l._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(l,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(l,c,u){return t[c]=u,delete l[c],!0}})}function Vg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:i,isScriptable:gs(n)?n:()=>n,isIndexable:gs(i)?i:()=>i}}const H1=(t,e)=>t?t+Wd(e):e,Kd=(t,e)=>Ce(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function qg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function V1(t,e,n){const{_proxy:i,_context:o,_subProxy:l,_descriptors:c}=t;let u=i[e];return gs(u)&&c.isScriptable(e)&&(u=q1(e,u,t,n)),et(u)&&u.length&&(u=Y1(e,u,t,c.isIndexable)),Kd(e,u)&&(u=Si(u,o,l&&l[e],c)),u}function q1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_stack:u}=n;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(l,c||i);return u.delete(t),Kd(t,h)&&(h=Xd(o._scopes,o,t,h)),h}function Y1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_descriptors:u}=n;if(typeof l.index<"u"&&i(t))return e[l.index%e.length];if(Ce(e[0])){const h=e,p=o._scopes.filter(g=>g!==h);e=[];for(const g of h){const v=Xd(p,o,t,g);e.push(Si(v,l,c&&c[t],u))}}return e}function Yg(t,e,n){return gs(t)?t(e,n):t}const Q1=(t,e)=>t===!0?e:typeof t=="string"?Vs(e,t):void 0;function K1(t,e,n,i,o){for(const l of e){const c=Q1(n,l);if(c){t.add(c);const u=Yg(c._fallback,n,o);if(typeof u<"u"&&u!==n&&u!==i)return u}else if(c===!1&&typeof i<"u"&&n!==i)return null}return!1}function Xd(t,e,n,i){const o=e._rootScopes,l=Yg(e._fallback,n,i),c=[...t,...o],u=new Set;u.add(i);let h=Fp(u,c,n,l||n,i);return h===null||typeof l<"u"&&l!==n&&(h=Fp(u,c,l,h,i),h===null)?!1:Qd(Array.from(u),[""],o,l,()=>X1(e,n,i))}function Fp(t,e,n,i,o){for(;n;)n=K1(t,e,n,i,o);return n}function X1(t,e,n){const i=t._getTarget();e in i||(i[e]={});const o=i[e];return et(o)&&Ce(n)?n:o||{}}function G1(t,e,n,i){let o;for(const l of e)if(o=Qg(H1(l,t),n),typeof o<"u")return Kd(t,o)?Xd(n,i,t,o):o}function Qg(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Bp(t){let e=t._keys;return e||(e=t._keys=J1(t._scopes)),e}function J1(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(o=>!o.startsWith("_")))e.add(i);return Array.from(e)}const Z1=Number.EPSILON||1e-14,Ci=(t,e)=>e<t.length&&!t[e].skip&&t[e],Kg=t=>t==="x"?"y":"x";function ew(t,e,n,i){const o=t.skip?e:t,l=e,c=n.skip?e:n,u=jd(l,o),h=jd(c,l);let p=u/(u+h),g=h/(u+h);p=isNaN(p)?0:p,g=isNaN(g)?0:g;const v=i*p,y=i*g;return{previous:{x:l.x-v*(c.x-o.x),y:l.y-v*(c.y-o.y)},next:{x:l.x+y*(c.x-o.x),y:l.y+y*(c.y-o.y)}}}function tw(t,e,n){const i=t.length;let o,l,c,u,h,p=Ci(t,0);for(let g=0;g<i-1;++g)if(h=p,p=Ci(t,g+1),!(!h||!p)){if(Er(e[g],0,Z1)){n[g]=n[g+1]=0;continue}o=n[g]/e[g],l=n[g+1]/e[g],u=Math.pow(o,2)+Math.pow(l,2),!(u<=9)&&(c=3/Math.sqrt(u),n[g]=o*c*e[g],n[g+1]=l*c*e[g])}}function nw(t,e,n="x"){const i=Kg(n),o=t.length;let l,c,u,h=Ci(t,0);for(let p=0;p<o;++p){if(c=u,u=h,h=Ci(t,p+1),!u)continue;const g=u[n],v=u[i];c&&(l=(g-c[n])/3,u[`cp1${n}`]=g-l,u[`cp1${i}`]=v-l*e[p]),h&&(l=(h[n]-g)/3,u[`cp2${n}`]=g+l,u[`cp2${i}`]=v+l*e[p])}}function sw(t,e="x"){const n=Kg(e),i=t.length,o=Array(i).fill(0),l=Array(i);let c,u,h,p=Ci(t,0);for(c=0;c<i;++c)if(u=h,h=p,p=Ci(t,c+1),!!h){if(p){const g=p[e]-h[e];o[c]=g!==0?(p[n]-h[n])/g:0}l[c]=u?p?Nn(o[c-1])!==Nn(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}tw(t,o,l),nw(t,l,e)}function ho(t,e,n){return Math.max(Math.min(t,n),e)}function iw(t,e){let n,i,o,l,c,u=Fr(t[0],e);for(n=0,i=t.length;n<i;++n)c=l,l=u,u=n<i-1&&Fr(t[n+1],e),l&&(o=t[n],c&&(o.cp1x=ho(o.cp1x,e.left,e.right),o.cp1y=ho(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=ho(o.cp2x,e.left,e.right),o.cp2y=ho(o.cp2y,e.top,e.bottom)))}function rw(t,e,n,i,o){let l,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")sw(t,o);else{let p=i?t[t.length-1]:t[0];for(l=0,c=t.length;l<c;++l)u=t[l],h=ew(p,u,t[Math.min(l+1,c-(i?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&iw(t,n)}function Gd(){return typeof window<"u"&&typeof document<"u"}function Jd(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Lo(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Ko=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function aw(t,e){return Ko(t).getPropertyValue(e)}const ow=["top","right","bottom","left"];function Ws(t,e,n){const i={};n=n?"-"+n:"";for(let o=0;o<4;o++){const l=ow[o];i[l]=parseFloat(t[e+"-"+l+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const lw=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function cw(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:o,offsetY:l}=i;let c=!1,u,h;if(lw(o,l,t.target))u=o,h=l;else{const p=e.getBoundingClientRect();u=i.clientX-p.left,h=i.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function zs(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,o=Ko(n),l=o.boxSizing==="border-box",c=Ws(o,"padding"),u=Ws(o,"border","width"),{x:h,y:p,box:g}=cw(t,n),v=c.left+(g&&u.left),y=c.top+(g&&u.top);let{width:w,height:j}=e;return l&&(w-=c.width+u.width,j-=c.height+u.height),{x:Math.round((h-v)/w*n.width/i),y:Math.round((p-y)/j*n.height/i)}}function dw(t,e,n){let i,o;if(e===void 0||n===void 0){const l=t&&Jd(t);if(!l)e=t.clientWidth,n=t.clientHeight;else{const c=l.getBoundingClientRect(),u=Ko(l),h=Ws(u,"border","width"),p=Ws(u,"padding");e=c.width-p.width-h.width,n=c.height-p.height-h.height,i=Lo(u.maxWidth,l,"clientWidth"),o=Lo(u.maxHeight,l,"clientHeight")}}return{width:e,height:n,maxWidth:i||To,maxHeight:o||To}}const hs=t=>Math.round(t*10)/10;function uw(t,e,n,i){const o=Ko(t),l=Ws(o,"margin"),c=Lo(o.maxWidth,t,"clientWidth")||To,u=Lo(o.maxHeight,t,"clientHeight")||To,h=dw(t,e,n);let{width:p,height:g}=h;if(o.boxSizing==="content-box"){const y=Ws(o,"border","width"),w=Ws(o,"padding");p-=w.width+y.width,g-=w.height+y.height}return p=Math.max(0,p-l.width),g=Math.max(0,i?p/i:g-l.height),p=hs(Math.min(p,c,h.maxWidth)),g=hs(Math.min(g,u,h.maxHeight)),p&&!g&&(g=hs(p/2)),(e!==void 0||n!==void 0)&&i&&h.height&&g>h.height&&(g=h.height,p=hs(Math.floor(g*i))),{width:p,height:g}}function Up(t,e,n){const i=e||1,o=hs(t.height*i),l=hs(t.width*i);t.height=hs(t.height),t.width=hs(t.width);const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||c.height!==o||c.width!==l?(t.currentDevicePixelRatio=i,c.height=o,c.width=l,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const hw=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Gd()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Wp(t,e){const n=aw(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Is(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function fw(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function pw(t,e,n,i){const o={x:t.cp2x,y:t.cp2y},l={x:e.cp1x,y:e.cp1y},c=Is(t,o,n),u=Is(o,l,n),h=Is(l,e,n),p=Is(c,u,n),g=Is(u,h,n);return Is(p,g,n)}const mw=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},gw=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function _i(t,e,n){return t?mw(e,n):gw()}function Xg(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Gg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Jg(t){return t==="angle"?{between:Ir,compare:m1,normalize:$t}:{between:In,compare:(e,n)=>e-n,normalize:e=>e}}function $p({start:t,end:e,count:n,loop:i,style:o}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:o}}function xw(t,e,n){const{property:i,start:o,end:l}=n,{between:c,normalize:u}=Jg(i),h=e.length;let{start:p,end:g,loop:v}=t,y,w;if(v){for(p+=h,g+=h,y=0,w=h;y<w&&c(u(e[p%h][i]),o,l);++y)p--,g--;p%=h,g%=h}return g<p&&(g+=h),{start:p,end:g,loop:v,style:t.style}}function Zg(t,e,n){if(!n)return[t];const{property:i,start:o,end:l}=n,c=e.length,{compare:u,between:h,normalize:p}=Jg(i),{start:g,end:v,loop:y,style:w}=xw(t,e,n),j=[];let N=!1,b=null,k,S,A;const z=()=>h(o,A,k)&&u(o,A)!==0,R=()=>u(l,k)===0||h(l,A,k),I=()=>N||z(),L=()=>!N||R();for(let C=g,O=g;C<=v;++C)S=e[C%c],!S.skip&&(k=p(S[i]),k!==A&&(N=h(k,o,l),b===null&&I()&&(b=u(k,o)===0?C:O),b!==null&&L()&&(j.push($p({start:b,end:C,loop:y,count:c,style:w})),b=null),O=C,A=k));return b!==null&&j.push($p({start:b,end:v,loop:y,count:c,style:w})),j}function ex(t,e){const n=[],i=t.segments;for(let o=0;o<i.length;o++){const l=Zg(i[o],t.points,e);l.length&&n.push(...l)}return n}function vw(t,e,n,i){let o=0,l=e-1;if(n&&!i)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(l+=o);l>o&&t[l%e].skip;)l--;return l%=e,{start:o,end:l}}function yw(t,e,n,i){const o=t.length,l=[];let c=e,u=t[e],h;for(h=e+1;h<=n;++h){const p=t[h%o];p.skip||p.stop?u.skip||(i=!1,l.push({start:e%o,end:(h-1)%o,loop:i}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&l.push({start:e%o,end:c%o,loop:i}),l}function bw(t,e){const n=t.points,i=t.options.spanGaps,o=n.length;if(!o)return[];const l=!!t._loop,{start:c,end:u}=vw(n,o,l,i);if(i===!0)return Hp(t,[{start:c,end:u,loop:l}],n,e);const h=u<c?u+o:u,p=!!t._fullLoop&&c===0&&u===o-1;return Hp(t,yw(n,c,h,p),n,e)}function Hp(t,e,n,i){return!i||!i.setContext||!n?e:jw(t,e,n,i)}function jw(t,e,n,i){const o=t._chart.getContext(),l=Vp(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=n.length,p=[];let g=l,v=e[0].start,y=v;function w(j,N,b,k){const S=u?-1:1;if(j!==N){for(j+=h;n[j%h].skip;)j-=S;for(;n[N%h].skip;)N+=S;j%h!==N%h&&(p.push({start:j%h,end:N%h,loop:b,style:k}),g=k,v=N%h)}}for(const j of e){v=u?v:j.start;let N=n[v%h],b;for(y=v+1;y<=j.end;y++){const k=n[y%h];b=Vp(i.setContext(Qs(o,{type:"segment",p0:N,p1:k,p0DataIndex:(y-1)%h,p1DataIndex:y%h,datasetIndex:c}))),ww(b,g)&&w(v,y-1,j.loop,g),N=k,g=b}v<y-1&&w(v,y-1,j.loop,g)}return p}function Vp(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function ww(t,e){if(!e)return!1;const n=[],i=function(o,l){return Vd(l)?(n.includes(l)||n.push(l),n.indexOf(l)):l};return JSON.stringify(t,i)!==JSON.stringify(e,i)}function fo(t,e,n){return t.options.clip?t[n]:e[n]}function Nw(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:fo(n,e,"left"),right:fo(n,e,"right"),top:fo(i,e,"top"),bottom:fo(i,e,"bottom")}:e}function tx(t,e){const n=e._clip;if(n.disabled)return!1;const i=Nw(e,t.chartArea);return{left:n.left===!1?0:i.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:i.right+(n.right===!0?0:n.right),top:n.top===!1?0:i.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:i.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class _w{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,o){const l=n.listeners[o],c=n.duration;l.forEach(u=>u({chart:e,initial:n.initial,numSteps:c,currentStep:Math.min(i-n.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Bg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;const l=i.items;let c=l.length-1,u=!1,h;for(;c>=0;--c)h=l[c],h._active?(h._total>i.duration&&(i.duration=h._total),h.tick(e),u=!0):(l[c]=l[l.length-1],l.pop());u&&(o.draw(),this._notify(o,i,e,"progress")),l.length||(i.running=!1,this._notify(o,i,e,"complete"),i.initial=!1),n+=l.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Ln=new _w;const qp="transparent",kw={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Mp(t||qp),o=i.valid&&Mp(e||qp);return o&&o.valid?o.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Sw{constructor(e,n,i,o){const l=n[i];o=uo([e.to,o,l,e.from]);const c=uo([e.from,l,o]);this._active=!0,this._fn=e.fn||kw[e.type||typeof c],this._easing=Rr[e.easing]||Rr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=c,this._to=o,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const o=this._target[this._prop],l=i-this._start,c=this._duration-l;this._start=i,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=l,this._loop=!!e.loop,this._to=uo([e.to,n,o,e.from]),this._from=uo([e.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,o=this._prop,l=this._from,c=this._loop,u=this._to;let h;if(this._active=l!==u&&(c||n<i),!this._active){this._target[o]=u,this._notify(!0);return}if(n<0){this._target[o]=l;return}h=n/i%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[o]=this._fn(l,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][n]()}}class nx{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Ce(e))return;const n=Object.keys(Ge.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const l=e[o];if(!Ce(l))return;const c={};for(const u of n)c[u]=l[u];(et(l.properties)&&l.properties||[o]).forEach(u=>{(u===o||!i.has(u))&&i.set(u,c)})})}_animateOptions(e,n){const i=n.options,o=Ew(e,i);if(!o)return[];const l=this._createAnimations(o,i);return i.$shared&&Cw(e.options.$animations,i).then(()=>{e.options=i},()=>{}),l}_createAnimations(e,n){const i=this._properties,o=[],l=e.$animations||(e.$animations={}),c=Object.keys(n),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){o.push(...this._animateOptions(e,n));continue}const g=n[p];let v=l[p];const y=i.get(p);if(v)if(y&&v.active()){v.update(y,g,u);continue}else v.cancel();if(!y||!y.duration){e[p]=g;continue}l[p]=v=new Sw(y,e,p,g),o.push(v)}return o}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return Ln.add(this._chart,i),!0}}function Cw(t,e){const n=[],i=Object.keys(e);for(let o=0;o<i.length;o++){const l=t[i[o]];l&&l.active()&&n.push(l.wait())}return Promise.all(n)}function Ew(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Yp(t,e){const n=t&&t.options||{},i=n.reverse,o=n.min===void 0?e:0,l=n.max===void 0?e:0;return{start:i?l:o,end:i?o:l}}function Rw(t,e,n){if(n===!1)return!1;const i=Yp(t,n),o=Yp(e,n);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function Pw(t){let e,n,i,o;return Ce(t)?(e=t.top,n=t.right,i=t.bottom,o=t.left):e=n=i=o=t,{top:e,right:n,bottom:i,left:o,disabled:t===!1}}function sx(t,e){const n=[],i=t._getSortedDatasetMetas(e);let o,l;for(o=0,l=i.length;o<l;++o)n.push(i[o].index);return n}function Qp(t,e,n,i={}){const o=t.keys,l=i.mode==="single";let c,u,h,p;if(e===null)return;let g=!1;for(c=0,u=o.length;c<u;++c){if(h=+o[c],h===n){if(g=!0,i.all)continue;break}p=t.values[h],wt(p)&&(l||e===0||Nn(e)===Nn(p))&&(e+=p)}return!g&&!i.all?0:e}function Aw(t,e){const{iScale:n,vScale:i}=e,o=n.axis==="x"?"x":"y",l=i.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,g;for(h=0,p=c.length;h<p;++h)g=c[h],u[h]={[o]:g,[l]:t[g]};return u}function td(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Tw(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Dw(t){const{min:e,max:n,minDefined:i,maxDefined:o}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function Lw(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Kp(t,e,n,i){for(const o of e.getMatchingVisibleMetas(i).reverse()){const l=t[o.index];if(n&&l>0||!n&&l<0)return o.index}return null}function Xp(t,e){const{chart:n,_cachedMeta:i}=t,o=n._stacks||(n._stacks={}),{iScale:l,vScale:c,index:u}=i,h=l.axis,p=c.axis,g=Tw(l,c,i),v=e.length;let y;for(let w=0;w<v;++w){const j=e[w],{[h]:N,[p]:b}=j,k=j._stacks||(j._stacks={});y=k[p]=Lw(o,g,N),y[u]=b,y._top=Kp(y,c,!0,i.type),y._bottom=Kp(y,c,!1,i.type);const S=y._visualValues||(y._visualValues={});S[u]=b}}function nd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Mw(t,e){return Qs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Ow(t,e,n){return Qs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function xr(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const o of e){const l=o._stacks;if(!l||l[i]===void 0||l[i][n]===void 0)return;delete l[i][n],l[i]._visualValues!==void 0&&l[i]._visualValues[n]!==void 0&&delete l[i]._visualValues[n]}}}const sd=t=>t==="reset"||t==="none",Gp=(t,e)=>e?t:Object.assign({},t),zw=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:sx(n,!0),values:null};class $s{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=td(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&xr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),o=(v,y,w,j)=>v==="x"?y:v==="r"?j:w,l=n.xAxisID=_e(i.xAxisID,nd(e,"x")),c=n.yAxisID=_e(i.yAxisID,nd(e,"y")),u=n.rAxisID=_e(i.rAxisID,nd(e,"r")),h=n.indexAxis,p=n.iAxisID=o(h,l,c,u),g=n.vAxisID=o(h,c,l,u);n.xScale=this.getScaleForId(l),n.yScale=this.getScaleForId(c),n.rScale=this.getScaleForId(u),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(g)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Tp(this._data,this),e._stacked&&xr(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Ce(n)){const o=this._cachedMeta;this._data=Aw(n,o)}else if(i!==n){if(i){Tp(i,this);const o=this._cachedMeta;xr(o),o._parsed=[]}n&&Object.isExtensible(n)&&y1(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const l=n._stacked;n._stacked=td(n.vScale,n),n.stack!==i.stack&&(o=!0,xr(n),n.stack=i.stack),this._resyncElements(e),(o||l!==n._stacked)&&(Xp(this,n._parsed),n._stacked=td(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:o}=this,{iScale:l,_stacked:c}=i,u=l.axis;let h=e===0&&n===o.length?!0:i._sorted,p=e>0&&i._parsed[e-1],g,v,y;if(this._parsing===!1)i._parsed=o,i._sorted=!0,y=o;else{et(o[e])?y=this.parseArrayData(i,o,e,n):Ce(o[e])?y=this.parseObjectData(i,o,e,n):y=this.parsePrimitiveData(i,o,e,n);const w=()=>v[u]===null||p&&v[u]<p[u];for(g=0;g<n;++g)i._parsed[g+e]=v=y[g],h&&(w()&&(h=!1),p=v);i._sorted=h}c&&Xp(this,y)}parsePrimitiveData(e,n,i,o){const{iScale:l,vScale:c}=e,u=l.axis,h=c.axis,p=l.getLabels(),g=l===c,v=new Array(o);let y,w,j;for(y=0,w=o;y<w;++y)j=y+i,v[y]={[u]:g||l.parse(p[j],j),[h]:c.parse(n[j],j)};return v}parseArrayData(e,n,i,o){const{xScale:l,yScale:c}=e,u=new Array(o);let h,p,g,v;for(h=0,p=o;h<p;++h)g=h+i,v=n[g],u[h]={x:l.parse(v[0],g),y:c.parse(v[1],g)};return u}parseObjectData(e,n,i,o){const{xScale:l,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(o);let g,v,y,w;for(g=0,v=o;g<v;++g)y=g+i,w=n[y],p[g]={x:l.parse(Vs(w,u),y),y:c.parse(Vs(w,h),y)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const o=this.chart,l=this._cachedMeta,c=n[e.axis],u={keys:sx(o,!0),values:n._stacks[e.axis]._visualValues};return Qp(u,c,l.index,{mode:i})}updateRangeFromParsed(e,n,i,o){const l=i[n.axis];let c=l===null?NaN:l;const u=o&&i._stacks[n.axis];o&&u&&(o.values=u,c=Qp(o,l,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,n){const i=this._cachedMeta,o=i._parsed,l=i._sorted&&e===i.iScale,c=o.length,u=this._getOtherScale(e),h=zw(n,i,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:g,max:v}=Dw(u);let y,w;function j(){w=o[y];const N=w[u.axis];return!wt(w[e.axis])||g>N||v<N}for(y=0;y<c&&!(!j()&&(this.updateRangeFromParsed(p,e,w,h),l));++y);if(l){for(y=c-1;y>=0;--y)if(!j()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let o,l,c;for(o=0,l=n.length;o<l;++o)c=n[o][e.axis],wt(c)&&i.push(c);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,o=n.vScale,l=this.getParsed(e);return{label:i?""+i.getLabelForValue(l[i.axis]):"",value:o?""+o.getLabelForValue(l[o.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Pw(_e(this.options.clip,Rw(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,o=i.data||[],l=n.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||o.length-u,p=this.options.drawActiveElementsOnTop;let g;for(i.dataset&&i.dataset.draw(e,l,u,h),g=u;g<u+h;++g){const v=o[g];v.hidden||(v.active&&p?c.push(v):v.draw(e,l))}for(g=0;g<c.length;++g)c[g].draw(e,l)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const o=this.getDataset();let l;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];l=c.$context||(c.$context=Ow(this.getContext(),e,c)),l.parsed=this.getParsed(e),l.raw=o.data[e],l.index=l.dataIndex=e}else l=this.$context||(this.$context=Mw(this.chart.getContext(),this.index)),l.dataset=o,l.index=l.datasetIndex=this.index;return l.active=!!n,l.mode=i,l}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const o=n==="active",l=this._cachedDataOpts,c=e+"-"+n,u=l[c],h=this.enableOptionSharing&&Or(i);if(u)return Gp(u,h);const p=this.chart.config,g=p.datasetElementScopeKeys(this._type,e),v=o?[`${e}Hover`,"hover",e,""]:[e,""],y=p.getOptionScopes(this.getDataset(),g),w=Object.keys(Ge.elements[e]),j=()=>this.getContext(i,o,n),N=p.resolveNamedOptions(y,w,j,v);return N.$shared&&(N.$shared=h,l[c]=Object.freeze(Gp(N,h))),N}_resolveAnimations(e,n,i){const o=this.chart,l=this._cachedDataOpts,c=`animation-${n}`,u=l[c];if(u)return u;let h;if(o.options.animation!==!1){const g=this.chart.config,v=g.datasetAnimationScopeKeys(this._type,n),y=g.getOptionScopes(this.getDataset(),v);h=g.createResolver(y,this.getContext(e,i,n))}const p=new nx(o,h&&h.animations);return h&&h._cacheable&&(l[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||sd(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),o=this._sharedOptions,l=this.getSharedOptions(i),c=this.includeOptions(n,l)||l!==o;return this.updateSharedOptions(l,n,i),{sharedOptions:l,includeOptions:c}}updateElement(e,n,i,o){sd(o)?Object.assign(e,i):this._resolveAnimations(n,o).update(e,i)}updateSharedOptions(e,n,i){e&&!sd(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,o){e.active=o;const l=this.getStyle(n,o);this._resolveAnimations(n,i,o).update(e,{options:!o&&this.getSharedOptions(l)||l})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const o=i.length,l=n.length,c=Math.min(l,o);c&&this.parse(0,c),l>o?this._insertElements(o,l-o,e):l<o&&this._removeElements(l,o-l)}_insertElements(e,n,i=!0){const o=this._cachedMeta,l=o.data,c=e+n;let u;const h=p=>{for(p.length+=n,u=p.length-1;u>=c;u--)p[u]=p[u-n]};for(h(l),u=e;u<c;++u)l[u]=new this.dataElementType;this._parsing&&h(o._parsed),this.parse(e,n),i&&this.updateElements(l,e,n,"reset")}updateElements(e,n,i,o){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(e,n);i._stacked&&xr(i,o)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,o]=e;this[n](i,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}me($s,"defaults",{}),me($s,"datasetElementType",null),me($s,"dataElementType",null);function Iw(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let o=0,l=n.length;o<l;o++)i=i.concat(n[o].controller.getAllParsedValues(t));t._cache.$bar=Fg(i.sort((o,l)=>o-l))}return t._cache.$bar}function Fw(t){const e=t.iScale,n=Iw(e,t.type);let i=e._length,o,l,c,u;const h=()=>{c===32767||c===-32768||(Or(u)&&(i=Math.min(i,Math.abs(c-u)||i)),u=c)};for(o=0,l=n.length;o<l;++o)c=e.getPixelForValue(n[o]),h();for(u=void 0,o=0,l=e.ticks.length;o<l;++o)c=e.getPixelForTick(o),h();return i}function Bw(t,e,n,i){const o=n.barThickness;let l,c;return De(o)?(l=e.min*n.categoryPercentage,c=n.barPercentage):(l=o*i,c=1),{chunk:l/i,ratio:c,start:e.pixels[t]-l/2}}function Uw(t,e,n,i){const o=e.pixels,l=o[t];let c=t>0?o[t-1]:null,u=t<o.length-1?o[t+1]:null;const h=n.categoryPercentage;c===null&&(c=l-(u===null?e.end-e.start:u-l)),u===null&&(u=l+l-c);const p=l-(l-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/i,ratio:n.barPercentage,start:p}}function Ww(t,e,n,i){const o=n.parse(t[0],i),l=n.parse(t[1],i),c=Math.min(o,l),u=Math.max(o,l);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[n.axis]=p,e._custom={barStart:h,barEnd:p,start:o,end:l,min:c,max:u}}function ix(t,e,n,i){return et(t)?Ww(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Jp(t,e,n,i){const o=t.iScale,l=t.vScale,c=o.getLabels(),u=o===l,h=[];let p,g,v,y;for(p=n,g=n+i;p<g;++p)y=e[p],v={},v[o.axis]=u||o.parse(c[p],p),h.push(ix(y,v,l,p));return h}function id(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function $w(t,e,n){return t!==0?Nn(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function Hw(t){let e,n,i,o,l;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(o="end",l="start"):(o="start",l="end"),{start:n,end:i,reverse:e,top:o,bottom:l}}function Vw(t,e,n,i){let o=e.borderSkipped;const l={};if(!o){t.borderSkipped=l;return}if(o===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:g}=Hw(t);o==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?o=p:(n._bottom||0)===i?o=g:(l[Zp(g,c,u,h)]=!0,o=p)),l[Zp(o,c,u,h)]=!0,t.borderSkipped=l}function Zp(t,e,n,i){return i?(t=qw(t,e,n),t=em(t,n,e)):t=em(t,e,n),t}function qw(t,e,n){return t===e?n:t===n?e:t}function em(t,e,n){return t==="start"?e:t==="end"?n:t}function Yw(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class No extends $s{parsePrimitiveData(e,n,i,o){return Jp(e,n,i,o)}parseArrayData(e,n,i,o){return Jp(e,n,i,o)}parseObjectData(e,n,i,o){const{iScale:l,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=l.axis==="x"?u:h,g=c.axis==="x"?u:h,v=[];let y,w,j,N;for(y=i,w=i+o;y<w;++y)N=n[y],j={},j[l.axis]=l.parse(Vs(N,p),y),v.push(ix(Vs(N,g),j,c,y));return v}updateRangeFromParsed(e,n,i,o){super.updateRangeFromParsed(e,n,i,o);const l=i._custom;l&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,l.min),e.max=Math.max(e.max,l.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:o}=n,l=this.getParsed(e),c=l._custom,u=id(c)?"["+c.start+", "+c.end+"]":""+o.getLabelForValue(l[o.axis]);return{label:""+i.getLabelForValue(l[i.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,o){const l=o==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),g=this._getRuler(),{sharedOptions:v,includeOptions:y}=this._getSharedOptions(n,o);for(let w=n;w<n+i;w++){const j=this.getParsed(w),N=l||De(j[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),b=this._calculateBarIndexPixels(w,g),k=(j._stacks||{})[u.axis],S={horizontal:p,base:N.base,enableBorderRadius:!k||id(j._custom)||c===k._top||c===k._bottom,x:p?N.head:b.center,y:p?b.center:N.head,height:p?b.size:Math.abs(N.size),width:p?Math.abs(N.size):b.size};y&&(S.options=v||this.resolveDataElementOptions(w,e[w].active?"active":o));const A=S.options||e[w].options;Vw(S,A,k,c),Yw(S,A,g.ratio),this.updateElement(e[w],w,S,o)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(g=>g.controller.options.grouped),l=i.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(n),h=u&&u[i.axis],p=g=>{const v=g._parsed.find(w=>w[i.axis]===h),y=v&&v[g.vScale.axis];if(De(y)||isNaN(y))return!0};for(const g of o)if(!(n!==void 0&&p(g))&&((l===!1||c.indexOf(g.stack)===-1||l===void 0&&g.stack===void 0)&&c.push(g.stack),g.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(i=>e[i].axis===n).shift()}_getAxis(){const e={},n=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)e[_e(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,i){const o=this._getStacks(e,i),l=n!==void 0?o.indexOf(n):-1;return l===-1?o.length-1:l}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,o=[];let l,c;for(l=0,c=n.data.length;l<c;++l)o.push(i.getPixelForValue(this.getParsed(l)[i.axis],l));const u=e.barThickness;return{min:u||Fw(n),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:o},options:{base:l,minBarLength:c}}=this,u=l||0,h=this.getParsed(e),p=h._custom,g=id(p);let v=h[n.axis],y=0,w=i?this.applyStack(n,h,i):v,j,N;w!==v&&(y=w-v,w=v),g&&(v=p.barStart,w=p.barEnd-p.barStart,v!==0&&Nn(v)!==Nn(p.barEnd)&&(y=0),y+=v);const b=!De(l)&&!g?l:y;let k=n.getPixelForValue(b);if(this.chart.getDataVisibility(e)?j=n.getPixelForValue(y+w):j=k,N=j-k,Math.abs(N)<c){N=$w(N,n,u)*c,v===u&&(k-=N/2);const S=n.getPixelForDecimal(0),A=n.getPixelForDecimal(1),z=Math.min(S,A),R=Math.max(S,A);k=Math.max(Math.min(k,R),z),j=k+N,i&&!g&&(h._stacks[n.axis]._visualValues[o]=n.getValueForPixel(j)-n.getValueForPixel(k))}if(k===n.getPixelForValue(u)){const S=Nn(N)*n.getLineWidthForValue(u)/2;k+=S,N-=S}return{size:N,base:k,head:j,center:j+N/2}}_calculateBarIndexPixels(e,n){const i=n.scale,o=this.options,l=o.skipNull,c=_e(o.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(n.grouped){const g=l?this._getStackCount(e):n.stackCount,v=o.barThickness==="flex"?Uw(e,n,o,g*p):Bw(e,n,o,g*p),y=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(_e(y,this.getFirstScaleIdForIndexAxis())),j=this._getStackIndex(this.index,this._cachedMeta.stack,l?e:void 0)+w;u=v.start+v.chunk*j+v.chunk/2,h=Math.min(c,v.chunk*v.ratio)}else u=i.getPixelForValue(this.getParsed(e)[i.axis],e),h=Math.min(c,n.min*n.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,o=i.length;let l=0;for(;l<o;++l)this.getParsed(l)[n.axis]!==null&&!i[l].hidden&&i[l].draw(this._ctx)}}me(No,"id","bar"),me(No,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),me(No,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function Qw(t,e,n){let i=1,o=1,l=0,c=0;if(e<Ve){const u=t,h=u+e,p=Math.cos(u),g=Math.sin(u),v=Math.cos(h),y=Math.sin(h),w=(A,z,R)=>Ir(A,u,h,!0)?1:Math.max(z,z*n,R,R*n),j=(A,z,R)=>Ir(A,u,h,!0)?-1:Math.min(z,z*n,R,R*n),N=w(0,p,v),b=w(it,g,y),k=j(ze,p,v),S=j(ze+it,g,y);i=(N-k)/2,o=(b-S)/2,l=-(N+k)/2,c=-(b+S)/2}return{ratioX:i,ratioY:o,offsetX:l,offsetY:c}}class Nr extends $s{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=i;else{let l=h=>+i[h];if(Ce(i[e])){const{key:h="value"}=this._parsing;l=p=>+Vs(i[p],h)}let c,u;for(c=e,u=e+n;c<u;++c)o._parsed[c]=l(c)}}_getRotation(){return zn(this.options.rotation-90)}_getCircumference(){return zn(this.options.circumference)}_getRotationExtents(){let e=Ve,n=-Ve;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const o=this.chart.getDatasetMeta(i).controller,l=o._getRotation(),c=o._getCircumference();e=Math.min(e,l),n=Math.max(n,l+c)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,o=this._cachedMeta,l=o.data,c=this.getMaxBorderWidth()+this.getMaxOffset(l)+this.options.spacing,u=Math.max((Math.min(i.width,i.height)-c)/2,0),h=Math.min(n1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:g,rotation:v}=this._getRotationExtents(),{ratioX:y,ratioY:w,offsetX:j,offsetY:N}=Qw(v,g,h),b=(i.width-c)/y,k=(i.height-c)/w,S=Math.max(Math.min(b,k)/2,0),A=Lg(this.options.radius,S),z=Math.max(A*h,0),R=(A-z)/this._getVisibleDatasetWeightTotal();this.offsetX=j*A,this.offsetY=N*A,o.total=this.calculateTotal(),this.outerRadius=A-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*p,0),this.updateElements(l,0,l.length,e)}_circumference(e,n){const i=this.options,o=this._cachedMeta,l=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||o._parsed[e]===null||o.data[e].hidden?0:this.calculateCircumference(o._parsed[e]*l/Ve)}updateElements(e,n,i,o){const l=o==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,g=(u.left+u.right)/2,v=(u.top+u.bottom)/2,y=l&&p.animateScale,w=y?0:this.innerRadius,j=y?0:this.outerRadius,{sharedOptions:N,includeOptions:b}=this._getSharedOptions(n,o);let k=this._getRotation(),S;for(S=0;S<n;++S)k+=this._circumference(S,l);for(S=n;S<n+i;++S){const A=this._circumference(S,l),z=e[S],R={x:g+this.offsetX,y:v+this.offsetY,startAngle:k,endAngle:k+A,circumference:A,outerRadius:j,innerRadius:w};b&&(R.options=N||this.resolveDataElementOptions(S,z.active?"active":o)),k+=A,this.updateElement(z,S,R,o)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,o;for(o=0;o<n.length;o++){const l=e._parsed[o];l!==null&&!isNaN(l)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(i+=Math.abs(l))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Ve*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,o=i.data.labels||[],l=qd(n._parsed[e],i.options.locale);return{label:o[e]||"",value:l}}getMaxBorderWidth(e){let n=0;const i=this.chart;let o,l,c,u,h;if(!e){for(o=0,l=i.data.datasets.length;o<l;++o)if(i.isDatasetVisible(o)){c=i.getDatasetMeta(o),e=c.data,u=c.controller;break}}if(!e)return 0;for(o=0,l=e.length;o<l;++o)h=u.resolveDataElementOptions(o),h.borderAlign!=="inner"&&(n=Math.max(n,h.borderWidth||0,h.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,o=e.length;i<o;++i){const l=this.resolveDataElementOptions(i);n=Math.max(n,l.offset||0,l.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(_e(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}me(Nr,"id","doughnut"),me(Nr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),me(Nr,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),me(Nr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data,{labels:{pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=e.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((h,p)=>{const v=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:v.backgroundColor,fontColor:l,hidden:!e.getDataVisibility(p),lineDash:v.borderDash,lineDashOffset:v.borderDashOffset,lineJoin:v.borderJoinStyle,lineWidth:v.borderWidth,strokeStyle:v.borderColor,textAlign:o,pointStyle:i,borderRadius:c&&(u||v.borderRadius),index:p}}):[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class _o extends $s{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:o=[],_dataset:l}=n,c=this.chart._animationsDisabled;let{start:u,count:h}=w1(n,o,c);this._drawStart=u,this._drawCount=h,N1(n)&&(u=0,h=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!l._decimated,i.points=o;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(i,void 0,{animated:!c,options:p},e),this.updateElements(o,u,h,e)}updateElements(e,n,i,o){const l=o==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:g,includeOptions:v}=this._getSharedOptions(n,o),y=c.axis,w=u.axis,{spanGaps:j,segment:N}=this.options,b=zr(j)?j:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||l||o==="none",S=n+i,A=e.length;let z=n>0&&this.getParsed(n-1);for(let R=0;R<A;++R){const I=e[R],L=k?I:{};if(R<n||R>=S){L.skip=!0;continue}const C=this.getParsed(R),O=De(C[w]),H=L[y]=c.getPixelForValue(C[y],R),X=L[w]=l||O?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,C,h):C[w],R);L.skip=isNaN(H)||isNaN(X)||O,L.stop=R>0&&Math.abs(C[y]-z[y])>b,N&&(L.parsed=C,L.raw=p.data[R]),v&&(L.options=g||this.resolveDataElementOptions(R,I.active?"active":o)),k||this.updateElement(I,R,L,o),z=C}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,o=e.data||[];if(!o.length)return i;const l=o[0].size(this.resolveDataElementOptions(0)),c=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,l,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}me(_o,"id","line"),me(_o,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),me(_o,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Ls(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Zd{constructor(e){me(this,"options");this.options=e||{}}static override(e){Object.assign(Zd.prototype,e)}init(){}formats(){return Ls()}parse(){return Ls()}format(){return Ls()}add(){return Ls()}diff(){return Ls()}startOf(){return Ls()}endOf(){return Ls()}}var Kw={_date:Zd};function Xw(t,e,n,i){const{controller:o,data:l,_sorted:c}=t,u=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&l.length){const p=u._reversePixels?x1:Bs;if(i){if(o._sharedOptions){const g=l[0],v=typeof g.getRange=="function"&&g.getRange(e);if(v){const y=p(l,e,n-v),w=p(l,e,n+v);return{lo:y.lo,hi:w.hi}}}}else{const g=p(l,e,n);if(h){const{vScale:v}=o._cachedMeta,{_parsed:y}=t,w=y.slice(0,g.lo+1).reverse().findIndex(N=>!De(N[v.axis]));g.lo-=Math.max(0,w);const j=y.slice(g.hi).findIndex(N=>!De(N[v.axis]));g.hi+=Math.max(0,j)}return g}}return{lo:0,hi:l.length-1}}function Xo(t,e,n,i,o){const l=t.getSortedVisibleDatasetMetas(),c=n[e];for(let u=0,h=l.length;u<h;++u){const{index:p,data:g}=l[u],{lo:v,hi:y}=Xw(l[u],e,c,o);for(let w=v;w<=y;++w){const j=g[w];j.skip||i(j,p,w)}}}function Gw(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,o){const l=e?Math.abs(i.x-o.x):0,c=n?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(l,2)+Math.pow(c,2))}}function rd(t,e,n,i,o){const l=[];return!o&&!t.isPointInArea(e)||Xo(t,n,e,function(u,h,p){!o&&!Fr(u,t.chartArea,0)||u.inRange(e.x,e.y,i)&&l.push({element:u,datasetIndex:h,index:p})},!0),l}function Jw(t,e,n,i){let o=[];function l(c,u,h){const{startAngle:p,endAngle:g}=c.getProps(["startAngle","endAngle"],i),{angle:v}=zg(c,{x:e.x,y:e.y});Ir(v,p,g)&&o.push({element:c,datasetIndex:u,index:h})}return Xo(t,n,e,l),o}function Zw(t,e,n,i,o,l){let c=[];const u=Gw(n);let h=Number.POSITIVE_INFINITY;function p(g,v,y){const w=g.inRange(e.x,e.y,o);if(i&&!w)return;const j=g.getCenterPoint(o);if(!(!!l||t.isPointInArea(j))&&!w)return;const b=u(e,j);b<h?(c=[{element:g,datasetIndex:v,index:y}],h=b):b===h&&c.push({element:g,datasetIndex:v,index:y})}return Xo(t,n,e,p),c}function ad(t,e,n,i,o,l){return!l&&!t.isPointInArea(e)?[]:n==="r"&&!i?Jw(t,e,n,o):Zw(t,e,n,i,o,l)}function tm(t,e,n,i,o){const l=[],c=n==="x"?"inXRange":"inYRange";let u=!1;return Xo(t,n,e,(h,p,g)=>{h[c]&&h[c](e[n],o)&&(l.push({element:h,datasetIndex:p,index:g}),u=u||h.inRange(e.x,e.y,o))}),i&&!u?[]:l}var eN={modes:{index(t,e,n,i){const o=zs(e,t),l=n.axis||"x",c=n.includeInvisible||!1,u=n.intersect?rd(t,o,l,i,c):ad(t,o,l,!1,i,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const g=u[0].index,v=p.data[g];v&&!v.skip&&h.push({element:v,datasetIndex:p.index,index:g})}),h):[]},dataset(t,e,n,i){const o=zs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;let u=n.intersect?rd(t,o,l,i,c):ad(t,o,l,!1,i,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let g=0;g<p.length;++g)u.push({element:p[g],datasetIndex:h,index:g})}return u},point(t,e,n,i){const o=zs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return rd(t,o,l,i,c)},nearest(t,e,n,i){const o=zs(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return ad(t,o,l,n.intersect,i,c)},x(t,e,n,i){const o=zs(e,t);return tm(t,o,"x",n.intersect,i)},y(t,e,n,i){const o=zs(e,t);return tm(t,o,"y",n.intersect,i)}}};const rx=["left","top","right","bottom"];function vr(t,e){return t.filter(n=>n.pos===e)}function nm(t,e){return t.filter(n=>rx.indexOf(n.pos)===-1&&n.box.axis===e)}function yr(t,e){return t.sort((n,i)=>{const o=e?i:n,l=e?n:i;return o.weight===l.weight?o.index-l.index:o.weight-l.weight})}function tN(t){const e=[];let n,i,o,l,c,u;for(n=0,i=(t||[]).length;n<i;++n)o=t[n],{position:l,options:{stack:c,stackWeight:u=1}}=o,e.push({index:n,box:o,pos:l,horizontal:o.isHorizontal(),weight:o.weight,stack:c&&l+c,stackWeight:u});return e}function nN(t){const e={};for(const n of t){const{stack:i,pos:o,stackWeight:l}=n;if(!i||!rx.includes(o))continue;const c=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=l}return e}function sN(t,e){const n=nN(t),{vBoxMaxWidth:i,hBoxMaxHeight:o}=e;let l,c,u;for(l=0,c=t.length;l<c;++l){u=t[l];const{fullSize:h}=u.box,p=n[u.stack],g=p&&u.stackWeight/p.weight;u.horizontal?(u.width=g?g*i:h&&e.availableWidth,u.height=o):(u.width=i,u.height=g?g*o:h&&e.availableHeight)}return n}function iN(t){const e=tN(t),n=yr(e.filter(p=>p.box.fullSize),!0),i=yr(vr(e,"left"),!0),o=yr(vr(e,"right")),l=yr(vr(e,"top"),!0),c=yr(vr(e,"bottom")),u=nm(e,"x"),h=nm(e,"y");return{fullSize:n,leftAndTop:i.concat(l),rightAndBottom:o.concat(h).concat(c).concat(u),chartArea:vr(e,"chartArea"),vertical:i.concat(o).concat(h),horizontal:l.concat(c).concat(u)}}function sm(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ax(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function rN(t,e,n,i){const{pos:o,box:l}=n,c=t.maxPadding;if(!Ce(o)){n.size&&(t[o]-=n.size);const v=i[n.stack]||{size:0,count:1};v.size=Math.max(v.size,n.horizontal?l.height:l.width),n.size=v.size/v.count,t[o]+=n.size}l.getPadding&&ax(c,l.getPadding());const u=Math.max(0,e.outerWidth-sm(c,t,"left","right")),h=Math.max(0,e.outerHeight-sm(c,t,"top","bottom")),p=u!==t.w,g=h!==t.h;return t.w=u,t.h=h,n.horizontal?{same:p,other:g}:{same:g,other:p}}function aN(t){const e=t.maxPadding;function n(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function oN(t,e){const n=e.maxPadding;function i(o){const l={left:0,top:0,right:0,bottom:0};return o.forEach(c=>{l[c]=Math.max(e[c],n[c])}),l}return i(t?["left","right"]:["top","bottom"])}function _r(t,e,n,i){const o=[];let l,c,u,h,p,g;for(l=0,c=t.length,p=0;l<c;++l){u=t[l],h=u.box,h.update(u.width||e.w,u.height||e.h,oN(u.horizontal,e));const{same:v,other:y}=rN(e,n,u,i);p|=v&&o.length,g=g||y,h.fullSize||o.push(u)}return p&&_r(o,e,n,i)||g}function po(t,e,n,i,o){t.top=n,t.left=e,t.right=e+i,t.bottom=n+o,t.width=i,t.height=o}function im(t,e,n,i){const o=n.padding;let{x:l,y:c}=e;for(const u of t){const h=u.box,p=i[u.stack]||{placed:0,weight:1},g=u.stackWeight/p.weight||1;if(u.horizontal){const v=e.w*g,y=p.size||h.height;Or(p.start)&&(c=p.start),h.fullSize?po(h,o.left,c,n.outerWidth-o.right-o.left,y):po(h,e.left+p.placed,c,v,y),p.start=c,p.placed+=v,c=h.bottom}else{const v=e.h*g,y=p.size||h.width;Or(p.start)&&(l=p.start),h.fullSize?po(h,l,o.top,y,n.outerHeight-o.bottom-o.top):po(h,l,e.top+p.placed,y,v),p.start=l,p.placed+=v,l=h.right}}e.x=l,e.y=c}var Zt={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const o=en(t.options.layout.padding),l=Math.max(e-o.width,0),c=Math.max(n-o.height,0),u=iN(t.boxes),h=u.vertical,p=u.horizontal;Oe(t.boxes,N=>{typeof N.beforeLayout=="function"&&N.beforeLayout()});const g=h.reduce((N,b)=>b.box.options&&b.box.options.display===!1?N:N+1,0)||1,v=Object.freeze({outerWidth:e,outerHeight:n,padding:o,availableWidth:l,availableHeight:c,vBoxMaxWidth:l/2/g,hBoxMaxHeight:c/2}),y=Object.assign({},o);ax(y,en(i));const w=Object.assign({maxPadding:y,w:l,h:c,x:o.left,y:o.top},o),j=sN(h.concat(p),v);_r(u.fullSize,w,v,j),_r(h,w,v,j),_r(p,w,v,j)&&_r(h,w,v,j),aN(w),im(u.leftAndTop,w,v,j),w.x+=w.w,w.y+=w.h,im(u.rightAndBottom,w,v,j),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Oe(u.chartArea,N=>{const b=N.box;Object.assign(b,t.chartArea),b.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class ox{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,o){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,o?Math.floor(n/o):i)}}isAttached(e){return!0}updateConfig(e){}}class lN extends ox{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ko="$chartjs",cN={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},rm=t=>t===null||t==="";function dN(t,e){const n=t.style,i=t.getAttribute("height"),o=t.getAttribute("width");if(t[ko]={initial:{height:i,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",rm(o)){const l=Wp(t,"width");l!==void 0&&(t.width=l)}if(rm(i))if(t.style.height==="")t.height=t.width/(e||2);else{const l=Wp(t,"height");l!==void 0&&(t.height=l)}return t}const lx=hw?{passive:!0}:!1;function uN(t,e,n){t&&t.addEventListener(e,n,lx)}function hN(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,lx)}function fN(t,e){const n=cN[t.type]||t.type,{x:i,y:o}=zs(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:o!==void 0?o:null}}function Mo(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function pN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Mo(u.addedNodes,i),c=c&&!Mo(u.removedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function mN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Mo(u.removedNodes,i),c=c&&!Mo(u.addedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const Ur=new Map;let am=0;function cx(){const t=window.devicePixelRatio;t!==am&&(am=t,Ur.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function gN(t,e){Ur.size||window.addEventListener("resize",cx),Ur.set(t,e)}function xN(t){Ur.delete(t),Ur.size||window.removeEventListener("resize",cx)}function vN(t,e,n){const i=t.canvas,o=i&&Jd(i);if(!o)return;const l=Ug((u,h)=>{const p=o.clientWidth;n(u,h),p<o.clientWidth&&n()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,g=h.contentRect.height;p===0&&g===0||l(p,g)});return c.observe(o),gN(t,l),c}function od(t,e,n){n&&n.disconnect(),e==="resize"&&xN(t)}function yN(t,e,n){const i=t.canvas,o=Ug(l=>{t.ctx!==null&&n(fN(l,t))},t);return uN(i,e,o),o}class bN extends ox{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(dN(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[ko])return!1;const i=n[ko].initial;["height","width"].forEach(l=>{const c=i[l];De(c)?n.removeAttribute(l):n.setAttribute(l,c)});const o=i.style||{};return Object.keys(o).forEach(l=>{n.style[l]=o[l]}),n.width=n.width,delete n[ko],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const o=e.$proxies||(e.$proxies={}),c={attach:pN,detach:mN,resize:vN}[n]||yN;o[n]=c(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),o=i[n];if(!o)return;({attach:od,detach:od,resize:od}[n]||hN)(e,n,o),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,o){return uw(e,n,i,o)}isAttached(e){const n=e&&Jd(e);return!!(n&&n.isConnected)}}function jN(t){return!Gd()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?lN:bN}class dn{constructor(){me(this,"x");me(this,"y");me(this,"active",!1);me(this,"options");me(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return zr(this.x)&&zr(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const o={};return e.forEach(l=>{o[l]=i[l]&&i[l].active()?i[l]._to:this[l]}),o}}me(dn,"defaults",{}),me(dn,"defaultRoutes");function wN(t,e){const n=t.options.ticks,i=NN(t),o=Math.min(n.maxTicksLimit||i,i),l=n.major.enabled?kN(e):[],c=l.length,u=l[0],h=l[c-1],p=[];if(c>o)return SN(e,p,l,c/o),p;const g=_N(l,e,o);if(c>0){let v,y;const w=c>1?Math.round((h-u)/(c-1)):null;for(mo(e,p,g,De(w)?0:u-w,u),v=0,y=c-1;v<y;v++)mo(e,p,g,l[v],l[v+1]);return mo(e,p,g,h,De(w)?e.length:h+w),p}return mo(e,p,g),p}function NN(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),o=t._maxLength/n;return Math.floor(Math.min(i,o))}function _N(t,e,n){const i=CN(t),o=e.length/n;if(!i)return Math.max(o,1);const l=d1(i);for(let c=0,u=l.length-1;c<u;c++){const h=l[c];if(h>o)return h}return Math.max(o,1)}function kN(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function SN(t,e,n,i){let o=0,l=n[0],c;for(i=Math.ceil(i),c=0;c<t.length;c++)c===l&&(e.push(t[c]),o++,l=n[o*i])}function mo(t,e,n,i,o){const l=_e(i,0),c=Math.min(_e(o,t.length),t.length);let u=0,h,p,g;for(n=Math.ceil(n),o&&(h=o-i,n=h/Math.floor(h/n)),g=l;g<0;)u++,g=Math.round(l+u*n);for(p=Math.max(l,0);p<c;p++)p===g&&(e.push(t[p]),u++,g=Math.round(l+u*n))}function CN(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const EN=t=>t==="left"?"right":t==="right"?"left":t,om=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,lm=(t,e)=>Math.min(e||t,t);function cm(t,e){const n=[],i=t.length/e,o=t.length;let l=0;for(;l<o;l+=i)n.push(t[Math.floor(l)]);return n}function RN(t,e,n){const i=t.ticks.length,o=Math.min(e,i-1),l=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(o),p;if(!(n&&(i===1?p=Math.max(h-l,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(o-1))/2,h+=o<e?p:-p,h<l-u||h>c+u)))return h}function PN(t,e){Oe(t,n=>{const i=n.gc,o=i.length/2;let l;if(o>e){for(l=0;l<o;++l)delete n.data[i[l]];i.splice(0,o)}})}function br(t){return t.drawTicks?t.tickLength:0}function dm(t,e){if(!t.display)return 0;const n=jt(t.font,e),i=en(t.padding);return(et(t.text)?t.text.length:1)*n.lineHeight+i.height}function AN(t,e){return Qs(t,{scale:e,type:"scale"})}function TN(t,e,n){return Qs(t,{tick:n,index:e,type:"tick"})}function DN(t,e,n){let i=Hd(t);return(n&&e!=="right"||!n&&e==="right")&&(i=EN(i)),i}function LN(t,e,n,i){const{top:o,left:l,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:g}=h;let v=0,y,w,j;const N=c-o,b=u-l;if(t.isHorizontal()){if(w=vt(i,l,u),Ce(n)){const k=Object.keys(n)[0],S=n[k];j=g[k].getPixelForValue(S)+N-e}else n==="center"?j=(p.bottom+p.top)/2+N-e:j=om(t,n,e);y=u-l}else{if(Ce(n)){const k=Object.keys(n)[0],S=n[k];w=g[k].getPixelForValue(S)-b+e}else n==="center"?w=(p.left+p.right)/2-b+e:w=om(t,n,e);j=vt(i,c,o),v=n==="left"?-it:it}return{titleX:w,titleY:j,maxWidth:y,rotation:v}}class Pi extends dn{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:o}=this;return e=vn(e,Number.POSITIVE_INFINITY),n=vn(n,Number.NEGATIVE_INFINITY),i=vn(i,Number.POSITIVE_INFINITY),o=vn(o,Number.NEGATIVE_INFINITY),{min:vn(e,i),max:vn(n,o),minDefined:wt(e),maxDefined:wt(n)}}getMinMax(e){let{min:n,max:i,minDefined:o,maxDefined:l}=this.getUserBounds(),c;if(o&&l)return{min:n,max:i};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),o||(n=Math.min(n,c.min)),l||(i=Math.max(i,c.max));return n=l&&n>i?i:n,i=o&&n>i?n:i,{min:vn(n,vn(i,n)),max:vn(i,vn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ue(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:o,grace:l,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=$1(this,l,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?cm(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=wN(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ue(this.options.afterUpdate,[this])}beforeSetDimensions(){Ue(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ue(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Ue(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ue(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,o,l;for(i=0,o=e.length;i<o;i++)l=e[i],l.label=Ue(n.callback,[l.value,i,e],this)}afterTickToLabelConversion(){Ue(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ue(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=lm(this.ticks.length,e.ticks.maxTicksLimit),o=n.minRotation||0,l=n.maxRotation;let c=o,u,h,p;if(!this._isVisible()||!n.display||o>=l||i<=1||!this.isHorizontal()){this.labelRotation=o;return}const g=this._getLabelSizes(),v=g.widest.width,y=g.highest.height,w=bt(this.chart.width-v,0,this.maxWidth);u=e.offset?this.maxWidth/i:w/(i-1),v+6>u&&(u=w/(i-(e.offset?.5:1)),h=this.maxHeight-br(e.grid)-n.padding-dm(e.title,this.chart.options.font),p=Math.sqrt(v*v+y*y),c=p1(Math.min(Math.asin(bt((g.highest.height+6)/u,-1,1)),Math.asin(bt(h/p,-1,1))-Math.asin(bt(y/p,-1,1)))),c=Math.max(o,Math.min(l,c))),this.labelRotation=c}afterCalculateLabelRotation(){Ue(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Ue(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:o,grid:l}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=dm(o,n.options.font);if(u?(e.width=this.maxWidth,e.height=br(l)+h):(e.height=this.maxHeight,e.width=br(l)+h),i.display&&this.ticks.length){const{first:p,last:g,widest:v,highest:y}=this._getLabelSizes(),w=i.padding*2,j=zn(this.labelRotation),N=Math.cos(j),b=Math.sin(j);if(u){const k=i.mirror?0:b*v.width+N*y.height;e.height=Math.min(this.maxHeight,e.height+k+w)}else{const k=i.mirror?0:N*v.width+b*y.height;e.width=Math.min(this.maxWidth,e.width+k+w)}this._calculatePadding(p,g,b,N)}}this._handleMargins(),u?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,o){const{ticks:{align:l,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const g=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let y=0,w=0;h?p?(y=o*e.width,w=i*n.height):(y=i*e.height,w=o*n.width):l==="start"?w=n.width:l==="end"?y=e.width:l!=="inner"&&(y=e.width/2,w=n.width/2),this.paddingLeft=Math.max((y-g+c)*this.width/(this.width-g),0),this.paddingRight=Math.max((w-v+c)*this.width/(this.width-v),0)}else{let g=n.height/2,v=e.height/2;l==="start"?(g=0,v=e.height):l==="end"&&(g=n.height,v=0),this.paddingTop=g+c,this.paddingBottom=v+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ue(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)De(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=cm(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:o,_longestTextCache:l}=this,c=[],u=[],h=Math.floor(n/lm(n,i));let p=0,g=0,v,y,w,j,N,b,k,S,A,z,R;for(v=0;v<n;v+=h){if(j=e[v].label,N=this._resolveTickFontOptions(v),o.font=b=N.string,k=l[b]=l[b]||{data:{},gc:[]},S=N.lineHeight,A=z=0,!De(j)&&!et(j))A=zp(o,k.data,k.gc,A,j),z=S;else if(et(j))for(y=0,w=j.length;y<w;++y)R=j[y],!De(R)&&!et(R)&&(A=zp(o,k.data,k.gc,A,R),z+=S);c.push(A),u.push(z),p=Math.max(A,p),g=Math.max(z,g)}PN(l,n);const I=c.indexOf(p),L=u.indexOf(g),C=O=>({width:c[O]||0,height:u[O]||0});return{first:C(0),last:C(n-1),widest:C(I),highest:C(L),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return g1(this._alignToPixels?Ds(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=TN(this.getContext(),e,i))}return this.$context||(this.$context=AN(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=zn(this.labelRotation),i=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),l=this._getLabelSizes(),c=e.autoSkipPadding||0,u=l?l.widest.width+c:0,h=l?l.highest.height+c:0;return this.isHorizontal()?h*i>u*o?u/i:h/o:h*o<u*i?h/i:u/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,o=this.options,{grid:l,position:c,border:u}=o,h=l.offset,p=this.isHorizontal(),v=this.ticks.length+(h?1:0),y=br(l),w=[],j=u.setContext(this.getContext()),N=j.display?j.width:0,b=N/2,k=function($){return Ds(i,$,N)};let S,A,z,R,I,L,C,O,H,X,F,te;if(c==="top")S=k(this.bottom),L=this.bottom-y,O=S-b,X=k(e.top)+b,te=e.bottom;else if(c==="bottom")S=k(this.top),X=e.top,te=k(e.bottom)-b,L=S+b,O=this.top+y;else if(c==="left")S=k(this.right),I=this.right-y,C=S-b,H=k(e.left)+b,F=e.right;else if(c==="right")S=k(this.left),H=e.left,F=k(e.right)-b,I=S+b,C=this.left+y;else if(n==="x"){if(c==="center")S=k((e.top+e.bottom)/2+.5);else if(Ce(c)){const $=Object.keys(c)[0],ie=c[$];S=k(this.chart.scales[$].getPixelForValue(ie))}X=e.top,te=e.bottom,L=S+b,O=L+y}else if(n==="y"){if(c==="center")S=k((e.left+e.right)/2);else if(Ce(c)){const $=Object.keys(c)[0],ie=c[$];S=k(this.chart.scales[$].getPixelForValue(ie))}I=S-b,C=I-y,H=e.left,F=e.right}const q=_e(o.ticks.maxTicksLimit,v),oe=Math.max(1,Math.ceil(v/q));for(A=0;A<v;A+=oe){const $=this.getContext(A),ie=l.setContext($),K=u.setContext($),re=ie.lineWidth,G=ie.color,D=K.dash||[],Q=K.dashOffset,ge=ie.tickWidth,ve=ie.tickColor,je=ie.tickBorderDash||[],Z=ie.tickBorderDashOffset;z=RN(this,A,h),z!==void 0&&(R=Ds(i,z,re),p?I=C=H=F=R:L=O=X=te=R,w.push({tx1:I,ty1:L,tx2:C,ty2:O,x1:H,y1:X,x2:F,y2:te,width:re,color:G,borderDash:D,borderDashOffset:Q,tickWidth:ge,tickColor:ve,tickBorderDash:je,tickBorderDashOffset:Z}))}return this._ticksLength=v,this._borderValue=S,w}_computeLabelItems(e){const n=this.axis,i=this.options,{position:o,ticks:l}=i,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:g,mirror:v}=l,y=br(i.grid),w=y+g,j=v?-g:w,N=-zn(this.labelRotation),b=[];let k,S,A,z,R,I,L,C,O,H,X,F,te="middle";if(o==="top")I=this.bottom-j,L=this._getXAxisLabelAlignment();else if(o==="bottom")I=this.top+j,L=this._getXAxisLabelAlignment();else if(o==="left"){const oe=this._getYAxisLabelAlignment(y);L=oe.textAlign,R=oe.x}else if(o==="right"){const oe=this._getYAxisLabelAlignment(y);L=oe.textAlign,R=oe.x}else if(n==="x"){if(o==="center")I=(e.top+e.bottom)/2+w;else if(Ce(o)){const oe=Object.keys(o)[0],$=o[oe];I=this.chart.scales[oe].getPixelForValue($)+w}L=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")R=(e.left+e.right)/2-w;else if(Ce(o)){const oe=Object.keys(o)[0],$=o[oe];R=this.chart.scales[oe].getPixelForValue($)}L=this._getYAxisLabelAlignment(y).textAlign}n==="y"&&(h==="start"?te="top":h==="end"&&(te="bottom"));const q=this._getLabelSizes();for(k=0,S=u.length;k<S;++k){A=u[k],z=A.label;const oe=l.setContext(this.getContext(k));C=this.getPixelForTick(k)+l.labelOffset,O=this._resolveTickFontOptions(k),H=O.lineHeight,X=et(z)?z.length:1;const $=X/2,ie=oe.color,K=oe.textStrokeColor,re=oe.textStrokeWidth;let G=L;c?(R=C,L==="inner"&&(k===S-1?G=this.options.reverse?"left":"right":k===0?G=this.options.reverse?"right":"left":G="center"),o==="top"?p==="near"||N!==0?F=-X*H+H/2:p==="center"?F=-q.highest.height/2-$*H+H:F=-q.highest.height+H/2:p==="near"||N!==0?F=H/2:p==="center"?F=q.highest.height/2-$*H:F=q.highest.height-X*H,v&&(F*=-1),N!==0&&!oe.showLabelBackdrop&&(R+=H/2*Math.sin(N))):(I=C,F=(1-X)*H/2);let D;if(oe.showLabelBackdrop){const Q=en(oe.backdropPadding),ge=q.heights[k],ve=q.widths[k];let je=F-Q.top,Z=0-Q.left;switch(te){case"middle":je-=ge/2;break;case"bottom":je-=ge;break}switch(L){case"center":Z-=ve/2;break;case"right":Z-=ve;break;case"inner":k===S-1?Z-=ve:k>0&&(Z-=ve/2);break}D={left:Z,top:je,width:ve+Q.width,height:ge+Q.height,color:oe.backdropColor}}b.push({label:z,font:O,textOffset:F,options:{rotation:N,color:ie,strokeColor:K,strokeWidth:re,textAlign:G,textBaseline:te,translation:[R,I],backdrop:D}})}return b}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-zn(this.labelRotation))return e==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:o,padding:l}}=this.options,c=this._getLabelSizes(),u=e+l,h=c.widest.width;let p,g;return n==="left"?o?(g=this.right+l,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g+=h)):(g=this.right-u,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g=this.left)):n==="right"?o?(g=this.left+l,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g-=h)):(g=this.left+u,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g=this.right)):p="right",{textAlign:p,x:g}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:o,width:l,height:c}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,o,l,c),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(l=>l.value===e);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let l,c;const u=(h,p,g)=>{!g.width||!g.color||(i.save(),i.lineWidth=g.width,i.strokeStyle=g.color,i.setLineDash(g.borderDash||[]),i.lineDashOffset=g.borderDashOffset,i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(p.x,p.y),i.stroke(),i.restore())};if(n.display)for(l=0,c=o.length;l<c;++l){const h=o[l];n.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),n.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:o}}=this,l=i.setContext(this.getContext()),c=i.display?l.width:0;if(!c)return;const u=o.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,g,v,y;this.isHorizontal()?(p=Ds(e,this.left,c)-c/2,g=Ds(e,this.right,u)+u/2,v=y=h):(v=Ds(e,this.top,c)-c/2,y=Ds(e,this.bottom,u)+u/2,p=g=h),n.save(),n.lineWidth=l.width,n.strokeStyle=l.color,n.beginPath(),n.moveTo(p,v),n.lineTo(g,y),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,o=this._computeLabelArea();o&&Yo(i,o);const l=this.getLabelItems(e);for(const c of l){const u=c.options,h=c.font,p=c.label,g=c.textOffset;Br(i,p,0,g,h,u)}o&&Qo(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:o}}=this;if(!i.display)return;const l=jt(i.font),c=en(i.padding),u=i.align;let h=l.lineHeight/2;n==="bottom"||n==="center"||Ce(n)?(h+=c.bottom,et(i.text)&&(h+=l.lineHeight*(i.text.length-1))):h+=c.top;const{titleX:p,titleY:g,maxWidth:v,rotation:y}=LN(this,h,n,u);Br(e,i.text,0,0,l,{color:i.color,maxWidth:v,rotation:y,textAlign:DN(u,n,o),textBaseline:"middle",translation:[p,g]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=_e(e.grid&&e.grid.z,-1),o=_e(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Pi.prototype.draw?[{z:n,draw:l=>{this.draw(l)}}]:[{z:i,draw:l=>{this.drawBackground(),this.drawGrid(l),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:l=>{this.drawLabels(l)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let l,c;for(l=0,c=n.length;l<c;++l){const u=n[l];u[i]===this.id&&(!e||u.type===e)&&o.push(u)}return o}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return jt(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class go{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;zN(n)&&(i=this.register(n));const o=this.items,l=e.id,c=this.scope+"."+l;if(!l)throw new Error("class does not have id: "+e);return l in o||(o[l]=e,MN(e,c,i),this.override&&Ge.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,o=this.scope;i in n&&delete n[i],o&&i in Ge[o]&&(delete Ge[o][i],this.override&&delete qs[i])}}function MN(t,e,n){const i=Mr(Object.create(null),[n?Ge.get(n):{},Ge.get(e),t.defaults]);Ge.set(e,i),t.defaultRoutes&&ON(e,t.defaultRoutes),t.descriptors&&Ge.describe(e,t.descriptors)}function ON(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),o=i.pop(),l=[t].concat(i).join("."),c=e[n].split("."),u=c.pop(),h=c.join(".");Ge.route(l,o,h,u)})}function zN(t){return"id"in t&&"defaults"in t}class IN{constructor(){this.controllers=new go($s,"datasets",!0),this.elements=new go(dn,"elements"),this.plugins=new go(Object,"plugins"),this.scales=new go(Pi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(o=>{const l=i||this._getRegistryForType(o);i||l.isForType(o)||l===this.plugins&&o.id?this._exec(e,l,o):Oe(o,c=>{const u=i||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,n,i){const o=Wd(e);Ue(i["before"+o],[],i),n[e](i),Ue(i["after"+o],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const o=n.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return o}}var jn=new IN;class FN{constructor(){this._init=void 0}notify(e,n,i,o){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const l=o?this._descriptors(e).filter(o):this._descriptors(e),c=this._notify(l,e,n,i);return n==="afterDestroy"&&(this._notify(l,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,n,i,o){o=o||{};for(const l of e){const c=l.plugin,u=c[i],h=[n,o,l.options];if(Ue(u,h,c)===!1&&o.cancelable)return!1}return!0}invalidate(){De(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,o=_e(i.options&&i.options.plugins,{}),l=BN(i);return o===!1&&!n?[]:WN(e,l,o,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,o=(l,c)=>l.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(o(n,i),e,"stop"),this._notify(o(i,n),e,"start")}}function BN(t){const e={},n=[],i=Object.keys(jn.plugins.items);for(let l=0;l<i.length;l++)n.push(jn.getPlugin(i[l]));const o=t.plugins||[];for(let l=0;l<o.length;l++){const c=o[l];n.indexOf(c)===-1&&(n.push(c),e[c.id]=!0)}return{plugins:n,localIds:e}}function UN(t,e){return!e&&t===!1?null:t===!0?{}:t}function WN(t,{plugins:e,localIds:n},i,o){const l=[],c=t.getContext();for(const u of e){const h=u.id,p=UN(i[h],o);p!==null&&l.push({plugin:u,options:$N(t.config,{plugin:u,local:n[h]},p,c)})}return l}function $N(t,{plugin:e,local:n},i,o){const l=t.pluginScopeKeys(e),c=t.getOptionScopes(i,l);return n&&e.defaults&&c.push(e.defaults),t.createResolver(c,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function _d(t,e){const n=Ge.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function HN(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function VN(t,e){return t===e?"_index_":"_value_"}function um(t){if(t==="x"||t==="y"||t==="r")return t}function qN(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function kd(t,...e){if(um(t))return t;for(const n of e){const i=n.axis||qN(n.position)||t.length>1&&um(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function hm(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function YN(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return hm(t,"x",n[0])||hm(t,"y",n[0])}return{}}function QN(t,e){const n=qs[t.type]||{scales:{}},i=e.scales||{},o=_d(t.type,e),l=Object.create(null);return Object.keys(i).forEach(c=>{const u=i[c];if(!Ce(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=kd(c,u,YN(c,t),Ge.scales[u.type]),p=VN(h,o),g=n.scales||{};l[c]=Cr(Object.create(null),[{axis:h},u,g[h],g[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||_d(u,e),g=(qs[u]||{}).scales||{};Object.keys(g).forEach(v=>{const y=HN(v,h),w=c[y+"AxisID"]||y;l[w]=l[w]||Object.create(null),Cr(l[w],[{axis:y},i[w],g[v]])})}),Object.keys(l).forEach(c=>{const u=l[c];Cr(u,[Ge.scales[u.type],Ge.scale])}),l}function dx(t){const e=t.options||(t.options={});e.plugins=_e(e.plugins,{}),e.scales=QN(t,e)}function ux(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function KN(t){return t=t||{},t.data=ux(t.data),dx(t),t}const fm=new Map,hx=new Set;function xo(t,e){let n=fm.get(t);return n||(n=e(),fm.set(t,n),hx.add(n)),n}const jr=(t,e,n)=>{const i=Vs(e,n);i!==void 0&&t.add(i)};class XN{constructor(e){this._config=KN(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=ux(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),dx(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return xo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return xo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return xo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return xo(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let o=i.get(e);return(!o||n)&&(o=new Map,i.set(e,o)),o}getOptionScopes(e,n,i){const{options:o,type:l}=this,c=this._cachedScopes(e,i),u=c.get(n);if(u)return u;const h=new Set;n.forEach(g=>{e&&(h.add(e),g.forEach(v=>jr(h,e,v))),g.forEach(v=>jr(h,o,v)),g.forEach(v=>jr(h,qs[l]||{},v)),g.forEach(v=>jr(h,Ge,v)),g.forEach(v=>jr(h,wd,v))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),hx.has(n)&&c.set(n,p),p}chartOptionScopes(){const{options:e,type:n}=this;return[e,qs[n]||{},Ge.datasets[n]||{},{type:n},Ge,wd]}resolveNamedOptions(e,n,i,o=[""]){const l={$shared:!0},{resolver:c,subPrefixes:u}=pm(this._resolverCache,e,o);let h=c;if(JN(c,n)){l.$shared=!1,i=gs(i)?i():i;const p=this.createResolver(e,i,u);h=Si(c,i,p)}for(const p of n)l[p]=h[p];return l}createResolver(e,n,i=[""],o){const{resolver:l}=pm(this._resolverCache,e,i);return Ce(n)?Si(l,n,void 0,o):l}}function pm(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const o=n.join();let l=i.get(o);return l||(l={resolver:Qd(e,n),subPrefixes:n.filter(u=>!u.toLowerCase().includes("hover"))},i.set(o,l)),l}const GN=t=>Ce(t)&&Object.getOwnPropertyNames(t).some(e=>gs(t[e]));function JN(t,e){const{isScriptable:n,isIndexable:i}=Vg(t);for(const o of e){const l=n(o),c=i(o),u=(c||l)&&t[o];if(l&&(gs(u)||GN(u))||c&&et(u))return!0}return!1}var ZN="4.5.1";const e_=["top","bottom","left","right","chartArea"];function mm(t,e){return t==="top"||t==="bottom"||e_.indexOf(t)===-1&&e==="x"}function gm(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function xm(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Ue(n&&n.onComplete,[t],e)}function t_(t){const e=t.chart,n=e.options.animation;Ue(n&&n.onProgress,[t],e)}function fx(t){return Gd()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const So={},vm=t=>{const e=fx(t);return Object.values(So).filter(n=>n.canvas===e).pop()};function n_(t,e,n){const i=Object.keys(t);for(const o of i){const l=+o;if(l>=e){const c=t[o];delete t[o],(n>0||l>e)&&(t[l+n]=c)}}}function s_(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}var cs;let Kr=(cs=class{static register(...e){jn.add(...e),ym()}static unregister(...e){jn.remove(...e),ym()}constructor(e,n){const i=this.config=new XN(n),o=fx(e),l=vm(o);if(l)throw new Error("Canvas is already in use. Chart with ID '"+l.id+"' must be destroyed before the canvas with ID '"+l.canvas.id+"' can be reused.");const c=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||jN(o)),this.platform.updateConfig(i);const u=this.platform.acquireContext(o,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,g=h&&h.width;if(this.id=t1(),this.ctx=u,this.canvas=h,this.width=g,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new FN,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=b1(v=>this.update(v),c.resizeDelay||0),this._dataChanges=[],So[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}Ln.listen(this,"complete",xm),Ln.listen(this,"progress",t_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:o,_aspectRatio:l}=this;return De(e)?n&&l?l:o?i/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return jn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Up(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ip(this.canvas,this.ctx),this}stop(){return Ln.stop(this),this}resize(e,n){Ln.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,o=this.canvas,l=i.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(o,e,n,l),u=i.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Up(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),Ue(i.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Oe(n,(i,o)=>{i.id=o})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,o=Object.keys(i).reduce((c,u)=>(c[u]=!1,c),{});let l=[];n&&(l=l.concat(Object.keys(n).map(c=>{const u=n[c],h=kd(c,u),p=h==="r",g=h==="x";return{options:u,dposition:p?"chartArea":g?"bottom":"left",dtype:p?"radialLinear":g?"category":"linear"}}))),Oe(l,c=>{const u=c.options,h=u.id,p=kd(h,u),g=_e(u.type,c.dtype);(u.position===void 0||mm(u.position,p)!==mm(c.dposition))&&(u.position=c.dposition),o[h]=!0;let v=null;if(h in i&&i[h].type===g)v=i[h];else{const y=jn.getScale(g);v=new y({id:h,type:g,ctx:this.ctx,chart:this}),i[v.id]=v}v.init(u,e)}),Oe(o,(c,u)=>{c||delete i[u]}),Oe(i,c=>{Zt.configure(this,c,c.options),Zt.addBox(this,c)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((o,l)=>o.index-l.index),i>n){for(let o=n;o<i;++o)this._destroyDatasetMeta(o);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(gm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,o)=>{n.filter(l=>l===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=n.length;i<o;i++){const l=n[i];let c=this.getDatasetMeta(i);const u=l.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(i),c=this.getDatasetMeta(i)),c.type=u,c.indexAxis=l.indexAxis||_d(u,this.options),c.order=l.order||0,c.index=i,c.label=""+l.label,c.visible=this.isDatasetVisible(i),c.controller)c.controller.updateIndex(i),c.controller.linkScales();else{const h=jn.getController(u),{datasetElementType:p,dataElementType:g}=Ge.datasets[u];Object.assign(h,{dataElementType:jn.getElement(g),datasetElementType:p&&jn.getElement(p)}),c.controller=new h(this,i),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Oe(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const l=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,g=this.data.datasets.length;p<g;p++){const{controller:v}=this.getDatasetMeta(p),y=!o&&l.indexOf(v)===-1;v.buildOrUpdateElements(y),c=Math.max(+v.getMaxOverflow(),c)}c=this._minPadding=i.layout.autoPadding?c:0,this._updateLayout(c),o||Oe(l,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(gm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Oe(this.scales,e=>{Zt.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!Ep(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:l}of n){const c=i==="_removeElements"?-l:l;n_(e,o,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=l=>new Set(e.filter(c=>c[0]===l).map((c,u)=>u+","+c.splice(1).join(","))),o=i(0);for(let l=1;l<n;l++)if(!Ep(o,i(l)))return;return Array.from(o).map(l=>l.split(",")).map(l=>({method:l[1],start:+l[2],count:+l[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Zt.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Oe(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,l)=>{o._idx=l}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,gs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),o={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ln.has(this)?this.attached&&!Ln.running(this)&&Ln.start(this):(this.draw(),xm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let o,l;for(o=0,l=n.length;o<l;++o){const c=n[o];(!e||c.visible)&&i.push(c)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i={meta:e,index:e.index,cancelable:!0},o=tx(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&Yo(n,o),e.controller.draw(),o&&Qo(n),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return Fr(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,o){const l=eN.modes[n];return typeof l=="function"?l(this,e,i,o):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let o=i.filter(l=>l&&l._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=Qs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const o=i?"show":"hide",l=this.getDatasetMeta(e),c=l.controller._resolveAnimations(void 0,o);Or(n)?(l.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),c.update(l,{visible:i}),this.update(u=>u.datasetIndex===e?o:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),Ln.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Ip(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete So[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},o=(l,c,u)=>{l.offsetX=c,l.offsetY=u,this._eventHandler(l)};Oe(this.options.events,l=>i(l,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(h,p)=>{n.addEventListener(this,h,p),e[h]=p},o=(h,p)=>{e[h]&&(n.removeEventListener(this,h,p),delete e[h])},l=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{o("attach",u),this.attached=!0,this.resize(),i("resize",l),i("detach",c)};c=()=>{this.attached=!1,o("resize",l),this._stop(),this._resize(0,0),i("attach",u)},n.isAttached(this.canvas)?u():c()}unbindEvents(){Oe(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Oe(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const o=i?"set":"remove";let l,c,u,h;for(n==="dataset"&&(l=this.getDatasetMeta(e[0].datasetIndex),l.controller["_"+o+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[o+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:l,index:c})=>{const u=this.getDatasetMeta(l);if(!u)throw new Error("No dataset found at index "+l);return{datasetIndex:l,element:u.data[c],index:c}});!Po(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const o=this.options.hover,l=(h,p)=>h.filter(g=>!p.some(v=>g.datasetIndex===v.datasetIndex&&g.index===v.index)),c=l(n,e),u=i?e:l(e,n);c.length&&this.updateHoverStyle(c,o.mode,!1),u.length&&o.mode&&this.updateHoverStyle(u,o.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},o=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;const l=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(l||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:o=[],options:l}=this,c=n,u=this._getActiveElements(e,o,i,c),h=o1(e),p=s_(e,this._lastEvent,i,h);i&&(this._lastEvent=null,Ue(l.onHover,[e,u,this],this),h&&Ue(l.onClick,[e,u,this],this));const g=!Po(u,o);return(g||n)&&(this._active=u,this._updateHoverStyles(u,o,n)),this._lastEvent=p,g}_getActiveElements(e,n,i,o){if(e.type==="mouseout")return[];if(!i)return n;const l=this.options.hover;return this.getElementsAtEventForMode(e,l.mode,l,o)}},me(cs,"defaults",Ge),me(cs,"instances",So),me(cs,"overrides",qs),me(cs,"registry",jn),me(cs,"version",ZN),me(cs,"getChart",vm),cs);function ym(){return Oe(Kr.instances,t=>t._plugins.invalidate())}function i_(t,e,n){const{startAngle:i,x:o,y:l,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:g}=h,v=Math.min(p/c,$t(i-n));if(t.beginPath(),t.arc(o,l,c-p/2,i+v/2,n-v/2),u>0){const y=Math.min(p/u,$t(i-n));t.arc(o,l,u+p/2,n-y/2,i+y/2,!0)}else{const y=Math.min(p/2,c*$t(i-n));if(g==="round")t.arc(o,l,y,n-ze/2,i+ze/2,!0);else if(g==="bevel"){const w=2*y*y,j=-w*Math.cos(n+ze/2)+o,N=-w*Math.sin(n+ze/2)+l,b=w*Math.cos(i+ze/2)+o,k=w*Math.sin(i+ze/2)+l;t.lineTo(j,N),t.lineTo(b,k)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function r_(t,e,n){const{startAngle:i,pixelMargin:o,x:l,y:c,outerRadius:u,innerRadius:h}=e;let p=o/u;t.beginPath(),t.arc(l,c,u,i-p,n+p),h>o?(p=o/h,t.arc(l,c,h,n+p,i-p,!0)):t.arc(l,c,o,n+it,i-it),t.closePath(),t.clip()}function a_(t){return Yd(t,["outerStart","outerEnd","innerStart","innerEnd"])}function o_(t,e,n,i){const o=a_(t.options.borderRadius),l=(n-e)/2,c=Math.min(l,i*e/2),u=h=>{const p=(n-Math.min(l,h))*i/2;return bt(h,0,Math.min(l,p))};return{outerStart:u(o.outerStart),outerEnd:u(o.outerEnd),innerStart:bt(o.innerStart,0,c),innerEnd:bt(o.innerEnd,0,c)}}function wi(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Oo(t,e,n,i,o,l){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:g}=e,v=Math.max(e.outerRadius+i+n-p,0),y=g>0?g+i+n+p:0;let w=0;const j=o-h;if(i){const oe=g>0?g-i:0,$=v>0?v-i:0,ie=(oe+$)/2,K=ie!==0?j*ie/(ie+i):j;w=(j-K)/2}const N=Math.max(.001,j*v-n/ze)/v,b=(j-N)/2,k=h+b+w,S=o-b-w,{outerStart:A,outerEnd:z,innerStart:R,innerEnd:I}=o_(e,y,v,S-k),L=v-A,C=v-z,O=k+A/L,H=S-z/C,X=y+R,F=y+I,te=k+R/X,q=S-I/F;if(t.beginPath(),l){const oe=(O+H)/2;if(t.arc(c,u,v,O,oe),t.arc(c,u,v,oe,H),z>0){const re=wi(C,H,c,u);t.arc(re.x,re.y,z,H,S+it)}const $=wi(F,S,c,u);if(t.lineTo($.x,$.y),I>0){const re=wi(F,q,c,u);t.arc(re.x,re.y,I,S+it,q+Math.PI)}const ie=(S-I/y+(k+R/y))/2;if(t.arc(c,u,y,S-I/y,ie,!0),t.arc(c,u,y,ie,k+R/y,!0),R>0){const re=wi(X,te,c,u);t.arc(re.x,re.y,R,te+Math.PI,k-it)}const K=wi(L,k,c,u);if(t.lineTo(K.x,K.y),A>0){const re=wi(L,O,c,u);t.arc(re.x,re.y,A,k-it,O)}}else{t.moveTo(c,u);const oe=Math.cos(O)*v+c,$=Math.sin(O)*v+u;t.lineTo(oe,$);const ie=Math.cos(H)*v+c,K=Math.sin(H)*v+u;t.lineTo(ie,K)}t.closePath()}function l_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u}=e;let h=e.endAngle;if(l){Oo(t,e,n,i,h,o);for(let p=0;p<l;++p)t.fill();isNaN(u)||(h=c+(u%Ve||Ve))}return Oo(t,e,n,i,h,o),t.fill(),h}function c_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:g,borderDash:v,borderDashOffset:y,borderRadius:w}=h,j=h.borderAlign==="inner";if(!p)return;t.setLineDash(v||[]),t.lineDashOffset=y,j?(t.lineWidth=p*2,t.lineJoin=g||"round"):(t.lineWidth=p,t.lineJoin=g||"bevel");let N=e.endAngle;if(l){Oo(t,e,n,i,N,o);for(let b=0;b<l;++b)t.stroke();isNaN(u)||(N=c+(u%Ve||Ve))}j&&r_(t,e,N),h.selfJoin&&N-c>=ze&&w===0&&g!=="miter"&&i_(t,e,N),l||(Oo(t,e,n,i,N,o),t.stroke())}class kr extends dn{constructor(n){super();me(this,"circumference");me(this,"endAngle");me(this,"fullCircles");me(this,"innerRadius");me(this,"outerRadius");me(this,"pixelMargin");me(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.getProps(["x","y"],o),{angle:c,distance:u}=zg(l,{x:n,y:i}),{startAngle:h,endAngle:p,innerRadius:g,outerRadius:v,circumference:y}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),w=(this.options.spacing+this.options.borderWidth)/2,j=_e(y,p-h),N=Ir(c,h,p)&&h!==p,b=j>=Ve||N,k=In(u,g+w,v+w);return b&&k}getCenterPoint(n){const{x:i,y:o,startAngle:l,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:p,spacing:g}=this.options,v=(l+c)/2,y=(u+h+g+p)/2;return{x:i+Math.cos(v)*y,y:o+Math.sin(v)*y}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:o}=this,l=(i.offset||0)/4,c=(i.spacing||0)/2,u=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>Ve?Math.floor(o/Ve):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const h=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(h)*l,Math.sin(h)*l);const p=1-Math.sin(Math.min(ze,o||0)),g=l*p;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,l_(n,this,g,c,u),c_(n,this,g,c,u),n.restore()}}me(kr,"id","arc"),me(kr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),me(kr,"defaultRoutes",{backgroundColor:"backgroundColor"}),me(kr,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function px(t,e,n=e){t.lineCap=_e(n.borderCapStyle,e.borderCapStyle),t.setLineDash(_e(n.borderDash,e.borderDash)),t.lineDashOffset=_e(n.borderDashOffset,e.borderDashOffset),t.lineJoin=_e(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=_e(n.borderWidth,e.borderWidth),t.strokeStyle=_e(n.borderColor,e.borderColor)}function d_(t,e,n){t.lineTo(n.x,n.y)}function u_(t){return t.stepped?L1:t.tension||t.cubicInterpolationMode==="monotone"?M1:d_}function mx(t,e,n={}){const i=t.length,{start:o=0,end:l=i-1}=n,{start:c,end:u}=e,h=Math.max(o,c),p=Math.min(l,u),g=o<c&&l<c||o>u&&l>u;return{count:i,start:h,loop:e.loop,ilen:p<h&&!g?i+p-h:p-h}}function h_(t,e,n,i){const{points:o,options:l}=e,{count:c,start:u,loop:h,ilen:p}=mx(o,n,i),g=u_(l);let{move:v=!0,reverse:y}=i||{},w,j,N;for(w=0;w<=p;++w)j=o[(u+(y?p-w:w))%c],!j.skip&&(v?(t.moveTo(j.x,j.y),v=!1):g(t,N,j,y,l.stepped),N=j);return h&&(j=o[(u+(y?p:0))%c],g(t,N,j,y,l.stepped)),!!h}function f_(t,e,n,i){const o=e.points,{count:l,start:c,ilen:u}=mx(o,n,i),{move:h=!0,reverse:p}=i||{};let g=0,v=0,y,w,j,N,b,k;const S=z=>(c+(p?u-z:z))%l,A=()=>{N!==b&&(t.lineTo(g,b),t.lineTo(g,N),t.lineTo(g,k))};for(h&&(w=o[S(0)],t.moveTo(w.x,w.y)),y=0;y<=u;++y){if(w=o[S(y)],w.skip)continue;const z=w.x,R=w.y,I=z|0;I===j?(R<N?N=R:R>b&&(b=R),g=(v*g+z)/++v):(A(),t.lineTo(z,R),j=I,v=0,N=b=R),k=R}A()}function Sd(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?f_:h_}function p_(t){return t.stepped?fw:t.tension||t.cubicInterpolationMode==="monotone"?pw:Is}function m_(t,e,n,i){let o=e._path;o||(o=e._path=new Path2D,e.path(o,n,i)&&o.closePath()),px(t,e.options),t.stroke(o)}function g_(t,e,n,i){const{segments:o,options:l}=e,c=Sd(e);for(const u of o)px(t,l,u.style),t.beginPath(),c(t,e,u,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const x_=typeof Path2D=="function";function v_(t,e,n,i){x_&&!e.options.segment?m_(t,e,n,i):g_(t,e,n,i)}class Fn extends dn{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;rw(this._points,i,e,o,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=bw(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,o=e[n],l=this.points,c=ex(this,{property:n,start:o,end:o});if(!c.length)return;const u=[],h=p_(i);let p,g;for(p=0,g=c.length;p<g;++p){const{start:v,end:y}=c[p],w=l[v],j=l[y];if(w===j){u.push(w);continue}const N=Math.abs((o-w[n])/(j[n]-w[n])),b=h(w,j,N,i.stepped);b[n]=e[n],u.push(b)}return u.length===1?u[0]:u}pathSegment(e,n,i){return Sd(this)(e,this,n,i)}path(e,n,i){const o=this.segments,l=Sd(this);let c=this._loop;n=n||0,i=i||this.points.length-n;for(const u of o)c&=l(e,this,u,{start:n,end:n+i-1});return!!c}draw(e,n,i,o){const l=this.options||{};(this.points||[]).length&&l.borderWidth&&(e.save(),v_(e,this,i,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}me(Fn,"id","line"),me(Fn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),me(Fn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),me(Fn,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function bm(t,e,n,i){const o=t.options,{[n]:l}=t.getProps([n],i);return Math.abs(e-l)<o.radius+o.hitRadius}class Ar extends dn{constructor(n){super();me(this,"parsed");me(this,"skip");me(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.options,{x:c,y:u}=this.getProps(["x","y"],o);return Math.pow(n-c,2)+Math.pow(i-u,2)<Math.pow(l.hitRadius+l.radius,2)}inXRange(n,i){return bm(this,n,"x",i)}inYRange(n,i){return bm(this,n,"y",i)}getCenterPoint(n){const{x:i,y:o}=this.getProps(["x","y"],n);return{x:i,y:o}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const o=i&&n.borderWidth||0;return(i+o)*2}draw(n,i){const o=this.options;this.skip||o.radius<.1||!Fr(this,i,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,Nd(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}me(Ar,"id","point"),me(Ar,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),me(Ar,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function gx(t,e){const{x:n,y:i,base:o,width:l,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,g,v;return t.horizontal?(v=c/2,u=Math.min(n,o),h=Math.max(n,o),p=i-v,g=i+v):(v=l/2,u=n-v,h=n+v,p=Math.min(i,o),g=Math.max(i,o)),{left:u,top:p,right:h,bottom:g}}function fs(t,e,n,i){return t?0:bt(e,n,i)}function y_(t,e,n){const i=t.options.borderWidth,o=t.borderSkipped,l=Hg(i);return{t:fs(o.top,l.top,0,n),r:fs(o.right,l.right,0,e),b:fs(o.bottom,l.bottom,0,n),l:fs(o.left,l.left,0,e)}}function b_(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,l=Ni(o),c=Math.min(e,n),u=t.borderSkipped,h=i||Ce(o);return{topLeft:fs(!h||u.top||u.left,l.topLeft,0,c),topRight:fs(!h||u.top||u.right,l.topRight,0,c),bottomLeft:fs(!h||u.bottom||u.left,l.bottomLeft,0,c),bottomRight:fs(!h||u.bottom||u.right,l.bottomRight,0,c)}}function j_(t){const e=gx(t),n=e.right-e.left,i=e.bottom-e.top,o=y_(t,n/2,i/2),l=b_(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:l},inner:{x:e.left+o.l,y:e.top+o.t,w:n-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,l.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,l.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,l.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,l.bottomRight-Math.max(o.b,o.r))}}}}function ld(t,e,n,i){const o=e===null,l=n===null,u=t&&!(o&&l)&&gx(t,i);return u&&(o||In(e,u.left,u.right))&&(l||In(n,u.top,u.bottom))}function w_(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function N_(t,e){t.rect(e.x,e.y,e.w,e.h)}function cd(t,e,n={}){const i=t.x!==n.x?-e:0,o=t.y!==n.y?-e:0,l=(t.x+t.w!==n.x+n.w?e:0)-i,c=(t.y+t.h!==n.y+n.h?e:0)-o;return{x:t.x+i,y:t.y+o,w:t.w+l,h:t.h+c,radius:t.radius}}class Co extends dn{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:o}}=this,{inner:l,outer:c}=j_(this),u=w_(c.radius)?Do:N_;e.save(),(c.w!==l.w||c.h!==l.h)&&(e.beginPath(),u(e,cd(c,n,l)),e.clip(),u(e,cd(l,-n,c)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),u(e,cd(l,n)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,n,i){return ld(this,e,n,i)}inXRange(e,n){return ld(this,e,null,n)}inYRange(e,n){return ld(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:o,horizontal:l}=this.getProps(["x","y","base","horizontal"],e);return{x:l?(n+o)/2:n,y:l?i:(i+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}me(Co,"id","bar"),me(Co,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),me(Co,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function __(t,e,n){const i=t.segments,o=t.points,l=e.points,c=[];for(const u of i){let{start:h,end:p}=u;p=Go(h,p,o);const g=Cd(n,o[h],o[p],u.loop);if(!e.segments){c.push({source:u,target:g,start:o[h],end:o[p]});continue}const v=ex(e,g);for(const y of v){const w=Cd(n,l[y.start],l[y.end],y.loop),j=Zg(u,o,w);for(const N of j)c.push({source:N,target:y,start:{[n]:jm(g,w,"start",Math.max)},end:{[n]:jm(g,w,"end",Math.min)}})}}return c}function Cd(t,e,n,i){if(i)return;let o=e[t],l=n[t];return t==="angle"&&(o=$t(o),l=$t(l)),{property:t,start:o,end:l}}function k_(t,e){const{x:n=null,y:i=null}=t||{},o=e.points,l=[];return e.segments.forEach(({start:c,end:u})=>{u=Go(c,u,o);const h=o[c],p=o[u];i!==null?(l.push({x:h.x,y:i}),l.push({x:p.x,y:i})):n!==null&&(l.push({x:n,y:h.y}),l.push({x:n,y:p.y}))}),l}function Go(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function jm(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function xx(t,e){let n=[],i=!1;return et(t)?(i=!0,n=t):n=k_(t,e),n.length?new Fn({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function wm(t){return t&&t.fill!==!1}function S_(t,e,n){let o=t[e].fill;const l=[e];let c;if(!n)return o;for(;o!==!1&&l.indexOf(o)===-1;){if(!wt(o))return o;if(c=t[o],!c)return!1;if(c.visible)return o;l.push(o),o=c.fill}return!1}function C_(t,e,n){const i=A_(t);if(Ce(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return wt(o)&&Math.floor(o)===o?E_(i[0],e,o,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function E_(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function R_(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Ce(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function P_(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:Ce(t)?i=t.value:i=e.getBaseValue(),i}function A_(t){const e=t.options,n=e.fill;let i=_e(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function T_(t){const{scale:e,index:n,line:i}=t,o=[],l=i.segments,c=i.points,u=D_(e,n);u.push(xx({x:null,y:e.bottom},i));for(let h=0;h<l.length;h++){const p=l[h];for(let g=p.start;g<=p.end;g++)L_(o,c[g],u)}return new Fn({points:o,options:{}})}function D_(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){const l=i[o];if(l.index===e)break;l.hidden||n.unshift(l.dataset)}return n}function L_(t,e,n){const i=[];for(let o=0;o<n.length;o++){const l=n[o],{first:c,last:u,point:h}=M_(l,e,"x");if(!(!h||c&&u)){if(c)i.unshift(h);else if(t.push(h),!u)break}}t.push(...i)}function M_(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const o=i[n],l=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<l.length;p++){const g=l[p],v=c[g.start][n],y=c[g.end][n];if(In(o,v,y)){u=o===v,h=o===y;break}}return{first:u,last:h,point:i}}class vx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:o,y:l,radius:c}=this;return n=n||{start:0,end:Ve},e.arc(o,l,c,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:o}=this,l=e.angle;return{x:n+Math.cos(l)*o,y:i+Math.sin(l)*o,angle:l}}}function O_(t){const{chart:e,fill:n,line:i}=t;if(wt(n))return z_(e,n);if(n==="stack")return T_(t);if(n==="shape")return!0;const o=I_(t);return o instanceof vx?o:xx(o,i)}function z_(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function I_(t){return(t.scale||{}).getPointPositionForValue?B_(t):F_(t)}function F_(t){const{scale:e={},fill:n}=t,i=R_(n,e);if(wt(i)){const o=e.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function B_(t){const{scale:e,fill:n}=t,i=e.options,o=e.getLabels().length,l=i.reverse?e.max:e.min,c=P_(n,e,l),u=[];if(i.grid.circular){const h=e.getPointPositionForValue(0,l);return new vx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<o;++h)u.push(e.getPointPositionForValue(h,c));return u}function dd(t,e,n){const i=O_(e),{chart:o,index:l,line:c,scale:u,axis:h}=e,p=c.options,g=p.fill,v=p.backgroundColor,{above:y=v,below:w=v}=g||{},j=o.getDatasetMeta(l),N=tx(o,j);i&&c.points.length&&(Yo(t,n),U_(t,{line:c,target:i,above:y,below:w,area:n,scale:u,axis:h,clip:N}),Qo(t))}function U_(t,e){const{line:n,target:i,above:o,below:l,area:c,scale:u,clip:h}=e,p=n._loop?"angle":e.axis;t.save();let g=l;l!==o&&(p==="x"?(Nm(t,i,c.top),ud(t,{line:n,target:i,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),Nm(t,i,c.bottom)):p==="y"&&(_m(t,i,c.left),ud(t,{line:n,target:i,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),_m(t,i,c.right),g=o)),ud(t,{line:n,target:i,color:g,scale:u,property:p,clip:h}),t.restore()}function Nm(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[Go(h,p,o)];l?(t.moveTo(g.x,g.y),l=!1):(t.lineTo(g.x,n),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(v.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function _m(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[Go(h,p,o)];l?(t.moveTo(g.x,g.y),l=!1):(t.lineTo(n,g.y),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(n,v.y)}t.lineTo(n,e.first().y),t.closePath(),t.clip()}function ud(t,e){const{line:n,target:i,property:o,color:l,scale:c,clip:u}=e,h=__(n,i,o);for(const{source:p,target:g,start:v,end:y}of h){const{style:{backgroundColor:w=l}={}}=p,j=i!==!0;t.save(),t.fillStyle=w,W_(t,c,u,j&&Cd(o,v,y)),t.beginPath();const N=!!n.pathSegment(t,p);let b;if(j){N?t.closePath():km(t,i,y,o);const k=!!i.pathSegment(t,g,{move:N,reverse:!0});b=N&&k,b||km(t,i,v,o)}t.closePath(),t.fill(b?"evenodd":"nonzero"),t.restore()}}function W_(t,e,n,i){const o=e.chart.chartArea,{property:l,start:c,end:u}=i||{};if(l==="x"||l==="y"){let h,p,g,v;l==="x"?(h=c,p=o.top,g=u,v=o.bottom):(h=o.left,p=c,g=o.right,v=u),t.beginPath(),n&&(h=Math.max(h,n.left),g=Math.min(g,n.right),p=Math.max(p,n.top),v=Math.min(v,n.bottom)),t.rect(h,p,g-h,v-p),t.clip()}}function km(t,e,n,i){const o=e.interpolate(n,i);o&&t.lineTo(o.x,o.y)}var yx={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,o=[];let l,c,u,h;for(c=0;c<i;++c)l=t.getDatasetMeta(c),u=l.dataset,h=null,u&&u.options&&u instanceof Fn&&(h={visible:t.isDatasetVisible(c),index:c,fill:C_(u,c,i),chart:t,axis:l.controller.options.indexAxis,scale:l.vScale,line:u}),l.$filler=h,o.push(h);for(c=0;c<i;++c)h=o[c],!(!h||h.fill===!1)&&(h.fill=S_(o,c,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),l=t.chartArea;for(let c=o.length-1;c>=0;--c){const u=o[c].$filler;u&&(u.line.updateControlPoints(l,u.axis),i&&u.fill&&dd(t.ctx,u,l))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){const l=i[o].$filler;wm(l)&&dd(t.ctx,l,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!wm(i)||n.drawTime!=="beforeDatasetDraw"||dd(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Sm=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},$_=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Cm extends dn{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Ue(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,o)=>e.sort(i,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,o=jt(i.font),l=o.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Sm(i,l);let p,g;n.font=o.string,this.isHorizontal()?(p=this.maxWidth,g=this._fitRows(c,l,u,h)+10):(g=this.maxHeight,p=this._fitCols(c,o,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(g,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,o){const{ctx:l,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],g=o+u;let v=e;l.textAlign="left",l.textBaseline="middle";let y=-1,w=-g;return this.legendItems.forEach((j,N)=>{const b=i+n/2+l.measureText(j.text).width;(N===0||p[p.length-1]+b+2*u>c)&&(v+=g,p[p.length-(N>0?0:1)]=0,w+=g,y++),h[N]={left:0,top:w,row:y,width:b,height:o},p[p.length-1]+=b+u}),v}_fitCols(e,n,i,o){const{ctx:l,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],g=c-e;let v=u,y=0,w=0,j=0,N=0;return this.legendItems.forEach((b,k)=>{const{itemWidth:S,itemHeight:A}=H_(i,n,l,b,o);k>0&&w+A+2*u>g&&(v+=y+u,p.push({width:y,height:w}),j+=y+u,N++,y=w=0),h[k]={left:j,top:w,col:N,width:S,height:A},y=Math.max(y,S),w+=A+u}),v+=y,p.push({width:y,height:w}),v}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:o},rtl:l}}=this,c=_i(l,this.left,this.width);if(this.isHorizontal()){let u=0,h=vt(i,this.left+o,this.right-this.lineWidths[u]);for(const p of n)u!==p.row&&(u=p.row,h=vt(i,this.left+o,this.right-this.lineWidths[u])),p.top+=this.top+e+o,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+o}else{let u=0,h=vt(i,this.top+e+o,this.bottom-this.columnSizes[u].height);for(const p of n)p.col!==u&&(u=p.col,h=vt(i,this.top+e+o,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+o,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Yo(e,this),this._draw(),Qo(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:o}=this,{align:l,labels:c}=e,u=Ge.color,h=_i(e.rtl,this.left,this.width),p=jt(c.font),{padding:g}=c,v=p.size,y=v/2;let w;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=p.string;const{boxWidth:j,boxHeight:N,itemHeight:b}=Sm(c,v),k=function(I,L,C){if(isNaN(j)||j<=0||isNaN(N)||N<0)return;o.save();const O=_e(C.lineWidth,1);if(o.fillStyle=_e(C.fillStyle,u),o.lineCap=_e(C.lineCap,"butt"),o.lineDashOffset=_e(C.lineDashOffset,0),o.lineJoin=_e(C.lineJoin,"miter"),o.lineWidth=O,o.strokeStyle=_e(C.strokeStyle,u),o.setLineDash(_e(C.lineDash,[])),c.usePointStyle){const H={radius:N*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:O},X=h.xPlus(I,j/2),F=L+y;$g(o,H,X,F,c.pointStyleWidth&&j)}else{const H=L+Math.max((v-N)/2,0),X=h.leftForLtr(I,j),F=Ni(C.borderRadius);o.beginPath(),Object.values(F).some(te=>te!==0)?Do(o,{x:X,y:H,w:j,h:N,radius:F}):o.rect(X,H,j,N),o.fill(),O!==0&&o.stroke()}o.restore()},S=function(I,L,C){Br(o,C.text,I,L+b/2,p,{strikethrough:C.hidden,textAlign:h.textAlign(C.textAlign)})},A=this.isHorizontal(),z=this._computeTitleHeight();A?w={x:vt(l,this.left+g,this.right-i[0]),y:this.top+g+z,line:0}:w={x:this.left+g,y:vt(l,this.top+z+g,this.bottom-n[0].height),line:0},Xg(this.ctx,e.textDirection);const R=b+g;this.legendItems.forEach((I,L)=>{o.strokeStyle=I.fontColor,o.fillStyle=I.fontColor;const C=o.measureText(I.text).width,O=h.textAlign(I.textAlign||(I.textAlign=c.textAlign)),H=j+y+C;let X=w.x,F=w.y;h.setWidth(this.width),A?L>0&&X+H+g>this.right&&(F=w.y+=R,w.line++,X=w.x=vt(l,this.left+g,this.right-i[w.line])):L>0&&F+R>this.bottom&&(X=w.x=X+n[w.line].width+g,w.line++,F=w.y=vt(l,this.top+z+g,this.bottom-n[w.line].height));const te=h.x(X);if(k(te,F,I),X=j1(O,X+j+y,A?X+H:this.right,e.rtl),S(h.x(X),F,I),A)w.x+=H+g;else if(typeof I.text!="string"){const q=p.lineHeight;w.y+=bx(I,q)+g}else w.y+=R}),Gg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=jt(n.font),o=en(n.padding);if(!n.display)return;const l=_i(e.rtl,this.left,this.width),c=this.ctx,u=n.position,h=i.size/2,p=o.top+h;let g,v=this.left,y=this.width;if(this.isHorizontal())y=Math.max(...this.lineWidths),g=this.top+p,v=vt(e.align,v,this.right-y);else{const j=this.columnSizes.reduce((N,b)=>Math.max(N,b.height),0);g=p+vt(e.align,this.top,this.bottom-j-e.labels.padding-this._computeTitleHeight())}const w=vt(u,v,v+y);c.textAlign=l.textAlign(Hd(u)),c.textBaseline="middle",c.strokeStyle=n.color,c.fillStyle=n.color,c.font=i.string,Br(c,n.text,w,g,i)}_computeTitleHeight(){const e=this.options.title,n=jt(e.font),i=en(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,o,l;if(In(e,this.left,this.right)&&In(n,this.top,this.bottom)){for(l=this.legendHitBoxes,i=0;i<l.length;++i)if(o=l[i],In(e,o.left,o.left+o.width)&&In(n,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Y_(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,l=$_(o,i);o&&!l&&Ue(n.onLeave,[e,o,this],this),this._hoveredItem=i,i&&!l&&Ue(n.onHover,[e,i,this],this)}else i&&Ue(n.onClick,[e,i,this],this)}}function H_(t,e,n,i,o){const l=V_(i,t,e,n),c=q_(o,i,e.lineHeight);return{itemWidth:l,itemHeight:c}}function V_(t,e,n,i){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((l,c)=>l.length>c.length?l:c)),e+n.size/2+i.measureText(o).width}function q_(t,e,n){let i=t;return typeof e.text!="string"&&(i=bx(e,n)),i}function bx(t,e){const n=t.text?t.text.length:0;return e*n}function Y_(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var jx={id:"legend",_element:Cm,start(t,e,n){const i=t.legend=new Cm({ctx:t.ctx,options:n,chart:t});Zt.configure(t,i,n),Zt.addBox(t,i)},stop(t){Zt.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Zt.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,o=n.chart;o.isDatasetVisible(i)?(o.hide(i),e.hidden=!0):(o.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(n?0:void 0),g=en(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:l,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(g.width+g.height)/4,strokeStyle:p.borderColor,pointStyle:i||p.pointStyle,rotation:p.rotation,textAlign:o||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class wx extends dn{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const o=et(i.text)?i.text.length:1;this._padding=en(i.padding);const l=o*jt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=l:this.width=l}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:o,right:l,options:c}=this,u=c.align;let h=0,p,g,v;return this.isHorizontal()?(g=vt(u,i,l),v=n+e,p=l-i):(c.position==="left"?(g=i+e,v=vt(u,o,n),h=ze*-.5):(g=l-e,v=vt(u,n,o),h=ze*.5),p=o-n),{titleX:g,titleY:v,maxWidth:p,rotation:h}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=jt(n.font),l=i.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(l);Br(e,n.text,0,0,i,{color:n.color,maxWidth:h,rotation:p,textAlign:Hd(n.align),textBaseline:"middle",translation:[c,u]})}}function Q_(t,e){const n=new wx({ctx:t.ctx,options:e,chart:t});Zt.configure(t,n,e),Zt.addBox(t,n),t.titleBlock=n}var Nx={id:"title",_element:wx,start(t,e,n){Q_(t,n)},stop(t){const e=t.titleBlock;Zt.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Zt.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Sr={average(t){if(!t.length)return!1;let e,n,i=new Set,o=0,l=0;for(e=0,n=t.length;e<n;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();i.add(h.x),o+=h.y,++l}}return l===0||i.size===0?!1:{x:[...i].reduce((u,h)=>u+h)/i.size,y:o/l}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,o=Number.POSITIVE_INFINITY,l,c,u;for(l=0,c=t.length;l<c;++l){const h=t[l].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),g=jd(e,p);g<o&&(o=g,u=h)}}if(u){const h=u.tooltipPosition();n=h.x,i=h.y}return{x:n,y:i}}};function bn(t,e){return e&&(et(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Mn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function K_(t,e){const{element:n,datasetIndex:i,index:o}=e,l=t.getDatasetMeta(i).controller,{label:c,value:u}=l.getLabelAndValue(o);return{chart:t,label:c,parsed:l.getParsed(o),raw:t.data.datasets[i].data[o],formattedValue:u,dataset:l.getDataset(),dataIndex:o,datasetIndex:i,element:n}}function Em(t,e){const n=t.chart.ctx,{body:i,footer:o,title:l}=t,{boxWidth:c,boxHeight:u}=e,h=jt(e.bodyFont),p=jt(e.titleFont),g=jt(e.footerFont),v=l.length,y=o.length,w=i.length,j=en(e.padding);let N=j.height,b=0,k=i.reduce((z,R)=>z+R.before.length+R.lines.length+R.after.length,0);if(k+=t.beforeBody.length+t.afterBody.length,v&&(N+=v*p.lineHeight+(v-1)*e.titleSpacing+e.titleMarginBottom),k){const z=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;N+=w*z+(k-w)*h.lineHeight+(k-1)*e.bodySpacing}y&&(N+=e.footerMarginTop+y*g.lineHeight+(y-1)*e.footerSpacing);let S=0;const A=function(z){b=Math.max(b,n.measureText(z).width+S)};return n.save(),n.font=p.string,Oe(t.title,A),n.font=h.string,Oe(t.beforeBody.concat(t.afterBody),A),S=e.displayColors?c+2+e.boxPadding:0,Oe(i,z=>{Oe(z.before,A),Oe(z.lines,A),Oe(z.after,A)}),S=0,n.font=g.string,Oe(t.footer,A),n.restore(),b+=j.width,{width:b,height:N}}function X_(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function G_(t,e,n,i){const{x:o,width:l}=i,c=n.caretSize+n.caretPadding;if(t==="left"&&o+l+c>e.width||t==="right"&&o-l-c<0)return!0}function J_(t,e,n,i){const{x:o,width:l}=n,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return i==="center"?p=o<=(u+h)/2?"left":"right":o<=l/2?p="left":o>=c-l/2&&(p="right"),G_(p,t,e,n)&&(p="center"),p}function Rm(t,e,n){const i=n.yAlign||e.yAlign||X_(t,n);return{xAlign:n.xAlign||e.xAlign||J_(t,e,n,i),yAlign:i}}function Z_(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function ek(t,e,n){let{y:i,height:o}=t;return e==="top"?i+=n:e==="bottom"?i-=o+n:i-=o/2,i}function Pm(t,e,n,i){const{caretSize:o,caretPadding:l,cornerRadius:c}=t,{xAlign:u,yAlign:h}=n,p=o+l,{topLeft:g,topRight:v,bottomLeft:y,bottomRight:w}=Ni(c);let j=Z_(e,u);const N=ek(e,h,p);return h==="center"?u==="left"?j+=p:u==="right"&&(j-=p):u==="left"?j-=Math.max(g,y)+o:u==="right"&&(j+=Math.max(v,w)+o),{x:bt(j,0,i.width-e.width),y:bt(N,0,i.height-e.height)}}function vo(t,e,n){const i=en(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Am(t){return bn([],Mn(t))}function tk(t,e,n){return Qs(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Tm(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const _x={beforeTitle:Dn,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Dn,beforeBody:Dn,beforeLabel:Dn,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return De(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Dn,afterBody:Dn,beforeFooter:Dn,footer:Dn,afterFooter:Dn};function Lt(t,e,n,i){const o=t[e].call(n,i);return typeof o>"u"?_x[e].call(n,i):o}class Ed extends dn{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&n.options.animation&&i.animations,l=new nx(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(l)),l}getContext(){return this.$context||(this.$context=tk(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,o=Lt(i,"beforeTitle",this,e),l=Lt(i,"title",this,e),c=Lt(i,"afterTitle",this,e);let u=[];return u=bn(u,Mn(o)),u=bn(u,Mn(l)),u=bn(u,Mn(c)),u}getBeforeBody(e,n){return Am(Lt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,o=[];return Oe(e,l=>{const c={before:[],lines:[],after:[]},u=Tm(i,l);bn(c.before,Mn(Lt(u,"beforeLabel",this,l))),bn(c.lines,Lt(u,"label",this,l)),bn(c.after,Mn(Lt(u,"afterLabel",this,l))),o.push(c)}),o}getAfterBody(e,n){return Am(Lt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,o=Lt(i,"beforeFooter",this,e),l=Lt(i,"footer",this,e),c=Lt(i,"afterFooter",this,e);let u=[];return u=bn(u,Mn(o)),u=bn(u,Mn(l)),u=bn(u,Mn(c)),u}_createItems(e){const n=this._active,i=this.chart.data,o=[],l=[],c=[];let u=[],h,p;for(h=0,p=n.length;h<p;++h)u.push(K_(this.chart,n[h]));return e.filter&&(u=u.filter((g,v,y)=>e.filter(g,v,y,i))),e.itemSort&&(u=u.sort((g,v)=>e.itemSort(g,v,i))),Oe(u,g=>{const v=Tm(e.callbacks,g);o.push(Lt(v,"labelColor",this,g)),l.push(Lt(v,"labelPointStyle",this,g)),c.push(Lt(v,"labelTextColor",this,g))}),this.labelColors=o,this.labelPointStyles=l,this.labelTextColors=c,this.dataPoints=u,u}update(e,n){const i=this.options.setContext(this.getContext()),o=this._active;let l,c=[];if(!o.length)this.opacity!==0&&(l={opacity:0});else{const u=Sr[i.position].call(this,o,this._eventPosition);c=this._createItems(i),this.title=this.getTitle(c,i),this.beforeBody=this.getBeforeBody(c,i),this.body=this.getBody(c,i),this.afterBody=this.getAfterBody(c,i),this.footer=this.getFooter(c,i);const h=this._size=Em(this,i),p=Object.assign({},u,h),g=Rm(this.chart,i,p),v=Pm(i,p,g,this.chart);this.xAlign=g.xAlign,this.yAlign=g.yAlign,l={opacity:1,x:v.x,y:v.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,l&&this._resolveAnimations().update(this,l),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,o){const l=this.getCaretPosition(e,i,o);n.lineTo(l.x1,l.y1),n.lineTo(l.x2,l.y2),n.lineTo(l.x3,l.y3)}getCaretPosition(e,n,i){const{xAlign:o,yAlign:l}=this,{caretSize:c,cornerRadius:u}=i,{topLeft:h,topRight:p,bottomLeft:g,bottomRight:v}=Ni(u),{x:y,y:w}=e,{width:j,height:N}=n;let b,k,S,A,z,R;return l==="center"?(z=w+N/2,o==="left"?(b=y,k=b-c,A=z+c,R=z-c):(b=y+j,k=b+c,A=z-c,R=z+c),S=b):(o==="left"?k=y+Math.max(h,g)+c:o==="right"?k=y+j-Math.max(p,v)-c:k=this.caretX,l==="top"?(A=w,z=A-c,b=k-c,S=k+c):(A=w+N,z=A+c,b=k+c,S=k-c),R=A),{x1:b,x2:k,x3:S,y1:A,y2:z,y3:R}}drawTitle(e,n,i){const o=this.title,l=o.length;let c,u,h;if(l){const p=_i(i.rtl,this.x,this.width);for(e.x=vo(this,i.titleAlign,i),n.textAlign=p.textAlign(i.titleAlign),n.textBaseline="middle",c=jt(i.titleFont),u=i.titleSpacing,n.fillStyle=i.titleColor,n.font=c.string,h=0;h<l;++h)n.fillText(o[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===l&&(e.y+=i.titleMarginBottom-u)}}_drawColorBox(e,n,i,o,l){const c=this.labelColors[i],u=this.labelPointStyles[i],{boxHeight:h,boxWidth:p}=l,g=jt(l.bodyFont),v=vo(this,"left",l),y=o.x(v),w=h<g.lineHeight?(g.lineHeight-h)/2:0,j=n.y+w;if(l.usePointStyle){const N={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},b=o.leftForLtr(y,p)+p/2,k=j+h/2;e.strokeStyle=l.multiKeyBackground,e.fillStyle=l.multiKeyBackground,Nd(e,N,b,k),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Nd(e,N,b,k)}else{e.lineWidth=Ce(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const N=o.leftForLtr(y,p),b=o.leftForLtr(o.xPlus(y,1),p-2),k=Ni(c.borderRadius);Object.values(k).some(S=>S!==0)?(e.beginPath(),e.fillStyle=l.multiKeyBackground,Do(e,{x:N,y:j,w:p,h,radius:k}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),Do(e,{x:b,y:j+1,w:p-2,h:h-2,radius:k}),e.fill()):(e.fillStyle=l.multiKeyBackground,e.fillRect(N,j,p,h),e.strokeRect(N,j,p,h),e.fillStyle=c.backgroundColor,e.fillRect(b,j+1,p-2,h-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:o}=this,{bodySpacing:l,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:g}=i,v=jt(i.bodyFont);let y=v.lineHeight,w=0;const j=_i(i.rtl,this.x,this.width),N=function(C){n.fillText(C,j.x(e.x+w),e.y+y/2),e.y+=y+l},b=j.textAlign(c);let k,S,A,z,R,I,L;for(n.textAlign=c,n.textBaseline="middle",n.font=v.string,e.x=vo(this,b,i),n.fillStyle=i.bodyColor,Oe(this.beforeBody,N),w=u&&b!=="right"?c==="center"?p/2+g:p+2+g:0,z=0,I=o.length;z<I;++z){for(k=o[z],S=this.labelTextColors[z],n.fillStyle=S,Oe(k.before,N),A=k.lines,u&&A.length&&(this._drawColorBox(n,e,z,j,i),y=Math.max(v.lineHeight,h)),R=0,L=A.length;R<L;++R)N(A[R]),y=v.lineHeight;Oe(k.after,N)}w=0,y=v.lineHeight,Oe(this.afterBody,N),e.y-=l}drawFooter(e,n,i){const o=this.footer,l=o.length;let c,u;if(l){const h=_i(i.rtl,this.x,this.width);for(e.x=vo(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=h.textAlign(i.footerAlign),n.textBaseline="middle",c=jt(i.footerFont),n.fillStyle=i.footerColor,n.font=c.string,u=0;u<l;++u)n.fillText(o[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+i.footerSpacing}}drawBackground(e,n,i,o){const{xAlign:l,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:g}=i,{topLeft:v,topRight:y,bottomLeft:w,bottomRight:j}=Ni(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(u+v,h),c==="top"&&this.drawCaret(e,n,i,o),n.lineTo(u+p-y,h),n.quadraticCurveTo(u+p,h,u+p,h+y),c==="center"&&l==="right"&&this.drawCaret(e,n,i,o),n.lineTo(u+p,h+g-j),n.quadraticCurveTo(u+p,h+g,u+p-j,h+g),c==="bottom"&&this.drawCaret(e,n,i,o),n.lineTo(u+w,h+g),n.quadraticCurveTo(u,h+g,u,h+g-w),c==="center"&&l==="left"&&this.drawCaret(e,n,i,o),n.lineTo(u,h+v),n.quadraticCurveTo(u,h,u+v,h),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,o=i&&i.x,l=i&&i.y;if(o||l){const c=Sr[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Em(this,e),h=Object.assign({},c,this._size),p=Rm(n,e,h),g=Pm(e,h,p,n);(o._to!==g.x||l._to!==g.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,g))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},l={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const c=en(n.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&u&&(e.save(),e.globalAlpha=i,this.drawBackground(l,e,o,n),Xg(e,n.textDirection),l.y+=c.top,this.drawTitle(l,e,n),this.drawBody(l,e,n),this.drawFooter(l,e,n),Gg(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,o=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),l=!Po(i,o),c=this._positionChanged(o,n);(l||c)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,l=this._active||[],c=this._getActiveElements(e,l,n,i),u=this._positionChanged(c,e),h=n||!Po(c,l)||u;return h&&(this._active=c,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),h}_getActiveElements(e,n,i,o){const l=this.options;if(e.type==="mouseout")return[];if(!o)return n.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,l.mode,l,i);return l.reverse&&c.reverse(),c}_positionChanged(e,n){const{caretX:i,caretY:o,options:l}=this,c=Sr[l.position].call(this,e,n);return c!==!1&&(i!==c.x||o!==c.y)}}me(Ed,"positioners",Sr);var kx={id:"tooltip",_element:Ed,positioners:Sr,afterInit(t,e,n){n&&(t.tooltip=new Ed({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_x},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const nk=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function sk(t,e,n,i){const o=t.indexOf(e);if(o===-1)return nk(t,e,n,i);const l=t.lastIndexOf(e);return o!==l?n:o}const ik=(t,e)=>t===null?null:bt(Math.round(t),0,e);function Dm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class zo extends Pi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:o,label:l}of n)i[o]===l&&i.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(De(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:sk(i,e,_e(n,e),this._addedLabels),ik(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,o=[];let l=this.getLabels();l=e===0&&n===l.length-1?l:l.slice(e,n+1),this._valueRange=Math.max(l.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let c=e;c<=n;c++)o.push({value:c});return o}getLabelForValue(e){return Dm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}me(zo,"id","category"),me(zo,"defaults",{ticks:{callback:Dm}});function rk(t,e){const n=[],{bounds:o,step:l,min:c,max:u,precision:h,count:p,maxTicks:g,maxDigits:v,includeBounds:y}=t,w=l||1,j=g-1,{min:N,max:b}=e,k=!De(c),S=!De(u),A=!De(p),z=(b-N)/(v+1);let R=Pp((b-N)/j/w)*w,I,L,C,O;if(R<1e-14&&!k&&!S)return[{value:N},{value:b}];O=Math.ceil(b/R)-Math.floor(N/R),O>j&&(R=Pp(O*R/j/w)*w),De(h)||(I=Math.pow(10,h),R=Math.ceil(R*I)/I),o==="ticks"?(L=Math.floor(N/R)*R,C=Math.ceil(b/R)*R):(L=N,C=b),k&&S&&l&&h1((u-c)/l,R/1e3)?(O=Math.round(Math.min((u-c)/R,g)),R=(u-c)/O,L=c,C=u):A?(L=k?c:L,C=S?u:C,O=p-1,R=(C-L)/O):(O=(C-L)/R,Er(O,Math.round(O),R/1e3)?O=Math.round(O):O=Math.ceil(O));const H=Math.max(Ap(R),Ap(L));I=Math.pow(10,De(h)?H:h),L=Math.round(L*I)/I,C=Math.round(C*I)/I;let X=0;for(k&&(y&&L!==c?(n.push({value:c}),L<c&&X++,Er(Math.round((L+X*R)*I)/I,c,Lm(c,z,t))&&X++):L<c&&X++);X<O;++X){const F=Math.round((L+X*R)*I)/I;if(S&&F>u)break;n.push({value:F})}return S&&y&&C!==u?n.length&&Er(n[n.length-1].value,u,Lm(u,z,t))?n[n.length-1].value=u:n.push({value:u}):(!S||C===u)&&n.push({value:C}),n}function Lm(t,e,{horizontal:n,minRotation:i}){const o=zn(i),l=(n?Math.sin(o):Math.cos(o))||.001,c=.75*e*(""+t).length;return Math.min(e/l,c)}class ak extends Pi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return De(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:o,max:l}=this;const c=h=>o=n?o:h,u=h=>l=i?l:h;if(e){const h=Nn(o),p=Nn(l);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(o===l){let h=l===0?1:Math.abs(l*.05);u(l+h),e||c(o-h)}this.min=o,this.max=l}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},l=this._range||this,c=rk(o,l);return e.bounds==="ticks"&&f1(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const o=(i-n)/Math.max(e.length-1,1)/2;n-=o,i+=o}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return qd(e,this.chart.options.locale,this.options.ticks.format)}}class Io extends ak{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=wt(e)?e:0,this.max=wt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=zn(this.options.ticks.minRotation),o=(e?Math.sin(i):Math.cos(i))||.001,l=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,l.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}me(Io,"id","linear"),me(Io,"defaults",{ticks:{callback:Wg.formatters.numeric}});const Jo={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Mt=Object.keys(Jo);function Mm(t,e){return t-e}function Om(t,e){if(De(e))return null;const n=t._adapter,{parser:i,round:o,isoWeekday:l}=t._parseOpts;let c=e;return typeof i=="function"&&(c=i(c)),wt(c)||(c=typeof i=="string"?n.parse(c,i):n.parse(c)),c===null?null:(o&&(c=o==="week"&&(zr(l)||l===!0)?n.startOf(c,"isoWeek",l):n.startOf(c,o)),+c)}function zm(t,e,n,i){const o=Mt.length;for(let l=Mt.indexOf(t);l<o-1;++l){const c=Jo[Mt[l]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((n-e)/(u*c.size))<=i)return Mt[l]}return Mt[o-1]}function ok(t,e,n,i,o){for(let l=Mt.length-1;l>=Mt.indexOf(n);l--){const c=Mt[l];if(Jo[c].common&&t._adapter.diff(o,i,c)>=e-1)return c}return Mt[n?Mt.indexOf(n):0]}function lk(t){for(let e=Mt.indexOf(t)+1,n=Mt.length;e<n;++e)if(Jo[Mt[e]].common)return Mt[e]}function Im(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:o}=$d(n,e),l=n[i]>=e?n[i]:n[o];t[l]=!0}}function ck(t,e,n,i){const o=t._adapter,l=+o.startOf(e[0].value,i),c=e[e.length-1].value;let u,h;for(u=l;u<=c;u=+o.add(u,1,i))h=n[u],h>=0&&(e[h].major=!0);return e}function Fm(t,e,n){const i=[],o={},l=e.length;let c,u;for(c=0;c<l;++c)u=e[c],o[u]=c,i.push({value:u,major:!1});return l===0||!n?i:ck(t,i,o,n)}class Fo extends Pi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),o=this._adapter=new Kw._date(e.adapters.date);o.init(n),Cr(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Om(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:o,max:l,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(o=Math.min(o,p.min)),!u&&!isNaN(p.max)&&(l=Math.max(l,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),o=wt(o)&&!isNaN(o)?o:+n.startOf(Date.now(),i),l=wt(l)&&!isNaN(l)?l:+n.endOf(Date.now(),i)+1,this.min=Math.min(o,l-1),this.max=Math.max(o+1,l)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const l=this.min,c=this.max,u=v1(o,l,c);return this._unit=n.unit||(i.autoSkip?zm(n.minUnit,this.min,this.max,this._getLabelCapacity(l)):ok(this,u.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:lk(this._unit),this.initOffsets(o),e.reverse&&u.reverse(),Fm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,o,l;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?n=1-o:n=(this.getDecimalForValue(e[1])-o)/2,l=this.getDecimalForValue(e[e.length-1]),e.length===1?i=l:i=(l-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;n=bt(n,0,c),i=bt(i,0,c),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,o=this.options,l=o.time,c=l.unit||zm(l.minUnit,n,i,this._getLabelCapacity(n)),u=_e(o.ticks.stepSize,1),h=c==="week"?l.isoWeekday:!1,p=zr(h)||h===!0,g={};let v=n,y,w;if(p&&(v=+e.startOf(v,"isoWeek",h)),v=+e.startOf(v,p?"day":c),e.diff(i,n,c)>1e5*u)throw new Error(n+" and "+i+" are too far apart with stepSize of "+u+" "+c);const j=o.ticks.source==="data"&&this.getDataTimestamps();for(y=v,w=0;y<i;y=+e.add(y,u,c),w++)Im(g,y,j);return(y===i||o.bounds==="ticks"||w===1)&&Im(g,y,j),Object.keys(g).sort(Mm).map(N=>+N)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const o=this.options.time.displayFormats,l=this._unit,c=n||o[l];return this._adapter.format(e,c)}_tickFormatFunction(e,n,i,o){const l=this.options,c=l.ticks.callback;if(c)return Ue(c,[e,n,i],this);const u=l.time.displayFormats,h=this._unit,p=this._majorUnit,g=h&&u[h],v=p&&u[p],y=i[n],w=p&&v&&y&&y.major;return this._adapter.format(e,o||(w?v:g))}generateTickLabels(e){let n,i,o;for(n=0,i=e.length;n<i;++n)o=e[n],o.label=this._tickFormatFunction(o.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,o=zn(this.isHorizontal()?n.maxRotation:n.minRotation),l=Math.cos(o),c=Math.sin(o),u=this._resolveTickFontOptions(0).size;return{w:i*l+u*c,h:i*c+u*l}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,o=i[n.unit]||i.millisecond,l=this._tickFormatFunction(e,0,Fm(this,[e],this._majorUnit),o),c=this._getLabelSize(l),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,i=o.length;n<i;++n)e=e.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const o=this.getLabels();for(n=0,i=o.length;n<i;++n)e.push(Om(this,o[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Fg(e.sort(Mm))}}me(Fo,"id","time"),me(Fo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function yo(t,e,n){let i=0,o=t.length-1,l,c,u,h;n?(e>=t[i].pos&&e<=t[o].pos&&({lo:i,hi:o}=Bs(t,"pos",e)),{pos:l,time:u}=t[i],{pos:c,time:h}=t[o]):(e>=t[i].time&&e<=t[o].time&&({lo:i,hi:o}=Bs(t,"time",e)),{time:l,pos:u}=t[i],{time:c,pos:h}=t[o]);const p=c-l;return p?u+(h-u)*(e-l)/p:u}class Bm extends Fo{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=yo(n,this.min),this._tableRange=yo(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,o=[],l=[];let c,u,h,p,g;for(c=0,u=e.length;c<u;++c)p=e[c],p>=n&&p<=i&&o.push(p);if(o.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(c=0,u=o.length;c<u;++c)g=o[c+1],h=o[c-1],p=o[c],Math.round((g+h)/2)!==p&&l.push({time:p,pos:c/(u-1)});return l}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((o,l)=>o-l)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(yo(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return yo(this._table,i*this._tableRange+this._minPos,!0)}}me(Bm,"id","timeseries"),me(Bm,"defaults",Fo.defaults);const Sx="label";function Um(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function dk(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Cx(t,e){t.labels=e}function Ex(t,e,n=Sx){const i=[];t.datasets=e.map(o=>{const l=t.datasets.find(c=>c[n]===o[n]);return!l||!o.data||i.includes(l)?{...o}:(i.push(l),Object.assign(l,o),l)})}function uk(t,e=Sx){const n={labels:[],datasets:[]};return Cx(n,t.labels),Ex(n,t.datasets,e),n}function hk(t,e){const{height:n=150,width:i=300,redraw:o=!1,datasetIdKey:l,type:c,data:u,options:h,plugins:p=[],fallbackContent:g,updateMode:v,...y}=t,w=E.useRef(null),j=E.useRef(null),N=()=>{w.current&&(j.current=new Kr(w.current,{type:c,data:uk(u,l),options:h&&{...h},plugins:p}),Um(e,j.current))},b=()=>{Um(e,null),j.current&&(j.current.destroy(),j.current=null)};return E.useEffect(()=>{!o&&j.current&&h&&dk(j.current,h)},[o,h]),E.useEffect(()=>{!o&&j.current&&Cx(j.current.config.data,u.labels)},[o,u.labels]),E.useEffect(()=>{!o&&j.current&&u.datasets&&Ex(j.current.config.data,u.datasets,l)},[o,u.datasets]),E.useEffect(()=>{j.current&&(o?(b(),setTimeout(N)):j.current.update(v))},[o,h,u.labels,u.datasets,v]),E.useEffect(()=>{j.current&&(b(),setTimeout(N))},[c]),E.useEffect(()=>(N(),()=>b()),[]),r.jsx("canvas",{ref:w,role:"img",height:n,width:i,...y,children:g})}const fk=E.forwardRef(hk);function eu(t,e){return Kr.register(e),E.forwardRef((n,i)=>r.jsx(fk,{...n,ref:i,type:t}))}const Rd=eu("line",_o),pk=eu("bar",No),mk=eu("doughnut",Nr);Kr.register(zo,Io,Ar,Fn,Co,kr,Nx,kx,jx,yx);function gk(){var k,S,A,z,R,I,L,C,O;const{t}=ct(),e=Bn(),[n,i]=E.useState(null),[o,l]=E.useState(null),[c,u]=E.useState(null),[h,p]=E.useState(!0);if(E.useEffect(()=>{Promise.all([wn.stats(),yd.get(24),Rg.getCollectionStats()]).then(([H,X,F])=>{var ie,K;i(H.data);const te=24,q=[],oe=[],$=[];for(let re=te-1;re>=0;re--){const G=new Date;G.setHours(G.getHours()-re),q.push(G.getHours()+":00");const D=new Date(G);D.setMinutes(0,0,0);const Q=new Date(G);Q.setMinutes(59,59,999);const ge=((ie=X.data.entries)==null?void 0:ie.filter(je=>{const Z=new Date(je.timestamp);return je.type==="event"&&Z>=D&&Z<=Q}).length)||0,ve=((K=X.data.entries)==null?void 0:K.filter(je=>{const Z=new Date(je.timestamp);return je.type==="alert"&&Z>=D&&Z<=Q}).length)||0;oe.push(ge),$.push(ve)}l({labels:q,events:oe,alerts:$}),u(F.data),p(!1)}).catch(()=>{i({total:0,by_severity:{},by_status:{}}),l({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return r.jsx("div",{className:"dashboard",children:r.jsxs("div",{className:"dashboard-loading",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})});const g=n!=null&&n.by_type?Object.entries(n.by_type).sort((H,X)=>X[1]-H[1]).slice(0,5):[],v={labels:(o==null?void 0:o.labels)||[],datasets:[{label:t("dashboard.events"),data:(o==null?void 0:o.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(o==null?void 0:o.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:g.map(([H])=>H),datasets:[{data:g.map(([,H])=>H),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},j={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},N={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((k=n==null?void 0:n.by_severity)==null?void 0:k.critical)||0,((S=n==null?void 0:n.by_severity)==null?void 0:S.high)||0,((A=n==null?void 0:n.by_severity)==null?void 0:A.medium)||0,((z=n==null?void 0:n.by_severity)==null?void 0:z.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return r.jsxs("div",{className:"dashboard",children:[r.jsxs("div",{className:"dashboard-header",children:[r.jsx("h2",{children:t("dashboard.title")}),r.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),r.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((R=n==null?void 0:n.by_severity)==null?void 0:R.critical)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((I=n==null?void 0:n.by_severity)==null?void 0:I.high)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[r.jsx("div",{className:"stat-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((L=n==null?void 0:n.by_severity)==null?void 0:L.medium)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((C=n==null?void 0:n.by_severity)==null?void 0:C.low)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),r.jsx("div",{className:"stat-glow"})]})]}),r.jsxs("div",{className:"dashboard-grid",children:[r.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.eventTrend")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),r.jsx("div",{className:"chart-body",children:r.jsx(Rd,{data:v,options:y})})]}),r.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.topAlertTypes")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),r.jsx("div",{className:"chart-body",children:g.length>0?r.jsx(mk,{data:w,options:j}):r.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),r.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.bySeverity")})}),r.jsx("div",{className:"chart-body",children:r.jsx(pk,{data:N,options:b})})]}),r.jsxs("div",{className:"chart-card chart-collection",children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.collectionStatus")})}),r.jsxs("div",{className:"chart-body collection-stats",children:[r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),r.jsx("span",{className:"collection-value",children:((O=c==null?void 0:c.total_events)==null?void 0:O.toLocaleString())||0})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),r.jsxs("div",{className:"collection-sources",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),r.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(H=>r.jsx("span",{className:"source-tag",children:H},H))})]})]})]})]}),r.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("dashboard.recentAlerts")}),r.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),r.jsx("div",{className:"recent-alerts-list",children:n&&n.total>0?r.jsxs("div",{className:"alert-preview",children:[r.jsx("div",{className:"alert-count-badge",children:n.total}),r.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):r.jsxs("div",{className:"no-alerts",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function xk(){var hn;const[t,e]=E.useState([]),[n,i]=E.useState(!0),[o,l]=E.useState(1),[c,u]=E.useState(50),[h,p]=E.useState(""),[g,v]=E.useState(1),[y,w]=E.useState(0),[j,N]=E.useState(!1),[b,k]=E.useState(!1),[S,A]=E.useState(0),[z,R]=E.useState(!1),[I,L]=E.useState([]),[C,O]=E.useState(!1),[H,X]=E.useState("timestamp"),[F,te]=E.useState("desc"),[q,oe]=E.useState(""),[$,ie]=E.useState(""),[K,re]=E.useState(""),[G,D]=E.useState(""),[Q,ge]=E.useState("AND"),[ve,je]=E.useState([]),[Z,Ee]=E.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),Re=(ae=1)=>{i(!0);const fe={Critical:1,Error:2,Warning:3,Info:4,Debug:5},U=G.split(",").map(Le=>parseInt(Le.trim(),10)).filter(Le=>!isNaN(Le)),ce=q.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),Se=$.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),It=K.split(",").map(Le=>Le.trim()).filter(Le=>Le.length>0),Ct={keywords:(Z==null?void 0:Z.keywords)||"",keyword_mode:Q,regex:C,page:ae,page_size:c,sort_by:H,sort_order:F,start_time:(Z==null?void 0:Z.start_time)||void 0,end_time:(Z==null?void 0:Z.end_time)||void 0,levels:I.map(Le=>fe[Le]).filter(Le=>Le),event_ids:U.length>0?U:void 0,log_names:Z!=null&&Z.log_names&&Z.log_names.length>0?Z.log_names:void 0,sources:ce.length>0?ce:void 0,users:Se.length>0?Se:void 0,computers:It.length>0?It:void 0};Ms.search(Ct).then(Le=>{const ft=Le.data;e(ft.events||[]),w(ft.total||0);const Ht=Math.ceil((ft.total||0)/c);v(Ht||1),A(ft.query_time_ms||0),k(!0),i(!1)}).catch(()=>{Ms.list(ae,c).then(Le=>{const ft=Le.data;e(ft.events||[]),w(ft.total||0),v(ft.total_pages||1),k(!1),i(!1)}).catch(()=>i(!1))})},Te=()=>{l(1),Re(1)},dt=()=>{Ee({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),L([]),O(!1),X("timestamp"),te("desc"),oe(""),ie(""),re(""),D(""),k(!1),ge("AND"),l(1)};E.useEffect(()=>{i(!0);const ae=Z&&(Z.log_names&&Z.log_names.length>0||Z.levels&&Z.levels.length>0||Z.event_ids&&Z.event_ids.length>0||Z.start_time||Z.end_time);Z!=null&&Z.keywords&&Z.keywords.trim()!==""?Ms.search({keywords:Z.keywords,keyword_mode:Q,regex:C,page:o,page_size:c,sort_by:H,sort_order:F,levels:I.map(fe=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[fe]||0).filter(fe=>fe>0),start_time:Z.start_time,end_time:Z.end_time}).then(fe=>{const U=fe.data;e(U.events||[]),w(U.total||0);const ce=Math.ceil((U.total||0)/c);v(ce||1),i(!1)}).catch(()=>i(!1)):ae?Ms.list(o,c,{log_names:Z.log_names,levels:Z.levels,event_ids:Z.event_ids,start_time:Z.start_time,end_time:Z.end_time,sort_by:H,sort_order:F}).then(fe=>{const U=fe.data;e(U.events||[]),w(U.total||0),v(U.total_pages||1),i(!1)}).catch(()=>i(!1)):Ms.list(o,c,{sort_by:H,sort_order:F}).then(fe=>{const U=fe.data;e(U.events||[]),w(U.total||0),v(U.total_pages||1),i(!1)}).catch(()=>i(!1))},[o,Z,H,F,c,I,Q,C]);const Un=ae=>{u(ae),l(1)},Wn=ae=>{ae.preventDefault();const fe=parseInt(h,10);!isNaN(fe)&&fe>=1&&fe<=g&&(l(fe),p(""))};E.useEffect(()=>{Rg.getLogNames().then(ae=>{const fe=ae.data;je(fe.log_names||[])}).catch(()=>{})},[]);const tn=async ae=>{N(!0);try{const fe=await Ms.export({format:ae,filters:Z});if(ae==="json"){const U=new Blob([JSON.stringify(fe.data,null,2)],{type:"application/json"});$n(U,`events_export.${ae}`)}else{const U=new Blob([fe.data],{type:ae==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});$n(U,`events_export.${ae==="excel"?"xlsx":ae}`)}}catch(fe){console.error("Export failed:",fe)}finally{N(!1)}},$n=(ae,fe)=>{const U=URL.createObjectURL(ae),ce=document.createElement("a");ce.href=U,ce.download=fe,document.body.appendChild(ce),ce.click(),document.body.removeChild(ce),URL.revokeObjectURL(U)},Ks=ae=>{const fe=String(ae).toLowerCase();return fe==="1"||fe==="critical"||fe==="crit"?"level-critical":fe==="2"||fe==="error"?"level-error":fe==="3"||fe==="warning"||fe==="warn"?"level-warning":fe==="4"||fe==="info"?"level-info":fe==="5"||fe==="debug"?"level-debug":""},Xs=ae=>{const fe=String(ae);return fe==="1"||fe==="critical"?"Critical":fe==="2"||fe==="error"?"Error":fe==="3"||fe==="warning"||fe==="warn"?"Warning":fe==="4"||fe==="info"?"Info":fe==="5"||fe==="debug"?"Debug":fe};return r.jsxs("div",{className:"events-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>R(!z),children:z?"Hide Filters":"Show Filters"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>tn("csv"),children:"CSV"}),r.jsx("button",{onClick:()=>tn("json"),children:"JSON"}),r.jsx("button",{onClick:()=>tn("excel"),children:"Excel"})]})]})]})]}),r.jsxs("div",{className:"search-bar",children:[r.jsxs("div",{className:"search-input-wrapper",children:[r.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(Z==null?void 0:Z.keywords)||"",onChange:ae=>Ee({...Z,keywords:ae.target.value}),onKeyDown:ae=>ae.key==="Enter"&&Te()}),r.jsx("button",{className:"search-btn",onClick:Te,children:"Search"})]}),r.jsxs("div",{className:"keyword-mode-toggle",children:[r.jsx("span",{className:"mode-label",children:"Keywords:"}),r.jsx("button",{className:`mode-btn ${Q==="AND"?"active":""}`,onClick:()=>ge("AND"),title:"All keywords must match",children:"AND"}),r.jsx("button",{className:`mode-btn ${Q==="OR"?"active":""}`,onClick:()=>ge("OR"),title:"Any keyword can match",children:"OR"})]})]}),z&&r.jsxs("div",{className:"filters-panel",children:[r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Start Time"}),r.jsx("input",{type:"datetime-local",value:(Z==null?void 0:Z.start_time)||"",onChange:ae=>Ee({...Z,start_time:ae.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"End Time"}),r.jsx("input",{type:"datetime-local",value:(Z==null?void 0:Z.end_time)||"",onChange:ae=>Ee({...Z,end_time:ae.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Event IDs"}),r.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:G,onChange:ae=>D(ae.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Log Names"}),r.jsxs("select",{value:((hn=Z==null?void 0:Z.log_names)==null?void 0:hn[0])||"",onChange:ae=>{const fe=ae.target.value;Ee({...Z,log_names:fe?[fe]:[]})},className:"select-input",children:[r.jsx("option",{value:"",children:"All Log Names"}),ve.map(ae=>r.jsx("option",{value:ae,children:ae},ae))]})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sources"}),r.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:q,onChange:ae=>oe(ae.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Users"}),r.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:$,onChange:ae=>ie(ae.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Computers"}),r.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:K,onChange:ae=>re(ae.target.value),className:"text-input"})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Level"}),r.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(ae=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:I.includes(ae),onChange:fe=>{fe.target.checked?L([...I,ae]):L(I.filter(U=>U!==ae))}}),ae]},ae))})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort By"}),r.jsxs("select",{value:H,onChange:ae=>X(ae.target.value),className:"select-input",children:[r.jsx("option",{value:"timestamp",children:"Timestamp"}),r.jsx("option",{value:"event_id",children:"Event ID"}),r.jsx("option",{value:"level",children:"Level"}),r.jsx("option",{value:"source",children:"Source"}),r.jsx("option",{value:"log_name",children:"Log Name"})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort Order"}),r.jsxs("select",{value:F,onChange:ae=>te(ae.target.value),className:"select-input",children:[r.jsx("option",{value:"desc",children:"Descending"}),r.jsx("option",{value:"asc",children:"Ascending"})]})]}),r.jsx("div",{className:"filter-group",children:r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:C,onChange:ae=>O(ae.target.checked)}),"Use Regex"]})})]}),r.jsxs("div",{className:"filter-actions",children:[r.jsx("button",{onClick:Te,className:"btn-primary",children:"Apply Filters"}),b&&r.jsx("button",{onClick:dt,className:"btn-secondary",children:"Clear All"})]})]}),b&&r.jsxs("div",{className:"search-info",children:[r.jsxs("span",{className:"search-count",children:["Found ",r.jsx("strong",{children:y.toLocaleString()})," events"]}),S>0&&r.jsxs("span",{className:"query-time",children:["Query time: ",S,"ms"]})]}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:y.toLocaleString()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Current Page"}),r.jsxs("span",{className:"stat-value",children:[o," / ",g]})]})]}),n?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading events..."})]}):t.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{children:"No events found"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"table-container",children:r.jsxs("table",{className:"events-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Time"}),r.jsx("th",{children:"Level"}),r.jsx("th",{children:"Event ID"}),r.jsx("th",{children:"Source"}),r.jsx("th",{children:"Computer"}),r.jsx("th",{children:"Message"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:t.map(ae=>r.jsxs("tr",{children:[r.jsx("td",{className:"id-cell",children:ae.id}),r.jsx("td",{className:"time-cell",children:new Date(ae.timestamp).toLocaleString()}),r.jsx("td",{children:r.jsx("span",{className:`level-badge ${Ks(ae.level)}`,children:Xs(ae.level)})}),r.jsx("td",{className:"event-id",children:ae.event_id}),r.jsx("td",{className:"source-cell",children:ae.source||"-"}),r.jsx("td",{className:"computer-cell",children:ae.computer||"-"}),r.jsx("td",{className:"message-cell",children:ae.message||"-"}),r.jsx("td",{className:"action-cell",children:r.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ae,null,2))},title:"Copy all event data",children:"Copy"})})]},ae.id))})]})}),r.jsxs("div",{className:"pagination",children:[r.jsxs("div",{className:"page-size-selector",children:[r.jsx("span",{children:"Show:"}),r.jsxs("select",{value:c,onChange:ae=>Un(Number(ae.target.value)),className:"select-input",children:[r.jsx("option",{value:10,children:"10"}),r.jsx("option",{value:25,children:"25"}),r.jsx("option",{value:50,children:"50"}),r.jsx("option",{value:100,children:"100"}),r.jsx("option",{value:200,children:"200"})]}),r.jsx("span",{children:"per page"})]}),r.jsxs("div",{className:"page-nav",children:[r.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{l(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),r.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{l(ae=>ae-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),r.jsxs("form",{onSubmit:Wn,className:"page-input-form",children:[r.jsx("input",{type:"number",min:1,max:g,value:h,onChange:ae=>p(ae.target.value),placeholder:`1-${g}`,className:"page-input"}),r.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),r.jsxs("span",{className:"page-info",children:["Page ",r.jsx("strong",{children:o})," of ",r.jsx("strong",{children:g}),"(",y," total)"]}),r.jsx("button",{className:"page-btn",disabled:o>=g,onClick:()=>{l(ae=>ae+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),r.jsx("button",{className:"page-btn",disabled:o>=g,onClick:()=>{l(g),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]})]}),r.jsx("style",{children:`
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
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #aaa;
          cursor: default;
        }
        
        .action-cell {
          text-align: center;
        }
        
        .action-copy-btn {
          background: #2563eb;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 3px;
        }
        
        .action-copy-btn:hover {
          background: #3b82f6;
        }
        
        .message-float-panel {
          position: fixed;
          max-width: 800px;
          max-height: 600px;
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
        
        .float-panel-close {
          background: none;
          border: none;
          color: #888;
          cursor: pointer;
          font-size: 16px;
          padding: 0 4px;
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
          margin-right: 8px;
        }
        
        .float-panel-copy:hover {
          background: #555;
          border-color: #666;
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
      `})]})}function vk(){const{id:t}=eg(),[e,n]=E.useState(null),[i,o]=E.useState(!0);return E.useEffect(()=>{t&&(o(!0),Ms.get(Number(t)).then(l=>{n(l.data),o(!1)}).catch(()=>o(!1)))},[t]),i?r.jsx("div",{children:"Loading..."}):e?r.jsxs("div",{className:"event-detail",children:[r.jsx(Xe,{to:"/events",children:"← Back to Events"}),r.jsxs("div",{className:"detail-panel",children:[r.jsxs("h3",{children:["Event #",e.id]}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Timestamp:"}),r.jsx("span",{children:new Date(e.timestamp).toLocaleString()})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Event ID:"}),r.jsx("span",{children:e.event_id})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Level:"}),r.jsx("span",{children:e.level})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Source:"}),r.jsx("span",{children:e.source})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Log Name:"}),r.jsx("span",{children:e.log_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Computer:"}),r.jsx("span",{children:e.computer})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"User:"}),r.jsx("span",{children:e.user||"N/A"})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"User SID:"}),r.jsx("span",{children:e.user_sid||"N/A"})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Session ID:"}),r.jsx("span",{children:e.session_id||"N/A"})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"IP Address:"}),r.jsx("span",{children:e.ip_address||"N/A"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Message:"}),r.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Raw XML:"}),r.jsx("pre",{className:"xml-box",children:e.raw_xml})]})]}),r.jsx("style",{children:`
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
        .message-box, .xml-box {
          background: #0a0a1a;
          padding: 15px;
          border-radius: 4px;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .xml-box {
          max-height: 400px;
        }
      `})]}):r.jsx("div",{children:"Event not found"})}function yk(){const{t}=ct(),e=Bn(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState(1),[h,p]=E.useState(""),[g,v]=E.useState([]),[y,w]=E.useState("brute-force"),[j,N]=E.useState(!1),[b,k]=E.useState(!1);E.useEffect(()=>{l(!0),wn.list(c,50,h||void 0).then(F=>{const te=F.data;i(te.alerts||[]),l(!1)}).catch(()=>l(!1))},[c,h]);const S=F=>{wn.resolve(F,"Resolved via Web UI").then(()=>{i(n.map(te=>te.id===F?{...te,resolved:!0}:te))})},A=F=>{const te=prompt("Enter reason for marking as false positive:");te&&wn.markFalsePositive(F,te).then(()=>{i(n.filter(q=>q.id!==F)),v(q=>q.filter(oe=>oe!==F))}).catch(q=>{console.error("Failed to mark as false positive:",q)})},z=F=>{confirm("Are you sure you want to delete this alert?")&&wn.delete(F).then(()=>{i(n.filter(te=>te.id!==F)),v(te=>te.filter(q=>q!==F))}).catch(te=>{console.error("Failed to delete alert:",te)})},R=F=>{g.length!==0&&wn.batchAction(g,F).then(()=>{F==="resolve"?i(n.map(te=>g.includes(te.id)?{...te,resolved:!0}:te)):F==="delete"&&i(n.filter(te=>!g.includes(te.id))),v([])}).catch(te=>{console.error("Batch action failed:",te)})},I=F=>{v(te=>te.includes(F)?te.filter(q=>q!==F):[...te,F])},L=()=>{g.length===n.length?v([]):v(n.map(F=>F.id))},C=()=>{g.forEach(F=>{wn.resolve(F,"Batch resolved via Web UI")}),i(n.map(F=>g.includes(F.id)?{...F,resolved:!0}:F)),v([])},O=()=>{k(!0),Pg.run(y,{hours:24}).then(()=>{k(!1),N(!1),e("/analyze")}).catch(F=>{console.error("Analysis failed:",F),k(!1),N(!1),e("/analyze")})},H=F=>{switch(F){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},X={total:n.length,critical:n.filter(F=>F.severity==="critical").length,high:n.filter(F=>F.severity==="high").length,medium:n.filter(F=>F.severity==="medium").length,low:n.filter(F=>F.severity==="low").length};return r.jsxs("div",{className:"alerts-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("alerts.title")}),r.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-analyze",onClick:()=>N(!0),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"}),r.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),r.jsxs("div",{className:"alerts-stats-grid",children:[r.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.total}),r.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),r.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.critical}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),r.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.high}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),r.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[r.jsx("span",{className:"stat-icon",children:"🟡"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.medium}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),r.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[r.jsx("span",{className:"stat-icon",children:"🟢"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.low}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),r.jsxs("div",{className:"alerts-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("select",{className:"severity-select",value:h,onChange:F=>p(F.target.value),children:[r.jsx("option",{value:"",children:t("alerts.allSeverities")}),r.jsx("option",{value:"critical",children:t("dashboard.critical")}),r.jsx("option",{value:"high",children:t("dashboard.high")}),r.jsx("option",{value:"medium",children:t("dashboard.medium")}),r.jsx("option",{value:"low",children:t("dashboard.low")})]})}),r.jsx("div",{className:"toolbar-right",children:g.length>0&&r.jsxs("div",{className:"batch-actions",children:[r.jsxs("span",{className:"selected-count",children:[g.length," selected"]}),r.jsx("button",{className:"btn-batch-resolve",onClick:C,children:t("alerts.resolveSelected")}),r.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>R("false-positive"),children:"Mark False Positive"}),r.jsx("button",{className:"btn-batch-delete",onClick:()=>R("delete"),children:"Delete"})]})})]}),o?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]}):r.jsxs("div",{className:"alerts-table-container",children:[r.jsxs("table",{className:"alerts-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:g.length===n.length&&n.length>0,onChange:L})}),r.jsx("th",{children:"ID"}),r.jsx("th",{children:t("alerts.severity")}),r.jsx("th",{children:t("alerts.rule")}),r.jsx("th",{children:t("alerts.message")}),r.jsx("th",{children:t("alerts.count")}),r.jsx("th",{children:t("alerts.status")}),r.jsx("th",{children:t("alerts.actions")})]})}),r.jsx("tbody",{children:n.map(F=>{var te;return r.jsxs("tr",{className:g.includes(F.id)?"selected":"",children:[r.jsx("td",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:g.includes(F.id),onChange:()=>I(F.id)})}),r.jsx("td",{className:"id-col",children:F.id}),r.jsx("td",{children:r.jsx("span",{className:`badge ${H(F.severity)}`,children:F.severity})}),r.jsx("td",{className:"rule-col",children:F.rule_name}),r.jsxs("td",{className:"message-col",children:[(te=F.message)==null?void 0:te.substring(0,100),"..."]}),r.jsx("td",{className:"count-col",children:F.count}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${F.resolved?"resolved":"active"}`,children:F.resolved?t("alerts.resolved"):t("alerts.active")})}),r.jsxs("td",{className:"actions-col",children:[!F.resolved&&r.jsx("button",{className:"btn-resolve",onClick:()=>S(F.id),children:t("alerts.resolve")}),r.jsx("button",{className:"btn-falsepositive",onClick:()=>A(F.id),children:"False Positive"}),r.jsx("button",{className:"btn-delete",onClick:()=>z(F.id),children:"Delete"})]})]},F.id)})})]}),n.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"🛡️"}),r.jsx("p",{children:t("alerts.noAlerts")})]})]}),j&&r.jsx("div",{className:"modal-overlay",onClick:()=>N(!1),children:r.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("alerts.runAnalysis")}),r.jsx("button",{className:"close-btn",onClick:()=>N(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),r.jsxs("div",{className:"analyzer-select-group",children:[r.jsx("label",{children:t("alerts.selectAnalyzer")}),r.jsx("div",{className:"analyzer-options",children:[{id:"brute-force",icon:"🔐",name:t("analyze.bruteForce")},{id:"login",icon:"🔑",name:t("analyze.login")},{id:"kerberos",icon:"🎭",name:t("analyze.kerberos")},{id:"powershell",icon:"⚡",name:t("analyze.powershell")}].map(F=>r.jsxs("div",{className:`analyzer-option ${y===F.id?"selected":""}`,onClick:()=>w(F.id),children:[r.jsx("span",{className:"analyzer-icon",children:F.icon}),r.jsx("span",{className:"analyzer-name",children:F.name})]},F.id))})]}),r.jsxs("div",{className:"analysis-summary",children:[r.jsx("h4",{children:t("alerts.analysisSummary")}),r.jsxs("ul",{children:[r.jsxs("li",{children:[t("alerts.analysisTarget"),": ",g.length>0?`${g.length} ${t("alerts.selectedAlerts")}`:t("alerts.allAlerts")]}),r.jsxs("li",{children:[t("alerts.analysisScope"),": ",h||t("alerts.allSeverities")]})]})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-cancel",onClick:()=>N(!1),children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:O,disabled:b,children:b?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("alerts.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]})]})})]})}function bk(){const{id:t}=eg(),e=Bn(),[n,i]=E.useState(null),[o,l]=E.useState(!0),[c,u]=E.useState(""),[h,p]=E.useState(!1);E.useEffect(()=>{t&&(l(!0),wn.get(Number(t)).then(j=>{i(j.data),l(!1)}).catch(()=>l(!1)))},[t]);const g=async()=>{if(n){p(!0);try{await wn.resolve(n.id,c),i({...n,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(j){console.error("Failed to resolve:",j)}finally{p(!1)}}},v=async()=>{if(n){p(!0);try{await wn.markFalsePositive(n.id,c),i({...n,false_positive:!0,notes:c})}catch(j){console.error("Failed to mark false positive:",j)}finally{p(!1)}}},y=()=>{if(!n)return;const j=new URLSearchParams;n.message&&j.set("keywords",n.message.substring(0,100)),n.first_seen&&j.set("start_time",n.first_seen),n.last_seen&&j.set("end_time",n.last_seen),n.log_name&&j.set("log_names",n.log_name),e(`/events?${j.toString()}`)};if(o)return r.jsx("div",{children:"Loading..."});if(!n)return r.jsx("div",{children:"Alert not found"});const w=j=>{switch(j){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return r.jsxs("div",{className:"alert-detail",children:[r.jsx(Xe,{to:"/alerts",children:"← Back to Alerts"}),r.jsxs("div",{className:"detail-panel",children:[r.jsxs("h3",{children:["Alert #",n.id]}),r.jsxs("div",{className:"status-badges",children:[r.jsx("span",{className:`badge ${w(n.severity)}`,children:n.severity.toUpperCase()}),n.resolved&&r.jsx("span",{className:"badge",style:{background:"#28a745"},children:"Resolved"}),n.false_positive&&r.jsx("span",{className:"badge",style:{background:"#6c757d"},children:"False Positive"})]}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Rule Name:"}),r.jsx("span",{children:n.rule_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Score:"}),r.jsx("span",{children:n.rule_score.toFixed(2)})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Log Name:"}),r.jsx("span",{children:n.log_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Count:"}),r.jsx("span",{children:n.count})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"First Seen:"}),r.jsx("span",{children:new Date(n.first_seen).toLocaleString()})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Last Seen:"}),r.jsx("span",{children:new Date(n.last_seen).toLocaleString()})]}),n.resolved_time&&r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"Resolved Time:"}),r.jsx("span",{children:new Date(n.resolved_time).toLocaleString()})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Message:"}),r.jsx("pre",{className:"message-box",children:n.message})]}),n.mitre_attack&&n.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"MITRE ATT&CK:"}),r.jsx("div",{className:"mitre-tags",children:n.mitre_attack.map((j,N)=>r.jsx("span",{className:"mitre-tag",children:j},N))})]}),!n.resolved&&!n.false_positive&&r.jsxs("div",{className:"actions-section",children:[r.jsx("h4",{children:"Actions"}),r.jsx("textarea",{placeholder:"Add notes...",value:c,onChange:j=>u(j.target.value),rows:3}),r.jsxs("div",{className:"action-buttons",children:[r.jsx("button",{onClick:g,disabled:h,children:h?"Processing...":"Resolve"}),r.jsx("button",{onClick:v,disabled:h,style:{background:"#6c757d"},children:"Mark as False Positive"}),r.jsx("button",{onClick:y,style:{background:"#00d9ff",color:"#000"},children:"Search Related Events"})]})]}),n.notes&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Notes:"}),r.jsx("pre",{className:"notes-box",children:n.notes})]})]}),r.jsx("style",{children:`
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
      `})]})}function jk(){const{t}=ct(),e=Bn(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState({eventCount:0,alertCount:0}),[h,p]=E.useState("all"),[g,v]=E.useState("24h");E.useEffect(()=>{l(!0),yd.get(300).then(k=>{const S=k.data;i(S.entries||[]),u({eventCount:S.event_count,alertCount:S.alert_count}),l(!1)}).catch(()=>l(!1))},[]);const y=(k,S)=>{if(k==="alert")switch(S){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},w=(k,S)=>{if(k==="alert")switch(S){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},j=k=>k==="alert"?"ALERT":"EVENT",N=n.filter(k=>h==="all"?!0:h==="events"?k.type==="event":h==="alerts"?k.type==="alert":!0),b=k=>{yd.deleteAlert(k).then(()=>{i(n.filter(S=>!(S.type==="alert"&&S.alert_id===k)))}).catch(S=>console.error("Failed to delete alert:",S))};return o?r.jsx("div",{className:"timeline-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})}):r.jsxs("div",{className:"timeline-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("timeline.title")}),r.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),r.jsxs("div",{className:"timeline-stats-cards",children:[r.jsxs("div",{className:"stat-card events",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.eventCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill events",style:{width:`${c.eventCount>0?c.eventCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card alerts",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.alertCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${c.alertCount>0?c.alertCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card ratio",children:[r.jsx("div",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsxs("span",{className:"stat-value",children:[c.eventCount+c.alertCount>0?(c.alertCount/(c.eventCount+c.alertCount)*100).toFixed(1):0,"%"]}),r.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),r.jsxs("div",{className:"timeline-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("div",{className:"filter-tabs",children:[r.jsxs("button",{className:`filter-tab ${h==="all"?"active":""}`,onClick:()=>p("all"),children:[t("timeline.all"),r.jsx("span",{className:"count",children:c.eventCount+c.alertCount})]}),r.jsxs("button",{className:`filter-tab ${h==="events"?"active":""}`,onClick:()=>p("events"),children:[t("timeline.eventsOnly"),r.jsx("span",{className:"count events",children:c.eventCount})]}),r.jsxs("button",{className:`filter-tab ${h==="alerts"?"active":""}`,onClick:()=>p("alerts"),children:[t("timeline.alertsOnly"),r.jsx("span",{className:"count alerts",children:c.alertCount})]})]})}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("select",{className:"time-range-select",value:g,onChange:k=>v(k.target.value),children:[r.jsx("option",{value:"1h",children:t("timeline.last1h")}),r.jsx("option",{value:"6h",children:t("timeline.last6h")}),r.jsx("option",{value:"24h",children:t("timeline.last24h")}),r.jsx("option",{value:"7d",children:t("timeline.last7d")}),r.jsx("option",{value:"30d",children:t("timeline.last30d")})]})})]}),r.jsx("div",{className:"timeline-container",children:N.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"📭"}),r.jsx("p",{children:t("timeline.noEntries")})]}):r.jsx("div",{className:"timeline",children:N.map((k,S)=>r.jsxs("div",{className:`timeline-item ${k.type}`,children:[r.jsxs("div",{className:"timeline-marker",style:{"--marker-color":w(k.type,k.severity)},children:[r.jsx("div",{className:"marker-dot"}),r.jsx("div",{className:"marker-line"})]}),r.jsxs("div",{className:"timeline-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"card-left",children:[r.jsx("span",{className:"card-icon",children:y(k.type,k.severity)}),r.jsx("span",{className:`timeline-type ${k.type}`,style:{color:w(k.type,k.severity)},children:j(k.type)}),k.type==="event"&&k.event_id&&r.jsxs("span",{className:"event-id-badge",children:["Event ",k.event_id]}),k.type==="alert"&&k.severity&&r.jsx("span",{className:`severity-badge ${k.severity}`,style:{background:`${w(k.type,k.severity)}20`,color:w(k.type,k.severity)},children:k.severity.toUpperCase()})]}),r.jsx("span",{className:"card-time",children:new Date(k.timestamp).toLocaleString()})]}),r.jsx("p",{className:"card-message",children:k.message}),k.type==="alert"&&k.rule_name&&r.jsxs("div",{className:"card-meta",children:[r.jsxs("span",{className:"rule-badge",children:[r.jsx("span",{className:"rule-icon",children:"📌"}),k.rule_name]}),k.mitre_attack&&k.mitre_attack.length>0&&r.jsxs("span",{className:"mitre-badge",children:[r.jsx("span",{className:"mitre-icon",children:"🎯"}),k.mitre_attack.join(", ")]})]}),k.type==="alert"&&k.alert_id&&r.jsxs("div",{className:"card-actions",children:[r.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${k.alert_id}`),children:t("timeline.viewDetails")}),r.jsx("button",{className:"btn-delete",onClick:()=>k.alert_id&&b(k.alert_id),children:t("timeline.delete")})]})]})]},`${k.type}-${k.id}-${S}`))})})]})}function wk(){const{t}=ct(),[e,n]=E.useState(!1),[i,o]=E.useState("security"),[l,c]=E.useState("html"),[u,h]=E.useState("7d"),[p,g]=E.useState([]),[v,y]=E.useState(null),[w,j]=E.useState(null);E.useEffect(()=>{gr.list().then(R=>g(R.data.reports)).catch(console.error)},[]);const N=async()=>{n(!0),j(null);try{const R=new Date,I=new Date;switch(u){case"24h":I.setHours(I.getHours()-24);break;case"7d":I.setDate(I.getDate()-7);break;case"30d":I.setDate(I.getDate()-30);break;case"90d":I.setDate(I.getDate()-90);break}await gr.generate({type:i,format:l,start_time:I.toISOString(),end_time:R.toISOString()}),y(new Date().toLocaleString());const C=(await gr.list()).data.reports||[];if(g(C),C.length>0){const O=C[0];confirm(`Report generated successfully!

Report: ${O.name}
Type: ${O.type}
Format: ${O.format}

Click OK to download now, or Cancel to view in reports list.`)&&k(O)}}catch(R){console.error("Report generation failed:",R),j("Failed to generate report. Please try again.")}finally{n(!1)}},b=async R=>{try{const I=await gr.get(R.id);if(I.data.content){const L=window.open("","_blank");L&&(R.format==="html"?(L.document.write(I.data.content),L.document.close()):(L.document.write(`<pre>${JSON.stringify(I.data,null,2)}</pre>`),L.document.close()))}else alert("Report content not available")}catch(I){console.error("Failed to view report:",I),alert("Failed to view report")}},k=async R=>{try{const I=R.format||"json",L=await gr.export(I),C=new Blob([L.data],{type:L.headers["content-type"]||"application/octet-stream"}),O=URL.createObjectURL(C),H=document.createElement("a");H.href=O,H.download=`${R.name||R.id}.${I}`,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(O)}catch(I){console.error("Failed to download report:",I),alert("Failed to download report")}},S=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB",A=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],z=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return r.jsxs("div",{className:"reports-page",children:[r.jsx("h2",{children:t("reports.title")}),r.jsxs("div",{className:"reports-grid",children:[r.jsxs("div",{className:"reports-card main-config",children:[r.jsx("h3",{children:t("reports.generateReport")}),r.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Report Type"}),r.jsx("div",{className:"type-grid",children:A.map(R=>r.jsxs("div",{className:`type-option ${i===R.value?"selected":""}`,onClick:()=>o(R.value),children:[r.jsx("div",{className:"type-icon",children:R.icon}),r.jsx("div",{className:"type-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Output Format"}),r.jsx("div",{className:"format-row",children:z.map(R=>r.jsxs("div",{className:`format-option ${l===R.value?"selected":""}`,onClick:()=>c(R.value),children:[r.jsx("div",{className:"format-icon",children:R.icon}),r.jsx("div",{className:"format-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Time Range"}),r.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(R=>r.jsxs("button",{className:`range-btn ${u===R?"active":""}`,onClick:()=>h(R),children:[R==="24h"&&"Last 24 Hours",R==="7d"&&"Last 7 Days",R==="30d"&&"Last 30 Days",R==="90d"&&"Last 90 Days"]},R))})]}),w&&r.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),r.jsx("button",{className:"btn-primary generate-btn",onClick:N,disabled:e,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):r.jsxs(r.Fragment,{children:["📊 ",t("reports.generate")]})}),v&&r.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",v]})]}),r.jsxs("div",{className:"reports-card stats-card",children:[r.jsx("h3",{children:"Report Statistics"}),r.jsxs("div",{className:"stats-preview",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"📁"}),r.jsx("div",{className:"stat-value",children:p.length}),r.jsx("div",{className:"stat-label",children:"Total Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🛡️"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="security").length}),r.jsx("div",{className:"stat-label",children:"Security Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="alert").length}),r.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),r.jsxs("div",{className:"chart-placeholder",children:[r.jsx("div",{className:"chart-label",children:"Reports by Type"}),r.jsxs("div",{className:"mini-chart",children:[r.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),r.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),r.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),r.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),r.jsxs("div",{className:"reports-card full-width",children:[r.jsx("h3",{children:t("reports.recentReports")}),p.length>0?r.jsx("div",{className:"reports-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Report Name"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Format"}),r.jsx("th",{children:"Generated"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:p.map(R=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"report-name",children:[r.jsxs("span",{className:"report-icon",children:[R.type==="security"&&"🛡️",R.type==="alert"&&"🚨",R.type==="timeline"&&"📊",R.type==="compliance"&&"📋"]}),R.name]})}),r.jsx("td",{children:r.jsx("span",{className:`type-badge ${R.type}`,children:R.type})}),r.jsx("td",{children:r.jsx("span",{className:"format-badge",children:R.format.toUpperCase()})}),r.jsx("td",{children:new Date(R.generated_at).toLocaleString()}),r.jsx("td",{children:S(R.size)}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>b(R),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>k(R),children:"Download"})]})]},R.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📊"}),r.jsx("div",{className:"empty-text",children:t("reports.noReports")}),r.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),r.jsx("style",{children:`
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
      `})]})}function Nk(){const{t}=ct(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(""),[u,h]=E.useState(null),[p,g]=E.useState(!1),[v,y]=E.useState(!1),[w,j]=E.useState([]),[N,b]=E.useState(""),[k,S]=E.useState(["eventlogs","registry","prefetch"]),[A,z]=E.useState([]),[R,I]=E.useState(!1);E.useEffect(()=>{L(),C()},[]);const L=()=>{As.listEvidence().then($=>{$.data&&Array.isArray($.data)&&j($.data)}).catch($=>console.error("Failed to load evidence:",$))},C=()=>{As.chainOfCustody().then($=>{$.data&&Array.isArray($.data)&&z($.data)}).catch($=>console.error("Failed to load chain of custody:",$))},O=async()=>{var $,ie;if(l.trim()){y(!0);try{const K=await As.calculateHash(l);o(K.data.hash||"")}catch(K){console.error("Failed to calculate hash:",K),alert("Failed to calculate hash: "+(((ie=($=K.response)==null?void 0:$.data)==null?void 0:ie.error)||K.message))}finally{y(!1)}}},H=async()=>{n(!0),b("starting");try{for(const $ of k)b(`collecting:${$}`),await As.collect($,`/tmp/forensics_${$}`);L(),C(),b("completed")}catch($){console.error("Collection failed:",$),b("error")}finally{n(!1)}},X=async()=>{var $,ie;if(!(!i.trim()||!l.trim())){g(!0),h(null);try{const K=await As.verifyHash(l,i);h({verified:K.data.match||!1,expected:i,actual:K.data.actual||i,path:l})}catch(K){h({verified:!1,expected:i,actual:((ie=($=K.response)==null?void 0:$.data)==null?void 0:ie.error)||"Hash verification failed",path:l})}finally{g(!1)}}},F=$=>{S(ie=>ie.includes($)?ie.filter(K=>K!==$):[...ie,$])},te=async $=>{try{const ie=await As.getEvidence($.id);if(ie.data.content){const K=window.open("","_blank");K&&(K.document.write(`<pre>${JSON.stringify(ie.data,null,2)}</pre>`),K.document.close())}else alert("Evidence content not available")}catch(ie){console.error("Failed to view evidence:",ie),alert("Failed to view evidence")}},q=async $=>{try{const ie=await As.exportEvidence($.id,"json"),K=new Blob([ie.data],{type:ie.headers["content-type"]||"application/octet-stream"}),re=URL.createObjectURL(K),G=document.createElement("a");G.href=re,G.download=`evidence_${$.type}_${$.id}.json`,document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(re)}catch(ie){console.error("Failed to export evidence:",ie),alert("Failed to export evidence")}},oe=$=>$<1024?$+" B":$<1024*1024?($/1024).toFixed(1)+" KB":($/(1024*1024)).toFixed(1)+" MB";return r.jsxs("div",{className:"forensics-page",children:[r.jsx("h2",{children:t("forensics.title")}),r.jsxs("div",{className:"forensics-grid",children:[r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.evidenceCollection")}),r.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),r.jsxs("div",{className:"collection-types",children:[r.jsxs("div",{className:"type-item",onClick:()=>F("eventlogs"),children:[r.jsx("div",{className:`type-checkbox ${k.includes("eventlogs")?"checked":""}`,children:k.includes("eventlogs")&&"✓"}),r.jsx("div",{className:"type-icon",children:"📋"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),r.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("registry"),children:[r.jsx("div",{className:`type-checkbox ${k.includes("registry")?"checked":""}`,children:k.includes("registry")&&"✓"}),r.jsx("div",{className:"type-icon",children:"🔧"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.registry")}),r.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("memory"),children:[r.jsx("div",{className:`type-checkbox ${k.includes("memory")?"checked":""}`,children:k.includes("memory")&&"✓"}),r.jsx("div",{className:"type-icon",children:"💾"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),r.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("prefetch"),children:[r.jsx("div",{className:`type-checkbox ${k.includes("prefetch")?"checked":""}`,children:k.includes("prefetch")&&"✓"}),r.jsx("div",{className:"type-icon",children:"⚡"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),r.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),N&&r.jsxs("div",{className:`collect-status ${N}`,children:[N==="starting"&&"📡 Initializing collection...",N.startsWith("collecting:")&&`🔍 Collecting ${N.split(":")[1]}...`,N==="completed"&&"✅ Collection completed",N==="error"&&"❌ Collection failed"]}),r.jsx("button",{className:"btn-primary forensics-btn",onClick:H,disabled:e||k.length===0,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):r.jsxs(r.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.hashVerification")}),r.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),r.jsxs("div",{className:"hash-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"File Path"}),r.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:l,onChange:$=>c($.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Expected SHA256 Hash"}),r.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:i,onChange:$=>o($.target.value)})]}),r.jsx("button",{className:"btn-secondary",onClick:O,disabled:v||!l.trim(),children:v?"Calculating...":"Calculate Hash"}),r.jsx("button",{className:"btn-secondary",onClick:X,disabled:p||!i.trim()||!l.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&r.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[r.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),r.jsxs("div",{className:"result-content",children:[r.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),r.jsxs("div",{className:"result-details",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"File:"})," ",u.path]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Expected:"})," ",r.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Actual:"})," ",r.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),r.jsxs("div",{className:"forensics-card full-width",children:[r.jsxs("div",{className:"section-header",children:[r.jsxs("div",{children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),r.jsx("button",{className:"btn-secondary",onClick:()=>I(!0),children:"View Full Chain"})]}),w.length>0?r.jsx("div",{className:"evidence-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Collected At"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Hash"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:w.map($=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"evidence-type",children:$.type})}),r.jsx("td",{children:new Date($.collected_at).toLocaleString()}),r.jsx("td",{children:r.jsx("code",{className:"evidence-path",children:$.path})}),r.jsx("td",{children:oe($.size)}),r.jsx("td",{children:r.jsxs("code",{className:"evidence-hash",children:[$.hash.substring(0,16),"..."]})}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>te($),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>q($),children:"Export"})]})]},$.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📦"}),r.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),r.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),R&&r.jsx("div",{className:"modal-overlay",onClick:()=>I(!1),children:r.jsxs("div",{className:"modal-content chain-modal",onClick:$=>$.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("button",{className:"close-btn",onClick:()=>I(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:A.length>0?r.jsx("div",{className:"chain-timeline",children:A.map(($,ie)=>r.jsxs("div",{className:"chain-entry",children:[r.jsx("div",{className:"chain-dot",children:ie+1}),r.jsxs("div",{className:"chain-content",children:[r.jsx("div",{className:"chain-action",children:$.action}),r.jsx("div",{className:"chain-details",children:$.details}),r.jsxs("div",{className:"chain-meta",children:[r.jsx("span",{className:"chain-time",children:new Date($.timestamp).toLocaleString()}),$.user&&r.jsxs("span",{className:"chain-user",children:["by ",$.user]})]})]})]},$.id))}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),r.jsx("style",{children:`
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
      `})]})}function _k(){var F,te;const{t}=ct(),[e,n]=E.useState("system"),[i,o]=E.useState(null),[l,c]=E.useState([]),[u,h]=E.useState([]),[p,g]=E.useState([]),[v,y]=E.useState([]),[w,j]=E.useState([]),[N,b]=E.useState(!0),[k,S]=E.useState(null);E.useEffect(()=>{A()},[]);const A=()=>{b(!0),Os.getInfo().then(q=>{o(q.data),b(!1)}).catch(q=>{S(q.message||t("common.error")),b(!1)})},z=()=>{l.length>0||(b(!0),Os.getProcesses(50).then(q=>{c(q.data.processes||[]),b(!1)}).catch(()=>b(!1)))},R=()=>{u.length>0||(b(!0),Os.getNetwork(50).then(q=>{h(q.data.connections||[]),b(!1)}).catch(()=>b(!1)))},I=()=>{p.length>0||(b(!0),Os.getEnvVariables().then(q=>{g(q.data.variables||[]),b(!1)}).catch(()=>b(!1)))},L=()=>{v.length>0||(b(!0),Os.getLoadedDLLs(100).then(q=>{y(q.data.modules||[]),b(!1)}).catch(()=>b(!1)))},C=()=>{w.length>0||(b(!0),Os.getDrivers().then(q=>{j(q.data.drivers||[]),b(!1)}).catch(()=>b(!1)))},O=q=>{n(q),q==="processes"&&z(),q==="network"&&R(),q==="env"&&I(),q==="dlls"&&L(),q==="drivers"&&C()},H=q=>{const oe=Math.floor(q/86400),$=Math.floor(q%86400/3600),ie=Math.floor(q%3600/60);return oe>0?`${oe}d ${$}h ${ie}m`:$>0?`${$}h ${ie}m`:`${ie}m`},X=q=>{switch(q==null?void 0:q.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return N&&!i?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})}):k?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"error-state",children:["Error: ",k]})}):r.jsxs("div",{className:"systeminfo-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("systemInfo.title")}),r.jsx("div",{className:"header-actions",children:r.jsx("button",{className:"btn-refresh",onClick:A,children:"Refresh"})})]}),r.jsxs("div",{className:"tab-nav",children:[r.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>O("system"),children:"System"}),r.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>O("processes"),children:["Processes (",l.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>O("network"),children:["Network (",u.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>O("env"),children:["Env (",p.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>O("dlls"),children:["DLLs (",v.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>O("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&i&&r.jsxs("div",{className:"system-grid",children:[r.jsxs("div",{className:"system-card os-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"OS"}),r.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),r.jsxs("div",{className:"system-status",children:[r.jsx("div",{className:"status-indicator online"}),r.jsx("span",{children:"System Online"})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),r.jsx("span",{className:"info-value highlight",children:i.hostname||"N/A"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),r.jsx("span",{className:"info-value",children:i.domain||"WORKGROUP"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),r.jsx("span",{className:"info-value",children:i.os_name||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),r.jsx("span",{className:"info-value",children:i.os_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),r.jsx("span",{className:"info-value badge",children:i.architecture||"x64"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),r.jsx("span",{className:"info-value",children:i.timezone||"UTC"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),r.jsx("span",{className:`info-value badge ${i.is_admin?"admin":"user"}`,children:i.is_admin?"Root/Admin":"Standard User"})]})]})]}),r.jsxs("div",{className:"system-card runtime-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Runtime"}),r.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),r.jsx("span",{className:"info-value mono",children:i.go_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),r.jsxs("span",{className:"info-value",children:[i.cpu_count||0," Cores"]})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),r.jsx("span",{className:"info-value",children:H(i.uptime_seconds||0)})]})]})]}),r.jsxs("div",{className:"system-card resources-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Resources"}),r.jsx("h3",{children:"System Resources"})]}),r.jsxs("div",{className:"resource-bars",children:[r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Memory"}),r.jsxs("span",{className:"resource-value",children:[i.memory_free_gb?(i.memory_total_gb-i.memory_free_gb).toFixed(1):"0"," / ",((F=i.memory_total_gb)==null?void 0:F.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill",style:{width:i.memory_total_gb?`${(i.memory_total_gb-i.memory_free_gb)/i.memory_total_gb*100}%`:"0%"}})})]}),r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Free Memory"}),r.jsxs("span",{className:"resource-value",children:[((te=i.memory_free_gb)==null?void 0:te.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill memory",style:{width:i.memory_total_gb?`${i.memory_free_gb/i.memory_total_gb*100}%`:"0%"}})})]})]})]}),r.jsxs("div",{className:"system-card time-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Time"}),r.jsx("h3",{children:"Time Information"})]}),r.jsxs("div",{className:"time-display",children:[r.jsx("div",{className:"current-time",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),r.jsx("div",{className:"current-date",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),r.jsx("div",{className:"info-list",children:r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"UTC Time"}),r.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"PPID"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"User"}),r.jsx("th",{children:"Command"})]})}),r.jsx("tbody",{children:l.map((q,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:q.pid}),r.jsx("td",{className:"mono",children:q.ppid}),r.jsx("td",{children:q.name}),r.jsx("td",{children:q.user}),r.jsx("td",{className:"truncate",title:q.args,children:q.args||q.exe})]},`${q.pid}-${oe}`))})]}),l.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Protocol"}),r.jsx("th",{children:"Local Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"Remote Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"State"}),r.jsx("th",{children:"Process"})]})}),r.jsx("tbody",{children:u.map((q,oe)=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"protocol-badge",children:q.protocol})}),r.jsx("td",{className:"mono",children:q.local_addr}),r.jsx("td",{className:"mono",children:q.local_port}),r.jsx("td",{className:"mono",children:q.remote_addr||"-"}),r.jsx("td",{className:"mono",children:q.remote_port||"-"}),r.jsx("td",{children:r.jsx("span",{className:"state-badge",style:{color:X(q.state)},children:q.state})}),r.jsx("td",{children:q.process_name||q.pid||"-"})]},`${q.protocol}-${q.local_addr}-${q.local_port}-${oe}`))})]}),u.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Variable Name"}),r.jsx("th",{children:"Value"}),r.jsx("th",{children:"Type"})]})}),r.jsx("tbody",{children:p.map((q,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:q.name}),r.jsx("td",{className:"truncate",title:q.value,children:q.value}),r.jsx("td",{children:r.jsx("span",{className:"type-badge",children:q.type})})]},`${q.name}-${oe}`))})]}),p.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"Process"}),r.jsx("th",{children:"DLL Name"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"})]})}),r.jsx("tbody",{children:v.map((q,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:q.process_id}),r.jsx("td",{children:q.process_name}),r.jsx("td",{className:"mono highlight",children:q.name}),r.jsx("td",{className:"truncate",title:q.path,children:q.path}),r.jsxs("td",{className:"mono",children:[(q.size/1024).toFixed(1)," KB"]})]},`${q.process_id}-${q.name}-${oe}`))})]}),v.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Display Name"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Path"})]})}),r.jsx("tbody",{children:w.map((q,oe)=>{var $;return r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:q.name}),r.jsx("td",{children:q.display_name||q.name}),r.jsx("td",{className:"truncate",title:q.description,children:q.description||"-"}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${($=q.status)==null?void 0:$.toLowerCase()}`,children:q.status})}),r.jsx("td",{className:"truncate mono",title:q.path,children:q.path||"-"})]},`${q.name}-${oe}`)})})]}),w.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No driver information available"})]}),r.jsx("style",{children:`
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
      `})]})}function kk(){const[t,e]=E.useState([]),[n,i]=E.useState(!0),[o,l]=E.useState(null),[c,u]=E.useState(0),[h,p]=E.useState(0),[g,v]=E.useState("all"),[y,w]=E.useState("all"),[j,N]=E.useState(""),[b,k]=E.useState(null),[S,A]=E.useState(!1),[z,R]=E.useState(!1),[I,L]=E.useState(!1),[C,O]=E.useState([]),[H,X]=E.useState(null),[F,te]=E.useState({}),[q,oe]=E.useState(null),[$,ie]=E.useState(!1),[K,re]=E.useState(!1),[G,D]=E.useState(null),Q=E.useRef(null),ge=()=>{Tn.list().then(U=>{e(U.data.rules||[]),u(U.data.total_count||0),p(U.data.enabled_count||0),i(!1)}).catch(U=>{l(U.message||"Failed to load rules"),i(!1)})};E.useEffect(()=>{ge()},[]);const ve=()=>{Tn.listTemplates().then(U=>{O(U.data.templates||[])}).catch(U=>{console.error("Failed to load templates:",U)})},je=()=>{ve(),L(!0)},Z=U=>{X(U);const ce={};U.parameters.forEach(Se=>{ce[Se.name]=Se.default||""}),te(ce)},Ee=()=>{H&&Tn.instantiateTemplate(H.name,F).then(()=>{L(!1),X(null),te({}),ge()}).catch(U=>{console.error("Failed to create rule from template:",U),alert("Failed to create rule from template")})},Re=(U,ce)=>{Tn.toggle(U,!ce).then(()=>{e(t.map(Se=>Se.name===U?{...Se,enabled:!ce}:Se)),p(Se=>ce?Se-1:Se+1)}).catch(Se=>{console.error("Failed to toggle rule:",Se)})},Te=U=>{if(!U.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?"))return;const ce=prompt("Edit rule description:",U.description);ce!==null&&ce!==U.description&&Tn.save({...U,description:ce}).then(()=>{e(t.map(Se=>Se.name===U.name?{...Se,description:ce}:Se))}).catch(Se=>{console.error("Failed to update rule:",Se)})},dt=()=>{const U=prompt(`Add rule: (1) From template, (2) Custom rule
Enter 1 or 2:`);if(U==="1")je();else if(U==="2"){const ce=prompt("Enter rule name:");if(!ce)return;const Se=prompt("Enter rule description:")||"",It=prompt("Enter severity (critical/high/medium/low):","medium")||"medium";Tn.save({name:ce,description:Se,severity:It,enabled:!0,score:50}).then(()=>{ge()}).catch(Ct=>{console.error("Failed to add rule:",Ct)})}},Un=()=>{A(!0),oe(null)},Wn=U=>{ie(!0),Tn.validate(U).then(ce=>{oe(ce.data)}).catch(ce=>{oe({valid:!1,errors:[ce.message||"Validation failed"],warnings:[]})}).finally(()=>{ie(!1)})},tn=U=>{Tn.export(U).then(ce=>{const Se=new Blob([ce.data],{type:U==="yaml"?"text/yaml":"application/json"}),It=URL.createObjectURL(Se),Ct=document.createElement("a");Ct.href=It,Ct.download=`rules_export.${U}`,document.body.appendChild(Ct),Ct.click(),document.body.removeChild(Ct),URL.revokeObjectURL(It)}).catch(ce=>{console.error("Failed to export rules:",ce),alert("Failed to export rules")})},$n=()=>{R(!0),D(null)},Ks=U=>{var It;const ce=(It=U.target.files)==null?void 0:It[0];if(!ce)return;const Se=new FileReader;Se.onload=Ct=>{var Le;try{const ft=(Le=Ct.target)==null?void 0:Le.result;let Ht=[];if(ce.name.endsWith(".yaml")||ce.name.endsWith(".yml")){const Nt=ft.split(`
`);let _t={};for(const rt of Nt)rt.startsWith("- name:")?(_t.name&&Ht.push(_t),_t={name:rt.replace("- name:","").trim(),mitre_attack:[]}):rt.startsWith("  description:")?_t.description=rt.replace("  description:","").trim():rt.startsWith("  severity:")?_t.severity=rt.replace("  severity:","").trim():rt.startsWith("  enabled:")?_t.enabled=rt.replace("  enabled:","").trim()==="true":rt.startsWith("  score:")?_t.score=parseFloat(rt.replace("  score:","").trim())||50:rt.startsWith("    - ")&&(_t.mitre_attack||(_t.mitre_attack=[]),_t.mitre_attack.push(rt.replace("    - ","").trim()));_t.name&&Ht.push(_t)}else{const Nt=JSON.parse(ft);Ht=Array.isArray(Nt)?Nt:Nt.rules||[]}if(Ht.length===0){D({imported:0,failed:0,errors:["No valid rules found in file"]});return}re(!0),Tn.import(Ht).then(Nt=>{D(Nt.data),Nt.data.imported>0&&ge()}).catch(Nt=>{D({imported:0,failed:Ht.length,errors:[Nt.message||"Import failed"]})}).finally(()=>{re(!1)})}catch(ft){D({imported:0,failed:0,errors:["Failed to parse file: "+(ft.message||"Invalid format")]})}},Se.readAsText(ce)},Xs=U=>{k(U)},hn=U=>{switch(U==null?void 0:U.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},ae=U=>{switch(U==null?void 0:U.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},fe=t.filter(U=>{var ce;return!(g!=="all"&&((ce=U.severity)==null?void 0:ce.toLowerCase())!==g||y==="enabled"&&!U.enabled||y==="disabled"&&U.enabled||j&&!U.name.toLowerCase().includes(j.toLowerCase()))});return n?r.jsx("div",{className:"rules-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading rules..."})]})}):o?r.jsx("div",{className:"rules-page",children:r.jsx("div",{className:"error-state",children:o})}):r.jsxs("div",{className:"rules-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Detection Rules"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:Un,children:"Validate"}),r.jsx("button",{className:"btn-secondary",onClick:$n,children:"Import"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",children:"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>tn("json"),children:"JSON"}),r.jsx("button",{onClick:()=>tn("yaml"),children:"YAML"})]})]}),r.jsx("button",{className:"btn-primary",onClick:dt,children:"Add Rule"})]})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value",children:c}),r.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon enabled",children:"✓"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value enabled",children:h}),r.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon disabled",children:"✗"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value disabled",children:c-h}),r.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),r.jsxs("div",{className:"filter-bar",children:[r.jsx("input",{type:"text",placeholder:"Search rules...",value:j,onChange:U=>N(U.target.value),className:"search-input"}),r.jsxs("select",{value:g,onChange:U=>v(U.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Severities"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"high",children:"High"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"low",children:"Low"})]}),r.jsxs("select",{value:y,onChange:U=>w(U.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"enabled",children:"Enabled"}),r.jsx("option",{value:"disabled",children:"Disabled"})]})]}),r.jsx("div",{className:"rules-grid",children:fe.map(U=>{var ce;return r.jsxs("div",{className:`rule-card ${U.enabled?"":"disabled"}`,children:[r.jsxs("div",{className:"rule-header",children:[r.jsxs("div",{className:"rule-title",children:[r.jsx("span",{className:`severity-dot ${hn(U.severity)}`}),r.jsx("span",{className:"rule-name",children:U.name})]}),r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox",checked:U.enabled,onChange:()=>Re(U.name,U.enabled)}),r.jsx("span",{className:"slider"})]})]}),r.jsxs("div",{className:"rule-meta",children:[r.jsxs("span",{className:`severity-badge ${hn(U.severity)}`,children:[ae(U.severity)," ",U.severity]}),r.jsxs("span",{className:"score-badge",children:["Score: ",U.score]}),!U.is_custom&&r.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),r.jsx("p",{className:"rule-description",children:U.description}),r.jsxs("div",{className:"rule-footer",children:[r.jsxs("div",{className:"mitre-tags",children:[(ce=U.mitre_attack)==null?void 0:ce.slice(0,3).map(Se=>r.jsx("span",{className:"mitre-tag",children:Se},Se)),U.mitre_attack&&U.mitre_attack.length>3&&r.jsxs("span",{className:"mitre-tag",children:["+",U.mitre_attack.length-3]})]}),r.jsxs("div",{className:"rule-actions",children:[r.jsx("button",{className:"rule-action",onClick:()=>Xs(U),children:"Details"}),r.jsx("button",{className:"rule-action",onClick:()=>Te(U),children:"Edit"})]})]})]},U.id)})}),fe.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🛡️"}),r.jsx("div",{children:"No rules match your filters"})]}),b&&r.jsx("div",{className:"modal-overlay",onClick:()=>k(null),children:r.jsxs("div",{className:"modal-content rule-modal",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Rule Details"}),r.jsx("button",{className:"close-btn",onClick:()=>k(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Name:"}),r.jsx("span",{className:"detail-value",children:b.name})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"ID:"}),r.jsx("span",{className:"detail-value mono",children:b.id})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Severity:"}),r.jsxs("span",{className:`severity-badge ${hn(b.severity)}`,children:[ae(b.severity)," ",b.severity]})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Score:"}),r.jsx("span",{className:"detail-value",children:b.score})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Status:"}),r.jsx("span",{className:`status-badge ${b.enabled?"enabled":"disabled"}`,children:b.enabled?"Enabled":"Disabled"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Description"}),r.jsx("p",{className:"detail-description",children:b.description})]}),b.mitre_attack&&b.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"MITRE ATT&CK"}),r.jsx("div",{className:"mitre-tags",children:b.mitre_attack.map(U=>r.jsx("span",{className:"mitre-tag",children:U},U))})]}),b.tags&&b.tags.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Tags"}),r.jsx("div",{className:"tags-list",children:b.tags.map(U=>r.jsx("span",{className:"tag-item",children:U},U))})]})]})]})}),S&&r.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:r.jsxs("div",{className:"modal-content",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Validate Rule"}),r.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),r.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:()=>{const U=document.querySelector(".validate-input");if(U!=null&&U.value){const ce=U.value;try{if(ce.trim().startsWith("-"))Wn({name:"temp",description:ce,severity:"medium",enabled:!0,score:50});else{const Se=JSON.parse(ce);Wn(Se)}}catch{Wn({name:"temp",description:ce,severity:"medium",enabled:!0,score:50})}}},disabled:$,children:$?"Validating...":"Validate"})]}),q&&r.jsxs("div",{className:`validation-result ${q.valid?"valid":"invalid"}`,children:[r.jsx("div",{className:"result-header",children:q.valid?"✓ Valid Rule":"✗ Invalid Rule"}),q.errors.length>0&&r.jsxs("div",{className:"result-errors",children:[r.jsx("strong",{children:"Errors:"}),r.jsx("ul",{children:q.errors.map((U,ce)=>r.jsx("li",{children:U},ce))})]}),q.warnings.length>0&&r.jsxs("div",{className:"result-warnings",children:[r.jsx("strong",{children:"Warnings:"}),r.jsx("ul",{children:q.warnings.map((U,ce)=>r.jsx("li",{children:U},ce))})]})]})]})]})}),z&&r.jsx("div",{className:"modal-overlay",onClick:()=>R(!1),children:r.jsxs("div",{className:"modal-content",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Import Rules"}),r.jsx("button",{className:"close-btn",onClick:()=>R(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),r.jsx("input",{type:"file",ref:Q,accept:".yaml,.yml,.json",onChange:Ks,style:{display:"none"}}),r.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var U;return(U=Q.current)==null?void 0:U.click()},disabled:K,children:K?"Importing...":"Choose File"}),G&&r.jsxs("div",{className:`import-result ${G.imported>0?"success":"error"}`,children:[r.jsx("div",{className:"result-header",children:G.imported>0?`✓ Imported ${G.imported} rules`:"✗ Import failed"}),G.failed>0&&r.jsxs("div",{className:"result-info",children:["Failed: ",G.failed]}),G.errors.length>0&&r.jsx("div",{className:"result-errors",children:r.jsx("ul",{children:G.errors.map((U,ce)=>r.jsx("li",{children:U},ce))})})]}),r.jsx("div",{className:"modal-actions",children:r.jsx("button",{className:"btn-secondary",onClick:()=>R(!1),children:"Close"})})]})]})}),I&&r.jsx("div",{className:"modal-overlay",onClick:()=>L(!1),children:r.jsxs("div",{className:"modal-content template-modal",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Create Rule from Template"}),r.jsx("button",{className:"close-btn",onClick:()=>L(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:H?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"selected-template-header",children:[r.jsx("button",{className:"btn-back",onClick:()=>X(null),children:"← Back"}),r.jsx("h4",{children:H.name})]}),r.jsx("div",{className:"template-params-form",children:H.parameters.map(U=>r.jsxs("div",{className:"param-item",children:[r.jsxs("label",{children:[U.name,U.required&&r.jsx("span",{className:"required",children:"*"})]}),r.jsx("p",{className:"param-desc",children:U.description}),U.options&&U.options.length>0?r.jsxs("select",{value:F[U.name]||"",onChange:ce=>te({...F,[U.name]:ce.target.value}),children:[r.jsx("option",{value:"",children:"Select..."}),U.options.map(ce=>r.jsx("option",{value:ce,children:ce},ce))]}):r.jsx("input",{type:U.type==="number"?"number":"text",value:F[U.name]||"",onChange:ce=>te({...F,[U.name]:ce.target.value}),placeholder:U.default||""})]},U.name))}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>L(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:Ee,disabled:H.parameters.some(U=>U.required&&!F[U.name]),children:"Create Rule"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"modal-desc",children:"Select a template:"}),r.jsx("div",{className:"template-list",children:C.length===0?r.jsx("div",{className:"empty-state",children:"No templates available"}):C.map(U=>r.jsxs("div",{className:"template-card",onClick:()=>Z(U),children:[r.jsx("div",{className:"template-name",children:U.name}),r.jsx("div",{className:"template-desc",children:U.description}),r.jsxs("div",{className:"template-params",children:[U.parameters.length," parameters"]})]},U.name))})]})})]})}),r.jsx("style",{children:`
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
      `})]})}function Sk(){const[t,e]=E.useState("general"),[n,i]=E.useState(!1),[o,l]=E.useState(!1),[c,u]=E.useState(null),[h,p]=E.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});E.useEffect(()=>{Gc.get().then(w=>{const j=w.data;p({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const g=async()=>{var w,j;l(!0),u(null);try{await Gc.save({database_path:h.databasePath,log_level:h.logLevel,max_events:h.maxEvents,retention_days:h.retentionDays,enable_alerting:h.enableAlerting,enable_live_collection:h.enableLiveCollection,enable_auto_update:h.enableAutoUpdate,api_port:h.apiPort,api_host:h.apiHost,cors_enabled:h.corsEnabled,max_import_file_size:h.maxImportFileSize,export_directory:h.exportDirectory,parser_workers:h.parserWorkers,memory_limit:h.memoryLimit}),i(!0),setTimeout(()=>i(!1),3e3)}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to save settings")}finally{l(!1)}},v=async()=>{var w,j;l(!0),u(null);try{await Gc.reset(),window.location.reload()}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to reset settings"),l(!1)}},y=(w,j)=>{p({...h,[w]:j})};return r.jsxs("div",{className:"settings-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Settings"}),n&&r.jsx("span",{className:"save-indicator",children:"✓ Saved"})]}),r.jsxs("div",{className:"settings-layout",children:[r.jsxs("div",{className:"settings-nav",children:[r.jsxs("button",{className:`nav-item ${t==="general"?"active":""}`,onClick:()=>e("general"),children:[r.jsx("span",{className:"nav-icon",children:"⚙️"}),"General"]}),r.jsxs("button",{className:`nav-item ${t==="database"?"active":""}`,onClick:()=>e("database"),children:[r.jsx("span",{className:"nav-icon",children:"💾"}),"Database"]}),r.jsxs("button",{className:`nav-item ${t==="api"?"active":""}`,onClick:()=>e("api"),children:[r.jsx("span",{className:"nav-icon",children:"🔌"}),"API Server"]}),r.jsxs("button",{className:`nav-item ${t==="collection"?"active":""}`,onClick:()=>e("collection"),children:[r.jsx("span",{className:"nav-icon",children:"📡"}),"Collection"]}),r.jsxs("button",{className:`nav-item ${t==="advanced"?"active":""}`,onClick:()=>e("advanced"),children:[r.jsx("span",{className:"nav-icon",children:"🔧"}),"Advanced"]})]}),r.jsxs("div",{className:"settings-content",children:[t==="general"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"General Settings"}),r.jsx("p",{children:"Configure basic application settings"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Log Level"}),r.jsx("p",{children:"Minimum severity level for logging"})]}),r.jsxs("select",{value:h.logLevel,onChange:w=>y("logLevel",w.target.value),children:[r.jsx("option",{value:"debug",children:"Debug"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"warn",children:"Warning"}),r.jsx("option",{value:"error",children:"Error"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Export Directory"}),r.jsx("p",{children:"Default directory for exported files"})]}),r.jsx("input",{type:"text",value:h.exportDirectory,onChange:w=>y("exportDirectory",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Auto Update Rules"}),r.jsx("p",{children:"Automatically update detection rules"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAutoUpdate,onChange:w=>y("enableAutoUpdate",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="database"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Database Settings"}),r.jsx("p",{children:"Configure database storage and retention"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Database Path"}),r.jsx("p",{children:"Path to SQLite database file"})]}),r.jsx("input",{type:"text",value:h.databasePath,onChange:w=>y("databasePath",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Event Retention (days)"}),r.jsx("p",{children:"Automatically delete events older than this"})]}),r.jsx("input",{type:"number",value:h.retentionDays,onChange:w=>y("retentionDays",Number(w.target.value)),className:"number-input",min:"1",max:"365"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Maximum Events"}),r.jsx("p",{children:"Maximum number of events to store"})]}),r.jsx("input",{type:"number",value:h.maxEvents,onChange:w=>y("maxEvents",Number(w.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),t==="api"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"API Server Settings"}),r.jsx("p",{children:"Configure the HTTP API server"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Host"}),r.jsx("p",{children:"Host address to bind the API server"})]}),r.jsx("input",{type:"text",value:h.apiHost,onChange:w=>y("apiHost",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Port"}),r.jsx("p",{children:"Port number for the API server"})]}),r.jsx("input",{type:"number",value:h.apiPort,onChange:w=>y("apiPort",Number(w.target.value)),className:"number-input",min:"1",max:"65535"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable CORS"}),r.jsx("p",{children:"Allow cross-origin requests"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.corsEnabled,onChange:w=>y("corsEnabled",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="collection"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Collection Settings"}),r.jsx("p",{children:"Configure event collection behavior"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Alerting"}),r.jsx("p",{children:"Generate alerts when rules match"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAlerting,onChange:w=>y("enableAlerting",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Live Collection"}),r.jsx("p",{children:"Continuously monitor Windows Event Logs"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableLiveCollection,onChange:w=>y("enableLiveCollection",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Max Import File Size (MB)"}),r.jsx("p",{children:"Maximum size for imported files"})]}),r.jsx("input",{type:"number",value:h.maxImportFileSize,onChange:w=>y("maxImportFileSize",Number(w.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),t==="advanced"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Advanced Settings"}),r.jsx("p",{children:"Expert configuration options"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"⚠️ Warning"}),r.jsx("p",{children:"Advanced settings may affect performance and stability. Only modify if you know what you're doing."})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Parser Workers"}),r.jsx("p",{children:"Number of parallel parsing workers"})]}),r.jsx("input",{type:"number",value:h.parserWorkers,onChange:w=>y("parserWorkers",Number(w.target.value)),className:"number-input",min:"1",max:"32"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Memory Limit (MB)"}),r.jsx("p",{children:"Maximum memory usage for event processing"})]}),r.jsx("input",{type:"number",value:h.memoryLimit,onChange:w=>y("memoryLimit",Number(w.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),r.jsxs("div",{className:"settings-actions",children:[c&&r.jsx("span",{className:"error-text",children:c}),r.jsx("button",{onClick:g,className:"btn-primary",disabled:o,children:o?"Saving...":"Save Changes"}),r.jsx("button",{onClick:v,className:"btn-secondary",disabled:o,children:"Reset to Defaults"})]})]})]}),r.jsx("style",{children:`
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
      `})]})}function Ck(){const{t}=ct(),[e,n]=E.useState(null),[i,o]=E.useState(!0),[l,c]=E.useState(null),[u,h]=E.useState("5m"),[p,g]=E.useState({events:[],alerts:[],memory:[],timestamps:[]}),v=E.useRef(null),y=()=>{Os.getMetrics().then(k=>{n(k.data),o(!1),g(S=>{const A=new Date().toLocaleTimeString(),z=[...S.events,k.data.total_events].slice(-20),R=[...S.alerts,k.data.total_alerts].slice(-20),I=[...S.memory,k.data.memory_usage_mb].slice(-20),L=[...S.timestamps,A].slice(-20);return{events:z,alerts:R,memory:I,timestamps:L}})}).catch(k=>{c(k.message||t("common.error")),o(!1)})};E.useEffect(()=>{y();const k=setInterval(y,5e3);return()=>clearInterval(k)},[]),E.useEffect(()=>{v.current&&p.events.length>1&&w()},[p]);const w=()=>{const k=v.current;if(!k)return;const S=k.getContext("2d");if(!S)return;const A=k.width,z=k.height,R=40;S.clearRect(0,0,A,z);const I=Math.max(...p.events,1),L=Math.min(...p.events,0),C=I-L||1;S.strokeStyle="#333",S.lineWidth=1;for(let H=0;H<=4;H++){const X=R+(z-2*R)*H/4;S.beginPath(),S.moveTo(R,X),S.lineTo(A-R,X),S.stroke()}const O=(A-2*R)/(p.events.length-1);S.strokeStyle="#00d9ff",S.lineWidth=2,S.beginPath(),p.events.forEach((H,X)=>{const F=R+X*O,te=R+(z-2*R)*(1-(H-L)/C);X===0?S.moveTo(F,te):S.lineTo(F,te)}),S.stroke(),S.fillStyle="#00d9ff",p.events.forEach((H,X)=>{const F=R+X*O,te=R+(z-2*R)*(1-(H-L)/C);S.beginPath(),S.arc(F,te,3,0,Math.PI*2),S.fill()})},j=k=>{const S=Math.floor(k/86400),A=Math.floor(k%86400/3600),z=Math.floor(k%3600/60);return S>0?`${S}d ${A}h ${z}m`:A>0?`${A}h ${z}m`:`${z}m`};if(i)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})});if(l)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"error-state",children:["❌ ",l]})});const N=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return r.jsxs("div",{className:"metrics-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("metrics.title")}),r.jsxs("div",{className:"time-range-selector",children:[r.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),r.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),r.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-card large",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"📊"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),r.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),r.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"🚨"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),r.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),r.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"💾"}),r.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),r.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),r.jsx("div",{className:"metric-bar",children:r.jsx("div",{className:"metric-bar-fill",style:{width:`${N}%`}})}),r.jsxs("div",{className:"metric-sub",children:[N,"% of limit"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"⚡"}),r.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),r.jsx("div",{className:"metric-value uptime",children:j((e==null?void 0:e.uptime_seconds)||0)}),r.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),r.jsx("div",{className:"chart-section",children:r.jsxs("div",{className:"chart-card",children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:"Event Throughput"}),r.jsx("div",{className:"chart-legend",children:r.jsxs("span",{className:"legend-item",children:[r.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),r.jsx("div",{className:"chart-container",children:r.jsx("canvas",{ref:v,width:800,height:200})})]})}),r.jsxs("div",{className:"prometheus-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("metrics.prometheusFormat")}),r.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(b()),children:"📋 Copy"})]}),r.jsx("pre",{className:"prometheus-code",children:b()})]}),r.jsx("style",{children:`
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
      `})]});function b(){return`# HELP winalog_events_total Total number of events
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}Kr.register(zo,Io,Ar,Fn,Nx,kx,jx,yx);function Ek(){const{t}=ct(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!0),[u,h]=E.useState(null),[p,g]=E.useState(null),[v,y]=E.useState({});E.useEffect(()=>{w()},[]);const w=async()=>{try{c(!0);const A=(await Rj.detect()).data;n(A.detections||[]),o(j(A.detections||[])),h(null)}catch(S){h(S instanceof Error?S.message:"Unknown error")}finally{c(!1)}},j=S=>{const A={total_detections:S.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return S.forEach(z=>{var I;const R=((I=z.severity)==null?void 0:I.toLowerCase())||"info";R in A.by_severity&&A.by_severity[R]++,A.by_category[z.category]=(A.by_category[z.category]||0)+1,A.by_technique[z.technique]=(A.by_technique[z.technique]||0)+1}),A},N=e.filter(S=>{var A;return!(v.severity&&((A=S.severity)==null?void 0:A.toLowerCase())!==v.severity||v.category&&S.category!==v.category||v.technique&&S.technique!==v.technique)}),b={labels:Object.keys((i==null?void 0:i.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((i==null?void 0:i.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},k={labels:Object.keys((i==null?void 0:i.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((i==null?void 0:i.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return l?r.jsx("div",{className:"persistence-page",children:r.jsx("div",{className:"loading",children:t("common.loading")})}):u?r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("common.confirm")})]}):r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{children:t("persistence.title")}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("persistence.rescan")})]}),i&&r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-card stat-total",children:[r.jsx("div",{className:"stat-value",children:i.total_detections}),r.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),r.jsxs("div",{className:"stat-card stat-critical",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.critical}),r.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),r.jsxs("div",{className:"stat-card stat-high",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.high}),r.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),r.jsxs("div",{className:"stat-card stat-medium",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.medium}),r.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),r.jsxs("div",{className:"stat-card stat-low",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.low}),r.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),r.jsxs("div",{className:"charts-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.bySeverity")}),r.jsx("div",{className:"chart-container",children:r.jsx(Rd,{data:b,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.byCategory")}),r.jsx("div",{className:"chart-container",children:r.jsx(Rd,{data:k,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),r.jsx("div",{className:"filters",children:r.jsxs("select",{value:v.severity||"",onChange:S=>y({...v,severity:S.target.value||void 0}),children:[r.jsx("option",{value:"",children:t("persistence.allSeverities")}),r.jsx("option",{value:"critical",children:t("persistence.critical")}),r.jsx("option",{value:"high",children:t("persistence.high")}),r.jsx("option",{value:"medium",children:t("persistence.medium")}),r.jsx("option",{value:"low",children:t("persistence.low")})]})}),r.jsx("div",{className:"detections-table-container",children:r.jsxs("table",{className:"detections-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("persistence.severity")}),r.jsx("th",{children:t("persistence.technique")}),r.jsx("th",{children:t("persistence.category")}),r.jsx("th",{children:t("persistence.title")}),r.jsx("th",{children:t("persistence.evidence")}),r.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),r.jsx("tbody",{children:N.map(S=>{var A,z,R,I;return r.jsxs("tr",{onClick:()=>g(S),className:"detection-row",children:[r.jsx("td",{children:r.jsx("span",{className:`severity-badge severity-${(A=S.severity)==null?void 0:A.toLowerCase()}`,children:t(`persistence.${(z=S.severity)==null?void 0:z.toLowerCase()}`)})}),r.jsx("td",{children:r.jsx("span",{className:"technique-tag",children:S.technique})}),r.jsx("td",{children:S.category}),r.jsx("td",{children:S.title}),r.jsx("td",{className:"evidence-cell",children:((R=S.evidence)==null?void 0:R.key)&&r.jsx("div",{className:"evidence-key",children:S.evidence.key})}),r.jsx("td",{children:t(`persistence.${(I=S.false_positive_risk)==null?void 0:I.toLowerCase()}Risk`)||S.false_positive_risk})]},S.id)})})]})}),p&&r.jsx("div",{className:"modal-overlay",onClick:()=>g(null),children:r.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:p.title}),r.jsx("button",{className:"close-btn",onClick:()=>g(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.basicInfo")}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.description")}),r.jsx("p",{children:p.description})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.recommendedAction")}),r.jsx("p",{children:p.recommended_action})]})]})]})})]})}const yn={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},Rk={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},Pk=(t,e="zh")=>{const n=e.startsWith("zh")?"zh":"en";return Rk[n][t]||t},Ak=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function Tk(){var b,k;const{t,locale:e}=ct(),n=Bn(),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState("brute-force"),[p,g]=E.useState(24),[v,y]=E.useState(""),w=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:yn["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:yn.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:yn.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:yn.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:yn["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:yn["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:yn.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:yn["privilege-escalation"],category:"privilege-escalation",recommended:!1}],j=async()=>{var S,A;o(!0),y("");try{const z=await Pg.run(u,{hours:p});c(z.data)}catch(z){y(((A=(S=z.response)==null?void 0:S.data)==null?void 0:A.error)||"Failed to run analyzer")}finally{o(!1)}},N=w.reduce((S,A)=>(S[A.category]||(S[A.category]=[]),S[A.category].push(A),S),{});return r.jsxs("div",{className:"analyze-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("analyze.title")}),r.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),r.jsxs("div",{className:"analyze-grid",children:[r.jsxs("div",{className:"analyzer-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(N).map(([S,A])=>{var z;return r.jsxs("div",{className:"analyzer-category",children:[r.jsx("div",{className:"category-header",children:((z=Ak.find(R=>R.id===S))==null?void 0:z.name)||S}),r.jsx("div",{className:"analyzer-list",children:A.map(R=>r.jsxs("div",{className:`analyzer-card ${u===R.id?"selected":""}`,onClick:()=>h(R.id),children:[r.jsx("div",{className:"analyzer-icon",children:R.icon}),r.jsxs("div",{className:"analyzer-content",children:[r.jsxs("div",{className:"analyzer-header",children:[r.jsx("span",{className:"analyzer-name",children:R.name}),R.recommended&&r.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),r.jsx("p",{className:"analyzer-desc",children:R.desc})]}),r.jsx("div",{className:"select-indicator",children:u===R.id&&"✓"})]},R.id))})]},S)})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.configuration")})}),r.jsxs("div",{className:"config-card",children:[r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.selectedAnalyzer")}),r.jsxs("div",{className:"selected-analyzer-display",children:[r.jsx("span",{className:"analyzer-icon",children:yn[u]}),r.jsx("span",{children:(b=w.find(S=>S.id===u))==null?void 0:b.name})]})]}),r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.timeWindow")}),r.jsxs("div",{className:"time-selector",children:[r.jsx("button",{className:p===1?"active":"",onClick:()=>g(1),children:"1h"}),r.jsx("button",{className:p===6?"active":"",onClick:()=>g(6),children:"6h"}),r.jsx("button",{className:p===24?"active":"",onClick:()=>g(24),children:"24h"}),r.jsx("button",{className:p===72?"active":"",onClick:()=>g(72),children:"72h"}),r.jsx("button",{className:p===168?"active":"",onClick:()=>g(168),children:"7d"})]})]}),r.jsx("button",{onClick:j,disabled:i,className:"btn-primary btn-run",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),v&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:v})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("analyze.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>n("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),l&&r.jsxs("div",{className:"results-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.results")})}),r.jsxs("div",{className:"results-grid",children:[r.jsxs("div",{className:"result-summary-card",children:[r.jsxs("div",{className:"result-header",children:[r.jsx("span",{className:"result-icon",children:yn[l.type]}),r.jsx("span",{className:"result-type",children:(k=w.find(S=>S.id===l.type))==null?void 0:k.name})]}),r.jsxs("div",{className:"result-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.severity")}),r.jsx("span",{className:`severity-badge severity-${l.severity}`,children:l.severity.toUpperCase()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.score")}),r.jsx("span",{className:"score-value",children:l.score.toFixed(1)})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.findings")}),r.jsx("span",{className:"findings-count",children:l.findings.length})]})]}),r.jsx("p",{className:"result-summary",children:l.summary})]}),l.findings.length>0&&r.jsxs("div",{className:"findings-card",children:[r.jsx("h4",{children:t("analyze.findingsList")}),r.jsx("div",{className:"findings-list",children:l.findings.map((S,A)=>r.jsxs("div",{className:"finding-item",children:[r.jsxs("div",{className:"finding-header",children:[r.jsx("span",{className:`severity-indicator severity-${S.severity}`}),r.jsx("span",{className:"finding-desc",children:Pk(S.description,e)})]}),r.jsxs("div",{className:"finding-meta",children:[S.rule_name&&r.jsx("span",{className:"rule-name",children:S.rule_name}),r.jsxs("span",{className:"finding-score",children:["Score: ",S.score.toFixed(1)]}),S.evidence&&S.evidence.length>0&&r.jsxs("span",{className:"evidence-count",children:[S.evidence.length," events"]})]}),S.evidence&&S.evidence.length>0&&r.jsxs("div",{className:"evidence-list",children:[r.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),S.evidence.slice(0,5).map((z,R)=>{var I;return r.jsxs("div",{className:"evidence-item",children:[r.jsx("span",{className:"evidence-time",children:new Date(z.timestamp).toLocaleString()}),r.jsx("span",{className:"evidence-user",children:z.user||"-"}),r.jsx("span",{className:"evidence-computer",children:z.computer||"-"}),r.jsxs("span",{className:"evidence-msg",title:z.message,children:[(I=z.message)==null?void 0:I.substring(0,80),z.message&&z.message.length>80?"...":""]})]},R)}),S.evidence.length>5&&r.jsxs("div",{className:"evidence-more",children:["+",S.evidence.length-5," more events"]})]})]},A))})]})]})]}),r.jsxs("div",{className:"analyzer-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),r.jsx("div",{className:"info-grid",children:w.slice(0,4).map(S=>r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:S.icon}),r.jsxs("div",{className:"info-content",children:[r.jsx("h4",{children:S.name}),r.jsx("p",{children:S.desc})]})]},S.id))})]})]})}const Wm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},Dk={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function Lk(){const{t}=ct(),e=Bn(),[n,i]=E.useState(!1),[o,l]=E.useState([]),[c,u]=E.useState("24h"),[h,p]=E.useState(""),[g,v]=E.useState(!1),[y,w]=E.useState(null),j=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],N=async()=>{var L,C;i(!0),p("");try{const O=await Pj.analyze({time_window:c});l(O.data.results||[]),v(!0)}catch(O){p(((C=(L=O.response)==null?void 0:L.data)==null?void 0:C.error)||"Failed to run correlation analysis")}finally{i(!1)}},b=L=>Wm[L.toLowerCase()]||Wm.info,k=L=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[L.toLowerCase()]||L,S=L=>{for(const[C,O]of Object.entries(Dk))if(L.includes(C))return O;return"🎯"},A=L=>{try{return new Date(L).toLocaleString()}catch{return L}},z=(L,C)=>{try{const O=new Date(L).getTime(),X=new Date(C).getTime()-O,F=Math.floor(X/1e3),te=Math.floor(F/60),q=Math.floor(te/60);return q>0?`${q}h ${te%60}m`:te>0?`${te}m ${F%60}s`:`${F}s`}catch{return"N/A"}},R=E.useMemo(()=>{if(o.length===0)return null;const L={critical:0,high:0,medium:0,low:0};return o.forEach(C=>{const O=C.severity.toLowerCase();L.hasOwnProperty(O)&&L[O]++}),{totalEvents:o.reduce((C,O)=>C+O.event_count,0),severityCounts:L,avgEventsPerRule:Math.round(o.reduce((C,O)=>C+O.event_count,0)/o.length)}},[o]),I=E.useMemo(()=>{if(o.length===0)return[];const L=Math.max(...o.map(C=>C.event_count));return o.map(C=>{const O=Math.round(C.event_count/L*20);return{...C,bar:"█".repeat(O)+"░".repeat(20-O)}})},[o]);return r.jsxs("div",{className:"correlation-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("correlation.title")}),r.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),r.jsxs("div",{className:"correlation-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("correlation.timeWindow")}),r.jsx("div",{className:"time-selector",children:j.map(L=>r.jsx("button",{className:c===L.value?"active":"",onClick:()=>u(L.value),children:L.label},L.value))})]}),r.jsx("button",{onClick:N,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:h})]}),g&&!n&&o.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h3",{children:t("correlation.noResults")}),r.jsx("p",{children:t("correlation.noResultsDesc")})]}),R&&r.jsxs("div",{className:"correlation-stats",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:o.length}),r.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📝"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.totalEvents.toLocaleString()}),r.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),r.jsxs("div",{className:"stat-card critical",children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.critical}),r.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),r.jsxs("div",{className:"stat-card high",children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.high}),r.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),I.length>0&&r.jsxs("div",{className:"attack-chain-visual",children:[r.jsx("h3",{children:t("correlation.attackChainTimeline")}),r.jsx("div",{className:"chain-bars",children:I.map((L,C)=>r.jsxs("div",{className:"chain-bar-item",children:[r.jsxs("div",{className:"chain-bar-header",children:[r.jsx("span",{className:"chain-icon",children:S(L.description)}),r.jsx("span",{className:"chain-name",children:L.rule_name}),r.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:b(L.severity)}})]}),r.jsx("div",{className:"chain-bar-track",children:r.jsx("span",{className:"chain-bar-fill",style:{width:`${L.event_count/R.totalEvents*100}%`,backgroundColor:b(L.severity)}})}),r.jsxs("div",{className:"chain-bar-meta",children:[r.jsxs("span",{className:"chain-events",children:[L.event_count," events"]}),r.jsx("span",{className:"chain-duration",children:z(L.start_time,L.end_time)})]})]},C))})]}),o.length>0&&r.jsxs("div",{className:"correlation-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("correlation.results")}),r.jsxs("span",{className:"results-count",children:[o.length," ",t("correlation.rulesTriggered")]})]}),r.jsx("div",{className:"results-grid",children:o.map((L,C)=>r.jsxs("div",{className:`correlation-card ${y===C?"expanded":""}`,onClick:()=>w(y===C?null:C),children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"rule-info",children:[r.jsx("span",{className:"severity-badge",style:{backgroundColor:b(L.severity)},children:k(L.severity)}),r.jsx("h4",{children:L.rule_name})]}),r.jsxs("div",{className:"event-count",children:[r.jsx("span",{className:"count-value",children:L.event_count}),r.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),r.jsx("div",{className:"card-icon",children:S(L.description)}),r.jsx("p",{className:"rule-description",children:L.description}),r.jsxs("div",{className:"card-footer",children:[r.jsxs("div",{className:"time-info",children:[r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),r.jsx("span",{className:"time-value",children:A(L.start_time)})]}),r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),r.jsx("span",{className:"time-value",children:A(L.end_time)})]})]}),r.jsxs("div",{className:"duration-badge",children:["⏱️ ",z(L.start_time,L.end_time)]})]}),y===C&&r.jsxs("div",{className:"card-expanded",children:[r.jsxs("div",{className:"expanded-section",children:[r.jsx("h5",{children:t("correlation.attackPattern")}),r.jsxs("div",{className:"pattern-visual",children:[r.jsx("span",{className:"pattern-icon",children:"🎯"}),r.jsx("span",{className:"pattern-text",children:L.rule_name}),r.jsx("span",{className:"pattern-arrow",children:"→"}),r.jsxs("span",{className:"pattern-target",children:[k(L.severity)," Risk"]})]})]}),r.jsxs("div",{className:"expanded-actions",children:[r.jsxs("button",{className:"action-btn",onClick:O=>{O.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"action-btn",onClick:O=>{O.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},C))})]}),r.jsxs("div",{className:"correlation-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("correlation.aboutCorrelation")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("correlation.aboutDesc")})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("correlation.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const $m={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function Mk(){const{t}=ct(),e=Bn(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState(""),[h,p]=E.useState("overview"),g=async()=>{var b,k;i(!0),u("");try{const S=await Aj.analyze();l(S.data)}catch(S){u(((k=(b=S.response)==null?void 0:b.data)==null?void 0:k.error)||"Failed to run multi-machine analysis")}finally{i(!1)}},v=b=>$m[b.toLowerCase()]||$m.info,y=b=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[b.toLowerCase()]||b,w=E.useMemo(()=>{if(!o||o.machines.length===0)return{nodes:[],edges:[]};const b=o.machines.map(S=>({id:S.id,name:S.name,ip:S.ip,role:S.role,suspicious:o.lateral_movement.some(A=>A.source_machine===S.name||A.target_machine===S.name)})),k=[];return o.lateral_movement.forEach(S=>{const A=b.find(R=>R.name===S.source_machine),z=b.find(R=>R.name===S.target_machine);A&&z&&k.push({from:A.id,to:z.id,user:S.user,severity:S.severity})}),{nodes:b,edges:k}},[o]),j=b=>{try{return new Date(b).toLocaleString()}catch{return b}},N=b=>b.includes("DC")||b.includes("Domain")?"🌐":b.includes("Server")?"🖥️":b.includes("Workstation")?"💻":"🖥️";return r.jsxs("div",{className:"multi-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("multi.title")}),r.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),r.jsx("div",{className:"multi-toolbar",children:r.jsx("button",{onClick:g,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:c})]}),o&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"analysis-summary",children:[r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.analysisId")}),r.jsx("p",{className:"analysis-id",children:o.analysis_id})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.machinesFound")}),r.jsx("p",{className:"summary-value",children:o.machines.length})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.suspiciousActivities")}),r.jsx("p",{className:"summary-value",style:{color:o.suspicious_count>0?"#dc2626":"#16a34a"},children:o.suspicious_count})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.lateralMovements")}),r.jsx("p",{className:"summary-value",children:o.lateral_movement.length})]})]}),r.jsx("p",{className:"summary-text",children:o.summary}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),r.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),r.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&r.jsx("div",{className:"tab-content",children:o.machines.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🖥️"}),r.jsx("h3",{children:t("multi.noMachines")}),r.jsx("p",{children:t("multi.noMachinesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"machine-graph",children:[r.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),r.jsxs("div",{className:"graph-container",children:[r.jsx("div",{className:"graph-nodes",children:w.nodes.map((b,k)=>{const S=o.lateral_movement.some(A=>A.source_machine===b.name||A.target_machine===b.name);return r.jsxs("div",{className:`graph-node ${S?"suspicious":""}`,style:{top:`${20+k%3*25}%`,left:`${20+k%4*20}%`},children:[r.jsx("span",{className:"node-icon",children:N(b.role)}),r.jsx("span",{className:"node-name",children:b.name}),r.jsx("span",{className:"node-ip",children:b.ip||"N/A"}),S&&r.jsx("span",{className:"node-alert",children:"⚠️"})]},b.id)})}),r.jsxs("div",{className:"graph-legend",children:[r.jsx("span",{className:"legend-item",children:"🖥️ Server"}),r.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),r.jsx("span",{className:"legend-item",children:"💻 Workstation"}),r.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),r.jsx("div",{className:"machines-grid",children:o.machines.map((b,k)=>{const S=o.lateral_movement.some(A=>A.source_machine===b.name||A.target_machine===b.name);return r.jsxs("div",{className:`machine-card ${S?"alert":""}`,children:[r.jsxs("div",{className:"machine-header",children:[r.jsx("span",{className:"machine-icon",children:N(b.role)}),r.jsx("h4",{children:b.name}),S&&r.jsx("span",{className:"alert-badge",children:"⚠️"})]}),r.jsxs("div",{className:"machine-details",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"IP:"}),r.jsx("span",{className:"value",children:b.ip||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),r.jsx("span",{className:"value",children:b.domain||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),r.jsx("span",{className:"value",children:b.role||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"OS:"}),r.jsx("span",{className:"value",children:b.os_version||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),r.jsx("span",{className:"value",children:j(b.last_seen)})]})]}),S&&r.jsx("div",{className:"machine-alert-indicator",children:r.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},k)})})]})}),h==="crossmachine"&&r.jsx("div",{className:"tab-content",children:o.cross_machine_activity.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noSuspiciousActivity")}),r.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):r.jsx("div",{className:"activity-list",children:o.cross_machine_activity.map((b,k)=>r.jsxs("div",{className:`activity-card ${b.suspicious?"suspicious":""}`,children:[r.jsxs("div",{className:"activity-header",children:[r.jsxs("div",{className:"user-info",children:[r.jsx("span",{className:"user-icon",children:"👤"}),r.jsx("span",{className:"user-name",children:b.user})]}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(b.severity)},children:y(b.severity)})]}),r.jsxs("div",{className:"activity-body",children:[r.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",b.machine_count," ",t("multi.machines"),":"]}),r.jsx("div",{className:"machine-tags",children:b.machines.map((S,A)=>r.jsx("span",{className:"machine-tag",children:S},A))}),r.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",b.login_count]}),r.jsxs("div",{className:"recommendation",children:[r.jsx("span",{className:"rec-icon",children:"💡"}),r.jsx("span",{children:b.recommendation})]})]})]},k))})}),h==="lateral"&&r.jsx("div",{className:"tab-content",children:o.lateral_movement.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noLateralMovement")}),r.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lateral-summary",children:r.jsxs("div",{className:"lateral-stat",children:[r.jsx("span",{className:"stat-icon",children:"🔄"}),r.jsxs("span",{className:"stat-text",children:[o.lateral_movement.length," lateral movements detected"]})]})}),r.jsx("div",{className:"lateral-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("multi.time")}),r.jsx("th",{children:t("multi.source")}),r.jsx("th",{children:t("multi.target")}),r.jsx("th",{children:t("multi.user")}),r.jsx("th",{children:t("multi.event")}),r.jsx("th",{children:t("multi.description")}),r.jsx("th",{children:t("multi.severity")}),r.jsx("th",{children:"MITRE"})]})}),r.jsx("tbody",{children:o.lateral_movement.map((b,k)=>r.jsxs("tr",{className:b.severity==="critical"||b.severity==="high"?"danger-row":"",children:[r.jsx("td",{className:"time-cell",children:j(b.timestamp)}),r.jsx("td",{className:"source-cell",children:r.jsx("span",{className:"machine-badge source",children:b.source_machine})}),r.jsx("td",{className:"target-cell",children:r.jsx("span",{className:"machine-badge target",children:b.target_machine})}),r.jsxs("td",{className:"user-cell",children:["👤 ",b.user]}),r.jsx("td",{className:"event-cell",children:b.event_id}),r.jsx("td",{className:"desc-cell",children:b.description}),r.jsx("td",{children:r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(b.severity)},children:y(b.severity)})}),r.jsx("td",{className:"mitre-cell",children:b.mitre_attack.map((S,A)=>r.jsx("span",{className:"mitre-tag",children:S},A))})]},k))})]})})]})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("multi.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function Ok(){const{t}=ct(),[e,n]=E.useState("SELECT * FROM events LIMIT 10"),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState(""),[p,g]=E.useState([]),[v,y]=E.useState(!1),[w,j]=E.useState(""),N=E.useRef(null),b=async()=>{var O,H;if(!e.trim()){h(t("query.sqlRequired"));return}o(!0),h(""),c(null);const C=performance.now();try{const X=await Tj.execute({sql:e,limit:100}),F=((performance.now()-C)/1e3).toFixed(2);j(F),c(X.data),k(e,!0,X.data.count,F)}catch(X){const F=((performance.now()-C)/1e3).toFixed(2);h(((H=(O=X.response)==null?void 0:O.data)==null?void 0:H.error)||"Failed to execute query"),k(e,!1,0,F),k(e,!1,0)}finally{o(!1)}},k=(C,O,H,X)=>{const F={id:Date.now().toString(),sql:C,timestamp:new Date().toISOString(),success:O,rowCount:H,duration:X};g(te=>[F,...te.slice(0,49)])},S=C=>{n(C.sql),y(!1)},A=()=>{g([])},z=C=>{const O=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],H=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],X=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],F=[],te=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,q=C.match(te)||[];let oe=0;for(const $ of q){const ie=$.toUpperCase();$.startsWith("'")&&$.endsWith("'")?F.push(r.jsx("span",{className:"sql-string",children:$},oe++)):$.startsWith('"')&&$.endsWith('"')?F.push(r.jsx("span",{className:"sql-string",children:$},oe++)):X.includes($)?F.push(r.jsx("span",{className:"sql-operator",children:$},oe++)):H.includes(ie)?F.push(r.jsx("span",{className:"sql-function",children:$},oe++)):O.includes(ie)?F.push(r.jsx("span",{className:"sql-keyword",children:$},oe++)):/^\d+$/.test($)?F.push(r.jsx("span",{className:"sql-number",children:$},oe++)):F.push(r.jsx("span",{className:"sql-identifier",children:$},oe++))}return r.jsx(r.Fragment,{children:F})},R=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],I=C=>{C.key==="Enter"&&(C.ctrlKey||C.metaKey)&&(C.preventDefault(),b())},L=C=>{if(!l)return;let O,H,X;if(C==="json")O=JSON.stringify(l,null,2),H="query_result.json",X="application/json";else{const oe=l.columns.join(","),$=l.rows.map(ie=>l.columns.map(K=>{const re=ie[K];if(re==null)return"";const G=String(re);return G.includes(",")||G.includes('"')?`"${G.replace(/"/g,'""')}"`:G}).join(",")).join(`
`);O=oe+`
`+$,H="query_result.csv",X="text/csv"}const F=new Blob([O],{type:X}),te=URL.createObjectURL(F),q=document.createElement("a");q.href=te,q.download=H,q.click(),URL.revokeObjectURL(te)};return r.jsxs("div",{className:"query-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("query.title")}),r.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),r.jsxs("div",{className:"query-toolbar",children:[r.jsxs("div",{className:"preset-queries",children:[r.jsx("label",{children:t("query.presets")}),r.jsx("div",{className:"preset-buttons",children:R.map((C,O)=>r.jsx("button",{className:"preset-btn",onClick:()=>n(C.sql),title:C.sql,children:C.label},O))})]}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("button",{className:"history-btn",onClick:()=>y(!v),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),v&&r.jsxs("div",{className:"query-history-panel",children:[r.jsxs("div",{className:"history-header",children:[r.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),r.jsx("button",{className:"clear-btn",onClick:A,children:"🗑️ Clear"})]}),r.jsx("div",{className:"history-list",children:p.length===0?r.jsx("p",{className:"empty-history",children:"No query history"}):p.map(C=>r.jsxs("div",{className:`history-item ${C.success?"success":"error"}`,onClick:()=>S(C),children:[r.jsx("div",{className:"history-sql",children:C.sql}),r.jsxs("div",{className:"history-meta",children:[r.jsx("span",{className:"history-status",children:C.success?"✓":"✗"}),r.jsxs("span",{className:"history-rows",children:[C.rowCount," rows"]}),C.duration&&r.jsxs("span",{className:"history-duration",children:[C.duration,"s"]}),r.jsx("span",{className:"history-time",children:new Date(C.timestamp).toLocaleTimeString()})]})]},C.id))})]}),r.jsxs("div",{className:"query-editor",children:[r.jsxs("div",{className:"editor-header",children:[r.jsx("label",{children:t("query.sqlQuery")}),r.jsx("div",{className:"editor-actions",children:r.jsx("button",{className:"format-btn",onClick:()=>{const C=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();n(C)},children:"🎨 Format"})})]}),r.jsxs("div",{className:"editor-wrapper",children:[r.jsx("div",{className:"sql-highlight",children:z(e)}),r.jsx("textarea",{ref:N,className:"sql-input",value:e,onChange:C=>n(C.target.value),onKeyDown:I,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),r.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),r.jsxs("div",{className:"query-actions",children:[r.jsx("button",{onClick:b,disabled:i,className:"btn-primary",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),l&&r.jsxs("div",{className:"result-actions",children:[r.jsx("button",{className:"export-btn",onClick:()=>L("json"),children:"📥 JSON"}),r.jsx("button",{className:"export-btn",onClick:()=>L("csv"),children:"📥 CSV"})]})]}),u&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:u})]}),l&&r.jsxs("div",{className:"query-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("query.results")}),r.jsxs("div",{className:"results-meta",children:[r.jsxs("span",{className:"results-count",children:[l.count," ",t("query.rowsReturned")]}),w&&r.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),l.columns.length>0&&l.rows.length>0?r.jsx("div",{className:"results-table-wrapper",children:r.jsxs("table",{className:"results-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"row-num",children:"#"}),l.columns.map((C,O)=>r.jsx("th",{children:C},O))]})}),r.jsx("tbody",{children:l.rows.map((C,O)=>r.jsxs("tr",{children:[r.jsx("td",{className:"row-num",children:O+1}),l.columns.map((H,X)=>r.jsx("td",{className:C[H]===null?"null-value":"",children:zk(C[H])},X))]},O))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📭"}),r.jsx("h3",{children:t("query.noResults")}),r.jsx("p",{children:t("query.noResultsDesc")})]})]}),r.jsxs("div",{className:"query-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("query.aboutQuery")})}),r.jsxs("div",{className:"info-content",children:[r.jsx("p",{children:t("query.aboutDesc")}),r.jsxs("div",{className:"example-queries",children:[r.jsx("h4",{children:t("query.exampleQueries")}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),r.jsx("p",{children:t("query.example1Desc")})]}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),r.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function zk(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const Ik={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},Fk={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Bk(){const{t}=ct(),e=Bn(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState([]),[h,p]=E.useState("analyze"),[g,v]=E.useState(24),[y,w]=E.useState(""),[j,N]=E.useState(null),b=async()=>{var C,O;i(!0),w("");try{const H=await wp.analyze({hours:g});l(H.data)}catch(H){w(((O=(C=H.response)==null?void 0:C.data)==null?void 0:O.error)||"Failed to run UEBA analysis")}finally{i(!1)}},k=async()=>{i(!0),w("");try{const X=((await wp.profiles()).data.profiles||[]).map(F=>({...F,risk_score:Math.random()*100}));u(X)}catch(C){w(C.message||"Failed to load profiles")}finally{i(!1)}},S=C=>Ik[C.toLowerCase()]||"#2563eb",A=C=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[C.toLowerCase()]||C,z=C=>Fk[C]||{icon:"⚠️",color:"#2563eb",description:C},R=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],I=E.useMemo(()=>{if(!o)return null;const C=o.total_anomaly||1,O=o.high_risk_count/C,H=o.medium_risk_count/C,X=1-O-H;return{high:{value:o.high_risk_count,percentage:O*100},medium:{value:o.medium_risk_count,percentage:H*100},low:{value:C-o.high_risk_count-o.medium_risk_count,percentage:X*100}}},[o]),L=C=>{try{return new Date(C).toLocaleString()}catch{return C}};return r.jsxs("div",{className:"ueba-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("ueba.title")}),r.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),r.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),k()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"ueba-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("ueba.timeWindow")}),r.jsx("div",{className:"time-selector",children:R.map(C=>r.jsx("button",{className:g===C.value?"active":"",onClick:()=>v(C.value),children:C.label},C.value))})]}),r.jsx("button",{onClick:b,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),y&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:y})]}),o&&r.jsxs("div",{className:"ueba-results",children:[r.jsxs("div",{className:"results-summary",children:[r.jsxs("div",{className:"summary-card large",children:[r.jsx("div",{className:"summary-icon",children:"📊"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.totalAnomalies")}),r.jsx("p",{className:"summary-value",children:o.total_anomaly}),r.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:g})})]})]}),I&&r.jsxs("div",{className:"risk-gauge-card",children:[r.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),r.jsxs("div",{className:"risk-gauge",children:[r.jsxs("div",{className:"gauge-bar",children:[r.jsx("div",{className:"gauge-segment critical",style:{width:`${I.high.percentage}%`}}),r.jsx("div",{className:"gauge-segment warning",style:{width:`${I.medium.percentage}%`}}),r.jsx("div",{className:"gauge-segment low",style:{width:`${I.low.percentage}%`}})]}),r.jsxs("div",{className:"gauge-legend",children:[r.jsxs("span",{className:"legend-item critical",children:["🔴 ",I.high.value," ",t("severity.critical")||"Critical"]}),r.jsxs("span",{className:"legend-item warning",children:["🟠 ",I.medium.value," ",t("severity.medium")||"Medium"]}),r.jsxs("span",{className:"legend-item low",children:["🟢 ",I.low.value," ",t("severity.low")||"Low"]})]})]})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("div",{className:"summary-icon",children:"⏱️"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.duration")}),r.jsx("p",{className:"summary-value small",children:o.duration})]})]})]}),o.anomalies.length===0?r.jsxs("div",{className:"empty-state success",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("ueba.noAnomalies")}),r.jsx("p",{children:t("ueba.noAnomaliesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):r.jsxs("div",{className:"anomalies-list",children:[r.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",o.anomalies.length,")"]}),r.jsx("div",{className:"anomaly-timeline",children:o.anomalies.map((C,O)=>{const H=z(C.type);return r.jsxs("div",{className:`anomaly-item ${j===O?"expanded":""}`,onClick:()=>N(j===O?null:O),children:[r.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:H.color}}),r.jsx("div",{className:"anomaly-icon",children:H.icon}),r.jsxs("div",{className:"anomaly-content",children:[r.jsxs("div",{className:"anomaly-header",children:[r.jsx("span",{className:"anomaly-type",children:C.type.replace(/_/g," ")}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:S(C.severity)},children:A(C.severity)})]}),C.user&&r.jsxs("div",{className:"anomaly-user",children:["👤 ",r.jsx("span",{children:C.user})]}),r.jsx("p",{className:"anomaly-description",children:C.description}),r.jsxs("div",{className:"anomaly-meta",children:[r.jsxs("span",{className:"anomaly-score",children:["Score: ",r.jsx("strong",{children:C.score.toFixed(2)})]}),C.event_ids&&C.event_ids.length>0&&r.jsxs("span",{className:"anomaly-events",children:[C.event_ids.length," related events"]})]})]}),j===O&&r.jsxs("div",{className:"anomaly-expanded",children:[C.details&&Object.keys(C.details).length>0&&r.jsxs("div",{className:"anomaly-details-section",children:[r.jsx("h5",{children:t("ueba.details")}),r.jsx("div",{className:"details-grid",children:Object.entries(C.details).map(([X,F])=>r.jsxs("div",{className:"detail-item",children:[r.jsxs("span",{className:"detail-key",children:[X,":"]}),r.jsx("span",{className:"detail-value",children:String(F)})]},X))})]}),r.jsxs("div",{className:"anomaly-actions",children:[r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/events",{state:{user:C.user}})},children:"📊 View Events"}),r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},O)})})]})]})]}),h==="profiles"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"profiles-header",children:[r.jsx("h3",{children:t("ueba.userProfiles")}),r.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),n?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"btn-spinner"}),r.jsx("span",{children:"Loading profiles..."})]}):c.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"👥"}),r.jsx("h3",{children:t("ueba.noProfiles")}),r.jsx("p",{children:t("ueba.noProfilesDesc")}),r.jsxs("div",{className:"empty-hint",children:[r.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),r.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),b()},children:"🔍 Run Analysis"})]})]}):r.jsx("div",{className:"profiles-grid",children:c.map((C,O)=>r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsx("div",{className:"profile-avatar",children:r.jsx("span",{className:"avatar-icon",children:"👤"})}),r.jsxs("div",{className:"profile-info",children:[r.jsx("h4",{children:C.user}),r.jsxs("p",{className:"profile-meta",children:["Last updated: ",L(C.last_updated)]})]}),C.risk_score!==void 0&&r.jsx("div",{className:`risk-indicator ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,children:C.risk_score.toFixed(0)})]}),r.jsxs("div",{className:"profile-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),r.jsx("span",{className:"stat-value",children:C.login_count})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),r.jsx("span",{className:"stat-value",children:C.avg_events_per_day.toFixed(1)})]})]}),C.risk_score!==void 0&&r.jsxs("div",{className:"profile-risk-bar",children:[r.jsx("div",{className:"risk-bar-track",children:r.jsx("div",{className:`risk-bar-fill ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,style:{width:`${C.risk_score}%`}})}),r.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},O))})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("ueba.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}function Uk(){const{t}=ct(),[e,n]=E.useState([]),[i,o]=E.useState(!1),[l,c]=E.useState(""),[u,h]=E.useState(!1),[p,g]=E.useState({name:"",duration:60,scope:"global",expires_at:""});E.useEffect(()=>{v()},[]);const v=async()=>{o(!0),c("");try{const S=(await ro.list()).data;n(S.rules||[])}catch(k){c(k.message||"Failed to load suppress rules")}finally{o(!1)}},y=async()=>{o(!0),c("");try{await ro.create({name:p.name,duration:p.duration,scope:p.scope,expires_at:p.expires_at,conditions:[],enabled:!0}),h(!1),g({name:"",duration:60,scope:"global",expires_at:""}),v()}catch(k){c(k.message||"Failed to create rule")}finally{o(!1)}},w=async k=>{if(confirm(t("suppress.confirmDelete"))){o(!0),c("");try{await ro.delete(k),v()}catch(S){c(S.message||"Failed to delete rule")}finally{o(!1)}}},j=async(k,S)=>{o(!0),c("");try{await ro.toggle(k,!S),v()}catch(A){c(A.message||"Failed to toggle rule")}finally{o(!1)}},N=k=>({global:t("suppress.scopeGlobal"),user:t("suppress.scopeUser"),computer:t("suppress.scopeComputer")})[k]||k,b=k=>k<60?`${k}m`:k<1440?`${Math.floor(k/60)}h`:`${Math.floor(k/1440)}d`;return r.jsxs("div",{className:"suppress-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("suppress.title")}),r.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),r.jsx("div",{className:"suppress-toolbar",children:r.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),l&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:l})]}),i&&e.length===0?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"spinner"}),r.jsx("span",{children:t("common.loading")})]}):e.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("h3",{children:t("suppress.noRules")}),r.jsx("p",{children:t("suppress.noRulesDesc")})]}):r.jsx("div",{className:"rules-list",children:r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("suppress.name")}),r.jsx("th",{children:t("suppress.scope")}),r.jsx("th",{children:t("suppress.duration")}),r.jsx("th",{children:t("suppress.expiresAt")}),r.jsx("th",{children:t("suppress.status")}),r.jsx("th",{children:t("suppress.actions")})]})}),r.jsx("tbody",{children:e.map(k=>r.jsxs("tr",{className:k.enabled?"":"disabled",children:[r.jsx("td",{className:"name-cell",children:r.jsx("span",{className:"rule-name",children:k.name})}),r.jsx("td",{children:r.jsx("span",{className:"scope-badge",children:N(k.scope)})}),r.jsx("td",{children:b(k.duration)}),r.jsx("td",{children:k.expires_at?new Date(k.expires_at).toLocaleString():"-"}),r.jsx("td",{children:r.jsx("button",{className:`toggle-btn ${k.enabled?"enabled":"disabled"}`,onClick:()=>j(k.id,k.enabled),children:k.enabled?t("suppress.enabled"):t("suppress.disabled")})}),r.jsx("td",{children:r.jsx("div",{className:"action-buttons",children:r.jsx("button",{className:"btn-icon delete",onClick:()=>w(k.id),title:t("suppress.delete"),children:"🗑️"})})})]},k.id))})]})}),u&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal",onClick:k=>k.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("suppress.addRule")}),r.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"✕"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.name")}),r.jsx("input",{type:"text",value:p.name,onChange:k=>g({...p,name:k.target.value}),placeholder:t("suppress.namePlaceholder")})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.scope")}),r.jsxs("select",{value:p.scope,onChange:k=>g({...p,scope:k.target.value}),children:[r.jsx("option",{value:"global",children:t("suppress.scopeGlobal")}),r.jsx("option",{value:"user",children:t("suppress.scopeUser")}),r.jsx("option",{value:"computer",children:t("suppress.scopeComputer")})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.duration")}),r.jsxs("select",{value:p.duration,onChange:k=>g({...p,duration:parseInt(k.target.value)}),children:[r.jsx("option",{value:"60",children:"1 hour"}),r.jsx("option",{value:"360",children:"6 hours"}),r.jsx("option",{value:"1440",children:"24 hours"}),r.jsx("option",{value:"10080",children:"7 days"}),r.jsx("option",{value:"43200",children:"30 days"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.expiresAt")}),r.jsx("input",{type:"datetime-local",value:p.expires_at,onChange:k=>g({...p,expires_at:k.target.value})})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:y,disabled:!p.name||i,children:t("suppress.create")})]})]})}),r.jsxs("div",{className:"suppress-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("suppress.about")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("suppress.aboutDesc")})})]})]})}function Wk(){var z,R;const{t}=ct(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!1),[u,h]=E.useState(null),[p,g]=E.useState("all"),v=E.useRef(null),y=E.useRef(null);E.useEffect(()=>(w(),()=>{v.current&&v.current.close()}),[]),E.useEffect(()=>{y.current&&(y.current.scrollTop=0)},[e]);const w=()=>{h(null);const I=Ej.streamEvents(L=>{n(C=>{const O=[L,...C];return O.length>100&&O.pop(),O})},L=>{o({total_events:L.total_events||0,events_per_sec:L.events_per_sec||0,uptime:L.uptime||"0s",alerts:L.alerts||0})},L=>{console.error("Stream error:",L),c(!1),L.type==="error"&&h("Connection lost. Reconnecting...")});I.onopen=()=>{c(!0),h(null)},v.current=I},j=()=>{v.current&&(v.current.close(),v.current=null),c(!1)},N=()=>{j(),w()},b=()=>{n([])},k=I=>{switch(I==null?void 0:I.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},S=e.filter(I=>{var L;return p==="all"?!0:((L=I.level)==null?void 0:L.toLowerCase())===p}),A=I=>{try{return new Date(I).toLocaleTimeString()}catch{return I}};return r.jsxs("div",{className:"live-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("live.title")}),r.jsxs("div",{className:`connection-status ${l?"connected":"disconnected"}`,children:[r.jsx("span",{className:"status-dot"}),l?"Connected":"Disconnected"]})]}),r.jsxs("div",{className:"header-actions",children:[r.jsxs("select",{className:"filter-select",value:p,onChange:I=>g(I.target.value),children:[r.jsx("option",{value:"all",children:"All Levels"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"error",children:"Error"}),r.jsx("option",{value:"warning",children:"Warning"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"verbose",children:"Verbose"})]}),r.jsx("button",{className:"btn-secondary",onClick:b,children:"Clear"}),l?r.jsx("button",{className:"btn-danger",onClick:j,children:"Disconnect"}):r.jsx("button",{className:"btn-primary",onClick:N,children:"Connect"})]})]}),u&&r.jsx("div",{className:"error-banner",children:u}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:((z=i==null?void 0:i.total_events)==null?void 0:z.toLocaleString())||"0"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Events/sec"}),r.jsx("span",{className:"stat-value",children:((R=i==null?void 0:i.events_per_sec)==null?void 0:R.toFixed(2))||"0.00"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Alerts"}),r.jsx("span",{className:"stat-value alerts",children:(i==null?void 0:i.alerts)||0})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Uptime"}),r.jsx("span",{className:"stat-value mono",children:(i==null?void 0:i.uptime)||"0s"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Buffered"}),r.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),r.jsx("div",{className:"events-container",ref:y,children:S.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📡"}),r.jsx("div",{className:"empty-text",children:l?"Waiting for events...":"Click Connect to start monitoring"})]}):r.jsx("div",{className:"events-list",children:S.map((I,L)=>r.jsxs("div",{className:"event-card",style:{borderLeftColor:k(I.level)},children:[r.jsxs("div",{className:"event-header",children:[r.jsx("span",{className:"event-time",children:A(I.timestamp)}),r.jsx("span",{className:"event-level",style:{color:k(I.level)},children:I.level||"UNKNOWN"}),r.jsxs("span",{className:"event-id",children:["Event #",I.event_id]}),r.jsx("span",{className:"event-source",children:I.source||I.log_name})]}),r.jsx("div",{className:"event-body",children:r.jsx("div",{className:"event-message",children:I.message||"(No message)"})}),r.jsxs("div",{className:"event-footer",children:[r.jsx("span",{className:"event-computer",children:I.computer}),I.user&&r.jsx("span",{className:"event-user",children:I.user}),I.ip_address&&r.jsx("span",{className:"event-ip",children:I.ip_address})]})]},`${I.id}-${L}`))})}),r.jsx("style",{children:`
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
      `})]})}function $k(){const{t}=ct(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(2),[u,h]=E.useState(""),[p,g]=E.useState(""),[v,y]=E.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[w,j]=E.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[N,b]=E.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,compress:!0,calculateHash:!0}),k=C=>{y(O=>O.map(H=>H.id===C?{...H,enabled:!H.enabled}:H))},S=C=>{j(O=>O.map(H=>H.id===C?{...H,enabled:!H.enabled}:H))},A=C=>{b(O=>({...O,[C]:!O[C]}))},z=async()=>{n(!0),o(t("collect.starting"));const C=v.filter(O=>O.enabled).map(O=>O.name);try{const O=await Sj.collect({sources:C,options:{compress:N.compress,calculate_hash:N.calculateHash}});O.data.status==="completed"?o(`${t("collect.completed")}
${O.data.output_path}
Duration: ${O.data.duration}`):O.data.status==="error"?o(`${t("collect.failed")}: ${O.data.message}`):o(`${t("collect.collecting")}...
${t("collect.sources")}: ${C.join(", ")}`)}catch(O){o(`${t("collect.failed")}: ${O instanceof Error?O.message:"Unknown error"}`)}n(!1)},R=async()=>{var C;n(!0),o(t("collect.importing"));try{const O=u.split(`
`).map(X=>X.trim()).filter(X=>X.length>0);if(O.length===0){o(t("collect.noFilesSelected")),n(!1);return}const H=await Cj.importLogs(O);H.data.success?o(`${t("collect.importDone")}
Imported: ${H.data.files_imported}
Failed: ${H.data.files_failed}
Events: ${H.data.events_imported}`):o(`${t("collect.failed")}: ${((C=H.data.errors)==null?void 0:C.join(", "))||"Unknown error"}`)}catch(O){o(`${t("collect.failed")}: ${O instanceof Error?O.message:"Unknown error"}`)}n(!1)},I=v.reduce((C,O)=>(C[O.category]||(C[O.category]=[]),C[O.category].push(O),C),{}),L=w.reduce((C,O)=>(C[O.category]||(C[O.category]=[]),C[O.category].push(O),C),{});return r.jsxs("div",{className:"collect-page",children:[r.jsx("div",{className:"page-header",children:r.jsx("h2",{children:t("collect.title")})}),r.jsxs("div",{className:"collect-grid",children:[r.jsxs("div",{className:"collect-section main-options",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("collect.oneClickCollection")}),r.jsx("p",{children:t("collect.oneClickDesc")})]}),r.jsxs("div",{className:"options-group",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeSystemInfo,onChange:()=>A("includeSystemInfo")}),r.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeLogs,onChange:()=>A("includeLogs")}),r.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),r.jsxs("div",{className:"performance-section",children:[r.jsx("h4",{children:t("collect.performanceSettings")}),r.jsxs("div",{className:"performance-grid",children:[r.jsxs("div",{className:"performance-item",children:[r.jsx("label",{children:t("collect.threads")}),r.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(C=>r.jsx("button",{className:l===C?"active":"",onClick:()=>c(C),children:C},C))})]}),r.jsxs("div",{className:"performance-hint",children:[r.jsx("span",{className:"hint-icon",children:"💡"}),r.jsx("span",{children:t("collect.threadHint")})]})]})]}),r.jsxs("div",{className:"compression-options",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.compress,onChange:()=>A("compress")}),r.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.calculateHash,onChange:()=>A("calculateHash")}),r.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),r.jsxs("div",{className:"action-buttons",children:[r.jsx("button",{onClick:z,disabled:e,className:"btn-primary btn-collect",children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),r.jsx("button",{onClick:R,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[r.jsx("h3",{children:t("collect.logSources")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(I).map(([C,O])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:C}),O.map(H=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:H.enabled,onChange:()=>k(H.id)}),r.jsx("span",{className:"checkbox-text",children:H.name})]},H.id))]},C))]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.excludedLogs")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(L).map(([C,O])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),O.map(H=>r.jsxs("label",{className:"checkbox-label exclude",children:[r.jsx("input",{type:"checkbox",checked:H.enabled,onChange:()=>S(H.id)}),r.jsx("span",{className:"checkbox-text",children:H.name})]},H.id))]},C)),r.jsxs("div",{className:"custom-exclude",children:[r.jsx("label",{children:t("collect.customExclude")}),r.jsx("input",{type:"text",value:p,onChange:C=>g(C.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.customPaths")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),r.jsxs("div",{className:"custom-path-section",children:[r.jsx("label",{children:t("collect.customPathsLabel")}),r.jsx("textarea",{value:u,onChange:C=>h(C.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),r.jsxs("div",{className:"additional-options",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.additionalArtifacts")})}),r.jsxs("div",{className:"artifacts-grid",children:[r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includePrefetch,onChange:()=>A("includePrefetch")}),r.jsx("div",{className:"artifact-icon",children:"📁"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),r.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeShimcache,onChange:()=>A("includeShimcache")}),r.jsx("div",{className:"artifact-icon",children:"🔧"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeAmcache,onChange:()=>A("includeAmcache")}),r.jsx("div",{className:"artifact-icon",children:"📝"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeUserassist,onChange:()=>A("includeUserassist")}),r.jsx("div",{className:"artifact-icon",children:"🎯"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),r.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeRegistry,onChange:()=>A("includeRegistry")}),r.jsx("div",{className:"artifact-icon",children:"🗄️"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.registry")}),r.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeTasks,onChange:()=>A("includeTasks")}),r.jsx("div",{className:"artifact-icon",children:"📅"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),r.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),i&&r.jsxs("div",{className:"status-panel",children:[r.jsxs("div",{className:"status-header",children:[r.jsx("span",{className:"status-icon",children:"📊"}),r.jsx("span",{children:t("collect.status")}),r.jsx("button",{className:"status-close",onClick:()=>o(""),children:"×"})]}),r.jsx("pre",{className:"status-content",children:i})]}),r.jsxs("div",{className:"cli-reference",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.cliReference")})}),r.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${l}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function Hk(){const{t}=ct();return r.jsxs("nav",{className:"sidebar",children:[r.jsx("h1",{children:t("app.title")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(Xe,{to:"/",children:t("nav.dashboard")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/events",children:t("nav.events")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/alerts",children:t("nav.alerts")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/timeline",children:t("nav.timeline")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/collect",children:t("nav.collect")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/analyze",children:t("nav.analyze")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/correlation",children:t("nav.correlation")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/multi",children:t("nav.multi")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/query",children:t("nav.query")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/ueba",children:t("nav.ueba")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/suppress",children:t("nav.suppress")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/live",children:t("nav.live")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/persistence",children:t("nav.persistence")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/reports",children:t("nav.reports")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/forensics",children:t("nav.forensics")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/system-info",children:t("nav.systemInfo")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/rules",children:t("nav.rules")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/metrics",children:t("nav.metrics")})}),r.jsx("li",{children:r.jsx(Xe,{to:"/settings",children:t("nav.settings")})})]})]})}function Vk(){return r.jsxs(r.Fragment,{children:[r.jsx(V0,{}),r.jsx(Hk,{}),r.jsx("main",{className:"content",children:r.jsxs(R0,{children:[r.jsx(Ye,{path:"/",element:r.jsx(gk,{})}),r.jsx(Ye,{path:"/events",element:r.jsx(xk,{})}),r.jsx(Ye,{path:"/events/:id",element:r.jsx(vk,{})}),r.jsx(Ye,{path:"/alerts",element:r.jsx(yk,{})}),r.jsx(Ye,{path:"/alerts/:id",element:r.jsx(bk,{})}),r.jsx(Ye,{path:"/timeline",element:r.jsx(jk,{})}),r.jsx(Ye,{path:"/collect",element:r.jsx($k,{})}),r.jsx(Ye,{path:"/analyze",element:r.jsx(Tk,{})}),r.jsx(Ye,{path:"/correlation",element:r.jsx(Lk,{})}),r.jsx(Ye,{path:"/multi",element:r.jsx(Mk,{})}),r.jsx(Ye,{path:"/query",element:r.jsx(Ok,{})}),r.jsx(Ye,{path:"/ueba",element:r.jsx(Bk,{})}),r.jsx(Ye,{path:"/suppress",element:r.jsx(Uk,{})}),r.jsx(Ye,{path:"/live",element:r.jsx(Wk,{})}),r.jsx(Ye,{path:"/persistence",element:r.jsx(Ek,{})}),r.jsx(Ye,{path:"/reports",element:r.jsx(wk,{})}),r.jsx(Ye,{path:"/forensics",element:r.jsx(Nk,{})}),r.jsx(Ye,{path:"/system-info",element:r.jsx(_k,{})}),r.jsx(Ye,{path:"/rules",element:r.jsx(kk,{})}),r.jsx(Ye,{path:"/settings",element:r.jsx(Sk,{})}),r.jsx(Ye,{path:"/metrics",element:r.jsx(Ck,{})})]})})]})}function qk(){return r.jsx(H0,{children:r.jsx("div",{className:"app",children:r.jsx(Vk,{})})})}zy.createRoot(document.getElementById("root")).render(r.jsx(Vm.StrictMode,{children:r.jsx(O0,{children:r.jsx(qk,{})})}));
