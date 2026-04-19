var Ry=Object.defineProperty;var Py=(t,e,s)=>e in t?Ry(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var xe=(t,e,s)=>Py(t,typeof e!="symbol"?e+"":e,s);function Dy(t,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();function Xm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gc={exports:{}},Rr={},Jc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Ay(){if(Hf)return Se;Hf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function N(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function y(z,G,ce){this.props=z,this.context=G,this.refs=j,this.updater=ce||w}y.prototype.isReactComponent={},y.prototype.setState=function(z,G){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,G,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function _(){}_.prototype=y.prototype;function E(z,G,ce){this.props=z,this.context=G,this.refs=j,this.updater=ce||w}var A=E.prototype=new _;A.constructor=E,b(A,y.prototype),A.isPureReactComponent=!0;var U=Array.isArray,P=Object.prototype.hasOwnProperty,q={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(z,G,ce){var fe,ye={},be=null,Re=null;if(G!=null)for(fe in G.ref!==void 0&&(Re=G.ref),G.key!==void 0&&(be=""+G.key),G)P.call(G,fe)&&!O.hasOwnProperty(fe)&&(ye[fe]=G[fe]);var Ce=arguments.length-2;if(Ce===1)ye.children=ce;else if(1<Ce){for(var Me=Array(Ce),He=0;He<Ce;He++)Me[He]=arguments[He+2];ye.children=Me}if(z&&z.defaultProps)for(fe in Ce=z.defaultProps,Ce)ye[fe]===void 0&&(ye[fe]=Ce[fe]);return{$$typeof:t,type:z,key:be,ref:Re,props:ye,_owner:q.current}}function L(z,G){return{$$typeof:t,type:z.type,key:G,ref:z.ref,props:z.props,_owner:z._owner}}function B(z){return typeof z=="object"&&z!==null&&z.$$typeof===t}function M(z){var G={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ce){return G[ce]})}var C=/\/+/g;function I(z,G){return typeof z=="object"&&z!==null&&z.key!=null?M(""+z.key):G.toString(36)}function W(z,G,ce,fe,ye){var be=typeof z;(be==="undefined"||be==="boolean")&&(z=null);var Re=!1;if(z===null)Re=!0;else switch(be){case"string":case"number":Re=!0;break;case"object":switch(z.$$typeof){case t:case e:Re=!0}}if(Re)return Re=z,ye=ye(Re),z=fe===""?"."+I(Re,0):fe,U(ye)?(ce="",z!=null&&(ce=z.replace(C,"$&/")+"/"),W(ye,G,ce,"",function(He){return He})):ye!=null&&(B(ye)&&(ye=L(ye,ce+(!ye.key||Re&&Re.key===ye.key?"":(""+ye.key).replace(C,"$&/")+"/")+z)),G.push(ye)),1;if(Re=0,fe=fe===""?".":fe+":",U(z))for(var Ce=0;Ce<z.length;Ce++){be=z[Ce];var Me=fe+I(be,Ce);Re+=W(be,G,ce,Me,ye)}else if(Me=N(z),typeof Me=="function")for(z=Me.call(z),Ce=0;!(be=z.next()).done;)be=be.value,Me=fe+I(be,Ce++),Re+=W(be,G,ce,Me,ye);else if(be==="object")throw G=String(z),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Re}function ie(z,G,ce){if(z==null)return z;var fe=[],ye=0;return W(z,fe,"","",function(be){return G.call(ce,be,ye++)}),fe}function R(z){if(z._status===-1){var G=z._result;G=G(),G.then(function(ce){(z._status===0||z._status===-1)&&(z._status=1,z._result=ce)},function(ce){(z._status===0||z._status===-1)&&(z._status=2,z._result=ce)}),z._status===-1&&(z._status=0,z._result=G)}if(z._status===1)return z._result.default;throw z._result}var J={current:null},X={transition:null},re={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:X,ReactCurrentOwner:q};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ie,forEach:function(z,G,ce){ie(z,function(){G.apply(this,arguments)},ce)},count:function(z){var G=0;return ie(z,function(){G++}),G},toArray:function(z){return ie(z,function(G){return G})||[]},only:function(z){if(!B(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Se.Component=y,Se.Fragment=s,Se.Profiler=o,Se.PureComponent=E,Se.StrictMode=r,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Se.act=Z,Se.cloneElement=function(z,G,ce){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var fe=b({},z.props),ye=z.key,be=z.ref,Re=z._owner;if(G!=null){if(G.ref!==void 0&&(be=G.ref,Re=q.current),G.key!==void 0&&(ye=""+G.key),z.type&&z.type.defaultProps)var Ce=z.type.defaultProps;for(Me in G)P.call(G,Me)&&!O.hasOwnProperty(Me)&&(fe[Me]=G[Me]===void 0&&Ce!==void 0?Ce[Me]:G[Me])}var Me=arguments.length-2;if(Me===1)fe.children=ce;else if(1<Me){Ce=Array(Me);for(var He=0;He<Me;He++)Ce[He]=arguments[He+2];fe.children=Ce}return{$$typeof:t,type:z.type,key:ye,ref:be,props:fe,_owner:Re}},Se.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},Se.createElement=T,Se.createFactory=function(z){var G=T.bind(null,z);return G.type=z,G},Se.createRef=function(){return{current:null}},Se.forwardRef=function(z){return{$$typeof:u,render:z}},Se.isValidElement=B,Se.lazy=function(z){return{$$typeof:m,_payload:{_status:-1,_result:z},_init:R}},Se.memo=function(z,G){return{$$typeof:p,type:z,compare:G===void 0?null:G}},Se.startTransition=function(z){var G=X.transition;X.transition={};try{z()}finally{X.transition=G}},Se.unstable_act=Z,Se.useCallback=function(z,G){return J.current.useCallback(z,G)},Se.useContext=function(z){return J.current.useContext(z)},Se.useDebugValue=function(){},Se.useDeferredValue=function(z){return J.current.useDeferredValue(z)},Se.useEffect=function(z,G){return J.current.useEffect(z,G)},Se.useId=function(){return J.current.useId()},Se.useImperativeHandle=function(z,G,ce){return J.current.useImperativeHandle(z,G,ce)},Se.useInsertionEffect=function(z,G){return J.current.useInsertionEffect(z,G)},Se.useLayoutEffect=function(z,G){return J.current.useLayoutEffect(z,G)},Se.useMemo=function(z,G){return J.current.useMemo(z,G)},Se.useReducer=function(z,G,ce){return J.current.useReducer(z,G,ce)},Se.useRef=function(z){return J.current.useRef(z)},Se.useState=function(z){return J.current.useState(z)},Se.useSyncExternalStore=function(z,G,ce){return J.current.useSyncExternalStore(z,G,ce)},Se.useTransition=function(){return J.current.useTransition()},Se.version="18.3.1",Se}var Vf;function $d(){return Vf||(Vf=1,Jc.exports=Ay()),Jc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Ty(){if(qf)return Rr;qf=1;var t=$d(),e=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var m,x={},N=null,w=null;p!==void 0&&(N=""+p),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)r.call(h,m)&&!l.hasOwnProperty(m)&&(x[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)x[m]===void 0&&(x[m]=h[m]);return{$$typeof:e,type:u,key:N,ref:w,props:x,_owner:o.current}}return Rr.Fragment=s,Rr.jsx=c,Rr.jsxs=c,Rr}var Yf;function Ly(){return Yf||(Yf=1,Gc.exports=Ty()),Gc.exports}var n=Ly(),S=$d();const Gm=Xm(S),My=Dy({__proto__:null,default:Gm},[S]);var No={},Zc={exports:{}},Lt={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Oy(){return Qf||(Qf=1,(function(t){function e(X,re){var Z=X.length;X.push(re);e:for(;0<Z;){var z=Z-1>>>1,G=X[z];if(0<o(G,re))X[z]=re,X[Z]=G,Z=z;else break e}}function s(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var re=X[0],Z=X.pop();if(Z!==re){X[0]=Z;e:for(var z=0,G=X.length,ce=G>>>1;z<ce;){var fe=2*(z+1)-1,ye=X[fe],be=fe+1,Re=X[be];if(0>o(ye,Z))be<G&&0>o(Re,ye)?(X[z]=Re,X[be]=Z,z=be):(X[z]=ye,X[fe]=Z,z=fe);else if(be<G&&0>o(Re,Z))X[z]=Re,X[be]=Z,z=be;else break e}}return re}function o(X,re){var Z=X.sortIndex-re.sortIndex;return Z!==0?Z:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],m=1,x=null,N=3,w=!1,b=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(X){for(var re=s(p);re!==null;){if(re.callback===null)r(p);else if(re.startTime<=X)r(p),re.sortIndex=re.expirationTime,e(h,re);else break;re=s(p)}}function U(X){if(j=!1,A(X),!b)if(s(h)!==null)b=!0,R(P);else{var re=s(p);re!==null&&J(U,re.startTime-X)}}function P(X,re){b=!1,j&&(j=!1,_(T),T=-1),w=!0;var Z=N;try{for(A(re),x=s(h);x!==null&&(!(x.expirationTime>re)||X&&!M());){var z=x.callback;if(typeof z=="function"){x.callback=null,N=x.priorityLevel;var G=z(x.expirationTime<=re);re=t.unstable_now(),typeof G=="function"?x.callback=G:x===s(h)&&r(h),A(re)}else r(h);x=s(h)}if(x!==null)var ce=!0;else{var fe=s(p);fe!==null&&J(U,fe.startTime-re),ce=!1}return ce}finally{x=null,N=Z,w=!1}}var q=!1,O=null,T=-1,L=5,B=-1;function M(){return!(t.unstable_now()-B<L)}function C(){if(O!==null){var X=t.unstable_now();B=X;var re=!0;try{re=O(!0,X)}finally{re?I():(q=!1,O=null)}}else q=!1}var I;if(typeof E=="function")I=function(){E(C)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,ie=W.port2;W.port1.onmessage=C,I=function(){ie.postMessage(null)}}else I=function(){y(C,0)};function R(X){O=X,q||(q=!0,I())}function J(X,re){T=y(function(){X(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){b||w||(b=!0,R(P))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return s(h)},t.unstable_next=function(X){switch(N){case 1:case 2:case 3:var re=3;break;default:re=N}var Z=N;N=re;try{return X()}finally{N=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=N;N=X;try{return re()}finally{N=Z}},t.unstable_scheduleCallback=function(X,re,Z){var z=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,X){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=Z+G,X={id:m++,callback:re,priorityLevel:X,startTime:Z,expirationTime:G,sortIndex:-1},Z>z?(X.sortIndex=Z,e(p,X),s(h)===null&&X===s(p)&&(j?(_(T),T=-1):j=!0,J(U,Z-z))):(X.sortIndex=G,e(h,X),b||w||(b=!0,R(P))),X},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(X){var re=N;return function(){var Z=N;N=re;try{return X.apply(this,arguments)}finally{N=Z}}}})(td)),td}var Kf;function zy(){return Kf||(Kf=1,ed.exports=Oy()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Iy(){if(Xf)return Lt;Xf=1;var t=$d(),e=zy();function s(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,a){c(i,a),c(i+"Capture",a)}function c(i,a){for(o[i]=a,i=0;i<a.length;i++)r.add(a[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function N(i){return h.call(x,i)?!0:h.call(m,i)?!1:p.test(i)?x[i]=!0:(m[i]=!0,!1)}function w(i,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,a,d,f){if(a===null||typeof a>"u"||w(i,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function j(i,a,d,f,g,v,k){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=i,this.type=a,this.sanitizeURL=v,this.removeEmptyString=k}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new j(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new j(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new j(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new j(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new j(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new j(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new j(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new j(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new j(i,5,!1,i.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function E(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(_,E);y[a]=new j(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(_,E);y[a]=new j(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(_,E);y[a]=new j(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!0,!0)});function A(i,a,d,f){var g=y.hasOwnProperty(a)?y[a]:null;(g!==null?g.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(b(a,d,g,f)&&(d=null),f||g===null?N(a)&&(d===null?i.removeAttribute(a):i.setAttribute(a,""+d)):g.mustUseProperty?i[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,f=g.attributeNamespace,d===null?i.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,f?i.setAttributeNS(f,a,d):i.setAttribute(a,d))))}var U=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),q=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),M=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),X=Symbol.iterator;function re(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Object.assign,z;function G(i){if(z===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);z=a&&a[1]||""}return`
`+z+i}var ce=!1;function fe(i,a){if(!i||ce)return"";ce=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Q){var f=Q}Reflect.construct(i,[],a)}else{try{a.call()}catch(Q){f=Q}i.call(a.prototype)}else{try{throw Error()}catch(Q){f=Q}i()}}catch(Q){if(Q&&f&&typeof Q.stack=="string"){for(var g=Q.stack.split(`
`),v=f.stack.split(`
`),k=g.length-1,D=v.length-1;1<=k&&0<=D&&g[k]!==v[D];)D--;for(;1<=k&&0<=D;k--,D--)if(g[k]!==v[D]){if(k!==1||D!==1)do if(k--,D--,0>D||g[k]!==v[D]){var F=`
`+g[k].replace(" at new "," at ");return i.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",i.displayName)),F}while(1<=k&&0<=D);break}}}finally{ce=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?G(i):""}function ye(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=fe(i.type,!1),i;case 11:return i=fe(i.type.render,!1),i;case 1:return i=fe(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case q:return"Portal";case L:return"Profiler";case T:return"StrictMode";case I:return"Suspense";case W:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case M:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case C:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ie:return a=i.displayName||null,a!==null?a:be(i.type)||"Memo";case R:a=i._payload,i=i._init;try{return be(i(a))}catch{}}return null}function Re(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(a);case 8:return a===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Me(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function He(i){var a=Me(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),f=""+i[a];if(!i.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,v=d.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(k){f=""+k,v.call(this,k)}}),Object.defineProperty(i,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(k){f=""+k},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Vt(i){i._valueTracker||(i._valueTracker=He(i))}function xs(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return i&&(f=Me(i)?i.checked?"true":"false":i.value),i=f,i!==d?(a.setValue(i),!0):!1}function pe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function qt(i,a){var d=a.checked;return Z({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function li(i,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=Ce(a.value!=null?a.value:d),i._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Ks(i,a){a=a.checked,a!=null&&A(i,"checked",a,!1)}function _n(i,a){Ks(i,a);var d=Ce(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Sn(i,a.type,d):a.hasOwnProperty("defaultValue")&&Sn(i,a.type,Ce(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function ci(i,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,d||a===i.value||(i.value=a),i.defaultValue=a}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function Sn(i,a,d){(a!=="number"||pe(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var is=Array.isArray;function rs(i,a,d,f){if(i=i.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<i.length;d++)g=a.hasOwnProperty("$"+i[d].value),i[d].selected!==g&&(i[d].selected=g),g&&f&&(i[d].defaultSelected=!0)}else{for(d=""+Ce(d),a=null,g=0;g<i.length;g++){if(i[g].value===d){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function Cn(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function di(i,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(s(92));if(is(d)){if(1<d.length)throw Error(s(93));d=d[0]}a=d}a==null&&(a=""),d=a}i._wrapperState={initialValue:Ce(d)}}function En(i,a){var d=Ce(a.value),f=Ce(a.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),a.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),f!=null&&(i.defaultValue=""+f)}function se(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function le(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?le(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var st,as=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,g){MSApp.execUnsafeLocalFunction(function(){return i(a,d,f,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(st=st||document.createElement("div"),st.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=st.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function vs(i,a){if(a){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=a;return}}i.textContent=a}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(i){Oe.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Ps[a]=Ps[i]})});function Et(i,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Ps.hasOwnProperty(i)&&Ps[i]?(""+a).trim():a+"px"}function Rn(i,a){i=i.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,g=Et(d,a[d],f);d==="float"&&(d="cssFloat"),f?i.setProperty(d,g):i[d]=g}}var fa=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(i,a){if(a){if(fa[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(s(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(s(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(s(61))}if(a.style!=null&&typeof a.style!="object")throw Error(s(62))}}function hi(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ue=null,Te=null,Yt=null;function ys(i){if(i=pr(i)){if(typeof ue!="function")throw Error(s(280));var a=i.stateNode;a&&(a=Oa(a),ue(i.stateNode,i.type,a))}}function qi(i){Te?Yt?Yt.push(i):Yt=[i]:Te=i}function Pn(){if(Te){var i=Te,a=Yt;if(Yt=Te=null,ys(i),a)for(i=0;i<a.length;i++)ys(a[i])}}function Ds(i,a){return i(a)}function Ft(){}var mt=!1;function _t(i,a,d){if(mt)return i(a,d);mt=!0;try{return Ds(i,a,d)}finally{mt=!1,(Te!==null||Yt!==null)&&(Ft(),Pn())}}function Yi(i,a){var d=i.stateNode;if(d===null)return null;var f=Oa(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(s(231,a,typeof d));return d}var ml=!1;if(u)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{ml=!1}function Mx(i,a,d,f,g,v,k,D,F){var Q=Array.prototype.slice.call(arguments,3);try{a.apply(d,Q)}catch(te){this.onError(te)}}var Ki=!1,pa=null,ma=!1,gl=null,Ox={onError:function(i){Ki=!0,pa=i}};function zx(i,a,d,f,g,v,k,D,F){Ki=!1,pa=null,Mx.apply(Ox,arguments)}function Ix(i,a,d,f,g,v,k,D,F){if(zx.apply(this,arguments),Ki){if(Ki){var Q=pa;Ki=!1,pa=null}else throw Error(s(198));ma||(ma=!0,gl=Q)}}function Dn(i){var a=i,d=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(d=a.return),i=a.return;while(i)}return a.tag===3?d:null}function hu(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function fu(i){if(Dn(i)!==i)throw Error(s(188))}function Fx(i){var a=i.alternate;if(!a){if(a=Dn(i),a===null)throw Error(s(188));return a!==i?null:i}for(var d=i,f=a;;){var g=d.return;if(g===null)break;var v=g.alternate;if(v===null){if(f=g.return,f!==null){d=f;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===d)return fu(g),i;if(v===f)return fu(g),a;v=v.sibling}throw Error(s(188))}if(d.return!==f.return)d=g,f=v;else{for(var k=!1,D=g.child;D;){if(D===d){k=!0,d=g,f=v;break}if(D===f){k=!0,f=g,d=v;break}D=D.sibling}if(!k){for(D=v.child;D;){if(D===d){k=!0,d=v,f=g;break}if(D===f){k=!0,f=v,d=g;break}D=D.sibling}if(!k)throw Error(s(189))}}if(d.alternate!==f)throw Error(s(190))}if(d.tag!==3)throw Error(s(188));return d.stateNode.current===d?i:a}function pu(i){return i=Fx(i),i!==null?mu(i):null}function mu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=mu(i);if(a!==null)return a;i=i.sibling}return null}var gu=e.unstable_scheduleCallback,xu=e.unstable_cancelCallback,Bx=e.unstable_shouldYield,$x=e.unstable_requestPaint,Je=e.unstable_now,Ux=e.unstable_getCurrentPriorityLevel,xl=e.unstable_ImmediatePriority,vu=e.unstable_UserBlockingPriority,ga=e.unstable_NormalPriority,Wx=e.unstable_LowPriority,yu=e.unstable_IdlePriority,xa=null,bs=null;function Hx(i){if(bs&&typeof bs.onCommitFiberRoot=="function")try{bs.onCommitFiberRoot(xa,i,void 0,(i.current.flags&128)===128)}catch{}}var os=Math.clz32?Math.clz32:Yx,Vx=Math.log,qx=Math.LN2;function Yx(i){return i>>>=0,i===0?32:31-(Vx(i)/qx|0)|0}var va=64,ya=4194304;function Xi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ba(i,a){var d=i.pendingLanes;if(d===0)return 0;var f=0,g=i.suspendedLanes,v=i.pingedLanes,k=d&268435455;if(k!==0){var D=k&~g;D!==0?f=Xi(D):(v&=k,v!==0&&(f=Xi(v)))}else k=d&~g,k!==0?f=Xi(k):v!==0&&(f=Xi(v));if(f===0)return 0;if(a!==0&&a!==f&&(a&g)===0&&(g=f&-f,v=a&-a,g>=v||g===16&&(v&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=f;0<a;)d=31-os(a),g=1<<d,f|=i[d],a&=~g;return f}function Qx(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kx(i,a){for(var d=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,v=i.pendingLanes;0<v;){var k=31-os(v),D=1<<k,F=g[k];F===-1?((D&d)===0||(D&f)!==0)&&(g[k]=Qx(D,a)):F<=a&&(i.expiredLanes|=D),v&=~D}}function vl(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function bu(){var i=va;return va<<=1,(va&4194240)===0&&(va=64),i}function yl(i){for(var a=[],d=0;31>d;d++)a.push(i);return a}function Gi(i,a,d){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-os(a),i[a]=d}function Xx(i,a){var d=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<d;){var g=31-os(d),v=1<<g;a[g]=0,f[g]=-1,i[g]=-1,d&=~v}}function bl(i,a){var d=i.entangledLanes|=a;for(i=i.entanglements;d;){var f=31-os(d),g=1<<f;g&a|i[f]&a&&(i[f]|=a),d&=~g}}var ze=0;function ju(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Nu,jl,wu,ku,_u,Nl=!1,ja=[],Xs=null,Gs=null,Js=null,Ji=new Map,Zi=new Map,Zs=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(i,a){switch(i){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":Ji.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(a.pointerId)}}function er(i,a,d,f,g,v){return i===null||i.nativeEvent!==v?(i={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:v,targetContainers:[g]},a!==null&&(a=pr(a),a!==null&&jl(a)),i):(i.eventSystemFlags|=f,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function Jx(i,a,d,f,g){switch(a){case"focusin":return Xs=er(Xs,i,a,d,f,g),!0;case"dragenter":return Gs=er(Gs,i,a,d,f,g),!0;case"mouseover":return Js=er(Js,i,a,d,f,g),!0;case"pointerover":var v=g.pointerId;return Ji.set(v,er(Ji.get(v)||null,i,a,d,f,g)),!0;case"gotpointercapture":return v=g.pointerId,Zi.set(v,er(Zi.get(v)||null,i,a,d,f,g)),!0}return!1}function Cu(i){var a=An(i.target);if(a!==null){var d=Dn(a);if(d!==null){if(a=d.tag,a===13){if(a=hu(d),a!==null){i.blockedOn=a,_u(i.priority,function(){wu(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Na(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var d=kl(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var f=new d.constructor(d.type,d);fi=f,d.target.dispatchEvent(f),fi=null}else return a=pr(d),a!==null&&jl(a),i.blockedOn=d,!1;a.shift()}return!0}function Eu(i,a,d){Na(i)&&d.delete(a)}function Zx(){Nl=!1,Xs!==null&&Na(Xs)&&(Xs=null),Gs!==null&&Na(Gs)&&(Gs=null),Js!==null&&Na(Js)&&(Js=null),Ji.forEach(Eu),Zi.forEach(Eu)}function tr(i,a){i.blockedOn===a&&(i.blockedOn=null,Nl||(Nl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zx)))}function sr(i){function a(g){return tr(g,i)}if(0<ja.length){tr(ja[0],i);for(var d=1;d<ja.length;d++){var f=ja[d];f.blockedOn===i&&(f.blockedOn=null)}}for(Xs!==null&&tr(Xs,i),Gs!==null&&tr(Gs,i),Js!==null&&tr(Js,i),Ji.forEach(a),Zi.forEach(a),d=0;d<Zs.length;d++)f=Zs[d],f.blockedOn===i&&(f.blockedOn=null);for(;0<Zs.length&&(d=Zs[0],d.blockedOn===null);)Cu(d),d.blockedOn===null&&Zs.shift()}var pi=U.ReactCurrentBatchConfig,wa=!0;function ev(i,a,d,f){var g=ze,v=pi.transition;pi.transition=null;try{ze=1,wl(i,a,d,f)}finally{ze=g,pi.transition=v}}function tv(i,a,d,f){var g=ze,v=pi.transition;pi.transition=null;try{ze=4,wl(i,a,d,f)}finally{ze=g,pi.transition=v}}function wl(i,a,d,f){if(wa){var g=kl(i,a,d,f);if(g===null)$l(i,a,f,ka,d),Su(i,f);else if(Jx(g,i,a,d,f))f.stopPropagation();else if(Su(i,f),a&4&&-1<Gx.indexOf(i)){for(;g!==null;){var v=pr(g);if(v!==null&&Nu(v),v=kl(i,a,d,f),v===null&&$l(i,a,f,ka,d),v===g)break;g=v}g!==null&&f.stopPropagation()}else $l(i,a,f,null,d)}}var ka=null;function kl(i,a,d,f){if(ka=null,i=H(f),i=An(i),i!==null)if(a=Dn(i),a===null)i=null;else if(d=a.tag,d===13){if(i=hu(a),i!==null)return i;i=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return ka=i,null}function Ru(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ux()){case xl:return 1;case vu:return 4;case ga:case Wx:return 16;case yu:return 536870912;default:return 16}default:return 16}}var en=null,_l=null,_a=null;function Pu(){if(_a)return _a;var i,a=_l,d=a.length,f,g="value"in en?en.value:en.textContent,v=g.length;for(i=0;i<d&&a[i]===g[i];i++);var k=d-i;for(f=1;f<=k&&a[d-f]===g[v-f];f++);return _a=g.slice(i,1<f?1-f:void 0)}function Sa(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ca(){return!0}function Du(){return!1}function Bt(i){function a(d,f,g,v,k){this._reactName=d,this._targetInst=g,this.type=f,this.nativeEvent=v,this.target=k,this.currentTarget=null;for(var D in i)i.hasOwnProperty(D)&&(d=i[D],this[D]=d?d(v):v[D]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ca:Du,this.isPropagationStopped=Du,this}return Z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),a}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Bt(mi),nr=Z({},mi,{view:0,detail:0}),sv=Bt(nr),Cl,El,ir,Ea=Z({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ir&&(ir&&i.type==="mousemove"?(Cl=i.screenX-ir.screenX,El=i.screenY-ir.screenY):El=Cl=0,ir=i),Cl)},movementY:function(i){return"movementY"in i?i.movementY:El}}),Au=Bt(Ea),nv=Z({},Ea,{dataTransfer:0}),iv=Bt(nv),rv=Z({},nr,{relatedTarget:0}),Rl=Bt(rv),av=Z({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Bt(av),lv=Z({},mi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),cv=Bt(lv),dv=Z({},mi,{data:0}),Tu=Bt(dv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=fv[i])?!!a[i]:!1}function Pl(){return pv}var mv=Z({},nr,{key:function(i){if(i.key){var a=uv[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Sa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?hv[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(i){return i.type==="keypress"?Sa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Sa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),gv=Bt(mv),xv=Z({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lu=Bt(xv),vv=Z({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),yv=Bt(vv),bv=Z({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=Bt(bv),Nv=Z({},Ea,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Bt(Nv),kv=[9,13,27,32],Dl=u&&"CompositionEvent"in window,rr=null;u&&"documentMode"in document&&(rr=document.documentMode);var _v=u&&"TextEvent"in window&&!rr,Mu=u&&(!Dl||rr&&8<rr&&11>=rr),Ou=" ",zu=!1;function Iu(i,a){switch(i){case"keyup":return kv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fu(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var gi=!1;function Sv(i,a){switch(i){case"compositionend":return Fu(a);case"keypress":return a.which!==32?null:(zu=!0,Ou);case"textInput":return i=a.data,i===Ou&&zu?null:i;default:return null}}function Cv(i,a){if(gi)return i==="compositionend"||!Dl&&Iu(i,a)?(i=Pu(),_a=_l=en=null,gi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Mu&&a.locale!=="ko"?null:a.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!Ev[i.type]:a==="textarea"}function $u(i,a,d,f){qi(f),a=Ta(a,"onChange"),0<a.length&&(d=new Sl("onChange","change",null,d,f),i.push({event:d,listeners:a}))}var ar=null,or=null;function Rv(i){rh(i,0)}function Ra(i){var a=ji(i);if(xs(a))return i}function Pv(i,a){if(i==="change")return a}var Uu=!1;if(u){var Al;if(u){var Tl="oninput"in document;if(!Tl){var Wu=document.createElement("div");Wu.setAttribute("oninput","return;"),Tl=typeof Wu.oninput=="function"}Al=Tl}else Al=!1;Uu=Al&&(!document.documentMode||9<document.documentMode)}function Hu(){ar&&(ar.detachEvent("onpropertychange",Vu),or=ar=null)}function Vu(i){if(i.propertyName==="value"&&Ra(or)){var a=[];$u(a,or,i,H(i)),_t(Rv,a)}}function Dv(i,a,d){i==="focusin"?(Hu(),ar=a,or=d,ar.attachEvent("onpropertychange",Vu)):i==="focusout"&&Hu()}function Av(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ra(or)}function Tv(i,a){if(i==="click")return Ra(a)}function Lv(i,a){if(i==="input"||i==="change")return Ra(a)}function Mv(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var ls=typeof Object.is=="function"?Object.is:Mv;function lr(i,a){if(ls(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var d=Object.keys(i),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var g=d[f];if(!h.call(a,g)||!ls(i[g],a[g]))return!1}return!0}function qu(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Yu(i,a){var d=qu(i);i=0;for(var f;d;){if(d.nodeType===3){if(f=i+d.textContent.length,i<=a&&f>=a)return{node:d,offset:a-i};i=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=qu(d)}}function Qu(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Qu(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Ku(){for(var i=window,a=pe();a instanceof i.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)i=a.contentWindow;else break;a=pe(i.document)}return a}function Ll(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function Ov(i){var a=Ku(),d=i.focusedElem,f=i.selectionRange;if(a!==d&&d&&d.ownerDocument&&Qu(d.ownerDocument.documentElement,d)){if(f!==null&&Ll(d)){if(a=f.start,i=f.end,i===void 0&&(i=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(i,d.value.length);else if(i=(a=d.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=d.textContent.length,v=Math.min(f.start,g);f=f.end===void 0?v:Math.min(f.end,g),!i.extend&&v>f&&(g=f,f=v,v=g),g=Yu(d,v);var k=Yu(d,f);g&&k&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==k.node||i.focusOffset!==k.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),v>f?(i.addRange(a),i.extend(k.node,k.offset)):(a.setEnd(k.node,k.offset),i.addRange(a)))}}for(a=[],i=d;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)i=a[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var zv=u&&"documentMode"in document&&11>=document.documentMode,xi=null,Ml=null,cr=null,Ol=!1;function Xu(i,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Ol||xi==null||xi!==pe(f)||(f=xi,"selectionStart"in f&&Ll(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),cr&&lr(cr,f)||(cr=f,f=Ta(Ml,"onSelect"),0<f.length&&(a=new Sl("onSelect","select",null,a,d),i.push({event:a,listeners:f}),a.target=xi)))}function Pa(i,a){var d={};return d[i.toLowerCase()]=a.toLowerCase(),d["Webkit"+i]="webkit"+a,d["Moz"+i]="moz"+a,d}var vi={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},zl={},Gu={};u&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Da(i){if(zl[i])return zl[i];if(!vi[i])return i;var a=vi[i],d;for(d in a)if(a.hasOwnProperty(d)&&d in Gu)return zl[i]=a[d];return i}var Ju=Da("animationend"),Zu=Da("animationiteration"),eh=Da("animationstart"),th=Da("transitionend"),sh=new Map,nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(i,a){sh.set(i,a),l(a,[i])}for(var Il=0;Il<nh.length;Il++){var Fl=nh[Il],Iv=Fl.toLowerCase(),Fv=Fl[0].toUpperCase()+Fl.slice(1);tn(Iv,"on"+Fv)}tn(Ju,"onAnimationEnd"),tn(Zu,"onAnimationIteration"),tn(eh,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function ih(i,a,d){var f=i.type||"unknown-event";i.currentTarget=d,Ix(f,a,void 0,i),i.currentTarget=null}function rh(i,a){a=(a&4)!==0;for(var d=0;d<i.length;d++){var f=i[d],g=f.event;f=f.listeners;e:{var v=void 0;if(a)for(var k=f.length-1;0<=k;k--){var D=f[k],F=D.instance,Q=D.currentTarget;if(D=D.listener,F!==v&&g.isPropagationStopped())break e;ih(g,D,Q),v=F}else for(k=0;k<f.length;k++){if(D=f[k],F=D.instance,Q=D.currentTarget,D=D.listener,F!==v&&g.isPropagationStopped())break e;ih(g,D,Q),v=F}}}if(ma)throw i=gl,ma=!1,gl=null,i}function $e(i,a){var d=a[Yl];d===void 0&&(d=a[Yl]=new Set);var f=i+"__bubble";d.has(f)||(ah(a,i,2,!1),d.add(f))}function Bl(i,a,d){var f=0;a&&(f|=4),ah(d,i,f,a)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function ur(i){if(!i[Aa]){i[Aa]=!0,r.forEach(function(d){d!=="selectionchange"&&(Bv.has(d)||Bl(d,!1,i),Bl(d,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Aa]||(a[Aa]=!0,Bl("selectionchange",!1,a))}}function ah(i,a,d,f){switch(Ru(a)){case 1:var g=ev;break;case 4:g=tv;break;default:g=wl}d=g.bind(null,a,d,i),g=void 0,!ml||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(a,d,{capture:!0,passive:g}):i.addEventListener(a,d,!0):g!==void 0?i.addEventListener(a,d,{passive:g}):i.addEventListener(a,d,!1)}function $l(i,a,d,f,g){var v=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var k=f.tag;if(k===3||k===4){var D=f.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(k===4)for(k=f.return;k!==null;){var F=k.tag;if((F===3||F===4)&&(F=k.stateNode.containerInfo,F===g||F.nodeType===8&&F.parentNode===g))return;k=k.return}for(;D!==null;){if(k=An(D),k===null)return;if(F=k.tag,F===5||F===6){f=v=k;continue e}D=D.parentNode}}f=f.return}_t(function(){var Q=v,te=H(d),ne=[];e:{var ee=sh.get(i);if(ee!==void 0){var de=Sl,me=i;switch(i){case"keypress":if(Sa(d)===0)break e;case"keydown":case"keyup":de=gv;break;case"focusin":me="focus",de=Rl;break;case"focusout":me="blur",de=Rl;break;case"beforeblur":case"afterblur":de=Rl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=yv;break;case Ju:case Zu:case eh:de=ov;break;case th:de=jv;break;case"scroll":de=sv;break;case"wheel":de=wv;break;case"copy":case"cut":case"paste":de=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Lu}var ge=(a&4)!==0,Ze=!ge&&i==="scroll",V=ge?ee!==null?ee+"Capture":null:ee;ge=[];for(var $=Q,Y;$!==null;){Y=$;var ae=Y.stateNode;if(Y.tag===5&&ae!==null&&(Y=ae,V!==null&&(ae=Yi($,V),ae!=null&&ge.push(hr($,ae,Y)))),Ze)break;$=$.return}0<ge.length&&(ee=new de(ee,me,null,d,te),ne.push({event:ee,listeners:ge}))}}if((a&7)===0){e:{if(ee=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",ee&&d!==fi&&(me=d.relatedTarget||d.fromElement)&&(An(me)||me[As]))break e;if((de||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,de?(me=d.relatedTarget||d.toElement,de=Q,me=me?An(me):null,me!==null&&(Ze=Dn(me),me!==Ze||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=Q),de!==me)){if(ge=Au,ae="onMouseLeave",V="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(ge=Lu,ae="onPointerLeave",V="onPointerEnter",$="pointer"),Ze=de==null?ee:ji(de),Y=me==null?ee:ji(me),ee=new ge(ae,$+"leave",de,d,te),ee.target=Ze,ee.relatedTarget=Y,ae=null,An(te)===Q&&(ge=new ge(V,$+"enter",me,d,te),ge.target=Y,ge.relatedTarget=Ze,ae=ge),Ze=ae,de&&me)t:{for(ge=de,V=me,$=0,Y=ge;Y;Y=yi(Y))$++;for(Y=0,ae=V;ae;ae=yi(ae))Y++;for(;0<$-Y;)ge=yi(ge),$--;for(;0<Y-$;)V=yi(V),Y--;for(;$--;){if(ge===V||V!==null&&ge===V.alternate)break t;ge=yi(ge),V=yi(V)}ge=null}else ge=null;de!==null&&oh(ne,ee,de,ge,!1),me!==null&&Ze!==null&&oh(ne,Ze,me,ge,!0)}}e:{if(ee=Q?ji(Q):window,de=ee.nodeName&&ee.nodeName.toLowerCase(),de==="select"||de==="input"&&ee.type==="file")var ve=Pv;else if(Bu(ee))if(Uu)ve=Lv;else{ve=Av;var je=Dv}else(de=ee.nodeName)&&de.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(ve=Tv);if(ve&&(ve=ve(i,Q))){$u(ne,ve,d,te);break e}je&&je(i,ee,Q),i==="focusout"&&(je=ee._wrapperState)&&je.controlled&&ee.type==="number"&&Sn(ee,"number",ee.value)}switch(je=Q?ji(Q):window,i){case"focusin":(Bu(je)||je.contentEditable==="true")&&(xi=je,Ml=Q,cr=null);break;case"focusout":cr=Ml=xi=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,Xu(ne,d,te);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Xu(ne,d,te)}var Ne;if(Dl)e:{switch(i){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else gi?Iu(i,d)&&(ke="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(ke="onCompositionStart");ke&&(Mu&&d.locale!=="ko"&&(gi||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&gi&&(Ne=Pu()):(en=te,_l="value"in en?en.value:en.textContent,gi=!0)),je=Ta(Q,ke),0<je.length&&(ke=new Tu(ke,i,null,d,te),ne.push({event:ke,listeners:je}),Ne?ke.data=Ne:(Ne=Fu(d),Ne!==null&&(ke.data=Ne)))),(Ne=_v?Sv(i,d):Cv(i,d))&&(Q=Ta(Q,"onBeforeInput"),0<Q.length&&(te=new Tu("onBeforeInput","beforeinput",null,d,te),ne.push({event:te,listeners:Q}),te.data=Ne))}rh(ne,a)})}function hr(i,a,d){return{instance:i,listener:a,currentTarget:d}}function Ta(i,a){for(var d=a+"Capture",f=[];i!==null;){var g=i,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Yi(i,d),v!=null&&f.unshift(hr(i,v,g)),v=Yi(i,a),v!=null&&f.push(hr(i,v,g))),i=i.return}return f}function yi(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function oh(i,a,d,f,g){for(var v=a._reactName,k=[];d!==null&&d!==f;){var D=d,F=D.alternate,Q=D.stateNode;if(F!==null&&F===f)break;D.tag===5&&Q!==null&&(D=Q,g?(F=Yi(d,v),F!=null&&k.unshift(hr(d,F,D))):g||(F=Yi(d,v),F!=null&&k.push(hr(d,F,D)))),d=d.return}k.length!==0&&i.push({event:a,listeners:k})}var $v=/\r\n?/g,Uv=/\u0000|\uFFFD/g;function lh(i){return(typeof i=="string"?i:""+i).replace($v,`
`).replace(Uv,"")}function La(i,a,d){if(a=lh(a),lh(i)!==a&&d)throw Error(s(425))}function Ma(){}var Ul=null,Wl=null;function Hl(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(i){return ch.resolve(null).then(i).catch(Vv)}:Vl;function Vv(i){setTimeout(function(){throw i})}function ql(i,a){var d=a,f=0;do{var g=d.nextSibling;if(i.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(f===0){i.removeChild(g),sr(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=g}while(d);sr(a)}function sn(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function dh(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return i;a--}else d==="/$"&&a++}i=i.previousSibling}return null}var bi=Math.random().toString(36).slice(2),js="__reactFiber$"+bi,fr="__reactProps$"+bi,As="__reactContainer$"+bi,Yl="__reactEvents$"+bi,qv="__reactListeners$"+bi,Yv="__reactHandles$"+bi;function An(i){var a=i[js];if(a)return a;for(var d=i.parentNode;d;){if(a=d[As]||d[js]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(i=dh(i);i!==null;){if(d=i[js])return d;i=dh(i)}return a}i=d,d=i.parentNode}return null}function pr(i){return i=i[js]||i[As],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ji(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(s(33))}function Oa(i){return i[fr]||null}var Ql=[],Ni=-1;function nn(i){return{current:i}}function Ue(i){0>Ni||(i.current=Ql[Ni],Ql[Ni]=null,Ni--)}function Be(i,a){Ni++,Ql[Ni]=i.current,i.current=a}var rn={},gt=nn(rn),Rt=nn(!1),Tn=rn;function wi(i,a){var d=i.type.contextTypes;if(!d)return rn;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in d)g[v]=a[v];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function Pt(i){return i=i.childContextTypes,i!=null}function za(){Ue(Rt),Ue(gt)}function uh(i,a,d){if(gt.current!==rn)throw Error(s(168));Be(gt,a),Be(Rt,d)}function hh(i,a,d){var f=i.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var g in f)if(!(g in a))throw Error(s(108,Re(i)||"Unknown",g));return Z({},d,f)}function Ia(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||rn,Tn=gt.current,Be(gt,i),Be(Rt,Rt.current),!0}function fh(i,a,d){var f=i.stateNode;if(!f)throw Error(s(169));d?(i=hh(i,a,Tn),f.__reactInternalMemoizedMergedChildContext=i,Ue(Rt),Ue(gt),Be(gt,i)):Ue(Rt),Be(Rt,d)}var Ts=null,Fa=!1,Kl=!1;function ph(i){Ts===null?Ts=[i]:Ts.push(i)}function Qv(i){Fa=!0,ph(i)}function an(){if(!Kl&&Ts!==null){Kl=!0;var i=0,a=ze;try{var d=Ts;for(ze=1;i<d.length;i++){var f=d[i];do f=f(!0);while(f!==null)}Ts=null,Fa=!1}catch(g){throw Ts!==null&&(Ts=Ts.slice(i+1)),gu(xl,an),g}finally{ze=a,Kl=!1}}return null}var ki=[],_i=0,Ba=null,$a=0,Qt=[],Kt=0,Ln=null,Ls=1,Ms="";function Mn(i,a){ki[_i++]=$a,ki[_i++]=Ba,Ba=i,$a=a}function mh(i,a,d){Qt[Kt++]=Ls,Qt[Kt++]=Ms,Qt[Kt++]=Ln,Ln=i;var f=Ls;i=Ms;var g=32-os(f)-1;f&=~(1<<g),d+=1;var v=32-os(a)+g;if(30<v){var k=g-g%5;v=(f&(1<<k)-1).toString(32),f>>=k,g-=k,Ls=1<<32-os(a)+g|d<<g|f,Ms=v+i}else Ls=1<<v|d<<g|f,Ms=i}function Xl(i){i.return!==null&&(Mn(i,1),mh(i,1,0))}function Gl(i){for(;i===Ba;)Ba=ki[--_i],ki[_i]=null,$a=ki[--_i],ki[_i]=null;for(;i===Ln;)Ln=Qt[--Kt],Qt[Kt]=null,Ms=Qt[--Kt],Qt[Kt]=null,Ls=Qt[--Kt],Qt[Kt]=null}var $t=null,Ut=null,Ve=!1,cs=null;function gh(i,a){var d=Zt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=i,a=i.deletions,a===null?(i.deletions=[d],i.flags|=16):a.push(d)}function xh(i,a){switch(i.tag){case 5:var d=i.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,$t=i,Ut=sn(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,$t=i,Ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=Ln!==null?{id:Ls,overflow:Ms}:null,i.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Zt(18,null,null,0),d.stateNode=a,d.return=i,i.child=d,$t=i,Ut=null,!0):!1;default:return!1}}function Jl(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Zl(i){if(Ve){var a=Ut;if(a){var d=a;if(!xh(i,a)){if(Jl(i))throw Error(s(418));a=sn(d.nextSibling);var f=$t;a&&xh(i,a)?gh(f,d):(i.flags=i.flags&-4097|2,Ve=!1,$t=i)}}else{if(Jl(i))throw Error(s(418));i.flags=i.flags&-4097|2,Ve=!1,$t=i}}}function vh(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$t=i}function Ua(i){if(i!==$t)return!1;if(!Ve)return vh(i),Ve=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Hl(i.type,i.memoizedProps)),a&&(a=Ut)){if(Jl(i))throw yh(),Error(s(418));for(;a;)gh(i,a),a=sn(a.nextSibling)}if(vh(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(a===0){Ut=sn(i.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}i=i.nextSibling}Ut=null}}else Ut=$t?sn(i.stateNode.nextSibling):null;return!0}function yh(){for(var i=Ut;i;)i=sn(i.nextSibling)}function Si(){Ut=$t=null,Ve=!1}function ec(i){cs===null?cs=[i]:cs.push(i)}var Kv=U.ReactCurrentBatchConfig;function mr(i,a,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(s(309));var f=d.stateNode}if(!f)throw Error(s(147,i));var g=f,v=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===v?a.ref:(a=function(k){var D=g.refs;k===null?delete D[v]:D[v]=k},a._stringRef=v,a)}if(typeof i!="string")throw Error(s(284));if(!d._owner)throw Error(s(290,i))}return i}function Wa(i,a){throw i=Object.prototype.toString.call(a),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function bh(i){var a=i._init;return a(i._payload)}function jh(i){function a(V,$){if(i){var Y=V.deletions;Y===null?(V.deletions=[$],V.flags|=16):Y.push($)}}function d(V,$){if(!i)return null;for(;$!==null;)a(V,$),$=$.sibling;return null}function f(V,$){for(V=new Map;$!==null;)$.key!==null?V.set($.key,$):V.set($.index,$),$=$.sibling;return V}function g(V,$){return V=pn(V,$),V.index=0,V.sibling=null,V}function v(V,$,Y){return V.index=Y,i?(Y=V.alternate,Y!==null?(Y=Y.index,Y<$?(V.flags|=2,$):Y):(V.flags|=2,$)):(V.flags|=1048576,$)}function k(V){return i&&V.alternate===null&&(V.flags|=2),V}function D(V,$,Y,ae){return $===null||$.tag!==6?($=Vc(Y,V.mode,ae),$.return=V,$):($=g($,Y),$.return=V,$)}function F(V,$,Y,ae){var ve=Y.type;return ve===O?te(V,$,Y.props.children,ae,Y.key):$!==null&&($.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===R&&bh(ve)===$.type)?(ae=g($,Y.props),ae.ref=mr(V,$,Y),ae.return=V,ae):(ae=po(Y.type,Y.key,Y.props,null,V.mode,ae),ae.ref=mr(V,$,Y),ae.return=V,ae)}function Q(V,$,Y,ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==Y.containerInfo||$.stateNode.implementation!==Y.implementation?($=qc(Y,V.mode,ae),$.return=V,$):($=g($,Y.children||[]),$.return=V,$)}function te(V,$,Y,ae,ve){return $===null||$.tag!==7?($=Wn(Y,V.mode,ae,ve),$.return=V,$):($=g($,Y),$.return=V,$)}function ne(V,$,Y){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Vc(""+$,V.mode,Y),$.return=V,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case P:return Y=po($.type,$.key,$.props,null,V.mode,Y),Y.ref=mr(V,null,$),Y.return=V,Y;case q:return $=qc($,V.mode,Y),$.return=V,$;case R:var ae=$._init;return ne(V,ae($._payload),Y)}if(is($)||re($))return $=Wn($,V.mode,Y,null),$.return=V,$;Wa(V,$)}return null}function ee(V,$,Y,ae){var ve=$!==null?$.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return ve!==null?null:D(V,$,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:return Y.key===ve?F(V,$,Y,ae):null;case q:return Y.key===ve?Q(V,$,Y,ae):null;case R:return ve=Y._init,ee(V,$,ve(Y._payload),ae)}if(is(Y)||re(Y))return ve!==null?null:te(V,$,Y,ae,null);Wa(V,Y)}return null}function de(V,$,Y,ae,ve){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return V=V.get(Y)||null,D($,V,""+ae,ve);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case P:return V=V.get(ae.key===null?Y:ae.key)||null,F($,V,ae,ve);case q:return V=V.get(ae.key===null?Y:ae.key)||null,Q($,V,ae,ve);case R:var je=ae._init;return de(V,$,Y,je(ae._payload),ve)}if(is(ae)||re(ae))return V=V.get(Y)||null,te($,V,ae,ve,null);Wa($,ae)}return null}function me(V,$,Y,ae){for(var ve=null,je=null,Ne=$,ke=$=0,ht=null;Ne!==null&&ke<Y.length;ke++){Ne.index>ke?(ht=Ne,Ne=null):ht=Ne.sibling;var Ae=ee(V,Ne,Y[ke],ae);if(Ae===null){Ne===null&&(Ne=ht);break}i&&Ne&&Ae.alternate===null&&a(V,Ne),$=v(Ae,$,ke),je===null?ve=Ae:je.sibling=Ae,je=Ae,Ne=ht}if(ke===Y.length)return d(V,Ne),Ve&&Mn(V,ke),ve;if(Ne===null){for(;ke<Y.length;ke++)Ne=ne(V,Y[ke],ae),Ne!==null&&($=v(Ne,$,ke),je===null?ve=Ne:je.sibling=Ne,je=Ne);return Ve&&Mn(V,ke),ve}for(Ne=f(V,Ne);ke<Y.length;ke++)ht=de(Ne,V,ke,Y[ke],ae),ht!==null&&(i&&ht.alternate!==null&&Ne.delete(ht.key===null?ke:ht.key),$=v(ht,$,ke),je===null?ve=ht:je.sibling=ht,je=ht);return i&&Ne.forEach(function(mn){return a(V,mn)}),Ve&&Mn(V,ke),ve}function ge(V,$,Y,ae){var ve=re(Y);if(typeof ve!="function")throw Error(s(150));if(Y=ve.call(Y),Y==null)throw Error(s(151));for(var je=ve=null,Ne=$,ke=$=0,ht=null,Ae=Y.next();Ne!==null&&!Ae.done;ke++,Ae=Y.next()){Ne.index>ke?(ht=Ne,Ne=null):ht=Ne.sibling;var mn=ee(V,Ne,Ae.value,ae);if(mn===null){Ne===null&&(Ne=ht);break}i&&Ne&&mn.alternate===null&&a(V,Ne),$=v(mn,$,ke),je===null?ve=mn:je.sibling=mn,je=mn,Ne=ht}if(Ae.done)return d(V,Ne),Ve&&Mn(V,ke),ve;if(Ne===null){for(;!Ae.done;ke++,Ae=Y.next())Ae=ne(V,Ae.value,ae),Ae!==null&&($=v(Ae,$,ke),je===null?ve=Ae:je.sibling=Ae,je=Ae);return Ve&&Mn(V,ke),ve}for(Ne=f(V,Ne);!Ae.done;ke++,Ae=Y.next())Ae=de(Ne,V,ke,Ae.value,ae),Ae!==null&&(i&&Ae.alternate!==null&&Ne.delete(Ae.key===null?ke:Ae.key),$=v(Ae,$,ke),je===null?ve=Ae:je.sibling=Ae,je=Ae);return i&&Ne.forEach(function(Ey){return a(V,Ey)}),Ve&&Mn(V,ke),ve}function Ze(V,$,Y,ae){if(typeof Y=="object"&&Y!==null&&Y.type===O&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:e:{for(var ve=Y.key,je=$;je!==null;){if(je.key===ve){if(ve=Y.type,ve===O){if(je.tag===7){d(V,je.sibling),$=g(je,Y.props.children),$.return=V,V=$;break e}}else if(je.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===R&&bh(ve)===je.type){d(V,je.sibling),$=g(je,Y.props),$.ref=mr(V,je,Y),$.return=V,V=$;break e}d(V,je);break}else a(V,je);je=je.sibling}Y.type===O?($=Wn(Y.props.children,V.mode,ae,Y.key),$.return=V,V=$):(ae=po(Y.type,Y.key,Y.props,null,V.mode,ae),ae.ref=mr(V,$,Y),ae.return=V,V=ae)}return k(V);case q:e:{for(je=Y.key;$!==null;){if($.key===je)if($.tag===4&&$.stateNode.containerInfo===Y.containerInfo&&$.stateNode.implementation===Y.implementation){d(V,$.sibling),$=g($,Y.children||[]),$.return=V,V=$;break e}else{d(V,$);break}else a(V,$);$=$.sibling}$=qc(Y,V.mode,ae),$.return=V,V=$}return k(V);case R:return je=Y._init,Ze(V,$,je(Y._payload),ae)}if(is(Y))return me(V,$,Y,ae);if(re(Y))return ge(V,$,Y,ae);Wa(V,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,$!==null&&$.tag===6?(d(V,$.sibling),$=g($,Y),$.return=V,V=$):(d(V,$),$=Vc(Y,V.mode,ae),$.return=V,V=$),k(V)):d(V,$)}return Ze}var Ci=jh(!0),Nh=jh(!1),Ha=nn(null),Va=null,Ei=null,tc=null;function sc(){tc=Ei=Va=null}function nc(i){var a=Ha.current;Ue(Ha),i._currentValue=a}function ic(i,a,d){for(;i!==null;){var f=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),i===d)break;i=i.return}}function Ri(i,a){Va=i,tc=Ei=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Dt=!0),i.firstContext=null)}function Xt(i){var a=i._currentValue;if(tc!==i)if(i={context:i,memoizedValue:a,next:null},Ei===null){if(Va===null)throw Error(s(308));Ei=i,Va.dependencies={lanes:0,firstContext:i}}else Ei=Ei.next=i;return a}var On=null;function rc(i){On===null?On=[i]:On.push(i)}function wh(i,a,d,f){var g=a.interleaved;return g===null?(d.next=d,rc(a)):(d.next=g.next,g.next=d),a.interleaved=d,Os(i,f)}function Os(i,a){i.lanes|=a;var d=i.alternate;for(d!==null&&(d.lanes|=a),d=i,i=i.return;i!==null;)i.childLanes|=a,d=i.alternate,d!==null&&(d.childLanes|=a),d=i,i=i.return;return d.tag===3?d.stateNode:null}var on=!1;function ac(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zs(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function ln(i,a,d){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(De&2)!==0){var g=f.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a,Os(i,d)}return g=f.interleaved,g===null?(a.next=a,rc(f)):(a.next=g.next,g.next=a),f.interleaved=a,Os(i,d)}function qa(i,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,bl(i,d)}}function _h(i,a){var d=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var g=null,v=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};v===null?g=v=k:v=v.next=k,d=d.next}while(d!==null);v===null?g=v=a:v=v.next=a}else g=v=a;d={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:f.shared,effects:f.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=a:i.next=a,d.lastBaseUpdate=a}function Ya(i,a,d,f){var g=i.updateQueue;on=!1;var v=g.firstBaseUpdate,k=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var F=D,Q=F.next;F.next=null,k===null?v=Q:k.next=Q,k=F;var te=i.alternate;te!==null&&(te=te.updateQueue,D=te.lastBaseUpdate,D!==k&&(D===null?te.firstBaseUpdate=Q:D.next=Q,te.lastBaseUpdate=F))}if(v!==null){var ne=g.baseState;k=0,te=Q=F=null,D=v;do{var ee=D.lane,de=D.eventTime;if((f&ee)===ee){te!==null&&(te=te.next={eventTime:de,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var me=i,ge=D;switch(ee=a,de=d,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){ne=me.call(de,ne,ee);break e}ne=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,ee=typeof me=="function"?me.call(de,ne,ee):me,ee==null)break e;ne=Z({},ne,ee);break e;case 2:on=!0}}D.callback!==null&&D.lane!==0&&(i.flags|=64,ee=g.effects,ee===null?g.effects=[D]:ee.push(D))}else de={eventTime:de,lane:ee,tag:D.tag,payload:D.payload,callback:D.callback,next:null},te===null?(Q=te=de,F=ne):te=te.next=de,k|=ee;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;ee=D,D=ee.next,ee.next=null,g.lastBaseUpdate=ee,g.shared.pending=null}}while(!0);if(te===null&&(F=ne),g.baseState=F,g.firstBaseUpdate=Q,g.lastBaseUpdate=te,a=g.shared.interleaved,a!==null){g=a;do k|=g.lane,g=g.next;while(g!==a)}else v===null&&(g.shared.lanes=0);Fn|=k,i.lanes=k,i.memoizedState=ne}}function Sh(i,a,d){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var f=i[a],g=f.callback;if(g!==null){if(f.callback=null,f=d,typeof g!="function")throw Error(s(191,g));g.call(f)}}}var gr={},Ns=nn(gr),xr=nn(gr),vr=nn(gr);function zn(i){if(i===gr)throw Error(s(174));return i}function oc(i,a){switch(Be(vr,a),Be(xr,i),Be(Ns,gr),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Pe(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Pe(a,i)}Ue(Ns),Be(Ns,a)}function Pi(){Ue(Ns),Ue(xr),Ue(vr)}function Ch(i){zn(vr.current);var a=zn(Ns.current),d=Pe(a,i.type);a!==d&&(Be(xr,i),Be(Ns,d))}function lc(i){xr.current===i&&(Ue(Ns),Ue(xr))}var qe=nn(0);function Qa(i){for(var a=i;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var cc=[];function dc(){for(var i=0;i<cc.length;i++)cc[i]._workInProgressVersionPrimary=null;cc.length=0}var Ka=U.ReactCurrentDispatcher,uc=U.ReactCurrentBatchConfig,In=0,Ye=null,ot=null,dt=null,Xa=!1,yr=!1,br=0,Xv=0;function xt(){throw Error(s(321))}function hc(i,a){if(a===null)return!1;for(var d=0;d<a.length&&d<i.length;d++)if(!ls(i[d],a[d]))return!1;return!0}function fc(i,a,d,f,g,v){if(In=v,Ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ka.current=i===null||i.memoizedState===null?ey:ty,i=d(f,g),yr){v=0;do{if(yr=!1,br=0,25<=v)throw Error(s(301));v+=1,dt=ot=null,a.updateQueue=null,Ka.current=sy,i=d(f,g)}while(yr)}if(Ka.current=Za,a=ot!==null&&ot.next!==null,In=0,dt=ot=Ye=null,Xa=!1,a)throw Error(s(300));return i}function pc(){var i=br!==0;return br=0,i}function ws(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ye.memoizedState=dt=i:dt=dt.next=i,dt}function Gt(){if(ot===null){var i=Ye.alternate;i=i!==null?i.memoizedState:null}else i=ot.next;var a=dt===null?Ye.memoizedState:dt.next;if(a!==null)dt=a,ot=i;else{if(i===null)throw Error(s(310));ot=i,i={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},dt===null?Ye.memoizedState=dt=i:dt=dt.next=i}return dt}function jr(i,a){return typeof a=="function"?a(i):a}function mc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=ot,g=f.baseQueue,v=d.pending;if(v!==null){if(g!==null){var k=g.next;g.next=v.next,v.next=k}f.baseQueue=g=v,d.pending=null}if(g!==null){v=g.next,f=f.baseState;var D=k=null,F=null,Q=v;do{var te=Q.lane;if((In&te)===te)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),f=Q.hasEagerState?Q.eagerState:i(f,Q.action);else{var ne={lane:te,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(D=F=ne,k=f):F=F.next=ne,Ye.lanes|=te,Fn|=te}Q=Q.next}while(Q!==null&&Q!==v);F===null?k=f:F.next=D,ls(f,a.memoizedState)||(Dt=!0),a.memoizedState=f,a.baseState=k,a.baseQueue=F,d.lastRenderedState=f}if(i=d.interleaved,i!==null){g=i;do v=g.lane,Ye.lanes|=v,Fn|=v,g=g.next;while(g!==i)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function gc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=d.dispatch,g=d.pending,v=a.memoizedState;if(g!==null){d.pending=null;var k=g=g.next;do v=i(v,k.action),k=k.next;while(k!==g);ls(v,a.memoizedState)||(Dt=!0),a.memoizedState=v,a.baseQueue===null&&(a.baseState=v),d.lastRenderedState=v}return[v,f]}function Eh(){}function Rh(i,a){var d=Ye,f=Gt(),g=a(),v=!ls(f.memoizedState,g);if(v&&(f.memoizedState=g,Dt=!0),f=f.queue,xc(Ah.bind(null,d,f,i),[i]),f.getSnapshot!==a||v||dt!==null&&dt.memoizedState.tag&1){if(d.flags|=2048,Nr(9,Dh.bind(null,d,f,g,a),void 0,null),ut===null)throw Error(s(349));(In&30)!==0||Ph(d,a,g)}return g}function Ph(i,a,d){i.flags|=16384,i={getSnapshot:a,value:d},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.stores=[i]):(d=a.stores,d===null?a.stores=[i]:d.push(i))}function Dh(i,a,d,f){a.value=d,a.getSnapshot=f,Th(a)&&Lh(i)}function Ah(i,a,d){return d(function(){Th(a)&&Lh(i)})}function Th(i){var a=i.getSnapshot;i=i.value;try{var d=a();return!ls(i,d)}catch{return!0}}function Lh(i){var a=Os(i,1);a!==null&&fs(a,i,1,-1)}function Mh(i){var a=ws();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:i},a.queue=i,i=i.dispatch=Zv.bind(null,Ye,i),[a.memoizedState,i]}function Nr(i,a,d,f){return i={tag:i,create:a,destroy:d,deps:f,next:null},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.lastEffect=i.next=i):(d=a.lastEffect,d===null?a.lastEffect=i.next=i:(f=d.next,d.next=i,i.next=f,a.lastEffect=i)),i}function Oh(){return Gt().memoizedState}function Ga(i,a,d,f){var g=ws();Ye.flags|=i,g.memoizedState=Nr(1|a,d,void 0,f===void 0?null:f)}function Ja(i,a,d,f){var g=Gt();f=f===void 0?null:f;var v=void 0;if(ot!==null){var k=ot.memoizedState;if(v=k.destroy,f!==null&&hc(f,k.deps)){g.memoizedState=Nr(a,d,v,f);return}}Ye.flags|=i,g.memoizedState=Nr(1|a,d,v,f)}function zh(i,a){return Ga(8390656,8,i,a)}function xc(i,a){return Ja(2048,8,i,a)}function Ih(i,a){return Ja(4,2,i,a)}function Fh(i,a){return Ja(4,4,i,a)}function Bh(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function $h(i,a,d){return d=d!=null?d.concat([i]):null,Ja(4,4,Bh.bind(null,a,i),d)}function vc(){}function Uh(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&hc(a,f[1])?f[0]:(d.memoizedState=[i,a],i)}function Wh(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&hc(a,f[1])?f[0]:(i=i(),d.memoizedState=[i,a],i)}function Hh(i,a,d){return(In&21)===0?(i.baseState&&(i.baseState=!1,Dt=!0),i.memoizedState=d):(ls(d,a)||(d=bu(),Ye.lanes|=d,Fn|=d,i.baseState=!0),a)}function Gv(i,a){var d=ze;ze=d!==0&&4>d?d:4,i(!0);var f=uc.transition;uc.transition={};try{i(!1),a()}finally{ze=d,uc.transition=f}}function Vh(){return Gt().memoizedState}function Jv(i,a,d){var f=hn(i);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},qh(i))Yh(a,d);else if(d=wh(i,a,d,f),d!==null){var g=Ct();fs(d,i,f,g),Qh(d,a,f)}}function Zv(i,a,d){var f=hn(i),g={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(qh(i))Yh(a,g);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=a.lastRenderedReducer,v!==null))try{var k=a.lastRenderedState,D=v(k,d);if(g.hasEagerState=!0,g.eagerState=D,ls(D,k)){var F=a.interleaved;F===null?(g.next=g,rc(a)):(g.next=F.next,F.next=g),a.interleaved=g;return}}catch{}finally{}d=wh(i,a,g,f),d!==null&&(g=Ct(),fs(d,i,f,g),Qh(d,a,f))}}function qh(i){var a=i.alternate;return i===Ye||a!==null&&a===Ye}function Yh(i,a){yr=Xa=!0;var d=i.pending;d===null?a.next=a:(a.next=d.next,d.next=a),i.pending=a}function Qh(i,a,d){if((d&4194240)!==0){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,bl(i,d)}}var Za={readContext:Xt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},ey={readContext:Xt,useCallback:function(i,a){return ws().memoizedState=[i,a===void 0?null:a],i},useContext:Xt,useEffect:zh,useImperativeHandle:function(i,a,d){return d=d!=null?d.concat([i]):null,Ga(4194308,4,Bh.bind(null,a,i),d)},useLayoutEffect:function(i,a){return Ga(4194308,4,i,a)},useInsertionEffect:function(i,a){return Ga(4,2,i,a)},useMemo:function(i,a){var d=ws();return a=a===void 0?null:a,i=i(),d.memoizedState=[i,a],i},useReducer:function(i,a,d){var f=ws();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},f.queue=i,i=i.dispatch=Jv.bind(null,Ye,i),[f.memoizedState,i]},useRef:function(i){var a=ws();return i={current:i},a.memoizedState=i},useState:Mh,useDebugValue:vc,useDeferredValue:function(i){return ws().memoizedState=i},useTransition:function(){var i=Mh(!1),a=i[0];return i=Gv.bind(null,i[1]),ws().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,d){var f=Ye,g=ws();if(Ve){if(d===void 0)throw Error(s(407));d=d()}else{if(d=a(),ut===null)throw Error(s(349));(In&30)!==0||Ph(f,a,d)}g.memoizedState=d;var v={value:d,getSnapshot:a};return g.queue=v,zh(Ah.bind(null,f,v,i),[i]),f.flags|=2048,Nr(9,Dh.bind(null,f,v,d,a),void 0,null),d},useId:function(){var i=ws(),a=ut.identifierPrefix;if(Ve){var d=Ms,f=Ls;d=(f&~(1<<32-os(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=br++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=Xv++,a=":"+a+"r"+d.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},ty={readContext:Xt,useCallback:Uh,useContext:Xt,useEffect:xc,useImperativeHandle:$h,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:Wh,useReducer:mc,useRef:Oh,useState:function(){return mc(jr)},useDebugValue:vc,useDeferredValue:function(i){var a=Gt();return Hh(a,ot.memoizedState,i)},useTransition:function(){var i=mc(jr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Eh,useSyncExternalStore:Rh,useId:Vh,unstable_isNewReconciler:!1},sy={readContext:Xt,useCallback:Uh,useContext:Xt,useEffect:xc,useImperativeHandle:$h,useInsertionEffect:Ih,useLayoutEffect:Fh,useMemo:Wh,useReducer:gc,useRef:Oh,useState:function(){return gc(jr)},useDebugValue:vc,useDeferredValue:function(i){var a=Gt();return ot===null?a.memoizedState=i:Hh(a,ot.memoizedState,i)},useTransition:function(){var i=gc(jr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Eh,useSyncExternalStore:Rh,useId:Vh,unstable_isNewReconciler:!1};function ds(i,a){if(i&&i.defaultProps){a=Z({},a),i=i.defaultProps;for(var d in i)a[d]===void 0&&(a[d]=i[d]);return a}return a}function yc(i,a,d,f){a=i.memoizedState,d=d(f,a),d=d==null?a:Z({},a,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var eo={isMounted:function(i){return(i=i._reactInternals)?Dn(i)===i:!1},enqueueSetState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),v=zs(f,g);v.payload=a,d!=null&&(v.callback=d),a=ln(i,v,g),a!==null&&(fs(a,i,g,f),qa(a,i,g))},enqueueReplaceState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),v=zs(f,g);v.tag=1,v.payload=a,d!=null&&(v.callback=d),a=ln(i,v,g),a!==null&&(fs(a,i,g,f),qa(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var d=Ct(),f=hn(i),g=zs(d,f);g.tag=2,a!=null&&(g.callback=a),a=ln(i,g,f),a!==null&&(fs(a,i,f,d),qa(a,i,f))}};function Kh(i,a,d,f,g,v,k){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,v,k):a.prototype&&a.prototype.isPureReactComponent?!lr(d,f)||!lr(g,v):!0}function Xh(i,a,d){var f=!1,g=rn,v=a.contextType;return typeof v=="object"&&v!==null?v=Xt(v):(g=Pt(a)?Tn:gt.current,f=a.contextTypes,v=(f=f!=null)?wi(i,g):rn),a=new a(d,v),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=eo,i.stateNode=a,a._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=v),a}function Gh(i,a,d,f){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==i&&eo.enqueueReplaceState(a,a.state,null)}function bc(i,a,d,f){var g=i.stateNode;g.props=d,g.state=i.memoizedState,g.refs={},ac(i);var v=a.contextType;typeof v=="object"&&v!==null?g.context=Xt(v):(v=Pt(a)?Tn:gt.current,g.context=wi(i,v)),g.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(yc(i,a,v,d),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&eo.enqueueReplaceState(g,g.state,null),Ya(i,d,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Di(i,a){try{var d="",f=a;do d+=ye(f),f=f.return;while(f);var g=d}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:a,stack:g,digest:null}}function jc(i,a,d){return{value:i,source:null,stack:d??null,digest:a??null}}function Nc(i,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var ny=typeof WeakMap=="function"?WeakMap:Map;function Jh(i,a,d){d=zs(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){oo||(oo=!0,zc=f),Nc(i,a)},d}function Zh(i,a,d){d=zs(-1,d),d.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=a.value;d.payload=function(){return f(g)},d.callback=function(){Nc(i,a)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(d.callback=function(){Nc(i,a),typeof f!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})}),d}function ef(i,a,d){var f=i.pingCache;if(f===null){f=i.pingCache=new ny;var g=new Set;f.set(a,g)}else g=f.get(a),g===void 0&&(g=new Set,f.set(a,g));g.has(d)||(g.add(d),i=xy.bind(null,i,a,d),a.then(i,i))}function tf(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function sf(i,a,d,f,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=zs(-1,1),a.tag=2,ln(d,a,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var iy=U.ReactCurrentOwner,Dt=!1;function St(i,a,d,f){a.child=i===null?Nh(a,null,d,f):Ci(a,i.child,d,f)}function nf(i,a,d,f,g){d=d.render;var v=a.ref;return Ri(a,g),f=fc(i,a,d,f,v,g),d=pc(),i!==null&&!Dt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&d&&Xl(a),a.flags|=1,St(i,a,f,g),a.child)}function rf(i,a,d,f,g){if(i===null){var v=d.type;return typeof v=="function"&&!Hc(v)&&v.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=v,af(i,a,v,f,g)):(i=po(d.type,null,f,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(v=i.child,(i.lanes&g)===0){var k=v.memoizedProps;if(d=d.compare,d=d!==null?d:lr,d(k,f)&&i.ref===a.ref)return Is(i,a,g)}return a.flags|=1,i=pn(v,f),i.ref=a.ref,i.return=a,a.child=i}function af(i,a,d,f,g){if(i!==null){var v=i.memoizedProps;if(lr(v,f)&&i.ref===a.ref)if(Dt=!1,a.pendingProps=f=v,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Dt=!0);else return a.lanes=i.lanes,Is(i,a,g)}return wc(i,a,d,f,g)}function of(i,a,d){var f=a.pendingProps,g=f.children,v=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Ti,Wt),Wt|=d;else{if((d&1073741824)===0)return i=v!==null?v.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Be(Ti,Wt),Wt|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:d,Be(Ti,Wt),Wt|=f}else v!==null?(f=v.baseLanes|d,a.memoizedState=null):f=d,Be(Ti,Wt),Wt|=f;return St(i,a,g,d),a.child}function lf(i,a){var d=a.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function wc(i,a,d,f,g){var v=Pt(d)?Tn:gt.current;return v=wi(a,v),Ri(a,g),d=fc(i,a,d,f,v,g),f=pc(),i!==null&&!Dt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&f&&Xl(a),a.flags|=1,St(i,a,d,g),a.child)}function cf(i,a,d,f,g){if(Pt(d)){var v=!0;Ia(a)}else v=!1;if(Ri(a,g),a.stateNode===null)so(i,a),Xh(a,d,f),bc(a,d,f,g),f=!0;else if(i===null){var k=a.stateNode,D=a.memoizedProps;k.props=D;var F=k.context,Q=d.contextType;typeof Q=="object"&&Q!==null?Q=Xt(Q):(Q=Pt(d)?Tn:gt.current,Q=wi(a,Q));var te=d.getDerivedStateFromProps,ne=typeof te=="function"||typeof k.getSnapshotBeforeUpdate=="function";ne||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==f||F!==Q)&&Gh(a,k,f,Q),on=!1;var ee=a.memoizedState;k.state=ee,Ya(a,f,k,g),F=a.memoizedState,D!==f||ee!==F||Rt.current||on?(typeof te=="function"&&(yc(a,d,te,f),F=a.memoizedState),(D=on||Kh(a,d,D,f,ee,F,Q))?(ne||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(a.flags|=4194308)):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=F),k.props=f,k.state=F,k.context=Q,f=D):(typeof k.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{k=a.stateNode,kh(i,a),D=a.memoizedProps,Q=a.type===a.elementType?D:ds(a.type,D),k.props=Q,ne=a.pendingProps,ee=k.context,F=d.contextType,typeof F=="object"&&F!==null?F=Xt(F):(F=Pt(d)?Tn:gt.current,F=wi(a,F));var de=d.getDerivedStateFromProps;(te=typeof de=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==ne||ee!==F)&&Gh(a,k,f,F),on=!1,ee=a.memoizedState,k.state=ee,Ya(a,f,k,g);var me=a.memoizedState;D!==ne||ee!==me||Rt.current||on?(typeof de=="function"&&(yc(a,d,de,f),me=a.memoizedState),(Q=on||Kh(a,d,Q,f,ee,me,F)||!1)?(te||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(f,me,F),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(f,me,F)),typeof k.componentDidUpdate=="function"&&(a.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof k.componentDidUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=me),k.props=f,k.state=me,k.context=F,f=Q):(typeof k.componentDidUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=1024),f=!1)}return kc(i,a,d,f,v,g)}function kc(i,a,d,f,g,v){lf(i,a);var k=(a.flags&128)!==0;if(!f&&!k)return g&&fh(a,d,!1),Is(i,a,v);f=a.stateNode,iy.current=a;var D=k&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,i!==null&&k?(a.child=Ci(a,i.child,null,v),a.child=Ci(a,null,D,v)):St(i,a,D,v),a.memoizedState=f.state,g&&fh(a,d,!0),a.child}function df(i){var a=i.stateNode;a.pendingContext?uh(i,a.pendingContext,a.pendingContext!==a.context):a.context&&uh(i,a.context,!1),oc(i,a.containerInfo)}function uf(i,a,d,f,g){return Si(),ec(g),a.flags|=256,St(i,a,d,f),a.child}var _c={dehydrated:null,treeContext:null,retryLane:0};function Sc(i){return{baseLanes:i,cachePool:null,transitions:null}}function hf(i,a,d){var f=a.pendingProps,g=qe.current,v=!1,k=(a.flags&128)!==0,D;if((D=k)||(D=i!==null&&i.memoizedState===null?!1:(g&2)!==0),D?(v=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Be(qe,g&1),i===null)return Zl(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(k=f.children,i=f.fallback,v?(f=a.mode,v=a.child,k={mode:"hidden",children:k},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=k):v=mo(k,f,0,null),i=Wn(i,f,d,null),v.return=a,i.return=a,v.sibling=i,a.child=v,a.child.memoizedState=Sc(d),a.memoizedState=_c,i):Cc(a,k));if(g=i.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return ry(i,a,k,f,D,g,d);if(v){v=f.fallback,k=a.mode,g=i.child,D=g.sibling;var F={mode:"hidden",children:f.children};return(k&1)===0&&a.child!==g?(f=a.child,f.childLanes=0,f.pendingProps=F,a.deletions=null):(f=pn(g,F),f.subtreeFlags=g.subtreeFlags&14680064),D!==null?v=pn(D,v):(v=Wn(v,k,d,null),v.flags|=2),v.return=a,f.return=a,f.sibling=v,a.child=f,f=v,v=a.child,k=i.child.memoizedState,k=k===null?Sc(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},v.memoizedState=k,v.childLanes=i.childLanes&~d,a.memoizedState=_c,f}return v=i.child,i=v.sibling,f=pn(v,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,i!==null&&(d=a.deletions,d===null?(a.deletions=[i],a.flags|=16):d.push(i)),a.child=f,a.memoizedState=null,f}function Cc(i,a){return a=mo({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function to(i,a,d,f){return f!==null&&ec(f),Ci(a,i.child,null,d),i=Cc(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function ry(i,a,d,f,g,v,k){if(d)return a.flags&256?(a.flags&=-257,f=jc(Error(s(422))),to(i,a,k,f)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(v=f.fallback,g=a.mode,f=mo({mode:"visible",children:f.children},g,0,null),v=Wn(v,g,k,null),v.flags|=2,f.return=a,v.return=a,f.sibling=v,a.child=f,(a.mode&1)!==0&&Ci(a,i.child,null,k),a.child.memoizedState=Sc(k),a.memoizedState=_c,v);if((a.mode&1)===0)return to(i,a,k,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var D=f.dgst;return f=D,v=Error(s(419)),f=jc(v,f,void 0),to(i,a,k,f)}if(D=(k&i.childLanes)!==0,Dt||D){if(f=ut,f!==null){switch(k&-k){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|k))!==0?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Os(i,g),fs(f,i,g,-1))}return Wc(),f=jc(Error(s(421))),to(i,a,k,f)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=vy.bind(null,i),g._reactRetry=a,null):(i=v.treeContext,Ut=sn(g.nextSibling),$t=a,Ve=!0,cs=null,i!==null&&(Qt[Kt++]=Ls,Qt[Kt++]=Ms,Qt[Kt++]=Ln,Ls=i.id,Ms=i.overflow,Ln=a),a=Cc(a,f.children),a.flags|=4096,a)}function ff(i,a,d){i.lanes|=a;var f=i.alternate;f!==null&&(f.lanes|=a),ic(i.return,a,d)}function Ec(i,a,d,f,g){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:g}:(v.isBackwards=a,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=d,v.tailMode=g)}function pf(i,a,d){var f=a.pendingProps,g=f.revealOrder,v=f.tail;if(St(i,a,f.children,d),f=qe.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&ff(i,d,a);else if(i.tag===19)ff(i,d,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Be(qe,f),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)i=d.alternate,i!==null&&Qa(i)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),Ec(a,!1,g,d,v);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&Qa(i)===null){a.child=g;break}i=g.sibling,g.sibling=d,d=g,g=i}Ec(a,!0,d,null,v);break;case"together":Ec(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function so(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Is(i,a,d){if(i!==null&&(a.dependencies=i.dependencies),Fn|=a.lanes,(d&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(s(153));if(a.child!==null){for(i=a.child,d=pn(i,i.pendingProps),a.child=d,d.return=a;i.sibling!==null;)i=i.sibling,d=d.sibling=pn(i,i.pendingProps),d.return=a;d.sibling=null}return a.child}function ay(i,a,d){switch(a.tag){case 3:df(a),Si();break;case 5:Ch(a);break;case 1:Pt(a.type)&&Ia(a);break;case 4:oc(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,g=a.memoizedProps.value;Be(Ha,f._currentValue),f._currentValue=g;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(Be(qe,qe.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?hf(i,a,d):(Be(qe,qe.current&1),i=Is(i,a,d),i!==null?i.sibling:null);Be(qe,qe.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(i.flags&128)!==0){if(f)return pf(i,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Be(qe,qe.current),f)break;return null;case 22:case 23:return a.lanes=0,of(i,a,d)}return Is(i,a,d)}var mf,Rc,gf,xf;mf=function(i,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Rc=function(){},gf=function(i,a,d,f){var g=i.memoizedProps;if(g!==f){i=a.stateNode,zn(Ns.current);var v=null;switch(d){case"input":g=qt(i,g),f=qt(i,f),v=[];break;case"select":g=Z({},g,{value:void 0}),f=Z({},f,{value:void 0}),v=[];break;case"textarea":g=Cn(i,g),f=Cn(i,f),v=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ma)}ui(d,f);var k;d=null;for(Q in g)if(!f.hasOwnProperty(Q)&&g.hasOwnProperty(Q)&&g[Q]!=null)if(Q==="style"){var D=g[Q];for(k in D)D.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in f){var F=f[Q];if(D=g!=null?g[Q]:void 0,f.hasOwnProperty(Q)&&F!==D&&(F!=null||D!=null))if(Q==="style")if(D){for(k in D)!D.hasOwnProperty(k)||F&&F.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in F)F.hasOwnProperty(k)&&D[k]!==F[k]&&(d||(d={}),d[k]=F[k])}else d||(v||(v=[]),v.push(Q,d)),d=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(v=v||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&$e("scroll",i),v||D===F||(v=[])):(v=v||[]).push(Q,F))}d&&(v=v||[]).push("style",d);var Q=v;(a.updateQueue=Q)&&(a.flags|=4)}},xf=function(i,a,d,f){d!==f&&(a.flags|=4)};function wr(i,a){if(!Ve)switch(i.tailMode){case"hidden":a=i.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function vt(i){var a=i.alternate!==null&&i.alternate.child===i.child,d=0,f=0;if(a)for(var g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=d,a}function oy(i,a,d){var f=a.pendingProps;switch(Gl(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return Pt(a.type)&&za(),vt(a),null;case 3:return f=a.stateNode,Pi(),Ue(Rt),Ue(gt),dc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ua(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cs!==null&&(Bc(cs),cs=null))),Rc(i,a),vt(a),null;case 5:lc(a);var g=zn(vr.current);if(d=a.type,i!==null&&a.stateNode!=null)gf(i,a,d,f,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(s(166));return vt(a),null}if(i=zn(Ns.current),Ua(a)){f=a.stateNode,d=a.type;var v=a.memoizedProps;switch(f[js]=a,f[fr]=v,i=(a.mode&1)!==0,d){case"dialog":$e("cancel",f),$e("close",f);break;case"iframe":case"object":case"embed":$e("load",f);break;case"video":case"audio":for(g=0;g<dr.length;g++)$e(dr[g],f);break;case"source":$e("error",f);break;case"img":case"image":case"link":$e("error",f),$e("load",f);break;case"details":$e("toggle",f);break;case"input":li(f,v),$e("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},$e("invalid",f);break;case"textarea":di(f,v),$e("invalid",f)}ui(d,v),g=null;for(var k in v)if(v.hasOwnProperty(k)){var D=v[k];k==="children"?typeof D=="string"?f.textContent!==D&&(v.suppressHydrationWarning!==!0&&La(f.textContent,D,i),g=["children",D]):typeof D=="number"&&f.textContent!==""+D&&(v.suppressHydrationWarning!==!0&&La(f.textContent,D,i),g=["children",""+D]):o.hasOwnProperty(k)&&D!=null&&k==="onScroll"&&$e("scroll",f)}switch(d){case"input":Vt(f),ci(f,v,!0);break;case"textarea":Vt(f),se(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Ma)}f=g,a.updateQueue=f,f!==null&&(a.flags|=4)}else{k=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=le(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=k.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=k.createElement(d,{is:f.is}):(i=k.createElement(d),d==="select"&&(k=i,f.multiple?k.multiple=!0:f.size&&(k.size=f.size))):i=k.createElementNS(i,d),i[js]=a,i[fr]=f,mf(i,a,!1,!1),a.stateNode=i;e:{switch(k=hi(d,f),d){case"dialog":$e("cancel",i),$e("close",i),g=f;break;case"iframe":case"object":case"embed":$e("load",i),g=f;break;case"video":case"audio":for(g=0;g<dr.length;g++)$e(dr[g],i);g=f;break;case"source":$e("error",i),g=f;break;case"img":case"image":case"link":$e("error",i),$e("load",i),g=f;break;case"details":$e("toggle",i),g=f;break;case"input":li(i,f),g=qt(i,f),$e("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=Z({},f,{value:void 0}),$e("invalid",i);break;case"textarea":di(i,f),g=Cn(i,f),$e("invalid",i);break;default:g=f}ui(d,g),D=g;for(v in D)if(D.hasOwnProperty(v)){var F=D[v];v==="style"?Rn(i,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&as(i,F)):v==="children"?typeof F=="string"?(d!=="textarea"||F!=="")&&vs(i,F):typeof F=="number"&&vs(i,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?F!=null&&v==="onScroll"&&$e("scroll",i):F!=null&&A(i,v,F,k))}switch(d){case"input":Vt(i),ci(i,f,!1);break;case"textarea":Vt(i),se(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ce(f.value));break;case"select":i.multiple=!!f.multiple,v=f.value,v!=null?rs(i,!!f.multiple,v,!1):f.defaultValue!=null&&rs(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Ma)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return vt(a),null;case 6:if(i&&a.stateNode!=null)xf(i,a,i.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(s(166));if(d=zn(vr.current),zn(Ns.current),Ua(a)){if(f=a.stateNode,d=a.memoizedProps,f[js]=a,(v=f.nodeValue!==d)&&(i=$t,i!==null))switch(i.tag){case 3:La(f.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&La(f.nodeValue,d,(i.mode&1)!==0)}v&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[js]=a,a.stateNode=f}return vt(a),null;case 13:if(Ue(qe),f=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ve&&Ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)yh(),Si(),a.flags|=98560,v=!1;else if(v=Ua(a),f!==null&&f.dehydrated!==null){if(i===null){if(!v)throw Error(s(318));if(v=a.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(s(317));v[js]=a}else Si(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),v=!1}else cs!==null&&(Bc(cs),cs=null),v=!0;if(!v)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(qe.current&1)!==0?lt===0&&(lt=3):Wc())),a.updateQueue!==null&&(a.flags|=4),vt(a),null);case 4:return Pi(),Rc(i,a),i===null&&ur(a.stateNode.containerInfo),vt(a),null;case 10:return nc(a.type._context),vt(a),null;case 17:return Pt(a.type)&&za(),vt(a),null;case 19:if(Ue(qe),v=a.memoizedState,v===null)return vt(a),null;if(f=(a.flags&128)!==0,k=v.rendering,k===null)if(f)wr(v,!1);else{if(lt!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(k=Qa(i),k!==null){for(a.flags|=128,wr(v,!1),f=k.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)v=d,i=f,v.flags&=14680066,k=v.alternate,k===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=k.childLanes,v.lanes=k.lanes,v.child=k.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=k.memoizedProps,v.memoizedState=k.memoizedState,v.updateQueue=k.updateQueue,v.type=k.type,i=k.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return Be(qe,qe.current&1|2),a.child}i=i.sibling}v.tail!==null&&Je()>Li&&(a.flags|=128,f=!0,wr(v,!1),a.lanes=4194304)}else{if(!f)if(i=Qa(k),i!==null){if(a.flags|=128,f=!0,d=i.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),wr(v,!0),v.tail===null&&v.tailMode==="hidden"&&!k.alternate&&!Ve)return vt(a),null}else 2*Je()-v.renderingStartTime>Li&&d!==1073741824&&(a.flags|=128,f=!0,wr(v,!1),a.lanes=4194304);v.isBackwards?(k.sibling=a.child,a.child=k):(d=v.last,d!==null?d.sibling=k:a.child=k,v.last=k)}return v.tail!==null?(a=v.tail,v.rendering=a,v.tail=a.sibling,v.renderingStartTime=Je(),a.sibling=null,d=qe.current,Be(qe,f?d&1|2:d&1),a):(vt(a),null);case 22:case 23:return Uc(),f=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Wt&1073741824)!==0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),null;case 24:return null;case 25:return null}throw Error(s(156,a.tag))}function ly(i,a){switch(Gl(a),a.tag){case 1:return Pt(a.type)&&za(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Pi(),Ue(Rt),Ue(gt),dc(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return lc(a),null;case 13:if(Ue(qe),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Si()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Ue(qe),null;case 4:return Pi(),null;case 10:return nc(a.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var no=!1,yt=!1,cy=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ai(i,a){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Xe(i,a,f)}else d.current=null}function Pc(i,a,d){try{d()}catch(f){Xe(i,a,f)}}var vf=!1;function dy(i,a){if(Ul=wa,i=Ku(),Ll(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var g=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{d.nodeType,v.nodeType}catch{d=null;break e}var k=0,D=-1,F=-1,Q=0,te=0,ne=i,ee=null;t:for(;;){for(var de;ne!==d||g!==0&&ne.nodeType!==3||(D=k+g),ne!==v||f!==0&&ne.nodeType!==3||(F=k+f),ne.nodeType===3&&(k+=ne.nodeValue.length),(de=ne.firstChild)!==null;)ee=ne,ne=de;for(;;){if(ne===i)break t;if(ee===d&&++Q===g&&(D=k),ee===v&&++te===f&&(F=k),(de=ne.nextSibling)!==null)break;ne=ee,ee=ne.parentNode}ne=de}d=D===-1||F===-1?null:{start:D,end:F}}else d=null}d=d||{start:0,end:0}}else d=null;for(Wl={focusedElem:i,selectionRange:d},wa=!1,he=a;he!==null;)if(a=he,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,he=i;else for(;he!==null;){a=he;try{var me=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,Ze=me.memoizedState,V=a.stateNode,$=V.getSnapshotBeforeUpdate(a.elementType===a.type?ge:ds(a.type,ge),Ze);V.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var Y=a.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(ae){Xe(a,a.return,ae)}if(i=a.sibling,i!==null){i.return=a.return,he=i;break}he=a.return}return me=vf,vf=!1,me}function kr(i,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var v=g.destroy;g.destroy=void 0,v!==void 0&&Pc(a,d,v)}g=g.next}while(g!==f)}}function io(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&i)===i){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function Dc(i){var a=i.ref;if(a!==null){var d=i.stateNode;switch(i.tag){case 5:i=d;break;default:i=d}typeof a=="function"?a(i):a.current=i}}function yf(i){var a=i.alternate;a!==null&&(i.alternate=null,yf(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[js],delete a[fr],delete a[Yl],delete a[qv],delete a[Yv])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function bf(i){return i.tag===5||i.tag===3||i.tag===4}function jf(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||bf(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ac(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(i,a):d.insertBefore(i,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(i,d)):(a=d,a.appendChild(i)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=Ma));else if(f!==4&&(i=i.child,i!==null))for(Ac(i,a,d),i=i.sibling;i!==null;)Ac(i,a,d),i=i.sibling}function Tc(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.insertBefore(i,a):d.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Tc(i,a,d),i=i.sibling;i!==null;)Tc(i,a,d),i=i.sibling}var ft=null,us=!1;function cn(i,a,d){for(d=d.child;d!==null;)Nf(i,a,d),d=d.sibling}function Nf(i,a,d){if(bs&&typeof bs.onCommitFiberUnmount=="function")try{bs.onCommitFiberUnmount(xa,d)}catch{}switch(d.tag){case 5:yt||Ai(d,a);case 6:var f=ft,g=us;ft=null,cn(i,a,d),ft=f,us=g,ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):ft.removeChild(d.stateNode));break;case 18:ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?ql(i.parentNode,d):i.nodeType===1&&ql(i,d),sr(i)):ql(ft,d.stateNode));break;case 4:f=ft,g=us,ft=d.stateNode.containerInfo,us=!0,cn(i,a,d),ft=f,us=g;break;case 0:case 11:case 14:case 15:if(!yt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var v=g,k=v.destroy;v=v.tag,k!==void 0&&((v&2)!==0||(v&4)!==0)&&Pc(d,a,k),g=g.next}while(g!==f)}cn(i,a,d);break;case 1:if(!yt&&(Ai(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(D){Xe(d,a,D)}cn(i,a,d);break;case 21:cn(i,a,d);break;case 22:d.mode&1?(yt=(f=yt)||d.memoizedState!==null,cn(i,a,d),yt=f):cn(i,a,d);break;default:cn(i,a,d)}}function wf(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new cy),a.forEach(function(f){var g=yy.bind(null,i,f);d.has(f)||(d.add(f),f.then(g,g))})}}function hs(i,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var g=d[f];try{var v=i,k=a,D=k;e:for(;D!==null;){switch(D.tag){case 5:ft=D.stateNode,us=!1;break e;case 3:ft=D.stateNode.containerInfo,us=!0;break e;case 4:ft=D.stateNode.containerInfo,us=!0;break e}D=D.return}if(ft===null)throw Error(s(160));Nf(v,k,g),ft=null,us=!1;var F=g.alternate;F!==null&&(F.return=null),g.return=null}catch(Q){Xe(g,a,Q)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)kf(a,i),a=a.sibling}function kf(i,a){var d=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hs(a,i),ks(i),f&4){try{kr(3,i,i.return),io(3,i)}catch(ge){Xe(i,i.return,ge)}try{kr(5,i,i.return)}catch(ge){Xe(i,i.return,ge)}}break;case 1:hs(a,i),ks(i),f&512&&d!==null&&Ai(d,d.return);break;case 5:if(hs(a,i),ks(i),f&512&&d!==null&&Ai(d,d.return),i.flags&32){var g=i.stateNode;try{vs(g,"")}catch(ge){Xe(i,i.return,ge)}}if(f&4&&(g=i.stateNode,g!=null)){var v=i.memoizedProps,k=d!==null?d.memoizedProps:v,D=i.type,F=i.updateQueue;if(i.updateQueue=null,F!==null)try{D==="input"&&v.type==="radio"&&v.name!=null&&Ks(g,v),hi(D,k);var Q=hi(D,v);for(k=0;k<F.length;k+=2){var te=F[k],ne=F[k+1];te==="style"?Rn(g,ne):te==="dangerouslySetInnerHTML"?as(g,ne):te==="children"?vs(g,ne):A(g,te,ne,Q)}switch(D){case"input":_n(g,v);break;case"textarea":En(g,v);break;case"select":var ee=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?rs(g,!!v.multiple,de,!1):ee!==!!v.multiple&&(v.defaultValue!=null?rs(g,!!v.multiple,v.defaultValue,!0):rs(g,!!v.multiple,v.multiple?[]:"",!1))}g[fr]=v}catch(ge){Xe(i,i.return,ge)}}break;case 6:if(hs(a,i),ks(i),f&4){if(i.stateNode===null)throw Error(s(162));g=i.stateNode,v=i.memoizedProps;try{g.nodeValue=v}catch(ge){Xe(i,i.return,ge)}}break;case 3:if(hs(a,i),ks(i),f&4&&d!==null&&d.memoizedState.isDehydrated)try{sr(a.containerInfo)}catch(ge){Xe(i,i.return,ge)}break;case 4:hs(a,i),ks(i);break;case 13:hs(a,i),ks(i),g=i.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(Oc=Je())),f&4&&wf(i);break;case 22:if(te=d!==null&&d.memoizedState!==null,i.mode&1?(yt=(Q=yt)||te,hs(a,i),yt=Q):hs(a,i),ks(i),f&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!te&&(i.mode&1)!==0)for(he=i,te=i.child;te!==null;){for(ne=he=te;he!==null;){switch(ee=he,de=ee.child,ee.tag){case 0:case 11:case 14:case 15:kr(4,ee,ee.return);break;case 1:Ai(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){f=ee,d=ee.return;try{a=f,me.props=a.memoizedProps,me.state=a.memoizedState,me.componentWillUnmount()}catch(ge){Xe(f,d,ge)}}break;case 5:Ai(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Cf(ne);continue}}de!==null?(de.return=ee,he=de):Cf(ne)}te=te.sibling}e:for(te=null,ne=i;;){if(ne.tag===5){if(te===null){te=ne;try{g=ne.stateNode,Q?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(D=ne.stateNode,F=ne.memoizedProps.style,k=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Et("display",k))}catch(ge){Xe(i,i.return,ge)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=Q?"":ne.memoizedProps}catch(ge){Xe(i,i.return,ge)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===i)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===i)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===i)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:hs(a,i),ks(i),f&4&&wf(i);break;case 21:break;default:hs(a,i),ks(i)}}function ks(i){var a=i.flags;if(a&2){try{e:{for(var d=i.return;d!==null;){if(bf(d)){var f=d;break e}d=d.return}throw Error(s(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(vs(g,""),f.flags&=-33);var v=jf(i);Tc(i,v,g);break;case 3:case 4:var k=f.stateNode.containerInfo,D=jf(i);Ac(i,D,k);break;default:throw Error(s(161))}}catch(F){Xe(i,i.return,F)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function uy(i,a,d){he=i,_f(i)}function _f(i,a,d){for(var f=(i.mode&1)!==0;he!==null;){var g=he,v=g.child;if(g.tag===22&&f){var k=g.memoizedState!==null||no;if(!k){var D=g.alternate,F=D!==null&&D.memoizedState!==null||yt;D=no;var Q=yt;if(no=k,(yt=F)&&!Q)for(he=g;he!==null;)k=he,F=k.child,k.tag===22&&k.memoizedState!==null?Ef(g):F!==null?(F.return=k,he=F):Ef(g);for(;v!==null;)he=v,_f(v),v=v.sibling;he=g,no=D,yt=Q}Sf(i)}else(g.subtreeFlags&8772)!==0&&v!==null?(v.return=g,he=v):Sf(i)}}function Sf(i){for(;he!==null;){var a=he;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:yt||io(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!yt)if(d===null)f.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:ds(a.type,d.memoizedProps);f.componentDidUpdate(g,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=a.updateQueue;v!==null&&Sh(a,v,f);break;case 3:var k=a.updateQueue;if(k!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}Sh(a,k,d)}break;case 5:var D=a.stateNode;if(d===null&&a.flags&4){d=D;var F=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&d.focus();break;case"img":F.src&&(d.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var Q=a.alternate;if(Q!==null){var te=Q.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&sr(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}yt||a.flags&512&&Dc(a)}catch(ee){Xe(a,a.return,ee)}}if(a===i){he=null;break}if(d=a.sibling,d!==null){d.return=a.return,he=d;break}he=a.return}}function Cf(i){for(;he!==null;){var a=he;if(a===i){he=null;break}var d=a.sibling;if(d!==null){d.return=a.return,he=d;break}he=a.return}}function Ef(i){for(;he!==null;){var a=he;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{io(4,a)}catch(F){Xe(a,d,F)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var g=a.return;try{f.componentDidMount()}catch(F){Xe(a,g,F)}}var v=a.return;try{Dc(a)}catch(F){Xe(a,v,F)}break;case 5:var k=a.return;try{Dc(a)}catch(F){Xe(a,k,F)}}}catch(F){Xe(a,a.return,F)}if(a===i){he=null;break}var D=a.sibling;if(D!==null){D.return=a.return,he=D;break}he=a.return}}var hy=Math.ceil,ro=U.ReactCurrentDispatcher,Lc=U.ReactCurrentOwner,Jt=U.ReactCurrentBatchConfig,De=0,ut=null,nt=null,pt=0,Wt=0,Ti=nn(0),lt=0,_r=null,Fn=0,ao=0,Mc=0,Sr=null,At=null,Oc=0,Li=1/0,Fs=null,oo=!1,zc=null,dn=null,lo=!1,un=null,co=0,Cr=0,Ic=null,uo=-1,ho=0;function Ct(){return(De&6)!==0?Je():uo!==-1?uo:uo=Je()}function hn(i){return(i.mode&1)===0?1:(De&2)!==0&&pt!==0?pt&-pt:Kv.transition!==null?(ho===0&&(ho=bu()),ho):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Ru(i.type)),i)}function fs(i,a,d,f){if(50<Cr)throw Cr=0,Ic=null,Error(s(185));Gi(i,d,f),((De&2)===0||i!==ut)&&(i===ut&&((De&2)===0&&(ao|=d),lt===4&&fn(i,pt)),Tt(i,f),d===1&&De===0&&(a.mode&1)===0&&(Li=Je()+500,Fa&&an()))}function Tt(i,a){var d=i.callbackNode;Kx(i,a);var f=ba(i,i===ut?pt:0);if(f===0)d!==null&&xu(d),i.callbackNode=null,i.callbackPriority=0;else if(a=f&-f,i.callbackPriority!==a){if(d!=null&&xu(d),a===1)i.tag===0?Qv(Pf.bind(null,i)):ph(Pf.bind(null,i)),Hv(function(){(De&6)===0&&an()}),d=null;else{switch(ju(f)){case 1:d=xl;break;case 4:d=vu;break;case 16:d=ga;break;case 536870912:d=yu;break;default:d=ga}d=If(d,Rf.bind(null,i))}i.callbackPriority=a,i.callbackNode=d}}function Rf(i,a){if(uo=-1,ho=0,(De&6)!==0)throw Error(s(327));var d=i.callbackNode;if(Mi()&&i.callbackNode!==d)return null;var f=ba(i,i===ut?pt:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||a)a=fo(i,f);else{a=f;var g=De;De|=2;var v=Af();(ut!==i||pt!==a)&&(Fs=null,Li=Je()+500,$n(i,a));do try{my();break}catch(D){Df(i,D)}while(!0);sc(),ro.current=v,De=g,nt!==null?a=0:(ut=null,pt=0,a=lt)}if(a!==0){if(a===2&&(g=vl(i),g!==0&&(f=g,a=Fc(i,g))),a===1)throw d=_r,$n(i,0),fn(i,f),Tt(i,Je()),d;if(a===6)fn(i,f);else{if(g=i.current.alternate,(f&30)===0&&!fy(g)&&(a=fo(i,f),a===2&&(v=vl(i),v!==0&&(f=v,a=Fc(i,v))),a===1))throw d=_r,$n(i,0),fn(i,f),Tt(i,Je()),d;switch(i.finishedWork=g,i.finishedLanes=f,a){case 0:case 1:throw Error(s(345));case 2:Un(i,At,Fs);break;case 3:if(fn(i,f),(f&130023424)===f&&(a=Oc+500-Je(),10<a)){if(ba(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Ct(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Vl(Un.bind(null,i,At,Fs),a);break}Un(i,At,Fs);break;case 4:if(fn(i,f),(f&4194240)===f)break;for(a=i.eventTimes,g=-1;0<f;){var k=31-os(f);v=1<<k,k=a[k],k>g&&(g=k),f&=~v}if(f=g,f=Je()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*hy(f/1960))-f,10<f){i.timeoutHandle=Vl(Un.bind(null,i,At,Fs),f);break}Un(i,At,Fs);break;case 5:Un(i,At,Fs);break;default:throw Error(s(329))}}}return Tt(i,Je()),i.callbackNode===d?Rf.bind(null,i):null}function Fc(i,a){var d=Sr;return i.current.memoizedState.isDehydrated&&($n(i,a).flags|=256),i=fo(i,a),i!==2&&(a=At,At=d,a!==null&&Bc(a)),i}function Bc(i){At===null?At=i:At.push.apply(At,i)}function fy(i){for(var a=i;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var g=d[f],v=g.getSnapshot;g=g.value;try{if(!ls(v(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fn(i,a){for(a&=~Mc,a&=~ao,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var d=31-os(a),f=1<<d;i[d]=-1,a&=~f}}function Pf(i){if((De&6)!==0)throw Error(s(327));Mi();var a=ba(i,0);if((a&1)===0)return Tt(i,Je()),null;var d=fo(i,a);if(i.tag!==0&&d===2){var f=vl(i);f!==0&&(a=f,d=Fc(i,f))}if(d===1)throw d=_r,$n(i,0),fn(i,a),Tt(i,Je()),d;if(d===6)throw Error(s(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Un(i,At,Fs),Tt(i,Je()),null}function $c(i,a){var d=De;De|=1;try{return i(a)}finally{De=d,De===0&&(Li=Je()+500,Fa&&an())}}function Bn(i){un!==null&&un.tag===0&&(De&6)===0&&Mi();var a=De;De|=1;var d=Jt.transition,f=ze;try{if(Jt.transition=null,ze=1,i)return i()}finally{ze=f,Jt.transition=d,De=a,(De&6)===0&&an()}}function Uc(){Wt=Ti.current,Ue(Ti)}function $n(i,a){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,Wv(d)),nt!==null)for(d=nt.return;d!==null;){var f=d;switch(Gl(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&za();break;case 3:Pi(),Ue(Rt),Ue(gt),dc();break;case 5:lc(f);break;case 4:Pi();break;case 13:Ue(qe);break;case 19:Ue(qe);break;case 10:nc(f.type._context);break;case 22:case 23:Uc()}d=d.return}if(ut=i,nt=i=pn(i.current,null),pt=Wt=a,lt=0,_r=null,Mc=ao=Fn=0,At=Sr=null,On!==null){for(a=0;a<On.length;a++)if(d=On[a],f=d.interleaved,f!==null){d.interleaved=null;var g=f.next,v=d.pending;if(v!==null){var k=v.next;v.next=g,f.next=k}d.pending=f}On=null}return i}function Df(i,a){do{var d=nt;try{if(sc(),Ka.current=Za,Xa){for(var f=Ye.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Xa=!1}if(In=0,dt=ot=Ye=null,yr=!1,br=0,Lc.current=null,d===null||d.return===null){lt=1,_r=a,nt=null;break}e:{var v=i,k=d.return,D=d,F=a;if(a=pt,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,te=D,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=tf(k);if(de!==null){de.flags&=-257,sf(de,k,D,v,a),de.mode&1&&ef(v,Q,a),a=de,F=Q;var me=a.updateQueue;if(me===null){var ge=new Set;ge.add(F),a.updateQueue=ge}else me.add(F);break e}else{if((a&1)===0){ef(v,Q,a),Wc();break e}F=Error(s(426))}}else if(Ve&&D.mode&1){var Ze=tf(k);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),sf(Ze,k,D,v,a),ec(Di(F,D));break e}}v=F=Di(F,D),lt!==4&&(lt=2),Sr===null?Sr=[v]:Sr.push(v),v=k;do{switch(v.tag){case 3:v.flags|=65536,a&=-a,v.lanes|=a;var V=Jh(v,F,a);_h(v,V);break e;case 1:D=F;var $=v.type,Y=v.stateNode;if((v.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(dn===null||!dn.has(Y)))){v.flags|=65536,a&=-a,v.lanes|=a;var ae=Zh(v,D,a);_h(v,ae);break e}}v=v.return}while(v!==null)}Lf(d)}catch(ve){a=ve,nt===d&&d!==null&&(nt=d=d.return);continue}break}while(!0)}function Af(){var i=ro.current;return ro.current=Za,i===null?Za:i}function Wc(){(lt===0||lt===3||lt===2)&&(lt=4),ut===null||(Fn&268435455)===0&&(ao&268435455)===0||fn(ut,pt)}function fo(i,a){var d=De;De|=2;var f=Af();(ut!==i||pt!==a)&&(Fs=null,$n(i,a));do try{py();break}catch(g){Df(i,g)}while(!0);if(sc(),De=d,ro.current=f,nt!==null)throw Error(s(261));return ut=null,pt=0,lt}function py(){for(;nt!==null;)Tf(nt)}function my(){for(;nt!==null&&!Bx();)Tf(nt)}function Tf(i){var a=zf(i.alternate,i,Wt);i.memoizedProps=i.pendingProps,a===null?Lf(i):nt=a,Lc.current=null}function Lf(i){var a=i;do{var d=a.alternate;if(i=a.return,(a.flags&32768)===0){if(d=oy(d,a,Wt),d!==null){nt=d;return}}else{if(d=ly(d,a),d!==null){d.flags&=32767,nt=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{lt=6,nt=null;return}}if(a=a.sibling,a!==null){nt=a;return}nt=a=i}while(a!==null);lt===0&&(lt=5)}function Un(i,a,d){var f=ze,g=Jt.transition;try{Jt.transition=null,ze=1,gy(i,a,d,f)}finally{Jt.transition=g,ze=f}return null}function gy(i,a,d,f){do Mi();while(un!==null);if((De&6)!==0)throw Error(s(327));d=i.finishedWork;var g=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(s(177));i.callbackNode=null,i.callbackPriority=0;var v=d.lanes|d.childLanes;if(Xx(i,v),i===ut&&(nt=ut=null,pt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||lo||(lo=!0,If(ga,function(){return Mi(),null})),v=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||v){v=Jt.transition,Jt.transition=null;var k=ze;ze=1;var D=De;De|=4,Lc.current=null,dy(i,d),kf(d,i),Ov(Wl),wa=!!Ul,Wl=Ul=null,i.current=d,uy(d),$x(),De=D,ze=k,Jt.transition=v}else i.current=d;if(lo&&(lo=!1,un=i,co=g),v=i.pendingLanes,v===0&&(dn=null),Hx(d.stateNode),Tt(i,Je()),a!==null)for(f=i.onRecoverableError,d=0;d<a.length;d++)g=a[d],f(g.value,{componentStack:g.stack,digest:g.digest});if(oo)throw oo=!1,i=zc,zc=null,i;return(co&1)!==0&&i.tag!==0&&Mi(),v=i.pendingLanes,(v&1)!==0?i===Ic?Cr++:(Cr=0,Ic=i):Cr=0,an(),null}function Mi(){if(un!==null){var i=ju(co),a=Jt.transition,d=ze;try{if(Jt.transition=null,ze=16>i?16:i,un===null)var f=!1;else{if(i=un,un=null,co=0,(De&6)!==0)throw Error(s(331));var g=De;for(De|=4,he=i.current;he!==null;){var v=he,k=v.child;if((he.flags&16)!==0){var D=v.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Q=D[F];for(he=Q;he!==null;){var te=he;switch(te.tag){case 0:case 11:case 15:kr(8,te,v)}var ne=te.child;if(ne!==null)ne.return=te,he=ne;else for(;he!==null;){te=he;var ee=te.sibling,de=te.return;if(yf(te),te===Q){he=null;break}if(ee!==null){ee.return=de,he=ee;break}he=de}}}var me=v.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var Ze=ge.sibling;ge.sibling=null,ge=Ze}while(ge!==null)}}he=v}}if((v.subtreeFlags&2064)!==0&&k!==null)k.return=v,he=k;else e:for(;he!==null;){if(v=he,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:kr(9,v,v.return)}var V=v.sibling;if(V!==null){V.return=v.return,he=V;break e}he=v.return}}var $=i.current;for(he=$;he!==null;){k=he;var Y=k.child;if((k.subtreeFlags&2064)!==0&&Y!==null)Y.return=k,he=Y;else e:for(k=$;he!==null;){if(D=he,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:io(9,D)}}catch(ve){Xe(D,D.return,ve)}if(D===k){he=null;break e}var ae=D.sibling;if(ae!==null){ae.return=D.return,he=ae;break e}he=D.return}}if(De=g,an(),bs&&typeof bs.onPostCommitFiberRoot=="function")try{bs.onPostCommitFiberRoot(xa,i)}catch{}f=!0}return f}finally{ze=d,Jt.transition=a}}return!1}function Mf(i,a,d){a=Di(d,a),a=Jh(i,a,1),i=ln(i,a,1),a=Ct(),i!==null&&(Gi(i,1,a),Tt(i,a))}function Xe(i,a,d){if(i.tag===3)Mf(i,i,d);else for(;a!==null;){if(a.tag===3){Mf(a,i,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(dn===null||!dn.has(f))){i=Di(d,i),i=Zh(a,i,1),a=ln(a,i,1),i=Ct(),a!==null&&(Gi(a,1,i),Tt(a,i));break}}a=a.return}}function xy(i,a,d){var f=i.pingCache;f!==null&&f.delete(a),a=Ct(),i.pingedLanes|=i.suspendedLanes&d,ut===i&&(pt&d)===d&&(lt===4||lt===3&&(pt&130023424)===pt&&500>Je()-Oc?$n(i,0):Mc|=d),Tt(i,a)}function Of(i,a){a===0&&((i.mode&1)===0?a=1:(a=ya,ya<<=1,(ya&130023424)===0&&(ya=4194304)));var d=Ct();i=Os(i,a),i!==null&&(Gi(i,a,d),Tt(i,d))}function vy(i){var a=i.memoizedState,d=0;a!==null&&(d=a.retryLane),Of(i,d)}function yy(i,a){var d=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(d=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(s(314))}f!==null&&f.delete(a),Of(i,d)}var zf;zf=function(i,a,d){if(i!==null)if(i.memoizedProps!==a.pendingProps||Rt.current)Dt=!0;else{if((i.lanes&d)===0&&(a.flags&128)===0)return Dt=!1,ay(i,a,d);Dt=(i.flags&131072)!==0}else Dt=!1,Ve&&(a.flags&1048576)!==0&&mh(a,$a,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;so(i,a),i=a.pendingProps;var g=wi(a,gt.current);Ri(a,d),g=fc(null,a,f,i,g,d);var v=pc();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Pt(f)?(v=!0,Ia(a)):v=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,ac(a),g.updater=eo,a.stateNode=g,g._reactInternals=a,bc(a,f,i,d),a=kc(null,a,f,!0,v,d)):(a.tag=0,Ve&&v&&Xl(a),St(null,a,g,d),a=a.child),a;case 16:f=a.elementType;e:{switch(so(i,a),i=a.pendingProps,g=f._init,f=g(f._payload),a.type=f,g=a.tag=jy(f),i=ds(f,i),g){case 0:a=wc(null,a,f,i,d);break e;case 1:a=cf(null,a,f,i,d);break e;case 11:a=nf(null,a,f,i,d);break e;case 14:a=rf(null,a,f,ds(f.type,i),d);break e}throw Error(s(306,f,""))}return a;case 0:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),wc(i,a,f,g,d);case 1:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),cf(i,a,f,g,d);case 3:e:{if(df(a),i===null)throw Error(s(387));f=a.pendingProps,v=a.memoizedState,g=v.element,kh(i,a),Ya(a,f,null,d);var k=a.memoizedState;if(f=k.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},a.updateQueue.baseState=v,a.memoizedState=v,a.flags&256){g=Di(Error(s(423)),a),a=uf(i,a,f,d,g);break e}else if(f!==g){g=Di(Error(s(424)),a),a=uf(i,a,f,d,g);break e}else for(Ut=sn(a.stateNode.containerInfo.firstChild),$t=a,Ve=!0,cs=null,d=Nh(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Si(),f===g){a=Is(i,a,d);break e}St(i,a,f,d)}a=a.child}return a;case 5:return Ch(a),i===null&&Zl(a),f=a.type,g=a.pendingProps,v=i!==null?i.memoizedProps:null,k=g.children,Hl(f,g)?k=null:v!==null&&Hl(f,v)&&(a.flags|=32),lf(i,a),St(i,a,k,d),a.child;case 6:return i===null&&Zl(a),null;case 13:return hf(i,a,d);case 4:return oc(a,a.stateNode.containerInfo),f=a.pendingProps,i===null?a.child=Ci(a,null,f,d):St(i,a,f,d),a.child;case 11:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),nf(i,a,f,g,d);case 7:return St(i,a,a.pendingProps,d),a.child;case 8:return St(i,a,a.pendingProps.children,d),a.child;case 12:return St(i,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,g=a.pendingProps,v=a.memoizedProps,k=g.value,Be(Ha,f._currentValue),f._currentValue=k,v!==null)if(ls(v.value,k)){if(v.children===g.children&&!Rt.current){a=Is(i,a,d);break e}}else for(v=a.child,v!==null&&(v.return=a);v!==null;){var D=v.dependencies;if(D!==null){k=v.child;for(var F=D.firstContext;F!==null;){if(F.context===f){if(v.tag===1){F=zs(-1,d&-d),F.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var te=Q.pending;te===null?F.next=F:(F.next=te.next,te.next=F),Q.pending=F}}v.lanes|=d,F=v.alternate,F!==null&&(F.lanes|=d),ic(v.return,d,a),D.lanes|=d;break}F=F.next}}else if(v.tag===10)k=v.type===a.type?null:v.child;else if(v.tag===18){if(k=v.return,k===null)throw Error(s(341));k.lanes|=d,D=k.alternate,D!==null&&(D.lanes|=d),ic(k,d,a),k=v.sibling}else k=v.child;if(k!==null)k.return=v;else for(k=v;k!==null;){if(k===a){k=null;break}if(v=k.sibling,v!==null){v.return=k.return,k=v;break}k=k.return}v=k}St(i,a,g.children,d),a=a.child}return a;case 9:return g=a.type,f=a.pendingProps.children,Ri(a,d),g=Xt(g),f=f(g),a.flags|=1,St(i,a,f,d),a.child;case 14:return f=a.type,g=ds(f,a.pendingProps),g=ds(f.type,g),rf(i,a,f,g,d);case 15:return af(i,a,a.type,a.pendingProps,d);case 17:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),so(i,a),a.tag=1,Pt(f)?(i=!0,Ia(a)):i=!1,Ri(a,d),Xh(a,f,g),bc(a,f,g,d),kc(null,a,f,!0,i,d);case 19:return pf(i,a,d);case 22:return of(i,a,d)}throw Error(s(156,a.tag))};function If(i,a){return gu(i,a)}function by(i,a,d,f){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(i,a,d,f){return new by(i,a,d,f)}function Hc(i){return i=i.prototype,!(!i||!i.isReactComponent)}function jy(i){if(typeof i=="function")return Hc(i)?1:0;if(i!=null){if(i=i.$$typeof,i===C)return 11;if(i===ie)return 14}return 2}function pn(i,a){var d=i.alternate;return d===null?(d=Zt(i.tag,a,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=a,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,a=i.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function po(i,a,d,f,g,v){var k=2;if(f=i,typeof i=="function")Hc(i)&&(k=1);else if(typeof i=="string")k=5;else e:switch(i){case O:return Wn(d.children,g,v,a);case T:k=8,g|=8;break;case L:return i=Zt(12,d,a,g|2),i.elementType=L,i.lanes=v,i;case I:return i=Zt(13,d,a,g),i.elementType=I,i.lanes=v,i;case W:return i=Zt(19,d,a,g),i.elementType=W,i.lanes=v,i;case J:return mo(d,g,v,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:k=10;break e;case M:k=9;break e;case C:k=11;break e;case ie:k=14;break e;case R:k=16,f=null;break e}throw Error(s(130,i==null?i:typeof i,""))}return a=Zt(k,d,a,g),a.elementType=i,a.type=f,a.lanes=v,a}function Wn(i,a,d,f){return i=Zt(7,i,f,a),i.lanes=d,i}function mo(i,a,d,f){return i=Zt(22,i,f,a),i.elementType=J,i.lanes=d,i.stateNode={isHidden:!1},i}function Vc(i,a,d){return i=Zt(6,i,null,a),i.lanes=d,i}function qc(i,a,d){return a=Zt(4,i.children!==null?i.children:[],i.key,a),a.lanes=d,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function Ny(i,a,d,f,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Yc(i,a,d,f,g,v,k,D,F){return i=new Ny(i,a,d,D,F),a===1?(a=1,v===!0&&(a|=8)):a=0,v=Zt(3,null,null,a),i.current=v,v.stateNode=i,v.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(v),i}function wy(i,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:f==null?null:""+f,children:i,containerInfo:a,implementation:d}}function Ff(i){if(!i)return rn;i=i._reactInternals;e:{if(Dn(i)!==i||i.tag!==1)throw Error(s(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(s(171))}if(i.tag===1){var d=i.type;if(Pt(d))return hh(i,d,a)}return a}function Bf(i,a,d,f,g,v,k,D,F){return i=Yc(d,f,!0,i,g,v,k,D,F),i.context=Ff(null),d=i.current,f=Ct(),g=hn(d),v=zs(f,g),v.callback=a??null,ln(d,v,g),i.current.lanes=g,Gi(i,g,f),Tt(i,f),i}function go(i,a,d,f){var g=a.current,v=Ct(),k=hn(g);return d=Ff(d),a.context===null?a.context=d:a.pendingContext=d,a=zs(v,k),a.payload={element:i},f=f===void 0?null:f,f!==null&&(a.callback=f),i=ln(g,a,k),i!==null&&(fs(i,g,k,v),qa(i,g,k)),k}function xo(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function $f(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<a?d:a}}function Qc(i,a){$f(i,a),(i=i.alternate)&&$f(i,a)}function ky(){return null}var Uf=typeof reportError=="function"?reportError:function(i){console.error(i)};function Kc(i){this._internalRoot=i}vo.prototype.render=Kc.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(s(409));go(i,a,null,null)},vo.prototype.unmount=Kc.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Bn(function(){go(null,i,null,null)}),a[As]=null}};function vo(i){this._internalRoot=i}vo.prototype.unstable_scheduleHydration=function(i){if(i){var a=ku();i={blockedOn:null,target:i,priority:a};for(var d=0;d<Zs.length&&a!==0&&a<Zs[d].priority;d++);Zs.splice(d,0,i),d===0&&Cu(i)}};function Xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function yo(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Wf(){}function _y(i,a,d,f,g){if(g){if(typeof f=="function"){var v=f;f=function(){var Q=xo(k);v.call(Q)}}var k=Bf(a,f,i,0,null,!1,!1,"",Wf);return i._reactRootContainer=k,i[As]=k.current,ur(i.nodeType===8?i.parentNode:i),Bn(),k}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var D=f;f=function(){var Q=xo(F);D.call(Q)}}var F=Yc(i,0,!1,null,null,!1,!1,"",Wf);return i._reactRootContainer=F,i[As]=F.current,ur(i.nodeType===8?i.parentNode:i),Bn(function(){go(a,F,d,f)}),F}function bo(i,a,d,f,g){var v=d._reactRootContainer;if(v){var k=v;if(typeof g=="function"){var D=g;g=function(){var F=xo(k);D.call(F)}}go(a,k,i,g)}else k=_y(d,a,i,g,f);return xo(k)}Nu=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var d=Xi(a.pendingLanes);d!==0&&(bl(a,d|1),Tt(a,Je()),(De&6)===0&&(Li=Je()+500,an()))}break;case 13:Bn(function(){var f=Os(i,1);if(f!==null){var g=Ct();fs(f,i,1,g)}}),Qc(i,1)}},jl=function(i){if(i.tag===13){var a=Os(i,134217728);if(a!==null){var d=Ct();fs(a,i,134217728,d)}Qc(i,134217728)}},wu=function(i){if(i.tag===13){var a=hn(i),d=Os(i,a);if(d!==null){var f=Ct();fs(d,i,a,f)}Qc(i,a)}},ku=function(){return ze},_u=function(i,a){var d=ze;try{return ze=i,a()}finally{ze=d}},ue=function(i,a,d){switch(a){case"input":if(_n(i,d),a=d.name,d.type==="radio"&&a!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==i&&f.form===i.form){var g=Oa(f);if(!g)throw Error(s(90));xs(f),_n(f,g)}}}break;case"textarea":En(i,d);break;case"select":a=d.value,a!=null&&rs(i,!!d.multiple,a,!1)}},Ds=$c,Ft=Bn;var Sy={usingClientEntryPoint:!1,Events:[pr,ji,Oa,qi,Pn,$c]},Er={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cy={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=pu(i),i===null?null:i.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jo.isDisabled&&jo.supportsFiber)try{xa=jo.inject(Cy),bs=jo}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy,Lt.createPortal=function(i,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(a))throw Error(s(200));return wy(i,a,null,d)},Lt.createRoot=function(i,a){if(!Xc(i))throw Error(s(299));var d=!1,f="",g=Uf;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Yc(i,1,!1,null,null,d,!1,f,g),i[As]=a.current,ur(i.nodeType===8?i.parentNode:i),new Kc(a)},Lt.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=pu(a),i=i===null?null:i.stateNode,i},Lt.flushSync=function(i){return Bn(i)},Lt.hydrate=function(i,a,d){if(!yo(a))throw Error(s(200));return bo(null,i,a,!0,d)},Lt.hydrateRoot=function(i,a,d){if(!Xc(i))throw Error(s(405));var f=d!=null&&d.hydratedSources||null,g=!1,v="",k=Uf;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(v=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),a=Bf(a,null,i,1,d??null,g,!1,v,k),i[As]=a.current,ur(i),f)for(i=0;i<f.length;i++)d=f[i],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new vo(a)},Lt.render=function(i,a,d){if(!yo(a))throw Error(s(200));return bo(null,i,a,!1,d)},Lt.unmountComponentAtNode=function(i){if(!yo(i))throw Error(s(40));return i._reactRootContainer?(Bn(function(){bo(null,null,i,!1,function(){i._reactRootContainer=null,i[As]=null})}),!0):!1},Lt.unstable_batchedUpdates=$c,Lt.unstable_renderSubtreeIntoContainer=function(i,a,d,f){if(!yo(d))throw Error(s(200));if(i==null||i._reactInternals===void 0)throw Error(s(38));return bo(i,a,d,!1,f)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var Gf;function Jm(){if(Gf)return Zc.exports;Gf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Zc.exports=Iy(),Zc.exports}var Jf;function Fy(){if(Jf)return No;Jf=1;var t=Jm();return No.createRoot=t.createRoot,No.hydrateRoot=t.hydrateRoot,No}var By=Fy();const $y=Xm(By);Jm();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Qr.apply(this,arguments)}var xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xn||(xn={}));const Zf="popstate";function Uy(t){t===void 0&&(t={});function e(r,o){let{pathname:l,search:c,hash:u}=r.location;return wd("",{pathname:l,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(r,o){return typeof o=="string"?o:Vo(o)}return Hy(e,s,null,t)}function rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ud(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Wy(){return Math.random().toString(36).substr(2,8)}function ep(t,e){return{usr:t.state,key:t.key,idx:e}}function wd(t,e,s,r){return s===void 0&&(s=null),Qr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wi(e):e,{state:s,key:e&&e.key||r||Wy()})}function Vo(t){let{pathname:e="/",search:s="",hash:r=""}=t;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wi(t){let e={};if(t){let s=t.indexOf("#");s>=0&&(e.hash=t.substr(s),t=t.substr(0,s));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hy(t,e,s,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,c=o.history,u=xn.Pop,h=null,p=m();p==null&&(p=0,c.replaceState(Qr({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function x(){u=xn.Pop;let y=m(),_=y==null?null:y-p;p=y,h&&h({action:u,location:j.location,delta:_})}function N(y,_){u=xn.Push;let E=wd(j.location,y,_);p=m()+1;let A=ep(E,p),U=j.createHref(E);try{c.pushState(A,"",U)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(U)}l&&h&&h({action:u,location:j.location,delta:1})}function w(y,_){u=xn.Replace;let E=wd(j.location,y,_);p=m();let A=ep(E,p),U=j.createHref(E);c.replaceState(A,"",U),l&&h&&h({action:u,location:j.location,delta:0})}function b(y){let _=o.location.origin!=="null"?o.location.origin:o.location.href,E=typeof y=="string"?y:Vo(y);return E=E.replace(/ $/,"%20"),rt(_,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,_)}let j={get action(){return u},get location(){return t(o,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Zf,x),h=y,()=>{o.removeEventListener(Zf,x),h=null}},createHref(y){return e(o,y)},createURL:b,encodeLocation(y){let _=b(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:N,replace:w,go(y){return c.go(y)}};return j}var tp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(tp||(tp={}));function Vy(t,e,s){return s===void 0&&(s="/"),qy(t,e,s)}function qy(t,e,s,r){let o=typeof e=="string"?Wi(e):e,l=Wd(o.pathname||"/",s);if(l==null)return null;let c=Zm(t);Yy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=rb(l);u=sb(c[h],p)}return u}function Zm(t,e,s,r){e===void 0&&(e=[]),s===void 0&&(s=[]),r===void 0&&(r="");let o=(l,c,u)=>{let h={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(rt(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=jn([r,h.relativePath]),m=s.concat(h);l.children&&l.children.length>0&&(rt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Zm(l.children,e,m,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:eb(p,l.index),routesMeta:m})};return t.forEach((l,c)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))o(l,c);else for(let h of eg(l.path))o(l,c,h)}),e}function eg(t){let e=t.split("/");if(e.length===0)return[];let[s,...r]=e,o=s.endsWith("?"),l=s.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let c=eg(r.join("/")),u=[];return u.push(...c.map(h=>h===""?l:[l,h].join("/"))),o&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function Yy(t){t.sort((e,s)=>e.score!==s.score?s.score-e.score:tb(e.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}const Qy=/^:[\w-]+$/,Ky=3,Xy=2,Gy=1,Jy=10,Zy=-2,sp=t=>t==="*";function eb(t,e){let s=t.split("/"),r=s.length;return s.some(sp)&&(r+=Zy),e&&(r+=Xy),s.filter(o=>!sp(o)).reduce((o,l)=>o+(Qy.test(l)?Ky:l===""?Gy:Jy),r)}function tb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function sb(t,e,s){let{routesMeta:r}=t,o={},l="/",c=[];for(let u=0;u<r.length;++u){let h=r[u],p=u===r.length-1,m=l==="/"?e:e.slice(l.length)||"/",x=nb({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),N=h.route;if(!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:jn([l,x.pathname]),pathnameBase:db(jn([l,x.pathnameBase])),route:N}),x.pathnameBase!=="/"&&(l=jn([l,x.pathnameBase]))}return c}function nb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,r]=ib(t.path,t.caseSensitive,t.end),o=e.match(s);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:r.reduce((p,m,x)=>{let{paramName:N,isOptional:w}=m;if(N==="*"){let j=u[x]||"";c=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const b=u[x];return w&&!b?p[N]=void 0:p[N]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:t}}function ib(t,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),Ud(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(r.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function rb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ud(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,r=t.charAt(s);return r&&r!=="/"?null:t.slice(s)||"/"}const ab=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ob=t=>ab.test(t);function lb(t,e){e===void 0&&(e="/");let{pathname:s,search:r="",hash:o=""}=typeof t=="string"?Wi(t):t,l;if(s)if(ob(s))l=s;else{if(s.includes("//")){let c=s;s=s.replace(/\/\/+/g,"/"),Ud(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+s))}s.startsWith("/")?l=np(s.substring(1),"/"):l=np(s,e)}else l=e;return{pathname:l,search:ub(r),hash:hb(o)}}function np(t,e){let s=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function sd(t,e,s,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cb(t){return t.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function tg(t,e){let s=cb(t);return e?s.map((r,o)=>o===s.length-1?r.pathname:r.pathnameBase):s.map(r=>r.pathnameBase)}function sg(t,e,s,r){r===void 0&&(r=!1);let o;typeof t=="string"?o=Wi(t):(o=Qr({},t),rt(!o.pathname||!o.pathname.includes("?"),sd("?","pathname","search",o)),rt(!o.pathname||!o.pathname.includes("#"),sd("#","pathname","hash",o)),rt(!o.search||!o.search.includes("#"),sd("#","search","hash",o)));let l=t===""||o.pathname==="",c=l?"/":o.pathname,u;if(c==null)u=s;else{let x=e.length-1;if(!r&&c.startsWith("..")){let N=c.split("/");for(;N[0]==="..";)N.shift(),x-=1;o.pathname=N.join("/")}u=x>=0?e[x]:"/"}let h=lb(o,u),p=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),db=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ub=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function fb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ng=["post","put","patch","delete"];new Set(ng);const pb=["get",...ng];new Set(pb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Kr.apply(this,arguments)}const Hd=S.createContext(null),mb=S.createContext(null),ai=S.createContext(null),nl=S.createContext(null),kn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),ig=S.createContext(null);function gb(t,e){let{relative:s}=e===void 0?{}:e;ia()||rt(!1);let{basename:r,navigator:o}=S.useContext(ai),{hash:l,pathname:c,search:u}=og(t,{relative:s}),h=c;return r!=="/"&&(h=c==="/"?r:jn([r,c])),o.createHref({pathname:h,search:u,hash:l})}function ia(){return S.useContext(nl)!=null}function ra(){return ia()||rt(!1),S.useContext(nl).location}function rg(t){S.useContext(ai).static||S.useLayoutEffect(t)}function Qs(){let{isDataRoute:t}=S.useContext(kn);return t?Rb():xb()}function xb(){ia()||rt(!1);let t=S.useContext(Hd),{basename:e,future:s,navigator:r}=S.useContext(ai),{matches:o}=S.useContext(kn),{pathname:l}=ra(),c=JSON.stringify(tg(o,s.v7_relativeSplatPath)),u=S.useRef(!1);return rg(()=>{u.current=!0}),S.useCallback(function(p,m){if(m===void 0&&(m={}),!u.current)return;if(typeof p=="number"){r.go(p);return}let x=sg(p,JSON.parse(c),l,m.relative==="path");t==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:jn([e,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[e,r,c,l,t])}function ag(){let{matches:t}=S.useContext(kn),e=t[t.length-1];return e?e.params:{}}function og(t,e){let{relative:s}=e===void 0?{}:e,{future:r}=S.useContext(ai),{matches:o}=S.useContext(kn),{pathname:l}=ra(),c=JSON.stringify(tg(o,r.v7_relativeSplatPath));return S.useMemo(()=>sg(t,JSON.parse(c),l,s==="path"),[t,c,l,s])}function vb(t,e){return yb(t,e)}function yb(t,e,s,r){ia()||rt(!1);let{navigator:o}=S.useContext(ai),{matches:l}=S.useContext(kn),c=l[l.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=ra(),m;if(e){var x;let y=typeof e=="string"?Wi(e):e;h==="/"||(x=y.pathname)!=null&&x.startsWith(h)||rt(!1),m=y}else m=p;let N=m.pathname||"/",w=N;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+N.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=Vy(t,{pathname:w}),j=kb(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:jn([h,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:jn([h,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),l,s,r);return e&&j?S.createElement(nl.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:xn.Pop}},j):j}function bb(){let t=Eb(),e=fb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),s?S.createElement("pre",{style:o},s):null,null)}const jb=S.createElement(bb,null);class Nb extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?S.createElement(kn.Provider,{value:this.props.routeContext},S.createElement(ig.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wb(t){let{routeContext:e,match:s,children:r}=t,o=S.useContext(Hd);return o&&o.static&&o.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=s.route.id),S.createElement(kn.Provider,{value:e},r)}function kb(t,e,s,r){var o;if(e===void 0&&(e=[]),s===void 0&&(s=null),r===void 0&&(r=null),t==null){var l;if(!s)return null;if(s.errors)t=s.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let c=t,u=(o=s)==null?void 0:o.errors;if(u!=null){let m=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);m>=0||rt(!1),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(s&&r&&r.v7_partialHydration)for(let m=0;m<c.length;m++){let x=c[m];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=m),x.route.id){let{loaderData:N,errors:w}=s,b=x.route.loader&&N[x.route.id]===void 0&&(!w||w[x.route.id]===void 0);if(x.route.lazy||b){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,x,N)=>{let w,b=!1,j=null,y=null;s&&(w=u&&x.route.id?u[x.route.id]:void 0,j=x.route.errorElement||jb,h&&(p<0&&N===0?(Pb("route-fallback"),b=!0,y=null):p===N&&(b=!0,y=x.route.hydrateFallbackElement||null)));let _=e.concat(c.slice(0,N+1)),E=()=>{let A;return w?A=j:b?A=y:x.route.Component?A=S.createElement(x.route.Component,null):x.route.element?A=x.route.element:A=m,S.createElement(wb,{match:x,routeContext:{outlet:m,matches:_,isDataRoute:s!=null},children:A})};return s&&(x.route.ErrorBoundary||x.route.errorElement||N===0)?S.createElement(Nb,{location:s.location,revalidation:s.revalidation,component:j,error:w,children:E(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):E()},null)}var lg=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(lg||{}),cg=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(cg||{});function _b(t){let e=S.useContext(Hd);return e||rt(!1),e}function Sb(t){let e=S.useContext(mb);return e||rt(!1),e}function Cb(t){let e=S.useContext(kn);return e||rt(!1),e}function dg(t){let e=Cb(),s=e.matches[e.matches.length-1];return s.route.id||rt(!1),s.route.id}function Eb(){var t;let e=S.useContext(ig),s=Sb(),r=dg();return e!==void 0?e:(t=s.errors)==null?void 0:t[r]}function Rb(){let{router:t}=_b(lg.UseNavigateStable),e=dg(cg.UseNavigateStable),s=S.useRef(!1);return rg(()=>{s.current=!0}),S.useCallback(function(o,l){l===void 0&&(l={}),s.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,Kr({fromRouteId:e},l)))},[t,e])}const ip={};function Pb(t,e,s){ip[t]||(ip[t]=!0)}function Db(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qe(t){rt(!1)}function Ab(t){let{basename:e="/",children:s=null,location:r,navigationType:o=xn.Pop,navigator:l,static:c=!1,future:u}=t;ia()&&rt(!1);let h=e.replace(/^\/*/,"/"),p=S.useMemo(()=>({basename:h,navigator:l,static:c,future:Kr({v7_relativeSplatPath:!1},u)}),[h,u,l,c]);typeof r=="string"&&(r=Wi(r));let{pathname:m="/",search:x="",hash:N="",state:w=null,key:b="default"}=r,j=S.useMemo(()=>{let y=Wd(m,h);return y==null?null:{location:{pathname:y,search:x,hash:N,state:w,key:b},navigationType:o}},[h,m,x,N,w,b,o]);return j==null?null:S.createElement(ai.Provider,{value:p},S.createElement(nl.Provider,{children:s,value:j}))}function Tb(t){let{children:e,location:s}=t;return vb(kd(e),s)}new Promise(()=>{});function kd(t,e){e===void 0&&(e=[]);let s=[];return S.Children.forEach(t,(r,o)=>{if(!S.isValidElement(r))return;let l=[...e,o];if(r.type===S.Fragment){s.push.apply(s,kd(r.props.children,l));return}r.type!==Qe&&rt(!1),!r.props.index||!r.props.children||rt(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=kd(r.props.children,l)),s.push(c)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},_d.apply(this,arguments)}function Lb(t,e){if(t==null)return{};var s={},r=Object.keys(t),o,l;for(l=0;l<r.length;l++)o=r[l],!(e.indexOf(o)>=0)&&(s[o]=t[o]);return s}function Mb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ob(t,e){return t.button===0&&(!e||e==="_self")&&!Mb(t)}const zb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ib="6";try{window.__reactRouterVersion=Ib}catch{}const Fb="startTransition",rp=My[Fb];function Bb(t){let{basename:e,children:s,future:r,window:o}=t,l=S.useRef();l.current==null&&(l.current=Uy({window:o,v5Compat:!0}));let c=l.current,[u,h]=S.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},m=S.useCallback(x=>{p&&rp?rp(()=>h(x)):h(x)},[h,p]);return S.useLayoutEffect(()=>c.listen(m),[c,m]),S.useEffect(()=>Db(r),[r]),S.createElement(Ab,{basename:e,children:s,location:u.location,navigationType:u.action,navigator:c,future:r})}const $b=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ub=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=S.forwardRef(function(e,s){let{onClick:r,relative:o,reloadDocument:l,replace:c,state:u,target:h,to:p,preventScrollReset:m,viewTransition:x}=e,N=Lb(e,zb),{basename:w}=S.useContext(ai),b,j=!1;if(typeof p=="string"&&Ub.test(p)&&(b=p,$b))try{let A=new URL(window.location.href),U=p.startsWith("//")?new URL(A.protocol+p):new URL(p),P=Wd(U.pathname,w);U.origin===A.origin&&P!=null?p=P+U.search+U.hash:j=!0}catch{}let y=gb(p,{relative:o}),_=Wb(p,{replace:c,state:u,target:h,preventScrollReset:m,relative:o,viewTransition:x});function E(A){r&&r(A),A.defaultPrevented||_(A)}return S.createElement("a",_d({},N,{href:b||y,onClick:j||l?r:E,ref:s,target:h}))});var ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ap||(ap={}));var op;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(op||(op={}));function Wb(t,e){let{target:s,replace:r,state:o,preventScrollReset:l,relative:c,viewTransition:u}=e===void 0?{}:e,h=Qs(),p=ra(),m=og(t,{relative:c});return S.useCallback(x=>{if(Ob(x,s)){x.preventDefault();let N=r!==void 0?r:Vo(p)===Vo(m);h(t,{replace:N,state:o,preventScrollReset:l,relative:c,viewTransition:u})}},[p,h,m,r,o,s,t,l,c,u])}const Hb={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",detail:"详情",falsePositive:"误报",markFalsePositive:"标记为误报",deleteAlert:"删除告警",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",systemProcesses:"进程信息",systemNetwork:"网络连接",systemDlls:"加载的DLL",systemDrivers:"驱动程序",systemUsers:"本地用户",systemRegistry:"注册表持久化",systemTasks:"计划任务",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",importWithAlertBtn:"导入并分析",withAlert:"(含告警分析)",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成",evtx2csvBtn:"导入 EVTX 并转换 CSV",evtx2csvConverting:"正在转换 EVTX 为 CSV...",evtx2csvDone:"转换完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",explanation:"规则解读",recommendation:"处置建议",realCase:"真实案例",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知",detectorConfig:"检测器配置",detectorConfigDesc:"启用或禁用单个检测器。更改将在下次扫描时生效。"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",general:"通用",database:"数据库",apiServer:"API服务器",collection:"采集",advanced:"高级",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存",generalSettings:"通用设置",configureBasic:"配置基本应用设置",logLevelDesc:"日志记录的最低严重级别",exportDirectory:"导出目录",exportDirectoryDesc:"导出文件的默认目录",autoUpdateRules:"自动更新规则",autoUpdateRulesDesc:"自动更新检测规则",databaseSettings:"数据库设置",configureDatabase:"配置数据库存储和保留策略",databasePathDesc:"SQLite数据库文件路径",eventRetentionDesc:"自动删除早于此时间的事件",maxEventsDesc:"最大存储事件数",apiServerSettings:"API服务器设置",configureApiServer:"配置HTTP API服务器",apiHost:"API主机",apiHostDesc:"API服务器绑定地址",apiPort:"API端口",apiPortDesc:"API服务器端口号",enableCors:"启用CORS",enableCorsDesc:"允许跨域请求",collectionSettings:"采集设置",configureCollection:"配置事件采集行为",enableAlertingDesc:"当规则匹配时生成告警",enableLiveCollectionDesc:"持续监控Windows事件日志",maxImportFileSize:"最大导入文件大小 (MB)",maxImportFileSizeDesc:"导入文件的最大大小",advancedSettings:"高级设置",expertConfig:"专家配置选项",warning:"警告",warningDesc:"高级设置可能影响性能和稳定性。仅在您确定时修改。",parserWorkers:"解析器工作线程",parserWorkersDesc:"并行解析工作线程数",memoryLimit:"内存限制 (MB)",memoryLimitDesc:"事件处理的最大内存使用量",saveChanges:"保存更改",saving:"保存中...",resetDefaults:"重置为默认"},logs:{title:"日志查看",refresh:"刷新",totalEntries:"总条目数",currentPage:"当前页",logFiles:"日志文件",filterByLevel:"按级别筛选",all:"全部",current:"当前",viewer:"日志查看器",noLogs:"暂无日志",timestamp:"时间戳",level:"级别",message:"消息",details:"详情",first:"首页",last:"末页",metrics:"性能",startup:"启动",panic:"崩溃"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据",apply:"应用",clear:"清除"}},Vb={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings",logs:"Logs"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",detail:"Detail",falsePositive:"False Positive",markFalsePositive:"Mark False Positive",deleteAlert:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",systemProcesses:"Process Info",systemNetwork:"Network Connections",systemDlls:"Loaded DLLs",systemDrivers:"Drivers",systemUsers:"Local Users",systemRegistry:"Registry Persistence",systemTasks:"Scheduled Tasks",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",importWithAlertBtn:"Import & Analyze",withAlert:"(with alert analysis)",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed",evtx2csvBtn:"Import & Convert",evtx2csvConverting:"Converting EVTX to CSV...",evtx2csvDone:"Conversion completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",explanation:"Rule Explanation",recommendation:"Recommendation",realCase:"Real Case",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown",detectorConfig:"Detector Config",detectorConfigDesc:"Enable or disable individual detectors. Changes will take effect on next scan."},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",general:"General",database:"Database",apiServer:"API Server",collection:"Collection",advanced:"Advanced",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warning",error:"Error",save:"Save Settings",saved:"Settings saved",generalSettings:"General Settings",configureBasic:"Configure basic application settings",logLevelDesc:"Minimum severity level for logging",exportDirectory:"Export Directory",exportDirectoryDesc:"Default directory for exported files",autoUpdateRules:"Auto Update Rules",autoUpdateRulesDesc:"Automatically update detection rules",databaseSettings:"Database Settings",configureDatabase:"Configure database storage and retention",databasePathDesc:"Path to SQLite database file",eventRetentionDesc:"Automatically delete events older than this",maxEventsDesc:"Maximum number of events to store",apiServerSettings:"API Server Settings",configureApiServer:"Configure the HTTP API server",apiHost:"API Host",apiHostDesc:"Host address to bind the API server",apiPort:"API Port",apiPortDesc:"Port number for the API server",enableCors:"Enable CORS",enableCorsDesc:"Allow cross-origin requests",collectionSettings:"Collection Settings",configureCollection:"Configure event collection behavior",enableAlertingDesc:"Generate alerts when rules match",enableLiveCollectionDesc:"Continuously monitor Windows Event Logs",maxImportFileSize:"Max Import File Size (MB)",maxImportFileSizeDesc:"Maximum size for imported files",advancedSettings:"Advanced Settings",expertConfig:"Expert configuration options",warning:"Warning",warningDesc:"Advanced settings may affect performance and stability. Only modify if you know what you are doing.",parserWorkers:"Parser Workers",parserWorkersDesc:"Number of parallel parsing workers",memoryLimit:"Memory Limit (MB)",memoryLimitDesc:"Maximum memory usage for event processing",saveChanges:"Save Changes",saving:"Saving...",resetDefaults:"Reset to Defaults"},logs:{title:"Log Viewer",refresh:"Refresh",totalEntries:"Total Entries",currentPage:"Current Page",logFiles:"Log Files",filterByLevel:"Filter by Level",all:"All",current:"Current",viewer:"Log Viewer",noLogs:"No logs available",timestamp:"Timestamp",level:"Level",message:"Message",details:"Details",first:"First",last:"Last",metrics:"Metrics",startup:"Startup",panic:"Panic"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data",apply:"Apply",clear:"Clear"}},qb={zh:Hb,en:Vb},ug=S.createContext(void 0);function Yb(t,e){const s=e.split(".");let r=t;for(const o of s)if(r&&typeof r=="object"&&o in r)r=r[o];else return e;return typeof r=="string"?r:e}function Qb({children:t}){const[e,s]=S.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),r=S.useCallback(c=>{s(c),localStorage.setItem("locale",c)},[]),o=S.useCallback(()=>{r(e==="zh"?"en":"zh")},[e,r]),l=S.useCallback((c,u)=>{let h=Yb(qb[e],c);return u&&Object.entries(u).forEach(([p,m])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(m))}),h},[e]);return n.jsx(ug.Provider,{value:{locale:e,t:l,setLocale:r,toggleLocale:o},children:t})}function at(){const t=S.useContext(ug);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function Kb(){const{locale:t,toggleLocale:e}=at();return n.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function hg(t,e){return function(){return t.apply(e,arguments)}}const{toString:Xb}=Object.prototype,{getPrototypeOf:Vd}=Object,{iterator:il,toStringTag:fg}=Symbol,rl=(t=>e=>{const s=Xb.call(e);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),gs=t=>(t=t.toLowerCase(),e=>rl(e)===t),al=t=>e=>typeof e===t,{isArray:Hi}=Array,Bi=al("undefined");function aa(t){return t!==null&&!Bi(t)&&t.constructor!==null&&!Bi(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const pg=gs("ArrayBuffer");function Gb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&pg(t.buffer),e}const Jb=al("string"),zt=al("function"),mg=al("number"),oa=t=>t!==null&&typeof t=="object",Zb=t=>t===!0||t===!1,zo=t=>{if(rl(t)!=="object")return!1;const e=Vd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(fg in t)&&!(il in t)},e0=t=>{if(!oa(t)||aa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},t0=gs("Date"),s0=gs("File"),n0=t=>!!(t&&typeof t.uri<"u"),i0=t=>t&&typeof t.getParts<"u",r0=gs("Blob"),a0=gs("FileList"),o0=t=>oa(t)&&zt(t.pipe);function l0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const lp=l0(),cp=typeof lp.FormData<"u"?lp.FormData:void 0,c0=t=>{let e;return t&&(cp&&t instanceof cp||zt(t.append)&&((e=rl(t))==="formdata"||e==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},d0=gs("URLSearchParams"),[u0,h0,f0,p0]=["ReadableStream","Request","Response","Headers"].map(gs),m0=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function la(t,e,{allOwnKeys:s=!1}={}){if(t===null||typeof t>"u")return;let r,o;if(typeof t!="object"&&(t=[t]),Hi(t))for(r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else{if(aa(t))return;const l=s?Object.getOwnPropertyNames(t):Object.keys(t),c=l.length;let u;for(r=0;r<c;r++)u=l[r],e.call(null,t[u],u,t)}}function gg(t,e){if(aa(t))return null;e=e.toLowerCase();const s=Object.keys(t);let r=s.length,o;for(;r-- >0;)if(o=s[r],e===o.toLowerCase())return o;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,xg=t=>!Bi(t)&&t!==Jn;function Sd(){const{caseless:t,skipUndefined:e}=xg(this)&&this||{},s={},r=(o,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const c=t&&gg(s,l)||l;zo(s[c])&&zo(o)?s[c]=Sd(s[c],o):zo(o)?s[c]=Sd({},o):Hi(o)?s[c]=o.slice():(!e||!Bi(o))&&(s[c]=o)};for(let o=0,l=arguments.length;o<l;o++)arguments[o]&&la(arguments[o],r);return s}const g0=(t,e,s,{allOwnKeys:r}={})=>(la(e,(o,l)=>{s&&zt(o)?Object.defineProperty(t,l,{value:hg(o,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,l,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),x0=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),v0=(t,e,s,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),s&&Object.assign(t.prototype,s)},y0=(t,e,s,r)=>{let o,l,c;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),l=o.length;l-- >0;)c=o[l],(!r||r(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=s!==!1&&Vd(t)}while(t&&(!s||s(t,e))&&t!==Object.prototype);return e},b0=(t,e,s)=>{t=String(t),(s===void 0||s>t.length)&&(s=t.length),s-=e.length;const r=t.indexOf(e,s);return r!==-1&&r===s},j0=t=>{if(!t)return null;if(Hi(t))return t;let e=t.length;if(!mg(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},N0=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Vd(Uint8Array)),w0=(t,e)=>{const r=(t&&t[il]).call(t);let o;for(;(o=r.next())&&!o.done;){const l=o.value;e.call(t,l[0],l[1])}},k0=(t,e)=>{let s;const r=[];for(;(s=t.exec(e))!==null;)r.push(s);return r},_0=gs("HTMLFormElement"),S0=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,r,o){return r.toUpperCase()+o}),dp=(({hasOwnProperty:t})=>(e,s)=>t.call(e,s))(Object.prototype),C0=gs("RegExp"),vg=(t,e)=>{const s=Object.getOwnPropertyDescriptors(t),r={};la(s,(o,l)=>{let c;(c=e(o,l,t))!==!1&&(r[l]=c||o)}),Object.defineProperties(t,r)},E0=t=>{vg(t,(e,s)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const r=t[s];if(zt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},R0=(t,e)=>{const s={},r=o=>{o.forEach(l=>{s[l]=!0})};return Hi(t)?r(t):r(String(t).split(e)),s},P0=()=>{},D0=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function A0(t){return!!(t&&zt(t.append)&&t[fg]==="FormData"&&t[il])}const T0=t=>{const e=new Array(10),s=(r,o)=>{if(oa(r)){if(e.indexOf(r)>=0)return;if(aa(r))return r;if(!("toJSON"in r)){e[o]=r;const l=Hi(r)?[]:{};return la(r,(c,u)=>{const h=s(c,o+1);!Bi(h)&&(l[u]=h)}),e[o]=void 0,l}}return r};return s(t,0)},L0=gs("AsyncFunction"),M0=t=>t&&(oa(t)||zt(t))&&zt(t.then)&&zt(t.catch),yg=((t,e)=>t?setImmediate:e?((s,r)=>(Jn.addEventListener("message",({source:o,data:l})=>{o===Jn&&l===s&&r.length&&r.shift()()},!1),o=>{r.push(o),Jn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",zt(Jn.postMessage)),O0=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||yg,z0=t=>t!=null&&zt(t[il]),K={isArray:Hi,isArrayBuffer:pg,isBuffer:aa,isFormData:c0,isArrayBufferView:Gb,isString:Jb,isNumber:mg,isBoolean:Zb,isObject:oa,isPlainObject:zo,isEmptyObject:e0,isReadableStream:u0,isRequest:h0,isResponse:f0,isHeaders:p0,isUndefined:Bi,isDate:t0,isFile:s0,isReactNativeBlob:n0,isReactNative:i0,isBlob:r0,isRegExp:C0,isFunction:zt,isStream:o0,isURLSearchParams:d0,isTypedArray:N0,isFileList:a0,forEach:la,merge:Sd,extend:g0,trim:m0,stripBOM:x0,inherits:v0,toFlatObject:y0,kindOf:rl,kindOfTest:gs,endsWith:b0,toArray:j0,forEachEntry:w0,matchAll:k0,isHTMLForm:_0,hasOwnProperty:dp,hasOwnProp:dp,reduceDescriptors:vg,freezeMethods:E0,toObjectSet:R0,toCamelCase:S0,noop:P0,toFiniteNumber:D0,findKey:gg,global:Jn,isContextDefined:xg,isSpecCompliantForm:A0,toJSONObject:T0,isAsyncFn:L0,isThenable:M0,setImmediate:yg,asap:O0,isIterable:z0};let we=class bg extends Error{static from(e,s,r,o,l,c){const u=new bg(e.message,s||e.code,r,o,l);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,s,r,o,l){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),r&&(this.config=r),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}};we.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";we.ERR_BAD_OPTION="ERR_BAD_OPTION";we.ECONNABORTED="ECONNABORTED";we.ETIMEDOUT="ETIMEDOUT";we.ERR_NETWORK="ERR_NETWORK";we.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";we.ERR_DEPRECATED="ERR_DEPRECATED";we.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";we.ERR_BAD_REQUEST="ERR_BAD_REQUEST";we.ERR_CANCELED="ERR_CANCELED";we.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";we.ERR_INVALID_URL="ERR_INVALID_URL";const I0=null;function Cd(t){return K.isPlainObject(t)||K.isArray(t)}function jg(t){return K.endsWith(t,"[]")?t.slice(0,-2):t}function nd(t,e,s){return t?t.concat(e).map(function(o,l){return o=jg(o),!s&&l?"["+o+"]":o}).join(s?".":""):e}function F0(t){return K.isArray(t)&&!t.some(Cd)}const B0=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function ol(t,e,s){if(!K.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,s=K.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,y){return!K.isUndefined(y[j])});const r=s.metaTokens,o=s.visitor||m,l=s.dots,c=s.indexes,h=(s.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(o))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(K.isDate(b))return b.toISOString();if(K.isBoolean(b))return b.toString();if(!h&&K.isBlob(b))throw new we("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(b)||K.isTypedArray(b)?h&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,j,y){let _=b;if(K.isReactNative(e)&&K.isReactNativeBlob(b))return e.append(nd(y,j,l),p(b)),!1;if(b&&!y&&typeof b=="object"){if(K.endsWith(j,"{}"))j=r?j:j.slice(0,-2),b=JSON.stringify(b);else if(K.isArray(b)&&F0(b)||(K.isFileList(b)||K.endsWith(j,"[]"))&&(_=K.toArray(b)))return j=jg(j),_.forEach(function(A,U){!(K.isUndefined(A)||A===null)&&e.append(c===!0?nd([j],U,l):c===null?j:j+"[]",p(A))}),!1}return Cd(b)?!0:(e.append(nd(y,j,l),p(b)),!1)}const x=[],N=Object.assign(B0,{defaultVisitor:m,convertValue:p,isVisitable:Cd});function w(b,j){if(!K.isUndefined(b)){if(x.indexOf(b)!==-1)throw Error("Circular reference detected in "+j.join("."));x.push(b),K.forEach(b,function(_,E){(!(K.isUndefined(_)||_===null)&&o.call(e,_,K.isString(E)?E.trim():E,j,N))===!0&&w(_,j?j.concat(E):[E])}),x.pop()}}if(!K.isObject(t))throw new TypeError("data must be an object");return w(t),e}function up(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function qd(t,e){this._pairs=[],t&&ol(t,this,e)}const Ng=qd.prototype;Ng.append=function(e,s){this._pairs.push([e,s])};Ng.toString=function(e){const s=e?function(r){return e.call(this,r,up)}:up;return this._pairs.map(function(o){return s(o[0])+"="+s(o[1])},"").join("&")};function $0(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function wg(t,e,s){if(!e)return t;const r=s&&s.encode||$0,o=K.isFunction(s)?{serialize:s}:s,l=o&&o.serialize;let c;if(l?c=l(e,o):c=K.isURLSearchParams(e)?e.toString():new qd(e,o).toString(r),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class hp{constructor(){this.handlers=[]}use(e,s,r){return this.handlers.push({fulfilled:e,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Yd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},U0=typeof URLSearchParams<"u"?URLSearchParams:qd,W0=typeof FormData<"u"?FormData:null,H0=typeof Blob<"u"?Blob:null,V0={isBrowser:!0,classes:{URLSearchParams:U0,FormData:W0,Blob:H0},protocols:["http","https","file","blob","url","data"]},Qd=typeof window<"u"&&typeof document<"u",Ed=typeof navigator=="object"&&navigator||void 0,q0=Qd&&(!Ed||["ReactNative","NativeScript","NS"].indexOf(Ed.product)<0),Y0=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Q0=Qd&&window.location.href||"http://localhost",K0=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qd,hasStandardBrowserEnv:q0,hasStandardBrowserWebWorkerEnv:Y0,navigator:Ed,origin:Q0},Symbol.toStringTag,{value:"Module"})),jt={...K0,...V0};function X0(t,e){return ol(t,new jt.classes.URLSearchParams,{visitor:function(s,r,o,l){return jt.isNode&&K.isBuffer(s)?(this.append(r,s.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}function G0(t){return K.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function J0(t){const e={},s=Object.keys(t);let r;const o=s.length;let l;for(r=0;r<o;r++)l=s[r],e[l]=t[l];return e}function kg(t){function e(s,r,o,l){let c=s[l++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=l>=s.length;return c=!c&&K.isArray(o)?o.length:c,h?(K.hasOwnProp(o,c)?o[c]=[o[c],r]:o[c]=r,!u):((!o[c]||!K.isObject(o[c]))&&(o[c]=[]),e(s,r,o[c],l)&&K.isArray(o[c])&&(o[c]=J0(o[c])),!u)}if(K.isFormData(t)&&K.isFunction(t.entries)){const s={};return K.forEachEntry(t,(r,o)=>{e(G0(r),o,s,0)}),s}return null}function Z0(t,e,s){if(K.isString(t))try{return(e||JSON.parse)(t),K.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(t)}const ca={transitional:Yd,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const r=s.getContentType()||"",o=r.indexOf("application/json")>-1,l=K.isObject(e);if(l&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return o?JSON.stringify(kg(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return X0(e,this.formSerializer).toString();if((u=K.isFileList(e))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ol(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return l||o?(s.setContentType("application/json",!1),Z0(e)):e}],transformResponse:[function(e){const s=this.transitional||ca.transitional,r=s&&s.forcedJSONParsing,o=this.responseType==="json";if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(r&&!this.responseType||o)){const c=!(s&&s.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?we.from(u,we.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],t=>{ca.headers[t]={}});const ej=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),tj=t=>{const e={};let s,r,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),s=c.substring(0,o).trim().toLowerCase(),r=c.substring(o+1).trim(),!(!s||e[s]&&ej[s])&&(s==="set-cookie"?e[s]?e[s].push(r):e[s]=[r]:e[s]=e[s]?e[s]+", "+r:r)}),e},fp=Symbol("internals"),sj=t=>!/[\r\n]/.test(t);function _g(t,e){if(!(t===!1||t==null)){if(K.isArray(t)){t.forEach(s=>_g(s,e));return}if(!sj(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function Pr(t){return t&&String(t).trim().toLowerCase()}function nj(t){let e=t.length;for(;e>0;){const s=t.charCodeAt(e-1);if(s!==10&&s!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function Io(t){return t===!1||t==null?t:K.isArray(t)?t.map(Io):nj(String(t))}function ij(t){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(t);)e[r[1]]=r[2];return e}const rj=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function id(t,e,s,r,o){if(K.isFunction(r))return r.call(this,e,s);if(o&&(e=s),!!K.isString(e)){if(K.isString(r))return e.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(e)}}function aj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,r)=>s.toUpperCase()+r)}function oj(t,e){const s=K.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+s,{value:function(o,l,c){return this[r].call(this,e,o,l,c)},configurable:!0})})}let It=class{constructor(e){e&&this.set(e)}set(e,s,r){const o=this;function l(u,h,p){const m=Pr(h);if(!m)throw new Error("header name must be a non-empty string");const x=K.findKey(o,m);(!x||o[x]===void 0||p===!0||p===void 0&&o[x]!==!1)&&(_g(u,h),o[x||h]=Io(u))}const c=(u,h)=>K.forEach(u,(p,m)=>l(p,m,h));if(K.isPlainObject(e)||e instanceof this.constructor)c(e,s);else if(K.isString(e)&&(e=e.trim())&&!rj(e))c(tj(e),s);else if(K.isObject(e)&&K.isIterable(e)){let u={},h,p;for(const m of e){if(!K.isArray(m))throw TypeError("Object iterator must return a key-value pair");u[p=m[0]]=(h=u[p])?K.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}c(u,s)}else e!=null&&l(s,e,r);return this}get(e,s){if(e=Pr(e),e){const r=K.findKey(this,e);if(r){const o=this[r];if(!s)return o;if(s===!0)return ij(o);if(K.isFunction(s))return s.call(this,o,r);if(K.isRegExp(s))return s.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Pr(e),e){const r=K.findKey(this,e);return!!(r&&this[r]!==void 0&&(!s||id(this,this[r],r,s)))}return!1}delete(e,s){const r=this;let o=!1;function l(c){if(c=Pr(c),c){const u=K.findKey(r,c);u&&(!s||id(r,r[u],u,s))&&(delete r[u],o=!0)}}return K.isArray(e)?e.forEach(l):l(e),o}clear(e){const s=Object.keys(this);let r=s.length,o=!1;for(;r--;){const l=s[r];(!e||id(this,this[l],l,e,!0))&&(delete this[l],o=!0)}return o}normalize(e){const s=this,r={};return K.forEach(this,(o,l)=>{const c=K.findKey(r,l);if(c){s[c]=Io(o),delete s[l];return}const u=e?aj(l):String(l).trim();u!==l&&delete s[l],s[u]=Io(o),r[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return K.forEach(this,(r,o)=>{r!=null&&r!==!1&&(s[o]=e&&K.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const r=new this(e);return s.forEach(o=>r.set(o)),r}static accessor(e){const r=(this[fp]=this[fp]={accessors:{}}).accessors,o=this.prototype;function l(c){const u=Pr(c);r[u]||(oj(o,c),r[u]=!0)}return K.isArray(e)?e.forEach(l):l(e),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(It.prototype,({value:t},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[s]=r}}});K.freezeMethods(It);function rd(t,e){const s=this||ca,r=e||s,o=It.from(r.headers);let l=r.data;return K.forEach(t,function(u){l=u.call(s,l,o.normalize(),e?e.status:void 0)}),o.normalize(),l}function Sg(t){return!!(t&&t.__CANCEL__)}let da=class extends we{constructor(e,s,r){super(e??"canceled",we.ERR_CANCELED,s,r),this.name="CanceledError",this.__CANCEL__=!0}};function Cg(t,e,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):e(new we("Request failed with status code "+s.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function lj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function cj(t,e){t=t||10;const s=new Array(t),r=new Array(t);let o=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),m=r[l];c||(c=p),s[o]=h,r[o]=p;let x=l,N=0;for(;x!==o;)N+=s[x++],x=x%t;if(o=(o+1)%t,o===l&&(l=(l+1)%t),p-c<e)return;const w=m&&p-m;return w?Math.round(N*1e3/w):void 0}}function dj(t,e){let s=0,r=1e3/e,o,l;const c=(p,m=Date.now())=>{s=m,o=null,l&&(clearTimeout(l),l=null),t(...p)};return[(...p)=>{const m=Date.now(),x=m-s;x>=r?c(p,m):(o=p,l||(l=setTimeout(()=>{l=null,c(o)},r-x)))},()=>o&&c(o)]}const qo=(t,e,s=3)=>{let r=0;const o=cj(50,250);return dj(l=>{const c=l.loaded,u=l.lengthComputable?l.total:void 0,h=c-r,p=o(h),m=c<=u;r=c;const x={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&m?(u-c)/p:void 0,event:l,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(x)},s)},pp=(t,e)=>{const s=t!=null;return[r=>e[0]({lengthComputable:s,total:t,loaded:r}),e[1]]},mp=t=>(...e)=>K.asap(()=>t(...e)),uj=jt.hasStandardBrowserEnv?((t,e)=>s=>(s=new URL(s,jt.origin),t.protocol===s.protocol&&t.host===s.host&&(e||t.port===s.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,hj=jt.hasStandardBrowserEnv?{write(t,e,s,r,o,l,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];K.isNumber(s)&&u.push(`expires=${new Date(s).toUTCString()}`),K.isString(r)&&u.push(`path=${r}`),K.isString(o)&&u.push(`domain=${o}`),l===!0&&u.push("secure"),K.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function pj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Eg(t,e,s){let r=!fj(e);return t&&(r||s==!1)?pj(t,e):e}const gp=t=>t instanceof It?{...t}:t;function ni(t,e){e=e||{};const s={};function r(p,m,x,N){return K.isPlainObject(p)&&K.isPlainObject(m)?K.merge.call({caseless:N},p,m):K.isPlainObject(m)?K.merge({},m):K.isArray(m)?m.slice():m}function o(p,m,x,N){if(K.isUndefined(m)){if(!K.isUndefined(p))return r(void 0,p,x,N)}else return r(p,m,x,N)}function l(p,m){if(!K.isUndefined(m))return r(void 0,m)}function c(p,m){if(K.isUndefined(m)){if(!K.isUndefined(p))return r(void 0,p)}else return r(void 0,m)}function u(p,m,x){if(x in e)return r(p,m);if(x in t)return r(void 0,p)}const h={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,m,x)=>o(gp(p),gp(m),x,!0)};return K.forEach(Object.keys({...t,...e}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const x=K.hasOwnProp(h,m)?h[m]:o,N=x(t[m],e[m],m);K.isUndefined(N)&&x!==u||(s[m]=N)}),s}const Rg=t=>{const e=ni({},t);let{data:s,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:l,headers:c,auth:u}=e;if(e.headers=c=It.from(c),e.url=wg(Eg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),K.isFormData(s)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(K.isFunction(s.getHeaders)){const h=s.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([m,x])=>{p.includes(m.toLowerCase())&&c.set(m,x)})}}if(jt.hasStandardBrowserEnv&&(r&&K.isFunction(r)&&(r=r(e)),r||r!==!1&&uj(e.url))){const h=o&&l&&hj.read(l);h&&c.set(o,h)}return e},mj=typeof XMLHttpRequest<"u",gj=mj&&function(t){return new Promise(function(s,r){const o=Rg(t);let l=o.data;const c=It.from(o.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=o,m,x,N,w,b;function j(){w&&w(),b&&b(),o.cancelToken&&o.cancelToken.unsubscribe(m),o.signal&&o.signal.removeEventListener("abort",m)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function _(){if(!y)return;const A=It.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),P={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:A,config:t,request:y};Cg(function(O){s(O),j()},function(O){r(O),j()},P),y=null}"onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){y&&(r(new we("Request aborted",we.ECONNABORTED,t,y)),y=null)},y.onerror=function(U){const P=U&&U.message?U.message:"Network Error",q=new we(P,we.ERR_NETWORK,t,y);q.event=U||null,r(q),y=null},y.ontimeout=function(){let U=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const P=o.transitional||Yd;o.timeoutErrorMessage&&(U=o.timeoutErrorMessage),r(new we(U,P.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,t,y)),y=null},l===void 0&&c.setContentType(null),"setRequestHeader"in y&&K.forEach(c.toJSON(),function(U,P){y.setRequestHeader(P,U)}),K.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),u&&u!=="json"&&(y.responseType=o.responseType),p&&([N,b]=qo(p,!0),y.addEventListener("progress",N)),h&&y.upload&&([x,w]=qo(h),y.upload.addEventListener("progress",x),y.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(m=A=>{y&&(r(!A||A.type?new da(null,t,y):A),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(m),o.signal&&(o.signal.aborted?m():o.signal.addEventListener("abort",m)));const E=lj(o.url);if(E&&jt.protocols.indexOf(E)===-1){r(new we("Unsupported protocol "+E+":",we.ERR_BAD_REQUEST,t));return}y.send(l||null)})},xj=(t,e)=>{const{length:s}=t=t?t.filter(Boolean):[];if(e||s){let r=new AbortController,o;const l=function(p){if(!o){o=!0,u();const m=p instanceof Error?p:this.reason;r.abort(m instanceof we?m:new da(m instanceof Error?m.message:m))}};let c=e&&setTimeout(()=>{c=null,l(new we(`timeout of ${e}ms exceeded`,we.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(l):p.removeEventListener("abort",l)}),t=null)};t.forEach(p=>p.addEventListener("abort",l));const{signal:h}=r;return h.unsubscribe=()=>K.asap(u),h}},vj=function*(t,e){let s=t.byteLength;if(s<e){yield t;return}let r=0,o;for(;r<s;)o=r+e,yield t.slice(r,o),r=o},yj=async function*(t,e){for await(const s of bj(t))yield*vj(s,e)},bj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:s,value:r}=await e.read();if(s)break;yield r}}finally{await e.cancel()}},xp=(t,e,s,r)=>{const o=yj(t,e);let l=0,c,u=h=>{c||(c=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:p,value:m}=await o.next();if(p){u(),h.close();return}let x=m.byteLength;if(s){let N=l+=x;s(N)}h.enqueue(new Uint8Array(m))}catch(p){throw u(p),p}},cancel(h){return u(h),o.return()}},{highWaterMark:2})},vp=64*1024,{isFunction:wo}=K,jj=(({Request:t,Response:e})=>({Request:t,Response:e}))(K.global),{ReadableStream:yp,TextEncoder:bp}=K.global,jp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Nj=t=>{t=K.merge.call({skipUndefined:!0},jj,t);const{fetch:e,Request:s,Response:r}=t,o=e?wo(e):typeof fetch=="function",l=wo(s),c=wo(r);if(!o)return!1;const u=o&&wo(yp),h=o&&(typeof bp=="function"?(b=>j=>b.encode(j))(new bp):async b=>new Uint8Array(await new s(b).arrayBuffer())),p=l&&u&&jp(()=>{let b=!1;const j=new yp,y=new s(jt.origin,{body:j,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return j.cancel(),b&&!y}),m=c&&u&&jp(()=>K.isReadableStream(new r("").body)),x={stream:m&&(b=>b.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!x[b]&&(x[b]=(j,y)=>{let _=j&&j[b];if(_)return _.call(j);throw new we(`Response type '${b}' is not supported`,we.ERR_NOT_SUPPORT,y)})});const N=async b=>{if(b==null)return 0;if(K.isBlob(b))return b.size;if(K.isSpecCompliantForm(b))return(await new s(jt.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(K.isArrayBufferView(b)||K.isArrayBuffer(b))return b.byteLength;if(K.isURLSearchParams(b)&&(b=b+""),K.isString(b))return(await h(b)).byteLength},w=async(b,j)=>{const y=K.toFiniteNumber(b.getContentLength());return y??N(j)};return async b=>{let{url:j,method:y,data:_,signal:E,cancelToken:A,timeout:U,onDownloadProgress:P,onUploadProgress:q,responseType:O,headers:T,withCredentials:L="same-origin",fetchOptions:B}=Rg(b),M=e||fetch;O=O?(O+"").toLowerCase():"text";let C=xj([E,A&&A.toAbortSignal()],U),I=null;const W=C&&C.unsubscribe&&(()=>{C.unsubscribe()});let ie;try{if(q&&p&&y!=="get"&&y!=="head"&&(ie=await w(T,_))!==0){let z=new s(j,{method:"POST",body:_,duplex:"half"}),G;if(K.isFormData(_)&&(G=z.headers.get("content-type"))&&T.setContentType(G),z.body){const[ce,fe]=pp(ie,qo(mp(q)));_=xp(z.body,vp,ce,fe)}}K.isString(L)||(L=L?"include":"omit");const R=l&&"credentials"in s.prototype,J={...B,signal:C,method:y.toUpperCase(),headers:T.normalize().toJSON(),body:_,duplex:"half",credentials:R?L:void 0};I=l&&new s(j,J);let X=await(l?M(I,B):M(j,J));const re=m&&(O==="stream"||O==="response");if(m&&(P||re&&W)){const z={};["status","statusText","headers"].forEach(ye=>{z[ye]=X[ye]});const G=K.toFiniteNumber(X.headers.get("content-length")),[ce,fe]=P&&pp(G,qo(mp(P),!0))||[];X=new r(xp(X.body,vp,ce,()=>{fe&&fe(),W&&W()}),z)}O=O||"text";let Z=await x[K.findKey(x,O)||"text"](X,b);return!re&&W&&W(),await new Promise((z,G)=>{Cg(z,G,{data:Z,headers:It.from(X.headers),status:X.status,statusText:X.statusText,config:b,request:I})})}catch(R){throw W&&W(),R&&R.name==="TypeError"&&/Load failed|fetch/i.test(R.message)?Object.assign(new we("Network Error",we.ERR_NETWORK,b,I,R&&R.response),{cause:R.cause||R}):we.from(R,R&&R.code,b,I,R&&R.response)}}},wj=new Map,Pg=t=>{let e=t&&t.env||{};const{fetch:s,Request:r,Response:o}=e,l=[r,o,s];let c=l.length,u=c,h,p,m=wj;for(;u--;)h=l[u],p=m.get(h),p===void 0&&m.set(h,p=u?new Map:Nj(e)),m=p;return p};Pg();const Kd={http:I0,xhr:gj,fetch:{get:Pg}};K.forEach(Kd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Np=t=>`- ${t}`,kj=t=>K.isFunction(t)||t===null||t===!1;function _j(t,e){t=K.isArray(t)?t:[t];const{length:s}=t;let r,o;const l={};for(let c=0;c<s;c++){r=t[c];let u;if(o=r,!kj(r)&&(o=Kd[(u=String(r)).toLowerCase()],o===void 0))throw new we(`Unknown adapter '${u}'`);if(o&&(K.isFunction(o)||(o=o.get(e))))break;l[u||"#"+c]=o}if(!o){const c=Object.entries(l).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=s?c.length>1?`since :
`+c.map(Np).join(`
`):" "+Np(c[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o}const Dg={getAdapter:_j,adapters:Kd};function ad(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new da(null,t)}function wp(t){return ad(t),t.headers=It.from(t.headers),t.data=rd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Dg.getAdapter(t.adapter||ca.adapter,t)(t).then(function(r){return ad(t),r.data=rd.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return Sg(r)||(ad(t),r&&r.response&&(r.response.data=rd.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const Ag="1.15.0",ll={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ll[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const kp={};ll.transitional=function(e,s,r){function o(l,c){return"[Axios v"+Ag+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,u)=>{if(e===!1)throw new we(o(c," has been removed"+(s?" in "+s:"")),we.ERR_DEPRECATED);return s&&!kp[c]&&(kp[c]=!0,console.warn(o(c," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(l,c,u):!0}};ll.spelling=function(e){return(s,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function Sj(t,e,s){if(typeof t!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let o=r.length;for(;o-- >0;){const l=r[o],c=e[l];if(c){const u=t[l],h=u===void 0||c(u,l,t);if(h!==!0)throw new we("option "+l+" must be "+h,we.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new we("Unknown option "+l,we.ERR_BAD_OPTION)}}const Fo={assertOptions:Sj,validators:ll},es=Fo.validators;let ei=class{constructor(e){this.defaults=e||{},this.interceptors={request:new hp,response:new hp}}async request(e,s){try{return await this._request(e,s)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=(()=>{if(!o.stack)return"";const c=o.stack.indexOf(`
`);return c===-1?"":o.stack.slice(c+1)})();try{if(!r.stack)r.stack=l;else if(l){const c=l.indexOf(`
`),u=c===-1?-1:l.indexOf(`
`,c+1),h=u===-1?"":l.slice(u+1);String(r.stack).endsWith(h)||(r.stack+=`
`+l)}}catch{}}throw r}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=ni(this.defaults,s);const{transitional:r,paramsSerializer:o,headers:l}=s;r!==void 0&&Fo.assertOptions(r,{silentJSONParsing:es.transitional(es.boolean),forcedJSONParsing:es.transitional(es.boolean),clarifyTimeoutError:es.transitional(es.boolean),legacyInterceptorReqResOrdering:es.transitional(es.boolean)},!1),o!=null&&(K.isFunction(o)?s.paramsSerializer={serialize:o}:Fo.assertOptions(o,{encode:es.function,serialize:es.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Fo.assertOptions(s,{baseUrl:es.spelling("baseURL"),withXsrfToken:es.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let c=l&&K.merge(l.common,l[s.method]);l&&K.forEach(["delete","get","head","post","put","patch","common"],b=>{delete l[b]}),s.headers=It.concat(c,l);const u=[];let h=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(s)===!1)return;h=h&&j.synchronous;const y=s.transitional||Yd;y&&y.legacyInterceptorReqResOrdering?u.unshift(j.fulfilled,j.rejected):u.push(j.fulfilled,j.rejected)});const p=[];this.interceptors.response.forEach(function(j){p.push(j.fulfilled,j.rejected)});let m,x=0,N;if(!h){const b=[wp.bind(this),void 0];for(b.unshift(...u),b.push(...p),N=b.length,m=Promise.resolve(s);x<N;)m=m.then(b[x++],b[x++]);return m}N=u.length;let w=s;for(;x<N;){const b=u[x++],j=u[x++];try{w=b(w)}catch(y){j.call(this,y);break}}try{m=wp.call(this,w)}catch(b){return Promise.reject(b)}for(x=0,N=p.length;x<N;)m=m.then(p[x++],p[x++]);return m}getUri(e){e=ni(this.defaults,e);const s=Eg(e.baseURL,e.url,e.allowAbsoluteUrls);return wg(s,e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(e){ei.prototype[e]=function(s,r){return this.request(ni(r||{},{method:e,url:s,data:(r||{}).data}))}});K.forEach(["post","put","patch"],function(e){function s(r){return function(l,c,u){return this.request(ni(u||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}ei.prototype[e]=s(),ei.prototype[e+"Form"]=s(!0)});let Cj=class Tg{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(l){s=l});const r=this;this.promise.then(o=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](o);r._listeners=null}),this.promise.then=o=>{let l;const c=new Promise(u=>{r.subscribe(u),l=u}).then(o);return c.cancel=function(){r.unsubscribe(l)},c},e(function(l,c,u){r.reason||(r.reason=new da(l,c,u),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=r=>{e.abort(r)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Tg(function(o){e=o}),cancel:e}}};function Ej(t){return function(s){return t.apply(null,s)}}function Rj(t){return K.isObject(t)&&t.isAxiosError===!0}const Rd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Rd).forEach(([t,e])=>{Rd[e]=t});function Lg(t){const e=new ei(t),s=hg(ei.prototype.request,e);return K.extend(s,ei.prototype,e,{allOwnKeys:!0}),K.extend(s,e,null,{allOwnKeys:!0}),s.create=function(o){return Lg(ni(t,o))},s}const tt=Lg(ca);tt.Axios=ei;tt.CanceledError=da;tt.CancelToken=Cj;tt.isCancel=Sg;tt.VERSION=Ag;tt.toFormData=ol;tt.AxiosError=we;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=Ej;tt.isAxiosError=Rj;tt.mergeConfig=ni;tt.AxiosHeaders=It;tt.formToJSON=t=>kg(K.isHTMLForm(t)?new FormData(t):t);tt.getAdapter=Dg.getAdapter;tt.HttpStatusCode=Rd;tt.default=tt;const{Axios:nS,AxiosError:iS,CanceledError:rS,isCancel:aS,CancelToken:oS,VERSION:lS,all:cS,Cancel:dS,isAxiosError:uS,spread:hS,toFormData:fS,AxiosHeaders:pS,HttpStatusCode:mS,formToJSON:gS,getAdapter:xS,mergeConfig:vS}=tt,oe=tt.create({baseURL:"/api",timeout:3e4});oe.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Qn={list:(t=1,e=100,s)=>{let r=`/events?page=${t}&page_size=${e}`;return s&&(s.levels&&s.levels.length>0&&s.levels.forEach(o=>r+=`&levels=${o}`),s.event_ids&&s.event_ids.length>0&&s.event_ids.forEach(o=>r+=`&event_ids=${o}`),s.log_names&&s.log_names.length>0&&s.log_names.forEach(o=>r+=`&log_names=${encodeURIComponent(o)}`),s.sources&&s.sources.length>0&&s.sources.forEach(o=>r+=`&sources=${encodeURIComponent(o)}`),s.users&&s.users.length>0&&s.users.forEach(o=>r+=`&users=${encodeURIComponent(o)}`),s.computers&&s.computers.length>0&&s.computers.forEach(o=>r+=`&computers=${encodeURIComponent(o)}`),s.start_time&&(r+=`&start_time=${encodeURIComponent(s.start_time)}`),s.end_time&&(r+=`&end_time=${encodeURIComponent(s.end_time)}`),s.sort_by&&(r+=`&sort_by=${s.sort_by}`),s.sort_order&&(r+=`&sort_order=${s.sort_order}`)),oe.get(r)},get:t=>oe.get(`/events/${t}`),search:t=>oe.post("/events/search",t),export:t=>oe.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},ps={list:(t=1,e=100,s)=>oe.get(`/alerts?page=${t}&page_size=${e}${s?`&severity=${s}`:""}`),get:t=>oe.get(`/alerts/${t}`),stats:()=>oe.get("/alerts/stats"),trend:(t=7)=>oe.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>oe.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>oe.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>oe.delete(`/alerts/${t}`),batchAction:(t,e,s)=>oe.post("/alerts/batch",{ids:t,action:e,notes:s}),runAnalysis:()=>oe.post("/alerts/run-analysis")},_p={collect:t=>oe.post("/collect",t),getStatus:()=>oe.get("/collect/status"),evtx2csv:(t,e,s)=>oe.post("/collect/evtx2csv",{file_paths:t,output_dir:e,limit:s})},Sp={importLogs:t=>oe.post("/import/logs",{files:t}),importLogsWithAlert:t=>oe.post("/import/logs",{files:t,alert_on_import:!0}),getStatus:()=>oe.get("/import/status")},Pj={getStats:()=>oe.get("/live/stats"),streamEvents:(t,e,s)=>{const r=new EventSource("/api/live/events");return r.onmessage=o=>{try{const l=JSON.parse(o.data);l.type==="event"?t(l.data):l.type==="stats"&&e(l)}catch(l){console.error("Failed to parse SSE data:",l)}},r.onerror=o=>{console.error("SSE error:",o),s==null||s(o)},r}},Kn={health:()=>oe.get("/health"),getInfo:()=>oe.get("/system/info"),getMetrics:()=>oe.get("/system/metrics"),getProcesses:(t=100)=>oe.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>oe.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>oe.get("/system/env"),getLoadedDLLs:(t=100)=>oe.get(`/system/dlls?limit=${t}`),getDrivers:()=>oe.get("/system/drivers")},Bs={list:()=>oe.get("/rules"),get:t=>oe.get(`/rules/${t}`),toggle:(t,e)=>oe.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>oe.post("/rules",t),validate:(t,e)=>oe.post("/rules/validate",{rule:t,content:e}),import:t=>oe.post("/rules/import",{rules:t}),export:(t="json")=>oe.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>oe.get("/rules/templates"),getTemplate:t=>oe.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>oe.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},Dr={list:()=>oe.get("/reports"),generate:t=>oe.post("/reports",t),get:t=>oe.get(`/reports/${t}`),export:t=>oe.get(`/reports/export?format=${t}`,{responseType:"blob"}),download:t=>oe.get(`/reports/${t}/download`,{responseType:"blob"})},Hn={calculateHash:t=>oe.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>oe.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>oe.get(`/forensics/signature?path=${t}`),isSigned:t=>oe.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>oe.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>oe.get("/forensics/evidence"),getEvidence:t=>oe.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>oe.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>oe.get("/forensics/chain-of-custody"),memoryDump:t=>oe.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},Pd={get:(t=200,e,s)=>{let r=`/timeline?limit=${t}`;return e&&(r+=`&start_time=${e}`),s&&(r+=`&end_time=${s}`),oe.get(r)},deleteAlert:t=>oe.delete(`/timeline/alerts/${t}`)},Mg={getCollectionStats:()=>oe.get("/dashboard/collection-stats"),getLogNames:()=>oe.get("/dashboard/log-names")},Dj={run:(t,e)=>oe.post(`/analyze/${t}`,e||{}),list:()=>oe.get("/analyzers"),info:t=>oe.get(`/analyzers/${t}`)},od={get:()=>oe.get("/settings"),save:t=>oe.post("/settings",t),reset:()=>oe.post("/settings/reset")},ld={detect:t=>oe.get(`/persistence/detect${t||""}`),detectStream:(t,e)=>{const s=new EventSource("/api/persistence/detect/stream");return s.onmessage=r=>{try{const o=JSON.parse(r.data);t(o)}catch(o){console.error("Failed to parse SSE data:",o)}},s.onerror=r=>{console.error("SSE error:",r),e==null||e(r)},s},listCategories:()=>oe.get("/persistence/categories"),listTechniques:()=>oe.get("/persistence/techniques"),listDetectors:()=>oe.get("/persistence/detectors"),updateDetectors:t=>oe.post("/persistence/detectors/config",{detectors:t})},Aj={analyze:t=>oe.post("/correlation/analyze",t||{})},Tj={analyze:t=>oe.post("/multi/analyze",t||{}),lateral:()=>oe.get("/multi/lateral")},Lj={execute:t=>oe.post("/query/execute",t)},Ar={list:()=>oe.get("/suppress"),create:t=>oe.post("/suppress",t),update:(t,e)=>oe.put(`/suppress/${t}`,e),delete:t=>oe.delete(`/suppress/${t}`),toggle:(t,e)=>oe.post(`/suppress/${t}/toggle`,{enabled:e})},Cp={analyze:t=>oe.post("/ueba/analyze",t||{}),profiles:()=>oe.get("/ueba/profiles")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ua(t){return t+.5|0}const vn=(t,e,s)=>Math.max(Math.min(t,s),e);function Ir(t){return vn(ua(t*2.55),0,255)}function Nn(t){return vn(ua(t*255),0,255)}function Hs(t){return vn(ua(t/2.55)/100,0,1)}function Ep(t){return vn(ua(t*100),0,100)}const ts={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Dd=[..."0123456789ABCDEF"],Mj=t=>Dd[t&15],Oj=t=>Dd[(t&240)>>4]+Dd[t&15],ko=t=>(t&240)>>4===(t&15),zj=t=>ko(t.r)&&ko(t.g)&&ko(t.b)&&ko(t.a);function Ij(t){var e=t.length,s;return t[0]==="#"&&(e===4||e===5?s={r:255&ts[t[1]]*17,g:255&ts[t[2]]*17,b:255&ts[t[3]]*17,a:e===5?ts[t[4]]*17:255}:(e===7||e===9)&&(s={r:ts[t[1]]<<4|ts[t[2]],g:ts[t[3]]<<4|ts[t[4]],b:ts[t[5]]<<4|ts[t[6]],a:e===9?ts[t[7]]<<4|ts[t[8]]:255})),s}const Fj=(t,e)=>t<255?e(t):"";function Bj(t){var e=zj(t)?Mj:Oj;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Fj(t.a,e):void 0}const $j=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Og(t,e,s){const r=e*Math.min(s,1-s),o=(l,c=(l+t/30)%12)=>s-r*Math.max(Math.min(c-3,9-c,1),-1);return[o(0),o(8),o(4)]}function Uj(t,e,s){const r=(o,l=(o+t/60)%6)=>s-s*e*Math.max(Math.min(l,4-l,1),0);return[r(5),r(3),r(1)]}function Wj(t,e,s){const r=Og(t,1,.5);let o;for(e+s>1&&(o=1/(e+s),e*=o,s*=o),o=0;o<3;o++)r[o]*=1-e-s,r[o]+=e;return r}function Hj(t,e,s,r,o){return t===o?(e-s)/r+(e<s?6:0):e===o?(s-t)/r+2:(t-e)/r+4}function Xd(t){const s=t.r/255,r=t.g/255,o=t.b/255,l=Math.max(s,r,o),c=Math.min(s,r,o),u=(l+c)/2;let h,p,m;return l!==c&&(m=l-c,p=u>.5?m/(2-l-c):m/(l+c),h=Hj(s,r,o,m,l),h=h*60+.5),[h|0,p||0,u]}function Gd(t,e,s,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,s,r)).map(Nn)}function Jd(t,e,s){return Gd(Og,t,e,s)}function Vj(t,e,s){return Gd(Wj,t,e,s)}function qj(t,e,s){return Gd(Uj,t,e,s)}function zg(t){return(t%360+360)%360}function Yj(t){const e=$j.exec(t);let s=255,r;if(!e)return;e[5]!==r&&(s=e[6]?Ir(+e[5]):Nn(+e[5]));const o=zg(+e[2]),l=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?r=Vj(o,l,c):e[1]==="hsv"?r=qj(o,l,c):r=Jd(o,l,c),{r:r[0],g:r[1],b:r[2],a:s}}function Qj(t,e){var s=Xd(t);s[0]=zg(s[0]+e),s=Jd(s),t.r=s[0],t.g=s[1],t.b=s[2]}function Kj(t){if(!t)return;const e=Xd(t),s=e[0],r=Ep(e[1]),o=Ep(e[2]);return t.a<255?`hsla(${s}, ${r}%, ${o}%, ${Hs(t.a)})`:`hsl(${s}, ${r}%, ${o}%)`}const Rp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Pp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Xj(){const t={},e=Object.keys(Pp),s=Object.keys(Rp);let r,o,l,c,u;for(r=0;r<e.length;r++){for(c=u=e[r],o=0;o<s.length;o++)l=s[o],u=u.replace(l,Rp[l]);l=parseInt(Pp[c],16),t[u]=[l>>16&255,l>>8&255,l&255]}return t}let _o;function Gj(t){_o||(_o=Xj(),_o.transparent=[0,0,0,0]);const e=_o[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Jj=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Zj(t){const e=Jj.exec(t);let s=255,r,o,l;if(e){if(e[7]!==r){const c=+e[7];s=e[8]?Ir(c):vn(c*255,0,255)}return r=+e[1],o=+e[3],l=+e[5],r=255&(e[2]?Ir(r):vn(r,0,255)),o=255&(e[4]?Ir(o):vn(o,0,255)),l=255&(e[6]?Ir(l):vn(l,0,255)),{r,g:o,b:l,a:s}}}function e1(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Hs(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const cd=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Oi=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function t1(t,e,s){const r=Oi(Hs(t.r)),o=Oi(Hs(t.g)),l=Oi(Hs(t.b));return{r:Nn(cd(r+s*(Oi(Hs(e.r))-r))),g:Nn(cd(o+s*(Oi(Hs(e.g))-o))),b:Nn(cd(l+s*(Oi(Hs(e.b))-l))),a:t.a+s*(e.a-t.a)}}function So(t,e,s){if(t){let r=Xd(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*s,e===0?360:1)),r=Jd(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Ig(t,e){return t&&Object.assign(e||{},t)}function Dp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Nn(t[3]))):(e=Ig(t,{r:0,g:0,b:0,a:1}),e.a=Nn(e.a)),e}function s1(t){return t.charAt(0)==="r"?Zj(t):Yj(t)}class Xr{constructor(e){if(e instanceof Xr)return e;const s=typeof e;let r;s==="object"?r=Dp(e):s==="string"&&(r=Ij(e)||Gj(e)||s1(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Ig(this._rgb);return e&&(e.a=Hs(e.a)),e}set rgb(e){this._rgb=Dp(e)}rgbString(){return this._valid?e1(this._rgb):void 0}hexString(){return this._valid?Bj(this._rgb):void 0}hslString(){return this._valid?Kj(this._rgb):void 0}mix(e,s){if(e){const r=this.rgb,o=e.rgb;let l;const c=s===l?.5:s,u=2*c-1,h=r.a-o.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;l=1-p,r.r=255&p*r.r+l*o.r+.5,r.g=255&p*r.g+l*o.g+.5,r.b=255&p*r.b+l*o.b+.5,r.a=c*r.a+(1-c)*o.a,this.rgb=r}return this}interpolate(e,s){return e&&(this._rgb=t1(this._rgb,e._rgb,s)),this}clone(){return new Xr(this.rgb)}alpha(e){return this._rgb.a=Nn(e),this}clearer(e){const s=this._rgb;return s.a*=1-e,this}greyscale(){const e=this._rgb,s=ua(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=s,this}opaquer(e){const s=this._rgb;return s.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return So(this._rgb,2,e),this}darken(e){return So(this._rgb,2,-e),this}saturate(e){return So(this._rgb,1,e),this}desaturate(e){return So(this._rgb,1,-e),this}rotate(e){return Qj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function $s(){}const n1=(()=>{let t=0;return()=>t++})();function Le(t){return t==null}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ee(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function kt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function _s(t,e){return kt(t)?t:e}function _e(t,e){return typeof t>"u"?e:t}const i1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Fg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function We(t,e,s){if(t&&typeof t.call=="function")return t.apply(s,e)}function Ie(t,e,s,r){let o,l,c;if(it(t))for(l=t.length,o=0;o<l;o++)e.call(s,t[o],o);else if(Ee(t))for(c=Object.keys(t),l=c.length,o=0;o<l;o++)e.call(s,t[c[o]],c[o])}function Yo(t,e){let s,r,o,l;if(!t||!e||t.length!==e.length)return!1;for(s=0,r=t.length;s<r;++s)if(o=t[s],l=e[s],o.datasetIndex!==l.datasetIndex||o.index!==l.index)return!1;return!0}function Qo(t){if(it(t))return t.map(Qo);if(Ee(t)){const e=Object.create(null),s=Object.keys(t),r=s.length;let o=0;for(;o<r;++o)e[s[o]]=Qo(t[s[o]]);return e}return t}function Bg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function r1(t,e,s,r){if(!Bg(t))return;const o=e[t],l=s[t];Ee(o)&&Ee(l)?Gr(o,l,r):e[t]=Qo(l)}function Gr(t,e,s){const r=it(e)?e:[e],o=r.length;if(!Ee(t))return t;s=s||{};const l=s.merger||r1;let c;for(let u=0;u<o;++u){if(c=r[u],!Ee(c))continue;const h=Object.keys(c);for(let p=0,m=h.length;p<m;++p)l(h[p],t,c,s)}return t}function Wr(t,e){return Gr(t,e,{merger:a1})}function a1(t,e,s){if(!Bg(t))return;const r=e[t],o=s[t];Ee(r)&&Ee(o)?Wr(r,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Qo(o))}const Ap={"":t=>t,x:t=>t.x,y:t=>t.y};function o1(t){const e=t.split("."),s=[];let r="";for(const o of e)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(s.push(r),r="");return s}function l1(t){const e=o1(t);return s=>{for(const r of e){if(r==="")break;s=s&&s[r]}return s}}function ii(t,e){return(Ap[e]||(Ap[e]=l1(e)))(t)}function Zd(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Jr=t=>typeof t<"u",wn=t=>typeof t=="function",Tp=(t,e)=>{if(t.size!==e.size)return!1;for(const s of t)if(!e.has(s))return!1;return!0};function c1(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Fe=Math.PI,Ke=2*Fe,d1=Ke+Fe,Ko=Number.POSITIVE_INFINITY,u1=Fe/180,ct=Fe/2,Vn=Fe/4,Lp=Fe*2/3,$g=Math.log10,Rs=Math.sign;function Hr(t,e,s){return Math.abs(t-e)<s}function Mp(t){const e=Math.round(t);t=Hr(t,e,t/1e3)?e:t;const s=Math.pow(10,Math.floor($g(t))),r=t/s;return(r<=1?1:r<=2?2:r<=5?5:10)*s}function h1(t){const e=[],s=Math.sqrt(t);let r;for(r=1;r<s;r++)t%r===0&&(e.push(r),e.push(t/r));return s===(s|0)&&e.push(s),e.sort((o,l)=>o-l).pop(),e}function f1(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Zr(t){return!f1(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function p1(t,e){const s=Math.round(t);return s-e<=t&&s+e>=t}function m1(t,e,s){let r,o,l;for(r=0,o=t.length;r<o;r++)l=t[r][s],isNaN(l)||(e.min=Math.min(e.min,l),e.max=Math.max(e.max,l))}function Vs(t){return t*(Fe/180)}function g1(t){return t*(180/Fe)}function Op(t){if(!kt(t))return;let e=1,s=0;for(;Math.round(t*e)/e!==t;)e*=10,s++;return s}function Ug(t,e){const s=e.x-t.x,r=e.y-t.y,o=Math.sqrt(s*s+r*r);let l=Math.atan2(r,s);return l<-.5*Fe&&(l+=Ke),{angle:l,distance:o}}function Ad(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function x1(t,e){return(t-e+d1)%Ke-Fe}function Ht(t){return(t%Ke+Ke)%Ke}function ea(t,e,s,r){const o=Ht(t),l=Ht(e),c=Ht(s),u=Ht(l-o),h=Ht(c-o),p=Ht(o-l),m=Ht(o-c);return o===l||o===c||r&&l===c||u>h&&p<m}function Nt(t,e,s){return Math.max(e,Math.min(s,t))}function v1(t){return Nt(t,-32768,32767)}function qs(t,e,s,r=1e-6){return t>=Math.min(e,s)-r&&t<=Math.max(e,s)+r}function eu(t,e,s){s=s||(c=>t[c]<e);let r=t.length-1,o=0,l;for(;r-o>1;)l=o+r>>1,s(l)?o=l:r=l;return{lo:o,hi:r}}const Zn=(t,e,s,r)=>eu(t,s,r?o=>{const l=t[o][e];return l<s||l===s&&t[o+1][e]===s}:o=>t[o][e]<s),y1=(t,e,s)=>eu(t,s,r=>t[r][e]>=s);function b1(t,e,s){let r=0,o=t.length;for(;r<o&&t[r]<e;)r++;for(;o>r&&t[o-1]>s;)o--;return r>0||o<t.length?t.slice(r,o):t}const Wg=["push","pop","shift","splice","unshift"];function j1(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Wg.forEach(s=>{const r="_onData"+Zd(s),o=t[s];Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value(...l){const c=o.apply(this,l);return t._chartjs.listeners.forEach(u=>{typeof u[r]=="function"&&u[r](...l)}),c}})})}function zp(t,e){const s=t._chartjs;if(!s)return;const r=s.listeners,o=r.indexOf(e);o!==-1&&r.splice(o,1),!(r.length>0)&&(Wg.forEach(l=>{delete t[l]}),delete t._chartjs)}function Hg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Vg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function qg(t,e){let s=[],r=!1;return function(...o){s=o,r||(r=!0,Vg.call(window,()=>{r=!1,t.apply(e,s)}))}}function N1(t,e){let s;return function(...r){return e?(clearTimeout(s),s=setTimeout(t,e,r)):t.apply(this,r),e}}const tu=t=>t==="start"?"left":t==="end"?"right":"center",bt=(t,e,s)=>t==="start"?e:t==="end"?s:(e+s)/2,w1=(t,e,s,r)=>t===(r?"left":"right")?s:t==="center"?(e+s)/2:e;function k1(t,e,s){const r=e.length;let o=0,l=r;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,m=c.axis,{min:x,max:N,minDefined:w,maxDefined:b}=c.getUserBounds();if(w){if(o=Math.min(Zn(h,m,x).lo,s?r:Zn(e,m,c.getPixelForValue(x)).lo),p){const j=h.slice(0,o+1).reverse().findIndex(y=>!Le(y[u.axis]));o-=Math.max(0,j)}o=Nt(o,0,r-1)}if(b){let j=Math.max(Zn(h,c.axis,N,!0).hi+1,s?0:Zn(e,m,c.getPixelForValue(N),!0).hi+1);if(p){const y=h.slice(j-1).findIndex(_=>!Le(_[u.axis]));j+=Math.max(0,y)}l=Nt(j,o,r)-o}else l=r-o}return{start:o,count:l}}function _1(t){const{xScale:e,yScale:s,_scaleRanges:r}=t,o={xmin:e.min,xmax:e.max,ymin:s.min,ymax:s.max};if(!r)return t._scaleRanges=o,!0;const l=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==s.min||r.ymax!==s.max;return Object.assign(r,o),l}const Co=t=>t===0||t===1,Ip=(t,e,s)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ke/s)),Fp=(t,e,s)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ke/s)+1,Vr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ct)+1,easeOutSine:t=>Math.sin(t*ct),easeInOutSine:t=>-.5*(Math.cos(Fe*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Co(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Co(t)?t:Ip(t,.075,.3),easeOutElastic:t=>Co(t)?t:Fp(t,.075,.3),easeInOutElastic(t){return Co(t)?t:t<.5?.5*Ip(t*2,.1125,.45):.5+.5*Fp(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Vr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Vr.easeInBounce(t*2)*.5:Vr.easeOutBounce(t*2-1)*.5+.5};function su(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Bp(t){return su(t)?t:new Xr(t)}function dd(t){return su(t)?t:new Xr(t).saturate(.5).darken(.1).hexString()}const S1=["x","y","borderWidth","radius","tension"],C1=["color","borderColor","backgroundColor"];function E1(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:C1},numbers:{type:"number",properties:S1}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function R1(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const $p=new Map;function P1(t,e){e=e||{};const s=t+JSON.stringify(e);let r=$p.get(s);return r||(r=new Intl.NumberFormat(t,e),$p.set(s,r)),r}function nu(t,e,s){return P1(e,s).format(t)}const D1={values(t){return it(t)?t:""+t},numeric(t,e,s){if(t===0)return"0";const r=this.chart.options.locale;let o,l=t;if(s.length>1){const p=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(p<1e-4||p>1e15)&&(o="scientific"),l=A1(t,s)}const c=$g(Math.abs(l)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:o,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),nu(t,r,h)}};function A1(t,e){let s=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(s)>=1&&t!==Math.floor(t)&&(s=t-Math.floor(t)),s}var Yg={formatters:D1};function T1(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,s)=>s.lineWidth,tickColor:(e,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Yg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const ri=Object.create(null),Td=Object.create(null);function qr(t,e){if(!e)return t;const s=e.split(".");for(let r=0,o=s.length;r<o;++r){const l=s[r];t=t[l]||(t[l]=Object.create(null))}return t}function ud(t,e,s){return typeof e=="string"?Gr(qr(t,e),s):Gr(qr(t,""),e)}class L1{constructor(e,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,o)=>dd(o.backgroundColor),this.hoverBorderColor=(r,o)=>dd(o.borderColor),this.hoverColor=(r,o)=>dd(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(s)}set(e,s){return ud(this,e,s)}get(e){return qr(this,e)}describe(e,s){return ud(Td,e,s)}override(e,s){return ud(ri,e,s)}route(e,s,r,o){const l=qr(this,e),c=qr(this,r),u="_"+s;Object.defineProperties(l,{[u]:{value:l[s],writable:!0},[s]:{enumerable:!0,get(){const h=this[u],p=c[o];return Ee(h)?Object.assign({},p,h):_e(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(s=>s(this))}}var et=new L1({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[E1,R1,T1]);function M1(t){return!t||Le(t.size)||Le(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Up(t,e,s,r,o){let l=e[o];return l||(l=e[o]=t.measureText(o).width,s.push(o)),l>r&&(r=l),r}function qn(t,e,s){const r=t.currentDevicePixelRatio,o=s!==0?Math.max(s/2,.5):0;return Math.round((e-o)*r)/r+o}function Wp(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Ld(t,e,s,r){Qg(t,e,s,r,null)}function Qg(t,e,s,r,o){let l,c,u,h,p,m,x,N;const w=e.pointStyle,b=e.rotation,j=e.radius;let y=(b||0)*u1;if(w&&typeof w=="object"&&(l=w.toString(),l==="[object HTMLImageElement]"||l==="[object HTMLCanvasElement]")){t.save(),t.translate(s,r),t.rotate(y),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(j)||j<=0)){switch(t.beginPath(),w){default:o?t.ellipse(s,r,o/2,j,0,0,Ke):t.arc(s,r,j,0,Ke),t.closePath();break;case"triangle":m=o?o/2:j,t.moveTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Lp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Lp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),t.closePath();break;case"rectRounded":p=j*.516,h=j-p,c=Math.cos(y+Vn)*h,x=Math.cos(y+Vn)*(o?o/2-p:h),u=Math.sin(y+Vn)*h,N=Math.sin(y+Vn)*(o?o/2-p:h),t.arc(s-x,r-u,p,y-Fe,y-ct),t.arc(s+N,r-c,p,y-ct,y),t.arc(s+x,r+u,p,y,y+ct),t.arc(s-N,r+c,p,y+ct,y+Fe),t.closePath();break;case"rect":if(!b){h=Math.SQRT1_2*j,m=o?o/2:h,t.rect(s-m,r-h,2*m,2*h);break}y+=Vn;case"rectRot":x=Math.cos(y)*(o?o/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(o?o/2:j),t.moveTo(s-x,r-u),t.lineTo(s+N,r-c),t.lineTo(s+x,r+u),t.lineTo(s-N,r+c),t.closePath();break;case"crossRot":y+=Vn;case"cross":x=Math.cos(y)*(o?o/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(o?o/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"star":x=Math.cos(y)*(o?o/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(o?o/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c),y+=Vn,x=Math.cos(y)*(o?o/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(o?o/2:j),t.moveTo(s-x,r-u),t.lineTo(s+x,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"line":c=o?o/2:Math.cos(y)*j,u=Math.sin(y)*j,t.moveTo(s-c,r-u),t.lineTo(s+c,r+u);break;case"dash":t.moveTo(s,r),t.lineTo(s+Math.cos(y)*(o?o/2:j),r+Math.sin(y)*j);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function ta(t,e,s){return s=s||.5,!e||t&&t.x>e.left-s&&t.x<e.right+s&&t.y>e.top-s&&t.y<e.bottom+s}function cl(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function dl(t){t.restore()}function O1(t,e,s,r,o){if(!e)return t.lineTo(s.x,s.y);if(o==="middle"){const l=(e.x+s.x)/2;t.lineTo(l,e.y),t.lineTo(l,s.y)}else o==="after"!=!!r?t.lineTo(e.x,s.y):t.lineTo(s.x,e.y);t.lineTo(s.x,s.y)}function z1(t,e,s,r){if(!e)return t.lineTo(s.x,s.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?s.cp2x:s.cp1x,r?s.cp2y:s.cp1y,s.x,s.y)}function I1(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Le(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function F1(t,e,s,r,o){if(o.strikethrough||o.underline){const l=t.measureText(r),c=e-l.actualBoundingBoxLeft,u=e+l.actualBoundingBoxRight,h=s-l.actualBoundingBoxAscent,p=s+l.actualBoundingBoxDescent,m=o.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,m),t.lineTo(u,m),t.stroke()}}function B1(t,e){const s=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=s}function sa(t,e,s,r,o,l={}){const c=it(e)?e:[e],u=l.strokeWidth>0&&l.strokeColor!=="";let h,p;for(t.save(),t.font=o.string,I1(t,l),h=0;h<c.length;++h)p=c[h],l.backdrop&&B1(t,l.backdrop),u&&(l.strokeColor&&(t.strokeStyle=l.strokeColor),Le(l.strokeWidth)||(t.lineWidth=l.strokeWidth),t.strokeText(p,s,r,l.maxWidth)),t.fillText(p,s,r,l.maxWidth),F1(t,s,r,p,l),r+=Number(o.lineHeight);t.restore()}function Xo(t,e){const{x:s,y:r,w:o,h:l,radius:c}=e;t.arc(s+c.topLeft,r+c.topLeft,c.topLeft,1.5*Fe,Fe,!0),t.lineTo(s,r+l-c.bottomLeft),t.arc(s+c.bottomLeft,r+l-c.bottomLeft,c.bottomLeft,Fe,ct,!0),t.lineTo(s+o-c.bottomRight,r+l),t.arc(s+o-c.bottomRight,r+l-c.bottomRight,c.bottomRight,ct,0,!0),t.lineTo(s+o,r+c.topRight),t.arc(s+o-c.topRight,r+c.topRight,c.topRight,0,-ct,!0),t.lineTo(s+c.topLeft,r)}const $1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,U1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function W1(t,e){const s=(""+t).match($1);if(!s||s[1]==="normal")return e*1.2;switch(t=+s[2],s[3]){case"px":return t;case"%":t/=100;break}return e*t}const H1=t=>+t||0;function iu(t,e){const s={},r=Ee(e),o=r?Object.keys(e):e,l=Ee(t)?r?c=>_e(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of o)s[c]=H1(l(c));return s}function Kg(t){return iu(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ii(t){return iu(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ns(t){const e=Kg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function wt(t,e){t=t||{},e=e||et.font;let s=_e(t.size,e.size);typeof s=="string"&&(s=parseInt(s,10));let r=_e(t.style,e.style);r&&!(""+r).match(U1)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const o={family:_e(t.family,e.family),lineHeight:W1(_e(t.lineHeight,e.lineHeight),s),size:s,style:r,weight:_e(t.weight,e.weight),string:""};return o.string=M1(o),o}function Eo(t,e,s,r){let o,l,c;for(o=0,l=t.length;o<l;++o)if(c=t[o],c!==void 0&&c!==void 0)return c}function V1(t,e,s){const{min:r,max:o}=t,l=Fg(e,(o-r)/2),c=(u,h)=>s&&u===0?0:u+h;return{min:c(r,-Math.abs(l)),max:c(o,l)}}function oi(t,e){return Object.assign(Object.create(t),e)}function ru(t,e=[""],s,r,o=()=>t[0]){const l=s||t;typeof r>"u"&&(r=Zg("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:l,_fallback:r,_getTarget:o,override:u=>ru([u,...t],e,l,r)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return Gg(u,h,()=>Z1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return Vp(u).includes(h)},ownKeys(u){return Vp(u)},set(u,h,p){const m=u._storage||(u._storage=o());return u[h]=m[h]=p,delete u._keys,!0}})}function $i(t,e,s,r){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:s,_stack:new Set,_descriptors:Xg(t,r),setContext:l=>$i(t,l,s,r),override:l=>$i(t.override(l),e,s,r)};return new Proxy(o,{deleteProperty(l,c){return delete l[c],delete t[c],!0},get(l,c,u){return Gg(l,c,()=>Y1(l,c,u))},getOwnPropertyDescriptor(l,c){return l._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(l,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(l,c,u){return t[c]=u,delete l[c],!0}})}function Xg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:s=e.scriptable,_indexable:r=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:s,indexable:r,isScriptable:wn(s)?s:()=>s,isIndexable:wn(r)?r:()=>r}}const q1=(t,e)=>t?t+Zd(e):e,au=(t,e)=>Ee(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Gg(t,e,s){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=s();return t[e]=r,r}function Y1(t,e,s){const{_proxy:r,_context:o,_subProxy:l,_descriptors:c}=t;let u=r[e];return wn(u)&&c.isScriptable(e)&&(u=Q1(e,u,t,s)),it(u)&&u.length&&(u=K1(e,u,t,c.isIndexable)),au(e,u)&&(u=$i(u,o,l&&l[e],c)),u}function Q1(t,e,s,r){const{_proxy:o,_context:l,_subProxy:c,_stack:u}=s;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(l,c||r);return u.delete(t),au(t,h)&&(h=ou(o._scopes,o,t,h)),h}function K1(t,e,s,r){const{_proxy:o,_context:l,_subProxy:c,_descriptors:u}=s;if(typeof l.index<"u"&&r(t))return e[l.index%e.length];if(Ee(e[0])){const h=e,p=o._scopes.filter(m=>m!==h);e=[];for(const m of h){const x=ou(p,o,t,m);e.push($i(x,l,c&&c[t],u))}}return e}function Jg(t,e,s){return wn(t)?t(e,s):t}const X1=(t,e)=>t===!0?e:typeof t=="string"?ii(e,t):void 0;function G1(t,e,s,r,o){for(const l of e){const c=X1(s,l);if(c){t.add(c);const u=Jg(c._fallback,s,o);if(typeof u<"u"&&u!==s&&u!==r)return u}else if(c===!1&&typeof r<"u"&&s!==r)return null}return!1}function ou(t,e,s,r){const o=e._rootScopes,l=Jg(e._fallback,s,r),c=[...t,...o],u=new Set;u.add(r);let h=Hp(u,c,s,l||s,r);return h===null||typeof l<"u"&&l!==s&&(h=Hp(u,c,l,h,r),h===null)?!1:ru(Array.from(u),[""],o,l,()=>J1(e,s,r))}function Hp(t,e,s,r,o){for(;s;)s=G1(t,e,s,r,o);return s}function J1(t,e,s){const r=t._getTarget();e in r||(r[e]={});const o=r[e];return it(o)&&Ee(s)?s:o||{}}function Z1(t,e,s,r){let o;for(const l of e)if(o=Zg(q1(l,t),s),typeof o<"u")return au(t,o)?ou(s,r,t,o):o}function Zg(t,e){for(const s of e){if(!s)continue;const r=s[t];if(typeof r<"u")return r}}function Vp(t){let e=t._keys;return e||(e=t._keys=eN(t._scopes)),e}function eN(t){const e=new Set;for(const s of t)for(const r of Object.keys(s).filter(o=>!o.startsWith("_")))e.add(r);return Array.from(e)}const tN=Number.EPSILON||1e-14,Ui=(t,e)=>e<t.length&&!t[e].skip&&t[e],ex=t=>t==="x"?"y":"x";function sN(t,e,s,r){const o=t.skip?e:t,l=e,c=s.skip?e:s,u=Ad(l,o),h=Ad(c,l);let p=u/(u+h),m=h/(u+h);p=isNaN(p)?0:p,m=isNaN(m)?0:m;const x=r*p,N=r*m;return{previous:{x:l.x-x*(c.x-o.x),y:l.y-x*(c.y-o.y)},next:{x:l.x+N*(c.x-o.x),y:l.y+N*(c.y-o.y)}}}function nN(t,e,s){const r=t.length;let o,l,c,u,h,p=Ui(t,0);for(let m=0;m<r-1;++m)if(h=p,p=Ui(t,m+1),!(!h||!p)){if(Hr(e[m],0,tN)){s[m]=s[m+1]=0;continue}o=s[m]/e[m],l=s[m+1]/e[m],u=Math.pow(o,2)+Math.pow(l,2),!(u<=9)&&(c=3/Math.sqrt(u),s[m]=o*c*e[m],s[m+1]=l*c*e[m])}}function iN(t,e,s="x"){const r=ex(s),o=t.length;let l,c,u,h=Ui(t,0);for(let p=0;p<o;++p){if(c=u,u=h,h=Ui(t,p+1),!u)continue;const m=u[s],x=u[r];c&&(l=(m-c[s])/3,u[`cp1${s}`]=m-l,u[`cp1${r}`]=x-l*e[p]),h&&(l=(h[s]-m)/3,u[`cp2${s}`]=m+l,u[`cp2${r}`]=x+l*e[p])}}function rN(t,e="x"){const s=ex(e),r=t.length,o=Array(r).fill(0),l=Array(r);let c,u,h,p=Ui(t,0);for(c=0;c<r;++c)if(u=h,h=p,p=Ui(t,c+1),!!h){if(p){const m=p[e]-h[e];o[c]=m!==0?(p[s]-h[s])/m:0}l[c]=u?p?Rs(o[c-1])!==Rs(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}nN(t,o,l),iN(t,l,e)}function Ro(t,e,s){return Math.max(Math.min(t,s),e)}function aN(t,e){let s,r,o,l,c,u=ta(t[0],e);for(s=0,r=t.length;s<r;++s)c=l,l=u,u=s<r-1&&ta(t[s+1],e),l&&(o=t[s],c&&(o.cp1x=Ro(o.cp1x,e.left,e.right),o.cp1y=Ro(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=Ro(o.cp2x,e.left,e.right),o.cp2y=Ro(o.cp2y,e.top,e.bottom)))}function oN(t,e,s,r,o){let l,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")rN(t,o);else{let p=r?t[t.length-1]:t[0];for(l=0,c=t.length;l<c;++l)u=t[l],h=sN(p,u,t[Math.min(l+1,c-(r?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&aN(t,s)}function lu(){return typeof window<"u"&&typeof document<"u"}function cu(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Go(t,e,s){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[s])):r=t,r}const ul=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function lN(t,e){return ul(t).getPropertyValue(e)}const cN=["top","right","bottom","left"];function ti(t,e,s){const r={};s=s?"-"+s:"";for(let o=0;o<4;o++){const l=cN[o];r[l]=parseFloat(t[e+"-"+l+s])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const dN=(t,e,s)=>(t>0||e>0)&&(!s||!s.shadowRoot);function uN(t,e){const s=t.touches,r=s&&s.length?s[0]:t,{offsetX:o,offsetY:l}=r;let c=!1,u,h;if(dN(o,l,t.target))u=o,h=l;else{const p=e.getBoundingClientRect();u=r.clientX-p.left,h=r.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Xn(t,e){if("native"in t)return t;const{canvas:s,currentDevicePixelRatio:r}=e,o=ul(s),l=o.boxSizing==="border-box",c=ti(o,"padding"),u=ti(o,"border","width"),{x:h,y:p,box:m}=uN(t,s),x=c.left+(m&&u.left),N=c.top+(m&&u.top);let{width:w,height:b}=e;return l&&(w-=c.width+u.width,b-=c.height+u.height),{x:Math.round((h-x)/w*s.width/r),y:Math.round((p-N)/b*s.height/r)}}function hN(t,e,s){let r,o;if(e===void 0||s===void 0){const l=t&&cu(t);if(!l)e=t.clientWidth,s=t.clientHeight;else{const c=l.getBoundingClientRect(),u=ul(l),h=ti(u,"border","width"),p=ti(u,"padding");e=c.width-p.width-h.width,s=c.height-p.height-h.height,r=Go(u.maxWidth,l,"clientWidth"),o=Go(u.maxHeight,l,"clientHeight")}}return{width:e,height:s,maxWidth:r||Ko,maxHeight:o||Ko}}const yn=t=>Math.round(t*10)/10;function fN(t,e,s,r){const o=ul(t),l=ti(o,"margin"),c=Go(o.maxWidth,t,"clientWidth")||Ko,u=Go(o.maxHeight,t,"clientHeight")||Ko,h=hN(t,e,s);let{width:p,height:m}=h;if(o.boxSizing==="content-box"){const N=ti(o,"border","width"),w=ti(o,"padding");p-=w.width+N.width,m-=w.height+N.height}return p=Math.max(0,p-l.width),m=Math.max(0,r?p/r:m-l.height),p=yn(Math.min(p,c,h.maxWidth)),m=yn(Math.min(m,u,h.maxHeight)),p&&!m&&(m=yn(p/2)),(e!==void 0||s!==void 0)&&r&&h.height&&m>h.height&&(m=h.height,p=yn(Math.floor(m*r))),{width:p,height:m}}function qp(t,e,s){const r=e||1,o=yn(t.height*r),l=yn(t.width*r);t.height=yn(t.height),t.width=yn(t.width);const c=t.canvas;return c.style&&(s||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||c.height!==o||c.width!==l?(t.currentDevicePixelRatio=r,c.height=o,c.width=l,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const pN=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};lu()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Yp(t,e){const s=lN(t,e),r=s&&s.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Gn(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:t.y+s*(e.y-t.y)}}function mN(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:r==="middle"?s<.5?t.y:e.y:r==="after"?s<1?t.y:e.y:s>0?e.y:t.y}}function gN(t,e,s,r){const o={x:t.cp2x,y:t.cp2y},l={x:e.cp1x,y:e.cp1y},c=Gn(t,o,s),u=Gn(o,l,s),h=Gn(l,e,s),p=Gn(c,u,s),m=Gn(u,h,s);return Gn(p,m,s)}const xN=function(t,e){return{x(s){return t+t+e-s},setWidth(s){e=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,r){return s-r},leftForLtr(s,r){return s-r}}},vN=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Fi(t,e,s){return t?xN(e,s):vN()}function tx(t,e){let s,r;(e==="ltr"||e==="rtl")&&(s=t.canvas.style,r=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",e,"important"),t.prevTextDirection=r)}function sx(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function nx(t){return t==="angle"?{between:ea,compare:x1,normalize:Ht}:{between:qs,compare:(e,s)=>e-s,normalize:e=>e}}function Qp({start:t,end:e,count:s,loop:r,style:o}){return{start:t%s,end:e%s,loop:r&&(e-t+1)%s===0,style:o}}function yN(t,e,s){const{property:r,start:o,end:l}=s,{between:c,normalize:u}=nx(r),h=e.length;let{start:p,end:m,loop:x}=t,N,w;if(x){for(p+=h,m+=h,N=0,w=h;N<w&&c(u(e[p%h][r]),o,l);++N)p--,m--;p%=h,m%=h}return m<p&&(m+=h),{start:p,end:m,loop:x,style:t.style}}function ix(t,e,s){if(!s)return[t];const{property:r,start:o,end:l}=s,c=e.length,{compare:u,between:h,normalize:p}=nx(r),{start:m,end:x,loop:N,style:w}=yN(t,e,s),b=[];let j=!1,y=null,_,E,A;const U=()=>h(o,A,_)&&u(o,A)!==0,P=()=>u(l,_)===0||h(l,A,_),q=()=>j||U(),O=()=>!j||P();for(let T=m,L=m;T<=x;++T)E=e[T%c],!E.skip&&(_=p(E[r]),_!==A&&(j=h(_,o,l),y===null&&q()&&(y=u(_,o)===0?T:L),y!==null&&O()&&(b.push(Qp({start:y,end:T,loop:N,count:c,style:w})),y=null),L=T,A=_));return y!==null&&b.push(Qp({start:y,end:x,loop:N,count:c,style:w})),b}function rx(t,e){const s=[],r=t.segments;for(let o=0;o<r.length;o++){const l=ix(r[o],t.points,e);l.length&&s.push(...l)}return s}function bN(t,e,s,r){let o=0,l=e-1;if(s&&!r)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,s&&(l+=o);l>o&&t[l%e].skip;)l--;return l%=e,{start:o,end:l}}function jN(t,e,s,r){const o=t.length,l=[];let c=e,u=t[e],h;for(h=e+1;h<=s;++h){const p=t[h%o];p.skip||p.stop?u.skip||(r=!1,l.push({start:e%o,end:(h-1)%o,loop:r}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&l.push({start:e%o,end:c%o,loop:r}),l}function NN(t,e){const s=t.points,r=t.options.spanGaps,o=s.length;if(!o)return[];const l=!!t._loop,{start:c,end:u}=bN(s,o,l,r);if(r===!0)return Kp(t,[{start:c,end:u,loop:l}],s,e);const h=u<c?u+o:u,p=!!t._fullLoop&&c===0&&u===o-1;return Kp(t,jN(s,c,h,p),s,e)}function Kp(t,e,s,r){return!r||!r.setContext||!s?e:wN(t,e,s,r)}function wN(t,e,s,r){const o=t._chart.getContext(),l=Xp(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=s.length,p=[];let m=l,x=e[0].start,N=x;function w(b,j,y,_){const E=u?-1:1;if(b!==j){for(b+=h;s[b%h].skip;)b-=E;for(;s[j%h].skip;)j+=E;b%h!==j%h&&(p.push({start:b%h,end:j%h,loop:y,style:_}),m=_,x=j%h)}}for(const b of e){x=u?x:b.start;let j=s[x%h],y;for(N=x+1;N<=b.end;N++){const _=s[N%h];y=Xp(r.setContext(oi(o,{type:"segment",p0:j,p1:_,p0DataIndex:(N-1)%h,p1DataIndex:N%h,datasetIndex:c}))),kN(y,m)&&w(x,N-1,b.loop,m),j=_,m=y}x<N-1&&w(x,N-1,b.loop,m)}return p}function Xp(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function kN(t,e){if(!e)return!1;const s=[],r=function(o,l){return su(l)?(s.includes(l)||s.push(l),s.indexOf(l)):l};return JSON.stringify(t,r)!==JSON.stringify(e,r)}function Po(t,e,s){return t.options.clip?t[s]:e[s]}function _N(t,e){const{xScale:s,yScale:r}=t;return s&&r?{left:Po(s,e,"left"),right:Po(s,e,"right"),top:Po(r,e,"top"),bottom:Po(r,e,"bottom")}:e}function ax(t,e){const s=e._clip;if(s.disabled)return!1;const r=_N(e,t.chartArea);return{left:s.left===!1?0:r.left-(s.left===!0?0:s.left),right:s.right===!1?t.width:r.right+(s.right===!0?0:s.right),top:s.top===!1?0:r.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?t.height:r.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class SN{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,s,r,o){const l=s.listeners[o],c=s.duration;l.forEach(u=>u({chart:e,initial:s.initial,numSteps:c,currentStep:Math.min(r-s.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Vg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let s=0;this._charts.forEach((r,o)=>{if(!r.running||!r.items.length)return;const l=r.items;let c=l.length-1,u=!1,h;for(;c>=0;--c)h=l[c],h._active?(h._total>r.duration&&(r.duration=h._total),h.tick(e),u=!0):(l[c]=l[l.length-1],l.pop());u&&(o.draw(),this._notify(o,r,e,"progress")),l.length||(r.running=!1,this._notify(o,r,e,"complete"),r.initial=!1),s+=l.length}),this._lastDate=e,s===0&&(this._running=!1)}_getAnims(e){const s=this._charts;let r=s.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(e,r)),r}listen(e,s,r){this._getAnims(e).listeners[s].push(r)}add(e,s){!s||!s.length||this._getAnims(e).items.push(...s)}has(e){return this._getAnims(e).items.length>0}start(e){const s=this._charts.get(e);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((r,o)=>Math.max(r,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const s=this._charts.get(e);return!(!s||!s.running||!s.items.length)}stop(e){const s=this._charts.get(e);if(!s||!s.items.length)return;const r=s.items;let o=r.length-1;for(;o>=0;--o)r[o].cancel();s.items=[],this._notify(e,s,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Us=new SN;const Gp="transparent",CN={boolean(t,e,s){return s>.5?e:t},color(t,e,s){const r=Bp(t||Gp),o=r.valid&&Bp(e||Gp);return o&&o.valid?o.mix(r,s).hexString():e},number(t,e,s){return t+(e-t)*s}};class EN{constructor(e,s,r,o){const l=s[r];o=Eo([e.to,o,l,e.from]);const c=Eo([e.from,l,o]);this._active=!0,this._fn=e.fn||CN[e.type||typeof c],this._easing=Vr[e.easing]||Vr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=s,this._prop=r,this._from=c,this._to=o,this._promises=void 0}active(){return this._active}update(e,s,r){if(this._active){this._notify(!1);const o=this._target[this._prop],l=r-this._start,c=this._duration-l;this._start=r,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=l,this._loop=!!e.loop,this._to=Eo([e.to,s,o,e.from]),this._from=Eo([e.from,o,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const s=e-this._start,r=this._duration,o=this._prop,l=this._from,c=this._loop,u=this._to;let h;if(this._active=l!==u&&(c||s<r),!this._active){this._target[o]=u,this._notify(!0);return}if(s<0){this._target[o]=l;return}h=s/r%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[o]=this._fn(l,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((s,r)=>{e.push({res:s,rej:r})})}_notify(e){const s=e?"res":"rej",r=this._promises||[];for(let o=0;o<r.length;o++)r[o][s]()}}class ox{constructor(e,s){this._chart=e,this._properties=new Map,this.configure(s)}configure(e){if(!Ee(e))return;const s=Object.keys(et.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const l=e[o];if(!Ee(l))return;const c={};for(const u of s)c[u]=l[u];(it(l.properties)&&l.properties||[o]).forEach(u=>{(u===o||!r.has(u))&&r.set(u,c)})})}_animateOptions(e,s){const r=s.options,o=PN(e,r);if(!o)return[];const l=this._createAnimations(o,r);return r.$shared&&RN(e.options.$animations,r).then(()=>{e.options=r},()=>{}),l}_createAnimations(e,s){const r=this._properties,o=[],l=e.$animations||(e.$animations={}),c=Object.keys(s),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){o.push(...this._animateOptions(e,s));continue}const m=s[p];let x=l[p];const N=r.get(p);if(x)if(N&&x.active()){x.update(N,m,u);continue}else x.cancel();if(!N||!N.duration){e[p]=m;continue}l[p]=x=new EN(N,e,p,m),o.push(x)}return o}update(e,s){if(this._properties.size===0){Object.assign(e,s);return}const r=this._createAnimations(e,s);if(r.length)return Us.add(this._chart,r),!0}}function RN(t,e){const s=[],r=Object.keys(e);for(let o=0;o<r.length;o++){const l=t[r[o]];l&&l.active()&&s.push(l.wait())}return Promise.all(s)}function PN(t,e){if(!e)return;let s=t.options;if(!s){t.options=e;return}return s.$shared&&(t.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function Jp(t,e){const s=t&&t.options||{},r=s.reverse,o=s.min===void 0?e:0,l=s.max===void 0?e:0;return{start:r?l:o,end:r?o:l}}function DN(t,e,s){if(s===!1)return!1;const r=Jp(t,s),o=Jp(e,s);return{top:o.end,right:r.end,bottom:o.start,left:r.start}}function AN(t){let e,s,r,o;return Ee(t)?(e=t.top,s=t.right,r=t.bottom,o=t.left):e=s=r=o=t,{top:e,right:s,bottom:r,left:o,disabled:t===!1}}function lx(t,e){const s=[],r=t._getSortedDatasetMetas(e);let o,l;for(o=0,l=r.length;o<l;++o)s.push(r[o].index);return s}function Zp(t,e,s,r={}){const o=t.keys,l=r.mode==="single";let c,u,h,p;if(e===null)return;let m=!1;for(c=0,u=o.length;c<u;++c){if(h=+o[c],h===s){if(m=!0,r.all)continue;break}p=t.values[h],kt(p)&&(l||e===0||Rs(e)===Rs(p))&&(e+=p)}return!m&&!r.all?0:e}function TN(t,e){const{iScale:s,vScale:r}=e,o=s.axis==="x"?"x":"y",l=r.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,m;for(h=0,p=c.length;h<p;++h)m=c[h],u[h]={[o]:m,[l]:t[m]};return u}function hd(t,e){const s=t&&t.options.stacked;return s||s===void 0&&e.stack!==void 0}function LN(t,e,s){return`${t.id}.${e.id}.${s.stack||s.type}`}function MN(t){const{min:e,max:s,minDefined:r,maxDefined:o}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:o?s:Number.POSITIVE_INFINITY}}function ON(t,e,s){const r=t[e]||(t[e]={});return r[s]||(r[s]={})}function em(t,e,s,r){for(const o of e.getMatchingVisibleMetas(r).reverse()){const l=t[o.index];if(s&&l>0||!s&&l<0)return o.index}return null}function tm(t,e){const{chart:s,_cachedMeta:r}=t,o=s._stacks||(s._stacks={}),{iScale:l,vScale:c,index:u}=r,h=l.axis,p=c.axis,m=LN(l,c,r),x=e.length;let N;for(let w=0;w<x;++w){const b=e[w],{[h]:j,[p]:y}=b,_=b._stacks||(b._stacks={});N=_[p]=ON(o,m,j),N[u]=y,N._top=em(N,c,!0,r.type),N._bottom=em(N,c,!1,r.type);const E=N._visualValues||(N._visualValues={});E[u]=y}}function fd(t,e){const s=t.scales;return Object.keys(s).filter(r=>s[r].axis===e).shift()}function zN(t,e){return oi(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function IN(t,e,s){return oi(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:s,index:e,mode:"default",type:"data"})}function Tr(t,e){const s=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const o of e){const l=o._stacks;if(!l||l[r]===void 0||l[r][s]===void 0)return;delete l[r][s],l[r]._visualValues!==void 0&&l[r]._visualValues[s]!==void 0&&delete l[r]._visualValues[s]}}}const pd=t=>t==="reset"||t==="none",sm=(t,e)=>e?t:Object.assign({},t),FN=(t,e,s)=>t&&!e.hidden&&e._stacked&&{keys:lx(s,!0),values:null};class si{constructor(e,s){this.chart=e,this._ctx=e.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=hd(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Tr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,s=this._cachedMeta,r=this.getDataset(),o=(x,N,w,b)=>x==="x"?N:x==="r"?b:w,l=s.xAxisID=_e(r.xAxisID,fd(e,"x")),c=s.yAxisID=_e(r.yAxisID,fd(e,"y")),u=s.rAxisID=_e(r.rAxisID,fd(e,"r")),h=s.indexAxis,p=s.iAxisID=o(h,l,c,u),m=s.vAxisID=o(h,c,l,u);s.xScale=this.getScaleForId(l),s.yScale=this.getScaleForId(c),s.rScale=this.getScaleForId(u),s.iScale=this.getScaleForId(p),s.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const s=this._cachedMeta;return e===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&zp(this._data,this),e._stacked&&Tr(e)}_dataCheck(){const e=this.getDataset(),s=e.data||(e.data=[]),r=this._data;if(Ee(s)){const o=this._cachedMeta;this._data=TN(s,o)}else if(r!==s){if(r){zp(r,this);const o=this._cachedMeta;Tr(o),o._parsed=[]}s&&Object.isExtensible(s)&&j1(s,this),this._syncList=[],this._data=s}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const s=this._cachedMeta,r=this.getDataset();let o=!1;this._dataCheck();const l=s._stacked;s._stacked=hd(s.vScale,s),s.stack!==r.stack&&(o=!0,Tr(s),s.stack=r.stack),this._resyncElements(e),(o||l!==s._stacked)&&(tm(this,s._parsed),s._stacked=hd(s.vScale,s))}configure(){const e=this.chart.config,s=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),s,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,s){const{_cachedMeta:r,_data:o}=this,{iScale:l,_stacked:c}=r,u=l.axis;let h=e===0&&s===o.length?!0:r._sorted,p=e>0&&r._parsed[e-1],m,x,N;if(this._parsing===!1)r._parsed=o,r._sorted=!0,N=o;else{it(o[e])?N=this.parseArrayData(r,o,e,s):Ee(o[e])?N=this.parseObjectData(r,o,e,s):N=this.parsePrimitiveData(r,o,e,s);const w=()=>x[u]===null||p&&x[u]<p[u];for(m=0;m<s;++m)r._parsed[m+e]=x=N[m],h&&(w()&&(h=!1),p=x);r._sorted=h}c&&tm(this,N)}parsePrimitiveData(e,s,r,o){const{iScale:l,vScale:c}=e,u=l.axis,h=c.axis,p=l.getLabels(),m=l===c,x=new Array(o);let N,w,b;for(N=0,w=o;N<w;++N)b=N+r,x[N]={[u]:m||l.parse(p[b],b),[h]:c.parse(s[b],b)};return x}parseArrayData(e,s,r,o){const{xScale:l,yScale:c}=e,u=new Array(o);let h,p,m,x;for(h=0,p=o;h<p;++h)m=h+r,x=s[m],u[h]={x:l.parse(x[0],m),y:c.parse(x[1],m)};return u}parseObjectData(e,s,r,o){const{xScale:l,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(o);let m,x,N,w;for(m=0,x=o;m<x;++m)N=m+r,w=s[N],p[m]={x:l.parse(ii(w,u),N),y:c.parse(ii(w,h),N)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,s,r){const o=this.chart,l=this._cachedMeta,c=s[e.axis],u={keys:lx(o,!0),values:s._stacks[e.axis]._visualValues};return Zp(u,c,l.index,{mode:r})}updateRangeFromParsed(e,s,r,o){const l=r[s.axis];let c=l===null?NaN:l;const u=o&&r._stacks[s.axis];o&&u&&(o.values=u,c=Zp(o,l,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,s){const r=this._cachedMeta,o=r._parsed,l=r._sorted&&e===r.iScale,c=o.length,u=this._getOtherScale(e),h=FN(s,r,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:x}=MN(u);let N,w;function b(){w=o[N];const j=w[u.axis];return!kt(w[e.axis])||m>j||x<j}for(N=0;N<c&&!(!b()&&(this.updateRangeFromParsed(p,e,w,h),l));++N);if(l){for(N=c-1;N>=0;--N)if(!b()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const s=this._cachedMeta._parsed,r=[];let o,l,c;for(o=0,l=s.length;o<l;++o)c=s[o][e.axis],kt(c)&&r.push(c);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const s=this._cachedMeta,r=s.iScale,o=s.vScale,l=this.getParsed(e);return{label:r?""+r.getLabelForValue(l[r.axis]):"",value:o?""+o.getLabelForValue(l[o.axis]):""}}_update(e){const s=this._cachedMeta;this.update(e||"default"),s._clip=AN(_e(this.options.clip,DN(s.xScale,s.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,s=this.chart,r=this._cachedMeta,o=r.data||[],l=s.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||o.length-u,p=this.options.drawActiveElementsOnTop;let m;for(r.dataset&&r.dataset.draw(e,l,u,h),m=u;m<u+h;++m){const x=o[m];x.hidden||(x.active&&p?c.push(x):x.draw(e,l))}for(m=0;m<c.length;++m)c[m].draw(e,l)}getStyle(e,s){const r=s?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,s,r){const o=this.getDataset();let l;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];l=c.$context||(c.$context=IN(this.getContext(),e,c)),l.parsed=this.getParsed(e),l.raw=o.data[e],l.index=l.dataIndex=e}else l=this.$context||(this.$context=zN(this.chart.getContext(),this.index)),l.dataset=o,l.index=l.datasetIndex=this.index;return l.active=!!s,l.mode=r,l}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,s){return this._resolveElementOptions(this.dataElementType.id,s,e)}_resolveElementOptions(e,s="default",r){const o=s==="active",l=this._cachedDataOpts,c=e+"-"+s,u=l[c],h=this.enableOptionSharing&&Jr(r);if(u)return sm(u,h);const p=this.chart.config,m=p.datasetElementScopeKeys(this._type,e),x=o?[`${e}Hover`,"hover",e,""]:[e,""],N=p.getOptionScopes(this.getDataset(),m),w=Object.keys(et.elements[e]),b=()=>this.getContext(r,o,s),j=p.resolveNamedOptions(N,w,b,x);return j.$shared&&(j.$shared=h,l[c]=Object.freeze(sm(j,h))),j}_resolveAnimations(e,s,r){const o=this.chart,l=this._cachedDataOpts,c=`animation-${s}`,u=l[c];if(u)return u;let h;if(o.options.animation!==!1){const m=this.chart.config,x=m.datasetAnimationScopeKeys(this._type,s),N=m.getOptionScopes(this.getDataset(),x);h=m.createResolver(N,this.getContext(e,r,s))}const p=new ox(o,h&&h.animations);return h&&h._cacheable&&(l[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,s){return!s||pd(e)||this.chart._animationsDisabled}_getSharedOptions(e,s){const r=this.resolveDataElementOptions(e,s),o=this._sharedOptions,l=this.getSharedOptions(r),c=this.includeOptions(s,l)||l!==o;return this.updateSharedOptions(l,s,r),{sharedOptions:l,includeOptions:c}}updateElement(e,s,r,o){pd(o)?Object.assign(e,r):this._resolveAnimations(s,o).update(e,r)}updateSharedOptions(e,s,r){e&&!pd(s)&&this._resolveAnimations(void 0,s).update(e,r)}_setStyle(e,s,r,o){e.active=o;const l=this.getStyle(s,o);this._resolveAnimations(s,r,o).update(e,{options:!o&&this.getSharedOptions(l)||l})}removeHoverStyle(e,s,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,s,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const s=this._data,r=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const o=r.length,l=s.length,c=Math.min(l,o);c&&this.parse(0,c),l>o?this._insertElements(o,l-o,e):l<o&&this._removeElements(l,o-l)}_insertElements(e,s,r=!0){const o=this._cachedMeta,l=o.data,c=e+s;let u;const h=p=>{for(p.length+=s,u=p.length-1;u>=c;u--)p[u]=p[u-s]};for(h(l),u=e;u<c;++u)l[u]=new this.dataElementType;this._parsing&&h(o._parsed),this.parse(e,s),r&&this.updateElements(l,e,s,"reset")}updateElements(e,s,r,o){}_removeElements(e,s){const r=this._cachedMeta;if(this._parsing){const o=r._parsed.splice(e,s);r._stacked&&Tr(r,o)}r.data.splice(e,s)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[s,r,o]=e;this[s](r,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,s){s&&this._sync(["_removeElements",e,s]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}xe(si,"defaults",{}),xe(si,"datasetElementType",null),xe(si,"dataElementType",null);function BN(t,e){if(!t._cache.$bar){const s=t.getMatchingVisibleMetas(e);let r=[];for(let o=0,l=s.length;o<l;o++)r=r.concat(s[o].controller.getAllParsedValues(t));t._cache.$bar=Hg(r.sort((o,l)=>o-l))}return t._cache.$bar}function $N(t){const e=t.iScale,s=BN(e,t.type);let r=e._length,o,l,c,u;const h=()=>{c===32767||c===-32768||(Jr(u)&&(r=Math.min(r,Math.abs(c-u)||r)),u=c)};for(o=0,l=s.length;o<l;++o)c=e.getPixelForValue(s[o]),h();for(u=void 0,o=0,l=e.ticks.length;o<l;++o)c=e.getPixelForTick(o),h();return r}function UN(t,e,s,r){const o=s.barThickness;let l,c;return Le(o)?(l=e.min*s.categoryPercentage,c=s.barPercentage):(l=o*r,c=1),{chunk:l/r,ratio:c,start:e.pixels[t]-l/2}}function WN(t,e,s,r){const o=e.pixels,l=o[t];let c=t>0?o[t-1]:null,u=t<o.length-1?o[t+1]:null;const h=s.categoryPercentage;c===null&&(c=l-(u===null?e.end-e.start:u-l)),u===null&&(u=l+l-c);const p=l-(l-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/r,ratio:s.barPercentage,start:p}}function HN(t,e,s,r){const o=s.parse(t[0],r),l=s.parse(t[1],r),c=Math.min(o,l),u=Math.max(o,l);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[s.axis]=p,e._custom={barStart:h,barEnd:p,start:o,end:l,min:c,max:u}}function cx(t,e,s,r){return it(t)?HN(t,e,s,r):e[s.axis]=s.parse(t,r),e}function nm(t,e,s,r){const o=t.iScale,l=t.vScale,c=o.getLabels(),u=o===l,h=[];let p,m,x,N;for(p=s,m=s+r;p<m;++p)N=e[p],x={},x[o.axis]=u||o.parse(c[p],p),h.push(cx(N,x,l,p));return h}function md(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function VN(t,e,s){return t!==0?Rs(t):(e.isHorizontal()?1:-1)*(e.min>=s?1:-1)}function qN(t){let e,s,r,o,l;return t.horizontal?(e=t.base>t.x,s="left",r="right"):(e=t.base<t.y,s="bottom",r="top"),e?(o="end",l="start"):(o="start",l="end"),{start:s,end:r,reverse:e,top:o,bottom:l}}function YN(t,e,s,r){let o=e.borderSkipped;const l={};if(!o){t.borderSkipped=l;return}if(o===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:m}=qN(t);o==="middle"&&s&&(t.enableBorderRadius=!0,(s._top||0)===r?o=p:(s._bottom||0)===r?o=m:(l[im(m,c,u,h)]=!0,o=p)),l[im(o,c,u,h)]=!0,t.borderSkipped=l}function im(t,e,s,r){return r?(t=QN(t,e,s),t=rm(t,s,e)):t=rm(t,e,s),t}function QN(t,e,s){return t===e?s:t===s?e:t}function rm(t,e,s){return t==="start"?e:t==="end"?s:t}function KN(t,{inflateAmount:e},s){t.inflateAmount=e==="auto"?s===1?.33:0:e}class Bo extends si{parsePrimitiveData(e,s,r,o){return nm(e,s,r,o)}parseArrayData(e,s,r,o){return nm(e,s,r,o)}parseObjectData(e,s,r,o){const{iScale:l,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=l.axis==="x"?u:h,m=c.axis==="x"?u:h,x=[];let N,w,b,j;for(N=r,w=r+o;N<w;++N)j=s[N],b={},b[l.axis]=l.parse(ii(j,p),N),x.push(cx(ii(j,m),b,c,N));return x}updateRangeFromParsed(e,s,r,o){super.updateRangeFromParsed(e,s,r,o);const l=r._custom;l&&s===this._cachedMeta.vScale&&(e.min=Math.min(e.min,l.min),e.max=Math.max(e.max,l.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const s=this._cachedMeta,{iScale:r,vScale:o}=s,l=this.getParsed(e),c=l._custom,u=md(c)?"["+c.start+", "+c.end+"]":""+o.getLabelForValue(l[o.axis]);return{label:""+r.getLabelForValue(l[r.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,e)}updateElements(e,s,r,o){const l=o==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),m=this._getRuler(),{sharedOptions:x,includeOptions:N}=this._getSharedOptions(s,o);for(let w=s;w<s+r;w++){const b=this.getParsed(w),j=l||Le(b[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,m),_=(b._stacks||{})[u.axis],E={horizontal:p,base:j.base,enableBorderRadius:!_||md(b._custom)||c===_._top||c===_._bottom,x:p?j.head:y.center,y:p?y.center:j.head,height:p?y.size:Math.abs(j.size),width:p?Math.abs(j.size):y.size};N&&(E.options=x||this.resolveDataElementOptions(w,e[w].active?"active":o));const A=E.options||e[w].options;YN(E,A,_,c),KN(E,A,m.ratio),this.updateElement(e[w],w,E,o)}}_getStacks(e,s){const{iScale:r}=this._cachedMeta,o=r.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),l=r.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(s),h=u&&u[r.axis],p=m=>{const x=m._parsed.find(w=>w[r.axis]===h),N=x&&x[m.vScale.axis];if(Le(N)||isNaN(N))return!0};for(const m of o)if(!(s!==void 0&&p(m))&&((l===!1||c.indexOf(m.stack)===-1||l===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===s).shift()}_getAxis(){const e={},s=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[_e(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,s)]=!0;return Object.keys(e)}_getStackIndex(e,s,r){const o=this._getStacks(e,r),l=s!==void 0?o.indexOf(s):-1;return l===-1?o.length-1:l}_getRuler(){const e=this.options,s=this._cachedMeta,r=s.iScale,o=[];let l,c;for(l=0,c=s.data.length;l<c;++l)o.push(r.getPixelForValue(this.getParsed(l)[r.axis],l));const u=e.barThickness;return{min:u||$N(s),pixels:o,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:s,_stacked:r,index:o},options:{base:l,minBarLength:c}}=this,u=l||0,h=this.getParsed(e),p=h._custom,m=md(p);let x=h[s.axis],N=0,w=r?this.applyStack(s,h,r):x,b,j;w!==x&&(N=w-x,w=x),m&&(x=p.barStart,w=p.barEnd-p.barStart,x!==0&&Rs(x)!==Rs(p.barEnd)&&(N=0),N+=x);const y=!Le(l)&&!m?l:N;let _=s.getPixelForValue(y);if(this.chart.getDataVisibility(e)?b=s.getPixelForValue(N+w):b=_,j=b-_,Math.abs(j)<c){j=VN(j,s,u)*c,x===u&&(_-=j/2);const E=s.getPixelForDecimal(0),A=s.getPixelForDecimal(1),U=Math.min(E,A),P=Math.max(E,A);_=Math.max(Math.min(_,P),U),b=_+j,r&&!m&&(h._stacks[s.axis]._visualValues[o]=s.getValueForPixel(b)-s.getValueForPixel(_))}if(_===s.getPixelForValue(u)){const E=Rs(j)*s.getLineWidthForValue(u)/2;_+=E,j-=E}return{size:j,base:_,head:b,center:b+j/2}}_calculateBarIndexPixels(e,s){const r=s.scale,o=this.options,l=o.skipNull,c=_e(o.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(s.grouped){const m=l?this._getStackCount(e):s.stackCount,x=o.barThickness==="flex"?WN(e,s,o,m*p):UN(e,s,o,m*p),N=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(_e(N,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,l?e:void 0)+w;u=x.start+x.chunk*b+x.chunk/2,h=Math.min(c,x.chunk*x.ratio)}else u=r.getPixelForValue(this.getParsed(e)[r.axis],e),h=Math.min(c,s.min*s.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,s=e.vScale,r=e.data,o=r.length;let l=0;for(;l<o;++l)this.getParsed(l)[s.axis]!==null&&!r[l].hidden&&r[l].draw(this._ctx)}}xe(Bo,"id","bar"),xe(Bo,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),xe(Bo,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function XN(t,e,s){let r=1,o=1,l=0,c=0;if(e<Ke){const u=t,h=u+e,p=Math.cos(u),m=Math.sin(u),x=Math.cos(h),N=Math.sin(h),w=(A,U,P)=>ea(A,u,h,!0)?1:Math.max(U,U*s,P,P*s),b=(A,U,P)=>ea(A,u,h,!0)?-1:Math.min(U,U*s,P,P*s),j=w(0,p,x),y=w(ct,m,N),_=b(Fe,p,x),E=b(Fe+ct,m,N);r=(j-_)/2,o=(y-E)/2,l=-(j+_)/2,c=-(y+E)/2}return{ratioX:r,ratioY:o,offsetX:l,offsetY:c}}class Fr extends si{constructor(e,s){super(e,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,s){const r=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=r;else{let l=h=>+r[h];if(Ee(r[e])){const{key:h="value"}=this._parsing;l=p=>+ii(r[p],h)}let c,u;for(c=e,u=e+s;c<u;++c)o._parsed[c]=l(c)}}_getRotation(){return Vs(this.options.rotation-90)}_getCircumference(){return Vs(this.options.circumference)}_getRotationExtents(){let e=Ke,s=-Ke;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const o=this.chart.getDatasetMeta(r).controller,l=o._getRotation(),c=o._getCircumference();e=Math.min(e,l),s=Math.max(s,l+c)}return{rotation:e,circumference:s-e}}update(e){const s=this.chart,{chartArea:r}=s,o=this._cachedMeta,l=o.data,c=this.getMaxBorderWidth()+this.getMaxOffset(l)+this.options.spacing,u=Math.max((Math.min(r.width,r.height)-c)/2,0),h=Math.min(i1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:m,rotation:x}=this._getRotationExtents(),{ratioX:N,ratioY:w,offsetX:b,offsetY:j}=XN(x,m,h),y=(r.width-c)/N,_=(r.height-c)/w,E=Math.max(Math.min(y,_)/2,0),A=Fg(this.options.radius,E),U=Math.max(A*h,0),P=(A-U)/this._getVisibleDatasetWeightTotal();this.offsetX=b*A,this.offsetY=j*A,o.total=this.calculateTotal(),this.outerRadius=A-P*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-P*p,0),this.updateElements(l,0,l.length,e)}_circumference(e,s){const r=this.options,o=this._cachedMeta,l=this._getCircumference();return s&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||o._parsed[e]===null||o.data[e].hidden?0:this.calculateCircumference(o._parsed[e]*l/Ke)}updateElements(e,s,r,o){const l=o==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,m=(u.left+u.right)/2,x=(u.top+u.bottom)/2,N=l&&p.animateScale,w=N?0:this.innerRadius,b=N?0:this.outerRadius,{sharedOptions:j,includeOptions:y}=this._getSharedOptions(s,o);let _=this._getRotation(),E;for(E=0;E<s;++E)_+=this._circumference(E,l);for(E=s;E<s+r;++E){const A=this._circumference(E,l),U=e[E],P={x:m+this.offsetX,y:x+this.offsetY,startAngle:_,endAngle:_+A,circumference:A,outerRadius:b,innerRadius:w};y&&(P.options=j||this.resolveDataElementOptions(E,U.active?"active":o)),_+=A,this.updateElement(U,E,P,o)}}calculateTotal(){const e=this._cachedMeta,s=e.data;let r=0,o;for(o=0;o<s.length;o++){const l=e._parsed[o];l!==null&&!isNaN(l)&&this.chart.getDataVisibility(o)&&!s[o].hidden&&(r+=Math.abs(l))}return r}calculateCircumference(e){const s=this._cachedMeta.total;return s>0&&!isNaN(e)?Ke*(Math.abs(e)/s):0}getLabelAndValue(e){const s=this._cachedMeta,r=this.chart,o=r.data.labels||[],l=nu(s._parsed[e],r.options.locale);return{label:o[e]||"",value:l}}getMaxBorderWidth(e){let s=0;const r=this.chart;let o,l,c,u,h;if(!e){for(o=0,l=r.data.datasets.length;o<l;++o)if(r.isDatasetVisible(o)){c=r.getDatasetMeta(o),e=c.data,u=c.controller;break}}if(!e)return 0;for(o=0,l=e.length;o<l;++o)h=u.resolveDataElementOptions(o),h.borderAlign!=="inner"&&(s=Math.max(s,h.borderWidth||0,h.hoverBorderWidth||0));return s}getMaxOffset(e){let s=0;for(let r=0,o=e.length;r<o;++r){const l=this.resolveDataElementOptions(r);s=Math.max(s,l.offset||0,l.hoverOffset||0)}return s}_getRingWeightOffset(e){let s=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(s+=this._getRingWeight(r));return s}_getRingWeight(e){return Math.max(_e(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}xe(Fr,"id","doughnut"),xe(Fr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),xe(Fr,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),xe(Fr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const s=e.data,{labels:{pointStyle:r,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=e.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((h,p)=>{const x=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:x.backgroundColor,fontColor:l,hidden:!e.getDataVisibility(p),lineDash:x.borderDash,lineDashOffset:x.borderDashOffset,lineJoin:x.borderJoinStyle,lineWidth:x.borderWidth,strokeStyle:x.borderColor,textAlign:o,pointStyle:r,borderRadius:c&&(u||x.borderRadius),index:p}}):[]}},onClick(e,s,r){r.chart.toggleDataVisibility(s.index),r.chart.update()}}}});class $o extends si{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const s=this._cachedMeta,{dataset:r,data:o=[],_dataset:l}=s,c=this.chart._animationsDisabled;let{start:u,count:h}=k1(s,o,c);this._drawStart=u,this._drawCount=h,_1(s)&&(u=0,h=o.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!l._decimated,r.points=o;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(r,void 0,{animated:!c,options:p},e),this.updateElements(o,u,h,e)}updateElements(e,s,r,o){const l=o==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:m,includeOptions:x}=this._getSharedOptions(s,o),N=c.axis,w=u.axis,{spanGaps:b,segment:j}=this.options,y=Zr(b)?b:Number.POSITIVE_INFINITY,_=this.chart._animationsDisabled||l||o==="none",E=s+r,A=e.length;let U=s>0&&this.getParsed(s-1);for(let P=0;P<A;++P){const q=e[P],O=_?q:{};if(P<s||P>=E){O.skip=!0;continue}const T=this.getParsed(P),L=Le(T[w]),B=O[N]=c.getPixelForValue(T[N],P),M=O[w]=l||L?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,T,h):T[w],P);O.skip=isNaN(B)||isNaN(M)||L,O.stop=P>0&&Math.abs(T[N]-U[N])>y,j&&(O.parsed=T,O.raw=p.data[P]),x&&(O.options=m||this.resolveDataElementOptions(P,q.active?"active":o)),_||this.updateElement(q,P,O,o),U=T}}getMaxOverflow(){const e=this._cachedMeta,s=e.dataset,r=s.options&&s.options.borderWidth||0,o=e.data||[];if(!o.length)return r;const l=o[0].size(this.resolveDataElementOptions(0)),c=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(r,l,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}xe($o,"id","line"),xe($o,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),xe($o,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Yn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class du{constructor(e){xe(this,"options");this.options=e||{}}static override(e){Object.assign(du.prototype,e)}init(){}formats(){return Yn()}parse(){return Yn()}format(){return Yn()}add(){return Yn()}diff(){return Yn()}startOf(){return Yn()}endOf(){return Yn()}}var GN={_date:du};function JN(t,e,s,r){const{controller:o,data:l,_sorted:c}=t,u=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&l.length){const p=u._reversePixels?y1:Zn;if(r){if(o._sharedOptions){const m=l[0],x=typeof m.getRange=="function"&&m.getRange(e);if(x){const N=p(l,e,s-x),w=p(l,e,s+x);return{lo:N.lo,hi:w.hi}}}}else{const m=p(l,e,s);if(h){const{vScale:x}=o._cachedMeta,{_parsed:N}=t,w=N.slice(0,m.lo+1).reverse().findIndex(j=>!Le(j[x.axis]));m.lo-=Math.max(0,w);const b=N.slice(m.hi).findIndex(j=>!Le(j[x.axis]));m.hi+=Math.max(0,b)}return m}}return{lo:0,hi:l.length-1}}function hl(t,e,s,r,o){const l=t.getSortedVisibleDatasetMetas(),c=s[e];for(let u=0,h=l.length;u<h;++u){const{index:p,data:m}=l[u],{lo:x,hi:N}=JN(l[u],e,c,o);for(let w=x;w<=N;++w){const b=m[w];b.skip||r(b,p,w)}}}function ZN(t){const e=t.indexOf("x")!==-1,s=t.indexOf("y")!==-1;return function(r,o){const l=e?Math.abs(r.x-o.x):0,c=s?Math.abs(r.y-o.y):0;return Math.sqrt(Math.pow(l,2)+Math.pow(c,2))}}function gd(t,e,s,r,o){const l=[];return!o&&!t.isPointInArea(e)||hl(t,s,e,function(u,h,p){!o&&!ta(u,t.chartArea,0)||u.inRange(e.x,e.y,r)&&l.push({element:u,datasetIndex:h,index:p})},!0),l}function ew(t,e,s,r){let o=[];function l(c,u,h){const{startAngle:p,endAngle:m}=c.getProps(["startAngle","endAngle"],r),{angle:x}=Ug(c,{x:e.x,y:e.y});ea(x,p,m)&&o.push({element:c,datasetIndex:u,index:h})}return hl(t,s,e,l),o}function tw(t,e,s,r,o,l){let c=[];const u=ZN(s);let h=Number.POSITIVE_INFINITY;function p(m,x,N){const w=m.inRange(e.x,e.y,o);if(r&&!w)return;const b=m.getCenterPoint(o);if(!(!!l||t.isPointInArea(b))&&!w)return;const y=u(e,b);y<h?(c=[{element:m,datasetIndex:x,index:N}],h=y):y===h&&c.push({element:m,datasetIndex:x,index:N})}return hl(t,s,e,p),c}function xd(t,e,s,r,o,l){return!l&&!t.isPointInArea(e)?[]:s==="r"&&!r?ew(t,e,s,o):tw(t,e,s,r,o,l)}function am(t,e,s,r,o){const l=[],c=s==="x"?"inXRange":"inYRange";let u=!1;return hl(t,s,e,(h,p,m)=>{h[c]&&h[c](e[s],o)&&(l.push({element:h,datasetIndex:p,index:m}),u=u||h.inRange(e.x,e.y,o))}),r&&!u?[]:l}var sw={modes:{index(t,e,s,r){const o=Xn(e,t),l=s.axis||"x",c=s.includeInvisible||!1,u=s.intersect?gd(t,o,l,r,c):xd(t,o,l,!1,r,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const m=u[0].index,x=p.data[m];x&&!x.skip&&h.push({element:x,datasetIndex:p.index,index:m})}),h):[]},dataset(t,e,s,r){const o=Xn(e,t),l=s.axis||"xy",c=s.includeInvisible||!1;let u=s.intersect?gd(t,o,l,r,c):xd(t,o,l,!1,r,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let m=0;m<p.length;++m)u.push({element:p[m],datasetIndex:h,index:m})}return u},point(t,e,s,r){const o=Xn(e,t),l=s.axis||"xy",c=s.includeInvisible||!1;return gd(t,o,l,r,c)},nearest(t,e,s,r){const o=Xn(e,t),l=s.axis||"xy",c=s.includeInvisible||!1;return xd(t,o,l,s.intersect,r,c)},x(t,e,s,r){const o=Xn(e,t);return am(t,o,"x",s.intersect,r)},y(t,e,s,r){const o=Xn(e,t);return am(t,o,"y",s.intersect,r)}}};const dx=["left","top","right","bottom"];function Lr(t,e){return t.filter(s=>s.pos===e)}function om(t,e){return t.filter(s=>dx.indexOf(s.pos)===-1&&s.box.axis===e)}function Mr(t,e){return t.sort((s,r)=>{const o=e?r:s,l=e?s:r;return o.weight===l.weight?o.index-l.index:o.weight-l.weight})}function nw(t){const e=[];let s,r,o,l,c,u;for(s=0,r=(t||[]).length;s<r;++s)o=t[s],{position:l,options:{stack:c,stackWeight:u=1}}=o,e.push({index:s,box:o,pos:l,horizontal:o.isHorizontal(),weight:o.weight,stack:c&&l+c,stackWeight:u});return e}function iw(t){const e={};for(const s of t){const{stack:r,pos:o,stackWeight:l}=s;if(!r||!dx.includes(o))continue;const c=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=l}return e}function rw(t,e){const s=iw(t),{vBoxMaxWidth:r,hBoxMaxHeight:o}=e;let l,c,u;for(l=0,c=t.length;l<c;++l){u=t[l];const{fullSize:h}=u.box,p=s[u.stack],m=p&&u.stackWeight/p.weight;u.horizontal?(u.width=m?m*r:h&&e.availableWidth,u.height=o):(u.width=r,u.height=m?m*o:h&&e.availableHeight)}return s}function aw(t){const e=nw(t),s=Mr(e.filter(p=>p.box.fullSize),!0),r=Mr(Lr(e,"left"),!0),o=Mr(Lr(e,"right")),l=Mr(Lr(e,"top"),!0),c=Mr(Lr(e,"bottom")),u=om(e,"x"),h=om(e,"y");return{fullSize:s,leftAndTop:r.concat(l),rightAndBottom:o.concat(h).concat(c).concat(u),chartArea:Lr(e,"chartArea"),vertical:r.concat(o).concat(h),horizontal:l.concat(c).concat(u)}}function lm(t,e,s,r){return Math.max(t[s],e[s])+Math.max(t[r],e[r])}function ux(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ow(t,e,s,r){const{pos:o,box:l}=s,c=t.maxPadding;if(!Ee(o)){s.size&&(t[o]-=s.size);const x=r[s.stack]||{size:0,count:1};x.size=Math.max(x.size,s.horizontal?l.height:l.width),s.size=x.size/x.count,t[o]+=s.size}l.getPadding&&ux(c,l.getPadding());const u=Math.max(0,e.outerWidth-lm(c,t,"left","right")),h=Math.max(0,e.outerHeight-lm(c,t,"top","bottom")),p=u!==t.w,m=h!==t.h;return t.w=u,t.h=h,s.horizontal?{same:p,other:m}:{same:m,other:p}}function lw(t){const e=t.maxPadding;function s(r){const o=Math.max(e[r]-t[r],0);return t[r]+=o,o}t.y+=s("top"),t.x+=s("left"),s("right"),s("bottom")}function cw(t,e){const s=e.maxPadding;function r(o){const l={left:0,top:0,right:0,bottom:0};return o.forEach(c=>{l[c]=Math.max(e[c],s[c])}),l}return r(t?["left","right"]:["top","bottom"])}function Br(t,e,s,r){const o=[];let l,c,u,h,p,m;for(l=0,c=t.length,p=0;l<c;++l){u=t[l],h=u.box,h.update(u.width||e.w,u.height||e.h,cw(u.horizontal,e));const{same:x,other:N}=ow(e,s,u,r);p|=x&&o.length,m=m||N,h.fullSize||o.push(u)}return p&&Br(o,e,s,r)||m}function Do(t,e,s,r,o){t.top=s,t.left=e,t.right=e+r,t.bottom=s+o,t.width=r,t.height=o}function cm(t,e,s,r){const o=s.padding;let{x:l,y:c}=e;for(const u of t){const h=u.box,p=r[u.stack]||{placed:0,weight:1},m=u.stackWeight/p.weight||1;if(u.horizontal){const x=e.w*m,N=p.size||h.height;Jr(p.start)&&(c=p.start),h.fullSize?Do(h,o.left,c,s.outerWidth-o.right-o.left,N):Do(h,e.left+p.placed,c,x,N),p.start=c,p.placed+=x,c=h.bottom}else{const x=e.h*m,N=p.size||h.width;Jr(p.start)&&(l=p.start),h.fullSize?Do(h,l,o.top,N,s.outerHeight-o.bottom-o.top):Do(h,l,e.top+p.placed,N,x),p.start=l,p.placed+=x,l=h.right}}e.x=l,e.y=c}var ss={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(s){e.draw(s)}}]},t.boxes.push(e)},removeBox(t,e){const s=t.boxes?t.boxes.indexOf(e):-1;s!==-1&&t.boxes.splice(s,1)},configure(t,e,s){e.fullSize=s.fullSize,e.position=s.position,e.weight=s.weight},update(t,e,s,r){if(!t)return;const o=ns(t.options.layout.padding),l=Math.max(e-o.width,0),c=Math.max(s-o.height,0),u=aw(t.boxes),h=u.vertical,p=u.horizontal;Ie(t.boxes,j=>{typeof j.beforeLayout=="function"&&j.beforeLayout()});const m=h.reduce((j,y)=>y.box.options&&y.box.options.display===!1?j:j+1,0)||1,x=Object.freeze({outerWidth:e,outerHeight:s,padding:o,availableWidth:l,availableHeight:c,vBoxMaxWidth:l/2/m,hBoxMaxHeight:c/2}),N=Object.assign({},o);ux(N,ns(r));const w=Object.assign({maxPadding:N,w:l,h:c,x:o.left,y:o.top},o),b=rw(h.concat(p),x);Br(u.fullSize,w,x,b),Br(h,w,x,b),Br(p,w,x,b)&&Br(h,w,x,b),lw(w),cm(u.leftAndTop,w,x,b),w.x+=w.w,w.y+=w.h,cm(u.rightAndBottom,w,x,b),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Ie(u.chartArea,j=>{const y=j.box;Object.assign(y,t.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class hx{acquireContext(e,s){}releaseContext(e){return!1}addEventListener(e,s,r){}removeEventListener(e,s,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,s,r,o){return s=Math.max(0,s||e.width),r=r||e.height,{width:s,height:Math.max(0,o?Math.floor(s/o):r)}}isAttached(e){return!0}updateConfig(e){}}class dw extends hx{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const Uo="$chartjs",uw={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},dm=t=>t===null||t==="";function hw(t,e){const s=t.style,r=t.getAttribute("height"),o=t.getAttribute("width");if(t[Uo]={initial:{height:r,width:o,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",dm(o)){const l=Yp(t,"width");l!==void 0&&(t.width=l)}if(dm(r))if(t.style.height==="")t.height=t.width/(e||2);else{const l=Yp(t,"height");l!==void 0&&(t.height=l)}return t}const fx=pN?{passive:!0}:!1;function fw(t,e,s){t&&t.addEventListener(e,s,fx)}function pw(t,e,s){t&&t.canvas&&t.canvas.removeEventListener(e,s,fx)}function mw(t,e){const s=uw[t.type]||t.type,{x:r,y:o}=Xn(t,e);return{type:s,chart:e,native:t,x:r!==void 0?r:null,y:o!==void 0?o:null}}function Jo(t,e){for(const s of t)if(s===e||s.contains(e))return!0}function gw(t,e,s){const r=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Jo(u.addedNodes,r),c=c&&!Jo(u.removedNodes,r);c&&s()});return o.observe(document,{childList:!0,subtree:!0}),o}function xw(t,e,s){const r=t.canvas,o=new MutationObserver(l=>{let c=!1;for(const u of l)c=c||Jo(u.removedNodes,r),c=c&&!Jo(u.addedNodes,r);c&&s()});return o.observe(document,{childList:!0,subtree:!0}),o}const na=new Map;let um=0;function px(){const t=window.devicePixelRatio;t!==um&&(um=t,na.forEach((e,s)=>{s.currentDevicePixelRatio!==t&&e()}))}function vw(t,e){na.size||window.addEventListener("resize",px),na.set(t,e)}function yw(t){na.delete(t),na.size||window.removeEventListener("resize",px)}function bw(t,e,s){const r=t.canvas,o=r&&cu(r);if(!o)return;const l=qg((u,h)=>{const p=o.clientWidth;s(u,h),p<o.clientWidth&&s()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,m=h.contentRect.height;p===0&&m===0||l(p,m)});return c.observe(o),vw(t,l),c}function vd(t,e,s){s&&s.disconnect(),e==="resize"&&yw(t)}function jw(t,e,s){const r=t.canvas,o=qg(l=>{t.ctx!==null&&s(mw(l,t))},t);return fw(r,e,o),o}class Nw extends hx{acquireContext(e,s){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(hw(e,s),r):null}releaseContext(e){const s=e.canvas;if(!s[Uo])return!1;const r=s[Uo].initial;["height","width"].forEach(l=>{const c=r[l];Le(c)?s.removeAttribute(l):s.setAttribute(l,c)});const o=r.style||{};return Object.keys(o).forEach(l=>{s.style[l]=o[l]}),s.width=s.width,delete s[Uo],!0}addEventListener(e,s,r){this.removeEventListener(e,s);const o=e.$proxies||(e.$proxies={}),c={attach:gw,detach:xw,resize:bw}[s]||jw;o[s]=c(e,s,r)}removeEventListener(e,s){const r=e.$proxies||(e.$proxies={}),o=r[s];if(!o)return;({attach:vd,detach:vd,resize:vd}[s]||pw)(e,s,o),r[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,s,r,o){return fN(e,s,r,o)}isAttached(e){const s=e&&cu(e);return!!(s&&s.isConnected)}}function ww(t){return!lu()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?dw:Nw}class ms{constructor(){xe(this,"x");xe(this,"y");xe(this,"active",!1);xe(this,"options");xe(this,"$animations")}tooltipPosition(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}hasValue(){return Zr(this.x)&&Zr(this.y)}getProps(e,s){const r=this.$animations;if(!s||!r)return this;const o={};return e.forEach(l=>{o[l]=r[l]&&r[l].active()?r[l]._to:this[l]}),o}}xe(ms,"defaults",{}),xe(ms,"defaultRoutes");function kw(t,e){const s=t.options.ticks,r=_w(t),o=Math.min(s.maxTicksLimit||r,r),l=s.major.enabled?Cw(e):[],c=l.length,u=l[0],h=l[c-1],p=[];if(c>o)return Ew(e,p,l,c/o),p;const m=Sw(l,e,o);if(c>0){let x,N;const w=c>1?Math.round((h-u)/(c-1)):null;for(Ao(e,p,m,Le(w)?0:u-w,u),x=0,N=c-1;x<N;x++)Ao(e,p,m,l[x],l[x+1]);return Ao(e,p,m,h,Le(w)?e.length:h+w),p}return Ao(e,p,m),p}function _w(t){const e=t.options.offset,s=t._tickSize(),r=t._length/s+(e?0:1),o=t._maxLength/s;return Math.floor(Math.min(r,o))}function Sw(t,e,s){const r=Rw(t),o=e.length/s;if(!r)return Math.max(o,1);const l=h1(r);for(let c=0,u=l.length-1;c<u;c++){const h=l[c];if(h>o)return h}return Math.max(o,1)}function Cw(t){const e=[];let s,r;for(s=0,r=t.length;s<r;s++)t[s].major&&e.push(s);return e}function Ew(t,e,s,r){let o=0,l=s[0],c;for(r=Math.ceil(r),c=0;c<t.length;c++)c===l&&(e.push(t[c]),o++,l=s[o*r])}function Ao(t,e,s,r,o){const l=_e(r,0),c=Math.min(_e(o,t.length),t.length);let u=0,h,p,m;for(s=Math.ceil(s),o&&(h=o-r,s=h/Math.floor(h/s)),m=l;m<0;)u++,m=Math.round(l+u*s);for(p=Math.max(l,0);p<c;p++)p===m&&(e.push(t[p]),u++,m=Math.round(l+u*s))}function Rw(t){const e=t.length;let s,r;if(e<2)return!1;for(r=t[0],s=1;s<e;++s)if(t[s]-t[s-1]!==r)return!1;return r}const Pw=t=>t==="left"?"right":t==="right"?"left":t,hm=(t,e,s)=>e==="top"||e==="left"?t[e]+s:t[e]-s,fm=(t,e)=>Math.min(e||t,t);function pm(t,e){const s=[],r=t.length/e,o=t.length;let l=0;for(;l<o;l+=r)s.push(t[Math.floor(l)]);return s}function Dw(t,e,s){const r=t.ticks.length,o=Math.min(e,r-1),l=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(o),p;if(!(s&&(r===1?p=Math.max(h-l,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(o-1))/2,h+=o<e?p:-p,h<l-u||h>c+u)))return h}function Aw(t,e){Ie(t,s=>{const r=s.gc,o=r.length/2;let l;if(o>e){for(l=0;l<o;++l)delete s.data[r[l]];r.splice(0,o)}})}function Or(t){return t.drawTicks?t.tickLength:0}function mm(t,e){if(!t.display)return 0;const s=wt(t.font,e),r=ns(t.padding);return(it(t.text)?t.text.length:1)*s.lineHeight+r.height}function Tw(t,e){return oi(t,{scale:e,type:"scale"})}function Lw(t,e,s){return oi(t,{tick:s,index:e,type:"tick"})}function Mw(t,e,s){let r=tu(t);return(s&&e!=="right"||!s&&e==="right")&&(r=Pw(r)),r}function Ow(t,e,s,r){const{top:o,left:l,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:m}=h;let x=0,N,w,b;const j=c-o,y=u-l;if(t.isHorizontal()){if(w=bt(r,l,u),Ee(s)){const _=Object.keys(s)[0],E=s[_];b=m[_].getPixelForValue(E)+j-e}else s==="center"?b=(p.bottom+p.top)/2+j-e:b=hm(t,s,e);N=u-l}else{if(Ee(s)){const _=Object.keys(s)[0],E=s[_];w=m[_].getPixelForValue(E)-y+e}else s==="center"?w=(p.left+p.right)/2-y+e:w=hm(t,s,e);b=bt(r,c,o),x=s==="left"?-ct:ct}return{titleX:w,titleY:b,maxWidth:N,rotation:x}}class Vi extends ms{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,s){return e}getUserBounds(){let{_userMin:e,_userMax:s,_suggestedMin:r,_suggestedMax:o}=this;return e=_s(e,Number.POSITIVE_INFINITY),s=_s(s,Number.NEGATIVE_INFINITY),r=_s(r,Number.POSITIVE_INFINITY),o=_s(o,Number.NEGATIVE_INFINITY),{min:_s(e,r),max:_s(s,o),minDefined:kt(e),maxDefined:kt(s)}}getMinMax(e){let{min:s,max:r,minDefined:o,maxDefined:l}=this.getUserBounds(),c;if(o&&l)return{min:s,max:r};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),o||(s=Math.min(s,c.min)),l||(r=Math.max(r,c.max));return s=l&&s>r?r:s,r=o&&s>r?s:r,{min:_s(s,_s(r,s)),max:_s(r,_s(s,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){We(this.options.beforeUpdate,[this])}update(e,s,r){const{beginAtZero:o,grace:l,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=s,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=V1(this,l,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?pm(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=kw(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,s,r;this.isHorizontal()?(s=this.left,r=this.right):(s=this.top,r=this.bottom,e=!e),this._startPixel=s,this._endPixel=r,this._reversePixels=e,this._length=r-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){We(this.options.afterUpdate,[this])}beforeSetDimensions(){We(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){We(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),We(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){We(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const s=this.options.ticks;let r,o,l;for(r=0,o=e.length;r<o;r++)l=e[r],l.label=We(s.callback,[l.value,r,e],this)}afterTickToLabelConversion(){We(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){We(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,s=e.ticks,r=fm(this.ticks.length,e.ticks.maxTicksLimit),o=s.minRotation||0,l=s.maxRotation;let c=o,u,h,p;if(!this._isVisible()||!s.display||o>=l||r<=1||!this.isHorizontal()){this.labelRotation=o;return}const m=this._getLabelSizes(),x=m.widest.width,N=m.highest.height,w=Nt(this.chart.width-x,0,this.maxWidth);u=e.offset?this.maxWidth/r:w/(r-1),x+6>u&&(u=w/(r-(e.offset?.5:1)),h=this.maxHeight-Or(e.grid)-s.padding-mm(e.title,this.chart.options.font),p=Math.sqrt(x*x+N*N),c=g1(Math.min(Math.asin(Nt((m.highest.height+6)/u,-1,1)),Math.asin(Nt(h/p,-1,1))-Math.asin(Nt(N/p,-1,1)))),c=Math.max(o,Math.min(l,c))),this.labelRotation=c}afterCalculateLabelRotation(){We(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){We(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:s,options:{ticks:r,title:o,grid:l}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=mm(o,s.options.font);if(u?(e.width=this.maxWidth,e.height=Or(l)+h):(e.height=this.maxHeight,e.width=Or(l)+h),r.display&&this.ticks.length){const{first:p,last:m,widest:x,highest:N}=this._getLabelSizes(),w=r.padding*2,b=Vs(this.labelRotation),j=Math.cos(b),y=Math.sin(b);if(u){const _=r.mirror?0:y*x.width+j*N.height;e.height=Math.min(this.maxHeight,e.height+_+w)}else{const _=r.mirror?0:j*x.width+y*N.height;e.width=Math.min(this.maxWidth,e.width+_+w)}this._calculatePadding(p,m,y,j)}}this._handleMargins(),u?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,s,r,o){const{ticks:{align:l,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,x=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,w=0;h?p?(N=o*e.width,w=r*s.height):(N=r*e.height,w=o*s.width):l==="start"?w=s.width:l==="end"?N=e.width:l!=="inner"&&(N=e.width/2,w=s.width/2),this.paddingLeft=Math.max((N-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((w-x+c)*this.width/(this.width-x),0)}else{let m=s.height/2,x=e.height/2;l==="start"?(m=0,x=e.height):l==="end"&&(m=s.height,x=0),this.paddingTop=m+c,this.paddingBottom=x+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){We(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:s}=this.options;return s==="top"||s==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let s,r;for(s=0,r=e.length;s<r;s++)Le(e[s].label)&&(e.splice(s,1),r--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const s=this.options.ticks.sampleSize;let r=this.ticks;s<r.length&&(r=pm(r,s)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,s,r){const{ctx:o,_longestTextCache:l}=this,c=[],u=[],h=Math.floor(s/fm(s,r));let p=0,m=0,x,N,w,b,j,y,_,E,A,U,P;for(x=0;x<s;x+=h){if(b=e[x].label,j=this._resolveTickFontOptions(x),o.font=y=j.string,_=l[y]=l[y]||{data:{},gc:[]},E=j.lineHeight,A=U=0,!Le(b)&&!it(b))A=Up(o,_.data,_.gc,A,b),U=E;else if(it(b))for(N=0,w=b.length;N<w;++N)P=b[N],!Le(P)&&!it(P)&&(A=Up(o,_.data,_.gc,A,P),U+=E);c.push(A),u.push(U),p=Math.max(A,p),m=Math.max(U,m)}Aw(l,s);const q=c.indexOf(p),O=u.indexOf(m),T=L=>({width:c[L]||0,height:u[L]||0});return{first:T(0),last:T(s-1),widest:T(q),highest:T(O),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,s){return NaN}getValueForPixel(e){}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const s=this._startPixel+e*this._length;return v1(this._alignToPixels?qn(this.chart,s,0):s)}getDecimalForPixel(e){const s=(e-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:s}=this;return e<0&&s<0?s:e>0&&s>0?e:0}getContext(e){const s=this.ticks||[];if(e>=0&&e<s.length){const r=s[e];return r.$context||(r.$context=Lw(this.getContext(),e,r))}return this.$context||(this.$context=Tw(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,s=Vs(this.labelRotation),r=Math.abs(Math.cos(s)),o=Math.abs(Math.sin(s)),l=this._getLabelSizes(),c=e.autoSkipPadding||0,u=l?l.widest.width+c:0,h=l?l.highest.height+c:0;return this.isHorizontal()?h*r>u*o?u/r:h/o:h*o<u*r?h/r:u/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const s=this.axis,r=this.chart,o=this.options,{grid:l,position:c,border:u}=o,h=l.offset,p=this.isHorizontal(),x=this.ticks.length+(h?1:0),N=Or(l),w=[],b=u.setContext(this.getContext()),j=b.display?b.width:0,y=j/2,_=function(R){return qn(r,R,j)};let E,A,U,P,q,O,T,L,B,M,C,I;if(c==="top")E=_(this.bottom),O=this.bottom-N,L=E-y,M=_(e.top)+y,I=e.bottom;else if(c==="bottom")E=_(this.top),M=e.top,I=_(e.bottom)-y,O=E+y,L=this.top+N;else if(c==="left")E=_(this.right),q=this.right-N,T=E-y,B=_(e.left)+y,C=e.right;else if(c==="right")E=_(this.left),B=e.left,C=_(e.right)-y,q=E+y,T=this.left+N;else if(s==="x"){if(c==="center")E=_((e.top+e.bottom)/2+.5);else if(Ee(c)){const R=Object.keys(c)[0],J=c[R];E=_(this.chart.scales[R].getPixelForValue(J))}M=e.top,I=e.bottom,O=E+y,L=O+N}else if(s==="y"){if(c==="center")E=_((e.left+e.right)/2);else if(Ee(c)){const R=Object.keys(c)[0],J=c[R];E=_(this.chart.scales[R].getPixelForValue(J))}q=E-y,T=q-N,B=e.left,C=e.right}const W=_e(o.ticks.maxTicksLimit,x),ie=Math.max(1,Math.ceil(x/W));for(A=0;A<x;A+=ie){const R=this.getContext(A),J=l.setContext(R),X=u.setContext(R),re=J.lineWidth,Z=J.color,z=X.dash||[],G=X.dashOffset,ce=J.tickWidth,fe=J.tickColor,ye=J.tickBorderDash||[],be=J.tickBorderDashOffset;U=Dw(this,A,h),U!==void 0&&(P=qn(r,U,re),p?q=T=B=C=P:O=L=M=I=P,w.push({tx1:q,ty1:O,tx2:T,ty2:L,x1:B,y1:M,x2:C,y2:I,width:re,color:Z,borderDash:z,borderDashOffset:G,tickWidth:ce,tickColor:fe,tickBorderDash:ye,tickBorderDashOffset:be}))}return this._ticksLength=x,this._borderValue=E,w}_computeLabelItems(e){const s=this.axis,r=this.options,{position:o,ticks:l}=r,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:m,mirror:x}=l,N=Or(r.grid),w=N+m,b=x?-m:w,j=-Vs(this.labelRotation),y=[];let _,E,A,U,P,q,O,T,L,B,M,C,I="middle";if(o==="top")q=this.bottom-b,O=this._getXAxisLabelAlignment();else if(o==="bottom")q=this.top+b,O=this._getXAxisLabelAlignment();else if(o==="left"){const ie=this._getYAxisLabelAlignment(N);O=ie.textAlign,P=ie.x}else if(o==="right"){const ie=this._getYAxisLabelAlignment(N);O=ie.textAlign,P=ie.x}else if(s==="x"){if(o==="center")q=(e.top+e.bottom)/2+w;else if(Ee(o)){const ie=Object.keys(o)[0],R=o[ie];q=this.chart.scales[ie].getPixelForValue(R)+w}O=this._getXAxisLabelAlignment()}else if(s==="y"){if(o==="center")P=(e.left+e.right)/2-w;else if(Ee(o)){const ie=Object.keys(o)[0],R=o[ie];P=this.chart.scales[ie].getPixelForValue(R)}O=this._getYAxisLabelAlignment(N).textAlign}s==="y"&&(h==="start"?I="top":h==="end"&&(I="bottom"));const W=this._getLabelSizes();for(_=0,E=u.length;_<E;++_){A=u[_],U=A.label;const ie=l.setContext(this.getContext(_));T=this.getPixelForTick(_)+l.labelOffset,L=this._resolveTickFontOptions(_),B=L.lineHeight,M=it(U)?U.length:1;const R=M/2,J=ie.color,X=ie.textStrokeColor,re=ie.textStrokeWidth;let Z=O;c?(P=T,O==="inner"&&(_===E-1?Z=this.options.reverse?"left":"right":_===0?Z=this.options.reverse?"right":"left":Z="center"),o==="top"?p==="near"||j!==0?C=-M*B+B/2:p==="center"?C=-W.highest.height/2-R*B+B:C=-W.highest.height+B/2:p==="near"||j!==0?C=B/2:p==="center"?C=W.highest.height/2-R*B:C=W.highest.height-M*B,x&&(C*=-1),j!==0&&!ie.showLabelBackdrop&&(P+=B/2*Math.sin(j))):(q=T,C=(1-M)*B/2);let z;if(ie.showLabelBackdrop){const G=ns(ie.backdropPadding),ce=W.heights[_],fe=W.widths[_];let ye=C-G.top,be=0-G.left;switch(I){case"middle":ye-=ce/2;break;case"bottom":ye-=ce;break}switch(O){case"center":be-=fe/2;break;case"right":be-=fe;break;case"inner":_===E-1?be-=fe:_>0&&(be-=fe/2);break}z={left:be,top:ye,width:fe+G.width,height:ce+G.height,color:ie.backdropColor}}y.push({label:U,font:L,textOffset:C,options:{rotation:j,color:J,strokeColor:X,strokeWidth:re,textAlign:Z,textBaseline:I,translation:[P,q],backdrop:z}})}return y}_getXAxisLabelAlignment(){const{position:e,ticks:s}=this.options;if(-Vs(this.labelRotation))return e==="top"?"left":"right";let o="center";return s.align==="start"?o="left":s.align==="end"?o="right":s.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:s,ticks:{crossAlign:r,mirror:o,padding:l}}=this.options,c=this._getLabelSizes(),u=e+l,h=c.widest.width;let p,m;return s==="left"?o?(m=this.right+l,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m+=h)):(m=this.right-u,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m=this.left)):s==="right"?o?(m=this.left+l,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m-=h)):(m=this.left+u,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m=this.right)):p="right",{textAlign:p,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:s},left:r,top:o,width:l,height:c}=this;s&&(e.save(),e.fillStyle=s,e.fillRect(r,o,l,c),e.restore())}getLineWidthForValue(e){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const o=this.ticks.findIndex(l=>l.value===e);return o>=0?s.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const s=this.options.grid,r=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let l,c;const u=(h,p,m)=>{!m.width||!m.color||(r.save(),r.lineWidth=m.width,r.strokeStyle=m.color,r.setLineDash(m.borderDash||[]),r.lineDashOffset=m.borderDashOffset,r.beginPath(),r.moveTo(h.x,h.y),r.lineTo(p.x,p.y),r.stroke(),r.restore())};if(s.display)for(l=0,c=o.length;l<c;++l){const h=o[l];s.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),s.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:s,options:{border:r,grid:o}}=this,l=r.setContext(this.getContext()),c=r.display?l.width:0;if(!c)return;const u=o.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,m,x,N;this.isHorizontal()?(p=qn(e,this.left,c)-c/2,m=qn(e,this.right,u)+u/2,x=N=h):(x=qn(e,this.top,c)-c/2,N=qn(e,this.bottom,u)+u/2,p=m=h),s.save(),s.lineWidth=l.width,s.strokeStyle=l.color,s.beginPath(),s.moveTo(p,x),s.lineTo(m,N),s.stroke(),s.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,o=this._computeLabelArea();o&&cl(r,o);const l=this.getLabelItems(e);for(const c of l){const u=c.options,h=c.font,p=c.label,m=c.textOffset;sa(r,p,0,m,h,u)}o&&dl(r)}drawTitle(){const{ctx:e,options:{position:s,title:r,reverse:o}}=this;if(!r.display)return;const l=wt(r.font),c=ns(r.padding),u=r.align;let h=l.lineHeight/2;s==="bottom"||s==="center"||Ee(s)?(h+=c.bottom,it(r.text)&&(h+=l.lineHeight*(r.text.length-1))):h+=c.top;const{titleX:p,titleY:m,maxWidth:x,rotation:N}=Ow(this,h,s,u);sa(e,r.text,0,0,l,{color:r.color,maxWidth:x,rotation:N,textAlign:Mw(u,s,o),textBaseline:"middle",translation:[p,m]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,s=e.ticks&&e.ticks.z||0,r=_e(e.grid&&e.grid.z,-1),o=_e(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Vi.prototype.draw?[{z:s,draw:l=>{this.draw(l)}}]:[{z:r,draw:l=>{this.drawBackground(),this.drawGrid(l),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:s,draw:l=>{this.drawLabels(l)}}]}getMatchingVisibleMetas(e){const s=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",o=[];let l,c;for(l=0,c=s.length;l<c;++l){const u=s[l];u[r]===this.id&&(!e||u.type===e)&&o.push(u)}return o}_resolveTickFontOptions(e){const s=this.options.ticks.setContext(this.getContext(e));return wt(s.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class To{constructor(e,s,r){this.type=e,this.scope=s,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const s=Object.getPrototypeOf(e);let r;Fw(s)&&(r=this.register(s));const o=this.items,l=e.id,c=this.scope+"."+l;if(!l)throw new Error("class does not have id: "+e);return l in o||(o[l]=e,zw(e,c,r),this.override&&et.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const s=this.items,r=e.id,o=this.scope;r in s&&delete s[r],o&&r in et[o]&&(delete et[o][r],this.override&&delete ri[r])}}function zw(t,e,s){const r=Gr(Object.create(null),[s?et.get(s):{},et.get(e),t.defaults]);et.set(e,r),t.defaultRoutes&&Iw(e,t.defaultRoutes),t.descriptors&&et.describe(e,t.descriptors)}function Iw(t,e){Object.keys(e).forEach(s=>{const r=s.split("."),o=r.pop(),l=[t].concat(r).join("."),c=e[s].split("."),u=c.pop(),h=c.join(".");et.route(l,o,h,u)})}function Fw(t){return"id"in t&&"defaults"in t}class Bw{constructor(){this.controllers=new To(si,"datasets",!0),this.elements=new To(ms,"elements"),this.plugins=new To(Object,"plugins"),this.scales=new To(Vi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,s,r){[...s].forEach(o=>{const l=r||this._getRegistryForType(o);r||l.isForType(o)||l===this.plugins&&o.id?this._exec(e,l,o):Ie(o,c=>{const u=r||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,s,r){const o=Zd(e);We(r["before"+o],[],r),s[e](r),We(r["after"+o],[],r)}_getRegistryForType(e){for(let s=0;s<this._typedRegistries.length;s++){const r=this._typedRegistries[s];if(r.isForType(e))return r}return this.plugins}_get(e,s,r){const o=s.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return o}}var Es=new Bw;class $w{constructor(){this._init=void 0}notify(e,s,r,o){if(s==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const l=o?this._descriptors(e).filter(o):this._descriptors(e),c=this._notify(l,e,s,r);return s==="afterDestroy"&&(this._notify(l,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,s,r,o){o=o||{};for(const l of e){const c=l.plugin,u=c[r],h=[s,o,l.options];if(We(u,h,c)===!1&&o.cancelable)return!1}return!0}invalidate(){Le(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),s}_createDescriptors(e,s){const r=e&&e.config,o=_e(r.options&&r.options.plugins,{}),l=Uw(r);return o===!1&&!s?[]:Hw(e,l,o,s)}_notifyStateChanges(e){const s=this._oldCache||[],r=this._cache,o=(l,c)=>l.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(o(s,r),e,"stop"),this._notify(o(r,s),e,"start")}}function Uw(t){const e={},s=[],r=Object.keys(Es.plugins.items);for(let l=0;l<r.length;l++)s.push(Es.getPlugin(r[l]));const o=t.plugins||[];for(let l=0;l<o.length;l++){const c=o[l];s.indexOf(c)===-1&&(s.push(c),e[c.id]=!0)}return{plugins:s,localIds:e}}function Ww(t,e){return!e&&t===!1?null:t===!0?{}:t}function Hw(t,{plugins:e,localIds:s},r,o){const l=[],c=t.getContext();for(const u of e){const h=u.id,p=Ww(r[h],o);p!==null&&l.push({plugin:u,options:Vw(t.config,{plugin:u,local:s[h]},p,c)})}return l}function Vw(t,{plugin:e,local:s},r,o){const l=t.pluginScopeKeys(e),c=t.getOptionScopes(r,l);return s&&e.defaults&&c.push(e.defaults),t.createResolver(c,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Md(t,e){const s=et.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||s.indexAxis||"x"}function qw(t,e){let s=t;return t==="_index_"?s=e:t==="_value_"&&(s=e==="x"?"y":"x"),s}function Yw(t,e){return t===e?"_index_":"_value_"}function gm(t){if(t==="x"||t==="y"||t==="r")return t}function Qw(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Od(t,...e){if(gm(t))return t;for(const s of e){const r=s.axis||Qw(s.position)||t.length>1&&gm(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function xm(t,e,s){if(s[e+"AxisID"]===t)return{axis:e}}function Kw(t,e){if(e.data&&e.data.datasets){const s=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(s.length)return xm(t,"x",s[0])||xm(t,"y",s[0])}return{}}function Xw(t,e){const s=ri[t.type]||{scales:{}},r=e.scales||{},o=Md(t.type,e),l=Object.create(null);return Object.keys(r).forEach(c=>{const u=r[c];if(!Ee(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=Od(c,u,Kw(c,t),et.scales[u.type]),p=Yw(h,o),m=s.scales||{};l[c]=Wr(Object.create(null),[{axis:h},u,m[h],m[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||Md(u,e),m=(ri[u]||{}).scales||{};Object.keys(m).forEach(x=>{const N=qw(x,h),w=c[N+"AxisID"]||N;l[w]=l[w]||Object.create(null),Wr(l[w],[{axis:N},r[w],m[x]])})}),Object.keys(l).forEach(c=>{const u=l[c];Wr(u,[et.scales[u.type],et.scale])}),l}function mx(t){const e=t.options||(t.options={});e.plugins=_e(e.plugins,{}),e.scales=Xw(t,e)}function gx(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Gw(t){return t=t||{},t.data=gx(t.data),mx(t),t}const vm=new Map,xx=new Set;function Lo(t,e){let s=vm.get(t);return s||(s=e(),vm.set(t,s),xx.add(s)),s}const zr=(t,e,s)=>{const r=ii(e,s);r!==void 0&&t.add(r)};class Jw{constructor(e){this._config=Gw(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=gx(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),mx(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Lo(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,s){return Lo(`${e}.transition.${s}`,()=>[[`datasets.${e}.transitions.${s}`,`transitions.${s}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,s){return Lo(`${e}-${s}`,()=>[[`datasets.${e}.elements.${s}`,`datasets.${e}`,`elements.${s}`,""]])}pluginScopeKeys(e){const s=e.id,r=this.type;return Lo(`${r}-plugin-${s}`,()=>[[`plugins.${s}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,s){const r=this._scopeCache;let o=r.get(e);return(!o||s)&&(o=new Map,r.set(e,o)),o}getOptionScopes(e,s,r){const{options:o,type:l}=this,c=this._cachedScopes(e,r),u=c.get(s);if(u)return u;const h=new Set;s.forEach(m=>{e&&(h.add(e),m.forEach(x=>zr(h,e,x))),m.forEach(x=>zr(h,o,x)),m.forEach(x=>zr(h,ri[l]||{},x)),m.forEach(x=>zr(h,et,x)),m.forEach(x=>zr(h,Td,x))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),xx.has(s)&&c.set(s,p),p}chartOptionScopes(){const{options:e,type:s}=this;return[e,ri[s]||{},et.datasets[s]||{},{type:s},et,Td]}resolveNamedOptions(e,s,r,o=[""]){const l={$shared:!0},{resolver:c,subPrefixes:u}=ym(this._resolverCache,e,o);let h=c;if(ek(c,s)){l.$shared=!1,r=wn(r)?r():r;const p=this.createResolver(e,r,u);h=$i(c,r,p)}for(const p of s)l[p]=h[p];return l}createResolver(e,s,r=[""],o){const{resolver:l}=ym(this._resolverCache,e,r);return Ee(s)?$i(l,s,void 0,o):l}}function ym(t,e,s){let r=t.get(e);r||(r=new Map,t.set(e,r));const o=s.join();let l=r.get(o);return l||(l={resolver:ru(e,s),subPrefixes:s.filter(u=>!u.toLowerCase().includes("hover"))},r.set(o,l)),l}const Zw=t=>Ee(t)&&Object.getOwnPropertyNames(t).some(e=>wn(t[e]));function ek(t,e){const{isScriptable:s,isIndexable:r}=Xg(t);for(const o of e){const l=s(o),c=r(o),u=(c||l)&&t[o];if(l&&(wn(u)||Zw(u))||c&&it(u))return!0}return!1}var tk="4.5.1";const sk=["top","bottom","left","right","chartArea"];function bm(t,e){return t==="top"||t==="bottom"||sk.indexOf(t)===-1&&e==="x"}function jm(t,e){return function(s,r){return s[t]===r[t]?s[e]-r[e]:s[t]-r[t]}}function Nm(t){const e=t.chart,s=e.options.animation;e.notifyPlugins("afterRender"),We(s&&s.onComplete,[t],e)}function nk(t){const e=t.chart,s=e.options.animation;We(s&&s.onProgress,[t],e)}function vx(t){return lu()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Wo={},wm=t=>{const e=vx(t);return Object.values(Wo).filter(s=>s.canvas===e).pop()};function ik(t,e,s){const r=Object.keys(t);for(const o of r){const l=+o;if(l>=e){const c=t[o];delete t[o],(s>0||l>e)&&(t[l+s]=c)}}}function rk(t,e,s,r){return!s||t.type==="mouseout"?null:r?e:t}var gn;let ha=(gn=class{static register(...e){Es.add(...e),km()}static unregister(...e){Es.remove(...e),km()}constructor(e,s){const r=this.config=new Jw(s),o=vx(e),l=wm(o);if(l)throw new Error("Canvas is already in use. Chart with ID '"+l.id+"' must be destroyed before the canvas with ID '"+l.canvas.id+"' can be reused.");const c=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||ww(o)),this.platform.updateConfig(r);const u=this.platform.acquireContext(o,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,m=h&&h.width;if(this.id=n1(),this.ctx=u,this.canvas=h,this.width=m,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new $w,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=N1(x=>this.update(x),c.resizeDelay||0),this._dataChanges=[],Wo[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}Us.listen(this,"complete",Nm),Us.listen(this,"progress",nk),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:s},width:r,height:o,_aspectRatio:l}=this;return Le(e)?s&&l?l:o?r/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Es}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():qp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Wp(this.canvas,this.ctx),this}stop(){return Us.stop(this),this}resize(e,s){Us.running(this)?this._resizeBeforeDraw={width:e,height:s}:this._resize(e,s)}_resize(e,s){const r=this.options,o=this.canvas,l=r.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(o,e,s,l),u=r.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,qp(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),We(r.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};Ie(s,(r,o)=>{r.id=o})}buildOrUpdateScales(){const e=this.options,s=e.scales,r=this.scales,o=Object.keys(r).reduce((c,u)=>(c[u]=!1,c),{});let l=[];s&&(l=l.concat(Object.keys(s).map(c=>{const u=s[c],h=Od(c,u),p=h==="r",m=h==="x";return{options:u,dposition:p?"chartArea":m?"bottom":"left",dtype:p?"radialLinear":m?"category":"linear"}}))),Ie(l,c=>{const u=c.options,h=u.id,p=Od(h,u),m=_e(u.type,c.dtype);(u.position===void 0||bm(u.position,p)!==bm(c.dposition))&&(u.position=c.dposition),o[h]=!0;let x=null;if(h in r&&r[h].type===m)x=r[h];else{const N=Es.getScale(m);x=new N({id:h,type:m,ctx:this.ctx,chart:this}),r[x.id]=x}x.init(u,e)}),Ie(o,(c,u)=>{c||delete r[u]}),Ie(r,c=>{ss.configure(this,c,c.options),ss.addBox(this,c)})}_updateMetasets(){const e=this._metasets,s=this.data.datasets.length,r=e.length;if(e.sort((o,l)=>o.index-l.index),r>s){for(let o=s;o<r;++o)this._destroyDatasetMeta(o);e.splice(s,r-s)}this._sortedMetasets=e.slice(0).sort(jm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:s}}=this;e.length>s.length&&delete this._stacks,e.forEach((r,o)=>{s.filter(l=>l===r._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],s=this.data.datasets;let r,o;for(this._removeUnreferencedMetasets(),r=0,o=s.length;r<o;r++){const l=s[r];let c=this.getDatasetMeta(r);const u=l.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(r),c=this.getDatasetMeta(r)),c.type=u,c.indexAxis=l.indexAxis||Md(u,this.options),c.order=l.order||0,c.index=r,c.label=""+l.label,c.visible=this.isDatasetVisible(r),c.controller)c.controller.updateIndex(r),c.controller.linkScales();else{const h=Es.getController(u),{datasetElementType:p,dataElementType:m}=et.datasets[u];Object.assign(h,{dataElementType:Es.getElement(m),datasetElementType:p&&Es.getElement(p)}),c.controller=new h(this,r),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Ie(this.data.datasets,(e,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const s=this.config;s.update();const r=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const l=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,m=this.data.datasets.length;p<m;p++){const{controller:x}=this.getDatasetMeta(p),N=!o&&l.indexOf(x)===-1;x.buildOrUpdateElements(N),c=Math.max(+x.getMaxOverflow(),c)}c=this._minPadding=r.layout.autoPadding?c:0,this._updateLayout(c),o||Ie(l,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(jm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Ie(this.scales,e=>{ss.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,s=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!Tp(s,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,s=this._getUniformDataChanges()||[];for(const{method:r,start:o,count:l}of s){const c=r==="_removeElements"?-l:l;ik(e,o,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const s=this.data.datasets.length,r=l=>new Set(e.filter(c=>c[0]===l).map((c,u)=>u+","+c.splice(1).join(","))),o=r(0);for(let l=1;l<s;l++)if(!Tp(o,r(l)))return;return Array.from(o).map(l=>l.split(",")).map(l=>({method:l[1],start:+l[2],count:+l[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ss.update(this,this.width,this.height,e);const s=this.chartArea,r=s.width<=0||s.height<=0;this._layers=[],Ie(this.boxes,o=>{r&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,l)=>{o._idx=l}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let s=0,r=this.data.datasets.length;s<r;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,r=this.data.datasets.length;s<r;++s)this._updateDataset(s,wn(e)?e({datasetIndex:s}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,s){const r=this.getDatasetMeta(e),o={meta:r,index:e,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(r.controller._update(s),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Us.has(this)?this.attached&&!Us.running(this)&&Us.start(this):(this.draw(),Nm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(e=0;e<s.length&&s[e].z<=0;++e)s[e].draw(this.chartArea);for(this._drawDatasets();e<s.length;++e)s[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const s=this._sortedMetasets,r=[];let o,l;for(o=0,l=s.length;o<l;++o){const c=s[o];(!e||c.visible)&&r.push(c)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let s=e.length-1;s>=0;--s)this._drawDataset(e[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const s=this.ctx,r={meta:e,index:e.index,cancelable:!0},o=ax(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(o&&cl(s,o),e.controller.draw(),o&&dl(s),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return ta(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,s,r,o){const l=sw.modes[s];return typeof l=="function"?l(this,e,r,o):[]}getDatasetMeta(e){const s=this.data.datasets[e],r=this._metasets;let o=r.filter(l=>l&&l._dataset===s).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:e,_dataset:s,_parsed:[],_sorted:!1},r.push(o)),o}getContext(){return this.$context||(this.$context=oi(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const s=this.data.datasets[e];if(!s)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!s.hidden}setDatasetVisibility(e,s){const r=this.getDatasetMeta(e);r.hidden=!s}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,s,r){const o=r?"show":"hide",l=this.getDatasetMeta(e),c=l.controller._resolveAnimations(void 0,o);Jr(s)?(l.data[s].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),c.update(l,{visible:r}),this.update(u=>u.datasetIndex===e?o:void 0))}hide(e,s){this._updateVisibility(e,s,!1)}show(e,s){this._updateVisibility(e,s,!0)}_destroyDatasetMeta(e){const s=this._metasets[e];s&&s.controller&&s.controller._destroy(),delete this._metasets[e]}_stop(){let e,s;for(this.stop(),Us.remove(this),e=0,s=this.data.datasets.length;e<s;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:s}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Wp(e,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Wo[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,s=this.platform,r=(l,c)=>{s.addEventListener(this,l,c),e[l]=c},o=(l,c,u)=>{l.offsetX=c,l.offsetY=u,this._eventHandler(l)};Ie(this.options.events,l=>r(l,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,s=this.platform,r=(h,p)=>{s.addEventListener(this,h,p),e[h]=p},o=(h,p)=>{e[h]&&(s.removeEventListener(this,h,p),delete e[h])},l=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{o("attach",u),this.attached=!0,this.resize(),r("resize",l),r("detach",c)};c=()=>{this.attached=!1,o("resize",l),this._stop(),this._resize(0,0),r("attach",u)},s.isAttached(this.canvas)?u():c()}unbindEvents(){Ie(this._listeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._listeners={},Ie(this._responsiveListeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,s,r){const o=r?"set":"remove";let l,c,u,h;for(s==="dataset"&&(l=this.getDatasetMeta(e[0].datasetIndex),l.controller["_"+o+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[o+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const s=this._active||[],r=e.map(({datasetIndex:l,index:c})=>{const u=this.getDatasetMeta(l);if(!u)throw new Error("No dataset found at index "+l);return{datasetIndex:l,element:u.data[c],index:c}});!Yo(r,s)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,s))}notifyPlugins(e,s,r){return this._plugins.notify(this,e,s,r)}isPluginEnabled(e){return this._plugins._cache.filter(s=>s.plugin.id===e).length===1}_updateHoverStyles(e,s,r){const o=this.options.hover,l=(h,p)=>h.filter(m=>!p.some(x=>m.datasetIndex===x.datasetIndex&&m.index===x.index)),c=l(s,e),u=r?e:l(e,s);c.length&&this.updateHoverStyle(c,o.mode,!1),u.length&&o.mode&&this.updateHoverStyle(u,o.mode,!0)}_eventHandler(e,s){const r={event:e,replay:s,cancelable:!0,inChartArea:this.isPointInArea(e)},o=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,o)===!1)return;const l=this._handleEvent(e,s,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,o),(l||r.changed)&&this.render(),this}_handleEvent(e,s,r){const{_active:o=[],options:l}=this,c=s,u=this._getActiveElements(e,o,r,c),h=c1(e),p=rk(e,this._lastEvent,r,h);r&&(this._lastEvent=null,We(l.onHover,[e,u,this],this),h&&We(l.onClick,[e,u,this],this));const m=!Yo(u,o);return(m||s)&&(this._active=u,this._updateHoverStyles(u,o,s)),this._lastEvent=p,m}_getActiveElements(e,s,r,o){if(e.type==="mouseout")return[];if(!r)return s;const l=this.options.hover;return this.getElementsAtEventForMode(e,l.mode,l,o)}},xe(gn,"defaults",et),xe(gn,"instances",Wo),xe(gn,"overrides",ri),xe(gn,"registry",Es),xe(gn,"version",tk),xe(gn,"getChart",wm),gn);function km(){return Ie(ha.instances,t=>t._plugins.invalidate())}function ak(t,e,s){const{startAngle:r,x:o,y:l,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:m}=h,x=Math.min(p/c,Ht(r-s));if(t.beginPath(),t.arc(o,l,c-p/2,r+x/2,s-x/2),u>0){const N=Math.min(p/u,Ht(r-s));t.arc(o,l,u+p/2,s-N/2,r+N/2,!0)}else{const N=Math.min(p/2,c*Ht(r-s));if(m==="round")t.arc(o,l,N,s-Fe/2,r+Fe/2,!0);else if(m==="bevel"){const w=2*N*N,b=-w*Math.cos(s+Fe/2)+o,j=-w*Math.sin(s+Fe/2)+l,y=w*Math.cos(r+Fe/2)+o,_=w*Math.sin(r+Fe/2)+l;t.lineTo(b,j),t.lineTo(y,_)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function ok(t,e,s){const{startAngle:r,pixelMargin:o,x:l,y:c,outerRadius:u,innerRadius:h}=e;let p=o/u;t.beginPath(),t.arc(l,c,u,r-p,s+p),h>o?(p=o/h,t.arc(l,c,h,s+p,r-p,!0)):t.arc(l,c,o,s+ct,r-ct),t.closePath(),t.clip()}function lk(t){return iu(t,["outerStart","outerEnd","innerStart","innerEnd"])}function ck(t,e,s,r){const o=lk(t.options.borderRadius),l=(s-e)/2,c=Math.min(l,r*e/2),u=h=>{const p=(s-Math.min(l,h))*r/2;return Nt(h,0,Math.min(l,p))};return{outerStart:u(o.outerStart),outerEnd:u(o.outerEnd),innerStart:Nt(o.innerStart,0,c),innerEnd:Nt(o.innerEnd,0,c)}}function zi(t,e,s,r){return{x:s+t*Math.cos(e),y:r+t*Math.sin(e)}}function Zo(t,e,s,r,o,l){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:m}=e,x=Math.max(e.outerRadius+r+s-p,0),N=m>0?m+r+s+p:0;let w=0;const b=o-h;if(r){const ie=m>0?m-r:0,R=x>0?x-r:0,J=(ie+R)/2,X=J!==0?b*J/(J+r):b;w=(b-X)/2}const j=Math.max(.001,b*x-s/Fe)/x,y=(b-j)/2,_=h+y+w,E=o-y-w,{outerStart:A,outerEnd:U,innerStart:P,innerEnd:q}=ck(e,N,x,E-_),O=x-A,T=x-U,L=_+A/O,B=E-U/T,M=N+P,C=N+q,I=_+P/M,W=E-q/C;if(t.beginPath(),l){const ie=(L+B)/2;if(t.arc(c,u,x,L,ie),t.arc(c,u,x,ie,B),U>0){const re=zi(T,B,c,u);t.arc(re.x,re.y,U,B,E+ct)}const R=zi(C,E,c,u);if(t.lineTo(R.x,R.y),q>0){const re=zi(C,W,c,u);t.arc(re.x,re.y,q,E+ct,W+Math.PI)}const J=(E-q/N+(_+P/N))/2;if(t.arc(c,u,N,E-q/N,J,!0),t.arc(c,u,N,J,_+P/N,!0),P>0){const re=zi(M,I,c,u);t.arc(re.x,re.y,P,I+Math.PI,_-ct)}const X=zi(O,_,c,u);if(t.lineTo(X.x,X.y),A>0){const re=zi(O,L,c,u);t.arc(re.x,re.y,A,_-ct,L)}}else{t.moveTo(c,u);const ie=Math.cos(L)*x+c,R=Math.sin(L)*x+u;t.lineTo(ie,R);const J=Math.cos(B)*x+c,X=Math.sin(B)*x+u;t.lineTo(J,X)}t.closePath()}function dk(t,e,s,r,o){const{fullCircles:l,startAngle:c,circumference:u}=e;let h=e.endAngle;if(l){Zo(t,e,s,r,h,o);for(let p=0;p<l;++p)t.fill();isNaN(u)||(h=c+(u%Ke||Ke))}return Zo(t,e,s,r,h,o),t.fill(),h}function uk(t,e,s,r,o){const{fullCircles:l,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:m,borderDash:x,borderDashOffset:N,borderRadius:w}=h,b=h.borderAlign==="inner";if(!p)return;t.setLineDash(x||[]),t.lineDashOffset=N,b?(t.lineWidth=p*2,t.lineJoin=m||"round"):(t.lineWidth=p,t.lineJoin=m||"bevel");let j=e.endAngle;if(l){Zo(t,e,s,r,j,o);for(let y=0;y<l;++y)t.stroke();isNaN(u)||(j=c+(u%Ke||Ke))}b&&ok(t,e,j),h.selfJoin&&j-c>=Fe&&w===0&&m!=="miter"&&ak(t,e,j),l||(Zo(t,e,s,r,j,o),t.stroke())}class $r extends ms{constructor(s){super();xe(this,"circumference");xe(this,"endAngle");xe(this,"fullCircles");xe(this,"innerRadius");xe(this,"outerRadius");xe(this,"pixelMargin");xe(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,s&&Object.assign(this,s)}inRange(s,r,o){const l=this.getProps(["x","y"],o),{angle:c,distance:u}=Ug(l,{x:s,y:r}),{startAngle:h,endAngle:p,innerRadius:m,outerRadius:x,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),w=(this.options.spacing+this.options.borderWidth)/2,b=_e(N,p-h),j=ea(c,h,p)&&h!==p,y=b>=Ke||j,_=qs(u,m+w,x+w);return y&&_}getCenterPoint(s){const{x:r,y:o,startAngle:l,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],s),{offset:p,spacing:m}=this.options,x=(l+c)/2,N=(u+h+m+p)/2;return{x:r+Math.cos(x)*N,y:o+Math.sin(x)*N}}tooltipPosition(s){return this.getCenterPoint(s)}draw(s){const{options:r,circumference:o}=this,l=(r.offset||0)/4,c=(r.spacing||0)/2,u=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=o>Ke?Math.floor(o/Ke):0,o===0||this.innerRadius<0||this.outerRadius<0)return;s.save();const h=(this.startAngle+this.endAngle)/2;s.translate(Math.cos(h)*l,Math.sin(h)*l);const p=1-Math.sin(Math.min(Fe,o||0)),m=l*p;s.fillStyle=r.backgroundColor,s.strokeStyle=r.borderColor,dk(s,this,m,c,u),uk(s,this,m,c,u),s.restore()}}xe($r,"id","arc"),xe($r,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),xe($r,"defaultRoutes",{backgroundColor:"backgroundColor"}),xe($r,"descriptors",{_scriptable:!0,_indexable:s=>s!=="borderDash"});function yx(t,e,s=e){t.lineCap=_e(s.borderCapStyle,e.borderCapStyle),t.setLineDash(_e(s.borderDash,e.borderDash)),t.lineDashOffset=_e(s.borderDashOffset,e.borderDashOffset),t.lineJoin=_e(s.borderJoinStyle,e.borderJoinStyle),t.lineWidth=_e(s.borderWidth,e.borderWidth),t.strokeStyle=_e(s.borderColor,e.borderColor)}function hk(t,e,s){t.lineTo(s.x,s.y)}function fk(t){return t.stepped?O1:t.tension||t.cubicInterpolationMode==="monotone"?z1:hk}function bx(t,e,s={}){const r=t.length,{start:o=0,end:l=r-1}=s,{start:c,end:u}=e,h=Math.max(o,c),p=Math.min(l,u),m=o<c&&l<c||o>u&&l>u;return{count:r,start:h,loop:e.loop,ilen:p<h&&!m?r+p-h:p-h}}function pk(t,e,s,r){const{points:o,options:l}=e,{count:c,start:u,loop:h,ilen:p}=bx(o,s,r),m=fk(l);let{move:x=!0,reverse:N}=r||{},w,b,j;for(w=0;w<=p;++w)b=o[(u+(N?p-w:w))%c],!b.skip&&(x?(t.moveTo(b.x,b.y),x=!1):m(t,j,b,N,l.stepped),j=b);return h&&(b=o[(u+(N?p:0))%c],m(t,j,b,N,l.stepped)),!!h}function mk(t,e,s,r){const o=e.points,{count:l,start:c,ilen:u}=bx(o,s,r),{move:h=!0,reverse:p}=r||{};let m=0,x=0,N,w,b,j,y,_;const E=U=>(c+(p?u-U:U))%l,A=()=>{j!==y&&(t.lineTo(m,y),t.lineTo(m,j),t.lineTo(m,_))};for(h&&(w=o[E(0)],t.moveTo(w.x,w.y)),N=0;N<=u;++N){if(w=o[E(N)],w.skip)continue;const U=w.x,P=w.y,q=U|0;q===b?(P<j?j=P:P>y&&(y=P),m=(x*m+U)/++x):(A(),t.lineTo(U,P),b=q,x=0,j=y=P),_=P}A()}function zd(t){const e=t.options,s=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!s?mk:pk}function gk(t){return t.stepped?mN:t.tension||t.cubicInterpolationMode==="monotone"?gN:Gn}function xk(t,e,s,r){let o=e._path;o||(o=e._path=new Path2D,e.path(o,s,r)&&o.closePath()),yx(t,e.options),t.stroke(o)}function vk(t,e,s,r){const{segments:o,options:l}=e,c=zd(e);for(const u of o)yx(t,l,u.style),t.beginPath(),c(t,e,u,{start:s,end:s+r-1})&&t.closePath(),t.stroke()}const yk=typeof Path2D=="function";function bk(t,e,s,r){yk&&!e.options.segment?xk(t,e,s,r):vk(t,e,s,r)}class Ys extends ms{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,s){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const o=r.spanGaps?this._loop:this._fullLoop;oN(this._points,r,e,o,s),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=NN(this,this.options.segment))}first(){const e=this.segments,s=this.points;return e.length&&s[e[0].start]}last(){const e=this.segments,s=this.points,r=e.length;return r&&s[e[r-1].end]}interpolate(e,s){const r=this.options,o=e[s],l=this.points,c=rx(this,{property:s,start:o,end:o});if(!c.length)return;const u=[],h=gk(r);let p,m;for(p=0,m=c.length;p<m;++p){const{start:x,end:N}=c[p],w=l[x],b=l[N];if(w===b){u.push(w);continue}const j=Math.abs((o-w[s])/(b[s]-w[s])),y=h(w,b,j,r.stepped);y[s]=e[s],u.push(y)}return u.length===1?u[0]:u}pathSegment(e,s,r){return zd(this)(e,this,s,r)}path(e,s,r){const o=this.segments,l=zd(this);let c=this._loop;s=s||0,r=r||this.points.length-s;for(const u of o)c&=l(e,this,u,{start:s,end:s+r-1});return!!c}draw(e,s,r,o){const l=this.options||{};(this.points||[]).length&&l.borderWidth&&(e.save(),bk(e,this,r,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}xe(Ys,"id","line"),xe(Ys,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),xe(Ys,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),xe(Ys,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function _m(t,e,s,r){const o=t.options,{[s]:l}=t.getProps([s],r);return Math.abs(e-l)<o.radius+o.hitRadius}class Yr extends ms{constructor(s){super();xe(this,"parsed");xe(this,"skip");xe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,s&&Object.assign(this,s)}inRange(s,r,o){const l=this.options,{x:c,y:u}=this.getProps(["x","y"],o);return Math.pow(s-c,2)+Math.pow(r-u,2)<Math.pow(l.hitRadius+l.radius,2)}inXRange(s,r){return _m(this,s,"x",r)}inYRange(s,r){return _m(this,s,"y",r)}getCenterPoint(s){const{x:r,y:o}=this.getProps(["x","y"],s);return{x:r,y:o}}size(s){s=s||this.options||{};let r=s.radius||0;r=Math.max(r,r&&s.hoverRadius||0);const o=r&&s.borderWidth||0;return(r+o)*2}draw(s,r){const o=this.options;this.skip||o.radius<.1||!ta(this,r,this.size(o)/2)||(s.strokeStyle=o.borderColor,s.lineWidth=o.borderWidth,s.fillStyle=o.backgroundColor,Ld(s,o,this.x,this.y))}getRange(){const s=this.options||{};return s.radius+s.hitRadius}}xe(Yr,"id","point"),xe(Yr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),xe(Yr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function jx(t,e){const{x:s,y:r,base:o,width:l,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,m,x;return t.horizontal?(x=c/2,u=Math.min(s,o),h=Math.max(s,o),p=r-x,m=r+x):(x=l/2,u=s-x,h=s+x,p=Math.min(r,o),m=Math.max(r,o)),{left:u,top:p,right:h,bottom:m}}function bn(t,e,s,r){return t?0:Nt(e,s,r)}function jk(t,e,s){const r=t.options.borderWidth,o=t.borderSkipped,l=Kg(r);return{t:bn(o.top,l.top,0,s),r:bn(o.right,l.right,0,e),b:bn(o.bottom,l.bottom,0,s),l:bn(o.left,l.left,0,e)}}function Nk(t,e,s){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,l=Ii(o),c=Math.min(e,s),u=t.borderSkipped,h=r||Ee(o);return{topLeft:bn(!h||u.top||u.left,l.topLeft,0,c),topRight:bn(!h||u.top||u.right,l.topRight,0,c),bottomLeft:bn(!h||u.bottom||u.left,l.bottomLeft,0,c),bottomRight:bn(!h||u.bottom||u.right,l.bottomRight,0,c)}}function wk(t){const e=jx(t),s=e.right-e.left,r=e.bottom-e.top,o=jk(t,s/2,r/2),l=Nk(t,s/2,r/2);return{outer:{x:e.left,y:e.top,w:s,h:r,radius:l},inner:{x:e.left+o.l,y:e.top+o.t,w:s-o.l-o.r,h:r-o.t-o.b,radius:{topLeft:Math.max(0,l.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,l.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,l.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,l.bottomRight-Math.max(o.b,o.r))}}}}function yd(t,e,s,r){const o=e===null,l=s===null,u=t&&!(o&&l)&&jx(t,r);return u&&(o||qs(e,u.left,u.right))&&(l||qs(s,u.top,u.bottom))}function kk(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function _k(t,e){t.rect(e.x,e.y,e.w,e.h)}function bd(t,e,s={}){const r=t.x!==s.x?-e:0,o=t.y!==s.y?-e:0,l=(t.x+t.w!==s.x+s.w?e:0)-r,c=(t.y+t.h!==s.y+s.h?e:0)-o;return{x:t.x+r,y:t.y+o,w:t.w+l,h:t.h+c,radius:t.radius}}class Ho extends ms{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:s,options:{borderColor:r,backgroundColor:o}}=this,{inner:l,outer:c}=wk(this),u=kk(c.radius)?Xo:_k;e.save(),(c.w!==l.w||c.h!==l.h)&&(e.beginPath(),u(e,bd(c,s,l)),e.clip(),u(e,bd(l,-s,c)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),u(e,bd(l,s)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,s,r){return yd(this,e,s,r)}inXRange(e,s){return yd(this,e,null,s)}inYRange(e,s){return yd(this,null,e,s)}getCenterPoint(e){const{x:s,y:r,base:o,horizontal:l}=this.getProps(["x","y","base","horizontal"],e);return{x:l?(s+o)/2:s,y:l?r:(r+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}xe(Ho,"id","bar"),xe(Ho,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),xe(Ho,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Sk(t,e,s){const r=t.segments,o=t.points,l=e.points,c=[];for(const u of r){let{start:h,end:p}=u;p=fl(h,p,o);const m=Id(s,o[h],o[p],u.loop);if(!e.segments){c.push({source:u,target:m,start:o[h],end:o[p]});continue}const x=rx(e,m);for(const N of x){const w=Id(s,l[N.start],l[N.end],N.loop),b=ix(u,o,w);for(const j of b)c.push({source:j,target:N,start:{[s]:Sm(m,w,"start",Math.max)},end:{[s]:Sm(m,w,"end",Math.min)}})}}return c}function Id(t,e,s,r){if(r)return;let o=e[t],l=s[t];return t==="angle"&&(o=Ht(o),l=Ht(l)),{property:t,start:o,end:l}}function Ck(t,e){const{x:s=null,y:r=null}=t||{},o=e.points,l=[];return e.segments.forEach(({start:c,end:u})=>{u=fl(c,u,o);const h=o[c],p=o[u];r!==null?(l.push({x:h.x,y:r}),l.push({x:p.x,y:r})):s!==null&&(l.push({x:s,y:h.y}),l.push({x:s,y:p.y}))}),l}function fl(t,e,s){for(;e>t;e--){const r=s[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function Sm(t,e,s,r){return t&&e?r(t[s],e[s]):t?t[s]:e?e[s]:0}function Nx(t,e){let s=[],r=!1;return it(t)?(r=!0,s=t):s=Ck(t,e),s.length?new Ys({points:s,options:{tension:0},_loop:r,_fullLoop:r}):null}function Cm(t){return t&&t.fill!==!1}function Ek(t,e,s){let o=t[e].fill;const l=[e];let c;if(!s)return o;for(;o!==!1&&l.indexOf(o)===-1;){if(!kt(o))return o;if(c=t[o],!c)return!1;if(c.visible)return o;l.push(o),o=c.fill}return!1}function Rk(t,e,s){const r=Tk(t);if(Ee(r))return isNaN(r.value)?!1:r;let o=parseFloat(r);return kt(o)&&Math.floor(o)===o?Pk(r[0],e,o,s):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function Pk(t,e,s,r){return(t==="-"||t==="+")&&(s=e+s),s===e||s<0||s>=r?!1:s}function Dk(t,e){let s=null;return t==="start"?s=e.bottom:t==="end"?s=e.top:Ee(t)?s=e.getPixelForValue(t.value):e.getBasePixel&&(s=e.getBasePixel()),s}function Ak(t,e,s){let r;return t==="start"?r=s:t==="end"?r=e.options.reverse?e.min:e.max:Ee(t)?r=t.value:r=e.getBaseValue(),r}function Tk(t){const e=t.options,s=e.fill;let r=_e(s&&s.target,s);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function Lk(t){const{scale:e,index:s,line:r}=t,o=[],l=r.segments,c=r.points,u=Mk(e,s);u.push(Nx({x:null,y:e.bottom},r));for(let h=0;h<l.length;h++){const p=l[h];for(let m=p.start;m<=p.end;m++)Ok(o,c[m],u)}return new Ys({points:o,options:{}})}function Mk(t,e){const s=[],r=t.getMatchingVisibleMetas("line");for(let o=0;o<r.length;o++){const l=r[o];if(l.index===e)break;l.hidden||s.unshift(l.dataset)}return s}function Ok(t,e,s){const r=[];for(let o=0;o<s.length;o++){const l=s[o],{first:c,last:u,point:h}=zk(l,e,"x");if(!(!h||c&&u)){if(c)r.unshift(h);else if(t.push(h),!u)break}}t.push(...r)}function zk(t,e,s){const r=t.interpolate(e,s);if(!r)return{};const o=r[s],l=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<l.length;p++){const m=l[p],x=c[m.start][s],N=c[m.end][s];if(qs(o,x,N)){u=o===x,h=o===N;break}}return{first:u,last:h,point:r}}class wx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,s,r){const{x:o,y:l,radius:c}=this;return s=s||{start:0,end:Ke},e.arc(o,l,c,s.end,s.start,!0),!r.bounds}interpolate(e){const{x:s,y:r,radius:o}=this,l=e.angle;return{x:s+Math.cos(l)*o,y:r+Math.sin(l)*o,angle:l}}}function Ik(t){const{chart:e,fill:s,line:r}=t;if(kt(s))return Fk(e,s);if(s==="stack")return Lk(t);if(s==="shape")return!0;const o=Bk(t);return o instanceof wx?o:Nx(o,r)}function Fk(t,e){const s=t.getDatasetMeta(e);return s&&t.isDatasetVisible(e)?s.dataset:null}function Bk(t){return(t.scale||{}).getPointPositionForValue?Uk(t):$k(t)}function $k(t){const{scale:e={},fill:s}=t,r=Dk(s,e);if(kt(r)){const o=e.isHorizontal();return{x:o?r:null,y:o?null:r}}return null}function Uk(t){const{scale:e,fill:s}=t,r=e.options,o=e.getLabels().length,l=r.reverse?e.max:e.min,c=Ak(s,e,l),u=[];if(r.grid.circular){const h=e.getPointPositionForValue(0,l);return new wx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<o;++h)u.push(e.getPointPositionForValue(h,c));return u}function jd(t,e,s){const r=Ik(e),{chart:o,index:l,line:c,scale:u,axis:h}=e,p=c.options,m=p.fill,x=p.backgroundColor,{above:N=x,below:w=x}=m||{},b=o.getDatasetMeta(l),j=ax(o,b);r&&c.points.length&&(cl(t,s),Wk(t,{line:c,target:r,above:N,below:w,area:s,scale:u,axis:h,clip:j}),dl(t))}function Wk(t,e){const{line:s,target:r,above:o,below:l,area:c,scale:u,clip:h}=e,p=s._loop?"angle":e.axis;t.save();let m=l;l!==o&&(p==="x"?(Em(t,r,c.top),Nd(t,{line:s,target:r,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),Em(t,r,c.bottom)):p==="y"&&(Rm(t,r,c.left),Nd(t,{line:s,target:r,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),Rm(t,r,c.right),m=o)),Nd(t,{line:s,target:r,color:m,scale:u,property:p,clip:h}),t.restore()}function Em(t,e,s){const{segments:r,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=o[h],x=o[fl(h,p,o)];l?(t.moveTo(m.x,m.y),l=!1):(t.lineTo(m.x,s),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(x.x,s)}t.lineTo(e.first().x,s),t.closePath(),t.clip()}function Rm(t,e,s){const{segments:r,points:o}=e;let l=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=o[h],x=o[fl(h,p,o)];l?(t.moveTo(m.x,m.y),l=!1):(t.lineTo(s,m.y),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(s,x.y)}t.lineTo(s,e.first().y),t.closePath(),t.clip()}function Nd(t,e){const{line:s,target:r,property:o,color:l,scale:c,clip:u}=e,h=Sk(s,r,o);for(const{source:p,target:m,start:x,end:N}of h){const{style:{backgroundColor:w=l}={}}=p,b=r!==!0;t.save(),t.fillStyle=w,Hk(t,c,u,b&&Id(o,x,N)),t.beginPath();const j=!!s.pathSegment(t,p);let y;if(b){j?t.closePath():Pm(t,r,N,o);const _=!!r.pathSegment(t,m,{move:j,reverse:!0});y=j&&_,y||Pm(t,r,x,o)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function Hk(t,e,s,r){const o=e.chart.chartArea,{property:l,start:c,end:u}=r||{};if(l==="x"||l==="y"){let h,p,m,x;l==="x"?(h=c,p=o.top,m=u,x=o.bottom):(h=o.left,p=c,m=o.right,x=u),t.beginPath(),s&&(h=Math.max(h,s.left),m=Math.min(m,s.right),p=Math.max(p,s.top),x=Math.min(x,s.bottom)),t.rect(h,p,m-h,x-p),t.clip()}}function Pm(t,e,s,r){const o=e.interpolate(s,r);o&&t.lineTo(o.x,o.y)}var kx={id:"filler",afterDatasetsUpdate(t,e,s){const r=(t.data.datasets||[]).length,o=[];let l,c,u,h;for(c=0;c<r;++c)l=t.getDatasetMeta(c),u=l.dataset,h=null,u&&u.options&&u instanceof Ys&&(h={visible:t.isDatasetVisible(c),index:c,fill:Rk(u,c,r),chart:t,axis:l.controller.options.indexAxis,scale:l.vScale,line:u}),l.$filler=h,o.push(h);for(c=0;c<r;++c)h=o[c],!(!h||h.fill===!1)&&(h.fill=Ek(o,c,s.propagate))},beforeDraw(t,e,s){const r=s.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),l=t.chartArea;for(let c=o.length-1;c>=0;--c){const u=o[c].$filler;u&&(u.line.updateControlPoints(l,u.axis),r&&u.fill&&jd(t.ctx,u,l))}},beforeDatasetsDraw(t,e,s){if(s.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let o=r.length-1;o>=0;--o){const l=r[o].$filler;Cm(l)&&jd(t.ctx,l,t.chartArea)}},beforeDatasetDraw(t,e,s){const r=e.meta.$filler;!Cm(r)||s.drawTime!=="beforeDatasetDraw"||jd(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Dm=(t,e)=>{let{boxHeight:s=e,boxWidth:r=e}=t;return t.usePointStyle&&(s=Math.min(s,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:s,itemHeight:Math.max(e,s)}},Vk=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Am extends ms{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s,r){this.maxWidth=e,this.maxHeight=s,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let s=We(e.generateLabels,[this.chart],this)||[];e.filter&&(s=s.filter(r=>e.filter(r,this.chart.data))),e.sort&&(s=s.sort((r,o)=>e.sort(r,o,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:e,ctx:s}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,o=wt(r.font),l=o.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Dm(r,l);let p,m;s.font=o.string,this.isHorizontal()?(p=this.maxWidth,m=this._fitRows(c,l,u,h)+10):(m=this.maxHeight,p=this._fitCols(c,o,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(m,e.maxHeight||this.maxHeight)}_fitRows(e,s,r,o){const{ctx:l,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],m=o+u;let x=e;l.textAlign="left",l.textBaseline="middle";let N=-1,w=-m;return this.legendItems.forEach((b,j)=>{const y=r+s/2+l.measureText(b.text).width;(j===0||p[p.length-1]+y+2*u>c)&&(x+=m,p[p.length-(j>0?0:1)]=0,w+=m,N++),h[j]={left:0,top:w,row:N,width:y,height:o},p[p.length-1]+=y+u}),x}_fitCols(e,s,r,o){const{ctx:l,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],m=c-e;let x=u,N=0,w=0,b=0,j=0;return this.legendItems.forEach((y,_)=>{const{itemWidth:E,itemHeight:A}=qk(r,s,l,y,o);_>0&&w+A+2*u>m&&(x+=N+u,p.push({width:N,height:w}),b+=N+u,j++,N=w=0),h[_]={left:b,top:w,col:j,width:E,height:A},N=Math.max(N,E),w+=A+u}),x+=N,p.push({width:N,height:w}),x}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:r,labels:{padding:o},rtl:l}}=this,c=Fi(l,this.left,this.width);if(this.isHorizontal()){let u=0,h=bt(r,this.left+o,this.right-this.lineWidths[u]);for(const p of s)u!==p.row&&(u=p.row,h=bt(r,this.left+o,this.right-this.lineWidths[u])),p.top+=this.top+e+o,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+o}else{let u=0,h=bt(r,this.top+e+o,this.bottom-this.columnSizes[u].height);for(const p of s)p.col!==u&&(u=p.col,h=bt(r,this.top+e+o,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+o,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;cl(e,this),this._draw(),dl(e)}}_draw(){const{options:e,columnSizes:s,lineWidths:r,ctx:o}=this,{align:l,labels:c}=e,u=et.color,h=Fi(e.rtl,this.left,this.width),p=wt(c.font),{padding:m}=c,x=p.size,N=x/2;let w;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=p.string;const{boxWidth:b,boxHeight:j,itemHeight:y}=Dm(c,x),_=function(q,O,T){if(isNaN(b)||b<=0||isNaN(j)||j<0)return;o.save();const L=_e(T.lineWidth,1);if(o.fillStyle=_e(T.fillStyle,u),o.lineCap=_e(T.lineCap,"butt"),o.lineDashOffset=_e(T.lineDashOffset,0),o.lineJoin=_e(T.lineJoin,"miter"),o.lineWidth=L,o.strokeStyle=_e(T.strokeStyle,u),o.setLineDash(_e(T.lineDash,[])),c.usePointStyle){const B={radius:j*Math.SQRT2/2,pointStyle:T.pointStyle,rotation:T.rotation,borderWidth:L},M=h.xPlus(q,b/2),C=O+N;Qg(o,B,M,C,c.pointStyleWidth&&b)}else{const B=O+Math.max((x-j)/2,0),M=h.leftForLtr(q,b),C=Ii(T.borderRadius);o.beginPath(),Object.values(C).some(I=>I!==0)?Xo(o,{x:M,y:B,w:b,h:j,radius:C}):o.rect(M,B,b,j),o.fill(),L!==0&&o.stroke()}o.restore()},E=function(q,O,T){sa(o,T.text,q,O+y/2,p,{strikethrough:T.hidden,textAlign:h.textAlign(T.textAlign)})},A=this.isHorizontal(),U=this._computeTitleHeight();A?w={x:bt(l,this.left+m,this.right-r[0]),y:this.top+m+U,line:0}:w={x:this.left+m,y:bt(l,this.top+U+m,this.bottom-s[0].height),line:0},tx(this.ctx,e.textDirection);const P=y+m;this.legendItems.forEach((q,O)=>{o.strokeStyle=q.fontColor,o.fillStyle=q.fontColor;const T=o.measureText(q.text).width,L=h.textAlign(q.textAlign||(q.textAlign=c.textAlign)),B=b+N+T;let M=w.x,C=w.y;h.setWidth(this.width),A?O>0&&M+B+m>this.right&&(C=w.y+=P,w.line++,M=w.x=bt(l,this.left+m,this.right-r[w.line])):O>0&&C+P>this.bottom&&(M=w.x=M+s[w.line].width+m,w.line++,C=w.y=bt(l,this.top+U+m,this.bottom-s[w.line].height));const I=h.x(M);if(_(I,C,q),M=w1(L,M+b+N,A?M+B:this.right,e.rtl),E(h.x(M),C,q),A)w.x+=B+m;else if(typeof q.text!="string"){const W=p.lineHeight;w.y+=_x(q,W)+m}else w.y+=P}),sx(this.ctx,e.textDirection)}drawTitle(){const e=this.options,s=e.title,r=wt(s.font),o=ns(s.padding);if(!s.display)return;const l=Fi(e.rtl,this.left,this.width),c=this.ctx,u=s.position,h=r.size/2,p=o.top+h;let m,x=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),m=this.top+p,x=bt(e.align,x,this.right-N);else{const b=this.columnSizes.reduce((j,y)=>Math.max(j,y.height),0);m=p+bt(e.align,this.top,this.bottom-b-e.labels.padding-this._computeTitleHeight())}const w=bt(u,x,x+N);c.textAlign=l.textAlign(tu(u)),c.textBaseline="middle",c.strokeStyle=s.color,c.fillStyle=s.color,c.font=r.string,sa(c,s.text,w,m,r)}_computeTitleHeight(){const e=this.options.title,s=wt(e.font),r=ns(e.padding);return e.display?s.lineHeight+r.height:0}_getLegendItemAt(e,s){let r,o,l;if(qs(e,this.left,this.right)&&qs(s,this.top,this.bottom)){for(l=this.legendHitBoxes,r=0;r<l.length;++r)if(o=l[r],qs(e,o.left,o.left+o.width)&&qs(s,o.top,o.top+o.height))return this.legendItems[r]}return null}handleEvent(e){const s=this.options;if(!Kk(e.type,s))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,l=Vk(o,r);o&&!l&&We(s.onLeave,[e,o,this],this),this._hoveredItem=r,r&&!l&&We(s.onHover,[e,r,this],this)}else r&&We(s.onClick,[e,r,this],this)}}function qk(t,e,s,r,o){const l=Yk(r,t,e,s),c=Qk(o,r,e.lineHeight);return{itemWidth:l,itemHeight:c}}function Yk(t,e,s,r){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((l,c)=>l.length>c.length?l:c)),e+s.size/2+r.measureText(o).width}function Qk(t,e,s){let r=t;return typeof e.text!="string"&&(r=_x(e,s)),r}function _x(t,e){const s=t.text?t.text.length:0;return e*s}function Kk(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var Sx={id:"legend",_element:Am,start(t,e,s){const r=t.legend=new Am({ctx:t.ctx,options:s,chart:t});ss.configure(t,r,s),ss.addBox(t,r)},stop(t){ss.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,s){const r=t.legend;ss.configure(t,r,s),r.options=s},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,s){const r=e.datasetIndex,o=s.chart;o.isDatasetVisible(r)?(o.hide(r),e.hidden=!0):(o.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:s,pointStyle:r,textAlign:o,color:l,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(s?0:void 0),m=ns(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:l,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:p.borderColor,pointStyle:r||p.pointStyle,rotation:p.rotation,textAlign:o||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Cx extends ms{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=s;const o=it(r.text)?r.text.length:1;this._padding=ns(r.padding);const l=o*wt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=l:this.width=l}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:s,left:r,bottom:o,right:l,options:c}=this,u=c.align;let h=0,p,m,x;return this.isHorizontal()?(m=bt(u,r,l),x=s+e,p=l-r):(c.position==="left"?(m=r+e,x=bt(u,o,s),h=Fe*-.5):(m=l-e,x=bt(u,s,o),h=Fe*.5),p=o-s),{titleX:m,titleY:x,maxWidth:p,rotation:h}}draw(){const e=this.ctx,s=this.options;if(!s.display)return;const r=wt(s.font),l=r.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(l);sa(e,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:p,textAlign:tu(s.align),textBaseline:"middle",translation:[c,u]})}}function Xk(t,e){const s=new Cx({ctx:t.ctx,options:e,chart:t});ss.configure(t,s,e),ss.addBox(t,s),t.titleBlock=s}var Ex={id:"title",_element:Cx,start(t,e,s){Xk(t,s)},stop(t){const e=t.titleBlock;ss.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,s){const r=t.titleBlock;ss.configure(t,r,s),r.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ur={average(t){if(!t.length)return!1;let e,s,r=new Set,o=0,l=0;for(e=0,s=t.length;e<s;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();r.add(h.x),o+=h.y,++l}}return l===0||r.size===0?!1:{x:[...r].reduce((u,h)=>u+h)/r.size,y:o/l}},nearest(t,e){if(!t.length)return!1;let s=e.x,r=e.y,o=Number.POSITIVE_INFINITY,l,c,u;for(l=0,c=t.length;l<c;++l){const h=t[l].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),m=Ad(e,p);m<o&&(o=m,u=h)}}if(u){const h=u.tooltipPosition();s=h.x,r=h.y}return{x:s,y:r}}};function Cs(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ws(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function Gk(t,e){const{element:s,datasetIndex:r,index:o}=e,l=t.getDatasetMeta(r).controller,{label:c,value:u}=l.getLabelAndValue(o);return{chart:t,label:c,parsed:l.getParsed(o),raw:t.data.datasets[r].data[o],formattedValue:u,dataset:l.getDataset(),dataIndex:o,datasetIndex:r,element:s}}function Tm(t,e){const s=t.chart.ctx,{body:r,footer:o,title:l}=t,{boxWidth:c,boxHeight:u}=e,h=wt(e.bodyFont),p=wt(e.titleFont),m=wt(e.footerFont),x=l.length,N=o.length,w=r.length,b=ns(e.padding);let j=b.height,y=0,_=r.reduce((U,P)=>U+P.before.length+P.lines.length+P.after.length,0);if(_+=t.beforeBody.length+t.afterBody.length,x&&(j+=x*p.lineHeight+(x-1)*e.titleSpacing+e.titleMarginBottom),_){const U=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;j+=w*U+(_-w)*h.lineHeight+(_-1)*e.bodySpacing}N&&(j+=e.footerMarginTop+N*m.lineHeight+(N-1)*e.footerSpacing);let E=0;const A=function(U){y=Math.max(y,s.measureText(U).width+E)};return s.save(),s.font=p.string,Ie(t.title,A),s.font=h.string,Ie(t.beforeBody.concat(t.afterBody),A),E=e.displayColors?c+2+e.boxPadding:0,Ie(r,U=>{Ie(U.before,A),Ie(U.lines,A),Ie(U.after,A)}),E=0,s.font=m.string,Ie(t.footer,A),s.restore(),y+=b.width,{width:y,height:j}}function Jk(t,e){const{y:s,height:r}=e;return s<r/2?"top":s>t.height-r/2?"bottom":"center"}function Zk(t,e,s,r){const{x:o,width:l}=r,c=s.caretSize+s.caretPadding;if(t==="left"&&o+l+c>e.width||t==="right"&&o-l-c<0)return!0}function e_(t,e,s,r){const{x:o,width:l}=s,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return r==="center"?p=o<=(u+h)/2?"left":"right":o<=l/2?p="left":o>=c-l/2&&(p="right"),Zk(p,t,e,s)&&(p="center"),p}function Lm(t,e,s){const r=s.yAlign||e.yAlign||Jk(t,s);return{xAlign:s.xAlign||e.xAlign||e_(t,e,s,r),yAlign:r}}function t_(t,e){let{x:s,width:r}=t;return e==="right"?s-=r:e==="center"&&(s-=r/2),s}function s_(t,e,s){let{y:r,height:o}=t;return e==="top"?r+=s:e==="bottom"?r-=o+s:r-=o/2,r}function Mm(t,e,s,r){const{caretSize:o,caretPadding:l,cornerRadius:c}=t,{xAlign:u,yAlign:h}=s,p=o+l,{topLeft:m,topRight:x,bottomLeft:N,bottomRight:w}=Ii(c);let b=t_(e,u);const j=s_(e,h,p);return h==="center"?u==="left"?b+=p:u==="right"&&(b-=p):u==="left"?b-=Math.max(m,N)+o:u==="right"&&(b+=Math.max(x,w)+o),{x:Nt(b,0,r.width-e.width),y:Nt(j,0,r.height-e.height)}}function Mo(t,e,s){const r=ns(s.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function Om(t){return Cs([],Ws(t))}function n_(t,e,s){return oi(t,{tooltip:e,tooltipItems:s,type:"tooltip"})}function zm(t,e){const s=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return s?t.override(s):t}const Rx={beforeTitle:$s,title(t){if(t.length>0){const e=t[0],s=e.chart.data.labels,r=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return s[e.dataIndex]}return""},afterTitle:$s,beforeBody:$s,beforeLabel:$s,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const s=t.formattedValue;return Le(s)||(e+=s),e},labelColor(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:$s,afterBody:$s,beforeFooter:$s,footer:$s,afterFooter:$s};function Mt(t,e,s,r){const o=t[e].call(s,r);return typeof o>"u"?Rx[e].call(s,r):o}class Fd extends ms{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const s=this.chart,r=this.options.setContext(this.getContext()),o=r.enabled&&s.options.animation&&r.animations,l=new ox(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(l)),l}getContext(){return this.$context||(this.$context=n_(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,s){const{callbacks:r}=s,o=Mt(r,"beforeTitle",this,e),l=Mt(r,"title",this,e),c=Mt(r,"afterTitle",this,e);let u=[];return u=Cs(u,Ws(o)),u=Cs(u,Ws(l)),u=Cs(u,Ws(c)),u}getBeforeBody(e,s){return Om(Mt(s.callbacks,"beforeBody",this,e))}getBody(e,s){const{callbacks:r}=s,o=[];return Ie(e,l=>{const c={before:[],lines:[],after:[]},u=zm(r,l);Cs(c.before,Ws(Mt(u,"beforeLabel",this,l))),Cs(c.lines,Mt(u,"label",this,l)),Cs(c.after,Ws(Mt(u,"afterLabel",this,l))),o.push(c)}),o}getAfterBody(e,s){return Om(Mt(s.callbacks,"afterBody",this,e))}getFooter(e,s){const{callbacks:r}=s,o=Mt(r,"beforeFooter",this,e),l=Mt(r,"footer",this,e),c=Mt(r,"afterFooter",this,e);let u=[];return u=Cs(u,Ws(o)),u=Cs(u,Ws(l)),u=Cs(u,Ws(c)),u}_createItems(e){const s=this._active,r=this.chart.data,o=[],l=[],c=[];let u=[],h,p;for(h=0,p=s.length;h<p;++h)u.push(Gk(this.chart,s[h]));return e.filter&&(u=u.filter((m,x,N)=>e.filter(m,x,N,r))),e.itemSort&&(u=u.sort((m,x)=>e.itemSort(m,x,r))),Ie(u,m=>{const x=zm(e.callbacks,m);o.push(Mt(x,"labelColor",this,m)),l.push(Mt(x,"labelPointStyle",this,m)),c.push(Mt(x,"labelTextColor",this,m))}),this.labelColors=o,this.labelPointStyles=l,this.labelTextColors=c,this.dataPoints=u,u}update(e,s){const r=this.options.setContext(this.getContext()),o=this._active;let l,c=[];if(!o.length)this.opacity!==0&&(l={opacity:0});else{const u=Ur[r.position].call(this,o,this._eventPosition);c=this._createItems(r),this.title=this.getTitle(c,r),this.beforeBody=this.getBeforeBody(c,r),this.body=this.getBody(c,r),this.afterBody=this.getAfterBody(c,r),this.footer=this.getFooter(c,r);const h=this._size=Tm(this,r),p=Object.assign({},u,h),m=Lm(this.chart,r,p),x=Mm(r,p,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,l={opacity:1,x:x.x,y:x.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,l&&this._resolveAnimations().update(this,l),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(e,s,r,o){const l=this.getCaretPosition(e,r,o);s.lineTo(l.x1,l.y1),s.lineTo(l.x2,l.y2),s.lineTo(l.x3,l.y3)}getCaretPosition(e,s,r){const{xAlign:o,yAlign:l}=this,{caretSize:c,cornerRadius:u}=r,{topLeft:h,topRight:p,bottomLeft:m,bottomRight:x}=Ii(u),{x:N,y:w}=e,{width:b,height:j}=s;let y,_,E,A,U,P;return l==="center"?(U=w+j/2,o==="left"?(y=N,_=y-c,A=U+c,P=U-c):(y=N+b,_=y+c,A=U-c,P=U+c),E=y):(o==="left"?_=N+Math.max(h,m)+c:o==="right"?_=N+b-Math.max(p,x)-c:_=this.caretX,l==="top"?(A=w,U=A-c,y=_-c,E=_+c):(A=w+j,U=A+c,y=_+c,E=_-c),P=A),{x1:y,x2:_,x3:E,y1:A,y2:U,y3:P}}drawTitle(e,s,r){const o=this.title,l=o.length;let c,u,h;if(l){const p=Fi(r.rtl,this.x,this.width);for(e.x=Mo(this,r.titleAlign,r),s.textAlign=p.textAlign(r.titleAlign),s.textBaseline="middle",c=wt(r.titleFont),u=r.titleSpacing,s.fillStyle=r.titleColor,s.font=c.string,h=0;h<l;++h)s.fillText(o[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===l&&(e.y+=r.titleMarginBottom-u)}}_drawColorBox(e,s,r,o,l){const c=this.labelColors[r],u=this.labelPointStyles[r],{boxHeight:h,boxWidth:p}=l,m=wt(l.bodyFont),x=Mo(this,"left",l),N=o.x(x),w=h<m.lineHeight?(m.lineHeight-h)/2:0,b=s.y+w;if(l.usePointStyle){const j={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=o.leftForLtr(N,p)+p/2,_=b+h/2;e.strokeStyle=l.multiKeyBackground,e.fillStyle=l.multiKeyBackground,Ld(e,j,y,_),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Ld(e,j,y,_)}else{e.lineWidth=Ee(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const j=o.leftForLtr(N,p),y=o.leftForLtr(o.xPlus(N,1),p-2),_=Ii(c.borderRadius);Object.values(_).some(E=>E!==0)?(e.beginPath(),e.fillStyle=l.multiKeyBackground,Xo(e,{x:j,y:b,w:p,h,radius:_}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),Xo(e,{x:y,y:b+1,w:p-2,h:h-2,radius:_}),e.fill()):(e.fillStyle=l.multiKeyBackground,e.fillRect(j,b,p,h),e.strokeRect(j,b,p,h),e.fillStyle=c.backgroundColor,e.fillRect(y,b+1,p-2,h-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,s,r){const{body:o}=this,{bodySpacing:l,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:m}=r,x=wt(r.bodyFont);let N=x.lineHeight,w=0;const b=Fi(r.rtl,this.x,this.width),j=function(T){s.fillText(T,b.x(e.x+w),e.y+N/2),e.y+=N+l},y=b.textAlign(c);let _,E,A,U,P,q,O;for(s.textAlign=c,s.textBaseline="middle",s.font=x.string,e.x=Mo(this,y,r),s.fillStyle=r.bodyColor,Ie(this.beforeBody,j),w=u&&y!=="right"?c==="center"?p/2+m:p+2+m:0,U=0,q=o.length;U<q;++U){for(_=o[U],E=this.labelTextColors[U],s.fillStyle=E,Ie(_.before,j),A=_.lines,u&&A.length&&(this._drawColorBox(s,e,U,b,r),N=Math.max(x.lineHeight,h)),P=0,O=A.length;P<O;++P)j(A[P]),N=x.lineHeight;Ie(_.after,j)}w=0,N=x.lineHeight,Ie(this.afterBody,j),e.y-=l}drawFooter(e,s,r){const o=this.footer,l=o.length;let c,u;if(l){const h=Fi(r.rtl,this.x,this.width);for(e.x=Mo(this,r.footerAlign,r),e.y+=r.footerMarginTop,s.textAlign=h.textAlign(r.footerAlign),s.textBaseline="middle",c=wt(r.footerFont),s.fillStyle=r.footerColor,s.font=c.string,u=0;u<l;++u)s.fillText(o[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+r.footerSpacing}}drawBackground(e,s,r,o){const{xAlign:l,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:m}=r,{topLeft:x,topRight:N,bottomLeft:w,bottomRight:b}=Ii(o.cornerRadius);s.fillStyle=o.backgroundColor,s.strokeStyle=o.borderColor,s.lineWidth=o.borderWidth,s.beginPath(),s.moveTo(u+x,h),c==="top"&&this.drawCaret(e,s,r,o),s.lineTo(u+p-N,h),s.quadraticCurveTo(u+p,h,u+p,h+N),c==="center"&&l==="right"&&this.drawCaret(e,s,r,o),s.lineTo(u+p,h+m-b),s.quadraticCurveTo(u+p,h+m,u+p-b,h+m),c==="bottom"&&this.drawCaret(e,s,r,o),s.lineTo(u+w,h+m),s.quadraticCurveTo(u,h+m,u,h+m-w),c==="center"&&l==="left"&&this.drawCaret(e,s,r,o),s.lineTo(u,h+x),s.quadraticCurveTo(u,h,u+x,h),s.closePath(),s.fill(),o.borderWidth>0&&s.stroke()}_updateAnimationTarget(e){const s=this.chart,r=this.$animations,o=r&&r.x,l=r&&r.y;if(o||l){const c=Ur[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Tm(this,e),h=Object.assign({},c,this._size),p=Lm(s,e,h),m=Mm(e,h,p,s);(o._to!==m.x||l._to!==m.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(e){const s=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(s);const o={width:this.width,height:this.height},l={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const c=ns(s.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&u&&(e.save(),e.globalAlpha=r,this.drawBackground(l,e,o,s),tx(e,s.textDirection),l.y+=c.top,this.drawTitle(l,e,s),this.drawBody(l,e,s),this.drawFooter(l,e,s),sx(e,s.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,s){const r=this._active,o=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),l=!Yo(r,o),c=this._positionChanged(o,s);(l||c)&&(this._active=o,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,s,r=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,l=this._active||[],c=this._getActiveElements(e,l,s,r),u=this._positionChanged(c,e),h=s||!Yo(c,l)||u;return h&&(this._active=c,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,s))),h}_getActiveElements(e,s,r,o){const l=this.options;if(e.type==="mouseout")return[];if(!o)return s.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,l.mode,l,r);return l.reverse&&c.reverse(),c}_positionChanged(e,s){const{caretX:r,caretY:o,options:l}=this,c=Ur[l.position].call(this,e,s);return c!==!1&&(r!==c.x||o!==c.y)}}xe(Fd,"positioners",Ur);var Px={id:"tooltip",_element:Fd,positioners:Ur,afterInit(t,e,s){s&&(t.tooltip=new Fd({chart:t,options:s}))},beforeUpdate(t,e,s){t.tooltip&&t.tooltip.initialize(s)},reset(t,e,s){t.tooltip&&t.tooltip.initialize(s)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const s={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",s)}},afterEvent(t,e){if(t.tooltip){const s=e.replay;t.tooltip.handleEvent(e.event,s,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Rx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const i_=(t,e,s,r)=>(typeof e=="string"?(s=t.push(e)-1,r.unshift({index:s,label:e})):isNaN(e)&&(s=null),s);function r_(t,e,s,r){const o=t.indexOf(e);if(o===-1)return i_(t,e,s,r);const l=t.lastIndexOf(e);return o!==l?s:o}const a_=(t,e)=>t===null?null:Nt(Math.round(t),0,e);function Im(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class el extends Vi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const s=this._addedLabels;if(s.length){const r=this.getLabels();for(const{index:o,label:l}of s)r[o]===l&&r.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,s){if(Le(e))return null;const r=this.getLabels();return s=isFinite(s)&&r[s]===e?s:r_(r,e,_e(s,e),this._addedLabels),a_(s,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),s||(o=this.getLabels().length-1)),this.min=r,this.max=o}buildTicks(){const e=this.min,s=this.max,r=this.options.offset,o=[];let l=this.getLabels();l=e===0&&s===l.length-1?l:l.slice(e,s+1),this._valueRange=Math.max(l.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let c=e;c<=s;c++)o.push({value:c});return o}getLabelForValue(e){return Im.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}xe(el,"id","category"),xe(el,"defaults",{ticks:{callback:Im}});function o_(t,e){const s=[],{bounds:o,step:l,min:c,max:u,precision:h,count:p,maxTicks:m,maxDigits:x,includeBounds:N}=t,w=l||1,b=m-1,{min:j,max:y}=e,_=!Le(c),E=!Le(u),A=!Le(p),U=(y-j)/(x+1);let P=Mp((y-j)/b/w)*w,q,O,T,L;if(P<1e-14&&!_&&!E)return[{value:j},{value:y}];L=Math.ceil(y/P)-Math.floor(j/P),L>b&&(P=Mp(L*P/b/w)*w),Le(h)||(q=Math.pow(10,h),P=Math.ceil(P*q)/q),o==="ticks"?(O=Math.floor(j/P)*P,T=Math.ceil(y/P)*P):(O=j,T=y),_&&E&&l&&p1((u-c)/l,P/1e3)?(L=Math.round(Math.min((u-c)/P,m)),P=(u-c)/L,O=c,T=u):A?(O=_?c:O,T=E?u:T,L=p-1,P=(T-O)/L):(L=(T-O)/P,Hr(L,Math.round(L),P/1e3)?L=Math.round(L):L=Math.ceil(L));const B=Math.max(Op(P),Op(O));q=Math.pow(10,Le(h)?B:h),O=Math.round(O*q)/q,T=Math.round(T*q)/q;let M=0;for(_&&(N&&O!==c?(s.push({value:c}),O<c&&M++,Hr(Math.round((O+M*P)*q)/q,c,Fm(c,U,t))&&M++):O<c&&M++);M<L;++M){const C=Math.round((O+M*P)*q)/q;if(E&&C>u)break;s.push({value:C})}return E&&N&&T!==u?s.length&&Hr(s[s.length-1].value,u,Fm(u,U,t))?s[s.length-1].value=u:s.push({value:u}):(!E||T===u)&&s.push({value:T}),s}function Fm(t,e,{horizontal:s,minRotation:r}){const o=Vs(r),l=(s?Math.sin(o):Math.cos(o))||.001,c=.75*e*(""+t).length;return Math.min(e/l,c)}class l_ extends Vi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,s){return Le(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:s,maxDefined:r}=this.getUserBounds();let{min:o,max:l}=this;const c=h=>o=s?o:h,u=h=>l=r?l:h;if(e){const h=Rs(o),p=Rs(l);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(o===l){let h=l===0?1:Math.abs(l*.05);u(l+h),e||c(o-h)}this.min=o,this.max=l}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:s,stepSize:r}=e,o;return r?(o=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),s=s||11),s&&(o=Math.min(s,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,s=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const o={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},l=this._range||this,c=o_(o,l);return e.bounds==="ticks"&&m1(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let s=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const o=(r-s)/Math.max(e.length-1,1)/2;s-=o,r+=o}this._startValue=s,this._endValue=r,this._valueRange=r-s}getLabelForValue(e){return nu(e,this.chart.options.locale,this.options.ticks.format)}}class tl extends l_{determineDataLimits(){const{min:e,max:s}=this.getMinMax(!0);this.min=kt(e)?e:0,this.max=kt(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),s=e?this.width:this.height,r=Vs(this.options.ticks.minRotation),o=(e?Math.sin(r):Math.cos(r))||.001,l=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,l.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}xe(tl,"id","linear"),xe(tl,"defaults",{ticks:{callback:Yg.formatters.numeric}});const pl={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ot=Object.keys(pl);function Bm(t,e){return t-e}function $m(t,e){if(Le(e))return null;const s=t._adapter,{parser:r,round:o,isoWeekday:l}=t._parseOpts;let c=e;return typeof r=="function"&&(c=r(c)),kt(c)||(c=typeof r=="string"?s.parse(c,r):s.parse(c)),c===null?null:(o&&(c=o==="week"&&(Zr(l)||l===!0)?s.startOf(c,"isoWeek",l):s.startOf(c,o)),+c)}function Um(t,e,s,r){const o=Ot.length;for(let l=Ot.indexOf(t);l<o-1;++l){const c=pl[Ot[l]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((s-e)/(u*c.size))<=r)return Ot[l]}return Ot[o-1]}function c_(t,e,s,r,o){for(let l=Ot.length-1;l>=Ot.indexOf(s);l--){const c=Ot[l];if(pl[c].common&&t._adapter.diff(o,r,c)>=e-1)return c}return Ot[s?Ot.indexOf(s):0]}function d_(t){for(let e=Ot.indexOf(t)+1,s=Ot.length;e<s;++e)if(pl[Ot[e]].common)return Ot[e]}function Wm(t,e,s){if(!s)t[e]=!0;else if(s.length){const{lo:r,hi:o}=eu(s,e),l=s[r]>=e?s[r]:s[o];t[l]=!0}}function u_(t,e,s,r){const o=t._adapter,l=+o.startOf(e[0].value,r),c=e[e.length-1].value;let u,h;for(u=l;u<=c;u=+o.add(u,1,r))h=s[u],h>=0&&(e[h].major=!0);return e}function Hm(t,e,s){const r=[],o={},l=e.length;let c,u;for(c=0;c<l;++c)u=e[c],o[u]=c,r.push({value:u,major:!1});return l===0||!s?r:u_(t,r,o,s)}class sl extends Vi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,s={}){const r=e.time||(e.time={}),o=this._adapter=new GN._date(e.adapters.date);o.init(s),Wr(r.displayFormats,o.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=s.normalized}parse(e,s){return e===void 0?null:$m(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,s=this._adapter,r=e.time.unit||"day";let{min:o,max:l,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(o=Math.min(o,p.min)),!u&&!isNaN(p.max)&&(l=Math.max(l,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),o=kt(o)&&!isNaN(o)?o:+s.startOf(Date.now(),r),l=kt(l)&&!isNaN(l)?l:+s.endOf(Date.now(),r)+1,this.min=Math.min(o,l-1),this.max=Math.max(o+1,l)}_getLabelBounds(){const e=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(s=e[0],r=e[e.length-1]),{min:s,max:r}}buildTicks(){const e=this.options,s=e.time,r=e.ticks,o=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const l=this.min,c=this.max,u=b1(o,l,c);return this._unit=s.unit||(r.autoSkip?Um(s.minUnit,this.min,this.max,this._getLabelCapacity(l)):c_(this,u.length,s.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:d_(this._unit),this.initOffsets(o),e.reverse&&u.reverse(),Hm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let s=0,r=0,o,l;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?s=1-o:s=(this.getDecimalForValue(e[1])-o)/2,l=this.getDecimalForValue(e[e.length-1]),e.length===1?r=l:r=(l-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;s=Nt(s,0,c),r=Nt(r,0,c),this._offsets={start:s,end:r,factor:1/(s+1+r)}}_generate(){const e=this._adapter,s=this.min,r=this.max,o=this.options,l=o.time,c=l.unit||Um(l.minUnit,s,r,this._getLabelCapacity(s)),u=_e(o.ticks.stepSize,1),h=c==="week"?l.isoWeekday:!1,p=Zr(h)||h===!0,m={};let x=s,N,w;if(p&&(x=+e.startOf(x,"isoWeek",h)),x=+e.startOf(x,p?"day":c),e.diff(r,s,c)>1e5*u)throw new Error(s+" and "+r+" are too far apart with stepSize of "+u+" "+c);const b=o.ticks.source==="data"&&this.getDataTimestamps();for(N=x,w=0;N<r;N=+e.add(N,u,c),w++)Wm(m,N,b);return(N===r||o.bounds==="ticks"||w===1)&&Wm(m,N,b),Object.keys(m).sort(Bm).map(j=>+j)}getLabelForValue(e){const s=this._adapter,r=this.options.time;return r.tooltipFormat?s.format(e,r.tooltipFormat):s.format(e,r.displayFormats.datetime)}format(e,s){const o=this.options.time.displayFormats,l=this._unit,c=s||o[l];return this._adapter.format(e,c)}_tickFormatFunction(e,s,r,o){const l=this.options,c=l.ticks.callback;if(c)return We(c,[e,s,r],this);const u=l.time.displayFormats,h=this._unit,p=this._majorUnit,m=h&&u[h],x=p&&u[p],N=r[s],w=p&&x&&N&&N.major;return this._adapter.format(e,o||(w?x:m))}generateTickLabels(e){let s,r,o;for(s=0,r=e.length;s<r;++s)o=e[s],o.label=this._tickFormatFunction(o.value,s,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const s=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((s.start+r)*s.factor)}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const s=this.options.ticks,r=this.ctx.measureText(e).width,o=Vs(this.isHorizontal()?s.maxRotation:s.minRotation),l=Math.cos(o),c=Math.sin(o),u=this._resolveTickFontOptions(0).size;return{w:r*l+u*c,h:r*c+u*l}}_getLabelCapacity(e){const s=this.options.time,r=s.displayFormats,o=r[s.unit]||r.millisecond,l=this._tickFormatFunction(e,0,Hm(this,[e],this._majorUnit),o),c=this._getLabelSize(l),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],s,r;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(s=0,r=o.length;s<r;++s)e=e.concat(o[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let s,r;if(e.length)return e;const o=this.getLabels();for(s=0,r=o.length;s<r;++s)e.push($m(this,o[s]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Hg(e.sort(Bm))}}xe(sl,"id","time"),xe(sl,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Oo(t,e,s){let r=0,o=t.length-1,l,c,u,h;s?(e>=t[r].pos&&e<=t[o].pos&&({lo:r,hi:o}=Zn(t,"pos",e)),{pos:l,time:u}=t[r],{pos:c,time:h}=t[o]):(e>=t[r].time&&e<=t[o].time&&({lo:r,hi:o}=Zn(t,"time",e)),{time:l,pos:u}=t[r],{time:c,pos:h}=t[o]);const p=c-l;return p?u+(h-u)*(e-l)/p:u}class Vm extends sl{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(e);this._minPos=Oo(s,this.min),this._tableRange=Oo(s,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:s,max:r}=this,o=[],l=[];let c,u,h,p,m;for(c=0,u=e.length;c<u;++c)p=e[c],p>=s&&p<=r&&o.push(p);if(o.length<2)return[{time:s,pos:0},{time:r,pos:1}];for(c=0,u=o.length;c<u;++c)m=o[c+1],h=o[c-1],p=o[c],Math.round((m+h)/2)!==p&&l.push({time:p,pos:c/(u-1)});return l}_generate(){const e=this.min,s=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(s)||r.length===1)&&r.push(s),r.sort((o,l)=>o-l)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const s=this.getDataTimestamps(),r=this.getLabelTimestamps();return s.length&&r.length?e=this.normalize(s.concat(r)):e=s.length?s:r,e=this._cache.all=e,e}getDecimalForValue(e){return(Oo(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return Oo(this._table,r*this._tableRange+this._minPos,!0)}}xe(Vm,"id","timeseries"),xe(Vm,"defaults",sl.defaults);const Dx="label";function qm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function h_(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function Ax(t,e){t.labels=e}function Tx(t,e,s=Dx){const r=[];t.datasets=e.map(o=>{const l=t.datasets.find(c=>c[s]===o[s]);return!l||!o.data||r.includes(l)?{...o}:(r.push(l),Object.assign(l,o),l)})}function f_(t,e=Dx){const s={labels:[],datasets:[]};return Ax(s,t.labels),Tx(s,t.datasets,e),s}function p_(t,e){const{height:s=150,width:r=300,redraw:o=!1,datasetIdKey:l,type:c,data:u,options:h,plugins:p=[],fallbackContent:m,updateMode:x,...N}=t,w=S.useRef(null),b=S.useRef(null),j=()=>{w.current&&(b.current=new ha(w.current,{type:c,data:f_(u,l),options:h&&{...h},plugins:p}),qm(e,b.current))},y=()=>{qm(e,null),b.current&&(b.current.destroy(),b.current=null)};return S.useEffect(()=>{!o&&b.current&&h&&h_(b.current,h)},[o,h]),S.useEffect(()=>{!o&&b.current&&Ax(b.current.config.data,u.labels)},[o,u.labels]),S.useEffect(()=>{!o&&b.current&&u.datasets&&Tx(b.current.config.data,u.datasets,l)},[o,u.datasets]),S.useEffect(()=>{b.current&&(o?(y(),setTimeout(j)):b.current.update(x))},[o,h,u.labels,u.datasets,x]),S.useEffect(()=>{b.current&&(y(),setTimeout(j))},[c]),S.useEffect(()=>(j(),()=>y()),[]),n.jsx("canvas",{ref:w,role:"img",height:s,width:r,...N,children:m})}const m_=S.forwardRef(p_);function uu(t,e){return ha.register(e),S.forwardRef((s,r)=>n.jsx(m_,{...s,ref:r,type:t}))}const Bd=uu("line",$o),g_=uu("bar",Bo),x_=uu("doughnut",Fr);ha.register(el,tl,Yr,Ys,Ho,$r,Ex,Px,Sx,kx);function v_(){var _,E,A,U,P,q,O,T,L;const{t}=at(),e=Qs(),[s,r]=S.useState(null),[o,l]=S.useState(null),[c,u]=S.useState(null),[h,p]=S.useState(!0);if(S.useEffect(()=>{Promise.all([ps.stats(),Pd.get(24),Mg.getCollectionStats()]).then(([B,M,C])=>{var J,X;r(B.data);const I=24,W=[],ie=[],R=[];for(let re=I-1;re>=0;re--){const Z=new Date;Z.setHours(Z.getHours()-re),W.push(Z.getHours()+":00");const z=new Date(Z);z.setMinutes(0,0,0);const G=new Date(Z);G.setMinutes(59,59,999);const ce=((J=M.data.entries)==null?void 0:J.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="event"&&be>=z&&be<=G}).length)||0,fe=((X=M.data.entries)==null?void 0:X.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="alert"&&be>=z&&be<=G}).length)||0;ie.push(ce),R.push(fe)}l({labels:W,events:ie,alerts:R}),u(C.data),p(!1)}).catch(()=>{r({total:0,by_severity:{},by_status:{}}),l({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return n.jsx("div",{className:"dashboard",children:n.jsxs("div",{className:"dashboard-loading",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})});const m=s!=null&&s.by_type?Object.entries(s.by_type).sort((B,M)=>M[1]-B[1]).slice(0,5):[],x={labels:(o==null?void 0:o.labels)||[],datasets:[{label:t("dashboard.events"),data:(o==null?void 0:o.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(o==null?void 0:o.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},N={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:m.map(([B])=>B),datasets:[{data:m.map(([,B])=>B),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},j={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((_=s==null?void 0:s.by_severity)==null?void 0:_.critical)||0,((E=s==null?void 0:s.by_severity)==null?void 0:E.high)||0,((A=s==null?void 0:s.by_severity)==null?void 0:A.medium)||0,((U=s==null?void 0:s.by_severity)==null?void 0:U.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return n.jsxs("div",{className:"dashboard",children:[n.jsxs("div",{className:"dashboard-header",children:[n.jsx("h2",{children:t("dashboard.title")}),n.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),n.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((P=s==null?void 0:s.by_severity)==null?void 0:P.critical)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((q=s==null?void 0:s.by_severity)==null?void 0:q.high)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[n.jsx("div",{className:"stat-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((O=s==null?void 0:s.by_severity)==null?void 0:O.medium)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((T=s==null?void 0:s.by_severity)==null?void 0:T.low)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),n.jsx("div",{className:"stat-glow"})]})]}),n.jsxs("div",{className:"dashboard-grid",children:[n.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.eventTrend")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),n.jsx("div",{className:"chart-body",children:n.jsx(Bd,{data:x,options:N})})]}),n.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.topAlertTypes")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),n.jsx("div",{className:"chart-body",children:m.length>0?n.jsx(x_,{data:w,options:b}):n.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),n.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.bySeverity")})}),n.jsx("div",{className:"chart-body",children:n.jsx(g_,{data:j,options:y})})]}),n.jsxs("div",{className:"chart-card chart-collection",children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.collectionStatus")})}),n.jsxs("div",{className:"chart-body collection-stats",children:[n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),n.jsx("span",{className:"collection-value",children:((L=c==null?void 0:c.total_events)==null?void 0:L.toLocaleString())||0})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),n.jsxs("div",{className:"collection-sources",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),n.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(B=>n.jsx("span",{className:"source-tag",children:B},B))})]})]})]})]}),n.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("dashboard.recentAlerts")}),n.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),n.jsx("div",{className:"recent-alerts-list",children:s&&s.total>0?n.jsxs("div",{className:"alert-preview",children:[n.jsx("div",{className:"alert-count-badge",children:s.total}),n.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):n.jsxs("div",{className:"no-alerts",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),n.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function y_(){var En;const t=ra(),[e,s]=S.useState([]),[r,o]=S.useState(!0),[l,c]=S.useState(1),[u,h]=S.useState(50),[p,m]=S.useState(""),[x,N]=S.useState(1),[w,b]=S.useState(0),[j,y]=S.useState(!1),[_,E]=S.useState(!1),[A,U]=S.useState(0),[P,q]=S.useState(!1),[O,T]=S.useState([]),[L,B]=S.useState(!1),[M,C]=S.useState("timestamp"),[I,W]=S.useState("desc"),[ie,R]=S.useState(""),[J,X]=S.useState(""),[re,Z]=S.useState(""),[z,G]=S.useState(""),[ce,fe]=S.useState(null),[ye,be]=S.useState({x:0,y:0}),[Re,Ce]=S.useState("AND"),[Me,He]=S.useState([]),[Vt,xs]=S.useState(!1),[pe,qt]=S.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4});S.useEffect(()=>{const se=new URLSearchParams(t.search),le=se.get("event_ids"),Pe=se.get("keywords");(le||Pe)&&(E(!0),qt(st=>({...st,event_ids:le?le.split(",").map(as=>parseInt(as.trim(),10)).filter(as=>!isNaN(as)):[],keywords:Pe||""})),le&&G(le))},[t.search]);const li=(se=1)=>{o(!0);const le={Critical:1,Error:2,Warning:3,Info:4,Debug:5},Pe=z.split(",").map(Oe=>parseInt(Oe.trim(),10)).filter(Oe=>!isNaN(Oe)),st=ie.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),as=J.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),vs=re.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),Ps={keywords:(pe==null?void 0:pe.keywords)||"",keyword_mode:Re,regex:L,page:se,page_size:u,sort_by:M,sort_order:I,start_time:(pe==null?void 0:pe.start_time)||void 0,end_time:(pe==null?void 0:pe.end_time)||void 0,levels:O.map(Oe=>le[Oe]).filter(Oe=>Oe),event_ids:Pe.length>0?Pe:void 0,log_names:pe!=null&&pe.log_names&&pe.log_names.length>0?pe.log_names:void 0,sources:st.length>0?st:void 0,users:as.length>0?as:void 0,computers:vs.length>0?vs:void 0};Qn.search(Ps).then(Oe=>{const Et=Oe.data;s(Et.events||[]),b(Et.total||0);const Rn=Math.ceil((Et.total||0)/u);N(Rn||1),U(Et.query_time_ms||0),E(!0),o(!1)}).catch(()=>{Qn.list(se,u).then(Oe=>{const Et=Oe.data;s(Et.events||[]),b(Et.total||0),N(Et.total_pages||1),E(!1),o(!1)}).catch(()=>o(!1))})},Ks=()=>{c(1),li(1)},_n=()=>{qt({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),T([]),B(!1),C("timestamp"),W("desc"),R(""),X(""),Z(""),G(""),E(!1),Ce("AND"),c(1)};S.useEffect(()=>{o(!0);const se=pe&&(pe.log_names&&pe.log_names.length>0||pe.levels&&pe.levels.length>0||pe.event_ids&&pe.event_ids.length>0||pe.start_time||pe.end_time);pe!=null&&pe.keywords&&pe.keywords.trim()!==""?Qn.search({keywords:pe.keywords,keyword_mode:Re,regex:L,page:l,page_size:u,sort_by:M,sort_order:I,levels:O.map(le=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[le]||0).filter(le=>le>0),start_time:pe.start_time,end_time:pe.end_time}).then(le=>{const Pe=le.data;s(Pe.events||[]),b(Pe.total||0);const st=Math.ceil((Pe.total||0)/u);N(st||1),o(!1)}).catch(()=>o(!1)):se?Qn.list(l,u,{log_names:pe.log_names,levels:pe.levels,event_ids:pe.event_ids,start_time:pe.start_time,end_time:pe.end_time,sort_by:M,sort_order:I}).then(le=>{const Pe=le.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),o(!1)}).catch(()=>o(!1)):Qn.list(l,u,{sort_by:M,sort_order:I}).then(le=>{const Pe=le.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),o(!1)}).catch(()=>o(!1))},[l,pe,M,I,u,O,Re,L]);const ci=se=>{h(se),c(1)},Sn=se=>{se.preventDefault();const le=parseInt(p,10);!isNaN(le)&&le>=1&&le<=x&&(c(le),m(""))};S.useEffect(()=>{Mg.getLogNames().then(se=>{const le=se.data;He(le.log_names||[])}).catch(()=>{})},[]);const is=async se=>{y(!0);try{const le=await Qn.export({format:se,filters:pe});if(se==="json"){const Pe=new Blob([JSON.stringify(le.data,null,2)],{type:"application/json"});rs(Pe,`events_export.${se}`)}else{const Pe=new Blob([le.data],{type:se==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});rs(Pe,`events_export.${se==="excel"?"xlsx":se}`)}}catch(le){console.error("Export failed:",le)}finally{y(!1)}},rs=(se,le)=>{const Pe=URL.createObjectURL(se),st=document.createElement("a");st.href=Pe,st.download=le,document.body.appendChild(st),st.click(),document.body.removeChild(st),URL.revokeObjectURL(Pe)},Cn=se=>{const le=String(se).toLowerCase();return le==="1"||le==="critical"||le==="crit"?"level-critical":le==="2"||le==="error"?"level-error":le==="3"||le==="warning"||le==="warn"?"level-warning":le==="4"||le==="info"?"level-info":le==="5"||le==="debug"?"level-debug":""},di=se=>{const le=String(se);return le==="1"||le==="critical"?"Critical":le==="2"||le==="error"?"Error":le==="3"||le==="warning"||le==="warn"?"Warning":le==="4"||le==="info"?"Info":le==="5"||le==="debug"?"Debug":le};return n.jsxs("div",{className:"events-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Events"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>q(!P),children:P?"Hide Filters":"Show Filters"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>is("csv"),children:"CSV"}),n.jsx("button",{onClick:()=>is("json"),children:"JSON"}),n.jsx("button",{onClick:()=>is("excel"),children:"Excel"})]})]})]})]}),n.jsxs("div",{className:"search-bar",children:[n.jsxs("div",{className:"search-input-wrapper",children:[n.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(pe==null?void 0:pe.keywords)||"",onChange:se=>qt({...pe,keywords:se.target.value}),onKeyDown:se=>se.key==="Enter"&&Ks()}),n.jsx("button",{className:"search-btn",onClick:Ks,children:"Search"})]}),n.jsxs("div",{className:"keyword-mode-toggle",children:[n.jsx("span",{className:"mode-label",children:"Keywords:"}),n.jsx("button",{className:`mode-btn ${Re==="AND"?"active":""}`,onClick:()=>Ce("AND"),title:"All keywords must match",children:"AND"}),n.jsx("button",{className:`mode-btn ${Re==="OR"?"active":""}`,onClick:()=>Ce("OR"),title:"Any keyword can match",children:"OR"})]})]}),P&&n.jsxs("div",{className:"filters-panel",children:[n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Start Time"}),n.jsx("input",{type:"datetime-local",value:(pe==null?void 0:pe.start_time)||"",onChange:se=>qt({...pe,start_time:se.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"End Time"}),n.jsx("input",{type:"datetime-local",value:(pe==null?void 0:pe.end_time)||"",onChange:se=>qt({...pe,end_time:se.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Event IDs"}),n.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:z,onChange:se=>G(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Log Names"}),n.jsxs("select",{value:((En=pe==null?void 0:pe.log_names)==null?void 0:En[0])||"",onChange:se=>{const le=se.target.value;qt({...pe,log_names:le?[le]:[]})},className:"select-input",children:[n.jsx("option",{value:"",children:"All Log Names"}),Me.map(se=>n.jsx("option",{value:se,children:se},se))]})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sources"}),n.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:ie,onChange:se=>R(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Users"}),n.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:J,onChange:se=>X(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Computers"}),n.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:re,onChange:se=>Z(se.target.value),className:"text-input"})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Level"}),n.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(se=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:O.includes(se),onChange:le=>{le.target.checked?T([...O,se]):T(O.filter(Pe=>Pe!==se))}}),se]},se))})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort By"}),n.jsxs("select",{value:M,onChange:se=>C(se.target.value),className:"select-input",children:[n.jsx("option",{value:"timestamp",children:"Timestamp"}),n.jsx("option",{value:"event_id",children:"Event ID"}),n.jsx("option",{value:"level",children:"Level"}),n.jsx("option",{value:"source",children:"Source"}),n.jsx("option",{value:"log_name",children:"Log Name"})]})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort Order"}),n.jsxs("select",{value:I,onChange:se=>W(se.target.value),className:"select-input",children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]}),n.jsx("div",{className:"filter-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:L,onChange:se=>B(se.target.checked)}),"Use Regex"]})})]}),n.jsxs("div",{className:"filter-actions",children:[n.jsx("button",{onClick:Ks,className:"btn-primary",children:"Apply Filters"}),_&&n.jsx("button",{onClick:_n,className:"btn-secondary",children:"Clear All"})]})]}),_&&n.jsxs("div",{className:"search-info",children:[n.jsxs("span",{className:"search-count",children:["Found ",n.jsx("strong",{children:w.toLocaleString()})," events"]}),A>0&&n.jsxs("span",{className:"query-time",children:["Query time: ",A,"ms"]})]}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:w.toLocaleString()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Current Page"}),n.jsxs("span",{className:"stat-value",children:[l," / ",x]})]})]}),r?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading events..."})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{children:"No events found"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"table-container",children:n.jsxs("table",{className:"events-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Time"}),n.jsx("th",{children:"Level"}),n.jsx("th",{children:"Event ID"}),n.jsx("th",{children:"Source"}),n.jsx("th",{children:"Computer"}),n.jsx("th",{children:"Message"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:e.map(se=>n.jsxs("tr",{children:[n.jsx("td",{className:"id-cell",children:se.id}),n.jsx("td",{className:"time-cell",children:new Date(se.timestamp).toLocaleString()}),n.jsx("td",{children:n.jsx("span",{className:`level-badge ${Cn(se.level)}`,children:di(se.level)})}),n.jsx("td",{className:"event-id",children:se.event_id}),n.jsxs("td",{className:"source-cell",title:se.source||"",children:[n.jsx("span",{className:"cell-content",children:se.source||"-"}),n.jsx("button",{className:"cell-btn",onClick:le=>{le.stopPropagation(),fe(se),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]}),n.jsx("td",{className:"computer-cell",children:se.computer||"-"}),n.jsxs("td",{className:"message-cell",title:se.message||"",children:[n.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:se.message?se.message.length>50?se.message.substring(0,50)+"...":se.message:"-"}),n.jsx("button",{className:"cell-btn",onClick:le=>{le.stopPropagation(),fe(se),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]}),n.jsxs("td",{className:"action-cell",children:[n.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(se,null,2))},title:"Copy all event data",children:"Copy"}),n.jsx("button",{className:"action-detail-btn",onClick:le=>{fe(se),be({x:le.clientX-200,y:le.clientY+20})},title:"View details",children:"..."})]})]},se.id))})]})}),n.jsxs("div",{className:"pagination",children:[n.jsxs("div",{className:"page-size-selector",children:[n.jsx("span",{children:"Show:"}),n.jsxs("select",{value:u,onChange:se=>ci(Number(se.target.value)),className:"select-input",children:[n.jsx("option",{value:10,children:"10"}),n.jsx("option",{value:25,children:"25"}),n.jsx("option",{value:50,children:"50"}),n.jsx("option",{value:100,children:"100"}),n.jsx("option",{value:200,children:"200"})]}),n.jsx("span",{children:"per page"})]}),n.jsxs("div",{className:"page-nav",children:[n.jsx("button",{className:"page-btn",disabled:l<=1,onClick:()=>{c(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),n.jsx("button",{className:"page-btn",disabled:l<=1,onClick:()=>{c(se=>se-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),n.jsxs("form",{onSubmit:Sn,className:"page-input-form",children:[n.jsx("input",{type:"number",min:1,max:x,value:p,onChange:se=>m(se.target.value),placeholder:`1-${x}`,className:"page-input"}),n.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),n.jsxs("span",{className:"page-info",children:["Page ",n.jsx("strong",{children:l})," of ",n.jsx("strong",{children:x}),"(",w," total)"]}),n.jsx("button",{className:"page-btn",disabled:l>=x,onClick:()=>{c(se=>se+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),n.jsx("button",{className:"page-btn",disabled:l>=x,onClick:()=>{c(x),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),ce&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"message-float-panel",style:{left:ye.x,top:ye.y,position:"fixed"},children:[n.jsxs("div",{className:"float-panel-header",children:[n.jsx("span",{children:"Event Details"}),n.jsxs("div",{className:"float-panel-actions",children:[n.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ce,null,2))},children:"Copy"}),ce.raw_xml&&n.jsx("button",{className:"float-panel-formatted",onClick:()=>{const se=(()=>{try{return JSON.stringify(JSON.parse(ce.raw_xml),null,2)}catch{return ce.raw_xml||""}})();navigator.clipboard.writeText(se)},children:"Copy JSON"}),ce.raw_xml&&n.jsx("button",{className:"float-panel-view",onClick:()=>xs(!0),children:"View JSON"}),n.jsx("button",{className:"float-panel-close",onClick:()=>{fe(null),xs(!1)},children:"×"})]})]}),n.jsxs("div",{className:"float-panel-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"ID:"})," ",ce.id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Time:"})," ",new Date(ce.timestamp).toLocaleString()]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Level:"})," ",ce.level]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Event ID:"})," ",ce.event_id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Source:"})," ",ce.source||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Computer:"})," ",ce.computer||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Log Name:"})," ",ce.log_name]}),n.jsx("div",{style:{marginTop:"8px"},children:n.jsx("strong",{children:"Message:"})}),n.jsx("div",{children:ce.message||"-"})]})]}),Vt&&ce.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>xs(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:se=>se.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",ce.id]}),n.jsx("button",{className:"modal-close",onClick:()=>xs(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(ce.raw_xml),null,2)}catch{return ce.raw_xml}})()})})]})})]})]}),n.jsx("style",{children:`
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
      `})]})}function Lx({keyName:t,value:e,depth:s,isLast:r,collapsedPaths:o,onToggleCollapse:l}){const c="  ".repeat(s),u=t.startsWith("[")?t:`"${t}"`;if(e&&typeof e=="object"){const m=Array.isArray(e),x=m?e.map((j,y)=>({key:`[${y}]`,value:j})):Object.entries(e).map(([j,y])=>({key:j,value:y})),N=x.length===0,w=`${u}`,b=o.has(w);return N?n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[]":"{}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"json-line json-collapsible",onClick:()=>l(w),children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[":"{"}),n.jsx("span",{className:"json-collapse-hint",children:b?` ... ${x.length} items }`:""}),!r&&n.jsx("span",{className:"json-punct",children:","}),n.jsx("span",{className:"json-toggle",children:b?"▶":"▼"})]}),!b&&x.map((j,y)=>n.jsx(Lx,{keyName:j.key,value:j.value,depth:s+1,isLast:y===x.length-1,collapsedPaths:o,onToggleCollapse:l},j.key)),!b&&n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-punct",children:m?"]":"}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof e=="string"?`"${e}"`:String(e);return typeof e=="number"?h="json-number":typeof e=="boolean"?h="json-boolean":e===null&&(h="json-null"),n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:": "}),n.jsx("span",{className:h,children:p}),!r&&n.jsx("span",{className:"json-punct",children:","})]})}function b_(t){return["Unknown","Critical","Error","Warning","Info"][t]||"Unknown"}function j_(){const{id:t}=ag(),[e,s]=S.useState(null),[r,o]=S.useState(!0),[l,c]=S.useState(new Set),[u,h]=S.useState(!1);S.useEffect(()=>{t&&(o(!0),Qn.get(Number(t)).then(b=>{s(b.data),o(!1)}).catch(()=>o(!1)))},[t]);const p=S.useCallback(b=>{c(j=>{const y=new Set(j);return y.has(b)?y.delete(b):y.add(b),y})},[]),m=()=>{c(new Set)},x=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=(_,E)=>{if(!_||typeof _!="object")return[];const A=[];return Array.isArray(_)?(_.length>3&&A.push(E),_.forEach((U,P)=>{A.push(...j(_[P],`${E}[${P}]`))})):Object.values(_).forEach((U,P)=>{const q=Object.keys(_)[P];A.push(...j(U,`${E}"${q}"`))}),A},y=j(b,"");c(new Set(y.filter(_=>_.includes("[")||!_.startsWith('"'))))}catch{}},N=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.stringify(JSON.parse(e.raw_xml),null,2);navigator.clipboard.writeText(b)}catch{navigator.clipboard.writeText(e.raw_xml)}};if(r)return n.jsx("div",{children:"Loading..."});if(!e)return n.jsx("div",{children:"Event not found"});let w=null;if(e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=Object.entries(b);w=j.map(([y,_],E)=>n.jsx(Lx,{keyName:y,value:_,depth:0,isLast:E===j.length-1,collapsedPaths:l,onToggleCollapse:p},y))}catch{w=n.jsx("pre",{className:"xml-box",children:e.raw_xml})}return n.jsxs("div",{className:"event-detail",children:[n.jsx(Ge,{to:"/events",children:"← Back to Events"}),n.jsxs("div",{className:"detail-panel",children:[n.jsxs("h3",{children:["Event #",e.id]}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-fields",children:[n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Timestamp:"}),n.jsx("span",{className:"field-value",children:new Date(e.timestamp).toLocaleString()})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Level:"}),n.jsx("span",{className:"field-value",children:b_(e.level)})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Event ID:"}),n.jsx("span",{className:"field-value",children:e.event_id})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Source:"}),n.jsx("span",{className:"field-value",children:e.source})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Log Name:"}),n.jsx("span",{className:"field-value",children:e.log_name})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Computer:"}),n.jsx("span",{className:"field-value",children:e.computer})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User:"}),n.jsx("span",{className:"field-value",children:e.user||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User SID:"}),n.jsx("span",{className:"field-value",children:e.user_sid||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Session ID:"}),n.jsx("span",{className:"field-value",children:e.session_id||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"IP Address:"}),n.jsx("span",{className:"field-value",children:e.ip_address||"N/A"})]})]}),n.jsxs("div",{className:"detail-actions",children:[e.raw_xml&&n.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),e.raw_xml&&n.jsx("button",{className:"btn-action btn-copy",onClick:N,children:"Copy JSON"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"Message:"}),n.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"raw-json-header",children:[n.jsx("label",{children:"Raw JSON:"}),n.jsxs("div",{className:"raw-json-actions",children:[n.jsx("button",{className:"btn-small",onClick:m,children:"Expand All"}),n.jsx("button",{className:"btn-small",onClick:x,children:"Collapse All"})]})]}),n.jsx("div",{className:"json-tree",children:w})]})]}),u&&e.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:b=>b.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",e.id]}),n.jsxs("div",{className:"modal-header-actions",children:[n.jsx("button",{className:"btn-small",onClick:N,children:"Copy"}),n.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(e.raw_xml),null,2)})})]})}),n.jsx("style",{children:`
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
      `})]})}function N_(){const{t}=at(),e=Qs(),[s,r]=S.useState([]),[o,l]=S.useState(!0),[c,u]=S.useState(1),[h,p]=S.useState(""),[m,x]=S.useState([]),[N,w]=S.useState(!1),[b,j]=S.useState(!1),[y,_]=S.useState(null);S.useEffect(()=>{l(!0),ps.list(c,50,h||void 0).then(C=>{const I=C.data;r(I.alerts||[]),l(!1)}).catch(()=>l(!1))},[c,h]);const E=C=>{ps.resolve(C,"Resolved via Web UI").then(()=>{r(s.map(I=>I.id===C?{...I,resolved:!0}:I))})},A=C=>{const I=prompt("Enter reason for marking as false positive:");I&&ps.markFalsePositive(C,I).then(()=>{r(s.filter(W=>W.id!==C)),x(W=>W.filter(ie=>ie!==C))}).catch(W=>{console.error("Failed to mark as false positive:",W)})},U=C=>{confirm(t("alerts.confirmDelete"))&&ps.delete(C).then(()=>{r(s.filter(I=>I.id!==C)),x(I=>I.filter(W=>W!==C))}).catch(I=>{console.error("Failed to delete alert:",I)})},P=C=>{m.length!==0&&ps.batchAction(m,C).then(()=>{C==="resolve"?r(s.map(I=>m.includes(I.id)?{...I,resolved:!0}:I)):C==="delete"&&r(s.filter(I=>!m.includes(I.id))),x([])}).catch(I=>{console.error("Batch action failed:",I)})},q=C=>{x(I=>I.includes(C)?I.filter(W=>W!==C):[...I,C])},O=()=>{m.length===s.length?x([]):x(s.map(C=>C.id))},T=()=>{m.forEach(C=>{ps.resolve(C,"Batch resolved via Web UI")}),r(s.map(C=>m.includes(C.id)?{...C,resolved:!0}:C)),x([])},L=()=>{j(!0),_(null),ps.runAnalysis().then(C=>{const I=C.data;_(I),j(!1)}).catch(C=>{var I,W;console.error("Analysis failed:",C),j(!1),_({success:!1,alerts_created:0,events_analyzed:0,rules_executed:0,duration:"0s",errors:[((W=(I=C.response)==null?void 0:I.data)==null?void 0:W.error)||"Analysis failed"]})})},B=C=>{switch(C){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},M={total:s.length,critical:s.filter(C=>C.severity==="critical").length,high:s.filter(C=>C.severity==="high").length,medium:s.filter(C=>C.severity==="medium").length,low:s.filter(C=>C.severity==="low").length};return n.jsxs("div",{className:"alerts-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("alerts.title")}),n.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-analyze",onClick:()=>w(!0),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"}),n.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),n.jsxs("div",{className:"alerts-stats-grid",children:[n.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:M.total}),n.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),n.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:M.critical}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),n.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:M.high}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),n.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[n.jsx("span",{className:"stat-icon",children:"🟡"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:M.medium}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),n.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[n.jsx("span",{className:"stat-icon",children:"🟢"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:M.low}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),n.jsxs("div",{className:"alerts-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("select",{className:"severity-select",value:h,onChange:C=>p(C.target.value),children:[n.jsx("option",{value:"",children:t("alerts.allSeverities")}),n.jsx("option",{value:"critical",children:t("dashboard.critical")}),n.jsx("option",{value:"high",children:t("dashboard.high")}),n.jsx("option",{value:"medium",children:t("dashboard.medium")}),n.jsx("option",{value:"low",children:t("dashboard.low")})]})}),n.jsx("div",{className:"toolbar-right",children:m.length>0&&n.jsxs("div",{className:"batch-actions",children:[n.jsxs("span",{className:"selected-count",children:[m.length," selected"]}),n.jsx("button",{className:"btn-batch-resolve",onClick:T,children:t("alerts.resolveSelected")}),n.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>P("false-positive"),children:t("alerts.markFalsePositive")}),n.jsx("button",{className:"btn-batch-delete",onClick:()=>P("delete"),children:t("common.delete")})]})})]}),o?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]}):n.jsxs("div",{className:"alerts-table-container",children:[n.jsxs("table",{className:"alerts-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.length===s.length&&s.length>0,onChange:O})}),n.jsx("th",{children:"ID"}),n.jsx("th",{children:t("alerts.severity")}),n.jsx("th",{children:t("alerts.rule")}),n.jsx("th",{children:t("alerts.message")}),n.jsx("th",{children:t("alerts.count")}),n.jsx("th",{children:t("alerts.status")}),n.jsx("th",{children:t("alerts.actions")})]})}),n.jsx("tbody",{children:s.map(C=>{var I;return n.jsxs("tr",{className:m.includes(C.id)?"selected":"",children:[n.jsx("td",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.includes(C.id),onChange:()=>q(C.id)})}),n.jsx("td",{className:"id-col",children:C.id}),n.jsx("td",{children:n.jsx("span",{className:`badge ${B(C.severity)}`,children:C.severity})}),n.jsx("td",{className:"rule-col",children:C.rule_name}),n.jsxs("td",{className:"message-col",children:[(I=C.message)==null?void 0:I.substring(0,100),"..."]}),n.jsx("td",{className:"count-col",children:C.count}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${C.resolved?"resolved":"active"}`,children:C.resolved?t("alerts.resolved"):t("alerts.active")})}),n.jsxs("td",{className:"actions-col",children:[n.jsx("button",{className:"btn-action btn-detail",onClick:()=>e(`/alerts/${C.id}`),children:t("alerts.detail")}),!C.resolved&&n.jsx("button",{className:"btn-action btn-resolve",onClick:()=>E(C.id),children:t("alerts.resolve")}),n.jsx("button",{className:"btn-action btn-falsepositive",onClick:()=>A(C.id),children:t("alerts.falsePositive")}),n.jsx("button",{className:"btn-action btn-delete",onClick:()=>U(C.id),children:t("common.delete")})]})]},C.id)})})]}),s.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"🛡️"}),n.jsx("p",{children:t("alerts.noAlerts")})]})]}),N&&n.jsx("div",{className:"modal-overlay",onClick:()=>{w(!1),_(null)},children:n.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("alerts.runAnalysis")}),n.jsx("button",{className:"close-btn",onClick:()=>{w(!1),_(null)},children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[!b&&!y&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),n.jsxs("div",{className:"analysis-summary",children:[n.jsx("h4",{children:t("alerts.analysisSummary")}),n.jsxs("ul",{children:[n.jsxs("li",{children:[t("alerts.analysisTarget"),": ",t("alerts.allEvents")]}),n.jsxs("li",{children:[t("alerts.analysisScope"),": ",t("alerts.allEnabledRules")]})]})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-cancel",onClick:()=>{w(!1),_(null)},children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:L,children:n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]}),b&&n.jsxs("div",{className:"analyzing-state",children:[n.jsx("div",{className:"analyzing-spinner"}),n.jsx("p",{children:t("alerts.analyzing")}),n.jsx("p",{className:"analyzing-hint",children:t("alerts.analyzingHint")})]}),y&&n.jsxs("div",{className:"analysis-result",children:[n.jsxs("div",{className:`result-header ${y.success?"success":"error"}`,children:[y.success?"✓":"✗"," ",y.success?"Analysis Complete":"Analysis Failed"]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.alertsCreated")}),n.jsx("span",{className:"stat-value",children:y.alerts_created})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.eventsAnalyzed")}),n.jsx("span",{className:"stat-value",children:y.events_analyzed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.rulesExecuted")}),n.jsx("span",{className:"stat-value",children:y.rules_executed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.duration")}),n.jsx("span",{className:"stat-value",children:y.duration})]})]}),y.errors&&y.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("h4",{children:"Errors:"}),n.jsx("ul",{children:y.errors.map((C,I)=>n.jsx("li",{children:C},I))})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-primary",onClick:()=>{w(!1),_(null),e("/alerts")},children:t("common.done")})})]})]})]})})]})}function w_(){const{id:t}=ag(),e=Qs(),[s,r]=S.useState(null),[o,l]=S.useState(!0),[c,u]=S.useState(""),[h,p]=S.useState(!1);S.useEffect(()=>{t&&(l(!0),ps.get(Number(t)).then(b=>{r(b.data),l(!1)}).catch(()=>l(!1)))},[t]);const m=async()=>{if(s){p(!0);try{await ps.resolve(s.id,c),r({...s,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(b){console.error("Failed to resolve:",b)}finally{p(!1)}}},x=async()=>{if(s){p(!0);try{await ps.markFalsePositive(s.id,c),r({...s,false_positive:!0,notes:c})}catch(b){console.error("Failed to mark false positive:",b)}finally{p(!1)}}},N=()=>{if(!s)return;const b=new URLSearchParams;s.event_ids&&s.event_ids.length>0&&b.set("event_ids",s.event_ids.join(",")),s.keywords&&b.set("keywords",s.keywords),e(`/events?${b.toString()}`)};if(o)return n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading..."})]});if(!s)return n.jsx("div",{className:"alert-not-found",children:"Alert not found"});const w=b=>{switch(b){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return n.jsxs("div",{className:"alert-detail",children:[n.jsx(Ge,{to:"/alerts",className:"back-link",children:"← 返回告警列表"}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-main",children:[n.jsxs("div",{className:"detail-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h3",{children:["告警 #",s.id]}),n.jsxs("div",{className:"status-badges",children:[n.jsx("span",{className:`badge ${w(s.severity)}`,children:s.severity.toUpperCase()}),s.resolved&&n.jsx("span",{className:"badge resolved",children:"已解决"}),s.false_positive&&n.jsx("span",{className:"badge false-positive",children:"误报"})]})]}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"规则名称:"}),n.jsx("span",{className:"rule-name",children:s.rule_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"威胁评分:"}),n.jsx("span",{className:"score-value",children:s.rule_score.toFixed(2)})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"日志名称:"}),n.jsx("span",{children:s.log_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"触发次数:"}),n.jsx("span",{children:s.count})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"首次出现:"}),n.jsx("span",{children:new Date(s.first_seen).toLocaleString()})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"最后出现:"}),n.jsx("span",{children:new Date(s.last_seen).toLocaleString()})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"触发事件ID:"}),n.jsx("div",{className:"event-ids",children:s.event_ids&&s.event_ids.length>0?s.event_ids.map((b,j)=>n.jsx("span",{className:"event-id-badge",children:b},j)):n.jsx("span",{className:"no-data",children:"无"})})]}),s.keywords&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"匹配关键字:"}),n.jsx("div",{className:"keywords",children:s.keywords.split(" ").filter(b=>b).map((b,j)=>n.jsx("span",{className:"keyword-badge",children:b},j))})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"告警消息:"}),n.jsx("pre",{className:"message-box",children:s.message})]}),s.mitre_attack&&s.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"MITRE ATT&CK:"}),n.jsx("div",{className:"mitre-tags",children:s.mitre_attack.map((b,j)=>n.jsx("span",{className:"mitre-tag",children:b},j))})]})]}),s.explanation&&n.jsxs("div",{className:"detail-panel explanation-panel",children:[n.jsx("h4",{children:"规则解读"}),n.jsx("p",{className:"explanation-text",children:s.explanation})]}),s.recommendation&&n.jsxs("div",{className:"detail-panel recommendation-panel",children:[n.jsx("h4",{children:"处置建议"}),n.jsx("div",{className:"recommendation-text",children:s.recommendation.split(`
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
      `})]})}function k_(){const{t}=at(),e=Qs(),[s,r]=S.useState([]),[o,l]=S.useState(!0),[c,u]=S.useState("all"),[h,p]=S.useState(""),[m,x]=S.useState(""),[N,w]=S.useState(""),[b,j]=S.useState(""),y=()=>{l(!0);let L,B;h&&m?L=new Date(`${h}T${m}:00Z`).toISOString():h&&(L=new Date(`${h}T00:00:00Z`).toISOString()),N&&b?B=new Date(`${N}T${b}:59Z`).toISOString():N&&(B=new Date(`${N}T23:59:59Z`).toISOString()),Pd.get(1e3,L,B).then(M=>{const C=M.data;r(C.entries||[]),l(!1)}).catch(()=>l(!1))};S.useEffect(()=>{y()},[]);const _=()=>{y()},E=()=>{p(""),x(""),w(""),j(""),y()},A=(L,B)=>{if(L==="alert")switch(B){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},U=(L,B)=>{if(L==="alert")switch(B){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},P=L=>L==="alert"?"ALERT":"EVENT",q=s.filter(L=>c==="all"?!0:c==="events"?L.type==="event":c==="alerts"?L.type==="alert":!0),O={eventCount:q.filter(L=>L.type==="event").length,alertCount:q.filter(L=>L.type==="alert").length},T=L=>{Pd.deleteAlert(L).then(()=>{r(s.filter(B=>!(B.type==="alert"&&B.alert_id===L)))}).catch(B=>console.error("Failed to delete alert:",B))};return o?n.jsx("div",{className:"timeline-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})}):n.jsxs("div",{className:"timeline-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("timeline.title")}),n.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),n.jsxs("div",{className:"timeline-stats-cards",children:[n.jsxs("div",{className:"stat-card events",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:O.eventCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill events",style:{width:`${O.eventCount+O.alertCount>0?O.eventCount/(O.eventCount+O.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card alerts",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:O.alertCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${O.alertCount>0?O.alertCount/(O.eventCount+O.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card ratio",children:[n.jsx("div",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsxs("span",{className:"stat-value",children:[O.eventCount+O.alertCount>0?(O.alertCount/(O.eventCount+O.alertCount)*100).toFixed(1):0,"%"]}),n.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),n.jsxs("div",{className:"timeline-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("div",{className:"filter-tabs",children:[n.jsxs("button",{className:`filter-tab ${c==="all"?"active":""}`,onClick:()=>u("all"),children:[t("timeline.all"),n.jsx("span",{className:"count",children:O.eventCount+O.alertCount})]}),n.jsxs("button",{className:`filter-tab ${c==="events"?"active":""}`,onClick:()=>u("events"),children:[t("timeline.eventsOnly"),n.jsx("span",{className:"count events",children:O.eventCount})]}),n.jsxs("button",{className:`filter-tab ${c==="alerts"?"active":""}`,onClick:()=>u("alerts"),children:[t("timeline.alertsOnly"),n.jsx("span",{className:"count alerts",children:O.alertCount})]})]})}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("div",{className:"datetime-filter",children:[n.jsx("input",{type:"date",value:h,onChange:L=>p(L.target.value),placeholder:"Start date"}),n.jsx("input",{type:"time",value:m,onChange:L=>x(L.target.value),placeholder:"Start time"}),n.jsx("span",{className:"datetime-separator",children:"-"}),n.jsx("input",{type:"date",value:N,onChange:L=>w(L.target.value),placeholder:"End date"}),n.jsx("input",{type:"time",value:b,onChange:L=>j(L.target.value),placeholder:"End time"}),n.jsx("button",{className:"btn-apply-filter",onClick:_,children:t("common.apply")}),n.jsx("button",{className:"btn-clear-filter",onClick:E,children:t("common.clear")})]})})]}),n.jsx("div",{className:"timeline-container",children:q.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"📭"}),n.jsx("p",{children:t("timeline.noEntries")})]}):n.jsx("div",{className:"timeline",children:q.map((L,B)=>n.jsxs("div",{className:`timeline-item ${L.type}`,children:[n.jsxs("div",{className:"timeline-marker",style:{"--marker-color":U(L.type,L.severity)},children:[n.jsx("div",{className:"marker-dot"}),n.jsx("div",{className:"marker-line"})]}),n.jsxs("div",{className:"timeline-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-left",children:[n.jsx("span",{className:"card-icon",children:A(L.type,L.severity)}),n.jsx("span",{className:`timeline-type ${L.type}`,style:{color:U(L.type,L.severity)},children:P(L.type)}),L.type==="event"&&L.event_id&&n.jsxs("span",{className:"event-id-badge",children:["Event ",L.event_id]}),L.type==="event"&&L.computer&&n.jsx("span",{className:"computer-badge",children:L.computer}),L.type==="alert"&&L.severity&&n.jsx("span",{className:`severity-badge ${L.severity}`,style:{background:`${U(L.type,L.severity)}20`,color:U(L.type,L.severity)},children:L.severity.toUpperCase()})]}),n.jsx("span",{className:"card-time",children:new Date(L.timestamp).toLocaleString()})]}),n.jsx("p",{className:"card-message",children:L.message}),L.type==="alert"&&L.rule_name&&n.jsxs("div",{className:"card-meta",children:[n.jsxs("span",{className:"rule-badge",children:[n.jsx("span",{className:"rule-icon",children:"📌"}),L.rule_name]}),L.mitre_attack&&L.mitre_attack.length>0&&n.jsxs("span",{className:"mitre-badge",children:[n.jsx("span",{className:"mitre-icon",children:"🎯"}),L.mitre_attack.join(", ")]})]}),L.type==="alert"&&L.alert_id&&n.jsxs("div",{className:"card-actions",children:[n.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${L.alert_id}`),children:t("timeline.viewDetails")}),n.jsx("button",{className:"btn-delete",onClick:()=>L.alert_id&&T(L.alert_id),children:t("timeline.delete")})]})]})]},`${L.type}-${L.id}-${B}`))})})]})}function __(){const{t}=at(),[e,s]=S.useState(!1),[r,o]=S.useState("security"),[l,c]=S.useState("html"),[u,h]=S.useState("7d"),[p,m]=S.useState([]),[x,N]=S.useState(null),[w,b]=S.useState(null);S.useEffect(()=>{Dr.list().then(P=>m(P.data.reports)).catch(console.error)},[]);const j=async()=>{s(!0),b(null);try{const P=new Date,q=new Date;switch(u){case"24h":q.setHours(q.getHours()-24);break;case"7d":q.setDate(q.getDate()-7);break;case"30d":q.setDate(q.getDate()-30);break;case"90d":q.setDate(q.getDate()-90);break}await Dr.generate({type:r,format:l,start_time:q.toISOString(),end_time:P.toISOString()}),N(new Date().toLocaleString());const T=(await Dr.list()).data.reports||[];if(m(T),T.length>0){const L=T[0];confirm(`Report generated successfully!

Report: ${L.name}
Type: ${L.type}
Format: ${L.format}

Click OK to download now, or Cancel to view in reports list.`)&&_(L)}}catch(P){console.error("Report generation failed:",P),b("Failed to generate report. Please try again.")}finally{s(!1)}},y=async P=>{try{const q=await Dr.get(P.id);if(q.data.content){const O=window.open("","_blank");O&&(P.format==="html"?(O.document.write(q.data.content),O.document.close()):(O.document.write(`<pre>${JSON.stringify(q.data,null,2)}</pre>`),O.document.close()))}else alert("Report content not available")}catch(q){console.error("Failed to view report:",q),alert("Failed to view report")}},_=async P=>{try{const q=await Dr.download(P.id),O=new Blob([q.data],{type:q.headers["content-type"]||"application/octet-stream"}),T=URL.createObjectURL(O),L=document.createElement("a");L.href=T,L.download=`${P.name||P.id}.${P.format}`,document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(T)}catch(q){console.error("Failed to download report:",q),alert("Failed to download report")}},E=P=>P<1024?P+" B":P<1024*1024?(P/1024).toFixed(1)+" KB":(P/(1024*1024)).toFixed(1)+" MB",A=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],U=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return n.jsxs("div",{className:"reports-page",children:[n.jsx("h2",{children:t("reports.title")}),n.jsxs("div",{className:"reports-grid",children:[n.jsxs("div",{className:"reports-card main-config",children:[n.jsx("h3",{children:t("reports.generateReport")}),n.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Report Type"}),n.jsx("div",{className:"type-grid",children:A.map(P=>n.jsxs("div",{className:`type-option ${r===P.value?"selected":""}`,onClick:()=>o(P.value),children:[n.jsx("div",{className:"type-icon",children:P.icon}),n.jsx("div",{className:"type-label",children:P.label})]},P.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Output Format"}),n.jsx("div",{className:"format-row",children:U.map(P=>n.jsxs("div",{className:`format-option ${l===P.value?"selected":""}`,onClick:()=>c(P.value),children:[n.jsx("div",{className:"format-icon",children:P.icon}),n.jsx("div",{className:"format-label",children:P.label})]},P.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Time Range"}),n.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(P=>n.jsxs("button",{className:`range-btn ${u===P?"active":""}`,onClick:()=>h(P),children:[P==="24h"&&"Last 24 Hours",P==="7d"&&"Last 7 Days",P==="30d"&&"Last 30 Days",P==="90d"&&"Last 90 Days"]},P))})]}),w&&n.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),n.jsx("button",{className:"btn-primary generate-btn",onClick:j,disabled:e,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):n.jsxs(n.Fragment,{children:["📊 ",t("reports.generate")]})}),x&&n.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",x]})]}),n.jsxs("div",{className:"reports-card stats-card",children:[n.jsx("h3",{children:"Report Statistics"}),n.jsxs("div",{className:"stats-preview",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"📁"}),n.jsx("div",{className:"stat-value",children:p.length}),n.jsx("div",{className:"stat-label",children:"Total Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🛡️"}),n.jsx("div",{className:"stat-value",children:p.filter(P=>P.type==="security").length}),n.jsx("div",{className:"stat-label",children:"Security Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsx("div",{className:"stat-value",children:p.filter(P=>P.type==="alert").length}),n.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),n.jsxs("div",{className:"chart-placeholder",children:[n.jsx("div",{className:"chart-label",children:"Reports by Type"}),n.jsxs("div",{className:"mini-chart",children:[n.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),n.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),n.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),n.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),n.jsxs("div",{className:"reports-card full-width",children:[n.jsx("h3",{children:t("reports.recentReports")}),p.length>0?n.jsx("div",{className:"reports-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Report Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Format"}),n.jsx("th",{children:"Generated"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:p.map(P=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs("div",{className:"report-name",children:[n.jsxs("span",{className:"report-icon",children:[P.type==="security"&&"🛡️",P.type==="alert"&&"🚨",P.type==="timeline"&&"📊",P.type==="compliance"&&"📋"]}),P.name]})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${P.type}`,children:P.type})}),n.jsx("td",{children:n.jsx("span",{className:"format-badge",children:P.format.toUpperCase()})}),n.jsx("td",{children:new Date(P.generated_at).toLocaleString()}),n.jsx("td",{children:E(P.size)}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>y(P),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>_(P),children:"Download"})]})]},P.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📊"}),n.jsx("div",{className:"empty-text",children:t("reports.noReports")}),n.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),n.jsx("style",{children:`
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
      `})]})}function S_(){const{t}=at(),[e,s]=S.useState(!1),[r,o]=S.useState(""),[l,c]=S.useState(""),[u,h]=S.useState(null),[p,m]=S.useState(!1),[x,N]=S.useState(!1),[w,b]=S.useState([]),[j,y]=S.useState(""),[_,E]=S.useState(["eventlogs","registry","prefetch"]),[A,U]=S.useState([]),[P,q]=S.useState(!1);S.useEffect(()=>{O(),T()},[]);const O=()=>{Hn.listEvidence().then(R=>{R.data&&Array.isArray(R.data)&&b(R.data)}).catch(R=>console.error("Failed to load evidence:",R))},T=()=>{Hn.chainOfCustody().then(R=>{R.data&&Array.isArray(R.data)&&U(R.data)}).catch(R=>console.error("Failed to load chain of custody:",R))},L=async()=>{var R,J;if(l.trim()){N(!0);try{const X=await Hn.calculateHash(l);o(X.data.hash||"")}catch(X){console.error("Failed to calculate hash:",X),alert("Failed to calculate hash: "+(((J=(R=X.response)==null?void 0:R.data)==null?void 0:J.error)||X.message))}finally{N(!1)}}},B=async()=>{s(!0),y("starting");try{for(const R of _)y(`collecting:${R}`),await Hn.collect(R,`/tmp/forensics_${R}`);O(),T(),y("completed")}catch(R){console.error("Collection failed:",R),y("error")}finally{s(!1)}},M=async()=>{var R,J;if(!(!r.trim()||!l.trim())){m(!0),h(null);try{const X=await Hn.verifyHash(l,r);h({verified:X.data.match||!1,expected:r,actual:X.data.actual||r,path:l})}catch(X){h({verified:!1,expected:r,actual:((J=(R=X.response)==null?void 0:R.data)==null?void 0:J.error)||"Hash verification failed",path:l})}finally{m(!1)}}},C=R=>{E(J=>J.includes(R)?J.filter(X=>X!==R):[...J,R])},I=async R=>{try{const J=await Hn.getEvidence(R.id);if(J.data.content){const X=window.open("","_blank");X&&(X.document.write(`<pre>${JSON.stringify(J.data,null,2)}</pre>`),X.document.close())}else alert("Evidence content not available")}catch(J){console.error("Failed to view evidence:",J),alert("Failed to view evidence")}},W=async R=>{try{const J=await Hn.exportEvidence(R.id,"json"),X=new Blob([J.data],{type:J.headers["content-type"]||"application/octet-stream"}),re=URL.createObjectURL(X),Z=document.createElement("a");Z.href=re,Z.download=`evidence_${R.type}_${R.id}.json`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(re)}catch(J){console.error("Failed to export evidence:",J),alert("Failed to export evidence")}},ie=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB";return n.jsxs("div",{className:"forensics-page",children:[n.jsx("h2",{children:t("forensics.title")}),n.jsxs("div",{className:"forensics-grid",children:[n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.evidenceCollection")}),n.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),n.jsxs("div",{className:"collection-types",children:[n.jsxs("div",{className:"type-item",onClick:()=>C("eventlogs"),children:[n.jsx("div",{className:`type-checkbox ${_.includes("eventlogs")?"checked":""}`,children:_.includes("eventlogs")&&"✓"}),n.jsx("div",{className:"type-icon",children:"📋"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),n.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>C("registry"),children:[n.jsx("div",{className:`type-checkbox ${_.includes("registry")?"checked":""}`,children:_.includes("registry")&&"✓"}),n.jsx("div",{className:"type-icon",children:"🔧"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.registry")}),n.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>C("memory"),children:[n.jsx("div",{className:`type-checkbox ${_.includes("memory")?"checked":""}`,children:_.includes("memory")&&"✓"}),n.jsx("div",{className:"type-icon",children:"💾"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),n.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>C("prefetch"),children:[n.jsx("div",{className:`type-checkbox ${_.includes("prefetch")?"checked":""}`,children:_.includes("prefetch")&&"✓"}),n.jsx("div",{className:"type-icon",children:"⚡"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),n.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),j&&n.jsxs("div",{className:`collect-status ${j}`,children:[j==="starting"&&"📡 Initializing collection...",j.startsWith("collecting:")&&`🔍 Collecting ${j.split(":")[1]}...`,j==="completed"&&"✅ Collection completed",j==="error"&&"❌ Collection failed"]}),n.jsx("button",{className:"btn-primary forensics-btn",onClick:B,disabled:e||_.length===0,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):n.jsxs(n.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.hashVerification")}),n.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),n.jsxs("div",{className:"hash-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"File Path"}),n.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:l,onChange:R=>c(R.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expected SHA256 Hash"}),n.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:r,onChange:R=>o(R.target.value)})]}),n.jsx("button",{className:"btn-secondary",onClick:L,disabled:x||!l.trim(),children:x?"Calculating...":"Calculate Hash"}),n.jsx("button",{className:"btn-secondary",onClick:M,disabled:p||!r.trim()||!l.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&n.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[n.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),n.jsxs("div",{className:"result-content",children:[n.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),n.jsxs("div",{className:"result-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"File:"})," ",u.path]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),n.jsxs("div",{className:"forensics-card full-width",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),n.jsx("button",{className:"btn-secondary",onClick:()=>q(!0),children:"View Full Chain"})]}),w.length>0?n.jsx("div",{className:"evidence-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Collected At"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Hash"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:w.map(R=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"evidence-type",children:R.type})}),n.jsx("td",{children:new Date(R.collected_at).toLocaleString()}),n.jsx("td",{children:n.jsx("code",{className:"evidence-path",children:R.path})}),n.jsx("td",{children:ie(R.size)}),n.jsx("td",{children:n.jsxs("code",{className:"evidence-hash",children:[R.hash.substring(0,16),"..."]})}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>I(R),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>W(R),children:"Export"})]})]},R.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📦"}),n.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),n.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),P&&n.jsx("div",{className:"modal-overlay",onClick:()=>q(!1),children:n.jsxs("div",{className:"modal-content chain-modal",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("button",{className:"close-btn",onClick:()=>q(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:A.length>0?n.jsx("div",{className:"chain-timeline",children:A.map((R,J)=>n.jsxs("div",{className:"chain-entry",children:[n.jsx("div",{className:"chain-dot",children:J+1}),n.jsxs("div",{className:"chain-content",children:[n.jsx("div",{className:"chain-action",children:R.action}),n.jsx("div",{className:"chain-details",children:R.details}),n.jsxs("div",{className:"chain-meta",children:[n.jsx("span",{className:"chain-time",children:new Date(R.timestamp).toLocaleString()}),R.user&&n.jsxs("span",{className:"chain-user",children:["by ",R.user]})]})]})]},R.id))}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),n.jsx("style",{children:`
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
      `})]})}function C_(){var C,I;const{t}=at(),[e,s]=S.useState("system"),[r,o]=S.useState(null),[l,c]=S.useState([]),[u,h]=S.useState([]),[p,m]=S.useState([]),[x,N]=S.useState([]),[w,b]=S.useState([]),[j,y]=S.useState(!0),[_,E]=S.useState(null);S.useEffect(()=>{A()},[]);const A=()=>{y(!0),Kn.getInfo().then(W=>{o(W.data),y(!1)}).catch(W=>{E(W.message||t("common.error")),y(!1)})},U=()=>{l.length>0||(y(!0),Kn.getProcesses(50).then(W=>{c(W.data.processes||[]),y(!1)}).catch(()=>y(!1)))},P=()=>{u.length>0||(y(!0),Kn.getNetwork(50).then(W=>{h(W.data.connections||[]),y(!1)}).catch(()=>y(!1)))},q=()=>{p.length>0||(y(!0),Kn.getEnvVariables().then(W=>{m(W.data.variables||[]),y(!1)}).catch(()=>y(!1)))},O=()=>{x.length>0||(y(!0),Kn.getLoadedDLLs(100).then(W=>{N(W.data.modules||[]),y(!1)}).catch(()=>y(!1)))},T=()=>{w.length>0||(y(!0),Kn.getDrivers().then(W=>{b(W.data.drivers||[]),y(!1)}).catch(()=>y(!1)))},L=W=>{s(W),W==="processes"&&U(),W==="network"&&P(),W==="env"&&q(),W==="dlls"&&O(),W==="drivers"&&T()},B=W=>{const ie=Math.floor(W/86400),R=Math.floor(W%86400/3600),J=Math.floor(W%3600/60);return ie>0?`${ie}d ${R}h ${J}m`:R>0?`${R}h ${J}m`:`${J}m`},M=W=>{switch(W==null?void 0:W.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return j&&!r?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})}):_?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"error-state",children:["Error: ",_]})}):n.jsxs("div",{className:"systeminfo-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("systemInfo.title")}),n.jsx("div",{className:"header-actions",children:n.jsx("button",{className:"btn-refresh",onClick:A,children:"Refresh"})})]}),n.jsxs("div",{className:"tab-nav",children:[n.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>L("system"),children:"System"}),n.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>L("processes"),children:["Processes (",l.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>L("network"),children:["Network (",u.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>L("env"),children:["Env (",p.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>L("dlls"),children:["DLLs (",x.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>L("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&r&&n.jsxs("div",{className:"system-grid",children:[n.jsxs("div",{className:"system-card os-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"OS"}),n.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),n.jsxs("div",{className:"system-status",children:[n.jsx("div",{className:"status-indicator online"}),n.jsx("span",{children:"System Online"})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),n.jsx("span",{className:"info-value highlight",children:r.hostname||"N/A"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),n.jsx("span",{className:"info-value",children:r.domain||"WORKGROUP"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),n.jsx("span",{className:"info-value",children:r.os_name||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),n.jsx("span",{className:"info-value",children:r.os_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),n.jsx("span",{className:"info-value badge",children:r.architecture||"x64"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),n.jsx("span",{className:"info-value",children:r.timezone||"UTC"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),n.jsx("span",{className:`info-value badge ${r.is_admin?"admin":"user"}`,children:r.is_admin?"Root/Admin":"Standard User"})]})]})]}),n.jsxs("div",{className:"system-card runtime-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Runtime"}),n.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),n.jsx("span",{className:"info-value mono",children:r.go_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),n.jsxs("span",{className:"info-value",children:[r.cpu_count||0," Cores"]})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),n.jsx("span",{className:"info-value",children:B(r.uptime_seconds||0)})]})]})]}),n.jsxs("div",{className:"system-card resources-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Resources"}),n.jsx("h3",{children:"System Resources"})]}),n.jsxs("div",{className:"resource-bars",children:[n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Memory"}),n.jsxs("span",{className:"resource-value",children:[r.memory_free_gb?(r.memory_total_gb-r.memory_free_gb).toFixed(1):"0"," / ",((C=r.memory_total_gb)==null?void 0:C.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill",style:{width:r.memory_total_gb?`${(r.memory_total_gb-r.memory_free_gb)/r.memory_total_gb*100}%`:"0%"}})})]}),n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Free Memory"}),n.jsxs("span",{className:"resource-value",children:[((I=r.memory_free_gb)==null?void 0:I.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill memory",style:{width:r.memory_total_gb?`${r.memory_free_gb/r.memory_total_gb*100}%`:"0%"}})})]})]})]}),n.jsxs("div",{className:"system-card time-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Time"}),n.jsx("h3",{children:"Time Information"})]}),n.jsxs("div",{className:"time-display",children:[n.jsx("div",{className:"current-time",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),n.jsx("div",{className:"current-date",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),n.jsx("div",{className:"info-list",children:n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"UTC Time"}),n.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"PPID"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"User"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Command Line"})]})}),n.jsx("tbody",{children:l.map((W,ie)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:W.pid}),n.jsx("td",{className:"mono",children:W.ppid}),n.jsx("td",{className:"highlight",children:W.name}),n.jsx("td",{children:W.user||"-"}),n.jsx("td",{className:"truncate mono",title:W.exe,children:W.exe||"-"}),n.jsx("td",{className:"truncate",title:W.args,children:W.args||"-"})]},`${W.pid}-${ie}`))})]}),l.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Protocol"}),n.jsx("th",{children:"Local Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"Remote Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"State"}),n.jsx("th",{children:"Process"})]})}),n.jsx("tbody",{children:u.map((W,ie)=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"protocol-badge",children:W.protocol})}),n.jsx("td",{className:"mono",children:W.local_addr}),n.jsx("td",{className:"mono",children:W.local_port}),n.jsx("td",{className:"mono",children:W.remote_addr||"-"}),n.jsx("td",{className:"mono",children:W.remote_port||"-"}),n.jsx("td",{children:n.jsx("span",{className:"state-badge",style:{color:M(W.state)},children:W.state})}),n.jsx("td",{children:W.process_name||W.pid||"-"})]},`${W.protocol}-${W.local_addr}-${W.local_port}-${ie}`))})]}),u.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Variable Name"}),n.jsx("th",{children:"Value"}),n.jsx("th",{children:"Type"})]})}),n.jsx("tbody",{children:p.map((W,ie)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:W.name}),n.jsx("td",{className:"truncate",title:W.value,children:W.value}),n.jsx("td",{children:n.jsx("span",{className:"type-badge",children:W.type})})]},`${W.name}-${ie}`))})]}),p.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"Process"}),n.jsx("th",{children:"DLL Name"}),n.jsx("th",{children:"Version"}),n.jsx("th",{children:"Signed"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"})]})}),n.jsx("tbody",{children:x.map((W,ie)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:W.process_id}),n.jsx("td",{children:W.process_name}),n.jsx("td",{className:"mono highlight",children:W.name}),n.jsx("td",{className:"mono",children:W.version||"-"}),n.jsx("td",{children:n.jsx("span",{className:`signature-badge ${W.is_signed?"signed":"unsigned"}`,children:W.is_signed?"Signed":"Unsigned"})}),n.jsx("td",{className:"truncate",title:W.path,children:W.path}),n.jsxs("td",{className:"mono",children:[(W.size/1024).toFixed(1)," KB"]})]},`${W.process_id}-${W.name}-${ie}`))})]}),x.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Display Name"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Path"})]})}),n.jsx("tbody",{children:w.map((W,ie)=>{var R;return n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:W.name}),n.jsx("td",{children:W.display_name||W.name}),n.jsx("td",{className:"truncate",title:W.description,children:W.description||"-"}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${(R=W.status)==null?void 0:R.toLowerCase()}`,children:W.status})}),n.jsx("td",{className:"truncate mono",title:W.path,children:W.path||"-"})]},`${W.name}-${ie}`)})})]}),w.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No driver information available"})]}),n.jsx("style",{children:`
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
      `})]})}function E_(){var fa,ui,hi,fi;const[t,e]=S.useState([]),[s,r]=S.useState(!0),[o,l]=S.useState(null),[c,u]=S.useState(0),[h,p]=S.useState(0),[m,x]=S.useState("all"),[N,w]=S.useState("all"),[b,j]=S.useState(""),[y,_]=S.useState(null),[E,A]=S.useState(!1),[U,P]=S.useState(!1),[q,O]=S.useState(!1),[T,L]=S.useState(!1),[B,M]=S.useState(null),[C,I]=S.useState(!1),[W,ie]=S.useState("choice"),[R,J]=S.useState({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""}),[X,re]=S.useState([]),[Z,z]=S.useState(null),[G,ce]=S.useState({}),[fe,ye]=S.useState(null),[be,Re]=S.useState(!1),[Ce,Me]=S.useState(!1),[He,Vt]=S.useState(null),xs=S.useRef(null),pe=()=>{Bs.list().then(H=>{e(H.data.rules||[]),u(H.data.total_count||0),p(H.data.enabled_count||0),r(!1)}).catch(H=>{l(H.message||"Failed to load rules"),r(!1)})};S.useEffect(()=>{pe()},[]);const qt=()=>{Bs.listTemplates().then(H=>{re(H.data.templates||[])}).catch(H=>{console.error("Failed to load templates:",H)})},li=()=>{qt(),O(!0)},Ks=H=>{z(H);const ue={};H.parameters.forEach(Te=>{ue[Te.name]=Te.default||""}),ce(ue)},_n=()=>{Z&&Bs.instantiateTemplate(Z.name,G).then(()=>{O(!1),z(null),ce({}),pe()}).catch(H=>{console.error("Failed to create rule from template:",H),alert("Failed to create rule from template")})},ci=(H,ue)=>{Bs.toggle(H,!ue).then(()=>{e(t.map(Te=>Te.name===H?{...Te,enabled:!ue}:Te)),p(Te=>ue?Te-1:Te+1)}).catch(Te=>{console.error("Failed to toggle rule:",Te)})},Sn=H=>{!H.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?")||(M({...H}),L(!0))},is=H=>{if(!H.is_custom){alert("Cannot delete built-in rules");return}confirm(`Are you sure you want to delete rule "${H.name}"?`)&&oe.delete(`/rules/${H.name}`).then(()=>{pe()}).catch(Te=>{console.error("Failed to delete rule:",Te),alert("Failed to delete rule")})},rs=()=>{B&&Bs.save(B).then(()=>{L(!1),M(null),pe()}).catch(H=>{console.error("Failed to update rule:",H),alert("Failed to update rule")})},Cn=()=>{I(!0),ie("choice"),J({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""})},di=()=>{I(!1),li()},En=()=>{ie("custom")},se=()=>{if(!R.name.trim()){alert("Rule name is required");return}Bs.save({name:R.name,description:R.description,severity:R.severity,enabled:!0,score:R.score,mitre_attack:R.mitre_attack,event_ids:R.event_ids,message:R.message}).then(()=>{I(!1),pe()}).catch(H=>{console.error("Failed to add rule:",H),alert("Failed to create rule")})},le=()=>{A(!0),ye(null)},Pe=H=>{Re(!0),Bs.validate(H).then(ue=>{ye(ue.data)}).catch(ue=>{ye({valid:!1,errors:[ue.message||"Validation failed"],warnings:[]})}).finally(()=>{Re(!1)})},st=H=>{Bs.export(H).then(ue=>{const Te=new Blob([ue.data],{type:H==="yaml"?"text/yaml":"application/json"}),Yt=URL.createObjectURL(Te),ys=document.createElement("a");ys.href=Yt,ys.download=`rules_export.${H}`,document.body.appendChild(ys),ys.click(),document.body.removeChild(ys),URL.revokeObjectURL(Yt)}).catch(ue=>{console.error("Failed to export rules:",ue),alert("Failed to export rules")})},as=()=>{P(!0),Vt(null)},vs=H=>{var Yt;const ue=(Yt=H.target.files)==null?void 0:Yt[0];if(!ue)return;const Te=new FileReader;Te.onload=ys=>{var qi;try{const Pn=(qi=ys.target)==null?void 0:qi.result;let Ds=[];if(ue.name.endsWith(".yaml")||ue.name.endsWith(".yml")){const Ft=Pn.split(`
`);let mt={};for(const _t of Ft)_t.startsWith("- name:")?(mt.name&&Ds.push(mt),mt={name:_t.replace("- name:","").trim(),mitre_attack:[]}):_t.startsWith("  description:")?mt.description=_t.replace("  description:","").trim():_t.startsWith("  severity:")?mt.severity=_t.replace("  severity:","").trim():_t.startsWith("  enabled:")?mt.enabled=_t.replace("  enabled:","").trim()==="true":_t.startsWith("  score:")?mt.score=parseFloat(_t.replace("  score:","").trim())||50:_t.startsWith("    - ")&&(mt.mitre_attack||(mt.mitre_attack=[]),mt.mitre_attack.push(_t.replace("    - ","").trim()));mt.name&&Ds.push(mt)}else{const Ft=JSON.parse(Pn);Ds=Array.isArray(Ft)?Ft:Ft.rules||[]}if(Ds.length===0){Vt({imported:0,failed:0,errors:["No valid rules found in file"]});return}Me(!0),Bs.import(Ds).then(Ft=>{Vt(Ft.data),Ft.data.imported>0&&pe()}).catch(Ft=>{Vt({imported:0,failed:Ds.length,errors:[Ft.message||"Import failed"]})}).finally(()=>{Me(!1)})}catch(Pn){Vt({imported:0,failed:0,errors:["Failed to parse file: "+(Pn.message||"Invalid format")]})}},Te.readAsText(ue)},Ps=H=>{_(H)},Oe=H=>{switch(H==null?void 0:H.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},Et=H=>{switch(H==null?void 0:H.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Rn=t.filter(H=>{var ue;return!(m!=="all"&&((ue=H.severity)==null?void 0:ue.toLowerCase())!==m||N==="enabled"&&!H.enabled||N==="disabled"&&H.enabled||b&&!H.name.toLowerCase().includes(b.toLowerCase()))});return s?n.jsx("div",{className:"rules-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading rules..."})]})}):o?n.jsx("div",{className:"rules-page",children:n.jsx("div",{className:"error-state",children:o})}):n.jsxs("div",{className:"rules-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Detection Rules"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:le,children:"Validate"}),n.jsx("button",{className:"btn-secondary",onClick:as,children:"Import"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",children:"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>st("json"),children:"JSON"}),n.jsx("button",{onClick:()=>st("yaml"),children:"YAML"})]})]}),n.jsx("button",{className:"btn-primary",onClick:Cn,children:"Add Rule"})]})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value",children:c}),n.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon enabled",children:"✓"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value enabled",children:h}),n.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon disabled",children:"✗"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value disabled",children:c-h}),n.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),n.jsxs("div",{className:"filter-bar",children:[n.jsx("input",{type:"text",placeholder:"Search rules...",value:b,onChange:H=>j(H.target.value),className:"search-input"}),n.jsxs("select",{value:m,onChange:H=>x(H.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Severities"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"})]}),n.jsxs("select",{value:N,onChange:H=>w(H.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Status"}),n.jsx("option",{value:"enabled",children:"Enabled"}),n.jsx("option",{value:"disabled",children:"Disabled"})]})]}),n.jsx("div",{className:"rules-grid",children:Rn.map(H=>{var ue;return n.jsxs("div",{className:`rule-card ${H.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`severity-dot ${Oe(H.severity)}`}),n.jsx("span",{className:"rule-name",children:H.name})]}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:H.enabled,onChange:()=>ci(H.name,H.enabled)}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`severity-badge ${Oe(H.severity)}`,children:[Et(H.severity)," ",H.severity]}),n.jsxs("span",{className:"score-badge",children:["Score: ",H.score]}),!H.is_custom&&n.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),n.jsx("p",{className:"rule-description",children:H.description}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("div",{className:"mitre-tags",children:[(ue=H.mitre_attack)==null?void 0:ue.slice(0,3).map(Te=>n.jsx("span",{className:"mitre-tag",children:Te},Te)),H.mitre_attack&&H.mitre_attack.length>3&&n.jsxs("span",{className:"mitre-tag",children:["+",H.mitre_attack.length-3]})]}),n.jsxs("div",{className:"rule-actions",children:[n.jsx("button",{className:"rule-action",onClick:()=>Ps(H),children:"Details"}),n.jsx("button",{className:"rule-action",onClick:()=>Sn(H),children:"Edit"}),H.is_custom&&n.jsx("button",{className:"rule-action rule-action-delete",onClick:()=>is(H),children:"Delete"})]})]})]},H.id)})}),Rn.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("div",{children:"No rules match your filters"})]}),y&&n.jsx("div",{className:"modal-overlay",onClick:()=>_(null),children:n.jsxs("div",{className:"modal-content rule-modal",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>_(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:y.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"ID:"}),n.jsx("span",{className:"detail-value mono",children:y.id})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Severity:"}),n.jsxs("span",{className:`severity-badge ${Oe(y.severity)}`,children:[Et(y.severity)," ",y.severity]})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Score:"}),n.jsx("span",{className:"detail-value",children:y.score})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Description"}),n.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"MITRE ATT&CK"}),n.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(H=>n.jsx("span",{className:"mitre-tag",children:H},H))})]}),y.tags&&y.tags.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Tags"}),n.jsx("div",{className:"tags-list",children:y.tags.map(H=>n.jsx("span",{className:"tag-item",children:H},H))})]})]})]})}),E&&n.jsx("div",{className:"modal-overlay",onClick:()=>A(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Validate Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),n.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>A(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:()=>{const H=document.querySelector(".validate-input");if(H!=null&&H.value){const ue=H.value;try{if(ue.trim().startsWith("-"))Pe({name:"temp",description:ue,severity:"medium",enabled:!0,score:50});else{const Te=JSON.parse(ue);Pe(Te)}}catch{Pe({name:"temp",description:ue,severity:"medium",enabled:!0,score:50})}}},disabled:be,children:be?"Validating...":"Validate"})]}),fe&&n.jsxs("div",{className:`validation-result ${fe.valid?"valid":"invalid"}`,children:[n.jsx("div",{className:"result-header",children:fe.valid?"✓ Valid Rule":"✗ Invalid Rule"}),fe.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("strong",{children:"Errors:"}),n.jsx("ul",{children:fe.errors.map((H,ue)=>n.jsx("li",{children:H},ue))})]}),fe.warnings.length>0&&n.jsxs("div",{className:"result-warnings",children:[n.jsx("strong",{children:"Warnings:"}),n.jsx("ul",{children:fe.warnings.map((H,ue)=>n.jsx("li",{children:H},ue))})]})]})]})]})}),C&&n.jsx("div",{className:"modal-overlay",onClick:()=>I(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add New Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>I(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:W==="choice"?n.jsxs("div",{className:"add-rule-choice",children:[n.jsx("p",{className:"modal-desc",children:"Choose how to create a new rule:"}),n.jsxs("div",{className:"choice-cards",children:[n.jsxs("div",{className:"choice-card",onClick:di,children:[n.jsx("div",{className:"choice-icon",children:"📋"}),n.jsx("div",{className:"choice-title",children:"From Template"}),n.jsx("div",{className:"choice-desc",children:"Create a rule from a pre-defined template with customizable parameters"})]}),n.jsxs("div",{className:"choice-card",onClick:En,children:[n.jsx("div",{className:"choice-icon",children:"✏️"}),n.jsx("div",{className:"choice-title",children:"Custom Rule"}),n.jsx("div",{className:"choice-desc",children:"Create a custom rule by filling in the rule details manually"})]})]})]}):n.jsxs("div",{className:"add-rule-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:R.name,onChange:H=>J({...R,name:H.target.value}),placeholder:"e.g. suspicious-login-detected"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:R.description,onChange:H=>J({...R,description:H.target.value}),rows:3,placeholder:"Describe what this rule detects..."})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:R.severity,onChange:H=>J({...R,severity:H.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:R.score,onChange:H=>J({...R,score:parseFloat(H.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK (comma-separated)"}),n.jsx("input",{type:"text",value:((fa=R.mitre_attack)==null?void 0:fa.join(", "))||"",onChange:H=>J({...R,mitre_attack:H.target.value.split(",").map(ue=>ue.trim()).filter(ue=>ue)}),placeholder:"T1055, T1056"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((ui=R.event_ids)==null?void 0:ui.join(", "))||"",onChange:H=>J({...R,event_ids:H.target.value.split(",").map(ue=>parseInt(ue.trim())).filter(ue=>!isNaN(ue))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Alert Message"}),n.jsx("input",{type:"text",value:R.message,onChange:H=>J({...R,message:H.target.value}),placeholder:"Alert message when rule triggers"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>ie("choice"),children:"Back"}),n.jsx("button",{className:"btn-primary",onClick:se,children:"Create Rule"})]})]})})]})}),U&&n.jsx("div",{className:"modal-overlay",onClick:()=>P(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Import Rules"}),n.jsx("button",{className:"close-btn",onClick:()=>P(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),n.jsxs("details",{className:"format-example",children:[n.jsx("summary",{children:"View Format Examples"}),n.jsxs("div",{className:"format-content",children:[n.jsx("h5",{children:"JSON Format:"}),n.jsx("pre",{children:`[
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
  message: Suspicious activity detected`})]})]}),n.jsx("input",{type:"file",ref:xs,accept:".yaml,.yml,.json",onChange:vs,style:{display:"none"}}),n.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var H;return(H=xs.current)==null?void 0:H.click()},disabled:Ce,children:Ce?"Importing...":"Choose File"}),He&&n.jsxs("div",{className:`import-result ${He.imported>0?"success":"error"}`,children:[n.jsx("div",{className:"result-header",children:He.imported>0?`✓ Imported ${He.imported} rules`:"✗ Import failed"}),He.failed>0&&n.jsxs("div",{className:"result-info",children:["Failed: ",He.failed]}),He.errors.length>0&&n.jsx("div",{className:"result-errors",children:n.jsx("ul",{children:He.errors.map((H,ue)=>n.jsx("li",{children:H},ue))})})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-secondary",onClick:()=>P(!1),children:"Close"})})]})]})}),q&&n.jsx("div",{className:"modal-overlay",onClick:()=>O(!1),children:n.jsxs("div",{className:"modal-content template-modal",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Create Rule from Template"}),n.jsx("button",{className:"close-btn",onClick:()=>O(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:Z?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"selected-template-header",children:[n.jsx("button",{className:"btn-back",onClick:()=>z(null),children:"← Back"}),n.jsx("h4",{children:Z.name})]}),n.jsx("div",{className:"template-params-form",children:Z.parameters.map(H=>n.jsxs("div",{className:"param-item",children:[n.jsxs("label",{children:[H.name,H.required&&n.jsx("span",{className:"required",children:"*"})]}),n.jsx("p",{className:"param-desc",children:H.description}),H.options&&H.options.length>0?n.jsxs("select",{value:G[H.name]||"",onChange:ue=>ce({...G,[H.name]:ue.target.value}),children:[n.jsx("option",{value:"",children:"Select..."}),H.options.map(ue=>n.jsx("option",{value:ue,children:ue},ue))]}):n.jsx("input",{type:H.type==="number"?"number":"text",value:G[H.name]||"",onChange:ue=>ce({...G,[H.name]:ue.target.value}),placeholder:H.default||""})]},H.name))}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>O(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:_n,disabled:Z.parameters.some(H=>H.required&&!G[H.name]),children:"Create Rule"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:"Select a template:"}),n.jsx("div",{className:"template-list",children:X.length===0?n.jsx("div",{className:"empty-state",children:"No templates available"}):X.map(H=>n.jsxs("div",{className:"template-card",onClick:()=>Ks(H),children:[n.jsx("div",{className:"template-name",children:H.name}),n.jsx("div",{className:"template-desc",children:H.description}),n.jsxs("div",{className:"template-params",children:[H.parameters.length," parameters"]})]},H.name))})]})})]})}),T&&B&&n.jsx("div",{className:"modal-overlay",onClick:()=>L(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>L(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:B.name,onChange:H=>M({...B,name:H.target.value}),disabled:!B.is_custom})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:B.description,onChange:H=>M({...B,description:H.target.value}),rows:3})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:B.severity,onChange:H=>M({...B,severity:H.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:B.score,onChange:H=>M({...B,score:parseFloat(H.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK"}),n.jsx("input",{type:"text",value:((hi=B.mitre_attack)==null?void 0:hi.join(", "))||"",onChange:H=>M({...B,mitre_attack:H.target.value.split(",").map(ue=>ue.trim()).filter(ue=>ue)}),placeholder:"T1234, T5678"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((fi=B.event_ids)==null?void 0:fi.join(", "))||"",onChange:H=>M({...B,event_ids:H.target.value.split(",").map(ue=>parseInt(ue.trim())).filter(ue=>!isNaN(ue))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message"}),n.jsx("input",{type:"text",value:B.message||"",onChange:H=>M({...B,message:H.target.value})})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>L(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:rs,children:"Save Changes"})]})]})]})}),n.jsx("style",{children:`
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
      `})]})}function R_(){const{t}=at(),[e,s]=S.useState("general"),[r,o]=S.useState(!1),[l,c]=S.useState(!1),[u,h]=S.useState(null),[p,m]=S.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});S.useEffect(()=>{od.get().then(b=>{const j=b.data;m({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const x=async()=>{var b,j;c(!0),h(null);try{await od.save({database_path:p.databasePath,log_level:p.logLevel,max_events:p.maxEvents,retention_days:p.retentionDays,enable_alerting:p.enableAlerting,enable_live_collection:p.enableLiveCollection,enable_auto_update:p.enableAutoUpdate,api_port:p.apiPort,api_host:p.apiHost,cors_enabled:p.corsEnabled,max_import_file_size:p.maxImportFileSize,export_directory:p.exportDirectory,parser_workers:p.parserWorkers,memory_limit:p.memoryLimit}),o(!0),setTimeout(()=>o(!1),3e3)}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to save settings")}finally{c(!1)}},N=async()=>{var b,j;c(!0),h(null);try{await od.reset(),window.location.reload()}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to reset settings"),c(!1)}},w=(b,j)=>{m({...p,[b]:j})};return n.jsxs("div",{className:"settings-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("settings.title")}),r&&n.jsxs("span",{className:"save-indicator",children:["✓ ",t("settings.saved")]})]}),n.jsxs("div",{className:"settings-layout",children:[n.jsxs("div",{className:"settings-nav",children:[n.jsxs("button",{className:`nav-item ${e==="general"?"active":""}`,onClick:()=>s("general"),children:[n.jsx("span",{className:"nav-icon",children:"⚙️"}),t("settings.general")]}),n.jsxs("button",{className:`nav-item ${e==="database"?"active":""}`,onClick:()=>s("database"),children:[n.jsx("span",{className:"nav-icon",children:"💾"}),t("settings.database")]}),n.jsxs("button",{className:`nav-item ${e==="api"?"active":""}`,onClick:()=>s("api"),children:[n.jsx("span",{className:"nav-icon",children:"🔌"}),t("settings.apiServer")]}),n.jsxs("button",{className:`nav-item ${e==="collection"?"active":""}`,onClick:()=>s("collection"),children:[n.jsx("span",{className:"nav-icon",children:"📡"}),t("settings.collection")]}),n.jsxs("button",{className:`nav-item ${e==="advanced"?"active":""}`,onClick:()=>s("advanced"),children:[n.jsx("span",{className:"nav-icon",children:"🔧"}),t("settings.advanced")]})]}),n.jsxs("div",{className:"settings-content",children:[e==="general"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.generalSettings")}),n.jsx("p",{children:t("settings.configureBasic")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.logLevel")}),n.jsx("p",{children:t("settings.logLevelDesc")})]}),n.jsxs("select",{value:p.logLevel,onChange:b=>w("logLevel",b.target.value),children:[n.jsx("option",{value:"debug",children:t("settings.debug")}),n.jsx("option",{value:"info",children:t("settings.info")}),n.jsx("option",{value:"warn",children:t("settings.warn")}),n.jsx("option",{value:"error",children:t("settings.error")})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.exportDirectory")}),n.jsx("p",{children:t("settings.exportDirectoryDesc")})]}),n.jsx("input",{type:"text",value:p.exportDirectory,onChange:b=>w("exportDirectory",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.autoUpdateRules")}),n.jsx("p",{children:t("settings.autoUpdateRulesDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAutoUpdate,onChange:b=>w("enableAutoUpdate",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="database"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.databaseSettings")}),n.jsx("p",{children:t("settings.configureDatabase")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.databasePath")}),n.jsx("p",{children:t("settings.databasePathDesc")})]}),n.jsx("input",{type:"text",value:p.databasePath,onChange:b=>w("databasePath",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.eventRetention")}),n.jsx("p",{children:t("settings.eventRetentionDesc")})]}),n.jsx("input",{type:"number",value:p.retentionDays,onChange:b=>w("retentionDays",Number(b.target.value)),className:"number-input",min:"1",max:"365"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxEvents")}),n.jsx("p",{children:t("settings.maxEventsDesc")})]}),n.jsx("input",{type:"number",value:p.maxEvents,onChange:b=>w("maxEvents",Number(b.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),e==="api"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.apiServerSettings")}),n.jsx("p",{children:t("settings.configureApiServer")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiHost")}),n.jsx("p",{children:t("settings.apiHostDesc")})]}),n.jsx("input",{type:"text",value:p.apiHost,onChange:b=>w("apiHost",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiPort")}),n.jsx("p",{children:t("settings.apiPortDesc")})]}),n.jsx("input",{type:"number",value:p.apiPort,onChange:b=>w("apiPort",Number(b.target.value)),className:"number-input",min:"1",max:"65535"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableCors")}),n.jsx("p",{children:t("settings.enableCorsDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.corsEnabled,onChange:b=>w("corsEnabled",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="collection"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.collectionSettings")}),n.jsx("p",{children:t("settings.configureCollection")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableAlerting")}),n.jsx("p",{children:t("settings.enableAlertingDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAlerting,onChange:b=>w("enableAlerting",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableLiveCollection")}),n.jsx("p",{children:t("settings.enableLiveCollectionDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableLiveCollection,onChange:b=>w("enableLiveCollection",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxImportFileSize")}),n.jsx("p",{children:t("settings.maxImportFileSizeDesc")})]}),n.jsx("input",{type:"number",value:p.maxImportFileSize,onChange:b=>w("maxImportFileSize",Number(b.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),e==="advanced"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.advancedSettings")}),n.jsx("p",{children:t("settings.expertConfig")})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("h4",{children:["⚠️ ",t("settings.warning")]}),n.jsx("p",{children:t("settings.warningDesc")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.parserWorkers")}),n.jsx("p",{children:t("settings.parserWorkersDesc")})]}),n.jsx("input",{type:"number",value:p.parserWorkers,onChange:b=>w("parserWorkers",Number(b.target.value)),className:"number-input",min:"1",max:"32"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.memoryLimit")}),n.jsx("p",{children:t("settings.memoryLimitDesc")})]}),n.jsx("input",{type:"number",value:p.memoryLimit,onChange:b=>w("memoryLimit",Number(b.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),n.jsxs("div",{className:"settings-actions",children:[u&&n.jsx("span",{className:"error-text",children:u}),n.jsx("button",{onClick:x,className:"btn-primary",disabled:l,children:t(l?"settings.saving":"settings.saveChanges")}),n.jsx("button",{onClick:N,className:"btn-secondary",disabled:l,children:t("settings.resetDefaults")})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function P_(){const{t}=at(),[e,s]=S.useState(null),[r,o]=S.useState(!0),[l,c]=S.useState(null),[u,h]=S.useState("5m"),[p,m]=S.useState({events:[],alerts:[],memory:[],timestamps:[]}),x=S.useRef(null),N=()=>{Kn.getMetrics().then(_=>{s(_.data),o(!1),m(E=>{const A=new Date().toLocaleTimeString(),U=[...E.events,_.data.total_events].slice(-20),P=[...E.alerts,_.data.total_alerts].slice(-20),q=[...E.memory,_.data.memory_usage_mb].slice(-20),O=[...E.timestamps,A].slice(-20);return{events:U,alerts:P,memory:q,timestamps:O}})}).catch(_=>{c(_.message||t("common.error")),o(!1)})};S.useEffect(()=>{N();const _=setInterval(N,5e3);return()=>clearInterval(_)},[]),S.useEffect(()=>{x.current&&p.events.length>1&&w()},[p]);const w=()=>{const _=x.current;if(!_)return;const E=_.getContext("2d");if(!E)return;const A=_.width,U=_.height,P=40;E.clearRect(0,0,A,U);const q=Math.max(...p.events,1),O=Math.min(...p.events,0),T=q-O||1;E.strokeStyle="#333",E.lineWidth=1;for(let B=0;B<=4;B++){const M=P+(U-2*P)*B/4;E.beginPath(),E.moveTo(P,M),E.lineTo(A-P,M),E.stroke()}const L=(A-2*P)/(p.events.length-1);E.strokeStyle="#00d9ff",E.lineWidth=2,E.beginPath(),p.events.forEach((B,M)=>{const C=P+M*L,I=P+(U-2*P)*(1-(B-O)/T);M===0?E.moveTo(C,I):E.lineTo(C,I)}),E.stroke(),E.fillStyle="#00d9ff",p.events.forEach((B,M)=>{const C=P+M*L,I=P+(U-2*P)*(1-(B-O)/T);E.beginPath(),E.arc(C,I,3,0,Math.PI*2),E.fill()})},b=_=>{const E=Math.floor(_/86400),A=Math.floor(_%86400/3600),U=Math.floor(_%3600/60);return E>0?`${E}d ${A}h ${U}m`:A>0?`${A}h ${U}m`:`${U}m`};if(r)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})});if(l)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"error-state",children:["❌ ",l]})});const j=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return n.jsxs("div",{className:"metrics-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("metrics.title")}),n.jsxs("div",{className:"time-range-selector",children:[n.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),n.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),n.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card large",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"📊"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),n.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),n.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"🚨"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),n.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),n.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"💾"}),n.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),n.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),n.jsx("div",{className:"metric-bar",children:n.jsx("div",{className:"metric-bar-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"metric-sub",children:[j,"% of limit"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"⚡"}),n.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),n.jsx("div",{className:"metric-value uptime",children:b((e==null?void 0:e.uptime_seconds)||0)}),n.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),n.jsx("div",{className:"chart-section",children:n.jsxs("div",{className:"chart-card",children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:"Event Throughput"}),n.jsx("div",{className:"chart-legend",children:n.jsxs("span",{className:"legend-item",children:[n.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),n.jsx("div",{className:"chart-container",children:n.jsx("canvas",{ref:x,width:800,height:200})})]})}),n.jsxs("div",{className:"prometheus-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("metrics.prometheusFormat")}),n.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),n.jsx("pre",{className:"prometheus-code",children:y()})]}),n.jsx("style",{children:`
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}ha.register(el,tl,Yr,Ys,Ex,Px,Sx,kx);function D_(){const{t}=at(),[e,s]=S.useState([]),[r,o]=S.useState(null),[l,c]=S.useState(!0),[u,h]=S.useState(null),[p,m]=S.useState(null),[x,N]=S.useState({}),[w,b]=S.useState(!1),[j,y]=S.useState([]),[_,E]=S.useState(!1);S.useEffect(()=>{O()},[]);const A=async()=>{try{E(!0);const C=await ld.listDetectors();y(C.data.detectors||[])}catch(C){console.error("Failed to fetch detectors:",C)}finally{E(!1)}},U=C=>{y(j.map(I=>I.name===C?{...I,enabled:!I.enabled}:I))},P=async()=>{try{await ld.updateDetectors(j.map(C=>({name:C.name,enabled:C.enabled}))),b(!1)}catch(C){console.error("Failed to save detector config:",C),alert("Failed to save configuration")}},q=()=>{A(),b(!0)},O=async()=>{try{c(!0);const C=new URLSearchParams;x.category&&C.append("category",x.category),x.technique&&C.append("technique",x.technique);const W=(await ld.detect(C.toString()?`?${C.toString()}`:"")).data;s(W.detections||[]),o(T(W.detections||[])),h(null)}catch(C){h(C instanceof Error?C.message:"Unknown error")}finally{c(!1)}},T=C=>{const I={total_detections:C.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return C.forEach(W=>{var R;const ie=((R=W.severity)==null?void 0:R.toLowerCase())||"info";ie in I.by_severity&&I.by_severity[ie]++,I.by_category[W.category]=(I.by_category[W.category]||0)+1,I.by_technique[W.technique]=(I.by_technique[W.technique]||0)+1}),I},L=e.filter(C=>{var I;return!(x.severity&&((I=C.severity)==null?void 0:I.toLowerCase())!==x.severity||x.category&&C.category!==x.category||x.technique&&C.technique!==x.technique)}),B={labels:Object.keys((r==null?void 0:r.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((r==null?void 0:r.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},M={labels:Object.keys((r==null?void 0:r.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((r==null?void 0:r.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return l?n.jsx("div",{className:"persistence-page",children:n.jsx("div",{className:"loading",children:t("common.loading")})}):u?n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),n.jsx("button",{onClick:O,className:"btn btn-primary",children:t("common.confirm")})]}):n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:t("persistence.title")}),n.jsx("button",{onClick:O,className:"btn btn-primary",children:t("persistence.rescan")}),n.jsx("button",{onClick:q,className:"btn btn-secondary",children:t("persistence.detectorConfig")||"Detector Config"})]}),w&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:n.jsxs("div",{className:"modal-content detector-config-modal",onClick:C=>C.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:t("persistence.detectorConfig")||"Detector Configuration"}),n.jsx("button",{className:"close-btn",onClick:()=>b(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"config-description",children:t("persistence.detectorConfigDesc")||"Enable or disable individual detectors. Changes will take effect on next scan."}),_?n.jsx("div",{className:"loading",children:t("common.loading")}):n.jsx("div",{className:"detectors-list",children:j.map(C=>n.jsxs("div",{className:"detector-item",children:[n.jsxs("label",{className:"detector-checkbox",children:[n.jsx("input",{type:"checkbox",checked:C.enabled,onChange:()=>U(C.name)}),n.jsx("span",{className:"detector-name",children:C.name.replace(/_/g," ")})]}),n.jsx("span",{className:"detector-technique",children:C.technique}),n.jsx("span",{className:"detector-description",children:C.description})]},C.name))}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:P,className:"btn btn-primary",children:t("common.save")||"Save"}),n.jsx("button",{onClick:()=>b(!1),className:"btn btn-secondary",children:t("common.cancel")||"Cancel"})]})]})]})}),r&&n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card stat-total",children:[n.jsx("div",{className:"stat-value",children:r.total_detections}),n.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),n.jsxs("div",{className:"stat-card stat-critical",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.critical}),n.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),n.jsxs("div",{className:"stat-card stat-high",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.high}),n.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),n.jsxs("div",{className:"stat-card stat-medium",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.medium}),n.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),n.jsxs("div",{className:"stat-card stat-low",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.low}),n.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),n.jsxs("div",{className:"charts-grid",children:[n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.bySeverity")}),n.jsx("div",{className:"chart-container",children:n.jsx(Bd,{data:B,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.byCategory")}),n.jsx("div",{className:"chart-container",children:n.jsx(Bd,{data:M,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),n.jsxs("div",{className:"filters",children:[n.jsxs("select",{value:x.severity||"",onChange:C=>N({...x,severity:C.target.value||void 0}),children:[n.jsx("option",{value:"",children:t("persistence.allSeverities")}),n.jsx("option",{value:"critical",children:t("persistence.critical")}),n.jsx("option",{value:"high",children:t("persistence.high")}),n.jsx("option",{value:"medium",children:t("persistence.medium")}),n.jsx("option",{value:"low",children:t("persistence.low")})]}),n.jsxs("select",{value:x.category||"",onChange:C=>N({...x,category:C.target.value||void 0}),children:[n.jsx("option",{value:"",children:t("persistence.allCategories")}),n.jsx("option",{value:"Registry",children:"注册表"}),n.jsx("option",{value:"ScheduledTask",children:"计划任务"}),n.jsx("option",{value:"Service",children:"服务"}),n.jsx("option",{value:"WMI",children:"WMI"}),n.jsx("option",{value:"COM",children:"COM"}),n.jsx("option",{value:"BITS",children:"BITS"}),n.jsx("option",{value:"Accessibility",children:"辅助功能"})]}),n.jsx("button",{onClick:O,className:"btn btn-secondary",children:t("persistence.rescan")})]}),n.jsx("div",{className:"detections-table-container",children:n.jsxs("table",{className:"detections-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("persistence.severity")}),n.jsx("th",{children:t("persistence.technique")}),n.jsx("th",{children:t("persistence.category")}),n.jsx("th",{children:t("persistence.title")}),n.jsx("th",{children:t("persistence.evidence")}),n.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),n.jsx("tbody",{children:L.map(C=>{var I,W,ie,R;return n.jsxs("tr",{onClick:()=>m(C),className:"detection-row",children:[n.jsx("td",{children:n.jsx("span",{className:`severity-badge severity-${(I=C.severity)==null?void 0:I.toLowerCase()}`,children:t(`persistence.${(W=C.severity)==null?void 0:W.toLowerCase()}`)})}),n.jsx("td",{children:n.jsx("span",{className:"technique-tag",children:C.technique})}),n.jsx("td",{children:C.category}),n.jsx("td",{children:C.title}),n.jsx("td",{className:"evidence-cell",children:((ie=C.evidence)==null?void 0:ie.key)&&n.jsx("div",{className:"evidence-key",children:C.evidence.key})}),n.jsx("td",{children:t(`persistence.${(R=C.false_positive_risk)==null?void 0:R.toLowerCase()}Risk`)||C.false_positive_risk})]},C.id)})})]})}),p&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(null),children:n.jsxs("div",{className:"modal-content",onClick:C=>C.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:p.title}),n.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.basicInfo")}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),p.explanation&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.explanation")||"规则解读"}),n.jsx("p",{children:p.explanation})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.description")}),n.jsx("p",{children:p.description})]}),p.recommendation&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.recommendation")||"处置建议"}),n.jsx("p",{style:{whiteSpace:"pre-wrap"},children:p.recommendation})]}),p.real_case&&p.real_case!=="暂无真实案例"&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.realCase")||"真实案例"}),n.jsx("p",{children:p.real_case})]})]})]})})]})}const Ss={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},A_={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},T_=(t,e="zh")=>{const s=e.startsWith("zh")?"zh":"en";return A_[s][t]||t},L_=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function M_(){var y,_;const{t,locale:e}=at(),s=Qs(),[r,o]=S.useState(!1),[l,c]=S.useState(null),[u,h]=S.useState("brute-force"),[p,m]=S.useState(24),[x,N]=S.useState(""),w=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:Ss["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:Ss.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:Ss.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:Ss.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:Ss["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:Ss["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:Ss.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:Ss["privilege-escalation"],category:"privilege-escalation",recommended:!1}],b=async()=>{var E,A;o(!0),N("");try{const U=u.replace(/_/g,"-"),P=await Dj.run(U,{hours:p});c(P.data)}catch(U){N(((A=(E=U.response)==null?void 0:E.data)==null?void 0:A.error)||"Failed to run analyzer")}finally{o(!1)}},j=w.reduce((E,A)=>(E[A.category]||(E[A.category]=[]),E[A.category].push(A),E),{});return n.jsxs("div",{className:"analyze-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("analyze.title")}),n.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),n.jsxs("div",{className:"analyze-grid",children:[n.jsxs("div",{className:"analyzer-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(j).map(([E,A])=>{var U;return n.jsxs("div",{className:"analyzer-category",children:[n.jsx("div",{className:"category-header",children:((U=L_.find(P=>P.id===E))==null?void 0:U.name)||E}),n.jsx("div",{className:"analyzer-list",children:A.map(P=>n.jsxs("div",{className:`analyzer-card ${u===P.id?"selected":""}`,onClick:()=>h(P.id),children:[n.jsx("div",{className:"analyzer-icon",children:P.icon}),n.jsxs("div",{className:"analyzer-content",children:[n.jsxs("div",{className:"analyzer-header",children:[n.jsx("span",{className:"analyzer-name",children:P.name}),P.recommended&&n.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),n.jsx("p",{className:"analyzer-desc",children:P.desc})]}),n.jsx("div",{className:"select-indicator",children:u===P.id&&"✓"})]},P.id))})]},E)})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.configuration")})}),n.jsxs("div",{className:"config-card",children:[n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.selectedAnalyzer")}),n.jsxs("div",{className:"selected-analyzer-display",children:[n.jsx("span",{className:"analyzer-icon",children:Ss[u]}),n.jsx("span",{children:(y=w.find(E=>E.id===u))==null?void 0:y.name})]})]}),n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.timeWindow")}),n.jsxs("div",{className:"time-selector",children:[n.jsx("button",{className:p===1?"active":"",onClick:()=>m(1),children:"1h"}),n.jsx("button",{className:p===6?"active":"",onClick:()=>m(6),children:"6h"}),n.jsx("button",{className:p===24?"active":"",onClick:()=>m(24),children:"24h"}),n.jsx("button",{className:p===72?"active":"",onClick:()=>m(72),children:"72h"}),n.jsx("button",{className:p===168?"active":"",onClick:()=>m(168),children:"7d"})]})]}),n.jsx("button",{onClick:b,disabled:r,className:"btn-primary btn-run",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),x&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:x})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("analyze.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>s("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),l&&n.jsxs("div",{className:"results-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.results")})}),n.jsxs("div",{className:"results-grid",children:[n.jsxs("div",{className:"result-summary-card",children:[n.jsxs("div",{className:"result-header",children:[n.jsx("span",{className:"result-icon",children:Ss[l.type]}),n.jsx("span",{className:"result-type",children:(_=w.find(E=>E.id===l.type))==null?void 0:_.name})]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.severity")}),n.jsx("span",{className:`severity-badge severity-${l.severity}`,children:l.severity.toUpperCase()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.score")}),n.jsx("span",{className:"score-value",children:l.score.toFixed(1)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.findings")}),n.jsx("span",{className:"findings-count",children:l.findings.length})]})]}),n.jsx("p",{className:"result-summary",children:l.summary})]}),l.findings.length>0&&n.jsxs("div",{className:"findings-card",children:[n.jsx("h4",{children:t("analyze.findingsList")}),n.jsx("div",{className:"findings-list",children:l.findings.map((E,A)=>n.jsxs("div",{className:"finding-item",children:[n.jsxs("div",{className:"finding-header",children:[n.jsx("span",{className:`severity-indicator severity-${E.severity}`}),n.jsx("span",{className:"finding-desc",children:T_(E.description,e)})]}),n.jsxs("div",{className:"finding-meta",children:[E.rule_name&&n.jsx("span",{className:"rule-name",children:E.rule_name}),n.jsxs("span",{className:"finding-score",children:["Score: ",E.score.toFixed(1)]}),E.evidence&&E.evidence.length>0&&n.jsxs("span",{className:"evidence-count",children:[E.evidence.length," events"]})]}),E.evidence&&E.evidence.length>0&&n.jsxs("div",{className:"evidence-list",children:[n.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),E.evidence.slice(0,5).map((U,P)=>{var q;return n.jsxs("div",{className:"evidence-item",children:[n.jsx("span",{className:"evidence-time",children:new Date(U.timestamp).toLocaleString()}),n.jsx("span",{className:"evidence-user",children:U.user||"-"}),n.jsx("span",{className:"evidence-computer",children:U.computer||"-"}),n.jsxs("span",{className:"evidence-msg",title:U.message,children:[(q=U.message)==null?void 0:q.substring(0,80),U.message&&U.message.length>80?"...":""]})]},P)}),E.evidence.length>5&&n.jsxs("div",{className:"evidence-more",children:["+",E.evidence.length-5," more events"]})]})]},A))})]})]})]}),n.jsxs("div",{className:"analyzer-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),n.jsx("div",{className:"info-grid",children:w.slice(0,4).map(E=>n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:E.icon}),n.jsxs("div",{className:"info-content",children:[n.jsx("h4",{children:E.name}),n.jsx("p",{children:E.desc})]})]},E.id))})]})]})}const Ym={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},O_={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function z_(){const{t}=at(),e=Qs(),[s,r]=S.useState(!1),[o,l]=S.useState([]),[c,u]=S.useState("24h"),[h,p]=S.useState(""),[m,x]=S.useState(!1),[N,w]=S.useState(null),b=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],j=async()=>{var O,T;r(!0),p("");try{const L=await Aj.analyze({time_window:c});l(L.data.results||[]),x(!0)}catch(L){p(((T=(O=L.response)==null?void 0:O.data)==null?void 0:T.error)||"Failed to run correlation analysis")}finally{r(!1)}},y=O=>Ym[O.toLowerCase()]||Ym.info,_=O=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[O.toLowerCase()]||O,E=O=>{for(const[T,L]of Object.entries(O_))if(O.includes(T))return L;return"🎯"},A=O=>{try{return new Date(O).toLocaleString()}catch{return O}},U=(O,T)=>{try{const L=new Date(O).getTime(),M=new Date(T).getTime()-L,C=Math.floor(M/1e3),I=Math.floor(C/60),W=Math.floor(I/60);return W>0?`${W}h ${I%60}m`:I>0?`${I}m ${C%60}s`:`${C}s`}catch{return"N/A"}},P=S.useMemo(()=>{if(o.length===0)return null;const O={critical:0,high:0,medium:0,low:0};return o.forEach(T=>{const L=T.severity.toLowerCase();O.hasOwnProperty(L)&&O[L]++}),{totalEvents:o.reduce((T,L)=>T+L.event_count,0),severityCounts:O,avgEventsPerRule:Math.round(o.reduce((T,L)=>T+L.event_count,0)/o.length)}},[o]),q=S.useMemo(()=>{if(o.length===0)return[];const O=Math.max(...o.map(T=>T.event_count));return o.map(T=>{const L=Math.round(T.event_count/O*20);return{...T,bar:"█".repeat(L)+"░".repeat(20-L)}})},[o]);return n.jsxs("div",{className:"correlation-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("correlation.title")}),n.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),n.jsxs("div",{className:"correlation-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("correlation.timeWindow")}),n.jsx("div",{className:"time-selector",children:b.map(O=>n.jsx("button",{className:c===O.value?"active":"",onClick:()=>u(O.value),children:O.label},O.value))})]}),n.jsx("button",{onClick:j,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:h})]}),m&&!s&&o.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🔍"}),n.jsx("h3",{children:t("correlation.noResults")}),n.jsx("p",{children:t("correlation.noResultsDesc")})]}),P&&n.jsxs("div",{className:"correlation-stats",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:o.length}),n.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📝"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:P.totalEvents.toLocaleString()}),n.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),n.jsxs("div",{className:"stat-card critical",children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:P.severityCounts.critical}),n.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),n.jsxs("div",{className:"stat-card high",children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:P.severityCounts.high}),n.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),q.length>0&&n.jsxs("div",{className:"attack-chain-visual",children:[n.jsx("h3",{children:t("correlation.attackChainTimeline")}),n.jsx("div",{className:"chain-bars",children:q.map((O,T)=>n.jsxs("div",{className:"chain-bar-item",children:[n.jsxs("div",{className:"chain-bar-header",children:[n.jsx("span",{className:"chain-icon",children:E(O.description)}),n.jsx("span",{className:"chain-name",children:O.rule_name}),n.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(O.severity)}})]}),n.jsx("div",{className:"chain-bar-track",children:n.jsx("span",{className:"chain-bar-fill",style:{width:`${O.event_count/P.totalEvents*100}%`,backgroundColor:y(O.severity)}})}),n.jsxs("div",{className:"chain-bar-meta",children:[n.jsxs("span",{className:"chain-events",children:[O.event_count," events"]}),n.jsx("span",{className:"chain-duration",children:U(O.start_time,O.end_time)})]})]},T))})]}),o.length>0&&n.jsxs("div",{className:"correlation-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("correlation.results")}),n.jsxs("span",{className:"results-count",children:[o.length," ",t("correlation.rulesTriggered")]})]}),n.jsx("div",{className:"results-grid",children:o.map((O,T)=>n.jsxs("div",{className:`correlation-card ${N===T?"expanded":""}`,onClick:()=>w(N===T?null:T),children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"rule-info",children:[n.jsx("span",{className:"severity-badge",style:{backgroundColor:y(O.severity)},children:_(O.severity)}),n.jsx("h4",{children:O.rule_name})]}),n.jsxs("div",{className:"event-count",children:[n.jsx("span",{className:"count-value",children:O.event_count}),n.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),n.jsx("div",{className:"card-icon",children:E(O.description)}),n.jsx("p",{className:"rule-description",children:O.description}),n.jsxs("div",{className:"card-footer",children:[n.jsxs("div",{className:"time-info",children:[n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),n.jsx("span",{className:"time-value",children:A(O.start_time)})]}),n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),n.jsx("span",{className:"time-value",children:A(O.end_time)})]})]}),n.jsxs("div",{className:"duration-badge",children:["⏱️ ",U(O.start_time,O.end_time)]})]}),N===T&&n.jsxs("div",{className:"card-expanded",children:[n.jsxs("div",{className:"expanded-section",children:[n.jsx("h5",{children:t("correlation.attackPattern")}),n.jsxs("div",{className:"pattern-visual",children:[n.jsx("span",{className:"pattern-icon",children:"🎯"}),n.jsx("span",{className:"pattern-text",children:O.rule_name}),n.jsx("span",{className:"pattern-arrow",children:"→"}),n.jsxs("span",{className:"pattern-target",children:[_(O.severity)," Risk"]})]})]}),n.jsxs("div",{className:"expanded-actions",children:[n.jsxs("button",{className:"action-btn",onClick:L=>{L.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"action-btn",onClick:L=>{L.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},T))})]}),n.jsxs("div",{className:"correlation-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("correlation.aboutCorrelation")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("correlation.aboutDesc")})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("correlation.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const Qm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function I_(){const{t}=at(),e=Qs(),[s,r]=S.useState(!1),[o,l]=S.useState(null),[c,u]=S.useState(""),[h,p]=S.useState("overview"),m=async()=>{var y,_;r(!0),u("");try{const E=await Tj.analyze();l(E.data)}catch(E){u(((_=(y=E.response)==null?void 0:y.data)==null?void 0:_.error)||"Failed to run multi-machine analysis")}finally{r(!1)}},x=y=>Qm[y.toLowerCase()]||Qm.info,N=y=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[y.toLowerCase()]||y,w=S.useMemo(()=>{if(!o||o.machines.length===0)return{nodes:[],edges:[]};const y=o.machines.map(E=>({id:E.id,name:E.name,ip:E.ip,role:E.role,suspicious:o.lateral_movement.some(A=>A.source_machine===E.name||A.target_machine===E.name)})),_=[];return o.lateral_movement.forEach(E=>{const A=y.find(P=>P.name===E.source_machine),U=y.find(P=>P.name===E.target_machine);A&&U&&_.push({from:A.id,to:U.id,user:E.user,severity:E.severity})}),{nodes:y,edges:_}},[o]),b=y=>{try{return new Date(y).toLocaleString()}catch{return y}},j=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return n.jsxs("div",{className:"multi-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("multi.title")}),n.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),n.jsx("div",{className:"multi-toolbar",children:n.jsx("button",{onClick:m,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:c})]}),o&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"analysis-summary",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.analysisId")}),n.jsx("p",{className:"analysis-id",children:o.analysis_id})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.machinesFound")}),n.jsx("p",{className:"summary-value",children:o.machines.length})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.suspiciousActivities")}),n.jsx("p",{className:"summary-value",style:{color:o.suspicious_count>0?"#dc2626":"#16a34a"},children:o.suspicious_count})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.lateralMovements")}),n.jsx("p",{className:"summary-value",children:o.lateral_movement.length})]})]}),n.jsx("p",{className:"summary-text",children:o.summary}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),n.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),n.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&n.jsx("div",{className:"tab-content",children:o.machines.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🖥️"}),n.jsx("h3",{children:t("multi.noMachines")}),n.jsx("p",{children:t("multi.noMachinesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"machine-graph",children:[n.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),n.jsxs("div",{className:"graph-container",children:[n.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,_)=>{const E=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return n.jsxs("div",{className:`graph-node ${E?"suspicious":""}`,style:{top:`${20+_%3*25}%`,left:`${20+_%4*20}%`},children:[n.jsx("span",{className:"node-icon",children:j(y.role)}),n.jsx("span",{className:"node-name",children:y.name}),n.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),E&&n.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),n.jsxs("div",{className:"graph-legend",children:[n.jsx("span",{className:"legend-item",children:"🖥️ Server"}),n.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),n.jsx("span",{className:"legend-item",children:"💻 Workstation"}),n.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),n.jsx("div",{className:"machines-grid",children:o.machines.map((y,_)=>{const E=o.lateral_movement.some(A=>A.source_machine===y.name||A.target_machine===y.name);return n.jsxs("div",{className:`machine-card ${E?"alert":""}`,children:[n.jsxs("div",{className:"machine-header",children:[n.jsx("span",{className:"machine-icon",children:j(y.role)}),n.jsx("h4",{children:y.name}),E&&n.jsx("span",{className:"alert-badge",children:"⚠️"})]}),n.jsxs("div",{className:"machine-details",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"IP:"}),n.jsx("span",{className:"value",children:y.ip||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),n.jsx("span",{className:"value",children:y.domain||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),n.jsx("span",{className:"value",children:y.role||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"OS:"}),n.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),n.jsx("span",{className:"value",children:b(y.last_seen)})]})]}),E&&n.jsx("div",{className:"machine-alert-indicator",children:n.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},_)})})]})}),h==="crossmachine"&&n.jsx("div",{className:"tab-content",children:o.cross_machine_activity.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noSuspiciousActivity")}),n.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):n.jsx("div",{className:"activity-list",children:o.cross_machine_activity.map((y,_)=>n.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[n.jsxs("div",{className:"activity-header",children:[n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-icon",children:"👤"}),n.jsx("span",{className:"user-name",children:y.user})]}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})]}),n.jsxs("div",{className:"activity-body",children:[n.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",y.machine_count," ",t("multi.machines"),":"]}),n.jsx("div",{className:"machine-tags",children:y.machines.map((E,A)=>n.jsx("span",{className:"machine-tag",children:E},A))}),n.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",y.login_count]}),n.jsxs("div",{className:"recommendation",children:[n.jsx("span",{className:"rec-icon",children:"💡"}),n.jsx("span",{children:y.recommendation})]})]})]},_))})}),h==="lateral"&&n.jsx("div",{className:"tab-content",children:o.lateral_movement.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noLateralMovement")}),n.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"lateral-summary",children:n.jsxs("div",{className:"lateral-stat",children:[n.jsx("span",{className:"stat-icon",children:"🔄"}),n.jsxs("span",{className:"stat-text",children:[o.lateral_movement.length," lateral movements detected"]})]})}),n.jsx("div",{className:"lateral-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("multi.time")}),n.jsx("th",{children:t("multi.source")}),n.jsx("th",{children:t("multi.target")}),n.jsx("th",{children:t("multi.user")}),n.jsx("th",{children:t("multi.event")}),n.jsx("th",{children:t("multi.description")}),n.jsx("th",{children:t("multi.severity")}),n.jsx("th",{children:"MITRE"})]})}),n.jsx("tbody",{children:o.lateral_movement.map((y,_)=>n.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[n.jsx("td",{className:"time-cell",children:b(y.timestamp)}),n.jsx("td",{className:"source-cell",children:n.jsx("span",{className:"machine-badge source",children:y.source_machine})}),n.jsx("td",{className:"target-cell",children:n.jsx("span",{className:"machine-badge target",children:y.target_machine})}),n.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),n.jsx("td",{className:"event-cell",children:y.event_id}),n.jsx("td",{className:"desc-cell",children:y.description}),n.jsx("td",{children:n.jsx("span",{className:"severity-badge",style:{backgroundColor:x(y.severity)},children:N(y.severity)})}),n.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((E,A)=>n.jsx("span",{className:"mitre-tag",children:E},A))})]},_))})]})})]})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("multi.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function F_(){const{t}=at(),[e,s]=S.useState("SELECT * FROM events LIMIT 10"),[r,o]=S.useState(!1),[l,c]=S.useState(null),[u,h]=S.useState(""),[p,m]=S.useState([]),[x,N]=S.useState(!1),[w,b]=S.useState(""),j=S.useRef(null),y=async()=>{var L,B;if(!e.trim()){h(t("query.sqlRequired"));return}o(!0),h(""),c(null);const T=performance.now();try{const M=await Lj.execute({query:e,limit:100}),C=((performance.now()-T)/1e3).toFixed(2);b(C),c(M.data),_(e,!0,M.data.count,C)}catch(M){const C=((performance.now()-T)/1e3).toFixed(2);h(((B=(L=M.response)==null?void 0:L.data)==null?void 0:B.error)||"Failed to execute query"),_(e,!1,0,C),_(e,!1,0)}finally{o(!1)}},_=(T,L,B,M)=>{const C={id:Date.now().toString(),sql:T,timestamp:new Date().toISOString(),success:L,rowCount:B,duration:M};m(I=>[C,...I.slice(0,49)])},E=T=>{s(T.sql),N(!1)},A=()=>{m([])},U=T=>{const L=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],B=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],M=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],C=[],I=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,W=T.match(I)||[];let ie=0;for(const R of W){const J=R.toUpperCase();R.startsWith("'")&&R.endsWith("'")?C.push(n.jsx("span",{className:"sql-string",children:R},ie++)):R.startsWith('"')&&R.endsWith('"')?C.push(n.jsx("span",{className:"sql-string",children:R},ie++)):M.includes(R)?C.push(n.jsx("span",{className:"sql-operator",children:R},ie++)):B.includes(J)?C.push(n.jsx("span",{className:"sql-function",children:R},ie++)):L.includes(J)?C.push(n.jsx("span",{className:"sql-keyword",children:R},ie++)):/^\d+$/.test(R)?C.push(n.jsx("span",{className:"sql-number",children:R},ie++)):C.push(n.jsx("span",{className:"sql-identifier",children:R},ie++))}return n.jsx(n.Fragment,{children:C})},P=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],q=T=>{T.key==="Enter"&&(T.ctrlKey||T.metaKey)&&(T.preventDefault(),y())},O=T=>{if(!l)return;let L,B,M;if(T==="json")L=JSON.stringify(l,null,2),B="query_result.json",M="application/json";else{const ie=l.columns.join(","),R=l.rows.map(J=>l.columns.map(X=>{const re=J[X];if(re==null)return"";const Z=String(re);return Z.includes(",")||Z.includes('"')?`"${Z.replace(/"/g,'""')}"`:Z}).join(",")).join(`
`);L=ie+`
`+R,B="query_result.csv",M="text/csv"}const C=new Blob([L],{type:M}),I=URL.createObjectURL(C),W=document.createElement("a");W.href=I,W.download=B,W.click(),URL.revokeObjectURL(I)};return n.jsxs("div",{className:"query-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("query.title")}),n.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),n.jsxs("div",{className:"query-toolbar",children:[n.jsxs("div",{className:"preset-queries",children:[n.jsx("label",{children:t("query.presets")}),n.jsx("div",{className:"preset-buttons",children:P.map((T,L)=>n.jsx("button",{className:"preset-btn",onClick:()=>s(T.sql),title:T.sql,children:T.label},L))})]}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("button",{className:"history-btn",onClick:()=>N(!x),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),x&&n.jsxs("div",{className:"query-history-panel",children:[n.jsxs("div",{className:"history-header",children:[n.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),n.jsx("button",{className:"clear-btn",onClick:A,children:"🗑️ Clear"})]}),n.jsx("div",{className:"history-list",children:p.length===0?n.jsx("p",{className:"empty-history",children:"No query history"}):p.map(T=>n.jsxs("div",{className:`history-item ${T.success?"success":"error"}`,onClick:()=>E(T),children:[n.jsx("div",{className:"history-sql",children:T.sql}),n.jsxs("div",{className:"history-meta",children:[n.jsx("span",{className:"history-status",children:T.success?"✓":"✗"}),n.jsxs("span",{className:"history-rows",children:[T.rowCount," rows"]}),T.duration&&n.jsxs("span",{className:"history-duration",children:[T.duration,"s"]}),n.jsx("span",{className:"history-time",children:new Date(T.timestamp).toLocaleTimeString()})]})]},T.id))})]}),n.jsxs("div",{className:"query-editor",children:[n.jsxs("div",{className:"editor-header",children:[n.jsx("label",{children:t("query.sqlQuery")}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"format-btn",onClick:()=>{const T=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();s(T)},children:"🎨 Format"})})]}),n.jsxs("div",{className:"editor-wrapper",children:[n.jsx("div",{className:"sql-highlight",children:U(e)}),n.jsx("textarea",{ref:j,className:"sql-input",value:e,onChange:T=>s(T.target.value),onKeyDown:q,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),n.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),n.jsxs("div",{className:"query-actions",children:[n.jsx("button",{onClick:y,disabled:r,className:"btn-primary",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),l&&n.jsxs("div",{className:"result-actions",children:[n.jsx("button",{className:"export-btn",onClick:()=>O("json"),children:"📥 JSON"}),n.jsx("button",{className:"export-btn",onClick:()=>O("csv"),children:"📥 CSV"})]})]}),u&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:u})]}),l&&n.jsxs("div",{className:"query-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("query.results")}),n.jsxs("div",{className:"results-meta",children:[n.jsxs("span",{className:"results-count",children:[l.count," ",t("query.rowsReturned")]}),w&&n.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),l.columns.length>0&&l.rows.length>0?n.jsx("div",{className:"results-table-wrapper",children:n.jsxs("table",{className:"results-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"row-num",children:"#"}),l.columns.map((T,L)=>n.jsx("th",{children:T},L))]})}),n.jsx("tbody",{children:l.rows.map((T,L)=>n.jsxs("tr",{children:[n.jsx("td",{className:"row-num",children:L+1}),l.columns.map((B,M)=>n.jsx("td",{className:T[B]===null?"null-value":"",children:B_(T[B])},M))]},L))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📭"}),n.jsx("h3",{children:t("query.noResults")}),n.jsx("p",{children:t("query.noResultsDesc")})]})]}),n.jsxs("div",{className:"query-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("query.aboutQuery")})}),n.jsxs("div",{className:"info-content",children:[n.jsx("p",{children:t("query.aboutDesc")}),n.jsxs("div",{className:"example-queries",children:[n.jsx("h4",{children:t("query.exampleQueries")}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),n.jsx("p",{children:t("query.example1Desc")})]}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),n.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function B_(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const $_={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},U_={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function W_(){const{t}=at(),e=Qs(),[s,r]=S.useState(!1),[o,l]=S.useState(null),[c,u]=S.useState([]),[h,p]=S.useState("analyze"),[m,x]=S.useState(24),[N,w]=S.useState(""),[b,j]=S.useState(null),y=async()=>{var T,L;r(!0),w("");try{const B=await Cp.analyze({hours:m});l(B.data)}catch(B){w(((L=(T=B.response)==null?void 0:T.data)==null?void 0:L.error)||"Failed to run UEBA analysis")}finally{r(!1)}},_=async()=>{r(!0),w("");try{const M=((await Cp.profiles()).data.profiles||[]).map(C=>({...C,risk_score:Math.random()*100}));u(M)}catch(T){w(T.message||"Failed to load profiles")}finally{r(!1)}},E=T=>$_[T.toLowerCase()]||"#2563eb",A=T=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[T.toLowerCase()]||T,U=T=>U_[T]||{icon:"⚠️",color:"#2563eb",description:T},P=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],q=S.useMemo(()=>{if(!o)return null;const T=o.total_anomaly||1,L=o.high_risk_count/T,B=o.medium_risk_count/T,M=1-L-B;return{high:{value:o.high_risk_count,percentage:L*100},medium:{value:o.medium_risk_count,percentage:B*100},low:{value:T-o.high_risk_count-o.medium_risk_count,percentage:M*100}}},[o]),O=T=>{try{return new Date(T).toLocaleString()}catch{return T}};return n.jsxs("div",{className:"ueba-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("ueba.title")}),n.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),n.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),_()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"ueba-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("ueba.timeWindow")}),n.jsx("div",{className:"time-selector",children:P.map(T=>n.jsx("button",{className:m===T.value?"active":"",onClick:()=>x(T.value),children:T.label},T.value))})]}),n.jsx("button",{onClick:y,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),N&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:N})]}),o&&n.jsxs("div",{className:"ueba-results",children:[n.jsxs("div",{className:"results-summary",children:[n.jsxs("div",{className:"summary-card large",children:[n.jsx("div",{className:"summary-icon",children:"📊"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.totalAnomalies")}),n.jsx("p",{className:"summary-value",children:o.total_anomaly}),n.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:m})})]})]}),q&&n.jsxs("div",{className:"risk-gauge-card",children:[n.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),n.jsxs("div",{className:"risk-gauge",children:[n.jsxs("div",{className:"gauge-bar",children:[n.jsx("div",{className:"gauge-segment critical",style:{width:`${q.high.percentage}%`}}),n.jsx("div",{className:"gauge-segment warning",style:{width:`${q.medium.percentage}%`}}),n.jsx("div",{className:"gauge-segment low",style:{width:`${q.low.percentage}%`}})]}),n.jsxs("div",{className:"gauge-legend",children:[n.jsxs("span",{className:"legend-item critical",children:["🔴 ",q.high.value," ",t("severity.critical")||"Critical"]}),n.jsxs("span",{className:"legend-item warning",children:["🟠 ",q.medium.value," ",t("severity.medium")||"Medium"]}),n.jsxs("span",{className:"legend-item low",children:["🟢 ",q.low.value," ",t("severity.low")||"Low"]})]})]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:"⏱️"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.duration")}),n.jsx("p",{className:"summary-value small",children:o.duration})]})]})]}),o.anomalies.length===0?n.jsxs("div",{className:"empty-state success",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("ueba.noAnomalies")}),n.jsx("p",{children:t("ueba.noAnomaliesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):n.jsxs("div",{className:"anomalies-list",children:[n.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",o.anomalies.length,")"]}),n.jsx("div",{className:"anomaly-timeline",children:o.anomalies.map((T,L)=>{const B=U(T.type);return n.jsxs("div",{className:`anomaly-item ${b===L?"expanded":""}`,onClick:()=>j(b===L?null:L),children:[n.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:B.color}}),n.jsx("div",{className:"anomaly-icon",children:B.icon}),n.jsxs("div",{className:"anomaly-content",children:[n.jsxs("div",{className:"anomaly-header",children:[n.jsx("span",{className:"anomaly-type",children:T.type.replace(/_/g," ")}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:E(T.severity)},children:A(T.severity)})]}),T.user&&n.jsxs("div",{className:"anomaly-user",children:["👤 ",n.jsx("span",{children:T.user})]}),n.jsx("p",{className:"anomaly-description",children:T.description}),n.jsxs("div",{className:"anomaly-meta",children:[n.jsxs("span",{className:"anomaly-score",children:["Score: ",n.jsx("strong",{children:T.score.toFixed(2)})]}),T.event_ids&&T.event_ids.length>0&&n.jsxs("span",{className:"anomaly-events",children:[T.event_ids.length," related events"]})]})]}),b===L&&n.jsxs("div",{className:"anomaly-expanded",children:[T.details&&Object.keys(T.details).length>0&&n.jsxs("div",{className:"anomaly-details-section",children:[n.jsx("h5",{children:t("ueba.details")}),n.jsx("div",{className:"details-grid",children:Object.entries(T.details).map(([M,C])=>n.jsxs("div",{className:"detail-item",children:[n.jsxs("span",{className:"detail-key",children:[M,":"]}),n.jsx("span",{className:"detail-value",children:String(C)})]},M))})]}),n.jsxs("div",{className:"anomaly-actions",children:[n.jsx("button",{className:"action-btn",onClick:M=>{M.stopPropagation(),e("/events",{state:{user:T.user}})},children:"📊 View Events"}),n.jsx("button",{className:"action-btn",onClick:M=>{M.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},L)})})]})]})]}),h==="profiles"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"profiles-header",children:[n.jsx("h3",{children:t("ueba.userProfiles")}),n.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),s?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"btn-spinner"}),n.jsx("span",{children:"Loading profiles..."})]}):c.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"👥"}),n.jsx("h3",{children:t("ueba.noProfiles")}),n.jsx("p",{children:t("ueba.noProfilesDesc")}),n.jsxs("div",{className:"empty-hint",children:[n.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),n.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):n.jsx("div",{className:"profiles-grid",children:c.map((T,L)=>n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-header",children:[n.jsx("div",{className:"profile-avatar",children:n.jsx("span",{className:"avatar-icon",children:"👤"})}),n.jsxs("div",{className:"profile-info",children:[n.jsx("h4",{children:T.user}),n.jsxs("p",{className:"profile-meta",children:["Last updated: ",O(T.last_updated)]})]}),T.risk_score!==void 0&&n.jsx("div",{className:`risk-indicator ${T.risk_score>70?"high":T.risk_score>30?"medium":"low"}`,children:T.risk_score.toFixed(0)})]}),n.jsxs("div",{className:"profile-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),n.jsx("span",{className:"stat-value",children:T.login_count})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),n.jsx("span",{className:"stat-value",children:T.avg_events_per_day.toFixed(1)})]})]}),T.risk_score!==void 0&&n.jsxs("div",{className:"profile-risk-bar",children:[n.jsx("div",{className:"risk-bar-track",children:n.jsx("div",{className:`risk-bar-fill ${T.risk_score>70?"high":T.risk_score>30?"medium":"low"}`,style:{width:`${T.risk_score}%`}})}),n.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},L))})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("ueba.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}const H_=[{value:"event_id",label:"Event ID"},{value:"source",label:"Source"},{value:"log_name",label:"Log Name"},{value:"computer",label:"Computer"},{value:"user",label:"User"},{value:"user_sid",label:"User SID"},{value:"ip_address",label:"IP Address"}],V_=[{value:"equals",label:"Equals"},{value:"contains",label:"Contains"},{value:"starts_with",label:"Starts With"},{value:"ends_with",label:"Ends With"}],Km=[{value:60,label:"1 hour"},{value:360,label:"6 hours"},{value:1440,label:"24 hours"},{value:10080,label:"7 days"},{value:43200,label:"30 days"},{value:0,label:"Permanent"}];function q_(){const{t}=at(),[e,s]=S.useState([]),[r,o]=S.useState(!1),[l,c]=S.useState(""),[u,h]=S.useState(!1),[p,m]=S.useState(!1),[x,N]=S.useState(null),[w,b]=S.useState(null),[j,y]=S.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]}),[_,E]=S.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[],enabled:!0});S.useEffect(()=>{A()},[]);const A=async()=>{o(!0),c("");try{const R=await Ar.list();s(R.data.rules||[])}catch(R){c(R.message||"Failed to load suppress rules")}finally{o(!1)}},U=()=>{y({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]})},P=async()=>{if(!j.name.trim()){alert("Rule name is required");return}o(!0),c("");try{await Ar.create({name:j.name,duration:j.duration,scope:j.scope,expires_at:j.expires_at,conditions:j.conditions,enabled:!0}),h(!1),U(),A()}catch(R){c(R.message||"Failed to create rule")}finally{o(!1)}},q=R=>{N(R),E({name:R.name,duration:R.duration,scope:R.scope,expires_at:R.expires_at,conditions:R.conditions||[],enabled:R.enabled}),m(!0)},O=async()=>{if(x){if(!_.name.trim()){alert("Rule name is required");return}o(!0),c("");try{await Ar.update(x.id,{name:_.name,duration:_.duration,scope:_.scope,expires_at:_.expires_at,conditions:_.conditions,enabled:_.enabled}),m(!1),N(null),A()}catch(R){c(R.message||"Failed to update rule")}finally{o(!1)}}},T=async R=>{if(confirm("Are you sure you want to delete this rule?")){o(!0),c("");try{await Ar.delete(R),A()}catch(J){c(J.message||"Failed to delete rule")}finally{o(!1)}}},L=async(R,J)=>{o(!0),c("");try{await Ar.toggle(R,!J),A()}catch(X){c(X.message||"Failed to toggle rule")}finally{o(!1)}},B=(R,J)=>{R([...J,{field:"event_id",operator:"equals",value:""}])},M=(R,J,X,re,Z)=>{const z=[...J];z[X]={...z[X],[re]:Z},R(z)},C=(R,J,X)=>{R(J.filter((re,Z)=>Z!==X))},I=R=>R===0?"Permanent":R<60?`${R}m`:R<1440?`${Math.floor(R/60)}h`:`${Math.floor(R/1440)}d`,W=R=>!R||R.length===0?"No conditions (global suppress)":R.map(J=>`${J.field} ${J.operator} "${J.value}"`).join(" AND "),ie=(R,J,X)=>n.jsxs("div",{className:"conditions-section",children:[n.jsxs("div",{className:"conditions-header",children:[n.jsx("label",{children:"Conditions"}),n.jsx("button",{type:"button",className:"btn-add-condition",onClick:()=>B(J,R),children:"+ Add Condition"})]}),R.length===0?n.jsx("p",{className:"no-conditions",children:"No conditions - will suppress all matching alerts"}):n.jsx("div",{className:"conditions-list",children:R.map((re,Z)=>n.jsxs("div",{className:"condition-row",children:[n.jsx("select",{value:re.field,onChange:z=>M(J,R,Z,"field",z.target.value),children:H_.map(z=>n.jsx("option",{value:z.value,children:z.label},z.value))}),n.jsx("select",{value:re.operator,onChange:z=>M(J,R,Z,"operator",z.target.value),children:V_.map(z=>n.jsx("option",{value:z.value,children:z.label},z.value))}),n.jsx("input",{type:"text",value:re.value,onChange:z=>M(J,R,Z,"value",z.target.value),placeholder:"Value"}),n.jsx("button",{type:"button",className:"btn-remove-condition",onClick:()=>C(J,R,Z),children:"×"})]},Z))})]});return n.jsxs("div",{className:"suppress-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("suppress.title")}),n.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),n.jsx("div",{className:"suppress-toolbar",children:n.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),l&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:l})]}),r&&e.length===0?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"spinner"}),n.jsx("span",{children:t("common.loading")})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("h3",{children:t("suppress.noRules")}),n.jsx("p",{children:t("suppress.noRulesDesc")})]}):n.jsx("div",{className:"rules-grid",children:e.map(R=>n.jsxs("div",{className:`rule-card ${R.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`status-dot ${R.enabled?"enabled":"disabled"}`}),n.jsx("span",{className:"rule-name",children:R.name})]}),n.jsxs("div",{className:"rule-actions-header",children:[n.jsx("button",{className:"btn-icon",onClick:()=>q(R),title:"Edit",children:"✏️"}),n.jsx("button",{className:"btn-icon delete",onClick:()=>T(R.id),title:t("suppress.delete"),children:"🗑️"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`scope-badge scope-${R.scope}`,children:[R.scope==="global"?"🌐":R.scope==="user"?"👤":"💻"," ",R.scope]}),n.jsxs("span",{className:"duration-badge",children:["⏱️ ",I(R.duration)]}),R.expires_at&&n.jsxs("span",{className:"expires-badge",children:["📅 ",new Date(R.expires_at).toLocaleDateString()]})]}),n.jsxs("div",{className:"rule-conditions",children:[n.jsx("label",{children:"Conditions:"}),n.jsx("p",{className:"conditions-text",children:W(R.conditions)})]}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("span",{className:"created-at",children:["Created: ",new Date(R.created_at).toLocaleDateString()]}),n.jsx("button",{className:`toggle-btn ${R.enabled?"enabled":"disabled"}`,onClick:()=>L(R.id,R.enabled),children:R.enabled?t("suppress.enabled"):t("suppress.disabled")})]})]},R.id))}),u&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:j.name,onChange:R=>y({...j,name:R.target.value}),placeholder:"e.g. suppress-admin-alerts"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:j.scope,onChange:R=>y({...j,scope:R.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:j.duration,onChange:R=>y({...j,duration:parseInt(R.target.value)}),children:Km.map(R=>n.jsx("option",{value:R.value,children:R.label},R.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:j.expires_at,onChange:R=>y({...j,expires_at:R.target.value})})]}),ie(j.conditions,R=>y({...j,conditions:R}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:P,disabled:!j.name||r,children:t("suppress.create")})]})]})}),p&&x&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:n.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>m(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:_.name,onChange:R=>E({..._,name:R.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:_.scope,onChange:R=>E({..._,scope:R.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:_.duration,onChange:R=>E({..._,duration:parseInt(R.target.value)}),children:Km.map(R=>n.jsx("option",{value:R.value,children:R.label},R.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:_.expires_at,onChange:R=>E({..._,expires_at:R.target.value})})]}),n.jsx("div",{className:"form-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:_.enabled,onChange:R=>E({..._,enabled:R.target.checked})}),n.jsx("span",{children:"Enabled"})]})}),ie(_.conditions,R=>E({..._,conditions:R}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>m(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:O,disabled:!_.name||r,children:"Save Changes"})]})]})}),w&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:n.jsxs("div",{className:"modal-content",onClick:R=>R.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>b(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:w.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Scope:"}),n.jsx("span",{className:"detail-value",children:w.scope})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Duration:"}),n.jsx("span",{className:"detail-value",children:I(w.duration)})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${w.enabled?"enabled":"disabled"}`,children:w.enabled?"Enabled":"Disabled"})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Conditions"}),n.jsx("p",{className:"detail-description",children:W(w.conditions)})]})]})]})}),n.jsxs("div",{className:"suppress-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("suppress.about")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("suppress.aboutDesc")})})]}),n.jsx("style",{children:`
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
      `})]})}function Y_(){var L,B;const{t}=at(),[e,s]=S.useState([]),[r,o]=S.useState(null),[l,c]=S.useState(!1),[u,h]=S.useState(null),[p,m]=S.useState("all"),[x,N]=S.useState(0),w=S.useRef(null),b=S.useRef(null),j=S.useRef(null),y=5;S.useEffect(()=>(_(),()=>{w.current&&w.current.close(),j.current&&clearTimeout(j.current)}),[]),S.useEffect(()=>{b.current&&(b.current.scrollTop=0)},[e]);const _=()=>{h(null);const M=Pj.streamEvents(C=>{s(I=>{const W=[C,...I];return W.length>100&&W.pop(),W}),N(0)},C=>{o({total_events:C.total_events||0,events_per_sec:C.events_per_sec||0,uptime:C.uptime||"0s",alerts:C.alerts||0})},C=>{console.error("Stream error:",C),c(!1),C.type==="error"&&(h("Connection lost. Reconnecting..."),U())});M.onopen=()=>{c(!0),h(null)},w.current=M},E=()=>{w.current&&(w.current.close(),w.current=null),j.current&&(clearTimeout(j.current),j.current=null),c(!1),N(0)},A=()=>{j.current&&(clearTimeout(j.current),j.current=null),E(),_()},U=()=>{if(x>=y){h("Max reconnection attempts reached. Please click Connect to retry.");return}const M=Math.min(1e3*Math.pow(2,x),3e4);N(C=>C+1),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{A()},M)},P=()=>{s([])},q=M=>{switch(M==null?void 0:M.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},O=e.filter(M=>{var C;return p==="all"?!0:((C=M.level)==null?void 0:C.toLowerCase())===p}),T=M=>{try{return new Date(M).toLocaleTimeString()}catch{return M}};return n.jsxs("div",{className:"live-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("live.title")}),n.jsxs("div",{className:`connection-status ${l?"connected":"disconnected"}`,children:[n.jsx("span",{className:"status-dot"}),l?"Connected":"Disconnected"]})]}),n.jsxs("div",{className:"header-actions",children:[n.jsxs("select",{className:"filter-select",value:p,onChange:M=>m(M.target.value),children:[n.jsx("option",{value:"all",children:"All Levels"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"error",children:"Error"}),n.jsx("option",{value:"warning",children:"Warning"}),n.jsx("option",{value:"info",children:"Info"}),n.jsx("option",{value:"verbose",children:"Verbose"})]}),n.jsx("button",{className:"btn-secondary",onClick:P,children:"Clear"}),l?n.jsx("button",{className:"btn-danger",onClick:E,children:"Disconnect"}):n.jsx("button",{className:"btn-primary",onClick:A,children:"Connect"})]})]}),u&&n.jsxs("div",{className:"error-banner",children:[u,x>0&&x<y&&n.jsxs("span",{className:"reconnect-info",children:[" ","Reconnecting in ",Math.min(1e3*Math.pow(2,x-1),3e4)/1e3,"s... (Attempt ",x,"/",y,")"]})]}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:((L=r==null?void 0:r.total_events)==null?void 0:L.toLocaleString())||"0"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Events/sec"}),n.jsx("span",{className:"stat-value",children:((B=r==null?void 0:r.events_per_sec)==null?void 0:B.toFixed(2))||"0.00"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Alerts"}),n.jsx("span",{className:"stat-value alerts",children:(r==null?void 0:r.alerts)||0})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Uptime"}),n.jsx("span",{className:"stat-value mono",children:(r==null?void 0:r.uptime)||"0s"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Buffered"}),n.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),n.jsx("div",{className:"events-container",ref:b,children:O.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📡"}),n.jsx("div",{className:"empty-text",children:l?"Waiting for events...":"Click Connect to start monitoring"})]}):n.jsx("div",{className:"events-list",children:O.map((M,C)=>n.jsxs("div",{className:"event-card",style:{borderLeftColor:q(M.level)},children:[n.jsxs("div",{className:"event-header",children:[n.jsx("span",{className:"event-time",children:T(M.timestamp)}),n.jsx("span",{className:"event-level",style:{color:q(M.level)},children:M.level||"UNKNOWN"}),n.jsxs("span",{className:"event-id",children:["Event #",M.event_id]}),n.jsx("span",{className:"event-source",children:M.source||M.log_name})]}),n.jsx("div",{className:"event-body",children:n.jsx("div",{className:"event-message",children:M.message||"(No message)"})}),n.jsxs("div",{className:"event-footer",children:[n.jsx("span",{className:"event-computer",children:M.computer}),M.user&&n.jsx("span",{className:"event-user",children:M.user}),M.ip_address&&n.jsx("span",{className:"event-ip",children:M.ip_address})]})]},`${M.id}-${C}`))})}),n.jsx("style",{children:`
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
      `})]})}function Q_(){const{t}=at(),[e,s]=S.useState(!1),[r,o]=S.useState(""),[l,c]=S.useState(2),[u,h]=S.useState(""),[p,m]=S.useState(""),[x,N]=S.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[w,b]=S.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[j,y]=S.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,includeProcesses:!0,includeNetwork:!0,includeDlls:!1,includeDrivers:!1,includeUsers:!0,includeSysInfo:!0,compress:!0,calculateHash:!0}),_=B=>{N(M=>M.map(C=>C.id===B?{...C,enabled:!C.enabled}:C))},E=B=>{b(M=>M.map(C=>C.id===B?{...C,enabled:!C.enabled}:C))},A=B=>{y(M=>({...M,[B]:!M[B]}))},U=async()=>{s(!0),o(t("collect.starting"));const B=x.filter(M=>M.enabled).map(M=>M.name);try{const M=await _p.collect({sources:B,options:{workers:l,include_prefetch:j.includePrefetch,include_registry:j.includeRegistry,include_system_info:j.includeSystemInfo,include_shimcache:j.includeShimcache,include_amcache:j.includeAmcache,include_userassist:j.includeUserassist,include_tasks:j.includeTasks,include_logs:j.includeLogs,include_processes:j.includeProcesses,include_network:j.includeNetwork,include_dlls:j.includeDlls,include_drivers:j.includeDrivers,include_users:j.includeUsers,compress:j.compress,calculate_hash:j.calculateHash}});M.data.status==="completed"?o(`${t("collect.completed")}
${M.data.output_path}
Duration: ${M.data.duration}`):M.data.status==="error"?o(`${t("collect.failed")}: ${M.data.message}`):o(`${t("collect.collecting")}...
${t("collect.sources")}: ${B.join(", ")}`)}catch(M){o(`${t("collect.failed")}: ${M instanceof Error?M.message:"Unknown error"}`)}s(!1)},P=async()=>{var B;s(!0),o(t("collect.importing"));try{const M=u.split(`
`).map(I=>I.trim()).filter(I=>I.length>0);if(M.length===0){o(t("collect.noFilesSelected")),s(!1);return}const C=await Sp.importLogs(M);C.data.success?o(`${t("collect.importDone")}
Imported: ${C.data.files_imported}
Failed: ${C.data.files_failed}
Events: ${C.data.events_imported}`):o(`${t("collect.failed")}: ${((B=C.data.errors)==null?void 0:B.join(", "))||"Unknown error"}`)}catch(M){o(`${t("collect.failed")}: ${M instanceof Error?M.message:"Unknown error"}`)}s(!1)},q=async()=>{s(!0),o(t("collect.importing")+" "+t("collect.withAlert"));try{const B=u.split(`
`).map(C=>C.trim()).filter(C=>C.length>0);if(B.length===0){o(t("collect.noFilesSelected")),s(!1);return}const M=await Sp.importLogsWithAlert(B);if(M.data.status==="completed"){let C=`${t("collect.importDone")}
Imported: ${M.data.imported}
Failed: ${M.data.failed}
Events: ${M.data.total_events}`;M.data.alerts_generated!==void 0&&(C+=`
Alerts: ${M.data.alerts_generated}`),M.data.alert_error&&(C+=`
Alert Error: ${M.data.alert_error}`),o(C)}else o(`${t("collect.failed")}: ${M.data.message||"Unknown error"}`)}catch(B){o(`${t("collect.failed")}: ${B instanceof Error?B.message:"Unknown error"}`)}s(!1)},O=async()=>{s(!0),o(t("collect.evtx2csvConverting")||"Converting EVTX to CSV...");try{const B=u.split(`
`).map(C=>C.trim()).filter(C=>C.length>0);if(B.length===0){o(t("collect.noFilesSelected")),s(!1);return}const M=await _p.evtx2csv(B);if(M.data){let C=`${t("collect.evtx2csvDone")||"Conversion completed"}
`;C+=`Total Events: ${M.data.total_events}
`,C+=`Successful: ${M.data.total_files-M.data.failed_files}
`,C+=`Failed: ${M.data.failed_files}
`,M.data.results&&M.data.results.length>0&&(C+=`
Files:
`,M.data.results.forEach(I=>{I.error?C+=`- ${I.input_path}: ERROR - ${I.error}
`:C+=`- ${I.input_path} -> ${I.output_path} (${I.event_count} events)
`})),M.data.errors&&M.data.errors.length>0&&(C+=`
Errors:
`+M.data.errors.join(`
`)),o(C)}else o(`${t("collect.failed")}: Unknown error`)}catch(B){o(`${t("collect.failed")}: ${B instanceof Error?B.message:"Unknown error"}`)}s(!1)},T=x.reduce((B,M)=>(B[M.category]||(B[M.category]=[]),B[M.category].push(M),B),{}),L=w.reduce((B,M)=>(B[M.category]||(B[M.category]=[]),B[M.category].push(M),B),{});return n.jsxs("div",{className:"collect-page",children:[n.jsx("div",{className:"page-header",children:n.jsx("h2",{children:t("collect.title")})}),n.jsxs("div",{className:"collect-grid",children:[n.jsxs("div",{className:"collect-section main-options",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("collect.oneClickCollection")}),n.jsx("p",{children:t("collect.oneClickDesc")})]}),n.jsxs("div",{className:"options-group",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.includeSystemInfo,onChange:()=>A("includeSystemInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),j.includeSystemInfo&&n.jsxs("div",{className:"sub-options",children:[n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeSysInfo,onChange:()=>A("includeSysInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeProcesses,onChange:()=>A("includeProcesses")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemProcesses")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeNetwork,onChange:()=>A("includeNetwork")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemNetwork")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeDlls,onChange:()=>A("includeDlls")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDlls")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeDrivers,onChange:()=>A("includeDrivers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDrivers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeUsers,onChange:()=>A("includeUsers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemUsers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeRegistry,onChange:()=>A("includeRegistry")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemRegistry")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeTasks,onChange:()=>A("includeTasks")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemTasks")})]})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.includeLogs,onChange:()=>A("includeLogs")}),n.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),n.jsxs("div",{className:"performance-section",children:[n.jsx("h4",{children:t("collect.performanceSettings")}),n.jsxs("div",{className:"performance-grid",children:[n.jsxs("div",{className:"performance-item",children:[n.jsx("label",{children:t("collect.threads")}),n.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(B=>n.jsx("button",{className:l===B?"active":"",onClick:()=>c(B),children:B},B))})]}),n.jsxs("div",{className:"performance-hint",children:[n.jsx("span",{className:"hint-icon",children:"💡"}),n.jsx("span",{children:t("collect.threadHint")})]})]})]}),n.jsxs("div",{className:"compression-options",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.compress,onChange:()=>A("compress")}),n.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.calculateHash,onChange:()=>A("calculateHash")}),n.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:U,disabled:e,className:"btn-primary btn-collect",children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n.jsx("polyline",{points:"7 10 12 15 17 10"}),n.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),n.jsx("button",{onClick:P,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")}),n.jsx("button",{onClick:q,disabled:e,className:"btn-secondary btn-import-alert",children:t("collect.importWithAlertBtn")}),n.jsx("button",{onClick:O,disabled:e,className:"btn-secondary btn-evtx2csv",children:t("collect.evtx2csvBtn")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[n.jsx("h3",{children:t("collect.logSources")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(T).map(([B,M])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:B}),M.map(C=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:C.enabled,onChange:()=>_(C.id)}),n.jsx("span",{className:"checkbox-text",children:C.name})]},C.id))]},B))]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.excludedLogs")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(L).map(([B,M])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),M.map(C=>n.jsxs("label",{className:"checkbox-label exclude",children:[n.jsx("input",{type:"checkbox",checked:C.enabled,onChange:()=>E(C.id)}),n.jsx("span",{className:"checkbox-text",children:C.name})]},C.id))]},B)),n.jsxs("div",{className:"custom-exclude",children:[n.jsx("label",{children:t("collect.customExclude")}),n.jsx("input",{type:"text",value:p,onChange:B=>m(B.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.customPaths")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),n.jsxs("div",{className:"custom-path-section",children:[n.jsx("label",{children:t("collect.customPathsLabel")}),n.jsx("textarea",{value:u,onChange:B=>h(B.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),n.jsxs("div",{className:"additional-options",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.additionalArtifacts")})}),n.jsxs("div",{className:"artifacts-grid",children:[n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includePrefetch,onChange:()=>A("includePrefetch")}),n.jsx("div",{className:"artifact-icon",children:"📁"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),n.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeShimcache,onChange:()=>A("includeShimcache")}),n.jsx("div",{className:"artifact-icon",children:"🔧"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeAmcache,onChange:()=>A("includeAmcache")}),n.jsx("div",{className:"artifact-icon",children:"📝"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeUserassist,onChange:()=>A("includeUserassist")}),n.jsx("div",{className:"artifact-icon",children:"🎯"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),n.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeRegistry,onChange:()=>A("includeRegistry")}),n.jsx("div",{className:"artifact-icon",children:"🗄️"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.registry")}),n.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeTasks,onChange:()=>A("includeTasks")}),n.jsx("div",{className:"artifact-icon",children:"📅"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),n.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),r&&n.jsxs("div",{className:"status-panel",children:[n.jsxs("div",{className:"status-header",children:[n.jsx("span",{className:"status-icon",children:"📊"}),n.jsx("span",{children:t("collect.status")}),n.jsx("button",{className:"status-close",onClick:()=>o(""),children:"×"})]}),n.jsx("pre",{className:"status-content",children:r})]}),n.jsxs("div",{className:"cli-reference",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.cliReference")})}),n.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${l}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function K_(){const{t}=at(),[e,s]=S.useState([]),[r,o]=S.useState([]),[l,c]=S.useState(0),[u,h]=S.useState(0),[p]=S.useState(100),[m,x]=S.useState(!1),[N,w]=S.useState(null),[b,j]=S.useState("all");S.useEffect(()=>{y(),_()},[]);const y=()=>{fetch("/api/logs/files").then(I=>I.json()).then(I=>{o(I.files||[])}).catch(console.error)},_=(I=0)=>{x(!0),w(null),fetch(`/api/logs?offset=${I}&limit=${p}`).then(W=>W.json()).then(W=>{s(W.entries||[]),c(W.total||0),h(I),x(!1)}).catch(W=>{w(W.message||t("common.error")),x(!1)})},E=()=>{_(u)},A=I=>{j(I)},U=I=>{switch(I.toLowerCase()){case"debug":return"#888";case"info":return"#00d9ff";case"warn":return"#f59e0b";case"error":return"#ef4444";case"fatal":return"#dc2626";default:return"#888"}},P=b==="all"?e:e.filter(I=>I.level.toLowerCase()===b.toLowerCase()),q=I=>I.message==="[METRICS]",O=I=>I.message==="[STARTUP]",T=I=>I.message==="[PANIC]",L=I=>{try{return new Date(I).toLocaleString()}catch{return I}},B=I=>{if(I===0)return"0 B";const W=1024,ie=["B","KB","MB","GB"],R=Math.floor(Math.log(I)/Math.log(W));return parseFloat((I/Math.pow(W,R)).toFixed(2))+" "+ie[R]},M=Math.ceil(l/p),C=Math.floor(u/p)+1;return n.jsxs("div",{className:"logs-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("logs.title")}),n.jsx("button",{onClick:E,className:"btn-secondary",disabled:m,children:t(m?"common.loading":"logs.refresh")})]}),n.jsxs("div",{className:"logs-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.totalEntries"),":"]}),n.jsx("span",{className:"info-value",children:l})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.currentPage"),":"]}),n.jsxs("span",{className:"info-value",children:[C," / ",M]})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.logFiles"),":"]}),n.jsx("span",{className:"info-value",children:r.length})]})]}),n.jsx("div",{className:"logs-filters",children:n.jsxs("div",{className:"filter-group",children:[n.jsxs("span",{className:"filter-label",children:[t("logs.filterByLevel"),":"]}),n.jsx("button",{className:`filter-btn ${b==="all"?"active":""}`,onClick:()=>A("all"),children:t("logs.all")}),n.jsx("button",{className:`filter-btn ${b==="debug"?"active":""}`,onClick:()=>A("debug"),children:t("settings.debug")}),n.jsx("button",{className:`filter-btn ${b==="info"?"active":""}`,onClick:()=>A("info"),children:t("settings.info")}),n.jsx("button",{className:`filter-btn ${b==="warn"?"active":""}`,onClick:()=>A("warn"),children:t("settings.warn")}),n.jsx("button",{className:`filter-btn ${b==="error"?"active":""}`,onClick:()=>A("error"),children:t("settings.error")})]})}),n.jsxs("div",{className:"logs-files",children:[n.jsx("h3",{children:t("logs.logFiles")}),n.jsx("div",{className:"files-list",children:r.map((I,W)=>n.jsxs("div",{className:"file-item",children:[n.jsx("span",{className:"file-name",children:I.name}),n.jsx("span",{className:"file-size",children:B(I.size)}),n.jsx("span",{className:"file-time",children:new Date(I.mod_time).toLocaleString()}),I.is_main&&n.jsx("span",{className:"file-badge",children:t("logs.current")})]},W))})]}),n.jsxs("div",{className:"logs-viewer",children:[n.jsx("h3",{children:t("logs.viewer")}),N&&n.jsx("div",{className:"error-message",children:N}),n.jsx("div",{className:"logs-container",children:m?n.jsx("div",{className:"loading-state",children:t("common.loading")}):P.length===0?n.jsx("div",{className:"empty-state",children:t("logs.noLogs")}):n.jsxs("table",{className:"logs-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("logs.timestamp")}),n.jsx("th",{children:t("logs.level")}),n.jsx("th",{children:t("logs.message")}),n.jsx("th",{children:t("logs.details")})]})}),n.jsx("tbody",{children:P.map((I,W)=>{var ie,R,J,X;return n.jsxs("tr",{className:`log-entry log-level-${I.level.toLowerCase()}`,children:[n.jsx("td",{className:"log-time",children:L(I.timestamp)}),n.jsx("td",{className:"log-level",style:{color:U(I.level)},children:I.level.toUpperCase()}),n.jsxs("td",{className:"log-message",children:[q(I)&&n.jsx("span",{className:"log-badge metrics",children:t("logs.metrics")}),O(I)&&n.jsx("span",{className:"log-badge startup",children:t("logs.startup")}),T(I)&&n.jsx("span",{className:"log-badge panic",children:t("logs.panic")}),I.message]}),n.jsxs("td",{className:"log-details",children:[I.message==="[METRICS]"&&n.jsxs("div",{className:"metrics-details",children:[n.jsxs("span",{className:"metric-item",children:["Mem Alloc: ",n.jsxs("b",{children:[(ie=I.mem_alloc_mb)==null?void 0:ie.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Total: ",n.jsxs("b",{children:[(R=I.mem_total_mb)==null?void 0:R.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Sys: ",n.jsxs("b",{children:[(J=I.mem_sys_mb)==null?void 0:J.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Goroutines: ",n.jsx("b",{children:I.num_goroutine})]}),n.jsxs("span",{className:"metric-item",children:["CPU: ",n.jsx("b",{children:I.num_cpu})]}),n.jsxs("span",{className:"metric-item",children:["Heap Objects: ",n.jsx("b",{children:(X=I.heap_objects)==null?void 0:X.toLocaleString()})]})]}),I.message==="[API]"&&n.jsxs("div",{className:"api-details",children:[n.jsx("span",{className:"api-method",children:I.method}),n.jsx("span",{className:"api-path",children:I.path}),n.jsx("span",{className:"api-status",style:{color:I.status&&I.status>=400?"#ef4444":"#22c55e"},children:I.status}),n.jsx("span",{className:"api-latency",children:I.latency}),n.jsx("span",{className:"api-ip",children:I.client_ip})]}),I.message==="[STARTUP]"&&n.jsxs("span",{className:"startup-reason",children:["Reason: ",I.reason]}),I.message==="[PANIC]"&&n.jsxs("div",{className:"panic-details",children:[n.jsx("span",{className:"panic-error",children:I.error}),n.jsxs("span",{className:"panic-path",children:["Path: ",I.path]})]}),I.message==="[ERROR]"&&n.jsxs("div",{className:"error-details",children:[n.jsxs("span",{className:"error-module",children:["Module: ",I.module]}),n.jsx("span",{className:"error-msg",children:I.error})]})]})]},W)})})]})}),n.jsxs("div",{className:"pagination",children:[n.jsx("button",{onClick:()=>_(0),disabled:u===0||m,children:t("logs.first")}),n.jsx("button",{onClick:()=>_(Math.max(0,u-p)),disabled:u===0||m,children:t("events.previous")}),n.jsx("span",{className:"page-info",children:t("events.page",{page:C,total:M})}),n.jsx("button",{onClick:()=>_(u+p),disabled:u+p>=l||m,children:t("events.next")}),n.jsx("button",{onClick:()=>_(Math.max(0,(M-1)*p)),disabled:u+p>=l||m,children:t("logs.last")})]})]}),n.jsx("style",{children:`
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
      `})]})}function X_(){const{t}=at();return n.jsxs("nav",{className:"sidebar",children:[n.jsx("h1",{children:t("app.title")}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(Ge,{to:"/",children:t("nav.dashboard")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/events",children:t("nav.events")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/alerts",children:t("nav.alerts")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/timeline",children:t("nav.timeline")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/collect",children:t("nav.collect")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/analyze",children:t("nav.analyze")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/correlation",children:t("nav.correlation")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/multi",children:t("nav.multi")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/query",children:t("nav.query")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/ueba",children:t("nav.ueba")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/suppress",children:t("nav.suppress")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/live",children:t("nav.live")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/persistence",children:t("nav.persistence")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/reports",children:t("nav.reports")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/forensics",children:t("nav.forensics")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/system-info",children:t("nav.systemInfo")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/rules",children:t("nav.rules")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/metrics",children:t("nav.metrics")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/logs",children:t("nav.logs")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/settings",children:t("nav.settings")})})]})]})}function G_(){return n.jsxs(n.Fragment,{children:[n.jsx(Kb,{}),n.jsx(X_,{}),n.jsx("main",{className:"content",children:n.jsxs(Tb,{children:[n.jsx(Qe,{path:"/",element:n.jsx(v_,{})}),n.jsx(Qe,{path:"/events",element:n.jsx(y_,{})}),n.jsx(Qe,{path:"/events/:id",element:n.jsx(j_,{})}),n.jsx(Qe,{path:"/alerts",element:n.jsx(N_,{})}),n.jsx(Qe,{path:"/alerts/:id",element:n.jsx(w_,{})}),n.jsx(Qe,{path:"/timeline",element:n.jsx(k_,{})}),n.jsx(Qe,{path:"/collect",element:n.jsx(Q_,{})}),n.jsx(Qe,{path:"/analyze",element:n.jsx(M_,{})}),n.jsx(Qe,{path:"/correlation",element:n.jsx(z_,{})}),n.jsx(Qe,{path:"/multi",element:n.jsx(I_,{})}),n.jsx(Qe,{path:"/query",element:n.jsx(F_,{})}),n.jsx(Qe,{path:"/ueba",element:n.jsx(W_,{})}),n.jsx(Qe,{path:"/suppress",element:n.jsx(q_,{})}),n.jsx(Qe,{path:"/live",element:n.jsx(Y_,{})}),n.jsx(Qe,{path:"/persistence",element:n.jsx(D_,{})}),n.jsx(Qe,{path:"/reports",element:n.jsx(__,{})}),n.jsx(Qe,{path:"/forensics",element:n.jsx(S_,{})}),n.jsx(Qe,{path:"/system-info",element:n.jsx(C_,{})}),n.jsx(Qe,{path:"/rules",element:n.jsx(E_,{})}),n.jsx(Qe,{path:"/settings",element:n.jsx(R_,{})}),n.jsx(Qe,{path:"/metrics",element:n.jsx(P_,{})}),n.jsx(Qe,{path:"/logs",element:n.jsx(K_,{})})]})})]})}function J_(){return n.jsx(Qb,{children:n.jsx("div",{className:"app",children:n.jsx(G_,{})})})}$y.createRoot(document.getElementById("root")).render(n.jsx(Gm.StrictMode,{children:n.jsx(Bb,{children:n.jsx(J_,{})})}));
