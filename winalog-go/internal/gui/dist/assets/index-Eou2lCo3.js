var by=Object.defineProperty;var jy=(t,e,n)=>e in t?by(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ue=(t,e,n)=>jy(t,typeof e!="symbol"?e+"":e,n);function wy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const a=Object.getOwnPropertyDescriptor(i,o);a&&Object.defineProperty(t,o,a.get?a:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Bm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lc={exports:{}},sr={},Oc={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function _y(){if(Bf)return ke;Bf=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,k={};function j(D,q,me){this.props=D,this.context=q,this.refs=k,this.updater=me||b}j.prototype.isReactComponent={},j.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},j.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=j.prototype;function N(D,q,me){this.props=D,this.context=q,this.refs=k,this.updater=me||b}var T=N.prototype=new S;T.constructor=N,_(T,j.prototype),T.isPureReactComponent=!0;var A=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function $(D,q,me){var pe,ve={},ye=null,Pe=null;if(q!=null)for(pe in q.ref!==void 0&&(Pe=q.ref),q.key!==void 0&&(ye=""+q.key),q)E.call(q,pe)&&!U.hasOwnProperty(pe)&&(ve[pe]=q[pe]);var K=arguments.length-2;if(K===1)ve.children=me;else if(1<K){for(var le=Array(K),we=0;we<K;we++)le[we]=arguments[we+2];ve.children=le}if(D&&D.defaultProps)for(pe in K=D.defaultProps,K)ve[pe]===void 0&&(ve[pe]=K[pe]);return{$$typeof:t,type:D,key:ye,ref:Pe,props:ve,_owner:O.current}}function Y(D,q){return{$$typeof:t,type:D.type,key:q,ref:D.ref,props:D.props,_owner:D._owner}}function Q(D){return typeof D=="object"&&D!==null&&D.$$typeof===t}function se(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(me){return q[me]})}var B=/\/+/g;function V(D,q){return typeof D=="object"&&D!==null&&D.key!=null?se(""+D.key):q.toString(36)}function L(D,q,me,pe,ve){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var Pe=!1;if(D===null)Pe=!0;else switch(ye){case"string":case"number":Pe=!0;break;case"object":switch(D.$$typeof){case t:case e:Pe=!0}}if(Pe)return Pe=D,ve=ve(Pe),D=pe===""?"."+V(Pe,0):pe,A(ve)?(me="",D!=null&&(me=D.replace(B,"$&/")+"/"),L(ve,q,me,"",function(we){return we})):ve!=null&&(Q(ve)&&(ve=Y(ve,me+(!ve.key||Pe&&Pe.key===ve.key?"":(""+ve.key).replace(B,"$&/")+"/")+D)),q.push(ve)),1;if(Pe=0,pe=pe===""?".":pe+":",A(D))for(var K=0;K<D.length;K++){ye=D[K];var le=pe+V(ye,K);Pe+=L(ye,q,me,le,ve)}else if(le=y(D),typeof le=="function")for(D=le.call(D),K=0;!(ye=D.next()).done;)ye=ye.value,le=pe+V(ye,K++),Pe+=L(ye,q,me,le,ve);else if(ye==="object")throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Pe}function re(D,q,me){if(D==null)return D;var pe=[],ve=0;return L(D,pe,"","",function(ye){return q.call(me,ye,ve++)}),pe}function W(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(me){(D._status===0||D._status===-1)&&(D._status=1,D._result=me)},function(me){(D._status===0||D._status===-1)&&(D._status=2,D._result=me)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var ne={current:null},X={transition:null},ie={ReactCurrentDispatcher:ne,ReactCurrentBatchConfig:X,ReactCurrentOwner:O};function ee(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:re,forEach:function(D,q,me){re(D,function(){q.apply(this,arguments)},me)},count:function(D){var q=0;return re(D,function(){q++}),q},toArray:function(D){return re(D,function(q){return q})||[]},only:function(D){if(!Q(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ke.Component=j,ke.Fragment=n,ke.Profiler=o,ke.PureComponent=N,ke.StrictMode=i,ke.Suspense=h,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,ke.act=ee,ke.cloneElement=function(D,q,me){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var pe=_({},D.props),ve=D.key,ye=D.ref,Pe=D._owner;if(q!=null){if(q.ref!==void 0&&(ye=q.ref,Pe=O.current),q.key!==void 0&&(ve=""+q.key),D.type&&D.type.defaultProps)var K=D.type.defaultProps;for(le in q)E.call(q,le)&&!U.hasOwnProperty(le)&&(pe[le]=q[le]===void 0&&K!==void 0?K[le]:q[le])}var le=arguments.length-2;if(le===1)pe.children=me;else if(1<le){K=Array(le);for(var we=0;we<le;we++)K[we]=arguments[we+2];pe.children=K}return{$$typeof:t,type:D.type,key:ve,ref:ye,props:pe,_owner:Pe}},ke.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:a,_context:D},D.Consumer=D},ke.createElement=$,ke.createFactory=function(D){var q=$.bind(null,D);return q.type=D,q},ke.createRef=function(){return{current:null}},ke.forwardRef=function(D){return{$$typeof:u,render:D}},ke.isValidElement=Q,ke.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:W}},ke.memo=function(D,q){return{$$typeof:p,type:D,compare:q===void 0?null:q}},ke.startTransition=function(D){var q=X.transition;X.transition={};try{D()}finally{X.transition=q}},ke.unstable_act=ee,ke.useCallback=function(D,q){return ne.current.useCallback(D,q)},ke.useContext=function(D){return ne.current.useContext(D)},ke.useDebugValue=function(){},ke.useDeferredValue=function(D){return ne.current.useDeferredValue(D)},ke.useEffect=function(D,q){return ne.current.useEffect(D,q)},ke.useId=function(){return ne.current.useId()},ke.useImperativeHandle=function(D,q,me){return ne.current.useImperativeHandle(D,q,me)},ke.useInsertionEffect=function(D,q){return ne.current.useInsertionEffect(D,q)},ke.useLayoutEffect=function(D,q){return ne.current.useLayoutEffect(D,q)},ke.useMemo=function(D,q){return ne.current.useMemo(D,q)},ke.useReducer=function(D,q,me){return ne.current.useReducer(D,q,me)},ke.useRef=function(D){return ne.current.useRef(D)},ke.useState=function(D){return ne.current.useState(D)},ke.useSyncExternalStore=function(D,q,me){return ne.current.useSyncExternalStore(D,q,me)},ke.useTransition=function(){return ne.current.useTransition()},ke.version="18.3.1",ke}var Hf;function kd(){return Hf||(Hf=1,Oc.exports=_y()),Oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function ky(){if(Wf)return sr;Wf=1;var t=kd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,p){var g,v={},y=null,b=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(b=h.ref);for(g in h)i.call(h,g)&&!a.hasOwnProperty(g)&&(v[g]=h[g]);if(u&&u.defaultProps)for(g in h=u.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:u,key:y,ref:b,props:v,_owner:o.current}}return sr.Fragment=n,sr.jsx=c,sr.jsxs=c,sr}var $f;function Sy(){return $f||($f=1,Lc.exports=ky()),Lc.exports}var l=Sy(),R=kd();const Hm=Bm(R),Ny=wy({__proto__:null,default:Hm},[R]);var Xo={},zc={exports:{}},_t={},Ic={exports:{}},Fc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uf;function Cy(){return Uf||(Uf=1,(function(t){function e(X,ie){var ee=X.length;X.push(ie);e:for(;0<ee;){var D=ee-1>>>1,q=X[D];if(0<o(q,ie))X[D]=ie,X[ee]=q,ee=D;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ie=X[0],ee=X.pop();if(ee!==ie){X[0]=ee;e:for(var D=0,q=X.length,me=q>>>1;D<me;){var pe=2*(D+1)-1,ve=X[pe],ye=pe+1,Pe=X[ye];if(0>o(ve,ee))ye<q&&0>o(Pe,ve)?(X[D]=Pe,X[ye]=ee,D=ye):(X[D]=ve,X[pe]=ee,D=pe);else if(ye<q&&0>o(Pe,ee))X[D]=Pe,X[ye]=ee,D=ye;else break e}}return ie}function o(X,ie){var ee=X.sortIndex-ie.sortIndex;return ee!==0?ee:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();t.unstable_now=function(){return c.now()-u}}var h=[],p=[],g=1,v=null,y=3,b=!1,_=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(X){for(var ie=n(p);ie!==null;){if(ie.callback===null)i(p);else if(ie.startTime<=X)i(p),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=n(p)}}function A(X){if(k=!1,T(X),!_)if(n(h)!==null)_=!0,W(E);else{var ie=n(p);ie!==null&&ne(A,ie.startTime-X)}}function E(X,ie){_=!1,k&&(k=!1,S($),$=-1),b=!0;var ee=y;try{for(T(ie),v=n(h);v!==null&&(!(v.expirationTime>ie)||X&&!se());){var D=v.callback;if(typeof D=="function"){v.callback=null,y=v.priorityLevel;var q=D(v.expirationTime<=ie);ie=t.unstable_now(),typeof q=="function"?v.callback=q:v===n(h)&&i(h),T(ie)}else i(h);v=n(h)}if(v!==null)var me=!0;else{var pe=n(p);pe!==null&&ne(A,pe.startTime-ie),me=!1}return me}finally{v=null,y=ee,b=!1}}var O=!1,U=null,$=-1,Y=5,Q=-1;function se(){return!(t.unstable_now()-Q<Y)}function B(){if(U!==null){var X=t.unstable_now();Q=X;var ie=!0;try{ie=U(!0,X)}finally{ie?V():(O=!1,U=null)}}else O=!1}var V;if(typeof N=="function")V=function(){N(B)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,re=L.port2;L.port1.onmessage=B,V=function(){re.postMessage(null)}}else V=function(){j(B,0)};function W(X){U=X,O||(O=!0,V())}function ne(X,ie){$=j(function(){X(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){_||b||(_=!0,W(E))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(X){switch(y){case 1:case 2:case 3:var ie=3;break;default:ie=y}var ee=y;y=ie;try{return X()}finally{y=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ee=y;y=X;try{return ie()}finally{y=ee}},t.unstable_scheduleCallback=function(X,ie,ee){var D=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?D+ee:D):ee=D,X){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ee+q,X={id:g++,callback:ie,priorityLevel:X,startTime:ee,expirationTime:q,sortIndex:-1},ee>D?(X.sortIndex=ee,e(p,X),n(h)===null&&X===n(p)&&(k?(S($),$=-1):k=!0,ne(A,ee-D))):(X.sortIndex=q,e(h,X),_||b||(_=!0,W(E))),X},t.unstable_shouldYield=se,t.unstable_wrapCallback=function(X){var ie=y;return function(){var ee=y;y=ie;try{return X.apply(this,arguments)}finally{y=ee}}}})(Fc)),Fc}var Vf;function Ey(){return Vf||(Vf=1,Ic.exports=Cy()),Ic.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Py(){if(Yf)return _t;Yf=1;var t=kd(),e=Ey();function n(s){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+s,d=1;d<arguments.length;d++)r+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+s+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(s,r){c(s,r),c(s+"Capture",r)}function c(s,r){for(o[s]=r,s=0;s<r.length;s++)i.add(r[s])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function y(s){return h.call(v,s)?!0:h.call(g,s)?!1:p.test(s)?v[s]=!0:(g[s]=!0,!1)}function b(s,r,d,f){if(d!==null&&d.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:d!==null?!d.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function _(s,r,d,f){if(r===null||typeof r>"u"||b(s,r,d,f))return!0;if(f)return!1;if(d!==null)switch(d.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(s,r,d,f,m,x,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=d,this.propertyName=s,this.type=r,this.sanitizeURL=x,this.removeEmptyString=w}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){j[s]=new k(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var r=s[0];j[r]=new k(r,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){j[s]=new k(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){j[s]=new k(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){j[s]=new k(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){j[s]=new k(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){j[s]=new k(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){j[s]=new k(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){j[s]=new k(s,5,!1,s.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function N(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var r=s.replace(S,N);j[r]=new k(r,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var r=s.replace(S,N);j[r]=new k(r,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var r=s.replace(S,N);j[r]=new k(r,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){j[s]=new k(s,1,!1,s.toLowerCase(),null,!1,!1)}),j.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){j[s]=new k(s,1,!1,s.toLowerCase(),null,!0,!0)});function T(s,r,d,f){var m=j.hasOwnProperty(r)?j[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,d,m,f)&&(d=null),f||m===null?y(r)&&(d===null?s.removeAttribute(r):s.setAttribute(r,""+d)):m.mustUseProperty?s[m.propertyName]=d===null?m.type===3?!1:"":d:(r=m.attributeName,f=m.attributeNamespace,d===null?s.removeAttribute(r):(m=m.type,d=m===3||m===4&&d===!0?"":""+d,f?s.setAttributeNS(f,r,d):s.setAttribute(r,d))))}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),se=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ne=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(s){return s===null||typeof s!="object"?null:(s=X&&s[X]||s["@@iterator"],typeof s=="function"?s:null)}var ee=Object.assign,D;function q(s){if(D===void 0)try{throw Error()}catch(d){var r=d.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+s}var me=!1;function pe(s,r){if(!s||me)return"";me=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var f=F}Reflect.construct(s,[],r)}else{try{r.call()}catch(F){f=F}s.call(r.prototype)}else{try{throw Error()}catch(F){f=F}s()}}catch(F){if(F&&f&&typeof F.stack=="string"){for(var m=F.stack.split(`
`),x=f.stack.split(`
`),w=m.length-1,C=x.length-1;1<=w&&0<=C&&m[w]!==x[C];)C--;for(;1<=w&&0<=C;w--,C--)if(m[w]!==x[C]){if(w!==1||C!==1)do if(w--,C--,0>C||m[w]!==x[C]){var P=`
`+m[w].replace(" at new "," at ");return s.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",s.displayName)),P}while(1<=w&&0<=C);break}}}finally{me=!1,Error.prepareStackTrace=d}return(s=s?s.displayName||s.name:"")?q(s):""}function ve(s){switch(s.tag){case 5:return q(s.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return s=pe(s.type,!1),s;case 11:return s=pe(s.type.render,!1),s;case 1:return s=pe(s.type,!0),s;default:return""}}function ye(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case U:return"Fragment";case O:return"Portal";case Y:return"Profiler";case $:return"StrictMode";case V:return"Suspense";case L:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case se:return(s.displayName||"Context")+".Consumer";case Q:return(s._context.displayName||"Context")+".Provider";case B:var r=s.render;return s=s.displayName,s||(s=r.displayName||r.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case re:return r=s.displayName||null,r!==null?r:ye(s.type)||"Memo";case W:r=s._payload,s=s._init;try{return ye(s(r))}catch{}}return null}function Pe(s){var r=s.type;switch(s.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=r.render,s=s.displayName||s.name||"",r.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(r);case 8:return r===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function K(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function le(s){var r=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function we(s){var r=le(s)?"checked":"value",d=Object.getOwnPropertyDescriptor(s.constructor.prototype,r),f=""+s[r];if(!s.hasOwnProperty(r)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var m=d.get,x=d.set;return Object.defineProperty(s,r,{configurable:!0,get:function(){return m.call(this)},set:function(w){f=""+w,x.call(this,w)}}),Object.defineProperty(s,r,{enumerable:d.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){s._valueTracker=null,delete s[r]}}}}function Lt(s){s._valueTracker||(s._valueTracker=we(s))}function tn(s){if(!s)return!1;var r=s._valueTracker;if(!r)return!0;var d=r.getValue(),f="";return s&&(f=le(s)?s.checked?"true":"false":s.value),s=f,s!==d?(r.setValue(s),!0):!1}function rs(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Rn(s,r){var d=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??s._wrapperState.initialChecked})}function pn(s,r){var d=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;d=K(r.value!=null?r.value:d),s._wrapperState={initialChecked:f,initialValue:d,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Et(s,r){r=r.checked,r!=null&&T(s,"checked",r,!1)}function it(s,r){Et(s,r);var d=K(r.value),f=r.type;if(d!=null)f==="number"?(d===0&&s.value===""||s.value!=d)&&(s.value=""+d):s.value!==""+d&&(s.value=""+d);else if(f==="submit"||f==="reset"){s.removeAttribute("value");return}r.hasOwnProperty("value")?Ua(s,r.type,d):r.hasOwnProperty("defaultValue")&&Ua(s,r.type,K(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(s.defaultChecked=!!r.defaultChecked)}function mt(s,r,d){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+s._wrapperState.initialValue,d||r===s.value||(s.value=r),s.defaultValue=r}d=s.name,d!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,d!==""&&(s.name=d)}function Ua(s,r,d){(r!=="number"||rs(s.ownerDocument)!==s)&&(d==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+d&&(s.defaultValue=""+d))}var vi=Array.isArray;function zs(s,r,d,f){if(s=s.options,r){r={};for(var m=0;m<d.length;m++)r["$"+d[m]]=!0;for(d=0;d<s.length;d++)m=r.hasOwnProperty("$"+s[d].value),s[d].selected!==m&&(s[d].selected=m),m&&f&&(s[d].defaultSelected=!0)}else{for(d=""+K(d),r=null,m=0;m<s.length;m++){if(s[m].value===d){s[m].selected=!0,f&&(s[m].defaultSelected=!0);return}r!==null||s[m].disabled||(r=s[m])}r!==null&&(r.selected=!0)}}function Va(s,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Xd(s,r){var d=r.value;if(d==null){if(d=r.children,r=r.defaultValue,d!=null){if(r!=null)throw Error(n(92));if(vi(d)){if(1<d.length)throw Error(n(93));d=d[0]}r=d}r==null&&(r=""),d=r}s._wrapperState={initialValue:K(d)}}function Qd(s,r){var d=K(r.value),f=K(r.defaultValue);d!=null&&(d=""+d,d!==s.value&&(s.value=d),r.defaultValue==null&&s.defaultValue!==d&&(s.defaultValue=d)),f!=null&&(s.defaultValue=""+f)}function Gd(s){var r=s.textContent;r===s._wrapperState.initialValue&&r!==""&&r!==null&&(s.value=r)}function Jd(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ya(s,r){return s==null||s==="http://www.w3.org/1999/xhtml"?Jd(r):s==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Br,Zd=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,d,f,m){MSApp.execUnsafeLocalFunction(function(){return s(r,d,f,m)})}:s})(function(s,r){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=r;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Br.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;r.firstChild;)s.appendChild(r.firstChild)}});function yi(s,r){if(r){var d=s.firstChild;if(d&&d===s.lastChild&&d.nodeType===3){d.nodeValue=r;return}}s.textContent=r}var bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kx=["Webkit","ms","Moz","O"];Object.keys(bi).forEach(function(s){kx.forEach(function(r){r=r+s.charAt(0).toUpperCase()+s.substring(1),bi[r]=bi[s]})});function eu(s,r,d){return r==null||typeof r=="boolean"||r===""?"":d||typeof r!="number"||r===0||bi.hasOwnProperty(s)&&bi[s]?(""+r).trim():r+"px"}function tu(s,r){s=s.style;for(var d in r)if(r.hasOwnProperty(d)){var f=d.indexOf("--")===0,m=eu(d,r[d],f);d==="float"&&(d="cssFloat"),f?s.setProperty(d,m):s[d]=m}}var Sx=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(s,r){if(r){if(Sx[s]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Ka(s,r){if(s.indexOf("-")===-1)return typeof r.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function Qa(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Ga=null,Is=null,Fs=null;function nu(s){if(s=Wi(s)){if(typeof Ga!="function")throw Error(n(280));var r=s.stateNode;r&&(r=co(r),Ga(s.stateNode,s.type,r))}}function su(s){Is?Fs?Fs.push(s):Fs=[s]:Is=s}function iu(){if(Is){var s=Is,r=Fs;if(Fs=Is=null,nu(s),r)for(s=0;s<r.length;s++)nu(r[s])}}function ru(s,r){return s(r)}function ou(){}var Ja=!1;function au(s,r,d){if(Ja)return s(r,d);Ja=!0;try{return ru(s,r,d)}finally{Ja=!1,(Is!==null||Fs!==null)&&(ou(),iu())}}function ji(s,r){var d=s.stateNode;if(d===null)return null;var f=co(d);if(f===null)return null;d=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(s=s.type,f=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!f;break e;default:s=!1}if(s)return null;if(d&&typeof d!="function")throw Error(n(231,r,typeof d));return d}var Za=!1;if(u)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){Za=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{Za=!1}function Nx(s,r,d,f,m,x,w,C,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(d,F)}catch(J){this.onError(J)}}var _i=!1,Hr=null,Wr=!1,el=null,Cx={onError:function(s){_i=!0,Hr=s}};function Ex(s,r,d,f,m,x,w,C,P){_i=!1,Hr=null,Nx.apply(Cx,arguments)}function Px(s,r,d,f,m,x,w,C,P){if(Ex.apply(this,arguments),_i){if(_i){var F=Hr;_i=!1,Hr=null}else throw Error(n(198));Wr||(Wr=!0,el=F)}}function os(s){var r=s,d=s;if(s.alternate)for(;r.return;)r=r.return;else{s=r;do r=s,(r.flags&4098)!==0&&(d=r.return),s=r.return;while(s)}return r.tag===3?d:null}function lu(s){if(s.tag===13){var r=s.memoizedState;if(r===null&&(s=s.alternate,s!==null&&(r=s.memoizedState)),r!==null)return r.dehydrated}return null}function cu(s){if(os(s)!==s)throw Error(n(188))}function Rx(s){var r=s.alternate;if(!r){if(r=os(s),r===null)throw Error(n(188));return r!==s?null:s}for(var d=s,f=r;;){var m=d.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){d=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===d)return cu(m),s;if(x===f)return cu(m),r;x=x.sibling}throw Error(n(188))}if(d.return!==f.return)d=m,f=x;else{for(var w=!1,C=m.child;C;){if(C===d){w=!0,d=m,f=x;break}if(C===f){w=!0,f=m,d=x;break}C=C.sibling}if(!w){for(C=x.child;C;){if(C===d){w=!0,d=x,f=m;break}if(C===f){w=!0,f=x,d=m;break}C=C.sibling}if(!w)throw Error(n(189))}}if(d.alternate!==f)throw Error(n(190))}if(d.tag!==3)throw Error(n(188));return d.stateNode.current===d?s:r}function du(s){return s=Rx(s),s!==null?uu(s):null}function uu(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var r=uu(s);if(r!==null)return r;s=s.sibling}return null}var hu=e.unstable_scheduleCallback,fu=e.unstable_cancelCallback,Tx=e.unstable_shouldYield,Ax=e.unstable_requestPaint,We=e.unstable_now,Mx=e.unstable_getCurrentPriorityLevel,tl=e.unstable_ImmediatePriority,pu=e.unstable_UserBlockingPriority,$r=e.unstable_NormalPriority,Dx=e.unstable_LowPriority,mu=e.unstable_IdlePriority,Ur=null,nn=null;function Lx(s){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ur,s,void 0,(s.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:Ix,Ox=Math.log,zx=Math.LN2;function Ix(s){return s>>>=0,s===0?32:31-(Ox(s)/zx|0)|0}var Vr=64,Yr=4194304;function ki(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function qr(s,r){var d=s.pendingLanes;if(d===0)return 0;var f=0,m=s.suspendedLanes,x=s.pingedLanes,w=d&268435455;if(w!==0){var C=w&~m;C!==0?f=ki(C):(x&=w,x!==0&&(f=ki(x)))}else w=d&~m,w!==0?f=ki(w):x!==0&&(f=ki(x));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,x=r&-r,m>=x||m===16&&(x&4194240)!==0))return r;if((f&4)!==0&&(f|=d&16),r=s.entangledLanes,r!==0)for(s=s.entanglements,r&=f;0<r;)d=31-Yt(r),m=1<<d,f|=s[d],r&=~m;return f}function Fx(s,r){switch(s){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bx(s,r){for(var d=s.suspendedLanes,f=s.pingedLanes,m=s.expirationTimes,x=s.pendingLanes;0<x;){var w=31-Yt(x),C=1<<w,P=m[w];P===-1?((C&d)===0||(C&f)!==0)&&(m[w]=Fx(C,r)):P<=r&&(s.expiredLanes|=C),x&=~C}}function nl(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function gu(){var s=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),s}function sl(s){for(var r=[],d=0;31>d;d++)r.push(s);return r}function Si(s,r,d){s.pendingLanes|=r,r!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,r=31-Yt(r),s[r]=d}function Hx(s,r){var d=s.pendingLanes&~r;s.pendingLanes=r,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=r,s.mutableReadLanes&=r,s.entangledLanes&=r,r=s.entanglements;var f=s.eventTimes;for(s=s.expirationTimes;0<d;){var m=31-Yt(d),x=1<<m;r[m]=0,f[m]=-1,s[m]=-1,d&=~x}}function il(s,r){var d=s.entangledLanes|=r;for(s=s.entanglements;d;){var f=31-Yt(d),m=1<<f;m&r|s[f]&r&&(s[f]|=r),d&=~m}}var Re=0;function xu(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var vu,rl,yu,bu,ju,ol=!1,Kr=[],Tn=null,An=null,Mn=null,Ni=new Map,Ci=new Map,Dn=[],Wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(s,r){switch(s){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Ni.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(r.pointerId)}}function Ei(s,r,d,f,m,x){return s===null||s.nativeEvent!==x?(s={blockedOn:r,domEventName:d,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},r!==null&&(r=Wi(r),r!==null&&rl(r)),s):(s.eventSystemFlags|=f,r=s.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),s)}function $x(s,r,d,f,m){switch(r){case"focusin":return Tn=Ei(Tn,s,r,d,f,m),!0;case"dragenter":return An=Ei(An,s,r,d,f,m),!0;case"mouseover":return Mn=Ei(Mn,s,r,d,f,m),!0;case"pointerover":var x=m.pointerId;return Ni.set(x,Ei(Ni.get(x)||null,s,r,d,f,m)),!0;case"gotpointercapture":return x=m.pointerId,Ci.set(x,Ei(Ci.get(x)||null,s,r,d,f,m)),!0}return!1}function _u(s){var r=as(s.target);if(r!==null){var d=os(r);if(d!==null){if(r=d.tag,r===13){if(r=lu(d),r!==null){s.blockedOn=r,ju(s.priority,function(){yu(d)});return}}else if(r===3&&d.stateNode.current.memoizedState.isDehydrated){s.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Xr(s){if(s.blockedOn!==null)return!1;for(var r=s.targetContainers;0<r.length;){var d=ll(s.domEventName,s.eventSystemFlags,r[0],s.nativeEvent);if(d===null){d=s.nativeEvent;var f=new d.constructor(d.type,d);Xa=f,d.target.dispatchEvent(f),Xa=null}else return r=Wi(d),r!==null&&rl(r),s.blockedOn=d,!1;r.shift()}return!0}function ku(s,r,d){Xr(s)&&d.delete(r)}function Ux(){ol=!1,Tn!==null&&Xr(Tn)&&(Tn=null),An!==null&&Xr(An)&&(An=null),Mn!==null&&Xr(Mn)&&(Mn=null),Ni.forEach(ku),Ci.forEach(ku)}function Pi(s,r){s.blockedOn===r&&(s.blockedOn=null,ol||(ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ux)))}function Ri(s){function r(m){return Pi(m,s)}if(0<Kr.length){Pi(Kr[0],s);for(var d=1;d<Kr.length;d++){var f=Kr[d];f.blockedOn===s&&(f.blockedOn=null)}}for(Tn!==null&&Pi(Tn,s),An!==null&&Pi(An,s),Mn!==null&&Pi(Mn,s),Ni.forEach(r),Ci.forEach(r),d=0;d<Dn.length;d++)f=Dn[d],f.blockedOn===s&&(f.blockedOn=null);for(;0<Dn.length&&(d=Dn[0],d.blockedOn===null);)_u(d),d.blockedOn===null&&Dn.shift()}var Bs=A.ReactCurrentBatchConfig,Qr=!0;function Vx(s,r,d,f){var m=Re,x=Bs.transition;Bs.transition=null;try{Re=1,al(s,r,d,f)}finally{Re=m,Bs.transition=x}}function Yx(s,r,d,f){var m=Re,x=Bs.transition;Bs.transition=null;try{Re=4,al(s,r,d,f)}finally{Re=m,Bs.transition=x}}function al(s,r,d,f){if(Qr){var m=ll(s,r,d,f);if(m===null)Sl(s,r,f,Gr,d),wu(s,f);else if($x(m,s,r,d,f))f.stopPropagation();else if(wu(s,f),r&4&&-1<Wx.indexOf(s)){for(;m!==null;){var x=Wi(m);if(x!==null&&vu(x),x=ll(s,r,d,f),x===null&&Sl(s,r,f,Gr,d),x===m)break;m=x}m!==null&&f.stopPropagation()}else Sl(s,r,f,null,d)}}var Gr=null;function ll(s,r,d,f){if(Gr=null,s=Qa(f),s=as(s),s!==null)if(r=os(s),r===null)s=null;else if(d=r.tag,d===13){if(s=lu(r),s!==null)return s;s=null}else if(d===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;s=null}else r!==s&&(s=null);return Gr=s,null}function Su(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mx()){case tl:return 1;case pu:return 4;case $r:case Dx:return 16;case mu:return 536870912;default:return 16}default:return 16}}var Ln=null,cl=null,Jr=null;function Nu(){if(Jr)return Jr;var s,r=cl,d=r.length,f,m="value"in Ln?Ln.value:Ln.textContent,x=m.length;for(s=0;s<d&&r[s]===m[s];s++);var w=d-s;for(f=1;f<=w&&r[d-f]===m[x-f];f++);return Jr=m.slice(s,1<f?1-f:void 0)}function Zr(s){var r=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&r===13&&(s=13)):s=r,s===10&&(s=13),32<=s||s===13?s:0}function eo(){return!0}function Cu(){return!1}function Pt(s){function r(d,f,m,x,w){this._reactName=d,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var C in s)s.hasOwnProperty(C)&&(d=s[C],this[C]=d?d(x):x[C]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?eo:Cu,this.isPropagationStopped=Cu,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),r}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Pt(Hs),Ti=ee({},Hs,{view:0,detail:0}),qx=Pt(Ti),ul,hl,Ai,to=ee({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Ai&&(Ai&&s.type==="mousemove"?(ul=s.screenX-Ai.screenX,hl=s.screenY-Ai.screenY):hl=ul=0,Ai=s),ul)},movementY:function(s){return"movementY"in s?s.movementY:hl}}),Eu=Pt(to),Kx=ee({},to,{dataTransfer:0}),Xx=Pt(Kx),Qx=ee({},Ti,{relatedTarget:0}),fl=Pt(Qx),Gx=ee({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=Pt(Gx),Zx=ee({},Hs,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),ev=Pt(Zx),tv=ee({},Hs,{data:0}),Pu=Pt(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rv(s){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(s):(s=iv[s])?!!r[s]:!1}function pl(){return rv}var ov=ee({},Ti,{key:function(s){if(s.key){var r=nv[s.key]||s.key;if(r!=="Unidentified")return r}return s.type==="keypress"?(s=Zr(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?sv[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(s){return s.type==="keypress"?Zr(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Zr(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),av=Pt(ov),lv=ee({},to,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ru=Pt(lv),cv=ee({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),dv=Pt(cv),uv=ee({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Pt(uv),fv=ee({},to,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Pt(fv),mv=[9,13,27,32],ml=u&&"CompositionEvent"in window,Mi=null;u&&"documentMode"in document&&(Mi=document.documentMode);var gv=u&&"TextEvent"in window&&!Mi,Tu=u&&(!ml||Mi&&8<Mi&&11>=Mi),Au=" ",Mu=!1;function Du(s,r){switch(s){case"keyup":return mv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Ws=!1;function xv(s,r){switch(s){case"compositionend":return Lu(r);case"keypress":return r.which!==32?null:(Mu=!0,Au);case"textInput":return s=r.data,s===Au&&Mu?null:s;default:return null}}function vv(s,r){if(Ws)return s==="compositionend"||!ml&&Du(s,r)?(s=Nu(),Jr=cl=Ln=null,Ws=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Tu&&r.locale!=="ko"?null:r.data;default:return null}}var yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r==="input"?!!yv[s.type]:r==="textarea"}function zu(s,r,d,f){su(f),r=oo(r,"onChange"),0<r.length&&(d=new dl("onChange","change",null,d,f),s.push({event:d,listeners:r}))}var Di=null,Li=null;function bv(s){th(s,0)}function no(s){var r=qs(s);if(tn(r))return s}function jv(s,r){if(s==="change")return r}var Iu=!1;if(u){var gl;if(u){var xl="oninput"in document;if(!xl){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),xl=typeof Fu.oninput=="function"}gl=xl}else gl=!1;Iu=gl&&(!document.documentMode||9<document.documentMode)}function Bu(){Di&&(Di.detachEvent("onpropertychange",Hu),Li=Di=null)}function Hu(s){if(s.propertyName==="value"&&no(Li)){var r=[];zu(r,Li,s,Qa(s)),au(bv,r)}}function wv(s,r,d){s==="focusin"?(Bu(),Di=r,Li=d,Di.attachEvent("onpropertychange",Hu)):s==="focusout"&&Bu()}function _v(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return no(Li)}function kv(s,r){if(s==="click")return no(r)}function Sv(s,r){if(s==="input"||s==="change")return no(r)}function Nv(s,r){return s===r&&(s!==0||1/s===1/r)||s!==s&&r!==r}var qt=typeof Object.is=="function"?Object.is:Nv;function Oi(s,r){if(qt(s,r))return!0;if(typeof s!="object"||s===null||typeof r!="object"||r===null)return!1;var d=Object.keys(s),f=Object.keys(r);if(d.length!==f.length)return!1;for(f=0;f<d.length;f++){var m=d[f];if(!h.call(r,m)||!qt(s[m],r[m]))return!1}return!0}function Wu(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function $u(s,r){var d=Wu(s);s=0;for(var f;d;){if(d.nodeType===3){if(f=s+d.textContent.length,s<=r&&f>=r)return{node:d,offset:r-s};s=f}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=Wu(d)}}function Uu(s,r){return s&&r?s===r?!0:s&&s.nodeType===3?!1:r&&r.nodeType===3?Uu(s,r.parentNode):"contains"in s?s.contains(r):s.compareDocumentPosition?!!(s.compareDocumentPosition(r)&16):!1:!1}function Vu(){for(var s=window,r=rs();r instanceof s.HTMLIFrameElement;){try{var d=typeof r.contentWindow.location.href=="string"}catch{d=!1}if(d)s=r.contentWindow;else break;r=rs(s.document)}return r}function vl(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r&&(r==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||r==="textarea"||s.contentEditable==="true")}function Cv(s){var r=Vu(),d=s.focusedElem,f=s.selectionRange;if(r!==d&&d&&d.ownerDocument&&Uu(d.ownerDocument.documentElement,d)){if(f!==null&&vl(d)){if(r=f.start,s=f.end,s===void 0&&(s=r),"selectionStart"in d)d.selectionStart=r,d.selectionEnd=Math.min(s,d.value.length);else if(s=(r=d.ownerDocument||document)&&r.defaultView||window,s.getSelection){s=s.getSelection();var m=d.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!s.extend&&x>f&&(m=f,f=x,x=m),m=$u(d,x);var w=$u(d,f);m&&w&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==w.node||s.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),s.removeAllRanges(),x>f?(s.addRange(r),s.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),s.addRange(r)))}}for(r=[],s=d;s=s.parentNode;)s.nodeType===1&&r.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<r.length;d++)s=r[d],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var Ev=u&&"documentMode"in document&&11>=document.documentMode,$s=null,yl=null,zi=null,bl=!1;function Yu(s,r,d){var f=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;bl||$s==null||$s!==rs(f)||(f=$s,"selectionStart"in f&&vl(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),zi&&Oi(zi,f)||(zi=f,f=oo(yl,"onSelect"),0<f.length&&(r=new dl("onSelect","select",null,r,d),s.push({event:r,listeners:f}),r.target=$s)))}function so(s,r){var d={};return d[s.toLowerCase()]=r.toLowerCase(),d["Webkit"+s]="webkit"+r,d["Moz"+s]="moz"+r,d}var Us={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},jl={},qu={};u&&(qu=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function io(s){if(jl[s])return jl[s];if(!Us[s])return s;var r=Us[s],d;for(d in r)if(r.hasOwnProperty(d)&&d in qu)return jl[s]=r[d];return s}var Ku=io("animationend"),Xu=io("animationiteration"),Qu=io("animationstart"),Gu=io("transitionend"),Ju=new Map,Zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(s,r){Ju.set(s,r),a(r,[s])}for(var wl=0;wl<Zu.length;wl++){var _l=Zu[wl],Pv=_l.toLowerCase(),Rv=_l[0].toUpperCase()+_l.slice(1);On(Pv,"on"+Rv)}On(Ku,"onAnimationEnd"),On(Xu,"onAnimationIteration"),On(Qu,"onAnimationStart"),On("dblclick","onDoubleClick"),On("focusin","onFocus"),On("focusout","onBlur"),On(Gu,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function eh(s,r,d){var f=s.type||"unknown-event";s.currentTarget=d,Px(f,r,void 0,s),s.currentTarget=null}function th(s,r){r=(r&4)!==0;for(var d=0;d<s.length;d++){var f=s[d],m=f.event;f=f.listeners;e:{var x=void 0;if(r)for(var w=f.length-1;0<=w;w--){var C=f[w],P=C.instance,F=C.currentTarget;if(C=C.listener,P!==x&&m.isPropagationStopped())break e;eh(m,C,F),x=P}else for(w=0;w<f.length;w++){if(C=f[w],P=C.instance,F=C.currentTarget,C=C.listener,P!==x&&m.isPropagationStopped())break e;eh(m,C,F),x=P}}}if(Wr)throw s=el,Wr=!1,el=null,s}function De(s,r){var d=r[Tl];d===void 0&&(d=r[Tl]=new Set);var f=s+"__bubble";d.has(f)||(nh(r,s,2,!1),d.add(f))}function kl(s,r,d){var f=0;r&&(f|=4),nh(d,s,f,r)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Fi(s){if(!s[ro]){s[ro]=!0,i.forEach(function(d){d!=="selectionchange"&&(Tv.has(d)||kl(d,!1,s),kl(d,!0,s))});var r=s.nodeType===9?s:s.ownerDocument;r===null||r[ro]||(r[ro]=!0,kl("selectionchange",!1,r))}}function nh(s,r,d,f){switch(Su(r)){case 1:var m=Vx;break;case 4:m=Yx;break;default:m=al}d=m.bind(null,r,d,s),m=void 0,!Za||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?s.addEventListener(r,d,{capture:!0,passive:m}):s.addEventListener(r,d,!0):m!==void 0?s.addEventListener(r,d,{passive:m}):s.addEventListener(r,d,!1)}function Sl(s,r,d,f,m){var x=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var C=f.stateNode.containerInfo;if(C===m||C.nodeType===8&&C.parentNode===m)break;if(w===4)for(w=f.return;w!==null;){var P=w.tag;if((P===3||P===4)&&(P=w.stateNode.containerInfo,P===m||P.nodeType===8&&P.parentNode===m))return;w=w.return}for(;C!==null;){if(w=as(C),w===null)return;if(P=w.tag,P===5||P===6){f=x=w;continue e}C=C.parentNode}}f=f.return}au(function(){var F=x,J=Qa(d),Z=[];e:{var G=Ju.get(s);if(G!==void 0){var oe=dl,ce=s;switch(s){case"keypress":if(Zr(d)===0)break e;case"keydown":case"keyup":oe=av;break;case"focusin":ce="focus",oe=fl;break;case"focusout":ce="blur",oe=fl;break;case"beforeblur":case"afterblur":oe=fl;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=dv;break;case Ku:case Xu:case Qu:oe=Jx;break;case Gu:oe=hv;break;case"scroll":oe=qx;break;case"wheel":oe=pv;break;case"copy":case"cut":case"paste":oe=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Ru}var de=(r&4)!==0,$e=!de&&s==="scroll",z=de?G!==null?G+"Capture":null:G;de=[];for(var M=F,I;M!==null;){I=M;var te=I.stateNode;if(I.tag===5&&te!==null&&(I=te,z!==null&&(te=ji(M,z),te!=null&&de.push(Bi(M,te,I)))),$e)break;M=M.return}0<de.length&&(G=new oe(G,ce,null,d,J),Z.push({event:G,listeners:de}))}}if((r&7)===0){e:{if(G=s==="mouseover"||s==="pointerover",oe=s==="mouseout"||s==="pointerout",G&&d!==Xa&&(ce=d.relatedTarget||d.fromElement)&&(as(ce)||ce[mn]))break e;if((oe||G)&&(G=J.window===J?J:(G=J.ownerDocument)?G.defaultView||G.parentWindow:window,oe?(ce=d.relatedTarget||d.toElement,oe=F,ce=ce?as(ce):null,ce!==null&&($e=os(ce),ce!==$e||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=F),oe!==ce)){if(de=Eu,te="onMouseLeave",z="onMouseEnter",M="mouse",(s==="pointerout"||s==="pointerover")&&(de=Ru,te="onPointerLeave",z="onPointerEnter",M="pointer"),$e=oe==null?G:qs(oe),I=ce==null?G:qs(ce),G=new de(te,M+"leave",oe,d,J),G.target=$e,G.relatedTarget=I,te=null,as(J)===F&&(de=new de(z,M+"enter",ce,d,J),de.target=I,de.relatedTarget=$e,te=de),$e=te,oe&&ce)t:{for(de=oe,z=ce,M=0,I=de;I;I=Vs(I))M++;for(I=0,te=z;te;te=Vs(te))I++;for(;0<M-I;)de=Vs(de),M--;for(;0<I-M;)z=Vs(z),I--;for(;M--;){if(de===z||z!==null&&de===z.alternate)break t;de=Vs(de),z=Vs(z)}de=null}else de=null;oe!==null&&sh(Z,G,oe,de,!1),ce!==null&&$e!==null&&sh(Z,$e,ce,de,!0)}}e:{if(G=F?qs(F):window,oe=G.nodeName&&G.nodeName.toLowerCase(),oe==="select"||oe==="input"&&G.type==="file")var he=jv;else if(Ou(G))if(Iu)he=Sv;else{he=_v;var ge=wv}else(oe=G.nodeName)&&oe.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=kv);if(he&&(he=he(s,F))){zu(Z,he,d,J);break e}ge&&ge(s,G,F),s==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&Ua(G,"number",G.value)}switch(ge=F?qs(F):window,s){case"focusin":(Ou(ge)||ge.contentEditable==="true")&&($s=ge,yl=F,zi=null);break;case"focusout":zi=yl=$s=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,Yu(Z,d,J);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":Yu(Z,d,J)}var xe;if(ml)e:{switch(s){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Ws?Du(s,d)&&(je="onCompositionEnd"):s==="keydown"&&d.keyCode===229&&(je="onCompositionStart");je&&(Tu&&d.locale!=="ko"&&(Ws||je!=="onCompositionStart"?je==="onCompositionEnd"&&Ws&&(xe=Nu()):(Ln=J,cl="value"in Ln?Ln.value:Ln.textContent,Ws=!0)),ge=oo(F,je),0<ge.length&&(je=new Pu(je,s,null,d,J),Z.push({event:je,listeners:ge}),xe?je.data=xe:(xe=Lu(d),xe!==null&&(je.data=xe)))),(xe=gv?xv(s,d):vv(s,d))&&(F=oo(F,"onBeforeInput"),0<F.length&&(J=new Pu("onBeforeInput","beforeinput",null,d,J),Z.push({event:J,listeners:F}),J.data=xe))}th(Z,r)})}function Bi(s,r,d){return{instance:s,listener:r,currentTarget:d}}function oo(s,r){for(var d=r+"Capture",f=[];s!==null;){var m=s,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=ji(s,d),x!=null&&f.unshift(Bi(s,x,m)),x=ji(s,r),x!=null&&f.push(Bi(s,x,m))),s=s.return}return f}function Vs(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function sh(s,r,d,f,m){for(var x=r._reactName,w=[];d!==null&&d!==f;){var C=d,P=C.alternate,F=C.stateNode;if(P!==null&&P===f)break;C.tag===5&&F!==null&&(C=F,m?(P=ji(d,x),P!=null&&w.unshift(Bi(d,P,C))):m||(P=ji(d,x),P!=null&&w.push(Bi(d,P,C)))),d=d.return}w.length!==0&&s.push({event:r,listeners:w})}var Av=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function ih(s){return(typeof s=="string"?s:""+s).replace(Av,`
`).replace(Mv,"")}function ao(s,r,d){if(r=ih(r),ih(s)!==r&&d)throw Error(n(425))}function lo(){}var Nl=null,Cl=null;function El(s,r){return s==="textarea"||s==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(s){return rh.resolve(null).then(s).catch(Ov)}:Pl;function Ov(s){setTimeout(function(){throw s})}function Rl(s,r){var d=r,f=0;do{var m=d.nextSibling;if(s.removeChild(d),m&&m.nodeType===8)if(d=m.data,d==="/$"){if(f===0){s.removeChild(m),Ri(r);return}f--}else d!=="$"&&d!=="$?"&&d!=="$!"||f++;d=m}while(d);Ri(r)}function zn(s){for(;s!=null;s=s.nextSibling){var r=s.nodeType;if(r===1||r===3)break;if(r===8){if(r=s.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return s}function oh(s){s=s.previousSibling;for(var r=0;s;){if(s.nodeType===8){var d=s.data;if(d==="$"||d==="$!"||d==="$?"){if(r===0)return s;r--}else d==="/$"&&r++}s=s.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),sn="__reactFiber$"+Ys,Hi="__reactProps$"+Ys,mn="__reactContainer$"+Ys,Tl="__reactEvents$"+Ys,zv="__reactListeners$"+Ys,Iv="__reactHandles$"+Ys;function as(s){var r=s[sn];if(r)return r;for(var d=s.parentNode;d;){if(r=d[mn]||d[sn]){if(d=r.alternate,r.child!==null||d!==null&&d.child!==null)for(s=oh(s);s!==null;){if(d=s[sn])return d;s=oh(s)}return r}s=d,d=s.parentNode}return null}function Wi(s){return s=s[sn]||s[mn],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function qs(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function co(s){return s[Hi]||null}var Al=[],Ks=-1;function In(s){return{current:s}}function Le(s){0>Ks||(s.current=Al[Ks],Al[Ks]=null,Ks--)}function Me(s,r){Ks++,Al[Ks]=s.current,s.current=r}var Fn={},rt=In(Fn),vt=In(!1),ls=Fn;function Xs(s,r){var d=s.type.contextTypes;if(!d)return Fn;var f=s.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in d)m[x]=r[x];return f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=r,s.__reactInternalMemoizedMaskedChildContext=m),m}function yt(s){return s=s.childContextTypes,s!=null}function uo(){Le(vt),Le(rt)}function ah(s,r,d){if(rt.current!==Fn)throw Error(n(168));Me(rt,r),Me(vt,d)}function lh(s,r,d){var f=s.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return d;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(n(108,Pe(s)||"Unknown",m));return ee({},d,f)}function ho(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||Fn,ls=rt.current,Me(rt,s),Me(vt,vt.current),!0}function ch(s,r,d){var f=s.stateNode;if(!f)throw Error(n(169));d?(s=lh(s,r,ls),f.__reactInternalMemoizedMergedChildContext=s,Le(vt),Le(rt),Me(rt,s)):Le(vt),Me(vt,d)}var gn=null,fo=!1,Ml=!1;function dh(s){gn===null?gn=[s]:gn.push(s)}function Fv(s){fo=!0,dh(s)}function Bn(){if(!Ml&&gn!==null){Ml=!0;var s=0,r=Re;try{var d=gn;for(Re=1;s<d.length;s++){var f=d[s];do f=f(!0);while(f!==null)}gn=null,fo=!1}catch(m){throw gn!==null&&(gn=gn.slice(s+1)),hu(tl,Bn),m}finally{Re=r,Ml=!1}}return null}var Qs=[],Gs=0,po=null,mo=0,Ot=[],zt=0,cs=null,xn=1,vn="";function ds(s,r){Qs[Gs++]=mo,Qs[Gs++]=po,po=s,mo=r}function uh(s,r,d){Ot[zt++]=xn,Ot[zt++]=vn,Ot[zt++]=cs,cs=s;var f=xn;s=vn;var m=32-Yt(f)-1;f&=~(1<<m),d+=1;var x=32-Yt(r)+m;if(30<x){var w=m-m%5;x=(f&(1<<w)-1).toString(32),f>>=w,m-=w,xn=1<<32-Yt(r)+m|d<<m|f,vn=x+s}else xn=1<<x|d<<m|f,vn=s}function Dl(s){s.return!==null&&(ds(s,1),uh(s,1,0))}function Ll(s){for(;s===po;)po=Qs[--Gs],Qs[Gs]=null,mo=Qs[--Gs],Qs[Gs]=null;for(;s===cs;)cs=Ot[--zt],Ot[zt]=null,vn=Ot[--zt],Ot[zt]=null,xn=Ot[--zt],Ot[zt]=null}var Rt=null,Tt=null,ze=!1,Kt=null;function hh(s,r){var d=Ht(5,null,null,0);d.elementType="DELETED",d.stateNode=r,d.return=s,r=s.deletions,r===null?(s.deletions=[d],s.flags|=16):r.push(d)}function fh(s,r){switch(s.tag){case 5:var d=s.type;return r=r.nodeType!==1||d.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(s.stateNode=r,Rt=s,Tt=zn(r.firstChild),!0):!1;case 6:return r=s.pendingProps===""||r.nodeType!==3?null:r,r!==null?(s.stateNode=r,Rt=s,Tt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(d=cs!==null?{id:xn,overflow:vn}:null,s.memoizedState={dehydrated:r,treeContext:d,retryLane:1073741824},d=Ht(18,null,null,0),d.stateNode=r,d.return=s,s.child=d,Rt=s,Tt=null,!0):!1;default:return!1}}function Ol(s){return(s.mode&1)!==0&&(s.flags&128)===0}function zl(s){if(ze){var r=Tt;if(r){var d=r;if(!fh(s,r)){if(Ol(s))throw Error(n(418));r=zn(d.nextSibling);var f=Rt;r&&fh(s,r)?hh(f,d):(s.flags=s.flags&-4097|2,ze=!1,Rt=s)}}else{if(Ol(s))throw Error(n(418));s.flags=s.flags&-4097|2,ze=!1,Rt=s}}}function ph(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Rt=s}function go(s){if(s!==Rt)return!1;if(!ze)return ph(s),ze=!0,!1;var r;if((r=s.tag!==3)&&!(r=s.tag!==5)&&(r=s.type,r=r!=="head"&&r!=="body"&&!El(s.type,s.memoizedProps)),r&&(r=Tt)){if(Ol(s))throw mh(),Error(n(418));for(;r;)hh(s,r),r=zn(r.nextSibling)}if(ph(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,r=0;s;){if(s.nodeType===8){var d=s.data;if(d==="/$"){if(r===0){Tt=zn(s.nextSibling);break e}r--}else d!=="$"&&d!=="$!"&&d!=="$?"||r++}s=s.nextSibling}Tt=null}}else Tt=Rt?zn(s.stateNode.nextSibling):null;return!0}function mh(){for(var s=Tt;s;)s=zn(s.nextSibling)}function Js(){Tt=Rt=null,ze=!1}function Il(s){Kt===null?Kt=[s]:Kt.push(s)}var Bv=A.ReactCurrentBatchConfig;function $i(s,r,d){if(s=d.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(n(309));var f=d.stateNode}if(!f)throw Error(n(147,s));var m=f,x=""+s;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(w){var C=m.refs;w===null?delete C[x]:C[x]=w},r._stringRef=x,r)}if(typeof s!="string")throw Error(n(284));if(!d._owner)throw Error(n(290,s))}return s}function xo(s,r){throw s=Object.prototype.toString.call(r),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":s))}function gh(s){var r=s._init;return r(s._payload)}function xh(s){function r(z,M){if(s){var I=z.deletions;I===null?(z.deletions=[M],z.flags|=16):I.push(M)}}function d(z,M){if(!s)return null;for(;M!==null;)r(z,M),M=M.sibling;return null}function f(z,M){for(z=new Map;M!==null;)M.key!==null?z.set(M.key,M):z.set(M.index,M),M=M.sibling;return z}function m(z,M){return z=Kn(z,M),z.index=0,z.sibling=null,z}function x(z,M,I){return z.index=I,s?(I=z.alternate,I!==null?(I=I.index,I<M?(z.flags|=2,M):I):(z.flags|=2,M)):(z.flags|=1048576,M)}function w(z){return s&&z.alternate===null&&(z.flags|=2),z}function C(z,M,I,te){return M===null||M.tag!==6?(M=Pc(I,z.mode,te),M.return=z,M):(M=m(M,I),M.return=z,M)}function P(z,M,I,te){var he=I.type;return he===U?J(z,M,I.props.children,te,I.key):M!==null&&(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===W&&gh(he)===M.type)?(te=m(M,I.props),te.ref=$i(z,M,I),te.return=z,te):(te=Ho(I.type,I.key,I.props,null,z.mode,te),te.ref=$i(z,M,I),te.return=z,te)}function F(z,M,I,te){return M===null||M.tag!==4||M.stateNode.containerInfo!==I.containerInfo||M.stateNode.implementation!==I.implementation?(M=Rc(I,z.mode,te),M.return=z,M):(M=m(M,I.children||[]),M.return=z,M)}function J(z,M,I,te,he){return M===null||M.tag!==7?(M=vs(I,z.mode,te,he),M.return=z,M):(M=m(M,I),M.return=z,M)}function Z(z,M,I){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Pc(""+M,z.mode,I),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case E:return I=Ho(M.type,M.key,M.props,null,z.mode,I),I.ref=$i(z,null,M),I.return=z,I;case O:return M=Rc(M,z.mode,I),M.return=z,M;case W:var te=M._init;return Z(z,te(M._payload),I)}if(vi(M)||ie(M))return M=vs(M,z.mode,I,null),M.return=z,M;xo(z,M)}return null}function G(z,M,I,te){var he=M!==null?M.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return he!==null?null:C(z,M,""+I,te);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case E:return I.key===he?P(z,M,I,te):null;case O:return I.key===he?F(z,M,I,te):null;case W:return he=I._init,G(z,M,he(I._payload),te)}if(vi(I)||ie(I))return he!==null?null:J(z,M,I,te,null);xo(z,I)}return null}function oe(z,M,I,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return z=z.get(I)||null,C(M,z,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return z=z.get(te.key===null?I:te.key)||null,P(M,z,te,he);case O:return z=z.get(te.key===null?I:te.key)||null,F(M,z,te,he);case W:var ge=te._init;return oe(z,M,I,ge(te._payload),he)}if(vi(te)||ie(te))return z=z.get(I)||null,J(M,z,te,he,null);xo(M,te)}return null}function ce(z,M,I,te){for(var he=null,ge=null,xe=M,je=M=0,et=null;xe!==null&&je<I.length;je++){xe.index>je?(et=xe,xe=null):et=xe.sibling;var Ce=G(z,xe,I[je],te);if(Ce===null){xe===null&&(xe=et);break}s&&xe&&Ce.alternate===null&&r(z,xe),M=x(Ce,M,je),ge===null?he=Ce:ge.sibling=Ce,ge=Ce,xe=et}if(je===I.length)return d(z,xe),ze&&ds(z,je),he;if(xe===null){for(;je<I.length;je++)xe=Z(z,I[je],te),xe!==null&&(M=x(xe,M,je),ge===null?he=xe:ge.sibling=xe,ge=xe);return ze&&ds(z,je),he}for(xe=f(z,xe);je<I.length;je++)et=oe(xe,z,je,I[je],te),et!==null&&(s&&et.alternate!==null&&xe.delete(et.key===null?je:et.key),M=x(et,M,je),ge===null?he=et:ge.sibling=et,ge=et);return s&&xe.forEach(function(Xn){return r(z,Xn)}),ze&&ds(z,je),he}function de(z,M,I,te){var he=ie(I);if(typeof he!="function")throw Error(n(150));if(I=he.call(I),I==null)throw Error(n(151));for(var ge=he=null,xe=M,je=M=0,et=null,Ce=I.next();xe!==null&&!Ce.done;je++,Ce=I.next()){xe.index>je?(et=xe,xe=null):et=xe.sibling;var Xn=G(z,xe,Ce.value,te);if(Xn===null){xe===null&&(xe=et);break}s&&xe&&Xn.alternate===null&&r(z,xe),M=x(Xn,M,je),ge===null?he=Xn:ge.sibling=Xn,ge=Xn,xe=et}if(Ce.done)return d(z,xe),ze&&ds(z,je),he;if(xe===null){for(;!Ce.done;je++,Ce=I.next())Ce=Z(z,Ce.value,te),Ce!==null&&(M=x(Ce,M,je),ge===null?he=Ce:ge.sibling=Ce,ge=Ce);return ze&&ds(z,je),he}for(xe=f(z,xe);!Ce.done;je++,Ce=I.next())Ce=oe(xe,z,je,Ce.value,te),Ce!==null&&(s&&Ce.alternate!==null&&xe.delete(Ce.key===null?je:Ce.key),M=x(Ce,M,je),ge===null?he=Ce:ge.sibling=Ce,ge=Ce);return s&&xe.forEach(function(yy){return r(z,yy)}),ze&&ds(z,je),he}function $e(z,M,I,te){if(typeof I=="object"&&I!==null&&I.type===U&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case E:e:{for(var he=I.key,ge=M;ge!==null;){if(ge.key===he){if(he=I.type,he===U){if(ge.tag===7){d(z,ge.sibling),M=m(ge,I.props.children),M.return=z,z=M;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===W&&gh(he)===ge.type){d(z,ge.sibling),M=m(ge,I.props),M.ref=$i(z,ge,I),M.return=z,z=M;break e}d(z,ge);break}else r(z,ge);ge=ge.sibling}I.type===U?(M=vs(I.props.children,z.mode,te,I.key),M.return=z,z=M):(te=Ho(I.type,I.key,I.props,null,z.mode,te),te.ref=$i(z,M,I),te.return=z,z=te)}return w(z);case O:e:{for(ge=I.key;M!==null;){if(M.key===ge)if(M.tag===4&&M.stateNode.containerInfo===I.containerInfo&&M.stateNode.implementation===I.implementation){d(z,M.sibling),M=m(M,I.children||[]),M.return=z,z=M;break e}else{d(z,M);break}else r(z,M);M=M.sibling}M=Rc(I,z.mode,te),M.return=z,z=M}return w(z);case W:return ge=I._init,$e(z,M,ge(I._payload),te)}if(vi(I))return ce(z,M,I,te);if(ie(I))return de(z,M,I,te);xo(z,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,M!==null&&M.tag===6?(d(z,M.sibling),M=m(M,I),M.return=z,z=M):(d(z,M),M=Pc(I,z.mode,te),M.return=z,z=M),w(z)):d(z,M)}return $e}var Zs=xh(!0),vh=xh(!1),vo=In(null),yo=null,ei=null,Fl=null;function Bl(){Fl=ei=yo=null}function Hl(s){var r=vo.current;Le(vo),s._currentValue=r}function Wl(s,r,d){for(;s!==null;){var f=s.alternate;if((s.childLanes&r)!==r?(s.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),s===d)break;s=s.return}}function ti(s,r){yo=s,Fl=ei=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&r)!==0&&(bt=!0),s.firstContext=null)}function It(s){var r=s._currentValue;if(Fl!==s)if(s={context:s,memoizedValue:r,next:null},ei===null){if(yo===null)throw Error(n(308));ei=s,yo.dependencies={lanes:0,firstContext:s}}else ei=ei.next=s;return r}var us=null;function $l(s){us===null?us=[s]:us.push(s)}function yh(s,r,d,f){var m=r.interleaved;return m===null?(d.next=d,$l(r)):(d.next=m.next,m.next=d),r.interleaved=d,yn(s,f)}function yn(s,r){s.lanes|=r;var d=s.alternate;for(d!==null&&(d.lanes|=r),d=s,s=s.return;s!==null;)s.childLanes|=r,d=s.alternate,d!==null&&(d.childLanes|=r),d=s,s=s.return;return d.tag===3?d.stateNode:null}var Hn=!1;function Ul(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(s,r){s=s.updateQueue,r.updateQueue===s&&(r.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function bn(s,r){return{eventTime:s,lane:r,tag:0,payload:null,callback:null,next:null}}function Wn(s,r,d){var f=s.updateQueue;if(f===null)return null;if(f=f.shared,(Ne&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,yn(s,d)}return m=f.interleaved,m===null?(r.next=r,$l(f)):(r.next=m.next,m.next=r),f.interleaved=r,yn(s,d)}function bo(s,r,d){if(r=r.updateQueue,r!==null&&(r=r.shared,(d&4194240)!==0)){var f=r.lanes;f&=s.pendingLanes,d|=f,r.lanes=d,il(s,d)}}function jh(s,r){var d=s.updateQueue,f=s.alternate;if(f!==null&&(f=f.updateQueue,d===f)){var m=null,x=null;if(d=d.firstBaseUpdate,d!==null){do{var w={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};x===null?m=x=w:x=x.next=w,d=d.next}while(d!==null);x===null?m=x=r:x=x.next=r}else m=x=r;d={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},s.updateQueue=d;return}s=d.lastBaseUpdate,s===null?d.firstBaseUpdate=r:s.next=r,d.lastBaseUpdate=r}function jo(s,r,d,f){var m=s.updateQueue;Hn=!1;var x=m.firstBaseUpdate,w=m.lastBaseUpdate,C=m.shared.pending;if(C!==null){m.shared.pending=null;var P=C,F=P.next;P.next=null,w===null?x=F:w.next=F,w=P;var J=s.alternate;J!==null&&(J=J.updateQueue,C=J.lastBaseUpdate,C!==w&&(C===null?J.firstBaseUpdate=F:C.next=F,J.lastBaseUpdate=P))}if(x!==null){var Z=m.baseState;w=0,J=F=P=null,C=x;do{var G=C.lane,oe=C.eventTime;if((f&G)===G){J!==null&&(J=J.next={eventTime:oe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var ce=s,de=C;switch(G=r,oe=d,de.tag){case 1:if(ce=de.payload,typeof ce=="function"){Z=ce.call(oe,Z,G);break e}Z=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=de.payload,G=typeof ce=="function"?ce.call(oe,Z,G):ce,G==null)break e;Z=ee({},Z,G);break e;case 2:Hn=!0}}C.callback!==null&&C.lane!==0&&(s.flags|=64,G=m.effects,G===null?m.effects=[C]:G.push(C))}else oe={eventTime:oe,lane:G,tag:C.tag,payload:C.payload,callback:C.callback,next:null},J===null?(F=J=oe,P=Z):J=J.next=oe,w|=G;if(C=C.next,C===null){if(C=m.shared.pending,C===null)break;G=C,C=G.next,G.next=null,m.lastBaseUpdate=G,m.shared.pending=null}}while(!0);if(J===null&&(P=Z),m.baseState=P,m.firstBaseUpdate=F,m.lastBaseUpdate=J,r=m.shared.interleaved,r!==null){m=r;do w|=m.lane,m=m.next;while(m!==r)}else x===null&&(m.shared.lanes=0);ps|=w,s.lanes=w,s.memoizedState=Z}}function wh(s,r,d){if(s=r.effects,r.effects=null,s!==null)for(r=0;r<s.length;r++){var f=s[r],m=f.callback;if(m!==null){if(f.callback=null,f=d,typeof m!="function")throw Error(n(191,m));m.call(f)}}}var Ui={},rn=In(Ui),Vi=In(Ui),Yi=In(Ui);function hs(s){if(s===Ui)throw Error(n(174));return s}function Vl(s,r){switch(Me(Yi,r),Me(Vi,s),Me(rn,Ui),s=r.nodeType,s){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ya(null,"");break;default:s=s===8?r.parentNode:r,r=s.namespaceURI||null,s=s.tagName,r=Ya(r,s)}Le(rn),Me(rn,r)}function ni(){Le(rn),Le(Vi),Le(Yi)}function _h(s){hs(Yi.current);var r=hs(rn.current),d=Ya(r,s.type);r!==d&&(Me(Vi,s),Me(rn,d))}function Yl(s){Vi.current===s&&(Le(rn),Le(Vi))}var Ie=In(0);function wo(s){for(var r=s;r!==null;){if(r.tag===13){var d=r.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ql=[];function Kl(){for(var s=0;s<ql.length;s++)ql[s]._workInProgressVersionPrimary=null;ql.length=0}var _o=A.ReactCurrentDispatcher,Xl=A.ReactCurrentBatchConfig,fs=0,Fe=null,Xe=null,Je=null,ko=!1,qi=!1,Ki=0,Hv=0;function ot(){throw Error(n(321))}function Ql(s,r){if(r===null)return!1;for(var d=0;d<r.length&&d<s.length;d++)if(!qt(s[d],r[d]))return!1;return!0}function Gl(s,r,d,f,m,x){if(fs=x,Fe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_o.current=s===null||s.memoizedState===null?Vv:Yv,s=d(f,m),qi){x=0;do{if(qi=!1,Ki=0,25<=x)throw Error(n(301));x+=1,Je=Xe=null,r.updateQueue=null,_o.current=qv,s=d(f,m)}while(qi)}if(_o.current=Co,r=Xe!==null&&Xe.next!==null,fs=0,Je=Xe=Fe=null,ko=!1,r)throw Error(n(300));return s}function Jl(){var s=Ki!==0;return Ki=0,s}function on(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Fe.memoizedState=Je=s:Je=Je.next=s,Je}function Ft(){if(Xe===null){var s=Fe.alternate;s=s!==null?s.memoizedState:null}else s=Xe.next;var r=Je===null?Fe.memoizedState:Je.next;if(r!==null)Je=r,Xe=s;else{if(s===null)throw Error(n(310));Xe=s,s={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Je===null?Fe.memoizedState=Je=s:Je=Je.next=s}return Je}function Xi(s,r){return typeof r=="function"?r(s):r}function Zl(s){var r=Ft(),d=r.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=Xe,m=f.baseQueue,x=d.pending;if(x!==null){if(m!==null){var w=m.next;m.next=x.next,x.next=w}f.baseQueue=m=x,d.pending=null}if(m!==null){x=m.next,f=f.baseState;var C=w=null,P=null,F=x;do{var J=F.lane;if((fs&J)===J)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),f=F.hasEagerState?F.eagerState:s(f,F.action);else{var Z={lane:J,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(C=P=Z,w=f):P=P.next=Z,Fe.lanes|=J,ps|=J}F=F.next}while(F!==null&&F!==x);P===null?w=f:P.next=C,qt(f,r.memoizedState)||(bt=!0),r.memoizedState=f,r.baseState=w,r.baseQueue=P,d.lastRenderedState=f}if(s=d.interleaved,s!==null){m=s;do x=m.lane,Fe.lanes|=x,ps|=x,m=m.next;while(m!==s)}else m===null&&(d.lanes=0);return[r.memoizedState,d.dispatch]}function ec(s){var r=Ft(),d=r.queue;if(d===null)throw Error(n(311));d.lastRenderedReducer=s;var f=d.dispatch,m=d.pending,x=r.memoizedState;if(m!==null){d.pending=null;var w=m=m.next;do x=s(x,w.action),w=w.next;while(w!==m);qt(x,r.memoizedState)||(bt=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),d.lastRenderedState=x}return[x,f]}function kh(){}function Sh(s,r){var d=Fe,f=Ft(),m=r(),x=!qt(f.memoizedState,m);if(x&&(f.memoizedState=m,bt=!0),f=f.queue,tc(Eh.bind(null,d,f,s),[s]),f.getSnapshot!==r||x||Je!==null&&Je.memoizedState.tag&1){if(d.flags|=2048,Qi(9,Ch.bind(null,d,f,m,r),void 0,null),Ze===null)throw Error(n(349));(fs&30)!==0||Nh(d,r,m)}return m}function Nh(s,r,d){s.flags|=16384,s={getSnapshot:r,value:d},r=Fe.updateQueue,r===null?(r={lastEffect:null,stores:null},Fe.updateQueue=r,r.stores=[s]):(d=r.stores,d===null?r.stores=[s]:d.push(s))}function Ch(s,r,d,f){r.value=d,r.getSnapshot=f,Ph(r)&&Rh(s)}function Eh(s,r,d){return d(function(){Ph(r)&&Rh(s)})}function Ph(s){var r=s.getSnapshot;s=s.value;try{var d=r();return!qt(s,d)}catch{return!0}}function Rh(s){var r=yn(s,1);r!==null&&Jt(r,s,1,-1)}function Th(s){var r=on();return typeof s=="function"&&(s=s()),r.memoizedState=r.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:s},r.queue=s,s=s.dispatch=Uv.bind(null,Fe,s),[r.memoizedState,s]}function Qi(s,r,d,f){return s={tag:s,create:r,destroy:d,deps:f,next:null},r=Fe.updateQueue,r===null?(r={lastEffect:null,stores:null},Fe.updateQueue=r,r.lastEffect=s.next=s):(d=r.lastEffect,d===null?r.lastEffect=s.next=s:(f=d.next,d.next=s,s.next=f,r.lastEffect=s)),s}function Ah(){return Ft().memoizedState}function So(s,r,d,f){var m=on();Fe.flags|=s,m.memoizedState=Qi(1|r,d,void 0,f===void 0?null:f)}function No(s,r,d,f){var m=Ft();f=f===void 0?null:f;var x=void 0;if(Xe!==null){var w=Xe.memoizedState;if(x=w.destroy,f!==null&&Ql(f,w.deps)){m.memoizedState=Qi(r,d,x,f);return}}Fe.flags|=s,m.memoizedState=Qi(1|r,d,x,f)}function Mh(s,r){return So(8390656,8,s,r)}function tc(s,r){return No(2048,8,s,r)}function Dh(s,r){return No(4,2,s,r)}function Lh(s,r){return No(4,4,s,r)}function Oh(s,r){if(typeof r=="function")return s=s(),r(s),function(){r(null)};if(r!=null)return s=s(),r.current=s,function(){r.current=null}}function zh(s,r,d){return d=d!=null?d.concat([s]):null,No(4,4,Oh.bind(null,r,s),d)}function nc(){}function Ih(s,r){var d=Ft();r=r===void 0?null:r;var f=d.memoizedState;return f!==null&&r!==null&&Ql(r,f[1])?f[0]:(d.memoizedState=[s,r],s)}function Fh(s,r){var d=Ft();r=r===void 0?null:r;var f=d.memoizedState;return f!==null&&r!==null&&Ql(r,f[1])?f[0]:(s=s(),d.memoizedState=[s,r],s)}function Bh(s,r,d){return(fs&21)===0?(s.baseState&&(s.baseState=!1,bt=!0),s.memoizedState=d):(qt(d,r)||(d=gu(),Fe.lanes|=d,ps|=d,s.baseState=!0),r)}function Wv(s,r){var d=Re;Re=d!==0&&4>d?d:4,s(!0);var f=Xl.transition;Xl.transition={};try{s(!1),r()}finally{Re=d,Xl.transition=f}}function Hh(){return Ft().memoizedState}function $v(s,r,d){var f=Yn(s);if(d={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null},Wh(s))$h(r,d);else if(d=yh(s,r,d,f),d!==null){var m=xt();Jt(d,s,f,m),Uh(d,r,f)}}function Uv(s,r,d){var f=Yn(s),m={lane:f,action:d,hasEagerState:!1,eagerState:null,next:null};if(Wh(s))$h(r,m);else{var x=s.alternate;if(s.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var w=r.lastRenderedState,C=x(w,d);if(m.hasEagerState=!0,m.eagerState=C,qt(C,w)){var P=r.interleaved;P===null?(m.next=m,$l(r)):(m.next=P.next,P.next=m),r.interleaved=m;return}}catch{}finally{}d=yh(s,r,m,f),d!==null&&(m=xt(),Jt(d,s,f,m),Uh(d,r,f))}}function Wh(s){var r=s.alternate;return s===Fe||r!==null&&r===Fe}function $h(s,r){qi=ko=!0;var d=s.pending;d===null?r.next=r:(r.next=d.next,d.next=r),s.pending=r}function Uh(s,r,d){if((d&4194240)!==0){var f=r.lanes;f&=s.pendingLanes,d|=f,r.lanes=d,il(s,d)}}var Co={readContext:It,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},Vv={readContext:It,useCallback:function(s,r){return on().memoizedState=[s,r===void 0?null:r],s},useContext:It,useEffect:Mh,useImperativeHandle:function(s,r,d){return d=d!=null?d.concat([s]):null,So(4194308,4,Oh.bind(null,r,s),d)},useLayoutEffect:function(s,r){return So(4194308,4,s,r)},useInsertionEffect:function(s,r){return So(4,2,s,r)},useMemo:function(s,r){var d=on();return r=r===void 0?null:r,s=s(),d.memoizedState=[s,r],s},useReducer:function(s,r,d){var f=on();return r=d!==void 0?d(r):r,f.memoizedState=f.baseState=r,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:r},f.queue=s,s=s.dispatch=$v.bind(null,Fe,s),[f.memoizedState,s]},useRef:function(s){var r=on();return s={current:s},r.memoizedState=s},useState:Th,useDebugValue:nc,useDeferredValue:function(s){return on().memoizedState=s},useTransition:function(){var s=Th(!1),r=s[0];return s=Wv.bind(null,s[1]),on().memoizedState=s,[r,s]},useMutableSource:function(){},useSyncExternalStore:function(s,r,d){var f=Fe,m=on();if(ze){if(d===void 0)throw Error(n(407));d=d()}else{if(d=r(),Ze===null)throw Error(n(349));(fs&30)!==0||Nh(f,r,d)}m.memoizedState=d;var x={value:d,getSnapshot:r};return m.queue=x,Mh(Eh.bind(null,f,x,s),[s]),f.flags|=2048,Qi(9,Ch.bind(null,f,x,d,r),void 0,null),d},useId:function(){var s=on(),r=Ze.identifierPrefix;if(ze){var d=vn,f=xn;d=(f&~(1<<32-Yt(f)-1)).toString(32)+d,r=":"+r+"R"+d,d=Ki++,0<d&&(r+="H"+d.toString(32)),r+=":"}else d=Hv++,r=":"+r+"r"+d.toString(32)+":";return s.memoizedState=r},unstable_isNewReconciler:!1},Yv={readContext:It,useCallback:Ih,useContext:It,useEffect:tc,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Fh,useReducer:Zl,useRef:Ah,useState:function(){return Zl(Xi)},useDebugValue:nc,useDeferredValue:function(s){var r=Ft();return Bh(r,Xe.memoizedState,s)},useTransition:function(){var s=Zl(Xi)[0],r=Ft().memoizedState;return[s,r]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Hh,unstable_isNewReconciler:!1},qv={readContext:It,useCallback:Ih,useContext:It,useEffect:tc,useImperativeHandle:zh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Fh,useReducer:ec,useRef:Ah,useState:function(){return ec(Xi)},useDebugValue:nc,useDeferredValue:function(s){var r=Ft();return Xe===null?r.memoizedState=s:Bh(r,Xe.memoizedState,s)},useTransition:function(){var s=ec(Xi)[0],r=Ft().memoizedState;return[s,r]},useMutableSource:kh,useSyncExternalStore:Sh,useId:Hh,unstable_isNewReconciler:!1};function Xt(s,r){if(s&&s.defaultProps){r=ee({},r),s=s.defaultProps;for(var d in s)r[d]===void 0&&(r[d]=s[d]);return r}return r}function sc(s,r,d,f){r=s.memoizedState,d=d(f,r),d=d==null?r:ee({},r,d),s.memoizedState=d,s.lanes===0&&(s.updateQueue.baseState=d)}var Eo={isMounted:function(s){return(s=s._reactInternals)?os(s)===s:!1},enqueueSetState:function(s,r,d){s=s._reactInternals;var f=xt(),m=Yn(s),x=bn(f,m);x.payload=r,d!=null&&(x.callback=d),r=Wn(s,x,m),r!==null&&(Jt(r,s,m,f),bo(r,s,m))},enqueueReplaceState:function(s,r,d){s=s._reactInternals;var f=xt(),m=Yn(s),x=bn(f,m);x.tag=1,x.payload=r,d!=null&&(x.callback=d),r=Wn(s,x,m),r!==null&&(Jt(r,s,m,f),bo(r,s,m))},enqueueForceUpdate:function(s,r){s=s._reactInternals;var d=xt(),f=Yn(s),m=bn(d,f);m.tag=2,r!=null&&(m.callback=r),r=Wn(s,m,f),r!==null&&(Jt(r,s,f,d),bo(r,s,f))}};function Vh(s,r,d,f,m,x,w){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(f,x,w):r.prototype&&r.prototype.isPureReactComponent?!Oi(d,f)||!Oi(m,x):!0}function Yh(s,r,d){var f=!1,m=Fn,x=r.contextType;return typeof x=="object"&&x!==null?x=It(x):(m=yt(r)?ls:rt.current,f=r.contextTypes,x=(f=f!=null)?Xs(s,m):Fn),r=new r(d,x),s.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Eo,s.stateNode=r,r._reactInternals=s,f&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=x),r}function qh(s,r,d,f){s=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(d,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(d,f),r.state!==s&&Eo.enqueueReplaceState(r,r.state,null)}function ic(s,r,d,f){var m=s.stateNode;m.props=d,m.state=s.memoizedState,m.refs={},Ul(s);var x=r.contextType;typeof x=="object"&&x!==null?m.context=It(x):(x=yt(r)?ls:rt.current,m.context=Xs(s,x)),m.state=s.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(sc(s,r,x,d),m.state=s.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Eo.enqueueReplaceState(m,m.state,null),jo(s,d,m,f),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function si(s,r){try{var d="",f=r;do d+=ve(f),f=f.return;while(f);var m=d}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:s,source:r,stack:m,digest:null}}function rc(s,r,d){return{value:s,source:null,stack:d??null,digest:r??null}}function oc(s,r){try{console.error(r.value)}catch(d){setTimeout(function(){throw d})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function Kh(s,r,d){d=bn(-1,d),d.tag=3,d.payload={element:null};var f=r.value;return d.callback=function(){Lo||(Lo=!0,jc=f),oc(s,r)},d}function Xh(s,r,d){d=bn(-1,d),d.tag=3;var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;d.payload=function(){return f(m)},d.callback=function(){oc(s,r)}}var x=s.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(d.callback=function(){oc(s,r),typeof f!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),d}function Qh(s,r,d){var f=s.pingCache;if(f===null){f=s.pingCache=new Kv;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(d)||(m.add(d),s=ly.bind(null,s,r,d),r.then(s,s))}function Gh(s){do{var r;if((r=s.tag===13)&&(r=s.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return s;s=s.return}while(s!==null);return null}function Jh(s,r,d,f,m){return(s.mode&1)===0?(s===r?s.flags|=65536:(s.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(r=bn(-1,1),r.tag=2,Wn(d,r,1))),d.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var Xv=A.ReactCurrentOwner,bt=!1;function gt(s,r,d,f){r.child=s===null?vh(r,null,d,f):Zs(r,s.child,d,f)}function Zh(s,r,d,f,m){d=d.render;var x=r.ref;return ti(r,m),f=Gl(s,r,d,f,x,m),d=Jl(),s!==null&&!bt?(r.updateQueue=s.updateQueue,r.flags&=-2053,s.lanes&=~m,jn(s,r,m)):(ze&&d&&Dl(r),r.flags|=1,gt(s,r,f,m),r.child)}function ef(s,r,d,f,m){if(s===null){var x=d.type;return typeof x=="function"&&!Ec(x)&&x.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(r.tag=15,r.type=x,tf(s,r,x,f,m)):(s=Ho(d.type,null,f,r,r.mode,m),s.ref=r.ref,s.return=r,r.child=s)}if(x=s.child,(s.lanes&m)===0){var w=x.memoizedProps;if(d=d.compare,d=d!==null?d:Oi,d(w,f)&&s.ref===r.ref)return jn(s,r,m)}return r.flags|=1,s=Kn(x,f),s.ref=r.ref,s.return=r,r.child=s}function tf(s,r,d,f,m){if(s!==null){var x=s.memoizedProps;if(Oi(x,f)&&s.ref===r.ref)if(bt=!1,r.pendingProps=f=x,(s.lanes&m)!==0)(s.flags&131072)!==0&&(bt=!0);else return r.lanes=s.lanes,jn(s,r,m)}return ac(s,r,d,f,m)}function nf(s,r,d){var f=r.pendingProps,m=f.children,x=s!==null?s.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(ri,At),At|=d;else{if((d&1073741824)===0)return s=x!==null?x.baseLanes|d:d,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:s,cachePool:null,transitions:null},r.updateQueue=null,Me(ri,At),At|=s,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:d,Me(ri,At),At|=f}else x!==null?(f=x.baseLanes|d,r.memoizedState=null):f=d,Me(ri,At),At|=f;return gt(s,r,m,d),r.child}function sf(s,r){var d=r.ref;(s===null&&d!==null||s!==null&&s.ref!==d)&&(r.flags|=512,r.flags|=2097152)}function ac(s,r,d,f,m){var x=yt(d)?ls:rt.current;return x=Xs(r,x),ti(r,m),d=Gl(s,r,d,f,x,m),f=Jl(),s!==null&&!bt?(r.updateQueue=s.updateQueue,r.flags&=-2053,s.lanes&=~m,jn(s,r,m)):(ze&&f&&Dl(r),r.flags|=1,gt(s,r,d,m),r.child)}function rf(s,r,d,f,m){if(yt(d)){var x=!0;ho(r)}else x=!1;if(ti(r,m),r.stateNode===null)Ro(s,r),Yh(r,d,f),ic(r,d,f,m),f=!0;else if(s===null){var w=r.stateNode,C=r.memoizedProps;w.props=C;var P=w.context,F=d.contextType;typeof F=="object"&&F!==null?F=It(F):(F=yt(d)?ls:rt.current,F=Xs(r,F));var J=d.getDerivedStateFromProps,Z=typeof J=="function"||typeof w.getSnapshotBeforeUpdate=="function";Z||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==f||P!==F)&&qh(r,w,f,F),Hn=!1;var G=r.memoizedState;w.state=G,jo(r,f,w,m),P=r.memoizedState,C!==f||G!==P||vt.current||Hn?(typeof J=="function"&&(sc(r,d,J,f),P=r.memoizedState),(C=Hn||Vh(r,d,C,f,G,P,F))?(Z||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=P),w.props=f,w.state=P,w.context=F,f=C):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{w=r.stateNode,bh(s,r),C=r.memoizedProps,F=r.type===r.elementType?C:Xt(r.type,C),w.props=F,Z=r.pendingProps,G=w.context,P=d.contextType,typeof P=="object"&&P!==null?P=It(P):(P=yt(d)?ls:rt.current,P=Xs(r,P));var oe=d.getDerivedStateFromProps;(J=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==Z||G!==P)&&qh(r,w,f,P),Hn=!1,G=r.memoizedState,w.state=G,jo(r,f,w,m);var ce=r.memoizedState;C!==Z||G!==ce||vt.current||Hn?(typeof oe=="function"&&(sc(r,d,oe,f),ce=r.memoizedState),(F=Hn||Vh(r,d,F,f,G,ce,P)||!1)?(J||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,ce,P),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,ce,P)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&G===s.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&G===s.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=ce),w.props=f,w.state=ce,w.context=P,f=F):(typeof w.componentDidUpdate!="function"||C===s.memoizedProps&&G===s.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===s.memoizedProps&&G===s.memoizedState||(r.flags|=1024),f=!1)}return lc(s,r,d,f,x,m)}function lc(s,r,d,f,m,x){sf(s,r);var w=(r.flags&128)!==0;if(!f&&!w)return m&&ch(r,d,!1),jn(s,r,x);f=r.stateNode,Xv.current=r;var C=w&&typeof d.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,s!==null&&w?(r.child=Zs(r,s.child,null,x),r.child=Zs(r,null,C,x)):gt(s,r,C,x),r.memoizedState=f.state,m&&ch(r,d,!0),r.child}function of(s){var r=s.stateNode;r.pendingContext?ah(s,r.pendingContext,r.pendingContext!==r.context):r.context&&ah(s,r.context,!1),Vl(s,r.containerInfo)}function af(s,r,d,f,m){return Js(),Il(m),r.flags|=256,gt(s,r,d,f),r.child}var cc={dehydrated:null,treeContext:null,retryLane:0};function dc(s){return{baseLanes:s,cachePool:null,transitions:null}}function lf(s,r,d){var f=r.pendingProps,m=Ie.current,x=!1,w=(r.flags&128)!==0,C;if((C=w)||(C=s!==null&&s.memoizedState===null?!1:(m&2)!==0),C?(x=!0,r.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),Me(Ie,m&1),s===null)return zl(r),s=r.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((r.mode&1)===0?r.lanes=1:s.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=f.children,s=f.fallback,x?(f=r.mode,x=r.child,w={mode:"hidden",children:w},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=Wo(w,f,0,null),s=vs(s,f,d,null),x.return=r,s.return=r,x.sibling=s,r.child=x,r.child.memoizedState=dc(d),r.memoizedState=cc,s):uc(r,w));if(m=s.memoizedState,m!==null&&(C=m.dehydrated,C!==null))return Qv(s,r,w,f,C,m,d);if(x){x=f.fallback,w=r.mode,m=s.child,C=m.sibling;var P={mode:"hidden",children:f.children};return(w&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=P,r.deletions=null):(f=Kn(m,P),f.subtreeFlags=m.subtreeFlags&14680064),C!==null?x=Kn(C,x):(x=vs(x,w,d,null),x.flags|=2),x.return=r,f.return=r,f.sibling=x,r.child=f,f=x,x=r.child,w=s.child.memoizedState,w=w===null?dc(d):{baseLanes:w.baseLanes|d,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=s.childLanes&~d,r.memoizedState=cc,f}return x=s.child,s=x.sibling,f=Kn(x,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=d),f.return=r,f.sibling=null,s!==null&&(d=r.deletions,d===null?(r.deletions=[s],r.flags|=16):d.push(s)),r.child=f,r.memoizedState=null,f}function uc(s,r){return r=Wo({mode:"visible",children:r},s.mode,0,null),r.return=s,s.child=r}function Po(s,r,d,f){return f!==null&&Il(f),Zs(r,s.child,null,d),s=uc(r,r.pendingProps.children),s.flags|=2,r.memoizedState=null,s}function Qv(s,r,d,f,m,x,w){if(d)return r.flags&256?(r.flags&=-257,f=rc(Error(n(422))),Po(s,r,w,f)):r.memoizedState!==null?(r.child=s.child,r.flags|=128,null):(x=f.fallback,m=r.mode,f=Wo({mode:"visible",children:f.children},m,0,null),x=vs(x,m,w,null),x.flags|=2,f.return=r,x.return=r,f.sibling=x,r.child=f,(r.mode&1)!==0&&Zs(r,s.child,null,w),r.child.memoizedState=dc(w),r.memoizedState=cc,x);if((r.mode&1)===0)return Po(s,r,w,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var C=f.dgst;return f=C,x=Error(n(419)),f=rc(x,f,void 0),Po(s,r,w,f)}if(C=(w&s.childLanes)!==0,bt||C){if(f=Ze,f!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|w))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,yn(s,m),Jt(f,s,m,-1))}return Cc(),f=rc(Error(n(421))),Po(s,r,w,f)}return m.data==="$?"?(r.flags|=128,r.child=s.child,r=cy.bind(null,s),m._reactRetry=r,null):(s=x.treeContext,Tt=zn(m.nextSibling),Rt=r,ze=!0,Kt=null,s!==null&&(Ot[zt++]=xn,Ot[zt++]=vn,Ot[zt++]=cs,xn=s.id,vn=s.overflow,cs=r),r=uc(r,f.children),r.flags|=4096,r)}function cf(s,r,d){s.lanes|=r;var f=s.alternate;f!==null&&(f.lanes|=r),Wl(s.return,r,d)}function hc(s,r,d,f,m){var x=s.memoizedState;x===null?s.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:d,tailMode:m}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=d,x.tailMode=m)}function df(s,r,d){var f=r.pendingProps,m=f.revealOrder,x=f.tail;if(gt(s,r,f.children,d),f=Ie.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=r.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&cf(s,d,r);else if(s.tag===19)cf(s,d,r);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}f&=1}if(Me(Ie,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(d=r.child,m=null;d!==null;)s=d.alternate,s!==null&&wo(s)===null&&(m=d),d=d.sibling;d=m,d===null?(m=r.child,r.child=null):(m=d.sibling,d.sibling=null),hc(r,!1,m,d,x);break;case"backwards":for(d=null,m=r.child,r.child=null;m!==null;){if(s=m.alternate,s!==null&&wo(s)===null){r.child=m;break}s=m.sibling,m.sibling=d,d=m,m=s}hc(r,!0,d,null,x);break;case"together":hc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ro(s,r){(r.mode&1)===0&&s!==null&&(s.alternate=null,r.alternate=null,r.flags|=2)}function jn(s,r,d){if(s!==null&&(r.dependencies=s.dependencies),ps|=r.lanes,(d&r.childLanes)===0)return null;if(s!==null&&r.child!==s.child)throw Error(n(153));if(r.child!==null){for(s=r.child,d=Kn(s,s.pendingProps),r.child=d,d.return=r;s.sibling!==null;)s=s.sibling,d=d.sibling=Kn(s,s.pendingProps),d.return=r;d.sibling=null}return r.child}function Gv(s,r,d){switch(r.tag){case 3:of(r),Js();break;case 5:_h(r);break;case 1:yt(r.type)&&ho(r);break;case 4:Vl(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;Me(vo,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(Me(Ie,Ie.current&1),r.flags|=128,null):(d&r.child.childLanes)!==0?lf(s,r,d):(Me(Ie,Ie.current&1),s=jn(s,r,d),s!==null?s.sibling:null);Me(Ie,Ie.current&1);break;case 19:if(f=(d&r.childLanes)!==0,(s.flags&128)!==0){if(f)return df(s,r,d);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Me(Ie,Ie.current),f)break;return null;case 22:case 23:return r.lanes=0,nf(s,r,d)}return jn(s,r,d)}var uf,fc,hf,ff;uf=function(s,r){for(var d=r.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break;for(;d.sibling===null;){if(d.return===null||d.return===r)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},fc=function(){},hf=function(s,r,d,f){var m=s.memoizedProps;if(m!==f){s=r.stateNode,hs(rn.current);var x=null;switch(d){case"input":m=Rn(s,m),f=Rn(s,f),x=[];break;case"select":m=ee({},m,{value:void 0}),f=ee({},f,{value:void 0}),x=[];break;case"textarea":m=Va(s,m),f=Va(s,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(s.onclick=lo)}qa(d,f);var w;d=null;for(F in m)if(!f.hasOwnProperty(F)&&m.hasOwnProperty(F)&&m[F]!=null)if(F==="style"){var C=m[F];for(w in C)C.hasOwnProperty(w)&&(d||(d={}),d[w]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?x||(x=[]):(x=x||[]).push(F,null));for(F in f){var P=f[F];if(C=m!=null?m[F]:void 0,f.hasOwnProperty(F)&&P!==C&&(P!=null||C!=null))if(F==="style")if(C){for(w in C)!C.hasOwnProperty(w)||P&&P.hasOwnProperty(w)||(d||(d={}),d[w]="");for(w in P)P.hasOwnProperty(w)&&C[w]!==P[w]&&(d||(d={}),d[w]=P[w])}else d||(x||(x=[]),x.push(F,d)),d=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,C=C?C.__html:void 0,P!=null&&C!==P&&(x=x||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(x=x||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&De("scroll",s),x||C===P||(x=[])):(x=x||[]).push(F,P))}d&&(x=x||[]).push("style",d);var F=x;(r.updateQueue=F)&&(r.flags|=4)}},ff=function(s,r,d,f){d!==f&&(r.flags|=4)};function Gi(s,r){if(!ze)switch(s.tailMode){case"hidden":r=s.tail;for(var d=null;r!==null;)r.alternate!==null&&(d=r),r=r.sibling;d===null?s.tail=null:d.sibling=null;break;case"collapsed":d=s.tail;for(var f=null;d!==null;)d.alternate!==null&&(f=d),d=d.sibling;f===null?r||s.tail===null?s.tail=null:s.tail.sibling=null:f.sibling=null}}function at(s){var r=s.alternate!==null&&s.alternate.child===s.child,d=0,f=0;if(r)for(var m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)d|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=f,s.childLanes=d,r}function Jv(s,r,d){var f=r.pendingProps;switch(Ll(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(r),null;case 1:return yt(r.type)&&uo(),at(r),null;case 3:return f=r.stateNode,ni(),Le(vt),Le(rt),Kl(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(s===null||s.child===null)&&(go(r)?r.flags|=4:s===null||s.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kt!==null&&(kc(Kt),Kt=null))),fc(s,r),at(r),null;case 5:Yl(r);var m=hs(Yi.current);if(d=r.type,s!==null&&r.stateNode!=null)hf(s,r,d,f,m),s.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(n(166));return at(r),null}if(s=hs(rn.current),go(r)){f=r.stateNode,d=r.type;var x=r.memoizedProps;switch(f[sn]=r,f[Hi]=x,s=(r.mode&1)!==0,d){case"dialog":De("cancel",f),De("close",f);break;case"iframe":case"object":case"embed":De("load",f);break;case"video":case"audio":for(m=0;m<Ii.length;m++)De(Ii[m],f);break;case"source":De("error",f);break;case"img":case"image":case"link":De("error",f),De("load",f);break;case"details":De("toggle",f);break;case"input":pn(f,x),De("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},De("invalid",f);break;case"textarea":Xd(f,x),De("invalid",f)}qa(d,x),m=null;for(var w in x)if(x.hasOwnProperty(w)){var C=x[w];w==="children"?typeof C=="string"?f.textContent!==C&&(x.suppressHydrationWarning!==!0&&ao(f.textContent,C,s),m=["children",C]):typeof C=="number"&&f.textContent!==""+C&&(x.suppressHydrationWarning!==!0&&ao(f.textContent,C,s),m=["children",""+C]):o.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&De("scroll",f)}switch(d){case"input":Lt(f),mt(f,x,!0);break;case"textarea":Lt(f),Gd(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=lo)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Jd(d)),s==="http://www.w3.org/1999/xhtml"?d==="script"?(s=w.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof f.is=="string"?s=w.createElement(d,{is:f.is}):(s=w.createElement(d),d==="select"&&(w=s,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):s=w.createElementNS(s,d),s[sn]=r,s[Hi]=f,uf(s,r,!1,!1),r.stateNode=s;e:{switch(w=Ka(d,f),d){case"dialog":De("cancel",s),De("close",s),m=f;break;case"iframe":case"object":case"embed":De("load",s),m=f;break;case"video":case"audio":for(m=0;m<Ii.length;m++)De(Ii[m],s);m=f;break;case"source":De("error",s),m=f;break;case"img":case"image":case"link":De("error",s),De("load",s),m=f;break;case"details":De("toggle",s),m=f;break;case"input":pn(s,f),m=Rn(s,f),De("invalid",s);break;case"option":m=f;break;case"select":s._wrapperState={wasMultiple:!!f.multiple},m=ee({},f,{value:void 0}),De("invalid",s);break;case"textarea":Xd(s,f),m=Va(s,f),De("invalid",s);break;default:m=f}qa(d,m),C=m;for(x in C)if(C.hasOwnProperty(x)){var P=C[x];x==="style"?tu(s,P):x==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Zd(s,P)):x==="children"?typeof P=="string"?(d!=="textarea"||P!=="")&&yi(s,P):typeof P=="number"&&yi(s,""+P):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?P!=null&&x==="onScroll"&&De("scroll",s):P!=null&&T(s,x,P,w))}switch(d){case"input":Lt(s),mt(s,f,!1);break;case"textarea":Lt(s),Gd(s);break;case"option":f.value!=null&&s.setAttribute("value",""+K(f.value));break;case"select":s.multiple=!!f.multiple,x=f.value,x!=null?zs(s,!!f.multiple,x,!1):f.defaultValue!=null&&zs(s,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=lo)}switch(d){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return at(r),null;case 6:if(s&&r.stateNode!=null)ff(s,r,s.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(n(166));if(d=hs(Yi.current),hs(rn.current),go(r)){if(f=r.stateNode,d=r.memoizedProps,f[sn]=r,(x=f.nodeValue!==d)&&(s=Rt,s!==null))switch(s.tag){case 3:ao(f.nodeValue,d,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&ao(f.nodeValue,d,(s.mode&1)!==0)}x&&(r.flags|=4)}else f=(d.nodeType===9?d:d.ownerDocument).createTextNode(f),f[sn]=r,r.stateNode=f}return at(r),null;case 13:if(Le(Ie),f=r.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ze&&Tt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)mh(),Js(),r.flags|=98560,x=!1;else if(x=go(r),f!==null&&f.dehydrated!==null){if(s===null){if(!x)throw Error(n(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(n(317));x[sn]=r}else Js(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;at(r),x=!1}else Kt!==null&&(kc(Kt),Kt=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=d,r):(f=f!==null,f!==(s!==null&&s.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(s===null||(Ie.current&1)!==0?Qe===0&&(Qe=3):Cc())),r.updateQueue!==null&&(r.flags|=4),at(r),null);case 4:return ni(),fc(s,r),s===null&&Fi(r.stateNode.containerInfo),at(r),null;case 10:return Hl(r.type._context),at(r),null;case 17:return yt(r.type)&&uo(),at(r),null;case 19:if(Le(Ie),x=r.memoizedState,x===null)return at(r),null;if(f=(r.flags&128)!==0,w=x.rendering,w===null)if(f)Gi(x,!1);else{if(Qe!==0||s!==null&&(s.flags&128)!==0)for(s=r.child;s!==null;){if(w=wo(s),w!==null){for(r.flags|=128,Gi(x,!1),f=w.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=d,d=r.child;d!==null;)x=d,s=f,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=s,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,s=w.dependencies,x.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),d=d.sibling;return Me(Ie,Ie.current&1|2),r.child}s=s.sibling}x.tail!==null&&We()>oi&&(r.flags|=128,f=!0,Gi(x,!1),r.lanes=4194304)}else{if(!f)if(s=wo(w),s!==null){if(r.flags|=128,f=!0,d=s.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),Gi(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!ze)return at(r),null}else 2*We()-x.renderingStartTime>oi&&d!==1073741824&&(r.flags|=128,f=!0,Gi(x,!1),r.lanes=4194304);x.isBackwards?(w.sibling=r.child,r.child=w):(d=x.last,d!==null?d.sibling=w:r.child=w,x.last=w)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=We(),r.sibling=null,d=Ie.current,Me(Ie,f?d&1|2:d&1),r):(at(r),null);case 22:case 23:return Nc(),f=r.memoizedState!==null,s!==null&&s.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(At&1073741824)!==0&&(at(r),r.subtreeFlags&6&&(r.flags|=8192)):at(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function Zv(s,r){switch(Ll(r),r.tag){case 1:return yt(r.type)&&uo(),s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 3:return ni(),Le(vt),Le(rt),Kl(),s=r.flags,(s&65536)!==0&&(s&128)===0?(r.flags=s&-65537|128,r):null;case 5:return Yl(r),null;case 13:if(Le(Ie),s=r.memoizedState,s!==null&&s.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Js()}return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 19:return Le(Ie),null;case 4:return ni(),null;case 10:return Hl(r.type._context),null;case 22:case 23:return Nc(),null;case 24:return null;default:return null}}var To=!1,lt=!1,ey=typeof WeakSet=="function"?WeakSet:Set,ae=null;function ii(s,r){var d=s.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(f){He(s,r,f)}else d.current=null}function pc(s,r,d){try{d()}catch(f){He(s,r,f)}}var pf=!1;function ty(s,r){if(Nl=Qr,s=Vu(),vl(s)){if("selectionStart"in s)var d={start:s.selectionStart,end:s.selectionEnd};else e:{d=(d=s.ownerDocument)&&d.defaultView||window;var f=d.getSelection&&d.getSelection();if(f&&f.rangeCount!==0){d=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{d.nodeType,x.nodeType}catch{d=null;break e}var w=0,C=-1,P=-1,F=0,J=0,Z=s,G=null;t:for(;;){for(var oe;Z!==d||m!==0&&Z.nodeType!==3||(C=w+m),Z!==x||f!==0&&Z.nodeType!==3||(P=w+f),Z.nodeType===3&&(w+=Z.nodeValue.length),(oe=Z.firstChild)!==null;)G=Z,Z=oe;for(;;){if(Z===s)break t;if(G===d&&++F===m&&(C=w),G===x&&++J===f&&(P=w),(oe=Z.nextSibling)!==null)break;Z=G,G=Z.parentNode}Z=oe}d=C===-1||P===-1?null:{start:C,end:P}}else d=null}d=d||{start:0,end:0}}else d=null;for(Cl={focusedElem:s,selectionRange:d},Qr=!1,ae=r;ae!==null;)if(r=ae,s=r.child,(r.subtreeFlags&1028)!==0&&s!==null)s.return=r,ae=s;else for(;ae!==null;){r=ae;try{var ce=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var de=ce.memoizedProps,$e=ce.memoizedState,z=r.stateNode,M=z.getSnapshotBeforeUpdate(r.elementType===r.type?de:Xt(r.type,de),$e);z.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(te){He(r,r.return,te)}if(s=r.sibling,s!==null){s.return=r.return,ae=s;break}ae=r.return}return ce=pf,pf=!1,ce}function Ji(s,r,d){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&s)===s){var x=m.destroy;m.destroy=void 0,x!==void 0&&pc(r,d,x)}m=m.next}while(m!==f)}}function Ao(s,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var d=r=r.next;do{if((d.tag&s)===s){var f=d.create;d.destroy=f()}d=d.next}while(d!==r)}}function mc(s){var r=s.ref;if(r!==null){var d=s.stateNode;switch(s.tag){case 5:s=d;break;default:s=d}typeof r=="function"?r(s):r.current=s}}function mf(s){var r=s.alternate;r!==null&&(s.alternate=null,mf(r)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(r=s.stateNode,r!==null&&(delete r[sn],delete r[Hi],delete r[Tl],delete r[zv],delete r[Iv])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function gf(s){return s.tag===5||s.tag===3||s.tag===4}function xf(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||gf(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function gc(s,r,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,r?d.nodeType===8?d.parentNode.insertBefore(s,r):d.insertBefore(s,r):(d.nodeType===8?(r=d.parentNode,r.insertBefore(s,d)):(r=d,r.appendChild(s)),d=d._reactRootContainer,d!=null||r.onclick!==null||(r.onclick=lo));else if(f!==4&&(s=s.child,s!==null))for(gc(s,r,d),s=s.sibling;s!==null;)gc(s,r,d),s=s.sibling}function xc(s,r,d){var f=s.tag;if(f===5||f===6)s=s.stateNode,r?d.insertBefore(s,r):d.appendChild(s);else if(f!==4&&(s=s.child,s!==null))for(xc(s,r,d),s=s.sibling;s!==null;)xc(s,r,d),s=s.sibling}var tt=null,Qt=!1;function $n(s,r,d){for(d=d.child;d!==null;)vf(s,r,d),d=d.sibling}function vf(s,r,d){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ur,d)}catch{}switch(d.tag){case 5:lt||ii(d,r);case 6:var f=tt,m=Qt;tt=null,$n(s,r,d),tt=f,Qt=m,tt!==null&&(Qt?(s=tt,d=d.stateNode,s.nodeType===8?s.parentNode.removeChild(d):s.removeChild(d)):tt.removeChild(d.stateNode));break;case 18:tt!==null&&(Qt?(s=tt,d=d.stateNode,s.nodeType===8?Rl(s.parentNode,d):s.nodeType===1&&Rl(s,d),Ri(s)):Rl(tt,d.stateNode));break;case 4:f=tt,m=Qt,tt=d.stateNode.containerInfo,Qt=!0,$n(s,r,d),tt=f,Qt=m;break;case 0:case 11:case 14:case 15:if(!lt&&(f=d.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&pc(d,r,w),m=m.next}while(m!==f)}$n(s,r,d);break;case 1:if(!lt&&(ii(d,r),f=d.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=d.memoizedProps,f.state=d.memoizedState,f.componentWillUnmount()}catch(C){He(d,r,C)}$n(s,r,d);break;case 21:$n(s,r,d);break;case 22:d.mode&1?(lt=(f=lt)||d.memoizedState!==null,$n(s,r,d),lt=f):$n(s,r,d);break;default:$n(s,r,d)}}function yf(s){var r=s.updateQueue;if(r!==null){s.updateQueue=null;var d=s.stateNode;d===null&&(d=s.stateNode=new ey),r.forEach(function(f){var m=dy.bind(null,s,f);d.has(f)||(d.add(f),f.then(m,m))})}}function Gt(s,r){var d=r.deletions;if(d!==null)for(var f=0;f<d.length;f++){var m=d[f];try{var x=s,w=r,C=w;e:for(;C!==null;){switch(C.tag){case 5:tt=C.stateNode,Qt=!1;break e;case 3:tt=C.stateNode.containerInfo,Qt=!0;break e;case 4:tt=C.stateNode.containerInfo,Qt=!0;break e}C=C.return}if(tt===null)throw Error(n(160));vf(x,w,m),tt=null,Qt=!1;var P=m.alternate;P!==null&&(P.return=null),m.return=null}catch(F){He(m,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bf(r,s),r=r.sibling}function bf(s,r){var d=s.alternate,f=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(Gt(r,s),an(s),f&4){try{Ji(3,s,s.return),Ao(3,s)}catch(de){He(s,s.return,de)}try{Ji(5,s,s.return)}catch(de){He(s,s.return,de)}}break;case 1:Gt(r,s),an(s),f&512&&d!==null&&ii(d,d.return);break;case 5:if(Gt(r,s),an(s),f&512&&d!==null&&ii(d,d.return),s.flags&32){var m=s.stateNode;try{yi(m,"")}catch(de){He(s,s.return,de)}}if(f&4&&(m=s.stateNode,m!=null)){var x=s.memoizedProps,w=d!==null?d.memoizedProps:x,C=s.type,P=s.updateQueue;if(s.updateQueue=null,P!==null)try{C==="input"&&x.type==="radio"&&x.name!=null&&Et(m,x),Ka(C,w);var F=Ka(C,x);for(w=0;w<P.length;w+=2){var J=P[w],Z=P[w+1];J==="style"?tu(m,Z):J==="dangerouslySetInnerHTML"?Zd(m,Z):J==="children"?yi(m,Z):T(m,J,Z,F)}switch(C){case"input":it(m,x);break;case"textarea":Qd(m,x);break;case"select":var G=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var oe=x.value;oe!=null?zs(m,!!x.multiple,oe,!1):G!==!!x.multiple&&(x.defaultValue!=null?zs(m,!!x.multiple,x.defaultValue,!0):zs(m,!!x.multiple,x.multiple?[]:"",!1))}m[Hi]=x}catch(de){He(s,s.return,de)}}break;case 6:if(Gt(r,s),an(s),f&4){if(s.stateNode===null)throw Error(n(162));m=s.stateNode,x=s.memoizedProps;try{m.nodeValue=x}catch(de){He(s,s.return,de)}}break;case 3:if(Gt(r,s),an(s),f&4&&d!==null&&d.memoizedState.isDehydrated)try{Ri(r.containerInfo)}catch(de){He(s,s.return,de)}break;case 4:Gt(r,s),an(s);break;case 13:Gt(r,s),an(s),m=s.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(bc=We())),f&4&&yf(s);break;case 22:if(J=d!==null&&d.memoizedState!==null,s.mode&1?(lt=(F=lt)||J,Gt(r,s),lt=F):Gt(r,s),an(s),f&8192){if(F=s.memoizedState!==null,(s.stateNode.isHidden=F)&&!J&&(s.mode&1)!==0)for(ae=s,J=s.child;J!==null;){for(Z=ae=J;ae!==null;){switch(G=ae,oe=G.child,G.tag){case 0:case 11:case 14:case 15:Ji(4,G,G.return);break;case 1:ii(G,G.return);var ce=G.stateNode;if(typeof ce.componentWillUnmount=="function"){f=G,d=G.return;try{r=f,ce.props=r.memoizedProps,ce.state=r.memoizedState,ce.componentWillUnmount()}catch(de){He(f,d,de)}}break;case 5:ii(G,G.return);break;case 22:if(G.memoizedState!==null){_f(Z);continue}}oe!==null?(oe.return=G,ae=oe):_f(Z)}J=J.sibling}e:for(J=null,Z=s;;){if(Z.tag===5){if(J===null){J=Z;try{m=Z.stateNode,F?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(C=Z.stateNode,P=Z.memoizedProps.style,w=P!=null&&P.hasOwnProperty("display")?P.display:null,C.style.display=eu("display",w))}catch(de){He(s,s.return,de)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=F?"":Z.memoizedProps}catch(de){He(s,s.return,de)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===s)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===s)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===s)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:Gt(r,s),an(s),f&4&&yf(s);break;case 21:break;default:Gt(r,s),an(s)}}function an(s){var r=s.flags;if(r&2){try{e:{for(var d=s.return;d!==null;){if(gf(d)){var f=d;break e}d=d.return}throw Error(n(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(yi(m,""),f.flags&=-33);var x=xf(s);xc(s,x,m);break;case 3:case 4:var w=f.stateNode.containerInfo,C=xf(s);gc(s,C,w);break;default:throw Error(n(161))}}catch(P){He(s,s.return,P)}s.flags&=-3}r&4096&&(s.flags&=-4097)}function ny(s,r,d){ae=s,jf(s)}function jf(s,r,d){for(var f=(s.mode&1)!==0;ae!==null;){var m=ae,x=m.child;if(m.tag===22&&f){var w=m.memoizedState!==null||To;if(!w){var C=m.alternate,P=C!==null&&C.memoizedState!==null||lt;C=To;var F=lt;if(To=w,(lt=P)&&!F)for(ae=m;ae!==null;)w=ae,P=w.child,w.tag===22&&w.memoizedState!==null?kf(m):P!==null?(P.return=w,ae=P):kf(m);for(;x!==null;)ae=x,jf(x),x=x.sibling;ae=m,To=C,lt=F}wf(s)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ae=x):wf(s)}}function wf(s){for(;ae!==null;){var r=ae;if((r.flags&8772)!==0){var d=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:lt||Ao(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!lt)if(d===null)f.componentDidMount();else{var m=r.elementType===r.type?d.memoizedProps:Xt(r.type,d.memoizedProps);f.componentDidUpdate(m,d.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&wh(r,x,f);break;case 3:var w=r.updateQueue;if(w!==null){if(d=null,r.child!==null)switch(r.child.tag){case 5:d=r.child.stateNode;break;case 1:d=r.child.stateNode}wh(r,w,d)}break;case 5:var C=r.stateNode;if(d===null&&r.flags&4){d=C;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&d.focus();break;case"img":P.src&&(d.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var J=F.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Ri(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}lt||r.flags&512&&mc(r)}catch(G){He(r,r.return,G)}}if(r===s){ae=null;break}if(d=r.sibling,d!==null){d.return=r.return,ae=d;break}ae=r.return}}function _f(s){for(;ae!==null;){var r=ae;if(r===s){ae=null;break}var d=r.sibling;if(d!==null){d.return=r.return,ae=d;break}ae=r.return}}function kf(s){for(;ae!==null;){var r=ae;try{switch(r.tag){case 0:case 11:case 15:var d=r.return;try{Ao(4,r)}catch(P){He(r,d,P)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(P){He(r,m,P)}}var x=r.return;try{mc(r)}catch(P){He(r,x,P)}break;case 5:var w=r.return;try{mc(r)}catch(P){He(r,w,P)}}}catch(P){He(r,r.return,P)}if(r===s){ae=null;break}var C=r.sibling;if(C!==null){C.return=r.return,ae=C;break}ae=r.return}}var sy=Math.ceil,Mo=A.ReactCurrentDispatcher,vc=A.ReactCurrentOwner,Bt=A.ReactCurrentBatchConfig,Ne=0,Ze=null,Ye=null,nt=0,At=0,ri=In(0),Qe=0,Zi=null,ps=0,Do=0,yc=0,er=null,jt=null,bc=0,oi=1/0,wn=null,Lo=!1,jc=null,Un=null,Oo=!1,Vn=null,zo=0,tr=0,wc=null,Io=-1,Fo=0;function xt(){return(Ne&6)!==0?We():Io!==-1?Io:Io=We()}function Yn(s){return(s.mode&1)===0?1:(Ne&2)!==0&&nt!==0?nt&-nt:Bv.transition!==null?(Fo===0&&(Fo=gu()),Fo):(s=Re,s!==0||(s=window.event,s=s===void 0?16:Su(s.type)),s)}function Jt(s,r,d,f){if(50<tr)throw tr=0,wc=null,Error(n(185));Si(s,d,f),((Ne&2)===0||s!==Ze)&&(s===Ze&&((Ne&2)===0&&(Do|=d),Qe===4&&qn(s,nt)),wt(s,f),d===1&&Ne===0&&(r.mode&1)===0&&(oi=We()+500,fo&&Bn()))}function wt(s,r){var d=s.callbackNode;Bx(s,r);var f=qr(s,s===Ze?nt:0);if(f===0)d!==null&&fu(d),s.callbackNode=null,s.callbackPriority=0;else if(r=f&-f,s.callbackPriority!==r){if(d!=null&&fu(d),r===1)s.tag===0?Fv(Nf.bind(null,s)):dh(Nf.bind(null,s)),Lv(function(){(Ne&6)===0&&Bn()}),d=null;else{switch(xu(f)){case 1:d=tl;break;case 4:d=pu;break;case 16:d=$r;break;case 536870912:d=mu;break;default:d=$r}d=Df(d,Sf.bind(null,s))}s.callbackPriority=r,s.callbackNode=d}}function Sf(s,r){if(Io=-1,Fo=0,(Ne&6)!==0)throw Error(n(327));var d=s.callbackNode;if(ai()&&s.callbackNode!==d)return null;var f=qr(s,s===Ze?nt:0);if(f===0)return null;if((f&30)!==0||(f&s.expiredLanes)!==0||r)r=Bo(s,f);else{r=f;var m=Ne;Ne|=2;var x=Ef();(Ze!==s||nt!==r)&&(wn=null,oi=We()+500,gs(s,r));do try{oy();break}catch(C){Cf(s,C)}while(!0);Bl(),Mo.current=x,Ne=m,Ye!==null?r=0:(Ze=null,nt=0,r=Qe)}if(r!==0){if(r===2&&(m=nl(s),m!==0&&(f=m,r=_c(s,m))),r===1)throw d=Zi,gs(s,0),qn(s,f),wt(s,We()),d;if(r===6)qn(s,f);else{if(m=s.current.alternate,(f&30)===0&&!iy(m)&&(r=Bo(s,f),r===2&&(x=nl(s),x!==0&&(f=x,r=_c(s,x))),r===1))throw d=Zi,gs(s,0),qn(s,f),wt(s,We()),d;switch(s.finishedWork=m,s.finishedLanes=f,r){case 0:case 1:throw Error(n(345));case 2:xs(s,jt,wn);break;case 3:if(qn(s,f),(f&130023424)===f&&(r=bc+500-We(),10<r)){if(qr(s,0)!==0)break;if(m=s.suspendedLanes,(m&f)!==f){xt(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Pl(xs.bind(null,s,jt,wn),r);break}xs(s,jt,wn);break;case 4:if(qn(s,f),(f&4194240)===f)break;for(r=s.eventTimes,m=-1;0<f;){var w=31-Yt(f);x=1<<w,w=r[w],w>m&&(m=w),f&=~x}if(f=m,f=We()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*sy(f/1960))-f,10<f){s.timeoutHandle=Pl(xs.bind(null,s,jt,wn),f);break}xs(s,jt,wn);break;case 5:xs(s,jt,wn);break;default:throw Error(n(329))}}}return wt(s,We()),s.callbackNode===d?Sf.bind(null,s):null}function _c(s,r){var d=er;return s.current.memoizedState.isDehydrated&&(gs(s,r).flags|=256),s=Bo(s,r),s!==2&&(r=jt,jt=d,r!==null&&kc(r)),s}function kc(s){jt===null?jt=s:jt.push.apply(jt,s)}function iy(s){for(var r=s;;){if(r.flags&16384){var d=r.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var f=0;f<d.length;f++){var m=d[f],x=m.getSnapshot;m=m.value;try{if(!qt(x(),m))return!1}catch{return!1}}}if(d=r.child,r.subtreeFlags&16384&&d!==null)d.return=r,r=d;else{if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function qn(s,r){for(r&=~yc,r&=~Do,s.suspendedLanes|=r,s.pingedLanes&=~r,s=s.expirationTimes;0<r;){var d=31-Yt(r),f=1<<d;s[d]=-1,r&=~f}}function Nf(s){if((Ne&6)!==0)throw Error(n(327));ai();var r=qr(s,0);if((r&1)===0)return wt(s,We()),null;var d=Bo(s,r);if(s.tag!==0&&d===2){var f=nl(s);f!==0&&(r=f,d=_c(s,f))}if(d===1)throw d=Zi,gs(s,0),qn(s,r),wt(s,We()),d;if(d===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=r,xs(s,jt,wn),wt(s,We()),null}function Sc(s,r){var d=Ne;Ne|=1;try{return s(r)}finally{Ne=d,Ne===0&&(oi=We()+500,fo&&Bn())}}function ms(s){Vn!==null&&Vn.tag===0&&(Ne&6)===0&&ai();var r=Ne;Ne|=1;var d=Bt.transition,f=Re;try{if(Bt.transition=null,Re=1,s)return s()}finally{Re=f,Bt.transition=d,Ne=r,(Ne&6)===0&&Bn()}}function Nc(){At=ri.current,Le(ri)}function gs(s,r){s.finishedWork=null,s.finishedLanes=0;var d=s.timeoutHandle;if(d!==-1&&(s.timeoutHandle=-1,Dv(d)),Ye!==null)for(d=Ye.return;d!==null;){var f=d;switch(Ll(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&uo();break;case 3:ni(),Le(vt),Le(rt),Kl();break;case 5:Yl(f);break;case 4:ni();break;case 13:Le(Ie);break;case 19:Le(Ie);break;case 10:Hl(f.type._context);break;case 22:case 23:Nc()}d=d.return}if(Ze=s,Ye=s=Kn(s.current,null),nt=At=r,Qe=0,Zi=null,yc=Do=ps=0,jt=er=null,us!==null){for(r=0;r<us.length;r++)if(d=us[r],f=d.interleaved,f!==null){d.interleaved=null;var m=f.next,x=d.pending;if(x!==null){var w=x.next;x.next=m,f.next=w}d.pending=f}us=null}return s}function Cf(s,r){do{var d=Ye;try{if(Bl(),_o.current=Co,ko){for(var f=Fe.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}ko=!1}if(fs=0,Je=Xe=Fe=null,qi=!1,Ki=0,vc.current=null,d===null||d.return===null){Qe=1,Zi=r,Ye=null;break}e:{var x=s,w=d.return,C=d,P=r;if(r=nt,C.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,J=C,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var G=J.alternate;G?(J.updateQueue=G.updateQueue,J.memoizedState=G.memoizedState,J.lanes=G.lanes):(J.updateQueue=null,J.memoizedState=null)}var oe=Gh(w);if(oe!==null){oe.flags&=-257,Jh(oe,w,C,x,r),oe.mode&1&&Qh(x,F,r),r=oe,P=F;var ce=r.updateQueue;if(ce===null){var de=new Set;de.add(P),r.updateQueue=de}else ce.add(P);break e}else{if((r&1)===0){Qh(x,F,r),Cc();break e}P=Error(n(426))}}else if(ze&&C.mode&1){var $e=Gh(w);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),Jh($e,w,C,x,r),Il(si(P,C));break e}}x=P=si(P,C),Qe!==4&&(Qe=2),er===null?er=[x]:er.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var z=Kh(x,P,r);jh(x,z);break e;case 1:C=P;var M=x.type,I=x.stateNode;if((x.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Un===null||!Un.has(I)))){x.flags|=65536,r&=-r,x.lanes|=r;var te=Xh(x,C,r);jh(x,te);break e}}x=x.return}while(x!==null)}Rf(d)}catch(he){r=he,Ye===d&&d!==null&&(Ye=d=d.return);continue}break}while(!0)}function Ef(){var s=Mo.current;return Mo.current=Co,s===null?Co:s}function Cc(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ze===null||(ps&268435455)===0&&(Do&268435455)===0||qn(Ze,nt)}function Bo(s,r){var d=Ne;Ne|=2;var f=Ef();(Ze!==s||nt!==r)&&(wn=null,gs(s,r));do try{ry();break}catch(m){Cf(s,m)}while(!0);if(Bl(),Ne=d,Mo.current=f,Ye!==null)throw Error(n(261));return Ze=null,nt=0,Qe}function ry(){for(;Ye!==null;)Pf(Ye)}function oy(){for(;Ye!==null&&!Tx();)Pf(Ye)}function Pf(s){var r=Mf(s.alternate,s,At);s.memoizedProps=s.pendingProps,r===null?Rf(s):Ye=r,vc.current=null}function Rf(s){var r=s;do{var d=r.alternate;if(s=r.return,(r.flags&32768)===0){if(d=Jv(d,r,At),d!==null){Ye=d;return}}else{if(d=Zv(d,r),d!==null){d.flags&=32767,Ye=d;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Qe=6,Ye=null;return}}if(r=r.sibling,r!==null){Ye=r;return}Ye=r=s}while(r!==null);Qe===0&&(Qe=5)}function xs(s,r,d){var f=Re,m=Bt.transition;try{Bt.transition=null,Re=1,ay(s,r,d,f)}finally{Bt.transition=m,Re=f}return null}function ay(s,r,d,f){do ai();while(Vn!==null);if((Ne&6)!==0)throw Error(n(327));d=s.finishedWork;var m=s.finishedLanes;if(d===null)return null;if(s.finishedWork=null,s.finishedLanes=0,d===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var x=d.lanes|d.childLanes;if(Hx(s,x),s===Ze&&(Ye=Ze=null,nt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||Oo||(Oo=!0,Df($r,function(){return ai(),null})),x=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||x){x=Bt.transition,Bt.transition=null;var w=Re;Re=1;var C=Ne;Ne|=4,vc.current=null,ty(s,d),bf(d,s),Cv(Cl),Qr=!!Nl,Cl=Nl=null,s.current=d,ny(d),Ax(),Ne=C,Re=w,Bt.transition=x}else s.current=d;if(Oo&&(Oo=!1,Vn=s,zo=m),x=s.pendingLanes,x===0&&(Un=null),Lx(d.stateNode),wt(s,We()),r!==null)for(f=s.onRecoverableError,d=0;d<r.length;d++)m=r[d],f(m.value,{componentStack:m.stack,digest:m.digest});if(Lo)throw Lo=!1,s=jc,jc=null,s;return(zo&1)!==0&&s.tag!==0&&ai(),x=s.pendingLanes,(x&1)!==0?s===wc?tr++:(tr=0,wc=s):tr=0,Bn(),null}function ai(){if(Vn!==null){var s=xu(zo),r=Bt.transition,d=Re;try{if(Bt.transition=null,Re=16>s?16:s,Vn===null)var f=!1;else{if(s=Vn,Vn=null,zo=0,(Ne&6)!==0)throw Error(n(331));var m=Ne;for(Ne|=4,ae=s.current;ae!==null;){var x=ae,w=x.child;if((ae.flags&16)!==0){var C=x.deletions;if(C!==null){for(var P=0;P<C.length;P++){var F=C[P];for(ae=F;ae!==null;){var J=ae;switch(J.tag){case 0:case 11:case 15:Ji(8,J,x)}var Z=J.child;if(Z!==null)Z.return=J,ae=Z;else for(;ae!==null;){J=ae;var G=J.sibling,oe=J.return;if(mf(J),J===F){ae=null;break}if(G!==null){G.return=oe,ae=G;break}ae=oe}}}var ce=x.alternate;if(ce!==null){var de=ce.child;if(de!==null){ce.child=null;do{var $e=de.sibling;de.sibling=null,de=$e}while(de!==null)}}ae=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,ae=w;else e:for(;ae!==null;){if(x=ae,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ji(9,x,x.return)}var z=x.sibling;if(z!==null){z.return=x.return,ae=z;break e}ae=x.return}}var M=s.current;for(ae=M;ae!==null;){w=ae;var I=w.child;if((w.subtreeFlags&2064)!==0&&I!==null)I.return=w,ae=I;else e:for(w=M;ae!==null;){if(C=ae,(C.flags&2048)!==0)try{switch(C.tag){case 0:case 11:case 15:Ao(9,C)}}catch(he){He(C,C.return,he)}if(C===w){ae=null;break e}var te=C.sibling;if(te!==null){te.return=C.return,ae=te;break e}ae=C.return}}if(Ne=m,Bn(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ur,s)}catch{}f=!0}return f}finally{Re=d,Bt.transition=r}}return!1}function Tf(s,r,d){r=si(d,r),r=Kh(s,r,1),s=Wn(s,r,1),r=xt(),s!==null&&(Si(s,1,r),wt(s,r))}function He(s,r,d){if(s.tag===3)Tf(s,s,d);else for(;r!==null;){if(r.tag===3){Tf(r,s,d);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Un===null||!Un.has(f))){s=si(d,s),s=Xh(r,s,1),r=Wn(r,s,1),s=xt(),r!==null&&(Si(r,1,s),wt(r,s));break}}r=r.return}}function ly(s,r,d){var f=s.pingCache;f!==null&&f.delete(r),r=xt(),s.pingedLanes|=s.suspendedLanes&d,Ze===s&&(nt&d)===d&&(Qe===4||Qe===3&&(nt&130023424)===nt&&500>We()-bc?gs(s,0):yc|=d),wt(s,r)}function Af(s,r){r===0&&((s.mode&1)===0?r=1:(r=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var d=xt();s=yn(s,r),s!==null&&(Si(s,r,d),wt(s,d))}function cy(s){var r=s.memoizedState,d=0;r!==null&&(d=r.retryLane),Af(s,d)}function dy(s,r){var d=0;switch(s.tag){case 13:var f=s.stateNode,m=s.memoizedState;m!==null&&(d=m.retryLane);break;case 19:f=s.stateNode;break;default:throw Error(n(314))}f!==null&&f.delete(r),Af(s,d)}var Mf;Mf=function(s,r,d){if(s!==null)if(s.memoizedProps!==r.pendingProps||vt.current)bt=!0;else{if((s.lanes&d)===0&&(r.flags&128)===0)return bt=!1,Gv(s,r,d);bt=(s.flags&131072)!==0}else bt=!1,ze&&(r.flags&1048576)!==0&&uh(r,mo,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Ro(s,r),s=r.pendingProps;var m=Xs(r,rt.current);ti(r,d),m=Gl(null,r,f,s,m,d);var x=Jl();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,yt(f)?(x=!0,ho(r)):x=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Ul(r),m.updater=Eo,r.stateNode=m,m._reactInternals=r,ic(r,f,s,d),r=lc(null,r,f,!0,x,d)):(r.tag=0,ze&&x&&Dl(r),gt(null,r,m,d),r=r.child),r;case 16:f=r.elementType;e:{switch(Ro(s,r),s=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=hy(f),s=Xt(f,s),m){case 0:r=ac(null,r,f,s,d);break e;case 1:r=rf(null,r,f,s,d);break e;case 11:r=Zh(null,r,f,s,d);break e;case 14:r=ef(null,r,f,Xt(f.type,s),d);break e}throw Error(n(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Xt(f,m),ac(s,r,f,m,d);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Xt(f,m),rf(s,r,f,m,d);case 3:e:{if(of(r),s===null)throw Error(n(387));f=r.pendingProps,x=r.memoizedState,m=x.element,bh(s,r),jo(r,f,null,d);var w=r.memoizedState;if(f=w.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){m=si(Error(n(423)),r),r=af(s,r,f,d,m);break e}else if(f!==m){m=si(Error(n(424)),r),r=af(s,r,f,d,m);break e}else for(Tt=zn(r.stateNode.containerInfo.firstChild),Rt=r,ze=!0,Kt=null,d=vh(r,null,f,d),r.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(Js(),f===m){r=jn(s,r,d);break e}gt(s,r,f,d)}r=r.child}return r;case 5:return _h(r),s===null&&zl(r),f=r.type,m=r.pendingProps,x=s!==null?s.memoizedProps:null,w=m.children,El(f,m)?w=null:x!==null&&El(f,x)&&(r.flags|=32),sf(s,r),gt(s,r,w,d),r.child;case 6:return s===null&&zl(r),null;case 13:return lf(s,r,d);case 4:return Vl(r,r.stateNode.containerInfo),f=r.pendingProps,s===null?r.child=Zs(r,null,f,d):gt(s,r,f,d),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Xt(f,m),Zh(s,r,f,m,d);case 7:return gt(s,r,r.pendingProps,d),r.child;case 8:return gt(s,r,r.pendingProps.children,d),r.child;case 12:return gt(s,r,r.pendingProps.children,d),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,x=r.memoizedProps,w=m.value,Me(vo,f._currentValue),f._currentValue=w,x!==null)if(qt(x.value,w)){if(x.children===m.children&&!vt.current){r=jn(s,r,d);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var C=x.dependencies;if(C!==null){w=x.child;for(var P=C.firstContext;P!==null;){if(P.context===f){if(x.tag===1){P=bn(-1,d&-d),P.tag=2;var F=x.updateQueue;if(F!==null){F=F.shared;var J=F.pending;J===null?P.next=P:(P.next=J.next,J.next=P),F.pending=P}}x.lanes|=d,P=x.alternate,P!==null&&(P.lanes|=d),Wl(x.return,d,r),C.lanes|=d;break}P=P.next}}else if(x.tag===10)w=x.type===r.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(n(341));w.lanes|=d,C=w.alternate,C!==null&&(C.lanes|=d),Wl(w,d,r),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===r){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}gt(s,r,m.children,d),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,ti(r,d),m=It(m),f=f(m),r.flags|=1,gt(s,r,f,d),r.child;case 14:return f=r.type,m=Xt(f,r.pendingProps),m=Xt(f.type,m),ef(s,r,f,m,d);case 15:return tf(s,r,r.type,r.pendingProps,d);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Xt(f,m),Ro(s,r),r.tag=1,yt(f)?(s=!0,ho(r)):s=!1,ti(r,d),Yh(r,f,m),ic(r,f,m,d),lc(null,r,f,!0,s,d);case 19:return df(s,r,d);case 22:return nf(s,r,d)}throw Error(n(156,r.tag))};function Df(s,r){return hu(s,r)}function uy(s,r,d,f){this.tag=s,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(s,r,d,f){return new uy(s,r,d,f)}function Ec(s){return s=s.prototype,!(!s||!s.isReactComponent)}function hy(s){if(typeof s=="function")return Ec(s)?1:0;if(s!=null){if(s=s.$$typeof,s===B)return 11;if(s===re)return 14}return 2}function Kn(s,r){var d=s.alternate;return d===null?(d=Ht(s.tag,r,s.key,s.mode),d.elementType=s.elementType,d.type=s.type,d.stateNode=s.stateNode,d.alternate=s,s.alternate=d):(d.pendingProps=r,d.type=s.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=s.flags&14680064,d.childLanes=s.childLanes,d.lanes=s.lanes,d.child=s.child,d.memoizedProps=s.memoizedProps,d.memoizedState=s.memoizedState,d.updateQueue=s.updateQueue,r=s.dependencies,d.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},d.sibling=s.sibling,d.index=s.index,d.ref=s.ref,d}function Ho(s,r,d,f,m,x){var w=2;if(f=s,typeof s=="function")Ec(s)&&(w=1);else if(typeof s=="string")w=5;else e:switch(s){case U:return vs(d.children,m,x,r);case $:w=8,m|=8;break;case Y:return s=Ht(12,d,r,m|2),s.elementType=Y,s.lanes=x,s;case V:return s=Ht(13,d,r,m),s.elementType=V,s.lanes=x,s;case L:return s=Ht(19,d,r,m),s.elementType=L,s.lanes=x,s;case ne:return Wo(d,m,x,r);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Q:w=10;break e;case se:w=9;break e;case B:w=11;break e;case re:w=14;break e;case W:w=16,f=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return r=Ht(w,d,r,m),r.elementType=s,r.type=f,r.lanes=x,r}function vs(s,r,d,f){return s=Ht(7,s,f,r),s.lanes=d,s}function Wo(s,r,d,f){return s=Ht(22,s,f,r),s.elementType=ne,s.lanes=d,s.stateNode={isHidden:!1},s}function Pc(s,r,d){return s=Ht(6,s,null,r),s.lanes=d,s}function Rc(s,r,d){return r=Ht(4,s.children!==null?s.children:[],s.key,r),r.lanes=d,r.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},r}function fy(s,r,d,f,m){this.tag=r,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sl(0),this.expirationTimes=sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Tc(s,r,d,f,m,x,w,C,P){return s=new fy(s,r,d,C,P),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Ht(3,null,null,r),s.current=x,x.stateNode=s,x.memoizedState={element:f,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ul(x),s}function py(s,r,d){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:f==null?null:""+f,children:s,containerInfo:r,implementation:d}}function Lf(s){if(!s)return Fn;s=s._reactInternals;e:{if(os(s)!==s||s.tag!==1)throw Error(n(170));var r=s;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(yt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(s.tag===1){var d=s.type;if(yt(d))return lh(s,d,r)}return r}function Of(s,r,d,f,m,x,w,C,P){return s=Tc(d,f,!0,s,m,x,w,C,P),s.context=Lf(null),d=s.current,f=xt(),m=Yn(d),x=bn(f,m),x.callback=r??null,Wn(d,x,m),s.current.lanes=m,Si(s,m,f),wt(s,f),s}function $o(s,r,d,f){var m=r.current,x=xt(),w=Yn(m);return d=Lf(d),r.context===null?r.context=d:r.pendingContext=d,r=bn(x,w),r.payload={element:s},f=f===void 0?null:f,f!==null&&(r.callback=f),s=Wn(m,r,w),s!==null&&(Jt(s,m,w,x),bo(s,m,w)),w}function Uo(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function zf(s,r){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var d=s.retryLane;s.retryLane=d!==0&&d<r?d:r}}function Ac(s,r){zf(s,r),(s=s.alternate)&&zf(s,r)}function my(){return null}var If=typeof reportError=="function"?reportError:function(s){console.error(s)};function Mc(s){this._internalRoot=s}Vo.prototype.render=Mc.prototype.render=function(s){var r=this._internalRoot;if(r===null)throw Error(n(409));$o(s,r,null,null)},Vo.prototype.unmount=Mc.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var r=s.containerInfo;ms(function(){$o(null,s,null,null)}),r[mn]=null}};function Vo(s){this._internalRoot=s}Vo.prototype.unstable_scheduleHydration=function(s){if(s){var r=bu();s={blockedOn:null,target:s,priority:r};for(var d=0;d<Dn.length&&r!==0&&r<Dn[d].priority;d++);Dn.splice(d,0,s),d===0&&_u(s)}};function Dc(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Yo(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function Ff(){}function gy(s,r,d,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var F=Uo(w);x.call(F)}}var w=Of(r,f,s,0,null,!1,!1,"",Ff);return s._reactRootContainer=w,s[mn]=w.current,Fi(s.nodeType===8?s.parentNode:s),ms(),w}for(;m=s.lastChild;)s.removeChild(m);if(typeof f=="function"){var C=f;f=function(){var F=Uo(P);C.call(F)}}var P=Tc(s,0,!1,null,null,!1,!1,"",Ff);return s._reactRootContainer=P,s[mn]=P.current,Fi(s.nodeType===8?s.parentNode:s),ms(function(){$o(r,P,d,f)}),P}function qo(s,r,d,f,m){var x=d._reactRootContainer;if(x){var w=x;if(typeof m=="function"){var C=m;m=function(){var P=Uo(w);C.call(P)}}$o(r,w,s,m)}else w=gy(d,r,s,m,f);return Uo(w)}vu=function(s){switch(s.tag){case 3:var r=s.stateNode;if(r.current.memoizedState.isDehydrated){var d=ki(r.pendingLanes);d!==0&&(il(r,d|1),wt(r,We()),(Ne&6)===0&&(oi=We()+500,Bn()))}break;case 13:ms(function(){var f=yn(s,1);if(f!==null){var m=xt();Jt(f,s,1,m)}}),Ac(s,1)}},rl=function(s){if(s.tag===13){var r=yn(s,134217728);if(r!==null){var d=xt();Jt(r,s,134217728,d)}Ac(s,134217728)}},yu=function(s){if(s.tag===13){var r=Yn(s),d=yn(s,r);if(d!==null){var f=xt();Jt(d,s,r,f)}Ac(s,r)}},bu=function(){return Re},ju=function(s,r){var d=Re;try{return Re=s,r()}finally{Re=d}},Ga=function(s,r,d){switch(r){case"input":if(it(s,d),r=d.name,d.type==="radio"&&r!=null){for(d=s;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<d.length;r++){var f=d[r];if(f!==s&&f.form===s.form){var m=co(f);if(!m)throw Error(n(90));tn(f),it(f,m)}}}break;case"textarea":Qd(s,d);break;case"select":r=d.value,r!=null&&zs(s,!!d.multiple,r,!1)}},ru=Sc,ou=ms;var xy={usingClientEntryPoint:!1,Events:[Wi,qs,co,su,iu,Sc]},nr={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:nr.bundleType,version:nr.version,rendererPackageName:nr.rendererPackageName,rendererConfig:nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=du(s),s===null?null:s.stateNode},findFiberByHostInstance:nr.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{Ur=Ko.inject(vy),nn=Ko}catch{}}return _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy,_t.createPortal=function(s,r){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dc(r))throw Error(n(200));return py(s,r,null,d)},_t.createRoot=function(s,r){if(!Dc(s))throw Error(n(299));var d=!1,f="",m=If;return r!=null&&(r.unstable_strictMode===!0&&(d=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=Tc(s,1,!1,null,null,d,!1,f,m),s[mn]=r.current,Fi(s.nodeType===8?s.parentNode:s),new Mc(r)},_t.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var r=s._reactInternals;if(r===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=du(r),s=s===null?null:s.stateNode,s},_t.flushSync=function(s){return ms(s)},_t.hydrate=function(s,r,d){if(!Yo(r))throw Error(n(200));return qo(null,s,r,!0,d)},_t.hydrateRoot=function(s,r,d){if(!Dc(s))throw Error(n(405));var f=d!=null&&d.hydratedSources||null,m=!1,x="",w=If;if(d!=null&&(d.unstable_strictMode===!0&&(m=!0),d.identifierPrefix!==void 0&&(x=d.identifierPrefix),d.onRecoverableError!==void 0&&(w=d.onRecoverableError)),r=Of(r,null,s,1,d??null,m,!1,x,w),s[mn]=r.current,Fi(s),f)for(s=0;s<f.length;s++)d=f[s],m=d._getVersion,m=m(d._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[d,m]:r.mutableSourceEagerHydrationData.push(d,m);return new Vo(r)},_t.render=function(s,r,d){if(!Yo(r))throw Error(n(200));return qo(null,s,r,!1,d)},_t.unmountComponentAtNode=function(s){if(!Yo(s))throw Error(n(40));return s._reactRootContainer?(ms(function(){qo(null,null,s,!1,function(){s._reactRootContainer=null,s[mn]=null})}),!0):!1},_t.unstable_batchedUpdates=Sc,_t.unstable_renderSubtreeIntoContainer=function(s,r,d,f){if(!Yo(d))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return qo(s,r,d,!1,f)},_t.version="18.3.1-next-f1338f8080-20240426",_t}var qf;function Wm(){if(qf)return zc.exports;qf=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),zc.exports=Py(),zc.exports}var Kf;function Ry(){if(Kf)return Xo;Kf=1;var t=Wm();return Xo.createRoot=t.createRoot,Xo.hydrateRoot=t.hydrateRoot,Xo}var Ty=Ry();const Ay=Bm(Ty);Wm();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jr(){return jr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},jr.apply(this,arguments)}var Gn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gn||(Gn={}));const Xf="popstate";function My(t){t===void 0&&(t={});function e(i,o){let{pathname:a,search:c,hash:u}=i.location;return od("",{pathname:a,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:ya(o)}return Ly(e,n,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Sd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Dy(){return Math.random().toString(36).substr(2,8)}function Qf(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,i){return n===void 0&&(n=null),jr({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?mi(e):e,{state:n,key:e&&e.key||i||Dy()})}function ya(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Ly(t,e,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,u=Gn.Pop,h=null,p=g();p==null&&(p=0,c.replaceState(jr({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function v(){u=Gn.Pop;let j=g(),S=j==null?null:j-p;p=j,h&&h({action:u,location:k.location,delta:S})}function y(j,S){u=Gn.Push;let N=od(k.location,j,S);p=g()+1;let T=Qf(N,p),A=k.createHref(N);try{c.pushState(T,"",A)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(A)}a&&h&&h({action:u,location:k.location,delta:1})}function b(j,S){u=Gn.Replace;let N=od(k.location,j,S);p=g();let T=Qf(N,p),A=k.createHref(N);c.replaceState(T,"",A),a&&h&&h({action:u,location:k.location,delta:0})}function _(j){let S=o.location.origin!=="null"?o.location.origin:o.location.href,N=typeof j=="string"?j:ya(j);return N=N.replace(/ $/,"%20"),Ke(S,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,S)}let k={get action(){return u},get location(){return t(o,c)},listen(j){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Xf,v),h=j,()=>{o.removeEventListener(Xf,v),h=null}},createHref(j){return e(o,j)},createURL:_,encodeLocation(j){let S=_(j);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:y,replace:b,go(j){return c.go(j)}};return k}var Gf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gf||(Gf={}));function Oy(t,e,n){return n===void 0&&(n="/"),zy(t,e,n)}function zy(t,e,n,i){let o=typeof e=="string"?mi(e):e,a=Nd(o.pathname||"/",n);if(a==null)return null;let c=$m(t);Iy(c);let u=null;for(let h=0;u==null&&h<c.length;++h){let p=Qy(a);u=qy(c[h],p)}return u}function $m(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(a,c,u)=>{let h={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};h.relativePath.startsWith("/")&&(Ke(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let p=ts([i,h.relativePath]),g=n.concat(h);a.children&&a.children.length>0&&(Ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),$m(a.children,e,g,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:Vy(p,a.index),routesMeta:g})};return t.forEach((a,c)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,c);else for(let h of Um(a.path))o(a,c,h)}),e}function Um(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=Um(i.join("/")),u=[];return u.push(...c.map(h=>h===""?a:[a,h].join("/"))),o&&u.push(...c),u.map(h=>t.startsWith("/")&&h===""?"/":h)}function Iy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Yy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Fy=/^:[\w-]+$/,By=3,Hy=2,Wy=1,$y=10,Uy=-2,Jf=t=>t==="*";function Vy(t,e){let n=t.split("/"),i=n.length;return n.some(Jf)&&(i+=Uy),e&&(i+=Hy),n.filter(o=>!Jf(o)).reduce((o,a)=>o+(Fy.test(a)?By:a===""?Wy:$y),i)}function Yy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function qy(t,e,n){let{routesMeta:i}=t,o={},a="/",c=[];for(let u=0;u<i.length;++u){let h=i[u],p=u===i.length-1,g=a==="/"?e:e.slice(a.length)||"/",v=Ky({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),y=h.route;if(!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:ts([a,v.pathname]),pathnameBase:t0(ts([a,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(a=ts([a,v.pathnameBase]))}return c}function Ky(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Xy(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((p,g,v)=>{let{paramName:y,isOptional:b}=g;if(y==="*"){let k=u[v]||"";c=a.slice(0,a.length-k.length).replace(/(.)\/+$/,"$1")}const _=u[v];return b&&!_?p[y]=void 0:p[y]=(_||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:c,pattern:t}}function Xy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Sd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,h)=>(i.push({paramName:u,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Qy(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Sd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jy=t=>Gy.test(t);function Zy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?mi(t):t,a;if(n)if(Jy(n))a=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),Sd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+n))}n.startsWith("/")?a=Zf(n.substring(1),"/"):a=Zf(n,e)}else a=e;return{pathname:a,search:n0(i),hash:s0(o)}}function Zf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vm(t,e){let n=e0(t);return e?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Ym(t,e,n,i){i===void 0&&(i=!1);let o;typeof t=="string"?o=mi(t):(o=jr({},t),Ke(!o.pathname||!o.pathname.includes("?"),Bc("?","pathname","search",o)),Ke(!o.pathname||!o.pathname.includes("#"),Bc("#","pathname","hash",o)),Ke(!o.search||!o.search.includes("#"),Bc("#","search","hash",o)));let a=t===""||o.pathname==="",c=a?"/":o.pathname,u;if(c==null)u=n;else{let v=e.length-1;if(!i&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;o.pathname=y.join("/")}u=v>=0?e[v]:"/"}let h=Zy(o,u),p=c&&c!=="/"&&c.endsWith("/"),g=(a||c===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}const ts=t=>t.join("/").replace(/\/\/+/g,"/"),t0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),n0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,s0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function i0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qm=["post","put","patch","delete"];new Set(qm);const r0=["get",...qm];new Set(r0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wr(){return wr=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wr.apply(this,arguments)}const Cd=R.createContext(null),o0=R.createContext(null),Ls=R.createContext(null),Ta=R.createContext(null),is=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Km=R.createContext(null);function a0(t,e){let{relative:n}=e===void 0?{}:e;Tr()||Ke(!1);let{basename:i,navigator:o}=R.useContext(Ls),{hash:a,pathname:c,search:u}=Gm(t,{relative:n}),h=c;return i!=="/"&&(h=c==="/"?i:ts([i,c])),o.createHref({pathname:h,search:u,hash:a})}function Tr(){return R.useContext(Ta)!=null}function Aa(){return Tr()||Ke(!1),R.useContext(Ta).location}function Xm(t){R.useContext(Ls).static||R.useLayoutEffect(t)}function Ar(){let{isDataRoute:t}=R.useContext(is);return t?b0():l0()}function l0(){Tr()||Ke(!1);let t=R.useContext(Cd),{basename:e,future:n,navigator:i}=R.useContext(Ls),{matches:o}=R.useContext(is),{pathname:a}=Aa(),c=JSON.stringify(Vm(o,n.v7_relativeSplatPath)),u=R.useRef(!1);return Xm(()=>{u.current=!0}),R.useCallback(function(p,g){if(g===void 0&&(g={}),!u.current)return;if(typeof p=="number"){i.go(p);return}let v=Ym(p,JSON.parse(c),a,g.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ts([e,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[e,i,c,a,t])}function Qm(){let{matches:t}=R.useContext(is),e=t[t.length-1];return e?e.params:{}}function Gm(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=R.useContext(Ls),{matches:o}=R.useContext(is),{pathname:a}=Aa(),c=JSON.stringify(Vm(o,i.v7_relativeSplatPath));return R.useMemo(()=>Ym(t,JSON.parse(c),a,n==="path"),[t,c,a,n])}function c0(t,e){return d0(t,e)}function d0(t,e,n,i){Tr()||Ke(!1);let{navigator:o}=R.useContext(Ls),{matches:a}=R.useContext(is),c=a[a.length-1],u=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let p=Aa(),g;if(e){var v;let j=typeof e=="string"?mi(e):e;h==="/"||(v=j.pathname)!=null&&v.startsWith(h)||Ke(!1),g=j}else g=p;let y=g.pathname||"/",b=y;if(h!=="/"){let j=h.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(j.length).join("/")}let _=Oy(t,{pathname:b}),k=m0(_&&_.map(j=>Object.assign({},j,{params:Object.assign({},u,j.params),pathname:ts([h,o.encodeLocation?o.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?h:ts([h,o.encodeLocation?o.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),a,n,i);return e&&k?R.createElement(Ta.Provider,{value:{location:wr({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Gn.Pop}},k):k}function u0(){let t=y0(),e=i0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:o},n):null,null)}const h0=R.createElement(u0,null);class f0 extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(is.Provider,{value:this.props.routeContext},R.createElement(Km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function p0(t){let{routeContext:e,match:n,children:i}=t,o=R.useContext(Cd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(is.Provider,{value:e},i)}function m0(t,e,n,i){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var a;if(!n)return null;if(n.errors)t=n.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let c=t,u=(o=n)==null?void 0:o.errors;if(u!=null){let g=c.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);g>=0||Ke(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,p=-1;if(n&&i&&i.v7_partialHydration)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:y,errors:b}=n,_=v.route.loader&&y[v.route.id]===void 0&&(!b||b[v.route.id]===void 0);if(v.route.lazy||_){h=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,v,y)=>{let b,_=!1,k=null,j=null;n&&(b=u&&v.route.id?u[v.route.id]:void 0,k=v.route.errorElement||h0,h&&(p<0&&y===0?(j0("route-fallback"),_=!0,j=null):p===y&&(_=!0,j=v.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,y+1)),N=()=>{let T;return b?T=k:_?T=j:v.route.Component?T=R.createElement(v.route.Component,null):v.route.element?T=v.route.element:T=g,R.createElement(p0,{match:v,routeContext:{outlet:g,matches:S,isDataRoute:n!=null},children:T})};return n&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?R.createElement(f0,{location:n.location,revalidation:n.revalidation,component:k,error:b,children:N(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):N()},null)}var Jm=(function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t})(Jm||{}),Zm=(function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t})(Zm||{});function g0(t){let e=R.useContext(Cd);return e||Ke(!1),e}function x0(t){let e=R.useContext(o0);return e||Ke(!1),e}function v0(t){let e=R.useContext(is);return e||Ke(!1),e}function eg(t){let e=v0(),n=e.matches[e.matches.length-1];return n.route.id||Ke(!1),n.route.id}function y0(){var t;let e=R.useContext(Km),n=x0(),i=eg();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function b0(){let{router:t}=g0(Jm.UseNavigateStable),e=eg(Zm.UseNavigateStable),n=R.useRef(!1);return Xm(()=>{n.current=!0}),R.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,wr({fromRouteId:e},a)))},[t,e])}const ep={};function j0(t,e,n){ep[t]||(ep[t]=!0)}function w0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function st(t){Ke(!1)}function _0(t){let{basename:e="/",children:n=null,location:i,navigationType:o=Gn.Pop,navigator:a,static:c=!1,future:u}=t;Tr()&&Ke(!1);let h=e.replace(/^\/*/,"/"),p=R.useMemo(()=>({basename:h,navigator:a,static:c,future:wr({v7_relativeSplatPath:!1},u)}),[h,u,a,c]);typeof i=="string"&&(i=mi(i));let{pathname:g="/",search:v="",hash:y="",state:b=null,key:_="default"}=i,k=R.useMemo(()=>{let j=Nd(g,h);return j==null?null:{location:{pathname:j,search:v,hash:y,state:b,key:_},navigationType:o}},[h,g,v,y,b,_,o]);return k==null?null:R.createElement(Ls.Provider,{value:p},R.createElement(Ta.Provider,{children:n,value:k}))}function k0(t){let{children:e,location:n}=t;return c0(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(i,o)=>{if(!R.isValidElement(i))return;let a=[...e,o];if(i.type===R.Fragment){n.push.apply(n,ad(i.props.children,a));return}i.type!==st&&Ke(!1),!i.props.index||!i.props.children||Ke(!1);let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=ad(i.props.children,a)),n.push(c)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ld(){return ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ld.apply(this,arguments)}function S0(t,e){if(t==null)return{};var n={},i=Object.keys(t),o,a;for(a=0;a<i.length;a++)o=i[a],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function N0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function C0(t,e){return t.button===0&&(!e||e==="_self")&&!N0(t)}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],P0="6";try{window.__reactRouterVersion=P0}catch{}const R0="startTransition",tp=Ny[R0];function T0(t){let{basename:e,children:n,future:i,window:o}=t,a=R.useRef();a.current==null&&(a.current=My({window:o,v5Compat:!0}));let c=a.current,[u,h]=R.useState({action:c.action,location:c.location}),{v7_startTransition:p}=i||{},g=R.useCallback(v=>{p&&tp?tp(()=>h(v)):h(v)},[h,p]);return R.useLayoutEffect(()=>c.listen(g),[c,g]),R.useEffect(()=>w0(i),[i]),R.createElement(_0,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:c,future:i})}const A0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ct=R.forwardRef(function(e,n){let{onClick:i,relative:o,reloadDocument:a,replace:c,state:u,target:h,to:p,preventScrollReset:g,viewTransition:v}=e,y=S0(e,E0),{basename:b}=R.useContext(Ls),_,k=!1;if(typeof p=="string"&&M0.test(p)&&(_=p,A0))try{let T=new URL(window.location.href),A=p.startsWith("//")?new URL(T.protocol+p):new URL(p),E=Nd(A.pathname,b);A.origin===T.origin&&E!=null?p=E+A.search+A.hash:k=!0}catch{}let j=a0(p,{relative:o}),S=D0(p,{replace:c,state:u,target:h,preventScrollReset:g,relative:o,viewTransition:v});function N(T){i&&i(T),T.defaultPrevented||S(T)}return R.createElement("a",ld({},y,{href:_||j,onClick:k||a?i:N,ref:n,target:h}))});var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var sp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sp||(sp={}));function D0(t,e){let{target:n,replace:i,state:o,preventScrollReset:a,relative:c,viewTransition:u}=e===void 0?{}:e,h=Ar(),p=Aa(),g=Gm(t,{relative:c});return R.useCallback(v=>{if(C0(v,n)){v.preventDefault();let y=i!==void 0?i:ya(p)===ya(g);h(t,{replace:y,state:o,preventScrollReset:a,relative:c,viewTransition:u})}},[p,h,g,i,o,n,t,a,c,u])}const L0={app:{title:"WinLogAnalyzer 安全分析平台"},nav:{dashboard:"仪表盘",events:"事件",alerts:"告警",timeline:"时间线",collect:"日志采集",analyze:"安全分析",live:"实时监控",persistence:"持久化检测",reports:"报告",forensics:"取证",systemInfo:"系统信息",rules:"规则",metrics:"指标",settings:"设置"},live:{title:"实时事件监控",connected:"已连接",disconnected:"已断开",connect:"连接",disconnect:"断开",clear:"清除",allLevels:"全部级别",waitingForEvents:"等待事件...",clickToStart:"点击连接开始监控"},dashboard:{title:"安全仪表盘",totalAlerts:"告警总数",critical:"严重",high:"高危",medium:"中危",low:"低危",recentAlerts:"最近告警",viewAlerts:"查看告警详情",eventTrend:"事件趋势",last24Hours:"最近 24 小时",topAlertTypes:"Top 5 告警类型",bySeverity:"按严重级别",collectionStatus:"数据采集状态",totalEvents:"事件总数",dataSize:"数据大小",lastImport:"最后导入",sources:"数据来源",clickToView:"点击查看详情",viewAll:"查看全部",totalAlertsDesc:"条告警记录",noAlerts:"暂无告警，一切正常",events:"事件",alerts:"告警",noData:"暂无数据"},events:{title:"事件查看器",search:"搜索",searchPlaceholder:"输入关键词搜索...",startTime:"开始时间",endTime:"结束时间",clearSearch:"清除搜索",export:"导出",exportCsv:"导出 CSV",exportExcel:"导出 Excel",found:"找到 {count} 条事件",queryTime:"查询时间: {time}ms",loading:"加载中...",id:"ID",timestamp:"时间戳",eventId:"事件ID",level:"级别",source:"来源",message:"消息",previous:"上一页",next:"下一页",page:"第 {page} 页，共 {total} 页"},alerts:{title:"告警管理",pageDesc:"管理和分析安全告警",allSeverities:"全部级别",severity:"级别",rule:"规则",message:"消息",count:"次数",status:"状态",actions:"操作",resolved:"已解决",active:"进行中",resolve:"解决",runAnalysis:"运行分析",analyzeSelected:"分析选中",analysisDesc:"选择分析器对告警进行深入分析",selectAnalyzer:"选择分析器",analysisSummary:"分析概要",analysisTarget:"分析目标",analysisScope:"分析范围",selectedAlerts:"条选中告警",allAlerts:"全部告警",analyzing:"分析中...",startAnalysis:"开始分析",resolveSelected:"批量解决",total:"总计",noAlerts:"暂无告警"},timeline:{title:"事件与告警时间线",pageDesc:"统一查看安全事件和告警的时间线",events:"事件",alerts:"告警",all:"全部",eventsOnly:"仅事件",alertsOnly:"仅告警",delete:"删除",confirmDelete:"确认删除此告警?",runAnalysis:"运行分析",totalEvents:"事件总数",totalAlerts:"告警总数",alertRatio:"告警占比",last1h:"最近1小时",last6h:"最近6小时",last24h:"最近24小时",last7d:"最近7天",last30d:"最近30天",noEntries:"暂无时间线数据",viewDetails:"查看详情"},collect:{title:"数据采集",oneClickCollection:"一键采集",oneClickDesc:"自动发现并采集 Windows 系统上的所有日志源",importLogs:"导入日志",importDesc:"导入之前采集的日志或外部事件文件",windowsEventLogs:"Windows 事件日志",systemInfo:"系统信息 (需要管理员权限)",prefetch:"预读取文件",prefetchDesc:"分析程序执行历史",shimcache:"ShimCache",shimcacheDesc:"应用程序兼容性缓存",amcache:"Amcache",amcacheDesc:"程序执行痕迹",userassist:"UserAssist",userassistDesc:"用户活动统计",registry:"注册表",registryDesc:"注册表持久化点",scheduledTasks:"计划任务",tasksDesc:"Windows 计划任务",compressOutput:"压缩输出 (ZIP)",calculateHash:"计算 SHA256 哈希",startCollection:"开始采集",importing:"导入中...",importLogsBtn:"导入日志",status:"采集状态",cliReference:"CLI 参考",cliNote:"完整功能请使用 CLI 命令:",collectionNote:"注意: 一键采集可通过 CLI: winalog collect",importNote:"注意: 导入日志请使用 CLI: winalog import <path>",logSources:"日志源",excludedLogs:"排除的日志",commonExcludes:"常用排除",customExclude:"自定义排除 (逗号分隔)",customExcludePlaceholder:"如: MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"自定义路径",customPathsLabel:"自定义路径 (可选)",customPathsPlaceholder:`每行一个路径,支持通配符
e.g. C:\\Logs\\*.evtx
留空则使用默认日志源`,performanceSettings:"并发设置",threads:"并行工作线程数:",threadHint:"SSD建议4线程, HDD建议2线程",additionalArtifacts:"额外采集项",starting:"准备开始...",collecting:"采集中",sources:"已选日志源",excluding:"排除",completed:"采集完成",importDone:"导入完成"},analyze:{title:"安全分析",pageDesc:"选择安全分析器检测潜在威胁",selectAnalyzer:"选择分析器",bruteForce:"暴力破解检测",bruteForceDesc:"检测暴力破解登录攻击，识别异常登录尝试",login:"登录分析器",loginDesc:"分析登录活动模式，检测异常登录行为",kerberos:"Kerberos 分析器",kerberosDesc:"分析 Kerberos 票据活动，检测 Golden Ticket 攻击",powershell:"PowerShell 分析器",powershellDesc:"分析 PowerShell 命令活动，检测脚本攻击",lateralMovement:"横向移动检测",lateralMovementDesc:"检测横向移动攻击，如 Pass-the-Hash",dataExfil:"数据外传分析",dataExfilDesc:"分析异常数据外传行为",persistence:"持久化检测",persistenceDesc:"检测可疑的持久化机制",privilegeEscalation:"权限提升分析",privilegeEscalationDesc:"检测权限提升攻击",recommended:"推荐",timeWindow:"时间窗口",runAnalyzer:"运行分析器",running:"运行中...",results:"分析结果",resultsSummary:"分析了最近时间段内的安全事件",findings:"发现",findingsList:"详细发现",type:"类型",severity:"严重级别",score:"风险评分",configuration:"分析配置",selectedAnalyzer:"当前分析器",quickActions:"快速操作",viewTimeline:"查看时间线",viewAlerts:"查看告警",detectPersistence:"持久化检测",aboutAnalyzers:"关于分析器"},persistence:{title:"持久化机制检测",rescan:"重新扫描",total:"检测总数",critical:"严重",high:"高危",medium:"中危",low:"低危",bySeverity:"按严重级别分布",byCategory:"按类别分布",allSeverities:"全部严重级别",allCategories:"全部类别",technique:"技术",category:"类别",itemTitle:"标题",evidence:"证据",falsePositiveRisk:"误报风险",recommendedAction:"建议操作",basicInfo:"基本信息",mitreAttck:"MITRE ATT&CK",time:"时间",description:"描述",lowRisk:"低风险",mediumRisk:"中风险",highRisk:"高风险",unknown:"未知"},reports:{title:"报告",generateReport:"生成安全报告",generateDesc:"生成多种格式的综合安全分析报告",reportType:"报告类型",securitySummary:"安全摘要",alertAnalysis:"告警分析",eventTimeline:"事件时间线",complianceReport:"合规报告",format:"格式",dateRange:"日期范围",generate:"生成报告",generating:"生成中...",recentReports:"最近报告",noReports:"暂无报告"},forensics:{title:"取证",evidenceCollection:"证据采集",evidenceCollectionDesc:"从系统采集取证证据，包括内存、注册表和事件日志",eventLogs:"事件日志",registry:"注册表",memoryDump:"内存转储",prefetch:"预读取",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"开始采集",hashVerification:"哈希验证",hashVerificationDesc:"通过比较 SHA256 哈希验证文件完整性",enterHash:"输入 SHA256 哈希进行验证...",verify:"验证",hashMatch:"哈希匹配!",hashNoMatch:"哈希不匹配",chainOfCustody:"证据保管链",chainOfCustodyDesc:"证据保管链跟踪将显示在此处",noEvidence:"暂无证据"},systemInfo:{title:"系统信息",operatingSystem:"操作系统",hostname:"主机名",domain:"域",osName:"操作系统名称",osVersion:"操作系统版本",architecture:"架构",timezone:"时区",admin:"管理员",yes:"是",no:"否",localTime:"本地时间",runtimeInfo:"运行时信息",goVersion:"Go 版本",cpuCount:"CPU 核心数",uptime:"运行时间",collectionStatus:"采集状态",lastCollection:"上次系统信息采集",never:"从未"},rules:{title:"规则管理",alertRules:"告警规则 ({enabled}/{total} 已启用)",alertRulesDesc:"配置和管理安全事件检测的告警规则",correlationRules:"关联规则",correlationRulesDesc:"定义跨多个源关联事件的规则",name:"名称",severity:"严重级别",score:"评分",description:"描述",mitre:"MITRE",status:"状态",actions:"操作",enabled:"已启用",disabled:"已禁用",edit:"编辑",addCorrelationRule:"添加关联规则"},metrics:{title:"Prometheus 指标",realTimePreview:"实时预览",totalEvents:"事件总数",totalAlerts:"告警总数",eventsPerMin:"事件/分钟",alertsPerHour:"告警/小时",memory:"内存 (MB)",prometheusFormat:"Prometheus 格式"},settings:{title:"设置",database:"数据库",databasePath:"数据库路径",eventRetention:"事件保留天数",maxEvents:"最大事件数",alerts:"告警",enableAlerting:"启用告警",collection:"采集",enableLiveCollection:"启用实时采集",logging:"日志",logLevel:"日志级别",debug:"调试",info:"信息",warn:"警告",error:"错误",save:"保存设置",saved:"设置已保存"},common:{loading:"加载中...",error:"错误",success:"成功",cancel:"取消",confirm:"确认",save:"保存",delete:"删除",edit:"编辑",close:"关闭",back:"返回",noData:"暂无数据"}},O0={app:{title:"WinLogAnalyzer Security Analytics"},nav:{dashboard:"Dashboard",events:"Events",alerts:"Alerts",timeline:"Timeline",collect:"Collect",analyze:"Analyze",live:"Live",persistence:"Persistence",reports:"Reports",forensics:"Forensics",systemInfo:"System Info",rules:"Rules",metrics:"Metrics",settings:"Settings"},live:{title:"Live Event Monitoring",connected:"Connected",disconnected:"Disconnected",connect:"Connect",disconnect:"Disconnect",clear:"Clear",allLevels:"All Levels",waitingForEvents:"Waiting for events...",clickToStart:"Click Connect to start monitoring"},dashboard:{title:"Security Dashboard",totalAlerts:"Total Alerts",critical:"Critical",high:"High",medium:"Medium",low:"Low",recentAlerts:"Recent Alerts",viewAlerts:"View Alerts",eventTrend:"Event Trend",last24Hours:"Last 24 Hours",topAlertTypes:"Top 5 Alert Types",bySeverity:"By Severity",collectionStatus:"Collection Status",totalEvents:"Total Events",dataSize:"Data Size",lastImport:"Last Import",sources:"Sources",clickToView:"Click to view details",viewAll:"View All",totalAlertsDesc:"alert records",noAlerts:"No alerts, all systems normal",events:"Events",alerts:"Alerts",noData:"No data available"},events:{title:"Event Viewer",search:"Search",searchPlaceholder:"Search keywords...",startTime:"Start time",endTime:"End time",clearSearch:"Clear Search",export:"Export",exportCsv:"Export CSV",exportExcel:"Export Excel",found:"Found {count} events",queryTime:"Query time: {time}ms",loading:"Loading...",id:"ID",timestamp:"Timestamp",eventId:"Event ID",level:"Level",source:"Source",message:"Message",previous:"Previous",next:"Next",page:"Page {page} of {total}"},alerts:{title:"Alert Management",pageDesc:"Manage and analyze security alerts",allSeverities:"All Severities",severity:"Severity",rule:"Rule",message:"Message",count:"Count",status:"Status",actions:"Actions",resolved:"Resolved",active:"Active",resolve:"Resolve",runAnalysis:"Run Analysis",analyzeSelected:"Analyze Selected",analysisDesc:"Select an analyzer for in-depth analysis of alerts",selectAnalyzer:"Select Analyzer",analysisSummary:"Analysis Summary",analysisTarget:"Analysis Target",analysisScope:"Analysis Scope",selectedAlerts:"selected alerts",allAlerts:"All Alerts",analyzing:"Analyzing...",startAnalysis:"Start Analysis",resolveSelected:"Resolve Selected",total:"Total",noAlerts:"No alerts found"},timeline:{title:"Event & Alert Timeline",pageDesc:"Unified timeline view of security events and alerts",events:"Events",alerts:"Alerts",all:"All",eventsOnly:"Events Only",alertsOnly:"Alerts Only",delete:"Delete",confirmDelete:"Confirm delete this alert?",runAnalysis:"Run Analysis",totalEvents:"Total Events",totalAlerts:"Total Alerts",alertRatio:"Alert Ratio",last1h:"Last 1 hour",last6h:"Last 6 hours",last24h:"Last 24 hours",last7d:"Last 7 days",last30d:"Last 30 days",noEntries:"No timeline entries",viewDetails:"View Details"},collect:{title:"Data Collection",oneClickCollection:"One-Click Collection",oneClickDesc:"Automatically discover and collect all log sources from Windows system.",importLogs:"Import Logs",importDesc:"Import previously collected logs or external event files.",windowsEventLogs:"Windows Event Logs",systemInfo:"System Info (Requires Admin)",prefetch:"Prefetch Files",prefetchDesc:"Analyze program execution history",shimcache:"ShimCache",shimcacheDesc:"Application compatibility cache",amcache:"Amcache",amcacheDesc:"Program execution traces",userassist:"UserAssist",userassistDesc:"User activity statistics",registry:"Registry",registryDesc:"Registry persistence points",scheduledTasks:"Scheduled Tasks",tasksDesc:"Windows scheduled tasks",compressOutput:"Compress output (ZIP)",calculateHash:"Calculate SHA256 hash",startCollection:"Start Collection",importing:"Importing...",importLogsBtn:"Import Logs",status:"Collection Status",cliReference:"CLI Reference",cliNote:"For full functionality, use the CLI commands:",collectionNote:"Note: One-click collection is available via CLI: winalog collect",importNote:"Note: Import logs via CLI: winalog import <path>",logSources:"Log Sources",excludedLogs:"Excluded Logs",commonExcludes:"Common Excludes",customExclude:"Custom Exclude (comma-separated)",customExcludePlaceholder:"e.g. MSW-AppLocker-EXE, MSW-WindowsUpdate",customPaths:"Custom Paths",customPathsLabel:"Custom Paths (Optional)",customPathsPlaceholder:`One path per line, supports wildcards
e.g. C:\\Logs\\*.evtx
Leave empty to use default sources`,performanceSettings:"Performance Settings",threads:"Parallel Worker Threads:",threadHint:"SSD: 4 threads, HDD: 2 threads recommended",additionalArtifacts:"Additional Artifacts",starting:"Starting...",collecting:"Collecting",sources:"Selected Sources",excluding:"Excluding",completed:"Collection completed",importDone:"Import completed"},analyze:{title:"Security Analysis",pageDesc:"Select security analyzers to detect potential threats",selectAnalyzer:"Select Analyzer",bruteForce:"Brute Force Detection",bruteForceDesc:"Detect brute force login attacks, identify abnormal login attempts",login:"Login Analyzer",loginDesc:"Analyze login activity patterns, detect abnormal login behaviors",kerberos:"Kerberos Analyzer",kerberosDesc:"Analyze Kerberos ticket activity, detect Golden Ticket attacks",powershell:"PowerShell Analyzer",powershellDesc:"Analyze PowerShell command activity, detect script-based attacks",lateralMovement:"Lateral Movement Detection",lateralMovementDesc:"Detect lateral movement attacks like Pass-the-Hash",dataExfil:"Data Exfiltration Analysis",dataExfilDesc:"Analyze abnormal data exfiltration behaviors",persistence:"Persistence Detection",persistenceDesc:"Detect suspicious persistence mechanisms",privilegeEscalation:"Privilege Escalation Analysis",privilegeEscalationDesc:"Detect privilege escalation attacks",recommended:"Recommended",timeWindow:"Time Window",runAnalyzer:"Run Analyzer",running:"Running...",results:"Analysis Results",resultsSummary:"Analyzed security events in the recent time period",findings:"Findings",findingsList:"Detailed Findings",type:"Type",severity:"Severity",score:"Risk Score",configuration:"Analysis Configuration",selectedAnalyzer:"Current Analyzer",quickActions:"Quick Actions",viewTimeline:"View Timeline",viewAlerts:"View Alerts",detectPersistence:"Detect Persistence",aboutAnalyzers:"About Analyzers"},persistence:{title:"Persistence Detection",rescan:"Rescan",total:"Total Detections",critical:"Critical",high:"High",medium:"Medium",low:"Low",bySeverity:"By Severity",byCategory:"By Category",allSeverities:"All Severities",allCategories:"All Categories",technique:"Technique",category:"Category",itemTitle:"Title",evidence:"Evidence",falsePositiveRisk:"False Positive Risk",recommendedAction:"Recommended Action",basicInfo:"Basic Info",mitreAttck:"MITRE ATT&CK",time:"Time",description:"Description",lowRisk:"Low",mediumRisk:"Medium",highRisk:"High",unknown:"Unknown"},reports:{title:"Reports",generateReport:"Generate Security Report",generateDesc:"Generate comprehensive security analysis reports in various formats.",reportType:"Report Type",securitySummary:"Security Summary",alertAnalysis:"Alert Analysis",eventTimeline:"Event Timeline",complianceReport:"Compliance Report",format:"Format",dateRange:"Date Range",generate:"Generate Report",generating:"Generating...",recentReports:"Recent Reports",noReports:"No reports generated yet."},forensics:{title:"Forensics",evidenceCollection:"Evidence Collection",evidenceCollectionDesc:"Collect forensic evidence from the system including memory, registry, and event logs.",eventLogs:"Event Logs",registry:"Registry",memoryDump:"Memory Dump",prefetch:"Prefetch",shimcache:"ShimCache",userassist:"UserAssist",startCollection:"Start Collection",hashVerification:"Hash Verification",hashVerificationDesc:"Verify file integrity by comparing SHA256 hashes.",enterHash:"Enter SHA256 hash to verify...",verify:"Verify",hashMatch:"Hash matches!",hashNoMatch:"Hash does not match",chainOfCustody:"Chain of Custody",chainOfCustodyDesc:"Evidence chain of custody tracking will be displayed here.",noEvidence:"No evidence collected yet."},systemInfo:{title:"System Information",operatingSystem:"Operating System",hostname:"Hostname",domain:"Domain",osName:"OS Name",osVersion:"OS Version",architecture:"Architecture",timezone:"Timezone",admin:"Admin",yes:"Yes",no:"No",localTime:"Local Time",runtimeInfo:"Runtime Information",goVersion:"Go Version",cpuCount:"CPU Count",uptime:"Uptime",collectionStatus:"Collection Status",lastCollection:"Last system information collection",never:"Never"},rules:{title:"Rule Management",alertRules:"Alert Rules ({enabled}/{total} enabled)",alertRulesDesc:"Configure and manage alert rules for security event detection.",correlationRules:"Correlation Rules",correlationRulesDesc:"Define rules to correlate events across multiple sources.",name:"Name",severity:"Severity",score:"Score",description:"Description",mitre:"MITRE",status:"Status",actions:"Actions",enabled:"Enabled",disabled:"Disabled",edit:"Edit",addCorrelationRule:"Add Correlation Rule"},metrics:{title:"Prometheus Metrics",realTimePreview:"Real-time Preview",totalEvents:"Total Events",totalAlerts:"Total Alerts",eventsPerMin:"Events/min",alertsPerHour:"Alerts/hr",memory:"Memory (MB)",prometheusFormat:"Prometheus Format"},settings:{title:"Settings",database:"Database",databasePath:"Database Path",eventRetention:"Event Retention (days)",maxEvents:"Max Events",alerts:"Alerts",enableAlerting:"Enable Alerting",collection:"Collection",enableLiveCollection:"Enable Live Collection",logging:"Logging",logLevel:"Log Level",debug:"Debug",info:"Info",warn:"Warn",error:"Error",save:"Save Settings",saved:"Settings saved"},common:{loading:"Loading...",error:"Error",success:"Success",cancel:"Cancel",confirm:"Confirm",save:"Save",delete:"Delete",edit:"Edit",close:"Close",back:"Back",noData:"No Data"}},z0={zh:L0,en:O0},tg=R.createContext(void 0);function I0(t,e){const n=e.split(".");let i=t;for(const o of n)if(i&&typeof i=="object"&&o in i)i=i[o];else return e;return typeof i=="string"?i:e}function F0({children:t}){const[e,n]=R.useState(()=>{const c=localStorage.getItem("locale");return c==="en"||c==="zh"?c:"zh"}),i=R.useCallback(c=>{n(c),localStorage.setItem("locale",c)},[]),o=R.useCallback(()=>{i(e==="zh"?"en":"zh")},[e,i]),a=R.useCallback((c,u)=>{let h=I0(z0[e],c);return u&&Object.entries(u).forEach(([p,g])=>{h=h.replace(new RegExp(`\\{${p}\\}`,"g"),String(g))}),h},[e]);return l.jsx(tg.Provider,{value:{locale:e,t:a,setLocale:i,toggleLocale:o},children:t})}function Dt(){const t=R.useContext(tg);if(!t)throw new Error("useI18n must be used within I18nProvider");return t}function B0(){const{locale:t,toggleLocale:e}=Dt();return l.jsx("button",{className:"lang-switcher",onClick:e,children:t==="zh"?"EN":"中"})}function ng(t,e){return function(){return t.apply(e,arguments)}}const{toString:H0}=Object.prototype,{getPrototypeOf:Ed}=Object,{iterator:Ma,toStringTag:sg}=Symbol,Da=(t=>e=>{const n=H0.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),en=t=>(t=t.toLowerCase(),e=>Da(e)===t),La=t=>e=>typeof e===t,{isArray:gi}=Array,hi=La("undefined");function Mr(t){return t!==null&&!hi(t)&&t.constructor!==null&&!hi(t.constructor)&&Nt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ig=en("ArrayBuffer");function W0(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ig(t.buffer),e}const $0=La("string"),Nt=La("function"),rg=La("number"),Dr=t=>t!==null&&typeof t=="object",U0=t=>t===!0||t===!1,ua=t=>{if(Da(t)!=="object")return!1;const e=Ed(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(sg in t)&&!(Ma in t)},V0=t=>{if(!Dr(t)||Mr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Y0=en("Date"),q0=en("File"),K0=t=>!!(t&&typeof t.uri<"u"),X0=t=>t&&typeof t.getParts<"u",Q0=en("Blob"),G0=en("FileList"),J0=t=>Dr(t)&&Nt(t.pipe);function Z0(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ip=Z0(),rp=typeof ip.FormData<"u"?ip.FormData:void 0,eb=t=>{let e;return t&&(rp&&t instanceof rp||Nt(t.append)&&((e=Da(t))==="formdata"||e==="object"&&Nt(t.toString)&&t.toString()==="[object FormData]"))},tb=en("URLSearchParams"),[nb,sb,ib,rb]=["ReadableStream","Request","Response","Headers"].map(en),ob=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,o;if(typeof t!="object"&&(t=[t]),gi(t))for(i=0,o=t.length;i<o;i++)e.call(null,t[i],i,t);else{if(Mr(t))return;const a=n?Object.getOwnPropertyNames(t):Object.keys(t),c=a.length;let u;for(i=0;i<c;i++)u=a[i],e.call(null,t[u],u,t)}}function og(t,e){if(Mr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,o;for(;i-- >0;)if(o=n[i],e===o.toLowerCase())return o;return null}const Cs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ag=t=>!hi(t)&&t!==Cs;function cd(){const{caseless:t,skipUndefined:e}=ag(this)&&this||{},n={},i=(o,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const c=t&&og(n,a)||a;ua(n[c])&&ua(o)?n[c]=cd(n[c],o):ua(o)?n[c]=cd({},o):gi(o)?n[c]=o.slice():(!e||!hi(o))&&(n[c]=o)};for(let o=0,a=arguments.length;o<a;o++)arguments[o]&&Lr(arguments[o],i);return n}const ab=(t,e,n,{allOwnKeys:i}={})=>(Lr(e,(o,a)=>{n&&Nt(o)?Object.defineProperty(t,a,{value:ng(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,a,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),lb=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),cb=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},db=(t,e,n,i)=>{let o,a,c;const u={};if(e=e||{},t==null)return e;do{for(o=Object.getOwnPropertyNames(t),a=o.length;a-- >0;)c=o[a],(!i||i(c,t,e))&&!u[c]&&(e[c]=t[c],u[c]=!0);t=n!==!1&&Ed(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ub=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},hb=t=>{if(!t)return null;if(gi(t))return t;let e=t.length;if(!rg(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},fb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ed(Uint8Array)),pb=(t,e)=>{const i=(t&&t[Ma]).call(t);let o;for(;(o=i.next())&&!o.done;){const a=o.value;e.call(t,a[0],a[1])}},mb=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},gb=en("HTMLFormElement"),xb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,o){return i.toUpperCase()+o}),op=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),vb=en("RegExp"),lg=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Lr(n,(o,a)=>{let c;(c=e(o,a,t))!==!1&&(i[a]=c||o)}),Object.defineProperties(t,i)},yb=t=>{lg(t,(e,n)=>{if(Nt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Nt(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bb=(t,e)=>{const n={},i=o=>{o.forEach(a=>{n[a]=!0})};return gi(t)?i(t):i(String(t).split(e)),n},jb=()=>{},wb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function _b(t){return!!(t&&Nt(t.append)&&t[sg]==="FormData"&&t[Ma])}const kb=t=>{const e=new Array(10),n=(i,o)=>{if(Dr(i)){if(e.indexOf(i)>=0)return;if(Mr(i))return i;if(!("toJSON"in i)){e[o]=i;const a=gi(i)?[]:{};return Lr(i,(c,u)=>{const h=n(c,o+1);!hi(h)&&(a[u]=h)}),e[o]=void 0,a}}return i};return n(t,0)},Sb=en("AsyncFunction"),Nb=t=>t&&(Dr(t)||Nt(t))&&Nt(t.then)&&Nt(t.catch),cg=((t,e)=>t?setImmediate:e?((n,i)=>(Cs.addEventListener("message",({source:o,data:a})=>{o===Cs&&a===n&&i.length&&i.shift()()},!1),o=>{i.push(o),Cs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Nt(Cs.postMessage)),Cb=typeof queueMicrotask<"u"?queueMicrotask.bind(Cs):typeof process<"u"&&process.nextTick||cg,Eb=t=>t!=null&&Nt(t[Ma]),H={isArray:gi,isArrayBuffer:ig,isBuffer:Mr,isFormData:eb,isArrayBufferView:W0,isString:$0,isNumber:rg,isBoolean:U0,isObject:Dr,isPlainObject:ua,isEmptyObject:V0,isReadableStream:nb,isRequest:sb,isResponse:ib,isHeaders:rb,isUndefined:hi,isDate:Y0,isFile:q0,isReactNativeBlob:K0,isReactNative:X0,isBlob:Q0,isRegExp:vb,isFunction:Nt,isStream:J0,isURLSearchParams:tb,isTypedArray:fb,isFileList:G0,forEach:Lr,merge:cd,extend:ab,trim:ob,stripBOM:lb,inherits:cb,toFlatObject:db,kindOf:Da,kindOfTest:en,endsWith:ub,toArray:hb,forEachEntry:pb,matchAll:mb,isHTMLForm:gb,hasOwnProperty:op,hasOwnProp:op,reduceDescriptors:lg,freezeMethods:yb,toObjectSet:bb,toCamelCase:xb,noop:jb,toFiniteNumber:wb,findKey:og,global:Cs,isContextDefined:ag,isSpecCompliantForm:_b,toJSONObject:kb,isAsyncFn:Sb,isThenable:Nb,setImmediate:cg,asap:Cb,isIterable:Eb};let be=class dg extends Error{static from(e,n,i,o,a,c){const u=new dg(e.message,n||e.code,i,o,a);return u.cause=e,u.name=e.name,e.status!=null&&u.status==null&&(u.status=e.status),c&&Object.assign(u,c),u}constructor(e,n,i,o,a){super(e),Object.defineProperty(this,"message",{value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),o&&(this.request=o),a&&(this.response=a,this.status=a.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}};be.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";be.ERR_BAD_OPTION="ERR_BAD_OPTION";be.ECONNABORTED="ECONNABORTED";be.ETIMEDOUT="ETIMEDOUT";be.ERR_NETWORK="ERR_NETWORK";be.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";be.ERR_DEPRECATED="ERR_DEPRECATED";be.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";be.ERR_BAD_REQUEST="ERR_BAD_REQUEST";be.ERR_CANCELED="ERR_CANCELED";be.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";be.ERR_INVALID_URL="ERR_INVALID_URL";const Pb=null;function dd(t){return H.isPlainObject(t)||H.isArray(t)}function ug(t){return H.endsWith(t,"[]")?t.slice(0,-2):t}function Hc(t,e,n){return t?t.concat(e).map(function(o,a){return o=ug(o),!n&&a?"["+o+"]":o}).join(n?".":""):e}function Rb(t){return H.isArray(t)&&!t.some(dd)}const Tb=H.toFlatObject(H,{},null,function(e){return/^is[A-Z]/.test(e)});function Oa(t,e,n){if(!H.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,j){return!H.isUndefined(j[k])});const i=n.metaTokens,o=n.visitor||g,a=n.dots,c=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(e);if(!H.isFunction(o))throw new TypeError("visitor must be a function");function p(_){if(_===null)return"";if(H.isDate(_))return _.toISOString();if(H.isBoolean(_))return _.toString();if(!h&&H.isBlob(_))throw new be("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(_)||H.isTypedArray(_)?h&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function g(_,k,j){let S=_;if(H.isReactNative(e)&&H.isReactNativeBlob(_))return e.append(Hc(j,k,a),p(_)),!1;if(_&&!j&&typeof _=="object"){if(H.endsWith(k,"{}"))k=i?k:k.slice(0,-2),_=JSON.stringify(_);else if(H.isArray(_)&&Rb(_)||(H.isFileList(_)||H.endsWith(k,"[]"))&&(S=H.toArray(_)))return k=ug(k),S.forEach(function(T,A){!(H.isUndefined(T)||T===null)&&e.append(c===!0?Hc([k],A,a):c===null?k:k+"[]",p(T))}),!1}return dd(_)?!0:(e.append(Hc(j,k,a),p(_)),!1)}const v=[],y=Object.assign(Tb,{defaultVisitor:g,convertValue:p,isVisitable:dd});function b(_,k){if(!H.isUndefined(_)){if(v.indexOf(_)!==-1)throw Error("Circular reference detected in "+k.join("."));v.push(_),H.forEach(_,function(S,N){(!(H.isUndefined(S)||S===null)&&o.call(e,S,H.isString(N)?N.trim():N,k,y))===!0&&b(S,k?k.concat(N):[N])}),v.pop()}}if(!H.isObject(t))throw new TypeError("data must be an object");return b(t),e}function ap(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Pd(t,e){this._pairs=[],t&&Oa(t,this,e)}const hg=Pd.prototype;hg.append=function(e,n){this._pairs.push([e,n])};hg.toString=function(e){const n=e?function(i){return e.call(this,i,ap)}:ap;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ab(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function fg(t,e,n){if(!e)return t;const i=n&&n.encode||Ab,o=H.isFunction(n)?{serialize:n}:n,a=o&&o.serialize;let c;if(a?c=a(e,o):c=H.isURLSearchParams(e)?e.toString():new Pd(e,o).toString(i),c){const u=t.indexOf("#");u!==-1&&(t=t.slice(0,u)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class lp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){H.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Rd={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Mb=typeof URLSearchParams<"u"?URLSearchParams:Pd,Db=typeof FormData<"u"?FormData:null,Lb=typeof Blob<"u"?Blob:null,Ob={isBrowser:!0,classes:{URLSearchParams:Mb,FormData:Db,Blob:Lb},protocols:["http","https","file","blob","url","data"]},Td=typeof window<"u"&&typeof document<"u",ud=typeof navigator=="object"&&navigator||void 0,zb=Td&&(!ud||["ReactNative","NativeScript","NS"].indexOf(ud.product)<0),Ib=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fb=Td&&window.location.href||"http://localhost",Bb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Td,hasStandardBrowserEnv:zb,hasStandardBrowserWebWorkerEnv:Ib,navigator:ud,origin:Fb},Symbol.toStringTag,{value:"Module"})),ut={...Bb,...Ob};function Hb(t,e){return Oa(t,new ut.classes.URLSearchParams,{visitor:function(n,i,o,a){return ut.isNode&&H.isBuffer(n)?(this.append(i,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...e})}function Wb(t){return H.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $b(t){const e={},n=Object.keys(t);let i;const o=n.length;let a;for(i=0;i<o;i++)a=n[i],e[a]=t[a];return e}function pg(t){function e(n,i,o,a){let c=n[a++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),h=a>=n.length;return c=!c&&H.isArray(o)?o.length:c,h?(H.hasOwnProp(o,c)?o[c]=[o[c],i]:o[c]=i,!u):((!o[c]||!H.isObject(o[c]))&&(o[c]=[]),e(n,i,o[c],a)&&H.isArray(o[c])&&(o[c]=$b(o[c])),!u)}if(H.isFormData(t)&&H.isFunction(t.entries)){const n={};return H.forEachEntry(t,(i,o)=>{e(Wb(i),o,n,0)}),n}return null}function Ub(t,e,n){if(H.isString(t))try{return(e||JSON.parse)(t),H.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Or={transitional:Rd,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",o=i.indexOf("application/json")>-1,a=H.isObject(e);if(a&&H.isHTMLForm(e)&&(e=new FormData(e)),H.isFormData(e))return o?JSON.stringify(pg(e)):e;if(H.isArrayBuffer(e)||H.isBuffer(e)||H.isStream(e)||H.isFile(e)||H.isBlob(e)||H.isReadableStream(e))return e;if(H.isArrayBufferView(e))return e.buffer;if(H.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let u;if(a){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Hb(e,this.formSerializer).toString();if((u=H.isFileList(e))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Oa(u?{"files[]":e}:e,h&&new h,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),Ub(e)):e}],transformResponse:[function(e){const n=this.transitional||Or.transitional,i=n&&n.forcedJSONParsing,o=this.responseType==="json";if(H.isResponse(e)||H.isReadableStream(e))return e;if(e&&H.isString(e)&&(i&&!this.responseType||o)){const c=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(e,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?be.from(u,be.ERR_BAD_RESPONSE,this,null,this.response):u}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ut.classes.FormData,Blob:ut.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],t=>{Or.headers[t]={}});const Vb=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yb=t=>{const e={};let n,i,o;return t&&t.split(`
`).forEach(function(c){o=c.indexOf(":"),n=c.substring(0,o).trim().toLowerCase(),i=c.substring(o+1).trim(),!(!n||e[n]&&Vb[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},cp=Symbol("internals"),qb=t=>!/[\r\n]/.test(t);function mg(t,e){if(!(t===!1||t==null)){if(H.isArray(t)){t.forEach(n=>mg(n,e));return}if(!qb(String(t)))throw new Error(`Invalid character in header content ["${e}"]`)}}function ir(t){return t&&String(t).trim().toLowerCase()}function Kb(t){let e=t.length;for(;e>0;){const n=t.charCodeAt(e-1);if(n!==10&&n!==13)break;e-=1}return e===t.length?t:t.slice(0,e)}function ha(t){return t===!1||t==null?t:H.isArray(t)?t.map(ha):Kb(String(t))}function Xb(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const Qb=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Wc(t,e,n,i,o){if(H.isFunction(i))return i.call(this,e,n);if(o&&(e=n),!!H.isString(e)){if(H.isString(i))return e.indexOf(i)!==-1;if(H.isRegExp(i))return i.test(e)}}function Gb(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function Jb(t,e){const n=H.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(o,a,c){return this[i].call(this,e,o,a,c)},configurable:!0})})}let Ct=class{constructor(e){e&&this.set(e)}set(e,n,i){const o=this;function a(u,h,p){const g=ir(h);if(!g)throw new Error("header name must be a non-empty string");const v=H.findKey(o,g);(!v||o[v]===void 0||p===!0||p===void 0&&o[v]!==!1)&&(mg(u,h),o[v||h]=ha(u))}const c=(u,h)=>H.forEach(u,(p,g)=>a(p,g,h));if(H.isPlainObject(e)||e instanceof this.constructor)c(e,n);else if(H.isString(e)&&(e=e.trim())&&!Qb(e))c(Yb(e),n);else if(H.isObject(e)&&H.isIterable(e)){let u={},h,p;for(const g of e){if(!H.isArray(g))throw TypeError("Object iterator must return a key-value pair");u[p=g[0]]=(h=u[p])?H.isArray(h)?[...h,g[1]]:[h,g[1]]:g[1]}c(u,n)}else e!=null&&a(n,e,i);return this}get(e,n){if(e=ir(e),e){const i=H.findKey(this,e);if(i){const o=this[i];if(!n)return o;if(n===!0)return Xb(o);if(H.isFunction(n))return n.call(this,o,i);if(H.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ir(e),e){const i=H.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Wc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let o=!1;function a(c){if(c=ir(c),c){const u=H.findKey(i,c);u&&(!n||Wc(i,i[u],u,n))&&(delete i[u],o=!0)}}return H.isArray(e)?e.forEach(a):a(e),o}clear(e){const n=Object.keys(this);let i=n.length,o=!1;for(;i--;){const a=n[i];(!e||Wc(this,this[a],a,e,!0))&&(delete this[a],o=!0)}return o}normalize(e){const n=this,i={};return H.forEach(this,(o,a)=>{const c=H.findKey(i,a);if(c){n[c]=ha(o),delete n[a];return}const u=e?Gb(a):String(a).trim();u!==a&&delete n[a],n[u]=ha(o),i[u]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return H.forEach(this,(i,o)=>{i!=null&&i!==!1&&(n[o]=e&&H.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(o=>i.set(o)),i}static accessor(e){const i=(this[cp]=this[cp]={accessors:{}}).accessors,o=this.prototype;function a(c){const u=ir(c);i[u]||(Jb(o,c),i[u]=!0)}return H.isArray(e)?e.forEach(a):a(e),this}};Ct.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(Ct.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});H.freezeMethods(Ct);function $c(t,e){const n=this||Or,i=e||n,o=Ct.from(i.headers);let a=i.data;return H.forEach(t,function(u){a=u.call(n,a,o.normalize(),e?e.status:void 0)}),o.normalize(),a}function gg(t){return!!(t&&t.__CANCEL__)}let zr=class extends be{constructor(e,n,i){super(e??"canceled",be.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function xg(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new be("Request failed with status code "+n.status,[be.ERR_BAD_REQUEST,be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Zb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function e1(t,e){t=t||10;const n=new Array(t),i=new Array(t);let o=0,a=0,c;return e=e!==void 0?e:1e3,function(h){const p=Date.now(),g=i[a];c||(c=p),n[o]=h,i[o]=p;let v=a,y=0;for(;v!==o;)y+=n[v++],v=v%t;if(o=(o+1)%t,o===a&&(a=(a+1)%t),p-c<e)return;const b=g&&p-g;return b?Math.round(y*1e3/b):void 0}}function t1(t,e){let n=0,i=1e3/e,o,a;const c=(p,g=Date.now())=>{n=g,o=null,a&&(clearTimeout(a),a=null),t(...p)};return[(...p)=>{const g=Date.now(),v=g-n;v>=i?c(p,g):(o=p,a||(a=setTimeout(()=>{a=null,c(o)},i-v)))},()=>o&&c(o)]}const ba=(t,e,n=3)=>{let i=0;const o=e1(50,250);return t1(a=>{const c=a.loaded,u=a.lengthComputable?a.total:void 0,h=c-i,p=o(h),g=c<=u;i=c;const v={loaded:c,total:u,progress:u?c/u:void 0,bytes:h,rate:p||void 0,estimated:p&&u&&g?(u-c)/p:void 0,event:a,lengthComputable:u!=null,[e?"download":"upload"]:!0};t(v)},n)},dp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},up=t=>(...e)=>H.asap(()=>t(...e)),n1=ut.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,ut.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(ut.origin),ut.navigator&&/(msie|trident)/i.test(ut.navigator.userAgent)):()=>!0,s1=ut.hasStandardBrowserEnv?{write(t,e,n,i,o,a,c){if(typeof document>"u")return;const u=[`${t}=${encodeURIComponent(e)}`];H.isNumber(n)&&u.push(`expires=${new Date(n).toUTCString()}`),H.isString(i)&&u.push(`path=${i}`),H.isString(o)&&u.push(`domain=${o}`),a===!0&&u.push("secure"),H.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.match(new RegExp("(?:^|; )"+t+"=([^;]*)"));return e?decodeURIComponent(e[1]):null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function i1(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function r1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function vg(t,e,n){let i=!i1(e);return t&&(i||n==!1)?r1(t,e):e}const hp=t=>t instanceof Ct?{...t}:t;function As(t,e){e=e||{};const n={};function i(p,g,v,y){return H.isPlainObject(p)&&H.isPlainObject(g)?H.merge.call({caseless:y},p,g):H.isPlainObject(g)?H.merge({},g):H.isArray(g)?g.slice():g}function o(p,g,v,y){if(H.isUndefined(g)){if(!H.isUndefined(p))return i(void 0,p,v,y)}else return i(p,g,v,y)}function a(p,g){if(!H.isUndefined(g))return i(void 0,g)}function c(p,g){if(H.isUndefined(g)){if(!H.isUndefined(p))return i(void 0,p)}else return i(void 0,g)}function u(p,g,v){if(v in e)return i(p,g);if(v in t)return i(void 0,p)}const h={url:a,method:a,data:a,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,g,v)=>o(hp(p),hp(g),v,!0)};return H.forEach(Object.keys({...t,...e}),function(g){if(g==="__proto__"||g==="constructor"||g==="prototype")return;const v=H.hasOwnProp(h,g)?h[g]:o,y=v(t[g],e[g],g);H.isUndefined(y)&&v!==u||(n[g]=y)}),n}const yg=t=>{const e=As({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:o,xsrfCookieName:a,headers:c,auth:u}=e;if(e.headers=c=Ct.from(c),e.url=fg(vg(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),H.isFormData(n)){if(ut.hasStandardBrowserEnv||ut.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(H.isFunction(n.getHeaders)){const h=n.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([g,v])=>{p.includes(g.toLowerCase())&&c.set(g,v)})}}if(ut.hasStandardBrowserEnv&&(i&&H.isFunction(i)&&(i=i(e)),i||i!==!1&&n1(e.url))){const h=o&&a&&s1.read(a);h&&c.set(o,h)}return e},o1=typeof XMLHttpRequest<"u",a1=o1&&function(t){return new Promise(function(n,i){const o=yg(t);let a=o.data;const c=Ct.from(o.headers).normalize();let{responseType:u,onUploadProgress:h,onDownloadProgress:p}=o,g,v,y,b,_;function k(){b&&b(),_&&_(),o.cancelToken&&o.cancelToken.unsubscribe(g),o.signal&&o.signal.removeEventListener("abort",g)}let j=new XMLHttpRequest;j.open(o.method.toUpperCase(),o.url,!0),j.timeout=o.timeout;function S(){if(!j)return;const T=Ct.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),E={data:!u||u==="text"||u==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:T,config:t,request:j};xg(function(U){n(U),k()},function(U){i(U),k()},E),j=null}"onloadend"in j?j.onloadend=S:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(S)},j.onabort=function(){j&&(i(new be("Request aborted",be.ECONNABORTED,t,j)),j=null)},j.onerror=function(A){const E=A&&A.message?A.message:"Network Error",O=new be(E,be.ERR_NETWORK,t,j);O.event=A||null,i(O),j=null},j.ontimeout=function(){let A=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const E=o.transitional||Rd;o.timeoutErrorMessage&&(A=o.timeoutErrorMessage),i(new be(A,E.clarifyTimeoutError?be.ETIMEDOUT:be.ECONNABORTED,t,j)),j=null},a===void 0&&c.setContentType(null),"setRequestHeader"in j&&H.forEach(c.toJSON(),function(A,E){j.setRequestHeader(E,A)}),H.isUndefined(o.withCredentials)||(j.withCredentials=!!o.withCredentials),u&&u!=="json"&&(j.responseType=o.responseType),p&&([y,_]=ba(p,!0),j.addEventListener("progress",y)),h&&j.upload&&([v,b]=ba(h),j.upload.addEventListener("progress",v),j.upload.addEventListener("loadend",b)),(o.cancelToken||o.signal)&&(g=T=>{j&&(i(!T||T.type?new zr(null,t,j):T),j.abort(),j=null)},o.cancelToken&&o.cancelToken.subscribe(g),o.signal&&(o.signal.aborted?g():o.signal.addEventListener("abort",g)));const N=Zb(o.url);if(N&&ut.protocols.indexOf(N)===-1){i(new be("Unsupported protocol "+N+":",be.ERR_BAD_REQUEST,t));return}j.send(a||null)})},l1=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,o;const a=function(p){if(!o){o=!0,u();const g=p instanceof Error?p:this.reason;i.abort(g instanceof be?g:new zr(g instanceof Error?g.message:g))}};let c=e&&setTimeout(()=>{c=null,a(new be(`timeout of ${e}ms exceeded`,be.ETIMEDOUT))},e);const u=()=>{t&&(c&&clearTimeout(c),c=null,t.forEach(p=>{p.unsubscribe?p.unsubscribe(a):p.removeEventListener("abort",a)}),t=null)};t.forEach(p=>p.addEventListener("abort",a));const{signal:h}=i;return h.unsubscribe=()=>H.asap(u),h}},c1=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,o;for(;i<n;)o=i+e,yield t.slice(i,o),i=o},d1=async function*(t,e){for await(const n of u1(t))yield*c1(n,e)},u1=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},fp=(t,e,n,i)=>{const o=d1(t,e);let a=0,c,u=h=>{c||(c=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:p,value:g}=await o.next();if(p){u(),h.close();return}let v=g.byteLength;if(n){let y=a+=v;n(y)}h.enqueue(new Uint8Array(g))}catch(p){throw u(p),p}},cancel(h){return u(h),o.return()}},{highWaterMark:2})},pp=64*1024,{isFunction:Qo}=H,h1=(({Request:t,Response:e})=>({Request:t,Response:e}))(H.global),{ReadableStream:mp,TextEncoder:gp}=H.global,xp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},f1=t=>{t=H.merge.call({skipUndefined:!0},h1,t);const{fetch:e,Request:n,Response:i}=t,o=e?Qo(e):typeof fetch=="function",a=Qo(n),c=Qo(i);if(!o)return!1;const u=o&&Qo(mp),h=o&&(typeof gp=="function"?(_=>k=>_.encode(k))(new gp):async _=>new Uint8Array(await new n(_).arrayBuffer())),p=a&&u&&xp(()=>{let _=!1;const k=new mp,j=new n(ut.origin,{body:k,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return k.cancel(),_&&!j}),g=c&&u&&xp(()=>H.isReadableStream(new i("").body)),v={stream:g&&(_=>_.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!v[_]&&(v[_]=(k,j)=>{let S=k&&k[_];if(S)return S.call(k);throw new be(`Response type '${_}' is not supported`,be.ERR_NOT_SUPPORT,j)})});const y=async _=>{if(_==null)return 0;if(H.isBlob(_))return _.size;if(H.isSpecCompliantForm(_))return(await new n(ut.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(H.isArrayBufferView(_)||H.isArrayBuffer(_))return _.byteLength;if(H.isURLSearchParams(_)&&(_=_+""),H.isString(_))return(await h(_)).byteLength},b=async(_,k)=>{const j=H.toFiniteNumber(_.getContentLength());return j??y(k)};return async _=>{let{url:k,method:j,data:S,signal:N,cancelToken:T,timeout:A,onDownloadProgress:E,onUploadProgress:O,responseType:U,headers:$,withCredentials:Y="same-origin",fetchOptions:Q}=yg(_),se=e||fetch;U=U?(U+"").toLowerCase():"text";let B=l1([N,T&&T.toAbortSignal()],A),V=null;const L=B&&B.unsubscribe&&(()=>{B.unsubscribe()});let re;try{if(O&&p&&j!=="get"&&j!=="head"&&(re=await b($,S))!==0){let D=new n(k,{method:"POST",body:S,duplex:"half"}),q;if(H.isFormData(S)&&(q=D.headers.get("content-type"))&&$.setContentType(q),D.body){const[me,pe]=dp(re,ba(up(O)));S=fp(D.body,pp,me,pe)}}H.isString(Y)||(Y=Y?"include":"omit");const W=a&&"credentials"in n.prototype,ne={...Q,signal:B,method:j.toUpperCase(),headers:$.normalize().toJSON(),body:S,duplex:"half",credentials:W?Y:void 0};V=a&&new n(k,ne);let X=await(a?se(V,Q):se(k,ne));const ie=g&&(U==="stream"||U==="response");if(g&&(E||ie&&L)){const D={};["status","statusText","headers"].forEach(ve=>{D[ve]=X[ve]});const q=H.toFiniteNumber(X.headers.get("content-length")),[me,pe]=E&&dp(q,ba(up(E),!0))||[];X=new i(fp(X.body,pp,me,()=>{pe&&pe(),L&&L()}),D)}U=U||"text";let ee=await v[H.findKey(v,U)||"text"](X,_);return!ie&&L&&L(),await new Promise((D,q)=>{xg(D,q,{data:ee,headers:Ct.from(X.headers),status:X.status,statusText:X.statusText,config:_,request:V})})}catch(W){throw L&&L(),W&&W.name==="TypeError"&&/Load failed|fetch/i.test(W.message)?Object.assign(new be("Network Error",be.ERR_NETWORK,_,V,W&&W.response),{cause:W.cause||W}):be.from(W,W&&W.code,_,V,W&&W.response)}}},p1=new Map,bg=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:o}=e,a=[i,o,n];let c=a.length,u=c,h,p,g=p1;for(;u--;)h=a[u],p=g.get(h),p===void 0&&g.set(h,p=u?new Map:f1(e)),g=p;return p};bg();const Ad={http:Pb,xhr:a1,fetch:{get:bg}};H.forEach(Ad,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const vp=t=>`- ${t}`,m1=t=>H.isFunction(t)||t===null||t===!1;function g1(t,e){t=H.isArray(t)?t:[t];const{length:n}=t;let i,o;const a={};for(let c=0;c<n;c++){i=t[c];let u;if(o=i,!m1(i)&&(o=Ad[(u=String(i)).toLowerCase()],o===void 0))throw new be(`Unknown adapter '${u}'`);if(o&&(H.isFunction(o)||(o=o.get(e))))break;a[u||"#"+c]=o}if(!o){const c=Object.entries(a).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=n?c.length>1?`since :
`+c.map(vp).join(`
`):" "+vp(c[0]):"as no adapter specified";throw new be("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return o}const jg={getAdapter:g1,adapters:Ad};function Uc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zr(null,t)}function yp(t){return Uc(t),t.headers=Ct.from(t.headers),t.data=$c.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),jg.getAdapter(t.adapter||Or.adapter,t)(t).then(function(i){return Uc(t),i.data=$c.call(t,t.transformResponse,i),i.headers=Ct.from(i.headers),i},function(i){return gg(i)||(Uc(t),i&&i.response&&(i.response.data=$c.call(t,t.transformResponse,i.response),i.response.headers=Ct.from(i.response.headers))),Promise.reject(i)})}const wg="1.15.0",za={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{za[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const bp={};za.transitional=function(e,n,i){function o(a,c){return"[Axios v"+wg+"] Transitional option '"+a+"'"+c+(i?". "+i:"")}return(a,c,u)=>{if(e===!1)throw new be(o(c," has been removed"+(n?" in "+n:"")),be.ERR_DEPRECATED);return n&&!bp[c]&&(bp[c]=!0,console.warn(o(c," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(a,c,u):!0}};za.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function x1(t,e,n){if(typeof t!="object")throw new be("options must be an object",be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let o=i.length;for(;o-- >0;){const a=i[o],c=e[a];if(c){const u=t[a],h=u===void 0||c(u,a,t);if(h!==!0)throw new be("option "+a+" must be "+h,be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new be("Unknown option "+a,be.ERR_BAD_OPTION)}}const fa={assertOptions:x1,validators:za},Wt=fa.validators;let Ps=class{constructor(e){this.defaults=e||{},this.interceptors={request:new lp,response:new lp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const a=(()=>{if(!o.stack)return"";const c=o.stack.indexOf(`
`);return c===-1?"":o.stack.slice(c+1)})();try{if(!i.stack)i.stack=a;else if(a){const c=a.indexOf(`
`),u=c===-1?-1:a.indexOf(`
`,c+1),h=u===-1?"":a.slice(u+1);String(i.stack).endsWith(h)||(i.stack+=`
`+a)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=As(this.defaults,n);const{transitional:i,paramsSerializer:o,headers:a}=n;i!==void 0&&fa.assertOptions(i,{silentJSONParsing:Wt.transitional(Wt.boolean),forcedJSONParsing:Wt.transitional(Wt.boolean),clarifyTimeoutError:Wt.transitional(Wt.boolean),legacyInterceptorReqResOrdering:Wt.transitional(Wt.boolean)},!1),o!=null&&(H.isFunction(o)?n.paramsSerializer={serialize:o}:fa.assertOptions(o,{encode:Wt.function,serialize:Wt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),fa.assertOptions(n,{baseUrl:Wt.spelling("baseURL"),withXsrfToken:Wt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=a&&H.merge(a.common,a[n.method]);a&&H.forEach(["delete","get","head","post","put","patch","common"],_=>{delete a[_]}),n.headers=Ct.concat(c,a);const u=[];let h=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(n)===!1)return;h=h&&k.synchronous;const j=n.transitional||Rd;j&&j.legacyInterceptorReqResOrdering?u.unshift(k.fulfilled,k.rejected):u.push(k.fulfilled,k.rejected)});const p=[];this.interceptors.response.forEach(function(k){p.push(k.fulfilled,k.rejected)});let g,v=0,y;if(!h){const _=[yp.bind(this),void 0];for(_.unshift(...u),_.push(...p),y=_.length,g=Promise.resolve(n);v<y;)g=g.then(_[v++],_[v++]);return g}y=u.length;let b=n;for(;v<y;){const _=u[v++],k=u[v++];try{b=_(b)}catch(j){k.call(this,j);break}}try{g=yp.call(this,b)}catch(_){return Promise.reject(_)}for(v=0,y=p.length;v<y;)g=g.then(p[v++],p[v++]);return g}getUri(e){e=As(this.defaults,e);const n=vg(e.baseURL,e.url,e.allowAbsoluteUrls);return fg(n,e.params,e.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(e){Ps.prototype[e]=function(n,i){return this.request(As(i||{},{method:e,url:n,data:(i||{}).data}))}});H.forEach(["post","put","patch"],function(e){function n(i){return function(a,c,u){return this.request(As(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:c}))}}Ps.prototype[e]=n(),Ps.prototype[e+"Form"]=n(!0)});let v1=class _g{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const i=this;this.promise.then(o=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](o);i._listeners=null}),this.promise.then=o=>{let a;const c=new Promise(u=>{i.subscribe(u),a=u}).then(o);return c.cancel=function(){i.unsubscribe(a)},c},e(function(a,c,u){i.reason||(i.reason=new zr(a,c,u),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new _g(function(o){e=o}),cancel:e}}};function y1(t){return function(n){return t.apply(null,n)}}function b1(t){return H.isObject(t)&&t.isAxiosError===!0}const hd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(hd).forEach(([t,e])=>{hd[e]=t});function kg(t){const e=new Ps(t),n=ng(Ps.prototype.request,e);return H.extend(n,Ps.prototype,e,{allOwnKeys:!0}),H.extend(n,e,null,{allOwnKeys:!0}),n.create=function(o){return kg(As(t,o))},n}const Ve=kg(Or);Ve.Axios=Ps;Ve.CanceledError=zr;Ve.CancelToken=v1;Ve.isCancel=gg;Ve.VERSION=wg;Ve.toFormData=Oa;Ve.AxiosError=be;Ve.Cancel=Ve.CanceledError;Ve.all=function(e){return Promise.all(e)};Ve.spread=y1;Ve.isAxiosError=b1;Ve.mergeConfig=As;Ve.AxiosHeaders=Ct;Ve.formToJSON=t=>pg(H.isHTMLForm(t)?new FormData(t):t);Ve.getAdapter=jg.getAdapter;Ve.HttpStatusCode=hd;Ve.default=Ve;const{Axios:MS,AxiosError:DS,CanceledError:LS,isCancel:OS,CancelToken:zS,VERSION:IS,all:FS,Cancel:BS,isAxiosError:HS,spread:WS,toFormData:$S,AxiosHeaders:US,HttpStatusCode:VS,formToJSON:YS,getAdapter:qS,mergeConfig:KS}=Ve,fe=Ve.create({baseURL:"/api",timeout:3e4});fe.interceptors.response.use(t=>t,t=>(console.error("API Error:",t),Promise.reject(t)));const dr={list:(t=1,e=100)=>fe.get(`/events?page=${t}&page_size=${e}`),get:t=>fe.get(`/events/${t}`),search:t=>fe.post("/events/search",t),export:t=>fe.post("/events/export",t,{responseType:t.format==="json"?"json":"blob"})},hn={list:(t=1,e=100,n)=>fe.get(`/alerts?page=${t}&page_size=${e}${n?`&severity=${n}`:""}`),get:t=>fe.get(`/alerts/${t}`),stats:()=>fe.get("/alerts/stats"),trend:(t=7)=>fe.get(`/alerts/trend?days=${t}`),resolve:(t,e)=>fe.post(`/alerts/${t}/resolve`,{notes:e}),markFalsePositive:(t,e)=>fe.post(`/alerts/${t}/false-positive`,{reason:e}),delete:t=>fe.delete(`/alerts/${t}`),batchAction:(t,e,n)=>fe.post("/alerts/batch",{ids:t,action:e,notes:n})},j1={collect:t=>fe.post("/collect",t),getStatus:()=>fe.get("/collect/status")},w1={importLogs:t=>fe.post("/import/logs",{files:t}),getStatus:()=>fe.get("/import/status")},_1={getStats:()=>fe.get("/live/stats"),streamEvents:(t,e,n)=>{const i=new EventSource("/api/live/events");return i.onmessage=o=>{try{const a=JSON.parse(o.data);a.type==="event"?t(a.data):a.type==="stats"&&e(a)}catch(a){console.error("Failed to parse SSE data:",a)}},i.onerror=o=>{console.error("SSE error:",o),n==null||n(o)},i}},ks={health:()=>fe.get("/health"),getInfo:()=>fe.get("/system/info"),getMetrics:()=>fe.get("/system/metrics"),getProcesses:(t=100)=>fe.get(`/system/processes?limit=${t}`),getNetwork:(t=100,e)=>fe.get(`/system/network?limit=${t}${e?`&protocol=${e}`:""}`),getEnvVariables:()=>fe.get("/system/env"),getLoadedDLLs:(t=100)=>fe.get(`/system/dlls?limit=${t}`),getDrivers:()=>fe.get("/system/drivers")},ys={list:()=>fe.get("/rules"),get:t=>fe.get(`/rules/${t}`),toggle:(t,e)=>fe.post(`/rules/${t}/toggle?enabled=${e}`),save:t=>fe.post("/rules/save",t),validate:(t,e)=>fe.post("/rules/validate",{rule:t,content:e}),import:t=>fe.post("/rules/import",{rules:t}),export:(t="json")=>fe.get(`/rules/export?format=${t}`,{responseType:"blob"})},Go={list:()=>fe.get("/reports"),generate:t=>fe.post("/reports",t),get:t=>fe.get(`/reports/${t}`),export:t=>fe.get(`/reports/export?format=${t}`,{responseType:"blob"})},bs={calculateHash:t=>fe.post("/forensics/hash",{path:t}),verifyHash:(t,e)=>fe.get(`/forensics/verify-hash?path=${t}&expected=${e}`),verifySignature:t=>fe.get(`/forensics/signature?path=${t}`),isSigned:t=>fe.get(`/forensics/is-signed?path=${t}`),collect:(t,e)=>fe.post("/forensics/collect",{type:t,output_path:e}),listEvidence:()=>fe.get("/forensics/evidence"),getEvidence:t=>fe.get(`/forensics/evidence/${t}`),exportEvidence:(t,e)=>fe.get(`/forensics/evidence/${t}/export?format=${e}`,{responseType:"blob"}),chainOfCustody:()=>fe.get("/forensics/chain-of-custody"),memoryDump:t=>fe.get(`/forensics/memory-dump${t?`?pid=${t}`:""}`)},fd={get:(t=200,e,n)=>{let i=`/timeline?limit=${t}`;return e&&(i+=`&start_time=${e}`),n&&(i+=`&end_time=${n}`),fe.get(i)},deleteAlert:t=>fe.delete(`/timeline/alerts/${t}`)},k1={getCollectionStats:()=>fe.get("/dashboard/collection-stats")},Sg={run:(t,e)=>fe.post(`/analyze/${t}`,e||{}),list:()=>fe.get("/analyzers"),info:t=>fe.get(`/analyzers/${t}`)},Vc={get:()=>fe.get("/settings"),save:t=>fe.post("/settings",t),reset:()=>fe.post("/settings/reset")},S1={detect:()=>fe.get("/persistence/detect"),listCategories:()=>fe.get("/persistence/categories"),listTechniques:()=>fe.get("/persistence/techniques")};/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Ir(t){return t+.5|0}const Jn=(t,e,n)=>Math.max(Math.min(t,n),e);function ur(t){return Jn(Ir(t*2.55),0,255)}function ns(t){return Jn(Ir(t*255),0,255)}function Nn(t){return Jn(Ir(t/2.55)/100,0,1)}function jp(t){return Jn(Ir(t*100),0,100)}const $t={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},pd=[..."0123456789ABCDEF"],N1=t=>pd[t&15],C1=t=>pd[(t&240)>>4]+pd[t&15],Jo=t=>(t&240)>>4===(t&15),E1=t=>Jo(t.r)&&Jo(t.g)&&Jo(t.b)&&Jo(t.a);function P1(t){var e=t.length,n;return t[0]==="#"&&(e===4||e===5?n={r:255&$t[t[1]]*17,g:255&$t[t[2]]*17,b:255&$t[t[3]]*17,a:e===5?$t[t[4]]*17:255}:(e===7||e===9)&&(n={r:$t[t[1]]<<4|$t[t[2]],g:$t[t[3]]<<4|$t[t[4]],b:$t[t[5]]<<4|$t[t[6]],a:e===9?$t[t[7]]<<4|$t[t[8]]:255})),n}const R1=(t,e)=>t<255?e(t):"";function T1(t){var e=E1(t)?N1:C1;return t?"#"+e(t.r)+e(t.g)+e(t.b)+R1(t.a,e):void 0}const A1=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ng(t,e,n){const i=e*Math.min(n,1-n),o=(a,c=(a+t/30)%12)=>n-i*Math.max(Math.min(c-3,9-c,1),-1);return[o(0),o(8),o(4)]}function M1(t,e,n){const i=(o,a=(o+t/60)%6)=>n-n*e*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function D1(t,e,n){const i=Ng(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)i[o]*=1-e-n,i[o]+=e;return i}function L1(t,e,n,i,o){return t===o?(e-n)/i+(e<n?6:0):e===o?(n-t)/i+2:(t-e)/i+4}function Md(t){const n=t.r/255,i=t.g/255,o=t.b/255,a=Math.max(n,i,o),c=Math.min(n,i,o),u=(a+c)/2;let h,p,g;return a!==c&&(g=a-c,p=u>.5?g/(2-a-c):g/(a+c),h=L1(n,i,o,g,a),h=h*60+.5),[h|0,p||0,u]}function Dd(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(ns)}function Ld(t,e,n){return Dd(Ng,t,e,n)}function O1(t,e,n){return Dd(D1,t,e,n)}function z1(t,e,n){return Dd(M1,t,e,n)}function Cg(t){return(t%360+360)%360}function I1(t){const e=A1.exec(t);let n=255,i;if(!e)return;e[5]!==i&&(n=e[6]?ur(+e[5]):ns(+e[5]));const o=Cg(+e[2]),a=+e[3]/100,c=+e[4]/100;return e[1]==="hwb"?i=O1(o,a,c):e[1]==="hsv"?i=z1(o,a,c):i=Ld(o,a,c),{r:i[0],g:i[1],b:i[2],a:n}}function F1(t,e){var n=Md(t);n[0]=Cg(n[0]+e),n=Ld(n),t.r=n[0],t.g=n[1],t.b=n[2]}function B1(t){if(!t)return;const e=Md(t),n=e[0],i=jp(e[1]),o=jp(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${o}%, ${Nn(t.a)})`:`hsl(${n}, ${i}%, ${o}%)`}const wp={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},_p={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function H1(){const t={},e=Object.keys(_p),n=Object.keys(wp);let i,o,a,c,u;for(i=0;i<e.length;i++){for(c=u=e[i],o=0;o<n.length;o++)a=n[o],u=u.replace(a,wp[a]);a=parseInt(_p[c],16),t[u]=[a>>16&255,a>>8&255,a&255]}return t}let Zo;function W1(t){Zo||(Zo=H1(),Zo.transparent=[0,0,0,0]);const e=Zo[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:e.length===4?e[3]:255}}const $1=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function U1(t){const e=$1.exec(t);let n=255,i,o,a;if(e){if(e[7]!==i){const c=+e[7];n=e[8]?ur(c):Jn(c*255,0,255)}return i=+e[1],o=+e[3],a=+e[5],i=255&(e[2]?ur(i):Jn(i,0,255)),o=255&(e[4]?ur(o):Jn(o,0,255)),a=255&(e[6]?ur(a):Jn(a,0,255)),{r:i,g:o,b:a,a:n}}}function V1(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Nn(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const Yc=t=>t<=.0031308?t*12.92:Math.pow(t,1/2.4)*1.055-.055,li=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Y1(t,e,n){const i=li(Nn(t.r)),o=li(Nn(t.g)),a=li(Nn(t.b));return{r:ns(Yc(i+n*(li(Nn(e.r))-i))),g:ns(Yc(o+n*(li(Nn(e.g))-o))),b:ns(Yc(a+n*(li(Nn(e.b))-a))),a:t.a+n*(e.a-t.a)}}function ea(t,e,n){if(t){let i=Md(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,e===0?360:1)),i=Ld(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Eg(t,e){return t&&Object.assign(e||{},t)}function kp(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ns(t[3]))):(e=Eg(t,{r:0,g:0,b:0,a:1}),e.a=ns(e.a)),e}function q1(t){return t.charAt(0)==="r"?U1(t):I1(t)}class _r{constructor(e){if(e instanceof _r)return e;const n=typeof e;let i;n==="object"?i=kp(e):n==="string"&&(i=P1(e)||W1(e)||q1(e)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var e=Eg(this._rgb);return e&&(e.a=Nn(e.a)),e}set rgb(e){this._rgb=kp(e)}rgbString(){return this._valid?V1(this._rgb):void 0}hexString(){return this._valid?T1(this._rgb):void 0}hslString(){return this._valid?B1(this._rgb):void 0}mix(e,n){if(e){const i=this.rgb,o=e.rgb;let a;const c=n===a?.5:n,u=2*c-1,h=i.a-o.a,p=((u*h===-1?u:(u+h)/(1+u*h))+1)/2;a=1-p,i.r=255&p*i.r+a*o.r+.5,i.g=255&p*i.g+a*o.g+.5,i.b=255&p*i.b+a*o.b+.5,i.a=c*i.a+(1-c)*o.a,this.rgb=i}return this}interpolate(e,n){return e&&(this._rgb=Y1(this._rgb,e._rgb,n)),this}clone(){return new _r(this.rgb)}alpha(e){return this._rgb.a=ns(e),this}clearer(e){const n=this._rgb;return n.a*=1-e,this}greyscale(){const e=this._rgb,n=Ir(e.r*.3+e.g*.59+e.b*.11);return e.r=e.g=e.b=n,this}opaquer(e){const n=this._rgb;return n.a*=1+e,this}negate(){const e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return ea(this._rgb,2,e),this}darken(e){return ea(this._rgb,2,-e),this}saturate(e){return ea(this._rgb,1,e),this}desaturate(e){return ea(this._rgb,1,-e),this}rotate(e){return F1(this._rgb,e),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function _n(){}const K1=(()=>{let t=0;return()=>t++})();function Ee(t){return t==null}function qe(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return e.slice(0,7)==="[object"&&e.slice(-6)==="Array]"}function Se(t){return t!==null&&Object.prototype.toString.call(t)==="[object Object]"}function pt(t){return(typeof t=="number"||t instanceof Number)&&isFinite(+t)}function ln(t,e){return pt(t)?t:e}function _e(t,e){return typeof t>"u"?e:t}const X1=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100:+t/e,Pg=(t,e)=>typeof t=="string"&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Oe(t,e,n){if(t&&typeof t.call=="function")return t.apply(n,e)}function Te(t,e,n,i){let o,a,c;if(qe(t))for(a=t.length,o=0;o<a;o++)e.call(n,t[o],o);else if(Se(t))for(c=Object.keys(t),a=c.length,o=0;o<a;o++)e.call(n,t[c[o]],c[o])}function ja(t,e){let n,i,o,a;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(o=t[n],a=e[n],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function wa(t){if(qe(t))return t.map(wa);if(Se(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let o=0;for(;o<i;++o)e[n[o]]=wa(t[n[o]]);return e}return t}function Rg(t){return["__proto__","prototype","constructor"].indexOf(t)===-1}function Q1(t,e,n,i){if(!Rg(t))return;const o=e[t],a=n[t];Se(o)&&Se(a)?kr(o,a,i):e[t]=wa(a)}function kr(t,e,n){const i=qe(e)?e:[e],o=i.length;if(!Se(t))return t;n=n||{};const a=n.merger||Q1;let c;for(let u=0;u<o;++u){if(c=i[u],!Se(c))continue;const h=Object.keys(c);for(let p=0,g=h.length;p<g;++p)a(h[p],t,c,n)}return t}function gr(t,e){return kr(t,e,{merger:G1})}function G1(t,e,n){if(!Rg(t))return;const i=e[t],o=n[t];Se(i)&&Se(o)?gr(i,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=wa(o))}const Sp={"":t=>t,x:t=>t.x,y:t=>t.y};function J1(t){const e=t.split("."),n=[];let i="";for(const o of e)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(n.push(i),i="");return n}function Z1(t){const e=J1(t);return n=>{for(const i of e){if(i==="")break;n=n&&n[i]}return n}}function Ms(t,e){return(Sp[e]||(Sp[e]=Z1(e)))(t)}function Od(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Sr=t=>typeof t<"u",ss=t=>typeof t=="function",Np=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function ej(t){return t.type==="mouseup"||t.type==="click"||t.type==="contextmenu"}const Ae=Math.PI,Be=2*Ae,tj=Be+Ae,_a=Number.POSITIVE_INFINITY,nj=Ae/180,Ge=Ae/2,js=Ae/4,Cp=Ae*2/3,Tg=Math.log10,fn=Math.sign;function xr(t,e,n){return Math.abs(t-e)<n}function Ep(t){const e=Math.round(t);t=xr(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(Tg(t))),i=t/n;return(i<=1?1:i<=2?2:i<=5?5:10)*n}function sj(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(n|0)&&e.push(n),e.sort((o,a)=>o-a).pop(),e}function ij(t){return typeof t=="symbol"||typeof t=="object"&&t!==null&&!(Symbol.toPrimitive in t||"toString"in t||"valueOf"in t)}function Nr(t){return!ij(t)&&!isNaN(parseFloat(t))&&isFinite(t)}function rj(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function oj(t,e,n){let i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i][n],isNaN(a)||(e.min=Math.min(e.min,a),e.max=Math.max(e.max,a))}function Cn(t){return t*(Ae/180)}function aj(t){return t*(180/Ae)}function Pp(t){if(!pt(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Ag(t,e){const n=e.x-t.x,i=e.y-t.y,o=Math.sqrt(n*n+i*i);let a=Math.atan2(i,n);return a<-.5*Ae&&(a+=Be),{angle:a,distance:o}}function md(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function lj(t,e){return(t-e+tj)%Be-Ae}function Mt(t){return(t%Be+Be)%Be}function Cr(t,e,n,i){const o=Mt(t),a=Mt(e),c=Mt(n),u=Mt(a-o),h=Mt(c-o),p=Mt(o-a),g=Mt(o-c);return o===a||o===c||i&&a===c||u>h&&p<g}function ht(t,e,n){return Math.max(e,Math.min(n,t))}function cj(t){return ht(t,-32768,32767)}function En(t,e,n,i=1e-6){return t>=Math.min(e,n)-i&&t<=Math.max(e,n)+i}function zd(t,e,n){n=n||(c=>t[c]<e);let i=t.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,n(a)?o=a:i=a;return{lo:o,hi:i}}const Es=(t,e,n,i)=>zd(t,n,i?o=>{const a=t[o][e];return a<n||a===n&&t[o+1][e]===n}:o=>t[o][e]<n),dj=(t,e,n)=>zd(t,n,i=>t[i][e]>=n);function uj(t,e,n){let i=0,o=t.length;for(;i<o&&t[i]<e;)i++;for(;o>i&&t[o-1]>n;)o--;return i>0||o<t.length?t.slice(i,o):t}const Mg=["push","pop","shift","splice","unshift"];function hj(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Mg.forEach(n=>{const i="_onData"+Od(n),o=t[n];Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value(...a){const c=o.apply(this,a);return t._chartjs.listeners.forEach(u=>{typeof u[i]=="function"&&u[i](...a)}),c}})})}function Rp(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,o=i.indexOf(e);o!==-1&&i.splice(o,1),!(i.length>0)&&(Mg.forEach(a=>{delete t[a]}),delete t._chartjs)}function Dg(t){const e=new Set(t);return e.size===t.length?t:Array.from(e)}const Lg=(function(){return typeof window>"u"?function(t){return t()}:window.requestAnimationFrame})();function Og(t,e){let n=[],i=!1;return function(...o){n=o,i||(i=!0,Lg.call(window,()=>{i=!1,t.apply(e,n)}))}}function fj(t,e){let n;return function(...i){return e?(clearTimeout(n),n=setTimeout(t,e,i)):t.apply(this,i),e}}const Id=t=>t==="start"?"left":t==="end"?"right":"center",dt=(t,e,n)=>t==="start"?e:t==="end"?n:(e+n)/2,pj=(t,e,n,i)=>t===(i?"left":"right")?n:t==="center"?(e+n)/2:e;function mj(t,e,n){const i=e.length;let o=0,a=i;if(t._sorted){const{iScale:c,vScale:u,_parsed:h}=t,p=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null,g=c.axis,{min:v,max:y,minDefined:b,maxDefined:_}=c.getUserBounds();if(b){if(o=Math.min(Es(h,g,v).lo,n?i:Es(e,g,c.getPixelForValue(v)).lo),p){const k=h.slice(0,o+1).reverse().findIndex(j=>!Ee(j[u.axis]));o-=Math.max(0,k)}o=ht(o,0,i-1)}if(_){let k=Math.max(Es(h,c.axis,y,!0).hi+1,n?0:Es(e,g,c.getPixelForValue(y),!0).hi+1);if(p){const j=h.slice(k-1).findIndex(S=>!Ee(S[u.axis]));k+=Math.max(0,j)}a=ht(k,o,i)-o}else a=i-o}return{start:o,count:a}}function gj(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=o,!0;const a=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,o),a}const ta=t=>t===0||t===1,Tp=(t,e,n)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*Be/n)),Ap=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*Be/n)+1,vr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*Ge)+1,easeOutSine:t=>Math.sin(t*Ge),easeInOutSine:t=>-.5*(Math.cos(Ae*t)-1),easeInExpo:t=>t===0?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>t===1?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>ta(t)?t:t<.5?.5*Math.pow(2,10*(t*2-1)):.5*(-Math.pow(2,-10*(t*2-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>ta(t)?t:Tp(t,.075,.3),easeOutElastic:t=>ta(t)?t:Ap(t,.075,.3),easeInOutElastic(t){return ta(t)?t:t<.5?.5*Tp(t*2,.1125,.45):.5+.5*Ap(t*2-1,.1125,.45)},easeInBack(t){return t*t*((1.70158+1)*t-1.70158)},easeOutBack(t){return(t-=1)*t*((1.70158+1)*t+1.70158)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-vr.easeOutBounce(1-t),easeOutBounce(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:t=>t<.5?vr.easeInBounce(t*2)*.5:vr.easeOutBounce(t*2-1)*.5+.5};function Fd(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object CanvasPattern]"||e==="[object CanvasGradient]"}return!1}function Mp(t){return Fd(t)?t:new _r(t)}function qc(t){return Fd(t)?t:new _r(t).saturate(.5).darken(.1).hexString()}const xj=["x","y","borderWidth","radius","tension"],vj=["color","borderColor","backgroundColor"];function yj(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:e=>e!=="onProgress"&&e!=="onComplete"&&e!=="fn"}),t.set("animations",{colors:{type:"color",properties:vj},numbers:{type:"number",properties:xj}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:e=>e|0}}}})}function bj(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Dp=new Map;function jj(t,e){e=e||{};const n=t+JSON.stringify(e);let i=Dp.get(n);return i||(i=new Intl.NumberFormat(t,e),Dp.set(n,i)),i}function Bd(t,e,n){return jj(e,n).format(t)}const wj={values(t){return qe(t)?t:""+t},numeric(t,e,n){if(t===0)return"0";const i=this.chart.options.locale;let o,a=t;if(n.length>1){const p=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(p<1e-4||p>1e15)&&(o="scientific"),a=_j(t,n)}const c=Tg(Math.abs(a)),u=isNaN(c)?1:Math.max(Math.min(-1*Math.floor(c),20),0),h={notation:o,minimumFractionDigits:u,maximumFractionDigits:u};return Object.assign(h,this.options.ticks.format),Bd(t,i,h)}};function _j(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var zg={formatters:wj};function kj(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,n)=>n.lineWidth,tickColor:(e,n)=>n.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:zg.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:e=>!e.startsWith("before")&&!e.startsWith("after")&&e!=="callback"&&e!=="parser",_indexable:e=>e!=="borderDash"&&e!=="tickBorderDash"&&e!=="dash"}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:e=>e!=="backdropPadding"&&e!=="callback",_indexable:e=>e!=="backdropPadding"})}const Ds=Object.create(null),gd=Object.create(null);function yr(t,e){if(!e)return t;const n=e.split(".");for(let i=0,o=n.length;i<o;++i){const a=n[i];t=t[a]||(t[a]=Object.create(null))}return t}function Kc(t,e,n){return typeof e=="string"?kr(yr(t,e),n):kr(yr(t,""),e)}class Sj{constructor(e,n){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>qc(o.backgroundColor),this.hoverBorderColor=(i,o)=>qc(o.borderColor),this.hoverColor=(i,o)=>qc(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(n)}set(e,n){return Kc(this,e,n)}get(e){return yr(this,e)}describe(e,n){return Kc(gd,e,n)}override(e,n){return Kc(Ds,e,n)}route(e,n,i,o){const a=yr(this,e),c=yr(this,i),u="_"+n;Object.defineProperties(a,{[u]:{value:a[n],writable:!0},[n]:{enumerable:!0,get(){const h=this[u],p=c[o];return Se(h)?Object.assign({},p,h):_e(h,p)},set(h){this[u]=h}}})}apply(e){e.forEach(n=>n(this))}}var Ue=new Sj({_scriptable:t=>!t.startsWith("on"),_indexable:t=>t!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[yj,bj,kj]);function Nj(t){return!t||Ee(t.size)||Ee(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function Lp(t,e,n,i,o){let a=e[o];return a||(a=e[o]=t.measureText(o).width,n.push(o)),a>i&&(i=a),i}function ws(t,e,n){const i=t.currentDevicePixelRatio,o=n!==0?Math.max(n/2,.5):0;return Math.round((e-o)*i)/i+o}function Op(t,e){!e&&!t||(e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore())}function xd(t,e,n,i){Ig(t,e,n,i,null)}function Ig(t,e,n,i,o){let a,c,u,h,p,g,v,y;const b=e.pointStyle,_=e.rotation,k=e.radius;let j=(_||0)*nj;if(b&&typeof b=="object"&&(a=b.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){t.save(),t.translate(n,i),t.rotate(j),t.drawImage(b,-b.width/2,-b.height/2,b.width,b.height),t.restore();return}if(!(isNaN(k)||k<=0)){switch(t.beginPath(),b){default:o?t.ellipse(n,i,o/2,k,0,0,Be):t.arc(n,i,k,0,Be),t.closePath();break;case"triangle":g=o?o/2:k,t.moveTo(n+Math.sin(j)*g,i-Math.cos(j)*k),j+=Cp,t.lineTo(n+Math.sin(j)*g,i-Math.cos(j)*k),j+=Cp,t.lineTo(n+Math.sin(j)*g,i-Math.cos(j)*k),t.closePath();break;case"rectRounded":p=k*.516,h=k-p,c=Math.cos(j+js)*h,v=Math.cos(j+js)*(o?o/2-p:h),u=Math.sin(j+js)*h,y=Math.sin(j+js)*(o?o/2-p:h),t.arc(n-v,i-u,p,j-Ae,j-Ge),t.arc(n+y,i-c,p,j-Ge,j),t.arc(n+v,i+u,p,j,j+Ge),t.arc(n-y,i+c,p,j+Ge,j+Ae),t.closePath();break;case"rect":if(!_){h=Math.SQRT1_2*k,g=o?o/2:h,t.rect(n-g,i-h,2*g,2*h);break}j+=js;case"rectRot":v=Math.cos(j)*(o?o/2:k),c=Math.cos(j)*k,u=Math.sin(j)*k,y=Math.sin(j)*(o?o/2:k),t.moveTo(n-v,i-u),t.lineTo(n+y,i-c),t.lineTo(n+v,i+u),t.lineTo(n-y,i+c),t.closePath();break;case"crossRot":j+=js;case"cross":v=Math.cos(j)*(o?o/2:k),c=Math.cos(j)*k,u=Math.sin(j)*k,y=Math.sin(j)*(o?o/2:k),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c);break;case"star":v=Math.cos(j)*(o?o/2:k),c=Math.cos(j)*k,u=Math.sin(j)*k,y=Math.sin(j)*(o?o/2:k),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c),j+=js,v=Math.cos(j)*(o?o/2:k),c=Math.cos(j)*k,u=Math.sin(j)*k,y=Math.sin(j)*(o?o/2:k),t.moveTo(n-v,i-u),t.lineTo(n+v,i+u),t.moveTo(n+y,i-c),t.lineTo(n-y,i+c);break;case"line":c=o?o/2:Math.cos(j)*k,u=Math.sin(j)*k,t.moveTo(n-c,i-u),t.lineTo(n+c,i+u);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(j)*(o?o/2:k),i+Math.sin(j)*k);break;case!1:t.closePath();break}t.fill(),e.borderWidth>0&&t.stroke()}}function Er(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Ia(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Fa(t){t.restore()}function Cj(t,e,n,i,o){if(!e)return t.lineTo(n.x,n.y);if(o==="middle"){const a=(e.x+n.x)/2;t.lineTo(a,e.y),t.lineTo(a,n.y)}else o==="after"!=!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function Ej(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function Pj(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),Ee(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}function Rj(t,e,n,i,o){if(o.strikethrough||o.underline){const a=t.measureText(i),c=e-a.actualBoundingBoxLeft,u=e+a.actualBoundingBoxRight,h=n-a.actualBoundingBoxAscent,p=n+a.actualBoundingBoxDescent,g=o.strikethrough?(h+p)/2:p;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,g),t.lineTo(u,g),t.stroke()}}function Tj(t,e){const n=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=n}function Pr(t,e,n,i,o,a={}){const c=qe(e)?e:[e],u=a.strokeWidth>0&&a.strokeColor!=="";let h,p;for(t.save(),t.font=o.string,Pj(t,a),h=0;h<c.length;++h)p=c[h],a.backdrop&&Tj(t,a.backdrop),u&&(a.strokeColor&&(t.strokeStyle=a.strokeColor),Ee(a.strokeWidth)||(t.lineWidth=a.strokeWidth),t.strokeText(p,n,i,a.maxWidth)),t.fillText(p,n,i,a.maxWidth),Rj(t,n,i,p,a),i+=Number(o.lineHeight);t.restore()}function ka(t,e){const{x:n,y:i,w:o,h:a,radius:c}=e;t.arc(n+c.topLeft,i+c.topLeft,c.topLeft,1.5*Ae,Ae,!0),t.lineTo(n,i+a-c.bottomLeft),t.arc(n+c.bottomLeft,i+a-c.bottomLeft,c.bottomLeft,Ae,Ge,!0),t.lineTo(n+o-c.bottomRight,i+a),t.arc(n+o-c.bottomRight,i+a-c.bottomRight,c.bottomRight,Ge,0,!0),t.lineTo(n+o,i+c.topRight),t.arc(n+o-c.topRight,i+c.topRight,c.topRight,0,-Ge,!0),t.lineTo(n+c.topLeft,i)}const Aj=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Mj=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Dj(t,e){const n=(""+t).match(Aj);if(!n||n[1]==="normal")return e*1.2;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const Lj=t=>+t||0;function Hd(t,e){const n={},i=Se(e),o=i?Object.keys(e):e,a=Se(t)?i?c=>_e(t[c],t[e[c]]):c=>t[c]:()=>t;for(const c of o)n[c]=Lj(a(c));return n}function Fg(t){return Hd(t,{top:"y",right:"x",bottom:"y",left:"x"})}function di(t){return Hd(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Vt(t){const e=Fg(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function ft(t,e){t=t||{},e=e||Ue.font;let n=_e(t.size,e.size);typeof n=="string"&&(n=parseInt(n,10));let i=_e(t.style,e.style);i&&!(""+i).match(Mj)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const o={family:_e(t.family,e.family),lineHeight:Dj(_e(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:_e(t.weight,e.weight),string:""};return o.string=Nj(o),o}function na(t,e,n,i){let o,a,c;for(o=0,a=t.length;o<a;++o)if(c=t[o],c!==void 0&&c!==void 0)return c}function Oj(t,e,n){const{min:i,max:o}=t,a=Pg(e,(o-i)/2),c=(u,h)=>n&&u===0?0:u+h;return{min:c(i,-Math.abs(a)),max:c(o,a)}}function Os(t,e){return Object.assign(Object.create(t),e)}function Wd(t,e=[""],n,i,o=()=>t[0]){const a=n||t;typeof i>"u"&&(i=$g("_fallback",t));const c={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:a,_fallback:i,_getTarget:o,override:u=>Wd([u,...t],e,a,i)};return new Proxy(c,{deleteProperty(u,h){return delete u[h],delete u._keys,delete t[0][h],!0},get(u,h){return Hg(u,h,()=>Uj(h,e,t,u))},getOwnPropertyDescriptor(u,h){return Reflect.getOwnPropertyDescriptor(u._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(u,h){return Ip(u).includes(h)},ownKeys(u){return Ip(u)},set(u,h,p){const g=u._storage||(u._storage=o());return u[h]=g[h]=p,delete u._keys,!0}})}function fi(t,e,n,i){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:Bg(t,i),setContext:a=>fi(t,a,n,i),override:a=>fi(t.override(a),e,n,i)};return new Proxy(o,{deleteProperty(a,c){return delete a[c],delete t[c],!0},get(a,c,u){return Hg(a,c,()=>Ij(a,c,u))},getOwnPropertyDescriptor(a,c){return a._descriptors.allKeys?Reflect.has(t,c)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,c)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(a,c){return Reflect.has(t,c)},ownKeys(){return Reflect.ownKeys(t)},set(a,c,u){return t[c]=u,delete a[c],!0}})}function Bg(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:i,isScriptable:ss(n)?n:()=>n,isIndexable:ss(i)?i:()=>i}}const zj=(t,e)=>t?t+Od(e):e,$d=(t,e)=>Se(e)&&t!=="adapters"&&(Object.getPrototypeOf(e)===null||e.constructor===Object);function Hg(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e)||e==="constructor")return t[e];const i=n();return t[e]=i,i}function Ij(t,e,n){const{_proxy:i,_context:o,_subProxy:a,_descriptors:c}=t;let u=i[e];return ss(u)&&c.isScriptable(e)&&(u=Fj(e,u,t,n)),qe(u)&&u.length&&(u=Bj(e,u,t,c.isIndexable)),$d(e,u)&&(u=fi(u,o,a&&a[e],c)),u}function Fj(t,e,n,i){const{_proxy:o,_context:a,_subProxy:c,_stack:u}=n;if(u.has(t))throw new Error("Recursion detected: "+Array.from(u).join("->")+"->"+t);u.add(t);let h=e(a,c||i);return u.delete(t),$d(t,h)&&(h=Ud(o._scopes,o,t,h)),h}function Bj(t,e,n,i){const{_proxy:o,_context:a,_subProxy:c,_descriptors:u}=n;if(typeof a.index<"u"&&i(t))return e[a.index%e.length];if(Se(e[0])){const h=e,p=o._scopes.filter(g=>g!==h);e=[];for(const g of h){const v=Ud(p,o,t,g);e.push(fi(v,a,c&&c[t],u))}}return e}function Wg(t,e,n){return ss(t)?t(e,n):t}const Hj=(t,e)=>t===!0?e:typeof t=="string"?Ms(e,t):void 0;function Wj(t,e,n,i,o){for(const a of e){const c=Hj(n,a);if(c){t.add(c);const u=Wg(c._fallback,n,o);if(typeof u<"u"&&u!==n&&u!==i)return u}else if(c===!1&&typeof i<"u"&&n!==i)return null}return!1}function Ud(t,e,n,i){const o=e._rootScopes,a=Wg(e._fallback,n,i),c=[...t,...o],u=new Set;u.add(i);let h=zp(u,c,n,a||n,i);return h===null||typeof a<"u"&&a!==n&&(h=zp(u,c,a,h,i),h===null)?!1:Wd(Array.from(u),[""],o,a,()=>$j(e,n,i))}function zp(t,e,n,i,o){for(;n;)n=Wj(t,e,n,i,o);return n}function $j(t,e,n){const i=t._getTarget();e in i||(i[e]={});const o=i[e];return qe(o)&&Se(n)?n:o||{}}function Uj(t,e,n,i){let o;for(const a of e)if(o=$g(zj(a,t),n),typeof o<"u")return $d(t,o)?Ud(n,i,t,o):o}function $g(t,e){for(const n of e){if(!n)continue;const i=n[t];if(typeof i<"u")return i}}function Ip(t){let e=t._keys;return e||(e=t._keys=Vj(t._scopes)),e}function Vj(t){const e=new Set;for(const n of t)for(const i of Object.keys(n).filter(o=>!o.startsWith("_")))e.add(i);return Array.from(e)}const Yj=Number.EPSILON||1e-14,pi=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ug=t=>t==="x"?"y":"x";function qj(t,e,n,i){const o=t.skip?e:t,a=e,c=n.skip?e:n,u=md(a,o),h=md(c,a);let p=u/(u+h),g=h/(u+h);p=isNaN(p)?0:p,g=isNaN(g)?0:g;const v=i*p,y=i*g;return{previous:{x:a.x-v*(c.x-o.x),y:a.y-v*(c.y-o.y)},next:{x:a.x+y*(c.x-o.x),y:a.y+y*(c.y-o.y)}}}function Kj(t,e,n){const i=t.length;let o,a,c,u,h,p=pi(t,0);for(let g=0;g<i-1;++g)if(h=p,p=pi(t,g+1),!(!h||!p)){if(xr(e[g],0,Yj)){n[g]=n[g+1]=0;continue}o=n[g]/e[g],a=n[g+1]/e[g],u=Math.pow(o,2)+Math.pow(a,2),!(u<=9)&&(c=3/Math.sqrt(u),n[g]=o*c*e[g],n[g+1]=a*c*e[g])}}function Xj(t,e,n="x"){const i=Ug(n),o=t.length;let a,c,u,h=pi(t,0);for(let p=0;p<o;++p){if(c=u,u=h,h=pi(t,p+1),!u)continue;const g=u[n],v=u[i];c&&(a=(g-c[n])/3,u[`cp1${n}`]=g-a,u[`cp1${i}`]=v-a*e[p]),h&&(a=(h[n]-g)/3,u[`cp2${n}`]=g+a,u[`cp2${i}`]=v+a*e[p])}}function Qj(t,e="x"){const n=Ug(e),i=t.length,o=Array(i).fill(0),a=Array(i);let c,u,h,p=pi(t,0);for(c=0;c<i;++c)if(u=h,h=p,p=pi(t,c+1),!!h){if(p){const g=p[e]-h[e];o[c]=g!==0?(p[n]-h[n])/g:0}a[c]=u?p?fn(o[c-1])!==fn(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}Kj(t,o,a),Xj(t,a,e)}function sa(t,e,n){return Math.max(Math.min(t,n),e)}function Gj(t,e){let n,i,o,a,c,u=Er(t[0],e);for(n=0,i=t.length;n<i;++n)c=a,a=u,u=n<i-1&&Er(t[n+1],e),a&&(o=t[n],c&&(o.cp1x=sa(o.cp1x,e.left,e.right),o.cp1y=sa(o.cp1y,e.top,e.bottom)),u&&(o.cp2x=sa(o.cp2x,e.left,e.right),o.cp2y=sa(o.cp2y,e.top,e.bottom)))}function Jj(t,e,n,i,o){let a,c,u,h;if(e.spanGaps&&(t=t.filter(p=>!p.skip)),e.cubicInterpolationMode==="monotone")Qj(t,o);else{let p=i?t[t.length-1]:t[0];for(a=0,c=t.length;a<c;++a)u=t[a],h=qj(p,u,t[Math.min(a+1,c-(i?0:1))%c],e.tension),u.cp1x=h.previous.x,u.cp1y=h.previous.y,u.cp2x=h.next.x,u.cp2y=h.next.y,p=u}e.capBezierPoints&&Gj(t,n)}function Vd(){return typeof window<"u"&&typeof document<"u"}function Yd(t){let e=t.parentNode;return e&&e.toString()==="[object ShadowRoot]"&&(e=e.host),e}function Sa(t,e,n){let i;return typeof t=="string"?(i=parseInt(t,10),t.indexOf("%")!==-1&&(i=i/100*e.parentNode[n])):i=t,i}const Ba=t=>t.ownerDocument.defaultView.getComputedStyle(t,null);function Zj(t,e){return Ba(t).getPropertyValue(e)}const ew=["top","right","bottom","left"];function Rs(t,e,n){const i={};n=n?"-"+n:"";for(let o=0;o<4;o++){const a=ew[o];i[a]=parseFloat(t[e+"-"+a+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const tw=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function nw(t,e){const n=t.touches,i=n&&n.length?n[0]:t,{offsetX:o,offsetY:a}=i;let c=!1,u,h;if(tw(o,a,t.target))u=o,h=a;else{const p=e.getBoundingClientRect();u=i.clientX-p.left,h=i.clientY-p.top,c=!0}return{x:u,y:h,box:c}}function Ss(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:i}=e,o=Ba(n),a=o.boxSizing==="border-box",c=Rs(o,"padding"),u=Rs(o,"border","width"),{x:h,y:p,box:g}=nw(t,n),v=c.left+(g&&u.left),y=c.top+(g&&u.top);let{width:b,height:_}=e;return a&&(b-=c.width+u.width,_-=c.height+u.height),{x:Math.round((h-v)/b*n.width/i),y:Math.round((p-y)/_*n.height/i)}}function sw(t,e,n){let i,o;if(e===void 0||n===void 0){const a=t&&Yd(t);if(!a)e=t.clientWidth,n=t.clientHeight;else{const c=a.getBoundingClientRect(),u=Ba(a),h=Rs(u,"border","width"),p=Rs(u,"padding");e=c.width-p.width-h.width,n=c.height-p.height-h.height,i=Sa(u.maxWidth,a,"clientWidth"),o=Sa(u.maxHeight,a,"clientHeight")}}return{width:e,height:n,maxWidth:i||_a,maxHeight:o||_a}}const Zn=t=>Math.round(t*10)/10;function iw(t,e,n,i){const o=Ba(t),a=Rs(o,"margin"),c=Sa(o.maxWidth,t,"clientWidth")||_a,u=Sa(o.maxHeight,t,"clientHeight")||_a,h=sw(t,e,n);let{width:p,height:g}=h;if(o.boxSizing==="content-box"){const y=Rs(o,"border","width"),b=Rs(o,"padding");p-=b.width+y.width,g-=b.height+y.height}return p=Math.max(0,p-a.width),g=Math.max(0,i?p/i:g-a.height),p=Zn(Math.min(p,c,h.maxWidth)),g=Zn(Math.min(g,u,h.maxHeight)),p&&!g&&(g=Zn(p/2)),(e!==void 0||n!==void 0)&&i&&h.height&&g>h.height&&(g=h.height,p=Zn(Math.floor(g*i))),{width:p,height:g}}function Fp(t,e,n){const i=e||1,o=Zn(t.height*i),a=Zn(t.width*i);t.height=Zn(t.height),t.width=Zn(t.width);const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),t.currentDevicePixelRatio!==i||c.height!==o||c.width!==a?(t.currentDevicePixelRatio=i,c.height=o,c.width=a,t.ctx.setTransform(i,0,0,i,0,0),!0):!1}const rw=(function(){let t=!1;try{const e={get passive(){return t=!0,!1}};Vd()&&(window.addEventListener("test",null,e),window.removeEventListener("test",null,e))}catch{}return t})();function Bp(t,e){const n=Zj(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Ns(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function ow(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:i==="middle"?n<.5?t.y:e.y:i==="after"?n<1?t.y:e.y:n>0?e.y:t.y}}function aw(t,e,n,i){const o={x:t.cp2x,y:t.cp2y},a={x:e.cp1x,y:e.cp1y},c=Ns(t,o,n),u=Ns(o,a,n),h=Ns(a,e,n),p=Ns(c,u,n),g=Ns(u,h,n);return Ns(p,g,n)}const lw=function(t,e){return{x(n){return t+t+e-n},setWidth(n){e=n},textAlign(n){return n==="center"?n:n==="right"?"left":"right"},xPlus(n,i){return n-i},leftForLtr(n,i){return n-i}}},cw=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function ui(t,e,n){return t?lw(e,n):cw()}function Vg(t,e){let n,i;(e==="ltr"||e==="rtl")&&(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function Yg(t,e){e!==void 0&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function qg(t){return t==="angle"?{between:Cr,compare:lj,normalize:Mt}:{between:En,compare:(e,n)=>e-n,normalize:e=>e}}function Hp({start:t,end:e,count:n,loop:i,style:o}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:o}}function dw(t,e,n){const{property:i,start:o,end:a}=n,{between:c,normalize:u}=qg(i),h=e.length;let{start:p,end:g,loop:v}=t,y,b;if(v){for(p+=h,g+=h,y=0,b=h;y<b&&c(u(e[p%h][i]),o,a);++y)p--,g--;p%=h,g%=h}return g<p&&(g+=h),{start:p,end:g,loop:v,style:t.style}}function Kg(t,e,n){if(!n)return[t];const{property:i,start:o,end:a}=n,c=e.length,{compare:u,between:h,normalize:p}=qg(i),{start:g,end:v,loop:y,style:b}=dw(t,e,n),_=[];let k=!1,j=null,S,N,T;const A=()=>h(o,T,S)&&u(o,T)!==0,E=()=>u(a,S)===0||h(a,T,S),O=()=>k||A(),U=()=>!k||E();for(let $=g,Y=g;$<=v;++$)N=e[$%c],!N.skip&&(S=p(N[i]),S!==T&&(k=h(S,o,a),j===null&&O()&&(j=u(S,o)===0?$:Y),j!==null&&U()&&(_.push(Hp({start:j,end:$,loop:y,count:c,style:b})),j=null),Y=$,T=S));return j!==null&&_.push(Hp({start:j,end:v,loop:y,count:c,style:b})),_}function Xg(t,e){const n=[],i=t.segments;for(let o=0;o<i.length;o++){const a=Kg(i[o],t.points,e);a.length&&n.push(...a)}return n}function uw(t,e,n,i){let o=0,a=e-1;if(n&&!i)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(a+=o);a>o&&t[a%e].skip;)a--;return a%=e,{start:o,end:a}}function hw(t,e,n,i){const o=t.length,a=[];let c=e,u=t[e],h;for(h=e+1;h<=n;++h){const p=t[h%o];p.skip||p.stop?u.skip||(i=!1,a.push({start:e%o,end:(h-1)%o,loop:i}),e=c=p.stop?h:null):(c=h,u.skip&&(e=h)),u=p}return c!==null&&a.push({start:e%o,end:c%o,loop:i}),a}function fw(t,e){const n=t.points,i=t.options.spanGaps,o=n.length;if(!o)return[];const a=!!t._loop,{start:c,end:u}=uw(n,o,a,i);if(i===!0)return Wp(t,[{start:c,end:u,loop:a}],n,e);const h=u<c?u+o:u,p=!!t._fullLoop&&c===0&&u===o-1;return Wp(t,hw(n,c,h,p),n,e)}function Wp(t,e,n,i){return!i||!i.setContext||!n?e:pw(t,e,n,i)}function pw(t,e,n,i){const o=t._chart.getContext(),a=$p(t.options),{_datasetIndex:c,options:{spanGaps:u}}=t,h=n.length,p=[];let g=a,v=e[0].start,y=v;function b(_,k,j,S){const N=u?-1:1;if(_!==k){for(_+=h;n[_%h].skip;)_-=N;for(;n[k%h].skip;)k+=N;_%h!==k%h&&(p.push({start:_%h,end:k%h,loop:j,style:S}),g=S,v=k%h)}}for(const _ of e){v=u?v:_.start;let k=n[v%h],j;for(y=v+1;y<=_.end;y++){const S=n[y%h];j=$p(i.setContext(Os(o,{type:"segment",p0:k,p1:S,p0DataIndex:(y-1)%h,p1DataIndex:y%h,datasetIndex:c}))),mw(j,g)&&b(v,y-1,_.loop,g),k=S,g=j}v<y-1&&b(v,y-1,_.loop,g)}return p}function $p(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function mw(t,e){if(!e)return!1;const n=[],i=function(o,a){return Fd(a)?(n.includes(a)||n.push(a),n.indexOf(a)):a};return JSON.stringify(t,i)!==JSON.stringify(e,i)}function ia(t,e,n){return t.options.clip?t[n]:e[n]}function gw(t,e){const{xScale:n,yScale:i}=t;return n&&i?{left:ia(n,e,"left"),right:ia(n,e,"right"),top:ia(i,e,"top"),bottom:ia(i,e,"bottom")}:e}function Qg(t,e){const n=e._clip;if(n.disabled)return!1;const i=gw(e,t.chartArea);return{left:n.left===!1?0:i.left-(n.left===!0?0:n.left),right:n.right===!1?t.width:i.right+(n.right===!0?0:n.right),top:n.top===!1?0:i.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?t.height:i.bottom+(n.bottom===!0?0:n.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class xw{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,n,i,o){const a=n.listeners[o],c=n.duration;a.forEach(u=>u({chart:e,initial:n.initial,numSteps:c,currentStep:Math.min(i-n.start,c)}))}_refresh(){this._request||(this._running=!0,this._request=Lg.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let n=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;const a=i.items;let c=a.length-1,u=!1,h;for(;c>=0;--c)h=a[c],h._active?(h._total>i.duration&&(i.duration=h._total),h.tick(e),u=!0):(a[c]=a[a.length-1],a.pop());u&&(o.draw(),this._notify(o,i,e,"progress")),a.length||(i.running=!1,this._notify(o,i,e,"complete"),i.initial=!1),n+=a.length}),this._lastDate=e,n===0&&(this._running=!1)}_getAnims(e){const n=this._charts;let i=n.get(e);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},n.set(e,i)),i}listen(e,n,i){this._getAnims(e).listeners[n].push(i)}add(e,n){!n||!n.length||this._getAnims(e).items.push(...n)}has(e){return this._getAnims(e).items.length>0}start(e){const n=this._charts.get(e);n&&(n.running=!0,n.start=Date.now(),n.duration=n.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(e){if(!this._running)return!1;const n=this._charts.get(e);return!(!n||!n.running||!n.items.length)}stop(e){const n=this._charts.get(e);if(!n||!n.items.length)return;const i=n.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();n.items=[],this._notify(e,n,Date.now(),"complete")}remove(e){return this._charts.delete(e)}}var kn=new xw;const Up="transparent",vw={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Mp(t||Up),o=i.valid&&Mp(e||Up);return o&&o.valid?o.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class yw{constructor(e,n,i,o){const a=n[i];o=na([e.to,o,a,e.from]);const c=na([e.from,a,o]);this._active=!0,this._fn=e.fn||vw[e.type||typeof c],this._easing=vr[e.easing]||vr.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=n,this._prop=i,this._from=c,this._to=o,this._promises=void 0}active(){return this._active}update(e,n,i){if(this._active){this._notify(!1);const o=this._target[this._prop],a=i-this._start,c=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(c,e.duration)),this._total+=a,this._loop=!!e.loop,this._to=na([e.to,n,o,e.from]),this._from=na([e.from,o,n])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){const n=e-this._start,i=this._duration,o=this._prop,a=this._from,c=this._loop,u=this._to;let h;if(this._active=a!==u&&(c||n<i),!this._active){this._target[o]=u,this._notify(!0);return}if(n<0){this._target[o]=a;return}h=n/i%2,h=c&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[o]=this._fn(a,u,h)}wait(){const e=this._promises||(this._promises=[]);return new Promise((n,i)=>{e.push({res:n,rej:i})})}_notify(e){const n=e?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][n]()}}class Gg{constructor(e,n){this._chart=e,this._properties=new Map,this.configure(n)}configure(e){if(!Se(e))return;const n=Object.keys(Ue.animation),i=this._properties;Object.getOwnPropertyNames(e).forEach(o=>{const a=e[o];if(!Se(a))return;const c={};for(const u of n)c[u]=a[u];(qe(a.properties)&&a.properties||[o]).forEach(u=>{(u===o||!i.has(u))&&i.set(u,c)})})}_animateOptions(e,n){const i=n.options,o=jw(e,i);if(!o)return[];const a=this._createAnimations(o,i);return i.$shared&&bw(e.options.$animations,i).then(()=>{e.options=i},()=>{}),a}_createAnimations(e,n){const i=this._properties,o=[],a=e.$animations||(e.$animations={}),c=Object.keys(n),u=Date.now();let h;for(h=c.length-1;h>=0;--h){const p=c[h];if(p.charAt(0)==="$")continue;if(p==="options"){o.push(...this._animateOptions(e,n));continue}const g=n[p];let v=a[p];const y=i.get(p);if(v)if(y&&v.active()){v.update(y,g,u);continue}else v.cancel();if(!y||!y.duration){e[p]=g;continue}a[p]=v=new yw(y,e,p,g),o.push(v)}return o}update(e,n){if(this._properties.size===0){Object.assign(e,n);return}const i=this._createAnimations(e,n);if(i.length)return kn.add(this._chart,i),!0}}function bw(t,e){const n=[],i=Object.keys(e);for(let o=0;o<i.length;o++){const a=t[i[o]];a&&a.active()&&n.push(a.wait())}return Promise.all(n)}function jw(t,e){if(!e)return;let n=t.options;if(!n){t.options=e;return}return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function Vp(t,e){const n=t&&t.options||{},i=n.reverse,o=n.min===void 0?e:0,a=n.max===void 0?e:0;return{start:i?a:o,end:i?o:a}}function ww(t,e,n){if(n===!1)return!1;const i=Vp(t,n),o=Vp(e,n);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function _w(t){let e,n,i,o;return Se(t)?(e=t.top,n=t.right,i=t.bottom,o=t.left):e=n=i=o=t,{top:e,right:n,bottom:i,left:o,disabled:t===!1}}function Jg(t,e){const n=[],i=t._getSortedDatasetMetas(e);let o,a;for(o=0,a=i.length;o<a;++o)n.push(i[o].index);return n}function Yp(t,e,n,i={}){const o=t.keys,a=i.mode==="single";let c,u,h,p;if(e===null)return;let g=!1;for(c=0,u=o.length;c<u;++c){if(h=+o[c],h===n){if(g=!0,i.all)continue;break}p=t.values[h],pt(p)&&(a||e===0||fn(e)===fn(p))&&(e+=p)}return!g&&!i.all?0:e}function kw(t,e){const{iScale:n,vScale:i}=e,o=n.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",c=Object.keys(t),u=new Array(c.length);let h,p,g;for(h=0,p=c.length;h<p;++h)g=c[h],u[h]={[o]:g,[a]:t[g]};return u}function Xc(t,e){const n=t&&t.options.stacked;return n||n===void 0&&e.stack!==void 0}function Sw(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function Nw(t){const{min:e,max:n,minDefined:i,maxDefined:o}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:o?n:Number.POSITIVE_INFINITY}}function Cw(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function qp(t,e,n,i){for(const o of e.getMatchingVisibleMetas(i).reverse()){const a=t[o.index];if(n&&a>0||!n&&a<0)return o.index}return null}function Kp(t,e){const{chart:n,_cachedMeta:i}=t,o=n._stacks||(n._stacks={}),{iScale:a,vScale:c,index:u}=i,h=a.axis,p=c.axis,g=Sw(a,c,i),v=e.length;let y;for(let b=0;b<v;++b){const _=e[b],{[h]:k,[p]:j}=_,S=_._stacks||(_._stacks={});y=S[p]=Cw(o,g,k),y[u]=j,y._top=qp(y,c,!0,i.type),y._bottom=qp(y,c,!1,i.type);const N=y._visualValues||(y._visualValues={});N[u]=j}}function Qc(t,e){const n=t.scales;return Object.keys(n).filter(i=>n[i].axis===e).shift()}function Ew(t,e){return Os(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function Pw(t,e,n){return Os(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function rr(t,e){const n=t.controller.index,i=t.vScale&&t.vScale.axis;if(i){e=e||t._parsed;for(const o of e){const a=o._stacks;if(!a||a[i]===void 0||a[i][n]===void 0)return;delete a[i][n],a[i]._visualValues!==void 0&&a[i]._visualValues[n]!==void 0&&delete a[i]._visualValues[n]}}}const Gc=t=>t==="reset"||t==="none",Xp=(t,e)=>e?t:Object.assign({},t),Rw=(t,e,n)=>t&&!e.hidden&&e._stacked&&{keys:Jg(n,!0),values:null};class Ts{constructor(e,n){this.chart=e,this._ctx=e.ctx,this.index=n,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=Xc(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(e){this.index!==e&&rr(this._cachedMeta),this.index=e}linkScales(){const e=this.chart,n=this._cachedMeta,i=this.getDataset(),o=(v,y,b,_)=>v==="x"?y:v==="r"?_:b,a=n.xAxisID=_e(i.xAxisID,Qc(e,"x")),c=n.yAxisID=_e(i.yAxisID,Qc(e,"y")),u=n.rAxisID=_e(i.rAxisID,Qc(e,"r")),h=n.indexAxis,p=n.iAxisID=o(h,a,c,u),g=n.vAxisID=o(h,c,a,u);n.xScale=this.getScaleForId(a),n.yScale=this.getScaleForId(c),n.rScale=this.getScaleForId(u),n.iScale=this.getScaleForId(p),n.vScale=this.getScaleForId(g)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){const n=this._cachedMeta;return e===n.iScale?n.vScale:n.iScale}reset(){this._update("reset")}_destroy(){const e=this._cachedMeta;this._data&&Rp(this._data,this),e._stacked&&rr(e)}_dataCheck(){const e=this.getDataset(),n=e.data||(e.data=[]),i=this._data;if(Se(n)){const o=this._cachedMeta;this._data=kw(n,o)}else if(i!==n){if(i){Rp(i,this);const o=this._cachedMeta;rr(o),o._parsed=[]}n&&Object.isExtensible(n)&&hj(n,this),this._syncList=[],this._data=n}}addElements(){const e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){const n=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const a=n._stacked;n._stacked=Xc(n.vScale,n),n.stack!==i.stack&&(o=!0,rr(n),n.stack=i.stack),this._resyncElements(e),(o||a!==n._stacked)&&(Kp(this,n._parsed),n._stacked=Xc(n.vScale,n))}configure(){const e=this.chart.config,n=e.datasetScopeKeys(this._type),i=e.getOptionScopes(this.getDataset(),n,!0);this.options=e.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,n){const{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:c}=i,u=a.axis;let h=e===0&&n===o.length?!0:i._sorted,p=e>0&&i._parsed[e-1],g,v,y;if(this._parsing===!1)i._parsed=o,i._sorted=!0,y=o;else{qe(o[e])?y=this.parseArrayData(i,o,e,n):Se(o[e])?y=this.parseObjectData(i,o,e,n):y=this.parsePrimitiveData(i,o,e,n);const b=()=>v[u]===null||p&&v[u]<p[u];for(g=0;g<n;++g)i._parsed[g+e]=v=y[g],h&&(b()&&(h=!1),p=v);i._sorted=h}c&&Kp(this,y)}parsePrimitiveData(e,n,i,o){const{iScale:a,vScale:c}=e,u=a.axis,h=c.axis,p=a.getLabels(),g=a===c,v=new Array(o);let y,b,_;for(y=0,b=o;y<b;++y)_=y+i,v[y]={[u]:g||a.parse(p[_],_),[h]:c.parse(n[_],_)};return v}parseArrayData(e,n,i,o){const{xScale:a,yScale:c}=e,u=new Array(o);let h,p,g,v;for(h=0,p=o;h<p;++h)g=h+i,v=n[g],u[h]={x:a.parse(v[0],g),y:c.parse(v[1],g)};return u}parseObjectData(e,n,i,o){const{xScale:a,yScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=new Array(o);let g,v,y,b;for(g=0,v=o;g<v;++g)y=g+i,b=n[y],p[g]={x:a.parse(Ms(b,u),y),y:c.parse(Ms(b,h),y)};return p}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,n,i){const o=this.chart,a=this._cachedMeta,c=n[e.axis],u={keys:Jg(o,!0),values:n._stacks[e.axis]._visualValues};return Yp(u,c,a.index,{mode:i})}updateRangeFromParsed(e,n,i,o){const a=i[n.axis];let c=a===null?NaN:a;const u=o&&i._stacks[n.axis];o&&u&&(o.values=u,c=Yp(o,a,this._cachedMeta.index)),e.min=Math.min(e.min,c),e.max=Math.max(e.max,c)}getMinMax(e,n){const i=this._cachedMeta,o=i._parsed,a=i._sorted&&e===i.iScale,c=o.length,u=this._getOtherScale(e),h=Rw(n,i,this.chart),p={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:g,max:v}=Nw(u);let y,b;function _(){b=o[y];const k=b[u.axis];return!pt(b[e.axis])||g>k||v<k}for(y=0;y<c&&!(!_()&&(this.updateRangeFromParsed(p,e,b,h),a));++y);if(a){for(y=c-1;y>=0;--y)if(!_()){this.updateRangeFromParsed(p,e,b,h);break}}return p}getAllParsedValues(e){const n=this._cachedMeta._parsed,i=[];let o,a,c;for(o=0,a=n.length;o<a;++o)c=n[o][e.axis],pt(c)&&i.push(c);return i}getMaxOverflow(){return!1}getLabelAndValue(e){const n=this._cachedMeta,i=n.iScale,o=n.vScale,a=this.getParsed(e);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(e){const n=this._cachedMeta;this.update(e||"default"),n._clip=_w(_e(this.options.clip,ww(n.xScale,n.yScale,this.getMaxOverflow())))}update(e){}draw(){const e=this._ctx,n=this.chart,i=this._cachedMeta,o=i.data||[],a=n.chartArea,c=[],u=this._drawStart||0,h=this._drawCount||o.length-u,p=this.options.drawActiveElementsOnTop;let g;for(i.dataset&&i.dataset.draw(e,a,u,h),g=u;g<u+h;++g){const v=o[g];v.hidden||(v.active&&p?c.push(v):v.draw(e,a))}for(g=0;g<c.length;++g)c[g].draw(e,a)}getStyle(e,n){const i=n?"active":"default";return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(e||0,i)}getContext(e,n,i){const o=this.getDataset();let a;if(e>=0&&e<this._cachedMeta.data.length){const c=this._cachedMeta.data[e];a=c.$context||(c.$context=Pw(this.getContext(),e,c)),a.parsed=this.getParsed(e),a.raw=o.data[e],a.index=a.dataIndex=e}else a=this.$context||(this.$context=Ew(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!n,a.mode=i,a}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,n){return this._resolveElementOptions(this.dataElementType.id,n,e)}_resolveElementOptions(e,n="default",i){const o=n==="active",a=this._cachedDataOpts,c=e+"-"+n,u=a[c],h=this.enableOptionSharing&&Sr(i);if(u)return Xp(u,h);const p=this.chart.config,g=p.datasetElementScopeKeys(this._type,e),v=o?[`${e}Hover`,"hover",e,""]:[e,""],y=p.getOptionScopes(this.getDataset(),g),b=Object.keys(Ue.elements[e]),_=()=>this.getContext(i,o,n),k=p.resolveNamedOptions(y,b,_,v);return k.$shared&&(k.$shared=h,a[c]=Object.freeze(Xp(k,h))),k}_resolveAnimations(e,n,i){const o=this.chart,a=this._cachedDataOpts,c=`animation-${n}`,u=a[c];if(u)return u;let h;if(o.options.animation!==!1){const g=this.chart.config,v=g.datasetAnimationScopeKeys(this._type,n),y=g.getOptionScopes(this.getDataset(),v);h=g.createResolver(y,this.getContext(e,i,n))}const p=new Gg(o,h&&h.animations);return h&&h._cacheable&&(a[c]=Object.freeze(p)),p}getSharedOptions(e){if(e.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},e))}includeOptions(e,n){return!n||Gc(e)||this.chart._animationsDisabled}_getSharedOptions(e,n){const i=this.resolveDataElementOptions(e,n),o=this._sharedOptions,a=this.getSharedOptions(i),c=this.includeOptions(n,a)||a!==o;return this.updateSharedOptions(a,n,i),{sharedOptions:a,includeOptions:c}}updateElement(e,n,i,o){Gc(o)?Object.assign(e,i):this._resolveAnimations(n,o).update(e,i)}updateSharedOptions(e,n,i){e&&!Gc(n)&&this._resolveAnimations(void 0,n).update(e,i)}_setStyle(e,n,i,o){e.active=o;const a=this.getStyle(n,o);this._resolveAnimations(n,i,o).update(e,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(e,n,i){this._setStyle(e,i,"active",!1)}setHoverStyle(e,n,i){this._setStyle(e,i,"active",!0)}_removeDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!1)}_setDatasetHoverStyle(){const e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,"active",!0)}_resyncElements(e){const n=this._data,i=this._cachedMeta.data;for(const[u,h,p]of this._syncList)this[u](h,p);this._syncList=[];const o=i.length,a=n.length,c=Math.min(a,o);c&&this.parse(0,c),a>o?this._insertElements(o,a-o,e):a<o&&this._removeElements(a,o-a)}_insertElements(e,n,i=!0){const o=this._cachedMeta,a=o.data,c=e+n;let u;const h=p=>{for(p.length+=n,u=p.length-1;u>=c;u--)p[u]=p[u-n]};for(h(a),u=e;u<c;++u)a[u]=new this.dataElementType;this._parsing&&h(o._parsed),this.parse(e,n),i&&this.updateElements(a,e,n,"reset")}updateElements(e,n,i,o){}_removeElements(e,n){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(e,n);i._stacked&&rr(i,o)}i.data.splice(e,n)}_sync(e){if(this._parsing)this._syncList.push(e);else{const[n,i,o]=e;this[n](i,o)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){const e=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-e,e])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(e,n){n&&this._sync(["_removeElements",e,n]);const i=arguments.length-2;i&&this._sync(["_insertElements",e,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}ue(Ts,"defaults",{}),ue(Ts,"datasetElementType",null),ue(Ts,"dataElementType",null);function Tw(t,e){if(!t._cache.$bar){const n=t.getMatchingVisibleMetas(e);let i=[];for(let o=0,a=n.length;o<a;o++)i=i.concat(n[o].controller.getAllParsedValues(t));t._cache.$bar=Dg(i.sort((o,a)=>o-a))}return t._cache.$bar}function Aw(t){const e=t.iScale,n=Tw(e,t.type);let i=e._length,o,a,c,u;const h=()=>{c===32767||c===-32768||(Sr(u)&&(i=Math.min(i,Math.abs(c-u)||i)),u=c)};for(o=0,a=n.length;o<a;++o)c=e.getPixelForValue(n[o]),h();for(u=void 0,o=0,a=e.ticks.length;o<a;++o)c=e.getPixelForTick(o),h();return i}function Mw(t,e,n,i){const o=n.barThickness;let a,c;return Ee(o)?(a=e.min*n.categoryPercentage,c=n.barPercentage):(a=o*i,c=1),{chunk:a/i,ratio:c,start:e.pixels[t]-a/2}}function Dw(t,e,n,i){const o=e.pixels,a=o[t];let c=t>0?o[t-1]:null,u=t<o.length-1?o[t+1]:null;const h=n.categoryPercentage;c===null&&(c=a-(u===null?e.end-e.start:u-a)),u===null&&(u=a+a-c);const p=a-(a-Math.min(c,u))/2*h;return{chunk:Math.abs(u-c)/2*h/i,ratio:n.barPercentage,start:p}}function Lw(t,e,n,i){const o=n.parse(t[0],i),a=n.parse(t[1],i),c=Math.min(o,a),u=Math.max(o,a);let h=c,p=u;Math.abs(c)>Math.abs(u)&&(h=u,p=c),e[n.axis]=p,e._custom={barStart:h,barEnd:p,start:o,end:a,min:c,max:u}}function Zg(t,e,n,i){return qe(t)?Lw(t,e,n,i):e[n.axis]=n.parse(t,i),e}function Qp(t,e,n,i){const o=t.iScale,a=t.vScale,c=o.getLabels(),u=o===a,h=[];let p,g,v,y;for(p=n,g=n+i;p<g;++p)y=e[p],v={},v[o.axis]=u||o.parse(c[p],p),h.push(Zg(y,v,a,p));return h}function Jc(t){return t&&t.barStart!==void 0&&t.barEnd!==void 0}function Ow(t,e,n){return t!==0?fn(t):(e.isHorizontal()?1:-1)*(e.min>=n?1:-1)}function zw(t){let e,n,i,o,a;return t.horizontal?(e=t.base>t.x,n="left",i="right"):(e=t.base<t.y,n="bottom",i="top"),e?(o="end",a="start"):(o="start",a="end"),{start:n,end:i,reverse:e,top:o,bottom:a}}function Iw(t,e,n,i){let o=e.borderSkipped;const a={};if(!o){t.borderSkipped=a;return}if(o===!0){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:c,end:u,reverse:h,top:p,bottom:g}=zw(t);o==="middle"&&n&&(t.enableBorderRadius=!0,(n._top||0)===i?o=p:(n._bottom||0)===i?o=g:(a[Gp(g,c,u,h)]=!0,o=p)),a[Gp(o,c,u,h)]=!0,t.borderSkipped=a}function Gp(t,e,n,i){return i?(t=Fw(t,e,n),t=Jp(t,n,e)):t=Jp(t,e,n),t}function Fw(t,e,n){return t===e?n:t===n?e:t}function Jp(t,e,n){return t==="start"?e:t==="end"?n:t}function Bw(t,{inflateAmount:e},n){t.inflateAmount=e==="auto"?n===1?.33:0:e}class pa extends Ts{parsePrimitiveData(e,n,i,o){return Qp(e,n,i,o)}parseArrayData(e,n,i,o){return Qp(e,n,i,o)}parseObjectData(e,n,i,o){const{iScale:a,vScale:c}=e,{xAxisKey:u="x",yAxisKey:h="y"}=this._parsing,p=a.axis==="x"?u:h,g=c.axis==="x"?u:h,v=[];let y,b,_,k;for(y=i,b=i+o;y<b;++y)k=n[y],_={},_[a.axis]=a.parse(Ms(k,p),y),v.push(Zg(Ms(k,g),_,c,y));return v}updateRangeFromParsed(e,n,i,o){super.updateRangeFromParsed(e,n,i,o);const a=i._custom;a&&n===this._cachedMeta.vScale&&(e.min=Math.min(e.min,a.min),e.max=Math.max(e.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(e){const n=this._cachedMeta,{iScale:i,vScale:o}=n,a=this.getParsed(e),c=a._custom,u=Jc(c)?"["+c.start+", "+c.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:u}}initialize(){this.enableOptionSharing=!0,super.initialize();const e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){const n=this._cachedMeta;this.updateElements(n.data,0,n.data.length,e)}updateElements(e,n,i,o){const a=o==="reset",{index:c,_cachedMeta:{vScale:u}}=this,h=u.getBasePixel(),p=u.isHorizontal(),g=this._getRuler(),{sharedOptions:v,includeOptions:y}=this._getSharedOptions(n,o);for(let b=n;b<n+i;b++){const _=this.getParsed(b),k=a||Ee(_[u.axis])?{base:h,head:h}:this._calculateBarValuePixels(b),j=this._calculateBarIndexPixels(b,g),S=(_._stacks||{})[u.axis],N={horizontal:p,base:k.base,enableBorderRadius:!S||Jc(_._custom)||c===S._top||c===S._bottom,x:p?k.head:j.center,y:p?j.center:k.head,height:p?j.size:Math.abs(k.size),width:p?Math.abs(k.size):j.size};y&&(N.options=v||this.resolveDataElementOptions(b,e[b].active?"active":o));const T=N.options||e[b].options;Iw(N,T,S,c),Bw(N,T,g.ratio),this.updateElement(e[b],b,N,o)}}_getStacks(e,n){const{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(g=>g.controller.options.grouped),a=i.options.stacked,c=[],u=this._cachedMeta.controller.getParsed(n),h=u&&u[i.axis],p=g=>{const v=g._parsed.find(b=>b[i.axis]===h),y=v&&v[g.vScale.axis];if(Ee(y)||isNaN(y))return!0};for(const g of o)if(!(n!==void 0&&p(g))&&((a===!1||c.indexOf(g.stack)===-1||a===void 0&&g.stack===void 0)&&c.push(g.stack),g.index===e))break;return c.length||c.push(void 0),c}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const e=this.chart.scales,n=this.chart.options.indexAxis;return Object.keys(e).filter(i=>e[i].axis===n).shift()}_getAxis(){const e={},n=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)e[_e(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,n)]=!0;return Object.keys(e)}_getStackIndex(e,n,i){const o=this._getStacks(e,i),a=n!==void 0?o.indexOf(n):-1;return a===-1?o.length-1:a}_getRuler(){const e=this.options,n=this._cachedMeta,i=n.iScale,o=[];let a,c;for(a=0,c=n.data.length;a<c;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));const u=e.barThickness;return{min:u||Aw(n),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:e.grouped,ratio:u?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){const{_cachedMeta:{vScale:n,_stacked:i,index:o},options:{base:a,minBarLength:c}}=this,u=a||0,h=this.getParsed(e),p=h._custom,g=Jc(p);let v=h[n.axis],y=0,b=i?this.applyStack(n,h,i):v,_,k;b!==v&&(y=b-v,b=v),g&&(v=p.barStart,b=p.barEnd-p.barStart,v!==0&&fn(v)!==fn(p.barEnd)&&(y=0),y+=v);const j=!Ee(a)&&!g?a:y;let S=n.getPixelForValue(j);if(this.chart.getDataVisibility(e)?_=n.getPixelForValue(y+b):_=S,k=_-S,Math.abs(k)<c){k=Ow(k,n,u)*c,v===u&&(S-=k/2);const N=n.getPixelForDecimal(0),T=n.getPixelForDecimal(1),A=Math.min(N,T),E=Math.max(N,T);S=Math.max(Math.min(S,E),A),_=S+k,i&&!g&&(h._stacks[n.axis]._visualValues[o]=n.getValueForPixel(_)-n.getValueForPixel(S))}if(S===n.getPixelForValue(u)){const N=fn(k)*n.getLineWidthForValue(u)/2;S+=N,k-=N}return{size:k,base:S,head:_,center:_+k/2}}_calculateBarIndexPixels(e,n){const i=n.scale,o=this.options,a=o.skipNull,c=_e(o.maxBarThickness,1/0);let u,h;const p=this._getAxisCount();if(n.grouped){const g=a?this._getStackCount(e):n.stackCount,v=o.barThickness==="flex"?Dw(e,n,o,g*p):Mw(e,n,o,g*p),y=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,b=this._getAxis().indexOf(_e(y,this.getFirstScaleIdForIndexAxis())),_=this._getStackIndex(this.index,this._cachedMeta.stack,a?e:void 0)+b;u=v.start+v.chunk*_+v.chunk/2,h=Math.min(c,v.chunk*v.ratio)}else u=i.getPixelForValue(this.getParsed(e)[i.axis],e),h=Math.min(c,n.min*n.ratio);return{base:u-h/2,head:u+h/2,center:u,size:h}}draw(){const e=this._cachedMeta,n=e.vScale,i=e.data,o=i.length;let a=0;for(;a<o;++a)this.getParsed(a)[n.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}}ue(pa,"id","bar"),ue(pa,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),ue(pa,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});function Hw(t,e,n){let i=1,o=1,a=0,c=0;if(e<Be){const u=t,h=u+e,p=Math.cos(u),g=Math.sin(u),v=Math.cos(h),y=Math.sin(h),b=(T,A,E)=>Cr(T,u,h,!0)?1:Math.max(A,A*n,E,E*n),_=(T,A,E)=>Cr(T,u,h,!0)?-1:Math.min(A,A*n,E,E*n),k=b(0,p,v),j=b(Ge,g,y),S=_(Ae,p,v),N=_(Ae+Ge,g,y);i=(k-S)/2,o=(j-N)/2,a=-(k+S)/2,c=-(j+N)/2}return{ratioX:i,ratioY:o,offsetX:a,offsetY:c}}class hr extends Ts{constructor(e,n){super(e,n),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,n){const i=this.getDataset().data,o=this._cachedMeta;if(this._parsing===!1)o._parsed=i;else{let a=h=>+i[h];if(Se(i[e])){const{key:h="value"}=this._parsing;a=p=>+Ms(i[p],h)}let c,u;for(c=e,u=e+n;c<u;++c)o._parsed[c]=a(c)}}_getRotation(){return Cn(this.options.rotation-90)}_getCircumference(){return Cn(this.options.circumference)}_getRotationExtents(){let e=Be,n=-Be;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const o=this.chart.getDatasetMeta(i).controller,a=o._getRotation(),c=o._getCircumference();e=Math.min(e,a),n=Math.max(n,a+c)}return{rotation:e,circumference:n-e}}update(e){const n=this.chart,{chartArea:i}=n,o=this._cachedMeta,a=o.data,c=this.getMaxBorderWidth()+this.getMaxOffset(a)+this.options.spacing,u=Math.max((Math.min(i.width,i.height)-c)/2,0),h=Math.min(X1(this.options.cutout,u),1),p=this._getRingWeight(this.index),{circumference:g,rotation:v}=this._getRotationExtents(),{ratioX:y,ratioY:b,offsetX:_,offsetY:k}=Hw(v,g,h),j=(i.width-c)/y,S=(i.height-c)/b,N=Math.max(Math.min(j,S)/2,0),T=Pg(this.options.radius,N),A=Math.max(T*h,0),E=(T-A)/this._getVisibleDatasetWeightTotal();this.offsetX=_*T,this.offsetY=k*T,o.total=this.calculateTotal(),this.outerRadius=T-E*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-E*p,0),this.updateElements(a,0,a.length,e)}_circumference(e,n){const i=this.options,o=this._cachedMeta,a=this._getCircumference();return n&&i.animation.animateRotate||!this.chart.getDataVisibility(e)||o._parsed[e]===null||o.data[e].hidden?0:this.calculateCircumference(o._parsed[e]*a/Be)}updateElements(e,n,i,o){const a=o==="reset",c=this.chart,u=c.chartArea,p=c.options.animation,g=(u.left+u.right)/2,v=(u.top+u.bottom)/2,y=a&&p.animateScale,b=y?0:this.innerRadius,_=y?0:this.outerRadius,{sharedOptions:k,includeOptions:j}=this._getSharedOptions(n,o);let S=this._getRotation(),N;for(N=0;N<n;++N)S+=this._circumference(N,a);for(N=n;N<n+i;++N){const T=this._circumference(N,a),A=e[N],E={x:g+this.offsetX,y:v+this.offsetY,startAngle:S,endAngle:S+T,circumference:T,outerRadius:_,innerRadius:b};j&&(E.options=k||this.resolveDataElementOptions(N,A.active?"active":o)),S+=T,this.updateElement(A,N,E,o)}}calculateTotal(){const e=this._cachedMeta,n=e.data;let i=0,o;for(o=0;o<n.length;o++){const a=e._parsed[o];a!==null&&!isNaN(a)&&this.chart.getDataVisibility(o)&&!n[o].hidden&&(i+=Math.abs(a))}return i}calculateCircumference(e){const n=this._cachedMeta.total;return n>0&&!isNaN(e)?Be*(Math.abs(e)/n):0}getLabelAndValue(e){const n=this._cachedMeta,i=this.chart,o=i.data.labels||[],a=Bd(n._parsed[e],i.options.locale);return{label:o[e]||"",value:a}}getMaxBorderWidth(e){let n=0;const i=this.chart;let o,a,c,u,h;if(!e){for(o=0,a=i.data.datasets.length;o<a;++o)if(i.isDatasetVisible(o)){c=i.getDatasetMeta(o),e=c.data,u=c.controller;break}}if(!e)return 0;for(o=0,a=e.length;o<a;++o)h=u.resolveDataElementOptions(o),h.borderAlign!=="inner"&&(n=Math.max(n,h.borderWidth||0,h.hoverBorderWidth||0));return n}getMaxOffset(e){let n=0;for(let i=0,o=e.length;i<o;++i){const a=this.resolveDataElementOptions(i);n=Math.max(n,a.offset||0,a.hoverOffset||0)}return n}_getRingWeightOffset(e){let n=0;for(let i=0;i<e;++i)this.chart.isDatasetVisible(i)&&(n+=this._getRingWeight(i));return n}_getRingWeight(e){return Math.max(_e(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}ue(hr,"id","doughnut"),ue(hr,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),ue(hr,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),ue(hr,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const n=e.data,{labels:{pointStyle:i,textAlign:o,color:a,useBorderRadius:c,borderRadius:u}}=e.legend.options;return n.labels.length&&n.datasets.length?n.labels.map((h,p)=>{const v=e.getDatasetMeta(0).controller.getStyle(p);return{text:h,fillStyle:v.backgroundColor,fontColor:a,hidden:!e.getDataVisibility(p),lineDash:v.borderDash,lineDashOffset:v.borderDashOffset,lineJoin:v.borderJoinStyle,lineWidth:v.borderWidth,strokeStyle:v.borderColor,textAlign:o,pointStyle:i,borderRadius:c&&(u||v.borderRadius),index:p}}):[]}},onClick(e,n,i){i.chart.toggleDataVisibility(n.index),i.chart.update()}}}});class ma extends Ts{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){const n=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=n,c=this.chart._animationsDisabled;let{start:u,count:h}=mj(n,o,c);this._drawStart=u,this._drawCount=h,gj(n)&&(u=0,h=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;const p=this.resolveDatasetElementOptions(e);this.options.showLine||(p.borderWidth=0),p.segment=this.options.segment,this.updateElement(i,void 0,{animated:!c,options:p},e),this.updateElements(o,u,h,e)}updateElements(e,n,i,o){const a=o==="reset",{iScale:c,vScale:u,_stacked:h,_dataset:p}=this._cachedMeta,{sharedOptions:g,includeOptions:v}=this._getSharedOptions(n,o),y=c.axis,b=u.axis,{spanGaps:_,segment:k}=this.options,j=Nr(_)?_:Number.POSITIVE_INFINITY,S=this.chart._animationsDisabled||a||o==="none",N=n+i,T=e.length;let A=n>0&&this.getParsed(n-1);for(let E=0;E<T;++E){const O=e[E],U=S?O:{};if(E<n||E>=N){U.skip=!0;continue}const $=this.getParsed(E),Y=Ee($[b]),Q=U[y]=c.getPixelForValue($[y],E),se=U[b]=a||Y?u.getBasePixel():u.getPixelForValue(h?this.applyStack(u,$,h):$[b],E);U.skip=isNaN(Q)||isNaN(se)||Y,U.stop=E>0&&Math.abs($[y]-A[y])>j,k&&(U.parsed=$,U.raw=p.data[E]),v&&(U.options=g||this.resolveDataElementOptions(E,O.active?"active":o)),S||this.updateElement(O,E,U,o),A=$}}getMaxOverflow(){const e=this._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,o=e.data||[];if(!o.length)return i;const a=o[0].size(this.resolveDataElementOptions(0)),c=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,c)/2}draw(){const e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}}ue(ma,"id","line"),ue(ma,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),ue(ma,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function _s(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class qd{constructor(e){ue(this,"options");this.options=e||{}}static override(e){Object.assign(qd.prototype,e)}init(){}formats(){return _s()}parse(){return _s()}format(){return _s()}add(){return _s()}diff(){return _s()}startOf(){return _s()}endOf(){return _s()}}var Ww={_date:qd};function $w(t,e,n,i){const{controller:o,data:a,_sorted:c}=t,u=o._cachedMeta.iScale,h=t.dataset&&t.dataset.options?t.dataset.options.spanGaps:null;if(u&&e===u.axis&&e!=="r"&&c&&a.length){const p=u._reversePixels?dj:Es;if(i){if(o._sharedOptions){const g=a[0],v=typeof g.getRange=="function"&&g.getRange(e);if(v){const y=p(a,e,n-v),b=p(a,e,n+v);return{lo:y.lo,hi:b.hi}}}}else{const g=p(a,e,n);if(h){const{vScale:v}=o._cachedMeta,{_parsed:y}=t,b=y.slice(0,g.lo+1).reverse().findIndex(k=>!Ee(k[v.axis]));g.lo-=Math.max(0,b);const _=y.slice(g.hi).findIndex(k=>!Ee(k[v.axis]));g.hi+=Math.max(0,_)}return g}}return{lo:0,hi:a.length-1}}function Ha(t,e,n,i,o){const a=t.getSortedVisibleDatasetMetas(),c=n[e];for(let u=0,h=a.length;u<h;++u){const{index:p,data:g}=a[u],{lo:v,hi:y}=$w(a[u],e,c,o);for(let b=v;b<=y;++b){const _=g[b];_.skip||i(_,p,b)}}}function Uw(t){const e=t.indexOf("x")!==-1,n=t.indexOf("y")!==-1;return function(i,o){const a=e?Math.abs(i.x-o.x):0,c=n?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(c,2))}}function Zc(t,e,n,i,o){const a=[];return!o&&!t.isPointInArea(e)||Ha(t,n,e,function(u,h,p){!o&&!Er(u,t.chartArea,0)||u.inRange(e.x,e.y,i)&&a.push({element:u,datasetIndex:h,index:p})},!0),a}function Vw(t,e,n,i){let o=[];function a(c,u,h){const{startAngle:p,endAngle:g}=c.getProps(["startAngle","endAngle"],i),{angle:v}=Ag(c,{x:e.x,y:e.y});Cr(v,p,g)&&o.push({element:c,datasetIndex:u,index:h})}return Ha(t,n,e,a),o}function Yw(t,e,n,i,o,a){let c=[];const u=Uw(n);let h=Number.POSITIVE_INFINITY;function p(g,v,y){const b=g.inRange(e.x,e.y,o);if(i&&!b)return;const _=g.getCenterPoint(o);if(!(!!a||t.isPointInArea(_))&&!b)return;const j=u(e,_);j<h?(c=[{element:g,datasetIndex:v,index:y}],h=j):j===h&&c.push({element:g,datasetIndex:v,index:y})}return Ha(t,n,e,p),c}function ed(t,e,n,i,o,a){return!a&&!t.isPointInArea(e)?[]:n==="r"&&!i?Vw(t,e,n,o):Yw(t,e,n,i,o,a)}function Zp(t,e,n,i,o){const a=[],c=n==="x"?"inXRange":"inYRange";let u=!1;return Ha(t,n,e,(h,p,g)=>{h[c]&&h[c](e[n],o)&&(a.push({element:h,datasetIndex:p,index:g}),u=u||h.inRange(e.x,e.y,o))}),i&&!u?[]:a}var qw={modes:{index(t,e,n,i){const o=Ss(e,t),a=n.axis||"x",c=n.includeInvisible||!1,u=n.intersect?Zc(t,o,a,i,c):ed(t,o,a,!1,i,c),h=[];return u.length?(t.getSortedVisibleDatasetMetas().forEach(p=>{const g=u[0].index,v=p.data[g];v&&!v.skip&&h.push({element:v,datasetIndex:p.index,index:g})}),h):[]},dataset(t,e,n,i){const o=Ss(e,t),a=n.axis||"xy",c=n.includeInvisible||!1;let u=n.intersect?Zc(t,o,a,i,c):ed(t,o,a,!1,i,c);if(u.length>0){const h=u[0].datasetIndex,p=t.getDatasetMeta(h).data;u=[];for(let g=0;g<p.length;++g)u.push({element:p[g],datasetIndex:h,index:g})}return u},point(t,e,n,i){const o=Ss(e,t),a=n.axis||"xy",c=n.includeInvisible||!1;return Zc(t,o,a,i,c)},nearest(t,e,n,i){const o=Ss(e,t),a=n.axis||"xy",c=n.includeInvisible||!1;return ed(t,o,a,n.intersect,i,c)},x(t,e,n,i){const o=Ss(e,t);return Zp(t,o,"x",n.intersect,i)},y(t,e,n,i){const o=Ss(e,t);return Zp(t,o,"y",n.intersect,i)}}};const ex=["left","top","right","bottom"];function or(t,e){return t.filter(n=>n.pos===e)}function em(t,e){return t.filter(n=>ex.indexOf(n.pos)===-1&&n.box.axis===e)}function ar(t,e){return t.sort((n,i)=>{const o=e?i:n,a=e?n:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function Kw(t){const e=[];let n,i,o,a,c,u;for(n=0,i=(t||[]).length;n<i;++n)o=t[n],{position:a,options:{stack:c,stackWeight:u=1}}=o,e.push({index:n,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:c&&a+c,stackWeight:u});return e}function Xw(t){const e={};for(const n of t){const{stack:i,pos:o,stackWeight:a}=n;if(!i||!ex.includes(o))continue;const c=e[i]||(e[i]={count:0,placed:0,weight:0,size:0});c.count++,c.weight+=a}return e}function Qw(t,e){const n=Xw(t),{vBoxMaxWidth:i,hBoxMaxHeight:o}=e;let a,c,u;for(a=0,c=t.length;a<c;++a){u=t[a];const{fullSize:h}=u.box,p=n[u.stack],g=p&&u.stackWeight/p.weight;u.horizontal?(u.width=g?g*i:h&&e.availableWidth,u.height=o):(u.width=i,u.height=g?g*o:h&&e.availableHeight)}return n}function Gw(t){const e=Kw(t),n=ar(e.filter(p=>p.box.fullSize),!0),i=ar(or(e,"left"),!0),o=ar(or(e,"right")),a=ar(or(e,"top"),!0),c=ar(or(e,"bottom")),u=em(e,"x"),h=em(e,"y");return{fullSize:n,leftAndTop:i.concat(a),rightAndBottom:o.concat(h).concat(c).concat(u),chartArea:or(e,"chartArea"),vertical:i.concat(o).concat(h),horizontal:a.concat(c).concat(u)}}function tm(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function tx(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function Jw(t,e,n,i){const{pos:o,box:a}=n,c=t.maxPadding;if(!Se(o)){n.size&&(t[o]-=n.size);const v=i[n.stack]||{size:0,count:1};v.size=Math.max(v.size,n.horizontal?a.height:a.width),n.size=v.size/v.count,t[o]+=n.size}a.getPadding&&tx(c,a.getPadding());const u=Math.max(0,e.outerWidth-tm(c,t,"left","right")),h=Math.max(0,e.outerHeight-tm(c,t,"top","bottom")),p=u!==t.w,g=h!==t.h;return t.w=u,t.h=h,n.horizontal?{same:p,other:g}:{same:g,other:p}}function Zw(t){const e=t.maxPadding;function n(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function e_(t,e){const n=e.maxPadding;function i(o){const a={left:0,top:0,right:0,bottom:0};return o.forEach(c=>{a[c]=Math.max(e[c],n[c])}),a}return i(t?["left","right"]:["top","bottom"])}function fr(t,e,n,i){const o=[];let a,c,u,h,p,g;for(a=0,c=t.length,p=0;a<c;++a){u=t[a],h=u.box,h.update(u.width||e.w,u.height||e.h,e_(u.horizontal,e));const{same:v,other:y}=Jw(e,n,u,i);p|=v&&o.length,g=g||y,h.fullSize||o.push(u)}return p&&fr(o,e,n,i)||g}function ra(t,e,n,i,o){t.top=n,t.left=e,t.right=e+i,t.bottom=n+o,t.width=i,t.height=o}function nm(t,e,n,i){const o=n.padding;let{x:a,y:c}=e;for(const u of t){const h=u.box,p=i[u.stack]||{placed:0,weight:1},g=u.stackWeight/p.weight||1;if(u.horizontal){const v=e.w*g,y=p.size||h.height;Sr(p.start)&&(c=p.start),h.fullSize?ra(h,o.left,c,n.outerWidth-o.right-o.left,y):ra(h,e.left+p.placed,c,v,y),p.start=c,p.placed+=v,c=h.bottom}else{const v=e.h*g,y=p.size||h.width;Sr(p.start)&&(a=p.start),h.fullSize?ra(h,a,o.top,y,n.outerHeight-o.bottom-o.top):ra(h,a,e.top+p.placed,y,v),p.start=a,p.placed+=v,a=h.right}}e.x=a,e.y=c}var Ut={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(n){e.draw(n)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;n!==-1&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const o=Vt(t.options.layout.padding),a=Math.max(e-o.width,0),c=Math.max(n-o.height,0),u=Gw(t.boxes),h=u.vertical,p=u.horizontal;Te(t.boxes,k=>{typeof k.beforeLayout=="function"&&k.beforeLayout()});const g=h.reduce((k,j)=>j.box.options&&j.box.options.display===!1?k:k+1,0)||1,v=Object.freeze({outerWidth:e,outerHeight:n,padding:o,availableWidth:a,availableHeight:c,vBoxMaxWidth:a/2/g,hBoxMaxHeight:c/2}),y=Object.assign({},o);tx(y,Vt(i));const b=Object.assign({maxPadding:y,w:a,h:c,x:o.left,y:o.top},o),_=Qw(h.concat(p),v);fr(u.fullSize,b,v,_),fr(h,b,v,_),fr(p,b,v,_)&&fr(h,b,v,_),Zw(b),nm(u.leftAndTop,b,v,_),b.x+=b.w,b.y+=b.h,nm(u.rightAndBottom,b,v,_),t.chartArea={left:b.left,top:b.top,right:b.left+b.w,bottom:b.top+b.h,height:b.h,width:b.w},Te(u.chartArea,k=>{const j=k.box;Object.assign(j,t.chartArea),j.update(b.w,b.h,{left:0,top:0,right:0,bottom:0})})}};class nx{acquireContext(e,n){}releaseContext(e){return!1}addEventListener(e,n,i){}removeEventListener(e,n,i){}getDevicePixelRatio(){return 1}getMaximumSize(e,n,i,o){return n=Math.max(0,n||e.width),i=i||e.height,{width:n,height:Math.max(0,o?Math.floor(n/o):i)}}isAttached(e){return!0}updateConfig(e){}}class t_ extends nx{acquireContext(e){return e&&e.getContext&&e.getContext("2d")||null}updateConfig(e){e.options.animation=!1}}const ga="$chartjs",n_={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},sm=t=>t===null||t==="";function s_(t,e){const n=t.style,i=t.getAttribute("height"),o=t.getAttribute("width");if(t[ga]={initial:{height:i,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",sm(o)){const a=Bp(t,"width");a!==void 0&&(t.width=a)}if(sm(i))if(t.style.height==="")t.height=t.width/(e||2);else{const a=Bp(t,"height");a!==void 0&&(t.height=a)}return t}const sx=rw?{passive:!0}:!1;function i_(t,e,n){t&&t.addEventListener(e,n,sx)}function r_(t,e,n){t&&t.canvas&&t.canvas.removeEventListener(e,n,sx)}function o_(t,e){const n=n_[t.type]||t.type,{x:i,y:o}=Ss(t,e);return{type:n,chart:e,native:t,x:i!==void 0?i:null,y:o!==void 0?o:null}}function Na(t,e){for(const n of t)if(n===e||n.contains(e))return!0}function a_(t,e,n){const i=t.canvas,o=new MutationObserver(a=>{let c=!1;for(const u of a)c=c||Na(u.addedNodes,i),c=c&&!Na(u.removedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}function l_(t,e,n){const i=t.canvas,o=new MutationObserver(a=>{let c=!1;for(const u of a)c=c||Na(u.removedNodes,i),c=c&&!Na(u.addedNodes,i);c&&n()});return o.observe(document,{childList:!0,subtree:!0}),o}const Rr=new Map;let im=0;function ix(){const t=window.devicePixelRatio;t!==im&&(im=t,Rr.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function c_(t,e){Rr.size||window.addEventListener("resize",ix),Rr.set(t,e)}function d_(t){Rr.delete(t),Rr.size||window.removeEventListener("resize",ix)}function u_(t,e,n){const i=t.canvas,o=i&&Yd(i);if(!o)return;const a=Og((u,h)=>{const p=o.clientWidth;n(u,h),p<o.clientWidth&&n()},window),c=new ResizeObserver(u=>{const h=u[0],p=h.contentRect.width,g=h.contentRect.height;p===0&&g===0||a(p,g)});return c.observe(o),c_(t,a),c}function td(t,e,n){n&&n.disconnect(),e==="resize"&&d_(t)}function h_(t,e,n){const i=t.canvas,o=Og(a=>{t.ctx!==null&&n(o_(a,t))},t);return i_(i,e,o),o}class f_ extends nx{acquireContext(e,n){const i=e&&e.getContext&&e.getContext("2d");return i&&i.canvas===e?(s_(e,n),i):null}releaseContext(e){const n=e.canvas;if(!n[ga])return!1;const i=n[ga].initial;["height","width"].forEach(a=>{const c=i[a];Ee(c)?n.removeAttribute(a):n.setAttribute(a,c)});const o=i.style||{};return Object.keys(o).forEach(a=>{n.style[a]=o[a]}),n.width=n.width,delete n[ga],!0}addEventListener(e,n,i){this.removeEventListener(e,n);const o=e.$proxies||(e.$proxies={}),c={attach:a_,detach:l_,resize:u_}[n]||h_;o[n]=c(e,n,i)}removeEventListener(e,n){const i=e.$proxies||(e.$proxies={}),o=i[n];if(!o)return;({attach:td,detach:td,resize:td}[n]||r_)(e,n,o),i[n]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,n,i,o){return iw(e,n,i,o)}isAttached(e){const n=e&&Yd(e);return!!(n&&n.isConnected)}}function p_(t){return!Vd()||typeof OffscreenCanvas<"u"&&t instanceof OffscreenCanvas?t_:f_}class Zt{constructor(){ue(this,"x");ue(this,"y");ue(this,"active",!1);ue(this,"options");ue(this,"$animations")}tooltipPosition(e){const{x:n,y:i}=this.getProps(["x","y"],e);return{x:n,y:i}}hasValue(){return Nr(this.x)&&Nr(this.y)}getProps(e,n){const i=this.$animations;if(!n||!i)return this;const o={};return e.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}}ue(Zt,"defaults",{}),ue(Zt,"defaultRoutes");function m_(t,e){const n=t.options.ticks,i=g_(t),o=Math.min(n.maxTicksLimit||i,i),a=n.major.enabled?v_(e):[],c=a.length,u=a[0],h=a[c-1],p=[];if(c>o)return y_(e,p,a,c/o),p;const g=x_(a,e,o);if(c>0){let v,y;const b=c>1?Math.round((h-u)/(c-1)):null;for(oa(e,p,g,Ee(b)?0:u-b,u),v=0,y=c-1;v<y;v++)oa(e,p,g,a[v],a[v+1]);return oa(e,p,g,h,Ee(b)?e.length:h+b),p}return oa(e,p,g),p}function g_(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),o=t._maxLength/n;return Math.floor(Math.min(i,o))}function x_(t,e,n){const i=b_(t),o=e.length/n;if(!i)return Math.max(o,1);const a=sj(i);for(let c=0,u=a.length-1;c<u;c++){const h=a[c];if(h>o)return h}return Math.max(o,1)}function v_(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function y_(t,e,n,i){let o=0,a=n[0],c;for(i=Math.ceil(i),c=0;c<t.length;c++)c===a&&(e.push(t[c]),o++,a=n[o*i])}function oa(t,e,n,i,o){const a=_e(i,0),c=Math.min(_e(o,t.length),t.length);let u=0,h,p,g;for(n=Math.ceil(n),o&&(h=o-i,n=h/Math.floor(h/n)),g=a;g<0;)u++,g=Math.round(a+u*n);for(p=Math.max(a,0);p<c;p++)p===g&&(e.push(t[p]),u++,g=Math.round(a+u*n))}function b_(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}const j_=t=>t==="left"?"right":t==="right"?"left":t,rm=(t,e,n)=>e==="top"||e==="left"?t[e]+n:t[e]-n,om=(t,e)=>Math.min(e||t,t);function am(t,e){const n=[],i=t.length/e,o=t.length;let a=0;for(;a<o;a+=i)n.push(t[Math.floor(a)]);return n}function w_(t,e,n){const i=t.ticks.length,o=Math.min(e,i-1),a=t._startPixel,c=t._endPixel,u=1e-6;let h=t.getPixelForTick(o),p;if(!(n&&(i===1?p=Math.max(h-a,c-h):e===0?p=(t.getPixelForTick(1)-h)/2:p=(h-t.getPixelForTick(o-1))/2,h+=o<e?p:-p,h<a-u||h>c+u)))return h}function __(t,e){Te(t,n=>{const i=n.gc,o=i.length/2;let a;if(o>e){for(a=0;a<o;++a)delete n.data[i[a]];i.splice(0,o)}})}function lr(t){return t.drawTicks?t.tickLength:0}function lm(t,e){if(!t.display)return 0;const n=ft(t.font,e),i=Vt(t.padding);return(qe(t.text)?t.text.length:1)*n.lineHeight+i.height}function k_(t,e){return Os(t,{scale:e,type:"scale"})}function S_(t,e,n){return Os(t,{tick:n,index:e,type:"tick"})}function N_(t,e,n){let i=Id(t);return(n&&e!=="right"||!n&&e==="right")&&(i=j_(i)),i}function C_(t,e,n,i){const{top:o,left:a,bottom:c,right:u,chart:h}=t,{chartArea:p,scales:g}=h;let v=0,y,b,_;const k=c-o,j=u-a;if(t.isHorizontal()){if(b=dt(i,a,u),Se(n)){const S=Object.keys(n)[0],N=n[S];_=g[S].getPixelForValue(N)+k-e}else n==="center"?_=(p.bottom+p.top)/2+k-e:_=rm(t,n,e);y=u-a}else{if(Se(n)){const S=Object.keys(n)[0],N=n[S];b=g[S].getPixelForValue(N)-j+e}else n==="center"?b=(p.left+p.right)/2-j+e:b=rm(t,n,e);_=dt(i,c,o),v=n==="left"?-Ge:Ge}return{titleX:b,titleY:_,maxWidth:y,rotation:v}}class xi extends Zt{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,n){return e}getUserBounds(){let{_userMin:e,_userMax:n,_suggestedMin:i,_suggestedMax:o}=this;return e=ln(e,Number.POSITIVE_INFINITY),n=ln(n,Number.NEGATIVE_INFINITY),i=ln(i,Number.POSITIVE_INFINITY),o=ln(o,Number.NEGATIVE_INFINITY),{min:ln(e,i),max:ln(n,o),minDefined:pt(e),maxDefined:pt(n)}}getMinMax(e){let{min:n,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),c;if(o&&a)return{min:n,max:i};const u=this.getMatchingVisibleMetas();for(let h=0,p=u.length;h<p;++h)c=u[h].controller.getMinMax(this,e),o||(n=Math.min(n,c.min)),a||(i=Math.max(i,c.max));return n=a&&n>i?i:n,i=o&&n>i?n:i,{min:ln(n,ln(i,n)),max:ln(i,ln(n,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(e))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Oe(this.options.beforeUpdate,[this])}update(e,n,i){const{beginAtZero:o,grace:a,ticks:c}=this.options,u=c.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=n,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Oj(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=u<this.ticks.length;this._convertTicksToLabels(h?am(this.ticks,u):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),c.display&&(c.autoSkip||c.source==="auto")&&(this.ticks=m_(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,n,i;this.isHorizontal()?(n=this.left,i=this.right):(n=this.top,i=this.bottom,e=!e),this._startPixel=n,this._endPixel=i,this._reversePixels=e,this._length=i-n,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Oe(this.options.afterUpdate,[this])}beforeSetDimensions(){Oe(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Oe(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),Oe(this.options[e],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Oe(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){const n=this.options.ticks;let i,o,a;for(i=0,o=e.length;i<o;i++)a=e[i],a.label=Oe(n.callback,[a.value,i,e],this)}afterTickToLabelConversion(){Oe(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Oe(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const e=this.options,n=e.ticks,i=om(this.ticks.length,e.ticks.maxTicksLimit),o=n.minRotation||0,a=n.maxRotation;let c=o,u,h,p;if(!this._isVisible()||!n.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}const g=this._getLabelSizes(),v=g.widest.width,y=g.highest.height,b=ht(this.chart.width-v,0,this.maxWidth);u=e.offset?this.maxWidth/i:b/(i-1),v+6>u&&(u=b/(i-(e.offset?.5:1)),h=this.maxHeight-lr(e.grid)-n.padding-lm(e.title,this.chart.options.font),p=Math.sqrt(v*v+y*y),c=aj(Math.min(Math.asin(ht((g.highest.height+6)/u,-1,1)),Math.asin(ht(h/p,-1,1))-Math.asin(ht(y/p,-1,1)))),c=Math.max(o,Math.min(a,c))),this.labelRotation=c}afterCalculateLabelRotation(){Oe(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Oe(this.options.beforeFit,[this])}fit(){const e={width:0,height:0},{chart:n,options:{ticks:i,title:o,grid:a}}=this,c=this._isVisible(),u=this.isHorizontal();if(c){const h=lm(o,n.options.font);if(u?(e.width=this.maxWidth,e.height=lr(a)+h):(e.height=this.maxHeight,e.width=lr(a)+h),i.display&&this.ticks.length){const{first:p,last:g,widest:v,highest:y}=this._getLabelSizes(),b=i.padding*2,_=Cn(this.labelRotation),k=Math.cos(_),j=Math.sin(_);if(u){const S=i.mirror?0:j*v.width+k*y.height;e.height=Math.min(this.maxHeight,e.height+S+b)}else{const S=i.mirror?0:k*v.width+j*y.height;e.width=Math.min(this.maxWidth,e.width+S+b)}this._calculatePadding(p,g,j,k)}}this._handleMargins(),u?(this.width=this._length=n.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=n.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,n,i,o){const{ticks:{align:a,padding:c},position:u}=this.options,h=this.labelRotation!==0,p=u!=="top"&&this.axis==="x";if(this.isHorizontal()){const g=this.getPixelForTick(0)-this.left,v=this.right-this.getPixelForTick(this.ticks.length-1);let y=0,b=0;h?p?(y=o*e.width,b=i*n.height):(y=i*e.height,b=o*n.width):a==="start"?b=n.width:a==="end"?y=e.width:a!=="inner"&&(y=e.width/2,b=n.width/2),this.paddingLeft=Math.max((y-g+c)*this.width/(this.width-g),0),this.paddingRight=Math.max((b-v+c)*this.width/(this.width-v),0)}else{let g=n.height/2,v=e.height/2;a==="start"?(g=0,v=e.height):a==="end"&&(g=n.height,v=0),this.paddingTop=g+c,this.paddingBottom=v+c}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Oe(this.options.afterFit,[this])}isHorizontal(){const{axis:e,position:n}=this.options;return n==="top"||n==="bottom"||e==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let n,i;for(n=0,i=e.length;n<i;n++)Ee(e[n].label)&&(e.splice(n,1),i--,n--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){const n=this.options.ticks.sampleSize;let i=this.ticks;n<i.length&&(i=am(i,n)),this._labelSizes=e=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,n,i){const{ctx:o,_longestTextCache:a}=this,c=[],u=[],h=Math.floor(n/om(n,i));let p=0,g=0,v,y,b,_,k,j,S,N,T,A,E;for(v=0;v<n;v+=h){if(_=e[v].label,k=this._resolveTickFontOptions(v),o.font=j=k.string,S=a[j]=a[j]||{data:{},gc:[]},N=k.lineHeight,T=A=0,!Ee(_)&&!qe(_))T=Lp(o,S.data,S.gc,T,_),A=N;else if(qe(_))for(y=0,b=_.length;y<b;++y)E=_[y],!Ee(E)&&!qe(E)&&(T=Lp(o,S.data,S.gc,T,E),A+=N);c.push(T),u.push(A),p=Math.max(T,p),g=Math.max(A,g)}__(a,n);const O=c.indexOf(p),U=u.indexOf(g),$=Y=>({width:c[Y]||0,height:u[Y]||0});return{first:$(0),last:$(n-1),widest:$(O),highest:$(U),widths:c,heights:u}}getLabelForValue(e){return e}getPixelForValue(e,n){return NaN}getValueForPixel(e){}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);const n=this._startPixel+e*this._length;return cj(this._alignToPixels?ws(this.chart,n,0):n)}getDecimalForPixel(e){const n=(e-this._startPixel)/this._length;return this._reversePixels?1-n:n}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:e,max:n}=this;return e<0&&n<0?n:e>0&&n>0?e:0}getContext(e){const n=this.ticks||[];if(e>=0&&e<n.length){const i=n[e];return i.$context||(i.$context=S_(this.getContext(),e,i))}return this.$context||(this.$context=k_(this.chart.getContext(),this))}_tickSize(){const e=this.options.ticks,n=Cn(this.labelRotation),i=Math.abs(Math.cos(n)),o=Math.abs(Math.sin(n)),a=this._getLabelSizes(),c=e.autoSkipPadding||0,u=a?a.widest.width+c:0,h=a?a.highest.height+c:0;return this.isHorizontal()?h*i>u*o?u/i:h/o:h*o<u*i?h/i:u/o}_isVisible(){const e=this.options.display;return e!=="auto"?!!e:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(e){const n=this.axis,i=this.chart,o=this.options,{grid:a,position:c,border:u}=o,h=a.offset,p=this.isHorizontal(),v=this.ticks.length+(h?1:0),y=lr(a),b=[],_=u.setContext(this.getContext()),k=_.display?_.width:0,j=k/2,S=function(W){return ws(i,W,k)};let N,T,A,E,O,U,$,Y,Q,se,B,V;if(c==="top")N=S(this.bottom),U=this.bottom-y,Y=N-j,se=S(e.top)+j,V=e.bottom;else if(c==="bottom")N=S(this.top),se=e.top,V=S(e.bottom)-j,U=N+j,Y=this.top+y;else if(c==="left")N=S(this.right),O=this.right-y,$=N-j,Q=S(e.left)+j,B=e.right;else if(c==="right")N=S(this.left),Q=e.left,B=S(e.right)-j,O=N+j,$=this.left+y;else if(n==="x"){if(c==="center")N=S((e.top+e.bottom)/2+.5);else if(Se(c)){const W=Object.keys(c)[0],ne=c[W];N=S(this.chart.scales[W].getPixelForValue(ne))}se=e.top,V=e.bottom,U=N+j,Y=U+y}else if(n==="y"){if(c==="center")N=S((e.left+e.right)/2);else if(Se(c)){const W=Object.keys(c)[0],ne=c[W];N=S(this.chart.scales[W].getPixelForValue(ne))}O=N-j,$=O-y,Q=e.left,B=e.right}const L=_e(o.ticks.maxTicksLimit,v),re=Math.max(1,Math.ceil(v/L));for(T=0;T<v;T+=re){const W=this.getContext(T),ne=a.setContext(W),X=u.setContext(W),ie=ne.lineWidth,ee=ne.color,D=X.dash||[],q=X.dashOffset,me=ne.tickWidth,pe=ne.tickColor,ve=ne.tickBorderDash||[],ye=ne.tickBorderDashOffset;A=w_(this,T,h),A!==void 0&&(E=ws(i,A,ie),p?O=$=Q=B=E:U=Y=se=V=E,b.push({tx1:O,ty1:U,tx2:$,ty2:Y,x1:Q,y1:se,x2:B,y2:V,width:ie,color:ee,borderDash:D,borderDashOffset:q,tickWidth:me,tickColor:pe,tickBorderDash:ve,tickBorderDashOffset:ye}))}return this._ticksLength=v,this._borderValue=N,b}_computeLabelItems(e){const n=this.axis,i=this.options,{position:o,ticks:a}=i,c=this.isHorizontal(),u=this.ticks,{align:h,crossAlign:p,padding:g,mirror:v}=a,y=lr(i.grid),b=y+g,_=v?-g:b,k=-Cn(this.labelRotation),j=[];let S,N,T,A,E,O,U,$,Y,Q,se,B,V="middle";if(o==="top")O=this.bottom-_,U=this._getXAxisLabelAlignment();else if(o==="bottom")O=this.top+_,U=this._getXAxisLabelAlignment();else if(o==="left"){const re=this._getYAxisLabelAlignment(y);U=re.textAlign,E=re.x}else if(o==="right"){const re=this._getYAxisLabelAlignment(y);U=re.textAlign,E=re.x}else if(n==="x"){if(o==="center")O=(e.top+e.bottom)/2+b;else if(Se(o)){const re=Object.keys(o)[0],W=o[re];O=this.chart.scales[re].getPixelForValue(W)+b}U=this._getXAxisLabelAlignment()}else if(n==="y"){if(o==="center")E=(e.left+e.right)/2-b;else if(Se(o)){const re=Object.keys(o)[0],W=o[re];E=this.chart.scales[re].getPixelForValue(W)}U=this._getYAxisLabelAlignment(y).textAlign}n==="y"&&(h==="start"?V="top":h==="end"&&(V="bottom"));const L=this._getLabelSizes();for(S=0,N=u.length;S<N;++S){T=u[S],A=T.label;const re=a.setContext(this.getContext(S));$=this.getPixelForTick(S)+a.labelOffset,Y=this._resolveTickFontOptions(S),Q=Y.lineHeight,se=qe(A)?A.length:1;const W=se/2,ne=re.color,X=re.textStrokeColor,ie=re.textStrokeWidth;let ee=U;c?(E=$,U==="inner"&&(S===N-1?ee=this.options.reverse?"left":"right":S===0?ee=this.options.reverse?"right":"left":ee="center"),o==="top"?p==="near"||k!==0?B=-se*Q+Q/2:p==="center"?B=-L.highest.height/2-W*Q+Q:B=-L.highest.height+Q/2:p==="near"||k!==0?B=Q/2:p==="center"?B=L.highest.height/2-W*Q:B=L.highest.height-se*Q,v&&(B*=-1),k!==0&&!re.showLabelBackdrop&&(E+=Q/2*Math.sin(k))):(O=$,B=(1-se)*Q/2);let D;if(re.showLabelBackdrop){const q=Vt(re.backdropPadding),me=L.heights[S],pe=L.widths[S];let ve=B-q.top,ye=0-q.left;switch(V){case"middle":ve-=me/2;break;case"bottom":ve-=me;break}switch(U){case"center":ye-=pe/2;break;case"right":ye-=pe;break;case"inner":S===N-1?ye-=pe:S>0&&(ye-=pe/2);break}D={left:ye,top:ve,width:pe+q.width,height:me+q.height,color:re.backdropColor}}j.push({label:A,font:Y,textOffset:B,options:{rotation:k,color:ne,strokeColor:X,strokeWidth:ie,textAlign:ee,textBaseline:V,translation:[E,O],backdrop:D}})}return j}_getXAxisLabelAlignment(){const{position:e,ticks:n}=this.options;if(-Cn(this.labelRotation))return e==="top"?"left":"right";let o="center";return n.align==="start"?o="left":n.align==="end"?o="right":n.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(e){const{position:n,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,c=this._getLabelSizes(),u=e+a,h=c.widest.width;let p,g;return n==="left"?o?(g=this.right+a,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g+=h)):(g=this.right-u,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g=this.left)):n==="right"?o?(g=this.left+a,i==="near"?p="right":i==="center"?(p="center",g-=h/2):(p="left",g-=h)):(g=this.left+u,i==="near"?p="left":i==="center"?(p="center",g+=h/2):(p="right",g=this.right)):p="right",{textAlign:p,x:g}}_computeLabelArea(){if(this.options.ticks.mirror)return;const e=this.chart,n=this.options.position;if(n==="left"||n==="right")return{top:0,left:this.left,bottom:e.height,right:this.right};if(n==="top"||n==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){const{ctx:e,options:{backgroundColor:n},left:i,top:o,width:a,height:c}=this;n&&(e.save(),e.fillStyle=n,e.fillRect(i,o,a,c),e.restore())}getLineWidthForValue(e){const n=this.options.grid;if(!this._isVisible()||!n.display)return 0;const o=this.ticks.findIndex(a=>a.value===e);return o>=0?n.setContext(this.getContext(o)).lineWidth:0}drawGrid(e){const n=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(e));let a,c;const u=(h,p,g)=>{!g.width||!g.color||(i.save(),i.lineWidth=g.width,i.strokeStyle=g.color,i.setLineDash(g.borderDash||[]),i.lineDashOffset=g.borderDashOffset,i.beginPath(),i.moveTo(h.x,h.y),i.lineTo(p.x,p.y),i.stroke(),i.restore())};if(n.display)for(a=0,c=o.length;a<c;++a){const h=o[a];n.drawOnChartArea&&u({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),n.drawTicks&&u({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:e,ctx:n,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),c=i.display?a.width:0;if(!c)return;const u=o.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let p,g,v,y;this.isHorizontal()?(p=ws(e,this.left,c)-c/2,g=ws(e,this.right,u)+u/2,v=y=h):(v=ws(e,this.top,c)-c/2,y=ws(e,this.bottom,u)+u/2,p=g=h),n.save(),n.lineWidth=a.width,n.strokeStyle=a.color,n.beginPath(),n.moveTo(p,v),n.lineTo(g,y),n.stroke(),n.restore()}drawLabels(e){if(!this.options.ticks.display)return;const i=this.ctx,o=this._computeLabelArea();o&&Ia(i,o);const a=this.getLabelItems(e);for(const c of a){const u=c.options,h=c.font,p=c.label,g=c.textOffset;Pr(i,p,0,g,h,u)}o&&Fa(i)}drawTitle(){const{ctx:e,options:{position:n,title:i,reverse:o}}=this;if(!i.display)return;const a=ft(i.font),c=Vt(i.padding),u=i.align;let h=a.lineHeight/2;n==="bottom"||n==="center"||Se(n)?(h+=c.bottom,qe(i.text)&&(h+=a.lineHeight*(i.text.length-1))):h+=c.top;const{titleX:p,titleY:g,maxWidth:v,rotation:y}=C_(this,h,n,u);Pr(e,i.text,0,0,a,{color:i.color,maxWidth:v,rotation:y,textAlign:N_(u,n,o),textBaseline:"middle",translation:[p,g]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){const e=this.options,n=e.ticks&&e.ticks.z||0,i=_e(e.grid&&e.grid.z,-1),o=_e(e.border&&e.border.z,0);return!this._isVisible()||this.draw!==xi.prototype.draw?[{z:n,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:n,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(e){const n=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let a,c;for(a=0,c=n.length;a<c;++a){const u=n[a];u[i]===this.id&&(!e||u.type===e)&&o.push(u)}return o}_resolveTickFontOptions(e){const n=this.options.ticks.setContext(this.getContext(e));return ft(n.font)}_maxDigits(){const e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}}class aa{constructor(e,n,i){this.type=e,this.scope=n,this.override=i,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){const n=Object.getPrototypeOf(e);let i;R_(n)&&(i=this.register(n));const o=this.items,a=e.id,c=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+e);return a in o||(o[a]=e,E_(e,c,i),this.override&&Ue.override(e.id,e.overrides)),c}get(e){return this.items[e]}unregister(e){const n=this.items,i=e.id,o=this.scope;i in n&&delete n[i],o&&i in Ue[o]&&(delete Ue[o][i],this.override&&delete Ds[i])}}function E_(t,e,n){const i=kr(Object.create(null),[n?Ue.get(n):{},Ue.get(e),t.defaults]);Ue.set(e,i),t.defaultRoutes&&P_(e,t.defaultRoutes),t.descriptors&&Ue.describe(e,t.descriptors)}function P_(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),o=i.pop(),a=[t].concat(i).join("."),c=e[n].split("."),u=c.pop(),h=c.join(".");Ue.route(a,o,h,u)})}function R_(t){return"id"in t&&"defaults"in t}class T_{constructor(){this.controllers=new aa(Ts,"datasets",!0),this.elements=new aa(Zt,"elements"),this.plugins=new aa(Object,"plugins"),this.scales=new aa(xi,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each("register",e)}remove(...e){this._each("unregister",e)}addControllers(...e){this._each("register",e,this.controllers)}addElements(...e){this._each("register",e,this.elements)}addPlugins(...e){this._each("register",e,this.plugins)}addScales(...e){this._each("register",e,this.scales)}getController(e){return this._get(e,this.controllers,"controller")}getElement(e){return this._get(e,this.elements,"element")}getPlugin(e){return this._get(e,this.plugins,"plugin")}getScale(e){return this._get(e,this.scales,"scale")}removeControllers(...e){this._each("unregister",e,this.controllers)}removeElements(...e){this._each("unregister",e,this.elements)}removePlugins(...e){this._each("unregister",e,this.plugins)}removeScales(...e){this._each("unregister",e,this.scales)}_each(e,n,i){[...n].forEach(o=>{const a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(e,a,o):Te(o,c=>{const u=i||this._getRegistryForType(c);this._exec(e,u,c)})})}_exec(e,n,i){const o=Od(e);Oe(i["before"+o],[],i),n[e](i),Oe(i["after"+o],[],i)}_getRegistryForType(e){for(let n=0;n<this._typedRegistries.length;n++){const i=this._typedRegistries[n];if(i.isForType(e))return i}return this.plugins}_get(e,n,i){const o=n.get(e);if(o===void 0)throw new Error('"'+e+'" is not a registered '+i+".");return o}}var un=new T_;class A_{constructor(){this._init=void 0}notify(e,n,i,o){if(n==="beforeInit"&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,"install")),this._init===void 0)return;const a=o?this._descriptors(e).filter(o):this._descriptors(e),c=this._notify(a,e,n,i);return n==="afterDestroy"&&(this._notify(a,e,"stop"),this._notify(this._init,e,"uninstall"),this._init=void 0),c}_notify(e,n,i,o){o=o||{};for(const a of e){const c=a.plugin,u=c[i],h=[n,o,a.options];if(Oe(u,h,c)===!1&&o.cancelable)return!1}return!0}invalidate(){Ee(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;const n=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),n}_createDescriptors(e,n){const i=e&&e.config,o=_e(i.options&&i.options.plugins,{}),a=M_(i);return o===!1&&!n?[]:L_(e,a,o,n)}_notifyStateChanges(e){const n=this._oldCache||[],i=this._cache,o=(a,c)=>a.filter(u=>!c.some(h=>u.plugin.id===h.plugin.id));this._notify(o(n,i),e,"stop"),this._notify(o(i,n),e,"start")}}function M_(t){const e={},n=[],i=Object.keys(un.plugins.items);for(let a=0;a<i.length;a++)n.push(un.getPlugin(i[a]));const o=t.plugins||[];for(let a=0;a<o.length;a++){const c=o[a];n.indexOf(c)===-1&&(n.push(c),e[c.id]=!0)}return{plugins:n,localIds:e}}function D_(t,e){return!e&&t===!1?null:t===!0?{}:t}function L_(t,{plugins:e,localIds:n},i,o){const a=[],c=t.getContext();for(const u of e){const h=u.id,p=D_(i[h],o);p!==null&&a.push({plugin:u,options:O_(t.config,{plugin:u,local:n[h]},p,c)})}return a}function O_(t,{plugin:e,local:n},i,o){const a=t.pluginScopeKeys(e),c=t.getOptionScopes(i,a);return n&&e.defaults&&c.push(e.defaults),t.createResolver(c,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function vd(t,e){const n=Ue.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||n.indexAxis||"x"}function z_(t,e){let n=t;return t==="_index_"?n=e:t==="_value_"&&(n=e==="x"?"y":"x"),n}function I_(t,e){return t===e?"_index_":"_value_"}function cm(t){if(t==="x"||t==="y"||t==="r")return t}function F_(t){if(t==="top"||t==="bottom")return"x";if(t==="left"||t==="right")return"y"}function yd(t,...e){if(cm(t))return t;for(const n of e){const i=n.axis||F_(n.position)||t.length>1&&cm(t[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function dm(t,e,n){if(n[e+"AxisID"]===t)return{axis:e}}function B_(t,e){if(e.data&&e.data.datasets){const n=e.data.datasets.filter(i=>i.xAxisID===t||i.yAxisID===t);if(n.length)return dm(t,"x",n[0])||dm(t,"y",n[0])}return{}}function H_(t,e){const n=Ds[t.type]||{scales:{}},i=e.scales||{},o=vd(t.type,e),a=Object.create(null);return Object.keys(i).forEach(c=>{const u=i[c];if(!Se(u))return console.error(`Invalid scale configuration for scale: ${c}`);if(u._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${c}`);const h=yd(c,u,B_(c,t),Ue.scales[u.type]),p=I_(h,o),g=n.scales||{};a[c]=gr(Object.create(null),[{axis:h},u,g[h],g[p]])}),t.data.datasets.forEach(c=>{const u=c.type||t.type,h=c.indexAxis||vd(u,e),g=(Ds[u]||{}).scales||{};Object.keys(g).forEach(v=>{const y=z_(v,h),b=c[y+"AxisID"]||y;a[b]=a[b]||Object.create(null),gr(a[b],[{axis:y},i[b],g[v]])})}),Object.keys(a).forEach(c=>{const u=a[c];gr(u,[Ue.scales[u.type],Ue.scale])}),a}function rx(t){const e=t.options||(t.options={});e.plugins=_e(e.plugins,{}),e.scales=H_(t,e)}function ox(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function W_(t){return t=t||{},t.data=ox(t.data),rx(t),t}const um=new Map,ax=new Set;function la(t,e){let n=um.get(t);return n||(n=e(),um.set(t,n),ax.add(n)),n}const cr=(t,e,n)=>{const i=Ms(e,n);i!==void 0&&t.add(i)};class $_{constructor(e){this._config=W_(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=ox(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){const e=this._config;this.clearCache(),rx(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return la(e,()=>[[`datasets.${e}`,""]])}datasetAnimationScopeKeys(e,n){return la(`${e}.transition.${n}`,()=>[[`datasets.${e}.transitions.${n}`,`transitions.${n}`],[`datasets.${e}`,""]])}datasetElementScopeKeys(e,n){return la(`${e}-${n}`,()=>[[`datasets.${e}.elements.${n}`,`datasets.${e}`,`elements.${n}`,""]])}pluginScopeKeys(e){const n=e.id,i=this.type;return la(`${i}-plugin-${n}`,()=>[[`plugins.${n}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,n){const i=this._scopeCache;let o=i.get(e);return(!o||n)&&(o=new Map,i.set(e,o)),o}getOptionScopes(e,n,i){const{options:o,type:a}=this,c=this._cachedScopes(e,i),u=c.get(n);if(u)return u;const h=new Set;n.forEach(g=>{e&&(h.add(e),g.forEach(v=>cr(h,e,v))),g.forEach(v=>cr(h,o,v)),g.forEach(v=>cr(h,Ds[a]||{},v)),g.forEach(v=>cr(h,Ue,v)),g.forEach(v=>cr(h,gd,v))});const p=Array.from(h);return p.length===0&&p.push(Object.create(null)),ax.has(n)&&c.set(n,p),p}chartOptionScopes(){const{options:e,type:n}=this;return[e,Ds[n]||{},Ue.datasets[n]||{},{type:n},Ue,gd]}resolveNamedOptions(e,n,i,o=[""]){const a={$shared:!0},{resolver:c,subPrefixes:u}=hm(this._resolverCache,e,o);let h=c;if(V_(c,n)){a.$shared=!1,i=ss(i)?i():i;const p=this.createResolver(e,i,u);h=fi(c,i,p)}for(const p of n)a[p]=h[p];return a}createResolver(e,n,i=[""],o){const{resolver:a}=hm(this._resolverCache,e,i);return Se(n)?fi(a,n,void 0,o):a}}function hm(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const o=n.join();let a=i.get(o);return a||(a={resolver:Wd(e,n),subPrefixes:n.filter(u=>!u.toLowerCase().includes("hover"))},i.set(o,a)),a}const U_=t=>Se(t)&&Object.getOwnPropertyNames(t).some(e=>ss(t[e]));function V_(t,e){const{isScriptable:n,isIndexable:i}=Bg(t);for(const o of e){const a=n(o),c=i(o),u=(c||a)&&t[o];if(a&&(ss(u)||U_(u))||c&&qe(u))return!0}return!1}var Y_="4.5.1";const q_=["top","bottom","left","right","chartArea"];function fm(t,e){return t==="top"||t==="bottom"||q_.indexOf(t)===-1&&e==="x"}function pm(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function mm(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),Oe(n&&n.onComplete,[t],e)}function K_(t){const e=t.chart,n=e.options.animation;Oe(n&&n.onProgress,[t],e)}function lx(t){return Vd()&&typeof t=="string"?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const xa={},gm=t=>{const e=lx(t);return Object.values(xa).filter(n=>n.canvas===e).pop()};function X_(t,e,n){const i=Object.keys(t);for(const o of i){const a=+o;if(a>=e){const c=t[o];delete t[o],(n>0||a>e)&&(t[a+n]=c)}}}function Q_(t,e,n,i){return!n||t.type==="mouseout"?null:i?e:t}var Qn;let Fr=(Qn=class{static register(...e){un.add(...e),xm()}static unregister(...e){un.remove(...e),xm()}constructor(e,n){const i=this.config=new $_(n),o=lx(e),a=gm(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");const c=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||p_(o)),this.platform.updateConfig(i);const u=this.platform.acquireContext(o,c.aspectRatio),h=u&&u.canvas,p=h&&h.height,g=h&&h.width;if(this.id=K1(),this.ctx=u,this.canvas=h,this.width=g,this.height=p,this._options=c,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new A_,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=fj(v=>this.update(v),c.resizeDelay||0),this._dataChanges=[],xa[this.id]=this,!u||!h){console.error("Failed to create chart: can't acquire context from the given item");return}kn.listen(this,"complete",mm),kn.listen(this,"progress",K_),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:n},width:i,height:o,_aspectRatio:a}=this;return Ee(e)?n&&a?a:o?i/o:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return un}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Fp(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Op(this.canvas,this.ctx),this}stop(){return kn.stop(this),this}resize(e,n){kn.running(this)?this._resizeBeforeDraw={width:e,height:n}:this._resize(e,n)}_resize(e,n){const i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,c=this.platform.getMaximumSize(o,e,n,a),u=i.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=c.width,this.height=c.height,this._aspectRatio=this.aspectRatio,Fp(this,u,!0)&&(this.notifyPlugins("resize",{size:c}),Oe(i.onResize,[this,c],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const n=this.options.scales||{};Te(n,(i,o)=>{i.id=o})}buildOrUpdateScales(){const e=this.options,n=e.scales,i=this.scales,o=Object.keys(i).reduce((c,u)=>(c[u]=!1,c),{});let a=[];n&&(a=a.concat(Object.keys(n).map(c=>{const u=n[c],h=yd(c,u),p=h==="r",g=h==="x";return{options:u,dposition:p?"chartArea":g?"bottom":"left",dtype:p?"radialLinear":g?"category":"linear"}}))),Te(a,c=>{const u=c.options,h=u.id,p=yd(h,u),g=_e(u.type,c.dtype);(u.position===void 0||fm(u.position,p)!==fm(c.dposition))&&(u.position=c.dposition),o[h]=!0;let v=null;if(h in i&&i[h].type===g)v=i[h];else{const y=un.getScale(g);v=new y({id:h,type:g,ctx:this.ctx,chart:this}),i[v.id]=v}v.init(u,e)}),Te(o,(c,u)=>{c||delete i[u]}),Te(i,c=>{Ut.configure(this,c,c.options),Ut.addBox(this,c)})}_updateMetasets(){const e=this._metasets,n=this.data.datasets.length,i=e.length;if(e.sort((o,a)=>o.index-a.index),i>n){for(let o=n;o<i;++o)this._destroyDatasetMeta(o);e.splice(n,i-n)}this._sortedMetasets=e.slice(0).sort(pm("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:n}}=this;e.length>n.length&&delete this._stacks,e.forEach((i,o)=>{n.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){const e=[],n=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=n.length;i<o;i++){const a=n[i];let c=this.getDatasetMeta(i);const u=a.type||this.config.type;if(c.type&&c.type!==u&&(this._destroyDatasetMeta(i),c=this.getDatasetMeta(i)),c.type=u,c.indexAxis=a.indexAxis||vd(u,this.options),c.order=a.order||0,c.index=i,c.label=""+a.label,c.visible=this.isDatasetVisible(i),c.controller)c.controller.updateIndex(i),c.controller.linkScales();else{const h=un.getController(u),{datasetElementType:p,dataElementType:g}=Ue.datasets[u];Object.assign(h,{dataElementType:un.getElement(g),datasetElementType:p&&un.getElement(p)}),c.controller=new h(this,i),e.push(c.controller)}}return this._updateMetasets(),e}_resetElements(){Te(this.data.datasets,(e,n)=>{this.getDatasetMeta(n).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const n=this.config;n.update();const i=this._options=n.createResolver(n.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let c=0;for(let p=0,g=this.data.datasets.length;p<g;p++){const{controller:v}=this.getDatasetMeta(p),y=!o&&a.indexOf(v)===-1;v.buildOrUpdateElements(y),c=Math.max(+v.getMaxOverflow(),c)}c=this._minPadding=i.layout.autoPadding?c:0,this._updateLayout(c),o||Te(a,p=>{p.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(pm("z","_idx"));const{_active:u,_lastEvent:h}=this;h?this._eventHandler(h,!0):u.length&&this._updateHoverStyles(u,u,!0),this.render()}_updateScales(){Te(this.scales,e=>{Ut.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,n=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!Np(n,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,n=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:a}of n){const c=i==="_removeElements"?-a:a;X_(e,o,c)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const n=this.data.datasets.length,i=a=>new Set(e.filter(c=>c[0]===a).map((c,u)=>u+","+c.splice(1).join(","))),o=i(0);for(let a=1;a<n;a++)if(!Np(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Ut.update(this,this.width,this.height,e);const n=this.chartArea,i=n.width<=0||n.height<=0;this._layers=[],Te(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let n=0,i=this.data.datasets.length;n<i;++n)this.getDatasetMeta(n).controller.configure();for(let n=0,i=this.data.datasets.length;n<i;++n)this._updateDataset(n,ss(e)?e({datasetIndex:n}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,n){const i=this.getDatasetMeta(e),o={meta:i,index:e,mode:n,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(n),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(kn.has(this)?this.attached&&!kn.running(this)&&kn.start(this):(this.draw(),mm({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const n=this._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(this.chartArea);for(this._drawDatasets();e<n.length;++e)n[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const n=this._sortedMetasets,i=[];let o,a;for(o=0,a=n.length;o<a;++o){const c=n[o];(!e||c.visible)&&i.push(c)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)this._drawDataset(e[n]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const n=this.ctx,i={meta:e,index:e.index,cancelable:!0},o=Qg(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&Ia(n,o),e.controller.draw(),o&&Fa(n),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return Er(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,n,i,o){const a=qw.modes[n];return typeof a=="function"?a(this,e,i,o):[]}getDatasetMeta(e){const n=this.data.datasets[e],i=this._metasets;let o=i.filter(a=>a&&a._dataset===n).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:e,_dataset:n,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=Os(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const n=this.data.datasets[e];if(!n)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!n.hidden}setDatasetVisibility(e,n){const i=this.getDatasetMeta(e);i.hidden=!n}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,n,i){const o=i?"show":"hide",a=this.getDatasetMeta(e),c=a.controller._resolveAnimations(void 0,o);Sr(n)?(a.data[n].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),c.update(a,{visible:i}),this.update(u=>u.datasetIndex===e?o:void 0))}hide(e,n){this._updateVisibility(e,n,!1)}show(e,n){this._updateVisibility(e,n,!0)}_destroyDatasetMeta(e){const n=this._metasets[e];n&&n.controller&&n.controller._destroy(),delete this._metasets[e]}_stop(){let e,n;for(this.stop(),kn.remove(this),e=0,n=this.data.datasets.length;e<n;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:n}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),Op(e,n),this.platform.releaseContext(n),this.canvas=null,this.ctx=null),delete xa[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,n=this.platform,i=(a,c)=>{n.addEventListener(this,a,c),e[a]=c},o=(a,c,u)=>{a.offsetX=c,a.offsetY=u,this._eventHandler(a)};Te(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,n=this.platform,i=(h,p)=>{n.addEventListener(this,h,p),e[h]=p},o=(h,p)=>{e[h]&&(n.removeEventListener(this,h,p),delete e[h])},a=(h,p)=>{this.canvas&&this.resize(h,p)};let c;const u=()=>{o("attach",u),this.attached=!0,this.resize(),i("resize",a),i("detach",c)};c=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",u)},n.isAttached(this.canvas)?u():c()}unbindEvents(){Te(this._listeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._listeners={},Te(this._responsiveListeners,(e,n)=>{this.platform.removeEventListener(this,n,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,n,i){const o=i?"set":"remove";let a,c,u,h;for(n==="dataset"&&(a=this.getDatasetMeta(e[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),u=0,h=e.length;u<h;++u){c=e[u];const p=c&&this.getDatasetMeta(c.datasetIndex).controller;p&&p[o+"HoverStyle"](c.element,c.datasetIndex,c.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const n=this._active||[],i=e.map(({datasetIndex:a,index:c})=>{const u=this.getDatasetMeta(a);if(!u)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:u.data[c],index:c}});!ja(i,n)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,n))}notifyPlugins(e,n,i){return this._plugins.notify(this,e,n,i)}isPluginEnabled(e){return this._plugins._cache.filter(n=>n.plugin.id===e).length===1}_updateHoverStyles(e,n,i){const o=this.options.hover,a=(h,p)=>h.filter(g=>!p.some(v=>g.datasetIndex===v.datasetIndex&&g.index===v.index)),c=a(n,e),u=i?e:a(e,n);c.length&&this.updateHoverStyle(c,o.mode,!1),u.length&&o.mode&&this.updateHoverStyle(u,o.mode,!0)}_eventHandler(e,n){const i={event:e,replay:n,cancelable:!0,inChartArea:this.isPointInArea(e)},o=c=>(c.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;const a=this._handleEvent(e,n,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(e,n,i){const{_active:o=[],options:a}=this,c=n,u=this._getActiveElements(e,o,i,c),h=ej(e),p=Q_(e,this._lastEvent,i,h);i&&(this._lastEvent=null,Oe(a.onHover,[e,u,this],this),h&&Oe(a.onClick,[e,u,this],this));const g=!ja(u,o);return(g||n)&&(this._active=u,this._updateHoverStyles(u,o,n)),this._lastEvent=p,g}_getActiveElements(e,n,i,o){if(e.type==="mouseout")return[];if(!i)return n;const a=this.options.hover;return this.getElementsAtEventForMode(e,a.mode,a,o)}},ue(Qn,"defaults",Ue),ue(Qn,"instances",xa),ue(Qn,"overrides",Ds),ue(Qn,"registry",un),ue(Qn,"version",Y_),ue(Qn,"getChart",gm),Qn);function xm(){return Te(Fr.instances,t=>t._plugins.invalidate())}function G_(t,e,n){const{startAngle:i,x:o,y:a,outerRadius:c,innerRadius:u,options:h}=e,{borderWidth:p,borderJoinStyle:g}=h,v=Math.min(p/c,Mt(i-n));if(t.beginPath(),t.arc(o,a,c-p/2,i+v/2,n-v/2),u>0){const y=Math.min(p/u,Mt(i-n));t.arc(o,a,u+p/2,n-y/2,i+y/2,!0)}else{const y=Math.min(p/2,c*Mt(i-n));if(g==="round")t.arc(o,a,y,n-Ae/2,i+Ae/2,!0);else if(g==="bevel"){const b=2*y*y,_=-b*Math.cos(n+Ae/2)+o,k=-b*Math.sin(n+Ae/2)+a,j=b*Math.cos(i+Ae/2)+o,S=b*Math.sin(i+Ae/2)+a;t.lineTo(_,k),t.lineTo(j,S)}}t.closePath(),t.moveTo(0,0),t.rect(0,0,t.canvas.width,t.canvas.height),t.clip("evenodd")}function J_(t,e,n){const{startAngle:i,pixelMargin:o,x:a,y:c,outerRadius:u,innerRadius:h}=e;let p=o/u;t.beginPath(),t.arc(a,c,u,i-p,n+p),h>o?(p=o/h,t.arc(a,c,h,n+p,i-p,!0)):t.arc(a,c,o,n+Ge,i-Ge),t.closePath(),t.clip()}function Z_(t){return Hd(t,["outerStart","outerEnd","innerStart","innerEnd"])}function ek(t,e,n,i){const o=Z_(t.options.borderRadius),a=(n-e)/2,c=Math.min(a,i*e/2),u=h=>{const p=(n-Math.min(a,h))*i/2;return ht(h,0,Math.min(a,p))};return{outerStart:u(o.outerStart),outerEnd:u(o.outerEnd),innerStart:ht(o.innerStart,0,c),innerEnd:ht(o.innerEnd,0,c)}}function ci(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Ca(t,e,n,i,o,a){const{x:c,y:u,startAngle:h,pixelMargin:p,innerRadius:g}=e,v=Math.max(e.outerRadius+i+n-p,0),y=g>0?g+i+n+p:0;let b=0;const _=o-h;if(i){const re=g>0?g-i:0,W=v>0?v-i:0,ne=(re+W)/2,X=ne!==0?_*ne/(ne+i):_;b=(_-X)/2}const k=Math.max(.001,_*v-n/Ae)/v,j=(_-k)/2,S=h+j+b,N=o-j-b,{outerStart:T,outerEnd:A,innerStart:E,innerEnd:O}=ek(e,y,v,N-S),U=v-T,$=v-A,Y=S+T/U,Q=N-A/$,se=y+E,B=y+O,V=S+E/se,L=N-O/B;if(t.beginPath(),a){const re=(Y+Q)/2;if(t.arc(c,u,v,Y,re),t.arc(c,u,v,re,Q),A>0){const ie=ci($,Q,c,u);t.arc(ie.x,ie.y,A,Q,N+Ge)}const W=ci(B,N,c,u);if(t.lineTo(W.x,W.y),O>0){const ie=ci(B,L,c,u);t.arc(ie.x,ie.y,O,N+Ge,L+Math.PI)}const ne=(N-O/y+(S+E/y))/2;if(t.arc(c,u,y,N-O/y,ne,!0),t.arc(c,u,y,ne,S+E/y,!0),E>0){const ie=ci(se,V,c,u);t.arc(ie.x,ie.y,E,V+Math.PI,S-Ge)}const X=ci(U,S,c,u);if(t.lineTo(X.x,X.y),T>0){const ie=ci(U,Y,c,u);t.arc(ie.x,ie.y,T,S-Ge,Y)}}else{t.moveTo(c,u);const re=Math.cos(Y)*v+c,W=Math.sin(Y)*v+u;t.lineTo(re,W);const ne=Math.cos(Q)*v+c,X=Math.sin(Q)*v+u;t.lineTo(ne,X)}t.closePath()}function tk(t,e,n,i,o){const{fullCircles:a,startAngle:c,circumference:u}=e;let h=e.endAngle;if(a){Ca(t,e,n,i,h,o);for(let p=0;p<a;++p)t.fill();isNaN(u)||(h=c+(u%Be||Be))}return Ca(t,e,n,i,h,o),t.fill(),h}function nk(t,e,n,i,o){const{fullCircles:a,startAngle:c,circumference:u,options:h}=e,{borderWidth:p,borderJoinStyle:g,borderDash:v,borderDashOffset:y,borderRadius:b}=h,_=h.borderAlign==="inner";if(!p)return;t.setLineDash(v||[]),t.lineDashOffset=y,_?(t.lineWidth=p*2,t.lineJoin=g||"round"):(t.lineWidth=p,t.lineJoin=g||"bevel");let k=e.endAngle;if(a){Ca(t,e,n,i,k,o);for(let j=0;j<a;++j)t.stroke();isNaN(u)||(k=c+(u%Be||Be))}_&&J_(t,e,k),h.selfJoin&&k-c>=Ae&&b===0&&g!=="miter"&&G_(t,e,k),a||(Ca(t,e,n,i,k,o),t.stroke())}class pr extends Zt{constructor(n){super();ue(this,"circumference");ue(this,"endAngle");ue(this,"fullCircles");ue(this,"innerRadius");ue(this,"outerRadius");ue(this,"pixelMargin");ue(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,i,o){const a=this.getProps(["x","y"],o),{angle:c,distance:u}=Ag(a,{x:n,y:i}),{startAngle:h,endAngle:p,innerRadius:g,outerRadius:v,circumference:y}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),b=(this.options.spacing+this.options.borderWidth)/2,_=_e(y,p-h),k=Cr(c,h,p)&&h!==p,j=_>=Be||k,S=En(u,g+b,v+b);return j&&S}getCenterPoint(n){const{x:i,y:o,startAngle:a,endAngle:c,innerRadius:u,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:p,spacing:g}=this.options,v=(a+c)/2,y=(u+h+g+p)/2;return{x:i+Math.cos(v)*y,y:o+Math.sin(v)*y}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){const{options:i,circumference:o}=this,a=(i.offset||0)/4,c=(i.spacing||0)/2,u=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>Be?Math.floor(o/Be):0,o===0||this.innerRadius<0||this.outerRadius<0)return;n.save();const h=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(h)*a,Math.sin(h)*a);const p=1-Math.sin(Math.min(Ae,o||0)),g=a*p;n.fillStyle=i.backgroundColor,n.strokeStyle=i.borderColor,tk(n,this,g,c,u),nk(n,this,g,c,u),n.restore()}}ue(pr,"id","arc"),ue(pr,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),ue(pr,"defaultRoutes",{backgroundColor:"backgroundColor"}),ue(pr,"descriptors",{_scriptable:!0,_indexable:n=>n!=="borderDash"});function cx(t,e,n=e){t.lineCap=_e(n.borderCapStyle,e.borderCapStyle),t.setLineDash(_e(n.borderDash,e.borderDash)),t.lineDashOffset=_e(n.borderDashOffset,e.borderDashOffset),t.lineJoin=_e(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=_e(n.borderWidth,e.borderWidth),t.strokeStyle=_e(n.borderColor,e.borderColor)}function sk(t,e,n){t.lineTo(n.x,n.y)}function ik(t){return t.stepped?Cj:t.tension||t.cubicInterpolationMode==="monotone"?Ej:sk}function dx(t,e,n={}){const i=t.length,{start:o=0,end:a=i-1}=n,{start:c,end:u}=e,h=Math.max(o,c),p=Math.min(a,u),g=o<c&&a<c||o>u&&a>u;return{count:i,start:h,loop:e.loop,ilen:p<h&&!g?i+p-h:p-h}}function rk(t,e,n,i){const{points:o,options:a}=e,{count:c,start:u,loop:h,ilen:p}=dx(o,n,i),g=ik(a);let{move:v=!0,reverse:y}=i||{},b,_,k;for(b=0;b<=p;++b)_=o[(u+(y?p-b:b))%c],!_.skip&&(v?(t.moveTo(_.x,_.y),v=!1):g(t,k,_,y,a.stepped),k=_);return h&&(_=o[(u+(y?p:0))%c],g(t,k,_,y,a.stepped)),!!h}function ok(t,e,n,i){const o=e.points,{count:a,start:c,ilen:u}=dx(o,n,i),{move:h=!0,reverse:p}=i||{};let g=0,v=0,y,b,_,k,j,S;const N=A=>(c+(p?u-A:A))%a,T=()=>{k!==j&&(t.lineTo(g,j),t.lineTo(g,k),t.lineTo(g,S))};for(h&&(b=o[N(0)],t.moveTo(b.x,b.y)),y=0;y<=u;++y){if(b=o[N(y)],b.skip)continue;const A=b.x,E=b.y,O=A|0;O===_?(E<k?k=E:E>j&&(j=E),g=(v*g+A)/++v):(T(),t.lineTo(A,E),_=O,v=0,k=j=E),S=E}T()}function bd(t){const e=t.options,n=e.borderDash&&e.borderDash.length;return!t._decimated&&!t._loop&&!e.tension&&e.cubicInterpolationMode!=="monotone"&&!e.stepped&&!n?ok:rk}function ak(t){return t.stepped?ow:t.tension||t.cubicInterpolationMode==="monotone"?aw:Ns}function lk(t,e,n,i){let o=e._path;o||(o=e._path=new Path2D,e.path(o,n,i)&&o.closePath()),cx(t,e.options),t.stroke(o)}function ck(t,e,n,i){const{segments:o,options:a}=e,c=bd(e);for(const u of o)cx(t,a,u.style),t.beginPath(),c(t,e,u,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}const dk=typeof Path2D=="function";function uk(t,e,n,i){dk&&!e.options.segment?lk(t,e,n,i):ck(t,e,n,i)}class Pn extends Zt{constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,n){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;Jj(this._points,i,e,o,n),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=fw(this,this.options.segment))}first(){const e=this.segments,n=this.points;return e.length&&n[e[0].start]}last(){const e=this.segments,n=this.points,i=e.length;return i&&n[e[i-1].end]}interpolate(e,n){const i=this.options,o=e[n],a=this.points,c=Xg(this,{property:n,start:o,end:o});if(!c.length)return;const u=[],h=ak(i);let p,g;for(p=0,g=c.length;p<g;++p){const{start:v,end:y}=c[p],b=a[v],_=a[y];if(b===_){u.push(b);continue}const k=Math.abs((o-b[n])/(_[n]-b[n])),j=h(b,_,k,i.stepped);j[n]=e[n],u.push(j)}return u.length===1?u[0]:u}pathSegment(e,n,i){return bd(this)(e,this,n,i)}path(e,n,i){const o=this.segments,a=bd(this);let c=this._loop;n=n||0,i=i||this.points.length-n;for(const u of o)c&=a(e,this,u,{start:n,end:n+i-1});return!!c}draw(e,n,i,o){const a=this.options||{};(this.points||[]).length&&a.borderWidth&&(e.save(),uk(e,this,i,o),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}ue(Pn,"id","line"),ue(Pn,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),ue(Pn,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),ue(Pn,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function vm(t,e,n,i){const o=t.options,{[n]:a}=t.getProps([n],i);return Math.abs(e-a)<o.radius+o.hitRadius}class br extends Zt{constructor(n){super();ue(this,"parsed");ue(this,"skip");ue(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,n&&Object.assign(this,n)}inRange(n,i,o){const a=this.options,{x:c,y:u}=this.getProps(["x","y"],o);return Math.pow(n-c,2)+Math.pow(i-u,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(n,i){return vm(this,n,"x",i)}inYRange(n,i){return vm(this,n,"y",i)}getCenterPoint(n){const{x:i,y:o}=this.getProps(["x","y"],n);return{x:i,y:o}}size(n){n=n||this.options||{};let i=n.radius||0;i=Math.max(i,i&&n.hoverRadius||0);const o=i&&n.borderWidth||0;return(i+o)*2}draw(n,i){const o=this.options;this.skip||o.radius<.1||!Er(this,i,this.size(o)/2)||(n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.fillStyle=o.backgroundColor,xd(n,o,this.x,this.y))}getRange(){const n=this.options||{};return n.radius+n.hitRadius}}ue(br,"id","point"),ue(br,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),ue(br,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function ux(t,e){const{x:n,y:i,base:o,width:a,height:c}=t.getProps(["x","y","base","width","height"],e);let u,h,p,g,v;return t.horizontal?(v=c/2,u=Math.min(n,o),h=Math.max(n,o),p=i-v,g=i+v):(v=a/2,u=n-v,h=n+v,p=Math.min(i,o),g=Math.max(i,o)),{left:u,top:p,right:h,bottom:g}}function es(t,e,n,i){return t?0:ht(e,n,i)}function hk(t,e,n){const i=t.options.borderWidth,o=t.borderSkipped,a=Fg(i);return{t:es(o.top,a.top,0,n),r:es(o.right,a.right,0,e),b:es(o.bottom,a.bottom,0,n),l:es(o.left,a.left,0,e)}}function fk(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,a=di(o),c=Math.min(e,n),u=t.borderSkipped,h=i||Se(o);return{topLeft:es(!h||u.top||u.left,a.topLeft,0,c),topRight:es(!h||u.top||u.right,a.topRight,0,c),bottomLeft:es(!h||u.bottom||u.left,a.bottomLeft,0,c),bottomRight:es(!h||u.bottom||u.right,a.bottomRight,0,c)}}function pk(t){const e=ux(t),n=e.right-e.left,i=e.bottom-e.top,o=hk(t,n/2,i/2),a=fk(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:a},inner:{x:e.left+o.l,y:e.top+o.t,w:n-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function nd(t,e,n,i){const o=e===null,a=n===null,u=t&&!(o&&a)&&ux(t,i);return u&&(o||En(e,u.left,u.right))&&(a||En(n,u.top,u.bottom))}function mk(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function gk(t,e){t.rect(e.x,e.y,e.w,e.h)}function sd(t,e,n={}){const i=t.x!==n.x?-e:0,o=t.y!==n.y?-e:0,a=(t.x+t.w!==n.x+n.w?e:0)-i,c=(t.y+t.h!==n.y+n.h?e:0)-o;return{x:t.x+i,y:t.y+o,w:t.w+a,h:t.h+c,radius:t.radius}}class va extends Zt{constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){const{inflateAmount:n,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:c}=pk(this),u=mk(c.radius)?ka:gk;e.save(),(c.w!==a.w||c.h!==a.h)&&(e.beginPath(),u(e,sd(c,n,a)),e.clip(),u(e,sd(a,-n,c)),e.fillStyle=i,e.fill("evenodd")),e.beginPath(),u(e,sd(a,n)),e.fillStyle=o,e.fill(),e.restore()}inRange(e,n,i){return nd(this,e,n,i)}inXRange(e,n){return nd(this,e,null,n)}inYRange(e,n){return nd(this,null,e,n)}getCenterPoint(e){const{x:n,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],e);return{x:a?(n+o)/2:n,y:a?i:(i+o)/2}}getRange(e){return e==="x"?this.width/2:this.height/2}}ue(va,"id","bar"),ue(va,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),ue(va,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function xk(t,e,n){const i=t.segments,o=t.points,a=e.points,c=[];for(const u of i){let{start:h,end:p}=u;p=Wa(h,p,o);const g=jd(n,o[h],o[p],u.loop);if(!e.segments){c.push({source:u,target:g,start:o[h],end:o[p]});continue}const v=Xg(e,g);for(const y of v){const b=jd(n,a[y.start],a[y.end],y.loop),_=Kg(u,o,b);for(const k of _)c.push({source:k,target:y,start:{[n]:ym(g,b,"start",Math.max)},end:{[n]:ym(g,b,"end",Math.min)}})}}return c}function jd(t,e,n,i){if(i)return;let o=e[t],a=n[t];return t==="angle"&&(o=Mt(o),a=Mt(a)),{property:t,start:o,end:a}}function vk(t,e){const{x:n=null,y:i=null}=t||{},o=e.points,a=[];return e.segments.forEach(({start:c,end:u})=>{u=Wa(c,u,o);const h=o[c],p=o[u];i!==null?(a.push({x:h.x,y:i}),a.push({x:p.x,y:i})):n!==null&&(a.push({x:n,y:h.y}),a.push({x:n,y:p.y}))}),a}function Wa(t,e,n){for(;e>t;e--){const i=n[e];if(!isNaN(i.x)&&!isNaN(i.y))break}return e}function ym(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function hx(t,e){let n=[],i=!1;return qe(t)?(i=!0,n=t):n=vk(t,e),n.length?new Pn({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function bm(t){return t&&t.fill!==!1}function yk(t,e,n){let o=t[e].fill;const a=[e];let c;if(!n)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!pt(o))return o;if(c=t[o],!c)return!1;if(c.visible)return o;a.push(o),o=c.fill}return!1}function bk(t,e,n){const i=kk(t);if(Se(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return pt(o)&&Math.floor(o)===o?jk(i[0],e,o,n):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function jk(t,e,n,i){return(t==="-"||t==="+")&&(n=e+n),n===e||n<0||n>=i?!1:n}function wk(t,e){let n=null;return t==="start"?n=e.bottom:t==="end"?n=e.top:Se(t)?n=e.getPixelForValue(t.value):e.getBasePixel&&(n=e.getBasePixel()),n}function _k(t,e,n){let i;return t==="start"?i=n:t==="end"?i=e.options.reverse?e.min:e.max:Se(t)?i=t.value:i=e.getBaseValue(),i}function kk(t){const e=t.options,n=e.fill;let i=_e(n&&n.target,n);return i===void 0&&(i=!!e.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Sk(t){const{scale:e,index:n,line:i}=t,o=[],a=i.segments,c=i.points,u=Nk(e,n);u.push(hx({x:null,y:e.bottom},i));for(let h=0;h<a.length;h++){const p=a[h];for(let g=p.start;g<=p.end;g++)Ck(o,c[g],u)}return new Pn({points:o,options:{}})}function Nk(t,e){const n=[],i=t.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){const a=i[o];if(a.index===e)break;a.hidden||n.unshift(a.dataset)}return n}function Ck(t,e,n){const i=[];for(let o=0;o<n.length;o++){const a=n[o],{first:c,last:u,point:h}=Ek(a,e,"x");if(!(!h||c&&u)){if(c)i.unshift(h);else if(t.push(h),!u)break}}t.push(...i)}function Ek(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const o=i[n],a=t.segments,c=t.points;let u=!1,h=!1;for(let p=0;p<a.length;p++){const g=a[p],v=c[g.start][n],y=c[g.end][n];if(En(o,v,y)){u=o===v,h=o===y;break}}return{first:u,last:h,point:i}}class fx{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,n,i){const{x:o,y:a,radius:c}=this;return n=n||{start:0,end:Be},e.arc(o,a,c,n.end,n.start,!0),!i.bounds}interpolate(e){const{x:n,y:i,radius:o}=this,a=e.angle;return{x:n+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}}function Pk(t){const{chart:e,fill:n,line:i}=t;if(pt(n))return Rk(e,n);if(n==="stack")return Sk(t);if(n==="shape")return!0;const o=Tk(t);return o instanceof fx?o:hx(o,i)}function Rk(t,e){const n=t.getDatasetMeta(e);return n&&t.isDatasetVisible(e)?n.dataset:null}function Tk(t){return(t.scale||{}).getPointPositionForValue?Mk(t):Ak(t)}function Ak(t){const{scale:e={},fill:n}=t,i=wk(n,e);if(pt(i)){const o=e.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function Mk(t){const{scale:e,fill:n}=t,i=e.options,o=e.getLabels().length,a=i.reverse?e.max:e.min,c=_k(n,e,a),u=[];if(i.grid.circular){const h=e.getPointPositionForValue(0,a);return new fx({x:h.x,y:h.y,radius:e.getDistanceFromCenterForValue(c)})}for(let h=0;h<o;++h)u.push(e.getPointPositionForValue(h,c));return u}function id(t,e,n){const i=Pk(e),{chart:o,index:a,line:c,scale:u,axis:h}=e,p=c.options,g=p.fill,v=p.backgroundColor,{above:y=v,below:b=v}=g||{},_=o.getDatasetMeta(a),k=Qg(o,_);i&&c.points.length&&(Ia(t,n),Dk(t,{line:c,target:i,above:y,below:b,area:n,scale:u,axis:h,clip:k}),Fa(t))}function Dk(t,e){const{line:n,target:i,above:o,below:a,area:c,scale:u,clip:h}=e,p=n._loop?"angle":e.axis;t.save();let g=a;a!==o&&(p==="x"?(jm(t,i,c.top),rd(t,{line:n,target:i,color:o,scale:u,property:p,clip:h}),t.restore(),t.save(),jm(t,i,c.bottom)):p==="y"&&(wm(t,i,c.left),rd(t,{line:n,target:i,color:a,scale:u,property:p,clip:h}),t.restore(),t.save(),wm(t,i,c.right),g=o)),rd(t,{line:n,target:i,color:g,scale:u,property:p,clip:h}),t.restore()}function jm(t,e,n){const{segments:i,points:o}=e;let a=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[Wa(h,p,o)];a?(t.moveTo(g.x,g.y),a=!1):(t.lineTo(g.x,n),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(v.x,n)}t.lineTo(e.first().x,n),t.closePath(),t.clip()}function wm(t,e,n){const{segments:i,points:o}=e;let a=!0,c=!1;t.beginPath();for(const u of i){const{start:h,end:p}=u,g=o[h],v=o[Wa(h,p,o)];a?(t.moveTo(g.x,g.y),a=!1):(t.lineTo(n,g.y),t.lineTo(g.x,g.y)),c=!!e.pathSegment(t,u,{move:c}),c?t.closePath():t.lineTo(n,v.y)}t.lineTo(n,e.first().y),t.closePath(),t.clip()}function rd(t,e){const{line:n,target:i,property:o,color:a,scale:c,clip:u}=e,h=xk(n,i,o);for(const{source:p,target:g,start:v,end:y}of h){const{style:{backgroundColor:b=a}={}}=p,_=i!==!0;t.save(),t.fillStyle=b,Lk(t,c,u,_&&jd(o,v,y)),t.beginPath();const k=!!n.pathSegment(t,p);let j;if(_){k?t.closePath():_m(t,i,y,o);const S=!!i.pathSegment(t,g,{move:k,reverse:!0});j=k&&S,j||_m(t,i,v,o)}t.closePath(),t.fill(j?"evenodd":"nonzero"),t.restore()}}function Lk(t,e,n,i){const o=e.chart.chartArea,{property:a,start:c,end:u}=i||{};if(a==="x"||a==="y"){let h,p,g,v;a==="x"?(h=c,p=o.top,g=u,v=o.bottom):(h=o.left,p=c,g=o.right,v=u),t.beginPath(),n&&(h=Math.max(h,n.left),g=Math.min(g,n.right),p=Math.max(p,n.top),v=Math.min(v,n.bottom)),t.rect(h,p,g-h,v-p),t.clip()}}function _m(t,e,n,i){const o=e.interpolate(n,i);o&&t.lineTo(o.x,o.y)}var px={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,o=[];let a,c,u,h;for(c=0;c<i;++c)a=t.getDatasetMeta(c),u=a.dataset,h=null,u&&u.options&&u instanceof Pn&&(h={visible:t.isDatasetVisible(c),index:c,fill:bk(u,c,i),chart:t,axis:a.controller.options.indexAxis,scale:a.vScale,line:u}),a.$filler=h,o.push(h);for(c=0;c<i;++c)h=o[c],!(!h||h.fill===!1)&&(h.fill=yk(o,c,n.propagate))},beforeDraw(t,e,n){const i=n.drawTime==="beforeDraw",o=t.getSortedVisibleDatasetMetas(),a=t.chartArea;for(let c=o.length-1;c>=0;--c){const u=o[c].$filler;u&&(u.line.updateControlPoints(a,u.axis),i&&u.fill&&id(t.ctx,u,a))}},beforeDatasetsDraw(t,e,n){if(n.drawTime!=="beforeDatasetsDraw")return;const i=t.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){const a=i[o].$filler;bm(a)&&id(t.ctx,a,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;!bm(i)||n.drawTime!=="beforeDatasetDraw"||id(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const km=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=t.pointStyleWidth||Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},Ok=(t,e)=>t!==null&&e!==null&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class Sm extends Zt{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n,i){this.maxWidth=e,this.maxHeight=n,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const e=this.options.labels||{};let n=Oe(e.generateLabels,[this.chart],this)||[];e.filter&&(n=n.filter(i=>e.filter(i,this.chart.data))),e.sort&&(n=n.sort((i,o)=>e.sort(i,o,this.chart.data))),this.options.reverse&&n.reverse(),this.legendItems=n}fit(){const{options:e,ctx:n}=this;if(!e.display){this.width=this.height=0;return}const i=e.labels,o=ft(i.font),a=o.size,c=this._computeTitleHeight(),{boxWidth:u,itemHeight:h}=km(i,a);let p,g;n.font=o.string,this.isHorizontal()?(p=this.maxWidth,g=this._fitRows(c,a,u,h)+10):(g=this.maxHeight,p=this._fitCols(c,o,u,h)+10),this.width=Math.min(p,e.maxWidth||this.maxWidth),this.height=Math.min(g,e.maxHeight||this.maxHeight)}_fitRows(e,n,i,o){const{ctx:a,maxWidth:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.lineWidths=[0],g=o+u;let v=e;a.textAlign="left",a.textBaseline="middle";let y=-1,b=-g;return this.legendItems.forEach((_,k)=>{const j=i+n/2+a.measureText(_.text).width;(k===0||p[p.length-1]+j+2*u>c)&&(v+=g,p[p.length-(k>0?0:1)]=0,b+=g,y++),h[k]={left:0,top:b,row:y,width:j,height:o},p[p.length-1]+=j+u}),v}_fitCols(e,n,i,o){const{ctx:a,maxHeight:c,options:{labels:{padding:u}}}=this,h=this.legendHitBoxes=[],p=this.columnSizes=[],g=c-e;let v=u,y=0,b=0,_=0,k=0;return this.legendItems.forEach((j,S)=>{const{itemWidth:N,itemHeight:T}=zk(i,n,a,j,o);S>0&&b+T+2*u>g&&(v+=y+u,p.push({width:y,height:b}),_+=y+u,k++,y=b=0),h[S]={left:_,top:b,col:k,width:N,height:T},y=Math.max(y,N),b+=T+u}),v+=y,p.push({width:y,height:b}),v}adjustHitBoxes(){if(!this.options.display)return;const e=this._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:o},rtl:a}}=this,c=ui(a,this.left,this.width);if(this.isHorizontal()){let u=0,h=dt(i,this.left+o,this.right-this.lineWidths[u]);for(const p of n)u!==p.row&&(u=p.row,h=dt(i,this.left+o,this.right-this.lineWidths[u])),p.top+=this.top+e+o,p.left=c.leftForLtr(c.x(h),p.width),h+=p.width+o}else{let u=0,h=dt(i,this.top+e+o,this.bottom-this.columnSizes[u].height);for(const p of n)p.col!==u&&(u=p.col,h=dt(i,this.top+e+o,this.bottom-this.columnSizes[u].height)),p.top=h,p.left+=this.left+o,p.left=c.leftForLtr(c.x(p.left),p.width),h+=p.height+o}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const e=this.ctx;Ia(e,this),this._draw(),Fa(e)}}_draw(){const{options:e,columnSizes:n,lineWidths:i,ctx:o}=this,{align:a,labels:c}=e,u=Ue.color,h=ui(e.rtl,this.left,this.width),p=ft(c.font),{padding:g}=c,v=p.size,y=v/2;let b;this.drawTitle(),o.textAlign=h.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=p.string;const{boxWidth:_,boxHeight:k,itemHeight:j}=km(c,v),S=function(O,U,$){if(isNaN(_)||_<=0||isNaN(k)||k<0)return;o.save();const Y=_e($.lineWidth,1);if(o.fillStyle=_e($.fillStyle,u),o.lineCap=_e($.lineCap,"butt"),o.lineDashOffset=_e($.lineDashOffset,0),o.lineJoin=_e($.lineJoin,"miter"),o.lineWidth=Y,o.strokeStyle=_e($.strokeStyle,u),o.setLineDash(_e($.lineDash,[])),c.usePointStyle){const Q={radius:k*Math.SQRT2/2,pointStyle:$.pointStyle,rotation:$.rotation,borderWidth:Y},se=h.xPlus(O,_/2),B=U+y;Ig(o,Q,se,B,c.pointStyleWidth&&_)}else{const Q=U+Math.max((v-k)/2,0),se=h.leftForLtr(O,_),B=di($.borderRadius);o.beginPath(),Object.values(B).some(V=>V!==0)?ka(o,{x:se,y:Q,w:_,h:k,radius:B}):o.rect(se,Q,_,k),o.fill(),Y!==0&&o.stroke()}o.restore()},N=function(O,U,$){Pr(o,$.text,O,U+j/2,p,{strikethrough:$.hidden,textAlign:h.textAlign($.textAlign)})},T=this.isHorizontal(),A=this._computeTitleHeight();T?b={x:dt(a,this.left+g,this.right-i[0]),y:this.top+g+A,line:0}:b={x:this.left+g,y:dt(a,this.top+A+g,this.bottom-n[0].height),line:0},Vg(this.ctx,e.textDirection);const E=j+g;this.legendItems.forEach((O,U)=>{o.strokeStyle=O.fontColor,o.fillStyle=O.fontColor;const $=o.measureText(O.text).width,Y=h.textAlign(O.textAlign||(O.textAlign=c.textAlign)),Q=_+y+$;let se=b.x,B=b.y;h.setWidth(this.width),T?U>0&&se+Q+g>this.right&&(B=b.y+=E,b.line++,se=b.x=dt(a,this.left+g,this.right-i[b.line])):U>0&&B+E>this.bottom&&(se=b.x=se+n[b.line].width+g,b.line++,B=b.y=dt(a,this.top+A+g,this.bottom-n[b.line].height));const V=h.x(se);if(S(V,B,O),se=pj(Y,se+_+y,T?se+Q:this.right,e.rtl),N(h.x(se),B,O),T)b.x+=Q+g;else if(typeof O.text!="string"){const L=p.lineHeight;b.y+=mx(O,L)+g}else b.y+=E}),Yg(this.ctx,e.textDirection)}drawTitle(){const e=this.options,n=e.title,i=ft(n.font),o=Vt(n.padding);if(!n.display)return;const a=ui(e.rtl,this.left,this.width),c=this.ctx,u=n.position,h=i.size/2,p=o.top+h;let g,v=this.left,y=this.width;if(this.isHorizontal())y=Math.max(...this.lineWidths),g=this.top+p,v=dt(e.align,v,this.right-y);else{const _=this.columnSizes.reduce((k,j)=>Math.max(k,j.height),0);g=p+dt(e.align,this.top,this.bottom-_-e.labels.padding-this._computeTitleHeight())}const b=dt(u,v,v+y);c.textAlign=a.textAlign(Id(u)),c.textBaseline="middle",c.strokeStyle=n.color,c.fillStyle=n.color,c.font=i.string,Pr(c,n.text,b,g,i)}_computeTitleHeight(){const e=this.options.title,n=ft(e.font),i=Vt(e.padding);return e.display?n.lineHeight+i.height:0}_getLegendItemAt(e,n){let i,o,a;if(En(e,this.left,this.right)&&En(n,this.top,this.bottom)){for(a=this.legendHitBoxes,i=0;i<a.length;++i)if(o=a[i],En(e,o.left,o.left+o.width)&&En(n,o.top,o.top+o.height))return this.legendItems[i]}return null}handleEvent(e){const n=this.options;if(!Bk(e.type,n))return;const i=this._getLegendItemAt(e.x,e.y);if(e.type==="mousemove"||e.type==="mouseout"){const o=this._hoveredItem,a=Ok(o,i);o&&!a&&Oe(n.onLeave,[e,o,this],this),this._hoveredItem=i,i&&!a&&Oe(n.onHover,[e,i,this],this)}else i&&Oe(n.onClick,[e,i,this],this)}}function zk(t,e,n,i,o){const a=Ik(i,t,e,n),c=Fk(o,i,e.lineHeight);return{itemWidth:a,itemHeight:c}}function Ik(t,e,n,i){let o=t.text;return o&&typeof o!="string"&&(o=o.reduce((a,c)=>a.length>c.length?a:c)),e+n.size/2+i.measureText(o).width}function Fk(t,e,n){let i=t;return typeof e.text!="string"&&(i=mx(e,n)),i}function mx(t,e){const n=t.text?t.text.length:0;return e*n}function Bk(t,e){return!!((t==="mousemove"||t==="mouseout")&&(e.onHover||e.onLeave)||e.onClick&&(t==="click"||t==="mouseup"))}var gx={id:"legend",_element:Sm,start(t,e,n){const i=t.legend=new Sm({ctx:t.ctx,options:n,chart:t});Ut.configure(t,i,n),Ut.addBox(t,i)},stop(t){Ut.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;Ut.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,o=n.chart;o.isDatasetVisible(i)?(o.hide(i),e.hidden=!0):(o.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:o,color:a,useBorderRadius:c,borderRadius:u}}=t.legend.options;return t._getSortedDatasetMetas().map(h=>{const p=h.controller.getStyle(n?0:void 0),g=Vt(p.borderWidth);return{text:e[h.index].label,fillStyle:p.backgroundColor,fontColor:a,hidden:!h.visible,lineCap:p.borderCapStyle,lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:(g.width+g.height)/4,strokeStyle:p.borderColor,pointStyle:i||p.pointStyle,rotation:p.rotation,textAlign:o||p.textAlign,borderRadius:c&&(u||p.borderRadius),datasetIndex:h.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class xx extends Zt{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,n){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=n;const o=qe(i.text)?i.text.length:1;this._padding=Vt(i.padding);const a=o*ft(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){const e=this.options.position;return e==="top"||e==="bottom"}_drawArgs(e){const{top:n,left:i,bottom:o,right:a,options:c}=this,u=c.align;let h=0,p,g,v;return this.isHorizontal()?(g=dt(u,i,a),v=n+e,p=a-i):(c.position==="left"?(g=i+e,v=dt(u,o,n),h=Ae*-.5):(g=a-e,v=dt(u,n,o),h=Ae*.5),p=o-n),{titleX:g,titleY:v,maxWidth:p,rotation:h}}draw(){const e=this.ctx,n=this.options;if(!n.display)return;const i=ft(n.font),a=i.lineHeight/2+this._padding.top,{titleX:c,titleY:u,maxWidth:h,rotation:p}=this._drawArgs(a);Pr(e,n.text,0,0,i,{color:n.color,maxWidth:h,rotation:p,textAlign:Id(n.align),textBaseline:"middle",translation:[c,u]})}}function Hk(t,e){const n=new xx({ctx:t.ctx,options:e,chart:t});Ut.configure(t,n,e),Ut.addBox(t,n),t.titleBlock=n}var vx={id:"title",_element:xx,start(t,e,n){Hk(t,n)},stop(t){const e=t.titleBlock;Ut.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;Ut.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const mr={average(t){if(!t.length)return!1;let e,n,i=new Set,o=0,a=0;for(e=0,n=t.length;e<n;++e){const u=t[e].element;if(u&&u.hasValue()){const h=u.tooltipPosition();i.add(h.x),o+=h.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((u,h)=>u+h)/i.size,y:o/a}},nearest(t,e){if(!t.length)return!1;let n=e.x,i=e.y,o=Number.POSITIVE_INFINITY,a,c,u;for(a=0,c=t.length;a<c;++a){const h=t[a].element;if(h&&h.hasValue()){const p=h.getCenterPoint(),g=md(e,p);g<o&&(o=g,u=h)}}if(u){const h=u.tooltipPosition();n=h.x,i=h.y}return{x:n,y:i}}};function dn(t,e){return e&&(qe(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function Sn(t){return(typeof t=="string"||t instanceof String)&&t.indexOf(`
`)>-1?t.split(`
`):t}function Wk(t,e){const{element:n,datasetIndex:i,index:o}=e,a=t.getDatasetMeta(i).controller,{label:c,value:u}=a.getLabelAndValue(o);return{chart:t,label:c,parsed:a.getParsed(o),raw:t.data.datasets[i].data[o],formattedValue:u,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:n}}function Nm(t,e){const n=t.chart.ctx,{body:i,footer:o,title:a}=t,{boxWidth:c,boxHeight:u}=e,h=ft(e.bodyFont),p=ft(e.titleFont),g=ft(e.footerFont),v=a.length,y=o.length,b=i.length,_=Vt(e.padding);let k=_.height,j=0,S=i.reduce((A,E)=>A+E.before.length+E.lines.length+E.after.length,0);if(S+=t.beforeBody.length+t.afterBody.length,v&&(k+=v*p.lineHeight+(v-1)*e.titleSpacing+e.titleMarginBottom),S){const A=e.displayColors?Math.max(u,h.lineHeight):h.lineHeight;k+=b*A+(S-b)*h.lineHeight+(S-1)*e.bodySpacing}y&&(k+=e.footerMarginTop+y*g.lineHeight+(y-1)*e.footerSpacing);let N=0;const T=function(A){j=Math.max(j,n.measureText(A).width+N)};return n.save(),n.font=p.string,Te(t.title,T),n.font=h.string,Te(t.beforeBody.concat(t.afterBody),T),N=e.displayColors?c+2+e.boxPadding:0,Te(i,A=>{Te(A.before,T),Te(A.lines,T),Te(A.after,T)}),N=0,n.font=g.string,Te(t.footer,T),n.restore(),j+=_.width,{width:j,height:k}}function $k(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function Uk(t,e,n,i){const{x:o,width:a}=i,c=n.caretSize+n.caretPadding;if(t==="left"&&o+a+c>e.width||t==="right"&&o-a-c<0)return!0}function Vk(t,e,n,i){const{x:o,width:a}=n,{width:c,chartArea:{left:u,right:h}}=t;let p="center";return i==="center"?p=o<=(u+h)/2?"left":"right":o<=a/2?p="left":o>=c-a/2&&(p="right"),Uk(p,t,e,n)&&(p="center"),p}function Cm(t,e,n){const i=n.yAlign||e.yAlign||$k(t,n);return{xAlign:n.xAlign||e.xAlign||Vk(t,e,n,i),yAlign:i}}function Yk(t,e){let{x:n,width:i}=t;return e==="right"?n-=i:e==="center"&&(n-=i/2),n}function qk(t,e,n){let{y:i,height:o}=t;return e==="top"?i+=n:e==="bottom"?i-=o+n:i-=o/2,i}function Em(t,e,n,i){const{caretSize:o,caretPadding:a,cornerRadius:c}=t,{xAlign:u,yAlign:h}=n,p=o+a,{topLeft:g,topRight:v,bottomLeft:y,bottomRight:b}=di(c);let _=Yk(e,u);const k=qk(e,h,p);return h==="center"?u==="left"?_+=p:u==="right"&&(_-=p):u==="left"?_-=Math.max(g,y)+o:u==="right"&&(_+=Math.max(v,b)+o),{x:ht(_,0,i.width-e.width),y:ht(k,0,i.height-e.height)}}function ca(t,e,n){const i=Vt(n.padding);return e==="center"?t.x+t.width/2:e==="right"?t.x+t.width-i.right:t.x+i.left}function Pm(t){return dn([],Sn(t))}function Kk(t,e,n){return Os(t,{tooltip:e,tooltipItems:n,type:"tooltip"})}function Rm(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}const yx={beforeTitle:_n,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&this.options.mode==="dataset")return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:_n,beforeBody:_n,beforeLabel:_n,label(t){if(this&&this.options&&this.options.mode==="dataset")return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Ee(n)||(e+=n),e},labelColor(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const n=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:_n,afterBody:_n,beforeFooter:_n,footer:_n,afterFooter:_n};function kt(t,e,n,i){const o=t[e].call(n,i);return typeof o>"u"?yx[e].call(n,i):o}class wd extends Zt{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const n=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&n.options.animation&&i.animations,a=new Gg(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=Kk(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,n){const{callbacks:i}=n,o=kt(i,"beforeTitle",this,e),a=kt(i,"title",this,e),c=kt(i,"afterTitle",this,e);let u=[];return u=dn(u,Sn(o)),u=dn(u,Sn(a)),u=dn(u,Sn(c)),u}getBeforeBody(e,n){return Pm(kt(n.callbacks,"beforeBody",this,e))}getBody(e,n){const{callbacks:i}=n,o=[];return Te(e,a=>{const c={before:[],lines:[],after:[]},u=Rm(i,a);dn(c.before,Sn(kt(u,"beforeLabel",this,a))),dn(c.lines,kt(u,"label",this,a)),dn(c.after,Sn(kt(u,"afterLabel",this,a))),o.push(c)}),o}getAfterBody(e,n){return Pm(kt(n.callbacks,"afterBody",this,e))}getFooter(e,n){const{callbacks:i}=n,o=kt(i,"beforeFooter",this,e),a=kt(i,"footer",this,e),c=kt(i,"afterFooter",this,e);let u=[];return u=dn(u,Sn(o)),u=dn(u,Sn(a)),u=dn(u,Sn(c)),u}_createItems(e){const n=this._active,i=this.chart.data,o=[],a=[],c=[];let u=[],h,p;for(h=0,p=n.length;h<p;++h)u.push(Wk(this.chart,n[h]));return e.filter&&(u=u.filter((g,v,y)=>e.filter(g,v,y,i))),e.itemSort&&(u=u.sort((g,v)=>e.itemSort(g,v,i))),Te(u,g=>{const v=Rm(e.callbacks,g);o.push(kt(v,"labelColor",this,g)),a.push(kt(v,"labelPointStyle",this,g)),c.push(kt(v,"labelTextColor",this,g))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=c,this.dataPoints=u,u}update(e,n){const i=this.options.setContext(this.getContext()),o=this._active;let a,c=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{const u=mr[i.position].call(this,o,this._eventPosition);c=this._createItems(i),this.title=this.getTitle(c,i),this.beforeBody=this.getBeforeBody(c,i),this.body=this.getBody(c,i),this.afterBody=this.getAfterBody(c,i),this.footer=this.getFooter(c,i);const h=this._size=Nm(this,i),p=Object.assign({},u,h),g=Cm(this.chart,i,p),v=Em(i,p,g,this.chart);this.xAlign=g.xAlign,this.yAlign=g.yAlign,a={opacity:1,x:v.x,y:v.y,width:h.width,height:h.height,caretX:u.x,caretY:u.y}}this._tooltipItems=c,this.$context=void 0,a&&this._resolveAnimations().update(this,a),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:n})}drawCaret(e,n,i,o){const a=this.getCaretPosition(e,i,o);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)}getCaretPosition(e,n,i){const{xAlign:o,yAlign:a}=this,{caretSize:c,cornerRadius:u}=i,{topLeft:h,topRight:p,bottomLeft:g,bottomRight:v}=di(u),{x:y,y:b}=e,{width:_,height:k}=n;let j,S,N,T,A,E;return a==="center"?(A=b+k/2,o==="left"?(j=y,S=j-c,T=A+c,E=A-c):(j=y+_,S=j+c,T=A-c,E=A+c),N=j):(o==="left"?S=y+Math.max(h,g)+c:o==="right"?S=y+_-Math.max(p,v)-c:S=this.caretX,a==="top"?(T=b,A=T-c,j=S-c,N=S+c):(T=b+k,A=T+c,j=S+c,N=S-c),E=T),{x1:j,x2:S,x3:N,y1:T,y2:A,y3:E}}drawTitle(e,n,i){const o=this.title,a=o.length;let c,u,h;if(a){const p=ui(i.rtl,this.x,this.width);for(e.x=ca(this,i.titleAlign,i),n.textAlign=p.textAlign(i.titleAlign),n.textBaseline="middle",c=ft(i.titleFont),u=i.titleSpacing,n.fillStyle=i.titleColor,n.font=c.string,h=0;h<a;++h)n.fillText(o[h],p.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+u,h+1===a&&(e.y+=i.titleMarginBottom-u)}}_drawColorBox(e,n,i,o,a){const c=this.labelColors[i],u=this.labelPointStyles[i],{boxHeight:h,boxWidth:p}=a,g=ft(a.bodyFont),v=ca(this,"left",a),y=o.x(v),b=h<g.lineHeight?(g.lineHeight-h)/2:0,_=n.y+b;if(a.usePointStyle){const k={radius:Math.min(p,h)/2,pointStyle:u.pointStyle,rotation:u.rotation,borderWidth:1},j=o.leftForLtr(y,p)+p/2,S=_+h/2;e.strokeStyle=a.multiKeyBackground,e.fillStyle=a.multiKeyBackground,xd(e,k,j,S),e.strokeStyle=c.borderColor,e.fillStyle=c.backgroundColor,xd(e,k,j,S)}else{e.lineWidth=Se(c.borderWidth)?Math.max(...Object.values(c.borderWidth)):c.borderWidth||1,e.strokeStyle=c.borderColor,e.setLineDash(c.borderDash||[]),e.lineDashOffset=c.borderDashOffset||0;const k=o.leftForLtr(y,p),j=o.leftForLtr(o.xPlus(y,1),p-2),S=di(c.borderRadius);Object.values(S).some(N=>N!==0)?(e.beginPath(),e.fillStyle=a.multiKeyBackground,ka(e,{x:k,y:_,w:p,h,radius:S}),e.fill(),e.stroke(),e.fillStyle=c.backgroundColor,e.beginPath(),ka(e,{x:j,y:_+1,w:p-2,h:h-2,radius:S}),e.fill()):(e.fillStyle=a.multiKeyBackground,e.fillRect(k,_,p,h),e.strokeRect(k,_,p,h),e.fillStyle=c.backgroundColor,e.fillRect(j,_+1,p-2,h-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,n,i){const{body:o}=this,{bodySpacing:a,bodyAlign:c,displayColors:u,boxHeight:h,boxWidth:p,boxPadding:g}=i,v=ft(i.bodyFont);let y=v.lineHeight,b=0;const _=ui(i.rtl,this.x,this.width),k=function($){n.fillText($,_.x(e.x+b),e.y+y/2),e.y+=y+a},j=_.textAlign(c);let S,N,T,A,E,O,U;for(n.textAlign=c,n.textBaseline="middle",n.font=v.string,e.x=ca(this,j,i),n.fillStyle=i.bodyColor,Te(this.beforeBody,k),b=u&&j!=="right"?c==="center"?p/2+g:p+2+g:0,A=0,O=o.length;A<O;++A){for(S=o[A],N=this.labelTextColors[A],n.fillStyle=N,Te(S.before,k),T=S.lines,u&&T.length&&(this._drawColorBox(n,e,A,_,i),y=Math.max(v.lineHeight,h)),E=0,U=T.length;E<U;++E)k(T[E]),y=v.lineHeight;Te(S.after,k)}b=0,y=v.lineHeight,Te(this.afterBody,k),e.y-=a}drawFooter(e,n,i){const o=this.footer,a=o.length;let c,u;if(a){const h=ui(i.rtl,this.x,this.width);for(e.x=ca(this,i.footerAlign,i),e.y+=i.footerMarginTop,n.textAlign=h.textAlign(i.footerAlign),n.textBaseline="middle",c=ft(i.footerFont),n.fillStyle=i.footerColor,n.font=c.string,u=0;u<a;++u)n.fillText(o[u],h.x(e.x),e.y+c.lineHeight/2),e.y+=c.lineHeight+i.footerSpacing}}drawBackground(e,n,i,o){const{xAlign:a,yAlign:c}=this,{x:u,y:h}=e,{width:p,height:g}=i,{topLeft:v,topRight:y,bottomLeft:b,bottomRight:_}=di(o.cornerRadius);n.fillStyle=o.backgroundColor,n.strokeStyle=o.borderColor,n.lineWidth=o.borderWidth,n.beginPath(),n.moveTo(u+v,h),c==="top"&&this.drawCaret(e,n,i,o),n.lineTo(u+p-y,h),n.quadraticCurveTo(u+p,h,u+p,h+y),c==="center"&&a==="right"&&this.drawCaret(e,n,i,o),n.lineTo(u+p,h+g-_),n.quadraticCurveTo(u+p,h+g,u+p-_,h+g),c==="bottom"&&this.drawCaret(e,n,i,o),n.lineTo(u+b,h+g),n.quadraticCurveTo(u,h+g,u,h+g-b),c==="center"&&a==="left"&&this.drawCaret(e,n,i,o),n.lineTo(u,h+v),n.quadraticCurveTo(u,h,u+v,h),n.closePath(),n.fill(),o.borderWidth>0&&n.stroke()}_updateAnimationTarget(e){const n=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){const c=mr[e.position].call(this,this._active,this._eventPosition);if(!c)return;const u=this._size=Nm(this,e),h=Object.assign({},c,this._size),p=Cm(n,e,h),g=Em(e,h,p,n);(o._to!==g.x||a._to!==g.y)&&(this.xAlign=p.xAlign,this.yAlign=p.yAlign,this.width=u.width,this.height=u.height,this.caretX=c.x,this.caretY=c.y,this._resolveAnimations().update(this,g))}}_willRender(){return!!this.opacity}draw(e){const n=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(n);const o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const c=Vt(n.padding),u=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;n.enabled&&u&&(e.save(),e.globalAlpha=i,this.drawBackground(a,e,o,n),Vg(e,n.textDirection),a.y+=c.top,this.drawTitle(a,e,n),this.drawBody(a,e,n),this.drawFooter(a,e,n),Yg(e,n.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,n){const i=this._active,o=e.map(({datasetIndex:u,index:h})=>{const p=this.chart.getDatasetMeta(u);if(!p)throw new Error("Cannot find a dataset at index "+u);return{datasetIndex:u,element:p.data[h],index:h}}),a=!ja(i,o),c=this._positionChanged(o,n);(a||c)&&(this._active=o,this._eventPosition=n,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,n,i=!0){if(n&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,a=this._active||[],c=this._getActiveElements(e,a,n,i),u=this._positionChanged(c,e),h=n||!ja(c,a)||u;return h&&(this._active=c,(o.enabled||o.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,n))),h}_getActiveElements(e,n,i,o){const a=this.options;if(e.type==="mouseout")return[];if(!o)return n.filter(u=>this.chart.data.datasets[u.datasetIndex]&&this.chart.getDatasetMeta(u.datasetIndex).controller.getParsed(u.index)!==void 0);const c=this.chart.getElementsAtEventForMode(e,a.mode,a,i);return a.reverse&&c.reverse(),c}_positionChanged(e,n){const{caretX:i,caretY:o,options:a}=this,c=mr[a.position].call(this,e,n);return c!==!1&&(i!==c.x||o!==c.y)}}ue(wd,"positioners",mr);var bx={id:"tooltip",_element:wd,positioners:mr,afterInit(t,e,n){n&&(t.tooltip=new wd({chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip;if(e&&e._willRender()){const n={tooltip:e};if(t.notifyPlugins("beforeTooltipDraw",{...n,cancelable:!0})===!1)return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n)}},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:yx},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>t!=="filter"&&t!=="itemSort"&&t!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};const Xk=(t,e,n,i)=>(typeof e=="string"?(n=t.push(e)-1,i.unshift({index:n,label:e})):isNaN(e)&&(n=null),n);function Qk(t,e,n,i){const o=t.indexOf(e);if(o===-1)return Xk(t,e,n,i);const a=t.lastIndexOf(e);return o!==a?n:o}const Gk=(t,e)=>t===null?null:ht(Math.round(t),0,e);function Tm(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}class Ea extends xi{constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){const n=this._addedLabels;if(n.length){const i=this.getLabels();for(const{index:o,label:a}of n)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(e)}parse(e,n){if(Ee(e))return null;const i=this.getLabels();return n=isFinite(n)&&i[n]===e?n:Qk(i,e,_e(n,e),this._addedLabels),Gk(n,i.length-1)}determineDataLimits(){const{minDefined:e,maxDefined:n}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(e||(i=0),n||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const e=this.min,n=this.max,i=this.options.offset,o=[];let a=this.getLabels();a=e===0&&n===a.length-1?a:a.slice(e,n+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let c=e;c<=n;c++)o.push({value:c});return o}getLabelForValue(e){return Tm.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!="number"&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){const n=this.ticks;return e<0||e>n.length-1?null:this.getPixelForValue(n[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}}ue(Ea,"id","category"),ue(Ea,"defaults",{ticks:{callback:Tm}});function Jk(t,e){const n=[],{bounds:o,step:a,min:c,max:u,precision:h,count:p,maxTicks:g,maxDigits:v,includeBounds:y}=t,b=a||1,_=g-1,{min:k,max:j}=e,S=!Ee(c),N=!Ee(u),T=!Ee(p),A=(j-k)/(v+1);let E=Ep((j-k)/_/b)*b,O,U,$,Y;if(E<1e-14&&!S&&!N)return[{value:k},{value:j}];Y=Math.ceil(j/E)-Math.floor(k/E),Y>_&&(E=Ep(Y*E/_/b)*b),Ee(h)||(O=Math.pow(10,h),E=Math.ceil(E*O)/O),o==="ticks"?(U=Math.floor(k/E)*E,$=Math.ceil(j/E)*E):(U=k,$=j),S&&N&&a&&rj((u-c)/a,E/1e3)?(Y=Math.round(Math.min((u-c)/E,g)),E=(u-c)/Y,U=c,$=u):T?(U=S?c:U,$=N?u:$,Y=p-1,E=($-U)/Y):(Y=($-U)/E,xr(Y,Math.round(Y),E/1e3)?Y=Math.round(Y):Y=Math.ceil(Y));const Q=Math.max(Pp(E),Pp(U));O=Math.pow(10,Ee(h)?Q:h),U=Math.round(U*O)/O,$=Math.round($*O)/O;let se=0;for(S&&(y&&U!==c?(n.push({value:c}),U<c&&se++,xr(Math.round((U+se*E)*O)/O,c,Am(c,A,t))&&se++):U<c&&se++);se<Y;++se){const B=Math.round((U+se*E)*O)/O;if(N&&B>u)break;n.push({value:B})}return N&&y&&$!==u?n.length&&xr(n[n.length-1].value,u,Am(u,A,t))?n[n.length-1].value=u:n.push({value:u}):(!N||$===u)&&n.push({value:$}),n}function Am(t,e,{horizontal:n,minRotation:i}){const o=Cn(i),a=(n?Math.sin(o):Math.cos(o))||.001,c=.75*e*(""+t).length;return Math.min(e/a,c)}class Zk extends xi{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,n){return Ee(e)||(typeof e=="number"||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){const{beginAtZero:e}=this.options,{minDefined:n,maxDefined:i}=this.getUserBounds();let{min:o,max:a}=this;const c=h=>o=n?o:h,u=h=>a=i?a:h;if(e){const h=fn(o),p=fn(a);h<0&&p<0?u(0):h>0&&p>0&&c(0)}if(o===a){let h=a===0?1:Math.abs(a*.05);u(a+h),e||c(o-h)}this.min=o,this.max=a}getTickLimit(){const e=this.options.ticks;let{maxTicksLimit:n,stepSize:i}=e,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),n=n||11),n&&(o=Math.min(n,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const e=this.options,n=e.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:n.minRotation||0,includeBounds:n.includeBounds!==!1},a=this._range||this,c=Jk(o,a);return e.bounds==="ticks"&&oj(c,this,"value"),e.reverse?(c.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),c}configure(){const e=this.ticks;let n=this.min,i=this.max;if(super.configure(),this.options.offset&&e.length){const o=(i-n)/Math.max(e.length-1,1)/2;n-=o,i+=o}this._startValue=n,this._endValue=i,this._valueRange=i-n}getLabelForValue(e){return Bd(e,this.chart.options.locale,this.options.ticks.format)}}class Pa extends Zk{determineDataLimits(){const{min:e,max:n}=this.getMinMax(!0);this.min=pt(e)?e:0,this.max=pt(n)?n:1,this.handleTickRangeOptions()}computeTickLimit(){const e=this.isHorizontal(),n=e?this.width:this.height,i=Cn(this.options.ticks.minRotation),o=(e?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,a.lineHeight/o))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}}ue(Pa,"id","linear"),ue(Pa,"defaults",{ticks:{callback:zg.formatters.numeric}});const $a={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},St=Object.keys($a);function Mm(t,e){return t-e}function Dm(t,e){if(Ee(e))return null;const n=t._adapter,{parser:i,round:o,isoWeekday:a}=t._parseOpts;let c=e;return typeof i=="function"&&(c=i(c)),pt(c)||(c=typeof i=="string"?n.parse(c,i):n.parse(c)),c===null?null:(o&&(c=o==="week"&&(Nr(a)||a===!0)?n.startOf(c,"isoWeek",a):n.startOf(c,o)),+c)}function Lm(t,e,n,i){const o=St.length;for(let a=St.indexOf(t);a<o-1;++a){const c=$a[St[a]],u=c.steps?c.steps:Number.MAX_SAFE_INTEGER;if(c.common&&Math.ceil((n-e)/(u*c.size))<=i)return St[a]}return St[o-1]}function eS(t,e,n,i,o){for(let a=St.length-1;a>=St.indexOf(n);a--){const c=St[a];if($a[c].common&&t._adapter.diff(o,i,c)>=e-1)return c}return St[n?St.indexOf(n):0]}function tS(t){for(let e=St.indexOf(t)+1,n=St.length;e<n;++e)if($a[St[e]].common)return St[e]}function Om(t,e,n){if(!n)t[e]=!0;else if(n.length){const{lo:i,hi:o}=zd(n,e),a=n[i]>=e?n[i]:n[o];t[a]=!0}}function nS(t,e,n,i){const o=t._adapter,a=+o.startOf(e[0].value,i),c=e[e.length-1].value;let u,h;for(u=a;u<=c;u=+o.add(u,1,i))h=n[u],h>=0&&(e[h].major=!0);return e}function zm(t,e,n){const i=[],o={},a=e.length;let c,u;for(c=0;c<a;++c)u=e[c],o[u]=c,i.push({value:u,major:!1});return a===0||!n?i:nS(t,i,o,n)}class Ra extends xi{constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,n={}){const i=e.time||(e.time={}),o=this._adapter=new Ww._date(e.adapters.date);o.init(n),gr(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(e),this._normalized=n.normalized}parse(e,n){return e===void 0?null:Dm(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const e=this.options,n=this._adapter,i=e.time.unit||"day";let{min:o,max:a,minDefined:c,maxDefined:u}=this.getUserBounds();function h(p){!c&&!isNaN(p.min)&&(o=Math.min(o,p.min)),!u&&!isNaN(p.max)&&(a=Math.max(a,p.max))}(!c||!u)&&(h(this._getLabelBounds()),(e.bounds!=="ticks"||e.ticks.source!=="labels")&&h(this.getMinMax(!1))),o=pt(o)&&!isNaN(o)?o:+n.startOf(Date.now(),i),a=pt(a)&&!isNaN(a)?a:+n.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){const e=this.getLabelTimestamps();let n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return e.length&&(n=e[0],i=e[e.length-1]),{min:n,max:i}}buildTicks(){const e=this.options,n=e.time,i=e.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();e.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const a=this.min,c=this.max,u=uj(o,a,c);return this._unit=n.unit||(i.autoSkip?Lm(n.minUnit,this.min,this.max,this._getLabelCapacity(a)):eS(this,u.length,n.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:tS(this._unit),this.initOffsets(o),e.reverse&&u.reverse(),zm(this,u,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let n=0,i=0,o,a;this.options.offset&&e.length&&(o=this.getDecimalForValue(e[0]),e.length===1?n=1-o:n=(this.getDecimalForValue(e[1])-o)/2,a=this.getDecimalForValue(e[e.length-1]),e.length===1?i=a:i=(a-this.getDecimalForValue(e[e.length-2]))/2);const c=e.length<3?.5:.25;n=ht(n,0,c),i=ht(i,0,c),this._offsets={start:n,end:i,factor:1/(n+1+i)}}_generate(){const e=this._adapter,n=this.min,i=this.max,o=this.options,a=o.time,c=a.unit||Lm(a.minUnit,n,i,this._getLabelCapacity(n)),u=_e(o.ticks.stepSize,1),h=c==="week"?a.isoWeekday:!1,p=Nr(h)||h===!0,g={};let v=n,y,b;if(p&&(v=+e.startOf(v,"isoWeek",h)),v=+e.startOf(v,p?"day":c),e.diff(i,n,c)>1e5*u)throw new Error(n+" and "+i+" are too far apart with stepSize of "+u+" "+c);const _=o.ticks.source==="data"&&this.getDataTimestamps();for(y=v,b=0;y<i;y=+e.add(y,u,c),b++)Om(g,y,_);return(y===i||o.bounds==="ticks"||b===1)&&Om(g,y,_),Object.keys(g).sort(Mm).map(k=>+k)}getLabelForValue(e){const n=this._adapter,i=this.options.time;return i.tooltipFormat?n.format(e,i.tooltipFormat):n.format(e,i.displayFormats.datetime)}format(e,n){const o=this.options.time.displayFormats,a=this._unit,c=n||o[a];return this._adapter.format(e,c)}_tickFormatFunction(e,n,i,o){const a=this.options,c=a.ticks.callback;if(c)return Oe(c,[e,n,i],this);const u=a.time.displayFormats,h=this._unit,p=this._majorUnit,g=h&&u[h],v=p&&u[p],y=i[n],b=p&&v&&y&&y.major;return this._adapter.format(e,o||(b?v:g))}generateTickLabels(e){let n,i,o;for(n=0,i=e.length;n<i;++n)o=e[n],o.label=this._tickFormatFunction(o.value,n,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){const n=this._offsets,i=this.getDecimalForValue(e);return this.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return this.min+i*(this.max-this.min)}_getLabelSize(e){const n=this.options.ticks,i=this.ctx.measureText(e).width,o=Cn(this.isHorizontal()?n.maxRotation:n.minRotation),a=Math.cos(o),c=Math.sin(o),u=this._resolveTickFontOptions(0).size;return{w:i*a+u*c,h:i*c+u*a}}_getLabelCapacity(e){const n=this.options.time,i=n.displayFormats,o=i[n.unit]||i.millisecond,a=this._tickFormatFunction(e,0,zm(this,[e],this._majorUnit),o),c=this._getLabelSize(a),u=Math.floor(this.isHorizontal()?this.width/c.w:this.height/c.h)-1;return u>0?u:1}getDataTimestamps(){let e=this._cache.data||[],n,i;if(e.length)return e;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(n=0,i=o.length;n<i;++n)e=e.concat(o[n].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){const e=this._cache.labels||[];let n,i;if(e.length)return e;const o=this.getLabels();for(n=0,i=o.length;n<i;++n)e.push(Dm(this,o[n]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Dg(e.sort(Mm))}}ue(Ra,"id","time"),ue(Ra,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function da(t,e,n){let i=0,o=t.length-1,a,c,u,h;n?(e>=t[i].pos&&e<=t[o].pos&&({lo:i,hi:o}=Es(t,"pos",e)),{pos:a,time:u}=t[i],{pos:c,time:h}=t[o]):(e>=t[i].time&&e<=t[o].time&&({lo:i,hi:o}=Es(t,"time",e)),{time:a,pos:u}=t[i],{time:c,pos:h}=t[o]);const p=c-a;return p?u+(h-u)*(e-a)/p:u}class Im extends Ra{constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const e=this._getTimestampsForTable(),n=this._table=this.buildLookupTable(e);this._minPos=da(n,this.min),this._tableRange=da(n,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){const{min:n,max:i}=this,o=[],a=[];let c,u,h,p,g;for(c=0,u=e.length;c<u;++c)p=e[c],p>=n&&p<=i&&o.push(p);if(o.length<2)return[{time:n,pos:0},{time:i,pos:1}];for(c=0,u=o.length;c<u;++c)g=o[c+1],h=o[c-1],p=o[c],Math.round((g+h)/2)!==p&&a.push({time:p,pos:c/(u-1)});return a}_generate(){const e=this.min,n=this.max;let i=super.getDataTimestamps();return(!i.includes(e)||!i.length)&&i.splice(0,0,e),(!i.includes(n)||i.length===1)&&i.push(n),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;const n=this.getDataTimestamps(),i=this.getLabelTimestamps();return n.length&&i.length?e=this.normalize(n.concat(i)):e=n.length?n:i,e=this._cache.all=e,e}getDecimalForValue(e){return(da(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){const n=this._offsets,i=this.getDecimalForPixel(e)/n.factor-n.end;return da(this._table,i*this._tableRange+this._minPos,!0)}}ue(Im,"id","timeseries"),ue(Im,"defaults",Ra.defaults);const jx="label";function Fm(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function sS(t,e){const n=t.options;n&&e&&Object.assign(n,e)}function wx(t,e){t.labels=e}function _x(t,e,n=jx){const i=[];t.datasets=e.map(o=>{const a=t.datasets.find(c=>c[n]===o[n]);return!a||!o.data||i.includes(a)?{...o}:(i.push(a),Object.assign(a,o),a)})}function iS(t,e=jx){const n={labels:[],datasets:[]};return wx(n,t.labels),_x(n,t.datasets,e),n}function rS(t,e){const{height:n=150,width:i=300,redraw:o=!1,datasetIdKey:a,type:c,data:u,options:h,plugins:p=[],fallbackContent:g,updateMode:v,...y}=t,b=R.useRef(null),_=R.useRef(null),k=()=>{b.current&&(_.current=new Fr(b.current,{type:c,data:iS(u,a),options:h&&{...h},plugins:p}),Fm(e,_.current))},j=()=>{Fm(e,null),_.current&&(_.current.destroy(),_.current=null)};return R.useEffect(()=>{!o&&_.current&&h&&sS(_.current,h)},[o,h]),R.useEffect(()=>{!o&&_.current&&wx(_.current.config.data,u.labels)},[o,u.labels]),R.useEffect(()=>{!o&&_.current&&u.datasets&&_x(_.current.config.data,u.datasets,a)},[o,u.datasets]),R.useEffect(()=>{_.current&&(o?(j(),setTimeout(k)):_.current.update(v))},[o,h,u.labels,u.datasets,v]),R.useEffect(()=>{_.current&&(j(),setTimeout(k))},[c]),R.useEffect(()=>(k(),()=>j()),[]),l.jsx("canvas",{ref:b,role:"img",height:n,width:i,...y,children:g})}const oS=R.forwardRef(rS);function Kd(t,e){return Fr.register(e),R.forwardRef((n,i)=>l.jsx(oS,{...n,ref:i,type:t}))}const _d=Kd("line",ma),aS=Kd("bar",pa),lS=Kd("doughnut",hr);Fr.register(Ea,Pa,br,Pn,va,pr,vx,bx,gx,px);function cS(){var S,N,T,A,E,O,U,$,Y;const{t}=Dt(),e=Ar(),[n,i]=R.useState(null),[o,a]=R.useState(null),[c,u]=R.useState(null),[h,p]=R.useState(!0);if(R.useEffect(()=>{Promise.all([hn.stats(),fd.get(24),k1.getCollectionStats()]).then(([Q,se,B])=>{var ne,X;i(Q.data);const V=24,L=[],re=[],W=[];for(let ie=V-1;ie>=0;ie--){const ee=new Date;ee.setHours(ee.getHours()-ie),L.push(ee.getHours()+":00");const D=new Date(ee);D.setMinutes(0,0,0);const q=new Date(ee);q.setMinutes(59,59,999);const me=((ne=se.data.entries)==null?void 0:ne.filter(ve=>{const ye=new Date(ve.timestamp);return ve.type==="event"&&ye>=D&&ye<=q}).length)||0,pe=((X=se.data.entries)==null?void 0:X.filter(ve=>{const ye=new Date(ve.timestamp);return ve.type==="alert"&&ye>=D&&ye<=q}).length)||0;re.push(me),W.push(pe)}a({labels:L,events:re,alerts:W}),u(B.data),p(!1)}).catch(()=>{i({total:0,by_severity:{},by_status:{}}),a({labels:[],events:[],alerts:[]}),u({total_events:0,total_size:"N/A",sources:{},last_import:"N/A"}),p(!1)})},[]),h)return l.jsx("div",{className:"dashboard",children:l.jsxs("div",{className:"dashboard-loading",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("p",{children:t("common.loading")})]})});const g=n!=null&&n.by_type?Object.entries(n.by_type).sort((Q,se)=>se[1]-Q[1]).slice(0,5):[],v={labels:(o==null?void 0:o.labels)||[],datasets:[{label:t("dashboard.events"),data:(o==null?void 0:o.events)||[],borderColor:"#00d9ff",backgroundColor:"rgba(0, 217, 255, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#00d9ff"},{label:t("dashboard.alerts"),data:(o==null?void 0:o.alerts)||[],borderColor:"#ff6b6b",backgroundColor:"rgba(255, 107, 107, 0.1)",fill:!0,tension:.4,pointRadius:0,pointHoverRadius:6,pointHoverBackgroundColor:"#ff6b6b"}]},y={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8,displayColors:!0}},scales:{x:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888",maxTicksLimit:8}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}},interaction:{intersect:!1,mode:"index"}},b={labels:g.map(([Q])=>Q),datasets:[{data:g.map(([,Q])=>Q),backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)","rgba(59, 130, 246, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e","#3b82f6"],borderWidth:2}]},_={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right",labels:{color:"#aaa",usePointStyle:!0,pointStyle:"circle",padding:15}},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},cutout:"65%"},k={labels:[t("dashboard.critical"),t("dashboard.high"),t("dashboard.medium"),t("dashboard.low")],datasets:[{label:t("dashboard.alerts"),data:[((S=n==null?void 0:n.by_severity)==null?void 0:S.critical)||0,((N=n==null?void 0:n.by_severity)==null?void 0:N.high)||0,((T=n==null?void 0:n.by_severity)==null?void 0:T.medium)||0,((A=n==null?void 0:n.by_severity)==null?void 0:A.low)||0],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(249, 115, 22, 0.8)","rgba(234, 179, 8, 0.8)","rgba(34, 197, 94, 0.8)"],borderColor:["#ef4444","#f97316","#eab308","#22c55e"],borderWidth:2,borderRadius:6}]},j={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{backgroundColor:"#16213e",titleColor:"#00d9ff",bodyColor:"#fff",borderColor:"#00d9ff",borderWidth:1,cornerRadius:8}},scales:{x:{grid:{display:!1},ticks:{color:"#888"}},y:{grid:{color:"rgba(255,255,255,0.05)"},ticks:{color:"#888"},beginAtZero:!0}}};return l.jsxs("div",{className:"dashboard",children:[l.jsxs("div",{className:"dashboard-header",children:[l.jsx("h2",{children:t("dashboard.title")}),l.jsx("div",{className:"header-time",children:new Date().toLocaleString()})]}),l.jsxs("div",{className:"stats-cards",children:[l.jsxs("div",{className:"stat-card glow-critical",onClick:()=>e("/alerts?severity=critical"),children:[l.jsx("div",{className:"stat-icon",children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),l.jsx("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),l.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:((E=n==null?void 0:n.by_severity)==null?void 0:E.critical)||0}),l.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]}),l.jsx("div",{className:"stat-glow"})]}),l.jsxs("div",{className:"stat-card glow-high",onClick:()=>e("/alerts?severity=high"),children:[l.jsx("div",{className:"stat-icon",children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),l.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:((O=n==null?void 0:n.by_severity)==null?void 0:O.high)||0}),l.jsx("span",{className:"stat-label",children:t("dashboard.high")})]}),l.jsx("div",{className:"stat-glow"})]}),l.jsxs("div",{className:"stat-card glow-medium",onClick:()=>e("/alerts?severity=medium"),children:[l.jsx("div",{className:"stat-icon",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:((U=n==null?void 0:n.by_severity)==null?void 0:U.medium)||0}),l.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]}),l.jsx("div",{className:"stat-glow"})]}),l.jsxs("div",{className:"stat-card glow-low",onClick:()=>e("/alerts?severity=low"),children:[l.jsx("div",{className:"stat-icon",children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),l.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:(($=n==null?void 0:n.by_severity)==null?void 0:$.low)||0}),l.jsx("span",{className:"stat-label",children:t("dashboard.low")})]}),l.jsx("div",{className:"stat-glow"})]})]}),l.jsxs("div",{className:"dashboard-grid",children:[l.jsxs("div",{className:"chart-card chart-trend",onClick:()=>e("/timeline"),children:[l.jsxs("div",{className:"chart-header",children:[l.jsx("h3",{children:t("dashboard.eventTrend")}),l.jsx("span",{className:"chart-subtitle",children:t("dashboard.last24Hours")})]}),l.jsx("div",{className:"chart-body",children:l.jsx(_d,{data:v,options:y})})]}),l.jsxs("div",{className:"chart-card chart-alert-type",onClick:()=>e("/alerts"),children:[l.jsxs("div",{className:"chart-header",children:[l.jsx("h3",{children:t("dashboard.topAlertTypes")}),l.jsx("span",{className:"chart-subtitle",children:t("dashboard.clickToView")})]}),l.jsx("div",{className:"chart-body",children:g.length>0?l.jsx(lS,{data:b,options:_}):l.jsx("div",{className:"chart-empty",children:t("dashboard.noData")})})]}),l.jsxs("div",{className:"chart-card chart-severity",onClick:()=>e("/alerts"),children:[l.jsx("div",{className:"chart-header",children:l.jsx("h3",{children:t("dashboard.bySeverity")})}),l.jsx("div",{className:"chart-body",children:l.jsx(aS,{data:k,options:j})})]}),l.jsxs("div",{className:"chart-card chart-collection",children:[l.jsx("div",{className:"chart-header",children:l.jsx("h3",{children:t("dashboard.collectionStatus")})}),l.jsxs("div",{className:"chart-body collection-stats",children:[l.jsxs("div",{className:"collection-item",children:[l.jsx("span",{className:"collection-label",children:t("dashboard.totalEvents")}),l.jsx("span",{className:"collection-value",children:((Y=c==null?void 0:c.total_events)==null?void 0:Y.toLocaleString())||0})]}),l.jsxs("div",{className:"collection-item",children:[l.jsx("span",{className:"collection-label",children:t("dashboard.dataSize")}),l.jsx("span",{className:"collection-value",children:(c==null?void 0:c.total_size)||"N/A"})]}),l.jsxs("div",{className:"collection-item",children:[l.jsx("span",{className:"collection-label",children:t("dashboard.lastImport")}),l.jsx("span",{className:"collection-value",children:(c==null?void 0:c.last_import)||"N/A"})]}),l.jsxs("div",{className:"collection-sources",children:[l.jsx("span",{className:"collection-label",children:t("dashboard.sources")}),l.jsx("div",{className:"source-tags",children:Object.keys((c==null?void 0:c.sources)||{}).map(Q=>l.jsx("span",{className:"source-tag",children:Q},Q))})]})]})]})]}),l.jsxs("div",{className:"recent-section",onClick:()=>e("/alerts"),children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:t("dashboard.recentAlerts")}),l.jsxs("span",{className:"view-more",children:[t("dashboard.viewAll")," →"]})]}),l.jsx("div",{className:"recent-alerts-list",children:n&&n.total>0?l.jsxs("div",{className:"alert-preview",children:[l.jsx("div",{className:"alert-count-badge",children:n.total}),l.jsx("span",{children:t("dashboard.totalAlertsDesc")})]}):l.jsxs("div",{className:"no-alerts",children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),l.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),l.jsx("span",{children:t("dashboard.noAlerts")})]})})]})]})}function dS(){const[t,e]=R.useState([]),[n,i]=R.useState(!0),[o,a]=R.useState(1),[c,u]=R.useState(1),[h,p]=R.useState(0),[g,v]=R.useState(!1),[y,b]=R.useState(!1),[_,k]=R.useState(0),[j,S]=R.useState(!1),[N,T]=R.useState([]),[A,E]=R.useState({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),O=(V=1)=>{i(!0);const L={Critical:1,Error:2,Warning:3,Info:4,Debug:5},re={keywords:(A==null?void 0:A.keywords)||"",page:V,page_size:50,sort_by:"timestamp",sort_order:"desc",start_time:(A==null?void 0:A.start_time)||void 0,end_time:(A==null?void 0:A.end_time)||void 0,levels:N.map(W=>L[W]).filter(W=>W)};dr.search(re).then(W=>{const ne=W.data;e(ne.events||[]),p(ne.total||0);const X=Math.ceil((ne.total||0)/50);u(X||1),k(ne.query_time_ms||0),b(!0),i(!1)}).catch(()=>{dr.list(V,50).then(W=>{const ne=W.data;e(ne.events||[]),p(ne.total||0),u(ne.total_pages||1),b(!1),i(!1)}).catch(()=>i(!1))})},U=()=>{a(1),O(1)},$=()=>{E({event_ids:[],levels:[],log_names:[],start_time:"",end_time:"",keywords:"",limit:1e4}),T([]),b(!1),a(1)};R.useEffect(()=>{i(!0),A!=null&&A.keywords&&A.keywords.trim()!==""?O(o):dr.list(o,50).then(V=>{const L=V.data;e(L.events||[]),p(L.total||0),u(L.total_pages||1),i(!1)}).catch(()=>i(!1))},[o]);const Y=async V=>{v(!0);try{const L=await dr.export({format:V,filters:A});if(V==="json"){const re=new Blob([JSON.stringify(L.data,null,2)],{type:"application/json"});Q(re,`events_export.${V}`)}else{const re=new Blob([L.data],{type:V==="csv"?"text/csv":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});Q(re,`events_export.${V==="excel"?"xlsx":V}`)}}catch(L){console.error("Export failed:",L)}finally{v(!1)}},Q=(V,L)=>{const re=URL.createObjectURL(V),W=document.createElement("a");W.href=re,W.download=L,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(re)},se=V=>{const L=String(V).toLowerCase();return L==="1"||L==="critical"||L==="crit"?"level-critical":L==="2"||L==="error"?"level-error":L==="3"||L==="warning"||L==="warn"?"level-warning":L==="4"||L==="info"?"level-info":L==="5"||L==="debug"?"level-debug":""},B=V=>{const L=String(V);return L==="1"||L==="critical"?"Critical":L==="2"||L==="error"?"Error":L==="3"||L==="warning"||L==="warn"?"Warning":L==="4"||L==="info"?"Info":L==="5"||L==="debug"?"Debug":L};return l.jsxs("div",{className:"events-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:"Events"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn-secondary",onClick:()=>S(!j),children:j?"Hide Filters":"Show Filters"}),l.jsxs("div",{className:"export-dropdown",children:[l.jsx("button",{className:"btn-secondary",disabled:g,children:g?"...":"Export"}),l.jsxs("div",{className:"export-menu",children:[l.jsx("button",{onClick:()=>Y("csv"),children:"CSV"}),l.jsx("button",{onClick:()=>Y("json"),children:"JSON"}),l.jsx("button",{onClick:()=>Y("excel"),children:"Excel"})]})]})]})]}),l.jsx("div",{className:"search-bar",children:l.jsxs("div",{className:"search-input-wrapper",children:[l.jsx("input",{type:"text",placeholder:"Search events by keyword...",value:(A==null?void 0:A.keywords)||"",onChange:V=>E({...A,keywords:V.target.value}),onKeyDown:V=>V.key==="Enter"&&U()}),l.jsx("button",{className:"search-btn",onClick:U,children:"Search"})]})}),j&&l.jsxs("div",{className:"filters-panel",children:[l.jsxs("div",{className:"filter-row",children:[l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Start Time"}),l.jsx("input",{type:"datetime-local",value:(A==null?void 0:A.start_time)||"",onChange:V=>E({...A,start_time:V.target.value})})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"End Time"}),l.jsx("input",{type:"datetime-local",value:(A==null?void 0:A.end_time)||"",onChange:V=>E({...A,end_time:V.target.value})})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Level"}),l.jsx("div",{className:"level-checkboxes",children:["Critical","Error","Warning","Info","Debug"].map(V=>l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox",checked:N.includes(V),onChange:L=>{L.target.checked?T([...N,V]):T(N.filter(re=>re!==V))}}),V]},V))})]})]}),l.jsxs("div",{className:"filter-actions",children:[l.jsx("button",{onClick:U,className:"btn-primary",children:"Apply Filters"}),y&&l.jsx("button",{onClick:$,className:"btn-secondary",children:"Clear All"})]})]}),y&&l.jsxs("div",{className:"search-info",children:[l.jsxs("span",{className:"search-count",children:["Found ",l.jsx("strong",{children:h.toLocaleString()})," events"]}),_>0&&l.jsxs("span",{className:"query-time",children:["Query time: ",_,"ms"]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Total Events"}),l.jsx("span",{className:"stat-value",children:h.toLocaleString()})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Current Page"}),l.jsxs("span",{className:"stat-value",children:[o," / ",c]})]})]}),n?l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("div",{children:"Loading events..."})]}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📋"}),l.jsx("div",{children:"No events found"})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"table-container",children:l.jsxs("table",{className:"events-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"ID"}),l.jsx("th",{children:"Timestamp"}),l.jsx("th",{children:"Level"}),l.jsx("th",{children:"Event ID"}),l.jsx("th",{children:"Source"}),l.jsx("th",{children:"Computer"}),l.jsx("th",{children:"Message"})]})}),l.jsx("tbody",{children:t.map(V=>{var L;return l.jsxs("tr",{children:[l.jsx("td",{className:"id-cell",children:V.id}),l.jsx("td",{className:"time-cell",children:new Date(V.timestamp).toLocaleString()}),l.jsx("td",{children:l.jsx("span",{className:`level-badge ${se(V.level)}`,children:B(V.level)})}),l.jsx("td",{className:"event-id",children:V.event_id}),l.jsx("td",{className:"source-cell",children:V.source||"-"}),l.jsx("td",{className:"computer-cell",children:V.computer||"-"}),l.jsxs("td",{className:"message-cell",title:V.message,children:[(L=V.message)==null?void 0:L.substring(0,120),V.message&&V.message.length>120?"...":""]})]},V.id)})})]})}),l.jsxs("div",{className:"pagination",children:[l.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{a(1),window.scrollTo({top:0,behavior:"smooth"})},children:"First"}),l.jsx("button",{className:"page-btn",disabled:o<=1,onClick:()=>{a(V=>V-1),window.scrollTo({top:0,behavior:"smooth"})},children:"Prev"}),l.jsxs("span",{className:"page-info",children:["Page ",l.jsx("strong",{children:o})," of ",l.jsx("strong",{children:c})]}),l.jsx("button",{className:"page-btn",disabled:o>=c,onClick:()=>{a(V=>V+1),window.scrollTo({top:0,behavior:"smooth"})},children:"Next"}),l.jsx("button",{className:"page-btn",disabled:o>=c,onClick:()=>{a(c),window.scrollTo({top:0,behavior:"smooth"})},children:"Last"})]})]}),l.jsx("style",{children:`
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
        }
        
        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          margin-top: 16px;
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
        
        .page-info {
          padding: 0 16px;
          color: #888;
        }
        
        .page-info strong {
          color: #00d9ff;
        }
      `})]})}function uS(){const{id:t}=Qm(),[e,n]=R.useState(null),[i,o]=R.useState(!0);return R.useEffect(()=>{t&&(o(!0),dr.get(Number(t)).then(a=>{n(a.data),o(!1)}).catch(()=>o(!1)))},[t]),i?l.jsx("div",{children:"Loading..."}):e?l.jsxs("div",{className:"event-detail",children:[l.jsx(ct,{to:"/events",children:"← Back to Events"}),l.jsxs("div",{className:"detail-panel",children:[l.jsxs("h3",{children:["Event #",e.id]}),l.jsxs("div",{className:"detail-grid",children:[l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Timestamp:"}),l.jsx("span",{children:new Date(e.timestamp).toLocaleString()})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Event ID:"}),l.jsx("span",{children:e.event_id})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Level:"}),l.jsx("span",{children:e.level})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Source:"}),l.jsx("span",{children:e.source})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Log Name:"}),l.jsx("span",{children:e.log_name})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Computer:"}),l.jsx("span",{children:e.computer})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"User:"}),l.jsx("span",{children:e.user||"N/A"})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"User SID:"}),l.jsx("span",{children:e.user_sid||"N/A"})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Session ID:"}),l.jsx("span",{children:e.session_id||"N/A"})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"IP Address:"}),l.jsx("span",{children:e.ip_address||"N/A"})]})]}),l.jsxs("div",{className:"detail-section",children:[l.jsx("label",{children:"Message:"}),l.jsx("pre",{className:"message-box",children:e.message})]}),e.raw_xml&&l.jsxs("div",{className:"detail-section",children:[l.jsx("label",{children:"Raw XML:"}),l.jsx("pre",{className:"xml-box",children:e.raw_xml})]})]}),l.jsx("style",{children:`
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
      `})]}):l.jsx("div",{children:"Event not found"})}function hS(){const{t}=Dt(),e=Ar(),[n,i]=R.useState([]),[o,a]=R.useState(!0),[c,u]=R.useState(1),[h,p]=R.useState(""),[g,v]=R.useState([]),[y,b]=R.useState("brute-force"),[_,k]=R.useState(!1),[j,S]=R.useState(!1);R.useEffect(()=>{a(!0),hn.list(c,50,h||void 0).then(B=>{const V=B.data;i(V.alerts||[]),a(!1)}).catch(()=>a(!1))},[c,h]);const N=B=>{hn.resolve(B,"Resolved via Web UI").then(()=>{i(n.map(V=>V.id===B?{...V,resolved:!0}:V))})},T=B=>{const V=prompt("Enter reason for marking as false positive:");V&&hn.markFalsePositive(B,V).then(()=>{i(n.filter(L=>L.id!==B)),v(L=>L.filter(re=>re!==B))}).catch(L=>{console.error("Failed to mark as false positive:",L)})},A=B=>{confirm("Are you sure you want to delete this alert?")&&hn.delete(B).then(()=>{i(n.filter(V=>V.id!==B)),v(V=>V.filter(L=>L!==B))}).catch(V=>{console.error("Failed to delete alert:",V)})},E=B=>{g.length!==0&&hn.batchAction(g,B).then(()=>{B==="resolve"?i(n.map(V=>g.includes(V.id)?{...V,resolved:!0}:V)):B==="delete"&&i(n.filter(V=>!g.includes(V.id))),v([])}).catch(V=>{console.error("Batch action failed:",V)})},O=B=>{v(V=>V.includes(B)?V.filter(L=>L!==B):[...V,B])},U=()=>{g.length===n.length?v([]):v(n.map(B=>B.id))},$=()=>{g.forEach(B=>{hn.resolve(B,"Batch resolved via Web UI")}),i(n.map(B=>g.includes(B.id)?{...B,resolved:!0}:B)),v([])},Y=()=>{S(!0),Sg.run(y,{hours:24}).then(()=>{S(!1),k(!1),e("/analyze")}).catch(B=>{console.error("Analysis failed:",B),S(!1),k(!1),e("/analyze")})},Q=B=>{switch(B){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}},se={total:n.length,critical:n.filter(B=>B.severity==="critical").length,high:n.filter(B=>B.severity==="high").length,medium:n.filter(B=>B.severity==="medium").length,low:n.filter(B=>B.severity==="low").length};return l.jsxs("div",{className:"alerts-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("h2",{children:t("alerts.title")}),l.jsx("p",{className:"header-desc",children:t("alerts.pageDesc")})]}),l.jsx("div",{className:"header-actions",children:l.jsxs("button",{className:"btn-analyze",onClick:()=>k(!0),children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("path",{d:"m21 21-4.35-4.35"}),l.jsx("path",{d:"M11 8v6M8 11h6"})]}),t("alerts.runAnalysis")]})})]}),l.jsxs("div",{className:"alerts-stats-grid",children:[l.jsxs("div",{className:"stat-card",onClick:()=>p(""),children:[l.jsx("span",{className:"stat-icon",children:"📊"}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:se.total}),l.jsx("span",{className:"stat-label",children:t("alerts.total")})]})]}),l.jsxs("div",{className:"stat-card critical",onClick:()=>p("critical"),children:[l.jsx("span",{className:"stat-icon",children:"🔴"}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:se.critical}),l.jsx("span",{className:"stat-label",children:t("dashboard.critical")})]})]}),l.jsxs("div",{className:"stat-card high",onClick:()=>p("high"),children:[l.jsx("span",{className:"stat-icon",children:"🟠"}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:se.high}),l.jsx("span",{className:"stat-label",children:t("dashboard.high")})]})]}),l.jsxs("div",{className:"stat-card medium",onClick:()=>p("medium"),children:[l.jsx("span",{className:"stat-icon",children:"🟡"}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:se.medium}),l.jsx("span",{className:"stat-label",children:t("dashboard.medium")})]})]}),l.jsxs("div",{className:"stat-card low",onClick:()=>p("low"),children:[l.jsx("span",{className:"stat-icon",children:"🟢"}),l.jsxs("div",{className:"stat-info",children:[l.jsx("span",{className:"stat-value",children:se.low}),l.jsx("span",{className:"stat-label",children:t("dashboard.low")})]})]})]}),l.jsxs("div",{className:"alerts-toolbar",children:[l.jsx("div",{className:"toolbar-left",children:l.jsxs("select",{className:"severity-select",value:h,onChange:B=>p(B.target.value),children:[l.jsx("option",{value:"",children:t("alerts.allSeverities")}),l.jsx("option",{value:"critical",children:t("dashboard.critical")}),l.jsx("option",{value:"high",children:t("dashboard.high")}),l.jsx("option",{value:"medium",children:t("dashboard.medium")}),l.jsx("option",{value:"low",children:t("dashboard.low")})]})}),l.jsx("div",{className:"toolbar-right",children:g.length>0&&l.jsxs("div",{className:"batch-actions",children:[l.jsxs("span",{className:"selected-count",children:[g.length," selected"]}),l.jsx("button",{className:"btn-batch-resolve",onClick:$,children:t("alerts.resolveSelected")}),l.jsx("button",{className:"btn-batch-falsepositive",onClick:()=>E("false-positive"),children:"Mark False Positive"}),l.jsx("button",{className:"btn-batch-delete",onClick:()=>E("delete"),children:"Delete"})]})})]}),o?l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("p",{children:t("common.loading")})]}):l.jsxs("div",{className:"alerts-table-container",children:[l.jsxs("table",{className:"alerts-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"checkbox-col",children:l.jsx("input",{type:"checkbox",checked:g.length===n.length&&n.length>0,onChange:U})}),l.jsx("th",{children:"ID"}),l.jsx("th",{children:t("alerts.severity")}),l.jsx("th",{children:t("alerts.rule")}),l.jsx("th",{children:t("alerts.message")}),l.jsx("th",{children:t("alerts.count")}),l.jsx("th",{children:t("alerts.status")}),l.jsx("th",{children:t("alerts.actions")})]})}),l.jsx("tbody",{children:n.map(B=>{var V;return l.jsxs("tr",{className:g.includes(B.id)?"selected":"",children:[l.jsx("td",{className:"checkbox-col",children:l.jsx("input",{type:"checkbox",checked:g.includes(B.id),onChange:()=>O(B.id)})}),l.jsx("td",{className:"id-col",children:B.id}),l.jsx("td",{children:l.jsx("span",{className:`badge ${Q(B.severity)}`,children:B.severity})}),l.jsx("td",{className:"rule-col",children:B.rule_name}),l.jsxs("td",{className:"message-col",children:[(V=B.message)==null?void 0:V.substring(0,100),"..."]}),l.jsx("td",{className:"count-col",children:B.count}),l.jsx("td",{children:l.jsx("span",{className:`status-badge ${B.resolved?"resolved":"active"}`,children:B.resolved?t("alerts.resolved"):t("alerts.active")})}),l.jsxs("td",{className:"actions-col",children:[!B.resolved&&l.jsx("button",{className:"btn-resolve",onClick:()=>N(B.id),children:t("alerts.resolve")}),l.jsx("button",{className:"btn-falsepositive",onClick:()=>T(B.id),children:"False Positive"}),l.jsx("button",{className:"btn-delete",onClick:()=>A(B.id),children:"Delete"})]})]},B.id)})})]}),n.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx("span",{className:"empty-icon",children:"🛡️"}),l.jsx("p",{children:t("alerts.noAlerts")})]})]}),_&&l.jsx("div",{className:"modal-overlay",onClick:()=>k(!1),children:l.jsxs("div",{className:"modal-content",onClick:B=>B.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t("alerts.runAnalysis")}),l.jsx("button",{className:"close-btn",onClick:()=>k(!1),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsx("p",{className:"modal-desc",children:t("alerts.analysisDesc")}),l.jsxs("div",{className:"analyzer-select-group",children:[l.jsx("label",{children:t("alerts.selectAnalyzer")}),l.jsx("div",{className:"analyzer-options",children:[{id:"brute-force",icon:"🔐",name:t("analyze.bruteForce")},{id:"login",icon:"🔑",name:t("analyze.login")},{id:"kerberos",icon:"🎭",name:t("analyze.kerberos")},{id:"powershell",icon:"⚡",name:t("analyze.powershell")}].map(B=>l.jsxs("div",{className:`analyzer-option ${y===B.id?"selected":""}`,onClick:()=>b(B.id),children:[l.jsx("span",{className:"analyzer-icon",children:B.icon}),l.jsx("span",{className:"analyzer-name",children:B.name})]},B.id))})]}),l.jsxs("div",{className:"analysis-summary",children:[l.jsx("h4",{children:t("alerts.analysisSummary")}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t("alerts.analysisTarget"),": ",g.length>0?`${g.length} ${t("alerts.selectedAlerts")}`:t("alerts.allAlerts")]}),l.jsxs("li",{children:[t("alerts.analysisScope"),": ",h||t("alerts.allSeverities")]})]})]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"btn-cancel",onClick:()=>k(!1),children:t("common.cancel")}),l.jsx("button",{className:"btn-primary",onClick:Y,disabled:j,children:j?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"btn-spinner"}),t("alerts.analyzing")]}):l.jsxs(l.Fragment,{children:[l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("alerts.startAnalysis")]})})]})]})]})})]})}function fS(){const{id:t}=Qm(),[e,n]=R.useState(null),[i,o]=R.useState(!0),[a,c]=R.useState(""),[u,h]=R.useState(!1);R.useEffect(()=>{t&&(o(!0),hn.get(Number(t)).then(y=>{n(y.data),o(!1)}).catch(()=>o(!1)))},[t]);const p=async()=>{if(e){h(!0);try{await hn.resolve(e.id,a),n({...e,resolved:!0,resolved_time:new Date().toISOString(),notes:a})}catch(y){console.error("Failed to resolve:",y)}finally{h(!1)}}},g=async()=>{if(e){h(!0);try{await hn.markFalsePositive(e.id,a),n({...e,false_positive:!0,notes:a})}catch(y){console.error("Failed to mark false positive:",y)}finally{h(!1)}}};if(i)return l.jsx("div",{children:"Loading..."});if(!e)return l.jsx("div",{children:"Alert not found"});const v=y=>{switch(y){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return""}};return l.jsxs("div",{className:"alert-detail",children:[l.jsx(ct,{to:"/alerts",children:"← Back to Alerts"}),l.jsxs("div",{className:"detail-panel",children:[l.jsxs("h3",{children:["Alert #",e.id]}),l.jsxs("div",{className:"status-badges",children:[l.jsx("span",{className:`badge ${v(e.severity)}`,children:e.severity.toUpperCase()}),e.resolved&&l.jsx("span",{className:"badge",style:{background:"#28a745"},children:"Resolved"}),e.false_positive&&l.jsx("span",{className:"badge",style:{background:"#6c757d"},children:"False Positive"})]}),l.jsxs("div",{className:"detail-grid",children:[l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Rule Name:"}),l.jsx("span",{children:e.rule_name})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Score:"}),l.jsx("span",{children:e.rule_score.toFixed(2)})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Log Name:"}),l.jsx("span",{children:e.log_name})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Count:"}),l.jsx("span",{children:e.count})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"First Seen:"}),l.jsx("span",{children:new Date(e.first_seen).toLocaleString()})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Last Seen:"}),l.jsx("span",{children:new Date(e.last_seen).toLocaleString()})]}),e.resolved_time&&l.jsxs("div",{className:"detail-item",children:[l.jsx("label",{children:"Resolved Time:"}),l.jsx("span",{children:new Date(e.resolved_time).toLocaleString()})]})]}),l.jsxs("div",{className:"detail-section",children:[l.jsx("label",{children:"Message:"}),l.jsx("pre",{className:"message-box",children:e.message})]}),e.mitre_attack&&e.mitre_attack.length>0&&l.jsxs("div",{className:"detail-section",children:[l.jsx("label",{children:"MITRE ATT&CK:"}),l.jsx("div",{className:"mitre-tags",children:e.mitre_attack.map((y,b)=>l.jsx("span",{className:"mitre-tag",children:y},b))})]}),!e.resolved&&!e.false_positive&&l.jsxs("div",{className:"actions-section",children:[l.jsx("h4",{children:"Actions"}),l.jsx("textarea",{placeholder:"Add notes...",value:a,onChange:y=>c(y.target.value),rows:3}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{onClick:p,disabled:u,children:u?"Processing...":"Resolve"}),l.jsx("button",{onClick:g,disabled:u,style:{background:"#6c757d"},children:"Mark as False Positive"})]})]}),e.notes&&l.jsxs("div",{className:"detail-section",children:[l.jsx("label",{children:"Notes:"}),l.jsx("pre",{className:"notes-box",children:e.notes})]})]}),l.jsx("style",{children:`
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
      `})]})}function pS(){const{t}=Dt(),e=Ar(),[n,i]=R.useState([]),[o,a]=R.useState(!0),[c,u]=R.useState({eventCount:0,alertCount:0}),[h,p]=R.useState("all"),[g,v]=R.useState("24h");R.useEffect(()=>{a(!0),fd.get(300).then(S=>{const N=S.data;i(N.entries||[]),u({eventCount:N.event_count,alertCount:N.alert_count}),a(!1)}).catch(()=>a(!1))},[]);const y=(S,N)=>{if(S==="alert")switch(N){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}return"📋"},b=(S,N)=>{if(S==="alert")switch(N){case"critical":return"#ef4444";case"high":return"#f97316";case"medium":return"#eab308";case"low":return"#22c55e";default:return"#888"}return"#00d9ff"},_=S=>S==="alert"?"ALERT":"EVENT",k=n.filter(S=>h==="all"?!0:h==="events"?S.type==="event":h==="alerts"?S.type==="alert":!0),j=S=>{fd.deleteAlert(S).then(()=>{i(n.filter(N=>!(N.type==="alert"&&N.alert_id===S)))}).catch(N=>console.error("Failed to delete alert:",N))};return o?l.jsx("div",{className:"timeline-page",children:l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("p",{children:t("common.loading")})]})}):l.jsxs("div",{className:"timeline-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("h2",{children:t("timeline.title")}),l.jsx("p",{className:"header-desc",children:t("timeline.pageDesc")})]}),l.jsx("div",{className:"header-actions",children:l.jsxs("button",{className:"btn-secondary",onClick:()=>e("/analyze"),children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("path",{d:"m21 21-4.35-4.35"})]}),t("timeline.runAnalysis")]})})]}),l.jsxs("div",{className:"timeline-stats-cards",children:[l.jsxs("div",{className:"stat-card events",children:[l.jsx("div",{className:"stat-icon",children:"📋"}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:c.eventCount}),l.jsx("span",{className:"stat-label",children:t("timeline.totalEvents")})]}),l.jsx("div",{className:"stat-bar",children:l.jsx("div",{className:"stat-bar-fill events",style:{width:`${c.eventCount>0?c.eventCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),l.jsxs("div",{className:"stat-card alerts",children:[l.jsx("div",{className:"stat-icon",children:"🚨"}),l.jsxs("div",{className:"stat-content",children:[l.jsx("span",{className:"stat-value",children:c.alertCount}),l.jsx("span",{className:"stat-label",children:t("timeline.totalAlerts")})]}),l.jsx("div",{className:"stat-bar",children:l.jsx("div",{className:"stat-bar-fill alerts",style:{width:`${c.alertCount>0?c.alertCount/(c.eventCount+c.alertCount)*100:0}%`}})})]}),l.jsxs("div",{className:"stat-card ratio",children:[l.jsx("div",{className:"stat-icon",children:"📊"}),l.jsxs("div",{className:"stat-content",children:[l.jsxs("span",{className:"stat-value",children:[c.eventCount+c.alertCount>0?(c.alertCount/(c.eventCount+c.alertCount)*100).toFixed(1):0,"%"]}),l.jsx("span",{className:"stat-label",children:t("timeline.alertRatio")})]})]})]}),l.jsxs("div",{className:"timeline-toolbar",children:[l.jsx("div",{className:"toolbar-left",children:l.jsxs("div",{className:"filter-tabs",children:[l.jsxs("button",{className:`filter-tab ${h==="all"?"active":""}`,onClick:()=>p("all"),children:[t("timeline.all"),l.jsx("span",{className:"count",children:c.eventCount+c.alertCount})]}),l.jsxs("button",{className:`filter-tab ${h==="events"?"active":""}`,onClick:()=>p("events"),children:[t("timeline.eventsOnly"),l.jsx("span",{className:"count events",children:c.eventCount})]}),l.jsxs("button",{className:`filter-tab ${h==="alerts"?"active":""}`,onClick:()=>p("alerts"),children:[t("timeline.alertsOnly"),l.jsx("span",{className:"count alerts",children:c.alertCount})]})]})}),l.jsx("div",{className:"toolbar-right",children:l.jsxs("select",{className:"time-range-select",value:g,onChange:S=>v(S.target.value),children:[l.jsx("option",{value:"1h",children:t("timeline.last1h")}),l.jsx("option",{value:"6h",children:t("timeline.last6h")}),l.jsx("option",{value:"24h",children:t("timeline.last24h")}),l.jsx("option",{value:"7d",children:t("timeline.last7d")}),l.jsx("option",{value:"30d",children:t("timeline.last30d")})]})})]}),l.jsx("div",{className:"timeline-container",children:k.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("span",{className:"empty-icon",children:"📭"}),l.jsx("p",{children:t("timeline.noEntries")})]}):l.jsx("div",{className:"timeline",children:k.map((S,N)=>l.jsxs("div",{className:`timeline-item ${S.type}`,children:[l.jsxs("div",{className:"timeline-marker",style:{"--marker-color":b(S.type,S.severity)},children:[l.jsx("div",{className:"marker-dot"}),l.jsx("div",{className:"marker-line"})]}),l.jsxs("div",{className:"timeline-card",children:[l.jsxs("div",{className:"card-header",children:[l.jsxs("div",{className:"card-left",children:[l.jsx("span",{className:"card-icon",children:y(S.type,S.severity)}),l.jsx("span",{className:`timeline-type ${S.type}`,style:{color:b(S.type,S.severity)},children:_(S.type)}),S.type==="event"&&S.event_id&&l.jsxs("span",{className:"event-id-badge",children:["Event ",S.event_id]}),S.type==="alert"&&S.severity&&l.jsx("span",{className:`severity-badge ${S.severity}`,style:{background:`${b(S.type,S.severity)}20`,color:b(S.type,S.severity)},children:S.severity.toUpperCase()})]}),l.jsx("span",{className:"card-time",children:new Date(S.timestamp).toLocaleString()})]}),l.jsx("p",{className:"card-message",children:S.message}),S.type==="alert"&&S.rule_name&&l.jsxs("div",{className:"card-meta",children:[l.jsxs("span",{className:"rule-badge",children:[l.jsx("span",{className:"rule-icon",children:"📌"}),S.rule_name]}),S.mitre_attack&&S.mitre_attack.length>0&&l.jsxs("span",{className:"mitre-badge",children:[l.jsx("span",{className:"mitre-icon",children:"🎯"}),S.mitre_attack.join(", ")]})]}),S.type==="alert"&&S.alert_id&&l.jsxs("div",{className:"card-actions",children:[l.jsx("button",{className:"btn-detail",onClick:()=>e(`/alerts/${S.alert_id}`),children:t("timeline.viewDetails")}),l.jsx("button",{className:"btn-delete",onClick:()=>S.alert_id&&j(S.alert_id),children:t("timeline.delete")})]})]})]},`${S.type}-${S.id}-${N}`))})})]})}function mS(){const{t}=Dt(),[e,n]=R.useState(!1),[i,o]=R.useState("security"),[a,c]=R.useState("html"),[u,h]=R.useState("7d"),[p,g]=R.useState([]),[v,y]=R.useState(null),[b,_]=R.useState(null);R.useEffect(()=>{Go.list().then(E=>g(E.data.reports)).catch(console.error)},[]);const k=async()=>{n(!0),_(null);try{const E=new Date,O=new Date;switch(u){case"24h":O.setHours(O.getHours()-24);break;case"7d":O.setDate(O.getDate()-7);break;case"30d":O.setDate(O.getDate()-30);break;case"90d":O.setDate(O.getDate()-90);break}await Go.generate({type:i,format:a,start_time:O.toISOString(),end_time:E.toISOString()}),y(new Date().toLocaleString())}catch(E){console.error("Report generation failed:",E),_("Failed to generate report. Please try again.")}finally{n(!1)}},j=async E=>{try{const O=await Go.get(E.id);if(O.data.content){const U=window.open("","_blank");U&&(E.format==="html"?(U.document.write(O.data.content),U.document.close()):(U.document.write(`<pre>${JSON.stringify(O.data,null,2)}</pre>`),U.document.close()))}else alert("Report content not available")}catch(O){console.error("Failed to view report:",O),alert("Failed to view report")}},S=async E=>{try{const O=E.format||"json",U=await Go.export(O),$=new Blob([U.data],{type:U.headers["content-type"]||"application/octet-stream"}),Y=URL.createObjectURL($),Q=document.createElement("a");Q.href=Y,Q.download=`${E.name||E.id}.${O}`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(Y)}catch(O){console.error("Failed to download report:",O),alert("Failed to download report")}},N=E=>E<1024?E+" B":E<1024*1024?(E/1024).toFixed(1)+" KB":(E/(1024*1024)).toFixed(1)+" MB",T=[{value:"security",label:t("reports.securitySummary"),icon:"🛡️",desc:"Comprehensive security overview with event statistics and alerts"},{value:"alert",label:t("reports.alertAnalysis"),icon:"🚨",desc:"Detailed alert analysis with threat patterns"},{value:"timeline",label:t("reports.eventTimeline"),icon:"📊",desc:"Chronological event timeline with correlations"},{value:"compliance",label:t("reports.complianceReport"),icon:"📋",desc:"Compliance status and audit trail report"}],A=[{value:"html",label:"HTML",icon:"🌐",desc:"Interactive web report with charts"},{value:"json",label:"JSON",icon:"📄",desc:"Structured data for further processing"},{value:"pdf",label:"PDF",icon:"📕",desc:"Printable document format"}];return l.jsxs("div",{className:"reports-page",children:[l.jsx("h2",{children:t("reports.title")}),l.jsxs("div",{className:"reports-grid",children:[l.jsxs("div",{className:"reports-card main-config",children:[l.jsx("h3",{children:t("reports.generateReport")}),l.jsx("p",{className:"card-desc",children:t("reports.generateDesc")}),l.jsxs("div",{className:"config-section",children:[l.jsx("label",{className:"section-label",children:"Report Type"}),l.jsx("div",{className:"type-grid",children:T.map(E=>l.jsxs("div",{className:`type-option ${i===E.value?"selected":""}`,onClick:()=>o(E.value),children:[l.jsx("div",{className:"type-icon",children:E.icon}),l.jsx("div",{className:"type-label",children:E.label})]},E.value))})]}),l.jsxs("div",{className:"config-section",children:[l.jsx("label",{className:"section-label",children:"Output Format"}),l.jsx("div",{className:"format-row",children:A.map(E=>l.jsxs("div",{className:`format-option ${a===E.value?"selected":""}`,onClick:()=>c(E.value),children:[l.jsx("div",{className:"format-icon",children:E.icon}),l.jsx("div",{className:"format-label",children:E.label})]},E.value))})]}),l.jsxs("div",{className:"config-section",children:[l.jsx("label",{className:"section-label",children:"Time Range"}),l.jsx("div",{className:"date-range-selector",children:["24h","7d","30d","90d"].map(E=>l.jsxs("button",{className:`range-btn ${u===E?"active":""}`,onClick:()=>h(E),children:[E==="24h"&&"Last 24 Hours",E==="7d"&&"Last 7 Days",E==="30d"&&"Last 30 Days",E==="90d"&&"Last 90 Days"]},E))})]}),b&&l.jsxs("div",{className:"error-message",children:["⚠️ ",b]}),l.jsx("button",{className:"btn-primary generate-btn",onClick:k,disabled:e,children:e?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"btn-spinner"}),"Generating Report..."]}):l.jsxs(l.Fragment,{children:["📊 ",t("reports.generate")]})}),v&&l.jsxs("div",{className:"last-generated",children:["✓ Last report generated at ",v]})]}),l.jsxs("div",{className:"reports-card stats-card",children:[l.jsx("h3",{children:"Report Statistics"}),l.jsxs("div",{className:"stats-preview",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"stat-icon",children:"📁"}),l.jsx("div",{className:"stat-value",children:p.length}),l.jsx("div",{className:"stat-label",children:"Total Reports"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"stat-icon",children:"🛡️"}),l.jsx("div",{className:"stat-value",children:p.filter(E=>E.type==="security").length}),l.jsx("div",{className:"stat-label",children:"Security Reports"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("div",{className:"stat-icon",children:"🚨"}),l.jsx("div",{className:"stat-value",children:p.filter(E=>E.type==="alert").length}),l.jsx("div",{className:"stat-label",children:"Alert Reports"})]})]}),l.jsxs("div",{className:"chart-placeholder",children:[l.jsx("div",{className:"chart-label",children:"Reports by Type"}),l.jsxs("div",{className:"mini-chart",children:[l.jsx("div",{className:"bar",style:{height:"60%",background:"#00d9ff"}}),l.jsx("div",{className:"bar",style:{height:"30%",background:"#f97316"}}),l.jsx("div",{className:"bar",style:{height:"80%",background:"#22c55e"}}),l.jsx("div",{className:"bar",style:{height:"45%",background:"#eab308"}})]})]})]})]}),l.jsxs("div",{className:"reports-card full-width",children:[l.jsx("h3",{children:t("reports.recentReports")}),p.length>0?l.jsx("div",{className:"reports-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Report Name"}),l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Format"}),l.jsx("th",{children:"Generated"}),l.jsx("th",{children:"Size"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:p.map(E=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("div",{className:"report-name",children:[l.jsxs("span",{className:"report-icon",children:[E.type==="security"&&"🛡️",E.type==="alert"&&"🚨",E.type==="timeline"&&"📊",E.type==="compliance"&&"📋"]}),E.name]})}),l.jsx("td",{children:l.jsx("span",{className:`type-badge ${E.type}`,children:E.type})}),l.jsx("td",{children:l.jsx("span",{className:"format-badge",children:E.format.toUpperCase()})}),l.jsx("td",{children:new Date(E.generated_at).toLocaleString()}),l.jsx("td",{children:N(E.size)}),l.jsxs("td",{children:[l.jsx("button",{className:"btn-small",onClick:()=>j(E),children:"View"}),l.jsx("button",{className:"btn-small",onClick:()=>S(E),children:"Download"})]})]},E.id))})]})}):l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📊"}),l.jsx("div",{className:"empty-text",children:t("reports.noReports")}),l.jsx("div",{className:"empty-hint",children:"Generate your first report using the form above"})]})]}),l.jsx("style",{children:`
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
      `})]})}function gS(){const{t}=Dt(),[e,n]=R.useState(!1),[i,o]=R.useState(""),[a,c]=R.useState(""),[u,h]=R.useState(null),[p,g]=R.useState(!1),[v,y]=R.useState(!1),[b,_]=R.useState([]),[k,j]=R.useState(""),[S,N]=R.useState(["eventlogs","registry","prefetch"]),[T,A]=R.useState([]),[E,O]=R.useState(!1);R.useEffect(()=>{U(),$()},[]);const U=()=>{bs.listEvidence().then(W=>{W.data&&Array.isArray(W.data)&&_(W.data)}).catch(W=>console.error("Failed to load evidence:",W))},$=()=>{bs.chainOfCustody().then(W=>{W.data&&Array.isArray(W.data)&&A(W.data)}).catch(W=>console.error("Failed to load chain of custody:",W))},Y=async()=>{var W,ne;if(a.trim()){y(!0);try{const X=await bs.calculateHash(a);o(X.data.hash||"")}catch(X){console.error("Failed to calculate hash:",X),alert("Failed to calculate hash: "+(((ne=(W=X.response)==null?void 0:W.data)==null?void 0:ne.error)||X.message))}finally{y(!1)}}},Q=async()=>{n(!0),j("starting");try{for(const W of S)j(`collecting:${W}`),await bs.collect(W,`/tmp/forensics_${W}`);U(),$(),j("completed")}catch(W){console.error("Collection failed:",W),j("error")}finally{n(!1)}},se=async()=>{var W,ne;if(!(!i.trim()||!a.trim())){g(!0),h(null);try{const X=await bs.verifyHash(a,i);h({verified:X.data.match||!1,expected:i,actual:X.data.actual||i,path:a})}catch(X){h({verified:!1,expected:i,actual:((ne=(W=X.response)==null?void 0:W.data)==null?void 0:ne.error)||"Hash verification failed",path:a})}finally{g(!1)}}},B=W=>{N(ne=>ne.includes(W)?ne.filter(X=>X!==W):[...ne,W])},V=async W=>{try{const ne=await bs.getEvidence(W.id);if(ne.data.content){const X=window.open("","_blank");X&&(X.document.write(`<pre>${JSON.stringify(ne.data,null,2)}</pre>`),X.document.close())}else alert("Evidence content not available")}catch(ne){console.error("Failed to view evidence:",ne),alert("Failed to view evidence")}},L=async W=>{try{const ne=await bs.exportEvidence(W.id,"json"),X=new Blob([ne.data],{type:ne.headers["content-type"]||"application/octet-stream"}),ie=URL.createObjectURL(X),ee=document.createElement("a");ee.href=ie,ee.download=`evidence_${W.type}_${W.id}.json`,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(ie)}catch(ne){console.error("Failed to export evidence:",ne),alert("Failed to export evidence")}},re=W=>W<1024?W+" B":W<1024*1024?(W/1024).toFixed(1)+" KB":(W/(1024*1024)).toFixed(1)+" MB";return l.jsxs("div",{className:"forensics-page",children:[l.jsx("h2",{children:t("forensics.title")}),l.jsxs("div",{className:"forensics-grid",children:[l.jsxs("div",{className:"forensics-card",children:[l.jsx("h3",{children:t("forensics.evidenceCollection")}),l.jsx("p",{className:"card-desc",children:t("forensics.evidenceCollectionDesc")}),l.jsxs("div",{className:"collection-types",children:[l.jsxs("div",{className:"type-item",onClick:()=>B("eventlogs"),children:[l.jsx("div",{className:`type-checkbox ${S.includes("eventlogs")?"checked":""}`,children:S.includes("eventlogs")&&"✓"}),l.jsx("div",{className:"type-icon",children:"📋"}),l.jsxs("div",{className:"type-info",children:[l.jsx("div",{className:"type-name",children:t("forensics.eventLogs")}),l.jsx("div",{className:"type-desc",children:"Security, System, Application"})]})]}),l.jsxs("div",{className:"type-item",onClick:()=>B("registry"),children:[l.jsx("div",{className:`type-checkbox ${S.includes("registry")?"checked":""}`,children:S.includes("registry")&&"✓"}),l.jsx("div",{className:"type-icon",children:"🔧"}),l.jsxs("div",{className:"type-info",children:[l.jsx("div",{className:"type-name",children:t("forensics.registry")}),l.jsx("div",{className:"type-desc",children:"Persistence points, Run keys"})]})]}),l.jsxs("div",{className:"type-item",onClick:()=>B("memory"),children:[l.jsx("div",{className:`type-checkbox ${S.includes("memory")?"checked":""}`,children:S.includes("memory")&&"✓"}),l.jsx("div",{className:"type-icon",children:"💾"}),l.jsxs("div",{className:"type-info",children:[l.jsx("div",{className:"type-name",children:t("forensics.memoryDump")}),l.jsx("div",{className:"type-desc",children:"Live memory acquisition"})]})]}),l.jsxs("div",{className:"type-item",onClick:()=>B("prefetch"),children:[l.jsx("div",{className:`type-checkbox ${S.includes("prefetch")?"checked":""}`,children:S.includes("prefetch")&&"✓"}),l.jsx("div",{className:"type-icon",children:"⚡"}),l.jsxs("div",{className:"type-info",children:[l.jsx("div",{className:"type-name",children:t("forensics.prefetch")}),l.jsx("div",{className:"type-desc",children:"Program execution history"})]})]})]}),k&&l.jsxs("div",{className:`collect-status ${k}`,children:[k==="starting"&&"📡 Initializing collection...",k.startsWith("collecting:")&&`🔍 Collecting ${k.split(":")[1]}...`,k==="completed"&&"✅ Collection completed",k==="error"&&"❌ Collection failed"]}),l.jsx("button",{className:"btn-primary forensics-btn",onClick:Q,disabled:e||S.length===0,children:e?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"btn-spinner"}),"Collecting..."]}):l.jsxs(l.Fragment,{children:["🚀 ",t("forensics.startCollection")]})})]}),l.jsxs("div",{className:"forensics-card",children:[l.jsx("h3",{children:t("forensics.hashVerification")}),l.jsx("p",{className:"card-desc",children:t("forensics.hashVerificationDesc")}),l.jsxs("div",{className:"hash-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"File Path"}),l.jsx("input",{type:"text",placeholder:"C:\\Windows\\System32\\cmd.exe",value:a,onChange:W=>c(W.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Expected SHA256 Hash"}),l.jsx("input",{type:"text",placeholder:"e3b0c44298fc1c149afbf4c8996fb924...",value:i,onChange:W=>o(W.target.value)})]}),l.jsx("button",{className:"btn-secondary",onClick:Y,disabled:v||!a.trim(),children:v?"Calculating...":"Calculate Hash"}),l.jsx("button",{className:"btn-secondary",onClick:se,disabled:p||!i.trim()||!a.trim(),children:p?"Verifying...":t("forensics.verify")})]}),u&&l.jsxs("div",{className:`hash-result ${u.verified?"match":"no-match"}`,children:[l.jsx("div",{className:"result-icon",children:u.verified?"✅":"❌"}),l.jsxs("div",{className:"result-content",children:[l.jsx("div",{className:"result-title",children:u.verified?t("forensics.hashMatch"):t("forensics.hashNoMatch")}),l.jsxs("div",{className:"result-details",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"File:"})," ",u.path]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Expected:"})," ",l.jsxs("code",{children:[u.expected.substring(0,20),"..."]})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Actual:"})," ",l.jsxs("code",{children:[u.actual.substring(0,20),"..."]})]})]})]})]})]})]}),l.jsxs("div",{className:"forensics-card full-width",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("div",{children:[l.jsx("h3",{children:t("forensics.chainOfCustody")}),l.jsx("p",{className:"card-desc",children:t("forensics.chainOfCustodyDesc")})]}),l.jsx("button",{className:"btn-secondary",onClick:()=>O(!0),children:"View Full Chain"})]}),b.length>0?l.jsx("div",{className:"evidence-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Collected At"}),l.jsx("th",{children:"Path"}),l.jsx("th",{children:"Size"}),l.jsx("th",{children:"Hash"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:b.map(W=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("span",{className:"evidence-type",children:W.type})}),l.jsx("td",{children:new Date(W.collected_at).toLocaleString()}),l.jsx("td",{children:l.jsx("code",{className:"evidence-path",children:W.path})}),l.jsx("td",{children:re(W.size)}),l.jsx("td",{children:l.jsxs("code",{className:"evidence-hash",children:[W.hash.substring(0,16),"..."]})}),l.jsxs("td",{children:[l.jsx("button",{className:"btn-small",onClick:()=>V(W),children:"View"}),l.jsx("button",{className:"btn-small",onClick:()=>L(W),children:"Export"})]})]},W.id))})]})}):l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📦"}),l.jsx("div",{className:"empty-text",children:t("forensics.noEvidence")}),l.jsx("div",{className:"empty-hint",children:"Collect evidence using the form above"})]})]}),E&&l.jsx("div",{className:"modal-overlay",onClick:()=>O(!1),children:l.jsxs("div",{className:"modal-content chain-modal",onClick:W=>W.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t("forensics.chainOfCustody")}),l.jsx("button",{className:"close-btn",onClick:()=>O(!1),children:"×"})]}),l.jsx("div",{className:"modal-body",children:T.length>0?l.jsx("div",{className:"chain-timeline",children:T.map((W,ne)=>l.jsxs("div",{className:"chain-entry",children:[l.jsx("div",{className:"chain-dot",children:ne+1}),l.jsxs("div",{className:"chain-content",children:[l.jsx("div",{className:"chain-action",children:W.action}),l.jsx("div",{className:"chain-details",children:W.details}),l.jsxs("div",{className:"chain-meta",children:[l.jsx("span",{className:"chain-time",children:new Date(W.timestamp).toLocaleString()}),W.user&&l.jsxs("span",{className:"chain-user",children:["by ",W.user]})]})]})]},W.id))}):l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📋"}),l.jsx("div",{className:"empty-text",children:"No chain of custody records"})]})})]})}),l.jsx("style",{children:`
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
      `})]})}function xS(){var B,V;const{t}=Dt(),[e,n]=R.useState("system"),[i,o]=R.useState(null),[a,c]=R.useState([]),[u,h]=R.useState([]),[p,g]=R.useState([]),[v,y]=R.useState([]),[b,_]=R.useState([]),[k,j]=R.useState(!0),[S,N]=R.useState(null);R.useEffect(()=>{T()},[]);const T=()=>{j(!0),ks.getInfo().then(L=>{o(L.data),j(!1)}).catch(L=>{N(L.message||t("common.error")),j(!1)})},A=()=>{a.length>0||(j(!0),ks.getProcesses(50).then(L=>{c(L.data.processes||[]),j(!1)}).catch(()=>j(!1)))},E=()=>{u.length>0||(j(!0),ks.getNetwork(50).then(L=>{h(L.data.connections||[]),j(!1)}).catch(()=>j(!1)))},O=()=>{p.length>0||(j(!0),ks.getEnvVariables().then(L=>{g(L.data.variables||[]),j(!1)}).catch(()=>j(!1)))},U=()=>{v.length>0||(j(!0),ks.getLoadedDLLs(100).then(L=>{y(L.data.modules||[]),j(!1)}).catch(()=>j(!1)))},$=()=>{b.length>0||(j(!0),ks.getDrivers().then(L=>{_(L.data.drivers||[]),j(!1)}).catch(()=>j(!1)))},Y=L=>{n(L),L==="processes"&&A(),L==="network"&&E(),L==="env"&&O(),L==="dlls"&&U(),L==="drivers"&&$()},Q=L=>{const re=Math.floor(L/86400),W=Math.floor(L%86400/3600),ne=Math.floor(L%3600/60);return re>0?`${re}d ${W}h ${ne}m`:W>0?`${W}h ${ne}m`:`${ne}m`},se=L=>{switch(L==null?void 0:L.toUpperCase()){case"ESTABLISHED":return"#22c55e";case"LISTEN":return"#3b82f6";case"TIME_WAIT":return"#f59e0b";case"CLOSE_WAIT":return"#ef4444";default:return"#888"}};return k&&!i?l.jsx("div",{className:"systeminfo-page",children:l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("div",{children:t("common.loading")})]})}):S?l.jsx("div",{className:"systeminfo-page",children:l.jsxs("div",{className:"error-state",children:["Error: ",S]})}):l.jsxs("div",{className:"systeminfo-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:t("systemInfo.title")}),l.jsx("div",{className:"header-actions",children:l.jsx("button",{className:"btn-refresh",onClick:T,children:"Refresh"})})]}),l.jsxs("div",{className:"tab-nav",children:[l.jsx("button",{className:`tab-btn ${e==="system"?"active":""}`,onClick:()=>Y("system"),children:"System"}),l.jsxs("button",{className:`tab-btn ${e==="processes"?"active":""}`,onClick:()=>Y("processes"),children:["Processes (",a.length||"...",")"]}),l.jsxs("button",{className:`tab-btn ${e==="network"?"active":""}`,onClick:()=>Y("network"),children:["Network (",u.length||"...",")"]}),l.jsxs("button",{className:`tab-btn ${e==="env"?"active":""}`,onClick:()=>Y("env"),children:["Env (",p.length||"...",")"]}),l.jsxs("button",{className:`tab-btn ${e==="dlls"?"active":""}`,onClick:()=>Y("dlls"),children:["DLLs (",v.length||"...",")"]}),l.jsxs("button",{className:`tab-btn ${e==="drivers"?"active":""}`,onClick:()=>Y("drivers"),children:["Drivers (",b.length||"...",")"]})]}),e==="system"&&i&&l.jsxs("div",{className:"system-grid",children:[l.jsxs("div",{className:"system-card os-card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("div",{className:"card-icon",children:"OS"}),l.jsx("h3",{children:t("systemInfo.operatingSystem")})]}),l.jsxs("div",{className:"system-status",children:[l.jsx("div",{className:"status-indicator online"}),l.jsx("span",{children:"System Online"})]}),l.jsxs("div",{className:"info-list",children:[l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.hostname")}),l.jsx("span",{className:"info-value highlight",children:i.hostname||"N/A"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.domain")}),l.jsx("span",{className:"info-value",children:i.domain||"WORKGROUP"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.osName")}),l.jsx("span",{className:"info-value",children:i.os_name||"Unknown"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.osVersion")}),l.jsx("span",{className:"info-value",children:i.os_version||"Unknown"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.architecture")}),l.jsx("span",{className:"info-value badge",children:i.architecture||"x64"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.timezone")}),l.jsx("span",{className:"info-value",children:i.timezone||"UTC"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.admin")}),l.jsx("span",{className:`info-value badge ${i.is_admin?"admin":"user"}`,children:i.is_admin?"Root/Admin":"Standard User"})]})]})]}),l.jsxs("div",{className:"system-card runtime-card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("div",{className:"card-icon",children:"Runtime"}),l.jsx("h3",{children:t("systemInfo.runtimeInfo")})]}),l.jsxs("div",{className:"info-list",children:[l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.goVersion")}),l.jsx("span",{className:"info-value mono",children:i.go_version||"Unknown"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.cpuCount")}),l.jsxs("span",{className:"info-value",children:[i.cpu_count||0," Cores"]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:t("systemInfo.uptime")}),l.jsx("span",{className:"info-value",children:Q(i.uptime_seconds||0)})]})]})]}),l.jsxs("div",{className:"system-card resources-card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("div",{className:"card-icon",children:"Resources"}),l.jsx("h3",{children:"System Resources"})]}),l.jsxs("div",{className:"resource-bars",children:[l.jsxs("div",{className:"resource-item",children:[l.jsxs("div",{className:"resource-header",children:[l.jsx("span",{className:"resource-name",children:"Memory"}),l.jsxs("span",{className:"resource-value",children:[i.memory_free_gb?(i.memory_total_gb-i.memory_free_gb).toFixed(1):"0"," / ",((B=i.memory_total_gb)==null?void 0:B.toFixed(1))||"0"," GB"]})]}),l.jsx("div",{className:"resource-bar",children:l.jsx("div",{className:"resource-fill",style:{width:i.memory_total_gb?`${(i.memory_total_gb-i.memory_free_gb)/i.memory_total_gb*100}%`:"0%"}})})]}),l.jsxs("div",{className:"resource-item",children:[l.jsxs("div",{className:"resource-header",children:[l.jsx("span",{className:"resource-name",children:"Free Memory"}),l.jsxs("span",{className:"resource-value",children:[((V=i.memory_free_gb)==null?void 0:V.toFixed(1))||"0"," GB"]})]}),l.jsx("div",{className:"resource-bar",children:l.jsx("div",{className:"resource-fill memory",style:{width:i.memory_total_gb?`${i.memory_free_gb/i.memory_total_gb*100}%`:"0%"}})})]})]})]}),l.jsxs("div",{className:"system-card time-card",children:[l.jsxs("div",{className:"card-header",children:[l.jsx("div",{className:"card-icon",children:"Time"}),l.jsx("h3",{children:"Time Information"})]}),l.jsxs("div",{className:"time-display",children:[l.jsx("div",{className:"current-time",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleTimeString():new Date().toLocaleTimeString()}),l.jsx("div",{className:"current-date",children:i!=null&&i.local_time?new Date(i.local_time).toLocaleDateString():new Date().toLocaleDateString()})]}),l.jsx("div",{className:"info-list",children:l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"UTC Time"}),l.jsx("span",{className:"info-value mono",children:new Date().toISOString()})]})})]})]}),e==="processes"&&l.jsxs("div",{className:"data-table-container",children:[l.jsxs("table",{className:"data-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"PID"}),l.jsx("th",{children:"PPID"}),l.jsx("th",{children:"Name"}),l.jsx("th",{children:"User"}),l.jsx("th",{children:"Command"})]})}),l.jsx("tbody",{children:a.map((L,re)=>l.jsxs("tr",{children:[l.jsx("td",{className:"mono",children:L.pid}),l.jsx("td",{className:"mono",children:L.ppid}),l.jsx("td",{children:L.name}),l.jsx("td",{children:L.user}),l.jsx("td",{className:"truncate",title:L.args,children:L.args||L.exe})]},`${L.pid}-${re}`))})]}),a.length===0&&!k&&l.jsx("div",{className:"empty-state",children:"No process data available"})]}),e==="network"&&l.jsxs("div",{className:"data-table-container",children:[l.jsxs("table",{className:"data-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Protocol"}),l.jsx("th",{children:"Local Address"}),l.jsx("th",{children:"Port"}),l.jsx("th",{children:"Remote Address"}),l.jsx("th",{children:"Port"}),l.jsx("th",{children:"State"}),l.jsx("th",{children:"Process"})]})}),l.jsx("tbody",{children:u.map((L,re)=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("span",{className:"protocol-badge",children:L.protocol})}),l.jsx("td",{className:"mono",children:L.local_addr}),l.jsx("td",{className:"mono",children:L.local_port}),l.jsx("td",{className:"mono",children:L.remote_addr||"-"}),l.jsx("td",{className:"mono",children:L.remote_port||"-"}),l.jsx("td",{children:l.jsx("span",{className:"state-badge",style:{color:se(L.state)},children:L.state})}),l.jsx("td",{children:L.process_name||L.pid||"-"})]},`${L.protocol}-${L.local_addr}-${L.local_port}-${re}`))})]}),u.length===0&&!k&&l.jsx("div",{className:"empty-state",children:"No network connection data available"})]}),e==="env"&&l.jsxs("div",{className:"data-table-container",children:[l.jsxs("table",{className:"data-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Variable Name"}),l.jsx("th",{children:"Value"}),l.jsx("th",{children:"Type"})]})}),l.jsx("tbody",{children:p.map((L,re)=>l.jsxs("tr",{children:[l.jsx("td",{className:"mono highlight",children:L.name}),l.jsx("td",{className:"truncate",title:L.value,children:L.value}),l.jsx("td",{children:l.jsx("span",{className:"type-badge",children:L.type})})]},`${L.name}-${re}`))})]}),p.length===0&&!k&&l.jsx("div",{className:"empty-state",children:"No environment variables available"})]}),e==="dlls"&&l.jsxs("div",{className:"data-table-container",children:[l.jsxs("table",{className:"data-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"PID"}),l.jsx("th",{children:"Process"}),l.jsx("th",{children:"DLL Name"}),l.jsx("th",{children:"Path"}),l.jsx("th",{children:"Size"})]})}),l.jsx("tbody",{children:v.map((L,re)=>l.jsxs("tr",{children:[l.jsx("td",{className:"mono",children:L.process_id}),l.jsx("td",{children:L.process_name}),l.jsx("td",{className:"mono highlight",children:L.name}),l.jsx("td",{className:"truncate",title:L.path,children:L.path}),l.jsxs("td",{className:"mono",children:[(L.size/1024).toFixed(1)," KB"]})]},`${L.process_id}-${L.name}-${re}`))})]}),v.length===0&&!k&&l.jsx("div",{className:"empty-state",children:"No DLL information available"})]}),e==="drivers"&&l.jsxs("div",{className:"data-table-container",children:[l.jsxs("table",{className:"data-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Name"}),l.jsx("th",{children:"Display Name"}),l.jsx("th",{children:"Description"}),l.jsx("th",{children:"Status"}),l.jsx("th",{children:"Path"})]})}),l.jsx("tbody",{children:b.map((L,re)=>{var W;return l.jsxs("tr",{children:[l.jsx("td",{className:"mono highlight",children:L.name}),l.jsx("td",{children:L.display_name||L.name}),l.jsx("td",{className:"truncate",title:L.description,children:L.description||"-"}),l.jsx("td",{children:l.jsx("span",{className:`status-badge ${(W=L.status)==null?void 0:W.toLowerCase()}`,children:L.status})}),l.jsx("td",{className:"truncate mono",title:L.path,children:L.path||"-"})]},`${L.name}-${re}`)})})]}),b.length===0&&!k&&l.jsx("div",{className:"empty-state",children:"No driver information available"})]}),l.jsx("style",{children:`
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
      `})]})}function vS(){const[t,e]=R.useState([]),[n,i]=R.useState(!0),[o,a]=R.useState(null),[c,u]=R.useState(0),[h,p]=R.useState(0),[g,v]=R.useState("all"),[y,b]=R.useState("all"),[_,k]=R.useState(""),[j,S]=R.useState(null),[N,T]=R.useState(!1),[A,E]=R.useState(!1),[O,U]=R.useState(null),[$,Y]=R.useState(!1),[Q,se]=R.useState(!1),[B,V]=R.useState(null),L=R.useRef(null),re=()=>{ys.list().then(K=>{e(K.data.rules||[]),u(K.data.total_count||0),p(K.data.enabled_count||0),i(!1)}).catch(K=>{a(K.message||"Failed to load rules"),i(!1)})};R.useEffect(()=>{re()},[]);const W=(K,le)=>{ys.toggle(K,!le).then(()=>{e(t.map(we=>we.name===K?{...we,enabled:!le}:we)),p(we=>le?we-1:we+1)}).catch(we=>{console.error("Failed to toggle rule:",we)})},ne=K=>{const le=prompt("Edit rule description:",K.description);le!==null&&le!==K.description&&ys.save({...K,description:le}).then(()=>{e(t.map(we=>we.name===K.name?{...we,description:le}:we))}).catch(we=>{console.error("Failed to update rule:",we)})},X=()=>{const K=prompt("Enter rule name:");if(!K)return;const le=prompt("Enter rule description:")||"",we=prompt("Enter severity (critical/high/medium/low):","medium")||"medium";ys.save({name:K,description:le,severity:we,enabled:!0,score:50}).then(()=>{re()}).catch(Lt=>{console.error("Failed to add rule:",Lt)})},ie=()=>{T(!0),U(null)},ee=K=>{Y(!0),ys.validate(K).then(le=>{U(le.data)}).catch(le=>{U({valid:!1,errors:[le.message||"Validation failed"],warnings:[]})}).finally(()=>{Y(!1)})},D=K=>{ys.export(K).then(le=>{const we=new Blob([le.data],{type:K==="yaml"?"text/yaml":"application/json"}),Lt=URL.createObjectURL(we),tn=document.createElement("a");tn.href=Lt,tn.download=`rules_export.${K}`,document.body.appendChild(tn),tn.click(),document.body.removeChild(tn),URL.revokeObjectURL(Lt)}).catch(le=>{console.error("Failed to export rules:",le),alert("Failed to export rules")})},q=()=>{E(!0),V(null)},me=K=>{var Lt;const le=(Lt=K.target.files)==null?void 0:Lt[0];if(!le)return;const we=new FileReader;we.onload=tn=>{var rs;try{const Rn=(rs=tn.target)==null?void 0:rs.result;let pn=[];if(le.name.endsWith(".yaml")||le.name.endsWith(".yml")){const Et=Rn.split(`
`);let it={};for(const mt of Et)mt.startsWith("- name:")?(it.name&&pn.push(it),it={name:mt.replace("- name:","").trim(),mitre_attack:[]}):mt.startsWith("  description:")?it.description=mt.replace("  description:","").trim():mt.startsWith("  severity:")?it.severity=mt.replace("  severity:","").trim():mt.startsWith("  enabled:")?it.enabled=mt.replace("  enabled:","").trim()==="true":mt.startsWith("  score:")?it.score=parseFloat(mt.replace("  score:","").trim())||50:mt.startsWith("    - ")&&(it.mitre_attack||(it.mitre_attack=[]),it.mitre_attack.push(mt.replace("    - ","").trim()));it.name&&pn.push(it)}else{const Et=JSON.parse(Rn);pn=Array.isArray(Et)?Et:Et.rules||[]}if(pn.length===0){V({imported:0,failed:0,errors:["No valid rules found in file"]});return}se(!0),ys.import(pn).then(Et=>{V(Et.data),Et.data.imported>0&&re()}).catch(Et=>{V({imported:0,failed:pn.length,errors:[Et.message||"Import failed"]})}).finally(()=>{se(!1)})}catch(Rn){V({imported:0,failed:0,errors:["Failed to parse file: "+(Rn.message||"Invalid format")]})}},we.readAsText(le)},pe=K=>{S(K)},ve=K=>{switch(K==null?void 0:K.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-info"}},ye=K=>{switch(K==null?void 0:K.toLowerCase()){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢";default:return"⚪"}},Pe=t.filter(K=>{var le;return!(g!=="all"&&((le=K.severity)==null?void 0:le.toLowerCase())!==g||y==="enabled"&&!K.enabled||y==="disabled"&&K.enabled||_&&!K.name.toLowerCase().includes(_.toLowerCase()))});return n?l.jsx("div",{className:"rules-page",children:l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("div",{children:"Loading rules..."})]})}):o?l.jsx("div",{className:"rules-page",children:l.jsx("div",{className:"error-state",children:o})}):l.jsxs("div",{className:"rules-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:"Detection Rules"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn-secondary",onClick:ie,children:"Validate"}),l.jsx("button",{className:"btn-secondary",onClick:q,children:"Import"}),l.jsxs("div",{className:"export-dropdown",children:[l.jsx("button",{className:"btn-secondary",children:"Export"}),l.jsxs("div",{className:"export-menu",children:[l.jsx("button",{onClick:()=>D("json"),children:"JSON"}),l.jsx("button",{onClick:()=>D("yaml"),children:"YAML"})]})]}),l.jsx("button",{className:"btn-primary",onClick:X,children:"Add Rule"})]})]}),l.jsxs("div",{className:"stats-cards",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon",children:"📋"}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value",children:c}),l.jsx("div",{className:"stat-label",children:"Total Rules"})]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon enabled",children:"✓"}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value enabled",children:h}),l.jsx("div",{className:"stat-label",children:"Enabled"})]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-icon disabled",children:"✗"}),l.jsxs("div",{className:"stat-content",children:[l.jsx("div",{className:"stat-value disabled",children:c-h}),l.jsx("div",{className:"stat-label",children:"Disabled"})]})]})]}),l.jsxs("div",{className:"filter-bar",children:[l.jsx("input",{type:"text",placeholder:"Search rules...",value:_,onChange:K=>k(K.target.value),className:"search-input"}),l.jsxs("select",{value:g,onChange:K=>v(K.target.value),className:"filter-select",children:[l.jsx("option",{value:"all",children:"All Severities"}),l.jsx("option",{value:"critical",children:"Critical"}),l.jsx("option",{value:"high",children:"High"}),l.jsx("option",{value:"medium",children:"Medium"}),l.jsx("option",{value:"low",children:"Low"})]}),l.jsxs("select",{value:y,onChange:K=>b(K.target.value),className:"filter-select",children:[l.jsx("option",{value:"all",children:"All Status"}),l.jsx("option",{value:"enabled",children:"Enabled"}),l.jsx("option",{value:"disabled",children:"Disabled"})]})]}),l.jsx("div",{className:"rules-grid",children:Pe.map(K=>{var le;return l.jsxs("div",{className:`rule-card ${K.enabled?"":"disabled"}`,children:[l.jsxs("div",{className:"rule-header",children:[l.jsxs("div",{className:"rule-title",children:[l.jsx("span",{className:`severity-dot ${ve(K.severity)}`}),l.jsx("span",{className:"rule-name",children:K.name})]}),l.jsxs("label",{className:"switch",children:[l.jsx("input",{type:"checkbox",checked:K.enabled,onChange:()=>W(K.name,K.enabled)}),l.jsx("span",{className:"slider"})]})]}),l.jsxs("div",{className:"rule-meta",children:[l.jsxs("span",{className:`severity-badge ${ve(K.severity)}`,children:[ye(K.severity)," ",K.severity]}),l.jsxs("span",{className:"score-badge",children:["Score: ",K.score]})]}),l.jsx("p",{className:"rule-description",children:K.description}),l.jsxs("div",{className:"rule-footer",children:[l.jsxs("div",{className:"mitre-tags",children:[(le=K.mitre_attack)==null?void 0:le.slice(0,3).map(we=>l.jsx("span",{className:"mitre-tag",children:we},we)),K.mitre_attack&&K.mitre_attack.length>3&&l.jsxs("span",{className:"mitre-tag",children:["+",K.mitre_attack.length-3]})]}),l.jsxs("div",{className:"rule-actions",children:[l.jsx("button",{className:"rule-action",onClick:()=>pe(K),children:"Details"}),l.jsx("button",{className:"rule-action",onClick:()=>ne(K),children:"Edit"})]})]})]},K.id)})}),Pe.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"🛡️"}),l.jsx("div",{children:"No rules match your filters"})]}),j&&l.jsx("div",{className:"modal-overlay",onClick:()=>S(null),children:l.jsxs("div",{className:"modal-content rule-modal",onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:"Rule Details"}),l.jsx("button",{className:"close-btn",onClick:()=>S(null),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{className:"detail-label",children:"Name:"}),l.jsx("span",{className:"detail-value",children:j.name})]}),l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{className:"detail-label",children:"ID:"}),l.jsx("span",{className:"detail-value mono",children:j.id})]}),l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{className:"detail-label",children:"Severity:"}),l.jsxs("span",{className:`severity-badge ${ve(j.severity)}`,children:[ye(j.severity)," ",j.severity]})]}),l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{className:"detail-label",children:"Score:"}),l.jsx("span",{className:"detail-value",children:j.score})]}),l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{className:"detail-label",children:"Status:"}),l.jsx("span",{className:`status-badge ${j.enabled?"enabled":"disabled"}`,children:j.enabled?"Enabled":"Disabled"})]})]}),l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{className:"detail-description",children:j.description})]}),j.mitre_attack&&j.mitre_attack.length>0&&l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:"MITRE ATT&CK"}),l.jsx("div",{className:"mitre-tags",children:j.mitre_attack.map(K=>l.jsx("span",{className:"mitre-tag",children:K},K))})]}),j.tags&&j.tags.length>0&&l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:"Tags"}),l.jsx("div",{className:"tags-list",children:j.tags.map(K=>l.jsx("span",{className:"tag-item",children:K},K))})]})]})]})}),N&&l.jsx("div",{className:"modal-overlay",onClick:()=>T(!1),children:l.jsxs("div",{className:"modal-content",onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:"Validate Rule"}),l.jsx("button",{className:"close-btn",onClick:()=>T(!1),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsx("p",{className:"modal-desc",children:"Enter rule YAML or JSON content to validate:"}),l.jsx("textarea",{className:"validate-input",placeholder:`- name: Example Rule
  description: This is an example rule
  severity: high
  enabled: true
  score: 80`,rows:10}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{className:"btn-secondary",onClick:()=>T(!1),children:"Cancel"}),l.jsx("button",{className:"btn-primary",onClick:()=>{const K=document.querySelector(".validate-input");if(K!=null&&K.value){const le=K.value;try{if(le.trim().startsWith("-"))ee({name:"temp",description:le,severity:"medium",enabled:!0,score:50});else{const we=JSON.parse(le);ee(we)}}catch{ee({name:"temp",description:le,severity:"medium",enabled:!0,score:50})}}},disabled:$,children:$?"Validating...":"Validate"})]}),O&&l.jsxs("div",{className:`validation-result ${O.valid?"valid":"invalid"}`,children:[l.jsx("div",{className:"result-header",children:O.valid?"✓ Valid Rule":"✗ Invalid Rule"}),O.errors.length>0&&l.jsxs("div",{className:"result-errors",children:[l.jsx("strong",{children:"Errors:"}),l.jsx("ul",{children:O.errors.map((K,le)=>l.jsx("li",{children:K},le))})]}),O.warnings.length>0&&l.jsxs("div",{className:"result-warnings",children:[l.jsx("strong",{children:"Warnings:"}),l.jsx("ul",{children:O.warnings.map((K,le)=>l.jsx("li",{children:K},le))})]})]})]})]})}),A&&l.jsx("div",{className:"modal-overlay",onClick:()=>E(!1),children:l.jsxs("div",{className:"modal-content",onClick:K=>K.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:"Import Rules"}),l.jsx("button",{className:"close-btn",onClick:()=>E(!1),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsx("p",{className:"modal-desc",children:"Select a YAML or JSON file containing rules:"}),l.jsx("input",{type:"file",ref:L,accept:".yaml,.yml,.json",onChange:me,style:{display:"none"}}),l.jsx("button",{className:"btn-primary btn-upload",onClick:()=>{var K;return(K=L.current)==null?void 0:K.click()},disabled:Q,children:Q?"Importing...":"Choose File"}),B&&l.jsxs("div",{className:`import-result ${B.imported>0?"success":"error"}`,children:[l.jsx("div",{className:"result-header",children:B.imported>0?`✓ Imported ${B.imported} rules`:"✗ Import failed"}),B.failed>0&&l.jsxs("div",{className:"result-info",children:["Failed: ",B.failed]}),B.errors.length>0&&l.jsx("div",{className:"result-errors",children:l.jsx("ul",{children:B.errors.map((K,le)=>l.jsx("li",{children:K},le))})})]}),l.jsx("div",{className:"modal-actions",children:l.jsx("button",{className:"btn-secondary",onClick:()=>E(!1),children:"Close"})})]})]})}),l.jsx("style",{children:`
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
      `})]})}function yS(){const[t,e]=R.useState("general"),[n,i]=R.useState(!1),[o,a]=R.useState(!1),[c,u]=R.useState(null),[h,p]=R.useState({databasePath:"./winalog.db",logLevel:"info",maxEvents:1e6,retentionDays:90,enableAlerting:!0,enableLiveCollection:!1,enableAutoUpdate:!1,apiPort:8080,apiHost:"0.0.0.0",corsEnabled:!0,maxImportFileSize:1024,exportDirectory:"./exports",parserWorkers:4,memoryLimit:2048});R.useEffect(()=>{Vc.get().then(b=>{const _=b.data;p({databasePath:_.database_path||"./winalog.db",logLevel:_.log_level||"info",maxEvents:_.max_events||1e6,retentionDays:_.retention_days||90,enableAlerting:_.enable_alerting??!0,enableLiveCollection:_.enable_live_collection??!1,enableAutoUpdate:_.enable_auto_update??!1,apiPort:_.api_port||8080,apiHost:_.api_host||"0.0.0.0",corsEnabled:_.cors_enabled??!0,maxImportFileSize:_.max_import_file_size||1024,exportDirectory:_.export_directory||"./exports",parserWorkers:_.parser_workers||4,memoryLimit:_.memory_limit||2048})}).catch(console.error)},[]);const g=async()=>{var b,_;a(!0),u(null);try{await Vc.save({database_path:h.databasePath,log_level:h.logLevel,max_events:h.maxEvents,retention_days:h.retentionDays,enable_alerting:h.enableAlerting,enable_live_collection:h.enableLiveCollection,enable_auto_update:h.enableAutoUpdate,api_port:h.apiPort,api_host:h.apiHost,cors_enabled:h.corsEnabled,max_import_file_size:h.maxImportFileSize,export_directory:h.exportDirectory,parser_workers:h.parserWorkers,memory_limit:h.memoryLimit}),i(!0),setTimeout(()=>i(!1),3e3)}catch(k){u(((_=(b=k.response)==null?void 0:b.data)==null?void 0:_.error)||"Failed to save settings")}finally{a(!1)}},v=async()=>{var b,_;a(!0),u(null);try{await Vc.reset(),window.location.reload()}catch(k){u(((_=(b=k.response)==null?void 0:b.data)==null?void 0:_.error)||"Failed to reset settings"),a(!1)}},y=(b,_)=>{p({...h,[b]:_})};return l.jsxs("div",{className:"settings-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:"Settings"}),n&&l.jsx("span",{className:"save-indicator",children:"✓ Saved"})]}),l.jsxs("div",{className:"settings-layout",children:[l.jsxs("div",{className:"settings-nav",children:[l.jsxs("button",{className:`nav-item ${t==="general"?"active":""}`,onClick:()=>e("general"),children:[l.jsx("span",{className:"nav-icon",children:"⚙️"}),"General"]}),l.jsxs("button",{className:`nav-item ${t==="database"?"active":""}`,onClick:()=>e("database"),children:[l.jsx("span",{className:"nav-icon",children:"💾"}),"Database"]}),l.jsxs("button",{className:`nav-item ${t==="api"?"active":""}`,onClick:()=>e("api"),children:[l.jsx("span",{className:"nav-icon",children:"🔌"}),"API Server"]}),l.jsxs("button",{className:`nav-item ${t==="collection"?"active":""}`,onClick:()=>e("collection"),children:[l.jsx("span",{className:"nav-icon",children:"📡"}),"Collection"]}),l.jsxs("button",{className:`nav-item ${t==="advanced"?"active":""}`,onClick:()=>e("advanced"),children:[l.jsx("span",{className:"nav-icon",children:"🔧"}),"Advanced"]})]}),l.jsxs("div",{className:"settings-content",children:[t==="general"&&l.jsxs("div",{className:"settings-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"General Settings"}),l.jsx("p",{children:"Configure basic application settings"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Log Level"}),l.jsx("p",{children:"Minimum severity level for logging"})]}),l.jsxs("select",{value:h.logLevel,onChange:b=>y("logLevel",b.target.value),children:[l.jsx("option",{value:"debug",children:"Debug"}),l.jsx("option",{value:"info",children:"Info"}),l.jsx("option",{value:"warn",children:"Warning"}),l.jsx("option",{value:"error",children:"Error"})]})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Export Directory"}),l.jsx("p",{children:"Default directory for exported files"})]}),l.jsx("input",{type:"text",value:h.exportDirectory,onChange:b=>y("exportDirectory",b.target.value),className:"text-input"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Auto Update Rules"}),l.jsx("p",{children:"Automatically update detection rules"})]}),l.jsxs("label",{className:"toggle",children:[l.jsx("input",{type:"checkbox",checked:h.enableAutoUpdate,onChange:b=>y("enableAutoUpdate",b.target.checked)}),l.jsx("span",{className:"toggle-slider"})]})]})]}),t==="database"&&l.jsxs("div",{className:"settings-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"Database Settings"}),l.jsx("p",{children:"Configure database storage and retention"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Database Path"}),l.jsx("p",{children:"Path to SQLite database file"})]}),l.jsx("input",{type:"text",value:h.databasePath,onChange:b=>y("databasePath",b.target.value),className:"text-input"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Event Retention (days)"}),l.jsx("p",{children:"Automatically delete events older than this"})]}),l.jsx("input",{type:"number",value:h.retentionDays,onChange:b=>y("retentionDays",Number(b.target.value)),className:"number-input",min:"1",max:"365"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Maximum Events"}),l.jsx("p",{children:"Maximum number of events to store"})]}),l.jsx("input",{type:"number",value:h.maxEvents,onChange:b=>y("maxEvents",Number(b.target.value)),className:"number-input",min:"1000",step:"1000"})]})]}),t==="api"&&l.jsxs("div",{className:"settings-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"API Server Settings"}),l.jsx("p",{children:"Configure the HTTP API server"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"API Host"}),l.jsx("p",{children:"Host address to bind the API server"})]}),l.jsx("input",{type:"text",value:h.apiHost,onChange:b=>y("apiHost",b.target.value),className:"text-input"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"API Port"}),l.jsx("p",{children:"Port number for the API server"})]}),l.jsx("input",{type:"number",value:h.apiPort,onChange:b=>y("apiPort",Number(b.target.value)),className:"number-input",min:"1",max:"65535"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Enable CORS"}),l.jsx("p",{children:"Allow cross-origin requests"})]}),l.jsxs("label",{className:"toggle",children:[l.jsx("input",{type:"checkbox",checked:h.corsEnabled,onChange:b=>y("corsEnabled",b.target.checked)}),l.jsx("span",{className:"toggle-slider"})]})]})]}),t==="collection"&&l.jsxs("div",{className:"settings-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"Collection Settings"}),l.jsx("p",{children:"Configure event collection behavior"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Enable Alerting"}),l.jsx("p",{children:"Generate alerts when rules match"})]}),l.jsxs("label",{className:"toggle",children:[l.jsx("input",{type:"checkbox",checked:h.enableAlerting,onChange:b=>y("enableAlerting",b.target.checked)}),l.jsx("span",{className:"toggle-slider"})]})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Enable Live Collection"}),l.jsx("p",{children:"Continuously monitor Windows Event Logs"})]}),l.jsxs("label",{className:"toggle",children:[l.jsx("input",{type:"checkbox",checked:h.enableLiveCollection,onChange:b=>y("enableLiveCollection",b.target.checked)}),l.jsx("span",{className:"toggle-slider"})]})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Max Import File Size (MB)"}),l.jsx("p",{children:"Maximum size for imported files"})]}),l.jsx("input",{type:"number",value:h.maxImportFileSize,onChange:b=>y("maxImportFileSize",Number(b.target.value)),className:"number-input",min:"1",max:"10240"})]})]}),t==="advanced"&&l.jsxs("div",{className:"settings-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"Advanced Settings"}),l.jsx("p",{children:"Expert configuration options"})]}),l.jsxs("div",{className:"info-card",children:[l.jsx("h4",{children:"⚠️ Warning"}),l.jsx("p",{children:"Advanced settings may affect performance and stability. Only modify if you know what you're doing."})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Parser Workers"}),l.jsx("p",{children:"Number of parallel parsing workers"})]}),l.jsx("input",{type:"number",value:h.parserWorkers,onChange:b=>y("parserWorkers",Number(b.target.value)),className:"number-input",min:"1",max:"32"})]}),l.jsxs("div",{className:"setting-card",children:[l.jsxs("div",{className:"setting-info",children:[l.jsx("label",{children:"Memory Limit (MB)"}),l.jsx("p",{children:"Maximum memory usage for event processing"})]}),l.jsx("input",{type:"number",value:h.memoryLimit,onChange:b=>y("memoryLimit",Number(b.target.value)),className:"number-input",min:"256",max:"16384"})]})]}),l.jsxs("div",{className:"settings-actions",children:[c&&l.jsx("span",{className:"error-text",children:c}),l.jsx("button",{onClick:g,className:"btn-primary",disabled:o,children:o?"Saving...":"Save Changes"}),l.jsx("button",{onClick:v,className:"btn-secondary",disabled:o,children:"Reset to Defaults"})]})]})]}),l.jsx("style",{children:`
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
      `})]})}function bS(){const{t}=Dt(),[e,n]=R.useState(null),[i,o]=R.useState(!0),[a,c]=R.useState(null),[u,h]=R.useState("5m"),[p,g]=R.useState({events:[],alerts:[],memory:[],timestamps:[]}),v=R.useRef(null),y=()=>{ks.getMetrics().then(S=>{n(S.data),o(!1),g(N=>{const T=new Date().toLocaleTimeString(),A=[...N.events,S.data.total_events].slice(-20),E=[...N.alerts,S.data.total_alerts].slice(-20),O=[...N.memory,S.data.memory_usage_mb].slice(-20),U=[...N.timestamps,T].slice(-20);return{events:A,alerts:E,memory:O,timestamps:U}})}).catch(S=>{c(S.message||t("common.error")),o(!1)})};R.useEffect(()=>{y();const S=setInterval(y,5e3);return()=>clearInterval(S)},[]),R.useEffect(()=>{v.current&&p.events.length>1&&b()},[p]);const b=()=>{const S=v.current;if(!S)return;const N=S.getContext("2d");if(!N)return;const T=S.width,A=S.height,E=40;N.clearRect(0,0,T,A);const O=Math.max(...p.events,1),U=Math.min(...p.events,0),$=O-U||1;N.strokeStyle="#333",N.lineWidth=1;for(let Q=0;Q<=4;Q++){const se=E+(A-2*E)*Q/4;N.beginPath(),N.moveTo(E,se),N.lineTo(T-E,se),N.stroke()}const Y=(T-2*E)/(p.events.length-1);N.strokeStyle="#00d9ff",N.lineWidth=2,N.beginPath(),p.events.forEach((Q,se)=>{const B=E+se*Y,V=E+(A-2*E)*(1-(Q-U)/$);se===0?N.moveTo(B,V):N.lineTo(B,V)}),N.stroke(),N.fillStyle="#00d9ff",p.events.forEach((Q,se)=>{const B=E+se*Y,V=E+(A-2*E)*(1-(Q-U)/$);N.beginPath(),N.arc(B,V,3,0,Math.PI*2),N.fill()})},_=S=>{const N=Math.floor(S/86400),T=Math.floor(S%86400/3600),A=Math.floor(S%3600/60);return N>0?`${N}d ${T}h ${A}m`:T>0?`${T}h ${A}m`:`${A}m`};if(i)return l.jsx("div",{className:"metrics-page",children:l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("div",{children:t("common.loading")})]})});if(a)return l.jsx("div",{className:"metrics-page",children:l.jsxs("div",{className:"error-state",children:["❌ ",a]})});const k=e?(e.memory_usage_mb/(e.memory_limit_mb||512)*100).toFixed(1):"0";return l.jsxs("div",{className:"metrics-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:t("metrics.title")}),l.jsxs("div",{className:"time-range-selector",children:[l.jsx("button",{className:u==="1m"?"active":"",onClick:()=>h("1m"),children:"1m"}),l.jsx("button",{className:u==="5m"?"active":"",onClick:()=>h("5m"),children:"5m"}),l.jsx("button",{className:u==="1h"?"active":"",onClick:()=>h("1h"),children:"1h"})]})]}),l.jsxs("div",{className:"metrics-grid",children:[l.jsxs("div",{className:"metric-card large",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx("span",{className:"metric-icon",children:"📊"}),l.jsx("span",{className:"metric-title",children:t("metrics.totalEvents")})]}),l.jsx("div",{className:"metric-value",children:((e==null?void 0:e.total_events)||0).toLocaleString()}),l.jsxs("div",{className:"metric-trend up",children:["📈 ",((e==null?void 0:e.events_per_minute)||0).toFixed(1),"/min"]})]}),l.jsxs("div",{className:"metric-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx("span",{className:"metric-icon",children:"🚨"}),l.jsx("span",{className:"metric-title",children:t("metrics.totalAlerts")})]}),l.jsx("div",{className:"metric-value alert",children:((e==null?void 0:e.total_alerts)||0).toLocaleString()}),l.jsxs("div",{className:"metric-sub",children:[((e==null?void 0:e.alerts_per_hour)||0).toFixed(1),"/hr"]})]}),l.jsxs("div",{className:"metric-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx("span",{className:"metric-icon",children:"💾"}),l.jsx("span",{className:"metric-title",children:t("metrics.memory")})]}),l.jsx("div",{className:"metric-value memory",children:((e==null?void 0:e.memory_usage_mb)||0).toFixed(1)}),l.jsx("div",{className:"metric-bar",children:l.jsx("div",{className:"metric-bar-fill",style:{width:`${k}%`}})}),l.jsxs("div",{className:"metric-sub",children:[k,"% of limit"]})]}),l.jsxs("div",{className:"metric-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx("span",{className:"metric-icon",children:"⚡"}),l.jsx("span",{className:"metric-title",children:t("systemInfo.uptime")})]}),l.jsx("div",{className:"metric-value uptime",children:_((e==null?void 0:e.uptime_seconds)||0)}),l.jsxs("div",{className:"metric-sub",children:[(e==null?void 0:e.uptime_seconds)||0,"s total"]})]})]}),l.jsx("div",{className:"chart-section",children:l.jsxs("div",{className:"chart-card",children:[l.jsxs("div",{className:"chart-header",children:[l.jsx("h3",{children:"Event Throughput"}),l.jsx("div",{className:"chart-legend",children:l.jsxs("span",{className:"legend-item",children:[l.jsx("span",{className:"dot cyan"}),"Total Events"]})})]}),l.jsx("div",{className:"chart-container",children:l.jsx("canvas",{ref:v,width:800,height:200})})]})}),l.jsxs("div",{className:"prometheus-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:t("metrics.prometheusFormat")}),l.jsx("button",{className:"btn-copy",onClick:()=>navigator.clipboard.writeText(j()),children:"📋 Copy"})]}),l.jsx("pre",{className:"prometheus-code",children:j()})]}),l.jsx("style",{children:`
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
      `})]});function j(){return`# HELP winalog_events_total Total number of events
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
go_info{version="${(e==null?void 0:e.go_version)||"unknown"}"} 1`}}Fr.register(Ea,Pa,br,Pn,vx,bx,gx,px);function jS(){const{t}=Dt(),[e,n]=R.useState([]),[i,o]=R.useState(null),[a,c]=R.useState(!0),[u,h]=R.useState(null),[p,g]=R.useState(null),[v,y]=R.useState({});R.useEffect(()=>{b()},[]);const b=async()=>{try{c(!0);const T=(await S1.detect()).data;n(T.detections||[]),o(_(T.detections||[])),h(null)}catch(N){h(N instanceof Error?N.message:"Unknown error")}finally{c(!1)}},_=N=>{const T={total_detections:N.length,duration_ms:0,error_count:0,by_severity:{critical:0,high:0,medium:0,low:0,info:0},by_category:{},by_technique:{}};return N.forEach(A=>{var O;const E=((O=A.severity)==null?void 0:O.toLowerCase())||"info";E in T.by_severity&&T.by_severity[E]++,T.by_category[A.category]=(T.by_category[A.category]||0)+1,T.by_technique[A.technique]=(T.by_technique[A.technique]||0)+1}),T},k=e.filter(N=>{var T;return!(v.severity&&((T=N.severity)==null?void 0:T.toLowerCase())!==v.severity||v.category&&N.category!==v.category||v.technique&&N.technique!==v.technique)}),j={labels:Object.keys((i==null?void 0:i.by_severity)||{}),datasets:[{label:t("persistence.bySeverity"),data:Object.values((i==null?void 0:i.by_severity)||{}),backgroundColor:["#dc2626","#ea580c","#ca8a04","#65a30d","#3b82f6"]}]},S={labels:Object.keys((i==null?void 0:i.by_category)||{}),datasets:[{label:t("persistence.byCategory"),data:Object.values((i==null?void 0:i.by_category)||{}),backgroundColor:["#3b82f6","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899","#06b6d4","#84cc16"]}]};return a?l.jsx("div",{className:"persistence-page",children:l.jsx("div",{className:"loading",children:t("common.loading")})}):u?l.jsxs("div",{className:"persistence-page",children:[l.jsxs("div",{className:"error",children:[t("common.error"),": ",u]}),l.jsx("button",{onClick:b,className:"btn btn-primary",children:t("common.confirm")})]}):l.jsxs("div",{className:"persistence-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h1",{children:t("persistence.title")}),l.jsx("button",{onClick:b,className:"btn btn-primary",children:t("persistence.rescan")})]}),i&&l.jsxs("div",{className:"stats-grid",children:[l.jsxs("div",{className:"stat-card stat-total",children:[l.jsx("div",{className:"stat-value",children:i.total_detections}),l.jsx("div",{className:"stat-label",children:t("persistence.total")})]}),l.jsxs("div",{className:"stat-card stat-critical",children:[l.jsx("div",{className:"stat-value",children:i.by_severity.critical}),l.jsx("div",{className:"stat-label",children:t("persistence.critical")})]}),l.jsxs("div",{className:"stat-card stat-high",children:[l.jsx("div",{className:"stat-value",children:i.by_severity.high}),l.jsx("div",{className:"stat-label",children:t("persistence.high")})]}),l.jsxs("div",{className:"stat-card stat-medium",children:[l.jsx("div",{className:"stat-value",children:i.by_severity.medium}),l.jsx("div",{className:"stat-label",children:t("persistence.medium")})]}),l.jsxs("div",{className:"stat-card stat-low",children:[l.jsx("div",{className:"stat-value",children:i.by_severity.low}),l.jsx("div",{className:"stat-label",children:t("persistence.low")})]})]}),l.jsxs("div",{className:"charts-grid",children:[l.jsxs("div",{className:"chart-card",children:[l.jsx("h3",{children:t("persistence.bySeverity")}),l.jsx("div",{className:"chart-container",children:l.jsx(_d,{data:j,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]}),l.jsxs("div",{className:"chart-card",children:[l.jsx("h3",{children:t("persistence.byCategory")}),l.jsx("div",{className:"chart-container",children:l.jsx(_d,{data:S,options:{responsive:!0,plugins:{legend:{display:!1}}}})})]})]}),l.jsx("div",{className:"filters",children:l.jsxs("select",{value:v.severity||"",onChange:N=>y({...v,severity:N.target.value||void 0}),children:[l.jsx("option",{value:"",children:t("persistence.allSeverities")}),l.jsx("option",{value:"critical",children:t("persistence.critical")}),l.jsx("option",{value:"high",children:t("persistence.high")}),l.jsx("option",{value:"medium",children:t("persistence.medium")}),l.jsx("option",{value:"low",children:t("persistence.low")})]})}),l.jsx("div",{className:"detections-table-container",children:l.jsxs("table",{className:"detections-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:t("persistence.severity")}),l.jsx("th",{children:t("persistence.technique")}),l.jsx("th",{children:t("persistence.category")}),l.jsx("th",{children:t("persistence.title")}),l.jsx("th",{children:t("persistence.evidence")}),l.jsx("th",{children:t("persistence.falsePositiveRisk")})]})}),l.jsx("tbody",{children:k.map(N=>{var T,A,E,O;return l.jsxs("tr",{onClick:()=>g(N),className:"detection-row",children:[l.jsx("td",{children:l.jsx("span",{className:`severity-badge severity-${(T=N.severity)==null?void 0:T.toLowerCase()}`,children:t(`persistence.${(A=N.severity)==null?void 0:A.toLowerCase()}`)})}),l.jsx("td",{children:l.jsx("span",{className:"technique-tag",children:N.technique})}),l.jsx("td",{children:N.category}),l.jsx("td",{children:N.title}),l.jsx("td",{className:"evidence-cell",children:((E=N.evidence)==null?void 0:E.key)&&l.jsx("div",{className:"evidence-key",children:N.evidence.key})}),l.jsx("td",{children:t(`persistence.${(O=N.false_positive_risk)==null?void 0:O.toLowerCase()}Risk`)||N.false_positive_risk})]},N.id)})})]})}),p&&l.jsx("div",{className:"modal-overlay",onClick:()=>g(null),children:l.jsxs("div",{className:"modal-content",onClick:N=>N.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h2",{children:p.title}),l.jsx("button",{className:"close-btn",onClick:()=>g(null),children:"×"})]}),l.jsxs("div",{className:"modal-body",children:[l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:t("persistence.basicInfo")}),l.jsxs("p",{children:[l.jsxs("strong",{children:[t("persistence.severity"),":"]})," ",p.severity]}),l.jsxs("p",{children:[l.jsxs("strong",{children:[t("persistence.technique"),":"]})," ",p.technique]}),l.jsxs("p",{children:[l.jsxs("strong",{children:[t("persistence.time"),":"]})," ",new Date(p.time).toLocaleString()]})]}),l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:t("persistence.description")}),l.jsx("p",{children:p.description})]}),l.jsxs("div",{className:"detail-section",children:[l.jsx("h4",{children:t("persistence.recommendedAction")}),l.jsx("p",{children:p.recommended_action})]})]})]})})]})}const cn={"brute-force":"🔐",login:"🔑",kerberos:"🎭",powershell:"⚡","lateral-movement":"🚀","data-exfil":"📤",persistence:"🎯","privilege-escalation":"⬆️",malware:"🦠",anomaly:"🔍"},wS=[{id:"authentication",name:"Authentication"},{id:"execution",name:"Execution"},{id:"lateral-movement",name:"Lateral Movement"},{id:"persistence",name:"Persistence"},{id:"collection",name:"Collection"}];function _S(){var k,j;const{t}=Dt(),e=Ar(),[n,i]=R.useState(!1),[o,a]=R.useState(null),[c,u]=R.useState("brute-force"),[h,p]=R.useState(24),[g,v]=R.useState(""),y=[{id:"brute-force",name:t("analyze.bruteForce"),desc:t("analyze.bruteForceDesc"),icon:cn["brute-force"],category:"authentication",recommended:!0},{id:"login",name:t("analyze.login"),desc:t("analyze.loginDesc"),icon:cn.login,category:"authentication",recommended:!1},{id:"kerberos",name:t("analyze.kerberos"),desc:t("analyze.kerberosDesc"),icon:cn.kerberos,category:"authentication",recommended:!1},{id:"powershell",name:t("analyze.powershell"),desc:t("analyze.powershellDesc"),icon:cn.powershell,category:"execution",recommended:!0},{id:"lateral-movement",name:t("analyze.lateralMovement"),desc:t("analyze.lateralMovementDesc"),icon:cn["lateral-movement"],category:"lateral-movement",recommended:!1},{id:"data-exfil",name:t("analyze.dataExfil"),desc:t("analyze.dataExfilDesc"),icon:cn["data-exfil"],category:"collection",recommended:!1},{id:"persistence",name:t("analyze.persistence"),desc:t("analyze.persistenceDesc"),icon:cn.persistence,category:"persistence",recommended:!1},{id:"privilege-escalation",name:t("analyze.privilegeEscalation"),desc:t("analyze.privilegeEscalationDesc"),icon:cn["privilege-escalation"],category:"privilege-escalation",recommended:!1}],b=async()=>{var S,N;i(!0),v("");try{const T=await Sg.run(c,{hours:h});a(T.data)}catch(T){v(((N=(S=T.response)==null?void 0:S.data)==null?void 0:N.error)||"Failed to run analyzer")}finally{i(!1)}},_=y.reduce((S,N)=>(S[N.category]||(S[N.category]=[]),S[N.category].push(N),S),{});return l.jsxs("div",{className:"analyze-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsx("h2",{children:t("analyze.title")}),l.jsx("p",{className:"page-desc",children:t("analyze.pageDesc")})]}),l.jsxs("div",{className:"analyze-grid",children:[l.jsxs("div",{className:"analyzer-section",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("analyze.selectAnalyzer")})}),Object.entries(_).map(([S,N])=>{var T;return l.jsxs("div",{className:"analyzer-category",children:[l.jsx("div",{className:"category-header",children:((T=wS.find(A=>A.id===S))==null?void 0:T.name)||S}),l.jsx("div",{className:"analyzer-list",children:N.map(A=>l.jsxs("div",{className:`analyzer-card ${c===A.id?"selected":""}`,onClick:()=>u(A.id),children:[l.jsx("div",{className:"analyzer-icon",children:A.icon}),l.jsxs("div",{className:"analyzer-content",children:[l.jsxs("div",{className:"analyzer-header",children:[l.jsx("span",{className:"analyzer-name",children:A.name}),A.recommended&&l.jsx("span",{className:"recommended-badge",children:t("analyze.recommended")})]}),l.jsx("p",{className:"analyzer-desc",children:A.desc})]}),l.jsx("div",{className:"select-indicator",children:c===A.id&&"✓"})]},A.id))})]},S)})]}),l.jsxs("div",{className:"config-section",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("analyze.configuration")})}),l.jsxs("div",{className:"config-card",children:[l.jsxs("div",{className:"config-item",children:[l.jsx("label",{children:t("analyze.selectedAnalyzer")}),l.jsxs("div",{className:"selected-analyzer-display",children:[l.jsx("span",{className:"analyzer-icon",children:cn[c]}),l.jsx("span",{children:(k=y.find(S=>S.id===c))==null?void 0:k.name})]})]}),l.jsxs("div",{className:"config-item",children:[l.jsx("label",{children:t("analyze.timeWindow")}),l.jsxs("div",{className:"time-selector",children:[l.jsx("button",{className:h===1?"active":"",onClick:()=>p(1),children:"1h"}),l.jsx("button",{className:h===6?"active":"",onClick:()=>p(6),children:"6h"}),l.jsx("button",{className:h===24?"active":"",onClick:()=>p(24),children:"24h"}),l.jsx("button",{className:h===72?"active":"",onClick:()=>p(72),children:"72h"}),l.jsx("button",{className:h===168?"active":"",onClick:()=>p(168),children:"7d"})]})]}),l.jsx("button",{onClick:b,disabled:n,className:"btn-primary btn-run",children:n?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"btn-spinner"}),t("analyze.running")]}):l.jsxs(l.Fragment,{children:[l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),t("analyze.runAnalyzer")]})})]}),g&&l.jsxs("div",{className:"error-panel",children:[l.jsx("span",{className:"error-icon",children:"⚠️"}),l.jsx("span",{children:g})]}),l.jsxs("div",{className:"quick-actions",children:[l.jsx("h4",{children:t("analyze.quickActions")}),l.jsxs("div",{className:"quick-buttons",children:[l.jsxs("button",{className:"quick-btn",onClick:()=>e("/timeline"),children:["📊 ",t("analyze.viewTimeline")]}),l.jsxs("button",{className:"quick-btn",onClick:()=>e("/alerts"),children:["🔔 ",t("analyze.viewAlerts")]}),l.jsxs("button",{className:"quick-btn",onClick:()=>e("/persistence"),children:["🎯 ",t("analyze.detectPersistence")]})]})]})]})]}),o&&l.jsxs("div",{className:"results-section",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("analyze.results")})}),l.jsxs("div",{className:"results-grid",children:[l.jsxs("div",{className:"result-summary-card",children:[l.jsxs("div",{className:"result-header",children:[l.jsx("span",{className:"result-icon",children:cn[o.type]}),l.jsx("span",{className:"result-type",children:(j=y.find(S=>S.id===o.type))==null?void 0:j.name})]}),l.jsxs("div",{className:"result-stats",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:t("analyze.severity")}),l.jsx("span",{className:`severity-badge severity-${o.severity}`,children:o.severity.toUpperCase()})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:t("analyze.score")}),l.jsx("span",{className:"score-value",children:o.score.toFixed(1)})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:t("analyze.findings")}),l.jsx("span",{className:"findings-count",children:o.findings.length})]})]}),l.jsx("p",{className:"result-summary",children:o.summary})]}),o.findings.length>0&&l.jsxs("div",{className:"findings-card",children:[l.jsx("h4",{children:t("analyze.findingsList")}),l.jsx("div",{className:"findings-list",children:o.findings.map((S,N)=>l.jsxs("div",{className:"finding-item",children:[l.jsxs("div",{className:"finding-header",children:[l.jsx("span",{className:`severity-indicator severity-${S.severity}`}),l.jsx("span",{className:"finding-desc",children:S.description})]}),l.jsxs("div",{className:"finding-meta",children:[S.rule_name&&l.jsx("span",{className:"rule-name",children:S.rule_name}),l.jsxs("span",{className:"finding-score",children:["Score: ",S.score.toFixed(1)]})]})]},N))})]})]})]}),l.jsxs("div",{className:"analyzer-info",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("analyze.aboutAnalyzers")})}),l.jsx("div",{className:"info-grid",children:y.slice(0,4).map(S=>l.jsxs("div",{className:"info-card",children:[l.jsx("div",{className:"info-icon",children:S.icon}),l.jsxs("div",{className:"info-content",children:[l.jsx("h4",{children:S.name}),l.jsx("p",{children:S.desc})]})]},S.id))})]})]})}function kS(){var A,E;const{t}=Dt(),[e,n]=R.useState([]),[i,o]=R.useState(null),[a,c]=R.useState(!1),[u,h]=R.useState(null),[p,g]=R.useState("all"),v=R.useRef(null),y=R.useRef(null);R.useEffect(()=>(b(),()=>{v.current&&v.current.close()}),[]),R.useEffect(()=>{y.current&&(y.current.scrollTop=0)},[e]);const b=()=>{h(null);const O=_1.streamEvents(U=>{n($=>{const Y=[U,...$];return Y.length>100&&Y.pop(),Y})},U=>{o({total_events:U.total_events||0,events_per_sec:U.events_per_sec||0,uptime:U.uptime||"0s",alerts:U.alerts||0})},U=>{console.error("Stream error:",U),c(!1),U.type==="error"&&h("Connection lost. Reconnecting...")});O.onopen=()=>{c(!0),h(null)},v.current=O},_=()=>{v.current&&(v.current.close(),v.current=null),c(!1)},k=()=>{_(),b()},j=()=>{n([])},S=O=>{switch(O==null?void 0:O.toLowerCase()){case"critical":return"#ef4444";case"error":return"#f97316";case"warning":return"#eab308";case"info":return"#3b82f6";case"verbose":return"#6b7280";default:return"#888"}},N=e.filter(O=>{var U;return p==="all"?!0:((U=O.level)==null?void 0:U.toLowerCase())===p}),T=O=>{try{return new Date(O).toLocaleTimeString()}catch{return O}};return l.jsxs("div",{className:"live-page",children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("h2",{children:t("live.title")}),l.jsxs("div",{className:`connection-status ${a?"connected":"disconnected"}`,children:[l.jsx("span",{className:"status-dot"}),a?"Connected":"Disconnected"]})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("select",{className:"filter-select",value:p,onChange:O=>g(O.target.value),children:[l.jsx("option",{value:"all",children:"All Levels"}),l.jsx("option",{value:"critical",children:"Critical"}),l.jsx("option",{value:"error",children:"Error"}),l.jsx("option",{value:"warning",children:"Warning"}),l.jsx("option",{value:"info",children:"Info"}),l.jsx("option",{value:"verbose",children:"Verbose"})]}),l.jsx("button",{className:"btn-secondary",onClick:j,children:"Clear"}),a?l.jsx("button",{className:"btn-danger",onClick:_,children:"Disconnect"}):l.jsx("button",{className:"btn-primary",onClick:k,children:"Connect"})]})]}),u&&l.jsx("div",{className:"error-banner",children:u}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Total Events"}),l.jsx("span",{className:"stat-value",children:((A=i==null?void 0:i.total_events)==null?void 0:A.toLocaleString())||"0"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Events/sec"}),l.jsx("span",{className:"stat-value",children:((E=i==null?void 0:i.events_per_sec)==null?void 0:E.toFixed(2))||"0.00"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Alerts"}),l.jsx("span",{className:"stat-value alerts",children:(i==null?void 0:i.alerts)||0})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Uptime"}),l.jsx("span",{className:"stat-value mono",children:(i==null?void 0:i.uptime)||"0s"})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Buffered"}),l.jsxs("span",{className:"stat-value",children:[e.length,"/100"]})]})]}),l.jsx("div",{className:"events-container",ref:y,children:N.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📡"}),l.jsx("div",{className:"empty-text",children:a?"Waiting for events...":"Click Connect to start monitoring"})]}):l.jsx("div",{className:"events-list",children:N.map((O,U)=>l.jsxs("div",{className:"event-card",style:{borderLeftColor:S(O.level)},children:[l.jsxs("div",{className:"event-header",children:[l.jsx("span",{className:"event-time",children:T(O.timestamp)}),l.jsx("span",{className:"event-level",style:{color:S(O.level)},children:O.level||"UNKNOWN"}),l.jsxs("span",{className:"event-id",children:["Event #",O.event_id]}),l.jsx("span",{className:"event-source",children:O.source||O.log_name})]}),l.jsx("div",{className:"event-body",children:l.jsx("div",{className:"event-message",children:O.message||"(No message)"})}),l.jsxs("div",{className:"event-footer",children:[l.jsx("span",{className:"event-computer",children:O.computer}),O.user&&l.jsx("span",{className:"event-user",children:O.user}),O.ip_address&&l.jsx("span",{className:"event-ip",children:O.ip_address})]})]},`${O.id}-${U}`))})}),l.jsx("style",{children:`
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
      `})]})}function SS(){const{t}=Dt(),[e,n]=R.useState(!1),[i,o]=R.useState(""),[a,c]=R.useState(2),[u,h]=R.useState(""),[p,g]=R.useState(""),[v,y]=R.useState([{id:"security",name:"Security",enabled:!0,category:"Windows Event Logs"},{id:"system",name:"System",enabled:!0,category:"Windows Event Logs"},{id:"application",name:"Application",enabled:!0,category:"Windows Event Logs"},{id:"setup",name:"Setup",enabled:!1,category:"Windows Event Logs"},{id:"sysmon",name:"Microsoft-Windows-Sysmon/Operational",enabled:!0,category:"Windows Event Logs"},{id:"powershell",name:"Microsoft-Windows-PowerShell/Operational",enabled:!1,category:"Windows Event Logs"},{id:"wmi",name:"Microsoft-Windows-WMI-Activity/Operational",enabled:!1,category:"Windows Event Logs"},{id:"taskscheduler",name:"Microsoft-Windows-TaskScheduler/Operational",enabled:!1,category:"Windows Event Logs"},{id:"sysmon-drivers",name:"System",enabled:!1,category:"Drivers & Services"},{id:"services",name:"Services",enabled:!1,category:"Drivers & Services"}]),[b,_]=R.useState([{id:"diagnostics",name:"Diagnostics",enabled:!0,category:"Common Excludes"},{id:"whea",name:"WHEA Errors",enabled:!0,category:"Common Excludes"},{id:"debug",name:"Debug",enabled:!0,category:"Common Excludes"},{id:"uac",name:"UAC Prompts",enabled:!0,category:"Common Excludes"},{id:"driverframe",name:"Driver Frameworks",enabled:!0,category:"Common Excludes"},{id:"hardware",name:"Hardware (Camera/Intel/Synced)",enabled:!0,category:"Common Excludes"},{id:"livedump",name:"LiveDump",enabled:!0,category:"Common Excludes"},{id:"compat",name:"Program Compatibility",enabled:!0,category:"Common Excludes"},{id:"modern-deploy",name:"Modern Deployment",enabled:!0,category:"Common Excludes"}]),[k,j]=R.useState({includeLogs:!0,includePrefetch:!1,includeShimcache:!1,includeAmcache:!1,includeUserassist:!1,includeRegistry:!1,includeTasks:!1,includeSystemInfo:!0,compress:!0,calculateHash:!0}),S=$=>{y(Y=>Y.map(Q=>Q.id===$?{...Q,enabled:!Q.enabled}:Q))},N=$=>{_(Y=>Y.map(Q=>Q.id===$?{...Q,enabled:!Q.enabled}:Q))},T=$=>{j(Y=>({...Y,[$]:!Y[$]}))},A=async()=>{n(!0),o(t("collect.starting"));const $=v.filter(Y=>Y.enabled).map(Y=>Y.name);try{const Y=await j1.collect({sources:$,options:{compress:k.compress,calculate_hash:k.calculateHash}});Y.data.status==="completed"?o(`${t("collect.completed")}
${Y.data.output_path}
Duration: ${Y.data.duration}`):Y.data.status==="error"?o(`${t("collect.failed")}: ${Y.data.message}`):o(`${t("collect.collecting")}...
${t("collect.sources")}: ${$.join(", ")}`)}catch(Y){o(`${t("collect.failed")}: ${Y instanceof Error?Y.message:"Unknown error"}`)}n(!1)},E=async()=>{var $;n(!0),o(t("collect.importing"));try{const Y=u.split(`
`).map(se=>se.trim()).filter(se=>se.length>0);if(Y.length===0){o(t("collect.noFilesSelected")),n(!1);return}const Q=await w1.importLogs(Y);Q.data.success?o(`${t("collect.importDone")}
Imported: ${Q.data.files_imported}
Failed: ${Q.data.files_failed}
Events: ${Q.data.events_imported}`):o(`${t("collect.failed")}: ${(($=Q.data.errors)==null?void 0:$.join(", "))||"Unknown error"}`)}catch(Y){o(`${t("collect.failed")}: ${Y instanceof Error?Y.message:"Unknown error"}`)}n(!1)},O=v.reduce(($,Y)=>($[Y.category]||($[Y.category]=[]),$[Y.category].push(Y),$),{}),U=b.reduce(($,Y)=>($[Y.category]||($[Y.category]=[]),$[Y.category].push(Y),$),{});return l.jsxs("div",{className:"collect-page",children:[l.jsx("div",{className:"page-header",children:l.jsx("h2",{children:t("collect.title")})}),l.jsxs("div",{className:"collect-grid",children:[l.jsxs("div",{className:"collect-section main-options",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:t("collect.oneClickCollection")}),l.jsx("p",{children:t("collect.oneClickDesc")})]}),l.jsxs("div",{className:"options-group",children:[l.jsxs("label",{className:"toggle-label",children:[l.jsx("input",{type:"checkbox",checked:k.includeSystemInfo,onChange:()=>T("includeSystemInfo")}),l.jsx("span",{className:"toggle-text",children:t("collect.systemInfo")})]}),l.jsxs("label",{className:"toggle-label",children:[l.jsx("input",{type:"checkbox",checked:k.includeLogs,onChange:()=>T("includeLogs")}),l.jsx("span",{className:"toggle-text",children:t("collect.windowsEventLogs")})]})]}),l.jsxs("div",{className:"performance-section",children:[l.jsx("h4",{children:t("collect.performanceSettings")}),l.jsxs("div",{className:"performance-grid",children:[l.jsxs("div",{className:"performance-item",children:[l.jsx("label",{children:t("collect.threads")}),l.jsx("div",{className:"thread-selector",children:[1,2,4,8].map($=>l.jsx("button",{className:a===$?"active":"",onClick:()=>c($),children:$},$))})]}),l.jsxs("div",{className:"performance-hint",children:[l.jsx("span",{className:"hint-icon",children:"💡"}),l.jsx("span",{children:t("collect.threadHint")})]})]})]}),l.jsxs("div",{className:"compression-options",children:[l.jsxs("label",{className:"toggle-label",children:[l.jsx("input",{type:"checkbox",checked:k.compress,onChange:()=>T("compress")}),l.jsx("span",{className:"toggle-text",children:t("collect.compressOutput")})]}),l.jsxs("label",{className:"toggle-label",children:[l.jsx("input",{type:"checkbox",checked:k.calculateHash,onChange:()=>T("calculateHash")}),l.jsx("span",{className:"toggle-text",children:t("collect.calculateHash")})]})]}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{onClick:A,disabled:e,className:"btn-primary btn-collect",children:e?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"btn-spinner"}),t("collect.collecting")]}):l.jsxs(l.Fragment,{children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),t("collect.startCollection")]})}),l.jsx("button",{onClick:E,disabled:e,className:"btn-secondary",children:t("collect.importLogsBtn")})]})]}),l.jsxs("div",{className:"collect-section",children:[l.jsxs("div",{className:"section-header collapsible",onClick:()=>{},children:[l.jsx("h3",{children:t("collect.logSources")}),l.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(O).map(([$,Y])=>l.jsxs("div",{className:"log-group",children:[l.jsx("div",{className:"group-header",children:$}),Y.map(Q=>l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox",checked:Q.enabled,onChange:()=>S(Q.id)}),l.jsx("span",{className:"checkbox-text",children:Q.name})]},Q.id))]},$))]}),l.jsxs("div",{className:"collect-section",children:[l.jsxs("div",{className:"section-header collapsible",children:[l.jsx("h3",{children:t("collect.excludedLogs")}),l.jsx("span",{className:"collapse-icon",children:"▼"})]}),Object.entries(U).map(([$,Y])=>l.jsxs("div",{className:"log-group",children:[l.jsx("div",{className:"group-header",children:t("collect.commonExcludes")}),Y.map(Q=>l.jsxs("label",{className:"checkbox-label exclude",children:[l.jsx("input",{type:"checkbox",checked:Q.enabled,onChange:()=>N(Q.id)}),l.jsx("span",{className:"checkbox-text",children:Q.name})]},Q.id))]},$)),l.jsxs("div",{className:"custom-exclude",children:[l.jsx("label",{children:t("collect.customExclude")}),l.jsx("input",{type:"text",value:p,onChange:$=>g($.target.value),placeholder:t("collect.customExcludePlaceholder")})]})]}),l.jsxs("div",{className:"collect-section",children:[l.jsxs("div",{className:"section-header collapsible",children:[l.jsx("h3",{children:t("collect.customPaths")}),l.jsx("span",{className:"collapse-icon",children:"▼"})]}),l.jsxs("div",{className:"custom-path-section",children:[l.jsx("label",{children:t("collect.customPathsLabel")}),l.jsx("textarea",{value:u,onChange:$=>h($.target.value),placeholder:t("collect.customPathsPlaceholder"),rows:4})]})]})]}),l.jsxs("div",{className:"additional-options",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("collect.additionalArtifacts")})}),l.jsxs("div",{className:"artifacts-grid",children:[l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includePrefetch,onChange:()=>T("includePrefetch")}),l.jsx("div",{className:"artifact-icon",children:"📁"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.prefetch")}),l.jsx("span",{className:"artifact-desc",children:t("collect.prefetchDesc")})]})]}),l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includeShimcache,onChange:()=>T("includeShimcache")}),l.jsx("div",{className:"artifact-icon",children:"🔧"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.shimcache")}),l.jsx("span",{className:"artifact-desc",children:t("collect.shimcacheDesc")})]})]}),l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includeAmcache,onChange:()=>T("includeAmcache")}),l.jsx("div",{className:"artifact-icon",children:"📝"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.amcache")}),l.jsx("span",{className:"artifact-desc",children:t("collect.amcacheDesc")})]})]}),l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includeUserassist,onChange:()=>T("includeUserassist")}),l.jsx("div",{className:"artifact-icon",children:"🎯"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.userassist")}),l.jsx("span",{className:"artifact-desc",children:t("collect.userassistDesc")})]})]}),l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includeRegistry,onChange:()=>T("includeRegistry")}),l.jsx("div",{className:"artifact-icon",children:"🗄️"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.registry")}),l.jsx("span",{className:"artifact-desc",children:t("collect.registryDesc")})]})]}),l.jsxs("label",{className:"artifact-card",children:[l.jsx("input",{type:"checkbox",checked:k.includeTasks,onChange:()=>T("includeTasks")}),l.jsx("div",{className:"artifact-icon",children:"📅"}),l.jsxs("div",{className:"artifact-info",children:[l.jsx("span",{className:"artifact-name",children:t("collect.scheduledTasks")}),l.jsx("span",{className:"artifact-desc",children:t("collect.tasksDesc")})]})]})]})]}),i&&l.jsxs("div",{className:"status-panel",children:[l.jsxs("div",{className:"status-header",children:[l.jsx("span",{className:"status-icon",children:"📊"}),l.jsx("span",{children:t("collect.status")}),l.jsx("button",{className:"status-close",onClick:()=>o(""),children:"×"})]}),l.jsx("pre",{className:"status-content",children:i})]}),l.jsxs("div",{className:"cli-reference",children:[l.jsx("div",{className:"section-header",children:l.jsx("h3",{children:t("collect.cliReference")})}),l.jsx("pre",{className:"cli-code",children:`# ${t("collect.oneClickCollection")}
winalog collect --output ./evidence.zip --compress --threads ${a}

# ${t("collect.importLogs")}
winalog import /path/to/logs --format evtx

# ${t("collect.liveCollection")}
winalog live collect --duration 1h`})]})]})}function NS(){const{t}=Dt();return l.jsxs("nav",{className:"sidebar",children:[l.jsx("h1",{children:t("app.title")}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(ct,{to:"/",children:t("nav.dashboard")})}),l.jsx("li",{children:l.jsx(ct,{to:"/events",children:t("nav.events")})}),l.jsx("li",{children:l.jsx(ct,{to:"/alerts",children:t("nav.alerts")})}),l.jsx("li",{children:l.jsx(ct,{to:"/timeline",children:t("nav.timeline")})}),l.jsx("li",{children:l.jsx(ct,{to:"/collect",children:t("nav.collect")})}),l.jsx("li",{children:l.jsx(ct,{to:"/analyze",children:t("nav.analyze")})}),l.jsx("li",{children:l.jsx(ct,{to:"/live",children:t("nav.live")})}),l.jsx("li",{children:l.jsx(ct,{to:"/persistence",children:t("nav.persistence")})}),l.jsx("li",{children:l.jsx(ct,{to:"/reports",children:t("nav.reports")})}),l.jsx("li",{children:l.jsx(ct,{to:"/forensics",children:t("nav.forensics")})}),l.jsx("li",{children:l.jsx(ct,{to:"/system-info",children:t("nav.systemInfo")})}),l.jsx("li",{children:l.jsx(ct,{to:"/rules",children:t("nav.rules")})}),l.jsx("li",{children:l.jsx(ct,{to:"/metrics",children:t("nav.metrics")})}),l.jsx("li",{children:l.jsx(ct,{to:"/settings",children:t("nav.settings")})})]})]})}function CS(){return l.jsxs(l.Fragment,{children:[l.jsx(B0,{}),l.jsx(NS,{}),l.jsx("main",{className:"content",children:l.jsxs(k0,{children:[l.jsx(st,{path:"/",element:l.jsx(cS,{})}),l.jsx(st,{path:"/events",element:l.jsx(dS,{})}),l.jsx(st,{path:"/events/:id",element:l.jsx(uS,{})}),l.jsx(st,{path:"/alerts",element:l.jsx(hS,{})}),l.jsx(st,{path:"/alerts/:id",element:l.jsx(fS,{})}),l.jsx(st,{path:"/timeline",element:l.jsx(pS,{})}),l.jsx(st,{path:"/collect",element:l.jsx(SS,{})}),l.jsx(st,{path:"/analyze",element:l.jsx(_S,{})}),l.jsx(st,{path:"/live",element:l.jsx(kS,{})}),l.jsx(st,{path:"/persistence",element:l.jsx(jS,{})}),l.jsx(st,{path:"/reports",element:l.jsx(mS,{})}),l.jsx(st,{path:"/forensics",element:l.jsx(gS,{})}),l.jsx(st,{path:"/system-info",element:l.jsx(xS,{})}),l.jsx(st,{path:"/rules",element:l.jsx(vS,{})}),l.jsx(st,{path:"/settings",element:l.jsx(yS,{})}),l.jsx(st,{path:"/metrics",element:l.jsx(bS,{})})]})})]})}function ES(){return l.jsx(F0,{children:l.jsx("div",{className:"app",children:l.jsx(CS,{})})})}Ay.createRoot(document.getElementById("root")).render(l.jsx(Hm.StrictMode,{children:l.jsx(T0,{children:l.jsx(ES,{})})}));
