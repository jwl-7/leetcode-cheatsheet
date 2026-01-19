(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gu={exports:{}},ea={},mu={exports:{}},tn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=Symbol.for("react.element"),Zd=Symbol.for("react.portal"),nf=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),ef=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),af=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),uf=Symbol.for("react.lazy"),Vs=Symbol.iterator;function cf(n){return n===null||typeof n!="object"?null:(n=Vs&&n[Vs]||n["@@iterator"],typeof n=="function"?n:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,xu={};function Xe(n,r,e){this.props=n,this.context=r,this.refs=xu,this.updater=e||vu}Xe.prototype.isReactComponent={};Xe.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};Xe.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _u(){}_u.prototype=Xe.prototype;function Ko(n,r,e){this.props=n,this.context=r,this.refs=xu,this.updater=e||vu}var Go=Ko.prototype=new _u;Go.constructor=Ko;yu(Go,Xe.prototype);Go.isPureReactComponent=!0;var Ks=Array.isArray,bu=Object.prototype.hasOwnProperty,Jo={current:null},wu={key:!0,ref:!0,__self:!0,__source:!0};function Tu(n,r,e){var t,a={},o=null,s=null;if(r!=null)for(t in r.ref!==void 0&&(s=r.ref),r.key!==void 0&&(o=""+r.key),r)bu.call(r,t)&&!wu.hasOwnProperty(t)&&(a[t]=r[t]);var l=arguments.length-2;if(l===1)a.children=e;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}if(n&&n.defaultProps)for(t in l=n.defaultProps,l)a[t]===void 0&&(a[t]=l[t]);return{$$typeof:$t,type:n,key:o,ref:s,props:a,_owner:Jo.current}}function df(n,r){return{$$typeof:$t,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function Yo(n){return typeof n=="object"&&n!==null&&n.$$typeof===$t}function ff(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return r[e]})}var Gs=/\/+/g;function wa(n,r){return typeof n=="object"&&n!==null&&n.key!=null?ff(""+n.key):r.toString(36)}function yi(n,r,e,t,a){var o=typeof n;(o==="undefined"||o==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case $t:case Zd:s=!0}}if(s)return s=n,a=a(s),n=t===""?"."+wa(s,0):t,Ks(a)?(e="",n!=null&&(e=n.replace(Gs,"$&/")+"/"),yi(a,r,e,"",function(d){return d})):a!=null&&(Yo(a)&&(a=df(a,e+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(Gs,"$&/")+"/")+n)),r.push(a)),1;if(s=0,t=t===""?".":t+":",Ks(n))for(var l=0;l<n.length;l++){o=n[l];var c=t+wa(o,l);s+=yi(o,r,e,c,a)}else if(c=cf(n),typeof c=="function")for(n=c.call(n),l=0;!(o=n.next()).done;)o=o.value,c=t+wa(o,l++),s+=yi(o,r,e,c,a);else if(o==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function Jt(n,r,e){if(n==null)return n;var t=[],a=0;return yi(n,t,"","",function(o){return r.call(e,o,a++)}),t}function pf(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var Kn={current:null},xi={transition:null},hf={ReactCurrentDispatcher:Kn,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Jo};tn.Children={map:Jt,forEach:function(n,r,e){Jt(n,function(){r.apply(this,arguments)},e)},count:function(n){var r=0;return Jt(n,function(){r++}),r},toArray:function(n){return Jt(n,function(r){return r})||[]},only:function(n){if(!Yo(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};tn.Component=Xe;tn.Fragment=nf;tn.Profiler=ef;tn.PureComponent=Ko;tn.StrictMode=rf;tn.Suspense=sf;tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;tn.cloneElement=function(n,r,e){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=yu({},n.props),a=n.key,o=n.ref,s=n._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,s=Jo.current),r.key!==void 0&&(a=""+r.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(c in r)bu.call(r,c)&&!wu.hasOwnProperty(c)&&(t[c]=r[c]===void 0&&l!==void 0?l[c]:r[c])}var c=arguments.length-2;if(c===1)t.children=e;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];t.children=l}return{$$typeof:$t,type:n.type,key:a,ref:o,props:t,_owner:s}};tn.createContext=function(n){return n={$$typeof:af,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:tf,_context:n},n.Consumer=n};tn.createElement=Tu;tn.createFactory=function(n){var r=Tu.bind(null,n);return r.type=n,r};tn.createRef=function(){return{current:null}};tn.forwardRef=function(n){return{$$typeof:of,render:n}};tn.isValidElement=Yo;tn.lazy=function(n){return{$$typeof:uf,_payload:{_status:-1,_result:n},_init:pf}};tn.memo=function(n,r){return{$$typeof:lf,type:n,compare:r===void 0?null:r}};tn.startTransition=function(n){var r=xi.transition;xi.transition={};try{n()}finally{xi.transition=r}};tn.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};tn.useCallback=function(n,r){return Kn.current.useCallback(n,r)};tn.useContext=function(n){return Kn.current.useContext(n)};tn.useDebugValue=function(){};tn.useDeferredValue=function(n){return Kn.current.useDeferredValue(n)};tn.useEffect=function(n,r){return Kn.current.useEffect(n,r)};tn.useId=function(){return Kn.current.useId()};tn.useImperativeHandle=function(n,r,e){return Kn.current.useImperativeHandle(n,r,e)};tn.useInsertionEffect=function(n,r){return Kn.current.useInsertionEffect(n,r)};tn.useLayoutEffect=function(n,r){return Kn.current.useLayoutEffect(n,r)};tn.useMemo=function(n,r){return Kn.current.useMemo(n,r)};tn.useReducer=function(n,r,e){return Kn.current.useReducer(n,r,e)};tn.useRef=function(n){return Kn.current.useRef(n)};tn.useState=function(n){return Kn.current.useState(n)};tn.useSyncExternalStore=function(n,r,e){return Kn.current.useSyncExternalStore(n,r,e)};tn.useTransition=function(){return Kn.current.useTransition()};tn.version="18.2.0";mu.exports=tn;var $=mu.exports;const _i=Vo($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=$,mf=Symbol.for("react.element"),vf=Symbol.for("react.fragment"),yf=Object.prototype.hasOwnProperty,xf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_f={key:!0,ref:!0,__self:!0,__source:!0};function Su(n,r,e){var t,a={},o=null,s=null;e!==void 0&&(o=""+e),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(s=r.ref);for(t in r)yf.call(r,t)&&!_f.hasOwnProperty(t)&&(a[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:mf,type:n,key:o,ref:s,props:a,_owner:xf.current}}ea.Fragment=vf;ea.jsx=Su;ea.jsxs=Su;gu.exports=ea;var i=gu.exports,qa={},ju={exports:{}},ir={},ku={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(T,L){var I=T.length;T.push(L);n:for(;0<I;){var H=I-1>>>1,Q=T[H];if(0<a(Q,L))T[H]=L,T[I]=Q,I=H;else break n}}function e(T){return T.length===0?null:T[0]}function t(T){if(T.length===0)return null;var L=T[0],I=T.pop();if(I!==L){T[0]=I;n:for(var H=0,Q=T.length,jn=Q>>>1;H<jn;){var kn=2*(H+1)-1,cn=T[kn],ln=kn+1,pn=T[ln];if(0>a(cn,I))ln<Q&&0>a(pn,cn)?(T[H]=pn,T[ln]=I,H=ln):(T[H]=cn,T[kn]=I,H=kn);else if(ln<Q&&0>a(pn,I))T[H]=pn,T[ln]=I,H=ln;else break n}}return L}function a(T,L){var I=T.sortIndex-L.sortIndex;return I!==0?I:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();n.unstable_now=function(){return s.now()-l}}var c=[],d=[],v=1,y=null,g=3,m=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var L=e(d);L!==null;){if(L.callback===null)t(d);else if(L.startTime<=T)t(d),L.sortIndex=L.expirationTime,r(c,L);else break;L=e(d)}}function _(T){if(w=!1,h(T),!x)if(e(c)!==null)x=!0,Tn(S);else{var L=e(d);L!==null&&O(_,L.startTime-T)}}function S(T,L){x=!1,w&&(w=!1,p(C),C=-1),m=!0;var I=g;try{for(h(L),y=e(c);y!==null&&(!(y.expirationTime>L)||T&&!K());){var H=y.callback;if(typeof H=="function"){y.callback=null,g=y.priorityLevel;var Q=H(y.expirationTime<=L);L=n.unstable_now(),typeof Q=="function"?y.callback=Q:y===e(c)&&t(c),h(L)}else t(c);y=e(c)}if(y!==null)var jn=!0;else{var kn=e(d);kn!==null&&O(_,kn.startTime-L),jn=!1}return jn}finally{y=null,g=I,m=!1}}var j=!1,k=null,C=-1,N=5,M=-1;function K(){return!(n.unstable_now()-M<N)}function G(){if(k!==null){var T=n.unstable_now();M=T;var L=!0;try{L=k(!0,T)}finally{L?V():(j=!1,k=null)}}else j=!1}var V;if(typeof f=="function")V=function(){f(G)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,xn=hn.port2;hn.port1.onmessage=G,V=function(){xn.postMessage(null)}}else V=function(){E(G,0)};function Tn(T){k=T,j||(j=!0,V())}function O(T,L){C=E(function(){T(n.unstable_now())},L)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(T){T.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,Tn(S))},n.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return e(c)},n.unstable_next=function(T){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var I=g;g=L;try{return T()}finally{g=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=g;g=T;try{return L()}finally{g=I}},n.unstable_scheduleCallback=function(T,L,I){var H=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=I+Q,T={id:v++,callback:L,priorityLevel:T,startTime:I,expirationTime:Q,sortIndex:-1},I>H?(T.sortIndex=I,r(d,T),e(c)===null&&T===e(d)&&(w?(p(C),C=-1):w=!0,O(_,I-H))):(T.sortIndex=Q,r(c,T),x||m||(x=!0,Tn(S))),T},n.unstable_shouldYield=K,n.unstable_wrapCallback=function(T){var L=g;return function(){var I=g;g=L;try{return T.apply(this,arguments)}finally{g=I}}}})(Eu);ku.exports=Eu;var bf=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=$,tr=bf;function A(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ou=new Set,St={};function _e(n,r){We(n,r),We(n+"Capture",r)}function We(n,r){for(St[n]=r,n=0;n<r.length;n++)Ou.add(r[n])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},Ys={};function Tf(n){return Xa.call(Ys,n)?!0:Xa.call(Js,n)?!1:wf.test(n)?Ys[n]=!0:(Js[n]=!0,!1)}function Sf(n,r,e,t){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function jf(n,r,e,t){if(r===null||typeof r>"u"||Sf(n,r,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Gn(n,r,e,t,a,o,s){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=e,this.propertyName=n,this.type=r,this.sanitizeURL=o,this.removeEmptyString=s}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){In[n]=new Gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];In[r]=new Gn(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){In[n]=new Gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){In[n]=new Gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){In[n]=new Gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){In[n]=new Gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){In[n]=new Gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){In[n]=new Gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){In[n]=new Gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function qo(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Qo,qo);In[r]=new Gn(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Qo,qo);In[r]=new Gn(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Qo,qo);In[r]=new Gn(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){In[n]=new Gn(n,1,!1,n.toLowerCase(),null,!1,!1)});In.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){In[n]=new Gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xo(n,r,e,t){var a=In.hasOwnProperty(r)?In[r]:null;(a!==null?a.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(jf(r,e,a,t)&&(e=null),t||a===null?Tf(r)&&(e===null?n.removeAttribute(r):n.setAttribute(r,""+e)):a.mustUseProperty?n[a.propertyName]=e===null?a.type===3?!1:"":e:(r=a.attributeName,t=a.attributeNamespace,e===null?n.removeAttribute(r):(a=a.type,e=a===3||a===4&&e===!0?"":""+e,t?n.setAttributeNS(t,r,e):n.setAttribute(r,e))))}var Dr=Nu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yt=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Zo=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function et(n){return n===null||typeof n!="object"?null:(n=Qs&&n[Qs]||n["@@iterator"],typeof n=="function"?n:null)}var wn=Object.assign,Ta;function dt(n){if(Ta===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);Ta=r&&r[1]||""}return`
`+Ta+n}var Sa=!1;function ja(n,r){if(!n||Sa)return"";Sa=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(d){var t=d}Reflect.construct(n,[],r)}else{try{r.call()}catch(d){t=d}n.call(r.prototype)}else{try{throw Error()}catch(d){t=d}n()}}catch(d){if(d&&t&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),o=t.stack.split(`
`),s=a.length-1,l=o.length-1;1<=s&&0<=l&&a[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(a[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||a[s]!==o[l]){var c=`
`+a[s].replace(" at new "," at ");return n.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",n.displayName)),c}while(1<=s&&0<=l);break}}}finally{Sa=!1,Error.prepareStackTrace=e}return(n=n?n.displayName||n.name:"")?dt(n):""}function kf(n){switch(n.tag){case 5:return dt(n.type);case 16:return dt("Lazy");case 13:return dt("Suspense");case 19:return dt("SuspenseList");case 0:case 2:case 15:return n=ja(n.type,!1),n;case 11:return n=ja(n.type.render,!1),n;case 1:return n=ja(n.type,!0),n;default:return""}}function eo(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ee:return"Fragment";case ke:return"Portal";case Za:return"Profiler";case Zo:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cu:return(n.displayName||"Context")+".Consumer";case Au:return(n._context.displayName||"Context")+".Provider";case ns:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rs:return r=n.displayName||null,r!==null?r:eo(n.type)||"Memo";case Br:r=n._payload,n=n._init;try{return eo(n(r))}catch{}}return null}function Ef(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eo(r);case 8:return r===Zo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ru(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Nf(n){var r=Ru(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),t=""+n[r];if(!n.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var a=e.get,o=e.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return a.call(this)},set:function(s){t=""+s,o.call(this,s)}}),Object.defineProperty(n,r,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qt(n){n._valueTracker||(n._valueTracker=Nf(n))}function Pu(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=Ru(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function Ci(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function to(n,r){var e=r.checked;return wn({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??n._wrapperState.initialChecked})}function qs(n,r){var e=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;e=ne(r.value!=null?r.value:e),n._wrapperState={initialChecked:t,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Mu(n,r){r=r.checked,r!=null&&Xo(n,"checked",r,!1)}function io(n,r){Mu(n,r);var e=ne(r.value),t=r.type;if(e!=null)t==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+e):n.value!==""+e&&(n.value=""+e);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?ao(n,r.type,e):r.hasOwnProperty("defaultValue")&&ao(n,r.type,ne(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xs(n,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,e||r===n.value||(n.value=r),n.defaultValue=r}e=n.name,e!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,e!==""&&(n.name=e)}function ao(n,r,e){(r!=="number"||Ci(n.ownerDocument)!==n)&&(e==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+e&&(n.defaultValue=""+e))}var ft=Array.isArray;function ze(n,r,e,t){if(n=n.options,r){r={};for(var a=0;a<e.length;a++)r["$"+e[a]]=!0;for(e=0;e<n.length;e++)a=r.hasOwnProperty("$"+n[e].value),n[e].selected!==a&&(n[e].selected=a),a&&t&&(n[e].defaultSelected=!0)}else{for(e=""+ne(e),r=null,a=0;a<n.length;a++){if(n[a].value===e){n[a].selected=!0,t&&(n[a].defaultSelected=!0);return}r!==null||n[a].disabled||(r=n[a])}r!==null&&(r.selected=!0)}}function oo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(A(91));return wn({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zs(n,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(A(92));if(ft(e)){if(1<e.length)throw Error(A(93));e=e[0]}r=e}r==null&&(r=""),e=r}n._wrapperState={initialValue:ne(e)}}function Iu(n,r){var e=ne(r.value),t=ne(r.defaultValue);e!=null&&(e=""+e,e!==n.value&&(n.value=e),r.defaultValue==null&&n.defaultValue!==e&&(n.defaultValue=e)),t!=null&&(n.defaultValue=""+t)}function nl(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Du(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Du(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qt,zu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,t,a){MSApp.execUnsafeLocalFunction(function(){return n(r,e,t,a)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(qt=qt||document.createElement("div"),qt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function jt(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var gt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Of=["Webkit","ms","Moz","O"];Object.keys(gt).forEach(function(n){Of.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),gt[r]=gt[n]})});function Bu(n,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||gt.hasOwnProperty(n)&&gt[n]?(""+r).trim():r+"px"}function Fu(n,r){n=n.style;for(var e in r)if(r.hasOwnProperty(e)){var t=e.indexOf("--")===0,a=Bu(e,r[e],t);e==="float"&&(e="cssFloat"),t?n.setProperty(e,a):n[e]=a}}var Af=wn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(n,r){if(r){if(Af[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(A(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(A(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(A(61))}if(r.style!=null&&typeof r.style!="object")throw Error(A(62))}}function uo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var co=null;function es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fo=null,Be=null,Fe=null;function rl(n){if(n=Kt(n)){if(typeof fo!="function")throw Error(A(280));var r=n.stateNode;r&&(r=sa(r),fo(n.stateNode,n.type,r))}}function Uu(n){Be?Fe?Fe.push(n):Fe=[n]:Be=n}function Hu(){if(Be){var n=Be,r=Fe;if(Fe=Be=null,rl(n),r)for(n=0;n<r.length;n++)rl(r[n])}}function $u(n,r){return n(r)}function Wu(){}var ka=!1;function Vu(n,r,e){if(ka)return n(r,e);ka=!0;try{return $u(n,r,e)}finally{ka=!1,(Be!==null||Fe!==null)&&(Wu(),Hu())}}function kt(n,r){var e=n.stateNode;if(e===null)return null;var t=sa(e);if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(A(231,r,typeof e));return e}var po=!1;if(Rr)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){po=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{po=!1}function Cf(n,r,e,t,a,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{r.apply(e,d)}catch(v){this.onError(v)}}var mt=!1,Li=null,Ri=!1,ho=null,Lf={onError:function(n){mt=!0,Li=n}};function Rf(n,r,e,t,a,o,s,l,c){mt=!1,Li=null,Cf.apply(Lf,arguments)}function Pf(n,r,e,t,a,o,s,l,c){if(Rf.apply(this,arguments),mt){if(mt){var d=Li;mt=!1,Li=null}else throw Error(A(198));Ri||(Ri=!0,ho=d)}}function be(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function Ku(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function el(n){if(be(n)!==n)throw Error(A(188))}function Mf(n){var r=n.alternate;if(!r){if(r=be(n),r===null)throw Error(A(188));return r!==n?null:n}for(var e=n,t=r;;){var a=e.return;if(a===null)break;var o=a.alternate;if(o===null){if(t=a.return,t!==null){e=t;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===e)return el(a),n;if(o===t)return el(a),r;o=o.sibling}throw Error(A(188))}if(e.return!==t.return)e=a,t=o;else{for(var s=!1,l=a.child;l;){if(l===e){s=!0,e=a,t=o;break}if(l===t){s=!0,t=a,e=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===e){s=!0,e=o,t=a;break}if(l===t){s=!0,t=o,e=a;break}l=l.sibling}if(!s)throw Error(A(189))}}if(e.alternate!==t)throw Error(A(190))}if(e.tag!==3)throw Error(A(188));return e.stateNode.current===e?n:r}function Gu(n){return n=Mf(n),n!==null?Ju(n):null}function Ju(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ju(n);if(r!==null)return r;n=n.sibling}return null}var Yu=tr.unstable_scheduleCallback,tl=tr.unstable_cancelCallback,If=tr.unstable_shouldYield,Df=tr.unstable_requestPaint,Nn=tr.unstable_now,zf=tr.unstable_getCurrentPriorityLevel,ts=tr.unstable_ImmediatePriority,Qu=tr.unstable_UserBlockingPriority,Pi=tr.unstable_NormalPriority,Bf=tr.unstable_LowPriority,qu=tr.unstable_IdlePriority,ta=null,jr=null;function Ff(n){if(jr&&typeof jr.onCommitFiberRoot=="function")try{jr.onCommitFiberRoot(ta,n,void 0,(n.current.flags&128)===128)}catch{}}var yr=Math.clz32?Math.clz32:$f,Uf=Math.log,Hf=Math.LN2;function $f(n){return n>>>=0,n===0?32:31-(Uf(n)/Hf|0)|0}var Xt=64,Zt=4194304;function pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mi(n,r){var e=n.pendingLanes;if(e===0)return 0;var t=0,a=n.suspendedLanes,o=n.pingedLanes,s=e&268435455;if(s!==0){var l=s&~a;l!==0?t=pt(l):(o&=s,o!==0&&(t=pt(o)))}else s=e&~a,s!==0?t=pt(s):o!==0&&(t=pt(o));if(t===0)return 0;if(r!==0&&r!==t&&!(r&a)&&(a=t&-t,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if(t&4&&(t|=e&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=t;0<r;)e=31-yr(r),a=1<<e,t|=n[e],r&=~a;return t}function Wf(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,a=n.expirationTimes,o=n.pendingLanes;0<o;){var s=31-yr(o),l=1<<s,c=a[s];c===-1?(!(l&e)||l&t)&&(a[s]=Wf(l,r)):c<=r&&(n.expiredLanes|=l),o&=~l}}function go(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xu(){var n=Xt;return Xt<<=1,!(Xt&4194240)&&(Xt=64),n}function Ea(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function Wt(n,r,e){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yr(r),n[r]=e}function Kf(n,r){var e=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<e;){var a=31-yr(e),o=1<<a;r[a]=0,t[a]=-1,n[a]=-1,e&=~o}}function is(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-yr(e),a=1<<t;a&r|n[t]&r&&(n[t]|=r),e&=~a}}var fn=0;function Zu(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nc,as,rc,ec,tc,mo=!1,ni=[],Kr=null,Gr=null,Jr=null,Et=new Map,Nt=new Map,Ur=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(n,r){switch(n){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Et.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(r.pointerId)}}function it(n,r,e,t,a,o){return n===null||n.nativeEvent!==o?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:o,targetContainers:[a]},r!==null&&(r=Kt(r),r!==null&&as(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),n)}function Jf(n,r,e,t,a){switch(r){case"focusin":return Kr=it(Kr,n,r,e,t,a),!0;case"dragenter":return Gr=it(Gr,n,r,e,t,a),!0;case"mouseover":return Jr=it(Jr,n,r,e,t,a),!0;case"pointerover":var o=a.pointerId;return Et.set(o,it(Et.get(o)||null,n,r,e,t,a)),!0;case"gotpointercapture":return o=a.pointerId,Nt.set(o,it(Nt.get(o)||null,n,r,e,t,a)),!0}return!1}function ic(n){var r=ue(n.target);if(r!==null){var e=be(r);if(e!==null){if(r=e.tag,r===13){if(r=Ku(e),r!==null){n.blockedOn=r,tc(n.priority,function(){rc(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bi(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=vo(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);co=t,e.target.dispatchEvent(t),co=null}else return r=Kt(e),r!==null&&as(r),n.blockedOn=e,!1;r.shift()}return!0}function al(n,r,e){bi(n)&&e.delete(r)}function Yf(){mo=!1,Kr!==null&&bi(Kr)&&(Kr=null),Gr!==null&&bi(Gr)&&(Gr=null),Jr!==null&&bi(Jr)&&(Jr=null),Et.forEach(al),Nt.forEach(al)}function at(n,r){n.blockedOn===r&&(n.blockedOn=null,mo||(mo=!0,tr.unstable_scheduleCallback(tr.unstable_NormalPriority,Yf)))}function Ot(n){function r(a){return at(a,n)}if(0<ni.length){at(ni[0],n);for(var e=1;e<ni.length;e++){var t=ni[e];t.blockedOn===n&&(t.blockedOn=null)}}for(Kr!==null&&at(Kr,n),Gr!==null&&at(Gr,n),Jr!==null&&at(Jr,n),Et.forEach(r),Nt.forEach(r),e=0;e<Ur.length;e++)t=Ur[e],t.blockedOn===n&&(t.blockedOn=null);for(;0<Ur.length&&(e=Ur[0],e.blockedOn===null);)ic(e),e.blockedOn===null&&Ur.shift()}var Ue=Dr.ReactCurrentBatchConfig,Ii=!0;function Qf(n,r,e,t){var a=fn,o=Ue.transition;Ue.transition=null;try{fn=1,os(n,r,e,t)}finally{fn=a,Ue.transition=o}}function qf(n,r,e,t){var a=fn,o=Ue.transition;Ue.transition=null;try{fn=4,os(n,r,e,t)}finally{fn=a,Ue.transition=o}}function os(n,r,e,t){if(Ii){var a=vo(n,r,e,t);if(a===null)Da(n,r,t,Di,e),il(n,t);else if(Jf(a,n,r,e,t))t.stopPropagation();else if(il(n,t),r&4&&-1<Gf.indexOf(n)){for(;a!==null;){var o=Kt(a);if(o!==null&&nc(o),o=vo(n,r,e,t),o===null&&Da(n,r,t,Di,e),o===a)break;a=o}a!==null&&t.stopPropagation()}else Da(n,r,t,null,e)}}var Di=null;function vo(n,r,e,t){if(Di=null,n=es(t),n=ue(n),n!==null)if(r=be(n),r===null)n=null;else if(e=r.tag,e===13){if(n=Ku(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function ac(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zf()){case ts:return 1;case Qu:return 4;case Pi:case Bf:return 16;case qu:return 536870912;default:return 16}default:return 16}}var $r=null,ss=null,wi=null;function oc(){if(wi)return wi;var n,r=ss,e=r.length,t,a="value"in $r?$r.value:$r.textContent,o=a.length;for(n=0;n<e&&r[n]===a[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===a[o-t];t++);return wi=a.slice(n,1<t?1-t:void 0)}function Ti(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ri(){return!0}function ol(){return!1}function ar(n){function r(e,t,a,o,s){this._reactName=e,this._targetInst=a,this.type=t,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(e=n[l],this[l]=e?e(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ri:ol,this.isPropagationStopped=ol,this}return wn(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),r}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=ar(Ze),Vt=wn({},Ze,{view:0,detail:0}),Xf=ar(Vt),Na,Oa,ot,ia=wn({},Vt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ot&&(ot&&n.type==="mousemove"?(Na=n.screenX-ot.screenX,Oa=n.screenY-ot.screenY):Oa=Na=0,ot=n),Na)},movementY:function(n){return"movementY"in n?n.movementY:Oa}}),sl=ar(ia),Zf=wn({},ia,{dataTransfer:0}),np=ar(Zf),rp=wn({},Vt,{relatedTarget:0}),Aa=ar(rp),ep=wn({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),tp=ar(ep),ip=wn({},Ze,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ap=ar(ip),op=wn({},Ze,{data:0}),ll=ar(op),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},up={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=up[n])?!!r[n]:!1}function us(){return cp}var dp=wn({},Vt,{key:function(n){if(n.key){var r=sp[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ti(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(n){return n.type==="keypress"?Ti(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ti(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fp=ar(dp),pp=wn({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=ar(pp),hp=wn({},Vt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),gp=ar(hp),mp=wn({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=ar(mp),yp=wn({},ia,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=ar(yp),_p=[9,13,27,32],cs=Rr&&"CompositionEvent"in window,vt=null;Rr&&"documentMode"in document&&(vt=document.documentMode);var bp=Rr&&"TextEvent"in window&&!vt,sc=Rr&&(!cs||vt&&8<vt&&11>=vt),cl=" ",dl=!1;function lc(n,r){switch(n){case"keyup":return _p.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ne=!1;function wp(n,r){switch(n){case"compositionend":return uc(r);case"keypress":return r.which!==32?null:(dl=!0,cl);case"textInput":return n=r.data,n===cl&&dl?null:n;default:return null}}function Tp(n,r){if(Ne)return n==="compositionend"||!cs&&lc(n,r)?(n=oc(),wi=ss=$r=null,Ne=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sc&&r.locale!=="ko"?null:r.data;default:return null}}var Sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Sp[n.type]:r==="textarea"}function cc(n,r,e,t){Uu(t),r=zi(r,"onChange"),0<r.length&&(e=new ls("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var yt=null,At=null;function jp(n){bc(n,0)}function aa(n){var r=Ce(n);if(Pu(r))return n}function kp(n,r){if(n==="change")return r}var dc=!1;if(Rr){var Ca;if(Rr){var La="oninput"in document;if(!La){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),La=typeof pl.oninput=="function"}Ca=La}else Ca=!1;dc=Ca&&(!document.documentMode||9<document.documentMode)}function hl(){yt&&(yt.detachEvent("onpropertychange",fc),At=yt=null)}function fc(n){if(n.propertyName==="value"&&aa(At)){var r=[];cc(r,At,n,es(n)),Vu(jp,r)}}function Ep(n,r,e){n==="focusin"?(hl(),yt=r,At=e,yt.attachEvent("onpropertychange",fc)):n==="focusout"&&hl()}function Np(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return aa(At)}function Op(n,r){if(n==="click")return aa(r)}function Ap(n,r){if(n==="input"||n==="change")return aa(r)}function Cp(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _r=typeof Object.is=="function"?Object.is:Cp;function Ct(n,r){if(_r(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var a=e[t];if(!Xa.call(r,a)||!_r(n[a],r[a]))return!1}return!0}function gl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ml(n,r){var e=gl(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=gl(e)}}function pc(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?pc(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function hc(){for(var n=window,r=Ci();r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=Ci(n.document)}return r}function ds(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Lp(n){var r=hc(),e=n.focusedElem,t=n.selectionRange;if(r!==e&&e&&e.ownerDocument&&pc(e.ownerDocument.documentElement,e)){if(t!==null&&ds(e)){if(r=t.start,n=t.end,n===void 0&&(n=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(n,e.value.length);else if(n=(r=e.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var a=e.textContent.length,o=Math.min(t.start,a);t=t.end===void 0?o:Math.min(t.end,a),!n.extend&&o>t&&(a=t,t=o,o=a),a=ml(e,o);var s=ml(e,t);a&&s&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),n.removeAllRanges(),o>t?(n.addRange(r),n.extend(s.node,s.offset)):(r.setEnd(s.node,s.offset),n.addRange(r)))}}for(r=[],n=e;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)n=r[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rp=Rr&&"documentMode"in document&&11>=document.documentMode,Oe=null,yo=null,xt=null,xo=!1;function vl(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;xo||Oe==null||Oe!==Ci(t)||(t=Oe,"selectionStart"in t&&ds(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),xt&&Ct(xt,t)||(xt=t,t=zi(yo,"onSelect"),0<t.length&&(r=new ls("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=Oe)))}function ei(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var Ae={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Ra={},gc={};Rr&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ae.animationend.animation,delete Ae.animationiteration.animation,delete Ae.animationstart.animation),"TransitionEvent"in window||delete Ae.transitionend.transition);function oa(n){if(Ra[n])return Ra[n];if(!Ae[n])return n;var r=Ae[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in gc)return Ra[n]=r[e];return n}var mc=oa("animationend"),vc=oa("animationiteration"),yc=oa("animationstart"),xc=oa("transitionend"),_c=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ee(n,r){_c.set(n,r),_e(r,[n])}for(var Pa=0;Pa<yl.length;Pa++){var Ma=yl[Pa],Pp=Ma.toLowerCase(),Mp=Ma[0].toUpperCase()+Ma.slice(1);ee(Pp,"on"+Mp)}ee(mc,"onAnimationEnd");ee(vc,"onAnimationIteration");ee(yc,"onAnimationStart");ee("dblclick","onDoubleClick");ee("focusin","onFocus");ee("focusout","onBlur");ee(xc,"onTransitionEnd");We("onMouseEnter",["mouseout","mouseover"]);We("onMouseLeave",["mouseout","mouseover"]);We("onPointerEnter",["pointerout","pointerover"]);We("onPointerLeave",["pointerout","pointerover"]);_e("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_e("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_e("onBeforeInput",["compositionend","keypress","textInput","paste"]);_e("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ht="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(ht));function xl(n,r,e){var t=n.type||"unknown-event";n.currentTarget=e,Pf(t,r,void 0,n),n.currentTarget=null}function bc(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],a=t.event;t=t.listeners;n:{var o=void 0;if(r)for(var s=t.length-1;0<=s;s--){var l=t[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&a.isPropagationStopped())break n;xl(a,l,d),o=c}else for(s=0;s<t.length;s++){if(l=t[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&a.isPropagationStopped())break n;xl(a,l,d),o=c}}}if(Ri)throw n=ho,Ri=!1,ho=null,n}function mn(n,r){var e=r[So];e===void 0&&(e=r[So]=new Set);var t=n+"__bubble";e.has(t)||(wc(r,n,2,!1),e.add(t))}function Ia(n,r,e){var t=0;r&&(t|=4),wc(e,n,t,r)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Lt(n){if(!n[ti]){n[ti]=!0,Ou.forEach(function(e){e!=="selectionchange"&&(Ip.has(e)||Ia(e,!1,n),Ia(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ti]||(r[ti]=!0,Ia("selectionchange",!1,r))}}function wc(n,r,e,t){switch(ac(r)){case 1:var a=Qf;break;case 4:a=qf;break;default:a=os}e=a.bind(null,r,e,n),a=void 0,!po||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?n.addEventListener(r,e,{capture:!0,passive:a}):n.addEventListener(r,e,!0):a!==void 0?n.addEventListener(r,e,{passive:a}):n.addEventListener(r,e,!1)}function Da(n,r,e,t,a){var o=t;if(!(r&1)&&!(r&2)&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var l=t.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(s===4)for(s=t.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;s=s.return}for(;l!==null;){if(s=ue(l),s===null)return;if(c=s.tag,c===5||c===6){t=o=s;continue n}l=l.parentNode}}t=t.return}Vu(function(){var d=o,v=es(e),y=[];n:{var g=_c.get(n);if(g!==void 0){var m=ls,x=n;switch(n){case"keypress":if(Ti(e)===0)break n;case"keydown":case"keyup":m=fp;break;case"focusin":x="focus",m=Aa;break;case"focusout":x="blur",m=Aa;break;case"beforeblur":case"afterblur":m=Aa;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gp;break;case mc:case vc:case yc:m=tp;break;case xc:m=vp;break;case"scroll":m=Xf;break;case"wheel":m=xp;break;case"copy":case"cut":case"paste":m=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ul}var w=(r&4)!==0,E=!w&&n==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=d,h;f!==null;){h=f;var _=h.stateNode;if(h.tag===5&&_!==null&&(h=_,p!==null&&(_=kt(f,p),_!=null&&w.push(Rt(f,_,h)))),E)break;f=f.return}0<w.length&&(g=new m(g,x,null,e,v),y.push({event:g,listeners:w}))}}if(!(r&7)){n:{if(g=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",g&&e!==co&&(x=e.relatedTarget||e.fromElement)&&(ue(x)||x[Pr]))break n;if((m||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,m?(x=e.relatedTarget||e.toElement,m=d,x=x?ue(x):null,x!==null&&(E=be(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=d),m!==x)){if(w=sl,_="onMouseLeave",p="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(w=ul,_="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?g:Ce(m),h=x==null?g:Ce(x),g=new w(_,f+"leave",m,e,v),g.target=E,g.relatedTarget=h,_=null,ue(v)===d&&(w=new w(p,f+"enter",x,e,v),w.target=h,w.relatedTarget=E,_=w),E=_,m&&x)r:{for(w=m,p=x,f=0,h=w;h;h=Te(h))f++;for(h=0,_=p;_;_=Te(_))h++;for(;0<f-h;)w=Te(w),f--;for(;0<h-f;)p=Te(p),h--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break r;w=Te(w),p=Te(p)}w=null}else w=null;m!==null&&_l(y,g,m,w,!1),x!==null&&E!==null&&_l(y,E,x,w,!0)}}n:{if(g=d?Ce(d):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var S=kp;else if(fl(g))if(dc)S=Ap;else{S=Np;var j=Ep}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Op);if(S&&(S=S(n,d))){cc(y,S,e,v);break n}j&&j(n,g,d),n==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&ao(g,"number",g.value)}switch(j=d?Ce(d):window,n){case"focusin":(fl(j)||j.contentEditable==="true")&&(Oe=j,yo=d,xt=null);break;case"focusout":xt=yo=Oe=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,vl(y,e,v);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":vl(y,e,v)}var k;if(cs)n:{switch(n){case"compositionstart":var C="onCompositionStart";break n;case"compositionend":C="onCompositionEnd";break n;case"compositionupdate":C="onCompositionUpdate";break n}C=void 0}else Ne?lc(n,e)&&(C="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(C="onCompositionStart");C&&(sc&&e.locale!=="ko"&&(Ne||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ne&&(k=oc()):($r=v,ss="value"in $r?$r.value:$r.textContent,Ne=!0)),j=zi(d,C),0<j.length&&(C=new ll(C,n,null,e,v),y.push({event:C,listeners:j}),k?C.data=k:(k=uc(e),k!==null&&(C.data=k)))),(k=bp?wp(n,e):Tp(n,e))&&(d=zi(d,"onBeforeInput"),0<d.length&&(v=new ll("onBeforeInput","beforeinput",null,e,v),y.push({event:v,listeners:d}),v.data=k))}bc(y,r)})}function Rt(n,r,e){return{instance:n,listener:r,currentTarget:e}}function zi(n,r){for(var e=r+"Capture",t=[];n!==null;){var a=n,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=kt(n,e),o!=null&&t.unshift(Rt(n,o,a)),o=kt(n,r),o!=null&&t.push(Rt(n,o,a))),n=n.return}return t}function Te(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _l(n,r,e,t,a){for(var o=r._reactName,s=[];e!==null&&e!==t;){var l=e,c=l.alternate,d=l.stateNode;if(c!==null&&c===t)break;l.tag===5&&d!==null&&(l=d,a?(c=kt(e,o),c!=null&&s.unshift(Rt(e,c,l))):a||(c=kt(e,o),c!=null&&s.push(Rt(e,c,l)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var Dp=/\r\n?/g,zp=/\u0000|\uFFFD/g;function bl(n){return(typeof n=="string"?n:""+n).replace(Dp,`
`).replace(zp,"")}function ii(n,r,e){if(r=bl(r),bl(n)!==r&&e)throw Error(A(425))}function Bi(){}var _o=null,bo=null;function wo(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,wl=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof wl<"u"?function(n){return wl.resolve(null).then(n).catch(Up)}:To;function Up(n){setTimeout(function(){throw n})}function za(n,r){var e=r,t=0;do{var a=e.nextSibling;if(n.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0){n.removeChild(a),Ot(r);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=a}while(e);Ot(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Tl(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return n;r--}else e==="/$"&&r++}n=n.previousSibling}return null}var nt=Math.random().toString(36).slice(2),Sr="__reactFiber$"+nt,Pt="__reactProps$"+nt,Pr="__reactContainer$"+nt,So="__reactEvents$"+nt,Hp="__reactListeners$"+nt,$p="__reactHandles$"+nt;function ue(n){var r=n[Sr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Pr]||e[Sr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=Tl(n);n!==null;){if(e=n[Sr])return e;n=Tl(n)}return r}n=e,e=n.parentNode}return null}function Kt(n){return n=n[Sr]||n[Pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ce(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(A(33))}function sa(n){return n[Pt]||null}var jo=[],Le=-1;function te(n){return{current:n}}function vn(n){0>Le||(n.current=jo[Le],jo[Le]=null,Le--)}function gn(n,r){Le++,jo[Le]=n.current,n.current=r}var re={},Hn=te(re),qn=te(!1),ge=re;function Ve(n,r){var e=n.type.contextTypes;if(!e)return re;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in e)a[o]=r[o];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=a),a}function Xn(n){return n=n.childContextTypes,n!=null}function Fi(){vn(qn),vn(Hn)}function Sl(n,r,e){if(Hn.current!==re)throw Error(A(168));gn(Hn,r),gn(qn,e)}function Tc(n,r,e){var t=n.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var a in t)if(!(a in r))throw Error(A(108,Ef(n)||"Unknown",a));return wn({},e,t)}function Ui(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||re,ge=Hn.current,gn(Hn,n),gn(qn,qn.current),!0}function jl(n,r,e){var t=n.stateNode;if(!t)throw Error(A(169));e?(n=Tc(n,r,ge),t.__reactInternalMemoizedMergedChildContext=n,vn(qn),vn(Hn),gn(Hn,n)):vn(qn),gn(qn,e)}var Or=null,la=!1,Ba=!1;function Sc(n){Or===null?Or=[n]:Or.push(n)}function Wp(n){la=!0,Sc(n)}function ie(){if(!Ba&&Or!==null){Ba=!0;var n=0,r=fn;try{var e=Or;for(fn=1;n<e.length;n++){var t=e[n];do t=t(!0);while(t!==null)}Or=null,la=!1}catch(a){throw Or!==null&&(Or=Or.slice(n+1)),Yu(ts,ie),a}finally{fn=r,Ba=!1}}return null}var Re=[],Pe=0,Hi=null,$i=0,or=[],sr=0,me=null,Ar=1,Cr="";function se(n,r){Re[Pe++]=$i,Re[Pe++]=Hi,Hi=n,$i=r}function jc(n,r,e){or[sr++]=Ar,or[sr++]=Cr,or[sr++]=me,me=n;var t=Ar;n=Cr;var a=32-yr(t)-1;t&=~(1<<a),e+=1;var o=32-yr(r)+a;if(30<o){var s=a-a%5;o=(t&(1<<s)-1).toString(32),t>>=s,a-=s,Ar=1<<32-yr(r)+a|e<<a|t,Cr=o+n}else Ar=1<<o|e<<a|t,Cr=n}function fs(n){n.return!==null&&(se(n,1),jc(n,1,0))}function ps(n){for(;n===Hi;)Hi=Re[--Pe],Re[Pe]=null,$i=Re[--Pe],Re[Pe]=null;for(;n===me;)me=or[--sr],or[sr]=null,Cr=or[--sr],or[sr]=null,Ar=or[--sr],or[sr]=null}var er=null,rr=null,yn=!1,vr=null;function kc(n,r){var e=lr(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=n,r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)}function kl(n,r){switch(n.tag){case 5:var e=n.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,er=n,rr=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,er=n,rr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=me!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=lr(18,null,null,0),e.stateNode=r,e.return=n,n.child=e,er=n,rr=null,!0):!1;default:return!1}}function ko(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eo(n){if(yn){var r=rr;if(r){var e=r;if(!kl(n,r)){if(ko(n))throw Error(A(418));r=Yr(e.nextSibling);var t=er;r&&kl(n,r)?kc(t,e):(n.flags=n.flags&-4097|2,yn=!1,er=n)}}else{if(ko(n))throw Error(A(418));n.flags=n.flags&-4097|2,yn=!1,er=n}}}function El(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;er=n}function ai(n){if(n!==er)return!1;if(!yn)return El(n),yn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!wo(n.type,n.memoizedProps)),r&&(r=rr)){if(ko(n))throw Ec(),Error(A(418));for(;r;)kc(n,r),r=Yr(r.nextSibling)}if(El(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(A(317));n:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"){if(r===0){rr=Yr(n.nextSibling);break n}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}n=n.nextSibling}rr=null}}else rr=er?Yr(n.stateNode.nextSibling):null;return!0}function Ec(){for(var n=rr;n;)n=Yr(n.nextSibling)}function Ke(){rr=er=null,yn=!1}function hs(n){vr===null?vr=[n]:vr.push(n)}var Vp=Dr.ReactCurrentBatchConfig;function gr(n,r){if(n&&n.defaultProps){r=wn({},r),n=n.defaultProps;for(var e in n)r[e]===void 0&&(r[e]=n[e]);return r}return r}var Wi=te(null),Vi=null,Me=null,gs=null;function ms(){gs=Me=Vi=null}function vs(n){var r=Wi.current;vn(Wi),n._currentValue=r}function No(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function He(n,r){Vi=n,gs=Me=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Yn=!0),n.firstContext=null)}function cr(n){var r=n._currentValue;if(gs!==n)if(n={context:n,memoizedValue:r,next:null},Me===null){if(Vi===null)throw Error(A(308));Me=n,Vi.dependencies={lanes:0,firstContext:n}}else Me=Me.next=n;return r}var ce=null;function ys(n){ce===null?ce=[n]:ce.push(n)}function Nc(n,r,e,t){var a=r.interleaved;return a===null?(e.next=e,ys(r)):(e.next=a.next,a.next=e),r.interleaved=e,Mr(n,t)}function Mr(n,r){n.lanes|=r;var e=n.alternate;for(e!==null&&(e.lanes|=r),e=n,n=n.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),e=n,n=n.return;return e.tag===3?e.stateNode:null}var Fr=!1;function xs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Lr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Qr(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,sn&2){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,Mr(n,e)}return a=t.interleaved,a===null?(r.next=r,ys(t)):(r.next=a.next,a.next=r),t.interleaved=r,Mr(n,e)}function Si(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,is(n,e)}}function Nl(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var a=null,o=null;if(e=e.firstBaseUpdate,e!==null){do{var s={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};o===null?a=o=s:o=o.next=s,e=e.next}while(e!==null);o===null?a=o=r:o=o.next=r}else a=o=r;e={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:t.shared,effects:t.effects},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}function Ki(n,r,e,t){var a=n.updateQueue;Fr=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var v=n.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==s&&(l===null?v.firstBaseUpdate=d:l.next=d,v.lastBaseUpdate=c))}if(o!==null){var y=a.baseState;s=0,v=d=c=null,l=o;do{var g=l.lane,m=l.eventTime;if((t&g)===g){v!==null&&(v=v.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var x=n,w=l;switch(g=r,m=e,w.tag){case 1:if(x=w.payload,typeof x=="function"){y=x.call(m,y,g);break n}y=x;break n;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(m,y,g):x,g==null)break n;y=wn({},y,g);break n;case 2:Fr=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,g=a.effects,g===null?a.effects=[l]:g.push(l))}else m={eventTime:m,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(d=v=m,c=y):v=v.next=m,s|=g;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;g=l,l=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(v===null&&(c=y),a.baseState=c,a.firstBaseUpdate=d,a.lastBaseUpdate=v,r=a.shared.interleaved,r!==null){a=r;do s|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);ye|=s,n.lanes=s,n.memoizedState=y}}function Ol(n,r,e){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var t=n[r],a=t.callback;if(a!==null){if(t.callback=null,t=e,typeof a!="function")throw Error(A(191,a));a.call(t)}}}var Ac=new Nu.Component().refs;function Oo(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:wn({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var ua={isMounted:function(n){return(n=n._reactInternals)?be(n)===n:!1},enqueueSetState:function(n,r,e){n=n._reactInternals;var t=Vn(),a=Xr(n),o=Lr(t,a);o.payload=r,e!=null&&(o.callback=e),r=Qr(n,o,a),r!==null&&(xr(r,n,a,t),Si(r,n,a))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=Vn(),a=Xr(n),o=Lr(t,a);o.tag=1,o.payload=r,e!=null&&(o.callback=e),r=Qr(n,o,a),r!==null&&(xr(r,n,a,t),Si(r,n,a))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=Vn(),t=Xr(n),a=Lr(e,t);a.tag=2,r!=null&&(a.callback=r),r=Qr(n,a,t),r!==null&&(xr(r,n,t,e),Si(r,n,t))}};function Al(n,r,e,t,a,o,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,o,s):r.prototype&&r.prototype.isPureReactComponent?!Ct(e,t)||!Ct(a,o):!0}function Cc(n,r,e){var t=!1,a=re,o=r.contextType;return typeof o=="object"&&o!==null?o=cr(o):(a=Xn(r)?ge:Hn.current,t=r.contextTypes,o=(t=t!=null)?Ve(n,a):re),r=new r(e,o),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ua,n.stateNode=r,r._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=o),r}function Cl(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&ua.enqueueReplaceState(r,r.state,null)}function Ao(n,r,e,t){var a=n.stateNode;a.props=e,a.state=n.memoizedState,a.refs=Ac,xs(n);var o=r.contextType;typeof o=="object"&&o!==null?a.context=cr(o):(o=Xn(r)?ge:Hn.current,a.context=Ve(n,o)),a.state=n.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Oo(n,r,o,e),a.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ua.enqueueReplaceState(a,a.state,null),Ki(n,e,a,t),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function st(n,r,e){if(n=e.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(A(309));var t=e.stateNode}if(!t)throw Error(A(147,n));var a=t,o=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(s){var l=a.refs;l===Ac&&(l=a.refs={}),s===null?delete l[o]:l[o]=s},r._stringRef=o,r)}if(typeof n!="string")throw Error(A(284));if(!e._owner)throw Error(A(290,n))}return n}function oi(n,r){throw n=Object.prototype.toString.call(r),Error(A(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ll(n){var r=n._init;return r(n._payload)}function Lc(n){function r(p,f){if(n){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function e(p,f){if(!n)return null;for(;f!==null;)r(p,f),f=f.sibling;return null}function t(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function a(p,f){return p=Zr(p,f),p.index=0,p.sibling=null,p}function o(p,f,h){return p.index=h,n?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return n&&p.alternate===null&&(p.flags|=2),p}function l(p,f,h,_){return f===null||f.tag!==6?(f=Ka(h,p.mode,_),f.return=p,f):(f=a(f,h),f.return=p,f)}function c(p,f,h,_){var S=h.type;return S===Ee?v(p,f,h.props.children,_,h.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Br&&Ll(S)===f.type)?(_=a(f,h.props),_.ref=st(p,f,h),_.return=p,_):(_=Ai(h.type,h.key,h.props,null,p.mode,_),_.ref=st(p,f,h),_.return=p,_)}function d(p,f,h,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ga(h,p.mode,_),f.return=p,f):(f=a(f,h.children||[]),f.return=p,f)}function v(p,f,h,_,S){return f===null||f.tag!==7?(f=pe(h,p.mode,_,S),f.return=p,f):(f=a(f,h),f.return=p,f)}function y(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ka(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yt:return h=Ai(f.type,f.key,f.props,null,p.mode,h),h.ref=st(p,null,f),h.return=p,h;case ke:return f=Ga(f,p.mode,h),f.return=p,f;case Br:var _=f._init;return y(p,_(f._payload),h)}if(ft(f)||et(f))return f=pe(f,p.mode,h,null),f.return=p,f;oi(p,f)}return null}function g(p,f,h,_){var S=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(p,f,""+h,_);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:return h.key===S?c(p,f,h,_):null;case ke:return h.key===S?d(p,f,h,_):null;case Br:return S=h._init,g(p,f,S(h._payload),_)}if(ft(h)||et(h))return S!==null?null:v(p,f,h,_,null);oi(p,h)}return null}function m(p,f,h,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(h)||null,l(f,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Yt:return p=p.get(_.key===null?h:_.key)||null,c(f,p,_,S);case ke:return p=p.get(_.key===null?h:_.key)||null,d(f,p,_,S);case Br:var j=_._init;return m(p,f,h,j(_._payload),S)}if(ft(_)||et(_))return p=p.get(h)||null,v(f,p,_,S,null);oi(f,_)}return null}function x(p,f,h,_){for(var S=null,j=null,k=f,C=f=0,N=null;k!==null&&C<h.length;C++){k.index>C?(N=k,k=null):N=k.sibling;var M=g(p,k,h[C],_);if(M===null){k===null&&(k=N);break}n&&k&&M.alternate===null&&r(p,k),f=o(M,f,C),j===null?S=M:j.sibling=M,j=M,k=N}if(C===h.length)return e(p,k),yn&&se(p,C),S;if(k===null){for(;C<h.length;C++)k=y(p,h[C],_),k!==null&&(f=o(k,f,C),j===null?S=k:j.sibling=k,j=k);return yn&&se(p,C),S}for(k=t(p,k);C<h.length;C++)N=m(k,p,C,h[C],_),N!==null&&(n&&N.alternate!==null&&k.delete(N.key===null?C:N.key),f=o(N,f,C),j===null?S=N:j.sibling=N,j=N);return n&&k.forEach(function(K){return r(p,K)}),yn&&se(p,C),S}function w(p,f,h,_){var S=et(h);if(typeof S!="function")throw Error(A(150));if(h=S.call(h),h==null)throw Error(A(151));for(var j=S=null,k=f,C=f=0,N=null,M=h.next();k!==null&&!M.done;C++,M=h.next()){k.index>C?(N=k,k=null):N=k.sibling;var K=g(p,k,M.value,_);if(K===null){k===null&&(k=N);break}n&&k&&K.alternate===null&&r(p,k),f=o(K,f,C),j===null?S=K:j.sibling=K,j=K,k=N}if(M.done)return e(p,k),yn&&se(p,C),S;if(k===null){for(;!M.done;C++,M=h.next())M=y(p,M.value,_),M!==null&&(f=o(M,f,C),j===null?S=M:j.sibling=M,j=M);return yn&&se(p,C),S}for(k=t(p,k);!M.done;C++,M=h.next())M=m(k,p,C,M.value,_),M!==null&&(n&&M.alternate!==null&&k.delete(M.key===null?C:M.key),f=o(M,f,C),j===null?S=M:j.sibling=M,j=M);return n&&k.forEach(function(G){return r(p,G)}),yn&&se(p,C),S}function E(p,f,h,_){if(typeof h=="object"&&h!==null&&h.type===Ee&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:n:{for(var S=h.key,j=f;j!==null;){if(j.key===S){if(S=h.type,S===Ee){if(j.tag===7){e(p,j.sibling),f=a(j,h.props.children),f.return=p,p=f;break n}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Br&&Ll(S)===j.type){e(p,j.sibling),f=a(j,h.props),f.ref=st(p,j,h),f.return=p,p=f;break n}e(p,j);break}else r(p,j);j=j.sibling}h.type===Ee?(f=pe(h.props.children,p.mode,_,h.key),f.return=p,p=f):(_=Ai(h.type,h.key,h.props,null,p.mode,_),_.ref=st(p,f,h),_.return=p,p=_)}return s(p);case ke:n:{for(j=h.key;f!==null;){if(f.key===j)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){e(p,f.sibling),f=a(f,h.children||[]),f.return=p,p=f;break n}else{e(p,f);break}else r(p,f);f=f.sibling}f=Ga(h,p.mode,_),f.return=p,p=f}return s(p);case Br:return j=h._init,E(p,f,j(h._payload),_)}if(ft(h))return x(p,f,h,_);if(et(h))return w(p,f,h,_);oi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(e(p,f.sibling),f=a(f,h),f.return=p,p=f):(e(p,f),f=Ka(h,p.mode,_),f.return=p,p=f),s(p)):e(p,f)}return E}var Ge=Lc(!0),Rc=Lc(!1),Gt={},kr=te(Gt),Mt=te(Gt),It=te(Gt);function de(n){if(n===Gt)throw Error(A(174));return n}function _s(n,r){switch(gn(It,r),gn(Mt,n),gn(kr,Gt),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:so(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=so(r,n)}vn(kr),gn(kr,r)}function Je(){vn(kr),vn(Mt),vn(It)}function Pc(n){de(It.current);var r=de(kr.current),e=so(r,n.type);r!==e&&(gn(Mt,n),gn(kr,e))}function bs(n){Mt.current===n&&(vn(kr),vn(Mt))}var _n=te(0);function Gi(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fa=[];function ws(){for(var n=0;n<Fa.length;n++)Fa[n]._workInProgressVersionPrimary=null;Fa.length=0}var ji=Dr.ReactCurrentDispatcher,Ua=Dr.ReactCurrentBatchConfig,ve=0,bn=null,An=null,Ln=null,Ji=!1,_t=!1,Dt=0,Kp=0;function Bn(){throw Error(A(321))}function Ts(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!_r(n[e],r[e]))return!1;return!0}function Ss(n,r,e,t,a,o){if(ve=o,bn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ji.current=n===null||n.memoizedState===null?Qp:qp,n=e(t,a),_t){o=0;do{if(_t=!1,Dt=0,25<=o)throw Error(A(301));o+=1,Ln=An=null,r.updateQueue=null,ji.current=Xp,n=e(t,a)}while(_t)}if(ji.current=Yi,r=An!==null&&An.next!==null,ve=0,Ln=An=bn=null,Ji=!1,r)throw Error(A(300));return n}function js(){var n=Dt!==0;return Dt=0,n}function Tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?bn.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function dr(){if(An===null){var n=bn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var r=Ln===null?bn.memoizedState:Ln.next;if(r!==null)Ln=r,An=n;else{if(n===null)throw Error(A(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Ln===null?bn.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function zt(n,r){return typeof r=="function"?r(n):r}function Ha(n){var r=dr(),e=r.queue;if(e===null)throw Error(A(311));e.lastRenderedReducer=n;var t=An,a=t.baseQueue,o=e.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,e.pending=null}if(a!==null){o=a.next,t=t.baseState;var l=s=null,c=null,d=o;do{var v=d.lane;if((ve&v)===v)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),t=d.hasEagerState?d.eagerState:n(t,d.action);else{var y={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=y,s=t):c=c.next=y,bn.lanes|=v,ye|=v}d=d.next}while(d!==null&&d!==o);c===null?s=t:c.next=l,_r(t,r.memoizedState)||(Yn=!0),r.memoizedState=t,r.baseState=s,r.baseQueue=c,e.lastRenderedState=t}if(n=e.interleaved,n!==null){a=n;do o=a.lane,bn.lanes|=o,ye|=o,a=a.next;while(a!==n)}else a===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function $a(n){var r=dr(),e=r.queue;if(e===null)throw Error(A(311));e.lastRenderedReducer=n;var t=e.dispatch,a=e.pending,o=r.memoizedState;if(a!==null){e.pending=null;var s=a=a.next;do o=n(o,s.action),s=s.next;while(s!==a);_r(o,r.memoizedState)||(Yn=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),e.lastRenderedState=o}return[o,t]}function Mc(){}function Ic(n,r){var e=bn,t=dr(),a=r(),o=!_r(t.memoizedState,a);if(o&&(t.memoizedState=a,Yn=!0),t=t.queue,ks(Bc.bind(null,e,t,n),[n]),t.getSnapshot!==r||o||Ln!==null&&Ln.memoizedState.tag&1){if(e.flags|=2048,Bt(9,zc.bind(null,e,t,a,r),void 0,null),Rn===null)throw Error(A(349));ve&30||Dc(e,r,a)}return a}function Dc(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=bn.updateQueue,r===null?(r={lastEffect:null,stores:null},bn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function zc(n,r,e,t){r.value=e,r.getSnapshot=t,Fc(r)&&Uc(n)}function Bc(n,r,e){return e(function(){Fc(r)&&Uc(n)})}function Fc(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!_r(n,e)}catch{return!0}}function Uc(n){var r=Mr(n,1);r!==null&&xr(r,n,1,-1)}function Rl(n){var r=Tr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zt,lastRenderedState:n},r.queue=n,n=n.dispatch=Yp.bind(null,bn,n),[r.memoizedState,n]}function Bt(n,r,e,t){return n={tag:n,create:r,destroy:e,deps:t,next:null},r=bn.updateQueue,r===null?(r={lastEffect:null,stores:null},bn.updateQueue=r,r.lastEffect=n.next=n):(e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n)),n}function Hc(){return dr().memoizedState}function ki(n,r,e,t){var a=Tr();bn.flags|=n,a.memoizedState=Bt(1|r,e,void 0,t===void 0?null:t)}function ca(n,r,e,t){var a=dr();t=t===void 0?null:t;var o=void 0;if(An!==null){var s=An.memoizedState;if(o=s.destroy,t!==null&&Ts(t,s.deps)){a.memoizedState=Bt(r,e,o,t);return}}bn.flags|=n,a.memoizedState=Bt(1|r,e,o,t)}function Pl(n,r){return ki(8390656,8,n,r)}function ks(n,r){return ca(2048,8,n,r)}function $c(n,r){return ca(4,2,n,r)}function Wc(n,r){return ca(4,4,n,r)}function Vc(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kc(n,r,e){return e=e!=null?e.concat([n]):null,ca(4,4,Vc.bind(null,r,n),e)}function Es(){}function Gc(n,r){var e=dr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&Ts(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function Jc(n,r){var e=dr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&Ts(r,t[1])?t[0]:(n=n(),e.memoizedState=[n,r],n)}function Yc(n,r,e){return ve&21?(_r(e,r)||(e=Xu(),bn.lanes|=e,ye|=e,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=e)}function Gp(n,r){var e=fn;fn=e!==0&&4>e?e:4,n(!0);var t=Ua.transition;Ua.transition={};try{n(!1),r()}finally{fn=e,Ua.transition=t}}function Qc(){return dr().memoizedState}function Jp(n,r,e){var t=Xr(n);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},qc(n))Xc(r,e);else if(e=Nc(n,r,e,t),e!==null){var a=Vn();xr(e,n,t,a),Zc(e,r,t)}}function Yp(n,r,e){var t=Xr(n),a={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(qc(n))Xc(r,a);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var s=r.lastRenderedState,l=o(s,e);if(a.hasEagerState=!0,a.eagerState=l,_r(l,s)){var c=r.interleaved;c===null?(a.next=a,ys(r)):(a.next=c.next,c.next=a),r.interleaved=a;return}}catch{}finally{}e=Nc(n,r,a,t),e!==null&&(a=Vn(),xr(e,n,t,a),Zc(e,r,t))}}function qc(n){var r=n.alternate;return n===bn||r!==null&&r===bn}function Xc(n,r){_t=Ji=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function Zc(n,r,e){if(e&4194240){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,is(n,e)}}var Yi={readContext:cr,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Qp={readContext:cr,useCallback:function(n,r){return Tr().memoizedState=[n,r===void 0?null:r],n},useContext:cr,useEffect:Pl,useImperativeHandle:function(n,r,e){return e=e!=null?e.concat([n]):null,ki(4194308,4,Vc.bind(null,r,n),e)},useLayoutEffect:function(n,r){return ki(4194308,4,n,r)},useInsertionEffect:function(n,r){return ki(4,2,n,r)},useMemo:function(n,r){var e=Tr();return r=r===void 0?null:r,n=n(),e.memoizedState=[n,r],n},useReducer:function(n,r,e){var t=Tr();return r=e!==void 0?e(r):r,t.memoizedState=t.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},t.queue=n,n=n.dispatch=Jp.bind(null,bn,n),[t.memoizedState,n]},useRef:function(n){var r=Tr();return n={current:n},r.memoizedState=n},useState:Rl,useDebugValue:Es,useDeferredValue:function(n){return Tr().memoizedState=n},useTransition:function(){var n=Rl(!1),r=n[0];return n=Gp.bind(null,n[1]),Tr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,e){var t=bn,a=Tr();if(yn){if(e===void 0)throw Error(A(407));e=e()}else{if(e=r(),Rn===null)throw Error(A(349));ve&30||Dc(t,r,e)}a.memoizedState=e;var o={value:e,getSnapshot:r};return a.queue=o,Pl(Bc.bind(null,t,o,n),[n]),t.flags|=2048,Bt(9,zc.bind(null,t,o,e,r),void 0,null),e},useId:function(){var n=Tr(),r=Rn.identifierPrefix;if(yn){var e=Cr,t=Ar;e=(t&~(1<<32-yr(t)-1)).toString(32)+e,r=":"+r+"R"+e,e=Dt++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=Kp++,r=":"+r+"r"+e.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},qp={readContext:cr,useCallback:Gc,useContext:cr,useEffect:ks,useImperativeHandle:Kc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Jc,useReducer:Ha,useRef:Hc,useState:function(){return Ha(zt)},useDebugValue:Es,useDeferredValue:function(n){var r=dr();return Yc(r,An.memoizedState,n)},useTransition:function(){var n=Ha(zt)[0],r=dr().memoizedState;return[n,r]},useMutableSource:Mc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1},Xp={readContext:cr,useCallback:Gc,useContext:cr,useEffect:ks,useImperativeHandle:Kc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Jc,useReducer:$a,useRef:Hc,useState:function(){return $a(zt)},useDebugValue:Es,useDeferredValue:function(n){var r=dr();return An===null?r.memoizedState=n:Yc(r,An.memoizedState,n)},useTransition:function(){var n=$a(zt)[0],r=dr().memoizedState;return[n,r]},useMutableSource:Mc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1};function Ye(n,r){try{var e="",t=r;do e+=kf(t),t=t.return;while(t);var a=e}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:r,stack:a,digest:null}}function Wa(n,r,e){return{value:n,source:null,stack:e??null,digest:r??null}}function Co(n,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Zp=typeof WeakMap=="function"?WeakMap:Map;function nd(n,r,e){e=Lr(-1,e),e.tag=3,e.payload={element:null};var t=r.value;return e.callback=function(){qi||(qi=!0,Uo=t),Co(n,r)},e}function rd(n,r,e){e=Lr(-1,e),e.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var a=r.value;e.payload=function(){return t(a)},e.callback=function(){Co(n,r)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Co(n,r),typeof t!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var s=r.stack;this.componentDidCatch(r.value,{componentStack:s!==null?s:""})}),e}function Ml(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new Zp;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(e)||(a.add(e),n=ph.bind(null,n,r,e),r.then(n,n))}function Il(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Dl(n,r,e,t,a){return n.mode&1?(n.flags|=65536,n.lanes=a,n):(n===r?n.flags|=65536:(n.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Lr(-1,1),r.tag=2,Qr(e,r,1))),e.lanes|=1),n)}var nh=Dr.ReactCurrentOwner,Yn=!1;function Wn(n,r,e,t){r.child=n===null?Rc(r,null,e,t):Ge(r,n.child,e,t)}function zl(n,r,e,t,a){e=e.render;var o=r.ref;return He(r,a),t=Ss(n,r,e,t,o,a),e=js(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a,Ir(n,r,a)):(yn&&e&&fs(r),r.flags|=1,Wn(n,r,t,a),r.child)}function Bl(n,r,e,t,a){if(n===null){var o=e.type;return typeof o=="function"&&!Ms(o)&&o.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=o,ed(n,r,o,t,a)):(n=Ai(e.type,null,t,r,r.mode,a),n.ref=r.ref,n.return=r,r.child=n)}if(o=n.child,!(n.lanes&a)){var s=o.memoizedProps;if(e=e.compare,e=e!==null?e:Ct,e(s,t)&&n.ref===r.ref)return Ir(n,r,a)}return r.flags|=1,n=Zr(o,t),n.ref=r.ref,n.return=r,r.child=n}function ed(n,r,e,t,a){if(n!==null){var o=n.memoizedProps;if(Ct(o,t)&&n.ref===r.ref)if(Yn=!1,r.pendingProps=t=o,(n.lanes&a)!==0)n.flags&131072&&(Yn=!0);else return r.lanes=n.lanes,Ir(n,r,a)}return Lo(n,r,e,t,a)}function td(n,r,e){var t=r.pendingProps,a=t.children,o=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},gn(De,nr),nr|=e;else{if(!(e&1073741824))return n=o!==null?o.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,gn(De,nr),nr|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:e,gn(De,nr),nr|=t}else o!==null?(t=o.baseLanes|e,r.memoizedState=null):t=e,gn(De,nr),nr|=t;return Wn(n,r,a,e),r.child}function id(n,r){var e=r.ref;(n===null&&e!==null||n!==null&&n.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function Lo(n,r,e,t,a){var o=Xn(e)?ge:Hn.current;return o=Ve(r,o),He(r,a),e=Ss(n,r,e,t,o,a),t=js(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a,Ir(n,r,a)):(yn&&t&&fs(r),r.flags|=1,Wn(n,r,e,a),r.child)}function Fl(n,r,e,t,a){if(Xn(e)){var o=!0;Ui(r)}else o=!1;if(He(r,a),r.stateNode===null)Ei(n,r),Cc(r,e,t),Ao(r,e,t,a),t=!0;else if(n===null){var s=r.stateNode,l=r.memoizedProps;s.props=l;var c=s.context,d=e.contextType;typeof d=="object"&&d!==null?d=cr(d):(d=Xn(e)?ge:Hn.current,d=Ve(r,d));var v=e.getDerivedStateFromProps,y=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==t||c!==d)&&Cl(r,s,t,d),Fr=!1;var g=r.memoizedState;s.state=g,Ki(r,t,s,a),c=r.memoizedState,l!==t||g!==c||qn.current||Fr?(typeof v=="function"&&(Oo(r,e,v,t),c=r.memoizedState),(l=Fr||Al(r,e,l,t,g,c,d))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(r.flags|=4194308)):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=c),s.props=t,s.state=c,s.context=d,t=l):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{s=r.stateNode,Oc(n,r),l=r.memoizedProps,d=r.type===r.elementType?l:gr(r.type,l),s.props=d,y=r.pendingProps,g=s.context,c=e.contextType,typeof c=="object"&&c!==null?c=cr(c):(c=Xn(e)?ge:Hn.current,c=Ve(r,c));var m=e.getDerivedStateFromProps;(v=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==y||g!==c)&&Cl(r,s,t,c),Fr=!1,g=r.memoizedState,s.state=g,Ki(r,t,s,a);var x=r.memoizedState;l!==y||g!==x||qn.current||Fr?(typeof m=="function"&&(Oo(r,e,m,t),x=r.memoizedState),(d=Fr||Al(r,e,d,t,g,x,c)||!1)?(v||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,x,c)),typeof s.componentDidUpdate=="function"&&(r.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=x),s.props=t,s.state=x,s.context=c,t=d):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=1024),t=!1)}return Ro(n,r,e,t,o,a)}function Ro(n,r,e,t,a,o){id(n,r);var s=(r.flags&128)!==0;if(!t&&!s)return a&&jl(r,e,!1),Ir(n,r,o);t=r.stateNode,nh.current=r;var l=s&&typeof e.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,n!==null&&s?(r.child=Ge(r,n.child,null,o),r.child=Ge(r,null,l,o)):Wn(n,r,l,o),r.memoizedState=t.state,a&&jl(r,e,!0),r.child}function ad(n){var r=n.stateNode;r.pendingContext?Sl(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Sl(n,r.context,!1),_s(n,r.containerInfo)}function Ul(n,r,e,t,a){return Ke(),hs(a),r.flags|=256,Wn(n,r,e,t),r.child}var Po={dehydrated:null,treeContext:null,retryLane:0};function Mo(n){return{baseLanes:n,cachePool:null,transitions:null}}function od(n,r,e){var t=r.pendingProps,a=_n.current,o=!1,s=(r.flags&128)!==0,l;if((l=s)||(l=n!==null&&n.memoizedState===null?!1:(a&2)!==0),l?(o=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),gn(_n,a&1),n===null)return Eo(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(s=t.children,n=t.fallback,o?(t=r.mode,o=r.child,s={mode:"hidden",children:s},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=pa(s,t,0,null),n=pe(n,t,e,null),o.return=r,n.return=r,o.sibling=n,r.child=o,r.child.memoizedState=Mo(e),r.memoizedState=Po,n):Ns(r,s));if(a=n.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return rh(n,r,s,t,l,a,e);if(o){o=t.fallback,s=r.mode,a=n.child,l=a.sibling;var c={mode:"hidden",children:t.children};return!(s&1)&&r.child!==a?(t=r.child,t.childLanes=0,t.pendingProps=c,r.deletions=null):(t=Zr(a,c),t.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Zr(l,o):(o=pe(o,s,e,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,s=n.child.memoizedState,s=s===null?Mo(e):{baseLanes:s.baseLanes|e,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=n.childLanes&~e,r.memoizedState=Po,t}return o=n.child,n=o.sibling,t=Zr(o,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=e),t.return=r,t.sibling=null,n!==null&&(e=r.deletions,e===null?(r.deletions=[n],r.flags|=16):e.push(n)),r.child=t,r.memoizedState=null,t}function Ns(n,r){return r=pa({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function si(n,r,e,t){return t!==null&&hs(t),Ge(r,n.child,null,e),n=Ns(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function rh(n,r,e,t,a,o,s){if(e)return r.flags&256?(r.flags&=-257,t=Wa(Error(A(422))),si(n,r,s,t)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(o=t.fallback,a=r.mode,t=pa({mode:"visible",children:t.children},a,0,null),o=pe(o,a,s,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,r.mode&1&&Ge(r,n.child,null,s),r.child.memoizedState=Mo(s),r.memoizedState=Po,o);if(!(r.mode&1))return si(n,r,s,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var l=t.dgst;return t=l,o=Error(A(419)),t=Wa(o,t,void 0),si(n,r,s,t)}if(l=(s&n.childLanes)!==0,Yn||l){if(t=Rn,t!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Mr(n,a),xr(t,n,a,-1))}return Ps(),t=Wa(Error(A(421))),si(n,r,s,t)}return a.data==="$?"?(r.flags|=128,r.child=n.child,r=hh.bind(null,n),a._reactRetry=r,null):(n=o.treeContext,rr=Yr(a.nextSibling),er=r,yn=!0,vr=null,n!==null&&(or[sr++]=Ar,or[sr++]=Cr,or[sr++]=me,Ar=n.id,Cr=n.overflow,me=r),r=Ns(r,t.children),r.flags|=4096,r)}function Hl(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),No(n.return,r,e)}function Va(n,r,e,t,a){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=e,o.tailMode=a)}function sd(n,r,e){var t=r.pendingProps,a=t.revealOrder,o=t.tail;if(Wn(n,r,t.children,e),t=_n.current,t&2)t=t&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hl(n,e,r);else if(n.tag===19)Hl(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(gn(_n,t),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(e=r.child,a=null;e!==null;)n=e.alternate,n!==null&&Gi(n)===null&&(a=e),e=e.sibling;e=a,e===null?(a=r.child,r.child=null):(a=e.sibling,e.sibling=null),Va(r,!1,a,e,o);break;case"backwards":for(e=null,a=r.child,r.child=null;a!==null;){if(n=a.alternate,n!==null&&Gi(n)===null){r.child=a;break}n=a.sibling,a.sibling=e,e=a,a=n}Va(r,!0,e,null,o);break;case"together":Va(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ei(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ir(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),ye|=r.lanes,!(e&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(A(153));if(r.child!==null){for(n=r.child,e=Zr(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Zr(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function eh(n,r,e){switch(r.tag){case 3:ad(r),Ke();break;case 5:Pc(r);break;case 1:Xn(r.type)&&Ui(r);break;case 4:_s(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,a=r.memoizedProps.value;gn(Wi,t._currentValue),t._currentValue=a;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(gn(_n,_n.current&1),r.flags|=128,null):e&r.child.childLanes?od(n,r,e):(gn(_n,_n.current&1),n=Ir(n,r,e),n!==null?n.sibling:null);gn(_n,_n.current&1);break;case 19:if(t=(e&r.childLanes)!==0,n.flags&128){if(t)return sd(n,r,e);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),gn(_n,_n.current),t)break;return null;case 22:case 23:return r.lanes=0,td(n,r,e)}return Ir(n,r,e)}var ld,Io,ud,cd;ld=function(n,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Io=function(){};ud=function(n,r,e,t){var a=n.memoizedProps;if(a!==t){n=r.stateNode,de(kr.current);var o=null;switch(e){case"input":a=to(n,a),t=to(n,t),o=[];break;case"select":a=wn({},a,{value:void 0}),t=wn({},t,{value:void 0}),o=[];break;case"textarea":a=oo(n,a),t=oo(n,t),o=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=Bi)}lo(e,t);var s;e=null;for(d in a)if(!t.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(s in l)l.hasOwnProperty(s)&&(e||(e={}),e[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(St.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in t){var c=t[d];if(l=a!=null?a[d]:void 0,t.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(e||(e={}),e[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(e||(e={}),e[s]=c[s])}else e||(o||(o=[]),o.push(d,e)),e=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(St.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&mn("scroll",n),o||l===c||(o=[])):(o=o||[]).push(d,c))}e&&(o=o||[]).push("style",e);var d=o;(r.updateQueue=d)&&(r.flags|=4)}};cd=function(n,r,e,t){e!==t&&(r.flags|=4)};function lt(n,r){if(!yn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var a=n.child;a!==null;)e|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)e|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function th(n,r,e){var t=r.pendingProps;switch(ps(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return Xn(r.type)&&Fi(),Fn(r),null;case 3:return t=r.stateNode,Je(),vn(qn),vn(Hn),ws(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ai(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,vr!==null&&(Wo(vr),vr=null))),Io(n,r),Fn(r),null;case 5:bs(r);var a=de(It.current);if(e=r.type,n!==null&&r.stateNode!=null)ud(n,r,e,t,a),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(A(166));return Fn(r),null}if(n=de(kr.current),ai(r)){t=r.stateNode,e=r.type;var o=r.memoizedProps;switch(t[Sr]=r,t[Pt]=o,n=(r.mode&1)!==0,e){case"dialog":mn("cancel",t),mn("close",t);break;case"iframe":case"object":case"embed":mn("load",t);break;case"video":case"audio":for(a=0;a<ht.length;a++)mn(ht[a],t);break;case"source":mn("error",t);break;case"img":case"image":case"link":mn("error",t),mn("load",t);break;case"details":mn("toggle",t);break;case"input":qs(t,o),mn("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},mn("invalid",t);break;case"textarea":Zs(t,o),mn("invalid",t)}lo(e,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?t.textContent!==l&&(o.suppressHydrationWarning!==!0&&ii(t.textContent,l,n),a=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ii(t.textContent,l,n),a=["children",""+l]):St.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&mn("scroll",t)}switch(e){case"input":Qt(t),Xs(t,o,!0);break;case"textarea":Qt(t),nl(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=Bi)}t=a,r.updateQueue=t,t!==null&&(r.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Du(e)),n==="http://www.w3.org/1999/xhtml"?e==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=s.createElement(e,{is:t.is}):(n=s.createElement(e),e==="select"&&(s=n,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):n=s.createElementNS(n,e),n[Sr]=r,n[Pt]=t,ld(n,r,!1,!1),r.stateNode=n;n:{switch(s=uo(e,t),e){case"dialog":mn("cancel",n),mn("close",n),a=t;break;case"iframe":case"object":case"embed":mn("load",n),a=t;break;case"video":case"audio":for(a=0;a<ht.length;a++)mn(ht[a],n);a=t;break;case"source":mn("error",n),a=t;break;case"img":case"image":case"link":mn("error",n),mn("load",n),a=t;break;case"details":mn("toggle",n),a=t;break;case"input":qs(n,t),a=to(n,t),mn("invalid",n);break;case"option":a=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},a=wn({},t,{value:void 0}),mn("invalid",n);break;case"textarea":Zs(n,t),a=oo(n,t),mn("invalid",n);break;default:a=t}lo(e,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Fu(n,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zu(n,c)):o==="children"?typeof c=="string"?(e!=="textarea"||c!=="")&&jt(n,c):typeof c=="number"&&jt(n,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(St.hasOwnProperty(o)?c!=null&&o==="onScroll"&&mn("scroll",n):c!=null&&Xo(n,o,c,s))}switch(e){case"input":Qt(n),Xs(n,t,!1);break;case"textarea":Qt(n),nl(n);break;case"option":t.value!=null&&n.setAttribute("value",""+ne(t.value));break;case"select":n.multiple=!!t.multiple,o=t.value,o!=null?ze(n,!!t.multiple,o,!1):t.defaultValue!=null&&ze(n,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=Bi)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)cd(n,r,n.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(A(166));if(e=de(It.current),de(kr.current),ai(r)){if(t=r.stateNode,e=r.memoizedProps,t[Sr]=r,(o=t.nodeValue!==e)&&(n=er,n!==null))switch(n.tag){case 3:ii(t.nodeValue,e,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ii(t.nodeValue,e,(n.mode&1)!==0)}o&&(r.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[Sr]=r,r.stateNode=t}return Fn(r),null;case 13:if(vn(_n),t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yn&&rr!==null&&r.mode&1&&!(r.flags&128))Ec(),Ke(),r.flags|=98560,o=!1;else if(o=ai(r),t!==null&&t.dehydrated!==null){if(n===null){if(!o)throw Error(A(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Sr]=r}else Ke(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Fn(r),o=!1}else vr!==null&&(Wo(vr),vr=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(n===null||_n.current&1?Cn===0&&(Cn=3):Ps())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return Je(),Io(n,r),n===null&&Lt(r.stateNode.containerInfo),Fn(r),null;case 10:return vs(r.type._context),Fn(r),null;case 17:return Xn(r.type)&&Fi(),Fn(r),null;case 19:if(vn(_n),o=r.memoizedState,o===null)return Fn(r),null;if(t=(r.flags&128)!==0,s=o.rendering,s===null)if(t)lt(o,!1);else{if(Cn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(s=Gi(n),s!==null){for(r.flags|=128,lt(o,!1),t=s.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=e,e=r.child;e!==null;)o=e,n=t,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,n=s.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e=e.sibling;return gn(_n,_n.current&1|2),r.child}n=n.sibling}o.tail!==null&&Nn()>Qe&&(r.flags|=128,t=!0,lt(o,!1),r.lanes=4194304)}else{if(!t)if(n=Gi(s),n!==null){if(r.flags|=128,t=!0,e=n.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),lt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!yn)return Fn(r),null}else 2*Nn()-o.renderingStartTime>Qe&&e!==1073741824&&(r.flags|=128,t=!0,lt(o,!1),r.lanes=4194304);o.isBackwards?(s.sibling=r.child,r.child=s):(e=o.last,e!==null?e.sibling=s:r.child=s,o.last=s)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=Nn(),r.sibling=null,e=_n.current,gn(_n,t?e&1|2:e&1),r):(Fn(r),null);case 22:case 23:return Rs(),t=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?nr&1073741824&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(A(156,r.tag))}function ih(n,r){switch(ps(r),r.tag){case 1:return Xn(r.type)&&Fi(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Je(),vn(qn),vn(Hn),ws(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return bs(r),null;case 13:if(vn(_n),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(A(340));Ke()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return vn(_n),null;case 4:return Je(),null;case 10:return vs(r.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var li=!1,Un=!1,ah=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ie(n,r){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){Sn(n,r,t)}else e.current=null}function Do(n,r,e){try{e()}catch(t){Sn(n,r,t)}}var $l=!1;function oh(n,r){if(_o=Ii,n=hc(),ds(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var a=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{e.nodeType,o.nodeType}catch{e=null;break n}var s=0,l=-1,c=-1,d=0,v=0,y=n,g=null;r:for(;;){for(var m;y!==e||a!==0&&y.nodeType!==3||(l=s+a),y!==o||t!==0&&y.nodeType!==3||(c=s+t),y.nodeType===3&&(s+=y.nodeValue.length),(m=y.firstChild)!==null;)g=y,y=m;for(;;){if(y===n)break r;if(g===e&&++d===a&&(l=s),g===o&&++v===t&&(c=s),(m=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=m}e=l===-1||c===-1?null:{start:l,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(bo={focusedElem:n,selectionRange:e},Ii=!1,U=r;U!==null;)if(r=U,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,U=n;else for(;U!==null;){r=U;try{var x=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,p=r.stateNode,f=p.getSnapshotBeforeUpdate(r.elementType===r.type?w:gr(r.type,w),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=r.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(_){Sn(r,r.return,_)}if(n=r.sibling,n!==null){n.return=r.return,U=n;break}U=r.return}return x=$l,$l=!1,x}function bt(n,r,e){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&n)===n){var o=a.destroy;a.destroy=void 0,o!==void 0&&Do(r,e,o)}a=a.next}while(a!==t)}}function da(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&n)===n){var t=e.create;e.destroy=t()}e=e.next}while(e!==r)}}function zo(n){var r=n.ref;if(r!==null){var e=n.stateNode;switch(n.tag){case 5:n=e;break;default:n=e}typeof r=="function"?r(n):r.current=n}}function dd(n){var r=n.alternate;r!==null&&(n.alternate=null,dd(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Sr],delete r[Pt],delete r[So],delete r[Hp],delete r[$p])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fd(n){return n.tag===5||n.tag===3||n.tag===4}function Wl(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||fd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bo(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(n,r):e.insertBefore(n,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(n,e)):(r=e,r.appendChild(n)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=Bi));else if(t!==4&&(n=n.child,n!==null))for(Bo(n,r,e),n=n.sibling;n!==null;)Bo(n,r,e),n=n.sibling}function Fo(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Fo(n,r,e),n=n.sibling;n!==null;)Fo(n,r,e),n=n.sibling}var Pn=null,mr=!1;function zr(n,r,e){for(e=e.child;e!==null;)pd(n,r,e),e=e.sibling}function pd(n,r,e){if(jr&&typeof jr.onCommitFiberUnmount=="function")try{jr.onCommitFiberUnmount(ta,e)}catch{}switch(e.tag){case 5:Un||Ie(e,r);case 6:var t=Pn,a=mr;Pn=null,zr(n,r,e),Pn=t,mr=a,Pn!==null&&(mr?(n=Pn,e=e.stateNode,n.nodeType===8?n.parentNode.removeChild(e):n.removeChild(e)):Pn.removeChild(e.stateNode));break;case 18:Pn!==null&&(mr?(n=Pn,e=e.stateNode,n.nodeType===8?za(n.parentNode,e):n.nodeType===1&&za(n,e),Ot(n)):za(Pn,e.stateNode));break;case 4:t=Pn,a=mr,Pn=e.stateNode.containerInfo,mr=!0,zr(n,r,e),Pn=t,mr=a;break;case 0:case 11:case 14:case 15:if(!Un&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Do(e,r,s),a=a.next}while(a!==t)}zr(n,r,e);break;case 1:if(!Un&&(Ie(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(l){Sn(e,r,l)}zr(n,r,e);break;case 21:zr(n,r,e);break;case 22:e.mode&1?(Un=(t=Un)||e.memoizedState!==null,zr(n,r,e),Un=t):zr(n,r,e);break;default:zr(n,r,e)}}function Vl(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var e=n.stateNode;e===null&&(e=n.stateNode=new ah),r.forEach(function(t){var a=gh.bind(null,n,t);e.has(t)||(e.add(t),t.then(a,a))})}}function pr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];try{var o=n,s=r,l=s;n:for(;l!==null;){switch(l.tag){case 5:Pn=l.stateNode,mr=!1;break n;case 3:Pn=l.stateNode.containerInfo,mr=!0;break n;case 4:Pn=l.stateNode.containerInfo,mr=!0;break n}l=l.return}if(Pn===null)throw Error(A(160));pd(o,s,a),Pn=null,mr=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(d){Sn(a,r,d)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)hd(r,n),r=r.sibling}function hd(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pr(r,n),wr(n),t&4){try{bt(3,n,n.return),da(3,n)}catch(w){Sn(n,n.return,w)}try{bt(5,n,n.return)}catch(w){Sn(n,n.return,w)}}break;case 1:pr(r,n),wr(n),t&512&&e!==null&&Ie(e,e.return);break;case 5:if(pr(r,n),wr(n),t&512&&e!==null&&Ie(e,e.return),n.flags&32){var a=n.stateNode;try{jt(a,"")}catch(w){Sn(n,n.return,w)}}if(t&4&&(a=n.stateNode,a!=null)){var o=n.memoizedProps,s=e!==null?e.memoizedProps:o,l=n.type,c=n.updateQueue;if(n.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Mu(a,o),uo(l,s);var d=uo(l,o);for(s=0;s<c.length;s+=2){var v=c[s],y=c[s+1];v==="style"?Fu(a,y):v==="dangerouslySetInnerHTML"?zu(a,y):v==="children"?jt(a,y):Xo(a,v,y,d)}switch(l){case"input":io(a,o);break;case"textarea":Iu(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?ze(a,!!o.multiple,m,!1):g!==!!o.multiple&&(o.defaultValue!=null?ze(a,!!o.multiple,o.defaultValue,!0):ze(a,!!o.multiple,o.multiple?[]:"",!1))}a[Pt]=o}catch(w){Sn(n,n.return,w)}}break;case 6:if(pr(r,n),wr(n),t&4){if(n.stateNode===null)throw Error(A(162));a=n.stateNode,o=n.memoizedProps;try{a.nodeValue=o}catch(w){Sn(n,n.return,w)}}break;case 3:if(pr(r,n),wr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Ot(r.containerInfo)}catch(w){Sn(n,n.return,w)}break;case 4:pr(r,n),wr(n);break;case 13:pr(r,n),wr(n),a=n.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Cs=Nn())),t&4&&Vl(n);break;case 22:if(v=e!==null&&e.memoizedState!==null,n.mode&1?(Un=(d=Un)||v,pr(r,n),Un=d):pr(r,n),wr(n),t&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!v&&n.mode&1)for(U=n,v=n.child;v!==null;){for(y=U=v;U!==null;){switch(g=U,m=g.child,g.tag){case 0:case 11:case 14:case 15:bt(4,g,g.return);break;case 1:Ie(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){t=g,e=g.return;try{r=t,x.props=r.memoizedProps,x.state=r.memoizedState,x.componentWillUnmount()}catch(w){Sn(t,e,w)}}break;case 5:Ie(g,g.return);break;case 22:if(g.memoizedState!==null){Gl(y);continue}}m!==null?(m.return=g,U=m):Gl(y)}v=v.sibling}n:for(v=null,y=n;;){if(y.tag===5){if(v===null){v=y;try{a=y.stateNode,d?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=y.stateNode,c=y.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Bu("display",s))}catch(w){Sn(n,n.return,w)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(w){Sn(n,n.return,w)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===n)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break n;for(;y.sibling===null;){if(y.return===null||y.return===n)break n;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pr(r,n),wr(n),t&4&&Vl(n);break;case 21:break;default:pr(r,n),wr(n)}}function wr(n){var r=n.flags;if(r&2){try{n:{for(var e=n.return;e!==null;){if(fd(e)){var t=e;break n}e=e.return}throw Error(A(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(jt(a,""),t.flags&=-33);var o=Wl(n);Fo(n,o,a);break;case 3:case 4:var s=t.stateNode.containerInfo,l=Wl(n);Bo(n,l,s);break;default:throw Error(A(161))}}catch(c){Sn(n,n.return,c)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function sh(n,r,e){U=n,gd(n)}function gd(n,r,e){for(var t=(n.mode&1)!==0;U!==null;){var a=U,o=a.child;if(a.tag===22&&t){var s=a.memoizedState!==null||li;if(!s){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Un;l=li;var d=Un;if(li=s,(Un=c)&&!d)for(U=a;U!==null;)s=U,c=s.child,s.tag===22&&s.memoizedState!==null?Jl(a):c!==null?(c.return=s,U=c):Jl(a);for(;o!==null;)U=o,gd(o),o=o.sibling;U=a,li=l,Un=d}Kl(n)}else a.subtreeFlags&8772&&o!==null?(o.return=a,U=o):Kl(n)}}function Kl(n){for(;U!==null;){var r=U;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Un||da(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!Un)if(e===null)t.componentDidMount();else{var a=r.elementType===r.type?e.memoizedProps:gr(r.type,e.memoizedProps);t.componentDidUpdate(a,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Ol(r,o,t);break;case 3:var s=r.updateQueue;if(s!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Ol(r,s,e)}break;case 5:var l=r.stateNode;if(e===null&&r.flags&4){e=l;var c=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&e.focus();break;case"img":c.src&&(e.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var d=r.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Ot(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Un||r.flags&512&&zo(r)}catch(g){Sn(r,r.return,g)}}if(r===n){U=null;break}if(e=r.sibling,e!==null){e.return=r.return,U=e;break}U=r.return}}function Gl(n){for(;U!==null;){var r=U;if(r===n){U=null;break}var e=r.sibling;if(e!==null){e.return=r.return,U=e;break}U=r.return}}function Jl(n){for(;U!==null;){var r=U;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{da(4,r)}catch(c){Sn(r,e,c)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var a=r.return;try{t.componentDidMount()}catch(c){Sn(r,a,c)}}var o=r.return;try{zo(r)}catch(c){Sn(r,o,c)}break;case 5:var s=r.return;try{zo(r)}catch(c){Sn(r,s,c)}}}catch(c){Sn(r,r.return,c)}if(r===n){U=null;break}var l=r.sibling;if(l!==null){l.return=r.return,U=l;break}U=r.return}}var lh=Math.ceil,Qi=Dr.ReactCurrentDispatcher,Os=Dr.ReactCurrentOwner,ur=Dr.ReactCurrentBatchConfig,sn=0,Rn=null,On=null,Mn=0,nr=0,De=te(0),Cn=0,Ft=null,ye=0,fa=0,As=0,wt=null,Jn=null,Cs=0,Qe=1/0,Nr=null,qi=!1,Uo=null,qr=null,ui=!1,Wr=null,Xi=0,Tt=0,Ho=null,Ni=-1,Oi=0;function Vn(){return sn&6?Nn():Ni!==-1?Ni:Ni=Nn()}function Xr(n){return n.mode&1?sn&2&&Mn!==0?Mn&-Mn:Vp.transition!==null?(Oi===0&&(Oi=Xu()),Oi):(n=fn,n!==0||(n=window.event,n=n===void 0?16:ac(n.type)),n):1}function xr(n,r,e,t){if(50<Tt)throw Tt=0,Ho=null,Error(A(185));Wt(n,e,t),(!(sn&2)||n!==Rn)&&(n===Rn&&(!(sn&2)&&(fa|=e),Cn===4&&Hr(n,Mn)),Zn(n,t),e===1&&sn===0&&!(r.mode&1)&&(Qe=Nn()+500,la&&ie()))}function Zn(n,r){var e=n.callbackNode;Vf(n,r);var t=Mi(n,n===Rn?Mn:0);if(t===0)e!==null&&tl(e),n.callbackNode=null,n.callbackPriority=0;else if(r=t&-t,n.callbackPriority!==r){if(e!=null&&tl(e),r===1)n.tag===0?Wp(Yl.bind(null,n)):Sc(Yl.bind(null,n)),Fp(function(){!(sn&6)&&ie()}),e=null;else{switch(Zu(t)){case 1:e=ts;break;case 4:e=Qu;break;case 16:e=Pi;break;case 536870912:e=qu;break;default:e=Pi}e=Td(e,md.bind(null,n))}n.callbackPriority=r,n.callbackNode=e}}function md(n,r){if(Ni=-1,Oi=0,sn&6)throw Error(A(327));var e=n.callbackNode;if($e()&&n.callbackNode!==e)return null;var t=Mi(n,n===Rn?Mn:0);if(t===0)return null;if(t&30||t&n.expiredLanes||r)r=Zi(n,t);else{r=t;var a=sn;sn|=2;var o=yd();(Rn!==n||Mn!==r)&&(Nr=null,Qe=Nn()+500,fe(n,r));do try{dh();break}catch(l){vd(n,l)}while(!0);ms(),Qi.current=o,sn=a,On!==null?r=0:(Rn=null,Mn=0,r=Cn)}if(r!==0){if(r===2&&(a=go(n),a!==0&&(t=a,r=$o(n,a))),r===1)throw e=Ft,fe(n,0),Hr(n,t),Zn(n,Nn()),e;if(r===6)Hr(n,t);else{if(a=n.current.alternate,!(t&30)&&!uh(a)&&(r=Zi(n,t),r===2&&(o=go(n),o!==0&&(t=o,r=$o(n,o))),r===1))throw e=Ft,fe(n,0),Hr(n,t),Zn(n,Nn()),e;switch(n.finishedWork=a,n.finishedLanes=t,r){case 0:case 1:throw Error(A(345));case 2:le(n,Jn,Nr);break;case 3:if(Hr(n,t),(t&130023424)===t&&(r=Cs+500-Nn(),10<r)){if(Mi(n,0)!==0)break;if(a=n.suspendedLanes,(a&t)!==t){Vn(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=To(le.bind(null,n,Jn,Nr),r);break}le(n,Jn,Nr);break;case 4:if(Hr(n,t),(t&4194240)===t)break;for(r=n.eventTimes,a=-1;0<t;){var s=31-yr(t);o=1<<s,s=r[s],s>a&&(a=s),t&=~o}if(t=a,t=Nn()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*lh(t/1960))-t,10<t){n.timeoutHandle=To(le.bind(null,n,Jn,Nr),t);break}le(n,Jn,Nr);break;case 5:le(n,Jn,Nr);break;default:throw Error(A(329))}}}return Zn(n,Nn()),n.callbackNode===e?md.bind(null,n):null}function $o(n,r){var e=wt;return n.current.memoizedState.isDehydrated&&(fe(n,r).flags|=256),n=Zi(n,r),n!==2&&(r=Jn,Jn=e,r!==null&&Wo(r)),n}function Wo(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function uh(n){for(var r=n;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var a=e[t],o=a.getSnapshot;a=a.value;try{if(!_r(o(),a))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(n,r){for(r&=~As,r&=~fa,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var e=31-yr(r),t=1<<e;n[e]=-1,r&=~t}}function Yl(n){if(sn&6)throw Error(A(327));$e();var r=Mi(n,0);if(!(r&1))return Zn(n,Nn()),null;var e=Zi(n,r);if(n.tag!==0&&e===2){var t=go(n);t!==0&&(r=t,e=$o(n,t))}if(e===1)throw e=Ft,fe(n,0),Hr(n,r),Zn(n,Nn()),e;if(e===6)throw Error(A(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,le(n,Jn,Nr),Zn(n,Nn()),null}function Ls(n,r){var e=sn;sn|=1;try{return n(r)}finally{sn=e,sn===0&&(Qe=Nn()+500,la&&ie())}}function xe(n){Wr!==null&&Wr.tag===0&&!(sn&6)&&$e();var r=sn;sn|=1;var e=ur.transition,t=fn;try{if(ur.transition=null,fn=1,n)return n()}finally{fn=t,ur.transition=e,sn=r,!(sn&6)&&ie()}}function Rs(){nr=De.current,vn(De)}function fe(n,r){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;if(e!==-1&&(n.timeoutHandle=-1,Bp(e)),On!==null)for(e=On.return;e!==null;){var t=e;switch(ps(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Fi();break;case 3:Je(),vn(qn),vn(Hn),ws();break;case 5:bs(t);break;case 4:Je();break;case 13:vn(_n);break;case 19:vn(_n);break;case 10:vs(t.type._context);break;case 22:case 23:Rs()}e=e.return}if(Rn=n,On=n=Zr(n.current,null),Mn=nr=r,Cn=0,Ft=null,As=fa=ye=0,Jn=wt=null,ce!==null){for(r=0;r<ce.length;r++)if(e=ce[r],t=e.interleaved,t!==null){e.interleaved=null;var a=t.next,o=e.pending;if(o!==null){var s=o.next;o.next=a,t.next=s}e.pending=t}ce=null}return n}function vd(n,r){do{var e=On;try{if(ms(),ji.current=Yi,Ji){for(var t=bn.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Ji=!1}if(ve=0,Ln=An=bn=null,_t=!1,Dt=0,Os.current=null,e===null||e.return===null){Cn=1,Ft=r,On=null;break}n:{var o=n,s=e.return,l=e,c=r;if(r=Mn,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,v=l,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Il(s);if(m!==null){m.flags&=-257,Dl(m,s,l,o,r),m.mode&1&&Ml(o,d,r),r=m,c=d;var x=r.updateQueue;if(x===null){var w=new Set;w.add(c),r.updateQueue=w}else x.add(c);break n}else{if(!(r&1)){Ml(o,d,r),Ps();break n}c=Error(A(426))}}else if(yn&&l.mode&1){var E=Il(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Dl(E,s,l,o,r),hs(Ye(c,l));break n}}o=c=Ye(c,l),Cn!==4&&(Cn=2),wt===null?wt=[o]:wt.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var p=nd(o,c,r);Nl(o,p);break n;case 1:l=c;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qr===null||!qr.has(h)))){o.flags|=65536,r&=-r,o.lanes|=r;var _=rd(o,l,r);Nl(o,_);break n}}o=o.return}while(o!==null)}_d(e)}catch(S){r=S,On===e&&e!==null&&(On=e=e.return);continue}break}while(!0)}function yd(){var n=Qi.current;return Qi.current=Yi,n===null?Yi:n}function Ps(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Rn===null||!(ye&268435455)&&!(fa&268435455)||Hr(Rn,Mn)}function Zi(n,r){var e=sn;sn|=2;var t=yd();(Rn!==n||Mn!==r)&&(Nr=null,fe(n,r));do try{ch();break}catch(a){vd(n,a)}while(!0);if(ms(),sn=e,Qi.current=t,On!==null)throw Error(A(261));return Rn=null,Mn=0,Cn}function ch(){for(;On!==null;)xd(On)}function dh(){for(;On!==null&&!If();)xd(On)}function xd(n){var r=wd(n.alternate,n,nr);n.memoizedProps=n.pendingProps,r===null?_d(n):On=r,Os.current=null}function _d(n){var r=n;do{var e=r.alternate;if(n=r.return,r.flags&32768){if(e=ih(e,r),e!==null){e.flags&=32767,On=e;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,On=null;return}}else if(e=th(e,r,nr),e!==null){On=e;return}if(r=r.sibling,r!==null){On=r;return}On=r=n}while(r!==null);Cn===0&&(Cn=5)}function le(n,r,e){var t=fn,a=ur.transition;try{ur.transition=null,fn=1,fh(n,r,e,t)}finally{ur.transition=a,fn=t}return null}function fh(n,r,e,t){do $e();while(Wr!==null);if(sn&6)throw Error(A(327));e=n.finishedWork;var a=n.finishedLanes;if(e===null)return null;if(n.finishedWork=null,n.finishedLanes=0,e===n.current)throw Error(A(177));n.callbackNode=null,n.callbackPriority=0;var o=e.lanes|e.childLanes;if(Kf(n,o),n===Rn&&(On=Rn=null,Mn=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||ui||(ui=!0,Td(Pi,function(){return $e(),null})),o=(e.flags&15990)!==0,e.subtreeFlags&15990||o){o=ur.transition,ur.transition=null;var s=fn;fn=1;var l=sn;sn|=4,Os.current=null,oh(n,e),hd(e,n),Lp(bo),Ii=!!_o,bo=_o=null,n.current=e,sh(e),Df(),sn=l,fn=s,ur.transition=o}else n.current=e;if(ui&&(ui=!1,Wr=n,Xi=a),o=n.pendingLanes,o===0&&(qr=null),Ff(e.stateNode),Zn(n,Nn()),r!==null)for(t=n.onRecoverableError,e=0;e<r.length;e++)a=r[e],t(a.value,{componentStack:a.stack,digest:a.digest});if(qi)throw qi=!1,n=Uo,Uo=null,n;return Xi&1&&n.tag!==0&&$e(),o=n.pendingLanes,o&1?n===Ho?Tt++:(Tt=0,Ho=n):Tt=0,ie(),null}function $e(){if(Wr!==null){var n=Zu(Xi),r=ur.transition,e=fn;try{if(ur.transition=null,fn=16>n?16:n,Wr===null)var t=!1;else{if(n=Wr,Wr=null,Xi=0,sn&6)throw Error(A(331));var a=sn;for(sn|=4,U=n.current;U!==null;){var o=U,s=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(U=d;U!==null;){var v=U;switch(v.tag){case 0:case 11:case 15:bt(8,v,o)}var y=v.child;if(y!==null)y.return=v,U=y;else for(;U!==null;){v=U;var g=v.sibling,m=v.return;if(dd(v),v===d){U=null;break}if(g!==null){g.return=m,U=g;break}U=m}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}U=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,U=s;else n:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bt(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,U=p;break n}U=o.return}}var f=n.current;for(U=f;U!==null;){s=U;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,U=h;else n:for(s=f;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:da(9,l)}}catch(S){Sn(l,l.return,S)}if(l===s){U=null;break n}var _=l.sibling;if(_!==null){_.return=l.return,U=_;break n}U=l.return}}if(sn=a,ie(),jr&&typeof jr.onPostCommitFiberRoot=="function")try{jr.onPostCommitFiberRoot(ta,n)}catch{}t=!0}return t}finally{fn=e,ur.transition=r}}return!1}function Ql(n,r,e){r=Ye(e,r),r=nd(n,r,1),n=Qr(n,r,1),r=Vn(),n!==null&&(Wt(n,1,r),Zn(n,r))}function Sn(n,r,e){if(n.tag===3)Ql(n,n,e);else for(;r!==null;){if(r.tag===3){Ql(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(qr===null||!qr.has(t))){n=Ye(e,n),n=rd(r,n,1),r=Qr(r,n,1),n=Vn(),r!==null&&(Wt(r,1,n),Zn(r,n));break}}r=r.return}}function ph(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),r=Vn(),n.pingedLanes|=n.suspendedLanes&e,Rn===n&&(Mn&e)===e&&(Cn===4||Cn===3&&(Mn&130023424)===Mn&&500>Nn()-Cs?fe(n,0):As|=e),Zn(n,r)}function bd(n,r){r===0&&(n.mode&1?(r=Zt,Zt<<=1,!(Zt&130023424)&&(Zt=4194304)):r=1);var e=Vn();n=Mr(n,r),n!==null&&(Wt(n,r,e),Zn(n,e))}function hh(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),bd(n,e)}function gh(n,r){var e=0;switch(n.tag){case 13:var t=n.stateNode,a=n.memoizedState;a!==null&&(e=a.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(A(314))}t!==null&&t.delete(r),bd(n,e)}var wd;wd=function(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)Yn=!0;else{if(!(n.lanes&e)&&!(r.flags&128))return Yn=!1,eh(n,r,e);Yn=!!(n.flags&131072)}else Yn=!1,yn&&r.flags&1048576&&jc(r,$i,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;Ei(n,r),n=r.pendingProps;var a=Ve(r,Hn.current);He(r,e),a=Ss(null,r,t,n,a,e);var o=js();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xn(t)?(o=!0,Ui(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,xs(r),a.updater=ua,r.stateNode=a,a._reactInternals=r,Ao(r,t,n,e),r=Ro(null,r,t,!0,o,e)):(r.tag=0,yn&&o&&fs(r),Wn(null,r,a,e),r=r.child),r;case 16:t=r.elementType;n:{switch(Ei(n,r),n=r.pendingProps,a=t._init,t=a(t._payload),r.type=t,a=r.tag=vh(t),n=gr(t,n),a){case 0:r=Lo(null,r,t,n,e);break n;case 1:r=Fl(null,r,t,n,e);break n;case 11:r=zl(null,r,t,n,e);break n;case 14:r=Bl(null,r,t,gr(t.type,n),e);break n}throw Error(A(306,t,""))}return r;case 0:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:gr(t,a),Lo(n,r,t,a,e);case 1:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:gr(t,a),Fl(n,r,t,a,e);case 3:n:{if(ad(r),n===null)throw Error(A(387));t=r.pendingProps,o=r.memoizedState,a=o.element,Oc(n,r),Ki(r,t,null,e);var s=r.memoizedState;if(t=s.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=Ye(Error(A(423)),r),r=Ul(n,r,t,e,a);break n}else if(t!==a){a=Ye(Error(A(424)),r),r=Ul(n,r,t,e,a);break n}else for(rr=Yr(r.stateNode.containerInfo.firstChild),er=r,yn=!0,vr=null,e=Rc(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ke(),t===a){r=Ir(n,r,e);break n}Wn(n,r,t,e)}r=r.child}return r;case 5:return Pc(r),n===null&&Eo(r),t=r.type,a=r.pendingProps,o=n!==null?n.memoizedProps:null,s=a.children,wo(t,a)?s=null:o!==null&&wo(t,o)&&(r.flags|=32),id(n,r),Wn(n,r,s,e),r.child;case 6:return n===null&&Eo(r),null;case 13:return od(n,r,e);case 4:return _s(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Ge(r,null,t,e):Wn(n,r,t,e),r.child;case 11:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:gr(t,a),zl(n,r,t,a,e);case 7:return Wn(n,r,r.pendingProps,e),r.child;case 8:return Wn(n,r,r.pendingProps.children,e),r.child;case 12:return Wn(n,r,r.pendingProps.children,e),r.child;case 10:n:{if(t=r.type._context,a=r.pendingProps,o=r.memoizedProps,s=a.value,gn(Wi,t._currentValue),t._currentValue=s,o!==null)if(_r(o.value,s)){if(o.children===a.children&&!qn.current){r=Ir(n,r,e);break n}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===t){if(o.tag===1){c=Lr(-1,e&-e),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?c.next=c:(c.next=v.next,v.next=c),d.pending=c}}o.lanes|=e,c=o.alternate,c!==null&&(c.lanes|=e),No(o.return,e,r),l.lanes|=e;break}c=c.next}}else if(o.tag===10)s=o.type===r.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),No(s,e,r),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===r){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wn(n,r,a.children,e),r=r.child}return r;case 9:return a=r.type,t=r.pendingProps.children,He(r,e),a=cr(a),t=t(a),r.flags|=1,Wn(n,r,t,e),r.child;case 14:return t=r.type,a=gr(t,r.pendingProps),a=gr(t.type,a),Bl(n,r,t,a,e);case 15:return ed(n,r,r.type,r.pendingProps,e);case 17:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:gr(t,a),Ei(n,r),r.tag=1,Xn(t)?(n=!0,Ui(r)):n=!1,He(r,e),Cc(r,t,a),Ao(r,t,a,e),Ro(null,r,t,!0,n,e);case 19:return sd(n,r,e);case 22:return td(n,r,e)}throw Error(A(156,r.tag))};function Td(n,r){return Yu(n,r)}function mh(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(n,r,e,t){return new mh(n,r,e,t)}function Ms(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vh(n){if(typeof n=="function")return Ms(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ns)return 11;if(n===rs)return 14}return 2}function Zr(n,r){var e=n.alternate;return e===null?(e=lr(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&14680064,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e}function Ai(n,r,e,t,a,o){var s=2;if(t=n,typeof n=="function")Ms(n)&&(s=1);else if(typeof n=="string")s=5;else n:switch(n){case Ee:return pe(e.children,a,o,r);case Zo:s=8,a|=8;break;case Za:return n=lr(12,e,r,a|2),n.elementType=Za,n.lanes=o,n;case no:return n=lr(13,e,r,a),n.elementType=no,n.lanes=o,n;case ro:return n=lr(19,e,r,a),n.elementType=ro,n.lanes=o,n;case Lu:return pa(e,a,o,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Au:s=10;break n;case Cu:s=9;break n;case ns:s=11;break n;case rs:s=14;break n;case Br:s=16,t=null;break n}throw Error(A(130,n==null?n:typeof n,""))}return r=lr(s,e,r,a),r.elementType=n,r.type=t,r.lanes=o,r}function pe(n,r,e,t){return n=lr(7,n,t,r),n.lanes=e,n}function pa(n,r,e,t){return n=lr(22,n,t,r),n.elementType=Lu,n.lanes=e,n.stateNode={isHidden:!1},n}function Ka(n,r,e){return n=lr(6,n,null,r),n.lanes=e,n}function Ga(n,r,e){return r=lr(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function yh(n,r,e,t,a){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ea(0),this.expirationTimes=Ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Is(n,r,e,t,a,o,s,l,c){return n=new yh(n,r,e,l,c),r===1?(r=1,o===!0&&(r|=8)):r=0,o=lr(3,null,null,r),n.current=o,o.stateNode=n,o.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(o),n}function xh(n,r,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:t==null?null:""+t,children:n,containerInfo:r,implementation:e}}function Sd(n){if(!n)return re;n=n._reactInternals;n:{if(be(n)!==n||n.tag!==1)throw Error(A(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break n;case 1:if(Xn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break n}}r=r.return}while(r!==null);throw Error(A(171))}if(n.tag===1){var e=n.type;if(Xn(e))return Tc(n,e,r)}return r}function jd(n,r,e,t,a,o,s,l,c){return n=Is(e,t,!0,n,a,o,s,l,c),n.context=Sd(null),e=n.current,t=Vn(),a=Xr(e),o=Lr(t,a),o.callback=r??null,Qr(e,o,a),n.current.lanes=a,Wt(n,a,t),Zn(n,t),n}function ha(n,r,e,t){var a=r.current,o=Vn(),s=Xr(a);return e=Sd(e),r.context===null?r.context=e:r.pendingContext=e,r=Lr(o,s),r.payload={element:n},t=t===void 0?null:t,t!==null&&(r.callback=t),n=Qr(a,r,s),n!==null&&(xr(n,a,s,o),Si(n,a,s)),s}function na(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ql(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function Ds(n,r){ql(n,r),(n=n.alternate)&&ql(n,r)}function _h(){return null}var kd=typeof reportError=="function"?reportError:function(n){console.error(n)};function zs(n){this._internalRoot=n}ga.prototype.render=zs.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(A(409));ha(n,r,null,null)};ga.prototype.unmount=zs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xe(function(){ha(null,n,null,null)}),r[Pr]=null}};function ga(n){this._internalRoot=n}ga.prototype.unstable_scheduleHydration=function(n){if(n){var r=ec();n={blockedOn:null,target:n,priority:r};for(var e=0;e<Ur.length&&r!==0&&r<Ur[e].priority;e++);Ur.splice(e,0,n),e===0&&ic(n)}};function Bs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ma(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xl(){}function bh(n,r,e,t,a){if(a){if(typeof t=="function"){var o=t;t=function(){var d=na(s);o.call(d)}}var s=jd(r,t,n,0,null,!1,!1,"",Xl);return n._reactRootContainer=s,n[Pr]=s.current,Lt(n.nodeType===8?n.parentNode:n),xe(),s}for(;a=n.lastChild;)n.removeChild(a);if(typeof t=="function"){var l=t;t=function(){var d=na(c);l.call(d)}}var c=Is(n,0,!1,null,null,!1,!1,"",Xl);return n._reactRootContainer=c,n[Pr]=c.current,Lt(n.nodeType===8?n.parentNode:n),xe(function(){ha(r,c,e,t)}),c}function va(n,r,e,t,a){var o=e._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var l=a;a=function(){var c=na(s);l.call(c)}}ha(r,s,n,a)}else s=bh(e,r,n,a,t);return na(s)}nc=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var e=pt(r.pendingLanes);e!==0&&(is(r,e|1),Zn(r,Nn()),!(sn&6)&&(Qe=Nn()+500,ie()))}break;case 13:xe(function(){var t=Mr(n,1);if(t!==null){var a=Vn();xr(t,n,1,a)}}),Ds(n,1)}};as=function(n){if(n.tag===13){var r=Mr(n,134217728);if(r!==null){var e=Vn();xr(r,n,134217728,e)}Ds(n,134217728)}};rc=function(n){if(n.tag===13){var r=Xr(n),e=Mr(n,r);if(e!==null){var t=Vn();xr(e,n,r,t)}Ds(n,r)}};ec=function(){return fn};tc=function(n,r){var e=fn;try{return fn=n,r()}finally{fn=e}};fo=function(n,r,e){switch(r){case"input":if(io(n,e),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var a=sa(t);if(!a)throw Error(A(90));Pu(t),io(t,a)}}}break;case"textarea":Iu(n,e);break;case"select":r=e.value,r!=null&&ze(n,!!e.multiple,r,!1)}};$u=Ls;Wu=xe;var wh={usingClientEntryPoint:!1,Events:[Kt,Ce,sa,Uu,Hu,Ls]},ut={findFiberByHostInstance:ue,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Th={bundleType:ut.bundleType,version:ut.version,rendererPackageName:ut.rendererPackageName,rendererConfig:ut.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gu(n),n===null?null:n.stateNode},findFiberByHostInstance:ut.findFiberByHostInstance||_h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{ta=ci.inject(Th),jr=ci}catch{}}ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wh;ir.createPortal=function(n,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(r))throw Error(A(200));return xh(n,r,null,e)};ir.createRoot=function(n,r){if(!Bs(n))throw Error(A(299));var e=!1,t="",a=kd;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Is(n,1,!1,null,null,e,!1,t,a),n[Pr]=r.current,Lt(n.nodeType===8?n.parentNode:n),new zs(r)};ir.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(A(188)):(n=Object.keys(n).join(","),Error(A(268,n)));return n=Gu(r),n=n===null?null:n.stateNode,n};ir.flushSync=function(n){return xe(n)};ir.hydrate=function(n,r,e){if(!ma(r))throw Error(A(200));return va(null,n,r,!0,e)};ir.hydrateRoot=function(n,r,e){if(!Bs(n))throw Error(A(405));var t=e!=null&&e.hydratedSources||null,a=!1,o="",s=kd;if(e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),r=jd(r,null,n,1,e??null,a,!1,o,s),n[Pr]=r.current,Lt(n),t)for(n=0;n<t.length;n++)e=t[n],a=e._getVersion,a=a(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,a]:r.mutableSourceEagerHydrationData.push(e,a);return new ga(r)};ir.render=function(n,r,e){if(!ma(r))throw Error(A(200));return va(null,n,r,!1,e)};ir.unmountComponentAtNode=function(n){if(!ma(n))throw Error(A(40));return n._reactRootContainer?(xe(function(){va(null,null,n,!1,function(){n._reactRootContainer=null,n[Pr]=null})}),!0):!1};ir.unstable_batchedUpdates=Ls;ir.unstable_renderSubtreeIntoContainer=function(n,r,e,t){if(!ma(e))throw Error(A(200));if(n==null||n._reactInternals===void 0)throw Error(A(38));return va(n,r,e,!1,t)};ir.version="18.2.0-next-9e3b772b8-20220608";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(n){console.error(n)}}Ed(),ju.exports=ir;var Nd=ju.exports;const Sh=Vo(Nd);var Zl=Nd;qa.createRoot=Zl.createRoot,qa.hydrateRoot=Zl.hydrateRoot;const Od=$.createContext(void 0),jh=({children:n})=>{const r=localStorage.getItem("selectedLanguage")||"python",[e,t]=$.useState(r);return $.useEffect(()=>{localStorage.setItem("selectedLanguage",e)},[e]),i.jsx(Od.Provider,{value:{selectedLanguage:e,setSelectedLanguage:t},children:n})};function kh(){const n=$.useContext(Od);if(n===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return n}const Ad=$.createContext(void 0);function Eh({children:n}){const[r,e]=$.useState(!0),t=()=>e(!0),a=()=>e(!1),o=()=>e(!r);return i.jsx(Ad.Provider,{value:{isSidebarOpen:r,showSidebar:t,hideSidebar:a,toggleSidebar:o},children:n})}function Fs(){const n=$.useContext(Ad);if(n===void 0)throw new Error("useSidebar must be used within SidebarProvider");return n}const Nh="_wave_nm5to_1",Oh="_gradient_nm5to_1",di={wave:Nh,gradient:Oh};function Ah(){return i.jsxs("div",{className:di.background,children:[i.jsx("div",{className:di.wave}),i.jsx("div",{className:di.wave}),i.jsx("div",{className:di.wave})]})}const Ch="_topbar_dxbgq_1",Lh="_container_dxbgq_22",Rh="_buttonContainer_dxbgq_28",Ph="_title_dxbgq_35",Mh="_iconLink_dxbgq_53",Ih="_hamburger_dxbgq_75",Dh="_hamburgerIcon_dxbgq_79",zh="_hamburgerTop_dxbgq_88",Bh="_collapsed_dxbgq_92",Fh="_hamburgerMiddle_dxbgq_96",Uh="_hamburgerBottom_dxbgq_106",hr={topbar:Ch,container:Lh,buttonContainer:Rh,title:Ph,"animated-gradient":"_animated-gradient_dxbgq_1",iconLink:Mh,hamburger:Ih,hamburgerIcon:Dh,hamburgerTop:zh,collapsed:Bh,hamburgerMiddle:Fh,hamburgerBottom:Uh};var Cd={exports:{}};(function(n,r){(function(t,a){n.exports=a($)})(Xd,e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":(l,c)=>{c.match=x,c.parse=w;var d=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,v=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,y=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function x(h,_){return w(h).some(function(S){var j=S.inverse,k=S.type==="all"||_.type===S.type;if(k&&j||!(k||j))return!1;var C=S.expressions.every(function(N){var M=N.feature,K=N.modifier,G=N.value,V=_[M];if(!V)return!1;switch(M){case"orientation":case"scan":return V.toLowerCase()===G.toLowerCase();case"width":case"height":case"device-width":case"device-height":G=f(G),V=f(V);break;case"resolution":G=p(G),V=p(V);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":G=E(G),V=E(V);break;case"grid":case"color":case"color-index":case"monochrome":G=parseInt(G,10)||1,V=parseInt(V,10)||0;break}switch(K){case"min":return V>=G;case"max":return V<=G;default:return V===G}});return C&&!j||!C&&j})}function w(h){return h.split(",").map(function(_){_=_.trim();var S=_.match(d),j=S[1],k=S[2],C=S[3]||"",N={};return N.inverse=!!j&&j.toLowerCase()==="not",N.type=k?k.toLowerCase():"all",C=C.match(/\([^\)]+\)/g)||[],N.expressions=C.map(function(M){var K=M.match(v),G=K[1].toLowerCase().match(y);return{modifier:G[1],feature:G[2],value:K[2]}}),N})}function E(h){var _=Number(h),S;return _||(S=h.match(/^(\d+)\s*\/\s*(\d+)$/),_=S[1]/S[2]),_}function p(h){var _=parseFloat(h),S=String(h).match(m)[1];switch(S){case"dpcm":return _/2.54;case"dppx":return _*96;default:return _}}function f(h){var _=parseFloat(h),S=String(h).match(g)[1];switch(S){case"em":return _*16;case"rem":return _*16;case"cm":return _*96/2.54;case"mm":return _*96/2.54/10;case"in":return _*96;case"pt":return _*72;case"pc":return _*72/12;default:return _}}},"./node_modules/hyphenate-style-name/index.js":(l,c,d)=>{d.r(c),d.d(c,{default:()=>w});var v=/[A-Z]/g,y=/^ms-/,g={};function m(E){return"-"+E.toLowerCase()}function x(E){if(g.hasOwnProperty(E))return g[E];var p=E.replace(v,m);return g[E]=y.test(p)?"-"+p:p}const w=x},"./node_modules/matchmediaquery/index.js":(l,c,d)=>{var v=d("./node_modules/css-mediaquery/index.js").match,y=typeof window<"u"?window.matchMedia:null;function g(x,w,E){var p=this;if(y&&!E){var f=y.call(window,x);this.matches=f.matches,this.media=f.media,f.addListener(S)}else this.matches=v(x,w),this.media=x;this.addListener=h,this.removeListener=_,this.dispose=j;function h(k){f&&f.addListener(k)}function _(k){f&&f.removeListener(k)}function S(k){p.matches=k.matches,p.media=k.media}function j(){f&&f.removeListener(S)}}function m(x,w,E){return new g(x,w,E)}l.exports=m},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;function y(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function g(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var x={},w=0;w<10;w++)x["_"+String.fromCharCode(w)]=w;var E=Object.getOwnPropertyNames(x).map(function(f){return x[f]});if(E.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(f){p[f]=f}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=g()?Object.assign:function(m,x){for(var w,E=y(m),p,f=1;f<arguments.length;f++){w=Object(arguments[f]);for(var h in w)d.call(w,h)&&(E[h]=w[h]);if(c){p=c(w);for(var _=0;_<p.length;_++)v.call(w,p[_])&&(E[p[_]]=w[p[_]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(l,c,d)=>{var v=function(){};{var y=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},m=d("./node_modules/prop-types/lib/has.js");v=function(w){var E="Warning: "+w;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function x(w,E,p,f,h){for(var _ in w)if(m(w,_)){var S;try{if(typeof w[_]!="function"){var j=Error((f||"React class")+": "+p+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}S=w[_](E,_,f,p,null,y)}catch(C){S=C}if(S&&!(S instanceof Error)&&v((f||"React class")+": type specification of "+p+" `"+_+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof S+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),S instanceof Error&&!(S.message in g)){g[S.message]=!0;var k=h?h():"";v("Failed "+p+" type: "+S.message+(k??""))}}}x.resetWarningCache=function(){g={}},l.exports=x},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,c,d)=>{var v=d("./node_modules/react-is/index.js"),y=d("./node_modules/object-assign/index.js"),g=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=d("./node_modules/prop-types/lib/has.js"),x=d("./node_modules/prop-types/checkPropTypes.js"),w=function(){};w=function(p){var f="Warning: "+p;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function E(){return null}l.exports=function(p,f){var h=typeof Symbol=="function"&&Symbol.iterator,_="@@iterator";function S(R){var F=R&&(h&&R[h]||R[_]);if(typeof F=="function")return F}var j="<<anonymous>>",k={array:K("array"),bigint:K("bigint"),bool:K("boolean"),func:K("function"),number:K("number"),object:K("object"),string:K("string"),symbol:K("symbol"),any:G(),arrayOf:V,element:hn(),elementType:xn(),instanceOf:Tn,node:I(),objectOf:T,oneOf:O,oneOfType:L,shape:Q,exact:jn};function C(R,F){return R===F?R!==0||1/R===1/F:R!==R&&F!==F}function N(R,F){this.message=R,this.data=F&&typeof F=="object"?F:{},this.stack=""}N.prototype=Error.prototype;function M(R){var F={},Z=0;function X(an,J,rn,en,D,on,P){if(en=en||j,on=on||rn,P!==g){if(f){var q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw q.name="Invariant Violation",q}else if(typeof console<"u"){var Dn=en+":"+rn;!F[Dn]&&Z<3&&(w("You are manually calling a React.PropTypes validation function for the `"+on+"` prop on `"+en+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),F[Dn]=!0,Z++)}}return J[rn]==null?an?J[rn]===null?new N("The "+D+" `"+on+"` is marked as required "+("in `"+en+"`, but its value is `null`.")):new N("The "+D+" `"+on+"` is marked as required in "+("`"+en+"`, but its value is `undefined`.")):null:R(J,rn,en,D,on)}var Y=X.bind(null,!1);return Y.isRequired=X.bind(null,!0),Y}function K(R){function F(Z,X,Y,an,J,rn){var en=Z[X],D=ln(en);if(D!==R){var on=pn(en);return new N("Invalid "+an+" `"+J+"` of type "+("`"+on+"` supplied to `"+Y+"`, expected ")+("`"+R+"`."),{expectedType:R})}return null}return M(F)}function G(){return M(E)}function V(R){function F(Z,X,Y,an,J){if(typeof R!="function")return new N("Property `"+J+"` of component `"+Y+"` has invalid PropType notation inside arrayOf.");var rn=Z[X];if(!Array.isArray(rn)){var en=ln(rn);return new N("Invalid "+an+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected an array."))}for(var D=0;D<rn.length;D++){var on=R(rn,D,Y,an,J+"["+D+"]",g);if(on instanceof Error)return on}return null}return M(F)}function hn(){function R(F,Z,X,Y,an){var J=F[Z];if(!p(J)){var rn=ln(J);return new N("Invalid "+Y+" `"+an+"` of type "+("`"+rn+"` supplied to `"+X+"`, expected a single ReactElement."))}return null}return M(R)}function xn(){function R(F,Z,X,Y,an){var J=F[Z];if(!v.isValidElementType(J)){var rn=ln(J);return new N("Invalid "+Y+" `"+an+"` of type "+("`"+rn+"` supplied to `"+X+"`, expected a single ReactElement type."))}return null}return M(R)}function Tn(R){function F(Z,X,Y,an,J){if(!(Z[X]instanceof R)){var rn=R.name||j,en=fr(Z[X]);return new N("Invalid "+an+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected ")+("instance of `"+rn+"`."))}return null}return M(F)}function O(R){if(!Array.isArray(R))return arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array."),E;function F(Z,X,Y,an,J){for(var rn=Z[X],en=0;en<R.length;en++)if(C(rn,R[en]))return null;var D=JSON.stringify(R,function(P,q){var Dn=pn(q);return Dn==="symbol"?String(q):q});return new N("Invalid "+an+" `"+J+"` of value `"+String(rn)+"` "+("supplied to `"+Y+"`, expected one of "+D+"."))}return M(F)}function T(R){function F(Z,X,Y,an,J){if(typeof R!="function")return new N("Property `"+J+"` of component `"+Y+"` has invalid PropType notation inside objectOf.");var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+an+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected an object."));for(var D in rn)if(m(rn,D)){var on=R(rn,D,Y,an,J+"."+D,g);if(on instanceof Error)return on}return null}return M(F)}function L(R){if(!Array.isArray(R))return w("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var F=0;F<R.length;F++){var Z=R[F];if(typeof Z!="function")return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+En(Z)+" at index "+F+"."),E}function X(Y,an,J,rn,en){for(var D=[],on=0;on<R.length;on++){var P=R[on],q=P(Y,an,J,rn,en,g);if(q==null)return null;q.data&&m(q.data,"expectedType")&&D.push(q.data.expectedType)}var Dn=D.length>0?", expected one of type ["+D.join(", ")+"]":"";return new N("Invalid "+rn+" `"+en+"` supplied to "+("`"+J+"`"+Dn+"."))}return M(X)}function I(){function R(F,Z,X,Y,an){return kn(F[Z])?null:new N("Invalid "+Y+" `"+an+"` supplied to "+("`"+X+"`, expected a ReactNode."))}return M(R)}function H(R,F,Z,X,Y){return new N((R||"React class")+": "+F+" type `"+Z+"."+X+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Y+"`.")}function Q(R){function F(Z,X,Y,an,J){var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+an+" `"+J+"` of type `"+en+"` "+("supplied to `"+Y+"`, expected `object`."));for(var D in R){var on=R[D];if(typeof on!="function")return H(Y,an,J,D,pn(on));var P=on(rn,D,Y,an,J+"."+D,g);if(P)return P}return null}return M(F)}function jn(R){function F(Z,X,Y,an,J){var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+an+" `"+J+"` of type `"+en+"` "+("supplied to `"+Y+"`, expected `object`."));var D=y({},Z[X],R);for(var on in D){var P=R[on];if(m(R,on)&&typeof P!="function")return H(Y,an,J,on,pn(P));if(!P)return new N("Invalid "+an+" `"+J+"` key `"+on+"` supplied to `"+Y+"`.\nBad object: "+JSON.stringify(Z[X],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(R),null,"  "));var q=P(rn,on,Y,an,J+"."+on,g);if(q)return q}return null}return M(F)}function kn(R){switch(typeof R){case"number":case"string":case"undefined":return!0;case"boolean":return!R;case"object":if(Array.isArray(R))return R.every(kn);if(R===null||p(R))return!0;var F=S(R);if(F){var Z=F.call(R),X;if(F!==R.entries){for(;!(X=Z.next()).done;)if(!kn(X.value))return!1}else for(;!(X=Z.next()).done;){var Y=X.value;if(Y&&!kn(Y[1]))return!1}}else return!1;return!0;default:return!1}}function cn(R,F){return R==="symbol"?!0:F?F["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&F instanceof Symbol:!1}function ln(R){var F=typeof R;return Array.isArray(R)?"array":R instanceof RegExp?"object":cn(F,R)?"symbol":F}function pn(R){if(typeof R>"u"||R===null)return""+R;var F=ln(R);if(F==="object"){if(R instanceof Date)return"date";if(R instanceof RegExp)return"regexp"}return F}function En(R){var F=pn(R);switch(F){case"array":case"object":return"an "+F;case"boolean":case"date":case"regexp":return"a "+F;default:return F}}function fr(R){return!R.constructor||!R.constructor.name?j:R.constructor.name}return k.checkPropTypes=x,k.resetWarningCache=x.resetWarningCache,k.PropTypes=k,k}},"./node_modules/prop-types/index.js":(l,c,d)=>{{var v=d("./node_modules/react-is/index.js"),y=!0;l.exports=d("./node_modules/prop-types/factoryWithTypeCheckers.js")(v.isElement,y)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var c="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=c},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,c)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var d=typeof Symbol=="function"&&Symbol.for,v=d?Symbol.for("react.element"):60103,y=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,m=d?Symbol.for("react.strict_mode"):60108,x=d?Symbol.for("react.profiler"):60114,w=d?Symbol.for("react.provider"):60109,E=d?Symbol.for("react.context"):60110,p=d?Symbol.for("react.async_mode"):60111,f=d?Symbol.for("react.concurrent_mode"):60111,h=d?Symbol.for("react.forward_ref"):60112,_=d?Symbol.for("react.suspense"):60113,S=d?Symbol.for("react.suspense_list"):60120,j=d?Symbol.for("react.memo"):60115,k=d?Symbol.for("react.lazy"):60116,C=d?Symbol.for("react.block"):60121,N=d?Symbol.for("react.fundamental"):60117,M=d?Symbol.for("react.responder"):60118,K=d?Symbol.for("react.scope"):60119;function G(P){return typeof P=="string"||typeof P=="function"||P===g||P===f||P===x||P===m||P===_||P===S||typeof P=="object"&&P!==null&&(P.$$typeof===k||P.$$typeof===j||P.$$typeof===w||P.$$typeof===E||P.$$typeof===h||P.$$typeof===N||P.$$typeof===M||P.$$typeof===K||P.$$typeof===C)}function V(P){if(typeof P=="object"&&P!==null){var q=P.$$typeof;switch(q){case v:var Dn=P.type;switch(Dn){case p:case f:case g:case x:case m:case _:return Dn;default:var br=Dn&&Dn.$$typeof;switch(br){case E:case h:case k:case j:case w:return br;default:return q}}case y:return q}}}var hn=p,xn=f,Tn=E,O=w,T=v,L=h,I=g,H=k,Q=j,jn=y,kn=x,cn=m,ln=_,pn=!1;function En(P){return pn||(pn=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),fr(P)||V(P)===p}function fr(P){return V(P)===f}function R(P){return V(P)===E}function F(P){return V(P)===w}function Z(P){return typeof P=="object"&&P!==null&&P.$$typeof===v}function X(P){return V(P)===h}function Y(P){return V(P)===g}function an(P){return V(P)===k}function J(P){return V(P)===j}function rn(P){return V(P)===y}function en(P){return V(P)===x}function D(P){return V(P)===m}function on(P){return V(P)===_}c.AsyncMode=hn,c.ConcurrentMode=xn,c.ContextConsumer=Tn,c.ContextProvider=O,c.Element=T,c.ForwardRef=L,c.Fragment=I,c.Lazy=H,c.Memo=Q,c.Portal=jn,c.Profiler=kn,c.StrictMode=cn,c.Suspense=ln,c.isAsyncMode=En,c.isConcurrentMode=fr,c.isContextConsumer=R,c.isContextProvider=F,c.isElement=Z,c.isForwardRef=X,c.isFragment=Y,c.isLazy=an,c.isMemo=J,c.isPortal=rn,c.isProfiler=en,c.isStrictMode=D,c.isSuspense=on,c.isValidElementType=G,c.typeOf=V})()},"./node_modules/react-is/index.js":(l,c,d)=>{l.exports=d("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,c,d)=>{d.r(c),d.d(c,{shallowEqualArrays:()=>y,shallowEqualObjects:()=>v});function v(g,m){if(g===m)return!0;if(!g||!m)return!1;var x=Object.keys(g),w=Object.keys(m),E=x.length;if(w.length!==E)return!1;for(var p=0;p<E;p++){var f=x[p];if(g[f]!==m[f]||!Object.prototype.hasOwnProperty.call(m,f))return!1}return!0}function y(g,m){if(g===m)return!0;if(!g||!m)return!1;var x=g.length;if(m.length!==x)return!1;for(var w=0;w<x;w++)if(g[w]!==m[w])return!1;return!0}},"./src/Component.ts":function(l,c,d){var v=this&&this.__rest||function(x,w){var E={};for(var p in x)Object.prototype.hasOwnProperty.call(x,p)&&w.indexOf(p)<0&&(E[p]=x[p]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,p=Object.getOwnPropertySymbols(x);f<p.length;f++)w.indexOf(p[f])<0&&Object.prototype.propertyIsEnumerable.call(x,p[f])&&(E[p[f]]=x[p[f]]);return E},y=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(c,"__esModule",{value:!0});var g=y(d("./src/useMediaQuery.ts")),m=function(x){var w=x.children,E=x.device,p=x.onChange,f=v(x,["children","device","onChange"]),h=(0,g.default)(f,E,p);return typeof w=="function"?w(h):h?w:null};c.default=m},"./src/Context.ts":(l,c,d)=>{Object.defineProperty(c,"__esModule",{value:!0});var v=d("react"),y=(0,v.createContext)(void 0);c.default=y},"./src/index.ts":function(l,c,d){var v=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(c,"__esModule",{value:!0}),c.Context=c.toQuery=c.useMediaQuery=c.default=void 0;var y=v(d("./src/useMediaQuery.ts"));c.useMediaQuery=y.default;var g=v(d("./src/Component.ts"));c.default=g.default;var m=v(d("./src/toQuery.ts"));c.toQuery=m.default;var x=v(d("./src/Context.ts"));c.Context=x.default},"./src/mediaQuery.ts":function(l,c,d){var v=this&&this.__assign||function(){return v=Object.assign||function(_){for(var S,j=1,k=arguments.length;j<k;j++){S=arguments[j];for(var C in S)Object.prototype.hasOwnProperty.call(S,C)&&(_[C]=S[C])}return _},v.apply(this,arguments)},y=this&&this.__rest||function(_,S){var j={};for(var k in _)Object.prototype.hasOwnProperty.call(_,k)&&S.indexOf(k)<0&&(j[k]=_[k]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,k=Object.getOwnPropertySymbols(_);C<k.length;C++)S.indexOf(k[C])<0&&Object.prototype.propertyIsEnumerable.call(_,k[C])&&(j[k[C]]=_[k[C]]);return j},g=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(c,"__esModule",{value:!0});var m=g(d("./node_modules/prop-types/index.js")),x=m.default.oneOfType([m.default.string,m.default.number]),w={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},E={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:x,type:Object.keys(w)};E.type;var p=y(E,["type"]),f=v({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:x,maxResolution:x},p),h=v(v({},w),f);c.default={all:h,types:w,matchers:E,features:f}},"./src/toQuery.ts":function(l,c,d){var v=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(c,"__esModule",{value:!0});var y=v(d("./node_modules/hyphenate-style-name/index.js")),g=v(d("./src/mediaQuery.ts")),m=function(p){return"not ".concat(p)},x=function(p,f){var h=(0,y.default)(p);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?h:f===!1?m(h):"(".concat(h,": ").concat(f,")")},w=function(p){return p.join(" and ")},E=function(p){var f=[];return Object.keys(g.default.all).forEach(function(h){var _=p[h];_!=null&&f.push(x(h,_))}),w(f)};c.default=E},"./src/useMediaQuery.ts":function(l,c,d){var v=this&&this.__importDefault||function(N){return N&&N.__esModule?N:{default:N}};Object.defineProperty(c,"__esModule",{value:!0});var y=d("react"),g=v(d("./node_modules/matchmediaquery/index.js")),m=v(d("./node_modules/hyphenate-style-name/index.js")),x=d("./node_modules/shallow-equal/dist/index.esm.js"),w=v(d("./src/toQuery.ts")),E=v(d("./src/Context.ts")),p=function(N){return N.query||(0,w.default)(N)},f=function(N){if(N){var M=Object.keys(N);return M.reduce(function(K,G){return K[(0,m.default)(G)]=N[G],K},{})}},h=function(){var N=(0,y.useRef)(!1);return(0,y.useEffect)(function(){N.current=!0},[]),N.current},_=function(N){var M=(0,y.useContext)(E.default),K=function(){return f(N)||f(M)},G=(0,y.useState)(K),V=G[0],hn=G[1];return(0,y.useEffect)(function(){var xn=K();(0,x.shallowEqualObjects)(V,xn)||hn(xn)},[N,M]),V},S=function(N){var M=function(){return p(N)},K=(0,y.useState)(M),G=K[0],V=K[1];return(0,y.useEffect)(function(){var hn=M();G!==hn&&V(hn)},[N]),G},j=function(N,M){var K=function(){return(0,g.default)(N,M||{},!!M)},G=(0,y.useState)(K),V=G[0],hn=G[1],xn=h();return(0,y.useEffect)(function(){if(xn){var Tn=K();return hn(Tn),function(){Tn&&Tn.dispose()}}},[N,M]),V},k=function(N){var M=(0,y.useState)(N.matches),K=M[0],G=M[1];return(0,y.useEffect)(function(){var V=function(hn){G(hn.matches)};return N.addListener(V),G(N.matches),function(){N.removeListener(V)}},[N]),K},C=function(N,M,K){var G=_(M),V=S(N);if(!V)throw new Error("Invalid or missing MediaQuery!");var hn=j(V,G),xn=k(hn),Tn=h();return(0,y.useEffect)(function(){Tn&&K&&K(xn)},[xn]),(0,y.useEffect)(function(){return function(){hn&&hn.dispose()}},[]),xn};c.default=C},react:l=>{l.exports=e}},a={};function o(l){var c=a[l];if(c!==void 0)return c.exports;var d=a[l]={exports:{}};return t[l].call(d.exports,d,d.exports,o),d.exports}o.d=(l,c)=>{for(var d in c)o.o(c,d)&&!o.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:c[d]})},o.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c),o.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=o("./src/index.ts");return s})())})(Cd);var Ld=Cd.exports;function Hh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}function Rd({selector:n,duration:r=1500,offset:e=0}){const t=$.useRef(null),a=$.useRef(0),o=$.useRef(!1),s=()=>{a.current&&cancelAnimationFrame(a.current)},l=()=>o.current=!0,c=$.useCallback(d=>{if(!t.current)return;s();const v=d!==void 0?d:e;o.current=!1;const g=t.current.offsetTop,m=window.scrollY,x=g-m-v,w=performance.now();if(!x)return;const E=p=>{const f=p-w,h=f/r,_=Hh(h>1?1:h),S=m+x*_;window.scrollTo({top:S}),f<r&&!o.current?requestAnimationFrame(E):a.current=0};requestAnimationFrame(E)},[n,r,e]);return $.useEffect(()=>(t.current=document.querySelector(n),window.addEventListener("wheel",l,{passive:!0}),window.addEventListener("touchmove",l,{passive:!0}),()=>{s(),window.removeEventListener("wheel",l),window.removeEventListener("touchmove",l)}),[n]),c}function Qn(...n){let r="";for(const e of n)if(e){if(typeof e=="string"||typeof e=="number")r+=(r&&" ")+e;else if(Array.isArray(e)){const t=Qn(...e);t&&(r+=(r&&" ")+t)}else if(typeof e=="object")for(const t in e)e[t]&&(r+=(r&&" ")+t)}return r}const $h="_brand_18f9t_1",Wh="_bounce_18f9t_19",Vh="_glowDisappear_18f9t_23",Kh="_heartBeat_18f9t_27",Gh="_rubberBand_18f9t_31",Jh="_rotate_18f9t_35",ae={brand:$h,bounce:Wh,glowDisappear:Vh,"glow-disappear":"_glow-disappear_18f9t_1",heartBeat:Kh,"heart-beat":"_heart-beat_18f9t_1",rubberBand:Gh,"rubber-band":"_rubber-band_18f9t_1",rotate:Jh};function Yh(){const[n,r]=$.useState(ae.rotate),[e,t]=$.useState(!1),a=[ae.bounce,ae.glowDisappear,ae.heartBeat,ae.rubberBand,ae.rotate],o=Qn(ae.brand,e&&n),s=()=>t(!1),l=()=>{const c=Math.floor(Math.random()*a.length),d=a[c];t(!0),r(d)};return i.jsx("div",{className:o,onClick:l,onAnimationEnd:s,children:"JWL"})}const Qh="_container_uucyv_1",qh="_input_uucyv_6",Xh="_label_uucyv_16",Zh="_indicator_uucyv_20",ng="_decoration_uucyv_28",rg="_cloud_uucyv_1",eg="_twinkle_uucyv_1",ct={container:Qh,input:qh,label:Xh,indicator:Zh,decoration:ng,cloud:rg,twinkle:eg};function nu(){const n=document.documentElement,[r,e]=$.useState(!1),t=()=>{const o=new Event("themeChange");n.dispatchEvent(o)},a=()=>{e(!r),n.setAttribute("data-theme",r?"dark":"light"),t()};return $.useEffect(()=>{const o=n.getAttribute("data-theme");e(o==="light"),t()},[]),i.jsxs("div",{className:ct.container,children:[i.jsx("input",{className:ct.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:r,onChange:a}),i.jsxs("label",{className:ct.label,htmlFor:"theme-switch",children:[i.jsx("span",{className:ct.indicator}),i.jsx("span",{className:ct.decoration})]})]})}function tg(){const n=document.documentElement,[r,e]=$.useState("light"),t=()=>{const a=n.getAttribute("data-theme")??"light";e(a)};return $.useEffect(()=>(n.addEventListener("themeChange",t),()=>n.removeEventListener("themeChange",t)),[n]),r}function ig(){const r=tg()==="dark"?"#FFFFFF":"#181616";return i.jsx("svg",{viewBox:"0 0 128 128",children:i.jsxs("g",{fill:r,children:[i.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),i.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}function ag({forwardedRef:n}){const r=$.useRef(null),e=Rd({selector:"main"}),{isSidebarOpen:t,toggleSidebar:a}=Fs(),o=Ld.useMediaQuery({maxWidth:768}),s=Qn(hr.hamburgerIcon,!t&&hr.collapsed);$.useLayoutEffect(()=>{if(!r.current)return;const m=new ResizeObserver(x=>{for(const w of x){const E=w.borderBoxSize[0].blockSize;document.documentElement.style.setProperty("--topbar-height",`${E}px`)}});return m.observe(r.current),()=>m.disconnect()},[]);const l=m=>{m.preventDefault(),window.history.replaceState({},"",window.location.pathname),e()},c=()=>a(),d=()=>!o&&i.jsx(Yh,{}),v=()=>!o&&i.jsx("a",{href:"main",onClick:l,role:"button",children:i.jsx("h1",{className:hr.title,children:"LeetCode Cheatsheet"})}),y=()=>i.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:hr.iconLink,target:"_blank",children:i.jsx(ig,{})}),g=()=>o?i.jsxs(i.Fragment,{children:[i.jsx(nu,{}),y()]}):i.jsxs("div",{className:hr.buttonContainer,children:[y(),i.jsx(nu,{})]});return i.jsx("header",{ref:r,className:hr.topbar,children:i.jsxs("div",{className:hr.container,children:[i.jsxs("div",{ref:n,className:hr.hamburger,onClick:c,children:[i.jsx("span",{className:Qn(s,hr.hamburgerTop)}),i.jsx("span",{className:Qn(s,hr.hamburgerMiddle)}),i.jsx("span",{className:Qn(s,hr.hamburgerBottom)})]}),d(),v(),g()]})})}const og="_sidebar_8uy5s_1",sg="_exit_8uy5s_20",lg="_hide_8uy5s_23",ug="_scrollContainer_8uy5s_27",fi={sidebar:og,"sidebar-enter":"_sidebar-enter_8uy5s_1",exit:sg,"sidebar-exit":"_sidebar-exit_8uy5s_1",hide:lg,scrollContainer:ug};function ya(n,r){const e=t=>{const a=o=>o.current&&!o.current.contains(t.target);(Array.isArray(n)?n.every(a):a(n))&&r()};$.useEffect(()=>(document.addEventListener("click",e),()=>document.removeEventListener("click",e)),[n,r])}const cg="_accordion_1hmri_1",dg="_button_1hmri_6",fg="_open_1hmri_25",pg="_content_1hmri_29",pi={accordion:cg,button:dg,open:fg,content:pg};function hg(n){const r=parseFloat(n);return!isNaN(r)&&isFinite(r)}function ru(n){return typeof n=="string"&&n[n.length-1]==="%"&&hg(n.substring(0,n.length-1))}function Ja(n,r,e){r===0&&!e&&(n!=null&&n.style)&&(n==null?void 0:n.children.length)>0&&(n.style.display="none")}function gg(n,r){r===0&&(n!=null&&n.style)&&(n.style.display="")}const mg={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function eu(n,r){return[n.static,r===0&&n.staticHeightZero,typeof r=="number"&&r>0?n.staticHeightSpecific:null,r==="auto"&&n.staticHeightAuto].filter(e=>e).join(" ")}const vg=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],yg=_i.forwardRef((n,r)=>{const{animateOpacity:e=!1,animationStateClasses:t={},applyInlineTransitions:a=!0,children:o,className:s="",contentClassName:l,delay:c=0,disableDisplayNone:d=!1,duration:v=500,easing:y="ease",height:g,onHeightAnimationEnd:m,onHeightAnimationStart:x,style:w,contentRef:E}=n,p=Object.assign({},n);vg.forEach(cn=>{delete p[cn]});const f=$.useRef(g),h=$.useRef(null),_=$.useRef(),S=$.useRef(),j=$.useRef(Object.assign(Object.assign({},mg),t)),k=typeof window<"u",C=$.useRef(k&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),N=C.current?0:c,M=C.current?0:v;let K=g,G="visible";typeof g=="number"?(K=g<0?0:g,G="hidden"):ru(K)&&(K=g==="0%"?0:g,G="hidden");const[V,hn]=$.useState(K),[xn,Tn]=$.useState(G),[O,T]=$.useState(!1),[L,I]=$.useState(eu(j.current,g));$.useEffect(()=>{Ja(h.current,V,d)},[]),$.useEffect(()=>{if(g!==f.current&&h.current){gg(h.current,f.current),h.current.style.overflow="hidden";const cn=h.current.offsetHeight;h.current.style.overflow="";const ln=M+N;let pn,En,fr="hidden",R;const F=f.current==="auto";typeof g=="number"?(pn=g<0?0:g,En=pn):ru(g)?(pn=g==="0%"?0:g,En=pn):(pn=cn,En="auto",fr=void 0),F&&(En=pn,pn=cn);const Z=[j.current.animating,(f.current==="auto"||g<f.current)&&j.current.animatingUp,(g==="auto"||g>f.current)&&j.current.animatingDown,En===0&&j.current.animatingToHeightZero,En==="auto"&&j.current.animatingToHeightAuto,typeof En=="number"&&En>0?j.current.animatingToHeightSpecific:null].filter(Y=>Y).join(" "),X=eu(j.current,En);hn(pn),Tn("hidden"),T(!F),I(Z),clearTimeout(S.current),clearTimeout(_.current),F?(R=!0,S.current=setTimeout(()=>{hn(En),Tn(fr),T(R),x==null||x(En)},50),_.current=setTimeout(()=>{T(!1),I(X),Ja(h.current,En,d),m==null||m(En)},ln)):(x==null||x(pn),S.current=setTimeout(()=>{hn(En),Tn(fr),T(!1),I(X),g!=="auto"&&Ja(h.current,pn,d),m==null||m(pn)},ln))}return f.current=g,()=>{clearTimeout(S.current),clearTimeout(_.current)}},[g]);const H=Object.assign(Object.assign({},w),{height:V,overflow:xn||(w==null?void 0:w.overflow)});O&&a&&(H.transition=`height ${M}ms ${y} ${N}ms`,w!=null&&w.transition&&(H.transition=`${w.transition}, ${H.transition}`),H.WebkitTransition=H.transition);const Q={};e&&(Q.transition=`opacity ${M}ms ${y} ${N}ms`,Q.WebkitTransition=Q.transition,V===0&&(Q.opacity=0));const kn=typeof p["aria-hidden"]<"u"?p["aria-hidden"]:g===0;return _i.createElement("div",Object.assign({},p,{"aria-hidden":kn,className:`${L} ${s}`,style:H,ref:r}),_i.createElement("div",{className:l,style:Q,ref:cn=>{h.current=cn,E&&(E.current=cn)}},o))});function xg(){return i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})}function $n({title:n,children:r}){const[e,t]=$.useState(!1),a=e?"auto":0,o=Qn(pi.button,e&&pi.open),s=()=>t(!e);return i.jsxs("div",{className:pi.accordion,children:[i.jsxs("button",{className:o,onClick:s,children:[i.jsx("span",{children:n}),i.jsx(xg,{})]}),i.jsx(yg,{animateOpacity:!0,height:a,duration:400,children:i.jsx("div",{className:pi.content,children:r})})]})}const _g="_linkWrapper_1logo_1",bg="_link_1logo_1",tu={linkWrapper:_g,link:bg},wg="_tooltip_1edpy_1",Tg="_exit_1edpy_13",Sg="_text_1edpy_27",Ya={tooltip:wg,"tooltip-enter":"_tooltip-enter_1edpy_1",exit:Tg,"tooltip-exit":"_tooltip-exit_1edpy_1",text:Sg};function jg({anchorRef:n,content:r,showTooltip:e}){const t=$.useRef(null),[a,o]=$.useState(null),[s,l]=$.useState(!1),c=Qn(Ya.tooltip,!e&&Ya.exit),d=()=>l(!1),v=()=>{e||l(!0)};return $.useEffect(()=>{var w;if(!e||!n.current)return;const y=n.current.getBoundingClientRect(),g=((w=t.current)==null?void 0:w.offsetHeight)??0,m=y.left+window.scrollX,x=y.top+window.scrollY-g-4;o({top:x,left:m})},[e]),(e||!s)&&n.current&&Sh.createPortal(i.jsx("div",{ref:t,className:c,style:a??{},onAnimationStart:d,onAnimationEnd:v,children:i.jsx("span",{className:Ya.text,children:r})}),document.body)}function B({href:n,description:r}){const e=$.useRef(null),[t,a]=$.useState(!1),o=Rd({selector:n});let s;const l=()=>{const y=document.documentElement,g=getComputedStyle(y).getPropertyValue("--topbar-height");return parseFloat(g)||76},c=y=>{y.preventDefault(),window.history.replaceState({},"",n),clearTimeout(s),a(!1),o(l()+8)},d=()=>{s=setTimeout(()=>{a(!0)},700)},v=()=>{clearTimeout(s),a(!1)};return i.jsxs("div",{className:tu.linkWrapper,children:[i.jsx("a",{ref:e,href:n,className:tu.link,onClick:c,role:"button","aria-description":r,onMouseEnter:d,onMouseLeave:v,children:r}),i.jsx(jg,{anchorRef:e,content:r,showTooltip:t})]})}function kg(){return i.jsxs(i.Fragment,{children:[i.jsxs($n,{title:"Big O",children:[i.jsx(B,{href:"#bigo-chart",description:"Time/Space Complexities"}),i.jsx(B,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),i.jsx(B,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),i.jsxs($n,{title:"Array",children:[i.jsx(B,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),i.jsx(B,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),i.jsx(B,{href:"#array-sliding-window",description:"sliding window"}),i.jsx(B,{href:"#array-prefix-sum",description:"prefix sum"}),i.jsx(B,{href:"#array-string-building",description:"efficient string building"})]}),i.jsxs($n,{title:"Hash Map",children:[i.jsx(B,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),i.jsx(B,{href:"#hashmap-sliding-window",description:"sliding window"})]}),i.jsxs($n,{title:"Linked List",children:[i.jsx(B,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),i.jsx(B,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),i.jsxs($n,{title:"Stack",children:[i.jsx(B,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),i.jsx(B,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),i.jsxs($n,{title:"Binary Tree",children:[i.jsx(B,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),i.jsx(B,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),i.jsx(B,{href:"#tree-bfs",description:"BFS"})]}),i.jsxs($n,{title:"Graph",children:[i.jsx(B,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),i.jsx(B,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),i.jsx(B,{href:"#graph-bfs",description:"BFS"}),i.jsx(B,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),i.jsx(B,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),i.jsx(B,{href:"#graph-kahn",description:"Kahn (topological sort)"}),i.jsx(B,{href:"#graph-kruskal",description:"Kruskal (mst)"}),i.jsx(B,{href:"#graph-prim",description:"Prim (mst)"})]}),i.jsx($n,{title:"Heap",children:i.jsx(B,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),i.jsxs($n,{title:"Binary Search",children:[i.jsx(B,{href:"#binarysearch-binary-search",description:"binary search"}),i.jsx(B,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),i.jsx(B,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),i.jsx(B,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),i.jsx(B,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),i.jsx($n,{title:"Backtracking",children:i.jsx(B,{href:"#backtracking-backtracking",description:"backtracking"})}),i.jsxs($n,{title:"Dynamic Programming",children:[i.jsx(B,{href:"#dp-top-down",description:"top-down DP"}),i.jsx(B,{href:"#dp-bottom-up",description:"bottom-up DP"}),i.jsx(B,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),i.jsxs($n,{title:"Bit Manipulation",children:[i.jsx(B,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),i.jsx(B,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),i.jsx(B,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),i.jsx(B,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),i.jsx(B,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),i.jsx(B,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),i.jsx(B,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),i.jsx(B,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),i.jsx(B,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),i.jsxs($n,{title:"Matrix",children:[i.jsx(B,{href:"#matrix-create-copy",description:"create / copy"}),i.jsx(B,{href:"#matrix-diagonals",description:"main / anti diagonals"}),i.jsx(B,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),i.jsxs($n,{title:"Data Structures",children:[i.jsx(B,{href:"#ds-array",description:"array"}),i.jsx(B,{href:"#ds-hash-map",description:"hashmap"}),i.jsx(B,{href:"#ds-linked-list",description:"linked list"}),i.jsx(B,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),i.jsx(B,{href:"#ds-binary-tree",description:"binary tree"}),i.jsx(B,{href:"#ds-binary-search-tree",description:"binary search tree"}),i.jsx(B,{href:"#ds-graph",description:"graph"}),i.jsx(B,{href:"#ds-union-find",description:"union find"}),i.jsx(B,{href:"#ds-union-find-optimized",description:"union find optimized"}),i.jsx(B,{href:"#ds-trie",description:"trie"})]}),i.jsxs($n,{title:"Sorting Algorithms",children:[i.jsx(B,{href:"#sort-bubble",description:"bubble sort"}),i.jsx(B,{href:"#sort-selection",description:"selection sort"}),i.jsx(B,{href:"#sort-insertion",description:"insertion sort"}),i.jsx(B,{href:"#sort-shell",description:"shell sort"}),i.jsx(B,{href:"#sort-merge",description:"mergesort"}),i.jsx(B,{href:"#sort-quick",description:"quicksort"}),i.jsx(B,{href:"#sort-tim",description:"timsort"}),i.jsx(B,{href:"#sort-heap",description:"heapsort"}),i.jsx(B,{href:"#sort-counting",description:"counting sort"}),i.jsx(B,{href:"#sort-bucket",description:"bucket sort"}),i.jsx(B,{href:"#sort-radix",description:"radix sort"}),i.jsx(B,{href:"#sort-cube",description:"cubesort"}),i.jsx(B,{href:"#sort-bogo",description:"bogo sort"}),i.jsx(B,{href:"#sort-pancake",description:"pancake sort"}),i.jsx(B,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Eg({hamburgerButtonRef:n}){const r=$.useRef(null),{isSidebarOpen:e,showSidebar:t,hideSidebar:a}=Fs(),[o,s]=$.useState(!1),l=Qn(fi.sidebar,!e&&fi.exit,!e&&o&&fi.hide),c=m=>{m&&e?a():!m&&!e&&t()},d=Ld.useMediaQuery({maxWidth:768},void 0,c),v=()=>{d&&e&&a()},y=()=>s(!1),g=()=>{e||s(!0)};return ya([r,n],v),i.jsx("nav",{ref:r,className:l,onAnimationStart:y,onAnimationEndCapture:g,children:i.jsx("div",{className:fi.scrollContainer,children:i.jsx(kg,{})})})}function Ng(){const n=$.useRef(null);return i.jsxs("div",{id:"AppBar",children:[i.jsx(ag,{forwardedRef:n}),i.jsx(Eg,{hamburgerButtonRef:n})]})}const Og="_main_1p6ym_1",Ag="_sidebarHidden_1p6ym_11",iu={main:Og,sidebarHidden:Ag},Cg="_container_1htmy_1",Lg="_sectionHeader_1htmy_7",un={container:Cg,sectionHeader:Lg},Rg="_container_5c21h_1",Pg="_label_5c21h_13",Mg="_tableWrapper_5c21h_21",Ig="_red_5c21h_30",Dg="_oliveGreen_5c21h_34",zg="_green_5c21h_38",Bg="_orange_5c21h_42",Fg="_yellow_5c21h_46",Ug="_gray_5c21h_50",b={container:Rg,label:Pg,tableWrapper:Mg,red:Ig,oliveGreen:Dg,green:zg,orange:Bg,yellow:Fg,gray:Ug};function Hg(){const n={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return i.jsx("section",{id:"bigo-chart",children:i.jsxs("div",{className:b.container,children:[i.jsx("h3",{children:"Big-O Complexity Chart"}),i.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[i.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:n.red}),i.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:n.orange}),i.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:n.yellow}),i.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:n.oliveGreen}),i.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:n.green}),i.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),i.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),i.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),i.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),i.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),i.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),i.jsx("text",{className:b.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),i.jsx("text",{className:b.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function $g(){const n=$.useRef(null),[r,e]=$.useState(""),t=()=>{if(r){const o=n.current,s=o==null?void 0:o.querySelector(`tr[data-row-number="${r}"]`);s==null||s.removeAttribute("focused")}},a=o=>{const s=o.currentTarget,l=s.getAttribute("data-row-number")??"";t(),l===r?e(""):(s.setAttribute("focused",""),e(l))};return ya(n,t),i.jsx("section",{id:"bigo-data-structure-operations-table",children:i.jsxs("div",{className:b.container,children:[i.jsx("h3",{children:"Data Structure Operations"}),i.jsx("div",{className:b.tableWrapper,children:i.jsx("table",{ref:n,children:i.jsxs("tbody",{children:[i.jsxs("tr",{onClick:a,"data-row-number":"1",children:[i.jsx("th",{children:"Data Structure"}),i.jsx("th",{colSpan:8,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"2",children:[i.jsx("th",{}),i.jsx("th",{colSpan:4,children:"Average"}),i.jsx("th",{colSpan:4,children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"3",children:[i.jsx("th",{}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{})]}),i.jsxs("tr",{onClick:a,"data-row-number":"4",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"5",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"6",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"7",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"8",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.yellow,children:"Θ(n)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.green,children:"O(1)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"9",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.orange,children:"O(n log(n))"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"10",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.green,children:"Θ(1)"}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"11",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"12",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"13",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"14",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"15",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.gray,children:"N/A"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"16",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"17",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]})]})})})]})})}function Wg(){const n=$.useRef(null),[r,e]=$.useState(""),t=()=>{if(r){const o=n.current,s=o==null?void 0:o.querySelector(`tr[data-row-number="${r}"]`);s==null||s.removeAttribute("focused")}},a=o=>{const s=o.currentTarget,l=s.getAttribute("data-row-number")??"";t(),l===r?e(""):(s.setAttribute("focused",""),e(l))};return ya(n,t),i.jsx("section",{id:"bigo-sorting-algorithms-table",children:i.jsxs("div",{className:b.container,children:[i.jsx("h3",{children:"Array Sorting Algorithms"}),i.jsx("div",{className:b.tableWrapper,children:i.jsx("table",{ref:n,children:i.jsxs("tbody",{children:[i.jsxs("tr",{onClick:a,"data-row-number":"1",children:[i.jsx("th",{children:"Algorithm"}),i.jsx("th",{colSpan:3,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"2",children:[i.jsx("th",{}),i.jsx("th",{children:"Best"}),i.jsx("th",{children:"Average"}),i.jsx("th",{children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"3",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),i.jsx("td",{className:b.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.oliveGreen,children:"O(log(n))"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"4",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),i.jsx("td",{className:b.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.orange,children:"O(n log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"5",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),i.jsx("td",{className:b.yellow,children:"Ω(n)"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.orange,children:"O(n log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"6",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),i.jsx("td",{className:b.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.orange,children:"O(n log(n))"}),i.jsx("td",{className:b.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"7",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),i.jsx("td",{className:b.yellow,children:"Ω(n)"}),i.jsx("td",{className:b.red,children:"Θ(n^2)"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"8",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),i.jsx("td",{className:b.yellow,children:"Ω(n)"}),i.jsx("td",{className:b.red,children:"Θ(n^2)"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"9",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),i.jsx("td",{className:b.red,children:"Ω(n^2)"}),i.jsx("td",{className:b.red,children:"Θ(n^2)"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"10",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),i.jsx("td",{className:b.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"11",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),i.jsx("td",{className:b.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:b.red,children:"Θ(n(log(n))^2)"}),i.jsx("td",{className:b.red,children:"O(n(log(n))^2)"}),i.jsx("td",{className:b.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"12",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),i.jsx("td",{className:b.green,children:"Ω(n+k)"}),i.jsx("td",{className:b.green,children:"Θ(n+k)"}),i.jsx("td",{className:b.red,children:"O(n^2)"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"13",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),i.jsx("td",{className:b.green,children:"Ω(nk)"}),i.jsx("td",{className:b.green,children:"Θ(nk)"}),i.jsx("td",{className:b.green,children:"O(nk)"}),i.jsx("td",{className:b.yellow,children:"O(n+k)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"14",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),i.jsx("td",{className:b.green,children:"Ω(n+k)"}),i.jsx("td",{className:b.green,children:"Θ(n+k)"}),i.jsx("td",{className:b.green,children:"O(n+k)"}),i.jsx("td",{className:b.yellow,children:"O(k)"})]}),i.jsxs("tr",{onClick:a,"data-row-number":"15",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),i.jsx("td",{className:b.yellow,children:"Ω(n)"}),i.jsx("td",{className:b.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:b.orange,children:"O(n log(n))"}),i.jsx("td",{className:b.yellow,children:"O(n)"})]})]})})})]})})}function Vg(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Big O"}),i.jsx(Hg,{}),i.jsx($g,{}),i.jsx(Wg,{})]})}const Kg="_container_12crg_1",Gg="_buttonContainer_12crg_12",Jg="_tabButtonContainer_12crg_18",Yg="_tabButton_12crg_18",hi={container:Kg,buttonContainer:Gg,tabButtonContainer:Jg,tabButton:Yg},Qg="_code_1qx6e_1",qg="_line_1qx6e_13",au={code:Qg,line:qg};function Xg(n){const r=n.regex,e=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),t="decltype\\(auto\\)",a="[a-zA-Z_]\\w*::",s="(?!struct)("+t+"|"+r.optional(a)+"[a-zA-Z_]\\w*"+r.optional("<[^<>]+>")+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},d={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},v={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},y={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(d,{className:"string"}),{className:"string",begin:/<.*?>/},e,n.C_BLOCK_COMMENT_MODE]},g={className:"title",begin:r.optional(a)+n.IDENT_RE,relevance:0},m=r.optional(a)+n.IDENT_RE+"\\s*\\(",x=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],w=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],E=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],p=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],_={type:w,keyword:x,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:E},S={className:"function.dispatch",relevance:0,keywords:{_hint:p},begin:r.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,r.lookahead(/(<[^<>]+>|)\s*\(/))},j=[S,y,l,e,n.C_BLOCK_COMMENT_MODE,v,d],k={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:j.concat([{begin:/\(/,end:/\)/,keywords:_,contains:j.concat(["self"]),relevance:0}]),relevance:0},C={className:"function",begin:"("+s+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:t,keywords:_,relevance:0},{begin:m,returnBegin:!0,contains:[g],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[d,v]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[e,n.C_BLOCK_COMMENT_MODE,d,v,l,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",e,n.C_BLOCK_COMMENT_MODE,d,v,l]}]},l,e,n.C_BLOCK_COMMENT_MODE,y]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:_,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(k,C,S,j,[y,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:_,contains:["self",l]},{begin:n.IDENT_RE+"::",keywords:_},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function Pd(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(r=>{const e=n[r],t=typeof e;(t==="object"||t==="function")&&!Object.isFrozen(e)&&Pd(e)}),n}class ou{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Md(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Vr(n,...r){const e=Object.create(null);for(const t in n)e[t]=n[t];return r.forEach(function(t){for(const a in t)e[a]=t[a]}),e}const Zg="</span>",su=n=>!!n.scope,nm=(n,{prefix:r})=>{if(n.startsWith("language:"))return n.replace("language:","language-");if(n.includes(".")){const e=n.split(".");return[`${r}${e.shift()}`,...e.map((t,a)=>`${t}${"_".repeat(a+1)}`)].join(" ")}return`${r}${n}`};class rm{constructor(r,e){this.buffer="",this.classPrefix=e.classPrefix,r.walk(this)}addText(r){this.buffer+=Md(r)}openNode(r){if(!su(r))return;const e=nm(r.scope,{prefix:this.classPrefix});this.span(e)}closeNode(r){su(r)&&(this.buffer+=Zg)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const lu=(n={})=>{const r={children:[]};return Object.assign(r,n),r};class Us{constructor(){this.rootNode=lu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const e=lu({scope:r});this.add(e),this.stack.push(e)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,e){return typeof e=="string"?r.addText(e):e.children&&(r.openNode(e),e.children.forEach(t=>this._walk(r,t)),r.closeNode(e)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(e=>typeof e=="string")?r.children=[r.children.join("")]:r.children.forEach(e=>{Us._collapse(e)}))}}class em extends Us{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,e){const t=r.root;e&&(t.scope=`language:${e}`),this.add(t)}toHTML(){return new rm(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ut(n){return n?typeof n=="string"?n:n.source:null}function Id(n){return we("(?=",n,")")}function tm(n){return we("(?:",n,")*")}function im(n){return we("(?:",n,")?")}function we(...n){return n.map(e=>Ut(e)).join("")}function am(n){const r=n[n.length-1];return typeof r=="object"&&r.constructor===Object?(n.splice(n.length-1,1),r):{}}function Hs(...n){return"("+(am(n).capture?"":"?:")+n.map(t=>Ut(t)).join("|")+")"}function Dd(n){return new RegExp(n.toString()+"|").exec("").length-1}function om(n,r){const e=n&&n.exec(r);return e&&e.index===0}const sm=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function $s(n,{joinWith:r}){let e=0;return n.map(t=>{e+=1;const a=e;let o=Ut(t),s="";for(;o.length>0;){const l=sm.exec(o);if(!l){s+=o;break}s+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?s+="\\"+String(Number(l[1])+a):(s+=l[0],l[0]==="("&&e++)}return s}).map(t=>`(${t})`).join(r)}const lm=/\b\B/,zd="[a-zA-Z]\\w*",Ws="[a-zA-Z_]\\w*",Bd="\\b\\d+(\\.\\d+)?",Fd="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ud="\\b(0b[01]+)",um="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",cm=(n={})=>{const r=/^#![ ]*\//;return n.binary&&(n.begin=we(r,/.*\b/,n.binary,/\b.*/)),Vr({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},n)},Ht={begin:"\\\\[\\s\\S]",relevance:0},dm={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ht]},fm={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ht]},pm={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},xa=function(n,r,e={}){const t=Vr({scope:"comment",begin:n,end:r,contains:[]},e);t.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const a=Hs("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return t.contains.push({begin:we(/[ ]+/,"(",a,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),t},hm=xa("//","$"),gm=xa("/\\*","\\*/"),mm=xa("#","$"),vm={scope:"number",begin:Bd,relevance:0},ym={scope:"number",begin:Fd,relevance:0},xm={scope:"number",begin:Ud,relevance:0},_m={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ht,{begin:/\[/,end:/\]/,relevance:0,contains:[Ht]}]},bm={scope:"title",begin:zd,relevance:0},wm={scope:"title",begin:Ws,relevance:0},Tm={begin:"\\.\\s*"+Ws,relevance:0},Sm=function(n){return Object.assign(n,{"on:begin":(r,e)=>{e.data._beginMatch=r[1]},"on:end":(r,e)=>{e.data._beginMatch!==r[1]&&e.ignoreMatch()}})};var gi=Object.freeze({__proto__:null,APOS_STRING_MODE:dm,BACKSLASH_ESCAPE:Ht,BINARY_NUMBER_MODE:xm,BINARY_NUMBER_RE:Ud,COMMENT:xa,C_BLOCK_COMMENT_MODE:gm,C_LINE_COMMENT_MODE:hm,C_NUMBER_MODE:ym,C_NUMBER_RE:Fd,END_SAME_AS_BEGIN:Sm,HASH_COMMENT_MODE:mm,IDENT_RE:zd,MATCH_NOTHING_RE:lm,METHOD_GUARD:Tm,NUMBER_MODE:vm,NUMBER_RE:Bd,PHRASAL_WORDS_MODE:pm,QUOTE_STRING_MODE:fm,REGEXP_MODE:_m,RE_STARTERS_RE:um,SHEBANG:cm,TITLE_MODE:bm,UNDERSCORE_IDENT_RE:Ws,UNDERSCORE_TITLE_MODE:wm});function jm(n,r){n.input[n.index-1]==="."&&r.ignoreMatch()}function km(n,r){n.className!==void 0&&(n.scope=n.className,delete n.className)}function Em(n,r){r&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=jm,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function Nm(n,r){Array.isArray(n.illegal)&&(n.illegal=Hs(...n.illegal))}function Om(n,r){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function Am(n,r){n.relevance===void 0&&(n.relevance=1)}const Cm=(n,r)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const e=Object.assign({},n);Object.keys(n).forEach(t=>{delete n[t]}),n.keywords=e.keywords,n.begin=we(e.beforeMatch,Id(e.begin)),n.starts={relevance:0,contains:[Object.assign(e,{endsParent:!0})]},n.relevance=0,delete e.beforeMatch},Lm=["of","and","for","in","not","or","if","then","parent","list","value"],Rm="keyword";function Hd(n,r,e=Rm){const t=Object.create(null);return typeof n=="string"?a(e,n.split(" ")):Array.isArray(n)?a(e,n):Object.keys(n).forEach(function(o){Object.assign(t,Hd(n[o],r,o))}),t;function a(o,s){r&&(s=s.map(l=>l.toLowerCase())),s.forEach(function(l){const c=l.split("|");t[c[0]]=[o,Pm(c[0],c[1])]})}}function Pm(n,r){return r?Number(r):Mm(n)?0:1}function Mm(n){return Lm.includes(n.toLowerCase())}const uu={},he=n=>{console.error(n)},cu=(n,...r)=>{console.log(`WARN: ${n}`,...r)},Se=(n,r)=>{uu[`${n}/${r}`]||(console.log(`Deprecated as of ${n}. ${r}`),uu[`${n}/${r}`]=!0)},ra=new Error;function $d(n,r,{key:e}){let t=0;const a=n[e],o={},s={};for(let l=1;l<=r.length;l++)s[l+t]=a[l],o[l+t]=!0,t+=Dd(r[l-1]);n[e]=s,n[e]._emit=o,n[e]._multi=!0}function Im(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw he("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ra;if(typeof n.beginScope!="object"||n.beginScope===null)throw he("beginScope must be object"),ra;$d(n,n.begin,{key:"beginScope"}),n.begin=$s(n.begin,{joinWith:""})}}function Dm(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw he("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ra;if(typeof n.endScope!="object"||n.endScope===null)throw he("endScope must be object"),ra;$d(n,n.end,{key:"endScope"}),n.end=$s(n.end,{joinWith:""})}}function zm(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function Bm(n){zm(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),Im(n),Dm(n)}function Fm(n){function r(s,l){return new RegExp(Ut(s),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(l?"g":""))}class e{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,l]),this.matchAt+=Dd(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(c=>c[1]);this.matcherRe=r($s(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(l);if(!c)return null;const d=c.findIndex((y,g)=>g>0&&y!==void 0),v=this.matchIndexes[d];return c.splice(0,d),Object.assign(c,v)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const c=new e;return this.rules.slice(l).forEach(([d,v])=>c.addRule(d,v)),c.compile(),this.multiRegexes[l]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,c){this.rules.push([l,c]),c.type==="begin"&&this.count++}exec(l){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let d=c.exec(l);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const v=this.getMatcher(0);v.lastIndex=this.lastIndex+1,d=v.exec(l)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function a(s){const l=new t;return s.contains.forEach(c=>l.addRule(c.begin,{rule:c,type:"begin"})),s.terminatorEnd&&l.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&l.addRule(s.illegal,{type:"illegal"}),l}function o(s,l){const c=s;if(s.isCompiled)return c;[km,Om,Bm,Cm].forEach(v=>v(s,l)),n.compilerExtensions.forEach(v=>v(s,l)),s.__beforeBegin=null,[Em,Nm,Am].forEach(v=>v(s,l)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=Hd(s.keywords,n.case_insensitive)),c.keywordPatternRe=r(d,!0),l&&(s.begin||(s.begin=/\B|\b/),c.beginRe=r(c.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(c.endRe=r(c.end)),c.terminatorEnd=Ut(c.end)||"",s.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(s.end?"|":"")+l.terminatorEnd)),s.illegal&&(c.illegalRe=r(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(v){return Um(v==="self"?s:v)})),s.contains.forEach(function(v){o(v,c)}),s.starts&&o(s.starts,l),c.matcher=a(c),c}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Vr(n.classNameAliases||{}),o(n)}function Wd(n){return n?n.endsWithParent||Wd(n.starts):!1}function Um(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(r){return Vr(n,{variants:null},r)})),n.cachedVariants?n.cachedVariants:Wd(n)?Vr(n,{starts:n.starts?Vr(n.starts):null}):Object.isFrozen(n)?Vr(n):n}var Hm="11.9.0";class $m extends Error{constructor(r,e){super(r),this.name="HTMLInjectionError",this.html=e}}const Qa=Md,du=Vr,fu=Symbol("nomatch"),Wm=7,Vd=function(n){const r=Object.create(null),e=Object.create(null),t=[];let a=!0;const o="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:em};function c(O){return l.noHighlightRe.test(O)}function d(O){let T=O.className+" ";T+=O.parentNode?O.parentNode.className:"";const L=l.languageDetectRe.exec(T);if(L){const I=N(L[1]);return I||(cu(o.replace("{}",L[1])),cu("Falling back to no-highlight mode for this block.",O)),I?L[1]:"no-highlight"}return T.split(/\s+/).find(I=>c(I)||N(I))}function v(O,T,L){let I="",H="";typeof T=="object"?(I=O,L=T.ignoreIllegals,H=T.language):(Se("10.7.0","highlight(lang, code, ...args) has been deprecated."),Se("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),H=O,I=T),L===void 0&&(L=!0);const Q={code:I,language:H};xn("before:highlight",Q);const jn=Q.result?Q.result:y(Q.language,Q.code,L);return jn.code=Q.code,xn("after:highlight",jn),jn}function y(O,T,L,I){const H=Object.create(null);function Q(z,W){return z.keywords[W]}function jn(){if(!D.keywords){P.addText(q);return}let z=0;D.keywordPatternRe.lastIndex=0;let W=D.keywordPatternRe.exec(q),nn="";for(;W;){nn+=q.substring(z,W.index);const dn=J.case_insensitive?W[0].toLowerCase():W[0],zn=Q(D,dn);if(zn){const[Er,Qd]=zn;if(P.addText(nn),nn="",H[dn]=(H[dn]||0)+1,H[dn]<=Wm&&(Dn+=Qd),Er.startsWith("_"))nn+=W[0];else{const qd=J.classNameAliases[Er]||Er;ln(W[0],qd)}}else nn+=W[0];z=D.keywordPatternRe.lastIndex,W=D.keywordPatternRe.exec(q)}nn+=q.substring(z),P.addText(nn)}function kn(){if(q==="")return;let z=null;if(typeof D.subLanguage=="string"){if(!r[D.subLanguage]){P.addText(q);return}z=y(D.subLanguage,q,!0,on[D.subLanguage]),on[D.subLanguage]=z._top}else z=m(q,D.subLanguage.length?D.subLanguage:null);D.relevance>0&&(Dn+=z.relevance),P.__addSublanguage(z._emitter,z.language)}function cn(){D.subLanguage!=null?kn():jn(),q=""}function ln(z,W){z!==""&&(P.startScope(W),P.addText(z),P.endScope())}function pn(z,W){let nn=1;const dn=W.length-1;for(;nn<=dn;){if(!z._emit[nn]){nn++;continue}const zn=J.classNameAliases[z[nn]]||z[nn],Er=W[nn];zn?ln(Er,zn):(q=Er,jn(),q=""),nn++}}function En(z,W){return z.scope&&typeof z.scope=="string"&&P.openNode(J.classNameAliases[z.scope]||z.scope),z.beginScope&&(z.beginScope._wrap?(ln(q,J.classNameAliases[z.beginScope._wrap]||z.beginScope._wrap),q=""):z.beginScope._multi&&(pn(z.beginScope,W),q="")),D=Object.create(z,{parent:{value:D}}),D}function fr(z,W,nn){let dn=om(z.endRe,nn);if(dn){if(z["on:end"]){const zn=new ou(z);z["on:end"](W,zn),zn.isMatchIgnored&&(dn=!1)}if(dn){for(;z.endsParent&&z.parent;)z=z.parent;return z}}if(z.endsWithParent)return fr(z.parent,W,nn)}function R(z){return D.matcher.regexIndex===0?(q+=z[0],1):(ba=!0,0)}function F(z){const W=z[0],nn=z.rule,dn=new ou(nn),zn=[nn.__beforeBegin,nn["on:begin"]];for(const Er of zn)if(Er&&(Er(z,dn),dn.isMatchIgnored))return R(W);return nn.skip?q+=W:(nn.excludeBegin&&(q+=W),cn(),!nn.returnBegin&&!nn.excludeBegin&&(q=W)),En(nn,z),nn.returnBegin?0:W.length}function Z(z){const W=z[0],nn=T.substring(z.index),dn=fr(D,z,nn);if(!dn)return fu;const zn=D;D.endScope&&D.endScope._wrap?(cn(),ln(W,D.endScope._wrap)):D.endScope&&D.endScope._multi?(cn(),pn(D.endScope,z)):zn.skip?q+=W:(zn.returnEnd||zn.excludeEnd||(q+=W),cn(),zn.excludeEnd&&(q=W));do D.scope&&P.closeNode(),!D.skip&&!D.subLanguage&&(Dn+=D.relevance),D=D.parent;while(D!==dn.parent);return dn.starts&&En(dn.starts,z),zn.returnEnd?0:W.length}function X(){const z=[];for(let W=D;W!==J;W=W.parent)W.scope&&z.unshift(W.scope);z.forEach(W=>P.openNode(W))}let Y={};function an(z,W){const nn=W&&W[0];if(q+=z,nn==null)return cn(),0;if(Y.type==="begin"&&W.type==="end"&&Y.index===W.index&&nn===""){if(q+=T.slice(W.index,W.index+1),!a){const dn=new Error(`0 width match regex (${O})`);throw dn.languageName=O,dn.badRule=Y.rule,dn}return 1}if(Y=W,W.type==="begin")return F(W);if(W.type==="illegal"&&!L){const dn=new Error('Illegal lexeme "'+nn+'" for mode "'+(D.scope||"<unnamed>")+'"');throw dn.mode=D,dn}else if(W.type==="end"){const dn=Z(W);if(dn!==fu)return dn}if(W.type==="illegal"&&nn==="")return 1;if(_a>1e5&&_a>W.index*3)throw new Error("potential infinite loop, way more iterations than matches");return q+=nn,nn.length}const J=N(O);if(!J)throw he(o.replace("{}",O)),new Error('Unknown language: "'+O+'"');const rn=Fm(J);let en="",D=I||rn;const on={},P=new l.__emitter(l);X();let q="",Dn=0,br=0,_a=0,ba=!1;try{if(J.__emitTokens)J.__emitTokens(T,P);else{for(D.matcher.considerAll();;){_a++,ba?ba=!1:D.matcher.considerAll(),D.matcher.lastIndex=br;const z=D.matcher.exec(T);if(!z)break;const W=T.substring(br,z.index),nn=an(W,z);br=z.index+nn}an(T.substring(br))}return P.finalize(),en=P.toHTML(),{language:O,value:en,relevance:Dn,illegal:!1,_emitter:P,_top:D}}catch(z){if(z.message&&z.message.includes("Illegal"))return{language:O,value:Qa(T),illegal:!0,relevance:0,_illegalBy:{message:z.message,index:br,context:T.slice(br-100,br+100),mode:z.mode,resultSoFar:en},_emitter:P};if(a)return{language:O,value:Qa(T),illegal:!1,relevance:0,errorRaised:z,_emitter:P,_top:D};throw z}}function g(O){const T={value:Qa(O),illegal:!1,relevance:0,_top:s,_emitter:new l.__emitter(l)};return T._emitter.addText(O),T}function m(O,T){T=T||l.languages||Object.keys(r);const L=g(O),I=T.filter(N).filter(K).map(cn=>y(cn,O,!1));I.unshift(L);const H=I.sort((cn,ln)=>{if(cn.relevance!==ln.relevance)return ln.relevance-cn.relevance;if(cn.language&&ln.language){if(N(cn.language).supersetOf===ln.language)return 1;if(N(ln.language).supersetOf===cn.language)return-1}return 0}),[Q,jn]=H,kn=Q;return kn.secondBest=jn,kn}function x(O,T,L){const I=T&&e[T]||L;O.classList.add("hljs"),O.classList.add(`language-${I}`)}function w(O){let T=null;const L=d(O);if(c(L))return;if(xn("before:highlightElement",{el:O,language:L}),O.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);return}if(O.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),l.throwUnescapedHTML))throw new $m("One of your code blocks includes unescaped HTML.",O.innerHTML);T=O;const I=T.textContent,H=L?v(I,{language:L,ignoreIllegals:!0}):m(I);O.innerHTML=H.value,O.dataset.highlighted="yes",x(O,L,H.language),O.result={language:H.language,re:H.relevance,relevance:H.relevance},H.secondBest&&(O.secondBest={language:H.secondBest.language,relevance:H.secondBest.relevance}),xn("after:highlightElement",{el:O,result:H,text:I})}function E(O){l=du(l,O)}const p=()=>{_(),Se("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){_(),Se("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let h=!1;function _(){if(document.readyState==="loading"){h=!0;return}document.querySelectorAll(l.cssSelector).forEach(w)}function S(){h&&_()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",S,!1);function j(O,T){let L=null;try{L=T(n)}catch(I){if(he("Language definition for '{}' could not be registered.".replace("{}",O)),a)he(I);else throw I;L=s}L.name||(L.name=O),r[O]=L,L.rawDefinition=T.bind(null,n),L.aliases&&M(L.aliases,{languageName:O})}function k(O){delete r[O];for(const T of Object.keys(e))e[T]===O&&delete e[T]}function C(){return Object.keys(r)}function N(O){return O=(O||"").toLowerCase(),r[O]||r[e[O]]}function M(O,{languageName:T}){typeof O=="string"&&(O=[O]),O.forEach(L=>{e[L.toLowerCase()]=T})}function K(O){const T=N(O);return T&&!T.disableAutodetect}function G(O){O["before:highlightBlock"]&&!O["before:highlightElement"]&&(O["before:highlightElement"]=T=>{O["before:highlightBlock"](Object.assign({block:T.el},T))}),O["after:highlightBlock"]&&!O["after:highlightElement"]&&(O["after:highlightElement"]=T=>{O["after:highlightBlock"](Object.assign({block:T.el},T))})}function V(O){G(O),t.push(O)}function hn(O){const T=t.indexOf(O);T!==-1&&t.splice(T,1)}function xn(O,T){const L=O;t.forEach(function(I){I[L]&&I[L](T)})}function Tn(O){return Se("10.7.0","highlightBlock will be removed entirely in v12.0"),Se("10.7.0","Please use highlightElement now."),w(O)}Object.assign(n,{highlight:v,highlightAuto:m,highlightAll:_,highlightElement:w,highlightBlock:Tn,configure:E,initHighlighting:p,initHighlightingOnLoad:f,registerLanguage:j,unregisterLanguage:k,listLanguages:C,getLanguage:N,registerAliases:M,autoDetection:K,inherit:du,addPlugin:V,removePlugin:hn}),n.debugMode=function(){a=!1},n.safeMode=function(){a=!0},n.versionString=Hm,n.regex={concat:we,lookahead:Id,either:Hs,optional:im,anyNumberOfTimes:tm};for(const O in gi)typeof gi[O]=="object"&&Pd(gi[O]);return Object.assign(n,gi),n},qe=Vd({});qe.newInstance=()=>Vd({});var Vm=qe;qe.HighlightJS=qe;qe.default=qe;const rt=Vo(Vm);var je="[0-9](_*[0-9])*",mi=`\\.(${je})`,vi="[0-9a-fA-F](_*[0-9a-fA-F])*",pu={className:"number",variants:[{begin:`(\\b(${je})((${mi})|\\.)?|(${mi}))[eE][+-]?(${je})[fFdD]?\\b`},{begin:`\\b(${je})((${mi})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${mi})[fFdD]?\\b`},{begin:`\\b(${je})[fFdD]\\b`},{begin:`\\b0[xX]((${vi})\\.?|(${vi})?\\.(${vi}))[pP][+-]?(${je})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${vi})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Kd(n,r,e){return e===-1?"":n.replace(r,t=>Kd(n,r,e-1))}function Km(n){const r=n.regex,e="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",t=e+Kd("(?:<"+e+"~~~(?:\\s*,\\s*"+e+"~~~)*>)?",/~~~/g,2),c={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},d={className:"meta",begin:"@"+e,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},v={className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:c,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,e],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[r.concat(/(?!else)/,e),/\s+/,e,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,e],className:{1:"keyword",3:"title.class"},contains:[v,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+t+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:c,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:c,relevance:0,contains:[d,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,pu,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},pu,d]}}function Gm(n){const r=n.regex,e="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",t=r.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),a=r.concat(t,/(::\w+)*/),s={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},l={className:"doctag",begin:"@[A-Za-z]+"},c={begin:"#<",end:">"},d=[n.COMMENT("#","$",{contains:[l]}),n.COMMENT("^=begin","^=end",{contains:[l],relevance:10}),n.COMMENT("^__END__",n.MATCH_NOTHING_RE)],v={className:"subst",begin:/#\{/,end:/\}/,keywords:s},y={className:"string",contains:[n.BACKSLASH_ESCAPE,v],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:r.concat(/<<[-~]?'?/,r.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,v]})]}]},g="[1-9](_?[0-9])*|0",m="[0-9](_?[0-9])*",x={className:"number",relevance:0,variants:[{begin:`\\b(${g})(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},w={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:s}]},j=[y,{variants:[{match:[/class\s+/,a,/\s+<\s+/,a]},{match:[/\b(class|module)\s+/,a]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:s},{match:[/(include|extend)\s+/,a],scope:{2:"title.class"},keywords:s},{relevance:0,match:[a,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:t,scope:"title.class"},{match:[/def/,/\s+/,e],scope:{1:"keyword",3:"title.function"},contains:[w]},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[y,{begin:e}],relevance:0},x,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:s},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,v],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(c,d),relevance:0}].concat(c,d);v.contains=j,w.contains=j;const M=[{begin:/^\s*=>/,starts:{end:"$",contains:j}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:s,contains:j}}];return d.unshift(c),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:s,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(M).concat(d).concat(j)}}const hu="[A-Za-z$_][0-9A-Za-z$_]*",Jm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Ym=["true","false","null","undefined","NaN","Infinity"],Gd=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Jd=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Yd=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Qm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],qm=[].concat(Yd,Gd,Jd);function Xm(n){const r=n.regex,e=(T,{after:L})=>{const I="</"+T[0].slice(1);return T.input.indexOf(I,L)!==-1},t=hu,a={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(T,L)=>{const I=T[0].length+T.index,H=T.input[I];if(H==="<"||H===","){L.ignoreMatch();return}H===">"&&(e(T,{after:I})||L.ignoreMatch());let Q;const jn=T.input.substring(I);if(Q=jn.match(/^\s*=/)){L.ignoreMatch();return}if((Q=jn.match(/^\s+extends\s+/))&&Q.index===0){L.ignoreMatch();return}}},l={$pattern:hu,keyword:Jm,literal:Ym,built_in:qm,"variable.language":Qm},c="[0-9](_?[0-9])*",d=`\\.(${c})`,v="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${v})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b`},{begin:`\\b(${v})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},x={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"css"}},w={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,g]},f={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},h=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,m,x,w,E,{match:/\$\d+/},y];g.contains=h.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(h)});const _=[].concat(f,g.contains),S=_.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(_)}]),j={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:S},k={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},C={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Gd,...Jd]}},N={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},M={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[j],illegal:/%/},K={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function G(T){return r.concat("(?!",T.join("|"),")")}const V={match:r.concat(/\b/,G([...Yd,"super","import"]),t,r.lookahead(/\(/)),className:"title.function",relevance:0},hn={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},xn={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},j]},Tn="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(Tn)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[j]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:S,CLASS_REFERENCE:C},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),N,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,m,x,w,E,f,{match:/\$\d+/},y,C,{className:"attr",begin:t+r.lookahead(":"),relevance:0},O,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,n.REGEXP_MODE,{className:"function",begin:Tn,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:S}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:a.begin,end:a.end},{match:o},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},M,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[j,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},hn,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[j]},V,K,k,xn,{match:/\$[(.]/}]}}function Zm(n){const r=n.regex,e=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,o=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],s=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],l=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],c=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...s],d=["__debug__","Ellipsis","False","None","NotImplemented","True",...l],v=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...o],y={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:c,literal:d,type:v},g={className:"meta",begin:/^(>>>|\.\.\.) /},m={className:"subst",begin:/\{/,end:/\}/,keywords:y,illegal:/#/},x={begin:/\{\{/,relevance:0},w={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g,x,m]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g,x,m]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,x,m]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,x,m]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},E="[0-9](_?[0-9])*",p=`(\\b(${E}))?\\.(${E})|\\b(${E})\\.`,f=`\\b|${t.join("|")}`,h={className:"number",relevance:0,variants:[{begin:`(\\b(${E})|(${p}))[eE][+-]?(${E})[jJ]?(?=${f})`},{begin:`(${p})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${f})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${f})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${f})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${f})`},{begin:`\\b(${E})[jJ](?=${f})`}]},_={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:y,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},S={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",g,h,w,n.HASH_COMMENT_MODE,{scope:"params.operator",match:a},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return m.contains=[w,h,g],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:y,illegal:/(<\/|\?)|=>/,contains:[g,h,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},w,_,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,e],scope:{1:"keyword.def",3:"title.function"},contains:[S]},{variants:[{match:[/\bclass/,/\s+/,e,/\s*/,/\(\s*/,e,/\s*\)/]},{match:[/\bclass/,/\s+/,e]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[h,S,w]},{scope:"operator",match:a}]}}rt.registerLanguage("python",Zm);rt.registerLanguage("javascript",Xm);rt.registerLanguage("java",Km);rt.registerLanguage("cpp",Xg);rt.registerLanguage("ruby",Gm);function n1({code:n,language:r}){const e=$.useRef(null),[t,a]=$.useState(""),[o,s]=$.useState(""),l=Qn("hljs",r,au.code),c=()=>{if(e.current){const w=n.split(`
`).map((E,p)=>{const f=rt.highlight(E,{language:r}).value;return`<span class=${au.line} data-line-number=${p+1}>${f}</span>`}).join("");s(w)}},d=()=>{const m=e.current,x=m==null?void 0:m.querySelectorAll("span[data-line-number]");x==null||x.forEach(w=>w.addEventListener("click",g))},v=()=>{const m=e.current,x=m==null?void 0:m.querySelectorAll("span[data-line-number]");x==null||x.forEach(w=>w.removeEventListener("click",g))},y=()=>{const m=e.current,x=m==null?void 0:m.querySelector(`span[data-line-number="${t}"]`);x==null||x.removeAttribute("focused")},g=m=>{const x=m.currentTarget,w=x.getAttribute("data-line-number")??"";y(),w===t?a(""):(x.setAttribute("focused",""),a(w))};return ya(e,y),$.useEffect(()=>(c(),d(),()=>v()),[n,o,t]),i.jsx("pre",{ref:e,children:i.jsx("code",{className:l,dangerouslySetInnerHTML:{__html:o}})})}const r1="_copyButton_1hjzm_1",e1="_copySvg_1hjzm_25",t1="_checkSvg_1hjzm_32",i1="_checkSvgPath_1hjzm_37",a1="_draw_1hjzm_1",o1="_enter_1hjzm_48",s1="_exit_1hjzm_52",oe={copyButton:r1,copySvg:e1,checkSvg:t1,checkSvgPath:i1,draw:a1,enter:o1,"fade-in":"_fade-in_1hjzm_1",exit:s1,"fade-out":"_fade-out_1hjzm_1"};function l1({onClick:n}){const[r,e]=$.useState("show"),[t,a]=$.useState("hide"),o=Qn(oe.copySvg,r==="enter"&&oe.enter,r==="exit"&&oe.exit),s=Qn(oe.checkSvg,t==="exit"&&oe.exit),l=Qn(oe.checkSvgPath),c=()=>{r==="show"&&t==="hide"&&(e("exit"),n())},d=()=>{r==="enter"&&e("show"),r==="exit"&&(e("hide"),a("show"))},v=()=>{t==="show"&&setTimeout(()=>{a("exit")},500),t==="exit"&&(a("hide"),e("enter"))},y=()=>r!=="hide"&&i.jsx("svg",{className:o,viewBox:"0 0 512 512",onAnimationEnd:d,children:i.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),g=()=>t!=="hide"&&i.jsx("svg",{className:s,viewBox:"0 0 16 16",onAnimationEnd:v,children:i.jsx("path",{className:l,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return i.jsxs("button",{"aria-label":"copy button",className:oe.copyButton,onClick:c,children:[y(),g()]})}function u1(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),i.jsx("stop",{offset:1,stopColor:"#306998"})]}),i.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#FFD43B"}),i.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),i.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),i.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),i.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),i.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),i.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function c1(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),i.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function d1(){return i.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35","enable-background":"new 0 0 306 344.35",children:[i.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),i.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),i.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),i.jsx("g",{children:i.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function f1(){return i.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[i.jsxs("g",{children:[i.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),i.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),i.jsxs("g",{children:[i.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),i.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),i.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),i.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),i.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),i.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function p1(){return i.jsx("svg",{viewBox:"0 0 32 32",children:i.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}const h1={python:u1,javascript:c1,cpp:d1,java:f1,ruby:p1};function u({title:n,children:r}){const{selectedLanguage:e,setSelectedLanguage:t}=kh(),a=$.Children.toArray(r),o=a.findIndex(y=>y.props.language===e);let s="";try{s=a[o].props.code}catch{}const l=a[o].props.language,c=y=>{t(a[y].props.language)},d=()=>navigator.clipboard.writeText(s),v=()=>a.map((y,g)=>{const m=h1[y.props.language],x=`view ${y.props.language} code`;return i.jsx("button",{role:"tab","aria-label":x,"aria-selected":g===o,className:hi.tabButton,onClick:()=>c(g),children:i.jsx(m,{})},g)});return i.jsxs("div",{role:"tablist",className:hi.container,children:[i.jsx("h3",{children:n}),i.jsxs("div",{className:hi.buttonContainer,children:[i.jsx("div",{role:"tablist",className:hi.tabButtonContainer,children:v()}),i.jsx(l1,{onClick:d})]}),i.jsx("div",{role:"tabpanel",className:"tabs-content",children:i.jsx(n1,{code:s,language:l})})]})}u.Tab=n=>i.jsx(i.Fragment,{children:n});const g1=`def fn(arr):\r
    ans = 0\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left < right:\r
        # TODO: logic with left and right\r
        if CONDITION:\r
            left += 1\r
        else:\r
            right -= 1\r
\r
    return ans\r
`,m1=`def fn(arr1, arr2):\r
    i = 0\r
    j = 0\r
    ans = 0\r
\r
    while i < len(arr1) and j < len(arr2):\r
        # TODO: logic\r
        if CONDITION:\r
            i += 1\r
        else:\r
            j += 1\r
\r
    while i < len(arr1):\r
        # TODO: logic\r
        i += 1\r
\r
    while j < len(arr2):\r
        # TODO: logic\r
        j += 1\r
\r
    return ans\r
`,v1=`def fn(arr):\r
    n = len(arr)\r
    window = 0\r
    left = 0\r
    ans = 0\r
\r
    for right in range(n):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,y1=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,x1=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,_1=`const fn = (arr) => {\r
    let ans = 0\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++\r
        } else {\r
            right--\r
        }\r
    }\r
\r
    return ans\r
}\r
`,b1=`let fn = (arr1, arr2) => {\r
    let ans = 0\r
    let i = 0\r
    let j = 0\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++\r
        } else {\r
            j++\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++\r
    }\r
\r
    return ans\r
}\r
`,w1=`const fn = (arr) => {\r
    let window = 0\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,T1=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,S1=`const fn = (arr) => {\r
    let ans = []\r
\r
    for (const c of arr) {\r
        ans.push(c)\r
    }\r
\r
    return ans.join('')\r
}\r
\r
const fn = (arr) => {\r
    let ans = ''\r
\r
    for (const c of arr) {\r
        ans += c\r
    }\r
\r
    return ans\r
}\r
`,j1=`public int fn(int[] arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,k1=`public int fn(int[] arr1, int[] arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.length) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,E1=`public int fn(int[] arr) {\r
    int n = arr.length;\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,N1=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public int[] fn(int[] arr) {\r
    int n = arr.length;\r
    int[] prefix = new int[n];\r
    prefix[0] = arr[0];\r
\r
    for (int i = 1; i < n; i++) {\r
        prefix[i] = prefix[i - 1] + arr[i];\r
    }\r
\r
    return prefix;\r
}\r
`,O1=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,A1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int ans = 0;\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left < right) {\r
        // TODO: logic with left and right\r
        if (CONDITION) {\r
            left++;\r
        } else {\r
            right--;\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,C1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr1, vector<int>& arr2) {\r
    int i = 0;\r
    int j = 0;\r
    int ans = 0;\r
\r
    while (i < arr1.size() && j < arr2.size()) {\r
        // TODO: logic\r
        if (CONDITION) {\r
            i++;\r
        } else {\r
            j++;\r
        }\r
    }\r
\r
    while (i < arr1.size()) {\r
        // TODO: logic\r
        i++;\r
    }\r
\r
    while (j < arr2.size()) {\r
        // TODO: logic\r
        j++;\r
    }\r
\r
    return ans;\r
}\r
`,L1=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    int n = arr.size();\r
    int window = 0;\r
    int left = 0;\r
    int ans = 0;\r
\r
    for (int right = 0; right < n; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,R1=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> prefix;\r
    prefix.push_back(arr[0]);\r
\r
    for (int i = 1; i < n; ++i) {\r
        prefix.push_back(prefix.back() + arr[i]);\r
    }\r
\r
    return prefix;\r
}\r
`,P1=`string fn(vector<char>& arr) {\r
    return string(arr.begin(), arr.end())\r
}\r
`,M1=`def fn(arr)\r
  ans   = 0\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left < right\r
    # TODO: logic with left and right\r
    if CONDITION\r
      left  += 1\r
    else\r
      right -= 1\r
    end\r
  end\r
\r
  ans\r
end`,I1=`def fn(arr1, arr2)\r
  i, j  = 0, 0\r
  ans   = 0\r
\r
  while i < arr1.length && j < arr2.length\r
    # TODO: Logic\r
    if CONDITION\r
      i += 1\r
    else\r
      j += 1\r
    end\r
  end\r
\r
  while i < arr1.length\r
    # TODO: Logic\r
    i += 1\r
  end\r
\r
  while j < arr2.length\r
    # TODO: Logic\r
    j += 1\r
  end\r
\r
  ans\r
end\r
`,D1=`def fn(arr)\r
  n       = arr.length\r
  window  = 0\r
  left    = 0\r
  result  = 0\r
\r
  (0...n).each do |right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update result\r
  end\r
\r
  result\r
end\r
`,z1=`# This method computes the prefix sum of an array.\r
# It returns a new array where each element at index i is the sum of elements from index 0 to i-1 in the original array.\r
# # For example, given the array [1, 2, 3], the prefix sum array will be [1, 3, 6].\r
def prefix_sum(arr)\r
  n       = arr.length\r
  prefix  = [arr[0]]\r
\r
  (1...n).each do |i|\r
    prefix << (prefix.last + arr[i])\r
  end\r
\r
  prefix\r
end\r
`,B1=`def fn(strs)\r
  # array of strings/chrs\r
  ans = []\r
\r
  strs.each do |char|\r
    ans << char\r
  end\r
\r
  ans.join('')\r
end\r
\r
# simple\r
def fn2(strs)\r
  strs.join\r
end\r
`;function F1(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Array"}),i.jsx("section",{id:"array-two-pointers-one-input",children:i.jsxs(u,{title:"two pointers: one input, opposite ends",children:[i.jsx(u.Tab,{code:g1,language:"python"}),i.jsx(u.Tab,{code:_1,language:"javascript"}),i.jsx(u.Tab,{code:j1,language:"java"}),i.jsx(u.Tab,{code:A1,language:"cpp"}),i.jsx(u.Tab,{code:M1,language:"ruby"})]})}),i.jsx("section",{id:"array-two-pointers-two-inputs",children:i.jsxs(u,{title:"two pointers: two inputs, exhaust both",children:[i.jsx(u.Tab,{code:m1,language:"python"}),i.jsx(u.Tab,{code:b1,language:"javascript"}),i.jsx(u.Tab,{code:k1,language:"java"}),i.jsx(u.Tab,{code:C1,language:"cpp"}),i.jsx(u.Tab,{code:I1,language:"ruby"})]})}),i.jsx("section",{id:"array-sliding-window",children:i.jsxs(u,{title:"sliding window",children:[i.jsx(u.Tab,{code:v1,language:"python"}),i.jsx(u.Tab,{code:w1,language:"javascript"}),i.jsx(u.Tab,{code:E1,language:"java"}),i.jsx(u.Tab,{code:L1,language:"cpp"}),i.jsx(u.Tab,{code:D1,language:"ruby"})]})}),i.jsx("section",{id:"array-prefix-sum",children:i.jsxs(u,{title:"prefix sum",children:[i.jsx(u.Tab,{code:y1,language:"python"}),i.jsx(u.Tab,{code:T1,language:"javascript"}),i.jsx(u.Tab,{code:N1,language:"java"}),i.jsx(u.Tab,{code:R1,language:"cpp"}),i.jsx(u.Tab,{code:z1,language:"ruby"})]})}),i.jsx("section",{id:"array-string-building",children:i.jsxs(u,{title:"efficient string building",children:[i.jsx(u.Tab,{code:x1,language:"python"}),i.jsx(u.Tab,{code:S1,language:"javascript"}),i.jsx(u.Tab,{code:O1,language:"java"}),i.jsx(u.Tab,{code:P1,language:"cpp"}),i.jsx(u.Tab,{code:B1,language:"ruby"})]})})]})}const U1=`from collections import defaultdict\r
\r
\r
def fn(arr, k):\r
    counts = defaultdict(int)\r
    counts[0] = 1\r
    ans = curr = 0\r
\r
    for num in arr:\r
        # TODO: logic to change curr\r
        ans += counts[curr - k]\r
        counts[curr] += 1\r
\r
    return ans\r
`,H1=`def fn(arr):\r
    window = set()\r
    ans = 0\r
    left = 0\r
\r
    for right, ELEMENT in enumerate(arr):\r
        # TODO: add arr[right] to window\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from window\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,$1=`const fn = (arr, k) => {\r
    let counts = new Map()\r
    counts.set(0, 1)\r
    let ans = 0\r
    let curr = 0\r
\r
    for (const num of arr) {\r
        // TODO: logic to change curr\r
        ans += counts.get(curr - k) || 0\r
        counts.set(curr, (counts.get(curr) || 0) + 1)\r
    }\r
\r
    return ans\r
}\r
`,W1=`function fn(arr) {\r
    let window = new Set()\r
    let ans = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left += 1\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,V1=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
public int fn(int[] arr, int k) {\r
    Map<Integer, Integer> counts = new HashMap<>();\r
    counts.put(0, 1);\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num: arr) {\r
        // TODO: logic to change curr\r
        ans += counts.getOrDefault(curr - k, 0);\r
        counts.put(curr, counts.getOrDefault(curr, 0) + 1);\r
    }\r
\r
    return ans;\r
}\r
`,K1=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[] arr) {\r
    Set<Integer> window = new HashSet<>();\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,G1=`#include <vector>\r
#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int k) {\r
    unordered_map<int, int> counts;\r
    counts[0] = 1;\r
    int ans = 0;\r
    int curr = 0;\r
\r
    for (int num : arr) {\r
        // TODO: logic to change curr\r
        ans += counts[curr - k];\r
        counts[curr]++;\r
    }\r
\r
    return ans;\r
}\r
`,J1=`#include <vector>\r
#include <unordered_set>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    unordered_set<int> window;\r
    int ans = 0;\r
    int left = 0;\r
\r
    for (int right = 0; right < arr.size(); right++) {\r
        // TODO: add arr[right] to window\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from window\r
            left++;\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans;\r
}\r
`,Y1=`def fn(arr, k)\r
  counts    = Hash.new(0)\r
  counts[0] = 1\r
  ans       = 0\r
  curr      = 0\r
\r
  arr.each do |num|\r
    # TODO: logic to change curr\r
    ans += counts[curr - k]\r
    counts[curr] += 1\r
  end\r
\r
  ans\r
end\r
`,Q1=`require 'set'\r
\r
def fn(arr)\r
  window  = Set.new\r
  ans     = 0\r
  left    = 0\r
\r
  arr.each_with_index do |ELEMENT, right|\r
    # TODO: add arr[right] to window\r
\r
    while WINDOW_CONDITION_BROKEN\r
      # TODO: remove arr[left] from window\r
      left += 1\r
    end\r
\r
    # TODO: update ans\r
  end\r
\r
  ans\r
end\r
`;function q1(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Hash Map"}),i.jsx("section",{id:"hashmap-find-number-of-subarrays",children:i.jsxs(u,{title:"find number of subarrays that fit an exact criteria",children:[i.jsx(u.Tab,{code:U1,language:"python"}),i.jsx(u.Tab,{code:$1,language:"javascript"}),i.jsx(u.Tab,{code:V1,language:"java"}),i.jsx(u.Tab,{code:G1,language:"cpp"}),i.jsx(u.Tab,{code:Y1,language:"ruby"})]})}),i.jsx("section",{id:"hashmap-sliding-window",children:i.jsxs(u,{title:"sliding window",children:[i.jsx(u.Tab,{code:H1,language:"python"}),i.jsx(u.Tab,{code:W1,language:"javascript"}),i.jsx(u.Tab,{code:K1,language:"java"}),i.jsx(u.Tab,{code:J1,language:"cpp"}),i.jsx(u.Tab,{code:Q1,language:"ruby"})]})})]})}const X1=`def fn(head):\r
    slow = head\r
    fast = head\r
    ans = 0\r
\r
    while fast and fast.next:\r
        # TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
\r
    return ans\r
`,Z1=`def fn(head):\r
    prev = None\r
    curr = head\r
\r
    while curr:\r
        nxt = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = nxt\r
\r
    return prev\r
`,n0=`const fn = (head) => {\r
    let ans = 0\r
    let slow = head\r
    let fast = head\r
\r
    while (fast && fast.next) {\r
        // TODO: logic\r
        slow = slow.next\r
        fast = fast.next.next\r
    }\r
\r
    return ans\r
}\r
`,r0=`const fn = (head) => {\r
    let prev = null\r
    let curr = head\r
\r
    while (curr) {\r
        let next = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = next\r
    }\r
\r
    return prev\r
}\r
`,e0=`public int fn(ListNode head) {\r
    ListNode slow = head;\r
    ListNode fast = head;\r
    int ans = 0;\r
\r
    while (fast != null && fast.next != null) {\r
        // TODO: logic\r
        slow = slow.next;\r
        fast = fast.next.next;\r
    }\r
\r
    return ans;\r
}\r
`,t0=`public ListNode fn(ListNode head) {\r
    ListNode curr = head;\r
    ListNode prev = null;\r
\r
    while (curr != null) {\r
        ListNode nextNode = curr.next;\r
        curr.next = prev;\r
        prev = curr;\r
        curr = nextNode;\r
    }\r
\r
    return prev;\r
}\r
`,i0=`int fn(ListNode* head) {\r
    ListNode* slow = head;\r
    ListNode* fast = head;\r
    int ans = 0;\r
\r
    while (fast && fast->next) {\r
        // TODO: logic\r
        slow = slow->next;\r
        fast = fast->next->next;\r
    }\r
\r
    return ans;\r
}\r
`,a0=`ListNode* fn(ListNode* head) {\r
    ListNode* prev = nullptr;\r
    ListNode* curr = head;\r
\r
    while (curr) {\r
        ListNode* nxt = curr->next;\r
        curr->next = prev;\r
        prev = curr;\r
        curr = nxt;\r
    }\r
\r
    return prev;\r
}\r
`,o0=`def fn(head)\r
  slow  = head\r
  fast  = head\r
  ans   = 0\r
\r
  until fast.nil? || fast.next.nil?\r
    # TODO: logic\r
    slow = slow.next\r
    fast = fast.next.next\r
  end\r
\r
  ans\r
end\r
`,s0=`def fn(head)\r
  prev = nil\r
  curr = head\r
\r
  until curr.nil?\r
    nxt = curr.next\r
    curr.next = prev\r
    prev = curr\r
    curr = nxt\r
  end\r
\r
  prev\r
end\r
`;function l0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Linked List"}),i.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:i.jsxs(u,{title:"fast and slow pointer",children:[i.jsx(u.Tab,{code:X1,language:"python"}),i.jsx(u.Tab,{code:n0,language:"javascript"}),i.jsx(u.Tab,{code:e0,language:"java"}),i.jsx(u.Tab,{code:i0,language:"cpp"}),i.jsx(u.Tab,{code:o0,language:"ruby"})]})}),i.jsx("section",{id:"linkedlist-reverse",children:i.jsxs(u,{title:"reverse linked list",children:[i.jsx(u.Tab,{code:Z1,language:"python"}),i.jsx(u.Tab,{code:r0,language:"javascript"}),i.jsx(u.Tab,{code:t0,language:"java"}),i.jsx(u.Tab,{code:a0,language:"cpp"}),i.jsx(u.Tab,{code:s0,language:"ruby"})]})})]})}const u0=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] > num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,c0=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        while stack and stack[-1] < num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,d0=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] > num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,f0=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        while (stack.length && stack[stack.length - 1] < num) {\r
            // TODO: logic\r
            stack.pop()\r
        }\r
\r
        stack.push(num)\r
    }\r
\r
    return ans\r
}\r
`,p0=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,h0=`import java.util.Stack;\r
\r
\r
public int fn(int[] arr) {\r
    Stack<Integer> stack = new Stack<>();\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.isEmpty() && stack.peek() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,g0=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() > num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,m0=`#include <stack>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr) {\r
    stack<int> stack;\r
    int ans = 0;\r
\r
    for (int num : arr) {\r
        while (!stack.empty() && stack.top() < num) {\r
            // TODO: logic\r
            stack.pop();\r
        }\r
        stack.push(num);\r
    }\r
\r
    return ans;\r
}\r
`,v0=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] > num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`,y0=`def fn(arr)\r
  stack = []\r
  ans   = 0\r
\r
  arr.each do |num|\r
    while !stack.empty? && stack[-1] < num\r
      # TODO: logic\r
      stack.pop\r
    end\r
    stack << num\r
  end\r
\r
  ans\r
end\r
`;function x0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Stack"}),i.jsx("section",{id:"stack-monotonic-increasing",children:i.jsxs(u,{title:"monotonic increasing stack",children:[i.jsx(u.Tab,{code:u0,language:"python"}),i.jsx(u.Tab,{code:d0,language:"javascript"}),i.jsx(u.Tab,{code:p0,language:"java"}),i.jsx(u.Tab,{code:g0,language:"cpp"}),i.jsx(u.Tab,{code:v0,language:"ruby"})]})}),i.jsx("section",{id:"stack-monotonic-decreasing",children:i.jsxs(u,{title:"monotonic decreasing stack",children:[i.jsx(u.Tab,{code:c0,language:"python"}),i.jsx(u.Tab,{code:f0,language:"javascript"}),i.jsx(u.Tab,{code:h0,language:"java"}),i.jsx(u.Tab,{code:m0,language:"cpp"}),i.jsx(u.Tab,{code:y0,language:"ruby"})]})})]})}const _0=`def dfs(root):\r
    if not root:\r
        return\r
\r
    ans = 0\r
\r
    # TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
`,b0=`def dfs(root):\r
    stack = [root]\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        if node.left:\r
            stack.append(node.left)\r
        if node.right:\r
            stack.append(node.right)\r
\r
    return ans\r
`,w0=`from collections import deque\r
\r
\r
def fn(root):\r
    que = deque([root])\r
    ans = 0\r
\r
    while que:\r
        current_length = len(que)\r
        # TODO: logic for current level\r
        for _ in range(current_length):\r
            node = que.popleft()\r
            # TODO: logic\r
            if node.left:\r
                que.append(node.left)\r
            if node.right:\r
                que.append(node.right)\r
\r
    return ans\r
`,T0=`const dfs = (root) => {\r
    if (!root) {\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    // TODO: logic\r
    dfs(root.left)\r
    dfs(root.right)\r
\r
    return ans\r
}\r
`,S0=`const dfs = (root) => {\r
    let stack = [root]\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        if (node.left) {\r
            stack.push(node.left)\r
        }\r
        if (node.right) {\r
            stack.push(node.right)\r
        }\r
    }\r
\r
    return ans\r
}\r
`,j0=`const fn = (root) => {\r
    let que = [root]\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
        // TODO: logic for current level\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            if (node.left) {\r
                nextQue.push(node.left)\r
            }\r
            if (node.right) {\r
                nextQue.push(node.right)\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,k0=`public int dfs(TreeNode root) {\r
    if (root == null) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    ans += dfs(root.left);\r
    ans += dfs(root.right);\r
\r
    return ans;\r
}\r
`,E0=`import java.util.Stack;\r
\r
\r
public int dfs(TreeNode root) {\r
    Stack<TreeNode> stack = new Stack<>();\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.isEmpty()) {\r
        TreeNode node = stack.pop();\r
        // TODO: logic\r
        if (node.left != null) {\r
            stack.push(node.left);\r
        }\r
        if (node.right != null) {\r
            stack.push(node.right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,N0=`import java.util.LinkedList;\r
import java.util.Queue;\r
\r
\r
public int fn(TreeNode root) {\r
    Queue<TreeNode> que = new LinkedList<>();\r
    que.add(root);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode node = que.remove();\r
            // TODO: logic\r
            if (node.left != null) {\r
                que.add(node.left);\r
            }\r
            if (node.right != null) {\r
                que.add(node.right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,O0=`int dfs(TreeNode* root) {\r
    if (root == nullptr) {\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    // TODO: logic\r
    dfs(root.left);\r
    dfs(root.right);\r
\r
    return ans;\r
}\r
`,A0=`#include <stack>\r
\r
using namespace std;\r
\r
\r
int dfs(TreeNode* root) {\r
    stack<TreeNode*> stack;\r
    stack.push(root);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        TreeNode* node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        if (node->left) {\r
            stack.push(node->left);\r
        }\r
        if (node->right) {\r
            stack.push(node->right);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,C0=`#include <queue>\r
\r
using namespace std;\r
\r
\r
int fn(TreeNode* root) {\r
    queue<TreeNode*> que;\r
    que.push(root);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int currentLength = que.size();\r
        // TODO: logic for current level\r
\r
        for (int i = 0; i < currentLength; i++) {\r
            TreeNode* node = que.front();\r
            que.pop();\r
            // TODO: logic\r
            if (node->left != nullptr) {\r
                que.push(node->left);\r
            }\r
            if (node->right != nullptr) {\r
                que.push(node->right);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,L0=`def dfs(root)\r
  return unless root\r
\r
  ans = 0\r
\r
  # TODO: logic\r
  dfs(root.left)\r
  dfs(root.right)\r
\r
  ans\r
end\r
`,R0=`def dfs(root)\r
  stack = [root]\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
\r
    stack << node.left if node.left\r
    stack << node.right if node.right\r
  end\r
\r
  ans\r
end\r
`,P0=`def fn(root)\r
  queue = [root]\r
  ans   = 0\r
\r
  until queue.empty?\r
    current_length = queue.length\r
    # TODO: logic for current level\r
\r
    current_length.times do\r
      node = queue.shift\r
      # TODO: logic\r
\r
      queue << node.left if node.left\r
      queue << node.right if node.right\r
    end\r
  end\r
\r
  ans\r
end\r
`;function M0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Binary Tree"}),i.jsx("section",{id:"tree-dfs-recursive",children:i.jsxs(u,{title:"DFS (recursive)",children:[i.jsx(u.Tab,{code:_0,language:"python"}),i.jsx(u.Tab,{code:T0,language:"javascript"}),i.jsx(u.Tab,{code:k0,language:"java"}),i.jsx(u.Tab,{code:O0,language:"cpp"}),i.jsx(u.Tab,{code:L0,language:"ruby"})]})}),i.jsx("section",{id:"tree-dfs-iterative",children:i.jsxs(u,{title:"DFS (iterative)",children:[i.jsx(u.Tab,{code:b0,language:"python"}),i.jsx(u.Tab,{code:S0,language:"javascript"}),i.jsx(u.Tab,{code:E0,language:"java"}),i.jsx(u.Tab,{code:A0,language:"cpp"}),i.jsx(u.Tab,{code:R0,language:"ruby"})]})}),i.jsx("section",{id:"tree-bfs",children:i.jsxs(u,{title:"BFS",children:[i.jsx(u.Tab,{code:w0,language:"python"}),i.jsx(u.Tab,{code:j0,language:"javascript"}),i.jsx(u.Tab,{code:N0,language:"java"}),i.jsx(u.Tab,{code:C0,language:"cpp"}),i.jsx(u.Tab,{code:P0,language:"ruby"})]})})]})}const I0=`def fn(graph):\r
    def dfs(node):\r
        ans = 0\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
\r
        return ans\r
\r
    seen = {START_NODE}\r
\r
    return dfs(START_NODE)\r
`,D0=`def fn(graph):\r
    stack = [START_NODE]\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while stack:\r
        node = stack.pop()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                stack.append(neighbor)\r
\r
    return ans\r
`,z0=`from collections import deque\r
\r
\r
def fn(graph):\r
    que = deque([START_NODE])\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while que:\r
        node = que.popleft()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                que.append(neighbor)\r
\r
    return ans\r
`,B0=`from heapq import heappop, heappush\r
\r
\r
def dijkstras(graph: list[list[tuple[int, int]]], source: int) -> list[int]:\r
    n = len(graph)\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
    heap = [(0, source)]\r
\r
    while heap:\r
        curr_dist, node = heappop(heap)\r
\r
        if curr_dist > distances[node]:\r
            continue\r
\r
        for neighbor, weight in graph[node]:\r
            dist = curr_dist + weight\r
\r
            if dist < distances[neighbor]:\r
                distances[neighbor] = dist\r
                heappush(heap, (dist, neighbor))\r
\r
    return distances\r
`,F0=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
    distances = [float('inf')] * n\r
    distances[source] = 0\r
\r
    for _ in range(n - 1):\r
        for u, v, w in edges:\r
            if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
                distances[v] = distances[u] + w\r
\r
    for u, v, w in edges:\r
        if distances[u] != float('inf') and distances[u] + w < distances[v]:\r
            return []\r
\r
    return distances\r
`,U0=`from collections import defaultdict, deque\r
\r
\r
def kahn_topological_sort(graph: dict[int, list[int]]) -> list[int]:\r
    result = []\r
    indegree = defaultdict(int)\r
\r
    for vertices in graph.values():\r
        for v in vertices:\r
            indegree[v] += 1\r
\r
    que = deque([node for node in graph if not indegree[node]])\r
\r
    while que:\r
        node = que.popleft()\r
        result.append(node)\r
\r
        for neighbor in graph[node]:\r
            indegree[neighbor] -= 1\r
\r
            if not indegree[neighbor]:\r
                que.append(neighbor)\r
\r
    return result if len(result) == len(graph) else []\r
`,H0=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    for w, u, v in edges:\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,$0=`from heapq import heappop\r
\r
\r
def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
    mst = []\r
    uf = UnionFind(n)\r
    edges.sort()\r
\r
    while edges:\r
        w, u, v = heappop(edges)\r
\r
        if not uf.connected(u, v):\r
            uf.union(u, v)\r
            mst.append((w, u, v))\r
\r
    return mst\r
`,W0=`const fn = (graph) => {\r
    const dfs = (node) => {\r
        let ans = 0\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                ans += dfs(neighbor)\r
            }\r
        }\r
\r
        return ans\r
    }\r
\r
    let seen = new Set([START_NODE])\r
\r
    return dfs(START_NODE)\r
}\r
`,V0=`const fn = (graph) => {\r
    let stack = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (stack.length) {\r
        let node = stack.pop()\r
        // TODO: logic\r
        for (const neighbor of graph[node]) {\r
            if (!seen.has(neighbor)) {\r
                seen.add(neighbor)\r
                stack.push(neighbor)\r
            }\r
        }\r
    }\r
\r
    return ans\r
}\r
`,K0=`const fn = (graph) => {\r
    let que = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (que.length) {\r
        let currentLength = que.length\r
        let nextQue = []\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = que[i]\r
            // TODO: logic\r
            for (const neighbor of graph[node]) {\r
                if (!seen.has(neighbor)) {\r
                    seen.add(neighbor)\r
                    nextQue.push(neighbor)\r
                }\r
            }\r
        }\r
\r
        que = nextQue\r
    }\r
\r
    return ans\r
}\r
`,G0=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,J0=`const bellmanFord = (n, edges, source) => {\r
    let distances = new Array(n).fill(Infinity)\r
    distances[source] = 0\r
\r
    for (let i = 0; i < n - 1; i++) {\r
        for (let j = 0; j < edges.length; j++) {\r
            let [u, v, w] = edges[j]\r
\r
            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w\r
            }\r
        }\r
    }\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [u, v, w] = edges[i]\r
\r
        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {\r
            return []\r
        }\r
    }\r
\r
    return distances\r
}\r
`,Y0=`const kahnTopologicalSort = (graph) => {\r
    const result = []\r
    const queue = []\r
    const indegree = new Map()\r
\r
    for (let nodes of Object.values(graph)) {\r
        for (let node of nodes) {\r
            if (indegree.has(node)) {\r
                indegree.set(node, indegree.get(node) + 1)\r
            } else {\r
                indegree.set(node, 1)\r
            }\r
        }\r
    }\r
\r
    for (let node of Object.keys(graph)) {\r
        if (!indegree.has(node)) {\r
            queue.push(node)\r
        }\r
    }\r
\r
    while (queue.length > 0) {\r
        const node = queue.shift()\r
        result.push(node)\r
\r
        if (graph[node]) {\r
            for (let neighbor of graph[node]) {\r
                indegree.set(neighbor, indegree.get(neighbor) - 1)\r
\r
                if (indegree.get(neighbor) === 0) {\r
                    queue.push(neighbor)\r
                }\r
            }\r
        }\r
    }\r
\r
    return result.length === Object.keys(graph).length ? result : []\r
}\r
`,Q0=`const kruskalMst = (n, edges) => {\r
    let mst = []\r
    let uf = new UnionFind(n)\r
\r
    edges.sort((a, b) => a[0] - b[0])\r
\r
    for (let i = 0; i < edges.length; i++) {\r
        let [w, u, v] = edges[i]\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v)\r
            mst.push([w, u, v])\r
        }\r
    }\r
\r
    return mst\r
}\r
`,q0=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,X0=`import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
Set<Integer> seen = new HashSet<>();\r
\r
public int fn(int[][] graph) {\r
    seen.add(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
public int dfs(int node, int[][] graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (!seen.contains(neighbor)) {\r
            seen.add(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,Z0=`import java.util.Stack;\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Stack<Integer> stack = new Stack<>();\r
    Set<Integer> seen = new HashSet<>();\r
    stack.push(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,nv=`import java.util.ArrayList;\r
import java.util.HashSet;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
import java.util.Set;\r
\r
\r
public int fn(int[][] graph) {\r
    Queue<Integer> que = new LinkedList<>();\r
    Set<Integer> seen = new HashSet<>();\r
    que.offer(START_NODE);\r
    seen.add(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.isEmpty()) {\r
        int node = que.remove();\r
        // TODO: Logic\r
        for (int neighbor: graph[node]) {\r
            if (!seen.contains(neighbor)) {\r
                seen.add(neighbor);\r
                que.add(neighbor);\r
            }\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,rv=`import java.util.Arrays;\r
import java.util.Comparator;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
import java.util.List;\r
\r
\r
public int[] dijkstras(List<List<int[]>> graph, int source) {\r
    int n = graph.size();\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));\r
    pq.offer(new int[]{source, 0});\r
\r
    while (!pq.isEmpty()) {\r
        int[] curr = pq.poll();\r
        int node = curr[0];\r
        int dist = curr[1];\r
\r
        if (dist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (int[] edge : graph.get(node)) {\r
            int neighbor = edge[0];\r
            int weight = edge[1];\r
            int newDist = dist + weight;\r
\r
            if (newDist < distances[neighbor]) {\r
                distances[neighbor] = newDist;\r
                pq.offer(new int[]{neighbor, newDist});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,ev=`import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public int[] bellmanFord(int n, List<int[]> edges, int source) {\r
    int[] distances = new int[n];\r
    Arrays.fill(distances, Integer.MAX_VALUE);\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; i++) {\r
        for (int[] edge : edges) {\r
            int u = edge[0];\r
            int v = edge[1];\r
            int w = edge[2];\r
\r
            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (int[] edge : edges) {\r
        int u = edge[0];\r
        int v = edge[1];\r
        int w = edge[2];\r
\r
        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {\r
            return new int[]{};\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,tv=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.LinkedList;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.Queue;\r
\r
\r
public static List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {\r
    List<Integer> result = new ArrayList<>();\r
    Map<Integer, Integer> indegree = new HashMap<>();\r
    Queue<Integer> que = new LinkedList<>();\r
\r
    for (List<Integer> vertices : graph.values()) {\r
        for (int v : vertices) {\r
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);\r
        }\r
    }\r
\r
    for (Integer node : graph.keySet()) {\r
        if (!indegree.containsKey(node)) {\r
            que.offer(node);\r
        }\r
    }\r
\r
    while (!que.isEmpty()) {\r
        int node = que.poll();\r
        result.add(node);\r
\r
        if (graph.containsKey(node)) {\r
            for (int neighbor : graph.get(node)) {\r
                indegree.put(neighbor, indegree.get(neighbor) - 1);\r
\r
                if (indegree.get(neighbor) == 0) {\r
                    que.offer(neighbor);\r
                }\r
            }\r
        }\r
    }\r
\r
    if (result.size() != graph.size()) {\r
        return new ArrayList<>();\r
    }\r
\r
    return result;\r
}\r
`,iv=`import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public List<int[]> kruskalMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    Collections.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));\r
\r
    for (int[] edge : edges) {\r
        int weight = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,av=`import java.util.ArrayList;\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.PriorityQueue;\r
\r
\r
public List<int[]> primMST(int n, List<int[]> edges) {\r
    List<int[]> mst = new ArrayList<>();\r
    UnionFind uf = new UnionFind(n);\r
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));\r
\r
    for (int[] edge : edges) {\r
        pq.offer(edge);\r
    }\r
\r
    while (!pq.isEmpty()) {\r
        int[] edge = pq.poll();\r
        int w = edge[0];\r
        int u = edge[1];\r
        int v = edge[2];\r
\r
        if (!uf.connected(u, v)) {\r
            uf.union(u, v);\r
            mst.add(edge);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,ov=`#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
unordered_set<int> seen;\r
\r
int fn(vector<vector<int>>& graph) {\r
    seen.insert(START_NODE);\r
    return dfs(START_NODE, graph);\r
}\r
\r
int dfs(int node, vector<vector<int>>& graph) {\r
    int ans = 0;\r
    // TODO: logic\r
    for (int neighbor: graph[node]) {\r
        if (seen.find(neighbor) == seen.end()) {\r
            seen.insert(neighbor);\r
            ans += dfs(neighbor, graph);\r
        }\r
    }\r
\r
    return ans;\r
}\r
`,sv=`#include <stack>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    stack<int> stack;\r
    unordered_set<int> seen;\r
    stack.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!stack.empty()) {\r
        int node = stack.top();\r
        stack.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                stack.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,lv=`#include <queue>\r
#include <unordered_set>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<vector<int>>& graph) {\r
    queue<int> que;\r
    unordered_set<int> seen;\r
    que.push(START_NODE);\r
    seen.insert(START_NODE);\r
    int ans = 0;\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        // TODO: logic\r
        for (int neighbor: graph[node]) {\r
            if (seen.find(neighbor) == seen.end()) {\r
                seen.insert(neighbor);\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
}\r
`,uv=`#include <limits>\r
#include <queue>\r
#include <utility>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int source) {\r
    int n = graph.size();\r
    vector<int> distances(n, INT_MAX);\r
    distances[source] = 0;\r
\r
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;\r
    heap.push({0, source});\r
\r
    while (!heap.empty()) {\r
        int currDist = heap.top().first;\r
        int node = heap.top().second;\r
        heap.pop();\r
\r
        if (currDist > distances[node]) {\r
            continue;\r
        }\r
\r
        for (pair<int, int> edge : graph[node]) {\r
            int neighbor = edge.first;\r
            int weight = edge.second;\r
            int dist = currDist + weight;\r
\r
            if (dist < distances[neighbor]) {\r
                distances[neighbor] = dist;\r
                heap.push({dist, neighbor});\r
            }\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,cv=`#include <vector>\r
#include <utility>\r
#include <limits>\r
\r
using namespace std;\r
\r
\r
vector<int> bellman_ford(int n, vector<pair<pair<int, int>, int>>& edges, int source) {\r
    vector<int> distances(n, numeric_limits<int>::max());\r
    distances[source] = 0;\r
\r
    for (int i = 0; i < n - 1; ++i) {\r
        for (const auto& edge : edges) {\r
            int u = edge.first.first;\r
            int v = edge.first.second;\r
            int w = edge.second;\r
\r
            if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
                distances[v] = distances[u] + w;\r
            }\r
        }\r
    }\r
\r
    for (const auto& edge : edges) {\r
        int u = edge.first.first;\r
        int v = edge.first.second;\r
        int w = edge.second;\r
\r
        if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {\r
            return vector<int>();\r
        }\r
    }\r
\r
    return distances;\r
}\r
`,dv=`#include <vector>\r
#include <unordered_map>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> kahn_topological_sort(unordered_map<int, vector<int>>& graph) {\r
    vector<int> result;\r
    unordered_map<int, int> indegree;\r
\r
    for (auto& [node, neighbors] : graph) {\r
        for (int neighbor : neighbors) {\r
            indegree[neighbor]++;\r
        }\r
    }\r
\r
    queue<int> que;\r
\r
    for (auto& [node, _] : graph) {\r
        if (indegree[node] == 0) {\r
            que.push(node);\r
        }\r
    }\r
\r
    while (!que.empty()) {\r
        int node = que.front();\r
        que.pop();\r
        result.push_back(node);\r
\r
        for (int neighbor : graph[node]) {\r
            indegree[neighbor]--;\r
            if (indegree[neighbor] == 0) {\r
                que.push(neighbor);\r
            }\r
        }\r
    }\r
\r
    return (result.size() == graph.size()) ? result : vector<int>();\r
}\r
`,fv=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    sort(edges.begin(), edges.end());\r
\r
    for (auto& [w, u, v] : edges) {\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,pv=`#include <vector>\r
#include <queue>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<tuple<int, int, int>> prim_mst(int n, vector<tuple<int, int, int>>& edges) {\r
    vector<tuple<int, int, int>> mst;\r
    UnionFind uf(n);\r
    make_heap(edges.begin(), edges.end());\r
\r
    while (!edges.empty()) {\r
        auto [w, u, v] = edges.front();\r
        pop_heap(edges.begin(), edges.end());\r
        edges.pop_back();\r
\r
        if (!uf.connected(u, v)) {\r
            uf.unionNodes(u, v);\r
            mst.emplace_back(w, u, v);\r
        }\r
    }\r
\r
    return mst;\r
}\r
`,hv=`require 'set'\r
\r
def fn(graph)\r
  seen = Set.new([START_NODE])\r
\r
  dfs = lambda do |node|\r
    ans = 0\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        ans += dfs.call(neighbor)\r
      end\r
    end\r
    ans\r
  end\r
\r
  dfs.call(START_NODE)\r
end\r
`,gv=`require 'set'\r
\r
def fn(graph)\r
  stack = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until stack.empty?\r
    node = stack.pop\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        stack << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,mv=`require 'set'\r
\r
def fn(graph)\r
  queue = [START_NODE]\r
  seen  = Set.new([START_NODE])\r
  ans   = 0\r
\r
  until queue.empty?\r
    node = queue.shift\r
    # TODO: logic\r
    graph[node].each do |neighbor|\r
      unless seen.include?(neighbor)\r
        seen.add(neighbor)\r
        queue << neighbor\r
      end\r
    end\r
  end\r
\r
  ans\r
end\r
`,vv=`require 'priority_queue'\r
\r
def dijkstras(graph, source)\r
  n         = graph.size\r
  distances = Array.new(n, Float::INFINITY)\r
\r
  distances[source] = 0\r
\r
  heap = PriorityQueue.new\r
  heap[source] = 0\r
\r
  until heap.empty?\r
    node, curr_dist = heap.delete_min\r
    next if curr_dist > distances[node]\r
\r
    graph[node].each do |neighbor, weight|\r
      dist = curr_dist + weight\r
      if dist < distances[neighbor]\r
        distances[neighbor] = dist\r
        heap[neighbor] = dist\r
      end\r
    end\r
  end\r
\r
  distances\r
end\r
`,yv=`def bellman_ford(n, edges, source)\r
  distances         = Array.new(n, Float::INFINITY)\r
  distances[source] = 0\r
\r
  (n - 1).times do\r
    edges.each do |u, v, w|\r
      if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
        distances[v] = distances[u] + w\r
      end\r
    end\r
  end\r
\r
  edges.each do |u, v, w|\r
    if distances[u] != Float::INFINITY && distances[u] + w < distances[v]\r
      return []\r
    end\r
  end\r
\r
  distances\r
end\r
`,xv=`def kahn_topological_sort(graph)\r
  result    = []\r
  indegree  = Hash.new(0)\r
\r
  graph.each_value do |vertices|\r
    vertices.each do |v|\r
      indegree[v] += 1\r
    end\r
  end\r
\r
  queue = graph.keys.select { |node| indegree[node] == 0 }\r
\r
  until queue.empty?\r
    node = queue.shift\r
    result << node\r
\r
    graph[node].each do |neighbor|\r
      indegree[neighbor] -= 1\r
      queue << neighbor if indegree[neighbor] == 0\r
    end\r
  end\r
\r
  result.size == graph.size ? result : []\r
end\r
`,_v=`def kruskal_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`,bv=`def prim_mst(n, edges)\r
  mst = []\r
  uf  = UnionFind.new(n)\r
  edges.sort.each do |w, u, v|\r
    unless uf.connected(u, v)\r
      uf.union(u, v)\r
      mst << [w, u, v]\r
    end\r
  end\r
\r
  mst\r
end\r
`;function wv(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Graph"}),i.jsx("section",{id:"graph-dfs-recursive",children:i.jsxs(u,{title:"DFS (recursive)",children:[i.jsx(u.Tab,{code:I0,language:"python"}),i.jsx(u.Tab,{code:W0,language:"javascript"}),i.jsx(u.Tab,{code:X0,language:"java"}),i.jsx(u.Tab,{code:ov,language:"cpp"}),i.jsx(u.Tab,{code:hv,language:"ruby"})]})}),i.jsx("section",{id:"graph-dfs-iterative",children:i.jsxs(u,{title:"DFS (iterative)",children:[i.jsx(u.Tab,{code:D0,language:"python"}),i.jsx(u.Tab,{code:V0,language:"javascript"}),i.jsx(u.Tab,{code:Z0,language:"java"}),i.jsx(u.Tab,{code:sv,language:"cpp"}),i.jsx(u.Tab,{code:gv,language:"ruby"})]})}),i.jsx("section",{id:"graph-bfs",children:i.jsxs(u,{title:"BFS",children:[i.jsx(u.Tab,{code:z0,language:"python"}),i.jsx(u.Tab,{code:K0,language:"javascript"}),i.jsx(u.Tab,{code:nv,language:"java"}),i.jsx(u.Tab,{code:lv,language:"cpp"}),i.jsx(u.Tab,{code:mv,language:"ruby"})]})}),i.jsx("section",{id:"graph-dijkstra",children:i.jsxs(u,{title:"Dijkstra (shortest path)",children:[i.jsx(u.Tab,{code:B0,language:"python"}),i.jsx(u.Tab,{code:G0,language:"javascript"}),i.jsx(u.Tab,{code:rv,language:"java"}),i.jsx(u.Tab,{code:uv,language:"cpp"}),i.jsx(u.Tab,{code:vv,language:"ruby"})]})}),i.jsx("section",{id:"graph-bellman-ford",children:i.jsxs(u,{title:"Bellman-Ford (shortest path)",children:[i.jsx(u.Tab,{code:F0,language:"python"}),i.jsx(u.Tab,{code:J0,language:"javascript"}),i.jsx(u.Tab,{code:ev,language:"java"}),i.jsx(u.Tab,{code:cv,language:"cpp"}),i.jsx(u.Tab,{code:yv,language:"ruby"})]})}),i.jsx("section",{id:"graph-kahn",children:i.jsxs(u,{title:"Kahn (topological sort)",children:[i.jsx(u.Tab,{code:U0,language:"python"}),i.jsx(u.Tab,{code:Y0,language:"javascript"}),i.jsx(u.Tab,{code:tv,language:"java"}),i.jsx(u.Tab,{code:dv,language:"cpp"}),i.jsx(u.Tab,{code:xv,language:"ruby"})]})}),i.jsx("section",{id:"graph-kruskal",children:i.jsxs(u,{title:"Kruskal (mst)",children:[i.jsx(u.Tab,{code:H0,language:"python"}),i.jsx(u.Tab,{code:Q0,language:"javascript"}),i.jsx(u.Tab,{code:iv,language:"java"}),i.jsx(u.Tab,{code:fv,language:"cpp"}),i.jsx(u.Tab,{code:_v,language:"ruby"})]})}),i.jsx("section",{id:"graph-prim",children:i.jsxs(u,{title:"Prim (mst)",children:[i.jsx(u.Tab,{code:$0,language:"python"}),i.jsx(u.Tab,{code:q0,language:"javascript"}),i.jsx(u.Tab,{code:av,language:"java"}),i.jsx(u.Tab,{code:pv,language:"cpp"}),i.jsx(u.Tab,{code:bv,language:"ruby"})]})})]})}const Tv=`from heapq import heappop, heappush\r
\r
\r
def fn(arr, k):\r
    heap = []\r
\r
    for num in arr:\r
        # TODO: logic to push onto heap according to problem's criteria\r
        heappush(heap, (CRITERIA, num))\r
\r
        if len(heap) > k:\r
            heappop(heap)\r
\r
    return [num for num in heap]\r
`,Sv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,jv=`import java.util.PriorityQueue;\r
\r
\r
public int[] fn(int[] arr, int k) {\r
    PriorityQueue<Integer> heap = new PriorityQueue<>(CRITERIA);\r
\r
    for (int num: arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        heap.add(num);\r
\r
        if (heap.size() > k) {\r
            heap.remove();\r
        }\r
    }\r
\r
    int[] ans = new int[k];\r
\r
    for (int i = 0; i < k; i++) {\r
        ans[i] = heap.remove();\r
    }\r
\r
    return ans;\r
}\r
`,kv=`#include <vector>\r
#include <queue>\r
\r
using namespace std;\r
\r
\r
vector<int> fn(vector<int>& arr, int k) {\r
    priority_queue<int, vector<int>, greater<int>> min_heap;\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        // TODO: logic to push onto heap according to problem's criteria\r
        min_heap.push(num);\r
\r
        if (min_heap.size() > k) {\r
            min_heap.pop();\r
        }\r
    }\r
\r
    while (!min_heap.empty()) {\r
        result.push_back(min_heap.top());\r
        min_heap.pop();\r
    }\r
\r
    return result;\r
}\r
`,Ev=`def fn(arr, k)\r
  heap = []\r
\r
  arr.each do |num|\r
    # TODO: logic to push onto heap according to problem's criteria\r
    heap.push([CRITERIA, num])\r
\r
    if heap.size > k\r
      # TODO: pop the top element from heap\r
      heap.pop\r
    end\r
  end\r
\r
  heap.map { |item| item[1] }\r
end\r
`;function Nv(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Heap"}),i.jsx("section",{id:"heap-find-top-k-elements",children:i.jsxs(u,{title:"find top k elements",children:[i.jsx(u.Tab,{code:Tv,language:"python"}),i.jsx(u.Tab,{code:Sv,language:"javascript"}),i.jsx(u.Tab,{code:jv,language:"java"}),i.jsx(u.Tab,{code:kv,language:"cpp"}),i.jsx(u.Tab,{code:Ev,language:"ruby"})]})})]})}const Ov=`def fn(arr, target):\r
    left = 0\r
    right = len(arr) - 1\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] == target:\r
            # TODO: logic\r
            return\r
        if arr[mid] > target:\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Av=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] >= target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Cv=`def fn(arr, target):\r
    left = 0\r
    right = len(arr)\r
\r
    while left < right:\r
        mid = (left + right) // 2\r
\r
        if arr[mid] > target:\r
            right = mid\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Lv=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            right = mid - 1\r
        else:\r
            left = mid + 1\r
\r
    return left\r
`,Rv=`def fn(arr):\r
    def check(x):\r
        return BOOLEAN\r
\r
    left = MINIMUM_POSSIBLE_ANSWER\r
    right = MAXIMUM_POSSIBLE_ANSWER\r
\r
    while left <= right:\r
        mid = (left + right) // 2\r
\r
        if check(mid):\r
            left = mid + 1\r
        else:\r
            right = mid - 1\r
\r
    return right\r
`,Pv=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length - 1\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return\r
        }\r
\r
        if (arr[mid] > target) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Mv=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] >= target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Iv=`const fn = (arr, target) => {\r
    let left = 0\r
    let right = arr.length\r
\r
    while (left < right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (arr[mid] > target) {\r
            right = mid\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,Dv=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            right = mid - 1\r
        } else {\r
            left = mid + 1\r
        }\r
    }\r
\r
    return left\r
}\r
`,zv=`const fn = (arr) => {\r
    const check = (x) => {\r
        return BOOLEAN\r
    }\r
\r
    let left = MINIMUM_POSSIBLE_ANSWER\r
    let right = MAXMIMUM_POSSIBLE_ANSWER\r
\r
    while (left <= right) {\r
        let mid = Math.floor((left + right) / 2)\r
\r
        if (check(mid)) {\r
            left = mid + 1\r
        } else {\r
            right = mid - 1\r
        }\r
    }\r
\r
    return right\r
}\r
`,Bv=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Fv=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Uv=`public int fn(int[] arr, int target) {\r
    int left = 0;\r
    int right = arr.length;\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Hv=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,$v=`public int fn(int[] arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
\r
public boolean check(int x) {\r
    return BOOLEAN\r
}\r
`,Wv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size() - 1;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] == target) {\r
            // TODO: logic\r
            return mid;\r
        }\r
        if (arr[mid] > target) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Vv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] >= target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Kv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int fn(vector<int>& arr, int target) {\r
    int left = 0;\r
    int right = arr.size();\r
\r
    while (left < right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (arr[mid] > target) {\r
            right = mid;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Gv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            right = mid - 1;\r
        } else {\r
            left = mid + 1;\r
        }\r
    }\r
\r
    return left;\r
}\r
`,Jv=`#include <vector>\r
\r
using namespace std;\r
\r
\r
bool check(int x) {\r
    return BOOLEAN;\r
}\r
\r
int fn(vector<int>& arr) {\r
    int left = MINIMUM_POSSIBLE_ANSWER;\r
    int right = MAXIMUM_POSSIBLE_ANSWER;\r
\r
    while (left <= right) {\r
        int mid = left + (right - left) / 2;\r
\r
        if (check(mid)) {\r
            left = mid + 1;\r
        } else {\r
            right = mid - 1;\r
        }\r
    }\r
\r
    return right;\r
}\r
`,Yv=`def fn(arr, target)\r
  left  = 0\r
  right = arr.length - 1\r
\r
  while left <= right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] == target\r
      # TODO: logic\r
      return\r
    elsif arr[mid] > target\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,Qv=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] >= target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,qv=`def fn(arr, target)\r
  left  = 0\r
  right = len(arr)\r
\r
  while left < right\r
    mid = (left + right) / 2\r
\r
    if arr[mid] > target\r
      right = mid\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
`,Xv=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # int div\r
\r
    if check(mid)\r
      right = mid - 1\r
    else\r
      left = mid + 1\r
    end\r
  end\r
\r
  left\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end`,Zv=`def fn(arr)\r
  left  = MINIMUM_POSSIBLE_ANSWER\r
  right = MAXIMUM_POSSIBLE_ANSWER\r
\r
  while left <= right\r
    mid = (left + right) / 2 # integer division\r
\r
    if check(mid)\r
      left = mid + 1\r
    else\r
      right = mid - 1\r
    end\r
\r
  end\r
\r
  right\r
end\r
\r
def check(x)\r
  BOOLEAN\r
end\r
`;function ny(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Binary Search"}),i.jsx("section",{id:"binarysearch-binary-search",children:i.jsxs(u,{title:"binary search",children:[i.jsx(u.Tab,{code:Ov,language:"python"}),i.jsx(u.Tab,{code:Pv,language:"javascript"}),i.jsx(u.Tab,{code:Bv,language:"java"}),i.jsx(u.Tab,{code:Wv,language:"cpp"}),i.jsx(u.Tab,{code:Yv,language:"ruby"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:i.jsxs(u,{title:"duplicate elements, left-most insertion point",children:[i.jsx(u.Tab,{code:Av,language:"python"}),i.jsx(u.Tab,{code:Mv,language:"javascript"}),i.jsx(u.Tab,{code:Fv,language:"java"}),i.jsx(u.Tab,{code:Vv,language:"cpp"}),i.jsx(u.Tab,{code:Qv,language:"ruby"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:i.jsxs(u,{title:"duplicate elements, right-most insertion point",children:[i.jsx(u.Tab,{code:Cv,language:"python"}),i.jsx(u.Tab,{code:Iv,language:"javascript"}),i.jsx(u.Tab,{code:Uv,language:"java"}),i.jsx(u.Tab,{code:Kv,language:"cpp"}),i.jsx(u.Tab,{code:qv,language:"ruby"})]})}),i.jsx("section",{id:"binarysearch-greedy-minimum",children:i.jsxs(u,{title:"greedy (minimum)",children:[i.jsx(u.Tab,{code:Lv,language:"python"}),i.jsx(u.Tab,{code:Dv,language:"javascript"}),i.jsx(u.Tab,{code:Hv,language:"java"}),i.jsx(u.Tab,{code:Gv,language:"cpp"}),i.jsx(u.Tab,{code:Xv,language:"ruby"})]})}),i.jsx("section",{id:"binarysearch-greedy-maximum",children:i.jsxs(u,{title:"greedy (maximum)",children:[i.jsx(u.Tab,{code:Rv,language:"python"}),i.jsx(u.Tab,{code:zv,language:"javascript"}),i.jsx(u.Tab,{code:$v,language:"java"}),i.jsx(u.Tab,{code:Jv,language:"cpp"}),i.jsx(u.Tab,{code:Zv,language:"ruby"})]})})]})}const ry=`def backtrack(curr, OTHER_ARGUMENTS...):\r
    if (BASE_CASE):\r
        # TODO: modify answer\r
        return\r
\r
    ans = 0\r
\r
    for (ITERATE_OVER_INPUT):\r
        # TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        # TODO: undo modification of current state\r
\r
    return ans\r
`,ey=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return\r
    }\r
\r
    let ans = 0\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...)\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans\r
}\r
`,ty=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,iy=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
    if (BASE_CASE) {\r
        // TODO: modify answer\r
        return 0;\r
    }\r
\r
    int ans = 0;\r
\r
    for (ITERATE_OVER_INPUT) {\r
        // TODO: modify current state\r
        ans += backtrack(curr, OTHER_ARGUMENTS...);\r
        // TODO: undo modification of current state\r
    }\r
\r
    return ans;\r
}\r
`,ay=`def backtrack(curr, OTHER_ARGUMENTS...)\r
  if(BASE_CASE)\r
    # TODO: modify answer\r
    return\r
  end\r
\r
  ans = 0\r
\r
  INPUTS.each do |i|\r
    # TODO: modify current state\r
    ans += backtrack(curr, OTHER_ARGUMENTS...)\r
    # TODO: undo modification of current state\r
  end\r
\r
  ans\r
end\r
`;function oy(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Backtracking"}),i.jsx("section",{id:"backtracking-backtracking",children:i.jsxs(u,{title:"backtracking",children:[i.jsx(u.Tab,{code:ry,language:"python"}),i.jsx(u.Tab,{code:ey,language:"javascript"}),i.jsx(u.Tab,{code:ty,language:"java"}),i.jsx(u.Tab,{code:iy,language:"cpp"}),i.jsx(u.Tab,{code:ay,language:"ruby"})]})})]})}const sy=`def fn(arr):\r
    @cache\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
        return RECURRENCE_RELATION(STATE)\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,ly=`def fn(arr):\r
    if BASE_CASE:\r
        return 0\r
\r
    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)\r
\r
    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):\r
        if BASE_CASE:\r
            dp[STATE] = BASE_CASE\r
        else:\r
            dp[STATE] = RECURRENCE_RELATION(STATE)\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
`,uy=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,cy=`const fn = (arr) => {\r
    const dp = (STATE) => {\r
        if (BASE_CASE) {\r
            return 0\r
        }\r
\r
        if (memo[STATE] != -1) {\r
            return memo[STATE]\r
        }\r
\r
        let ans = RECURRENCE_RELATION(STATE)\r
        memo[STATE] = ans\r
\r
        return ans\r
    }\r
\r
    let memo = ARRAY_SIZED_ACCORDING_TO_STATE\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
}\r
`,dy=`const fn = (arr) => {\r
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)\r
\r
    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state)\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT]\r
}\r
`,fy=`const kadane = (arr) => {\r
    let currSub = arr[0]\r
    let maxSub = arr[0]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i])\r
        maxSub = Math.max(maxSub, currSub)\r
    }\r
\r
    return maxSub\r
}\r
`,py=`import java.util.HashMap;\r
import java.util.Map;\r
\r
\r
Map<STATE, Integer> memo = new HashMap<>();\r
\r
public int fn(int[] arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
public int dp(STATE, int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.contains(STATE)) {\r
        return memo.get(STATE);\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo.put(STATE, ans);\r
    return ans;\r
}\r
`,hy=`import java.util.Arrays;\r
\r
\r
public int fn(int[] arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];\r
    Arrays.fill(dp, BASE_CASE);\r
\r
    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {\r
        if (BASE_CASE) {\r
            dp[STATE] = BASE_CASE;\r
        } else {\r
            dp[STATE] = RECURRENCE_RELATION(STATE);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,gy=`public int kadane(int[] arr) {\r
    int currSub = arr[0];\r
    int maxSub = arr[0];\r
\r
    for (int i = 1; i < arr.length; i++) {\r
        currSub = Math.max(currSub + arr[i], arr[i]);\r
        maxSub = Math.max(maxSub, currSub);\r
    }\r
\r
    return maxSub;\r
}\r
`,my=`#include <unordered_map>\r
\r
using namespace std;\r
\r
\r
unordered_map<STATE, int> memo;\r
\r
int fn(vector<int>& arr) {\r
    return dp(STATE_FOR_WHOLE_INPUT, arr);\r
}\r
\r
int dp(STATE, vector<int>& arr) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    if (memo.find(STATE) != memo.end()) {\r
        return memo[STATE];\r
    }\r
\r
    int ans = RECURRENCE_RELATION(STATE);\r
    memo[STATE] = ans;\r
    return ans;\r
}\r
`,vy=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int fn(int arr[], int size) {\r
    if (BASE_CASE) {\r
        return 0;\r
    }\r
\r
    vector<int> dp(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE);\r
\r
    for (int state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; ++state) {\r
        if (BASE_CASE) {\r
            dp[state] = BASE_CASE;\r
        } else {\r
            dp[state] = RECURRENCE_RELATION(state);\r
        }\r
    }\r
\r
    return dp[STATE_FOR_WHOLE_INPUT];\r
}\r
`,yy=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
int kadane(vector<int>& arr) {\r
    int curr_sub = arr[0];\r
    int max_sub = arr[0];\r
\r
    for (size_t i = 1; i < arr.size(); ++i) {\r
        curr_sub = max(curr_sub + arr[i], arr[i]);\r
        max_sub = max(max_sub, curr_sub);\r
    }\r
\r
    return max_sub;\r
}\r
`,xy=`def fn(arr)\r
  cache = {}\r
\r
  dp = lambda do |state|\r
    return 0 if BASE_CASE\r
    return cache[state] if cache.key?(state)\r
\r
    cache[state] = RECURRENCE_RELATION(state)\r
  end\r
\r
  dp.call(STATE_FOR_WHOLE_INPUT)\r
end\r
`,_y=`def fn(arr)\r
  if BASE_CASE\r
    return 0\r
  end\r
\r
  dp = Array.new(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE)\r
\r
  (SMALLEST_SUBPROBLEM..STATE_FOR_WHOLE_INPUT).each do |state|\r
    if BASE_CASE\r
      dp[state] = BASE_CASE\r
    else\r
      dp[state] = RECURRENCE_RELATION(state)\r
    end\r
  end\r
\r
  dp[STATE_FOR_WHOLE_INPUT]\r
end\r
`,by=`def kadane(arr)\r
  curr_sub  = arr[0]\r
  max_sub   = arr[0]\r
\r
  arr[1..-1].each do |num|\r
    curr_sub = [curr_sub + num, num].max\r
    max_sub = [max_sub, curr_sub].max\r
  end\r
\r
  max_sub\r
end\r
`;function wy(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Dynamic Programming"}),i.jsx("section",{id:"dp-top-down",children:i.jsxs(u,{title:"DP top-down",children:[i.jsx(u.Tab,{code:sy,language:"python"}),i.jsx(u.Tab,{code:cy,language:"javascript"}),i.jsx(u.Tab,{code:py,language:"java"}),i.jsx(u.Tab,{code:my,language:"cpp"}),i.jsx(u.Tab,{code:xy,language:"ruby"})]})}),i.jsx("section",{id:"dp-bottom-up",children:i.jsxs(u,{title:"DP bottom-up",children:[i.jsx(u.Tab,{code:ly,language:"python"}),i.jsx(u.Tab,{code:dy,language:"javascript"}),i.jsx(u.Tab,{code:hy,language:"java"}),i.jsx(u.Tab,{code:vy,language:"cpp"}),i.jsx(u.Tab,{code:_y,language:"ruby"})]})}),i.jsx("section",{id:"dp-kadane",children:i.jsxs(u,{title:"Kadane (max-sum subarray)",children:[i.jsx(u.Tab,{code:uy,language:"python"}),i.jsx(u.Tab,{code:fy,language:"javascript"}),i.jsx(u.Tab,{code:gy,language:"java"}),i.jsx(u.Tab,{code:yy,language:"cpp"}),i.jsx(u.Tab,{code:by,language:"ruby"})]})})]})}const Ty=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,Sy=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,jy=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,ky=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,Ey=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,Ny=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,Oy=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,Ay=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,Cy=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,Ly=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,Ry=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,Py=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,My=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,Iy=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,Dy=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,zy=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,By=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,Fy=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,Uy=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,Hy=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,$y=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,Wy=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,Vy=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,Ky=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,Gy=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,Jy=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,Yy=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,Qy=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,qy=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,Xy=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,Zy=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,nx=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,rx=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,ex=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,tx=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,ix=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,ax=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,ox=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,sx=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,lx=`#include <tuple>\r
\r
using namespace std;\r
\r
\r
tuple<int, int> swap_variables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return std::make_tuple(num1, num2);\r
}\r
`,ux=`def test_kth_bit(num, k)\r
  num & (1 << k) != 0\r
end\r
`,cx=`def set_kth_bit(num, k)\r
  num | (1 << k)\r
end\r
`,dx=`def clear_kth_bit(num, k)\r
  num & ~(1 << k)\r
end\r
`,fx=`def toggle_kth_bit(num, k)\r
  num ^ (1 << k)\r
end\r
`,px=`def get_rightmost_set_bit(num)\r
  num & -num\r
end\r
`,hx=`def count_set_bits(num)\r
  num.to_s(2).count('1')\r
end\r
`,gx=`def multiply_by_power_of_two(num, k)\r
  num << k\r
end\r
`,mx=`def divide_by_power_of_two(num, k)\r
  num >> k\r
end\r
`,vx=`def is_power_of_two(num)\r
  (num & (num - 1)) == 0\r
end\r
`,yx=`# in-memory swaps\r
# unnecessary for modern languages\r
def swap_variables(num1, num2)\r
  num1 ^= num2\r
  num2 ^= num1\r
  num1 ^= num2\r
\r
  return num1, num2\r
end\r
`;function xx(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Bit Manipulation"}),i.jsx("section",{id:"bitmanipulation-test-kth-bit",children:i.jsxs(u,{title:"test kth-bit",children:[i.jsx(u.Tab,{code:Ty,language:"python"}),i.jsx(u.Tab,{code:Ry,language:"javascript"}),i.jsx(u.Tab,{code:$y,language:"java"}),i.jsx(u.Tab,{code:Zy,language:"cpp"}),i.jsx(u.Tab,{code:ux,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-set-kth-bit",children:i.jsxs(u,{title:"set kth bit",children:[i.jsx(u.Tab,{code:Sy,language:"python"}),i.jsx(u.Tab,{code:Py,language:"javascript"}),i.jsx(u.Tab,{code:Wy,language:"java"}),i.jsx(u.Tab,{code:nx,language:"cpp"}),i.jsx(u.Tab,{code:cx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:i.jsxs(u,{title:"clear kth bit",children:[i.jsx(u.Tab,{code:jy,language:"python"}),i.jsx(u.Tab,{code:My,language:"javascript"}),i.jsx(u.Tab,{code:Vy,language:"java"}),i.jsx(u.Tab,{code:rx,language:"cpp"}),i.jsx(u.Tab,{code:dx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:i.jsxs(u,{title:"toggle kth bit",children:[i.jsx(u.Tab,{code:ky,language:"python"}),i.jsx(u.Tab,{code:Iy,language:"javascript"}),i.jsx(u.Tab,{code:Ky,language:"java"}),i.jsx(u.Tab,{code:ex,language:"cpp"}),i.jsx(u.Tab,{code:fx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:i.jsxs(u,{title:"get rightmost bit",children:[i.jsx(u.Tab,{code:Ey,language:"python"}),i.jsx(u.Tab,{code:Dy,language:"javascript"}),i.jsx(u.Tab,{code:Gy,language:"java"}),i.jsx(u.Tab,{code:tx,language:"cpp"}),i.jsx(u.Tab,{code:px,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-count-set-bits",children:i.jsxs(u,{title:"count set bits",children:[i.jsx(u.Tab,{code:Ny,language:"python"}),i.jsx(u.Tab,{code:zy,language:"javascript"}),i.jsx(u.Tab,{code:Jy,language:"java"}),i.jsx(u.Tab,{code:ix,language:"cpp"}),i.jsx(u.Tab,{code:hx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:i.jsxs(u,{title:"multiply by 2^k",children:[i.jsx(u.Tab,{code:Oy,language:"python"}),i.jsx(u.Tab,{code:By,language:"javascript"}),i.jsx(u.Tab,{code:Yy,language:"java"}),i.jsx(u.Tab,{code:ax,language:"cpp"}),i.jsx(u.Tab,{code:gx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:i.jsxs(u,{title:"divide by 2^k",children:[i.jsx(u.Tab,{code:Ay,language:"python"}),i.jsx(u.Tab,{code:Fy,language:"javascript"}),i.jsx(u.Tab,{code:Qy,language:"java"}),i.jsx(u.Tab,{code:ox,language:"cpp"}),i.jsx(u.Tab,{code:mx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-check-power-of-two",children:i.jsxs(u,{title:"check if number is power of 2",children:[i.jsx(u.Tab,{code:Cy,language:"python"}),i.jsx(u.Tab,{code:Uy,language:"javascript"}),i.jsx(u.Tab,{code:qy,language:"java"}),i.jsx(u.Tab,{code:sx,language:"cpp"}),i.jsx(u.Tab,{code:vx,language:"ruby"})]})}),i.jsx("section",{id:"bitmanipulation-swap-variables",children:i.jsxs(u,{title:"swap two variables",children:[i.jsx(u.Tab,{code:Ly,language:"python"}),i.jsx(u.Tab,{code:Hy,language:"javascript"}),i.jsx(u.Tab,{code:Xy,language:"java"}),i.jsx(u.Tab,{code:lx,language:"cpp"}),i.jsx(u.Tab,{code:yx,language:"ruby"})]})})]})}const _x=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,bx=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,wx=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,Tx=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,Sx=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,jx=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,kx=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> createMatrix = new ArrayList<>();\r
    List<List<Integer>> copyMatrix = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < r; i++) {\r
        List<Integer> row = new ArrayList<>();\r
\r
        for (int j = 0; j < c; j++) {\r
            row.add(0);\r
        }\r
\r
        createMatrix.add(row);\r
    }\r
\r
    for (List<Integer> row : matrix) {\r
        copyMatrix.add(new ArrayList<>(row));\r
    }\r
}\r
`,Ex=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public void fn(List<List<Integer>> matrix) {\r
    List<Integer> mainDiagonal = new ArrayList<>();\r
    List<Integer> antiDiagonal = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        mainDiagonal.add(matrix.get(i).get(i));\r
    }\r
\r
    for (int i = 0; i < Math.min(r, c); i++) {\r
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));\r
    }\r
}\r
`,Nx=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static void fn(List<List<Integer>> matrix) {\r
    List<List<Integer>> transpose = new ArrayList<>();\r
    List<List<Integer>> rotateLeft = new ArrayList<>();\r
    List<List<Integer>> rotateRight = new ArrayList<>();\r
    int r = matrix.size();\r
    int c = matrix.get(0).size();\r
\r
    for (int j = 0; j < c; j++) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = 0; i < r; i++) {\r
            newRow.add(matrix.get(i).get(j));\r
        }\r
\r
        transpose.add(newRow);\r
    }\r
\r
    for (int i = transpose.size() - 1; i >= 0; i--) {\r
        rotateLeft.add(transpose.get(i));\r
    }\r
\r
    for (List<Integer> row : transpose) {\r
        List<Integer> newRow = new ArrayList<>();\r
\r
        for (int i = row.size() - 1; i >= 0; i--) {\r
            newRow.add(row.get(i));\r
        }\r
\r
        rotateRight.add(newRow);\r
    }\r
}\r
`,Ox=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<vector<int>> create_matrix(r, vector<int>(c, 0));\r
    vector<vector<int>> copy_matrix(matrix);\r
}\r
`,Ax=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
\r
    vector<int> main_diagonal;\r
    vector<int> anti_diagonal;\r
\r
    for (int i = 0; i < min(r, c); ++i) {\r
        main_diagonal.push_back(matrix[i][i]);\r
        anti_diagonal.push_back(matrix[i][c - i - 1]);\r
    }\r
}\r
`,Cx=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void fn(vector<vector<int>>& matrix) {\r
    int r = matrix.size();\r
    int c = matrix[0].size();\r
    vector<vector<int>> transpose(c, vector<int>(r));\r
    vector<vector<int>> rotate_left(c, vector<int>(r));\r
    vector<vector<int>> rotate_right(c, vector<int>(r));\r
\r
    for (int i = 0; i < r; ++i) {\r
        for (int j = 0; j < c; ++j) {\r
            transpose[j][i] = matrix[i][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_left[i][j] = transpose[c - i - 1][j];\r
        }\r
    }\r
\r
    for (int i = 0; i < c; ++i) {\r
        for (int j = 0; j < r; ++j) {\r
            rotate_right[i][j] = transpose[i][r - j - 1];\r
        }\r
    }\r
}\r
`,Lx=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  create_matrix = Array.new(r) { Array.new(c, 0) }\r
  copy_matrix = matrix.map(&:dup)\r
end\r
`,Rx=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }\r
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }\r
end\r
`,Px=`def fn(matrix)\r
  r = matrix.size\r
  c = matrix[0].size\r
\r
  transpose = matrix[0].zip(*matrix[1..-1])\r
  rotate_left = transpose.reverse\r
  rotate_right = transpose.map(&:reverse)\r
end\r
`;function Mx(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Matrix"}),i.jsx("section",{id:"matrix-create-copy",children:i.jsxs(u,{title:"create / copy",children:[i.jsx(u.Tab,{code:_x,language:"python"}),i.jsx(u.Tab,{code:Tx,language:"javascript"}),i.jsx(u.Tab,{code:kx,language:"java"}),i.jsx(u.Tab,{code:Ox,language:"cpp"}),i.jsx(u.Tab,{code:Lx,language:"ruby"})]})}),i.jsx("section",{id:"matrix-diagonals",children:i.jsxs(u,{title:"diagonals / anti-diagonals",children:[i.jsx(u.Tab,{code:bx,language:"python"}),i.jsx(u.Tab,{code:Sx,language:"javascript"}),i.jsx(u.Tab,{code:Ex,language:"java"}),i.jsx(u.Tab,{code:Ax,language:"cpp"}),i.jsx(u.Tab,{code:Rx,language:"ruby"})]})}),i.jsx("section",{id:"matrix-rotate-transpose",children:i.jsxs(u,{title:"rotate / transpose",children:[i.jsx(u.Tab,{code:wx,language:"python"}),i.jsx(u.Tab,{code:jx,language:"javascript"}),i.jsx(u.Tab,{code:Nx,language:"java"}),i.jsx(u.Tab,{code:Cx,language:"cpp"}),i.jsx(u.Tab,{code:Px,language:"ruby"})]})})]})}const Ix=`from typing import Any\r
\r
\r
class Array:\r
    def __init__(self, size: int) -> None:\r
        self.size = size\r
        self.data = [None] * size\r
\r
    def __getitem__(self, index: int) -> Any:\r
        return self.data[index]\r
\r
    def __setitem__(self, index: int, value: Any) -> None:\r
        self.data[index] = value\r
\r
    def __len__(self) -> int:\r
        return len(self.data)\r
\r
    def __repr__(self) -> str:\r
        return repr(self.data)\r
`,Dx=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinaryTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> TreeNode:\r
        if not node:\r
            return TreeNode(data)\r
\r
        if not node.left:\r
            node.left = TreeNode(data)\r
        elif not node.right:\r
            node.right = TreeNode(data)\r
        else:\r
            node.left = self.insert_node(node.left, data)\r
\r
        return node\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,zx=`from typing import Any\r
\r
\r
class TreeNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.left = None\r
        self.right = None\r
\r
\r
class BinarySearchTree:\r
    def __init__(self) -> None:\r
        self.root = None\r
\r
    def insert(self, data: Any) -> None:\r
        if not self.root:\r
            self.root = TreeNode(data)\r
        else:\r
            self.insert_node(self.root, data)\r
\r
    def insert_node(self, node: TreeNode | None, data: Any) -> None:\r
        if data < node.data:\r
            if not node.left:\r
                node.left = TreeNode(data)\r
            else:\r
                self.insert_node(node.left, data)\r
        else:\r
            if not node.right:\r
                node.right = TreeNode(data)\r
            else:\r
                self.insert_node(node.right, data)\r
\r
    def __repr__(self) -> str:\r
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)\r
\r
    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:\r
        if node is None:\r
            return ''\r
\r
        result = ''\r
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)\r
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'\r
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)\r
\r
        return result\r
`,Bx=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class LinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        curr.next = ListNode(data)\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            return\r
\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            if curr.data == data:\r
                prev.next = curr.next\r
                return\r
\r
            prev = curr\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        prev = None\r
        curr = self.head\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        node = self.head\r
\r
        while node:\r
            nodes.append(repr(node))\r
            node = node.next\r
\r
        return ' -> '.join(nodes) + ' -> None'\r
`,Fx=`from typing import Any\r
\r
\r
class ListNode:\r
    def __init__(self, data: Any) -> None:\r
        self.data = data\r
        self.prev = None\r
        self.next = None\r
\r
    def __repr__(self) -> str:\r
        return f'[{self.data}]'\r
\r
\r
class DoublyLinkedList:\r
    def __init__(self) -> None:\r
        self.head = None\r
\r
    def append(self, data: Any) -> None:\r
        if not self.head:\r
            self.head = ListNode(data)\r
            return\r
\r
        curr = self.head\r
\r
        while curr.next:\r
            curr = curr.next\r
\r
        new_node = ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
\r
    def delete(self, data: Any) -> None:\r
        if not self.head:\r
            return\r
\r
        if self.head.data == data:\r
            self.head = self.head.next\r
            if self.head:\r
                self.head.prev = None\r
            return\r
\r
        curr = self.head\r
        while curr:\r
            if curr.data == data:\r
                prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if curr.next:\r
                    curr.next.prev = prev_node\r
                return\r
            curr = curr.next\r
\r
    def reverse(self) -> None:\r
        curr = self.head\r
        prev = None\r
\r
        while curr:\r
            nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
\r
        self.head = prev\r
\r
    def __repr__(self) -> str:\r
        if not self.head:\r
            return 'None'\r
\r
        nodes = []\r
        curr = self.head\r
\r
        while curr:\r
            nodes.append(repr(curr))\r
            curr = curr.next\r
\r
        return ' <-> '.join(nodes) + ' <-> None'\r
`,Ux=`class Graph:\r
    def __init__(self) -> None:\r
        self.graph = {}\r
\r
    def add_vertex(self, vertex: str) -> None:\r
        if vertex not in self.graph:\r
            self.graph[vertex] = []\r
\r
    def add_edge(self, a: str, b: str) -> None:\r
        self.add_vertex(a)\r
        self.add_vertex(b)\r
        self.graph[a].append(b)\r
        self.graph[b].append(a)\r
\r
    def get_neighbors(self, vertex: str) -> list[str]:\r
        return self.graph.get(vertex, [])\r
\r
    def __repr__(self) -> str:\r
        output = ''\r
\r
        for vertex, neighbors in self.graph.items():\r
            output += f'{vertex} - {' - '.join(neighbors)}\\n'\r
\r
        return output\r
`,Hx=`from typing import Any\r
\r
\r
class HashMap:\r
    def __init__(self) -> None:\r
        self.size = 100000\r
        self.bucket = [None] * self.size\r
\r
    def _hash(self, key: int) -> int:\r
        return hash(key) % self.size\r
\r
    def __setitem__(self, key: int, value: Any) -> None:\r
        self.bucket[self._hash(key)] = value\r
\r
    def __getitem__(self, key: int) -> Any:\r
        return self.bucket[self._hash(key)]\r
\r
    def __delitem__(self, key: int) -> None:\r
        self.bucket[self._hash(key)] = None\r
`,$x=`class TrieNode:\r
    def __init__(self) -> None:\r
        self.children = {}\r
        self.is_word = False\r
\r
\r
class Trie:\r
    def __init__(self) -> None:\r
        self.root = TrieNode()\r
\r
    def build(self, words: list[str]) -> None:\r
        for word in words:\r
            self.insert(word)\r
\r
    def insert(self, word: str) -> None:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                node.children[char] = TrieNode()\r
            node = node.children[char]\r
\r
        node.is_word = True\r
\r
    def search(self, word: str) -> bool:\r
        node = self.root\r
\r
        for char in word:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return node.is_word\r
\r
    def starts_with(self, prefix: str) -> bool:\r
        node = self.root\r
\r
        for char in prefix:\r
            if char not in node.children:\r
                return False\r
            node = node.children[char]\r
\r
        return True\r
\r
    def collect_words(self, node: TrieNode, prefix: str) -> list[str]:\r
        words = []\r
\r
        if node.is_word:\r
            words.append(prefix)\r
\r
        for char, child_node in node.children.items():\r
            words.extend(self.collect_words(child_node, prefix + char))\r
\r
        return words\r
\r
    def __repr__(self) -> str:\r
        return 'Trie:\\n' + self._print_trie(self.root)\r
\r
    def _print_trie(self, node: TrieNode | None, level: int = 0, prefix: str = '') -> str:\r
        output = ''\r
        prefix_str = '    ' * level + prefix\r
\r
        if not node:\r
            return output\r
\r
        if node.is_word:\r
            output += prefix_str + ' ├─ ' + '(*)' + '\\n'\r
\r
        for i, (char, child_node) in enumerate(node.children.items()):\r
            is_last = i == len(node.children) - 1\r
            marker = '└─ ' if is_last else '├─ '\r
            output += prefix_str + marker + char + '\\n'\r
            output += self._print_trie(child_node, level + 1, '    │' if not is_last else '     ')\r
\r
        return output\r
`,Wx=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        self.root[self.find(a)] = self.find(b)\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,Vx=`class UnionFind:\r
    def __init__(self, n: int) -> None:\r
        self.root = list(range(n))\r
        self.rank = [1] * n\r
\r
    def find(self, a: int) -> int:\r
        return a if a == self.root[a] else self.find(self.root[a])\r
\r
    def union(self, a: int, b: int) -> None:\r
        root_a = self.find(a)\r
        root_b = self.find(b)\r
\r
        if root_a != root_b:\r
            if self.rank[root_a] < self.rank[root_b]:\r
                self.root[root_a] = root_b\r
            elif self.rank[root_a] > self.rank[root_b]:\r
                self.root[root_b] = root_a\r
            else:\r
                self.root[root_b] = root_a\r
                self.rank[root_a] += 1\r
\r
    def connected(self, a: int, b: int) -> bool:\r
        return self.find(a) == self.find(b)\r
\r
    def __repr__(self) -> str:\r
        n = len(self.root)\r
        lines = []\r
        components = {}\r
\r
        for i in range(n):\r
            root = self.find(i)\r
\r
            if root not in components:\r
                components[root] = []\r
\r
            components[root].append(i)\r
\r
        for component in components.values():\r
            lines.append(' - '.join(f'({node})' for node in component))\r
\r
        return '\\n'.join(lines)\r
`,Kx=`class Array {\r
    constructor(size) {\r
        this.size = size\r
        this.data = new Array(size).fill(null)\r
    }\r
\r
    getItem(index) {\r
        return this.data[index]\r
    }\r
\r
    setItem(index, value) {\r
        this.data[index] = value\r
    }\r
\r
    get length() {\r
        return this.data.length\r
    }\r
\r
    toString() {\r
        return this.data.toString()\r
    }\r
}\r
`,Gx=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinaryTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this.insertNode(this.root, data)\r
        }\r
    }\r
\r
    insertNode(node, data) {\r
        if (!node) {\r
            return new TreeNode(data)\r
        }\r
\r
        if (!node.left) {\r
            node.left = new TreeNode(data)\r
        } else if (!node.right) {\r
            node.right = new TreeNode(data)\r
        } else {\r
            node.left = this.insertNode(node.left, data)\r
        }\r
\r
        return node\r
    }\r
\r
    toString() {\r
        return this.root ? this.printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,Jx=`class TreeNode {\r
    constructor(data) {\r
        this.data = data\r
        this.left = null\r
        this.right = null\r
    }\r
}\r
\r
class BinarySearchTree {\r
    constructor() {\r
        this.root = null\r
    }\r
\r
    insert(data) {\r
        if (!this.root) {\r
            this.root = new TreeNode(data)\r
        } else {\r
            this._insertNode(this.root, data)\r
        }\r
    }\r
\r
    _insertNode(node, data) {\r
        if (data < node.data) {\r
            if (!node.left) {\r
                node.left = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.left, data)\r
            }\r
        } else {\r
            if (!node.right) {\r
                node.right = new TreeNode(data)\r
            } else {\r
                this._insertNode(node.right, data)\r
            }\r
        }\r
    }\r
\r
    toString() {\r
        return this.root ? this._printTree(this.root, '', true) : 'Empty tree'\r
    }\r
\r
    _printTree(node, prefix, isLeft) {\r
        if (!node) {\r
            return ''\r
        }\r
\r
        let result = ''\r
        result += this._printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)\r
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'\r
        result += this._printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)\r
\r
        return result\r
    }\r
}\r
`,Yx=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class LinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        curr.next = new ListNode(data)\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            return\r
        }\r
\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            if (curr.data === data) {\r
                prev.next = curr.next\r
                return\r
            }\r
\r
            prev = curr\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let prev = null\r
        let curr = this.head\r
\r
        while (curr) {\r
            let nxt = curr.next\r
            curr.next = prev\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        let nodes = []\r
        let node = this.head\r
\r
        while (node) {\r
            nodes.push(node.toString())\r
            node = node.next\r
        }\r
\r
        return nodes.join(' -> ') + ' -> None'\r
    }\r
}\r
`,Qx=`class ListNode {\r
    constructor(data) {\r
        this.data = data\r
        this.prev = null\r
        this.next = null\r
    }\r
\r
    toString() {\r
        return \`[\${this.data}]\`\r
    }\r
}\r
\r
class DoublyLinkedList {\r
    constructor() {\r
        this.head = null\r
    }\r
\r
    append(data) {\r
        if (!this.head) {\r
            this.head = new ListNode(data)\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr.next) {\r
            curr = curr.next\r
        }\r
\r
        const new_node = new ListNode(data)\r
        curr.next = new_node\r
        new_node.prev = curr\r
    }\r
\r
    delete(data) {\r
        if (!this.head) {\r
            return\r
        }\r
\r
        if (this.head.data === data) {\r
            this.head = this.head.next\r
            if (this.head) {\r
                this.head.prev = null\r
            }\r
            return\r
        }\r
\r
        let curr = this.head\r
        while (curr) {\r
            if (curr.data === data) {\r
                const prev_node = curr.prev\r
                prev_node.next = curr.next\r
                if (curr.next) {\r
                    curr.next.prev = prev_node\r
                }\r
                return\r
            }\r
            curr = curr.next\r
        }\r
    }\r
\r
    reverse() {\r
        let curr = this.head\r
        let prev = null\r
\r
        while (curr) {\r
            const nxt = curr.next\r
            curr.next = prev\r
            curr.prev = nxt\r
            prev = curr\r
            curr = nxt\r
        }\r
\r
        this.head = prev\r
    }\r
\r
    toString() {\r
        if (!this.head) {\r
            return 'None'\r
        }\r
\r
        const nodes = []\r
        let curr = this.head\r
\r
        while (curr) {\r
            nodes.push(curr.toString())\r
            curr = curr.next\r
        }\r
\r
        return nodes.join(' <-> ') + ' <-> None'\r
    }\r
}\r
`,qx=`class Graph {\r
    constructor() {\r
        this.graph = {}\r
    }\r
\r
    addVertex(vertex) {\r
        if (!(vertex in this.graph)) {\r
            this.graph[vertex] = []\r
        }\r
    }\r
\r
    addEdge(a, b) {\r
        this.addVertex(a)\r
        this.addVertex(b)\r
        this.graph[a].push(b)\r
        this.graph[b].push(a)\r
    }\r
\r
    getNeighbors(vertex) {\r
        return this.graph[vertex] || []\r
    }\r
\r
    toString() {\r
        let output = ''\r
\r
        for (const [vertex, neighbors] of Object.entries(this.graph)) {\r
            output += \`\${vertex} - \${neighbors.join(' - ')}\\n\`\r
        }\r
\r
        return output\r
    }\r
}\r
`,Xx=`class HashMap {\r
    constructor() {\r
        this.size = 100000\r
        this.bucket = new Array(this.size).fill(null)\r
    }\r
\r
    _hash(key) {\r
        return key % this.size\r
    }\r
\r
    setItem(key, value) {\r
        this.bucket[this._hash(key)] = value\r
    }\r
\r
    getItem(key) {\r
        return this.bucket[this._hash(key)]\r
    }\r
\r
    deleteItem(key) {\r
        this.bucket[this._hash(key)] = null\r
    }\r
}\r
`,Zx=`class TrieNode {\r
    constructor() {\r
        this.children = {}\r
        this.isWord = false\r
    }\r
}\r
\r
class Trie {\r
    constructor() {\r
        this.root = new TrieNode()\r
    }\r
\r
    build(words) {\r
        for (const word of words) {\r
            this.insert(word)\r
        }\r
    }\r
\r
    insert(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                node.children[char] = new TrieNode()\r
            }\r
            node = node.children[char]\r
        }\r
\r
        node.isWord = true\r
    }\r
\r
    search(word) {\r
        let node = this.root\r
\r
        for (const char of word) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return node.isWord\r
    }\r
\r
    startsWith(prefix) {\r
        let node = this.root\r
\r
        for (const char of prefix) {\r
            if (!(char in node.children)) {\r
                return false\r
            }\r
            node = node.children[char]\r
        }\r
\r
        return true\r
    }\r
\r
    collectWords(node, prefix) {\r
        const words = []\r
\r
        if (node.isWord) {\r
            words.push(prefix)\r
        }\r
\r
        for (const [char, childNode] of Object.entries(node.children)) {\r
            words.push(...this.collectWords(childNode, prefix + char))\r
        }\r
\r
        return words\r
    }\r
\r
    toString() {\r
        return 'Trie:\\n' + this._printTrie(this.root)\r
    }\r
\r
    _printTrie(node, level = 0, prefix = '') {\r
        let output = ''\r
        const prefixStr = '    '.repeat(level) + prefix\r
\r
        if (!node) {\r
            return output\r
        }\r
\r
        if (node.isWord) {\r
            output += prefixStr + ' ├─ ' + '(*)' + '\\n'\r
        }\r
\r
        const children = Object.entries(node.children)\r
        children.forEach(([char, childNode], i) => {\r
            const isLast = i === children.length - 1\r
            const marker = isLast ? '└─ ' : '├─ '\r
            output += prefixStr + marker + char + '\\n'\r
            output += this._printTrie(childNode, level + 1, isLast ? '     ' : '    │')\r
        })\r
\r
        return output\r
    }\r
}\r
`,n_=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        this.root[this.find(a)] = this.find(b)\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(\`(\${component.join(' - ')})\`)\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,r_=`class UnionFind {\r
    constructor(n) {\r
        this.root = [...Array(n).keys()]\r
        this.rank = Array(n).fill(1)\r
    }\r
\r
    find(a) {\r
        return a === this.root[a] ? a : this.find(this.root[a])\r
    }\r
\r
    union(a, b) {\r
        const rootA = this.find(a)\r
        const rootB = this.find(b)\r
\r
        if (rootA !== rootB) {\r
            if (this.rank[rootA] < this.rank[rootB]) {\r
                this.root[rootA] = rootB\r
            } else if (this.rank[rootA] > this.rank[rootB]) {\r
                this.root[rootB] = rootA\r
            } else {\r
                this.root[rootB] = rootA\r
                this.rank[rootA]++\r
            }\r
        }\r
    }\r
\r
    connected(a, b) {\r
        return this.find(a) === this.find(b)\r
    }\r
\r
    toString() {\r
        const n = this.root.length\r
        const lines = []\r
        const components = {}\r
\r
        for (let i = 0; i < n; i++) {\r
            const root = this.find(i)\r
\r
            if (!(root in components)) {\r
                components[root] = []\r
            }\r
\r
            components[root].push(i)\r
        }\r
\r
        for (const component of Object.values(components)) {\r
            lines.push(component.map(node => \`(\${node})\`).join(' - '))\r
        }\r
\r
        return lines.join('\\n')\r
    }\r
}\r
`,e_=`public class Array<T> {\r
    private int size;\r
    private T[] data;\r
\r
    @SuppressWarnings("unchecked")\r
    public Array(int size) {\r
        this.size = size;\r
        this.data = (T[]) new Object[size];\r
    }\r
\r
    public T get(int index) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        return data[index];\r
    }\r
\r
    public void set(int index, T value) {\r
        if (index < 0 || index >= size) {\r
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);\r
        }\r
        data[index] = value;\r
    }\r
\r
    public int size() {\r
        return size;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder sb = new StringBuilder("[");\r
\r
        for (int i = 0; i < size; i++) {\r
            sb.append(data[i]);\r
            if (i < size - 1) {\r
                sb.append(", ");\r
            }\r
        }\r
\r
        sb.append("]");\r
        return sb.toString();\r
    }\r
}\r
`,t_=`public class TreeNode<T> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinaryTree<T> {\r
    TreeNode<T> root;\r
\r
    public BinaryTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (node.left == null) {\r
            node.left = new TreeNode<>(data);\r
        } else if (node.right == null) {\r
            node.right = new TreeNode<>(data);\r
        } else {\r
            node.left = insertNode(node.left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,i_=`public class TreeNode<T extends Comparable<T>> {\r
    T data;\r
    TreeNode<T> left;\r
    TreeNode<T> right;\r
\r
    public TreeNode(T data) {\r
        this.data = data;\r
        left = null;\r
        right = null;\r
    }\r
}\r
\r
public class BinarySearchTree<T extends Comparable<T>> {\r
    TreeNode<T> root;\r
\r
    public BinarySearchTree() {\r
        root = null;\r
    }\r
\r
    public void insert(T data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    private TreeNode<T> insertNode(TreeNode<T> node, T data) {\r
        if (node == null) {\r
            return new TreeNode<>(data);\r
        }\r
\r
        if (data.compareTo(node.data) < 0) {\r
            node.left = insertNode(node.left, data);\r
        } else if (data.compareTo(node.data) > 0) {\r
            node.right = insertNode(node.right, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return root == null ? "Empty tree" : printTree(root, "", true);\r
    }\r
\r
    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {\r
        if (node == null) {\r
            return "";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));\r
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");\r
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));\r
\r
        return sb.toString();\r
    }\r
}\r
`,a_=`class ListNode {\r
    public int data;\r
    public ListNode next;\r
\r
    public ListNode(int data) {\r
        this.data = data;\r
        this.next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
class LinkedList {\r
    private ListNode head;\r
\r
    public LinkedList() {\r
        this.head = null;\r
    }\r
\r
    public void append(int data) {\r
        if (head == null) {\r
            head = new ListNode(data);\r
            return;\r
        }\r
\r
        ListNode current = head;\r
\r
        while (current.next != null) {\r
            current = current.next;\r
        }\r
\r
        current.next = new ListNode(data);\r
    }\r
\r
    public void delete(int data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data == data) {\r
            head = head.next;\r
            return;\r
        }\r
\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            if (current.data == data) {\r
                prev.next = current.next;\r
                return;\r
            }\r
            prev = current;\r
            current = current.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode prev = null;\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            ListNode next = current.next;\r
            current.next = prev;\r
            prev = current;\r
            current = next;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder result = new StringBuilder();\r
        ListNode current = head;\r
\r
        while (current != null) {\r
            result.append(current.toString()).append(" -> ");\r
            current = current.next;\r
        }\r
\r
        result.append("None");\r
        return result.toString();\r
    }\r
}\r
`,o_=`public class ListNode<T> {\r
    T data;\r
    ListNode<T> prev;\r
    ListNode<T> next;\r
\r
    public ListNode(T data) {\r
        this.data = data;\r
        prev = null;\r
        next = null;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "[" + data + "]";\r
    }\r
}\r
\r
public class DoublyLinkedList<T> {\r
    ListNode<T> head;\r
\r
    public DoublyLinkedList() {\r
        head = null;\r
    }\r
\r
    public void append(T data) {\r
        if (head == null) {\r
            head = new ListNode<>(data);\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr.next != null) {\r
            curr = curr.next;\r
        }\r
\r
        ListNode<T> newNode = new ListNode<>(data);\r
        curr.next = newNode;\r
        newNode.prev = curr;\r
    }\r
\r
    public void delete(T data) {\r
        if (head == null) {\r
            return;\r
        }\r
\r
        if (head.data.equals(data)) {\r
            head = head.next;\r
            if (head != null) {\r
                head.prev = null;\r
            }\r
            return;\r
        }\r
\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            if (curr.data.equals(data)) {\r
                ListNode<T> prevNode = curr.prev;\r
                prevNode.next = curr.next;\r
                if (curr.next != null) {\r
                    curr.next.prev = prevNode;\r
                }\r
                return;\r
            }\r
            curr = curr.next;\r
        }\r
    }\r
\r
    public void reverse() {\r
        ListNode<T> curr = head;\r
        ListNode<T> prev = null;\r
\r
        while (curr != null) {\r
            ListNode<T> nextNode = curr.next;\r
            curr.next = prev;\r
            curr.prev = nextNode;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        if (head == null) {\r
            return "None";\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
        ListNode<T> curr = head;\r
\r
        while (curr != null) {\r
            sb.append(curr.toString()).append(" <-> ");\r
            curr = curr.next;\r
        }\r
\r
        sb.append("None");\r
        return sb.toString();\r
    }\r
}\r
`,s_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class Graph {\r
    Map<String, List<String>> graph;\r
\r
    public Graph() {\r
        graph = new HashMap<>();\r
    }\r
\r
    public void addVertex(String vertex) {\r
        if (!graph.containsKey(vertex)) {\r
            graph.put(vertex, new ArrayList<>());\r
        }\r
    }\r
\r
    public void addEdge(String a, String b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph.get(a).add(b);\r
        graph.get(b).add(a);\r
    }\r
\r
    public List<String> getNeighbors(String vertex) {\r
        return graph.getOrDefault(vertex, new ArrayList<>());\r
    }\r
\r
    @Override\r
    public String toString() {\r
        StringBuilder output = new StringBuilder();\r
\r
        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {\r
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\\n");\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,l_=`public class HashMap {\r
    private int size;\r
    private Object[] bucket;\r
\r
    public HashMap() {\r
        size = 100000;\r
        bucket = new Object[size];\r
    }\r
\r
    private int hash(int key) {\r
        return key % size;\r
    }\r
\r
    public void put(int key, Object value) {\r
        bucket[hash(key)] = value;\r
    }\r
\r
    public Object get(int key) {\r
        return bucket[hash(key)];\r
    }\r
\r
    public void remove(int key) {\r
        bucket[hash(key)] = null;\r
    }\r
}\r
`,u_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class TrieNode {\r
    Map<Character, TrieNode> children;\r
    boolean isWord;\r
\r
    public TrieNode() {\r
        this.children = new HashMap<>();\r
        this.isWord = false;\r
    }\r
}\r
\r
class Trie {\r
    TrieNode root;\r
\r
    public Trie() {\r
        this.root = new TrieNode();\r
    }\r
\r
    public void build(String[] words) {\r
        for (String word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    public void insert(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                node.children.put(ch, new TrieNode());\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        node.isWord = true;\r
    }\r
\r
    public boolean search(String word) {\r
        TrieNode node = root;\r
\r
        for (char ch : word.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return node.isWord;\r
    }\r
\r
    public boolean startsWith(String prefix) {\r
        TrieNode node = root;\r
\r
        for (char ch : prefix.toCharArray()) {\r
            if (!node.children.containsKey(ch)) {\r
                return false;\r
            }\r
            node = node.children.get(ch);\r
        }\r
\r
        return true;\r
    }\r
\r
    public List<String> collectWords(TrieNode node, String prefix) {\r
        List<String> words = new ArrayList<>();\r
\r
        if (node.isWord) {\r
            words.add(prefix);\r
        }\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            words.addAll(collectWords(entry.getValue(), prefix + entry.getKey()));\r
        }\r
\r
        return words;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Trie:\\n" + printTrie(root, 0, null);\r
    }\r
\r
    private String printTrie(TrieNode node, int level, String prefix) {\r
        StringBuilder output = new StringBuilder();\r
        String prefixStr = "\\t".repeat(level) + prefix;\r
\r
        if (node == null) {\r
            return output.toString();\r
        }\r
\r
        if (node.isWord) {\r
            output.append(prefixStr).append(" ├─ ").append("(*)").append("\\n");\r
        }\r
\r
        int i = 0;\r
\r
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {\r
            boolean isLast = i == node.children.size() - 1;\r
            String marker = isLast ? "└─ " : "├─ ";\r
            output.append(prefixStr).append(marker).append(entry.getKey()).append("\\n");\r
            output.append(printTrie(entry.getValue(), level + 1, isLast ? "    │" : "     "));\r
            i++;\r
        }\r
\r
        return output.toString();\r
    }\r
}\r
`,c_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
public class UnionFind {\r
    private int[] root;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        List<List<Integer>> components = new ArrayList<>();\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,d_=`import java.util.ArrayList;\r
import java.util.HashMap;\r
import java.util.List;\r
import java.util.Map;\r
\r
\r
class UnionFind {\r
    int[] root;\r
    int[] rank;\r
\r
    public UnionFind(int n) {\r
        this.root = new int[n];\r
        this.rank = new int[n];\r
\r
        for (int i = 0; i < n; i++) {\r
            this.root[i] = i;\r
            this.rank[i] = 1;\r
        }\r
    }\r
\r
    public int find(int a) {\r
        if (a == root[a]) {\r
            return a;\r
        }\r
        return root[a] = find(root[a]);\r
    }\r
\r
    public void union(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    public boolean connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        int n = root.length;\r
        Map<Integer, List<Integer>> componentMap = new HashMap<>();\r
\r
        for (int i = 0; i < n; i++) {\r
            int root = find(i);\r
\r
            if (!componentMap.containsKey(root)) {\r
                componentMap.put(root, new ArrayList<>());\r
            }\r
\r
            componentMap.get(root).add(i);\r
        }\r
\r
        StringBuilder sb = new StringBuilder();\r
\r
        for (List<Integer> component : componentMap.values()) {\r
            sb.append(" - ").append(component);\r
        }\r
\r
        return sb.toString();\r
    }\r
}\r
`,f_=`#include <iostream>\r
#include <stdexcept>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class Array {\r
private:\r
    T* data;\r
    size_t size;\r
\r
public:\r
    Array(size_t size) : size(size) {\r
        data = new T[size];\r
    }\r
\r
    ~Array() {\r
        delete[] data;\r
    }\r
\r
    T& operator[](size_t index) {\r
        if (index >= size) {\r
            throw std::out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    const T& operator[](size_t index) const {\r
        if (index >= size) {\r
            throw out_of_range("Index out of range");\r
        }\r
        return data[index];\r
    }\r
\r
    size_t len() const {\r
        return size;\r
    }\r
\r
    friend ostream& operator<<(ostream& os, const Array<T>& arr) {\r
        os << "[";\r
        for (size_t i = 0; i < arr.size; ++i) {\r
            os << arr.data[i];\r
            if (i < arr.size - 1) {\r
                os << ", ";\r
            }\r
        }\r
        os << "]";\r
        return os;\r
    }\r
};\r
`,p_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinaryTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinaryTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        root = insertNode(root, data);\r
    }\r
\r
    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {\r
        if (!node) {\r
            return make_shared<TreeNode<T>>(data);\r
        }\r
\r
        if (!node->left) {\r
            node->left = make_shared<TreeNode<T>>(data);\r
        } else if (!node->right) {\r
            node->right = make_shared<TreeNode<T>>(data);\r
        } else {\r
            node->left = insertNode(node->left, data);\r
        }\r
\r
        return node;\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,h_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class BinarySearchTree {\r
private:\r
    shared_ptr<TreeNode<T>> root;\r
\r
public:\r
    BinarySearchTree() : root(nullptr) {}\r
\r
    void insert(const T& data) {\r
        if (!root) {\r
            root = make_shared<TreeNode<T>>(data);\r
        } else {\r
            insertNode(root, data);\r
        }\r
    }\r
\r
    void insertNode(shared_ptr<TreeNode<T>>& node, const T& data) {\r
        if (data < node->data) {\r
            if (!node->left) {\r
                node->left = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->left, data);\r
            }\r
        } else {\r
            if (!node->right) {\r
                node->right = make_shared<TreeNode<T>>(data);\r
            } else {\r
                insertNode(node->right, data);\r
            }\r
        }\r
    }\r
\r
    string printTree() const {\r
        return root ? printNode(root, "", true) : "Empty tree";\r
    }\r
\r
    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {\r
        string result;\r
        if (node) {\r
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);\r
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";\r
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);\r
        }\r
        return result;\r
    }\r
};\r
`,g_=`#include <iostream>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    ListNode* next;\r
\r
    ListNode(const T& data) : data(data), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class LinkedList {\r
private:\r
    ListNode<T>* head;\r
\r
public:\r
    LinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = new ListNode<T>(data);\r
            return;\r
        }\r
\r
        ListNode<T>* curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        curr->next = new ListNode<T>(data);\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            ListNode<T>* temp = head;\r
            head = head->next;\r
            delete temp;\r
            return;\r
        }\r
\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                prev->next = curr->next;\r
                delete curr;\r
                return;\r
            }\r
\r
            prev = curr;\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        ListNode<T>* prev = nullptr;\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* nextNode = curr->next;\r
            curr->next = prev;\r
            prev = curr;\r
            curr = nextNode;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    ~LinkedList() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            ListNode<T>* temp = curr;\r
            curr = curr->next;\r
            delete temp;\r
        }\r
    }\r
\r
    void display() {\r
        ListNode<T>* curr = head;\r
\r
        while (curr) {\r
            cout << "[" << curr->data << "]";\r
            if (curr->next) {\r
                cout << " -> ";\r
            }\r
            curr = curr->next;\r
        }\r
\r
        cout << " -> None" << endl;\r
    }\r
};\r
`,m_=`#include <iostream>\r
#include <memory>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
template<typename T>\r
class ListNode {\r
public:\r
    T data;\r
    shared_ptr<ListNode<T>> prev;\r
    shared_ptr<ListNode<T>> next;\r
\r
    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}\r
};\r
\r
template<typename T>\r
class DoublyLinkedList {\r
private:\r
    shared_ptr<ListNode<T>> head;\r
\r
public:\r
    DoublyLinkedList() : head(nullptr) {}\r
\r
    void append(const T& data) {\r
        if (!head) {\r
            head = make_shared<ListNode<T>>(data);\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr->next) {\r
            curr = curr->next;\r
        }\r
\r
        auto new_node = make_shared<ListNode<T>>(data);\r
        curr->next = new_node;\r
        new_node->prev = curr;\r
    }\r
\r
    void deleteNode(const T& data) {\r
        if (!head) {\r
            return;\r
        }\r
\r
        if (head->data == data) {\r
            head = head->next;\r
            if (head) {\r
                head->prev = nullptr;\r
            }\r
            return;\r
        }\r
\r
        auto curr = head;\r
\r
        while (curr) {\r
            if (curr->data == data) {\r
                auto prev_node = curr->prev;\r
                prev_node->next = curr->next;\r
\r
                if (curr->next) {\r
                    curr->next->prev = prev_node;\r
                }\r
\r
                return;\r
            }\r
            curr = curr->next;\r
        }\r
    }\r
\r
    void reverse() {\r
        auto curr = head;\r
        shared_ptr<ListNode<T>> prev = nullptr;\r
\r
        while (curr) {\r
            auto next_node = curr->next;\r
            curr->next = prev;\r
            curr->prev = next_node;\r
            prev = curr;\r
            curr = next_node;\r
        }\r
\r
        head = prev;\r
    }\r
\r
    string toString() const {\r
        if (!head) {\r
            return "None";\r
        }\r
\r
        string result;\r
        auto curr = head;\r
\r
        while (curr) {\r
            result += "[" + to_string(curr->data) + "]";\r
\r
            if (curr->next) {\r
                result += " <-> ";\r
            }\r
\r
            curr = curr->next;\r
        }\r
\r
        result += " <-> None";\r
        return result;\r
    }\r
};\r
`,v_=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <string>\r
\r
using namespace std;\r
\r
\r
class Graph {\r
private:\r
    unordered_map<string, vector<string>> graph;\r
\r
public:\r
    Graph() {}\r
\r
    void addVertex(const string& vertex) {\r
        if (graph.find(vertex) == graph.end()) {\r
            graph[vertex] = {};\r
        }\r
    }\r
\r
    void addEdge(const string& a, const string& b) {\r
        addVertex(a);\r
        addVertex(b);\r
        graph[a].push_back(b);\r
        graph[b].push_back(a);\r
    }\r
\r
    vector<string> getNeighbors(const string& vertex) {\r
        return graph[vertex];\r
    }\r
\r
    string toString() {\r
        string output;\r
\r
        for (const auto& [vertex, neighbors] : graph) {\r
            output += vertex + " - ";\r
\r
            for (const auto& neighbor : neighbors) {\r
                output += neighbor + " - ";\r
            }\r
\r
            output.pop_back();\r
            output.pop_back();\r
            output += "\\n";\r
        }\r
\r
        return output;\r
    }\r
};\r
`,y_=`#include <iostream>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
template<typename KeyType, typename ValueType>\r
class HashMap {\r
private:\r
    const size_t size = 100000;\r
    vector<pair<KeyType, ValueType>> buckets[size];\r
\r
    size_t hash(const KeyType& key) {\r
        return hash<KeyType>{}(key) % size;\r
    }\r
\r
public:\r
    HashMap() {}\r
\r
    void setItem(const KeyType& key, const ValueType& value) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                pair.second = value;\r
                return;\r
            }\r
        }\r
\r
        buckets[index].emplace_back(key, value);\r
    }\r
\r
    ValueType& getItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto& pair : buckets[index]) {\r
            if (pair.first == key) {\r
                return pair.second;\r
            }\r
        }\r
\r
        throw out_of_range("Key not found");\r
    }\r
\r
    void delItem(const KeyType& key) {\r
        size_t index = hash(key);\r
\r
        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {\r
            if (it->first == key) {\r
                buckets[index].erase(it);\r
                return;\r
            }\r
        }\r
    }\r
};\r
`,x_=`#include <iostream>\r
#include <unordered_map>\r
#include <vector>\r
#include <memory>\r
\r
using namespace std;\r
\r
\r
class TrieNode {\r
public:\r
    unordered_map<char, shared_ptr<TrieNode>> children;\r
    bool is_word;\r
\r
    TrieNode() : is_word(false) {}\r
};\r
\r
class Trie {\r
private:\r
    shared_ptr<TrieNode> root;\r
\r
public:\r
    Trie() : root(make_shared<TrieNode>()) {}\r
\r
    void build(const vector<string>& words) {\r
        for (const auto& word : words) {\r
            insert(word);\r
        }\r
    }\r
\r
    void insert(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                node->children[ch] = make_shared<TrieNode>();\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        node->is_word = true;\r
    }\r
\r
    bool search(const string& word) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : word) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return node->is_word;\r
    }\r
\r
    bool startsWith(const string& prefix) {\r
        shared_ptr<TrieNode> node = root;\r
\r
        for (char ch : prefix) {\r
            if (node->children.find(ch) == node->children.end()) {\r
                return false;\r
            }\r
            node = node->children[ch];\r
        }\r
\r
        return true;\r
    }\r
\r
    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {\r
        vector<string> words;\r
\r
        if (node->is_word) {\r
            words.push_back(prefix);\r
        }\r
\r
        for (const auto& [ch, childNode] : node->children) {\r
            auto childWords = collectWords(childNode, prefix + ch);\r
            words.insert(words.end(), childWords.begin(), childWords.end());\r
        }\r
\r
        return words;\r
    }\r
\r
    vector<string> collectWords() {\r
        return collectWords(root, "");\r
    }\r
};\r
`,__=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
\r
public:\r
    UnionFind(int n) : root(n) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        root[find(a)] = find(b);\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,b_=`#include <iostream>\r
#include <string>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
class UnionFind {\r
private:\r
    vector<int> root;\r
    vector<int> rank;\r
\r
public:\r
    UnionFind(int n) : root(n), rank(n, 1) {\r
        for (int i = 0; i < n; ++i) {\r
            root[i] = i;\r
        }\r
    }\r
\r
    int find(int a) {\r
        return a == root[a] ? a : root[a] = find(root[a]);\r
    }\r
\r
    void unionSets(int a, int b) {\r
        int rootA = find(a);\r
        int rootB = find(b);\r
\r
        if (rootA != rootB) {\r
            if (rank[rootA] < rank[rootB]) {\r
                root[rootA] = rootB;\r
            } else if (rank[rootA] > rank[rootB]) {\r
                root[rootB] = rootA;\r
            } else {\r
                root[rootB] = rootA;\r
                rank[rootA]++;\r
            }\r
        }\r
    }\r
\r
    bool connected(int a, int b) {\r
        return find(a) == find(b);\r
    }\r
\r
    string toString() {\r
        int n = root.size();\r
        vector<vector<int>> components(n);\r
\r
        for (int i = 0; i < n; ++i) {\r
            components[find(i)].push_back(i);\r
        }\r
\r
        string result;\r
\r
        for (const auto& component : components) {\r
            if (!component.empty()) {\r
                for (int node : component) {\r
                    result += "(" + to_string(node) + ") - ";\r
                }\r
                result.pop_back();\r
                result.pop_back();\r
                result += "\\n";\r
            }\r
        }\r
\r
        return result;\r
    }\r
};\r
`,w_=`\r
class Array\r
  def initialize(size)\r
    @size = size\r
    @data = Array.new(size)\r
  end\r
\r
  def [](index)\r
    @data[index]\r
  end\r
\r
  def []=(index, value)\r
    @data[index] = value\r
  end\r
\r
  def length\r
    @data.length\r
  end\r
\r
  def to_s\r
    @data.to_s\r
  end\r
end\r
`,T_=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinaryTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    return TreeNode.new(data) if node.nil?\r
\r
    if node.left.nil?\r
      node.left = TreeNode.new(data)\r
    elsif node.right.nil?\r
      node.right = TreeNode.new(data)\r
    else\r
      node.left = insert_node(node.left, data)\r
    end\r
\r
    node\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,S_=`class TreeNode\r
  attr_accessor :data, :left, :right\r
\r
  def initialize(data)\r
    @data   = data\r
    @left   = nil\r
    @right  = nil\r
  end\r
end\r
\r
class BinarySearchTree\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = nil\r
  end\r
\r
  def insert(data)\r
    if @root.nil?\r
      @root = TreeNode.new(data)\r
    else\r
      insert_node(@root, data)\r
    end\r
  end\r
\r
  def insert_node(node, data)\r
    if data < node.data\r
      if node.left.nil?\r
        node.left = TreeNode.new(data)\r
      else\r
        insert_node(node.left, data)\r
      end\r
    else\r
      if node.right.nil?\r
        node.right = TreeNode.new(data)\r
      else\r
        insert_node(node.right, data)\r
      end\r
    end\r
  end\r
\r
  def to_s\r
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)\r
  end\r
\r
  private\r
\r
  def print_tree(node, prefix, is_left)\r
    return '' if node.nil?\r
\r
    result = ''\r
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)\r
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"\r
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)\r
\r
    result\r
  end\r
end\r
`,j_=`class ListNode\r
  attr_accessor :data, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class LinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
    curr.next = ListNode.new(data)\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      return\r
    end\r
\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      if curr.data == data\r
        prev.next = curr.next\r
        return\r
      end\r
      prev = curr\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    prev = nil\r
    curr = @head\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'nil' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' -> ') + ' -> nil'\r
  end\r
end\r
`,k_=`class ListNode\r
  attr_accessor :data, :prev, :next\r
\r
  def initialize(data)\r
    @data = data\r
    @prev = nil\r
    @next = nil\r
  end\r
\r
  def to_s\r
    "[#{@data}]"\r
  end\r
end\r
\r
class DoublyLinkedList\r
  attr_accessor :head\r
\r
  def initialize\r
    @head = nil\r
  end\r
\r
  def append(data)\r
    if @head.nil?\r
      @head = ListNode.new(data)\r
      return\r
    end\r
\r
    curr = @head\r
    curr = curr.next while curr.next\r
\r
    new_node = ListNode.new(data)\r
    curr.next = new_node\r
    new_node.prev = curr\r
  end\r
\r
  def delete(data)\r
    return if @head.nil?\r
\r
    if @head.data == data\r
      @head = @head.next\r
      @head.prev = nil if @head\r
      return\r
    end\r
\r
    curr = @head\r
    while curr\r
      if curr.data == data\r
        prev_node = curr.prev\r
        prev_node.next = curr.next\r
        curr.next.prev = prev_node if curr.next\r
        return\r
      end\r
      curr = curr.next\r
    end\r
  end\r
\r
  def reverse\r
    curr = @head\r
    prev = nil\r
\r
    while curr\r
      nxt = curr.next\r
      curr.next = prev\r
      curr.prev = nxt\r
      prev = curr\r
      curr = nxt\r
    end\r
\r
    @head = prev\r
  end\r
\r
  def to_s\r
    return 'None' if @head.nil?\r
\r
    nodes = []\r
    curr = @head\r
    while curr\r
      nodes << curr.to_s\r
      curr = curr.next\r
    end\r
\r
    nodes.join(' <-> ') + ' <-> None'\r
  end\r
end\r
`,E_=`class Graph\r
  attr_accessor :graph\r
\r
  def initialize\r
    @graph = {}\r
  end\r
\r
  def add_vertex(vertex)\r
    @graph[vertex] ||= []\r
  end\r
\r
  def add_edge(a, b)\r
    add_vertex(a)\r
    add_vertex(b)\r
    @graph[a] << b\r
    @graph[b] << a\r
  end\r
\r
  def get_neighbors(vertex)\r
    @graph.fetch(vertex, [])\r
  end\r
\r
  def to_s\r
    output = ''\r
    @graph.each do |vertex, neighbors|\r
      output += "#{vertex} - #{neighbors.join(' - ')}\\n"\r
    end\r
    output\r
  end\r
end\r
`,N_=`class HashMap\r
  def initialize\r
    @size   = 100_000\r
    @bucket = Array.new(@size)\r
  end\r
\r
  def hash_key(key)\r
    key.hash % @size\r
  end\r
\r
  def []=(key, value)\r
    @bucket[hash_key(key)] = value\r
  end\r
\r
  def [](key)\r
    @bucket[hash_key(key)]\r
  end\r
\r
  def delete(key)\r
    @bucket[hash_key(key)] = nil\r
  end\r
end\r
`,O_=`class TrieNode\r
  attr_accessor :children, :is_word\r
\r
  def initialize\r
    @children = {}\r
    @is_word  = false\r
  end\r
end\r
\r
class Trie\r
  attr_accessor :root\r
\r
  def initialize\r
    @root = TrieNode.new\r
  end\r
\r
  def build(words)\r
    words.each { |word| insert(word) }\r
  end\r
\r
  def insert(word)\r
    node = @root\r
    word.each_char do |char|\r
      node.children[char] ||= TrieNode.new\r
      node = node.children[char]\r
    end\r
    node.is_word = true\r
  end\r
\r
  def search(word)\r
    node = @root\r
    word.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    node.is_word\r
  end\r
\r
  def starts_with(prefix)\r
    node = @root\r
    prefix.each_char do |char|\r
      return false unless node.children.key?(char)\r
      node = node.children[char]\r
    end\r
    true\r
  end\r
\r
  def collect_words(node = @root, prefix = '')\r
    words = []\r
    words << prefix if node.is_word\r
    node.children.each do |char, child_node|\r
      words.concat(collect_words(child_node, prefix + char))\r
    end\r
    words\r
  end\r
\r
  def to_s\r
    "Trie:\\n" + print_trie(@root)\r
  end\r
\r
  private\r
\r
  def print_trie(node, level = 0, prefix = '')\r
    return '' unless node\r
\r
    output = ''\r
    prefix_str = '    ' * level + prefix\r
    output += prefix_str + ' ├─ (*)' + "\\n" if node.is_word\r
\r
    node.children.each_with_index do |(char, child_node), i|\r
      is_last = i == node.children.size - 1\r
      marker = is_last ? '└─ ' : '├─ '\r
      output += prefix_str + marker + char + "\\n"\r
      new_prefix = is_last ? '     ' : '    │'\r
      output += print_trie(child_node, level + 1, new_prefix)\r
    end\r
\r
    output\r
  end\r
end\r
`,A_=`class UnionFind\r
  attr_accessor :root\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    @root[find(a)] = find(b)\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`,C_=`class UnionFind\r
  attr_accessor :root, :rank\r
\r
  def initialize(n)\r
    @root = Array.new(n) { |i| i }\r
    @rank = Array.new(n, 1)\r
  end\r
\r
  def find(a)\r
    return a if a == @root[a]\r
\r
    @root[a] = find(@root[a])\r
  end\r
\r
  def union(a, b)\r
    root_a = find(a)\r
    root_b = find(b)\r
\r
    return if root_a == root_b\r
\r
    if @rank[root_a] < @rank[root_b]\r
      @root[root_a] = root_b\r
    elsif @rank[root_a] > @rank[root_b]\r
      @root[root_b] = root_a\r
    else\r
      @root[root_b] = root_a\r
      @rank[root_a] += 1\r
    end\r
  end\r
\r
  def connected(a, b)\r
    find(a) == find(b)\r
  end\r
\r
  def to_s\r
    n = @root.size\r
    components = Hash.new { |h, k| h[k] = [] }\r
\r
    (0...n).each do |i|\r
      root_i = find(i)\r
      components[root_i] << i\r
    end\r
\r
    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")\r
  end\r
end\r
`;function L_(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Data Structures"}),i.jsx("section",{id:"ds-array",children:i.jsxs(u,{title:"array",children:[i.jsx(u.Tab,{code:Ix,language:"python"}),i.jsx(u.Tab,{code:Kx,language:"javascript"}),i.jsx(u.Tab,{code:e_,language:"java"}),i.jsx(u.Tab,{code:f_,language:"cpp"}),i.jsx(u.Tab,{code:w_,language:"ruby"})]})}),i.jsx("section",{id:"ds-hash-map",children:i.jsxs(u,{title:"hash map",children:[i.jsx(u.Tab,{code:Hx,language:"python"}),i.jsx(u.Tab,{code:Xx,language:"javascript"}),i.jsx(u.Tab,{code:l_,language:"java"}),i.jsx(u.Tab,{code:y_,language:"cpp"}),i.jsx(u.Tab,{code:N_,language:"ruby"})]})}),i.jsx("section",{id:"ds-linked-list",children:i.jsxs(u,{title:"linked list",children:[i.jsx(u.Tab,{code:Bx,language:"python"}),i.jsx(u.Tab,{code:Yx,language:"javascript"}),i.jsx(u.Tab,{code:a_,language:"java"}),i.jsx(u.Tab,{code:g_,language:"cpp"}),i.jsx(u.Tab,{code:j_,language:"ruby"})]})}),i.jsx("section",{id:"ds-doubly-linked-list",children:i.jsxs(u,{title:"doubly linked list",children:[i.jsx(u.Tab,{code:Fx,language:"python"}),i.jsx(u.Tab,{code:Qx,language:"javascript"}),i.jsx(u.Tab,{code:o_,language:"java"}),i.jsx(u.Tab,{code:m_,language:"cpp"}),i.jsx(u.Tab,{code:k_,language:"ruby"})]})}),i.jsx("section",{id:"ds-binary-tree",children:i.jsxs(u,{title:"binary tree",children:[i.jsx(u.Tab,{code:Dx,language:"python"}),i.jsx(u.Tab,{code:Gx,language:"javascript"}),i.jsx(u.Tab,{code:t_,language:"java"}),i.jsx(u.Tab,{code:p_,language:"cpp"}),i.jsx(u.Tab,{code:T_,language:"ruby"})]})}),i.jsx("section",{id:"ds-binary-search-tree",children:i.jsxs(u,{title:"binary search tree",children:[i.jsx(u.Tab,{code:zx,language:"python"}),i.jsx(u.Tab,{code:Jx,language:"javascript"}),i.jsx(u.Tab,{code:i_,language:"java"}),i.jsx(u.Tab,{code:h_,language:"cpp"}),i.jsx(u.Tab,{code:S_,language:"ruby"})]})}),i.jsx("section",{id:"ds-graph",children:i.jsxs(u,{title:"graph",children:[i.jsx(u.Tab,{code:Ux,language:"python"}),i.jsx(u.Tab,{code:qx,language:"javascript"}),i.jsx(u.Tab,{code:s_,language:"java"}),i.jsx(u.Tab,{code:v_,language:"cpp"}),i.jsx(u.Tab,{code:E_,language:"ruby"})]})}),i.jsx("section",{id:"ds-union-find",children:i.jsxs(u,{title:"union find",children:[i.jsx(u.Tab,{code:Wx,language:"python"}),i.jsx(u.Tab,{code:n_,language:"javascript"}),i.jsx(u.Tab,{code:c_,language:"java"}),i.jsx(u.Tab,{code:__,language:"cpp"}),i.jsx(u.Tab,{code:A_,language:"ruby"})]})}),i.jsx("section",{id:"ds-union-find-optimized",children:i.jsxs(u,{title:"union find optimized",children:[i.jsx(u.Tab,{code:Vx,language:"python"}),i.jsx(u.Tab,{code:r_,language:"javascript"}),i.jsx(u.Tab,{code:d_,language:"java"}),i.jsx(u.Tab,{code:b_,language:"cpp"}),i.jsx(u.Tab,{code:C_,language:"ruby"})]})}),i.jsx("section",{id:"ds-trie",children:i.jsxs(u,{title:"trie",children:[i.jsx(u.Tab,{code:$x,language:"python"}),i.jsx(u.Tab,{code:Zx,language:"javascript"}),i.jsx(u.Tab,{code:u_,language:"java"}),i.jsx(u.Tab,{code:x_,language:"cpp"}),i.jsx(u.Tab,{code:O_,language:"ruby"})]})})]})}const R_=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,P_=`def bubble_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        swapped = False\r
\r
        for j in range(0, n - i - 1):\r
            if arr[j] > arr[j + 1]:\r
                arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
                swapped = True\r
\r
        if not swapped:\r
            break\r
`,M_=`def bucket_sort(arr: list) -> list:\r
    num_buckets = 10\r
    min_num = min(arr)\r
    max_num = max(arr)\r
    bucket_size = (max_num - min_num) / num_buckets\r
    buckets = [[] for _ in range(num_buckets)]\r
\r
    for num in arr:\r
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].append(num)\r
\r
    return [num for bucket in buckets for num in sorted(bucket)]\r
`,I_=`def counting_sort(arr: list) -> list:\r
    max_num = max(arr)\r
    min_num = min(arr)\r
    count_range = max_num - min_num + 1\r
    count = [0] * count_range\r
    output = [0] * len(arr)\r
\r
    for num in arr:\r
        count[num - min_num] += 1\r
\r
    for i in range(1, count_range):\r
        count[i] += count[i - 1]\r
\r
    for num in arr[::-1]:\r
        output[count[num - min_num] - 1] = num\r
        count[num - min_num] -= 1\r
\r
    return output\r
`,D_=`def cube_sort(arr: list, processors: int) -> None:\r
    n = len(arr)\r
    subarrays = []\r
    subarray_size = n // processors\r
\r
    for i in range(processors):\r
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]\r
        subarrays.append(subarray)\r
\r
    for subarray in subarrays:\r
        subarray.sort()\r
\r
    for dimension in range(processors.bit_length() - 1):\r
        for i in range(processors):\r
            partner = i ^ (1 << dimension)\r
            if i < partner:\r
                merged = subarrays[i] + subarrays[partner]\r
            else:\r
                merged = subarrays[partner] + subarrays[i]\r
            merged.sort()\r
            subarrays[i] = merged[:subarray_size]\r
            subarrays[partner] = merged[subarray_size:]\r
\r
    arr[:] = [num for subarray in subarrays for num in subarray]\r
`,z_=`def heap_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    for i in range(n // 2 - 1, -1, -1):\r
        heapify(arr, n, i)\r
    for i in range(n - 1, 0, -1):\r
        arr[i], arr[0] = arr[0], arr[i]\r
        heapify(arr, i, 0)\r
\r
    return arr\r
\r
def heapify(arr: list, n: int, i: int) -> None:\r
    largest = i\r
    left = 2 * i + 1\r
    right = 2 * i + 2\r
\r
    if left < n and arr[left] > arr[largest]:\r
        largest = left\r
    if right < n and arr[right] > arr[largest]:\r
        largest = right\r
    if largest != i:\r
        arr[i], arr[largest] = arr[largest], arr[i]\r
        heapify(arr, n, largest)\r
`,B_=`def insertion_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(1, n):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
`,F_=`def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,U_=`def pancake_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for size in reversed(range(2, n + 1)):\r
        max_idx = find_max_index(arr, size)\r
\r
        if max_idx != size - 1:\r
            flip(arr, max_idx)\r
            flip(arr, size - 1)\r
\r
def flip(arr: list, i: int) -> None:\r
    left = 0\r
\r
    while left < i:\r
        arr[left], arr[i] = arr[i], arr[left]\r
        left += 1\r
        i -= 1\r
\r
def find_max_index(arr: list, n: int) -> int:\r
    max_idx = 0\r
\r
    for i in range(n):\r
        if arr[i] > arr[max_idx]:\r
            max_idx = i\r
\r
    return max_idx\r
`,H_=`def quick_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    pivot = arr[n // 2]\r
    left = [x for x in arr if x < pivot]\r
    right = [x for x in arr if x > pivot]\r
\r
    return quick_sort(left) + [pivot] + quick_sort(right)\r
`,$_=`def radix_sort(arr: list) -> None:\r
    max_val = max(arr)\r
    exp = 1\r
\r
    while max_val // exp > 0:\r
        counting_sort(arr, exp)\r
        exp *= 10\r
\r
def counting_sort(arr: list, exp: int) -> None:\r
    n = len(arr)\r
    output = [0] * n\r
    count = [0] * 10\r
\r
    for i in range(n):\r
        idx = arr[i] // exp\r
        count[idx % 10] += 1\r
\r
    for i in range(1, 10):\r
        count[i] += count[i - 1]\r
\r
    i = n - 1\r
\r
    while i >= 0:\r
        idx = arr[i] // exp\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
\r
    for i in range(n):\r
        arr[i] = output[i]\r
`,W_=`def selection_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for i in range(n):\r
        min_i = i\r
\r
        for j in range(i + 1, n):\r
            if arr[j] < arr[min_i]:\r
                min_i = j\r
\r
        if min_i != i:\r
            arr[i], arr[min_i] = arr[min_i], arr[i]\r
`,V_=`def shell_sort(arr: list) -> None:\r
    n = len(arr)\r
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for gap in gaps:\r
        for i in range(gap, n):\r
            tmp = arr[i]\r
            j = i\r
\r
            while j >= gap and arr[j - gap] > tmp:\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
\r
            if j != i:\r
                arr[j] = tmp\r
`,K_=`from threading import Thread\r
from time import sleep\r
\r
\r
def sleep_sort(arr: list ) -> list:\r
    sorted_arr = []\r
    threads = []\r
\r
    for num in arr:\r
        thread = Thread(target=snorlax, args=(num, sorted_arr))\r
        threads.append(thread)\r
\r
    for thread in threads:\r
        thread.start( )\r
\r
    for thread in threads:\r
        thread.join()\r
\r
    return sorted_arr\r
\r
def snorlax(num: float, arr: list) -> None:\r
    sleep(num / 1000.0)\r
    arr.append(num)\r
`,G_=`def tim_sort(arr: list) -> list:\r
    n = len(arr)\r
    min_run = 32\r
\r
    for start in range(0, n, min_run):\r
        end = min(start + min_run - 1, n - 1)\r
        insertion_sort(arr, start, end)\r
\r
    size = min_run\r
\r
    while size < n:\r
        for left in range(0, n, 2 * size):\r
            mid = min(n - 1, left + size - 1)\r
            right = min((left + 2 * size - 1), (n - 1))\r
            arr[left : right + 1] = merge(arr[left : mid + 1], arr[mid + 1 : right + 1])\r
        size *= 2\r
\r
    return arr\r
\r
def insertion_sort(arr: list, left: int, right: int) -> None:\r
    for i in range(left + 1, right + 1):\r
        key = arr[i]\r
\r
        while i > 0 and key < arr[i - 1]:\r
            arr[i] = arr[i - 1]\r
            i -= 1\r
\r
        arr[i] = key\r
\r
def merge_sort(arr: list) -> list:\r
    n = len(arr)\r
\r
    if n <= 1:\r
        return arr\r
\r
    mid = n // 2\r
    left = merge_sort(arr[:mid])\r
    right = merge_sort(arr[mid:])\r
\r
    return merge(left, right)\r
\r
def merge(left: list, right: list) -> list:\r
    output = []\r
\r
    while left and right:\r
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)\r
        output.append(min_num)\r
\r
    output.extend(left)\r
    output.extend(right)\r
\r
    return output\r
`,J_=`const bogoSort = (arr) => {\r
    const isSorted = (arr) => {\r
        for (let i = 0; i < arr.length - 1; i++) {\r
            if (arr[i] > arr[i + 1]) {\r
                return false\r
            }\r
        }\r
\r
        return true\r
    }\r
\r
    const shuffleArray = (arr) => {\r
        for (let i = arr.length - 1; i > 0; i--) {\r
            const j = Math.floor(Math.random() * (i + 1))\r
            [arr[i], arr[j]] = [arr[j], arr[i]]\r
        }\r
\r
        return arr\r
    }\r
\r
    while (!isSorted(arr)) {\r
        arr = shuffleArray(arr)\r
    }\r
}\r
`,Y_=`const bubbleSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let swapped = false\r
\r
        for (let j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]\r
                swapped = true\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break\r
        }\r
    }\r
}\r
`,Q_=`const bucketSort = (arr) => {\r
    const num_buckets = 10\r
    const min_num = Math.min(...arr)\r
    const max_num = Math.max(...arr)\r
    const bucket_size = (max_num - min_num) / num_buckets\r
    const buckets = Array.from({ length: num_buckets }, () => [])\r
\r
    for (const num of arr) {\r
        const index = Math.min(Math.floor((num - min_num) / bucket_size), num_buckets - 1)\r
        buckets[index].push(num)\r
    }\r
\r
    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b))\r
}\r
`,q_=`const countingSort = (arr) => {\r
    const max_num = Math.max(...arr)\r
    const min_num = Math.min(...arr)\r
    const count_range = max_num - min_num + 1\r
    const count = Array(count_range).fill(0)\r
    const output = Array(arr.length)\r
\r
    for (const num of arr) {\r
        count[num - min_num]++\r
    }\r
\r
    for (let i = 1; i < count_range; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    for (let i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - min_num] - 1] = arr[i]\r
        count[arr[i] - min_num]--\r
    }\r
\r
    return output\r
}\r
`,X_=`const cubeSort = (arr, processors) => {\r
    const n = arr.length\r
    const subarrays = []\r
    const subarraySize = Math.floor(n / processors)\r
\r
    for (let i = 0; i < processors; i++) {\r
        const subarray = arr.slice(i * subarraySize, (i + 1) * subarraySize)\r
        subarray.sort((a, b) => a - b)\r
        subarrays.push(subarray)\r
    }\r
\r
    for (let dimension = 0; dimension < Math.floor(Math.log2(processors)); dimension++) {\r
        for (let i = 0; i < processors; i++) {\r
            const partner = i ^ (1 << dimension)\r
            if (i < partner) {\r
                const merged = subarrays[i].concat(subarrays[partner])\r
                merged.sort((a, b) => a - b)\r
                subarrays[i] = merged.slice(0, subarraySize)\r
                subarrays[partner] = merged.slice(subarraySize)\r
            }\r
        }\r
    }\r
\r
    arr.splice(0, arr.length, ...subarrays.flat())\r
}\r
`,Z_=`const heapSort = (arr) => {\r
    const n = arr.length\r
\r
    const heapify = (arr, n, i) => {\r
        let largest = i\r
        const left = 2 * i + 1\r
        const right = 2 * i + 2\r
\r
        if (left < n && arr[left] > arr[largest]) {\r
            largest = left\r
        }\r
        if (right < n && arr[right] > arr[largest]) {\r
            largest = right\r
        }\r
        if (largest !== i) {\r
            [arr[i], arr[largest]] = [arr[largest], arr[i]]\r
            heapify(arr, n, largest)\r
        }\r
    }\r
\r
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {\r
        heapify(arr, n, i)\r
    }\r
    for (let i = n - 1; i > 0; i--) {\r
        [arr[i], arr[0]] = [arr[0], arr[i]]\r
        heapify(arr, i, 0)\r
    }\r
\r
    return arr\r
}\r
`,nb=`const insertionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 1; i < n; i++) {\r
        let key = arr[i]\r
        let j = i - 1\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j]\r
            j--\r
        }\r
\r
        arr[j + 1] = key\r
    }\r
}\r
`,rb=`const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    output.push(...left)\r
    output.push(...right)\r
\r
    return output\r
}\r
`,eb=`const pancakeSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let size = n; size > 1; size--) {\r
        const maxIdx = findMaxIndex(arr, size)\r
\r
        if (maxIdx !== size - 1) {\r
            flip(arr, maxIdx)\r
            flip(arr, size - 1)\r
        }\r
    }\r
}\r
\r
const flip = (arr, i) => {\r
    let left = 0\r
\r
    while (left < i) {\r
        [arr[left], arr[i]] = [arr[i], arr[left]]\r
        left++\r
        i--\r
    }\r
}\r
\r
const findMaxIndex = (arr, n) => {\r
    let maxIdx = 0\r
\r
    for (let i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i\r
        }\r
    }\r
\r
    return maxIdx\r
}\r
`,tb=`const quickSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const pivot = arr[Math.floor(n / 2)]\r
    const left = arr.filter(x => x < pivot)\r
    const right = arr.filter(x => x > pivot)\r
\r
    return [...quickSort(left), pivot, ...quickSort(right)]\r
}\r
`,ib=`const radixSort = (arr) => {\r
    const maxVal = Math.max(...arr)\r
    let exp = 1\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp)\r
        exp *= 10\r
    }\r
}\r
\r
const countingSort = (arr, exp) => {\r
    const n = arr.length\r
    const output = new Array(n).fill(0)\r
    const count = new Array(10).fill(0)\r
\r
    for (let i = 0; i < n; i++) {\r
        const idx = Math.floor(arr[i] / exp)\r
        count[idx % 10] += 1\r
    }\r
\r
    for (let i = 1; i < 10; i++) {\r
        count[i] += count[i - 1]\r
    }\r
\r
    let i = n - 1\r
\r
    while (i >= 0) {\r
        const idx = Math.floor(arr[i] / exp)\r
        output[count[idx % 10] - 1] = arr[i]\r
        count[idx % 10] -= 1\r
        i -= 1\r
    }\r
\r
    for (let i = 0; i < n; i++) {\r
        arr[i] = output[i]\r
    }\r
}\r
`,ab=`const selectionSort = (arr) => {\r
    const n = arr.length\r
\r
    for (let i = 0; i < n; i++) {\r
        let minIndex = i\r
\r
        for (let j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIndex]) {\r
                minIndex = j\r
            }\r
        }\r
\r
        if (minIndex !== i) {\r
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\r
        }\r
    }\r
}\r
`,ob=`const shellSort = (arr) => {\r
    const n = arr.length\r
    const gaps = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
    for (const gap of gaps) {\r
        for (let i = gap; i < n; i++) {\r
            const tmp = arr[i]\r
            let j = i\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap]\r
                j -= gap\r
            }\r
\r
            if (j !== i) {\r
                arr[j] = tmp\r
            }\r
        }\r
    }\r
}\r
`,sb=`const sleepSort = (arr) => {\r
    const sortedArr = []\r
    const promises = []\r
\r
    for (const num of arr) {\r
        promises.push(new Promise((resolve) => setTimeout(() => {\r
            sortedArr.push(num)\r
            resolve()\r
        }, num)))\r
    }\r
\r
    return Promise.all(promises).then(() => sortedArr)\r
}\r
`,lb=`const timSort = (arr) => {\r
    const n = arr.length\r
    const minRun = 32\r
\r
    for (let start = 0; start < n; start += minRun) {\r
        const end = Math.min(start + minRun - 1, n - 1)\r
        insertionSort(arr, start, end)\r
    }\r
\r
    let size = minRun\r
\r
    while (size < n) {\r
        for (let left = 0; left < n; left += 2 * size) {\r
            const mid = Math.min(n - 1, left + size - 1)\r
            const right = Math.min((left + 2 * size - 1), (n - 1))\r
            const merged = merge(arr.slice(left, mid + 1), arr.slice(mid + 1, right + 1))\r
            arr.splice(left, right - left + 1, ...merged)\r
        }\r
        size *= 2\r
    }\r
\r
    return arr\r
}\r
\r
const insertionSort = (arr, left, right) => {\r
    for (let i = left + 1; i <= right; i++) {\r
        const key = arr[i]\r
        let j = i\r
\r
        while (j > left && key < arr[j - 1]) {\r
            arr[j] = arr[j - 1]\r
            j--\r
        }\r
\r
        arr[j] = key\r
    }\r
}\r
\r
const mergeSort = (arr) => {\r
    const n = arr.length\r
\r
    if (n <= 1) {\r
        return arr\r
    }\r
\r
    const mid = Math.floor(n / 2)\r
    const left = mergeSort(arr.slice(0, mid))\r
    const right = mergeSort(arr.slice(mid))\r
\r
    return merge(left, right)\r
}\r
\r
const merge = (left, right) => {\r
    const output = []\r
\r
    while (left.length && right.length) {\r
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()\r
        output.push(minNum)\r
    }\r
\r
    return output.concat(left).concat(right)\r
}\r
`,ub=`import java.util.Arrays;\r
import java.util.Random;\r
\r
\r
public static void bogoSort(int[] arr) {\r
    int[] target = Arrays.copyOf(arr, arr.length);\r
    Arrays.sort(target);\r
\r
    while (!Arrays.equals(arr, target)) {\r
        shuffleArray(arr);\r
    }\r
}\r
\r
public static void shuffleArray(int[] arr) {\r
    Random rnd = new Random();\r
\r
    for (int i = arr.length - 1; i > 0; i--) {\r
        int index = rnd.nextInt(i + 1);\r
        int temp = arr[index];\r
        arr[index] = arr[i];\r
        arr[i] = temp;\r
    }\r
}\r
`,cb=`public static void bubbleSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        boolean swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; j++) {\r
            if (arr[j] > arr[j + 1]) {\r
                int temp = arr[j];\r
                arr[j] = arr[j + 1];\r
                arr[j + 1] = temp;\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,db=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.Collections;\r
import java.util.List;\r
\r
\r
public static int[] bucketSort(int[] arr) {\r
    int numBuckets = 10;\r
    int index;\r
    int[] result = new int[arr.length];\r
    int minNum = Arrays.stream(arr).min().getAsInt();\r
    int maxNum = Arrays.stream(arr).max().getAsInt();\r
    double bucketSize = (double) (maxNum - minNum) / numBuckets;\r
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);\r
\r
    for (int i = 0; i < numBuckets; i++) {\r
        buckets.add(new ArrayList<>());\r
    }\r
\r
    for (int num : arr) {\r
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);\r
        buckets.get(index).add(num);\r
    }\r
\r
    index = 0;\r
\r
    for (List<Integer> bucket : buckets) {\r
        Collections.sort(bucket);\r
\r
        for (int num : bucket) {\r
            result[index++] = num;\r
        }\r
    }\r
\r
    return result;\r
}\r
`,fb=`import java.util.Arrays;\r
\r
\r
public static int[] countingSort(int[] arr) {\r
    int maxNum = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);\r
    int minNum = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);\r
    int countRange = maxNum - minNum + 1;\r
    int[] count = new int[countRange];\r
    int[] output = new int[arr.length];\r
\r
    for (int num : arr) {\r
        count[num - minNum]++;\r
    }\r
\r
    for (int i = 1; i < countRange; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.length - 1; i >= 0; i--) {\r
        output[count[arr[i] - minNum] - 1] = arr[i];\r
        count[arr[i] - minNum]--;\r
    }\r
\r
    return output;\r
}\r
`,pb=`import java.util.ArrayList;\r
import java.util.Arrays;\r
import java.util.List;\r
\r
\r
public static void cubeSort(int[] arr, int processors) {\r
    int n = arr.length;\r
    List<int[]> subarrays = new ArrayList<>();\r
    int subarraySize = (n + processors - 1) / processors;\r
\r
    for (int i = 0; i < processors; i++) {\r
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];\r
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);\r
        Arrays.sort(subarray);\r
        subarrays.add(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {\r
        for (int i = 0; i < processors; i++) {\r
            int partner = i ^ (1 << dimension);\r
\r
            if (i < partner && partner < processors) {\r
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));\r
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);\r
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);\r
            }\r
        }\r
    }\r
\r
    int index = 0;\r
\r
    for (int[] subarray : subarrays) {\r
        for (int num : subarray) {\r
            arr[index++] = num;\r
        }\r
    }\r
}\r
\r
public static int[] merge(int[] arr1, int[] arr2) {\r
    int[] merged = new int[arr1.length + arr2.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < arr1.length && j < arr2.length) {\r
        if (arr1[i] < arr2[j]) {\r
            merged[k++] = arr1[i++];\r
        } else {\r
            merged[k++] = arr2[j++];\r
        }\r
    }\r
\r
    while (i < arr1.length) {\r
        merged[k++] = arr1[i++];\r
    }\r
\r
    while (j < arr2.length) {\r
        merged[k++] = arr2[j++];\r
    }\r
\r
    return merged;\r
}\r
`,hb=`public static int[] heapSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = n / 2 - 1; i >= 0; i--) {\r
        heapify(arr, n, i);\r
    }\r
\r
    for (int i = n - 1; i > 0; i--) {\r
        int temp = arr[0];\r
        arr[0] = arr[i];\r
        arr[i] = temp;\r
\r
        heapify(arr, i, 0);\r
    }\r
\r
    return arr;\r
}\r
\r
public static void heapify(int[] arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        int temp = arr[i];\r
        arr[i] = arr[largest];\r
        arr[largest] = temp;\r
\r
        heapify(arr, n, largest);\r
    }\r
}\r
`,gb=`public static void insertionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 1; i < n; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,mb=`import java.util.Arrays;\r
\r
\r
public static int[] mergeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    int[] left = Arrays.copyOfRange(arr, 0, mid);\r
    int[] right = Arrays.copyOfRange(arr, mid, n);\r
\r
    left = mergeSort(left);\r
    right = mergeSort(right);\r
\r
    return merge(left, right);\r
}\r
\r
public static int[] merge(int[] left, int[] right) {\r
    int[] output = new int[left.length + right.length];\r
    int i = 0, j = 0, k = 0;\r
\r
    while (i < left.length && j < right.length) {\r
        if (left[i] <= right[j]) {\r
            output[k++] = left[i++];\r
        } else {\r
            output[k++] = right[j++];\r
        }\r
    }\r
\r
    while (i < left.length) {\r
        output[k++] = left[i++];\r
    }\r
\r
    while (j < right.length) {\r
        output[k++] = right[j++];\r
    }\r
\r
    return output;\r
}\r
`,vb=`public static void pancakeSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int size = n; size >= 2; size--) {\r
        int maxIdx = findMaxIndex(arr, size);\r
\r
        if (maxIdx != size - 1) {\r
            flip(arr, maxIdx);\r
            flip(arr, size - 1);\r
        }\r
    }\r
}\r
\r
public static void flip(int[] arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        int temp = arr[left];\r
        arr[left] = arr[i];\r
        arr[i] = temp;\r
        left++;\r
        i--;\r
    }\r
}\r
\r
public static int findMaxIndex(int[] arr, int n) {\r
    int maxIdx = 0;\r
\r
    for (int i = 0; i < n; i++) {\r
        if (arr[i] > arr[maxIdx]) {\r
            maxIdx = i;\r
        }\r
    }\r
\r
    return maxIdx;\r
}\r
`,yb=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] quickSort(int[] arr) {\r
    int n = arr.length;\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    List<Integer> left = new ArrayList<>();\r
    List<Integer> right = new ArrayList<>();\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.add(x);\r
        } else if (x > pivot) {\r
            right.add(x);\r
        }\r
    }\r
\r
    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());\r
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());\r
    int[] result = new int[n];\r
\r
    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);\r
    result[sortedLeft.length] = pivot;\r
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);\r
\r
    return result;\r
}\r
`,xb=`import java.util.Arrays;\r
\r
\r
public static void radixSort(int[] arr) {\r
    int maxVal = Arrays.stream(arr).max().getAsInt();\r
    int exp = 1;\r
\r
    while (maxVal / exp > 0) {\r
        countingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
\r
public static void countingSort(int[] arr, int exp) {\r
    int n = arr.length;\r
    int[] output = new int[n];\r
    int[] count = new int[10];\r
\r
    for (int i = 0; i < n; i++) {\r
        int idx = arr[i] / exp;\r
        count[idx % 10]++;\r
    }\r
\r
    for (int i = 1; i < 10; i++) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; i--) {\r
        int idx = arr[i] / exp;\r
        output[count[idx % 10] - 1] = arr[i];\r
        count[idx % 10]--;\r
    }\r
\r
    System.arraycopy(output, 0, arr, 0, n);\r
}\r
`,_b=`public static void selectionSort(int[] arr) {\r
    int n = arr.length;\r
\r
    for (int i = 0; i < n; i++) {\r
        int minIdx = i;\r
\r
        for (int j = i + 1; j < n; j++) {\r
            if (arr[j] < arr[minIdx]) {\r
                minIdx = j;\r
            }\r
        }\r
\r
        if (minIdx != i) {\r
            int temp = arr[i];\r
            arr[i] = arr[minIdx];\r
            arr[minIdx] = temp;\r
        }\r
    }\r
}\r
`,bb=`public static void shellSort(int[] arr) {\r
    int n = arr.length;\r
    int[] gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; i++) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,wb=`import java.util.ArrayList;\r
import java.util.List;\r
\r
\r
public static int[] sleepSort(int[] arr) {\r
    List<Integer> sortedArr = new ArrayList<>();\r
    List<Thread> threads = new ArrayList<>();\r
\r
    for (int num : arr) {\r
        Thread thread = new Thread(() -> snorlax(num, sortedArr));\r
        threads.add(thread);\r
    }\r
\r
    for (Thread thread : threads) {\r
        thread.start();\r
    }\r
\r
    for (Thread thread : threads) {\r
        try {\r
            thread.join();\r
        } catch (InterruptedException e) {\r
            e.printStackTrace();\r
        }\r
    }\r
\r
    return sortedArr.stream().mapToInt(i -> i).toArray();\r
}\r
\r
public static void snorlax(int num, List<Integer> arr) {\r
    try {\r
        Thread.sleep(num);\r
    } catch (InterruptedException e) {\r
        e.printStackTrace();\r
    }\r
    arr.add(num);\r
}\r
`,Tb=`public static int[] timSort(int[] arr) {\r
    int n = arr.length;\r
    int minRun = 32;\r
\r
    for (int start = 0; start < n; start += minRun) {\r
        int end = Math.min(start + minRun - 1, n - 1);\r
        insertionSort(arr, start, end);\r
    }\r
\r
    int size = minRun;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = Math.min(n - 1, left + size - 1);\r
            int right = Math.min(left + 2 * size - 1, n - 1);\r
            arr = merge(arr, left, mid, right);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
\r
public static void insertionSort(int[] arr, int left, int right) {\r
    for (int i = left + 1; i <= right; i++) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            j--;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
public static int[] merge(int[] arr, int left, int mid, int right) {\r
    int[] output = new int[right - left + 1];\r
    int i = left, j = mid + 1, k = 0;\r
\r
    while (i <= mid && j <= right) {\r
        if (arr[i] <= arr[j]) {\r
            output[k++] = arr[i++];\r
        } else {\r
            output[k++] = arr[j++];\r
        }\r
    }\r
\r
    while (i <= mid) {\r
        output[k++] = arr[i++];\r
    }\r
\r
    while (j <= right) {\r
        output[k++] = arr[j++];\r
    }\r
\r
    System.arraycopy(output, 0, arr, left, output.length);\r
    return arr;\r
}\r
`,Sb=`#include <algorithm>\r
#include <random>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void BogoSort(vector<int>& arr) {\r
    vector<int> target = arr;\r
    sort(target.begin(), target.end());\r
\r
    random_device rd;\r
    mt19937 g(rd());\r
\r
    while (!is_sorted(arr.begin(), arr.end())) {\r
        shuffle(arr.begin(), arr.end(), g);\r
    }\r
}\r
`,jb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void BubbleSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        bool swapped = false;\r
\r
        for (int j = 0; j < n - i - 1; ++j) {\r
            if (arr[j] > arr[j + 1]) {\r
                std::swap(arr[j], arr[j + 1]);\r
                swapped = true;\r
            }\r
        }\r
\r
        if (!swapped) {\r
            break;\r
        }\r
    }\r
}\r
`,kb=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> BucketSort(vector<int>& arr) {\r
    int num_buckets = 10;\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;\r
    vector<vector<int>> buckets(num_buckets);\r
    vector<int> result;\r
\r
    for (int num : arr) {\r
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);\r
        buckets[index].push_back(num);\r
    }\r
\r
    for (auto& bucket : buckets) {\r
        sort(bucket.begin(), bucket.end());\r
        result.insert(result.end(), bucket.begin(), bucket.end());\r
    }\r
\r
    return result;\r
}\r
`,Eb=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
vector<int> CountingSort(vector<int>& arr) {\r
    int max_num = *max_element(arr.begin(), arr.end());\r
    int min_num = *min_element(arr.begin(), arr.end());\r
    int count_range = max_num - min_num + 1;\r
    vector<int> count(count_range, 0);\r
    vector<int> output(arr.size(), 0);\r
\r
    for (int num : arr) {\r
        count[num - min_num]++;\r
    }\r
\r
    for (int i = 1; i < count_range; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = arr.size() - 1; i >= 0; --i) {\r
        output[count[arr[i] - min_num] - 1] = arr[i];\r
        count[arr[i] - min_num]--;\r
    }\r
\r
    return output;\r
}\r
`,Nb=`#include <vector>\r
#include <algorithm>\r
#include <cmath>\r
\r
using namespace std;\r
\r
\r
void CubeSort(vector<int>& arr, int processors) {\r
    int n = arr.size();\r
    vector<vector<int>> subarrays;\r
    int subarray_size = n / processors;\r
\r
    for (int i = 0; i < processors; ++i) {\r
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);\r
        sort(subarray.begin(), subarray.end());\r
        subarrays.push_back(subarray);\r
    }\r
\r
    for (int dimension = 0; dimension < log2(processors); ++dimension) {\r
        for (int i = 0; i < processors; ++i) {\r
            int partner = i ^ (1 << dimension);\r
            vector<int> merged;\r
            if (i < partner) {\r
                merged = subarrays[i];\r
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());\r
            } else {\r
                merged = subarrays[partner];\r
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());\r
            }\r
            sort(merged.begin(), merged.end());\r
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);\r
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());\r
        }\r
    }\r
\r
    arr.clear();\r
    for (auto& subarray : subarrays) {\r
        arr.insert(arr.end(), subarray.begin(), subarray.end());\r
    }\r
}\r
`,Ob=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void Heapify(vector<int>& arr, int n, int i) {\r
    int largest = i;\r
    int left = 2 * i + 1;\r
    int right = 2 * i + 2;\r
\r
    if (left < n && arr[left] > arr[largest]) {\r
        largest = left;\r
    }\r
    if (right < n && arr[right] > arr[largest]) {\r
        largest = right;\r
    }\r
    if (largest != i) {\r
        swap(arr[i], arr[largest]);\r
        Heapify(arr, n, largest);\r
    }\r
}\r
\r
void HeapSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = n / 2 - 1; i >= 0; --i) {\r
        Heapify(arr, n, i);\r
    }\r
    for (int i = n - 1; i > 0; --i) {\r
        swap(arr[0], arr[i]);\r
        Heapify(arr, i, 0);\r
    }\r
}\r
`,Ab=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 1; i < n; ++i) {\r
        int key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= 0 && key < arr[j]) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
`,Cb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> Merge(vector<int>& left, vector<int>& right) {\r
    vector<int> output;\r
\r
    while (!left.empty() && !right.empty()) {\r
        int min_num = (left[0] <= right[0]) ? left[0] : right[0];\r
        output.push_back(min_num);\r
\r
        if (left[0] <= right[0]) {\r
            left.erase(left.begin());\r
        } else {\r
            right.erase(right.begin());\r
        }\r
    }\r
\r
    output.insert(output.end(), left.begin(), left.end());\r
    output.insert(output.end(), right.begin(), right.end());\r
\r
    return output;\r
}\r
\r
vector<int> MergeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int mid = n / 2;\r
    vector<int> left(arr.begin(), arr.begin() + mid);\r
    vector<int> right(arr.begin() + mid, arr.end());\r
\r
    left = MergeSort(left);\r
    right = MergeSort(right);\r
\r
    return Merge(left, right);\r
}\r
`,Lb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
int FindMaxIndex(vector<int>& arr, int n) {\r
    int max_idx = 0;\r
\r
    for (int i = 0; i < n; ++i) {\r
        if (arr[i] > arr[max_idx]) {\r
            max_idx = i;\r
        }\r
    }\r
\r
    return max_idx;\r
}\r
\r
void Flip(vector<int>& arr, int i) {\r
    int left = 0;\r
\r
    while (left < i) {\r
        swap(arr[left], arr[i]);\r
        left++;\r
        i--;\r
    }\r
}\r
\r
void PancakeSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int size = n; size >= 2; --size) {\r
        int max_idx = FindMaxIndex(arr, size);\r
\r
        if (max_idx != size - 1) {\r
            Flip(arr, max_idx);\r
            Flip(arr, size - 1);\r
        }\r
    }\r
}\r
`,Rb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
vector<int> QuickSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    if (n <= 1) {\r
        return arr;\r
    }\r
\r
    int pivot = arr[n / 2];\r
    vector<int> left, right;\r
\r
    for (int x : arr) {\r
        if (x < pivot) {\r
            left.push_back(x);\r
        } else if (x > pivot) {\r
            right.push_back(x);\r
        }\r
    }\r
\r
    left = QuickSort(left);\r
    right = QuickSort(right);\r
\r
    left.push_back(pivot);\r
    left.insert(left.end(), right.begin(), right.end());\r
\r
    return left;\r
}\r
`,Pb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void CountingSort(vector<int>& arr, int exp) {\r
    int n = arr.size();\r
    vector<int> output(n, 0);\r
    vector<int> count(10, 0);\r
\r
    for (int i = 0; i < n; ++i) {\r
        int idx = arr[i] / exp % 10;\r
        count[idx]++;\r
    }\r
\r
    for (int i = 1; i < 10; ++i) {\r
        count[i] += count[i - 1];\r
    }\r
\r
    for (int i = n - 1; i >= 0; --i) {\r
        int idx = arr[i] / exp % 10;\r
        output[count[idx] - 1] = arr[i];\r
        count[idx]--;\r
    }\r
\r
    for (int i = 0; i < n; ++i) {\r
        arr[i] = output[i];\r
    }\r
}\r
\r
void RadixSort(vector<int>& arr) {\r
    int max_val = *max_element(arr.begin(), arr.end());\r
    int exp = 1;\r
\r
    while (max_val / exp > 0) {\r
        CountingSort(arr, exp);\r
        exp *= 10;\r
    }\r
}\r
`,Mb=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void SelectionSort(vector<int>& arr) {\r
    int n = arr.size();\r
\r
    for (int i = 0; i < n; ++i) {\r
        int min_i = i;\r
\r
        for (int j = i + 1; j < n; ++j) {\r
            if (arr[j] < arr[min_i]) {\r
                min_i = j;\r
            }\r
        }\r
\r
        if (min_i != i) {\r
            swap(arr[i], arr[min_i]);\r
        }\r
    }\r
}\r
`,Ib=`#include <vector>\r
\r
using namespace std;\r
\r
\r
void ShellSort(vector<int>& arr) {\r
    int n = arr.size();\r
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};\r
\r
    for (int gap : gaps) {\r
        for (int i = gap; i < n; ++i) {\r
            int tmp = arr[i];\r
            int j = i;\r
\r
            while (j >= gap && arr[j - gap] > tmp) {\r
                arr[j] = arr[j - gap];\r
                j -= gap;\r
            }\r
\r
            if (j != i) {\r
                arr[j] = tmp;\r
            }\r
        }\r
    }\r
}\r
`,Db=`#include <chrono>\r
#include <thread>\r
#include <vector>\r
\r
using namespace std;\r
\r
\r
void Snorlax(double num, vector<double>& arr) {\r
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));\r
    arr.push_back(num);\r
}\r
\r
vector<double> SleepSort(vector<double>& arr) {\r
    vector<double> sorted_arr;\r
    vector<thread> threads;\r
\r
    for (double num : arr) {\r
        threads.emplace_back(Snorlax, num, ref(sorted_arr));\r
    }\r
\r
    for (thread& t : threads) {\r
        t.join();\r
    }\r
\r
    return sorted_arr;\r
}\r
`,zb=`#include <vector>\r
#include <algorithm>\r
\r
using namespace std;\r
\r
\r
void InsertionSort(vector<double>& arr, int left, int right) {\r
    for (int i = left + 1; i <= right; ++i) {\r
        double key = arr[i];\r
        int j = i - 1;\r
\r
        while (j >= left && arr[j] > key) {\r
            arr[j + 1] = arr[j];\r
            --j;\r
        }\r
\r
        arr[j + 1] = key;\r
    }\r
}\r
\r
vector<double> Merge(const vector<double>& left, const vector<double>& right) {\r
    vector<double> output;\r
\r
    int left_index = 0;\r
    int right_index = 0;\r
\r
    while (left_index < left.size() && right_index < right.size()) {\r
        if (left[left_index] <= right[right_index]) {\r
            output.push_back(left[left_index++]);\r
        } else {\r
            output.push_back(right[right_index++]);\r
        }\r
    }\r
\r
    while (left_index < left.size()) {\r
        output.push_back(left[left_index++]);\r
    }\r
\r
    while (right_index < right.size()) {\r
        output.push_back(right[right_index++]);\r
    }\r
\r
    return output;\r
}\r
\r
vector<double> TimSort(vector<double>& arr) {\r
    int n = arr.size();\r
    int min_run = 32;\r
\r
    for (int start = 0; start < n; start += min_run) {\r
        int end = min(start + min_run - 1, n - 1);\r
        InsertionSort(arr, start, end);\r
    }\r
\r
    int size = min_run;\r
\r
    while (size < n) {\r
        for (int left = 0; left < n; left += 2 * size) {\r
            int mid = min(n - 1, left + size - 1);\r
            int right = min((left + 2 * size - 1), (n - 1));\r
            vector<double> merged = Merge(\r
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),\r
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)\r
            );\r
            copy(merged.begin(), merged.end(), arr.begin() + left);\r
        }\r
        size *= 2;\r
    }\r
\r
    return arr;\r
}\r
`,Bb=`def bogo_sort(arr)\r
  target = arr.sort\r
\r
  until arr == target\r
    arr.shuffle!\r
  end\r
end\r
`,Fb=`def bubble_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    swapped = false\r
\r
    (0...(n - i - 1)).each do |j|\r
      if arr[j] > arr[j + 1]\r
        arr[j], arr[j + 1] = arr[j + 1], arr[j]\r
        swapped = true\r
      end\r
    end\r
\r
    break unless swapped\r
  end\r
end\r
`,Ub=`def bucket_sort(arr)\r
  num_buckets = 10\r
  min_num     = arr.min\r
  max_num     = arr.max\r
  bucket_size = (max_num - min_num).to_f / num_buckets\r
  buckets     = Array.new(num_buckets) { [] }\r
\r
  arr.each do |num|\r
    index = [( (num - min_num) / bucket_size ).to_i, num_buckets - 1].min\r
    buckets[index] << num\r
  end\r
\r
  buckets.map { |bucket| bucket.sort }.flatten\r
end\r
`,Hb=`\r
def counting_sort(arr)\r
  max_num     = arr.max\r
  min_num     = arr.min\r
  count_range = max_num - min_num + 1\r
  count       = Array.new(count_range, 0)\r
  output      = Array.new(arr.size, 0)\r
\r
  arr.each do |num|\r
    count[num - min_num] += 1\r
  end\r
\r
  (1...count_range).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  arr.reverse_each do |num|\r
    output[count[num - min_num] - 1] = num\r
    count[num - min_num] -= 1\r
  end\r
\r
  output\r
end\r
`,$b=`def cube_sort(arr, processors)\r
  n             = arr.size\r
  subarrays     = []\r
  subarray_size = n / processors\r
\r
  (0...processors).each do |i|\r
    subarray = arr[i * subarray_size, subarray_size]\r
    subarrays << subarray\r
  end\r
\r
  subarrays.each(&:sort!)\r
\r
  (0...(processors.bit_length - 1)).each do |dimension|\r
    (0...processors).each do |i|\r
      partner = i ^ (1 << dimension)\r
      if i < partner\r
        merged = subarrays[i] + subarrays[partner]\r
      else\r
        merged = subarrays[partner] + subarrays[i]\r
      end\r
      merged.sort!\r
      subarrays[i] = merged[0...subarray_size]\r
      subarrays[partner] = merged[subarray_size, subarray_size]\r
    end\r
  end\r
\r
  arr.replace(subarrays.flatten)\r
end\r
`,Wb=`def heap_sort(arr)\r
  n = arr.size\r
\r
  (n / 2 - 1).downto(0) do |i|\r
    heapify(arr, n, i)\r
  end\r
\r
  (n - 1).downto(1) do |i|\r
    arr[i], arr[0] = arr[0], arr[i]\r
    heapify(arr, i, 0)\r
  end\r
\r
  arr\r
end\r
\r
def heapify(arr, n, i)\r
  largest = i\r
  left = 2 * i + 1\r
  right = 2 * i + 2\r
\r
  largest = left if left < n && arr[left] > arr[largest]\r
  largest = right if right < n && arr[right] > arr[largest]\r
\r
  if largest != i\r
    arr[i], arr[largest] = arr[largest], arr[i]\r
    heapify(arr, n, largest)\r
  end\r
end\r
`,Vb=`def insertion_sort(arr)\r
  n = arr.size\r
\r
  (1...n).each do |i|\r
    key = arr[i]\r
    j = i - 1\r
\r
    while j >= 0 && key < arr[j]\r
      arr[j + 1] = arr[j]\r
      j -= 1\r
    end\r
\r
    arr[j + 1] = key\r
  end\r
end\r
`,Kb=`def merge_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  mid   = n / 2\r
  left  = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`,Gb=`def pancake_sort(arr)\r
  n = arr.size\r
\r
  (2..n).to_a.reverse.each do |size|\r
    max_idx = find_max_index(arr, size)\r
\r
    if max_idx != size - 1\r
      flip(arr, max_idx)\r
      flip(arr, size - 1)\r
    end\r
  end\r
end\r
\r
def flip(arr, i)\r
  left = 0\r
\r
  while left < i\r
    arr[left], arr[i] = arr[i], arr[left]\r
    left += 1\r
    i -= 1\r
  end\r
end\r
\r
def find_max_index(arr, n)\r
  max_idx = 0\r
\r
  n.times do |i|\r
    max_idx = i if arr[i] > arr[max_idx]\r
  end\r
\r
  max_idx\r
end\r
`,Jb=`def quick_sort(arr)\r
  n = arr.size\r
  return arr if n <= 1\r
\r
  pivot = arr[n / 2]\r
  left  = arr.select { |x| x < pivot }\r
  right = arr.select { |x| x > pivot }\r
\r
  quick_sort(left) + [pivot] + quick_sort(right)\r
end\r
`,Yb=`def radix_sort(arr)\r
  max_val = arr.max\r
  exp     = 1\r
\r
  while max_val / exp > 0\r
    counting_sort(arr, exp)\r
    exp *= 10\r
  end\r
end\r
\r
def counting_sort(arr, exp)\r
  n       = arr.size\r
  output  = Array.new(n, 0)\r
  count   = Array.new(10, 0)\r
\r
  n.times do |i|\r
    idx = arr[i] / exp\r
    count[idx % 10] += 1\r
  end\r
\r
  (1...10).each do |i|\r
    count[i] += count[i - 1]\r
  end\r
\r
  (n - 1).downto(0) do |i|\r
    idx = arr[i] / exp\r
    output[count[idx % 10] - 1] = arr[i]\r
    count[idx % 10] -= 1\r
  end\r
\r
  n.times do |i|\r
    arr[i] = output[i]\r
  end\r
end\r
`,Qb=`def selection_sort(arr)\r
  n = arr.size\r
\r
  n.times do |i|\r
    min_i = i\r
\r
    ((i + 1)...n).each do |j|\r
      min_i = j if arr[j] < arr[min_i]\r
    end\r
\r
    arr[i], arr[min_i] = arr[min_i], arr[i] if min_i != i\r
  end\r
end\r
`,qb=`def shell_sort(arr)\r
  n     = arr.size\r
  gaps  = [701, 301, 132, 57, 23, 10, 4, 1]\r
\r
  gaps.each do |gap|\r
    (gap...n).each do |i|\r
      tmp = arr[i]\r
      j = i\r
\r
      while j >= gap && arr[j - gap] > tmp\r
        arr[j] = arr[j - gap]\r
        j -= gap\r
      end\r
\r
      arr[j] = tmp if j != i\r
    end\r
  end\r
end\r
`,Xb=`def sleep_sort(arr)\r
  sorted_arr  = []\r
  threads     = []\r
\r
  arr.each do |num|\r
    threads << Thread.new do\r
      sleep(num / 1000.0)\r
      sorted_arr << num\r
    end\r
  end\r
\r
  threads.each(&:join)\r
  sorted_arr\r
end\r
`,Zb=`def tim_sort(arr)\r
  n       = arr.size\r
  min_run = 32\r
\r
  (0...n).step(min_run) do |start_idx|\r
    end_idx = [start_idx + min_run - 1, n - 1].min\r
    insertion_sort(arr, start_idx, end_idx)\r
  end\r
\r
  size = min_run\r
\r
  while size < n\r
    (0...n).step(2 * size) do |left|\r
      mid = [left + size - 1, n - 1].min\r
      right = [left + 2 * size - 1, n - 1].min\r
      arr[left..right] = merge(arr[left..mid], arr[(mid + 1)..right])\r
    end\r
    size *= 2\r
  end\r
\r
  arr\r
end\r
\r
def insertion_sort(arr, left, right)\r
  (left + 1..right).each do |i|\r
    key = arr[i]\r
    j = i\r
    while j > left && key < arr[j - 1]\r
      arr[j] = arr[j - 1]\r
      j -= 1\r
    end\r
    arr[j] = key\r
  end\r
end\r
\r
def merge_sort(arr)\r
  return arr if arr.size <= 1\r
\r
  mid = arr.size / 2\r
  left = merge_sort(arr[0...mid])\r
  right = merge_sort(arr[mid..-1])\r
\r
  merge(left, right)\r
end\r
\r
def merge(left, right)\r
  output = []\r
\r
  until left.empty? || right.empty?\r
    if left.first <= right.first\r
      output << left.shift\r
    else\r
      output << right.shift\r
    end\r
  end\r
\r
  output + left + right\r
end\r
`;function nw(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Sorting Algorithms"}),i.jsx("section",{id:"sort-bubble",children:i.jsxs(u,{title:"bubble sort",children:[i.jsx(u.Tab,{code:P_,language:"python"}),i.jsx(u.Tab,{code:Y_,language:"javascript"}),i.jsx(u.Tab,{code:cb,language:"java"}),i.jsx(u.Tab,{code:jb,language:"cpp"}),i.jsx(u.Tab,{code:Fb,language:"ruby"})]})}),i.jsx("section",{id:"sort-selection",children:i.jsxs(u,{title:"selection sort",children:[i.jsx(u.Tab,{code:W_,language:"python"}),i.jsx(u.Tab,{code:ab,language:"javascript"}),i.jsx(u.Tab,{code:_b,language:"java"}),i.jsx(u.Tab,{code:Mb,language:"cpp"}),i.jsx(u.Tab,{code:Qb,language:"ruby"})]})}),i.jsx("section",{id:"sort-insertion",children:i.jsxs(u,{title:"insertion sort",children:[i.jsx(u.Tab,{code:B_,language:"python"}),i.jsx(u.Tab,{code:nb,language:"javascript"}),i.jsx(u.Tab,{code:gb,language:"java"}),i.jsx(u.Tab,{code:Ab,language:"cpp"}),i.jsx(u.Tab,{code:Vb,language:"ruby"})]})}),i.jsx("section",{id:"sort-shell",children:i.jsxs(u,{title:"shell sort",children:[i.jsx(u.Tab,{code:V_,language:"python"}),i.jsx(u.Tab,{code:ob,language:"javascript"}),i.jsx(u.Tab,{code:bb,language:"java"}),i.jsx(u.Tab,{code:Ib,language:"cpp"}),i.jsx(u.Tab,{code:qb,language:"ruby"})]})}),i.jsx("section",{id:"sort-merge",children:i.jsxs(u,{title:"merge sort",children:[i.jsx(u.Tab,{code:F_,language:"python"}),i.jsx(u.Tab,{code:rb,language:"javascript"}),i.jsx(u.Tab,{code:mb,language:"java"}),i.jsx(u.Tab,{code:Cb,language:"cpp"}),i.jsx(u.Tab,{code:Kb,language:"ruby"})]})}),i.jsx("section",{id:"sort-quick",children:i.jsxs(u,{title:"quick sort",children:[i.jsx(u.Tab,{code:H_,language:"python"}),i.jsx(u.Tab,{code:tb,language:"javascript"}),i.jsx(u.Tab,{code:yb,language:"java"}),i.jsx(u.Tab,{code:Rb,language:"cpp"}),i.jsx(u.Tab,{code:Jb,language:"ruby"})]})}),i.jsx("section",{id:"sort-tim",children:i.jsxs(u,{title:"timsort",children:[i.jsx(u.Tab,{code:G_,language:"python"}),i.jsx(u.Tab,{code:lb,language:"javascript"}),i.jsx(u.Tab,{code:Tb,language:"java"}),i.jsx(u.Tab,{code:zb,language:"cpp"}),i.jsx(u.Tab,{code:Zb,language:"ruby"})]})}),i.jsx("section",{id:"sort-heap",children:i.jsxs(u,{title:"heap sort",children:[i.jsx(u.Tab,{code:z_,language:"python"}),i.jsx(u.Tab,{code:Z_,language:"javascript"}),i.jsx(u.Tab,{code:hb,language:"java"}),i.jsx(u.Tab,{code:Ob,language:"cpp"}),i.jsx(u.Tab,{code:Wb,language:"ruby"})]})}),i.jsx("section",{id:"sort-counting",children:i.jsxs(u,{title:"counting sort",children:[i.jsx(u.Tab,{code:I_,language:"python"}),i.jsx(u.Tab,{code:q_,language:"javascript"}),i.jsx(u.Tab,{code:fb,language:"java"}),i.jsx(u.Tab,{code:Eb,language:"cpp"}),i.jsx(u.Tab,{code:Hb,language:"ruby"})]})}),i.jsx("section",{id:"sort-bucket",children:i.jsxs(u,{title:"bucket sort",children:[i.jsx(u.Tab,{code:M_,language:"python"}),i.jsx(u.Tab,{code:Q_,language:"javascript"}),i.jsx(u.Tab,{code:db,language:"java"}),i.jsx(u.Tab,{code:kb,language:"cpp"}),i.jsx(u.Tab,{code:Ub,language:"ruby"})]})}),i.jsx("section",{id:"sort-radix",children:i.jsxs(u,{title:"radix sort",children:[i.jsx(u.Tab,{code:$_,language:"python"}),i.jsx(u.Tab,{code:ib,language:"javascript"}),i.jsx(u.Tab,{code:xb,language:"java"}),i.jsx(u.Tab,{code:Pb,language:"cpp"}),i.jsx(u.Tab,{code:Yb,language:"ruby"})]})}),i.jsx("section",{id:"sort-cube",children:i.jsxs(u,{title:"cubesort",children:[i.jsx(u.Tab,{code:D_,language:"python"}),i.jsx(u.Tab,{code:X_,language:"javascript"}),i.jsx(u.Tab,{code:pb,language:"java"}),i.jsx(u.Tab,{code:Nb,language:"cpp"}),i.jsx(u.Tab,{code:$b,language:"ruby"})]})}),i.jsx("section",{id:"sort-bogo",children:i.jsxs(u,{title:"bogo sort",children:[i.jsx(u.Tab,{code:R_,language:"python"}),i.jsx(u.Tab,{code:J_,language:"javascript"}),i.jsx(u.Tab,{code:ub,language:"java"}),i.jsx(u.Tab,{code:Sb,language:"cpp"}),i.jsx(u.Tab,{code:Bb,language:"ruby"})]})}),i.jsx("section",{id:"sort-pancake",children:i.jsxs(u,{title:"pancake sort",children:[i.jsx(u.Tab,{code:U_,language:"python"}),i.jsx(u.Tab,{code:eb,language:"javascript"}),i.jsx(u.Tab,{code:vb,language:"java"}),i.jsx(u.Tab,{code:Lb,language:"cpp"}),i.jsx(u.Tab,{code:Gb,language:"ruby"})]})}),i.jsx("section",{id:"sort-sleep",children:i.jsxs(u,{title:"sleep sort",children:[i.jsx(u.Tab,{code:K_,language:"python"}),i.jsx(u.Tab,{code:sb,language:"javascript"}),i.jsx(u.Tab,{code:wb,language:"java"}),i.jsx(u.Tab,{code:Db,language:"cpp"}),i.jsx(u.Tab,{code:Xb,language:"ruby"})]})})]})}function rw(){const{isSidebarOpen:n}=Fs(),r=Qn(iu.main,!n&&iu.sidebarHidden);return i.jsxs("main",{className:r,children:[i.jsx(Vg,{}),i.jsx(F1,{}),i.jsx(q1,{}),i.jsx(l0,{}),i.jsx(x0,{}),i.jsx(M0,{}),i.jsx(wv,{}),i.jsx(Nv,{}),i.jsx(ny,{}),i.jsx(oy,{}),i.jsx(wy,{}),i.jsx(xx,{}),i.jsx(Mx,{}),i.jsx(L_,{}),i.jsx(nw,{})]})}function ew(){return i.jsx(_i.StrictMode,{children:i.jsx(Eh,{children:i.jsx(jh,{children:i.jsxs("div",{className:"App",children:[i.jsx(Ah,{}),i.jsx(Ng,{}),i.jsx(rw,{})]})})})})}qa.createRoot(document.getElementById("root")).render(i.jsx(ew,{}));
