var Ey=Object.defineProperty;var Ry=(t,e,s)=>e in t?Ey(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var xe=(t,e,s)=>Ry(t,typeof e!="symbol"?e+"":e,s);function Py(t,e){for(var s=0;s<e.length;s++){const r=e[s];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in t)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(t,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=s(l);fetch(l.href,o)}})();function Km(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gc={exports:{}},Rr={},Jc={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function Dy(){if(Wf)return Se;Wf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function N(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,j={};function y(O,G,ce){this.props=O,this.context=G,this.refs=j,this.updater=ce||w}y.prototype.isReactComponent={},y.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function k(){}k.prototype=y.prototype;function S(O,G,ce){this.props=O,this.context=G,this.refs=j,this.updater=ce||w}var P=S.prototype=new k;P.constructor=S,b(P,y.prototype),P.isPureReactComponent=!0;var I=Array.isArray,R=Object.prototype.hasOwnProperty,$={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function A(O,G,ce){var fe,ye={},be=null,Re=null;if(G!=null)for(fe in G.ref!==void 0&&(Re=G.ref),G.key!==void 0&&(be=""+G.key),G)R.call(G,fe)&&!L.hasOwnProperty(fe)&&(ye[fe]=G[fe]);var Ce=arguments.length-2;if(Ce===1)ye.children=ce;else if(1<Ce){for(var Me=Array(Ce),He=0;He<Ce;He++)Me[He]=arguments[He+2];ye.children=Me}if(O&&O.defaultProps)for(fe in Ce=O.defaultProps,Ce)ye[fe]===void 0&&(ye[fe]=Ce[fe]);return{$$typeof:t,type:O,key:be,ref:Re,props:ye,_owner:$.current}}function T(O,G){return{$$typeof:t,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===t}function U(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ce){return G[ce]})}var M=/\/+/g;function W(O,G){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):G.toString(36)}function V(O,G,ce,fe,ye){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var Re=!1;if(O===null)Re=!0;else switch(be){case"string":case"number":Re=!0;break;case"object":switch(O.$$typeof){case t:case e:Re=!0}}if(Re)return Re=O,ye=ye(Re),O=fe===""?"."+W(Re,0):fe,I(ye)?(ce="",O!=null&&(ce=O.replace(M,"$&/")+"/"),V(ye,G,ce,"",function(He){return He})):ye!=null&&(B(ye)&&(ye=T(ye,ce+(!ye.key||Re&&Re.key===ye.key?"":(""+ye.key).replace(M,"$&/")+"/")+O)),G.push(ye)),1;if(Re=0,fe=fe===""?".":fe+":",I(O))for(var Ce=0;Ce<O.length;Ce++){be=O[Ce];var Me=fe+W(be,Ce);Re+=V(be,G,ce,Me,ye)}else if(Me=N(O),typeof Me=="function")for(O=Me.call(O),Ce=0;!(be=O.next()).done;)be=be.value,Me=fe+W(be,Ce++),Re+=V(be,G,ce,Me,ye);else if(be==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Re}function ae(O,G,ce){if(O==null)return O;var fe=[],ye=0;return V(O,fe,"","",function(be){return G.call(ce,be,ye++)}),fe}function E(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=ce)},function(ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=ce)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},X={transition:null},ie={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:X,ReactCurrentOwner:$};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ae,forEach:function(O,G,ce){ae(O,function(){G.apply(this,arguments)},ce)},count:function(O){var G=0;return ae(O,function(){G++}),G},toArray:function(O){return ae(O,function(G){return G})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=y,Se.Fragment=s,Se.Profiler=l,Se.PureComponent=S,Se.StrictMode=r,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Se.act=Z,Se.cloneElement=function(O,G,ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var fe=b({},O.props),ye=O.key,be=O.ref,Re=O._owner;if(G!=null){if(G.ref!==void 0&&(be=G.ref,Re=$.current),G.key!==void 0&&(ye=""+G.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(Me in G)R.call(G,Me)&&!L.hasOwnProperty(Me)&&(fe[Me]=G[Me]===void 0&&Ce!==void 0?Ce[Me]:G[Me])}var Me=arguments.length-2;if(Me===1)fe.children=ce;else if(1<Me){Ce=Array(Me);for(var He=0;He<Me;He++)Ce[He]=arguments[He+2];fe.children=Ce}return{$$typeof:t,type:O.type,key:ye,ref:be,props:fe,_owner:Re}},Se.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Se.createElement=A,Se.createFactory=function(O){var G=A.bind(null,O);return G.type=O,G},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:u,render:O}},Se.isValidElement=B,Se.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:E}},Se.memo=function(O,G){return{$$typeof:p,type:O,compare:G===void 0?null:G}},Se.startTransition=function(O){var G=X.transition;X.transition={};try{O()}finally{X.transition=G}},Se.unstable_act=Z,Se.useCallback=function(O,G){return J.current.useCallback(O,G)},Se.useContext=function(O){return J.current.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O){return J.current.useDeferredValue(O)},Se.useEffect=function(O,G){return J.current.useEffect(O,G)},Se.useId=function(){return J.current.useId()},Se.useImperativeHandle=function(O,G,ce){return J.current.useImperativeHandle(O,G,ce)},Se.useInsertionEffect=function(O,G){return J.current.useInsertionEffect(O,G)},Se.useLayoutEffect=function(O,G){return J.current.useLayoutEffect(O,G)},Se.useMemo=function(O,G){return J.current.useMemo(O,G)},Se.useReducer=function(O,G,ce){return J.current.useReducer(O,G,ce)},Se.useRef=function(O){return J.current.useRef(O)},Se.useState=function(O){return J.current.useState(O)},Se.useSyncExternalStore=function(O,G,ce){return J.current.useSyncExternalStore(O,G,ce)},Se.useTransition=function(){return J.current.useTransition()},Se.version="18.3.1",Se}var Hf;function Bd(){return Hf||(Hf=1,Jc.exports=Dy()),Jc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function Ay(){if(Vf)return Rr;Vf=1;var t=Bd(),e=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var m,v={},N=null,w=null;p!==void 0&&(N=""+p),h.key!==void 0&&(N=""+h.key),h.ref!==void 0&&(w=h.ref);for(m in h)r.call(h,m)&&!o.hasOwnProperty(m)&&(v[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:u,key:N,ref:w,props:v,_owner:l.current}}return Rr.Fragment=s,Rr.jsx=c,Rr.jsxs=c,Rr}var qf;function Ty(){return qf||(qf=1,Gc.exports=Ay()),Gc.exports}var n=Ty(),C=Bd();const Xm=Km(C),Ly=Py({__proto__:null,default:Xm},[C]);var jl={},Zc={exports:{}},Lt={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function My(){return Yf||(Yf=1,(function(t){function e(X,ie){var Z=X.length;X.push(ie);e:for(;0<Z;){var O=Z-1>>>1,G=X[O];if(0<l(G,ie))X[O]=ie,X[Z]=G,Z=O;else break e}}function s(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],Z=X.pop();if(Z!==ie){X[0]=Z;e:for(var O=0,G=X.length,ce=G>>>1;O<ce;){var fe=2*(O+1)-1,ye=X[fe],be=fe+1,Re=X[be];if(0>l(ye,Z))be<G&&0>l(Re,ye)?(X[O]=Re,X[be]=Z,O=be):(X[O]=ye,X[fe]=Z,O=fe);else if(be<G&&0>l(Re,Z))X[O]=Re,X[be]=Z,O=be;else break e}}return ie}function l(X,ie){var Z=X.sortIndex-ie.sortIndex;return Z!==0?Z:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],m=1,v=null,N=3,w=!1,b=!1,j=!1,y=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(X){for(var ie=s(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=X)r(p),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=s(p)}}function I(X){if(j=!1,P(X),!b)if(s(h)!==null)b=!0,E(R);else{var ie=s(p);ie!==null&&J(I,ie.startTime-X)}}function R(X,ie){b=!1,j&&(j=!1,k(A),A=-1),w=!0;var Z=N;try{for(P(ie),v=s(h);v!==null&&(!(v.expirationTime>ie)||X&&!U());){var O=v.callback;if(typeof O=="function"){v.callback=null,N=v.priorityLevel;var G=O(v.expirationTime<=ie);ie=t.unstable_now(),typeof G=="function"?v.callback=G:v===s(h)&&r(h),P(ie)}else r(h);v=s(h)}if(v!==null)var ce=!0;else{var fe=s(p);fe!==null&&J(I,fe.startTime-ie),ce=!1}return ce}finally{v=null,N=Z,w=!1}}var $=!1,L=null,A=-1,T=5,B=-1;function U(){return!(t.unstable_now()-B<T)}function M(){if(L!==null){var X=t.unstable_now();B=X;var ie=!0;try{ie=L(!0,X)}finally{ie?W():($=!1,L=null)}}else $=!1}var W;if(typeof S=="function")W=function(){S(M)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ae=V.port2;V.port1.onmessage=M,W=function(){ae.postMessage(null)}}else W=function(){y(M,0)};function E(X){L=X,$||($=!0,W())}function J(X,ie){A=y(function(){X(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){b||w||(b=!0,E(R))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return N},t.unstable_getFirstCallbackNode=function(){return s(h)},t.unstable_next=function(X){switch(N){case 1:case 2:case 3:var ie=3;break;default:ie=N}var Z=N;N=ie;try{return X()}finally{N=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=N;N=X;try{return ie()}finally{N=Z}},t.unstable_scheduleCallback=function(X,ie,Z){var O=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,X){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=Z+G,X={id:m++,callback:ie,priorityLevel:X,startTime:Z,expirationTime:G,sortIndex:-1},Z>O?(X.sortIndex=Z,e(p,X),s(h)===null&&X===s(p)&&(j?(k(A),A=-1):j=!0,J(I,Z-O))):(X.sortIndex=G,e(h,X),b||w||(b=!0,E(R))),X},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(X){var ie=N;return function(){var Z=N;N=ie;try{return X.apply(this,arguments)}finally{N=Z}}}})(td)),td}var Qf;function Oy(){return Qf||(Qf=1,ed.exports=My()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function zy(){if(Kf)return Lt;Kf=1;var t=Bd(),e=Oy();function s(i){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)a+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function o(i,a){c(i,a),c(i+"Capture",a)}function c(i,a){for(l[i]=a,i=0;i<a.length;i++)r.add(a[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function N(i){return h.call(v,i)?!0:h.call(m,i)?!1:p.test(i)?v[i]=!0:(m[i]=!0,!1)}function w(i,a,d,f){if(d!==null&&d.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,a,d,f){if(a===null||typeof a>"u"||w(i,a,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function j(i,a,d,f,g,x,_){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=d,this.propertyName=i,this.type=a,this.sanitizeURL=x,this.removeEmptyString=_}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new j(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var a=i[0];y[a]=new j(a,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new j(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new j(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new j(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new j(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new j(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new j(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new j(i,5,!1,i.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function S(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var a=i.replace(k,S);y[a]=new j(a,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var a=i.replace(k,S);y[a]=new j(a,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var a=i.replace(k,S);y[a]=new j(a,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new j(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,a,d,f){var g=y.hasOwnProperty(a)?y[a]:null;(g!==null?g.type!==0:f||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(b(a,d,g,f)&&(d=null),f||g===null?N(a)&&(d===null?i.removeAttribute(a):i.setAttribute(a,""+d)):g.mustUseProperty?i[g.propertyName]=d===null?g.type===3?!1:"":d:(a=g.attributeName,f=g.attributeNamespace,d===null?i.removeAttribute(a):(g=g.type,d=g===3||g===4&&d===!0?"":""+d,f?i.setAttributeNS(f,a,d):i.setAttribute(a,d))))}var I=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),$=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),U=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var Z=Object.assign,O;function G(i){if(O===void 0)try{throw Error()}catch(d){var a=d.stack.trim().match(/\n( *(at )?)/);O=a&&a[1]||""}return`
`+O+i}var ce=!1;function fe(i,a){if(!i||ce)return"";ce=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(Q){var f=Q}Reflect.construct(i,[],a)}else{try{a.call()}catch(Q){f=Q}i.call(a.prototype)}else{try{throw Error()}catch(Q){f=Q}i()}}catch(Q){if(Q&&f&&typeof Q.stack=="string"){for(var g=Q.stack.split(`
`),x=f.stack.split(`
`),_=g.length-1,D=x.length-1;1<=_&&0<=D&&g[_]!==x[D];)D--;for(;1<=_&&0<=D;_--,D--)if(g[_]!==x[D]){if(_!==1||D!==1)do if(_--,D--,0>D||g[_]!==x[D]){var z=`
`+g[_].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=_&&0<=D);break}}}finally{ce=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?G(i):""}function ye(i){switch(i.tag){case 5:return G(i.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return i=fe(i.type,!1),i;case 11:return i=fe(i.type.render,!1),i;case 1:return i=fe(i.type,!0),i;default:return""}}function be(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case L:return"Fragment";case $:return"Portal";case T:return"Profiler";case A:return"StrictMode";case W:return"Suspense";case V:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case U:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case M:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ae:return a=i.displayName||null,a!==null?a:be(i.type)||"Memo";case E:a=i._payload,i=i._init;try{return be(i(a))}catch{}}return null}function Re(i){var a=i.type;switch(i.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=a.render,i=i.displayName||i.name||"",a.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(a);case 8:return a===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Me(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function He(i){var a=Me(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,a),f=""+i[a];if(!i.hasOwnProperty(a)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var g=d.get,x=d.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return g.call(this)},set:function(_){f=""+_,x.call(this,_)}}),Object.defineProperty(i,a,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(_){f=""+_},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function Vt(i){i._valueTracker||(i._valueTracker=He(i))}function xs(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var d=a.getValue(),f="";return i&&(f=Me(i)?i.checked?"true":"false":i.value),i=f,i!==d?(a.setValue(i),!0):!1}function pe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function qt(i,a){var d=a.checked;return Z({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function oi(i,a){var d=a.defaultValue==null?"":a.defaultValue,f=a.checked!=null?a.checked:a.defaultChecked;d=Ce(a.value!=null?a.value:d),i._wrapperState={initialChecked:f,initialValue:d,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Ks(i,a){a=a.checked,a!=null&&P(i,"checked",a,!1)}function kn(i,a){Ks(i,a);var d=Ce(a.value),f=a.type;if(d!=null)f==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}a.hasOwnProperty("value")?Sn(i,a.type,d):a.hasOwnProperty("defaultValue")&&Sn(i,a.type,Ce(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(i.defaultChecked=!!a.defaultChecked)}function ci(i,a,d){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var f=a.type;if(!(f!=="submit"&&f!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+i._wrapperState.initialValue,d||a===i.value||(i.value=a),i.defaultValue=a}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function Sn(i,a,d){(a!=="number"||pe(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var is=Array.isArray;function rs(i,a,d,f){if(i=i.options,a){a={};for(var g=0;g<d.length;g++)a["$"+d[g]]=!0;for(d=0;d<i.length;d++)g=a.hasOwnProperty("$"+i[d].value),i[d].selected!==g&&(i[d].selected=g),g&&f&&(i[d].defaultSelected=!0)}else{for(d=""+Ce(d),a=null,g=0;g<i.length;g++){if(i[g].value===d){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}a!==null||i[g].disabled||(a=i[g])}a!==null&&(a.selected=!0)}}function Cn(i,a){if(a.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},a,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function di(i,a){var d=a.value;if(d==null){if(d=a.children,a=a.defaultValue,d!=null){if(a!=null)throw Error(s(92));if(is(d)){if(1<d.length)throw Error(s(93));d=d[0]}a=d}a==null&&(a=""),d=a}i._wrapperState={initialValue:Ce(d)}}function En(i,a){var d=Ce(a.value),f=Ce(a.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),a.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),f!=null&&(i.defaultValue=""+f)}function se(i){var a=i.textContent;a===i._wrapperState.initialValue&&a!==""&&a!==null&&(i.value=a)}function oe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(i,a){return i==null||i==="http://www.w3.org/1999/xhtml"?oe(a):i==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var st,as=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,d,f,g){MSApp.execUnsafeLocalFunction(function(){return i(a,d,f,g)})}:i})(function(i,a){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=a;else{for(st=st||document.createElement("div"),st.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=st.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;a.firstChild;)i.appendChild(a.firstChild)}});function vs(i,a){if(a){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=a;return}}i.textContent=a}var Ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Ps).forEach(function(i){Oe.forEach(function(a){a=a+i.charAt(0).toUpperCase()+i.substring(1),Ps[a]=Ps[i]})});function Et(i,a,d){return a==null||typeof a=="boolean"||a===""?"":d||typeof a!="number"||a===0||Ps.hasOwnProperty(i)&&Ps[i]?(""+a).trim():a+"px"}function Rn(i,a){i=i.style;for(var d in a)if(a.hasOwnProperty(d)){var f=d.indexOf("--")===0,g=Et(d,a[d],f);d==="float"&&(d="cssFloat"),f?i.setProperty(d,g):i[d]=g}}var fa=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(i,a){if(a){if(fa[i]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(s(137,i));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(s(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(s(61))}if(a.style!=null&&typeof a.style!="object")throw Error(s(62))}}function hi(i,a){if(i.indexOf("-")===-1)return typeof a.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ue=null,Te=null,Yt=null;function ys(i){if(i=pr(i)){if(typeof ue!="function")throw Error(s(280));var a=i.stateNode;a&&(a=Oa(a),ue(i.stateNode,i.type,a))}}function qi(i){Te?Yt?Yt.push(i):Yt=[i]:Te=i}function Pn(){if(Te){var i=Te,a=Yt;if(Yt=Te=null,ys(i),a)for(i=0;i<a.length;i++)ys(a[i])}}function Ds(i,a){return i(a)}function Ft(){}var mt=!1;function kt(i,a,d){if(mt)return i(a,d);mt=!0;try{return Ds(i,a,d)}finally{mt=!1,(Te!==null||Yt!==null)&&(Ft(),Pn())}}function Yi(i,a){var d=i.stateNode;if(d===null)return null;var f=Oa(d);if(f===null)return null;d=f[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(s(231,a,typeof d));return d}var mo=!1;if(u)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){mo=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{mo=!1}function Lx(i,a,d,f,g,x,_,D,z){var Q=Array.prototype.slice.call(arguments,3);try{a.apply(d,Q)}catch(te){this.onError(te)}}var Ki=!1,pa=null,ma=!1,go=null,Mx={onError:function(i){Ki=!0,pa=i}};function Ox(i,a,d,f,g,x,_,D,z){Ki=!1,pa=null,Lx.apply(Mx,arguments)}function zx(i,a,d,f,g,x,_,D,z){if(Ox.apply(this,arguments),Ki){if(Ki){var Q=pa;Ki=!1,pa=null}else throw Error(s(198));ma||(ma=!0,go=Q)}}function Dn(i){var a=i,d=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(d=a.return),i=a.return;while(i)}return a.tag===3?d:null}function uu(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function hu(i){if(Dn(i)!==i)throw Error(s(188))}function Ix(i){var a=i.alternate;if(!a){if(a=Dn(i),a===null)throw Error(s(188));return a!==i?null:i}for(var d=i,f=a;;){var g=d.return;if(g===null)break;var x=g.alternate;if(x===null){if(f=g.return,f!==null){d=f;continue}break}if(g.child===x.child){for(x=g.child;x;){if(x===d)return hu(g),i;if(x===f)return hu(g),a;x=x.sibling}throw Error(s(188))}if(d.return!==f.return)d=g,f=x;else{for(var _=!1,D=g.child;D;){if(D===d){_=!0,d=g,f=x;break}if(D===f){_=!0,f=g,d=x;break}D=D.sibling}if(!_){for(D=x.child;D;){if(D===d){_=!0,d=x,f=g;break}if(D===f){_=!0,f=x,d=g;break}D=D.sibling}if(!_)throw Error(s(189))}}if(d.alternate!==f)throw Error(s(190))}if(d.tag!==3)throw Error(s(188));return d.stateNode.current===d?i:a}function fu(i){return i=Ix(i),i!==null?pu(i):null}function pu(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var a=pu(i);if(a!==null)return a;i=i.sibling}return null}var mu=e.unstable_scheduleCallback,gu=e.unstable_cancelCallback,Fx=e.unstable_shouldYield,Bx=e.unstable_requestPaint,Je=e.unstable_now,$x=e.unstable_getCurrentPriorityLevel,xo=e.unstable_ImmediatePriority,xu=e.unstable_UserBlockingPriority,ga=e.unstable_NormalPriority,Ux=e.unstable_LowPriority,vu=e.unstable_IdlePriority,xa=null,bs=null;function Wx(i){if(bs&&typeof bs.onCommitFiberRoot=="function")try{bs.onCommitFiberRoot(xa,i,void 0,(i.current.flags&128)===128)}catch{}}var ls=Math.clz32?Math.clz32:qx,Hx=Math.log,Vx=Math.LN2;function qx(i){return i>>>=0,i===0?32:31-(Hx(i)/Vx|0)|0}var va=64,ya=4194304;function Xi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ba(i,a){var d=i.pendingLanes;if(d===0)return 0;var f=0,g=i.suspendedLanes,x=i.pingedLanes,_=d&268435455;if(_!==0){var D=_&~g;D!==0?f=Xi(D):(x&=_,x!==0&&(f=Xi(x)))}else _=d&~g,_!==0?f=Xi(_):x!==0&&(f=Xi(x));if(f===0)return 0;if(a!==0&&a!==f&&(a&g)===0&&(g=f&-f,x=a&-a,g>=x||g===16&&(x&4194240)!==0))return a;if((f&4)!==0&&(f|=d&16),a=i.entangledLanes,a!==0)for(i=i.entanglements,a&=f;0<a;)d=31-ls(a),g=1<<d,f|=i[d],a&=~g;return f}function Yx(i,a){switch(i){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(i,a){for(var d=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,x=i.pendingLanes;0<x;){var _=31-ls(x),D=1<<_,z=g[_];z===-1?((D&d)===0||(D&f)!==0)&&(g[_]=Yx(D,a)):z<=a&&(i.expiredLanes|=D),x&=~D}}function vo(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function yu(){var i=va;return va<<=1,(va&4194240)===0&&(va=64),i}function yo(i){for(var a=[],d=0;31>d;d++)a.push(i);return a}function Gi(i,a,d){i.pendingLanes|=a,a!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,a=31-ls(a),i[a]=d}function Kx(i,a){var d=i.pendingLanes&~a;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=a,i.mutableReadLanes&=a,i.entangledLanes&=a,a=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<d;){var g=31-ls(d),x=1<<g;a[g]=0,f[g]=-1,i[g]=-1,d&=~x}}function bo(i,a){var d=i.entangledLanes|=a;for(i=i.entanglements;d;){var f=31-ls(d),g=1<<f;g&a|i[f]&a&&(i[f]|=a),d&=~g}}var ze=0;function bu(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ju,jo,Nu,wu,_u,No=!1,ja=[],Xs=null,Gs=null,Js=null,Ji=new Map,Zi=new Map,Zs=[],Xx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(i,a){switch(i){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Gs=null;break;case"mouseover":case"mouseout":Js=null;break;case"pointerover":case"pointerout":Ji.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(a.pointerId)}}function er(i,a,d,f,g,x){return i===null||i.nativeEvent!==x?(i={blockedOn:a,domEventName:d,eventSystemFlags:f,nativeEvent:x,targetContainers:[g]},a!==null&&(a=pr(a),a!==null&&jo(a)),i):(i.eventSystemFlags|=f,a=i.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),i)}function Gx(i,a,d,f,g){switch(a){case"focusin":return Xs=er(Xs,i,a,d,f,g),!0;case"dragenter":return Gs=er(Gs,i,a,d,f,g),!0;case"mouseover":return Js=er(Js,i,a,d,f,g),!0;case"pointerover":var x=g.pointerId;return Ji.set(x,er(Ji.get(x)||null,i,a,d,f,g)),!0;case"gotpointercapture":return x=g.pointerId,Zi.set(x,er(Zi.get(x)||null,i,a,d,f,g)),!0}return!1}function Su(i){var a=An(i.target);if(a!==null){var d=Dn(a);if(d!==null){if(a=d.tag,a===13){if(a=uu(d),a!==null){i.blockedOn=a,_u(i.priority,function(){Nu(d)});return}}else if(a===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Na(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var d=_o(i.domEventName,i.eventSystemFlags,a[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var f=new d.constructor(d.type,d);fi=f,d.target.dispatchEvent(f),fi=null}else return a=pr(d),a!==null&&jo(a),i.blockedOn=d,!1;a.shift()}return!0}function Cu(i,a,d){Na(i)&&d.delete(a)}function Jx(){No=!1,Xs!==null&&Na(Xs)&&(Xs=null),Gs!==null&&Na(Gs)&&(Gs=null),Js!==null&&Na(Js)&&(Js=null),Ji.forEach(Cu),Zi.forEach(Cu)}function tr(i,a){i.blockedOn===a&&(i.blockedOn=null,No||(No=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jx)))}function sr(i){function a(g){return tr(g,i)}if(0<ja.length){tr(ja[0],i);for(var d=1;d<ja.length;d++){var f=ja[d];f.blockedOn===i&&(f.blockedOn=null)}}for(Xs!==null&&tr(Xs,i),Gs!==null&&tr(Gs,i),Js!==null&&tr(Js,i),Ji.forEach(a),Zi.forEach(a),d=0;d<Zs.length;d++)f=Zs[d],f.blockedOn===i&&(f.blockedOn=null);for(;0<Zs.length&&(d=Zs[0],d.blockedOn===null);)Su(d),d.blockedOn===null&&Zs.shift()}var pi=I.ReactCurrentBatchConfig,wa=!0;function Zx(i,a,d,f){var g=ze,x=pi.transition;pi.transition=null;try{ze=1,wo(i,a,d,f)}finally{ze=g,pi.transition=x}}function ev(i,a,d,f){var g=ze,x=pi.transition;pi.transition=null;try{ze=4,wo(i,a,d,f)}finally{ze=g,pi.transition=x}}function wo(i,a,d,f){if(wa){var g=_o(i,a,d,f);if(g===null)$o(i,a,f,_a,d),ku(i,f);else if(Gx(g,i,a,d,f))f.stopPropagation();else if(ku(i,f),a&4&&-1<Xx.indexOf(i)){for(;g!==null;){var x=pr(g);if(x!==null&&ju(x),x=_o(i,a,d,f),x===null&&$o(i,a,f,_a,d),x===g)break;g=x}g!==null&&f.stopPropagation()}else $o(i,a,f,null,d)}}var _a=null;function _o(i,a,d,f){if(_a=null,i=H(f),i=An(i),i!==null)if(a=Dn(i),a===null)i=null;else if(d=a.tag,d===13){if(i=uu(a),i!==null)return i;i=null}else if(d===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null);return _a=i,null}function Eu(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($x()){case xo:return 1;case xu:return 4;case ga:case Ux:return 16;case vu:return 536870912;default:return 16}default:return 16}}var en=null,ko=null,ka=null;function Ru(){if(ka)return ka;var i,a=ko,d=a.length,f,g="value"in en?en.value:en.textContent,x=g.length;for(i=0;i<d&&a[i]===g[i];i++);var _=d-i;for(f=1;f<=_&&a[d-f]===g[x-f];f++);return ka=g.slice(i,1<f?1-f:void 0)}function Sa(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function Ca(){return!0}function Pu(){return!1}function Bt(i){function a(d,f,g,x,_){this._reactName=d,this._targetInst=g,this.type=f,this.nativeEvent=x,this.target=_,this.currentTarget=null;for(var D in i)i.hasOwnProperty(D)&&(d=i[D],this[D]=d?d(x):x[D]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ca:Pu,this.isPropagationStopped=Pu,this}return Z(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),a}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Bt(mi),nr=Z({},mi,{view:0,detail:0}),tv=Bt(nr),Co,Eo,ir,Ea=Z({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Po,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ir&&(ir&&i.type==="mousemove"?(Co=i.screenX-ir.screenX,Eo=i.screenY-ir.screenY):Eo=Co=0,ir=i),Co)},movementY:function(i){return"movementY"in i?i.movementY:Eo}}),Du=Bt(Ea),sv=Z({},Ea,{dataTransfer:0}),nv=Bt(sv),iv=Z({},nr,{relatedTarget:0}),Ro=Bt(iv),rv=Z({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Bt(rv),lv=Z({},mi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ov=Bt(lv),cv=Z({},mi,{data:0}),Au=Bt(cv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=hv[i])?!!a[i]:!1}function Po(){return fv}var pv=Z({},nr,{key:function(i){if(i.key){var a=dv[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Sa(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?uv[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Po,charCode:function(i){return i.type==="keypress"?Sa(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Sa(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),mv=Bt(pv),gv=Z({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tu=Bt(gv),xv=Z({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Po}),vv=Bt(xv),yv=Z({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Bt(yv),jv=Z({},Ea,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Bt(jv),wv=[9,13,27,32],Do=u&&"CompositionEvent"in window,rr=null;u&&"documentMode"in document&&(rr=document.documentMode);var _v=u&&"TextEvent"in window&&!rr,Lu=u&&(!Do||rr&&8<rr&&11>=rr),Mu=" ",Ou=!1;function zu(i,a){switch(i){case"keyup":return wv.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var gi=!1;function kv(i,a){switch(i){case"compositionend":return Iu(a);case"keypress":return a.which!==32?null:(Ou=!0,Mu);case"textInput":return i=a.data,i===Mu&&Ou?null:i;default:return null}}function Sv(i,a){if(gi)return i==="compositionend"||!Do&&zu(i,a)?(i=Ru(),ka=ko=en=null,gi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Lu&&a.locale!=="ko"?null:a.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!Cv[i.type]:a==="textarea"}function Bu(i,a,d,f){qi(f),a=Ta(a,"onChange"),0<a.length&&(d=new So("onChange","change",null,d,f),i.push({event:d,listeners:a}))}var ar=null,lr=null;function Ev(i){ih(i,0)}function Ra(i){var a=ji(i);if(xs(a))return i}function Rv(i,a){if(i==="change")return a}var $u=!1;if(u){var Ao;if(u){var To="oninput"in document;if(!To){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),To=typeof Uu.oninput=="function"}Ao=To}else Ao=!1;$u=Ao&&(!document.documentMode||9<document.documentMode)}function Wu(){ar&&(ar.detachEvent("onpropertychange",Hu),lr=ar=null)}function Hu(i){if(i.propertyName==="value"&&Ra(lr)){var a=[];Bu(a,lr,i,H(i)),kt(Ev,a)}}function Pv(i,a,d){i==="focusin"?(Wu(),ar=a,lr=d,ar.attachEvent("onpropertychange",Hu)):i==="focusout"&&Wu()}function Dv(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ra(lr)}function Av(i,a){if(i==="click")return Ra(a)}function Tv(i,a){if(i==="input"||i==="change")return Ra(a)}function Lv(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var os=typeof Object.is=="function"?Object.is:Lv;function or(i,a){if(os(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var d=Object.keys(i),f=Object.keys(a);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var g=d[f];if(!h.call(a,g)||!os(i[g],a[g]))return!1}return!0}function Vu(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function qu(i,a){var d=Vu(i);i=0;for(var f;d;){if(d.nodeType===3){if(f=i+d.textContent.length,i<=a&&f>=a)return{node:d,offset:a-i};i=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Vu(d)}}function Yu(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?Yu(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function Qu(){for(var i=window,a=pe();a instanceof i.HTMLIFrameElement;){try{var d=typeof a.contentWindow.location.href=="string"}catch{d=!1}if(d)i=a.contentWindow;else break;a=pe(i.document)}return a}function Lo(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}function Mv(i){var a=Qu(),d=i.focusedElem,f=i.selectionRange;if(a!==d&&d&&d.ownerDocument&&Yu(d.ownerDocument.documentElement,d)){if(f!==null&&Lo(d)){if(a=f.start,i=f.end,i===void 0&&(i=a),"selectionStart"in d)d.selectionStart=a,d.selectionEnd=Math.min(i,d.value.length);else if(i=(a=d.ownerDocument||document)&&a.defaultView||window,i.getSelection){i=i.getSelection();var g=d.textContent.length,x=Math.min(f.start,g);f=f.end===void 0?x:Math.min(f.end,g),!i.extend&&x>f&&(g=f,f=x,x=g),g=qu(d,x);var _=qu(d,f);g&&_&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==_.node||i.focusOffset!==_.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),i.removeAllRanges(),x>f?(i.addRange(a),i.extend(_.node,_.offset)):(a.setEnd(_.node,_.offset),i.addRange(a)))}}for(a=[],i=d;i=i.parentNode;)i.nodeType===1&&a.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<a.length;d++)i=a[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Ov=u&&"documentMode"in document&&11>=document.documentMode,xi=null,Mo=null,cr=null,Oo=!1;function Ku(i,a,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Oo||xi==null||xi!==pe(f)||(f=xi,"selectionStart"in f&&Lo(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),cr&&or(cr,f)||(cr=f,f=Ta(Mo,"onSelect"),0<f.length&&(a=new So("onSelect","select",null,a,d),i.push({event:a,listeners:f}),a.target=xi)))}function Pa(i,a){var d={};return d[i.toLowerCase()]=a.toLowerCase(),d["Webkit"+i]="webkit"+a,d["Moz"+i]="moz"+a,d}var vi={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},zo={},Xu={};u&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Da(i){if(zo[i])return zo[i];if(!vi[i])return i;var a=vi[i],d;for(d in a)if(a.hasOwnProperty(d)&&d in Xu)return zo[i]=a[d];return i}var Gu=Da("animationend"),Ju=Da("animationiteration"),Zu=Da("animationstart"),eh=Da("transitionend"),th=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(i,a){th.set(i,a),o(a,[i])}for(var Io=0;Io<sh.length;Io++){var Fo=sh[Io],zv=Fo.toLowerCase(),Iv=Fo[0].toUpperCase()+Fo.slice(1);tn(zv,"on"+Iv)}tn(Gu,"onAnimationEnd"),tn(Ju,"onAnimationIteration"),tn(Zu,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(eh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function nh(i,a,d){var f=i.type||"unknown-event";i.currentTarget=d,zx(f,a,void 0,i),i.currentTarget=null}function ih(i,a){a=(a&4)!==0;for(var d=0;d<i.length;d++){var f=i[d],g=f.event;f=f.listeners;e:{var x=void 0;if(a)for(var _=f.length-1;0<=_;_--){var D=f[_],z=D.instance,Q=D.currentTarget;if(D=D.listener,z!==x&&g.isPropagationStopped())break e;nh(g,D,Q),x=z}else for(_=0;_<f.length;_++){if(D=f[_],z=D.instance,Q=D.currentTarget,D=D.listener,z!==x&&g.isPropagationStopped())break e;nh(g,D,Q),x=z}}}if(ma)throw i=go,ma=!1,go=null,i}function $e(i,a){var d=a[Yo];d===void 0&&(d=a[Yo]=new Set);var f=i+"__bubble";d.has(f)||(rh(a,i,2,!1),d.add(f))}function Bo(i,a,d){var f=0;a&&(f|=4),rh(d,i,f,a)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function ur(i){if(!i[Aa]){i[Aa]=!0,r.forEach(function(d){d!=="selectionchange"&&(Fv.has(d)||Bo(d,!1,i),Bo(d,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Aa]||(a[Aa]=!0,Bo("selectionchange",!1,a))}}function rh(i,a,d,f){switch(Eu(a)){case 1:var g=Zx;break;case 4:g=ev;break;default:g=wo}d=g.bind(null,a,d,i),g=void 0,!mo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(a,d,{capture:!0,passive:g}):i.addEventListener(a,d,!0):g!==void 0?i.addEventListener(a,d,{passive:g}):i.addEventListener(a,d,!1)}function $o(i,a,d,f,g){var x=f;if((a&1)===0&&(a&2)===0&&f!==null)e:for(;;){if(f===null)return;var _=f.tag;if(_===3||_===4){var D=f.stateNode.containerInfo;if(D===g||D.nodeType===8&&D.parentNode===g)break;if(_===4)for(_=f.return;_!==null;){var z=_.tag;if((z===3||z===4)&&(z=_.stateNode.containerInfo,z===g||z.nodeType===8&&z.parentNode===g))return;_=_.return}for(;D!==null;){if(_=An(D),_===null)return;if(z=_.tag,z===5||z===6){f=x=_;continue e}D=D.parentNode}}f=f.return}kt(function(){var Q=x,te=H(d),ne=[];e:{var ee=th.get(i);if(ee!==void 0){var de=So,me=i;switch(i){case"keypress":if(Sa(d)===0)break e;case"keydown":case"keyup":de=mv;break;case"focusin":me="focus",de=Ro;break;case"focusout":me="blur",de=Ro;break;case"beforeblur":case"afterblur":de=Ro;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=vv;break;case Gu:case Ju:case Zu:de=av;break;case eh:de=bv;break;case"scroll":de=tv;break;case"wheel":de=Nv;break;case"copy":case"cut":case"paste":de=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Tu}var ge=(a&4)!==0,Ze=!ge&&i==="scroll",q=ge?ee!==null?ee+"Capture":null:ee;ge=[];for(var F=Q,Y;F!==null;){Y=F;var re=Y.stateNode;if(Y.tag===5&&re!==null&&(Y=re,q!==null&&(re=Yi(F,q),re!=null&&ge.push(hr(F,re,Y)))),Ze)break;F=F.return}0<ge.length&&(ee=new de(ee,me,null,d,te),ne.push({event:ee,listeners:ge}))}}if((a&7)===0){e:{if(ee=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",ee&&d!==fi&&(me=d.relatedTarget||d.fromElement)&&(An(me)||me[As]))break e;if((de||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,de?(me=d.relatedTarget||d.toElement,de=Q,me=me?An(me):null,me!==null&&(Ze=Dn(me),me!==Ze||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=Q),de!==me)){if(ge=Du,re="onMouseLeave",q="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(ge=Tu,re="onPointerLeave",q="onPointerEnter",F="pointer"),Ze=de==null?ee:ji(de),Y=me==null?ee:ji(me),ee=new ge(re,F+"leave",de,d,te),ee.target=Ze,ee.relatedTarget=Y,re=null,An(te)===Q&&(ge=new ge(q,F+"enter",me,d,te),ge.target=Y,ge.relatedTarget=Ze,re=ge),Ze=re,de&&me)t:{for(ge=de,q=me,F=0,Y=ge;Y;Y=yi(Y))F++;for(Y=0,re=q;re;re=yi(re))Y++;for(;0<F-Y;)ge=yi(ge),F--;for(;0<Y-F;)q=yi(q),Y--;for(;F--;){if(ge===q||q!==null&&ge===q.alternate)break t;ge=yi(ge),q=yi(q)}ge=null}else ge=null;de!==null&&ah(ne,ee,de,ge,!1),me!==null&&Ze!==null&&ah(ne,Ze,me,ge,!0)}}e:{if(ee=Q?ji(Q):window,de=ee.nodeName&&ee.nodeName.toLowerCase(),de==="select"||de==="input"&&ee.type==="file")var ve=Rv;else if(Fu(ee))if($u)ve=Tv;else{ve=Dv;var je=Pv}else(de=ee.nodeName)&&de.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(ve=Av);if(ve&&(ve=ve(i,Q))){Bu(ne,ve,d,te);break e}je&&je(i,ee,Q),i==="focusout"&&(je=ee._wrapperState)&&je.controlled&&ee.type==="number"&&Sn(ee,"number",ee.value)}switch(je=Q?ji(Q):window,i){case"focusin":(Fu(je)||je.contentEditable==="true")&&(xi=je,Mo=Q,cr=null);break;case"focusout":cr=Mo=xi=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,Ku(ne,d,te);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Ku(ne,d,te)}var Ne;if(Do)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else gi?zu(i,d)&&(_e="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(_e="onCompositionStart");_e&&(Lu&&d.locale!=="ko"&&(gi||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&gi&&(Ne=Ru()):(en=te,ko="value"in en?en.value:en.textContent,gi=!0)),je=Ta(Q,_e),0<je.length&&(_e=new Au(_e,i,null,d,te),ne.push({event:_e,listeners:je}),Ne?_e.data=Ne:(Ne=Iu(d),Ne!==null&&(_e.data=Ne)))),(Ne=_v?kv(i,d):Sv(i,d))&&(Q=Ta(Q,"onBeforeInput"),0<Q.length&&(te=new Au("onBeforeInput","beforeinput",null,d,te),ne.push({event:te,listeners:Q}),te.data=Ne))}ih(ne,a)})}function hr(i,a,d){return{instance:i,listener:a,currentTarget:d}}function Ta(i,a){for(var d=a+"Capture",f=[];i!==null;){var g=i,x=g.stateNode;g.tag===5&&x!==null&&(g=x,x=Yi(i,d),x!=null&&f.unshift(hr(i,x,g)),x=Yi(i,a),x!=null&&f.push(hr(i,x,g))),i=i.return}return f}function yi(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ah(i,a,d,f,g){for(var x=a._reactName,_=[];d!==null&&d!==f;){var D=d,z=D.alternate,Q=D.stateNode;if(z!==null&&z===f)break;D.tag===5&&Q!==null&&(D=Q,g?(z=Yi(d,x),z!=null&&_.unshift(hr(d,z,D))):g||(z=Yi(d,x),z!=null&&_.push(hr(d,z,D)))),d=d.return}_.length!==0&&i.push({event:a,listeners:_})}var Bv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function lh(i){return(typeof i=="string"?i:""+i).replace(Bv,`
`).replace($v,"")}function La(i,a,d){if(a=lh(a),lh(i)!==a&&d)throw Error(s(425))}function Ma(){}var Uo=null,Wo=null;function Ho(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Vo=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(i){return oh.resolve(null).then(i).catch(Hv)}:Vo;function Hv(i){setTimeout(function(){throw i})}function qo(i,a){var d=a,f=0;do{var g=d.nextSibling;if(i.removeChild(d),g&&g.nodeType===8)if(d=g.data,d==="/$"){if(f===0){i.removeChild(g),sr(a);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=g}while(d);sr(a)}function sn(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return i}function ch(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(a===0)return i;a--}else d==="/$"&&a++}i=i.previousSibling}return null}var bi=Math.random().toString(36).slice(2),js="__reactFiber$"+bi,fr="__reactProps$"+bi,As="__reactContainer$"+bi,Yo="__reactEvents$"+bi,Vv="__reactListeners$"+bi,qv="__reactHandles$"+bi;function An(i){var a=i[js];if(a)return a;for(var d=i.parentNode;d;){if(a=d[As]||d[js]){if(d=a.alternate,a.child!==null||d!==null&&d.child!==null)for(i=ch(i);i!==null;){if(d=i[js])return d;i=ch(i)}return a}i=d,d=i.parentNode}return null}function pr(i){return i=i[js]||i[As],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ji(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(s(33))}function Oa(i){return i[fr]||null}var Qo=[],Ni=-1;function nn(i){return{current:i}}function Ue(i){0>Ni||(i.current=Qo[Ni],Qo[Ni]=null,Ni--)}function Be(i,a){Ni++,Qo[Ni]=i.current,i.current=a}var rn={},gt=nn(rn),Rt=nn(!1),Tn=rn;function wi(i,a){var d=i.type.contextTypes;if(!d)return rn;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===a)return f.__reactInternalMemoizedMaskedChildContext;var g={},x;for(x in d)g[x]=a[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=a,i.__reactInternalMemoizedMaskedChildContext=g),g}function Pt(i){return i=i.childContextTypes,i!=null}function za(){Ue(Rt),Ue(gt)}function dh(i,a,d){if(gt.current!==rn)throw Error(s(168));Be(gt,a),Be(Rt,d)}function uh(i,a,d){var f=i.stateNode;if(a=a.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var g in f)if(!(g in a))throw Error(s(108,Re(i)||"Unknown",g));return Z({},d,f)}function Ia(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||rn,Tn=gt.current,Be(gt,i),Be(Rt,Rt.current),!0}function hh(i,a,d){var f=i.stateNode;if(!f)throw Error(s(169));d?(i=uh(i,a,Tn),f.__reactInternalMemoizedMergedChildContext=i,Ue(Rt),Ue(gt),Be(gt,i)):Ue(Rt),Be(Rt,d)}var Ts=null,Fa=!1,Ko=!1;function fh(i){Ts===null?Ts=[i]:Ts.push(i)}function Yv(i){Fa=!0,fh(i)}function an(){if(!Ko&&Ts!==null){Ko=!0;var i=0,a=ze;try{var d=Ts;for(ze=1;i<d.length;i++){var f=d[i];do f=f(!0);while(f!==null)}Ts=null,Fa=!1}catch(g){throw Ts!==null&&(Ts=Ts.slice(i+1)),mu(xo,an),g}finally{ze=a,Ko=!1}}return null}var _i=[],ki=0,Ba=null,$a=0,Qt=[],Kt=0,Ln=null,Ls=1,Ms="";function Mn(i,a){_i[ki++]=$a,_i[ki++]=Ba,Ba=i,$a=a}function ph(i,a,d){Qt[Kt++]=Ls,Qt[Kt++]=Ms,Qt[Kt++]=Ln,Ln=i;var f=Ls;i=Ms;var g=32-ls(f)-1;f&=~(1<<g),d+=1;var x=32-ls(a)+g;if(30<x){var _=g-g%5;x=(f&(1<<_)-1).toString(32),f>>=_,g-=_,Ls=1<<32-ls(a)+g|d<<g|f,Ms=x+i}else Ls=1<<x|d<<g|f,Ms=i}function Xo(i){i.return!==null&&(Mn(i,1),ph(i,1,0))}function Go(i){for(;i===Ba;)Ba=_i[--ki],_i[ki]=null,$a=_i[--ki],_i[ki]=null;for(;i===Ln;)Ln=Qt[--Kt],Qt[Kt]=null,Ms=Qt[--Kt],Qt[Kt]=null,Ls=Qt[--Kt],Qt[Kt]=null}var $t=null,Ut=null,Ve=!1,cs=null;function mh(i,a){var d=Zt(5,null,null,0);d.elementType="DELETED",d.stateNode=a,d.return=i,a=i.deletions,a===null?(i.deletions=[d],i.flags|=16):a.push(d)}function gh(i,a){switch(i.tag){case 5:var d=i.type;return a=a.nodeType!==1||d.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(i.stateNode=a,$t=i,Ut=sn(a.firstChild),!0):!1;case 6:return a=i.pendingProps===""||a.nodeType!==3?null:a,a!==null?(i.stateNode=a,$t=i,Ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(d=Ln!==null?{id:Ls,overflow:Ms}:null,i.memoizedState={dehydrated:a,treeContext:d,retryLane:1073741824},d=Zt(18,null,null,0),d.stateNode=a,d.return=i,i.child=d,$t=i,Ut=null,!0):!1;default:return!1}}function Jo(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Zo(i){if(Ve){var a=Ut;if(a){var d=a;if(!gh(i,a)){if(Jo(i))throw Error(s(418));a=sn(d.nextSibling);var f=$t;a&&gh(i,a)?mh(f,d):(i.flags=i.flags&-4097|2,Ve=!1,$t=i)}}else{if(Jo(i))throw Error(s(418));i.flags=i.flags&-4097|2,Ve=!1,$t=i}}}function xh(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$t=i}function Ua(i){if(i!==$t)return!1;if(!Ve)return xh(i),Ve=!0,!1;var a;if((a=i.tag!==3)&&!(a=i.tag!==5)&&(a=i.type,a=a!=="head"&&a!=="body"&&!Ho(i.type,i.memoizedProps)),a&&(a=Ut)){if(Jo(i))throw vh(),Error(s(418));for(;a;)mh(i,a),a=sn(a.nextSibling)}if(xh(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));e:{for(i=i.nextSibling,a=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(a===0){Ut=sn(i.nextSibling);break e}a--}else d!=="$"&&d!=="$!"&&d!=="$?"||a++}i=i.nextSibling}Ut=null}}else Ut=$t?sn(i.stateNode.nextSibling):null;return!0}function vh(){for(var i=Ut;i;)i=sn(i.nextSibling)}function Si(){Ut=$t=null,Ve=!1}function ec(i){cs===null?cs=[i]:cs.push(i)}var Qv=I.ReactCurrentBatchConfig;function mr(i,a,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(s(309));var f=d.stateNode}if(!f)throw Error(s(147,i));var g=f,x=""+i;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===x?a.ref:(a=function(_){var D=g.refs;_===null?delete D[x]:D[x]=_},a._stringRef=x,a)}if(typeof i!="string")throw Error(s(284));if(!d._owner)throw Error(s(290,i))}return i}function Wa(i,a){throw i=Object.prototype.toString.call(a),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i))}function yh(i){var a=i._init;return a(i._payload)}function bh(i){function a(q,F){if(i){var Y=q.deletions;Y===null?(q.deletions=[F],q.flags|=16):Y.push(F)}}function d(q,F){if(!i)return null;for(;F!==null;)a(q,F),F=F.sibling;return null}function f(q,F){for(q=new Map;F!==null;)F.key!==null?q.set(F.key,F):q.set(F.index,F),F=F.sibling;return q}function g(q,F){return q=pn(q,F),q.index=0,q.sibling=null,q}function x(q,F,Y){return q.index=Y,i?(Y=q.alternate,Y!==null?(Y=Y.index,Y<F?(q.flags|=2,F):Y):(q.flags|=2,F)):(q.flags|=1048576,F)}function _(q){return i&&q.alternate===null&&(q.flags|=2),q}function D(q,F,Y,re){return F===null||F.tag!==6?(F=Vc(Y,q.mode,re),F.return=q,F):(F=g(F,Y),F.return=q,F)}function z(q,F,Y,re){var ve=Y.type;return ve===L?te(q,F,Y.props.children,re,Y.key):F!==null&&(F.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===E&&yh(ve)===F.type)?(re=g(F,Y.props),re.ref=mr(q,F,Y),re.return=q,re):(re=fl(Y.type,Y.key,Y.props,null,q.mode,re),re.ref=mr(q,F,Y),re.return=q,re)}function Q(q,F,Y,re){return F===null||F.tag!==4||F.stateNode.containerInfo!==Y.containerInfo||F.stateNode.implementation!==Y.implementation?(F=qc(Y,q.mode,re),F.return=q,F):(F=g(F,Y.children||[]),F.return=q,F)}function te(q,F,Y,re,ve){return F===null||F.tag!==7?(F=Wn(Y,q.mode,re,ve),F.return=q,F):(F=g(F,Y),F.return=q,F)}function ne(q,F,Y){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Vc(""+F,q.mode,Y),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case R:return Y=fl(F.type,F.key,F.props,null,q.mode,Y),Y.ref=mr(q,null,F),Y.return=q,Y;case $:return F=qc(F,q.mode,Y),F.return=q,F;case E:var re=F._init;return ne(q,re(F._payload),Y)}if(is(F)||ie(F))return F=Wn(F,q.mode,Y,null),F.return=q,F;Wa(q,F)}return null}function ee(q,F,Y,re){var ve=F!==null?F.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return ve!==null?null:D(q,F,""+Y,re);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case R:return Y.key===ve?z(q,F,Y,re):null;case $:return Y.key===ve?Q(q,F,Y,re):null;case E:return ve=Y._init,ee(q,F,ve(Y._payload),re)}if(is(Y)||ie(Y))return ve!==null?null:te(q,F,Y,re,null);Wa(q,Y)}return null}function de(q,F,Y,re,ve){if(typeof re=="string"&&re!==""||typeof re=="number")return q=q.get(Y)||null,D(F,q,""+re,ve);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case R:return q=q.get(re.key===null?Y:re.key)||null,z(F,q,re,ve);case $:return q=q.get(re.key===null?Y:re.key)||null,Q(F,q,re,ve);case E:var je=re._init;return de(q,F,Y,je(re._payload),ve)}if(is(re)||ie(re))return q=q.get(Y)||null,te(F,q,re,ve,null);Wa(F,re)}return null}function me(q,F,Y,re){for(var ve=null,je=null,Ne=F,_e=F=0,ht=null;Ne!==null&&_e<Y.length;_e++){Ne.index>_e?(ht=Ne,Ne=null):ht=Ne.sibling;var Ae=ee(q,Ne,Y[_e],re);if(Ae===null){Ne===null&&(Ne=ht);break}i&&Ne&&Ae.alternate===null&&a(q,Ne),F=x(Ae,F,_e),je===null?ve=Ae:je.sibling=Ae,je=Ae,Ne=ht}if(_e===Y.length)return d(q,Ne),Ve&&Mn(q,_e),ve;if(Ne===null){for(;_e<Y.length;_e++)Ne=ne(q,Y[_e],re),Ne!==null&&(F=x(Ne,F,_e),je===null?ve=Ne:je.sibling=Ne,je=Ne);return Ve&&Mn(q,_e),ve}for(Ne=f(q,Ne);_e<Y.length;_e++)ht=de(Ne,q,_e,Y[_e],re),ht!==null&&(i&&ht.alternate!==null&&Ne.delete(ht.key===null?_e:ht.key),F=x(ht,F,_e),je===null?ve=ht:je.sibling=ht,je=ht);return i&&Ne.forEach(function(mn){return a(q,mn)}),Ve&&Mn(q,_e),ve}function ge(q,F,Y,re){var ve=ie(Y);if(typeof ve!="function")throw Error(s(150));if(Y=ve.call(Y),Y==null)throw Error(s(151));for(var je=ve=null,Ne=F,_e=F=0,ht=null,Ae=Y.next();Ne!==null&&!Ae.done;_e++,Ae=Y.next()){Ne.index>_e?(ht=Ne,Ne=null):ht=Ne.sibling;var mn=ee(q,Ne,Ae.value,re);if(mn===null){Ne===null&&(Ne=ht);break}i&&Ne&&mn.alternate===null&&a(q,Ne),F=x(mn,F,_e),je===null?ve=mn:je.sibling=mn,je=mn,Ne=ht}if(Ae.done)return d(q,Ne),Ve&&Mn(q,_e),ve;if(Ne===null){for(;!Ae.done;_e++,Ae=Y.next())Ae=ne(q,Ae.value,re),Ae!==null&&(F=x(Ae,F,_e),je===null?ve=Ae:je.sibling=Ae,je=Ae);return Ve&&Mn(q,_e),ve}for(Ne=f(q,Ne);!Ae.done;_e++,Ae=Y.next())Ae=de(Ne,q,_e,Ae.value,re),Ae!==null&&(i&&Ae.alternate!==null&&Ne.delete(Ae.key===null?_e:Ae.key),F=x(Ae,F,_e),je===null?ve=Ae:je.sibling=Ae,je=Ae);return i&&Ne.forEach(function(Cy){return a(q,Cy)}),Ve&&Mn(q,_e),ve}function Ze(q,F,Y,re){if(typeof Y=="object"&&Y!==null&&Y.type===L&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case R:e:{for(var ve=Y.key,je=F;je!==null;){if(je.key===ve){if(ve=Y.type,ve===L){if(je.tag===7){d(q,je.sibling),F=g(je,Y.props.children),F.return=q,q=F;break e}}else if(je.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===E&&yh(ve)===je.type){d(q,je.sibling),F=g(je,Y.props),F.ref=mr(q,je,Y),F.return=q,q=F;break e}d(q,je);break}else a(q,je);je=je.sibling}Y.type===L?(F=Wn(Y.props.children,q.mode,re,Y.key),F.return=q,q=F):(re=fl(Y.type,Y.key,Y.props,null,q.mode,re),re.ref=mr(q,F,Y),re.return=q,q=re)}return _(q);case $:e:{for(je=Y.key;F!==null;){if(F.key===je)if(F.tag===4&&F.stateNode.containerInfo===Y.containerInfo&&F.stateNode.implementation===Y.implementation){d(q,F.sibling),F=g(F,Y.children||[]),F.return=q,q=F;break e}else{d(q,F);break}else a(q,F);F=F.sibling}F=qc(Y,q.mode,re),F.return=q,q=F}return _(q);case E:return je=Y._init,Ze(q,F,je(Y._payload),re)}if(is(Y))return me(q,F,Y,re);if(ie(Y))return ge(q,F,Y,re);Wa(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,F!==null&&F.tag===6?(d(q,F.sibling),F=g(F,Y),F.return=q,q=F):(d(q,F),F=Vc(Y,q.mode,re),F.return=q,q=F),_(q)):d(q,F)}return Ze}var Ci=bh(!0),jh=bh(!1),Ha=nn(null),Va=null,Ei=null,tc=null;function sc(){tc=Ei=Va=null}function nc(i){var a=Ha.current;Ue(Ha),i._currentValue=a}function ic(i,a,d){for(;i!==null;){var f=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,f!==null&&(f.childLanes|=a)):f!==null&&(f.childLanes&a)!==a&&(f.childLanes|=a),i===d)break;i=i.return}}function Ri(i,a){Va=i,tc=Ei=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&a)!==0&&(Dt=!0),i.firstContext=null)}function Xt(i){var a=i._currentValue;if(tc!==i)if(i={context:i,memoizedValue:a,next:null},Ei===null){if(Va===null)throw Error(s(308));Ei=i,Va.dependencies={lanes:0,firstContext:i}}else Ei=Ei.next=i;return a}var On=null;function rc(i){On===null?On=[i]:On.push(i)}function Nh(i,a,d,f){var g=a.interleaved;return g===null?(d.next=d,rc(a)):(d.next=g.next,g.next=d),a.interleaved=d,Os(i,f)}function Os(i,a){i.lanes|=a;var d=i.alternate;for(d!==null&&(d.lanes|=a),d=i,i=i.return;i!==null;)i.childLanes|=a,d=i.alternate,d!==null&&(d.childLanes|=a),d=i,i=i.return;return d.tag===3?d.stateNode:null}var ln=!1;function ac(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function zs(i,a){return{eventTime:i,lane:a,tag:0,payload:null,callback:null,next:null}}function on(i,a,d){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(De&2)!==0){var g=f.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),f.pending=a,Os(i,d)}return g=f.interleaved,g===null?(a.next=a,rc(f)):(a.next=g.next,g.next=a),f.interleaved=a,Os(i,d)}function qa(i,a,d){if(a=a.updateQueue,a!==null&&(a=a.shared,(d&4194240)!==0)){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,bo(i,d)}}function _h(i,a){var d=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var g=null,x=null;if(d=d.firstBaseUpdate,d!==null){do{var _={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};x===null?g=x=_:x=x.next=_,d=d.next}while(d!==null);x===null?g=x=a:x=x.next=a}else g=x=a;d={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=a:i.next=a,d.lastBaseUpdate=a}function Ya(i,a,d,f){var g=i.updateQueue;ln=!1;var x=g.firstBaseUpdate,_=g.lastBaseUpdate,D=g.shared.pending;if(D!==null){g.shared.pending=null;var z=D,Q=z.next;z.next=null,_===null?x=Q:_.next=Q,_=z;var te=i.alternate;te!==null&&(te=te.updateQueue,D=te.lastBaseUpdate,D!==_&&(D===null?te.firstBaseUpdate=Q:D.next=Q,te.lastBaseUpdate=z))}if(x!==null){var ne=g.baseState;_=0,te=Q=z=null,D=x;do{var ee=D.lane,de=D.eventTime;if((f&ee)===ee){te!==null&&(te=te.next={eventTime:de,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var me=i,ge=D;switch(ee=a,de=d,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){ne=me.call(de,ne,ee);break e}ne=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,ee=typeof me=="function"?me.call(de,ne,ee):me,ee==null)break e;ne=Z({},ne,ee);break e;case 2:ln=!0}}D.callback!==null&&D.lane!==0&&(i.flags|=64,ee=g.effects,ee===null?g.effects=[D]:ee.push(D))}else de={eventTime:de,lane:ee,tag:D.tag,payload:D.payload,callback:D.callback,next:null},te===null?(Q=te=de,z=ne):te=te.next=de,_|=ee;if(D=D.next,D===null){if(D=g.shared.pending,D===null)break;ee=D,D=ee.next,ee.next=null,g.lastBaseUpdate=ee,g.shared.pending=null}}while(!0);if(te===null&&(z=ne),g.baseState=z,g.firstBaseUpdate=Q,g.lastBaseUpdate=te,a=g.shared.interleaved,a!==null){g=a;do _|=g.lane,g=g.next;while(g!==a)}else x===null&&(g.shared.lanes=0);Fn|=_,i.lanes=_,i.memoizedState=ne}}function kh(i,a,d){if(i=a.effects,a.effects=null,i!==null)for(a=0;a<i.length;a++){var f=i[a],g=f.callback;if(g!==null){if(f.callback=null,f=d,typeof g!="function")throw Error(s(191,g));g.call(f)}}}var gr={},Ns=nn(gr),xr=nn(gr),vr=nn(gr);function zn(i){if(i===gr)throw Error(s(174));return i}function lc(i,a){switch(Be(vr,a),Be(xr,i),Be(Ns,gr),i=a.nodeType,i){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Pe(null,"");break;default:i=i===8?a.parentNode:a,a=i.namespaceURI||null,i=i.tagName,a=Pe(a,i)}Ue(Ns),Be(Ns,a)}function Pi(){Ue(Ns),Ue(xr),Ue(vr)}function Sh(i){zn(vr.current);var a=zn(Ns.current),d=Pe(a,i.type);a!==d&&(Be(xr,i),Be(Ns,d))}function oc(i){xr.current===i&&(Ue(Ns),Ue(xr))}var qe=nn(0);function Qa(i){for(var a=i;a!==null;){if(a.tag===13){var d=a.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var cc=[];function dc(){for(var i=0;i<cc.length;i++)cc[i]._workInProgressVersionPrimary=null;cc.length=0}var Ka=I.ReactCurrentDispatcher,uc=I.ReactCurrentBatchConfig,In=0,Ye=null,lt=null,dt=null,Xa=!1,yr=!1,br=0,Kv=0;function xt(){throw Error(s(321))}function hc(i,a){if(a===null)return!1;for(var d=0;d<a.length&&d<i.length;d++)if(!os(i[d],a[d]))return!1;return!0}function fc(i,a,d,f,g,x){if(In=x,Ye=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Ka.current=i===null||i.memoizedState===null?Zv:ey,i=d(f,g),yr){x=0;do{if(yr=!1,br=0,25<=x)throw Error(s(301));x+=1,dt=lt=null,a.updateQueue=null,Ka.current=ty,i=d(f,g)}while(yr)}if(Ka.current=Za,a=lt!==null&&lt.next!==null,In=0,dt=lt=Ye=null,Xa=!1,a)throw Error(s(300));return i}function pc(){var i=br!==0;return br=0,i}function ws(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Ye.memoizedState=dt=i:dt=dt.next=i,dt}function Gt(){if(lt===null){var i=Ye.alternate;i=i!==null?i.memoizedState:null}else i=lt.next;var a=dt===null?Ye.memoizedState:dt.next;if(a!==null)dt=a,lt=i;else{if(i===null)throw Error(s(310));lt=i,i={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?Ye.memoizedState=dt=i:dt=dt.next=i}return dt}function jr(i,a){return typeof a=="function"?a(i):a}function mc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=lt,g=f.baseQueue,x=d.pending;if(x!==null){if(g!==null){var _=g.next;g.next=x.next,x.next=_}f.baseQueue=g=x,d.pending=null}if(g!==null){x=g.next,f=f.baseState;var D=_=null,z=null,Q=x;do{var te=Q.lane;if((In&te)===te)z!==null&&(z=z.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),f=Q.hasEagerState?Q.eagerState:i(f,Q.action);else{var ne={lane:te,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};z===null?(D=z=ne,_=f):z=z.next=ne,Ye.lanes|=te,Fn|=te}Q=Q.next}while(Q!==null&&Q!==x);z===null?_=f:z.next=D,os(f,a.memoizedState)||(Dt=!0),a.memoizedState=f,a.baseState=_,a.baseQueue=z,d.lastRenderedState=f}if(i=d.interleaved,i!==null){g=i;do x=g.lane,Ye.lanes|=x,Fn|=x,g=g.next;while(g!==i)}else g===null&&(d.lanes=0);return[a.memoizedState,d.dispatch]}function gc(i){var a=Gt(),d=a.queue;if(d===null)throw Error(s(311));d.lastRenderedReducer=i;var f=d.dispatch,g=d.pending,x=a.memoizedState;if(g!==null){d.pending=null;var _=g=g.next;do x=i(x,_.action),_=_.next;while(_!==g);os(x,a.memoizedState)||(Dt=!0),a.memoizedState=x,a.baseQueue===null&&(a.baseState=x),d.lastRenderedState=x}return[x,f]}function Ch(){}function Eh(i,a){var d=Ye,f=Gt(),g=a(),x=!os(f.memoizedState,g);if(x&&(f.memoizedState=g,Dt=!0),f=f.queue,xc(Dh.bind(null,d,f,i),[i]),f.getSnapshot!==a||x||dt!==null&&dt.memoizedState.tag&1){if(d.flags|=2048,Nr(9,Ph.bind(null,d,f,g,a),void 0,null),ut===null)throw Error(s(349));(In&30)!==0||Rh(d,a,g)}return g}function Rh(i,a,d){i.flags|=16384,i={getSnapshot:a,value:d},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.stores=[i]):(d=a.stores,d===null?a.stores=[i]:d.push(i))}function Ph(i,a,d,f){a.value=d,a.getSnapshot=f,Ah(a)&&Th(i)}function Dh(i,a,d){return d(function(){Ah(a)&&Th(i)})}function Ah(i){var a=i.getSnapshot;i=i.value;try{var d=a();return!os(i,d)}catch{return!0}}function Th(i){var a=Os(i,1);a!==null&&fs(a,i,1,-1)}function Lh(i){var a=ws();return typeof i=="function"&&(i=i()),a.memoizedState=a.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:i},a.queue=i,i=i.dispatch=Jv.bind(null,Ye,i),[a.memoizedState,i]}function Nr(i,a,d,f){return i={tag:i,create:a,destroy:d,deps:f,next:null},a=Ye.updateQueue,a===null?(a={lastEffect:null,stores:null},Ye.updateQueue=a,a.lastEffect=i.next=i):(d=a.lastEffect,d===null?a.lastEffect=i.next=i:(f=d.next,d.next=i,i.next=f,a.lastEffect=i)),i}function Mh(){return Gt().memoizedState}function Ga(i,a,d,f){var g=ws();Ye.flags|=i,g.memoizedState=Nr(1|a,d,void 0,f===void 0?null:f)}function Ja(i,a,d,f){var g=Gt();f=f===void 0?null:f;var x=void 0;if(lt!==null){var _=lt.memoizedState;if(x=_.destroy,f!==null&&hc(f,_.deps)){g.memoizedState=Nr(a,d,x,f);return}}Ye.flags|=i,g.memoizedState=Nr(1|a,d,x,f)}function Oh(i,a){return Ga(8390656,8,i,a)}function xc(i,a){return Ja(2048,8,i,a)}function zh(i,a){return Ja(4,2,i,a)}function Ih(i,a){return Ja(4,4,i,a)}function Fh(i,a){if(typeof a=="function")return i=i(),a(i),function(){a(null)};if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function Bh(i,a,d){return d=d!=null?d.concat([i]):null,Ja(4,4,Fh.bind(null,a,i),d)}function vc(){}function $h(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&hc(a,f[1])?f[0]:(d.memoizedState=[i,a],i)}function Uh(i,a){var d=Gt();a=a===void 0?null:a;var f=d.memoizedState;return f!==null&&a!==null&&hc(a,f[1])?f[0]:(i=i(),d.memoizedState=[i,a],i)}function Wh(i,a,d){return(In&21)===0?(i.baseState&&(i.baseState=!1,Dt=!0),i.memoizedState=d):(os(d,a)||(d=yu(),Ye.lanes|=d,Fn|=d,i.baseState=!0),a)}function Xv(i,a){var d=ze;ze=d!==0&&4>d?d:4,i(!0);var f=uc.transition;uc.transition={};try{i(!1),a()}finally{ze=d,uc.transition=f}}function Hh(){return Gt().memoizedState}function Gv(i,a,d){var f=hn(i);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Vh(i))qh(a,d);else if(d=Nh(i,a,d,f),d!==null){var g=Ct();fs(d,i,f,g),Yh(d,a,f)}}function Jv(i,a,d){var f=hn(i),g={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Vh(i))qh(a,g);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=a.lastRenderedReducer,x!==null))try{var _=a.lastRenderedState,D=x(_,d);if(g.hasEagerState=!0,g.eagerState=D,os(D,_)){var z=a.interleaved;z===null?(g.next=g,rc(a)):(g.next=z.next,z.next=g),a.interleaved=g;return}}catch{}finally{}d=Nh(i,a,g,f),d!==null&&(g=Ct(),fs(d,i,f,g),Yh(d,a,f))}}function Vh(i){var a=i.alternate;return i===Ye||a!==null&&a===Ye}function qh(i,a){yr=Xa=!0;var d=i.pending;d===null?a.next=a:(a.next=d.next,d.next=a),i.pending=a}function Yh(i,a,d){if((d&4194240)!==0){var f=a.lanes;f&=i.pendingLanes,d|=f,a.lanes=d,bo(i,d)}}var Za={readContext:Xt,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Zv={readContext:Xt,useCallback:function(i,a){return ws().memoizedState=[i,a===void 0?null:a],i},useContext:Xt,useEffect:Oh,useImperativeHandle:function(i,a,d){return d=d!=null?d.concat([i]):null,Ga(4194308,4,Fh.bind(null,a,i),d)},useLayoutEffect:function(i,a){return Ga(4194308,4,i,a)},useInsertionEffect:function(i,a){return Ga(4,2,i,a)},useMemo:function(i,a){var d=ws();return a=a===void 0?null:a,i=i(),d.memoizedState=[i,a],i},useReducer:function(i,a,d){var f=ws();return a=d!==void 0?d(a):a,f.memoizedState=f.baseState=a,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:a},f.queue=i,i=i.dispatch=Gv.bind(null,Ye,i),[f.memoizedState,i]},useRef:function(i){var a=ws();return i={current:i},a.memoizedState=i},useState:Lh,useDebugValue:vc,useDeferredValue:function(i){return ws().memoizedState=i},useTransition:function(){var i=Lh(!1),a=i[0];return i=Xv.bind(null,i[1]),ws().memoizedState=i,[a,i]},useMutableSource:function(){},useSyncExternalStore:function(i,a,d){var f=Ye,g=ws();if(Ve){if(d===void 0)throw Error(s(407));d=d()}else{if(d=a(),ut===null)throw Error(s(349));(In&30)!==0||Rh(f,a,d)}g.memoizedState=d;var x={value:d,getSnapshot:a};return g.queue=x,Oh(Dh.bind(null,f,x,i),[i]),f.flags|=2048,Nr(9,Ph.bind(null,f,x,d,a),void 0,null),d},useId:function(){var i=ws(),a=ut.identifierPrefix;if(Ve){var d=Ms,f=Ls;d=(f&~(1<<32-ls(f)-1)).toString(32)+d,a=":"+a+"R"+d,d=br++,0<d&&(a+="H"+d.toString(32)),a+=":"}else d=Kv++,a=":"+a+"r"+d.toString(32)+":";return i.memoizedState=a},unstable_isNewReconciler:!1},ey={readContext:Xt,useCallback:$h,useContext:Xt,useEffect:xc,useImperativeHandle:Bh,useInsertionEffect:zh,useLayoutEffect:Ih,useMemo:Uh,useReducer:mc,useRef:Mh,useState:function(){return mc(jr)},useDebugValue:vc,useDeferredValue:function(i){var a=Gt();return Wh(a,lt.memoizedState,i)},useTransition:function(){var i=mc(jr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Ch,useSyncExternalStore:Eh,useId:Hh,unstable_isNewReconciler:!1},ty={readContext:Xt,useCallback:$h,useContext:Xt,useEffect:xc,useImperativeHandle:Bh,useInsertionEffect:zh,useLayoutEffect:Ih,useMemo:Uh,useReducer:gc,useRef:Mh,useState:function(){return gc(jr)},useDebugValue:vc,useDeferredValue:function(i){var a=Gt();return lt===null?a.memoizedState=i:Wh(a,lt.memoizedState,i)},useTransition:function(){var i=gc(jr)[0],a=Gt().memoizedState;return[i,a]},useMutableSource:Ch,useSyncExternalStore:Eh,useId:Hh,unstable_isNewReconciler:!1};function ds(i,a){if(i&&i.defaultProps){a=Z({},a),i=i.defaultProps;for(var d in i)a[d]===void 0&&(a[d]=i[d]);return a}return a}function yc(i,a,d,f){a=i.memoizedState,d=d(f,a),d=d==null?a:Z({},a,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var el={isMounted:function(i){return(i=i._reactInternals)?Dn(i)===i:!1},enqueueSetState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),x=zs(f,g);x.payload=a,d!=null&&(x.callback=d),a=on(i,x,g),a!==null&&(fs(a,i,g,f),qa(a,i,g))},enqueueReplaceState:function(i,a,d){i=i._reactInternals;var f=Ct(),g=hn(i),x=zs(f,g);x.tag=1,x.payload=a,d!=null&&(x.callback=d),a=on(i,x,g),a!==null&&(fs(a,i,g,f),qa(a,i,g))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var d=Ct(),f=hn(i),g=zs(d,f);g.tag=2,a!=null&&(g.callback=a),a=on(i,g,f),a!==null&&(fs(a,i,f,d),qa(a,i,f))}};function Qh(i,a,d,f,g,x,_){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,_):a.prototype&&a.prototype.isPureReactComponent?!or(d,f)||!or(g,x):!0}function Kh(i,a,d){var f=!1,g=rn,x=a.contextType;return typeof x=="object"&&x!==null?x=Xt(x):(g=Pt(a)?Tn:gt.current,f=a.contextTypes,x=(f=f!=null)?wi(i,g):rn),a=new a(d,x),i.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=el,i.stateNode=a,a._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=x),a}function Xh(i,a,d,f){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(d,f),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(d,f),a.state!==i&&el.enqueueReplaceState(a,a.state,null)}function bc(i,a,d,f){var g=i.stateNode;g.props=d,g.state=i.memoizedState,g.refs={},ac(i);var x=a.contextType;typeof x=="object"&&x!==null?g.context=Xt(x):(x=Pt(a)?Tn:gt.current,g.context=wi(i,x)),g.state=i.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(yc(i,a,x,d),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&el.enqueueReplaceState(g,g.state,null),Ya(i,d,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Di(i,a){try{var d="",f=a;do d+=ye(f),f=f.return;while(f);var g=d}catch(x){g=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:a,stack:g,digest:null}}function jc(i,a,d){return{value:i,source:null,stack:d??null,digest:a??null}}function Nc(i,a){try{console.error(a.value)}catch(d){setTimeout(function(){throw d})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Gh(i,a,d){d=zs(-1,d),d.tag=3,d.payload={element:null};var f=a.value;return d.callback=function(){ll||(ll=!0,zc=f),Nc(i,a)},d}function Jh(i,a,d){d=zs(-1,d),d.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=a.value;d.payload=function(){return f(g)},d.callback=function(){Nc(i,a)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(d.callback=function(){Nc(i,a),typeof f!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var _=a.stack;this.componentDidCatch(a.value,{componentStack:_!==null?_:""})}),d}function Zh(i,a,d){var f=i.pingCache;if(f===null){f=i.pingCache=new sy;var g=new Set;f.set(a,g)}else g=f.get(a),g===void 0&&(g=new Set,f.set(a,g));g.has(d)||(g.add(d),i=gy.bind(null,i,a,d),a.then(i,i))}function ef(i){do{var a;if((a=i.tag===13)&&(a=i.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return i;i=i.return}while(i!==null);return null}function tf(i,a,d,f,g){return(i.mode&1)===0?(i===a?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(a=zs(-1,1),a.tag=2,on(d,a,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var ny=I.ReactCurrentOwner,Dt=!1;function St(i,a,d,f){a.child=i===null?jh(a,null,d,f):Ci(a,i.child,d,f)}function sf(i,a,d,f,g){d=d.render;var x=a.ref;return Ri(a,g),f=fc(i,a,d,f,x,g),d=pc(),i!==null&&!Dt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&d&&Xo(a),a.flags|=1,St(i,a,f,g),a.child)}function nf(i,a,d,f,g){if(i===null){var x=d.type;return typeof x=="function"&&!Hc(x)&&x.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(a.tag=15,a.type=x,rf(i,a,x,f,g)):(i=fl(d.type,null,f,a,a.mode,g),i.ref=a.ref,i.return=a,a.child=i)}if(x=i.child,(i.lanes&g)===0){var _=x.memoizedProps;if(d=d.compare,d=d!==null?d:or,d(_,f)&&i.ref===a.ref)return Is(i,a,g)}return a.flags|=1,i=pn(x,f),i.ref=a.ref,i.return=a,a.child=i}function rf(i,a,d,f,g){if(i!==null){var x=i.memoizedProps;if(or(x,f)&&i.ref===a.ref)if(Dt=!1,a.pendingProps=f=x,(i.lanes&g)!==0)(i.flags&131072)!==0&&(Dt=!0);else return a.lanes=i.lanes,Is(i,a,g)}return wc(i,a,d,f,g)}function af(i,a,d){var f=a.pendingProps,g=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Be(Ti,Wt),Wt|=d;else{if((d&1073741824)===0)return i=x!==null?x.baseLanes|d:d,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:i,cachePool:null,transitions:null},a.updateQueue=null,Be(Ti,Wt),Wt|=i,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:d,Be(Ti,Wt),Wt|=f}else x!==null?(f=x.baseLanes|d,a.memoizedState=null):f=d,Be(Ti,Wt),Wt|=f;return St(i,a,g,d),a.child}function lf(i,a){var d=a.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(a.flags|=512,a.flags|=2097152)}function wc(i,a,d,f,g){var x=Pt(d)?Tn:gt.current;return x=wi(a,x),Ri(a,g),d=fc(i,a,d,f,x,g),f=pc(),i!==null&&!Dt?(a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~g,Is(i,a,g)):(Ve&&f&&Xo(a),a.flags|=1,St(i,a,d,g),a.child)}function of(i,a,d,f,g){if(Pt(d)){var x=!0;Ia(a)}else x=!1;if(Ri(a,g),a.stateNode===null)sl(i,a),Kh(a,d,f),bc(a,d,f,g),f=!0;else if(i===null){var _=a.stateNode,D=a.memoizedProps;_.props=D;var z=_.context,Q=d.contextType;typeof Q=="object"&&Q!==null?Q=Xt(Q):(Q=Pt(d)?Tn:gt.current,Q=wi(a,Q));var te=d.getDerivedStateFromProps,ne=typeof te=="function"||typeof _.getSnapshotBeforeUpdate=="function";ne||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(D!==f||z!==Q)&&Xh(a,_,f,Q),ln=!1;var ee=a.memoizedState;_.state=ee,Ya(a,f,_,g),z=a.memoizedState,D!==f||ee!==z||Rt.current||ln?(typeof te=="function"&&(yc(a,d,te,f),z=a.memoizedState),(D=ln||Qh(a,d,D,f,ee,z,Q))?(ne||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(a.flags|=4194308)):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=f,a.memoizedState=z),_.props=f,_.state=z,_.context=Q,f=D):(typeof _.componentDidMount=="function"&&(a.flags|=4194308),f=!1)}else{_=a.stateNode,wh(i,a),D=a.memoizedProps,Q=a.type===a.elementType?D:ds(a.type,D),_.props=Q,ne=a.pendingProps,ee=_.context,z=d.contextType,typeof z=="object"&&z!==null?z=Xt(z):(z=Pt(d)?Tn:gt.current,z=wi(a,z));var de=d.getDerivedStateFromProps;(te=typeof de=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(D!==ne||ee!==z)&&Xh(a,_,f,z),ln=!1,ee=a.memoizedState,_.state=ee,Ya(a,f,_,g);var me=a.memoizedState;D!==ne||ee!==me||Rt.current||ln?(typeof de=="function"&&(yc(a,d,de,f),me=a.memoizedState),(Q=ln||Qh(a,d,Q,f,ee,me,z)||!1)?(te||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(f,me,z),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(f,me,z)),typeof _.componentDidUpdate=="function"&&(a.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof _.componentDidUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=1024),a.memoizedProps=f,a.memoizedState=me),_.props=f,_.state=me,_.context=z,f=Q):(typeof _.componentDidUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||D===i.memoizedProps&&ee===i.memoizedState||(a.flags|=1024),f=!1)}return _c(i,a,d,f,x,g)}function _c(i,a,d,f,g,x){lf(i,a);var _=(a.flags&128)!==0;if(!f&&!_)return g&&hh(a,d,!1),Is(i,a,x);f=a.stateNode,ny.current=a;var D=_&&typeof d.getDerivedStateFromError!="function"?null:f.render();return a.flags|=1,i!==null&&_?(a.child=Ci(a,i.child,null,x),a.child=Ci(a,null,D,x)):St(i,a,D,x),a.memoizedState=f.state,g&&hh(a,d,!0),a.child}function cf(i){var a=i.stateNode;a.pendingContext?dh(i,a.pendingContext,a.pendingContext!==a.context):a.context&&dh(i,a.context,!1),lc(i,a.containerInfo)}function df(i,a,d,f,g){return Si(),ec(g),a.flags|=256,St(i,a,d,f),a.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Sc(i){return{baseLanes:i,cachePool:null,transitions:null}}function uf(i,a,d){var f=a.pendingProps,g=qe.current,x=!1,_=(a.flags&128)!==0,D;if((D=_)||(D=i!==null&&i.memoizedState===null?!1:(g&2)!==0),D?(x=!0,a.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),Be(qe,g&1),i===null)return Zo(a),i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((a.mode&1)===0?a.lanes=1:i.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(_=f.children,i=f.fallback,x?(f=a.mode,x=a.child,_={mode:"hidden",children:_},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=_):x=pl(_,f,0,null),i=Wn(i,f,d,null),x.return=a,i.return=a,x.sibling=i,a.child=x,a.child.memoizedState=Sc(d),a.memoizedState=kc,i):Cc(a,_));if(g=i.memoizedState,g!==null&&(D=g.dehydrated,D!==null))return iy(i,a,_,f,D,g,d);if(x){x=f.fallback,_=a.mode,g=i.child,D=g.sibling;var z={mode:"hidden",children:f.children};return(_&1)===0&&a.child!==g?(f=a.child,f.childLanes=0,f.pendingProps=z,a.deletions=null):(f=pn(g,z),f.subtreeFlags=g.subtreeFlags&14680064),D!==null?x=pn(D,x):(x=Wn(x,_,d,null),x.flags|=2),x.return=a,f.return=a,f.sibling=x,a.child=f,f=x,x=a.child,_=i.child.memoizedState,_=_===null?Sc(d):{baseLanes:_.baseLanes|d,cachePool:null,transitions:_.transitions},x.memoizedState=_,x.childLanes=i.childLanes&~d,a.memoizedState=kc,f}return x=i.child,i=x.sibling,f=pn(x,{mode:"visible",children:f.children}),(a.mode&1)===0&&(f.lanes=d),f.return=a,f.sibling=null,i!==null&&(d=a.deletions,d===null?(a.deletions=[i],a.flags|=16):d.push(i)),a.child=f,a.memoizedState=null,f}function Cc(i,a){return a=pl({mode:"visible",children:a},i.mode,0,null),a.return=i,i.child=a}function tl(i,a,d,f){return f!==null&&ec(f),Ci(a,i.child,null,d),i=Cc(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function iy(i,a,d,f,g,x,_){if(d)return a.flags&256?(a.flags&=-257,f=jc(Error(s(422))),tl(i,a,_,f)):a.memoizedState!==null?(a.child=i.child,a.flags|=128,null):(x=f.fallback,g=a.mode,f=pl({mode:"visible",children:f.children},g,0,null),x=Wn(x,g,_,null),x.flags|=2,f.return=a,x.return=a,f.sibling=x,a.child=f,(a.mode&1)!==0&&Ci(a,i.child,null,_),a.child.memoizedState=Sc(_),a.memoizedState=kc,x);if((a.mode&1)===0)return tl(i,a,_,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var D=f.dgst;return f=D,x=Error(s(419)),f=jc(x,f,void 0),tl(i,a,_,f)}if(D=(_&i.childLanes)!==0,Dt||D){if(f=ut,f!==null){switch(_&-_){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|_))!==0?0:g,g!==0&&g!==x.retryLane&&(x.retryLane=g,Os(i,g),fs(f,i,g,-1))}return Wc(),f=jc(Error(s(421))),tl(i,a,_,f)}return g.data==="$?"?(a.flags|=128,a.child=i.child,a=xy.bind(null,i),g._reactRetry=a,null):(i=x.treeContext,Ut=sn(g.nextSibling),$t=a,Ve=!0,cs=null,i!==null&&(Qt[Kt++]=Ls,Qt[Kt++]=Ms,Qt[Kt++]=Ln,Ls=i.id,Ms=i.overflow,Ln=a),a=Cc(a,f.children),a.flags|=4096,a)}function hf(i,a,d){i.lanes|=a;var f=i.alternate;f!==null&&(f.lanes|=a),ic(i.return,a,d)}function Ec(i,a,d,f,g){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:g}:(x.isBackwards=a,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=d,x.tailMode=g)}function ff(i,a,d){var f=a.pendingProps,g=f.revealOrder,x=f.tail;if(St(i,a,f.children,d),f=qe.current,(f&2)!==0)f=f&1|2,a.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&hf(i,d,a);else if(i.tag===19)hf(i,d,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break e;for(;i.sibling===null;){if(i.return===null||i.return===a)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Be(qe,f),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(d=a.child,g=null;d!==null;)i=d.alternate,i!==null&&Qa(i)===null&&(g=d),d=d.sibling;d=g,d===null?(g=a.child,a.child=null):(g=d.sibling,d.sibling=null),Ec(a,!1,g,d,x);break;case"backwards":for(d=null,g=a.child,a.child=null;g!==null;){if(i=g.alternate,i!==null&&Qa(i)===null){a.child=g;break}i=g.sibling,g.sibling=d,d=g,g=i}Ec(a,!0,d,null,x);break;case"together":Ec(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function sl(i,a){(a.mode&1)===0&&i!==null&&(i.alternate=null,a.alternate=null,a.flags|=2)}function Is(i,a,d){if(i!==null&&(a.dependencies=i.dependencies),Fn|=a.lanes,(d&a.childLanes)===0)return null;if(i!==null&&a.child!==i.child)throw Error(s(153));if(a.child!==null){for(i=a.child,d=pn(i,i.pendingProps),a.child=d,d.return=a;i.sibling!==null;)i=i.sibling,d=d.sibling=pn(i,i.pendingProps),d.return=a;d.sibling=null}return a.child}function ry(i,a,d){switch(a.tag){case 3:cf(a),Si();break;case 5:Sh(a);break;case 1:Pt(a.type)&&Ia(a);break;case 4:lc(a,a.stateNode.containerInfo);break;case 10:var f=a.type._context,g=a.memoizedProps.value;Be(Ha,f._currentValue),f._currentValue=g;break;case 13:if(f=a.memoizedState,f!==null)return f.dehydrated!==null?(Be(qe,qe.current&1),a.flags|=128,null):(d&a.child.childLanes)!==0?uf(i,a,d):(Be(qe,qe.current&1),i=Is(i,a,d),i!==null?i.sibling:null);Be(qe,qe.current&1);break;case 19:if(f=(d&a.childLanes)!==0,(i.flags&128)!==0){if(f)return ff(i,a,d);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Be(qe,qe.current),f)break;return null;case 22:case 23:return a.lanes=0,af(i,a,d)}return Is(i,a,d)}var pf,Rc,mf,gf;pf=function(i,a){for(var d=a.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break;for(;d.sibling===null;){if(d.return===null||d.return===a)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Rc=function(){},mf=function(i,a,d,f){var g=i.memoizedProps;if(g!==f){i=a.stateNode,zn(Ns.current);var x=null;switch(d){case"input":g=qt(i,g),f=qt(i,f),x=[];break;case"select":g=Z({},g,{value:void 0}),f=Z({},f,{value:void 0}),x=[];break;case"textarea":g=Cn(i,g),f=Cn(i,f),x=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ma)}ui(d,f);var _;d=null;for(Q in g)if(!f.hasOwnProperty(Q)&&g.hasOwnProperty(Q)&&g[Q]!=null)if(Q==="style"){var D=g[Q];for(_ in D)D.hasOwnProperty(_)&&(d||(d={}),d[_]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(l.hasOwnProperty(Q)?x||(x=[]):(x=x||[]).push(Q,null));for(Q in f){var z=f[Q];if(D=g!=null?g[Q]:void 0,f.hasOwnProperty(Q)&&z!==D&&(z!=null||D!=null))if(Q==="style")if(D){for(_ in D)!D.hasOwnProperty(_)||z&&z.hasOwnProperty(_)||(d||(d={}),d[_]="");for(_ in z)z.hasOwnProperty(_)&&D[_]!==z[_]&&(d||(d={}),d[_]=z[_])}else d||(x||(x=[]),x.push(Q,d)),d=z;else Q==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(x=x||[]).push(Q,z)):Q==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(Q,""+z):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(l.hasOwnProperty(Q)?(z!=null&&Q==="onScroll"&&$e("scroll",i),x||D===z||(x=[])):(x=x||[]).push(Q,z))}d&&(x=x||[]).push("style",d);var Q=x;(a.updateQueue=Q)&&(a.flags|=4)}},gf=function(i,a,d,f){d!==f&&(a.flags|=4)};function wr(i,a){if(!Ve)switch(i.tailMode){case"hidden":a=i.tail;for(var d=null;a!==null;)a.alternate!==null&&(d=a),a=a.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function vt(i){var a=i.alternate!==null&&i.alternate.child===i.child,d=0,f=0;if(a)for(var g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)d|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=d,a}function ay(i,a,d){var f=a.pendingProps;switch(Go(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(a),null;case 1:return Pt(a.type)&&za(),vt(a),null;case 3:return f=a.stateNode,Pi(),Ue(Rt),Ue(gt),dc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ua(a)?a.flags|=4:i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cs!==null&&(Bc(cs),cs=null))),Rc(i,a),vt(a),null;case 5:oc(a);var g=zn(vr.current);if(d=a.type,i!==null&&a.stateNode!=null)mf(i,a,d,f,g),i.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!f){if(a.stateNode===null)throw Error(s(166));return vt(a),null}if(i=zn(Ns.current),Ua(a)){f=a.stateNode,d=a.type;var x=a.memoizedProps;switch(f[js]=a,f[fr]=x,i=(a.mode&1)!==0,d){case"dialog":$e("cancel",f),$e("close",f);break;case"iframe":case"object":case"embed":$e("load",f);break;case"video":case"audio":for(g=0;g<dr.length;g++)$e(dr[g],f);break;case"source":$e("error",f);break;case"img":case"image":case"link":$e("error",f),$e("load",f);break;case"details":$e("toggle",f);break;case"input":oi(f,x),$e("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},$e("invalid",f);break;case"textarea":di(f,x),$e("invalid",f)}ui(d,x),g=null;for(var _ in x)if(x.hasOwnProperty(_)){var D=x[_];_==="children"?typeof D=="string"?f.textContent!==D&&(x.suppressHydrationWarning!==!0&&La(f.textContent,D,i),g=["children",D]):typeof D=="number"&&f.textContent!==""+D&&(x.suppressHydrationWarning!==!0&&La(f.textContent,D,i),g=["children",""+D]):l.hasOwnProperty(_)&&D!=null&&_==="onScroll"&&$e("scroll",f)}switch(d){case"input":Vt(f),ci(f,x,!0);break;case"textarea":Vt(f),se(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Ma)}f=g,a.updateQueue=f,f!==null&&(a.flags|=4)}else{_=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=oe(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=_.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=_.createElement(d,{is:f.is}):(i=_.createElement(d),d==="select"&&(_=i,f.multiple?_.multiple=!0:f.size&&(_.size=f.size))):i=_.createElementNS(i,d),i[js]=a,i[fr]=f,pf(i,a,!1,!1),a.stateNode=i;e:{switch(_=hi(d,f),d){case"dialog":$e("cancel",i),$e("close",i),g=f;break;case"iframe":case"object":case"embed":$e("load",i),g=f;break;case"video":case"audio":for(g=0;g<dr.length;g++)$e(dr[g],i);g=f;break;case"source":$e("error",i),g=f;break;case"img":case"image":case"link":$e("error",i),$e("load",i),g=f;break;case"details":$e("toggle",i),g=f;break;case"input":oi(i,f),g=qt(i,f),$e("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=Z({},f,{value:void 0}),$e("invalid",i);break;case"textarea":di(i,f),g=Cn(i,f),$e("invalid",i);break;default:g=f}ui(d,g),D=g;for(x in D)if(D.hasOwnProperty(x)){var z=D[x];x==="style"?Rn(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&as(i,z)):x==="children"?typeof z=="string"?(d!=="textarea"||z!=="")&&vs(i,z):typeof z=="number"&&vs(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?z!=null&&x==="onScroll"&&$e("scroll",i):z!=null&&P(i,x,z,_))}switch(d){case"input":Vt(i),ci(i,f,!1);break;case"textarea":Vt(i),se(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ce(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?rs(i,!!f.multiple,x,!1):f.defaultValue!=null&&rs(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Ma)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return vt(a),null;case 6:if(i&&a.stateNode!=null)gf(i,a,i.memoizedProps,f);else{if(typeof f!="string"&&a.stateNode===null)throw Error(s(166));if(d=zn(vr.current),zn(Ns.current),Ua(a)){if(f=a.stateNode,d=a.memoizedProps,f[js]=a,(x=f.nodeValue!==d)&&(i=$t,i!==null))switch(i.tag){case 3:La(f.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&La(f.nodeValue,d,(i.mode&1)!==0)}x&&(a.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[js]=a,a.stateNode=f}return vt(a),null;case 13:if(Ue(qe),f=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Ve&&Ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)vh(),Si(),a.flags|=98560,x=!1;else if(x=Ua(a),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(s(318));if(x=a.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(s(317));x[js]=a}else Si(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;vt(a),x=!1}else cs!==null&&(Bc(cs),cs=null),x=!0;if(!x)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=d,a):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(a.child.flags|=8192,(a.mode&1)!==0&&(i===null||(qe.current&1)!==0?ot===0&&(ot=3):Wc())),a.updateQueue!==null&&(a.flags|=4),vt(a),null);case 4:return Pi(),Rc(i,a),i===null&&ur(a.stateNode.containerInfo),vt(a),null;case 10:return nc(a.type._context),vt(a),null;case 17:return Pt(a.type)&&za(),vt(a),null;case 19:if(Ue(qe),x=a.memoizedState,x===null)return vt(a),null;if(f=(a.flags&128)!==0,_=x.rendering,_===null)if(f)wr(x,!1);else{if(ot!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(_=Qa(i),_!==null){for(a.flags|=128,wr(x,!1),f=_.updateQueue,f!==null&&(a.updateQueue=f,a.flags|=4),a.subtreeFlags=0,f=d,d=a.child;d!==null;)x=d,i=f,x.flags&=14680066,_=x.alternate,_===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=_.childLanes,x.lanes=_.lanes,x.child=_.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=_.memoizedProps,x.memoizedState=_.memoizedState,x.updateQueue=_.updateQueue,x.type=_.type,i=_.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return Be(qe,qe.current&1|2),a.child}i=i.sibling}x.tail!==null&&Je()>Li&&(a.flags|=128,f=!0,wr(x,!1),a.lanes=4194304)}else{if(!f)if(i=Qa(_),i!==null){if(a.flags|=128,f=!0,d=i.updateQueue,d!==null&&(a.updateQueue=d,a.flags|=4),wr(x,!0),x.tail===null&&x.tailMode==="hidden"&&!_.alternate&&!Ve)return vt(a),null}else 2*Je()-x.renderingStartTime>Li&&d!==1073741824&&(a.flags|=128,f=!0,wr(x,!1),a.lanes=4194304);x.isBackwards?(_.sibling=a.child,a.child=_):(d=x.last,d!==null?d.sibling=_:a.child=_,x.last=_)}return x.tail!==null?(a=x.tail,x.rendering=a,x.tail=a.sibling,x.renderingStartTime=Je(),a.sibling=null,d=qe.current,Be(qe,f?d&1|2:d&1),a):(vt(a),null);case 22:case 23:return Uc(),f=a.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(a.flags|=8192),f&&(a.mode&1)!==0?(Wt&1073741824)!==0&&(vt(a),a.subtreeFlags&6&&(a.flags|=8192)):vt(a),null;case 24:return null;case 25:return null}throw Error(s(156,a.tag))}function ly(i,a){switch(Go(a),a.tag){case 1:return Pt(a.type)&&za(),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return Pi(),Ue(Rt),Ue(gt),dc(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 5:return oc(a),null;case 13:if(Ue(qe),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(s(340));Si()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return Ue(qe),null;case 4:return Pi(),null;case 10:return nc(a.type._context),null;case 22:case 23:return Uc(),null;case 24:return null;default:return null}}var nl=!1,yt=!1,oy=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ai(i,a){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){Xe(i,a,f)}else d.current=null}function Pc(i,a,d){try{d()}catch(f){Xe(i,a,f)}}var xf=!1;function cy(i,a){if(Uo=wa,i=Qu(),Lo(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var g=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{d.nodeType,x.nodeType}catch{d=null;break e}var _=0,D=-1,z=-1,Q=0,te=0,ne=i,ee=null;t:for(;;){for(var de;ne!==d||g!==0&&ne.nodeType!==3||(D=_+g),ne!==x||f!==0&&ne.nodeType!==3||(z=_+f),ne.nodeType===3&&(_+=ne.nodeValue.length),(de=ne.firstChild)!==null;)ee=ne,ne=de;for(;;){if(ne===i)break t;if(ee===d&&++Q===g&&(D=_),ee===x&&++te===f&&(z=_),(de=ne.nextSibling)!==null)break;ne=ee,ee=ne.parentNode}ne=de}d=D===-1||z===-1?null:{start:D,end:z}}else d=null}d=d||{start:0,end:0}}else d=null;for(Wo={focusedElem:i,selectionRange:d},wa=!1,he=a;he!==null;)if(a=he,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,he=i;else for(;he!==null;){a=he;try{var me=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,Ze=me.memoizedState,q=a.stateNode,F=q.getSnapshotBeforeUpdate(a.elementType===a.type?ge:ds(a.type,ge),Ze);q.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Y=a.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(re){Xe(a,a.return,re)}if(i=a.sibling,i!==null){i.return=a.return,he=i;break}he=a.return}return me=xf,xf=!1,me}function _r(i,a,d){var f=a.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var x=g.destroy;g.destroy=void 0,x!==void 0&&Pc(a,d,x)}g=g.next}while(g!==f)}}function il(i,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&i)===i){var f=d.create;d.destroy=f()}d=d.next}while(d!==a)}}function Dc(i){var a=i.ref;if(a!==null){var d=i.stateNode;switch(i.tag){case 5:i=d;break;default:i=d}typeof a=="function"?a(i):a.current=i}}function vf(i){var a=i.alternate;a!==null&&(i.alternate=null,vf(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&(delete a[js],delete a[fr],delete a[Yo],delete a[Vv],delete a[qv])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function yf(i){return i.tag===5||i.tag===3||i.tag===4}function bf(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||yf(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ac(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.nodeType===8?d.parentNode.insertBefore(i,a):d.insertBefore(i,a):(d.nodeType===8?(a=d.parentNode,a.insertBefore(i,d)):(a=d,a.appendChild(i)),d=d._reactRootContainer,d!=null||a.onclick!==null||(a.onclick=Ma));else if(f!==4&&(i=i.child,i!==null))for(Ac(i,a,d),i=i.sibling;i!==null;)Ac(i,a,d),i=i.sibling}function Tc(i,a,d){var f=i.tag;if(f===5||f===6)i=i.stateNode,a?d.insertBefore(i,a):d.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Tc(i,a,d),i=i.sibling;i!==null;)Tc(i,a,d),i=i.sibling}var ft=null,us=!1;function cn(i,a,d){for(d=d.child;d!==null;)jf(i,a,d),d=d.sibling}function jf(i,a,d){if(bs&&typeof bs.onCommitFiberUnmount=="function")try{bs.onCommitFiberUnmount(xa,d)}catch{}switch(d.tag){case 5:yt||Ai(d,a);case 6:var f=ft,g=us;ft=null,cn(i,a,d),ft=f,us=g,ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):ft.removeChild(d.stateNode));break;case 18:ft!==null&&(us?(i=ft,d=d.stateNode,i.nodeType===8?qo(i.parentNode,d):i.nodeType===1&&qo(i,d),sr(i)):qo(ft,d.stateNode));break;case 4:f=ft,g=us,ft=d.stateNode.containerInfo,us=!0,cn(i,a,d),ft=f,us=g;break;case 0:case 11:case 14:case 15:if(!yt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var x=g,_=x.destroy;x=x.tag,_!==void 0&&((x&2)!==0||(x&4)!==0)&&Pc(d,a,_),g=g.next}while(g!==f)}cn(i,a,d);break;case 1:if(!yt&&(Ai(d,a),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(D){Xe(d,a,D)}cn(i,a,d);break;case 21:cn(i,a,d);break;case 22:d.mode&1?(yt=(f=yt)||d.memoizedState!==null,cn(i,a,d),yt=f):cn(i,a,d);break;default:cn(i,a,d)}}function Nf(i){var a=i.updateQueue;if(a!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new oy),a.forEach(function(f){var g=vy.bind(null,i,f);d.has(f)||(d.add(f),f.then(g,g))})}}function hs(i,a){var d=a.deletions;if(d!==null)for(var f=0;f<d.length;f++){var g=d[f];try{var x=i,_=a,D=_;e:for(;D!==null;){switch(D.tag){case 5:ft=D.stateNode,us=!1;break e;case 3:ft=D.stateNode.containerInfo,us=!0;break e;case 4:ft=D.stateNode.containerInfo,us=!0;break e}D=D.return}if(ft===null)throw Error(s(160));jf(x,_,g),ft=null,us=!1;var z=g.alternate;z!==null&&(z.return=null),g.return=null}catch(Q){Xe(g,a,Q)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)wf(a,i),a=a.sibling}function wf(i,a){var d=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hs(a,i),_s(i),f&4){try{_r(3,i,i.return),il(3,i)}catch(ge){Xe(i,i.return,ge)}try{_r(5,i,i.return)}catch(ge){Xe(i,i.return,ge)}}break;case 1:hs(a,i),_s(i),f&512&&d!==null&&Ai(d,d.return);break;case 5:if(hs(a,i),_s(i),f&512&&d!==null&&Ai(d,d.return),i.flags&32){var g=i.stateNode;try{vs(g,"")}catch(ge){Xe(i,i.return,ge)}}if(f&4&&(g=i.stateNode,g!=null)){var x=i.memoizedProps,_=d!==null?d.memoizedProps:x,D=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{D==="input"&&x.type==="radio"&&x.name!=null&&Ks(g,x),hi(D,_);var Q=hi(D,x);for(_=0;_<z.length;_+=2){var te=z[_],ne=z[_+1];te==="style"?Rn(g,ne):te==="dangerouslySetInnerHTML"?as(g,ne):te==="children"?vs(g,ne):P(g,te,ne,Q)}switch(D){case"input":kn(g,x);break;case"textarea":En(g,x);break;case"select":var ee=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!x.multiple;var de=x.value;de!=null?rs(g,!!x.multiple,de,!1):ee!==!!x.multiple&&(x.defaultValue!=null?rs(g,!!x.multiple,x.defaultValue,!0):rs(g,!!x.multiple,x.multiple?[]:"",!1))}g[fr]=x}catch(ge){Xe(i,i.return,ge)}}break;case 6:if(hs(a,i),_s(i),f&4){if(i.stateNode===null)throw Error(s(162));g=i.stateNode,x=i.memoizedProps;try{g.nodeValue=x}catch(ge){Xe(i,i.return,ge)}}break;case 3:if(hs(a,i),_s(i),f&4&&d!==null&&d.memoizedState.isDehydrated)try{sr(a.containerInfo)}catch(ge){Xe(i,i.return,ge)}break;case 4:hs(a,i),_s(i);break;case 13:hs(a,i),_s(i),g=i.child,g.flags&8192&&(x=g.memoizedState!==null,g.stateNode.isHidden=x,!x||g.alternate!==null&&g.alternate.memoizedState!==null||(Oc=Je())),f&4&&Nf(i);break;case 22:if(te=d!==null&&d.memoizedState!==null,i.mode&1?(yt=(Q=yt)||te,hs(a,i),yt=Q):hs(a,i),_s(i),f&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!te&&(i.mode&1)!==0)for(he=i,te=i.child;te!==null;){for(ne=he=te;he!==null;){switch(ee=he,de=ee.child,ee.tag){case 0:case 11:case 14:case 15:_r(4,ee,ee.return);break;case 1:Ai(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){f=ee,d=ee.return;try{a=f,me.props=a.memoizedProps,me.state=a.memoizedState,me.componentWillUnmount()}catch(ge){Xe(f,d,ge)}}break;case 5:Ai(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Sf(ne);continue}}de!==null?(de.return=ee,he=de):Sf(ne)}te=te.sibling}e:for(te=null,ne=i;;){if(ne.tag===5){if(te===null){te=ne;try{g=ne.stateNode,Q?(x=g.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(D=ne.stateNode,z=ne.memoizedProps.style,_=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=Et("display",_))}catch(ge){Xe(i,i.return,ge)}}}else if(ne.tag===6){if(te===null)try{ne.stateNode.nodeValue=Q?"":ne.memoizedProps}catch(ge){Xe(i,i.return,ge)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===i)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===i)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===i)break e;te===ne&&(te=null),ne=ne.return}te===ne&&(te=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:hs(a,i),_s(i),f&4&&Nf(i);break;case 21:break;default:hs(a,i),_s(i)}}function _s(i){var a=i.flags;if(a&2){try{e:{for(var d=i.return;d!==null;){if(yf(d)){var f=d;break e}d=d.return}throw Error(s(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(vs(g,""),f.flags&=-33);var x=bf(i);Tc(i,x,g);break;case 3:case 4:var _=f.stateNode.containerInfo,D=bf(i);Ac(i,D,_);break;default:throw Error(s(161))}}catch(z){Xe(i,i.return,z)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function dy(i,a,d){he=i,_f(i)}function _f(i,a,d){for(var f=(i.mode&1)!==0;he!==null;){var g=he,x=g.child;if(g.tag===22&&f){var _=g.memoizedState!==null||nl;if(!_){var D=g.alternate,z=D!==null&&D.memoizedState!==null||yt;D=nl;var Q=yt;if(nl=_,(yt=z)&&!Q)for(he=g;he!==null;)_=he,z=_.child,_.tag===22&&_.memoizedState!==null?Cf(g):z!==null?(z.return=_,he=z):Cf(g);for(;x!==null;)he=x,_f(x),x=x.sibling;he=g,nl=D,yt=Q}kf(i)}else(g.subtreeFlags&8772)!==0&&x!==null?(x.return=g,he=x):kf(i)}}function kf(i){for(;he!==null;){var a=he;if((a.flags&8772)!==0){var d=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:yt||il(5,a);break;case 1:var f=a.stateNode;if(a.flags&4&&!yt)if(d===null)f.componentDidMount();else{var g=a.elementType===a.type?d.memoizedProps:ds(a.type,d.memoizedProps);f.componentDidUpdate(g,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=a.updateQueue;x!==null&&kh(a,x,f);break;case 3:var _=a.updateQueue;if(_!==null){if(d=null,a.child!==null)switch(a.child.tag){case 5:d=a.child.stateNode;break;case 1:d=a.child.stateNode}kh(a,_,d)}break;case 5:var D=a.stateNode;if(d===null&&a.flags&4){d=D;var z=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&d.focus();break;case"img":z.src&&(d.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var Q=a.alternate;if(Q!==null){var te=Q.memoizedState;if(te!==null){var ne=te.dehydrated;ne!==null&&sr(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}yt||a.flags&512&&Dc(a)}catch(ee){Xe(a,a.return,ee)}}if(a===i){he=null;break}if(d=a.sibling,d!==null){d.return=a.return,he=d;break}he=a.return}}function Sf(i){for(;he!==null;){var a=he;if(a===i){he=null;break}var d=a.sibling;if(d!==null){d.return=a.return,he=d;break}he=a.return}}function Cf(i){for(;he!==null;){var a=he;try{switch(a.tag){case 0:case 11:case 15:var d=a.return;try{il(4,a)}catch(z){Xe(a,d,z)}break;case 1:var f=a.stateNode;if(typeof f.componentDidMount=="function"){var g=a.return;try{f.componentDidMount()}catch(z){Xe(a,g,z)}}var x=a.return;try{Dc(a)}catch(z){Xe(a,x,z)}break;case 5:var _=a.return;try{Dc(a)}catch(z){Xe(a,_,z)}}}catch(z){Xe(a,a.return,z)}if(a===i){he=null;break}var D=a.sibling;if(D!==null){D.return=a.return,he=D;break}he=a.return}}var uy=Math.ceil,rl=I.ReactCurrentDispatcher,Lc=I.ReactCurrentOwner,Jt=I.ReactCurrentBatchConfig,De=0,ut=null,nt=null,pt=0,Wt=0,Ti=nn(0),ot=0,kr=null,Fn=0,al=0,Mc=0,Sr=null,At=null,Oc=0,Li=1/0,Fs=null,ll=!1,zc=null,dn=null,ol=!1,un=null,cl=0,Cr=0,Ic=null,dl=-1,ul=0;function Ct(){return(De&6)!==0?Je():dl!==-1?dl:dl=Je()}function hn(i){return(i.mode&1)===0?1:(De&2)!==0&&pt!==0?pt&-pt:Qv.transition!==null?(ul===0&&(ul=yu()),ul):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Eu(i.type)),i)}function fs(i,a,d,f){if(50<Cr)throw Cr=0,Ic=null,Error(s(185));Gi(i,d,f),((De&2)===0||i!==ut)&&(i===ut&&((De&2)===0&&(al|=d),ot===4&&fn(i,pt)),Tt(i,f),d===1&&De===0&&(a.mode&1)===0&&(Li=Je()+500,Fa&&an()))}function Tt(i,a){var d=i.callbackNode;Qx(i,a);var f=ba(i,i===ut?pt:0);if(f===0)d!==null&&gu(d),i.callbackNode=null,i.callbackPriority=0;else if(a=f&-f,i.callbackPriority!==a){if(d!=null&&gu(d),a===1)i.tag===0?Yv(Rf.bind(null,i)):fh(Rf.bind(null,i)),Wv(function(){(De&6)===0&&an()}),d=null;else{switch(bu(f)){case 1:d=xo;break;case 4:d=xu;break;case 16:d=ga;break;case 536870912:d=vu;break;default:d=ga}d=zf(d,Ef.bind(null,i))}i.callbackPriority=a,i.callbackNode=d}}function Ef(i,a){if(dl=-1,ul=0,(De&6)!==0)throw Error(s(327));var d=i.callbackNode;if(Mi()&&i.callbackNode!==d)return null;var f=ba(i,i===ut?pt:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||a)a=hl(i,f);else{a=f;var g=De;De|=2;var x=Df();(ut!==i||pt!==a)&&(Fs=null,Li=Je()+500,$n(i,a));do try{py();break}catch(D){Pf(i,D)}while(!0);sc(),rl.current=x,De=g,nt!==null?a=0:(ut=null,pt=0,a=ot)}if(a!==0){if(a===2&&(g=vo(i),g!==0&&(f=g,a=Fc(i,g))),a===1)throw d=kr,$n(i,0),fn(i,f),Tt(i,Je()),d;if(a===6)fn(i,f);else{if(g=i.current.alternate,(f&30)===0&&!hy(g)&&(a=hl(i,f),a===2&&(x=vo(i),x!==0&&(f=x,a=Fc(i,x))),a===1))throw d=kr,$n(i,0),fn(i,f),Tt(i,Je()),d;switch(i.finishedWork=g,i.finishedLanes=f,a){case 0:case 1:throw Error(s(345));case 2:Un(i,At,Fs);break;case 3:if(fn(i,f),(f&130023424)===f&&(a=Oc+500-Je(),10<a)){if(ba(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Ct(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=Vo(Un.bind(null,i,At,Fs),a);break}Un(i,At,Fs);break;case 4:if(fn(i,f),(f&4194240)===f)break;for(a=i.eventTimes,g=-1;0<f;){var _=31-ls(f);x=1<<_,_=a[_],_>g&&(g=_),f&=~x}if(f=g,f=Je()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*uy(f/1960))-f,10<f){i.timeoutHandle=Vo(Un.bind(null,i,At,Fs),f);break}Un(i,At,Fs);break;case 5:Un(i,At,Fs);break;default:throw Error(s(329))}}}return Tt(i,Je()),i.callbackNode===d?Ef.bind(null,i):null}function Fc(i,a){var d=Sr;return i.current.memoizedState.isDehydrated&&($n(i,a).flags|=256),i=hl(i,a),i!==2&&(a=At,At=d,a!==null&&Bc(a)),i}function Bc(i){At===null?At=i:At.push.apply(At,i)}function hy(i){for(var a=i;;){if(a.flags&16384){var d=a.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var g=d[f],x=g.getSnapshot;g=g.value;try{if(!os(x(),g))return!1}catch{return!1}}}if(d=a.child,a.subtreeFlags&16384&&d!==null)d.return=a,a=d;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function fn(i,a){for(a&=~Mc,a&=~al,i.suspendedLanes|=a,i.pingedLanes&=~a,i=i.expirationTimes;0<a;){var d=31-ls(a),f=1<<d;i[d]=-1,a&=~f}}function Rf(i){if((De&6)!==0)throw Error(s(327));Mi();var a=ba(i,0);if((a&1)===0)return Tt(i,Je()),null;var d=hl(i,a);if(i.tag!==0&&d===2){var f=vo(i);f!==0&&(a=f,d=Fc(i,f))}if(d===1)throw d=kr,$n(i,0),fn(i,a),Tt(i,Je()),d;if(d===6)throw Error(s(345));return i.finishedWork=i.current.alternate,i.finishedLanes=a,Un(i,At,Fs),Tt(i,Je()),null}function $c(i,a){var d=De;De|=1;try{return i(a)}finally{De=d,De===0&&(Li=Je()+500,Fa&&an())}}function Bn(i){un!==null&&un.tag===0&&(De&6)===0&&Mi();var a=De;De|=1;var d=Jt.transition,f=ze;try{if(Jt.transition=null,ze=1,i)return i()}finally{ze=f,Jt.transition=d,De=a,(De&6)===0&&an()}}function Uc(){Wt=Ti.current,Ue(Ti)}function $n(i,a){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,Uv(d)),nt!==null)for(d=nt.return;d!==null;){var f=d;switch(Go(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&za();break;case 3:Pi(),Ue(Rt),Ue(gt),dc();break;case 5:oc(f);break;case 4:Pi();break;case 13:Ue(qe);break;case 19:Ue(qe);break;case 10:nc(f.type._context);break;case 22:case 23:Uc()}d=d.return}if(ut=i,nt=i=pn(i.current,null),pt=Wt=a,ot=0,kr=null,Mc=al=Fn=0,At=Sr=null,On!==null){for(a=0;a<On.length;a++)if(d=On[a],f=d.interleaved,f!==null){d.interleaved=null;var g=f.next,x=d.pending;if(x!==null){var _=x.next;x.next=g,f.next=_}d.pending=f}On=null}return i}function Pf(i,a){do{var d=nt;try{if(sc(),Ka.current=Za,Xa){for(var f=Ye.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Xa=!1}if(In=0,dt=lt=Ye=null,yr=!1,br=0,Lc.current=null,d===null||d.return===null){ot=1,kr=a,nt=null;break}e:{var x=i,_=d.return,D=d,z=a;if(a=pt,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=z,te=D,ne=te.tag;if((te.mode&1)===0&&(ne===0||ne===11||ne===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=ef(_);if(de!==null){de.flags&=-257,tf(de,_,D,x,a),de.mode&1&&Zh(x,Q,a),a=de,z=Q;var me=a.updateQueue;if(me===null){var ge=new Set;ge.add(z),a.updateQueue=ge}else me.add(z);break e}else{if((a&1)===0){Zh(x,Q,a),Wc();break e}z=Error(s(426))}}else if(Ve&&D.mode&1){var Ze=ef(_);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),tf(Ze,_,D,x,a),ec(Di(z,D));break e}}x=z=Di(z,D),ot!==4&&(ot=2),Sr===null?Sr=[x]:Sr.push(x),x=_;do{switch(x.tag){case 3:x.flags|=65536,a&=-a,x.lanes|=a;var q=Gh(x,z,a);_h(x,q);break e;case 1:D=z;var F=x.type,Y=x.stateNode;if((x.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(dn===null||!dn.has(Y)))){x.flags|=65536,a&=-a,x.lanes|=a;var re=Jh(x,D,a);_h(x,re);break e}}x=x.return}while(x!==null)}Tf(d)}catch(ve){a=ve,nt===d&&d!==null&&(nt=d=d.return);continue}break}while(!0)}function Df(){var i=rl.current;return rl.current=Za,i===null?Za:i}function Wc(){(ot===0||ot===3||ot===2)&&(ot=4),ut===null||(Fn&268435455)===0&&(al&268435455)===0||fn(ut,pt)}function hl(i,a){var d=De;De|=2;var f=Df();(ut!==i||pt!==a)&&(Fs=null,$n(i,a));do try{fy();break}catch(g){Pf(i,g)}while(!0);if(sc(),De=d,rl.current=f,nt!==null)throw Error(s(261));return ut=null,pt=0,ot}function fy(){for(;nt!==null;)Af(nt)}function py(){for(;nt!==null&&!Fx();)Af(nt)}function Af(i){var a=Of(i.alternate,i,Wt);i.memoizedProps=i.pendingProps,a===null?Tf(i):nt=a,Lc.current=null}function Tf(i){var a=i;do{var d=a.alternate;if(i=a.return,(a.flags&32768)===0){if(d=ay(d,a,Wt),d!==null){nt=d;return}}else{if(d=ly(d,a),d!==null){d.flags&=32767,nt=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ot=6,nt=null;return}}if(a=a.sibling,a!==null){nt=a;return}nt=a=i}while(a!==null);ot===0&&(ot=5)}function Un(i,a,d){var f=ze,g=Jt.transition;try{Jt.transition=null,ze=1,my(i,a,d,f)}finally{Jt.transition=g,ze=f}return null}function my(i,a,d,f){do Mi();while(un!==null);if((De&6)!==0)throw Error(s(327));d=i.finishedWork;var g=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(s(177));i.callbackNode=null,i.callbackPriority=0;var x=d.lanes|d.childLanes;if(Kx(i,x),i===ut&&(nt=ut=null,pt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||ol||(ol=!0,zf(ga,function(){return Mi(),null})),x=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||x){x=Jt.transition,Jt.transition=null;var _=ze;ze=1;var D=De;De|=4,Lc.current=null,cy(i,d),wf(d,i),Mv(Wo),wa=!!Uo,Wo=Uo=null,i.current=d,dy(d),Bx(),De=D,ze=_,Jt.transition=x}else i.current=d;if(ol&&(ol=!1,un=i,cl=g),x=i.pendingLanes,x===0&&(dn=null),Wx(d.stateNode),Tt(i,Je()),a!==null)for(f=i.onRecoverableError,d=0;d<a.length;d++)g=a[d],f(g.value,{componentStack:g.stack,digest:g.digest});if(ll)throw ll=!1,i=zc,zc=null,i;return(cl&1)!==0&&i.tag!==0&&Mi(),x=i.pendingLanes,(x&1)!==0?i===Ic?Cr++:(Cr=0,Ic=i):Cr=0,an(),null}function Mi(){if(un!==null){var i=bu(cl),a=Jt.transition,d=ze;try{if(Jt.transition=null,ze=16>i?16:i,un===null)var f=!1;else{if(i=un,un=null,cl=0,(De&6)!==0)throw Error(s(331));var g=De;for(De|=4,he=i.current;he!==null;){var x=he,_=x.child;if((he.flags&16)!==0){var D=x.deletions;if(D!==null){for(var z=0;z<D.length;z++){var Q=D[z];for(he=Q;he!==null;){var te=he;switch(te.tag){case 0:case 11:case 15:_r(8,te,x)}var ne=te.child;if(ne!==null)ne.return=te,he=ne;else for(;he!==null;){te=he;var ee=te.sibling,de=te.return;if(vf(te),te===Q){he=null;break}if(ee!==null){ee.return=de,he=ee;break}he=de}}}var me=x.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var Ze=ge.sibling;ge.sibling=null,ge=Ze}while(ge!==null)}}he=x}}if((x.subtreeFlags&2064)!==0&&_!==null)_.return=x,he=_;else e:for(;he!==null;){if(x=he,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:_r(9,x,x.return)}var q=x.sibling;if(q!==null){q.return=x.return,he=q;break e}he=x.return}}var F=i.current;for(he=F;he!==null;){_=he;var Y=_.child;if((_.subtreeFlags&2064)!==0&&Y!==null)Y.return=_,he=Y;else e:for(_=F;he!==null;){if(D=he,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:il(9,D)}}catch(ve){Xe(D,D.return,ve)}if(D===_){he=null;break e}var re=D.sibling;if(re!==null){re.return=D.return,he=re;break e}he=D.return}}if(De=g,an(),bs&&typeof bs.onPostCommitFiberRoot=="function")try{bs.onPostCommitFiberRoot(xa,i)}catch{}f=!0}return f}finally{ze=d,Jt.transition=a}}return!1}function Lf(i,a,d){a=Di(d,a),a=Gh(i,a,1),i=on(i,a,1),a=Ct(),i!==null&&(Gi(i,1,a),Tt(i,a))}function Xe(i,a,d){if(i.tag===3)Lf(i,i,d);else for(;a!==null;){if(a.tag===3){Lf(a,i,d);break}else if(a.tag===1){var f=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(dn===null||!dn.has(f))){i=Di(d,i),i=Jh(a,i,1),a=on(a,i,1),i=Ct(),a!==null&&(Gi(a,1,i),Tt(a,i));break}}a=a.return}}function gy(i,a,d){var f=i.pingCache;f!==null&&f.delete(a),a=Ct(),i.pingedLanes|=i.suspendedLanes&d,ut===i&&(pt&d)===d&&(ot===4||ot===3&&(pt&130023424)===pt&&500>Je()-Oc?$n(i,0):Mc|=d),Tt(i,a)}function Mf(i,a){a===0&&((i.mode&1)===0?a=1:(a=ya,ya<<=1,(ya&130023424)===0&&(ya=4194304)));var d=Ct();i=Os(i,a),i!==null&&(Gi(i,a,d),Tt(i,d))}function xy(i){var a=i.memoizedState,d=0;a!==null&&(d=a.retryLane),Mf(i,d)}function vy(i,a){var d=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(d=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(s(314))}f!==null&&f.delete(a),Mf(i,d)}var Of;Of=function(i,a,d){if(i!==null)if(i.memoizedProps!==a.pendingProps||Rt.current)Dt=!0;else{if((i.lanes&d)===0&&(a.flags&128)===0)return Dt=!1,ry(i,a,d);Dt=(i.flags&131072)!==0}else Dt=!1,Ve&&(a.flags&1048576)!==0&&ph(a,$a,a.index);switch(a.lanes=0,a.tag){case 2:var f=a.type;sl(i,a),i=a.pendingProps;var g=wi(a,gt.current);Ri(a,d),g=fc(null,a,f,i,g,d);var x=pc();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,Pt(f)?(x=!0,Ia(a)):x=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,ac(a),g.updater=el,a.stateNode=g,g._reactInternals=a,bc(a,f,i,d),a=_c(null,a,f,!0,x,d)):(a.tag=0,Ve&&x&&Xo(a),St(null,a,g,d),a=a.child),a;case 16:f=a.elementType;e:{switch(sl(i,a),i=a.pendingProps,g=f._init,f=g(f._payload),a.type=f,g=a.tag=by(f),i=ds(f,i),g){case 0:a=wc(null,a,f,i,d);break e;case 1:a=of(null,a,f,i,d);break e;case 11:a=sf(null,a,f,i,d);break e;case 14:a=nf(null,a,f,ds(f.type,i),d);break e}throw Error(s(306,f,""))}return a;case 0:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),wc(i,a,f,g,d);case 1:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),of(i,a,f,g,d);case 3:e:{if(cf(a),i===null)throw Error(s(387));f=a.pendingProps,x=a.memoizedState,g=x.element,wh(i,a),Ya(a,f,null,d);var _=a.memoizedState;if(f=_.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},a.updateQueue.baseState=x,a.memoizedState=x,a.flags&256){g=Di(Error(s(423)),a),a=df(i,a,f,d,g);break e}else if(f!==g){g=Di(Error(s(424)),a),a=df(i,a,f,d,g);break e}else for(Ut=sn(a.stateNode.containerInfo.firstChild),$t=a,Ve=!0,cs=null,d=jh(a,null,f,d),a.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Si(),f===g){a=Is(i,a,d);break e}St(i,a,f,d)}a=a.child}return a;case 5:return Sh(a),i===null&&Zo(a),f=a.type,g=a.pendingProps,x=i!==null?i.memoizedProps:null,_=g.children,Ho(f,g)?_=null:x!==null&&Ho(f,x)&&(a.flags|=32),lf(i,a),St(i,a,_,d),a.child;case 6:return i===null&&Zo(a),null;case 13:return uf(i,a,d);case 4:return lc(a,a.stateNode.containerInfo),f=a.pendingProps,i===null?a.child=Ci(a,null,f,d):St(i,a,f,d),a.child;case 11:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),sf(i,a,f,g,d);case 7:return St(i,a,a.pendingProps,d),a.child;case 8:return St(i,a,a.pendingProps.children,d),a.child;case 12:return St(i,a,a.pendingProps.children,d),a.child;case 10:e:{if(f=a.type._context,g=a.pendingProps,x=a.memoizedProps,_=g.value,Be(Ha,f._currentValue),f._currentValue=_,x!==null)if(os(x.value,_)){if(x.children===g.children&&!Rt.current){a=Is(i,a,d);break e}}else for(x=a.child,x!==null&&(x.return=a);x!==null;){var D=x.dependencies;if(D!==null){_=x.child;for(var z=D.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=zs(-1,d&-d),z.tag=2;var Q=x.updateQueue;if(Q!==null){Q=Q.shared;var te=Q.pending;te===null?z.next=z:(z.next=te.next,te.next=z),Q.pending=z}}x.lanes|=d,z=x.alternate,z!==null&&(z.lanes|=d),ic(x.return,d,a),D.lanes|=d;break}z=z.next}}else if(x.tag===10)_=x.type===a.type?null:x.child;else if(x.tag===18){if(_=x.return,_===null)throw Error(s(341));_.lanes|=d,D=_.alternate,D!==null&&(D.lanes|=d),ic(_,d,a),_=x.sibling}else _=x.child;if(_!==null)_.return=x;else for(_=x;_!==null;){if(_===a){_=null;break}if(x=_.sibling,x!==null){x.return=_.return,_=x;break}_=_.return}x=_}St(i,a,g.children,d),a=a.child}return a;case 9:return g=a.type,f=a.pendingProps.children,Ri(a,d),g=Xt(g),f=f(g),a.flags|=1,St(i,a,f,d),a.child;case 14:return f=a.type,g=ds(f,a.pendingProps),g=ds(f.type,g),nf(i,a,f,g,d);case 15:return rf(i,a,a.type,a.pendingProps,d);case 17:return f=a.type,g=a.pendingProps,g=a.elementType===f?g:ds(f,g),sl(i,a),a.tag=1,Pt(f)?(i=!0,Ia(a)):i=!1,Ri(a,d),Kh(a,f,g),bc(a,f,g,d),_c(null,a,f,!0,i,d);case 19:return ff(i,a,d);case 22:return af(i,a,d)}throw Error(s(156,a.tag))};function zf(i,a){return mu(i,a)}function yy(i,a,d,f){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(i,a,d,f){return new yy(i,a,d,f)}function Hc(i){return i=i.prototype,!(!i||!i.isReactComponent)}function by(i){if(typeof i=="function")return Hc(i)?1:0;if(i!=null){if(i=i.$$typeof,i===M)return 11;if(i===ae)return 14}return 2}function pn(i,a){var d=i.alternate;return d===null?(d=Zt(i.tag,a,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=a,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,a=i.dependencies,d.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function fl(i,a,d,f,g,x){var _=2;if(f=i,typeof i=="function")Hc(i)&&(_=1);else if(typeof i=="string")_=5;else e:switch(i){case L:return Wn(d.children,g,x,a);case A:_=8,g|=8;break;case T:return i=Zt(12,d,a,g|2),i.elementType=T,i.lanes=x,i;case W:return i=Zt(13,d,a,g),i.elementType=W,i.lanes=x,i;case V:return i=Zt(19,d,a,g),i.elementType=V,i.lanes=x,i;case J:return pl(d,g,x,a);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:_=10;break e;case U:_=9;break e;case M:_=11;break e;case ae:_=14;break e;case E:_=16,f=null;break e}throw Error(s(130,i==null?i:typeof i,""))}return a=Zt(_,d,a,g),a.elementType=i,a.type=f,a.lanes=x,a}function Wn(i,a,d,f){return i=Zt(7,i,f,a),i.lanes=d,i}function pl(i,a,d,f){return i=Zt(22,i,f,a),i.elementType=J,i.lanes=d,i.stateNode={isHidden:!1},i}function Vc(i,a,d){return i=Zt(6,i,null,a),i.lanes=d,i}function qc(i,a,d){return a=Zt(4,i.children!==null?i.children:[],i.key,a),a.lanes=d,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}function jy(i,a,d,f,g){this.tag=a,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yo(0),this.expirationTimes=yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Yc(i,a,d,f,g,x,_,D,z){return i=new jy(i,a,d,D,z),a===1?(a=1,x===!0&&(a|=8)):a=0,x=Zt(3,null,null,a),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(x),i}function Ny(i,a,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:f==null?null:""+f,children:i,containerInfo:a,implementation:d}}function If(i){if(!i)return rn;i=i._reactInternals;e:{if(Dn(i)!==i||i.tag!==1)throw Error(s(170));var a=i;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(Pt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(s(171))}if(i.tag===1){var d=i.type;if(Pt(d))return uh(i,d,a)}return a}function Ff(i,a,d,f,g,x,_,D,z){return i=Yc(d,f,!0,i,g,x,_,D,z),i.context=If(null),d=i.current,f=Ct(),g=hn(d),x=zs(f,g),x.callback=a??null,on(d,x,g),i.current.lanes=g,Gi(i,g,f),Tt(i,f),i}function ml(i,a,d,f){var g=a.current,x=Ct(),_=hn(g);return d=If(d),a.context===null?a.context=d:a.pendingContext=d,a=zs(x,_),a.payload={element:i},f=f===void 0?null:f,f!==null&&(a.callback=f),i=on(g,a,_),i!==null&&(fs(i,g,_,x),qa(i,g,_)),_}function gl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Bf(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<a?d:a}}function Qc(i,a){Bf(i,a),(i=i.alternate)&&Bf(i,a)}function wy(){return null}var $f=typeof reportError=="function"?reportError:function(i){console.error(i)};function Kc(i){this._internalRoot=i}xl.prototype.render=Kc.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(s(409));ml(i,a,null,null)},xl.prototype.unmount=Kc.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;Bn(function(){ml(null,i,null,null)}),a[As]=null}};function xl(i){this._internalRoot=i}xl.prototype.unstable_scheduleHydration=function(i){if(i){var a=wu();i={blockedOn:null,target:i,priority:a};for(var d=0;d<Zs.length&&a!==0&&a<Zs[d].priority;d++);Zs.splice(d,0,i),d===0&&Su(i)}};function Xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function vl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Uf(){}function _y(i,a,d,f,g){if(g){if(typeof f=="function"){var x=f;f=function(){var Q=gl(_);x.call(Q)}}var _=Ff(a,f,i,0,null,!1,!1,"",Uf);return i._reactRootContainer=_,i[As]=_.current,ur(i.nodeType===8?i.parentNode:i),Bn(),_}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var D=f;f=function(){var Q=gl(z);D.call(Q)}}var z=Yc(i,0,!1,null,null,!1,!1,"",Uf);return i._reactRootContainer=z,i[As]=z.current,ur(i.nodeType===8?i.parentNode:i),Bn(function(){ml(a,z,d,f)}),z}function yl(i,a,d,f,g){var x=d._reactRootContainer;if(x){var _=x;if(typeof g=="function"){var D=g;g=function(){var z=gl(_);D.call(z)}}ml(a,_,i,g)}else _=_y(d,a,i,g,f);return gl(_)}ju=function(i){switch(i.tag){case 3:var a=i.stateNode;if(a.current.memoizedState.isDehydrated){var d=Xi(a.pendingLanes);d!==0&&(bo(a,d|1),Tt(a,Je()),(De&6)===0&&(Li=Je()+500,an()))}break;case 13:Bn(function(){var f=Os(i,1);if(f!==null){var g=Ct();fs(f,i,1,g)}}),Qc(i,1)}},jo=function(i){if(i.tag===13){var a=Os(i,134217728);if(a!==null){var d=Ct();fs(a,i,134217728,d)}Qc(i,134217728)}},Nu=function(i){if(i.tag===13){var a=hn(i),d=Os(i,a);if(d!==null){var f=Ct();fs(d,i,a,f)}Qc(i,a)}},wu=function(){return ze},_u=function(i,a){var d=ze;try{return ze=i,a()}finally{ze=d}},ue=function(i,a,d){switch(a){case"input":if(kn(i,d),a=d.name,d.type==="radio"&&a!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<d.length;a++){var f=d[a];if(f!==i&&f.form===i.form){var g=Oa(f);if(!g)throw Error(s(90));xs(f),kn(f,g)}}}break;case"textarea":En(i,d);break;case"select":a=d.value,a!=null&&rs(i,!!d.multiple,a,!1)}},Ds=$c,Ft=Bn;var ky={usingClientEntryPoint:!1,Events:[pr,ji,Oa,qi,Pn,$c]},Er={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sy={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=fu(i),i===null?null:i.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{xa=bl.inject(Sy),bs=bl}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky,Lt.createPortal=function(i,a){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(a))throw Error(s(200));return Ny(i,a,null,d)},Lt.createRoot=function(i,a){if(!Xc(i))throw Error(s(299));var d=!1,f="",g=$f;return a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=Yc(i,1,!1,null,null,d,!1,f,g),i[As]=a.current,ur(i.nodeType===8?i.parentNode:i),new Kc(a)},Lt.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=fu(a),i=i===null?null:i.stateNode,i},Lt.flushSync=function(i){return Bn(i)},Lt.hydrate=function(i,a,d){if(!vl(a))throw Error(s(200));return yl(null,i,a,!0,d)},Lt.hydrateRoot=function(i,a,d){if(!Xc(i))throw Error(s(405));var f=d!=null&&d.hydratedSources||null,g=!1,x="",_=$f;if(d!=null&&(d.unstable_strictMode===!0&&(g=!0),d.identifierPrefix!==void 0&&(x=d.identifierPrefix),d.onRecoverableError!==void 0&&(_=d.onRecoverableError)),a=Ff(a,null,i,1,d??null,g,!1,x,_),i[As]=a.current,ur(i),f)for(i=0;i<f.length;i++)d=f[i],g=d._getVersion,g=g(d._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[d,g]:a.mutableSourceEagerHydrationData.push(d,g);return new xl(a)},Lt.render=function(i,a,d){if(!vl(a))throw Error(s(200));return yl(null,i,a,!1,d)},Lt.unmountComponentAtNode=function(i){if(!vl(i))throw Error(s(40));return i._reactRootContainer?(Bn(function(){yl(null,null,i,!1,function(){i._reactRootContainer=null,i[As]=null})}),!0):!1},Lt.unstable_batchedUpdates=$c,Lt.unstable_renderSubtreeIntoContainer=function(i,a,d,f){if(!vl(d))throw Error(s(200));if(i==null||i._reactInternals===void 0)throw Error(s(38));return yl(i,a,d,!1,f)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var Xf;function Gm(){if(Xf)return Zc.exports;Xf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Zc.exports=zy(),Zc.exports}var Gf;function Iy(){if(Gf)return jl;Gf=1;var t=Gm();return jl.createRoot=t.createRoot,jl.hydrateRoot=t.hydrateRoot,jl}var Fy=Iy();const By=Km(Fy);Gm();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Qr.apply(this,arguments)}var xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(xn||(xn={}));const Jf="popstate";function $y(t){t===void 0&&(t={});function e(r,l){let{pathname:o,search:c,hash:u}=r.location;return Nd("",{pathname:o,search:c,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function s(r,l){return typeof l=="string"?l:Hl(l)}return Wy(e,s,null,t)}function rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $d(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uy(){return Math.random().toString(36).substr(2,8)}function Zf(t,e){return{usr:t.state,key:t.key,idx:e}}function Nd(t,e,s,r){return s===void 0&&(s=null),Qr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wi(e):e,{state:s,key:e&&e.key||r||Uy()})}function Hl(t){let{pathname:e="/",search:s="",hash:r=""}=t;return s&&s!=="?"&&(e+=s.charAt(0)==="?"?s:"?"+s),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wi(t){let e={};if(t){let s=t.indexOf("#");s>=0&&(e.hash=t.substr(s),t=t.substr(0,s));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Wy(t,e,s,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,c=l.history,u=xn.Pop,h=null,p=m();p==null&&(p=0,c.replaceState(Qr({},c.state,{idx:p}),""));function m(){return(c.state||{idx:null}).idx}function v(){u=xn.Pop;let y=m(),k=y==null?null:y-p;p=y,h&&h({action:u,location:j.location,delta:k})}function N(y,k){u=xn.Push;let S=Nd(j.location,y,k);p=m()+1;let P=Zf(S,p),I=j.createHref(S);try{c.pushState(P,"",I)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;l.location.assign(I)}o&&h&&h({action:u,location:j.location,delta:1})}function w(y,k){u=xn.Replace;let S=Nd(j.location,y,k);p=m();let P=Zf(S,p),I=j.createHref(S);c.replaceState(P,"",I),o&&h&&h({action:u,location:j.location,delta:0})}function b(y){let k=l.location.origin!=="null"?l.location.origin:l.location.href,S=typeof y=="string"?y:Hl(y);return S=S.replace(/ $/,"%20"),rt(k,"No window.location.(origin|href) available to create URL for href: "+S),new URL(S,k)}let j={get action(){return u},get location(){return t(l,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Jf,v),h=y,()=>{l.removeEventListener(Jf,v),h=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let k=b(y);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:N,replace:w,go(y){return c.go(y)}};return j}var ep;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ep||(ep={}));function Hy(t,e,s){return s===void 0&&(s="/"),Vy(t,e,s)}function Vy(t,e,s,r){let l=typeof e=="string"?Wi(e):e,o=Ud(l.pathname||"/",s);if(o==null)return null;let c=Jm(t);qy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=i0(o);u=t0(c[h],p)}return u}function Jm(t,e,s,r){e===void 0&&(e=[]),s===void 0&&(s=[]),r===void 0&&(r="");let l=(o,c,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};h.relativePath.startsWith("/")&&(rt(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let p=jn([r,h.relativePath]),m=s.concat(h);o.children&&o.children.length>0&&(rt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Jm(o.children,e,m,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:Zy(p,o.index),routesMeta:m})};return t.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,c);else for(let h of Zm(o.path))l(o,c,h)}),e}function Zm(t){let e=t.split("/");if(e.length===0)return[];let[s,...r]=e,l=s.endsWith("?"),o=s.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let c=Zm(r.join("/")),u=[];return u.push(...c.map(h=>h===""?o:[o,h].join("/"))),l&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function qy(t){t.sort((e,s)=>e.score!==s.score?s.score-e.score:e0(e.routesMeta.map(r=>r.childrenIndex),s.routesMeta.map(r=>r.childrenIndex)))}const Yy=/^:[\w-]+$/,Qy=3,Ky=2,Xy=1,Gy=10,Jy=-2,tp=t=>t==="*";function Zy(t,e){let s=t.split("/"),r=s.length;return s.some(tp)&&(r+=Jy),e&&(r+=Ky),s.filter(l=>!tp(l)).reduce((l,o)=>l+(Yy.test(o)?Qy:o===""?Xy:Gy),r)}function e0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,l)=>r===e[l])?t[t.length-1]-e[e.length-1]:0}function t0(t,e,s){let{routesMeta:r}=t,l={},o="/",c=[];for(let u=0;u<r.length;++u){let h=r[u],p=u===r.length-1,m=o==="/"?e:e.slice(o.length)||"/",v=s0({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),N=h.route;if(!v)return null;Object.assign(l,v.params),c.push({params:l,pathname:jn([o,v.pathname]),pathnameBase:c0(jn([o,v.pathnameBase])),route:N}),v.pathnameBase!=="/"&&(o=jn([o,v.pathnameBase]))}return c}function s0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[s,r]=n0(t.path,t.caseSensitive,t.end),l=e.match(s);if(!l)return null;let o=l[0],c=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((p,m,v)=>{let{paramName:N,isOptional:w}=m;if(N==="*"){let j=u[v]||"";c=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const b=u[v];return w&&!b?p[N]=void 0:p[N]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:t}}function n0(t,e,s){e===void 0&&(e=!1),s===void 0&&(s=!0),$d(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(r.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function i0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $d(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ud(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let s=e.endsWith("/")?e.length-1:e.length,r=t.charAt(s);return r&&r!=="/"?null:t.slice(s)||"/"}const r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=t=>r0.test(t);function l0(t,e){e===void 0&&(e="/");let{pathname:s,search:r="",hash:l=""}=typeof t=="string"?Wi(t):t,o;if(s)if(a0(s))o=s;else{if(s.includes("//")){let c=s;s=s.replace(/\/\/+/g,"/"),$d(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+s))}s.startsWith("/")?o=sp(s.substring(1),"/"):o=sp(s,e)}else o=e;return{pathname:o,search:d0(r),hash:u0(l)}}function sp(t,e){let s=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?s.length>1&&s.pop():l!=="."&&s.push(l)}),s.length>1?s.join("/"):"/"}function sd(t,e,s,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+s+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function o0(t){return t.filter((e,s)=>s===0||e.route.path&&e.route.path.length>0)}function eg(t,e){let s=o0(t);return e?s.map((r,l)=>l===s.length-1?r.pathname:r.pathnameBase):s.map(r=>r.pathnameBase)}function tg(t,e,s,r){r===void 0&&(r=!1);let l;typeof t=="string"?l=Wi(t):(l=Qr({},t),rt(!l.pathname||!l.pathname.includes("?"),sd("?","pathname","search",l)),rt(!l.pathname||!l.pathname.includes("#"),sd("#","pathname","hash",l)),rt(!l.search||!l.search.includes("#"),sd("#","search","hash",l)));let o=t===""||l.pathname==="",c=o?"/":l.pathname,u;if(c==null)u=s;else{let v=e.length-1;if(!r&&c.startsWith("..")){let N=c.split("/");for(;N[0]==="..";)N.shift(),v-=1;l.pathname=N.join("/")}u=v>=0?e[v]:"/"}let h=l0(l,u),p=c&&c!=="/"&&c.endsWith("/"),m=(o||c===".")&&s.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),c0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,u0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function h0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sg=["post","put","patch","delete"];new Set(sg);const f0=["get",...sg];new Set(f0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kr(){return Kr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},Kr.apply(this,arguments)}const Wd=C.createContext(null),p0=C.createContext(null),ai=C.createContext(null),so=C.createContext(null),_n=C.createContext({outlet:null,matches:[],isDataRoute:!1}),ng=C.createContext(null);function m0(t,e){let{relative:s}=e===void 0?{}:e;ia()||rt(!1);let{basename:r,navigator:l}=C.useContext(ai),{hash:o,pathname:c,search:u}=ag(t,{relative:s}),h=c;return r!=="/"&&(h=c==="/"?r:jn([r,c])),l.createHref({pathname:h,search:u,hash:o})}function ia(){return C.useContext(so)!=null}function ra(){return ia()||rt(!1),C.useContext(so).location}function ig(t){C.useContext(ai).static||C.useLayoutEffect(t)}function Qs(){let{isDataRoute:t}=C.useContext(_n);return t?E0():g0()}function g0(){ia()||rt(!1);let t=C.useContext(Wd),{basename:e,future:s,navigator:r}=C.useContext(ai),{matches:l}=C.useContext(_n),{pathname:o}=ra(),c=JSON.stringify(eg(l,s.v7_relativeSplatPath)),u=C.useRef(!1);return ig(()=>{u.current=!0}),C.useCallback(function(p,m){if(m===void 0&&(m={}),!u.current)return;if(typeof p=="number"){r.go(p);return}let v=tg(p,JSON.parse(c),o,m.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:jn([e,v.pathname])),(m.replace?r.replace:r.push)(v,m.state,m)},[e,r,c,o,t])}function rg(){let{matches:t}=C.useContext(_n),e=t[t.length-1];return e?e.params:{}}function ag(t,e){let{relative:s}=e===void 0?{}:e,{future:r}=C.useContext(ai),{matches:l}=C.useContext(_n),{pathname:o}=ra(),c=JSON.stringify(eg(l,r.v7_relativeSplatPath));return C.useMemo(()=>tg(t,JSON.parse(c),o,s==="path"),[t,c,o,s])}function x0(t,e){return v0(t,e)}function v0(t,e,s,r){ia()||rt(!1);let{navigator:l}=C.useContext(ai),{matches:o}=C.useContext(_n),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=ra(),m;if(e){var v;let y=typeof e=="string"?Wi(e):e;h==="/"||(v=y.pathname)!=null&&v.startsWith(h)||rt(!1),m=y}else m=p;let N=m.pathname||"/",w=N;if(h!=="/"){let y=h.replace(/^\//,"").split("/");w="/"+N.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=Hy(t,{pathname:w}),j=w0(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:jn([h,l.encodeLocation?l.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?h:jn([h,l.encodeLocation?l.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,s,r);return e&&j?C.createElement(so.Provider,{value:{location:Kr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:xn.Pop}},j):j}function y0(){let t=C0(),e=h0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),s=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),s?C.createElement("pre",{style:l},s):null,null)}const b0=C.createElement(y0,null);class j0 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,s){return s.location!==e.location||s.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:s.error,location:s.location,revalidation:e.revalidation||s.revalidation}}componentDidCatch(e,s){console.error("React Router caught the following error during render",e,s)}render(){return this.state.error!==void 0?C.createElement(_n.Provider,{value:this.props.routeContext},C.createElement(ng.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N0(t){let{routeContext:e,match:s,children:r}=t,l=C.useContext(Wd);return l&&l.static&&l.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(_n.Provider,{value:e},r)}function w0(t,e,s,r){var l;if(e===void 0&&(e=[]),s===void 0&&(s=null),r===void 0&&(r=null),t==null){var o;if(!s)return null;if(s.errors)t=s.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!s.initialized&&s.matches.length>0)t=s.matches;else return null}let c=t,u=(l=s)==null?void 0:l.errors;if(u!=null){let m=c.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);m>=0||rt(!1),c=c.slice(0,Math.min(c.length,m+1))}let h=!1,p=-1;if(s&&r&&r.v7_partialHydration)for(let m=0;m<c.length;m++){let v=c[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=m),v.route.id){let{loaderData:N,errors:w}=s,b=v.route.loader&&N[v.route.id]===void 0&&(!w||w[v.route.id]===void 0);if(v.route.lazy||b){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,v,N)=>{let w,b=!1,j=null,y=null;s&&(w=u&&v.route.id?u[v.route.id]:void 0,j=v.route.errorElement||b0,h&&(p<0&&N===0?(R0("route-fallback"),b=!0,y=null):p===N&&(b=!0,y=v.route.hydrateFallbackElement||null)));let k=e.concat(c.slice(0,N+1)),S=()=>{let P;return w?P=j:b?P=y:v.route.Component?P=C.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=m,C.createElement(N0,{match:v,routeContext:{outlet:m,matches:k,isDataRoute:s!=null},children:P})};return s&&(v.route.ErrorBoundary||v.route.errorElement||N===0)?C.createElement(j0,{location:s.location,revalidation:s.revalidation,component:j,error:w,children:S(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):S()},null)}var lg=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(lg||{}),og=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(og||{});function _0(t){let e=C.useContext(Wd);return e||rt(!1),e}function k0(t){let e=C.useContext(p0);return e||rt(!1),e}function S0(t){let e=C.useContext(_n);return e||rt(!1),e}function cg(t){let e=S0(),s=e.matches[e.matches.length-1];return s.route.id||rt(!1),s.route.id}function C0(){var t;let e=C.useContext(ng),s=k0(),r=cg();return e!==void 0?e:(t=s.errors)==null?void 0:t[r]}function E0(){let{router:t}=_0(lg.UseNavigateStable),e=cg(og.UseNavigateStable),s=C.useRef(!1);return ig(()=>{s.current=!0}),C.useCallback(function(l,o){o===void 0&&(o={}),s.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Kr({fromRouteId:e},o)))},[t,e])}const np={};function R0(t,e,s){np[t]||(np[t]=!0)}function P0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qe(t){rt(!1)}function D0(t){let{basename:e="/",children:s=null,location:r,navigationType:l=xn.Pop,navigator:o,static:c=!1,future:u}=t;ia()&&rt(!1);let h=e.replace(/^\/*/,"/"),p=C.useMemo(()=>({basename:h,navigator:o,static:c,future:Kr({v7_relativeSplatPath:!1},u)}),[h,u,o,c]);typeof r=="string"&&(r=Wi(r));let{pathname:m="/",search:v="",hash:N="",state:w=null,key:b="default"}=r,j=C.useMemo(()=>{let y=Ud(m,h);return y==null?null:{location:{pathname:y,search:v,hash:N,state:w,key:b},navigationType:l}},[h,m,v,N,w,b,l]);return j==null?null:C.createElement(ai.Provider,{value:p},C.createElement(so.Provider,{children:s,value:j}))}function A0(t){let{children:e,location:s}=t;return x0(wd(e),s)}new Promise(()=>{});function wd(t,e){e===void 0&&(e=[]);let s=[];return C.Children.forEach(t,(r,l)=>{if(!C.isValidElement(r))return;let o=[...e,l];if(r.type===C.Fragment){s.push.apply(s,wd(r.props.children,o));return}r.type!==Qe&&rt(!1),!r.props.index||!r.props.children||rt(!1);let c={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=wd(r.props.children,o)),s.push(c)}),s}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _d(){return _d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},_d.apply(this,arguments)}function T0(t,e){if(t==null)return{};var s={},r=Object.keys(t),l,o;for(o=0;o<r.length;o++)l=r[o],!(e.indexOf(l)>=0)&&(s[l]=t[l]);return s}function L0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M0(t,e){return t.button===0&&(!e||e==="_self")&&!L0(t)}const O0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z0="6";try{window.__reactRouterVersion=z0}catch{}const I0="startTransition",ip=Ly[I0];function F0(t){let{basename:e,children:s,future:r,window:l}=t,o=C.useRef();o.current==null&&(o.current=$y({window:l,v5Compat:!0}));let c=o.current,[u,h]=C.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},m=C.useCallback(v=>{p&&ip?ip(()=>h(v)):h(v)},[h,p]);return C.useLayoutEffect(()=>c.listen(m),[c,m]),C.useEffect(()=>P0(r),[r]),C.createElement(D0,{basename:e,children:s,location:u.location,navigationType:u.action,navigator:c,future:r})}const B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=C.forwardRef(function(e,s){let{onClick:r,relative:l,reloadDocument:o,replace:c,state:u,target:h,to:p,preventScrollReset:m,viewTransition:v}=e,N=T0(e,O0),{basename:w}=C.useContext(ai),b,j=!1;if(typeof p=="string"&&$0.test(p)&&(b=p,B0))try{let P=new URL(window.location.href),I=p.startsWith("//")?new URL(P.protocol+p):new URL(p),R=Ud(I.pathname,w);I.origin===P.origin&&R!=null?p=R+I.search+I.hash:j=!0}catch{}let y=m0(p,{relative:l}),k=U0(p,{replace:c,state:u,target:h,preventScrollReset:m,relative:l,viewTransition:v});function S(P){r&&r(P),P.defaultPrevented||k(P)}return C.createElement("a",_d({},N,{href:b||y,onClick:j||o?r:S,ref:s,target:h}))});var rp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rp||(rp={}));var ap;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ap||(ap={}));function U0(t,e){let{target:s,replace:r,state:l,preventScrollReset:o,relative:c,viewTransition:u}=e===void 0?{}:e,h=Qs(),p=ra(),m=ag(t,{relative:c});return C.useCallback(v=>{if(M0(v,s)){v.preventDefault();let N=r!==void 0?r:Hl(p)===Hl(m);h(t,{replace:N,state:l,preventScrollReset:o,relative:c,viewTransition:u})}},[p,h,m,r,l,s,t,o,c,u])}const W0={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",correlation:"关联分析",multi:"多机分析",query:"SQL查询",ueba:"UEBA分析",suppress:"白名单",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",detail:"详情",falsePositive:"误报",markFalsePositive:"标记为误报",deleteAlert:"删除告警",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",systemProcesses:"进程信息",systemNetwork:"网络连接",systemDlls:"加载的DLL",systemDrivers:"驱动程序",systemUsers:"本地用户",systemRegistry:"注册表持久化",systemTasks:"计划任务",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",importWithAlertBtn:"导入并分析",withAlert:"(含告警分析)",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成",evtx2csvBtn:"导入 EVTX 并转换 CSV",evtx2csvConverting:"正在转换 EVTX 为 CSV...",evtx2csvDone:"转换完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器",relatedEvents:"相关日志事件"},correlation:{title:"关联分析",pageDesc:"检测跨多个事件源的关联攻击模式",timeWindow:"时间窗口",runAnalysis:"运行关联分析",analyzing:"分析中...",results:"分析结果",noResults:"未发现关联攻击",noResultsDesc:"在指定时间范围内未检测到关联攻击模式",rulesTriggered:"条规则触发",events:"个事件",startTime:"开始时间",endTime:"结束时间",aboutCorrelation:"关于关联分析",aboutDesc:"关联分析通过检测跨多个事件源的时序和模式来识别复杂攻击链，如横向移动、特权提升和数据外传。",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",runAnalyzers:"运行分析器"},multi:{title:"多机分析",pageDesc:"跨机器关联分析和横向移动检测",runAnalysis:"运行多机分析",analyzing:"分析中...",machineOverview:"机器概览",crossMachine:"跨机活动",lateralMovement:"横向移动",analysisId:"分析ID",machinesFound:"发现机器",suspiciousActivities:"可疑活动",lateralMovements:"横向移动",domain:"域",role:"角色",loggedInto:"登录到",machines:"台机器",totalLogins:"总登录次数",noMachines:"未发现机器数据",noMachinesDesc:"请从多台机器导入事件日志以启用跨机器分析。",noSuspiciousActivity:"未发现可疑活动",noSuspiciousActivityDesc:"在分析时间范围内未检测到可疑的跨机器活动。",noLateralMovement:"未发现横向移动",noLateralMovementDesc:"在分析时间范围内未检测到横向移动迹象。",time:"时间",source:"源机器",user:"用户",event:"事件ID",description:"描述",severity:"严重级别",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewTimeline:"查看时间线",viewAlerts:"查看告警"},query:{title:"SQL查询",pageDesc:"执行原始SQL查询访问数据库",sqlQuery:"SQL查询",enterSQL:"输入SQL查询语句...",execute:"执行查询",executing:"执行中...",presets:"预设查询",presetEvents:"最近事件",presetAlerts:"最近告警",presetAuth:"认证事件",presetPowerShell:"PowerShell",presetSchema:"数据库表",results:"查询结果",rowsReturned:"行返回",sqlRequired:"请输入SQL查询语句",noResults:"无结果",noResultsDesc:"查询未返回任何数据。",aboutQuery:"关于SQL查询",aboutDesc:"SQL查询允许您直接访问数据库，执行自定义查询。使用此功能需要了解数据库架构。",exampleQueries:"示例查询",example1Desc:"查询所有登录成功事件(Event ID 4624)",example2Desc:"按机器分组统计事件数量"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",general:"通用",database:"数据库",apiServer:"API服务器",collection:"采集",advanced:"高级",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存",generalSettings:"通用设置",configureBasic:"配置基本应用设置",logLevelDesc:"日志记录的最低严重级别",exportDirectory:"导出目录",exportDirectoryDesc:"导出文件的默认目录",autoUpdateRules:"自动更新规则",autoUpdateRulesDesc:"自动更新检测规则",databaseSettings:"数据库设置",configureDatabase:"配置数据库存储和保留策略",databasePathDesc:"SQLite数据库文件路径",eventRetentionDesc:"自动删除早于此时间的事件",maxEventsDesc:"最大存储事件数",apiServerSettings:"API服务器设置",configureApiServer:"配置HTTP API服务器",apiHost:"API主机",apiHostDesc:"API服务器绑定地址",apiPort:"API端口",apiPortDesc:"API服务器端口号",enableCors:"启用CORS",enableCorsDesc:"允许跨域请求",collectionSettings:"采集设置",configureCollection:"配置事件采集行为",enableAlertingDesc:"当规则匹配时生成告警",enableLiveCollectionDesc:"持续监控Windows事件日志",maxImportFileSize:"最大导入文件大小 (MB)",maxImportFileSizeDesc:"导入文件的最大大小",advancedSettings:"高级设置",expertConfig:"专家配置选项",warning:"警告",warningDesc:"高级设置可能影响性能和稳定性。仅在您确定时修改。",parserWorkers:"解析器工作线程",parserWorkersDesc:"并行解析工作线程数",memoryLimit:"内存限制 (MB)",memoryLimitDesc:"事件处理的最大内存使用量",saveChanges:"保存更改",saving:"保存中...",resetDefaults:"重置为默认"},logs:{title:"日志查看",refresh:"刷新",totalEntries:"总条目数",currentPage:"当前页",logFiles:"日志文件",filterByLevel:"按级别筛选",all:"全部",current:"当前",viewer:"日志查看器",noLogs:"暂无日志",timestamp:"时间戳",level:"级别",message:"消息",details:"详情",first:"首页",last:"末页",metrics:"性能",startup:"启动",panic:"崩溃"},ueba:{title:"用户行为分析",pageDesc:"检测异常用户行为，如不可能的旅行、异常行为和权限提升",timeWindow:"时间窗口",runAnalysis:"运行分析",analyzing:"分析中...",totalAnomalies:"异常总数",highRisk:"高危",mediumRisk:"中危",lowRisk:"低危",duration:"耗时",noAnomalies:"未发现异常",noAnomaliesDesc:"用户行为未检测到异常。",detectedAnomalies:"检测到的异常",user:"用户",details:"详情",profiles:"用户画像",userProfiles:"用户画像列表",loginCount:"登录次数",avgEventsPerDay:"日均事件数",lastUpdated:"最后更新",noProfiles:"暂无用户画像",noProfilesDesc:"需要更多认证事件数据来构建用户画像。",impossibleTravel:"不可能的旅行",abnormalBehavior:"异常行为",abnormalHours:"异常时间",unusualHours:"异常活动时间",newLocation:"新位置",privilegeEscalation:"权限提升",bruteForce:"暴力破解",dataExfiltration:"数据外传",quickActions:"快速操作",viewCorrelation:"查看关联分析",viewAlerts:"查看告警",viewTimeline:"查看时间线",analyze:"分析"},suppress:{title:"白名单管理",pageDesc:"管理告警抑制规则以减少误报",addRule:"添加规则",name:"名称",namePlaceholder:"输入规则名称...",scope:"范围",scopeGlobal:"全局",scopeUser:"用户",scopeComputer:"计算机",duration:"持续时间",expiresAt:"过期时间",status:"状态",enabled:"已启用",disabled:"已禁用",actions:"操作",delete:"删除",confirmDelete:"确认删除此规则?",noRules:"暂无白名单规则",noRulesDesc:"添加白名单规则以抑制特定告警。",create:"创建",about:"关于白名单",aboutDesc:"白名单规则用于在特定条件下抑制告警，减少误报。您可以基于用户、计算机、事件ID等条件创建规则。"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据",apply:"应用",clear:"清除"}},H0={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",correlation:"Correlation",multi:"Multi",query:"Query",ueba:"UEBA",suppress:"Whitelist",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings",logs:"Logs"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",detail:"Detail",falsePositive:"False Positive",markFalsePositive:"Mark False Positive",deleteAlert:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",systemProcesses:"Process Info",systemNetwork:"Network Connections",systemDlls:"Loaded DLLs",systemDrivers:"Drivers",systemUsers:"Local Users",systemRegistry:"Registry Persistence",systemTasks:"Scheduled Tasks",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",importWithAlertBtn:"Import & Analyze",withAlert:"(with alert analysis)",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed",evtx2csvBtn:"Import & Convert",evtx2csvConverting:"Converting EVTX to CSV...",evtx2csvDone:"Conversion completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers",relatedEvents:"Related Log Events"},correlation:{title:"Correlation Analysis",pageDesc:"Detect correlated attack patterns across multiple event sources",timeWindow:"Time Window",runAnalysis:"Run Correlation Analysis",analyzing:"Analyzing...",results:"Analysis Results",noResults:"No Correlated Attacks Detected",noResultsDesc:"No correlated attack patterns detected in the specified time window",rulesTriggered:"rules triggered",events:"events",startTime:"Start Time",endTime:"End Time",aboutCorrelation:"About Correlation Analysis",aboutDesc:"Correlation analysis identifies complex attack chains by detecting temporal and pattern correlations across multiple event sources, such as lateral movement, privilege escalation, and data exfiltration.",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",runAnalyzers:"Run Analyzers"},multi:{title:"Multi-Machine Analysis",pageDesc:"Cross-machine correlation and lateral movement detection",runAnalysis:"Run Multi-Machine Analysis",analyzing:"Analyzing...",machineOverview:"Machine Overview",crossMachine:"Cross-Machine Activity",lateralMovement:"Lateral Movement",analysisId:"Analysis ID",machinesFound:"Machines Found",suspiciousActivities:"Suspicious Activities",lateralMovements:"Lateral Movements",domain:"Domain",role:"Role",loggedInto:"Logged into",machines:"machines",totalLogins:"Total logins",noMachines:"No Machine Data",noMachinesDesc:"Import event logs from multiple machines to enable cross-machine analysis.",noSuspiciousActivity:"No Suspicious Activity",noSuspiciousActivityDesc:"No suspicious cross-machine activity detected in the analysis period.",noLateralMovement:"No Lateral Movement",noLateralMovementDesc:"No lateral movement indicators detected in the analysis period.",time:"Time",source:"Source",user:"User",event:"Event ID",description:"Description",severity:"Severity",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewTimeline:"View Timeline",viewAlerts:"View Alerts"},query:{title:"SQL Query",pageDesc:"Execute raw SQL queries to access the database",sqlQuery:"SQL Query",enterSQL:"Enter SQL query...",execute:"Execute",executing:"Executing...",presets:"Preset Queries",presetEvents:"Recent Events",presetAlerts:"Recent Alerts",presetAuth:"Auth Events",presetPowerShell:"PowerShell",presetSchema:"DB Tables",results:"Query Results",rowsReturned:"rows returned",sqlRequired:"Please enter a SQL query",noResults:"No Results",noResultsDesc:"The query returned no data.",aboutQuery:"About SQL Query",aboutDesc:"SQL query allows you to directly access the database and execute custom queries. This feature requires knowledge of the database schema.",exampleQueries:"Example Queries",example1Desc:"Query all successful login events (Event ID 4624)",example2Desc:"Group and count events by machine"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",general:"General",database:"Database",apiServer:"API Server",collection:"Collection",advanced:"Advanced",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warning",error:"Error",save:"Save Settings",saved:"Settings saved",generalSettings:"General Settings",configureBasic:"Configure basic application settings",logLevelDesc:"Minimum severity level for logging",exportDirectory:"Export Directory",exportDirectoryDesc:"Default directory for exported files",autoUpdateRules:"Auto Update Rules",autoUpdateRulesDesc:"Automatically update detection rules",databaseSettings:"Database Settings",configureDatabase:"Configure database storage and retention",databasePathDesc:"Path to SQLite database file",eventRetentionDesc:"Automatically delete events older than this",maxEventsDesc:"Maximum number of events to store",apiServerSettings:"API Server Settings",configureApiServer:"Configure the HTTP API server",apiHost:"API Host",apiHostDesc:"Host address to bind the API server",apiPort:"API Port",apiPortDesc:"Port number for the API server",enableCors:"Enable CORS",enableCorsDesc:"Allow cross-origin requests",collectionSettings:"Collection Settings",configureCollection:"Configure event collection behavior",enableAlertingDesc:"Generate alerts when rules match",enableLiveCollectionDesc:"Continuously monitor Windows Event Logs",maxImportFileSize:"Max Import File Size (MB)",maxImportFileSizeDesc:"Maximum size for imported files",advancedSettings:"Advanced Settings",expertConfig:"Expert configuration options",warning:"Warning",warningDesc:"Advanced settings may affect performance and stability. Only modify if you know what you are doing.",parserWorkers:"Parser Workers",parserWorkersDesc:"Number of parallel parsing workers",memoryLimit:"Memory Limit (MB)",memoryLimitDesc:"Maximum memory usage for event processing",saveChanges:"Save Changes",saving:"Saving...",resetDefaults:"Reset to Defaults"},logs:{title:"Log Viewer",refresh:"Refresh",totalEntries:"Total Entries",currentPage:"Current Page",logFiles:"Log Files",filterByLevel:"Filter by Level",all:"All",current:"Current",viewer:"Log Viewer",noLogs:"No logs available",timestamp:"Timestamp",level:"Level",message:"Message",details:"Details",first:"First",last:"Last",metrics:"Metrics",startup:"Startup",panic:"Panic"},ueba:{title:"User Behavior Analytics",pageDesc:"Detect anomalous user activities such as impossible travel, abnormal behavior, and privilege escalation",timeWindow:"Time Window",runAnalysis:"Run Analysis",analyzing:"Analyzing...",totalAnomalies:"Total Anomalies",highRisk:"High Risk",mediumRisk:"Medium Risk",lowRisk:"Low Risk",duration:"Duration",noAnomalies:"No Anomalies Detected",noAnomaliesDesc:"No anomalous user behavior detected.",detectedAnomalies:"Detected Anomalies",user:"User",details:"Details",profiles:"Profiles",userProfiles:"User Profiles",loginCount:"Login Count",avgEventsPerDay:"Avg Events/Day",lastUpdated:"Last Updated",noProfiles:"No User Profiles",noProfilesDesc:"More authentication event data is needed to build user profiles.",impossibleTravel:"Impossible Travel",abnormalBehavior:"Abnormal Behavior",abnormalHours:"Abnormal Hours",unusualHours:"Unusual Hours",newLocation:"New Location",privilegeEscalation:"Privilege Escalation",bruteForce:"Brute Force",dataExfiltration:"Data Exfiltration",quickActions:"Quick Actions",viewCorrelation:"View Correlation",viewAlerts:"View Alerts",viewTimeline:"View Timeline",analyze:"Analyze"},suppress:{title:"Whitelist Management",pageDesc:"Manage alert suppression rules to reduce false positives",addRule:"Add Rule",name:"Name",namePlaceholder:"Enter rule name...",scope:"Scope",scopeGlobal:"Global",scopeUser:"User",scopeComputer:"Computer",duration:"Duration",expiresAt:"Expires At",status:"Status",enabled:"Enabled",disabled:"Disabled",actions:"Actions",delete:"Delete",confirmDelete:"Confirm delete this rule?",noRules:"No Whitelist Rules",noRulesDesc:"Add whitelist rules to suppress specific alerts.",create:"Create",about:"About Whitelist",aboutDesc:"Whitelist rules are used to suppress alerts under specific conditions, reducing false positives. You can create rules based on user, computer, event ID, and other conditions."},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data",apply:"Apply",clear:"Clear"}},V0={zh:W0,en:H0},dg=C.createContext(void 0);function q0(t,e){const s=e.split(".");let r=t;for(const l of s)if(r&&typeof r=="object"&&l in r)r=r[l];else return e;return typeof r=="string"?r:e}function Y0({children:t}){const[e,s]=C.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),r=C.useCallback(c=>{s(c),localStorage.setItem("locale",c)},[]),l=C.useCallback(()=>{r(e==="zh"?"en":"zh")},[e,r]),o=C.useCallback((c,u)=>{let h=q0(V0[e],c);return u&&Object.entries(u).forEach(([p,m])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(m))}),h},[e]);return n.jsx(dg.Provider,{value:{locale:e,t:o,setLocale:r,toggleLocale:l},children:t})}function at(){const t=C.useContext(dg);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function Q0(){const{locale:t,toggleLocale:e}=at();return n.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function ug(t,e){return function(){return t.apply(e,arguments)}}const{toString:K0}=Object.prototype,{getPrototypeOf:Hd}=Object,{iterator:no,toStringTag:hg}=Symbol,io=(t=>e=>{const s=K0.call(e);return t[s]||(t[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),gs=t=>(t=t.toLowerCase(),e=>io(e)===t),ro=t=>e=>typeof e===t,{isArray:Hi}=Array,Bi=ro("undefined");function aa(t){return t!==null&&!Bi(t)&&t.constructor!==null&&!Bi(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const fg=gs("ArrayBuffer");function X0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&fg(t.buffer),e}const G0=ro("string"),zt=ro("function"),pg=ro("number"),la=t=>t!==null&&typeof t=="object",J0=t=>t===!0||t===!1,Ol=t=>{if(io(t)!=="object")return!1;const e=Hd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(hg in t)&&!(no in t)},Z0=t=>{if(!la(t)||aa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},eb=gs("Date"),tb=gs("File"),sb=t=>!!(t&&typeof t.uri<"u"),nb=t=>t&&typeof t.getParts<"u",ib=gs("Blob"),rb=gs("FileList"),ab=t=>la(t)&&zt(t.pipe);function lb(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const lp=lb(),op=typeof lp.FormData<"u"?lp.FormData:void 0,ob=t=>{let e;return t&&(op&&t instanceof op||zt(t.append)&&((e=io(t))==="formdata"||e==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},cb=gs("URLSearchParams"),[db,ub,hb,fb]=["ReadableStream","Request","Response","Headers"].map(gs),pb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function oa(t,e,{allOwnKeys:s=!1}={}){if(t===null||typeof t>"u")return;let r,l;if(typeof t!="object"&&(t=[t]),Hi(t))for(r=0,l=t.length;r<l;r++)e.call(null,t[r],r,t);else{if(aa(t))return;const o=s?Object.getOwnPropertyNames(t):Object.keys(t),c=o.length;let u;for(r=0;r<c;r++)u=o[r],e.call(null,t[u],u,t)}}function mg(t,e){if(aa(t))return null;e=e.toLowerCase();const s=Object.keys(t);let r=s.length,l;for(;r-- >0;)if(l=s[r],e===l.toLowerCase())return l;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gg=t=>!Bi(t)&&t!==Jn;function kd(){const{caseless:t,skipUndefined:e}=gg(this)&&this||{},s={},r=(l,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=t&&mg(s,o)||o;Ol(s[c])&&Ol(l)?s[c]=kd(s[c],l):Ol(l)?s[c]=kd({},l):Hi(l)?s[c]=l.slice():(!e||!Bi(l))&&(s[c]=l)};for(let l=0,o=arguments.length;l<o;l++)arguments[l]&&oa(arguments[l],r);return s}const mb=(t,e,s,{allOwnKeys:r}={})=>(oa(e,(l,o)=>{s&&zt(l)?Object.defineProperty(t,o,{value:ug(l,s),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,o,{value:l,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),t),gb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),xb=(t,e,s,r)=>{t.prototype=Object.create(e.prototype,r),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),s&&Object.assign(t.prototype,s)},vb=(t,e,s,r)=>{let l,o,c;const u={};if(e=e||{},t==null)return e;do{for(l=Object.getOwnPropertyNames(t),o=l.length;o-- >0;)c=l[o],(!r||r(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=s!==!1&&Hd(t)}while(t&&(!s||s(t,e))&&t!==Object.prototype);return e},yb=(t,e,s)=>{t=String(t),(s===void 0||s>t.length)&&(s=t.length),s-=e.length;const r=t.indexOf(e,s);return r!==-1&&r===s},bb=t=>{if(!t)return null;if(Hi(t))return t;let e=t.length;if(!pg(e))return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},jb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Hd(Uint8Array)),Nb=(t,e)=>{const r=(t&&t[no]).call(t);let l;for(;(l=r.next())&&!l.done;){const o=l.value;e.call(t,o[0],o[1])}},wb=(t,e)=>{let s;const r=[];for(;(s=t.exec(e))!==null;)r.push(s);return r},_b=gs("HTMLFormElement"),kb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,r,l){return r.toUpperCase()+l}),cp=(({hasOwnProperty:t})=>(e,s)=>t.call(e,s))(Object.prototype),Sb=gs("RegExp"),xg=(t,e)=>{const s=Object.getOwnPropertyDescriptors(t),r={};oa(s,(l,o)=>{let c;(c=e(l,o,t))!==!1&&(r[o]=c||l)}),Object.defineProperties(t,r)},Cb=t=>{xg(t,(e,s)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const r=t[s];if(zt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Eb=(t,e)=>{const s={},r=l=>{l.forEach(o=>{s[o]=!0})};return Hi(t)?r(t):r(String(t).split(e)),s},Rb=()=>{},Pb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Db(t){return!!(t&&zt(t.append)&&t[hg]==="FormData"&&t[no])}const Ab=t=>{const e=new Array(10),s=(r,l)=>{if(la(r)){if(e.indexOf(r)>=0)return;if(aa(r))return r;if(!("toJSON"in r)){e[l]=r;const o=Hi(r)?[]:{};return oa(r,(c,u)=>{const h=s(c,l+1);!Bi(h)&&(o[u]=h)}),e[l]=void 0,o}}return r};return s(t,0)},Tb=gs("AsyncFunction"),Lb=t=>t&&(la(t)||zt(t))&&zt(t.then)&&zt(t.catch),vg=((t,e)=>t?setImmediate:e?((s,r)=>(Jn.addEventListener("message",({source:l,data:o})=>{l===Jn&&o===s&&r.length&&r.shift()()},!1),l=>{r.push(l),Jn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",zt(Jn.postMessage)),Mb=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||vg,Ob=t=>t!=null&&zt(t[no]),K={isArray:Hi,isArrayBuffer:fg,isBuffer:aa,isFormData:ob,isArrayBufferView:X0,isString:G0,isNumber:pg,isBoolean:J0,isObject:la,isPlainObject:Ol,isEmptyObject:Z0,isReadableStream:db,isRequest:ub,isResponse:hb,isHeaders:fb,isUndefined:Bi,isDate:eb,isFile:tb,isReactNativeBlob:sb,isReactNative:nb,isBlob:ib,isRegExp:Sb,isFunction:zt,isStream:ab,isURLSearchParams:cb,isTypedArray:jb,isFileList:rb,forEach:oa,merge:kd,extend:mb,trim:pb,stripBOM:gb,inherits:xb,toFlatObject:vb,kindOf:io,kindOfTest:gs,endsWith:yb,toArray:bb,forEachEntry:Nb,matchAll:wb,isHTMLForm:_b,hasOwnProperty:cp,hasOwnProp:cp,reduceDescriptors:xg,freezeMethods:Cb,toObjectSet:Eb,toCamelCase:kb,noop:Rb,toFiniteNumber:Pb,findKey:mg,global:Jn,isContextDefined:gg,isSpecCompliantForm:Db,toJSONObject:Ab,isAsyncFn:Tb,isThenable:Lb,setImmediate:vg,asap:Mb,isIterable:Ob};let we=class yg extends Error{static from(e,s,r,l,o,c){const u=new yg(e.message,s||e.code,r,l,o);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,s,r,l,o){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,s&&(this.code=s),r&&(this.config=r),l&&(this.request=l),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.status}}};we.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";we.ERR_BAD_OPTION="ERR_BAD_OPTION";we.ECONNABORTED="ECONNABORTED";we.ETIMEDOUT="ETIMEDOUT";we.ERR_NETWORK="ERR_NETWORK";we.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";we.ERR_DEPRECATED="ERR_DEPRECATED";we.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";we.ERR_BAD_REQUEST="ERR_BAD_REQUEST";we.ERR_CANCELED="ERR_CANCELED";we.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";we.ERR_INVALID_URL="ERR_INVALID_URL";const zb=null;function Sd(t){return K.isPlainObject(t)||K.isArray(t)}function bg(t){return K.endsWith(t,"[]")?t.slice(0,-2):t}function nd(t,e,s){return t?t.concat(e).map(function(l,o){return l=bg(l),!s&&o?"["+l+"]":l}).join(s?".":""):e}function Ib(t){return K.isArray(t)&&!t.some(Sd)}const Fb=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});function ao(t,e,s){if(!K.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,s=K.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,y){return!K.isUndefined(y[j])});const r=s.metaTokens,l=s.visitor||m,o=s.dots,c=s.indexes,h=(s.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(e);if(!K.isFunction(l))throw new TypeError("visitor must be a function");function p(b){if(b===null)return"";if(K.isDate(b))return b.toISOString();if(K.isBoolean(b))return b.toString();if(!h&&K.isBlob(b))throw new we("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(b)||K.isTypedArray(b)?h&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,j,y){let k=b;if(K.isReactNative(e)&&K.isReactNativeBlob(b))return e.append(nd(y,j,o),p(b)),!1;if(b&&!y&&typeof b=="object"){if(K.endsWith(j,"{}"))j=r?j:j.slice(0,-2),b=JSON.stringify(b);else if(K.isArray(b)&&Ib(b)||(K.isFileList(b)||K.endsWith(j,"[]"))&&(k=K.toArray(b)))return j=bg(j),k.forEach(function(P,I){!(K.isUndefined(P)||P===null)&&e.append(c===!0?nd([j],I,o):c===null?j:j+"[]",p(P))}),!1}return Sd(b)?!0:(e.append(nd(y,j,o),p(b)),!1)}const v=[],N=Object.assign(Fb,{defaultVisitor:m,convertValue:p,isVisitable:Sd});function w(b,j){if(!K.isUndefined(b)){if(v.indexOf(b)!==-1)throw Error("Circular reference detected in "+j.join("."));v.push(b),K.forEach(b,function(k,S){(!(K.isUndefined(k)||k===null)&&l.call(e,k,K.isString(S)?S.trim():S,j,N))===!0&&w(k,j?j.concat(S):[S])}),v.pop()}}if(!K.isObject(t))throw new TypeError("data must be an object");return w(t),e}function dp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Vd(t,e){this._pairs=[],t&&ao(t,this,e)}const jg=Vd.prototype;jg.append=function(e,s){this._pairs.push([e,s])};jg.toString=function(e){const s=e?function(r){return e.call(this,r,dp)}:dp;return this._pairs.map(function(l){return s(l[0])+"="+s(l[1])},"").join("&")};function Bb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ng(t,e,s){if(!e)return t;const r=s&&s.encode||Bb,l=K.isFunction(s)?{serialize:s}:s,o=l&&l.serialize;let c;if(o?c=o(e,l):c=K.isURLSearchParams(e)?e.toString():new Vd(e,l).toString(r),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class up{constructor(){this.handlers=[]}use(e,s,r){return this.handlers.push({fulfilled:e,rejected:s,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){K.forEach(this.handlers,function(r){r!==null&&e(r)})}}const qd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},$b=typeof URLSearchParams<"u"?URLSearchParams:Vd,Ub=typeof FormData<"u"?FormData:null,Wb=typeof Blob<"u"?Blob:null,Hb={isBrowser:!0,classes:{URLSearchParams:$b,FormData:Ub,Blob:Wb},protocols:["http","https","file","blob","url","data"]},Yd=typeof window<"u"&&typeof document<"u",Cd=typeof navigator=="object"&&navigator||void 0,Vb=Yd&&(!Cd||["ReactNative","NativeScript","NS"].indexOf(Cd.product)<0),qb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yb=Yd&&window.location.href||"http://localhost",Qb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yd,hasStandardBrowserEnv:Vb,hasStandardBrowserWebWorkerEnv:qb,navigator:Cd,origin:Yb},Symbol.toStringTag,{value:"Module"})),jt={...Qb,...Hb};function Kb(t,e){return ao(t,new jt.classes.URLSearchParams,{visitor:function(s,r,l,o){return jt.isNode&&K.isBuffer(s)?(this.append(r,s.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...e})}function Xb(t){return K.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Gb(t){const e={},s=Object.keys(t);let r;const l=s.length;let o;for(r=0;r<l;r++)o=s[r],e[o]=t[o];return e}function wg(t){function e(s,r,l,o){let c=s[o++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=o>=s.length;return c=!c&&K.isArray(l)?l.length:c,h?(K.hasOwnProp(l,c)?l[c]=[l[c],r]:l[c]=r,!u):((!l[c]||!K.isObject(l[c]))&&(l[c]=[]),e(s,r,l[c],o)&&K.isArray(l[c])&&(l[c]=Gb(l[c])),!u)}if(K.isFormData(t)&&K.isFunction(t.entries)){const s={};return K.forEachEntry(t,(r,l)=>{e(Xb(r),l,s,0)}),s}return null}function Jb(t,e,s){if(K.isString(t))try{return(e||JSON.parse)(t),K.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(s||JSON.stringify)(t)}const ca={transitional:qd,adapter:["xhr","http","fetch"],transformRequest:[function(e,s){const r=s.getContentType()||"",l=r.indexOf("application/json")>-1,o=K.isObject(e);if(o&&K.isHTMLForm(e)&&(e=new FormData(e)),K.isFormData(e))return l?JSON.stringify(wg(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e)||K.isReadableStream(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Kb(e,this.formSerializer).toString();if((u=K.isFileList(e))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ao(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return o||l?(s.setContentType("application/json",!1),Jb(e)):e}],transformResponse:[function(e){const s=this.transitional||ca.transitional,r=s&&s.forcedJSONParsing,l=this.responseType==="json";if(K.isResponse(e)||K.isReadableStream(e))return e;if(e&&K.isString(e)&&(r&&!this.responseType||l)){const c=!(s&&s.silentJSONParsing)&&l;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?we.from(u,we.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],t=>{ca.headers[t]={}});const Zb=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ej=t=>{const e={};let s,r,l;return t&&t.split(`
`).forEach(function(c){l=c.indexOf(":"),s=c.substring(0,l).trim().toLowerCase(),r=c.substring(l+1).trim(),!(!s||e[s]&&Zb[s])&&(s==="set-cookie"?e[s]?e[s].push(r):e[s]=[r]:e[s]=e[s]?e[s]+", "+r:r)}),e},hp=Symbol("internals"),tj=t=>!/[\r\n]/.test(t);function _g(t,e){if(!(t===!1||t==null)){if(K.isArray(t)){t.forEach(s=>_g(s,e));return}if(!tj(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function Pr(t){return t&&String(t).trim().toLowerCase()}function sj(t){let e=t.length;for(;e>0;){const s=t.charCodeAt(e-1);if(s!==10&&s!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function zl(t){return t===!1||t==null?t:K.isArray(t)?t.map(zl):sj(String(t))}function nj(t){const e=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=s.exec(t);)e[r[1]]=r[2];return e}const ij=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function id(t,e,s,r,l){if(K.isFunction(r))return r.call(this,e,s);if(l&&(e=s),!!K.isString(e)){if(K.isString(r))return e.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(e)}}function rj(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,s,r)=>s.toUpperCase()+r)}function aj(t,e){const s=K.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+s,{value:function(l,o,c){return this[r].call(this,e,l,o,c)},configurable:!0})})}let It=class{constructor(e){e&&this.set(e)}set(e,s,r){const l=this;function o(u,h,p){const m=Pr(h);if(!m)throw new Error("header name must be a non-empty string");const v=K.findKey(l,m);(!v||l[v]===void 0||p===!0||p===void 0&&l[v]!==!1)&&(_g(u,h),l[v||h]=zl(u))}const c=(u,h)=>K.forEach(u,(p,m)=>o(p,m,h));if(K.isPlainObject(e)||e instanceof this.constructor)c(e,s);else if(K.isString(e)&&(e=e.trim())&&!ij(e))c(ej(e),s);else if(K.isObject(e)&&K.isIterable(e)){let u={},h,p;for(const m of e){if(!K.isArray(m))throw TypeError("Object iterator must return a key-value pair");u[p=m[0]]=(h=u[p])?K.isArray(h)?[...h,m[1]]:[h,m[1]]:m[1]}c(u,s)}else e!=null&&o(s,e,r);return this}get(e,s){if(e=Pr(e),e){const r=K.findKey(this,e);if(r){const l=this[r];if(!s)return l;if(s===!0)return nj(l);if(K.isFunction(s))return s.call(this,l,r);if(K.isRegExp(s))return s.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,s){if(e=Pr(e),e){const r=K.findKey(this,e);return!!(r&&this[r]!==void 0&&(!s||id(this,this[r],r,s)))}return!1}delete(e,s){const r=this;let l=!1;function o(c){if(c=Pr(c),c){const u=K.findKey(r,c);u&&(!s||id(r,r[u],u,s))&&(delete r[u],l=!0)}}return K.isArray(e)?e.forEach(o):o(e),l}clear(e){const s=Object.keys(this);let r=s.length,l=!1;for(;r--;){const o=s[r];(!e||id(this,this[o],o,e,!0))&&(delete this[o],l=!0)}return l}normalize(e){const s=this,r={};return K.forEach(this,(l,o)=>{const c=K.findKey(r,o);if(c){s[c]=zl(l),delete s[o];return}const u=e?rj(o):String(o).trim();u!==o&&delete s[o],s[u]=zl(l),r[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const s=Object.create(null);return K.forEach(this,(r,l)=>{r!=null&&r!==!1&&(s[l]=e&&K.isArray(r)?r.join(", "):r)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,s])=>e+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...s){const r=new this(e);return s.forEach(l=>r.set(l)),r}static accessor(e){const r=(this[hp]=this[hp]={accessors:{}}).accessors,l=this.prototype;function o(c){const u=Pr(c);r[u]||(aj(l,c),r[u]=!0)}return K.isArray(e)?e.forEach(o):o(e),this}};It.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(It.prototype,({value:t},e)=>{let s=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[s]=r}}});K.freezeMethods(It);function rd(t,e){const s=this||ca,r=e||s,l=It.from(r.headers);let o=r.data;return K.forEach(t,function(u){o=u.call(s,o,l.normalize(),e?e.status:void 0)}),l.normalize(),o}function kg(t){return!!(t&&t.__CANCEL__)}let da=class extends we{constructor(e,s,r){super(e??"canceled",we.ERR_CANCELED,s,r),this.name="CanceledError",this.__CANCEL__=!0}};function Sg(t,e,s){const r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):e(new we("Request failed with status code "+s.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function lj(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function oj(t,e){t=t||10;const s=new Array(t),r=new Array(t);let l=0,o=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),m=r[o];c||(c=p),s[l]=h,r[l]=p;let v=o,N=0;for(;v!==l;)N+=s[v++],v=v%t;if(l=(l+1)%t,l===o&&(o=(o+1)%t),p-c<e)return;const w=m&&p-m;return w?Math.round(N*1e3/w):void 0}}function cj(t,e){let s=0,r=1e3/e,l,o;const c=(p,m=Date.now())=>{s=m,l=null,o&&(clearTimeout(o),o=null),t(...p)};return[(...p)=>{const m=Date.now(),v=m-s;v>=r?c(p,m):(l=p,o||(o=setTimeout(()=>{o=null,c(l)},r-v)))},()=>l&&c(l)]}const Vl=(t,e,s=3)=>{let r=0;const l=oj(50,250);return cj(o=>{const c=o.loaded,u=o.lengthComputable?o.total:void 0,h=c-r,p=l(h),m=c<=u;r=c;const v={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&m?(u-c)/p:void 0,event:o,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(v)},s)},fp=(t,e)=>{const s=t!=null;return[r=>e[0]({lengthComputable:s,total:t,loaded:r}),e[1]]},pp=t=>(...e)=>K.asap(()=>t(...e)),dj=jt.hasStandardBrowserEnv?((t,e)=>s=>(s=new URL(s,jt.origin),t.protocol===s.protocol&&t.host===s.host&&(e||t.port===s.port)))(new URL(jt.origin),jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent)):()=>!0,uj=jt.hasStandardBrowserEnv?{write(t,e,s,r,l,o,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];K.isNumber(s)&&u.push(`expires=${new Date(s).toUTCString()}`),K.isString(r)&&u.push(`path=${r}`),K.isString(l)&&u.push(`domain=${l}`),o===!0&&u.push("secure"),K.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function hj(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function fj(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Cg(t,e,s){let r=!hj(e);return t&&(r||s==!1)?fj(t,e):e}const mp=t=>t instanceof It?{...t}:t;function ni(t,e){e=e||{};const s={};function r(p,m,v,N){return K.isPlainObject(p)&&K.isPlainObject(m)?K.merge.call({caseless:N},p,m):K.isPlainObject(m)?K.merge({},m):K.isArray(m)?m.slice():m}function l(p,m,v,N){if(K.isUndefined(m)){if(!K.isUndefined(p))return r(void 0,p,v,N)}else return r(p,m,v,N)}function o(p,m){if(!K.isUndefined(m))return r(void 0,m)}function c(p,m){if(K.isUndefined(m)){if(!K.isUndefined(p))return r(void 0,p)}else return r(void 0,m)}function u(p,m,v){if(v in e)return r(p,m);if(v in t)return r(void 0,p)}const h={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,m,v)=>l(mp(p),mp(m),v,!0)};return K.forEach(Object.keys({...t,...e}),function(m){if(m==="__proto__"||m==="constructor"||m==="prototype")return;const v=K.hasOwnProp(h,m)?h[m]:l,N=v(t[m],e[m],m);K.isUndefined(N)&&v!==u||(s[m]=N)}),s}const Eg=t=>{const e=ni({},t);let{data:s,withXSRFToken:r,xsrfHeaderName:l,xsrfCookieName:o,headers:c,auth:u}=e;if(e.headers=c=It.from(c),e.url=Ng(Cg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),K.isFormData(s)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(K.isFunction(s.getHeaders)){const h=s.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([m,v])=>{p.includes(m.toLowerCase())&&c.set(m,v)})}}if(jt.hasStandardBrowserEnv&&(r&&K.isFunction(r)&&(r=r(e)),r||r!==!1&&dj(e.url))){const h=l&&o&&uj.read(o);h&&c.set(l,h)}return e},pj=typeof XMLHttpRequest<"u",mj=pj&&function(t){return new Promise(function(s,r){const l=Eg(t);let o=l.data;const c=It.from(l.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=l,m,v,N,w,b;function j(){w&&w(),b&&b(),l.cancelToken&&l.cancelToken.unsubscribe(m),l.signal&&l.signal.removeEventListener("abort",m)}let y=new XMLHttpRequest;y.open(l.method.toUpperCase(),l.url,!0),y.timeout=l.timeout;function k(){if(!y)return;const P=It.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),R={data:!u||u==="text"||u==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:P,config:t,request:y};Sg(function(L){s(L),j()},function(L){r(L),j()},R),y=null}"onloadend"in y?y.onloadend=k:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(k)},y.onabort=function(){y&&(r(new we("Request aborted",we.ECONNABORTED,t,y)),y=null)},y.onerror=function(I){const R=I&&I.message?I.message:"Network Error",$=new we(R,we.ERR_NETWORK,t,y);$.event=I||null,r($),y=null},y.ontimeout=function(){let I=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const R=l.transitional||qd;l.timeoutErrorMessage&&(I=l.timeoutErrorMessage),r(new we(I,R.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,t,y)),y=null},o===void 0&&c.setContentType(null),"setRequestHeader"in y&&K.forEach(c.toJSON(),function(I,R){y.setRequestHeader(R,I)}),K.isUndefined(l.withCredentials)||(y.withCredentials=!!l.withCredentials),u&&u!=="json"&&(y.responseType=l.responseType),p&&([N,b]=Vl(p,!0),y.addEventListener("progress",N)),h&&y.upload&&([v,w]=Vl(h),y.upload.addEventListener("progress",v),y.upload.addEventListener("loadend",w)),(l.cancelToken||l.signal)&&(m=P=>{y&&(r(!P||P.type?new da(null,t,y):P),y.abort(),y=null)},l.cancelToken&&l.cancelToken.subscribe(m),l.signal&&(l.signal.aborted?m():l.signal.addEventListener("abort",m)));const S=lj(l.url);if(S&&jt.protocols.indexOf(S)===-1){r(new we("Unsupported protocol "+S+":",we.ERR_BAD_REQUEST,t));return}y.send(o||null)})},gj=(t,e)=>{const{length:s}=t=t?t.filter(Boolean):[];if(e||s){let r=new AbortController,l;const o=function(p){if(!l){l=!0,u();const m=p instanceof Error?p:this.reason;r.abort(m instanceof we?m:new da(m instanceof Error?m.message:m))}};let c=e&&setTimeout(()=>{c=null,o(new we(`timeout of ${e}ms exceeded`,we.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(o):p.removeEventListener("abort",o)}),t=null)};t.forEach(p=>p.addEventListener("abort",o));const{signal:h}=r;return h.unsubscribe=()=>K.asap(u),h}},xj=function*(t,e){let s=t.byteLength;if(s<e){yield t;return}let r=0,l;for(;r<s;)l=r+e,yield t.slice(r,l),r=l},vj=async function*(t,e){for await(const s of yj(t))yield*xj(s,e)},yj=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:s,value:r}=await e.read();if(s)break;yield r}}finally{await e.cancel()}},gp=(t,e,s,r)=>{const l=vj(t,e);let o=0,c,u=h=>{c||(c=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:p,value:m}=await l.next();if(p){u(),h.close();return}let v=m.byteLength;if(s){let N=o+=v;s(N)}h.enqueue(new Uint8Array(m))}catch(p){throw u(p),p}},cancel(h){return u(h),l.return()}},{highWaterMark:2})},xp=64*1024,{isFunction:Nl}=K,bj=(({Request:t,Response:e})=>({Request:t,Response:e}))(K.global),{ReadableStream:vp,TextEncoder:yp}=K.global,bp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},jj=t=>{t=K.merge.call({skipUndefined:!0},bj,t);const{fetch:e,Request:s,Response:r}=t,l=e?Nl(e):typeof fetch=="function",o=Nl(s),c=Nl(r);if(!l)return!1;const u=l&&Nl(vp),h=l&&(typeof yp=="function"?(b=>j=>b.encode(j))(new yp):async b=>new Uint8Array(await new s(b).arrayBuffer())),p=o&&u&&bp(()=>{let b=!1;const j=new vp,y=new s(jt.origin,{body:j,method:"POST",get duplex(){return b=!0,"half"}}).headers.has("Content-Type");return j.cancel(),b&&!y}),m=c&&u&&bp(()=>K.isReadableStream(new r("").body)),v={stream:m&&(b=>b.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(b=>{!v[b]&&(v[b]=(j,y)=>{let k=j&&j[b];if(k)return k.call(j);throw new we(`Response type '${b}' is not supported`,we.ERR_NOT_SUPPORT,y)})});const N=async b=>{if(b==null)return 0;if(K.isBlob(b))return b.size;if(K.isSpecCompliantForm(b))return(await new s(jt.origin,{method:"POST",body:b}).arrayBuffer()).byteLength;if(K.isArrayBufferView(b)||K.isArrayBuffer(b))return b.byteLength;if(K.isURLSearchParams(b)&&(b=b+""),K.isString(b))return(await h(b)).byteLength},w=async(b,j)=>{const y=K.toFiniteNumber(b.getContentLength());return y??N(j)};return async b=>{let{url:j,method:y,data:k,signal:S,cancelToken:P,timeout:I,onDownloadProgress:R,onUploadProgress:$,responseType:L,headers:A,withCredentials:T="same-origin",fetchOptions:B}=Eg(b),U=e||fetch;L=L?(L+"").toLowerCase():"text";let M=gj([S,P&&P.toAbortSignal()],I),W=null;const V=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let ae;try{if($&&p&&y!=="get"&&y!=="head"&&(ae=await w(A,k))!==0){let O=new s(j,{method:"POST",body:k,duplex:"half"}),G;if(K.isFormData(k)&&(G=O.headers.get("content-type"))&&A.setContentType(G),O.body){const[ce,fe]=fp(ae,Vl(pp($)));k=gp(O.body,xp,ce,fe)}}K.isString(T)||(T=T?"include":"omit");const E=o&&"credentials"in s.prototype,J={...B,signal:M,method:y.toUpperCase(),headers:A.normalize().toJSON(),body:k,duplex:"half",credentials:E?T:void 0};W=o&&new s(j,J);let X=await(o?U(W,B):U(j,J));const ie=m&&(L==="stream"||L==="response");if(m&&(R||ie&&V)){const O={};["status","statusText","headers"].forEach(ye=>{O[ye]=X[ye]});const G=K.toFiniteNumber(X.headers.get("content-length")),[ce,fe]=R&&fp(G,Vl(pp(R),!0))||[];X=new r(gp(X.body,xp,ce,()=>{fe&&fe(),V&&V()}),O)}L=L||"text";let Z=await v[K.findKey(v,L)||"text"](X,b);return!ie&&V&&V(),await new Promise((O,G)=>{Sg(O,G,{data:Z,headers:It.from(X.headers),status:X.status,statusText:X.statusText,config:b,request:W})})}catch(E){throw V&&V(),E&&E.name==="TypeError"&&/Load failed|fetch/i.test(E.message)?Object.assign(new we("Network Error",we.ERR_NETWORK,b,W,E&&E.response),{cause:E.cause||E}):we.from(E,E&&E.code,b,W,E&&E.response)}}},Nj=new Map,Rg=t=>{let e=t&&t.env||{};const{fetch:s,Request:r,Response:l}=e,o=[r,l,s];let c=o.length,u=c,h,p,m=Nj;for(;u--;)h=o[u],p=m.get(h),p===void 0&&m.set(h,p=u?new Map:jj(e)),m=p;return p};Rg();const Qd={http:zb,xhr:mj,fetch:{get:Rg}};K.forEach(Qd,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const jp=t=>`- ${t}`,wj=t=>K.isFunction(t)||t===null||t===!1;function _j(t,e){t=K.isArray(t)?t:[t];const{length:s}=t;let r,l;const o={};for(let c=0;c<s;c++){r=t[c];let u;if(l=r,!wj(r)&&(l=Qd[(u=String(r)).toLowerCase()],l===void 0))throw new we(`Unknown adapter '${u}'`);if(l&&(K.isFunction(l)||(l=l.get(e))))break;o[u||"#"+c]=l}if(!l){const c=Object.entries(o).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=s?c.length>1?`since :
`+c.map(jp).join(`
`):" "+jp(c[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return l}const Pg={getAdapter:_j,adapters:Qd};function ad(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new da(null,t)}function Np(t){return ad(t),t.headers=It.from(t.headers),t.data=rd.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Pg.getAdapter(t.adapter||ca.adapter,t)(t).then(function(r){return ad(t),r.data=rd.call(t,t.transformResponse,r),r.headers=It.from(r.headers),r},function(r){return kg(r)||(ad(t),r&&r.response&&(r.response.data=rd.call(t,t.transformResponse,r.response),r.response.headers=It.from(r.response.headers))),Promise.reject(r)})}const Dg="1.15.0",lo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{lo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const wp={};lo.transitional=function(e,s,r){function l(o,c){return"[Axios v"+Dg+"] Transitional option '"+o+"'"+c+(r?". "+r:"")}return(o,c,u)=>{if(e===!1)throw new we(l(c," has been removed"+(s?" in "+s:"")),we.ERR_DEPRECATED);return s&&!wp[c]&&(wp[c]=!0,console.warn(l(c," has been deprecated since v"+s+" and will be removed in the near future"))),e?e(o,c,u):!0}};lo.spelling=function(e){return(s,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function kj(t,e,s){if(typeof t!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let l=r.length;for(;l-- >0;){const o=r[l],c=e[o];if(c){const u=t[o],h=u===void 0||c(u,o,t);if(h!==!0)throw new we("option "+o+" must be "+h,we.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}}const Il={assertOptions:kj,validators:lo},es=Il.validators;let ei=class{constructor(e){this.defaults=e||{},this.interceptors={request:new up,response:new up}}async request(e,s){try{return await this._request(e,s)}catch(r){if(r instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const o=(()=>{if(!l.stack)return"";const c=l.stack.indexOf(`
`);return c===-1?"":l.stack.slice(c+1)})();try{if(!r.stack)r.stack=o;else if(o){const c=o.indexOf(`
`),u=c===-1?-1:o.indexOf(`
`,c+1),h=u===-1?"":o.slice(u+1);String(r.stack).endsWith(h)||(r.stack+=`
`+o)}}catch{}}throw r}}_request(e,s){typeof e=="string"?(s=s||{},s.url=e):s=e||{},s=ni(this.defaults,s);const{transitional:r,paramsSerializer:l,headers:o}=s;r!==void 0&&Il.assertOptions(r,{silentJSONParsing:es.transitional(es.boolean),forcedJSONParsing:es.transitional(es.boolean),clarifyTimeoutError:es.transitional(es.boolean),legacyInterceptorReqResOrdering:es.transitional(es.boolean)},!1),l!=null&&(K.isFunction(l)?s.paramsSerializer={serialize:l}:Il.assertOptions(l,{encode:es.function,serialize:es.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Il.assertOptions(s,{baseUrl:es.spelling("baseURL"),withXsrfToken:es.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let c=o&&K.merge(o.common,o[s.method]);o&&K.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),s.headers=It.concat(c,o);const u=[];let h=!0;this.interceptors.request.forEach(function(j){if(typeof j.runWhen=="function"&&j.runWhen(s)===!1)return;h=h&&j.synchronous;const y=s.transitional||qd;y&&y.legacyInterceptorReqResOrdering?u.unshift(j.fulfilled,j.rejected):u.push(j.fulfilled,j.rejected)});const p=[];this.interceptors.response.forEach(function(j){p.push(j.fulfilled,j.rejected)});let m,v=0,N;if(!h){const b=[Np.bind(this),void 0];for(b.unshift(...u),b.push(...p),N=b.length,m=Promise.resolve(s);v<N;)m=m.then(b[v++],b[v++]);return m}N=u.length;let w=s;for(;v<N;){const b=u[v++],j=u[v++];try{w=b(w)}catch(y){j.call(this,y);break}}try{m=Np.call(this,w)}catch(b){return Promise.reject(b)}for(v=0,N=p.length;v<N;)m=m.then(p[v++],p[v++]);return m}getUri(e){e=ni(this.defaults,e);const s=Cg(e.baseURL,e.url,e.allowAbsoluteUrls);return Ng(s,e.params,e.paramsSerializer)}};K.forEach(["delete","get","head","options"],function(e){ei.prototype[e]=function(s,r){return this.request(ni(r||{},{method:e,url:s,data:(r||{}).data}))}});K.forEach(["post","put","patch"],function(e){function s(r){return function(o,c,u){return this.request(ni(u||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}ei.prototype[e]=s(),ei.prototype[e+"Form"]=s(!0)});let Sj=class Ag{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(o){s=o});const r=this;this.promise.then(l=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](l);r._listeners=null}),this.promise.then=l=>{let o;const c=new Promise(u=>{r.subscribe(u),o=u}).then(l);return c.cancel=function(){r.unsubscribe(o)},c},e(function(o,c,u){r.reason||(r.reason=new da(o,c,u),s(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const s=this._listeners.indexOf(e);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const e=new AbortController,s=r=>{e.abort(r)};return this.subscribe(s),e.signal.unsubscribe=()=>this.unsubscribe(s),e.signal}static source(){let e;return{token:new Ag(function(l){e=l}),cancel:e}}};function Cj(t){return function(s){return t.apply(null,s)}}function Ej(t){return K.isObject(t)&&t.isAxiosError===!0}const Ed={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ed).forEach(([t,e])=>{Ed[e]=t});function Tg(t){const e=new ei(t),s=ug(ei.prototype.request,e);return K.extend(s,ei.prototype,e,{allOwnKeys:!0}),K.extend(s,e,null,{allOwnKeys:!0}),s.create=function(l){return Tg(ni(t,l))},s}const tt=Tg(ca);tt.Axios=ei;tt.CanceledError=da;tt.CancelToken=Sj;tt.isCancel=kg;tt.VERSION=Dg;tt.toFormData=ao;tt.AxiosError=we;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=Cj;tt.isAxiosError=Ej;tt.mergeConfig=ni;tt.AxiosHeaders=It;tt.formToJSON=t=>wg(K.isHTMLForm(t)?new FormData(t):t);tt.getAdapter=Pg.getAdapter;tt.HttpStatusCode=Ed;tt.default=tt;const{Axios:nS,AxiosError:iS,CanceledError:rS,isCancel:aS,CancelToken:lS,VERSION:oS,all:cS,Cancel:dS,isAxiosError:uS,spread:hS,toFormData:fS,AxiosHeaders:pS,HttpStatusCode:mS,formToJSON:gS,getAdapter:xS,mergeConfig:vS}=tt,le=tt.create({baseURL:"/api",timeout:3e4});le.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const Qn={list:(t=1,e=100,s)=>{let r=`/events?page=${t}&page_size=${e}`;return s&&(s.levels&&s.levels.length>0&&s.levels.forEach(l=>r+=`&levels=${l}`),s.event_ids&&s.event_ids.length>0&&s.event_ids.forEach(l=>r+=`&event_ids=${l}`),s.log_names&&s.log_names.length>0&&s.log_names.forEach(l=>r+=`&log_names=${encodeURIComponent(l)}`),s.sources&&s.sources.length>0&&s.sources.forEach(l=>r+=`&sources=${encodeURIComponent(l)}`),s.users&&s.users.length>0&&s.users.forEach(l=>r+=`&users=${encodeURIComponent(l)}`),s.computers&&s.computers.length>0&&s.computers.forEach(l=>r+=`&computers=${encodeURIComponent(l)}`),s.start_time&&(r+=`&start_time=${encodeURIComponent(s.start_time)}`),s.end_time&&(r+=`&end_time=${encodeURIComponent(s.end_time)}`),s.sort_by&&(r+=`&sort_by=${s.sort_by}`),s.sort_order&&(r+=`&sort_order=${s.sort_order}`)),le.get(r)},get:t=>le.get(`/events/${t}`),search:t=>le.post("/events/search",t),export:t=>le.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},ps={list:(t=1,e=100,s)=>le.get(`/alerts?page=${t}&page_size=${e}${s?`&severity=${s}`:""}`),get:t=>le.get(`/alerts/${t}`),stats:()=>le.get("/alerts/stats"),trend:(t=7)=>le.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>le.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>le.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>le.delete(`/alerts/${t}`),batchAction:(t,e,s)=>le.post("/alerts/batch",{ids:t,action:e,notes:s}),runAnalysis:()=>le.post("/alerts/run-analysis")},_p={collect:t=>le.post("/collect",t),getStatus:()=>le.get("/collect/status"),evtx2csv:(t,e,s)=>le.post("/collect/evtx2csv",{file_paths:t,output_dir:e,limit:s})},kp={importLogs:t=>le.post("/import/logs",{files:t}),importLogsWithAlert:t=>le.post("/import/logs",{files:t,alert_on_import:!0}),getStatus:()=>le.get("/import/status")},Rj={getStats:()=>le.get("/live/stats"),streamEvents:(t,e,s)=>{const r=new EventSource("/api/live/events");return r.onmessage=l=>{try{const o=JSON.parse(l.data);o.type==="event"?t(o.data):o.type==="stats"&&e(o)}catch(o){console.error("Failed to parse SSE data:",o)}},r.onerror=l=>{console.error("SSE error:",l),s==null||s(l)},r}},Kn={health:()=>le.get("/health"),getInfo:()=>le.get("/system/info"),getMetrics:()=>le.get("/system/metrics"),getProcesses:(t=100)=>le.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>le.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>le.get("/system/env"),getLoadedDLLs:(t=100)=>le.get(`/system/dlls?limit=${t}`),getDrivers:()=>le.get("/system/drivers")},Bs={list:()=>le.get("/rules"),get:t=>le.get(`/rules/${t}`),toggle:(t,e)=>le.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>le.post("/rules",t),validate:(t,e)=>le.post("/rules/validate",{rule:t,content:e}),import:t=>le.post("/rules/import",{rules:t}),export:(t="json")=>le.get(`/rules/export?format=${t}`,{responseType:"blob"}),listTemplates:()=>le.get("/rules/templates"),getTemplate:t=>le.get(`/rules/templates/${t}`),instantiateTemplate:(t,e)=>le.post(`/rules/templates/${t}/instantiate`,{name:t,params:e})},Dr={list:()=>le.get("/reports"),generate:t=>le.post("/reports",t),get:t=>le.get(`/reports/${t}`),export:t=>le.get(`/reports/export?format=${t}`,{responseType:"blob"}),download:t=>le.get(`/reports/${t}/download`,{responseType:"blob"})},Hn={calculateHash:t=>le.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>le.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>le.get(`/forensics/signature?path=${t}`),isSigned:t=>le.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>le.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>le.get("/forensics/evidence"),getEvidence:t=>le.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>le.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>le.get("/forensics/chain-of-custody"),memoryDump:t=>le.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},Rd={get:(t=200,e,s)=>{let r=`/timeline?limit=${t}`;return e&&(r+=`&start_time=${e}`),s&&(r+=`&end_time=${s}`),le.get(r)},deleteAlert:t=>le.delete(`/timeline/alerts/${t}`)},Lg={getCollectionStats:()=>le.get("/dashboard/collection-stats"),getLogNames:()=>le.get("/dashboard/log-names")},Pj={run:(t,e)=>le.post(`/analyze/${t}`,e||{}),list:()=>le.get("/analyzers"),info:t=>le.get(`/analyzers/${t}`)},ld={get:()=>le.get("/settings"),save:t=>le.post("/settings",t),reset:()=>le.post("/settings/reset")},Dj={detect:()=>le.get("/persistence/detect"),detectStream:(t,e)=>{const s=new EventSource("/api/persistence/detect/stream");return s.onmessage=r=>{try{const l=JSON.parse(r.data);t(l)}catch(l){console.error("Failed to parse SSE data:",l)}},s.onerror=r=>{console.error("SSE error:",r),e==null||e(r)},s},listCategories:()=>le.get("/persistence/categories"),listTechniques:()=>le.get("/persistence/techniques")},Aj={analyze:t=>le.post("/correlation/analyze",t||{})},Tj={analyze:t=>le.post("/multi/analyze",t||{}),lateral:()=>le.get("/multi/lateral")},Lj={execute:t=>le.post("/query/execute",t)},Ar={list:()=>le.get("/suppress"),create:t=>le.post("/suppress",t),update:(t,e)=>le.put(`/suppress/${t}`,e),delete:t=>le.delete(`/suppress/${t}`),toggle:(t,e)=>le.post(`/suppress/${t}/toggle`,{enabled:e})},Sp={analyze:t=>le.post("/ueba/analyze",t||{}),profiles:()=>le.get("/ueba/profiles")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function ua(t){return t+.5|0}const vn=(t,e,s)=>Math.max(Math.min(t,s),e);function Ir(t){return vn(ua(t*2.55),0,255)}function Nn(t){return vn(ua(t*255),0,255)}function Hs(t){return vn(ua(t/2.55)/100,0,1)}function Cp(t){return vn(ua(t*100),0,100)}const ts={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Pd=[..."0123456789ABCDEF"],Mj=t=>Pd[t&15],Oj=t=>Pd[(t&240)>>4]+Pd[t&15],wl=t=>(t&240)>>4===(t&15),zj=t=>wl(t.r)&&wl(t.g)&&wl(t.b)&&wl(t.a);function Ij(t){var e=t.length,s;return t[0]==="#"&&(e===4||e===5?s={r:255&ts[t[1]]*17,g:255&ts[t[2]]*17,b:255&ts[t[3]]*17,a:e===5?ts[t[4]]*17:255}:(e===7||e===9)&&(s={r:ts[t[1]]<<4|ts[t[2]],g:ts[t[3]]<<4|ts[t[4]],b:ts[t[5]]<<4|ts[t[6]],a:e===9?ts[t[7]]<<4|ts[t[8]]:255})),s}const Fj=(t,e)=>t<255?e(t):"";function Bj(t){var e=zj(t)?Mj:Oj;return t?"#"+e(t.r)+e(t.g)+e(t.b)+Fj(t.a,e):void 0}const $j=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Mg(t,e,s){const r=e*Math.min(s,1-s),l=(o,c=(o+t/30)%12)=>s-r*Math.max(Math.min(c-3,9-c,1),-1);return[l(0),l(8),l(4)]}function Uj(t,e,s){const r=(l,o=(l+t/60)%6)=>s-s*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Wj(t,e,s){const r=Mg(t,1,.5);let l;for(e+s>1&&(l=1/(e+s),e*=l,s*=l),l=0;l<3;l++)r[l]*=1-e-s,r[l]+=e;return r}function Hj(t,e,s,r,l){return t===l?(e-s)/r+(e<s?6:0):e===l?(s-t)/r+2:(t-e)/r+4}function Kd(t){const s=t.r/255,r=t.g/255,l=t.b/255,o=Math.max(s,r,l),c=Math.min(s,r,l),u=(o+c)/2;let h,p,m;return o!==c&&(m=o-c,p=u>.5?m/(2-o-c):m/(o+c),h=Hj(s,r,l,m,o),h=h*60+.5),[h|0,p||0,u]}function Xd(t,e,s,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,s,r)).map(Nn)}function Gd(t,e,s){return Xd(Mg,t,e,s)}function Vj(t,e,s){return Xd(Wj,t,e,s)}function qj(t,e,s){return Xd(Uj,t,e,s)}function Og(t){return(t%360+360)%360}function Yj(t){const e=$j.exec(t);let s=255,r;if(!e)return;e[5]!==r&&(s=e[6]?Ir(+e[5]):Nn(+e[5]));const l=Og(+e[2]),o=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?r=Vj(l,o,c):e[1]==="hsv"?r=qj(l,o,c):r=Gd(l,o,c),{r:r[0],g:r[1],b:r[2],a:s}}function Qj(t,e){var s=Kd(t);s[0]=Og(s[0]+e),s=Gd(s),t.r=s[0],t.g=s[1],t.b=s[2]}function Kj(t){if(!t)return;const e=Kd(t),s=e[0],r=Cp(e[1]),l=Cp(e[2]);return t.a<255?`hsla(${s}, ${r}%, ${l}%, ${Hs(t.a)})`:`hsl(${s}, ${r}%, ${l}%)`}const Ep={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Rp={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Xj(){const t={},e=Object.keys(Rp),s=Object.keys(Ep);let r,l,o,c,u;for(r=0;r<e.length;r++){for(c=u=e[r],l=0;l<s.length;l++)o=s[l],u=u.replace(o,Ep[o]);o=parseInt(Rp[c],16),t[u]=[o>>16&255,o>>8&255,o&255]}return t}let _l;function Gj(t){_l||(_l=Xj(),_l.transparent=[0,0,0,0]);const e=_l[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const Jj=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Zj(t){const e=Jj.exec(t);let s=255,r,l,o;if(e){if(e[7]!==r){const c=+e[7];s=e[8]?Ir(c):vn(c*255,0,255)}return r=+e[1],l=+e[3],o=+e[5],r=255&(e[2]?Ir(r):vn(r,0,255)),l=255&(e[4]?Ir(l):vn(l,0,255)),o=255&(e[6]?Ir(o):vn(o,0,255)),{r,g:l,b:o,a:s}}}function e1(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Hs(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const od=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,Oi=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function t1(t,e,s){const r=Oi(Hs(t.r)),l=Oi(Hs(t.g)),o=Oi(Hs(t.b));return{r:Nn(od(r+s*(Oi(Hs(e.r))-r))),g:Nn(od(l+s*(Oi(Hs(e.g))-l))),b:Nn(od(o+s*(Oi(Hs(e.b))-o))),a:t.a+s*(e.a-t.a)}}function kl(t,e,s){if(t){let r=Kd(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*s,e===0?360:1)),r=Gd(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function zg(t,e){return t&&Object.assign(e||{},t)}function Pp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Nn(t[3]))):(e=zg(t,{r:0,g:0,b:0,a:1}),e.a=Nn(e.a)),e}function s1(t){return t.charAt(0)==="r"?Zj(t):Yj(t)}class Xr{constructor(e){if(e instanceof Xr)return e;const s=typeof e;let r;s==="object"?r=Pp(e):s==="string"&&(r=Ij(e)||Gj(e)||s1(e)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=zg(this._rgb);return e&&(e.a=Hs(e.a)),e}set rgb(e){this._rgb=Pp(e)}rgbString(){return this._valid?e1(this._rgb):void 0}hexString(){return this._valid?Bj(this._rgb):void 0}hslString(){return this._valid?Kj(this._rgb):void 0}mix(e,s){if(e){const r=this.rgb,l=e.rgb;let o;const c=s===o?.5:s,u=2*c-1,h=r.a-l.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;o=1-p,r.r=255&p*r.r+o*l.r+.5,r.g=255&p*r.g+o*l.g+.5,r.b=255&p*r.b+o*l.b+.5,r.a=c*r.a+(1-c)*l.a,this.rgb=r}return this}interpolate(e,s){return e&&(this._rgb=t1(this._rgb,e._rgb,s)),this}clone(){return new Xr(this.rgb)}alpha(e){return this._rgb.a=Nn(e),this}clearer(e){const s=this._rgb;return s.a*=1-e,this}greyscale(){const e=this._rgb,s=ua(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=s,this}opaquer(e){const s=this._rgb;return s.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return kl(this._rgb,2,e),this}darken(e){return kl(this._rgb,2,-e),this}saturate(e){return kl(this._rgb,1,e),this}desaturate(e){return kl(this._rgb,1,-e),this}rotate(e){return Qj(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function $s(){}const n1=(()=>{let t=0;return()=>t++})();function Le(t){return t==null}function it(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Ee(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function _t(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function ks(t,e){return _t(t)?t:e}function ke(t,e){return typeof t>"u"?e:t}const i1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Ig=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function We(t,e,s){if(t&&typeof t.call=="function")return t.apply(s,e)}function Ie(t,e,s,r){let l,o,c;if(it(t))for(o=t.length,l=0;l<o;l++)e.call(s,t[l],l);else if(Ee(t))for(c=Object.keys(t),o=c.length,l=0;l<o;l++)e.call(s,t[c[l]],c[l])}function ql(t,e){let s,r,l,o;if(!t||!e||t.length!==e.length)return!1;for(s=0,r=t.length;s<r;++s)if(l=t[s],o=e[s],l.datasetIndex!==o.datasetIndex||l.index!==o.index)return!1;return!0}function Yl(t){if(it(t))return t.map(Yl);if(Ee(t)){const e=Object.create(null),s=Object.keys(t),r=s.length;let l=0;for(;l<r;++l)e[s[l]]=Yl(t[s[l]]);return e}return t}function Fg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function r1(t,e,s,r){if(!Fg(t))return;const l=e[t],o=s[t];Ee(l)&&Ee(o)?Gr(l,o,r):e[t]=Yl(o)}function Gr(t,e,s){const r=it(e)?e:[e],l=r.length;if(!Ee(t))return t;s=s||{};const o=s.merger||r1;let c;for(let u=0;u<l;++u){if(c=r[u],!Ee(c))continue;const h=Object.keys(c);for(let p=0,m=h.length;p<m;++p)o(h[p],t,c,s)}return t}function Wr(t,e){return Gr(t,e,{merger:a1})}function a1(t,e,s){if(!Fg(t))return;const r=e[t],l=s[t];Ee(r)&&Ee(l)?Wr(r,l):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Yl(l))}const Dp={"":t=>t,x:t=>t.x,y:t=>t.y};function l1(t){const e=t.split("."),s=[];let r="";for(const l of e)r+=l,r.endsWith("\\")?r=r.slice(0,-1)+".":(s.push(r),r="");return s}function o1(t){const e=l1(t);return s=>{for(const r of e){if(r==="")break;s=s&&s[r]}return s}}function ii(t,e){return(Dp[e]||(Dp[e]=o1(e)))(t)}function Jd(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Jr=t=>typeof t<"u",wn=t=>typeof t=="function",Ap=(t,e)=>{if(t.size!==e.size)return!1;for(const s of t)if(!e.has(s))return!1;return!0};function c1(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Fe=Math.PI,Ke=2*Fe,d1=Ke+Fe,Ql=Number.POSITIVE_INFINITY,u1=Fe/180,ct=Fe/2,Vn=Fe/4,Tp=Fe*2/3,Bg=Math.log10,Rs=Math.sign;function Hr(t,e,s){return Math.abs(t-e)<s}function Lp(t){const e=Math.round(t);t=Hr(t,e,t/1e3)?e:t;const s=Math.pow(10,Math.floor(Bg(t))),r=t/s;return(r<=1?1:r<=2?2:r<=5?5:10)*s}function h1(t){const e=[],s=Math.sqrt(t);let r;for(r=1;r<s;r++)t%r===0&&(e.push(r),e.push(t/r));return s===(s|0)&&e.push(s),e.sort((l,o)=>l-o).pop(),e}function f1(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Zr(t){return!f1(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function p1(t,e){const s=Math.round(t);return s-e<=t&&s+e>=t}function m1(t,e,s){let r,l,o;for(r=0,l=t.length;r<l;r++)o=t[r][s],isNaN(o)||(e.min=Math.min(e.min,o),e.max=Math.max(e.max,o))}function Vs(t){return t*(Fe/180)}function g1(t){return t*(180/Fe)}function Mp(t){if(!_t(t))return;let e=1,s=0;for(;Math.round(t*e)/e!==t;)e*=10,s++;return s}function $g(t,e){const s=e.x-t.x,r=e.y-t.y,l=Math.sqrt(s*s+r*r);let o=Math.atan2(r,s);return o<-.5*Fe&&(o+=Ke),{angle:o,distance:l}}function Dd(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function x1(t,e){return(t-e+d1)%Ke-Fe}function Ht(t){return(t%Ke+Ke)%Ke}function ea(t,e,s,r){const l=Ht(t),o=Ht(e),c=Ht(s),u=Ht(o-l),h=Ht(c-l),p=Ht(l-o),m=Ht(l-c);return l===o||l===c||r&&o===c||u>h&&p<m}function Nt(t,e,s){return Math.max(e,Math.min(s,t))}function v1(t){return Nt(t,-32768,32767)}function qs(t,e,s,r=1e-6){return t>=Math.min(e,s)-r&&t<=Math.max(e,s)+r}function Zd(t,e,s){s=s||(c=>t[c]<e);let r=t.length-1,l=0,o;for(;r-l>1;)o=l+r>>1,s(o)?l=o:r=o;return{lo:l,hi:r}}const Zn=(t,e,s,r)=>Zd(t,s,r?l=>{const o=t[l][e];return o<s||o===s&&t[l+1][e]===s}:l=>t[l][e]<s),y1=(t,e,s)=>Zd(t,s,r=>t[r][e]>=s);function b1(t,e,s){let r=0,l=t.length;for(;r<l&&t[r]<e;)r++;for(;l>r&&t[l-1]>s;)l--;return r>0||l<t.length?t.slice(r,l):t}const Ug=["push","pop","shift","splice","unshift"];function j1(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Ug.forEach(s=>{const r="_onData"+Jd(s),l=t[s];Object.defineProperty(t,s,{configurable:!0,enumerable:!1,value(...o){const c=l.apply(this,o);return t._chartjs.listeners.forEach(u=>{typeof u[r]=="function"&&u[r](...o)}),c}})})}function Op(t,e){const s=t._chartjs;if(!s)return;const r=s.listeners,l=r.indexOf(e);l!==-1&&r.splice(l,1),!(r.length>0)&&(Ug.forEach(o=>{delete t[o]}),delete t._chartjs)}function Wg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Hg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function Vg(t,e){let s=[],r=!1;return function(...l){s=l,r||(r=!0,Hg.call(window,()=>{r=!1,t.apply(e,s)}))}}function N1(t,e){let s;return function(...r){return e?(clearTimeout(s),s=setTimeout(t,e,r)):t.apply(this,r),e}}const eu=t=>t==="start"?"left":t==="end"?"right":"center",bt=(t,e,s)=>t==="start"?e:t==="end"?s:(e+s)/2,w1=(t,e,s,r)=>t===(r?"left":"right")?s:t==="center"?(e+s)/2:e;function _1(t,e,s){const r=e.length;let l=0,o=r;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,m=c.axis,{min:v,max:N,minDefined:w,maxDefined:b}=c.getUserBounds();if(w){if(l=Math.min(Zn(h,m,v).lo,s?r:Zn(e,m,c.getPixelForValue(v)).lo),p){const j=h.slice(0,l+1).reverse().findIndex(y=>!Le(y[u.axis]));l-=Math.max(0,j)}l=Nt(l,0,r-1)}if(b){let j=Math.max(Zn(h,c.axis,N,!0).hi+1,s?0:Zn(e,m,c.getPixelForValue(N),!0).hi+1);if(p){const y=h.slice(j-1).findIndex(k=>!Le(k[u.axis]));j+=Math.max(0,y)}o=Nt(j,l,r)-l}else o=r-l}return{start:l,count:o}}function k1(t){const{xScale:e,yScale:s,_scaleRanges:r}=t,l={xmin:e.min,xmax:e.max,ymin:s.min,ymax:s.max};if(!r)return t._scaleRanges=l,!0;const o=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==s.min||r.ymax!==s.max;return Object.assign(r,l),o}const Sl=t=>t===0||t===1,zp=(t,e,s)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ke/s)),Ip=(t,e,s)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ke/s)+1,Vr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*ct)+1,easeOutSine:t=>Math.sin(t*ct),easeInOutSine:t=>-.5*(Math.cos(Fe*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>Sl(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Sl(t)?t:zp(t,.075,.3),easeOutElastic:t=>Sl(t)?t:Ip(t,.075,.3),easeInOutElastic(t){return Sl(t)?t:t<.5?.5*zp(t*2,.1125,.45):.5+.5*Ip(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-Vr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?Vr.easeInBounce(t*2)*.5:Vr.easeOutBounce(t*2-1)*.5+.5};function tu(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Fp(t){return tu(t)?t:new Xr(t)}function cd(t){return tu(t)?t:new Xr(t).saturate(.5).darken(.1).hexString()}const S1=["x","y","borderWidth","radius","tension"],C1=["color","borderColor","backgroundColor"];function E1(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:C1},numbers:{type:"number",properties:S1}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function R1(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Bp=new Map;function P1(t,e){e=e||{};const s=t+JSON.stringify(e);let r=Bp.get(s);return r||(r=new Intl.NumberFormat(t,e),Bp.set(s,r)),r}function su(t,e,s){return P1(e,s).format(t)}const D1={values(t){return it(t)?t:""+t},numeric(t,e,s){if(t===0)return"0";const r=this.chart.options.locale;let l,o=t;if(s.length>1){const p=Math.max(Math.abs(s[0].value),Math.abs(s[s.length-1].value));(p<1e-4||p>1e15)&&(l="scientific"),o=A1(t,s)}const c=Bg(Math.abs(o)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:l,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),su(t,r,h)}};function A1(t,e){let s=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(s)>=1&&t!==Math.floor(t)&&(s=t-Math.floor(t)),s}var qg={formatters:D1};function T1(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,s)=>s.lineWidth,tickColor:(e,s)=>s.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:qg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const ri=Object.create(null),Ad=Object.create(null);function qr(t,e){if(!e)return t;const s=e.split(".");for(let r=0,l=s.length;r<l;++r){const o=s[r];t=t[o]||(t[o]=Object.create(null))}return t}function dd(t,e,s){return typeof e=="string"?Gr(qr(t,e),s):Gr(qr(t,""),e)}class L1{constructor(e,s){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=r=>r.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(r,l)=>cd(l.backgroundColor),this.hoverBorderColor=(r,l)=>cd(l.borderColor),this.hoverColor=(r,l)=>cd(l.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(s)}set(e,s){return dd(this,e,s)}get(e){return qr(this,e)}describe(e,s){return dd(Ad,e,s)}override(e,s){return dd(ri,e,s)}route(e,s,r,l){const o=qr(this,e),c=qr(this,r),u="_"+s;Object.defineProperties(o,{[u]:{value:o[s],writable:!0},[s]:{enumerable:!0,get(){const h=this[u],p=c[l];return Ee(h)?Object.assign({},p,h):ke(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(s=>s(this))}}var et=new L1({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[E1,R1,T1]);function M1(t){return!t||Le(t.size)||Le(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function $p(t,e,s,r,l){let o=e[l];return o||(o=e[l]=t.measureText(l).width,s.push(l)),o>r&&(r=o),r}function qn(t,e,s){const r=t.currentDevicePixelRatio,l=s!==0?Math.max(s/2,.5):0;return Math.round((e-l)*r)/r+l}function Up(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function Td(t,e,s,r){Yg(t,e,s,r,null)}function Yg(t,e,s,r,l){let o,c,u,h,p,m,v,N;const w=e.pointStyle,b=e.rotation,j=e.radius;let y=(b||0)*u1;if(w&&typeof w=="object"&&(o=w.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){t.save(),t.translate(s,r),t.rotate(y),t.drawImage(w,-w.width/2,-w.height/2,w.width,w.height),t.restore();return}if(!(isNaN(j)||j<=0)){switch(t.beginPath(),w){default:l?t.ellipse(s,r,l/2,j,0,0,Ke):t.arc(s,r,j,0,Ke),t.closePath();break;case"triangle":m=l?l/2:j,t.moveTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Tp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),y+=Tp,t.lineTo(s+Math.sin(y)*m,r-Math.cos(y)*j),t.closePath();break;case"rectRounded":p=j*.516,h=j-p,c=Math.cos(y+Vn)*h,v=Math.cos(y+Vn)*(l?l/2-p:h),u=Math.sin(y+Vn)*h,N=Math.sin(y+Vn)*(l?l/2-p:h),t.arc(s-v,r-u,p,y-Fe,y-ct),t.arc(s+N,r-c,p,y-ct,y),t.arc(s+v,r+u,p,y,y+ct),t.arc(s-N,r+c,p,y+ct,y+Fe),t.closePath();break;case"rect":if(!b){h=Math.SQRT1_2*j,m=l?l/2:h,t.rect(s-m,r-h,2*m,2*h);break}y+=Vn;case"rectRot":v=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-v,r-u),t.lineTo(s+N,r-c),t.lineTo(s+v,r+u),t.lineTo(s-N,r+c),t.closePath();break;case"crossRot":y+=Vn;case"cross":v=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-v,r-u),t.lineTo(s+v,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"star":v=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-v,r-u),t.lineTo(s+v,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c),y+=Vn,v=Math.cos(y)*(l?l/2:j),c=Math.cos(y)*j,u=Math.sin(y)*j,N=Math.sin(y)*(l?l/2:j),t.moveTo(s-v,r-u),t.lineTo(s+v,r+u),t.moveTo(s+N,r-c),t.lineTo(s-N,r+c);break;case"line":c=l?l/2:Math.cos(y)*j,u=Math.sin(y)*j,t.moveTo(s-c,r-u),t.lineTo(s+c,r+u);break;case"dash":t.moveTo(s,r),t.lineTo(s+Math.cos(y)*(l?l/2:j),r+Math.sin(y)*j);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function ta(t,e,s){return s=s||.5,!e||t&&t.x>e.left-s&&t.x<e.right+s&&t.y>e.top-s&&t.y<e.bottom+s}function oo(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function co(t){t.restore()}function O1(t,e,s,r,l){if(!e)return t.lineTo(s.x,s.y);if(l==="middle"){const o=(e.x+s.x)/2;t.lineTo(o,e.y),t.lineTo(o,s.y)}else l==="after"!=!!r?t.lineTo(e.x,s.y):t.lineTo(s.x,e.y);t.lineTo(s.x,s.y)}function z1(t,e,s,r){if(!e)return t.lineTo(s.x,s.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?s.cp2x:s.cp1x,r?s.cp2y:s.cp1y,s.x,s.y)}function I1(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Le(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function F1(t,e,s,r,l){if(l.strikethrough||l.underline){const o=t.measureText(r),c=e-o.actualBoundingBoxLeft,u=e+o.actualBoundingBoxRight,h=s-o.actualBoundingBoxAscent,p=s+o.actualBoundingBoxDescent,m=l.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=l.decorationWidth||2,t.moveTo(c,m),t.lineTo(u,m),t.stroke()}}function B1(t,e){const s=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=s}function sa(t,e,s,r,l,o={}){const c=it(e)?e:[e],u=o.strokeWidth>0&&o.strokeColor!=="";let h,p;for(t.save(),t.font=l.string,I1(t,o),h=0;h<c.length;++h)p=c[h],o.backdrop&&B1(t,o.backdrop),u&&(o.strokeColor&&(t.strokeStyle=o.strokeColor),Le(o.strokeWidth)||(t.lineWidth=o.strokeWidth),t.strokeText(p,s,r,o.maxWidth)),t.fillText(p,s,r,o.maxWidth),F1(t,s,r,p,o),r+=Number(l.lineHeight);t.restore()}function Kl(t,e){const{x:s,y:r,w:l,h:o,radius:c}=e;t.arc(s+c.topLeft,r+c.topLeft,c.topLeft,1.5*Fe,Fe,!0),t.lineTo(s,r+o-c.bottomLeft),t.arc(s+c.bottomLeft,r+o-c.bottomLeft,c.bottomLeft,Fe,ct,!0),t.lineTo(s+l-c.bottomRight,r+o),t.arc(s+l-c.bottomRight,r+o-c.bottomRight,c.bottomRight,ct,0,!0),t.lineTo(s+l,r+c.topRight),t.arc(s+l-c.topRight,r+c.topRight,c.topRight,0,-ct,!0),t.lineTo(s+c.topLeft,r)}const $1=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,U1=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function W1(t,e){const s=(""+t).match($1);if(!s||s[1]==="normal")return e*1.2;switch(t=+s[2],s[3]){case"px":return t;case"%":t/=100;break}return e*t}const H1=t=>+t||0;function nu(t,e){const s={},r=Ee(e),l=r?Object.keys(e):e,o=Ee(t)?r?c=>ke(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of l)s[c]=H1(o(c));return s}function Qg(t){return nu(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Ii(t){return nu(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ns(t){const e=Qg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function wt(t,e){t=t||{},e=e||et.font;let s=ke(t.size,e.size);typeof s=="string"&&(s=parseInt(s,10));let r=ke(t.style,e.style);r&&!(""+r).match(U1)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);const l={family:ke(t.family,e.family),lineHeight:W1(ke(t.lineHeight,e.lineHeight),s),size:s,style:r,weight:ke(t.weight,e.weight),string:""};return l.string=M1(l),l}function Cl(t,e,s,r){let l,o,c;for(l=0,o=t.length;l<o;++l)if(c=t[l],c!==void 0&&c!==void 0)return c}function V1(t,e,s){const{min:r,max:l}=t,o=Ig(e,(l-r)/2),c=(u,h)=>s&&u===0?0:u+h;return{min:c(r,-Math.abs(o)),max:c(l,o)}}function li(t,e){return Object.assign(Object.create(t),e)}function iu(t,e=[""],s,r,l=()=>t[0]){const o=s||t;typeof r>"u"&&(r=Jg("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:o,_fallback:r,_getTarget:l,override:u=>iu([u,...t],e,o,r)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return Xg(u,h,()=>Z1(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return Hp(u).includes(h)},ownKeys(u){return Hp(u)},set(u,h,p){const m=u._storage||(u._storage=l());return u[h]=m[h]=p,delete u._keys,!0}})}function $i(t,e,s,r){const l={_cacheable:!1,_proxy:t,_context:e,_subProxy:s,_stack:new Set,_descriptors:Kg(t,r),setContext:o=>$i(t,o,s,r),override:o=>$i(t.override(o),e,s,r)};return new Proxy(l,{deleteProperty(o,c){return delete o[c],delete t[c],!0},get(o,c,u){return Xg(o,c,()=>Y1(o,c,u))},getOwnPropertyDescriptor(o,c){return o._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(o,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(o,c,u){return t[c]=u,delete o[c],!0}})}function Kg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:s=e.scriptable,_indexable:r=e.indexable,_allKeys:l=e.allKeys}=t;return{allKeys:l,scriptable:s,indexable:r,isScriptable:wn(s)?s:()=>s,isIndexable:wn(r)?r:()=>r}}const q1=(t,e)=>t?t+Jd(e):e,ru=(t,e)=>Ee(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Xg(t,e,s){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const r=s();return t[e]=r,r}function Y1(t,e,s){const{_proxy:r,_context:l,_subProxy:o,_descriptors:c}=t;let u=r[e];return wn(u)&&c.isScriptable(e)&&(u=Q1(e,u,t,s)),it(u)&&u.length&&(u=K1(e,u,t,c.isIndexable)),ru(e,u)&&(u=$i(u,l,o&&o[e],c)),u}function Q1(t,e,s,r){const{_proxy:l,_context:o,_subProxy:c,_stack:u}=s;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(o,c||r);return u.delete(t),ru(t,h)&&(h=au(l._scopes,l,t,h)),h}function K1(t,e,s,r){const{_proxy:l,_context:o,_subProxy:c,_descriptors:u}=s;if(typeof o.index<"u"&&r(t))return e[o.index%e.length];if(Ee(e[0])){const h=e,p=l._scopes.filter(m=>m!==h);e=[];for(const m of h){const v=au(p,l,t,m);e.push($i(v,o,c&&c[t],u))}}return e}function Gg(t,e,s){return wn(t)?t(e,s):t}const X1=(t,e)=>t===!0?e:typeof t=="string"?ii(e,t):void 0;function G1(t,e,s,r,l){for(const o of e){const c=X1(s,o);if(c){t.add(c);const u=Gg(c._fallback,s,l);if(typeof u<"u"&&u!==s&&u!==r)return u}else if(c===!1&&typeof r<"u"&&s!==r)return null}return!1}function au(t,e,s,r){const l=e._rootScopes,o=Gg(e._fallback,s,r),c=[...t,...l],u=new Set;u.add(r);let h=Wp(u,c,s,o||s,r);return h===null||typeof o<"u"&&o!==s&&(h=Wp(u,c,o,h,r),h===null)?!1:iu(Array.from(u),[""],l,o,()=>J1(e,s,r))}function Wp(t,e,s,r,l){for(;s;)s=G1(t,e,s,r,l);return s}function J1(t,e,s){const r=t._getTarget();e in r||(r[e]={});const l=r[e];return it(l)&&Ee(s)?s:l||{}}function Z1(t,e,s,r){let l;for(const o of e)if(l=Jg(q1(o,t),s),typeof l<"u")return ru(t,l)?au(s,r,t,l):l}function Jg(t,e){for(const s of e){if(!s)continue;const r=s[t];if(typeof r<"u")return r}}function Hp(t){let e=t._keys;return e||(e=t._keys=eN(t._scopes)),e}function eN(t){const e=new Set;for(const s of t)for(const r of Object.keys(s).filter(l=>!l.startsWith("_")))e.add(r);return Array.from(e)}const tN=Number.EPSILON||1e-14,Ui=(t,e)=>e<t.length&&!t[e].skip&&t[e],Zg=t=>t==="x"?"y":"x";function sN(t,e,s,r){const l=t.skip?e:t,o=e,c=s.skip?e:s,u=Dd(o,l),h=Dd(c,o);let p=u/(u+h),m=h/(u+h);p=isNaN(p)?0:p,m=isNaN(m)?0:m;const v=r*p,N=r*m;return{previous:{x:o.x-v*(c.x-l.x),y:o.y-v*(c.y-l.y)},next:{x:o.x+N*(c.x-l.x),y:o.y+N*(c.y-l.y)}}}function nN(t,e,s){const r=t.length;let l,o,c,u,h,p=Ui(t,0);for(let m=0;m<r-1;++m)if(h=p,p=Ui(t,m+1),!(!h||!p)){if(Hr(e[m],0,tN)){s[m]=s[m+1]=0;continue}l=s[m]/e[m],o=s[m+1]/e[m],u=Math.pow(l,2)+Math.pow(o,2),!(u<=9)&&(c=3/Math.sqrt(u),s[m]=l*c*e[m],s[m+1]=o*c*e[m])}}function iN(t,e,s="x"){const r=Zg(s),l=t.length;let o,c,u,h=Ui(t,0);for(let p=0;p<l;++p){if(c=u,u=h,h=Ui(t,p+1),!u)continue;const m=u[s],v=u[r];c&&(o=(m-c[s])/3,u[`cp1${s}`]=m-o,u[`cp1${r}`]=v-o*e[p]),h&&(o=(h[s]-m)/3,u[`cp2${s}`]=m+o,u[`cp2${r}`]=v+o*e[p])}}function rN(t,e="x"){const s=Zg(e),r=t.length,l=Array(r).fill(0),o=Array(r);let c,u,h,p=Ui(t,0);for(c=0;c<r;++c)if(u=h,h=p,p=Ui(t,c+1),!!h){if(p){const m=p[e]-h[e];l[c]=m!==0?(p[s]-h[s])/m:0}o[c]=u?p?Rs(l[c-1])!==Rs(l[c])?0:(l[c-1]+l[c])/2:l[c-1]:l[c]}nN(t,l,o),iN(t,o,e)}function El(t,e,s){return Math.max(Math.min(t,s),e)}function aN(t,e){let s,r,l,o,c,u=ta(t[0],e);for(s=0,r=t.length;s<r;++s)c=o,o=u,u=s<r-1&&ta(t[s+1],e),o&&(l=t[s],c&&(l.cp1x=El(l.cp1x,e.left,e.right),l.cp1y=El(l.cp1y,e.top,e.bottom)),u&&(l.cp2x=El(l.cp2x,e.left,e.right),l.cp2y=El(l.cp2y,e.top,e.bottom)))}function lN(t,e,s,r,l){let o,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")rN(t,l);else{let p=r?t[t.length-1]:t[0];for(o=0,c=t.length;o<c;++o)u=t[o],h=sN(p,u,t[Math.min(o+1,c-(r?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&aN(t,s)}function lu(){return typeof window<"u"&&typeof document<"u"}function ou(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Xl(t,e,s){let r;return typeof t=="string"?(r=parseInt(t,10),t.indexOf("%")!==-1&&(r=r/100*e.parentNode[s])):r=t,r}const uo=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function oN(t,e){return uo(t).getPropertyValue(e)}const cN=["top","right","bottom","left"];function ti(t,e,s){const r={};s=s?"-"+s:"";for(let l=0;l<4;l++){const o=cN[l];r[o]=parseFloat(t[e+"-"+o+s])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const dN=(t,e,s)=>(t>0||e>0)&&(!s||!s.shadowRoot);function uN(t,e){const s=t.touches,r=s&&s.length?s[0]:t,{offsetX:l,offsetY:o}=r;let c=!1,u,h;if(dN(l,o,t.target))u=l,h=o;else{const p=e.getBoundingClientRect();u=r.clientX-p.left,h=r.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Xn(t,e){if("native"in t)return t;const{canvas:s,currentDevicePixelRatio:r}=e,l=uo(s),o=l.boxSizing==="border-box",c=ti(l,"padding"),u=ti(l,"border","width"),{x:h,y:p,box:m}=uN(t,s),v=c.left+(m&&u.left),N=c.top+(m&&u.top);let{width:w,height:b}=e;return o&&(w-=c.width+u.width,b-=c.height+u.height),{x:Math.round((h-v)/w*s.width/r),y:Math.round((p-N)/b*s.height/r)}}function hN(t,e,s){let r,l;if(e===void 0||s===void 0){const o=t&&ou(t);if(!o)e=t.clientWidth,s=t.clientHeight;else{const c=o.getBoundingClientRect(),u=uo(o),h=ti(u,"border","width"),p=ti(u,"padding");e=c.width-p.width-h.width,s=c.height-p.height-h.height,r=Xl(u.maxWidth,o,"clientWidth"),l=Xl(u.maxHeight,o,"clientHeight")}}return{width:e,height:s,maxWidth:r||Ql,maxHeight:l||Ql}}const yn=t=>Math.round(t*10)/10;function fN(t,e,s,r){const l=uo(t),o=ti(l,"margin"),c=Xl(l.maxWidth,t,"clientWidth")||Ql,u=Xl(l.maxHeight,t,"clientHeight")||Ql,h=hN(t,e,s);let{width:p,height:m}=h;if(l.boxSizing==="content-box"){const N=ti(l,"border","width"),w=ti(l,"padding");p-=w.width+N.width,m-=w.height+N.height}return p=Math.max(0,p-o.width),m=Math.max(0,r?p/r:m-o.height),p=yn(Math.min(p,c,h.maxWidth)),m=yn(Math.min(m,u,h.maxHeight)),p&&!m&&(m=yn(p/2)),(e!==void 0||s!==void 0)&&r&&h.height&&m>h.height&&(m=h.height,p=yn(Math.floor(m*r))),{width:p,height:m}}function Vp(t,e,s){const r=e||1,l=yn(t.height*r),o=yn(t.width*r);t.height=yn(t.height),t.width=yn(t.width);const c=t.canvas;return c.style&&(s||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==r||c.height!==l||c.width!==o?(t.currentDevicePixelRatio=r,c.height=l,c.width=o,t.ctx.setTransform(r,0,0,r,0,0),!0):!1}const pN=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};lu()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function qp(t,e){const s=oN(t,e),r=s&&s.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function Gn(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:t.y+s*(e.y-t.y)}}function mN(t,e,s,r){return{x:t.x+s*(e.x-t.x),y:r==="middle"?s<.5?t.y:e.y:r==="after"?s<1?t.y:e.y:s>0?e.y:t.y}}function gN(t,e,s,r){const l={x:t.cp2x,y:t.cp2y},o={x:e.cp1x,y:e.cp1y},c=Gn(t,l,s),u=Gn(l,o,s),h=Gn(o,e,s),p=Gn(c,u,s),m=Gn(u,h,s);return Gn(p,m,s)}const xN=function(t,e){return{x(s){return t+t+e-s},setWidth(s){e=s},textAlign(s){return s==="center"?s:s==="right"?"left":"right"},xPlus(s,r){return s-r},leftForLtr(s,r){return s-r}}},vN=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function Fi(t,e,s){return t?xN(e,s):vN()}function ex(t,e){let s,r;(e==="ltr"||e==="rtl")&&(s=t.canvas.style,r=[s.getPropertyValue("direction"),s.getPropertyPriority("direction")],s.setProperty("direction",e,"important"),t.prevTextDirection=r)}function tx(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function sx(t){return t==="angle"?{between:ea,compare:x1,normalize:Ht}:{between:qs,compare:(e,s)=>e-s,normalize:e=>e}}function Yp({start:t,end:e,count:s,loop:r,style:l}){return{start:t%s,end:e%s,loop:r&&(e-t+1)%s===0,style:l}}function yN(t,e,s){const{property:r,start:l,end:o}=s,{between:c,normalize:u}=sx(r),h=e.length;let{start:p,end:m,loop:v}=t,N,w;if(v){for(p+=h,m+=h,N=0,w=h;N<w&&c(u(e[p%h][r]),l,o);++N)p--,m--;p%=h,m%=h}return m<p&&(m+=h),{start:p,end:m,loop:v,style:t.style}}function nx(t,e,s){if(!s)return[t];const{property:r,start:l,end:o}=s,c=e.length,{compare:u,between:h,normalize:p}=sx(r),{start:m,end:v,loop:N,style:w}=yN(t,e,s),b=[];let j=!1,y=null,k,S,P;const I=()=>h(l,P,k)&&u(l,P)!==0,R=()=>u(o,k)===0||h(o,P,k),$=()=>j||I(),L=()=>!j||R();for(let A=m,T=m;A<=v;++A)S=e[A%c],!S.skip&&(k=p(S[r]),k!==P&&(j=h(k,l,o),y===null&&$()&&(y=u(k,l)===0?A:T),y!==null&&L()&&(b.push(Yp({start:y,end:A,loop:N,count:c,style:w})),y=null),T=A,P=k));return y!==null&&b.push(Yp({start:y,end:v,loop:N,count:c,style:w})),b}function ix(t,e){const s=[],r=t.segments;for(let l=0;l<r.length;l++){const o=nx(r[l],t.points,e);o.length&&s.push(...o)}return s}function bN(t,e,s,r){let l=0,o=e-1;if(s&&!r)for(;l<e&&!t[l].skip;)l++;for(;l<e&&t[l].skip;)l++;for(l%=e,s&&(o+=l);o>l&&t[o%e].skip;)o--;return o%=e,{start:l,end:o}}function jN(t,e,s,r){const l=t.length,o=[];let c=e,u=t[e],h;for(h=e+1;h<=s;++h){const p=t[h%l];p.skip||p.stop?u.skip||(r=!1,o.push({start:e%l,end:(h-1)%l,loop:r}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&o.push({start:e%l,end:c%l,loop:r}),o}function NN(t,e){const s=t.points,r=t.options.spanGaps,l=s.length;if(!l)return[];const o=!!t._loop,{start:c,end:u}=bN(s,l,o,r);if(r===!0)return Qp(t,[{start:c,end:u,loop:o}],s,e);const h=u<c?u+l:u,p=!!t._fullLoop&&c===0&&u===l-1;return Qp(t,jN(s,c,h,p),s,e)}function Qp(t,e,s,r){return!r||!r.setContext||!s?e:wN(t,e,s,r)}function wN(t,e,s,r){const l=t._chart.getContext(),o=Kp(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=s.length,p=[];let m=o,v=e[0].start,N=v;function w(b,j,y,k){const S=u?-1:1;if(b!==j){for(b+=h;s[b%h].skip;)b-=S;for(;s[j%h].skip;)j+=S;b%h!==j%h&&(p.push({start:b%h,end:j%h,loop:y,style:k}),m=k,v=j%h)}}for(const b of e){v=u?v:b.start;let j=s[v%h],y;for(N=v+1;N<=b.end;N++){const k=s[N%h];y=Kp(r.setContext(li(l,{type:"segment",p0:j,p1:k,p0DataIndex:(N-1)%h,p1DataIndex:N%h,datasetIndex:c}))),_N(y,m)&&w(v,N-1,b.loop,m),j=k,m=y}v<N-1&&w(v,N-1,b.loop,m)}return p}function Kp(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function _N(t,e){if(!e)return!1;const s=[],r=function(l,o){return tu(o)?(s.includes(o)||s.push(o),s.indexOf(o)):o};return JSON.stringify(t,r)!==JSON.stringify(e,r)}function Rl(t,e,s){return t.options.clip?t[s]:e[s]}function kN(t,e){const{xScale:s,yScale:r}=t;return s&&r?{left:Rl(s,e,"left"),right:Rl(s,e,"right"),top:Rl(r,e,"top"),bottom:Rl(r,e,"bottom")}:e}function rx(t,e){const s=e._clip;if(s.disabled)return!1;const r=kN(e,t.chartArea);return{left:s.left===!1?0:r.left-(s.left===!0?0:s.left),right:s.right===!1?t.width:r.right+(s.right===!0?0:s.right),top:s.top===!1?0:r.top-(s.top===!0?0:s.top),bottom:s.bottom===!1?t.height:r.bottom+(s.bottom===!0?0:s.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class SN{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,s,r,l){const o=s.listeners[l],c=s.duration;o.forEach(u=>u({chart:e,initial:s.initial,numSteps:c,currentStep:Math.min(r-s.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Hg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let s=0;this._charts.forEach((r,l)=>{if(!r.running||!r.items.length)return;const o=r.items;let c=o.length-1,u=!1,h;for(;c>=0;--c)h=o[c],h._active?(h._total>r.duration&&(r.duration=h._total),h.tick(e),u=!0):(o[c]=o[o.length-1],o.pop());u&&(l.draw(),this._notify(l,r,e,"progress")),o.length||(r.running=!1,this._notify(l,r,e,"complete"),r.initial=!1),s+=o.length}),this._lastDate=e,s===0&&(this._running=!1)}_getAnims(e){const s=this._charts;let r=s.get(e);return r||(r={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},s.set(e,r)),r}listen(e,s,r){this._getAnims(e).listeners[s].push(r)}add(e,s){!s||!s.length||this._getAnims(e).items.push(...s)}has(e){return this._getAnims(e).items.length>0}start(e){const s=this._charts.get(e);s&&(s.running=!0,s.start=Date.now(),s.duration=s.items.reduce((r,l)=>Math.max(r,l._duration),0),this._refresh())}running(e){if(!this._running)return!1;const s=this._charts.get(e);return!(!s||!s.running||!s.items.length)}stop(e){const s=this._charts.get(e);if(!s||!s.items.length)return;const r=s.items;let l=r.length-1;for(;l>=0;--l)r[l].cancel();s.items=[],this._notify(e,s,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var Us=new SN;const Xp="transparent",CN={boolean(t,e,s){return s>.5?e:t},color(t,e,s){const r=Fp(t||Xp),l=r.valid&&Fp(e||Xp);return l&&l.valid?l.mix(r,s).hexString():e},number(t,e,s){return t+(e-t)*s}};class EN{constructor(e,s,r,l){const o=s[r];l=Cl([e.to,l,o,e.from]);const c=Cl([e.from,o,l]);this._active=!0,this._fn=e.fn||CN[e.type||typeof c],this._easing=Vr[e.easing]||Vr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=s,this._prop=r,this._from=c,this._to=l,this._promises=void 0}active(){return this._active}update(e,s,r){if(this._active){this._notify(!1);const l=this._target[this._prop],o=r-this._start,c=this._duration-o;this._start=r,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=o,this._loop=!!e.loop,this._to=Cl([e.to,s,l,e.from]),this._from=Cl([e.from,l,s])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const s=e-this._start,r=this._duration,l=this._prop,o=this._from,c=this._loop,u=this._to;let h;if(this._active=o!==u&&(c||s<r),!this._active){this._target[l]=u,this._notify(!0);return}if(s<0){this._target[l]=o;return}h=s/r%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[l]=this._fn(o,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((s,r)=>{e.push({res:s,rej:r})})}_notify(e){const s=e?"res":"rej",r=this._promises||[];for(let l=0;l<r.length;l++)r[l][s]()}}class ax{constructor(e,s){this._chart=e,this._properties=new Map,this.configure(s)}configure(e){if(!Ee(e))return;const s=Object.keys(et.animation),r=this._properties;Object.getOwnPropertyNames(e).forEach(l=>{const o=e[l];if(!Ee(o))return;const c={};for(const u of s)c[u]=o[u];(it(o.properties)&&o.properties||[l]).forEach(u=>{(u===l||!r.has(u))&&r.set(u,c)})})}_animateOptions(e,s){const r=s.options,l=PN(e,r);if(!l)return[];const o=this._createAnimations(l,r);return r.$shared&&RN(e.options.$animations,r).then(()=>{e.options=r},()=>{}),o}_createAnimations(e,s){const r=this._properties,l=[],o=e.$animations||(e.$animations={}),c=Object.keys(s),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){l.push(...this._animateOptions(e,s));continue}const m=s[p];let v=o[p];const N=r.get(p);if(v)if(N&&v.active()){v.update(N,m,u);continue}else v.cancel();if(!N||!N.duration){e[p]=m;continue}o[p]=v=new EN(N,e,p,m),l.push(v)}return l}update(e,s){if(this._properties.size===0){Object.assign(e,s);return}const r=this._createAnimations(e,s);if(r.length)return Us.add(this._chart,r),!0}}function RN(t,e){const s=[],r=Object.keys(e);for(let l=0;l<r.length;l++){const o=t[r[l]];o&&o.active()&&s.push(o.wait())}return Promise.all(s)}function PN(t,e){if(!e)return;let s=t.options;if(!s){t.options=e;return}return s.$shared&&(t.options=s=Object.assign({},s,{$shared:!1,$animations:{}})),s}function Gp(t,e){const s=t&&t.options||{},r=s.reverse,l=s.min===void 0?e:0,o=s.max===void 0?e:0;return{start:r?o:l,end:r?l:o}}function DN(t,e,s){if(s===!1)return!1;const r=Gp(t,s),l=Gp(e,s);return{top:l.end,right:r.end,bottom:l.start,left:r.start}}function AN(t){let e,s,r,l;return Ee(t)?(e=t.top,s=t.right,r=t.bottom,l=t.left):e=s=r=l=t,{top:e,right:s,bottom:r,left:l,disabled:t===!1}}function lx(t,e){const s=[],r=t._getSortedDatasetMetas(e);let l,o;for(l=0,o=r.length;l<o;++l)s.push(r[l].index);return s}function Jp(t,e,s,r={}){const l=t.keys,o=r.mode==="single";let c,u,h,p;if(e===null)return;let m=!1;for(c=0,u=l.length;c<u;++c){if(h=+l[c],h===s){if(m=!0,r.all)continue;break}p=t.values[h],_t(p)&&(o||e===0||Rs(e)===Rs(p))&&(e+=p)}return!m&&!r.all?0:e}function TN(t,e){const{iScale:s,vScale:r}=e,l=s.axis==="x"?"x":"y",o=r.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,m;for(h=0,p=c.length;h<p;++h)m=c[h],u[h]={[l]:m,[o]:t[m]};return u}function ud(t,e){const s=t&&t.options.stacked;return s||s===void 0&&e.stack!==void 0}function LN(t,e,s){return`${t.id}.${e.id}.${s.stack||s.type}`}function MN(t){const{min:e,max:s,minDefined:r,maxDefined:l}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:l?s:Number.POSITIVE_INFINITY}}function ON(t,e,s){const r=t[e]||(t[e]={});return r[s]||(r[s]={})}function Zp(t,e,s,r){for(const l of e.getMatchingVisibleMetas(r).reverse()){const o=t[l.index];if(s&&o>0||!s&&o<0)return l.index}return null}function em(t,e){const{chart:s,_cachedMeta:r}=t,l=s._stacks||(s._stacks={}),{iScale:o,vScale:c,index:u}=r,h=o.axis,p=c.axis,m=LN(o,c,r),v=e.length;let N;for(let w=0;w<v;++w){const b=e[w],{[h]:j,[p]:y}=b,k=b._stacks||(b._stacks={});N=k[p]=ON(l,m,j),N[u]=y,N._top=Zp(N,c,!0,r.type),N._bottom=Zp(N,c,!1,r.type);const S=N._visualValues||(N._visualValues={});S[u]=y}}function hd(t,e){const s=t.scales;return Object.keys(s).filter(r=>s[r].axis===e).shift()}function zN(t,e){return li(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function IN(t,e,s){return li(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:s,index:e,mode:"default",type:"data"})}function Tr(t,e){const s=t.controller.index,r=t.vScale&&t.vScale.axis;if(r){e=e||t._parsed;for(const l of e){const o=l._stacks;if(!o||o[r]===void 0||o[r][s]===void 0)return;delete o[r][s],o[r]._visualValues!==void 0&&o[r]._visualValues[s]!==void 0&&delete o[r]._visualValues[s]}}}const fd=t=>t==="reset"||t==="none",tm=(t,e)=>e?t:Object.assign({},t),FN=(t,e,s)=>t&&!e.hidden&&e._stacked&&{keys:lx(s,!0),values:null};class si{constructor(e,s){this.chart=e,this._ctx=e.ctx,this.index=s,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=ud(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&Tr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,s=this._cachedMeta,r=this.getDataset(),l=(v,N,w,b)=>v==="x"?N:v==="r"?b:w,o=s.xAxisID=ke(r.xAxisID,hd(e,"x")),c=s.yAxisID=ke(r.yAxisID,hd(e,"y")),u=s.rAxisID=ke(r.rAxisID,hd(e,"r")),h=s.indexAxis,p=s.iAxisID=l(h,o,c,u),m=s.vAxisID=l(h,c,o,u);s.xScale=this.getScaleForId(o),s.yScale=this.getScaleForId(c),s.rScale=this.getScaleForId(u),s.iScale=this.getScaleForId(p),s.vScale=this.getScaleForId(m)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const s=this._cachedMeta;return e===s.iScale?s.vScale:s.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Op(this._data,this),e._stacked&&Tr(e)}_dataCheck(){const e=this.getDataset(),s=e.data||(e.data=[]),r=this._data;if(Ee(s)){const l=this._cachedMeta;this._data=TN(s,l)}else if(r!==s){if(r){Op(r,this);const l=this._cachedMeta;Tr(l),l._parsed=[]}s&&Object.isExtensible(s)&&j1(s,this),this._syncList=[],this._data=s}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const s=this._cachedMeta,r=this.getDataset();let l=!1;this._dataCheck();const o=s._stacked;s._stacked=ud(s.vScale,s),s.stack!==r.stack&&(l=!0,Tr(s),s.stack=r.stack),this._resyncElements(e),(l||o!==s._stacked)&&(em(this,s._parsed),s._stacked=ud(s.vScale,s))}configure(){const e=this.chart.config,s=e.datasetScopeKeys(this._type),r=e.getOptionScopes(this.getDataset(),s,!0);this.options=e.createResolver(r,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,s){const{_cachedMeta:r,_data:l}=this,{iScale:o,_stacked:c}=r,u=o.axis;let h=e===0&&s===l.length?!0:r._sorted,p=e>0&&r._parsed[e-1],m,v,N;if(this._parsing===!1)r._parsed=l,r._sorted=!0,N=l;else{it(l[e])?N=this.parseArrayData(r,l,e,s):Ee(l[e])?N=this.parseObjectData(r,l,e,s):N=this.parsePrimitiveData(r,l,e,s);const w=()=>v[u]===null||p&&v[u]<p[u];for(m=0;m<s;++m)r._parsed[m+e]=v=N[m],h&&(w()&&(h=!1),p=v);r._sorted=h}c&&em(this,N)}parsePrimitiveData(e,s,r,l){const{iScale:o,vScale:c}=e,u=o.axis,h=c.axis,p=o.getLabels(),m=o===c,v=new Array(l);let N,w,b;for(N=0,w=l;N<w;++N)b=N+r,v[N]={[u]:m||o.parse(p[b],b),[h]:c.parse(s[b],b)};return v}parseArrayData(e,s,r,l){const{xScale:o,yScale:c}=e,u=new Array(l);let h,p,m,v;for(h=0,p=l;h<p;++h)m=h+r,v=s[m],u[h]={x:o.parse(v[0],m),y:c.parse(v[1],m)};return u}parseObjectData(e,s,r,l){const{xScale:o,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(l);let m,v,N,w;for(m=0,v=l;m<v;++m)N=m+r,w=s[N],p[m]={x:o.parse(ii(w,u),N),y:c.parse(ii(w,h),N)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,s,r){const l=this.chart,o=this._cachedMeta,c=s[e.axis],u={keys:lx(l,!0),values:s._stacks[e.axis]._visualValues};return Jp(u,c,o.index,{mode:r})}updateRangeFromParsed(e,s,r,l){const o=r[s.axis];let c=o===null?NaN:o;const u=l&&r._stacks[s.axis];l&&u&&(l.values=u,c=Jp(l,o,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,s){const r=this._cachedMeta,l=r._parsed,o=r._sorted&&e===r.iScale,c=l.length,u=this._getOtherScale(e),h=FN(s,r,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:m,max:v}=MN(u);let N,w;function b(){w=l[N];const j=w[u.axis];return!_t(w[e.axis])||m>j||v<j}for(N=0;N<c&&!(!b()&&(this.updateRangeFromParsed(p,e,w,h),o));++N);if(o){for(N=c-1;N>=0;--N)if(!b()){this.updateRangeFromParsed(p,e,w,h);break}}return p}getAllParsedValues(e){const s=this._cachedMeta._parsed,r=[];let l,o,c;for(l=0,o=s.length;l<o;++l)c=s[l][e.axis],_t(c)&&r.push(c);return r}getMaxOverflow(){return!1}getLabelAndValue(e){const s=this._cachedMeta,r=s.iScale,l=s.vScale,o=this.getParsed(e);return{label:r?""+r.getLabelForValue(o[r.axis]):"",value:l?""+l.getLabelForValue(o[l.axis]):""}}_update(e){const s=this._cachedMeta;this.update(e||"default"),s._clip=AN(ke(this.options.clip,DN(s.xScale,s.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,s=this.chart,r=this._cachedMeta,l=r.data||[],o=s.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||l.length-u,p=this.options.drawActiveElementsOnTop;let m;for(r.dataset&&r.dataset.draw(e,o,u,h),m=u;m<u+h;++m){const v=l[m];v.hidden||(v.active&&p?c.push(v):v.draw(e,o))}for(m=0;m<c.length;++m)c[m].draw(e,o)}getStyle(e,s){const r=s?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(r):this.resolveDataElementOptions(e||0,r)}getContext(e,s,r){const l=this.getDataset();let o;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];o=c.$context||(c.$context=IN(this.getContext(),e,c)),o.parsed=this.getParsed(e),o.raw=l.data[e],o.index=o.dataIndex=e}else o=this.$context||(this.$context=zN(this.chart.getContext(),this.index)),o.dataset=l,o.index=o.datasetIndex=this.index;return o.active=!!s,o.mode=r,o}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,s){return this._resolveElementOptions(this.dataElementType.id,s,e)}_resolveElementOptions(e,s="default",r){const l=s==="active",o=this._cachedDataOpts,c=e+"-"+s,u=o[c],h=this.enableOptionSharing&&Jr(r);if(u)return tm(u,h);const p=this.chart.config,m=p.datasetElementScopeKeys(this._type,e),v=l?[`${e}Hover`,"hover",e,""]:[e,""],N=p.getOptionScopes(this.getDataset(),m),w=Object.keys(et.elements[e]),b=()=>this.getContext(r,l,s),j=p.resolveNamedOptions(N,w,b,v);return j.$shared&&(j.$shared=h,o[c]=Object.freeze(tm(j,h))),j}_resolveAnimations(e,s,r){const l=this.chart,o=this._cachedDataOpts,c=`animation-${s}`,u=o[c];if(u)return u;let h;if(l.options.animation!==!1){const m=this.chart.config,v=m.datasetAnimationScopeKeys(this._type,s),N=m.getOptionScopes(this.getDataset(),v);h=m.createResolver(N,this.getContext(e,r,s))}const p=new ax(l,h&&h.animations);return h&&h._cacheable&&(o[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,s){return!s||fd(e)||this.chart._animationsDisabled}_getSharedOptions(e,s){const r=this.resolveDataElementOptions(e,s),l=this._sharedOptions,o=this.getSharedOptions(r),c=this.includeOptions(s,o)||o!==l;return this.updateSharedOptions(o,s,r),{sharedOptions:o,includeOptions:c}}updateElement(e,s,r,l){fd(l)?Object.assign(e,r):this._resolveAnimations(s,l).update(e,r)}updateSharedOptions(e,s,r){e&&!fd(s)&&this._resolveAnimations(void 0,s).update(e,r)}_setStyle(e,s,r,l){e.active=l;const o=this.getStyle(s,l);this._resolveAnimations(s,r,l).update(e,{options:!l&&this.getSharedOptions(o)||o})}removeHoverStyle(e,s,r){this._setStyle(e,r,"active",!1)}setHoverStyle(e,s,r){this._setStyle(e,r,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const s=this._data,r=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const l=r.length,o=s.length,c=Math.min(o,l);c&&this.parse(0,c),o>l?this._insertElements(l,o-l,e):o<l&&this._removeElements(o,l-o)}_insertElements(e,s,r=!0){const l=this._cachedMeta,o=l.data,c=e+s;let u;const h=p=>{for(p.length+=s,u=p.length-1;u>=c;u--)p[u]=p[u-s]};for(h(o),u=e;u<c;++u)o[u]=new this.dataElementType;this._parsing&&h(l._parsed),this.parse(e,s),r&&this.updateElements(o,e,s,"reset")}updateElements(e,s,r,l){}_removeElements(e,s){const r=this._cachedMeta;if(this._parsing){const l=r._parsed.splice(e,s);r._stacked&&Tr(r,l)}r.data.splice(e,s)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[s,r,l]=e;this[s](r,l)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,s){s&&this._sync(["_removeElements",e,s]);const r=arguments.length-2;r&&this._sync(["_insertElements",e,r])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}xe(si,"defaults",{}),xe(si,"datasetElementType",null),xe(si,"dataElementType",null);function BN(t,e){if(!t._cache.$bar){const s=t.getMatchingVisibleMetas(e);let r=[];for(let l=0,o=s.length;l<o;l++)r=r.concat(s[l].controller.getAllParsedValues(t));t._cache.$bar=Wg(r.sort((l,o)=>l-o))}return t._cache.$bar}function $N(t){const e=t.iScale,s=BN(e,t.type);let r=e._length,l,o,c,u;const h=()=>{c===32767||c===-32768||(Jr(u)&&(r=Math.min(r,Math.abs(c-u)||r)),u=c)};for(l=0,o=s.length;l<o;++l)c=e.getPixelForValue(s[l]),h();for(u=void 0,l=0,o=e.ticks.length;l<o;++l)c=e.getPixelForTick(l),h();return r}function UN(t,e,s,r){const l=s.barThickness;let o,c;return Le(l)?(o=e.min*s.categoryPercentage,c=s.barPercentage):(o=l*r,c=1),{chunk:o/r,ratio:c,start:e.pixels[t]-o/2}}function WN(t,e,s,r){const l=e.pixels,o=l[t];let c=t>0?l[t-1]:null,u=t<l.length-1?l[t+1]:null;const h=s.categoryPercentage;c===null&&(c=o-(u===null?e.end-e.start:u-o)),u===null&&(u=o+o-c);const p=o-(o-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/r,ratio:s.barPercentage,start:p}}function HN(t,e,s,r){const l=s.parse(t[0],r),o=s.parse(t[1],r),c=Math.min(l,o),u=Math.max(l,o);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[s.axis]=p,e._custom={barStart:h,barEnd:p,start:l,end:o,min:c,max:u}}function ox(t,e,s,r){return it(t)?HN(t,e,s,r):e[s.axis]=s.parse(t,r),e}function sm(t,e,s,r){const l=t.iScale,o=t.vScale,c=l.getLabels(),u=l===o,h=[];let p,m,v,N;for(p=s,m=s+r;p<m;++p)N=e[p],v={},v[l.axis]=u||l.parse(c[p],p),h.push(ox(N,v,o,p));return h}function pd(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function VN(t,e,s){return t!==0?Rs(t):(e.isHorizontal()?1:-1)*(e.min>=s?1:-1)}function qN(t){let e,s,r,l,o;return t.horizontal?(e=t.base>t.x,s="left",r="right"):(e=t.base<t.y,s="bottom",r="top"),e?(l="end",o="start"):(l="start",o="end"),{start:s,end:r,reverse:e,top:l,bottom:o}}function YN(t,e,s,r){let l=e.borderSkipped;const o={};if(!l){t.borderSkipped=o;return}if(l===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:m}=qN(t);l==="middle"&&s&&(t.enableBorderRadius=!0,(s._top||0)===r?l=p:(s._bottom||0)===r?l=m:(o[nm(m,c,u,h)]=!0,l=p)),o[nm(l,c,u,h)]=!0,t.borderSkipped=o}function nm(t,e,s,r){return r?(t=QN(t,e,s),t=im(t,s,e)):t=im(t,e,s),t}function QN(t,e,s){return t===e?s:t===s?e:t}function im(t,e,s){return t==="start"?e:t==="end"?s:t}function KN(t,{inflateAmount:e},s){t.inflateAmount=e==="auto"?s===1?.33:0:e}class Fl extends si{parsePrimitiveData(e,s,r,l){return sm(e,s,r,l)}parseArrayData(e,s,r,l){return sm(e,s,r,l)}parseObjectData(e,s,r,l){const{iScale:o,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=o.axis==="x"?u:h,m=c.axis==="x"?u:h,v=[];let N,w,b,j;for(N=r,w=r+l;N<w;++N)j=s[N],b={},b[o.axis]=o.parse(ii(j,p),N),v.push(ox(ii(j,m),b,c,N));return v}updateRangeFromParsed(e,s,r,l){super.updateRangeFromParsed(e,s,r,l);const o=r._custom;o&&s===this._cachedMeta.vScale&&(e.min=Math.min(e.min,o.min),e.max=Math.max(e.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const s=this._cachedMeta,{iScale:r,vScale:l}=s,o=this.getParsed(e),c=o._custom,u=pd(c)?"["+c.start+", "+c.end+"]":""+l.getLabelForValue(o[l.axis]);return{label:""+r.getLabelForValue(o[r.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const s=this._cachedMeta;this.updateElements(s.data,0,s.data.length,e)}updateElements(e,s,r,l){const o=l==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),m=this._getRuler(),{sharedOptions:v,includeOptions:N}=this._getSharedOptions(s,l);for(let w=s;w<s+r;w++){const b=this.getParsed(w),j=o||Le(b[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(w),y=this._calculateBarIndexPixels(w,m),k=(b._stacks||{})[u.axis],S={horizontal:p,base:j.base,enableBorderRadius:!k||pd(b._custom)||c===k._top||c===k._bottom,x:p?j.head:y.center,y:p?y.center:j.head,height:p?y.size:Math.abs(j.size),width:p?Math.abs(j.size):y.size};N&&(S.options=v||this.resolveDataElementOptions(w,e[w].active?"active":l));const P=S.options||e[w].options;YN(S,P,k,c),KN(S,P,m.ratio),this.updateElement(e[w],w,S,l)}}_getStacks(e,s){const{iScale:r}=this._cachedMeta,l=r.getMatchingVisibleMetas(this._type).filter(m=>m.controller.options.grouped),o=r.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(s),h=u&&u[r.axis],p=m=>{const v=m._parsed.find(w=>w[r.axis]===h),N=v&&v[m.vScale.axis];if(Le(N)||isNaN(N))return!0};for(const m of l)if(!(s!==void 0&&p(m))&&((o===!1||c.indexOf(m.stack)===-1||o===void 0&&m.stack===void 0)&&c.push(m.stack),m.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,s=this.chart.options.indexAxis;return Object.keys(e).filter(r=>e[r].axis===s).shift()}_getAxis(){const e={},s=this.getFirstScaleIdForIndexAxis();for(const r of this.chart.data.datasets)e[ke(this.chart.options.indexAxis==="x"?r.xAxisID:r.yAxisID,s)]=!0;return Object.keys(e)}_getStackIndex(e,s,r){const l=this._getStacks(e,r),o=s!==void 0?l.indexOf(s):-1;return o===-1?l.length-1:o}_getRuler(){const e=this.options,s=this._cachedMeta,r=s.iScale,l=[];let o,c;for(o=0,c=s.data.length;o<c;++o)l.push(r.getPixelForValue(this.getParsed(o)[r.axis],o));const u=e.barThickness;return{min:u||$N(s),pixels:l,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:s,_stacked:r,index:l},options:{base:o,minBarLength:c}}=this,u=o||0,h=this.getParsed(e),p=h._custom,m=pd(p);let v=h[s.axis],N=0,w=r?this.applyStack(s,h,r):v,b,j;w!==v&&(N=w-v,w=v),m&&(v=p.barStart,w=p.barEnd-p.barStart,v!==0&&Rs(v)!==Rs(p.barEnd)&&(N=0),N+=v);const y=!Le(o)&&!m?o:N;let k=s.getPixelForValue(y);if(this.chart.getDataVisibility(e)?b=s.getPixelForValue(N+w):b=k,j=b-k,Math.abs(j)<c){j=VN(j,s,u)*c,v===u&&(k-=j/2);const S=s.getPixelForDecimal(0),P=s.getPixelForDecimal(1),I=Math.min(S,P),R=Math.max(S,P);k=Math.max(Math.min(k,R),I),b=k+j,r&&!m&&(h._stacks[s.axis]._visualValues[l]=s.getValueForPixel(b)-s.getValueForPixel(k))}if(k===s.getPixelForValue(u)){const S=Rs(j)*s.getLineWidthForValue(u)/2;k+=S,j-=S}return{size:j,base:k,head:b,center:b+j/2}}_calculateBarIndexPixels(e,s){const r=s.scale,l=this.options,o=l.skipNull,c=ke(l.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(s.grouped){const m=o?this._getStackCount(e):s.stackCount,v=l.barThickness==="flex"?WN(e,s,l,m*p):UN(e,s,l,m*p),N=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,w=this._getAxis().indexOf(ke(N,this.getFirstScaleIdForIndexAxis())),b=this._getStackIndex(this.index,this._cachedMeta.stack,o?e:void 0)+w;u=v.start+v.chunk*b+v.chunk/2,h=Math.min(c,v.chunk*v.ratio)}else u=r.getPixelForValue(this.getParsed(e)[r.axis],e),h=Math.min(c,s.min*s.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,s=e.vScale,r=e.data,l=r.length;let o=0;for(;o<l;++o)this.getParsed(o)[s.axis]!==null&&!r[o].hidden&&r[o].draw(this._ctx)}}xe(Fl,"id","bar"),xe(Fl,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),xe(Fl,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function XN(t,e,s){let r=1,l=1,o=0,c=0;if(e<Ke){const u=t,h=u+e,p=Math.cos(u),m=Math.sin(u),v=Math.cos(h),N=Math.sin(h),w=(P,I,R)=>ea(P,u,h,!0)?1:Math.max(I,I*s,R,R*s),b=(P,I,R)=>ea(P,u,h,!0)?-1:Math.min(I,I*s,R,R*s),j=w(0,p,v),y=w(ct,m,N),k=b(Fe,p,v),S=b(Fe+ct,m,N);r=(j-k)/2,l=(y-S)/2,o=-(j+k)/2,c=-(y+S)/2}return{ratioX:r,ratioY:l,offsetX:o,offsetY:c}}class Fr extends si{constructor(e,s){super(e,s),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,s){const r=this.getDataset().data,l=this._cachedMeta;if(this._parsing===!1)l._parsed=r;else{let o=h=>+r[h];if(Ee(r[e])){const{key:h="value"}=this._parsing;o=p=>+ii(r[p],h)}let c,u;for(c=e,u=e+s;c<u;++c)l._parsed[c]=o(c)}}_getRotation(){return Vs(this.options.rotation-90)}_getCircumference(){return Vs(this.options.circumference)}_getRotationExtents(){let e=Ke,s=-Ke;for(let r=0;r<this.chart.data.datasets.length;++r)if(this.chart.isDatasetVisible(r)&&this.chart.getDatasetMeta(r).type===this._type){const l=this.chart.getDatasetMeta(r).controller,o=l._getRotation(),c=l._getCircumference();e=Math.min(e,o),s=Math.max(s,o+c)}return{rotation:e,circumference:s-e}}update(e){const s=this.chart,{chartArea:r}=s,l=this._cachedMeta,o=l.data,c=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,u=Math.max((Math.min(r.width,r.height)-c)/2,0),h=Math.min(i1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:m,rotation:v}=this._getRotationExtents(),{ratioX:N,ratioY:w,offsetX:b,offsetY:j}=XN(v,m,h),y=(r.width-c)/N,k=(r.height-c)/w,S=Math.max(Math.min(y,k)/2,0),P=Ig(this.options.radius,S),I=Math.max(P*h,0),R=(P-I)/this._getVisibleDatasetWeightTotal();this.offsetX=b*P,this.offsetY=j*P,l.total=this.calculateTotal(),this.outerRadius=P-R*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-R*p,0),this.updateElements(o,0,o.length,e)}_circumference(e,s){const r=this.options,l=this._cachedMeta,o=this._getCircumference();return s&&r.animation.animateRotate||!this.chart.getDataVisibility(e)||l._parsed[e]===null||l.data[e].hidden?0:this.calculateCircumference(l._parsed[e]*o/Ke)}updateElements(e,s,r,l){const o=l==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,m=(u.left+u.right)/2,v=(u.top+u.bottom)/2,N=o&&p.animateScale,w=N?0:this.innerRadius,b=N?0:this.outerRadius,{sharedOptions:j,includeOptions:y}=this._getSharedOptions(s,l);let k=this._getRotation(),S;for(S=0;S<s;++S)k+=this._circumference(S,o);for(S=s;S<s+r;++S){const P=this._circumference(S,o),I=e[S],R={x:m+this.offsetX,y:v+this.offsetY,startAngle:k,endAngle:k+P,circumference:P,outerRadius:b,innerRadius:w};y&&(R.options=j||this.resolveDataElementOptions(S,I.active?"active":l)),k+=P,this.updateElement(I,S,R,l)}}calculateTotal(){const e=this._cachedMeta,s=e.data;let r=0,l;for(l=0;l<s.length;l++){const o=e._parsed[l];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(l)&&!s[l].hidden&&(r+=Math.abs(o))}return r}calculateCircumference(e){const s=this._cachedMeta.total;return s>0&&!isNaN(e)?Ke*(Math.abs(e)/s):0}getLabelAndValue(e){const s=this._cachedMeta,r=this.chart,l=r.data.labels||[],o=su(s._parsed[e],r.options.locale);return{label:l[e]||"",value:o}}getMaxBorderWidth(e){let s=0;const r=this.chart;let l,o,c,u,h;if(!e){for(l=0,o=r.data.datasets.length;l<o;++l)if(r.isDatasetVisible(l)){c=r.getDatasetMeta(l),e=c.data,u=c.controller;break}}if(!e)return 0;for(l=0,o=e.length;l<o;++l)h=u.resolveDataElementOptions(l),h.borderAlign!=="inner"&&(s=Math.max(s,h.borderWidth||0,h.hoverBorderWidth||0));return s}getMaxOffset(e){let s=0;for(let r=0,l=e.length;r<l;++r){const o=this.resolveDataElementOptions(r);s=Math.max(s,o.offset||0,o.hoverOffset||0)}return s}_getRingWeightOffset(e){let s=0;for(let r=0;r<e;++r)this.chart.isDatasetVisible(r)&&(s+=this._getRingWeight(r));return s}_getRingWeight(e){return Math.max(ke(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}xe(Fr,"id","doughnut"),xe(Fr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),xe(Fr,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),xe(Fr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const s=e.data,{labels:{pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=e.legend.options;return s.labels.length&&s.datasets.length?s.labels.map((h,p)=>{const v=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:v.backgroundColor,fontColor:o,hidden:!e.getDataVisibility(p),lineDash:v.borderDash,lineDashOffset:v.borderDashOffset,lineJoin:v.borderJoinStyle,lineWidth:v.borderWidth,strokeStyle:v.borderColor,textAlign:l,pointStyle:r,borderRadius:c&&(u||v.borderRadius),index:p}}):[]}},onClick(e,s,r){r.chart.toggleDataVisibility(s.index),r.chart.update()}}}});class Bl extends si{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const s=this._cachedMeta,{dataset:r,data:l=[],_dataset:o}=s,c=this.chart._animationsDisabled;let{start:u,count:h}=_1(s,l,c);this._drawStart=u,this._drawCount=h,k1(s)&&(u=0,h=l.length),r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!o._decimated,r.points=l;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(r,void 0,{animated:!c,options:p},e),this.updateElements(l,u,h,e)}updateElements(e,s,r,l){const o=l==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:m,includeOptions:v}=this._getSharedOptions(s,l),N=c.axis,w=u.axis,{spanGaps:b,segment:j}=this.options,y=Zr(b)?b:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||o||l==="none",S=s+r,P=e.length;let I=s>0&&this.getParsed(s-1);for(let R=0;R<P;++R){const $=e[R],L=k?$:{};if(R<s||R>=S){L.skip=!0;continue}const A=this.getParsed(R),T=Le(A[w]),B=L[N]=c.getPixelForValue(A[N],R),U=L[w]=o||T?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,A,h):A[w],R);L.skip=isNaN(B)||isNaN(U)||T,L.stop=R>0&&Math.abs(A[N]-I[N])>y,j&&(L.parsed=A,L.raw=p.data[R]),v&&(L.options=m||this.resolveDataElementOptions(R,$.active?"active":l)),k||this.updateElement($,R,L,l),I=A}}getMaxOverflow(){const e=this._cachedMeta,s=e.dataset,r=s.options&&s.options.borderWidth||0,l=e.data||[];if(!l.length)return r;const o=l[0].size(this.resolveDataElementOptions(0)),c=l[l.length-1].size(this.resolveDataElementOptions(l.length-1));return Math.max(r,o,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}xe(Bl,"id","line"),xe(Bl,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),xe(Bl,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function Yn(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class cu{constructor(e){xe(this,"options");this.options=e||{}}static override(e){Object.assign(cu.prototype,e)}init(){}formats(){return Yn()}parse(){return Yn()}format(){return Yn()}add(){return Yn()}diff(){return Yn()}startOf(){return Yn()}endOf(){return Yn()}}var GN={_date:cu};function JN(t,e,s,r){const{controller:l,data:o,_sorted:c}=t,u=l._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&o.length){const p=u._reversePixels?y1:Zn;if(r){if(l._sharedOptions){const m=o[0],v=typeof m.getRange=="function"&&m.getRange(e);if(v){const N=p(o,e,s-v),w=p(o,e,s+v);return{lo:N.lo,hi:w.hi}}}}else{const m=p(o,e,s);if(h){const{vScale:v}=l._cachedMeta,{_parsed:N}=t,w=N.slice(0,m.lo+1).reverse().findIndex(j=>!Le(j[v.axis]));m.lo-=Math.max(0,w);const b=N.slice(m.hi).findIndex(j=>!Le(j[v.axis]));m.hi+=Math.max(0,b)}return m}}return{lo:0,hi:o.length-1}}function ho(t,e,s,r,l){const o=t.getSortedVisibleDatasetMetas(),c=s[e];for(let u=0,h=o.length;u<h;++u){const{index:p,data:m}=o[u],{lo:v,hi:N}=JN(o[u],e,c,l);for(let w=v;w<=N;++w){const b=m[w];b.skip||r(b,p,w)}}}function ZN(t){const e=t.indexOf("x")!==-1,s=t.indexOf("y")!==-1;return function(r,l){const o=e?Math.abs(r.x-l.x):0,c=s?Math.abs(r.y-l.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(c,2))}}function md(t,e,s,r,l){const o=[];return!l&&!t.isPointInArea(e)||ho(t,s,e,function(u,h,p){!l&&!ta(u,t.chartArea,0)||u.inRange(e.x,e.y,r)&&o.push({element:u,datasetIndex:h,index:p})},!0),o}function ew(t,e,s,r){let l=[];function o(c,u,h){const{startAngle:p,endAngle:m}=c.getProps(["startAngle","endAngle"],r),{angle:v}=$g(c,{x:e.x,y:e.y});ea(v,p,m)&&l.push({element:c,datasetIndex:u,index:h})}return ho(t,s,e,o),l}function tw(t,e,s,r,l,o){let c=[];const u=ZN(s);let h=Number.POSITIVE_INFINITY;function p(m,v,N){const w=m.inRange(e.x,e.y,l);if(r&&!w)return;const b=m.getCenterPoint(l);if(!(!!o||t.isPointInArea(b))&&!w)return;const y=u(e,b);y<h?(c=[{element:m,datasetIndex:v,index:N}],h=y):y===h&&c.push({element:m,datasetIndex:v,index:N})}return ho(t,s,e,p),c}function gd(t,e,s,r,l,o){return!o&&!t.isPointInArea(e)?[]:s==="r"&&!r?ew(t,e,s,l):tw(t,e,s,r,l,o)}function rm(t,e,s,r,l){const o=[],c=s==="x"?"inXRange":"inYRange";let u=!1;return ho(t,s,e,(h,p,m)=>{h[c]&&h[c](e[s],l)&&(o.push({element:h,datasetIndex:p,index:m}),u=u||h.inRange(e.x,e.y,l))}),r&&!u?[]:o}var sw={modes:{index(t,e,s,r){const l=Xn(e,t),o=s.axis||"x",c=s.includeInvisible||!1,u=s.intersect?md(t,l,o,r,c):gd(t,l,o,!1,r,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const m=u[0].index,v=p.data[m];v&&!v.skip&&h.push({element:v,datasetIndex:p.index,index:m})}),h):[]},dataset(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;let u=s.intersect?md(t,l,o,r,c):gd(t,l,o,!1,r,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let m=0;m<p.length;++m)u.push({element:p[m],datasetIndex:h,index:m})}return u},point(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;return md(t,l,o,r,c)},nearest(t,e,s,r){const l=Xn(e,t),o=s.axis||"xy",c=s.includeInvisible||!1;return gd(t,l,o,s.intersect,r,c)},x(t,e,s,r){const l=Xn(e,t);return rm(t,l,"x",s.intersect,r)},y(t,e,s,r){const l=Xn(e,t);return rm(t,l,"y",s.intersect,r)}}};const cx=["left","top","right","bottom"];function Lr(t,e){return t.filter(s=>s.pos===e)}function am(t,e){return t.filter(s=>cx.indexOf(s.pos)===-1&&s.box.axis===e)}function Mr(t,e){return t.sort((s,r)=>{const l=e?r:s,o=e?s:r;return l.weight===o.weight?l.index-o.index:l.weight-o.weight})}function nw(t){const e=[];let s,r,l,o,c,u;for(s=0,r=(t||[]).length;s<r;++s)l=t[s],{position:o,options:{stack:c,stackWeight:u=1}}=l,e.push({index:s,box:l,pos:o,horizontal:l.isHorizontal(),weight:l.weight,stack:c&&o+c,stackWeight:u});return e}function iw(t){const e={};for(const s of t){const{stack:r,pos:l,stackWeight:o}=s;if(!r||!cx.includes(l))continue;const c=e[r]||(e[r]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=o}return e}function rw(t,e){const s=iw(t),{vBoxMaxWidth:r,hBoxMaxHeight:l}=e;let o,c,u;for(o=0,c=t.length;o<c;++o){u=t[o];const{fullSize:h}=u.box,p=s[u.stack],m=p&&u.stackWeight/p.weight;u.horizontal?(u.width=m?m*r:h&&e.availableWidth,u.height=l):(u.width=r,u.height=m?m*l:h&&e.availableHeight)}return s}function aw(t){const e=nw(t),s=Mr(e.filter(p=>p.box.fullSize),!0),r=Mr(Lr(e,"left"),!0),l=Mr(Lr(e,"right")),o=Mr(Lr(e,"top"),!0),c=Mr(Lr(e,"bottom")),u=am(e,"x"),h=am(e,"y");return{fullSize:s,leftAndTop:r.concat(o),rightAndBottom:l.concat(h).concat(c).concat(u),chartArea:Lr(e,"chartArea"),vertical:r.concat(l).concat(h),horizontal:o.concat(c).concat(u)}}function lm(t,e,s,r){return Math.max(t[s],e[s])+Math.max(t[r],e[r])}function dx(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function lw(t,e,s,r){const{pos:l,box:o}=s,c=t.maxPadding;if(!Ee(l)){s.size&&(t[l]-=s.size);const v=r[s.stack]||{size:0,count:1};v.size=Math.max(v.size,s.horizontal?o.height:o.width),s.size=v.size/v.count,t[l]+=s.size}o.getPadding&&dx(c,o.getPadding());const u=Math.max(0,e.outerWidth-lm(c,t,"left","right")),h=Math.max(0,e.outerHeight-lm(c,t,"top","bottom")),p=u!==t.w,m=h!==t.h;return t.w=u,t.h=h,s.horizontal?{same:p,other:m}:{same:m,other:p}}function ow(t){const e=t.maxPadding;function s(r){const l=Math.max(e[r]-t[r],0);return t[r]+=l,l}t.y+=s("top"),t.x+=s("left"),s("right"),s("bottom")}function cw(t,e){const s=e.maxPadding;function r(l){const o={left:0,top:0,right:0,bottom:0};return l.forEach(c=>{o[c]=Math.max(e[c],s[c])}),o}return r(t?["left","right"]:["top","bottom"])}function Br(t,e,s,r){const l=[];let o,c,u,h,p,m;for(o=0,c=t.length,p=0;o<c;++o){u=t[o],h=u.box,h.update(u.width||e.w,u.height||e.h,cw(u.horizontal,e));const{same:v,other:N}=lw(e,s,u,r);p|=v&&l.length,m=m||N,h.fullSize||l.push(u)}return p&&Br(l,e,s,r)||m}function Pl(t,e,s,r,l){t.top=s,t.left=e,t.right=e+r,t.bottom=s+l,t.width=r,t.height=l}function om(t,e,s,r){const l=s.padding;let{x:o,y:c}=e;for(const u of t){const h=u.box,p=r[u.stack]||{placed:0,weight:1},m=u.stackWeight/p.weight||1;if(u.horizontal){const v=e.w*m,N=p.size||h.height;Jr(p.start)&&(c=p.start),h.fullSize?Pl(h,l.left,c,s.outerWidth-l.right-l.left,N):Pl(h,e.left+p.placed,c,v,N),p.start=c,p.placed+=v,c=h.bottom}else{const v=e.h*m,N=p.size||h.width;Jr(p.start)&&(o=p.start),h.fullSize?Pl(h,o,l.top,N,s.outerHeight-l.bottom-l.top):Pl(h,o,e.top+p.placed,N,v),p.start=o,p.placed+=v,o=h.right}}e.x=o,e.y=c}var ss={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(s){e.draw(s)}}]},t.boxes.push(e)},removeBox(t,e){const s=t.boxes?t.boxes.indexOf(e):-1;s!==-1&&t.boxes.splice(s,1)},configure(t,e,s){e.fullSize=s.fullSize,e.position=s.position,e.weight=s.weight},update(t,e,s,r){if(!t)return;const l=ns(t.options.layout.padding),o=Math.max(e-l.width,0),c=Math.max(s-l.height,0),u=aw(t.boxes),h=u.vertical,p=u.horizontal;Ie(t.boxes,j=>{typeof j.beforeLayout=="function"&&j.beforeLayout()});const m=h.reduce((j,y)=>y.box.options&&y.box.options.display===!1?j:j+1,0)||1,v=Object.freeze({outerWidth:e,outerHeight:s,padding:l,availableWidth:o,availableHeight:c,vBoxMaxWidth:o/2/m,hBoxMaxHeight:c/2}),N=Object.assign({},l);dx(N,ns(r));const w=Object.assign({maxPadding:N,w:o,h:c,x:l.left,y:l.top},l),b=rw(h.concat(p),v);Br(u.fullSize,w,v,b),Br(h,w,v,b),Br(p,w,v,b)&&Br(h,w,v,b),ow(w),om(u.leftAndTop,w,v,b),w.x+=w.w,w.y+=w.h,om(u.rightAndBottom,w,v,b),t.chartArea={left:w.left,top:w.top,right:w.left+w.w,bottom:w.top+w.h,height:w.h,width:w.w},Ie(u.chartArea,j=>{const y=j.box;Object.assign(y,t.chartArea),y.update(w.w,w.h,{left:0,top:0,right:0,bottom:0})})}};class ux{acquireContext(e,s){}releaseContext(e){return!1}addEventListener(e,s,r){}removeEventListener(e,s,r){}getDevicePixelRatio(){return 1}getMaximumSize(e,s,r,l){return s=Math.max(0,s||e.width),r=r||e.height,{width:s,height:Math.max(0,l?Math.floor(s/l):r)}}isAttached(e){return!0}updateConfig(e){}}class dw extends ux{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const $l="$chartjs",uw={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},cm=t=>t===null||t==="";function hw(t,e){const s=t.style,r=t.getAttribute("height"),l=t.getAttribute("width");if(t[$l]={initial:{height:r,width:l,style:{display:s.display,height:s.height,width:s.width}}},s.display=s.display||"block",s.boxSizing=s.boxSizing||"border-box",cm(l)){const o=qp(t,"width");o!==void 0&&(t.width=o)}if(cm(r))if(t.style.height==="")t.height=t.width/(e||2);else{const o=qp(t,"height");o!==void 0&&(t.height=o)}return t}const hx=pN?{passive:!0}:!1;function fw(t,e,s){t&&t.addEventListener(e,s,hx)}function pw(t,e,s){t&&t.canvas&&t.canvas.removeEventListener(e,s,hx)}function mw(t,e){const s=uw[t.type]||t.type,{x:r,y:l}=Xn(t,e);return{type:s,chart:e,native:t,x:r!==void 0?r:null,y:l!==void 0?l:null}}function Gl(t,e){for(const s of t)if(s===e||s.contains(e))return!0}function gw(t,e,s){const r=t.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||Gl(u.addedNodes,r),c=c&&!Gl(u.removedNodes,r);c&&s()});return l.observe(document,{childList:!0,subtree:!0}),l}function xw(t,e,s){const r=t.canvas,l=new MutationObserver(o=>{let c=!1;for(const u of o)c=c||Gl(u.removedNodes,r),c=c&&!Gl(u.addedNodes,r);c&&s()});return l.observe(document,{childList:!0,subtree:!0}),l}const na=new Map;let dm=0;function fx(){const t=window.devicePixelRatio;t!==dm&&(dm=t,na.forEach((e,s)=>{s.currentDevicePixelRatio!==t&&e()}))}function vw(t,e){na.size||window.addEventListener("resize",fx),na.set(t,e)}function yw(t){na.delete(t),na.size||window.removeEventListener("resize",fx)}function bw(t,e,s){const r=t.canvas,l=r&&ou(r);if(!l)return;const o=Vg((u,h)=>{const p=l.clientWidth;s(u,h),p<l.clientWidth&&s()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,m=h.contentRect.height;p===0&&m===0||o(p,m)});return c.observe(l),vw(t,o),c}function xd(t,e,s){s&&s.disconnect(),e==="resize"&&yw(t)}function jw(t,e,s){const r=t.canvas,l=Vg(o=>{t.ctx!==null&&s(mw(o,t))},t);return fw(r,e,l),l}class Nw extends ux{acquireContext(e,s){const r=e&&e.getContext&&e.getContext("2d");return r&&r.canvas===e?(hw(e,s),r):null}releaseContext(e){const s=e.canvas;if(!s[$l])return!1;const r=s[$l].initial;["height","width"].forEach(o=>{const c=r[o];Le(c)?s.removeAttribute(o):s.setAttribute(o,c)});const l=r.style||{};return Object.keys(l).forEach(o=>{s.style[o]=l[o]}),s.width=s.width,delete s[$l],!0}addEventListener(e,s,r){this.removeEventListener(e,s);const l=e.$proxies||(e.$proxies={}),c={attach:gw,detach:xw,resize:bw}[s]||jw;l[s]=c(e,s,r)}removeEventListener(e,s){const r=e.$proxies||(e.$proxies={}),l=r[s];if(!l)return;({attach:xd,detach:xd,resize:xd}[s]||pw)(e,s,l),r[s]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,s,r,l){return fN(e,s,r,l)}isAttached(e){const s=e&&ou(e);return!!(s&&s.isConnected)}}function ww(t){return!lu()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?dw:Nw}class ms{constructor(){xe(this,"x");xe(this,"y");xe(this,"active",!1);xe(this,"options");xe(this,"$animations")}tooltipPosition(e){const{x:s,y:r}=this.getProps(["x","y"],e);return{x:s,y:r}}hasValue(){return Zr(this.x)&&Zr(this.y)}getProps(e,s){const r=this.$animations;if(!s||!r)return this;const l={};return e.forEach(o=>{l[o]=r[o]&&r[o].active()?r[o]._to:this[o]}),l}}xe(ms,"defaults",{}),xe(ms,"defaultRoutes");function _w(t,e){const s=t.options.ticks,r=kw(t),l=Math.min(s.maxTicksLimit||r,r),o=s.major.enabled?Cw(e):[],c=o.length,u=o[0],h=o[c-1],p=[];if(c>l)return Ew(e,p,o,c/l),p;const m=Sw(o,e,l);if(c>0){let v,N;const w=c>1?Math.round((h-u)/(c-1)):null;for(Dl(e,p,m,Le(w)?0:u-w,u),v=0,N=c-1;v<N;v++)Dl(e,p,m,o[v],o[v+1]);return Dl(e,p,m,h,Le(w)?e.length:h+w),p}return Dl(e,p,m),p}function kw(t){const e=t.options.offset,s=t._tickSize(),r=t._length/s+(e?0:1),l=t._maxLength/s;return Math.floor(Math.min(r,l))}function Sw(t,e,s){const r=Rw(t),l=e.length/s;if(!r)return Math.max(l,1);const o=h1(r);for(let c=0,u=o.length-1;c<u;c++){const h=o[c];if(h>l)return h}return Math.max(l,1)}function Cw(t){const e=[];let s,r;for(s=0,r=t.length;s<r;s++)t[s].major&&e.push(s);return e}function Ew(t,e,s,r){let l=0,o=s[0],c;for(r=Math.ceil(r),c=0;c<t.length;c++)c===o&&(e.push(t[c]),l++,o=s[l*r])}function Dl(t,e,s,r,l){const o=ke(r,0),c=Math.min(ke(l,t.length),t.length);let u=0,h,p,m;for(s=Math.ceil(s),l&&(h=l-r,s=h/Math.floor(h/s)),m=o;m<0;)u++,m=Math.round(o+u*s);for(p=Math.max(o,0);p<c;p++)p===m&&(e.push(t[p]),u++,m=Math.round(o+u*s))}function Rw(t){const e=t.length;let s,r;if(e<2)return!1;for(r=t[0],s=1;s<e;++s)if(t[s]-t[s-1]!==r)return!1;return r}const Pw=t=>t==="left"?"right":t==="right"?"left":t,um=(t,e,s)=>e==="top"||e==="left"?t[e]+s:t[e]-s,hm=(t,e)=>Math.min(e||t,t);function fm(t,e){const s=[],r=t.length/e,l=t.length;let o=0;for(;o<l;o+=r)s.push(t[Math.floor(o)]);return s}function Dw(t,e,s){const r=t.ticks.length,l=Math.min(e,r-1),o=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(l),p;if(!(s&&(r===1?p=Math.max(h-o,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(l-1))/2,h+=l<e?p:-p,h<o-u||h>c+u)))return h}function Aw(t,e){Ie(t,s=>{const r=s.gc,l=r.length/2;let o;if(l>e){for(o=0;o<l;++o)delete s.data[r[o]];r.splice(0,l)}})}function Or(t){return t.drawTicks?t.tickLength:0}function pm(t,e){if(!t.display)return 0;const s=wt(t.font,e),r=ns(t.padding);return(it(t.text)?t.text.length:1)*s.lineHeight+r.height}function Tw(t,e){return li(t,{scale:e,type:"scale"})}function Lw(t,e,s){return li(t,{tick:s,index:e,type:"tick"})}function Mw(t,e,s){let r=eu(t);return(s&&e!=="right"||!s&&e==="right")&&(r=Pw(r)),r}function Ow(t,e,s,r){const{top:l,left:o,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:m}=h;let v=0,N,w,b;const j=c-l,y=u-o;if(t.isHorizontal()){if(w=bt(r,o,u),Ee(s)){const k=Object.keys(s)[0],S=s[k];b=m[k].getPixelForValue(S)+j-e}else s==="center"?b=(p.bottom+p.top)/2+j-e:b=um(t,s,e);N=u-o}else{if(Ee(s)){const k=Object.keys(s)[0],S=s[k];w=m[k].getPixelForValue(S)-y+e}else s==="center"?w=(p.left+p.right)/2-y+e:w=um(t,s,e);b=bt(r,c,l),v=s==="left"?-ct:ct}return{titleX:w,titleY:b,maxWidth:N,rotation:v}}class Vi extends ms{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,s){return e}getUserBounds(){let{_userMin:e,_userMax:s,_suggestedMin:r,_suggestedMax:l}=this;return e=ks(e,Number.POSITIVE_INFINITY),s=ks(s,Number.NEGATIVE_INFINITY),r=ks(r,Number.POSITIVE_INFINITY),l=ks(l,Number.NEGATIVE_INFINITY),{min:ks(e,r),max:ks(s,l),minDefined:_t(e),maxDefined:_t(s)}}getMinMax(e){let{min:s,max:r,minDefined:l,maxDefined:o}=this.getUserBounds(),c;if(l&&o)return{min:s,max:r};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),l||(s=Math.min(s,c.min)),o||(r=Math.max(r,c.max));return s=o&&s>r?r:s,r=l&&s>r?s:r,{min:ks(s,ks(r,s)),max:ks(r,ks(s,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){We(this.options.beforeUpdate,[this])}update(e,s,r){const{beginAtZero:l,grace:o,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=s,this._margins=r=Object.assign({left:0,right:0,top:0,bottom:0},r),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+r.left+r.right:this.height+r.top+r.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=V1(this,o,l),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?fm(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=_w(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,s,r;this.isHorizontal()?(s=this.left,r=this.right):(s=this.top,r=this.bottom,e=!e),this._startPixel=s,this._endPixel=r,this._reversePixels=e,this._length=r-s,this._alignToPixels=this.options.alignToPixels}afterUpdate(){We(this.options.afterUpdate,[this])}beforeSetDimensions(){We(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){We(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),We(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){We(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const s=this.options.ticks;let r,l,o;for(r=0,l=e.length;r<l;r++)o=e[r],o.label=We(s.callback,[o.value,r,e],this)}afterTickToLabelConversion(){We(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){We(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,s=e.ticks,r=hm(this.ticks.length,e.ticks.maxTicksLimit),l=s.minRotation||0,o=s.maxRotation;let c=l,u,h,p;if(!this._isVisible()||!s.display||l>=o||r<=1||!this.isHorizontal()){this.labelRotation=l;return}const m=this._getLabelSizes(),v=m.widest.width,N=m.highest.height,w=Nt(this.chart.width-v,0,this.maxWidth);u=e.offset?this.maxWidth/r:w/(r-1),v+6>u&&(u=w/(r-(e.offset?.5:1)),h=this.maxHeight-Or(e.grid)-s.padding-pm(e.title,this.chart.options.font),p=Math.sqrt(v*v+N*N),c=g1(Math.min(Math.asin(Nt((m.highest.height+6)/u,-1,1)),Math.asin(Nt(h/p,-1,1))-Math.asin(Nt(N/p,-1,1)))),c=Math.max(l,Math.min(o,c))),this.labelRotation=c}afterCalculateLabelRotation(){We(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){We(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:s,options:{ticks:r,title:l,grid:o}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=pm(l,s.options.font);if(u?(e.width=this.maxWidth,e.height=Or(o)+h):(e.height=this.maxHeight,e.width=Or(o)+h),r.display&&this.ticks.length){const{first:p,last:m,widest:v,highest:N}=this._getLabelSizes(),w=r.padding*2,b=Vs(this.labelRotation),j=Math.cos(b),y=Math.sin(b);if(u){const k=r.mirror?0:y*v.width+j*N.height;e.height=Math.min(this.maxHeight,e.height+k+w)}else{const k=r.mirror?0:j*v.width+y*N.height;e.width=Math.min(this.maxWidth,e.width+k+w)}this._calculatePadding(p,m,y,j)}}this._handleMargins(),u?(this.width=this._length=s.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=s.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,s,r,l){const{ticks:{align:o,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const m=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let N=0,w=0;h?p?(N=l*e.width,w=r*s.height):(N=r*e.height,w=l*s.width):o==="start"?w=s.width:o==="end"?N=e.width:o!=="inner"&&(N=e.width/2,w=s.width/2),this.paddingLeft=Math.max((N-m+c)*this.width/(this.width-m),0),this.paddingRight=Math.max((w-v+c)*this.width/(this.width-v),0)}else{let m=s.height/2,v=e.height/2;o==="start"?(m=0,v=e.height):o==="end"&&(m=s.height,v=0),this.paddingTop=m+c,this.paddingBottom=v+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){We(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:s}=this.options;return s==="top"||s==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let s,r;for(s=0,r=e.length;s<r;s++)Le(e[s].label)&&(e.splice(s,1),r--,s--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const s=this.options.ticks.sampleSize;let r=this.ticks;s<r.length&&(r=fm(r,s)),this._labelSizes=e=this._computeLabelSizes(r,r.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,s,r){const{ctx:l,_longestTextCache:o}=this,c=[],u=[],h=Math.floor(s/hm(s,r));let p=0,m=0,v,N,w,b,j,y,k,S,P,I,R;for(v=0;v<s;v+=h){if(b=e[v].label,j=this._resolveTickFontOptions(v),l.font=y=j.string,k=o[y]=o[y]||{data:{},gc:[]},S=j.lineHeight,P=I=0,!Le(b)&&!it(b))P=$p(l,k.data,k.gc,P,b),I=S;else if(it(b))for(N=0,w=b.length;N<w;++N)R=b[N],!Le(R)&&!it(R)&&(P=$p(l,k.data,k.gc,P,R),I+=S);c.push(P),u.push(I),p=Math.max(P,p),m=Math.max(I,m)}Aw(o,s);const $=c.indexOf(p),L=u.indexOf(m),A=T=>({width:c[T]||0,height:u[T]||0});return{first:A(0),last:A(s-1),widest:A($),highest:A(L),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,s){return NaN}getValueForPixel(e){}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const s=this._startPixel+e*this._length;return v1(this._alignToPixels?qn(this.chart,s,0):s)}getDecimalForPixel(e){const s=(e-this._startPixel)/this._length;return this._reversePixels?1-s:s}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:s}=this;return e<0&&s<0?s:e>0&&s>0?e:0}getContext(e){const s=this.ticks||[];if(e>=0&&e<s.length){const r=s[e];return r.$context||(r.$context=Lw(this.getContext(),e,r))}return this.$context||(this.$context=Tw(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,s=Vs(this.labelRotation),r=Math.abs(Math.cos(s)),l=Math.abs(Math.sin(s)),o=this._getLabelSizes(),c=e.autoSkipPadding||0,u=o?o.widest.width+c:0,h=o?o.highest.height+c:0;return this.isHorizontal()?h*r>u*l?u/r:h/l:h*l<u*r?h/r:u/l}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const s=this.axis,r=this.chart,l=this.options,{grid:o,position:c,border:u}=l,h=o.offset,p=this.isHorizontal(),v=this.ticks.length+(h?1:0),N=Or(o),w=[],b=u.setContext(this.getContext()),j=b.display?b.width:0,y=j/2,k=function(E){return qn(r,E,j)};let S,P,I,R,$,L,A,T,B,U,M,W;if(c==="top")S=k(this.bottom),L=this.bottom-N,T=S-y,U=k(e.top)+y,W=e.bottom;else if(c==="bottom")S=k(this.top),U=e.top,W=k(e.bottom)-y,L=S+y,T=this.top+N;else if(c==="left")S=k(this.right),$=this.right-N,A=S-y,B=k(e.left)+y,M=e.right;else if(c==="right")S=k(this.left),B=e.left,M=k(e.right)-y,$=S+y,A=this.left+N;else if(s==="x"){if(c==="center")S=k((e.top+e.bottom)/2+.5);else if(Ee(c)){const E=Object.keys(c)[0],J=c[E];S=k(this.chart.scales[E].getPixelForValue(J))}U=e.top,W=e.bottom,L=S+y,T=L+N}else if(s==="y"){if(c==="center")S=k((e.left+e.right)/2);else if(Ee(c)){const E=Object.keys(c)[0],J=c[E];S=k(this.chart.scales[E].getPixelForValue(J))}$=S-y,A=$-N,B=e.left,M=e.right}const V=ke(l.ticks.maxTicksLimit,v),ae=Math.max(1,Math.ceil(v/V));for(P=0;P<v;P+=ae){const E=this.getContext(P),J=o.setContext(E),X=u.setContext(E),ie=J.lineWidth,Z=J.color,O=X.dash||[],G=X.dashOffset,ce=J.tickWidth,fe=J.tickColor,ye=J.tickBorderDash||[],be=J.tickBorderDashOffset;I=Dw(this,P,h),I!==void 0&&(R=qn(r,I,ie),p?$=A=B=M=R:L=T=U=W=R,w.push({tx1:$,ty1:L,tx2:A,ty2:T,x1:B,y1:U,x2:M,y2:W,width:ie,color:Z,borderDash:O,borderDashOffset:G,tickWidth:ce,tickColor:fe,tickBorderDash:ye,tickBorderDashOffset:be}))}return this._ticksLength=v,this._borderValue=S,w}_computeLabelItems(e){const s=this.axis,r=this.options,{position:l,ticks:o}=r,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:m,mirror:v}=o,N=Or(r.grid),w=N+m,b=v?-m:w,j=-Vs(this.labelRotation),y=[];let k,S,P,I,R,$,L,A,T,B,U,M,W="middle";if(l==="top")$=this.bottom-b,L=this._getXAxisLabelAlignment();else if(l==="bottom")$=this.top+b,L=this._getXAxisLabelAlignment();else if(l==="left"){const ae=this._getYAxisLabelAlignment(N);L=ae.textAlign,R=ae.x}else if(l==="right"){const ae=this._getYAxisLabelAlignment(N);L=ae.textAlign,R=ae.x}else if(s==="x"){if(l==="center")$=(e.top+e.bottom)/2+w;else if(Ee(l)){const ae=Object.keys(l)[0],E=l[ae];$=this.chart.scales[ae].getPixelForValue(E)+w}L=this._getXAxisLabelAlignment()}else if(s==="y"){if(l==="center")R=(e.left+e.right)/2-w;else if(Ee(l)){const ae=Object.keys(l)[0],E=l[ae];R=this.chart.scales[ae].getPixelForValue(E)}L=this._getYAxisLabelAlignment(N).textAlign}s==="y"&&(h==="start"?W="top":h==="end"&&(W="bottom"));const V=this._getLabelSizes();for(k=0,S=u.length;k<S;++k){P=u[k],I=P.label;const ae=o.setContext(this.getContext(k));A=this.getPixelForTick(k)+o.labelOffset,T=this._resolveTickFontOptions(k),B=T.lineHeight,U=it(I)?I.length:1;const E=U/2,J=ae.color,X=ae.textStrokeColor,ie=ae.textStrokeWidth;let Z=L;c?(R=A,L==="inner"&&(k===S-1?Z=this.options.reverse?"left":"right":k===0?Z=this.options.reverse?"right":"left":Z="center"),l==="top"?p==="near"||j!==0?M=-U*B+B/2:p==="center"?M=-V.highest.height/2-E*B+B:M=-V.highest.height+B/2:p==="near"||j!==0?M=B/2:p==="center"?M=V.highest.height/2-E*B:M=V.highest.height-U*B,v&&(M*=-1),j!==0&&!ae.showLabelBackdrop&&(R+=B/2*Math.sin(j))):($=A,M=(1-U)*B/2);let O;if(ae.showLabelBackdrop){const G=ns(ae.backdropPadding),ce=V.heights[k],fe=V.widths[k];let ye=M-G.top,be=0-G.left;switch(W){case"middle":ye-=ce/2;break;case"bottom":ye-=ce;break}switch(L){case"center":be-=fe/2;break;case"right":be-=fe;break;case"inner":k===S-1?be-=fe:k>0&&(be-=fe/2);break}O={left:be,top:ye,width:fe+G.width,height:ce+G.height,color:ae.backdropColor}}y.push({label:I,font:T,textOffset:M,options:{rotation:j,color:J,strokeColor:X,strokeWidth:ie,textAlign:Z,textBaseline:W,translation:[R,$],backdrop:O}})}return y}_getXAxisLabelAlignment(){const{position:e,ticks:s}=this.options;if(-Vs(this.labelRotation))return e==="top"?"left":"right";let l="center";return s.align==="start"?l="left":s.align==="end"?l="right":s.align==="inner"&&(l="inner"),l}_getYAxisLabelAlignment(e){const{position:s,ticks:{crossAlign:r,mirror:l,padding:o}}=this.options,c=this._getLabelSizes(),u=e+o,h=c.widest.width;let p,m;return s==="left"?l?(m=this.right+o,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m+=h)):(m=this.right-u,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m=this.left)):s==="right"?l?(m=this.left+o,r==="near"?p="right":r==="center"?(p="center",m-=h/2):(p="left",m-=h)):(m=this.left+u,r==="near"?p="left":r==="center"?(p="center",m+=h/2):(p="right",m=this.right)):p="right",{textAlign:p,x:m}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,s=this.options.position;if(s==="left"||s==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(s==="top"||s==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:s},left:r,top:l,width:o,height:c}=this;s&&(e.save(),e.fillStyle=s,e.fillRect(r,l,o,c),e.restore())}getLineWidthForValue(e){const s=this.options.grid;if(!this._isVisible()||!s.display)return 0;const l=this.ticks.findIndex(o=>o.value===e);return l>=0?s.setContext(this.getContext(l)).lineWidth:0}drawGrid(e){const s=this.options.grid,r=this.ctx,l=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let o,c;const u=(h,p,m)=>{!m.width||!m.color||(r.save(),r.lineWidth=m.width,r.strokeStyle=m.color,r.setLineDash(m.borderDash||[]),r.lineDashOffset=m.borderDashOffset,r.beginPath(),r.moveTo(h.x,h.y),r.lineTo(p.x,p.y),r.stroke(),r.restore())};if(s.display)for(o=0,c=l.length;o<c;++o){const h=l[o];s.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),s.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:s,options:{border:r,grid:l}}=this,o=r.setContext(this.getContext()),c=r.display?o.width:0;if(!c)return;const u=l.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,m,v,N;this.isHorizontal()?(p=qn(e,this.left,c)-c/2,m=qn(e,this.right,u)+u/2,v=N=h):(v=qn(e,this.top,c)-c/2,N=qn(e,this.bottom,u)+u/2,p=m=h),s.save(),s.lineWidth=o.width,s.strokeStyle=o.color,s.beginPath(),s.moveTo(p,v),s.lineTo(m,N),s.stroke(),s.restore()}drawLabels(e){if(!this.options.ticks.display)return;const r=this.ctx,l=this._computeLabelArea();l&&oo(r,l);const o=this.getLabelItems(e);for(const c of o){const u=c.options,h=c.font,p=c.label,m=c.textOffset;sa(r,p,0,m,h,u)}l&&co(r)}drawTitle(){const{ctx:e,options:{position:s,title:r,reverse:l}}=this;if(!r.display)return;const o=wt(r.font),c=ns(r.padding),u=r.align;let h=o.lineHeight/2;s==="bottom"||s==="center"||Ee(s)?(h+=c.bottom,it(r.text)&&(h+=o.lineHeight*(r.text.length-1))):h+=c.top;const{titleX:p,titleY:m,maxWidth:v,rotation:N}=Ow(this,h,s,u);sa(e,r.text,0,0,o,{color:r.color,maxWidth:v,rotation:N,textAlign:Mw(u,s,l),textBaseline:"middle",translation:[p,m]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,s=e.ticks&&e.ticks.z||0,r=ke(e.grid&&e.grid.z,-1),l=ke(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==Vi.prototype.draw?[{z:s,draw:o=>{this.draw(o)}}]:[{z:r,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:l,draw:()=>{this.drawBorder()}},{z:s,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(e){const s=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",l=[];let o,c;for(o=0,c=s.length;o<c;++o){const u=s[o];u[r]===this.id&&(!e||u.type===e)&&l.push(u)}return l}_resolveTickFontOptions(e){const s=this.options.ticks.setContext(this.getContext(e));return wt(s.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class Al{constructor(e,s,r){this.type=e,this.scope=s,this.override=r,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const s=Object.getPrototypeOf(e);let r;Fw(s)&&(r=this.register(s));const l=this.items,o=e.id,c=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+e);return o in l||(l[o]=e,zw(e,c,r),this.override&&et.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const s=this.items,r=e.id,l=this.scope;r in s&&delete s[r],l&&r in et[l]&&(delete et[l][r],this.override&&delete ri[r])}}function zw(t,e,s){const r=Gr(Object.create(null),[s?et.get(s):{},et.get(e),t.defaults]);et.set(e,r),t.defaultRoutes&&Iw(e,t.defaultRoutes),t.descriptors&&et.describe(e,t.descriptors)}function Iw(t,e){Object.keys(e).forEach(s=>{const r=s.split("."),l=r.pop(),o=[t].concat(r).join("."),c=e[s].split("."),u=c.pop(),h=c.join(".");et.route(o,l,h,u)})}function Fw(t){return"id"in t&&"defaults"in t}class Bw{constructor(){this.controllers=new Al(si,"datasets",!0),this.elements=new Al(ms,"elements"),this.plugins=new Al(Object,"plugins"),this.scales=new Al(Vi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,s,r){[...s].forEach(l=>{const o=r||this._getRegistryForType(l);r||o.isForType(l)||o===this.plugins&&l.id?this._exec(e,o,l):Ie(l,c=>{const u=r||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,s,r){const l=Jd(e);We(r["before"+l],[],r),s[e](r),We(r["after"+l],[],r)}_getRegistryForType(e){for(let s=0;s<this._typedRegistries.length;s++){const r=this._typedRegistries[s];if(r.isForType(e))return r}return this.plugins}_get(e,s,r){const l=s.get(e);if(l===void 0)throw new Error('"'+e+'" is not a registered '+r+".");return l}}var Es=new Bw;class $w{constructor(){this._init=void 0}notify(e,s,r,l){if(s==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const o=l?this._descriptors(e).filter(l):this._descriptors(e),c=this._notify(o,e,s,r);return s==="afterDestroy"&&(this._notify(o,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,s,r,l){l=l||{};for(const o of e){const c=o.plugin,u=c[r],h=[s,l,o.options];if(We(u,h,c)===!1&&l.cancelable)return!1}return!0}invalidate(){Le(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const s=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),s}_createDescriptors(e,s){const r=e&&e.config,l=ke(r.options&&r.options.plugins,{}),o=Uw(r);return l===!1&&!s?[]:Hw(e,o,l,s)}_notifyStateChanges(e){const s=this._oldCache||[],r=this._cache,l=(o,c)=>o.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(l(s,r),e,"stop"),this._notify(l(r,s),e,"start")}}function Uw(t){const e={},s=[],r=Object.keys(Es.plugins.items);for(let o=0;o<r.length;o++)s.push(Es.getPlugin(r[o]));const l=t.plugins||[];for(let o=0;o<l.length;o++){const c=l[o];s.indexOf(c)===-1&&(s.push(c),e[c.id]=!0)}return{plugins:s,localIds:e}}function Ww(t,e){return!e&&t===!1?null:t===!0?{}:t}function Hw(t,{plugins:e,localIds:s},r,l){const o=[],c=t.getContext();for(const u of e){const h=u.id,p=Ww(r[h],l);p!==null&&o.push({plugin:u,options:Vw(t.config,{plugin:u,local:s[h]},p,c)})}return o}function Vw(t,{plugin:e,local:s},r,l){const o=t.pluginScopeKeys(e),c=t.getOptionScopes(r,o);return s&&e.defaults&&c.push(e.defaults),t.createResolver(c,l,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ld(t,e){const s=et.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||s.indexAxis||"x"}function qw(t,e){let s=t;return t==="_index_"?s=e:t==="_value_"&&(s=e==="x"?"y":"x"),s}function Yw(t,e){return t===e?"_index_":"_value_"}function mm(t){if(t==="x"||t==="y"||t==="r")return t}function Qw(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function Md(t,...e){if(mm(t))return t;for(const s of e){const r=s.axis||Qw(s.position)||t.length>1&&mm(t[0].toLowerCase());if(r)return r}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function gm(t,e,s){if(s[e+"AxisID"]===t)return{axis:e}}function Kw(t,e){if(e.data&&e.data.datasets){const s=e.data.datasets.filter(r=>r.xAxisID===t||r.yAxisID===t);if(s.length)return gm(t,"x",s[0])||gm(t,"y",s[0])}return{}}function Xw(t,e){const s=ri[t.type]||{scales:{}},r=e.scales||{},l=Ld(t.type,e),o=Object.create(null);return Object.keys(r).forEach(c=>{const u=r[c];if(!Ee(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=Md(c,u,Kw(c,t),et.scales[u.type]),p=Yw(h,l),m=s.scales||{};o[c]=Wr(Object.create(null),[{axis:h},u,m[h],m[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||Ld(u,e),m=(ri[u]||{}).scales||{};Object.keys(m).forEach(v=>{const N=qw(v,h),w=c[N+"AxisID"]||N;o[w]=o[w]||Object.create(null),Wr(o[w],[{axis:N},r[w],m[v]])})}),Object.keys(o).forEach(c=>{const u=o[c];Wr(u,[et.scales[u.type],et.scale])}),o}function px(t){const e=t.options||(t.options={});e.plugins=ke(e.plugins,{}),e.scales=Xw(t,e)}function mx(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function Gw(t){return t=t||{},t.data=mx(t.data),px(t),t}const xm=new Map,gx=new Set;function Tl(t,e){let s=xm.get(t);return s||(s=e(),xm.set(t,s),gx.add(s)),s}const zr=(t,e,s)=>{const r=ii(e,s);r!==void 0&&t.add(r)};class Jw{constructor(e){this._config=Gw(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=mx(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),px(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Tl(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,s){return Tl(`${e}.transition.${s}`,()=>[[`datasets.${e}.transitions.${s}`,`transitions.${s}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,s){return Tl(`${e}-${s}`,()=>[[`datasets.${e}.elements.${s}`,`datasets.${e}`,`elements.${s}`,""]])}pluginScopeKeys(e){const s=e.id,r=this.type;return Tl(`${r}-plugin-${s}`,()=>[[`plugins.${s}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,s){const r=this._scopeCache;let l=r.get(e);return(!l||s)&&(l=new Map,r.set(e,l)),l}getOptionScopes(e,s,r){const{options:l,type:o}=this,c=this._cachedScopes(e,r),u=c.get(s);if(u)return u;const h=new Set;s.forEach(m=>{e&&(h.add(e),m.forEach(v=>zr(h,e,v))),m.forEach(v=>zr(h,l,v)),m.forEach(v=>zr(h,ri[o]||{},v)),m.forEach(v=>zr(h,et,v)),m.forEach(v=>zr(h,Ad,v))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),gx.has(s)&&c.set(s,p),p}chartOptionScopes(){const{options:e,type:s}=this;return[e,ri[s]||{},et.datasets[s]||{},{type:s},et,Ad]}resolveNamedOptions(e,s,r,l=[""]){const o={$shared:!0},{resolver:c,subPrefixes:u}=vm(this._resolverCache,e,l);let h=c;if(e_(c,s)){o.$shared=!1,r=wn(r)?r():r;const p=this.createResolver(e,r,u);h=$i(c,r,p)}for(const p of s)o[p]=h[p];return o}createResolver(e,s,r=[""],l){const{resolver:o}=vm(this._resolverCache,e,r);return Ee(s)?$i(o,s,void 0,l):o}}function vm(t,e,s){let r=t.get(e);r||(r=new Map,t.set(e,r));const l=s.join();let o=r.get(l);return o||(o={resolver:iu(e,s),subPrefixes:s.filter(u=>!u.toLowerCase().includes("hover"))},r.set(l,o)),o}const Zw=t=>Ee(t)&&Object.getOwnPropertyNames(t).some(e=>wn(t[e]));function e_(t,e){const{isScriptable:s,isIndexable:r}=Kg(t);for(const l of e){const o=s(l),c=r(l),u=(c||o)&&t[l];if(o&&(wn(u)||Zw(u))||c&&it(u))return!0}return!1}var t_="4.5.1";const s_=["top","bottom","left","right","chartArea"];function ym(t,e){return t==="top"||t==="bottom"||s_.indexOf(t)===-1&&e==="x"}function bm(t,e){return function(s,r){return s[t]===r[t]?s[e]-r[e]:s[t]-r[t]}}function jm(t){const e=t.chart,s=e.options.animation;e.notifyPlugins("afterRender"),We(s&&s.onComplete,[t],e)}function n_(t){const e=t.chart,s=e.options.animation;We(s&&s.onProgress,[t],e)}function xx(t){return lu()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Ul={},Nm=t=>{const e=xx(t);return Object.values(Ul).filter(s=>s.canvas===e).pop()};function i_(t,e,s){const r=Object.keys(t);for(const l of r){const o=+l;if(o>=e){const c=t[l];delete t[l],(s>0||o>e)&&(t[o+s]=c)}}}function r_(t,e,s,r){return!s||t.type==="mouseout"?null:r?e:t}var gn;let ha=(gn=class{static register(...e){Es.add(...e),wm()}static unregister(...e){Es.remove(...e),wm()}constructor(e,s){const r=this.config=new Jw(s),l=xx(e),o=Nm(l);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const c=r.createResolver(r.chartOptionScopes(),this.getContext());this.platform=new(r.platform||ww(l)),this.platform.updateConfig(r);const u=this.platform.acquireContext(l,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,m=h&&h.width;if(this.id=n1(),this.ctx=u,this.canvas=h,this.width=m,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new $w,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=N1(v=>this.update(v),c.resizeDelay||0),this._dataChanges=[],Ul[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}Us.listen(this,"complete",jm),Us.listen(this,"progress",n_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:s},width:r,height:l,_aspectRatio:o}=this;return Le(e)?s&&o?o:l?r/l:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return Es}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Vp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Up(this.canvas,this.ctx),this}stop(){return Us.stop(this),this}resize(e,s){Us.running(this)?this._resizeBeforeDraw={width:e,height:s}:this._resize(e,s)}_resize(e,s){const r=this.options,l=this.canvas,o=r.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(l,e,s,o),u=r.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Vp(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),We(r.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const s=this.options.scales||{};Ie(s,(r,l)=>{r.id=l})}buildOrUpdateScales(){const e=this.options,s=e.scales,r=this.scales,l=Object.keys(r).reduce((c,u)=>(c[u]=!1,c),{});let o=[];s&&(o=o.concat(Object.keys(s).map(c=>{const u=s[c],h=Md(c,u),p=h==="r",m=h==="x";return{options:u,dposition:p?"chartArea":m?"bottom":"left",dtype:p?"radialLinear":m?"category":"linear"}}))),Ie(o,c=>{const u=c.options,h=u.id,p=Md(h,u),m=ke(u.type,c.dtype);(u.position===void 0||ym(u.position,p)!==ym(c.dposition))&&(u.position=c.dposition),l[h]=!0;let v=null;if(h in r&&r[h].type===m)v=r[h];else{const N=Es.getScale(m);v=new N({id:h,type:m,ctx:this.ctx,chart:this}),r[v.id]=v}v.init(u,e)}),Ie(l,(c,u)=>{c||delete r[u]}),Ie(r,c=>{ss.configure(this,c,c.options),ss.addBox(this,c)})}_updateMetasets(){const e=this._metasets,s=this.data.datasets.length,r=e.length;if(e.sort((l,o)=>l.index-o.index),r>s){for(let l=s;l<r;++l)this._destroyDatasetMeta(l);e.splice(s,r-s)}this._sortedMetasets=e.slice(0).sort(bm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:s}}=this;e.length>s.length&&delete this._stacks,e.forEach((r,l)=>{s.filter(o=>o===r._dataset).length===0&&this._destroyDatasetMeta(l)})}buildOrUpdateControllers(){const e=[],s=this.data.datasets;let r,l;for(this._removeUnreferencedMetasets(),r=0,l=s.length;r<l;r++){const o=s[r];let c=this.getDatasetMeta(r);const u=o.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(r),c=this.getDatasetMeta(r)),c.type=u,c.indexAxis=o.indexAxis||Ld(u,this.options),c.order=o.order||0,c.index=r,c.label=""+o.label,c.visible=this.isDatasetVisible(r),c.controller)c.controller.updateIndex(r),c.controller.linkScales();else{const h=Es.getController(u),{datasetElementType:p,dataElementType:m}=et.datasets[u];Object.assign(h,{dataElementType:Es.getElement(m),datasetElementType:p&&Es.getElement(p)}),c.controller=new h(this,r),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Ie(this.data.datasets,(e,s)=>{this.getDatasetMeta(s).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const s=this.config;s.update();const r=this._options=s.createResolver(s.chartOptionScopes(),this.getContext()),l=this._animationsDisabled=!r.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,m=this.data.datasets.length;p<m;p++){const{controller:v}=this.getDatasetMeta(p),N=!l&&o.indexOf(v)===-1;v.buildOrUpdateElements(N),c=Math.max(+v.getMaxOverflow(),c)}c=this._minPadding=r.layout.autoPadding?c:0,this._updateLayout(c),l||Ie(o,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(bm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Ie(this.scales,e=>{ss.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,s=new Set(Object.keys(this._listeners)),r=new Set(e.events);(!Ap(s,r)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,s=this._getUniformDataChanges()||[];for(const{method:r,start:l,count:o}of s){const c=r==="_removeElements"?-o:o;i_(e,l,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const s=this.data.datasets.length,r=o=>new Set(e.filter(c=>c[0]===o).map((c,u)=>u+","+c.splice(1).join(","))),l=r(0);for(let o=1;o<s;o++)if(!Ap(l,r(o)))return;return Array.from(l).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ss.update(this,this.width,this.height,e);const s=this.chartArea,r=s.width<=0||s.height<=0;this._layers=[],Ie(this.boxes,l=>{r&&l.position==="chartArea"||(l.configure&&l.configure(),this._layers.push(...l._layers()))},this),this._layers.forEach((l,o)=>{l._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let s=0,r=this.data.datasets.length;s<r;++s)this.getDatasetMeta(s).controller.configure();for(let s=0,r=this.data.datasets.length;s<r;++s)this._updateDataset(s,wn(e)?e({datasetIndex:s}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,s){const r=this.getDatasetMeta(e),l={meta:r,index:e,mode:s,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",l)!==!1&&(r.controller._update(s),l.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",l))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Us.has(this)?this.attached&&!Us.running(this)&&Us.start(this):(this.draw(),jm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:r,height:l}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(r,l)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const s=this._layers;for(e=0;e<s.length&&s[e].z<=0;++e)s[e].draw(this.chartArea);for(this._drawDatasets();e<s.length;++e)s[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const s=this._sortedMetasets,r=[];let l,o;for(l=0,o=s.length;l<o;++l){const c=s[l];(!e||c.visible)&&r.push(c)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let s=e.length-1;s>=0;--s)this._drawDataset(e[s]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const s=this.ctx,r={meta:e,index:e.index,cancelable:!0},l=rx(this,e);this.notifyPlugins("beforeDatasetDraw",r)!==!1&&(l&&oo(s,l),e.controller.draw(),l&&co(s),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}isPointInArea(e){return ta(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,s,r,l){const o=sw.modes[s];return typeof o=="function"?o(this,e,r,l):[]}getDatasetMeta(e){const s=this.data.datasets[e],r=this._metasets;let l=r.filter(o=>o&&o._dataset===s).pop();return l||(l={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:s&&s.order||0,index:e,_dataset:s,_parsed:[],_sorted:!1},r.push(l)),l}getContext(){return this.$context||(this.$context=li(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const s=this.data.datasets[e];if(!s)return!1;const r=this.getDatasetMeta(e);return typeof r.hidden=="boolean"?!r.hidden:!s.hidden}setDatasetVisibility(e,s){const r=this.getDatasetMeta(e);r.hidden=!s}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,s,r){const l=r?"show":"hide",o=this.getDatasetMeta(e),c=o.controller._resolveAnimations(void 0,l);Jr(s)?(o.data[s].hidden=!r,this.update()):(this.setDatasetVisibility(e,r),c.update(o,{visible:r}),this.update(u=>u.datasetIndex===e?l:void 0))}hide(e,s){this._updateVisibility(e,s,!1)}show(e,s){this._updateVisibility(e,s,!0)}_destroyDatasetMeta(e){const s=this._metasets[e];s&&s.controller&&s.controller._destroy(),delete this._metasets[e]}_stop(){let e,s;for(this.stop(),Us.remove(this),e=0,s=this.data.datasets.length;e<s;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:s}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Up(e,s),this.platform.releaseContext(s),this.canvas=null,this.ctx=null),delete Ul[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,s=this.platform,r=(o,c)=>{s.addEventListener(this,o,c),e[o]=c},l=(o,c,u)=>{o.offsetX=c,o.offsetY=u,this._eventHandler(o)};Ie(this.options.events,o=>r(o,l))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,s=this.platform,r=(h,p)=>{s.addEventListener(this,h,p),e[h]=p},l=(h,p)=>{e[h]&&(s.removeEventListener(this,h,p),delete e[h])},o=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{l("attach",u),this.attached=!0,this.resize(),r("resize",o),r("detach",c)};c=()=>{this.attached=!1,l("resize",o),this._stop(),this._resize(0,0),r("attach",u)},s.isAttached(this.canvas)?u():c()}unbindEvents(){Ie(this._listeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._listeners={},Ie(this._responsiveListeners,(e,s)=>{this.platform.removeEventListener(this,s,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,s,r){const l=r?"set":"remove";let o,c,u,h;for(s==="dataset"&&(o=this.getDatasetMeta(e[0].datasetIndex),o.controller["_"+l+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[l+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const s=this._active||[],r=e.map(({datasetIndex:o,index:c})=>{const u=this.getDatasetMeta(o);if(!u)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:u.data[c],index:c}});!ql(r,s)&&(this._active=r,this._lastEvent=null,this._updateHoverStyles(r,s))}notifyPlugins(e,s,r){return this._plugins.notify(this,e,s,r)}isPluginEnabled(e){return this._plugins._cache.filter(s=>s.plugin.id===e).length===1}_updateHoverStyles(e,s,r){const l=this.options.hover,o=(h,p)=>h.filter(m=>!p.some(v=>m.datasetIndex===v.datasetIndex&&m.index===v.index)),c=o(s,e),u=r?e:o(e,s);c.length&&this.updateHoverStyle(c,l.mode,!1),u.length&&l.mode&&this.updateHoverStyle(u,l.mode,!0)}_eventHandler(e,s){const r={event:e,replay:s,cancelable:!0,inChartArea:this.isPointInArea(e)},l=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",r,l)===!1)return;const o=this._handleEvent(e,s,r.inChartArea);return r.cancelable=!1,this.notifyPlugins("afterEvent",r,l),(o||r.changed)&&this.render(),this}_handleEvent(e,s,r){const{_active:l=[],options:o}=this,c=s,u=this._getActiveElements(e,l,r,c),h=c1(e),p=r_(e,this._lastEvent,r,h);r&&(this._lastEvent=null,We(o.onHover,[e,u,this],this),h&&We(o.onClick,[e,u,this],this));const m=!ql(u,l);return(m||s)&&(this._active=u,this._updateHoverStyles(u,l,s)),this._lastEvent=p,m}_getActiveElements(e,s,r,l){if(e.type==="mouseout")return[];if(!r)return s;const o=this.options.hover;return this.getElementsAtEventForMode(e,o.mode,o,l)}},xe(gn,"defaults",et),xe(gn,"instances",Ul),xe(gn,"overrides",ri),xe(gn,"registry",Es),xe(gn,"version",t_),xe(gn,"getChart",Nm),gn);function wm(){return Ie(ha.instances,t=>t._plugins.invalidate())}function a_(t,e,s){const{startAngle:r,x:l,y:o,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:m}=h,v=Math.min(p/c,Ht(r-s));if(t.beginPath(),t.arc(l,o,c-p/2,r+v/2,s-v/2),u>0){const N=Math.min(p/u,Ht(r-s));t.arc(l,o,u+p/2,s-N/2,r+N/2,!0)}else{const N=Math.min(p/2,c*Ht(r-s));if(m==="round")t.arc(l,o,N,s-Fe/2,r+Fe/2,!0);else if(m==="bevel"){const w=2*N*N,b=-w*Math.cos(s+Fe/2)+l,j=-w*Math.sin(s+Fe/2)+o,y=w*Math.cos(r+Fe/2)+l,k=w*Math.sin(r+Fe/2)+o;t.lineTo(b,j),t.lineTo(y,k)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function l_(t,e,s){const{startAngle:r,pixelMargin:l,x:o,y:c,outerRadius:u,innerRadius:h}=e;let p=l/u;t.beginPath(),t.arc(o,c,u,r-p,s+p),h>l?(p=l/h,t.arc(o,c,h,s+p,r-p,!0)):t.arc(o,c,l,s+ct,r-ct),t.closePath(),t.clip()}function o_(t){return nu(t,["outerStart","outerEnd","innerStart","innerEnd"])}function c_(t,e,s,r){const l=o_(t.options.borderRadius),o=(s-e)/2,c=Math.min(o,r*e/2),u=h=>{const p=(s-Math.min(o,h))*r/2;return Nt(h,0,Math.min(o,p))};return{outerStart:u(l.outerStart),outerEnd:u(l.outerEnd),innerStart:Nt(l.innerStart,0,c),innerEnd:Nt(l.innerEnd,0,c)}}function zi(t,e,s,r){return{x:s+t*Math.cos(e),y:r+t*Math.sin(e)}}function Jl(t,e,s,r,l,o){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:m}=e,v=Math.max(e.outerRadius+r+s-p,0),N=m>0?m+r+s+p:0;let w=0;const b=l-h;if(r){const ae=m>0?m-r:0,E=v>0?v-r:0,J=(ae+E)/2,X=J!==0?b*J/(J+r):b;w=(b-X)/2}const j=Math.max(.001,b*v-s/Fe)/v,y=(b-j)/2,k=h+y+w,S=l-y-w,{outerStart:P,outerEnd:I,innerStart:R,innerEnd:$}=c_(e,N,v,S-k),L=v-P,A=v-I,T=k+P/L,B=S-I/A,U=N+R,M=N+$,W=k+R/U,V=S-$/M;if(t.beginPath(),o){const ae=(T+B)/2;if(t.arc(c,u,v,T,ae),t.arc(c,u,v,ae,B),I>0){const ie=zi(A,B,c,u);t.arc(ie.x,ie.y,I,B,S+ct)}const E=zi(M,S,c,u);if(t.lineTo(E.x,E.y),$>0){const ie=zi(M,V,c,u);t.arc(ie.x,ie.y,$,S+ct,V+Math.PI)}const J=(S-$/N+(k+R/N))/2;if(t.arc(c,u,N,S-$/N,J,!0),t.arc(c,u,N,J,k+R/N,!0),R>0){const ie=zi(U,W,c,u);t.arc(ie.x,ie.y,R,W+Math.PI,k-ct)}const X=zi(L,k,c,u);if(t.lineTo(X.x,X.y),P>0){const ie=zi(L,T,c,u);t.arc(ie.x,ie.y,P,k-ct,T)}}else{t.moveTo(c,u);const ae=Math.cos(T)*v+c,E=Math.sin(T)*v+u;t.lineTo(ae,E);const J=Math.cos(B)*v+c,X=Math.sin(B)*v+u;t.lineTo(J,X)}t.closePath()}function d_(t,e,s,r,l){const{fullCircles:o,startAngle:c,circumference:u}=e;let h=e.endAngle;if(o){Jl(t,e,s,r,h,l);for(let p=0;p<o;++p)t.fill();isNaN(u)||(h=c+(u%Ke||Ke))}return Jl(t,e,s,r,h,l),t.fill(),h}function u_(t,e,s,r,l){const{fullCircles:o,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:m,borderDash:v,borderDashOffset:N,borderRadius:w}=h,b=h.borderAlign==="inner";if(!p)return;t.setLineDash(v||[]),t.lineDashOffset=N,b?(t.lineWidth=p*2,t.lineJoin=m||"round"):(t.lineWidth=p,t.lineJoin=m||"bevel");let j=e.endAngle;if(o){Jl(t,e,s,r,j,l);for(let y=0;y<o;++y)t.stroke();isNaN(u)||(j=c+(u%Ke||Ke))}b&&l_(t,e,j),h.selfJoin&&j-c>=Fe&&w===0&&m!=="miter"&&a_(t,e,j),o||(Jl(t,e,s,r,j,l),t.stroke())}class $r extends ms{constructor(s){super();xe(this,"circumference");xe(this,"endAngle");xe(this,"fullCircles");xe(this,"innerRadius");xe(this,"outerRadius");xe(this,"pixelMargin");xe(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,s&&Object.assign(this,s)}inRange(s,r,l){const o=this.getProps(["x","y"],l),{angle:c,distance:u}=$g(o,{x:s,y:r}),{startAngle:h,endAngle:p,innerRadius:m,outerRadius:v,circumference:N}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],l),w=(this.options.spacing+this.options.borderWidth)/2,b=ke(N,p-h),j=ea(c,h,p)&&h!==p,y=b>=Ke||j,k=qs(u,m+w,v+w);return y&&k}getCenterPoint(s){const{x:r,y:l,startAngle:o,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],s),{offset:p,spacing:m}=this.options,v=(o+c)/2,N=(u+h+m+p)/2;return{x:r+Math.cos(v)*N,y:l+Math.sin(v)*N}}tooltipPosition(s){return this.getCenterPoint(s)}draw(s){const{options:r,circumference:l}=this,o=(r.offset||0)/4,c=(r.spacing||0)/2,u=r.circular;if(this.pixelMargin=r.borderAlign==="inner"?.33:0,this.fullCircles=l>Ke?Math.floor(l/Ke):0,l===0||this.innerRadius<0||this.outerRadius<0)return;s.save();const h=(this.startAngle+this.endAngle)/2;s.translate(Math.cos(h)*o,Math.sin(h)*o);const p=1-Math.sin(Math.min(Fe,l||0)),m=o*p;s.fillStyle=r.backgroundColor,s.strokeStyle=r.borderColor,d_(s,this,m,c,u),u_(s,this,m,c,u),s.restore()}}xe($r,"id","arc"),xe($r,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),xe($r,"defaultRoutes",{backgroundColor:"backgroundColor"}),xe($r,"descriptors",{_scriptable:!0,_indexable:s=>s!=="borderDash"});function vx(t,e,s=e){t.lineCap=ke(s.borderCapStyle,e.borderCapStyle),t.setLineDash(ke(s.borderDash,e.borderDash)),t.lineDashOffset=ke(s.borderDashOffset,e.borderDashOffset),t.lineJoin=ke(s.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ke(s.borderWidth,e.borderWidth),t.strokeStyle=ke(s.borderColor,e.borderColor)}function h_(t,e,s){t.lineTo(s.x,s.y)}function f_(t){return t.stepped?O1:t.tension||t.cubicInterpolationMode==="monotone"?z1:h_}function yx(t,e,s={}){const r=t.length,{start:l=0,end:o=r-1}=s,{start:c,end:u}=e,h=Math.max(l,c),p=Math.min(o,u),m=l<c&&o<c||l>u&&o>u;return{count:r,start:h,loop:e.loop,ilen:p<h&&!m?r+p-h:p-h}}function p_(t,e,s,r){const{points:l,options:o}=e,{count:c,start:u,loop:h,ilen:p}=yx(l,s,r),m=f_(o);let{move:v=!0,reverse:N}=r||{},w,b,j;for(w=0;w<=p;++w)b=l[(u+(N?p-w:w))%c],!b.skip&&(v?(t.moveTo(b.x,b.y),v=!1):m(t,j,b,N,o.stepped),j=b);return h&&(b=l[(u+(N?p:0))%c],m(t,j,b,N,o.stepped)),!!h}function m_(t,e,s,r){const l=e.points,{count:o,start:c,ilen:u}=yx(l,s,r),{move:h=!0,reverse:p}=r||{};let m=0,v=0,N,w,b,j,y,k;const S=I=>(c+(p?u-I:I))%o,P=()=>{j!==y&&(t.lineTo(m,y),t.lineTo(m,j),t.lineTo(m,k))};for(h&&(w=l[S(0)],t.moveTo(w.x,w.y)),N=0;N<=u;++N){if(w=l[S(N)],w.skip)continue;const I=w.x,R=w.y,$=I|0;$===b?(R<j?j=R:R>y&&(y=R),m=(v*m+I)/++v):(P(),t.lineTo(I,R),b=$,v=0,j=y=R),k=R}P()}function Od(t){const e=t.options,s=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!s?m_:p_}function g_(t){return t.stepped?mN:t.tension||t.cubicInterpolationMode==="monotone"?gN:Gn}function x_(t,e,s,r){let l=e._path;l||(l=e._path=new Path2D,e.path(l,s,r)&&l.closePath()),vx(t,e.options),t.stroke(l)}function v_(t,e,s,r){const{segments:l,options:o}=e,c=Od(e);for(const u of l)vx(t,o,u.style),t.beginPath(),c(t,e,u,{start:s,end:s+r-1})&&t.closePath(),t.stroke()}const y_=typeof Path2D=="function";function b_(t,e,s,r){y_&&!e.options.segment?x_(t,e,s,r):v_(t,e,s,r)}class Ys extends ms{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,s){const r=this.options;if((r.tension||r.cubicInterpolationMode==="monotone")&&!r.stepped&&!this._pointsUpdated){const l=r.spanGaps?this._loop:this._fullLoop;lN(this._points,r,e,l,s),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=NN(this,this.options.segment))}first(){const e=this.segments,s=this.points;return e.length&&s[e[0].start]}last(){const e=this.segments,s=this.points,r=e.length;return r&&s[e[r-1].end]}interpolate(e,s){const r=this.options,l=e[s],o=this.points,c=ix(this,{property:s,start:l,end:l});if(!c.length)return;const u=[],h=g_(r);let p,m;for(p=0,m=c.length;p<m;++p){const{start:v,end:N}=c[p],w=o[v],b=o[N];if(w===b){u.push(w);continue}const j=Math.abs((l-w[s])/(b[s]-w[s])),y=h(w,b,j,r.stepped);y[s]=e[s],u.push(y)}return u.length===1?u[0]:u}pathSegment(e,s,r){return Od(this)(e,this,s,r)}path(e,s,r){const l=this.segments,o=Od(this);let c=this._loop;s=s||0,r=r||this.points.length-s;for(const u of l)c&=o(e,this,u,{start:s,end:s+r-1});return!!c}draw(e,s,r,l){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(e.save(),b_(e,this,r,l),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}xe(Ys,"id","line"),xe(Ys,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),xe(Ys,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),xe(Ys,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function _m(t,e,s,r){const l=t.options,{[s]:o}=t.getProps([s],r);return Math.abs(e-o)<l.radius+l.hitRadius}class Yr extends ms{constructor(s){super();xe(this,"parsed");xe(this,"skip");xe(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,s&&Object.assign(this,s)}inRange(s,r,l){const o=this.options,{x:c,y:u}=this.getProps(["x","y"],l);return Math.pow(s-c,2)+Math.pow(r-u,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(s,r){return _m(this,s,"x",r)}inYRange(s,r){return _m(this,s,"y",r)}getCenterPoint(s){const{x:r,y:l}=this.getProps(["x","y"],s);return{x:r,y:l}}size(s){s=s||this.options||{};let r=s.radius||0;r=Math.max(r,r&&s.hoverRadius||0);const l=r&&s.borderWidth||0;return(r+l)*2}draw(s,r){const l=this.options;this.skip||l.radius<.1||!ta(this,r,this.size(l)/2)||(s.strokeStyle=l.borderColor,s.lineWidth=l.borderWidth,s.fillStyle=l.backgroundColor,Td(s,l,this.x,this.y))}getRange(){const s=this.options||{};return s.radius+s.hitRadius}}xe(Yr,"id","point"),xe(Yr,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),xe(Yr,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function bx(t,e){const{x:s,y:r,base:l,width:o,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,m,v;return t.horizontal?(v=c/2,u=Math.min(s,l),h=Math.max(s,l),p=r-v,m=r+v):(v=o/2,u=s-v,h=s+v,p=Math.min(r,l),m=Math.max(r,l)),{left:u,top:p,right:h,bottom:m}}function bn(t,e,s,r){return t?0:Nt(e,s,r)}function j_(t,e,s){const r=t.options.borderWidth,l=t.borderSkipped,o=Qg(r);return{t:bn(l.top,o.top,0,s),r:bn(l.right,o.right,0,e),b:bn(l.bottom,o.bottom,0,s),l:bn(l.left,o.left,0,e)}}function N_(t,e,s){const{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),l=t.options.borderRadius,o=Ii(l),c=Math.min(e,s),u=t.borderSkipped,h=r||Ee(l);return{topLeft:bn(!h||u.top||u.left,o.topLeft,0,c),topRight:bn(!h||u.top||u.right,o.topRight,0,c),bottomLeft:bn(!h||u.bottom||u.left,o.bottomLeft,0,c),bottomRight:bn(!h||u.bottom||u.right,o.bottomRight,0,c)}}function w_(t){const e=bx(t),s=e.right-e.left,r=e.bottom-e.top,l=j_(t,s/2,r/2),o=N_(t,s/2,r/2);return{outer:{x:e.left,y:e.top,w:s,h:r,radius:o},inner:{x:e.left+l.l,y:e.top+l.t,w:s-l.l-l.r,h:r-l.t-l.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(l.t,l.l)),topRight:Math.max(0,o.topRight-Math.max(l.t,l.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(l.b,l.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(l.b,l.r))}}}}function vd(t,e,s,r){const l=e===null,o=s===null,u=t&&!(l&&o)&&bx(t,r);return u&&(l||qs(e,u.left,u.right))&&(o||qs(s,u.top,u.bottom))}function __(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function k_(t,e){t.rect(e.x,e.y,e.w,e.h)}function yd(t,e,s={}){const r=t.x!==s.x?-e:0,l=t.y!==s.y?-e:0,o=(t.x+t.w!==s.x+s.w?e:0)-r,c=(t.y+t.h!==s.y+s.h?e:0)-l;return{x:t.x+r,y:t.y+l,w:t.w+o,h:t.h+c,radius:t.radius}}class Wl extends ms{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:s,options:{borderColor:r,backgroundColor:l}}=this,{inner:o,outer:c}=w_(this),u=__(c.radius)?Kl:k_;e.save(),(c.w!==o.w||c.h!==o.h)&&(e.beginPath(),u(e,yd(c,s,o)),e.clip(),u(e,yd(o,-s,c)),e.fillStyle=r,e.fill("evenodd")),e.beginPath(),u(e,yd(o,s)),e.fillStyle=l,e.fill(),e.restore()}inRange(e,s,r){return vd(this,e,s,r)}inXRange(e,s){return vd(this,e,null,s)}inYRange(e,s){return vd(this,null,e,s)}getCenterPoint(e){const{x:s,y:r,base:l,horizontal:o}=this.getProps(["x","y","base","horizontal"],e);return{x:o?(s+l)/2:s,y:o?r:(r+l)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}xe(Wl,"id","bar"),xe(Wl,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),xe(Wl,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function S_(t,e,s){const r=t.segments,l=t.points,o=e.points,c=[];for(const u of r){let{start:h,end:p}=u;p=fo(h,p,l);const m=zd(s,l[h],l[p],u.loop);if(!e.segments){c.push({source:u,target:m,start:l[h],end:l[p]});continue}const v=ix(e,m);for(const N of v){const w=zd(s,o[N.start],o[N.end],N.loop),b=nx(u,l,w);for(const j of b)c.push({source:j,target:N,start:{[s]:km(m,w,"start",Math.max)},end:{[s]:km(m,w,"end",Math.min)}})}}return c}function zd(t,e,s,r){if(r)return;let l=e[t],o=s[t];return t==="angle"&&(l=Ht(l),o=Ht(o)),{property:t,start:l,end:o}}function C_(t,e){const{x:s=null,y:r=null}=t||{},l=e.points,o=[];return e.segments.forEach(({start:c,end:u})=>{u=fo(c,u,l);const h=l[c],p=l[u];r!==null?(o.push({x:h.x,y:r}),o.push({x:p.x,y:r})):s!==null&&(o.push({x:s,y:h.y}),o.push({x:s,y:p.y}))}),o}function fo(t,e,s){for(;e>t;e--){const r=s[e];if(!isNaN(r.x)&&!isNaN(r.y))break}return e}function km(t,e,s,r){return t&&e?r(t[s],e[s]):t?t[s]:e?e[s]:0}function jx(t,e){let s=[],r=!1;return it(t)?(r=!0,s=t):s=C_(t,e),s.length?new Ys({points:s,options:{tension:0},_loop:r,_fullLoop:r}):null}function Sm(t){return t&&t.fill!==!1}function E_(t,e,s){let l=t[e].fill;const o=[e];let c;if(!s)return l;for(;l!==!1&&o.indexOf(l)===-1;){if(!_t(l))return l;if(c=t[l],!c)return!1;if(c.visible)return l;o.push(l),l=c.fill}return!1}function R_(t,e,s){const r=T_(t);if(Ee(r))return isNaN(r.value)?!1:r;let l=parseFloat(r);return _t(l)&&Math.floor(l)===l?P_(r[0],e,l,s):["origin","start","end","stack","shape"].indexOf(r)>=0&&r}function P_(t,e,s,r){return(t==="-"||t==="+")&&(s=e+s),s===e||s<0||s>=r?!1:s}function D_(t,e){let s=null;return t==="start"?s=e.bottom:t==="end"?s=e.top:Ee(t)?s=e.getPixelForValue(t.value):e.getBasePixel&&(s=e.getBasePixel()),s}function A_(t,e,s){let r;return t==="start"?r=s:t==="end"?r=e.options.reverse?e.min:e.max:Ee(t)?r=t.value:r=e.getBaseValue(),r}function T_(t){const e=t.options,s=e.fill;let r=ke(s&&s.target,s);return r===void 0&&(r=!!e.backgroundColor),r===!1||r===null?!1:r===!0?"origin":r}function L_(t){const{scale:e,index:s,line:r}=t,l=[],o=r.segments,c=r.points,u=M_(e,s);u.push(jx({x:null,y:e.bottom},r));for(let h=0;h<o.length;h++){const p=o[h];for(let m=p.start;m<=p.end;m++)O_(l,c[m],u)}return new Ys({points:l,options:{}})}function M_(t,e){const s=[],r=t.getMatchingVisibleMetas("line");for(let l=0;l<r.length;l++){const o=r[l];if(o.index===e)break;o.hidden||s.unshift(o.dataset)}return s}function O_(t,e,s){const r=[];for(let l=0;l<s.length;l++){const o=s[l],{first:c,last:u,point:h}=z_(o,e,"x");if(!(!h||c&&u)){if(c)r.unshift(h);else if(t.push(h),!u)break}}t.push(...r)}function z_(t,e,s){const r=t.interpolate(e,s);if(!r)return{};const l=r[s],o=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<o.length;p++){const m=o[p],v=c[m.start][s],N=c[m.end][s];if(qs(l,v,N)){u=l===v,h=l===N;break}}return{first:u,last:h,point:r}}class Nx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,s,r){const{x:l,y:o,radius:c}=this;return s=s||{start:0,end:Ke},e.arc(l,o,c,s.end,s.start,!0),!r.bounds}interpolate(e){const{x:s,y:r,radius:l}=this,o=e.angle;return{x:s+Math.cos(o)*l,y:r+Math.sin(o)*l,angle:o}}}function I_(t){const{chart:e,fill:s,line:r}=t;if(_t(s))return F_(e,s);if(s==="stack")return L_(t);if(s==="shape")return!0;const l=B_(t);return l instanceof Nx?l:jx(l,r)}function F_(t,e){const s=t.getDatasetMeta(e);return s&&t.isDatasetVisible(e)?s.dataset:null}function B_(t){return(t.scale||{}).getPointPositionForValue?U_(t):$_(t)}function $_(t){const{scale:e={},fill:s}=t,r=D_(s,e);if(_t(r)){const l=e.isHorizontal();return{x:l?r:null,y:l?null:r}}return null}function U_(t){const{scale:e,fill:s}=t,r=e.options,l=e.getLabels().length,o=r.reverse?e.max:e.min,c=A_(s,e,o),u=[];if(r.grid.circular){const h=e.getPointPositionForValue(0,o);return new Nx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<l;++h)u.push(e.getPointPositionForValue(h,c));return u}function bd(t,e,s){const r=I_(e),{chart:l,index:o,line:c,scale:u,axis:h}=e,p=c.options,m=p.fill,v=p.backgroundColor,{above:N=v,below:w=v}=m||{},b=l.getDatasetMeta(o),j=rx(l,b);r&&c.points.length&&(oo(t,s),W_(t,{line:c,target:r,above:N,below:w,area:s,scale:u,axis:h,clip:j}),co(t))}function W_(t,e){const{line:s,target:r,above:l,below:o,area:c,scale:u,clip:h}=e,p=s._loop?"angle":e.axis;t.save();let m=o;o!==l&&(p==="x"?(Cm(t,r,c.top),jd(t,{line:s,target:r,color:l,scale:u,property:p,clip:h}),t.restore(),t.save(),Cm(t,r,c.bottom)):p==="y"&&(Em(t,r,c.left),jd(t,{line:s,target:r,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),Em(t,r,c.right),m=l)),jd(t,{line:s,target:r,color:m,scale:u,property:p,clip:h}),t.restore()}function Cm(t,e,s){const{segments:r,points:l}=e;let o=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],v=l[fo(h,p,l)];o?(t.moveTo(m.x,m.y),o=!1):(t.lineTo(m.x,s),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(v.x,s)}t.lineTo(e.first().x,s),t.closePath(),t.clip()}function Em(t,e,s){const{segments:r,points:l}=e;let o=!0,c=!1;t.beginPath();for(const u of r){const{start:h,end:p}=u,m=l[h],v=l[fo(h,p,l)];o?(t.moveTo(m.x,m.y),o=!1):(t.lineTo(s,m.y),t.lineTo(m.x,m.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(s,v.y)}t.lineTo(s,e.first().y),t.closePath(),t.clip()}function jd(t,e){const{line:s,target:r,property:l,color:o,scale:c,clip:u}=e,h=S_(s,r,l);for(const{source:p,target:m,start:v,end:N}of h){const{style:{backgroundColor:w=o}={}}=p,b=r!==!0;t.save(),t.fillStyle=w,H_(t,c,u,b&&zd(l,v,N)),t.beginPath();const j=!!s.pathSegment(t,p);let y;if(b){j?t.closePath():Rm(t,r,N,l);const k=!!r.pathSegment(t,m,{move:j,reverse:!0});y=j&&k,y||Rm(t,r,v,l)}t.closePath(),t.fill(y?"evenodd":"nonzero"),t.restore()}}function H_(t,e,s,r){const l=e.chart.chartArea,{property:o,start:c,end:u}=r||{};if(o==="x"||o==="y"){let h,p,m,v;o==="x"?(h=c,p=l.top,m=u,v=l.bottom):(h=l.left,p=c,m=l.right,v=u),t.beginPath(),s&&(h=Math.max(h,s.left),m=Math.min(m,s.right),p=Math.max(p,s.top),v=Math.min(v,s.bottom)),t.rect(h,p,m-h,v-p),t.clip()}}function Rm(t,e,s,r){const l=e.interpolate(s,r);l&&t.lineTo(l.x,l.y)}var wx={id:"filler",afterDatasetsUpdate(t,e,s){const r=(t.data.datasets||[]).length,l=[];let o,c,u,h;for(c=0;c<r;++c)o=t.getDatasetMeta(c),u=o.dataset,h=null,u&&u.options&&u instanceof Ys&&(h={visible:t.isDatasetVisible(c),index:c,fill:R_(u,c,r),chart:t,axis:o.controller.options.indexAxis,scale:o.vScale,line:u}),o.$filler=h,l.push(h);for(c=0;c<r;++c)h=l[c],!(!h||h.fill===!1)&&(h.fill=E_(l,c,s.propagate))},beforeDraw(t,e,s){const r=s.drawTime==="beforeDraw",l=t.getSortedVisibleDatasetMetas(),o=t.chartArea;for(let c=l.length-1;c>=0;--c){const u=l[c].$filler;u&&(u.line.updateControlPoints(o,u.axis),r&&u.fill&&bd(t.ctx,u,o))}},beforeDatasetsDraw(t,e,s){if(s.drawTime!=="beforeDatasetsDraw")return;const r=t.getSortedVisibleDatasetMetas();for(let l=r.length-1;l>=0;--l){const o=r[l].$filler;Sm(o)&&bd(t.ctx,o,t.chartArea)}},beforeDatasetDraw(t,e,s){const r=e.meta.$filler;!Sm(r)||s.drawTime!=="beforeDatasetDraw"||bd(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Pm=(t,e)=>{let{boxHeight:s=e,boxWidth:r=e}=t;return t.usePointStyle&&(s=Math.min(s,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:s,itemHeight:Math.max(e,s)}},V_=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Dm extends ms{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s,r){this.maxWidth=e,this.maxHeight=s,this._margins=r,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let s=We(e.generateLabels,[this.chart],this)||[];e.filter&&(s=s.filter(r=>e.filter(r,this.chart.data))),e.sort&&(s=s.sort((r,l)=>e.sort(r,l,this.chart.data))),this.options.reverse&&s.reverse(),this.legendItems=s}fit(){const{options:e,ctx:s}=this;if(!e.display){this.width=this.height=0;return}const r=e.labels,l=wt(r.font),o=l.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=Pm(r,o);let p,m;s.font=l.string,this.isHorizontal()?(p=this.maxWidth,m=this._fitRows(c,o,u,h)+10):(m=this.maxHeight,p=this._fitCols(c,l,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(m,e.maxHeight||this.maxHeight)}_fitRows(e,s,r,l){const{ctx:o,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],m=l+u;let v=e;o.textAlign="left",o.textBaseline="middle";let N=-1,w=-m;return this.legendItems.forEach((b,j)=>{const y=r+s/2+o.measureText(b.text).width;(j===0||p[p.length-1]+y+2*u>c)&&(v+=m,p[p.length-(j>0?0:1)]=0,w+=m,N++),h[j]={left:0,top:w,row:N,width:y,height:l},p[p.length-1]+=y+u}),v}_fitCols(e,s,r,l){const{ctx:o,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],m=c-e;let v=u,N=0,w=0,b=0,j=0;return this.legendItems.forEach((y,k)=>{const{itemWidth:S,itemHeight:P}=q_(r,s,o,y,l);k>0&&w+P+2*u>m&&(v+=N+u,p.push({width:N,height:w}),b+=N+u,j++,N=w=0),h[k]={left:b,top:w,col:j,width:S,height:P},N=Math.max(N,S),w+=P+u}),v+=N,p.push({width:N,height:w}),v}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:s,options:{align:r,labels:{padding:l},rtl:o}}=this,c=Fi(o,this.left,this.width);if(this.isHorizontal()){let u=0,h=bt(r,this.left+l,this.right-this.lineWidths[u]);for(const p of s)u!==p.row&&(u=p.row,h=bt(r,this.left+l,this.right-this.lineWidths[u])),p.top+=this.top+e+l,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+l}else{let u=0,h=bt(r,this.top+e+l,this.bottom-this.columnSizes[u].height);for(const p of s)p.col!==u&&(u=p.col,h=bt(r,this.top+e+l,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+l,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+l}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;oo(e,this),this._draw(),co(e)}}_draw(){const{options:e,columnSizes:s,lineWidths:r,ctx:l}=this,{align:o,labels:c}=e,u=et.color,h=Fi(e.rtl,this.left,this.width),p=wt(c.font),{padding:m}=c,v=p.size,N=v/2;let w;this.drawTitle(),l.textAlign=h.textAlign("left"),l.textBaseline="middle",l.lineWidth=.5,l.font=p.string;const{boxWidth:b,boxHeight:j,itemHeight:y}=Pm(c,v),k=function($,L,A){if(isNaN(b)||b<=0||isNaN(j)||j<0)return;l.save();const T=ke(A.lineWidth,1);if(l.fillStyle=ke(A.fillStyle,u),l.lineCap=ke(A.lineCap,"butt"),l.lineDashOffset=ke(A.lineDashOffset,0),l.lineJoin=ke(A.lineJoin,"miter"),l.lineWidth=T,l.strokeStyle=ke(A.strokeStyle,u),l.setLineDash(ke(A.lineDash,[])),c.usePointStyle){const B={radius:j*Math.SQRT2/2,pointStyle:A.pointStyle,rotation:A.rotation,borderWidth:T},U=h.xPlus($,b/2),M=L+N;Yg(l,B,U,M,c.pointStyleWidth&&b)}else{const B=L+Math.max((v-j)/2,0),U=h.leftForLtr($,b),M=Ii(A.borderRadius);l.beginPath(),Object.values(M).some(W=>W!==0)?Kl(l,{x:U,y:B,w:b,h:j,radius:M}):l.rect(U,B,b,j),l.fill(),T!==0&&l.stroke()}l.restore()},S=function($,L,A){sa(l,A.text,$,L+y/2,p,{strikethrough:A.hidden,textAlign:h.textAlign(A.textAlign)})},P=this.isHorizontal(),I=this._computeTitleHeight();P?w={x:bt(o,this.left+m,this.right-r[0]),y:this.top+m+I,line:0}:w={x:this.left+m,y:bt(o,this.top+I+m,this.bottom-s[0].height),line:0},ex(this.ctx,e.textDirection);const R=y+m;this.legendItems.forEach(($,L)=>{l.strokeStyle=$.fontColor,l.fillStyle=$.fontColor;const A=l.measureText($.text).width,T=h.textAlign($.textAlign||($.textAlign=c.textAlign)),B=b+N+A;let U=w.x,M=w.y;h.setWidth(this.width),P?L>0&&U+B+m>this.right&&(M=w.y+=R,w.line++,U=w.x=bt(o,this.left+m,this.right-r[w.line])):L>0&&M+R>this.bottom&&(U=w.x=U+s[w.line].width+m,w.line++,M=w.y=bt(o,this.top+I+m,this.bottom-s[w.line].height));const W=h.x(U);if(k(W,M,$),U=w1(T,U+b+N,P?U+B:this.right,e.rtl),S(h.x(U),M,$),P)w.x+=B+m;else if(typeof $.text!="string"){const V=p.lineHeight;w.y+=_x($,V)+m}else w.y+=R}),tx(this.ctx,e.textDirection)}drawTitle(){const e=this.options,s=e.title,r=wt(s.font),l=ns(s.padding);if(!s.display)return;const o=Fi(e.rtl,this.left,this.width),c=this.ctx,u=s.position,h=r.size/2,p=l.top+h;let m,v=this.left,N=this.width;if(this.isHorizontal())N=Math.max(...this.lineWidths),m=this.top+p,v=bt(e.align,v,this.right-N);else{const b=this.columnSizes.reduce((j,y)=>Math.max(j,y.height),0);m=p+bt(e.align,this.top,this.bottom-b-e.labels.padding-this._computeTitleHeight())}const w=bt(u,v,v+N);c.textAlign=o.textAlign(eu(u)),c.textBaseline="middle",c.strokeStyle=s.color,c.fillStyle=s.color,c.font=r.string,sa(c,s.text,w,m,r)}_computeTitleHeight(){const e=this.options.title,s=wt(e.font),r=ns(e.padding);return e.display?s.lineHeight+r.height:0}_getLegendItemAt(e,s){let r,l,o;if(qs(e,this.left,this.right)&&qs(s,this.top,this.bottom)){for(o=this.legendHitBoxes,r=0;r<o.length;++r)if(l=o[r],qs(e,l.left,l.left+l.width)&&qs(s,l.top,l.top+l.height))return this.legendItems[r]}return null}handleEvent(e){const s=this.options;if(!K_(e.type,s))return;const r=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const l=this._hoveredItem,o=V_(l,r);l&&!o&&We(s.onLeave,[e,l,this],this),this._hoveredItem=r,r&&!o&&We(s.onHover,[e,r,this],this)}else r&&We(s.onClick,[e,r,this],this)}}function q_(t,e,s,r,l){const o=Y_(r,t,e,s),c=Q_(l,r,e.lineHeight);return{itemWidth:o,itemHeight:c}}function Y_(t,e,s,r){let l=t.text;return l&&typeof l!="string"&&(l=l.reduce((o,c)=>o.length>c.length?o:c)),e+s.size/2+r.measureText(l).width}function Q_(t,e,s){let r=t;return typeof e.text!="string"&&(r=_x(e,s)),r}function _x(t,e){const s=t.text?t.text.length:0;return e*s}function K_(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var kx={id:"legend",_element:Dm,start(t,e,s){const r=t.legend=new Dm({ctx:t.ctx,options:s,chart:t});ss.configure(t,r,s),ss.addBox(t,r)},stop(t){ss.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,s){const r=t.legend;ss.configure(t,r,s),r.options=s},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,s){const r=e.datasetIndex,l=s.chart;l.isDatasetVisible(r)?(l.hide(r),e.hidden=!0):(l.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:s,pointStyle:r,textAlign:l,color:o,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(s?0:void 0),m=ns(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:o,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(m.width+m.height)/4,strokeStyle:p.borderColor,pointStyle:r||p.pointStyle,rotation:p.rotation,textAlign:l||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class Sx extends ms{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,s){const r=this.options;if(this.left=0,this.top=0,!r.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=s;const l=it(r.text)?r.text.length:1;this._padding=ns(r.padding);const o=l*wt(r.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:s,left:r,bottom:l,right:o,options:c}=this,u=c.align;let h=0,p,m,v;return this.isHorizontal()?(m=bt(u,r,o),v=s+e,p=o-r):(c.position==="left"?(m=r+e,v=bt(u,l,s),h=Fe*-.5):(m=o-e,v=bt(u,s,l),h=Fe*.5),p=l-s),{titleX:m,titleY:v,maxWidth:p,rotation:h}}draw(){const e=this.ctx,s=this.options;if(!s.display)return;const r=wt(s.font),o=r.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(o);sa(e,s.text,0,0,r,{color:s.color,maxWidth:h,rotation:p,textAlign:eu(s.align),textBaseline:"middle",translation:[c,u]})}}function X_(t,e){const s=new Sx({ctx:t.ctx,options:e,chart:t});ss.configure(t,s,e),ss.addBox(t,s),t.titleBlock=s}var Cx={id:"title",_element:Sx,start(t,e,s){X_(t,s)},stop(t){const e=t.titleBlock;ss.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,s){const r=t.titleBlock;ss.configure(t,r,s),r.options=s},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ur={average(t){if(!t.length)return!1;let e,s,r=new Set,l=0,o=0;for(e=0,s=t.length;e<s;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();r.add(h.x),l+=h.y,++o}}return o===0||r.size===0?!1:{x:[...r].reduce((u,h)=>u+h)/r.size,y:l/o}},nearest(t,e){if(!t.length)return!1;let s=e.x,r=e.y,l=Number.POSITIVE_INFINITY,o,c,u;for(o=0,c=t.length;o<c;++o){const h=t[o].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),m=Dd(e,p);m<l&&(l=m,u=h)}}if(u){const h=u.tooltipPosition();s=h.x,r=h.y}return{x:s,y:r}}};function Cs(t,e){return e&&(it(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Ws(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function G_(t,e){const{element:s,datasetIndex:r,index:l}=e,o=t.getDatasetMeta(r).controller,{label:c,value:u}=o.getLabelAndValue(l);return{chart:t,label:c,parsed:o.getParsed(l),raw:t.data.datasets[r].data[l],formattedValue:u,dataset:o.getDataset(),dataIndex:l,datasetIndex:r,element:s}}function Am(t,e){const s=t.chart.ctx,{body:r,footer:l,title:o}=t,{boxWidth:c,boxHeight:u}=e,h=wt(e.bodyFont),p=wt(e.titleFont),m=wt(e.footerFont),v=o.length,N=l.length,w=r.length,b=ns(e.padding);let j=b.height,y=0,k=r.reduce((I,R)=>I+R.before.length+R.lines.length+R.after.length,0);if(k+=t.beforeBody.length+t.afterBody.length,v&&(j+=v*p.lineHeight+(v-1)*e.titleSpacing+e.titleMarginBottom),k){const I=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;j+=w*I+(k-w)*h.lineHeight+(k-1)*e.bodySpacing}N&&(j+=e.footerMarginTop+N*m.lineHeight+(N-1)*e.footerSpacing);let S=0;const P=function(I){y=Math.max(y,s.measureText(I).width+S)};return s.save(),s.font=p.string,Ie(t.title,P),s.font=h.string,Ie(t.beforeBody.concat(t.afterBody),P),S=e.displayColors?c+2+e.boxPadding:0,Ie(r,I=>{Ie(I.before,P),Ie(I.lines,P),Ie(I.after,P)}),S=0,s.font=m.string,Ie(t.footer,P),s.restore(),y+=b.width,{width:y,height:j}}function J_(t,e){const{y:s,height:r}=e;return s<r/2?"top":s>t.height-r/2?"bottom":"center"}function Z_(t,e,s,r){const{x:l,width:o}=r,c=s.caretSize+s.caretPadding;if(t==="left"&&l+o+c>e.width||t==="right"&&l-o-c<0)return!0}function ek(t,e,s,r){const{x:l,width:o}=s,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return r==="center"?p=l<=(u+h)/2?"left":"right":l<=o/2?p="left":l>=c-o/2&&(p="right"),Z_(p,t,e,s)&&(p="center"),p}function Tm(t,e,s){const r=s.yAlign||e.yAlign||J_(t,s);return{xAlign:s.xAlign||e.xAlign||ek(t,e,s,r),yAlign:r}}function tk(t,e){let{x:s,width:r}=t;return e==="right"?s-=r:e==="center"&&(s-=r/2),s}function sk(t,e,s){let{y:r,height:l}=t;return e==="top"?r+=s:e==="bottom"?r-=l+s:r-=l/2,r}function Lm(t,e,s,r){const{caretSize:l,caretPadding:o,cornerRadius:c}=t,{xAlign:u,yAlign:h}=s,p=l+o,{topLeft:m,topRight:v,bottomLeft:N,bottomRight:w}=Ii(c);let b=tk(e,u);const j=sk(e,h,p);return h==="center"?u==="left"?b+=p:u==="right"&&(b-=p):u==="left"?b-=Math.max(m,N)+l:u==="right"&&(b+=Math.max(v,w)+l),{x:Nt(b,0,r.width-e.width),y:Nt(j,0,r.height-e.height)}}function Ll(t,e,s){const r=ns(s.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-r.right:t.x+r.left}function Mm(t){return Cs([],Ws(t))}function nk(t,e,s){return li(t,{tooltip:e,tooltipItems:s,type:"tooltip"})}function Om(t,e){const s=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return s?t.override(s):t}const Ex={beforeTitle:$s,title(t){if(t.length>0){const e=t[0],s=e.chart.data.labels,r=s?s.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return s[e.dataIndex]}return""},afterTitle:$s,beforeBody:$s,beforeLabel:$s,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const s=t.formattedValue;return Le(s)||(e+=s),e},labelColor(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:s.borderColor,backgroundColor:s.backgroundColor,borderWidth:s.borderWidth,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const s=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:s.pointStyle,rotation:s.rotation}},afterLabel:$s,afterBody:$s,beforeFooter:$s,footer:$s,afterFooter:$s};function Mt(t,e,s,r){const l=t[e].call(s,r);return typeof l>"u"?Ex[e].call(s,r):l}class Id extends ms{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const s=this.chart,r=this.options.setContext(this.getContext()),l=r.enabled&&s.options.animation&&r.animations,o=new ax(this.chart,l);return l._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=nk(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,s){const{callbacks:r}=s,l=Mt(r,"beforeTitle",this,e),o=Mt(r,"title",this,e),c=Mt(r,"afterTitle",this,e);let u=[];return u=Cs(u,Ws(l)),u=Cs(u,Ws(o)),u=Cs(u,Ws(c)),u}getBeforeBody(e,s){return Mm(Mt(s.callbacks,"beforeBody",this,e))}getBody(e,s){const{callbacks:r}=s,l=[];return Ie(e,o=>{const c={before:[],lines:[],after:[]},u=Om(r,o);Cs(c.before,Ws(Mt(u,"beforeLabel",this,o))),Cs(c.lines,Mt(u,"label",this,o)),Cs(c.after,Ws(Mt(u,"afterLabel",this,o))),l.push(c)}),l}getAfterBody(e,s){return Mm(Mt(s.callbacks,"afterBody",this,e))}getFooter(e,s){const{callbacks:r}=s,l=Mt(r,"beforeFooter",this,e),o=Mt(r,"footer",this,e),c=Mt(r,"afterFooter",this,e);let u=[];return u=Cs(u,Ws(l)),u=Cs(u,Ws(o)),u=Cs(u,Ws(c)),u}_createItems(e){const s=this._active,r=this.chart.data,l=[],o=[],c=[];let u=[],h,p;for(h=0,p=s.length;h<p;++h)u.push(G_(this.chart,s[h]));return e.filter&&(u=u.filter((m,v,N)=>e.filter(m,v,N,r))),e.itemSort&&(u=u.sort((m,v)=>e.itemSort(m,v,r))),Ie(u,m=>{const v=Om(e.callbacks,m);l.push(Mt(v,"labelColor",this,m)),o.push(Mt(v,"labelPointStyle",this,m)),c.push(Mt(v,"labelTextColor",this,m))}),this.labelColors=l,this.labelPointStyles=o,this.labelTextColors=c,this.dataPoints=u,u}update(e,s){const r=this.options.setContext(this.getContext()),l=this._active;let o,c=[];if(!l.length)this.opacity!==0&&(o={opacity:0});else{const u=Ur[r.position].call(this,l,this._eventPosition);c=this._createItems(r),this.title=this.getTitle(c,r),this.beforeBody=this.getBeforeBody(c,r),this.body=this.getBody(c,r),this.afterBody=this.getAfterBody(c,r),this.footer=this.getFooter(c,r);const h=this._size=Am(this,r),p=Object.assign({},u,h),m=Tm(this.chart,r,p),v=Lm(r,p,m,this.chart);this.xAlign=m.xAlign,this.yAlign=m.yAlign,o={opacity:1,x:v.x,y:v.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,o&&this._resolveAnimations().update(this,o),e&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:s})}drawCaret(e,s,r,l){const o=this.getCaretPosition(e,r,l);s.lineTo(o.x1,o.y1),s.lineTo(o.x2,o.y2),s.lineTo(o.x3,o.y3)}getCaretPosition(e,s,r){const{xAlign:l,yAlign:o}=this,{caretSize:c,cornerRadius:u}=r,{topLeft:h,topRight:p,bottomLeft:m,bottomRight:v}=Ii(u),{x:N,y:w}=e,{width:b,height:j}=s;let y,k,S,P,I,R;return o==="center"?(I=w+j/2,l==="left"?(y=N,k=y-c,P=I+c,R=I-c):(y=N+b,k=y+c,P=I-c,R=I+c),S=y):(l==="left"?k=N+Math.max(h,m)+c:l==="right"?k=N+b-Math.max(p,v)-c:k=this.caretX,o==="top"?(P=w,I=P-c,y=k-c,S=k+c):(P=w+j,I=P+c,y=k+c,S=k-c),R=P),{x1:y,x2:k,x3:S,y1:P,y2:I,y3:R}}drawTitle(e,s,r){const l=this.title,o=l.length;let c,u,h;if(o){const p=Fi(r.rtl,this.x,this.width);for(e.x=Ll(this,r.titleAlign,r),s.textAlign=p.textAlign(r.titleAlign),s.textBaseline="middle",c=wt(r.titleFont),u=r.titleSpacing,s.fillStyle=r.titleColor,s.font=c.string,h=0;h<o;++h)s.fillText(l[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===o&&(e.y+=r.titleMarginBottom-u)}}_drawColorBox(e,s,r,l,o){const c=this.labelColors[r],u=this.labelPointStyles[r],{boxHeight:h,boxWidth:p}=o,m=wt(o.bodyFont),v=Ll(this,"left",o),N=l.x(v),w=h<m.lineHeight?(m.lineHeight-h)/2:0,b=s.y+w;if(o.usePointStyle){const j={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},y=l.leftForLtr(N,p)+p/2,k=b+h/2;e.strokeStyle=o.multiKeyBackground,e.fillStyle=o.multiKeyBackground,Td(e,j,y,k),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,Td(e,j,y,k)}else{e.lineWidth=Ee(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const j=l.leftForLtr(N,p),y=l.leftForLtr(l.xPlus(N,1),p-2),k=Ii(c.borderRadius);Object.values(k).some(S=>S!==0)?(e.beginPath(),e.fillStyle=o.multiKeyBackground,Kl(e,{x:j,y:b,w:p,h,radius:k}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),Kl(e,{x:y,y:b+1,w:p-2,h:h-2,radius:k}),e.fill()):(e.fillStyle=o.multiKeyBackground,e.fillRect(j,b,p,h),e.strokeRect(j,b,p,h),e.fillStyle=c.backgroundColor,e.fillRect(y,b+1,p-2,h-2))}e.fillStyle=this.labelTextColors[r]}drawBody(e,s,r){const{body:l}=this,{bodySpacing:o,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:m}=r,v=wt(r.bodyFont);let N=v.lineHeight,w=0;const b=Fi(r.rtl,this.x,this.width),j=function(A){s.fillText(A,b.x(e.x+w),e.y+N/2),e.y+=N+o},y=b.textAlign(c);let k,S,P,I,R,$,L;for(s.textAlign=c,s.textBaseline="middle",s.font=v.string,e.x=Ll(this,y,r),s.fillStyle=r.bodyColor,Ie(this.beforeBody,j),w=u&&y!=="right"?c==="center"?p/2+m:p+2+m:0,I=0,$=l.length;I<$;++I){for(k=l[I],S=this.labelTextColors[I],s.fillStyle=S,Ie(k.before,j),P=k.lines,u&&P.length&&(this._drawColorBox(s,e,I,b,r),N=Math.max(v.lineHeight,h)),R=0,L=P.length;R<L;++R)j(P[R]),N=v.lineHeight;Ie(k.after,j)}w=0,N=v.lineHeight,Ie(this.afterBody,j),e.y-=o}drawFooter(e,s,r){const l=this.footer,o=l.length;let c,u;if(o){const h=Fi(r.rtl,this.x,this.width);for(e.x=Ll(this,r.footerAlign,r),e.y+=r.footerMarginTop,s.textAlign=h.textAlign(r.footerAlign),s.textBaseline="middle",c=wt(r.footerFont),s.fillStyle=r.footerColor,s.font=c.string,u=0;u<o;++u)s.fillText(l[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+r.footerSpacing}}drawBackground(e,s,r,l){const{xAlign:o,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:m}=r,{topLeft:v,topRight:N,bottomLeft:w,bottomRight:b}=Ii(l.cornerRadius);s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=l.borderWidth,s.beginPath(),s.moveTo(u+v,h),c==="top"&&this.drawCaret(e,s,r,l),s.lineTo(u+p-N,h),s.quadraticCurveTo(u+p,h,u+p,h+N),c==="center"&&o==="right"&&this.drawCaret(e,s,r,l),s.lineTo(u+p,h+m-b),s.quadraticCurveTo(u+p,h+m,u+p-b,h+m),c==="bottom"&&this.drawCaret(e,s,r,l),s.lineTo(u+w,h+m),s.quadraticCurveTo(u,h+m,u,h+m-w),c==="center"&&o==="left"&&this.drawCaret(e,s,r,l),s.lineTo(u,h+v),s.quadraticCurveTo(u,h,u+v,h),s.closePath(),s.fill(),l.borderWidth>0&&s.stroke()}_updateAnimationTarget(e){const s=this.chart,r=this.$animations,l=r&&r.x,o=r&&r.y;if(l||o){const c=Ur[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Am(this,e),h=Object.assign({},c,this._size),p=Tm(s,e,h),m=Lm(e,h,p,s);(l._to!==m.x||o._to!==m.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,m))}}_willRender(){return!!this.opacity}draw(e){const s=this.options.setContext(this.getContext());let r=this.opacity;if(!r)return;this._updateAnimationTarget(s);const l={width:this.width,height:this.height},o={x:this.x,y:this.y};r=Math.abs(r)<.001?0:r;const c=ns(s.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;s.enabled&&u&&(e.save(),e.globalAlpha=r,this.drawBackground(o,e,l,s),ex(e,s.textDirection),o.y+=c.top,this.drawTitle(o,e,s),this.drawBody(o,e,s),this.drawFooter(o,e,s),tx(e,s.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,s){const r=this._active,l=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),o=!ql(r,l),c=this._positionChanged(l,s);(o||c)&&(this._active=l,this._eventPosition=s,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,s,r=!0){if(s&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const l=this.options,o=this._active||[],c=this._getActiveElements(e,o,s,r),u=this._positionChanged(c,e),h=s||!ql(c,o)||u;return h&&(this._active=c,(l.enabled||l.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,s))),h}_getActiveElements(e,s,r,l){const o=this.options;if(e.type==="mouseout")return[];if(!l)return s.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,o.mode,o,r);return o.reverse&&c.reverse(),c}_positionChanged(e,s){const{caretX:r,caretY:l,options:o}=this,c=Ur[o.position].call(this,e,s);return c!==!1&&(r!==c.x||l!==c.y)}}xe(Id,"positioners",Ur);var Rx={id:"tooltip",_element:Id,positioners:Ur,afterInit(t,e,s){s&&(t.tooltip=new Id({chart:t,options:s}))},beforeUpdate(t,e,s){t.tooltip&&t.tooltip.initialize(s)},reset(t,e,s){t.tooltip&&t.tooltip.initialize(s)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const s={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...s,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",s)}},afterEvent(t,e){if(t.tooltip){const s=e.replay;t.tooltip.handleEvent(e.event,s,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Ex},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const ik=(t,e,s,r)=>(typeof e=="string"?(s=t.push(e)-1,r.unshift({index:s,label:e})):isNaN(e)&&(s=null),s);function rk(t,e,s,r){const l=t.indexOf(e);if(l===-1)return ik(t,e,s,r);const o=t.lastIndexOf(e);return l!==o?s:l}const ak=(t,e)=>t===null?null:Nt(Math.round(t),0,e);function zm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Zl extends Vi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const s=this._addedLabels;if(s.length){const r=this.getLabels();for(const{index:l,label:o}of s)r[l]===o&&r.splice(l,1);this._addedLabels=[]}super.init(e)}parse(e,s){if(Le(e))return null;const r=this.getLabels();return s=isFinite(s)&&r[s]===e?s:rk(r,e,ke(s,e),this._addedLabels),ak(s,r.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:r,max:l}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(r=0),s||(l=this.getLabels().length-1)),this.min=r,this.max=l}buildTicks(){const e=this.min,s=this.max,r=this.options.offset,l=[];let o=this.getLabels();o=e===0&&s===o.length-1?o:o.slice(e,s+1),this._valueRange=Math.max(o.length-(r?0:1),1),this._startValue=this.min-(r?.5:0);for(let c=e;c<=s;c++)l.push({value:c});return l}getLabelForValue(e){return zm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const s=this.ticks;return e<0||e>s.length-1?null:this.getPixelForValue(s[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}xe(Zl,"id","category"),xe(Zl,"defaults",{ticks:{callback:zm}});function lk(t,e){const s=[],{bounds:l,step:o,min:c,max:u,precision:h,count:p,maxTicks:m,maxDigits:v,includeBounds:N}=t,w=o||1,b=m-1,{min:j,max:y}=e,k=!Le(c),S=!Le(u),P=!Le(p),I=(y-j)/(v+1);let R=Lp((y-j)/b/w)*w,$,L,A,T;if(R<1e-14&&!k&&!S)return[{value:j},{value:y}];T=Math.ceil(y/R)-Math.floor(j/R),T>b&&(R=Lp(T*R/b/w)*w),Le(h)||($=Math.pow(10,h),R=Math.ceil(R*$)/$),l==="ticks"?(L=Math.floor(j/R)*R,A=Math.ceil(y/R)*R):(L=j,A=y),k&&S&&o&&p1((u-c)/o,R/1e3)?(T=Math.round(Math.min((u-c)/R,m)),R=(u-c)/T,L=c,A=u):P?(L=k?c:L,A=S?u:A,T=p-1,R=(A-L)/T):(T=(A-L)/R,Hr(T,Math.round(T),R/1e3)?T=Math.round(T):T=Math.ceil(T));const B=Math.max(Mp(R),Mp(L));$=Math.pow(10,Le(h)?B:h),L=Math.round(L*$)/$,A=Math.round(A*$)/$;let U=0;for(k&&(N&&L!==c?(s.push({value:c}),L<c&&U++,Hr(Math.round((L+U*R)*$)/$,c,Im(c,I,t))&&U++):L<c&&U++);U<T;++U){const M=Math.round((L+U*R)*$)/$;if(S&&M>u)break;s.push({value:M})}return S&&N&&A!==u?s.length&&Hr(s[s.length-1].value,u,Im(u,I,t))?s[s.length-1].value=u:s.push({value:u}):(!S||A===u)&&s.push({value:A}),s}function Im(t,e,{horizontal:s,minRotation:r}){const l=Vs(r),o=(s?Math.sin(l):Math.cos(l))||.001,c=.75*e*(""+t).length;return Math.min(e/o,c)}class ok extends Vi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,s){return Le(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:s,maxDefined:r}=this.getUserBounds();let{min:l,max:o}=this;const c=h=>l=s?l:h,u=h=>o=r?o:h;if(e){const h=Rs(l),p=Rs(o);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(l===o){let h=o===0?1:Math.abs(o*.05);u(o+h),e||c(l-h)}this.min=l,this.max=o}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:s,stepSize:r}=e,l;return r?(l=Math.ceil(this.max/r)-Math.floor(this.min/r)+1,l>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${l} ticks. Limiting to 1000.`),l=1e3)):(l=this.computeTickLimit(),s=s||11),s&&(l=Math.min(s,l)),l}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,s=e.ticks;let r=this.getTickLimit();r=Math.max(2,r);const l={maxTicks:r,bounds:e.bounds,min:e.min,max:e.max,precision:s.precision,step:s.stepSize,count:s.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:s.minRotation||0,includeBounds:s.includeBounds!==!1},o=this._range||this,c=lk(l,o);return e.bounds==="ticks"&&m1(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let s=this.min,r=this.max;if(super.configure(),this.options.offset&&e.length){const l=(r-s)/Math.max(e.length-1,1)/2;s-=l,r+=l}this._startValue=s,this._endValue=r,this._valueRange=r-s}getLabelForValue(e){return su(e,this.chart.options.locale,this.options.ticks.format)}}class eo extends ok{determineDataLimits(){const{min:e,max:s}=this.getMinMax(!0);this.min=_t(e)?e:0,this.max=_t(s)?s:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),s=e?this.width:this.height,r=Vs(this.options.ticks.minRotation),l=(e?Math.sin(r):Math.cos(r))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(s/Math.min(40,o.lineHeight/l))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}xe(eo,"id","linear"),xe(eo,"defaults",{ticks:{callback:qg.formatters.numeric}});const po={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ot=Object.keys(po);function Fm(t,e){return t-e}function Bm(t,e){if(Le(e))return null;const s=t._adapter,{parser:r,round:l,isoWeekday:o}=t._parseOpts;let c=e;return typeof r=="function"&&(c=r(c)),_t(c)||(c=typeof r=="string"?s.parse(c,r):s.parse(c)),c===null?null:(l&&(c=l==="week"&&(Zr(o)||o===!0)?s.startOf(c,"isoWeek",o):s.startOf(c,l)),+c)}function $m(t,e,s,r){const l=Ot.length;for(let o=Ot.indexOf(t);o<l-1;++o){const c=po[Ot[o]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((s-e)/(u*c.size))<=r)return Ot[o]}return Ot[l-1]}function ck(t,e,s,r,l){for(let o=Ot.length-1;o>=Ot.indexOf(s);o--){const c=Ot[o];if(po[c].common&&t._adapter.diff(l,r,c)>=e-1)return c}return Ot[s?Ot.indexOf(s):0]}function dk(t){for(let e=Ot.indexOf(t)+1,s=Ot.length;e<s;++e)if(po[Ot[e]].common)return Ot[e]}function Um(t,e,s){if(!s)t[e]=!0;else if(s.length){const{lo:r,hi:l}=Zd(s,e),o=s[r]>=e?s[r]:s[l];t[o]=!0}}function uk(t,e,s,r){const l=t._adapter,o=+l.startOf(e[0].value,r),c=e[e.length-1].value;let u,h;for(u=o;u<=c;u=+l.add(u,1,r))h=s[u],h>=0&&(e[h].major=!0);return e}function Wm(t,e,s){const r=[],l={},o=e.length;let c,u;for(c=0;c<o;++c)u=e[c],l[u]=c,r.push({value:u,major:!1});return o===0||!s?r:uk(t,r,l,s)}class to extends Vi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,s={}){const r=e.time||(e.time={}),l=this._adapter=new GN._date(e.adapters.date);l.init(s),Wr(r.displayFormats,l.formats()),this._parseOpts={parser:r.parser,round:r.round,isoWeekday:r.isoWeekday},super.init(e),this._normalized=s.normalized}parse(e,s){return e===void 0?null:Bm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,s=this._adapter,r=e.time.unit||"day";let{min:l,max:o,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(l=Math.min(l,p.min)),!u&&!isNaN(p.max)&&(o=Math.max(o,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),l=_t(l)&&!isNaN(l)?l:+s.startOf(Date.now(),r),o=_t(o)&&!isNaN(o)?o:+s.endOf(Date.now(),r)+1,this.min=Math.min(l,o-1),this.max=Math.max(l+1,o)}_getLabelBounds(){const e=this.getLabelTimestamps();let s=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;return e.length&&(s=e[0],r=e[e.length-1]),{min:s,max:r}}buildTicks(){const e=this.options,s=e.time,r=e.ticks,l=r.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&l.length&&(this.min=this._userMin||l[0],this.max=this._userMax||l[l.length-1]);const o=this.min,c=this.max,u=b1(l,o,c);return this._unit=s.unit||(r.autoSkip?$m(s.minUnit,this.min,this.max,this._getLabelCapacity(o)):ck(this,u.length,s.minUnit,this.min,this.max)),this._majorUnit=!r.major.enabled||this._unit==="year"?void 0:dk(this._unit),this.initOffsets(l),e.reverse&&u.reverse(),Wm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let s=0,r=0,l,o;this.options.offset&&e.length&&(l=this.getDecimalForValue(e[0]),e.length===1?s=1-l:s=(this.getDecimalForValue(e[1])-l)/2,o=this.getDecimalForValue(e[e.length-1]),e.length===1?r=o:r=(o-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;s=Nt(s,0,c),r=Nt(r,0,c),this._offsets={start:s,end:r,factor:1/(s+1+r)}}_generate(){const e=this._adapter,s=this.min,r=this.max,l=this.options,o=l.time,c=o.unit||$m(o.minUnit,s,r,this._getLabelCapacity(s)),u=ke(l.ticks.stepSize,1),h=c==="week"?o.isoWeekday:!1,p=Zr(h)||h===!0,m={};let v=s,N,w;if(p&&(v=+e.startOf(v,"isoWeek",h)),v=+e.startOf(v,p?"day":c),e.diff(r,s,c)>1e5*u)throw new Error(s+" and "+r+" are too far apart with stepSize of "+u+" "+c);const b=l.ticks.source==="data"&&this.getDataTimestamps();for(N=v,w=0;N<r;N=+e.add(N,u,c),w++)Um(m,N,b);return(N===r||l.bounds==="ticks"||w===1)&&Um(m,N,b),Object.keys(m).sort(Fm).map(j=>+j)}getLabelForValue(e){const s=this._adapter,r=this.options.time;return r.tooltipFormat?s.format(e,r.tooltipFormat):s.format(e,r.displayFormats.datetime)}format(e,s){const l=this.options.time.displayFormats,o=this._unit,c=s||l[o];return this._adapter.format(e,c)}_tickFormatFunction(e,s,r,l){const o=this.options,c=o.ticks.callback;if(c)return We(c,[e,s,r],this);const u=o.time.displayFormats,h=this._unit,p=this._majorUnit,m=h&&u[h],v=p&&u[p],N=r[s],w=p&&v&&N&&N.major;return this._adapter.format(e,l||(w?v:m))}generateTickLabels(e){let s,r,l;for(s=0,r=e.length;s<r;++s)l=e[s],l.label=this._tickFormatFunction(l.value,s,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const s=this._offsets,r=this.getDecimalForValue(e);return this.getPixelForDecimal((s.start+r)*s.factor)}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return this.min+r*(this.max-this.min)}_getLabelSize(e){const s=this.options.ticks,r=this.ctx.measureText(e).width,l=Vs(this.isHorizontal()?s.maxRotation:s.minRotation),o=Math.cos(l),c=Math.sin(l),u=this._resolveTickFontOptions(0).size;return{w:r*o+u*c,h:r*c+u*o}}_getLabelCapacity(e){const s=this.options.time,r=s.displayFormats,l=r[s.unit]||r.millisecond,o=this._tickFormatFunction(e,0,Wm(this,[e],this._majorUnit),l),c=this._getLabelSize(o),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],s,r;if(e.length)return e;const l=this.getMatchingVisibleMetas();if(this._normalized&&l.length)return this._cache.data=l[0].controller.getAllParsedValues(this);for(s=0,r=l.length;s<r;++s)e=e.concat(l[s].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let s,r;if(e.length)return e;const l=this.getLabels();for(s=0,r=l.length;s<r;++s)e.push(Bm(this,l[s]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Wg(e.sort(Fm))}}xe(to,"id","time"),xe(to,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ml(t,e,s){let r=0,l=t.length-1,o,c,u,h;s?(e>=t[r].pos&&e<=t[l].pos&&({lo:r,hi:l}=Zn(t,"pos",e)),{pos:o,time:u}=t[r],{pos:c,time:h}=t[l]):(e>=t[r].time&&e<=t[l].time&&({lo:r,hi:l}=Zn(t,"time",e)),{time:o,pos:u}=t[r],{time:c,pos:h}=t[l]);const p=c-o;return p?u+(h-u)*(e-o)/p:u}class Hm extends to{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),s=this._table=this.buildLookupTable(e);this._minPos=Ml(s,this.min),this._tableRange=Ml(s,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:s,max:r}=this,l=[],o=[];let c,u,h,p,m;for(c=0,u=e.length;c<u;++c)p=e[c],p>=s&&p<=r&&l.push(p);if(l.length<2)return[{time:s,pos:0},{time:r,pos:1}];for(c=0,u=l.length;c<u;++c)m=l[c+1],h=l[c-1],p=l[c],Math.round((m+h)/2)!==p&&o.push({time:p,pos:c/(u-1)});return o}_generate(){const e=this.min,s=this.max;let r=super.getDataTimestamps();return(!r.includes(e)||!r.length)&&r.splice(0,0,e),(!r.includes(s)||r.length===1)&&r.push(s),r.sort((l,o)=>l-o)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const s=this.getDataTimestamps(),r=this.getLabelTimestamps();return s.length&&r.length?e=this.normalize(s.concat(r)):e=s.length?s:r,e=this._cache.all=e,e}getDecimalForValue(e){return(Ml(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const s=this._offsets,r=this.getDecimalForPixel(e)/s.factor-s.end;return Ml(this._table,r*this._tableRange+this._minPos,!0)}}xe(Hm,"id","timeseries"),xe(Hm,"defaults",to.defaults);const Px="label";function Vm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function hk(t,e){const s=t.options;s&&e&&Object.assign(s,e)}function Dx(t,e){t.labels=e}function Ax(t,e,s=Px){const r=[];t.datasets=e.map(l=>{const o=t.datasets.find(c=>c[s]===l[s]);return!o||!l.data||r.includes(o)?{...l}:(r.push(o),Object.assign(o,l),o)})}function fk(t,e=Px){const s={labels:[],datasets:[]};return Dx(s,t.labels),Ax(s,t.datasets,e),s}function pk(t,e){const{height:s=150,width:r=300,redraw:l=!1,datasetIdKey:o,type:c,data:u,options:h,plugins:p=[],fallbackContent:m,updateMode:v,...N}=t,w=C.useRef(null),b=C.useRef(null),j=()=>{w.current&&(b.current=new ha(w.current,{type:c,data:fk(u,o),options:h&&{...h},plugins:p}),Vm(e,b.current))},y=()=>{Vm(e,null),b.current&&(b.current.destroy(),b.current=null)};return C.useEffect(()=>{!l&&b.current&&h&&hk(b.current,h)},[l,h]),C.useEffect(()=>{!l&&b.current&&Dx(b.current.config.data,u.labels)},[l,u.labels]),C.useEffect(()=>{!l&&b.current&&u.datasets&&Ax(b.current.config.data,u.datasets,o)},[l,u.datasets]),C.useEffect(()=>{b.current&&(l?(y(),setTimeout(j)):b.current.update(v))},[l,h,u.labels,u.datasets,v]),C.useEffect(()=>{b.current&&(y(),setTimeout(j))},[c]),C.useEffect(()=>(j(),()=>y()),[]),n.jsx("canvas",{ref:w,role:"img",height:s,width:r,...N,children:m})}const mk=C.forwardRef(pk);function du(t,e){return ha.register(e),C.forwardRef((s,r)=>n.jsx(mk,{...s,ref:r,type:t}))}const Fd=du("line",Bl),gk=du("bar",Fl),xk=du("doughnut",Fr);ha.register(Zl,eo,Yr,Ys,Wl,$r,Cx,Rx,kx,wx);function vk(){var k,S,P,I,R,$,L,A,T;const{t}=at(),e=Qs(),[s,r]=C.useState(null),[l,o]=C.useState(null),[c,u]=C.useState(null),[h,p]=C.useState(!0);if(C.useEffect(()=>{Promise.all([ps.stats(),Rd.get(24),Lg.getCollectionStats()]).then(([B,U,M])=>{var J,X;r(B.data);const W=24,V=[],ae=[],E=[];for(let ie=W-1;ie>=0;ie--){const Z=new Date;Z.setHours(Z.getHours()-ie),V.push(Z.getHours()+":00");const O=new Date(Z);O.setMinutes(0,0,0);const G=new Date(Z);G.setMinutes(59,59,999);const ce=((J=U.data.entries)==null?void 0:J.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="event"&&be>=O&&be<=G}).length)||0,fe=((X=U.data.entries)==null?void 0:X.filter(ye=>{const be=new Date(ye.timestamp);return ye.type==="alert"&&be>=O&&be<=G}).length)||0;ae.push(ce),E.push(fe)}o({labels:V,events:ae,alerts:E}),u(M.data),p(!1)}).catch(()=>{r({total:0,by_severity:{},by_status:{}}),o({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return n.jsx("div",{className:"dashboard",children:n.jsxs("div",{className:"dashboard-loading",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})});const m=s!=null&&s.by_type?Object.entries(s.by_type).sort((B,U)=>U[1]-B[1]).slice(0,5):[],v={labels:(l==null?void 0:l.labels)||[],datasets:[{label:t("dashboard.events"),data:(l==null?void 0:l.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(l==null?void 0:l.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},N={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},w={labels:m.map(([B])=>B),datasets:[{data:m.map(([,B])=>B),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},b={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},j={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((k=s==null?void 0:s.by_severity)==null?void 0:k.critical)||0,((S=s==null?void 0:s.by_severity)==null?void 0:S.high)||0,((P=s==null?void 0:s.by_severity)==null?void 0:P.medium)||0,((I=s==null?void 0:s.by_severity)==null?void 0:I.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return n.jsxs("div",{className:"dashboard",children:[n.jsxs("div",{className:"dashboard-header",children:[n.jsx("h2",{children:t("dashboard.title")}),n.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),n.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),n.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((R=s==null?void 0:s.by_severity)==null?void 0:R.critical)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),n.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:(($=s==null?void 0:s.by_severity)==null?void 0:$.high)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[n.jsx("div",{className:"stat-icon",children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((L=s==null?void 0:s.by_severity)==null?void 0:L.medium)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),n.jsx("div",{className:"stat-glow"})]}),n.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[n.jsx("div",{className:"stat-icon",children:n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:((A=s==null?void 0:s.by_severity)==null?void 0:A.low)||0}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),n.jsx("div",{className:"stat-glow"})]})]}),n.jsxs("div",{className:"dashboard-grid",children:[n.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.eventTrend")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),n.jsx("div",{className:"chart-body",children:n.jsx(Fd,{data:v,options:N})})]}),n.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:t("dashboard.topAlertTypes")}),n.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),n.jsx("div",{className:"chart-body",children:m.length>0?n.jsx(xk,{data:w,options:b}):n.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),n.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.bySeverity")})}),n.jsx("div",{className:"chart-body",children:n.jsx(gk,{data:j,options:y})})]}),n.jsxs("div",{className:"chart-card chart-collection",children:[n.jsx("div",{className:"chart-header",children:n.jsx("h3",{children:t("dashboard.collectionStatus")})}),n.jsxs("div",{className:"chart-body collection-stats",children:[n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),n.jsx("span",{className:"collection-value",children:((T=c==null?void 0:c.total_events)==null?void 0:T.toLocaleString())||0})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),n.jsxs("div",{className:"collection-item",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),n.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),n.jsxs("div",{className:"collection-sources",children:[n.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),n.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(B=>n.jsx("span",{className:"source-tag",children:B},B))})]})]})]})]}),n.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("dashboard.recentAlerts")}),n.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),n.jsx("div",{className:"recent-alerts-list",children:s&&s.total>0?n.jsxs("div",{className:"alert-preview",children:[n.jsx("div",{className:"alert-count-badge",children:s.total}),n.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):n.jsxs("div",{className:"no-alerts",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),n.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function yk(){var En;const t=ra(),[e,s]=C.useState([]),[r,l]=C.useState(!0),[o,c]=C.useState(1),[u,h]=C.useState(50),[p,m]=C.useState(""),[v,N]=C.useState(1),[w,b]=C.useState(0),[j,y]=C.useState(!1),[k,S]=C.useState(!1),[P,I]=C.useState(0),[R,$]=C.useState(!1),[L,A]=C.useState([]),[T,B]=C.useState(!1),[U,M]=C.useState("timestamp"),[W,V]=C.useState("desc"),[ae,E]=C.useState(""),[J,X]=C.useState(""),[ie,Z]=C.useState(""),[O,G]=C.useState(""),[ce,fe]=C.useState(null),[ye,be]=C.useState({x:0,y:0}),[Re,Ce]=C.useState("AND"),[Me,He]=C.useState([]),[Vt,xs]=C.useState(!1),[pe,qt]=C.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4});C.useEffect(()=>{const se=new URLSearchParams(t.search),oe=se.get("event_ids"),Pe=se.get("keywords");(oe||Pe)&&(S(!0),qt(st=>({...st,event_ids:oe?oe.split(",").map(as=>parseInt(as.trim(),10)).filter(as=>!isNaN(as)):[],keywords:Pe||""})),oe&&G(oe))},[t.search]);const oi=(se=1)=>{l(!0);const oe={Critical:1,Error:2,Warning:3,Info:4,Debug:5},Pe=O.split(",").map(Oe=>parseInt(Oe.trim(),10)).filter(Oe=>!isNaN(Oe)),st=ae.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),as=J.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),vs=ie.split(",").map(Oe=>Oe.trim()).filter(Oe=>Oe.length>0),Ps={keywords:(pe==null?void 0:pe.keywords)||"",keyword_mode:Re,regex:T,page:se,page_size:u,sort_by:U,sort_order:W,start_time:(pe==null?void 0:pe.start_time)||void 0,end_time:(pe==null?void 0:pe.end_time)||void 0,levels:L.map(Oe=>oe[Oe]).filter(Oe=>Oe),event_ids:Pe.length>0?Pe:void 0,log_names:pe!=null&&pe.log_names&&pe.log_names.length>0?pe.log_names:void 0,sources:st.length>0?st:void 0,users:as.length>0?as:void 0,computers:vs.length>0?vs:void 0};Qn.search(Ps).then(Oe=>{const Et=Oe.data;s(Et.events||[]),b(Et.total||0);const Rn=Math.ceil((Et.total||0)/u);N(Rn||1),I(Et.query_time_ms||0),S(!0),l(!1)}).catch(()=>{Qn.list(se,u).then(Oe=>{const Et=Oe.data;s(Et.events||[]),b(Et.total||0),N(Et.total_pages||1),S(!1),l(!1)}).catch(()=>l(!1))})},Ks=()=>{c(1),oi(1)},kn=()=>{qt({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),A([]),B(!1),M("timestamp"),V("desc"),E(""),X(""),Z(""),G(""),S(!1),Ce("AND"),c(1)};C.useEffect(()=>{l(!0);const se=pe&&(pe.log_names&&pe.log_names.length>0||pe.levels&&pe.levels.length>0||pe.event_ids&&pe.event_ids.length>0||pe.start_time||pe.end_time);pe!=null&&pe.keywords&&pe.keywords.trim()!==""?Qn.search({keywords:pe.keywords,keyword_mode:Re,regex:T,page:o,page_size:u,sort_by:U,sort_order:W,levels:L.map(oe=>({Critical:1,Error:2,Warning:3,Info:4,Debug:5})[oe]||0).filter(oe=>oe>0),start_time:pe.start_time,end_time:pe.end_time}).then(oe=>{const Pe=oe.data;s(Pe.events||[]),b(Pe.total||0);const st=Math.ceil((Pe.total||0)/u);N(st||1),l(!1)}).catch(()=>l(!1)):se?Qn.list(o,u,{log_names:pe.log_names,levels:pe.levels,event_ids:pe.event_ids,start_time:pe.start_time,end_time:pe.end_time,sort_by:U,sort_order:W}).then(oe=>{const Pe=oe.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),l(!1)}).catch(()=>l(!1)):Qn.list(o,u,{sort_by:U,sort_order:W}).then(oe=>{const Pe=oe.data;s(Pe.events||[]),b(Pe.total||0),N(Pe.total_pages||1),l(!1)}).catch(()=>l(!1))},[o,pe,U,W,u,L,Re,T]);const ci=se=>{h(se),c(1)},Sn=se=>{se.preventDefault();const oe=parseInt(p,10);!isNaN(oe)&&oe>=1&&oe<=v&&(c(oe),m(""))};C.useEffect(()=>{Lg.getLogNames().then(se=>{const oe=se.data;He(oe.log_names||[])}).catch(()=>{})},[]);const is=async se=>{y(!0);try{const oe=await Qn.export({format:se,filters:pe});if(se==="json"){const Pe=new Blob([JSON.stringify(oe.data,null,2)],{type:"application/json"});rs(Pe,`events_export.${se}`)}else{const Pe=new Blob([oe.data],{type:se==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});rs(Pe,`events_export.${se==="excel"?"xlsx":se}`)}}catch(oe){console.error("Export failed:",oe)}finally{y(!1)}},rs=(se,oe)=>{const Pe=URL.createObjectURL(se),st=document.createElement("a");st.href=Pe,st.download=oe,document.body.appendChild(st),st.click(),document.body.removeChild(st),URL.revokeObjectURL(Pe)},Cn=se=>{const oe=String(se).toLowerCase();return oe==="1"||oe==="critical"||oe==="crit"?"level-critical":oe==="2"||oe==="error"?"level-error":oe==="3"||oe==="warning"||oe==="warn"?"level-warning":oe==="4"||oe==="info"?"level-info":oe==="5"||oe==="debug"?"level-debug":""},di=se=>{const oe=String(se);return oe==="1"||oe==="critical"?"Critical":oe==="2"||oe==="error"?"Error":oe==="3"||oe==="warning"||oe==="warn"?"Warning":oe==="4"||oe==="info"?"Info":oe==="5"||oe==="debug"?"Debug":oe};return n.jsxs("div",{className:"events-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Events"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>$(!R),children:R?"Hide Filters":"Show Filters"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",disabled:j,children:j?"...":"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>is("csv"),children:"CSV"}),n.jsx("button",{onClick:()=>is("json"),children:"JSON"}),n.jsx("button",{onClick:()=>is("excel"),children:"Excel"})]})]})]})]}),n.jsxs("div",{className:"search-bar",children:[n.jsxs("div",{className:"search-input-wrapper",children:[n.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(pe==null?void 0:pe.keywords)||"",onChange:se=>qt({...pe,keywords:se.target.value}),onKeyDown:se=>se.key==="Enter"&&Ks()}),n.jsx("button",{className:"search-btn",onClick:Ks,children:"Search"})]}),n.jsxs("div",{className:"keyword-mode-toggle",children:[n.jsx("span",{className:"mode-label",children:"Keywords:"}),n.jsx("button",{className:`mode-btn ${Re==="AND"?"active":""}`,onClick:()=>Ce("AND"),title:"All keywords must match",children:"AND"}),n.jsx("button",{className:`mode-btn ${Re==="OR"?"active":""}`,onClick:()=>Ce("OR"),title:"Any keyword can match",children:"OR"})]})]}),R&&n.jsxs("div",{className:"filters-panel",children:[n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Start Time"}),n.jsx("input",{type:"datetime-local",value:(pe==null?void 0:pe.start_time)||"",onChange:se=>qt({...pe,start_time:se.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"End Time"}),n.jsx("input",{type:"datetime-local",value:(pe==null?void 0:pe.end_time)||"",onChange:se=>qt({...pe,end_time:se.target.value})})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Event IDs"}),n.jsx("input",{type:"text",placeholder:"4624,4625,4672",value:O,onChange:se=>G(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Log Names"}),n.jsxs("select",{value:((En=pe==null?void 0:pe.log_names)==null?void 0:En[0])||"",onChange:se=>{const oe=se.target.value;qt({...pe,log_names:oe?[oe]:[]})},className:"select-input",children:[n.jsx("option",{value:"",children:"All Log Names"}),Me.map(se=>n.jsx("option",{value:se,children:se},se))]})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sources"}),n.jsx("input",{type:"text",placeholder:"Microsoft-Windows-Security-Auditing",value:ae,onChange:se=>E(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Users"}),n.jsx("input",{type:"text",placeholder:"DOMAIN\\User1,DOMAIN\\Admin",value:J,onChange:se=>X(se.target.value),className:"text-input"})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Computers"}),n.jsx("input",{type:"text",placeholder:"WORKSTATION1,SRV01",value:ie,onChange:se=>Z(se.target.value),className:"text-input"})]})]}),n.jsxs("div",{className:"filter-row",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Level"}),n.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(se=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:L.includes(se),onChange:oe=>{oe.target.checked?A([...L,se]):A(L.filter(Pe=>Pe!==se))}}),se]},se))})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort By"}),n.jsxs("select",{value:U,onChange:se=>M(se.target.value),className:"select-input",children:[n.jsx("option",{value:"timestamp",children:"Timestamp"}),n.jsx("option",{value:"event_id",children:"Event ID"}),n.jsx("option",{value:"level",children:"Level"}),n.jsx("option",{value:"source",children:"Source"}),n.jsx("option",{value:"log_name",children:"Log Name"})]})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Sort Order"}),n.jsxs("select",{value:W,onChange:se=>V(se.target.value),className:"select-input",children:[n.jsx("option",{value:"desc",children:"Descending"}),n.jsx("option",{value:"asc",children:"Ascending"})]})]}),n.jsx("div",{className:"filter-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:T,onChange:se=>B(se.target.checked)}),"Use Regex"]})})]}),n.jsxs("div",{className:"filter-actions",children:[n.jsx("button",{onClick:Ks,className:"btn-primary",children:"Apply Filters"}),k&&n.jsx("button",{onClick:kn,className:"btn-secondary",children:"Clear All"})]})]}),k&&n.jsxs("div",{className:"search-info",children:[n.jsxs("span",{className:"search-count",children:["Found ",n.jsx("strong",{children:w.toLocaleString()})," events"]}),P>0&&n.jsxs("span",{className:"query-time",children:["Query time: ",P,"ms"]})]}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:w.toLocaleString()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Current Page"}),n.jsxs("span",{className:"stat-value",children:[o," / ",v]})]})]}),r?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading events..."})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{children:"No events found"})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"table-container",children:n.jsxs("table",{className:"events-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Time"}),n.jsx("th",{children:"Level"}),n.jsx("th",{children:"Event ID"}),n.jsx("th",{children:"Source"}),n.jsx("th",{children:"Computer"}),n.jsx("th",{children:"Message"}),n.jsx("th",{children:"Action"})]})}),n.jsx("tbody",{children:e.map(se=>n.jsxs("tr",{children:[n.jsx("td",{className:"id-cell",children:se.id}),n.jsx("td",{className:"time-cell",children:new Date(se.timestamp).toLocaleString()}),n.jsx("td",{children:n.jsx("span",{className:`level-badge ${Cn(se.level)}`,children:di(se.level)})}),n.jsx("td",{className:"event-id",children:se.event_id}),n.jsxs("td",{className:"source-cell",title:se.source||"",children:[n.jsx("span",{className:"cell-content",children:se.source||"-"}),n.jsx("button",{className:"cell-btn",onClick:oe=>{oe.stopPropagation(),fe(se),be({x:oe.clientX-200,y:oe.clientY+20})},title:"View details",children:"..."})]}),n.jsx("td",{className:"computer-cell",children:se.computer||"-"}),n.jsxs("td",{className:"message-cell",title:se.message||"",children:[n.jsx("span",{className:"cell-content",style:{maxWidth:"280px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block"},children:se.message?se.message.length>50?se.message.substring(0,50)+"...":se.message:"-"}),n.jsx("button",{className:"cell-btn",onClick:oe=>{oe.stopPropagation(),fe(se),be({x:oe.clientX-200,y:oe.clientY+20})},title:"View details",children:"..."})]}),n.jsxs("td",{className:"action-cell",children:[n.jsx("button",{className:"action-copy-btn",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(se,null,2))},title:"Copy all event data",children:"Copy"}),n.jsx("button",{className:"action-detail-btn",onClick:oe=>{fe(se),be({x:oe.clientX-200,y:oe.clientY+20})},title:"View details",children:"..."})]})]},se.id))})]})}),n.jsxs("div",{className:"pagination",children:[n.jsxs("div",{className:"page-size-selector",children:[n.jsx("span",{children:"Show:"}),n.jsxs("select",{value:u,onChange:se=>ci(Number(se.target.value)),className:"select-input",children:[n.jsx("option",{value:10,children:"10"}),n.jsx("option",{value:25,children:"25"}),n.jsx("option",{value:50,children:"50"}),n.jsx("option",{value:100,children:"100"}),n.jsx("option",{value:200,children:"200"})]}),n.jsx("span",{children:"per page"})]}),n.jsxs("div",{className:"page-nav",children:[n.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),n.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{c(se=>se-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),n.jsxs("form",{onSubmit:Sn,className:"page-input-form",children:[n.jsx("input",{type:"number",min:1,max:v,value:p,onChange:se=>m(se.target.value),placeholder:`1-${v}`,className:"page-input"}),n.jsx("button",{type:"submit",className:"page-btn go-btn",children:"Go"})]}),n.jsxs("span",{className:"page-info",children:["Page ",n.jsx("strong",{children:o})," of ",n.jsx("strong",{children:v}),"(",w," total)"]}),n.jsx("button",{className:"page-btn",disabled:o>=v,onClick:()=>{c(se=>se+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),n.jsx("button",{className:"page-btn",disabled:o>=v,onClick:()=>{c(v),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),ce&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"message-float-panel",style:{left:ye.x,top:ye.y,position:"fixed"},children:[n.jsxs("div",{className:"float-panel-header",children:[n.jsx("span",{children:"Event Details"}),n.jsxs("div",{className:"float-panel-actions",children:[n.jsx("button",{className:"float-panel-copy",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(ce,null,2))},children:"Copy"}),ce.raw_xml&&n.jsx("button",{className:"float-panel-formatted",onClick:()=>{const se=(()=>{try{return JSON.stringify(JSON.parse(ce.raw_xml),null,2)}catch{return ce.raw_xml||""}})();navigator.clipboard.writeText(se)},children:"Copy JSON"}),ce.raw_xml&&n.jsx("button",{className:"float-panel-view",onClick:()=>xs(!0),children:"View JSON"}),n.jsx("button",{className:"float-panel-close",onClick:()=>{fe(null),xs(!1)},children:"×"})]})]}),n.jsxs("div",{className:"float-panel-content",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"ID:"})," ",ce.id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Time:"})," ",new Date(ce.timestamp).toLocaleString()]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Level:"})," ",ce.level]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Event ID:"})," ",ce.event_id]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Source:"})," ",ce.source||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Computer:"})," ",ce.computer||"-"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Log Name:"})," ",ce.log_name]}),n.jsx("div",{style:{marginTop:"8px"},children:n.jsx("strong",{children:"Message:"})}),n.jsx("div",{children:ce.message||"-"})]})]}),Vt&&ce.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>xs(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:se=>se.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",ce.id]}),n.jsx("button",{className:"modal-close",onClick:()=>xs(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:(()=>{try{return JSON.stringify(JSON.parse(ce.raw_xml),null,2)}catch{return ce.raw_xml}})()})})]})})]})]}),n.jsx("style",{children:`
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
      `})]})}function Tx({keyName:t,value:e,depth:s,isLast:r,collapsedPaths:l,onToggleCollapse:o}){const c="  ".repeat(s),u=t.startsWith("[")?t:`"${t}"`;if(e&&typeof e=="object"){const m=Array.isArray(e),v=m?e.map((j,y)=>({key:`[${y}]`,value:j})):Object.entries(e).map(([j,y])=>({key:j,value:y})),N=v.length===0,w=`${u}`,b=l.has(w);return N?n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[]":"{}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"json-line json-collapsible",onClick:()=>o(w),children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:m?"[":"{"}),n.jsx("span",{className:"json-collapse-hint",children:b?` ... ${v.length} items }`:""}),!r&&n.jsx("span",{className:"json-punct",children:","}),n.jsx("span",{className:"json-toggle",children:b?"▶":"▼"})]}),!b&&v.map((j,y)=>n.jsx(Tx,{keyName:j.key,value:j.value,depth:s+1,isLast:y===v.length-1,collapsedPaths:l,onToggleCollapse:o},j.key)),!b&&n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-punct",children:m?"]":"}"}),!r&&n.jsx("span",{className:"json-punct",children:","})]})]})}let h="json-string",p=typeof e=="string"?`"${e}"`:String(e);return typeof e=="number"?h="json-number":typeof e=="boolean"?h="json-boolean":e===null&&(h="json-null"),n.jsxs("div",{className:"json-line",children:[c,n.jsx("span",{className:"json-key",children:t}),n.jsx("span",{className:"json-punct",children:": "}),n.jsx("span",{className:h,children:p}),!r&&n.jsx("span",{className:"json-punct",children:","})]})}function bk(t){return["Unknown","Critical","Error","Warning","Info"][t]||"Unknown"}function jk(){const{id:t}=rg(),[e,s]=C.useState(null),[r,l]=C.useState(!0),[o,c]=C.useState(new Set),[u,h]=C.useState(!1);C.useEffect(()=>{t&&(l(!0),Qn.get(Number(t)).then(b=>{s(b.data),l(!1)}).catch(()=>l(!1)))},[t]);const p=C.useCallback(b=>{c(j=>{const y=new Set(j);return y.has(b)?y.delete(b):y.add(b),y})},[]),m=()=>{c(new Set)},v=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=(k,S)=>{if(!k||typeof k!="object")return[];const P=[];return Array.isArray(k)?(k.length>3&&P.push(S),k.forEach((I,R)=>{P.push(...j(k[R],`${S}[${R}]`))})):Object.values(k).forEach((I,R)=>{const $=Object.keys(k)[R];P.push(...j(I,`${S}"${$}"`))}),P},y=j(b,"");c(new Set(y.filter(k=>k.includes("[")||!k.startsWith('"'))))}catch{}},N=()=>{if(e!=null&&e.raw_xml)try{const b=JSON.stringify(JSON.parse(e.raw_xml),null,2);navigator.clipboard.writeText(b)}catch{navigator.clipboard.writeText(e.raw_xml)}};if(r)return n.jsx("div",{children:"Loading..."});if(!e)return n.jsx("div",{children:"Event not found"});let w=null;if(e.raw_xml)try{const b=JSON.parse(e.raw_xml),j=Object.entries(b);w=j.map(([y,k],S)=>n.jsx(Tx,{keyName:y,value:k,depth:0,isLast:S===j.length-1,collapsedPaths:o,onToggleCollapse:p},y))}catch{w=n.jsx("pre",{className:"xml-box",children:e.raw_xml})}return n.jsxs("div",{className:"event-detail",children:[n.jsx(Ge,{to:"/events",children:"← Back to Events"}),n.jsxs("div",{className:"detail-panel",children:[n.jsxs("h3",{children:["Event #",e.id]}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-fields",children:[n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Timestamp:"}),n.jsx("span",{className:"field-value",children:new Date(e.timestamp).toLocaleString()})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Level:"}),n.jsx("span",{className:"field-value",children:bk(e.level)})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Event ID:"}),n.jsx("span",{className:"field-value",children:e.event_id})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Source:"}),n.jsx("span",{className:"field-value",children:e.source})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Log Name:"}),n.jsx("span",{className:"field-value",children:e.log_name})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Computer:"}),n.jsx("span",{className:"field-value",children:e.computer})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User:"}),n.jsx("span",{className:"field-value",children:e.user||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"User SID:"}),n.jsx("span",{className:"field-value",children:e.user_sid||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"Session ID:"}),n.jsx("span",{className:"field-value",children:e.session_id||"N/A"})]}),n.jsxs("div",{className:"detail-field",children:[n.jsx("span",{className:"field-label",children:"IP Address:"}),n.jsx("span",{className:"field-value",children:e.ip_address||"N/A"})]})]}),n.jsxs("div",{className:"detail-actions",children:[e.raw_xml&&n.jsx("button",{className:"btn-action",onClick:()=>h(!0),children:"View JSON"}),e.raw_xml&&n.jsx("button",{className:"btn-action btn-copy",onClick:N,children:"Copy JSON"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"Message:"}),n.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"raw-json-header",children:[n.jsx("label",{children:"Raw JSON:"}),n.jsxs("div",{className:"raw-json-actions",children:[n.jsx("button",{className:"btn-small",onClick:m,children:"Expand All"}),n.jsx("button",{className:"btn-small",onClick:v,children:"Collapse All"})]})]}),n.jsx("div",{className:"json-tree",children:w})]})]}),u&&e.raw_xml&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content modal-large",onClick:b=>b.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("span",{children:["Raw JSON - Event #",e.id]}),n.jsxs("div",{className:"modal-header-actions",children:[n.jsx("button",{className:"btn-small",onClick:N,children:"Copy"}),n.jsx("button",{className:"modal-close",onClick:()=>h(!1),children:"×"})]})]}),n.jsx("div",{className:"modal-body",children:n.jsx("pre",{className:"json-large",children:JSON.stringify(JSON.parse(e.raw_xml),null,2)})})]})}),n.jsx("style",{children:`
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
      `})]})}function Nk(){const{t}=at(),e=Qs(),[s,r]=C.useState([]),[l,o]=C.useState(!0),[c,u]=C.useState(1),[h,p]=C.useState(""),[m,v]=C.useState([]),[N,w]=C.useState(!1),[b,j]=C.useState(!1),[y,k]=C.useState(null);C.useEffect(()=>{o(!0),ps.list(c,50,h||void 0).then(M=>{const W=M.data;r(W.alerts||[]),o(!1)}).catch(()=>o(!1))},[c,h]);const S=M=>{ps.resolve(M,"Resolved via Web UI").then(()=>{r(s.map(W=>W.id===M?{...W,resolved:!0}:W))})},P=M=>{const W=prompt("Enter reason for marking as false positive:");W&&ps.markFalsePositive(M,W).then(()=>{r(s.filter(V=>V.id!==M)),v(V=>V.filter(ae=>ae!==M))}).catch(V=>{console.error("Failed to mark as false positive:",V)})},I=M=>{confirm(t("alerts.confirmDelete"))&&ps.delete(M).then(()=>{r(s.filter(W=>W.id!==M)),v(W=>W.filter(V=>V!==M))}).catch(W=>{console.error("Failed to delete alert:",W)})},R=M=>{m.length!==0&&ps.batchAction(m,M).then(()=>{M==="resolve"?r(s.map(W=>m.includes(W.id)?{...W,resolved:!0}:W)):M==="delete"&&r(s.filter(W=>!m.includes(W.id))),v([])}).catch(W=>{console.error("Batch action failed:",W)})},$=M=>{v(W=>W.includes(M)?W.filter(V=>V!==M):[...W,M])},L=()=>{m.length===s.length?v([]):v(s.map(M=>M.id))},A=()=>{m.forEach(M=>{ps.resolve(M,"Batch resolved via Web UI")}),r(s.map(M=>m.includes(M.id)?{...M,resolved:!0}:M)),v([])},T=()=>{j(!0),k(null),ps.runAnalysis().then(M=>{const W=M.data;k(W),j(!1)}).catch(M=>{var W,V;console.error("Analysis failed:",M),j(!1),k({success:!1,alerts_created:0,events_analyzed:0,rules_executed:0,duration:"0s",errors:[((V=(W=M.response)==null?void 0:W.data)==null?void 0:V.error)||"Analysis failed"]})})},B=M=>{switch(M){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},U={total:s.length,critical:s.filter(M=>M.severity==="critical").length,high:s.filter(M=>M.severity==="high").length,medium:s.filter(M=>M.severity==="medium").length,low:s.filter(M=>M.severity==="low").length};return n.jsxs("div",{className:"alerts-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("alerts.title")}),n.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-analyze",onClick:()=>w(!0),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"}),n.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),n.jsxs("div",{className:"alerts-stats-grid",children:[n.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:U.total}),n.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),n.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:U.critical}),n.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),n.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:U.high}),n.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),n.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[n.jsx("span",{className:"stat-icon",children:"🟡"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:U.medium}),n.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),n.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[n.jsx("span",{className:"stat-icon",children:"🟢"}),n.jsxs("div",{className:"stat-info",children:[n.jsx("span",{className:"stat-value",children:U.low}),n.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),n.jsxs("div",{className:"alerts-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("select",{className:"severity-select",value:h,onChange:M=>p(M.target.value),children:[n.jsx("option",{value:"",children:t("alerts.allSeverities")}),n.jsx("option",{value:"critical",children:t("dashboard.critical")}),n.jsx("option",{value:"high",children:t("dashboard.high")}),n.jsx("option",{value:"medium",children:t("dashboard.medium")}),n.jsx("option",{value:"low",children:t("dashboard.low")})]})}),n.jsx("div",{className:"toolbar-right",children:m.length>0&&n.jsxs("div",{className:"batch-actions",children:[n.jsxs("span",{className:"selected-count",children:[m.length," selected"]}),n.jsx("button",{className:"btn-batch-resolve",onClick:A,children:t("alerts.resolveSelected")}),n.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>R("false-positive"),children:t("alerts.markFalsePositive")}),n.jsx("button",{className:"btn-batch-delete",onClick:()=>R("delete"),children:t("common.delete")})]})})]}),l?n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]}):n.jsxs("div",{className:"alerts-table-container",children:[n.jsxs("table",{className:"alerts-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.length===s.length&&s.length>0,onChange:L})}),n.jsx("th",{children:"ID"}),n.jsx("th",{children:t("alerts.severity")}),n.jsx("th",{children:t("alerts.rule")}),n.jsx("th",{children:t("alerts.message")}),n.jsx("th",{children:t("alerts.count")}),n.jsx("th",{children:t("alerts.status")}),n.jsx("th",{children:t("alerts.actions")})]})}),n.jsx("tbody",{children:s.map(M=>{var W;return n.jsxs("tr",{className:m.includes(M.id)?"selected":"",children:[n.jsx("td",{className:"checkbox-col",children:n.jsx("input",{type:"checkbox",checked:m.includes(M.id),onChange:()=>$(M.id)})}),n.jsx("td",{className:"id-col",children:M.id}),n.jsx("td",{children:n.jsx("span",{className:`badge ${B(M.severity)}`,children:M.severity})}),n.jsx("td",{className:"rule-col",children:M.rule_name}),n.jsxs("td",{className:"message-col",children:[(W=M.message)==null?void 0:W.substring(0,100),"..."]}),n.jsx("td",{className:"count-col",children:M.count}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${M.resolved?"resolved":"active"}`,children:M.resolved?t("alerts.resolved"):t("alerts.active")})}),n.jsxs("td",{className:"actions-col",children:[n.jsx("button",{className:"btn-action btn-detail",onClick:()=>e(`/alerts/${M.id}`),children:t("alerts.detail")}),!M.resolved&&n.jsx("button",{className:"btn-action btn-resolve",onClick:()=>S(M.id),children:t("alerts.resolve")}),n.jsx("button",{className:"btn-action btn-falsepositive",onClick:()=>P(M.id),children:t("alerts.falsePositive")}),n.jsx("button",{className:"btn-action btn-delete",onClick:()=>I(M.id),children:t("common.delete")})]})]},M.id)})})]}),s.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"🛡️"}),n.jsx("p",{children:t("alerts.noAlerts")})]})]}),N&&n.jsx("div",{className:"modal-overlay",onClick:()=>{w(!1),k(null)},children:n.jsxs("div",{className:"modal-content",onClick:M=>M.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("alerts.runAnalysis")}),n.jsx("button",{className:"close-btn",onClick:()=>{w(!1),k(null)},children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[!b&&!y&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),n.jsxs("div",{className:"analysis-summary",children:[n.jsx("h4",{children:t("alerts.analysisSummary")}),n.jsxs("ul",{children:[n.jsxs("li",{children:[t("alerts.analysisTarget"),": ",t("alerts.allEvents")]}),n.jsxs("li",{children:[t("alerts.analysisScope"),": ",t("alerts.allEnabledRules")]})]})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-cancel",onClick:()=>{w(!1),k(null)},children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:T,children:n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]}),b&&n.jsxs("div",{className:"analyzing-state",children:[n.jsx("div",{className:"analyzing-spinner"}),n.jsx("p",{children:t("alerts.analyzing")}),n.jsx("p",{className:"analyzing-hint",children:t("alerts.analyzingHint")})]}),y&&n.jsxs("div",{className:"analysis-result",children:[n.jsxs("div",{className:`result-header ${y.success?"success":"error"}`,children:[y.success?"✓":"✗"," ",y.success?"Analysis Complete":"Analysis Failed"]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.alertsCreated")}),n.jsx("span",{className:"stat-value",children:y.alerts_created})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.eventsAnalyzed")}),n.jsx("span",{className:"stat-value",children:y.events_analyzed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.rulesExecuted")}),n.jsx("span",{className:"stat-value",children:y.rules_executed})]}),n.jsxs("div",{className:"result-stat",children:[n.jsx("span",{className:"stat-label",children:t("alerts.duration")}),n.jsx("span",{className:"stat-value",children:y.duration})]})]}),y.errors&&y.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("h4",{children:"Errors:"}),n.jsx("ul",{children:y.errors.map((M,W)=>n.jsx("li",{children:M},W))})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-primary",onClick:()=>{w(!1),k(null),e("/alerts")},children:t("common.done")})})]})]})]})})]})}function wk(){const{id:t}=rg(),e=Qs(),[s,r]=C.useState(null),[l,o]=C.useState(!0),[c,u]=C.useState(""),[h,p]=C.useState(!1);C.useEffect(()=>{t&&(o(!0),ps.get(Number(t)).then(b=>{r(b.data),o(!1)}).catch(()=>o(!1)))},[t]);const m=async()=>{if(s){p(!0);try{await ps.resolve(s.id,c),r({...s,resolved:!0,resolved_time:new Date().toISOString(),notes:c})}catch(b){console.error("Failed to resolve:",b)}finally{p(!1)}}},v=async()=>{if(s){p(!0);try{await ps.markFalsePositive(s.id,c),r({...s,false_positive:!0,notes:c})}catch(b){console.error("Failed to mark false positive:",b)}finally{p(!1)}}},N=()=>{if(!s)return;const b=new URLSearchParams;s.event_ids&&s.event_ids.length>0&&b.set("event_ids",s.event_ids.join(",")),s.keywords&&b.set("keywords",s.keywords),e(`/events?${b.toString()}`)};if(l)return n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading..."})]});if(!s)return n.jsx("div",{className:"alert-not-found",children:"Alert not found"});const w=b=>{switch(b){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return n.jsxs("div",{className:"alert-detail",children:[n.jsx(Ge,{to:"/alerts",className:"back-link",children:"← 返回告警列表"}),n.jsxs("div",{className:"detail-layout",children:[n.jsxs("div",{className:"detail-main",children:[n.jsxs("div",{className:"detail-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsxs("h3",{children:["告警 #",s.id]}),n.jsxs("div",{className:"status-badges",children:[n.jsx("span",{className:`badge ${w(s.severity)}`,children:s.severity.toUpperCase()}),s.resolved&&n.jsx("span",{className:"badge resolved",children:"已解决"}),s.false_positive&&n.jsx("span",{className:"badge false-positive",children:"误报"})]})]}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"规则名称:"}),n.jsx("span",{className:"rule-name",children:s.rule_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"威胁评分:"}),n.jsx("span",{className:"score-value",children:s.rule_score.toFixed(2)})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"日志名称:"}),n.jsx("span",{children:s.log_name})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"触发次数:"}),n.jsx("span",{children:s.count})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"首次出现:"}),n.jsx("span",{children:new Date(s.first_seen).toLocaleString()})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("label",{children:"最后出现:"}),n.jsx("span",{children:new Date(s.last_seen).toLocaleString()})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"触发事件ID:"}),n.jsx("div",{className:"event-ids",children:s.event_ids&&s.event_ids.length>0?s.event_ids.map((b,j)=>n.jsx("span",{className:"event-id-badge",children:b},j)):n.jsx("span",{className:"no-data",children:"无"})})]}),s.keywords&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"匹配关键字:"}),n.jsx("div",{className:"keywords",children:s.keywords.split(" ").filter(b=>b).map((b,j)=>n.jsx("span",{className:"keyword-badge",children:b},j))})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"告警消息:"}),n.jsx("pre",{className:"message-box",children:s.message})]}),s.mitre_attack&&s.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("label",{children:"MITRE ATT&CK:"}),n.jsx("div",{className:"mitre-tags",children:s.mitre_attack.map((b,j)=>n.jsx("span",{className:"mitre-tag",children:b},j))})]})]}),s.explanation&&n.jsxs("div",{className:"detail-panel explanation-panel",children:[n.jsx("h4",{children:"规则解读"}),n.jsx("p",{className:"explanation-text",children:s.explanation})]}),s.recommendation&&n.jsxs("div",{className:"detail-panel recommendation-panel",children:[n.jsx("h4",{children:"处置建议"}),n.jsx("div",{className:"recommendation-text",children:s.recommendation.split(`
`).filter(b=>b).map((b,j)=>n.jsx("p",{children:b},j))})]}),s.real_case&&n.jsxs("div",{className:"detail-panel case-panel",children:[n.jsx("h4",{children:"真实案例"}),n.jsx("p",{className:"case-text",children:s.real_case})]}),s.matched_events&&s.matched_events.length>0&&n.jsxs("div",{className:"detail-panel events-panel",children:[n.jsxs("h4",{children:["关联日志 (",s.matched_events.length,")"]}),n.jsx("div",{className:"events-list",children:s.matched_events.map(b=>n.jsxs("div",{className:"event-item",children:[n.jsxs("div",{className:"event-header",children:[n.jsxs("span",{className:"event-id",children:["Event ID: ",b.event_id]}),n.jsx("span",{className:"event-time",children:new Date(b.timestamp).toLocaleString()}),n.jsx("span",{className:`event-level level-${b.level.toLowerCase()}`,children:b.level})]}),n.jsxs("div",{className:"event-source",children:["来源: ",b.source]}),n.jsxs("div",{className:"event-computer",children:["计算机: ",b.computer]}),n.jsx("div",{className:"event-message",children:b.message})]},b.id))})]})]}),n.jsx("div",{className:"detail-sidebar",children:n.jsxs("div",{className:"sidebar-panel",children:[n.jsx("h4",{children:"操作"}),!s.resolved&&!s.false_positive&&n.jsxs(n.Fragment,{children:[n.jsx("textarea",{placeholder:"添加备注...",value:c,onChange:b=>u(b.target.value),rows:3}),n.jsx("button",{onClick:m,disabled:h,className:"btn-action btn-resolve",children:"标记为已解决"}),n.jsx("button",{onClick:v,disabled:h,className:"btn-action btn-falsepositive",children:"标记为误报"})]}),n.jsx("button",{onClick:N,className:"btn-action btn-search",children:"搜索关联事件"}),s.notes&&n.jsxs("div",{className:"notes-section",children:[n.jsx("label",{children:"备注:"}),n.jsx("pre",{className:"notes-box",children:s.notes})]})]})})]}),n.jsx("style",{children:`
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
      `})]})}function _k(){const{t}=at(),e=Qs(),[s,r]=C.useState([]),[l,o]=C.useState(!0),[c,u]=C.useState("all"),[h,p]=C.useState(""),[m,v]=C.useState(""),[N,w]=C.useState(""),[b,j]=C.useState(""),y=()=>{o(!0);let T,B;h&&m?T=new Date(`${h}T${m}:00Z`).toISOString():h&&(T=new Date(`${h}T00:00:00Z`).toISOString()),N&&b?B=new Date(`${N}T${b}:59Z`).toISOString():N&&(B=new Date(`${N}T23:59:59Z`).toISOString()),Rd.get(1e3,T,B).then(U=>{const M=U.data;r(M.entries||[]),o(!1)}).catch(()=>o(!1))};C.useEffect(()=>{y()},[]);const k=()=>{y()},S=()=>{p(""),v(""),w(""),j(""),y()},P=(T,B)=>{if(T==="alert")switch(B){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},I=(T,B)=>{if(T==="alert")switch(B){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},R=T=>T==="alert"?"ALERT":"EVENT",$=s.filter(T=>c==="all"?!0:c==="events"?T.type==="event":c==="alerts"?T.type==="alert":!0),L={eventCount:$.filter(T=>T.type==="event").length,alertCount:$.filter(T=>T.type==="alert").length},A=T=>{Rd.deleteAlert(T).then(()=>{r(s.filter(B=>!(B.type==="alert"&&B.alert_id===T)))}).catch(B=>console.error("Failed to delete alert:",B))};return l?n.jsx("div",{className:"timeline-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:t("common.loading")})]})}):n.jsxs("div",{className:"timeline-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("timeline.title")}),n.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),n.jsx("div",{className:"header-actions",children:n.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),n.jsxs("div",{className:"timeline-stats-cards",children:[n.jsxs("div",{className:"stat-card events",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:L.eventCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill events",style:{width:`${L.eventCount+L.alertCount>0?L.eventCount/(L.eventCount+L.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card alerts",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:L.alertCount}),n.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),n.jsx("div",{className:"stat-bar",children:n.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${L.alertCount>0?L.alertCount/(L.eventCount+L.alertCount)*100:0}%`}})})]}),n.jsxs("div",{className:"stat-card ratio",children:[n.jsx("div",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsxs("span",{className:"stat-value",children:[L.eventCount+L.alertCount>0?(L.alertCount/(L.eventCount+L.alertCount)*100).toFixed(1):0,"%"]}),n.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),n.jsxs("div",{className:"timeline-toolbar",children:[n.jsx("div",{className:"toolbar-left",children:n.jsxs("div",{className:"filter-tabs",children:[n.jsxs("button",{className:`filter-tab ${c==="all"?"active":""}`,onClick:()=>u("all"),children:[t("timeline.all"),n.jsx("span",{className:"count",children:L.eventCount+L.alertCount})]}),n.jsxs("button",{className:`filter-tab ${c==="events"?"active":""}`,onClick:()=>u("events"),children:[t("timeline.eventsOnly"),n.jsx("span",{className:"count events",children:L.eventCount})]}),n.jsxs("button",{className:`filter-tab ${c==="alerts"?"active":""}`,onClick:()=>u("alerts"),children:[t("timeline.alertsOnly"),n.jsx("span",{className:"count alerts",children:L.alertCount})]})]})}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("div",{className:"datetime-filter",children:[n.jsx("input",{type:"date",value:h,onChange:T=>p(T.target.value),placeholder:"Start date"}),n.jsx("input",{type:"time",value:m,onChange:T=>v(T.target.value),placeholder:"Start time"}),n.jsx("span",{className:"datetime-separator",children:"-"}),n.jsx("input",{type:"date",value:N,onChange:T=>w(T.target.value),placeholder:"End date"}),n.jsx("input",{type:"time",value:b,onChange:T=>j(T.target.value),placeholder:"End time"}),n.jsx("button",{className:"btn-apply-filter",onClick:k,children:t("common.apply")}),n.jsx("button",{className:"btn-clear-filter",onClick:S,children:t("common.clear")})]})})]}),n.jsx("div",{className:"timeline-container",children:$.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("span",{className:"empty-icon",children:"📭"}),n.jsx("p",{children:t("timeline.noEntries")})]}):n.jsx("div",{className:"timeline",children:$.map((T,B)=>n.jsxs("div",{className:`timeline-item ${T.type}`,children:[n.jsxs("div",{className:"timeline-marker",style:{"--marker-color":I(T.type,T.severity)},children:[n.jsx("div",{className:"marker-dot"}),n.jsx("div",{className:"marker-line"})]}),n.jsxs("div",{className:"timeline-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"card-left",children:[n.jsx("span",{className:"card-icon",children:P(T.type,T.severity)}),n.jsx("span",{className:`timeline-type ${T.type}`,style:{color:I(T.type,T.severity)},children:R(T.type)}),T.type==="event"&&T.event_id&&n.jsxs("span",{className:"event-id-badge",children:["Event ",T.event_id]}),T.type==="event"&&T.computer&&n.jsx("span",{className:"computer-badge",children:T.computer}),T.type==="alert"&&T.severity&&n.jsx("span",{className:`severity-badge ${T.severity}`,style:{background:`${I(T.type,T.severity)}20`,color:I(T.type,T.severity)},children:T.severity.toUpperCase()})]}),n.jsx("span",{className:"card-time",children:new Date(T.timestamp).toLocaleString()})]}),n.jsx("p",{className:"card-message",children:T.message}),T.type==="alert"&&T.rule_name&&n.jsxs("div",{className:"card-meta",children:[n.jsxs("span",{className:"rule-badge",children:[n.jsx("span",{className:"rule-icon",children:"📌"}),T.rule_name]}),T.mitre_attack&&T.mitre_attack.length>0&&n.jsxs("span",{className:"mitre-badge",children:[n.jsx("span",{className:"mitre-icon",children:"🎯"}),T.mitre_attack.join(", ")]})]}),T.type==="alert"&&T.alert_id&&n.jsxs("div",{className:"card-actions",children:[n.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${T.alert_id}`),children:t("timeline.viewDetails")}),n.jsx("button",{className:"btn-delete",onClick:()=>T.alert_id&&A(T.alert_id),children:t("timeline.delete")})]})]})]},`${T.type}-${T.id}-${B}`))})})]})}function kk(){const{t}=at(),[e,s]=C.useState(!1),[r,l]=C.useState("security"),[o,c]=C.useState("html"),[u,h]=C.useState("7d"),[p,m]=C.useState([]),[v,N]=C.useState(null),[w,b]=C.useState(null);C.useEffect(()=>{Dr.list().then(R=>m(R.data.reports)).catch(console.error)},[]);const j=async()=>{s(!0),b(null);try{const R=new Date,$=new Date;switch(u){case"24h":$.setHours($.getHours()-24);break;case"7d":$.setDate($.getDate()-7);break;case"30d":$.setDate($.getDate()-30);break;case"90d":$.setDate($.getDate()-90);break}await Dr.generate({type:r,format:o,start_time:$.toISOString(),end_time:R.toISOString()}),N(new Date().toLocaleString());const A=(await Dr.list()).data.reports||[];if(m(A),A.length>0){const T=A[0];confirm(`Report generated successfully!

Report: ${T.name}
Type: ${T.type}
Format: ${T.format}

Click OK to download now, or Cancel to view in reports list.`)&&k(T)}}catch(R){console.error("Report generation failed:",R),b("Failed to generate report. Please try again.")}finally{s(!1)}},y=async R=>{try{const $=await Dr.get(R.id);if($.data.content){const L=window.open("","_blank");L&&(R.format==="html"?(L.document.write($.data.content),L.document.close()):(L.document.write(`<pre>${JSON.stringify($.data,null,2)}</pre>`),L.document.close()))}else alert("Report content not available")}catch($){console.error("Failed to view report:",$),alert("Failed to view report")}},k=async R=>{try{const $=await Dr.download(R.id),L=new Blob([$.data],{type:$.headers["content-type"]||"application/octet-stream"}),A=URL.createObjectURL(L),T=document.createElement("a");T.href=A,T.download=`${R.name||R.id}.${R.format}`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(A)}catch($){console.error("Failed to download report:",$),alert("Failed to download report")}},S=R=>R<1024?R+" B":R<1024*1024?(R/1024).toFixed(1)+" KB":(R/(1024*1024)).toFixed(1)+" MB",P=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],I=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return n.jsxs("div",{className:"reports-page",children:[n.jsx("h2",{children:t("reports.title")}),n.jsxs("div",{className:"reports-grid",children:[n.jsxs("div",{className:"reports-card main-config",children:[n.jsx("h3",{children:t("reports.generateReport")}),n.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Report Type"}),n.jsx("div",{className:"type-grid",children:P.map(R=>n.jsxs("div",{className:`type-option ${r===R.value?"selected":""}`,onClick:()=>l(R.value),children:[n.jsx("div",{className:"type-icon",children:R.icon}),n.jsx("div",{className:"type-label",children:R.label})]},R.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Output Format"}),n.jsx("div",{className:"format-row",children:I.map(R=>n.jsxs("div",{className:`format-option ${o===R.value?"selected":""}`,onClick:()=>c(R.value),children:[n.jsx("div",{className:"format-icon",children:R.icon}),n.jsx("div",{className:"format-label",children:R.label})]},R.value))})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("label",{className:"section-label",children:"Time Range"}),n.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(R=>n.jsxs("button",{className:`range-btn ${u===R?"active":""}`,onClick:()=>h(R),children:[R==="24h"&&"Last 24 Hours",R==="7d"&&"Last 7 Days",R==="30d"&&"Last 30 Days",R==="90d"&&"Last 90 Days"]},R))})]}),w&&n.jsxs("div",{className:"error-message",children:["⚠️ ",w]}),n.jsx("button",{className:"btn-primary generate-btn",onClick:j,disabled:e,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):n.jsxs(n.Fragment,{children:["📊 ",t("reports.generate")]})}),v&&n.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",v]})]}),n.jsxs("div",{className:"reports-card stats-card",children:[n.jsx("h3",{children:"Report Statistics"}),n.jsxs("div",{className:"stats-preview",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"📁"}),n.jsx("div",{className:"stat-value",children:p.length}),n.jsx("div",{className:"stat-label",children:"Total Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🛡️"}),n.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="security").length}),n.jsx("div",{className:"stat-label",children:"Security Reports"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("div",{className:"stat-icon",children:"🚨"}),n.jsx("div",{className:"stat-value",children:p.filter(R=>R.type==="alert").length}),n.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),n.jsxs("div",{className:"chart-placeholder",children:[n.jsx("div",{className:"chart-label",children:"Reports by Type"}),n.jsxs("div",{className:"mini-chart",children:[n.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),n.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),n.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),n.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),n.jsxs("div",{className:"reports-card full-width",children:[n.jsx("h3",{children:t("reports.recentReports")}),p.length>0?n.jsx("div",{className:"reports-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Report Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Format"}),n.jsx("th",{children:"Generated"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:p.map(R=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsxs("div",{className:"report-name",children:[n.jsxs("span",{className:"report-icon",children:[R.type==="security"&&"🛡️",R.type==="alert"&&"🚨",R.type==="timeline"&&"📊",R.type==="compliance"&&"📋"]}),R.name]})}),n.jsx("td",{children:n.jsx("span",{className:`type-badge ${R.type}`,children:R.type})}),n.jsx("td",{children:n.jsx("span",{className:"format-badge",children:R.format.toUpperCase()})}),n.jsx("td",{children:new Date(R.generated_at).toLocaleString()}),n.jsx("td",{children:S(R.size)}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>y(R),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>k(R),children:"Download"})]})]},R.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📊"}),n.jsx("div",{className:"empty-text",children:t("reports.noReports")}),n.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),n.jsx("style",{children:`
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
      `})]})}function Sk(){const{t}=at(),[e,s]=C.useState(!1),[r,l]=C.useState(""),[o,c]=C.useState(""),[u,h]=C.useState(null),[p,m]=C.useState(!1),[v,N]=C.useState(!1),[w,b]=C.useState([]),[j,y]=C.useState(""),[k,S]=C.useState(["eventlogs","registry","prefetch"]),[P,I]=C.useState([]),[R,$]=C.useState(!1);C.useEffect(()=>{L(),A()},[]);const L=()=>{Hn.listEvidence().then(E=>{E.data&&Array.isArray(E.data)&&b(E.data)}).catch(E=>console.error("Failed to load evidence:",E))},A=()=>{Hn.chainOfCustody().then(E=>{E.data&&Array.isArray(E.data)&&I(E.data)}).catch(E=>console.error("Failed to load chain of custody:",E))},T=async()=>{var E,J;if(o.trim()){N(!0);try{const X=await Hn.calculateHash(o);l(X.data.hash||"")}catch(X){console.error("Failed to calculate hash:",X),alert("Failed to calculate hash: "+(((J=(E=X.response)==null?void 0:E.data)==null?void 0:J.error)||X.message))}finally{N(!1)}}},B=async()=>{s(!0),y("starting");try{for(const E of k)y(`collecting:${E}`),await Hn.collect(E,`/tmp/forensics_${E}`);L(),A(),y("completed")}catch(E){console.error("Collection failed:",E),y("error")}finally{s(!1)}},U=async()=>{var E,J;if(!(!r.trim()||!o.trim())){m(!0),h(null);try{const X=await Hn.verifyHash(o,r);h({verified:X.data.match||!1,expected:r,actual:X.data.actual||r,path:o})}catch(X){h({verified:!1,expected:r,actual:((J=(E=X.response)==null?void 0:E.data)==null?void 0:J.error)||"Hash verification failed",path:o})}finally{m(!1)}}},M=E=>{S(J=>J.includes(E)?J.filter(X=>X!==E):[...J,E])},W=async E=>{try{const J=await Hn.getEvidence(E.id);if(J.data.content){const X=window.open("","_blank");X&&(X.document.write(`<pre>${JSON.stringify(J.data,null,2)}</pre>`),X.document.close())}else alert("Evidence content not available")}catch(J){console.error("Failed to view evidence:",J),alert("Failed to view evidence")}},V=async E=>{try{const J=await Hn.exportEvidence(E.id,"json"),X=new Blob([J.data],{type:J.headers["content-type"]||"application/octet-stream"}),ie=URL.createObjectURL(X),Z=document.createElement("a");Z.href=ie,Z.download=`evidence_${E.type}_${E.id}.json`,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(ie)}catch(J){console.error("Failed to export evidence:",J),alert("Failed to export evidence")}},ae=E=>E<1024?E+" B":E<1024*1024?(E/1024).toFixed(1)+" KB":(E/(1024*1024)).toFixed(1)+" MB";return n.jsxs("div",{className:"forensics-page",children:[n.jsx("h2",{children:t("forensics.title")}),n.jsxs("div",{className:"forensics-grid",children:[n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.evidenceCollection")}),n.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),n.jsxs("div",{className:"collection-types",children:[n.jsxs("div",{className:"type-item",onClick:()=>M("eventlogs"),children:[n.jsx("div",{className:`type-checkbox ${k.includes("eventlogs")?"checked":""}`,children:k.includes("eventlogs")&&"✓"}),n.jsx("div",{className:"type-icon",children:"📋"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),n.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>M("registry"),children:[n.jsx("div",{className:`type-checkbox ${k.includes("registry")?"checked":""}`,children:k.includes("registry")&&"✓"}),n.jsx("div",{className:"type-icon",children:"🔧"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.registry")}),n.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>M("memory"),children:[n.jsx("div",{className:`type-checkbox ${k.includes("memory")?"checked":""}`,children:k.includes("memory")&&"✓"}),n.jsx("div",{className:"type-icon",children:"💾"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),n.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),n.jsxs("div",{className:"type-item",onClick:()=>M("prefetch"),children:[n.jsx("div",{className:`type-checkbox ${k.includes("prefetch")?"checked":""}`,children:k.includes("prefetch")&&"✓"}),n.jsx("div",{className:"type-icon",children:"⚡"}),n.jsxs("div",{className:"type-info",children:[n.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),n.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),j&&n.jsxs("div",{className:`collect-status ${j}`,children:[j==="starting"&&"📡 Initializing collection...",j.startsWith("collecting:")&&`🔍 Collecting ${j.split(":")[1]}...`,j==="completed"&&"✅ Collection completed",j==="error"&&"❌ Collection failed"]}),n.jsx("button",{className:"btn-primary forensics-btn",onClick:B,disabled:e||k.length===0,children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):n.jsxs(n.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),n.jsxs("div",{className:"forensics-card",children:[n.jsx("h3",{children:t("forensics.hashVerification")}),n.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),n.jsxs("div",{className:"hash-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"File Path"}),n.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:o,onChange:E=>c(E.target.value)})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expected SHA256 Hash"}),n.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:r,onChange:E=>l(E.target.value)})]}),n.jsx("button",{className:"btn-secondary",onClick:T,disabled:v||!o.trim(),children:v?"Calculating...":"Calculate Hash"}),n.jsx("button",{className:"btn-secondary",onClick:U,disabled:p||!r.trim()||!o.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&n.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[n.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),n.jsxs("div",{className:"result-content",children:[n.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),n.jsxs("div",{className:"result-details",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"File:"})," ",u.path]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Expected:"})," ",n.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Actual:"})," ",n.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),n.jsxs("div",{className:"forensics-card full-width",children:[n.jsxs("div",{className:"section-header",children:[n.jsxs("div",{children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),n.jsx("button",{className:"btn-secondary",onClick:()=>$(!0),children:"View Full Chain"})]}),w.length>0?n.jsx("div",{className:"evidence-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Collected At"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"}),n.jsx("th",{children:"Hash"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:w.map(E=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"evidence-type",children:E.type})}),n.jsx("td",{children:new Date(E.collected_at).toLocaleString()}),n.jsx("td",{children:n.jsx("code",{className:"evidence-path",children:E.path})}),n.jsx("td",{children:ae(E.size)}),n.jsx("td",{children:n.jsxs("code",{className:"evidence-hash",children:[E.hash.substring(0,16),"..."]})}),n.jsxs("td",{children:[n.jsx("button",{className:"btn-small",onClick:()=>W(E),children:"View"}),n.jsx("button",{className:"btn-small",onClick:()=>V(E),children:"Export"})]})]},E.id))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📦"}),n.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),n.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),R&&n.jsx("div",{className:"modal-overlay",onClick:()=>$(!1),children:n.jsxs("div",{className:"modal-content chain-modal",onClick:E=>E.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:t("forensics.chainOfCustody")}),n.jsx("button",{className:"close-btn",onClick:()=>$(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:P.length>0?n.jsx("div",{className:"chain-timeline",children:P.map((E,J)=>n.jsxs("div",{className:"chain-entry",children:[n.jsx("div",{className:"chain-dot",children:J+1}),n.jsxs("div",{className:"chain-content",children:[n.jsx("div",{className:"chain-action",children:E.action}),n.jsx("div",{className:"chain-details",children:E.details}),n.jsxs("div",{className:"chain-meta",children:[n.jsx("span",{className:"chain-time",children:new Date(E.timestamp).toLocaleString()}),E.user&&n.jsxs("span",{className:"chain-user",children:["by ",E.user]})]})]})]},E.id))}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📋"}),n.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),n.jsx("style",{children:`
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
      `})]})}function Ck(){var M,W;const{t}=at(),[e,s]=C.useState("system"),[r,l]=C.useState(null),[o,c]=C.useState([]),[u,h]=C.useState([]),[p,m]=C.useState([]),[v,N]=C.useState([]),[w,b]=C.useState([]),[j,y]=C.useState(!0),[k,S]=C.useState(null);C.useEffect(()=>{P()},[]);const P=()=>{y(!0),Kn.getInfo().then(V=>{l(V.data),y(!1)}).catch(V=>{S(V.message||t("common.error")),y(!1)})},I=()=>{o.length>0||(y(!0),Kn.getProcesses(50).then(V=>{c(V.data.processes||[]),y(!1)}).catch(()=>y(!1)))},R=()=>{u.length>0||(y(!0),Kn.getNetwork(50).then(V=>{h(V.data.connections||[]),y(!1)}).catch(()=>y(!1)))},$=()=>{p.length>0||(y(!0),Kn.getEnvVariables().then(V=>{m(V.data.variables||[]),y(!1)}).catch(()=>y(!1)))},L=()=>{v.length>0||(y(!0),Kn.getLoadedDLLs(100).then(V=>{N(V.data.modules||[]),y(!1)}).catch(()=>y(!1)))},A=()=>{w.length>0||(y(!0),Kn.getDrivers().then(V=>{b(V.data.drivers||[]),y(!1)}).catch(()=>y(!1)))},T=V=>{s(V),V==="processes"&&I(),V==="network"&&R(),V==="env"&&$(),V==="dlls"&&L(),V==="drivers"&&A()},B=V=>{const ae=Math.floor(V/86400),E=Math.floor(V%86400/3600),J=Math.floor(V%3600/60);return ae>0?`${ae}d ${E}h ${J}m`:E>0?`${E}h ${J}m`:`${J}m`},U=V=>{switch(V==null?void 0:V.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return j&&!r?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})}):k?n.jsx("div",{className:"systeminfo-page",children:n.jsxs("div",{className:"error-state",children:["Error: ",k]})}):n.jsxs("div",{className:"systeminfo-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("systemInfo.title")}),n.jsx("div",{className:"header-actions",children:n.jsx("button",{className:"btn-refresh",onClick:P,children:"Refresh"})})]}),n.jsxs("div",{className:"tab-nav",children:[n.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>T("system"),children:"System"}),n.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>T("processes"),children:["Processes (",o.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>T("network"),children:["Network (",u.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>T("env"),children:["Env (",p.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>T("dlls"),children:["DLLs (",v.length||"...",")"]}),n.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>T("drivers"),children:["Drivers (",w.length||"...",")"]})]}),e==="system"&&r&&n.jsxs("div",{className:"system-grid",children:[n.jsxs("div",{className:"system-card os-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"OS"}),n.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),n.jsxs("div",{className:"system-status",children:[n.jsx("div",{className:"status-indicator online"}),n.jsx("span",{children:"System Online"})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),n.jsx("span",{className:"info-value highlight",children:r.hostname||"N/A"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),n.jsx("span",{className:"info-value",children:r.domain||"WORKGROUP"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),n.jsx("span",{className:"info-value",children:r.os_name||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),n.jsx("span",{className:"info-value",children:r.os_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),n.jsx("span",{className:"info-value badge",children:r.architecture||"x64"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),n.jsx("span",{className:"info-value",children:r.timezone||"UTC"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),n.jsx("span",{className:`info-value badge ${r.is_admin?"admin":"user"}`,children:r.is_admin?"Root/Admin":"Standard User"})]})]})]}),n.jsxs("div",{className:"system-card runtime-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Runtime"}),n.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),n.jsxs("div",{className:"info-list",children:[n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),n.jsx("span",{className:"info-value mono",children:r.go_version||"Unknown"})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),n.jsxs("span",{className:"info-value",children:[r.cpu_count||0," Cores"]})]}),n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),n.jsx("span",{className:"info-value",children:B(r.uptime_seconds||0)})]})]})]}),n.jsxs("div",{className:"system-card resources-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Resources"}),n.jsx("h3",{children:"System Resources"})]}),n.jsxs("div",{className:"resource-bars",children:[n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Memory"}),n.jsxs("span",{className:"resource-value",children:[r.memory_free_gb?(r.memory_total_gb-r.memory_free_gb).toFixed(1):"0"," / ",((M=r.memory_total_gb)==null?void 0:M.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill",style:{width:r.memory_total_gb?`${(r.memory_total_gb-r.memory_free_gb)/r.memory_total_gb*100}%`:"0%"}})})]}),n.jsxs("div",{className:"resource-item",children:[n.jsxs("div",{className:"resource-header",children:[n.jsx("span",{className:"resource-name",children:"Free Memory"}),n.jsxs("span",{className:"resource-value",children:[((W=r.memory_free_gb)==null?void 0:W.toFixed(1))||"0"," GB"]})]}),n.jsx("div",{className:"resource-bar",children:n.jsx("div",{className:"resource-fill memory",style:{width:r.memory_total_gb?`${r.memory_free_gb/r.memory_total_gb*100}%`:"0%"}})})]})]})]}),n.jsxs("div",{className:"system-card time-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-icon",children:"Time"}),n.jsx("h3",{children:"Time Information"})]}),n.jsxs("div",{className:"time-display",children:[n.jsx("div",{className:"current-time",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),n.jsx("div",{className:"current-date",children:r!=null&&r.local_time?new Date(r.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),n.jsx("div",{className:"info-list",children:n.jsxs("div",{className:"info-row",children:[n.jsx("span",{className:"info-label",children:"UTC Time"}),n.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"PPID"}),n.jsx("th",{children:"Name"}),n.jsx("th",{children:"User"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Command Line"})]})}),n.jsx("tbody",{children:o.map((V,ae)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:V.pid}),n.jsx("td",{className:"mono",children:V.ppid}),n.jsx("td",{className:"highlight",children:V.name}),n.jsx("td",{children:V.user||"-"}),n.jsx("td",{className:"truncate mono",title:V.exe,children:V.exe||"-"}),n.jsx("td",{className:"truncate",title:V.args,children:V.args||"-"})]},`${V.pid}-${ae}`))})]}),o.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Protocol"}),n.jsx("th",{children:"Local Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"Remote Address"}),n.jsx("th",{children:"Port"}),n.jsx("th",{children:"State"}),n.jsx("th",{children:"Process"})]})}),n.jsx("tbody",{children:u.map((V,ae)=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("span",{className:"protocol-badge",children:V.protocol})}),n.jsx("td",{className:"mono",children:V.local_addr}),n.jsx("td",{className:"mono",children:V.local_port}),n.jsx("td",{className:"mono",children:V.remote_addr||"-"}),n.jsx("td",{className:"mono",children:V.remote_port||"-"}),n.jsx("td",{children:n.jsx("span",{className:"state-badge",style:{color:U(V.state)},children:V.state})}),n.jsx("td",{children:V.process_name||V.pid||"-"})]},`${V.protocol}-${V.local_addr}-${V.local_port}-${ae}`))})]}),u.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Variable Name"}),n.jsx("th",{children:"Value"}),n.jsx("th",{children:"Type"})]})}),n.jsx("tbody",{children:p.map((V,ae)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:V.name}),n.jsx("td",{className:"truncate",title:V.value,children:V.value}),n.jsx("td",{children:n.jsx("span",{className:"type-badge",children:V.type})})]},`${V.name}-${ae}`))})]}),p.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"PID"}),n.jsx("th",{children:"Process"}),n.jsx("th",{children:"DLL Name"}),n.jsx("th",{children:"Version"}),n.jsx("th",{children:"Signed"}),n.jsx("th",{children:"Path"}),n.jsx("th",{children:"Size"})]})}),n.jsx("tbody",{children:v.map((V,ae)=>n.jsxs("tr",{children:[n.jsx("td",{className:"mono",children:V.process_id}),n.jsx("td",{children:V.process_name}),n.jsx("td",{className:"mono highlight",children:V.name}),n.jsx("td",{className:"mono",children:V.version||"-"}),n.jsx("td",{children:n.jsx("span",{className:`signature-badge ${V.is_signed?"signed":"unsigned"}`,children:V.is_signed?"Signed":"Unsigned"})}),n.jsx("td",{className:"truncate",title:V.path,children:V.path}),n.jsxs("td",{className:"mono",children:[(V.size/1024).toFixed(1)," KB"]})]},`${V.process_id}-${V.name}-${ae}`))})]}),v.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&n.jsxs("div",{className:"data-table-container",children:[n.jsxs("table",{className:"data-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Name"}),n.jsx("th",{children:"Display Name"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Status"}),n.jsx("th",{children:"Path"})]})}),n.jsx("tbody",{children:w.map((V,ae)=>{var E;return n.jsxs("tr",{children:[n.jsx("td",{className:"mono highlight",children:V.name}),n.jsx("td",{children:V.display_name||V.name}),n.jsx("td",{className:"truncate",title:V.description,children:V.description||"-"}),n.jsx("td",{children:n.jsx("span",{className:`status-badge ${(E=V.status)==null?void 0:E.toLowerCase()}`,children:V.status})}),n.jsx("td",{className:"truncate mono",title:V.path,children:V.path||"-"})]},`${V.name}-${ae}`)})})]}),w.length===0&&!j&&n.jsx("div",{className:"empty-state",children:"No driver information available"})]}),n.jsx("style",{children:`
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
      `})]})}function Ek(){var fa,ui,hi,fi;const[t,e]=C.useState([]),[s,r]=C.useState(!0),[l,o]=C.useState(null),[c,u]=C.useState(0),[h,p]=C.useState(0),[m,v]=C.useState("all"),[N,w]=C.useState("all"),[b,j]=C.useState(""),[y,k]=C.useState(null),[S,P]=C.useState(!1),[I,R]=C.useState(!1),[$,L]=C.useState(!1),[A,T]=C.useState(!1),[B,U]=C.useState(null),[M,W]=C.useState(!1),[V,ae]=C.useState("choice"),[E,J]=C.useState({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""}),[X,ie]=C.useState([]),[Z,O]=C.useState(null),[G,ce]=C.useState({}),[fe,ye]=C.useState(null),[be,Re]=C.useState(!1),[Ce,Me]=C.useState(!1),[He,Vt]=C.useState(null),xs=C.useRef(null),pe=()=>{Bs.list().then(H=>{e(H.data.rules||[]),u(H.data.total_count||0),p(H.data.enabled_count||0),r(!1)}).catch(H=>{o(H.message||"Failed to load rules"),r(!1)})};C.useEffect(()=>{pe()},[]);const qt=()=>{Bs.listTemplates().then(H=>{ie(H.data.templates||[])}).catch(H=>{console.error("Failed to load templates:",H)})},oi=()=>{qt(),L(!0)},Ks=H=>{O(H);const ue={};H.parameters.forEach(Te=>{ue[Te.name]=Te.default||""}),ce(ue)},kn=()=>{Z&&Bs.instantiateTemplate(Z.name,G).then(()=>{L(!1),O(null),ce({}),pe()}).catch(H=>{console.error("Failed to create rule from template:",H),alert("Failed to create rule from template")})},ci=(H,ue)=>{Bs.toggle(H,!ue).then(()=>{e(t.map(Te=>Te.name===H?{...Te,enabled:!ue}:Te)),p(Te=>ue?Te-1:Te+1)}).catch(Te=>{console.error("Failed to toggle rule:",Te)})},Sn=H=>{!H.is_custom&&!confirm("This is a built-in rule. Changes will be temporary and not persisted after restart. Continue?")||(U({...H}),T(!0))},is=H=>{if(!H.is_custom){alert("Cannot delete built-in rules");return}confirm(`Are you sure you want to delete rule "${H.name}"?`)&&le.delete(`/rules/${H.name}`).then(()=>{pe()}).catch(Te=>{console.error("Failed to delete rule:",Te),alert("Failed to delete rule")})},rs=()=>{B&&Bs.save(B).then(()=>{T(!1),U(null),pe()}).catch(H=>{console.error("Failed to update rule:",H),alert("Failed to update rule")})},Cn=()=>{W(!0),ae("choice"),J({name:"",description:"",severity:"medium",score:50,mitre_attack:[],event_ids:[],message:""})},di=()=>{W(!1),oi()},En=()=>{ae("custom")},se=()=>{if(!E.name.trim()){alert("Rule name is required");return}Bs.save({name:E.name,description:E.description,severity:E.severity,enabled:!0,score:E.score,mitre_attack:E.mitre_attack,event_ids:E.event_ids,message:E.message}).then(()=>{W(!1),pe()}).catch(H=>{console.error("Failed to add rule:",H),alert("Failed to create rule")})},oe=()=>{P(!0),ye(null)},Pe=H=>{Re(!0),Bs.validate(H).then(ue=>{ye(ue.data)}).catch(ue=>{ye({valid:!1,errors:[ue.message||"Validation failed"],warnings:[]})}).finally(()=>{Re(!1)})},st=H=>{Bs.export(H).then(ue=>{const Te=new Blob([ue.data],{type:H==="yaml"?"text/yaml":"application/json"}),Yt=URL.createObjectURL(Te),ys=document.createElement("a");ys.href=Yt,ys.download=`rules_export.${H}`,document.body.appendChild(ys),ys.click(),document.body.removeChild(ys),URL.revokeObjectURL(Yt)}).catch(ue=>{console.error("Failed to export rules:",ue),alert("Failed to export rules")})},as=()=>{R(!0),Vt(null)},vs=H=>{var Yt;const ue=(Yt=H.target.files)==null?void 0:Yt[0];if(!ue)return;const Te=new FileReader;Te.onload=ys=>{var qi;try{const Pn=(qi=ys.target)==null?void 0:qi.result;let Ds=[];if(ue.name.endsWith(".yaml")||ue.name.endsWith(".yml")){const Ft=Pn.split(`
`);let mt={};for(const kt of Ft)kt.startsWith("- name:")?(mt.name&&Ds.push(mt),mt={name:kt.replace("- name:","").trim(),mitre_attack:[]}):kt.startsWith("  description:")?mt.description=kt.replace("  description:","").trim():kt.startsWith("  severity:")?mt.severity=kt.replace("  severity:","").trim():kt.startsWith("  enabled:")?mt.enabled=kt.replace("  enabled:","").trim()==="true":kt.startsWith("  score:")?mt.score=parseFloat(kt.replace("  score:","").trim())||50:kt.startsWith("    - ")&&(mt.mitre_attack||(mt.mitre_attack=[]),mt.mitre_attack.push(kt.replace("    - ","").trim()));mt.name&&Ds.push(mt)}else{const Ft=JSON.parse(Pn);Ds=Array.isArray(Ft)?Ft:Ft.rules||[]}if(Ds.length===0){Vt({imported:0,failed:0,errors:["No valid rules found in file"]});return}Me(!0),Bs.import(Ds).then(Ft=>{Vt(Ft.data),Ft.data.imported>0&&pe()}).catch(Ft=>{Vt({imported:0,failed:Ds.length,errors:[Ft.message||"Import failed"]})}).finally(()=>{Me(!1)})}catch(Pn){Vt({imported:0,failed:0,errors:["Failed to parse file: "+(Pn.message||"Invalid format")]})}},Te.readAsText(ue)},Ps=H=>{k(H)},Oe=H=>{switch(H==null?void 0:H.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},Et=H=>{switch(H==null?void 0:H.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Rn=t.filter(H=>{var ue;return!(m!=="all"&&((ue=H.severity)==null?void 0:ue.toLowerCase())!==m||N==="enabled"&&!H.enabled||N==="disabled"&&H.enabled||b&&!H.name.toLowerCase().includes(b.toLowerCase()))});return s?n.jsx("div",{className:"rules-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:"Loading rules..."})]})}):l?n.jsx("div",{className:"rules-page",children:n.jsx("div",{className:"error-state",children:l})}):n.jsxs("div",{className:"rules-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:"Detection Rules"}),n.jsxs("div",{className:"header-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:oe,children:"Validate"}),n.jsx("button",{className:"btn-secondary",onClick:as,children:"Import"}),n.jsxs("div",{className:"export-dropdown",children:[n.jsx("button",{className:"btn-secondary",children:"Export"}),n.jsxs("div",{className:"export-menu",children:[n.jsx("button",{onClick:()=>st("json"),children:"JSON"}),n.jsx("button",{onClick:()=>st("yaml"),children:"YAML"})]})]}),n.jsx("button",{className:"btn-primary",onClick:Cn,children:"Add Rule"})]})]}),n.jsxs("div",{className:"stats-cards",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon",children:"📋"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value",children:c}),n.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon enabled",children:"✓"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value enabled",children:h}),n.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon disabled",children:"✗"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("div",{className:"stat-value disabled",children:c-h}),n.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),n.jsxs("div",{className:"filter-bar",children:[n.jsx("input",{type:"text",placeholder:"Search rules...",value:b,onChange:H=>j(H.target.value),className:"search-input"}),n.jsxs("select",{value:m,onChange:H=>v(H.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Severities"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"})]}),n.jsxs("select",{value:N,onChange:H=>w(H.target.value),className:"filter-select",children:[n.jsx("option",{value:"all",children:"All Status"}),n.jsx("option",{value:"enabled",children:"Enabled"}),n.jsx("option",{value:"disabled",children:"Disabled"})]})]}),n.jsx("div",{className:"rules-grid",children:Rn.map(H=>{var ue;return n.jsxs("div",{className:`rule-card ${H.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`severity-dot ${Oe(H.severity)}`}),n.jsx("span",{className:"rule-name",children:H.name})]}),n.jsxs("label",{className:"switch",children:[n.jsx("input",{type:"checkbox",checked:H.enabled,onChange:()=>ci(H.name,H.enabled)}),n.jsx("span",{className:"slider"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`severity-badge ${Oe(H.severity)}`,children:[Et(H.severity)," ",H.severity]}),n.jsxs("span",{className:"score-badge",children:["Score: ",H.score]}),!H.is_custom&&n.jsx("span",{className:"builtin-badge",children:"Built-in"})]}),n.jsx("p",{className:"rule-description",children:H.description}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("div",{className:"mitre-tags",children:[(ue=H.mitre_attack)==null?void 0:ue.slice(0,3).map(Te=>n.jsx("span",{className:"mitre-tag",children:Te},Te)),H.mitre_attack&&H.mitre_attack.length>3&&n.jsxs("span",{className:"mitre-tag",children:["+",H.mitre_attack.length-3]})]}),n.jsxs("div",{className:"rule-actions",children:[n.jsx("button",{className:"rule-action",onClick:()=>Ps(H),children:"Details"}),n.jsx("button",{className:"rule-action",onClick:()=>Sn(H),children:"Edit"}),H.is_custom&&n.jsx("button",{className:"rule-action rule-action-delete",onClick:()=>is(H),children:"Delete"})]})]})]},H.id)})}),Rn.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("div",{children:"No rules match your filters"})]}),y&&n.jsx("div",{className:"modal-overlay",onClick:()=>k(null),children:n.jsxs("div",{className:"modal-content rule-modal",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>k(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:y.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"ID:"}),n.jsx("span",{className:"detail-value mono",children:y.id})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Severity:"}),n.jsxs("span",{className:`severity-badge ${Oe(y.severity)}`,children:[Et(y.severity)," ",y.severity]})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Score:"}),n.jsx("span",{className:"detail-value",children:y.score})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${y.enabled?"enabled":"disabled"}`,children:y.enabled?"Enabled":"Disabled"})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Description"}),n.jsx("p",{className:"detail-description",children:y.description})]}),y.mitre_attack&&y.mitre_attack.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"MITRE ATT&CK"}),n.jsx("div",{className:"mitre-tags",children:y.mitre_attack.map(H=>n.jsx("span",{className:"mitre-tag",children:H},H))})]}),y.tags&&y.tags.length>0&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Tags"}),n.jsx("div",{className:"tags-list",children:y.tags.map(H=>n.jsx("span",{className:"tag-item",children:H},H))})]})]})]})}),S&&n.jsx("div",{className:"modal-overlay",onClick:()=>P(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Validate Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>P(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),n.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>P(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:()=>{const H=document.querySelector(".validate-input");if(H!=null&&H.value){const ue=H.value;try{if(ue.trim().startsWith("-"))Pe({name:"temp",description:ue,severity:"medium",enabled:!0,score:50});else{const Te=JSON.parse(ue);Pe(Te)}}catch{Pe({name:"temp",description:ue,severity:"medium",enabled:!0,score:50})}}},disabled:be,children:be?"Validating...":"Validate"})]}),fe&&n.jsxs("div",{className:`validation-result ${fe.valid?"valid":"invalid"}`,children:[n.jsx("div",{className:"result-header",children:fe.valid?"✓ Valid Rule":"✗ Invalid Rule"}),fe.errors.length>0&&n.jsxs("div",{className:"result-errors",children:[n.jsx("strong",{children:"Errors:"}),n.jsx("ul",{children:fe.errors.map((H,ue)=>n.jsx("li",{children:H},ue))})]}),fe.warnings.length>0&&n.jsxs("div",{className:"result-warnings",children:[n.jsx("strong",{children:"Warnings:"}),n.jsx("ul",{children:fe.warnings.map((H,ue)=>n.jsx("li",{children:H},ue))})]})]})]})]})}),M&&n.jsx("div",{className:"modal-overlay",onClick:()=>W(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add New Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>W(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:V==="choice"?n.jsxs("div",{className:"add-rule-choice",children:[n.jsx("p",{className:"modal-desc",children:"Choose how to create a new rule:"}),n.jsxs("div",{className:"choice-cards",children:[n.jsxs("div",{className:"choice-card",onClick:di,children:[n.jsx("div",{className:"choice-icon",children:"📋"}),n.jsx("div",{className:"choice-title",children:"From Template"}),n.jsx("div",{className:"choice-desc",children:"Create a rule from a pre-defined template with customizable parameters"})]}),n.jsxs("div",{className:"choice-card",onClick:En,children:[n.jsx("div",{className:"choice-icon",children:"✏️"}),n.jsx("div",{className:"choice-title",children:"Custom Rule"}),n.jsx("div",{className:"choice-desc",children:"Create a custom rule by filling in the rule details manually"})]})]})]}):n.jsxs("div",{className:"add-rule-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:E.name,onChange:H=>J({...E,name:H.target.value}),placeholder:"e.g. suspicious-login-detected"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:E.description,onChange:H=>J({...E,description:H.target.value}),rows:3,placeholder:"Describe what this rule detects..."})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:E.severity,onChange:H=>J({...E,severity:H.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:E.score,onChange:H=>J({...E,score:parseFloat(H.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK (comma-separated)"}),n.jsx("input",{type:"text",value:((fa=E.mitre_attack)==null?void 0:fa.join(", "))||"",onChange:H=>J({...E,mitre_attack:H.target.value.split(",").map(ue=>ue.trim()).filter(ue=>ue)}),placeholder:"T1055, T1056"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((ui=E.event_ids)==null?void 0:ui.join(", "))||"",onChange:H=>J({...E,event_ids:H.target.value.split(",").map(ue=>parseInt(ue.trim())).filter(ue=>!isNaN(ue))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Alert Message"}),n.jsx("input",{type:"text",value:E.message,onChange:H=>J({...E,message:H.target.value}),placeholder:"Alert message when rule triggers"})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>ae("choice"),children:"Back"}),n.jsx("button",{className:"btn-primary",onClick:se,children:"Create Rule"})]})]})})]})}),I&&n.jsx("div",{className:"modal-overlay",onClick:()=>R(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Import Rules"}),n.jsx("button",{className:"close-btn",onClick:()=>R(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),n.jsxs("details",{className:"format-example",children:[n.jsx("summary",{children:"View Format Examples"}),n.jsxs("div",{className:"format-content",children:[n.jsx("h5",{children:"JSON Format:"}),n.jsx("pre",{children:`[
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
  message: Suspicious activity detected`})]})]}),n.jsx("input",{type:"file",ref:xs,accept:".yaml,.yml,.json",onChange:vs,style:{display:"none"}}),n.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var H;return(H=xs.current)==null?void 0:H.click()},disabled:Ce,children:Ce?"Importing...":"Choose File"}),He&&n.jsxs("div",{className:`import-result ${He.imported>0?"success":"error"}`,children:[n.jsx("div",{className:"result-header",children:He.imported>0?`✓ Imported ${He.imported} rules`:"✗ Import failed"}),He.failed>0&&n.jsxs("div",{className:"result-info",children:["Failed: ",He.failed]}),He.errors.length>0&&n.jsx("div",{className:"result-errors",children:n.jsx("ul",{children:He.errors.map((H,ue)=>n.jsx("li",{children:H},ue))})})]}),n.jsx("div",{className:"modal-actions",children:n.jsx("button",{className:"btn-secondary",onClick:()=>R(!1),children:"Close"})})]})]})}),$&&n.jsx("div",{className:"modal-overlay",onClick:()=>L(!1),children:n.jsxs("div",{className:"modal-content template-modal",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Create Rule from Template"}),n.jsx("button",{className:"close-btn",onClick:()=>L(!1),children:"×"})]}),n.jsx("div",{className:"modal-body",children:Z?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"selected-template-header",children:[n.jsx("button",{className:"btn-back",onClick:()=>O(null),children:"← Back"}),n.jsx("h4",{children:Z.name})]}),n.jsx("div",{className:"template-params-form",children:Z.parameters.map(H=>n.jsxs("div",{className:"param-item",children:[n.jsxs("label",{children:[H.name,H.required&&n.jsx("span",{className:"required",children:"*"})]}),n.jsx("p",{className:"param-desc",children:H.description}),H.options&&H.options.length>0?n.jsxs("select",{value:G[H.name]||"",onChange:ue=>ce({...G,[H.name]:ue.target.value}),children:[n.jsx("option",{value:"",children:"Select..."}),H.options.map(ue=>n.jsx("option",{value:ue,children:ue},ue))]}):n.jsx("input",{type:H.type==="number"?"number":"text",value:G[H.name]||"",onChange:ue=>ce({...G,[H.name]:ue.target.value}),placeholder:H.default||""})]},H.name))}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>L(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:kn,disabled:Z.parameters.some(H=>H.required&&!G[H.name]),children:"Create Rule"})]})]}):n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"modal-desc",children:"Select a template:"}),n.jsx("div",{className:"template-list",children:X.length===0?n.jsx("div",{className:"empty-state",children:"No templates available"}):X.map(H=>n.jsxs("div",{className:"template-card",onClick:()=>Ks(H),children:[n.jsx("div",{className:"template-name",children:H.name}),n.jsx("div",{className:"template-desc",children:H.description}),n.jsxs("div",{className:"template-params",children:[H.parameters.length," parameters"]})]},H.name))})]})})]})}),A&&B&&n.jsx("div",{className:"modal-overlay",onClick:()=>T(!1),children:n.jsxs("div",{className:"modal-content",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>T(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:B.name,onChange:H=>U({...B,name:H.target.value}),disabled:!B.is_custom})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{value:B.description,onChange:H=>U({...B,description:H.target.value}),rows:3})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Severity"}),n.jsxs("select",{value:B.severity,onChange:H=>U({...B,severity:H.target.value}),children:[n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"high",children:"High"}),n.jsx("option",{value:"medium",children:"Medium"}),n.jsx("option",{value:"low",children:"Low"}),n.jsx("option",{value:"info",children:"Info"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Score (0-100)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:B.score,onChange:H=>U({...B,score:parseFloat(H.target.value)||0})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"MITRE ATT&CK"}),n.jsx("input",{type:"text",value:((hi=B.mitre_attack)==null?void 0:hi.join(", "))||"",onChange:H=>U({...B,mitre_attack:H.target.value.split(",").map(ue=>ue.trim()).filter(ue=>ue)}),placeholder:"T1234, T5678"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Event IDs (comma-separated)"}),n.jsx("input",{type:"text",value:((fi=B.event_ids)==null?void 0:fi.join(", "))||"",onChange:H=>U({...B,event_ids:H.target.value.split(",").map(ue=>parseInt(ue.trim())).filter(ue=>!isNaN(ue))}),placeholder:"4624, 4625"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message"}),n.jsx("input",{type:"text",value:B.message||"",onChange:H=>U({...B,message:H.target.value})})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>T(!1),children:"Cancel"}),n.jsx("button",{className:"btn-primary",onClick:rs,children:"Save Changes"})]})]})]})}),n.jsx("style",{children:`
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
      `})]})}function Rk(){const{t}=at(),[e,s]=C.useState("general"),[r,l]=C.useState(!1),[o,c]=C.useState(!1),[u,h]=C.useState(null),[p,m]=C.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});C.useEffect(()=>{ld.get().then(b=>{const j=b.data;m({databasePath:j.database_path||"./winalog.db",logLevel:j.log_level||"info",maxEvents:j.max_events||1e6,retentionDays:j.retention_days||90,enableAlerting:j.enable_alerting??!0,enableLiveCollection:j.enable_live_collection??!1,enableAutoUpdate:j.enable_auto_update??!1,apiPort:j.api_port||8080,apiHost:j.api_host||"0.0.0.0",corsEnabled:j.cors_enabled??!0,maxImportFileSize:j.max_import_file_size||1024,exportDirectory:j.export_directory||"./exports",parserWorkers:j.parser_workers||4,memoryLimit:j.memory_limit||2048})}).catch(console.error)},[]);const v=async()=>{var b,j;c(!0),h(null);try{await ld.save({database_path:p.databasePath,log_level:p.logLevel,max_events:p.maxEvents,retention_days:p.retentionDays,enable_alerting:p.enableAlerting,enable_live_collection:p.enableLiveCollection,enable_auto_update:p.enableAutoUpdate,api_port:p.apiPort,api_host:p.apiHost,cors_enabled:p.corsEnabled,max_import_file_size:p.maxImportFileSize,export_directory:p.exportDirectory,parser_workers:p.parserWorkers,memory_limit:p.memoryLimit}),l(!0),setTimeout(()=>l(!1),3e3)}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to save settings")}finally{c(!1)}},N=async()=>{var b,j;c(!0),h(null);try{await ld.reset(),window.location.reload()}catch(y){h(((j=(b=y.response)==null?void 0:b.data)==null?void 0:j.error)||"Failed to reset settings"),c(!1)}},w=(b,j)=>{m({...p,[b]:j})};return n.jsxs("div",{className:"settings-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("settings.title")}),r&&n.jsxs("span",{className:"save-indicator",children:["✓ ",t("settings.saved")]})]}),n.jsxs("div",{className:"settings-layout",children:[n.jsxs("div",{className:"settings-nav",children:[n.jsxs("button",{className:`nav-item ${e==="general"?"active":""}`,onClick:()=>s("general"),children:[n.jsx("span",{className:"nav-icon",children:"⚙️"}),t("settings.general")]}),n.jsxs("button",{className:`nav-item ${e==="database"?"active":""}`,onClick:()=>s("database"),children:[n.jsx("span",{className:"nav-icon",children:"💾"}),t("settings.database")]}),n.jsxs("button",{className:`nav-item ${e==="api"?"active":""}`,onClick:()=>s("api"),children:[n.jsx("span",{className:"nav-icon",children:"🔌"}),t("settings.apiServer")]}),n.jsxs("button",{className:`nav-item ${e==="collection"?"active":""}`,onClick:()=>s("collection"),children:[n.jsx("span",{className:"nav-icon",children:"📡"}),t("settings.collection")]}),n.jsxs("button",{className:`nav-item ${e==="advanced"?"active":""}`,onClick:()=>s("advanced"),children:[n.jsx("span",{className:"nav-icon",children:"🔧"}),t("settings.advanced")]})]}),n.jsxs("div",{className:"settings-content",children:[e==="general"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.generalSettings")}),n.jsx("p",{children:t("settings.configureBasic")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.logLevel")}),n.jsx("p",{children:t("settings.logLevelDesc")})]}),n.jsxs("select",{value:p.logLevel,onChange:b=>w("logLevel",b.target.value),children:[n.jsx("option",{value:"debug",children:t("settings.debug")}),n.jsx("option",{value:"info",children:t("settings.info")}),n.jsx("option",{value:"warn",children:t("settings.warn")}),n.jsx("option",{value:"error",children:t("settings.error")})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.exportDirectory")}),n.jsx("p",{children:t("settings.exportDirectoryDesc")})]}),n.jsx("input",{type:"text",value:p.exportDirectory,onChange:b=>w("exportDirectory",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.autoUpdateRules")}),n.jsx("p",{children:t("settings.autoUpdateRulesDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAutoUpdate,onChange:b=>w("enableAutoUpdate",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="database"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.databaseSettings")}),n.jsx("p",{children:t("settings.configureDatabase")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.databasePath")}),n.jsx("p",{children:t("settings.databasePathDesc")})]}),n.jsx("input",{type:"text",value:p.databasePath,onChange:b=>w("databasePath",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.eventRetention")}),n.jsx("p",{children:t("settings.eventRetentionDesc")})]}),n.jsx("input",{type:"number",value:p.retentionDays,onChange:b=>w("retentionDays",Number(b.target.value)),className:"number-input",min:"1",max:"365"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxEvents")}),n.jsx("p",{children:t("settings.maxEventsDesc")})]}),n.jsx("input",{type:"number",value:p.maxEvents,onChange:b=>w("maxEvents",Number(b.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),e==="api"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.apiServerSettings")}),n.jsx("p",{children:t("settings.configureApiServer")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiHost")}),n.jsx("p",{children:t("settings.apiHostDesc")})]}),n.jsx("input",{type:"text",value:p.apiHost,onChange:b=>w("apiHost",b.target.value),className:"text-input"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.apiPort")}),n.jsx("p",{children:t("settings.apiPortDesc")})]}),n.jsx("input",{type:"number",value:p.apiPort,onChange:b=>w("apiPort",Number(b.target.value)),className:"number-input",min:"1",max:"65535"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableCors")}),n.jsx("p",{children:t("settings.enableCorsDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.corsEnabled,onChange:b=>w("corsEnabled",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]})]}),e==="collection"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.collectionSettings")}),n.jsx("p",{children:t("settings.configureCollection")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableAlerting")}),n.jsx("p",{children:t("settings.enableAlertingDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableAlerting,onChange:b=>w("enableAlerting",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.enableLiveCollection")}),n.jsx("p",{children:t("settings.enableLiveCollectionDesc")})]}),n.jsxs("label",{className:"toggle",children:[n.jsx("input",{type:"checkbox",checked:p.enableLiveCollection,onChange:b=>w("enableLiveCollection",b.target.checked)}),n.jsx("span",{className:"toggle-slider"})]})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.maxImportFileSize")}),n.jsx("p",{children:t("settings.maxImportFileSizeDesc")})]}),n.jsx("input",{type:"number",value:p.maxImportFileSize,onChange:b=>w("maxImportFileSize",Number(b.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),e==="advanced"&&n.jsxs("div",{className:"settings-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("settings.advancedSettings")}),n.jsx("p",{children:t("settings.expertConfig")})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("h4",{children:["⚠️ ",t("settings.warning")]}),n.jsx("p",{children:t("settings.warningDesc")})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.parserWorkers")}),n.jsx("p",{children:t("settings.parserWorkersDesc")})]}),n.jsx("input",{type:"number",value:p.parserWorkers,onChange:b=>w("parserWorkers",Number(b.target.value)),className:"number-input",min:"1",max:"32"})]}),n.jsxs("div",{className:"setting-card",children:[n.jsxs("div",{className:"setting-info",children:[n.jsx("label",{children:t("settings.memoryLimit")}),n.jsx("p",{children:t("settings.memoryLimitDesc")})]}),n.jsx("input",{type:"number",value:p.memoryLimit,onChange:b=>w("memoryLimit",Number(b.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),n.jsxs("div",{className:"settings-actions",children:[u&&n.jsx("span",{className:"error-text",children:u}),n.jsx("button",{onClick:v,className:"btn-primary",disabled:o,children:t(o?"settings.saving":"settings.saveChanges")}),n.jsx("button",{onClick:N,className:"btn-secondary",disabled:o,children:t("settings.resetDefaults")})]})]})]}),n.jsx("style",{children:`
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
      `})]})}function Pk(){const{t}=at(),[e,s]=C.useState(null),[r,l]=C.useState(!0),[o,c]=C.useState(null),[u,h]=C.useState("5m"),[p,m]=C.useState({events:[],alerts:[],memory:[],timestamps:[]}),v=C.useRef(null),N=()=>{Kn.getMetrics().then(k=>{s(k.data),l(!1),m(S=>{const P=new Date().toLocaleTimeString(),I=[...S.events,k.data.total_events].slice(-20),R=[...S.alerts,k.data.total_alerts].slice(-20),$=[...S.memory,k.data.memory_usage_mb].slice(-20),L=[...S.timestamps,P].slice(-20);return{events:I,alerts:R,memory:$,timestamps:L}})}).catch(k=>{c(k.message||t("common.error")),l(!1)})};C.useEffect(()=>{N();const k=setInterval(N,5e3);return()=>clearInterval(k)},[]),C.useEffect(()=>{v.current&&p.events.length>1&&w()},[p]);const w=()=>{const k=v.current;if(!k)return;const S=k.getContext("2d");if(!S)return;const P=k.width,I=k.height,R=40;S.clearRect(0,0,P,I);const $=Math.max(...p.events,1),L=Math.min(...p.events,0),A=$-L||1;S.strokeStyle="#333",S.lineWidth=1;for(let B=0;B<=4;B++){const U=R+(I-2*R)*B/4;S.beginPath(),S.moveTo(R,U),S.lineTo(P-R,U),S.stroke()}const T=(P-2*R)/(p.events.length-1);S.strokeStyle="#00d9ff",S.lineWidth=2,S.beginPath(),p.events.forEach((B,U)=>{const M=R+U*T,W=R+(I-2*R)*(1-(B-L)/A);U===0?S.moveTo(M,W):S.lineTo(M,W)}),S.stroke(),S.fillStyle="#00d9ff",p.events.forEach((B,U)=>{const M=R+U*T,W=R+(I-2*R)*(1-(B-L)/A);S.beginPath(),S.arc(M,W,3,0,Math.PI*2),S.fill()})},b=k=>{const S=Math.floor(k/86400),P=Math.floor(k%86400/3600),I=Math.floor(k%3600/60);return S>0?`${S}d ${P}h ${I}m`:P>0?`${P}h ${I}m`:`${I}m`};if(r)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"spinner"}),n.jsx("div",{children:t("common.loading")})]})});if(o)return n.jsx("div",{className:"metrics-page",children:n.jsxs("div",{className:"error-state",children:["❌ ",o]})});const j=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return n.jsxs("div",{className:"metrics-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("metrics.title")}),n.jsxs("div",{className:"time-range-selector",children:[n.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),n.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),n.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-card large",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"📊"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),n.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),n.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"🚨"}),n.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),n.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),n.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"💾"}),n.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),n.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),n.jsx("div",{className:"metric-bar",children:n.jsx("div",{className:"metric-bar-fill",style:{width:`${j}%`}})}),n.jsxs("div",{className:"metric-sub",children:[j,"% of limit"]})]}),n.jsxs("div",{className:"metric-card",children:[n.jsxs("div",{className:"metric-header",children:[n.jsx("span",{className:"metric-icon",children:"⚡"}),n.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),n.jsx("div",{className:"metric-value uptime",children:b((e==null?void 0:e.uptime_seconds)||0)}),n.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),n.jsx("div",{className:"chart-section",children:n.jsxs("div",{className:"chart-card",children:[n.jsxs("div",{className:"chart-header",children:[n.jsx("h3",{children:"Event Throughput"}),n.jsx("div",{className:"chart-legend",children:n.jsxs("span",{className:"legend-item",children:[n.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),n.jsx("div",{className:"chart-container",children:n.jsx("canvas",{ref:v,width:800,height:200})})]})}),n.jsxs("div",{className:"prometheus-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("metrics.prometheusFormat")}),n.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(y()),children:"📋 Copy"})]}),n.jsx("pre",{className:"prometheus-code",children:y()})]}),n.jsx("style",{children:`
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}ha.register(Zl,eo,Yr,Ys,Cx,Rx,kx,wx);function Dk(){const{t}=at(),[e,s]=C.useState([]),[r,l]=C.useState(null),[o,c]=C.useState(!0),[u,h]=C.useState(null),[p,m]=C.useState(null),[v,N]=C.useState({});C.useEffect(()=>{w()},[]);const w=async()=>{try{c(!0);const P=(await Dj.detect()).data;s(P.detections||[]),l(b(P.detections||[])),h(null)}catch(S){h(S instanceof Error?S.message:"Unknown error")}finally{c(!1)}},b=S=>{const P={total_detections:S.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return S.forEach(I=>{var $;const R=(($=I.severity)==null?void 0:$.toLowerCase())||"info";R in P.by_severity&&P.by_severity[R]++,P.by_category[I.category]=(P.by_category[I.category]||0)+1,P.by_technique[I.technique]=(P.by_technique[I.technique]||0)+1}),P},j=e.filter(S=>{var P;return!(v.severity&&((P=S.severity)==null?void 0:P.toLowerCase())!==v.severity||v.category&&S.category!==v.category||v.technique&&S.technique!==v.technique)}),y={labels:Object.keys((r==null?void 0:r.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((r==null?void 0:r.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},k={labels:Object.keys((r==null?void 0:r.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((r==null?void 0:r.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return o?n.jsx("div",{className:"persistence-page",children:n.jsx("div",{className:"loading",children:t("common.loading")})}):u?n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),n.jsx("button",{onClick:w,className:"btn btn-primary",children:t("common.confirm")})]}):n.jsxs("div",{className:"persistence-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h1",{children:t("persistence.title")}),n.jsx("button",{onClick:w,className:"btn btn-primary",children:t("persistence.rescan")})]}),r&&n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card stat-total",children:[n.jsx("div",{className:"stat-value",children:r.total_detections}),n.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),n.jsxs("div",{className:"stat-card stat-critical",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.critical}),n.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),n.jsxs("div",{className:"stat-card stat-high",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.high}),n.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),n.jsxs("div",{className:"stat-card stat-medium",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.medium}),n.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),n.jsxs("div",{className:"stat-card stat-low",children:[n.jsx("div",{className:"stat-value",children:r.by_severity.low}),n.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),n.jsxs("div",{className:"charts-grid",children:[n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.bySeverity")}),n.jsx("div",{className:"chart-container",children:n.jsx(Fd,{data:y,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),n.jsxs("div",{className:"chart-card",children:[n.jsx("h3",{children:t("persistence.byCategory")}),n.jsx("div",{className:"chart-container",children:n.jsx(Fd,{data:k,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),n.jsx("div",{className:"filters",children:n.jsxs("select",{value:v.severity||"",onChange:S=>N({...v,severity:S.target.value||void 0}),children:[n.jsx("option",{value:"",children:t("persistence.allSeverities")}),n.jsx("option",{value:"critical",children:t("persistence.critical")}),n.jsx("option",{value:"high",children:t("persistence.high")}),n.jsx("option",{value:"medium",children:t("persistence.medium")}),n.jsx("option",{value:"low",children:t("persistence.low")})]})}),n.jsx("div",{className:"detections-table-container",children:n.jsxs("table",{className:"detections-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("persistence.severity")}),n.jsx("th",{children:t("persistence.technique")}),n.jsx("th",{children:t("persistence.category")}),n.jsx("th",{children:t("persistence.title")}),n.jsx("th",{children:t("persistence.evidence")}),n.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),n.jsx("tbody",{children:j.map(S=>{var P,I,R,$;return n.jsxs("tr",{onClick:()=>m(S),className:"detection-row",children:[n.jsx("td",{children:n.jsx("span",{className:`severity-badge severity-${(P=S.severity)==null?void 0:P.toLowerCase()}`,children:t(`persistence.${(I=S.severity)==null?void 0:I.toLowerCase()}`)})}),n.jsx("td",{children:n.jsx("span",{className:"technique-tag",children:S.technique})}),n.jsx("td",{children:S.category}),n.jsx("td",{children:S.title}),n.jsx("td",{className:"evidence-cell",children:((R=S.evidence)==null?void 0:R.key)&&n.jsx("div",{className:"evidence-key",children:S.evidence.key})}),n.jsx("td",{children:t(`persistence.${($=S.false_positive_risk)==null?void 0:$.toLowerCase()}Risk`)||S.false_positive_risk})]},S.id)})})]})}),p&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(null),children:n.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:p.title}),n.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.basicInfo")}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),n.jsxs("p",{children:[n.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.description")}),n.jsx("p",{children:p.description})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:t("persistence.recommendedAction")}),n.jsx("p",{children:p.recommended_action})]})]})]})})]})}const Ss={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},Ak={en:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"},zh:{"Possible compromised account due to successful login after multiple failures":"可能因多次登录失败后成功登录而导致账户被盗","High number of failed login attempts":"大量登录失败尝试","Suspicious IP with high failed login count targeting multiple users":"可疑IP大量登录失败尝试并针对多个用户"}},Tk=(t,e="zh")=>{const s=e.startsWith("zh")?"zh":"en";return Ak[s][t]||t},Lk=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function Mk(){var y,k;const{t,locale:e}=at(),s=Qs(),[r,l]=C.useState(!1),[o,c]=C.useState(null),[u,h]=C.useState("brute-force"),[p,m]=C.useState(24),[v,N]=C.useState(""),w=[{id:"brute_force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:Ss["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:Ss.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:Ss.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:Ss.powershell,category:"execution",recommended:!0},{id:"lateral_movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:Ss["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data_exfiltration",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:Ss["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:Ss.persistence,category:"persistence",recommended:!1},{id:"privilege_escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:Ss["privilege-escalation"],category:"privilege-escalation",recommended:!1}],b=async()=>{var S,P;l(!0),N("");try{const I=u.replace(/_/g,"-"),R=await Pj.run(I,{hours:p});c(R.data)}catch(I){N(((P=(S=I.response)==null?void 0:S.data)==null?void 0:P.error)||"Failed to run analyzer")}finally{l(!1)}},j=w.reduce((S,P)=>(S[P.category]||(S[P.category]=[]),S[P.category].push(P),S),{});return n.jsxs("div",{className:"analyze-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("analyze.title")}),n.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),n.jsxs("div",{className:"analyze-grid",children:[n.jsxs("div",{className:"analyzer-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(j).map(([S,P])=>{var I;return n.jsxs("div",{className:"analyzer-category",children:[n.jsx("div",{className:"category-header",children:((I=Lk.find(R=>R.id===S))==null?void 0:I.name)||S}),n.jsx("div",{className:"analyzer-list",children:P.map(R=>n.jsxs("div",{className:`analyzer-card ${u===R.id?"selected":""}`,onClick:()=>h(R.id),children:[n.jsx("div",{className:"analyzer-icon",children:R.icon}),n.jsxs("div",{className:"analyzer-content",children:[n.jsxs("div",{className:"analyzer-header",children:[n.jsx("span",{className:"analyzer-name",children:R.name}),R.recommended&&n.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),n.jsx("p",{className:"analyzer-desc",children:R.desc})]}),n.jsx("div",{className:"select-indicator",children:u===R.id&&"✓"})]},R.id))})]},S)})]}),n.jsxs("div",{className:"config-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.configuration")})}),n.jsxs("div",{className:"config-card",children:[n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.selectedAnalyzer")}),n.jsxs("div",{className:"selected-analyzer-display",children:[n.jsx("span",{className:"analyzer-icon",children:Ss[u]}),n.jsx("span",{children:(y=w.find(S=>S.id===u))==null?void 0:y.name})]})]}),n.jsxs("div",{className:"config-item",children:[n.jsx("label",{children:t("analyze.timeWindow")}),n.jsxs("div",{className:"time-selector",children:[n.jsx("button",{className:p===1?"active":"",onClick:()=>m(1),children:"1h"}),n.jsx("button",{className:p===6?"active":"",onClick:()=>m(6),children:"6h"}),n.jsx("button",{className:p===24?"active":"",onClick:()=>m(24),children:"24h"}),n.jsx("button",{className:p===72?"active":"",onClick:()=>m(72),children:"72h"}),n.jsx("button",{className:p===168?"active":"",onClick:()=>m(168),children:"7d"})]})]}),n.jsx("button",{onClick:b,disabled:r,className:"btn-primary btn-run",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),v&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:v})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("analyze.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>s("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>s("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),o&&n.jsxs("div",{className:"results-section",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.results")})}),n.jsxs("div",{className:"results-grid",children:[n.jsxs("div",{className:"result-summary-card",children:[n.jsxs("div",{className:"result-header",children:[n.jsx("span",{className:"result-icon",children:Ss[o.type]}),n.jsx("span",{className:"result-type",children:(k=w.find(S=>S.id===o.type))==null?void 0:k.name})]}),n.jsxs("div",{className:"result-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.severity")}),n.jsx("span",{className:`severity-badge severity-${o.severity}`,children:o.severity.toUpperCase()})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.score")}),n.jsx("span",{className:"score-value",children:o.score.toFixed(1)})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("analyze.findings")}),n.jsx("span",{className:"findings-count",children:o.findings.length})]})]}),n.jsx("p",{className:"result-summary",children:o.summary})]}),o.findings.length>0&&n.jsxs("div",{className:"findings-card",children:[n.jsx("h4",{children:t("analyze.findingsList")}),n.jsx("div",{className:"findings-list",children:o.findings.map((S,P)=>n.jsxs("div",{className:"finding-item",children:[n.jsxs("div",{className:"finding-header",children:[n.jsx("span",{className:`severity-indicator severity-${S.severity}`}),n.jsx("span",{className:"finding-desc",children:Tk(S.description,e)})]}),n.jsxs("div",{className:"finding-meta",children:[S.rule_name&&n.jsx("span",{className:"rule-name",children:S.rule_name}),n.jsxs("span",{className:"finding-score",children:["Score: ",S.score.toFixed(1)]}),S.evidence&&S.evidence.length>0&&n.jsxs("span",{className:"evidence-count",children:[S.evidence.length," events"]})]}),S.evidence&&S.evidence.length>0&&n.jsxs("div",{className:"evidence-list",children:[n.jsx("div",{className:"evidence-header",children:t("analyze.relatedEvents")}),S.evidence.slice(0,5).map((I,R)=>{var $;return n.jsxs("div",{className:"evidence-item",children:[n.jsx("span",{className:"evidence-time",children:new Date(I.timestamp).toLocaleString()}),n.jsx("span",{className:"evidence-user",children:I.user||"-"}),n.jsx("span",{className:"evidence-computer",children:I.computer||"-"}),n.jsxs("span",{className:"evidence-msg",title:I.message,children:[($=I.message)==null?void 0:$.substring(0,80),I.message&&I.message.length>80?"...":""]})]},R)}),S.evidence.length>5&&n.jsxs("div",{className:"evidence-more",children:["+",S.evidence.length-5," more events"]})]})]},P))})]})]})]}),n.jsxs("div",{className:"analyzer-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),n.jsx("div",{className:"info-grid",children:w.slice(0,4).map(S=>n.jsxs("div",{className:"info-card",children:[n.jsx("div",{className:"info-icon",children:S.icon}),n.jsxs("div",{className:"info-content",children:[n.jsx("h4",{children:S.name}),n.jsx("p",{children:S.desc})]})]},S.id))})]})]})}const qm={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a",info:"#2563eb"},Ok={" Lateral Movement":"🔄"," Privilege Escalation":"⬆️"," Credential Access":"🔑"," Execution":"⚡"," Persistence":"📌"," Defense Evasion":"🛡️"," Collection":"📂"," Exfiltration":"📤"," Impact":"💥"};function zk(){const{t}=at(),e=Qs(),[s,r]=C.useState(!1),[l,o]=C.useState([]),[c,u]=C.useState("24h"),[h,p]=C.useState(""),[m,v]=C.useState(!1),[N,w]=C.useState(null),b=[{value:"1h",label:"1h"},{value:"6h",label:"6h"},{value:"24h",label:"24h"},{value:"72h",label:"72h"},{value:"168h",label:"7d"}],j=async()=>{var L,A;r(!0),p("");try{const T=await Aj.analyze({time_window:c});o(T.data.results||[]),v(!0)}catch(T){p(((A=(L=T.response)==null?void 0:L.data)==null?void 0:A.error)||"Failed to run correlation analysis")}finally{r(!1)}},y=L=>qm[L.toLowerCase()]||qm.info,k=L=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low",info:t("severity.info")||"Info"})[L.toLowerCase()]||L,S=L=>{for(const[A,T]of Object.entries(Ok))if(L.includes(A))return T;return"🎯"},P=L=>{try{return new Date(L).toLocaleString()}catch{return L}},I=(L,A)=>{try{const T=new Date(L).getTime(),U=new Date(A).getTime()-T,M=Math.floor(U/1e3),W=Math.floor(M/60),V=Math.floor(W/60);return V>0?`${V}h ${W%60}m`:W>0?`${W}m ${M%60}s`:`${M}s`}catch{return"N/A"}},R=C.useMemo(()=>{if(l.length===0)return null;const L={critical:0,high:0,medium:0,low:0};return l.forEach(A=>{const T=A.severity.toLowerCase();L.hasOwnProperty(T)&&L[T]++}),{totalEvents:l.reduce((A,T)=>A+T.event_count,0),severityCounts:L,avgEventsPerRule:Math.round(l.reduce((A,T)=>A+T.event_count,0)/l.length)}},[l]),$=C.useMemo(()=>{if(l.length===0)return[];const L=Math.max(...l.map(A=>A.event_count));return l.map(A=>{const T=Math.round(A.event_count/L*20);return{...A,bar:"█".repeat(T)+"░".repeat(20-T)}})},[l]);return n.jsxs("div",{className:"correlation-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("correlation.title")}),n.jsx("p",{className:"page-desc",children:t("correlation.pageDesc")})]}),n.jsxs("div",{className:"correlation-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("correlation.timeWindow")}),n.jsx("div",{className:"time-selector",children:b.map(L=>n.jsx("button",{className:c===L.value?"active":"",onClick:()=>u(L.value),children:L.label},L.value))})]}),n.jsx("button",{onClick:j,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("correlation.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("correlation.runAnalysis")]})})]}),h&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:h})]}),m&&!s&&l.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🔍"}),n.jsx("h3",{children:t("correlation.noResults")}),n.jsx("p",{children:t("correlation.noResultsDesc")})]}),R&&n.jsxs("div",{className:"correlation-stats",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📊"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:l.length}),n.jsx("span",{className:"stat-label",children:t("correlation.rulesTriggered")})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-icon",children:"📝"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:R.totalEvents.toLocaleString()}),n.jsx("span",{className:"stat-label",children:t("correlation.totalEvents")})]})]}),n.jsxs("div",{className:"stat-card critical",children:[n.jsx("span",{className:"stat-icon",children:"🔴"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:R.severityCounts.critical}),n.jsx("span",{className:"stat-label",children:t("severity.critical")})]})]}),n.jsxs("div",{className:"stat-card high",children:[n.jsx("span",{className:"stat-icon",children:"🟠"}),n.jsxs("div",{className:"stat-content",children:[n.jsx("span",{className:"stat-value",children:R.severityCounts.high}),n.jsx("span",{className:"stat-label",children:t("severity.high")})]})]})]}),$.length>0&&n.jsxs("div",{className:"attack-chain-visual",children:[n.jsx("h3",{children:t("correlation.attackChainTimeline")}),n.jsx("div",{className:"chain-bars",children:$.map((L,A)=>n.jsxs("div",{className:"chain-bar-item",children:[n.jsxs("div",{className:"chain-bar-header",children:[n.jsx("span",{className:"chain-icon",children:S(L.description)}),n.jsx("span",{className:"chain-name",children:L.rule_name}),n.jsx("span",{className:"chain-severity-dot",style:{backgroundColor:y(L.severity)}})]}),n.jsx("div",{className:"chain-bar-track",children:n.jsx("span",{className:"chain-bar-fill",style:{width:`${L.event_count/R.totalEvents*100}%`,backgroundColor:y(L.severity)}})}),n.jsxs("div",{className:"chain-bar-meta",children:[n.jsxs("span",{className:"chain-events",children:[L.event_count," events"]}),n.jsx("span",{className:"chain-duration",children:I(L.start_time,L.end_time)})]})]},A))})]}),l.length>0&&n.jsxs("div",{className:"correlation-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("correlation.results")}),n.jsxs("span",{className:"results-count",children:[l.length," ",t("correlation.rulesTriggered")]})]}),n.jsx("div",{className:"results-grid",children:l.map((L,A)=>n.jsxs("div",{className:`correlation-card ${N===A?"expanded":""}`,onClick:()=>w(N===A?null:A),children:[n.jsxs("div",{className:"card-header",children:[n.jsxs("div",{className:"rule-info",children:[n.jsx("span",{className:"severity-badge",style:{backgroundColor:y(L.severity)},children:k(L.severity)}),n.jsx("h4",{children:L.rule_name})]}),n.jsxs("div",{className:"event-count",children:[n.jsx("span",{className:"count-value",children:L.event_count}),n.jsx("span",{className:"count-label",children:t("correlation.events")})]})]}),n.jsx("div",{className:"card-icon",children:S(L.description)}),n.jsx("p",{className:"rule-description",children:L.description}),n.jsxs("div",{className:"card-footer",children:[n.jsxs("div",{className:"time-info",children:[n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.startTime"),":"]}),n.jsx("span",{className:"time-value",children:P(L.start_time)})]}),n.jsxs("div",{className:"time-range",children:[n.jsxs("span",{className:"time-label",children:[t("correlation.endTime"),":"]}),n.jsx("span",{className:"time-value",children:P(L.end_time)})]})]}),n.jsxs("div",{className:"duration-badge",children:["⏱️ ",I(L.start_time,L.end_time)]})]}),N===A&&n.jsxs("div",{className:"card-expanded",children:[n.jsxs("div",{className:"expanded-section",children:[n.jsx("h5",{children:t("correlation.attackPattern")}),n.jsxs("div",{className:"pattern-visual",children:[n.jsx("span",{className:"pattern-icon",children:"🎯"}),n.jsx("span",{className:"pattern-text",children:L.rule_name}),n.jsx("span",{className:"pattern-arrow",children:"→"}),n.jsxs("span",{className:"pattern-target",children:[k(L.severity)," Risk"]})]})]}),n.jsxs("div",{className:"expanded-actions",children:[n.jsxs("button",{className:"action-btn",onClick:T=>{T.stopPropagation(),e("/timeline")},children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"action-btn",onClick:T=>{T.stopPropagation(),e("/alerts")},children:["🔔 ",t("correlation.viewAlerts")]})]})]})]},A))})]}),n.jsxs("div",{className:"correlation-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("correlation.aboutCorrelation")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("correlation.aboutDesc")})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("correlation.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("correlation.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("correlation.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/analyze"),children:["⚡ ",t("correlation.runAnalyzers")]})]})]})]})}const Ym={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"};function Ik(){const{t}=at(),e=Qs(),[s,r]=C.useState(!1),[l,o]=C.useState(null),[c,u]=C.useState(""),[h,p]=C.useState("overview"),m=async()=>{var y,k;r(!0),u("");try{const S=await Tj.analyze();o(S.data)}catch(S){u(((k=(y=S.response)==null?void 0:y.data)==null?void 0:k.error)||"Failed to run multi-machine analysis")}finally{r(!1)}},v=y=>Ym[y.toLowerCase()]||Ym.info,N=y=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[y.toLowerCase()]||y,w=C.useMemo(()=>{if(!l||l.machines.length===0)return{nodes:[],edges:[]};const y=l.machines.map(S=>({id:S.id,name:S.name,ip:S.ip,role:S.role,suspicious:l.lateral_movement.some(P=>P.source_machine===S.name||P.target_machine===S.name)})),k=[];return l.lateral_movement.forEach(S=>{const P=y.find(R=>R.name===S.source_machine),I=y.find(R=>R.name===S.target_machine);P&&I&&k.push({from:P.id,to:I.id,user:S.user,severity:S.severity})}),{nodes:y,edges:k}},[l]),b=y=>{try{return new Date(y).toLocaleString()}catch{return y}},j=y=>y.includes("DC")||y.includes("Domain")?"🌐":y.includes("Server")?"🖥️":y.includes("Workstation")?"💻":"🖥️";return n.jsxs("div",{className:"multi-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("multi.title")}),n.jsx("p",{className:"page-desc",children:t("multi.pageDesc")})]}),n.jsx("div",{className:"multi-toolbar",children:n.jsx("button",{onClick:m,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("multi.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M12 6v6l4 2"})]}),t("multi.runAnalysis")]})})}),c&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:c})]}),l&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"analysis-summary",children:[n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.analysisId")}),n.jsx("p",{className:"analysis-id",children:l.analysis_id})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.machinesFound")}),n.jsx("p",{className:"summary-value",children:l.machines.length})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.suspiciousActivities")}),n.jsx("p",{className:"summary-value",style:{color:l.suspicious_count>0?"#dc2626":"#16a34a"},children:l.suspicious_count})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("h4",{children:t("multi.lateralMovements")}),n.jsx("p",{className:"summary-value",children:l.lateral_movement.length})]})]}),n.jsx("p",{className:"summary-text",children:l.summary}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="overview"?"active":""}`,onClick:()=>p("overview"),children:["📊 ",t("multi.machineOverview")]}),n.jsxs("button",{className:`tab ${h==="crossmachine"?"active":""}`,onClick:()=>p("crossmachine"),children:["🔗 ",t("multi.crossMachine")]}),n.jsxs("button",{className:`tab ${h==="lateral"?"active":""}`,onClick:()=>p("lateral"),children:["🔄 ",t("multi.lateralMovement")]})]}),h==="overview"&&n.jsx("div",{className:"tab-content",children:l.machines.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🖥️"}),n.jsx("h3",{children:t("multi.noMachines")}),n.jsx("p",{children:t("multi.noMachinesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"💡 Import event logs from multiple machines to enable cross-machine analysis."})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"machine-graph",children:[n.jsxs("h4",{children:["🏢 ",t("multi.machineRelationship")]}),n.jsxs("div",{className:"graph-container",children:[n.jsx("div",{className:"graph-nodes",children:w.nodes.map((y,k)=>{const S=l.lateral_movement.some(P=>P.source_machine===y.name||P.target_machine===y.name);return n.jsxs("div",{className:`graph-node ${S?"suspicious":""}`,style:{top:`${20+k%3*25}%`,left:`${20+k%4*20}%`},children:[n.jsx("span",{className:"node-icon",children:j(y.role)}),n.jsx("span",{className:"node-name",children:y.name}),n.jsx("span",{className:"node-ip",children:y.ip||"N/A"}),S&&n.jsx("span",{className:"node-alert",children:"⚠️"})]},y.id)})}),n.jsxs("div",{className:"graph-legend",children:[n.jsx("span",{className:"legend-item",children:"🖥️ Server"}),n.jsx("span",{className:"legend-item",children:"🌐 DC (Domain Controller)"}),n.jsx("span",{className:"legend-item",children:"💻 Workstation"}),n.jsx("span",{className:"legend-item suspicious",children:"⚠️ Involved in lateral movement"})]})]})]}),n.jsx("div",{className:"machines-grid",children:l.machines.map((y,k)=>{const S=l.lateral_movement.some(P=>P.source_machine===y.name||P.target_machine===y.name);return n.jsxs("div",{className:`machine-card ${S?"alert":""}`,children:[n.jsxs("div",{className:"machine-header",children:[n.jsx("span",{className:"machine-icon",children:j(y.role)}),n.jsx("h4",{children:y.name}),S&&n.jsx("span",{className:"alert-badge",children:"⚠️"})]}),n.jsxs("div",{className:"machine-details",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"IP:"}),n.jsx("span",{className:"value",children:y.ip||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.domain"),":"]}),n.jsx("span",{className:"value",children:y.domain||"N/A"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.role"),":"]}),n.jsx("span",{className:"value",children:y.role||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"label",children:"OS:"}),n.jsx("span",{className:"value",children:y.os_version||"Unknown"})]}),n.jsxs("div",{className:"detail-row",children:[n.jsxs("span",{className:"label",children:[t("multi.lastSeen"),":"]}),n.jsx("span",{className:"value",children:b(y.last_seen)})]})]}),S&&n.jsx("div",{className:"machine-alert-indicator",children:n.jsx("span",{children:"⚠️ Involved in lateral movement"})})]},k)})})]})}),h==="crossmachine"&&n.jsx("div",{className:"tab-content",children:l.cross_machine_activity.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noSuspiciousActivity")}),n.jsx("p",{children:t("multi.noSuspiciousActivityDesc")})]}):n.jsx("div",{className:"activity-list",children:l.cross_machine_activity.map((y,k)=>n.jsxs("div",{className:`activity-card ${y.suspicious?"suspicious":""}`,children:[n.jsxs("div",{className:"activity-header",children:[n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-icon",children:"👤"}),n.jsx("span",{className:"user-name",children:y.user})]}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:N(y.severity)})]}),n.jsxs("div",{className:"activity-body",children:[n.jsxs("p",{className:"activity-desc",children:[t("multi.loggedInto")," ",y.machine_count," ",t("multi.machines"),":"]}),n.jsx("div",{className:"machine-tags",children:y.machines.map((S,P)=>n.jsx("span",{className:"machine-tag",children:S},P))}),n.jsxs("p",{className:"login-count",children:[t("multi.totalLogins"),": ",y.login_count]}),n.jsxs("div",{className:"recommendation",children:[n.jsx("span",{className:"rec-icon",children:"💡"}),n.jsx("span",{children:y.recommendation})]})]})]},k))})}),h==="lateral"&&n.jsx("div",{className:"tab-content",children:l.lateral_movement.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("multi.noLateralMovement")}),n.jsx("p",{children:t("multi.noLateralMovementDesc")})]}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"lateral-summary",children:n.jsxs("div",{className:"lateral-stat",children:[n.jsx("span",{className:"stat-icon",children:"🔄"}),n.jsxs("span",{className:"stat-text",children:[l.lateral_movement.length," lateral movements detected"]})]})}),n.jsx("div",{className:"lateral-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("multi.time")}),n.jsx("th",{children:t("multi.source")}),n.jsx("th",{children:t("multi.target")}),n.jsx("th",{children:t("multi.user")}),n.jsx("th",{children:t("multi.event")}),n.jsx("th",{children:t("multi.description")}),n.jsx("th",{children:t("multi.severity")}),n.jsx("th",{children:"MITRE"})]})}),n.jsx("tbody",{children:l.lateral_movement.map((y,k)=>n.jsxs("tr",{className:y.severity==="critical"||y.severity==="high"?"danger-row":"",children:[n.jsx("td",{className:"time-cell",children:b(y.timestamp)}),n.jsx("td",{className:"source-cell",children:n.jsx("span",{className:"machine-badge source",children:y.source_machine})}),n.jsx("td",{className:"target-cell",children:n.jsx("span",{className:"machine-badge target",children:y.target_machine})}),n.jsxs("td",{className:"user-cell",children:["👤 ",y.user]}),n.jsx("td",{className:"event-cell",children:y.event_id}),n.jsx("td",{className:"desc-cell",children:y.description}),n.jsx("td",{children:n.jsx("span",{className:"severity-badge",style:{backgroundColor:v(y.severity)},children:N(y.severity)})}),n.jsx("td",{className:"mitre-cell",children:y.mitre_attack.map((S,P)=>n.jsx("span",{className:"mitre-tag",children:S},P))})]},k))})]})})]})})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("multi.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("multi.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("multi.viewTimeline")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("multi.viewAlerts")]})]})]})]})}function Fk(){const{t}=at(),[e,s]=C.useState("SELECT * FROM events LIMIT 10"),[r,l]=C.useState(!1),[o,c]=C.useState(null),[u,h]=C.useState(""),[p,m]=C.useState([]),[v,N]=C.useState(!1),[w,b]=C.useState(""),j=C.useRef(null),y=async()=>{var T,B;if(!e.trim()){h(t("query.sqlRequired"));return}l(!0),h(""),c(null);const A=performance.now();try{const U=await Lj.execute({query:e,limit:100}),M=((performance.now()-A)/1e3).toFixed(2);b(M),c(U.data),k(e,!0,U.data.count,M)}catch(U){const M=((performance.now()-A)/1e3).toFixed(2);h(((B=(T=U.response)==null?void 0:T.data)==null?void 0:B.error)||"Failed to execute query"),k(e,!1,0,M),k(e,!1,0)}finally{l(!1)}},k=(A,T,B,U)=>{const M={id:Date.now().toString(),sql:A,timestamp:new Date().toISOString(),success:T,rowCount:B,duration:U};m(W=>[M,...W.slice(0,49)])},S=A=>{s(A.sql),N(!1)},P=()=>{m([])},I=A=>{const T=["SELECT","FROM","WHERE","AND","OR","JOIN","LEFT","RIGHT","INNER","OUTER","ON","GROUP","BY","ORDER","HAVING","LIMIT","OFFSET","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","DROP","ALTER","INDEX","AS","ASC","DESC","DISTINCT","COUNT","SUM","AVG","MIN","MAX","LIKE","IN","BETWEEN","IS","NULL","NOT","EXISTS","CASE","WHEN","THEN","ELSE","END","UNION","ALL","INTO","OUTFILE"],B=["COUNT","SUM","AVG","MIN","MAX","COALESCE","IFNULL","NULLIF","CAST","DATE","TIME","DATETIME","STRFTIME","SUBSTR","LENGTH","UPPER","LOWER","TRIM","REPLACE","GROUP_CONCAT"],U=["=","!=","<>","<",">","<=",">=","+","-","*","/","%","||"],M=[],W=/('[^']*'|"[^"]*"|\b(?:[\w]+)\b|[=<>!+\-*/%,()]+|\S)/g,V=A.match(W)||[];let ae=0;for(const E of V){const J=E.toUpperCase();E.startsWith("'")&&E.endsWith("'")?M.push(n.jsx("span",{className:"sql-string",children:E},ae++)):E.startsWith('"')&&E.endsWith('"')?M.push(n.jsx("span",{className:"sql-string",children:E},ae++)):U.includes(E)?M.push(n.jsx("span",{className:"sql-operator",children:E},ae++)):B.includes(J)?M.push(n.jsx("span",{className:"sql-function",children:E},ae++)):T.includes(J)?M.push(n.jsx("span",{className:"sql-keyword",children:E},ae++)):/^\d+$/.test(E)?M.push(n.jsx("span",{className:"sql-number",children:E},ae++)):M.push(n.jsx("span",{className:"sql-identifier",children:E},ae++))}return n.jsx(n.Fragment,{children:M})},R=[{label:t("query.presetEvents")||"Top Events",sql:"SELECT event_id, COUNT(*) as cnt FROM events GROUP BY event_id ORDER BY cnt DESC LIMIT 10"},{label:t("query.presetAlerts")||"Recent Alerts",sql:"SELECT * FROM alerts ORDER BY first_seen DESC LIMIT 10"},{label:t("query.presetAuth")||"Auth Events",sql:"SELECT * FROM events WHERE event_id IN (4624, 4625, 4648) ORDER BY timestamp DESC LIMIT 20"},{label:t("query.presetPowerShell")||"PowerShell",sql:"SELECT * FROM events WHERE message LIKE '%PowerShell%' LIMIT 10"},{label:t("query.presetSchema")||"DB Schema",sql:"SELECT name, type FROM sqlite_master WHERE type='table'"},{label:t("query.presetTimeline")||"Event Timeline",sql:"SELECT timestamp, event_id, computer, message FROM events ORDER BY timestamp DESC LIMIT 20"}],$=A=>{A.key==="Enter"&&(A.ctrlKey||A.metaKey)&&(A.preventDefault(),y())},L=A=>{if(!o)return;let T,B,U;if(A==="json")T=JSON.stringify(o,null,2),B="query_result.json",U="application/json";else{const ae=o.columns.join(","),E=o.rows.map(J=>o.columns.map(X=>{const ie=J[X];if(ie==null)return"";const Z=String(ie);return Z.includes(",")||Z.includes('"')?`"${Z.replace(/"/g,'""')}"`:Z}).join(",")).join(`
`);T=ae+`
`+E,B="query_result.csv",U="text/csv"}const M=new Blob([T],{type:U}),W=URL.createObjectURL(M),V=document.createElement("a");V.href=W,V.download=B,V.click(),URL.revokeObjectURL(W)};return n.jsxs("div",{className:"query-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("query.title")}),n.jsx("p",{className:"page-desc",children:t("query.pageDesc")})]}),n.jsxs("div",{className:"query-toolbar",children:[n.jsxs("div",{className:"preset-queries",children:[n.jsx("label",{children:t("query.presets")}),n.jsx("div",{className:"preset-buttons",children:R.map((A,T)=>n.jsx("button",{className:"preset-btn",onClick:()=>s(A.sql),title:A.sql,children:A.label},T))})]}),n.jsx("div",{className:"toolbar-right",children:n.jsxs("button",{className:"history-btn",onClick:()=>N(!v),children:["📜 ",t("query.history")||"History"," (",p.length,")"]})})]}),v&&n.jsxs("div",{className:"query-history-panel",children:[n.jsxs("div",{className:"history-header",children:[n.jsx("h4",{children:t("query.recentQueries")||"Recent Queries"}),n.jsx("button",{className:"clear-btn",onClick:P,children:"🗑️ Clear"})]}),n.jsx("div",{className:"history-list",children:p.length===0?n.jsx("p",{className:"empty-history",children:"No query history"}):p.map(A=>n.jsxs("div",{className:`history-item ${A.success?"success":"error"}`,onClick:()=>S(A),children:[n.jsx("div",{className:"history-sql",children:A.sql}),n.jsxs("div",{className:"history-meta",children:[n.jsx("span",{className:"history-status",children:A.success?"✓":"✗"}),n.jsxs("span",{className:"history-rows",children:[A.rowCount," rows"]}),A.duration&&n.jsxs("span",{className:"history-duration",children:[A.duration,"s"]}),n.jsx("span",{className:"history-time",children:new Date(A.timestamp).toLocaleTimeString()})]})]},A.id))})]}),n.jsxs("div",{className:"query-editor",children:[n.jsxs("div",{className:"editor-header",children:[n.jsx("label",{children:t("query.sqlQuery")}),n.jsx("div",{className:"editor-actions",children:n.jsx("button",{className:"format-btn",onClick:()=>{const A=e.replace(/\s+/g," ").replace(/,\s*/g,`,
  `).replace(/\bSELECT\b/gi,`SELECT
  `).replace(/\bFROM\b/gi,`
FROM`).replace(/\bWHERE\b/gi,`
WHERE`).replace(/\bAND\b/gi,"  AND").replace(/\bOR\b/gi,"  OR").replace(/\bGROUP BY\b/gi,`
GROUP BY`).replace(/\bORDER BY\b/gi,`
ORDER BY`).replace(/\bLIMIT\b/gi,`
LIMIT`).trim();s(A)},children:"🎨 Format"})})]}),n.jsxs("div",{className:"editor-wrapper",children:[n.jsx("div",{className:"sql-highlight",children:I(e)}),n.jsx("textarea",{ref:j,className:"sql-input",value:e,onChange:A=>s(A.target.value),onKeyDown:$,placeholder:t("query.enterSQL"),rows:8,spellCheck:!1})]}),n.jsx("div",{className:"editor-hint",children:"Press Ctrl+Enter to execute | SQL syntax is SQLite compatible"})]}),n.jsxs("div",{className:"query-actions",children:[n.jsx("button",{onClick:y,disabled:r,className:"btn-primary",children:r?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("query.executing")]}):n.jsxs(n.Fragment,{children:[n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:n.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("query.execute")]})}),o&&n.jsxs("div",{className:"result-actions",children:[n.jsx("button",{className:"export-btn",onClick:()=>L("json"),children:"📥 JSON"}),n.jsx("button",{className:"export-btn",onClick:()=>L("csv"),children:"📥 CSV"})]})]}),u&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:u})]}),o&&n.jsxs("div",{className:"query-results",children:[n.jsxs("div",{className:"results-header",children:[n.jsx("h3",{children:t("query.results")}),n.jsxs("div",{className:"results-meta",children:[n.jsxs("span",{className:"results-count",children:[o.count," ",t("query.rowsReturned")]}),w&&n.jsxs("span",{className:"execution-time",children:["⏱️ ",w,"s"]})]})]}),o.columns.length>0&&o.rows.length>0?n.jsx("div",{className:"results-table-wrapper",children:n.jsxs("table",{className:"results-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{className:"row-num",children:"#"}),o.columns.map((A,T)=>n.jsx("th",{children:A},T))]})}),n.jsx("tbody",{children:o.rows.map((A,T)=>n.jsxs("tr",{children:[n.jsx("td",{className:"row-num",children:T+1}),o.columns.map((B,U)=>n.jsx("td",{className:A[B]===null?"null-value":"",children:Bk(A[B])},U))]},T))})]})}):n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📭"}),n.jsx("h3",{children:t("query.noResults")}),n.jsx("p",{children:t("query.noResultsDesc")})]})]}),n.jsxs("div",{className:"query-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("query.aboutQuery")})}),n.jsxs("div",{className:"info-content",children:[n.jsx("p",{children:t("query.aboutDesc")}),n.jsxs("div",{className:"example-queries",children:[n.jsx("h4",{children:t("query.exampleQueries")}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT * FROM events WHERE event_id = 4624"}),n.jsx("p",{children:t("query.example1Desc")})]}),n.jsxs("div",{className:"example-item",children:[n.jsx("code",{children:"SELECT computer, COUNT(*) as count FROM events GROUP BY computer"}),n.jsx("p",{children:t("query.example2Desc")})]})]})]})]})]})}function Bk(t){if(t==null)return"NULL";if(typeof t=="object")return JSON.stringify(t);const e=String(t);return e.length>200?e.substring(0,200)+"...":e}const $k={critical:"#dc2626",high:"#ea580c",medium:"#ca8a04",low:"#16a34a"},Uk={impossible_travel:{icon:"🚨",color:"#dc2626",description:"Login from impossible distance"},abnormal_behavior:{icon:"⚠️",color:"#ea580c",description:"Deviation from normal behavior"},abnormal_hours:{icon:"🌙",color:"#ca8a04",description:"Activity outside normal hours"},unusual_hours:{icon:"⏰",color:"#ca8a04",description:"Unusual time of activity"},new_location:{icon:"📍",color:"#ea580c",description:"Login from new location"},privilege_escalation:{icon:"⬆️",color:"#dc2626",description:"Escalation of privileges"},brute_force:{icon:"💥",color:"#dc2626",description:"Multiple failed login attempts"},data_exfiltration:{icon:"📤",color:"#dc2626",description:"Large data transfer detected"}};function Wk(){const{t}=at(),e=Qs(),[s,r]=C.useState(!1),[l,o]=C.useState(null),[c,u]=C.useState([]),[h,p]=C.useState("analyze"),[m,v]=C.useState(24),[N,w]=C.useState(""),[b,j]=C.useState(null),y=async()=>{var A,T;r(!0),w("");try{const B=await Sp.analyze({hours:m});o(B.data)}catch(B){w(((T=(A=B.response)==null?void 0:A.data)==null?void 0:T.error)||"Failed to run UEBA analysis")}finally{r(!1)}},k=async()=>{r(!0),w("");try{const U=((await Sp.profiles()).data.profiles||[]).map(M=>({...M,risk_score:Math.random()*100}));u(U)}catch(A){w(A.message||"Failed to load profiles")}finally{r(!1)}},S=A=>$k[A.toLowerCase()]||"#2563eb",P=A=>({critical:t("severity.critical")||"Critical",high:t("severity.high")||"High",medium:t("severity.medium")||"Medium",low:t("severity.low")||"Low"})[A.toLowerCase()]||A,I=A=>Uk[A]||{icon:"⚠️",color:"#2563eb",description:A},R=[{value:1,label:"1h"},{value:6,label:"6h"},{value:24,label:"24h"},{value:72,label:"72h"},{value:168,label:"7d"}],$=C.useMemo(()=>{if(!l)return null;const A=l.total_anomaly||1,T=l.high_risk_count/A,B=l.medium_risk_count/A,U=1-T-B;return{high:{value:l.high_risk_count,percentage:T*100},medium:{value:l.medium_risk_count,percentage:B*100},low:{value:A-l.high_risk_count-l.medium_risk_count,percentage:U*100}}},[l]),L=A=>{try{return new Date(A).toLocaleString()}catch{return A}};return n.jsxs("div",{className:"ueba-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("ueba.title")}),n.jsx("p",{className:"page-desc",children:t("ueba.pageDesc")})]}),n.jsxs("div",{className:"tabs",children:[n.jsxs("button",{className:`tab ${h==="analyze"?"active":""}`,onClick:()=>p("analyze"),children:["🔍 ",t("ueba.analyze")]}),n.jsxs("button",{className:`tab ${h==="profiles"?"active":""}`,onClick:()=>{p("profiles"),k()},children:["👥 ",t("ueba.profiles")]})]}),h==="analyze"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"ueba-toolbar",children:[n.jsxs("div",{className:"toolbar-section",children:[n.jsx("label",{children:t("ueba.timeWindow")}),n.jsx("div",{className:"time-selector",children:R.map(A=>n.jsx("button",{className:m===A.value?"active":"",onClick:()=>v(A.value),children:A.label},A.value))})]}),n.jsx("button",{onClick:y,disabled:s,className:"btn-primary",children:s?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("ueba.analyzing")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("circle",{cx:"11",cy:"11",r:"8"}),n.jsx("path",{d:"M21 21l-4.35-4.35"})]}),t("ueba.runAnalysis")]})})]}),N&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:N})]}),l&&n.jsxs("div",{className:"ueba-results",children:[n.jsxs("div",{className:"results-summary",children:[n.jsxs("div",{className:"summary-card large",children:[n.jsx("div",{className:"summary-icon",children:"📊"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.totalAnomalies")}),n.jsx("p",{className:"summary-value",children:l.total_anomaly}),n.jsx("p",{className:"summary-subtitle",children:t("ueba.detectedInHours",{hours:m})})]})]}),$&&n.jsxs("div",{className:"risk-gauge-card",children:[n.jsx("h4",{children:t("ueba.riskDistribution")||"Risk Distribution"}),n.jsxs("div",{className:"risk-gauge",children:[n.jsxs("div",{className:"gauge-bar",children:[n.jsx("div",{className:"gauge-segment critical",style:{width:`${$.high.percentage}%`}}),n.jsx("div",{className:"gauge-segment warning",style:{width:`${$.medium.percentage}%`}}),n.jsx("div",{className:"gauge-segment low",style:{width:`${$.low.percentage}%`}})]}),n.jsxs("div",{className:"gauge-legend",children:[n.jsxs("span",{className:"legend-item critical",children:["🔴 ",$.high.value," ",t("severity.critical")||"Critical"]}),n.jsxs("span",{className:"legend-item warning",children:["🟠 ",$.medium.value," ",t("severity.medium")||"Medium"]}),n.jsxs("span",{className:"legend-item low",children:["🟢 ",$.low.value," ",t("severity.low")||"Low"]})]})]})]}),n.jsxs("div",{className:"summary-card",children:[n.jsx("div",{className:"summary-icon",children:"⏱️"}),n.jsxs("div",{className:"summary-content",children:[n.jsx("h4",{children:t("ueba.duration")}),n.jsx("p",{className:"summary-value small",children:l.duration})]})]})]}),l.anomalies.length===0?n.jsxs("div",{className:"empty-state success",children:[n.jsx("div",{className:"empty-icon",children:"✅"}),n.jsx("h3",{children:t("ueba.noAnomalies")}),n.jsx("p",{children:t("ueba.noAnomaliesDesc")}),n.jsx("div",{className:"empty-hint",children:n.jsx("p",{children:"No suspicious behavior detected in the selected time window."})})]}):n.jsxs("div",{className:"anomalies-list",children:[n.jsxs("h3",{children:[t("ueba.detectedAnomalies")," (",l.anomalies.length,")"]}),n.jsx("div",{className:"anomaly-timeline",children:l.anomalies.map((A,T)=>{const B=I(A.type);return n.jsxs("div",{className:`anomaly-item ${b===T?"expanded":""}`,onClick:()=>j(b===T?null:T),children:[n.jsx("div",{className:"anomaly-indicator",style:{backgroundColor:B.color}}),n.jsx("div",{className:"anomaly-icon",children:B.icon}),n.jsxs("div",{className:"anomaly-content",children:[n.jsxs("div",{className:"anomaly-header",children:[n.jsx("span",{className:"anomaly-type",children:A.type.replace(/_/g," ")}),n.jsx("span",{className:"severity-badge",style:{backgroundColor:S(A.severity)},children:P(A.severity)})]}),A.user&&n.jsxs("div",{className:"anomaly-user",children:["👤 ",n.jsx("span",{children:A.user})]}),n.jsx("p",{className:"anomaly-description",children:A.description}),n.jsxs("div",{className:"anomaly-meta",children:[n.jsxs("span",{className:"anomaly-score",children:["Score: ",n.jsx("strong",{children:A.score.toFixed(2)})]}),A.event_ids&&A.event_ids.length>0&&n.jsxs("span",{className:"anomaly-events",children:[A.event_ids.length," related events"]})]})]}),b===T&&n.jsxs("div",{className:"anomaly-expanded",children:[A.details&&Object.keys(A.details).length>0&&n.jsxs("div",{className:"anomaly-details-section",children:[n.jsx("h5",{children:t("ueba.details")}),n.jsx("div",{className:"details-grid",children:Object.entries(A.details).map(([U,M])=>n.jsxs("div",{className:"detail-item",children:[n.jsxs("span",{className:"detail-key",children:[U,":"]}),n.jsx("span",{className:"detail-value",children:String(M)})]},U))})]}),n.jsxs("div",{className:"anomaly-actions",children:[n.jsx("button",{className:"action-btn",onClick:U=>{U.stopPropagation(),e("/events",{state:{user:A.user}})},children:"📊 View Events"}),n.jsx("button",{className:"action-btn",onClick:U=>{U.stopPropagation(),e("/timeline")},children:"📈 View Timeline"})]})]})]},T)})})]})]})]}),h==="profiles"&&n.jsxs("div",{className:"tab-content",children:[n.jsxs("div",{className:"profiles-header",children:[n.jsx("h3",{children:t("ueba.userProfiles")}),n.jsx("p",{className:"profiles-subtitle",children:"User behavior baseline and risk assessment"})]}),s?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"btn-spinner"}),n.jsx("span",{children:"Loading profiles..."})]}):c.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"👥"}),n.jsx("h3",{children:t("ueba.noProfiles")}),n.jsx("p",{children:t("ueba.noProfilesDesc")}),n.jsxs("div",{className:"empty-hint",children:[n.jsx("p",{children:"Run the UEBA analysis first to establish user behavior baselines."}),n.jsx("button",{className:"btn-primary",onClick:()=>{p("analyze"),y()},children:"🔍 Run Analysis"})]})]}):n.jsx("div",{className:"profiles-grid",children:c.map((A,T)=>n.jsxs("div",{className:"profile-card",children:[n.jsxs("div",{className:"profile-header",children:[n.jsx("div",{className:"profile-avatar",children:n.jsx("span",{className:"avatar-icon",children:"👤"})}),n.jsxs("div",{className:"profile-info",children:[n.jsx("h4",{children:A.user}),n.jsxs("p",{className:"profile-meta",children:["Last updated: ",L(A.last_updated)]})]}),A.risk_score!==void 0&&n.jsx("div",{className:`risk-indicator ${A.risk_score>70?"high":A.risk_score>30?"medium":"low"}`,children:A.risk_score.toFixed(0)})]}),n.jsxs("div",{className:"profile-stats",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.loginCount")}),n.jsx("span",{className:"stat-value",children:A.login_count})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:t("ueba.avgEventsPerDay")}),n.jsx("span",{className:"stat-value",children:A.avg_events_per_day.toFixed(1)})]})]}),A.risk_score!==void 0&&n.jsxs("div",{className:"profile-risk-bar",children:[n.jsx("div",{className:"risk-bar-track",children:n.jsx("div",{className:`risk-bar-fill ${A.risk_score>70?"high":A.risk_score>30?"medium":"low"}`,style:{width:`${A.risk_score}%`}})}),n.jsx("span",{className:"risk-label",children:"Risk Score"})]})]},T))})]}),n.jsxs("div",{className:"quick-actions",children:[n.jsx("h4",{children:t("ueba.quickActions")}),n.jsxs("div",{className:"quick-buttons",children:[n.jsxs("button",{className:"quick-btn",onClick:()=>e("/correlation"),children:["🔗 ",t("ueba.viewCorrelation")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("ueba.viewAlerts")]}),n.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("ueba.viewTimeline")]})]})]})]})}const Hk=[{value:"event_id",label:"Event ID"},{value:"source",label:"Source"},{value:"log_name",label:"Log Name"},{value:"computer",label:"Computer"},{value:"user",label:"User"},{value:"user_sid",label:"User SID"},{value:"ip_address",label:"IP Address"}],Vk=[{value:"equals",label:"Equals"},{value:"contains",label:"Contains"},{value:"starts_with",label:"Starts With"},{value:"ends_with",label:"Ends With"}],Qm=[{value:60,label:"1 hour"},{value:360,label:"6 hours"},{value:1440,label:"24 hours"},{value:10080,label:"7 days"},{value:43200,label:"30 days"},{value:0,label:"Permanent"}];function qk(){const{t}=at(),[e,s]=C.useState([]),[r,l]=C.useState(!1),[o,c]=C.useState(""),[u,h]=C.useState(!1),[p,m]=C.useState(!1),[v,N]=C.useState(null),[w,b]=C.useState(null),[j,y]=C.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]}),[k,S]=C.useState({name:"",duration:1440,scope:"global",expires_at:"",conditions:[],enabled:!0});C.useEffect(()=>{P()},[]);const P=async()=>{l(!0),c("");try{const E=await Ar.list();s(E.data.rules||[])}catch(E){c(E.message||"Failed to load suppress rules")}finally{l(!1)}},I=()=>{y({name:"",duration:1440,scope:"global",expires_at:"",conditions:[]})},R=async()=>{if(!j.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Ar.create({name:j.name,duration:j.duration,scope:j.scope,expires_at:j.expires_at,conditions:j.conditions,enabled:!0}),h(!1),I(),P()}catch(E){c(E.message||"Failed to create rule")}finally{l(!1)}},$=E=>{N(E),S({name:E.name,duration:E.duration,scope:E.scope,expires_at:E.expires_at,conditions:E.conditions||[],enabled:E.enabled}),m(!0)},L=async()=>{if(v){if(!k.name.trim()){alert("Rule name is required");return}l(!0),c("");try{await Ar.update(v.id,{name:k.name,duration:k.duration,scope:k.scope,expires_at:k.expires_at,conditions:k.conditions,enabled:k.enabled}),m(!1),N(null),P()}catch(E){c(E.message||"Failed to update rule")}finally{l(!1)}}},A=async E=>{if(confirm("Are you sure you want to delete this rule?")){l(!0),c("");try{await Ar.delete(E),P()}catch(J){c(J.message||"Failed to delete rule")}finally{l(!1)}}},T=async(E,J)=>{l(!0),c("");try{await Ar.toggle(E,!J),P()}catch(X){c(X.message||"Failed to toggle rule")}finally{l(!1)}},B=(E,J)=>{E([...J,{field:"event_id",operator:"equals",value:""}])},U=(E,J,X,ie,Z)=>{const O=[...J];O[X]={...O[X],[ie]:Z},E(O)},M=(E,J,X)=>{E(J.filter((ie,Z)=>Z!==X))},W=E=>E===0?"Permanent":E<60?`${E}m`:E<1440?`${Math.floor(E/60)}h`:`${Math.floor(E/1440)}d`,V=E=>!E||E.length===0?"No conditions (global suppress)":E.map(J=>`${J.field} ${J.operator} "${J.value}"`).join(" AND "),ae=(E,J,X)=>n.jsxs("div",{className:"conditions-section",children:[n.jsxs("div",{className:"conditions-header",children:[n.jsx("label",{children:"Conditions"}),n.jsx("button",{type:"button",className:"btn-add-condition",onClick:()=>B(J,E),children:"+ Add Condition"})]}),E.length===0?n.jsx("p",{className:"no-conditions",children:"No conditions - will suppress all matching alerts"}):n.jsx("div",{className:"conditions-list",children:E.map((ie,Z)=>n.jsxs("div",{className:"condition-row",children:[n.jsx("select",{value:ie.field,onChange:O=>U(J,E,Z,"field",O.target.value),children:Hk.map(O=>n.jsx("option",{value:O.value,children:O.label},O.value))}),n.jsx("select",{value:ie.operator,onChange:O=>U(J,E,Z,"operator",O.target.value),children:Vk.map(O=>n.jsx("option",{value:O.value,children:O.label},O.value))}),n.jsx("input",{type:"text",value:ie.value,onChange:O=>U(J,E,Z,"value",O.target.value),placeholder:"Value"}),n.jsx("button",{type:"button",className:"btn-remove-condition",onClick:()=>M(J,E,Z),children:"×"})]},Z))})]});return n.jsxs("div",{className:"suppress-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("suppress.title")}),n.jsx("p",{className:"page-desc",children:t("suppress.pageDesc")})]}),n.jsx("div",{className:"suppress-toolbar",children:n.jsxs("button",{onClick:()=>h(!0),className:"btn-primary",children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),t("suppress.addRule")]})}),o&&n.jsxs("div",{className:"error-panel",children:[n.jsx("span",{className:"error-icon",children:"⚠️"}),n.jsx("span",{children:o})]}),r&&e.length===0?n.jsxs("div",{className:"loading-state",children:[n.jsx("span",{className:"spinner"}),n.jsx("span",{children:t("common.loading")})]}):e.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"🛡️"}),n.jsx("h3",{children:t("suppress.noRules")}),n.jsx("p",{children:t("suppress.noRulesDesc")})]}):n.jsx("div",{className:"rules-grid",children:e.map(E=>n.jsxs("div",{className:`rule-card ${E.enabled?"":"disabled"}`,children:[n.jsxs("div",{className:"rule-header",children:[n.jsxs("div",{className:"rule-title",children:[n.jsx("span",{className:`status-dot ${E.enabled?"enabled":"disabled"}`}),n.jsx("span",{className:"rule-name",children:E.name})]}),n.jsxs("div",{className:"rule-actions-header",children:[n.jsx("button",{className:"btn-icon",onClick:()=>$(E),title:"Edit",children:"✏️"}),n.jsx("button",{className:"btn-icon delete",onClick:()=>A(E.id),title:t("suppress.delete"),children:"🗑️"})]})]}),n.jsxs("div",{className:"rule-meta",children:[n.jsxs("span",{className:`scope-badge scope-${E.scope}`,children:[E.scope==="global"?"🌐":E.scope==="user"?"👤":"💻"," ",E.scope]}),n.jsxs("span",{className:"duration-badge",children:["⏱️ ",W(E.duration)]}),E.expires_at&&n.jsxs("span",{className:"expires-badge",children:["📅 ",new Date(E.expires_at).toLocaleDateString()]})]}),n.jsxs("div",{className:"rule-conditions",children:[n.jsx("label",{children:"Conditions:"}),n.jsx("p",{className:"conditions-text",children:V(E.conditions)})]}),n.jsxs("div",{className:"rule-footer",children:[n.jsxs("span",{className:"created-at",children:["Created: ",new Date(E.created_at).toLocaleDateString()]}),n.jsx("button",{className:`toggle-btn ${E.enabled?"enabled":"disabled"}`,onClick:()=>T(E.id,E.enabled),children:E.enabled?t("suppress.enabled"):t("suppress.disabled")})]})]},E.id))}),u&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Add Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:j.name,onChange:E=>y({...j,name:E.target.value}),placeholder:"e.g. suppress-admin-alerts"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:j.scope,onChange:E=>y({...j,scope:E.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:j.duration,onChange:E=>y({...j,duration:parseInt(E.target.value)}),children:Qm.map(E=>n.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:j.expires_at,onChange:E=>y({...j,expires_at:E.target.value})})]}),ae(j.conditions,E=>y({...j,conditions:E}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>h(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:R,disabled:!j.name||r,children:t("suppress.create")})]})]})}),p&&v&&n.jsx("div",{className:"modal-overlay",onClick:()=>m(!1),children:n.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Edit Suppress Rule"}),n.jsx("button",{className:"close-btn",onClick:()=>m(!1),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"form-group",children:[n.jsxs("label",{children:["Rule Name ",n.jsx("span",{className:"required",children:"*"})]}),n.jsx("input",{type:"text",value:k.name,onChange:E=>S({...k,name:E.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Scope"}),n.jsxs("select",{value:k.scope,onChange:E=>S({...k,scope:E.target.value}),children:[n.jsx("option",{value:"global",children:"🌐 Global"}),n.jsx("option",{value:"user",children:"👤 User"}),n.jsx("option",{value:"computer",children:"💻 Computer"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Duration"}),n.jsx("select",{value:k.duration,onChange:E=>S({...k,duration:parseInt(E.target.value)}),children:Qm.map(E=>n.jsx("option",{value:E.value,children:E.label},E.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Expires At (Optional)"}),n.jsx("input",{type:"datetime-local",value:k.expires_at,onChange:E=>S({...k,expires_at:E.target.value})})]}),n.jsx("div",{className:"form-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:k.enabled,onChange:E=>S({...k,enabled:E.target.checked})}),n.jsx("span",{children:"Enabled"})]})}),ae(k.conditions,E=>S({...k,conditions:E}))]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{className:"btn-secondary",onClick:()=>m(!1),children:t("common.cancel")}),n.jsx("button",{className:"btn-primary",onClick:L,disabled:!k.name||r,children:"Save Changes"})]})]})}),w&&n.jsx("div",{className:"modal-overlay",onClick:()=>b(null),children:n.jsxs("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:"Rule Details"}),n.jsx("button",{className:"close-btn",onClick:()=>b(null),children:"×"})]}),n.jsxs("div",{className:"modal-body",children:[n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Name:"}),n.jsx("span",{className:"detail-value",children:w.name})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Scope:"}),n.jsx("span",{className:"detail-value",children:w.scope})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Duration:"}),n.jsx("span",{className:"detail-value",children:W(w.duration)})]}),n.jsxs("div",{className:"detail-row",children:[n.jsx("span",{className:"detail-label",children:"Status:"}),n.jsx("span",{className:`status-badge ${w.enabled?"enabled":"disabled"}`,children:w.enabled?"Enabled":"Disabled"})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"Conditions"}),n.jsx("p",{className:"detail-description",children:V(w.conditions)})]})]})]})}),n.jsxs("div",{className:"suppress-info",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("suppress.about")})}),n.jsx("div",{className:"info-content",children:n.jsx("p",{children:t("suppress.aboutDesc")})})]}),n.jsx("style",{children:`
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
      `})]})}function Yk(){var I,R;const{t}=at(),[e,s]=C.useState([]),[r,l]=C.useState(null),[o,c]=C.useState(!1),[u,h]=C.useState(null),[p,m]=C.useState("all"),v=C.useRef(null),N=C.useRef(null);C.useEffect(()=>(w(),()=>{v.current&&v.current.close()}),[]),C.useEffect(()=>{N.current&&(N.current.scrollTop=0)},[e]);const w=()=>{h(null);const $=Rj.streamEvents(L=>{s(A=>{const T=[L,...A];return T.length>100&&T.pop(),T})},L=>{l({total_events:L.total_events||0,events_per_sec:L.events_per_sec||0,uptime:L.uptime||"0s",alerts:L.alerts||0})},L=>{console.error("Stream error:",L),c(!1),L.type==="error"&&h("Connection lost. Reconnecting...")});$.onopen=()=>{c(!0),h(null)},v.current=$},b=()=>{v.current&&(v.current.close(),v.current=null),c(!1)},j=()=>{b(),w()},y=()=>{s([])},k=$=>{switch($==null?void 0:$.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},S=e.filter($=>{var L;return p==="all"?!0:((L=$.level)==null?void 0:L.toLowerCase())===p}),P=$=>{try{return new Date($).toLocaleTimeString()}catch{return $}};return n.jsxs("div",{className:"live-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h2",{children:t("live.title")}),n.jsxs("div",{className:`connection-status ${o?"connected":"disconnected"}`,children:[n.jsx("span",{className:"status-dot"}),o?"Connected":"Disconnected"]})]}),n.jsxs("div",{className:"header-actions",children:[n.jsxs("select",{className:"filter-select",value:p,onChange:$=>m($.target.value),children:[n.jsx("option",{value:"all",children:"All Levels"}),n.jsx("option",{value:"critical",children:"Critical"}),n.jsx("option",{value:"error",children:"Error"}),n.jsx("option",{value:"warning",children:"Warning"}),n.jsx("option",{value:"info",children:"Info"}),n.jsx("option",{value:"verbose",children:"Verbose"})]}),n.jsx("button",{className:"btn-secondary",onClick:y,children:"Clear"}),o?n.jsx("button",{className:"btn-danger",onClick:b,children:"Disconnect"}):n.jsx("button",{className:"btn-primary",onClick:j,children:"Connect"})]})]}),u&&n.jsx("div",{className:"error-banner",children:u}),n.jsxs("div",{className:"stats-bar",children:[n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Total Events"}),n.jsx("span",{className:"stat-value",children:((I=r==null?void 0:r.total_events)==null?void 0:I.toLocaleString())||"0"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Events/sec"}),n.jsx("span",{className:"stat-value",children:((R=r==null?void 0:r.events_per_sec)==null?void 0:R.toFixed(2))||"0.00"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Alerts"}),n.jsx("span",{className:"stat-value alerts",children:(r==null?void 0:r.alerts)||0})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Uptime"}),n.jsx("span",{className:"stat-value mono",children:(r==null?void 0:r.uptime)||"0s"})]}),n.jsxs("div",{className:"stat-item",children:[n.jsx("span",{className:"stat-label",children:"Buffered"}),n.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),n.jsx("div",{className:"events-container",ref:N,children:S.length===0?n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-icon",children:"📡"}),n.jsx("div",{className:"empty-text",children:o?"Waiting for events...":"Click Connect to start monitoring"})]}):n.jsx("div",{className:"events-list",children:S.map(($,L)=>n.jsxs("div",{className:"event-card",style:{borderLeftColor:k($.level)},children:[n.jsxs("div",{className:"event-header",children:[n.jsx("span",{className:"event-time",children:P($.timestamp)}),n.jsx("span",{className:"event-level",style:{color:k($.level)},children:$.level||"UNKNOWN"}),n.jsxs("span",{className:"event-id",children:["Event #",$.event_id]}),n.jsx("span",{className:"event-source",children:$.source||$.log_name})]}),n.jsx("div",{className:"event-body",children:n.jsx("div",{className:"event-message",children:$.message||"(No message)"})}),n.jsxs("div",{className:"event-footer",children:[n.jsx("span",{className:"event-computer",children:$.computer}),$.user&&n.jsx("span",{className:"event-user",children:$.user}),$.ip_address&&n.jsx("span",{className:"event-ip",children:$.ip_address})]})]},`${$.id}-${L}`))})}),n.jsx("style",{children:`
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
      `})]})}function Qk(){const{t}=at(),[e,s]=C.useState(!1),[r,l]=C.useState(""),[o,c]=C.useState(2),[u,h]=C.useState(""),[p,m]=C.useState(""),[v,N]=C.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[w,b]=C.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[j,y]=C.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,includeProcesses:!0,includeNetwork:!0,includeDlls:!1,includeDrivers:!1,includeUsers:!0,includeSysInfo:!0,compress:!0,calculateHash:!0}),k=B=>{N(U=>U.map(M=>M.id===B?{...M,enabled:!M.enabled}:M))},S=B=>{b(U=>U.map(M=>M.id===B?{...M,enabled:!M.enabled}:M))},P=B=>{y(U=>({...U,[B]:!U[B]}))},I=async()=>{s(!0),l(t("collect.starting"));const B=v.filter(U=>U.enabled).map(U=>U.name);try{const U=await _p.collect({sources:B,options:{workers:o,include_prefetch:j.includePrefetch,include_registry:j.includeRegistry,include_system_info:j.includeSystemInfo,include_shimcache:j.includeShimcache,include_amcache:j.includeAmcache,include_userassist:j.includeUserassist,include_tasks:j.includeTasks,include_logs:j.includeLogs,include_processes:j.includeProcesses,include_network:j.includeNetwork,include_dlls:j.includeDlls,include_drivers:j.includeDrivers,include_users:j.includeUsers,compress:j.compress,calculate_hash:j.calculateHash}});U.data.status==="completed"?l(`${t("collect.completed")}
${U.data.output_path}
Duration: ${U.data.duration}`):U.data.status==="error"?l(`${t("collect.failed")}: ${U.data.message}`):l(`${t("collect.collecting")}...
${t("collect.sources")}: ${B.join(", ")}`)}catch(U){l(`${t("collect.failed")}: ${U instanceof Error?U.message:"Unknown error"}`)}s(!1)},R=async()=>{var B;s(!0),l(t("collect.importing"));try{const U=u.split(`
`).map(W=>W.trim()).filter(W=>W.length>0);if(U.length===0){l(t("collect.noFilesSelected")),s(!1);return}const M=await kp.importLogs(U);M.data.success?l(`${t("collect.importDone")}
Imported: ${M.data.files_imported}
Failed: ${M.data.files_failed}
Events: ${M.data.events_imported}`):l(`${t("collect.failed")}: ${((B=M.data.errors)==null?void 0:B.join(", "))||"Unknown error"}`)}catch(U){l(`${t("collect.failed")}: ${U instanceof Error?U.message:"Unknown error"}`)}s(!1)},$=async()=>{s(!0),l(t("collect.importing")+" "+t("collect.withAlert"));try{const B=u.split(`
`).map(M=>M.trim()).filter(M=>M.length>0);if(B.length===0){l(t("collect.noFilesSelected")),s(!1);return}const U=await kp.importLogsWithAlert(B);if(U.data.status==="completed"){let M=`${t("collect.importDone")}
Imported: ${U.data.imported}
Failed: ${U.data.failed}
Events: ${U.data.total_events}`;U.data.alerts_generated!==void 0&&(M+=`
Alerts: ${U.data.alerts_generated}`),U.data.alert_error&&(M+=`
Alert Error: ${U.data.alert_error}`),l(M)}else l(`${t("collect.failed")}: ${U.data.message||"Unknown error"}`)}catch(B){l(`${t("collect.failed")}: ${B instanceof Error?B.message:"Unknown error"}`)}s(!1)},L=async()=>{s(!0),l(t("collect.evtx2csvConverting")||"Converting EVTX to CSV...");try{const B=u.split(`
`).map(M=>M.trim()).filter(M=>M.length>0);if(B.length===0){l(t("collect.noFilesSelected")),s(!1);return}const U=await _p.evtx2csv(B);if(U.data){let M=`${t("collect.evtx2csvDone")||"Conversion completed"}
`;M+=`Total Events: ${U.data.total_events}
`,M+=`Successful: ${U.data.total_files-U.data.failed_files}
`,M+=`Failed: ${U.data.failed_files}
`,U.data.results&&U.data.results.length>0&&(M+=`
Files:
`,U.data.results.forEach(W=>{W.error?M+=`- ${W.input_path}: ERROR - ${W.error}
`:M+=`- ${W.input_path} -> ${W.output_path} (${W.event_count} events)
`})),U.data.errors&&U.data.errors.length>0&&(M+=`
Errors:
`+U.data.errors.join(`
`)),l(M)}else l(`${t("collect.failed")}: Unknown error`)}catch(B){l(`${t("collect.failed")}: ${B instanceof Error?B.message:"Unknown error"}`)}s(!1)},A=v.reduce((B,U)=>(B[U.category]||(B[U.category]=[]),B[U.category].push(U),B),{}),T=w.reduce((B,U)=>(B[U.category]||(B[U.category]=[]),B[U.category].push(U),B),{});return n.jsxs("div",{className:"collect-page",children:[n.jsx("div",{className:"page-header",children:n.jsx("h2",{children:t("collect.title")})}),n.jsxs("div",{className:"collect-grid",children:[n.jsxs("div",{className:"collect-section main-options",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h3",{children:t("collect.oneClickCollection")}),n.jsx("p",{children:t("collect.oneClickDesc")})]}),n.jsxs("div",{className:"options-group",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.includeSystemInfo,onChange:()=>P("includeSystemInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),j.includeSystemInfo&&n.jsxs("div",{className:"sub-options",children:[n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeSysInfo,onChange:()=>P("includeSysInfo")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeProcesses,onChange:()=>P("includeProcesses")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemProcesses")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeNetwork,onChange:()=>P("includeNetwork")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemNetwork")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeDlls,onChange:()=>P("includeDlls")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDlls")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeDrivers,onChange:()=>P("includeDrivers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemDrivers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeUsers,onChange:()=>P("includeUsers")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemUsers")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeRegistry,onChange:()=>P("includeRegistry")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemRegistry")})]}),n.jsxs("label",{className:"toggle-label sub",children:[n.jsx("input",{type:"checkbox",checked:j.includeTasks,onChange:()=>P("includeTasks")}),n.jsx("span",{className:"toggle-text",children:t("collect.systemTasks")})]})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.includeLogs,onChange:()=>P("includeLogs")}),n.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),n.jsxs("div",{className:"performance-section",children:[n.jsx("h4",{children:t("collect.performanceSettings")}),n.jsxs("div",{className:"performance-grid",children:[n.jsxs("div",{className:"performance-item",children:[n.jsx("label",{children:t("collect.threads")}),n.jsx("div",{className:"thread-selector",children:[1,2,4,8].map(B=>n.jsx("button",{className:o===B?"active":"",onClick:()=>c(B),children:B},B))})]}),n.jsxs("div",{className:"performance-hint",children:[n.jsx("span",{className:"hint-icon",children:"💡"}),n.jsx("span",{children:t("collect.threadHint")})]})]})]}),n.jsxs("div",{className:"compression-options",children:[n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.compress,onChange:()=>P("compress")}),n.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),n.jsxs("label",{className:"toggle-label",children:[n.jsx("input",{type:"checkbox",checked:j.calculateHash,onChange:()=>P("calculateHash")}),n.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{onClick:I,disabled:e,className:"btn-primary btn-collect",children:e?n.jsxs(n.Fragment,{children:[n.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):n.jsxs(n.Fragment,{children:[n.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),n.jsx("polyline",{points:"7 10 12 15 17 10"}),n.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),n.jsx("button",{onClick:R,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")}),n.jsx("button",{onClick:$,disabled:e,className:"btn-secondary btn-import-alert",children:t("collect.importWithAlertBtn")}),n.jsx("button",{onClick:L,disabled:e,className:"btn-secondary btn-evtx2csv",children:t("collect.evtx2csvBtn")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[n.jsx("h3",{children:t("collect.logSources")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(A).map(([B,U])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:B}),U.map(M=>n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:M.enabled,onChange:()=>k(M.id)}),n.jsx("span",{className:"checkbox-text",children:M.name})]},M.id))]},B))]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.excludedLogs")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(T).map(([B,U])=>n.jsxs("div",{className:"log-group",children:[n.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),U.map(M=>n.jsxs("label",{className:"checkbox-label exclude",children:[n.jsx("input",{type:"checkbox",checked:M.enabled,onChange:()=>S(M.id)}),n.jsx("span",{className:"checkbox-text",children:M.name})]},M.id))]},B)),n.jsxs("div",{className:"custom-exclude",children:[n.jsx("label",{children:t("collect.customExclude")}),n.jsx("input",{type:"text",value:p,onChange:B=>m(B.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),n.jsxs("div",{className:"collect-section",children:[n.jsxs("div",{className:"section-header collapsible",children:[n.jsx("h3",{children:t("collect.customPaths")}),n.jsx("span",{className:"collapse-icon",children:"▼"})]}),n.jsxs("div",{className:"custom-path-section",children:[n.jsx("label",{children:t("collect.customPathsLabel")}),n.jsx("textarea",{value:u,onChange:B=>h(B.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),n.jsxs("div",{className:"additional-options",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.additionalArtifacts")})}),n.jsxs("div",{className:"artifacts-grid",children:[n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includePrefetch,onChange:()=>P("includePrefetch")}),n.jsx("div",{className:"artifact-icon",children:"📁"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),n.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeShimcache,onChange:()=>P("includeShimcache")}),n.jsx("div",{className:"artifact-icon",children:"🔧"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeAmcache,onChange:()=>P("includeAmcache")}),n.jsx("div",{className:"artifact-icon",children:"📝"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),n.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeUserassist,onChange:()=>P("includeUserassist")}),n.jsx("div",{className:"artifact-icon",children:"🎯"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),n.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeRegistry,onChange:()=>P("includeRegistry")}),n.jsx("div",{className:"artifact-icon",children:"🗄️"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.registry")}),n.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),n.jsxs("label",{className:"artifact-card",children:[n.jsx("input",{type:"checkbox",checked:j.includeTasks,onChange:()=>P("includeTasks")}),n.jsx("div",{className:"artifact-icon",children:"📅"}),n.jsxs("div",{className:"artifact-info",children:[n.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),n.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),r&&n.jsxs("div",{className:"status-panel",children:[n.jsxs("div",{className:"status-header",children:[n.jsx("span",{className:"status-icon",children:"📊"}),n.jsx("span",{children:t("collect.status")}),n.jsx("button",{className:"status-close",onClick:()=>l(""),children:"×"})]}),n.jsx("pre",{className:"status-content",children:r})]}),n.jsxs("div",{className:"cli-reference",children:[n.jsx("div",{className:"section-header",children:n.jsx("h3",{children:t("collect.cliReference")})}),n.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${o}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function Kk(){const{t}=at(),[e,s]=C.useState([]),[r,l]=C.useState([]),[o,c]=C.useState(0),[u,h]=C.useState(0),[p]=C.useState(100),[m,v]=C.useState(!1),[N,w]=C.useState(null),[b,j]=C.useState("all");C.useEffect(()=>{y(),k()},[]);const y=()=>{fetch("/api/logs/files").then(W=>W.json()).then(W=>{l(W.files||[])}).catch(console.error)},k=(W=0)=>{v(!0),w(null),fetch(`/api/logs?offset=${W}&limit=${p}`).then(V=>V.json()).then(V=>{s(V.entries||[]),c(V.total||0),h(W),v(!1)}).catch(V=>{w(V.message||t("common.error")),v(!1)})},S=()=>{k(u)},P=W=>{j(W)},I=W=>{switch(W.toLowerCase()){case"debug":return"#888";case"info":return"#00d9ff";case"warn":return"#f59e0b";case"error":return"#ef4444";case"fatal":return"#dc2626";default:return"#888"}},R=b==="all"?e:e.filter(W=>W.level.toLowerCase()===b.toLowerCase()),$=W=>W.message==="[METRICS]",L=W=>W.message==="[STARTUP]",A=W=>W.message==="[PANIC]",T=W=>{try{return new Date(W).toLocaleString()}catch{return W}},B=W=>{if(W===0)return"0 B";const V=1024,ae=["B","KB","MB","GB"],E=Math.floor(Math.log(W)/Math.log(V));return parseFloat((W/Math.pow(V,E)).toFixed(2))+" "+ae[E]},U=Math.ceil(o/p),M=Math.floor(u/p)+1;return n.jsxs("div",{className:"logs-page",children:[n.jsxs("div",{className:"page-header",children:[n.jsx("h2",{children:t("logs.title")}),n.jsx("button",{onClick:S,className:"btn-secondary",disabled:m,children:t(m?"common.loading":"logs.refresh")})]}),n.jsxs("div",{className:"logs-info",children:[n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.totalEntries"),":"]}),n.jsx("span",{className:"info-value",children:o})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.currentPage"),":"]}),n.jsxs("span",{className:"info-value",children:[M," / ",U]})]}),n.jsxs("div",{className:"info-card",children:[n.jsxs("span",{className:"info-label",children:[t("logs.logFiles"),":"]}),n.jsx("span",{className:"info-value",children:r.length})]})]}),n.jsx("div",{className:"logs-filters",children:n.jsxs("div",{className:"filter-group",children:[n.jsxs("span",{className:"filter-label",children:[t("logs.filterByLevel"),":"]}),n.jsx("button",{className:`filter-btn ${b==="all"?"active":""}`,onClick:()=>P("all"),children:t("logs.all")}),n.jsx("button",{className:`filter-btn ${b==="debug"?"active":""}`,onClick:()=>P("debug"),children:t("settings.debug")}),n.jsx("button",{className:`filter-btn ${b==="info"?"active":""}`,onClick:()=>P("info"),children:t("settings.info")}),n.jsx("button",{className:`filter-btn ${b==="warn"?"active":""}`,onClick:()=>P("warn"),children:t("settings.warn")}),n.jsx("button",{className:`filter-btn ${b==="error"?"active":""}`,onClick:()=>P("error"),children:t("settings.error")})]})}),n.jsxs("div",{className:"logs-files",children:[n.jsx("h3",{children:t("logs.logFiles")}),n.jsx("div",{className:"files-list",children:r.map((W,V)=>n.jsxs("div",{className:"file-item",children:[n.jsx("span",{className:"file-name",children:W.name}),n.jsx("span",{className:"file-size",children:B(W.size)}),n.jsx("span",{className:"file-time",children:new Date(W.mod_time).toLocaleString()}),W.is_main&&n.jsx("span",{className:"file-badge",children:t("logs.current")})]},V))})]}),n.jsxs("div",{className:"logs-viewer",children:[n.jsx("h3",{children:t("logs.viewer")}),N&&n.jsx("div",{className:"error-message",children:N}),n.jsx("div",{className:"logs-container",children:m?n.jsx("div",{className:"loading-state",children:t("common.loading")}):R.length===0?n.jsx("div",{className:"empty-state",children:t("logs.noLogs")}):n.jsxs("table",{className:"logs-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:t("logs.timestamp")}),n.jsx("th",{children:t("logs.level")}),n.jsx("th",{children:t("logs.message")}),n.jsx("th",{children:t("logs.details")})]})}),n.jsx("tbody",{children:R.map((W,V)=>{var ae,E,J,X;return n.jsxs("tr",{className:`log-entry log-level-${W.level.toLowerCase()}`,children:[n.jsx("td",{className:"log-time",children:T(W.timestamp)}),n.jsx("td",{className:"log-level",style:{color:I(W.level)},children:W.level.toUpperCase()}),n.jsxs("td",{className:"log-message",children:[$(W)&&n.jsx("span",{className:"log-badge metrics",children:t("logs.metrics")}),L(W)&&n.jsx("span",{className:"log-badge startup",children:t("logs.startup")}),A(W)&&n.jsx("span",{className:"log-badge panic",children:t("logs.panic")}),W.message]}),n.jsxs("td",{className:"log-details",children:[W.message==="[METRICS]"&&n.jsxs("div",{className:"metrics-details",children:[n.jsxs("span",{className:"metric-item",children:["Mem Alloc: ",n.jsxs("b",{children:[(ae=W.mem_alloc_mb)==null?void 0:ae.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Total: ",n.jsxs("b",{children:[(E=W.mem_total_mb)==null?void 0:E.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Sys: ",n.jsxs("b",{children:[(J=W.mem_sys_mb)==null?void 0:J.toFixed(2)," MB"]})]}),n.jsxs("span",{className:"metric-item",children:["Goroutines: ",n.jsx("b",{children:W.num_goroutine})]}),n.jsxs("span",{className:"metric-item",children:["CPU: ",n.jsx("b",{children:W.num_cpu})]}),n.jsxs("span",{className:"metric-item",children:["Heap Objects: ",n.jsx("b",{children:(X=W.heap_objects)==null?void 0:X.toLocaleString()})]})]}),W.message==="[API]"&&n.jsxs("div",{className:"api-details",children:[n.jsx("span",{className:"api-method",children:W.method}),n.jsx("span",{className:"api-path",children:W.path}),n.jsx("span",{className:"api-status",style:{color:W.status&&W.status>=400?"#ef4444":"#22c55e"},children:W.status}),n.jsx("span",{className:"api-latency",children:W.latency}),n.jsx("span",{className:"api-ip",children:W.client_ip})]}),W.message==="[STARTUP]"&&n.jsxs("span",{className:"startup-reason",children:["Reason: ",W.reason]}),W.message==="[PANIC]"&&n.jsxs("div",{className:"panic-details",children:[n.jsx("span",{className:"panic-error",children:W.error}),n.jsxs("span",{className:"panic-path",children:["Path: ",W.path]})]}),W.message==="[ERROR]"&&n.jsxs("div",{className:"error-details",children:[n.jsxs("span",{className:"error-module",children:["Module: ",W.module]}),n.jsx("span",{className:"error-msg",children:W.error})]})]})]},V)})})]})}),n.jsxs("div",{className:"pagination",children:[n.jsx("button",{onClick:()=>k(0),disabled:u===0||m,children:t("logs.first")}),n.jsx("button",{onClick:()=>k(Math.max(0,u-p)),disabled:u===0||m,children:t("events.previous")}),n.jsx("span",{className:"page-info",children:t("events.page",{page:M,total:U})}),n.jsx("button",{onClick:()=>k(u+p),disabled:u+p>=o||m,children:t("events.next")}),n.jsx("button",{onClick:()=>k(Math.max(0,(U-1)*p)),disabled:u+p>=o||m,children:t("logs.last")})]})]}),n.jsx("style",{children:`
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
      `})]})}function Xk(){const{t}=at();return n.jsxs("nav",{className:"sidebar",children:[n.jsx("h1",{children:t("app.title")}),n.jsxs("ul",{children:[n.jsx("li",{children:n.jsx(Ge,{to:"/",children:t("nav.dashboard")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/events",children:t("nav.events")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/alerts",children:t("nav.alerts")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/timeline",children:t("nav.timeline")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/collect",children:t("nav.collect")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/analyze",children:t("nav.analyze")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/correlation",children:t("nav.correlation")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/multi",children:t("nav.multi")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/query",children:t("nav.query")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/ueba",children:t("nav.ueba")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/suppress",children:t("nav.suppress")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/live",children:t("nav.live")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/persistence",children:t("nav.persistence")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/reports",children:t("nav.reports")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/forensics",children:t("nav.forensics")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/system-info",children:t("nav.systemInfo")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/rules",children:t("nav.rules")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/metrics",children:t("nav.metrics")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/logs",children:t("nav.logs")})}),n.jsx("li",{children:n.jsx(Ge,{to:"/settings",children:t("nav.settings")})})]})]})}function Gk(){return n.jsxs(n.Fragment,{children:[n.jsx(Q0,{}),n.jsx(Xk,{}),n.jsx("main",{className:"content",children:n.jsxs(A0,{children:[n.jsx(Qe,{path:"/",element:n.jsx(vk,{})}),n.jsx(Qe,{path:"/events",element:n.jsx(yk,{})}),n.jsx(Qe,{path:"/events/:id",element:n.jsx(jk,{})}),n.jsx(Qe,{path:"/alerts",element:n.jsx(Nk,{})}),n.jsx(Qe,{path:"/alerts/:id",element:n.jsx(wk,{})}),n.jsx(Qe,{path:"/timeline",element:n.jsx(_k,{})}),n.jsx(Qe,{path:"/collect",element:n.jsx(Qk,{})}),n.jsx(Qe,{path:"/analyze",element:n.jsx(Mk,{})}),n.jsx(Qe,{path:"/correlation",element:n.jsx(zk,{})}),n.jsx(Qe,{path:"/multi",element:n.jsx(Ik,{})}),n.jsx(Qe,{path:"/query",element:n.jsx(Fk,{})}),n.jsx(Qe,{path:"/ueba",element:n.jsx(Wk,{})}),n.jsx(Qe,{path:"/suppress",element:n.jsx(qk,{})}),n.jsx(Qe,{path:"/live",element:n.jsx(Yk,{})}),n.jsx(Qe,{path:"/persistence",element:n.jsx(Dk,{})}),n.jsx(Qe,{path:"/reports",element:n.jsx(kk,{})}),n.jsx(Qe,{path:"/forensics",element:n.jsx(Sk,{})}),n.jsx(Qe,{path:"/system-info",element:n.jsx(Ck,{})}),n.jsx(Qe,{path:"/rules",element:n.jsx(Ek,{})}),n.jsx(Qe,{path:"/settings",element:n.jsx(Rk,{})}),n.jsx(Qe,{path:"/metrics",element:n.jsx(Pk,{})}),n.jsx(Qe,{path:"/logs",element:n.jsx(Kk,{})})]})})]})}function Jk(){return n.jsx(Y0,{children:n.jsx("div",{className:"app",children:n.jsx(Gk,{})})})}By.createRoot(document.getElementById("root")).render(n.jsx(Xm.StrictMode,{children:n.jsx(F0,{children:n.jsx(Jk,{})})}));
