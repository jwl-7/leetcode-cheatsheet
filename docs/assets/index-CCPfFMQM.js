(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Va(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gu={exports:{}},eo={},mu={exports:{}},tn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ht=Symbol.for("react.element"),Xd=Symbol.for("react.portal"),Zd=Symbol.for("react.fragment"),nf=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),Vs=Symbol.iterator;function uf(n){return n===null||typeof n!="object"?null:(n=Vs&&n[Vs]||n["@@iterator"],typeof n=="function"?n:null)}var vu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yu=Object.assign,xu={};function Xe(n,r,e){this.props=n,this.context=r,this.refs=xu,this.updater=e||vu}Xe.prototype.isReactComponent={};Xe.prototype.setState=function(n,r){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,r,"setState")};Xe.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function _u(){}_u.prototype=Xe.prototype;function Ka(n,r,e){this.props=n,this.context=r,this.refs=xu,this.updater=e||vu}var Ga=Ka.prototype=new _u;Ga.constructor=Ka;yu(Ga,Xe.prototype);Ga.isPureReactComponent=!0;var Ks=Array.isArray,wu=Object.prototype.hasOwnProperty,Ja={current:null},Su={key:!0,ref:!0,__self:!0,__source:!0};function ju(n,r,e){var t,o={},a=null,s=null;if(r!=null)for(t in r.ref!==void 0&&(s=r.ref),r.key!==void 0&&(a=""+r.key),r)wu.call(r,t)&&!Su.hasOwnProperty(t)&&(o[t]=r[t]);var l=arguments.length-2;if(l===1)o.children=e;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}if(n&&n.defaultProps)for(t in l=n.defaultProps,l)o[t]===void 0&&(o[t]=l[t]);return{$$typeof:Ht,type:n,key:a,ref:s,props:o,_owner:Ja.current}}function cf(n,r){return{$$typeof:Ht,type:n.type,key:r,ref:n.ref,props:n.props,_owner:n._owner}}function Ya(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ht}function df(n){var r={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(e){return r[e]})}var Gs=/\/+/g;function jo(n,r){return typeof n=="object"&&n!==null&&n.key!=null?df(""+n.key):r.toString(36)}function yi(n,r,e,t,o){var a=typeof n;(a==="undefined"||a==="boolean")&&(n=null);var s=!1;if(n===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(n.$$typeof){case Ht:case Xd:s=!0}}if(s)return s=n,o=o(s),n=t===""?"."+jo(s,0):t,Ks(o)?(e="",n!=null&&(e=n.replace(Gs,"$&/")+"/"),yi(o,r,e,"",function(d){return d})):o!=null&&(Ya(o)&&(o=cf(o,e+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Gs,"$&/")+"/")+n)),r.push(o)),1;if(s=0,t=t===""?".":t+":",Ks(n))for(var l=0;l<n.length;l++){a=n[l];var u=t+jo(a,l);s+=yi(a,r,e,u,o)}else if(u=uf(n),typeof u=="function")for(n=u.call(n),l=0;!(a=n.next()).done;)a=a.value,u=t+jo(a,l++),s+=yi(a,r,e,u,o);else if(a==="object")throw r=String(n),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return s}function Jt(n,r,e){if(n==null)return n;var t=[],o=0;return yi(n,t,"","",function(a){return r.call(e,a,o++)}),t}function ff(n){if(n._status===-1){var r=n._result;r=r(),r.then(function(e){(n._status===0||n._status===-1)&&(n._status=1,n._result=e)},function(e){(n._status===0||n._status===-1)&&(n._status=2,n._result=e)}),n._status===-1&&(n._status=0,n._result=r)}if(n._status===1)return n._result.default;throw n._result}var Kn={current:null},xi={transition:null},pf={ReactCurrentDispatcher:Kn,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Ja};tn.Children={map:Jt,forEach:function(n,r,e){Jt(n,function(){r.apply(this,arguments)},e)},count:function(n){var r=0;return Jt(n,function(){r++}),r},toArray:function(n){return Jt(n,function(r){return r})||[]},only:function(n){if(!Ya(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};tn.Component=Xe;tn.Fragment=Zd;tn.Profiler=rf;tn.PureComponent=Ka;tn.StrictMode=nf;tn.Suspense=af;tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pf;tn.cloneElement=function(n,r,e){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var t=yu({},n.props),o=n.key,a=n.ref,s=n._owner;if(r!=null){if(r.ref!==void 0&&(a=r.ref,s=Ja.current),r.key!==void 0&&(o=""+r.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(u in r)wu.call(r,u)&&!Su.hasOwnProperty(u)&&(t[u]=r[u]===void 0&&l!==void 0?l[u]:r[u])}var u=arguments.length-2;if(u===1)t.children=e;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];t.children=l}return{$$typeof:Ht,type:n.type,key:o,ref:a,props:t,_owner:s}};tn.createContext=function(n){return n={$$typeof:tf,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ef,_context:n},n.Consumer=n};tn.createElement=ju;tn.createFactory=function(n){var r=ju.bind(null,n);return r.type=n,r};tn.createRef=function(){return{current:null}};tn.forwardRef=function(n){return{$$typeof:of,render:n}};tn.isValidElement=Ya;tn.lazy=function(n){return{$$typeof:lf,_payload:{_status:-1,_result:n},_init:ff}};tn.memo=function(n,r){return{$$typeof:sf,type:n,compare:r===void 0?null:r}};tn.startTransition=function(n){var r=xi.transition;xi.transition={};try{n()}finally{xi.transition=r}};tn.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};tn.useCallback=function(n,r){return Kn.current.useCallback(n,r)};tn.useContext=function(n){return Kn.current.useContext(n)};tn.useDebugValue=function(){};tn.useDeferredValue=function(n){return Kn.current.useDeferredValue(n)};tn.useEffect=function(n,r){return Kn.current.useEffect(n,r)};tn.useId=function(){return Kn.current.useId()};tn.useImperativeHandle=function(n,r,e){return Kn.current.useImperativeHandle(n,r,e)};tn.useInsertionEffect=function(n,r){return Kn.current.useInsertionEffect(n,r)};tn.useLayoutEffect=function(n,r){return Kn.current.useLayoutEffect(n,r)};tn.useMemo=function(n,r){return Kn.current.useMemo(n,r)};tn.useReducer=function(n,r,e){return Kn.current.useReducer(n,r,e)};tn.useRef=function(n){return Kn.current.useRef(n)};tn.useState=function(n){return Kn.current.useState(n)};tn.useSyncExternalStore=function(n,r,e){return Kn.current.useSyncExternalStore(n,r,e)};tn.useTransition=function(){return Kn.current.useTransition()};tn.version="18.2.0";mu.exports=tn;var K=mu.exports;const _i=Va(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf=K,gf=Symbol.for("react.element"),mf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,yf=hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xf={key:!0,ref:!0,__self:!0,__source:!0};function Tu(n,r,e){var t,o={},a=null,s=null;e!==void 0&&(a=""+e),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(s=r.ref);for(t in r)vf.call(r,t)&&!xf.hasOwnProperty(t)&&(o[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:gf,type:n,key:a,ref:s,props:o,_owner:yf.current}}eo.Fragment=mf;eo.jsx=Tu;eo.jsxs=Tu;gu.exports=eo;var i=gu.exports,Xo={},bu={exports:{}},ir={},ku={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function r(j,C){var I=j.length;j.push(C);n:for(;0<I;){var H=I-1>>>1,Q=j[H];if(0<o(Q,C))j[H]=C,j[I]=Q,I=H;else break n}}function e(j){return j.length===0?null:j[0]}function t(j){if(j.length===0)return null;var C=j[0],I=j.pop();if(I!==C){j[0]=I;n:for(var H=0,Q=j.length,bn=Q>>>1;H<bn;){var kn=2*(H+1)-1,cn=j[kn],ln=kn+1,pn=j[ln];if(0>o(cn,I))ln<Q&&0>o(pn,cn)?(j[H]=pn,j[ln]=I,H=ln):(j[H]=cn,j[kn]=I,H=kn);else if(ln<Q&&0>o(pn,I))j[H]=pn,j[ln]=I,H=ln;else break n}}return C}function o(j,C){var I=j.sortIndex-C.sortIndex;return I!==0?I:j.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();n.unstable_now=function(){return s.now()-l}}var u=[],d=[],m=1,y=null,g=3,v=!1,w=!1,S=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var C=e(d);C!==null;){if(C.callback===null)t(d);else if(C.startTime<=j)t(d),C.sortIndex=C.expirationTime,r(u,C);else break;C=e(d)}}function x(j){if(S=!1,h(j),!w)if(e(u)!==null)w=!0,jn(T);else{var C=e(d);C!==null&&O(x,C.startTime-j)}}function T(j,C){w=!1,S&&(S=!1,p(P),P=-1),v=!0;var I=g;try{for(h(C),y=e(u);y!==null&&(!(y.expirationTime>C)||j&&!V());){var H=y.callback;if(typeof H=="function"){y.callback=null,g=y.priorityLevel;var Q=H(y.expirationTime<=C);C=n.unstable_now(),typeof Q=="function"?y.callback=Q:y===e(u)&&t(u),h(C)}else t(u);y=e(u)}if(y!==null)var bn=!0;else{var kn=e(d);kn!==null&&O(x,kn.startTime-C),bn=!1}return bn}finally{y=null,g=I,v=!1}}var b=!1,k=null,P=-1,N=5,R=-1;function V(){return!(n.unstable_now()-R<N)}function G(){if(k!==null){var j=n.unstable_now();R=j;var C=!0;try{C=k(!0,j)}finally{C?W():(b=!1,k=null)}}else b=!1}var W;if(typeof f=="function")W=function(){f(G)};else if(typeof MessageChannel<"u"){var hn=new MessageChannel,xn=hn.port2;hn.port1.onmessage=G,W=function(){xn.postMessage(null)}}else W=function(){E(G,0)};function jn(j){k=j,b||(b=!0,W())}function O(j,C){P=E(function(){j(n.unstable_now())},C)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(j){j.callback=null},n.unstable_continueExecution=function(){w||v||(w=!0,jn(T))},n.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return e(u)},n.unstable_next=function(j){switch(g){case 1:case 2:case 3:var C=3;break;default:C=g}var I=g;g=C;try{return j()}finally{g=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(j,C){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=g;g=j;try{return C()}finally{g=I}},n.unstable_scheduleCallback=function(j,C,I){var H=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=I+Q,j={id:m++,callback:C,priorityLevel:j,startTime:I,expirationTime:Q,sortIndex:-1},I>H?(j.sortIndex=I,r(d,j),e(u)===null&&j===e(d)&&(S?(p(P),P=-1):S=!0,O(x,I-H))):(j.sortIndex=Q,r(u,j),w||v||(w=!0,jn(T))),j},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(j){var C=g;return function(){var I=g;g=C;try{return j.apply(this,arguments)}finally{g=I}}}})(Eu);ku.exports=Eu;var _f=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=K,tr=_f;function A(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ou=new Set,jt={};function _e(n,r){We(n,r),We(n+"Capture",r)}function We(n,r){for(jt[n]=r,n=0;n<r.length;n++)Ou.add(r[n])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Js={},Ys={};function Sf(n){return Zo.call(Ys,n)?!0:Zo.call(Js,n)?!1:wf.test(n)?Ys[n]=!0:(Js[n]=!0,!1)}function jf(n,r,e,t){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Tf(n,r,e,t){if(r===null||typeof r>"u"||jf(n,r,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Gn(n,r,e,t,o,a,s){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=o,this.mustUseProperty=e,this.propertyName=n,this.type=r,this.sanitizeURL=a,this.removeEmptyString=s}var In={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){In[n]=new Gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];In[r]=new Gn(r,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){In[n]=new Gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){In[n]=new Gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){In[n]=new Gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){In[n]=new Gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){In[n]=new Gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){In[n]=new Gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){In[n]=new Gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function qa(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(Qa,qa);In[r]=new Gn(r,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(Qa,qa);In[r]=new Gn(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(Qa,qa);In[r]=new Gn(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){In[n]=new Gn(n,1,!1,n.toLowerCase(),null,!1,!1)});In.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){In[n]=new Gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Xa(n,r,e,t){var o=In.hasOwnProperty(r)?In[r]:null;(o!==null?o.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Tf(r,e,o,t)&&(e=null),t||o===null?Sf(r)&&(e===null?n.removeAttribute(r):n.setAttribute(r,""+e)):o.mustUseProperty?n[o.propertyName]=e===null?o.type===3?!1:"":e:(r=o.attributeName,t=o.attributeNamespace,e===null?n.removeAttribute(r):(o=o.type,e=o===3||o===4&&e===!0?"":""+e,t?n.setAttributeNS(t,r,e):n.setAttribute(r,e))))}var Dr=Nu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yt=Symbol.for("react.element"),ke=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),Za=Symbol.for("react.strict_mode"),na=Symbol.for("react.profiler"),Au=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),ra=Symbol.for("react.suspense"),ea=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function rt(n){return n===null||typeof n!="object"?null:(n=Qs&&n[Qs]||n["@@iterator"],typeof n=="function"?n:null)}var Sn=Object.assign,To;function ct(n){if(To===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);To=r&&r[1]||""}return`
`+To+n}var bo=!1;function ko(n,r){if(!n||bo)return"";bo=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(d){var t=d}Reflect.construct(n,[],r)}else{try{r.call()}catch(d){t=d}n.call(r.prototype)}else{try{throw Error()}catch(d){t=d}n()}}catch(d){if(d&&t&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),a=t.stack.split(`
`),s=o.length-1,l=a.length-1;1<=s&&0<=l&&o[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==a[l]){var u=`
`+o[s].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=s&&0<=l);break}}}finally{bo=!1,Error.prepareStackTrace=e}return(n=n?n.displayName||n.name:"")?ct(n):""}function bf(n){switch(n.tag){case 5:return ct(n.type);case 16:return ct("Lazy");case 13:return ct("Suspense");case 19:return ct("SuspenseList");case 0:case 2:case 15:return n=ko(n.type,!1),n;case 11:return n=ko(n.type.render,!1),n;case 1:return n=ko(n.type,!0),n;default:return""}}function ta(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ee:return"Fragment";case ke:return"Portal";case na:return"Profiler";case Za:return"StrictMode";case ra:return"Suspense";case ea:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Cu:return(n.displayName||"Context")+".Consumer";case Au:return(n._context.displayName||"Context")+".Provider";case ns:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rs:return r=n.displayName||null,r!==null?r:ta(n.type)||"Memo";case zr:r=n._payload,n=n._init;try{return ta(n(r))}catch{}}return null}function kf(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ta(r);case 8:return r===Za?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pu(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ef(n){var r=Pu(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),t=""+n[r];if(!n.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var o=e.get,a=e.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return o.call(this)},set:function(s){t=""+s,a.call(this,s)}}),Object.defineProperty(n,r,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qt(n){n._valueTracker||(n._valueTracker=Ef(n))}function Mu(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=Pu(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function Ci(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ia(n,r){var e=r.checked;return Sn({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??n._wrapperState.initialChecked})}function qs(n,r){var e=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;e=ne(r.value!=null?r.value:e),n._wrapperState={initialChecked:t,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ru(n,r){r=r.checked,r!=null&&Xa(n,"checked",r,!1)}function oa(n,r){Ru(n,r);var e=ne(r.value),t=r.type;if(e!=null)t==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+e):n.value!==""+e&&(n.value=""+e);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?aa(n,r.type,e):r.hasOwnProperty("defaultValue")&&aa(n,r.type,ne(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xs(n,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,e||r===n.value||(n.value=r),n.defaultValue=r}e=n.name,e!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,e!==""&&(n.name=e)}function aa(n,r,e){(r!=="number"||Ci(n.ownerDocument)!==n)&&(e==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+e&&(n.defaultValue=""+e))}var dt=Array.isArray;function Be(n,r,e,t){if(n=n.options,r){r={};for(var o=0;o<e.length;o++)r["$"+e[o]]=!0;for(e=0;e<n.length;e++)o=r.hasOwnProperty("$"+n[e].value),n[e].selected!==o&&(n[e].selected=o),o&&t&&(n[e].defaultSelected=!0)}else{for(e=""+ne(e),r=null,o=0;o<n.length;o++){if(n[o].value===e){n[o].selected=!0,t&&(n[o].defaultSelected=!0);return}r!==null||n[o].disabled||(r=n[o])}r!==null&&(r.selected=!0)}}function sa(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(A(91));return Sn({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Zs(n,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(A(92));if(dt(e)){if(1<e.length)throw Error(A(93));e=e[0]}r=e}r==null&&(r=""),e=r}n._wrapperState={initialValue:ne(e)}}function Iu(n,r){var e=ne(r.value),t=ne(r.defaultValue);e!=null&&(e=""+e,e!==n.value&&(n.value=e),r.defaultValue==null&&n.defaultValue!==e&&(n.defaultValue=e)),t!=null&&(n.defaultValue=""+t)}function nl(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Du(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function la(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Du(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var qt,Bu=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,t,o){MSApp.execUnsafeLocalFunction(function(){return n(r,e,t,o)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(qt=qt||document.createElement("div"),qt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=qt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Tt(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nf=["Webkit","ms","Moz","O"];Object.keys(ht).forEach(function(n){Nf.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),ht[r]=ht[n]})});function zu(n,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||ht.hasOwnProperty(n)&&ht[n]?(""+r).trim():r+"px"}function Fu(n,r){n=n.style;for(var e in r)if(r.hasOwnProperty(e)){var t=e.indexOf("--")===0,o=zu(e,r[e],t);e==="float"&&(e="cssFloat"),t?n.setProperty(e,o):n[e]=o}}var Of=Sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(n,r){if(r){if(Of[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(A(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(A(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(A(61))}if(r.style!=null&&typeof r.style!="object")throw Error(A(62))}}function ca(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var da=null;function es(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fa=null,ze=null,Fe=null;function rl(n){if(n=Vt(n)){if(typeof fa!="function")throw Error(A(280));var r=n.stateNode;r&&(r=so(r),fa(n.stateNode,n.type,r))}}function Uu(n){ze?Fe?Fe.push(n):Fe=[n]:ze=n}function Hu(){if(ze){var n=ze,r=Fe;if(Fe=ze=null,rl(n),r)for(n=0;n<r.length;n++)rl(r[n])}}function $u(n,r){return n(r)}function Wu(){}var Eo=!1;function Vu(n,r,e){if(Eo)return n(r,e);Eo=!0;try{return $u(n,r,e)}finally{Eo=!1,(ze!==null||Fe!==null)&&(Wu(),Hu())}}function bt(n,r){var e=n.stateNode;if(e===null)return null;var t=so(e);if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(A(231,r,typeof e));return e}var pa=!1;if(Pr)try{var et={};Object.defineProperty(et,"passive",{get:function(){pa=!0}}),window.addEventListener("test",et,et),window.removeEventListener("test",et,et)}catch{pa=!1}function Af(n,r,e,t,o,a,s,l,u){var d=Array.prototype.slice.call(arguments,3);try{r.apply(e,d)}catch(m){this.onError(m)}}var gt=!1,Li=null,Pi=!1,ha=null,Cf={onError:function(n){gt=!0,Li=n}};function Lf(n,r,e,t,o,a,s,l,u){gt=!1,Li=null,Af.apply(Cf,arguments)}function Pf(n,r,e,t,o,a,s,l,u){if(Lf.apply(this,arguments),gt){if(gt){var d=Li;gt=!1,Li=null}else throw Error(A(198));Pi||(Pi=!0,ha=d)}}function we(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function Ku(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function el(n){if(we(n)!==n)throw Error(A(188))}function Mf(n){var r=n.alternate;if(!r){if(r=we(n),r===null)throw Error(A(188));return r!==n?null:n}for(var e=n,t=r;;){var o=e.return;if(o===null)break;var a=o.alternate;if(a===null){if(t=o.return,t!==null){e=t;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===e)return el(o),n;if(a===t)return el(o),r;a=a.sibling}throw Error(A(188))}if(e.return!==t.return)e=o,t=a;else{for(var s=!1,l=o.child;l;){if(l===e){s=!0,e=o,t=a;break}if(l===t){s=!0,t=o,e=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===e){s=!0,e=a,t=o;break}if(l===t){s=!0,t=a,e=o;break}l=l.sibling}if(!s)throw Error(A(189))}}if(e.alternate!==t)throw Error(A(190))}if(e.tag!==3)throw Error(A(188));return e.stateNode.current===e?n:r}function Gu(n){return n=Mf(n),n!==null?Ju(n):null}function Ju(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ju(n);if(r!==null)return r;n=n.sibling}return null}var Yu=tr.unstable_scheduleCallback,tl=tr.unstable_cancelCallback,Rf=tr.unstable_shouldYield,If=tr.unstable_requestPaint,Nn=tr.unstable_now,Df=tr.unstable_getCurrentPriorityLevel,ts=tr.unstable_ImmediatePriority,Qu=tr.unstable_UserBlockingPriority,Mi=tr.unstable_NormalPriority,Bf=tr.unstable_LowPriority,qu=tr.unstable_IdlePriority,to=null,br=null;function zf(n){if(br&&typeof br.onCommitFiberRoot=="function")try{br.onCommitFiberRoot(to,n,void 0,(n.current.flags&128)===128)}catch{}}var yr=Math.clz32?Math.clz32:Hf,Ff=Math.log,Uf=Math.LN2;function Hf(n){return n>>>=0,n===0?32:31-(Ff(n)/Uf|0)|0}var Xt=64,Zt=4194304;function ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ri(n,r){var e=n.pendingLanes;if(e===0)return 0;var t=0,o=n.suspendedLanes,a=n.pingedLanes,s=e&268435455;if(s!==0){var l=s&~o;l!==0?t=ft(l):(a&=s,a!==0&&(t=ft(a)))}else s=e&~o,s!==0?t=ft(s):a!==0&&(t=ft(a));if(t===0)return 0;if(r!==0&&r!==t&&!(r&o)&&(o=t&-t,a=r&-r,o>=a||o===16&&(a&4194240)!==0))return r;if(t&4&&(t|=e&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=t;0<r;)e=31-yr(r),o=1<<e,t|=n[e],r&=~o;return t}function $f(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,o=n.expirationTimes,a=n.pendingLanes;0<a;){var s=31-yr(a),l=1<<s,u=o[s];u===-1?(!(l&e)||l&t)&&(o[s]=$f(l,r)):u<=r&&(n.expiredLanes|=l),a&=~l}}function ga(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xu(){var n=Xt;return Xt<<=1,!(Xt&4194240)&&(Xt=64),n}function No(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function $t(n,r,e){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yr(r),n[r]=e}function Vf(n,r){var e=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<e;){var o=31-yr(e),a=1<<o;r[o]=0,t[o]=-1,n[o]=-1,e&=~a}}function is(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-yr(e),o=1<<t;o&r|n[t]&r&&(n[t]|=r),e&=~o}}var fn=0;function Zu(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nc,os,rc,ec,tc,ma=!1,ni=[],Kr=null,Gr=null,Jr=null,kt=new Map,Et=new Map,Ur=[],Kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(n,r){switch(n){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":kt.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Et.delete(r.pointerId)}}function tt(n,r,e,t,o,a){return n===null||n.nativeEvent!==a?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:a,targetContainers:[o]},r!==null&&(r=Vt(r),r!==null&&os(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,o!==null&&r.indexOf(o)===-1&&r.push(o),n)}function Gf(n,r,e,t,o){switch(r){case"focusin":return Kr=tt(Kr,n,r,e,t,o),!0;case"dragenter":return Gr=tt(Gr,n,r,e,t,o),!0;case"mouseover":return Jr=tt(Jr,n,r,e,t,o),!0;case"pointerover":var a=o.pointerId;return kt.set(a,tt(kt.get(a)||null,n,r,e,t,o)),!0;case"gotpointercapture":return a=o.pointerId,Et.set(a,tt(Et.get(a)||null,n,r,e,t,o)),!0}return!1}function ic(n){var r=ue(n.target);if(r!==null){var e=we(r);if(e!==null){if(r=e.tag,r===13){if(r=Ku(e),r!==null){n.blockedOn=r,tc(n.priority,function(){rc(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wi(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=va(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);da=t,e.target.dispatchEvent(t),da=null}else return r=Vt(e),r!==null&&os(r),n.blockedOn=e,!1;r.shift()}return!0}function ol(n,r,e){wi(n)&&e.delete(r)}function Jf(){ma=!1,Kr!==null&&wi(Kr)&&(Kr=null),Gr!==null&&wi(Gr)&&(Gr=null),Jr!==null&&wi(Jr)&&(Jr=null),kt.forEach(ol),Et.forEach(ol)}function it(n,r){n.blockedOn===r&&(n.blockedOn=null,ma||(ma=!0,tr.unstable_scheduleCallback(tr.unstable_NormalPriority,Jf)))}function Nt(n){function r(o){return it(o,n)}if(0<ni.length){it(ni[0],n);for(var e=1;e<ni.length;e++){var t=ni[e];t.blockedOn===n&&(t.blockedOn=null)}}for(Kr!==null&&it(Kr,n),Gr!==null&&it(Gr,n),Jr!==null&&it(Jr,n),kt.forEach(r),Et.forEach(r),e=0;e<Ur.length;e++)t=Ur[e],t.blockedOn===n&&(t.blockedOn=null);for(;0<Ur.length&&(e=Ur[0],e.blockedOn===null);)ic(e),e.blockedOn===null&&Ur.shift()}var Ue=Dr.ReactCurrentBatchConfig,Ii=!0;function Yf(n,r,e,t){var o=fn,a=Ue.transition;Ue.transition=null;try{fn=1,as(n,r,e,t)}finally{fn=o,Ue.transition=a}}function Qf(n,r,e,t){var o=fn,a=Ue.transition;Ue.transition=null;try{fn=4,as(n,r,e,t)}finally{fn=o,Ue.transition=a}}function as(n,r,e,t){if(Ii){var o=va(n,r,e,t);if(o===null)Bo(n,r,t,Di,e),il(n,t);else if(Gf(o,n,r,e,t))t.stopPropagation();else if(il(n,t),r&4&&-1<Kf.indexOf(n)){for(;o!==null;){var a=Vt(o);if(a!==null&&nc(a),a=va(n,r,e,t),a===null&&Bo(n,r,t,Di,e),a===o)break;o=a}o!==null&&t.stopPropagation()}else Bo(n,r,t,null,e)}}var Di=null;function va(n,r,e,t){if(Di=null,n=es(t),n=ue(n),n!==null)if(r=we(n),r===null)n=null;else if(e=r.tag,e===13){if(n=Ku(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Di=n,null}function oc(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Df()){case ts:return 1;case Qu:return 4;case Mi:case Bf:return 16;case qu:return 536870912;default:return 16}default:return 16}}var $r=null,ss=null,Si=null;function ac(){if(Si)return Si;var n,r=ss,e=r.length,t,o="value"in $r?$r.value:$r.textContent,a=o.length;for(n=0;n<e&&r[n]===o[n];n++);var s=e-n;for(t=1;t<=s&&r[e-t]===o[a-t];t++);return Si=o.slice(n,1<t?1-t:void 0)}function ji(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ri(){return!0}function al(){return!1}function or(n){function r(e,t,o,a,s){this._reactName=e,this._targetInst=o,this.type=t,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(e=n[l],this[l]=e?e(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ri:al,this.isPropagationStopped=al,this}return Sn(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),r}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ls=or(Ze),Wt=Sn({},Ze,{view:0,detail:0}),qf=or(Wt),Oo,Ao,ot,io=Sn({},Wt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ot&&(ot&&n.type==="mousemove"?(Oo=n.screenX-ot.screenX,Ao=n.screenY-ot.screenY):Ao=Oo=0,ot=n),Oo)},movementY:function(n){return"movementY"in n?n.movementY:Ao}}),sl=or(io),Xf=Sn({},io,{dataTransfer:0}),Zf=or(Xf),np=Sn({},Wt,{relatedTarget:0}),Co=or(np),rp=Sn({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=or(rp),tp=Sn({},Ze,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ip=or(tp),op=Sn({},Ze,{data:0}),ll=or(op),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=lp[n])?!!r[n]:!1}function us(){return up}var cp=Sn({},Wt,{key:function(n){if(n.key){var r=ap[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ji(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(n){return n.type==="keypress"?ji(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ji(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dp=or(cp),fp=Sn({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ul=or(fp),pp=Sn({},Wt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),hp=or(pp),gp=Sn({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=or(gp),vp=Sn({},io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=or(vp),xp=[9,13,27,32],cs=Pr&&"CompositionEvent"in window,mt=null;Pr&&"documentMode"in document&&(mt=document.documentMode);var _p=Pr&&"TextEvent"in window&&!mt,sc=Pr&&(!cs||mt&&8<mt&&11>=mt),cl=" ",dl=!1;function lc(n,r){switch(n){case"keyup":return xp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ne=!1;function wp(n,r){switch(n){case"compositionend":return uc(r);case"keypress":return r.which!==32?null:(dl=!0,cl);case"textInput":return n=r.data,n===cl&&dl?null:n;default:return null}}function Sp(n,r){if(Ne)return n==="compositionend"||!cs&&lc(n,r)?(n=ac(),Si=ss=$r=null,Ne=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return sc&&r.locale!=="ko"?null:r.data;default:return null}}var jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!jp[n.type]:r==="textarea"}function cc(n,r,e,t){Uu(t),r=Bi(r,"onChange"),0<r.length&&(e=new ls("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var vt=null,Ot=null;function Tp(n){wc(n,0)}function oo(n){var r=Ce(n);if(Mu(r))return n}function bp(n,r){if(n==="change")return r}var dc=!1;if(Pr){var Lo;if(Pr){var Po="oninput"in document;if(!Po){var pl=document.createElement("div");pl.setAttribute("oninput","return;"),Po=typeof pl.oninput=="function"}Lo=Po}else Lo=!1;dc=Lo&&(!document.documentMode||9<document.documentMode)}function hl(){vt&&(vt.detachEvent("onpropertychange",fc),Ot=vt=null)}function fc(n){if(n.propertyName==="value"&&oo(Ot)){var r=[];cc(r,Ot,n,es(n)),Vu(Tp,r)}}function kp(n,r,e){n==="focusin"?(hl(),vt=r,Ot=e,vt.attachEvent("onpropertychange",fc)):n==="focusout"&&hl()}function Ep(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return oo(Ot)}function Np(n,r){if(n==="click")return oo(r)}function Op(n,r){if(n==="input"||n==="change")return oo(r)}function Ap(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var _r=typeof Object.is=="function"?Object.is:Ap;function At(n,r){if(_r(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var o=e[t];if(!Zo.call(r,o)||!_r(n[o],r[o]))return!1}return!0}function gl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ml(n,r){var e=gl(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=gl(e)}}function pc(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?pc(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function hc(){for(var n=window,r=Ci();r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=Ci(n.document)}return r}function ds(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Cp(n){var r=hc(),e=n.focusedElem,t=n.selectionRange;if(r!==e&&e&&e.ownerDocument&&pc(e.ownerDocument.documentElement,e)){if(t!==null&&ds(e)){if(r=t.start,n=t.end,n===void 0&&(n=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(n,e.value.length);else if(n=(r=e.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var o=e.textContent.length,a=Math.min(t.start,o);t=t.end===void 0?a:Math.min(t.end,o),!n.extend&&a>t&&(o=t,t=a,a=o),o=ml(e,a);var s=ml(e,t);o&&s&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(r=r.createRange(),r.setStart(o.node,o.offset),n.removeAllRanges(),a>t?(n.addRange(r),n.extend(s.node,s.offset)):(r.setEnd(s.node,s.offset),n.addRange(r)))}}for(r=[],n=e;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)n=r[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lp=Pr&&"documentMode"in document&&11>=document.documentMode,Oe=null,ya=null,yt=null,xa=!1;function vl(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;xa||Oe==null||Oe!==Ci(t)||(t=Oe,"selectionStart"in t&&ds(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),yt&&At(yt,t)||(yt=t,t=Bi(ya,"onSelect"),0<t.length&&(r=new ls("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=Oe)))}function ei(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var Ae={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Mo={},gc={};Pr&&(gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ae.animationend.animation,delete Ae.animationiteration.animation,delete Ae.animationstart.animation),"TransitionEvent"in window||delete Ae.transitionend.transition);function ao(n){if(Mo[n])return Mo[n];if(!Ae[n])return n;var r=Ae[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in gc)return Mo[n]=r[e];return n}var mc=ao("animationend"),vc=ao("animationiteration"),yc=ao("animationstart"),xc=ao("transitionend"),_c=new Map,yl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ee(n,r){_c.set(n,r),_e(r,[n])}for(var Ro=0;Ro<yl.length;Ro++){var Io=yl[Ro],Pp=Io.toLowerCase(),Mp=Io[0].toUpperCase()+Io.slice(1);ee(Pp,"on"+Mp)}ee(mc,"onAnimationEnd");ee(vc,"onAnimationIteration");ee(yc,"onAnimationStart");ee("dblclick","onDoubleClick");ee("focusin","onFocus");ee("focusout","onBlur");ee(xc,"onTransitionEnd");We("onMouseEnter",["mouseout","mouseover"]);We("onMouseLeave",["mouseout","mouseover"]);We("onPointerEnter",["pointerout","pointerover"]);We("onPointerLeave",["pointerout","pointerover"]);_e("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_e("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_e("onBeforeInput",["compositionend","keypress","textInput","paste"]);_e("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_e("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(pt));function xl(n,r,e){var t=n.type||"unknown-event";n.currentTarget=e,Pf(t,r,void 0,n),n.currentTarget=null}function wc(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],o=t.event;t=t.listeners;n:{var a=void 0;if(r)for(var s=t.length-1;0<=s;s--){var l=t[s],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==a&&o.isPropagationStopped())break n;xl(o,l,d),a=u}else for(s=0;s<t.length;s++){if(l=t[s],u=l.instance,d=l.currentTarget,l=l.listener,u!==a&&o.isPropagationStopped())break n;xl(o,l,d),a=u}}}if(Pi)throw n=ha,Pi=!1,ha=null,n}function mn(n,r){var e=r[Ta];e===void 0&&(e=r[Ta]=new Set);var t=n+"__bubble";e.has(t)||(Sc(r,n,2,!1),e.add(t))}function Do(n,r,e){var t=0;r&&(t|=4),Sc(e,n,t,r)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Ct(n){if(!n[ti]){n[ti]=!0,Ou.forEach(function(e){e!=="selectionchange"&&(Rp.has(e)||Do(e,!1,n),Do(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ti]||(r[ti]=!0,Do("selectionchange",!1,r))}}function Sc(n,r,e,t){switch(oc(r)){case 1:var o=Yf;break;case 4:o=Qf;break;default:o=as}e=o.bind(null,r,e,n),o=void 0,!pa||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(o=!0),t?o!==void 0?n.addEventListener(r,e,{capture:!0,passive:o}):n.addEventListener(r,e,!0):o!==void 0?n.addEventListener(r,e,{passive:o}):n.addEventListener(r,e,!1)}function Bo(n,r,e,t,o){var a=t;if(!(r&1)&&!(r&2)&&t!==null)n:for(;;){if(t===null)return;var s=t.tag;if(s===3||s===4){var l=t.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=t.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;l!==null;){if(s=ue(l),s===null)return;if(u=s.tag,u===5||u===6){t=a=s;continue n}l=l.parentNode}}t=t.return}Vu(function(){var d=a,m=es(e),y=[];n:{var g=_c.get(n);if(g!==void 0){var v=ls,w=n;switch(n){case"keypress":if(ji(e)===0)break n;case"keydown":case"keyup":v=dp;break;case"focusin":w="focus",v=Co;break;case"focusout":w="blur",v=Co;break;case"beforeblur":case"afterblur":v=Co;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=hp;break;case mc:case vc:case yc:v=ep;break;case xc:v=mp;break;case"scroll":v=qf;break;case"wheel":v=yp;break;case"copy":case"cut":case"paste":v=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ul}var S=(r&4)!==0,E=!S&&n==="scroll",p=S?g!==null?g+"Capture":null:g;S=[];for(var f=d,h;f!==null;){h=f;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=bt(f,p),x!=null&&S.push(Lt(f,x,h)))),E)break;f=f.return}0<S.length&&(g=new v(g,w,null,e,m),y.push({event:g,listeners:S}))}}if(!(r&7)){n:{if(g=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",g&&e!==da&&(w=e.relatedTarget||e.fromElement)&&(ue(w)||w[Mr]))break n;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(w=e.relatedTarget||e.toElement,v=d,w=w?ue(w):null,w!==null&&(E=we(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=d),v!==w)){if(S=sl,x="onMouseLeave",p="onMouseEnter",f="mouse",(n==="pointerout"||n==="pointerover")&&(S=ul,x="onPointerLeave",p="onPointerEnter",f="pointer"),E=v==null?g:Ce(v),h=w==null?g:Ce(w),g=new S(x,f+"leave",v,e,m),g.target=E,g.relatedTarget=h,x=null,ue(m)===d&&(S=new S(p,f+"enter",w,e,m),S.target=h,S.relatedTarget=E,x=S),E=x,v&&w)r:{for(S=v,p=w,f=0,h=S;h;h=je(h))f++;for(h=0,x=p;x;x=je(x))h++;for(;0<f-h;)S=je(S),f--;for(;0<h-f;)p=je(p),h--;for(;f--;){if(S===p||p!==null&&S===p.alternate)break r;S=je(S),p=je(p)}S=null}else S=null;v!==null&&_l(y,g,v,S,!1),w!==null&&E!==null&&_l(y,E,w,S,!0)}}n:{if(g=d?Ce(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var T=bp;else if(fl(g))if(dc)T=Op;else{T=Ep;var b=kp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Np);if(T&&(T=T(n,d))){cc(y,T,e,m);break n}b&&b(n,g,d),n==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&aa(g,"number",g.value)}switch(b=d?Ce(d):window,n){case"focusin":(fl(b)||b.contentEditable==="true")&&(Oe=b,ya=d,yt=null);break;case"focusout":yt=ya=Oe=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,vl(y,e,m);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":vl(y,e,m)}var k;if(cs)n:{switch(n){case"compositionstart":var P="onCompositionStart";break n;case"compositionend":P="onCompositionEnd";break n;case"compositionupdate":P="onCompositionUpdate";break n}P=void 0}else Ne?lc(n,e)&&(P="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(P="onCompositionStart");P&&(sc&&e.locale!=="ko"&&(Ne||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ne&&(k=ac()):($r=m,ss="value"in $r?$r.value:$r.textContent,Ne=!0)),b=Bi(d,P),0<b.length&&(P=new ll(P,n,null,e,m),y.push({event:P,listeners:b}),k?P.data=k:(k=uc(e),k!==null&&(P.data=k)))),(k=_p?wp(n,e):Sp(n,e))&&(d=Bi(d,"onBeforeInput"),0<d.length&&(m=new ll("onBeforeInput","beforeinput",null,e,m),y.push({event:m,listeners:d}),m.data=k))}wc(y,r)})}function Lt(n,r,e){return{instance:n,listener:r,currentTarget:e}}function Bi(n,r){for(var e=r+"Capture",t=[];n!==null;){var o=n,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=bt(n,e),a!=null&&t.unshift(Lt(n,a,o)),a=bt(n,r),a!=null&&t.push(Lt(n,a,o))),n=n.return}return t}function je(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _l(n,r,e,t,o){for(var a=r._reactName,s=[];e!==null&&e!==t;){var l=e,u=l.alternate,d=l.stateNode;if(u!==null&&u===t)break;l.tag===5&&d!==null&&(l=d,o?(u=bt(e,a),u!=null&&s.unshift(Lt(e,u,l))):o||(u=bt(e,a),u!=null&&s.push(Lt(e,u,l)))),e=e.return}s.length!==0&&n.push({event:r,listeners:s})}var Ip=/\r\n?/g,Dp=/\u0000|\uFFFD/g;function wl(n){return(typeof n=="string"?n:""+n).replace(Ip,`
`).replace(Dp,"")}function ii(n,r,e){if(r=wl(r),wl(n)!==r&&e)throw Error(A(425))}function zi(){}var _a=null,wa=null;function Sa(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ja=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,Sl=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof Sl<"u"?function(n){return Sl.resolve(null).then(n).catch(Fp)}:ja;function Fp(n){setTimeout(function(){throw n})}function zo(n,r){var e=r,t=0;do{var o=e.nextSibling;if(n.removeChild(e),o&&o.nodeType===8)if(e=o.data,e==="/$"){if(t===0){n.removeChild(o),Nt(r);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=o}while(e);Nt(r)}function Yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function jl(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return n;r--}else e==="/$"&&r++}n=n.previousSibling}return null}var nt=Math.random().toString(36).slice(2),Tr="__reactFiber$"+nt,Pt="__reactProps$"+nt,Mr="__reactContainer$"+nt,Ta="__reactEvents$"+nt,Up="__reactListeners$"+nt,Hp="__reactHandles$"+nt;function ue(n){var r=n[Tr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Mr]||e[Tr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=jl(n);n!==null;){if(e=n[Tr])return e;n=jl(n)}return r}n=e,e=n.parentNode}return null}function Vt(n){return n=n[Tr]||n[Mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ce(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(A(33))}function so(n){return n[Pt]||null}var ba=[],Le=-1;function te(n){return{current:n}}function vn(n){0>Le||(n.current=ba[Le],ba[Le]=null,Le--)}function gn(n,r){Le++,ba[Le]=n.current,n.current=r}var re={},Hn=te(re),Qn=te(!1),ge=re;function Ve(n,r){var e=n.type.contextTypes;if(!e)return re;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in e)o[a]=r[a];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=o),o}function qn(n){return n=n.childContextTypes,n!=null}function Fi(){vn(Qn),vn(Hn)}function Tl(n,r,e){if(Hn.current!==re)throw Error(A(168));gn(Hn,r),gn(Qn,e)}function jc(n,r,e){var t=n.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var o in t)if(!(o in r))throw Error(A(108,kf(n)||"Unknown",o));return Sn({},e,t)}function Ui(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||re,ge=Hn.current,gn(Hn,n),gn(Qn,Qn.current),!0}function bl(n,r,e){var t=n.stateNode;if(!t)throw Error(A(169));e?(n=jc(n,r,ge),t.__reactInternalMemoizedMergedChildContext=n,vn(Qn),vn(Hn),gn(Hn,n)):vn(Qn),gn(Qn,e)}var Or=null,lo=!1,Fo=!1;function Tc(n){Or===null?Or=[n]:Or.push(n)}function $p(n){lo=!0,Tc(n)}function ie(){if(!Fo&&Or!==null){Fo=!0;var n=0,r=fn;try{var e=Or;for(fn=1;n<e.length;n++){var t=e[n];do t=t(!0);while(t!==null)}Or=null,lo=!1}catch(o){throw Or!==null&&(Or=Or.slice(n+1)),Yu(ts,ie),o}finally{fn=r,Fo=!1}}return null}var Pe=[],Me=0,Hi=null,$i=0,ar=[],sr=0,me=null,Ar=1,Cr="";function se(n,r){Pe[Me++]=$i,Pe[Me++]=Hi,Hi=n,$i=r}function bc(n,r,e){ar[sr++]=Ar,ar[sr++]=Cr,ar[sr++]=me,me=n;var t=Ar;n=Cr;var o=32-yr(t)-1;t&=~(1<<o),e+=1;var a=32-yr(r)+o;if(30<a){var s=o-o%5;a=(t&(1<<s)-1).toString(32),t>>=s,o-=s,Ar=1<<32-yr(r)+o|e<<o|t,Cr=a+n}else Ar=1<<a|e<<o|t,Cr=n}function fs(n){n.return!==null&&(se(n,1),bc(n,1,0))}function ps(n){for(;n===Hi;)Hi=Pe[--Me],Pe[Me]=null,$i=Pe[--Me],Pe[Me]=null;for(;n===me;)me=ar[--sr],ar[sr]=null,Cr=ar[--sr],ar[sr]=null,Ar=ar[--sr],ar[sr]=null}var er=null,nr=null,yn=!1,vr=null;function kc(n,r){var e=lr(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=n,r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)}function kl(n,r){switch(n.tag){case 5:var e=n.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,er=n,nr=Yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,er=n,nr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=me!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=lr(18,null,null,0),e.stateNode=r,e.return=n,n.child=e,er=n,nr=null,!0):!1;default:return!1}}function ka(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ea(n){if(yn){var r=nr;if(r){var e=r;if(!kl(n,r)){if(ka(n))throw Error(A(418));r=Yr(e.nextSibling);var t=er;r&&kl(n,r)?kc(t,e):(n.flags=n.flags&-4097|2,yn=!1,er=n)}}else{if(ka(n))throw Error(A(418));n.flags=n.flags&-4097|2,yn=!1,er=n}}}function El(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;er=n}function oi(n){if(n!==er)return!1;if(!yn)return El(n),yn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Sa(n.type,n.memoizedProps)),r&&(r=nr)){if(ka(n))throw Ec(),Error(A(418));for(;r;)kc(n,r),r=Yr(r.nextSibling)}if(El(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(A(317));n:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"){if(r===0){nr=Yr(n.nextSibling);break n}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}n=n.nextSibling}nr=null}}else nr=er?Yr(n.stateNode.nextSibling):null;return!0}function Ec(){for(var n=nr;n;)n=Yr(n.nextSibling)}function Ke(){nr=er=null,yn=!1}function hs(n){vr===null?vr=[n]:vr.push(n)}var Wp=Dr.ReactCurrentBatchConfig;function gr(n,r){if(n&&n.defaultProps){r=Sn({},r),n=n.defaultProps;for(var e in n)r[e]===void 0&&(r[e]=n[e]);return r}return r}var Wi=te(null),Vi=null,Re=null,gs=null;function ms(){gs=Re=Vi=null}function vs(n){var r=Wi.current;vn(Wi),n._currentValue=r}function Na(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function He(n,r){Vi=n,gs=Re=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Yn=!0),n.firstContext=null)}function cr(n){var r=n._currentValue;if(gs!==n)if(n={context:n,memoizedValue:r,next:null},Re===null){if(Vi===null)throw Error(A(308));Re=n,Vi.dependencies={lanes:0,firstContext:n}}else Re=Re.next=n;return r}var ce=null;function ys(n){ce===null?ce=[n]:ce.push(n)}function Nc(n,r,e,t){var o=r.interleaved;return o===null?(e.next=e,ys(r)):(e.next=o.next,o.next=e),r.interleaved=e,Rr(n,t)}function Rr(n,r){n.lanes|=r;var e=n.alternate;for(e!==null&&(e.lanes|=r),e=n,n=n.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),e=n,n=n.return;return e.tag===3?e.stateNode:null}var Fr=!1;function xs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Lr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Qr(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,sn&2){var o=t.pending;return o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r,Rr(n,e)}return o=t.interleaved,o===null?(r.next=r,ys(t)):(r.next=o.next,o.next=r),t.interleaved=r,Rr(n,e)}function Ti(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,is(n,e)}}function Nl(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var o=null,a=null;if(e=e.firstBaseUpdate,e!==null){do{var s={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};a===null?o=a=s:a=a.next=s,e=e.next}while(e!==null);a===null?o=a=r:a=a.next=r}else o=a=r;e={baseState:t.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:t.shared,effects:t.effects},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}function Ki(n,r,e,t){var o=n.updateQueue;Fr=!1;var a=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,d=u.next;u.next=null,s===null?a=d:s.next=d,s=u;var m=n.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==s&&(l===null?m.firstBaseUpdate=d:l.next=d,m.lastBaseUpdate=u))}if(a!==null){var y=o.baseState;s=0,m=d=u=null,l=a;do{var g=l.lane,v=l.eventTime;if((t&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var w=n,S=l;switch(g=r,v=e,S.tag){case 1:if(w=S.payload,typeof w=="function"){y=w.call(v,y,g);break n}y=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,g=typeof w=="function"?w.call(v,y,g):w,g==null)break n;y=Sn({},y,g);break n;case 2:Fr=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else v={eventTime:v,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(d=m=v,u=y):m=m.next=v,s|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(m===null&&(u=y),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=m,r=o.shared.interleaved,r!==null){o=r;do s|=o.lane,o=o.next;while(o!==r)}else a===null&&(o.shared.lanes=0);ye|=s,n.lanes=s,n.memoizedState=y}}function Ol(n,r,e){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var t=n[r],o=t.callback;if(o!==null){if(t.callback=null,t=e,typeof o!="function")throw Error(A(191,o));o.call(t)}}}var Ac=new Nu.Component().refs;function Oa(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:Sn({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var uo={isMounted:function(n){return(n=n._reactInternals)?we(n)===n:!1},enqueueSetState:function(n,r,e){n=n._reactInternals;var t=Vn(),o=Xr(n),a=Lr(t,o);a.payload=r,e!=null&&(a.callback=e),r=Qr(n,a,o),r!==null&&(xr(r,n,o,t),Ti(r,n,o))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=Vn(),o=Xr(n),a=Lr(t,o);a.tag=1,a.payload=r,e!=null&&(a.callback=e),r=Qr(n,a,o),r!==null&&(xr(r,n,o,t),Ti(r,n,o))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=Vn(),t=Xr(n),o=Lr(e,t);o.tag=2,r!=null&&(o.callback=r),r=Qr(n,o,t),r!==null&&(xr(r,n,t,e),Ti(r,n,t))}};function Al(n,r,e,t,o,a,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,a,s):r.prototype&&r.prototype.isPureReactComponent?!At(e,t)||!At(o,a):!0}function Cc(n,r,e){var t=!1,o=re,a=r.contextType;return typeof a=="object"&&a!==null?a=cr(a):(o=qn(r)?ge:Hn.current,t=r.contextTypes,a=(t=t!=null)?Ve(n,o):re),r=new r(e,a),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uo,n.stateNode=r,r._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=a),r}function Cl(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&uo.enqueueReplaceState(r,r.state,null)}function Aa(n,r,e,t){var o=n.stateNode;o.props=e,o.state=n.memoizedState,o.refs=Ac,xs(n);var a=r.contextType;typeof a=="object"&&a!==null?o.context=cr(a):(a=qn(r)?ge:Hn.current,o.context=Ve(n,a)),o.state=n.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Oa(n,r,a,e),o.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(r=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),r!==o.state&&uo.enqueueReplaceState(o,o.state,null),Ki(n,e,o,t),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function at(n,r,e){if(n=e.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(A(309));var t=e.stateNode}if(!t)throw Error(A(147,n));var o=t,a=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(s){var l=o.refs;l===Ac&&(l=o.refs={}),s===null?delete l[a]:l[a]=s},r._stringRef=a,r)}if(typeof n!="string")throw Error(A(284));if(!e._owner)throw Error(A(290,n))}return n}function ai(n,r){throw n=Object.prototype.toString.call(r),Error(A(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Ll(n){var r=n._init;return r(n._payload)}function Lc(n){function r(p,f){if(n){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function e(p,f){if(!n)return null;for(;f!==null;)r(p,f),f=f.sibling;return null}function t(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=Zr(p,f),p.index=0,p.sibling=null,p}function a(p,f,h){return p.index=h,n?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return n&&p.alternate===null&&(p.flags|=2),p}function l(p,f,h,x){return f===null||f.tag!==6?(f=Go(h,p.mode,x),f.return=p,f):(f=o(f,h),f.return=p,f)}function u(p,f,h,x){var T=h.type;return T===Ee?m(p,f,h.props.children,x,h.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===zr&&Ll(T)===f.type)?(x=o(f,h.props),x.ref=at(p,f,h),x.return=p,x):(x=Ai(h.type,h.key,h.props,null,p.mode,x),x.ref=at(p,f,h),x.return=p,x)}function d(p,f,h,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Jo(h,p.mode,x),f.return=p,f):(f=o(f,h.children||[]),f.return=p,f)}function m(p,f,h,x,T){return f===null||f.tag!==7?(f=pe(h,p.mode,x,T),f.return=p,f):(f=o(f,h),f.return=p,f)}function y(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Go(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yt:return h=Ai(f.type,f.key,f.props,null,p.mode,h),h.ref=at(p,null,f),h.return=p,h;case ke:return f=Jo(f,p.mode,h),f.return=p,f;case zr:var x=f._init;return y(p,x(f._payload),h)}if(dt(f)||rt(f))return f=pe(f,p.mode,h,null),f.return=p,f;ai(p,f)}return null}function g(p,f,h,x){var T=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return T!==null?null:l(p,f,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:return h.key===T?u(p,f,h,x):null;case ke:return h.key===T?d(p,f,h,x):null;case zr:return T=h._init,g(p,f,T(h._payload),x)}if(dt(h)||rt(h))return T!==null?null:m(p,f,h,x,null);ai(p,h)}return null}function v(p,f,h,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,l(f,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yt:return p=p.get(x.key===null?h:x.key)||null,u(f,p,x,T);case ke:return p=p.get(x.key===null?h:x.key)||null,d(f,p,x,T);case zr:var b=x._init;return v(p,f,h,b(x._payload),T)}if(dt(x)||rt(x))return p=p.get(h)||null,m(f,p,x,T,null);ai(f,x)}return null}function w(p,f,h,x){for(var T=null,b=null,k=f,P=f=0,N=null;k!==null&&P<h.length;P++){k.index>P?(N=k,k=null):N=k.sibling;var R=g(p,k,h[P],x);if(R===null){k===null&&(k=N);break}n&&k&&R.alternate===null&&r(p,k),f=a(R,f,P),b===null?T=R:b.sibling=R,b=R,k=N}if(P===h.length)return e(p,k),yn&&se(p,P),T;if(k===null){for(;P<h.length;P++)k=y(p,h[P],x),k!==null&&(f=a(k,f,P),b===null?T=k:b.sibling=k,b=k);return yn&&se(p,P),T}for(k=t(p,k);P<h.length;P++)N=v(k,p,P,h[P],x),N!==null&&(n&&N.alternate!==null&&k.delete(N.key===null?P:N.key),f=a(N,f,P),b===null?T=N:b.sibling=N,b=N);return n&&k.forEach(function(V){return r(p,V)}),yn&&se(p,P),T}function S(p,f,h,x){var T=rt(h);if(typeof T!="function")throw Error(A(150));if(h=T.call(h),h==null)throw Error(A(151));for(var b=T=null,k=f,P=f=0,N=null,R=h.next();k!==null&&!R.done;P++,R=h.next()){k.index>P?(N=k,k=null):N=k.sibling;var V=g(p,k,R.value,x);if(V===null){k===null&&(k=N);break}n&&k&&V.alternate===null&&r(p,k),f=a(V,f,P),b===null?T=V:b.sibling=V,b=V,k=N}if(R.done)return e(p,k),yn&&se(p,P),T;if(k===null){for(;!R.done;P++,R=h.next())R=y(p,R.value,x),R!==null&&(f=a(R,f,P),b===null?T=R:b.sibling=R,b=R);return yn&&se(p,P),T}for(k=t(p,k);!R.done;P++,R=h.next())R=v(k,p,P,R.value,x),R!==null&&(n&&R.alternate!==null&&k.delete(R.key===null?P:R.key),f=a(R,f,P),b===null?T=R:b.sibling=R,b=R);return n&&k.forEach(function(G){return r(p,G)}),yn&&se(p,P),T}function E(p,f,h,x){if(typeof h=="object"&&h!==null&&h.type===Ee&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Yt:n:{for(var T=h.key,b=f;b!==null;){if(b.key===T){if(T=h.type,T===Ee){if(b.tag===7){e(p,b.sibling),f=o(b,h.props.children),f.return=p,p=f;break n}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===zr&&Ll(T)===b.type){e(p,b.sibling),f=o(b,h.props),f.ref=at(p,b,h),f.return=p,p=f;break n}e(p,b);break}else r(p,b);b=b.sibling}h.type===Ee?(f=pe(h.props.children,p.mode,x,h.key),f.return=p,p=f):(x=Ai(h.type,h.key,h.props,null,p.mode,x),x.ref=at(p,f,h),x.return=p,p=x)}return s(p);case ke:n:{for(b=h.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){e(p,f.sibling),f=o(f,h.children||[]),f.return=p,p=f;break n}else{e(p,f);break}else r(p,f);f=f.sibling}f=Jo(h,p.mode,x),f.return=p,p=f}return s(p);case zr:return b=h._init,E(p,f,b(h._payload),x)}if(dt(h))return w(p,f,h,x);if(rt(h))return S(p,f,h,x);ai(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(e(p,f.sibling),f=o(f,h),f.return=p,p=f):(e(p,f),f=Go(h,p.mode,x),f.return=p,p=f),s(p)):e(p,f)}return E}var Ge=Lc(!0),Pc=Lc(!1),Kt={},kr=te(Kt),Mt=te(Kt),Rt=te(Kt);function de(n){if(n===Kt)throw Error(A(174));return n}function _s(n,r){switch(gn(Rt,r),gn(Mt,n),gn(kr,Kt),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:la(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=la(r,n)}vn(kr),gn(kr,r)}function Je(){vn(kr),vn(Mt),vn(Rt)}function Mc(n){de(Rt.current);var r=de(kr.current),e=la(r,n.type);r!==e&&(gn(Mt,n),gn(kr,e))}function ws(n){Mt.current===n&&(vn(kr),vn(Mt))}var _n=te(0);function Gi(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Uo=[];function Ss(){for(var n=0;n<Uo.length;n++)Uo[n]._workInProgressVersionPrimary=null;Uo.length=0}var bi=Dr.ReactCurrentDispatcher,Ho=Dr.ReactCurrentBatchConfig,ve=0,wn=null,An=null,Ln=null,Ji=!1,xt=!1,It=0,Vp=0;function zn(){throw Error(A(321))}function js(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!_r(n[e],r[e]))return!1;return!0}function Ts(n,r,e,t,o,a){if(ve=a,wn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bi.current=n===null||n.memoizedState===null?Yp:Qp,n=e(t,o),xt){a=0;do{if(xt=!1,It=0,25<=a)throw Error(A(301));a+=1,Ln=An=null,r.updateQueue=null,bi.current=qp,n=e(t,o)}while(xt)}if(bi.current=Yi,r=An!==null&&An.next!==null,ve=0,Ln=An=wn=null,Ji=!1,r)throw Error(A(300));return n}function bs(){var n=It!==0;return It=0,n}function jr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?wn.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function dr(){if(An===null){var n=wn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var r=Ln===null?wn.memoizedState:Ln.next;if(r!==null)Ln=r,An=n;else{if(n===null)throw Error(A(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Ln===null?wn.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function Dt(n,r){return typeof r=="function"?r(n):r}function $o(n){var r=dr(),e=r.queue;if(e===null)throw Error(A(311));e.lastRenderedReducer=n;var t=An,o=t.baseQueue,a=e.pending;if(a!==null){if(o!==null){var s=o.next;o.next=a.next,a.next=s}t.baseQueue=o=a,e.pending=null}if(o!==null){a=o.next,t=t.baseState;var l=s=null,u=null,d=a;do{var m=d.lane;if((ve&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),t=d.hasEagerState?d.eagerState:n(t,d.action);else{var y={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,s=t):u=u.next=y,wn.lanes|=m,ye|=m}d=d.next}while(d!==null&&d!==a);u===null?s=t:u.next=l,_r(t,r.memoizedState)||(Yn=!0),r.memoizedState=t,r.baseState=s,r.baseQueue=u,e.lastRenderedState=t}if(n=e.interleaved,n!==null){o=n;do a=o.lane,wn.lanes|=a,ye|=a,o=o.next;while(o!==n)}else o===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function Wo(n){var r=dr(),e=r.queue;if(e===null)throw Error(A(311));e.lastRenderedReducer=n;var t=e.dispatch,o=e.pending,a=r.memoizedState;if(o!==null){e.pending=null;var s=o=o.next;do a=n(a,s.action),s=s.next;while(s!==o);_r(a,r.memoizedState)||(Yn=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),e.lastRenderedState=a}return[a,t]}function Rc(){}function Ic(n,r){var e=wn,t=dr(),o=r(),a=!_r(t.memoizedState,o);if(a&&(t.memoizedState=o,Yn=!0),t=t.queue,ks(zc.bind(null,e,t,n),[n]),t.getSnapshot!==r||a||Ln!==null&&Ln.memoizedState.tag&1){if(e.flags|=2048,Bt(9,Bc.bind(null,e,t,o,r),void 0,null),Pn===null)throw Error(A(349));ve&30||Dc(e,r,o)}return o}function Dc(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=wn.updateQueue,r===null?(r={lastEffect:null,stores:null},wn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function Bc(n,r,e,t){r.value=e,r.getSnapshot=t,Fc(r)&&Uc(n)}function zc(n,r,e){return e(function(){Fc(r)&&Uc(n)})}function Fc(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!_r(n,e)}catch{return!0}}function Uc(n){var r=Rr(n,1);r!==null&&xr(r,n,1,-1)}function Pl(n){var r=jr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:n},r.queue=n,n=n.dispatch=Jp.bind(null,wn,n),[r.memoizedState,n]}function Bt(n,r,e,t){return n={tag:n,create:r,destroy:e,deps:t,next:null},r=wn.updateQueue,r===null?(r={lastEffect:null,stores:null},wn.updateQueue=r,r.lastEffect=n.next=n):(e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n)),n}function Hc(){return dr().memoizedState}function ki(n,r,e,t){var o=jr();wn.flags|=n,o.memoizedState=Bt(1|r,e,void 0,t===void 0?null:t)}function co(n,r,e,t){var o=dr();t=t===void 0?null:t;var a=void 0;if(An!==null){var s=An.memoizedState;if(a=s.destroy,t!==null&&js(t,s.deps)){o.memoizedState=Bt(r,e,a,t);return}}wn.flags|=n,o.memoizedState=Bt(1|r,e,a,t)}function Ml(n,r){return ki(8390656,8,n,r)}function ks(n,r){return co(2048,8,n,r)}function $c(n,r){return co(4,2,n,r)}function Wc(n,r){return co(4,4,n,r)}function Vc(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Kc(n,r,e){return e=e!=null?e.concat([n]):null,co(4,4,Vc.bind(null,r,n),e)}function Es(){}function Gc(n,r){var e=dr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&js(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function Jc(n,r){var e=dr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&js(r,t[1])?t[0]:(n=n(),e.memoizedState=[n,r],n)}function Yc(n,r,e){return ve&21?(_r(e,r)||(e=Xu(),wn.lanes|=e,ye|=e,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=e)}function Kp(n,r){var e=fn;fn=e!==0&&4>e?e:4,n(!0);var t=Ho.transition;Ho.transition={};try{n(!1),r()}finally{fn=e,Ho.transition=t}}function Qc(){return dr().memoizedState}function Gp(n,r,e){var t=Xr(n);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},qc(n))Xc(r,e);else if(e=Nc(n,r,e,t),e!==null){var o=Vn();xr(e,n,t,o),Zc(e,r,t)}}function Jp(n,r,e){var t=Xr(n),o={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(qc(n))Xc(r,o);else{var a=n.alternate;if(n.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var s=r.lastRenderedState,l=a(s,e);if(o.hasEagerState=!0,o.eagerState=l,_r(l,s)){var u=r.interleaved;u===null?(o.next=o,ys(r)):(o.next=u.next,u.next=o),r.interleaved=o;return}}catch{}finally{}e=Nc(n,r,o,t),e!==null&&(o=Vn(),xr(e,n,t,o),Zc(e,r,t))}}function qc(n){var r=n.alternate;return n===wn||r!==null&&r===wn}function Xc(n,r){xt=Ji=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function Zc(n,r,e){if(e&4194240){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,is(n,e)}}var Yi={readContext:cr,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},Yp={readContext:cr,useCallback:function(n,r){return jr().memoizedState=[n,r===void 0?null:r],n},useContext:cr,useEffect:Ml,useImperativeHandle:function(n,r,e){return e=e!=null?e.concat([n]):null,ki(4194308,4,Vc.bind(null,r,n),e)},useLayoutEffect:function(n,r){return ki(4194308,4,n,r)},useInsertionEffect:function(n,r){return ki(4,2,n,r)},useMemo:function(n,r){var e=jr();return r=r===void 0?null:r,n=n(),e.memoizedState=[n,r],n},useReducer:function(n,r,e){var t=jr();return r=e!==void 0?e(r):r,t.memoizedState=t.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},t.queue=n,n=n.dispatch=Gp.bind(null,wn,n),[t.memoizedState,n]},useRef:function(n){var r=jr();return n={current:n},r.memoizedState=n},useState:Pl,useDebugValue:Es,useDeferredValue:function(n){return jr().memoizedState=n},useTransition:function(){var n=Pl(!1),r=n[0];return n=Kp.bind(null,n[1]),jr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,e){var t=wn,o=jr();if(yn){if(e===void 0)throw Error(A(407));e=e()}else{if(e=r(),Pn===null)throw Error(A(349));ve&30||Dc(t,r,e)}o.memoizedState=e;var a={value:e,getSnapshot:r};return o.queue=a,Ml(zc.bind(null,t,a,n),[n]),t.flags|=2048,Bt(9,Bc.bind(null,t,a,e,r),void 0,null),e},useId:function(){var n=jr(),r=Pn.identifierPrefix;if(yn){var e=Cr,t=Ar;e=(t&~(1<<32-yr(t)-1)).toString(32)+e,r=":"+r+"R"+e,e=It++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=Vp++,r=":"+r+"r"+e.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Qp={readContext:cr,useCallback:Gc,useContext:cr,useEffect:ks,useImperativeHandle:Kc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Jc,useReducer:$o,useRef:Hc,useState:function(){return $o(Dt)},useDebugValue:Es,useDeferredValue:function(n){var r=dr();return Yc(r,An.memoizedState,n)},useTransition:function(){var n=$o(Dt)[0],r=dr().memoizedState;return[n,r]},useMutableSource:Rc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1},qp={readContext:cr,useCallback:Gc,useContext:cr,useEffect:ks,useImperativeHandle:Kc,useInsertionEffect:$c,useLayoutEffect:Wc,useMemo:Jc,useReducer:Wo,useRef:Hc,useState:function(){return Wo(Dt)},useDebugValue:Es,useDeferredValue:function(n){var r=dr();return An===null?r.memoizedState=n:Yc(r,An.memoizedState,n)},useTransition:function(){var n=Wo(Dt)[0],r=dr().memoizedState;return[n,r]},useMutableSource:Rc,useSyncExternalStore:Ic,useId:Qc,unstable_isNewReconciler:!1};function Ye(n,r){try{var e="",t=r;do e+=bf(t),t=t.return;while(t);var o=e}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:n,source:r,stack:o,digest:null}}function Vo(n,r,e){return{value:n,source:null,stack:e??null,digest:r??null}}function Ca(n,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Xp=typeof WeakMap=="function"?WeakMap:Map;function nd(n,r,e){e=Lr(-1,e),e.tag=3,e.payload={element:null};var t=r.value;return e.callback=function(){qi||(qi=!0,Ua=t),Ca(n,r)},e}function rd(n,r,e){e=Lr(-1,e),e.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var o=r.value;e.payload=function(){return t(o)},e.callback=function(){Ca(n,r)}}var a=n.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Ca(n,r),typeof t!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var s=r.stack;this.componentDidCatch(r.value,{componentStack:s!==null?s:""})}),e}function Rl(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new Xp;var o=new Set;t.set(r,o)}else o=t.get(r),o===void 0&&(o=new Set,t.set(r,o));o.has(e)||(o.add(e),n=fh.bind(null,n,r,e),r.then(n,n))}function Il(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Dl(n,r,e,t,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===r?n.flags|=65536:(n.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Lr(-1,1),r.tag=2,Qr(e,r,1))),e.lanes|=1),n)}var Zp=Dr.ReactCurrentOwner,Yn=!1;function Wn(n,r,e,t){r.child=n===null?Pc(r,null,e,t):Ge(r,n.child,e,t)}function Bl(n,r,e,t,o){e=e.render;var a=r.ref;return He(r,o),t=Ts(n,r,e,t,a,o),e=bs(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o,Ir(n,r,o)):(yn&&e&&fs(r),r.flags|=1,Wn(n,r,t,o),r.child)}function zl(n,r,e,t,o){if(n===null){var a=e.type;return typeof a=="function"&&!Rs(a)&&a.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=a,ed(n,r,a,t,o)):(n=Ai(e.type,null,t,r,r.mode,o),n.ref=r.ref,n.return=r,r.child=n)}if(a=n.child,!(n.lanes&o)){var s=a.memoizedProps;if(e=e.compare,e=e!==null?e:At,e(s,t)&&n.ref===r.ref)return Ir(n,r,o)}return r.flags|=1,n=Zr(a,t),n.ref=r.ref,n.return=r,r.child=n}function ed(n,r,e,t,o){if(n!==null){var a=n.memoizedProps;if(At(a,t)&&n.ref===r.ref)if(Yn=!1,r.pendingProps=t=a,(n.lanes&o)!==0)n.flags&131072&&(Yn=!0);else return r.lanes=n.lanes,Ir(n,r,o)}return La(n,r,e,t,o)}function td(n,r,e){var t=r.pendingProps,o=t.children,a=n!==null?n.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},gn(De,Zn),Zn|=e;else{if(!(e&1073741824))return n=a!==null?a.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,gn(De,Zn),Zn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=a!==null?a.baseLanes:e,gn(De,Zn),Zn|=t}else a!==null?(t=a.baseLanes|e,r.memoizedState=null):t=e,gn(De,Zn),Zn|=t;return Wn(n,r,o,e),r.child}function id(n,r){var e=r.ref;(n===null&&e!==null||n!==null&&n.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function La(n,r,e,t,o){var a=qn(e)?ge:Hn.current;return a=Ve(r,a),He(r,o),e=Ts(n,r,e,t,a,o),t=bs(),n!==null&&!Yn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o,Ir(n,r,o)):(yn&&t&&fs(r),r.flags|=1,Wn(n,r,e,o),r.child)}function Fl(n,r,e,t,o){if(qn(e)){var a=!0;Ui(r)}else a=!1;if(He(r,o),r.stateNode===null)Ei(n,r),Cc(r,e,t),Aa(r,e,t,o),t=!0;else if(n===null){var s=r.stateNode,l=r.memoizedProps;s.props=l;var u=s.context,d=e.contextType;typeof d=="object"&&d!==null?d=cr(d):(d=qn(e)?ge:Hn.current,d=Ve(r,d));var m=e.getDerivedStateFromProps,y=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==t||u!==d)&&Cl(r,s,t,d),Fr=!1;var g=r.memoizedState;s.state=g,Ki(r,t,s,o),u=r.memoizedState,l!==t||g!==u||Qn.current||Fr?(typeof m=="function"&&(Oa(r,e,m,t),u=r.memoizedState),(l=Fr||Al(r,e,l,t,g,u,d))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(r.flags|=4194308)):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=u),s.props=t,s.state=u,s.context=d,t=l):(typeof s.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{s=r.stateNode,Oc(n,r),l=r.memoizedProps,d=r.type===r.elementType?l:gr(r.type,l),s.props=d,y=r.pendingProps,g=s.context,u=e.contextType,typeof u=="object"&&u!==null?u=cr(u):(u=qn(e)?ge:Hn.current,u=Ve(r,u));var v=e.getDerivedStateFromProps;(m=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==y||g!==u)&&Cl(r,s,t,u),Fr=!1,g=r.memoizedState,s.state=g,Ki(r,t,s,o);var w=r.memoizedState;l!==y||g!==w||Qn.current||Fr?(typeof v=="function"&&(Oa(r,e,v,t),w=r.memoizedState),(d=Fr||Al(r,e,d,t,g,w,u)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(t,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(t,w,u)),typeof s.componentDidUpdate=="function"&&(r.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=w),s.props=t,s.state=w,s.context=u,t=d):(typeof s.componentDidUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&g===n.memoizedState||(r.flags|=1024),t=!1)}return Pa(n,r,e,t,a,o)}function Pa(n,r,e,t,o,a){id(n,r);var s=(r.flags&128)!==0;if(!t&&!s)return o&&bl(r,e,!1),Ir(n,r,a);t=r.stateNode,Zp.current=r;var l=s&&typeof e.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,n!==null&&s?(r.child=Ge(r,n.child,null,a),r.child=Ge(r,null,l,a)):Wn(n,r,l,a),r.memoizedState=t.state,o&&bl(r,e,!0),r.child}function od(n){var r=n.stateNode;r.pendingContext?Tl(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Tl(n,r.context,!1),_s(n,r.containerInfo)}function Ul(n,r,e,t,o){return Ke(),hs(o),r.flags|=256,Wn(n,r,e,t),r.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function Ra(n){return{baseLanes:n,cachePool:null,transitions:null}}function ad(n,r,e){var t=r.pendingProps,o=_n.current,a=!1,s=(r.flags&128)!==0,l;if((l=s)||(l=n!==null&&n.memoizedState===null?!1:(o&2)!==0),l?(a=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),gn(_n,o&1),n===null)return Ea(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(s=t.children,n=t.fallback,a?(t=r.mode,a=r.child,s={mode:"hidden",children:s},!(t&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=ho(s,t,0,null),n=pe(n,t,e,null),a.return=r,n.return=r,a.sibling=n,r.child=a,r.child.memoizedState=Ra(e),r.memoizedState=Ma,n):Ns(r,s));if(o=n.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return nh(n,r,s,t,l,o,e);if(a){a=t.fallback,s=r.mode,o=n.child,l=o.sibling;var u={mode:"hidden",children:t.children};return!(s&1)&&r.child!==o?(t=r.child,t.childLanes=0,t.pendingProps=u,r.deletions=null):(t=Zr(o,u),t.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Zr(l,a):(a=pe(a,s,e,null),a.flags|=2),a.return=r,t.return=r,t.sibling=a,r.child=t,t=a,a=r.child,s=n.child.memoizedState,s=s===null?Ra(e):{baseLanes:s.baseLanes|e,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=n.childLanes&~e,r.memoizedState=Ma,t}return a=n.child,n=a.sibling,t=Zr(a,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=e),t.return=r,t.sibling=null,n!==null&&(e=r.deletions,e===null?(r.deletions=[n],r.flags|=16):e.push(n)),r.child=t,r.memoizedState=null,t}function Ns(n,r){return r=ho({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function si(n,r,e,t){return t!==null&&hs(t),Ge(r,n.child,null,e),n=Ns(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function nh(n,r,e,t,o,a,s){if(e)return r.flags&256?(r.flags&=-257,t=Vo(Error(A(422))),si(n,r,s,t)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(a=t.fallback,o=r.mode,t=ho({mode:"visible",children:t.children},o,0,null),a=pe(a,o,s,null),a.flags|=2,t.return=r,a.return=r,t.sibling=a,r.child=t,r.mode&1&&Ge(r,n.child,null,s),r.child.memoizedState=Ra(s),r.memoizedState=Ma,a);if(!(r.mode&1))return si(n,r,s,null);if(o.data==="$!"){if(t=o.nextSibling&&o.nextSibling.dataset,t)var l=t.dgst;return t=l,a=Error(A(419)),t=Vo(a,t,void 0),si(n,r,s,t)}if(l=(s&n.childLanes)!==0,Yn||l){if(t=Pn,t!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(t.suspendedLanes|s)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Rr(n,o),xr(t,n,o,-1))}return Ms(),t=Vo(Error(A(421))),si(n,r,s,t)}return o.data==="$?"?(r.flags|=128,r.child=n.child,r=ph.bind(null,n),o._reactRetry=r,null):(n=a.treeContext,nr=Yr(o.nextSibling),er=r,yn=!0,vr=null,n!==null&&(ar[sr++]=Ar,ar[sr++]=Cr,ar[sr++]=me,Ar=n.id,Cr=n.overflow,me=r),r=Ns(r,t.children),r.flags|=4096,r)}function Hl(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),Na(n.return,r,e)}function Ko(n,r,e,t,o){var a=n.memoizedState;a===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:o}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=t,a.tail=e,a.tailMode=o)}function sd(n,r,e){var t=r.pendingProps,o=t.revealOrder,a=t.tail;if(Wn(n,r,t.children,e),t=_n.current,t&2)t=t&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hl(n,e,r);else if(n.tag===19)Hl(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(gn(_n,t),!(r.mode&1))r.memoizedState=null;else switch(o){case"forwards":for(e=r.child,o=null;e!==null;)n=e.alternate,n!==null&&Gi(n)===null&&(o=e),e=e.sibling;e=o,e===null?(o=r.child,r.child=null):(o=e.sibling,e.sibling=null),Ko(r,!1,o,e,a);break;case"backwards":for(e=null,o=r.child,r.child=null;o!==null;){if(n=o.alternate,n!==null&&Gi(n)===null){r.child=o;break}n=o.sibling,o.sibling=e,e=o,o=n}Ko(r,!0,e,null,a);break;case"together":Ko(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ei(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Ir(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),ye|=r.lanes,!(e&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(A(153));if(r.child!==null){for(n=r.child,e=Zr(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=Zr(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function rh(n,r,e){switch(r.tag){case 3:od(r),Ke();break;case 5:Mc(r);break;case 1:qn(r.type)&&Ui(r);break;case 4:_s(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,o=r.memoizedProps.value;gn(Wi,t._currentValue),t._currentValue=o;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(gn(_n,_n.current&1),r.flags|=128,null):e&r.child.childLanes?ad(n,r,e):(gn(_n,_n.current&1),n=Ir(n,r,e),n!==null?n.sibling:null);gn(_n,_n.current&1);break;case 19:if(t=(e&r.childLanes)!==0,n.flags&128){if(t)return sd(n,r,e);r.flags|=128}if(o=r.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),gn(_n,_n.current),t)break;return null;case 22:case 23:return r.lanes=0,td(n,r,e)}return Ir(n,r,e)}var ld,Ia,ud,cd;ld=function(n,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}};Ia=function(){};ud=function(n,r,e,t){var o=n.memoizedProps;if(o!==t){n=r.stateNode,de(kr.current);var a=null;switch(e){case"input":o=ia(n,o),t=ia(n,t),a=[];break;case"select":o=Sn({},o,{value:void 0}),t=Sn({},t,{value:void 0}),a=[];break;case"textarea":o=sa(n,o),t=sa(n,t),a=[];break;default:typeof o.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=zi)}ua(e,t);var s;e=null;for(d in o)if(!t.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(s in l)l.hasOwnProperty(s)&&(e||(e={}),e[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jt.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in t){var u=t[d];if(l=o!=null?o[d]:void 0,t.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(e||(e={}),e[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(e||(e={}),e[s]=u[s])}else e||(a||(a=[]),a.push(d,e)),e=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jt.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&mn("scroll",n),a||l===u||(a=[])):(a=a||[]).push(d,u))}e&&(a=a||[]).push("style",e);var d=a;(r.updateQueue=d)&&(r.flags|=4)}};cd=function(n,r,e,t){e!==t&&(r.flags|=4)};function st(n,r){if(!yn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var o=n.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags&14680064,t|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)e|=o.lanes|o.childLanes,t|=o.subtreeFlags,t|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function eh(n,r,e){var t=r.pendingProps;switch(ps(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return qn(r.type)&&Fi(),Fn(r),null;case 3:return t=r.stateNode,Je(),vn(Qn),vn(Hn),Ss(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(oi(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,vr!==null&&(Wa(vr),vr=null))),Ia(n,r),Fn(r),null;case 5:ws(r);var o=de(Rt.current);if(e=r.type,n!==null&&r.stateNode!=null)ud(n,r,e,t,o),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(A(166));return Fn(r),null}if(n=de(kr.current),oi(r)){t=r.stateNode,e=r.type;var a=r.memoizedProps;switch(t[Tr]=r,t[Pt]=a,n=(r.mode&1)!==0,e){case"dialog":mn("cancel",t),mn("close",t);break;case"iframe":case"object":case"embed":mn("load",t);break;case"video":case"audio":for(o=0;o<pt.length;o++)mn(pt[o],t);break;case"source":mn("error",t);break;case"img":case"image":case"link":mn("error",t),mn("load",t);break;case"details":mn("toggle",t);break;case"input":qs(t,a),mn("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!a.multiple},mn("invalid",t);break;case"textarea":Zs(t,a),mn("invalid",t)}ua(e,a),o=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?t.textContent!==l&&(a.suppressHydrationWarning!==!0&&ii(t.textContent,l,n),o=["children",l]):typeof l=="number"&&t.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ii(t.textContent,l,n),o=["children",""+l]):jt.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&mn("scroll",t)}switch(e){case"input":Qt(t),Xs(t,a,!0);break;case"textarea":Qt(t),nl(t);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(t.onclick=zi)}t=o,r.updateQueue=t,t!==null&&(r.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Du(e)),n==="http://www.w3.org/1999/xhtml"?e==="script"?(n=s.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=s.createElement(e,{is:t.is}):(n=s.createElement(e),e==="select"&&(s=n,t.multiple?s.multiple=!0:t.size&&(s.size=t.size))):n=s.createElementNS(n,e),n[Tr]=r,n[Pt]=t,ld(n,r,!1,!1),r.stateNode=n;n:{switch(s=ca(e,t),e){case"dialog":mn("cancel",n),mn("close",n),o=t;break;case"iframe":case"object":case"embed":mn("load",n),o=t;break;case"video":case"audio":for(o=0;o<pt.length;o++)mn(pt[o],n);o=t;break;case"source":mn("error",n),o=t;break;case"img":case"image":case"link":mn("error",n),mn("load",n),o=t;break;case"details":mn("toggle",n),o=t;break;case"input":qs(n,t),o=ia(n,t),mn("invalid",n);break;case"option":o=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},o=Sn({},t,{value:void 0}),mn("invalid",n);break;case"textarea":Zs(n,t),o=sa(n,t),mn("invalid",n);break;default:o=t}ua(e,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?Fu(n,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bu(n,u)):a==="children"?typeof u=="string"?(e!=="textarea"||u!=="")&&Tt(n,u):typeof u=="number"&&Tt(n,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(jt.hasOwnProperty(a)?u!=null&&a==="onScroll"&&mn("scroll",n):u!=null&&Xa(n,a,u,s))}switch(e){case"input":Qt(n),Xs(n,t,!1);break;case"textarea":Qt(n),nl(n);break;case"option":t.value!=null&&n.setAttribute("value",""+ne(t.value));break;case"select":n.multiple=!!t.multiple,a=t.value,a!=null?Be(n,!!t.multiple,a,!1):t.defaultValue!=null&&Be(n,!!t.multiple,t.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=zi)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)cd(n,r,n.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(A(166));if(e=de(Rt.current),de(kr.current),oi(r)){if(t=r.stateNode,e=r.memoizedProps,t[Tr]=r,(a=t.nodeValue!==e)&&(n=er,n!==null))switch(n.tag){case 3:ii(t.nodeValue,e,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ii(t.nodeValue,e,(n.mode&1)!==0)}a&&(r.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[Tr]=r,r.stateNode=t}return Fn(r),null;case 13:if(vn(_n),t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yn&&nr!==null&&r.mode&1&&!(r.flags&128))Ec(),Ke(),r.flags|=98560,a=!1;else if(a=oi(r),t!==null&&t.dehydrated!==null){if(n===null){if(!a)throw Error(A(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(A(317));a[Tr]=r}else Ke(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;Fn(r),a=!1}else vr!==null&&(Wa(vr),vr=null),a=!0;if(!a)return r.flags&65536?r:null}return r.flags&128?(r.lanes=e,r):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(n===null||_n.current&1?Cn===0&&(Cn=3):Ms())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return Je(),Ia(n,r),n===null&&Ct(r.stateNode.containerInfo),Fn(r),null;case 10:return vs(r.type._context),Fn(r),null;case 17:return qn(r.type)&&Fi(),Fn(r),null;case 19:if(vn(_n),a=r.memoizedState,a===null)return Fn(r),null;if(t=(r.flags&128)!==0,s=a.rendering,s===null)if(t)st(a,!1);else{if(Cn!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(s=Gi(n),s!==null){for(r.flags|=128,st(a,!1),t=s.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=e,e=r.child;e!==null;)a=e,n=t,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=n,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,n=s.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e=e.sibling;return gn(_n,_n.current&1|2),r.child}n=n.sibling}a.tail!==null&&Nn()>Qe&&(r.flags|=128,t=!0,st(a,!1),r.lanes=4194304)}else{if(!t)if(n=Gi(s),n!==null){if(r.flags|=128,t=!0,e=n.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),st(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!yn)return Fn(r),null}else 2*Nn()-a.renderingStartTime>Qe&&e!==1073741824&&(r.flags|=128,t=!0,st(a,!1),r.lanes=4194304);a.isBackwards?(s.sibling=r.child,r.child=s):(e=a.last,e!==null?e.sibling=s:r.child=s,a.last=s)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Nn(),r.sibling=null,e=_n.current,gn(_n,t?e&1|2:e&1),r):(Fn(r),null);case 22:case 23:return Ps(),t=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?Zn&1073741824&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(A(156,r.tag))}function th(n,r){switch(ps(r),r.tag){case 1:return qn(r.type)&&Fi(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Je(),vn(Qn),vn(Hn),Ss(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return ws(r),null;case 13:if(vn(_n),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(A(340));Ke()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return vn(_n),null;case 4:return Je(),null;case 10:return vs(r.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var li=!1,Un=!1,ih=typeof WeakSet=="function"?WeakSet:Set,U=null;function Ie(n,r){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){Tn(n,r,t)}else e.current=null}function Da(n,r,e){try{e()}catch(t){Tn(n,r,t)}}var $l=!1;function oh(n,r){if(_a=Ii,n=hc(),ds(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var o=t.anchorOffset,a=t.focusNode;t=t.focusOffset;try{e.nodeType,a.nodeType}catch{e=null;break n}var s=0,l=-1,u=-1,d=0,m=0,y=n,g=null;r:for(;;){for(var v;y!==e||o!==0&&y.nodeType!==3||(l=s+o),y!==a||t!==0&&y.nodeType!==3||(u=s+t),y.nodeType===3&&(s+=y.nodeValue.length),(v=y.firstChild)!==null;)g=y,y=v;for(;;){if(y===n)break r;if(g===e&&++d===o&&(l=s),g===a&&++m===t&&(u=s),(v=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=v}e=l===-1||u===-1?null:{start:l,end:u}}else e=null}e=e||{start:0,end:0}}else e=null;for(wa={focusedElem:n,selectionRange:e},Ii=!1,U=r;U!==null;)if(r=U,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,U=n;else for(;U!==null;){r=U;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,E=w.memoizedState,p=r.stateNode,f=p.getSnapshotBeforeUpdate(r.elementType===r.type?S:gr(r.type,S),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=r.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(x){Tn(r,r.return,x)}if(n=r.sibling,n!==null){n.return=r.return,U=n;break}U=r.return}return w=$l,$l=!1,w}function _t(n,r,e){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&n)===n){var a=o.destroy;o.destroy=void 0,a!==void 0&&Da(r,e,a)}o=o.next}while(o!==t)}}function fo(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&n)===n){var t=e.create;e.destroy=t()}e=e.next}while(e!==r)}}function Ba(n){var r=n.ref;if(r!==null){var e=n.stateNode;switch(n.tag){case 5:n=e;break;default:n=e}typeof r=="function"?r(n):r.current=n}}function dd(n){var r=n.alternate;r!==null&&(n.alternate=null,dd(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Tr],delete r[Pt],delete r[Ta],delete r[Up],delete r[Hp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function fd(n){return n.tag===5||n.tag===3||n.tag===4}function Wl(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||fd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function za(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(n,r):e.insertBefore(n,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(n,e)):(r=e,r.appendChild(n)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=zi));else if(t!==4&&(n=n.child,n!==null))for(za(n,r,e),n=n.sibling;n!==null;)za(n,r,e),n=n.sibling}function Fa(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Fa(n,r,e),n=n.sibling;n!==null;)Fa(n,r,e),n=n.sibling}var Mn=null,mr=!1;function Br(n,r,e){for(e=e.child;e!==null;)pd(n,r,e),e=e.sibling}function pd(n,r,e){if(br&&typeof br.onCommitFiberUnmount=="function")try{br.onCommitFiberUnmount(to,e)}catch{}switch(e.tag){case 5:Un||Ie(e,r);case 6:var t=Mn,o=mr;Mn=null,Br(n,r,e),Mn=t,mr=o,Mn!==null&&(mr?(n=Mn,e=e.stateNode,n.nodeType===8?n.parentNode.removeChild(e):n.removeChild(e)):Mn.removeChild(e.stateNode));break;case 18:Mn!==null&&(mr?(n=Mn,e=e.stateNode,n.nodeType===8?zo(n.parentNode,e):n.nodeType===1&&zo(n,e),Nt(n)):zo(Mn,e.stateNode));break;case 4:t=Mn,o=mr,Mn=e.stateNode.containerInfo,mr=!0,Br(n,r,e),Mn=t,mr=o;break;case 0:case 11:case 14:case 15:if(!Un&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){o=t=t.next;do{var a=o,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Da(e,r,s),o=o.next}while(o!==t)}Br(n,r,e);break;case 1:if(!Un&&(Ie(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(l){Tn(e,r,l)}Br(n,r,e);break;case 21:Br(n,r,e);break;case 22:e.mode&1?(Un=(t=Un)||e.memoizedState!==null,Br(n,r,e),Un=t):Br(n,r,e);break;default:Br(n,r,e)}}function Vl(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var e=n.stateNode;e===null&&(e=n.stateNode=new ih),r.forEach(function(t){var o=hh.bind(null,n,t);e.has(t)||(e.add(t),t.then(o,o))})}}function pr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var o=e[t];try{var a=n,s=r,l=s;n:for(;l!==null;){switch(l.tag){case 5:Mn=l.stateNode,mr=!1;break n;case 3:Mn=l.stateNode.containerInfo,mr=!0;break n;case 4:Mn=l.stateNode.containerInfo,mr=!0;break n}l=l.return}if(Mn===null)throw Error(A(160));pd(a,s,o),Mn=null,mr=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){Tn(o,r,d)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)hd(r,n),r=r.sibling}function hd(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pr(r,n),Sr(n),t&4){try{_t(3,n,n.return),fo(3,n)}catch(S){Tn(n,n.return,S)}try{_t(5,n,n.return)}catch(S){Tn(n,n.return,S)}}break;case 1:pr(r,n),Sr(n),t&512&&e!==null&&Ie(e,e.return);break;case 5:if(pr(r,n),Sr(n),t&512&&e!==null&&Ie(e,e.return),n.flags&32){var o=n.stateNode;try{Tt(o,"")}catch(S){Tn(n,n.return,S)}}if(t&4&&(o=n.stateNode,o!=null)){var a=n.memoizedProps,s=e!==null?e.memoizedProps:a,l=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Ru(o,a),ca(l,s);var d=ca(l,a);for(s=0;s<u.length;s+=2){var m=u[s],y=u[s+1];m==="style"?Fu(o,y):m==="dangerouslySetInnerHTML"?Bu(o,y):m==="children"?Tt(o,y):Xa(o,m,y,d)}switch(l){case"input":oa(o,a);break;case"textarea":Iu(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Be(o,!!a.multiple,v,!1):g!==!!a.multiple&&(a.defaultValue!=null?Be(o,!!a.multiple,a.defaultValue,!0):Be(o,!!a.multiple,a.multiple?[]:"",!1))}o[Pt]=a}catch(S){Tn(n,n.return,S)}}break;case 6:if(pr(r,n),Sr(n),t&4){if(n.stateNode===null)throw Error(A(162));o=n.stateNode,a=n.memoizedProps;try{o.nodeValue=a}catch(S){Tn(n,n.return,S)}}break;case 3:if(pr(r,n),Sr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{Nt(r.containerInfo)}catch(S){Tn(n,n.return,S)}break;case 4:pr(r,n),Sr(n);break;case 13:pr(r,n),Sr(n),o=n.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Cs=Nn())),t&4&&Vl(n);break;case 22:if(m=e!==null&&e.memoizedState!==null,n.mode&1?(Un=(d=Un)||m,pr(r,n),Un=d):pr(r,n),Sr(n),t&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!m&&n.mode&1)for(U=n,m=n.child;m!==null;){for(y=U=m;U!==null;){switch(g=U,v=g.child,g.tag){case 0:case 11:case 14:case 15:_t(4,g,g.return);break;case 1:Ie(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){t=g,e=g.return;try{r=t,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(S){Tn(t,e,S)}}break;case 5:Ie(g,g.return);break;case 22:if(g.memoizedState!==null){Gl(y);continue}}v!==null?(v.return=g,U=v):Gl(y)}m=m.sibling}n:for(m=null,y=n;;){if(y.tag===5){if(m===null){m=y;try{o=y.stateNode,d?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=y.stateNode,u=y.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=zu("display",s))}catch(S){Tn(n,n.return,S)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(S){Tn(n,n.return,S)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===n)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break n;for(;y.sibling===null;){if(y.return===null||y.return===n)break n;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:pr(r,n),Sr(n),t&4&&Vl(n);break;case 21:break;default:pr(r,n),Sr(n)}}function Sr(n){var r=n.flags;if(r&2){try{n:{for(var e=n.return;e!==null;){if(fd(e)){var t=e;break n}e=e.return}throw Error(A(160))}switch(t.tag){case 5:var o=t.stateNode;t.flags&32&&(Tt(o,""),t.flags&=-33);var a=Wl(n);Fa(n,a,o);break;case 3:case 4:var s=t.stateNode.containerInfo,l=Wl(n);za(n,l,s);break;default:throw Error(A(161))}}catch(u){Tn(n,n.return,u)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function ah(n,r,e){U=n,gd(n)}function gd(n,r,e){for(var t=(n.mode&1)!==0;U!==null;){var o=U,a=o.child;if(o.tag===22&&t){var s=o.memoizedState!==null||li;if(!s){var l=o.alternate,u=l!==null&&l.memoizedState!==null||Un;l=li;var d=Un;if(li=s,(Un=u)&&!d)for(U=o;U!==null;)s=U,u=s.child,s.tag===22&&s.memoizedState!==null?Jl(o):u!==null?(u.return=s,U=u):Jl(o);for(;a!==null;)U=a,gd(a),a=a.sibling;U=o,li=l,Un=d}Kl(n)}else o.subtreeFlags&8772&&a!==null?(a.return=o,U=a):Kl(n)}}function Kl(n){for(;U!==null;){var r=U;if(r.flags&8772){var e=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Un||fo(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!Un)if(e===null)t.componentDidMount();else{var o=r.elementType===r.type?e.memoizedProps:gr(r.type,e.memoizedProps);t.componentDidUpdate(o,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Ol(r,a,t);break;case 3:var s=r.updateQueue;if(s!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}Ol(r,s,e)}break;case 5:var l=r.stateNode;if(e===null&&r.flags&4){e=l;var u=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&e.focus();break;case"img":u.src&&(e.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var d=r.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&Nt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Un||r.flags&512&&Ba(r)}catch(g){Tn(r,r.return,g)}}if(r===n){U=null;break}if(e=r.sibling,e!==null){e.return=r.return,U=e;break}U=r.return}}function Gl(n){for(;U!==null;){var r=U;if(r===n){U=null;break}var e=r.sibling;if(e!==null){e.return=r.return,U=e;break}U=r.return}}function Jl(n){for(;U!==null;){var r=U;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{fo(4,r)}catch(u){Tn(r,e,u)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var o=r.return;try{t.componentDidMount()}catch(u){Tn(r,o,u)}}var a=r.return;try{Ba(r)}catch(u){Tn(r,a,u)}break;case 5:var s=r.return;try{Ba(r)}catch(u){Tn(r,s,u)}}}catch(u){Tn(r,r.return,u)}if(r===n){U=null;break}var l=r.sibling;if(l!==null){l.return=r.return,U=l;break}U=r.return}}var sh=Math.ceil,Qi=Dr.ReactCurrentDispatcher,Os=Dr.ReactCurrentOwner,ur=Dr.ReactCurrentBatchConfig,sn=0,Pn=null,On=null,Rn=0,Zn=0,De=te(0),Cn=0,zt=null,ye=0,po=0,As=0,wt=null,Jn=null,Cs=0,Qe=1/0,Nr=null,qi=!1,Ua=null,qr=null,ui=!1,Wr=null,Xi=0,St=0,Ha=null,Ni=-1,Oi=0;function Vn(){return sn&6?Nn():Ni!==-1?Ni:Ni=Nn()}function Xr(n){return n.mode&1?sn&2&&Rn!==0?Rn&-Rn:Wp.transition!==null?(Oi===0&&(Oi=Xu()),Oi):(n=fn,n!==0||(n=window.event,n=n===void 0?16:oc(n.type)),n):1}function xr(n,r,e,t){if(50<St)throw St=0,Ha=null,Error(A(185));$t(n,e,t),(!(sn&2)||n!==Pn)&&(n===Pn&&(!(sn&2)&&(po|=e),Cn===4&&Hr(n,Rn)),Xn(n,t),e===1&&sn===0&&!(r.mode&1)&&(Qe=Nn()+500,lo&&ie()))}function Xn(n,r){var e=n.callbackNode;Wf(n,r);var t=Ri(n,n===Pn?Rn:0);if(t===0)e!==null&&tl(e),n.callbackNode=null,n.callbackPriority=0;else if(r=t&-t,n.callbackPriority!==r){if(e!=null&&tl(e),r===1)n.tag===0?$p(Yl.bind(null,n)):Tc(Yl.bind(null,n)),zp(function(){!(sn&6)&&ie()}),e=null;else{switch(Zu(t)){case 1:e=ts;break;case 4:e=Qu;break;case 16:e=Mi;break;case 536870912:e=qu;break;default:e=Mi}e=jd(e,md.bind(null,n))}n.callbackPriority=r,n.callbackNode=e}}function md(n,r){if(Ni=-1,Oi=0,sn&6)throw Error(A(327));var e=n.callbackNode;if($e()&&n.callbackNode!==e)return null;var t=Ri(n,n===Pn?Rn:0);if(t===0)return null;if(t&30||t&n.expiredLanes||r)r=Zi(n,t);else{r=t;var o=sn;sn|=2;var a=yd();(Pn!==n||Rn!==r)&&(Nr=null,Qe=Nn()+500,fe(n,r));do try{ch();break}catch(l){vd(n,l)}while(!0);ms(),Qi.current=a,sn=o,On!==null?r=0:(Pn=null,Rn=0,r=Cn)}if(r!==0){if(r===2&&(o=ga(n),o!==0&&(t=o,r=$a(n,o))),r===1)throw e=zt,fe(n,0),Hr(n,t),Xn(n,Nn()),e;if(r===6)Hr(n,t);else{if(o=n.current.alternate,!(t&30)&&!lh(o)&&(r=Zi(n,t),r===2&&(a=ga(n),a!==0&&(t=a,r=$a(n,a))),r===1))throw e=zt,fe(n,0),Hr(n,t),Xn(n,Nn()),e;switch(n.finishedWork=o,n.finishedLanes=t,r){case 0:case 1:throw Error(A(345));case 2:le(n,Jn,Nr);break;case 3:if(Hr(n,t),(t&130023424)===t&&(r=Cs+500-Nn(),10<r)){if(Ri(n,0)!==0)break;if(o=n.suspendedLanes,(o&t)!==t){Vn(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=ja(le.bind(null,n,Jn,Nr),r);break}le(n,Jn,Nr);break;case 4:if(Hr(n,t),(t&4194240)===t)break;for(r=n.eventTimes,o=-1;0<t;){var s=31-yr(t);a=1<<s,s=r[s],s>o&&(o=s),t&=~a}if(t=o,t=Nn()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*sh(t/1960))-t,10<t){n.timeoutHandle=ja(le.bind(null,n,Jn,Nr),t);break}le(n,Jn,Nr);break;case 5:le(n,Jn,Nr);break;default:throw Error(A(329))}}}return Xn(n,Nn()),n.callbackNode===e?md.bind(null,n):null}function $a(n,r){var e=wt;return n.current.memoizedState.isDehydrated&&(fe(n,r).flags|=256),n=Zi(n,r),n!==2&&(r=Jn,Jn=e,r!==null&&Wa(r)),n}function Wa(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function lh(n){for(var r=n;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var o=e[t],a=o.getSnapshot;o=o.value;try{if(!_r(a(),o))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(n,r){for(r&=~As,r&=~po,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var e=31-yr(r),t=1<<e;n[e]=-1,r&=~t}}function Yl(n){if(sn&6)throw Error(A(327));$e();var r=Ri(n,0);if(!(r&1))return Xn(n,Nn()),null;var e=Zi(n,r);if(n.tag!==0&&e===2){var t=ga(n);t!==0&&(r=t,e=$a(n,t))}if(e===1)throw e=zt,fe(n,0),Hr(n,r),Xn(n,Nn()),e;if(e===6)throw Error(A(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,le(n,Jn,Nr),Xn(n,Nn()),null}function Ls(n,r){var e=sn;sn|=1;try{return n(r)}finally{sn=e,sn===0&&(Qe=Nn()+500,lo&&ie())}}function xe(n){Wr!==null&&Wr.tag===0&&!(sn&6)&&$e();var r=sn;sn|=1;var e=ur.transition,t=fn;try{if(ur.transition=null,fn=1,n)return n()}finally{fn=t,ur.transition=e,sn=r,!(sn&6)&&ie()}}function Ps(){Zn=De.current,vn(De)}function fe(n,r){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;if(e!==-1&&(n.timeoutHandle=-1,Bp(e)),On!==null)for(e=On.return;e!==null;){var t=e;switch(ps(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Fi();break;case 3:Je(),vn(Qn),vn(Hn),Ss();break;case 5:ws(t);break;case 4:Je();break;case 13:vn(_n);break;case 19:vn(_n);break;case 10:vs(t.type._context);break;case 22:case 23:Ps()}e=e.return}if(Pn=n,On=n=Zr(n.current,null),Rn=Zn=r,Cn=0,zt=null,As=po=ye=0,Jn=wt=null,ce!==null){for(r=0;r<ce.length;r++)if(e=ce[r],t=e.interleaved,t!==null){e.interleaved=null;var o=t.next,a=e.pending;if(a!==null){var s=a.next;a.next=o,t.next=s}e.pending=t}ce=null}return n}function vd(n,r){do{var e=On;try{if(ms(),bi.current=Yi,Ji){for(var t=wn.memoizedState;t!==null;){var o=t.queue;o!==null&&(o.pending=null),t=t.next}Ji=!1}if(ve=0,Ln=An=wn=null,xt=!1,It=0,Os.current=null,e===null||e.return===null){Cn=1,zt=r,On=null;break}n:{var a=n,s=e.return,l=e,u=r;if(r=Rn,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=l,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=Il(s);if(v!==null){v.flags&=-257,Dl(v,s,l,a,r),v.mode&1&&Rl(a,d,r),r=v,u=d;var w=r.updateQueue;if(w===null){var S=new Set;S.add(u),r.updateQueue=S}else w.add(u);break n}else{if(!(r&1)){Rl(a,d,r),Ms();break n}u=Error(A(426))}}else if(yn&&l.mode&1){var E=Il(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Dl(E,s,l,a,r),hs(Ye(u,l));break n}}a=u=Ye(u,l),Cn!==4&&(Cn=2),wt===null?wt=[a]:wt.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var p=nd(a,u,r);Nl(a,p);break n;case 1:l=u;var f=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qr===null||!qr.has(h)))){a.flags|=65536,r&=-r,a.lanes|=r;var x=rd(a,l,r);Nl(a,x);break n}}a=a.return}while(a!==null)}_d(e)}catch(T){r=T,On===e&&e!==null&&(On=e=e.return);continue}break}while(!0)}function yd(){var n=Qi.current;return Qi.current=Yi,n===null?Yi:n}function Ms(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Pn===null||!(ye&268435455)&&!(po&268435455)||Hr(Pn,Rn)}function Zi(n,r){var e=sn;sn|=2;var t=yd();(Pn!==n||Rn!==r)&&(Nr=null,fe(n,r));do try{uh();break}catch(o){vd(n,o)}while(!0);if(ms(),sn=e,Qi.current=t,On!==null)throw Error(A(261));return Pn=null,Rn=0,Cn}function uh(){for(;On!==null;)xd(On)}function ch(){for(;On!==null&&!Rf();)xd(On)}function xd(n){var r=Sd(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,r===null?_d(n):On=r,Os.current=null}function _d(n){var r=n;do{var e=r.alternate;if(n=r.return,r.flags&32768){if(e=th(e,r),e!==null){e.flags&=32767,On=e;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,On=null;return}}else if(e=eh(e,r,Zn),e!==null){On=e;return}if(r=r.sibling,r!==null){On=r;return}On=r=n}while(r!==null);Cn===0&&(Cn=5)}function le(n,r,e){var t=fn,o=ur.transition;try{ur.transition=null,fn=1,dh(n,r,e,t)}finally{ur.transition=o,fn=t}return null}function dh(n,r,e,t){do $e();while(Wr!==null);if(sn&6)throw Error(A(327));e=n.finishedWork;var o=n.finishedLanes;if(e===null)return null;if(n.finishedWork=null,n.finishedLanes=0,e===n.current)throw Error(A(177));n.callbackNode=null,n.callbackPriority=0;var a=e.lanes|e.childLanes;if(Vf(n,a),n===Pn&&(On=Pn=null,Rn=0),!(e.subtreeFlags&2064)&&!(e.flags&2064)||ui||(ui=!0,jd(Mi,function(){return $e(),null})),a=(e.flags&15990)!==0,e.subtreeFlags&15990||a){a=ur.transition,ur.transition=null;var s=fn;fn=1;var l=sn;sn|=4,Os.current=null,oh(n,e),hd(e,n),Cp(wa),Ii=!!_a,wa=_a=null,n.current=e,ah(e),If(),sn=l,fn=s,ur.transition=a}else n.current=e;if(ui&&(ui=!1,Wr=n,Xi=o),a=n.pendingLanes,a===0&&(qr=null),zf(e.stateNode),Xn(n,Nn()),r!==null)for(t=n.onRecoverableError,e=0;e<r.length;e++)o=r[e],t(o.value,{componentStack:o.stack,digest:o.digest});if(qi)throw qi=!1,n=Ua,Ua=null,n;return Xi&1&&n.tag!==0&&$e(),a=n.pendingLanes,a&1?n===Ha?St++:(St=0,Ha=n):St=0,ie(),null}function $e(){if(Wr!==null){var n=Zu(Xi),r=ur.transition,e=fn;try{if(ur.transition=null,fn=16>n?16:n,Wr===null)var t=!1;else{if(n=Wr,Wr=null,Xi=0,sn&6)throw Error(A(331));var o=sn;for(sn|=4,U=n.current;U!==null;){var a=U,s=a.child;if(U.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(U=d;U!==null;){var m=U;switch(m.tag){case 0:case 11:case 15:_t(8,m,a)}var y=m.child;if(y!==null)y.return=m,U=y;else for(;U!==null;){m=U;var g=m.sibling,v=m.return;if(dd(m),m===d){U=null;break}if(g!==null){g.return=v,U=g;break}U=v}}}var w=a.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var E=S.sibling;S.sibling=null,S=E}while(S!==null)}}U=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,U=s;else n:for(;U!==null;){if(a=U,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_t(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,U=p;break n}U=a.return}}var f=n.current;for(U=f;U!==null;){s=U;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,U=h;else n:for(s=f;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fo(9,l)}}catch(T){Tn(l,l.return,T)}if(l===s){U=null;break n}var x=l.sibling;if(x!==null){x.return=l.return,U=x;break n}U=l.return}}if(sn=o,ie(),br&&typeof br.onPostCommitFiberRoot=="function")try{br.onPostCommitFiberRoot(to,n)}catch{}t=!0}return t}finally{fn=e,ur.transition=r}}return!1}function Ql(n,r,e){r=Ye(e,r),r=nd(n,r,1),n=Qr(n,r,1),r=Vn(),n!==null&&($t(n,1,r),Xn(n,r))}function Tn(n,r,e){if(n.tag===3)Ql(n,n,e);else for(;r!==null;){if(r.tag===3){Ql(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(qr===null||!qr.has(t))){n=Ye(e,n),n=rd(r,n,1),r=Qr(r,n,1),n=Vn(),r!==null&&($t(r,1,n),Xn(r,n));break}}r=r.return}}function fh(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),r=Vn(),n.pingedLanes|=n.suspendedLanes&e,Pn===n&&(Rn&e)===e&&(Cn===4||Cn===3&&(Rn&130023424)===Rn&&500>Nn()-Cs?fe(n,0):As|=e),Xn(n,r)}function wd(n,r){r===0&&(n.mode&1?(r=Zt,Zt<<=1,!(Zt&130023424)&&(Zt=4194304)):r=1);var e=Vn();n=Rr(n,r),n!==null&&($t(n,r,e),Xn(n,e))}function ph(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),wd(n,e)}function hh(n,r){var e=0;switch(n.tag){case 13:var t=n.stateNode,o=n.memoizedState;o!==null&&(e=o.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(A(314))}t!==null&&t.delete(r),wd(n,e)}var Sd;Sd=function(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qn.current)Yn=!0;else{if(!(n.lanes&e)&&!(r.flags&128))return Yn=!1,rh(n,r,e);Yn=!!(n.flags&131072)}else Yn=!1,yn&&r.flags&1048576&&bc(r,$i,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;Ei(n,r),n=r.pendingProps;var o=Ve(r,Hn.current);He(r,e),o=Ts(null,r,t,n,o,e);var a=bs();return r.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qn(t)?(a=!0,Ui(r)):a=!1,r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xs(r),o.updater=uo,r.stateNode=o,o._reactInternals=r,Aa(r,t,n,e),r=Pa(null,r,t,!0,a,e)):(r.tag=0,yn&&a&&fs(r),Wn(null,r,o,e),r=r.child),r;case 16:t=r.elementType;n:{switch(Ei(n,r),n=r.pendingProps,o=t._init,t=o(t._payload),r.type=t,o=r.tag=mh(t),n=gr(t,n),o){case 0:r=La(null,r,t,n,e);break n;case 1:r=Fl(null,r,t,n,e);break n;case 11:r=Bl(null,r,t,n,e);break n;case 14:r=zl(null,r,t,gr(t.type,n),e);break n}throw Error(A(306,t,""))}return r;case 0:return t=r.type,o=r.pendingProps,o=r.elementType===t?o:gr(t,o),La(n,r,t,o,e);case 1:return t=r.type,o=r.pendingProps,o=r.elementType===t?o:gr(t,o),Fl(n,r,t,o,e);case 3:n:{if(od(r),n===null)throw Error(A(387));t=r.pendingProps,a=r.memoizedState,o=a.element,Oc(n,r),Ki(r,t,null,e);var s=r.memoizedState;if(t=s.element,a.isDehydrated)if(a={element:t,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){o=Ye(Error(A(423)),r),r=Ul(n,r,t,e,o);break n}else if(t!==o){o=Ye(Error(A(424)),r),r=Ul(n,r,t,e,o);break n}else for(nr=Yr(r.stateNode.containerInfo.firstChild),er=r,yn=!0,vr=null,e=Pc(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ke(),t===o){r=Ir(n,r,e);break n}Wn(n,r,t,e)}r=r.child}return r;case 5:return Mc(r),n===null&&Ea(r),t=r.type,o=r.pendingProps,a=n!==null?n.memoizedProps:null,s=o.children,Sa(t,o)?s=null:a!==null&&Sa(t,a)&&(r.flags|=32),id(n,r),Wn(n,r,s,e),r.child;case 6:return n===null&&Ea(r),null;case 13:return ad(n,r,e);case 4:return _s(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=Ge(r,null,t,e):Wn(n,r,t,e),r.child;case 11:return t=r.type,o=r.pendingProps,o=r.elementType===t?o:gr(t,o),Bl(n,r,t,o,e);case 7:return Wn(n,r,r.pendingProps,e),r.child;case 8:return Wn(n,r,r.pendingProps.children,e),r.child;case 12:return Wn(n,r,r.pendingProps.children,e),r.child;case 10:n:{if(t=r.type._context,o=r.pendingProps,a=r.memoizedProps,s=o.value,gn(Wi,t._currentValue),t._currentValue=s,a!==null)if(_r(a.value,s)){if(a.children===o.children&&!Qn.current){r=Ir(n,r,e);break n}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var u=l.firstContext;u!==null;){if(u.context===t){if(a.tag===1){u=Lr(-1,e&-e),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}a.lanes|=e,u=a.alternate,u!==null&&(u.lanes|=e),Na(a.return,e,r),l.lanes|=e;break}u=u.next}}else if(a.tag===10)s=a.type===r.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(A(341));s.lanes|=e,l=s.alternate,l!==null&&(l.lanes|=e),Na(s,e,r),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===r){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Wn(n,r,o.children,e),r=r.child}return r;case 9:return o=r.type,t=r.pendingProps.children,He(r,e),o=cr(o),t=t(o),r.flags|=1,Wn(n,r,t,e),r.child;case 14:return t=r.type,o=gr(t,r.pendingProps),o=gr(t.type,o),zl(n,r,t,o,e);case 15:return ed(n,r,r.type,r.pendingProps,e);case 17:return t=r.type,o=r.pendingProps,o=r.elementType===t?o:gr(t,o),Ei(n,r),r.tag=1,qn(t)?(n=!0,Ui(r)):n=!1,He(r,e),Cc(r,t,o),Aa(r,t,o,e),Pa(null,r,t,!0,n,e);case 19:return sd(n,r,e);case 22:return td(n,r,e)}throw Error(A(156,r.tag))};function jd(n,r){return Yu(n,r)}function gh(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(n,r,e,t){return new gh(n,r,e,t)}function Rs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mh(n){if(typeof n=="function")return Rs(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ns)return 11;if(n===rs)return 14}return 2}function Zr(n,r){var e=n.alternate;return e===null?(e=lr(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&14680064,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e}function Ai(n,r,e,t,o,a){var s=2;if(t=n,typeof n=="function")Rs(n)&&(s=1);else if(typeof n=="string")s=5;else n:switch(n){case Ee:return pe(e.children,o,a,r);case Za:s=8,o|=8;break;case na:return n=lr(12,e,r,o|2),n.elementType=na,n.lanes=a,n;case ra:return n=lr(13,e,r,o),n.elementType=ra,n.lanes=a,n;case ea:return n=lr(19,e,r,o),n.elementType=ea,n.lanes=a,n;case Lu:return ho(e,o,a,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Au:s=10;break n;case Cu:s=9;break n;case ns:s=11;break n;case rs:s=14;break n;case zr:s=16,t=null;break n}throw Error(A(130,n==null?n:typeof n,""))}return r=lr(s,e,r,o),r.elementType=n,r.type=t,r.lanes=a,r}function pe(n,r,e,t){return n=lr(7,n,t,r),n.lanes=e,n}function ho(n,r,e,t){return n=lr(22,n,t,r),n.elementType=Lu,n.lanes=e,n.stateNode={isHidden:!1},n}function Go(n,r,e){return n=lr(6,n,null,r),n.lanes=e,n}function Jo(n,r,e){return r=lr(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function vh(n,r,e,t,o){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=No(0),this.expirationTimes=No(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.identifierPrefix=t,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Is(n,r,e,t,o,a,s,l,u){return n=new vh(n,r,e,l,u),r===1?(r=1,a===!0&&(r|=8)):r=0,a=lr(3,null,null,r),n.current=a,a.stateNode=n,a.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(a),n}function yh(n,r,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:t==null?null:""+t,children:n,containerInfo:r,implementation:e}}function Td(n){if(!n)return re;n=n._reactInternals;n:{if(we(n)!==n||n.tag!==1)throw Error(A(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break n;case 1:if(qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break n}}r=r.return}while(r!==null);throw Error(A(171))}if(n.tag===1){var e=n.type;if(qn(e))return jc(n,e,r)}return r}function bd(n,r,e,t,o,a,s,l,u){return n=Is(e,t,!0,n,o,a,s,l,u),n.context=Td(null),e=n.current,t=Vn(),o=Xr(e),a=Lr(t,o),a.callback=r??null,Qr(e,a,o),n.current.lanes=o,$t(n,o,t),Xn(n,t),n}function go(n,r,e,t){var o=r.current,a=Vn(),s=Xr(o);return e=Td(e),r.context===null?r.context=e:r.pendingContext=e,r=Lr(a,s),r.payload={element:n},t=t===void 0?null:t,t!==null&&(r.callback=t),n=Qr(o,r,s),n!==null&&(xr(n,o,s,a),Ti(n,o,s)),s}function no(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ql(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function Ds(n,r){ql(n,r),(n=n.alternate)&&ql(n,r)}function xh(){return null}var kd=typeof reportError=="function"?reportError:function(n){console.error(n)};function Bs(n){this._internalRoot=n}mo.prototype.render=Bs.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(A(409));go(n,r,null,null)};mo.prototype.unmount=Bs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xe(function(){go(null,n,null,null)}),r[Mr]=null}};function mo(n){this._internalRoot=n}mo.prototype.unstable_scheduleHydration=function(n){if(n){var r=ec();n={blockedOn:null,target:n,priority:r};for(var e=0;e<Ur.length&&r!==0&&r<Ur[e].priority;e++);Ur.splice(e,0,n),e===0&&ic(n)}};function zs(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Xl(){}function _h(n,r,e,t,o){if(o){if(typeof t=="function"){var a=t;t=function(){var d=no(s);a.call(d)}}var s=bd(r,t,n,0,null,!1,!1,"",Xl);return n._reactRootContainer=s,n[Mr]=s.current,Ct(n.nodeType===8?n.parentNode:n),xe(),s}for(;o=n.lastChild;)n.removeChild(o);if(typeof t=="function"){var l=t;t=function(){var d=no(u);l.call(d)}}var u=Is(n,0,!1,null,null,!1,!1,"",Xl);return n._reactRootContainer=u,n[Mr]=u.current,Ct(n.nodeType===8?n.parentNode:n),xe(function(){go(r,u,e,t)}),u}function yo(n,r,e,t,o){var a=e._reactRootContainer;if(a){var s=a;if(typeof o=="function"){var l=o;o=function(){var u=no(s);l.call(u)}}go(r,s,n,o)}else s=_h(e,r,n,o,t);return no(s)}nc=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var e=ft(r.pendingLanes);e!==0&&(is(r,e|1),Xn(r,Nn()),!(sn&6)&&(Qe=Nn()+500,ie()))}break;case 13:xe(function(){var t=Rr(n,1);if(t!==null){var o=Vn();xr(t,n,1,o)}}),Ds(n,1)}};os=function(n){if(n.tag===13){var r=Rr(n,134217728);if(r!==null){var e=Vn();xr(r,n,134217728,e)}Ds(n,134217728)}};rc=function(n){if(n.tag===13){var r=Xr(n),e=Rr(n,r);if(e!==null){var t=Vn();xr(e,n,r,t)}Ds(n,r)}};ec=function(){return fn};tc=function(n,r){var e=fn;try{return fn=n,r()}finally{fn=e}};fa=function(n,r,e){switch(r){case"input":if(oa(n,e),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var o=so(t);if(!o)throw Error(A(90));Mu(t),oa(t,o)}}}break;case"textarea":Iu(n,e);break;case"select":r=e.value,r!=null&&Be(n,!!e.multiple,r,!1)}};$u=Ls;Wu=xe;var wh={usingClientEntryPoint:!1,Events:[Vt,Ce,so,Uu,Hu,Ls]},lt={findFiberByHostInstance:ue,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Sh={bundleType:lt.bundleType,version:lt.version,rendererPackageName:lt.rendererPackageName,rendererConfig:lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gu(n),n===null?null:n.stateNode},findFiberByHostInstance:lt.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{to=ci.inject(Sh),br=ci}catch{}}ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wh;ir.createPortal=function(n,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zs(r))throw Error(A(200));return yh(n,r,null,e)};ir.createRoot=function(n,r){if(!zs(n))throw Error(A(299));var e=!1,t="",o=kd;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),r=Is(n,1,!1,null,null,e,!1,t,o),n[Mr]=r.current,Ct(n.nodeType===8?n.parentNode:n),new Bs(r)};ir.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(A(188)):(n=Object.keys(n).join(","),Error(A(268,n)));return n=Gu(r),n=n===null?null:n.stateNode,n};ir.flushSync=function(n){return xe(n)};ir.hydrate=function(n,r,e){if(!vo(r))throw Error(A(200));return yo(null,n,r,!0,e)};ir.hydrateRoot=function(n,r,e){if(!zs(n))throw Error(A(405));var t=e!=null&&e.hydratedSources||null,o=!1,a="",s=kd;if(e!=null&&(e.unstable_strictMode===!0&&(o=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),r=bd(r,null,n,1,e??null,o,!1,a,s),n[Mr]=r.current,Ct(n),t)for(n=0;n<t.length;n++)e=t[n],o=e._getVersion,o=o(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,o]:r.mutableSourceEagerHydrationData.push(e,o);return new mo(r)};ir.render=function(n,r,e){if(!vo(r))throw Error(A(200));return yo(null,n,r,!1,e)};ir.unmountComponentAtNode=function(n){if(!vo(n))throw Error(A(40));return n._reactRootContainer?(xe(function(){yo(null,null,n,!1,function(){n._reactRootContainer=null,n[Mr]=null})}),!0):!1};ir.unstable_batchedUpdates=Ls;ir.unstable_renderSubtreeIntoContainer=function(n,r,e,t){if(!vo(e))throw Error(A(200));if(n==null||n._reactInternals===void 0)throw Error(A(38));return yo(n,r,e,!1,t)};ir.version="18.2.0-next-9e3b772b8-20220608";function Ed(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed)}catch(n){console.error(n)}}Ed(),bu.exports=ir;var Nd=bu.exports;const jh=Va(Nd);var Zl=Nd;Xo.createRoot=Zl.createRoot,Xo.hydrateRoot=Zl.hydrateRoot;const Od=K.createContext(void 0);function Th({children:n}){const[r,e]=K.useState(!0),t=()=>e(!0),o=()=>e(!1),a=()=>e(!r);return i.jsx(Od.Provider,{value:{isSidebarOpen:r,showSidebar:t,hideSidebar:o,toggleSidebar:a},children:n})}function Fs(){const n=K.useContext(Od);if(n===void 0)throw new Error("useSidebar must be used within SidebarProvider");return n}const bh="_wave_nm5to_1",kh="_gradient_nm5to_1",di={wave:bh,gradient:kh};function Eh(){return i.jsxs("div",{className:di.background,children:[i.jsx("div",{className:di.wave}),i.jsx("div",{className:di.wave}),i.jsx("div",{className:di.wave})]})}const Nh="_topbar_103sc_1",Oh="_container_103sc_22",Ah="_buttonContainer_103sc_28",Ch="_title_103sc_35",Lh="_iconLink_103sc_53",Ph="_hamburger_103sc_75",Mh="_hamburgerIcon_103sc_79",Rh="_hamburgerTop_103sc_88",Ih="_collapsed_103sc_92",Dh="_hamburgerMiddle_103sc_96",Bh="_hamburgerBottom_103sc_106",hr={topbar:Nh,container:Oh,buttonContainer:Ah,title:Ch,"animated-gradient":"_animated-gradient_103sc_1",iconLink:Lh,hamburger:Ph,hamburgerIcon:Mh,hamburgerTop:Rh,collapsed:Ih,hamburgerMiddle:Dh,hamburgerBottom:Bh};var Ad={exports:{}};(function(n,r){(function(t,o){n.exports=o(K)})(qd,e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":(l,u)=>{u.match=w,u.parse=S;var d=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,y=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,v=/(dpi|dpcm|dppx)?$/;function w(h,x){return S(h).some(function(T){var b=T.inverse,k=T.type==="all"||x.type===T.type;if(k&&b||!(k||b))return!1;var P=T.expressions.every(function(N){var R=N.feature,V=N.modifier,G=N.value,W=x[R];if(!W)return!1;switch(R){case"orientation":case"scan":return W.toLowerCase()===G.toLowerCase();case"width":case"height":case"device-width":case"device-height":G=f(G),W=f(W);break;case"resolution":G=p(G),W=p(W);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":G=E(G),W=E(W);break;case"grid":case"color":case"color-index":case"monochrome":G=parseInt(G,10)||1,W=parseInt(W,10)||0;break}switch(V){case"min":return W>=G;case"max":return W<=G;default:return W===G}});return P&&!b||!P&&b})}function S(h){return h.split(",").map(function(x){x=x.trim();var T=x.match(d),b=T[1],k=T[2],P=T[3]||"",N={};return N.inverse=!!b&&b.toLowerCase()==="not",N.type=k?k.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],N.expressions=P.map(function(R){var V=R.match(m),G=V[1].toLowerCase().match(y);return{modifier:G[1],feature:G[2],value:V[2]}}),N})}function E(h){var x=Number(h),T;return x||(T=h.match(/^(\d+)\s*\/\s*(\d+)$/),x=T[1]/T[2]),x}function p(h){var x=parseFloat(h),T=String(h).match(v)[1];switch(T){case"dpcm":return x/2.54;case"dppx":return x*96;default:return x}}function f(h){var x=parseFloat(h),T=String(h).match(g)[1];switch(T){case"em":return x*16;case"rem":return x*16;case"cm":return x*96/2.54;case"mm":return x*96/2.54/10;case"in":return x*96;case"pt":return x*72;case"pc":return x*72/12;default:return x}}},"./node_modules/hyphenate-style-name/index.js":(l,u,d)=>{d.r(u),d.d(u,{default:()=>S});var m=/[A-Z]/g,y=/^ms-/,g={};function v(E){return"-"+E.toLowerCase()}function w(E){if(g.hasOwnProperty(E))return g[E];var p=E.replace(m,v);return g[E]=y.test(p)?"-"+p:p}const S=w},"./node_modules/matchmediaquery/index.js":(l,u,d)=>{var m=d("./node_modules/css-mediaquery/index.js").match,y=typeof window<"u"?window.matchMedia:null;function g(w,S,E){var p=this;if(y&&!E){var f=y.call(window,w);this.matches=f.matches,this.media=f.media,f.addListener(T)}else this.matches=m(w,S),this.media=w;this.addListener=h,this.removeListener=x,this.dispose=b;function h(k){f&&f.addListener(k)}function x(k){f&&f.removeListener(k)}function T(k){p.matches=k.matches,p.media=k.media}function b(){f&&f.removeListener(T)}}function v(w,S,E){return new g(w,S,E)}l.exports=v},"./node_modules/object-assign/index.js":l=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function y(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function g(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var w={},S=0;S<10;S++)w["_"+String.fromCharCode(S)]=S;var E=Object.getOwnPropertyNames(w).map(function(f){return w[f]});if(E.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(f){p[f]=f}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l.exports=g()?Object.assign:function(v,w){for(var S,E=y(v),p,f=1;f<arguments.length;f++){S=Object(arguments[f]);for(var h in S)d.call(S,h)&&(E[h]=S[h]);if(u){p=u(S);for(var x=0;x<p.length;x++)m.call(S,p[x])&&(E[p[x]]=S[p[x]])}}return E}},"./node_modules/prop-types/checkPropTypes.js":(l,u,d)=>{var m=function(){};{var y=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},v=d("./node_modules/prop-types/lib/has.js");m=function(S){var E="Warning: "+S;typeof console<"u"&&console.error(E);try{throw new Error(E)}catch{}}}function w(S,E,p,f,h){for(var x in S)if(v(S,x)){var T;try{if(typeof S[x]!="function"){var b=Error((f||"React class")+": "+p+" type `"+x+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof S[x]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}T=S[x](E,x,f,p,null,y)}catch(P){T=P}if(T&&!(T instanceof Error)&&m((f||"React class")+": type specification of "+p+" `"+x+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof T+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),T instanceof Error&&!(T.message in g)){g[T.message]=!0;var k=h?h():"";m("Failed "+p+" type: "+T.message+(k??""))}}}w.resetWarningCache=function(){g={}},l.exports=w},"./node_modules/prop-types/factoryWithTypeCheckers.js":(l,u,d)=>{var m=d("./node_modules/react-is/index.js"),y=d("./node_modules/object-assign/index.js"),g=d("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v=d("./node_modules/prop-types/lib/has.js"),w=d("./node_modules/prop-types/checkPropTypes.js"),S=function(){};S=function(p){var f="Warning: "+p;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}};function E(){return null}l.exports=function(p,f){var h=typeof Symbol=="function"&&Symbol.iterator,x="@@iterator";function T(L){var F=L&&(h&&L[h]||L[x]);if(typeof F=="function")return F}var b="<<anonymous>>",k={array:V("array"),bigint:V("bigint"),bool:V("boolean"),func:V("function"),number:V("number"),object:V("object"),string:V("string"),symbol:V("symbol"),any:G(),arrayOf:W,element:hn(),elementType:xn(),instanceOf:jn,node:I(),objectOf:j,oneOf:O,oneOfType:C,shape:Q,exact:bn};function P(L,F){return L===F?L!==0||1/L===1/F:L!==L&&F!==F}function N(L,F){this.message=L,this.data=F&&typeof F=="object"?F:{},this.stack=""}N.prototype=Error.prototype;function R(L){var F={},Z=0;function X(on,J,rn,en,D,an,M){if(en=en||b,an=an||rn,M!==g){if(f){var q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw q.name="Invariant Violation",q}else if(typeof console<"u"){var Dn=en+":"+rn;!F[Dn]&&Z<3&&(S("You are manually calling a React.PropTypes validation function for the `"+an+"` prop on `"+en+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),F[Dn]=!0,Z++)}}return J[rn]==null?on?J[rn]===null?new N("The "+D+" `"+an+"` is marked as required "+("in `"+en+"`, but its value is `null`.")):new N("The "+D+" `"+an+"` is marked as required in "+("`"+en+"`, but its value is `undefined`.")):null:L(J,rn,en,D,an)}var Y=X.bind(null,!1);return Y.isRequired=X.bind(null,!0),Y}function V(L){function F(Z,X,Y,on,J,rn){var en=Z[X],D=ln(en);if(D!==L){var an=pn(en);return new N("Invalid "+on+" `"+J+"` of type "+("`"+an+"` supplied to `"+Y+"`, expected ")+("`"+L+"`."),{expectedType:L})}return null}return R(F)}function G(){return R(E)}function W(L){function F(Z,X,Y,on,J){if(typeof L!="function")return new N("Property `"+J+"` of component `"+Y+"` has invalid PropType notation inside arrayOf.");var rn=Z[X];if(!Array.isArray(rn)){var en=ln(rn);return new N("Invalid "+on+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected an array."))}for(var D=0;D<rn.length;D++){var an=L(rn,D,Y,on,J+"["+D+"]",g);if(an instanceof Error)return an}return null}return R(F)}function hn(){function L(F,Z,X,Y,on){var J=F[Z];if(!p(J)){var rn=ln(J);return new N("Invalid "+Y+" `"+on+"` of type "+("`"+rn+"` supplied to `"+X+"`, expected a single ReactElement."))}return null}return R(L)}function xn(){function L(F,Z,X,Y,on){var J=F[Z];if(!m.isValidElementType(J)){var rn=ln(J);return new N("Invalid "+Y+" `"+on+"` of type "+("`"+rn+"` supplied to `"+X+"`, expected a single ReactElement type."))}return null}return R(L)}function jn(L){function F(Z,X,Y,on,J){if(!(Z[X]instanceof L)){var rn=L.name||b,en=fr(Z[X]);return new N("Invalid "+on+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected ")+("instance of `"+rn+"`."))}return null}return R(F)}function O(L){if(!Array.isArray(L))return arguments.length>1?S("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):S("Invalid argument supplied to oneOf, expected an array."),E;function F(Z,X,Y,on,J){for(var rn=Z[X],en=0;en<L.length;en++)if(P(rn,L[en]))return null;var D=JSON.stringify(L,function(M,q){var Dn=pn(q);return Dn==="symbol"?String(q):q});return new N("Invalid "+on+" `"+J+"` of value `"+String(rn)+"` "+("supplied to `"+Y+"`, expected one of "+D+"."))}return R(F)}function j(L){function F(Z,X,Y,on,J){if(typeof L!="function")return new N("Property `"+J+"` of component `"+Y+"` has invalid PropType notation inside objectOf.");var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+on+" `"+J+"` of type "+("`"+en+"` supplied to `"+Y+"`, expected an object."));for(var D in rn)if(v(rn,D)){var an=L(rn,D,Y,on,J+"."+D,g);if(an instanceof Error)return an}return null}return R(F)}function C(L){if(!Array.isArray(L))return S("Invalid argument supplied to oneOfType, expected an instance of array."),E;for(var F=0;F<L.length;F++){var Z=L[F];if(typeof Z!="function")return S("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+En(Z)+" at index "+F+"."),E}function X(Y,on,J,rn,en){for(var D=[],an=0;an<L.length;an++){var M=L[an],q=M(Y,on,J,rn,en,g);if(q==null)return null;q.data&&v(q.data,"expectedType")&&D.push(q.data.expectedType)}var Dn=D.length>0?", expected one of type ["+D.join(", ")+"]":"";return new N("Invalid "+rn+" `"+en+"` supplied to "+("`"+J+"`"+Dn+"."))}return R(X)}function I(){function L(F,Z,X,Y,on){return kn(F[Z])?null:new N("Invalid "+Y+" `"+on+"` supplied to "+("`"+X+"`, expected a ReactNode."))}return R(L)}function H(L,F,Z,X,Y){return new N((L||"React class")+": "+F+" type `"+Z+"."+X+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Y+"`.")}function Q(L){function F(Z,X,Y,on,J){var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+on+" `"+J+"` of type `"+en+"` "+("supplied to `"+Y+"`, expected `object`."));for(var D in L){var an=L[D];if(typeof an!="function")return H(Y,on,J,D,pn(an));var M=an(rn,D,Y,on,J+"."+D,g);if(M)return M}return null}return R(F)}function bn(L){function F(Z,X,Y,on,J){var rn=Z[X],en=ln(rn);if(en!=="object")return new N("Invalid "+on+" `"+J+"` of type `"+en+"` "+("supplied to `"+Y+"`, expected `object`."));var D=y({},Z[X],L);for(var an in D){var M=L[an];if(v(L,an)&&typeof M!="function")return H(Y,on,J,an,pn(M));if(!M)return new N("Invalid "+on+" `"+J+"` key `"+an+"` supplied to `"+Y+"`.\nBad object: "+JSON.stringify(Z[X],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(L),null,"  "));var q=M(rn,an,Y,on,J+"."+an,g);if(q)return q}return null}return R(F)}function kn(L){switch(typeof L){case"number":case"string":case"undefined":return!0;case"boolean":return!L;case"object":if(Array.isArray(L))return L.every(kn);if(L===null||p(L))return!0;var F=T(L);if(F){var Z=F.call(L),X;if(F!==L.entries){for(;!(X=Z.next()).done;)if(!kn(X.value))return!1}else for(;!(X=Z.next()).done;){var Y=X.value;if(Y&&!kn(Y[1]))return!1}}else return!1;return!0;default:return!1}}function cn(L,F){return L==="symbol"?!0:F?F["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&F instanceof Symbol:!1}function ln(L){var F=typeof L;return Array.isArray(L)?"array":L instanceof RegExp?"object":cn(F,L)?"symbol":F}function pn(L){if(typeof L>"u"||L===null)return""+L;var F=ln(L);if(F==="object"){if(L instanceof Date)return"date";if(L instanceof RegExp)return"regexp"}return F}function En(L){var F=pn(L);switch(F){case"array":case"object":return"an "+F;case"boolean":case"date":case"regexp":return"a "+F;default:return F}}function fr(L){return!L.constructor||!L.constructor.name?b:L.constructor.name}return k.checkPropTypes=w,k.resetWarningCache=w.resetWarningCache,k.PropTypes=k,k}},"./node_modules/prop-types/index.js":(l,u,d)=>{{var m=d("./node_modules/react-is/index.js"),y=!0;l.exports=d("./node_modules/prop-types/factoryWithTypeCheckers.js")(m.isElement,y)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":l=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";l.exports=u},"./node_modules/prop-types/lib/has.js":l=>{l.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(l,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var d=typeof Symbol=="function"&&Symbol.for,m=d?Symbol.for("react.element"):60103,y=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,v=d?Symbol.for("react.strict_mode"):60108,w=d?Symbol.for("react.profiler"):60114,S=d?Symbol.for("react.provider"):60109,E=d?Symbol.for("react.context"):60110,p=d?Symbol.for("react.async_mode"):60111,f=d?Symbol.for("react.concurrent_mode"):60111,h=d?Symbol.for("react.forward_ref"):60112,x=d?Symbol.for("react.suspense"):60113,T=d?Symbol.for("react.suspense_list"):60120,b=d?Symbol.for("react.memo"):60115,k=d?Symbol.for("react.lazy"):60116,P=d?Symbol.for("react.block"):60121,N=d?Symbol.for("react.fundamental"):60117,R=d?Symbol.for("react.responder"):60118,V=d?Symbol.for("react.scope"):60119;function G(M){return typeof M=="string"||typeof M=="function"||M===g||M===f||M===w||M===v||M===x||M===T||typeof M=="object"&&M!==null&&(M.$$typeof===k||M.$$typeof===b||M.$$typeof===S||M.$$typeof===E||M.$$typeof===h||M.$$typeof===N||M.$$typeof===R||M.$$typeof===V||M.$$typeof===P)}function W(M){if(typeof M=="object"&&M!==null){var q=M.$$typeof;switch(q){case m:var Dn=M.type;switch(Dn){case p:case f:case g:case w:case v:case x:return Dn;default:var wr=Dn&&Dn.$$typeof;switch(wr){case E:case h:case k:case b:case S:return wr;default:return q}}case y:return q}}}var hn=p,xn=f,jn=E,O=S,j=m,C=h,I=g,H=k,Q=b,bn=y,kn=w,cn=v,ln=x,pn=!1;function En(M){return pn||(pn=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),fr(M)||W(M)===p}function fr(M){return W(M)===f}function L(M){return W(M)===E}function F(M){return W(M)===S}function Z(M){return typeof M=="object"&&M!==null&&M.$$typeof===m}function X(M){return W(M)===h}function Y(M){return W(M)===g}function on(M){return W(M)===k}function J(M){return W(M)===b}function rn(M){return W(M)===y}function en(M){return W(M)===w}function D(M){return W(M)===v}function an(M){return W(M)===x}u.AsyncMode=hn,u.ConcurrentMode=xn,u.ContextConsumer=jn,u.ContextProvider=O,u.Element=j,u.ForwardRef=C,u.Fragment=I,u.Lazy=H,u.Memo=Q,u.Portal=bn,u.Profiler=kn,u.StrictMode=cn,u.Suspense=ln,u.isAsyncMode=En,u.isConcurrentMode=fr,u.isContextConsumer=L,u.isContextProvider=F,u.isElement=Z,u.isForwardRef=X,u.isFragment=Y,u.isLazy=on,u.isMemo=J,u.isPortal=rn,u.isProfiler=en,u.isStrictMode=D,u.isSuspense=an,u.isValidElementType=G,u.typeOf=W})()},"./node_modules/react-is/index.js":(l,u,d)=>{l.exports=d("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(l,u,d)=>{d.r(u),d.d(u,{shallowEqualArrays:()=>y,shallowEqualObjects:()=>m});function m(g,v){if(g===v)return!0;if(!g||!v)return!1;var w=Object.keys(g),S=Object.keys(v),E=w.length;if(S.length!==E)return!1;for(var p=0;p<E;p++){var f=w[p];if(g[f]!==v[f]||!Object.prototype.hasOwnProperty.call(v,f))return!1}return!0}function y(g,v){if(g===v)return!0;if(!g||!v)return!1;var w=g.length;if(v.length!==w)return!1;for(var S=0;S<w;S++)if(g[S]!==v[S])return!1;return!0}},"./src/Component.ts":function(l,u,d){var m=this&&this.__rest||function(w,S){var E={};for(var p in w)Object.prototype.hasOwnProperty.call(w,p)&&S.indexOf(p)<0&&(E[p]=w[p]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,p=Object.getOwnPropertySymbols(w);f<p.length;f++)S.indexOf(p[f])<0&&Object.prototype.propertyIsEnumerable.call(w,p[f])&&(E[p[f]]=w[p[f]]);return E},y=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(u,"__esModule",{value:!0});var g=y(d("./src/useMediaQuery.ts")),v=function(w){var S=w.children,E=w.device,p=w.onChange,f=m(w,["children","device","onChange"]),h=(0,g.default)(f,E,p);return typeof S=="function"?S(h):h?S:null};u.default=v},"./src/Context.ts":(l,u,d)=>{Object.defineProperty(u,"__esModule",{value:!0});var m=d("react"),y=(0,m.createContext)(void 0);u.default=y},"./src/index.ts":function(l,u,d){var m=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var y=m(d("./src/useMediaQuery.ts"));u.useMediaQuery=y.default;var g=m(d("./src/Component.ts"));u.default=g.default;var v=m(d("./src/toQuery.ts"));u.toQuery=v.default;var w=m(d("./src/Context.ts"));u.Context=w.default},"./src/mediaQuery.ts":function(l,u,d){var m=this&&this.__assign||function(){return m=Object.assign||function(x){for(var T,b=1,k=arguments.length;b<k;b++){T=arguments[b];for(var P in T)Object.prototype.hasOwnProperty.call(T,P)&&(x[P]=T[P])}return x},m.apply(this,arguments)},y=this&&this.__rest||function(x,T){var b={};for(var k in x)Object.prototype.hasOwnProperty.call(x,k)&&T.indexOf(k)<0&&(b[k]=x[k]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,k=Object.getOwnPropertySymbols(x);P<k.length;P++)T.indexOf(k[P])<0&&Object.prototype.propertyIsEnumerable.call(x,k[P])&&(b[k[P]]=x[k[P]]);return b},g=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(u,"__esModule",{value:!0});var v=g(d("./node_modules/prop-types/index.js")),w=v.default.oneOfType([v.default.string,v.default.number]),S={all:v.default.bool,grid:v.default.bool,aural:v.default.bool,braille:v.default.bool,handheld:v.default.bool,print:v.default.bool,projection:v.default.bool,screen:v.default.bool,tty:v.default.bool,tv:v.default.bool,embossed:v.default.bool},E={orientation:v.default.oneOf(["portrait","landscape"]),scan:v.default.oneOf(["progressive","interlace"]),aspectRatio:v.default.string,deviceAspectRatio:v.default.string,height:w,deviceHeight:w,width:w,deviceWidth:w,color:v.default.bool,colorIndex:v.default.bool,monochrome:v.default.bool,resolution:w,type:Object.keys(S)};E.type;var p=y(E,["type"]),f=m({minAspectRatio:v.default.string,maxAspectRatio:v.default.string,minDeviceAspectRatio:v.default.string,maxDeviceAspectRatio:v.default.string,minHeight:w,maxHeight:w,minDeviceHeight:w,maxDeviceHeight:w,minWidth:w,maxWidth:w,minDeviceWidth:w,maxDeviceWidth:w,minColor:v.default.number,maxColor:v.default.number,minColorIndex:v.default.number,maxColorIndex:v.default.number,minMonochrome:v.default.number,maxMonochrome:v.default.number,minResolution:w,maxResolution:w},p),h=m(m({},S),f);u.default={all:h,types:S,matchers:E,features:f}},"./src/toQuery.ts":function(l,u,d){var m=this&&this.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(u,"__esModule",{value:!0});var y=m(d("./node_modules/hyphenate-style-name/index.js")),g=m(d("./src/mediaQuery.ts")),v=function(p){return"not ".concat(p)},w=function(p,f){var h=(0,y.default)(p);return typeof f=="number"&&(f="".concat(f,"px")),f===!0?h:f===!1?v(h):"(".concat(h,": ").concat(f,")")},S=function(p){return p.join(" and ")},E=function(p){var f=[];return Object.keys(g.default.all).forEach(function(h){var x=p[h];x!=null&&f.push(w(h,x))}),S(f)};u.default=E},"./src/useMediaQuery.ts":function(l,u,d){var m=this&&this.__importDefault||function(N){return N&&N.__esModule?N:{default:N}};Object.defineProperty(u,"__esModule",{value:!0});var y=d("react"),g=m(d("./node_modules/matchmediaquery/index.js")),v=m(d("./node_modules/hyphenate-style-name/index.js")),w=d("./node_modules/shallow-equal/dist/index.esm.js"),S=m(d("./src/toQuery.ts")),E=m(d("./src/Context.ts")),p=function(N){return N.query||(0,S.default)(N)},f=function(N){if(N){var R=Object.keys(N);return R.reduce(function(V,G){return V[(0,v.default)(G)]=N[G],V},{})}},h=function(){var N=(0,y.useRef)(!1);return(0,y.useEffect)(function(){N.current=!0},[]),N.current},x=function(N){var R=(0,y.useContext)(E.default),V=function(){return f(N)||f(R)},G=(0,y.useState)(V),W=G[0],hn=G[1];return(0,y.useEffect)(function(){var xn=V();(0,w.shallowEqualObjects)(W,xn)||hn(xn)},[N,R]),W},T=function(N){var R=function(){return p(N)},V=(0,y.useState)(R),G=V[0],W=V[1];return(0,y.useEffect)(function(){var hn=R();G!==hn&&W(hn)},[N]),G},b=function(N,R){var V=function(){return(0,g.default)(N,R||{},!!R)},G=(0,y.useState)(V),W=G[0],hn=G[1],xn=h();return(0,y.useEffect)(function(){if(xn){var jn=V();return hn(jn),function(){jn&&jn.dispose()}}},[N,R]),W},k=function(N){var R=(0,y.useState)(N.matches),V=R[0],G=R[1];return(0,y.useEffect)(function(){var W=function(hn){G(hn.matches)};return N.addListener(W),G(N.matches),function(){N.removeListener(W)}},[N]),V},P=function(N,R,V){var G=x(R),W=T(N);if(!W)throw new Error("Invalid or missing MediaQuery!");var hn=b(W,G),xn=k(hn),jn=h();return(0,y.useEffect)(function(){jn&&V&&V(xn)},[xn]),(0,y.useEffect)(function(){return function(){hn&&hn.dispose()}},[]),xn};u.default=P},react:l=>{l.exports=e}},o={};function a(l){var u=o[l];if(u!==void 0)return u.exports;var d=o[l]={exports:{}};return t[l].call(d.exports,d,d.exports,a),d.exports}a.d=(l,u)=>{for(var d in u)a.o(u,d)&&!a.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:u[d]})},a.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),a.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var s=a("./src/index.ts");return s})())})(Ad);var Cd=Ad.exports;function zh(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}function Ld({selector:n,duration:r=1500,offset:e=0}){const t=K.useRef(null),o=K.useRef(0),a=K.useRef(!1),s=()=>{o.current&&cancelAnimationFrame(o.current)},l=()=>a.current=!0,u=K.useCallback(()=>{if(!t.current)return;s(),a.current=!1;const m=t.current.offsetTop,y=window.scrollY,g=m-y-e,v=performance.now();if(!g)return;const w=S=>{const E=S-v,p=E/r,f=zh(p>1?1:p),h=y+g*f;window.scrollTo({top:h}),E<r&&!a.current?requestAnimationFrame(w):o.current=0};requestAnimationFrame(w)},[n,r,e]);return K.useEffect(()=>(t.current=document.querySelector(n),window.addEventListener("wheel",l,{passive:!0}),window.addEventListener("touchmove",l,{passive:!0}),()=>{s(),window.removeEventListener("wheel",l),window.removeEventListener("touchmove",l)}),[n]),u}function rr(...n){return n.filter(Boolean).join(" ")}const Fh="_brand_18f9t_1",Uh="_bounce_18f9t_19",Hh="_glowDisappear_18f9t_23",$h="_heartBeat_18f9t_27",Wh="_rubberBand_18f9t_31",Vh="_rotate_18f9t_35",oe={brand:Fh,bounce:Uh,glowDisappear:Hh,"glow-disappear":"_glow-disappear_18f9t_1",heartBeat:$h,"heart-beat":"_heart-beat_18f9t_1",rubberBand:Wh,"rubber-band":"_rubber-band_18f9t_1",rotate:Vh};function Kh(){const[n,r]=K.useState(oe.rotate),[e,t]=K.useState(!1),o=[oe.bounce,oe.glowDisappear,oe.heartBeat,oe.rubberBand,oe.rotate],a=rr(oe.brand,e&&n),s=()=>t(!1),l=()=>{const u=Math.floor(Math.random()*o.length),d=o[u];t(!0),r(d)};return i.jsx("div",{className:a,onClick:l,onAnimationEnd:s,children:"JWL"})}const Gh="_container_uucyv_1",Jh="_input_uucyv_6",Yh="_label_uucyv_16",Qh="_indicator_uucyv_20",qh="_decoration_uucyv_28",Xh="_cloud_uucyv_1",Zh="_twinkle_uucyv_1",ut={container:Gh,input:Jh,label:Yh,indicator:Qh,decoration:qh,cloud:Xh,twinkle:Zh};function nu(){const n=document.documentElement,[r,e]=K.useState(!1),t=()=>{const a=new Event("themeChange");n.dispatchEvent(a)},o=()=>{e(!r),n.setAttribute("data-theme",r?"dark":"light"),t()};return K.useEffect(()=>{const a=n.getAttribute("data-theme");e(a==="light"),t()},[]),i.jsxs("div",{className:ut.container,children:[i.jsx("input",{className:ut.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:r,onChange:o}),i.jsxs("label",{className:ut.label,htmlFor:"theme-switch",children:[i.jsx("span",{className:ut.indicator}),i.jsx("span",{className:ut.decoration})]})]})}function ng(){const n=document.documentElement,[r,e]=K.useState("light"),t=()=>{const o=n.getAttribute("data-theme")??"light";e(o)};return K.useEffect(()=>(n.addEventListener("themeChange",t),()=>n.removeEventListener("themeChange",t)),[n]),r}function rg(){const r=ng()==="dark"?"#FFFFFF":"#181616";return i.jsx("svg",{viewBox:"0 0 128 128",children:i.jsxs("g",{fill:r,children:[i.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),i.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const eg=72;function tg({forwardedRef:n}){const r=K.useRef(null),e=Ld({selector:"main",offset:eg}),{isSidebarOpen:t,toggleSidebar:o}=Fs(),a=Cd.useMediaQuery({maxWidth:768}),s=rr(hr.hamburgerIcon,!t&&hr.collapsed),l=v=>{v.preventDefault(),window.history.replaceState({},"",window.location.pathname),e()},u=()=>o(),d=()=>!a&&i.jsx(Kh,{}),m=()=>!a&&i.jsx("a",{href:"main",onClick:l,role:"button",children:i.jsx("h1",{className:hr.title,children:"LeetCode Cheatsheet"})}),y=()=>i.jsx("a",{href:"https://github.com/jwl-7/leetcode-cheatsheet","aria-label":"GitHub source",className:hr.iconLink,target:"_blank",children:i.jsx(rg,{})}),g=()=>a?i.jsxs(i.Fragment,{children:[i.jsx(nu,{}),y()]}):i.jsxs("div",{className:hr.buttonContainer,children:[y(),i.jsx(nu,{})]});return i.jsx("header",{ref:r,className:hr.topbar,children:i.jsxs("div",{className:hr.container,children:[i.jsxs("div",{ref:n,className:hr.hamburger,onClick:u,children:[i.jsx("span",{className:rr(s,hr.hamburgerTop)}),i.jsx("span",{className:rr(s,hr.hamburgerMiddle)}),i.jsx("span",{className:rr(s,hr.hamburgerBottom)})]}),d(),m(),g()]})})}const ig="_sidebar_14bou_1",og="_exit_14bou_21",ag="_hide_14bou_24",sg="_scrollContainer_14bou_28",fi={sidebar:ig,"sidebar-enter":"_sidebar-enter_14bou_1",exit:og,"sidebar-exit":"_sidebar-exit_14bou_1",hide:ag,scrollContainer:sg};function xo(n,r){const e=t=>{const o=a=>a.current&&!a.current.contains(t.target);(Array.isArray(n)?n.every(o):o(n))&&r()};K.useEffect(()=>(document.addEventListener("click",e),()=>document.removeEventListener("click",e)),[n,r])}const lg="_accordion_1hmri_1",ug="_button_1hmri_6",cg="_open_1hmri_25",dg="_content_1hmri_29",pi={accordion:lg,button:ug,open:cg,content:dg};function fg(n){const r=parseFloat(n);return!isNaN(r)&&isFinite(r)}function ru(n){return typeof n=="string"&&n[n.length-1]==="%"&&fg(n.substring(0,n.length-1))}function Yo(n,r,e){r===0&&!e&&(n!=null&&n.style)&&(n==null?void 0:n.children.length)>0&&(n.style.display="none")}function pg(n,r){r===0&&(n!=null&&n.style)&&(n.style.display="")}const hg={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function eu(n,r){return[n.static,r===0&&n.staticHeightZero,typeof r=="number"&&r>0?n.staticHeightSpecific:null,r==="auto"&&n.staticHeightAuto].filter(e=>e).join(" ")}const gg=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],mg=_i.forwardRef((n,r)=>{const{animateOpacity:e=!1,animationStateClasses:t={},applyInlineTransitions:o=!0,children:a,className:s="",contentClassName:l,delay:u=0,disableDisplayNone:d=!1,duration:m=500,easing:y="ease",height:g,onHeightAnimationEnd:v,onHeightAnimationStart:w,style:S,contentRef:E}=n,p=Object.assign({},n);gg.forEach(cn=>{delete p[cn]});const f=K.useRef(g),h=K.useRef(null),x=K.useRef(),T=K.useRef(),b=K.useRef(Object.assign(Object.assign({},hg),t)),k=typeof window<"u",P=K.useRef(k&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),N=P.current?0:u,R=P.current?0:m;let V=g,G="visible";typeof g=="number"?(V=g<0?0:g,G="hidden"):ru(V)&&(V=g==="0%"?0:g,G="hidden");const[W,hn]=K.useState(V),[xn,jn]=K.useState(G),[O,j]=K.useState(!1),[C,I]=K.useState(eu(b.current,g));K.useEffect(()=>{Yo(h.current,W,d)},[]),K.useEffect(()=>{if(g!==f.current&&h.current){pg(h.current,f.current),h.current.style.overflow="hidden";const cn=h.current.offsetHeight;h.current.style.overflow="";const ln=R+N;let pn,En,fr="hidden",L;const F=f.current==="auto";typeof g=="number"?(pn=g<0?0:g,En=pn):ru(g)?(pn=g==="0%"?0:g,En=pn):(pn=cn,En="auto",fr=void 0),F&&(En=pn,pn=cn);const Z=[b.current.animating,(f.current==="auto"||g<f.current)&&b.current.animatingUp,(g==="auto"||g>f.current)&&b.current.animatingDown,En===0&&b.current.animatingToHeightZero,En==="auto"&&b.current.animatingToHeightAuto,typeof En=="number"&&En>0?b.current.animatingToHeightSpecific:null].filter(Y=>Y).join(" "),X=eu(b.current,En);hn(pn),jn("hidden"),j(!F),I(Z),clearTimeout(T.current),clearTimeout(x.current),F?(L=!0,T.current=setTimeout(()=>{hn(En),jn(fr),j(L),w==null||w(En)},50),x.current=setTimeout(()=>{j(!1),I(X),Yo(h.current,En,d),v==null||v(En)},ln)):(w==null||w(pn),T.current=setTimeout(()=>{hn(En),jn(fr),j(!1),I(X),g!=="auto"&&Yo(h.current,pn,d),v==null||v(pn)},ln))}return f.current=g,()=>{clearTimeout(T.current),clearTimeout(x.current)}},[g]);const H=Object.assign(Object.assign({},S),{height:W,overflow:xn||(S==null?void 0:S.overflow)});O&&o&&(H.transition=`height ${R}ms ${y} ${N}ms`,S!=null&&S.transition&&(H.transition=`${S.transition}, ${H.transition}`),H.WebkitTransition=H.transition);const Q={};e&&(Q.transition=`opacity ${R}ms ${y} ${N}ms`,Q.WebkitTransition=Q.transition,W===0&&(Q.opacity=0));const kn=typeof p["aria-hidden"]<"u"?p["aria-hidden"]:g===0;return _i.createElement("div",Object.assign({},p,{"aria-hidden":kn,className:`${C} ${s}`,style:H,ref:r}),_i.createElement("div",{className:l,style:Q,ref:cn=>{h.current=cn,E&&(E.current=cn)}},a))});function vg(){return i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})}function $n({title:n,children:r}){const[e,t]=K.useState(!1),o=e?"auto":0,a=rr(pi.button,e&&pi.open),s=()=>t(!e);return i.jsxs("div",{className:pi.accordion,children:[i.jsxs("button",{className:a,onClick:s,children:[i.jsx("span",{children:n}),i.jsx(vg,{})]}),i.jsx(mg,{animateOpacity:!0,height:o,duration:400,children:i.jsx("div",{className:pi.content,children:r})})]})}const yg="_linkWrapper_1logo_1",xg="_link_1logo_1",tu={linkWrapper:yg,link:xg},_g="_tooltip_1edpy_1",wg="_exit_1edpy_13",Sg="_text_1edpy_27",Qo={tooltip:_g,"tooltip-enter":"_tooltip-enter_1edpy_1",exit:wg,"tooltip-exit":"_tooltip-exit_1edpy_1",text:Sg};function jg({anchorRef:n,content:r,showTooltip:e}){const t=K.useRef(null),[o,a]=K.useState(null),[s,l]=K.useState(!1),u=rr(Qo.tooltip,!e&&Qo.exit),d=()=>l(!1),m=()=>{e||l(!0)};return K.useEffect(()=>{var S;if(!e||!n.current)return;const y=n.current.getBoundingClientRect(),g=((S=t.current)==null?void 0:S.offsetHeight)??0,v=y.left+window.scrollX,w=y.top+window.scrollY-g-4;a({top:w,left:v})},[e]),(e||!s)&&n.current&&jh.createPortal(i.jsx("div",{ref:t,className:u,style:o??{},onAnimationStart:d,onAnimationEnd:m,children:i.jsx("span",{className:Qo.text,children:r})}),document.body)}function z({href:n,description:r}){const e=K.useRef(null),[t,o]=K.useState(!1),a=Ld({selector:n,offset:72});let s;const l=m=>{m.preventDefault(),window.history.replaceState({},"",n),clearTimeout(s),o(!1),a()},u=()=>{s=setTimeout(()=>{o(!0)},700)},d=()=>{clearTimeout(s),o(!1)};return i.jsxs("div",{className:tu.linkWrapper,children:[i.jsx("a",{ref:e,href:n,className:tu.link,onClick:l,role:"button","aria-description":r,onMouseEnter:u,onMouseLeave:d,children:r}),i.jsx(jg,{anchorRef:e,content:r,showTooltip:t})]})}function Tg(){return i.jsxs(i.Fragment,{children:[i.jsxs($n,{title:"Big O",children:[i.jsx(z,{href:"#bigo-chart",description:"Time/Space Complexities"}),i.jsx(z,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),i.jsx(z,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),i.jsxs($n,{title:"Array",children:[i.jsx(z,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),i.jsx(z,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),i.jsx(z,{href:"#array-sliding-window",description:"sliding window"}),i.jsx(z,{href:"#array-prefix-sum",description:"prefix sum"}),i.jsx(z,{href:"#array-string-building",description:"efficient string building"})]}),i.jsxs($n,{title:"Hash Map",children:[i.jsx(z,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),i.jsx(z,{href:"#hashmap-sliding-window",description:"sliding window"})]}),i.jsxs($n,{title:"Linked List",children:[i.jsx(z,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),i.jsx(z,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),i.jsxs($n,{title:"Stack",children:[i.jsx(z,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),i.jsx(z,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),i.jsxs($n,{title:"Binary Tree",children:[i.jsx(z,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),i.jsx(z,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),i.jsx(z,{href:"#tree-bfs",description:"BFS"})]}),i.jsxs($n,{title:"Graph",children:[i.jsx(z,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),i.jsx(z,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),i.jsx(z,{href:"#graph-bfs",description:"BFS"}),i.jsx(z,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),i.jsx(z,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),i.jsx(z,{href:"#graph-kahn",description:"Kahn (topological sort)"}),i.jsx(z,{href:"#graph-kruskal",description:"Kruskal (mst)"}),i.jsx(z,{href:"#graph-prim",description:"Prim (mst)"})]}),i.jsx($n,{title:"Heap",children:i.jsx(z,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),i.jsxs($n,{title:"Binary Search",children:[i.jsx(z,{href:"#binarysearch-binary-search",description:"binary search"}),i.jsx(z,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),i.jsx(z,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),i.jsx(z,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),i.jsx(z,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),i.jsx($n,{title:"Backtracking",children:i.jsx(z,{href:"#backtracking-backtracking",description:"backtracking"})}),i.jsxs($n,{title:"Dynamic Programming",children:[i.jsx(z,{href:"#dp-top-down",description:"top-down DP"}),i.jsx(z,{href:"#dp-bottom-up",description:"bottom-up DP"}),i.jsx(z,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),i.jsxs($n,{title:"Bit Manipulation",children:[i.jsx(z,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),i.jsx(z,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),i.jsx(z,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),i.jsx(z,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),i.jsx(z,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),i.jsx(z,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),i.jsx(z,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),i.jsx(z,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),i.jsx(z,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),i.jsxs($n,{title:"Matrix",children:[i.jsx(z,{href:"#matrix-create-copy",description:"create / copy"}),i.jsx(z,{href:"#matrix-diagonals",description:"main / anti diagonals"}),i.jsx(z,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),i.jsxs($n,{title:"Data Structures",children:[i.jsx(z,{href:"#ds-array",description:"array"}),i.jsx(z,{href:"#ds-hash-map",description:"hashmap"}),i.jsx(z,{href:"#ds-linked-list",description:"linked list"}),i.jsx(z,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),i.jsx(z,{href:"#ds-binary-tree",description:"binary tree"}),i.jsx(z,{href:"#ds-binary-search-tree",description:"binary search tree"}),i.jsx(z,{href:"#ds-graph",description:"graph"}),i.jsx(z,{href:"#ds-union-find",description:"union find"}),i.jsx(z,{href:"#ds-union-find-optimized",description:"union find optimized"}),i.jsx(z,{href:"#ds-trie",description:"trie"})]}),i.jsxs($n,{title:"Sorting Algorithms",children:[i.jsx(z,{href:"#sort-bubble",description:"bubble sort"}),i.jsx(z,{href:"#sort-selection",description:"selection sort"}),i.jsx(z,{href:"#sort-insertion",description:"insertion sort"}),i.jsx(z,{href:"#sort-shell",description:"shell sort"}),i.jsx(z,{href:"#sort-merge",description:"mergesort"}),i.jsx(z,{href:"#sort-quick",description:"quicksort"}),i.jsx(z,{href:"#sort-tim",description:"timsort"}),i.jsx(z,{href:"#sort-heap",description:"heapsort"}),i.jsx(z,{href:"#sort-counting",description:"counting sort"}),i.jsx(z,{href:"#sort-bucket",description:"bucket sort"}),i.jsx(z,{href:"#sort-radix",description:"radix sort"}),i.jsx(z,{href:"#sort-cube",description:"cubesort"}),i.jsx(z,{href:"#sort-bogo",description:"bogo sort"}),i.jsx(z,{href:"#sort-pancake",description:"pancake sort"}),i.jsx(z,{href:"#sort-sleep",description:"sleep sort"})]})]})}function bg({hamburgerButtonRef:n}){const r=K.useRef(null),{isSidebarOpen:e,showSidebar:t,hideSidebar:o}=Fs(),[a,s]=K.useState(!1),l=rr(fi.sidebar,!e&&fi.exit,!e&&a&&fi.hide),u=v=>{v&&e?o():!v&&!e&&t()},d=Cd.useMediaQuery({maxWidth:768},void 0,u),m=()=>{d&&e&&o()},y=()=>s(!1),g=()=>{e||s(!0)};return xo([r,n],m),i.jsx("nav",{ref:r,className:l,onAnimationStart:y,onAnimationEndCapture:g,children:i.jsx("div",{className:fi.scrollContainer,children:i.jsx(Tg,{})})})}function kg(){const n=K.useRef(null);return i.jsxs("div",{id:"AppBar",children:[i.jsx(tg,{forwardedRef:n}),i.jsx(bg,{hamburgerButtonRef:n})]})}const Eg="_main_1p6ym_1",Ng="_sidebarHidden_1p6ym_11",iu={main:Eg,sidebarHidden:Ng},Og="_container_1htmy_1",Ag="_sectionHeader_1htmy_7",un={container:Og,sectionHeader:Ag},Cg="_container_5c21h_1",Lg="_label_5c21h_13",Pg="_tableWrapper_5c21h_21",Mg="_red_5c21h_30",Rg="_oliveGreen_5c21h_34",Ig="_green_5c21h_38",Dg="_orange_5c21h_42",Bg="_yellow_5c21h_46",zg="_gray_5c21h_50",_={container:Cg,label:Lg,tableWrapper:Pg,red:Mg,oliveGreen:Rg,green:Ig,orange:Dg,yellow:Bg,gray:zg};function Fg(){const n={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return i.jsx("section",{id:"bigo-chart",children:i.jsxs("div",{className:_.container,children:[i.jsx("h3",{children:"Big-O Complexity Chart"}),i.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[i.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:n.red}),i.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:n.orange}),i.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:n.yellow}),i.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:n.oliveGreen}),i.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:n.green}),i.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),i.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),i.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),i.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),i.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),i.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),i.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),i.jsx("text",{className:_.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),i.jsx("text",{className:_.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function Ug(){const n=K.useRef(null),[r,e]=K.useState(""),t=()=>{if(r){const a=n.current,s=a==null?void 0:a.querySelector(`tr[data-row-number="${r}"]`);s==null||s.removeAttribute("focused")}},o=a=>{const s=a.currentTarget,l=s.getAttribute("data-row-number")??"";t(),l===r?e(""):(s.setAttribute("focused",""),e(l))};return xo(n,t),i.jsx("section",{id:"bigo-data-structure-operations-table",children:i.jsxs("div",{className:_.container,children:[i.jsx("h3",{children:"Data Structure Operations"}),i.jsx("div",{className:_.tableWrapper,children:i.jsx("table",{ref:n,children:i.jsxs("tbody",{children:[i.jsxs("tr",{onClick:o,"data-row-number":"1",children:[i.jsx("th",{children:"Data Structure"}),i.jsx("th",{colSpan:8,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"2",children:[i.jsx("th",{}),i.jsx("th",{colSpan:4,children:"Average"}),i.jsx("th",{colSpan:4,children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"3",children:[i.jsx("th",{}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{children:"Access"}),i.jsx("th",{children:"Search"}),i.jsx("th",{children:"Insertion"}),i.jsx("th",{children:"Deletion"}),i.jsx("th",{})]}),i.jsxs("tr",{onClick:o,"data-row-number":"4",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"5",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"6",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"7",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"8",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.yellow,children:"Θ(n)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.green,children:"O(1)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"9",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.orange,children:"O(n log(n))"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"10",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.green,children:"Θ(1)"}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"11",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"12",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"13",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"14",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"15",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.gray,children:"N/A"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"16",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"17",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.oliveGreen,children:"Θ(log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]})]})})})]})})}function Hg(){const n=K.useRef(null),[r,e]=K.useState(""),t=()=>{if(r){const a=n.current,s=a==null?void 0:a.querySelector(`tr[data-row-number="${r}"]`);s==null||s.removeAttribute("focused")}},o=a=>{const s=a.currentTarget,l=s.getAttribute("data-row-number")??"";t(),l===r?e(""):(s.setAttribute("focused",""),e(l))};return xo(n,t),i.jsx("section",{id:"bigo-sorting-algorithms-table",children:i.jsxs("div",{className:_.container,children:[i.jsx("h3",{children:"Array Sorting Algorithms"}),i.jsx("div",{className:_.tableWrapper,children:i.jsx("table",{ref:n,children:i.jsxs("tbody",{children:[i.jsxs("tr",{onClick:o,"data-row-number":"1",children:[i.jsx("th",{children:"Algorithm"}),i.jsx("th",{colSpan:3,children:"Time Complexity"}),i.jsx("th",{children:"Space Complexity"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"2",children:[i.jsx("th",{}),i.jsx("th",{children:"Best"}),i.jsx("th",{children:"Average"}),i.jsx("th",{children:"Worst"}),i.jsx("th",{children:"Worst"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"3",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),i.jsx("td",{className:_.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.oliveGreen,children:"O(log(n))"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"4",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),i.jsx("td",{className:_.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.orange,children:"O(n log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"5",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),i.jsx("td",{className:_.yellow,children:"Ω(n)"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.orange,children:"O(n log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"6",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),i.jsx("td",{className:_.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.orange,children:"O(n log(n))"}),i.jsx("td",{className:_.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"7",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),i.jsx("td",{className:_.yellow,children:"Ω(n)"}),i.jsx("td",{className:_.red,children:"Θ(n^2)"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"8",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),i.jsx("td",{className:_.yellow,children:"Ω(n)"}),i.jsx("td",{className:_.red,children:"Θ(n^2)"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"9",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),i.jsx("td",{className:_.red,children:"Ω(n^2)"}),i.jsx("td",{className:_.red,children:"Θ(n^2)"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"10",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),i.jsx("td",{className:_.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"11",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),i.jsx("td",{className:_.orange,children:"Ω(n log(n))"}),i.jsx("td",{className:_.red,children:"Θ(n(log(n))^2)"}),i.jsx("td",{className:_.red,children:"O(n(log(n))^2)"}),i.jsx("td",{className:_.green,children:"O(1)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"12",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),i.jsx("td",{className:_.green,children:"Ω(n+k)"}),i.jsx("td",{className:_.green,children:"Θ(n+k)"}),i.jsx("td",{className:_.red,children:"O(n^2)"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"13",children:[i.jsx("td",{children:i.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),i.jsx("td",{className:_.green,children:"Ω(nk)"}),i.jsx("td",{className:_.green,children:"Θ(nk)"}),i.jsx("td",{className:_.green,children:"O(nk)"}),i.jsx("td",{className:_.yellow,children:"O(n+k)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"14",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),i.jsx("td",{className:_.green,children:"Ω(n+k)"}),i.jsx("td",{className:_.green,children:"Θ(n+k)"}),i.jsx("td",{className:_.green,children:"O(n+k)"}),i.jsx("td",{className:_.yellow,children:"O(k)"})]}),i.jsxs("tr",{onClick:o,"data-row-number":"15",children:[i.jsx("td",{children:i.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),i.jsx("td",{className:_.yellow,children:"Ω(n)"}),i.jsx("td",{className:_.orange,children:"Θ(n log(n))"}),i.jsx("td",{className:_.orange,children:"O(n log(n))"}),i.jsx("td",{className:_.yellow,children:"O(n)"})]})]})})})]})})}function $g(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Big O"}),i.jsx(Fg,{}),i.jsx(Ug,{}),i.jsx(Hg,{})]})}const Wg="_container_12crg_1",Vg="_buttonContainer_12crg_12",Kg="_tabButtonContainer_12crg_18",Gg="_tabButton_12crg_18",hi={container:Wg,buttonContainer:Vg,tabButtonContainer:Kg,tabButton:Gg},Jg="_code_4wy3e_1",Yg="_line_4wy3e_13",ou={code:Jg,line:Yg};function Qg(n){const r=n.regex,e=n.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),t="decltype\\(auto\\)",o="[a-zA-Z_]\\w*::",s="(?!struct)("+t+"|"+r.optional(o)+"[a-zA-Z_]\\w*"+r.optional("<[^<>]+>")+")",l={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},d={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[n.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},n.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},m={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},y={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},n.inherit(d,{className:"string"}),{className:"string",begin:/<.*?>/},e,n.C_BLOCK_COMMENT_MODE]},g={className:"title",begin:r.optional(o)+n.IDENT_RE,relevance:0},v=r.optional(o)+n.IDENT_RE+"\\s*\\(",w=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],S=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],E=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],p=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],x={type:S,keyword:w,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:E},T={className:"function.dispatch",relevance:0,keywords:{_hint:p},begin:r.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,n.IDENT_RE,r.lookahead(/(<[^<>]+>|)\s*\(/))},b=[T,y,l,e,n.C_BLOCK_COMMENT_MODE,m,d],k={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:x,contains:b.concat([{begin:/\(/,end:/\)/,keywords:x,contains:b.concat(["self"]),relevance:0}]),relevance:0},P={className:"function",begin:"("+s+"[\\*&\\s]+)+"+v,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:x,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:t,keywords:x,relevance:0},{begin:v,returnBegin:!0,contains:[g],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[d,m]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[e,n.C_BLOCK_COMMENT_MODE,d,m,l,{begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:["self",e,n.C_BLOCK_COMMENT_MODE,d,m,l]}]},l,e,n.C_BLOCK_COMMENT_MODE,y]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:x,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(k,P,T,b,[y,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:x,contains:["self",l]},{begin:n.IDENT_RE+"::",keywords:x},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function Pd(n){return n instanceof Map?n.clear=n.delete=n.set=function(){throw new Error("map is read-only")}:n instanceof Set&&(n.add=n.clear=n.delete=function(){throw new Error("set is read-only")}),Object.freeze(n),Object.getOwnPropertyNames(n).forEach(r=>{const e=n[r],t=typeof e;(t==="object"||t==="function")&&!Object.isFrozen(e)&&Pd(e)}),n}class au{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Md(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Vr(n,...r){const e=Object.create(null);for(const t in n)e[t]=n[t];return r.forEach(function(t){for(const o in t)e[o]=t[o]}),e}const qg="</span>",su=n=>!!n.scope,Xg=(n,{prefix:r})=>{if(n.startsWith("language:"))return n.replace("language:","language-");if(n.includes(".")){const e=n.split(".");return[`${r}${e.shift()}`,...e.map((t,o)=>`${t}${"_".repeat(o+1)}`)].join(" ")}return`${r}${n}`};class Zg{constructor(r,e){this.buffer="",this.classPrefix=e.classPrefix,r.walk(this)}addText(r){this.buffer+=Md(r)}openNode(r){if(!su(r))return;const e=Xg(r.scope,{prefix:this.classPrefix});this.span(e)}closeNode(r){su(r)&&(this.buffer+=qg)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const lu=(n={})=>{const r={children:[]};return Object.assign(r,n),r};class Us{constructor(){this.rootNode=lu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const e=lu({scope:r});this.add(e),this.stack.push(e)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,e){return typeof e=="string"?r.addText(e):e.children&&(r.openNode(e),e.children.forEach(t=>this._walk(r,t)),r.closeNode(e)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(e=>typeof e=="string")?r.children=[r.children.join("")]:r.children.forEach(e=>{Us._collapse(e)}))}}class nm extends Us{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,e){const t=r.root;e&&(t.scope=`language:${e}`),this.add(t)}toHTML(){return new Zg(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Ft(n){return n?typeof n=="string"?n:n.source:null}function Rd(n){return Se("(?=",n,")")}function rm(n){return Se("(?:",n,")*")}function em(n){return Se("(?:",n,")?")}function Se(...n){return n.map(e=>Ft(e)).join("")}function tm(n){const r=n[n.length-1];return typeof r=="object"&&r.constructor===Object?(n.splice(n.length-1,1),r):{}}function Hs(...n){return"("+(tm(n).capture?"":"?:")+n.map(t=>Ft(t)).join("|")+")"}function Id(n){return new RegExp(n.toString()+"|").exec("").length-1}function im(n,r){const e=n&&n.exec(r);return e&&e.index===0}const om=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function $s(n,{joinWith:r}){let e=0;return n.map(t=>{e+=1;const o=e;let a=Ft(t),s="";for(;a.length>0;){const l=om.exec(a);if(!l){s+=a;break}s+=a.substring(0,l.index),a=a.substring(l.index+l[0].length),l[0][0]==="\\"&&l[1]?s+="\\"+String(Number(l[1])+o):(s+=l[0],l[0]==="("&&e++)}return s}).map(t=>`(${t})`).join(r)}const am=/\b\B/,Dd="[a-zA-Z]\\w*",Ws="[a-zA-Z_]\\w*",Bd="\\b\\d+(\\.\\d+)?",zd="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Fd="\\b(0b[01]+)",sm="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",lm=(n={})=>{const r=/^#![ ]*\//;return n.binary&&(n.begin=Se(r,/.*\b/,n.binary,/\b.*/)),Vr({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(e,t)=>{e.index!==0&&t.ignoreMatch()}},n)},Ut={begin:"\\\\[\\s\\S]",relevance:0},um={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ut]},cm={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ut]},dm={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_o=function(n,r,e={}){const t=Vr({scope:"comment",begin:n,end:r,contains:[]},e);t.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=Hs("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return t.contains.push({begin:Se(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),t},fm=_o("//","$"),pm=_o("/\\*","\\*/"),hm=_o("#","$"),gm={scope:"number",begin:Bd,relevance:0},mm={scope:"number",begin:zd,relevance:0},vm={scope:"number",begin:Fd,relevance:0},ym={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ut,{begin:/\[/,end:/\]/,relevance:0,contains:[Ut]}]},xm={scope:"title",begin:Dd,relevance:0},_m={scope:"title",begin:Ws,relevance:0},wm={begin:"\\.\\s*"+Ws,relevance:0},Sm=function(n){return Object.assign(n,{"on:begin":(r,e)=>{e.data._beginMatch=r[1]},"on:end":(r,e)=>{e.data._beginMatch!==r[1]&&e.ignoreMatch()}})};var gi=Object.freeze({__proto__:null,APOS_STRING_MODE:um,BACKSLASH_ESCAPE:Ut,BINARY_NUMBER_MODE:vm,BINARY_NUMBER_RE:Fd,COMMENT:_o,C_BLOCK_COMMENT_MODE:pm,C_LINE_COMMENT_MODE:fm,C_NUMBER_MODE:mm,C_NUMBER_RE:zd,END_SAME_AS_BEGIN:Sm,HASH_COMMENT_MODE:hm,IDENT_RE:Dd,MATCH_NOTHING_RE:am,METHOD_GUARD:wm,NUMBER_MODE:gm,NUMBER_RE:Bd,PHRASAL_WORDS_MODE:dm,QUOTE_STRING_MODE:cm,REGEXP_MODE:ym,RE_STARTERS_RE:sm,SHEBANG:lm,TITLE_MODE:xm,UNDERSCORE_IDENT_RE:Ws,UNDERSCORE_TITLE_MODE:_m});function jm(n,r){n.input[n.index-1]==="."&&r.ignoreMatch()}function Tm(n,r){n.className!==void 0&&(n.scope=n.className,delete n.className)}function bm(n,r){r&&n.beginKeywords&&(n.begin="\\b("+n.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",n.__beforeBegin=jm,n.keywords=n.keywords||n.beginKeywords,delete n.beginKeywords,n.relevance===void 0&&(n.relevance=0))}function km(n,r){Array.isArray(n.illegal)&&(n.illegal=Hs(...n.illegal))}function Em(n,r){if(n.match){if(n.begin||n.end)throw new Error("begin & end are not supported with match");n.begin=n.match,delete n.match}}function Nm(n,r){n.relevance===void 0&&(n.relevance=1)}const Om=(n,r)=>{if(!n.beforeMatch)return;if(n.starts)throw new Error("beforeMatch cannot be used with starts");const e=Object.assign({},n);Object.keys(n).forEach(t=>{delete n[t]}),n.keywords=e.keywords,n.begin=Se(e.beforeMatch,Rd(e.begin)),n.starts={relevance:0,contains:[Object.assign(e,{endsParent:!0})]},n.relevance=0,delete e.beforeMatch},Am=["of","and","for","in","not","or","if","then","parent","list","value"],Cm="keyword";function Ud(n,r,e=Cm){const t=Object.create(null);return typeof n=="string"?o(e,n.split(" ")):Array.isArray(n)?o(e,n):Object.keys(n).forEach(function(a){Object.assign(t,Ud(n[a],r,a))}),t;function o(a,s){r&&(s=s.map(l=>l.toLowerCase())),s.forEach(function(l){const u=l.split("|");t[u[0]]=[a,Lm(u[0],u[1])]})}}function Lm(n,r){return r?Number(r):Pm(n)?0:1}function Pm(n){return Am.includes(n.toLowerCase())}const uu={},he=n=>{console.error(n)},cu=(n,...r)=>{console.log(`WARN: ${n}`,...r)},Te=(n,r)=>{uu[`${n}/${r}`]||(console.log(`Deprecated as of ${n}. ${r}`),uu[`${n}/${r}`]=!0)},ro=new Error;function Hd(n,r,{key:e}){let t=0;const o=n[e],a={},s={};for(let l=1;l<=r.length;l++)s[l+t]=o[l],a[l+t]=!0,t+=Id(r[l-1]);n[e]=s,n[e]._emit=a,n[e]._multi=!0}function Mm(n){if(Array.isArray(n.begin)){if(n.skip||n.excludeBegin||n.returnBegin)throw he("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),ro;if(typeof n.beginScope!="object"||n.beginScope===null)throw he("beginScope must be object"),ro;Hd(n,n.begin,{key:"beginScope"}),n.begin=$s(n.begin,{joinWith:""})}}function Rm(n){if(Array.isArray(n.end)){if(n.skip||n.excludeEnd||n.returnEnd)throw he("skip, excludeEnd, returnEnd not compatible with endScope: {}"),ro;if(typeof n.endScope!="object"||n.endScope===null)throw he("endScope must be object"),ro;Hd(n,n.end,{key:"endScope"}),n.end=$s(n.end,{joinWith:""})}}function Im(n){n.scope&&typeof n.scope=="object"&&n.scope!==null&&(n.beginScope=n.scope,delete n.scope)}function Dm(n){Im(n),typeof n.beginScope=="string"&&(n.beginScope={_wrap:n.beginScope}),typeof n.endScope=="string"&&(n.endScope={_wrap:n.endScope}),Mm(n),Rm(n)}function Bm(n){function r(s,l){return new RegExp(Ft(s),"m"+(n.case_insensitive?"i":"")+(n.unicodeRegex?"u":"")+(l?"g":""))}class e{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(l,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,l]),this.matchAt+=Id(l)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const l=this.regexes.map(u=>u[1]);this.matcherRe=r($s(l,{joinWith:"|"}),!0),this.lastIndex=0}exec(l){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(l);if(!u)return null;const d=u.findIndex((y,g)=>g>0&&y!==void 0),m=this.matchIndexes[d];return u.splice(0,d),Object.assign(u,m)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(l){if(this.multiRegexes[l])return this.multiRegexes[l];const u=new e;return this.rules.slice(l).forEach(([d,m])=>u.addRule(d,m)),u.compile(),this.multiRegexes[l]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(l,u){this.rules.push([l,u]),u.type==="begin"&&this.count++}exec(l){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let d=u.exec(l);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const m=this.getMatcher(0);m.lastIndex=this.lastIndex+1,d=m.exec(l)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function o(s){const l=new t;return s.contains.forEach(u=>l.addRule(u.begin,{rule:u,type:"begin"})),s.terminatorEnd&&l.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&l.addRule(s.illegal,{type:"illegal"}),l}function a(s,l){const u=s;if(s.isCompiled)return u;[Tm,Em,Dm,Om].forEach(m=>m(s,l)),n.compilerExtensions.forEach(m=>m(s,l)),s.__beforeBegin=null,[bm,km,Nm].forEach(m=>m(s,l)),s.isCompiled=!0;let d=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),d=s.keywords.$pattern,delete s.keywords.$pattern),d=d||/\w+/,s.keywords&&(s.keywords=Ud(s.keywords,n.case_insensitive)),u.keywordPatternRe=r(d,!0),l&&(s.begin||(s.begin=/\B|\b/),u.beginRe=r(u.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(u.endRe=r(u.end)),u.terminatorEnd=Ft(u.end)||"",s.endsWithParent&&l.terminatorEnd&&(u.terminatorEnd+=(s.end?"|":"")+l.terminatorEnd)),s.illegal&&(u.illegalRe=r(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(m){return zm(m==="self"?s:m)})),s.contains.forEach(function(m){a(m,u)}),s.starts&&a(s.starts,l),u.matcher=o(u),u}if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=Vr(n.classNameAliases||{}),a(n)}function $d(n){return n?n.endsWithParent||$d(n.starts):!1}function zm(n){return n.variants&&!n.cachedVariants&&(n.cachedVariants=n.variants.map(function(r){return Vr(n,{variants:null},r)})),n.cachedVariants?n.cachedVariants:$d(n)?Vr(n,{starts:n.starts?Vr(n.starts):null}):Object.isFrozen(n)?Vr(n):n}var Fm="11.9.0";class Um extends Error{constructor(r,e){super(r),this.name="HTMLInjectionError",this.html=e}}const qo=Md,du=Vr,fu=Symbol("nomatch"),Hm=7,Wd=function(n){const r=Object.create(null),e=Object.create(null),t=[];let o=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:nm};function u(O){return l.noHighlightRe.test(O)}function d(O){let j=O.className+" ";j+=O.parentNode?O.parentNode.className:"";const C=l.languageDetectRe.exec(j);if(C){const I=N(C[1]);return I||(cu(a.replace("{}",C[1])),cu("Falling back to no-highlight mode for this block.",O)),I?C[1]:"no-highlight"}return j.split(/\s+/).find(I=>u(I)||N(I))}function m(O,j,C){let I="",H="";typeof j=="object"?(I=O,C=j.ignoreIllegals,H=j.language):(Te("10.7.0","highlight(lang, code, ...args) has been deprecated."),Te("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),H=O,I=j),C===void 0&&(C=!0);const Q={code:I,language:H};xn("before:highlight",Q);const bn=Q.result?Q.result:y(Q.language,Q.code,C);return bn.code=Q.code,xn("after:highlight",bn),bn}function y(O,j,C,I){const H=Object.create(null);function Q(B,$){return B.keywords[$]}function bn(){if(!D.keywords){M.addText(q);return}let B=0;D.keywordPatternRe.lastIndex=0;let $=D.keywordPatternRe.exec(q),nn="";for(;$;){nn+=q.substring(B,$.index);const dn=J.case_insensitive?$[0].toLowerCase():$[0],Bn=Q(D,dn);if(Bn){const[Er,Yd]=Bn;if(M.addText(nn),nn="",H[dn]=(H[dn]||0)+1,H[dn]<=Hm&&(Dn+=Yd),Er.startsWith("_"))nn+=$[0];else{const Qd=J.classNameAliases[Er]||Er;ln($[0],Qd)}}else nn+=$[0];B=D.keywordPatternRe.lastIndex,$=D.keywordPatternRe.exec(q)}nn+=q.substring(B),M.addText(nn)}function kn(){if(q==="")return;let B=null;if(typeof D.subLanguage=="string"){if(!r[D.subLanguage]){M.addText(q);return}B=y(D.subLanguage,q,!0,an[D.subLanguage]),an[D.subLanguage]=B._top}else B=v(q,D.subLanguage.length?D.subLanguage:null);D.relevance>0&&(Dn+=B.relevance),M.__addSublanguage(B._emitter,B.language)}function cn(){D.subLanguage!=null?kn():bn(),q=""}function ln(B,$){B!==""&&(M.startScope($),M.addText(B),M.endScope())}function pn(B,$){let nn=1;const dn=$.length-1;for(;nn<=dn;){if(!B._emit[nn]){nn++;continue}const Bn=J.classNameAliases[B[nn]]||B[nn],Er=$[nn];Bn?ln(Er,Bn):(q=Er,bn(),q=""),nn++}}function En(B,$){return B.scope&&typeof B.scope=="string"&&M.openNode(J.classNameAliases[B.scope]||B.scope),B.beginScope&&(B.beginScope._wrap?(ln(q,J.classNameAliases[B.beginScope._wrap]||B.beginScope._wrap),q=""):B.beginScope._multi&&(pn(B.beginScope,$),q="")),D=Object.create(B,{parent:{value:D}}),D}function fr(B,$,nn){let dn=im(B.endRe,nn);if(dn){if(B["on:end"]){const Bn=new au(B);B["on:end"]($,Bn),Bn.isMatchIgnored&&(dn=!1)}if(dn){for(;B.endsParent&&B.parent;)B=B.parent;return B}}if(B.endsWithParent)return fr(B.parent,$,nn)}function L(B){return D.matcher.regexIndex===0?(q+=B[0],1):(So=!0,0)}function F(B){const $=B[0],nn=B.rule,dn=new au(nn),Bn=[nn.__beforeBegin,nn["on:begin"]];for(const Er of Bn)if(Er&&(Er(B,dn),dn.isMatchIgnored))return L($);return nn.skip?q+=$:(nn.excludeBegin&&(q+=$),cn(),!nn.returnBegin&&!nn.excludeBegin&&(q=$)),En(nn,B),nn.returnBegin?0:$.length}function Z(B){const $=B[0],nn=j.substring(B.index),dn=fr(D,B,nn);if(!dn)return fu;const Bn=D;D.endScope&&D.endScope._wrap?(cn(),ln($,D.endScope._wrap)):D.endScope&&D.endScope._multi?(cn(),pn(D.endScope,B)):Bn.skip?q+=$:(Bn.returnEnd||Bn.excludeEnd||(q+=$),cn(),Bn.excludeEnd&&(q=$));do D.scope&&M.closeNode(),!D.skip&&!D.subLanguage&&(Dn+=D.relevance),D=D.parent;while(D!==dn.parent);return dn.starts&&En(dn.starts,B),Bn.returnEnd?0:$.length}function X(){const B=[];for(let $=D;$!==J;$=$.parent)$.scope&&B.unshift($.scope);B.forEach($=>M.openNode($))}let Y={};function on(B,$){const nn=$&&$[0];if(q+=B,nn==null)return cn(),0;if(Y.type==="begin"&&$.type==="end"&&Y.index===$.index&&nn===""){if(q+=j.slice($.index,$.index+1),!o){const dn=new Error(`0 width match regex (${O})`);throw dn.languageName=O,dn.badRule=Y.rule,dn}return 1}if(Y=$,$.type==="begin")return F($);if($.type==="illegal"&&!C){const dn=new Error('Illegal lexeme "'+nn+'" for mode "'+(D.scope||"<unnamed>")+'"');throw dn.mode=D,dn}else if($.type==="end"){const dn=Z($);if(dn!==fu)return dn}if($.type==="illegal"&&nn==="")return 1;if(wo>1e5&&wo>$.index*3)throw new Error("potential infinite loop, way more iterations than matches");return q+=nn,nn.length}const J=N(O);if(!J)throw he(a.replace("{}",O)),new Error('Unknown language: "'+O+'"');const rn=Bm(J);let en="",D=I||rn;const an={},M=new l.__emitter(l);X();let q="",Dn=0,wr=0,wo=0,So=!1;try{if(J.__emitTokens)J.__emitTokens(j,M);else{for(D.matcher.considerAll();;){wo++,So?So=!1:D.matcher.considerAll(),D.matcher.lastIndex=wr;const B=D.matcher.exec(j);if(!B)break;const $=j.substring(wr,B.index),nn=on($,B);wr=B.index+nn}on(j.substring(wr))}return M.finalize(),en=M.toHTML(),{language:O,value:en,relevance:Dn,illegal:!1,_emitter:M,_top:D}}catch(B){if(B.message&&B.message.includes("Illegal"))return{language:O,value:qo(j),illegal:!0,relevance:0,_illegalBy:{message:B.message,index:wr,context:j.slice(wr-100,wr+100),mode:B.mode,resultSoFar:en},_emitter:M};if(o)return{language:O,value:qo(j),illegal:!1,relevance:0,errorRaised:B,_emitter:M,_top:D};throw B}}function g(O){const j={value:qo(O),illegal:!1,relevance:0,_top:s,_emitter:new l.__emitter(l)};return j._emitter.addText(O),j}function v(O,j){j=j||l.languages||Object.keys(r);const C=g(O),I=j.filter(N).filter(V).map(cn=>y(cn,O,!1));I.unshift(C);const H=I.sort((cn,ln)=>{if(cn.relevance!==ln.relevance)return ln.relevance-cn.relevance;if(cn.language&&ln.language){if(N(cn.language).supersetOf===ln.language)return 1;if(N(ln.language).supersetOf===cn.language)return-1}return 0}),[Q,bn]=H,kn=Q;return kn.secondBest=bn,kn}function w(O,j,C){const I=j&&e[j]||C;O.classList.add("hljs"),O.classList.add(`language-${I}`)}function S(O){let j=null;const C=d(O);if(u(C))return;if(xn("before:highlightElement",{el:O,language:C}),O.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);return}if(O.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),l.throwUnescapedHTML))throw new Um("One of your code blocks includes unescaped HTML.",O.innerHTML);j=O;const I=j.textContent,H=C?m(I,{language:C,ignoreIllegals:!0}):v(I);O.innerHTML=H.value,O.dataset.highlighted="yes",w(O,C,H.language),O.result={language:H.language,re:H.relevance,relevance:H.relevance},H.secondBest&&(O.secondBest={language:H.secondBest.language,relevance:H.secondBest.relevance}),xn("after:highlightElement",{el:O,result:H,text:I})}function E(O){l=du(l,O)}const p=()=>{x(),Te("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function f(){x(),Te("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let h=!1;function x(){if(document.readyState==="loading"){h=!0;return}document.querySelectorAll(l.cssSelector).forEach(S)}function T(){h&&x()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",T,!1);function b(O,j){let C=null;try{C=j(n)}catch(I){if(he("Language definition for '{}' could not be registered.".replace("{}",O)),o)he(I);else throw I;C=s}C.name||(C.name=O),r[O]=C,C.rawDefinition=j.bind(null,n),C.aliases&&R(C.aliases,{languageName:O})}function k(O){delete r[O];for(const j of Object.keys(e))e[j]===O&&delete e[j]}function P(){return Object.keys(r)}function N(O){return O=(O||"").toLowerCase(),r[O]||r[e[O]]}function R(O,{languageName:j}){typeof O=="string"&&(O=[O]),O.forEach(C=>{e[C.toLowerCase()]=j})}function V(O){const j=N(O);return j&&!j.disableAutodetect}function G(O){O["before:highlightBlock"]&&!O["before:highlightElement"]&&(O["before:highlightElement"]=j=>{O["before:highlightBlock"](Object.assign({block:j.el},j))}),O["after:highlightBlock"]&&!O["after:highlightElement"]&&(O["after:highlightElement"]=j=>{O["after:highlightBlock"](Object.assign({block:j.el},j))})}function W(O){G(O),t.push(O)}function hn(O){const j=t.indexOf(O);j!==-1&&t.splice(j,1)}function xn(O,j){const C=O;t.forEach(function(I){I[C]&&I[C](j)})}function jn(O){return Te("10.7.0","highlightBlock will be removed entirely in v12.0"),Te("10.7.0","Please use highlightElement now."),S(O)}Object.assign(n,{highlight:m,highlightAuto:v,highlightAll:x,highlightElement:S,highlightBlock:jn,configure:E,initHighlighting:p,initHighlightingOnLoad:f,registerLanguage:b,unregisterLanguage:k,listLanguages:P,getLanguage:N,registerAliases:R,autoDetection:V,inherit:du,addPlugin:W,removePlugin:hn}),n.debugMode=function(){o=!1},n.safeMode=function(){o=!0},n.versionString=Fm,n.regex={concat:Se,lookahead:Rd,either:Hs,optional:em,anyNumberOfTimes:rm};for(const O in gi)typeof gi[O]=="object"&&Pd(gi[O]);return Object.assign(n,gi),n},qe=Wd({});qe.newInstance=()=>Wd({});var $m=qe;qe.HighlightJS=qe;qe.default=qe;const Gt=Va($m);var be="[0-9](_*[0-9])*",mi=`\\.(${be})`,vi="[0-9a-fA-F](_*[0-9a-fA-F])*",pu={className:"number",variants:[{begin:`(\\b(${be})((${mi})|\\.)?|(${mi}))[eE][+-]?(${be})[fFdD]?\\b`},{begin:`\\b(${be})((${mi})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${mi})[fFdD]?\\b`},{begin:`\\b(${be})[fFdD]\\b`},{begin:`\\b0[xX]((${vi})\\.?|(${vi})?\\.(${vi}))[pP][+-]?(${be})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${vi})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Vd(n,r,e){return e===-1?"":n.replace(r,t=>Vd(n,r,e-1))}function Wm(n){const r=n.regex,e="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",t=e+Vd("(?:<"+e+"~~~(?:\\s*,\\s*"+e+"~~~)*>)?",/~~~/g,2),u={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},d={className:"meta",begin:"@"+e,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},m={className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,contains:[n.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:u,illegal:/<\/|#/,contains:[n.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[n.BACKSLASH_ESCAPE]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,e],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[r.concat(/(?!else)/,e),/\s+/,e,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,e],className:{1:"keyword",3:"title.class"},contains:[m,n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+t+"\\s+)",n.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:u,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,contains:[d,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,pu,n.C_BLOCK_COMMENT_MODE]},n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE]},pu,d]}}const hu="[A-Za-z$_][0-9A-Za-z$_]*",Vm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Km=["true","false","null","undefined","NaN","Infinity"],Kd=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Gd=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Jd=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Gm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Jm=[].concat(Jd,Kd,Gd);function Ym(n){const r=n.regex,e=(j,{after:C})=>{const I="</"+j[0].slice(1);return j.input.indexOf(I,C)!==-1},t=hu,o={begin:"<>",end:"</>"},a=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(j,C)=>{const I=j[0].length+j.index,H=j.input[I];if(H==="<"||H===","){C.ignoreMatch();return}H===">"&&(e(j,{after:I})||C.ignoreMatch());let Q;const bn=j.input.substring(I);if(Q=bn.match(/^\s*=/)){C.ignoreMatch();return}if((Q=bn.match(/^\s+extends\s+/))&&Q.index===0){C.ignoreMatch();return}}},l={$pattern:hu,keyword:Vm,literal:Km,built_in:Jm,"variable.language":Gm},u="[0-9](_?[0-9])*",d=`\\.(${u})`,m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${m})((${d})|\\.)?|(${d}))[eE][+-]?(${u})\\b`},{begin:`\\b(${m})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},g={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},v={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"xml"}},w={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"css"}},S={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[n.BACKSLASH_ESCAPE,g],subLanguage:"graphql"}},E={className:"string",begin:"`",end:"`",contains:[n.BACKSLASH_ESCAPE,g]},f={className:"comment",variants:[n.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),n.C_BLOCK_COMMENT_MODE,n.C_LINE_COMMENT_MODE]},h=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,v,w,S,E,{match:/\$\d+/},y];g.contains=h.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(h)});const x=[].concat(f,g.contains),T=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),b={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:T},k={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,r.concat(t,"(",r.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:r.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Kd,...Gd]}},N={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},R={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[b],illegal:/%/},V={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function G(j){return r.concat("(?!",j.join("|"),")")}const W={match:r.concat(/\b/,G([...Jd,"super","import"]),t,r.lookahead(/\(/)),className:"title.function",relevance:0},hn={begin:r.concat(/\./,r.lookahead(r.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},xn={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},b]},jn="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+n.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,r.lookahead(jn)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[b]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:T,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[n.SHEBANG({label:"shebang",binary:"node",relevance:5}),N,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,v,w,S,E,f,{match:/\$\d+/},y,P,{className:"attr",begin:t+r.lookahead(":"),relevance:0},O,{begin:"("+n.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[f,n.REGEXP_MODE,{className:"function",begin:jn,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:T}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:o.begin,end:o.end},{match:a},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},R,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+n.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[b,n.inherit(n.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},hn,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[b]},W,V,k,xn,{match:/\$[(.]/}]}}function Qm(n){const r=n.regex,e=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,a=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],s=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],l=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],u=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...s],d=["__debug__","Ellipsis","False","None","NotImplemented","True",...l],m=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...a],y={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:u,literal:d,type:m},g={className:"meta",begin:/^(>>>|\.\.\.) /},v={className:"subst",begin:/\{/,end:/\}/,keywords:y,illegal:/#/},w={begin:/\{\{/,relevance:0},S={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g,w,v]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,g,w,v]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,w,v]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,w,v]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},E="[0-9](_?[0-9])*",p=`(\\b(${E}))?\\.(${E})|\\b(${E})\\.`,f=`\\b|${t.join("|")}`,h={className:"number",relevance:0,variants:[{begin:`(\\b(${E})|(${p}))[eE][+-]?(${E})[jJ]?(?=${f})`},{begin:`(${p})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${f})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${f})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${f})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${f})`},{begin:`\\b(${E})[jJ](?=${f})`}]},x={className:"comment",begin:r.lookahead(/# type:/),end:/$/,keywords:y,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},T={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",g,h,S,n.HASH_COMMENT_MODE,{scope:"params.operator",match:o},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return v.contains=[S,h,g],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:y,illegal:/(<\/|\?)|=>/,contains:[g,h,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},S,x,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,e],scope:{1:"keyword.def",3:"title.function"},contains:[T]},{variants:[{match:[/\bclass/,/\s+/,e,/\s*/,/\(\s*/,e,/\s*\)/]},{match:[/\bclass/,/\s+/,e]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[h,T,S]},{scope:"operator",match:o}]}}Gt.registerLanguage("python",Qm);Gt.registerLanguage("javascript",Ym);Gt.registerLanguage("java",Wm);Gt.registerLanguage("cpp",Qg);function qm({code:n,language:r}){const e=K.useRef(null),[t,o]=K.useState(""),[a,s]=K.useState(""),l=rr("hljs",r,ou.code),u=()=>{if(e.current){const S=n.split(`
`).map((E,p)=>{const f=Gt.highlight(E,{language:r}).value;return`<span class=${ou.line} data-line-number=${p+1}>${f}</span>`}).join("");s(S)}},d=()=>{const v=e.current,w=v==null?void 0:v.querySelectorAll("span[data-line-number]");w==null||w.forEach(S=>S.addEventListener("click",g))},m=()=>{const v=e.current,w=v==null?void 0:v.querySelectorAll("span[data-line-number]");w==null||w.forEach(S=>S.removeEventListener("click",g))},y=()=>{const v=e.current,w=v==null?void 0:v.querySelector(`span[data-line-number="${t}"]`);w==null||w.removeAttribute("focused")},g=v=>{const w=v.currentTarget,S=w.getAttribute("data-line-number")??"";y(),S===t?o(""):(w.setAttribute("focused",""),o(S))};return xo(e,y),K.useEffect(()=>(u(),d(),()=>m()),[n,a,t]),i.jsx("pre",{ref:e,children:i.jsx("code",{className:l,dangerouslySetInnerHTML:{__html:a}})})}const Xm="_copyButton_1hjzm_1",Zm="_copySvg_1hjzm_25",n1="_checkSvg_1hjzm_32",r1="_checkSvgPath_1hjzm_37",e1="_draw_1hjzm_1",t1="_enter_1hjzm_48",i1="_exit_1hjzm_52",ae={copyButton:Xm,copySvg:Zm,checkSvg:n1,checkSvgPath:r1,draw:e1,enter:t1,"fade-in":"_fade-in_1hjzm_1",exit:i1,"fade-out":"_fade-out_1hjzm_1"};function o1({onClick:n}){const[r,e]=K.useState("show"),[t,o]=K.useState("hide"),a=rr(ae.copySvg,r==="enter"&&ae.enter,r==="exit"&&ae.exit),s=rr(ae.checkSvg,t==="exit"&&ae.exit),l=rr(ae.checkSvgPath),u=()=>{r==="show"&&t==="hide"&&(e("exit"),n())},d=()=>{r==="enter"&&e("show"),r==="exit"&&(e("hide"),o("show"))},m=()=>{t==="show"&&setTimeout(()=>{o("exit")},500),t==="exit"&&(o("hide"),e("enter"))},y=()=>r!=="hide"&&i.jsx("svg",{className:a,viewBox:"0 0 512 512",onAnimationEnd:d,children:i.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),g=()=>t!=="hide"&&i.jsx("svg",{className:s,viewBox:"0 0 16 16",onAnimationEnd:m,children:i.jsx("path",{className:l,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return i.jsxs("button",{"aria-label":"copy button",className:ae.copyButton,onClick:u,children:[y(),g()]})}function a1(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),i.jsx("stop",{offset:1,stopColor:"#306998"})]}),i.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#FFD43B"}),i.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),i.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),i.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),i.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[i.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),i.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),i.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function s1(){return i.jsxs("svg",{viewBox:"0 0 128 128",children:[i.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),i.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function l1(){return i.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35","enable-background":"new 0 0 306 344.35",children:[i.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),i.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),i.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),i.jsx("g",{children:i.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),i.jsx("g",{children:i.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function u1(){return i.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[i.jsxs("g",{children:[i.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),i.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),i.jsxs("g",{children:[i.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),i.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),i.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),i.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),i.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),i.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}const c1={python:a1,javascript:s1,cpp:l1,java:u1};function c({title:n,children:r}){const[e,t]=K.useState(0),o=K.Children.toArray(r),a=o[e].props.code,s=o[e].props.language,l=m=>t(m),u=()=>navigator.clipboard.writeText(a),d=()=>o.map((m,y)=>{const g=c1[m.props.language],v=`view ${m.props.language} code`;return i.jsx("button",{role:"tab","aria-label":v,"aria-selected":y===e,className:hi.tabButton,onClick:()=>l(y),children:i.jsx(g,{})},y)});return i.jsxs("div",{role:"tablist",className:hi.container,children:[i.jsx("h3",{children:n}),i.jsxs("div",{className:hi.buttonContainer,children:[i.jsx("div",{role:"tablist",className:hi.tabButtonContainer,children:d()}),i.jsx(o1,{onClick:u})]}),i.jsx("div",{role:"tabpanel",className:"tabs-content",children:i.jsx(qm,{code:a,language:s})})]})}c.Tab=n=>i.jsx(i.Fragment,{children:n});const d1=`def fn(arr):\r
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
`,f1=`def fn(arr1, arr2):\r
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
`,p1=`def fn(arr):\r
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
`,h1=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,g1=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,m1=`const fn = (arr) => {\r
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
`,v1=`let fn = (arr1, arr2) => {\r
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
`,y1=`const fn = (arr) => {\r
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
`,x1=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,_1=`const fn = (arr) => {\r
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
`,w1=`public int fn(int[] arr) {\r
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
`,S1=`public int fn(int[] arr1, int[] arr2) {\r
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
`,j1=`public int fn(int[] arr) {\r
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
`,T1=`import java.util.ArrayList;\r
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
`,b1=`public String fn(char[] strs) {\r
    StringBuilder sb = new StringBuilder();\r
\r
    for (char c: strs) {\r
        sb.append(c);\r
    }\r
\r
    return sb.toString();\r
}\r
`,k1=`#include <vector>\r
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
`,E1=`#include <vector>\r
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
`,N1=`#include <vector>\r
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
`,O1=`#include <iostream>\r
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
`,A1=`string fn(vector<char>& arr) {\r
    return string(arr.begin(), arr.end())\r
}\r
`;function C1(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Array"}),i.jsx("section",{id:"array-two-pointers-one-input",children:i.jsxs(c,{title:"two pointers: one input, opposite ends",children:[i.jsx(c.Tab,{code:d1,language:"python"}),i.jsx(c.Tab,{code:m1,language:"javascript"}),i.jsx(c.Tab,{code:w1,language:"java"}),i.jsx(c.Tab,{code:k1,language:"cpp"})]})}),i.jsx("section",{id:"array-two-pointers-two-inputs",children:i.jsxs(c,{title:"two pointers: two inputs, exhaust both",children:[i.jsx(c.Tab,{code:f1,language:"python"}),i.jsx(c.Tab,{code:v1,language:"javascript"}),i.jsx(c.Tab,{code:S1,language:"java"}),i.jsx(c.Tab,{code:E1,language:"cpp"})]})}),i.jsx("section",{id:"array-sliding-window",children:i.jsxs(c,{title:"sliding window",children:[i.jsx(c.Tab,{code:p1,language:"python"}),i.jsx(c.Tab,{code:y1,language:"javascript"}),i.jsx(c.Tab,{code:j1,language:"java"}),i.jsx(c.Tab,{code:N1,language:"cpp"})]})}),i.jsx("section",{id:"array-prefix-sum",children:i.jsxs(c,{title:"prefix sum",children:[i.jsx(c.Tab,{code:h1,language:"python"}),i.jsx(c.Tab,{code:x1,language:"javascript"}),i.jsx(c.Tab,{code:T1,language:"java"}),i.jsx(c.Tab,{code:O1,language:"cpp"})]})}),i.jsx("section",{id:"array-string-building",children:i.jsxs(c,{title:"efficient string building",children:[i.jsx(c.Tab,{code:g1,language:"python"}),i.jsx(c.Tab,{code:_1,language:"javascript"}),i.jsx(c.Tab,{code:b1,language:"java"}),i.jsx(c.Tab,{code:A1,language:"cpp"})]})})]})}const L1=`from collections import defaultdict\r
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
`,P1=`def fn(arr):\r
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
`,M1=`const fn = (arr, k) => {\r
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
`,R1=`function fn(arr) {\r
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
`,I1=`import java.util.HashMap;\r
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
`,D1=`import java.util.HashSet;\r
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
`,B1=`#include <vector>\r
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
`,z1=`#include <vector>\r
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
`;function F1(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Hash Map"}),i.jsx("section",{id:"hashmap-find-number-of-subarrays",children:i.jsxs(c,{title:"find number of subarrays that fit an exact criteria",children:[i.jsx(c.Tab,{code:L1,language:"python"}),i.jsx(c.Tab,{code:M1,language:"javascript"}),i.jsx(c.Tab,{code:I1,language:"java"}),i.jsx(c.Tab,{code:B1,language:"cpp"})]})}),i.jsx("section",{id:"hashmap-sliding-window",children:i.jsxs(c,{title:"sliding window",children:[i.jsx(c.Tab,{code:P1,language:"python"}),i.jsx(c.Tab,{code:R1,language:"javascript"}),i.jsx(c.Tab,{code:D1,language:"java"}),i.jsx(c.Tab,{code:z1,language:"cpp"})]})})]})}const U1=`def fn(head):\r
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
`,H1=`def fn(head):\r
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
`,$1=`const fn = (head) => {\r
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
`,W1=`const fn = (head) => {\r
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
`,V1=`public int fn(ListNode head) {\r
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
`,K1=`public ListNode fn(ListNode head) {\r
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
`,G1=`int fn(ListNode* head) {\r
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
`,J1=`ListNode* fn(ListNode* head) {\r
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
`;function Y1(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Linked List"}),i.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:i.jsxs(c,{title:"fast and slow pointer",children:[i.jsx(c.Tab,{code:U1,language:"python"}),i.jsx(c.Tab,{code:$1,language:"javascript"}),i.jsx(c.Tab,{code:V1,language:"java"}),i.jsx(c.Tab,{code:G1,language:"cpp"})]})}),i.jsx("section",{id:"linkedlist-reverse",children:i.jsxs(c,{title:"reverse linked list",children:[i.jsx(c.Tab,{code:H1,language:"python"}),i.jsx(c.Tab,{code:W1,language:"javascript"}),i.jsx(c.Tab,{code:K1,language:"java"}),i.jsx(c.Tab,{code:J1,language:"cpp"})]})})]})}const Q1=`def fn(arr):\r
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
`,q1=`def fn(arr):\r
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
`,X1=`const fn = (arr) => {\r
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
`,Z1=`const fn = (arr) => {\r
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
`,nv=`import java.util.Stack;\r
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
`,rv=`import java.util.Stack;\r
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
`,ev=`#include <stack>\r
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
`,tv=`#include <stack>\r
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
`;function iv(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Stack"}),i.jsx("section",{id:"stack-monotonic-increasing",children:i.jsxs(c,{title:"monotonic increasing stack",children:[i.jsx(c.Tab,{code:Q1,language:"python"}),i.jsx(c.Tab,{code:X1,language:"javascript"}),i.jsx(c.Tab,{code:nv,language:"java"}),i.jsx(c.Tab,{code:ev,language:"cpp"})]})}),i.jsx("section",{id:"stack-monotonic-decreasing",children:i.jsxs(c,{title:"monotonic decreasing stack",children:[i.jsx(c.Tab,{code:q1,language:"python"}),i.jsx(c.Tab,{code:Z1,language:"javascript"}),i.jsx(c.Tab,{code:rv,language:"java"}),i.jsx(c.Tab,{code:tv,language:"cpp"})]})})]})}const ov=`def dfs(root):\r
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
`,av=`def dfs(root):\r
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
`,sv=`from collections import deque\r
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
`,lv=`const dfs = (root) => {\r
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
`,uv=`const dfs = (root) => {\r
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
`,cv=`const fn = (root) => {\r
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
`,dv=`public int dfs(TreeNode root) {\r
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
`,fv=`import java.util.Stack;\r
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
`,pv=`import java.util.LinkedList;\r
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
`,hv=`int dfs(TreeNode* root) {\r
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
`,gv=`#include <stack>\r
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
`,mv=`#include <queue>\r
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
`;function vv(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Binary Tree"}),i.jsx("section",{id:"tree-dfs-recursive",children:i.jsxs(c,{title:"DFS (recursive)",children:[i.jsx(c.Tab,{code:ov,language:"python"}),i.jsx(c.Tab,{code:lv,language:"javascript"}),i.jsx(c.Tab,{code:dv,language:"java"}),i.jsx(c.Tab,{code:hv,language:"cpp"})]})}),i.jsx("section",{id:"tree-dfs-iterative",children:i.jsxs(c,{title:"DFS (iterative)",children:[i.jsx(c.Tab,{code:av,language:"python"}),i.jsx(c.Tab,{code:uv,language:"javascript"}),i.jsx(c.Tab,{code:fv,language:"java"}),i.jsx(c.Tab,{code:gv,language:"cpp"})]})}),i.jsx("section",{id:"tree-bfs",children:i.jsxs(c,{title:"BFS",children:[i.jsx(c.Tab,{code:sv,language:"python"}),i.jsx(c.Tab,{code:cv,language:"javascript"}),i.jsx(c.Tab,{code:pv,language:"java"}),i.jsx(c.Tab,{code:mv,language:"cpp"})]})})]})}const yv=`def fn(graph):\r
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
`,xv=`def fn(graph):\r
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
`,_v=`from collections import deque\r
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
`,wv=`from heapq import heappop, heappush\r
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
`,Sv=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
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
`,jv=`from collections import defaultdict, deque\r
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
`,Tv=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
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
`,bv=`from heapq import heappop\r
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
`,kv=`const fn = (graph) => {\r
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
`,Ev=`const fn = (graph) => {\r
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
`,Nv=`const fn = (graph) => {\r
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
`,Ov=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Av=`const bellmanFord = (n, edges, source) => {\r
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
`,Cv=`const kahnTopologicalSort = (graph) => {\r
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
`,Lv=`const kruskalMst = (n, edges) => {\r
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
`,Pv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Mv=`import java.util.HashSet;\r
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
`,Rv=`import java.util.Stack;\r
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
`,Iv=`import java.util.ArrayList;\r
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
`,Dv=`import java.util.Arrays;\r
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
`,Bv=`import java.util.Arrays;\r
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
`,zv=`import java.util.ArrayList;\r
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
`,Fv=`import java.util.ArrayList;\r
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
`,Uv=`import java.util.ArrayList;\r
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
`,Hv=`#include <unordered_set>\r
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
`,$v=`#include <stack>\r
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
`,Wv=`#include <queue>\r
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
`,Vv=`#include <limits>\r
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
`,Kv=`#include <vector>\r
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
`,Gv=`#include <vector>\r
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
`,Jv=`#include <vector>\r
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
`,Yv=`#include <vector>\r
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
`;function Qv(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Graph"}),i.jsx("section",{id:"graph-dfs-recursive",children:i.jsxs(c,{title:"DFS (recursive)",children:[i.jsx(c.Tab,{code:yv,language:"python"}),i.jsx(c.Tab,{code:kv,language:"javascript"}),i.jsx(c.Tab,{code:Mv,language:"java"}),i.jsx(c.Tab,{code:Hv,language:"cpp"})]})}),i.jsx("section",{id:"graph-dfs-iterative",children:i.jsxs(c,{title:"DFS (iterative)",children:[i.jsx(c.Tab,{code:xv,language:"python"}),i.jsx(c.Tab,{code:Ev,language:"javascript"}),i.jsx(c.Tab,{code:Rv,language:"java"}),i.jsx(c.Tab,{code:$v,language:"cpp"})]})}),i.jsx("section",{id:"graph-bfs",children:i.jsxs(c,{title:"BFS",children:[i.jsx(c.Tab,{code:_v,language:"python"}),i.jsx(c.Tab,{code:Nv,language:"javascript"}),i.jsx(c.Tab,{code:Iv,language:"java"}),i.jsx(c.Tab,{code:Wv,language:"cpp"})]})}),i.jsx("section",{id:"graph-dijkstra",children:i.jsxs(c,{title:"Dijkstra (shortest path)",children:[i.jsx(c.Tab,{code:wv,language:"python"}),i.jsx(c.Tab,{code:Ov,language:"javascript"}),i.jsx(c.Tab,{code:Dv,language:"java"}),i.jsx(c.Tab,{code:Vv,language:"cpp"})]})}),i.jsx("section",{id:"graph-bellman-ford",children:i.jsxs(c,{title:"Bellman-Ford (shortest path)",children:[i.jsx(c.Tab,{code:Sv,language:"python"}),i.jsx(c.Tab,{code:Av,language:"javascript"}),i.jsx(c.Tab,{code:Bv,language:"java"}),i.jsx(c.Tab,{code:Kv,language:"cpp"})]})}),i.jsx("section",{id:"graph-kahn",children:i.jsxs(c,{title:"Kahn (topological sort)",children:[i.jsx(c.Tab,{code:jv,language:"python"}),i.jsx(c.Tab,{code:Cv,language:"javascript"}),i.jsx(c.Tab,{code:zv,language:"java"}),i.jsx(c.Tab,{code:Gv,language:"cpp"})]})}),i.jsx("section",{id:"graph-kruskal",children:i.jsxs(c,{title:"Kruskal (mst)",children:[i.jsx(c.Tab,{code:Tv,language:"python"}),i.jsx(c.Tab,{code:Lv,language:"javascript"}),i.jsx(c.Tab,{code:Fv,language:"java"}),i.jsx(c.Tab,{code:Jv,language:"cpp"})]})}),i.jsx("section",{id:"graph-prim",children:i.jsxs(c,{title:"Prim (mst)",children:[i.jsx(c.Tab,{code:bv,language:"python"}),i.jsx(c.Tab,{code:Pv,language:"javascript"}),i.jsx(c.Tab,{code:Uv,language:"java"}),i.jsx(c.Tab,{code:Yv,language:"cpp"})]})})]})}const qv=`from heapq import heappop, heappush\r
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
`,Xv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Zv=`import java.util.PriorityQueue;\r
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
`,n0=`#include <vector>\r
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
`;function r0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Heap"}),i.jsx("section",{id:"heap-find-top-k-elements",children:i.jsxs(c,{title:"find top k elements",children:[i.jsx(c.Tab,{code:qv,language:"python"}),i.jsx(c.Tab,{code:Xv,language:"javascript"}),i.jsx(c.Tab,{code:Zv,language:"java"}),i.jsx(c.Tab,{code:n0,language:"cpp"})]})})]})}const e0=`def fn(arr, target):\r
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
`,t0=`def fn(arr, target):\r
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
`,i0=`def fn(arr, target):\r
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
`,o0=`def fn(arr):\r
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
`,a0=`def fn(arr):\r
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
`,s0=`const fn = (arr, target) => {\r
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
`,l0=`const fn = (arr, target) => {\r
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
`,u0=`const fn = (arr, target) => {\r
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
`,c0=`const fn = (arr) => {\r
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
`,d0=`const fn = (arr) => {\r
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
`,f0=`public int fn(int[] arr, int target) {\r
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
`,p0=`public int fn(int[] arr, int target) {\r
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
`,h0=`public int fn(int[] arr, int target) {\r
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
`,g0=`public int fn(int[] arr) {\r
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
`,m0=`public int fn(int[] arr) {\r
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
`,v0=`#include <vector>\r
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
`,y0=`#include <vector>\r
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
`,x0=`#include <vector>\r
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
`,_0=`#include <vector>\r
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
`,w0=`#include <vector>\r
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
`;function S0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Binary Search"}),i.jsx("section",{id:"binarysearch-binary-search",children:i.jsxs(c,{title:"binary search",children:[i.jsx(c.Tab,{code:e0,language:"python"}),i.jsx(c.Tab,{code:s0,language:"javascript"}),i.jsx(c.Tab,{code:f0,language:"java"}),i.jsx(c.Tab,{code:v0,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:i.jsxs(c,{title:"duplicate elements, left-most insertion point",children:[i.jsx(c.Tab,{code:t0,language:"python"}),i.jsx(c.Tab,{code:l0,language:"javascript"}),i.jsx(c.Tab,{code:p0,language:"java"}),i.jsx(c.Tab,{code:y0,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:i.jsxs(c,{title:"duplicate elements, right-most insertion point",children:[i.jsx(c.Tab,{code:i0,language:"python"}),i.jsx(c.Tab,{code:u0,language:"javascript"}),i.jsx(c.Tab,{code:h0,language:"java"}),i.jsx(c.Tab,{code:x0,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-minimum",children:i.jsxs(c,{title:"greedy (minimum)",children:[i.jsx(c.Tab,{code:o0,language:"python"}),i.jsx(c.Tab,{code:c0,language:"javascript"}),i.jsx(c.Tab,{code:g0,language:"java"}),i.jsx(c.Tab,{code:_0,language:"cpp"})]})}),i.jsx("section",{id:"binarysearch-greedy-maximum",children:i.jsxs(c,{title:"greedy (maximum)",children:[i.jsx(c.Tab,{code:a0,language:"python"}),i.jsx(c.Tab,{code:d0,language:"javascript"}),i.jsx(c.Tab,{code:m0,language:"java"}),i.jsx(c.Tab,{code:w0,language:"cpp"})]})})]})}const j0=`def backtrack(curr, OTHER_ARGUMENTS...):\r
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
`,T0=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
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
`,b0=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`,k0=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {\r
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
`;function E0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Backtracking"}),i.jsx("section",{id:"backtracking-backtracking",children:i.jsxs(c,{title:"backtracking",children:[i.jsx(c.Tab,{code:j0,language:"python"}),i.jsx(c.Tab,{code:T0,language:"javascript"}),i.jsx(c.Tab,{code:b0,language:"java"}),i.jsx(c.Tab,{code:k0,language:"cpp"})]})})]})}const N0=`def fn(arr):\r
    @cache\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
        return RECURRENCE_RELATION(STATE)\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,O0=`def fn(arr):\r
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
`,A0=`def kadane(arr: list[int]) -> int:\r
    curr_sub = max_sub = arr[0]\r
\r
    for num in arr[1:]:\r
        curr_sub = max(curr_sub + num, num)\r
        max_sub = max(max_sub, curr_sub)\r
\r
    return max_sub\r
`,C0=`const fn = (arr) => {\r
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
`,L0=`const fn = (arr) => {\r
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
`,P0=`const kadane = (arr) => {\r
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
`,M0=`import java.util.HashMap;\r
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
`,R0=`import java.util.Arrays;\r
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
`,I0=`public int kadane(int[] arr) {\r
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
`,D0=`#include <unordered_map>\r
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
`,B0=`#include <vector>\r
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
`,z0=`#include <vector>\r
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
`;function F0(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Dynamic Programming"}),i.jsx("section",{id:"dp-top-down",children:i.jsxs(c,{title:"DP top-down",children:[i.jsx(c.Tab,{code:N0,language:"python"}),i.jsx(c.Tab,{code:C0,language:"javascript"}),i.jsx(c.Tab,{code:M0,language:"java"}),i.jsx(c.Tab,{code:D0,language:"cpp"})]})}),i.jsx("section",{id:"dp-bottom-up",children:i.jsxs(c,{title:"DP bottom-up",children:[i.jsx(c.Tab,{code:O0,language:"python"}),i.jsx(c.Tab,{code:L0,language:"javascript"}),i.jsx(c.Tab,{code:R0,language:"java"}),i.jsx(c.Tab,{code:B0,language:"cpp"})]})}),i.jsx("section",{id:"dp-kadane",children:i.jsxs(c,{title:"Kadane (max-sum subarray)",children:[i.jsx(c.Tab,{code:A0,language:"python"}),i.jsx(c.Tab,{code:P0,language:"javascript"}),i.jsx(c.Tab,{code:I0,language:"java"}),i.jsx(c.Tab,{code:z0,language:"cpp"})]})})]})}const U0=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,H0=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,$0=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,W0=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,V0=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,K0=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,G0=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,J0=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,Y0=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,Q0=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,q0=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,X0=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,Z0=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,ny=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,ry=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,ey=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,ty=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,iy=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,oy=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,ay=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`,sy=`public boolean testKthBit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,ly=`public int setKthBit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,uy=`public int clearKthBit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,cy=`public int toggleKthBit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,dy=`public int getRightmostSetBit(int num) {\r
    return num & -num;\r
}\r
`,fy=`public int countSetBits(int num) {\r
    int count = 0;\r
\r
    while (num > 0) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,py=`public int multiplyByPowerOfTwo(int num, int k) {\r
    return num << k;\r
}\r
`,hy=`public int divideByPowerOfTwo(int num, int k) {\r
    return num >> k;\r
}\r
`,gy=`public boolean isPowerOfTwo(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,my=`public int[] swapVariables(int num1, int num2) {\r
    num1 ^= num2;\r
    num2 ^= num1;\r
    num1 ^= num2;\r
    return new int[] { num1, num2 };\r
}\r
`,vy=`bool test_kth_bit(int num, int k) {\r
    return (num & (1 << k)) != 0;\r
}\r
`,yy=`int set_kth_bit(int num, int k) {\r
    return num | (1 << k);\r
}\r
`,xy=`int clear_kth_bit(int num, int k) {\r
    return num & ~(1 << k);\r
}\r
`,_y=`int toggle_kth_bit(int num, int k) {\r
    return num ^ (1 << k);\r
}\r
`,wy=`int get_rightmost_set_bit(int num) {\r
    return num & -num;\r
}\r
`,Sy=`int count_set_bits(int num) {\r
    int count = 0;\r
\r
    while (num) {\r
        count += num & 1;\r
        num >>= 1;\r
    }\r
\r
    return count;\r
}\r
`,jy=`int multiply_by_power_of_two(int num, int k) {\r
    return num << k;\r
}\r
`,Ty=`int divide_by_power_of_two(int num, int k) {\r
    return num >> k;\r
}\r
`,by=`bool is_power_of_two(int num) {\r
    return (num & (num - 1)) == 0;\r
}\r
`,ky=`#include <tuple>\r
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
`;function Ey(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Bit Manipulation"}),i.jsx("section",{id:"bitmanipulation-test-kth-bit",children:i.jsxs(c,{title:"test kth-bit",children:[i.jsx(c.Tab,{code:U0,language:"python"}),i.jsx(c.Tab,{code:q0,language:"javascript"}),i.jsx(c.Tab,{code:sy,language:"java"}),i.jsx(c.Tab,{code:vy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-set-kth-bit",children:i.jsxs(c,{title:"set kth bit",children:[i.jsx(c.Tab,{code:H0,language:"python"}),i.jsx(c.Tab,{code:X0,language:"javascript"}),i.jsx(c.Tab,{code:ly,language:"java"}),i.jsx(c.Tab,{code:yy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:i.jsxs(c,{title:"clear kth bit",children:[i.jsx(c.Tab,{code:$0,language:"python"}),i.jsx(c.Tab,{code:Z0,language:"javascript"}),i.jsx(c.Tab,{code:uy,language:"java"}),i.jsx(c.Tab,{code:xy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:i.jsxs(c,{title:"toggle kth bit",children:[i.jsx(c.Tab,{code:W0,language:"python"}),i.jsx(c.Tab,{code:ny,language:"javascript"}),i.jsx(c.Tab,{code:cy,language:"java"}),i.jsx(c.Tab,{code:_y,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:i.jsxs(c,{title:"get rightmost bit",children:[i.jsx(c.Tab,{code:V0,language:"python"}),i.jsx(c.Tab,{code:ry,language:"javascript"}),i.jsx(c.Tab,{code:dy,language:"java"}),i.jsx(c.Tab,{code:wy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-count-set-bits",children:i.jsxs(c,{title:"count set bits",children:[i.jsx(c.Tab,{code:K0,language:"python"}),i.jsx(c.Tab,{code:ey,language:"javascript"}),i.jsx(c.Tab,{code:fy,language:"java"}),i.jsx(c.Tab,{code:Sy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:i.jsxs(c,{title:"multiply by 2^k",children:[i.jsx(c.Tab,{code:G0,language:"python"}),i.jsx(c.Tab,{code:ty,language:"javascript"}),i.jsx(c.Tab,{code:py,language:"java"}),i.jsx(c.Tab,{code:jy,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:i.jsxs(c,{title:"divide by 2^k",children:[i.jsx(c.Tab,{code:J0,language:"python"}),i.jsx(c.Tab,{code:iy,language:"javascript"}),i.jsx(c.Tab,{code:hy,language:"java"}),i.jsx(c.Tab,{code:Ty,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-check-power-of-two",children:i.jsxs(c,{title:"check if number is power of 2",children:[i.jsx(c.Tab,{code:Y0,language:"python"}),i.jsx(c.Tab,{code:oy,language:"javascript"}),i.jsx(c.Tab,{code:gy,language:"java"}),i.jsx(c.Tab,{code:by,language:"cpp"})]})}),i.jsx("section",{id:"bitmanipulation-swap-variables",children:i.jsxs(c,{title:"swap two variables",children:[i.jsx(c.Tab,{code:Q0,language:"python"}),i.jsx(c.Tab,{code:ay,language:"javascript"}),i.jsx(c.Tab,{code:my,language:"java"}),i.jsx(c.Tab,{code:ky,language:"cpp"})]})})]})}const Ny=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,Oy=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,Ay=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,Cy=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,Ly=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,Py=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`,My=`import java.util.ArrayList;\r
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
`,Ry=`import java.util.ArrayList;\r
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
`,Iy=`import java.util.ArrayList;\r
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
`,Dy=`#include <vector>\r
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
`,By=`#include <vector>\r
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
`,zy=`#include <vector>\r
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
`;function Fy(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Matrix"}),i.jsx("section",{id:"matrix-create-copy",children:i.jsxs(c,{title:"create / copy",children:[i.jsx(c.Tab,{code:Ny,language:"python"}),i.jsx(c.Tab,{code:Cy,language:"javascript"}),i.jsx(c.Tab,{code:My,language:"java"}),i.jsx(c.Tab,{code:Dy,language:"cpp"})]})}),i.jsx("section",{id:"matrix-diagonals",children:i.jsxs(c,{title:"diagonals / anti-diagonals",children:[i.jsx(c.Tab,{code:Oy,language:"python"}),i.jsx(c.Tab,{code:Ly,language:"javascript"}),i.jsx(c.Tab,{code:Ry,language:"java"}),i.jsx(c.Tab,{code:By,language:"cpp"})]})}),i.jsx("section",{id:"matrix-rotate-transpose",children:i.jsxs(c,{title:"rotate / transpose",children:[i.jsx(c.Tab,{code:Ay,language:"python"}),i.jsx(c.Tab,{code:Py,language:"javascript"}),i.jsx(c.Tab,{code:Iy,language:"java"}),i.jsx(c.Tab,{code:zy,language:"cpp"})]})})]})}const Uy=`from typing import Any\r
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
`,Hy=`from typing import Any\r
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
`,$y=`from typing import Any\r
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
`,Wy=`from typing import Any\r
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
`,Vy=`from typing import Any\r
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
`,Ky=`class Graph:\r
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
`,Gy=`from typing import Any\r
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
`,Jy=`class TrieNode:\r
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
`,Yy=`class UnionFind:\r
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
`,Qy=`class UnionFind:\r
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
`,qy=`class Array {\r
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
`,Xy=`class TreeNode {\r
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
`,Zy=`class TreeNode {\r
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
`,nx=`class ListNode {\r
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
`,rx=`class ListNode {\r
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
`,ex=`class Graph {\r
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
`,tx=`class HashMap {\r
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
`,ix=`class TrieNode {\r
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
`,ox=`class UnionFind {\r
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
`,ax=`class UnionFind {\r
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
`,sx=`public class Array<T> {\r
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
`,lx=`public class TreeNode<T> {\r
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
`,ux=`public class TreeNode<T extends Comparable<T>> {\r
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
`,cx=`class ListNode {\r
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
`,dx=`public class ListNode<T> {\r
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
`,fx=`import java.util.ArrayList;\r
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
`,px=`public class HashMap {\r
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
`,hx=`import java.util.ArrayList;\r
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
`,gx=`import java.util.ArrayList;\r
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
`,mx=`import java.util.ArrayList;\r
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
`,vx=`#include <iostream>\r
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
`,yx=`#include <iostream>\r
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
`,xx=`#include <iostream>\r
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
`,_x=`#include <iostream>\r
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
`,wx=`#include <iostream>\r
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
`,Sx=`#include <iostream>\r
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
`,jx=`#include <iostream>\r
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
`,Tx=`#include <iostream>\r
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
`,bx=`#include <iostream>\r
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
`,kx=`#include <iostream>\r
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
`;function Ex(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Data Structures"}),i.jsx("section",{id:"ds-array",children:i.jsxs(c,{title:"array",children:[i.jsx(c.Tab,{code:Uy,language:"python"}),i.jsx(c.Tab,{code:qy,language:"javascript"}),i.jsx(c.Tab,{code:sx,language:"java"}),i.jsx(c.Tab,{code:vx,language:"cpp"})]})}),i.jsx("section",{id:"ds-hash-map",children:i.jsxs(c,{title:"hash map",children:[i.jsx(c.Tab,{code:Gy,language:"python"}),i.jsx(c.Tab,{code:tx,language:"javascript"}),i.jsx(c.Tab,{code:px,language:"java"}),i.jsx(c.Tab,{code:jx,language:"cpp"})]})}),i.jsx("section",{id:"ds-linked-list",children:i.jsxs(c,{title:"linked list",children:[i.jsx(c.Tab,{code:Wy,language:"python"}),i.jsx(c.Tab,{code:nx,language:"javascript"}),i.jsx(c.Tab,{code:cx,language:"java"}),i.jsx(c.Tab,{code:_x,language:"cpp"})]})}),i.jsx("section",{id:"ds-doubly-linked-list",children:i.jsxs(c,{title:"doubly linked list",children:[i.jsx(c.Tab,{code:Vy,language:"python"}),i.jsx(c.Tab,{code:rx,language:"javascript"}),i.jsx(c.Tab,{code:dx,language:"java"}),i.jsx(c.Tab,{code:wx,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-tree",children:i.jsxs(c,{title:"binary tree",children:[i.jsx(c.Tab,{code:Hy,language:"python"}),i.jsx(c.Tab,{code:Xy,language:"javascript"}),i.jsx(c.Tab,{code:lx,language:"java"}),i.jsx(c.Tab,{code:yx,language:"cpp"})]})}),i.jsx("section",{id:"ds-binary-search-tree",children:i.jsxs(c,{title:"binary search tree",children:[i.jsx(c.Tab,{code:$y,language:"python"}),i.jsx(c.Tab,{code:Zy,language:"javascript"}),i.jsx(c.Tab,{code:ux,language:"java"}),i.jsx(c.Tab,{code:xx,language:"cpp"})]})}),i.jsx("section",{id:"ds-graph",children:i.jsxs(c,{title:"graph",children:[i.jsx(c.Tab,{code:Ky,language:"python"}),i.jsx(c.Tab,{code:ex,language:"javascript"}),i.jsx(c.Tab,{code:fx,language:"java"}),i.jsx(c.Tab,{code:Sx,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find",children:i.jsxs(c,{title:"union find",children:[i.jsx(c.Tab,{code:Yy,language:"python"}),i.jsx(c.Tab,{code:ox,language:"javascript"}),i.jsx(c.Tab,{code:gx,language:"java"}),i.jsx(c.Tab,{code:bx,language:"cpp"})]})}),i.jsx("section",{id:"ds-union-find-optimized",children:i.jsxs(c,{title:"union find optimized",children:[i.jsx(c.Tab,{code:Qy,language:"python"}),i.jsx(c.Tab,{code:ax,language:"javascript"}),i.jsx(c.Tab,{code:mx,language:"java"}),i.jsx(c.Tab,{code:kx,language:"cpp"})]})}),i.jsx("section",{id:"ds-trie",children:i.jsxs(c,{title:"trie",children:[i.jsx(c.Tab,{code:Jy,language:"python"}),i.jsx(c.Tab,{code:ix,language:"javascript"}),i.jsx(c.Tab,{code:hx,language:"java"}),i.jsx(c.Tab,{code:Tx,language:"cpp"})]})})]})}const Nx=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,Ox=`def bubble_sort(arr: list) -> None:\r
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
`,Ax=`def bucket_sort(arr: list) -> list:\r
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
`,Cx=`def counting_sort(arr: list) -> list:\r
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
`,Lx=`def cube_sort(arr: list, processors: int) -> None:\r
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
`,Px=`def heap_sort(arr: list) -> list:\r
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
`,Mx=`def insertion_sort(arr: list) -> None:\r
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
`,Rx=`def merge_sort(arr: list) -> list:\r
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
`,Ix=`def pancake_sort(arr: list) -> None:\r
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
`,Dx=`def quick_sort(arr: list) -> list:\r
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
`,Bx=`def radix_sort(arr: list) -> None:\r
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
`,zx=`def selection_sort(arr: list) -> None:\r
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
`,Fx=`def shell_sort(arr: list) -> None:\r
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
`,Ux=`from threading import Thread\r
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
`,Hx=`def tim_sort(arr: list) -> list:\r
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
`,$x=`const bogoSort = (arr) => {\r
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
`,Wx=`const bubbleSort = (arr) => {\r
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
`,Vx=`const bucketSort = (arr) => {\r
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
`,Kx=`const countingSort = (arr) => {\r
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
`,Gx=`const cubeSort = (arr, processors) => {\r
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
`,Jx=`const heapSort = (arr) => {\r
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
`,Yx=`const insertionSort = (arr) => {\r
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
`,Qx=`const mergeSort = (arr) => {\r
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
`,qx=`const pancakeSort = (arr) => {\r
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
`,Xx=`const quickSort = (arr) => {\r
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
`,Zx=`const radixSort = (arr) => {\r
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
`,n_=`const selectionSort = (arr) => {\r
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
`,r_=`const shellSort = (arr) => {\r
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
`,e_=`const sleepSort = (arr) => {\r
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
`,t_=`const timSort = (arr) => {\r
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
`,i_=`import java.util.Arrays;\r
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
`,o_=`public static void bubbleSort(int[] arr) {\r
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
`,a_=`import java.util.ArrayList;\r
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
`,s_=`import java.util.Arrays;\r
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
`,l_=`import java.util.ArrayList;\r
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
`,u_=`public static int[] heapSort(int[] arr) {\r
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
`,c_=`public static void insertionSort(int[] arr) {\r
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
`,d_=`import java.util.Arrays;\r
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
`,f_=`public static void pancakeSort(int[] arr) {\r
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
`,p_=`import java.util.ArrayList;\r
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
`,h_=`import java.util.Arrays;\r
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
`,g_=`public static void selectionSort(int[] arr) {\r
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
`,m_=`public static void shellSort(int[] arr) {\r
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
`,v_=`import java.util.ArrayList;\r
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
`,y_=`public static int[] timSort(int[] arr) {\r
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
`,x_=`#include <algorithm>\r
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
`,__=`#include <vector>\r
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
`,w_=`#include <vector>\r
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
`,S_=`#include <vector>\r
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
`,j_=`#include <vector>\r
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
`,T_=`#include <vector>\r
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
`,b_=`#include <vector>\r
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
`,k_=`#include <vector>\r
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
`,E_=`#include <vector>\r
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
`,N_=`#include <vector>\r
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
`,O_=`#include <vector>\r
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
`,A_=`#include <vector>\r
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
`,C_=`#include <vector>\r
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
`,L_=`#include <chrono>\r
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
`,P_=`#include <vector>\r
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
`;function M_(){return i.jsxs("div",{className:un.container,children:[i.jsx("h2",{className:un.sectionHeader,children:"Sorting Algorithms"}),i.jsx("section",{id:"sort-bubble",children:i.jsxs(c,{title:"bubble sort",children:[i.jsx(c.Tab,{code:Ox,language:"python"}),i.jsx(c.Tab,{code:Wx,language:"javascript"}),i.jsx(c.Tab,{code:o_,language:"java"}),i.jsx(c.Tab,{code:__,language:"cpp"})]})}),i.jsx("section",{id:"sort-selection",children:i.jsxs(c,{title:"selection sort",children:[i.jsx(c.Tab,{code:zx,language:"python"}),i.jsx(c.Tab,{code:n_,language:"javascript"}),i.jsx(c.Tab,{code:g_,language:"java"}),i.jsx(c.Tab,{code:A_,language:"cpp"})]})}),i.jsx("section",{id:"sort-insertion",children:i.jsxs(c,{title:"insertion sort",children:[i.jsx(c.Tab,{code:Mx,language:"python"}),i.jsx(c.Tab,{code:Yx,language:"javascript"}),i.jsx(c.Tab,{code:c_,language:"java"}),i.jsx(c.Tab,{code:b_,language:"cpp"})]})}),i.jsx("section",{id:"sort-shell",children:i.jsxs(c,{title:"shell sort",children:[i.jsx(c.Tab,{code:Fx,language:"python"}),i.jsx(c.Tab,{code:r_,language:"javascript"}),i.jsx(c.Tab,{code:m_,language:"java"}),i.jsx(c.Tab,{code:C_,language:"cpp"})]})}),i.jsx("section",{id:"sort-merge",children:i.jsxs(c,{title:"merge sort",children:[i.jsx(c.Tab,{code:Rx,language:"python"}),i.jsx(c.Tab,{code:Qx,language:"javascript"}),i.jsx(c.Tab,{code:d_,language:"java"}),i.jsx(c.Tab,{code:k_,language:"cpp"})]})}),i.jsx("section",{id:"sort-quick",children:i.jsxs(c,{title:"quick sort",children:[i.jsx(c.Tab,{code:Dx,language:"python"}),i.jsx(c.Tab,{code:Xx,language:"javascript"}),i.jsx(c.Tab,{code:p_,language:"java"}),i.jsx(c.Tab,{code:N_,language:"cpp"})]})}),i.jsx("section",{id:"sort-tim",children:i.jsxs(c,{title:"timsort",children:[i.jsx(c.Tab,{code:Hx,language:"python"}),i.jsx(c.Tab,{code:t_,language:"javascript"}),i.jsx(c.Tab,{code:y_,language:"java"}),i.jsx(c.Tab,{code:P_,language:"cpp"})]})}),i.jsx("section",{id:"sort-heap",children:i.jsxs(c,{title:"heap sort",children:[i.jsx(c.Tab,{code:Px,language:"python"}),i.jsx(c.Tab,{code:Jx,language:"javascript"}),i.jsx(c.Tab,{code:u_,language:"java"}),i.jsx(c.Tab,{code:T_,language:"cpp"})]})}),i.jsx("section",{id:"sort-counting",children:i.jsxs(c,{title:"counting sort",children:[i.jsx(c.Tab,{code:Cx,language:"python"}),i.jsx(c.Tab,{code:Kx,language:"javascript"}),i.jsx(c.Tab,{code:s_,language:"java"}),i.jsx(c.Tab,{code:S_,language:"cpp"})]})}),i.jsx("section",{id:"sort-bucket",children:i.jsxs(c,{title:"bucket sort",children:[i.jsx(c.Tab,{code:Ax,language:"python"}),i.jsx(c.Tab,{code:Vx,language:"javascript"}),i.jsx(c.Tab,{code:a_,language:"java"}),i.jsx(c.Tab,{code:w_,language:"cpp"})]})}),i.jsx("section",{id:"sort-radix",children:i.jsxs(c,{title:"radix sort",children:[i.jsx(c.Tab,{code:Bx,language:"python"}),i.jsx(c.Tab,{code:Zx,language:"javascript"}),i.jsx(c.Tab,{code:h_,language:"java"}),i.jsx(c.Tab,{code:O_,language:"cpp"})]})}),i.jsx("section",{id:"sort-cube",children:i.jsxs(c,{title:"cubesort",children:[i.jsx(c.Tab,{code:Lx,language:"python"}),i.jsx(c.Tab,{code:Gx,language:"javascript"}),i.jsx(c.Tab,{code:l_,language:"java"}),i.jsx(c.Tab,{code:j_,language:"cpp"})]})}),i.jsx("section",{id:"sort-bogo",children:i.jsxs(c,{title:"bogo sort",children:[i.jsx(c.Tab,{code:Nx,language:"python"}),i.jsx(c.Tab,{code:$x,language:"javascript"}),i.jsx(c.Tab,{code:i_,language:"java"}),i.jsx(c.Tab,{code:x_,language:"cpp"})]})}),i.jsx("section",{id:"sort-pancake",children:i.jsxs(c,{title:"pancake sort",children:[i.jsx(c.Tab,{code:Ix,language:"python"}),i.jsx(c.Tab,{code:qx,language:"javascript"}),i.jsx(c.Tab,{code:f_,language:"java"}),i.jsx(c.Tab,{code:E_,language:"cpp"})]})}),i.jsx("section",{id:"sort-sleep",children:i.jsxs(c,{title:"sleep sort",children:[i.jsx(c.Tab,{code:Ux,language:"python"}),i.jsx(c.Tab,{code:e_,language:"javascript"}),i.jsx(c.Tab,{code:v_,language:"java"}),i.jsx(c.Tab,{code:L_,language:"cpp"})]})})]})}function R_(){const{isSidebarOpen:n}=Fs(),r=rr(iu.main,!n&&iu.sidebarHidden);return i.jsxs("main",{className:r,children:[i.jsx($g,{}),i.jsx(C1,{}),i.jsx(F1,{}),i.jsx(Y1,{}),i.jsx(iv,{}),i.jsx(vv,{}),i.jsx(Qv,{}),i.jsx(r0,{}),i.jsx(S0,{}),i.jsx(E0,{}),i.jsx(F0,{}),i.jsx(Ey,{}),i.jsx(Fy,{}),i.jsx(Ex,{}),i.jsx(M_,{})]})}function I_(){return i.jsx(_i.StrictMode,{children:i.jsx(Th,{children:i.jsxs("div",{className:"App",children:[i.jsx(Eh,{}),i.jsx(kg,{}),i.jsx(R_,{})]})})})}Xo.createRoot(document.getElementById("root")).render(i.jsx(I_,{}));
