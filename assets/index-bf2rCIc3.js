var ix=Object.defineProperty;var rx=(t,e,n)=>e in t?ix(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ue=(t,e,n)=>rx(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function sx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gg={exports:{}},Oc={},Wg={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ca=Symbol.for("react.element"),ox=Symbol.for("react.portal"),ax=Symbol.for("react.fragment"),lx=Symbol.for("react.strict_mode"),cx=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),hx=Symbol.for("react.context"),fx=Symbol.for("react.forward_ref"),dx=Symbol.for("react.suspense"),px=Symbol.for("react.memo"),mx=Symbol.for("react.lazy"),fp=Symbol.iterator;function gx(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var Xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,jg={};function co(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Xg}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $g(){}$g.prototype=co.prototype;function ed(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Xg}var td=ed.prototype=new $g;td.constructor=ed;Yg(td,co.prototype);td.isPureReactComponent=!0;var dp=Array.isArray,qg=Object.prototype.hasOwnProperty,nd={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qg.call(e,i)&&!Kg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ca,type:t,key:s,ref:o,props:r,_owner:nd.current}}function vx(t,e){return{$$typeof:Ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ca}function _x(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pp=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_x(""+t.key):e.toString(36)}function Fl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ca:case ox:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ru(o,0):i,dp(r)?(n="",t!=null&&(n=t.replace(pp,"$&/")+"/"),Fl(r,e,n,"",function(c){return c})):r!=null&&(id(r)&&(r=vx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ru(s,a);o+=Fl(s,e,n,l,r)}else if(l=gx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ru(s,a++),o+=Fl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Fl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Ol={transition:null},yx={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:nd};function Qg(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=co;nt.Fragment=ax;nt.Profiler=cx;nt.PureComponent=ed;nt.StrictMode=lx;nt.Suspense=dx;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx;nt.act=Qg;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=nd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qg.call(e,l)&&!Kg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ca,type:t.type,key:r,ref:s,props:i,_owner:o}};nt.createContext=function(t){return t={$$typeof:hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ux,_context:t},t.Consumer=t};nt.createElement=Zg;nt.createFactory=function(t){var e=Zg.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:fx,render:t}};nt.isValidElement=id;nt.lazy=function(t){return{$$typeof:mx,_payload:{_status:-1,_result:t},_init:xx}};nt.memo=function(t,e){return{$$typeof:px,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};nt.unstable_act=Qg;nt.useCallback=function(t,e){return pn.current.useCallback(t,e)};nt.useContext=function(t){return pn.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};nt.useEffect=function(t,e){return pn.current.useEffect(t,e)};nt.useId=function(){return pn.current.useId()};nt.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return pn.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};nt.useRef=function(t){return pn.current.useRef(t)};nt.useState=function(t){return pn.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return pn.current.useTransition()};nt.version="18.3.1";Wg.exports=nt;var ft=Wg.exports;const Sx=sx(ft);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=ft,Ex=Symbol.for("react.element"),Tx=Symbol.for("react.fragment"),wx=Object.prototype.hasOwnProperty,Ax=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cx={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wx.call(e,i)&&!Cx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ex,type:t,key:s,ref:o,props:r,_owner:Ax.current}}Oc.Fragment=Tx;Oc.jsx=Jg;Oc.jsxs=Jg;Gg.exports=Oc;var Oe=Gg.exports,_h={},ev={exports:{}},In={},tv={exports:{}},nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,te){var Q=N.length;N.push(te);e:for(;0<Q;){var le=Q-1>>>1,xe=N[le];if(0<r(xe,te))N[le]=te,N[Q]=xe,Q=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var te=N[0],Q=N.pop();if(Q!==te){N[0]=Q;e:for(var le=0,xe=N.length,Le=xe>>>1;le<Le;){var Z=2*(le+1)-1,oe=N[Z],ce=Z+1,ve=N[ce];if(0>r(oe,Q))ce<xe&&0>r(ve,oe)?(N[le]=ve,N[ce]=Q,le=ce):(N[le]=oe,N[Z]=Q,le=Z);else if(ce<xe&&0>r(ve,Q))N[le]=ve,N[ce]=Q,le=ce;else break e}}return te}function r(N,te){var Q=N.sortIndex-te.sortIndex;return Q!==0?Q:N.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,p=3,m=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var te=n(c);te!==null;){if(te.callback===null)i(c);else if(te.startTime<=N)i(c),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(c)}}function A(N){if(M=!1,x(N),!_)if(n(l)!==null)_=!0,W(U);else{var te=n(c);te!==null&&J(A,te.startTime-N)}}function U(N,te){_=!1,M&&(M=!1,d(I),I=-1),m=!0;var Q=p;try{for(x(te),f=n(l);f!==null&&(!(f.expirationTime>te)||N&&!C());){var le=f.callback;if(typeof le=="function"){f.callback=null,p=f.priorityLevel;var xe=le(f.expirationTime<=te);te=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),x(te)}else i(l);f=n(l)}if(f!==null)var Le=!0;else{var Z=n(c);Z!==null&&J(A,Z.startTime-te),Le=!1}return Le}finally{f=null,p=Q,m=!1}}var b=!1,P=null,I=-1,ee=5,S=-1;function C(){return!(t.unstable_now()-S<ee)}function $(){if(P!==null){var N=t.unstable_now();S=N;var te=!0;try{te=P(!0,N)}finally{te?q():(b=!1,P=null)}}else b=!1}var q;if(typeof y=="function")q=function(){y($)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,z=ne.port2;ne.port1.onmessage=$,q=function(){z.postMessage(null)}}else q=function(){g($,0)};function W(N){P=N,b||(b=!0,q())}function J(N,te){I=g(function(){N(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(U))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var Q=p;p=te;try{return N()}finally{p=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,te){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Q=p;p=N;try{return te()}finally{p=Q}},t.unstable_scheduleCallback=function(N,te,Q){var le=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?le+Q:le):Q=le,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Q+xe,N={id:u++,callback:te,priorityLevel:N,startTime:Q,expirationTime:xe,sortIndex:-1},Q>le?(N.sortIndex=Q,e(c,N),n(l)===null&&N===n(c)&&(M?(d(I),I=-1):M=!0,J(A,Q-le))):(N.sortIndex=xe,e(l,N),_||m||(_=!0,W(U))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var te=p;return function(){var Q=p;p=te;try{return N.apply(this,arguments)}finally{p=Q}}}})(nv);tv.exports=nv;var Rx=tv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=ft,Dn=Rx;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iv=new Set,oa={};function Jr(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(oa[t]=e,t=0;t<e.length;t++)iv.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mp={},gp={};function Lx(t){return xh.call(gp,t)?!0:xh.call(mp,t)?!1:bx.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function Dx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ix(t,e,n,i){if(e===null||typeof e>"u"||Dx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var rd=/[\-:]([a-z])/g;function sd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rd,sd);$t[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rd,sd);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rd,sd);$t[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function od(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ix(e,n,r,i)&&(n=null),i||r===null?Lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ga=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),rv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),ld=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),cd=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),ov=Symbol.for("react.offscreen"),vp=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,su;function Ho(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ho(t):""}function Ux(t){switch(t.tag){case 5:return Ho(t.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case yh:return"Profiler";case ad:return"StrictMode";case Sh:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sv:return(t.displayName||"Context")+".Consumer";case rv:return(t._context.displayName||"Context")+".Provider";case ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function Nx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fx(t){var e=av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=Fx(t))}function lv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=av(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cv(t,e){e=e.checked,e!=null&&od(t,"checked",e,!1)}function wh(t,e){cv(t,e);var n=Er(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(Vo(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function uv(t,e){var n=Er(e.value),i=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,fv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(jo).forEach(function(t){Ox.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jo[e]=jo[t]})});function dv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jo.hasOwnProperty(t)&&jo[t]?(""+e).trim():e+"px"}function pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,ks=null,Bs=null;function Mp(t){if(t=ba(t)){if(typeof Dh!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=Vc(e),Dh(t.stateNode,t.type,e))}}function mv(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function gv(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function vv(t,e){return t(e)}function _v(){}var lu=!1;function xv(t,e,n){if(lu)return t(e,n);lu=!0;try{return vv(t,e,n)}finally{lu=!1,(ks!==null||Bs!==null)&&(_v(),gv())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=Vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Ih=!1;if(Gi)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Ih=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Ih=!1}function Bx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var $o=!1,rc=null,sc=!1,Uh=null,zx={onError:function(t){$o=!0,rc=t}};function Hx(t,e,n,i,r,s,o,a,l){$o=!1,rc=null,Bx.apply(zx,arguments)}function Vx(t,e,n,i,r,s,o,a,l){if(Hx.apply(this,arguments),$o){if($o){var c=rc;$o=!1,rc=null}else throw Error(pe(198));sc||(sc=!0,Uh=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(es(t)!==t)throw Error(pe(188))}function Gx(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ep(r),t;if(s===i)return Ep(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Sv(t){return t=Gx(t),t!==null?Mv(t):null}function Mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mv(t);if(e!==null)return e;t=t.sibling}return null}var Ev=Dn.unstable_scheduleCallback,Tp=Dn.unstable_cancelCallback,Wx=Dn.unstable_shouldYield,Xx=Dn.unstable_requestPaint,Lt=Dn.unstable_now,Yx=Dn.unstable_getCurrentPriorityLevel,hd=Dn.unstable_ImmediatePriority,Tv=Dn.unstable_UserBlockingPriority,oc=Dn.unstable_NormalPriority,jx=Dn.unstable_LowPriority,wv=Dn.unstable_IdlePriority,kc=null,gi=null;function $x(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(kc,t,void 0,(t.current.flags&128)===128)}catch{}}var ri=Math.clz32?Math.clz32:Zx,qx=Math.log,Kx=Math.LN2;function Zx(t){return t>>>=0,t===0?32:31-(qx(t)/Kx|0)|0}var Ya=64,ja=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ri(e),r=1<<n,i|=t[n],e&=~r;return i}function Qx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ri(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Qx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Av(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ri(e),t[e]=n}function ey(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function fd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function Cv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rv,dd,Pv,bv,Lv,Fh=!1,$a=[],pr=null,mr=null,gr=null,ca=new Map,ua=new Map,lr=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function To(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ba(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ny(t,e,n,i,r){switch(e){case"focusin":return pr=To(pr,t,e,n,i,r),!0;case"dragenter":return mr=To(mr,t,e,n,i,r),!0;case"mouseover":return gr=To(gr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,To(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,To(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Dv(t){var e=Hr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,Lv(t.priority,function(){Pv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lh=i,n.target.dispatchEvent(i),Lh=null}else return e=ba(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){kl(t)&&n.delete(e)}function iy(){Fh=!1,pr!==null&&kl(pr)&&(pr=null),mr!==null&&kl(mr)&&(mr=null),gr!==null&&kl(gr)&&(gr=null),ca.forEach(Ap),ua.forEach(Ap)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fh||(Fh=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,iy)))}function ha(t){function e(r){return wo(r,t)}if(0<$a.length){wo($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&wo(pr,t),mr!==null&&wo(mr,t),gr!==null&&wo(gr,t),ca.forEach(e),ua.forEach(e),n=0;n<lr.length;n++)i=lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)Dv(n),n.blockedOn===null&&lr.shift()}var zs=$i.ReactCurrentBatchConfig,lc=!0;function ry(t,e,n,i){var r=dt,s=zs.transition;zs.transition=null;try{dt=1,pd(t,e,n,i)}finally{dt=r,zs.transition=s}}function sy(t,e,n,i){var r=dt,s=zs.transition;zs.transition=null;try{dt=4,pd(t,e,n,i)}finally{dt=r,zs.transition=s}}function pd(t,e,n,i){if(lc){var r=Oh(t,e,n,i);if(r===null)xu(t,e,i,cc,n),wp(t,i);else if(ny(r,t,e,n,i))i.stopPropagation();else if(wp(t,i),e&4&&-1<ty.indexOf(t)){for(;r!==null;){var s=ba(r);if(s!==null&&Rv(s),s=Oh(t,e,n,i),s===null&&xu(t,e,i,cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var cc=null;function Oh(t,e,n,i){if(cc=null,t=ud(i),t=Hr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yx()){case hd:return 1;case Tv:return 4;case oc:case jx:return 16;case wv:return 536870912;default:return 16}default:return 16}}var hr=null,md=null,Bl=null;function Uv(){if(Bl)return Bl;var t,e=md,n=e.length,i,r="value"in hr?hr.value:hr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Bl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Cp(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Cp,this.isPropagationStopped=Cp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gd=Un(uo),Pa=wt({},uo,{view:0,detail:0}),oy=Un(Pa),uu,hu,Ao,Bc=wt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(uu=t.screenX-Ao.screenX,hu=t.screenY-Ao.screenY):hu=uu=0,Ao=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),Rp=Un(Bc),ay=wt({},Bc,{dataTransfer:0}),ly=Un(ay),cy=wt({},Pa,{relatedTarget:0}),fu=Un(cy),uy=wt({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=Un(uy),fy=wt({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dy=Un(fy),py=wt({},uo,{data:0}),Pp=Un(py),my={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vy[t])?!!e[t]:!1}function vd(){return _y}var xy=wt({},Pa,{key:function(t){if(t.key){var e=my[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yy=Un(xy),Sy=wt({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bp=Un(Sy),My=wt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),Ey=Un(My),Ty=wt({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=Un(Ty),Ay=wt({},Bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=Un(Ay),Ry=[9,13,27,32],_d=Gi&&"CompositionEvent"in window,qo=null;Gi&&"documentMode"in document&&(qo=document.documentMode);var Py=Gi&&"TextEvent"in window&&!qo,Nv=Gi&&(!_d||qo&&8<qo&&11>=qo),Lp=" ",Dp=!1;function Fv(t,e){switch(t){case"keyup":return Ry.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ov(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function by(t,e){switch(t){case"compositionend":return Ov(e);case"keypress":return e.which!==32?null:(Dp=!0,Lp);case"textInput":return t=e.data,t===Lp&&Dp?null:t;default:return null}}function Ly(t,e){if(ws)return t==="compositionend"||!_d&&Fv(t,e)?(t=Uv(),Bl=md=hr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nv&&e.locale!=="ko"?null:e.data;default:return null}}var Dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dy[t.type]:e==="textarea"}function kv(t,e,n,i){mv(i),e=uc(e,"onChange"),0<e.length&&(n=new gd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ko=null,fa=null;function Iy(t){qv(t,0)}function zc(t){var e=Rs(t);if(lv(e))return t}function Uy(t,e){if(t==="change")return e}var Bv=!1;if(Gi){var du;if(Gi){var pu="oninput"in document;if(!pu){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),pu=typeof Up.oninput=="function"}du=pu}else du=!1;Bv=du&&(!document.documentMode||9<document.documentMode)}function Np(){Ko&&(Ko.detachEvent("onpropertychange",zv),fa=Ko=null)}function zv(t){if(t.propertyName==="value"&&zc(fa)){var e=[];kv(e,fa,t,ud(t)),xv(Iy,e)}}function Ny(t,e,n){t==="focusin"?(Np(),Ko=e,fa=n,Ko.attachEvent("onpropertychange",zv)):t==="focusout"&&Np()}function Fy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zc(fa)}function Oy(t,e){if(t==="click")return zc(e)}function ky(t,e){if(t==="input"||t==="change")return zc(e)}function By(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:By;function da(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xh.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=Fp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fp(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vv(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zy(t){var e=Vv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(i!==null&&xd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Op(n,s);var o=Op(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hy=Gi&&"documentMode"in document&&11>=document.documentMode,As=null,kh=null,Zo=null,Bh=!1;function kp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||As==null||As!==ic(i)||(i=As,"selectionStart"in i&&xd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zo&&da(Zo,i)||(Zo=i,i=uc(kh,"onSelect"),0<i.length&&(e=new gd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},mu={},Gv={};Gi&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Hc(t){if(mu[t])return mu[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gv)return mu[t]=e[n];return t}var Wv=Hc("animationend"),Xv=Hc("animationiteration"),Yv=Hc("animationstart"),jv=Hc("transitionend"),$v=new Map,Bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){$v.set(t,e),Jr(e,[t])}for(var gu=0;gu<Bp.length;gu++){var vu=Bp[gu],Vy=vu.toLowerCase(),Gy=vu[0].toUpperCase()+vu.slice(1);wr(Vy,"on"+Gy)}wr(Wv,"onAnimationEnd");wr(Xv,"onAnimationIteration");wr(Yv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(jv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function zp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Vx(i,e,void 0,t),t.currentTarget=null}function qv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zp(r,a,c),s=l}}}if(sc)throw t=Uh,sc=!1,Uh=null,t}function _t(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var i=t+"__bubble";n.has(i)||(Kv(e,t,2,!1),n.add(i))}function _u(t,e,n){var i=0;e&&(i|=4),Kv(n,t,i,e)}var Za="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Za]){t[Za]=!0,iv.forEach(function(n){n!=="selectionchange"&&(Wy.has(n)||_u(n,!1,t),_u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Za]||(e[Za]=!0,_u("selectionchange",!1,e))}}function Kv(t,e,n,i){switch(Iv(e)){case 1:var r=ry;break;case 4:r=sy;break;default:r=pd}n=r.bind(null,e,n,t),r=void 0,!Ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xv(function(){var c=s,u=ud(n),f=[];e:{var p=$v.get(t);if(p!==void 0){var m=gd,_=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":m=yy;break;case"focusin":_="focus",m=fu;break;case"focusout":_="blur",m=fu;break;case"beforeblur":case"afterblur":m=fu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ey;break;case Wv:case Xv:case Yv:m=hy;break;case jv:m=wy;break;case"scroll":m=oy;break;case"wheel":m=Cy;break;case"copy":case"cut":case"paste":m=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=bp}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?p!==null?p+"Capture":null:p;M=[];for(var y=c,x;y!==null;){x=y;var A=x.stateNode;if(x.tag===5&&A!==null&&(x=A,d!==null&&(A=la(y,d),A!=null&&M.push(ma(y,A,x)))),g)break;y=y.return}0<M.length&&(p=new m(p,_,null,n,u),f.push({event:p,listeners:M}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==Lh&&(_=n.relatedTarget||n.fromElement)&&(Hr(_)||_[Wi]))break e;if((m||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Hr(_):null,_!==null&&(g=es(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(M=Rp,A="onMouseLeave",d="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(M=bp,A="onPointerLeave",d="onPointerEnter",y="pointer"),g=m==null?p:Rs(m),x=_==null?p:Rs(_),p=new M(A,y+"leave",m,n,u),p.target=g,p.relatedTarget=x,A=null,Hr(u)===c&&(M=new M(d,y+"enter",_,n,u),M.target=x,M.relatedTarget=g,A=M),g=A,m&&_)t:{for(M=m,d=_,y=0,x=M;x;x=rs(x))y++;for(x=0,A=d;A;A=rs(A))x++;for(;0<y-x;)M=rs(M),y--;for(;0<x-y;)d=rs(d),x--;for(;y--;){if(M===d||d!==null&&M===d.alternate)break t;M=rs(M),d=rs(d)}M=null}else M=null;m!==null&&Hp(f,p,m,M,!1),_!==null&&g!==null&&Hp(f,g,_,M,!0)}}e:{if(p=c?Rs(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var U=Uy;else if(Ip(p))if(Bv)U=ky;else{U=Fy;var b=Ny}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(U=Oy);if(U&&(U=U(t,c))){kv(f,U,n,u);break e}b&&b(t,p,c),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Ah(p,"number",p.value)}switch(b=c?Rs(c):window,t){case"focusin":(Ip(b)||b.contentEditable==="true")&&(As=b,kh=c,Zo=null);break;case"focusout":Zo=kh=As=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,kp(f,n,u);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":kp(f,n,u)}var P;if(_d)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ws?Fv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Nv&&n.locale!=="ko"&&(ws||I!=="onCompositionStart"?I==="onCompositionEnd"&&ws&&(P=Uv()):(hr=u,md="value"in hr?hr.value:hr.textContent,ws=!0)),b=uc(c,I),0<b.length&&(I=new Pp(I,t,null,n,u),f.push({event:I,listeners:b}),P?I.data=P:(P=Ov(n),P!==null&&(I.data=P)))),(P=Py?by(t,n):Ly(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(u=new Pp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=P))}qv(f,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Xy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function Vp(t){return(typeof t=="string"?t:""+t).replace(Xy,`
`).replace(Yy,"")}function Qa(t,e,n){if(e=Vp(e),Vp(t)!==e&&n)throw Error(pe(425))}function hc(){}var zh=null,Hh=null;function Vh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(qy)}:Gh;function qy(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ha(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),mi="__reactFiber$"+ho,ga="__reactProps$"+ho,Wi="__reactContainer$"+ho,Wh="__reactEvents$"+ho,Ky="__reactListeners$"+ho,Zy="__reactHandles$"+ho;function Hr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[mi])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function ba(t){return t=t[mi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function Vc(t){return t[ga]||null}var Xh=[],Ps=-1;function Ar(t){return{current:t}}function yt(t){0>Ps||(t.current=Xh[Ps],Xh[Ps]=null,Ps--)}function vt(t,e){Ps++,Xh[Ps]=t.current,t.current=e}var Tr={},on=Ar(Tr),xn=Ar(!1),Yr=Tr;function js(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function fc(){yt(xn),yt(on)}function Xp(t,e,n){if(on.current!==Tr)throw Error(pe(168));vt(on,e),vt(xn,n)}function Zv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Nx(t)||"Unknown",r));return wt({},n,i)}function dc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Yr=on.current,vt(on,t),vt(xn,xn.current),!0}function Yp(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=Zv(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,yt(xn),yt(on),vt(on,t)):yt(xn),vt(xn,n)}var Li=null,Gc=!1,Su=!1;function Qv(t){Li===null?Li=[t]:Li.push(t)}function Qy(t){Gc=!0,Qv(t)}function Cr(){if(!Su&&Li!==null){Su=!0;var t=0,e=dt;try{var n=Li;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Gc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),Ev(hd,Cr),r}finally{dt=e,Su=!1}}return null}var bs=[],Ls=0,pc=null,mc=0,Fn=[],On=0,jr=null,Oi=1,ki="";function Nr(t,e){bs[Ls++]=mc,bs[Ls++]=pc,pc=t,mc=e}function Jv(t,e,n){Fn[On++]=Oi,Fn[On++]=ki,Fn[On++]=jr,jr=t;var i=Oi;t=ki;var r=32-ri(i)-1;i&=~(1<<r),n+=1;var s=32-ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ri(e)+r|n<<r|i,ki=s+t}else Oi=1<<s|n<<r|i,ki=t}function yd(t){t.return!==null&&(Nr(t,1),Jv(t,1,0))}function Sd(t){for(;t===pc;)pc=bs[--Ls],bs[Ls]=null,mc=bs[--Ls],bs[Ls]=null;for(;t===jr;)jr=Fn[--On],Fn[On]=null,ki=Fn[--On],Fn[On]=null,Oi=Fn[--On],Fn[On]=null}var Ln=null,Rn=null,Mt=!1,ii=null;function e0(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Rn=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Rn=null,!0):!1;default:return!1}}function Yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(Mt){var e=Rn;if(e){var n=e;if(!jp(t,e)){if(Yh(t))throw Error(pe(418));e=vr(n.nextSibling);var i=Ln;e&&jp(t,e)?e0(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Ln=t)}}else{if(Yh(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Mt=!1,Ln=t}}}function $p(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function Ja(t){if(t!==Ln)return!1;if(!Mt)return $p(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vh(t.type,t.memoizedProps)),e&&(e=Rn)){if(Yh(t))throw t0(),Error(pe(418));for(;e;)e0(t,e),e=vr(e.nextSibling)}if($p(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Ln?vr(t.stateNode.nextSibling):null;return!0}function t0(){for(var t=Rn;t;)t=vr(t.nextSibling)}function $s(){Rn=Ln=null,Mt=!1}function Md(t){ii===null?ii=[t]:ii.push(t)}var Jy=$i.ReactCurrentBatchConfig;function Co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qp(t){var e=t._init;return e(t._payload)}function n0(t){function e(d,y){if(t){var x=d.deletions;x===null?(d.deletions=[y],d.flags|=16):x.push(y)}}function n(d,y){if(!t)return null;for(;y!==null;)e(d,y),y=y.sibling;return null}function i(d,y){for(d=new Map;y!==null;)y.key!==null?d.set(y.key,y):d.set(y.index,y),y=y.sibling;return d}function r(d,y){return d=Sr(d,y),d.index=0,d.sibling=null,d}function s(d,y,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<y?(d.flags|=2,y):x):(d.flags|=2,y)):(d.flags|=1048576,y)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,y,x,A){return y===null||y.tag!==6?(y=Ru(x,d.mode,A),y.return=d,y):(y=r(y,x),y.return=d,y)}function l(d,y,x,A){var U=x.type;return U===Ts?u(d,y,x.props.children,A,x.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&qp(U)===y.type)?(A=r(y,x.props),A.ref=Co(d,y,x),A.return=d,A):(A=jl(x.type,x.key,x.props,null,d.mode,A),A.ref=Co(d,y,x),A.return=d,A)}function c(d,y,x,A){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Pu(x,d.mode,A),y.return=d,y):(y=r(y,x.children||[]),y.return=d,y)}function u(d,y,x,A,U){return y===null||y.tag!==7?(y=Xr(x,d.mode,A,U),y.return=d,y):(y=r(y,x),y.return=d,y)}function f(d,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Ru(""+y,d.mode,x),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ga:return x=jl(y.type,y.key,y.props,null,d.mode,x),x.ref=Co(d,null,y),x.return=d,x;case Es:return y=Pu(y,d.mode,x),y.return=d,y;case or:var A=y._init;return f(d,A(y._payload),x)}if(Vo(y)||Mo(y))return y=Xr(y,d.mode,x,null),y.return=d,y;el(d,y)}return null}function p(d,y,x,A){var U=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:a(d,y,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ga:return x.key===U?l(d,y,x,A):null;case Es:return x.key===U?c(d,y,x,A):null;case or:return U=x._init,p(d,y,U(x._payload),A)}if(Vo(x)||Mo(x))return U!==null?null:u(d,y,x,A,null);el(d,x)}return null}function m(d,y,x,A,U){if(typeof A=="string"&&A!==""||typeof A=="number")return d=d.get(x)||null,a(y,d,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ga:return d=d.get(A.key===null?x:A.key)||null,l(y,d,A,U);case Es:return d=d.get(A.key===null?x:A.key)||null,c(y,d,A,U);case or:var b=A._init;return m(d,y,x,b(A._payload),U)}if(Vo(A)||Mo(A))return d=d.get(x)||null,u(y,d,A,U,null);el(y,A)}return null}function _(d,y,x,A){for(var U=null,b=null,P=y,I=y=0,ee=null;P!==null&&I<x.length;I++){P.index>I?(ee=P,P=null):ee=P.sibling;var S=p(d,P,x[I],A);if(S===null){P===null&&(P=ee);break}t&&P&&S.alternate===null&&e(d,P),y=s(S,y,I),b===null?U=S:b.sibling=S,b=S,P=ee}if(I===x.length)return n(d,P),Mt&&Nr(d,I),U;if(P===null){for(;I<x.length;I++)P=f(d,x[I],A),P!==null&&(y=s(P,y,I),b===null?U=P:b.sibling=P,b=P);return Mt&&Nr(d,I),U}for(P=i(d,P);I<x.length;I++)ee=m(P,d,I,x[I],A),ee!==null&&(t&&ee.alternate!==null&&P.delete(ee.key===null?I:ee.key),y=s(ee,y,I),b===null?U=ee:b.sibling=ee,b=ee);return t&&P.forEach(function(C){return e(d,C)}),Mt&&Nr(d,I),U}function M(d,y,x,A){var U=Mo(x);if(typeof U!="function")throw Error(pe(150));if(x=U.call(x),x==null)throw Error(pe(151));for(var b=U=null,P=y,I=y=0,ee=null,S=x.next();P!==null&&!S.done;I++,S=x.next()){P.index>I?(ee=P,P=null):ee=P.sibling;var C=p(d,P,S.value,A);if(C===null){P===null&&(P=ee);break}t&&P&&C.alternate===null&&e(d,P),y=s(C,y,I),b===null?U=C:b.sibling=C,b=C,P=ee}if(S.done)return n(d,P),Mt&&Nr(d,I),U;if(P===null){for(;!S.done;I++,S=x.next())S=f(d,S.value,A),S!==null&&(y=s(S,y,I),b===null?U=S:b.sibling=S,b=S);return Mt&&Nr(d,I),U}for(P=i(d,P);!S.done;I++,S=x.next())S=m(P,d,I,S.value,A),S!==null&&(t&&S.alternate!==null&&P.delete(S.key===null?I:S.key),y=s(S,y,I),b===null?U=S:b.sibling=S,b=S);return t&&P.forEach(function($){return e(d,$)}),Mt&&Nr(d,I),U}function g(d,y,x,A){if(typeof x=="object"&&x!==null&&x.type===Ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ga:e:{for(var U=x.key,b=y;b!==null;){if(b.key===U){if(U=x.type,U===Ts){if(b.tag===7){n(d,b.sibling),y=r(b,x.props.children),y.return=d,d=y;break e}}else if(b.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===or&&qp(U)===b.type){n(d,b.sibling),y=r(b,x.props),y.ref=Co(d,b,x),y.return=d,d=y;break e}n(d,b);break}else e(d,b);b=b.sibling}x.type===Ts?(y=Xr(x.props.children,d.mode,A,x.key),y.return=d,d=y):(A=jl(x.type,x.key,x.props,null,d.mode,A),A.ref=Co(d,y,x),A.return=d,d=A)}return o(d);case Es:e:{for(b=x.key;y!==null;){if(y.key===b)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(d,y.sibling),y=r(y,x.children||[]),y.return=d,d=y;break e}else{n(d,y);break}else e(d,y);y=y.sibling}y=Pu(x,d.mode,A),y.return=d,d=y}return o(d);case or:return b=x._init,g(d,y,b(x._payload),A)}if(Vo(x))return _(d,y,x,A);if(Mo(x))return M(d,y,x,A);el(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(d,y.sibling),y=r(y,x),y.return=d,d=y):(n(d,y),y=Ru(x,d.mode,A),y.return=d,d=y),o(d)):n(d,y)}return g}var qs=n0(!0),i0=n0(!1),gc=Ar(null),vc=null,Ds=null,Ed=null;function Td(){Ed=Ds=vc=null}function wd(t){var e=gc.current;yt(gc),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){vc=t,Ed=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Xn(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(vc===null)throw Error(pe(308));Ds=t,vc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Vr=null;function Ad(t){Vr===null?Vr=[t]:Vr.push(t)}function r0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ad(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Cd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ad(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fd(t,n)}}function Kp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _c(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var p=a.lane,m=a.eventTime;if((i&p)===p){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(p=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){f=_.call(m,f,p);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,p=typeof _=="function"?_.call(m,f,p):_,p==null)break e;f=wt({},f,p);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=f}}function Zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var La={},vi=Ar(La),va=Ar(La),_a=Ar(La);function Gr(t){if(t===La)throw Error(pe(174));return t}function Rd(t,e){switch(vt(_a,e),vt(va,t),vt(vi,La),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}yt(vi),vt(vi,e)}function Ks(){yt(vi),yt(va),yt(_a)}function o0(t){Gr(_a.current);var e=Gr(vi.current),n=Rh(e,t.type);e!==n&&(vt(va,t),vt(vi,n))}function Pd(t){va.current===t&&(yt(vi),yt(va))}var Et=Ar(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function bd(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Vl=$i.ReactCurrentDispatcher,Eu=$i.ReactCurrentBatchConfig,$r=0,Tt=null,Ft=null,Vt=null,yc=!1,Qo=!1,xa=0,eS=0;function Qt(){throw Error(pe(321))}function Ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Dd(t,e,n,i,r,s){if($r=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?rS:sS,t=n(i,r),Qo){s=0;do{if(Qo=!1,xa=0,25<=s)throw Error(pe(301));s+=1,Vt=Ft=null,e.updateQueue=null,Vl.current=oS,t=n(i,r)}while(Qo)}if(Vl.current=Sc,e=Ft!==null&&Ft.next!==null,$r=0,Vt=Ft=Tt=null,yc=!1,e)throw Error(pe(300));return t}function Id(){var t=xa!==0;return xa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Yn(){if(Ft===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?Tt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(pe(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ya(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=u,qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,oi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);oi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function a0(){}function l0(t,e){var n=Tt,i=Yn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Ud(h0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,u0.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(pe(349));$r&30||c0(n,e,r)}return r}function c0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,i){e.value=n,e.getSnapshot=i,f0(e)&&d0(t)}function h0(t,e,n){return n(function(){f0(e)&&d0(t)})}function f0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function d0(t){var e=Xi(t,1);e!==null&&si(e,t,1,-1)}function Qp(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=iS.bind(null,Tt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p0(){return Yn().memoizedState}function Gl(t,e,n,i){var r=hi();Tt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Wc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Ld(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function Jp(t,e){return Gl(8390656,8,t,e)}function Ud(t,e){return Wc(2048,8,t,e)}function m0(t,e){return Wc(4,2,t,e)}function g0(t,e){return Wc(4,4,t,e)}function v0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _0(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4,4,v0.bind(null,e,t),n)}function Nd(){}function x0(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ld(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S0(t,e,n){return $r&21?(oi(n,e)||(n=Av(),Tt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function tS(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{dt=n,Eu.transition=i}}function M0(){return Yn().memoizedState}function nS(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))T0(e,n);else if(n=r0(t,e,n,i),n!==null){var r=fn();si(n,t,i,r),w0(n,e,i)}}function iS(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))T0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,o)){var l=e.interleaved;l===null?(r.next=r,Ad(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r0(t,e,r,i),n!==null&&(r=fn(),si(n,t,i,r),w0(n,e,i))}}function E0(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function T0(t,e){Qo=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fd(t,n)}}var Sc={readContext:Xn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},rS={readContext:Xn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:Jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,v0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=nS.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:Nd,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=tS.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=hi();if(Mt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Gt===null)throw Error(pe(349));$r&30||c0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jp(h0.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,u0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Gt.identifierPrefix;if(Mt){var n=ki,i=Oi;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sS={readContext:Xn,useCallback:x0,useContext:Xn,useEffect:Ud,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:Tu,useRef:p0,useState:function(){return Tu(ya)},useDebugValue:Nd,useDeferredValue:function(t){var e=Yn();return S0(e,Ft.memoizedState,t)},useTransition:function(){var t=Tu(ya)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1},oS={readContext:Xn,useCallback:x0,useContext:Xn,useEffect:Ud,useImperativeHandle:_0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:y0,useReducer:wu,useRef:p0,useState:function(){return wu(ya)},useDebugValue:Nd,useDeferredValue:function(t){var e=Yn();return Ft===null?e.memoizedState=t:S0(e,Ft.memoizedState,t)},useTransition:function(){var t=wu(ya)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:a0,useSyncExternalStore:l0,useId:M0,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=yr(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(si(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=yr(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,r),e!==null&&(si(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=yr(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=_r(t,r,i),e!==null&&(si(e,t,i,n),Hl(e,t,i))}};function em(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function A0(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=yn(e)?Yr:on.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function tm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xc.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Cd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=yn(e)?Yr:on.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xc.enqueueReplaceState(r,r.state,null),_c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=Ux(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aS=typeof WeakMap=="function"?WeakMap:Map;function C0(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ec||(Ec=!0,lf=i),Zh(t,e)},n}function R0(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=SS.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var lS=$i.ReactCurrentOwner,_n=!1;function cn(t,e,n,i){e.child=t===null?i0(e,null,n,i):qs(e,t.child,n,i)}function sm(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=Dd(t,e,n,i,s,r),n=Id(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Mt&&n&&yd(e),e.flags|=1,cn(t,e,i,r),e.child)}function om(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P0(t,e,s,i,r)):(t=jl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function P0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return Qh(t,e,n,i,r)}function b0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Us,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Us,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Us,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Us,An),An|=i;return cn(t,e,r,n),e.child}function L0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,i,r){var s=yn(n)?Yr:on.current;return s=js(e,s),Hs(e,r),n=Dd(t,e,n,i,s,r),i=Id(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(Mt&&i&&yd(e),e.flags|=1,cn(t,e,n,r),e.child)}function am(t,e,n,i,r){if(yn(n)){var s=!0;dc(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Wl(t,e),A0(e,n,i),Kh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=yn(n)?Yr:on.current,c=js(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&tm(e,o,i,c),ar=!1;var p=e.memoizedState;o.state=p,_c(e,i,o,r),l=e.memoizedState,a!==i||p!==l||xn.current||ar?(typeof u=="function"&&(qh(e,n,u,i),l=e.memoizedState),(a=ar||em(e,n,a,i,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=yn(n)?Yr:on.current,l=js(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&tm(e,o,i,l),ar=!1,p=e.memoizedState,o.state=p,_c(e,i,o,r);var _=e.memoizedState;a!==f||p!==_||xn.current||ar?(typeof m=="function"&&(qh(e,n,m,i),_=e.memoizedState),(c=ar||em(e,n,c,i,p,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Jh(t,e,n,i,s,r)}function Jh(t,e,n,i,r,s){L0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yp(e,n,!1),Yi(t,e,s);i=e.stateNode,lS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&Yp(e,n,!0),e.child}function D0(t){var e=t.stateNode;e.pendingContext?Xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xp(t,e.context,!1),Rd(t,e.containerInfo)}function lm(t,e,n,i,r){return $s(),Md(r),e.flags|=256,cn(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function I0(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Et,r&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$c(o,i,0,null),t=Xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Fd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fd(t,e){return e=$c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,i){return i!==null&&Md(i),qs(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Au(Error(pe(422))),tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$c({mode:"visible",children:i.children},r,0,null),s=Xr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(pe(419)),i=Au(s,i,void 0),tl(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),si(i,t,r,-1))}return Vd(),i=Au(Error(pe(421))),tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=MS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=vr(r.nextSibling),Ln=e,Mt=!0,ii=null,t!==null&&(Fn[On++]=Oi,Fn[On++]=ki,Fn[On++]=jr,Oi=t.id,ki=t.overflow,jr=e),e=Fd(e,i.children),e.flags|=4096,e)}function cm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$h(t.return,e,n)}function Cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function U0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,n,e);else if(t.tag===19)cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:D0(e),$s();break;case 5:o0(e);break;case 1:yn(e.type)&&dc(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?I0(t,e,n):(vt(Et,Et.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);vt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return U0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,b0(t,e,n)}return Yi(t,e,n)}var N0,nf,F0,O0;N0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};F0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Gr(vi.current);var s=null;switch(n){case"input":r=Th(t,r),i=Th(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Ch(t,r),i=Ch(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=hc)}Ph(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ro(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function hS(t,e,n){var i=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return yn(e.type)&&fc(),Jt(e),null;case 3:return i=e.stateNode,Ks(),yt(xn),yt(on),bd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(hf(ii),ii=null))),nf(t,e),Jt(e),null;case 5:Pd(e);var r=Gr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)F0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Jt(e),null}if(t=Gr(vi.current),Ja(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":_p(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":yp(i,s),_t("invalid",i)}Ph(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":Wa(i),xp(i,s,!0);break;case"textarea":Wa(i),Sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ga]=i,N0(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)_t(Wo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":_p(t,i),r=Th(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":yp(t,i),r=Ch(t,i),_t("invalid",t);break;default:r=i}Ph(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&od(t,s,l,o))}switch(n){case"input":Wa(t),xp(t,i,!1);break;case"textarea":Wa(t),Sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Er(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)O0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Gr(_a.current),Gr(vi.current),Ja(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Qa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Jt(e),null;case 13:if(yt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Rn!==null&&e.mode&1&&!(e.flags&128))t0(),$s(),e.flags|=98560,s=!1;else if(s=Ja(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[mi]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else ii!==null&&(hf(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ot===0&&(Ot=3):Vd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return Ks(),nf(t,e),t===null&&pa(e.stateNode.containerInfo),Jt(e),null;case 10:return wd(e.type._context),Jt(e),null;case 17:return yn(e.type)&&fc(),Jt(e),null;case 19:if(yt(Et),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ro(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,Ro(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>Qs&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304)}else{if(!i)if(t=xc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Jt(e),null}else 2*Lt()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Et.current,vt(Et,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return Hd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function fS(t,e){switch(Sd(e),e.tag){case 1:return yn(e.type)&&fc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),yt(xn),yt(on),bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(yt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Et),null;case 4:return Ks(),null;case 10:return wd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var nl=!1,nn=!1,dS=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var um=!1;function pS(t,e){if(zh=lc,t=Vv(),xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},lc=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,d=e.stateNode,y=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:ei(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(A){Rt(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return _=um,um=!1,_}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rf(e,n,s)}r=r.next}while(r!==i)}}function Yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k0(t){var e=t.alternate;e!==null&&(t.alternate=null,k0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ga],delete e[Wh],delete e[Ky],delete e[Zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B0(t){return t.tag===5||t.tag===3||t.tag===4}function hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Wt=null,ni=!1;function Ki(t,e,n){for(n=n.child;n!==null;)z0(t,e,n),n=n.sibling}function z0(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(kc,n)}catch{}switch(n.tag){case 5:nn||Is(n,e);case 6:var i=Wt,r=ni;Wt=null,Ki(t,e,n),Wt=i,ni=r,Wt!==null&&(ni?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(ni?(t=Wt,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),ha(t)):yu(Wt,n.stateNode));break;case 4:i=Wt,r=ni,Wt=n.stateNode.containerInfo,ni=!0,Ki(t,e,n),Wt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!nn&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Ki(t,e,n),nn=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dS),e.forEach(function(i){var r=ES.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,ni=!1;break e;case 3:Wt=a.stateNode.containerInfo,ni=!0;break e;case 4:Wt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Wt===null)throw Error(pe(160));z0(s,o,r),Wt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H0(e,t),e=e.sibling}function H0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),ci(t),i&4){try{Jo(3,t,t.return),Yc(3,t)}catch(M){Rt(t,t.return,M)}try{Jo(5,t,t.return)}catch(M){Rt(t,t.return,M)}}break;case 1:qn(e,t),ci(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(qn(e,t),ci(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(M){Rt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cv(r,s),bh(a,o);var c=bh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?pv(r,f):u==="dangerouslySetInnerHTML"?fv(r,f):u==="children"?aa(r,f):od(r,u,f,c)}switch(a){case"input":wh(r,s);break;case"textarea":uv(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Os(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(M){Rt(t,t.return,M)}}break;case 6:if(qn(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Rt(t,t.return,M)}}break;case 3:if(qn(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ha(e.containerInfo)}catch(M){Rt(t,t.return,M)}break;case 4:qn(e,t),ci(t);break;case 13:qn(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bd=Lt())),i&4&&fm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||u,qn(e,t),nn=c):qn(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Re=t,u=t.child;u!==null;){for(f=Re=u;Re!==null;){switch(p=Re,m=p.child,p.tag){case 0:case 11:case 14:case 15:Jo(4,p,p.return);break;case 1:Is(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Rt(i,n,M)}}break;case 5:Is(p,p.return);break;case 22:if(p.memoizedState!==null){pm(f);continue}}m!==null?(m.return=p,Re=m):pm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dv("display",o))}catch(M){Rt(t,t.return,M)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){Rt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qn(e,t),ci(t),i&4&&fm(t);break;case 21:break;default:qn(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B0(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=hm(t);af(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=hm(t);of(t,a,o);break;default:throw Error(pe(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mS(t,e,n){Re=t,V0(t)}function V0(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=nl;var c=nn;if(nl=o,(nn=l)&&!c)for(Re=r;Re!==null;)o=Re,l=o.child,o.tag===22&&o.memoizedState!==null?mm(r):l!==null?(l.return=o,Re=l):mm(r);for(;s!==null;)Re=s,V0(s),s=s.sibling;Re=r,nl=a,nn=c}dm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):dm(t)}}function dm(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}nn||e.flags&512&&sf(e)}catch(p){Rt(e,e.return,p)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function pm(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function mm(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{sf(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var gS=Math.ceil,Mc=$i.ReactCurrentDispatcher,Od=$i.ReactCurrentOwner,Gn=$i.ReactCurrentBatchConfig,lt=0,Gt=null,Nt=null,Yt=0,An=0,Us=Ar(0),Ot=0,Ma=null,qr=0,jc=0,kd=0,ea=null,gn=null,Bd=0,Qs=1/0,bi=null,Ec=!1,lf=null,xr=null,il=!1,fr=null,Tc=0,ta=0,cf=null,Xl=-1,Yl=0;function fn(){return lt&6?Lt():Xl!==-1?Xl:Xl=Lt()}function yr(t){return t.mode&1?lt&2&&Yt!==0?Yt&-Yt:Jy.transition!==null?(Yl===0&&(Yl=Av()),Yl):(t=dt,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function si(t,e,n,i){if(50<ta)throw ta=0,cf=null,Error(pe(185));Ra(t,n,i),(!(lt&2)||t!==Gt)&&(t===Gt&&(!(lt&2)&&(jc|=n),Ot===4&&cr(t,Yt)),Sn(t,i),n===1&&lt===0&&!(e.mode&1)&&(Qs=Lt()+500,Gc&&Cr()))}function Sn(t,e){var n=t.callbackNode;Jx(t,e);var i=ac(t,t===Gt?Yt:0);if(i===0)n!==null&&Tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tp(n),e===1)t.tag===0?Qy(gm.bind(null,t)):Qv(gm.bind(null,t)),$y(function(){!(lt&6)&&Cr()}),n=null;else{switch(Cv(i)){case 1:n=hd;break;case 4:n=Tv;break;case 16:n=oc;break;case 536870912:n=wv;break;default:n=oc}n=K0(n,G0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G0(t,e){if(Xl=-1,Yl=0,lt&6)throw Error(pe(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=ac(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wc(t,i);else{e=i;var r=lt;lt|=2;var s=X0();(Gt!==t||Yt!==e)&&(bi=null,Qs=Lt()+500,Wr(t,e));do try{xS();break}catch(a){W0(t,a)}while(!0);Td(),Mc.current=s,lt=r,Nt!==null?e=0:(Gt=null,Yt=0,e=Ot)}if(e!==0){if(e===2&&(r=Nh(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=Ma,Wr(t,0),cr(t,i),Sn(t,Lt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!vS(r)&&(e=wc(t,i),e===2&&(s=Nh(t),s!==0&&(i=s,e=uf(t,s))),e===1))throw n=Ma,Wr(t,0),cr(t,i),Sn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Fr(t,gn,bi);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=Bd+500-Lt(),10<e)){if(ac(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gh(Fr.bind(null,t,gn,bi),e);break}Fr(t,gn,bi);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gS(i/1960))-i,10<i){t.timeoutHandle=Gh(Fr.bind(null,t,gn,bi),i);break}Fr(t,gn,bi);break;case 5:Fr(t,gn,bi);break;default:throw Error(pe(329))}}}return Sn(t,Lt()),t.callbackNode===n?G0.bind(null,t):null}function uf(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=wc(t,e),t!==2&&(e=gn,gn=n,e!==null&&hf(e)),t}function hf(t){gn===null?gn=t:gn.push.apply(gn,t)}function vS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~kd,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ri(e),i=1<<n;t[n]=-1,e&=~i}}function gm(t){if(lt&6)throw Error(pe(327));Vs();var e=ac(t,0);if(!(e&1))return Sn(t,Lt()),null;var n=wc(t,e);if(t.tag!==0&&n===2){var i=Nh(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=Ma,Wr(t,0),cr(t,e),Sn(t,Lt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,gn,bi),Sn(t,Lt()),null}function zd(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Qs=Lt()+500,Gc&&Cr())}}function Kr(t){fr!==null&&fr.tag===0&&!(lt&6)&&Vs();var e=lt;lt|=1;var n=Gn.transition,i=dt;try{if(Gn.transition=null,dt=1,t)return t()}finally{dt=i,Gn.transition=n,lt=e,!(lt&6)&&Cr()}}function Hd(){An=Us.current,yt(Us)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jy(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(Sd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fc();break;case 3:Ks(),yt(xn),yt(on),bd();break;case 5:Pd(i);break;case 4:Ks();break;case 13:yt(Et);break;case 19:yt(Et);break;case 10:wd(i.type._context);break;case 22:case 23:Hd()}n=n.return}if(Gt=t,Nt=t=Sr(t.current,null),Yt=An=e,Ot=0,Ma=null,kd=jc=qr=0,gn=ea=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Vr=null}return t}function W0(t,e){do{var n=Nt;try{if(Td(),Vl.current=Sc,yc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if($r=0,Vt=Ft=Tt=null,Qo=!1,xa=0,Od.current=null,n===null||n.return===null){Ot=1,Ma=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=im(o);if(m!==null){m.flags&=-257,rm(m,o,a,s,e),m.mode&1&&nm(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){nm(s,c,e),Vd();break e}l=Error(pe(426))}}else if(Mt&&a.mode&1){var g=im(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),rm(g,o,a,s,e),Md(Zs(l,a));break e}}s=l=Zs(l,a),Ot!==4&&(Ot=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=C0(s,l,e);Kp(s,d);break e;case 1:a=l;var y=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=R0(s,a,e);Kp(s,A);break e}}s=s.return}while(s!==null)}j0(n)}catch(U){e=U,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function X0(){var t=Mc.current;return Mc.current=Sc,t===null?Sc:t}function Vd(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(qr&268435455)&&!(jc&268435455)||cr(Gt,Yt)}function wc(t,e){var n=lt;lt|=2;var i=X0();(Gt!==t||Yt!==e)&&(bi=null,Wr(t,e));do try{_S();break}catch(r){W0(t,r)}while(!0);if(Td(),lt=n,Mc.current=i,Nt!==null)throw Error(pe(261));return Gt=null,Yt=0,Ot}function _S(){for(;Nt!==null;)Y0(Nt)}function xS(){for(;Nt!==null&&!Wx();)Y0(Nt)}function Y0(t){var e=q0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?j0(t):Nt=e,Od.current=null}function j0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fS(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Nt=null;return}}else if(n=hS(n,e,An),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Fr(t,e,n){var i=dt,r=Gn.transition;try{Gn.transition=null,dt=1,yS(t,e,n,i)}finally{Gn.transition=r,dt=i}return null}function yS(t,e,n,i){do Vs();while(fr!==null);if(lt&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ey(t,s),t===Gt&&(Nt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,K0(oc,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=dt;dt=1;var a=lt;lt|=4,Od.current=null,pS(t,n),H0(n,t),zy(Hh),lc=!!zh,Hh=zh=null,t.current=n,mS(n),Xx(),lt=a,dt=o,Gn.transition=s}else t.current=n;if(il&&(il=!1,fr=t,Tc=r),s=t.pendingLanes,s===0&&(xr=null),$x(n.stateNode),Sn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,t=lf,lf=null,t;return Tc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===cf?ta++:(ta=0,cf=t):ta=0,Cr(),null}function Vs(){if(fr!==null){var t=Cv(Tc),e=Gn.transition,n=dt;try{if(Gn.transition=null,dt=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,Tc=0,lt&6)throw Error(pe(331));var r=lt;for(lt|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Re=c;Re!==null;){var u=Re;switch(u.tag){case 0:case 11:case 15:Jo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Re=f;else for(;Re!==null;){u=Re;var p=u.sibling,m=u.return;if(k0(u),u===c){Re=null;break}if(p!==null){p.return=m,Re=p;break}Re=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Re=d;break e}Re=s.return}}var y=t.current;for(Re=y;Re!==null;){o=Re;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Re=x;else e:for(o=y;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yc(9,a)}}catch(U){Rt(a,a.return,U)}if(a===o){Re=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,Re=A;break e}Re=a.return}}if(lt=r,Cr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(kc,t)}catch{}i=!0}return i}finally{dt=n,Gn.transition=e}}return!1}function vm(t,e,n){e=Zs(n,e),e=C0(t,e,1),t=_r(t,e,1),e=fn(),t!==null&&(Ra(t,1,e),Sn(t,e))}function Rt(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){t=Zs(n,t),t=R0(e,t,1),e=_r(e,t,1),t=fn(),e!==null&&(Ra(e,1,t),Sn(e,t));break}}e=e.return}}function SS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ot===4||Ot===3&&(Yt&130023424)===Yt&&500>Lt()-Bd?Wr(t,0):kd|=n),Sn(t,e)}function $0(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=fn();t=Xi(t,e),t!==null&&(Ra(t,e,n),Sn(t,n))}function MS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$0(t,n)}function ES(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),$0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,uS(t,e,n);_n=!!(t.flags&131072)}else _n=!1,Mt&&e.flags&1048576&&Jv(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(t,e),t=e.pendingProps;var r=js(e,on.current);Hs(e,n),r=Dd(null,e,i,t,r,n);var s=Id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,dc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Cd(e),r.updater=Xc,e.stateNode=r,r._reactInternals=e,Kh(e,i,t,n),e=Jh(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&yd(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wS(i),t=ei(i,t),r){case 0:e=Qh(null,e,i,t,n);break e;case 1:e=am(null,e,i,t,n);break e;case 11:e=sm(null,e,i,t,n);break e;case 14:e=om(null,e,i,ei(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Qh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),am(t,e,i,r,n);case 3:e:{if(D0(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s0(t,e),_c(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(pe(423)),e),e=lm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(pe(424)),e),e=lm(t,e,i,n,r);break e}else for(Rn=vr(e.stateNode.containerInfo.firstChild),Ln=e,Mt=!0,ii=null,n=i0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Yi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return o0(e),t===null&&jh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vh(i,r)?o=null:s!==null&&Vh(i,s)&&(e.flags|=32),L0(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return I0(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),sm(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(gc,i._currentValue),i._currentValue=o,s!==null)if(oi(s.value,o)){if(s.children===r.children&&!xn.current){e=Yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(pe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Xn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),om(t,e,i,r,n);case 15:return P0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Wl(t,e),e.tag=1,yn(i)?(t=!0,dc(e)):t=!1,Hs(e,n),A0(e,i,r),Kh(e,i,r,n),Jh(null,e,i,!0,t,n);case 19:return U0(t,e,n);case 22:return b0(t,e,n)}throw Error(pe(156,e.tag))};function K0(t,e){return Ev(t,e)}function TS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new TS(t,e,n,i)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ld)return 11;if(t===cd)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return Xr(n.children,r,s,e);case ad:o=8,r|=8;break;case yh:return t=Hn(12,n,e,r|2),t.elementType=yh,t.lanes=s,t;case Sh:return t=Hn(13,n,e,r),t.elementType=Sh,t.lanes=s,t;case Mh:return t=Hn(19,n,e,r),t.elementType=Mh,t.lanes=s,t;case ov:return $c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rv:o=10;break e;case sv:o=9;break e;case ld:o=11;break e;case cd:o=14;break e;case or:o=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Xr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function $c(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=ov,t.lanes=n,t.stateNode={isHidden:!1},t}function Ru(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Pu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wd(t,e,n,i,r,s,o,a,l){return t=new AS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cd(s),t}function CS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z0(t){if(!t)return Tr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(yn(n))return Zv(t,n,e)}return e}function Q0(t,e,n,i,r,s,o,a,l){return t=Wd(n,i,!0,t,r,s,o,a,l),t.context=Z0(null),n=t.current,i=fn(),r=yr(n),s=Hi(i,r),s.callback=e??null,_r(n,s,r),t.current.lanes=r,Ra(t,r,i),Sn(t,i),t}function qc(t,e,n,i){var r=e.current,s=fn(),o=yr(r);return n=Z0(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=_r(r,e,o),t!==null&&(si(t,r,o,s),Hl(t,r,o)),o}function Ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xd(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function RS(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}Kc.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));qc(t,e,null,null)};Kc.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){qc(null,t,null,null)}),e[Wi]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&Dv(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function PS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ac(o);s.call(c)}}var o=Q0(e,i,t,0,null,!1,!1,"",xm);return t._reactRootContainer=o,t[Wi]=o.current,pa(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ac(l);a.call(c)}}var l=Wd(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=l,t[Wi]=l.current,pa(t.nodeType===8?t.parentNode:t),Kr(function(){qc(e,l,n,i)}),l}function Qc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ac(o);a.call(l)}}qc(e,o,t,r)}else o=PS(n,e,t,r,i);return Ac(o)}Rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(fd(e,n|1),Sn(e,Lt()),!(lt&6)&&(Qs=Lt()+500,Cr()))}break;case 13:Kr(function(){var i=Xi(t,1);if(i!==null){var r=fn();si(i,t,1,r)}}),Xd(t,1)}};dd=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=fn();si(e,t,134217728,n)}Xd(t,134217728)}};Pv=function(t){if(t.tag===13){var e=yr(t),n=Xi(t,e);if(n!==null){var i=fn();si(n,t,e,i)}Xd(t,e)}};bv=function(){return dt};Lv=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Dh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Vc(i);if(!r)throw Error(pe(90));lv(i),wh(i,r)}}}break;case"textarea":uv(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};vv=zd;_v=Kr;var bS={usingClientEntryPoint:!1,Events:[ba,Rs,Vc,mv,gv,zd]},Po={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LS={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sv(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||RS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{kc=rl.inject(LS),gi=rl}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;In.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(e))throw Error(pe(200));return CS(t,e,null,n)};In.createRoot=function(t,e){if(!jd(t))throw Error(pe(299));var n=!1,i="",r=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wd(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,pa(t.nodeType===8?t.parentNode:t),new Yd(e)};In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Sv(e),t=t===null?null:t.stateNode,t};In.flushSync=function(t){return Kr(t)};In.hydrate=function(t,e,n){if(!Zc(e))throw Error(pe(200));return Qc(null,t,e,!0,n)};In.hydrateRoot=function(t,e,n){if(!jd(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kc(e)};In.render=function(t,e,n){if(!Zc(e))throw Error(pe(200));return Qc(null,t,e,!1,n)};In.unmountComponentAtNode=function(t){if(!Zc(t))throw Error(pe(40));return t._reactRootContainer?(Kr(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};In.unstable_batchedUpdates=zd;In.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return Qc(t,e,n,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function e_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e_)}catch(t){console.error(t)}}e_(),ev.exports=In;var DS=ev.exports,ym=DS;_h.createRoot=ym.createRoot,_h.hydrateRoot=ym.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $d="169",IS=0,Sm=1,US=2,t_=1,n_=2,Pi=3,_i=0,Mn=1,Ii=2,Ut=0,Vi=1,Mm=2,Em=3,Tm=4,NS=5,Ui=100,FS=101,OS=102,kS=103,BS=104,zS=200,HS=201,VS=202,GS=203,Ea=204,Ta=205,WS=206,XS=207,YS=208,jS=209,$S=210,qS=211,KS=212,ZS=213,QS=214,ff=0,df=1,pf=2,Js=3,mf=4,gf=5,vf=6,_f=7,i_=0,JS=1,eM=2,Mr=0,r_=1,s_=2,o_=3,a_=4,tM=5,l_=6,c_=7,u_=300,eo=301,to=302,Cc=303,xf=304,Jc=306,yf=1e3,Bi=1001,Sf=1002,gt=1003,nM=1004,sl=1005,rn=1006,bu=1007,dr=1008,ji=1009,h_=1010,f_=1011,no=1012,qd=1013,Zr=1014,Pn=1015,bn=1016,Kd=1017,Zd=1018,io=1020,d_=35902,p_=1021,m_=1022,Vn=1023,g_=1024,v_=1025,Gs=1026,ro=1027,eu=1028,Qd=1029,__=1030,Jd=1031,ep=1033,$l=33776,ql=33777,Kl=33778,Zl=33779,Mf=35840,Ef=35841,Tf=35842,wf=35843,Af=36196,Cf=37492,Rf=37496,Pf=37808,bf=37809,Lf=37810,Df=37811,If=37812,Uf=37813,Nf=37814,Ff=37815,Of=37816,kf=37817,Bf=37818,zf=37819,Hf=37820,Vf=37821,Ql=36492,Gf=36494,Wf=36495,x_=36283,Xf=36284,Yf=36285,jf=36286,iM=3200,rM=3201,tp=0,sM=1,Ni="",fi="srgb",xi="srgb-linear",np="display-p3",tu="display-p3-linear",Rc="linear",mt="srgb",Pc="rec709",bc="p3",ss=7680,wm=519,oM=512,aM=513,lM=514,y_=515,cM=516,uM=517,hM=518,fM=519,Am=35044,Cm="300 es",zi=2e3,Lc=2001;class fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rm=1234567;const Ws=Math.PI/180,wa=180/Math.PI;function po(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function ip(t,e){return(t%e+e)%e}function dM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function pM(t,e,n){return t!==e?(n-t)/(e-t):0}function na(t,e,n){return(1-n)*t+n*e}function mM(t,e,n,i){return na(t,e,1-Math.exp(-n*i))}function gM(t,e=1){return e-Math.abs(ip(t,e*2)-e)}function vM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function _M(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function xM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function yM(t,e){return t+Math.random()*(e-t)}function SM(t){return t*(.5-Math.random())}function MM(t){t!==void 0&&(Rm=t);let e=Rm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function EM(t){return t*Ws}function TM(t){return t*wa}function wM(t){return(t&t-1)===0&&t!==0}function AM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function CM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function RM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),p=o((e-i)/2),m=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*p,a*c);break;case"YZY":t.set(l*p,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*p,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*m,a*c);break;case"YXY":t.set(l*m,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function an(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Mi={DEG2RAD:Ws,RAD2DEG:wa,generateUUID:po,clamp:Xt,euclideanModulo:ip,mapLinear:dM,inverseLerp:pM,lerp:na,damp:mM,pingpong:gM,smoothstep:vM,smootherstep:_M,randInt:xM,randFloat:yM,randFloatSpread:SM,seededRandom:MM,degToRad:EM,radToDeg:TM,isPowerOfTwo:wM,ceilPowerOfTwo:AM,floorPowerOfTwo:CM,setQuaternionFromProperEuler:RM,normalize:an,denormalize:Ms};class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],p=i[2],m=i[5],_=i[8],M=r[0],g=r[3],d=r[6],y=r[1],x=r[4],A=r[7],U=r[2],b=r[5],P=r[8];return s[0]=o*M+a*y+l*U,s[3]=o*g+a*x+l*b,s[6]=o*d+a*A+l*P,s[1]=c*M+u*y+f*U,s[4]=c*g+u*x+f*b,s[7]=c*d+u*A+f*P,s[2]=p*M+m*y+_*U,s[5]=p*g+m*x+_*b,s[8]=p*d+m*A+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,p=a*l-u*s,m=c*s-o*l,_=n*f+i*p+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=p*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new je;function S_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PM(){const t=Dc("canvas");return t.style.display="block",t}const Pm={};function Jl(t){t in Pm||(Pm[t]=!0,console.warn(t))}function bM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function LM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bm=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lm=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[xi]:{transfer:Rc,primaries:Pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[fi]:{transfer:mt,primaries:Pc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tu]:{transfer:Rc,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(bm)},[np]:{transfer:mt,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lm),fromReference:t=>t.applyMatrix3(bm).convertLinearToSRGB()}},IM=new Set([xi,tu]),ct={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!IM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=bo[e].toReference,r=bo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return bo[t].primaries},getTransfer:function(t){return t===Ni?Rc:bo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(bo[e].luminanceCoefficients)}};function Xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class UM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Dc("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xs(n[i]/255)*255):n[i]=Xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class M_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FM=0;class dn extends fo{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Bi,r=Bi,s=rn,o=dr,a=Vn,l=ji,c=dn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=po(),this.name="",this.source=new M_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=u_;dn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],m=l[5],_=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,A=(m+1)/2,U=(d+1)/2,b=(u+p)/4,P=(f+M)/4,I=(_+g)/4;return x>A&&x>U?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=P/i):A>U?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=b/r,s=I/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=P/s,r=I/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(f-M)/y,this.z=(p-u)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OM extends fo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new M_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends OM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class E_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gt,this.minFilter=gt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const p=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=_,e[n+3]=M;return}if(f!==M||l!==p||c!==m||u!==_){let g=1-a;const d=l*p+c*m+u*_+f*M,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const U=Math.sqrt(x),b=Math.atan2(U,d*y);g=Math.sin(g*b)/U,a=Math.sin(a*b)/U}const A=a*y;if(l=l*g+p*A,c=c*g+m*A,u=u*g+_*A,f=f*g+M*A,g===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],p=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*m-c*p,e[n+1]=l*_+u*p+c*f-a*m,e[n+2]=c*_+u*m+a*p-l*f,e[n+3]=u*_-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),p=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=p*u*f+c*m*_,this._y=c*m*f-p*u*_,this._z=c*u*_+p*m*f,this._w=c*u*f-p*m*_;break;case"YXZ":this._x=p*u*f+c*m*_,this._y=c*m*f-p*u*_,this._z=c*u*_-p*m*f,this._w=c*u*f+p*m*_;break;case"ZXY":this._x=p*u*f-c*m*_,this._y=c*m*f+p*u*_,this._z=c*u*_+p*m*f,this._w=c*u*f-p*m*_;break;case"ZYX":this._x=p*u*f-c*m*_,this._y=c*m*f+p*u*_,this._z=c*u*_-p*m*f,this._w=c*u*f+p*m*_;break;case"YZX":this._x=p*u*f+c*m*_,this._y=c*m*f+p*u*_,this._z=c*u*_-p*m*f,this._w=c*u*f-p*m*_;break;case"XZY":this._x=p*u*f-c*m*_,this._y=c*m*f-p*u*_,this._z=c*u*_+p*m*f,this._w=c*u*f+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,p=Math.sin(n*u)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uu.copy(this).projectOnVector(e),this.sub(Uu)}reflect(e){return this.sub(Uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uu=new H,Dm=new mo;class ts{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ol.copy(i.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),al.subVectors(this.max,Lo),as.subVectors(e.a,Lo),ls.subVectors(e.b,Lo),cs.subVectors(e.c,Lo),Zi.subVectors(ls,as),Qi.subVectors(cs,ls),Pr.subVectors(as,cs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Pr.z,Pr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Pr.z,0,-Pr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Pr.y,Pr.x,0];return!Nu(n,as,ls,cs,al)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,as,ls,cs,al))?!1:(ll.crossVectors(Zi,Qi),n=[ll.x,ll.y,ll.z],Nu(n,as,ls,cs,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new H,new H,new H,new H,new H,new H,new H,new H],Kn=new H,ol=new ts,as=new H,ls=new H,cs=new H,Zi=new H,Qi=new H,Pr=new H,Lo=new H,al=new H,ll=new H,br=new H;function Nu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),u=i.dot(br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const BM=new ts,Do=new H,Fu=new H;class go{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const n=Do.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Do,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Fu)),this.expandByPoint(Do.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new H,Ou=new H,cl=new H,Ji=new H,ku=new H,ul=new H,Bu=new H;class rp{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ou.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Ou);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cl),a=Ji.dot(this.direction),l=-Ji.dot(cl),c=Ji.lengthSq(),u=Math.abs(1-o*o);let f,p,m,_;if(u>0)if(f=o*l-a,p=o*a-l,_=s*u,f>=0)if(p>=-_)if(p<=_){const M=1/u;f*=M,p*=M,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-o*s+a)),p=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+c):(f=Math.max(0,-(o*s+a)),p=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+c);else p=o>0?-s:s,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ou).addScaledVector(cl,p),m}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){ku.subVectors(n,e),ul.subVectors(i,e),Bu.crossVectors(ku,ul);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(ul.crossVectors(Ji,ul));if(l<0)return null;const c=a*this.direction.dot(ku.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(Bu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,o,a,l,c,u,f,p,m,_,M,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,p,m,_,M,g)}set(e,n,i,r,s,o,a,l,c,u,f,p,m,_,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=p,d[3]=m,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=o*u,m=o*f,_=a*u,M=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=p-M*c,n[9]=-a*l,n[2]=M-p*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*u,m=l*f,_=c*u,M=c*f;n[0]=p+M*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=M+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*u,m=l*f,_=c*u,M=c*f;n[0]=p-M*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=M-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*u,m=o*f,_=a*u,M=a*f;n[0]=l*u,n[4]=_*c-m,n[8]=p*c+M,n[1]=l*f,n[5]=M*c+p,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-p*f,n[8]=_*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+_,n[10]=p-M*f}else if(e.order==="XZY"){const p=o*l,m=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=p*f+M,n[5]=o*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*u,n[10]=M*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,HM)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),er.crossVectors(i,Tn),er.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),er.crossVectors(i,Tn)),er.normalize(),hl.crossVectors(Tn,er),r[0]=er.x,r[4]=hl.x,r[8]=Tn.x,r[1]=er.y,r[5]=hl.y,r[9]=Tn.y,r[2]=er.z,r[6]=hl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],p=i[9],m=i[13],_=i[2],M=i[6],g=i[10],d=i[14],y=i[3],x=i[7],A=i[11],U=i[15],b=r[0],P=r[4],I=r[8],ee=r[12],S=r[1],C=r[5],$=r[9],q=r[13],ne=r[2],z=r[6],W=r[10],J=r[14],N=r[3],te=r[7],Q=r[11],le=r[15];return s[0]=o*b+a*S+l*ne+c*N,s[4]=o*P+a*C+l*z+c*te,s[8]=o*I+a*$+l*W+c*Q,s[12]=o*ee+a*q+l*J+c*le,s[1]=u*b+f*S+p*ne+m*N,s[5]=u*P+f*C+p*z+m*te,s[9]=u*I+f*$+p*W+m*Q,s[13]=u*ee+f*q+p*J+m*le,s[2]=_*b+M*S+g*ne+d*N,s[6]=_*P+M*C+g*z+d*te,s[10]=_*I+M*$+g*W+d*Q,s[14]=_*ee+M*q+g*J+d*le,s[3]=y*b+x*S+A*ne+U*N,s[7]=y*P+x*C+A*z+U*te,s[11]=y*I+x*$+A*W+U*Q,s[15]=y*ee+x*q+A*J+U*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],m=e[14],_=e[3],M=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*p+i*c*p+r*a*m-i*l*m)+M*(+n*l*m-n*c*p+s*o*p-r*o*m+r*c*u-s*l*u)+g*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*p+r*o*f-i*o*p+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],m=e[11],_=e[12],M=e[13],g=e[14],d=e[15],y=f*g*c-M*p*c+M*l*m-a*g*m-f*l*d+a*p*d,x=_*p*c-u*g*c-_*l*m+o*g*m+u*l*d-o*p*d,A=u*M*c-_*f*c+_*a*m-o*M*m-u*a*d+o*f*d,U=_*f*l-u*M*l-_*a*p+o*M*p+u*a*g-o*f*g,b=n*y+i*x+r*A+s*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=y*P,e[1]=(M*p*s-f*g*s-M*r*m+i*g*m+f*r*d-i*p*d)*P,e[2]=(a*g*s-M*l*s+M*r*c-i*g*c-a*r*d+i*l*d)*P,e[3]=(f*l*s-a*p*s-f*r*c+i*p*c+a*r*m-i*l*m)*P,e[4]=x*P,e[5]=(u*g*s-_*p*s+_*r*m-n*g*m-u*r*d+n*p*d)*P,e[6]=(_*l*s-o*g*s-_*r*c+n*g*c+o*r*d-n*l*d)*P,e[7]=(o*p*s-u*l*s+u*r*c-n*p*c-o*r*m+n*l*m)*P,e[8]=A*P,e[9]=(_*f*s-u*M*s-_*i*m+n*M*m+u*i*d-n*f*d)*P,e[10]=(o*M*s-_*a*s+_*i*c-n*M*c-o*i*d+n*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*P,e[12]=U*P,e[13]=(u*M*r-_*f*r+_*i*p-n*M*p-u*i*g+n*f*g)*P,e[14]=(_*a*r-o*M*r-_*i*l+n*M*l+o*i*g-n*a*g)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*p+n*a*p)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,p=s*c,m=s*u,_=s*f,M=o*u,g=o*f,d=a*f,y=l*c,x=l*u,A=l*f,U=i.x,b=i.y,P=i.z;return r[0]=(1-(M+d))*U,r[1]=(m+A)*U,r[2]=(_-x)*U,r[3]=0,r[4]=(m-A)*b,r[5]=(1-(p+d))*b,r[6]=(g+y)*b,r[7]=0,r[8]=(_+x)*P,r[9]=(g-y)*P,r[10]=(1-(p+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,_;if(a===zi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Lc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),p=(n+e)*c,m=(i+r)*u;let _,M;if(a===zi)_=(o+s)*f,M=-2*f;else if(a===Lc)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new H,Zn=new ht,zM=new H(0,0,0),HM=new H(1,1,1),er=new H,hl=new H,Tn=new H,Im=new ht,Um=new mo;class ai{constructor(e=0,n=0,i=0,r=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class sp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const Nm=new H,hs=new mo,wi=new ht,fl=new H,Io=new H,GM=new H,WM=new mo,Fm=new H(1,0,0),Om=new H(0,1,0),km=new H(0,0,1),Bm={type:"added"},XM={type:"removed"},fs={type:"childadded",child:null},zu={type:"childremoved",child:null};class jt extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new H,n=new ai,i=new mo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,n){return Nm.copy(e).applyQuaternion(this.quaternion),this.position.add(Nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fl.copy(e):fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Io,fl,this.up):wi.lookAt(fl,Io,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(wi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XM),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,GM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,WM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new H(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new H,Ai=new H,Hu=new H,Ci=new H,ds=new H,ps=new H,zm=new H,Vu=new H,Gu=new H,Wu=new H,Xu=new Pt,Yu=new Pt,ju=new Pt;class Bn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Ai.subVectors(i,n),Hu.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Ai),l=Qn.dot(Hu),c=Ai.dot(Ai),u=Ai.dot(Hu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(c*l-a*u)*p,_=(o*u-a*l)*p;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Xu.setScalar(0),Yu.setScalar(0),ju.setScalar(0),Xu.fromBufferAttribute(e,n),Yu.fromBufferAttribute(e,i),ju.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xu,s.x),o.addScaledVector(Yu,s.y),o.addScaledVector(ju,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Ai.subVectors(e,n),Qn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),ps.subVectors(s,i),Vu.subVectors(e,i);const l=ds.dot(Vu),c=ps.dot(Vu);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const u=ds.dot(Gu),f=ps.dot(Gu);if(u>=0&&f<=u)return n.copy(r);const p=l*f-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ds,o);Wu.subVectors(e,s);const m=ds.dot(Wu),_=ps.dot(Wu);if(_>=0&&m<=_)return n.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ps,a);const g=u*_-m*f;if(g<=0&&f-u>=0&&m-_>=0)return zm.subVectors(s,r),a=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(zm,a);const d=1/(g+M+p);return o=M*d,a=p*d,n.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=ip(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=fi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=fi){const i=T_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return ct.fromWorkingColorSpace(tn.copy(this),e),Math.round(Xt(tn.r*255,0,255))*65536+Math.round(Xt(tn.g*255,0,255))*256+Math.round(Xt(tn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=fi){ct.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==fi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(dl);const i=na(tr.h,dl.h,n),r=na(tr.s,dl.s,n),s=na(tr.l,dl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Ve;Ve.NAMES=T_;let YM=0;class Rr extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=po(),this.name="",this.type="Material",this.blending=Vi,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ea,this.blendDst=Ta,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ea&&(i.blendSrc=this.blendSrc),this.blendDst!==Ta&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class so extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fi=jM();function jM(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function $M(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Xt(t,-65504,65504),Fi.floatView[0]=t;const e=Fi.uint32View[0],n=e>>23&511;return Fi.baseTable[n]+((e&8388607)>>Fi.shiftTable[n])}function qM(t){const e=t>>10;return Fi.uint32View[0]=Fi.mantissaTable[Fi.offsetTable[e]+(t&1023)]+Fi.exponentTable[e],Fi.floatView[0]}const Hm={toHalfFloat:$M,fromHalfFloat:qM},It=new H,pl=new tt;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Am,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pl.fromBufferAttribute(this,n),pl.applyMatrix3(e),this.setXY(n,pl.x,pl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ms(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ms(n,this.array)),n}setX(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ms(n,this.array)),n}setY(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ms(n,this.array)),n}setZ(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ms(n,this.array)),n}setW(e,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=an(n,this.array),i=an(i,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class w_ extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class A_ extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KM=0;const Nn=new ht,qu=new jt,ms=new H,wn=new ts,Uo=new ts,Ht=new H;class En extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?A_:w_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(wn.min,Uo.min),wn.expandByPoint(Ht),Ht.addVectors(wn.max,Uo.max),wn.expandByPoint(Ht)):(wn.expandByPoint(Uo.min),wn.expandByPoint(Uo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Ht.add(ms)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new H,l[I]=new H;const c=new H,u=new H,f=new H,p=new tt,m=new tt,_=new tt,M=new H,g=new H;function d(I,ee,S){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,ee),f.fromBufferAttribute(i,S),p.fromBufferAttribute(s,I),m.fromBufferAttribute(s,ee),_.fromBufferAttribute(s,S),u.sub(c),f.sub(c),m.sub(p),_.sub(p);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(C),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(C),a[I].add(M),a[ee].add(M),a[S].add(M),l[I].add(g),l[ee].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,ee=y.length;I<ee;++I){const S=y[I],C=S.start,$=S.count;for(let q=C,ne=C+$;q<ne;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const x=new H,A=new H,U=new H,b=new H;function P(I){U.fromBufferAttribute(r,I),b.copy(U);const ee=a[I];x.copy(ee),x.sub(U.multiplyScalar(U.dot(ee))).normalize(),A.crossVectors(b,ee);const C=A.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,C)}for(let I=0,ee=y.length;I<ee;++I){const S=y[I],C=S.start,$=S.count;for(let q=C,ne=C+$;q<ne;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),M=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,p=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let d=0;d<u;d++)p[_++]=c[m++]}return new Wn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const p=c[u],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let p=0,m=f.length;p<m;p++)u.push(f[p].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new ht,Lr=new rp,ml=new go,Gm=new H,gl=new H,vl=new H,_l=new H,Ku=new H,xl=new H,Wm=new H,yl=new H;class un extends jt{constructor(e=new En,n=new so){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ku.fromBufferAttribute(f,e),o?xl.addScaledVector(Ku,u):xl.addScaledVector(Ku.sub(n),u))}n.add(xl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(ml.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(ml,Gm)===null||Lr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Vm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Vm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const g=p[_],d=o[g.materialIndex],y=Math.max(g.start,m.start),x=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let A=y,U=x;A<U;A+=3){const b=a.getX(A),P=a.getX(A+1),I=a.getX(A+2);r=Sl(this,d,e,i,c,u,f,b,P,I),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const y=a.getX(g),x=a.getX(g+1),A=a.getX(g+2);r=Sl(this,o,e,i,c,u,f,y,x,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=p.length;_<M;_++){const g=p[_],d=o[g.materialIndex],y=Math.max(g.start,m.start),x=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=y,U=x;A<U;A+=3){const b=A,P=A+1,I=A+2;r=Sl(this,d,e,i,c,u,f,b,P,I),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=_,d=M;g<d;g+=3){const y=g,x=g+1,A=g+2;r=Sl(this,o,e,i,c,u,f,y,x,A),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ZM(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function Sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,gl),t.getVertexPosition(l,vl),t.getVertexPosition(c,_l);const u=ZM(t,e,n,i,gl,vl,_l,Wm);if(u){const f=new H;Bn.getBarycoord(Wm,gl,vl,_l,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,f,new tt)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,f,new tt)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new H,materialIndex:0};Bn.getNormal(gl,vl,_l,p.normal),u.face=p,u.barycoord=f}return u}class Qr extends En{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let p=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(f,2));function _(M,g,d,y,x,A,U,b,P,I,ee){const S=A/P,C=U/I,$=A/2,q=U/2,ne=b/2,z=P+1,W=I+1;let J=0,N=0;const te=new H;for(let Q=0;Q<W;Q++){const le=Q*C-q;for(let xe=0;xe<z;xe++){const Le=xe*S-$;te[M]=Le*y,te[g]=le*x,te[d]=ne,c.push(te.x,te.y,te.z),te[M]=0,te[g]=0,te[d]=b>0?1:-1,u.push(te.x,te.y,te.z),f.push(xe/P),f.push(1-Q/I),J+=1}}for(let Q=0;Q<I;Q++)for(let le=0;le<P;le++){const xe=p+le+z*Q,Le=p+le+z*(Q+1),Z=p+(le+1)+z*(Q+1),oe=p+(le+1)+z*Q;l.push(xe,Le,oe),l.push(Le,Z,oe),N+=6}a.addGroup(m,N,ee),m+=N,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function QM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function C_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ur={clone:oo,merge:ln};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class R_ extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new H,Xm=new tt,Ym=new tt;class kn extends R_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,Xm,Ym),n.subVectors(Ym,Xm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class tE extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new kn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new kn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new kn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new kn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new kn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,p,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class P_ extends dn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nE extends Cn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new P_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qr(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Ut});s.uniforms.tEquirect.value=n;const o=new un(r,s),a=n.minFilter;return n.minFilter===dr&&(n.minFilter=rn),new tE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Zu=new H,iE=new H,rE=new je;class Or{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zu.subVectors(i,n).cross(iE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rE.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new go,Ml=new H;class op{constructor(e=new Or,n=new Or,i=new Or,r=new Or,s=new Or,o=new Or){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],p=r[7],m=r[8],_=r[9],M=r[10],g=r[11],d=r[12],y=r[13],x=r[14],A=r[15];if(i[0].setComponents(l-s,p-c,g-m,A-d).normalize(),i[1].setComponents(l+s,p+c,g+m,A+d).normalize(),i[2].setComponents(l+o,p+u,g+_,A+y).normalize(),i[3].setComponents(l-o,p-u,g-_,A-y).normalize(),i[4].setComponents(l-a,p-f,g-M,A-x).normalize(),n===zi)i[5].setComponents(l+a,p+f,g+M,A+x).normalize();else if(n===Lc)i[5].setComponents(a,f,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function b_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sE(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((m,_)=>m.start-_.start);let p=0;for(let m=1;m<f.length;m++){const _=f[p],M=f[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,f[p]=M)}f.length=p+1;for(let m=0,_=f.length;m<_;m++){const M=f[m];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Da extends En{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,p=n/l,m=[],_=[],M=[],g=[];for(let d=0;d<u;d++){const y=d*p-o;for(let x=0;x<c;x++){const A=x*f-s;_.push(A,-y,0),M.push(0,0,1),g.push(x/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+c*d,A=y+c*(d+1),U=y+1+c*(d+1),b=y+1+c*d;m.push(x,A,b),m.push(A,U,b)}this.setIndex(m),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_E=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,LE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,GE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,JE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,r1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,M1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,W1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,X1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:oE,alphahash_pars_fragment:aE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:hE,aomap_fragment:fE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:vE,bsdfs:_E,iridescence_fragment:xE,bumpmap_pars_fragment:yE,clipping_planes_fragment:SE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:TE,color_fragment:wE,color_pars_fragment:AE,color_pars_vertex:CE,color_vertex:RE,common:PE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:LE,displacementmap_pars_vertex:DE,displacementmap_vertex:IE,emissivemap_fragment:UE,emissivemap_pars_fragment:NE,colorspace_fragment:FE,colorspace_pars_fragment:OE,envmap_fragment:kE,envmap_common_pars_fragment:BE,envmap_pars_fragment:zE,envmap_pars_vertex:HE,envmap_physical_pars_fragment:QE,envmap_vertex:VE,fog_vertex:GE,fog_pars_vertex:WE,fog_fragment:XE,fog_pars_fragment:YE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:$E,lights_lambert_fragment:qE,lights_lambert_pars_fragment:KE,lights_pars_begin:ZE,lights_toon_fragment:JE,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:r1,lights_fragment_begin:s1,lights_fragment_maps:o1,lights_fragment_end:a1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:c1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:h1,map_fragment:f1,map_pars_fragment:d1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:v1,morphinstance_vertex:_1,morphcolor_vertex:x1,morphnormal_vertex:y1,morphtarget_pars_vertex:S1,morphtarget_vertex:M1,normal_fragment_begin:E1,normal_fragment_maps:T1,normal_pars_fragment:w1,normal_pars_vertex:A1,normal_vertex:C1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:D1,opaque_fragment:I1,packing:U1,premultiplied_alpha_fragment:N1,project_vertex:F1,dithering_fragment:O1,dithering_pars_fragment:k1,roughnessmap_fragment:B1,roughnessmap_pars_fragment:z1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:V1,shadowmap_vertex:G1,shadowmask_pars_fragment:W1,skinbase_vertex:X1,skinning_pars_vertex:Y1,skinning_vertex:j1,skinnormal_vertex:$1,specularmap_fragment:q1,specularmap_pars_fragment:K1,tonemapping_fragment:Z1,tonemapping_pars_fragment:Q1,transmission_fragment:J1,transmission_pars_fragment:eT,uv_pars_fragment:tT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:rT,background_vert:sT,background_frag:oT,backgroundCube_vert:aT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:hT,depth_frag:fT,distanceRGBA_vert:dT,distanceRGBA_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:vT,linedashed_frag:_T,meshbasic_vert:xT,meshbasic_frag:yT,meshlambert_vert:ST,meshlambert_frag:MT,meshmatcap_vert:ET,meshmatcap_frag:TT,meshnormal_vert:wT,meshnormal_frag:AT,meshphong_vert:CT,meshphong_frag:RT,meshphysical_vert:PT,meshphysical_frag:bT,meshtoon_vert:LT,meshtoon_frag:DT,points_vert:IT,points_frag:UT,shadow_vert:NT,shadow_frag:FT,sprite_vert:OT,sprite_frag:kT},Se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},di={basic:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ln([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ln([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ln([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ln([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ln([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ln([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:ln([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:ln([Se.lights,Se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};di.physical={uniforms:ln([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const El={r:0,b:0,g:0},Ir=new ai,BT=new ht;function zT(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,f=null,p=0,m=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?n:e).get(x)),x}function M(y){let x=!1;const A=_(y);A===null?d(a,l):A&&A.isColor&&(d(A,1),x=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Jc)?(u===void 0&&(u=new un(new Qr(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:oo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ir.copy(x.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(Ir)),u.material.toneMapped=ct.getTransfer(A.colorSpace)!==mt,(f!==A||p!==A.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,p=A.version,m=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new un(new Da(2,2),new sn({name:"BackgroundMaterial",uniforms:oo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(A.colorSpace)!==mt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,p=A.version,m=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(El,C_(t)),i.buffers.color.setClear(El.r,El.g,El.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:M,addToRenderList:g}}function HT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(S,C,$,q,ne){let z=!1;const W=f(q,$,C);s!==W&&(s=W,c(s.object)),z=m(S,q,$,ne),z&&_(S,q,$,ne),ne!==null&&e.update(ne,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,A(S,C,$,q),ne!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,C,$){const q=$.wireframe===!0;let ne=i[S.id];ne===void 0&&(ne={},i[S.id]=ne);let z=ne[C.id];z===void 0&&(z={},ne[C.id]=z);let W=z[q];return W===void 0&&(W=p(l()),z[q]=W),W}function p(S){const C=[],$=[],q=[];for(let ne=0;ne<n;ne++)C[ne]=0,$[ne]=0,q[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:$,attributeDivisors:q,object:S,attributes:{},index:null}}function m(S,C,$,q){const ne=s.attributes,z=C.attributes;let W=0;const J=$.getAttributes();for(const N in J)if(J[N].location>=0){const Q=ne[N];let le=z[N];if(le===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;W++}return s.attributesNum!==W||s.index!==q}function _(S,C,$,q){const ne={},z=C.attributes;let W=0;const J=$.getAttributes();for(const N in J)if(J[N].location>=0){let Q=z[N];Q===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),ne[N]=le,W++}s.attributes=ne,s.attributesNum=W,s.index=q}function M(){const S=s.newAttributes;for(let C=0,$=S.length;C<$;C++)S[C]=0}function g(S){d(S,0)}function d(S,C){const $=s.newAttributes,q=s.enabledAttributes,ne=s.attributeDivisors;$[S]=1,q[S]===0&&(t.enableVertexAttribArray(S),q[S]=1),ne[S]!==C&&(t.vertexAttribDivisor(S,C),ne[S]=C)}function y(){const S=s.newAttributes,C=s.enabledAttributes;for(let $=0,q=C.length;$<q;$++)C[$]!==S[$]&&(t.disableVertexAttribArray($),C[$]=0)}function x(S,C,$,q,ne,z,W){W===!0?t.vertexAttribIPointer(S,C,$,ne,z):t.vertexAttribPointer(S,C,$,q,ne,z)}function A(S,C,$,q){M();const ne=q.attributes,z=$.getAttributes(),W=C.defaultAttributeValues;for(const J in z){const N=z[J];if(N.location>=0){let te=ne[J];if(te===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const Q=te.normalized,le=te.itemSize,xe=e.get(te);if(xe===void 0)continue;const Le=xe.buffer,Z=xe.type,oe=xe.bytesPerElement,ce=Z===t.INT||Z===t.UNSIGNED_INT||te.gpuType===qd;if(te.isInterleavedBufferAttribute){const ve=te.data,Ie=ve.stride,Fe=te.offset;if(ve.isInstancedInterleavedBuffer){for(let $e=0;$e<N.locationSize;$e++)d(N.location+$e,ve.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let $e=0;$e<N.locationSize;$e++)g(N.location+$e);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let $e=0;$e<N.locationSize;$e++)x(N.location+$e,le/N.locationSize,Z,Q,Ie*oe,(Fe+le/N.locationSize*$e)*oe,ce)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<N.locationSize;ve++)d(N.location+ve,te.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<N.locationSize;ve++)g(N.location+ve);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let ve=0;ve<N.locationSize;ve++)x(N.location+ve,le/N.locationSize,Z,Q,le*oe,le/N.locationSize*ve*oe,ce)}}else if(W!==void 0){const Q=W[J];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(N.location,Q);break;case 3:t.vertexAttrib3fv(N.location,Q);break;case 4:t.vertexAttrib4fv(N.location,Q);break;default:t.vertexAttrib1fv(N.location,Q)}}}}y()}function U(){I();for(const S in i){const C=i[S];for(const $ in C){const q=C[$];for(const ne in q)u(q[ne].object),delete q[ne];delete C[$]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const $ in C){const q=C[$];for(const ne in q)u(q[ne].object),delete q[ne];delete C[$]}delete i[S.id]}function P(S){for(const C in i){const $=i[C];if($[S.id]===void 0)continue;const q=$[S.id];for(const ne in q)u(q[ne].object),delete q[ne];delete $[S.id]}}function I(){ee(),o=!0,s!==r&&(s=r,c(s.object))}function ee(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:ee,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:y}}function VT(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_];n.update(m,i,1)}function l(c,u,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],p[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M];for(let M=0;M<p.length;M++)n.update(_,i,p[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Vn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ji&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pn&&!I)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:A,vertexTextures:U,maxSamples:b}}function WT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Or,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=u(f,p,0)},this.setState=function(f,p,m){const _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,x=y*4;let A=d.clippingState||null;l.value=A,A=u(_,p,x,m);for(let U=0;U!==x;++U)A[U]=n[U];d.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,p,m,_){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const d=m+M*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,A=m;x!==M;++x,A+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(g,A),g[A+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function XT(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=eo:a===xf&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cc||a===xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nE(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ap extends R_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ns=4,jm=[.125,.215,.35,.446,.526,.582],zr=20,Qu=new ap,$m=new Ve;let Ju=null,eh=0,th=0,nh=!1;const kr=(1+Math.sqrt(5))/2,_s=1/kr,qm=[new H(-kr,_s,0),new H(kr,_s,0),new H(-_s,0,kr),new H(_s,0,kr),new H(0,kr,-_s),new H(0,kr,_s),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class $f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ju=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:bn,format:Vn,colorSpace:xi,depthBuffer:!1},r=Km(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YT(s)),this._blurMaterial=jT(s,e,n)}return r}_compileMaterial(e){const n=new un(this._lodPlanes[0],e);this._renderer.compile(n,Qu)}_sceneToCubeUV(e,n,i,r){const a=new kn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor($m),u.toneMapping=Mr,u.autoClear=!1;const m=new so({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new un(new Qr,m);let M=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,M=!0):(m.color.copy($m),M=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;Tl(r,y*x,d>2?x:0,x,x),u.setRenderTarget(r),M&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new un(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qm[(r-s-1)%qm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new un(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zr-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):zr;g>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${zr}`);const d=[];let y=0;for(let P=0;P<zr;++P){const I=P/M,ee=Math.exp(-I*I/2);d.push(ee),P===0?y+=ee:P<g&&(y+=2*ee)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-i;const A=this._sizeLods[r],U=3*A*(r>x-Ns?r-x+Ns:0),b=4*(this._cubeSize-A);Tl(n,U,b,3*A,2*A),l.setRenderTarget(n),l.render(f,Qu)}}function YT(t){const e=[],n=[],i=[];let r=t;const s=t-Ns+1+jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ns?l=jm[o-t+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,p=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,M=3,g=2,d=1,y=new Float32Array(M*_*m),x=new Float32Array(g*_*m),A=new Float32Array(d*_*m);for(let b=0;b<m;b++){const P=b%3*2/3-1,I=b>2?0:-1,ee=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];y.set(ee,M*_*b),x.set(p,g*_*b);const S=[b,b,b,b,b,b];A.set(S,d*_*b)}const U=new En;U.setAttribute("position",new Wn(y,M)),U.setAttribute("uv",new Wn(x,g)),U.setAttribute("faceIndex",new Wn(A,d)),e.push(U),r>Ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Km(t,e,n){const i=new Cn(t,e,n);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jT(t,e,n){const i=new Float32Array(zr),r=new H(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Zm(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Qm(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $T(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cc||l===xf,u=l===eo||l===to;if(c||u){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new $f(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new $f(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function qT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KT(t,e,n,i){const r={},s=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const M=p.morphAttributes[_];for(let g=0,d=M.length;g<d;g++)e.remove(M[g])}p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const M=m[_];for(let g=0,d=M.length;g<d;g++)e.update(M[g],t.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,_=f.attributes.position;let M=0;if(m!==null){const y=m.array;M=m.version;for(let x=0,A=y.length;x<A;x+=3){const U=y[x+0],b=y[x+1],P=y[x+2];p.push(U,b,b,P,P,U)}}else if(_!==void 0){const y=_.array;M=_.version;for(let x=0,A=y.length/3-1;x<A;x+=3){const U=x+0,b=x+1,P=x+2;p.push(U,b,b,P,P,U)}}else return;const g=new(S_(p)?A_:w_)(p,1);g.version=M;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ZT(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*o),n.update(m,i,1)}function c(p,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,p*o,_),n.update(m,i,_))}function u(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,_);let g=0;for(let d=0;d<_;d++)g+=m[d];n.update(g,i,1)}function f(p,m,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)c(p[d]/o,m[d],M[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,M,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y];for(let y=0;y<M.length;y++)n.update(d,i,M[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function QT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JT(t,e,n){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let A=0;_===!0&&(A=1),M===!0&&(A=2),g===!0&&(A=3);let U=a.attributes.position.count*A,b=1;U>e.maxTextureSize&&(b=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*b*4*f),I=new E_(P,U,b,f);I.type=Pn,I.needsUpdate=!0;const ee=A*4;for(let C=0;C<f;C++){const $=d[C],q=y[C],ne=x[C],z=U*b*4*C;for(let W=0;W<$.count;W++){const J=W*ee;_===!0&&(r.fromBufferAttribute($,W),P[z+J+0]=r.x,P[z+J+1]=r.y,P[z+J+2]=r.z,P[z+J+3]=0),M===!0&&(r.fromBufferAttribute(q,W),P[z+J+4]=r.x,P[z+J+5]=r.y,P[z+J+6]=r.z,P[z+J+7]=0),g===!0&&(r.fromBufferAttribute(ne,W),P[z+J+8]=r.x,P[z+J+9]=r.y,P[z+J+10]=r.z,P[z+J+11]=ne.itemSize===4?r.w:1)}}p={count:f,texture:I,size:new tt(U,b)},i.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function ew(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class cp extends dn{constructor(e,n,i,r,s,o,a,l,c,u=Gs){if(u!==Gs&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gs&&(i=Zr),i===void 0&&u===ro&&(i=io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L_=new dn,Jm=new cp(1,1),D_=new E_,I_=new kM,U_=new P_,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=tg[e];n===void 0&&(n=new Int32Array(e),tg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;rg.set(i),t.uniformMatrix2fv(this.addr,!1,rg),zt(n,i)}}function ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;ig.set(i),t.uniformMatrix3fv(this.addr,!1,ig),zt(n,i)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;ng.set(i),t.uniformMatrix4fv(this.addr,!1,ng),zt(n,i)}}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function gw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jm.compareFunction=y_,s=Jm):s=L_,n.setTexture2D(e||s,r)}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||I_,r)}function _w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||U_,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||D_,r)}function yw(t){switch(t){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return hw;case 5125:return fw;case 36294:return dw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return xw}}function Sw(t,e){t.uniform1fv(this.addr,e)}function Mw(t,e){const n=vo(e,this.size,2);t.uniform2fv(this.addr,n)}function Ew(t,e){const n=vo(e,this.size,3);t.uniform3fv(this.addr,n)}function Tw(t,e){const n=vo(e,this.size,4);t.uniform4fv(this.addr,n)}function ww(t,e){const n=vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Aw(t,e){const n=vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cw(t,e){const n=vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Rw(t,e){t.uniform1iv(this.addr,e)}function Pw(t,e){t.uniform2iv(this.addr,e)}function bw(t,e){t.uniform3iv(this.addr,e)}function Lw(t,e){t.uniform4iv(this.addr,e)}function Dw(t,e){t.uniform1uiv(this.addr,e)}function Iw(t,e){t.uniform2uiv(this.addr,e)}function Uw(t,e){t.uniform3uiv(this.addr,e)}function Nw(t,e){t.uniform4uiv(this.addr,e)}function Fw(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||L_,s[o])}function Ow(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||I_,s[o])}function kw(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||U_,s[o])}function Bw(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||D_,s[o])}function zw(t){switch(t){case 5126:return Sw;case 35664:return Mw;case 35665:return Ew;case 35666:return Tw;case 35674:return ww;case 35675:return Aw;case 35676:return Cw;case 5124:case 35670:return Rw;case 35667:case 35671:return Pw;case 35668:case 35672:return bw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Iw;case 36295:return Uw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Bw}}class Hw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yw(n.type)}}class Vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zw(n.type)}}class Gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function sg(t,e){t.seq.push(e),t.map[e.id]=e}function Ww(t,e,n){const i=t.name,r=i.length;for(ih.lastIndex=0;;){const s=ih.exec(i),o=ih.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sg(n,c===void 0?new Hw(a,t,e):new Vw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Gw(a),sg(n,f)),n=f}}}class ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Ww(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function og(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Xw=37297;let Yw=0;function jw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function $w(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===bc&&n===Pc?i="LinearDisplayP3ToLinearSRGB":e===Pc&&n===bc&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case tu:return[i,"LinearTransferOETF"];case fi:case np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jw(t.getShaderSource(e),o)}else return r}function qw(t,e){const n=$w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Kw(t,e){let n;switch(e){case r_:n="Linear";break;case s_:n="Reinhard";break;case o_:n="Cineon";break;case a_:n="ACESFilmic";break;case l_:n="AgX";break;case c_:n="Neutral";break;case tM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wl=new H;function Zw(){ct.getLuminanceCoefficients(wl);const t=wl.x.toFixed(4),e=wl.y.toFixed(4),n=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Jw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xo(t){return t!==""}function lg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tA=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(t){return t.replace(tA,iA)}const nA=new Map;function iA(t,e){let n=Ye[e];if(n===void 0){const i=nA.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qf(n)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(t){return t.replace(rA,sA)}function sA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===n_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function aA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function cA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case i_:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case eM:e="ENVMAP_BLENDING_ADD";break}return e}function uA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=oA(n),c=aA(n),u=lA(n),f=cA(n),p=uA(n),m=Qw(n),_=Jw(s),M=r.createProgram();let g,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xo).join(`
`),d.length>0&&(d+=`
`)):(g=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),d=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Mr?"#define TONE_MAPPING":"",n.toneMapping!==Mr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Mr?Kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,qw("linearToOutputTexel",n.outputColorSpace),Zw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),o=qf(o),o=lg(o,n),o=cg(o,n),a=qf(a),a=lg(a,n),a=cg(a,n),o=ug(o),a=ug(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+g+o,A=y+d+a,U=og(r,r.VERTEX_SHADER,x),b=og(r,r.FRAGMENT_SHADER,A);r.attachShader(M,U),r.attachShader(M,b),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(C){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(M).trim(),q=r.getShaderInfoLog(U).trim(),ne=r.getShaderInfoLog(b).trim();let z=!0,W=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,U,b);else{const J=ag(r,U,"vertex"),N=ag(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+J+`
`+N)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||ne==="")&&(W=!1);W&&(C.diagnostics={runnable:z,programLog:$,vertexShader:{log:q,prefix:g},fragmentShader:{log:ne,prefix:d}})}r.deleteShader(U),r.deleteShader(b),I=new ec(r,M),ee=eA(r,M)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let ee;this.getAttributes=function(){return ee===void 0&&P(this),ee};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,Xw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=b,this}let fA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pA(e),n.set(e,i)),i}}class pA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function mA(t,e,n,i,r,s,o){const a=new sp,l=new dA,c=new Set,u=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,C,$,q,ne){const z=q.fog,W=ne.geometry,J=S.isMeshStandardMaterial?q.environment:null,N=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),te=N&&N.mapping===Jc?N.image.height:null,Q=M[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const le=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=le!==void 0?le.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let Z,oe,ce,ve;if(Q){const Zt=di[Q];Z=Zt.vertexShader,oe=Zt.fragmentShader}else Z=S.vertexShader,oe=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const Ie=t.getRenderTarget(),Fe=ne.isInstancedMesh===!0,$e=ne.isBatchedMesh===!0,st=!!S.map,Ke=!!S.matcap,O=!!N,qt=!!S.aoMap,Ze=!!S.lightMap,ot=!!S.bumpMap,Be=!!S.normalMap,pt=!!S.displacementMap,He=!!S.emissiveMap,L=!!S.metalnessMap,w=!!S.roughnessMap,X=S.anisotropy>0,se=S.clearcoat>0,de=S.dispersion>0,re=S.iridescence>0,Ue=S.sheen>0,Me=S.transmission>0,Ae=X&&!!S.anisotropyMap,Qe=se&&!!S.clearcoatMap,_e=se&&!!S.clearcoatNormalMap,Pe=se&&!!S.clearcoatRoughnessMap,ze=re&&!!S.iridescenceMap,Ne=re&&!!S.iridescenceThicknessMap,ye=Ue&&!!S.sheenColorMap,Je=Ue&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Xe=!!S.specularColorMap,k=!!S.specularIntensityMap,Te=Me&&!!S.transmissionMap,B=Me&&!!S.thicknessMap,ae=!!S.gradientMap,Ee=!!S.alphaMap,we=S.alphaTest>0,it=!!S.alphaHash,At=!!S.extensions;let Kt=Mr;S.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const at={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:oe,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:$e,batchingColor:$e&&ne._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ne.instanceColor!==null,instancingMorph:Fe&&ne.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:xi,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:Ke,envMap:O,envMapMode:O&&N.mapping,envMapCubeUVHeight:te,aoMap:qt,lightMap:Ze,bumpMap:ot,normalMap:Be,displacementMap:m&&pt,emissiveMap:He,normalMapObjectSpace:Be&&S.normalMapType===sM,normalMapTangentSpace:Be&&S.normalMapType===tp,metalnessMap:L,roughnessMap:w,anisotropy:X,anisotropyMap:Ae,clearcoat:se,clearcoatMap:Qe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Pe,dispersion:de,iridescence:re,iridescenceMap:ze,iridescenceThicknessMap:Ne,sheen:Ue,sheenColorMap:ye,sheenRoughnessMap:Je,specularMap:ke,specularColorMap:Xe,specularIntensityMap:k,transmission:Me,transmissionMap:Te,thicknessMap:B,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Vi&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:we,alphaHash:it,combine:S.combine,mapUv:st&&g(S.map.channel),aoMapUv:qt&&g(S.aoMap.channel),lightMapUv:Ze&&g(S.lightMap.channel),bumpMapUv:ot&&g(S.bumpMap.channel),normalMapUv:Be&&g(S.normalMap.channel),displacementMapUv:pt&&g(S.displacementMap.channel),emissiveMapUv:He&&g(S.emissiveMap.channel),metalnessMapUv:L&&g(S.metalnessMap.channel),roughnessMapUv:w&&g(S.roughnessMap.channel),anisotropyMapUv:Ae&&g(S.anisotropyMap.channel),clearcoatMapUv:Qe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Je&&g(S.sheenRoughnessMap.channel),specularMapUv:ke&&g(S.specularMap.channel),specularColorMapUv:Xe&&g(S.specularColorMap.channel),specularIntensityMapUv:k&&g(S.specularIntensityMap.channel),transmissionMapUv:Te&&g(S.transmissionMap.channel),thicknessMapUv:B&&g(S.thicknessMap.channel),alphaMapUv:Ee&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Be||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!W.attributes.uv&&(st||Ee),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:ne.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ii,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:At&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&S.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function y(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const $ in S.defines)C.push($),C.push(S.defines[$]);return S.isRawShaderMaterial===!1&&(x(C,S),A(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function x(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function A(S,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reverseDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),S.push(a.mask)}function U(S){const C=M[S.type];let $;if(C){const q=di[C];$=ur.clone(q.uniforms)}else $=S.uniforms;return $}function b(S,C){let $;for(let q=0,ne=u.length;q<ne;q++){const z=u[q];if(z.cacheKey===C){$=z,++$.usedTimes;break}}return $===void 0&&($=new hA(t,C,S,s),u.push($)),$}function P(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function I(S){l.remove(S)}function ee(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:U,acquireProgram:b,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:ee}}function gA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function vA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,p,m,_,M,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:_,renderOrder:f.renderOrder,z:M,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=M,d.group=g),e++,d}function a(f,p,m,_,M,g){const d=o(f,p,m,_,M,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,p,m,_,M,g){const d=o(f,p,m,_,M,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,p){n.length>1&&n.sort(f||vA),i.length>1&&i.sort(p||fg),r.length>1&&r.sort(p||fg)}function u(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function _A(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dg,t.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ve};break;case"SpotLight":n={position:new H,direction:new H,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function yA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SA=0;function MA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function EA(t){const e=new xA,n=yA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ht,o=new ht;function a(c){let u=0,f=0,p=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let m=0,_=0,M=0,g=0,d=0,y=0,x=0,A=0,U=0,b=0,P=0;c.sort(MA);for(let ee=0,S=c.length;ee<S;ee++){const C=c[ee],$=C.color,q=C.intensity,ne=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=$.r*q,f+=$.g*q,p+=$.b*q;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],q);P++}else if(C.isDirectionalLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,N=n.get(C);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=C.shadow.matrix,y++}i.directional[m]=W,m++}else if(C.isSpotLight){const W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy($).multiplyScalar(q),W.distance=ne,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[M]=W;const J=C.shadow;if(C.map&&(i.spotLightMap[U]=C.map,U++,J.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[M]=J.matrix,C.castShadow){const N=n.get(C);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[M]=N,i.spotShadowMap[M]=z,A++}M++}else if(C.isRectAreaLight){const W=e.get(C);W.color.copy($).multiplyScalar(q),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=W,g++}else if(C.isPointLight){const W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const J=C.shadow,N=n.get(C);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=C.shadow.matrix,x++}i.point[_]=W,_++}else if(C.isHemisphereLight){const W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(q),W.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[d]=W,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=p;const I=i.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==M||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==A||I.numSpotMaps!==U||I.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=A+U-b,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,I.directionalLength=m,I.pointLength=_,I.spotLength=M,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=A,I.numSpotMaps=U,I.numLightProbes=P,i.version=SA++)}function l(c,u){let f=0,p=0,m=0,_=0,M=0;const g=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const x=c[d];if(x.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),f++}else if(x.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(g),m++}else if(x.isRectAreaLight){const A=i.rectArea[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(g),M++}}}return{setup:a,setupView:l,state:i}}function pg(t){const e=new EA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function TA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pg(t),e.set(r,[a])):s>=o.length?(a=new pg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class wA extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AA extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function PA(t,e,n){let i=new op;const r=new tt,s=new tt,o=new Pt,a=new wA({depthPacking:rM}),l=new AA,c={},u=n.maxTextureSize,f={[_i]:Mn,[Mn]:_i,[Ii]:Ii},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:CA,fragmentShader:RA}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new un(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_;let d=this.type;this.render=function(b,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const ee=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Ut),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const q=d!==Pi&&this.type===Pi,ne=d===Pi&&this.type!==Pi;for(let z=0,W=b.length;z<W;z++){const J=b[z],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const te=N.getFrameExtents();if(r.multiply(te),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,N.mapSize.y=s.y)),N.map===null||q===!0||ne===!0){const le=this.type!==Pi?{minFilter:gt,magFilter:gt}:{};N.map!==null&&N.map.dispose(),N.map=new Cn(r.x,r.y,le),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Q=N.getViewportCount();for(let le=0;le<Q;le++){const xe=N.getViewport(le);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),$.viewport(o),N.updateMatrices(J,le),i=N.getFrustum(),A(P,I,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===Pi&&y(N,I),N.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(ee,S,C)};function y(b,P){const I=e.update(M);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Cn(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(P,null,I,p,M,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(P,null,I,m,M,null)}function x(b,P,I,ee){let S=null;const C=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)S=C;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const $=S.uuid,q=P.uuid;let ne=c[$];ne===void 0&&(ne={},c[$]=ne);let z=ne[q];z===void 0&&(z=S.clone(),ne[q]=z,P.addEventListener("dispose",U)),S=z}if(S.visible=P.visible,S.wireframe=P.wireframe,ee===Pi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=t.properties.get(S);$.light=I}return S}function A(b,P,I,ee,S){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Pi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const q=e.update(b),ne=b.material;if(Array.isArray(ne)){const z=q.groups;for(let W=0,J=z.length;W<J;W++){const N=z[W],te=ne[N.materialIndex];if(te&&te.visible){const Q=x(b,te,ee,S);b.onBeforeShadow(t,b,P,I,q,Q,N),t.renderBufferDirect(I,null,q,Q,b,N),b.onAfterShadow(t,b,P,I,q,Q,N)}}}else if(ne.visible){const z=x(b,ne,ee,S);b.onBeforeShadow(t,b,P,I,q,z,null),t.renderBufferDirect(I,null,q,z,b,null),b.onAfterShadow(t,b,P,I,q,z,null)}}const $=b.children;for(let q=0,ne=$.length;q<ne;q++)A($[q],P,I,ee,S)}function U(b){b.target.removeEventListener("dispose",U);for(const I in c){const ee=c[I],S=b.target.uuid;S in ee&&(ee[S].dispose(),delete ee[S])}}}const bA={[ff]:df,[pf]:vf,[mf]:_f,[Js]:gf,[df]:ff,[vf]:pf,[_f]:mf,[gf]:Js};function LA(t){function e(){let k=!1;const Te=new Pt;let B=null;const ae=new Pt(0,0,0,0);return{setMask:function(Ee){B!==Ee&&!k&&(t.colorMask(Ee,Ee,Ee,Ee),B=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,we,it,At,Kt){Kt===!0&&(Ee*=At,we*=At,it*=At),Te.set(Ee,we,it,At),ae.equals(Te)===!1&&(t.clearColor(Ee,we,it,At),ae.copy(Te))},reset:function(){k=!1,B=null,ae.set(-1,0,0,0)}}}function n(){let k=!1,Te=!1,B=null,ae=null,Ee=null;return{setReversed:function(we){Te=we},setTest:function(we){we?ce(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(we){B!==we&&!k&&(t.depthMask(we),B=we)},setFunc:function(we){if(Te&&(we=bA[we]),ae!==we){switch(we){case ff:t.depthFunc(t.NEVER);break;case df:t.depthFunc(t.ALWAYS);break;case pf:t.depthFunc(t.LESS);break;case Js:t.depthFunc(t.LEQUAL);break;case mf:t.depthFunc(t.EQUAL);break;case gf:t.depthFunc(t.GEQUAL);break;case vf:t.depthFunc(t.GREATER);break;case _f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=we}},setLocked:function(we){k=we},setClear:function(we){Ee!==we&&(t.clearDepth(we),Ee=we)},reset:function(){k=!1,B=null,ae=null,Ee=null}}}function i(){let k=!1,Te=null,B=null,ae=null,Ee=null,we=null,it=null,At=null,Kt=null;return{setTest:function(at){k||(at?ce(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(at){Te!==at&&!k&&(t.stencilMask(at),Te=at)},setFunc:function(at,Zt,jn){(B!==at||ae!==Zt||Ee!==jn)&&(t.stencilFunc(at,Zt,jn),B=at,ae=Zt,Ee=jn)},setOp:function(at,Zt,jn){(we!==at||it!==Zt||At!==jn)&&(t.stencilOp(at,Zt,jn),we=at,it=Zt,At=jn)},setLocked:function(at){k=at},setClear:function(at){Kt!==at&&(t.clearStencil(at),Kt=at)},reset:function(){k=!1,Te=null,B=null,ae=null,Ee=null,we=null,it=null,At=null,Kt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,p=[],m=null,_=!1,M=null,g=null,d=null,y=null,x=null,A=null,U=null,b=new Ve(0,0,0),P=0,I=!1,ee=null,S=null,C=null,$=null,q=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),z=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),z=W>=2);let N=null,te={};const Q=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),xe=new Pt().fromArray(Q),Le=new Pt().fromArray(le);function Z(k,Te,B,ae){const Ee=new Uint8Array(4),we=t.createTexture();t.bindTexture(k,we),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let it=0;it<B;it++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Te+it,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return we}const oe={};oe[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Js),Ze(!1),ot(Sm),ce(t.CULL_FACE),O(Ut);function ce(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function ve(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function Ie(k,Te){return u[k]!==Te?(t.bindFramebuffer(k,Te),u[k]=Te,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Te),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function Fe(k,Te){let B=p,ae=!1;if(k){B=f.get(Te),B===void 0&&(B=[],f.set(Te,B));const Ee=k.textures;if(B.length!==Ee.length||B[0]!==t.COLOR_ATTACHMENT0){for(let we=0,it=Ee.length;we<it;we++)B[we]=t.COLOR_ATTACHMENT0+we;B.length=Ee.length,ae=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,ae=!0);ae&&t.drawBuffers(B)}function $e(k){return m!==k?(t.useProgram(k),m=k,!0):!1}const st={[Ui]:t.FUNC_ADD,[FS]:t.FUNC_SUBTRACT,[OS]:t.FUNC_REVERSE_SUBTRACT};st[kS]=t.MIN,st[BS]=t.MAX;const Ke={[zS]:t.ZERO,[HS]:t.ONE,[VS]:t.SRC_COLOR,[Ea]:t.SRC_ALPHA,[$S]:t.SRC_ALPHA_SATURATE,[YS]:t.DST_COLOR,[WS]:t.DST_ALPHA,[GS]:t.ONE_MINUS_SRC_COLOR,[Ta]:t.ONE_MINUS_SRC_ALPHA,[jS]:t.ONE_MINUS_DST_COLOR,[XS]:t.ONE_MINUS_DST_ALPHA,[qS]:t.CONSTANT_COLOR,[KS]:t.ONE_MINUS_CONSTANT_COLOR,[ZS]:t.CONSTANT_ALPHA,[QS]:t.ONE_MINUS_CONSTANT_ALPHA};function O(k,Te,B,ae,Ee,we,it,At,Kt,at){if(k===Ut){_===!0&&(ve(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),k!==NS){if(k!==M||at!==I){if((g!==Ui||x!==Ui)&&(t.blendEquation(t.FUNC_ADD),g=Ui,x=Ui),at)switch(k){case Vi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,y=null,A=null,U=null,b.set(0,0,0),P=0,M=k,I=at}return}Ee=Ee||Te,we=we||B,it=it||ae,(Te!==g||Ee!==x)&&(t.blendEquationSeparate(st[Te],st[Ee]),g=Te,x=Ee),(B!==d||ae!==y||we!==A||it!==U)&&(t.blendFuncSeparate(Ke[B],Ke[ae],Ke[we],Ke[it]),d=B,y=ae,A=we,U=it),(At.equals(b)===!1||Kt!==P)&&(t.blendColor(At.r,At.g,At.b,Kt),b.copy(At),P=Kt),M=k,I=!1}function qt(k,Te){k.side===Ii?ve(t.CULL_FACE):ce(t.CULL_FACE);let B=k.side===Mn;Te&&(B=!B),Ze(B),k.blending===Vi&&k.transparent===!1?O(Ut):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const ae=k.stencilWrite;o.setTest(ae),ae&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),pt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(k){ee!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),ee=k)}function ot(k){k!==IS?(ce(t.CULL_FACE),k!==S&&(k===Sm?t.cullFace(t.BACK):k===US?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),S=k}function Be(k){k!==C&&(z&&t.lineWidth(k),C=k)}function pt(k,Te,B){k?(ce(t.POLYGON_OFFSET_FILL),($!==Te||q!==B)&&(t.polygonOffset(Te,B),$=Te,q=B)):ve(t.POLYGON_OFFSET_FILL)}function He(k){k?ce(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function L(k){k===void 0&&(k=t.TEXTURE0+ne-1),N!==k&&(t.activeTexture(k),N=k)}function w(k,Te,B){B===void 0&&(N===null?B=t.TEXTURE0+ne-1:B=N);let ae=te[B];ae===void 0&&(ae={type:void 0,texture:void 0},te[B]=ae),(ae.type!==k||ae.texture!==Te)&&(N!==B&&(t.activeTexture(B),N=B),t.bindTexture(k,Te||oe[k]),ae.type=k,ae.texture=Te)}function X(){const k=te[N];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(k){xe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),xe.copy(k))}function ye(k){Le.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),Le.copy(k))}function Je(k,Te){let B=l.get(Te);B===void 0&&(B=new WeakMap,l.set(Te,B));let ae=B.get(k);ae===void 0&&(ae=t.getUniformBlockIndex(Te,k.name),B.set(k,ae))}function ke(k,Te){const ae=l.get(Te).get(k);a.get(Te)!==ae&&(t.uniformBlockBinding(Te,ae,k.__bindingPointIndex),a.set(Te,ae))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,te={},u={},f=new WeakMap,p=[],m=null,_=!1,M=null,g=null,d=null,y=null,x=null,A=null,U=null,b=new Ve(0,0,0),P=0,I=!1,ee=null,S=null,C=null,$=null,q=null,xe.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:ve,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:$e,setBlending:O,setMaterial:qt,setFlipSided:Ze,setCullFace:ot,setLineWidth:Be,setPolygonOffset:pt,setScissorTest:He,activeTexture:L,bindTexture:w,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:de,texImage2D:Pe,texImage3D:ze,updateUBOMapping:Je,uniformBlockBinding:ke,texStorage2D:Qe,texStorage3D:_e,texSubImage2D:re,texSubImage3D:Ue,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ae,scissor:Ne,viewport:ye,reset:Xe}}function mg(t,e,n,i){const r=DA(i);switch(n){case p_:return t*e;case g_:return t*e;case v_:return t*e*2;case eu:return t*e/r.components*r.byteLength;case Qd:return t*e/r.components*r.byteLength;case __:return t*e*2/r.components*r.byteLength;case Jd:return t*e*2/r.components*r.byteLength;case m_:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case ep:return t*e*4/r.components*r.byteLength;case $l:case ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:case wf:return Math.max(t,16)*Math.max(e,8)/4;case Mf:case Tf:return Math.max(t,8)*Math.max(e,8)/2;case Af:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ql:case Gf:case Wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case x_:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yf:case jf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function DA(t){switch(t){case ji:case h_:return{byteLength:1,components:1};case no:case f_:case bn:return{byteLength:2,components:1};case Kd:case Zd:return{byteLength:2,components:4};case Zr:case qd:case Pn:return{byteLength:4,components:1};case d_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function IA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,w){return m?new OffscreenCanvas(L,w):Dc("canvas")}function M(L,w,X){let se=1;const de=He(L);if((de.width>X||de.height>X)&&(se=X/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(se*de.width),Ue=Math.floor(se*de.height);f===void 0&&(f=_(re,Ue));const Me=w?_(re,Ue):f;return Me.width=re,Me.height=Ue,Me.getContext("2d").drawImage(L,0,0,re,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+re+"x"+Ue+")."),Me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==gt&&L.minFilter!==rn}function d(L){t.generateMipmap(L)}function y(L,w,X,se,de=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===t.RED&&(X===t.FLOAT&&(re=t.R32F),X===t.HALF_FLOAT&&(re=t.R16F),X===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(re=t.R8UI),X===t.UNSIGNED_SHORT&&(re=t.R16UI),X===t.UNSIGNED_INT&&(re=t.R32UI),X===t.BYTE&&(re=t.R8I),X===t.SHORT&&(re=t.R16I),X===t.INT&&(re=t.R32I)),w===t.RG&&(X===t.FLOAT&&(re=t.RG32F),X===t.HALF_FLOAT&&(re=t.RG16F),X===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(re=t.RG8UI),X===t.UNSIGNED_SHORT&&(re=t.RG16UI),X===t.UNSIGNED_INT&&(re=t.RG32UI),X===t.BYTE&&(re=t.RG8I),X===t.SHORT&&(re=t.RG16I),X===t.INT&&(re=t.RG32I)),w===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(re=t.RGB8UI),X===t.UNSIGNED_SHORT&&(re=t.RGB16UI),X===t.UNSIGNED_INT&&(re=t.RGB32UI),X===t.BYTE&&(re=t.RGB8I),X===t.SHORT&&(re=t.RGB16I),X===t.INT&&(re=t.RGB32I)),w===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(re=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(re=t.RGBA16UI),X===t.UNSIGNED_INT&&(re=t.RGBA32UI),X===t.BYTE&&(re=t.RGBA8I),X===t.SHORT&&(re=t.RGBA16I),X===t.INT&&(re=t.RGBA32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),w===t.RGBA){const Ue=de?Rc:ct.getTransfer(se);X===t.FLOAT&&(re=t.RGBA32F),X===t.HALF_FLOAT&&(re=t.RGBA16F),X===t.UNSIGNED_BYTE&&(re=Ue===mt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function x(L,w){let X;return L?w===null||w===Zr||w===io?X=t.DEPTH24_STENCIL8:w===Pn?X=t.DEPTH32F_STENCIL8:w===no&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===io?X=t.DEPTH_COMPONENT24:w===Pn?X=t.DEPTH_COMPONENT32F:w===no&&(X=t.DEPTH_COMPONENT16),X}function A(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==gt&&L.minFilter!==rn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function U(L){const w=L.target;w.removeEventListener("dispose",U),P(w),w.isVideoTexture&&u.delete(w)}function b(L){const w=L.target;w.removeEventListener("dispose",b),ee(w)}function P(L){const w=i.get(L);if(w.__webglInit===void 0)return;const X=L.source,se=p.get(X);if(se){const de=se[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(L),Object.keys(se).length===0&&p.delete(X)}i.remove(L)}function I(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const X=L.source,se=p.get(X);delete se[w.__cacheKey],o.memory.textures--}function ee(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let de=0;de<w.__webglFramebuffer[se].length;de++)t.deleteFramebuffer(w.__webglFramebuffer[se][de]);else t.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)t.deleteFramebuffer(w.__webglFramebuffer[se]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=L.textures;for(let se=0,de=X.length;se<de;se++){const re=i.get(X[se]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(X[se])}i.remove(L)}let S=0;function C(){S=0}function $(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function q(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function ne(L,w){const X=i.get(L);if(L.isVideoTexture&&Be(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(X,L,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function z(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Le(X,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function W(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Le(X,L,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function J(L,w){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Z(X,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const N={[yf]:t.REPEAT,[Bi]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},te={[gt]:t.NEAREST,[nM]:t.NEAREST_MIPMAP_NEAREST,[sl]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[dr]:t.LINEAR_MIPMAP_LINEAR},Q={[oM]:t.NEVER,[fM]:t.ALWAYS,[aM]:t.LESS,[y_]:t.LEQUAL,[lM]:t.EQUAL,[hM]:t.GEQUAL,[cM]:t.GREATER,[uM]:t.NOTEQUAL};function le(L,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===rn||w.magFilter===bu||w.magFilter===sl||w.magFilter===dr||w.minFilter===rn||w.minFilter===bu||w.minFilter===sl||w.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,N[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,te[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gt||w.minFilter!==sl&&w.minFilter!==dr||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function xe(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",U));const se=w.source;let de=p.get(se);de===void 0&&(de={},p.set(se,de));const re=q(w);if(re!==L.__cacheKey){de[re]===void 0&&(de[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),de[re].usedTimes++;const Ue=de[L.__cacheKey];Ue!==void 0&&(de[L.__cacheKey].usedTimes--,Ue.usedTimes===0&&I(w)),L.__cacheKey=re,L.__webglTexture=de[re].texture}return X}function Le(L,w,X){let se=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=t.TEXTURE_3D);const de=xe(L,w),re=w.source;n.bindTexture(se,L.__webglTexture,t.TEXTURE0+X);const Ue=i.get(re);if(re.version!==Ue.__version||de===!0){n.activeTexture(t.TEXTURE0+X);const Me=ct.getPrimaries(ct.workingColorSpace),Ae=w.colorSpace===Ni?null:ct.getPrimaries(w.colorSpace),Qe=w.colorSpace===Ni||Me===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let _e=M(w.image,!1,r.maxTextureSize);_e=pt(w,_e);const Pe=s.convert(w.format,w.colorSpace),ze=s.convert(w.type);let Ne=y(w.internalFormat,Pe,ze,w.colorSpace,w.isVideoTexture);le(se,w);let ye;const Je=w.mipmaps,ke=w.isVideoTexture!==!0,Xe=Ue.__version===void 0||de===!0,k=re.dataReady,Te=A(w,_e);if(w.isDepthTexture)Ne=x(w.format===ro,w.type),Xe&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Ne,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Pe,ze,null));else if(w.isDataTexture)if(Je.length>0){ke&&Xe&&n.texStorage2D(t.TEXTURE_2D,Te,Ne,Je[0].width,Je[0].height);for(let B=0,ae=Je.length;B<ae;B++)ye=Je[B],ke?k&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ye.width,ye.height,Pe,ze,ye.data):n.texImage2D(t.TEXTURE_2D,B,Ne,ye.width,ye.height,0,Pe,ze,ye.data);w.generateMipmaps=!1}else ke?(Xe&&n.texStorage2D(t.TEXTURE_2D,Te,Ne,_e.width,_e.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e.width,_e.height,Pe,ze,_e.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Pe,ze,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ne,Je[0].width,Je[0].height,_e.depth);for(let B=0,ae=Je.length;B<ae;B++)if(ye=Je[B],w.format!==Vn)if(Pe!==null)if(ke){if(k)if(w.layerUpdates.size>0){const Ee=mg(ye.width,ye.height,w.format,w.type);for(const we of w.layerUpdates){const it=ye.data.subarray(we*Ee/ye.data.BYTES_PER_ELEMENT,(we+1)*Ee/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,we,ye.width,ye.height,1,Pe,it,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ye.width,ye.height,_e.depth,Pe,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,Ne,ye.width,ye.height,_e.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ye.width,ye.height,_e.depth,Pe,ze,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,Ne,ye.width,ye.height,_e.depth,0,Pe,ze,ye.data)}else{ke&&Xe&&n.texStorage2D(t.TEXTURE_2D,Te,Ne,Je[0].width,Je[0].height);for(let B=0,ae=Je.length;B<ae;B++)ye=Je[B],w.format!==Vn?Pe!==null?ke?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ye.width,ye.height,Pe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,B,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?k&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ye.width,ye.height,Pe,ze,ye.data):n.texImage2D(t.TEXTURE_2D,B,Ne,ye.width,ye.height,0,Pe,ze,ye.data)}else if(w.isDataArrayTexture)if(ke){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,Ne,_e.width,_e.height,_e.depth),k)if(w.layerUpdates.size>0){const B=mg(_e.width,_e.height,w.format,w.type);for(const ae of w.layerUpdates){const Ee=_e.data.subarray(ae*B/_e.data.BYTES_PER_ELEMENT,(ae+1)*B/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,Pe,ze,Ee)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,ze,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Pe,ze,_e.data);else if(w.isData3DTexture)ke?(Xe&&n.texStorage3D(t.TEXTURE_3D,Te,Ne,_e.width,_e.height,_e.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,ze,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Pe,ze,_e.data);else if(w.isFramebufferTexture){if(Xe)if(ke)n.texStorage2D(t.TEXTURE_2D,Te,Ne,_e.width,_e.height);else{let B=_e.width,ae=_e.height;for(let Ee=0;Ee<Te;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ne,B,ae,0,Pe,ze,null),B>>=1,ae>>=1}}else if(Je.length>0){if(ke&&Xe){const B=He(Je[0]);n.texStorage2D(t.TEXTURE_2D,Te,Ne,B.width,B.height)}for(let B=0,ae=Je.length;B<ae;B++)ye=Je[B],ke?k&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,Pe,ze,ye):n.texImage2D(t.TEXTURE_2D,B,Ne,Pe,ze,ye);w.generateMipmaps=!1}else if(ke){if(Xe){const B=He(_e);n.texStorage2D(t.TEXTURE_2D,Te,Ne,B.width,B.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,ze,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Pe,ze,_e);g(w)&&d(se),Ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Z(L,w,X){if(w.image.length!==6)return;const se=xe(L,w),de=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+X);const re=i.get(de);if(de.version!==re.__version||se===!0){n.activeTexture(t.TEXTURE0+X);const Ue=ct.getPrimaries(ct.workingColorSpace),Me=w.colorSpace===Ni?null:ct.getPrimaries(w.colorSpace),Ae=w.colorSpace===Ni||Ue===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let ae=0;ae<6;ae++)!Qe&&!_e?Pe[ae]=M(w.image[ae],!0,r.maxCubemapSize):Pe[ae]=_e?w.image[ae].image:w.image[ae],Pe[ae]=pt(w,Pe[ae]);const ze=Pe[0],Ne=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),Je=y(w.internalFormat,Ne,ye,w.colorSpace),ke=w.isVideoTexture!==!0,Xe=re.__version===void 0||se===!0,k=de.dataReady;let Te=A(w,ze);le(t.TEXTURE_CUBE_MAP,w);let B;if(Qe){ke&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Je,ze.width,ze.height);for(let ae=0;ae<6;ae++){B=Pe[ae].mipmaps;for(let Ee=0;Ee<B.length;Ee++){const we=B[Ee];w.format!==Vn?Ne!==null?ke?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,we.width,we.height,Ne,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Je,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,0,0,we.width,we.height,Ne,ye,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee,Je,we.width,we.height,0,Ne,ye,we.data)}}}else{if(B=w.mipmaps,ke&&Xe){B.length>0&&Te++;const ae=He(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe[ae].width,Pe[ae].height,Ne,ye,Pe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Pe[ae].width,Pe[ae].height,0,Ne,ye,Pe[ae].data);for(let Ee=0;Ee<B.length;Ee++){const it=B[Ee].image[ae].image;ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,it.width,it.height,Ne,ye,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Je,it.width,it.height,0,Ne,ye,it.data)}}else{ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,ye,Pe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Ne,ye,Pe[ae]);for(let Ee=0;Ee<B.length;Ee++){const we=B[Ee];ke?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,0,0,Ne,ye,we.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee+1,Je,Ne,ye,we.image[ae])}}}g(w)&&d(t.TEXTURE_CUBE_MAP),re.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function oe(L,w,X,se,de,re){const Ue=s.convert(X.format,X.colorSpace),Me=s.convert(X.type),Ae=y(X.internalFormat,Ue,Me,X.colorSpace);if(!i.get(w).__hasExternalTextures){const _e=Math.max(1,w.width>>re),Pe=Math.max(1,w.height>>re);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,re,Ae,_e,Pe,w.depth,0,Ue,Me,null):n.texImage2D(de,re,Ae,_e,Pe,0,Ue,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),ot(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,de,i.get(X).__webglTexture,0,Ze(w)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,de,i.get(X).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(L,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const se=w.depthTexture,de=se&&se.isDepthTexture?se.type:null,re=x(w.stencilBuffer,de),Ue=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=Ze(w);ot(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,re,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,re,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,re,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,L)}else{const se=w.textures;for(let de=0;de<se.length;de++){const re=se[de],Ue=s.convert(re.format,re.colorSpace),Me=s.convert(re.type),Ae=y(re.internalFormat,Ue,Me,re.colorSpace),Qe=Ze(w);X&&ot(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Qe,Ae,w.width,w.height):ot(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Qe,Ae,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ve(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ne(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,de=Ze(w);if(w.depthTexture.format===Gs)ot(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===ro)ot(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,de):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ie(L){const w=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=se}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ve(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=t.createRenderbuffer(),ce(w.__webglDepthbuffer[se],L,!1);else{const de=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ce(w.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,de)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(L,w,X){const se=i.get(L);w!==void 0&&oe(se.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ie(L)}function $e(L){const w=L.texture,X=i.get(L),se=i.get(w);L.addEventListener("dispose",b);const de=L.textures,re=L.isWebGLCubeRenderTarget===!0,Ue=de.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=w.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Me]=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)X.__webglFramebuffer[Me][Ae]=t.createFramebuffer()}else X.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)X.__webglFramebuffer[Me]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let Me=0,Ae=de.length;Me<Ae;Me++){const Qe=i.get(de[Me]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&ot(L)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Me=0;Me<de.length;Me++){const Ae=de[Me];X.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const Qe=s.convert(Ae.format,Ae.colorSpace),_e=s.convert(Ae.type),Pe=y(Ae.internalFormat,Qe,_e,Ae.colorSpace,L.isXRRenderTarget===!0),ze=Ze(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Pe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,X.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),le(t.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)oe(X.__webglFramebuffer[Me][Ae],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ae);else oe(X.__webglFramebuffer[Me],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let Me=0,Ae=de.length;Me<Ae;Me++){const Qe=de[Me],_e=i.get(Qe);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),le(t.TEXTURE_2D,Qe),oe(X.__webglFramebuffer,L,Qe,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),g(Qe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,se.__webglTexture),le(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ae=0;Ae<w.mipmaps.length;Ae++)oe(X.__webglFramebuffer[Ae],L,w,t.COLOR_ATTACHMENT0,Me,Ae);else oe(X.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,Me,0);g(w)&&d(Me),n.unbindTexture()}L.depthBuffer&&Ie(L)}function st(L){const w=L.textures;for(let X=0,se=w.length;X<se;X++){const de=w[X];if(g(de)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ue=i.get(de).__webglTexture;n.bindTexture(re,Ue),d(re),n.unbindTexture()}}}const Ke=[],O=[];function qt(L){if(L.samples>0){if(ot(L)===!1){const w=L.textures,X=L.width,se=L.height;let de=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(L),Me=w.length>1;if(Me)for(let Ae=0;Ae<w.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ae]);const Qe=i.get(w[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Qe,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,de,t.NEAREST),l===!0&&(Ke.length=0,O.length=0,Ke.push(t.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ke.push(re),O.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ke))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let Ae=0;Ae<w.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ae]);const Qe=i.get(w[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ze(L){return Math.min(r.maxSamples,L.samples)}function ot(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function pt(L,w){const X=L.colorSpace,se=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==xi&&X!==Ni&&(ct.getTransfer(X)===mt?(se!==Vn||de!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=C,this.setTexture2D=ne,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Fe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ot}function UA(t,e){function n(i,r=Ni){let s;const o=ct.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===Kd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===d_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===h_)return t.BYTE;if(i===f_)return t.SHORT;if(i===no)return t.UNSIGNED_SHORT;if(i===qd)return t.INT;if(i===Zr)return t.UNSIGNED_INT;if(i===Pn)return t.FLOAT;if(i===bn)return t.HALF_FLOAT;if(i===p_)return t.ALPHA;if(i===m_)return t.RGB;if(i===Vn)return t.RGBA;if(i===g_)return t.LUMINANCE;if(i===v_)return t.LUMINANCE_ALPHA;if(i===Gs)return t.DEPTH_COMPONENT;if(i===ro)return t.DEPTH_STENCIL;if(i===eu)return t.RED;if(i===Qd)return t.RED_INTEGER;if(i===__)return t.RG;if(i===Jd)return t.RG_INTEGER;if(i===ep)return t.RGBA_INTEGER;if(i===$l||i===ql||i===Kl||i===Zl)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$l)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$l)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mf||i===Ef||i===Tf||i===wf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Af||i===Cf||i===Rf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Af||i===Cf)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pf||i===bf||i===Lf||i===Df||i===If||i===Uf||i===Nf||i===Ff||i===Of||i===kf||i===Bf||i===zf||i===Hf||i===Vf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Df)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===If)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ff)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Of)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vf)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===Gf||i===Wf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ql)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===x_||i===Xf||i===Yf||i===jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class NA extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yo extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FA={type:"move"};class rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sn({vertexShader:OA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new un(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zA extends fo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,p=null,m=null,_=null;const M=new BA,g=n.getContextAttributes();let d=null,y=null;const x=[],A=[],U=new tt;let b=null;const P=new kn;P.layers.enable(1),P.viewport=new Pt;const I=new kn;I.layers.enable(2),I.viewport=new Pt;const ee=[P,I],S=new NA;S.layers.enable(1),S.layers.enable(2);let C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=x[Z];return oe===void 0&&(oe=new rh,x[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=x[Z];return oe===void 0&&(oe=new rh,x[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=x[Z];return oe===void 0&&(oe=new rh,x[Z]=oe),oe.getHandSpace()};function q(Z){const oe=A.indexOf(Z.inputSource);if(oe===-1)return;const ce=x[oe];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,c||o),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ne(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",z);for(let Z=0;Z<x.length;Z++){const oe=A[Z];oe!==null&&(A[Z]=null,x[Z].disconnect(oe))}C=null,$=null,M.reset(),e.setRenderTarget(d),m=null,p=null,f=null,r=null,y=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Cn(m.framebufferWidth,m.framebufferHeight,{format:Vn,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,ce=null,ve=null;g.depth&&(ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?ro:Gs,ce=g.stencil?io:Zr);const Ie={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Cn(p.textureWidth,p.textureHeight,{format:Vn,type:ji,depthTexture:new cp(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(Z){for(let oe=0;oe<Z.removed.length;oe++){const ce=Z.removed[oe],ve=A.indexOf(ce);ve>=0&&(A[ve]=null,x[ve].disconnect(ce))}for(let oe=0;oe<Z.added.length;oe++){const ce=Z.added[oe];let ve=A.indexOf(ce);if(ve===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=A.length){A.push(ce),ve=Fe;break}else if(A[Fe]===null){A[Fe]=ce,ve=Fe;break}if(ve===-1)break}const Ie=x[ve];Ie&&Ie.connect(ce)}}const W=new H,J=new H;function N(Z,oe,ce){W.setFromMatrixPosition(oe.matrixWorld),J.setFromMatrixPosition(ce.matrixWorld);const ve=W.distanceTo(J),Ie=oe.projectionMatrix.elements,Fe=ce.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),st=Ie[14]/(Ie[10]+1),Ke=(Ie[9]+1)/Ie[5],O=(Ie[9]-1)/Ie[5],qt=(Ie[8]-1)/Ie[0],Ze=(Fe[8]+1)/Fe[0],ot=$e*qt,Be=$e*Ze,pt=ve/(-qt+Ze),He=pt*-qt;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const L=$e+pt,w=st+pt,X=ot-He,se=Be+(ve-He),de=Ke*st/w*L,re=O*st/w*L;Z.projectionMatrix.makePerspective(X,se,de,re,L,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let oe=Z.near,ce=Z.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(ce=M.depthFar)),S.near=I.near=P.near=oe,S.far=I.far=P.far=ce,(C!==S.near||$!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,$=S.far);const ve=Z.parent,Ie=S.cameras;te(S,ve);for(let Fe=0;Fe<Ie.length;Fe++)te(Ie[Fe],ve);Ie.length===2?N(S,P,I):S.projectionMatrix.copy(P.projectionMatrix),Q(Z,S,ve)};function Q(Z,oe,ce){ce===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=wa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let le=null;function xe(Z,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let ve=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,ve=!0);for(let Fe=0;Fe<ce.length;Fe++){const $e=ce[Fe];let st=null;if(m!==null)st=m.getViewport($e);else{const O=f.getViewSubImage(p,$e);st=O.viewport,Fe===0&&(e.setRenderTargetTextures(y,O.colorTexture,p.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(y))}let Ke=ee[Fe];Ke===void 0&&(Ke=new kn,Ke.layers.enable(Fe),Ke.viewport=new Pt,ee[Fe]=Ke),Ke.matrix.fromArray($e.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray($e.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(st.x,st.y,st.width,st.height),Fe===0&&(S.matrix.copy(Ke.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ve===!0&&S.cameras.push(Ke)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Fe=f.getDepthInformation(ce[0]);Fe&&Fe.isValid&&Fe.texture&&M.init(e,Fe,r.renderState)}}for(let ce=0;ce<x.length;ce++){const ve=A[ce],Ie=x[ce];ve!==null&&Ie!==void 0&&Ie.update(ve,oe,c||o)}le&&le(Z,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Le=new b_;Le.setAnimationLoop(xe),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}const Ur=new ai,HA=new ht;function VA(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,C_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,y,x,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),p(g,d),d.isMeshPhysicalMaterial&&m(g,d,A)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,y,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const y=e.get(d),x=y.envMap,A=y.envMapRotation;x&&(g.envMap.value=x,Ur.copy(A),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),g.envMapRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Ur)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,y,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*y,g.scale.value=x*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,y){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const y=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const A=x.program;i.uniformBlockBinding(y,A)}function c(y,x){let A=r[y.id];A===void 0&&(_(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",g));const U=x.program;i.updateUBOMapping(y,U);const b=e.render.frame;s[y.id]!==b&&(p(y),s[y.id]=b)}function u(y){const x=f();y.__bindingPointIndex=x;const A=t.createBuffer(),U=y.__size,b=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,U,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,A),A}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=r[y.id],A=y.uniforms,U=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,P=A.length;b<P;b++){const I=Array.isArray(A[b])?A[b]:[A[b]];for(let ee=0,S=I.length;ee<S;ee++){const C=I[ee];if(m(C,b,ee,U)===!0){const $=C.__offset,q=Array.isArray(C.value)?C.value:[C.value];let ne=0;for(let z=0;z<q.length;z++){const W=q[z],J=M(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,$+ne,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,ne),ne+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,x,A,U){const b=y.value,P=x+"_"+A;if(U[P]===void 0)return typeof b=="number"||typeof b=="boolean"?U[P]=b:U[P]=b.clone(),!0;{const I=U[P];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return U[P]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function _(y){const x=y.uniforms;let A=0;const U=16;for(let P=0,I=x.length;P<I;P++){const ee=Array.isArray(x[P])?x[P]:[x[P]];for(let S=0,C=ee.length;S<C;S++){const $=ee[S],q=Array.isArray($.value)?$.value:[$.value];for(let ne=0,z=q.length;ne<z;ne++){const W=q[ne],J=M(W),N=A%U,te=N%J.boundary,Q=N+te;A+=te,Q!==0&&U-Q<J.storage&&(A+=U-Q),$.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=J.storage}}}const b=A%U;return b>0&&(A+=U-b),y.__size=A,y.__cache={},this}function M(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class WA{constructor(e={}){const{canvas:n=PM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),_=new Int32Array(4);let M=null,g=null;const d=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Mr,this.toneMappingExposure=1;const x=this;let A=!1,U=0,b=0,P=null,I=-1,ee=null;const S=new Pt,C=new Pt;let $=null;const q=new Ve(0);let ne=0,z=n.width,W=n.height,J=1,N=null,te=null;const Q=new Pt(0,0,z,W),le=new Pt(0,0,z,W);let xe=!1;const Le=new op;let Z=!1,oe=!1;const ce=new ht,ve=new ht,Ie=new H,Fe=new Pt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Ke(){return P===null?J:1}let O=i;function qt(R,h){return n.getContext(R,h)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$d}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Ee,!1),n.addEventListener("webglcontextcreationerror",we,!1),O===null){const h="webgl2";if(O=qt(h,R),O===null)throw qt(h)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ze,ot,Be,pt,He,L,w,X,se,de,re,Ue,Me,Ae,Qe,_e,Pe,ze,Ne,ye,Je,ke,Xe,k;function Te(){Ze=new qT(O),Ze.init(),ke=new UA(O,Ze),ot=new GT(O,Ze,e,ke),Be=new LA(O),ot.reverseDepthBuffer&&Be.buffers.depth.setReversed(!0),pt=new QT(O),He=new gA,L=new IA(O,Ze,Be,He,ot,ke,pt),w=new XT(x),X=new $T(x),se=new sE(O),Xe=new HT(O,se),de=new KT(O,se,pt,Xe),re=new ew(O,de,se,pt),Ne=new JT(O,ot,L),_e=new WT(He),Ue=new mA(x,w,X,Ze,ot,Xe,_e),Me=new VA(x,He),Ae=new _A,Qe=new TA(Ze),ze=new zT(x,w,X,Be,re,p,l),Pe=new PA(x,re,ot),k=new GA(O,pt,ot,Be),ye=new VT(O,Ze,pt),Je=new ZT(O,Ze,pt),pt.programs=Ue.programs,x.capabilities=ot,x.extensions=Ze,x.properties=He,x.renderLists=Ae,x.shadowMap=Pe,x.state=Be,x.info=pt}Te();const B=new zA(x,O);this.xr=B,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(z,W,!1))},this.getSize=function(R){return R.set(z,W)},this.setSize=function(R,h,v=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,W=h,n.width=Math.floor(R*J),n.height=Math.floor(h*J),v===!0&&(n.style.width=R+"px",n.style.height=h+"px"),this.setViewport(0,0,R,h)},this.getDrawingBufferSize=function(R){return R.set(z*J,W*J).floor()},this.setDrawingBufferSize=function(R,h,v){z=R,W=h,J=v,n.width=Math.floor(R*v),n.height=Math.floor(h*v),this.setViewport(0,0,R,h)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(Q)},this.setViewport=function(R,h,v,E){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,h,v,E),Be.viewport(S.copy(Q).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(le)},this.setScissor=function(R,h,v,E){R.isVector4?le.set(R.x,R.y,R.z,R.w):le.set(R,h,v,E),Be.scissor(C.copy(le).multiplyScalar(J).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){Be.setScissorTest(xe=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){te=R},this.getClearColor=function(R){return R.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(R=!0,h=!0,v=!0){let E=0;if(R){let T=!1;if(P!==null){const F=P.texture.format;T=F===ep||F===Jd||F===Qd}if(T){const F=P.texture.type,D=F===ji||F===Zr||F===no||F===io||F===Kd||F===Zd,V=ze.getClearColor(),K=ze.getClearAlpha(),Y=V.r,j=V.g,G=V.b;D?(m[0]=Y,m[1]=j,m[2]=G,m[3]=K,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Y,_[1]=j,_[2]=G,_[3]=K,O.clearBufferiv(O.COLOR,0,_))}else E|=O.COLOR_BUFFER_BIT}h&&(E|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),v&&(E|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Ee,!1),n.removeEventListener("webglcontextcreationerror",we,!1),Ae.dispose(),Qe.dispose(),He.dispose(),w.dispose(),X.dispose(),re.dispose(),Xe.dispose(),k.dispose(),Ue.dispose(),B.dispose(),B.removeEventListener("sessionstart",Na),B.removeEventListener("sessionend",Fa),yi.stop()};function ae(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=pt.autoReset,h=Pe.enabled,v=Pe.autoUpdate,E=Pe.needsUpdate,T=Pe.type;Te(),pt.autoReset=R,Pe.enabled=h,Pe.autoUpdate=v,Pe.needsUpdate=E,Pe.type=T}function we(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function it(R){const h=R.target;h.removeEventListener("dispose",it),At(h)}function At(R){Kt(R),He.remove(R)}function Kt(R){const h=He.get(R).programs;h!==void 0&&(h.forEach(function(v){Ue.releaseProgram(v)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,h,v,E,T,F){h===null&&(h=$e);const D=T.isMesh&&T.matrixWorld.determinant()<0,V=za(R,h,v,E,T);Be.setMaterial(E,D);let K=v.index,Y=1;if(E.wireframe===!0){if(K=de.getWireframeAttribute(v),K===void 0)return;Y=2}const j=v.drawRange,G=v.attributes.position;let he=j.start*Y,me=(j.start+j.count)*Y;F!==null&&(he=Math.max(he,F.start*Y),me=Math.min(me,(F.start+F.count)*Y)),K!==null?(he=Math.max(he,0),me=Math.min(me,K.count)):G!=null&&(he=Math.max(he,0),me=Math.min(me,G.count));const ge=me-he;if(ge<0||ge===1/0)return;Xe.setup(T,E,V,v,K);let Ce,fe=ye;if(K!==null&&(Ce=se.get(K),fe=Je,fe.setIndex(Ce)),T.isMesh)E.wireframe===!0?(Be.setLineWidth(E.wireframeLinewidth*Ke()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(T.isLine){let ie=E.linewidth;ie===void 0&&(ie=1),Be.setLineWidth(ie*Ke()),T.isLineSegments?fe.setMode(O.LINES):T.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else T.isPoints?fe.setMode(O.POINTS):T.isSprite&&fe.setMode(O.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)fe.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))fe.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const ie=T._multiDrawStarts,be=T._multiDrawCounts,De=T._multiDrawCount,rt=K?se.get(K).bytesPerElement:1,Dt=He.get(E).currentProgram.getUniforms();for(let qe=0;qe<De;qe++)Dt.setValue(O,"_gl_DrawID",qe),fe.render(ie[qe]/rt,be[qe])}else if(T.isInstancedMesh)fe.renderInstances(he,ge,T.count);else if(v.isInstancedBufferGeometry){const ie=v._maxInstanceCount!==void 0?v._maxInstanceCount:1/0,be=Math.min(v.instanceCount,ie);fe.renderInstances(he,ge,be)}else fe.render(he,ge)};function at(R,h,v){R.transparent===!0&&R.side===Ii&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,is(R,h,v),R.side=_i,R.needsUpdate=!0,is(R,h,v),R.side=Ii):is(R,h,v)}this.compile=function(R,h,v=null){v===null&&(v=R),g=Qe.get(v),g.init(h),y.push(g),v.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),R!==v&&R.traverseVisible(function(T){T.isLight&&T.layers.test(h.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),g.setupLights();const E=new Set;return R.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const F=T.material;if(F)if(Array.isArray(F))for(let D=0;D<F.length;D++){const V=F[D];at(V,v,T),E.add(V)}else at(F,v,T),E.add(F)}),y.pop(),g=null,E},this.compileAsync=function(R,h,v=null){const E=this.compile(R,h,v);return new Promise(T=>{function F(){if(E.forEach(function(D){He.get(D).currentProgram.isReady()&&E.delete(D)}),E.size===0){T(R);return}setTimeout(F,10)}Ze.get("KHR_parallel_shader_compile")!==null?F():setTimeout(F,10)})};let Zt=null;function jn(R){Zt&&Zt(R)}function Na(){yi.stop()}function Fa(){yi.start()}const yi=new b_;yi.setAnimationLoop(jn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){Zt=R,B.setAnimationLoop(R),R===null?yi.stop():yi.start()},B.addEventListener("sessionstart",Na),B.addEventListener("sessionend",Fa),this.render=function(R,h){if(h!==void 0&&h.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(h),h=B.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,h,P),g=Qe.get(R,y.length),g.init(h),y.push(g),ve.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),Le.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,Z=_e.init(this.clippingPlanes,oe),M=Ae.get(R,d.length),M.init(),d.push(M),B.enabled===!0&&B.isPresenting===!0){const F=x.xr.getDepthSensingMesh();F!==null&&xo(F,h,-1/0,x.sortObjects)}xo(R,h,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(N,te),st=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,st&&ze.addToRenderList(M,R),this.info.render.frame++,Z===!0&&_e.beginShadows();const v=g.state.shadowsArray;Pe.render(v,R,h),Z===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const E=M.opaque,T=M.transmissive;if(g.setupLights(),h.isArrayCamera){const F=h.cameras;if(T.length>0)for(let D=0,V=F.length;D<V;D++){const K=F[D];yo(E,T,R,K)}st&&ze.render(R);for(let D=0,V=F.length;D<V;D++){const K=F[D];Oa(M,R,K,K.viewport)}}else T.length>0&&yo(E,T,R,h),st&&ze.render(R),Oa(M,R,h);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(x,R,h),Xe.resetDefaultState(),I=-1,ee=null,y.pop(),y.length>0?(g=y[y.length-1],Z===!0&&_e.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function xo(R,h,v,E){if(R.visible===!1)return;if(R.layers.test(h.layers)){if(R.isGroup)v=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(h);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Le.intersectsSprite(R)){E&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ve);const D=re.update(R),V=R.material;V.visible&&M.push(R,D,V,v,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Le.intersectsObject(R))){const D=re.update(R),V=R.material;if(E&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),Fe.copy(D.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(ve)),Array.isArray(V)){const K=D.groups;for(let Y=0,j=K.length;Y<j;Y++){const G=K[Y],he=V[G.materialIndex];he&&he.visible&&M.push(R,D,he,v,Fe.z,G)}}else V.visible&&M.push(R,D,V,v,Fe.z,null)}}const F=R.children;for(let D=0,V=F.length;D<V;D++)xo(F[D],h,v,E)}function Oa(R,h,v,E){const T=R.opaque,F=R.transmissive,D=R.transparent;g.setupLightsView(v),Z===!0&&_e.setGlobalState(x.clippingPlanes,v),E&&Be.viewport(S.copy(E)),T.length>0&&ns(T,h,v),F.length>0&&ns(F,h,v),D.length>0&&ns(D,h,v),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function yo(R,h,v,E){if((v.isScene===!0?v.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[E.id]===void 0&&(g.state.transmissionRenderTarget[E.id]=new Cn(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?bn:ji,minFilter:dr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const F=g.state.transmissionRenderTarget[E.id],D=E.viewport||S;F.setSize(D.z,D.w);const V=x.getRenderTarget();x.setRenderTarget(F),x.getClearColor(q),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),st&&ze.render(v);const K=x.toneMapping;x.toneMapping=Mr;const Y=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),g.setupLightsView(E),Z===!0&&_e.setGlobalState(x.clippingPlanes,E),ns(R,v,E),L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let j=!1;for(let G=0,he=h.length;G<he;G++){const me=h[G],ge=me.object,Ce=me.geometry,fe=me.material,ie=me.group;if(fe.side===Ii&&ge.layers.test(E.layers)){const be=fe.side;fe.side=Mn,fe.needsUpdate=!0,ka(ge,v,E,Ce,fe,ie),fe.side=be,fe.needsUpdate=!0,j=!0}}j===!0&&(L.updateMultisampleRenderTarget(F),L.updateRenderTargetMipmap(F))}x.setRenderTarget(V),x.setClearColor(q,ne),Y!==void 0&&(E.viewport=Y),x.toneMapping=K}function ns(R,h,v){const E=h.isScene===!0?h.overrideMaterial:null;for(let T=0,F=R.length;T<F;T++){const D=R[T],V=D.object,K=D.geometry,Y=E===null?D.material:E,j=D.group;V.layers.test(v.layers)&&ka(V,h,v,K,Y,j)}}function ka(R,h,v,E,T,F){R.onBeforeRender(x,h,v,E,T,F),R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),T.onBeforeRender(x,h,v,E,R,F),T.transparent===!0&&T.side===Ii&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,x.renderBufferDirect(v,h,E,T,R,F),T.side=_i,T.needsUpdate=!0,x.renderBufferDirect(v,h,E,T,R,F),T.side=Ii):x.renderBufferDirect(v,h,E,T,R,F),R.onAfterRender(x,h,v,E,T,F)}function is(R,h,v){h.isScene!==!0&&(h=$e);const E=He.get(R),T=g.state.lights,F=g.state.shadowsArray,D=T.state.version,V=Ue.getParameters(R,T.state,F,h,v),K=Ue.getProgramCacheKey(V);let Y=E.programs;E.environment=R.isMeshStandardMaterial?h.environment:null,E.fog=h.fog,E.envMap=(R.isMeshStandardMaterial?X:w).get(R.envMap||E.environment),E.envMapRotation=E.environment!==null&&R.envMap===null?h.environmentRotation:R.envMapRotation,Y===void 0&&(R.addEventListener("dispose",it),Y=new Map,E.programs=Y);let j=Y.get(K);if(j!==void 0){if(E.currentProgram===j&&E.lightsStateVersion===D)return So(R,V),j}else V.uniforms=Ue.getUniforms(R),R.onBeforeCompile(V,x),j=Ue.acquireProgram(V,K),Y.set(K,j),E.uniforms=V.uniforms;const G=E.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(G.clippingPlanes=_e.uniform),So(R,V),E.needsLights=Si(R),E.lightsStateVersion=D,E.needsLights&&(G.ambientLightColor.value=T.state.ambient,G.lightProbe.value=T.state.probe,G.directionalLights.value=T.state.directional,G.directionalLightShadows.value=T.state.directionalShadow,G.spotLights.value=T.state.spot,G.spotLightShadows.value=T.state.spotShadow,G.rectAreaLights.value=T.state.rectArea,G.ltc_1.value=T.state.rectAreaLTC1,G.ltc_2.value=T.state.rectAreaLTC2,G.pointLights.value=T.state.point,G.pointLightShadows.value=T.state.pointShadow,G.hemisphereLights.value=T.state.hemi,G.directionalShadowMap.value=T.state.directionalShadowMap,G.directionalShadowMatrix.value=T.state.directionalShadowMatrix,G.spotShadowMap.value=T.state.spotShadowMap,G.spotLightMatrix.value=T.state.spotLightMatrix,G.spotLightMap.value=T.state.spotLightMap,G.pointShadowMap.value=T.state.pointShadowMap,G.pointShadowMatrix.value=T.state.pointShadowMatrix),E.currentProgram=j,E.uniformsList=null,j}function Ba(R){if(R.uniformsList===null){const h=R.currentProgram.getUniforms();R.uniformsList=ec.seqWithValue(h.seq,R.uniforms)}return R.uniformsList}function So(R,h){const v=He.get(R);v.outputColorSpace=h.outputColorSpace,v.batching=h.batching,v.batchingColor=h.batchingColor,v.instancing=h.instancing,v.instancingColor=h.instancingColor,v.instancingMorph=h.instancingMorph,v.skinning=h.skinning,v.morphTargets=h.morphTargets,v.morphNormals=h.morphNormals,v.morphColors=h.morphColors,v.morphTargetsCount=h.morphTargetsCount,v.numClippingPlanes=h.numClippingPlanes,v.numIntersection=h.numClipIntersection,v.vertexAlphas=h.vertexAlphas,v.vertexTangents=h.vertexTangents,v.toneMapping=h.toneMapping}function za(R,h,v,E,T){h.isScene!==!0&&(h=$e),L.resetTextureUnits();const F=h.fog,D=E.isMeshStandardMaterial?h.environment:null,V=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xi,K=(E.isMeshStandardMaterial?X:w).get(E.envMap||D),Y=E.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,j=!!v.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),G=!!v.morphAttributes.position,he=!!v.morphAttributes.normal,me=!!v.morphAttributes.color;let ge=Mr;E.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=x.toneMapping);const Ce=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,fe=Ce!==void 0?Ce.length:0,ie=He.get(E),be=g.state.lights;if(Z===!0&&(oe===!0||R!==ee)){const Ge=R===ee&&E.id===I;_e.setState(E,R,Ge)}let De=!1;E.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==be.state.version||ie.outputColorSpace!==V||T.isBatchedMesh&&ie.batching===!1||!T.isBatchedMesh&&ie.batching===!0||T.isBatchedMesh&&ie.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&ie.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&ie.instancing===!1||!T.isInstancedMesh&&ie.instancing===!0||T.isSkinnedMesh&&ie.skinning===!1||!T.isSkinnedMesh&&ie.skinning===!0||T.isInstancedMesh&&ie.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&ie.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&ie.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&ie.instancingMorph===!1&&T.morphTexture!==null||ie.envMap!==K||E.fog===!0&&ie.fog!==F||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==_e.numPlanes||ie.numIntersection!==_e.numIntersection)||ie.vertexAlphas!==Y||ie.vertexTangents!==j||ie.morphTargets!==G||ie.morphNormals!==he||ie.morphColors!==me||ie.toneMapping!==ge||ie.morphTargetsCount!==fe)&&(De=!0):(De=!0,ie.__version=E.version);let rt=ie.currentProgram;De===!0&&(rt=is(E,h,T));let Dt=!1,qe=!1,et=!1;const We=rt.getUniforms(),bt=ie.uniforms;if(Be.useProgram(rt.program)&&(Dt=!0,qe=!0,et=!0),E.id!==I&&(I=E.id,qe=!0),Dt||ee!==R){ot.reverseDepthBuffer?(ce.copy(R.projectionMatrix),LM(ce),DM(ce),We.setValue(O,"projectionMatrix",ce)):We.setValue(O,"projectionMatrix",R.projectionMatrix),We.setValue(O,"viewMatrix",R.matrixWorldInverse);const Ge=We.map.cameraPosition;Ge!==void 0&&Ge.setValue(O,Ie.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&We.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&We.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,qe=!0,et=!0)}if(T.isSkinnedMesh){We.setOptional(O,T,"bindMatrix"),We.setOptional(O,T,"bindMatrixInverse");const Ge=T.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),We.setValue(O,"boneTexture",Ge.boneTexture,L))}T.isBatchedMesh&&(We.setOptional(O,T,"batchingTexture"),We.setValue(O,"batchingTexture",T._matricesTexture,L),We.setOptional(O,T,"batchingIdTexture"),We.setValue(O,"batchingIdTexture",T._indirectTexture,L),We.setOptional(O,T,"batchingColorTexture"),T._colorsTexture!==null&&We.setValue(O,"batchingColorTexture",T._colorsTexture,L));const Ct=v.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&Ne.update(T,v,rt),(qe||ie.receiveShadow!==T.receiveShadow)&&(ie.receiveShadow=T.receiveShadow,We.setValue(O,"receiveShadow",T.receiveShadow)),E.isMeshGouraudMaterial&&E.envMap!==null&&(bt.envMap.value=K,bt.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),E.isMeshStandardMaterial&&E.envMap===null&&h.environment!==null&&(bt.envMapIntensity.value=h.environmentIntensity),qe&&(We.setValue(O,"toneMappingExposure",x.toneMappingExposure),ie.needsLights&&iu(bt,et),F&&E.fog===!0&&Me.refreshFogUniforms(bt,F),Me.refreshMaterialUniforms(bt,E,J,W,g.state.transmissionRenderTarget[R.id]),ec.upload(O,Ba(ie),bt,L)),E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(ec.upload(O,Ba(ie),bt,L),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&We.setValue(O,"center",T.center),We.setValue(O,"modelViewMatrix",T.modelViewMatrix),We.setValue(O,"normalMatrix",T.normalMatrix),We.setValue(O,"modelMatrix",T.matrixWorld),E.isShaderMaterial||E.isRawShaderMaterial){const Ge=E.uniformsGroups;for(let ut=0,$n=Ge.length;ut<$n;ut++){const qi=Ge[ut];k.update(qi,rt),k.bind(qi,rt)}}return rt}function iu(R,h){R.ambientLightColor.needsUpdate=h,R.lightProbe.needsUpdate=h,R.directionalLights.needsUpdate=h,R.directionalLightShadows.needsUpdate=h,R.pointLights.needsUpdate=h,R.pointLightShadows.needsUpdate=h,R.spotLights.needsUpdate=h,R.spotLightShadows.needsUpdate=h,R.rectAreaLights.needsUpdate=h,R.hemisphereLights.needsUpdate=h}function Si(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,h,v){He.get(R.texture).__webglTexture=h,He.get(R.depthTexture).__webglTexture=v;const E=He.get(R);E.__hasExternalTextures=!0,E.__autoAllocateDepthBuffer=v===void 0,E.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),E.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,h){const v=He.get(R);v.__webglFramebuffer=h,v.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(R,h=0,v=0){P=R,U=h,b=v;let E=!0,T=null,F=!1,D=!1;if(R){const K=He.get(R);if(K.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(O.FRAMEBUFFER,null),E=!1;else if(K.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(K.__hasExternalTextures)L.rebindTextures(R,He.get(R.texture).__webglTexture,He.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const G=R.depthTexture;if(K.__boundDepthTexture!==G){if(G!==null&&He.has(G)&&(R.width!==G.image.width||R.height!==G.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Y=R.texture;(Y.isData3DTexture||Y.isDataArrayTexture||Y.isCompressedArrayTexture)&&(D=!0);const j=He.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(j[h])?T=j[h][v]:T=j[h],F=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?T=He.get(R).__webglMultisampledFramebuffer:Array.isArray(j)?T=j[v]:T=j,S.copy(R.viewport),C.copy(R.scissor),$=R.scissorTest}else S.copy(Q).multiplyScalar(J).floor(),C.copy(le).multiplyScalar(J).floor(),$=xe;if(Be.bindFramebuffer(O.FRAMEBUFFER,T)&&E&&Be.drawBuffers(R,T),Be.viewport(S),Be.scissor(C),Be.setScissorTest($),F){const K=He.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+h,K.__webglTexture,v)}else if(D){const K=He.get(R.texture),Y=h||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,K.__webglTexture,v||0,Y)}I=-1},this.readRenderTargetPixels=function(R,h,v,E,T,F,D){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&D!==void 0&&(V=V[D]),V){Be.bindFramebuffer(O.FRAMEBUFFER,V);try{const K=R.texture,Y=K.format,j=K.type;if(!ot.textureFormatReadable(Y)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}h>=0&&h<=R.width-E&&v>=0&&v<=R.height-T&&O.readPixels(h,v,E,T,ke.convert(Y),ke.convert(j),F)}finally{const K=P!==null?He.get(P).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,K)}}},this.readRenderTargetPixelsAsync=async function(R,h,v,E,T,F,D){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=He.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&D!==void 0&&(V=V[D]),V){const K=R.texture,Y=K.format,j=K.type;if(!ot.textureFormatReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(h>=0&&h<=R.width-E&&v>=0&&v<=R.height-T){Be.bindFramebuffer(O.FRAMEBUFFER,V);const G=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.bufferData(O.PIXEL_PACK_BUFFER,F.byteLength,O.STREAM_READ),O.readPixels(h,v,E,T,ke.convert(Y),ke.convert(j),0);const he=P!==null?He.get(P).__webglFramebuffer:null;Be.bindFramebuffer(O.FRAMEBUFFER,he);const me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bM(O,me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,G),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,F),O.deleteBuffer(G),O.deleteSync(me),F}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,h=null,v=0){R.isTexture!==!0&&(Jl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),h=arguments[0]||null,R=arguments[1]);const E=Math.pow(2,-v),T=Math.floor(R.image.width*E),F=Math.floor(R.image.height*E),D=h!==null?h.x:0,V=h!==null?h.y:0;L.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,v,0,0,D,V,T,F),Be.unbindTexture()},this.copyTextureToTexture=function(R,h,v=null,E=null,T=0){R.isTexture!==!0&&(Jl("WebGLRenderer: copyTextureToTexture function signature has changed."),E=arguments[0]||null,R=arguments[1],h=arguments[2],T=arguments[3]||0,v=null);let F,D,V,K,Y,j;v!==null?(F=v.max.x-v.min.x,D=v.max.y-v.min.y,V=v.min.x,K=v.min.y):(F=R.image.width,D=R.image.height,V=0,K=0),E!==null?(Y=E.x,j=E.y):(Y=0,j=0);const G=ke.convert(h.format),he=ke.convert(h.type);L.setTexture2D(h,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,h.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,h.unpackAlignment);const me=O.getParameter(O.UNPACK_ROW_LENGTH),ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ce=O.getParameter(O.UNPACK_SKIP_PIXELS),fe=O.getParameter(O.UNPACK_SKIP_ROWS),ie=O.getParameter(O.UNPACK_SKIP_IMAGES),be=R.isCompressedTexture?R.mipmaps[T]:R.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,be.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,V),O.pixelStorei(O.UNPACK_SKIP_ROWS,K),R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,T,Y,j,F,D,G,he,be.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,T,Y,j,be.width,be.height,G,be.data):O.texSubImage2D(O.TEXTURE_2D,T,Y,j,F,D,G,he,be),O.pixelStorei(O.UNPACK_ROW_LENGTH,me),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,fe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie),T===0&&h.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(R,h,v=null,E=null,T=0){R.isTexture!==!0&&(Jl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),v=arguments[0]||null,E=arguments[1]||null,R=arguments[2],h=arguments[3],T=arguments[4]||0);let F,D,V,K,Y,j,G,he,me;const ge=R.isCompressedTexture?R.mipmaps[T]:R.image;v!==null?(F=v.max.x-v.min.x,D=v.max.y-v.min.y,V=v.max.z-v.min.z,K=v.min.x,Y=v.min.y,j=v.min.z):(F=ge.width,D=ge.height,V=ge.depth,K=0,Y=0,j=0),E!==null?(G=E.x,he=E.y,me=E.z):(G=0,he=0,me=0);const Ce=ke.convert(h.format),fe=ke.convert(h.type);let ie;if(h.isData3DTexture)L.setTexture3D(h,0),ie=O.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)L.setTexture2DArray(h,0),ie=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,h.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,h.unpackAlignment);const be=O.getParameter(O.UNPACK_ROW_LENGTH),De=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rt=O.getParameter(O.UNPACK_SKIP_PIXELS),Dt=O.getParameter(O.UNPACK_SKIP_ROWS),qe=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ge.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ge.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,K),O.pixelStorei(O.UNPACK_SKIP_ROWS,Y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,j),R.isDataTexture||R.isData3DTexture?O.texSubImage3D(ie,T,G,he,me,F,D,V,Ce,fe,ge.data):h.isCompressedArrayTexture?O.compressedTexSubImage3D(ie,T,G,he,me,F,D,V,Ce,ge.data):O.texSubImage3D(ie,T,G,he,me,F,D,V,Ce,fe,ge),O.pixelStorei(O.UNPACK_ROW_LENGTH,be),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,De),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Dt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qe),T===0&&h.generateMipmaps&&O.generateMipmap(ie),Be.unbindTexture()},this.initRenderTarget=function(R){He.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Be.unbindTexture()},this.resetState=function(){U=0,b=0,P=null,Be.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===np?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===tu?"display-p3":"srgb"}}class XA extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class N_ extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=gt,u=gt,f,p){super(null,o,a,l,c,u,r,s,f,p),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gg extends Wn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new ht,vg=new ht,Al=[],_g=new ts,YA=new ht,No=new un,Fo=new go;class xg extends un{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new gg(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,YA)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,xs),_g.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(_g)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new go),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,xs),Fo.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Fo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xs),vg.multiplyMatrices(i,xs),No.matrixWorld=vg,No.raycast(e,Al);for(let o=0,a=Al.length;o<a;o++){const l=Al[o];l.instanceId=s,l.object=this,n.push(l)}Al.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new gg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new N_(new Float32Array(r*this.count),r,this.count,eu,Pn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Aa extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ic=new H,Uc=new H,yg=new ht,Oo=new rp,Cl=new go,sh=new H,Sg=new H;class jA extends jt{constructor(e=new En,n=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ic.fromBufferAttribute(n,r-1),Uc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ic.distanceTo(Uc);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;yg.copy(r).invert(),Oo.copy(e.ray).applyMatrix4(yg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=c){const d=u.getX(M),y=u.getX(M+1),x=Rl(this,e,Oo,l,d,y);x&&n.push(x)}if(this.isLineLoop){const M=u.getX(_-1),g=u.getX(m),d=Rl(this,e,Oo,l,M,g);d&&n.push(d)}}else{const m=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let M=m,g=_-1;M<g;M+=c){const d=Rl(this,e,Oo,l,M,M+1);d&&n.push(d)}if(this.isLineLoop){const M=Rl(this,e,Oo,l,_-1,m);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Ic.fromBufferAttribute(o,r),Uc.fromBufferAttribute(o,s),n.distanceSqToSegment(Ic,Uc,sh,Sg)>i)return;sh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(sh);if(!(l<e.near||l>e.far))return{distance:l,point:Sg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Mg=new H,Eg=new H;class Nc extends jA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Mg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Pl=new H,bl=new H,oh=new H,Ll=new Bn;class Tg extends En{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Ws*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),p={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:g,c:d}=Ll;if(M.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Ll.getNormal(oh),f[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,f[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const x=(y+1)%3,A=f[y],U=f[x],b=Ll[u[y]],P=Ll[u[x]],I=`${A}_${U}`,ee=`${U}_${A}`;ee in p&&p[ee]?(oh.dot(p[ee].normal)<=s&&(m.push(b.x,b.y,b.z),m.push(P.x,P.y,P.z)),p[ee]=null):I in p||(p[I]={index0:c[y],index1:c[x],normal:oh.clone()})}}for(const _ in p)if(p[_]){const{index0:M,index1:g}=p[_];Pl.fromBufferAttribute(a,M),bl.fromBufferAttribute(a,g),m.push(Pl.x,Pl.y,Pl.z),m.push(bl.x,bl.y,bl.z)}this.setAttribute("position",new kt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class $A extends Rr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class qA extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class F_ extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KA extends F_{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ZA extends Rr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const wg={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class QA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=c.length;f<p;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const JA=new QA;class up{constructor(e){this.manager=e!==void 0?e:JA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}up.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class eC extends Error{constructor(e,n){super(e),this.response=n}}class tC extends up{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wg.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Ri[e]!==void 0){Ri[e].push({onLoad:n,onProgress:i,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ri[e],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,_=m!==0;let M=0;const g=new ReadableStream({start(d){y();function y(){f.read().then(({done:x,value:A})=>{if(x)d.close();else{M+=A.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:m});for(let b=0,P=u.length;b<P;b++){const I=u[b];I.onProgress&&I.onProgress(U)}d.enqueue(A),y()}},x=>{d.error(x)})}}});return new Response(g)}else throw new eC(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{wg.add(e,c);const u=Ri[e];delete Ri[e];for(let f=0,p=u.length;f<p;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let f=0,p=u.length;f<p;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class nC extends up{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new N_,a=new tC(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bi,o.wrapT=c.wrapT!==void 0?c.wrapT:Bi,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=dr),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c)},i,r),o}}class O_ extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ah=new ht,Ag=new H,Cg=new H;class iC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new op,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ag.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ag),Cg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cg),n.updateMatrixWorld(),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rC extends iC{constructor(){super(new ap(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sC extends O_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new rC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class oC extends O_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class k_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Rg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Rg(){return performance.now()}const Pg=new ht;class aC{constructor(e,n,i=0,r=1/0){this.ray=new rp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new sp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Pg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pg),this}intersectObject(e,n=!0,i=[]){return Kf(e,this,i,n),i.sort(bg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kf(e[r],this,i,n);return i.sort(bg),i}}function bg(t,e){return t.distance-e.distance}function Kf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Kf(s[o],e,n,!0)}}class lC extends Nc{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let p=0,m=0,_=-a;p<=n;p++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const M=p===s?i:r;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}const u=new En;u.setAttribute("position",new kt(l,3)),u.setAttribute("color",new kt(c,3));const f=new Aa({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cC extends Nc{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new En;r.setAttribute("position",new kt(n,3)),r.setAttribute("color",new kt(i,3));const s=new Aa({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ve,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$d}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$d);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var zn=Uint8Array,Fs=Uint16Array,uC=Int32Array,B_=new zn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),z_=new zn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),hC=new zn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),H_=function(t,e){for(var n=new Fs(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new uC(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},V_=H_(B_,2),G_=V_.b,fC=V_.r;G_[28]=258,fC[258]=28;var dC=H_(z_,0),pC=dC.b,Zf=new Fs(32768);for(var xt=0;xt<32768;++xt){var ir=(xt&43690)>>1|(xt&21845)<<1;ir=(ir&52428)>>2|(ir&13107)<<2,ir=(ir&61680)>>4|(ir&3855)<<4,Zf[xt]=((ir&65280)>>8|(ir&255)<<8)>>1}var ia=function(t,e,n){for(var i=t.length,r=0,s=new Fs(e);r<i;++r)t[r]&&++s[t[r]-1];var o=new Fs(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(n){a=new Fs(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var c=r<<4|t[r],u=e-t[r],f=o[t[r]-1]++<<u,p=f|(1<<u)-1;f<=p;++f)a[Zf[f]>>l]=c}else for(a=new Fs(i),r=0;r<i;++r)t[r]&&(a[r]=Zf[o[t[r]-1]++]>>15-t[r]);return a},Ia=new zn(288);for(var xt=0;xt<144;++xt)Ia[xt]=8;for(var xt=144;xt<256;++xt)Ia[xt]=9;for(var xt=256;xt<280;++xt)Ia[xt]=7;for(var xt=280;xt<288;++xt)Ia[xt]=8;var W_=new zn(32);for(var xt=0;xt<32;++xt)W_[xt]=5;var mC=ia(Ia,9,1),gC=ia(W_,5,1),lh=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Jn=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},ch=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},vC=function(t){return(t+7)/8|0},_C=function(t,e,n){return(n==null||n>t.length)&&(n=t.length),new zn(t.subarray(e,n))},xC=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ti=function(t,e,n){var i=new Error(e||xC[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,ti),!n)throw i;return i},yC=function(t,e,n,i){var r=t.length,s=0;if(!r||e.f&&!e.l)return n||new zn(0);var o=!n,a=o||e.i!=2,l=e.i;o&&(n=new zn(r*3));var c=function(st){var Ke=n.length;if(st>Ke){var O=new zn(Math.max(Ke*2,st));O.set(n),n=O}},u=e.f||0,f=e.p||0,p=e.b||0,m=e.l,_=e.d,M=e.m,g=e.n,d=r*8;do{if(!m){u=Jn(t,f,1);var y=Jn(t,f+1,3);if(f+=3,y)if(y==1)m=mC,_=gC,M=9,g=5;else if(y==2){var b=Jn(t,f,31)+257,P=Jn(t,f+10,15)+4,I=b+Jn(t,f+5,31)+1;f+=14;for(var ee=new zn(I),S=new zn(19),C=0;C<P;++C)S[hC[C]]=Jn(t,f+C*3,7);f+=P*3;for(var $=lh(S),q=(1<<$)-1,ne=ia(S,$,1),C=0;C<I;){var z=ne[Jn(t,f,q)];f+=z&15;var x=z>>4;if(x<16)ee[C++]=x;else{var W=0,J=0;for(x==16?(J=3+Jn(t,f,3),f+=2,W=ee[C-1]):x==17?(J=3+Jn(t,f,7),f+=3):x==18&&(J=11+Jn(t,f,127),f+=7);J--;)ee[C++]=W}}var N=ee.subarray(0,b),te=ee.subarray(b);M=lh(N),g=lh(te),m=ia(N,M,1),_=ia(te,g,1)}else ti(1);else{var x=vC(f)+4,A=t[x-4]|t[x-3]<<8,U=x+A;if(U>r){l&&ti(0);break}a&&c(p+A),n.set(t.subarray(x,U),p),e.b=p+=A,e.p=f=U*8,e.f=u;continue}if(f>d){l&&ti(0);break}}a&&c(p+131072);for(var Q=(1<<M)-1,le=(1<<g)-1,xe=f;;xe=f){var W=m[ch(t,f)&Q],Le=W>>4;if(f+=W&15,f>d){l&&ti(0);break}if(W||ti(2),Le<256)n[p++]=Le;else if(Le==256){xe=f,m=null;break}else{var Z=Le-254;if(Le>264){var C=Le-257,oe=B_[C];Z=Jn(t,f,(1<<oe)-1)+G_[C],f+=oe}var ce=_[ch(t,f)&le],ve=ce>>4;ce||ti(3),f+=ce&15;var te=pC[ve];if(ve>3){var oe=z_[ve];te+=ch(t,f)&(1<<oe)-1,f+=oe}if(f>d){l&&ti(0);break}a&&c(p+131072);var Ie=p+Z;if(p<te){var Fe=s-te,$e=Math.min(te,Ie);for(Fe+p<0&&ti(3);p<$e;++p)n[p]=i[Fe+p]}for(;p<Ie;++p)n[p]=n[p-te]}}e.l=m,e.p=xe,e.b=p,e.f=u,m&&(u=1,e.m=M,e.d=_,e.n=g)}while(!u);return p!=n.length&&o?_C(n,0,p):n.subarray(0,p)},SC=new zn(0),MC=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&ti(6,"invalid zlib data"),(t[1]>>5&1)==1&&ti(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function Dl(t,e){return yC(t.subarray(MC(t),-4),{i:2},e,e)}var EC=typeof TextDecoder<"u"&&new TextDecoder,TC=0;try{EC.decode(SC,{stream:!0}),TC=1}catch{}class wC extends nC{constructor(e){super(e),this.type=bn}parse(e){const ee=Math.pow(2.7182818,2.2);function S(h,v){let E=0;for(let F=0;F<65536;++F)(F==0||h[F>>3]&1<<(F&7))&&(v[E++]=F);const T=E-1;for(;E<65536;)v[E++]=0;return T}function C(h){for(let v=0;v<16384;v++)h[v]={},h[v].len=0,h[v].lit=0,h[v].p=null}const $={l:0,c:0,lc:0};function q(h,v,E,T,F){for(;E<h;)v=v<<8|Je(T,F),E+=8;E-=h,$.l=v>>E&(1<<h)-1,$.c=v,$.lc=E}const ne=new Array(59);function z(h){for(let E=0;E<=58;++E)ne[E]=0;for(let E=0;E<65537;++E)ne[h[E]]+=1;let v=0;for(let E=58;E>0;--E){const T=v+ne[E]>>1;ne[E]=v,v=T}for(let E=0;E<65537;++E){const T=h[E];T>0&&(h[E]=T|ne[T]++<<6)}}function W(h,v,E,T,F,D){const V=v;let K=0,Y=0;for(;T<=F;T++){if(V.value-v.value>E)return!1;q(6,K,Y,h,V);const j=$.l;if(K=$.c,Y=$.lc,D[T]=j,j==63){if(V.value-v.value>E)throw new Error("Something wrong with hufUnpackEncTable");q(8,K,Y,h,V);let G=$.l+6;if(K=$.c,Y=$.lc,T+G>F+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)D[T++]=0;T--}else if(j>=59){let G=j-59+2;if(T+G>F+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)D[T++]=0;T--}}z(D)}function J(h){return h&63}function N(h){return h>>6}function te(h,v,E,T){for(;v<=E;v++){const F=N(h[v]),D=J(h[v]);if(F>>D)throw new Error("Invalid table entry");if(D>14){const V=T[F>>D-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const K=V.p;V.p=new Array(V.lit);for(let Y=0;Y<V.lit-1;++Y)V.p[Y]=K[Y]}else V.p=new Array(1);V.p[V.lit-1]=v}else if(D){let V=0;for(let K=1<<14-D;K>0;K--){const Y=T[(F<<14-D)+V];if(Y.len||Y.p)throw new Error("Invalid table entry");Y.len=D,Y.lit=v,V++}}}return!0}const Q={c:0,lc:0};function le(h,v,E,T){h=h<<8|Je(E,T),v+=8,Q.c=h,Q.lc=v}const xe={c:0,lc:0};function Le(h,v,E,T,F,D,V,K,Y){if(h==v){T<8&&(le(E,T,F,D),E=Q.c,T=Q.lc),T-=8;let j=E>>T;if(j=new Uint8Array([j])[0],K.value+j>Y)return!1;const G=V[K.value-1];for(;j-- >0;)V[K.value++]=G}else if(K.value<Y)V[K.value++]=h;else return!1;xe.c=E,xe.lc=T}function Z(h){return h&65535}function oe(h){const v=Z(h);return v>32767?v-65536:v}const ce={a:0,b:0};function ve(h,v){const E=oe(h),F=oe(v),D=E+(F&1)+(F>>1),V=D,K=D-F;ce.a=V,ce.b=K}function Ie(h,v){const E=Z(h),T=Z(v),F=E-(T>>1)&65535,D=T+F-32768&65535;ce.a=D,ce.b=F}function Fe(h,v,E,T,F,D,V){const K=V<16384,Y=E>F?F:E;let j=1,G,he;for(;j<=Y;)j<<=1;for(j>>=1,G=j,j>>=1;j>=1;){he=0;const me=he+D*(F-G),ge=D*j,Ce=D*G,fe=T*j,ie=T*G;let be,De,rt,Dt;for(;he<=me;he+=Ce){let qe=he;const et=he+T*(E-G);for(;qe<=et;qe+=ie){const We=qe+fe,bt=qe+ge,Ct=bt+fe;K?(ve(h[qe+v],h[bt+v]),be=ce.a,rt=ce.b,ve(h[We+v],h[Ct+v]),De=ce.a,Dt=ce.b,ve(be,De),h[qe+v]=ce.a,h[We+v]=ce.b,ve(rt,Dt),h[bt+v]=ce.a,h[Ct+v]=ce.b):(Ie(h[qe+v],h[bt+v]),be=ce.a,rt=ce.b,Ie(h[We+v],h[Ct+v]),De=ce.a,Dt=ce.b,Ie(be,De),h[qe+v]=ce.a,h[We+v]=ce.b,Ie(rt,Dt),h[bt+v]=ce.a,h[Ct+v]=ce.b)}if(E&j){const We=qe+ge;K?ve(h[qe+v],h[We+v]):Ie(h[qe+v],h[We+v]),be=ce.a,h[We+v]=ce.b,h[qe+v]=be}}if(F&j){let qe=he;const et=he+T*(E-G);for(;qe<=et;qe+=ie){const We=qe+fe;K?ve(h[qe+v],h[We+v]):Ie(h[qe+v],h[We+v]),be=ce.a,h[We+v]=ce.b,h[qe+v]=be}}G=j,j>>=1}return he}function $e(h,v,E,T,F,D,V,K,Y){let j=0,G=0;const he=V,me=Math.trunc(T.value+(F+7)/8);for(;T.value<me;)for(le(j,G,E,T),j=Q.c,G=Q.lc;G>=14;){const Ce=j>>G-14&16383,fe=v[Ce];if(fe.len)G-=fe.len,Le(fe.lit,D,j,G,E,T,K,Y,he),j=xe.c,G=xe.lc;else{if(!fe.p)throw new Error("hufDecode issues");let ie;for(ie=0;ie<fe.lit;ie++){const be=J(h[fe.p[ie]]);for(;G<be&&T.value<me;)le(j,G,E,T),j=Q.c,G=Q.lc;if(G>=be&&N(h[fe.p[ie]])==(j>>G-be&(1<<be)-1)){G-=be,Le(fe.p[ie],D,j,G,E,T,K,Y,he),j=xe.c,G=xe.lc;break}}if(ie==fe.lit)throw new Error("hufDecode issues")}}const ge=8-F&7;for(j>>=ge,G-=ge;G>0;){const Ce=v[j<<14-G&16383];if(Ce.len)G-=Ce.len,Le(Ce.lit,D,j,G,E,T,K,Y,he),j=xe.c,G=xe.lc;else throw new Error("hufDecode issues")}return!0}function st(h,v,E,T,F,D){const V={value:0},K=E.value,Y=ye(v,E),j=ye(v,E);E.value+=4;const G=ye(v,E);if(E.value+=4,Y<0||Y>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const he=new Array(65537),me=new Array(16384);C(me);const ge=T-(E.value-K);if(W(h,E,ge,Y,j,he),G>8*(T-(E.value-K)))throw new Error("Something wrong with hufUncompress");te(he,Y,j,me),$e(he,me,h,E,G,j,D,F,V)}function Ke(h,v,E){for(let T=0;T<E;++T)v[T]=h[v[T]]}function O(h){for(let v=1;v<h.length;v++){const E=h[v-1]+h[v]-128;h[v]=E}}function qt(h,v){let E=0,T=Math.floor((h.length+1)/2),F=0;const D=h.length-1;for(;!(F>D||(v[F++]=h[E++],F>D));)v[F++]=h[T++]}function Ze(h){let v=h.byteLength;const E=new Array;let T=0;const F=new DataView(h);for(;v>0;){const D=F.getInt8(T++);if(D<0){const V=-D;v-=V+1;for(let K=0;K<V;K++)E.push(F.getUint8(T++))}else{const V=D;v-=2;const K=F.getUint8(T++);for(let Y=0;Y<V+1;Y++)E.push(K)}}return E}function ot(h,v,E,T,F,D){let V=new DataView(D.buffer);const K=E[h.idx[0]].width,Y=E[h.idx[0]].height,j=3,G=Math.floor(K/8),he=Math.ceil(K/8),me=Math.ceil(Y/8),ge=K-(he-1)*8,Ce=Y-(me-1)*8,fe={value:0},ie=new Array(j),be=new Array(j),De=new Array(j),rt=new Array(j),Dt=new Array(j);for(let et=0;et<j;++et)Dt[et]=v[h.idx[et]],ie[et]=et<1?0:ie[et-1]+he*me,be[et]=new Float32Array(64),De[et]=new Uint16Array(64),rt[et]=new Uint16Array(he*64);for(let et=0;et<me;++et){let We=8;et==me-1&&(We=Ce);let bt=8;for(let Ge=0;Ge<he;++Ge){Ge==he-1&&(bt=ge);for(let ut=0;ut<j;++ut)De[ut].fill(0),De[ut][0]=F[ie[ut]++],Be(fe,T,De[ut]),pt(De[ut],be[ut]),He(be[ut]);L(be);for(let ut=0;ut<j;++ut)w(be[ut],rt[ut],Ge*64)}let Ct=0;for(let Ge=0;Ge<j;++Ge){const ut=E[h.idx[Ge]].type;for(let $n=8*et;$n<8*et+We;++$n){Ct=Dt[Ge][$n];for(let qi=0;qi<G;++qi){const li=qi*64+($n&7)*8;V.setUint16(Ct+0*2*ut,rt[Ge][li+0],!0),V.setUint16(Ct+1*2*ut,rt[Ge][li+1],!0),V.setUint16(Ct+2*2*ut,rt[Ge][li+2],!0),V.setUint16(Ct+3*2*ut,rt[Ge][li+3],!0),V.setUint16(Ct+4*2*ut,rt[Ge][li+4],!0),V.setUint16(Ct+5*2*ut,rt[Ge][li+5],!0),V.setUint16(Ct+6*2*ut,rt[Ge][li+6],!0),V.setUint16(Ct+7*2*ut,rt[Ge][li+7],!0),Ct+=8*2*ut}}if(G!=he)for(let $n=8*et;$n<8*et+We;++$n){const qi=Dt[Ge][$n]+8*G*2*ut,li=G*64+($n&7)*8;for(let Ha=0;Ha<bt;++Ha)V.setUint16(qi+Ha*2*ut,rt[Ge][li+Ha],!0)}}}const qe=new Uint16Array(K);V=new DataView(D.buffer);for(let et=0;et<j;++et){E[h.idx[et]].decoded=!0;const We=E[h.idx[et]].type;if(E[et].type==2)for(let bt=0;bt<Y;++bt){const Ct=Dt[et][bt];for(let Ge=0;Ge<K;++Ge)qe[Ge]=V.getUint16(Ct+Ge*2*We,!0);for(let Ge=0;Ge<K;++Ge)V.setFloat32(Ct+Ge*2*We,B(qe[Ge]),!0)}}}function Be(h,v,E){let T,F=1;for(;F<64;)T=v[h.value],T==65280?F=64:T>>8==255?F+=T&255:(E[F]=T,F++),h.value++}function pt(h,v){v[0]=B(h[0]),v[1]=B(h[1]),v[2]=B(h[5]),v[3]=B(h[6]),v[4]=B(h[14]),v[5]=B(h[15]),v[6]=B(h[27]),v[7]=B(h[28]),v[8]=B(h[2]),v[9]=B(h[4]),v[10]=B(h[7]),v[11]=B(h[13]),v[12]=B(h[16]),v[13]=B(h[26]),v[14]=B(h[29]),v[15]=B(h[42]),v[16]=B(h[3]),v[17]=B(h[8]),v[18]=B(h[12]),v[19]=B(h[17]),v[20]=B(h[25]),v[21]=B(h[30]),v[22]=B(h[41]),v[23]=B(h[43]),v[24]=B(h[9]),v[25]=B(h[11]),v[26]=B(h[18]),v[27]=B(h[24]),v[28]=B(h[31]),v[29]=B(h[40]),v[30]=B(h[44]),v[31]=B(h[53]),v[32]=B(h[10]),v[33]=B(h[19]),v[34]=B(h[23]),v[35]=B(h[32]),v[36]=B(h[39]),v[37]=B(h[45]),v[38]=B(h[52]),v[39]=B(h[54]),v[40]=B(h[20]),v[41]=B(h[22]),v[42]=B(h[33]),v[43]=B(h[38]),v[44]=B(h[46]),v[45]=B(h[51]),v[46]=B(h[55]),v[47]=B(h[60]),v[48]=B(h[21]),v[49]=B(h[34]),v[50]=B(h[37]),v[51]=B(h[47]),v[52]=B(h[50]),v[53]=B(h[56]),v[54]=B(h[59]),v[55]=B(h[61]),v[56]=B(h[35]),v[57]=B(h[36]),v[58]=B(h[48]),v[59]=B(h[49]),v[60]=B(h[57]),v[61]=B(h[58]),v[62]=B(h[62]),v[63]=B(h[63])}function He(h){const v=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),T=.5*Math.cos(3.14159/8),F=.5*Math.cos(3*3.14159/16),D=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),K=.5*Math.cos(7*3.14159/16),Y=new Array(4),j=new Array(4),G=new Array(4),he=new Array(4);for(let me=0;me<8;++me){const ge=me*8;Y[0]=T*h[ge+2],Y[1]=V*h[ge+2],Y[2]=T*h[ge+6],Y[3]=V*h[ge+6],j[0]=E*h[ge+1]+F*h[ge+3]+D*h[ge+5]+K*h[ge+7],j[1]=F*h[ge+1]-K*h[ge+3]-E*h[ge+5]-D*h[ge+7],j[2]=D*h[ge+1]-E*h[ge+3]+K*h[ge+5]+F*h[ge+7],j[3]=K*h[ge+1]-D*h[ge+3]+F*h[ge+5]-E*h[ge+7],G[0]=v*(h[ge+0]+h[ge+4]),G[3]=v*(h[ge+0]-h[ge+4]),G[1]=Y[0]+Y[3],G[2]=Y[1]-Y[2],he[0]=G[0]+G[1],he[1]=G[3]+G[2],he[2]=G[3]-G[2],he[3]=G[0]-G[1],h[ge+0]=he[0]+j[0],h[ge+1]=he[1]+j[1],h[ge+2]=he[2]+j[2],h[ge+3]=he[3]+j[3],h[ge+4]=he[3]-j[3],h[ge+5]=he[2]-j[2],h[ge+6]=he[1]-j[1],h[ge+7]=he[0]-j[0]}for(let me=0;me<8;++me)Y[0]=T*h[16+me],Y[1]=V*h[16+me],Y[2]=T*h[48+me],Y[3]=V*h[48+me],j[0]=E*h[8+me]+F*h[24+me]+D*h[40+me]+K*h[56+me],j[1]=F*h[8+me]-K*h[24+me]-E*h[40+me]-D*h[56+me],j[2]=D*h[8+me]-E*h[24+me]+K*h[40+me]+F*h[56+me],j[3]=K*h[8+me]-D*h[24+me]+F*h[40+me]-E*h[56+me],G[0]=v*(h[me]+h[32+me]),G[3]=v*(h[me]-h[32+me]),G[1]=Y[0]+Y[3],G[2]=Y[1]-Y[2],he[0]=G[0]+G[1],he[1]=G[3]+G[2],he[2]=G[3]-G[2],he[3]=G[0]-G[1],h[0+me]=he[0]+j[0],h[8+me]=he[1]+j[1],h[16+me]=he[2]+j[2],h[24+me]=he[3]+j[3],h[32+me]=he[3]-j[3],h[40+me]=he[2]-j[2],h[48+me]=he[1]-j[1],h[56+me]=he[0]-j[0]}function L(h){for(let v=0;v<64;++v){const E=h[0][v],T=h[1][v],F=h[2][v];h[0][v]=E+1.5747*F,h[1][v]=E-.1873*T-.4682*F,h[2][v]=E+1.8556*T}}function w(h,v,E){for(let T=0;T<64;++T)v[E+T]=Hm.toHalfFloat(X(h[T]))}function X(h){return h<=1?Math.sign(h)*Math.pow(Math.abs(h),2.2):Math.sign(h)*Math.pow(ee,Math.abs(h)-1)}function se(h){return new DataView(h.array.buffer,h.offset.value,h.size)}function de(h){const v=h.viewer.buffer.slice(h.offset.value,h.offset.value+h.size),E=new Uint8Array(Ze(v)),T=new Uint8Array(E.length);return O(E),qt(E,T),new DataView(T.buffer)}function re(h){const v=h.array.slice(h.offset.value,h.offset.value+h.size),E=Dl(v),T=new Uint8Array(E.length);return O(E),qt(E,T),new DataView(T.buffer)}function Ue(h){const v=h.viewer,E={value:h.offset.value},T=new Uint16Array(h.columns*h.lines*(h.inputChannels.length*h.type)),F=new Uint8Array(8192);let D=0;const V=new Array(h.inputChannels.length);for(let Ce=0,fe=h.inputChannels.length;Ce<fe;Ce++)V[Ce]={},V[Ce].start=D,V[Ce].end=V[Ce].start,V[Ce].nx=h.columns,V[Ce].ny=h.lines,V[Ce].size=h.type,D+=V[Ce].nx*V[Ce].ny*V[Ce].size;const K=ae(v,E),Y=ae(v,E);if(Y>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(K<=Y)for(let Ce=0;Ce<Y-K+1;Ce++)F[Ce+K]=ke(v,E);const j=new Uint16Array(65536),G=S(F,j),he=ye(v,E);st(h.array,v,E,he,T,D);for(let Ce=0;Ce<h.inputChannels.length;++Ce){const fe=V[Ce];for(let ie=0;ie<V[Ce].size;++ie)Fe(T,fe.start+ie,fe.nx,fe.size,fe.ny,fe.nx*fe.size,G)}Ke(j,T,D);let me=0;const ge=new Uint8Array(T.buffer.byteLength);for(let Ce=0;Ce<h.lines;Ce++)for(let fe=0;fe<h.inputChannels.length;fe++){const ie=V[fe],be=ie.nx*ie.size,De=new Uint8Array(T.buffer,ie.end*2,be*2);ge.set(De,me),me+=be*2,ie.end+=be}return new DataView(ge.buffer)}function Me(h){const v=h.array.slice(h.offset.value,h.offset.value+h.size),E=Dl(v),T=h.inputChannels.length*h.lines*h.columns*h.totalBytes,F=new ArrayBuffer(T),D=new DataView(F);let V=0,K=0;const Y=new Array(4);for(let j=0;j<h.lines;j++)for(let G=0;G<h.inputChannels.length;G++){let he=0;switch(h.inputChannels[G].pixelType){case 1:Y[0]=V,Y[1]=Y[0]+h.columns,V=Y[1]+h.columns;for(let ge=0;ge<h.columns;++ge){const Ce=E[Y[0]++]<<8|E[Y[1]++];he+=Ce,D.setUint16(K,he,!0),K+=2}break;case 2:Y[0]=V,Y[1]=Y[0]+h.columns,Y[2]=Y[1]+h.columns,V=Y[2]+h.columns;for(let ge=0;ge<h.columns;++ge){const Ce=E[Y[0]++]<<24|E[Y[1]++]<<16|E[Y[2]++]<<8;he+=Ce,D.setUint32(K,he,!0),K+=4}break}}return D}function Ae(h){const v=h.viewer,E={value:h.offset.value},T=new Uint8Array(h.columns*h.lines*(h.inputChannels.length*h.type*2)),F={version:Xe(v,E),unknownUncompressedSize:Xe(v,E),unknownCompressedSize:Xe(v,E),acCompressedSize:Xe(v,E),dcCompressedSize:Xe(v,E),rleCompressedSize:Xe(v,E),rleUncompressedSize:Xe(v,E),rleRawSize:Xe(v,E),totalAcUncompressedCount:Xe(v,E),totalDcUncompressedCount:Xe(v,E),acCompression:Xe(v,E)};if(F.version<2)throw new Error("EXRLoader.parse: "+Si.compression+" version "+F.version+" is unsupported");const D=new Array;let V=ae(v,E)-2;for(;V>0;){const fe=Qe(v.buffer,E),ie=ke(v,E),be=ie>>2&3,De=(ie>>4)-1,rt=new Int8Array([De])[0],Dt=ke(v,E);D.push({name:fe,index:rt,type:Dt,compression:be}),V-=fe.length+3}const K=Si.channels,Y=new Array(h.inputChannels.length);for(let fe=0;fe<h.inputChannels.length;++fe){const ie=Y[fe]={},be=K[fe];ie.name=be.name,ie.compression=0,ie.decoded=!1,ie.type=be.pixelType,ie.pLinear=be.pLinear,ie.width=h.columns,ie.height=h.lines}const j={idx:new Array(3)};for(let fe=0;fe<h.inputChannels.length;++fe){const ie=Y[fe];for(let be=0;be<D.length;++be){const De=D[be];ie.name==De.name&&(ie.compression=De.compression,De.index>=0&&(j.idx[De.index]=fe),ie.offset=fe)}}let G,he,me;if(F.acCompressedSize>0)switch(F.acCompression){case 0:G=new Uint16Array(F.totalAcUncompressedCount),st(h.array,v,E,F.acCompressedSize,G,F.totalAcUncompressedCount);break;case 1:const fe=h.array.slice(E.value,E.value+F.totalAcUncompressedCount),ie=Dl(fe);G=new Uint16Array(ie.buffer),E.value+=F.totalAcUncompressedCount;break}if(F.dcCompressedSize>0){const fe={array:h.array,offset:E,size:F.dcCompressedSize};he=new Uint16Array(re(fe).buffer),E.value+=F.dcCompressedSize}if(F.rleRawSize>0){const fe=h.array.slice(E.value,E.value+F.rleCompressedSize),ie=Dl(fe);me=Ze(ie.buffer),E.value+=F.rleCompressedSize}let ge=0;const Ce=new Array(Y.length);for(let fe=0;fe<Ce.length;++fe)Ce[fe]=new Array;for(let fe=0;fe<h.lines;++fe)for(let ie=0;ie<Y.length;++ie)Ce[ie].push(ge),ge+=Y[ie].width*h.type*2;ot(j,Ce,Y,G,he,T);for(let fe=0;fe<Y.length;++fe){const ie=Y[fe];if(!ie.decoded)switch(ie.compression){case 2:let be=0,De=0;for(let rt=0;rt<h.lines;++rt){let Dt=Ce[fe][be];for(let qe=0;qe<ie.width;++qe){for(let et=0;et<2*ie.type;++et)T[Dt++]=me[De+et*ie.width*ie.height];De++}be++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(T.buffer)}function Qe(h,v){const E=new Uint8Array(h);let T=0;for(;E[v.value+T]!=0;)T+=1;const F=new TextDecoder().decode(E.slice(v.value,v.value+T));return v.value=v.value+T+1,F}function _e(h,v,E){const T=new TextDecoder().decode(new Uint8Array(h).slice(v.value,v.value+E));return v.value=v.value+E,T}function Pe(h,v){const E=Ne(h,v),T=ye(h,v);return[E,T]}function ze(h,v){const E=ye(h,v),T=ye(h,v);return[E,T]}function Ne(h,v){const E=h.getInt32(v.value,!0);return v.value=v.value+4,E}function ye(h,v){const E=h.getUint32(v.value,!0);return v.value=v.value+4,E}function Je(h,v){const E=h[v.value];return v.value=v.value+1,E}function ke(h,v){const E=h.getUint8(v.value);return v.value=v.value+1,E}const Xe=function(h,v){let E;return"getBigInt64"in DataView.prototype?E=Number(h.getBigInt64(v.value,!0)):E=h.getUint32(v.value+4,!0)+Number(h.getUint32(v.value,!0)<<32),v.value+=8,E};function k(h,v){const E=h.getFloat32(v.value,!0);return v.value+=4,E}function Te(h,v){return Hm.toHalfFloat(k(h,v))}function B(h){const v=(h&31744)>>10,E=h&1023;return(h>>15?-1:1)*(v?v===31?E?NaN:1/0:Math.pow(2,v-15)*(1+E/1024):6103515625e-14*(E/1024))}function ae(h,v){const E=h.getUint16(v.value,!0);return v.value+=2,E}function Ee(h,v){return B(ae(h,v))}function we(h,v,E,T){const F=E.value,D=[];for(;E.value<F+T-1;){const V=Qe(v,E),K=Ne(h,E),Y=ke(h,E);E.value+=3;const j=Ne(h,E),G=Ne(h,E);D.push({name:V,pixelType:K,pLinear:Y,xSampling:j,ySampling:G})}return E.value+=1,D}function it(h,v){const E=k(h,v),T=k(h,v),F=k(h,v),D=k(h,v),V=k(h,v),K=k(h,v),Y=k(h,v),j=k(h,v);return{redX:E,redY:T,greenX:F,greenY:D,blueX:V,blueY:K,whiteX:Y,whiteY:j}}function At(h,v){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],T=ke(h,v);return E[T]}function Kt(h,v){const E=Ne(h,v),T=Ne(h,v),F=Ne(h,v),D=Ne(h,v);return{xMin:E,yMin:T,xMax:F,yMax:D}}function at(h,v){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],T=ke(h,v);return E[T]}function Zt(h,v){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],T=ke(h,v);return E[T]}function jn(h,v){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],T=["ROUND_DOWN","ROUND_UP"],F=ye(h,v),D=ye(h,v),V=ke(h,v);return{xSize:F,ySize:D,levelMode:E[V&15],roundingMode:T[V>>4]}}function Na(h,v){const E=k(h,v),T=k(h,v);return[E,T]}function Fa(h,v){const E=k(h,v),T=k(h,v),F=k(h,v);return[E,T,F]}function yi(h,v,E,T,F){if(T==="string"||T==="stringvector"||T==="iccProfile")return _e(v,E,F);if(T==="chlist")return we(h,v,E,F);if(T==="chromaticities")return it(h,E);if(T==="compression")return At(h,E);if(T==="box2i")return Kt(h,E);if(T==="envmap")return Zt(h,E);if(T==="tiledesc")return jn(h,E);if(T==="lineOrder")return at(h,E);if(T==="float")return k(h,E);if(T==="v2f")return Na(h,E);if(T==="v3f")return Fa(h,E);if(T==="int")return Ne(h,E);if(T==="rational")return Pe(h,E);if(T==="timecode")return ze(h,E);if(T==="preview")return E.value+=F,"skipped";E.value+=F}function xo(h,v){const E=Math.log2(h);return v=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function Oa(h,v,E){let T=0;switch(h.levelMode){case"ONE_LEVEL":T=1;break;case"MIPMAP_LEVELS":T=xo(Math.max(v,E),h.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return T}function yo(h,v,E,T){const F=new Array(h);for(let D=0;D<h;D++){const V=1<<D;let K=v/V|0;T=="ROUND_UP"&&K*V<v&&(K+=1);const Y=Math.max(K,1);F[D]=(Y+E-1)/E|0}return F}function ns(){const h=this,v=h.offset,E={value:0};for(let T=0;T<h.tileCount;T++){const F=Ne(h.viewer,v),D=Ne(h.viewer,v);v.value+=8,h.size=ye(h.viewer,v);const V=F*h.blockWidth,K=D*h.blockHeight;h.columns=V+h.blockWidth>h.width?h.width-V:h.blockWidth,h.lines=K+h.blockHeight>h.height?h.height-K:h.blockHeight;const Y=h.columns*h.totalBytes,G=h.size<h.lines*Y?h.uncompress(h):se(h);v.value+=h.size;for(let he=0;he<h.lines;he++){const me=he*h.columns*h.totalBytes;for(let ge=0;ge<h.inputChannels.length;ge++){const Ce=Si.channels[ge].name,fe=h.channelByteOffsets[Ce]*h.columns,ie=h.decodeChannels[Ce];if(ie===void 0)continue;E.value=me+fe;const be=(h.height-(1+K+he))*h.outLineWidth;for(let De=0;De<h.columns;De++){const rt=be+(De+V)*h.outputChannels+ie;h.byteArray[rt]=h.getter(G,E)}}}}}function ka(){const h=this,v=h.offset,E={value:0};for(let T=0;T<h.height/h.blockHeight;T++){const F=Ne(h.viewer,v)-Si.dataWindow.yMin;h.size=ye(h.viewer,v),h.lines=F+h.blockHeight>h.height?h.height-F:h.blockHeight;const D=h.columns*h.totalBytes,K=h.size<h.lines*D?h.uncompress(h):se(h);v.value+=h.size;for(let Y=0;Y<h.blockHeight;Y++){const j=T*h.blockHeight,G=Y+h.scanOrder(j);if(G>=h.height)continue;const he=Y*D,me=(h.height-1-G)*h.outLineWidth;for(let ge=0;ge<h.inputChannels.length;ge++){const Ce=Si.channels[ge].name,fe=h.channelByteOffsets[Ce]*h.columns,ie=h.decodeChannels[Ce];if(ie!==void 0){E.value=he+fe;for(let be=0;be<h.columns;be++){const De=me+be*h.outputChannels+ie;h.byteArray[De]=h.getter(K,E)}}}}}}function is(h,v,E){const T={};if(h.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");T.version=h.getUint8(4);const F=h.getUint8(5);T.spec={singleTile:!!(F&2),longName:!!(F&4),deepFormat:!!(F&8),multiPart:!!(F&16)},E.value=8;let D=!0;for(;D;){const V=Qe(v,E);if(V==0)D=!1;else{const K=Qe(v,E),Y=ye(h,E),j=yi(h,v,E,K,Y);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${K}'.`):T[V]=j}}if(F&-7)throw console.error("THREE.EXRHeader:",T),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return T}function Ba(h,v,E,T,F){const D={size:0,viewer:v,array:E,offset:T,width:h.dataWindow.xMax-h.dataWindow.xMin+1,height:h.dataWindow.yMax-h.dataWindow.yMin+1,inputChannels:h.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:xi};switch(h.compression){case"NO_COMPRESSION":D.blockHeight=1,D.uncompress=se;break;case"RLE_COMPRESSION":D.blockHeight=1,D.uncompress=de;break;case"ZIPS_COMPRESSION":D.blockHeight=1,D.uncompress=re;break;case"ZIP_COMPRESSION":D.blockHeight=16,D.uncompress=re;break;case"PIZ_COMPRESSION":D.blockHeight=32,D.uncompress=Ue;break;case"PXR24_COMPRESSION":D.blockHeight=16,D.uncompress=Me;break;case"DWAA_COMPRESSION":D.blockHeight=32,D.uncompress=Ae;break;case"DWAB_COMPRESSION":D.blockHeight=256,D.uncompress=Ae;break;default:throw new Error("EXRLoader.parse: "+h.compression+" is unsupported")}const V={};for(const G of h.channels)switch(G.name){case"Y":case"R":case"G":case"B":case"A":V[G.name]=!0,D.type=G.pixelType}let K=!1;if(V.R&&V.G&&V.B)K=!V.A,D.outputChannels=4,D.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)D.outputChannels=1,D.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(D.type==1)switch(F){case Pn:D.getter=Ee;break;case bn:D.getter=ae;break}else if(D.type==2)switch(F){case Pn:D.getter=k;break;case bn:D.getter=Te}else throw new Error("EXRLoader.parse: unsupported pixelType "+D.type+" for "+h.compression+".");D.columns=D.width;const Y=D.width*D.height*D.outputChannels;switch(F){case Pn:D.byteArray=new Float32Array(Y),K&&D.byteArray.fill(1,0,Y);break;case bn:D.byteArray=new Uint16Array(Y),K&&D.byteArray.fill(15360,0,Y);break;default:console.error("THREE.EXRLoader: unsupported type: ",F);break}let j=0;for(const G of h.channels)D.decodeChannels[G.name]!==void 0&&(D.channelByteOffsets[G.name]=j),j+=G.pixelType*2;if(D.totalBytes=j,D.outLineWidth=D.width*D.outputChannels,h.lineOrder==="INCREASING_Y"?D.scanOrder=G=>G:D.scanOrder=G=>D.height-1-G,D.outputChannels==4?(D.format=Vn,D.colorSpace=xi):(D.format=eu,D.colorSpace=Ni),h.spec.singleTile){D.blockHeight=h.tiles.ySize,D.blockWidth=h.tiles.xSize;const G=Oa(h.tiles,D.width,D.height),he=yo(G,D.width,h.tiles.xSize,h.tiles.roundingMode),me=yo(G,D.height,h.tiles.ySize,h.tiles.roundingMode);D.tileCount=he[0]*me[0];for(let ge=0;ge<G;ge++)for(let Ce=0;Ce<me[ge];Ce++)for(let fe=0;fe<he[ge];fe++)Xe(v,T);D.decode=ns.bind(D)}else{D.blockWidth=D.width;const G=Math.ceil(D.height/D.blockHeight);for(let he=0;he<G;he++)Xe(v,T);D.decode=ka.bind(D)}return D}const So={value:0},za=new DataView(e),iu=new Uint8Array(e),Si=is(za,e,So),R=Ba(Si,za,iu,So,this.type);return R.decode(),{header:Si,width:R.width,height:R.height,data:R.byteArray,format:R.format,colorSpace:R.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,n,i,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=rn,o.magFilter=rn,o.generateMipmaps=!1,o.flipY=!1,n&&n(o,a)}return super.load(e,s,i,r)}}const tc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const AC=new ap(-1,1,1,-1,0,1);class CC extends En{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const RC=new CC;class hp{constructor(e){this._mesh=new un(RC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class PC extends _o{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ur.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hp(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lg extends _o{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class bC extends _o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class LC{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new tt);this._width=i.width,this._height=i.height,n=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new PC(tc),this.copyPass.material.blending=Ut,this.clock=new k_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lg!==void 0&&(o instanceof Lg?i=!0:o instanceof bC&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class DC extends _o{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const ui={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new tt},cameraProjectionMatrix:{value:new ht},cameraInverseProjectionMatrix:{value:new ht},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},Il={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},rr={uniforms:{tDiffuse:{value:null},resolution:{value:new tt},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class Di extends _o{constructor({renderer:e,scene:n,camera:i,width:r,height:s,selects:o,bouncing:a=!1,groundReflector:l}){super(),this.width=r!==void 0?r:512,this.height=s!==void 0?s:512,this.clear=!0,this.renderer=e,this.scene=n,this.camera=i,this.groundReflector=l,this.opacity=ui.uniforms.opacity.value,this.output=0,this.maxDistance=ui.uniforms.maxDistance.value,this.thickness=ui.uniforms.thickness.value,this.tempColor=new Ve,this._selects=o,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(u){this._selects!==u&&(this._selects=u,Array.isArray(u)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(u){this._bouncing!==u&&(this._bouncing=u,u?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=ui.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(u){this._distanceAttenuation!==u&&(this._distanceAttenuation=u,this.ssrMaterial.defines.DISTANCE_ATTENUATION=u,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=ui.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(u){this._fresnel!==u&&(this._fresnel=u,this.ssrMaterial.defines.FRESNEL=u,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=ui.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(u){this._infiniteThick!==u&&(this._infiniteThick=u,this.ssrMaterial.defines.INFINITE_THICK=u,this.ssrMaterial.needsUpdate=!0)}});const c=new cp;c.type=no,c.minFilter=gt,c.magFilter=gt,this.beautyRenderTarget=new Cn(this.width,this.height,{minFilter:gt,magFilter:gt,type:bn,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new Cn(this.width,this.height,{minFilter:gt,magFilter:gt}),this.normalRenderTarget=new Cn(this.width,this.height,{minFilter:gt,magFilter:gt,type:bn}),this.metalnessRenderTarget=new Cn(this.width,this.height,{minFilter:gt,magFilter:gt,type:bn}),this.ssrRenderTarget=new Cn(this.width,this.height,{minFilter:gt,magFilter:gt}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new sn({defines:Object.assign({},ui.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:ur.clone(ui.uniforms),vertexShader:ui.vertexShader,fragmentShader:ui.fragmentShader,blending:Ut}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new ZA,this.normalMaterial.blending=Ut,this.metalnessOnMaterial=new so({color:"white"}),this.metalnessOffMaterial=new so({color:"black"}),this.blurMaterial=new sn({defines:Object.assign({},rr.defines),uniforms:ur.clone(rr.uniforms),vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new sn({defines:Object.assign({},rr.defines),uniforms:ur.clone(rr.uniforms),vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new sn({defines:Object.assign({},Il.defines),uniforms:ur.clone(Il.uniforms),vertexShader:Il.vertexShader,fragmentShader:Il.fragmentShader,blending:Ut}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sn({uniforms:ur.clone(tc.uniforms),vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ea,blendDst:Ta,blendEquation:Ui,blendSrcAlpha:Ea,blendDstAlpha:Ta,blendEquationAlpha:Ui}),this.fsQuad=new hp(null),this.originalClearColor=new Ve}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,n){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case Di.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Vi,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Vi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n));break;case Di.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=Vi,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case Di.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Di.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case Di.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case Di.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,n,i,r,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=n,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,n,i,r,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=n,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderMetalness(e,n,i,r,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const o=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,r=n.clearColor||r,s=n.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.traverseVisible(l=>{l._SSRPassBackupMaterial=l.material,this._selects.includes(l)?l.material=this.metalnessOnMaterial:l.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(l=>{l.material=l._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,n){this.width=e,this.height=n,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+n*n),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,n),this.prevRenderTarget.setSize(e,n),this.ssrRenderTarget.setSize(e,n),this.normalRenderTarget.setSize(e,n),this.metalnessRenderTarget.setSize(e,n),this.blurRenderTarget.setSize(e,n),this.blurRenderTarget2.setSize(e,n),this.ssrMaterial.uniforms.resolution.value.set(e,n),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,n),this.blurMaterial2.uniforms.resolution.value.set(e,n)}}Di.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const IC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class UC extends _o{constructor(){super();const e=IC;this.uniforms=ur.clone(e.uniforms),this.material=new qA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new hp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===r_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===s_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===o_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===a_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===l_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===c_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Dg=.005,NC=.6,FC=.08,OC=22,kC=3,Ig=.002,BC=4;class zC{constructor(e,n){ue(this,"camera");ue(this,"target",new H);ue(this,"_mode","fly");ue(this,"_locked",!1);ue(this,"onLockChange");ue(this,"theta",0);ue(this,"phi",Math.PI/4);ue(this,"radius",40);ue(this,"mx",0);ue(this,"my",0);ue(this,"btnMiddle",!1);ue(this,"keys",new Set);ue(this,"yaw",0);ue(this,"pitch",0);ue(this,"flyVel",new H);ue(this,"_onMD");ue(this,"_onMM");ue(this,"_onMU");ue(this,"_onWheel");ue(this,"_onKD");ue(this,"_onKU");ue(this,"_onCtx");ue(this,"_onPLC");ue(this,"dom");this.camera=e,this.dom=n;const i=e.position.clone().sub(this.target);this.radius=i.length(),this.theta=Math.atan2(i.x,i.z),this.phi=Math.acos(Mi.clamp(i.y/Math.max(this.radius,.001),-1,1));const r=new H;e.getWorldDirection(r),this.yaw=Math.atan2(-r.x,-r.z),this.pitch=Math.asin(Mi.clamp(r.y,-1,1)),this._onMD=this.handleMouseDown.bind(this),this._onMM=this.handleMouseMove.bind(this),this._onMU=this.handleMouseUp.bind(this),this._onWheel=this.handleWheel.bind(this),this._onKD=this.handleKeyDown.bind(this),this._onKU=this.handleKeyUp.bind(this),this._onCtx=s=>s.preventDefault(),this._onPLC=()=>{var o;const s=document.pointerLockElement===this.dom;s!==this._locked&&(this._locked=s,(o=this.onLockChange)==null||o.call(this,s))},n.addEventListener("mousedown",this._onMD),n.addEventListener("mousemove",this._onMM),window.addEventListener("mouseup",this._onMU),n.addEventListener("wheel",this._onWheel,{passive:!1}),n.addEventListener("contextmenu",this._onCtx),window.addEventListener("keydown",this._onKD),window.addEventListener("keyup",this._onKU),document.addEventListener("pointerlockchange",this._onPLC)}get locked(){return this._locked}get mode(){return this._mode}set mode(e){if(e!==this._mode){if(e==="fly"){const n=new H;this.camera.getWorldDirection(n),this.yaw=Math.atan2(-n.x,-n.z),this.pitch=Math.asin(Mi.clamp(n.y,-1,1)),this.flyVel.set(0,0,0)}else{const n=new H;this.camera.getWorldDirection(n),this.radius=BC,this.target.copy(this.camera.position).addScaledVector(n,this.radius),this.theta=Math.atan2(-n.x,-n.z),this.phi=Math.acos(Mi.clamp(-n.y,-1,1)),this.yaw=this.theta,this.pitch=Math.PI/2-this.phi,this._locked&&document.exitPointerLock()}this._mode=e}}update(e){const n=Math.min(e,.1);this._mode==="fly"?this.doFly(n):this.applyOrbitCamera()}dispose(){this.dom.removeEventListener("mousedown",this._onMD),this.dom.removeEventListener("mousemove",this._onMM),window.removeEventListener("mouseup",this._onMU),this.dom.removeEventListener("wheel",this._onWheel),this.dom.removeEventListener("contextmenu",this._onCtx),window.removeEventListener("keydown",this._onKD),window.removeEventListener("keyup",this._onKU),document.removeEventListener("pointerlockchange",this._onPLC),this._locked&&document.exitPointerLock()}handleMouseDown(e){if(this._mode==="fly"){this._locked||(e.preventDefault(),this.dom.requestPointerLock());return}this.mx=e.clientX,this.my=e.clientY,e.button===1&&(this.btnMiddle=!0,e.preventDefault())}handleMouseMove(e){if(this._mode==="fly"){this._locked&&(this.yaw-=e.movementX*Ig,this.pitch-=e.movementY*Ig,this.pitch=Mi.clamp(this.pitch,-Math.PI/2+.01,Math.PI/2-.01));return}const n=e.clientX-this.mx,i=e.clientY-this.my;this.mx=e.clientX,this.my=e.clientY;const r=e.shiftKey,s=this.btnMiddle&&!r,o=this.btnMiddle&&r;if(s)this.theta-=n*Dg,this.phi-=i*Dg,this.phi=Mi.clamp(this.phi,.1,Math.PI-.1),this.yaw=this.theta,this.pitch=Math.PI/2-this.phi;else if(o){const a=this.camera.position.distanceTo(this.target),l=Mi.degToRad(this.camera.fov),u=2*a*Math.tan(l/2)/this.dom.clientHeight*NC,f=new H;this.camera.getWorldDirection(f);const p=new H().crossVectors(f,new H(0,1,0)).normalize(),m=new H().crossVectors(p,f).normalize();this.target.addScaledVector(p,-n*u),this.target.addScaledVector(m,i*u)}}handleMouseUp(e){e.button===1&&(this.btnMiddle=!1)}handleWheel(e){this._mode==="orbit"&&(e.preventDefault(),this.radius*=1+Math.sign(e.deltaY)*FC,this.radius=Mi.clamp(this.radius,2,500))}handleKeyDown(e){this._mode==="fly"&&this._locked&&HC.has(e.code)&&e.preventDefault(),this.keys.add(e.code)}handleKeyUp(e){this.keys.delete(e.code)}doFly(e){const n=new mo,i=new ai(this.pitch,this.yaw,0,"YXZ");n.setFromEuler(i),this.camera.quaternion.copy(n);const r=this.keys.has("ControlLeft")||this.keys.has("ControlRight"),s=OC*(r?kC:1),o=new H;this.camera.getWorldDirection(o);const a=new H(o.x,0,o.z).normalize(),l=new H().crossVectors(a,new H(0,1,0)).normalize(),c=new H(0,1,0),u=new H;this._locked&&(this.keys.has("KeyW")&&u.add(a),this.keys.has("KeyS")&&u.sub(a),this.keys.has("KeyA")&&u.sub(l),this.keys.has("KeyD")&&u.add(l),(this.keys.has("Space")||this.keys.has("KeyQ"))&&u.add(c),(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.keys.has("KeyE"))&&u.sub(c));const f=u.lengthSq()>0?u.normalize().multiplyScalar(s):u.set(0,0,0),p=1-Math.exp(-10*e);this.flyVel.lerp(f,p),this.flyVel.lengthSq()>1e-8&&this.camera.position.addScaledVector(this.flyVel,e);const m=new H;this.camera.getWorldDirection(m),this.target.copy(this.camera.position).addScaledVector(m,this.radius),this.theta=Math.atan2(-m.x,-m.z),this.phi=Math.acos(Mi.clamp(-m.y,-1,1))}applyOrbitCamera(){const e=Math.sin(this.phi);this.camera.position.set(this.target.x+this.radius*e*Math.sin(this.theta),this.target.y+this.radius*Math.cos(this.phi),this.target.z+this.radius*e*Math.cos(this.theta)),this.camera.lookAt(this.target)}}const HC=new Set(["KeyW","KeyA","KeyS","KeyD","Space","KeyQ","KeyE","ShiftLeft","ShiftRight","ControlLeft","ControlRight"]),vn=0;function VC(t){return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}class X_{constructor(){ue(this,"blocks",[]);this.blocks.push({id:vn,name:"Air",color:[0,0,0],opaque:!1});const e=[["White",15265010],["Red",14698556],["Orange",15698491],["Yellow",15911244],["Green",5747807],["Teal",4175528],["Blue",4886754],["Purple",10186198],["Pink",15040179],["Brown",9067068],["Gray",9081763],["Dark",3357513]];for(const[n,i]of e)this.blocks.push({id:this.blocks.length,name:n,color:VC(i),opaque:!0})}get types(){return this.blocks}get(e){return this.blocks[e]}isOpaque(e){const n=this.blocks[e];return n?n.opaque:!1}color(e){const n=this.blocks[e];return n?n.color:[1,0,1]}}const ao={Full:0,NarrowWall:1},hn={Plastic:0,Metal:1,Glass:2};function Y_(t){return t===hn.Glass}function GC(t){return t===hn.Metal}const j_=1023,$_=10,q_=7,K_=13,Z_=7;function WC(t,e,n=hn.Plastic){return t&j_|(e&q_)<<$_|(n&Z_)<<K_}function Fc(t){return t&j_}function ra(t){return t>>$_&q_}function Qf(t){return t>>K_&Z_}function pi(t){return Fc(t)===vn}const XC=[{id:hn.Plastic,name:"塑料"},{id:hn.Metal,name:"金属"},{id:hn.Glass,name:"玻璃"}],YC="/assets/kloppenheim_06_puresky_1k-m_VVLhsd.exr",Ug=[hn.Plastic,hn.Metal,hn.Glass],sa=class sa{constructor(e){ue(this,"scene");ue(this,"camera");ue(this,"renderer");ue(this,"cameraController");ue(this,"container");ue(this,"clock",new k_);ue(this,"rafId",0);ue(this,"resizeObserver");ue(this,"surfaceMaterials",new Map);ue(this,"glassMaterial");ue(this,"chunkMeshes",new Map);ue(this,"raycaster",new aC);ue(this,"envTexture");ue(this,"solidBackground",new Ve(1975344));ue(this,"composer");ue(this,"ssrPass");ue(this,"ssrSelects",[]);ue(this,"envIntensity",.25);ue(this,"ssrEnabled",!1);ue(this,"refractionEnabled",!1);ue(this,"groundGeo");ue(this,"groundMat");ue(this,"ghost");ue(this,"ghostFill");ue(this,"ghostEdges");ue(this,"strokeFill");ue(this,"strokeCap",64);ue(this,"strokeEdges");ue(this,"strokeBoxGeo");ue(this,"strokeFillMat");ue(this,"strokeEdgeMat");ue(this,"edgeTemplate");ue(this,"frameCount",0);ue(this,"fpsElapsed",0);ue(this,"currentFps",0);ue(this,"onStats");ue(this,"onFrame");this.container=e,this.scene=new XA,this.scene.background=new Ve(1975344);const{clientWidth:n,clientHeight:i}=e;this.camera=new kn(60,n/i||1,.1,2e3),this.camera.position.set(24,20,24),this.camera.lookAt(0,0,0),this.renderer=new WA({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(n,i),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n_,this.renderer.info.autoReset=!1,e.appendChild(this.renderer.domElement),this.cameraController=new zC(this.camera,this.renderer.domElement),this.setupMaterials(),this.setupEnvironment(),this.setupLights(),this.setupHelpers(),this.setupComposer(),this.ghost=new Yo,this.ghost.visible=!1;const r=new Qr(1.001,1.001,1.001);this.ghostFill=new un(r,new so({transparent:!0,opacity:.28,depthWrite:!1})),this.ghostEdges=new Nc(new Tg(r),new Aa({transparent:!0,depthTest:!1})),this.ghostEdges.renderOrder=2,this.ghost.add(this.ghostFill,this.ghostEdges),this.scene.add(this.ghost),this.strokeBoxGeo=new Qr(1.001,1.001,1.001),this.strokeFillMat=new so({transparent:!0,opacity:.28,depthWrite:!1}),this.strokeEdgeMat=new Aa({transparent:!0,depthTest:!1}),this.edgeTemplate=new Tg(this.strokeBoxGeo).attributes.position.array,this.strokeFill=new xg(this.strokeBoxGeo,this.strokeFillMat,this.strokeCap),this.strokeFill.count=0,this.strokeFill.frustumCulled=!1,this.strokeFill.visible=!1,this.strokeEdges=new Nc(new En,this.strokeEdgeMat),this.strokeEdges.renderOrder=2,this.strokeEdges.frustumCulled=!1,this.strokeEdges.visible=!1,this.scene.add(this.strokeFill,this.strokeEdges),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(e),this.animate=this.animate.bind(this),this.rafId=requestAnimationFrame(this.animate)}setupMaterials(){const e=(n,i)=>new F_({vertexColors:!0,metalness:n,roughness:i,side:_i,envMapIntensity:1});this.surfaceMaterials.set(hn.Plastic,e(0,.5)),this.surfaceMaterials.set(hn.Metal,e(1,.5)),this.glassMaterial=new KA({vertexColors:!0,metalness:0,roughness:.02,transmission:this.refractionEnabled?sa.GLASS_TRANSMISSION:0,ior:1.5,thickness:.5,reflectivity:1,opacity:this.refractionEnabled?1:.5,transparent:!0,side:_i,envMapIntensity:1}),this.surfaceMaterials.set(hn.Glass,this.glassMaterial)}setupEnvironment(){const e=new $f(this.renderer);e.compileEquirectangularShader(),new wC().load(YC,n=>{n.mapping=Cc,this.envTexture=e.fromEquirectangular(n).texture,n.dispose(),e.dispose(),this.applyEnvironment()})}applyEnvironment(){this.scene.environment=this.envTexture??null,this.scene.environmentIntensity=this.envIntensity,this.scene.background=this.solidBackground}setupLights(){const e=new oC(16777215,.5);this.scene.add(e);const n=new sC(16777215,2.4);n.position.set(40,80,30),n.target.position.set(0,0,0),n.castShadow=!0,n.shadow.mapSize.set(4096,4096);const i=n.shadow.camera;i.near=.5,i.far=300,i.left=-60,i.right=60,i.top=60,i.bottom=-60,i.updateProjectionMatrix(),n.shadow.bias=1e-4,n.shadow.normalBias=.02,this.scene.add(n,n.target)}setupComposer(){const{clientWidth:e,clientHeight:n}=this.container;this.composer=new LC(this.renderer);const i=new Di({renderer:this.renderer,scene:this.scene,camera:this.camera,width:e||1,height:n||1,selects:this.ssrSelects,groundReflector:null});i.thickness=.02,i.maxDistance=24,i.enabled=this.ssrEnabled,this.ssrPass=i,this.composer.addPass(new DC(this.scene,this.camera)),this.composer.addPass(i),this.composer.addPass(new UC)}setupHelpers(){this.groundGeo=new Da(1e3,1e3),this.groundMat=new $A({opacity:.32,depthWrite:!1});const e=new un(this.groundGeo,this.groundMat);e.rotation.x=-Math.PI/2,e.position.y=-.002,e.receiveShadow=!0,e.renderOrder=0,this.scene.add(e);const n=new lC(64,64,4937064,2830912);n.material.transparent=!0,n.material.opacity=.8,n.renderOrder=0,this.scene.add(n);const i=new cC(8),r=i.material;r.depthTest=!1,r.transparent=!0,i.renderOrder=1,this.scene.add(i)}handleResize(){var i,r;const{clientWidth:e,clientHeight:n}=this.container;e===0||n===0||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),(i=this.composer)==null||i.setSize(e,n),(r=this.ssrPass)==null||r.setSize(e,n))}animate(){var n,i;this.rafId=requestAnimationFrame(this.animate);const e=this.clock.getDelta();this.cameraController.update(e),(n=this.onFrame)==null||n.call(this,e),this.renderer.info.reset(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.frameCount++,this.fpsElapsed+=e,this.fpsElapsed>=.5&&(this.currentFps=Math.round(this.frameCount/this.fpsElapsed),this.frameCount=0,this.fpsElapsed=0,(i=this.onStats)==null||i.call(this,{fps:this.currentFps,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles}))}setChunkGeometry(e,n){const i=this.chunkMeshes.get(e)??{};let r=!1;for(const s of Ug){const o=this.surfaceMaterials.get(s),a=this.updateBucketMesh(i[s],n[s]??null,o,s);a?(i[s]=a,r=!0):delete i[s]}r?this.chunkMeshes.set(e,i):this.chunkMeshes.delete(e)}updateBucketMesh(e,n,i,r){if(!n){e&&(this.removeFromSSR(e),this.scene.remove(e),e.geometry.dispose());return}if(e)return e.geometry.dispose(),e.geometry=n,e;const s=new un(n,i);return s.matrixAutoUpdate=!1,s.receiveShadow=!0,s.castShadow=r!==hn.Glass,this.scene.add(s),GC(r)&&this.ssrSelects.push(s),s}setEnvironmentIntensity(e){this.envIntensity=e,this.scene.environmentIntensity=e,this.envTexture&&(this.scene.environment=this.envTexture)}setSSREnabled(e){this.ssrEnabled=e,this.ssrPass&&(this.ssrPass.enabled=e)}setRefractionEnabled(e){this.refractionEnabled=e,this.glassMaterial.transmission=e?sa.GLASS_TRANSMISSION:0,this.glassMaterial.opacity=e?1:.5,this.glassMaterial.needsUpdate=!0}removeFromSSR(e){const n=this.ssrSelects.indexOf(e);n!==-1&&this.ssrSelects.splice(n,1)}getPickRay(e,n){const i=this.renderer.domElement.getBoundingClientRect(),r=new tt((e-i.left)/i.width*2-1,-((n-i.top)/i.height)*2+1);this.raycaster.setFromCamera(r,this.camera);const s=this.raycaster.ray.origin,o=this.raycaster.ray.direction;return{origin:[s.x,s.y,s.z],dir:[o.x,o.y,o.z]}}getCenterPickRay(){const e=this.renderer.domElement.getBoundingClientRect();return this.getPickRay(e.left+e.width/2,e.top+e.height/2)}getCameraForward(){const e=new H;return this.camera.getWorldDirection(e),[e.x,e.y,e.z]}showGhost(e,n,i,r){this.ghost.position.set(e+.5,n+.5,i+.5),this.ghost.visible=!0;const s=this.ghostFill.material,o=this.ghostEdges.material;r==="erase"?(s.color.setHex(14698556),o.color.setHex(16743022),s.opacity=.18):r==="hover"?(s.color.setHex(16777215),o.color.setHex(16777215),s.opacity=.12):(s.color.setHex(6992127),o.color.setHex(12574975),s.opacity=.28)}hideGhost(){this.ghost.visible=!1}showGhostStroke(e,n){if(e.length===0){this.clearGhostStroke();return}this.ensureStrokeCapacity(e.length);const i=new ht;for(let a=0;a<e.length;a++){const l=e[a];i.makeTranslation(l.x+.5,l.y+.5,l.z+.5),this.strokeFill.setMatrixAt(a,i)}this.strokeFill.count=e.length,this.strokeFill.instanceMatrix.needsUpdate=!0,this.strokeFill.visible=!0;const r=this.edgeTemplate,s=r.length,o=new Float32Array(s*e.length);for(let a=0;a<e.length;a++){const l=e[a].x+.5,c=e[a].y+.5,u=e[a].z+.5,f=a*s;for(let p=0;p<s;p+=3)o[f+p]=r[p]+l,o[f+p+1]=r[p+1]+c,o[f+p+2]=r[p+2]+u}this.strokeEdges.geometry.setAttribute("position",new Wn(o,3)),this.strokeEdges.visible=!0,n==="erase"?(this.strokeFillMat.color.setHex(14698556),this.strokeFillMat.opacity=.18,this.strokeEdgeMat.color.setHex(16743022)):(this.strokeFillMat.color.setHex(6992127),this.strokeFillMat.opacity=.28,this.strokeEdgeMat.color.setHex(12574975))}clearGhostStroke(){this.strokeFill.count=0,this.strokeFill.visible=!1,this.strokeEdges.visible=!1}ensureStrokeCapacity(e){if(e<=this.strokeCap)return;let n=this.strokeCap;for(;n<e;)n*=2;this.scene.remove(this.strokeFill),this.strokeFill.dispose();const i=new xg(this.strokeBoxGeo,this.strokeFillMat,n);i.count=0,i.frustumCulled=!1,this.strokeFill=i,this.scene.add(i),this.strokeCap=n}dispose(){var e,n,i,r,s;cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect();for(const o of this.chunkMeshes.values())for(const a of Ug){const l=o[a];l&&(this.scene.remove(l),l.geometry.dispose())}this.chunkMeshes.clear(),this.ssrSelects.length=0;for(const o of this.surfaceMaterials.values())o.dispose();this.surfaceMaterials.clear(),(e=this.envTexture)==null||e.dispose(),(n=this.groundGeo)==null||n.dispose(),(i=this.groundMat)==null||i.dispose(),(r=this.ssrPass)==null||r.dispose(),(s=this.composer)==null||s.dispose(),this.strokeFill.dispose(),this.strokeBoxGeo.dispose(),this.strokeFillMat.dispose(),this.strokeEdgeMat.dispose(),this.strokeEdges.geometry.dispose(),this.cameraController.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}};ue(sa,"GLASS_TRANSMISSION",.9);let Jf=sa;const St=32,jC=St*St,nc=St*St*St;function uh(t,e){return Math.floor(t/e)}function ys(t,e){return(t%e+e)%e}function Ng(t,e,n){return[uh(t,St),uh(e,St),uh(n,St)]}function Br(t,e,n){return`${t},${e},${n}`}function Fg(t,e,n){return t+e*St+n*jC}class $C{constructor(e,n,i){ue(this,"cx");ue(this,"cy");ue(this,"cz");ue(this,"key");ue(this,"data");ue(this,"dirty",!0);ue(this,"solidCount",0);this.cx=e,this.cy=n,this.cz=i,this.key=Br(e,n,i),this.data=new Uint16Array(nc)}get isEmpty(){return this.solidCount===0}get originX(){return this.cx*St}get originY(){return this.cy*St}get originZ(){return this.cz*St}get(e,n,i){return this.data[Fg(e,n,i)]}replaceData(e){this.data.set(e);let n=0;for(let i=0;i<this.data.length;i++)this.data[i]!==vn&&n++;this.solidCount=n,this.dirty=!0}set(e,n,i,r){const s=Fg(e,n,i),o=this.data[s];return o===r?!1:(o===vn&&r!==vn?this.solidCount++:o!==vn&&r===vn&&this.solidCount--,this.data[s]=r,this.dirty=!0,!0)}}function qC(t,e,n,i){let[r,s,o]=n;const a=Math.hypot(r,s,o);if(a===0)return null;r/=a,s/=a,o/=a;const[l,c,u]=e;let f=Math.floor(l),p=Math.floor(c),m=Math.floor(u);const _=r>0?1:r<0?-1:0,M=s>0?1:s<0?-1:0,g=o>0?1:o<0?-1:0,d=r!==0?Math.abs(1/r):1/0,y=s!==0?Math.abs(1/s):1/0,x=o!==0?Math.abs(1/o):1/0;let A=r!==0?(_>0?f+1-l:l-f)*d:1/0,U=s!==0?(M>0?p+1-c:c-p)*y:1/0,b=o!==0?(g>0?m+1-u:u-m)*x:1/0,P=0,I=0,ee=0;if(t.getVoxel(f,p,m)!==vn)return{x:f,y:p,z:m,nx:-_,ny:-M,nz:-g,id:t.getVoxel(f,p,m),distance:0};let S=0;for(;S<=i&&(A<U&&A<b?(f+=_,S=A,A+=d,P=-_,I=0,ee=0):U<b?(p+=M,S=U,U+=y,P=0,I=-M,ee=0):(m+=g,S=b,b+=x,P=0,I=0,ee=-g),!(S>i));){const C=t.getVoxel(f,p,m);if(C!==vn)return{x:f,y:p,z:m,nx:P,ny:I,nz:ee,id:C,distance:S}}return null}class KC{constructor(){ue(this,"palette",new X_);ue(this,"chunks",new Map);ue(this,"dirty",new Set)}getChunk(e,n,i){return this.chunks.get(Br(e,n,i))}ensureChunk(e,n,i){const r=Br(e,n,i);let s=this.chunks.get(r);return s||(s=new $C(e,n,i),this.chunks.set(r,s)),s}getVoxel(e,n,i){const[r,s,o]=Ng(e,n,i),a=this.chunks.get(Br(r,s,o));return a?a.get(ys(e,St),ys(n,St),ys(i,St)):vn}getColor(e,n,i){return Fc(this.getVoxel(e,n,i))}getShape(e,n,i){return ra(this.getVoxel(e,n,i))}getSurface(e,n,i){return Qf(this.getVoxel(e,n,i))}occludes(e,n,i){const r=this.getVoxel(e,n,i);return ra(r)===ao.Full&&!Y_(Qf(r))&&this.palette.isOpaque(Fc(r))}isFullCube(e,n,i){const r=this.getVoxel(e,n,i);return!pi(r)&&ra(r)===ao.Full}setVoxel(e,n,i,r){const[s,o,a]=Ng(e,n,i);if(r===vn&&!this.chunks.has(Br(s,o,a)))return!1;const l=this.ensureChunk(s,o,a),c=ys(e,St),u=ys(n,St),f=ys(i,St);return l.set(c,u,f,r)?(this.markDirty(s,o,a),c===0?this.markDirty(s-1,o,a):c===St-1&&this.markDirty(s+1,o,a),u===0?this.markDirty(s,o-1,a):u===St-1&&this.markDirty(s,o+1,a),f===0?this.markDirty(s,o,a-1):f===St-1&&this.markDirty(s,o,a+1),!0):!1}markDirty(e,n,i){const r=Br(e,n,i);this.chunks.has(r)&&(this.chunks.get(r).dirty=!0,this.dirty.add(r))}consumeDirtyChunks(){const e=[];for(const n of this.dirty){const i=this.chunks.get(n);i&&(i.dirty=!1,e.push(i))}return this.dirty.clear(),e}allChunks(){return[...this.chunks.values()]}clear(){this.chunks.clear(),this.dirty.clear()}setChunkData(e,n,i,r){const s=this.ensureChunk(e,n,i);s.replaceData(r),s.isEmpty&&this.chunks.delete(Br(e,n,i))}get voxelCount(){let e=0;for(const n of this.chunks.values())if(!n.isEmpty)for(let i=0;i<n.data.length;i++)n.data[i]!==vn&&e++;return e}raycast(e,n,i){return qC(this,e,n,i)}}const Ua=[{dir:[-1,0,0],corners:[[0,1,0],[0,0,0],[0,1,1],[0,0,1]]},{dir:[1,0,0],corners:[[1,1,1],[1,0,1],[1,1,0],[1,0,0]]},{dir:[0,-1,0],corners:[[1,0,1],[0,0,1],[1,0,0],[0,0,0]]},{dir:[0,1,0],corners:[[0,1,1],[1,1,1],[0,1,0],[1,1,0]]},{dir:[0,0,-1],corners:[[1,0,0],[0,0,0],[1,1,0],[0,1,0]]},{dir:[0,0,1],corners:[[0,0,1],[1,0,1],[0,1,1],[1,1,1]]}],hh=0,fh=1,ko=2,Bo=3,dh=4,ph=5,Ul=1/16,ZC=Ua.map(t=>{const[e,n,i]=t.corners,r=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],s=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],o=r[0]!==0?0:r[1]!==0?1:2,a=s[0]!==0?0:s[1]!==0?1:2;return{uAxis:o,vAxis:a,uDir:r,vDir:s,normal:t.dir}}),Og=.25,QC=[.5,.7,.86,1],Q_=[1,1,1,1];function JC(){return{positions:[],normals:[],colors:[],indices:[]}}function eR(t){if(t.indices.length===0)return null;const e=new En;return e.setAttribute("position",new kt(t.positions,3)),e.setAttribute("normal",new kt(t.normals,3)),e.setAttribute("color",new kt(t.colors,3)),e.setIndex(t.indices),e}function kg(t,e){if(e.isEmpty)return{};const n=new Map,i=l=>{let c=n.get(l);return c||(c=JC(),n.set(l,c)),c},r=e.originX,s=e.originY,o=e.originZ;for(let l=0;l<St;l++)for(let c=0;c<St;c++)for(let u=0;u<St;u++){const f=e.get(u,c,l);if(pi(f))continue;const p=r+u,m=s+c,_=o+l,M=t.palette.color(Fc(f)),g=Qf(f),d=Y_(g),y=i(g);ra(f)===ao.NarrowWall?iR(y,t,p,m,_,M):tR(y,t,p,m,_,M,d)}const a={};for(const[l,c]of n)a[l]=eR(c);return a}function tR(t,e,n,i,r,s,o){const a=[n,i,r],l=[n+1,i+1,r+1],c=[1,1,1,1],u=o?(f,p,m)=>e.isFullCube(f,p,m):(f,p,m)=>e.occludes(f,p,m);for(let f=0;f<6;f++){const[p,m,_]=Ua[f].dir;u(n+p,i+m,r+_)||(o?Bg(t,f,a,l,s,n,i,r,u,Q_):(nR(e,n,i,r,f,c),Bg(t,f,a,l,s,n,i,r,u,c)))}}function Bg(t,e,n,i,r,s,o,a,l,c){const u=ZC[e],[f,p,m]=u.normal,[_,M,g]=u.uDir,[d,y,x]=u.vDir,[A,U,b]=r,P=Ua[e].corners[0],I=P[0]?i[0]:n[0],ee=P[1]?i[1]:n[1],S=P[2]?i[2]:n[2],C=(le,xe,Le)=>l(s+le+f,o+xe+p,a+Le+m)?-1:l(s+le,o+xe,a+Le)?0:1,$=C(-_,-M,-g),q=C(_,M,g),ne=C(-d,-y,-x),z=C(d,y,x),W=[0];$&&W.push(Ul),q&&W.push(1-Ul),W.push(1);const J=[0];ne&&J.push(Ul),z&&J.push(1-Ul),J.push(1);const N=W.length,te=t.positions.length/3,Q=(le,xe)=>{const Le=c[0]*(1-le)+c[1]*le,Z=c[2]*(1-le)+c[3]*le;return Le*(1-xe)+Z*xe};for(let le=0;le<J.length;le++){const xe=J[le];for(let Le=0;Le<N;Le++){const Z=W[Le];t.positions.push(I+Z*_+xe*d,ee+Z*M+xe*y,S+Z*g+xe*x);let oe=f,ce=p,ve=m;Z===0&&$?(oe-=$*_,ce-=$*M,ve-=$*g):Z===1&&q&&(oe+=q*_,ce+=q*M,ve+=q*g),xe===0&&ne?(oe-=ne*d,ce-=ne*y,ve-=ne*x):xe===1&&z&&(oe+=z*d,ce+=z*y,ve+=z*x);const Ie=1/Math.hypot(oe,ce,ve);t.normals.push(oe*Ie,ce*Ie,ve*Ie);const Fe=Q(Z,xe);t.colors.push(A*Fe,U*Fe,b*Fe)}}for(let le=0;le<J.length-1;le++)for(let xe=0;xe<N-1;xe++){const Le=te+le*N+xe,Z=Le+1,oe=Le+N,ce=oe+1,ve=Q(W[xe],J[le]),Ie=Q(W[xe+1],J[le]),Fe=Q(W[xe],J[le+1]),$e=Q(W[xe+1],J[le+1]);ve+$e>Ie+Fe?t.indices.push(Le,Z,ce,Le,ce,oe):t.indices.push(Le,Z,oe,oe,Z,ce)}}function nR(t,e,n,i,r,s){const o=Ua[r],[a,l,c]=o.dir,u=e+a,f=n+l,p=i+c,m=a===0?0:l===0?1:2,_=c===0?2:l===0?1:0;for(let M=0;M<4;M++){const g=o.corners[M],d=g[m]===1?1:-1,y=g[_]===1?1:-1,x=mh(t,u,f,p,m,d,_,0),A=mh(t,u,f,p,m,0,_,y),U=mh(t,u,f,p,m,d,_,y),b=x&&A?0:3-(x+A+U);s[M]=QC[b]}}function mh(t,e,n,i,r,s,o,a){const l=[e,n,i];return l[r]+=s,l[o]+=a,t.occludes(l[0],l[1],l[2])?1:0}function iR(t,e,n,i,r,s){const o=Og,a=1-Og,l=!pi(e.getVoxel(n-1,i,r)),c=!pi(e.getVoxel(n+1,i,r)),u=!pi(e.getVoxel(n,i,r-1)),f=!pi(e.getVoxel(n,i,r+1)),p=!pi(e.getVoxel(n,i+1,r)),m=!pi(e.getVoxel(n,i-1,r));zo(t,[n+o,i,r+o],[n+a,i+1,r+a],s,{[hh]:l,[fh]:c,[dh]:u,[ph]:f,[ko]:m,[Bo]:p}),c&&zo(t,[n+a,i,r+o],[n+1,i+1,r+a],s,{[hh]:!0,[fh]:!0,[ko]:sr(e,n,i-1,r,1,0),[Bo]:sr(e,n,i+1,r,1,0)}),l&&zo(t,[n,i,r+o],[n+o,i+1,r+a],s,{[hh]:!0,[fh]:!0,[ko]:sr(e,n,i-1,r,-1,0),[Bo]:sr(e,n,i+1,r,-1,0)}),f&&zo(t,[n+o,i,r+a],[n+a,i+1,r+1],s,{[dh]:!0,[ph]:!0,[ko]:sr(e,n,i-1,r,0,1),[Bo]:sr(e,n,i+1,r,0,1)}),u&&zo(t,[n+o,i,r],[n+a,i+1,r+o],s,{[dh]:!0,[ph]:!0,[ko]:sr(e,n,i-1,r,0,-1),[Bo]:sr(e,n,i+1,r,0,-1)})}function sr(t,e,n,i,r,s){const o=t.getVoxel(e,n,i);return pi(o)?!1:ra(o)===ao.Full?!0:!pi(t.getVoxel(e+r,n,i+s))}function zo(t,e,n,i,r){for(let s=0;s<6;s++)r[s]||rR(t,s,e,n,i)}function rR(t,e,n,i,r,s=Q_){const o=Ua[e],[a,l,c]=o.dir,[u,f,p]=r,m=t.positions.length/3;for(let _=0;_<4;_++){const[M,g,d]=o.corners[_],y=s[_];t.positions.push(M?i[0]:n[0],g?i[1]:n[1],d?i[2]:n[2]),t.normals.push(a,l,c),t.colors.push(u*y,f*y,p*y)}s[0]+s[3]>s[1]+s[2]?t.indices.push(m,m+1,m+3,m,m+3,m+2):t.indices.push(m,m+1,m+2,m+2,m+1,m+3)}class sR{constructor(e){ue(this,"undoStack",[]);ue(this,"redoStack",[]);ue(this,"onChange");this.world=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}execute(e){var n;e.apply(this.world),this.undoStack.push(e),this.redoStack.length=0,(n=this.onChange)==null||n.call(this)}undo(){var n;const e=this.undoStack.pop();e&&(e.invert(this.world),this.redoStack.push(e),(n=this.onChange)==null||n.call(this))}redo(){var n;const e=this.redoStack.pop();e&&(e.apply(this.world),this.undoStack.push(e),(n=this.onChange)==null||n.call(this))}clear(){var e;this.undoStack.length=0,this.redoStack.length=0,(e=this.onChange)==null||e.call(this)}}class zg{constructor(e,n){this.changes=e,this.label=n}apply(e){for(const n of this.changes)e.setVoxel(n.x,n.y,n.z,n.after)}invert(e){for(const n of this.changes)e.setVoxel(n.x,n.y,n.z,n.before)}}const J_=1;function oR(t){const e=[];let n=0;for(;n<t.length;){const i=t[n];let r=1;for(;n+r<t.length&&t[n+r]===i;)r++;e.push(r,i),n+=r}return e}function aR(t){const e=new Uint16Array(nc);let n=0;for(let i=0;i+1<t.length;i+=2){const r=t[i],s=t[i+1];for(let o=0;o<r;o++){if(n>=nc)throw new Error("RLE 数据超出 chunk 容量");e[n++]=s}}if(n!==nc)throw new Error("RLE 数据长度与 chunk 容量不符");return e}function lR(t,e){const n=[];for(const i of t.allChunks())i.isEmpty||n.push({cx:i.cx,cy:i.cy,cz:i.cz,rle:oR(i.data)});return{format:"brick",version:J_,savedAt:e,chunks:n}}function cR(t,e){t.clear();for(const n of e.chunks)t.setChunkData(n.cx,n.cy,n.cz,aR(n.rle))}function ex(t){if(typeof t!="object"||t===null)throw new Error("不是有效的工程数据");const e=t;if(e.format!=="brick")throw new Error("文件格式不是 brick");if(typeof e.version!="number")throw new Error("缺少版本号");if(e.version>J_)throw new Error(`工程版本 ${e.version} 过新，请升级 brickCad`);if(!Array.isArray(e.chunks))throw new Error("缺少 chunks 列表");for(const i of e.chunks)if(typeof i!="object"||i===null||typeof i.cx!="number"||typeof i.cy!="number"||typeof i.cz!="number"||!Array.isArray(i.rle))throw new Error("chunk 记录损坏");const n=typeof e.savedAt=="number"?e.savedAt:0;return{format:"brick",version:e.version,savedAt:n,chunks:e.chunks}}const Hg=256;class uR{constructor(e){ue(this,"world",new KC);ue(this,"history",new sR(this.world));ue(this,"activeColor",1);ue(this,"activeShape",ao.Full);ue(this,"activeSurface",hn.Plastic);ue(this,"editTool","brush");ue(this,"loading",!1);ue(this,"strokeTool","place");ue(this,"strokeButton",-1);ue(this,"pointerDown",!1);ue(this,"lastClientX",0);ue(this,"lastClientY",0);ue(this,"strokeCells",[]);ue(this,"strokeKeys",new Set);ue(this,"shapeAnchor",null);ue(this,"shapeTool","place");ue(this,"shapeButton",-1);ue(this,"shapeCells",[]);ue(this,"onEditStats");ue(this,"onHistoryChange");ue(this,"onChange");ue(this,"onPointerMove",e=>this.handlePointerMove(e));ue(this,"onPointerDown",e=>this.handlePointerDown(e));ue(this,"onPointerUp",e=>this.handlePointerUp(e));ue(this,"onKeyDown",e=>this.handleKeyDown(e));ue(this,"onPointerLeave",()=>{this.pointerDown||this.scene.hideGhost()});this.scene=e,this.history.onChange=()=>{var i;this.flushDirty(),this.emitStats(),this.emitHistory(),this.loading||(i=this.onChange)==null||i.call(this)},this.emitStats();const n=e.renderer.domElement;n.addEventListener("pointermove",this.onPointerMove),n.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointerup",this.onPointerUp),n.addEventListener("pointerleave",this.onPointerLeave),window.addEventListener("keydown",this.onKeyDown),e.onFrame=()=>this.tick()}get canUndo(){return this.history.canUndo}get canRedo(){return this.history.canRedo}undo(){this.history.undo()}redo(){this.history.redo()}emitHistory(){var e;(e=this.onHistoryChange)==null||e.call(this,{canUndo:this.history.canUndo,canRedo:this.history.canRedo})}serialize(){return lR(this.world,Date.now())}loadProject(e){this.loading=!0;try{this.pointerDown&&(this.pointerDown=!1,this.strokeButton=-1),this.clearStroke(),this.shapeAnchor&&this.cancelShape();for(const n of this.world.allChunks())this.scene.setChunkGeometry(n.key,{});cR(this.world,e);for(const n of this.world.allChunks())n.dirty=!1,this.scene.setChunkGeometry(n.key,kg(this.world,n));this.world.consumeDirtyChunks(),this.history.clear(),this.scene.hideGhost()}finally{this.loading=!1}}handleKeyDown(e){(e.ctrlKey||e.metaKey)&&(e.code==="KeyZ"?(e.preventDefault(),e.shiftKey?this.redo():this.undo()):e.code==="KeyY"&&(e.preventDefault(),this.redo()))}setActiveBlock(e){this.activeColor=e}setActiveShape(e){this.activeShape=e}setActiveSurface(e){this.activeSurface=e}placeVoxel(){return WC(this.activeColor,this.activeShape,this.activeSurface)}setEditTool(e){e!==this.editTool&&(this.shapeAnchor&&this.cancelShape(),this.editTool=e)}dispose(){const e=this.scene.renderer.domElement;e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointerleave",this.onPointerLeave),window.removeEventListener("keydown",this.onKeyDown),this.scene.onFrame=void 0}crosshair(){const e=this.scene.cameraController;return e.mode==="fly"&&e.locked}currentRay(){return this.crosshair()?this.scene.getCenterPickRay():this.scene.getPickRay(this.lastClientX,this.lastClientY)}tick(){const e=this.scene.cameraController;if(e.mode==="fly"){if(!e.locked){this.pointerDown||this.scene.hideGhost();return}this.isShapeTool()?this.shapeAnchor?this.updateShapePreview():this.updateGhost():this.pointerDown?this.addStrokeCell():this.updateGhost()}}handlePointerDown(e){if(this.pointerDown)return;const n=this.scene.cameraController;if(n.mode==="fly"&&!n.locked)return;if(this.isShapeTool()){this.handleShapeClick(e);return}let i;if(e.button===0)i="place";else if(e.button===2)i="erase";else return;this.pointerDown=!0,this.strokeTool=i,this.strokeButton=e.button,this.crosshair()||(this.lastClientX=e.clientX,this.lastClientY=e.clientY),this.clearStroke(),this.scene.hideGhost(),this.addStrokeCell()}handlePointerMove(e){if(this.scene.cameraController.mode!=="fly"){if(this.lastClientX=e.clientX,this.lastClientY=e.clientY,this.isShapeTool()){this.shapeAnchor?this.updateShapePreview():this.updateGhost();return}this.pointerDown?this.addStrokeCell():this.updateGhost()}}handlePointerUp(e){this.pointerDown&&e.button===this.strokeButton&&(this.pointerDown=!1,this.strokeButton=-1,this.commitStroke(),this.updateGhost())}addStrokeCell(){const e=this.resolveTarget(this.strokeTool);if(this.editTool==="pencil"){if(!e){this.strokeCells.length>0&&this.clearStroke();return}const i=`${e.x},${e.y},${e.z}`;if(this.strokeCells.length===1&&this.strokeKeys.has(i))return;this.strokeCells.length=0,this.strokeKeys.clear(),this.strokeKeys.add(i),this.strokeCells.push(e),this.scene.showGhostStroke(this.strokeCells,this.strokeTool);return}if(!e)return;const n=`${e.x},${e.y},${e.z}`;this.strokeKeys.has(n)||(this.strokeKeys.add(n),this.strokeCells.push(e),this.scene.showGhostStroke(this.strokeCells,this.strokeTool))}commitStroke(){if(this.strokeCells.length>0){const e=this.strokeTool==="place"?this.placeVoxel():vn,n=[];for(const i of this.strokeCells){const r=this.world.getVoxel(i.x,i.y,i.z);r!==e&&n.push({x:i.x,y:i.y,z:i.z,before:r,after:e})}if(n.length>0){const i=this.strokeTool==="place"?"放置":"删除";this.history.execute(new zg(n,i))}}this.clearStroke()}clearStroke(){this.strokeCells.length=0,this.strokeKeys.clear(),this.scene.clearGhostStroke()}isShapeTool(){return this.editTool==="column"||this.editTool==="plane"}handleShapeClick(e){if(this.shapeAnchor===null){let n;if(e.button===0)n="place";else if(e.button===2)n="erase";else return;this.crosshair()||(this.lastClientX=e.clientX,this.lastClientY=e.clientY);const i=this.resolveTarget(n);if(!i)return;this.shapeAnchor=i,this.shapeTool=n,this.shapeButton=e.button,this.scene.hideGhost(),this.updateShapePreview();return}e.button===this.shapeButton?(this.crosshair()||(this.lastClientX=e.clientX,this.lastClientY=e.clientY,this.updateShapePreview()),this.commitShape()):(e.button===0||e.button===2)&&this.cancelShape()}updateShapePreview(){this.shapeCells=this.computeShapeCells(),this.scene.showGhostStroke(this.shapeCells,this.shapeTool)}computeShapeCells(){const e=this.shapeAnchor,n=[{...e}],{origin:i,dir:r}=this.currentRay(),s=this.scene.getCameraForward(),o=fR(s),a=Ss(e,o)+.5,l=r[o];if(Math.abs(l)<1e-6)return n;const c=(a-i[o])/l;if(c<=0)return n;const u=[i[0]+r[0]*c,i[1]+r[1]*c,i[2]+r[2]*c],[f,p]=hR[o],m=u[f]-(Ss(e,f)+.5),_=u[p]-(Ss(e,p)+.5);if(this.editTool==="column"){const b=Math.abs(m)>=Math.abs(_)?f:p,I=gh(Math.round(b===f?m:_)),ee=Math.sign(I),S=[];for(let C=0;C<=Math.abs(I);C++){const $={...e};vh($,b,Ss(e,b)+ee*C),S.push($)}return S}const M=gh(Math.round(m)),g=gh(Math.round(_)),d=Math.sign(M),y=Math.sign(g),x=Ss(e,f),A=Ss(e,p),U=[];for(let b=0;b<=Math.abs(M);b++)for(let P=0;P<=Math.abs(g);P++){const I={...e};vh(I,f,x+d*b),vh(I,p,A+y*P),U.push(I)}return U}commitShape(){const e=this.shapeTool==="place"?this.placeVoxel():vn,n=[];for(const i of this.shapeCells){const r=this.world.getVoxel(i.x,i.y,i.z);r!==e&&n.push({x:i.x,y:i.y,z:i.z,before:r,after:e})}if(n.length>0){const r=(this.editTool==="plane"?"平面":"柱子")+(this.shapeTool==="place"?"放置":"删除");this.history.execute(new zg(n,r))}this.cancelShape()}cancelShape(){this.shapeAnchor=null,this.shapeButton=-1,this.shapeCells=[],this.scene.clearGhostStroke()}resolveTarget(e){const{origin:n,dir:i}=this.currentRay(),r=this.world.raycast(n,i,Hg);return e==="erase"?r?{x:r.x,y:r.y,z:r.z}:null:r?{x:r.x+r.nx,y:r.y+r.ny,z:r.z+r.nz}:dR(n,i)}updateGhost(){const{origin:e,dir:n}=this.currentRay(),i=this.world.raycast(e,n,Hg);if(!i){this.scene.hideGhost();return}this.scene.showGhost(i.x,i.y,i.z,"hover")}flushDirty(){for(const e of this.world.consumeDirtyChunks())this.scene.setChunkGeometry(e.key,kg(this.world,e))}emitStats(){var e;(e=this.onEditStats)==null||e.call(this,{voxels:this.world.voxelCount})}}const Vg=256;function gh(t){return Math.max(-Vg,Math.min(Vg,t))}const hR=[[1,2],[0,2],[0,1]];function fR(t){const e=Math.abs(t[0]),n=Math.abs(t[1]),i=Math.abs(t[2]);return e>=n&&e>=i?0:n>=i?1:2}function Ss(t,e){return e===0?t.x:e===1?t.y:t.z}function vh(t,e,n){e===0?t.x=n:e===1?t.y=n:t.z=n}function dR(t,e){const[n,i,r]=t,[s,o,a]=e;if(o>=0)return null;const l=-i/o;if(l<=0)return null;const c=n+s*l,u=r+a*l;return{x:Math.floor(c),y:0,z:Math.floor(u)}}const pR="brickcad",mR=1,lo="projects",tx="autosave";let Nl=null;function nx(){return Nl||(Nl=new Promise((t,e)=>{const n=indexedDB.open(pR,mR);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(lo)||i.createObjectStore(lo)},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),Nl)}async function gR(t){const e=await nx();await new Promise((n,i)=>{const r=e.transaction(lo,"readwrite");r.objectStore(lo).put(t,tx),r.oncomplete=()=>n(),r.onerror=()=>i(r.error),r.onabort=()=>i(r.error)})}async function vR(){const t=await nx(),e=await new Promise((n,i)=>{const s=t.transaction(lo,"readonly").objectStore(lo).get(tx);s.onsuccess=()=>n(s.result),s.onerror=()=>i(s.error)});if(e==null)return null;try{return ex(e)}catch{return null}}function _R(t,e="model.brick"){const n=new Blob([JSON.stringify(t)],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,r.click(),URL.revokeObjectURL(i)}async function xR(t){const e=await t.text();return ex(JSON.parse(e))}class yR{constructor(e,n,i=1e4){ue(this,"dirty",!1);ue(this,"saving",!1);ue(this,"timer",null);ue(this,"lastSavedAt",0);ue(this,"onVisibility",()=>{document.visibilityState==="hidden"&&this.flush()});this.getProject=e,this.onSaved=n,this.intervalMs=i}get savedAt(){return this.lastSavedAt}start(){this.timer==null&&(this.timer=window.setInterval(()=>void this.flush(),this.intervalMs),document.addEventListener("visibilitychange",this.onVisibility))}markDirty(){this.dirty=!0}async flush(){var n;if(!this.dirty||this.saving)return;this.saving=!0,this.dirty=!1;const e=this.getProject();try{await gR(e),this.lastSavedAt=e.savedAt,(n=this.onSaved)==null||n.call(this,e.savedAt)}catch(i){this.dirty=!0,console.error("自动保存失败",i)}finally{this.saving=!1}}stop(){this.timer!=null&&(clearInterval(this.timer),this.timer=null),document.removeEventListener("visibilitychange",this.onVisibility),this.flush()}}const SR=new X_,MR={brush:"刷子",pencil:"铅笔",column:"柱子",plane:"平面"};function ER([t,e,n]){return`rgb(${Math.round(t*255)}, ${Math.round(e*255)}, ${Math.round(n*255)})`}function TR(t){if(!t)return"尚未保存";const e=new Date(t),n=i=>String(i).padStart(2,"0");return`已保存 ${n(e.getHours())}:${n(e.getMinutes())}:${n(e.getSeconds())}`}function wR(){const t=ft.useRef(null),e=ft.useRef(null),n=ft.useRef(null),i=ft.useRef(null),[r,s]=ft.useState({fps:0,drawCalls:0,triangles:0}),[o,a]=ft.useState(0),[l,c]=ft.useState(1),[u]=ft.useState(ao.Full),[f,p]=ft.useState(hn.Plastic),[m,_]=ft.useState("brush"),[M]=ft.useState("fly"),[g,d]=ft.useState(!1),[y,x]=ft.useState({canUndo:!1,canRedo:!1}),[A,U]=ft.useState(.25),[b,P]=ft.useState(!1),[I,ee]=ft.useState(!0),[S,C]=ft.useState(0);ft.useEffect(()=>{const z=t.current;if(!z)return;const W=new Jf(z);W.onStats=s,e.current=W,W.cameraController.onLockChange=d;const J=new uR(W);J.onEditStats=Q=>a(Q.voxels),J.onHistoryChange=x,n.current=J;const N=new yR(()=>J.serialize(),C);J.onChange=()=>N.markDirty();let te=!1;return vR().then(Q=>{!te&&Q&&(J.loadProject(Q),C(Q.savedAt))}).catch(Q=>console.error("读取自动存档失败",Q)).finally(()=>{te||N.start()}),()=>{te=!0,N.stop(),J.dispose(),W.dispose(),n.current=null,e.current=null}},[]);const $=()=>{var W;const z=(W=n.current)==null?void 0:W.serialize();z&&_R(z)},q=z=>{var J;const W=(J=z.target.files)==null?void 0:J[0];z.target.value="",W&&xR(W).then(N=>{var te,Q,le;(te=n.current)==null||te.loadProject(N),(le=(Q=n.current)==null?void 0:Q.onChange)==null||le.call(Q)}).catch(N=>window.alert(`导入失败：${N instanceof Error?N.message:N}`))};ft.useEffect(()=>{var z;(z=n.current)==null||z.setActiveBlock(l)},[l]),ft.useEffect(()=>{var z;(z=n.current)==null||z.setActiveShape(u)},[u]),ft.useEffect(()=>{var z;(z=n.current)==null||z.setActiveSurface(f)},[f]),ft.useEffect(()=>{var z;(z=n.current)==null||z.setEditTool(m)},[m]),ft.useEffect(()=>{e.current&&(e.current.cameraController.mode=M)},[M]),ft.useEffect(()=>{var z;(z=e.current)==null||z.setEnvironmentIntensity(A)},[A]),ft.useEffect(()=>{var z;(z=e.current)==null||z.setSSREnabled(b)},[b]),ft.useEffect(()=>{var z;(z=e.current)==null||z.setRefractionEnabled(I)},[I]);const ne=M==="fly"&&!g;return Oe.jsxs("div",{className:"app",children:[Oe.jsxs("div",{className:"viewport",ref:t,children:[M==="fly"&&g&&Oe.jsx("div",{className:"crosshair","aria-hidden":!0}),ne&&Oe.jsxs("div",{className:"control-panel",children:[Oe.jsxs("div",{className:"panel-header",children:[Oe.jsx("span",{className:"brand",children:"brickCad"}),Oe.jsx("span",{className:"panel-hint",children:"点击面板外的画布锁定鼠标进入搭建视角"})]}),Oe.jsxs("div",{className:"panel-columns",children:[Oe.jsxs("div",{className:"panel-col",children:[Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"撤销 / 重做"}),Oe.jsxs("div",{className:"tool-group",children:[Oe.jsx("button",{className:"tool",onClick:()=>{var z;return(z=n.current)==null?void 0:z.undo()},disabled:!y.canUndo,title:"撤销 (Ctrl+Z)",children:"↶ 撤销"}),Oe.jsx("button",{className:"tool",onClick:()=>{var z;return(z=n.current)==null?void 0:z.redo()},disabled:!y.canRedo,title:"重做 (Ctrl+Y / Ctrl+Shift+Z)",children:"↷ 重做"})]})]}),Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"工具选择"}),Oe.jsxs("div",{className:"tool-group",children:[Oe.jsx("button",{className:m==="brush"?"tool active":"tool",onClick:()=>_("brush"),title:"刷子：拖拽扫过的方块整笔放置 / 删除",children:"刷子"}),Oe.jsx("button",{className:m==="pencil"?"tool active":"tool",onClick:()=>_("pencil"),title:"铅笔：一次只放置 / 删除一个方块（松开时的那格）",children:"铅笔"}),Oe.jsx("button",{className:m==="column"?"tool active":"tool",onClick:()=>_("column"),title:"柱子：点击定起点（左键放置/右键删除），移动鼠标定方向与长度，相同键再点提交，另一键取消",children:"柱子"}),Oe.jsx("button",{className:m==="plane"?"tool active":"tool",onClick:()=>_("plane"),title:"平面：点击定起点（左键放置/右键删除），移动鼠标定对角点铺出单层矩形，相同键再点提交，另一键取消",children:"平面"})]})]}),Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"颜色选择"}),Oe.jsx("div",{className:"swatches",children:SR.types.filter(z=>z.id!==0).map(z=>Oe.jsx("button",{className:l===z.id?"swatch active":"swatch",style:{background:ER(z.color)},onClick:()=>c(z.id),title:z.name},z.id))})]})]}),Oe.jsxs("div",{className:"panel-col",children:[Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"材质选择"}),Oe.jsx("div",{className:"tool-group",children:XC.map(z=>Oe.jsx("button",{className:f===z.id?"tool active":"tool",onClick:()=>p(z.id),title:`材质：${z.name}`,children:z.name},z.id))})]}),Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"渲染选项"}),Oe.jsxs("div",{className:"tool-group render-options",children:[Oe.jsxs("label",{className:"slider",title:"HDRI 反射强度（0–1）：控制 PBR 材质与玻璃反射天空的强弱。HDRI 仅作反射贴图，不作背景。",children:["HDRI",Oe.jsx("input",{type:"range",min:0,max:1,step:.01,value:A,onChange:z=>U(Number(z.target.value))}),Oe.jsx("span",{className:"slider-value",children:A.toFixed(2)})]}),Oe.jsx("button",{className:b?"tool active":"tool",onClick:()=>P(z=>!z),title:"屏幕空间反射（SSR）：金属 / 光滑面叠加实时倒影",children:"反射"}),Oe.jsx("button",{className:I?"tool active":"tool",onClick:()=>ee(z=>!z),title:"折射：玻璃透射折射背后景物",children:"折射"})]})]}),Oe.jsxs("section",{className:"panel-section",children:[Oe.jsx("h3",{children:"存档"}),Oe.jsxs("div",{className:"tool-group",children:[Oe.jsx("button",{className:"tool",onClick:$,title:"导出为 .brick 文件下载到本地",children:"导出 .brick"}),Oe.jsx("button",{className:"tool",onClick:()=>{var z;return(z=i.current)==null?void 0:z.click()},title:"从本地 .brick 文件导入（覆盖当前场景）",children:"导入 .brick"})]}),Oe.jsxs("p",{className:"panel-hint save-status",children:["自动保存至浏览器 · ",TR(S)]}),Oe.jsx("input",{ref:i,type:"file",accept:".brick,application/json",style:{display:"none"},onChange:q})]})]})]})]})]}),Oe.jsxs("footer",{className:"statusbar",children:[Oe.jsxs("span",{children:["FPS: ",r.fps]}),Oe.jsxs("span",{children:["Draw Calls: ",r.drawCalls]}),Oe.jsxs("span",{children:["Triangles: ",r.triangles.toLocaleString()]}),Oe.jsxs("span",{children:["方块: ",o.toLocaleString()]}),Oe.jsx("span",{className:"statusbar-spacer"}),Oe.jsxs("span",{children:["当前工具：",MR[m]," · 左键=放置 · 右键=删除 · ",M==="orbit"?"中键=旋转 · Shift+中键=平移 · 滚轮=缩放":g?"WASD=移动 · Space/Q=上升 · Shift/E=下降 · Ctrl=加速 · 移动鼠标=转向 · Esc=释放":"点击画布锁定鼠标进入搭建"]})]})]})}_h.createRoot(document.getElementById("root")).render(Oe.jsx(Sx.StrictMode,{children:Oe.jsx(wR,{})}));
