var ky=Object.defineProperty;var Sy=(t,e,n)=>e in t?ky(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ge=(t,e,n)=>Sy(t,typeof e!="symbol"?e+"":e,n);function Cy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Vm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hc={exports:{}},gr={},Vc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Ey(){if(Uf)return Se;Uf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function b(M){return M===null||typeof M!="object"?null:(M=v&&M[v]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,N={};function y(M,Q,le){this.props=M,this.context=Q,this.refs=N,this.updater=le||w}y.prototype.isReactComponent={},y.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},y.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=y.prototype;function S(M,Q,le){this.props=M,this.context=Q,this.refs=N,this.updater=le||w}var A=S.prototype=new _;A.constructor=S,j(A,y.prototype),A.isPureReactComponent=!0;var z=Array.isArray,R=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function C(M,Q,le){var ve,ye={},be=null,Ae=null;if(Q!=null)for(ve in Q.ref!==void 0&&(Ae=Q.ref),Q.key!==void 0&&(be=""+Q.key),Q)R.call(Q,ve)&&!D.hasOwnProperty(ve)&&(ye[ve]=Q[ve]);var Pe=arguments.length-2;if(Pe===1)ye.children=le;else if(1<Pe){for(var Ie=Array(Pe),pt=0;pt<Pe;pt++)Ie[pt]=arguments[pt+2];ye.children=Ie}if(M&&M.defaultProps)for(ve in Pe=M.defaultProps,Pe)ye[ve]===void 0&&(ye[ve]=Pe[ve]);return{$$typeof:t,type:M,key:be,ref:Ae,props:ye,_owner:I.current}}function L(M,Q){return{$$typeof:t,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function V(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function X(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(le){return Q[le]})}var F=/\/+/g;function G(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?X(""+M.key):Q.toString(36)}function W(M,Q,le,ve,ye){var be=typeof M;(be==="undefined"||be==="boolean")&&(M=null);var Ae=!1;if(M===null)Ae=!0;else switch(be){case"string":case"number":Ae=!0;break;case"object":switch(M.$$typeof){case t:case e:Ae=!0}}if(Ae)return Ae=M,ye=ye(Ae),M=ve===""?"."+G(Ae,0):ve,z(ye)?(le="",M!=null&&(le=M.replace(F,"$&/")+"/"),W(ye,Q,le,"",function(pt){return pt})):ye!=null&&(V(ye)&&(ye=L(ye,le+(!ye.key||Ae&&Ae.key===ye.key?"":(""+ye.key).replace(F,"$&/")+"/")+M)),Q.push(ye)),1;if(Ae=0,ve=ve===""?".":ve+":",z(M))for(var Pe=0;Pe<M.length;Pe++){be=M[Pe];var Ie=ve+G(be,Pe);Ae+=W(be,Q,le,Ie,ye)}else if(Ie=b(M),typeof Ie=="function")for(M=Ie.call(M),Pe=0;!(be=M.next()).done;)be=be.value,Ie=ve+G(be,Pe++),Ae+=W(be,Q,le,Ie,ye);else if(be==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ae}function oe(M,Q,le){if(M==null)return M;var ve=[],ye=0;return W(M,ve,"","",function(be){return Q.call(le,be,ye++)}),ve}function U(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(le){(M._status===0||M._status===-1)&&(M._status=1,M._result=le)},function(le){(M._status===0||M._status===-1)&&(M._status=2,M._result=le)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var ie={current:null},K={transition:null},re={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:K,ReactCurrentOwner:I};function J(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:oe,forEach:function(M,Q,le){oe(M,function(){Q.apply(this,arguments)},le)},count:function(M){var Q=0;return oe(M,function(){Q++}),Q},toArray:function(M){return oe(M,function(Q){return Q})||[]},only:function(M){if(!V(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Se.Component=y,Se.Fragment=n,Se.Profiler=o,Se.PureComponent=S,Se.StrictMode=i,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Se.act=J,Se.cloneElement=function(M,Q,le){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var ve=j({},M.props),ye=M.key,be=M.ref,Ae=M._owner;if(Q!=null){if(Q.ref!==void 0&&(be=Q.ref,Ae=I.current),Q.key!==void 0&&(ye=""+Q.key),M.type&&M.type.defaultProps)var Pe=M.type.defaultProps;for(Ie in Q)R.call(Q,Ie)&&!D.hasOwnProperty(Ie)&&(ve[Ie]=Q[Ie]===void 0&&Pe!==void 0?Pe[Ie]:Q[Ie])}var Ie=arguments.length-2;if(Ie===1)ve.children=le;else if(1<Ie){Pe=Array(Ie);for(var pt=0;pt<Ie;pt++)Pe[pt]=arguments[pt+2];ve.children=Pe}return{$$typeof:t,type:M.type,key:ye,ref:be,props:ve,_owner:Ae}},Se.createContext=function(M){return M={$$typeof:c,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Se.createElement=C,Se.createFactory=function(M){var Q=C.bind(null,M);return Q.type=M,Q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(M){return{$$typeof:u,render:M}},Se.isValidElement=V,Se.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:U}},Se.memo=function(M,Q){return{$$typeof:p,type:M,compare:Q===void 0?null:Q}},Se.startTransition=function(M){var Q=K.transition;K.transition={};try{M()}finally{K.transition=Q}},Se.unstable_act=J,Se.useCallback=function(M,Q){return ie.current.useCallback(M,Q)},Se.useContext=function(M){return ie.current.useContext(M)},Se.useDebugValue=function(){},Se.useDeferredValue=function(M){return ie.current.useDeferredValue(M)},Se.useEffect=function(M,Q){return ie.current.useEffect(M,Q)},Se.useId=function(){return ie.current.useId()},Se.useImperativeHandle=function(M,Q,le){return ie.current.useImperativeHandle(M,Q,le)},Se.useInsertionEffect=function(M,Q){return ie.current.useInsertionEffect(M,Q)},Se.useLayoutEffect=function(M,Q){return ie.current.useLayoutEffect(M,Q)},Se.useMemo=function(M,Q){return ie.current.useMemo(M,Q)},Se.useReducer=function(M,Q,le){return ie.current.useReducer(M,Q,le)},Se.useRef=function(M){return ie.current.useRef(M)},Se.useState=function(M){return ie.current.useState(M)},Se.useSyncExternalStore=function(M,Q,le){return ie.current.useSyncExternalStore(M,Q,le)},Se.useTransition=function(){return ie.current.useTransition()},Se.version="18.3.1",Se}var Wf;function Dd(){return Wf||(Wf=1,Vc.exports=Ey()),Vc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Ry(){if(Hf)return gr;Hf=1;var t=Dd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var g,v={},b=null,w=null;p!==void 0&&(b=""+p),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(w=h.ref);for(g in h)i.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:u,key:b,ref:w,props:v,_owner:o.current}}return gr.Fragment=n,gr.jsx=c,gr.jsxs=c,gr}var Vf;function Py(){return Vf||(Vf=1,Hc.exports=Ry()),Hc.exports}var r=Py(),E=Dd();const qm=Vm(E),Ay=Cy({__proto__:null,default:qm},[E]);var oo={},qc={exports:{}},Mt={},Yc={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Ty(){return qf||(qf=1,(function(t){function e(K,re){var J=K.length;K.push(re);e:for(;0<J;){var M=J-1>>>1,Q=K[M];if(0<o(Q,re))K[M]=re,K[J]=Q,J=M;else break e}}function n(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var re=K[0],J=K.pop();if(J!==re){K[0]=J;e:for(var M=0,Q=K.length,le=Q>>>1;M<le;){var ve=2*(M+1)-1,ye=K[ve],be=ve+1,Ae=K[be];if(0>o(ye,J))be<Q&&0>o(Ae,ye)?(K[M]=Ae,K[be]=J,M=be):(K[M]=ye,K[ve]=J,M=ve);else if(be<Q&&0>o(Ae,J))K[M]=Ae,K[be]=J,M=be;else break e}}return re}function o(K,re){var J=K.sortIndex-re.sortIndex;return J!==0?J:K.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],g=1,v=null,b=3,w=!1,j=!1,N=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(K){for(var re=n(p);re!==null;){if(re.callback===null)i(p);else if(re.startTime<=K)i(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(p)}}function z(K){if(N=!1,A(K),!j)if(n(h)!==null)j=!0,U(R);else{var re=n(p);re!==null&&ie(z,re.startTime-K)}}function R(K,re){j=!1,N&&(N=!1,_(C),C=-1),w=!0;var J=b;try{for(A(re),v=n(h);v!==null&&(!(v.expirationTime>re)||K&&!X());){var M=v.callback;if(typeof M=="function"){v.callback=null,b=v.priorityLevel;var Q=M(v.expirationTime<=re);re=t.unstable_now(),typeof Q=="function"?v.callback=Q:v===n(h)&&i(h),A(re)}else i(h);v=n(h)}if(v!==null)var le=!0;else{var ve=n(p);ve!==null&&ie(z,ve.startTime-re),le=!1}return le}finally{v=null,b=J,w=!1}}var I=!1,D=null,C=-1,L=5,V=-1;function X(){return!(t.unstable_now()-V<L)}function F(){if(D!==null){var K=t.unstable_now();V=K;var re=!0;try{re=D(!0,K)}finally{re?G():(I=!1,D=null)}}else I=!1}var G;if(typeof S=="function")G=function(){S(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,oe=W.port2;W.port1.onmessage=F,G=function(){oe.postMessage(null)}}else G=function(){y(F,0)};function U(K){D=K,I||(I=!0,G())}function ie(K,re){C=y(function(){K(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){j||w||(j=!0,U(R))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(K){switch(b){case 1:case 2:case 3:var re=3;break;default:re=b}var J=b;b=re;try{return K()}finally{b=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,re){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var J=b;b=K;try{return re()}finally{b=J}},t.unstable_scheduleCallback=function(K,re,J){var M=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?M+J:M):J=M,K){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=J+Q,K={id:g++,callback:re,priorityLevel:K,startTime:J,expirationTime:Q,sortIndex:-1},J>M?(K.sortIndex=J,e(p,K),n(h)===null&&K===n(p)&&(N?(_(C),C=-1):N=!0,ie(z,J-M))):(K.sortIndex=Q,e(h,K),j||w||(j=!0,U(R))),K},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(K){var re=b;return function(){var J=b;b=re;try{return K.apply(this,arguments)}finally{b=J}}}})(Qc)),Qc}var Yf;function Dy(){return Yf||(Yf=1,Yc.exports=Ty()),Yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function My(){if(Qf)return Mt;Qf=1;var t=Dd(),e=Dy();function n(s){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+s,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+s+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(s,a){c(s,a),c(s+"Capture",a)}function c(s,a){for(o[s]=a,s=0;s<a.length;s++)i.add(a[s])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function b(s){return h.call(v,s)?!0:h.call(g,s)?!1:p.test(s)?v[s]=!0:(g[s]=!0,!1)}function w(s,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function j(s,a,d,f){if(a===null||typeof a>"u"||w(s,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function N(s,a,d,f,m,x,k){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=d,this.propertyName=s,this.type=a,this.sanitizeURL=x,this.removeEmptyString=k}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){y[s]=new N(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var a=s[0];y[a]=new N(a,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){y[s]=new N(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){y[s]=new N(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){y[s]=new N(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){y[s]=new N(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){y[s]=new N(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){y[s]=new N(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){y[s]=new N(s,5,!1,s.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function S(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var a=s.replace(_,S);y[a]=new N(a,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){y[s]=new N(s,1,!1,s.toLowerCase(),null,!1,!1)}),y.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){y[s]=new N(s,1,!1,s.toLowerCase(),null,!0,!0)});function A(s,a,d,f){var m=y.hasOwnProperty(a)?y[a]:null;(m!==null?m.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(j(a,d,m,f)&&(d=null),f||m===null?b(a)&&(d===null?s.removeAttribute(a):s.setAttribute(a,""+d)):m.mustUseProperty?s[m.propertyName]=d===null?m.type===3?!1:"":d:(a=m.attributeName,f=m.attributeNamespace,d===null?s.removeAttribute(a):(m=m.type,d=m===3||m===4&&d===!0?"":""+d,f?s.setAttributeNS(f,a,d):s.setAttribute(a,d))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),X=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),K=Symbol.iterator;function re(s){return s===null||typeof s!="object"?null:(s=K&&s[K]||s["@@iterator"],typeof s=="function"?s:null)}var J=Object.assign,M;function Q(s){if(M===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);M=a&&a[1]||""}return`
`+M+s}var le=!1;function ve(s,a){if(!s||le)return"";le=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(H){var f=H}Reflect.construct(s,[],a)}else{try{a.call()}catch(H){f=H}s.call(a.prototype)}else{try{throw Error()}catch(H){f=H}s()}}catch(H){if(H&&f&&typeof H.stack=="string"){for(var m=H.stack.split(`
`),x=f.stack.split(`
`),k=m.length-1,P=x.length-1;1<=k&&0<=P&&m[k]!==x[P];)P--;for(;1<=k&&0<=P;k--,P--)if(m[k]!==x[P]){if(k!==1||P!==1)do if(k--,P--,0>P||m[k]!==x[P]){var T=`
`+m[k].replace(" at new "," at ");return s.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",s.displayName)),T}while(1<=k&&0<=P);break}}}finally{le=!1,Error.prepareStackTrace=d}return(s=s?s.displayName||s.name:"")?Q(s):""}function ye(s){switch(s.tag){case 5:return Q(s.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return s=ve(s.type,!1),s;case 11:return s=ve(s.type.render,!1),s;case 1:return s=ve(s.type,!0),s;default:return""}}function be(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case D:return"Fragment";case I:return"Portal";case L:return"Profiler";case C:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case X:return(s.displayName||"Context")+".Consumer";case V:return(s._context.displayName||"Context")+".Provider";case F:var a=s.render;return s=s.displayName,s||(s=a.displayName||a.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case oe:return a=s.displayName||null,a!==null?a:be(s.type)||"Memo";case U:a=s._payload,s=s._init;try{return be(s(a))}catch{}}return null}function Ae(s){var a=s.type;switch(s.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=a.render,s=s.displayName||s.name||"",a.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(a);case 8:return a===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Pe(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Ie(s){var a=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function pt(s){var a=Ie(s)?"checked":"value",d=Object.getOwnPropertyDescriptor(s.constructor.prototype,a),f=""+s[a];if(!s.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var m=d.get,x=d.set;return Object.defineProperty(s,a,{configurable:!0,get:function(){return m.call(this)},set:function(k){f=""+k,x.call(this,k)}}),Object.defineProperty(s,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(k){f=""+k},stopTracking:function(){s._valueTracker=null,delete s[a]}}}}function Wn(s){s._valueTracker||(s._valueTracker=pt(s))}function nn(s){if(!s)return!1;var a=s._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return s&&(f=Ie(s)?s.checked?"true":"false":s.value),s=f,s!==d?(a.setValue(s),!0):!1}function me(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Ht(s,a){var d=a.checked;return J({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??s._wrapperState.initialChecked})}function Zs(s,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=Pe(a.value!=null?a.value:d),s._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Hn(s,a){a=a.checked,a!=null&&A(s,"checked",a,!1)}function kn(s,a){Hn(s,a);var d=Pe(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&s.value===""||s.value!=d)&&(s.value=""+d):s.value!==""+d&&(s.value=""+d);else if(f==="submit"||f==="reset"){s.removeAttribute("value");return}a.hasOwnProperty("value")?Vn(s,a.type,d):a.hasOwnProperty("defaultValue")&&Vn(s,a.type,Pe(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(s.defaultChecked=!!a.defaultChecked)}function bs(s,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+s._wrapperState.initialValue,d||a===s.value||(s.value=a),s.defaultValue=a}d=s.name,d!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,d!==""&&(s.name=d)}function Vn(s,a,d){(a!=="number"||me(s.ownerDocument)!==s)&&(d==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+d&&(s.defaultValue=""+d))}var Y=Array.isArray;function fe(s,a,d,f){if(s=s.options,a){a={};for(var m=0;m<d.length;m++)a["$"+d[m]]=!0;for(d=0;d<s.length;d++)m=a.hasOwnProperty("$"+s[d].value),s[d].selected!==m&&(s[d].selected=m),m&&f&&(s[d].defaultSelected=!0)}else{for(d=""+Pe(d),a=null,m=0;m<s.length;m++){if(s[m].value===d){s[m].selected=!0,f&&(s[m].defaultSelected=!0);return}a!==null||s[m].disabled||(a=s[m])}a!==null&&(a.selected=!0)}}function Ee(s,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return J({},a,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Vt(s,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(n(92));if(Y(d)){if(1<d.length)throw Error(n(93));d=d[0]}a=d}a==null&&(a=""),d=a}s._wrapperState={initialValue:Pe(d)}}function St(s,a){var d=Pe(a.value),f=Pe(a.defaultValue);d!=null&&(d=""+d,d!==s.value&&(s.value=d),a.defaultValue==null&&s.defaultValue!==d&&(s.defaultValue=d)),f!=null&&(s.defaultValue=""+f)}function te(s){var a=s.textContent;a===s._wrapperState.initialValue&&a!==""&&a!==null&&(s.value=a)}function ae(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(s,a){return s==null||s==="http://www.w3.org/1999/xhtml"?ae(a):s==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Fe,Ke=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,m){MSApp.execUnsafeLocalFunction(function(){return s(a,d,f,m)})}:s})(function(s,a){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=a;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Fe.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;a.firstChild;)s.appendChild(a.firstChild)}});function Je(s,a){if(a){var d=s.firstChild;if(d&&d===s.lastChild&&d.nodeType===3){d.nodeValue=a;return}}s.textContent=a}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(s){$e.forEach(function(a){a=a+s.charAt(0).toUpperCase()+s.substring(1),js[a]=js[s]})});function sn(s,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||js.hasOwnProperty(s)&&js[s]?(""+a).trim():a+"px"}function Zr(s,a){s=s.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,m=sn(d,a[d],f);d==="float"&&(d="cssFloat"),f?s.setProperty(d,m):s[d]=m}}var Px=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(s,a){if(a){if(Px[s]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function sl(s,a){if(s.indexOf("-")===-1)return typeof a.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function rl(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var al=null,ei=null,ti=null;function iu(s){if(s=tr(s)){if(typeof al!="function")throw Error(n(280));var a=s.stateNode;a&&(a=wa(a),al(s.stateNode,s.type,a))}}function ru(s){ei?ti?ti.push(s):ti=[s]:ei=s}function au(){if(ei){var s=ei,a=ti;if(ti=ei=null,iu(s),a)for(s=0;s<a.length;s++)iu(a[s])}}function ou(s,a){return s(a)}function lu(){}var ol=!1;function cu(s,a,d){if(ol)return s(a,d);ol=!0;try{return ou(s,a,d)}finally{ol=!1,(ei!==null||ti!==null)&&(lu(),au())}}function Mi(s,a){var d=s.stateNode;if(d===null)return null;var f=wa(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(d&&typeof d!="function")throw Error(n(231,a,typeof d));return d}var ll=!1;if(u)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){ll=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{ll=!1}function Ax(s,a,d,f,m,x,k,P,T){var H=Array.prototype.slice.call(arguments,3);try{a.apply(d,H)}catch(ee){this.onError(ee)}}var Oi=!1,ea=null,ta=!1,cl=null,Tx={onError:function(s){Oi=!0,ea=s}};function Dx(s,a,d,f,m,x,k,P,T){Oi=!1,ea=null,Ax.apply(Tx,arguments)}function Mx(s,a,d,f,m,x,k,P,T){if(Dx.apply(this,arguments),Oi){if(Oi){var H=ea;Oi=!1,ea=null}else throw Error(n(198));ta||(ta=!0,cl=H)}}function ws(s){var a=s,d=s;if(s.alternate)for(;a.return;)a=a.return;else{s=a;do a=s,(a.flags&4098)!==0&&(d=a.return),s=a.return;while(s)}return a.tag===3?d:null}function du(s){if(s.tag===13){var a=s.memoizedState;if(a===null&&(s=s.alternate,s!==null&&(a=s.memoizedState)),a!==null)return a.dehydrated}return null}function uu(s){if(ws(s)!==s)throw Error(n(188))}function Lx(s){var a=s.alternate;if(!a){if(a=ws(s),a===null)throw Error(n(188));return a!==s?null:s}for(var d=s,f=a;;){var m=d.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){d=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===d)return uu(m),s;if(x===f)return uu(m),a;x=x.sibling}throw Error(n(188))}if(d.return!==f.return)d=m,f=x;else{for(var k=!1,P=m.child;P;){if(P===d){k=!0,d=m,f=x;break}if(P===f){k=!0,f=m,d=x;break}P=P.sibling}if(!k){for(P=x.child;P;){if(P===d){k=!0,d=x,f=m;break}if(P===f){k=!0,f=x,d=m;break}P=P.sibling}if(!k)throw Error(n(189))}}if(d.alternate!==f)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?s:a}function hu(s){return s=Lx(s),s!==null?fu(s):null}function fu(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var a=fu(s);if(a!==null)return a;s=s.sibling}return null}var pu=e.unstable_scheduleCallback,mu=e.unstable_cancelCallback,Ox=e.unstable_shouldYield,zx=e.unstable_requestPaint,Ze=e.unstable_now,Ix=e.unstable_getCurrentPriorityLevel,dl=e.unstable_ImmediatePriority,gu=e.unstable_UserBlockingPriority,na=e.unstable_NormalPriority,Fx=e.unstable_LowPriority,xu=e.unstable_IdlePriority,sa=null,mn=null;function Bx(s){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(sa,s,void 0,(s.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Wx,$x=Math.log,Ux=Math.LN2;function Wx(s){return s>>>=0,s===0?32:31-($x(s)/Ux|0)|0}var ia=64,ra=4194304;function zi(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function aa(s,a){var d=s.pendingLanes;if(d===0)return 0;var f=0,m=s.suspendedLanes,x=s.pingedLanes,k=d&268435455;if(k!==0){var P=k&~m;P!==0?f=zi(P):(x&=k,x!==0&&(f=zi(x)))}else k=d&~m,k!==0?f=zi(k):x!==0&&(f=zi(x));if(f===0)return 0;if(a!==0&&a!==f&&(a&m)===0&&(m=f&-f,x=a&-a,m>=x||m===16&&(x&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=s.entangledLanes,a!==0)for(s=s.entanglements,a&=f;0<a;)d=31-rn(a),m=1<<d,f|=s[d],a&=~m;return f}function Hx(s,a){switch(s){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vx(s,a){for(var d=s.suspendedLanes,f=s.pingedLanes,m=s.expirationTimes,x=s.pendingLanes;0<x;){var k=31-rn(x),P=1<<k,T=m[k];T===-1?((P&d)===0||(P&f)!==0)&&(m[k]=Hx(P,a)):T<=a&&(s.expiredLanes|=P),x&=~P}}function ul(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function vu(){var s=ia;return ia<<=1,(ia&4194240)===0&&(ia=64),s}function hl(s){for(var a=[],d=0;31>d;d++)a.push(s);return a}function Ii(s,a,d){s.pendingLanes|=a,a!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,a=31-rn(a),s[a]=d}function qx(s,a){var d=s.pendingLanes&~a;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=a,s.mutableReadLanes&=a,s.entangledLanes&=a,a=s.entanglements;var f=s.eventTimes;for(s=s.expirationTimes;0<d;){var m=31-rn(d),x=1<<m;a[m]=0,f[m]=-1,s[m]=-1,d&=~x}}function fl(s,a){var d=s.entangledLanes|=a;for(s=s.entanglements;d;){var f=31-rn(d),m=1<<f;m&a|s[f]&a&&(s[f]|=a),d&=~m}}var Le=0;function yu(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var bu,pl,ju,wu,Nu,ml=!1,oa=[],qn=null,Yn=null,Qn=null,Fi=new Map,Bi=new Map,Kn=[],Yx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(s,a){switch(s){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Fi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(a.pointerId)}}function $i(s,a,d,f,m,x){return s===null||s.nativeEvent!==x?(s={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},a!==null&&(a=tr(a),a!==null&&pl(a)),s):(s.eventSystemFlags|=f,a=s.targetContainers,m!==null&&a.indexOf(m)===-1&&a.push(m),s)}function Qx(s,a,d,f,m){switch(a){case"focusin":return qn=$i(qn,s,a,d,f,m),!0;case"dragenter":return Yn=$i(Yn,s,a,d,f,m),!0;case"mouseover":return Qn=$i(Qn,s,a,d,f,m),!0;case"pointerover":var x=m.pointerId;return Fi.set(x,$i(Fi.get(x)||null,s,a,d,f,m)),!0;case"gotpointercapture":return x=m.pointerId,Bi.set(x,$i(Bi.get(x)||null,s,a,d,f,m)),!0}return!1}function ku(s){var a=Ns(s.target);if(a!==null){var d=ws(a);if(d!==null){if(a=d.tag,a===13){if(a=du(d),a!==null){s.blockedOn=a,Nu(s.priority,function(){ju(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){s.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}s.blockedOn=null}function la(s){if(s.blockedOn!==null)return!1;for(var a=s.targetContainers;0<a.length;){var d=xl(s.domEventName,s.eventSystemFlags,a[0],s.nativeEvent);if(d===null){d=s.nativeEvent;var f=new d.constructor(d.type,d);il=f,d.target.dispatchEvent(f),il=null}else return a=tr(d),a!==null&&pl(a),s.blockedOn=d,!1;a.shift()}return!0}function Su(s,a,d){la(s)&&d.delete(a)}function Kx(){ml=!1,qn!==null&&la(qn)&&(qn=null),Yn!==null&&la(Yn)&&(Yn=null),Qn!==null&&la(Qn)&&(Qn=null),Fi.forEach(Su),Bi.forEach(Su)}function Ui(s,a){s.blockedOn===a&&(s.blockedOn=null,ml||(ml=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kx)))}function Wi(s){function a(m){return Ui(m,s)}if(0<oa.length){Ui(oa[0],s);for(var d=1;d<oa.length;d++){var f=oa[d];f.blockedOn===s&&(f.blockedOn=null)}}for(qn!==null&&Ui(qn,s),Yn!==null&&Ui(Yn,s),Qn!==null&&Ui(Qn,s),Fi.forEach(a),Bi.forEach(a),d=0;d<Kn.length;d++)f=Kn[d],f.blockedOn===s&&(f.blockedOn=null);for(;0<Kn.length&&(d=Kn[0],d.blockedOn===null);)ku(d),d.blockedOn===null&&Kn.shift()}var ni=z.ReactCurrentBatchConfig,ca=!0;function Xx(s,a,d,f){var m=Le,x=ni.transition;ni.transition=null;try{Le=1,gl(s,a,d,f)}finally{Le=m,ni.transition=x}}function Gx(s,a,d,f){var m=Le,x=ni.transition;ni.transition=null;try{Le=4,gl(s,a,d,f)}finally{Le=m,ni.transition=x}}function gl(s,a,d,f){if(ca){var m=xl(s,a,d,f);if(m===null)Ml(s,a,f,da,d),_u(s,f);else if(Qx(m,s,a,d,f))f.stopPropagation();else if(_u(s,f),a&4&&-1<Yx.indexOf(s)){for(;m!==null;){var x=tr(m);if(x!==null&&bu(x),x=xl(s,a,d,f),x===null&&Ml(s,a,f,da,d),x===m)break;m=x}m!==null&&f.stopPropagation()}else Ml(s,a,f,null,d)}}var da=null;function xl(s,a,d,f){if(da=null,s=rl(f),s=Ns(s),s!==null)if(a=ws(s),a===null)s=null;else if(d=a.tag,d===13){if(s=du(a),s!==null)return s;s=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;s=null}else a!==s&&(s=null);return da=s,null}function Cu(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ix()){case dl:return 1;case gu:return 4;case na:case Fx:return 16;case xu:return 536870912;default:return 16}default:return 16}}var Xn=null,vl=null,ua=null;function Eu(){if(ua)return ua;var s,a=vl,d=a.length,f,m="value"in Xn?Xn.value:Xn.textContent,x=m.length;for(s=0;s<d&&a[s]===m[s];s++);var k=d-s;for(f=1;f<=k&&a[d-f]===m[x-f];f++);return ua=m.slice(s,1<f?1-f:void 0)}function ha(s){var a=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&a===13&&(s=13)):s=a,s===10&&(s=13),32<=s||s===13?s:0}function fa(){return!0}function Ru(){return!1}function Ft(s){function a(d,f,m,x,k){this._reactName=d,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var P in s)s.hasOwnProperty(P)&&(d=s[P],this[P]=d?d(x):x[P]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?fa:Ru,this.isPropagationStopped=Ru,this}return J(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),a}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ft(si),Hi=J({},si,{view:0,detail:0}),Jx=Ft(Hi),bl,jl,Vi,pa=J({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Vi&&(Vi&&s.type==="mousemove"?(bl=s.screenX-Vi.screenX,jl=s.screenY-Vi.screenY):jl=bl=0,Vi=s),bl)},movementY:function(s){return"movementY"in s?s.movementY:jl}}),Pu=Ft(pa),Zx=J({},pa,{dataTransfer:0}),ev=Ft(Zx),tv=J({},Hi,{relatedTarget:0}),wl=Ft(tv),nv=J({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=Ft(nv),iv=J({},si,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),rv=Ft(iv),av=J({},si,{data:0}),Au=Ft(av),ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(s){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(s):(s=cv[s])?!!a[s]:!1}function Nl(){return dv}var uv=J({},Hi,{key:function(s){if(s.key){var a=ov[s.key]||s.key;if(a!=="Unidentified")return a}return s.type==="keypress"?(s=ha(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?lv[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(s){return s.type==="keypress"?ha(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?ha(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),hv=Ft(uv),fv=J({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Ft(fv),pv=J({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),mv=Ft(pv),gv=J({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),xv=Ft(gv),vv=J({},pa,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),yv=Ft(vv),bv=[9,13,27,32],_l=u&&"CompositionEvent"in window,qi=null;u&&"documentMode"in document&&(qi=document.documentMode);var jv=u&&"TextEvent"in window&&!qi,Du=u&&(!_l||qi&&8<qi&&11>=qi),Mu=" ",Lu=!1;function Ou(s,a){switch(s){case"keyup":return bv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ii=!1;function wv(s,a){switch(s){case"compositionend":return zu(a);case"keypress":return a.which!==32?null:(Lu=!0,Mu);case"textInput":return s=a.data,s===Mu&&Lu?null:s;default:return null}}function Nv(s,a){if(ii)return s==="compositionend"||!_l&&Ou(s,a)?(s=Eu(),ua=vl=Xn=null,ii=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Du&&a.locale!=="ko"?null:a.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iu(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a==="input"?!!_v[s.type]:a==="textarea"}function Fu(s,a,d,f){ru(f),a=ya(a,"onChange"),0<a.length&&(d=new yl("onChange","change",null,d,f),s.push({event:d,listeners:a}))}var Yi=null,Qi=null;function kv(s){sh(s,0)}function ma(s){var a=ci(s);if(nn(a))return s}function Sv(s,a){if(s==="change")return a}var Bu=!1;if(u){var kl;if(u){var Sl="oninput"in document;if(!Sl){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Sl=typeof $u.oninput=="function"}kl=Sl}else kl=!1;Bu=kl&&(!document.documentMode||9<document.documentMode)}function Uu(){Yi&&(Yi.detachEvent("onpropertychange",Wu),Qi=Yi=null)}function Wu(s){if(s.propertyName==="value"&&ma(Qi)){var a=[];Fu(a,Qi,s,rl(s)),cu(kv,a)}}function Cv(s,a,d){s==="focusin"?(Uu(),Yi=a,Qi=d,Yi.attachEvent("onpropertychange",Wu)):s==="focusout"&&Uu()}function Ev(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return ma(Qi)}function Rv(s,a){if(s==="click")return ma(a)}function Pv(s,a){if(s==="input"||s==="change")return ma(a)}function Av(s,a){return s===a&&(s!==0||1/s===1/a)||s!==s&&a!==a}var an=typeof Object.is=="function"?Object.is:Av;function Ki(s,a){if(an(s,a))return!0;if(typeof s!="object"||s===null||typeof a!="object"||a===null)return!1;var d=Object.keys(s),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var m=d[f];if(!h.call(a,m)||!an(s[m],a[m]))return!1}return!0}function Hu(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function Vu(s,a){var d=Hu(s);s=0;for(var f;d;){if(d.nodeType===3){if(f=s+d.textContent.length,s<=a&&f>=a)return{node:d,offset:a-s};s=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Hu(d)}}function qu(s,a){return s&&a?s===a?!0:s&&s.nodeType===3?!1:a&&a.nodeType===3?qu(s,a.parentNode):"contains"in s?s.contains(a):s.compareDocumentPosition?!!(s.compareDocumentPosition(a)&16):!1:!1}function Yu(){for(var s=window,a=me();a instanceof s.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)s=a.contentWindow;else break;a=me(s.document)}return a}function Cl(s){var a=s&&s.nodeName&&s.nodeName.toLowerCase();return a&&(a==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||a==="textarea"||s.contentEditable==="true")}function Tv(s){var a=Yu(),d=s.focusedElem,f=s.selectionRange;if(a!==d&&d&&d.ownerDocument&&qu(d.ownerDocument.documentElement,d)){if(f!==null&&Cl(d)){if(a=f.start,s=f.end,s===void 0&&(s=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(s,d.value.length);else if(s=(a=d.ownerDocument||document)&&a.defaultView||window,s.getSelection){s=s.getSelection();var m=d.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!s.extend&&x>f&&(m=f,f=x,x=m),m=Vu(d,x);var k=Vu(d,f);m&&k&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==k.node||s.focusOffset!==k.offset)&&(a=a.createRange(),a.setStart(m.node,m.offset),s.removeAllRanges(),x>f?(s.addRange(a),s.extend(k.node,k.offset)):(a.setEnd(k.node,k.offset),s.addRange(a)))}}for(a=[],s=d;s=s.parentNode;)s.nodeType===1&&a.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)s=a[d],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Dv=u&&"documentMode"in document&&11>=document.documentMode,ri=null,El=null,Xi=null,Rl=!1;function Qu(s,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Rl||ri==null||ri!==me(f)||(f=ri,"selectionStart"in f&&Cl(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xi&&Ki(Xi,f)||(Xi=f,f=ya(El,"onSelect"),0<f.length&&(a=new yl("onSelect","select",null,a,d),s.push({event:a,listeners:f}),a.target=ri)))}function ga(s,a){var d={};return d[s.toLowerCase()]=a.toLowerCase(),d["Webkit"+s]="webkit"+a,d["Moz"+s]="moz"+a,d}var ai={animationend:ga("Animation","AnimationEnd"),animationiteration:ga("Animation","AnimationIteration"),animationstart:ga("Animation","AnimationStart"),transitionend:ga("Transition","TransitionEnd")},Pl={},Ku={};u&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),"TransitionEvent"in window||delete ai.transitionend.transition);function xa(s){if(Pl[s])return Pl[s];if(!ai[s])return s;var a=ai[s],d;for(d in a)if(a.hasOwnProperty(d)&&d in Ku)return Pl[s]=a[d];return s}var Xu=xa("animationend"),Gu=xa("animationiteration"),Ju=xa("animationstart"),Zu=xa("transitionend"),eh=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(s,a){eh.set(s,a),l(a,[s])}for(var Al=0;Al<th.length;Al++){var Tl=th[Al],Mv=Tl.toLowerCase(),Lv=Tl[0].toUpperCase()+Tl.slice(1);Gn(Mv,"on"+Lv)}Gn(Xu,"onAnimationEnd"),Gn(Gu,"onAnimationIteration"),Gn(Ju,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(Zu,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function nh(s,a,d){var f=s.type||"unknown-event";s.currentTarget=d,Mx(f,a,void 0,s),s.currentTarget=null}function sh(s,a){a=(a&4)!==0;for(var d=0;d<s.length;d++){var f=s[d],m=f.event;f=f.listeners;e:{var x=void 0;if(a)for(var k=f.length-1;0<=k;k--){var P=f[k],T=P.instance,H=P.currentTarget;if(P=P.listener,T!==x&&m.isPropagationStopped())break e;nh(m,P,H),x=T}else for(k=0;k<f.length;k++){if(P=f[k],T=P.instance,H=P.currentTarget,P=P.listener,T!==x&&m.isPropagationStopped())break e;nh(m,P,H),x=T}}}if(ta)throw s=cl,ta=!1,cl=null,s}function Ue(s,a){var d=a[Bl];d===void 0&&(d=a[Bl]=new Set);var f=s+"__bubble";d.has(f)||(ih(a,s,2,!1),d.add(f))}function Dl(s,a,d){var f=0;a&&(f|=4),ih(d,s,f,a)}var va="_reactListening"+Math.random().toString(36).slice(2);function Ji(s){if(!s[va]){s[va]=!0,i.forEach(function(d){d!=="selectionchange"&&(Ov.has(d)||Dl(d,!1,s),Dl(d,!0,s))});var a=s.nodeType===9?s:s.ownerDocument;a===null||a[va]||(a[va]=!0,Dl("selectionchange",!1,a))}}function ih(s,a,d,f){switch(Cu(a)){case 1:var m=Xx;break;case 4:m=Gx;break;default:m=gl}d=m.bind(null,a,d,s),m=void 0,!ll||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(m=!0),f?m!==void 0?s.addEventListener(a,d,{capture:!0,passive:m}):s.addEventListener(a,d,!0):m!==void 0?s.addEventListener(a,d,{passive:m}):s.addEventListener(a,d,!1)}function Ml(s,a,d,f,m){var x=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var k=f.tag;if(k===3||k===4){var P=f.stateNode.containerInfo;if(P===m||P.nodeType===8&&P.parentNode===m)break;if(k===4)for(k=f.return;k!==null;){var T=k.tag;if((T===3||T===4)&&(T=k.stateNode.containerInfo,T===m||T.nodeType===8&&T.parentNode===m))return;k=k.return}for(;P!==null;){if(k=Ns(P),k===null)return;if(T=k.tag,T===5||T===6){f=x=k;continue e}P=P.parentNode}}f=f.return}cu(function(){var H=x,ee=rl(d),ne=[];e:{var Z=eh.get(s);if(Z!==void 0){var de=yl,he=s;switch(s){case"keypress":if(ha(d)===0)break e;case"keydown":case"keyup":de=hv;break;case"focusin":he="focus",de=wl;break;case"focusout":he="blur",de=wl;break;case"beforeblur":case"afterblur":de=wl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=mv;break;case Xu:case Gu:case Ju:de=sv;break;case Zu:de=xv;break;case"scroll":de=Jx;break;case"wheel":de=yv;break;case"copy":case"cut":case"paste":de=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Tu}var pe=(a&4)!==0,et=!pe&&s==="scroll",B=pe?Z!==null?Z+"Capture":null:Z;pe=[];for(var O=H,$;O!==null;){$=O;var se=$.stateNode;if($.tag===5&&se!==null&&($=se,B!==null&&(se=Mi(O,B),se!=null&&pe.push(Zi(O,se,$)))),et)break;O=O.return}0<pe.length&&(Z=new de(Z,he,null,d,ee),ne.push({event:Z,listeners:pe}))}}if((a&7)===0){e:{if(Z=s==="mouseover"||s==="pointerover",de=s==="mouseout"||s==="pointerout",Z&&d!==il&&(he=d.relatedTarget||d.fromElement)&&(Ns(he)||he[Sn]))break e;if((de||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,de?(he=d.relatedTarget||d.toElement,de=H,he=he?Ns(he):null,he!==null&&(et=ws(he),he!==et||he.tag!==5&&he.tag!==6)&&(he=null)):(de=null,he=H),de!==he)){if(pe=Pu,se="onMouseLeave",B="onMouseEnter",O="mouse",(s==="pointerout"||s==="pointerover")&&(pe=Tu,se="onPointerLeave",B="onPointerEnter",O="pointer"),et=de==null?Z:ci(de),$=he==null?Z:ci(he),Z=new pe(se,O+"leave",de,d,ee),Z.target=et,Z.relatedTarget=$,se=null,Ns(ee)===H&&(pe=new pe(B,O+"enter",he,d,ee),pe.target=$,pe.relatedTarget=et,se=pe),et=se,de&&he)t:{for(pe=de,B=he,O=0,$=pe;$;$=oi($))O++;for($=0,se=B;se;se=oi(se))$++;for(;0<O-$;)pe=oi(pe),O--;for(;0<$-O;)B=oi(B),$--;for(;O--;){if(pe===B||B!==null&&pe===B.alternate)break t;pe=oi(pe),B=oi(B)}pe=null}else pe=null;de!==null&&rh(ne,Z,de,pe,!1),he!==null&&et!==null&&rh(ne,et,he,pe,!0)}}e:{if(Z=H?ci(H):window,de=Z.nodeName&&Z.nodeName.toLowerCase(),de==="select"||de==="input"&&Z.type==="file")var xe=Sv;else if(Iu(Z))if(Bu)xe=Pv;else{xe=Ev;var je=Cv}else(de=Z.nodeName)&&de.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(xe=Rv);if(xe&&(xe=xe(s,H))){Fu(ne,xe,d,ee);break e}je&&je(s,Z,H),s==="focusout"&&(je=Z._wrapperState)&&je.controlled&&Z.type==="number"&&Vn(Z,"number",Z.value)}switch(je=H?ci(H):window,s){case"focusin":(Iu(je)||je.contentEditable==="true")&&(ri=je,El=H,Xi=null);break;case"focusout":Xi=El=ri=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,Qu(ne,d,ee);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Qu(ne,d,ee)}var we;if(_l)e:{switch(s){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ii?Ou(s,d)&&(_e="onCompositionEnd"):s==="keydown"&&d.keyCode===229&&(_e="onCompositionStart");_e&&(Du&&d.locale!=="ko"&&(ii||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ii&&(we=Eu()):(Xn=ee,vl="value"in Xn?Xn.value:Xn.textContent,ii=!0)),je=ya(H,_e),0<je.length&&(_e=new Au(_e,s,null,d,ee),ne.push({event:_e,listeners:je}),we?_e.data=we:(we=zu(d),we!==null&&(_e.data=we)))),(we=jv?wv(s,d):Nv(s,d))&&(H=ya(H,"onBeforeInput"),0<H.length&&(ee=new Au("onBeforeInput","beforeinput",null,d,ee),ne.push({event:ee,listeners:H}),ee.data=we))}sh(ne,a)})}function Zi(s,a,d){return{instance:s,listener:a,currentTarget:d}}function ya(s,a){for(var d=a+"Capture",f=[];s!==null;){var m=s,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Mi(s,d),x!=null&&f.unshift(Zi(s,x,m)),x=Mi(s,a),x!=null&&f.push(Zi(s,x,m))),s=s.return}return f}function oi(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function rh(s,a,d,f,m){for(var x=a._reactName,k=[];d!==null&&d!==f;){var P=d,T=P.alternate,H=P.stateNode;if(T!==null&&T===f)break;P.tag===5&&H!==null&&(P=H,m?(T=Mi(d,x),T!=null&&k.unshift(Zi(d,T,P))):m||(T=Mi(d,x),T!=null&&k.push(Zi(d,T,P)))),d=d.return}k.length!==0&&s.push({event:a,listeners:k})}var zv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function ah(s){return(typeof s=="string"?s:""+s).replace(zv,`
`).replace(Iv,"")}function ba(s,a,d){if(a=ah(a),ah(s)!==a&&d)throw Error(n(425))}function ja(){}var Ll=null,Ol=null;function zl(s,a){return s==="textarea"||s==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,Fv=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(s){return oh.resolve(null).then(s).catch($v)}:Il;function $v(s){setTimeout(function(){throw s})}function Fl(s,a){var d=a,f=0;do{var m=d.nextSibling;if(s.removeChild(d),m&&m.nodeType===8)if(d=m.data,d==="/$"){if(f===0){s.removeChild(m),Wi(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=m}while(d);Wi(a)}function Jn(s){for(;s!=null;s=s.nextSibling){var a=s.nodeType;if(a===1||a===3)break;if(a===8){if(a=s.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return s}function lh(s){s=s.previousSibling;for(var a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return s;a--}else d==="/$"&&a++}s=s.previousSibling}return null}var li=Math.random().toString(36).slice(2),gn="__reactFiber$"+li,er="__reactProps$"+li,Sn="__reactContainer$"+li,Bl="__reactEvents$"+li,Uv="__reactListeners$"+li,Wv="__reactHandles$"+li;function Ns(s){var a=s[gn];if(a)return a;for(var d=s.parentNode;d;){if(a=d[Sn]||d[gn]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(s=lh(s);s!==null;){if(d=s[gn])return d;s=lh(s)}return a}s=d,d=s.parentNode}return null}function tr(s){return s=s[gn]||s[Sn],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function ci(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function wa(s){return s[er]||null}var $l=[],di=-1;function Zn(s){return{current:s}}function We(s){0>di||(s.current=$l[di],$l[di]=null,di--)}function Be(s,a){di++,$l[di]=s.current,s.current=a}var es={},xt=Zn(es),Rt=Zn(!1),_s=es;function ui(s,a){var d=s.type.contextTypes;if(!d)return es;var f=s.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in d)m[x]=a[x];return f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=a,s.__reactInternalMemoizedMaskedChildContext=m),m}function Pt(s){return s=s.childContextTypes,s!=null}function Na(){We(Rt),We(xt)}function ch(s,a,d){if(xt.current!==es)throw Error(n(168));Be(xt,a),Be(Rt,d)}function dh(s,a,d){var f=s.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var m in f)if(!(m in a))throw Error(n(108,Ae(s)||"Unknown",m));return J({},d,f)}function _a(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||es,_s=xt.current,Be(xt,s),Be(Rt,Rt.current),!0}function uh(s,a,d){var f=s.stateNode;if(!f)throw Error(n(169));d?(s=dh(s,a,_s),f.__reactInternalMemoizedMergedChildContext=s,We(Rt),We(xt),Be(xt,s)):We(Rt),Be(Rt,d)}var Cn=null,ka=!1,Ul=!1;function hh(s){Cn===null?Cn=[s]:Cn.push(s)}function Hv(s){ka=!0,hh(s)}function ts(){if(!Ul&&Cn!==null){Ul=!0;var s=0,a=Le;try{var d=Cn;for(Le=1;s<d.length;s++){var f=d[s];do f=f(!0);while(f!==null)}Cn=null,ka=!1}catch(m){throw Cn!==null&&(Cn=Cn.slice(s+1)),pu(dl,ts),m}finally{Le=a,Ul=!1}}return null}var hi=[],fi=0,Sa=null,Ca=0,qt=[],Yt=0,ks=null,En=1,Rn="";function Ss(s,a){hi[fi++]=Ca,hi[fi++]=Sa,Sa=s,Ca=a}function fh(s,a,d){qt[Yt++]=En,qt[Yt++]=Rn,qt[Yt++]=ks,ks=s;var f=En;s=Rn;var m=32-rn(f)-1;f&=~(1<<m),d+=1;var x=32-rn(a)+m;if(30<x){var k=m-m%5;x=(f&(1<<k)-1).toString(32),f>>=k,m-=k,En=1<<32-rn(a)+m|d<<m|f,Rn=x+s}else En=1<<x|d<<m|f,Rn=s}function Wl(s){s.return!==null&&(Ss(s,1),fh(s,1,0))}function Hl(s){for(;s===Sa;)Sa=hi[--fi],hi[fi]=null,Ca=hi[--fi],hi[fi]=null;for(;s===ks;)ks=qt[--Yt],qt[Yt]=null,Rn=qt[--Yt],qt[Yt]=null,En=qt[--Yt],qt[Yt]=null}var Bt=null,$t=null,Ve=!1,on=null;function ph(s,a){var d=Gt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=s,a=s.deletions,a===null?(s.deletions=[d],s.flags|=16):a.push(d)}function mh(s,a){switch(s.tag){case 5:var d=s.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(s.stateNode=a,Bt=s,$t=Jn(a.firstChild),!0):!1;case 6:return a=s.pendingProps===""||a.nodeType!==3?null:a,a!==null?(s.stateNode=a,Bt=s,$t=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=ks!==null?{id:En,overflow:Rn}:null,s.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Gt(18,null,null,0),d.stateNode=a,d.return=s,s.child=d,Bt=s,$t=null,!0):!1;default:return!1}}function Vl(s){return(s.mode&1)!==0&&(s.flags&128)===0}function ql(s){if(Ve){var a=$t;if(a){var d=a;if(!mh(s,a)){if(Vl(s))throw Error(n(418));a=Jn(d.nextSibling);var f=Bt;a&&mh(s,a)?ph(f,d):(s.flags=s.flags&-4097|2,Ve=!1,Bt=s)}}else{if(Vl(s))throw Error(n(418));s.flags=s.flags&-4097|2,Ve=!1,Bt=s}}}function gh(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Bt=s}function Ea(s){if(s!==Bt)return!1;if(!Ve)return gh(s),Ve=!0,!1;var a;if((a=s.tag!==3)&&!(a=s.tag!==5)&&(a=s.type,a=a!=="head"&&a!=="body"&&!zl(s.type,s.memoizedProps)),a&&(a=$t)){if(Vl(s))throw xh(),Error(n(418));for(;a;)ph(s,a),a=Jn(a.nextSibling)}if(gh(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,a=0;s;){if(s.nodeType===8){var d=s.data;if(d==="/$"){if(a===0){$t=Jn(s.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}s=s.nextSibling}$t=null}}else $t=Bt?Jn(s.stateNode.nextSibling):null;return!0}function xh(){for(var s=$t;s;)s=Jn(s.nextSibling)}function pi(){$t=Bt=null,Ve=!1}function Yl(s){on===null?on=[s]:on.push(s)}var Vv=z.ReactCurrentBatchConfig;function nr(s,a,d){if(s=d.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var f=d.stateNode}if(!f)throw Error(n(147,s));var m=f,x=""+s;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(k){var P=m.refs;k===null?delete P[x]:P[x]=k},a._stringRef=x,a)}if(typeof s!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,s))}return s}function Ra(s,a){throw s=Object.prototype.toString.call(a),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":s))}function vh(s){var a=s._init;return a(s._payload)}function yh(s){function a(B,O){if(s){var $=B.deletions;$===null?(B.deletions=[O],B.flags|=16):$.push(O)}}function d(B,O){if(!s)return null;for(;O!==null;)a(B,O),O=O.sibling;return null}function f(B,O){for(B=new Map;O!==null;)O.key!==null?B.set(O.key,O):B.set(O.index,O),O=O.sibling;return B}function m(B,O){return B=cs(B,O),B.index=0,B.sibling=null,B}function x(B,O,$){return B.index=$,s?($=B.alternate,$!==null?($=$.index,$<O?(B.flags|=2,O):$):(B.flags|=2,O)):(B.flags|=1048576,O)}function k(B){return s&&B.alternate===null&&(B.flags|=2),B}function P(B,O,$,se){return O===null||O.tag!==6?(O=Ic($,B.mode,se),O.return=B,O):(O=m(O,$),O.return=B,O)}function T(B,O,$,se){var xe=$.type;return xe===D?ee(B,O,$.props.children,se,$.key):O!==null&&(O.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&vh(xe)===O.type)?(se=m(O,$.props),se.ref=nr(B,O,$),se.return=B,se):(se=Za($.type,$.key,$.props,null,B.mode,se),se.ref=nr(B,O,$),se.return=B,se)}function H(B,O,$,se){return O===null||O.tag!==4||O.stateNode.containerInfo!==$.containerInfo||O.stateNode.implementation!==$.implementation?(O=Fc($,B.mode,se),O.return=B,O):(O=m(O,$.children||[]),O.return=B,O)}function ee(B,O,$,se,xe){return O===null||O.tag!==7?(O=Ms($,B.mode,se,xe),O.return=B,O):(O=m(O,$),O.return=B,O)}function ne(B,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Ic(""+O,B.mode,$),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case R:return $=Za(O.type,O.key,O.props,null,B.mode,$),$.ref=nr(B,null,O),$.return=B,$;case I:return O=Fc(O,B.mode,$),O.return=B,O;case U:var se=O._init;return ne(B,se(O._payload),$)}if(Y(O)||re(O))return O=Ms(O,B.mode,$,null),O.return=B,O;Ra(B,O)}return null}function Z(B,O,$,se){var xe=O!==null?O.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return xe!==null?null:P(B,O,""+$,se);if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return $.key===xe?T(B,O,$,se):null;case I:return $.key===xe?H(B,O,$,se):null;case U:return xe=$._init,Z(B,O,xe($._payload),se)}if(Y($)||re($))return xe!==null?null:ee(B,O,$,se,null);Ra(B,$)}return null}function de(B,O,$,se,xe){if(typeof se=="string"&&se!==""||typeof se=="number")return B=B.get($)||null,P(O,B,""+se,xe);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case R:return B=B.get(se.key===null?$:se.key)||null,T(O,B,se,xe);case I:return B=B.get(se.key===null?$:se.key)||null,H(O,B,se,xe);case U:var je=se._init;return de(B,O,$,je(se._payload),xe)}if(Y(se)||re(se))return B=B.get($)||null,ee(O,B,se,xe,null);Ra(O,se)}return null}function he(B,O,$,se){for(var xe=null,je=null,we=O,_e=O=0,ht=null;we!==null&&_e<$.length;_e++){we.index>_e?(ht=we,we=null):ht=we.sibling;var De=Z(B,we,$[_e],se);if(De===null){we===null&&(we=ht);break}s&&we&&De.alternate===null&&a(B,we),O=x(De,O,_e),je===null?xe=De:je.sibling=De,je=De,we=ht}if(_e===$.length)return d(B,we),Ve&&Ss(B,_e),xe;if(we===null){for(;_e<$.length;_e++)we=ne(B,$[_e],se),we!==null&&(O=x(we,O,_e),je===null?xe=we:je.sibling=we,je=we);return Ve&&Ss(B,_e),xe}for(we=f(B,we);_e<$.length;_e++)ht=de(we,B,_e,$[_e],se),ht!==null&&(s&&ht.alternate!==null&&we.delete(ht.key===null?_e:ht.key),O=x(ht,O,_e),je===null?xe=ht:je.sibling=ht,je=ht);return s&&we.forEach(function(ds){return a(B,ds)}),Ve&&Ss(B,_e),xe}function pe(B,O,$,se){var xe=re($);if(typeof xe!="function")throw Error(n(150));if($=xe.call($),$==null)throw Error(n(151));for(var je=xe=null,we=O,_e=O=0,ht=null,De=$.next();we!==null&&!De.done;_e++,De=$.next()){we.index>_e?(ht=we,we=null):ht=we.sibling;var ds=Z(B,we,De.value,se);if(ds===null){we===null&&(we=ht);break}s&&we&&ds.alternate===null&&a(B,we),O=x(ds,O,_e),je===null?xe=ds:je.sibling=ds,je=ds,we=ht}if(De.done)return d(B,we),Ve&&Ss(B,_e),xe;if(we===null){for(;!De.done;_e++,De=$.next())De=ne(B,De.value,se),De!==null&&(O=x(De,O,_e),je===null?xe=De:je.sibling=De,je=De);return Ve&&Ss(B,_e),xe}for(we=f(B,we);!De.done;_e++,De=$.next())De=de(we,B,_e,De.value,se),De!==null&&(s&&De.alternate!==null&&we.delete(De.key===null?_e:De.key),O=x(De,O,_e),je===null?xe=De:je.sibling=De,je=De);return s&&we.forEach(function(_y){return a(B,_y)}),Ve&&Ss(B,_e),xe}function et(B,O,$,se){if(typeof $=="object"&&$!==null&&$.type===D&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case R:e:{for(var xe=$.key,je=O;je!==null;){if(je.key===xe){if(xe=$.type,xe===D){if(je.tag===7){d(B,je.sibling),O=m(je,$.props.children),O.return=B,B=O;break e}}else if(je.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===U&&vh(xe)===je.type){d(B,je.sibling),O=m(je,$.props),O.ref=nr(B,je,$),O.return=B,B=O;break e}d(B,je);break}else a(B,je);je=je.sibling}$.type===D?(O=Ms($.props.children,B.mode,se,$.key),O.return=B,B=O):(se=Za($.type,$.key,$.props,null,B.mode,se),se.ref=nr(B,O,$),se.return=B,B=se)}return k(B);case I:e:{for(je=$.key;O!==null;){if(O.key===je)if(O.tag===4&&O.stateNode.containerInfo===$.containerInfo&&O.stateNode.implementation===$.implementation){d(B,O.sibling),O=m(O,$.children||[]),O.return=B,B=O;break e}else{d(B,O);break}else a(B,O);O=O.sibling}O=Fc($,B.mode,se),O.return=B,B=O}return k(B);case U:return je=$._init,et(B,O,je($._payload),se)}if(Y($))return he(B,O,$,se);if(re($))return pe(B,O,$,se);Ra(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,O!==null&&O.tag===6?(d(B,O.sibling),O=m(O,$),O.return=B,B=O):(d(B,O),O=Ic($,B.mode,se),O.return=B,B=O),k(B)):d(B,O)}return et}var mi=yh(!0),bh=yh(!1),Pa=Zn(null),Aa=null,gi=null,Ql=null;function Kl(){Ql=gi=Aa=null}function Xl(s){var a=Pa.current;We(Pa),s._currentValue=a}function Gl(s,a,d){for(;s!==null;){var f=s.alternate;if((s.childLanes&a)!==a?(s.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),s===d)break;s=s.return}}function xi(s,a){Aa=s,Ql=gi=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&a)!==0&&(At=!0),s.firstContext=null)}function Qt(s){var a=s._currentValue;if(Ql!==s)if(s={context:s,memoizedValue:a,next:null},gi===null){if(Aa===null)throw Error(n(308));gi=s,Aa.dependencies={lanes:0,firstContext:s}}else gi=gi.next=s;return a}var Cs=null;function Jl(s){Cs===null?Cs=[s]:Cs.push(s)}function jh(s,a,d,f){var m=a.interleaved;return m===null?(d.next=d,Jl(a)):(d.next=m.next,m.next=d),a.interleaved=d,Pn(s,f)}function Pn(s,a){s.lanes|=a;var d=s.alternate;for(d!==null&&(d.lanes|=a),d=s,s=s.return;s!==null;)s.childLanes|=a,d=s.alternate,d!==null&&(d.childLanes|=a),d=s,s=s.return;return d.tag===3?d.stateNode:null}var ns=!1;function Zl(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(s,a){s=s.updateQueue,a.updateQueue===s&&(a.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function An(s,a){return{eventTime:s,lane:a,tag:0,payload:null,callback:null,next:null}}function ss(s,a,d){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,(Te&2)!==0){var m=f.pending;return m===null?a.next=a:(a.next=m.next,m.next=a),f.pending=a,Pn(s,d)}return m=f.interleaved,m===null?(a.next=a,Jl(f)):(a.next=m.next,m.next=a),f.interleaved=a,Pn(s,d)}function Ta(s,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,fl(s,d)}}function Nh(s,a){var d=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var m=null,x=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};x===null?m=x=k:x=x.next=k,d=d.next}while(d!==null);x===null?m=x=a:x=x.next=a}else m=x=a;d={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},s.updateQueue=d;return}s=d.lastBaseUpdate,s===null?d.firstBaseUpdate=a:s.next=a,d.lastBaseUpdate=a}function Da(s,a,d,f){var m=s.updateQueue;ns=!1;var x=m.firstBaseUpdate,k=m.lastBaseUpdate,P=m.shared.pending;if(P!==null){m.shared.pending=null;var T=P,H=T.next;T.next=null,k===null?x=H:k.next=H,k=T;var ee=s.alternate;ee!==null&&(ee=ee.updateQueue,P=ee.lastBaseUpdate,P!==k&&(P===null?ee.firstBaseUpdate=H:P.next=H,ee.lastBaseUpdate=T))}if(x!==null){var ne=m.baseState;k=0,ee=H=T=null,P=x;do{var Z=P.lane,de=P.eventTime;if((f&Z)===Z){ee!==null&&(ee=ee.next={eventTime:de,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var he=s,pe=P;switch(Z=a,de=d,pe.tag){case 1:if(he=pe.payload,typeof he=="function"){ne=he.call(de,ne,Z);break e}ne=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=pe.payload,Z=typeof he=="function"?he.call(de,ne,Z):he,Z==null)break e;ne=J({},ne,Z);break e;case 2:ns=!0}}P.callback!==null&&P.lane!==0&&(s.flags|=64,Z=m.effects,Z===null?m.effects=[P]:Z.push(P))}else de={eventTime:de,lane:Z,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ee===null?(H=ee=de,T=ne):ee=ee.next=de,k|=Z;if(P=P.next,P===null){if(P=m.shared.pending,P===null)break;Z=P,P=Z.next,Z.next=null,m.lastBaseUpdate=Z,m.shared.pending=null}}while(!0);if(ee===null&&(T=ne),m.baseState=T,m.firstBaseUpdate=H,m.lastBaseUpdate=ee,a=m.shared.interleaved,a!==null){m=a;do k|=m.lane,m=m.next;while(m!==a)}else x===null&&(m.shared.lanes=0);Ps|=k,s.lanes=k,s.memoizedState=ne}}function _h(s,a,d){if(s=a.effects,a.effects=null,s!==null)for(a=0;a<s.length;a++){var f=s[a],m=f.callback;if(m!==null){if(f.callback=null,f=d,typeof m!="function")throw Error(n(191,m));m.call(f)}}}var sr={},xn=Zn(sr),ir=Zn(sr),rr=Zn(sr);function Es(s){if(s===sr)throw Error(n(174));return s}function ec(s,a){switch(Be(rr,a),Be(ir,s),Be(xn,sr),s=a.nodeType,s){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Ce(null,"");break;default:s=s===8?a.parentNode:a,a=s.namespaceURI||null,s=s.tagName,a=Ce(a,s)}We(xn),Be(xn,a)}function vi(){We(xn),We(ir),We(rr)}function kh(s){Es(rr.current);var a=Es(xn.current),d=Ce(a,s.type);a!==d&&(Be(ir,s),Be(xn,d))}function tc(s){ir.current===s&&(We(xn),We(ir))}var qe=Zn(0);function Ma(s){for(var a=s;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var nc=[];function sc(){for(var s=0;s<nc.length;s++)nc[s]._workInProgressVersionPrimary=null;nc.length=0}var La=z.ReactCurrentDispatcher,ic=z.ReactCurrentBatchConfig,Rs=0,Ye=null,ot=null,dt=null,Oa=!1,ar=!1,or=0,qv=0;function vt(){throw Error(n(321))}function rc(s,a){if(a===null)return!1;for(var d=0;d<a.length&&d<s.length;d++)if(!an(s[d],a[d]))return!1;return!0}function ac(s,a,d,f,m,x){if(Rs=x,Ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,La.current=s===null||s.memoizedState===null?Xv:Gv,s=d(f,m),ar){x=0;do{if(ar=!1,or=0,25<=x)throw Error(n(301));x+=1,dt=ot=null,a.updateQueue=null,La.current=Jv,s=d(f,m)}while(ar)}if(La.current=Fa,a=ot!==null&&ot.next!==null,Rs=0,dt=ot=Ye=null,Oa=!1,a)throw Error(n(300));return s}function oc(){var s=or!==0;return or=0,s}function vn(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ye.memoizedState=dt=s:dt=dt.next=s,dt}function Kt(){if(ot===null){var s=Ye.alternate;s=s!==null?s.memoizedState:null}else s=ot.next;var a=dt===null?Ye.memoizedState:dt.next;if(a!==null)dt=a,ot=s;else{if(s===null)throw Error(n(310));ot=s,s={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Ye.memoizedState=dt=s:dt=dt.next=s}return dt}function lr(s,a){return typeof a=="function"?a(s):a}function lc(s){var a=Kt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=ot,m=f.baseQueue,x=d.pending;if(x!==null){if(m!==null){var k=m.next;m.next=x.next,x.next=k}f.baseQueue=m=x,d.pending=null}if(m!==null){x=m.next,f=f.baseState;var P=k=null,T=null,H=x;do{var ee=H.lane;if((Rs&ee)===ee)T!==null&&(T=T.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),f=H.hasEagerState?H.eagerState:s(f,H.action);else{var ne={lane:ee,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};T===null?(P=T=ne,k=f):T=T.next=ne,Ye.lanes|=ee,Ps|=ee}H=H.next}while(H!==null&&H!==x);T===null?k=f:T.next=P,an(f,a.memoizedState)||(At=!0),a.memoizedState=f,a.baseState=k,a.baseQueue=T,d.lastRenderedState=f}if(s=d.interleaved,s!==null){m=s;do x=m.lane,Ye.lanes|=x,Ps|=x,m=m.next;while(m!==s)}else m===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function cc(s){var a=Kt(),d=a.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=d.dispatch,m=d.pending,x=a.memoizedState;if(m!==null){d.pending=null;var k=m=m.next;do x=s(x,k.action),k=k.next;while(k!==m);an(x,a.memoizedState)||(At=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),d.lastRenderedState=x}return[x,f]}function Sh(){}function Ch(s,a){var d=Ye,f=Kt(),m=a(),x=!an(f.memoizedState,m);if(x&&(f.memoizedState=m,At=!0),f=f.queue,dc(Ph.bind(null,d,f,s),[s]),f.getSnapshot!==a||x||dt!==null&&dt.memoizedState.tag&1){if(d.flags|=2048,cr(9,Rh.bind(null,d,f,m,a),void 0,null),ut===null)throw Error(n(349));(Rs&30)!==0||Eh(d,a,m)}return m}function Eh(s,a,d){s.flags|=16384,s={getSnapshot:a,value:d},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.stores=[s]):(d=a.stores,d===null?a.stores=[s]:d.push(s))}function Rh(s,a,d,f){a.value=d,a.getSnapshot=f,Ah(a)&&Th(s)}function Ph(s,a,d){return d(function(){Ah(a)&&Th(s)})}function Ah(s){var a=s.getSnapshot;s=s.value;try{var d=a();return!an(s,d)}catch{return!0}}function Th(s){var a=Pn(s,1);a!==null&&un(a,s,1,-1)}function Dh(s){var a=vn();return typeof s=="function"&&(s=s()),a.memoizedState=a.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:s},a.queue=s,s=s.dispatch=Kv.bind(null,Ye,s),[a.memoizedState,s]}function cr(s,a,d,f){return s={tag:s,create:a,destroy:d,deps:f,next:null},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.lastEffect=s.next=s):(d=a.lastEffect,d===null?a.lastEffect=s.next=s:(f=d.next,d.next=s,s.next=f,a.lastEffect=s)),s}function Mh(){return Kt().memoizedState}function za(s,a,d,f){var m=vn();Ye.flags|=s,m.memoizedState=cr(1|a,d,void 0,f===void 0?null:f)}function Ia(s,a,d,f){var m=Kt();f=f===void 0?null:f;var x=void 0;if(ot!==null){var k=ot.memoizedState;if(x=k.destroy,f!==null&&rc(f,k.deps)){m.memoizedState=cr(a,d,x,f);return}}Ye.flags|=s,m.memoizedState=cr(1|a,d,x,f)}function Lh(s,a){return za(8390656,8,s,a)}function dc(s,a){return Ia(2048,8,s,a)}function Oh(s,a){return Ia(4,2,s,a)}function zh(s,a){return Ia(4,4,s,a)}function Ih(s,a){if(typeof a=="function")return s=s(),a(s),function(){a(null)};if(a!=null)return s=s(),a.current=s,function(){a.current=null}}function Fh(s,a,d){return d=d!=null?d.concat([s]):null,Ia(4,4,Ih.bind(null,a,s),d)}function uc(){}function Bh(s,a){var d=Kt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&rc(a,f[1])?f[0]:(d.memoizedState=[s,a],s)}function $h(s,a){var d=Kt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&rc(a,f[1])?f[0]:(s=s(),d.memoizedState=[s,a],s)}function Uh(s,a,d){return(Rs&21)===0?(s.baseState&&(s.baseState=!1,At=!0),s.memoizedState=d):(an(d,a)||(d=vu(),Ye.lanes|=d,Ps|=d,s.baseState=!0),a)}function Yv(s,a){var d=Le;Le=d!==0&&4>d?d:4,s(!0);var f=ic.transition;ic.transition={};try{s(!1),a()}finally{Le=d,ic.transition=f}}function Wh(){return Kt().memoizedState}function Qv(s,a,d){var f=os(s);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Hh(s))Vh(a,d);else if(d=jh(s,a,d,f),d!==null){var m=Et();un(d,s,f,m),qh(d,a,f)}}function Kv(s,a,d){var f=os(s),m={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Hh(s))Vh(a,m);else{var x=s.alternate;if(s.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var k=a.lastRenderedState,P=x(k,d);if(m.hasEagerState=!0,m.eagerState=P,an(P,k)){var T=a.interleaved;T===null?(m.next=m,Jl(a)):(m.next=T.next,T.next=m),a.interleaved=m;return}}catch{}finally{}d=jh(s,a,m,f),d!==null&&(m=Et(),un(d,s,f,m),qh(d,a,f))}}function Hh(s){var a=s.alternate;return s===Ye||a!==null&&a===Ye}function Vh(s,a){ar=Oa=!0;var d=s.pending;d===null?a.next=a:(a.next=d.next,d.next=a),s.pending=a}function qh(s,a,d){if((d&4194240)!==0){var f=a.lanes;f&=s.pendingLanes,d|=f,a.lanes=d,fl(s,d)}}var Fa={readContext:Qt,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Xv={readContext:Qt,useCallback:function(s,a){return vn().memoizedState=[s,a===void 0?null:a],s},useContext:Qt,useEffect:Lh,useImperativeHandle:function(s,a,d){return d=d!=null?d.concat([s]):null,za(4194308,4,Ih.bind(null,a,s),d)},useLayoutEffect:function(s,a){return za(4194308,4,s,a)},useInsertionEffect:function(s,a){return za(4,2,s,a)},useMemo:function(s,a){var d=vn();return a=a===void 0?null:a,s=s(),d.memoizedState=[s,a],s},useReducer:function(s,a,d){var f=vn();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:a},f.queue=s,s=s.dispatch=Qv.bind(null,Ye,s),[f.memoizedState,s]},useRef:function(s){var a=vn();return s={current:s},a.memoizedState=s},useState:Dh,useDebugValue:uc,useDeferredValue:function(s){return vn().memoizedState=s},useTransition:function(){var s=Dh(!1),a=s[0];return s=Yv.bind(null,s[1]),vn().memoizedState=s,[a,s]},useMutableSource:function(){},useSyncExternalStore:function(s,a,d){var f=Ye,m=vn();if(Ve){if(d===void 0)throw Error(n(407));d=d()}else{if(d=a(),ut===null)throw Error(n(349));(Rs&30)!==0||Eh(f,a,d)}m.memoizedState=d;var x={value:d,getSnapshot:a};return m.queue=x,Lh(Ph.bind(null,f,x,s),[s]),f.flags|=2048,cr(9,Rh.bind(null,f,x,d,a),void 0,null),d},useId:function(){var s=vn(),a=ut.identifierPrefix;if(Ve){var d=Rn,f=En;d=(f&~(1<<32-rn(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=or++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=qv++,a=":"+a+"r"+d.toString(32)+":";return s.memoizedState=a},unstable_isNewReconciler:!1},Gv={readContext:Qt,useCallback:Bh,useContext:Qt,useEffect:dc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:$h,useReducer:lc,useRef:Mh,useState:function(){return lc(lr)},useDebugValue:uc,useDeferredValue:function(s){var a=Kt();return Uh(a,ot.memoizedState,s)},useTransition:function(){var s=lc(lr)[0],a=Kt().memoizedState;return[s,a]},useMutableSource:Sh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1},Jv={readContext:Qt,useCallback:Bh,useContext:Qt,useEffect:dc,useImperativeHandle:Fh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:$h,useReducer:cc,useRef:Mh,useState:function(){return cc(lr)},useDebugValue:uc,useDeferredValue:function(s){var a=Kt();return ot===null?a.memoizedState=s:Uh(a,ot.memoizedState,s)},useTransition:function(){var s=cc(lr)[0],a=Kt().memoizedState;return[s,a]},useMutableSource:Sh,useSyncExternalStore:Ch,useId:Wh,unstable_isNewReconciler:!1};function ln(s,a){if(s&&s.defaultProps){a=J({},a),s=s.defaultProps;for(var d in s)a[d]===void 0&&(a[d]=s[d]);return a}return a}function hc(s,a,d,f){a=s.memoizedState,d=d(f,a),d=d==null?a:J({},a,d),s.memoizedState=d,s.lanes===0&&(s.updateQueue.baseState=d)}var Ba={isMounted:function(s){return(s=s._reactInternals)?ws(s)===s:!1},enqueueSetState:function(s,a,d){s=s._reactInternals;var f=Et(),m=os(s),x=An(f,m);x.payload=a,d!=null&&(x.callback=d),a=ss(s,x,m),a!==null&&(un(a,s,m,f),Ta(a,s,m))},enqueueReplaceState:function(s,a,d){s=s._reactInternals;var f=Et(),m=os(s),x=An(f,m);x.tag=1,x.payload=a,d!=null&&(x.callback=d),a=ss(s,x,m),a!==null&&(un(a,s,m,f),Ta(a,s,m))},enqueueForceUpdate:function(s,a){s=s._reactInternals;var d=Et(),f=os(s),m=An(d,f);m.tag=2,a!=null&&(m.callback=a),a=ss(s,m,f),a!==null&&(un(a,s,f,d),Ta(a,s,f))}};function Yh(s,a,d,f,m,x,k){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,x,k):a.prototype&&a.prototype.isPureReactComponent?!Ki(d,f)||!Ki(m,x):!0}function Qh(s,a,d){var f=!1,m=es,x=a.contextType;return typeof x=="object"&&x!==null?x=Qt(x):(m=Pt(a)?_s:xt.current,f=a.contextTypes,x=(f=f!=null)?ui(s,m):es),a=new a(d,x),s.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ba,s.stateNode=a,a._reactInternals=s,f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=x),a}function Kh(s,a,d,f){s=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==s&&Ba.enqueueReplaceState(a,a.state,null)}function fc(s,a,d,f){var m=s.stateNode;m.props=d,m.state=s.memoizedState,m.refs={},Zl(s);var x=a.contextType;typeof x=="object"&&x!==null?m.context=Qt(x):(x=Pt(a)?_s:xt.current,m.context=ui(s,x)),m.state=s.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(hc(s,a,x,d),m.state=s.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(a=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),a!==m.state&&Ba.enqueueReplaceState(m,m.state,null),Da(s,d,m,f),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function yi(s,a){try{var d="",f=a;do d+=ye(f),f=f.return;while(f);var m=d}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:s,source:a,stack:m,digest:null}}function pc(s,a,d){return{value:s,source:null,stack:d??null,digest:a??null}}function mc(s,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Xh(s,a,d){d=An(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){Ya||(Ya=!0,Pc=f),mc(s,a)},d}function Gh(s,a,d){d=An(-1,d),d.tag=3;var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=a.value;d.payload=function(){return f(m)},d.callback=function(){mc(s,a)}}var x=s.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(d.callback=function(){mc(s,a),typeof f!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})}),d}function Jh(s,a,d){var f=s.pingCache;if(f===null){f=s.pingCache=new Zv;var m=new Set;f.set(a,m)}else m=f.get(a),m===void 0&&(m=new Set,f.set(a,m));m.has(d)||(m.add(d),s=fy.bind(null,s,a,d),a.then(s,s))}function Zh(s){do{var a;if((a=s.tag===13)&&(a=s.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return s;s=s.return}while(s!==null);return null}function ef(s,a,d,f,m){return(s.mode&1)===0?(s===a?s.flags|=65536:(s.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=An(-1,1),a.tag=2,ss(d,a,1))),d.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var ey=z.ReactCurrentOwner,At=!1;function Ct(s,a,d,f){a.child=s===null?bh(a,null,d,f):mi(a,s.child,d,f)}function tf(s,a,d,f,m){d=d.render;var x=a.ref;return xi(a,m),f=ac(s,a,d,f,x,m),d=oc(),s!==null&&!At?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Tn(s,a,m)):(Ve&&d&&Wl(a),a.flags|=1,Ct(s,a,f,m),a.child)}function nf(s,a,d,f,m){if(s===null){var x=d.type;return typeof x=="function"&&!zc(x)&&x.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=x,sf(s,a,x,f,m)):(s=Za(d.type,null,f,a,a.mode,m),s.ref=a.ref,s.return=a,a.child=s)}if(x=s.child,(s.lanes&m)===0){var k=x.memoizedProps;if(d=d.compare,d=d!==null?d:Ki,d(k,f)&&s.ref===a.ref)return Tn(s,a,m)}return a.flags|=1,s=cs(x,f),s.ref=a.ref,s.return=a,a.child=s}function sf(s,a,d,f,m){if(s!==null){var x=s.memoizedProps;if(Ki(x,f)&&s.ref===a.ref)if(At=!1,a.pendingProps=f=x,(s.lanes&m)!==0)(s.flags&131072)!==0&&(At=!0);else return a.lanes=s.lanes,Tn(s,a,m)}return gc(s,a,d,f,m)}function rf(s,a,d){var f=a.pendingProps,m=f.children,x=s!==null?s.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(ji,Ut),Ut|=d;else{if((d&1073741824)===0)return s=x!==null?x.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:s,cachePool:null,transitions:null},a.updateQueue=null,Be(ji,Ut),Ut|=s,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:d,Be(ji,Ut),Ut|=f}else x!==null?(f=x.baseLanes|d,a.memoizedState=null):f=d,Be(ji,Ut),Ut|=f;return Ct(s,a,m,d),a.child}function af(s,a){var d=a.ref;(s===null&&d!==null||s!==null&&s.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function gc(s,a,d,f,m){var x=Pt(d)?_s:xt.current;return x=ui(a,x),xi(a,m),d=ac(s,a,d,f,x,m),f=oc(),s!==null&&!At?(a.updateQueue=s.updateQueue,a.flags&=-2053,s.lanes&=~m,Tn(s,a,m)):(Ve&&f&&Wl(a),a.flags|=1,Ct(s,a,d,m),a.child)}function of(s,a,d,f,m){if(Pt(d)){var x=!0;_a(a)}else x=!1;if(xi(a,m),a.stateNode===null)Ua(s,a),Qh(a,d,f),fc(a,d,f,m),f=!0;else if(s===null){var k=a.stateNode,P=a.memoizedProps;k.props=P;var T=k.context,H=d.contextType;typeof H=="object"&&H!==null?H=Qt(H):(H=Pt(d)?_s:xt.current,H=ui(a,H));var ee=d.getDerivedStateFromProps,ne=typeof ee=="function"||typeof k.getSnapshotBeforeUpdate=="function";ne||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(P!==f||T!==H)&&Kh(a,k,f,H),ns=!1;var Z=a.memoizedState;k.state=Z,Da(a,f,k,m),T=a.memoizedState,P!==f||Z!==T||Rt.current||ns?(typeof ee=="function"&&(hc(a,d,ee,f),T=a.memoizedState),(P=ns||Yh(a,d,P,f,Z,T,H))?(ne||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(a.flags|=4194308)):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=T),k.props=f,k.state=T,k.context=H,f=P):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{k=a.stateNode,wh(s,a),P=a.memoizedProps,H=a.type===a.elementType?P:ln(a.type,P),k.props=H,ne=a.pendingProps,Z=k.context,T=d.contextType,typeof T=="object"&&T!==null?T=Qt(T):(T=Pt(d)?_s:xt.current,T=ui(a,T));var de=d.getDerivedStateFromProps;(ee=typeof de=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(P!==ne||Z!==T)&&Kh(a,k,f,T),ns=!1,Z=a.memoizedState,k.state=Z,Da(a,f,k,m);var he=a.memoizedState;P!==ne||Z!==he||Rt.current||ns?(typeof de=="function"&&(hc(a,d,de,f),he=a.memoizedState),(H=ns||Yh(a,d,H,f,Z,he,T)||!1)?(ee||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(f,he,T),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(f,he,T)),typeof k.componentDidUpdate=="function"&&(a.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof k.componentDidUpdate!="function"||P===s.memoizedProps&&Z===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&Z===s.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=he),k.props=f,k.state=he,k.context=T,f=H):(typeof k.componentDidUpdate!="function"||P===s.memoizedProps&&Z===s.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||P===s.memoizedProps&&Z===s.memoizedState||(a.flags|=1024),f=!1)}return xc(s,a,d,f,x,m)}function xc(s,a,d,f,m,x){af(s,a);var k=(a.flags&128)!==0;if(!f&&!k)return m&&uh(a,d,!1),Tn(s,a,x);f=a.stateNode,ey.current=a;var P=k&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,s!==null&&k?(a.child=mi(a,s.child,null,x),a.child=mi(a,null,P,x)):Ct(s,a,P,x),a.memoizedState=f.state,m&&uh(a,d,!0),a.child}function lf(s){var a=s.stateNode;a.pendingContext?ch(s,a.pendingContext,a.pendingContext!==a.context):a.context&&ch(s,a.context,!1),ec(s,a.containerInfo)}function cf(s,a,d,f,m){return pi(),Yl(m),a.flags|=256,Ct(s,a,d,f),a.child}var vc={dehydrated:null,treeContext:null,retryLane:0};function yc(s){return{baseLanes:s,cachePool:null,transitions:null}}function df(s,a,d){var f=a.pendingProps,m=qe.current,x=!1,k=(a.flags&128)!==0,P;if((P=k)||(P=s!==null&&s.memoizedState===null?!1:(m&2)!==0),P?(x=!0,a.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),Be(qe,m&1),s===null)return ql(a),s=a.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((a.mode&1)===0?a.lanes=1:s.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(k=f.children,s=f.fallback,x?(f=a.mode,x=a.child,k={mode:"hidden",children:k},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=k):x=eo(k,f,0,null),s=Ms(s,f,d,null),x.return=a,s.return=a,x.sibling=s,a.child=x,a.child.memoizedState=yc(d),a.memoizedState=vc,s):bc(a,k));if(m=s.memoizedState,m!==null&&(P=m.dehydrated,P!==null))return ty(s,a,k,f,P,m,d);if(x){x=f.fallback,k=a.mode,m=s.child,P=m.sibling;var T={mode:"hidden",children:f.children};return(k&1)===0&&a.child!==m?(f=a.child,f.childLanes=0,f.pendingProps=T,a.deletions=null):(f=cs(m,T),f.subtreeFlags=m.subtreeFlags&14680064),P!==null?x=cs(P,x):(x=Ms(x,k,d,null),x.flags|=2),x.return=a,f.return=a,f.sibling=x,a.child=f,f=x,x=a.child,k=s.child.memoizedState,k=k===null?yc(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=s.childLanes&~d,a.memoizedState=vc,f}return x=s.child,s=x.sibling,f=cs(x,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,s!==null&&(d=a.deletions,d===null?(a.deletions=[s],a.flags|=16):d.push(s)),a.child=f,a.memoizedState=null,f}function bc(s,a){return a=eo({mode:"visible",children:a},s.mode,0,null),a.return=s,s.child=a}function $a(s,a,d,f){return f!==null&&Yl(f),mi(a,s.child,null,d),s=bc(a,a.pendingProps.children),s.flags|=2,a.memoizedState=null,s}function ty(s,a,d,f,m,x,k){if(d)return a.flags&256?(a.flags&=-257,f=pc(Error(n(422))),$a(s,a,k,f)):a.memoizedState!==null?(a.child=s.child,a.flags|=128,null):(x=f.fallback,m=a.mode,f=eo({mode:"visible",children:f.children},m,0,null),x=Ms(x,m,k,null),x.flags|=2,f.return=a,x.return=a,f.sibling=x,a.child=f,(a.mode&1)!==0&&mi(a,s.child,null,k),a.child.memoizedState=yc(k),a.memoizedState=vc,x);if((a.mode&1)===0)return $a(s,a,k,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var P=f.dgst;return f=P,x=Error(n(419)),f=pc(x,f,void 0),$a(s,a,k,f)}if(P=(k&s.childLanes)!==0,At||P){if(f=ut,f!==null){switch(k&-k){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|k))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,Pn(s,m),un(f,s,m,-1))}return Oc(),f=pc(Error(n(421))),$a(s,a,k,f)}return m.data==="$?"?(a.flags|=128,a.child=s.child,a=py.bind(null,s),m._reactRetry=a,null):(s=x.treeContext,$t=Jn(m.nextSibling),Bt=a,Ve=!0,on=null,s!==null&&(qt[Yt++]=En,qt[Yt++]=Rn,qt[Yt++]=ks,En=s.id,Rn=s.overflow,ks=a),a=bc(a,f.children),a.flags|=4096,a)}function uf(s,a,d){s.lanes|=a;var f=s.alternate;f!==null&&(f.lanes|=a),Gl(s.return,a,d)}function jc(s,a,d,f,m){var x=s.memoizedState;x===null?s.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:m}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=d,x.tailMode=m)}function hf(s,a,d){var f=a.pendingProps,m=f.revealOrder,x=f.tail;if(Ct(s,a,f.children,d),f=qe.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=a.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&uf(s,d,a);else if(s.tag===19)uf(s,d,a);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===a)break e;for(;s.sibling===null;){if(s.return===null||s.return===a)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}if(Be(qe,f),(a.mode&1)===0)a.memoizedState=null;else switch(m){case"forwards":for(d=a.child,m=null;d!==null;)s=d.alternate,s!==null&&Ma(s)===null&&(m=d),d=d.sibling;d=m,d===null?(m=a.child,a.child=null):(m=d.sibling,d.sibling=null),jc(a,!1,m,d,x);break;case"backwards":for(d=null,m=a.child,a.child=null;m!==null;){if(s=m.alternate,s!==null&&Ma(s)===null){a.child=m;break}s=m.sibling,m.sibling=d,d=m,m=s}jc(a,!0,d,null,x);break;case"together":jc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ua(s,a){(a.mode&1)===0&&s!==null&&(s.alternate=null,a.alternate=null,a.flags|=2)}function Tn(s,a,d){if(s!==null&&(a.dependencies=s.dependencies),Ps|=a.lanes,(d&a.childLanes)===0)return null;if(s!==null&&a.child!==s.child)throw Error(n(153));if(a.child!==null){for(s=a.child,d=cs(s,s.pendingProps),a.child=d,d.return=a;s.sibling!==null;)s=s.sibling,d=d.sibling=cs(s,s.pendingProps),d.return=a;d.sibling=null}return a.child}function ny(s,a,d){switch(a.tag){case 3:lf(a),pi();break;case 5:kh(a);break;case 1:Pt(a.type)&&_a(a);break;case 4:ec(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,m=a.memoizedProps.value;Be(Pa,f._currentValue),f._currentValue=m;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(Be(qe,qe.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?df(s,a,d):(Be(qe,qe.current&1),s=Tn(s,a,d),s!==null?s.sibling:null);Be(qe,qe.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(s.flags&128)!==0){if(f)return hf(s,a,d);a.flags|=128}if(m=a.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Be(qe,qe.current),f)break;return null;case 22:case 23:return a.lanes=0,rf(s,a,d)}return Tn(s,a,d)}var ff,wc,pf,mf;ff=function(s,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},wc=function(){},pf=function(s,a,d,f){var m=s.memoizedProps;if(m!==f){s=a.stateNode,Es(xn.current);var x=null;switch(d){case"input":m=Ht(s,m),f=Ht(s,f),x=[];break;case"select":m=J({},m,{value:void 0}),f=J({},f,{value:void 0}),x=[];break;case"textarea":m=Ee(s,m),f=Ee(s,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(s.onclick=ja)}nl(d,f);var k;d=null;for(H in m)if(!f.hasOwnProperty(H)&&m.hasOwnProperty(H)&&m[H]!=null)if(H==="style"){var P=m[H];for(k in P)P.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?x||(x=[]):(x=x||[]).push(H,null));for(H in f){var T=f[H];if(P=m!=null?m[H]:void 0,f.hasOwnProperty(H)&&T!==P&&(T!=null||P!=null))if(H==="style")if(P){for(k in P)!P.hasOwnProperty(k)||T&&T.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in T)T.hasOwnProperty(k)&&P[k]!==T[k]&&(d||(d={}),d[k]=T[k])}else d||(x||(x=[]),x.push(H,d)),d=T;else H==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,P=P?P.__html:void 0,T!=null&&P!==T&&(x=x||[]).push(H,T)):H==="children"?typeof T!="string"&&typeof T!="number"||(x=x||[]).push(H,""+T):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(T!=null&&H==="onScroll"&&Ue("scroll",s),x||P===T||(x=[])):(x=x||[]).push(H,T))}d&&(x=x||[]).push("style",d);var H=x;(a.updateQueue=H)&&(a.flags|=4)}},mf=function(s,a,d,f){d!==f&&(a.flags|=4)};function dr(s,a){if(!Ve)switch(s.tailMode){case"hidden":a=s.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?s.tail=null:d.sibling=null;break;case"collapsed":d=s.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function yt(s){var a=s.alternate!==null&&s.alternate.child===s.child,d=0,f=0;if(a)for(var m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=f,s.childLanes=d,a}function sy(s,a,d){var f=a.pendingProps;switch(Hl(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(a),null;case 1:return Pt(a.type)&&Na(),yt(a),null;case 3:return f=a.stateNode,vi(),We(Rt),We(xt),sc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(s===null||s.child===null)&&(Ea(a)?a.flags|=4:s===null||s.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,on!==null&&(Dc(on),on=null))),wc(s,a),yt(a),null;case 5:tc(a);var m=Es(rr.current);if(d=a.type,s!==null&&a.stateNode!=null)pf(s,a,d,f,m),s.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(n(166));return yt(a),null}if(s=Es(xn.current),Ea(a)){f=a.stateNode,d=a.type;var x=a.memoizedProps;switch(f[gn]=a,f[er]=x,s=(a.mode&1)!==0,d){case"dialog":Ue("cancel",f),Ue("close",f);break;case"iframe":case"object":case"embed":Ue("load",f);break;case"video":case"audio":for(m=0;m<Gi.length;m++)Ue(Gi[m],f);break;case"source":Ue("error",f);break;case"img":case"image":case"link":Ue("error",f),Ue("load",f);break;case"details":Ue("toggle",f);break;case"input":Zs(f,x),Ue("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Ue("invalid",f);break;case"textarea":Vt(f,x),Ue("invalid",f)}nl(d,x),m=null;for(var k in x)if(x.hasOwnProperty(k)){var P=x[k];k==="children"?typeof P=="string"?f.textContent!==P&&(x.suppressHydrationWarning!==!0&&ba(f.textContent,P,s),m=["children",P]):typeof P=="number"&&f.textContent!==""+P&&(x.suppressHydrationWarning!==!0&&ba(f.textContent,P,s),m=["children",""+P]):o.hasOwnProperty(k)&&P!=null&&k==="onScroll"&&Ue("scroll",f)}switch(d){case"input":Wn(f),bs(f,x,!0);break;case"textarea":Wn(f),te(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=ja)}f=m,a.updateQueue=f,f!==null&&(a.flags|=4)}else{k=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=ae(d)),s==="http://www.w3.org/1999/xhtml"?d==="script"?(s=k.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof f.is=="string"?s=k.createElement(d,{is:f.is}):(s=k.createElement(d),d==="select"&&(k=s,f.multiple?k.multiple=!0:f.size&&(k.size=f.size))):s=k.createElementNS(s,d),s[gn]=a,s[er]=f,ff(s,a,!1,!1),a.stateNode=s;e:{switch(k=sl(d,f),d){case"dialog":Ue("cancel",s),Ue("close",s),m=f;break;case"iframe":case"object":case"embed":Ue("load",s),m=f;break;case"video":case"audio":for(m=0;m<Gi.length;m++)Ue(Gi[m],s);m=f;break;case"source":Ue("error",s),m=f;break;case"img":case"image":case"link":Ue("error",s),Ue("load",s),m=f;break;case"details":Ue("toggle",s),m=f;break;case"input":Zs(s,f),m=Ht(s,f),Ue("invalid",s);break;case"option":m=f;break;case"select":s._wrapperState={wasMultiple:!!f.multiple},m=J({},f,{value:void 0}),Ue("invalid",s);break;case"textarea":Vt(s,f),m=Ee(s,f),Ue("invalid",s);break;default:m=f}nl(d,m),P=m;for(x in P)if(P.hasOwnProperty(x)){var T=P[x];x==="style"?Zr(s,T):x==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&Ke(s,T)):x==="children"?typeof T=="string"?(d!=="textarea"||T!=="")&&Je(s,T):typeof T=="number"&&Je(s,""+T):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?T!=null&&x==="onScroll"&&Ue("scroll",s):T!=null&&A(s,x,T,k))}switch(d){case"input":Wn(s),bs(s,f,!1);break;case"textarea":Wn(s),te(s);break;case"option":f.value!=null&&s.setAttribute("value",""+Pe(f.value));break;case"select":s.multiple=!!f.multiple,x=f.value,x!=null?fe(s,!!f.multiple,x,!1):f.defaultValue!=null&&fe(s,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=ja)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return yt(a),null;case 6:if(s&&a.stateNode!=null)mf(s,a,s.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(n(166));if(d=Es(rr.current),Es(xn.current),Ea(a)){if(f=a.stateNode,d=a.memoizedProps,f[gn]=a,(x=f.nodeValue!==d)&&(s=Bt,s!==null))switch(s.tag){case 3:ba(f.nodeValue,d,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&ba(f.nodeValue,d,(s.mode&1)!==0)}x&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[gn]=a,a.stateNode=f}return yt(a),null;case 13:if(We(qe),f=a.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(Ve&&$t!==null&&(a.mode&1)!==0&&(a.flags&128)===0)xh(),pi(),a.flags|=98560,x=!1;else if(x=Ea(a),f!==null&&f.dehydrated!==null){if(s===null){if(!x)throw Error(n(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[gn]=a}else pi(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;yt(a),x=!1}else on!==null&&(Dc(on),on=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(s!==null&&s.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(s===null||(qe.current&1)!==0?lt===0&&(lt=3):Oc())),a.updateQueue!==null&&(a.flags|=4),yt(a),null);case 4:return vi(),wc(s,a),s===null&&Ji(a.stateNode.containerInfo),yt(a),null;case 10:return Xl(a.type._context),yt(a),null;case 17:return Pt(a.type)&&Na(),yt(a),null;case 19:if(We(qe),x=a.memoizedState,x===null)return yt(a),null;if(f=(a.flags&128)!==0,k=x.rendering,k===null)if(f)dr(x,!1);else{if(lt!==0||s!==null&&(s.flags&128)!==0)for(s=a.child;s!==null;){if(k=Ma(s),k!==null){for(a.flags|=128,dr(x,!1),f=k.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)x=d,s=f,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=s,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,s=k.dependencies,x.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),d=d.sibling;return Be(qe,qe.current&1|2),a.child}s=s.sibling}x.tail!==null&&Ze()>wi&&(a.flags|=128,f=!0,dr(x,!1),a.lanes=4194304)}else{if(!f)if(s=Ma(k),s!==null){if(a.flags|=128,f=!0,d=s.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),dr(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!Ve)return yt(a),null}else 2*Ze()-x.renderingStartTime>wi&&d!==1073741824&&(a.flags|=128,f=!0,dr(x,!1),a.lanes=4194304);x.isBackwards?(k.sibling=a.child,a.child=k):(d=x.last,d!==null?d.sibling=k:a.child=k,x.last=k)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=Ze(),a.sibling=null,d=qe.current,Be(qe,f?d&1|2:d&1),a):(yt(a),null);case 22:case 23:return Lc(),f=a.memoizedState!==null,s!==null&&s.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Ut&1073741824)!==0&&(yt(a),a.subtreeFlags&6&&(a.flags|=8192)):yt(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function iy(s,a){switch(Hl(a),a.tag){case 1:return Pt(a.type)&&Na(),s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 3:return vi(),We(Rt),We(xt),sc(),s=a.flags,(s&65536)!==0&&(s&128)===0?(a.flags=s&-65537|128,a):null;case 5:return tc(a),null;case 13:if(We(qe),s=a.memoizedState,s!==null&&s.dehydrated!==null){if(a.alternate===null)throw Error(n(340));pi()}return s=a.flags,s&65536?(a.flags=s&-65537|128,a):null;case 19:return We(qe),null;case 4:return vi(),null;case 10:return Xl(a.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Wa=!1,bt=!1,ry=typeof WeakSet=="function"?WeakSet:Set,ue=null;function bi(s,a){var d=s.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Xe(s,a,f)}else d.current=null}function Nc(s,a,d){try{d()}catch(f){Xe(s,a,f)}}var gf=!1;function ay(s,a){if(Ll=ca,s=Yu(),Cl(s)){if("selectionStart"in s)var d={start:s.selectionStart,end:s.selectionEnd};else e:{d=(d=s.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{d.nodeType,x.nodeType}catch{d=null;break e}var k=0,P=-1,T=-1,H=0,ee=0,ne=s,Z=null;t:for(;;){for(var de;ne!==d||m!==0&&ne.nodeType!==3||(P=k+m),ne!==x||f!==0&&ne.nodeType!==3||(T=k+f),ne.nodeType===3&&(k+=ne.nodeValue.length),(de=ne.firstChild)!==null;)Z=ne,ne=de;for(;;){if(ne===s)break t;if(Z===d&&++H===m&&(P=k),Z===x&&++ee===f&&(T=k),(de=ne.nextSibling)!==null)break;ne=Z,Z=ne.parentNode}ne=de}d=P===-1||T===-1?null:{start:P,end:T}}else d=null}d=d||{start:0,end:0}}else d=null;for(Ol={focusedElem:s,selectionRange:d},ca=!1,ue=a;ue!==null;)if(a=ue,s=a.child,(a.subtreeFlags&1028)!==0&&s!==null)s.return=a,ue=s;else for(;ue!==null;){a=ue;try{var he=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var pe=he.memoizedProps,et=he.memoizedState,B=a.stateNode,O=B.getSnapshotBeforeUpdate(a.elementType===a.type?pe:ln(a.type,pe),et);B.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var $=a.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(se){Xe(a,a.return,se)}if(s=a.sibling,s!==null){s.return=a.return,ue=s;break}ue=a.return}return he=gf,gf=!1,he}function ur(s,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&s)===s){var x=m.destroy;m.destroy=void 0,x!==void 0&&Nc(a,d,x)}m=m.next}while(m!==f)}}function Ha(s,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&s)===s){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function _c(s){var a=s.ref;if(a!==null){var d=s.stateNode;switch(s.tag){case 5:s=d;break;default:s=d}typeof a=="function"?a(s):a.current=s}}function xf(s){var a=s.alternate;a!==null&&(s.alternate=null,xf(a)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(a=s.stateNode,a!==null&&(delete a[gn],delete a[er],delete a[Bl],delete a[Uv],delete a[Wv])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function vf(s){return s.tag===5||s.tag===3||s.tag===4}function yf(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||vf(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function kc(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(s,a):d.insertBefore(s,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(s,d)):(a=d,a.appendChild(s)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=ja));else if(f!==4&&(s=s.child,s!==null))for(kc(s,a,d),s=s.sibling;s!==null;)kc(s,a,d),s=s.sibling}function Sc(s,a,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,a?d.insertBefore(s,a):d.appendChild(s);else if(f!==4&&(s=s.child,s!==null))for(Sc(s,a,d),s=s.sibling;s!==null;)Sc(s,a,d),s=s.sibling}var mt=null,cn=!1;function is(s,a,d){for(d=d.child;d!==null;)bf(s,a,d),d=d.sibling}function bf(s,a,d){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(sa,d)}catch{}switch(d.tag){case 5:bt||bi(d,a);case 6:var f=mt,m=cn;mt=null,is(s,a,d),mt=f,cn=m,mt!==null&&(cn?(s=mt,d=d.stateNode,s.nodeType===8?s.parentNode.removeChild(d):s.removeChild(d)):mt.removeChild(d.stateNode));break;case 18:mt!==null&&(cn?(s=mt,d=d.stateNode,s.nodeType===8?Fl(s.parentNode,d):s.nodeType===1&&Fl(s,d),Wi(s)):Fl(mt,d.stateNode));break;case 4:f=mt,m=cn,mt=d.stateNode.containerInfo,cn=!0,is(s,a,d),mt=f,cn=m;break;case 0:case 11:case 14:case 15:if(!bt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,k=x.destroy;x=x.tag,k!==void 0&&((x&2)!==0||(x&4)!==0)&&Nc(d,a,k),m=m.next}while(m!==f)}is(s,a,d);break;case 1:if(!bt&&(bi(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(P){Xe(d,a,P)}is(s,a,d);break;case 21:is(s,a,d);break;case 22:d.mode&1?(bt=(f=bt)||d.memoizedState!==null,is(s,a,d),bt=f):is(s,a,d);break;default:is(s,a,d)}}function jf(s){var a=s.updateQueue;if(a!==null){s.updateQueue=null;var d=s.stateNode;d===null&&(d=s.stateNode=new ry),a.forEach(function(f){var m=my.bind(null,s,f);d.has(f)||(d.add(f),f.then(m,m))})}}function dn(s,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var m=d[f];try{var x=s,k=a,P=k;e:for(;P!==null;){switch(P.tag){case 5:mt=P.stateNode,cn=!1;break e;case 3:mt=P.stateNode.containerInfo,cn=!0;break e;case 4:mt=P.stateNode.containerInfo,cn=!0;break e}P=P.return}if(mt===null)throw Error(n(160));bf(x,k,m),mt=null,cn=!1;var T=m.alternate;T!==null&&(T.return=null),m.return=null}catch(H){Xe(m,a,H)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)wf(a,s),a=a.sibling}function wf(s,a){var d=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(dn(a,s),yn(s),f&4){try{ur(3,s,s.return),Ha(3,s)}catch(pe){Xe(s,s.return,pe)}try{ur(5,s,s.return)}catch(pe){Xe(s,s.return,pe)}}break;case 1:dn(a,s),yn(s),f&512&&d!==null&&bi(d,d.return);break;case 5:if(dn(a,s),yn(s),f&512&&d!==null&&bi(d,d.return),s.flags&32){var m=s.stateNode;try{Je(m,"")}catch(pe){Xe(s,s.return,pe)}}if(f&4&&(m=s.stateNode,m!=null)){var x=s.memoizedProps,k=d!==null?d.memoizedProps:x,P=s.type,T=s.updateQueue;if(s.updateQueue=null,T!==null)try{P==="input"&&x.type==="radio"&&x.name!=null&&Hn(m,x),sl(P,k);var H=sl(P,x);for(k=0;k<T.length;k+=2){var ee=T[k],ne=T[k+1];ee==="style"?Zr(m,ne):ee==="dangerouslySetInnerHTML"?Ke(m,ne):ee==="children"?Je(m,ne):A(m,ee,ne,H)}switch(P){case"input":kn(m,x);break;case"textarea":St(m,x);break;case"select":var Z=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var de=x.value;de!=null?fe(m,!!x.multiple,de,!1):Z!==!!x.multiple&&(x.defaultValue!=null?fe(m,!!x.multiple,x.defaultValue,!0):fe(m,!!x.multiple,x.multiple?[]:"",!1))}m[er]=x}catch(pe){Xe(s,s.return,pe)}}break;case 6:if(dn(a,s),yn(s),f&4){if(s.stateNode===null)throw Error(n(162));m=s.stateNode,x=s.memoizedProps;try{m.nodeValue=x}catch(pe){Xe(s,s.return,pe)}}break;case 3:if(dn(a,s),yn(s),f&4&&d!==null&&d.memoizedState.isDehydrated)try{Wi(a.containerInfo)}catch(pe){Xe(s,s.return,pe)}break;case 4:dn(a,s),yn(s);break;case 13:dn(a,s),yn(s),m=s.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Rc=Ze())),f&4&&jf(s);break;case 22:if(ee=d!==null&&d.memoizedState!==null,s.mode&1?(bt=(H=bt)||ee,dn(a,s),bt=H):dn(a,s),yn(s),f&8192){if(H=s.memoizedState!==null,(s.stateNode.isHidden=H)&&!ee&&(s.mode&1)!==0)for(ue=s,ee=s.child;ee!==null;){for(ne=ue=ee;ue!==null;){switch(Z=ue,de=Z.child,Z.tag){case 0:case 11:case 14:case 15:ur(4,Z,Z.return);break;case 1:bi(Z,Z.return);var he=Z.stateNode;if(typeof he.componentWillUnmount=="function"){f=Z,d=Z.return;try{a=f,he.props=a.memoizedProps,he.state=a.memoizedState,he.componentWillUnmount()}catch(pe){Xe(f,d,pe)}}break;case 5:bi(Z,Z.return);break;case 22:if(Z.memoizedState!==null){kf(ne);continue}}de!==null?(de.return=Z,ue=de):kf(ne)}ee=ee.sibling}e:for(ee=null,ne=s;;){if(ne.tag===5){if(ee===null){ee=ne;try{m=ne.stateNode,H?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(P=ne.stateNode,T=ne.memoizedProps.style,k=T!=null&&T.hasOwnProperty("display")?T.display:null,P.style.display=sn("display",k))}catch(pe){Xe(s,s.return,pe)}}}else if(ne.tag===6){if(ee===null)try{ne.stateNode.nodeValue=H?"":ne.memoizedProps}catch(pe){Xe(s,s.return,pe)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===s)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===s)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===s)break e;ee===ne&&(ee=null),ne=ne.return}ee===ne&&(ee=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:dn(a,s),yn(s),f&4&&jf(s);break;case 21:break;default:dn(a,s),yn(s)}}function yn(s){var a=s.flags;if(a&2){try{e:{for(var d=s.return;d!==null;){if(vf(d)){var f=d;break e}d=d.return}throw Error(n(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Je(m,""),f.flags&=-33);var x=yf(s);Sc(s,x,m);break;case 3:case 4:var k=f.stateNode.containerInfo,P=yf(s);kc(s,P,k);break;default:throw Error(n(161))}}catch(T){Xe(s,s.return,T)}s.flags&=-3}a&4096&&(s.flags&=-4097)}function oy(s,a,d){ue=s,Nf(s)}function Nf(s,a,d){for(var f=(s.mode&1)!==0;ue!==null;){var m=ue,x=m.child;if(m.tag===22&&f){var k=m.memoizedState!==null||Wa;if(!k){var P=m.alternate,T=P!==null&&P.memoizedState!==null||bt;P=Wa;var H=bt;if(Wa=k,(bt=T)&&!H)for(ue=m;ue!==null;)k=ue,T=k.child,k.tag===22&&k.memoizedState!==null?Sf(m):T!==null?(T.return=k,ue=T):Sf(m);for(;x!==null;)ue=x,Nf(x),x=x.sibling;ue=m,Wa=P,bt=H}_f(s)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ue=x):_f(s)}}function _f(s){for(;ue!==null;){var a=ue;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:bt||Ha(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!bt)if(d===null)f.componentDidMount();else{var m=a.elementType===a.type?d.memoizedProps:ln(a.type,d.memoizedProps);f.componentDidUpdate(m,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&_h(a,x,f);break;case 3:var k=a.updateQueue;if(k!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}_h(a,k,d)}break;case 5:var P=a.stateNode;if(d===null&&a.flags&4){d=P;var T=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&d.focus();break;case"img":T.src&&(d.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var H=a.alternate;if(H!==null){var ee=H.memoizedState;if(ee!==null){var ne=ee.dehydrated;ne!==null&&Wi(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}bt||a.flags&512&&_c(a)}catch(Z){Xe(a,a.return,Z)}}if(a===s){ue=null;break}if(d=a.sibling,d!==null){d.return=a.return,ue=d;break}ue=a.return}}function kf(s){for(;ue!==null;){var a=ue;if(a===s){ue=null;break}var d=a.sibling;if(d!==null){d.return=a.return,ue=d;break}ue=a.return}}function Sf(s){for(;ue!==null;){var a=ue;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{Ha(4,a)}catch(T){Xe(a,d,T)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var m=a.return;try{f.componentDidMount()}catch(T){Xe(a,m,T)}}var x=a.return;try{_c(a)}catch(T){Xe(a,x,T)}break;case 5:var k=a.return;try{_c(a)}catch(T){Xe(a,k,T)}}}catch(T){Xe(a,a.return,T)}if(a===s){ue=null;break}var P=a.sibling;if(P!==null){P.return=a.return,ue=P;break}ue=a.return}}var ly=Math.ceil,Va=z.ReactCurrentDispatcher,Cc=z.ReactCurrentOwner,Xt=z.ReactCurrentBatchConfig,Te=0,ut=null,it=null,gt=0,Ut=0,ji=Zn(0),lt=0,hr=null,Ps=0,qa=0,Ec=0,fr=null,Tt=null,Rc=0,wi=1/0,Dn=null,Ya=!1,Pc=null,rs=null,Qa=!1,as=null,Ka=0,pr=0,Ac=null,Xa=-1,Ga=0;function Et(){return(Te&6)!==0?Ze():Xa!==-1?Xa:Xa=Ze()}function os(s){return(s.mode&1)===0?1:(Te&2)!==0&&gt!==0?gt&-gt:Vv.transition!==null?(Ga===0&&(Ga=vu()),Ga):(s=Le,s!==0||(s=window.event,s=s===void 0?16:Cu(s.type)),s)}function un(s,a,d,f){if(50<pr)throw pr=0,Ac=null,Error(n(185));Ii(s,d,f),((Te&2)===0||s!==ut)&&(s===ut&&((Te&2)===0&&(qa|=d),lt===4&&ls(s,gt)),Dt(s,f),d===1&&Te===0&&(a.mode&1)===0&&(wi=Ze()+500,ka&&ts()))}function Dt(s,a){var d=s.callbackNode;Vx(s,a);var f=aa(s,s===ut?gt:0);if(f===0)d!==null&&mu(d),s.callbackNode=null,s.callbackPriority=0;else if(a=f&-f,s.callbackPriority!==a){if(d!=null&&mu(d),a===1)s.tag===0?Hv(Ef.bind(null,s)):hh(Ef.bind(null,s)),Bv(function(){(Te&6)===0&&ts()}),d=null;else{switch(yu(f)){case 1:d=dl;break;case 4:d=gu;break;case 16:d=na;break;case 536870912:d=xu;break;default:d=na}d=Of(d,Cf.bind(null,s))}s.callbackPriority=a,s.callbackNode=d}}function Cf(s,a){if(Xa=-1,Ga=0,(Te&6)!==0)throw Error(n(327));var d=s.callbackNode;if(Ni()&&s.callbackNode!==d)return null;var f=aa(s,s===ut?gt:0);if(f===0)return null;if((f&30)!==0||(f&s.expiredLanes)!==0||a)a=Ja(s,f);else{a=f;var m=Te;Te|=2;var x=Pf();(ut!==s||gt!==a)&&(Dn=null,wi=Ze()+500,Ts(s,a));do try{uy();break}catch(P){Rf(s,P)}while(!0);Kl(),Va.current=x,Te=m,it!==null?a=0:(ut=null,gt=0,a=lt)}if(a!==0){if(a===2&&(m=ul(s),m!==0&&(f=m,a=Tc(s,m))),a===1)throw d=hr,Ts(s,0),ls(s,f),Dt(s,Ze()),d;if(a===6)ls(s,f);else{if(m=s.current.alternate,(f&30)===0&&!cy(m)&&(a=Ja(s,f),a===2&&(x=ul(s),x!==0&&(f=x,a=Tc(s,x))),a===1))throw d=hr,Ts(s,0),ls(s,f),Dt(s,Ze()),d;switch(s.finishedWork=m,s.finishedLanes=f,a){case 0:case 1:throw Error(n(345));case 2:Ds(s,Tt,Dn);break;case 3:if(ls(s,f),(f&130023424)===f&&(a=Rc+500-Ze(),10<a)){if(aa(s,0)!==0)break;if(m=s.suspendedLanes,(m&f)!==f){Et(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Il(Ds.bind(null,s,Tt,Dn),a);break}Ds(s,Tt,Dn);break;case 4:if(ls(s,f),(f&4194240)===f)break;for(a=s.eventTimes,m=-1;0<f;){var k=31-rn(f);x=1<<k,k=a[k],k>m&&(m=k),f&=~x}if(f=m,f=Ze()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ly(f/1960))-f,10<f){s.timeoutHandle=Il(Ds.bind(null,s,Tt,Dn),f);break}Ds(s,Tt,Dn);break;case 5:Ds(s,Tt,Dn);break;default:throw Error(n(329))}}}return Dt(s,Ze()),s.callbackNode===d?Cf.bind(null,s):null}function Tc(s,a){var d=fr;return s.current.memoizedState.isDehydrated&&(Ts(s,a).flags|=256),s=Ja(s,a),s!==2&&(a=Tt,Tt=d,a!==null&&Dc(a)),s}function Dc(s){Tt===null?Tt=s:Tt.push.apply(Tt,s)}function cy(s){for(var a=s;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var m=d[f],x=m.getSnapshot;m=m.value;try{if(!an(x(),m))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ls(s,a){for(a&=~Ec,a&=~qa,s.suspendedLanes|=a,s.pingedLanes&=~a,s=s.expirationTimes;0<a;){var d=31-rn(a),f=1<<d;s[d]=-1,a&=~f}}function Ef(s){if((Te&6)!==0)throw Error(n(327));Ni();var a=aa(s,0);if((a&1)===0)return Dt(s,Ze()),null;var d=Ja(s,a);if(s.tag!==0&&d===2){var f=ul(s);f!==0&&(a=f,d=Tc(s,f))}if(d===1)throw d=hr,Ts(s,0),ls(s,a),Dt(s,Ze()),d;if(d===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=a,Ds(s,Tt,Dn),Dt(s,Ze()),null}function Mc(s,a){var d=Te;Te|=1;try{return s(a)}finally{Te=d,Te===0&&(wi=Ze()+500,ka&&ts())}}function As(s){as!==null&&as.tag===0&&(Te&6)===0&&Ni();var a=Te;Te|=1;var d=Xt.transition,f=Le;try{if(Xt.transition=null,Le=1,s)return s()}finally{Le=f,Xt.transition=d,Te=a,(Te&6)===0&&ts()}}function Lc(){Ut=ji.current,We(ji)}function Ts(s,a){s.finishedWork=null,s.finishedLanes=0;var d=s.timeoutHandle;if(d!==-1&&(s.timeoutHandle=-1,Fv(d)),it!==null)for(d=it.return;d!==null;){var f=d;switch(Hl(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Na();break;case 3:vi(),We(Rt),We(xt),sc();break;case 5:tc(f);break;case 4:vi();break;case 13:We(qe);break;case 19:We(qe);break;case 10:Xl(f.type._context);break;case 22:case 23:Lc()}d=d.return}if(ut=s,it=s=cs(s.current,null),gt=Ut=a,lt=0,hr=null,Ec=qa=Ps=0,Tt=fr=null,Cs!==null){for(a=0;a<Cs.length;a++)if(d=Cs[a],f=d.interleaved,f!==null){d.interleaved=null;var m=f.next,x=d.pending;if(x!==null){var k=x.next;x.next=m,f.next=k}d.pending=f}Cs=null}return s}function Rf(s,a){do{var d=it;try{if(Kl(),La.current=Fa,Oa){for(var f=Ye.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Oa=!1}if(Rs=0,dt=ot=Ye=null,ar=!1,or=0,Cc.current=null,d===null||d.return===null){lt=1,hr=a,it=null;break}e:{var x=s,k=d.return,P=d,T=a;if(a=gt,P.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var H=T,ee=P,ne=ee.tag;if((ee.mode&1)===0&&(ne===0||ne===11||ne===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var de=Zh(k);if(de!==null){de.flags&=-257,ef(de,k,P,x,a),de.mode&1&&Jh(x,H,a),a=de,T=H;var he=a.updateQueue;if(he===null){var pe=new Set;pe.add(T),a.updateQueue=pe}else he.add(T);break e}else{if((a&1)===0){Jh(x,H,a),Oc();break e}T=Error(n(426))}}else if(Ve&&P.mode&1){var et=Zh(k);if(et!==null){(et.flags&65536)===0&&(et.flags|=256),ef(et,k,P,x,a),Yl(yi(T,P));break e}}x=T=yi(T,P),lt!==4&&(lt=2),fr===null?fr=[x]:fr.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var B=Xh(x,T,a);Nh(x,B);break e;case 1:P=T;var O=x.type,$=x.stateNode;if((x.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(rs===null||!rs.has($)))){x.flags|=65536,a&=-a,x.lanes|=a;var se=Gh(x,P,a);Nh(x,se);break e}}x=x.return}while(x!==null)}Tf(d)}catch(xe){a=xe,it===d&&d!==null&&(it=d=d.return);continue}break}while(!0)}function Pf(){var s=Va.current;return Va.current=Fa,s===null?Fa:s}function Oc(){(lt===0||lt===3||lt===2)&&(lt=4),ut===null||(Ps&268435455)===0&&(qa&268435455)===0||ls(ut,gt)}function Ja(s,a){var d=Te;Te|=2;var f=Pf();(ut!==s||gt!==a)&&(Dn=null,Ts(s,a));do try{dy();break}catch(m){Rf(s,m)}while(!0);if(Kl(),Te=d,Va.current=f,it!==null)throw Error(n(261));return ut=null,gt=0,lt}function dy(){for(;it!==null;)Af(it)}function uy(){for(;it!==null&&!Ox();)Af(it)}function Af(s){var a=Lf(s.alternate,s,Ut);s.memoizedProps=s.pendingProps,a===null?Tf(s):it=a,Cc.current=null}function Tf(s){var a=s;do{var d=a.alternate;if(s=a.return,(a.flags&32768)===0){if(d=sy(d,a,Ut),d!==null){it=d;return}}else{if(d=iy(d,a),d!==null){d.flags&=32767,it=d;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{lt=6,it=null;return}}if(a=a.sibling,a!==null){it=a;return}it=a=s}while(a!==null);lt===0&&(lt=5)}function Ds(s,a,d){var f=Le,m=Xt.transition;try{Xt.transition=null,Le=1,hy(s,a,d,f)}finally{Xt.transition=m,Le=f}return null}function hy(s,a,d,f){do Ni();while(as!==null);if((Te&6)!==0)throw Error(n(327));d=s.finishedWork;var m=s.finishedLanes;if(d===null)return null;if(s.finishedWork=null,s.finishedLanes=0,d===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var x=d.lanes|d.childLanes;if(qx(s,x),s===ut&&(it=ut=null,gt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||Qa||(Qa=!0,Of(na,function(){return Ni(),null})),x=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||x){x=Xt.transition,Xt.transition=null;var k=Le;Le=1;var P=Te;Te|=4,Cc.current=null,ay(s,d),wf(d,s),Tv(Ol),ca=!!Ll,Ol=Ll=null,s.current=d,oy(d),zx(),Te=P,Le=k,Xt.transition=x}else s.current=d;if(Qa&&(Qa=!1,as=s,Ka=m),x=s.pendingLanes,x===0&&(rs=null),Bx(d.stateNode),Dt(s,Ze()),a!==null)for(f=s.onRecoverableError,d=0;d<a.length;d++)m=a[d],f(m.value,{componentStack:m.stack,digest:m.digest});if(Ya)throw Ya=!1,s=Pc,Pc=null,s;return(Ka&1)!==0&&s.tag!==0&&Ni(),x=s.pendingLanes,(x&1)!==0?s===Ac?pr++:(pr=0,Ac=s):pr=0,ts(),null}function Ni(){if(as!==null){var s=yu(Ka),a=Xt.transition,d=Le;try{if(Xt.transition=null,Le=16>s?16:s,as===null)var f=!1;else{if(s=as,as=null,Ka=0,(Te&6)!==0)throw Error(n(331));var m=Te;for(Te|=4,ue=s.current;ue!==null;){var x=ue,k=x.child;if((ue.flags&16)!==0){var P=x.deletions;if(P!==null){for(var T=0;T<P.length;T++){var H=P[T];for(ue=H;ue!==null;){var ee=ue;switch(ee.tag){case 0:case 11:case 15:ur(8,ee,x)}var ne=ee.child;if(ne!==null)ne.return=ee,ue=ne;else for(;ue!==null;){ee=ue;var Z=ee.sibling,de=ee.return;if(xf(ee),ee===H){ue=null;break}if(Z!==null){Z.return=de,ue=Z;break}ue=de}}}var he=x.alternate;if(he!==null){var pe=he.child;if(pe!==null){he.child=null;do{var et=pe.sibling;pe.sibling=null,pe=et}while(pe!==null)}}ue=x}}if((x.subtreeFlags&2064)!==0&&k!==null)k.return=x,ue=k;else e:for(;ue!==null;){if(x=ue,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ur(9,x,x.return)}var B=x.sibling;if(B!==null){B.return=x.return,ue=B;break e}ue=x.return}}var O=s.current;for(ue=O;ue!==null;){k=ue;var $=k.child;if((k.subtreeFlags&2064)!==0&&$!==null)$.return=k,ue=$;else e:for(k=O;ue!==null;){if(P=ue,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Ha(9,P)}}catch(xe){Xe(P,P.return,xe)}if(P===k){ue=null;break e}var se=P.sibling;if(se!==null){se.return=P.return,ue=se;break e}ue=P.return}}if(Te=m,ts(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(sa,s)}catch{}f=!0}return f}finally{Le=d,Xt.transition=a}}return!1}function Df(s,a,d){a=yi(d,a),a=Xh(s,a,1),s=ss(s,a,1),a=Et(),s!==null&&(Ii(s,1,a),Dt(s,a))}function Xe(s,a,d){if(s.tag===3)Df(s,s,d);else for(;a!==null;){if(a.tag===3){Df(a,s,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(rs===null||!rs.has(f))){s=yi(d,s),s=Gh(a,s,1),a=ss(a,s,1),s=Et(),a!==null&&(Ii(a,1,s),Dt(a,s));break}}a=a.return}}function fy(s,a,d){var f=s.pingCache;f!==null&&f.delete(a),a=Et(),s.pingedLanes|=s.suspendedLanes&d,ut===s&&(gt&d)===d&&(lt===4||lt===3&&(gt&130023424)===gt&&500>Ze()-Rc?Ts(s,0):Ec|=d),Dt(s,a)}function Mf(s,a){a===0&&((s.mode&1)===0?a=1:(a=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var d=Et();s=Pn(s,a),s!==null&&(Ii(s,a,d),Dt(s,d))}function py(s){var a=s.memoizedState,d=0;a!==null&&(d=a.retryLane),Mf(s,d)}function my(s,a){var d=0;switch(s.tag){case 13:var f=s.stateNode,m=s.memoizedState;m!==null&&(d=m.retryLane);break;case 19:f=s.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(a),Mf(s,d)}var Lf;Lf=function(s,a,d){if(s!==null)if(s.memoizedProps!==a.pendingProps||Rt.current)At=!0;else{if((s.lanes&d)===0&&(a.flags&128)===0)return At=!1,ny(s,a,d);At=(s.flags&131072)!==0}else At=!1,Ve&&(a.flags&1048576)!==0&&fh(a,Ca,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;Ua(s,a),s=a.pendingProps;var m=ui(a,xt.current);xi(a,d),m=ac(null,a,f,s,m,d);var x=oc();return a.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Pt(f)?(x=!0,_a(a)):x=!1,a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Zl(a),m.updater=Ba,a.stateNode=m,m._reactInternals=a,fc(a,f,s,d),a=xc(null,a,f,!0,x,d)):(a.tag=0,Ve&&x&&Wl(a),Ct(null,a,m,d),a=a.child),a;case 16:f=a.elementType;e:{switch(Ua(s,a),s=a.pendingProps,m=f._init,f=m(f._payload),a.type=f,m=a.tag=xy(f),s=ln(f,s),m){case 0:a=gc(null,a,f,s,d);break e;case 1:a=of(null,a,f,s,d);break e;case 11:a=tf(null,a,f,s,d);break e;case 14:a=nf(null,a,f,ln(f.type,s),d);break e}throw Error(n(306,f,""))}return a;case 0:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:ln(f,m),gc(s,a,f,m,d);case 1:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:ln(f,m),of(s,a,f,m,d);case 3:e:{if(lf(a),s===null)throw Error(n(387));f=a.pendingProps,x=a.memoizedState,m=x.element,wh(s,a),Da(a,f,null,d);var k=a.memoizedState;if(f=k.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){m=yi(Error(n(423)),a),a=cf(s,a,f,d,m);break e}else if(f!==m){m=yi(Error(n(424)),a),a=cf(s,a,f,d,m);break e}else for($t=Jn(a.stateNode.containerInfo.firstChild),Bt=a,Ve=!0,on=null,d=bh(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(pi(),f===m){a=Tn(s,a,d);break e}Ct(s,a,f,d)}a=a.child}return a;case 5:return kh(a),s===null&&ql(a),f=a.type,m=a.pendingProps,x=s!==null?s.memoizedProps:null,k=m.children,zl(f,m)?k=null:x!==null&&zl(f,x)&&(a.flags|=32),af(s,a),Ct(s,a,k,d),a.child;case 6:return s===null&&ql(a),null;case 13:return df(s,a,d);case 4:return ec(a,a.stateNode.containerInfo),f=a.pendingProps,s===null?a.child=mi(a,null,f,d):Ct(s,a,f,d),a.child;case 11:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:ln(f,m),tf(s,a,f,m,d);case 7:return Ct(s,a,a.pendingProps,d),a.child;case 8:return Ct(s,a,a.pendingProps.children,d),a.child;case 12:return Ct(s,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,m=a.pendingProps,x=a.memoizedProps,k=m.value,Be(Pa,f._currentValue),f._currentValue=k,x!==null)if(an(x.value,k)){if(x.children===m.children&&!Rt.current){a=Tn(s,a,d);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var P=x.dependencies;if(P!==null){k=x.child;for(var T=P.firstContext;T!==null;){if(T.context===f){if(x.tag===1){T=An(-1,d&-d),T.tag=2;var H=x.updateQueue;if(H!==null){H=H.shared;var ee=H.pending;ee===null?T.next=T:(T.next=ee.next,ee.next=T),H.pending=T}}x.lanes|=d,T=x.alternate,T!==null&&(T.lanes|=d),Gl(x.return,d,a),P.lanes|=d;break}T=T.next}}else if(x.tag===10)k=x.type===a.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(n(341));k.lanes|=d,P=k.alternate,P!==null&&(P.lanes|=d),Gl(k,d,a),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===a){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}Ct(s,a,m.children,d),a=a.child}return a;case 9:return m=a.type,f=a.pendingProps.children,xi(a,d),m=Qt(m),f=f(m),a.flags|=1,Ct(s,a,f,d),a.child;case 14:return f=a.type,m=ln(f,a.pendingProps),m=ln(f.type,m),nf(s,a,f,m,d);case 15:return sf(s,a,a.type,a.pendingProps,d);case 17:return f=a.type,m=a.pendingProps,m=a.elementType===f?m:ln(f,m),Ua(s,a),a.tag=1,Pt(f)?(s=!0,_a(a)):s=!1,xi(a,d),Qh(a,f,m),fc(a,f,m,d),xc(null,a,f,!0,s,d);case 19:return hf(s,a,d);case 22:return rf(s,a,d)}throw Error(n(156,a.tag))};function Of(s,a){return pu(s,a)}function gy(s,a,d,f){this.tag=s,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gt(s,a,d,f){return new gy(s,a,d,f)}function zc(s){return s=s.prototype,!(!s||!s.isReactComponent)}function xy(s){if(typeof s=="function")return zc(s)?1:0;if(s!=null){if(s=s.$$typeof,s===F)return 11;if(s===oe)return 14}return 2}function cs(s,a){var d=s.alternate;return d===null?(d=Gt(s.tag,a,s.key,s.mode),d.elementType=s.elementType,d.type=s.type,d.stateNode=s.stateNode,d.alternate=s,s.alternate=d):(d.pendingProps=a,d.type=s.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=s.flags&14680064,d.childLanes=s.childLanes,d.lanes=s.lanes,d.child=s.child,d.memoizedProps=s.memoizedProps,d.memoizedState=s.memoizedState,d.updateQueue=s.updateQueue,a=s.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=s.sibling,d.index=s.index,d.ref=s.ref,d}function Za(s,a,d,f,m,x){var k=2;if(f=s,typeof s=="function")zc(s)&&(k=1);else if(typeof s=="string")k=5;else e:switch(s){case D:return Ms(d.children,m,x,a);case C:k=8,m|=8;break;case L:return s=Gt(12,d,a,m|2),s.elementType=L,s.lanes=x,s;case G:return s=Gt(13,d,a,m),s.elementType=G,s.lanes=x,s;case W:return s=Gt(19,d,a,m),s.elementType=W,s.lanes=x,s;case ie:return eo(d,m,x,a);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case V:k=10;break e;case X:k=9;break e;case F:k=11;break e;case oe:k=14;break e;case U:k=16,f=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return a=Gt(k,d,a,m),a.elementType=s,a.type=f,a.lanes=x,a}function Ms(s,a,d,f){return s=Gt(7,s,f,a),s.lanes=d,s}function eo(s,a,d,f){return s=Gt(22,s,f,a),s.elementType=ie,s.lanes=d,s.stateNode={isHidden:!1},s}function Ic(s,a,d){return s=Gt(6,s,null,a),s.lanes=d,s}function Fc(s,a,d){return a=Gt(4,s.children!==null?s.children:[],s.key,a),a.lanes=d,a.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},a}function vy(s,a,d,f,m){this.tag=a,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Bc(s,a,d,f,m,x,k,P,T){return s=new vy(s,a,d,P,T),a===1?(a=1,x===!0&&(a|=8)):a=0,x=Gt(3,null,null,a),s.current=x,x.stateNode=s,x.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(x),s}function yy(s,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:s,containerInfo:a,implementation:d}}function zf(s){if(!s)return es;s=s._reactInternals;e:{if(ws(s)!==s||s.tag!==1)throw Error(n(170));var a=s;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(s.tag===1){var d=s.type;if(Pt(d))return dh(s,d,a)}return a}function If(s,a,d,f,m,x,k,P,T){return s=Bc(d,f,!0,s,m,x,k,P,T),s.context=zf(null),d=s.current,f=Et(),m=os(d),x=An(f,m),x.callback=a??null,ss(d,x,m),s.current.lanes=m,Ii(s,m,f),Dt(s,f),s}function to(s,a,d,f){var m=a.current,x=Et(),k=os(m);return d=zf(d),a.context===null?a.context=d:a.pendingContext=d,a=An(x,k),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ss(m,a,k),s!==null&&(un(s,m,k,x),Ta(s,m,k)),k}function no(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Ff(s,a){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var d=s.retryLane;s.retryLane=d!==0&&d<a?d:a}}function $c(s,a){Ff(s,a),(s=s.alternate)&&Ff(s,a)}function by(){return null}var Bf=typeof reportError=="function"?reportError:function(s){console.error(s)};function Uc(s){this._internalRoot=s}so.prototype.render=Uc.prototype.render=function(s){var a=this._internalRoot;if(a===null)throw Error(n(409));to(s,a,null,null)},so.prototype.unmount=Uc.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var a=s.containerInfo;As(function(){to(null,s,null,null)}),a[Sn]=null}};function so(s){this._internalRoot=s}so.prototype.unstable_scheduleHydration=function(s){if(s){var a=wu();s={blockedOn:null,target:s,priority:a};for(var d=0;d<Kn.length&&a!==0&&a<Kn[d].priority;d++);Kn.splice(d,0,s),d===0&&ku(s)}};function Wc(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function io(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function $f(){}function jy(s,a,d,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var H=no(k);x.call(H)}}var k=If(a,f,s,0,null,!1,!1,"",$f);return s._reactRootContainer=k,s[Sn]=k.current,Ji(s.nodeType===8?s.parentNode:s),As(),k}for(;m=s.lastChild;)s.removeChild(m);if(typeof f=="function"){var P=f;f=function(){var H=no(T);P.call(H)}}var T=Bc(s,0,!1,null,null,!1,!1,"",$f);return s._reactRootContainer=T,s[Sn]=T.current,Ji(s.nodeType===8?s.parentNode:s),As(function(){to(a,T,d,f)}),T}function ro(s,a,d,f,m){var x=d._reactRootContainer;if(x){var k=x;if(typeof m=="function"){var P=m;m=function(){var T=no(k);P.call(T)}}to(a,k,s,m)}else k=jy(d,a,s,m,f);return no(k)}bu=function(s){switch(s.tag){case 3:var a=s.stateNode;if(a.current.memoizedState.isDehydrated){var d=zi(a.pendingLanes);d!==0&&(fl(a,d|1),Dt(a,Ze()),(Te&6)===0&&(wi=Ze()+500,ts()))}break;case 13:As(function(){var f=Pn(s,1);if(f!==null){var m=Et();un(f,s,1,m)}}),$c(s,1)}},pl=function(s){if(s.tag===13){var a=Pn(s,134217728);if(a!==null){var d=Et();un(a,s,134217728,d)}$c(s,134217728)}},ju=function(s){if(s.tag===13){var a=os(s),d=Pn(s,a);if(d!==null){var f=Et();un(d,s,a,f)}$c(s,a)}},wu=function(){return Le},Nu=function(s,a){var d=Le;try{return Le=s,a()}finally{Le=d}},al=function(s,a,d){switch(a){case"input":if(kn(s,d),a=d.name,d.type==="radio"&&a!=null){for(d=s;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==s&&f.form===s.form){var m=wa(f);if(!m)throw Error(n(90));nn(f),kn(f,m)}}}break;case"textarea":St(s,d);break;case"select":a=d.value,a!=null&&fe(s,!!d.multiple,a,!1)}},ou=Mc,lu=As;var wy={usingClientEntryPoint:!1,Events:[tr,ci,wa,ru,au,Mc]},mr={findFiberByHostInstance:Ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ny={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=hu(s),s===null?null:s.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{sa=ao.inject(Ny),mn=ao}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy,Mt.createPortal=function(s,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wc(a))throw Error(n(200));return yy(s,a,null,d)},Mt.createRoot=function(s,a){if(!Wc(s))throw Error(n(299));var d=!1,f="",m=Bf;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(m=a.onRecoverableError)),a=Bc(s,1,!1,null,null,d,!1,f,m),s[Sn]=a.current,Ji(s.nodeType===8?s.parentNode:s),new Uc(a)},Mt.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var a=s._reactInternals;if(a===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=hu(a),s=s===null?null:s.stateNode,s},Mt.flushSync=function(s){return As(s)},Mt.hydrate=function(s,a,d){if(!io(a))throw Error(n(200));return ro(null,s,a,!0,d)},Mt.hydrateRoot=function(s,a,d){if(!Wc(s))throw Error(n(405));var f=d!=null&&d.hydratedSources||null,m=!1,x="",k=Bf;if(d!=null&&(d.unstable_strictMode===!0&&(m=!0),d.identifierPrefix!==void 0&&(x=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),a=If(a,null,s,1,d??null,m,!1,x,k),s[Sn]=a.current,Ji(s),f)for(s=0;s<f.length;s++)d=f[s],m=d._getVersion,m=m(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,m]:a.mutableSourceEagerHydrationData.push(d,m);return new so(a)},Mt.render=function(s,a,d){if(!io(a))throw Error(n(200));return ro(null,s,a,!1,d)},Mt.unmountComponentAtNode=function(s){if(!io(s))throw Error(n(40));return s._reactRootContainer?(As(function(){ro(null,null,s,!1,function(){s._reactRootContainer=null,s[Sn]=null})}),!0):!1},Mt.unstable_batchedUpdates=Mc,Mt.unstable_renderSubtreeIntoContainer=function(s,a,d,f){if(!io(d))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return ro(s,a,d,!1,f)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var Kf;function Ym(){if(Kf)return qc.exports;Kf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),qc.exports=My(),qc.exports}var Xf;function Ly(){if(Xf)return oo;Xf=1;var t=Ym();return oo.createRoot=t.createRoot,oo.hydrateRoot=t.hydrateRoot,oo}var Oy=Ly();const zy=Vm(Oy);Ym();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mr(){return Mr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mr.apply(this,arguments)}var hs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(hs||(hs={}));const Gf="popstate";function Iy(t){t===void 0&&(t={});function e(i,o){let{pathname:l,search:c,hash:u}=i.location;return md("",{pathname:l,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:To(o)}return By(e,n,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Md(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fy(){return Math.random().toString(36).substr(2,8)}function Jf(t,e){return{usr:t.state,key:t.key,idx:e}}function md(t,e,n,i){return n===void 0&&(n=null),Mr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ai(e):e,{state:n,key:e&&e.key||i||Fy()})}function To(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ai(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function By(t,e,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,u=hs.Pop,h=null,p=g();p==null&&(p=0,c.replaceState(Mr({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function v(){u=hs.Pop;let y=g(),_=y==null?null:y-p;p=y,h&&h({action:u,location:N.location,delta:_})}function b(y,_){u=hs.Push;let S=md(N.location,y,_);p=g()+1;let A=Jf(S,p),z=N.createHref(S);try{c.pushState(A,"",z)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;o.location.assign(z)}l&&h&&h({action:u,location:N.location,delta:1})}function w(y,_){u=hs.Replace;let S=md(N.location,y,_);p=g();let A=Jf(S,p),z=N.createHref(S);c.replaceState(A,"",z),l&&h&&h({action:u,location:N.location,delta:0})}function j(y){let _=o.location.origin!=="null"?o.location.origin:o.location.href,S=typeof y=="string"?y:To(y);return S=S.replace(/ $/,"%20"),at(_,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,_)}let N={get action(){return u},get location(){return t(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Gf,v),h=y,()=>{o.removeEventListener(Gf,v),h=null}},createHref(y){return e(o,y)},createURL:j,encodeLocation(y){let _=j(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:b,replace:w,go(y){return c.go(y)}};return N}var Zf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zf||(Zf={}));function $y(t,e,n){return n===void 0&&(n="/"),Uy(t,e,n)}function Uy(t,e,n,i){let o=typeof e=="string"?Ai(e):e,l=Ld(o.pathname||"/",n);if(l==null)return null;let c=Qm(t);Wy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=t0(l);u=Jy(c[h],p)}return u}function Qm(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,c,u)=>{let h={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(at(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let p=gs([i,h.relativePath]),g=n.concat(h);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Qm(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Xy(p,l.index),routesMeta:g})};return t.forEach((l,c)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,c);else for(let h of Km(l.path))o(l,c,h)}),e}function Km(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Km(i.join("/")),u=[];return u.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function Wy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Gy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Hy=/^:[\w-]+$/,Vy=3,qy=2,Yy=1,Qy=10,Ky=-2,ep=t=>t==="*";function Xy(t,e){let n=t.split("/"),i=n.length;return n.some(ep)&&(i+=Ky),e&&(i+=qy),n.filter(o=>!ep(o)).reduce((o,l)=>o+(Hy.test(l)?Vy:l===""?Yy:Qy),i)}function Gy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function Jy(t,e,n){let{routesMeta:i}=t,o={},l="/",c=[];for(let u=0;u<i.length;++u){let h=i[u],p=u===i.length-1,g=l==="/"?e:e.slice(l.length)||"/",v=Zy({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),b=h.route;if(!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:gs([l,v.pathname]),pathnameBase:a0(gs([l,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(l=gs([l,v.pathnameBase]))}return c}function Zy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=e0(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((p,g,v)=>{let{paramName:b,isOptional:w}=g;if(b==="*"){let N=u[v]||"";c=l.slice(0,l.length-N.length).replace(/(.)\/+$/,"$1")}const j=u[v];return w&&!j?p[b]=void 0:p[b]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function e0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Md(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(i.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function t0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Md(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ld(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=t=>n0.test(t);function i0(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?Ai(t):t,l;if(n)if(s0(n))l=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Md(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?l=tp(n.substring(1),"/"):l=tp(n,e)}else l=e;return{pathname:l,search:o0(i),hash:l0(o)}}function tp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Kc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function r0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Xm(t,e){let n=r0(t);return e?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Gm(t,e,n,i){i===void 0&&(i=!1);let o;typeof t=="string"?o=Ai(t):(o=Mr({},t),at(!o.pathname||!o.pathname.includes("?"),Kc("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Kc("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Kc("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,u;if(c==null)u=n;else{let v=e.length-1;if(!i&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),v-=1;o.pathname=b.join("/")}u=v>=0?e[v]:"/"}let h=i0(o,u),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}const gs=t=>t.join("/").replace(/\/\/+/g,"/"),a0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jm=["post","put","patch","delete"];new Set(Jm);const d0=["get",...Jm];new Set(d0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lr(){return Lr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Lr.apply(this,arguments)}const Od=E.createContext(null),u0=E.createContext(null),Gs=E.createContext(null),Ho=E.createContext(null),ys=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=E.createContext(null);function h0(t,e){let{relative:n}=e===void 0?{}:e;Hr()||at(!1);let{basename:i,navigator:o}=E.useContext(Gs),{hash:l,pathname:c,search:u}=ng(t,{relative:n}),h=c;return i!=="/"&&(h=c==="/"?i:gs([i,c])),o.createHref({pathname:h,search:u,hash:l})}function Hr(){return E.useContext(Ho)!=null}function Vr(){return Hr()||at(!1),E.useContext(Ho).location}function eg(t){E.useContext(Gs).static||E.useLayoutEffect(t)}function Un(){let{isDataRoute:t}=E.useContext(ys);return t?k0():f0()}function f0(){Hr()||at(!1);let t=E.useContext(Od),{basename:e,future:n,navigator:i}=E.useContext(Gs),{matches:o}=E.useContext(ys),{pathname:l}=Vr(),c=JSON.stringify(Xm(o,n.v7_relativeSplatPath)),u=E.useRef(!1);return eg(()=>{u.current=!0}),E.useCallback(function(p,g){if(g===void 0&&(g={}),!u.current)return;if(typeof p=="number"){i.go(p);return}let v=Gm(p,JSON.parse(c),l,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:gs([e,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[e,i,c,l,t])}function tg(){let{matches:t}=E.useContext(ys),e=t[t.length-1];return e?e.params:{}}function ng(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=E.useContext(Gs),{matches:o}=E.useContext(ys),{pathname:l}=Vr(),c=JSON.stringify(Xm(o,i.v7_relativeSplatPath));return E.useMemo(()=>Gm(t,JSON.parse(c),l,n==="path"),[t,c,l,n])}function p0(t,e){return m0(t,e)}function m0(t,e,n,i){Hr()||at(!1);let{navigator:o}=E.useContext(Gs),{matches:l}=E.useContext(ys),c=l[l.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=Vr(),g;if(e){var v;let y=typeof e=="string"?Ai(e):e;h==="/"||(v=y.pathname)!=null&&v.startsWith(h)||at(!1),g=y}else g=p;let b=g.pathname||"/",w=b;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(y.length).join("/")}let j=$y(t,{pathname:w}),N=b0(j&&j.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:gs([h,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:gs([h,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,n,i);return e&&N?E.createElement(Ho.Provider,{value:{location:Lr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:hs.Pop}},N):N}function g0(){let t=_0(),e=c0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:o},n):null,null)}const x0=E.createElement(g0,null);class v0 extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(ys.Provider,{value:this.props.routeContext},E.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y0(t){let{routeContext:e,match:n,children:i}=t,o=E.useContext(Od);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ys.Provider,{value:e},i)}function b0(t,e,n,i){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let c=t,u=(o=n)==null?void 0:o.errors;if(u!=null){let g=c.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);g>=0||at(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,p=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:b,errors:w}=n,j=v.route.loader&&b[v.route.id]===void 0&&(!w||w[v.route.id]===void 0);if(v.route.lazy||j){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,v,b)=>{let w,j=!1,N=null,y=null;n&&(w=u&&v.route.id?u[v.route.id]:void 0,N=v.route.errorElement||x0,h&&(p<0&&b===0?(S0("route-fallback"),j=!0,y=null):p===b&&(j=!0,y=v.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,b+1)),S=()=>{let A;return w?A=N:j?A=y:v.route.Component?A=E.createElement(v.route.Component,null):v.route.element?A=v.route.element:A=g,E.createElement(y0,{match:v,routeContext:{outlet:g,matches:_,isDataRoute:n!=null},children:A})};return n&&(v.route.ErrorBoundary||v.route.errorElement||b===0)?E.createElement(v0,{location:n.location,revalidation:n.revalidation,component:N,error:w,children:S(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):S()},null)}var sg=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(sg||{}),ig=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(ig||{});function j0(t){let e=E.useContext(Od);return e||at(!1),e}function w0(t){let e=E.useContext(u0);return e||at(!1),e}function N0(t){let e=E.useContext(ys);return e||at(!1),e}function rg(t){let e=N0(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function _0(){var t;let e=E.useContext(Zm),n=w0(),i=rg();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function k0(){let{router:t}=j0(sg.UseNavigateStable),e=rg(ig.UseNavigateStable),n=E.useRef(!1);return eg(()=>{n.current=!0}),E.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,Lr({fromRouteId:e},l)))},[t,e])}const np={};function S0(t,e,n){np[t]||(np[t]=!0)}function C0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ge(t){at(!1)}function E0(t){let{basename:e="/",children:n=null,location:i,navigationType:o=hs.Pop,navigator:l,static:c=!1,future:u}=t;Hr()&&at(!1);let h=e.replace(/^\/*/,"/"),p=E.useMemo(()=>({basename:h,navigator:l,static:c,future:Lr({v7_relativeSplatPath:!1},u)}),[h,u,l,c]);typeof i=="string"&&(i=Ai(i));let{pathname:g="/",search:v="",hash:b="",state:w=null,key:j="default"}=i,N=E.useMemo(()=>{let y=Ld(g,h);return y==null?null:{location:{pathname:y,search:v,hash:b,state:w,key:j},navigationType:o}},[h,g,v,b,w,j,o]);return N==null?null:E.createElement(Gs.Provider,{value:p},E.createElement(Ho.Provider,{children:n,value:N}))}function R0(t){let{children:e,location:n}=t;return p0(gd(e),n)}new Promise(()=>{});function gd(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(i,o)=>{if(!E.isValidElement(i))return;let l=[...e,o];if(i.type===E.Fragment){n.push.apply(n,gd(i.props.children,l));return}i.type!==Ge&&at(!1),!i.props.index||!i.props.children||at(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=gd(i.props.children,l)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xd.apply(this,arguments)}function P0(t,e){if(t==null)return{};var n={},i=Object.keys(t),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function A0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function T0(t,e){return t.button===0&&(!e||e==="_self")&&!A0(t)}const D0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],M0="6";try{window.__reactRouterVersion=M0}catch{}const L0="startTransition",sp=Ay[L0];function O0(t){let{basename:e,children:n,future:i,window:o}=t,l=E.useRef();l.current==null&&(l.current=Iy({window:o,v5Compat:!0}));let c=l.current,[u,h]=E.useState({action:c.action,location:c.location}),{v7_startTransition:p}=i||{},g=E.useCallback(v=>{p&&sp?sp(()=>h(v)):h(v)},[h,p]);return E.useLayoutEffect(()=>c.listen(g),[c,g]),E.useEffect(()=>C0(i),[i]),E.createElement(E0,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,future:i})}const z0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tt=E.forwardRef(function(e,n){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:u,target:h,to:p,preventScrollReset:g,viewTransition:v}=e,b=P0(e,D0),{basename:w}=E.useContext(Gs),j,N=!1;if(typeof p=="string"&&I0.test(p)&&(j=p,z0))try{let A=new URL(window.location.href),z=p.startsWith("//")?new URL(A.protocol+p):new URL(p),R=Ld(z.pathname,w);z.origin===A.origin&&R!=null?p=R+z.search+z.hash:N=!0}catch{}let y=h0(p,{relative:o}),_=F0(p,{replace:c,state:u,target:h,preventScrollReset:g,relative:o,viewTransition:v});function S(A){i&&i(A),A.defaultPrevented||_(A)}return E.createElement("a",xd({},b,{href:j||y,onClick:N||l?i:S,ref:n,target:h}))});var ip;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ip||(ip={}));var rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));function F0(t,e){let{target:n,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:u}=e===void 0?{}:e,h=Un(),p=Vr(),g=ng(t,{relative:c});return E.useCallback(v=>{if(T0(v,n)){v.preventDefault();let b=i!==void 0?i:To(p)===To(g);h(t,{replace:b,state:o,preventScrollReset:l,relative:c,viewTransition:u})}},[p,h,g,i,o,n,t,l,c,u])}const B0={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",detail:"详情",falsePositive:"误报",markFalsePositive:"标记为误报",deleteAlert:"删除告警",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",database:"数据库",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",collection:"采集",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据"}},$0={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",detail:"Detail",falsePositive:"False Positive",markFalsePositive:"Mark False Positive",deleteAlert:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",database:"Database",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",collection:"Collection",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warn",error:"Error",save:"Save Settings",saved:"Settings saved"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data"}},U0={zh:B0,en:$0},ag=E.createContext(void 0);function W0(t,e){const n=e.split(".");let i=t;for(const o of n)if(i&&typeof i=="object"&&o in i)i=i[o];else return e;return typeof i=="string"?i:e}function H0({children:t}){const[e,n]=E.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),i=E.useCallback(c=>{n(c),localStorage.setItem("locale",c)},[]),o=E.useCallback(()=>{i(e==="zh"?"en":"zh")},[e,i]),l=E.useCallback((c,u)=>{let h=W0(U0[e],c);return u&&Object.entries(u).forEach(([p,g])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(g))}),h},[e]);return r.jsx(ag.Provider,{value:{locale:e,t:l,setLocale:i,toggleLocale:o},children:t})}function ft(){const t=E.useContext(ag);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function V0(){const{locale:t,toggleLocale:e}=ft();return r.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function og(t,e){return function(){return t.apply(e,arguments)}}const{toString:q0}=Object.prototype,{getPrototypeOf:zd}=Object,{iterator:Vo,toStringTag:lg}=Symbol,qo=(t=>e=>{const n=q0.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),pn=t=>(t=t.toLowerCase(),e=>qo(e)===t),Yo=t=>e=>typeof e===t,{isArray:Ti}=Array,Ei=Yo("undefined");function qr(t){return t!==null&&!Ei(t)&&t.constructor!==null&&!Ei(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const cg=pn("ArrayBuffer");function Y0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&cg(t.buffer),e}const Q0=Yo("string"),zt=Yo("function"),dg=Yo("number"),Yr=t=>t!==null&&typeof t=="object",K0=t=>t===!0||t===!1,_o=t=>{if(qo(t)!=="object")return!1;const e=zd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(lg in t)&&!(Vo in t)},X0=t=>{if(!Yr(t)||qr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},G0=pn("Date"),J0=pn("File"),Z0=t=>!!(t&&typeof t.uri<"u"),eb=t=>t&&typeof t.getParts<"u",tb=pn("Blob"),nb=pn("FileList"),sb=t=>Yr(t)&&zt(t.pipe);function ib(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ap=ib(),op=typeof ap.FormData<"u"?ap.FormData:void 0,rb=t=>{let e;return t&&(op&&t instanceof op||zt(t.append)&&((e=qo(t))==="formdata"||e==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},ab=pn("URLSearchParams"),[ob,lb,cb,db]=["ReadableStream","Request","Response","Headers"].map(pn),ub=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,o;if(typeof t!="object"&&(t=[t]),Ti(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{if(qr(t))return;const l=n?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let u;for(i=0;i<c;i++)u=l[i],e.call(null,t[u],u,t)}}function ug(t,e){if(qr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,o;for(;i-- >0;)if(o=n[i],e===o.toLowerCase())return o;return null}const Ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,hg=t=>!Ei(t)&&t!==Ws;function vd(){const{caseless:t,skipUndefined:e}=hg(this)&&this||{},n={},i=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const c=t&&ug(n,l)||l;_o(n[c])&&_o(o)?n[c]=vd(n[c],o):_o(o)?n[c]=vd({},o):Ti(o)?n[c]=o.slice():(!e||!Ei(o))&&(n[c]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&Qr(arguments[o],i);return n}const hb=(t,e,n,{allOwnKeys:i}={})=>(Qr(e,(o,l)=>{n&&zt(o)?Object.defineProperty(t,l,{value:og(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),fb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),pb=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},mb=(t,e,n,i)=>{let o,l,c;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)c=o[l],(!i||i(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=n!==!1&&zd(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},gb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},xb=t=>{if(!t)return null;if(Ti(t))return t;let e=t.length;if(!dg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&zd(Uint8Array)),yb=(t,e)=>{const i=(t&&t[Vo]).call(t);let o;for(;(o=i.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},bb=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},jb=pn("HTMLFormElement"),wb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),lp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Nb=pn("RegExp"),fg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Qr(n,(o,l)=>{let c;(c=e(o,l,t))!==!1&&(i[l]=c||o)}),Object.defineProperties(t,i)},_b=t=>{fg(t,(e,n)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(zt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kb=(t,e)=>{const n={},i=o=>{o.forEach(l=>{n[l]=!0})};return Ti(t)?i(t):i(String(t).split(e)),n},Sb=()=>{},Cb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Eb(t){return!!(t&&zt(t.append)&&t[lg]==="FormData"&&t[Vo])}const Rb=t=>{const e=new Array(10),n=(i,o)=>{if(Yr(i)){if(e.indexOf(i)>=0)return;if(qr(i))return i;if(!("toJSON"in i)){e[o]=i;const l=Ti(i)?[]:{};return Qr(i,(c,u)=>{const h=n(c,o+1);!Ei(h)&&(l[u]=h)}),e[o]=void 0,l}}return i};return n(t,0)},Pb=pn("AsyncFunction"),Ab=t=>t&&(Yr(t)||zt(t))&&zt(t.then)&&zt(t.catch),pg=((t,e)=>t?setImmediate:e?((n,i)=>(Ws.addEventListener("message",({source:o,data:l})=>{o===Ws&&l===n&&i.length&&i.shift()()},!1),o=>{i.push(o),Ws.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",zt(Ws.postMessage)),Tb=typeof queueMicrotask<"u"?queueMicrotask.bind(Ws):typeof process<"u"&&process.nextTick||pg,Db=t=>t!=null&&zt(t[Vo]),q={isArray:Ti,isArrayBuffer:cg,isBuffer:qr,isFormData:rb,isArrayBufferView:Y0,isString:Q0,isNumber:dg,isBoolean:K0,isObject:Yr,isPlainObject:_o,isEmptyObject:X0,isReadableStream:ob,isRequest:lb,isResponse:cb,isHeaders:db,isUndefined:Ei,isDate:G0,isFile:J0,isReactNativeBlob:Z0,isReactNative:eb,isBlob:tb,isRegExp:Nb,isFunction:zt,isStream:sb,isURLSearchParams:ab,isTypedArray:vb,isFileList:nb,forEach:Qr,merge:vd,extend:hb,trim:ub,stripBOM:fb,inherits:pb,toFlatObject:mb,kindOf:qo,kindOfTest:pn,endsWith:gb,toArray:xb,forEachEntry:yb,matchAll:bb,isHTMLForm:jb,hasOwnProperty:lp,hasOwnProp:lp,reduceDescriptors:fg,freezeMethods:_b,toObjectSet:kb,toCamelCase:wb,noop:Sb,toFiniteNumber:Cb,findKey:ug,global:Ws,isContextDefined:hg,isSpecCompliantForm:Eb,toJSONObject:Rb,isAsyncFn:Pb,isThenable:Ab,setImmediate:pg,asap:Tb,isIterable:Db};let Ne=class mg extends Error{static from(e,n,i,o,l,c){const u=new mg(e.message,n||e.code,i,o,l);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,n,i,o,l){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.status}}};Ne.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ne.ERR_BAD_OPTION="ERR_BAD_OPTION";Ne.ECONNABORTED="ECONNABORTED";Ne.ETIMEDOUT="ETIMEDOUT";Ne.ERR_NETWORK="ERR_NETWORK";Ne.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ne.ERR_DEPRECATED="ERR_DEPRECATED";Ne.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ne.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ne.ERR_CANCELED="ERR_CANCELED";Ne.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ne.ERR_INVALID_URL="ERR_INVALID_URL";const Mb=null;function yd(t){return q.isPlainObject(t)||q.isArray(t)}function gg(t){return q.endsWith(t,"[]")?t.slice(0,-2):t}function Xc(t,e,n){return t?t.concat(e).map(function(o,l){return o=gg(o),!n&&l?"["+o+"]":o}).join(n?".":""):e}function Lb(t){return q.isArray(t)&&!t.some(yd)}const Ob=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function Qo(t,e,n){if(!q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,y){return!q.isUndefined(y[N])});const i=n.metaTokens,o=n.visitor||g,l=n.dots,c=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(o))throw new TypeError("visitor must be a function");function p(j){if(j===null)return"";if(q.isDate(j))return j.toISOString();if(q.isBoolean(j))return j.toString();if(!h&&q.isBlob(j))throw new Ne("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(j)||q.isTypedArray(j)?h&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function g(j,N,y){let _=j;if(q.isReactNative(e)&&q.isReactNativeBlob(j))return e.append(Xc(y,N,l),p(j)),!1;if(j&&!y&&typeof j=="object"){if(q.endsWith(N,"{}"))N=i?N:N.slice(0,-2),j=JSON.stringify(j);else if(q.isArray(j)&&Lb(j)||(q.isFileList(j)||q.endsWith(N,"[]"))&&(_=q.toArray(j)))return N=gg(N),_.forEach(function(A,z){!(q.isUndefined(A)||A===null)&&e.append(c===!0?Xc([N],z,l):c===null?N:N+"[]",p(A))}),!1}return yd(j)?!0:(e.append(Xc(y,N,l),p(j)),!1)}const v=[],b=Object.assign(Ob,{defaultVisitor:g,convertValue:p,isVisitable:yd});function w(j,N){if(!q.isUndefined(j)){if(v.indexOf(j)!==-1)throw Error("Circular reference detected in "+N.join("."));v.push(j),q.forEach(j,function(_,S){(!(q.isUndefined(_)||_===null)&&o.call(e,_,q.isString(S)?S.trim():S,N,b))===!0&&w(_,N?N.concat(S):[S])}),v.pop()}}if(!q.isObject(t))throw new TypeError("data must be an object");return w(t),e}function cp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Id(t,e){this._pairs=[],t&&Qo(t,this,e)}const xg=Id.prototype;xg.append=function(e,n){this._pairs.push([e,n])};xg.toString=function(e){const n=e?function(i){return e.call(this,i,cp)}:cp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function zb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function vg(t,e,n){if(!e)return t;const i=n&&n.encode||zb,o=q.isFunction(n)?{serialize:n}:n,l=o&&o.serialize;let c;if(l?c=l(e,o):c=q.isURLSearchParams(e)?e.toString():new Id(e,o).toString(i),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class dp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Fd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Ib=typeof URLSearchParams<"u"?URLSearchParams:Id,Fb=typeof FormData<"u"?FormData:null,Bb=typeof Blob<"u"?Blob:null,$b={isBrowser:!0,classes:{URLSearchParams:Ib,FormData:Fb,Blob:Bb},protocols:["http","https","file","blob","url","data"]},Bd=typeof window<"u"&&typeof document<"u",bd=typeof navigator=="object"&&navigator||void 0,Ub=Bd&&(!bd||["ReactNative","NativeScript","NS"].indexOf(bd.product)<0),Wb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Hb=Bd&&window.location.href||"http://localhost",Vb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Bd,hasStandardBrowserEnv:Ub,hasStandardBrowserWebWorkerEnv:Wb,navigator:bd,origin:Hb},Symbol.toStringTag,{value:"Module"})),wt={...Vb,...$b};function qb(t,e){return Qo(t,new wt.classes.URLSearchParams,{visitor:function(n,i,o,l){return wt.isNode&&q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function Yb(t){return q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Qb(t){const e={},n=Object.keys(t);let i;const o=n.length;let l;for(i=0;i<o;i++)l=n[i],e[l]=t[l];return e}function yg(t){function e(n,i,o,l){let c=n[l++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=l>=n.length;return c=!c&&q.isArray(o)?o.length:c,h?(q.hasOwnProp(o,c)?o[c]=[o[c],i]:o[c]=i,!u):((!o[c]||!q.isObject(o[c]))&&(o[c]=[]),e(n,i,o[c],l)&&q.isArray(o[c])&&(o[c]=Qb(o[c])),!u)}if(q.isFormData(t)&&q.isFunction(t.entries)){const n={};return q.forEachEntry(t,(i,o)=>{e(Yb(i),o,n,0)}),n}return null}function Kb(t,e,n){if(q.isString(t))try{return(e||JSON.parse)(t),q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Kr={transitional:Fd,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,l=q.isObject(e);if(l&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return o?JSON.stringify(yg(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e)||q.isReadableStream(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return qb(e,this.formSerializer).toString();if((u=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Qo(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return l||o?(n.setContentType("application/json",!1),Kb(e)):e}],transformResponse:[function(e){const n=this.transitional||Kr.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(q.isResponse(e)||q.isReadableStream(e))return e;if(e&&q.isString(e)&&(i&&!this.responseType||o)){const c=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?Ne.from(u,Ne.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:wt.classes.FormData,Blob:wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};q.forEach(["delete","get","head","post","put","patch"],t=>{Kr.headers[t]={}});const Xb=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gb=t=>{const e={};let n,i,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),n=c.substring(0,o).trim().toLowerCase(),i=c.substring(o+1).trim(),!(!n||e[n]&&Xb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},up=Symbol("internals"),Jb=t=>!/[\r\n]/.test(t);function bg(t,e){if(!(t===!1||t==null)){if(q.isArray(t)){t.forEach(n=>bg(n,e));return}if(!Jb(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function xr(t){return t&&String(t).trim().toLowerCase()}function Zb(t){let e=t.length;for(;e>0;){const n=t.charCodeAt(e-1);if(n!==10&&n!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function ko(t){return t===!1||t==null?t:q.isArray(t)?t.map(ko):Zb(String(t))}function ej(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const tj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Gc(t,e,n,i,o){if(q.isFunction(i))return i.call(this,e,n);if(o&&(e=n),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function nj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function sj(t,e){const n=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(o,l,c){return this[i].call(this,e,o,l,c)},configurable:!0})})}let It=class{constructor(e){e&&this.set(e)}set(e,n,i){const o=this;function l(u,h,p){const g=xr(h);if(!g)throw new Error("header name must be a non-empty string");const v=q.findKey(o,g);(!v||o[v]===void 0||p===!0||p===void 0&&o[v]!==!1)&&(bg(u,h),o[v||h]=ko(u))}const c=(u,h)=>q.forEach(u,(p,g)=>l(p,g,h));if(q.isPlainObject(e)||e instanceof this.constructor)c(e,n);else if(q.isString(e)&&(e=e.trim())&&!tj(e))c(Gb(e),n);else if(q.isObject(e)&&q.isIterable(e)){let u={},h,p;for(const g of e){if(!q.isArray(g))throw TypeError("Object iterator must return a key-value pair");u[p=g[0]]=(h=u[p])?q.isArray(h)?[...h,g[1]]:[h,g[1]]:g[1]}c(u,n)}else e!=null&&l(n,e,i);return this}get(e,n){if(e=xr(e),e){const i=q.findKey(this,e);if(i){const o=this[i];if(!n)return o;if(n===!0)return ej(o);if(q.isFunction(n))return n.call(this,o,i);if(q.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=xr(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Gc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let o=!1;function l(c){if(c=xr(c),c){const u=q.findKey(i,c);u&&(!n||Gc(i,i[u],u,n))&&(delete i[u],o=!0)}}return q.isArray(e)?e.forEach(l):l(e),o}clear(e){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const l=n[i];(!e||Gc(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const n=this,i={};return q.forEach(this,(o,l)=>{const c=q.findKey(i,l);if(c){n[c]=ko(o),delete n[l];return}const u=e?nj(l):String(l).trim();u!==l&&delete n[l],n[u]=ko(o),i[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return q.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=e&&q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[up]=this[up]={accessors:{}}).accessors,o=this.prototype;function l(c){const u=xr(c);i[u]||(sj(o,c),i[u]=!0)}return q.isArray(e)?e.forEach(l):l(e),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.reduceDescriptors(It.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});q.freezeMethods(It);function Jc(t,e){const n=this||Kr,i=e||n,o=It.from(i.headers);let l=i.data;return q.forEach(t,function(u){l=u.call(n,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function jg(t){return!!(t&&t.__CANCEL__)}let Xr=class extends Ne{constructor(e,n,i){super(e??"canceled",Ne.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function wg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ne("Request failed with status code "+n.status,[Ne.ERR_BAD_REQUEST,Ne.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function ij(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rj(t,e){t=t||10;const n=new Array(t),i=new Array(t);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),g=i[l];c||(c=p),n[o]=h,i[o]=p;let v=l,b=0;for(;v!==o;)b+=n[v++],v=v%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),p-c<e)return;const w=g&&p-g;return w?Math.round(b*1e3/w):void 0}}function aj(t,e){let n=0,i=1e3/e,o,l;const c=(p,g=Date.now())=>{n=g,o=null,l&&(clearTimeout(l),l=null),t(...p)};return[(...p)=>{const g=Date.now(),v=g-n;v>=i?c(p,g):(o=p,l||(l=setTimeout(()=>{l=null,c(o)},i-v)))},()=>o&&c(o)]}const Do=(t,e,n=3)=>{let i=0;const o=rj(50,250);return aj(l=>{const c=l.loaded,u=l.lengthComputable?l.total:void 0,h=c-i,p=o(h),g=c<=u;i=c;const v={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&g?(u-c)/p:void 0,event:l,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(v)},n)},hp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},fp=t=>(...e)=>q.asap(()=>t(...e)),oj=wt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,wt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(wt.origin),wt.navigator&&/(msie|trident)/i.test(wt.navigator.userAgent)):()=>!0,lj=wt.hasStandardBrowserEnv?{write(t,e,n,i,o,l,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];q.isNumber(n)&&u.push(`expires=${new Date(n).toUTCString()}`),q.isString(i)&&u.push(`path=${i}`),q.isString(o)&&u.push(`domain=${o}`),l===!0&&u.push("secure"),q.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function cj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function dj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ng(t,e,n){let i=!cj(e);return t&&(i||n==!1)?dj(t,e):e}const pp=t=>t instanceof It?{...t}:t;function Qs(t,e){e=e||{};const n={};function i(p,g,v,b){return q.isPlainObject(p)&&q.isPlainObject(g)?q.merge.call({caseless:b},p,g):q.isPlainObject(g)?q.merge({},g):q.isArray(g)?g.slice():g}function o(p,g,v,b){if(q.isUndefined(g)){if(!q.isUndefined(p))return i(void 0,p,v,b)}else return i(p,g,v,b)}function l(p,g){if(!q.isUndefined(g))return i(void 0,g)}function c(p,g){if(q.isUndefined(g)){if(!q.isUndefined(p))return i(void 0,p)}else return i(void 0,g)}function u(p,g,v){if(v in e)return i(p,g);if(v in t)return i(void 0,p)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,g,v)=>o(pp(p),pp(g),v,!0)};return q.forEach(Object.keys({...t,...e}),function(g){if(g==="__proto__"||g==="constructor"||g==="prototype")return;const v=q.hasOwnProp(h,g)?h[g]:o,b=v(t[g],e[g],g);q.isUndefined(b)&&v!==u||(n[g]=b)}),n}const _g=t=>{const e=Qs({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:u}=e;if(e.headers=c=It.from(c),e.url=vg(Ng(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),q.isFormData(n)){if(wt.hasStandardBrowserEnv||wt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(q.isFunction(n.getHeaders)){const h=n.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([g,v])=>{p.includes(g.toLowerCase())&&c.set(g,v)})}}if(wt.hasStandardBrowserEnv&&(i&&q.isFunction(i)&&(i=i(e)),i||i!==!1&&oj(e.url))){const h=o&&l&&lj.read(l);h&&c.set(o,h)}return e},uj=typeof XMLHttpRequest<"u",hj=uj&&function(t){return new Promise(function(n,i){const o=_g(t);let l=o.data;const c=It.from(o.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=o,g,v,b,w,j;function N(){w&&w(),j&&j(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(){if(!y)return;const A=It.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),R={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:A,config:t,request:y};wg(function(D){n(D),N()},function(D){i(D),N()},R),y=null}"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){y&&(i(new Ne("Request aborted",Ne.ECONNABORTED,t,y)),y=null)},y.onerror=function(z){const R=z&&z.message?z.message:"Network Error",I=new Ne(R,Ne.ERR_NETWORK,t,y);I.event=z||null,i(I),y=null},y.ontimeout=function(){let z=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const R=o.transitional||Fd;o.timeoutErrorMessage&&(z=o.timeoutErrorMessage),i(new Ne(z,R.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,t,y)),y=null},l===void 0&&c.setContentType(null),"setRequestHeader"in y&&q.forEach(c.toJSON(),function(z,R){y.setRequestHeader(R,z)}),q.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),u&&u!=="json"&&(y.responseType=o.responseType),p&&([b,j]=Do(p,!0),y.addEventListener("progress",b)),h&&y.upload&&([v,w]=Do(h),y.upload.addEventListener("progress",v),y.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(g=A=>{y&&(i(!A||A.type?new Xr(null,t,y):A),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const S=ij(o.url);if(S&&wt.protocols.indexOf(S)===-1){i(new Ne("Unsupported protocol "+S+":",Ne.ERR_BAD_REQUEST,t));return}y.send(l||null)})},fj=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,o;const l=function(p){if(!o){o=!0,u();const g=p instanceof Error?p:this.reason;i.abort(g instanceof Ne?g:new Xr(g instanceof Error?g.message:g))}};let c=e&&setTimeout(()=>{c=null,l(new Ne(`timeout of ${e}ms exceeded`,Ne.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),t=null)};t.forEach(p=>p.addEventListener("abort",l));const{signal:h}=i;return h.unsubscribe=()=>q.asap(u),h}},pj=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,o;for(;i<n;)o=i+e,yield t.slice(i,o),i=o},mj=async function*(t,e){for await(const n of gj(t))yield*pj(n,e)},gj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},mp=(t,e,n,i)=>{const o=mj(t,e);let l=0,c,u=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:p,value:g}=await o.next();if(p){u(),h.close();return}let v=g.byteLength;if(n){let b=l+=v;n(b)}h.enqueue(new Uint8Array(g))}catch(p){throw u(p),p}},cancel(h){return u(h),o.return()}},{highWaterMark:2})},gp=64*1024,{isFunction:lo}=q,xj=(({Request:t,Response:e})=>({Request:t,Response:e}))(q.global),{ReadableStream:xp,TextEncoder:vp}=q.global,yp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},vj=t=>{t=q.merge.call({skipUndefined:!0},xj,t);const{fetch:e,Request:n,Response:i}=t,o=e?lo(e):typeof fetch=="function",l=lo(n),c=lo(i);if(!o)return!1;const u=o&&lo(xp),h=o&&(typeof vp=="function"?(j=>N=>j.encode(N))(new vp):async j=>new Uint8Array(await new n(j).arrayBuffer())),p=l&&u&&yp(()=>{let j=!1;const N=new xp,y=new n(wt.origin,{body:N,method:"POST",get duplex(){return j=!0,"half"}}).headers.has("Content-Type");return N.cancel(),j&&!y}),g=c&&u&&yp(()=>q.isReadableStream(new i("").body)),v={stream:g&&(j=>j.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(j=>{!v[j]&&(v[j]=(N,y)=>{let _=N&&N[j];if(_)return _.call(N);throw new Ne(`Response type '${j}' is not supported`,Ne.ERR_NOT_SUPPORT,y)})});const b=async j=>{if(j==null)return 0;if(q.isBlob(j))return j.size;if(q.isSpecCompliantForm(j))return(await new n(wt.origin,{method:"POST",body:j}).arrayBuffer()).byteLength;if(q.isArrayBufferView(j)||q.isArrayBuffer(j))return j.byteLength;if(q.isURLSearchParams(j)&&(j=j+""),q.isString(j))return(await h(j)).byteLength},w=async(j,N)=>{const y=q.toFiniteNumber(j.getContentLength());return y??b(N)};return async j=>{let{url:N,method:y,data:_,signal:S,cancelToken:A,timeout:z,onDownloadProgress:R,onUploadProgress:I,responseType:D,headers:C,withCredentials:L="same-origin",fetchOptions:V}=_g(j),X=e||fetch;D=D?(D+"").toLowerCase():"text";let F=fj([S,A&&A.toAbortSignal()],z),G=null;const W=F&&F.unsubscribe&&(()=>{F.unsubscribe()});let oe;try{if(I&&p&&y!=="get"&&y!=="head"&&(oe=await w(C,_))!==0){let M=new n(N,{method:"POST",body:_,duplex:"half"}),Q;if(q.isFormData(_)&&(Q=M.headers.get("content-type"))&&C.setContentType(Q),M.body){const[le,ve]=hp(oe,Do(fp(I)));_=mp(M.body,gp,le,ve)}}q.isString(L)||(L=L?"include":"omit");const U=l&&"credentials"in n.prototype,ie={...V,signal:F,method:y.toUpperCase(),headers:C.normalize().toJSON(),body:_,duplex:"half",credentials:U?L:void 0};G=l&&new n(N,ie);let K=await(l?X(G,V):X(N,ie));const re=g&&(D==="stream"||D==="response");if(g&&(R||re&&W)){const M={};["status","statusText","headers"].forEach(ye=>{M[ye]=K[ye]});const Q=q.toFiniteNumber(K.headers.get("content-length")),[le,ve]=R&&hp(Q,Do(fp(R),!0))||[];K=new i(mp(K.body,gp,le,()=>{ve&&ve(),W&&W()}),M)}D=D||"text";let J=await v[q.findKey(v,D)||"text"](K,j);return!re&&W&&W(),await new Promise((M,Q)=>{wg(M,Q,{data:J,headers:It.from(K.headers),status:K.status,statusText:K.statusText,config:j,request:G})})}catch(U){throw W&&W(),U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)?Object.assign(new Ne("Network Error",Ne.ERR_NETWORK,j,G,U&&U.response),{cause:U.cause||U}):Ne.from(U,U&&U.code,j,G,U&&U.response)}}},yj=new Map,kg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:o}=e,l=[i,o,n];let c=l.length,u=c,h,p,g=yj;for(;u--;)h=l[u],p=g.get(h),p===void 0&&g.set(h,p=u?new Map:vj(e)),g=p;return p};kg();const $d={http:Mb,xhr:hj,fetch:{get:kg}};q.forEach($d,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const bp=t=>`- ${t}`,bj=t=>q.isFunction(t)||t===null||t===!1;function jj(t,e){t=q.isArray(t)?t:[t];const{length:n}=t;let i,o;const l={};for(let c=0;c<n;c++){i=t[c];let u;if(o=i,!bj(i)&&(o=$d[(u=String(i)).toLowerCase()],o===void 0))throw new Ne(`Unknown adapter '${u}'`);if(o&&(q.isFunction(o)||(o=o.get(e))))break;l[u||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=n?c.length>1?`since :
`+c.map(bp).join(`
`):" "+bp(c[0]):"as no adapter specified";throw new Ne("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o}const Sg={getAdapter:jj,adapters:$d};function Zc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Xr(null,t)}function jp(t){return Zc(t),t.headers=It.from(t.headers),t.data=Jc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Sg.getAdapter(t.adapter||Kr.adapter,t)(t).then(function(i){return Zc(t),i.data=Jc.call(t,t.transformResponse,i),i.headers=It.from(i.headers),i},function(i){return jg(i)||(Zc(t),i&&i.response&&(i.response.data=Jc.call(t,t.transformResponse,i.response),i.response.headers=It.from(i.response.headers))),Promise.reject(i)})}const Cg="1.15.0",Ko={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ko[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const wp={};Ko.transitional=function(e,n,i){function o(l,c){return"[Axios v"+Cg+"] Transitional option '"+l+"'"+c+(i?". "+i:"")}return(l,c,u)=>{if(e===!1)throw new Ne(o(c," has been removed"+(n?" in "+n:"")),Ne.ERR_DEPRECATED);return n&&!wp[c]&&(wp[c]=!0,console.warn(o(c," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(l,c,u):!0}};Ko.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function wj(t,e,n){if(typeof t!="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let o=i.length;for(;o-- >0;){const l=i[o],c=e[l];if(c){const u=t[l],h=u===void 0||c(u,l,t);if(h!==!0)throw new Ne("option "+l+" must be "+h,Ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ne("Unknown option "+l,Ne.ERR_BAD_OPTION)}}const So={assertOptions:wj,validators:Ko},Jt=So.validators;let Vs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new dp,response:new dp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=(()=>{if(!o.stack)return"";const c=o.stack.indexOf(`
`);return c===-1?"":o.stack.slice(c+1)})();try{if(!i.stack)i.stack=l;else if(l){const c=l.indexOf(`
`),u=c===-1?-1:l.indexOf(`
`,c+1),h=u===-1?"":l.slice(u+1);String(i.stack).endsWith(h)||(i.stack+=`
`+l)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Qs(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:l}=n;i!==void 0&&So.assertOptions(i,{silentJSONParsing:Jt.transitional(Jt.boolean),forcedJSONParsing:Jt.transitional(Jt.boolean),clarifyTimeoutError:Jt.transitional(Jt.boolean),legacyInterceptorReqResOrdering:Jt.transitional(Jt.boolean)},!1),o!=null&&(q.isFunction(o)?n.paramsSerializer={serialize:o}:So.assertOptions(o,{encode:Jt.function,serialize:Jt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),So.assertOptions(n,{baseUrl:Jt.spelling("baseURL"),withXsrfToken:Jt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=l&&q.merge(l.common,l[n.method]);l&&q.forEach(["delete","get","head","post","put","patch","common"],j=>{delete l[j]}),n.headers=It.concat(c,l);const u=[];let h=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(n)===!1)return;h=h&&N.synchronous;const y=n.transitional||Fd;y&&y.legacyInterceptorReqResOrdering?u.unshift(N.fulfilled,N.rejected):u.push(N.fulfilled,N.rejected)});const p=[];this.interceptors.response.forEach(function(N){p.push(N.fulfilled,N.rejected)});let g,v=0,b;if(!h){const j=[jp.bind(this),void 0];for(j.unshift(...u),j.push(...p),b=j.length,g=Promise.resolve(n);v<b;)g=g.then(j[v++],j[v++]);return g}b=u.length;let w=n;for(;v<b;){const j=u[v++],N=u[v++];try{w=j(w)}catch(y){N.call(this,y);break}}try{g=jp.call(this,w)}catch(j){return Promise.reject(j)}for(v=0,b=p.length;v<b;)g=g.then(p[v++],p[v++]);return g}getUri(e){e=Qs(this.defaults,e);const n=Ng(e.baseURL,e.url,e.allowAbsoluteUrls);return vg(n,e.params,e.paramsSerializer)}};q.forEach(["delete","get","head","options"],function(e){Vs.prototype[e]=function(n,i){return this.request(Qs(i||{},{method:e,url:n,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function n(i){return function(l,c,u){return this.request(Qs(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Vs.prototype[e]=n(),Vs.prototype[e+"Form"]=n(!0)});let Nj=class Eg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(u=>{i.subscribe(u),l=u}).then(o);return c.cancel=function(){i.unsubscribe(l)},c},e(function(l,c,u){i.reason||(i.reason=new Xr(l,c,u),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Eg(function(o){e=o}),cancel:e}}};function _j(t){return function(n){return t.apply(null,n)}}function kj(t){return q.isObject(t)&&t.isAxiosError===!0}const jd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(jd).forEach(([t,e])=>{jd[e]=t});function Rg(t){const e=new Vs(t),n=og(Vs.prototype.request,e);return q.extend(n,Vs.prototype,e,{allOwnKeys:!0}),q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return Rg(Qs(t,o))},n}const st=Rg(Kr);st.Axios=Vs;st.CanceledError=Xr;st.CancelToken=Nj;st.isCancel=jg;st.VERSION=Cg;st.toFormData=Qo;st.AxiosError=Ne;st.Cancel=st.CanceledError;st.all=function(e){return Promise.all(e)};st.spread=_j;st.isAxiosError=kj;st.mergeConfig=Qs;st.AxiosHeaders=It;st.formToJSON=t=>yg(q.isHTMLForm(t)?new FormData(t):t);st.getAdapter=Sg.getAdapter;st.HttpStatusCode=jd;st.default=st;const{Axios:Zk,AxiosError:eS,CanceledError:tS,isCancel:nS,CancelToken:sS,VERSION:iS,all:rS,Cancel:aS,isAxiosError:oS,spread:lS,toFormData:cS,AxiosHeaders:dS,HttpStatusCode:uS,formToJSON:hS,getAdapter:fS,mergeConfig:pS}=st,ce=st.create({baseURL:"/api",timeout:3e4});ce.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Fs={list:(t=1,e=100,n)=>{let i=`/events?page=${t}&page_size=${e}`;return n&&(n.levels&&n.levels.length>0&&n.levels.forEach(o=>i+=`&levels=${o}`),n.event_ids&&n.event_ids.length>0&&n.event_ids.forEach(o=>i+=`&event_ids=${o}`),n.log_names&&n.log_names.length>0&&n.log_names.forEach(o=>i+=`&log_names=${encodeURIComponent(o)}`),n.sources&&n.sources.length>0&&n.sources.forEach(o=>i+=`&sources=${encodeURIComponent(o)}`),n.users&&n.users.length>0&&n.users.forEach(o=>i+=`&users=${encodeURIComponent(o)}`),n.computers&&n.computers.length>0&&n.computers.forEach(o=>i+=`&computers=${encodeURIComponent(o)}`),n.start_time&&(i+=`&start_time=${encodeURIComponent(n.start_time)}`),n.end_time&&(i+=`&end_time=${encodeURIComponent(n.end_time)}`),n.sort_by&&(i+=`&sort_by=${n.sort_by}`),n.sort_order&&(i+=`&sort_order=${n.sort_order}`)),ce.get(i)},get:t=>ce.get(`/events/${t}`),search:t=>ce.post("/events/search",t),export:t=>ce.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},hn={list:(t=1,e=100,n)=>ce.get(`/alerts?page=${t}&page_size=${e}${n?`&severity=${n}`:""}`),get:t=>ce.get(`/alerts/${t}`),stats:()=>ce.get("/alerts/stats"),trend:(t=7)=>ce.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>ce.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>ce.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>ce.delete(`/alerts/${t}`),batchAction:(t,e,n)=>ce.post("/alerts/batch",{ids:t,action:e,notes:n}),runAnalysis:()=>ce.post("/alerts/run-analysis")},Sj={collect:t=>ce.post("/collect",t),getStatus:()=>ce.get("/collect/status")},Cj={importLogs:t=>ce.post("/import/logs",{files:t}),getStatus:()=>ce.get("/import/status")},Ej={getStats:()=>ce.get("/live/stats"),streamEvents:(t,e,n)=>{const i=new EventSource("/api/live/events");return i.onmessage=o=>{try{const l=JSON.parse(o.data);l.type==="event"?t(l.data):l.type==="stats"&&e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},i.onerror=o=>{console.error("SSE error:",o),n==null||n(o)},i}},Bs={health:()=>ce.get("/health"),getInfo:()=>ce.get("/system/info"),getMetrics:()=>ce.get("/system/metrics"),getProcesses:(t=100)=>ce.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>ce.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>ce.get("/system/env"),getLoadedDLLs:(t=100)=>ce.get(`/system/dlls?limit=${t}`),getDrivers:()=>ce.get("/system/drivers")},Mn={list:()=>ce.get("/rules"),get:t=>ce.get(`/rules/${t}`),toggle:(t,e)=>ce.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>ce.post("/rules/save",t),validate:(t,e)=>ce.post("/rules/validate",{rule:t,content:e}),import:t=>ce.post("/rules/import",{rules:t}),export:(t="json")=>ce.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>ce.get("/rules/templates"),getTemplate:t=>ce.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>ce.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},vr={list:()=>ce.get("/reports"),generate:t=>ce.post("/reports",t),get:t=>ce.get(`/reports/${t}`),export:t=>ce.get(`/reports/export?format=${t}`,{responseType:"blob"})},Ls={calculateHash:t=>ce.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>ce.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>ce.get(`/forensics/signature?path=${t}`),isSigned:t=>ce.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>ce.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>ce.get("/forensics/evidence"),getEvidence:t=>ce.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>ce.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>ce.get("/forensics/chain-of-custody"),memoryDump:t=>ce.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},wd={get:(t=200,e,n)=>{let i=`/timeline?limit=${t}`;return e&&(i+=`&start_time=${e}`),n&&(i+=`&end_time=${n}`),ce.get(i)},deleteAlert:t=>ce.delete(`/timeline/alerts/${t}`)},Pg={getCollectionStats:()=>ce.get("/dashboard/collection-stats"),getLogNames:()=>ce.get("/dashboard/log-names")},Rj={run:(t,e)=>ce.post(`/analyze/${t}`,e||{}),list:()=>ce.get("/analyzers"),info:t=>ce.get(`/analyzers/${t}`)},ed={get:()=>ce.get("/settings"),save:t=>ce.post("/settings",t),reset:()=>ce.post("/settings/reset")},Pj={detect:()=>ce.get("/persistence/detect"),detectStream:(t,e)=>{const n=new EventSource("/api/persistence/detect/stream");return n.onmessage=i=>{try{const o=JSON.parse(i.data);t(o)}catch(o){console.error("Failed to parse SSE data:",o)}},n.onerror=i=>{console.error("SSE error:",i),e==null||e(i)},n},listCategories:()=>ce.get("/persistence/categories"),listTechniques:()=>ce.get("/persistence/techniques")},Aj={analyze:t=>ce.post("/correlation/analyze",t||{})},Tj={analyze:t=>ce.post("/multi/analyze",t||{}),lateral:()=>ce.get("/multi/lateral")},Dj={execute:t=>ce.post("/query/execute",t)},co={list:()=>ce.get("/suppress"),create:t=>ce.post("/suppress",t),update:(t,e)=>ce.put(`/suppress/${t}`,e),delete:t=>ce.delete(`/suppress/${t}`),toggle:(t,e)=>ce.post(`/suppress/${t}/toggle`,{enabled:e})},Np={analyze:t=>ce.post("/ueba/analyze",t||{}),profiles:()=>ce.get("/ueba/profiles")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Gr(t){return t+.5|0}const fs=(t,e,n)=>Math.max(Math.min(t,n),e);function _r(t){return fs(Gr(t*2.55),0,255)}function xs(t){return fs(Gr(t*255),0,255)}function In(t){return fs(Gr(t/2.55)/100,0,1)}function _p(t){return fs(Gr(t*100),0,100)}const Zt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Nd=[..."0123456789ABCDEF"],Mj=t=>Nd[t&15],Lj=t=>Nd[(t&240)>>4]+Nd[t&15],uo=t=>(t&240)>>4===(t&15),Oj=t=>uo(t.r)&&uo(t.g)&&uo(t.b)&&uo(t.a);function zj(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&Zt[t[1]]*17,g:255&Zt[t[2]]*17,b:255&Zt[t[3]]*17,a:e===5?Zt[t[4]]*17:255}:(e===7||e===9)&&(n={r:Zt[t[1]]<<4|Zt[t[2]],g:Zt[t[3]]<<4|Zt[t[4]],b:Zt[t[5]]<<4|Zt[t[6]],a:e===9?Zt[t[7]]<<4|Zt[t[8]]:255})),n}const Ij=(t,e)=>t<255?e(t):"";function Fj(t){var e=Oj(t)?Mj:Lj;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Ij(t.a,e):void 0}const Bj=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ag(t,e,n){const i=e*Math.min(n,1-n),o=(l,c=(l+t/30)%12)=>n-i*Math.max(Math.min(c-3,9-c,1),-1);return[o(0),o(8),o(4)]}function $j(t,e,n){const i=(o,l=(o+t/60)%6)=>n-n*e*Math.max(Math.min(l,4-l,1),0);return[i(5),i(3),i(1)]}function Uj(t,e,n){const i=Ag(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)i[o]*=1-e-n,i[o]+=e;return i}function Wj(t,e,n,i,o){return t===o?(e-n)/i+(e<n?6:0):e===o?(n-t)/i+2:(t-e)/i+4}function Ud(t){const n=t.r/255,i=t.g/255,o=t.b/255,l=Math.max(n,i,o),c=Math.min(n,i,o),u=(l+c)/2;let h,p,g;return l!==c&&(g=l-c,p=u>.5?g/(2-l-c):g/(l+c),h=Wj(n,i,o,g,l),h=h*60+.5),[h|0,p||0,u]}function Wd(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(xs)}function Hd(t,e,n){return Wd(Ag,t,e,n)}function Hj(t,e,n){return Wd(Uj,t,e,n)}function Vj(t,e,n){return Wd($j,t,e,n)}function Tg(t){return(t%360+360)%360}function qj(t){const e=Bj.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?_r(+e[5]):xs(+e[5]));const o=Tg(+e[2]),l=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?i=Hj(o,l,c):e[1]==="hsv"?i=Vj(o,l,c):i=Hd(o,l,c),{r:i[0],g:i[1],b:i[2],a:n}}function Yj(t,e){var n=Ud(t);n[0]=Tg(n[0]+e),n=Hd(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Qj(t){if(!t)return;const e=Ud(t),n=e[0],i=_p(e[1]),o=_p(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${o}%, ${In(t.a)})`:`hsl(${n}, ${i}%, ${o}%)`}const kp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Sp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Kj(){const t={},e=Object.keys(Sp),n=Object.keys(kp);let i,o,l,c,u;for(i=0;i<e.length;i++){for(c=u=e[i],o=0;o<n.length;o++)l=n[o],u=u.replace(l,kp[l]);l=parseInt(Sp[c],16),t[u]=[l>>16&255,l>>8&255,l&255]}return t}let ho;function Xj(t){ho||(ho=Kj(),ho.transparent=[0,0,0,0]);const e=ho[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Gj=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Jj(t){const e=Gj.exec(t);let n=255,i,o,l;if(e){if(e[7]!==i){const c=+e[7];n=e[8]?_r(c):fs(c*255,0,255)}return i=+e[1],o=+e[3],l=+e[5],i=255&(e[2]?_r(i):fs(i,0,255)),o=255&(e[4]?_r(o):fs(o,0,255)),l=255&(e[6]?_r(l):fs(l,0,255)),{r:i,g:o,b:l,a:n}}}function Zj(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${In(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const td=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,_i=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function e1(t,e,n){const i=_i(In(t.r)),o=_i(In(t.g)),l=_i(In(t.b));return{r:xs(td(i+n*(_i(In(e.r))-i))),g:xs(td(o+n*(_i(In(e.g))-o))),b:xs(td(l+n*(_i(In(e.b))-l))),a:t.a+n*(e.a-t.a)}}function fo(t,e,n){if(t){let i=Ud(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Hd(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Dg(t,e){return t&&Object.assign(e||{},t)}function Cp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=xs(t[3]))):(e=Dg(t,{r:0,g:0,b:0,a:1}),e.a=xs(e.a)),e}function t1(t){return t.charAt(0)==="r"?Jj(t):qj(t)}class Or{constructor(e){if(e instanceof Or)return e;const n=typeof e;let i;n==="object"?i=Cp(e):n==="string"&&(i=zj(e)||Xj(e)||t1(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Dg(this._rgb);return e&&(e.a=In(e.a)),e}set rgb(e){this._rgb=Cp(e)}rgbString(){return this._valid?Zj(this._rgb):void 0}hexString(){return this._valid?Fj(this._rgb):void 0}hslString(){return this._valid?Qj(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,o=e.rgb;let l;const c=n===l?.5:n,u=2*c-1,h=i.a-o.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;l=1-p,i.r=255&p*i.r+l*o.r+.5,i.g=255&p*i.g+l*o.g+.5,i.b=255&p*i.b+l*o.b+.5,i.a=c*i.a+(1-c)*o.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=e1(this._rgb,e._rgb,n)),this}clone(){return new Or(this.rgb)}alpha(e){return this._rgb.a=xs(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Gr(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return fo(this._rgb,2,e),this}darken(e){return fo(this._rgb,2,-e),this}saturate(e){return fo(this._rgb,1,e),this}desaturate(e){return fo(this._rgb,1,-e),this}rotate(e){return Yj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ln(){}const n1=(()=>{let t=0;return()=>t++})();function Me(t){return t==null}function rt(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Re(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function kt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function bn(t,e){return kt(t)?t:e}function ke(t,e){return typeof t>"u"?e:t}const s1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Mg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function He(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Oe(t,e,n,i){let o,l,c;if(rt(t))for(l=t.length,o=0;o<l;o++)e.call(n,t[o],o);else if(Re(t))for(c=Object.keys(t),l=c.length,o=0;o<l;o++)e.call(n,t[c[o]],c[o])}function Mo(t,e){let n,i,o,l;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(o=t[n],l=e[n],o.datasetIndex!==l.datasetIndex||o.index!==l.index)return!1;return!0}function Lo(t){if(rt(t))return t.map(Lo);if(Re(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let o=0;for(;o<i;++o)e[n[o]]=Lo(t[n[o]]);return e}return t}function Lg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function i1(t,e,n,i){if(!Lg(t))return;const o=e[t],l=n[t];Re(o)&&Re(l)?zr(o,l,i):e[t]=Lo(l)}function zr(t,e,n){const i=rt(e)?e:[e],o=i.length;if(!Re(t))return t;n=n||{};const l=n.merger||i1;let c;for(let u=0;u<o;++u){if(c=i[u],!Re(c))continue;const h=Object.keys(c);for(let p=0,g=h.length;p<g;++p)l(h[p],t,c,n)}return t}function Rr(t,e){return zr(t,e,{merger:r1})}function r1(t,e,n){if(!Lg(t))return;const i=e[t],o=n[t];Re(i)&&Re(o)?Rr(i,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Lo(o))}const Ep={"":t=>t,x:t=>t.x,y:t=>t.y};function a1(t){const e=t.split("."),n=[];let i="";for(const o of e)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function o1(t){const e=a1(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Ks(t,e){return(Ep[e]||(Ep[e]=o1(e)))(t)}function Vd(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ir=t=>typeof t<"u",vs=t=>typeof t=="function",Rp=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function l1(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const ze=Math.PI,Qe=2*ze,c1=Qe+ze,Oo=Number.POSITIVE_INFINITY,d1=ze/180,ct=ze/2,Os=ze/4,Pp=ze*2/3,Og=Math.log10,_n=Math.sign;function Pr(t,e,n){return Math.abs(t-e)<n}function Ap(t){const e=Math.round(t);t=Pr(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Og(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function u1(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((o,l)=>o-l).pop(),e}function h1(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Fr(t){return!h1(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function f1(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function p1(t,e,n){let i,o,l;for(i=0,o=t.length;i<o;i++)l=t[i][n],isNaN(l)||(e.min=Math.min(e.min,l),e.max=Math.max(e.max,l))}function Fn(t){return t*(ze/180)}function m1(t){return t*(180/ze)}function Tp(t){if(!kt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function zg(t,e){const n=e.x-t.x,i=e.y-t.y,o=Math.sqrt(n*n+i*i);let l=Math.atan2(i,n);return l<-.5*ze&&(l+=Qe),{angle:l,distance:o}}function _d(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function g1(t,e){return(t-e+c1)%Qe-ze}function Wt(t){return(t%Qe+Qe)%Qe}function Br(t,e,n,i){const o=Wt(t),l=Wt(e),c=Wt(n),u=Wt(l-o),h=Wt(c-o),p=Wt(o-l),g=Wt(o-c);return o===l||o===c||i&&l===c||u>h&&p<g}function Nt(t,e,n){return Math.max(e,Math.min(n,t))}function x1(t){return Nt(t,-32768,32767)}function Bn(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function qd(t,e,n){n=n||(c=>t[c]<e);let i=t.length-1,o=0,l;for(;i-o>1;)l=o+i>>1,n(l)?o=l:i=l;return{lo:o,hi:i}}const Hs=(t,e,n,i)=>qd(t,n,i?o=>{const l=t[o][e];return l<n||l===n&&t[o+1][e]===n}:o=>t[o][e]<n),v1=(t,e,n)=>qd(t,n,i=>t[i][e]>=n);function y1(t,e,n){let i=0,o=t.length;for(;i<o&&t[i]<e;)i++;for(;o>i&&t[o-1]>n;)o--;return i>0||o<t.length?t.slice(i,o):t}const Ig=["push","pop","shift","splice","unshift"];function b1(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Ig.forEach(n=>{const i="_onData"+Vd(n),o=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...l){const c=o.apply(this,l);return t._chartjs.listeners.forEach(u=>{typeof u[i]=="function"&&u[i](...l)}),c}})})}function Dp(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),!(i.length>0)&&(Ig.forEach(l=>{delete t[l]}),delete t._chartjs)}function Fg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Bg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function $g(t,e){let n=[],i=!1;return function(...o){n=o,i||(i=!0,Bg.call(window,()=>{i=!1,t.apply(e,n)}))}}function j1(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Yd=t=>t==="start"?"left":t==="end"?"right":"center",jt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,w1=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function N1(t,e,n){const i=e.length;let o=0,l=i;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,g=c.axis,{min:v,max:b,minDefined:w,maxDefined:j}=c.getUserBounds();if(w){if(o=Math.min(Hs(h,g,v).lo,n?i:Hs(e,g,c.getPixelForValue(v)).lo),p){const N=h.slice(0,o+1).reverse().findIndex(y=>!Me(y[u.axis]));o-=Math.max(0,N)}o=Nt(o,0,i-1)}if(j){let N=Math.max(Hs(h,c.axis,b,!0).hi+1,n?0:Hs(e,g,c.getPixelForValue(b),!0).hi+1);if(p){const y=h.slice(N-1).findIndex(_=>!Me(_[u.axis]));N+=Math.max(0,y)}l=Nt(N,o,i)-o}else l=i-o}return{start:o,count:l}}function _1(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=o,!0;const l=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,o),l}const po=t=>t===0||t===1,Mp=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Qe/n)),Lp=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Qe/n)+1,Ar={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ct)+1,easeOutSine:t=>Math.sin(t*ct),easeInOutSine:t=>-.5*(Math.cos(ze*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>po(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>po(t)?t:Mp(t,.075,.3),easeOutElastic:t=>po(t)?t:Lp(t,.075,.3),easeInOutElastic(t){return po(t)?t:t<.5?.5*Mp(t*2,.1125,.45):.5+.5*Lp(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Ar.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Ar.easeInBounce(t*2)*.5:Ar.easeOutBounce(t*2-1)*.5+.5};function Qd(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Op(t){return Qd(t)?t:new Or(t)}function nd(t){return Qd(t)?t:new Or(t).saturate(.5).darken(.1).hexString()}const k1=["x","y","borderWidth","radius","tension"],S1=["color","borderColor","backgroundColor"];function C1(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:S1},numbers:{type:"number",properties:k1}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function E1(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const zp=new Map;function R1(t,e){e=e||{};const n=t+JSON.stringify(e);let i=zp.get(n);return i||(i=new Intl.NumberFormat(t,e),zp.set(n,i)),i}function Kd(t,e,n){return R1(e,n).format(t)}const P1={values(t){return rt(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let o,l=t;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(o="scientific"),l=A1(t,n)}const c=Og(Math.abs(l)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:o,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),Kd(t,i,h)}};function A1(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Ug={formatters:P1};function T1(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ug.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Xs=Object.create(null),kd=Object.create(null);function Tr(t,e){if(!e)return t;const n=e.split(".");for(let i=0,o=n.length;i<o;++i){const l=n[i];t=t[l]||(t[l]=Object.create(null))}return t}function sd(t,e,n){return typeof e=="string"?zr(Tr(t,e),n):zr(Tr(t,""),e)}class D1{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>nd(o.backgroundColor),this.hoverBorderColor=(i,o)=>nd(o.borderColor),this.hoverColor=(i,o)=>nd(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return sd(this,e,n)}get(e){return Tr(this,e)}describe(e,n){return sd(kd,e,n)}override(e,n){return sd(Xs,e,n)}route(e,n,i,o){const l=Tr(this,e),c=Tr(this,i),u="_"+n;Object.defineProperties(l,{[u]:{value:l[n],writable:!0},[n]:{enumerable:!0,get(){const h=this[u],p=c[o];return Re(h)?Object.assign({},p,h):ke(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(n=>n(this))}}var nt=new D1({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[C1,E1,T1]);function M1(t){return!t||Me(t.size)||Me(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Ip(t,e,n,i,o){let l=e[o];return l||(l=e[o]=t.measureText(o).width,n.push(o)),l>i&&(i=l),i}function zs(t,e,n){const i=t.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((e-o)*i)/i+o}function Fp(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Sd(t,e,n,i){Wg(t,e,n,i,null)}function Wg(t,e,n,i,o){let l,c,u,h,p,g,v,b;const w=e.pointStyle,j=e.rotation,N=e.radius;let y=(j||0)*d1;if(w&&typeof w=="object"&&(l=w.toString(),l==="[object HTMLImageElement]"||l==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(y),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(N)||N<=0)){switch(t.beginPath(),w){default:o?t.ellipse(n,i,o/2,N,0,0,Qe):t.arc(n,i,N,0,Qe),t.closePath();break;case"triangle":g=o?o/2:N,t.moveTo(n+Math.sin(y)*g,i-Math.cos(y)*N),y+=Pp,t.lineTo(n+Math.sin(y)*g,i-Math.cos(y)*N),y+=Pp,t.lineTo(n+Math.sin(y)*g,i-Math.cos(y)*N),t.closePath();break;case"rectRounded":p=N*.516,h=N-p,c=Math.cos(y+Os)*h,v=Math.cos(y+Os)*(o?o/2-p:h),u=Math.sin(y+Os)*h,b=Math.sin(y+Os)*(o?o/2-p:h),t.arc(n-v,i-u,p,y-ze,y-ct),t.arc(n+b,i-c,p,y-ct,y),t.arc(n+v,i+u,p,y,y+ct),t.arc(n-b,i+c,p,y+ct,y+ze),t.closePath();break;case"rect":if(!j){h=Math.SQRT1_2*N,g=o?o/2:h,t.rect(n-g,i-h,2*g,2*h);break}y+=Os;case"rectRot":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+b,i-c),t.lineTo(n+v,i+u),t.lineTo(n-b,i+c),t.closePath();break;case"crossRot":y+=Os;case"cross":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c);break;case"star":v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c),y+=Os,v=Math.cos(y)*(o?o/2:N),c=Math.cos(y)*N,u=Math.sin(y)*N,b=Math.sin(y)*(o?o/2:N),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+b,i-c),t.lineTo(n-b,i+c);break;case"line":c=o?o/2:Math.cos(y)*N,u=Math.sin(y)*N,t.moveTo(n-c,i-u),t.lineTo(n+c,i+u);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(y)*(o?o/2:N),i+Math.sin(y)*N);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function $r(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Xo(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Go(t){t.restore()}function L1(t,e,n,i,o){if(!e)return t.lineTo(n.x,n.y);if(o==="middle"){const l=(e.x+n.x)/2;t.lineTo(l,e.y),t.lineTo(l,n.y)}else o==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function O1(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function z1(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Me(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function I1(t,e,n,i,o){if(o.strikethrough||o.underline){const l=t.measureText(i),c=e-l.actualBoundingBoxLeft,u=e+l.actualBoundingBoxRight,h=n-l.actualBoundingBoxAscent,p=n+l.actualBoundingBoxDescent,g=o.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,g),t.lineTo(u,g),t.stroke()}}function F1(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Ur(t,e,n,i,o,l={}){const c=rt(e)?e:[e],u=l.strokeWidth>0&&l.strokeColor!=="";let h,p;for(t.save(),t.font=o.string,z1(t,l),h=0;h<c.length;++h)p=c[h],l.backdrop&&F1(t,l.backdrop),u&&(l.strokeColor&&(t.strokeStyle=l.strokeColor),Me(l.strokeWidth)||(t.lineWidth=l.strokeWidth),t.strokeText(p,n,i,l.maxWidth)),t.fillText(p,n,i,l.maxWidth),I1(t,n,i,p,l),i+=Number(o.lineHeight);t.restore()}function zo(t,e){const{x:n,y:i,w:o,h:l,radius:c}=e;t.arc(n+c.topLeft,i+c.topLeft,c.topLeft,1.5*ze,ze,!0),t.lineTo(n,i+l-c.bottomLeft),t.arc(n+c.bottomLeft,i+l-c.bottomLeft,c.bottomLeft,ze,ct,!0),t.lineTo(n+o-c.bottomRight,i+l),t.arc(n+o-c.bottomRight,i+l-c.bottomRight,c.bottomRight,ct,0,!0),t.lineTo(n+o,i+c.topRight),t.arc(n+o-c.topRight,i+c.topRight,c.topRight,0,-ct,!0),t.lineTo(n+c.topLeft,i)}const B1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,$1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function U1(t,e){const n=(""+t).match(B1);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const W1=t=>+t||0;function Xd(t,e){const n={},i=Re(e),o=i?Object.keys(e):e,l=Re(t)?i?c=>ke(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of o)n[c]=W1(l(c));return n}function Hg(t){return Xd(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Si(t){return Xd(t,["topLeft","topRight","bottomLeft","bottomRight"])}function tn(t){const e=Hg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function _t(t,e){t=t||{},e=e||nt.font;let n=ke(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=ke(t.style,e.style);i&&!(""+i).match($1)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const o={family:ke(t.family,e.family),lineHeight:U1(ke(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:ke(t.weight,e.weight),string:""};return o.string=M1(o),o}function mo(t,e,n,i){let o,l,c;for(o=0,l=t.length;o<l;++o)if(c=t[o],c!==void 0&&c!==void 0)return c}function H1(t,e,n){const{min:i,max:o}=t,l=Mg(e,(o-i)/2),c=(u,h)=>n&&u===0?0:u+h;return{min:c(i,-Math.abs(l)),max:c(o,l)}}function Js(t,e){return Object.assign(Object.create(t),e)}function Gd(t,e=[""],n,i,o=()=>t[0]){const l=n||t;typeof i>"u"&&(i=Qg("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:l,_fallback:i,_getTarget:o,override:u=>Gd([u,...t],e,l,i)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return qg(u,h,()=>J1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return $p(u).includes(h)},ownKeys(u){return $p(u)},set(u,h,p){const g=u._storage||(u._storage=o());return u[h]=g[h]=p,delete u._keys,!0}})}function Ri(t,e,n,i){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Vg(t,i),setContext:l=>Ri(t,l,n,i),override:l=>Ri(t.override(l),e,n,i)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete t[c],!0},get(l,c,u){return qg(l,c,()=>q1(l,c,u))},getOwnPropertyDescriptor(l,c){return l._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(l,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(l,c,u){return t[c]=u,delete l[c],!0}})}function Vg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:i,isScriptable:vs(n)?n:()=>n,isIndexable:vs(i)?i:()=>i}}const V1=(t,e)=>t?t+Vd(e):e,Jd=(t,e)=>Re(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function qg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function q1(t,e,n){const{_proxy:i,_context:o,_subProxy:l,_descriptors:c}=t;let u=i[e];return vs(u)&&c.isScriptable(e)&&(u=Y1(e,u,t,n)),rt(u)&&u.length&&(u=Q1(e,u,t,c.isIndexable)),Jd(e,u)&&(u=Ri(u,o,l&&l[e],c)),u}function Y1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_stack:u}=n;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(l,c||i);return u.delete(t),Jd(t,h)&&(h=Zd(o._scopes,o,t,h)),h}function Q1(t,e,n,i){const{_proxy:o,_context:l,_subProxy:c,_descriptors:u}=n;if(typeof l.index<"u"&&i(t))return e[l.index%e.length];if(Re(e[0])){const h=e,p=o._scopes.filter(g=>g!==h);e=[];for(const g of h){const v=Zd(p,o,t,g);e.push(Ri(v,l,c&&c[t],u))}}return e}function Yg(t,e,n){return vs(t)?t(e,n):t}const K1=(t,e)=>t===!0?e:typeof t=="string"?Ks(e,t):void 0;function X1(t,e,n,i,o){for(const l of e){const c=K1(n,l);if(c){t.add(c);const u=Yg(c._fallback,n,o);if(typeof u<"u"&&u!==n&&u!==i)return u}else if(c===!1&&typeof i<"u"&&n!==i)return null}return!1}function Zd(t,e,n,i){const o=e._rootScopes,l=Yg(e._fallback,n,i),c=[...t,...o],u=new Set;u.add(i);let h=Bp(u,c,n,l||n,i);return h===null||typeof l<"u"&&l!==n&&(h=Bp(u,c,l,h,i),h===null)?!1:Gd(Array.from(u),[""],o,l,()=>G1(e,n,i))}function Bp(t,e,n,i,o){for(;n;)n=X1(t,e,n,i,o);return n}function G1(t,e,n){const i=t._getTarget();e in i||(i[e]={});const o=i[e];return rt(o)&&Re(n)?n:o||{}}function J1(t,e,n,i){let o;for(const l of e)if(o=Qg(V1(l,t),n),typeof o<"u")return Jd(t,o)?Zd(n,i,t,o):o}function Qg(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function $p(t){let e=t._keys;return e||(e=t._keys=Z1(t._scopes)),e}function Z1(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(o=>!o.startsWith("_")))e.add(i);return Array.from(e)}const ew=Number.EPSILON||1e-14,Pi=(t,e)=>e<t.length&&!t[e].skip&&t[e],Kg=t=>t==="x"?"y":"x";function tw(t,e,n,i){const o=t.skip?e:t,l=e,c=n.skip?e:n,u=_d(l,o),h=_d(c,l);let p=u/(u+h),g=h/(u+h);p=isNaN(p)?0:p,g=isNaN(g)?0:g;const v=i*p,b=i*g;return{previous:{x:l.x-v*(c.x-o.x),y:l.y-v*(c.y-o.y)},next:{x:l.x+b*(c.x-o.x),y:l.y+b*(c.y-o.y)}}}function nw(t,e,n){const i=t.length;let o,l,c,u,h,p=Pi(t,0);for(let g=0;g<i-1;++g)if(h=p,p=Pi(t,g+1),!(!h||!p)){if(Pr(e[g],0,ew)){n[g]=n[g+1]=0;continue}o=n[g]/e[g],l=n[g+1]/e[g],u=Math.pow(o,2)+Math.pow(l,2),!(u<=9)&&(c=3/Math.sqrt(u),n[g]=o*c*e[g],n[g+1]=l*c*e[g])}}function sw(t,e,n="x"){const i=Kg(n),o=t.length;let l,c,u,h=Pi(t,0);for(let p=0;p<o;++p){if(c=u,u=h,h=Pi(t,p+1),!u)continue;const g=u[n],v=u[i];c&&(l=(g-c[n])/3,u[`cp1${n}`]=g-l,u[`cp1${i}`]=v-l*e[p]),h&&(l=(h[n]-g)/3,u[`cp2${n}`]=g+l,u[`cp2${i}`]=v+l*e[p])}}function iw(t,e="x"){const n=Kg(e),i=t.length,o=Array(i).fill(0),l=Array(i);let c,u,h,p=Pi(t,0);for(c=0;c<i;++c)if(u=h,h=p,p=Pi(t,c+1),!!h){if(p){const g=p[e]-h[e];o[c]=g!==0?(p[n]-h[n])/g:0}l[c]=u?p?_n(o[c-1])!==_n(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}nw(t,o,l),sw(t,l,e)}function go(t,e,n){return Math.max(Math.min(t,n),e)}function rw(t,e){let n,i,o,l,c,u=$r(t[0],e);for(n=0,i=t.length;n<i;++n)c=l,l=u,u=n<i-1&&$r(t[n+1],e),l&&(o=t[n],c&&(o.cp1x=go(o.cp1x,e.left,e.right),o.cp1y=go(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=go(o.cp2x,e.left,e.right),o.cp2y=go(o.cp2y,e.top,e.bottom)))}function aw(t,e,n,i,o){let l,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")iw(t,o);else{let p=i?t[t.length-1]:t[0];for(l=0,c=t.length;l<c;++l)u=t[l],h=tw(p,u,t[Math.min(l+1,c-(i?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&rw(t,n)}function eu(){return typeof window<"u"&&typeof document<"u"}function tu(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Io(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Jo=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function ow(t,e){return Jo(t).getPropertyValue(e)}const lw=["top","right","bottom","left"];function qs(t,e,n){const i={};n=n?"-"+n:"";for(let o=0;o<4;o++){const l=lw[o];i[l]=parseFloat(t[e+"-"+l+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const cw=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function dw(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:o,offsetY:l}=i;let c=!1,u,h;if(cw(o,l,t.target))u=o,h=l;else{const p=e.getBoundingClientRect();u=i.clientX-p.left,h=i.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function $s(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,o=Jo(n),l=o.boxSizing==="border-box",c=qs(o,"padding"),u=qs(o,"border","width"),{x:h,y:p,box:g}=dw(t,n),v=c.left+(g&&u.left),b=c.top+(g&&u.top);let{width:w,height:j}=e;return l&&(w-=c.width+u.width,j-=c.height+u.height),{x:Math.round((h-v)/w*n.width/i),y:Math.round((p-b)/j*n.height/i)}}function uw(t,e,n){let i,o;if(e===void 0||n===void 0){const l=t&&tu(t);if(!l)e=t.clientWidth,n=t.clientHeight;else{const c=l.getBoundingClientRect(),u=Jo(l),h=qs(u,"border","width"),p=qs(u,"padding");e=c.width-p.width-h.width,n=c.height-p.height-h.height,i=Io(u.maxWidth,l,"clientWidth"),o=Io(u.maxHeight,l,"clientHeight")}}return{width:e,height:n,maxWidth:i||Oo,maxHeight:o||Oo}}const ps=t=>Math.round(t*10)/10;function hw(t,e,n,i){const o=Jo(t),l=qs(o,"margin"),c=Io(o.maxWidth,t,"clientWidth")||Oo,u=Io(o.maxHeight,t,"clientHeight")||Oo,h=uw(t,e,n);let{width:p,height:g}=h;if(o.boxSizing==="content-box"){const b=qs(o,"border","width"),w=qs(o,"padding");p-=w.width+b.width,g-=w.height+b.height}return p=Math.max(0,p-l.width),g=Math.max(0,i?p/i:g-l.height),p=ps(Math.min(p,c,h.maxWidth)),g=ps(Math.min(g,u,h.maxHeight)),p&&!g&&(g=ps(p/2)),(e!==void 0||n!==void 0)&&i&&h.height&&g>h.height&&(g=h.height,p=ps(Math.floor(g*i))),{width:p,height:g}}function Up(t,e,n){const i=e||1,o=ps(t.height*i),l=ps(t.width*i);t.height=ps(t.height),t.width=ps(t.width);const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||c.height!==o||c.width!==l?(t.currentDevicePixelRatio=i,c.height=o,c.width=l,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const fw=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};eu()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Wp(t,e){const n=ow(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Us(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function pw(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function mw(t,e,n,i){const o={x:t.cp2x,y:t.cp2y},l={x:e.cp1x,y:e.cp1y},c=Us(t,o,n),u=Us(o,l,n),h=Us(l,e,n),p=Us(c,u,n),g=Us(u,h,n);return Us(p,g,n)}const gw=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},xw=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Ci(t,e,n){return t?gw(e,n):xw()}function Xg(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Gg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function Jg(t){return t==="angle"?{between:Br,compare:g1,normalize:Wt}:{between:Bn,compare:(e,n)=>e-n,normalize:e=>e}}function Hp({start:t,end:e,count:n,loop:i,style:o}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:o}}function vw(t,e,n){const{property:i,start:o,end:l}=n,{between:c,normalize:u}=Jg(i),h=e.length;let{start:p,end:g,loop:v}=t,b,w;if(v){for(p+=h,g+=h,b=0,w=h;b<w&&c(u(e[p%h][i]),o,l);++b)p--,g--;p%=h,g%=h}return g<p&&(g+=h),{start:p,end:g,loop:v,style:t.style}}function Zg(t,e,n){if(!n)return[t];const{property:i,start:o,end:l}=n,c=e.length,{compare:u,between:h,normalize:p}=Jg(i),{start:g,end:v,loop:b,style:w}=vw(t,e,n),j=[];let N=!1,y=null,_,S,A;const z=()=>h(o,A,_)&&u(o,A)!==0,R=()=>u(l,_)===0||h(l,A,_),I=()=>N||z(),D=()=>!N||R();for(let C=g,L=g;C<=v;++C)S=e[C%c],!S.skip&&(_=p(S[i]),_!==A&&(N=h(_,o,l),y===null&&I()&&(y=u(_,o)===0?C:L),y!==null&&D()&&(j.push(Hp({start:y,end:C,loop:b,count:c,style:w})),y=null),L=C,A=_));return y!==null&&j.push(Hp({start:y,end:v,loop:b,count:c,style:w})),j}function ex(t,e){const n=[],i=t.segments;for(let o=0;o<i.length;o++){const l=Zg(i[o],t.points,e);l.length&&n.push(...l)}return n}function yw(t,e,n,i){let o=0,l=e-1;if(n&&!i)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(l+=o);l>o&&t[l%e].skip;)l--;return l%=e,{start:o,end:l}}function bw(t,e,n,i){const o=t.length,l=[];let c=e,u=t[e],h;for(h=e+1;h<=n;++h){const p=t[h%o];p.skip||p.stop?u.skip||(i=!1,l.push({start:e%o,end:(h-1)%o,loop:i}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&l.push({start:e%o,end:c%o,loop:i}),l}function jw(t,e){const n=t.points,i=t.options.spanGaps,o=n.length;if(!o)return[];const l=!!t._loop,{start:c,end:u}=yw(n,o,l,i);if(i===!0)return Vp(t,[{start:c,end:u,loop:l}],n,e);const h=u<c?u+o:u,p=!!t._fullLoop&&c===0&&u===o-1;return Vp(t,bw(n,c,h,p),n,e)}function Vp(t,e,n,i){return!i||!i.setContext||!n?e:ww(t,e,n,i)}function ww(t,e,n,i){const o=t._chart.getContext(),l=qp(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=n.length,p=[];let g=l,v=e[0].start,b=v;function w(j,N,y,_){const S=u?-1:1;if(j!==N){for(j+=h;n[j%h].skip;)j-=S;for(;n[N%h].skip;)N+=S;j%h!==N%h&&(p.push({start:j%h,end:N%h,loop:y,style:_}),g=_,v=N%h)}}for(const j of e){v=u?v:j.start;let N=n[v%h],y;for(b=v+1;b<=j.end;b++){const _=n[b%h];y=qp(i.setContext(Js(o,{type:"segment",p0:N,p1:_,p0DataIndex:(b-1)%h,p1DataIndex:b%h,datasetIndex:c}))),Nw(y,g)&&w(v,b-1,j.loop,g),N=_,g=y}v<b-1&&w(v,b-1,j.loop,g)}return p}function qp(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Nw(t,e){if(!e)return!1;const n=[],i=function(o,l){return Qd(l)?(n.includes(l)||n.push(l),n.indexOf(l)):l};return JSON.stringify(t,i)!==JSON.stringify(e,i)}function xo(t,e,n){return t.options.clip?t[n]:e[n]}function _w(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:xo(n,e,"left"),right:xo(n,e,"right"),top:xo(i,e,"top"),bottom:xo(i,e,"bottom")}:e}function tx(t,e){const n=e._clip;if(n.disabled)return!1;const i=_w(e,t.chartArea);return{left:n.left===!1?0:i.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:i.right+(n.right===!0?0:n.right),top:n.top===!1?0:i.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:i.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class kw{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,o){const l=n.listeners[o],c=n.duration;l.forEach(u=>u({chart:e,initial:n.initial,numSteps:c,currentStep:Math.min(i-n.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Bg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;const l=i.items;let c=l.length-1,u=!1,h;for(;c>=0;--c)h=l[c],h._active?(h._total>i.duration&&(i.duration=h._total),h.tick(e),u=!0):(l[c]=l[l.length-1],l.pop());u&&(o.draw(),this._notify(o,i,e,"progress")),l.length||(i.running=!1,this._notify(o,i,e,"complete"),i.initial=!1),n+=l.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var On=new kw;const Yp="transparent",Sw={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Op(t||Yp),o=i.valid&&Op(e||Yp);return o&&o.valid?o.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Cw{constructor(e,n,i,o){const l=n[i];o=mo([e.to,o,l,e.from]);const c=mo([e.from,l,o]);this._active=!0,this._fn=e.fn||Sw[e.type||typeof c],this._easing=Ar[e.easing]||Ar.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=c,this._to=o,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const o=this._target[this._prop],l=i-this._start,c=this._duration-l;this._start=i,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=l,this._loop=!!e.loop,this._to=mo([e.to,n,o,e.from]),this._from=mo([e.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,o=this._prop,l=this._from,c=this._loop,u=this._to;let h;if(this._active=l!==u&&(c||n<i),!this._active){this._target[o]=u,this._notify(!0);return}if(n<0){this._target[o]=l;return}h=n/i%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[o]=this._fn(l,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][n]()}}class nx{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Re(e))return;const n=Object.keys(nt.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const l=e[o];if(!Re(l))return;const c={};for(const u of n)c[u]=l[u];(rt(l.properties)&&l.properties||[o]).forEach(u=>{(u===o||!i.has(u))&&i.set(u,c)})})}_animateOptions(e,n){const i=n.options,o=Rw(e,i);if(!o)return[];const l=this._createAnimations(o,i);return i.$shared&&Ew(e.options.$animations,i).then(()=>{e.options=i},()=>{}),l}_createAnimations(e,n){const i=this._properties,o=[],l=e.$animations||(e.$animations={}),c=Object.keys(n),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){o.push(...this._animateOptions(e,n));continue}const g=n[p];let v=l[p];const b=i.get(p);if(v)if(b&&v.active()){v.update(b,g,u);continue}else v.cancel();if(!b||!b.duration){e[p]=g;continue}l[p]=v=new Cw(b,e,p,g),o.push(v)}return o}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return On.add(this._chart,i),!0}}function Ew(t,e){const n=[],i=Object.keys(e);for(let o=0;o<i.length;o++){const l=t[i[o]];l&&l.active()&&n.push(l.wait())}return Promise.all(n)}function Rw(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Qp(t,e){const n=t&&t.options||{},i=n.reverse,o=n.min===void 0?e:0,l=n.max===void 0?e:0;return{start:i?l:o,end:i?o:l}}function Pw(t,e,n){if(n===!1)return!1;const i=Qp(t,n),o=Qp(e,n);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function Aw(t){let e,n,i,o;return Re(t)?(e=t.top,n=t.right,i=t.bottom,o=t.left):e=n=i=o=t,{top:e,right:n,bottom:i,left:o,disabled:t===!1}}function sx(t,e){const n=[],i=t._getSortedDatasetMetas(e);let o,l;for(o=0,l=i.length;o<l;++o)n.push(i[o].index);return n}function Kp(t,e,n,i={}){const o=t.keys,l=i.mode==="single";let c,u,h,p;if(e===null)return;let g=!1;for(c=0,u=o.length;c<u;++c){if(h=+o[c],h===n){if(g=!0,i.all)continue;break}p=t.values[h],kt(p)&&(l||e===0||_n(e)===_n(p))&&(e+=p)}return!g&&!i.all?0:e}function Tw(t,e){const{iScale:n,vScale:i}=e,o=n.axis==="x"?"x":"y",l=i.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,g;for(h=0,p=c.length;h<p;++h)g=c[h],u[h]={[o]:g,[l]:t[g]};return u}function id(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Dw(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Mw(t){const{min:e,max:n,minDefined:i,maxDefined:o}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function Lw(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function Xp(t,e,n,i){for(const o of e.getMatchingVisibleMetas(i).reverse()){const l=t[o.index];if(n&&l>0||!n&&l<0)return o.index}return null}function Gp(t,e){const{chart:n,_cachedMeta:i}=t,o=n._stacks||(n._stacks={}),{iScale:l,vScale:c,index:u}=i,h=l.axis,p=c.axis,g=Dw(l,c,i),v=e.length;let b;for(let w=0;w<v;++w){const j=e[w],{[h]:N,[p]:y}=j,_=j._stacks||(j._stacks={});b=_[p]=Lw(o,g,N),b[u]=y,b._top=Xp(b,c,!0,i.type),b._bottom=Xp(b,c,!1,i.type);const S=b._visualValues||(b._visualValues={});S[u]=y}}function rd(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Ow(t,e){return Js(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function zw(t,e,n){return Js(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function yr(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const o of e){const l=o._stacks;if(!l||l[i]===void 0||l[i][n]===void 0)return;delete l[i][n],l[i]._visualValues!==void 0&&l[i]._visualValues[n]!==void 0&&delete l[i]._visualValues[n]}}}const ad=t=>t==="reset"||t==="none",Jp=(t,e)=>e?t:Object.assign({},t),Iw=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:sx(n,!0),values:null};class Ys{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=id(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&yr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),o=(v,b,w,j)=>v==="x"?b:v==="r"?j:w,l=n.xAxisID=ke(i.xAxisID,rd(e,"x")),c=n.yAxisID=ke(i.yAxisID,rd(e,"y")),u=n.rAxisID=ke(i.rAxisID,rd(e,"r")),h=n.indexAxis,p=n.iAxisID=o(h,l,c,u),g=n.vAxisID=o(h,c,l,u);n.xScale=this.getScaleForId(l),n.yScale=this.getScaleForId(c),n.rScale=this.getScaleForId(u),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(g)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Dp(this._data,this),e._stacked&&yr(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Re(n)){const o=this._cachedMeta;this._data=Tw(n,o)}else if(i!==n){if(i){Dp(i,this);const o=this._cachedMeta;yr(o),o._parsed=[]}n&&Object.isExtensible(n)&&b1(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const l=n._stacked;n._stacked=id(n.vScale,n),n.stack!==i.stack&&(o=!0,yr(n),n.stack=i.stack),this._resyncElements(e),(o||l!==n._stacked)&&(Gp(this,n._parsed),n._stacked=id(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:o}=this,{iScale:l,_stacked:c}=i,u=l.axis;let h=e===0&&n===o.length?!0:i._sorted,p=e>0&&i._parsed[e-1],g,v,b;if(this._parsing===!1)i._parsed=o,i._sorted=!0,b=o;else{rt(o[e])?b=this.parseArrayData(i,o,e,n):Re(o[e])?b=this.parseObjectData(i,o,e,n):b=this.parsePrimitiveData(i,o,e,n);const w=()=>v[u]===null||p&&v[u]<p[u];for(g=0;g<n;++g)i._parsed[g+e]=v=b[g],h&&(w()&&(h=!1),p=v);i._sorted=h}c&&Gp(this,b)}parsePrimitiveData(e,n,i,o){const{iScale:l,vScale:c}=e,u=l.axis,h=c.axis,p=l.getLabels(),g=l===c,v=new Array(o);let b,w,j;for(b=0,w=o;b<w;++b)j=b+i,v[b]={[u]:g||l.parse(p[j],j),[h]:c.parse(n[j],j)};return v}parseArrayData(e,n,i,o){const{xScale:l,yScale:c}=e,u=new Array(o);let h,p,g,v;for(h=0,p=o;h<p;++h)g=h+i,v=n[g],u[h]={x:l.parse(v[0],g),y:c.parse(v[1],g)};return u}parseObjectData(e,n,i,o){const{xScale:l,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(o);let g,v,b,w;for(g=0,v=o;g<v;++g)b=g+i,w=n[b],p[g]={x:l.parse(Ks(w,u),b),y:c.parse(Ks(w,h),b)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const o=this.chart,l=this._cachedMeta,c=n[e.axis],u={keys:sx(o,!0),values:n._stacks[e.axis]._visualValues};return Kp(u,c,l.index,{mode:i})}updateRangeFromParsed(e,n,i,o){const l=i[n.axis];let c=l===null?NaN:l;const u=o&&i._stacks[n.axis];o&&u&&(o.values=u,c=Kp(o,l,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,n){const i=this._cachedMeta,o=i._parsed,l=i._sorted&&e===i.iScale,c=o.length,u=this._getOtherScale(e),h=Iw(n,i,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:g,max:v}=Mw(u);let b,w;function j(){w=o[b];const N=w[u.axis];return!kt(w[e.axis])||g>N||v<N}for(b=0;b<c&&!(!j()&&(this.updateRangeFromParsed(p,e,w,h),l));++b);if(l){for(b=c-1;b>=0;--b)if(!j()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let o,l,c;for(o=0,l=n.length;o<l;++o)c=n[o][e.axis],kt(c)&&i.push(c);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,o=n.vScale,l=this.getParsed(e);return{label:i?""+i.getLabelForValue(l[i.axis]):"",value:o?""+o.getLabelForValue(l[o.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=Aw(ke(this.options.clip,Pw(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,o=i.data||[],l=n.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||o.length-u,p=this.options.drawActiveElementsOnTop;let g;for(i.dataset&&i.dataset.draw(e,l,u,h),g=u;g<u+h;++g){const v=o[g];v.hidden||(v.active&&p?c.push(v):v.draw(e,l))}for(g=0;g<c.length;++g)c[g].draw(e,l)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const o=this.getDataset();let l;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];l=c.$context||(c.$context=zw(this.getContext(),e,c)),l.parsed=this.getParsed(e),l.raw=o.data[e],l.index=l.dataIndex=e}else l=this.$context||(this.$context=Ow(this.chart.getContext(),this.index)),l.dataset=o,l.index=l.datasetIndex=this.index;return l.active=!!n,l.mode=i,l}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const o=n==="active",l=this._cachedDataOpts,c=e+"-"+n,u=l[c],h=this.enableOptionSharing&&Ir(i);if(u)return Jp(u,h);const p=this.chart.config,g=p.datasetElementScopeKeys(this._type,e),v=o?[`${e}Hover`,"hover",e,""]:[e,""],b=p.getOptionScopes(this.getDataset(),g),w=Object.keys(nt.elements[e]),j=()=>this.getContext(i,o,n),N=p.resolveNamedOptions(b,w,j,v);return N.$shared&&(N.$shared=h,l[c]=Object.freeze(Jp(N,h))),N}_resolveAnimations(e,n,i){const o=this.chart,l=this._cachedDataOpts,c=`animation-${n}`,u=l[c];if(u)return u;let h;if(o.options.animation!==!1){const g=this.chart.config,v=g.datasetAnimationScopeKeys(this._type,n),b=g.getOptionScopes(this.getDataset(),v);h=g.createResolver(b,this.getContext(e,i,n))}const p=new nx(o,h&&h.animations);return h&&h._cacheable&&(l[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||ad(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),o=this._sharedOptions,l=this.getSharedOptions(i),c=this.includeOptions(n,l)||l!==o;return this.updateSharedOptions(l,n,i),{sharedOptions:l,includeOptions:c}}updateElement(e,n,i,o){ad(o)?Object.assign(e,i):this._resolveAnimations(n,o).update(e,i)}updateSharedOptions(e,n,i){e&&!ad(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,o){e.active=o;const l=this.getStyle(n,o);this._resolveAnimations(n,i,o).update(e,{options:!o&&this.getSharedOptions(l)||l})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const o=i.length,l=n.length,c=Math.min(l,o);c&&this.parse(0,c),l>o?this._insertElements(o,l-o,e):l<o&&this._removeElements(l,o-l)}_insertElements(e,n,i=!0){const o=this._cachedMeta,l=o.data,c=e+n;let u;const h=p=>{for(p.length+=n,u=p.length-1;u>=c;u--)p[u]=p[u-n]};for(h(l),u=e;u<c;++u)l[u]=new this.dataElementType;this._parsing&&h(o._parsed),this.parse(e,n),i&&this.updateElements(l,e,n,"reset")}updateElements(e,n,i,o){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(e,n);i._stacked&&yr(i,o)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,o]=e;this[n](i,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ge(Ys,"defaults",{}),ge(Ys,"datasetElementType",null),ge(Ys,"dataElementType",null);function Fw(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let o=0,l=n.length;o<l;o++)i=i.concat(n[o].controller.getAllParsedValues(t));t._cache.$bar=Fg(i.sort((o,l)=>o-l))}return t._cache.$bar}function Bw(t){const e=t.iScale,n=Fw(e,t.type);let i=e._length,o,l,c,u;const h=()=>{c===32767||c===-32768||(Ir(u)&&(i=Math.min(i,Math.abs(c-u)||i)),u=c)};for(o=0,l=n.length;o<l;++o)c=e.getPixelForValue(n[o]),h();for(u=void 0,o=0,l=e.ticks.length;o<l;++o)c=e.getPixelForTick(o),h();return i}function $w(t,e,n,i){const o=n.barThickness;let l,c;return Me(o)?(l=e.min*n.categoryPercentage,c=n.barPercentage):(l=o*i,c=1),{chunk:l/i,ratio:c,start:e.pixels[t]-l/2}}function Uw(t,e,n,i){const o=e.pixels,l=o[t];let c=t>0?o[t-1]:null,u=t<o.length-1?o[t+1]:null;const h=n.categoryPercentage;c===null&&(c=l-(u===null?e.end-e.start:u-l)),u===null&&(u=l+l-c);const p=l-(l-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/i,ratio:n.barPercentage,start:p}}function Ww(t,e,n,i){const o=n.parse(t[0],i),l=n.parse(t[1],i),c=Math.min(o,l),u=Math.max(o,l);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[n.axis]=p,e._custom={barStart:h,barEnd:p,start:o,end:l,min:c,max:u}}function ix(t,e,n,i){return rt(t)?Ww(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Zp(t,e,n,i){const o=t.iScale,l=t.vScale,c=o.getLabels(),u=o===l,h=[];let p,g,v,b;for(p=n,g=n+i;p<g;++p)b=e[p],v={},v[o.axis]=u||o.parse(c[p],p),h.push(ix(b,v,l,p));return h}function od(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function Hw(t,e,n){return t!==0?_n(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function Vw(t){let e,n,i,o,l;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(o="end",l="start"):(o="start",l="end"),{start:n,end:i,reverse:e,top:o,bottom:l}}function qw(t,e,n,i){let o=e.borderSkipped;const l={};if(!o){t.borderSkipped=l;return}if(o===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:g}=Vw(t);o==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?o=p:(n._bottom||0)===i?o=g:(l[em(g,c,u,h)]=!0,o=p)),l[em(o,c,u,h)]=!0,t.borderSkipped=l}function em(t,e,n,i){return i?(t=Yw(t,e,n),t=tm(t,n,e)):t=tm(t,e,n),t}function Yw(t,e,n){return t===e?n:t===n?e:t}function tm(t,e,n){return t==="start"?e:t==="end"?n:t}function Qw(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class Co extends Ys{parsePrimitiveData(e,n,i,o){return Zp(e,n,i,o)}parseArrayData(e,n,i,o){return Zp(e,n,i,o)}parseObjectData(e,n,i,o){const{iScale:l,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=l.axis==="x"?u:h,g=c.axis==="x"?u:h,v=[];let b,w,j,N;for(b=i,w=i+o;b<w;++b)N=n[b],j={},j[l.axis]=l.parse(Ks(N,p),b),v.push(ix(Ks(N,g),j,c,b));return v}updateRangeFromParsed(e,n,i,o){super.updateRangeFromParsed(e,n,i,o);const l=i._custom;l&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,l.min),e.max=Math.max(e.max,l.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:o}=n,l=this.getParsed(e),c=l._custom,u=od(c)?"["+c.start+", "+c.end+"]":""+o.getLabelForValue(l[o.axis]);return{label:""+i.getLabelForValue(l[i.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,o){const l=o==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),g=this._getRuler(),{sharedOptions:v,includeOptions:b}=this._getSharedOptions(n,o);for(let w=n;w<n+i;w++){const j=this.getParsed(w),N=l||Me(j[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,g),_=(j._stacks||{})[u.axis],S={horizontal:p,base:N.base,enableBorderRadius:!_||od(j._custom)||c===_._top||c===_._bottom,x:p?N.head:y.center,y:p?y.center:N.head,height:p?y.size:Math.abs(N.size),width:p?Math.abs(N.size):y.size};b&&(S.options=v||this.resolveDataElementOptions(w,e[w].active?"active":o));const A=S.options||e[w].options;qw(S,A,_,c),Qw(S,A,g.ratio),this.updateElement(e[w],w,S,o)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(g=>g.controller.options.grouped),l=i.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(n),h=u&&u[i.axis],p=g=>{const v=g._parsed.find(w=>w[i.axis]===h),b=v&&v[g.vScale.axis];if(Me(b)||isNaN(b))return!0};for(const g of o)if(!(n!==void 0&&p(g))&&((l===!1||c.indexOf(g.stack)===-1||l===void 0&&g.stack===void 0)&&c.push(g.stack),g.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(i=>e[i].axis===n).shift()}_getAxis(){const e={},n=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)e[ke(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,i){const o=this._getStacks(e,i),l=n!==void 0?o.indexOf(n):-1;return l===-1?o.length-1:l}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,o=[];let l,c;for(l=0,c=n.data.length;l<c;++l)o.push(i.getPixelForValue(this.getParsed(l)[i.axis],l));const u=e.barThickness;return{min:u||Bw(n),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:o},options:{base:l,minBarLength:c}}=this,u=l||0,h=this.getParsed(e),p=h._custom,g=od(p);let v=h[n.axis],b=0,w=i?this.applyStack(n,h,i):v,j,N;w!==v&&(b=w-v,w=v),g&&(v=p.barStart,w=p.barEnd-p.barStart,v!==0&&_n(v)!==_n(p.barEnd)&&(b=0),b+=v);const y=!Me(l)&&!g?l:b;let _=n.getPixelForValue(y);if(this.chart.getDataVisibility(e)?j=n.getPixelForValue(b+w):j=_,N=j-_,Math.abs(N)<c){N=Hw(N,n,u)*c,v===u&&(_-=N/2);const S=n.getPixelForDecimal(0),A=n.getPixelForDecimal(1),z=Math.min(S,A),R=Math.max(S,A);_=Math.max(Math.min(_,R),z),j=_+N,i&&!g&&(h._stacks[n.axis]._visualValues[o]=n.getValueForPixel(j)-n.getValueForPixel(_))}if(_===n.getPixelForValue(u)){const S=_n(N)*n.getLineWidthForValue(u)/2;_+=S,N-=S}return{size:N,base:_,head:j,center:j+N/2}}_calculateBarIndexPixels(e,n){const i=n.scale,o=this.options,l=o.skipNull,c=ke(o.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(n.grouped){const g=l?this._getStackCount(e):n.stackCount,v=o.barThickness==="flex"?Uw(e,n,o,g*p):$w(e,n,o,g*p),b=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(ke(b,this.getFirstScaleIdForIndexAxis())),j=this._getStackIndex(this.index,this._cachedMeta.stack,l?e:void 0)+w;u=v.start+v.chunk*j+v.chunk/2,h=Math.min(c,v.chunk*v.ratio)}else u=i.getPixelForValue(this.getParsed(e)[i.axis],e),h=Math.min(c,n.min*n.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,o=i.length;let l=0;for(;l<o;++l)this.getParsed(l)[n.axis]!==null&&!i[l].hidden&&i[l].draw(this._ctx)}}ge(Co,"id","bar"),ge(Co,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),ge(Co,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function Kw(t,e,n){let i=1,o=1,l=0,c=0;if(e<Qe){const u=t,h=u+e,p=Math.cos(u),g=Math.sin(u),v=Math.cos(h),b=Math.sin(h),w=(A,z,R)=>Br(A,u,h,!0)?1:Math.max(z,z*n,R,R*n),j=(A,z,R)=>Br(A,u,h,!0)?-1:Math.min(z,z*n,R,R*n),N=w(0,p,v),y=w(ct,g,b),_=j(ze,p,v),S=j(ze+ct,g,b);i=(N-_)/2,o=(y-S)/2,l=-(N+_)/2,c=-(y+S)/2}return{ratioX:i,ratioY:o,offsetX:l,offsetY:c}}class kr extends Ys{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=i;else{let l=h=>+i[h];if(Re(i[e])){const{key:h="value"}=this._parsing;l=p=>+Ks(i[p],h)}let c,u;for(c=e,u=e+n;c<u;++c)o._parsed[c]=l(c)}}_getRotation(){return Fn(this.options.rotation-90)}_getCircumference(){return Fn(this.options.circumference)}_getRotationExtents(){let e=Qe,n=-Qe;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const o=this.chart.getDatasetMeta(i).controller,l=o._getRotation(),c=o._getCircumference();e=Math.min(e,l),n=Math.max(n,l+c)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,o=this._cachedMeta,l=o.data,c=this.getMaxBorderWidth()+this.getMaxOffset(l)+this.options.spacing,u=Math.max((Math.min(i.width,i.height)-c)/2,0),h=Math.min(s1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:g,rotation:v}=this._getRotationExtents(),{ratioX:b,ratioY:w,offsetX:j,offsetY:N}=Kw(v,g,h),y=(i.width-c)/b,_=(i.height-c)/w,S=Math.max(Math.min(y,_)/2,0),A=Mg(this.options.radius,S),z=Math.max(A*h,0),R=(A-z)/this._getVisibleDatasetWeightTotal();this.offsetX=j*A,this.offsetY=N*A,o.total=this.calculateTotal(),this.outerRadius=A-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*p,0),this.updateElements(l,0,l.length,e)}_circumference(e,n){const i=this.options,o=this._cachedMeta,l=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||o._parsed[e]===null||o.data[e].hidden?0:this.calculateCircumference(o._parsed[e]*l/Qe)}updateElements(e,n,i,o){const l=o==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,g=(u.left+u.right)/2,v=(u.top+u.bottom)/2,b=l&&p.animateScale,w=b?0:this.innerRadius,j=b?0:this.outerRadius,{sharedOptions:N,includeOptions:y}=this._getSharedOptions(n,o);let _=this._getRotation(),S;for(S=0;S<n;++S)_+=this._circumference(S,l);for(S=n;S<n+i;++S){const A=this._circumference(S,l),z=e[S],R={x:g+this.offsetX,y:v+this.offsetY,startAngle:_,endAngle:_+A,circumference:A,outerRadius:j,innerRadius:w};y&&(R.options=N||this.resolveDataElementOptions(S,z.active?"active":o)),_+=A,this.updateElement(z,S,R,o)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,o;for(o=0;o<n.length;o++){const l=e._parsed[o];l!==null&&!isNaN(l)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(i+=Math.abs(l))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Qe*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,o=i.data.labels||[],l=Kd(n._parsed[e],i.options.locale);return{label:o[e]||"",value:l}}getMaxBorderWidth(e){let n=0;const i=this.chart;let o,l,c,u,h;if(!e){for(o=0,l=i.data.datasets.length;o<l;++o)if(i.isDatasetVisible(o)){c=i.getDatasetMeta(o),e=c.data,u=c.controller;break}}if(!e)return 0;for(o=0,l=e.length;o<l;++o)h=u.resolveDataElementOptions(o),h.borderAlign!=="inner"&&(n=Math.max(n,h.borderWidth||0,h.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,o=e.length;i<o;++i){const l=this.resolveDataElementOptions(i);n=Math.max(n,l.offset||0,l.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(ke(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ge(kr,"id","doughnut"),ge(kr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),ge(kr,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),ge(kr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data,{labels:{pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=e.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((h,p)=>{const v=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:v.backgroundColor,fontColor:l,hidden:!e.getDataVisibility(p),lineDash:v.borderDash,lineDashOffset:v.borderDashOffset,lineJoin:v.borderJoinStyle,lineWidth:v.borderWidth,strokeStyle:v.borderColor,textAlign:o,pointStyle:i,borderRadius:c&&(u||v.borderRadius),index:p}}):[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class Eo extends Ys{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:o=[],_dataset:l}=n,c=this.chart._animationsDisabled;let{start:u,count:h}=N1(n,o,c);this._drawStart=u,this._drawCount=h,_1(n)&&(u=0,h=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!l._decimated,i.points=o;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(i,void 0,{animated:!c,options:p},e),this.updateElements(o,u,h,e)}updateElements(e,n,i,o){const l=o==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:g,includeOptions:v}=this._getSharedOptions(n,o),b=c.axis,w=u.axis,{spanGaps:j,segment:N}=this.options,y=Fr(j)?j:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||l||o==="none",S=n+i,A=e.length;let z=n>0&&this.getParsed(n-1);for(let R=0;R<A;++R){const I=e[R],D=_?I:{};if(R<n||R>=S){D.skip=!0;continue}const C=this.getParsed(R),L=Me(C[w]),V=D[b]=c.getPixelForValue(C[b],R),X=D[w]=l||L?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,C,h):C[w],R);D.skip=isNaN(V)||isNaN(X)||L,D.stop=R>0&&Math.abs(C[b]-z[b])>y,N&&(D.parsed=C,D.raw=p.data[R]),v&&(D.options=g||this.resolveDataElementOptions(R,I.active?"active":o)),_||this.updateElement(I,R,D,o),z=C}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,o=e.data||[];if(!o.length)return i;const l=o[0].size(this.resolveDataElementOptions(0)),c=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,l,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ge(Eo,"id","line"),ge(Eo,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ge(Eo,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Is(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class nu{constructor(e){ge(this,"options");this.options=e||{}}static override(e){Object.assign(nu.prototype,e)}init(){}formats(){return Is()}parse(){return Is()}format(){return Is()}add(){return Is()}diff(){return Is()}startOf(){return Is()}endOf(){return Is()}}var Xw={_date:nu};function Gw(t,e,n,i){const{controller:o,data:l,_sorted:c}=t,u=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&l.length){const p=u._reversePixels?v1:Hs;if(i){if(o._sharedOptions){const g=l[0],v=typeof g.getRange=="function"&&g.getRange(e);if(v){const b=p(l,e,n-v),w=p(l,e,n+v);return{lo:b.lo,hi:w.hi}}}}else{const g=p(l,e,n);if(h){const{vScale:v}=o._cachedMeta,{_parsed:b}=t,w=b.slice(0,g.lo+1).reverse().findIndex(N=>!Me(N[v.axis]));g.lo-=Math.max(0,w);const j=b.slice(g.hi).findIndex(N=>!Me(N[v.axis]));g.hi+=Math.max(0,j)}return g}}return{lo:0,hi:l.length-1}}function Zo(t,e,n,i,o){const l=t.getSortedVisibleDatasetMetas(),c=n[e];for(let u=0,h=l.length;u<h;++u){const{index:p,data:g}=l[u],{lo:v,hi:b}=Gw(l[u],e,c,o);for(let w=v;w<=b;++w){const j=g[w];j.skip||i(j,p,w)}}}function Jw(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,o){const l=e?Math.abs(i.x-o.x):0,c=n?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(l,2)+Math.pow(c,2))}}function ld(t,e,n,i,o){const l=[];return!o&&!t.isPointInArea(e)||Zo(t,n,e,function(u,h,p){!o&&!$r(u,t.chartArea,0)||u.inRange(e.x,e.y,i)&&l.push({element:u,datasetIndex:h,index:p})},!0),l}function Zw(t,e,n,i){let o=[];function l(c,u,h){const{startAngle:p,endAngle:g}=c.getProps(["startAngle","endAngle"],i),{angle:v}=zg(c,{x:e.x,y:e.y});Br(v,p,g)&&o.push({element:c,datasetIndex:u,index:h})}return Zo(t,n,e,l),o}function eN(t,e,n,i,o,l){let c=[];const u=Jw(n);let h=Number.POSITIVE_INFINITY;function p(g,v,b){const w=g.inRange(e.x,e.y,o);if(i&&!w)return;const j=g.getCenterPoint(o);if(!(!!l||t.isPointInArea(j))&&!w)return;const y=u(e,j);y<h?(c=[{element:g,datasetIndex:v,index:b}],h=y):y===h&&c.push({element:g,datasetIndex:v,index:b})}return Zo(t,n,e,p),c}function cd(t,e,n,i,o,l){return!l&&!t.isPointInArea(e)?[]:n==="r"&&!i?Zw(t,e,n,o):eN(t,e,n,i,o,l)}function nm(t,e,n,i,o){const l=[],c=n==="x"?"inXRange":"inYRange";let u=!1;return Zo(t,n,e,(h,p,g)=>{h[c]&&h[c](e[n],o)&&(l.push({element:h,datasetIndex:p,index:g}),u=u||h.inRange(e.x,e.y,o))}),i&&!u?[]:l}var tN={modes:{index(t,e,n,i){const o=$s(e,t),l=n.axis||"x",c=n.includeInvisible||!1,u=n.intersect?ld(t,o,l,i,c):cd(t,o,l,!1,i,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const g=u[0].index,v=p.data[g];v&&!v.skip&&h.push({element:v,datasetIndex:p.index,index:g})}),h):[]},dataset(t,e,n,i){const o=$s(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;let u=n.intersect?ld(t,o,l,i,c):cd(t,o,l,!1,i,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let g=0;g<p.length;++g)u.push({element:p[g],datasetIndex:h,index:g})}return u},point(t,e,n,i){const o=$s(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return ld(t,o,l,i,c)},nearest(t,e,n,i){const o=$s(e,t),l=n.axis||"xy",c=n.includeInvisible||!1;return cd(t,o,l,n.intersect,i,c)},x(t,e,n,i){const o=$s(e,t);return nm(t,o,"x",n.intersect,i)},y(t,e,n,i){const o=$s(e,t);return nm(t,o,"y",n.intersect,i)}}};const rx=["left","top","right","bottom"];function br(t,e){return t.filter(n=>n.pos===e)}function sm(t,e){return t.filter(n=>rx.indexOf(n.pos)===-1&&n.box.axis===e)}function jr(t,e){return t.sort((n,i)=>{const o=e?i:n,l=e?n:i;return o.weight===l.weight?o.index-l.index:o.weight-l.weight})}function nN(t){const e=[];let n,i,o,l,c,u;for(n=0,i=(t||[]).length;n<i;++n)o=t[n],{position:l,options:{stack:c,stackWeight:u=1}}=o,e.push({index:n,box:o,pos:l,horizontal:o.isHorizontal(),weight:o.weight,stack:c&&l+c,stackWeight:u});return e}function sN(t){const e={};for(const n of t){const{stack:i,pos:o,stackWeight:l}=n;if(!i||!rx.includes(o))continue;const c=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=l}return e}function iN(t,e){const n=sN(t),{vBoxMaxWidth:i,hBoxMaxHeight:o}=e;let l,c,u;for(l=0,c=t.length;l<c;++l){u=t[l];const{fullSize:h}=u.box,p=n[u.stack],g=p&&u.stackWeight/p.weight;u.horizontal?(u.width=g?g*i:h&&e.availableWidth,u.height=o):(u.width=i,u.height=g?g*o:h&&e.availableHeight)}return n}function rN(t){const e=nN(t),n=jr(e.filter(p=>p.box.fullSize),!0),i=jr(br(e,"left"),!0),o=jr(br(e,"right")),l=jr(br(e,"top"),!0),c=jr(br(e,"bottom")),u=sm(e,"x"),h=sm(e,"y");return{fullSize:n,leftAndTop:i.concat(l),rightAndBottom:o.concat(h).concat(c).concat(u),chartArea:br(e,"chartArea"),vertical:i.concat(o).concat(h),horizontal:l.concat(c).concat(u)}}function im(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function ax(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function aN(t,e,n,i){const{pos:o,box:l}=n,c=t.maxPadding;if(!Re(o)){n.size&&(t[o]-=n.size);const v=i[n.stack]||{size:0,count:1};v.size=Math.max(v.size,n.horizontal?l.height:l.width),n.size=v.size/v.count,t[o]+=n.size}l.getPadding&&ax(c,l.getPadding());const u=Math.max(0,e.outerWidth-im(c,t,"left","right")),h=Math.max(0,e.outerHeight-im(c,t,"top","bottom")),p=u!==t.w,g=h!==t.h;return t.w=u,t.h=h,n.horizontal?{same:p,other:g}:{same:g,other:p}}function oN(t){const e=t.maxPadding;function n(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function lN(t,e){const n=e.maxPadding;function i(o){const l={left:0,top:0,right:0,bottom:0};return o.forEach(c=>{l[c]=Math.max(e[c],n[c])}),l}return i(t?["left","right"]:["top","bottom"])}function Sr(t,e,n,i){const o=[];let l,c,u,h,p,g;for(l=0,c=t.length,p=0;l<c;++l){u=t[l],h=u.box,h.update(u.width||e.w,u.height||e.h,lN(u.horizontal,e));const{same:v,other:b}=aN(e,n,u,i);p|=v&&o.length,g=g||b,h.fullSize||o.push(u)}return p&&Sr(o,e,n,i)||g}function vo(t,e,n,i,o){t.top=n,t.left=e,t.right=e+i,t.bottom=n+o,t.width=i,t.height=o}function rm(t,e,n,i){const o=n.padding;let{x:l,y:c}=e;for(const u of t){const h=u.box,p=i[u.stack]||{placed:0,weight:1},g=u.stackWeight/p.weight||1;if(u.horizontal){const v=e.w*g,b=p.size||h.height;Ir(p.start)&&(c=p.start),h.fullSize?vo(h,o.left,c,n.outerWidth-o.right-o.left,b):vo(h,e.left+p.placed,c,v,b),p.start=c,p.placed+=v,c=h.bottom}else{const v=e.h*g,b=p.size||h.width;Ir(p.start)&&(l=p.start),h.fullSize?vo(h,l,o.top,b,n.outerHeight-o.bottom-o.top):vo(h,l,e.top+p.placed,b,v),p.start=l,p.placed+=v,l=h.right}}e.x=l,e.y=c}var en={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const o=tn(t.options.layout.padding),l=Math.max(e-o.width,0),c=Math.max(n-o.height,0),u=rN(t.boxes),h=u.vertical,p=u.horizontal;Oe(t.boxes,N=>{typeof N.beforeLayout=="function"&&N.beforeLayout()});const g=h.reduce((N,y)=>y.box.options&&y.box.options.display===!1?N:N+1,0)||1,v=Object.freeze({outerWidth:e,outerHeight:n,padding:o,availableWidth:l,availableHeight:c,vBoxMaxWidth:l/2/g,hBoxMaxHeight:c/2}),b=Object.assign({},o);ax(b,tn(i));const w=Object.assign({maxPadding:b,w:l,h:c,x:o.left,y:o.top},o),j=iN(h.concat(p),v);Sr(u.fullSize,w,v,j),Sr(h,w,v,j),Sr(p,w,v,j)&&Sr(h,w,v,j),oN(w),rm(u.leftAndTop,w,v,j),w.x+=w.w,w.y+=w.h,rm(u.rightAndBottom,w,v,j),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Oe(u.chartArea,N=>{const y=N.box;Object.assign(y,t.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class ox{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,o){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,o?Math.floor(n/o):i)}}isAttached(e){return!0}updateConfig(e){}}class cN extends ox{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Ro="$chartjs",dN={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},am=t=>t===null||t==="";function uN(t,e){const n=t.style,i=t.getAttribute("height"),o=t.getAttribute("width");if(t[Ro]={initial:{height:i,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",am(o)){const l=Wp(t,"width");l!==void 0&&(t.width=l)}if(am(i))if(t.style.height==="")t.height=t.width/(e||2);else{const l=Wp(t,"height");l!==void 0&&(t.height=l)}return t}const lx=fw?{passive:!0}:!1;function hN(t,e,n){t&&t.addEventListener(e,n,lx)}function fN(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,lx)}function pN(t,e){const n=dN[t.type]||t.type,{x:i,y:o}=$s(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:o!==void 0?o:null}}function Fo(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function mN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Fo(u.addedNodes,i),c=c&&!Fo(u.removedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function gN(t,e,n){const i=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Fo(u.removedNodes,i),c=c&&!Fo(u.addedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const Wr=new Map;let om=0;function cx(){const t=window.devicePixelRatio;t!==om&&(om=t,Wr.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function xN(t,e){Wr.size||window.addEventListener("resize",cx),Wr.set(t,e)}function vN(t){Wr.delete(t),Wr.size||window.removeEventListener("resize",cx)}function yN(t,e,n){const i=t.canvas,o=i&&tu(i);if(!o)return;const l=$g((u,h)=>{const p=o.clientWidth;n(u,h),p<o.clientWidth&&n()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,g=h.contentRect.height;p===0&&g===0||l(p,g)});return c.observe(o),xN(t,l),c}function dd(t,e,n){n&&n.disconnect(),e==="resize"&&vN(t)}function bN(t,e,n){const i=t.canvas,o=$g(l=>{t.ctx!==null&&n(pN(l,t))},t);return hN(i,e,o),o}class jN extends ox{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(uN(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[Ro])return!1;const i=n[Ro].initial;["height","width"].forEach(l=>{const c=i[l];Me(c)?n.removeAttribute(l):n.setAttribute(l,c)});const o=i.style||{};return Object.keys(o).forEach(l=>{n.style[l]=o[l]}),n.width=n.width,delete n[Ro],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const o=e.$proxies||(e.$proxies={}),c={attach:mN,detach:gN,resize:yN}[n]||bN;o[n]=c(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),o=i[n];if(!o)return;({attach:dd,detach:dd,resize:dd}[n]||fN)(e,n,o),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,o){return hw(e,n,i,o)}isAttached(e){const n=e&&tu(e);return!!(n&&n.isConnected)}}function wN(t){return!eu()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?cN:jN}class fn{constructor(){ge(this,"x");ge(this,"y");ge(this,"active",!1);ge(this,"options");ge(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Fr(this.x)&&Fr(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const o={};return e.forEach(l=>{o[l]=i[l]&&i[l].active()?i[l]._to:this[l]}),o}}ge(fn,"defaults",{}),ge(fn,"defaultRoutes");function NN(t,e){const n=t.options.ticks,i=_N(t),o=Math.min(n.maxTicksLimit||i,i),l=n.major.enabled?SN(e):[],c=l.length,u=l[0],h=l[c-1],p=[];if(c>o)return CN(e,p,l,c/o),p;const g=kN(l,e,o);if(c>0){let v,b;const w=c>1?Math.round((h-u)/(c-1)):null;for(yo(e,p,g,Me(w)?0:u-w,u),v=0,b=c-1;v<b;v++)yo(e,p,g,l[v],l[v+1]);return yo(e,p,g,h,Me(w)?e.length:h+w),p}return yo(e,p,g),p}function _N(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),o=t._maxLength/n;return Math.floor(Math.min(i,o))}function kN(t,e,n){const i=EN(t),o=e.length/n;if(!i)return Math.max(o,1);const l=u1(i);for(let c=0,u=l.length-1;c<u;c++){const h=l[c];if(h>o)return h}return Math.max(o,1)}function SN(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function CN(t,e,n,i){let o=0,l=n[0],c;for(i=Math.ceil(i),c=0;c<t.length;c++)c===l&&(e.push(t[c]),o++,l=n[o*i])}function yo(t,e,n,i,o){const l=ke(i,0),c=Math.min(ke(o,t.length),t.length);let u=0,h,p,g;for(n=Math.ceil(n),o&&(h=o-i,n=h/Math.floor(h/n)),g=l;g<0;)u++,g=Math.round(l+u*n);for(p=Math.max(l,0);p<c;p++)p===g&&(e.push(t[p]),u++,g=Math.round(l+u*n))}function EN(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const RN=t=>t==="left"?"right":t==="right"?"left":t,lm=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,cm=(t,e)=>Math.min(e||t,t);function dm(t,e){const n=[],i=t.length/e,o=t.length;let l=0;for(;l<o;l+=i)n.push(t[Math.floor(l)]);return n}function PN(t,e,n){const i=t.ticks.length,o=Math.min(e,i-1),l=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(o),p;if(!(n&&(i===1?p=Math.max(h-l,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(o-1))/2,h+=o<e?p:-p,h<l-u||h>c+u)))return h}function AN(t,e){Oe(t,n=>{const i=n.gc,o=i.length/2;let l;if(o>e){for(l=0;l<o;++l)delete n.data[i[l]];i.splice(0,o)}})}function wr(t){return t.drawTicks?t.tickLength:0}function um(t,e){if(!t.display)return 0;const n=_t(t.font,e),i=tn(t.padding);return(rt(t.text)?t.text.length:1)*n.lineHeight+i.height}function TN(t,e){return Js(t,{scale:e,type:"scale"})}function DN(t,e,n){return Js(t,{tick:n,index:e,type:"tick"})}function MN(t,e,n){let i=Yd(t);return(n&&e!=="right"||!n&&e==="right")&&(i=RN(i)),i}function LN(t,e,n,i){const{top:o,left:l,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:g}=h;let v=0,b,w,j;const N=c-o,y=u-l;if(t.isHorizontal()){if(w=jt(i,l,u),Re(n)){const _=Object.keys(n)[0],S=n[_];j=g[_].getPixelForValue(S)+N-e}else n==="center"?j=(p.bottom+p.top)/2+N-e:j=lm(t,n,e);b=u-l}else{if(Re(n)){const _=Object.keys(n)[0],S=n[_];w=g[_].getPixelForValue(S)-y+e}else n==="center"?w=(p.left+p.right)/2-y+e:w=lm(t,n,e);j=jt(i,c,o),v=n==="left"?-ct:ct}return{titleX:w,titleY:j,maxWidth:b,rotation:v}}class Di extends fn{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:o}=this;return e=bn(e,Number.POSITIVE_INFINITY),n=bn(n,Number.NEGATIVE_INFINITY),i=bn(i,Number.POSITIVE_INFINITY),o=bn(o,Number.NEGATIVE_INFINITY),{min:bn(e,i),max:bn(n,o),minDefined:kt(e),maxDefined:kt(n)}}getMinMax(e){let{min:n,max:i,minDefined:o,maxDefined:l}=this.getUserBounds(),c;if(o&&l)return{min:n,max:i};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),o||(n=Math.min(n,c.min)),l||(i=Math.max(i,c.max));return n=l&&n>i?i:n,i=o&&n>i?n:i,{min:bn(n,bn(i,n)),max:bn(i,bn(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){He(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:o,grace:l,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=H1(this,l,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?dm(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=NN(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){He(this.options.afterUpdate,[this])}beforeSetDimensions(){He(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){He(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),He(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){He(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,o,l;for(i=0,o=e.length;i<o;i++)l=e[i],l.label=He(n.callback,[l.value,i,e],this)}afterTickToLabelConversion(){He(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){He(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=cm(this.ticks.length,e.ticks.maxTicksLimit),o=n.minRotation||0,l=n.maxRotation;let c=o,u,h,p;if(!this._isVisible()||!n.display||o>=l||i<=1||!this.isHorizontal()){this.labelRotation=o;return}const g=this._getLabelSizes(),v=g.widest.width,b=g.highest.height,w=Nt(this.chart.width-v,0,this.maxWidth);u=e.offset?this.maxWidth/i:w/(i-1),v+6>u&&(u=w/(i-(e.offset?.5:1)),h=this.maxHeight-wr(e.grid)-n.padding-um(e.title,this.chart.options.font),p=Math.sqrt(v*v+b*b),c=m1(Math.min(Math.asin(Nt((g.highest.height+6)/u,-1,1)),Math.asin(Nt(h/p,-1,1))-Math.asin(Nt(b/p,-1,1)))),c=Math.max(o,Math.min(l,c))),this.labelRotation=c}afterCalculateLabelRotation(){He(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){He(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:o,grid:l}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=um(o,n.options.font);if(u?(e.width=this.maxWidth,e.height=wr(l)+h):(e.height=this.maxHeight,e.width=wr(l)+h),i.display&&this.ticks.length){const{first:p,last:g,widest:v,highest:b}=this._getLabelSizes(),w=i.padding*2,j=Fn(this.labelRotation),N=Math.cos(j),y=Math.sin(j);if(u){const _=i.mirror?0:y*v.width+N*b.height;e.height=Math.min(this.maxHeight,e.height+_+w)}else{const _=i.mirror?0:N*v.width+y*b.height;e.width=Math.min(this.maxWidth,e.width+_+w)}this._calculatePadding(p,g,y,N)}}this._handleMargins(),u?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,o){const{ticks:{align:l,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const g=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let b=0,w=0;h?p?(b=o*e.width,w=i*n.height):(b=i*e.height,w=o*n.width):l==="start"?w=n.width:l==="end"?b=e.width:l!=="inner"&&(b=e.width/2,w=n.width/2),this.paddingLeft=Math.max((b-g+c)*this.width/(this.width-g),0),this.paddingRight=Math.max((w-v+c)*this.width/(this.width-v),0)}else{let g=n.height/2,v=e.height/2;l==="start"?(g=0,v=e.height):l==="end"&&(g=n.height,v=0),this.paddingTop=g+c,this.paddingBottom=v+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){He(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)Me(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=dm(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:o,_longestTextCache:l}=this,c=[],u=[],h=Math.floor(n/cm(n,i));let p=0,g=0,v,b,w,j,N,y,_,S,A,z,R;for(v=0;v<n;v+=h){if(j=e[v].label,N=this._resolveTickFontOptions(v),o.font=y=N.string,_=l[y]=l[y]||{data:{},gc:[]},S=N.lineHeight,A=z=0,!Me(j)&&!rt(j))A=Ip(o,_.data,_.gc,A,j),z=S;else if(rt(j))for(b=0,w=j.length;b<w;++b)R=j[b],!Me(R)&&!rt(R)&&(A=Ip(o,_.data,_.gc,A,R),z+=S);c.push(A),u.push(z),p=Math.max(A,p),g=Math.max(z,g)}AN(l,n);const I=c.indexOf(p),D=u.indexOf(g),C=L=>({width:c[L]||0,height:u[L]||0});return{first:C(0),last:C(n-1),widest:C(I),highest:C(D),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return x1(this._alignToPixels?zs(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=DN(this.getContext(),e,i))}return this.$context||(this.$context=TN(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Fn(this.labelRotation),i=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),l=this._getLabelSizes(),c=e.autoSkipPadding||0,u=l?l.widest.width+c:0,h=l?l.highest.height+c:0;return this.isHorizontal()?h*i>u*o?u/i:h/o:h*o<u*i?h/i:u/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,o=this.options,{grid:l,position:c,border:u}=o,h=l.offset,p=this.isHorizontal(),v=this.ticks.length+(h?1:0),b=wr(l),w=[],j=u.setContext(this.getContext()),N=j.display?j.width:0,y=N/2,_=function(U){return zs(i,U,N)};let S,A,z,R,I,D,C,L,V,X,F,G;if(c==="top")S=_(this.bottom),D=this.bottom-b,L=S-y,X=_(e.top)+y,G=e.bottom;else if(c==="bottom")S=_(this.top),X=e.top,G=_(e.bottom)-y,D=S+y,L=this.top+b;else if(c==="left")S=_(this.right),I=this.right-b,C=S-y,V=_(e.left)+y,F=e.right;else if(c==="right")S=_(this.left),V=e.left,F=_(e.right)-y,I=S+y,C=this.left+b;else if(n==="x"){if(c==="center")S=_((e.top+e.bottom)/2+.5);else if(Re(c)){const U=Object.keys(c)[0],ie=c[U];S=_(this.chart.scales[U].getPixelForValue(ie))}X=e.top,G=e.bottom,D=S+y,L=D+b}else if(n==="y"){if(c==="center")S=_((e.left+e.right)/2);else if(Re(c)){const U=Object.keys(c)[0],ie=c[U];S=_(this.chart.scales[U].getPixelForValue(ie))}I=S-y,C=I-b,V=e.left,F=e.right}const W=ke(o.ticks.maxTicksLimit,v),oe=Math.max(1,Math.ceil(v/W));for(A=0;A<v;A+=oe){const U=this.getContext(A),ie=l.setContext(U),K=u.setContext(U),re=ie.lineWidth,J=ie.color,M=K.dash||[],Q=K.dashOffset,le=ie.tickWidth,ve=ie.tickColor,ye=ie.tickBorderDash||[],be=ie.tickBorderDashOffset;z=PN(this,A,h),z!==void 0&&(R=zs(i,z,re),p?I=C=V=F=R:D=L=X=G=R,w.push({tx1:I,ty1:D,tx2:C,ty2:L,x1:V,y1:X,x2:F,y2:G,width:re,color:J,borderDash:M,borderDashOffset:Q,tickWidth:le,tickColor:ve,tickBorderDash:ye,tickBorderDashOffset:be}))}return this._ticksLength=v,this._borderValue=S,w}_computeLabelItems(e){const n=this.axis,i=this.options,{position:o,ticks:l}=i,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:g,mirror:v}=l,b=wr(i.grid),w=b+g,j=v?-g:w,N=-Fn(this.labelRotation),y=[];let _,S,A,z,R,I,D,C,L,V,X,F,G="middle";if(o==="top")I=this.bottom-j,D=this._getXAxisLabelAlignment();else if(o==="bottom")I=this.top+j,D=this._getXAxisLabelAlignment();else if(o==="left"){const oe=this._getYAxisLabelAlignment(b);D=oe.textAlign,R=oe.x}else if(o==="right"){const oe=this._getYAxisLabelAlignment(b);D=oe.textAlign,R=oe.x}else if(n==="x"){if(o==="center")I=(e.top+e.bottom)/2+w;else if(Re(o)){const oe=Object.keys(o)[0],U=o[oe];I=this.chart.scales[oe].getPixelForValue(U)+w}D=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")R=(e.left+e.right)/2-w;else if(Re(o)){const oe=Object.keys(o)[0],U=o[oe];R=this.chart.scales[oe].getPixelForValue(U)}D=this._getYAxisLabelAlignment(b).textAlign}n==="y"&&(h==="start"?G="top":h==="end"&&(G="bottom"));const W=this._getLabelSizes();for(_=0,S=u.length;_<S;++_){A=u[_],z=A.label;const oe=l.setContext(this.getContext(_));C=this.getPixelForTick(_)+l.labelOffset,L=this._resolveTickFontOptions(_),V=L.lineHeight,X=rt(z)?z.length:1;const U=X/2,ie=oe.color,K=oe.textStrokeColor,re=oe.textStrokeWidth;let J=D;c?(R=C,D==="inner"&&(_===S-1?J=this.options.reverse?"left":"right":_===0?J=this.options.reverse?"right":"left":J="center"),o==="top"?p==="near"||N!==0?F=-X*V+V/2:p==="center"?F=-W.highest.height/2-U*V+V:F=-W.highest.height+V/2:p==="near"||N!==0?F=V/2:p==="center"?F=W.highest.height/2-U*V:F=W.highest.height-X*V,v&&(F*=-1),N!==0&&!oe.showLabelBackdrop&&(R+=V/2*Math.sin(N))):(I=C,F=(1-X)*V/2);let M;if(oe.showLabelBackdrop){const Q=tn(oe.backdropPadding),le=W.heights[_],ve=W.widths[_];let ye=F-Q.top,be=0-Q.left;switch(G){case"middle":ye-=le/2;break;case"bottom":ye-=le;break}switch(D){case"center":be-=ve/2;break;case"right":be-=ve;break;case"inner":_===S-1?be-=ve:_>0&&(be-=ve/2);break}M={left:be,top:ye,width:ve+Q.width,height:le+Q.height,color:oe.backdropColor}}y.push({label:z,font:L,textOffset:F,options:{rotation:N,color:ie,strokeColor:K,strokeWidth:re,textAlign:J,textBaseline:G,translation:[R,I],backdrop:M}})}return y}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Fn(this.labelRotation))return e==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:o,padding:l}}=this.options,c=this._getLabelSizes(),u=e+l,h=c.widest.width;let p,g;return n==="left"?o?(g=this.right+l,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g+=h)):(g=this.right-u,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g=this.left)):n==="right"?o?(g=this.left+l,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g-=h)):(g=this.left+u,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g=this.right)):p="right",{textAlign:p,x:g}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:o,width:l,height:c}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,o,l,c),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(l=>l.value===e);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let l,c;const u=(h,p,g)=>{!g.width||!g.color||(i.save(),i.lineWidth=g.width,i.strokeStyle=g.color,i.setLineDash(g.borderDash||[]),i.lineDashOffset=g.borderDashOffset,i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(p.x,p.y),i.stroke(),i.restore())};if(n.display)for(l=0,c=o.length;l<c;++l){const h=o[l];n.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),n.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:o}}=this,l=i.setContext(this.getContext()),c=i.display?l.width:0;if(!c)return;const u=o.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,g,v,b;this.isHorizontal()?(p=zs(e,this.left,c)-c/2,g=zs(e,this.right,u)+u/2,v=b=h):(v=zs(e,this.top,c)-c/2,b=zs(e,this.bottom,u)+u/2,p=g=h),n.save(),n.lineWidth=l.width,n.strokeStyle=l.color,n.beginPath(),n.moveTo(p,v),n.lineTo(g,b),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,o=this._computeLabelArea();o&&Xo(i,o);const l=this.getLabelItems(e);for(const c of l){const u=c.options,h=c.font,p=c.label,g=c.textOffset;Ur(i,p,0,g,h,u)}o&&Go(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:o}}=this;if(!i.display)return;const l=_t(i.font),c=tn(i.padding),u=i.align;let h=l.lineHeight/2;n==="bottom"||n==="center"||Re(n)?(h+=c.bottom,rt(i.text)&&(h+=l.lineHeight*(i.text.length-1))):h+=c.top;const{titleX:p,titleY:g,maxWidth:v,rotation:b}=LN(this,h,n,u);Ur(e,i.text,0,0,l,{color:i.color,maxWidth:v,rotation:b,textAlign:MN(u,n,o),textBaseline:"middle",translation:[p,g]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=ke(e.grid&&e.grid.z,-1),o=ke(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Di.prototype.draw?[{z:n,draw:l=>{this.draw(l)}}]:[{z:i,draw:l=>{this.drawBackground(),this.drawGrid(l),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:l=>{this.drawLabels(l)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let l,c;for(l=0,c=n.length;l<c;++l){const u=n[l];u[i]===this.id&&(!e||u.type===e)&&o.push(u)}return o}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return _t(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class bo{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;IN(n)&&(i=this.register(n));const o=this.items,l=e.id,c=this.scope+"."+l;if(!l)throw new Error("class does not have id: "+e);return l in o||(o[l]=e,ON(e,c,i),this.override&&nt.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,o=this.scope;i in n&&delete n[i],o&&i in nt[o]&&(delete nt[o][i],this.override&&delete Xs[i])}}function ON(t,e,n){const i=zr(Object.create(null),[n?nt.get(n):{},nt.get(e),t.defaults]);nt.set(e,i),t.defaultRoutes&&zN(e,t.defaultRoutes),t.descriptors&&nt.describe(e,t.descriptors)}function zN(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),o=i.pop(),l=[t].concat(i).join("."),c=e[n].split("."),u=c.pop(),h=c.join(".");nt.route(l,o,h,u)})}function IN(t){return"id"in t&&"defaults"in t}class FN{constructor(){this.controllers=new bo(Ys,"datasets",!0),this.elements=new bo(fn,"elements"),this.plugins=new bo(Object,"plugins"),this.scales=new bo(Di,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(o=>{const l=i||this._getRegistryForType(o);i||l.isForType(o)||l===this.plugins&&o.id?this._exec(e,l,o):Oe(o,c=>{const u=i||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,n,i){const o=Vd(e);He(i["before"+o],[],i),n[e](i),He(i["after"+o],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const o=n.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return o}}var Nn=new FN;class BN{constructor(){this._init=void 0}notify(e,n,i,o){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const l=o?this._descriptors(e).filter(o):this._descriptors(e),c=this._notify(l,e,n,i);return n==="afterDestroy"&&(this._notify(l,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,n,i,o){o=o||{};for(const l of e){const c=l.plugin,u=c[i],h=[n,o,l.options];if(He(u,h,c)===!1&&o.cancelable)return!1}return!0}invalidate(){Me(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,o=ke(i.options&&i.options.plugins,{}),l=$N(i);return o===!1&&!n?[]:WN(e,l,o,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,o=(l,c)=>l.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(o(n,i),e,"stop"),this._notify(o(i,n),e,"start")}}function $N(t){const e={},n=[],i=Object.keys(Nn.plugins.items);for(let l=0;l<i.length;l++)n.push(Nn.getPlugin(i[l]));const o=t.plugins||[];for(let l=0;l<o.length;l++){const c=o[l];n.indexOf(c)===-1&&(n.push(c),e[c.id]=!0)}return{plugins:n,localIds:e}}function UN(t,e){return!e&&t===!1?null:t===!0?{}:t}function WN(t,{plugins:e,localIds:n},i,o){const l=[],c=t.getContext();for(const u of e){const h=u.id,p=UN(i[h],o);p!==null&&l.push({plugin:u,options:HN(t.config,{plugin:u,local:n[h]},p,c)})}return l}function HN(t,{plugin:e,local:n},i,o){const l=t.pluginScopeKeys(e),c=t.getOptionScopes(i,l);return n&&e.defaults&&c.push(e.defaults),t.createResolver(c,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Cd(t,e){const n=nt.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function VN(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function qN(t,e){return t===e?"_index_":"_value_"}function hm(t){if(t==="x"||t==="y"||t==="r")return t}function YN(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Ed(t,...e){if(hm(t))return t;for(const n of e){const i=n.axis||YN(n.position)||t.length>1&&hm(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function fm(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function QN(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return fm(t,"x",n[0])||fm(t,"y",n[0])}return{}}function KN(t,e){const n=Xs[t.type]||{scales:{}},i=e.scales||{},o=Cd(t.type,e),l=Object.create(null);return Object.keys(i).forEach(c=>{const u=i[c];if(!Re(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=Ed(c,u,QN(c,t),nt.scales[u.type]),p=qN(h,o),g=n.scales||{};l[c]=Rr(Object.create(null),[{axis:h},u,g[h],g[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||Cd(u,e),g=(Xs[u]||{}).scales||{};Object.keys(g).forEach(v=>{const b=VN(v,h),w=c[b+"AxisID"]||b;l[w]=l[w]||Object.create(null),Rr(l[w],[{axis:b},i[w],g[v]])})}),Object.keys(l).forEach(c=>{const u=l[c];Rr(u,[nt.scales[u.type],nt.scale])}),l}function dx(t){const e=t.options||(t.options={});e.plugins=ke(e.plugins,{}),e.scales=KN(t,e)}function ux(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function XN(t){return t=t||{},t.data=ux(t.data),dx(t),t}const pm=new Map,hx=new Set;function jo(t,e){let n=pm.get(t);return n||(n=e(),pm.set(t,n),hx.add(n)),n}const Nr=(t,e,n)=>{const i=Ks(e,n);i!==void 0&&t.add(i)};class GN{constructor(e){this._config=XN(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=ux(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),dx(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return jo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return jo(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return jo(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return jo(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let o=i.get(e);return(!o||n)&&(o=new Map,i.set(e,o)),o}getOptionScopes(e,n,i){const{options:o,type:l}=this,c=this._cachedScopes(e,i),u=c.get(n);if(u)return u;const h=new Set;n.forEach(g=>{e&&(h.add(e),g.forEach(v=>Nr(h,e,v))),g.forEach(v=>Nr(h,o,v)),g.forEach(v=>Nr(h,Xs[l]||{},v)),g.forEach(v=>Nr(h,nt,v)),g.forEach(v=>Nr(h,kd,v))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),hx.has(n)&&c.set(n,p),p}chartOptionScopes(){const{options:e,type:n}=this;return[e,Xs[n]||{},nt.datasets[n]||{},{type:n},nt,kd]}resolveNamedOptions(e,n,i,o=[""]){const l={$shared:!0},{resolver:c,subPrefixes:u}=mm(this._resolverCache,e,o);let h=c;if(ZN(c,n)){l.$shared=!1,i=vs(i)?i():i;const p=this.createResolver(e,i,u);h=Ri(c,i,p)}for(const p of n)l[p]=h[p];return l}createResolver(e,n,i=[""],o){const{resolver:l}=mm(this._resolverCache,e,i);return Re(n)?Ri(l,n,void 0,o):l}}function mm(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const o=n.join();let l=i.get(o);return l||(l={resolver:Gd(e,n),subPrefixes:n.filter(u=>!u.toLowerCase().includes("hover"))},i.set(o,l)),l}const JN=t=>Re(t)&&Object.getOwnPropertyNames(t).some(e=>vs(t[e]));function ZN(t,e){const{isScriptable:n,isIndexable:i}=Vg(t);for(const o of e){const l=n(o),c=i(o),u=(c||l)&&t[o];if(l&&(vs(u)||JN(u))||c&&rt(u))return!0}return!1}var e_="4.5.1";const t_=["top","bottom","left","right","chartArea"];function gm(t,e){return t==="top"||t==="bottom"||t_.indexOf(t)===-1&&e==="x"}function xm(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function vm(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),He(n&&n.onComplete,[t],e)}function n_(t){const e=t.chart,n=e.options.animation;He(n&&n.onProgress,[t],e)}function fx(t){return eu()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Po={},ym=t=>{const e=fx(t);return Object.values(Po).filter(n=>n.canvas===e).pop()};function s_(t,e,n){const i=Object.keys(t);for(const o of i){const l=+o;if(l>=e){const c=t[o];delete t[o],(n>0||l>e)&&(t[l+n]=c)}}}function i_(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}var us;let Jr=(us=class{static register(...e){Nn.add(...e),bm()}static unregister(...e){Nn.remove(...e),bm()}constructor(e,n){const i=this.config=new GN(n),o=fx(e),l=ym(o);if(l)throw new Error("Canvas is already in use. Chart with ID '"+l.id+"' must be destroyed before the canvas with ID '"+l.canvas.id+"' can be reused.");const c=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||wN(o)),this.platform.updateConfig(i);const u=this.platform.acquireContext(o,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,g=h&&h.width;if(this.id=n1(),this.ctx=u,this.canvas=h,this.width=g,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new BN,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=j1(v=>this.update(v),c.resizeDelay||0),this._dataChanges=[],Po[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}On.listen(this,"complete",vm),On.listen(this,"progress",n_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:o,_aspectRatio:l}=this;return Me(e)?n&&l?l:o?i/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Nn}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Up(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Fp(this.canvas,this.ctx),this}stop(){return On.stop(this),this}resize(e,n){On.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,o=this.canvas,l=i.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(o,e,n,l),u=i.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Up(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),He(i.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Oe(n,(i,o)=>{i.id=o})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,o=Object.keys(i).reduce((c,u)=>(c[u]=!1,c),{});let l=[];n&&(l=l.concat(Object.keys(n).map(c=>{const u=n[c],h=Ed(c,u),p=h==="r",g=h==="x";return{options:u,dposition:p?"chartArea":g?"bottom":"left",dtype:p?"radialLinear":g?"category":"linear"}}))),Oe(l,c=>{const u=c.options,h=u.id,p=Ed(h,u),g=ke(u.type,c.dtype);(u.position===void 0||gm(u.position,p)!==gm(c.dposition))&&(u.position=c.dposition),o[h]=!0;let v=null;if(h in i&&i[h].type===g)v=i[h];else{const b=Nn.getScale(g);v=new b({id:h,type:g,ctx:this.ctx,chart:this}),i[v.id]=v}v.init(u,e)}),Oe(o,(c,u)=>{c||delete i[u]}),Oe(i,c=>{en.configure(this,c,c.options),en.addBox(this,c)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((o,l)=>o.index-l.index),i>n){for(let o=n;o<i;++o)this._destroyDatasetMeta(o);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(xm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,o)=>{n.filter(l=>l===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=n.length;i<o;i++){const l=n[i];let c=this.getDatasetMeta(i);const u=l.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(i),c=this.getDatasetMeta(i)),c.type=u,c.indexAxis=l.indexAxis||Cd(u,this.options),c.order=l.order||0,c.index=i,c.label=""+l.label,c.visible=this.isDatasetVisible(i),c.controller)c.controller.updateIndex(i),c.controller.linkScales();else{const h=Nn.getController(u),{datasetElementType:p,dataElementType:g}=nt.datasets[u];Object.assign(h,{dataElementType:Nn.getElement(g),datasetElementType:p&&Nn.getElement(p)}),c.controller=new h(this,i),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Oe(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const l=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,g=this.data.datasets.length;p<g;p++){const{controller:v}=this.getDatasetMeta(p),b=!o&&l.indexOf(v)===-1;v.buildOrUpdateElements(b),c=Math.max(+v.getMaxOverflow(),c)}c=this._minPadding=i.layout.autoPadding?c:0,this._updateLayout(c),o||Oe(l,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(xm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Oe(this.scales,e=>{en.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!Rp(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:l}of n){const c=i==="_removeElements"?-l:l;s_(e,o,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=l=>new Set(e.filter(c=>c[0]===l).map((c,u)=>u+","+c.splice(1).join(","))),o=i(0);for(let l=1;l<n;l++)if(!Rp(o,i(l)))return;return Array.from(o).map(l=>l.split(",")).map(l=>({method:l[1],start:+l[2],count:+l[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;en.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Oe(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,l)=>{o._idx=l}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,vs(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),o={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(On.has(this)?this.attached&&!On.running(this)&&On.start(this):(this.draw(),vm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let o,l;for(o=0,l=n.length;o<l;++o){const c=n[o];(!e||c.visible)&&i.push(c)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i={meta:e,index:e.index,cancelable:!0},o=tx(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&Xo(n,o),e.controller.draw(),o&&Go(n),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return $r(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,o){const l=tN.modes[n];return typeof l=="function"?l(this,e,i,o):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let o=i.filter(l=>l&&l._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=Js(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const o=i?"show":"hide",l=this.getDatasetMeta(e),c=l.controller._resolveAnimations(void 0,o);Ir(n)?(l.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),c.update(l,{visible:i}),this.update(u=>u.datasetIndex===e?o:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),On.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Fp(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete Po[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(l,c)=>{n.addEventListener(this,l,c),e[l]=c},o=(l,c,u)=>{l.offsetX=c,l.offsetY=u,this._eventHandler(l)};Oe(this.options.events,l=>i(l,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(h,p)=>{n.addEventListener(this,h,p),e[h]=p},o=(h,p)=>{e[h]&&(n.removeEventListener(this,h,p),delete e[h])},l=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{o("attach",u),this.attached=!0,this.resize(),i("resize",l),i("detach",c)};c=()=>{this.attached=!1,o("resize",l),this._stop(),this._resize(0,0),i("attach",u)},n.isAttached(this.canvas)?u():c()}unbindEvents(){Oe(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Oe(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const o=i?"set":"remove";let l,c,u,h;for(n==="dataset"&&(l=this.getDatasetMeta(e[0].datasetIndex),l.controller["_"+o+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[o+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:l,index:c})=>{const u=this.getDatasetMeta(l);if(!u)throw new Error("No dataset found at index "+l);return{datasetIndex:l,element:u.data[c],index:c}});!Mo(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const o=this.options.hover,l=(h,p)=>h.filter(g=>!p.some(v=>g.datasetIndex===v.datasetIndex&&g.index===v.index)),c=l(n,e),u=i?e:l(e,n);c.length&&this.updateHoverStyle(c,o.mode,!1),u.length&&o.mode&&this.updateHoverStyle(u,o.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},o=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;const l=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(l||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:o=[],options:l}=this,c=n,u=this._getActiveElements(e,o,i,c),h=l1(e),p=i_(e,this._lastEvent,i,h);i&&(this._lastEvent=null,He(l.onHover,[e,u,this],this),h&&He(l.onClick,[e,u,this],this));const g=!Mo(u,o);return(g||n)&&(this._active=u,this._updateHoverStyles(u,o,n)),this._lastEvent=p,g}_getActiveElements(e,n,i,o){if(e.type==="mouseout")return[];if(!i)return n;const l=this.options.hover;return this.getElementsAtEventForMode(e,l.mode,l,o)}},ge(us,"defaults",nt),ge(us,"instances",Po),ge(us,"overrides",Xs),ge(us,"registry",Nn),ge(us,"version",e_),ge(us,"getChart",ym),us);function bm(){return Oe(Jr.instances,t=>t._plugins.invalidate())}function r_(t,e,n){const{startAngle:i,x:o,y:l,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:g}=h,v=Math.min(p/c,Wt(i-n));if(t.beginPath(),t.arc(o,l,c-p/2,i+v/2,n-v/2),u>0){const b=Math.min(p/u,Wt(i-n));t.arc(o,l,u+p/2,n-b/2,i+b/2,!0)}else{const b=Math.min(p/2,c*Wt(i-n));if(g==="round")t.arc(o,l,b,n-ze/2,i+ze/2,!0);else if(g==="bevel"){const w=2*b*b,j=-w*Math.cos(n+ze/2)+o,N=-w*Math.sin(n+ze/2)+l,y=w*Math.cos(i+ze/2)+o,_=w*Math.sin(i+ze/2)+l;t.lineTo(j,N),t.lineTo(y,_)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function a_(t,e,n){const{startAngle:i,pixelMargin:o,x:l,y:c,outerRadius:u,innerRadius:h}=e;let p=o/u;t.beginPath(),t.arc(l,c,u,i-p,n+p),h>o?(p=o/h,t.arc(l,c,h,n+p,i-p,!0)):t.arc(l,c,o,n+ct,i-ct),t.closePath(),t.clip()}function o_(t){return Xd(t,["outerStart","outerEnd","innerStart","innerEnd"])}function l_(t,e,n,i){const o=o_(t.options.borderRadius),l=(n-e)/2,c=Math.min(l,i*e/2),u=h=>{const p=(n-Math.min(l,h))*i/2;return Nt(h,0,Math.min(l,p))};return{outerStart:u(o.outerStart),outerEnd:u(o.outerEnd),innerStart:Nt(o.innerStart,0,c),innerEnd:Nt(o.innerEnd,0,c)}}function ki(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Bo(t,e,n,i,o,l){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:g}=e,v=Math.max(e.outerRadius+i+n-p,0),b=g>0?g+i+n+p:0;let w=0;const j=o-h;if(i){const oe=g>0?g-i:0,U=v>0?v-i:0,ie=(oe+U)/2,K=ie!==0?j*ie/(ie+i):j;w=(j-K)/2}const N=Math.max(.001,j*v-n/ze)/v,y=(j-N)/2,_=h+y+w,S=o-y-w,{outerStart:A,outerEnd:z,innerStart:R,innerEnd:I}=l_(e,b,v,S-_),D=v-A,C=v-z,L=_+A/D,V=S-z/C,X=b+R,F=b+I,G=_+R/X,W=S-I/F;if(t.beginPath(),l){const oe=(L+V)/2;if(t.arc(c,u,v,L,oe),t.arc(c,u,v,oe,V),z>0){const re=ki(C,V,c,u);t.arc(re.x,re.y,z,V,S+ct)}const U=ki(F,S,c,u);if(t.lineTo(U.x,U.y),I>0){const re=ki(F,W,c,u);t.arc(re.x,re.y,I,S+ct,W+Math.PI)}const ie=(S-I/b+(_+R/b))/2;if(t.arc(c,u,b,S-I/b,ie,!0),t.arc(c,u,b,ie,_+R/b,!0),R>0){const re=ki(X,G,c,u);t.arc(re.x,re.y,R,G+Math.PI,_-ct)}const K=ki(D,_,c,u);if(t.lineTo(K.x,K.y),A>0){const re=ki(D,L,c,u);t.arc(re.x,re.y,A,_-ct,L)}}else{t.moveTo(c,u);const oe=Math.cos(L)*v+c,U=Math.sin(L)*v+u;t.lineTo(oe,U);const ie=Math.cos(V)*v+c,K=Math.sin(V)*v+u;t.lineTo(ie,K)}t.closePath()}function c_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u}=e;let h=e.endAngle;if(l){Bo(t,e,n,i,h,o);for(let p=0;p<l;++p)t.fill();isNaN(u)||(h=c+(u%Qe||Qe))}return Bo(t,e,n,i,h,o),t.fill(),h}function d_(t,e,n,i,o){const{fullCircles:l,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:g,borderDash:v,borderDashOffset:b,borderRadius:w}=h,j=h.borderAlign==="inner";if(!p)return;t.setLineDash(v||[]),t.lineDashOffset=b,j?(t.lineWidth=p*2,t.lineJoin=g||"round"):(t.lineWidth=p,t.lineJoin=g||"bevel");let N=e.endAngle;if(l){Bo(t,e,n,i,N,o);for(let y=0;y<l;++y)t.stroke();isNaN(u)||(N=c+(u%Qe||Qe))}j&&a_(t,e,N),h.selfJoin&&N-c>=ze&&w===0&&g!=="miter"&&r_(t,e,N),l||(Bo(t,e,n,i,N,o),t.stroke())}class Cr extends fn{constructor(n){super();ge(this,"circumference");ge(this,"endAngle");ge(this,"fullCircles");ge(this,"innerRadius");ge(this,"outerRadius");ge(this,"pixelMargin");ge(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.getProps(["x","y"],o),{angle:c,distance:u}=zg(l,{x:n,y:i}),{startAngle:h,endAngle:p,innerRadius:g,outerRadius:v,circumference:b}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),w=(this.options.spacing+this.options.borderWidth)/2,j=ke(b,p-h),N=Br(c,h,p)&&h!==p,y=j>=Qe||N,_=Bn(u,g+w,v+w);return y&&_}getCenterPoint(n){const{x:i,y:o,startAngle:l,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:p,spacing:g}=this.options,v=(l+c)/2,b=(u+h+g+p)/2;return{x:i+Math.cos(v)*b,y:o+Math.sin(v)*b}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:o}=this,l=(i.offset||0)/4,c=(i.spacing||0)/2,u=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>Qe?Math.floor(o/Qe):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const h=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(h)*l,Math.sin(h)*l);const p=1-Math.sin(Math.min(ze,o||0)),g=l*p;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,c_(n,this,g,c,u),d_(n,this,g,c,u),n.restore()}}ge(Cr,"id","arc"),ge(Cr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),ge(Cr,"defaultRoutes",{backgroundColor:"backgroundColor"}),ge(Cr,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function px(t,e,n=e){t.lineCap=ke(n.borderCapStyle,e.borderCapStyle),t.setLineDash(ke(n.borderDash,e.borderDash)),t.lineDashOffset=ke(n.borderDashOffset,e.borderDashOffset),t.lineJoin=ke(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ke(n.borderWidth,e.borderWidth),t.strokeStyle=ke(n.borderColor,e.borderColor)}function u_(t,e,n){t.lineTo(n.x,n.y)}function h_(t){return t.stepped?L1:t.tension||t.cubicInterpolationMode==="monotone"?O1:u_}function mx(t,e,n={}){const i=t.length,{start:o=0,end:l=i-1}=n,{start:c,end:u}=e,h=Math.max(o,c),p=Math.min(l,u),g=o<c&&l<c||o>u&&l>u;return{count:i,start:h,loop:e.loop,ilen:p<h&&!g?i+p-h:p-h}}function f_(t,e,n,i){const{points:o,options:l}=e,{count:c,start:u,loop:h,ilen:p}=mx(o,n,i),g=h_(l);let{move:v=!0,reverse:b}=i||{},w,j,N;for(w=0;w<=p;++w)j=o[(u+(b?p-w:w))%c],!j.skip&&(v?(t.moveTo(j.x,j.y),v=!1):g(t,N,j,b,l.stepped),N=j);return h&&(j=o[(u+(b?p:0))%c],g(t,N,j,b,l.stepped)),!!h}function p_(t,e,n,i){const o=e.points,{count:l,start:c,ilen:u}=mx(o,n,i),{move:h=!0,reverse:p}=i||{};let g=0,v=0,b,w,j,N,y,_;const S=z=>(c+(p?u-z:z))%l,A=()=>{N!==y&&(t.lineTo(g,y),t.lineTo(g,N),t.lineTo(g,_))};for(h&&(w=o[S(0)],t.moveTo(w.x,w.y)),b=0;b<=u;++b){if(w=o[S(b)],w.skip)continue;const z=w.x,R=w.y,I=z|0;I===j?(R<N?N=R:R>y&&(y=R),g=(v*g+z)/++v):(A(),t.lineTo(z,R),j=I,v=0,N=y=R),_=R}A()}function Rd(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?p_:f_}function m_(t){return t.stepped?pw:t.tension||t.cubicInterpolationMode==="monotone"?mw:Us}function g_(t,e,n,i){let o=e._path;o||(o=e._path=new Path2D,e.path(o,n,i)&&o.closePath()),px(t,e.options),t.stroke(o)}function x_(t,e,n,i){const{segments:o,options:l}=e,c=Rd(e);for(const u of o)px(t,l,u.style),t.beginPath(),c(t,e,u,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const v_=typeof Path2D=="function";function y_(t,e,n,i){v_&&!e.options.segment?g_(t,e,n,i):x_(t,e,n,i)}class $n extends fn{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;aw(this._points,i,e,o,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=jw(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,o=e[n],l=this.points,c=ex(this,{property:n,start:o,end:o});if(!c.length)return;const u=[],h=m_(i);let p,g;for(p=0,g=c.length;p<g;++p){const{start:v,end:b}=c[p],w=l[v],j=l[b];if(w===j){u.push(w);continue}const N=Math.abs((o-w[n])/(j[n]-w[n])),y=h(w,j,N,i.stepped);y[n]=e[n],u.push(y)}return u.length===1?u[0]:u}pathSegment(e,n,i){return Rd(this)(e,this,n,i)}path(e,n,i){const o=this.segments,l=Rd(this);let c=this._loop;n=n||0,i=i||this.points.length-n;for(const u of o)c&=l(e,this,u,{start:n,end:n+i-1});return!!c}draw(e,n,i,o){const l=this.options||{};(this.points||[]).length&&l.borderWidth&&(e.save(),y_(e,this,i,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ge($n,"id","line"),ge($n,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ge($n,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ge($n,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function jm(t,e,n,i){const o=t.options,{[n]:l}=t.getProps([n],i);return Math.abs(e-l)<o.radius+o.hitRadius}class Dr extends fn{constructor(n){super();ge(this,"parsed");ge(this,"skip");ge(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,o){const l=this.options,{x:c,y:u}=this.getProps(["x","y"],o);return Math.pow(n-c,2)+Math.pow(i-u,2)<Math.pow(l.hitRadius+l.radius,2)}inXRange(n,i){return jm(this,n,"x",i)}inYRange(n,i){return jm(this,n,"y",i)}getCenterPoint(n){const{x:i,y:o}=this.getProps(["x","y"],n);return{x:i,y:o}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const o=i&&n.borderWidth||0;return(i+o)*2}draw(n,i){const o=this.options;this.skip||o.radius<.1||!$r(this,i,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,Sd(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ge(Dr,"id","point"),ge(Dr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ge(Dr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function gx(t,e){const{x:n,y:i,base:o,width:l,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,g,v;return t.horizontal?(v=c/2,u=Math.min(n,o),h=Math.max(n,o),p=i-v,g=i+v):(v=l/2,u=n-v,h=n+v,p=Math.min(i,o),g=Math.max(i,o)),{left:u,top:p,right:h,bottom:g}}function ms(t,e,n,i){return t?0:Nt(e,n,i)}function b_(t,e,n){const i=t.options.borderWidth,o=t.borderSkipped,l=Hg(i);return{t:ms(o.top,l.top,0,n),r:ms(o.right,l.right,0,e),b:ms(o.bottom,l.bottom,0,n),l:ms(o.left,l.left,0,e)}}function j_(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,l=Si(o),c=Math.min(e,n),u=t.borderSkipped,h=i||Re(o);return{topLeft:ms(!h||u.top||u.left,l.topLeft,0,c),topRight:ms(!h||u.top||u.right,l.topRight,0,c),bottomLeft:ms(!h||u.bottom||u.left,l.bottomLeft,0,c),bottomRight:ms(!h||u.bottom||u.right,l.bottomRight,0,c)}}function w_(t){const e=gx(t),n=e.right-e.left,i=e.bottom-e.top,o=b_(t,n/2,i/2),l=j_(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:l},inner:{x:e.left+o.l,y:e.top+o.t,w:n-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,l.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,l.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,l.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,l.bottomRight-Math.max(o.b,o.r))}}}}function ud(t,e,n,i){const o=e===null,l=n===null,u=t&&!(o&&l)&&gx(t,i);return u&&(o||Bn(e,u.left,u.right))&&(l||Bn(n,u.top,u.bottom))}function N_(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function __(t,e){t.rect(e.x,e.y,e.w,e.h)}function hd(t,e,n={}){const i=t.x!==n.x?-e:0,o=t.y!==n.y?-e:0,l=(t.x+t.w!==n.x+n.w?e:0)-i,c=(t.y+t.h!==n.y+n.h?e:0)-o;return{x:t.x+i,y:t.y+o,w:t.w+l,h:t.h+c,radius:t.radius}}class Ao extends fn{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:o}}=this,{inner:l,outer:c}=w_(this),u=N_(c.radius)?zo:__;e.save(),(c.w!==l.w||c.h!==l.h)&&(e.beginPath(),u(e,hd(c,n,l)),e.clip(),u(e,hd(l,-n,c)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),u(e,hd(l,n)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,n,i){return ud(this,e,n,i)}inXRange(e,n){return ud(this,e,null,n)}inYRange(e,n){return ud(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:o,horizontal:l}=this.getProps(["x","y","base","horizontal"],e);return{x:l?(n+o)/2:n,y:l?i:(i+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}ge(Ao,"id","bar"),ge(Ao,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),ge(Ao,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function k_(t,e,n){const i=t.segments,o=t.points,l=e.points,c=[];for(const u of i){let{start:h,end:p}=u;p=el(h,p,o);const g=Pd(n,o[h],o[p],u.loop);if(!e.segments){c.push({source:u,target:g,start:o[h],end:o[p]});continue}const v=ex(e,g);for(const b of v){const w=Pd(n,l[b.start],l[b.end],b.loop),j=Zg(u,o,w);for(const N of j)c.push({source:N,target:b,start:{[n]:wm(g,w,"start",Math.max)},end:{[n]:wm(g,w,"end",Math.min)}})}}return c}function Pd(t,e,n,i){if(i)return;let o=e[t],l=n[t];return t==="angle"&&(o=Wt(o),l=Wt(l)),{property:t,start:o,end:l}}function S_(t,e){const{x:n=null,y:i=null}=t||{},o=e.points,l=[];return e.segments.forEach(({start:c,end:u})=>{u=el(c,u,o);const h=o[c],p=o[u];i!==null?(l.push({x:h.x,y:i}),l.push({x:p.x,y:i})):n!==null&&(l.push({x:n,y:h.y}),l.push({x:n,y:p.y}))}),l}function el(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function wm(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function xx(t,e){let n=[],i=!1;return rt(t)?(i=!0,n=t):n=S_(t,e),n.length?new $n({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function Nm(t){return t&&t.fill!==!1}function C_(t,e,n){let o=t[e].fill;const l=[e];let c;if(!n)return o;for(;o!==!1&&l.indexOf(o)===-1;){if(!kt(o))return o;if(c=t[o],!c)return!1;if(c.visible)return o;l.push(o),o=c.fill}return!1}function E_(t,e,n){const i=T_(t);if(Re(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return kt(o)&&Math.floor(o)===o?R_(i[0],e,o,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function R_(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function P_(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Re(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function A_(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:Re(t)?i=t.value:i=e.getBaseValue(),i}function T_(t){const e=t.options,n=e.fill;let i=ke(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function D_(t){const{scale:e,index:n,line:i}=t,o=[],l=i.segments,c=i.points,u=M_(e,n);u.push(xx({x:null,y:e.bottom},i));for(let h=0;h<l.length;h++){const p=l[h];for(let g=p.start;g<=p.end;g++)L_(o,c[g],u)}return new $n({points:o,options:{}})}function M_(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){const l=i[o];if(l.index===e)break;l.hidden||n.unshift(l.dataset)}return n}function L_(t,e,n){const i=[];for(let o=0;o<n.length;o++){const l=n[o],{first:c,last:u,point:h}=O_(l,e,"x");if(!(!h||c&&u)){if(c)i.unshift(h);else if(t.push(h),!u)break}}t.push(...i)}function O_(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const o=i[n],l=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<l.length;p++){const g=l[p],v=c[g.start][n],b=c[g.end][n];if(Bn(o,v,b)){u=o===v,h=o===b;break}}return{first:u,last:h,point:i}}class vx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:o,y:l,radius:c}=this;return n=n||{start:0,end:Qe},e.arc(o,l,c,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:o}=this,l=e.angle;return{x:n+Math.cos(l)*o,y:i+Math.sin(l)*o,angle:l}}}function z_(t){const{chart:e,fill:n,line:i}=t;if(kt(n))return I_(e,n);if(n==="stack")return D_(t);if(n==="shape")return!0;const o=F_(t);return o instanceof vx?o:xx(o,i)}function I_(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function F_(t){return(t.scale||{}).getPointPositionForValue?$_(t):B_(t)}function B_(t){const{scale:e={},fill:n}=t,i=P_(n,e);if(kt(i)){const o=e.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function $_(t){const{scale:e,fill:n}=t,i=e.options,o=e.getLabels().length,l=i.reverse?e.max:e.min,c=A_(n,e,l),u=[];if(i.grid.circular){const h=e.getPointPositionForValue(0,l);return new vx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<o;++h)u.push(e.getPointPositionForValue(h,c));return u}function fd(t,e,n){const i=z_(e),{chart:o,index:l,line:c,scale:u,axis:h}=e,p=c.options,g=p.fill,v=p.backgroundColor,{above:b=v,below:w=v}=g||{},j=o.getDatasetMeta(l),N=tx(o,j);i&&c.points.length&&(Xo(t,n),U_(t,{line:c,target:i,above:b,below:w,area:n,scale:u,axis:h,clip:N}),Go(t))}function U_(t,e){const{line:n,target:i,above:o,below:l,area:c,scale:u,clip:h}=e,p=n._loop?"angle":e.axis;t.save();let g=l;l!==o&&(p==="x"?(_m(t,i,c.top),pd(t,{line:n,target:i,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),_m(t,i,c.bottom)):p==="y"&&(km(t,i,c.left),pd(t,{line:n,target:i,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),km(t,i,c.right),g=o)),pd(t,{line:n,target:i,color:g,scale:u,property:p,clip:h}),t.restore()}function _m(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[el(h,p,o)];l?(t.moveTo(g.x,g.y),l=!1):(t.lineTo(g.x,n),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(v.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function km(t,e,n){const{segments:i,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[el(h,p,o)];l?(t.moveTo(g.x,g.y),l=!1):(t.lineTo(n,g.y),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(n,v.y)}t.lineTo(n,e.first().y),t.closePath(),t.clip()}function pd(t,e){const{line:n,target:i,property:o,color:l,scale:c,clip:u}=e,h=k_(n,i,o);for(const{source:p,target:g,start:v,end:b}of h){const{style:{backgroundColor:w=l}={}}=p,j=i!==!0;t.save(),t.fillStyle=w,W_(t,c,u,j&&Pd(o,v,b)),t.beginPath();const N=!!n.pathSegment(t,p);let y;if(j){N?t.closePath():Sm(t,i,b,o);const _=!!i.pathSegment(t,g,{move:N,reverse:!0});y=N&&_,y||Sm(t,i,v,o)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function W_(t,e,n,i){const o=e.chart.chartArea,{property:l,start:c,end:u}=i||{};if(l==="x"||l==="y"){let h,p,g,v;l==="x"?(h=c,p=o.top,g=u,v=o.bottom):(h=o.left,p=c,g=o.right,v=u),t.beginPath(),n&&(h=Math.max(h,n.left),g=Math.min(g,n.right),p=Math.max(p,n.top),v=Math.min(v,n.bottom)),t.rect(h,p,g-h,v-p),t.clip()}}function Sm(t,e,n,i){const o=e.interpolate(n,i);o&&t.lineTo(o.x,o.y)}var yx={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,o=[];let l,c,u,h;for(c=0;c<i;++c)l=t.getDatasetMeta(c),u=l.dataset,h=null,u&&u.options&&u instanceof $n&&(h={visible:t.isDatasetVisible(c),index:c,fill:E_(u,c,i),chart:t,axis:l.controller.options.indexAxis,scale:l.vScale,line:u}),l.$filler=h,o.push(h);for(c=0;c<i;++c)h=o[c],!(!h||h.fill===!1)&&(h.fill=C_(o,c,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),l=t.chartArea;for(let c=o.length-1;c>=0;--c){const u=o[c].$filler;u&&(u.line.updateControlPoints(l,u.axis),i&&u.fill&&fd(t.ctx,u,l))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){const l=i[o].$filler;Nm(l)&&fd(t.ctx,l,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!Nm(i)||n.drawTime!=="beforeDatasetDraw"||fd(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Cm=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},H_=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Em extends fn{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=He(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,o)=>e.sort(i,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,o=_t(i.font),l=o.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Cm(i,l);let p,g;n.font=o.string,this.isHorizontal()?(p=this.maxWidth,g=this._fitRows(c,l,u,h)+10):(g=this.maxHeight,p=this._fitCols(c,o,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(g,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,o){const{ctx:l,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],g=o+u;let v=e;l.textAlign="left",l.textBaseline="middle";let b=-1,w=-g;return this.legendItems.forEach((j,N)=>{const y=i+n/2+l.measureText(j.text).width;(N===0||p[p.length-1]+y+2*u>c)&&(v+=g,p[p.length-(N>0?0:1)]=0,w+=g,b++),h[N]={left:0,top:w,row:b,width:y,height:o},p[p.length-1]+=y+u}),v}_fitCols(e,n,i,o){const{ctx:l,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],g=c-e;let v=u,b=0,w=0,j=0,N=0;return this.legendItems.forEach((y,_)=>{const{itemWidth:S,itemHeight:A}=V_(i,n,l,y,o);_>0&&w+A+2*u>g&&(v+=b+u,p.push({width:b,height:w}),j+=b+u,N++,b=w=0),h[_]={left:j,top:w,col:N,width:S,height:A},b=Math.max(b,S),w+=A+u}),v+=b,p.push({width:b,height:w}),v}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:o},rtl:l}}=this,c=Ci(l,this.left,this.width);if(this.isHorizontal()){let u=0,h=jt(i,this.left+o,this.right-this.lineWidths[u]);for(const p of n)u!==p.row&&(u=p.row,h=jt(i,this.left+o,this.right-this.lineWidths[u])),p.top+=this.top+e+o,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+o}else{let u=0,h=jt(i,this.top+e+o,this.bottom-this.columnSizes[u].height);for(const p of n)p.col!==u&&(u=p.col,h=jt(i,this.top+e+o,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+o,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Xo(e,this),this._draw(),Go(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:o}=this,{align:l,labels:c}=e,u=nt.color,h=Ci(e.rtl,this.left,this.width),p=_t(c.font),{padding:g}=c,v=p.size,b=v/2;let w;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=p.string;const{boxWidth:j,boxHeight:N,itemHeight:y}=Cm(c,v),_=function(I,D,C){if(isNaN(j)||j<=0||isNaN(N)||N<0)return;o.save();const L=ke(C.lineWidth,1);if(o.fillStyle=ke(C.fillStyle,u),o.lineCap=ke(C.lineCap,"butt"),o.lineDashOffset=ke(C.lineDashOffset,0),o.lineJoin=ke(C.lineJoin,"miter"),o.lineWidth=L,o.strokeStyle=ke(C.strokeStyle,u),o.setLineDash(ke(C.lineDash,[])),c.usePointStyle){const V={radius:N*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:L},X=h.xPlus(I,j/2),F=D+b;Wg(o,V,X,F,c.pointStyleWidth&&j)}else{const V=D+Math.max((v-N)/2,0),X=h.leftForLtr(I,j),F=Si(C.borderRadius);o.beginPath(),Object.values(F).some(G=>G!==0)?zo(o,{x:X,y:V,w:j,h:N,radius:F}):o.rect(X,V,j,N),o.fill(),L!==0&&o.stroke()}o.restore()},S=function(I,D,C){Ur(o,C.text,I,D+y/2,p,{strikethrough:C.hidden,textAlign:h.textAlign(C.textAlign)})},A=this.isHorizontal(),z=this._computeTitleHeight();A?w={x:jt(l,this.left+g,this.right-i[0]),y:this.top+g+z,line:0}:w={x:this.left+g,y:jt(l,this.top+z+g,this.bottom-n[0].height),line:0},Xg(this.ctx,e.textDirection);const R=y+g;this.legendItems.forEach((I,D)=>{o.strokeStyle=I.fontColor,o.fillStyle=I.fontColor;const C=o.measureText(I.text).width,L=h.textAlign(I.textAlign||(I.textAlign=c.textAlign)),V=j+b+C;let X=w.x,F=w.y;h.setWidth(this.width),A?D>0&&X+V+g>this.right&&(F=w.y+=R,w.line++,X=w.x=jt(l,this.left+g,this.right-i[w.line])):D>0&&F+R>this.bottom&&(X=w.x=X+n[w.line].width+g,w.line++,F=w.y=jt(l,this.top+z+g,this.bottom-n[w.line].height));const G=h.x(X);if(_(G,F,I),X=w1(L,X+j+b,A?X+V:this.right,e.rtl),S(h.x(X),F,I),A)w.x+=V+g;else if(typeof I.text!="string"){const W=p.lineHeight;w.y+=bx(I,W)+g}else w.y+=R}),Gg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=_t(n.font),o=tn(n.padding);if(!n.display)return;const l=Ci(e.rtl,this.left,this.width),c=this.ctx,u=n.position,h=i.size/2,p=o.top+h;let g,v=this.left,b=this.width;if(this.isHorizontal())b=Math.max(...this.lineWidths),g=this.top+p,v=jt(e.align,v,this.right-b);else{const j=this.columnSizes.reduce((N,y)=>Math.max(N,y.height),0);g=p+jt(e.align,this.top,this.bottom-j-e.labels.padding-this._computeTitleHeight())}const w=jt(u,v,v+b);c.textAlign=l.textAlign(Yd(u)),c.textBaseline="middle",c.strokeStyle=n.color,c.fillStyle=n.color,c.font=i.string,Ur(c,n.text,w,g,i)}_computeTitleHeight(){const e=this.options.title,n=_t(e.font),i=tn(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,o,l;if(Bn(e,this.left,this.right)&&Bn(n,this.top,this.bottom)){for(l=this.legendHitBoxes,i=0;i<l.length;++i)if(o=l[i],Bn(e,o.left,o.left+o.width)&&Bn(n,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Q_(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,l=H_(o,i);o&&!l&&He(n.onLeave,[e,o,this],this),this._hoveredItem=i,i&&!l&&He(n.onHover,[e,i,this],this)}else i&&He(n.onClick,[e,i,this],this)}}function V_(t,e,n,i,o){const l=q_(i,t,e,n),c=Y_(o,i,e.lineHeight);return{itemWidth:l,itemHeight:c}}function q_(t,e,n,i){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((l,c)=>l.length>c.length?l:c)),e+n.size/2+i.measureText(o).width}function Y_(t,e,n){let i=t;return typeof e.text!="string"&&(i=bx(e,n)),i}function bx(t,e){const n=t.text?t.text.length:0;return e*n}function Q_(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var jx={id:"legend",_element:Em,start(t,e,n){const i=t.legend=new Em({ctx:t.ctx,options:n,chart:t});en.configure(t,i,n),en.addBox(t,i)},stop(t){en.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;en.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,o=n.chart;o.isDatasetVisible(i)?(o.hide(i),e.hidden=!0):(o.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(n?0:void 0),g=tn(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:l,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(g.width+g.height)/4,strokeStyle:p.borderColor,pointStyle:i||p.pointStyle,rotation:p.rotation,textAlign:o||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class wx extends fn{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const o=rt(i.text)?i.text.length:1;this._padding=tn(i.padding);const l=o*_t(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=l:this.width=l}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:o,right:l,options:c}=this,u=c.align;let h=0,p,g,v;return this.isHorizontal()?(g=jt(u,i,l),v=n+e,p=l-i):(c.position==="left"?(g=i+e,v=jt(u,o,n),h=ze*-.5):(g=l-e,v=jt(u,n,o),h=ze*.5),p=o-n),{titleX:g,titleY:v,maxWidth:p,rotation:h}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=_t(n.font),l=i.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(l);Ur(e,n.text,0,0,i,{color:n.color,maxWidth:h,rotation:p,textAlign:Yd(n.align),textBaseline:"middle",translation:[c,u]})}}function K_(t,e){const n=new wx({ctx:t.ctx,options:e,chart:t});en.configure(t,n,e),en.addBox(t,n),t.titleBlock=n}var Nx={id:"title",_element:wx,start(t,e,n){K_(t,n)},stop(t){const e=t.titleBlock;en.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;en.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Er={average(t){if(!t.length)return!1;let e,n,i=new Set,o=0,l=0;for(e=0,n=t.length;e<n;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();i.add(h.x),o+=h.y,++l}}return l===0||i.size===0?!1:{x:[...i].reduce((u,h)=>u+h)/i.size,y:o/l}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,o=Number.POSITIVE_INFINITY,l,c,u;for(l=0,c=t.length;l<c;++l){const h=t[l].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),g=_d(e,p);g<o&&(o=g,u=h)}}if(u){const h=u.tooltipPosition();n=h.x,i=h.y}return{x:n,y:i}}};function wn(t,e){return e&&(rt(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function zn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function X_(t,e){const{element:n,datasetIndex:i,index:o}=e,l=t.getDatasetMeta(i).controller,{label:c,value:u}=l.getLabelAndValue(o);return{chart:t,label:c,parsed:l.getParsed(o),raw:t.data.datasets[i].data[o],formattedValue:u,dataset:l.getDataset(),dataIndex:o,datasetIndex:i,element:n}}function Rm(t,e){const n=t.chart.ctx,{body:i,footer:o,title:l}=t,{boxWidth:c,boxHeight:u}=e,h=_t(e.bodyFont),p=_t(e.titleFont),g=_t(e.footerFont),v=l.length,b=o.length,w=i.length,j=tn(e.padding);let N=j.height,y=0,_=i.reduce((z,R)=>z+R.before.length+R.lines.length+R.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,v&&(N+=v*p.lineHeight+(v-1)*e.titleSpacing+e.titleMarginBottom),_){const z=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;N+=w*z+(_-w)*h.lineHeight+(_-1)*e.bodySpacing}b&&(N+=e.footerMarginTop+b*g.lineHeight+(b-1)*e.footerSpacing);let S=0;const A=function(z){y=Math.max(y,n.measureText(z).width+S)};return n.save(),n.font=p.string,Oe(t.title,A),n.font=h.string,Oe(t.beforeBody.concat(t.afterBody),A),S=e.displayColors?c+2+e.boxPadding:0,Oe(i,z=>{Oe(z.before,A),Oe(z.lines,A),Oe(z.after,A)}),S=0,n.font=g.string,Oe(t.footer,A),n.restore(),y+=j.width,{width:y,height:N}}function G_(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function J_(t,e,n,i){const{x:o,width:l}=i,c=n.caretSize+n.caretPadding;if(t==="left"&&o+l+c>e.width||t==="right"&&o-l-c<0)return!0}function Z_(t,e,n,i){const{x:o,width:l}=n,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return i==="center"?p=o<=(u+h)/2?"left":"right":o<=l/2?p="left":o>=c-l/2&&(p="right"),J_(p,t,e,n)&&(p="center"),p}function Pm(t,e,n){const i=n.yAlign||e.yAlign||G_(t,n);return{xAlign:n.xAlign||e.xAlign||Z_(t,e,n,i),yAlign:i}}function ek(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function tk(t,e,n){let{y:i,height:o}=t;return e==="top"?i+=n:e==="bottom"?i-=o+n:i-=o/2,i}function Am(t,e,n,i){const{caretSize:o,caretPadding:l,cornerRadius:c}=t,{xAlign:u,yAlign:h}=n,p=o+l,{topLeft:g,topRight:v,bottomLeft:b,bottomRight:w}=Si(c);let j=ek(e,u);const N=tk(e,h,p);return h==="center"?u==="left"?j+=p:u==="right"&&(j-=p):u==="left"?j-=Math.max(g,b)+o:u==="right"&&(j+=Math.max(v,w)+o),{x:Nt(j,0,i.width-e.width),y:Nt(N,0,i.height-e.height)}}function wo(t,e,n){const i=tn(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Tm(t){return wn([],zn(t))}function nk(t,e,n){return Js(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Dm(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const _x={beforeTitle:Ln,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:Ln,beforeBody:Ln,beforeLabel:Ln,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Me(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:Ln,afterBody:Ln,beforeFooter:Ln,footer:Ln,afterFooter:Ln};function Lt(t,e,n,i){const o=t[e].call(n,i);return typeof o>"u"?_x[e].call(n,i):o}class Ad extends fn{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&n.options.animation&&i.animations,l=new nx(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(l)),l}getContext(){return this.$context||(this.$context=nk(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,o=Lt(i,"beforeTitle",this,e),l=Lt(i,"title",this,e),c=Lt(i,"afterTitle",this,e);let u=[];return u=wn(u,zn(o)),u=wn(u,zn(l)),u=wn(u,zn(c)),u}getBeforeBody(e,n){return Tm(Lt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,o=[];return Oe(e,l=>{const c={before:[],lines:[],after:[]},u=Dm(i,l);wn(c.before,zn(Lt(u,"beforeLabel",this,l))),wn(c.lines,Lt(u,"label",this,l)),wn(c.after,zn(Lt(u,"afterLabel",this,l))),o.push(c)}),o}getAfterBody(e,n){return Tm(Lt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,o=Lt(i,"beforeFooter",this,e),l=Lt(i,"footer",this,e),c=Lt(i,"afterFooter",this,e);let u=[];return u=wn(u,zn(o)),u=wn(u,zn(l)),u=wn(u,zn(c)),u}_createItems(e){const n=this._active,i=this.chart.data,o=[],l=[],c=[];let u=[],h,p;for(h=0,p=n.length;h<p;++h)u.push(X_(this.chart,n[h]));return e.filter&&(u=u.filter((g,v,b)=>e.filter(g,v,b,i))),e.itemSort&&(u=u.sort((g,v)=>e.itemSort(g,v,i))),Oe(u,g=>{const v=Dm(e.callbacks,g);o.push(Lt(v,"labelColor",this,g)),l.push(Lt(v,"labelPointStyle",this,g)),c.push(Lt(v,"labelTextColor",this,g))}),this.labelColors=o,this.labelPointStyles=l,this.labelTextColors=c,this.dataPoints=u,u}update(e,n){const i=this.options.setContext(this.getContext()),o=this._active;let l,c=[];if(!o.length)this.opacity!==0&&(l={opacity:0});else{const u=Er[i.position].call(this,o,this._eventPosition);c=this._createItems(i),this.title=this.getTitle(c,i),this.beforeBody=this.getBeforeBody(c,i),this.body=this.getBody(c,i),this.afterBody=this.getAfterBody(c,i),this.footer=this.getFooter(c,i);const h=this._size=Rm(this,i),p=Object.assign({},u,h),g=Pm(this.chart,i,p),v=Am(i,p,g,this.chart);this.xAlign=g.xAlign,this.yAlign=g.yAlign,l={opacity:1,x:v.x,y:v.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,l&&this._resolveAnimations().update(this,l),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,o){const l=this.getCaretPosition(e,i,o);n.lineTo(l.x1,l.y1),n.lineTo(l.x2,l.y2),n.lineTo(l.x3,l.y3)}getCaretPosition(e,n,i){const{xAlign:o,yAlign:l}=this,{caretSize:c,cornerRadius:u}=i,{topLeft:h,topRight:p,bottomLeft:g,bottomRight:v}=Si(u),{x:b,y:w}=e,{width:j,height:N}=n;let y,_,S,A,z,R;return l==="center"?(z=w+N/2,o==="left"?(y=b,_=y-c,A=z+c,R=z-c):(y=b+j,_=y+c,A=z-c,R=z+c),S=y):(o==="left"?_=b+Math.max(h,g)+c:o==="right"?_=b+j-Math.max(p,v)-c:_=this.caretX,l==="top"?(A=w,z=A-c,y=_-c,S=_+c):(A=w+N,z=A+c,y=_+c,S=_-c),R=A),{x1:y,x2:_,x3:S,y1:A,y2:z,y3:R}}drawTitle(e,n,i){const o=this.title,l=o.length;let c,u,h;if(l){const p=Ci(i.rtl,this.x,this.width);for(e.x=wo(this,i.titleAlign,i),n.textAlign=p.textAlign(i.titleAlign),n.textBaseline="middle",c=_t(i.titleFont),u=i.titleSpacing,n.fillStyle=i.titleColor,n.font=c.string,h=0;h<l;++h)n.fillText(o[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===l&&(e.y+=i.titleMarginBottom-u)}}_drawColorBox(e,n,i,o,l){const c=this.labelColors[i],u=this.labelPointStyles[i],{boxHeight:h,boxWidth:p}=l,g=_t(l.bodyFont),v=wo(this,"left",l),b=o.x(v),w=h<g.lineHeight?(g.lineHeight-h)/2:0,j=n.y+w;if(l.usePointStyle){const N={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=o.leftForLtr(b,p)+p/2,_=j+h/2;e.strokeStyle=l.multiKeyBackground,e.fillStyle=l.multiKeyBackground,Sd(e,N,y,_),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Sd(e,N,y,_)}else{e.lineWidth=Re(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const N=o.leftForLtr(b,p),y=o.leftForLtr(o.xPlus(b,1),p-2),_=Si(c.borderRadius);Object.values(_).some(S=>S!==0)?(e.beginPath(),e.fillStyle=l.multiKeyBackground,zo(e,{x:N,y:j,w:p,h,radius:_}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),zo(e,{x:y,y:j+1,w:p-2,h:h-2,radius:_}),e.fill()):(e.fillStyle=l.multiKeyBackground,e.fillRect(N,j,p,h),e.strokeRect(N,j,p,h),e.fillStyle=c.backgroundColor,e.fillRect(y,j+1,p-2,h-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:o}=this,{bodySpacing:l,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:g}=i,v=_t(i.bodyFont);let b=v.lineHeight,w=0;const j=Ci(i.rtl,this.x,this.width),N=function(C){n.fillText(C,j.x(e.x+w),e.y+b/2),e.y+=b+l},y=j.textAlign(c);let _,S,A,z,R,I,D;for(n.textAlign=c,n.textBaseline="middle",n.font=v.string,e.x=wo(this,y,i),n.fillStyle=i.bodyColor,Oe(this.beforeBody,N),w=u&&y!=="right"?c==="center"?p/2+g:p+2+g:0,z=0,I=o.length;z<I;++z){for(_=o[z],S=this.labelTextColors[z],n.fillStyle=S,Oe(_.before,N),A=_.lines,u&&A.length&&(this._drawColorBox(n,e,z,j,i),b=Math.max(v.lineHeight,h)),R=0,D=A.length;R<D;++R)N(A[R]),b=v.lineHeight;Oe(_.after,N)}w=0,b=v.lineHeight,Oe(this.afterBody,N),e.y-=l}drawFooter(e,n,i){const o=this.footer,l=o.length;let c,u;if(l){const h=Ci(i.rtl,this.x,this.width);for(e.x=wo(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=h.textAlign(i.footerAlign),n.textBaseline="middle",c=_t(i.footerFont),n.fillStyle=i.footerColor,n.font=c.string,u=0;u<l;++u)n.fillText(o[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+i.footerSpacing}}drawBackground(e,n,i,o){const{xAlign:l,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:g}=i,{topLeft:v,topRight:b,bottomLeft:w,bottomRight:j}=Si(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(u+v,h),c==="top"&&this.drawCaret(e,n,i,o),n.lineTo(u+p-b,h),n.quadraticCurveTo(u+p,h,u+p,h+b),c==="center"&&l==="right"&&this.drawCaret(e,n,i,o),n.lineTo(u+p,h+g-j),n.quadraticCurveTo(u+p,h+g,u+p-j,h+g),c==="bottom"&&this.drawCaret(e,n,i,o),n.lineTo(u+w,h+g),n.quadraticCurveTo(u,h+g,u,h+g-w),c==="center"&&l==="left"&&this.drawCaret(e,n,i,o),n.lineTo(u,h+v),n.quadraticCurveTo(u,h,u+v,h),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,o=i&&i.x,l=i&&i.y;if(o||l){const c=Er[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Rm(this,e),h=Object.assign({},c,this._size),p=Pm(n,e,h),g=Am(e,h,p,n);(o._to!==g.x||l._to!==g.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,g))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},l={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const c=tn(n.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&u&&(e.save(),e.globalAlpha=i,this.drawBackground(l,e,o,n),Xg(e,n.textDirection),l.y+=c.top,this.drawTitle(l,e,n),this.drawBody(l,e,n),this.drawFooter(l,e,n),Gg(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,o=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),l=!Mo(i,o),c=this._positionChanged(o,n);(l||c)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,l=this._active||[],c=this._getActiveElements(e,l,n,i),u=this._positionChanged(c,e),h=n||!Mo(c,l)||u;return h&&(this._active=c,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),h}_getActiveElements(e,n,i,o){const l=this.options;if(e.type==="mouseout")return[];if(!o)return n.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,l.mode,l,i);return l.reverse&&c.reverse(),c}_positionChanged(e,n){const{caretX:i,caretY:o,options:l}=this,c=Er[l.position].call(this,e,n);return c!==!1&&(i!==c.x||o!==c.y)}}ge(Ad,"positioners",Er);var kx={id:"tooltip",_element:Ad,positioners:Er,afterInit(t,e,n){n&&(t.tooltip=new Ad({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_x},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const sk=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function ik(t,e,n,i){const o=t.indexOf(e);if(o===-1)return sk(t,e,n,i);const l=t.lastIndexOf(e);return o!==l?n:o}const rk=(t,e)=>t===null?null:Nt(Math.round(t),0,e);function Mm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class $o extends Di{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:o,label:l}of n)i[o]===l&&i.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Me(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:ik(i,e,ke(n,e),this._addedLabels),rk(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,o=[];let l=this.getLabels();l=e===0&&n===l.length-1?l:l.slice(e,n+1),this._valueRange=Math.max(l.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let c=e;c<=n;c++)o.push({value:c});return o}getLabelForValue(e){return Mm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ge($o,"id","category"),ge($o,"defaults",{ticks:{callback:Mm}});function ak(t,e){const n=[],{bounds:o,step:l,min:c,max:u,precision:h,count:p,maxTicks:g,maxDigits:v,includeBounds:b}=t,w=l||1,j=g-1,{min:N,max:y}=e,_=!Me(c),S=!Me(u),A=!Me(p),z=(y-N)/(v+1);let R=Ap((y-N)/j/w)*w,I,D,C,L;if(R<1e-14&&!_&&!S)return[{value:N},{value:y}];L=Math.ceil(y/R)-Math.floor(N/R),L>j&&(R=Ap(L*R/j/w)*w),Me(h)||(I=Math.pow(10,h),R=Math.ceil(R*I)/I),o==="ticks"?(D=Math.floor(N/R)*R,C=Math.ceil(y/R)*R):(D=N,C=y),_&&S&&l&&f1((u-c)/l,R/1e3)?(L=Math.round(Math.min((u-c)/R,g)),R=(u-c)/L,D=c,C=u):A?(D=_?c:D,C=S?u:C,L=p-1,R=(C-D)/L):(L=(C-D)/R,Pr(L,Math.round(L),R/1e3)?L=Math.round(L):L=Math.ceil(L));const V=Math.max(Tp(R),Tp(D));I=Math.pow(10,Me(h)?V:h),D=Math.round(D*I)/I,C=Math.round(C*I)/I;let X=0;for(_&&(b&&D!==c?(n.push({value:c}),D<c&&X++,Pr(Math.round((D+X*R)*I)/I,c,Lm(c,z,t))&&X++):D<c&&X++);X<L;++X){const F=Math.round((D+X*R)*I)/I;if(S&&F>u)break;n.push({value:F})}return S&&b&&C!==u?n.length&&Pr(n[n.length-1].value,u,Lm(u,z,t))?n[n.length-1].value=u:n.push({value:u}):(!S||C===u)&&n.push({value:C}),n}function Lm(t,e,{horizontal:n,minRotation:i}){const o=Fn(i),l=(n?Math.sin(o):Math.cos(o))||.001,c=.75*e*(""+t).length;return Math.min(e/l,c)}class ok extends Di{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Me(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:o,max:l}=this;const c=h=>o=n?o:h,u=h=>l=i?l:h;if(e){const h=_n(o),p=_n(l);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(o===l){let h=l===0?1:Math.abs(l*.05);u(l+h),e||c(o-h)}this.min=o,this.max=l}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},l=this._range||this,c=ak(o,l);return e.bounds==="ticks"&&p1(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const o=(i-n)/Math.max(e.length-1,1)/2;n-=o,i+=o}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Kd(e,this.chart.options.locale,this.options.ticks.format)}}class Uo extends ok{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=kt(e)?e:0,this.max=kt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Fn(this.options.ticks.minRotation),o=(e?Math.sin(i):Math.cos(i))||.001,l=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,l.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ge(Uo,"id","linear"),ge(Uo,"defaults",{ticks:{callback:Ug.formatters.numeric}});const tl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ot=Object.keys(tl);function Om(t,e){return t-e}function zm(t,e){if(Me(e))return null;const n=t._adapter,{parser:i,round:o,isoWeekday:l}=t._parseOpts;let c=e;return typeof i=="function"&&(c=i(c)),kt(c)||(c=typeof i=="string"?n.parse(c,i):n.parse(c)),c===null?null:(o&&(c=o==="week"&&(Fr(l)||l===!0)?n.startOf(c,"isoWeek",l):n.startOf(c,o)),+c)}function Im(t,e,n,i){const o=Ot.length;for(let l=Ot.indexOf(t);l<o-1;++l){const c=tl[Ot[l]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((n-e)/(u*c.size))<=i)return Ot[l]}return Ot[o-1]}function lk(t,e,n,i,o){for(let l=Ot.length-1;l>=Ot.indexOf(n);l--){const c=Ot[l];if(tl[c].common&&t._adapter.diff(o,i,c)>=e-1)return c}return Ot[n?Ot.indexOf(n):0]}function ck(t){for(let e=Ot.indexOf(t)+1,n=Ot.length;e<n;++e)if(tl[Ot[e]].common)return Ot[e]}function Fm(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:o}=qd(n,e),l=n[i]>=e?n[i]:n[o];t[l]=!0}}function dk(t,e,n,i){const o=t._adapter,l=+o.startOf(e[0].value,i),c=e[e.length-1].value;let u,h;for(u=l;u<=c;u=+o.add(u,1,i))h=n[u],h>=0&&(e[h].major=!0);return e}function Bm(t,e,n){const i=[],o={},l=e.length;let c,u;for(c=0;c<l;++c)u=e[c],o[u]=c,i.push({value:u,major:!1});return l===0||!n?i:dk(t,i,o,n)}class Wo extends Di{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),o=this._adapter=new Xw._date(e.adapters.date);o.init(n),Rr(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:zm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:o,max:l,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(o=Math.min(o,p.min)),!u&&!isNaN(p.max)&&(l=Math.max(l,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),o=kt(o)&&!isNaN(o)?o:+n.startOf(Date.now(),i),l=kt(l)&&!isNaN(l)?l:+n.endOf(Date.now(),i)+1,this.min=Math.min(o,l-1),this.max=Math.max(o+1,l)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const l=this.min,c=this.max,u=y1(o,l,c);return this._unit=n.unit||(i.autoSkip?Im(n.minUnit,this.min,this.max,this._getLabelCapacity(l)):lk(this,u.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:ck(this._unit),this.initOffsets(o),e.reverse&&u.reverse(),Bm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,o,l;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?n=1-o:n=(this.getDecimalForValue(e[1])-o)/2,l=this.getDecimalForValue(e[e.length-1]),e.length===1?i=l:i=(l-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;n=Nt(n,0,c),i=Nt(i,0,c),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,o=this.options,l=o.time,c=l.unit||Im(l.minUnit,n,i,this._getLabelCapacity(n)),u=ke(o.ticks.stepSize,1),h=c==="week"?l.isoWeekday:!1,p=Fr(h)||h===!0,g={};let v=n,b,w;if(p&&(v=+e.startOf(v,"isoWeek",h)),v=+e.startOf(v,p?"day":c),e.diff(i,n,c)>1e5*u)throw new Error(n+" and "+i+" are too far apart with stepSize of "+u+" "+c);const j=o.ticks.source==="data"&&this.getDataTimestamps();for(b=v,w=0;b<i;b=+e.add(b,u,c),w++)Fm(g,b,j);return(b===i||o.bounds==="ticks"||w===1)&&Fm(g,b,j),Object.keys(g).sort(Om).map(N=>+N)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const o=this.options.time.displayFormats,l=this._unit,c=n||o[l];return this._adapter.format(e,c)}_tickFormatFunction(e,n,i,o){const l=this.options,c=l.ticks.callback;if(c)return He(c,[e,n,i],this);const u=l.time.displayFormats,h=this._unit,p=this._majorUnit,g=h&&u[h],v=p&&u[p],b=i[n],w=p&&v&&b&&b.major;return this._adapter.format(e,o||(w?v:g))}generateTickLabels(e){let n,i,o;for(n=0,i=e.length;n<i;++n)o=e[n],o.label=this._tickFormatFunction(o.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,o=Fn(this.isHorizontal()?n.maxRotation:n.minRotation),l=Math.cos(o),c=Math.sin(o),u=this._resolveTickFontOptions(0).size;return{w:i*l+u*c,h:i*c+u*l}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,o=i[n.unit]||i.millisecond,l=this._tickFormatFunction(e,0,Bm(this,[e],this._majorUnit),o),c=this._getLabelSize(l),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,i=o.length;n<i;++n)e=e.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const o=this.getLabels();for(n=0,i=o.length;n<i;++n)e.push(zm(this,o[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Fg(e.sort(Om))}}ge(Wo,"id","time"),ge(Wo,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function No(t,e,n){let i=0,o=t.length-1,l,c,u,h;n?(e>=t[i].pos&&e<=t[o].pos&&({lo:i,hi:o}=Hs(t,"pos",e)),{pos:l,time:u}=t[i],{pos:c,time:h}=t[o]):(e>=t[i].time&&e<=t[o].time&&({lo:i,hi:o}=Hs(t,"time",e)),{time:l,pos:u}=t[i],{time:c,pos:h}=t[o]);const p=c-l;return p?u+(h-u)*(e-l)/p:u}class $m extends Wo{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=No(n,this.min),this._tableRange=No(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,o=[],l=[];let c,u,h,p,g;for(c=0,u=e.length;c<u;++c)p=e[c],p>=n&&p<=i&&o.push(p);if(o.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(c=0,u=o.length;c<u;++c)g=o[c+1],h=o[c-1],p=o[c],Math.round((g+h)/2)!==p&&l.push({time:p,pos:c/(u-1)});return l}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((o,l)=>o-l)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(No(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return No(this._table,i*this._tableRange+this._minPos,!0)}}ge($m,"id","timeseries"),ge($m,"defaults",Wo.defaults);const Sx="label";function Um(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function uk(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function Cx(t,e){t.labels=e}function Ex(t,e,n=Sx){const i=[];t.datasets=e.map(o=>{const l=t.datasets.find(c=>c[n]===o[n]);return!l||!o.data||i.includes(l)?{...o}:(i.push(l),Object.assign(l,o),l)})}function hk(t,e=Sx){const n={labels:[],datasets:[]};return Cx(n,t.labels),Ex(n,t.datasets,e),n}function fk(t,e){const{height:n=150,width:i=300,redraw:o=!1,datasetIdKey:l,type:c,data:u,options:h,plugins:p=[],fallbackContent:g,updateMode:v,...b}=t,w=E.useRef(null),j=E.useRef(null),N=()=>{w.current&&(j.current=new Jr(w.current,{type:c,data:hk(u,l),options:h&&{...h},plugins:p}),Um(e,j.current))},y=()=>{Um(e,null),j.current&&(j.current.destroy(),j.current=null)};return E.useEffect(()=>{!o&&j.current&&h&&uk(j.current,h)},[o,h]),E.useEffect(()=>{!o&&j.current&&Cx(j.current.config.data,u.labels)},[o,u.labels]),E.useEffect(()=>{!o&&j.current&&u.datasets&&Ex(j.current.config.data,u.datasets,l)},[o,u.datasets]),E.useEffect(()=>{j.current&&(o?(y(),setTimeout(N)):j.current.update(v))},[o,h,u.labels,u.datasets,v]),E.useEffect(()=>{j.current&&(y(),setTimeout(N))},[c]),E.useEffect(()=>(N(),()=>y()),[]),r.jsx("canvas",{ref:w,role:"img",height:n,width:i,...b,children:g})}const pk=E.forwardRef(fk);function su(t,e){return Jr.register(e),E.forwardRef((n,i)=>r.jsx(pk,{...n,ref:i,type:t}))}const Td=su("line",Eo),mk=su("bar",Co),gk=su("doughnut",kr);Jr.register($o,Uo,Dr,$n,Ao,Cr,Nx,kx,jx,yx);function xk(){var _,S,A,z,R,I,D,C,L;const{t}=ft(),e=Un(),[n,i]=E.useState(null),[o,l]=E.useState(null),[c,u]=E.useState(null),[h,p]=E.useState(!0);if(E.useEffect(()=>{Promise.all([hn.stats(),wd.get(24),Pg.getCollectionStats()]).then(([V,X,F])=>{var ie,K;i(V.data);const G=24,W=[],oe=[],U=[];for(let re=G-1;re>=0;re--){const J=new Date;J.setHours(J.getHours()-re),W.push(J.getHours()+":00");const M=new Date(J);M.setMinutes(0,0,0);const Q=new Date(J);Q.setMinutes(59,59,999);const le=((ie=X.data.entries)==null?void 0:ie.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="event"&&be>=M&&be<=Q}).length)||0,ve=((K=X.data.entries)==null?void 0:K.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="alert"&&be>=M&&be<=Q}).length)||0;oe.push(le),U.push(ve)}l({labels:W,events:oe,alerts:U}),u(F.data),p(!1)}).catch(()=>{i({total:0,by_severity:{},by_status:{}}),l({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return r.jsx("div",{className:"dashboard",children:r.jsxs("div",{className:"dashboard-loading",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})});const g=n!=null&&n.by_type?Object.entries(n.by_type).sort((V,X)=>X[1]-V[1]).slice(0,5):[],v={labels:(o==null?void 0:o.labels)||[],datasets:[{label:t("dashboard.events"),data:(o==null?void 0:o.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(o==null?void 0:o.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:g.map(([V])=>V),datasets:[{data:g.map(([,V])=>V),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},j={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},N={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((_=n==null?void 0:n.by_severity)==null?void 0:_.critical)||0,((S=n==null?void 0:n.by_severity)==null?void 0:S.high)||0,((A=n==null?void 0:n.by_severity)==null?void 0:A.medium)||0,((z=n==null?void 0:n.by_severity)==null?void 0:z.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return r.jsxs("div",{className:"dashboard",children:[r.jsxs("div",{className:"dashboard-header",children:[r.jsx("h2",{children:t("dashboard.title")}),r.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),r.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),r.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((R=n==null?void 0:n.by_severity)==null?void 0:R.critical)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),r.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((I=n==null?void 0:n.by_severity)==null?void 0:I.high)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[r.jsx("div",{className:"stat-icon",children:r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((D=n==null?void 0:n.by_severity)==null?void 0:D.medium)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),r.jsx("div",{className:"stat-glow"})]}),r.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[r.jsx("div",{className:"stat-icon",children:r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:((C=n==null?void 0:n.by_severity)==null?void 0:C.low)||0}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),r.jsx("div",{className:"stat-glow"})]})]}),r.jsxs("div",{className:"dashboard-grid",children:[r.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.eventTrend")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),r.jsx("div",{className:"chart-body",children:r.jsx(Td,{data:v,options:b})})]}),r.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:t("dashboard.topAlertTypes")}),r.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),r.jsx("div",{className:"chart-body",children:g.length>0?r.jsx(gk,{data:w,options:j}):r.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),r.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.bySeverity")})}),r.jsx("div",{className:"chart-body",children:r.jsx(mk,{data:N,options:y})})]}),r.jsxs("div",{className:"chart-card chart-collection",children:[r.jsx("div",{className:"chart-header",children:r.jsx("h3",{children:t("dashboard.collectionStatus")})}),r.jsxs("div",{className:"chart-body collection-stats",children:[r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),r.jsx("span",{className:"collection-value",children:((L=c==null?void 0:c.total_events)==null?void 0:L.toLocaleString())||0})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),r.jsxs("div",{className:"collection-item",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),r.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),r.jsxs("div",{className:"collection-sources",children:[r.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),r.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(V=>r.jsx("span",{className:"source-tag",children:V},V))})]})]})]})]}),r.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("dashboard.recentAlerts")}),r.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),r.jsx("div",{className:"recent-alerts-list",children:n&&n.total>0?r.jsxs("div",{className:"alert-preview",children:[r.jsx("div",{className:"alert-count-badge",children:n.total}),r.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):r.jsxs("div",{className:"no-alerts",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),r.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function vk(){var St;const t=Vr(),[e,n]=E.useState([]),[i,o]=E.useState(!0),[l,c]=E.useState(1),[u,h]=E.useState(50),[p,g]=E.useState(""),[v,b]=E.useState(1),[w,j]=E.useState(0),[N,y]=E.useState(!1),[_,S]=E.useState(!1),[A,z]=E.useState(0),[R,I]=E.useState(!1),[D,C]=E.useState([]),[L,V]=E.useState(!1),[X,F]=E.useState("timestamp"),[G,W]=E.useState("desc"),[oe,U]=E.useState(""),[ie,K]=E.useState(""),[re,J]=E.useState(""),[M,Q]=E.useState(""),[le,ve]=E.useState(null),[ye,be]=E.useState({x:0,y:0}),[Ae,Pe]=E.useState("AND"),[Ie,pt]=E.useState([]),[Wn,nn]=E.useState(!1),[me,Ht]=E.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4});E.useEffect(()=>{const te=new URLSearchParams(t.search),ae=te.get("event_ids"),Ce=te.get("keywords");(ae||Ce)&&(S(!0),Ht(Fe=>({...Fe,event_ids:ae?ae.split(",").map(Ke=>parseInt(Ke.trim(),10)).filter(Ke=>!isNaN(Ke)):[],keywords:Ce||""})),ae&&Q(ae))},[t.search]);const Zs=(te=1)=>{o(!0);const ae={Critical:1,Error:2,Warning:3,Info:4,Debug:5},Ce=M.split(",").map($e=>parseInt($e.trim(),10)).filter($e=>!isNaN($e)),Fe=oe.split(",").map($e=>$e.trim()).filter($e=>$e.length>0),Ke=ie.split(",").map($e=>$e.trim()).filter($e=>$e.length>0),Je=re.split(",").map($e=>$e.trim()).filter($e=>$e.length>0),js={keywords:(me==null?void 0:me.keywords)||"",keyword_mode:Ae,regex:L,page:te,page_size:u,sort_by:X,sort_order:G,start_time:(me==null?void 0:me.start_time)||void 0,end_time:(me==null?void 0:me.end_time)||void 0,levels:D.map($e=>ae[$e]).filter($e=>$e),event_ids:Ce.length>0?Ce:void 0,log_names:me!=null&&me.log_names&&me.log_names.length>0?me.log_names:void 0,sources:Fe.length>0?Fe:void 0,users:Ke.length>0?Ke:void 0,computers:Je.length>0?Je:void 0};Fs.search(js).then($e=>{const sn=$e.data;n(sn.events||[]),j(sn.total||0);const Zr=Math.ceil((sn.total||0)/u);b(Zr||1),z(sn.query_time_ms||0),S(!0),o(!1)}).catch(()=>{Fs.list(te,u).then($e=>{const sn=$e.data;n(sn.events||[]),j(sn.total||0),b(sn.total_pages||1),S(!1),o(!1)}).catch(()=>o(!1))})},Hn=()=>{c(1),Zs(1)},kn=()=>{Ht({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),C([]),V(!1),F("timestamp"),W("desc"),U(""),K(""),J(""),Q(""),S(!1),Pe("AND"),c(1)};E.useEffect(()=>{o(!0);const te=me&&(me.log_names&&me.log_names.length>0||me.levels&&me.levels.length>0||me.event_ids&&me.event_ids.length>0||me.start_time||me.end_time);me!=null&&me.keywords&&me.keywords.trim()!==""?Fs.search({keywords:me.keywords,keyword_mode:Ae,regex:L,page:l,page_size:u,sort_by:X,sort_order:G,levels:D.map(ae=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[ae]||0).filter(ae=>ae>0),start_time:me.start_time,end_time:me.end_time}).then(ae=>{const Ce=ae.data;n(Ce.events||[]),j(Ce.total||0);const Fe=Math.ceil((Ce.total||0)/u);b(Fe||1),o(!1)}).catch(()=>o(!1)):te?Fs.list(l,u,{log_names:me.log_names,levels:me.levels,event_ids:me.event_ids,start_time:me.start_time,end_time:me.end_time,sort_by:X,sort_order:G}).then(ae=>{const Ce=ae.data;n(Ce.events||[]),j(Ce.total||0),b(Ce.total_pages||1),o(!1)}).catch(()=>o(!1)):Fs.list(l,u,{sort_by:X,sort_order:G}).then(ae=>{const Ce=ae.data;n(Ce.events||[]),j(Ce.total||0),b(Ce.total_pages||1),o(!1)}).catch(()=>o(!1))},[l,me,X,G,u,D,Ae,L]);const bs=te=>{h(te),c(1)},Vn=te=>{te.preventDefault();const ae=parseInt(p,10);!isNaN(ae)&&ae>=1&&ae<=v&&(c(ae),g(""))};E.useEffect(()=>{Pg.getLogNames().then(te=>{const ae=te.data;pt(ae.log_names||[])}).catch(()=>{})},[]);const Y=async te=>{y(!0);try{const ae=await Fs.export({format:te,filters:me});if(te==="json"){const Ce=new Blob([JSON.stringify(ae.data,null,2)],{type:"application/json"});fe(Ce,`events_export.${te}`)}else{const Ce=new Blob([ae.data],{type:te==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});fe(Ce,`events_export.${te==="excel"?"xlsx":te}`)}}catch(ae){console.error("Export failed:",ae)}finally{y(!1)}},fe=(te,ae)=>{const Ce=URL.createObjectURL(te),Fe=document.createElement("a");Fe.href=Ce,Fe.download=ae,document.body.appendChild(Fe),Fe.click(),document.body.removeChild(Fe),URL.revokeObjectURL(Ce)},Ee=te=>{const ae=String(te).toLowerCase();return ae==="1"||ae==="critical"||ae==="crit"?"level-critical":ae==="2"||ae==="error"?"level-error":ae==="3"||ae==="warning"||ae==="warn"?"level-warning":ae==="4"||ae==="info"?"level-info":ae==="5"||ae==="debug"?"level-debug":""},Vt=te=>{const ae=String(te);return ae==="1"||ae==="critical"?"Critical":ae==="2"||ae==="error"?"Error":ae==="3"||ae==="warning"||ae==="warn"?"Warning":ae==="4"||ae==="info"?"Info":ae==="5"||ae==="debug"?"Debug":ae};return r.jsxs("div",{className:"events-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Events"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>I(!R),children:R?"Hide Filters":"Show Filters"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",disabled:N,children:N?"...":"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>Y("csv"),children:"CSV"}),r.jsx("button",{onClick:()=>Y("json"),children:"JSON"}),r.jsx("button",{onClick:()=>Y("excel"),children:"Excel"})]})]})]})]}),r.jsxs("div",{className:"search-bar",children:[r.jsxs("div",{className:"search-input-wrapper",children:[r.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(me==null?void 0:me.keywords)||"",onChange:te=>Ht({...me,keywords:te.target.value}),onKeyDown:te=>te.key==="Enter"&&Hn()}),r.jsx("button",{className:"search-btn",onClick:Hn,children:"Search"})]}),r.jsxs("div",{className:"keyword-mode-toggle",children:[r.jsx("span",{className:"mode-label",children:"Keywords:"}),r.jsx("button",{className:`mode-btn ${Ae==="AND"?"active":""}`,onClick:()=>Pe("AND"),title:"All keywords must match",children:"AND"}),r.jsx("button",{className:`mode-btn ${Ae==="OR"?"active":""}`,onClick:()=>Pe("OR"),title:"Any keyword can match",children:"OR"})]})]}),R&&r.jsxs("div",{className:"filters-panel",children:[r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Start Time"}),r.jsx("input",{type:"datetime-local",value:(me==null?void 0:me.start_time)||"",onChange:te=>Ht({...me,start_time:te.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"End Time"}),r.jsx("input",{type:"datetime-local",value:(me==null?void 0:me.end_time)||"",onChange:te=>Ht({...me,end_time:te.target.value})})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Event IDs"}),r.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:M,onChange:te=>Q(te.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Log Names"}),r.jsxs("select",{value:((St=me==null?void 0:me.log_names)==null?void 0:St[0])||"",onChange:te=>{const ae=te.target.value;Ht({...me,log_names:ae?[ae]:[]})},className:"select-input",children:[r.jsx("option",{value:"",children:"All Log Names"}),Ie.map(te=>r.jsx("option",{value:te,children:te},te))]})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sources"}),r.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:oe,onChange:te=>U(te.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Users"}),r.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:ie,onChange:te=>K(te.target.value),className:"text-input"})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Computers"}),r.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:re,onChange:te=>J(te.target.value),className:"text-input"})]})]}),r.jsxs("div",{className:"filter-row",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Level"}),r.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(te=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:D.includes(te),onChange:ae=>{ae.target.checked?C([...D,te]):C(D.filter(Ce=>Ce!==te))}}),te]},te))})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort By"}),r.jsxs("select",{value:X,onChange:te=>F(te.target.value),className:"select-input",children:[r.jsx("option",{value:"timestamp",children:"Timestamp"}),r.jsx("option",{value:"event_id",children:"Event ID"}),r.jsx("option",{value:"level",children:"Level"}),r.jsx("option",{value:"source",children:"Source"}),r.jsx("option",{value:"log_name",children:"Log Name"})]})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Sort Order"}),r.jsxs("select",{value:G,onChange:te=>W(te.target.value),className:"select-input",children:[r.jsx("option",{value:"desc",children:"Descending"}),r.jsx("option",{value:"asc",children:"Ascending"})]})]}),r.jsx("div",{className:"filter-group",children:r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:L,onChange:te=>V(te.target.checked)}),"Use Regex"]})})]}),r.jsxs("div",{className:"filter-actions",children:[r.jsx("button",{onClick:Hn,className:"btn-primary",children:"Apply Filters"}),_&&r.jsx("button",{onClick:kn,className:"btn-secondary",children:"Clear All"})]})]}),_&&r.jsxs("div",{className:"search-info",children:[r.jsxs("span",{className:"search-count",children:["Found ",r.jsx("strong",{children:w.toLocaleString()})," events"]}),A>0&&r.jsxs("span",{className:"query-time",children:["Query time: ",A,"ms"]})]}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:w.toLocaleString()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Current Page"}),r.jsxs("span",{className:"stat-value",children:[l," / ",v]})]})]}),i?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading events..."})]}):e.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{children:"No events found"})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"table-container",children:r.jsxs("table",{className:"events-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"ID"}),r.jsx("th",{children:"Time"}),r.jsx("th",{children:"Level"}),r.jsx("th",{children:"Event ID"}),r.jsx("th",{children:"Source"}),r.jsx("th",{children:"Computer"}),r.jsx("th",{children:"Message"}),r.jsx("th",{children:"Action"})]})}),r.jsx("tbody",{children:e.map(te=>r.jsxs("tr",{children:[r.jsx("td",{className:"id-cell",children:te.id}),r.jsx("td",{className:"time-cell",children:new Date(te.timestamp).toLocaleString()}),r.jsx("td",{children:r.jsx("span",{className:`level-badge ${Ee(te.level)}`,children:Vt(te.level)})}),r.jsx("td",{className:"event-id",children:te.event_id}),r.jsxs("td",{className:"source-cell",title:te.source||"",children:[r.jsx("span",{className:"cell-content",children:te.source||"-"}),r.jsx("button",{className:"cell-btn",onClick:ae=>{ae.stopPropagation(),ve(te),be({x:ae.clientX-200,y:ae.clientY+20})},title:"View details",children:"..."})]}),r.jsx("td",{className:"computer-cell",children:te.computer||"-"}),r.jsxs("td",{className:"message-cell",title:te.message||"",children:[r.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:te.message?te.message.length>50?te.message.substring(0,50)+"...":te.message:"-"}),r.jsx("button",{className:"cell-btn",onClick:ae=>{ae.stopPropagation(),ve(te),be({x:ae.clientX-200,y:ae.clientY+20})},title:"View details",children:"..."})]}),r.jsxs("td",{className:"action-cell",children:[r.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(te,null,2))},title:"Copy all event data",children:"Copy"}),r.jsx("button",{className:"action-detail-btn",onClick:ae=>{ve(te),be({x:ae.clientX-200,y:ae.clientY+20})},title:"View details",children:"..."})]})]},te.id))})]})}),r.jsxs("div",{className:"pagination",children:[r.jsxs("div",{className:"page-size-selector",children:[r.jsx("span",{children:"Show:"}),r.jsxs("select",{value:u,onChange:te=>bs(Number(te.target.value)),className:"select-input",children:[r.jsx("option",{value:10,children:"10"}),r.jsx("option",{value:25,children:"25"}),r.jsx("option",{value:50,children:"50"}),r.jsx("option",{value:100,children:"100"}),r.jsx("option",{value:200,children:"200"})]}),r.jsx("span",{children:"per page"})]}),r.jsxs("div",{className:"page-nav",children:[r.jsx("button",{className:"page-btn",disabled:l<=1,onClick:()=>{c(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),r.jsx("button",{className:"page-btn",disabled:l<=1,onClick:()=>{c(te=>te-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),r.jsxs("form",{onSubmit:Vn,className:"page-input-form",children:[r.jsx("input",{type:"number",min:1,max:v,value:p,onChange:te=>g(te.target.value),placeholder:`1-${v}`,className:"page-input"}),r.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),r.jsxs("span",{className:"page-info",children:["Page ",r.jsx("strong",{children:l})," of ",r.jsx("strong",{children:v}),"(",w," total)"]}),r.jsx("button",{className:"page-btn",disabled:l>=v,onClick:()=>{c(te=>te+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),r.jsx("button",{className:"page-btn",disabled:l>=v,onClick:()=>{c(v),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),le&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"message-float-panel",style:{left:ye.x,top:ye.y,position:"fixed"},children:[r.jsxs("div",{className:"float-panel-header",children:[r.jsx("span",{children:"Event Details"}),r.jsxs("div",{className:"float-panel-actions",children:[r.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(le,null,2))},children:"Copy"}),le.raw_xml&&r.jsx("button",{className:"float-panel-formatted",onClick:()=>{const te=(()=>{try{return JSON.stringify(JSON.parse(le.raw_xml),null,2)}catch{return le.raw_xml||""}})();navigator.clipboard.writeText(te)},children:"Copy JSON"}),le.raw_xml&&r.jsx("button",{className:"float-panel-view",onClick:()=>nn(!0),children:"View JSON"}),r.jsx("button",{className:"float-panel-close",onClick:()=>{ve(null),nn(!1)},children:"×"})]})]}),r.jsxs("div",{className:"float-panel-content",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"ID:"})," ",le.id]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Time:"})," ",new Date(le.timestamp).toLocaleString()]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Level:"})," ",le.level]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Event ID:"})," ",le.event_id]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Source:"})," ",le.source||"-"]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Computer:"})," ",le.computer||"-"]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Log Name:"})," ",le.log_name]}),r.jsx("div",{style:{marginTop:"8px"},children:r.jsx("strong",{children:"Message:"})}),r.jsx("div",{children:le.message||"-"})]})]}),Wn&&le.raw_xml&&r.jsx("div",{className:"modal-overlay",onClick:()=>nn(!1),children:r.jsxs("div",{className:"modal-content modal-large",onClick:te=>te.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("span",{children:["Raw JSON - Event #",le.id]}),r.jsx("button",{className:"modal-close",onClick:()=>nn(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:r.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(le.raw_xml),null,2)}catch{return le.raw_xml}})()})})]})})]})]}),r.jsx("style",{children:`
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
      `})]})}function Rx({keyName:t,value:e,depth:n,isLast:i,collapsedPaths:o,onToggleCollapse:l}){const c="  ".repeat(n),u=t.startsWith("[")?t:`"${t}"`;if(e&&typeof e=="object"){const g=Array.isArray(e),v=g?e.map((N,y)=>({key:`[${y}]`,value:N})):Object.entries(e).map(([N,y])=>({key:N,value:y})),b=v.length===0,w=`${u}`,j=o.has(w);return b?r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:g?"[]":"{}"}),!i&&r.jsx("span",{className:"json-punct",children:","})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"json-line json-collapsible",onClick:()=>l(w),children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:g?"[":"{"}),r.jsx("span",{className:"json-collapse-hint",children:j?` ... ${v.length} items }`:""}),!i&&r.jsx("span",{className:"json-punct",children:","}),r.jsx("span",{className:"json-toggle",children:j?"▶":"▼"})]}),!j&&v.map((N,y)=>r.jsx(Rx,{keyName:N.key,value:N.value,depth:n+1,isLast:y===v.length-1,collapsedPaths:o,onToggleCollapse:l},N.key)),!j&&r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-punct",children:g?"]":"}"}),!i&&r.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof e=="string"?`"${e}"`:String(e);return typeof e=="number"?h="json-number":typeof e=="boolean"?h="json-boolean":e===null&&(h="json-null"),r.jsxs("div",{className:"json-line",children:[c,r.jsx("span",{className:"json-key",children:t}),r.jsx("span",{className:"json-punct",children:": "}),r.jsx("span",{className:h,children:p}),!i&&r.jsx("span",{className:"json-punct",children:","})]})}function yk(t){return["Unknown","Critical","Error","Warning","Info"][t]||"Unknown"}function bk(){const{id:t}=tg(),[e,n]=E.useState(null),[i,o]=E.useState(!0),[l,c]=E.useState(new Set),[u,h]=E.useState(!1);E.useEffect(()=>{t&&(o(!0),Fs.get(Number(t)).then(j=>{n(j.data),o(!1)}).catch(()=>o(!1)))},[t]);const p=E.useCallback(j=>{c(N=>{const y=new Set(N);return y.has(j)?y.delete(j):y.add(j),y})},[]),g=()=>{c(new Set)},v=()=>{if(e!=null&&e.raw_xml)try{const j=JSON.parse(e.raw_xml),N=(_,S)=>{if(!_||typeof _!="object")return[];const A=[];return Array.isArray(_)?(_.length>3&&A.push(S),_.forEach((z,R)=>{A.push(...N(_[R],`${S}[${R}]`))})):Object.values(_).forEach((z,R)=>{const I=Object.keys(_)[R];A.push(...N(z,`${S}"${I}"`))}),A},y=N(j,"");c(new Set(y.filter(_=>_.includes("[")||!_.startsWith('"'))))}catch{}},b=()=>{if(e!=null&&e.raw_xml)try{const j=JSON.stringify(JSON.parse(e.raw_xml),null,2);navigator.clipboard.writeText(j)}catch{navigator.clipboard.writeText(e.raw_xml)}};if(i)return r.jsx("div",{children:"Loading..."});if(!e)return r.jsx("div",{children:"Event not found"});let w=null;if(e.raw_xml)try{const j=JSON.parse(e.raw_xml),N=Object.entries(j);w=N.map(([y,_],S)=>r.jsx(Rx,{keyName:y,value:_,depth:0,isLast:S===N.length-1,collapsedPaths:l,onToggleCollapse:p},y))}catch{w=r.jsx("pre",{className:"xml-box",children:e.raw_xml})}return r.jsxs("div",{className:"event-detail",children:[r.jsx(tt,{to:"/events",children:"← Back to Events"}),r.jsxs("div",{className:"detail-panel",children:[r.jsxs("h3",{children:["Event #",e.id]}),r.jsxs("div",{className:"detail-layout",children:[r.jsxs("div",{className:"detail-fields",children:[r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Timestamp:"}),r.jsx("span",{className:"field-value",children:new Date(e.timestamp).toLocaleString()})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Level:"}),r.jsx("span",{className:"field-value",children:yk(e.level)})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Event ID:"}),r.jsx("span",{className:"field-value",children:e.event_id})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Source:"}),r.jsx("span",{className:"field-value",children:e.source})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Log Name:"}),r.jsx("span",{className:"field-value",children:e.log_name})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Computer:"}),r.jsx("span",{className:"field-value",children:e.computer})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"User:"}),r.jsx("span",{className:"field-value",children:e.user||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"User SID:"}),r.jsx("span",{className:"field-value",children:e.user_sid||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"Session ID:"}),r.jsx("span",{className:"field-value",children:e.session_id||"N/A"})]}),r.jsxs("div",{className:"detail-field",children:[r.jsx("span",{className:"field-label",children:"IP Address:"}),r.jsx("span",{className:"field-value",children:e.ip_address||"N/A"})]})]}),r.jsxs("div",{className:"detail-actions",children:[e.raw_xml&&r.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),e.raw_xml&&r.jsx("button",{className:"btn-action btn-copy",onClick:b,children:"Copy JSON"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"Message:"}),r.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&r.jsxs("div",{className:"detail-section",children:[r.jsxs("div",{className:"raw-json-header",children:[r.jsx("label",{children:"Raw JSON:"}),r.jsxs("div",{className:"raw-json-actions",children:[r.jsx("button",{className:"btn-small",onClick:g,children:"Expand All"}),r.jsx("button",{className:"btn-small",onClick:v,children:"Collapse All"})]})]}),r.jsx("div",{className:"json-tree",children:w})]})]}),u&&e.raw_xml&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal-content modal-large",onClick:j=>j.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("span",{children:["Raw JSON - Event #",e.id]}),r.jsxs("div",{className:"modal-header-actions",children:[r.jsx("button",{className:"btn-small",onClick:b,children:"Copy"}),r.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),r.jsx("div",{className:"modal-body",children:r.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(e.raw_xml),null,2)})})]})}),r.jsx("style",{children:`
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
      `})]})}function jk(){const{t}=ft(),e=Un(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState(1),[h,p]=E.useState(""),[g,v]=E.useState([]),[b,w]=E.useState(!1),[j,N]=E.useState(!1),[y,_]=E.useState(null);E.useEffect(()=>{l(!0),hn.list(c,50,h||void 0).then(F=>{const G=F.data;i(G.alerts||[]),l(!1)}).catch(()=>l(!1))},[c,h]);const S=F=>{hn.resolve(F,"Resolved via Web UI").then(()=>{i(n.map(G=>G.id===F?{...G,resolved:!0}:G))})},A=F=>{const G=prompt("Enter reason for marking as false positive:");G&&hn.markFalsePositive(F,G).then(()=>{i(n.filter(W=>W.id!==F)),v(W=>W.filter(oe=>oe!==F))}).catch(W=>{console.error("Failed to mark as false positive:",W)})},z=F=>{confirm(t("alerts.confirmDelete"))&&hn.delete(F).then(()=>{i(n.filter(G=>G.id!==F)),v(G=>G.filter(W=>W!==F))}).catch(G=>{console.error("Failed to delete alert:",G)})},R=F=>{g.length!==0&&hn.batchAction(g,F).then(()=>{F==="resolve"?i(n.map(G=>g.includes(G.id)?{...G,resolved:!0}:G)):F==="delete"&&i(n.filter(G=>!g.includes(G.id))),v([])}).catch(G=>{console.error("Batch action failed:",G)})},I=F=>{v(G=>G.includes(F)?G.filter(W=>W!==F):[...G,F])},D=()=>{g.length===n.length?v([]):v(n.map(F=>F.id))},C=()=>{g.forEach(F=>{hn.resolve(F,"Batch resolved via Web UI")}),i(n.map(F=>g.includes(F.id)?{...F,resolved:!0}:F)),v([])},L=()=>{N(!0),_(null),hn.runAnalysis().then(F=>{const G=F.data;_(G),N(!1)}).catch(F=>{var G,W;console.error("Analysis failed:",F),N(!1),_({success:!1,alerts_created:0,events_analyzed:0,rules_executed:0,duration:"0s",errors:[((W=(G=F.response)==null?void 0:G.data)==null?void 0:W.error)||"Analysis failed"]})})},V=F=>{switch(F){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},X={total:n.length,critical:n.filter(F=>F.severity==="critical").length,high:n.filter(F=>F.severity==="high").length,medium:n.filter(F=>F.severity==="medium").length,low:n.filter(F=>F.severity==="low").length};return r.jsxs("div",{className:"alerts-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("alerts.title")}),r.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-analyze",onClick:()=>w(!0),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"}),r.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),r.jsxs("div",{className:"alerts-stats-grid",children:[r.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.total}),r.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),r.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.critical}),r.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),r.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.high}),r.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),r.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[r.jsx("span",{className:"stat-icon",children:"🟡"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.medium}),r.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),r.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[r.jsx("span",{className:"stat-icon",children:"🟢"}),r.jsxs("div",{className:"stat-info",children:[r.jsx("span",{className:"stat-value",children:X.low}),r.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),r.jsxs("div",{className:"alerts-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("select",{className:"severity-select",value:h,onChange:F=>p(F.target.value),children:[r.jsx("option",{value:"",children:t("alerts.allSeverities")}),r.jsx("option",{value:"critical",children:t("dashboard.critical")}),r.jsx("option",{value:"high",children:t("dashboard.high")}),r.jsx("option",{value:"medium",children:t("dashboard.medium")}),r.jsx("option",{value:"low",children:t("dashboard.low")})]})}),r.jsx("div",{className:"toolbar-right",children:g.length>0&&r.jsxs("div",{className:"batch-actions",children:[r.jsxs("span",{className:"selected-count",children:[g.length," selected"]}),r.jsx("button",{className:"btn-batch-resolve",onClick:C,children:t("alerts.resolveSelected")}),r.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>R("false-positive"),children:t("alerts.markFalsePositive")}),r.jsx("button",{className:"btn-batch-delete",onClick:()=>R("delete"),children:t("common.delete")})]})})]}),o?r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]}):r.jsxs("div",{className:"alerts-table-container",children:[r.jsxs("table",{className:"alerts-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:g.length===n.length&&n.length>0,onChange:D})}),r.jsx("th",{children:"ID"}),r.jsx("th",{children:t("alerts.severity")}),r.jsx("th",{children:t("alerts.rule")}),r.jsx("th",{children:t("alerts.message")}),r.jsx("th",{children:t("alerts.count")}),r.jsx("th",{children:t("alerts.status")}),r.jsx("th",{children:t("alerts.actions")})]})}),r.jsx("tbody",{children:n.map(F=>{var G;return r.jsxs("tr",{className:g.includes(F.id)?"selected":"",children:[r.jsx("td",{className:"checkbox-col",children:r.jsx("input",{type:"checkbox",checked:g.includes(F.id),onChange:()=>I(F.id)})}),r.jsx("td",{className:"id-col",children:F.id}),r.jsx("td",{children:r.jsx("span",{className:`badge ${V(F.severity)}`,children:F.severity})}),r.jsx("td",{className:"rule-col",children:F.rule_name}),r.jsxs("td",{className:"message-col",children:[(G=F.message)==null?void 0:G.substring(0,100),"..."]}),r.jsx("td",{className:"count-col",children:F.count}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${F.resolved?"resolved":"active"}`,children:F.resolved?t("alerts.resolved"):t("alerts.active")})}),r.jsxs("td",{className:"actions-col",children:[r.jsx("button",{className:"btn-action btn-detail",onClick:()=>e(`/alerts/${F.id}`),children:t("alerts.detail")}),!F.resolved&&r.jsx("button",{className:"btn-action btn-resolve",onClick:()=>S(F.id),children:t("alerts.resolve")}),r.jsx("button",{className:"btn-action btn-falsepositive",onClick:()=>A(F.id),children:t("alerts.falsePositive")}),r.jsx("button",{className:"btn-action btn-delete",onClick:()=>z(F.id),children:t("common.delete")})]})]},F.id)})})]}),n.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"🛡️"}),r.jsx("p",{children:t("alerts.noAlerts")})]})]}),b&&r.jsx("div",{className:"modal-overlay",onClick:()=>{w(!1),_(null)},children:r.jsxs("div",{className:"modal-content",onClick:F=>F.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("alerts.runAnalysis")}),r.jsx("button",{className:"close-btn",onClick:()=>{w(!1),_(null)},children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[!j&&!y&&r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),r.jsxs("div",{className:"analysis-summary",children:[r.jsx("h4",{children:t("alerts.analysisSummary")}),r.jsxs("ul",{children:[r.jsxs("li",{children:[t("alerts.analysisTarget"),": ",t("alerts.allEvents")]}),r.jsxs("li",{children:[t("alerts.analysisScope"),": ",t("alerts.allEnabledRules")]})]})]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-cancel",onClick:()=>{w(!1),_(null)},children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:L,children:r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]}),j&&r.jsxs("div",{className:"analyzing-state",children:[r.jsx("div",{className:"analyzing-spinner"}),r.jsx("p",{children:t("alerts.analyzing")}),r.jsx("p",{className:"analyzing-hint",children:t("alerts.analyzingHint")})]}),y&&r.jsxs("div",{className:"analysis-result",children:[r.jsxs("div",{className:`result-header ${y.success?"success":"error"}`,children:[y.success?"✓":"✗"," ",y.success?"Analysis Complete":"Analysis Failed"]}),r.jsxs("div",{className:"result-stats",children:[r.jsxs("div",{className:"result-stat",children:[r.jsx("span",{className:"stat-label",children:t("alerts.alertsCreated")}),r.jsx("span",{className:"stat-value",children:y.alerts_created})]}),r.jsxs("div",{className:"result-stat",children:[r.jsx("span",{className:"stat-label",children:t("alerts.eventsAnalyzed")}),r.jsx("span",{className:"stat-value",children:y.events_analyzed})]}),r.jsxs("div",{className:"result-stat",children:[r.jsx("span",{className:"stat-label",children:t("alerts.rulesExecuted")}),r.jsx("span",{className:"stat-value",children:y.rules_executed})]}),r.jsxs("div",{className:"result-stat",children:[r.jsx("span",{className:"stat-label",children:t("alerts.duration")}),r.jsx("span",{className:"stat-value",children:y.duration})]})]}),y.errors&&y.errors.length>0&&r.jsxs("div",{className:"result-errors",children:[r.jsx("h4",{children:"Errors:"}),r.jsx("ul",{children:y.errors.map((F,G)=>r.jsx("li",{children:F},G))})]}),r.jsx("div",{className:"modal-actions",children:r.jsx("button",{className:"btn-primary",onClick:()=>{w(!1),_(null),e("/alerts")},children:t("common.done")})})]})]})]})})]})}function wk(){const{id:t}=tg(),e=Un(),[n,i]=E.useState(null),[o,l]=E.useState(!0),[c,u]=E.useState(""),[h,p]=E.useState(!1);E.useEffect(()=>{t&&(l(!0),hn.get(Number(t)).then(j=>{i(j.data),l(!1)}).catch(()=>l(!1)))},[t]);const g=async()=>{if(n){p(!0);try{await hn.resolve(n.id,c),i({...n,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(j){console.error("Failed to resolve:",j)}finally{p(!1)}}},v=async()=>{if(n){p(!0);try{await hn.markFalsePositive(n.id,c),i({...n,false_positive:!0,notes:c})}catch(j){console.error("Failed to mark false positive:",j)}finally{p(!1)}}},b=()=>{if(!n)return;const j=new URLSearchParams;n.event_ids&&n.event_ids.length>0&&j.set("event_ids",n.event_ids.join(",")),n.keywords&&j.set("keywords",n.keywords),e(`/events?${j.toString()}`)};if(o)return r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:"Loading..."})]});if(!n)return r.jsx("div",{className:"alert-not-found",children:"Alert not found"});const w=j=>{switch(j){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return r.jsxs("div",{className:"alert-detail",children:[r.jsx(tt,{to:"/alerts",className:"back-link",children:"← 返回告警列表"}),r.jsxs("div",{className:"detail-layout",children:[r.jsxs("div",{className:"detail-main",children:[r.jsxs("div",{className:"detail-panel",children:[r.jsxs("div",{className:"panel-header",children:[r.jsxs("h3",{children:["告警 #",n.id]}),r.jsxs("div",{className:"status-badges",children:[r.jsx("span",{className:`badge ${w(n.severity)}`,children:n.severity.toUpperCase()}),n.resolved&&r.jsx("span",{className:"badge resolved",children:"已解决"}),n.false_positive&&r.jsx("span",{className:"badge false-positive",children:"误报"})]})]}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"规则名称:"}),r.jsx("span",{className:"rule-name",children:n.rule_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"威胁评分:"}),r.jsx("span",{className:"score-value",children:n.rule_score.toFixed(2)})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"日志名称:"}),r.jsx("span",{children:n.log_name})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"触发次数:"}),r.jsx("span",{children:n.count})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"首次出现:"}),r.jsx("span",{children:new Date(n.first_seen).toLocaleString()})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("label",{children:"最后出现:"}),r.jsx("span",{children:new Date(n.last_seen).toLocaleString()})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"触发事件ID:"}),r.jsx("div",{className:"event-ids",children:n.event_ids&&n.event_ids.length>0?n.event_ids.map((j,N)=>r.jsx("span",{className:"event-id-badge",children:j},N)):r.jsx("span",{className:"no-data",children:"无"})})]}),n.keywords&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"匹配关键字:"}),r.jsx("div",{className:"keywords",children:n.keywords.split(" ").filter(j=>j).map((j,N)=>r.jsx("span",{className:"keyword-badge",children:j},N))})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"告警消息:"}),r.jsx("pre",{className:"message-box",children:n.message})]}),n.mitre_attack&&n.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("label",{children:"MITRE ATT&CK:"}),r.jsx("div",{className:"mitre-tags",children:n.mitre_attack.map((j,N)=>r.jsx("span",{className:"mitre-tag",children:j},N))})]})]}),n.explanation&&r.jsxs("div",{className:"detail-panel explanation-panel",children:[r.jsx("h4",{children:"规则解读"}),r.jsx("p",{className:"explanation-text",children:n.explanation})]}),n.recommendation&&r.jsxs("div",{className:"detail-panel recommendation-panel",children:[r.jsx("h4",{children:"处置建议"}),r.jsx("div",{className:"recommendation-text",children:n.recommendation.split(`
`).filter(j=>j).map((j,N)=>r.jsx("p",{children:j},N))})]}),n.real_case&&r.jsxs("div",{className:"detail-panel case-panel",children:[r.jsx("h4",{children:"真实案例"}),r.jsx("p",{className:"case-text",children:n.real_case})]}),n.matched_events&&n.matched_events.length>0&&r.jsxs("div",{className:"detail-panel events-panel",children:[r.jsxs("h4",{children:["关联日志 (",n.matched_events.length,")"]}),r.jsx("div",{className:"events-list",children:n.matched_events.map(j=>r.jsxs("div",{className:"event-item",children:[r.jsxs("div",{className:"event-header",children:[r.jsxs("span",{className:"event-id",children:["Event ID: ",j.event_id]}),r.jsx("span",{className:"event-time",children:new Date(j.timestamp).toLocaleString()}),r.jsx("span",{className:`event-level level-${j.level.toLowerCase()}`,children:j.level})]}),r.jsxs("div",{className:"event-source",children:["来源: ",j.source]}),r.jsxs("div",{className:"event-computer",children:["计算机: ",j.computer]}),r.jsx("div",{className:"event-message",children:j.message})]},j.id))})]})]}),r.jsx("div",{className:"detail-sidebar",children:r.jsxs("div",{className:"sidebar-panel",children:[r.jsx("h4",{children:"操作"}),!n.resolved&&!n.false_positive&&r.jsxs(r.Fragment,{children:[r.jsx("textarea",{placeholder:"添加备注...",value:c,onChange:j=>u(j.target.value),rows:3}),r.jsx("button",{onClick:g,disabled:h,className:"btn-action btn-resolve",children:"标记为已解决"}),r.jsx("button",{onClick:v,disabled:h,className:"btn-action btn-falsepositive",children:"标记为误报"})]}),r.jsx("button",{onClick:b,className:"btn-action btn-search",children:"搜索关联事件"}),n.notes&&r.jsxs("div",{className:"notes-section",children:[r.jsx("label",{children:"备注:"}),r.jsx("pre",{className:"notes-box",children:n.notes})]})]})})]}),r.jsx("style",{children:`
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
      `})]})}function Nk(){const{t}=ft(),e=Un(),[n,i]=E.useState([]),[o,l]=E.useState(!0),[c,u]=E.useState({eventCount:0,alertCount:0}),[h,p]=E.useState("all"),[g,v]=E.useState("24h");E.useEffect(()=>{l(!0),wd.get(300).then(_=>{const S=_.data;i(S.entries||[]),u({eventCount:S.event_count,alertCount:S.alert_count}),l(!1)}).catch(()=>l(!1))},[]);const b=(_,S)=>{if(_==="alert")switch(S){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},w=(_,S)=>{if(_==="alert")switch(S){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},j=_=>_==="alert"?"ALERT":"EVENT",N=n.filter(_=>h==="all"?!0:h==="events"?_.type==="event":h==="alerts"?_.type==="alert":!0),y=_=>{wd.deleteAlert(_).then(()=>{i(n.filter(S=>!(S.type==="alert"&&S.alert_id===_)))}).catch(S=>console.error("Failed to delete alert:",S))};return o?r.jsx("div",{className:"timeline-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:t("common.loading")})]})}):r.jsxs("div",{className:"timeline-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("timeline.title")}),r.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),r.jsx("div",{className:"header-actions",children:r.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),r.jsxs("div",{className:"timeline-stats-cards",children:[r.jsxs("div",{className:"stat-card events",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.eventCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill events",style:{width:`${c.eventCount>0?c.eventCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card alerts",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:c.alertCount}),r.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),r.jsx("div",{className:"stat-bar",children:r.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${c.alertCount>0?c.alertCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),r.jsxs("div",{className:"stat-card ratio",children:[r.jsx("div",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsxs("span",{className:"stat-value",children:[c.eventCount+c.alertCount>0?(c.alertCount/(c.eventCount+c.alertCount)*100).toFixed(1):0,"%"]}),r.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),r.jsxs("div",{className:"timeline-toolbar",children:[r.jsx("div",{className:"toolbar-left",children:r.jsxs("div",{className:"filter-tabs",children:[r.jsxs("button",{className:`filter-tab ${h==="all"?"active":""}`,onClick:()=>p("all"),children:[t("timeline.all"),r.jsx("span",{className:"count",children:c.eventCount+c.alertCount})]}),r.jsxs("button",{className:`filter-tab ${h==="events"?"active":""}`,onClick:()=>p("events"),children:[t("timeline.eventsOnly"),r.jsx("span",{className:"count events",children:c.eventCount})]}),r.jsxs("button",{className:`filter-tab ${h==="alerts"?"active":""}`,onClick:()=>p("alerts"),children:[t("timeline.alertsOnly"),r.jsx("span",{className:"count alerts",children:c.alertCount})]})]})}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("select",{className:"time-range-select",value:g,onChange:_=>v(_.target.value),children:[r.jsx("option",{value:"1h",children:t("timeline.last1h")}),r.jsx("option",{value:"6h",children:t("timeline.last6h")}),r.jsx("option",{value:"24h",children:t("timeline.last24h")}),r.jsx("option",{value:"7d",children:t("timeline.last7d")}),r.jsx("option",{value:"30d",children:t("timeline.last30d")})]})})]}),r.jsx("div",{className:"timeline-container",children:N.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("span",{className:"empty-icon",children:"📭"}),r.jsx("p",{children:t("timeline.noEntries")})]}):r.jsx("div",{className:"timeline",children:N.map((_,S)=>r.jsxs("div",{className:`timeline-item ${_.type}`,children:[r.jsxs("div",{className:"timeline-marker",style:{"--marker-color":w(_.type,_.severity)},children:[r.jsx("div",{className:"marker-dot"}),r.jsx("div",{className:"marker-line"})]}),r.jsxs("div",{className:"timeline-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"card-left",children:[r.jsx("span",{className:"card-icon",children:b(_.type,_.severity)}),r.jsx("span",{className:`timeline-type ${_.type}`,style:{color:w(_.type,_.severity)},children:j(_.type)}),_.type==="event"&&_.event_id&&r.jsxs("span",{className:"event-id-badge",children:["Event ",_.event_id]}),_.type==="alert"&&_.severity&&r.jsx("span",{className:`severity-badge ${_.severity}`,style:{background:`${w(_.type,_.severity)}20`,color:w(_.type,_.severity)},children:_.severity.toUpperCase()})]}),r.jsx("span",{className:"card-time",children:new Date(_.timestamp).toLocaleString()})]}),r.jsx("p",{className:"card-message",children:_.message}),_.type==="alert"&&_.rule_name&&r.jsxs("div",{className:"card-meta",children:[r.jsxs("span",{className:"rule-badge",children:[r.jsx("span",{className:"rule-icon",children:"📌"}),_.rule_name]}),_.mitre_attack&&_.mitre_attack.length>0&&r.jsxs("span",{className:"mitre-badge",children:[r.jsx("span",{className:"mitre-icon",children:"🎯"}),_.mitre_attack.join(", ")]})]}),_.type==="alert"&&_.alert_id&&r.jsxs("div",{className:"card-actions",children:[r.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${_.alert_id}`),children:t("timeline.viewDetails")}),r.jsx("button",{className:"btn-delete",onClick:()=>_.alert_id&&y(_.alert_id),children:t("timeline.delete")})]})]})]},`${_.type}-${_.id}-${S}`))})})]})}function _k(){const{t}=ft(),[e,n]=E.useState(!1),[i,o]=E.useState("security"),[l,c]=E.useState("html"),[u,h]=E.useState("7d"),[p,g]=E.useState([]),[v,b]=E.useState(null),[w,j]=E.useState(null);E.useEffect(()=>{vr.list().then(R=>g(R.data.reports)).catch(console.error)},[]);const N=async()=>{n(!0),j(null);try{const R=new Date,I=new Date;switch(u){case"24h":I.setHours(I.getHours()-24);break;case"7d":I.setDate(I.getDate()-7);break;case"30d":I.setDate(I.getDate()-30);break;case"90d":I.setDate(I.getDate()-90);break}await vr.generate({type:i,format:l,start_time:I.toISOString(),end_time:R.toISOString()}),b(new Date().toLocaleString());const C=(await vr.list()).data.reports||[];if(g(C),C.length>0){const L=C[0];confirm(`Report generated successfully!

Report: ${L.name}
Type: ${L.type}
Format: ${L.format}

Click OK to download now, or Cancel to view in reports list.`)&&_(L)}}catch(R){console.error("Report generation failed:",R),j("Failed to generate report. Please try again.")}finally{n(!1)}},y=async R=>{try{const I=await vr.get(R.id);if(I.data.content){const D=window.open("","_blank");D&&(R.format==="html"?(D.document.write(I.data.content),D.document.close()):(D.document.write(`<pre>${JSON.stringify(I.data,null,2)}</pre>`),D.document.close()))}else alert("Report content not available")}catch(I){console.error("Failed to view report:",I),alert("Failed to view report")}},_=async R=>{try{const I=R.format||"json",D=await vr.export(I),C=new Blob([D.data],{type:D.headers["content-type"]||"application/octet-stream"}),L=URL.createObjectURL(C),V=document.createElement("a");V.href=L,V.download=`${R.name||R.id}.${I}`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(L)}catch(I){console.error("Failed to download report:",I),alert("Failed to download report")}},S=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB",A=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],z=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return r.jsxs("div",{className:"reports-page",children:[r.jsx("h2",{children:t("reports.title")}),r.jsxs("div",{className:"reports-grid",children:[r.jsxs("div",{className:"reports-card main-config",children:[r.jsx("h3",{children:t("reports.generateReport")}),r.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Report Type"}),r.jsx("div",{className:"type-grid",children:A.map(R=>r.jsxs("div",{className:`type-option ${i===R.value?"selected":""}`,onClick:()=>o(R.value),children:[r.jsx("div",{className:"type-icon",children:R.icon}),r.jsx("div",{className:"type-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Output Format"}),r.jsx("div",{className:"format-row",children:z.map(R=>r.jsxs("div",{className:`format-option ${l===R.value?"selected":""}`,onClick:()=>c(R.value),children:[r.jsx("div",{className:"format-icon",children:R.icon}),r.jsx("div",{className:"format-label",children:R.label})]},R.value))})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("label",{className:"section-label",children:"Time Range"}),r.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(R=>r.jsxs("button",{className:`range-btn ${u===R?"active":""}`,onClick:()=>h(R),children:[R==="24h"&&"Last 24 Hours",R==="7d"&&"Last 7 Days",R==="30d"&&"Last 30 Days",R==="90d"&&"Last 90 Days"]},R))})]}),w&&r.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),r.jsx("button",{className:"btn-primary generate-btn",onClick:N,disabled:e,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):r.jsxs(r.Fragment,{children:["📊 ",t("reports.generate")]})}),v&&r.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",v]})]}),r.jsxs("div",{className:"reports-card stats-card",children:[r.jsx("h3",{children:"Report Statistics"}),r.jsxs("div",{className:"stats-preview",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"📁"}),r.jsx("div",{className:"stat-value",children:p.length}),r.jsx("div",{className:"stat-label",children:"Total Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🛡️"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="security").length}),r.jsx("div",{className:"stat-label",children:"Security Reports"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("div",{className:"stat-icon",children:"🚨"}),r.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="alert").length}),r.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),r.jsxs("div",{className:"chart-placeholder",children:[r.jsx("div",{className:"chart-label",children:"Reports by Type"}),r.jsxs("div",{className:"mini-chart",children:[r.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),r.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),r.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),r.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),r.jsxs("div",{className:"reports-card full-width",children:[r.jsx("h3",{children:t("reports.recentReports")}),p.length>0?r.jsx("div",{className:"reports-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Report Name"}),r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Format"}),r.jsx("th",{children:"Generated"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:p.map(R=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"report-name",children:[r.jsxs("span",{className:"report-icon",children:[R.type==="security"&&"🛡️",R.type==="alert"&&"🚨",R.type==="timeline"&&"📊",R.type==="compliance"&&"📋"]}),R.name]})}),r.jsx("td",{children:r.jsx("span",{className:`type-badge ${R.type}`,children:R.type})}),r.jsx("td",{children:r.jsx("span",{className:"format-badge",children:R.format.toUpperCase()})}),r.jsx("td",{children:new Date(R.generated_at).toLocaleString()}),r.jsx("td",{children:S(R.size)}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>y(R),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>_(R),children:"Download"})]})]},R.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📊"}),r.jsx("div",{className:"empty-text",children:t("reports.noReports")}),r.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),r.jsx("style",{children:`
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
      `})]})}function kk(){const{t}=ft(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(""),[u,h]=E.useState(null),[p,g]=E.useState(!1),[v,b]=E.useState(!1),[w,j]=E.useState([]),[N,y]=E.useState(""),[_,S]=E.useState(["eventlogs","registry","prefetch"]),[A,z]=E.useState([]),[R,I]=E.useState(!1);E.useEffect(()=>{D(),C()},[]);const D=()=>{Ls.listEvidence().then(U=>{U.data&&Array.isArray(U.data)&&j(U.data)}).catch(U=>console.error("Failed to load evidence:",U))},C=()=>{Ls.chainOfCustody().then(U=>{U.data&&Array.isArray(U.data)&&z(U.data)}).catch(U=>console.error("Failed to load chain of custody:",U))},L=async()=>{var U,ie;if(l.trim()){b(!0);try{const K=await Ls.calculateHash(l);o(K.data.hash||"")}catch(K){console.error("Failed to calculate hash:",K),alert("Failed to calculate hash: "+(((ie=(U=K.response)==null?void 0:U.data)==null?void 0:ie.error)||K.message))}finally{b(!1)}}},V=async()=>{n(!0),y("starting");try{for(const U of _)y(`collecting:${U}`),await Ls.collect(U,`/tmp/forensics_${U}`);D(),C(),y("completed")}catch(U){console.error("Collection failed:",U),y("error")}finally{n(!1)}},X=async()=>{var U,ie;if(!(!i.trim()||!l.trim())){g(!0),h(null);try{const K=await Ls.verifyHash(l,i);h({verified:K.data.match||!1,expected:i,actual:K.data.actual||i,path:l})}catch(K){h({verified:!1,expected:i,actual:((ie=(U=K.response)==null?void 0:U.data)==null?void 0:ie.error)||"Hash verification failed",path:l})}finally{g(!1)}}},F=U=>{S(ie=>ie.includes(U)?ie.filter(K=>K!==U):[...ie,U])},G=async U=>{try{const ie=await Ls.getEvidence(U.id);if(ie.data.content){const K=window.open("","_blank");K&&(K.document.write(`<pre>${JSON.stringify(ie.data,null,2)}</pre>`),K.document.close())}else alert("Evidence content not available")}catch(ie){console.error("Failed to view evidence:",ie),alert("Failed to view evidence")}},W=async U=>{try{const ie=await Ls.exportEvidence(U.id,"json"),K=new Blob([ie.data],{type:ie.headers["content-type"]||"application/octet-stream"}),re=URL.createObjectURL(K),J=document.createElement("a");J.href=re,J.download=`evidence_${U.type}_${U.id}.json`,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(re)}catch(ie){console.error("Failed to export evidence:",ie),alert("Failed to export evidence")}},oe=U=>U<1024?U+" B":U<1024*1024?(U/1024).toFixed(1)+" KB":(U/(1024*1024)).toFixed(1)+" MB";return r.jsxs("div",{className:"forensics-page",children:[r.jsx("h2",{children:t("forensics.title")}),r.jsxs("div",{className:"forensics-grid",children:[r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.evidenceCollection")}),r.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),r.jsxs("div",{className:"collection-types",children:[r.jsxs("div",{className:"type-item",onClick:()=>F("eventlogs"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("eventlogs")?"checked":""}`,children:_.includes("eventlogs")&&"✓"}),r.jsx("div",{className:"type-icon",children:"📋"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),r.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("registry"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("registry")?"checked":""}`,children:_.includes("registry")&&"✓"}),r.jsx("div",{className:"type-icon",children:"🔧"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.registry")}),r.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("memory"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("memory")?"checked":""}`,children:_.includes("memory")&&"✓"}),r.jsx("div",{className:"type-icon",children:"💾"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),r.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),r.jsxs("div",{className:"type-item",onClick:()=>F("prefetch"),children:[r.jsx("div",{className:`type-checkbox ${_.includes("prefetch")?"checked":""}`,children:_.includes("prefetch")&&"✓"}),r.jsx("div",{className:"type-icon",children:"⚡"}),r.jsxs("div",{className:"type-info",children:[r.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),r.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),N&&r.jsxs("div",{className:`collect-status ${N}`,children:[N==="starting"&&"📡 Initializing collection...",N.startsWith("collecting:")&&`🔍 Collecting ${N.split(":")[1]}...`,N==="completed"&&"✅ Collection completed",N==="error"&&"❌ Collection failed"]}),r.jsx("button",{className:"btn-primary forensics-btn",onClick:V,disabled:e||_.length===0,children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):r.jsxs(r.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),r.jsxs("div",{className:"forensics-card",children:[r.jsx("h3",{children:t("forensics.hashVerification")}),r.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),r.jsxs("div",{className:"hash-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"File Path"}),r.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:l,onChange:U=>c(U.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:"Expected SHA256 Hash"}),r.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:i,onChange:U=>o(U.target.value)})]}),r.jsx("button",{className:"btn-secondary",onClick:L,disabled:v||!l.trim(),children:v?"Calculating...":"Calculate Hash"}),r.jsx("button",{className:"btn-secondary",onClick:X,disabled:p||!i.trim()||!l.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&r.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[r.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),r.jsxs("div",{className:"result-content",children:[r.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),r.jsxs("div",{className:"result-details",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"File:"})," ",u.path]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Expected:"})," ",r.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Actual:"})," ",r.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),r.jsxs("div",{className:"forensics-card full-width",children:[r.jsxs("div",{className:"section-header",children:[r.jsxs("div",{children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),r.jsx("button",{className:"btn-secondary",onClick:()=>I(!0),children:"View Full Chain"})]}),w.length>0?r.jsx("div",{className:"evidence-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Type"}),r.jsx("th",{children:"Collected At"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Hash"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:w.map(U=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"evidence-type",children:U.type})}),r.jsx("td",{children:new Date(U.collected_at).toLocaleString()}),r.jsx("td",{children:r.jsx("code",{className:"evidence-path",children:U.path})}),r.jsx("td",{children:oe(U.size)}),r.jsx("td",{children:r.jsxs("code",{className:"evidence-hash",children:[U.hash.substring(0,16),"..."]})}),r.jsxs("td",{children:[r.jsx("button",{className:"btn-small",onClick:()=>G(U),children:"View"}),r.jsx("button",{className:"btn-small",onClick:()=>W(U),children:"Export"})]})]},U.id))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📦"}),r.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),r.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),R&&r.jsx("div",{className:"modal-overlay",onClick:()=>I(!1),children:r.jsxs("div",{className:"modal-content chain-modal",onClick:U=>U.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("forensics.chainOfCustody")}),r.jsx("button",{className:"close-btn",onClick:()=>I(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:A.length>0?r.jsx("div",{className:"chain-timeline",children:A.map((U,ie)=>r.jsxs("div",{className:"chain-entry",children:[r.jsx("div",{className:"chain-dot",children:ie+1}),r.jsxs("div",{className:"chain-content",children:[r.jsx("div",{className:"chain-action",children:U.action}),r.jsx("div",{className:"chain-details",children:U.details}),r.jsxs("div",{className:"chain-meta",children:[r.jsx("span",{className:"chain-time",children:new Date(U.timestamp).toLocaleString()}),U.user&&r.jsxs("span",{className:"chain-user",children:["by ",U.user]})]})]})]},U.id))}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),r.jsx("style",{children:`
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
      `})]})}function Sk(){var F,G;const{t}=ft(),[e,n]=E.useState("system"),[i,o]=E.useState(null),[l,c]=E.useState([]),[u,h]=E.useState([]),[p,g]=E.useState([]),[v,b]=E.useState([]),[w,j]=E.useState([]),[N,y]=E.useState(!0),[_,S]=E.useState(null);E.useEffect(()=>{A()},[]);const A=()=>{y(!0),Bs.getInfo().then(W=>{o(W.data),y(!1)}).catch(W=>{S(W.message||t("common.error")),y(!1)})},z=()=>{l.length>0||(y(!0),Bs.getProcesses(50).then(W=>{c(W.data.processes||[]),y(!1)}).catch(()=>y(!1)))},R=()=>{u.length>0||(y(!0),Bs.getNetwork(50).then(W=>{h(W.data.connections||[]),y(!1)}).catch(()=>y(!1)))},I=()=>{p.length>0||(y(!0),Bs.getEnvVariables().then(W=>{g(W.data.variables||[]),y(!1)}).catch(()=>y(!1)))},D=()=>{v.length>0||(y(!0),Bs.getLoadedDLLs(100).then(W=>{b(W.data.modules||[]),y(!1)}).catch(()=>y(!1)))},C=()=>{w.length>0||(y(!0),Bs.getDrivers().then(W=>{j(W.data.drivers||[]),y(!1)}).catch(()=>y(!1)))},L=W=>{n(W),W==="processes"&&z(),W==="network"&&R(),W==="env"&&I(),W==="dlls"&&D(),W==="drivers"&&C()},V=W=>{const oe=Math.floor(W/86400),U=Math.floor(W%86400/3600),ie=Math.floor(W%3600/60);return oe>0?`${oe}d ${U}h ${ie}m`:U>0?`${U}h ${ie}m`:`${ie}m`},X=W=>{switch(W==null?void 0:W.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return N&&!i?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})}):_?r.jsx("div",{className:"systeminfo-page",children:r.jsxs("div",{className:"error-state",children:["Error: ",_]})}):r.jsxs("div",{className:"systeminfo-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("systemInfo.title")}),r.jsx("div",{className:"header-actions",children:r.jsx("button",{className:"btn-refresh",onClick:A,children:"Refresh"})})]}),r.jsxs("div",{className:"tab-nav",children:[r.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>L("system"),children:"System"}),r.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>L("processes"),children:["Processes (",l.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>L("network"),children:["Network (",u.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>L("env"),children:["Env (",p.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>L("dlls"),children:["DLLs (",v.length||"...",")"]}),r.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>L("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&i&&r.jsxs("div",{className:"system-grid",children:[r.jsxs("div",{className:"system-card os-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"OS"}),r.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),r.jsxs("div",{className:"system-status",children:[r.jsx("div",{className:"status-indicator online"}),r.jsx("span",{children:"System Online"})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),r.jsx("span",{className:"info-value highlight",children:i.hostname||"N/A"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),r.jsx("span",{className:"info-value",children:i.domain||"WORKGROUP"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),r.jsx("span",{className:"info-value",children:i.os_name||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),r.jsx("span",{className:"info-value",children:i.os_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),r.jsx("span",{className:"info-value badge",children:i.architecture||"x64"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),r.jsx("span",{className:"info-value",children:i.timezone||"UTC"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),r.jsx("span",{className:`info-value badge ${i.is_admin?"admin":"user"}`,children:i.is_admin?"Root/Admin":"Standard User"})]})]})]}),r.jsxs("div",{className:"system-card runtime-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Runtime"}),r.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),r.jsxs("div",{className:"info-list",children:[r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),r.jsx("span",{className:"info-value mono",children:i.go_version||"Unknown"})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),r.jsxs("span",{className:"info-value",children:[i.cpu_count||0," Cores"]})]}),r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),r.jsx("span",{className:"info-value",children:V(i.uptime_seconds||0)})]})]})]}),r.jsxs("div",{className:"system-card resources-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Resources"}),r.jsx("h3",{children:"System Resources"})]}),r.jsxs("div",{className:"resource-bars",children:[r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Memory"}),r.jsxs("span",{className:"resource-value",children:[i.memory_free_gb?(i.memory_total_gb-i.memory_free_gb).toFixed(1):"0"," / ",((F=i.memory_total_gb)==null?void 0:F.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill",style:{width:i.memory_total_gb?`${(i.memory_total_gb-i.memory_free_gb)/i.memory_total_gb*100}%`:"0%"}})})]}),r.jsxs("div",{className:"resource-item",children:[r.jsxs("div",{className:"resource-header",children:[r.jsx("span",{className:"resource-name",children:"Free Memory"}),r.jsxs("span",{className:"resource-value",children:[((G=i.memory_free_gb)==null?void 0:G.toFixed(1))||"0"," GB"]})]}),r.jsx("div",{className:"resource-bar",children:r.jsx("div",{className:"resource-fill memory",style:{width:i.memory_total_gb?`${i.memory_free_gb/i.memory_total_gb*100}%`:"0%"}})})]})]})]}),r.jsxs("div",{className:"system-card time-card",children:[r.jsxs("div",{className:"card-header",children:[r.jsx("div",{className:"card-icon",children:"Time"}),r.jsx("h3",{children:"Time Information"})]}),r.jsxs("div",{className:"time-display",children:[r.jsx("div",{className:"current-time",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),r.jsx("div",{className:"current-date",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),r.jsx("div",{className:"info-list",children:r.jsxs("div",{className:"info-row",children:[r.jsx("span",{className:"info-label",children:"UTC Time"}),r.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"PPID"}),r.jsx("th",{children:"Name"}),r.jsx("th",{children:"User"}),r.jsx("th",{children:"Command"})]})}),r.jsx("tbody",{children:l.map((W,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:W.pid}),r.jsx("td",{className:"mono",children:W.ppid}),r.jsx("td",{children:W.name}),r.jsx("td",{children:W.user}),r.jsx("td",{className:"truncate",title:W.args,children:W.args||W.exe})]},`${W.pid}-${oe}`))})]}),l.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Protocol"}),r.jsx("th",{children:"Local Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"Remote Address"}),r.jsx("th",{children:"Port"}),r.jsx("th",{children:"State"}),r.jsx("th",{children:"Process"})]})}),r.jsx("tbody",{children:u.map((W,oe)=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("span",{className:"protocol-badge",children:W.protocol})}),r.jsx("td",{className:"mono",children:W.local_addr}),r.jsx("td",{className:"mono",children:W.local_port}),r.jsx("td",{className:"mono",children:W.remote_addr||"-"}),r.jsx("td",{className:"mono",children:W.remote_port||"-"}),r.jsx("td",{children:r.jsx("span",{className:"state-badge",style:{color:X(W.state)},children:W.state})}),r.jsx("td",{children:W.process_name||W.pid||"-"})]},`${W.protocol}-${W.local_addr}-${W.local_port}-${oe}`))})]}),u.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Variable Name"}),r.jsx("th",{children:"Value"}),r.jsx("th",{children:"Type"})]})}),r.jsx("tbody",{children:p.map((W,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:W.name}),r.jsx("td",{className:"truncate",title:W.value,children:W.value}),r.jsx("td",{children:r.jsx("span",{className:"type-badge",children:W.type})})]},`${W.name}-${oe}`))})]}),p.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"PID"}),r.jsx("th",{children:"Process"}),r.jsx("th",{children:"DLL Name"}),r.jsx("th",{children:"Path"}),r.jsx("th",{children:"Size"})]})}),r.jsx("tbody",{children:v.map((W,oe)=>r.jsxs("tr",{children:[r.jsx("td",{className:"mono",children:W.process_id}),r.jsx("td",{children:W.process_name}),r.jsx("td",{className:"mono highlight",children:W.name}),r.jsx("td",{className:"truncate",title:W.path,children:W.path}),r.jsxs("td",{className:"mono",children:[(W.size/1024).toFixed(1)," KB"]})]},`${W.process_id}-${W.name}-${oe}`))})]}),v.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&r.jsxs("div",{className:"data-table-container",children:[r.jsxs("table",{className:"data-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Name"}),r.jsx("th",{children:"Display Name"}),r.jsx("th",{children:"Description"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Path"})]})}),r.jsx("tbody",{children:w.map((W,oe)=>{var U;return r.jsxs("tr",{children:[r.jsx("td",{className:"mono highlight",children:W.name}),r.jsx("td",{children:W.display_name||W.name}),r.jsx("td",{className:"truncate",title:W.description,children:W.description||"-"}),r.jsx("td",{children:r.jsx("span",{className:`status-badge ${(U=W.status)==null?void 0:U.toLowerCase()}`,children:W.status})}),r.jsx("td",{className:"truncate mono",title:W.path,children:W.path||"-"})]},`${W.name}-${oe}`)})})]}),w.length===0&&!N&&r.jsx("div",{className:"empty-state",children:"No driver information available"})]}),r.jsx("style",{children:`
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
      `})]})}function Ck(){const[t,e]=E.useState([]),[n,i]=E.useState(!0),[o,l]=E.useState(null),[c,u]=E.useState(0),[h,p]=E.useState(0),[g,v]=E.useState("all"),[b,w]=E.useState("all"),[j,N]=E.useState(""),[y,_]=E.useState(null),[S,A]=E.useState(!1),[z,R]=E.useState(!1),[I,D]=E.useState(!1),[C,L]=E.useState([]),[V,X]=E.useState(null),[F,G]=E.useState({}),[W,oe]=E.useState(null),[U,ie]=E.useState(!1),[K,re]=E.useState(!1),[J,M]=E.useState(null),Q=E.useRef(null),le=()=>{Mn.list().then(Y=>{e(Y.data.rules||[]),u(Y.data.total_count||0),p(Y.data.enabled_count||0),i(!1)}).catch(Y=>{l(Y.message||"Failed to load rules"),i(!1)})};E.useEffect(()=>{le()},[]);const ve=()=>{Mn.listTemplates().then(Y=>{L(Y.data.templates||[])}).catch(Y=>{console.error("Failed to load templates:",Y)})},ye=()=>{ve(),D(!0)},be=Y=>{X(Y);const fe={};Y.parameters.forEach(Ee=>{fe[Ee.name]=Ee.default||""}),G(fe)},Ae=()=>{V&&Mn.instantiateTemplate(V.name,F).then(()=>{D(!1),X(null),G({}),le()}).catch(Y=>{console.error("Failed to create rule from template:",Y),alert("Failed to create rule from template")})},Pe=(Y,fe)=>{Mn.toggle(Y,!fe).then(()=>{e(t.map(Ee=>Ee.name===Y?{...Ee,enabled:!fe}:Ee)),p(Ee=>fe?Ee-1:Ee+1)}).catch(Ee=>{console.error("Failed to toggle rule:",Ee)})},Ie=Y=>{if(!Y.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?"))return;const fe=prompt("Edit rule description:",Y.description);fe!==null&&fe!==Y.description&&Mn.save({...Y,description:fe}).then(()=>{e(t.map(Ee=>Ee.name===Y.name?{...Ee,description:fe}:Ee))}).catch(Ee=>{console.error("Failed to update rule:",Ee)})},pt=()=>{const Y=prompt(`Add rule: (1) From template, (2) Custom rule
Enter 1 or 2:`);if(Y==="1")ye();else if(Y==="2"){const fe=prompt("Enter rule name:");if(!fe)return;const Ee=prompt("Enter rule description:")||"",Vt=prompt("Enter severity (critical/high/medium/low):","medium")||"medium";Mn.save({name:fe,description:Ee,severity:Vt,enabled:!0,score:50}).then(()=>{le()}).catch(St=>{console.error("Failed to add rule:",St)})}},Wn=()=>{A(!0),oe(null)},nn=Y=>{ie(!0),Mn.validate(Y).then(fe=>{oe(fe.data)}).catch(fe=>{oe({valid:!1,errors:[fe.message||"Validation failed"],warnings:[]})}).finally(()=>{ie(!1)})},me=Y=>{Mn.export(Y).then(fe=>{const Ee=new Blob([fe.data],{type:Y==="yaml"?"text/yaml":"application/json"}),Vt=URL.createObjectURL(Ee),St=document.createElement("a");St.href=Vt,St.download=`rules_export.${Y}`,document.body.appendChild(St),St.click(),document.body.removeChild(St),URL.revokeObjectURL(Vt)}).catch(fe=>{console.error("Failed to export rules:",fe),alert("Failed to export rules")})},Ht=()=>{R(!0),M(null)},Zs=Y=>{var Vt;const fe=(Vt=Y.target.files)==null?void 0:Vt[0];if(!fe)return;const Ee=new FileReader;Ee.onload=St=>{var te;try{const ae=(te=St.target)==null?void 0:te.result;let Ce=[];if(fe.name.endsWith(".yaml")||fe.name.endsWith(".yml")){const Fe=ae.split(`
`);let Ke={};for(const Je of Fe)Je.startsWith("- name:")?(Ke.name&&Ce.push(Ke),Ke={name:Je.replace("- name:","").trim(),mitre_attack:[]}):Je.startsWith("  description:")?Ke.description=Je.replace("  description:","").trim():Je.startsWith("  severity:")?Ke.severity=Je.replace("  severity:","").trim():Je.startsWith("  enabled:")?Ke.enabled=Je.replace("  enabled:","").trim()==="true":Je.startsWith("  score:")?Ke.score=parseFloat(Je.replace("  score:","").trim())||50:Je.startsWith("    - ")&&(Ke.mitre_attack||(Ke.mitre_attack=[]),Ke.mitre_attack.push(Je.replace("    - ","").trim()));Ke.name&&Ce.push(Ke)}else{const Fe=JSON.parse(ae);Ce=Array.isArray(Fe)?Fe:Fe.rules||[]}if(Ce.length===0){M({imported:0,failed:0,errors:["No valid rules found in file"]});return}re(!0),Mn.import(Ce).then(Fe=>{M(Fe.data),Fe.data.imported>0&&le()}).catch(Fe=>{M({imported:0,failed:Ce.length,errors:[Fe.message||"Import failed"]})}).finally(()=>{re(!1)})}catch(ae){M({imported:0,failed:0,errors:["Failed to parse file: "+(ae.message||"Invalid format")]})}},Ee.readAsText(fe)},Hn=Y=>{_(Y)},kn=Y=>{switch(Y==null?void 0:Y.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},bs=Y=>{switch(Y==null?void 0:Y.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Vn=t.filter(Y=>{var fe;return!(g!=="all"&&((fe=Y.severity)==null?void 0:fe.toLowerCase())!==g||b==="enabled"&&!Y.enabled||b==="disabled"&&Y.enabled||j&&!Y.name.toLowerCase().includes(j.toLowerCase()))});return n?r.jsx("div",{className:"rules-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:"Loading rules..."})]})}):o?r.jsx("div",{className:"rules-page",children:r.jsx("div",{className:"error-state",children:o})}):r.jsxs("div",{className:"rules-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Detection Rules"}),r.jsxs("div",{className:"header-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:Wn,children:"Validate"}),r.jsx("button",{className:"btn-secondary",onClick:Ht,children:"Import"}),r.jsxs("div",{className:"export-dropdown",children:[r.jsx("button",{className:"btn-secondary",children:"Export"}),r.jsxs("div",{className:"export-menu",children:[r.jsx("button",{onClick:()=>me("json"),children:"JSON"}),r.jsx("button",{onClick:()=>me("yaml"),children:"YAML"})]})]}),r.jsx("button",{className:"btn-primary",onClick:pt,children:"Add Rule"})]})]}),r.jsxs("div",{className:"stats-cards",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon",children:"📋"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value",children:c}),r.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon enabled",children:"✓"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value enabled",children:h}),r.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("div",{className:"stat-icon disabled",children:"✗"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("div",{className:"stat-value disabled",children:c-h}),r.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),r.jsxs("div",{className:"filter-bar",children:[r.jsx("input",{type:"text",placeholder:"Search rules...",value:j,onChange:Y=>N(Y.target.value),className:"search-input"}),r.jsxs("select",{value:g,onChange:Y=>v(Y.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Severities"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"high",children:"High"}),r.jsx("option",{value:"medium",children:"Medium"}),r.jsx("option",{value:"low",children:"Low"})]}),r.jsxs("select",{value:b,onChange:Y=>w(Y.target.value),className:"filter-select",children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"enabled",children:"Enabled"}),r.jsx("option",{value:"disabled",children:"Disabled"})]})]}),r.jsx("div",{className:"rules-grid",children:Vn.map(Y=>{var fe;return r.jsxs("div",{className:`rule-card ${Y.enabled?"":"disabled"}`,children:[r.jsxs("div",{className:"rule-header",children:[r.jsxs("div",{className:"rule-title",children:[r.jsx("span",{className:`severity-dot ${kn(Y.severity)}`}),r.jsx("span",{className:"rule-name",children:Y.name})]}),r.jsxs("label",{className:"switch",children:[r.jsx("input",{type:"checkbox",checked:Y.enabled,onChange:()=>Pe(Y.name,Y.enabled)}),r.jsx("span",{className:"slider"})]})]}),r.jsxs("div",{className:"rule-meta",children:[r.jsxs("span",{className:`severity-badge ${kn(Y.severity)}`,children:[bs(Y.severity)," ",Y.severity]}),r.jsxs("span",{className:"score-badge",children:["Score: ",Y.score]}),!Y.is_custom&&r.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),r.jsx("p",{className:"rule-description",children:Y.description}),r.jsxs("div",{className:"rule-footer",children:[r.jsxs("div",{className:"mitre-tags",children:[(fe=Y.mitre_attack)==null?void 0:fe.slice(0,3).map(Ee=>r.jsx("span",{className:"mitre-tag",children:Ee},Ee)),Y.mitre_attack&&Y.mitre_attack.length>3&&r.jsxs("span",{className:"mitre-tag",children:["+",Y.mitre_attack.length-3]})]}),r.jsxs("div",{className:"rule-actions",children:[r.jsx("button",{className:"rule-action",onClick:()=>Hn(Y),children:"Details"}),r.jsx("button",{className:"rule-action",onClick:()=>Ie(Y),children:"Edit"})]})]})]},Y.id)})}),Vn.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🛡️"}),r.jsx("div",{children:"No rules match your filters"})]}),y&&r.jsx("div",{className:"modal-overlay",onClick:()=>_(null),children:r.jsxs("div",{className:"modal-content rule-modal",onClick:Y=>Y.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Rule Details"}),r.jsx("button",{className:"close-btn",onClick:()=>_(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Name:"}),r.jsx("span",{className:"detail-value",children:y.name})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"ID:"}),r.jsx("span",{className:"detail-value mono",children:y.id})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Severity:"}),r.jsxs("span",{className:`severity-badge ${kn(y.severity)}`,children:[bs(y.severity)," ",y.severity]})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Score:"}),r.jsx("span",{className:"detail-value",children:y.score})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"detail-label",children:"Status:"}),r.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Description"}),r.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"MITRE ATT&CK"}),r.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(Y=>r.jsx("span",{className:"mitre-tag",children:Y},Y))})]}),y.tags&&y.tags.length>0&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:"Tags"}),r.jsx("div",{className:"tags-list",children:y.tags.map(Y=>r.jsx("span",{className:"tag-item",children:Y},Y))})]})]})]})}),S&&r.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:r.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Validate Rule"}),r.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),r.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:()=>{const Y=document.querySelector(".validate-input");if(Y!=null&&Y.value){const fe=Y.value;try{if(fe.trim().startsWith("-"))nn({name:"temp",description:fe,severity:"medium",enabled:!0,score:50});else{const Ee=JSON.parse(fe);nn(Ee)}}catch{nn({name:"temp",description:fe,severity:"medium",enabled:!0,score:50})}}},disabled:U,children:U?"Validating...":"Validate"})]}),W&&r.jsxs("div",{className:`validation-result ${W.valid?"valid":"invalid"}`,children:[r.jsx("div",{className:"result-header",children:W.valid?"✓ Valid Rule":"✗ Invalid Rule"}),W.errors.length>0&&r.jsxs("div",{className:"result-errors",children:[r.jsx("strong",{children:"Errors:"}),r.jsx("ul",{children:W.errors.map((Y,fe)=>r.jsx("li",{children:Y},fe))})]}),W.warnings.length>0&&r.jsxs("div",{className:"result-warnings",children:[r.jsx("strong",{children:"Warnings:"}),r.jsx("ul",{children:W.warnings.map((Y,fe)=>r.jsx("li",{children:Y},fe))})]})]})]})]})}),z&&r.jsx("div",{className:"modal-overlay",onClick:()=>R(!1),children:r.jsxs("div",{className:"modal-content",onClick:Y=>Y.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Import Rules"}),r.jsx("button",{className:"close-btn",onClick:()=>R(!1),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),r.jsx("input",{type:"file",ref:Q,accept:".yaml,.yml,.json",onChange:Zs,style:{display:"none"}}),r.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var Y;return(Y=Q.current)==null?void 0:Y.click()},disabled:K,children:K?"Importing...":"Choose File"}),J&&r.jsxs("div",{className:`import-result ${J.imported>0?"success":"error"}`,children:[r.jsx("div",{className:"result-header",children:J.imported>0?`✓ Imported ${J.imported} rules`:"✗ Import failed"}),J.failed>0&&r.jsxs("div",{className:"result-info",children:["Failed: ",J.failed]}),J.errors.length>0&&r.jsx("div",{className:"result-errors",children:r.jsx("ul",{children:J.errors.map((Y,fe)=>r.jsx("li",{children:Y},fe))})})]}),r.jsx("div",{className:"modal-actions",children:r.jsx("button",{className:"btn-secondary",onClick:()=>R(!1),children:"Close"})})]})]})}),I&&r.jsx("div",{className:"modal-overlay",onClick:()=>D(!1),children:r.jsxs("div",{className:"modal-content template-modal",onClick:Y=>Y.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:"Create Rule from Template"}),r.jsx("button",{className:"close-btn",onClick:()=>D(!1),children:"×"})]}),r.jsx("div",{className:"modal-body",children:V?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"selected-template-header",children:[r.jsx("button",{className:"btn-back",onClick:()=>X(null),children:"← Back"}),r.jsx("h4",{children:V.name})]}),r.jsx("div",{className:"template-params-form",children:V.parameters.map(Y=>r.jsxs("div",{className:"param-item",children:[r.jsxs("label",{children:[Y.name,Y.required&&r.jsx("span",{className:"required",children:"*"})]}),r.jsx("p",{className:"param-desc",children:Y.description}),Y.options&&Y.options.length>0?r.jsxs("select",{value:F[Y.name]||"",onChange:fe=>G({...F,[Y.name]:fe.target.value}),children:[r.jsx("option",{value:"",children:"Select..."}),Y.options.map(fe=>r.jsx("option",{value:fe,children:fe},fe))]}):r.jsx("input",{type:Y.type==="number"?"number":"text",value:F[Y.name]||"",onChange:fe=>G({...F,[Y.name]:fe.target.value}),placeholder:Y.default||""})]},Y.name))}),r.jsxs("div",{className:"modal-actions",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>D(!1),children:"Cancel"}),r.jsx("button",{className:"btn-primary",onClick:Ae,disabled:V.parameters.some(Y=>Y.required&&!F[Y.name]),children:"Create Rule"})]})]}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"modal-desc",children:"Select a template:"}),r.jsx("div",{className:"template-list",children:C.length===0?r.jsx("div",{className:"empty-state",children:"No templates available"}):C.map(Y=>r.jsxs("div",{className:"template-card",onClick:()=>be(Y),children:[r.jsx("div",{className:"template-name",children:Y.name}),r.jsx("div",{className:"template-desc",children:Y.description}),r.jsxs("div",{className:"template-params",children:[Y.parameters.length," parameters"]})]},Y.name))})]})})]})}),r.jsx("style",{children:`
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
      `})]})}function Ek(){const[t,e]=E.useState("general"),[n,i]=E.useState(!1),[o,l]=E.useState(!1),[c,u]=E.useState(null),[h,p]=E.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});E.useEffect(()=>{ed.get().then(w=>{const j=w.data;p({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const g=async()=>{var w,j;l(!0),u(null);try{await ed.save({database_path:h.databasePath,log_level:h.logLevel,max_events:h.maxEvents,retention_days:h.retentionDays,enable_alerting:h.enableAlerting,enable_live_collection:h.enableLiveCollection,enable_auto_update:h.enableAutoUpdate,api_port:h.apiPort,api_host:h.apiHost,cors_enabled:h.corsEnabled,max_import_file_size:h.maxImportFileSize,export_directory:h.exportDirectory,parser_workers:h.parserWorkers,memory_limit:h.memoryLimit}),i(!0),setTimeout(()=>i(!1),3e3)}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to save settings")}finally{l(!1)}},v=async()=>{var w,j;l(!0),u(null);try{await ed.reset(),window.location.reload()}catch(N){u(((j=(w=N.response)==null?void 0:w.data)==null?void 0:j.error)||"Failed to reset settings"),l(!1)}},b=(w,j)=>{p({...h,[w]:j})};return r.jsxs("div",{className:"settings-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:"Settings"}),n&&r.jsx("span",{className:"save-indicator",children:"✓ Saved"})]}),r.jsxs("div",{className:"settings-layout",children:[r.jsxs("div",{className:"settings-nav",children:[r.jsxs("button",{className:`nav-item ${t==="general"?"active":""}`,onClick:()=>e("general"),children:[r.jsx("span",{className:"nav-icon",children:"⚙️"}),"General"]}),r.jsxs("button",{className:`nav-item ${t==="database"?"active":""}`,onClick:()=>e("database"),children:[r.jsx("span",{className:"nav-icon",children:"💾"}),"Database"]}),r.jsxs("button",{className:`nav-item ${t==="api"?"active":""}`,onClick:()=>e("api"),children:[r.jsx("span",{className:"nav-icon",children:"🔌"}),"API Server"]}),r.jsxs("button",{className:`nav-item ${t==="collection"?"active":""}`,onClick:()=>e("collection"),children:[r.jsx("span",{className:"nav-icon",children:"📡"}),"Collection"]}),r.jsxs("button",{className:`nav-item ${t==="advanced"?"active":""}`,onClick:()=>e("advanced"),children:[r.jsx("span",{className:"nav-icon",children:"🔧"}),"Advanced"]})]}),r.jsxs("div",{className:"settings-content",children:[t==="general"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"General Settings"}),r.jsx("p",{children:"Configure basic application settings"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Log Level"}),r.jsx("p",{children:"Minimum severity level for logging"})]}),r.jsxs("select",{value:h.logLevel,onChange:w=>b("logLevel",w.target.value),children:[r.jsx("option",{value:"debug",children:"Debug"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"warn",children:"Warning"}),r.jsx("option",{value:"error",children:"Error"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Export Directory"}),r.jsx("p",{children:"Default directory for exported files"})]}),r.jsx("input",{type:"text",value:h.exportDirectory,onChange:w=>b("exportDirectory",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Auto Update Rules"}),r.jsx("p",{children:"Automatically update detection rules"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAutoUpdate,onChange:w=>b("enableAutoUpdate",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="database"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Database Settings"}),r.jsx("p",{children:"Configure database storage and retention"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Database Path"}),r.jsx("p",{children:"Path to SQLite database file"})]}),r.jsx("input",{type:"text",value:h.databasePath,onChange:w=>b("databasePath",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Event Retention (days)"}),r.jsx("p",{children:"Automatically delete events older than this"})]}),r.jsx("input",{type:"number",value:h.retentionDays,onChange:w=>b("retentionDays",Number(w.target.value)),className:"number-input",min:"1",max:"365"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Maximum Events"}),r.jsx("p",{children:"Maximum number of events to store"})]}),r.jsx("input",{type:"number",value:h.maxEvents,onChange:w=>b("maxEvents",Number(w.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),t==="api"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"API Server Settings"}),r.jsx("p",{children:"Configure the HTTP API server"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Host"}),r.jsx("p",{children:"Host address to bind the API server"})]}),r.jsx("input",{type:"text",value:h.apiHost,onChange:w=>b("apiHost",w.target.value),className:"text-input"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"API Port"}),r.jsx("p",{children:"Port number for the API server"})]}),r.jsx("input",{type:"number",value:h.apiPort,onChange:w=>b("apiPort",Number(w.target.value)),className:"number-input",min:"1",max:"65535"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable CORS"}),r.jsx("p",{children:"Allow cross-origin requests"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.corsEnabled,onChange:w=>b("corsEnabled",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]})]}),t==="collection"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Collection Settings"}),r.jsx("p",{children:"Configure event collection behavior"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Alerting"}),r.jsx("p",{children:"Generate alerts when rules match"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableAlerting,onChange:w=>b("enableAlerting",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Enable Live Collection"}),r.jsx("p",{children:"Continuously monitor Windows Event Logs"})]}),r.jsxs("label",{className:"toggle",children:[r.jsx("input",{type:"checkbox",checked:h.enableLiveCollection,onChange:w=>b("enableLiveCollection",w.target.checked)}),r.jsx("span",{className:"toggle-slider"})]})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Max Import File Size (MB)"}),r.jsx("p",{children:"Maximum size for imported files"})]}),r.jsx("input",{type:"number",value:h.maxImportFileSize,onChange:w=>b("maxImportFileSize",Number(w.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),t==="advanced"&&r.jsxs("div",{className:"settings-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:"Advanced Settings"}),r.jsx("p",{children:"Expert configuration options"})]}),r.jsxs("div",{className:"info-card",children:[r.jsx("h4",{children:"⚠️ Warning"}),r.jsx("p",{children:"Advanced settings may affect performance and stability. Only modify if you know what you're doing."})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Parser Workers"}),r.jsx("p",{children:"Number of parallel parsing workers"})]}),r.jsx("input",{type:"number",value:h.parserWorkers,onChange:w=>b("parserWorkers",Number(w.target.value)),className:"number-input",min:"1",max:"32"})]}),r.jsxs("div",{className:"setting-card",children:[r.jsxs("div",{className:"setting-info",children:[r.jsx("label",{children:"Memory Limit (MB)"}),r.jsx("p",{children:"Maximum memory usage for event processing"})]}),r.jsx("input",{type:"number",value:h.memoryLimit,onChange:w=>b("memoryLimit",Number(w.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),r.jsxs("div",{className:"settings-actions",children:[c&&r.jsx("span",{className:"error-text",children:c}),r.jsx("button",{onClick:g,className:"btn-primary",disabled:o,children:o?"Saving...":"Save Changes"}),r.jsx("button",{onClick:v,className:"btn-secondary",disabled:o,children:"Reset to Defaults"})]})]})]}),r.jsx("style",{children:`
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
      `})]})}function Rk(){const{t}=ft(),[e,n]=E.useState(null),[i,o]=E.useState(!0),[l,c]=E.useState(null),[u,h]=E.useState("5m"),[p,g]=E.useState({events:[],alerts:[],memory:[],timestamps:[]}),v=E.useRef(null),b=()=>{Bs.getMetrics().then(_=>{n(_.data),o(!1),g(S=>{const A=new Date().toLocaleTimeString(),z=[...S.events,_.data.total_events].slice(-20),R=[...S.alerts,_.data.total_alerts].slice(-20),I=[...S.memory,_.data.memory_usage_mb].slice(-20),D=[...S.timestamps,A].slice(-20);return{events:z,alerts:R,memory:I,timestamps:D}})}).catch(_=>{c(_.message||t("common.error")),o(!1)})};E.useEffect(()=>{b();const _=setInterval(b,5e3);return()=>clearInterval(_)},[]),E.useEffect(()=>{v.current&&p.events.length>1&&w()},[p]);const w=()=>{const _=v.current;if(!_)return;const S=_.getContext("2d");if(!S)return;const A=_.width,z=_.height,R=40;S.clearRect(0,0,A,z);const I=Math.max(...p.events,1),D=Math.min(...p.events,0),C=I-D||1;S.strokeStyle="#333",S.lineWidth=1;for(let V=0;V<=4;V++){const X=R+(z-2*R)*V/4;S.beginPath(),S.moveTo(R,X),S.lineTo(A-R,X),S.stroke()}const L=(A-2*R)/(p.events.length-1);S.strokeStyle="#00d9ff",S.lineWidth=2,S.beginPath(),p.events.forEach((V,X)=>{const F=R+X*L,G=R+(z-2*R)*(1-(V-D)/C);X===0?S.moveTo(F,G):S.lineTo(F,G)}),S.stroke(),S.fillStyle="#00d9ff",p.events.forEach((V,X)=>{const F=R+X*L,G=R+(z-2*R)*(1-(V-D)/C);S.beginPath(),S.arc(F,G,3,0,Math.PI*2),S.fill()})},j=_=>{const S=Math.floor(_/86400),A=Math.floor(_%86400/3600),z=Math.floor(_%3600/60);return S>0?`${S}d ${A}h ${z}m`:A>0?`${A}h ${z}m`:`${z}m`};if(i)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"loading-state",children:[r.jsx("div",{className:"spinner"}),r.jsx("div",{children:t("common.loading")})]})});if(l)return r.jsx("div",{className:"metrics-page",children:r.jsxs("div",{className:"error-state",children:["❌ ",l]})});const N=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return r.jsxs("div",{className:"metrics-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("metrics.title")}),r.jsxs("div",{className:"time-range-selector",children:[r.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),r.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),r.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-card large",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"📊"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),r.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),r.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"🚨"}),r.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),r.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),r.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"💾"}),r.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),r.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),r.jsx("div",{className:"metric-bar",children:r.jsx("div",{className:"metric-bar-fill",style:{width:`${N}%`}})}),r.jsxs("div",{className:"metric-sub",children:[N,"% of limit"]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-icon",children:"⚡"}),r.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),r.jsx("div",{className:"metric-value uptime",children:j((e==null?void 0:e.uptime_seconds)||0)}),r.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),r.jsx("div",{className:"chart-section",children:r.jsxs("div",{className:"chart-card",children:[r.jsxs("div",{className:"chart-header",children:[r.jsx("h3",{children:"Event Throughput"}),r.jsx("div",{className:"chart-legend",children:r.jsxs("span",{className:"legend-item",children:[r.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),r.jsx("div",{className:"chart-container",children:r.jsx("canvas",{ref:v,width:800,height:200})})]})}),r.jsxs("div",{className:"prometheus-section",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("metrics.prometheusFormat")}),r.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),r.jsx("pre",{className:"prometheus-code",children:y()})]}),r.jsx("style",{children:`
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}Jr.register($o,Uo,Dr,$n,Nx,kx,jx,yx);function Pk(){const{t}=ft(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!0),[u,h]=E.useState(null),[p,g]=E.useState(null),[v,b]=E.useState({});E.useEffect(()=>{w()},[]);const w=async()=>{try{c(!0);const A=(await Pj.detect()).data;n(A.detections||[]),o(j(A.detections||[])),h(null)}catch(S){h(S instanceof Error?S.message:"Unknown error")}finally{c(!1)}},j=S=>{const A={total_detections:S.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return S.forEach(z=>{var I;const R=((I=z.severity)==null?void 0:I.toLowerCase())||"info";R in A.by_severity&&A.by_severity[R]++,A.by_category[z.category]=(A.by_category[z.category]||0)+1,A.by_technique[z.technique]=(A.by_technique[z.technique]||0)+1}),A},N=e.filter(S=>{var A;return!(v.severity&&((A=S.severity)==null?void 0:A.toLowerCase())!==v.severity||v.category&&S.category!==v.category||v.technique&&S.technique!==v.technique)}),y={labels:Object.keys((i==null?void 0:i.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((i==null?void 0:i.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},_={labels:Object.keys((i==null?void 0:i.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((i==null?void 0:i.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return l?r.jsx("div",{className:"persistence-page",children:r.jsx("div",{className:"loading",children:t("common.loading")})}):u?r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("common.confirm")})]}):r.jsxs("div",{className:"persistence-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h1",{children:t("persistence.title")}),r.jsx("button",{onClick:w,className:"btn btn-primary",children:t("persistence.rescan")})]}),i&&r.jsxs("div",{className:"stats-grid",children:[r.jsxs("div",{className:"stat-card stat-total",children:[r.jsx("div",{className:"stat-value",children:i.total_detections}),r.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),r.jsxs("div",{className:"stat-card stat-critical",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.critical}),r.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),r.jsxs("div",{className:"stat-card stat-high",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.high}),r.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),r.jsxs("div",{className:"stat-card stat-medium",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.medium}),r.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),r.jsxs("div",{className:"stat-card stat-low",children:[r.jsx("div",{className:"stat-value",children:i.by_severity.low}),r.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),r.jsxs("div",{className:"charts-grid",children:[r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.bySeverity")}),r.jsx("div",{className:"chart-container",children:r.jsx(Td,{data:y,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),r.jsxs("div",{className:"chart-card",children:[r.jsx("h3",{children:t("persistence.byCategory")}),r.jsx("div",{className:"chart-container",children:r.jsx(Td,{data:_,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),r.jsx("div",{className:"filters",children:r.jsxs("select",{value:v.severity||"",onChange:S=>b({...v,severity:S.target.value||void 0}),children:[r.jsx("option",{value:"",children:t("persistence.allSeverities")}),r.jsx("option",{value:"critical",children:t("persistence.critical")}),r.jsx("option",{value:"high",children:t("persistence.high")}),r.jsx("option",{value:"medium",children:t("persistence.medium")}),r.jsx("option",{value:"low",children:t("persistence.low")})]})}),r.jsx("div",{className:"detections-table-container",children:r.jsxs("table",{className:"detections-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("persistence.severity")}),r.jsx("th",{children:t("persistence.technique")}),r.jsx("th",{children:t("persistence.category")}),r.jsx("th",{children:t("persistence.title")}),r.jsx("th",{children:t("persistence.evidence")}),r.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),r.jsx("tbody",{children:N.map(S=>{var A,z,R,I;return r.jsxs("tr",{onClick:()=>g(S),className:"detection-row",children:[r.jsx("td",{children:r.jsx("span",{className:`severity-badge severity-${(A=S.severity)==null?void 0:A.toLowerCase()}`,children:t(`persistence.${(z=S.severity)==null?void 0:z.toLowerCase()}`)})}),r.jsx("td",{children:r.jsx("span",{className:"technique-tag",children:S.technique})}),r.jsx("td",{children:S.category}),r.jsx("td",{children:S.title}),r.jsx("td",{className:"evidence-cell",children:((R=S.evidence)==null?void 0:R.key)&&r.jsx("div",{className:"evidence-key",children:S.evidence.key})}),r.jsx("td",{children:t(`persistence.${(I=S.false_positive_risk)==null?void 0:I.toLowerCase()}Risk`)||S.false_positive_risk})]},S.id)})})]})}),p&&r.jsx("div",{className:"modal-overlay",onClick:()=>g(null),children:r.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h2",{children:p.title}),r.jsx("button",{className:"close-btn",onClick:()=>g(null),children:"×"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.basicInfo")}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),r.jsxs("p",{children:[r.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.description")}),r.jsx("p",{children:p.description})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h4",{children:t("persistence.recommendedAction")}),r.jsx("p",{children:p.recommended_action})]})]})]})})]})}const jn={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},Ak={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},Tk=(t,e="zh")=>{const n=e.startsWith("zh")?"zh":"en";return Ak[n][t]||t},Dk=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function Mk(){var y,_;const{t,locale:e}=ft(),n=Un(),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState("brute-force"),[p,g]=E.useState(24),[v,b]=E.useState(""),w=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:jn["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:jn.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:jn.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:jn.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:jn["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:jn["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:jn.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:jn["privilege-escalation"],category:"privilege-escalation",recommended:!1}],j=async()=>{var S,A;o(!0),b("");try{const z=await Rj.run(u,{hours:p});c(z.data)}catch(z){b(((A=(S=z.response)==null?void 0:S.data)==null?void 0:A.error)||"Failed to run analyzer")}finally{o(!1)}},N=w.reduce((S,A)=>(S[A.category]||(S[A.category]=[]),S[A.category].push(A),S),{});return r.jsxs("div",{className:"analyze-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("analyze.title")}),r.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),r.jsxs("div",{className:"analyze-grid",children:[r.jsxs("div",{className:"analyzer-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(N).map(([S,A])=>{var z;return r.jsxs("div",{className:"analyzer-category",children:[r.jsx("div",{className:"category-header",children:((z=Dk.find(R=>R.id===S))==null?void 0:z.name)||S}),r.jsx("div",{className:"analyzer-list",children:A.map(R=>r.jsxs("div",{className:`analyzer-card ${u===R.id?"selected":""}`,onClick:()=>h(R.id),children:[r.jsx("div",{className:"analyzer-icon",children:R.icon}),r.jsxs("div",{className:"analyzer-content",children:[r.jsxs("div",{className:"analyzer-header",children:[r.jsx("span",{className:"analyzer-name",children:R.name}),R.recommended&&r.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),r.jsx("p",{className:"analyzer-desc",children:R.desc})]}),r.jsx("div",{className:"select-indicator",children:u===R.id&&"✓"})]},R.id))})]},S)})]}),r.jsxs("div",{className:"config-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.configuration")})}),r.jsxs("div",{className:"config-card",children:[r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.selectedAnalyzer")}),r.jsxs("div",{className:"selected-analyzer-display",children:[r.jsx("span",{className:"analyzer-icon",children:jn[u]}),r.jsx("span",{children:(y=w.find(S=>S.id===u))==null?void 0:y.name})]})]}),r.jsxs("div",{className:"config-item",children:[r.jsx("label",{children:t("analyze.timeWindow")}),r.jsxs("div",{className:"time-selector",children:[r.jsx("button",{className:p===1?"active":"",onClick:()=>g(1),children:"1h"}),r.jsx("button",{className:p===6?"active":"",onClick:()=>g(6),children:"6h"}),r.jsx("button",{className:p===24?"active":"",onClick:()=>g(24),children:"24h"}),r.jsx("button",{className:p===72?"active":"",onClick:()=>g(72),children:"72h"}),r.jsx("button",{className:p===168?"active":"",onClick:()=>g(168),children:"7d"})]})]}),r.jsx("button",{onClick:j,disabled:i,className:"btn-primary btn-run",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),v&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:v})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("analyze.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>n("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>n("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),l&&r.jsxs("div",{className:"results-section",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.results")})}),r.jsxs("div",{className:"results-grid",children:[r.jsxs("div",{className:"result-summary-card",children:[r.jsxs("div",{className:"result-header",children:[r.jsx("span",{className:"result-icon",children:jn[l.type]}),r.jsx("span",{className:"result-type",children:(_=w.find(S=>S.id===l.type))==null?void 0:_.name})]}),r.jsxs("div",{className:"result-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.severity")}),r.jsx("span",{className:`severity-badge severity-${l.severity}`,children:l.severity.toUpperCase()})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.score")}),r.jsx("span",{className:"score-value",children:l.score.toFixed(1)})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("analyze.findings")}),r.jsx("span",{className:"findings-count",children:l.findings.length})]})]}),r.jsx("p",{className:"result-summary",children:l.summary})]}),l.findings.length>0&&r.jsxs("div",{className:"findings-card",children:[r.jsx("h4",{children:t("analyze.findingsList")}),r.jsx("div",{className:"findings-list",children:l.findings.map((S,A)=>r.jsxs("div",{className:"finding-item",children:[r.jsxs("div",{className:"finding-header",children:[r.jsx("span",{className:`severity-indicator severity-${S.severity}`}),r.jsx("span",{className:"finding-desc",children:Tk(S.description,e)})]}),r.jsxs("div",{className:"finding-meta",children:[S.rule_name&&r.jsx("span",{className:"rule-name",children:S.rule_name}),r.jsxs("span",{className:"finding-score",children:["Score: ",S.score.toFixed(1)]}),S.evidence&&S.evidence.length>0&&r.jsxs("span",{className:"evidence-count",children:[S.evidence.length," events"]})]}),S.evidence&&S.evidence.length>0&&r.jsxs("div",{className:"evidence-list",children:[r.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),S.evidence.slice(0,5).map((z,R)=>{var I;return r.jsxs("div",{className:"evidence-item",children:[r.jsx("span",{className:"evidence-time",children:new Date(z.timestamp).toLocaleString()}),r.jsx("span",{className:"evidence-user",children:z.user||"-"}),r.jsx("span",{className:"evidence-computer",children:z.computer||"-"}),r.jsxs("span",{className:"evidence-msg",title:z.message,children:[(I=z.message)==null?void 0:I.substring(0,80),z.message&&z.message.length>80?"...":""]})]},R)}),S.evidence.length>5&&r.jsxs("div",{className:"evidence-more",children:["+",S.evidence.length-5," more events"]})]})]},A))})]})]})]}),r.jsxs("div",{className:"analyzer-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),r.jsx("div",{className:"info-grid",children:w.slice(0,4).map(S=>r.jsxs("div",{className:"info-card",children:[r.jsx("div",{className:"info-icon",children:S.icon}),r.jsxs("div",{className:"info-content",children:[r.jsx("h4",{children:S.name}),r.jsx("p",{children:S.desc})]})]},S.id))})]})]})}const Wm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},Lk={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function Ok(){const{t}=ft(),e=Un(),[n,i]=E.useState(!1),[o,l]=E.useState([]),[c,u]=E.useState("24h"),[h,p]=E.useState(""),[g,v]=E.useState(!1),[b,w]=E.useState(null),j=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],N=async()=>{var D,C;i(!0),p("");try{const L=await Aj.analyze({time_window:c});l(L.data.results||[]),v(!0)}catch(L){p(((C=(D=L.response)==null?void 0:D.data)==null?void 0:C.error)||"Failed to run correlation analysis")}finally{i(!1)}},y=D=>Wm[D.toLowerCase()]||Wm.info,_=D=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[D.toLowerCase()]||D,S=D=>{for(const[C,L]of Object.entries(Lk))if(D.includes(C))return L;return"🎯"},A=D=>{try{return new Date(D).toLocaleString()}catch{return D}},z=(D,C)=>{try{const L=new Date(D).getTime(),X=new Date(C).getTime()-L,F=Math.floor(X/1e3),G=Math.floor(F/60),W=Math.floor(G/60);return W>0?`${W}h ${G%60}m`:G>0?`${G}m ${F%60}s`:`${F}s`}catch{return"N/A"}},R=E.useMemo(()=>{if(o.length===0)return null;const D={critical:0,high:0,medium:0,low:0};return o.forEach(C=>{const L=C.severity.toLowerCase();D.hasOwnProperty(L)&&D[L]++}),{totalEvents:o.reduce((C,L)=>C+L.event_count,0),severityCounts:D,avgEventsPerRule:Math.round(o.reduce((C,L)=>C+L.event_count,0)/o.length)}},[o]),I=E.useMemo(()=>{if(o.length===0)return[];const D=Math.max(...o.map(C=>C.event_count));return o.map(C=>{const L=Math.round(C.event_count/D*20);return{...C,bar:"█".repeat(L)+"░".repeat(20-L)}})},[o]);return r.jsxs("div",{className:"correlation-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("correlation.title")}),r.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),r.jsxs("div",{className:"correlation-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("correlation.timeWindow")}),r.jsx("div",{className:"time-selector",children:j.map(D=>r.jsx("button",{className:c===D.value?"active":"",onClick:()=>u(D.value),children:D.label},D.value))})]}),r.jsx("button",{onClick:N,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:h})]}),g&&!n&&o.length===0&&r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🔍"}),r.jsx("h3",{children:t("correlation.noResults")}),r.jsx("p",{children:t("correlation.noResultsDesc")})]}),R&&r.jsxs("div",{className:"correlation-stats",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📊"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:o.length}),r.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-icon",children:"📝"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.totalEvents.toLocaleString()}),r.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),r.jsxs("div",{className:"stat-card critical",children:[r.jsx("span",{className:"stat-icon",children:"🔴"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.critical}),r.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),r.jsxs("div",{className:"stat-card high",children:[r.jsx("span",{className:"stat-icon",children:"🟠"}),r.jsxs("div",{className:"stat-content",children:[r.jsx("span",{className:"stat-value",children:R.severityCounts.high}),r.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),I.length>0&&r.jsxs("div",{className:"attack-chain-visual",children:[r.jsx("h3",{children:t("correlation.attackChainTimeline")}),r.jsx("div",{className:"chain-bars",children:I.map((D,C)=>r.jsxs("div",{className:"chain-bar-item",children:[r.jsxs("div",{className:"chain-bar-header",children:[r.jsx("span",{className:"chain-icon",children:S(D.description)}),r.jsx("span",{className:"chain-name",children:D.rule_name}),r.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(D.severity)}})]}),r.jsx("div",{className:"chain-bar-track",children:r.jsx("span",{className:"chain-bar-fill",style:{width:`${D.event_count/R.totalEvents*100}%`,backgroundColor:y(D.severity)}})}),r.jsxs("div",{className:"chain-bar-meta",children:[r.jsxs("span",{className:"chain-events",children:[D.event_count," events"]}),r.jsx("span",{className:"chain-duration",children:z(D.start_time,D.end_time)})]})]},C))})]}),o.length>0&&r.jsxs("div",{className:"correlation-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("correlation.results")}),r.jsxs("span",{className:"results-count",children:[o.length," ",t("correlation.rulesTriggered")]})]}),r.jsx("div",{className:"results-grid",children:o.map((D,C)=>r.jsxs("div",{className:`correlation-card ${b===C?"expanded":""}`,onClick:()=>w(b===C?null:C),children:[r.jsxs("div",{className:"card-header",children:[r.jsxs("div",{className:"rule-info",children:[r.jsx("span",{className:"severity-badge",style:{backgroundColor:y(D.severity)},children:_(D.severity)}),r.jsx("h4",{children:D.rule_name})]}),r.jsxs("div",{className:"event-count",children:[r.jsx("span",{className:"count-value",children:D.event_count}),r.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),r.jsx("div",{className:"card-icon",children:S(D.description)}),r.jsx("p",{className:"rule-description",children:D.description}),r.jsxs("div",{className:"card-footer",children:[r.jsxs("div",{className:"time-info",children:[r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),r.jsx("span",{className:"time-value",children:A(D.start_time)})]}),r.jsxs("div",{className:"time-range",children:[r.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),r.jsx("span",{className:"time-value",children:A(D.end_time)})]})]}),r.jsxs("div",{className:"duration-badge",children:["⏱️ ",z(D.start_time,D.end_time)]})]}),b===C&&r.jsxs("div",{className:"card-expanded",children:[r.jsxs("div",{className:"expanded-section",children:[r.jsx("h5",{children:t("correlation.attackPattern")}),r.jsxs("div",{className:"pattern-visual",children:[r.jsx("span",{className:"pattern-icon",children:"🎯"}),r.jsx("span",{className:"pattern-text",children:D.rule_name}),r.jsx("span",{className:"pattern-arrow",children:"→"}),r.jsxs("span",{className:"pattern-target",children:[_(D.severity)," Risk"]})]})]}),r.jsxs("div",{className:"expanded-actions",children:[r.jsxs("button",{className:"action-btn",onClick:L=>{L.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"action-btn",onClick:L=>{L.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},C))})]}),r.jsxs("div",{className:"correlation-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("correlation.aboutCorrelation")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("correlation.aboutDesc")})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("correlation.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const Hm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function zk(){const{t}=ft(),e=Un(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState(""),[h,p]=E.useState("overview"),g=async()=>{var y,_;i(!0),u("");try{const S=await Tj.analyze();l(S.data)}catch(S){u(((_=(y=S.response)==null?void 0:y.data)==null?void 0:_.error)||"Failed to run multi-machine analysis")}finally{i(!1)}},v=y=>Hm[y.toLowerCase()]||Hm.info,b=y=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[y.toLowerCase()]||y,w=E.useMemo(()=>{if(!o||o.machines.length===0)return{nodes:[],edges:[]};const y=o.machines.map(S=>({id:S.id,name:S.name,ip:S.ip,role:S.role,suspicious:o.lateral_movement.some(A=>A.source_machine===S.name||A.target_machine===S.name)})),_=[];return o.lateral_movement.forEach(S=>{const A=y.find(R=>R.name===S.source_machine),z=y.find(R=>R.name===S.target_machine);A&&z&&_.push({from:A.id,to:z.id,user:S.user,severity:S.severity})}),{nodes:y,edges:_}},[o]),j=y=>{try{return new Date(y).toLocaleString()}catch{return y}},N=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return r.jsxs("div",{className:"multi-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("multi.title")}),r.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),r.jsx("div",{className:"multi-toolbar",children:r.jsx("button",{onClick:g,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:c})]}),o&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"analysis-summary",children:[r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.analysisId")}),r.jsx("p",{className:"analysis-id",children:o.analysis_id})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.machinesFound")}),r.jsx("p",{className:"summary-value",children:o.machines.length})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.suspiciousActivities")}),r.jsx("p",{className:"summary-value",style:{color:o.suspicious_count>0?"#dc2626":"#16a34a"},children:o.suspicious_count})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("h4",{children:t("multi.lateralMovements")}),r.jsx("p",{className:"summary-value",children:o.lateral_movement.length})]})]}),r.jsx("p",{className:"summary-text",children:o.summary}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),r.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),r.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&r.jsx("div",{className:"tab-content",children:o.machines.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"🖥️"}),r.jsx("h3",{children:t("multi.noMachines")}),r.jsx("p",{children:t("multi.noMachinesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"machine-graph",children:[r.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),r.jsxs("div",{className:"graph-container",children:[r.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,_)=>{const S=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return r.jsxs("div",{className:`graph-node ${S?"suspicious":""}`,style:{top:`${20+_%3*25}%`,left:`${20+_%4*20}%`},children:[r.jsx("span",{className:"node-icon",children:N(y.role)}),r.jsx("span",{className:"node-name",children:y.name}),r.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),S&&r.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),r.jsxs("div",{className:"graph-legend",children:[r.jsx("span",{className:"legend-item",children:"🖥️ Server"}),r.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),r.jsx("span",{className:"legend-item",children:"💻 Workstation"}),r.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),r.jsx("div",{className:"machines-grid",children:o.machines.map((y,_)=>{const S=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return r.jsxs("div",{className:`machine-card ${S?"alert":""}`,children:[r.jsxs("div",{className:"machine-header",children:[r.jsx("span",{className:"machine-icon",children:N(y.role)}),r.jsx("h4",{children:y.name}),S&&r.jsx("span",{className:"alert-badge",children:"⚠️"})]}),r.jsxs("div",{className:"machine-details",children:[r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"IP:"}),r.jsx("span",{className:"value",children:y.ip||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),r.jsx("span",{className:"value",children:y.domain||"N/A"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),r.jsx("span",{className:"value",children:y.role||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsx("span",{className:"label",children:"OS:"}),r.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),r.jsxs("div",{className:"detail-row",children:[r.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),r.jsx("span",{className:"value",children:j(y.last_seen)})]})]}),S&&r.jsx("div",{className:"machine-alert-indicator",children:r.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},_)})})]})}),h==="crossmachine"&&r.jsx("div",{className:"tab-content",children:o.cross_machine_activity.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noSuspiciousActivity")}),r.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):r.jsx("div",{className:"activity-list",children:o.cross_machine_activity.map((y,_)=>r.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[r.jsxs("div",{className:"activity-header",children:[r.jsxs("div",{className:"user-info",children:[r.jsx("span",{className:"user-icon",children:"👤"}),r.jsx("span",{className:"user-name",children:y.user})]}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:b(y.severity)})]}),r.jsxs("div",{className:"activity-body",children:[r.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",y.machine_count," ",t("multi.machines"),":"]}),r.jsx("div",{className:"machine-tags",children:y.machines.map((S,A)=>r.jsx("span",{className:"machine-tag",children:S},A))}),r.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",y.login_count]}),r.jsxs("div",{className:"recommendation",children:[r.jsx("span",{className:"rec-icon",children:"💡"}),r.jsx("span",{children:y.recommendation})]})]})]},_))})}),h==="lateral"&&r.jsx("div",{className:"tab-content",children:o.lateral_movement.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("multi.noLateralMovement")}),r.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"lateral-summary",children:r.jsxs("div",{className:"lateral-stat",children:[r.jsx("span",{className:"stat-icon",children:"🔄"}),r.jsxs("span",{className:"stat-text",children:[o.lateral_movement.length," lateral movements detected"]})]})}),r.jsx("div",{className:"lateral-table",children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("multi.time")}),r.jsx("th",{children:t("multi.source")}),r.jsx("th",{children:t("multi.target")}),r.jsx("th",{children:t("multi.user")}),r.jsx("th",{children:t("multi.event")}),r.jsx("th",{children:t("multi.description")}),r.jsx("th",{children:t("multi.severity")}),r.jsx("th",{children:"MITRE"})]})}),r.jsx("tbody",{children:o.lateral_movement.map((y,_)=>r.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[r.jsx("td",{className:"time-cell",children:j(y.timestamp)}),r.jsx("td",{className:"source-cell",children:r.jsx("span",{className:"machine-badge source",children:y.source_machine})}),r.jsx("td",{className:"target-cell",children:r.jsx("span",{className:"machine-badge target",children:y.target_machine})}),r.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),r.jsx("td",{className:"event-cell",children:y.event_id}),r.jsx("td",{className:"desc-cell",children:y.description}),r.jsx("td",{children:r.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:b(y.severity)})}),r.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((S,A)=>r.jsx("span",{className:"mitre-tag",children:S},A))})]},_))})]})})]})})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("multi.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function Ik(){const{t}=ft(),[e,n]=E.useState("SELECT * FROM events LIMIT 10"),[i,o]=E.useState(!1),[l,c]=E.useState(null),[u,h]=E.useState(""),[p,g]=E.useState([]),[v,b]=E.useState(!1),[w,j]=E.useState(""),N=E.useRef(null),y=async()=>{var L,V;if(!e.trim()){h(t("query.sqlRequired"));return}o(!0),h(""),c(null);const C=performance.now();try{const X=await Dj.execute({sql:e,limit:100}),F=((performance.now()-C)/1e3).toFixed(2);j(F),c(X.data),_(e,!0,X.data.count,F)}catch(X){const F=((performance.now()-C)/1e3).toFixed(2);h(((V=(L=X.response)==null?void 0:L.data)==null?void 0:V.error)||"Failed to execute query"),_(e,!1,0,F),_(e,!1,0)}finally{o(!1)}},_=(C,L,V,X)=>{const F={id:Date.now().toString(),sql:C,timestamp:new Date().toISOString(),success:L,rowCount:V,duration:X};g(G=>[F,...G.slice(0,49)])},S=C=>{n(C.sql),b(!1)},A=()=>{g([])},z=C=>{const L=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],V=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],X=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],F=[],G=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,W=C.match(G)||[];let oe=0;for(const U of W){const ie=U.toUpperCase();U.startsWith("'")&&U.endsWith("'")?F.push(r.jsx("span",{className:"sql-string",children:U},oe++)):U.startsWith('"')&&U.endsWith('"')?F.push(r.jsx("span",{className:"sql-string",children:U},oe++)):X.includes(U)?F.push(r.jsx("span",{className:"sql-operator",children:U},oe++)):V.includes(ie)?F.push(r.jsx("span",{className:"sql-function",children:U},oe++)):L.includes(ie)?F.push(r.jsx("span",{className:"sql-keyword",children:U},oe++)):/^\d+$/.test(U)?F.push(r.jsx("span",{className:"sql-number",children:U},oe++)):F.push(r.jsx("span",{className:"sql-identifier",children:U},oe++))}return r.jsx(r.Fragment,{children:F})},R=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],I=C=>{C.key==="Enter"&&(C.ctrlKey||C.metaKey)&&(C.preventDefault(),y())},D=C=>{if(!l)return;let L,V,X;if(C==="json")L=JSON.stringify(l,null,2),V="query_result.json",X="application/json";else{const oe=l.columns.join(","),U=l.rows.map(ie=>l.columns.map(K=>{const re=ie[K];if(re==null)return"";const J=String(re);return J.includes(",")||J.includes('"')?`"${J.replace(/"/g,'""')}"`:J}).join(",")).join(`
`);L=oe+`
`+U,V="query_result.csv",X="text/csv"}const F=new Blob([L],{type:X}),G=URL.createObjectURL(F),W=document.createElement("a");W.href=G,W.download=V,W.click(),URL.revokeObjectURL(G)};return r.jsxs("div",{className:"query-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("query.title")}),r.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),r.jsxs("div",{className:"query-toolbar",children:[r.jsxs("div",{className:"preset-queries",children:[r.jsx("label",{children:t("query.presets")}),r.jsx("div",{className:"preset-buttons",children:R.map((C,L)=>r.jsx("button",{className:"preset-btn",onClick:()=>n(C.sql),title:C.sql,children:C.label},L))})]}),r.jsx("div",{className:"toolbar-right",children:r.jsxs("button",{className:"history-btn",onClick:()=>b(!v),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),v&&r.jsxs("div",{className:"query-history-panel",children:[r.jsxs("div",{className:"history-header",children:[r.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),r.jsx("button",{className:"clear-btn",onClick:A,children:"🗑️ Clear"})]}),r.jsx("div",{className:"history-list",children:p.length===0?r.jsx("p",{className:"empty-history",children:"No query history"}):p.map(C=>r.jsxs("div",{className:`history-item ${C.success?"success":"error"}`,onClick:()=>S(C),children:[r.jsx("div",{className:"history-sql",children:C.sql}),r.jsxs("div",{className:"history-meta",children:[r.jsx("span",{className:"history-status",children:C.success?"✓":"✗"}),r.jsxs("span",{className:"history-rows",children:[C.rowCount," rows"]}),C.duration&&r.jsxs("span",{className:"history-duration",children:[C.duration,"s"]}),r.jsx("span",{className:"history-time",children:new Date(C.timestamp).toLocaleTimeString()})]})]},C.id))})]}),r.jsxs("div",{className:"query-editor",children:[r.jsxs("div",{className:"editor-header",children:[r.jsx("label",{children:t("query.sqlQuery")}),r.jsx("div",{className:"editor-actions",children:r.jsx("button",{className:"format-btn",onClick:()=>{const C=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();n(C)},children:"🎨 Format"})})]}),r.jsxs("div",{className:"editor-wrapper",children:[r.jsx("div",{className:"sql-highlight",children:z(e)}),r.jsx("textarea",{ref:N,className:"sql-input",value:e,onChange:C=>n(C.target.value),onKeyDown:I,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),r.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),r.jsxs("div",{className:"query-actions",children:[r.jsx("button",{onClick:y,disabled:i,className:"btn-primary",children:i?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):r.jsxs(r.Fragment,{children:[r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:r.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),l&&r.jsxs("div",{className:"result-actions",children:[r.jsx("button",{className:"export-btn",onClick:()=>D("json"),children:"📥 JSON"}),r.jsx("button",{className:"export-btn",onClick:()=>D("csv"),children:"📥 CSV"})]})]}),u&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:u})]}),l&&r.jsxs("div",{className:"query-results",children:[r.jsxs("div",{className:"results-header",children:[r.jsx("h3",{children:t("query.results")}),r.jsxs("div",{className:"results-meta",children:[r.jsxs("span",{className:"results-count",children:[l.count," ",t("query.rowsReturned")]}),w&&r.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),l.columns.length>0&&l.rows.length>0?r.jsx("div",{className:"results-table-wrapper",children:r.jsxs("table",{className:"results-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"row-num",children:"#"}),l.columns.map((C,L)=>r.jsx("th",{children:C},L))]})}),r.jsx("tbody",{children:l.rows.map((C,L)=>r.jsxs("tr",{children:[r.jsx("td",{className:"row-num",children:L+1}),l.columns.map((V,X)=>r.jsx("td",{className:C[V]===null?"null-value":"",children:Fk(C[V])},X))]},L))})]})}):r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📭"}),r.jsx("h3",{children:t("query.noResults")}),r.jsx("p",{children:t("query.noResultsDesc")})]})]}),r.jsxs("div",{className:"query-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("query.aboutQuery")})}),r.jsxs("div",{className:"info-content",children:[r.jsx("p",{children:t("query.aboutDesc")}),r.jsxs("div",{className:"example-queries",children:[r.jsx("h4",{children:t("query.exampleQueries")}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),r.jsx("p",{children:t("query.example1Desc")})]}),r.jsxs("div",{className:"example-item",children:[r.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),r.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function Fk(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const Bk={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},$k={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Uk(){const{t}=ft(),e=Un(),[n,i]=E.useState(!1),[o,l]=E.useState(null),[c,u]=E.useState([]),[h,p]=E.useState("analyze"),[g,v]=E.useState(24),[b,w]=E.useState(""),[j,N]=E.useState(null),y=async()=>{var C,L;i(!0),w("");try{const V=await Np.analyze({hours:g});l(V.data)}catch(V){w(((L=(C=V.response)==null?void 0:C.data)==null?void 0:L.error)||"Failed to run UEBA analysis")}finally{i(!1)}},_=async()=>{i(!0),w("");try{const X=((await Np.profiles()).data.profiles||[]).map(F=>({...F,risk_score:Math.random()*100}));u(X)}catch(C){w(C.message||"Failed to load profiles")}finally{i(!1)}},S=C=>Bk[C.toLowerCase()]||"#2563eb",A=C=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[C.toLowerCase()]||C,z=C=>$k[C]||{icon:"⚠️",color:"#2563eb",description:C},R=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],I=E.useMemo(()=>{if(!o)return null;const C=o.total_anomaly||1,L=o.high_risk_count/C,V=o.medium_risk_count/C,X=1-L-V;return{high:{value:o.high_risk_count,percentage:L*100},medium:{value:o.medium_risk_count,percentage:V*100},low:{value:C-o.high_risk_count-o.medium_risk_count,percentage:X*100}}},[o]),D=C=>{try{return new Date(C).toLocaleString()}catch{return C}};return r.jsxs("div",{className:"ueba-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("ueba.title")}),r.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),r.jsxs("div",{className:"tabs",children:[r.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),r.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),_()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"ueba-toolbar",children:[r.jsxs("div",{className:"toolbar-section",children:[r.jsx("label",{children:t("ueba.timeWindow")}),r.jsx("div",{className:"time-selector",children:R.map(C=>r.jsx("button",{className:g===C.value?"active":"",onClick:()=>v(C.value),children:C.label},C.value))})]}),r.jsx("button",{onClick:y,disabled:n,className:"btn-primary",children:n?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("circle",{cx:"11",cy:"11",r:"8"}),r.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),b&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:b})]}),o&&r.jsxs("div",{className:"ueba-results",children:[r.jsxs("div",{className:"results-summary",children:[r.jsxs("div",{className:"summary-card large",children:[r.jsx("div",{className:"summary-icon",children:"📊"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.totalAnomalies")}),r.jsx("p",{className:"summary-value",children:o.total_anomaly}),r.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:g})})]})]}),I&&r.jsxs("div",{className:"risk-gauge-card",children:[r.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),r.jsxs("div",{className:"risk-gauge",children:[r.jsxs("div",{className:"gauge-bar",children:[r.jsx("div",{className:"gauge-segment critical",style:{width:`${I.high.percentage}%`}}),r.jsx("div",{className:"gauge-segment warning",style:{width:`${I.medium.percentage}%`}}),r.jsx("div",{className:"gauge-segment low",style:{width:`${I.low.percentage}%`}})]}),r.jsxs("div",{className:"gauge-legend",children:[r.jsxs("span",{className:"legend-item critical",children:["🔴 ",I.high.value," ",t("severity.critical")||"Critical"]}),r.jsxs("span",{className:"legend-item warning",children:["🟠 ",I.medium.value," ",t("severity.medium")||"Medium"]}),r.jsxs("span",{className:"legend-item low",children:["🟢 ",I.low.value," ",t("severity.low")||"Low"]})]})]})]}),r.jsxs("div",{className:"summary-card",children:[r.jsx("div",{className:"summary-icon",children:"⏱️"}),r.jsxs("div",{className:"summary-content",children:[r.jsx("h4",{children:t("ueba.duration")}),r.jsx("p",{className:"summary-value small",children:o.duration})]})]})]}),o.anomalies.length===0?r.jsxs("div",{className:"empty-state success",children:[r.jsx("div",{className:"empty-icon",children:"✅"}),r.jsx("h3",{children:t("ueba.noAnomalies")}),r.jsx("p",{children:t("ueba.noAnomaliesDesc")}),r.jsx("div",{className:"empty-hint",children:r.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):r.jsxs("div",{className:"anomalies-list",children:[r.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",o.anomalies.length,")"]}),r.jsx("div",{className:"anomaly-timeline",children:o.anomalies.map((C,L)=>{const V=z(C.type);return r.jsxs("div",{className:`anomaly-item ${j===L?"expanded":""}`,onClick:()=>N(j===L?null:L),children:[r.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:V.color}}),r.jsx("div",{className:"anomaly-icon",children:V.icon}),r.jsxs("div",{className:"anomaly-content",children:[r.jsxs("div",{className:"anomaly-header",children:[r.jsx("span",{className:"anomaly-type",children:C.type.replace(/_/g," ")}),r.jsx("span",{className:"severity-badge",style:{backgroundColor:S(C.severity)},children:A(C.severity)})]}),C.user&&r.jsxs("div",{className:"anomaly-user",children:["👤 ",r.jsx("span",{children:C.user})]}),r.jsx("p",{className:"anomaly-description",children:C.description}),r.jsxs("div",{className:"anomaly-meta",children:[r.jsxs("span",{className:"anomaly-score",children:["Score: ",r.jsx("strong",{children:C.score.toFixed(2)})]}),C.event_ids&&C.event_ids.length>0&&r.jsxs("span",{className:"anomaly-events",children:[C.event_ids.length," related events"]})]})]}),j===L&&r.jsxs("div",{className:"anomaly-expanded",children:[C.details&&Object.keys(C.details).length>0&&r.jsxs("div",{className:"anomaly-details-section",children:[r.jsx("h5",{children:t("ueba.details")}),r.jsx("div",{className:"details-grid",children:Object.entries(C.details).map(([X,F])=>r.jsxs("div",{className:"detail-item",children:[r.jsxs("span",{className:"detail-key",children:[X,":"]}),r.jsx("span",{className:"detail-value",children:String(F)})]},X))})]}),r.jsxs("div",{className:"anomaly-actions",children:[r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/events",{state:{user:C.user}})},children:"📊 View Events"}),r.jsx("button",{className:"action-btn",onClick:X=>{X.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},L)})})]})]})]}),h==="profiles"&&r.jsxs("div",{className:"tab-content",children:[r.jsxs("div",{className:"profiles-header",children:[r.jsx("h3",{children:t("ueba.userProfiles")}),r.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),n?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"btn-spinner"}),r.jsx("span",{children:"Loading profiles..."})]}):c.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"👥"}),r.jsx("h3",{children:t("ueba.noProfiles")}),r.jsx("p",{children:t("ueba.noProfilesDesc")}),r.jsxs("div",{className:"empty-hint",children:[r.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),r.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):r.jsx("div",{className:"profiles-grid",children:c.map((C,L)=>r.jsxs("div",{className:"profile-card",children:[r.jsxs("div",{className:"profile-header",children:[r.jsx("div",{className:"profile-avatar",children:r.jsx("span",{className:"avatar-icon",children:"👤"})}),r.jsxs("div",{className:"profile-info",children:[r.jsx("h4",{children:C.user}),r.jsxs("p",{className:"profile-meta",children:["Last updated: ",D(C.last_updated)]})]}),C.risk_score!==void 0&&r.jsx("div",{className:`risk-indicator ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,children:C.risk_score.toFixed(0)})]}),r.jsxs("div",{className:"profile-stats",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),r.jsx("span",{className:"stat-value",children:C.login_count})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),r.jsx("span",{className:"stat-value",children:C.avg_events_per_day.toFixed(1)})]})]}),C.risk_score!==void 0&&r.jsxs("div",{className:"profile-risk-bar",children:[r.jsx("div",{className:"risk-bar-track",children:r.jsx("div",{className:`risk-bar-fill ${C.risk_score>70?"high":C.risk_score>30?"medium":"low"}`,style:{width:`${C.risk_score}%`}})}),r.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},L))})]}),r.jsxs("div",{className:"quick-actions",children:[r.jsx("h4",{children:t("ueba.quickActions")}),r.jsxs("div",{className:"quick-buttons",children:[r.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),r.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}function Wk(){const{t}=ft(),[e,n]=E.useState([]),[i,o]=E.useState(!1),[l,c]=E.useState(""),[u,h]=E.useState(!1),[p,g]=E.useState({name:"",duration:60,scope:"global",expires_at:""});E.useEffect(()=>{v()},[]);const v=async()=>{o(!0),c("");try{const S=(await co.list()).data;n(S.rules||[])}catch(_){c(_.message||"Failed to load suppress rules")}finally{o(!1)}},b=async()=>{o(!0),c("");try{await co.create({name:p.name,duration:p.duration,scope:p.scope,expires_at:p.expires_at,conditions:[],enabled:!0}),h(!1),g({name:"",duration:60,scope:"global",expires_at:""}),v()}catch(_){c(_.message||"Failed to create rule")}finally{o(!1)}},w=async _=>{if(confirm(t("suppress.confirmDelete"))){o(!0),c("");try{await co.delete(_),v()}catch(S){c(S.message||"Failed to delete rule")}finally{o(!1)}}},j=async(_,S)=>{o(!0),c("");try{await co.toggle(_,!S),v()}catch(A){c(A.message||"Failed to toggle rule")}finally{o(!1)}},N=_=>({global:t("suppress.scopeGlobal"),user:t("suppress.scopeUser"),computer:t("suppress.scopeComputer")})[_]||_,y=_=>_<60?`${_}m`:_<1440?`${Math.floor(_/60)}h`:`${Math.floor(_/1440)}d`;return r.jsxs("div",{className:"suppress-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsx("h2",{children:t("suppress.title")}),r.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),r.jsx("div",{className:"suppress-toolbar",children:r.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),l&&r.jsxs("div",{className:"error-panel",children:[r.jsx("span",{className:"error-icon",children:"⚠️"}),r.jsx("span",{children:l})]}),i&&e.length===0?r.jsxs("div",{className:"loading-state",children:[r.jsx("span",{className:"spinner"}),r.jsx("span",{children:t("common.loading")})]}):e.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📋"}),r.jsx("h3",{children:t("suppress.noRules")}),r.jsx("p",{children:t("suppress.noRulesDesc")})]}):r.jsx("div",{className:"rules-list",children:r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:t("suppress.name")}),r.jsx("th",{children:t("suppress.scope")}),r.jsx("th",{children:t("suppress.duration")}),r.jsx("th",{children:t("suppress.expiresAt")}),r.jsx("th",{children:t("suppress.status")}),r.jsx("th",{children:t("suppress.actions")})]})}),r.jsx("tbody",{children:e.map(_=>r.jsxs("tr",{className:_.enabled?"":"disabled",children:[r.jsx("td",{className:"name-cell",children:r.jsx("span",{className:"rule-name",children:_.name})}),r.jsx("td",{children:r.jsx("span",{className:"scope-badge",children:N(_.scope)})}),r.jsx("td",{children:y(_.duration)}),r.jsx("td",{children:_.expires_at?new Date(_.expires_at).toLocaleString():"-"}),r.jsx("td",{children:r.jsx("button",{className:`toggle-btn ${_.enabled?"enabled":"disabled"}`,onClick:()=>j(_.id,_.enabled),children:_.enabled?t("suppress.enabled"):t("suppress.disabled")})}),r.jsx("td",{children:r.jsx("div",{className:"action-buttons",children:r.jsx("button",{className:"btn-icon delete",onClick:()=>w(_.id),title:t("suppress.delete"),children:"🗑️"})})})]},_.id))})]})}),u&&r.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:r.jsxs("div",{className:"modal",onClick:_=>_.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("h3",{children:t("suppress.addRule")}),r.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"✕"})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.name")}),r.jsx("input",{type:"text",value:p.name,onChange:_=>g({...p,name:_.target.value}),placeholder:t("suppress.namePlaceholder")})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.scope")}),r.jsxs("select",{value:p.scope,onChange:_=>g({...p,scope:_.target.value}),children:[r.jsx("option",{value:"global",children:t("suppress.scopeGlobal")}),r.jsx("option",{value:"user",children:t("suppress.scopeUser")}),r.jsx("option",{value:"computer",children:t("suppress.scopeComputer")})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.duration")}),r.jsxs("select",{value:p.duration,onChange:_=>g({...p,duration:parseInt(_.target.value)}),children:[r.jsx("option",{value:"60",children:"1 hour"}),r.jsx("option",{value:"360",children:"6 hours"}),r.jsx("option",{value:"1440",children:"24 hours"}),r.jsx("option",{value:"10080",children:"7 days"}),r.jsx("option",{value:"43200",children:"30 days"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{children:t("suppress.expiresAt")}),r.jsx("input",{type:"datetime-local",value:p.expires_at,onChange:_=>g({...p,expires_at:_.target.value})})]})]}),r.jsxs("div",{className:"modal-footer",children:[r.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),r.jsx("button",{className:"btn-primary",onClick:b,disabled:!p.name||i,children:t("suppress.create")})]})]})}),r.jsxs("div",{className:"suppress-info",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("suppress.about")})}),r.jsx("div",{className:"info-content",children:r.jsx("p",{children:t("suppress.aboutDesc")})})]})]})}function Hk(){var z,R;const{t}=ft(),[e,n]=E.useState([]),[i,o]=E.useState(null),[l,c]=E.useState(!1),[u,h]=E.useState(null),[p,g]=E.useState("all"),v=E.useRef(null),b=E.useRef(null);E.useEffect(()=>(w(),()=>{v.current&&v.current.close()}),[]),E.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[e]);const w=()=>{h(null);const I=Ej.streamEvents(D=>{n(C=>{const L=[D,...C];return L.length>100&&L.pop(),L})},D=>{o({total_events:D.total_events||0,events_per_sec:D.events_per_sec||0,uptime:D.uptime||"0s",alerts:D.alerts||0})},D=>{console.error("Stream error:",D),c(!1),D.type==="error"&&h("Connection lost. Reconnecting...")});I.onopen=()=>{c(!0),h(null)},v.current=I},j=()=>{v.current&&(v.current.close(),v.current=null),c(!1)},N=()=>{j(),w()},y=()=>{n([])},_=I=>{switch(I==null?void 0:I.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},S=e.filter(I=>{var D;return p==="all"?!0:((D=I.level)==null?void 0:D.toLowerCase())===p}),A=I=>{try{return new Date(I).toLocaleTimeString()}catch{return I}};return r.jsxs("div",{className:"live-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx("h2",{children:t("live.title")}),r.jsxs("div",{className:`connection-status ${l?"connected":"disconnected"}`,children:[r.jsx("span",{className:"status-dot"}),l?"Connected":"Disconnected"]})]}),r.jsxs("div",{className:"header-actions",children:[r.jsxs("select",{className:"filter-select",value:p,onChange:I=>g(I.target.value),children:[r.jsx("option",{value:"all",children:"All Levels"}),r.jsx("option",{value:"critical",children:"Critical"}),r.jsx("option",{value:"error",children:"Error"}),r.jsx("option",{value:"warning",children:"Warning"}),r.jsx("option",{value:"info",children:"Info"}),r.jsx("option",{value:"verbose",children:"Verbose"})]}),r.jsx("button",{className:"btn-secondary",onClick:y,children:"Clear"}),l?r.jsx("button",{className:"btn-danger",onClick:j,children:"Disconnect"}):r.jsx("button",{className:"btn-primary",onClick:N,children:"Connect"})]})]}),u&&r.jsx("div",{className:"error-banner",children:u}),r.jsxs("div",{className:"stats-bar",children:[r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Total Events"}),r.jsx("span",{className:"stat-value",children:((z=i==null?void 0:i.total_events)==null?void 0:z.toLocaleString())||"0"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Events/sec"}),r.jsx("span",{className:"stat-value",children:((R=i==null?void 0:i.events_per_sec)==null?void 0:R.toFixed(2))||"0.00"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Alerts"}),r.jsx("span",{className:"stat-value alerts",children:(i==null?void 0:i.alerts)||0})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Uptime"}),r.jsx("span",{className:"stat-value mono",children:(i==null?void 0:i.uptime)||"0s"})]}),r.jsxs("div",{className:"stat-item",children:[r.jsx("span",{className:"stat-label",children:"Buffered"}),r.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),r.jsx("div",{className:"events-container",ref:b,children:S.length===0?r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-icon",children:"📡"}),r.jsx("div",{className:"empty-text",children:l?"Waiting for events...":"Click Connect to start monitoring"})]}):r.jsx("div",{className:"events-list",children:S.map((I,D)=>r.jsxs("div",{className:"event-card",style:{borderLeftColor:_(I.level)},children:[r.jsxs("div",{className:"event-header",children:[r.jsx("span",{className:"event-time",children:A(I.timestamp)}),r.jsx("span",{className:"event-level",style:{color:_(I.level)},children:I.level||"UNKNOWN"}),r.jsxs("span",{className:"event-id",children:["Event #",I.event_id]}),r.jsx("span",{className:"event-source",children:I.source||I.log_name})]}),r.jsx("div",{className:"event-body",children:r.jsx("div",{className:"event-message",children:I.message||"(No message)"})}),r.jsxs("div",{className:"event-footer",children:[r.jsx("span",{className:"event-computer",children:I.computer}),I.user&&r.jsx("span",{className:"event-user",children:I.user}),I.ip_address&&r.jsx("span",{className:"event-ip",children:I.ip_address})]})]},`${I.id}-${D}`))})}),r.jsx("style",{children:`
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
      `})]})}function Vk(){const{t}=ft(),[e,n]=E.useState(!1),[i,o]=E.useState(""),[l,c]=E.useState(2),[u,h]=E.useState(""),[p,g]=E.useState(""),[v,b]=E.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[w,j]=E.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[N,y]=E.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,compress:!0,calculateHash:!0}),_=C=>{b(L=>L.map(V=>V.id===C?{...V,enabled:!V.enabled}:V))},S=C=>{j(L=>L.map(V=>V.id===C?{...V,enabled:!V.enabled}:V))},A=C=>{y(L=>({...L,[C]:!L[C]}))},z=async()=>{n(!0),o(t("collect.starting"));const C=v.filter(L=>L.enabled).map(L=>L.name);try{const L=await Sj.collect({sources:C,options:{compress:N.compress,calculate_hash:N.calculateHash}});L.data.status==="completed"?o(`${t("collect.completed")}
${L.data.output_path}
Duration: ${L.data.duration}`):L.data.status==="error"?o(`${t("collect.failed")}: ${L.data.message}`):o(`${t("collect.collecting")}...
${t("collect.sources")}: ${C.join(", ")}`)}catch(L){o(`${t("collect.failed")}: ${L instanceof Error?L.message:"Unknown error"}`)}n(!1)},R=async()=>{var C;n(!0),o(t("collect.importing"));try{const L=u.split(`
`).map(X=>X.trim()).filter(X=>X.length>0);if(L.length===0){o(t("collect.noFilesSelected")),n(!1);return}const V=await Cj.importLogs(L);V.data.success?o(`${t("collect.importDone")}
Imported: ${V.data.files_imported}
Failed: ${V.data.files_failed}
Events: ${V.data.events_imported}`):o(`${t("collect.failed")}: ${((C=V.data.errors)==null?void 0:C.join(", "))||"Unknown error"}`)}catch(L){o(`${t("collect.failed")}: ${L instanceof Error?L.message:"Unknown error"}`)}n(!1)},I=v.reduce((C,L)=>(C[L.category]||(C[L.category]=[]),C[L.category].push(L),C),{}),D=w.reduce((C,L)=>(C[L.category]||(C[L.category]=[]),C[L.category].push(L),C),{});return r.jsxs("div",{className:"collect-page",children:[r.jsx("div",{className:"page-header",children:r.jsx("h2",{children:t("collect.title")})}),r.jsxs("div",{className:"collect-grid",children:[r.jsxs("div",{className:"collect-section main-options",children:[r.jsxs("div",{className:"section-header",children:[r.jsx("h3",{children:t("collect.oneClickCollection")}),r.jsx("p",{children:t("collect.oneClickDesc")})]}),r.jsxs("div",{className:"options-group",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeSystemInfo,onChange:()=>A("includeSystemInfo")}),r.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.includeLogs,onChange:()=>A("includeLogs")}),r.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),r.jsxs("div",{className:"performance-section",children:[r.jsx("h4",{children:t("collect.performanceSettings")}),r.jsxs("div",{className:"performance-grid",children:[r.jsxs("div",{className:"performance-item",children:[r.jsx("label",{children:t("collect.threads")}),r.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(C=>r.jsx("button",{className:l===C?"active":"",onClick:()=>c(C),children:C},C))})]}),r.jsxs("div",{className:"performance-hint",children:[r.jsx("span",{className:"hint-icon",children:"💡"}),r.jsx("span",{children:t("collect.threadHint")})]})]})]}),r.jsxs("div",{className:"compression-options",children:[r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.compress,onChange:()=>A("compress")}),r.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),r.jsxs("label",{className:"toggle-label",children:[r.jsx("input",{type:"checkbox",checked:N.calculateHash,onChange:()=>A("calculateHash")}),r.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),r.jsxs("div",{className:"action-buttons",children:[r.jsx("button",{onClick:z,disabled:e,className:"btn-primary btn-collect",children:e?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[r.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),r.jsx("polyline",{points:"7 10 12 15 17 10"}),r.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),r.jsx("button",{onClick:R,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[r.jsx("h3",{children:t("collect.logSources")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(I).map(([C,L])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:C}),L.map(V=>r.jsxs("label",{className:"checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:V.enabled,onChange:()=>_(V.id)}),r.jsx("span",{className:"checkbox-text",children:V.name})]},V.id))]},C))]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.excludedLogs")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(D).map(([C,L])=>r.jsxs("div",{className:"log-group",children:[r.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),L.map(V=>r.jsxs("label",{className:"checkbox-label exclude",children:[r.jsx("input",{type:"checkbox",checked:V.enabled,onChange:()=>S(V.id)}),r.jsx("span",{className:"checkbox-text",children:V.name})]},V.id))]},C)),r.jsxs("div",{className:"custom-exclude",children:[r.jsx("label",{children:t("collect.customExclude")}),r.jsx("input",{type:"text",value:p,onChange:C=>g(C.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),r.jsxs("div",{className:"collect-section",children:[r.jsxs("div",{className:"section-header collapsible",children:[r.jsx("h3",{children:t("collect.customPaths")}),r.jsx("span",{className:"collapse-icon",children:"▼"})]}),r.jsxs("div",{className:"custom-path-section",children:[r.jsx("label",{children:t("collect.customPathsLabel")}),r.jsx("textarea",{value:u,onChange:C=>h(C.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),r.jsxs("div",{className:"additional-options",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.additionalArtifacts")})}),r.jsxs("div",{className:"artifacts-grid",children:[r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includePrefetch,onChange:()=>A("includePrefetch")}),r.jsx("div",{className:"artifact-icon",children:"📁"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),r.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeShimcache,onChange:()=>A("includeShimcache")}),r.jsx("div",{className:"artifact-icon",children:"🔧"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeAmcache,onChange:()=>A("includeAmcache")}),r.jsx("div",{className:"artifact-icon",children:"📝"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),r.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeUserassist,onChange:()=>A("includeUserassist")}),r.jsx("div",{className:"artifact-icon",children:"🎯"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),r.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeRegistry,onChange:()=>A("includeRegistry")}),r.jsx("div",{className:"artifact-icon",children:"🗄️"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.registry")}),r.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),r.jsxs("label",{className:"artifact-card",children:[r.jsx("input",{type:"checkbox",checked:N.includeTasks,onChange:()=>A("includeTasks")}),r.jsx("div",{className:"artifact-icon",children:"📅"}),r.jsxs("div",{className:"artifact-info",children:[r.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),r.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),i&&r.jsxs("div",{className:"status-panel",children:[r.jsxs("div",{className:"status-header",children:[r.jsx("span",{className:"status-icon",children:"📊"}),r.jsx("span",{children:t("collect.status")}),r.jsx("button",{className:"status-close",onClick:()=>o(""),children:"×"})]}),r.jsx("pre",{className:"status-content",children:i})]}),r.jsxs("div",{className:"cli-reference",children:[r.jsx("div",{className:"section-header",children:r.jsx("h3",{children:t("collect.cliReference")})}),r.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${l}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function qk(){const{t}=ft();return r.jsxs("nav",{className:"sidebar",children:[r.jsx("h1",{children:t("app.title")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(tt,{to:"/",children:t("nav.dashboard")})}),r.jsx("li",{children:r.jsx(tt,{to:"/events",children:t("nav.events")})}),r.jsx("li",{children:r.jsx(tt,{to:"/alerts",children:t("nav.alerts")})}),r.jsx("li",{children:r.jsx(tt,{to:"/timeline",children:t("nav.timeline")})}),r.jsx("li",{children:r.jsx(tt,{to:"/collect",children:t("nav.collect")})}),r.jsx("li",{children:r.jsx(tt,{to:"/analyze",children:t("nav.analyze")})}),r.jsx("li",{children:r.jsx(tt,{to:"/correlation",children:t("nav.correlation")})}),r.jsx("li",{children:r.jsx(tt,{to:"/multi",children:t("nav.multi")})}),r.jsx("li",{children:r.jsx(tt,{to:"/query",children:t("nav.query")})}),r.jsx("li",{children:r.jsx(tt,{to:"/ueba",children:t("nav.ueba")})}),r.jsx("li",{children:r.jsx(tt,{to:"/suppress",children:t("nav.suppress")})}),r.jsx("li",{children:r.jsx(tt,{to:"/live",children:t("nav.live")})}),r.jsx("li",{children:r.jsx(tt,{to:"/persistence",children:t("nav.persistence")})}),r.jsx("li",{children:r.jsx(tt,{to:"/reports",children:t("nav.reports")})}),r.jsx("li",{children:r.jsx(tt,{to:"/forensics",children:t("nav.forensics")})}),r.jsx("li",{children:r.jsx(tt,{to:"/system-info",children:t("nav.systemInfo")})}),r.jsx("li",{children:r.jsx(tt,{to:"/rules",children:t("nav.rules")})}),r.jsx("li",{children:r.jsx(tt,{to:"/metrics",children:t("nav.metrics")})}),r.jsx("li",{children:r.jsx(tt,{to:"/settings",children:t("nav.settings")})})]})]})}function Yk(){return r.jsxs(r.Fragment,{children:[r.jsx(V0,{}),r.jsx(qk,{}),r.jsx("main",{className:"content",children:r.jsxs(R0,{children:[r.jsx(Ge,{path:"/",element:r.jsx(xk,{})}),r.jsx(Ge,{path:"/events",element:r.jsx(vk,{})}),r.jsx(Ge,{path:"/events/:id",element:r.jsx(bk,{})}),r.jsx(Ge,{path:"/alerts",element:r.jsx(jk,{})}),r.jsx(Ge,{path:"/alerts/:id",element:r.jsx(wk,{})}),r.jsx(Ge,{path:"/timeline",element:r.jsx(Nk,{})}),r.jsx(Ge,{path:"/collect",element:r.jsx(Vk,{})}),r.jsx(Ge,{path:"/analyze",element:r.jsx(Mk,{})}),r.jsx(Ge,{path:"/correlation",element:r.jsx(Ok,{})}),r.jsx(Ge,{path:"/multi",element:r.jsx(zk,{})}),r.jsx(Ge,{path:"/query",element:r.jsx(Ik,{})}),r.jsx(Ge,{path:"/ueba",element:r.jsx(Uk,{})}),r.jsx(Ge,{path:"/suppress",element:r.jsx(Wk,{})}),r.jsx(Ge,{path:"/live",element:r.jsx(Hk,{})}),r.jsx(Ge,{path:"/persistence",element:r.jsx(Pk,{})}),r.jsx(Ge,{path:"/reports",element:r.jsx(_k,{})}),r.jsx(Ge,{path:"/forensics",element:r.jsx(kk,{})}),r.jsx(Ge,{path:"/system-info",element:r.jsx(Sk,{})}),r.jsx(Ge,{path:"/rules",element:r.jsx(Ck,{})}),r.jsx(Ge,{path:"/settings",element:r.jsx(Ek,{})}),r.jsx(Ge,{path:"/metrics",element:r.jsx(Rk,{})})]})})]})}function Qk(){return r.jsx(H0,{children:r.jsx("div",{className:"app",children:r.jsx(Yk,{})})})}zy.createRoot(document.getElementById("root")).render(r.jsx(qm.StrictMode,{children:r.jsx(O0,{children:r.jsx(Qk,{})})}));
