(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();var Gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Us(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},Zi={},fu={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Vd=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),Hl=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pu=Object.assign,gu={};function Xr(e,n,r){this.props=e,this.context=n,this.refs=gu,this.updater=r||hu}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=Xr.prototype;function Hs(e,n,r){this.props=e,this.context=n,this.refs=gu,this.updater=r||hu}var $s=Hs.prototype=new mu;$s.constructor=Hs;pu($s,Xr.prototype);$s.isPureReactComponent=!0;var $l=Array.isArray,vu=Object.prototype.hasOwnProperty,Ws={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,n,r){var t,i={},s=null,l=null;if(n!=null)for(t in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(s=""+n.key),n)vu.call(n,t)&&!yu.hasOwnProperty(t)&&(i[t]=n[t]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(t in a=e.defaultProps,a)i[t]===void 0&&(i[t]=a[t]);return{$$typeof:Ut,type:e,key:s,ref:l,props:i,_owner:Ws.current}}function of(e,n){return{$$typeof:Ut,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ut}function sf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return n[r]})}var Wl=/\/+/g;function xo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?sf(""+e.key):n.toString(36)}function pi(e,n,r,t,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ut:case Qd:l=!0}}if(l)return l=e,i=i(l),e=t===""?"."+xo(l,0):t,$l(i)?(r="",e!=null&&(r=e.replace(Wl,"$&/")+"/"),pi(i,n,r,"",function(c){return c})):i!=null&&(Ys(i)&&(i=of(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Wl,"$&/")+"/")+e)),n.push(i)),1;if(l=0,t=t===""?".":t+":",$l(e))for(var a=0;a<e.length;a++){s=e[a];var u=t+xo(s,a);l+=pi(s,n,r,u,i)}else if(u=tf(e),typeof u=="function")for(e=u.call(e),a=0;!(s=e.next()).done;)s=s.value,u=t+xo(s,a++),l+=pi(s,n,r,u,i);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function Gt(e,n,r){if(e==null)return e;var t=[],i=0;return pi(e,t,"","",function(s){return n.call(r,s,i++)}),t}function lf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},gi={transition:null},af={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Ws};te.Children={map:Gt,forEach:function(e,n,r){Gt(e,function(){n.apply(this,arguments)},r)},count:function(e){var n=0;return Gt(e,function(){n++}),n},toArray:function(e){return Gt(e,function(n){return n})||[]},only:function(e){if(!Ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Xr;te.Fragment=Vd;te.Profiler=Jd;te.PureComponent=Hs;te.StrictMode=Kd;te.Suspense=ef;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;te.cloneElement=function(e,n,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=pu({},e.props),i=e.key,s=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,l=Ws.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)vu.call(n,u)&&!yu.hasOwnProperty(u)&&(t[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)t.children=r;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];t.children=a}return{$$typeof:Ut,type:e.type,key:i,ref:s,props:t,_owner:l}};te.createContext=function(e){return e={$$typeof:Zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xd,_context:e},e.Consumer=e};te.createElement=xu;te.createFactory=function(e){var n=xu.bind(null,e);return n.type=e,n};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:qd,render:e}};te.isValidElement=Ys;te.lazy=function(e){return{$$typeof:rf,_payload:{_status:-1,_result:e},_init:lf}};te.memo=function(e,n){return{$$typeof:nf,type:e,compare:n===void 0?null:n}};te.startTransition=function(e){var n=gi.transition;gi.transition={};try{e()}finally{gi.transition=n}};te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};te.useCallback=function(e,n){return Ye.current.useCallback(e,n)};te.useContext=function(e){return Ye.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};te.useEffect=function(e,n){return Ye.current.useEffect(e,n)};te.useId=function(){return Ye.current.useId()};te.useImperativeHandle=function(e,n,r){return Ye.current.useImperativeHandle(e,n,r)};te.useInsertionEffect=function(e,n){return Ye.current.useInsertionEffect(e,n)};te.useLayoutEffect=function(e,n){return Ye.current.useLayoutEffect(e,n)};te.useMemo=function(e,n){return Ye.current.useMemo(e,n)};te.useReducer=function(e,n,r){return Ye.current.useReducer(e,n,r)};te.useRef=function(e){return Ye.current.useRef(e)};te.useState=function(e){return Ye.current.useState(e)};te.useSyncExternalStore=function(e,n,r){return Ye.current.useSyncExternalStore(e,n,r)};te.useTransition=function(){return Ye.current.useTransition()};te.version="18.2.0";fu.exports=te;var G=fu.exports;const mi=Us(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=G,cf=Symbol.for("react.element"),df=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,hf=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,r){var t,i={},s=null,l=null;r!==void 0&&(s=""+r),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(t in n)ff.call(n,t)&&!pf.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)i[t]===void 0&&(i[t]=n[t]);return{$$typeof:cf,type:e,key:s,ref:l,props:i,_owner:hf.current}}Zi.Fragment=df;Zi.jsx=_u;Zi.jsxs=_u;du.exports=Zi;var o=du.exports,Vo={},wu={exports:{}},tn={},Su={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,A){var I=j.length;j.push(A);e:for(;0<I;){var H=I-1>>>1,J=j[H];if(0<i(J,A))j[H]=A,j[I]=J,I=H;else break e}}function r(j){return j.length===0?null:j[0]}function t(j){if(j.length===0)return null;var A=j[0],I=j.pop();if(I!==A){j[0]=I;e:for(var H=0,J=j.length,ke=J>>>1;H<ke;){var Ee=2*(H+1)-1,ue=j[Ee],le=Ee+1,fe=j[le];if(0>i(ue,I))le<J&&0>i(fe,ue)?(j[H]=fe,j[le]=I,H=le):(j[H]=ue,j[Ee]=I,H=Ee);else if(le<J&&0>i(fe,I))j[H]=fe,j[le]=I,H=le;else break e}}return A}function i(j,A){var I=j.sortIndex-A.sortIndex;return I!==0?I:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],v=1,y=null,p=3,m=!1,_=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var A=r(c);A!==null;){if(A.callback===null)t(c);else if(A.startTime<=j)t(c),A.sortIndex=A.expirationTime,n(u,A);else break;A=r(c)}}function w(j){if(S=!1,h(j),!_)if(r(u)!==null)_=!0,Se(k);else{var A=r(c);A!==null&&O(w,A.startTime-j)}}function k(j,A){_=!1,S&&(S=!1,f(P),P=-1),m=!0;var I=p;try{for(h(A),y=r(u);y!==null&&(!(y.expirationTime>A)||j&&!Y());){var H=y.callback;if(typeof H=="function"){y.callback=null,p=y.priorityLevel;var J=H(y.expirationTime<=A);A=e.unstable_now(),typeof J=="function"?y.callback=J:y===r(u)&&t(u),h(A)}else t(u);y=r(u)}if(y!==null)var ke=!0;else{var Ee=r(c);Ee!==null&&O(w,Ee.startTime-A),ke=!1}return ke}finally{y=null,p=I,m=!1}}var E=!1,T=null,P=-1,N=5,L=-1;function Y(){return!(e.unstable_now()-L<N)}function Q(){if(T!==null){var j=e.unstable_now();L=j;var A=!0;try{A=T(!0,j)}finally{A?W():(E=!1,T=null)}}else E=!1}var W;if(typeof d=="function")W=function(){d(Q)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ye=he.port2;he.port1.onmessage=Q,W=function(){ye.postMessage(null)}}else W=function(){b(Q,0)};function Se(j){T=j,E||(E=!0,W())}function O(j,A){P=b(function(){j(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){_||m||(_=!0,Se(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var I=p;p=A;try{return j()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=p;p=j;try{return A()}finally{p=I}},e.unstable_scheduleCallback=function(j,A,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,j){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,j={id:v++,callback:A,priorityLevel:j,startTime:I,expirationTime:J,sortIndex:-1},I>H?(j.sortIndex=I,n(c,j),r(u)===null&&j===r(c)&&(S?(f(P),P=-1):S=!0,O(w,I-H))):(j.sortIndex=J,n(u,j),_||m||(_=!0,Se(k))),j},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(j){var A=p;return function(){var I=p;p=A;try{return j.apply(this,arguments)}finally{p=I}}}})(ju);Su.exports=ju;var gf=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=G,rn=gf;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,St={};function _r(e,n){$r(e,n),$r(e+"Capture",n)}function $r(e,n){for(St[e]=n,e=0;e<n.length;e++)Eu.add(n[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ko=Object.prototype.hasOwnProperty,mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yl={},Gl={};function vf(e){return Ko.call(Gl,e)?!0:Ko.call(Yl,e)?!1:mf.test(e)?Gl[e]=!0:(Yl[e]=!0,!1)}function yf(e,n,r,t){if(r!==null&&r.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,n,r,t){if(n===null||typeof n>"u"||yf(e,n,r,t))return!0;if(t)return!1;if(r!==null)switch(r.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,r,t,i,s,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Le[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Gs,Qs);Le[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Gs,Qs);Le[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Gs,Qs);Le[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vs(e,n,r,t){var i=Le.hasOwnProperty(n)?Le[n]:null;(i!==null?i.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xf(n,r,i,t)&&(r=null),t||i===null?vf(n)&&(r===null?e.removeAttribute(n):e.setAttribute(n,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(n=i.attributeName,t=i.attributeNamespace,r===null?e.removeAttribute(n):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,t?e.setAttributeNS(t,n,r):e.setAttribute(n,r))))}var Dn=ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qt=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Jo=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),Nu=Symbol.for("react.context"),Js=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Zo=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Ql=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=Ql&&e[Ql]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,_o;function ut(e){if(_o===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);_o=n&&n[1]||""}return`
`+_o+e}var wo=!1;function So(e,n){if(!e||wo)return"";wo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var t=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){t=c}e.call(n.prototype)}else{try{throw Error()}catch(c){t=c}e()}}catch(c){if(c&&t&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=t.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{wo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ut(e):""}function _f(e){switch(e.tag){case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return ut("Suspense");case 19:return ut("SuspenseList");case 0:case 2:case 15:return e=So(e.type,!1),e;case 11:return e=So(e.type.render,!1),e;case 1:return e=So(e.type,!0),e;default:return""}}function qo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Er:return"Portal";case Jo:return"Profiler";case Ks:return"StrictMode";case Xo:return"Suspense";case Zo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case Js:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return n=e.displayName||null,n!==null?n:qo(e.type)||"Memo";case zn:n=e._payload,e=e._init;try{return qo(e(n))}catch{}}return null}function wf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qo(n);case 8:return n===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sf(e){var n=bu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){t=""+l,s.call(this,l)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vt(e){e._valueTracker||(e._valueTracker=Sf(e))}function Cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),t="";return e&&(t=bu(e)?e.checked?"true":"false":e.value),e=t,e!==r?(n.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function es(e,n){var r=n.checked;return we({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vl(e,n){var r=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;r=er(n.value!=null?n.value:r),e._wrapperState={initialChecked:t,initialValue:r,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Au(e,n){n=n.checked,n!=null&&Vs(e,"checked",n,!1)}function ns(e,n){Au(e,n);var r=er(n.value),t=n.type;if(r!=null)t==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rs(e,n.type,r):n.hasOwnProperty("defaultValue")&&rs(e,n.type,er(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Kl(e,n,r){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,r||n===e.value||(e.value=n),e.defaultValue=n}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function rs(e,n,r){(n!=="number"||Ni(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ct=Array.isArray;function Dr(e,n,r,t){if(e=e.options,n){n={};for(var i=0;i<r.length;i++)n["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=n.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&t&&(e[r].defaultSelected=!0)}else{for(r=""+er(r),n=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,t&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ts(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return we({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jl(e,n){var r=n.value;if(r==null){if(r=n.children,n=n.defaultValue,r!=null){if(n!=null)throw Error(C(92));if(ct(r)){if(1<r.length)throw Error(C(93));r=r[0]}n=r}n==null&&(n=""),r=n}e._wrapperState={initialValue:er(r)}}function Ru(e,n){var r=er(n.value),t=er(n.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),n.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),t!=null&&(e.defaultValue=""+t)}function Xl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function is(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kt,Mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,r,t,i){MSApp.execUnsafeLocalFunction(function(){return e(n,r,t,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Kt=Kt||document.createElement("div"),Kt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Kt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jt(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(ht).forEach(function(e){jf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),ht[n]=ht[e]})});function Lu(e,n,r){return n==null||typeof n=="boolean"||n===""?"":r||typeof n!="number"||n===0||ht.hasOwnProperty(e)&&ht[e]?(""+n).trim():n+"px"}function Iu(e,n){e=e.style;for(var r in n)if(n.hasOwnProperty(r)){var t=r.indexOf("--")===0,i=Lu(r,n[r],t);r==="float"&&(r="cssFloat"),t?e.setProperty(r,i):e[r]=i}}var kf=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,n){if(n){if(kf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function ss(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function Zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,Br=null,zr=null;function Zl(e){if(e=Wt(e)){if(typeof as!="function")throw Error(C(280));var n=e.stateNode;n&&(n=to(n),as(e.stateNode,e.type,n))}}function Du(e){Br?zr?zr.push(e):zr=[e]:Br=e}function Bu(){if(Br){var e=Br,n=zr;if(zr=Br=null,Zl(e),n)for(e=0;e<n.length;e++)Zl(n[e])}}function zu(e,n){return e(n)}function Fu(){}var jo=!1;function Uu(e,n,r){if(jo)return e(n,r);jo=!0;try{return zu(e,n,r)}finally{jo=!1,(Br!==null||zr!==null)&&(Fu(),Bu())}}function kt(e,n){var r=e.stateNode;if(r===null)return null;var t=to(r);if(t===null)return null;r=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(C(231,n,typeof r));return r}var us=!1;if(Pn)try{var nt={};Object.defineProperty(nt,"passive",{get:function(){us=!0}}),window.addEventListener("test",nt,nt),window.removeEventListener("test",nt,nt)}catch{us=!1}function Ef(e,n,r,t,i,s,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(r,c)}catch(v){this.onError(v)}}var pt=!1,Oi=null,bi=!1,cs=null,Tf={onError:function(e){pt=!0,Oi=e}};function Nf(e,n,r,t,i,s,l,a,u){pt=!1,Oi=null,Ef.apply(Tf,arguments)}function Of(e,n,r,t,i,s,l,a,u){if(Nf.apply(this,arguments),pt){if(pt){var c=Oi;pt=!1,Oi=null}else throw Error(C(198));bi||(bi=!0,cs=c)}}function wr(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Hu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ql(e){if(wr(e)!==e)throw Error(C(188))}function bf(e){var n=e.alternate;if(!n){if(n=wr(e),n===null)throw Error(C(188));return n!==e?null:e}for(var r=e,t=n;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(t=i.return,t!==null){r=t;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return ql(i),e;if(s===t)return ql(i),n;s=s.sibling}throw Error(C(188))}if(r.return!==t.return)r=i,t=s;else{for(var l=!1,a=i.child;a;){if(a===r){l=!0,r=i,t=s;break}if(a===t){l=!0,t=i,r=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===r){l=!0,r=s,t=i;break}if(a===t){l=!0,t=s,r=i;break}a=a.sibling}if(!l)throw Error(C(189))}}if(r.alternate!==t)throw Error(C(190))}if(r.tag!==3)throw Error(C(188));return r.stateNode.current===r?e:n}function $u(e){return e=bf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wu(e);if(n!==null)return n;e=e.sibling}return null}var Yu=rn.unstable_scheduleCallback,ea=rn.unstable_cancelCallback,Cf=rn.unstable_shouldYield,Af=rn.unstable_requestPaint,Ne=rn.unstable_now,Rf=rn.unstable_getCurrentPriorityLevel,qs=rn.unstable_ImmediatePriority,Gu=rn.unstable_UserBlockingPriority,Ci=rn.unstable_NormalPriority,Pf=rn.unstable_LowPriority,Qu=rn.unstable_IdlePriority,qi=null,En=null;function Mf(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Df,Lf=Math.log,If=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Lf(e)/If|0)|0}var Jt=64,Xt=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ai(e,n){var r=e.pendingLanes;if(r===0)return 0;var t=0,i=e.suspendedLanes,s=e.pingedLanes,l=r&268435455;if(l!==0){var a=l&~i;a!==0?t=dt(a):(s&=l,s!==0&&(t=dt(s)))}else l=r&~i,l!==0?t=dt(l):s!==0&&(t=dt(s));if(t===0)return 0;if(n!==0&&n!==t&&!(n&i)&&(i=t&-t,s=n&-n,i>=s||i===16&&(s&4194240)!==0))return n;if(t&4&&(t|=r&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)r=31-yn(n),i=1<<r,t|=e[r],n&=~i;return t}function Bf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,n){for(var r=e.suspendedLanes,t=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-yn(s),a=1<<l,u=i[l];u===-1?(!(a&r)||a&t)&&(i[l]=Bf(a,n)):u<=n&&(e.expiredLanes|=a),s&=~a}}function ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Jt;return Jt<<=1,!(Jt&4194240)&&(Jt=64),e}function ko(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function Ht(e,n,r){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=r}function Ff(e,n){var r=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-yn(r),s=1<<i;n[i]=0,t[i]=-1,e[i]=-1,r&=~s}}function el(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var t=31-yn(r),i=1<<t;i&n|e[t]&n&&(e[t]|=n),r&=~i}}var de=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ju,nl,Xu,Zu,qu,fs=!1,Zt=[],Gn=null,Qn=null,Vn=null,Et=new Map,Tt=new Map,Un=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Et.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(n.pointerId)}}function rt(e,n,r,t,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:r,eventSystemFlags:t,nativeEvent:s,targetContainers:[i]},n!==null&&(n=Wt(n),n!==null&&nl(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Hf(e,n,r,t,i){switch(n){case"focusin":return Gn=rt(Gn,e,n,r,t,i),!0;case"dragenter":return Qn=rt(Qn,e,n,r,t,i),!0;case"mouseover":return Vn=rt(Vn,e,n,r,t,i),!0;case"pointerover":var s=i.pointerId;return Et.set(s,rt(Et.get(s)||null,e,n,r,t,i)),!0;case"gotpointercapture":return s=i.pointerId,Tt.set(s,rt(Tt.get(s)||null,e,n,r,t,i)),!0}return!1}function ec(e){var n=ur(e.target);if(n!==null){var r=wr(n);if(r!==null){if(n=r.tag,n===13){if(n=Hu(r),n!==null){e.blockedOn=n,qu(e.priority,function(){Xu(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=hs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var t=new r.constructor(r.type,r);ls=t,r.target.dispatchEvent(t),ls=null}else return n=Wt(r),n!==null&&nl(n),e.blockedOn=r,!1;n.shift()}return!0}function ra(e,n,r){vi(e)&&r.delete(n)}function $f(){fs=!1,Gn!==null&&vi(Gn)&&(Gn=null),Qn!==null&&vi(Qn)&&(Qn=null),Vn!==null&&vi(Vn)&&(Vn=null),Et.forEach(ra),Tt.forEach(ra)}function tt(e,n){e.blockedOn===n&&(e.blockedOn=null,fs||(fs=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,$f)))}function Nt(e){function n(i){return tt(i,e)}if(0<Zt.length){tt(Zt[0],e);for(var r=1;r<Zt.length;r++){var t=Zt[r];t.blockedOn===e&&(t.blockedOn=null)}}for(Gn!==null&&tt(Gn,e),Qn!==null&&tt(Qn,e),Vn!==null&&tt(Vn,e),Et.forEach(n),Tt.forEach(n),r=0;r<Un.length;r++)t=Un[r],t.blockedOn===e&&(t.blockedOn=null);for(;0<Un.length&&(r=Un[0],r.blockedOn===null);)ec(r),r.blockedOn===null&&Un.shift()}var Fr=Dn.ReactCurrentBatchConfig,Ri=!0;function Wf(e,n,r,t){var i=de,s=Fr.transition;Fr.transition=null;try{de=1,rl(e,n,r,t)}finally{de=i,Fr.transition=s}}function Yf(e,n,r,t){var i=de,s=Fr.transition;Fr.transition=null;try{de=4,rl(e,n,r,t)}finally{de=i,Fr.transition=s}}function rl(e,n,r,t){if(Ri){var i=hs(e,n,r,t);if(i===null)Mo(e,n,t,Pi,r),na(e,t);else if(Hf(i,e,n,r,t))t.stopPropagation();else if(na(e,t),n&4&&-1<Uf.indexOf(e)){for(;i!==null;){var s=Wt(i);if(s!==null&&Ju(s),s=hs(e,n,r,t),s===null&&Mo(e,n,t,Pi,r),s===i)break;i=s}i!==null&&t.stopPropagation()}else Mo(e,n,t,null,r)}}var Pi=null;function hs(e,n,r,t){if(Pi=null,e=Zs(t),e=ur(e),e!==null)if(n=wr(e),n===null)e=null;else if(r=n.tag,r===13){if(e=Hu(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pi=e,null}function nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case qs:return 1;case Gu:return 4;case Ci:case Pf:return 16;case Qu:return 536870912;default:return 16}default:return 16}}var $n=null,tl=null,yi=null;function rc(){if(yi)return yi;var e,n=tl,r=n.length,t,i="value"in $n?$n.value:$n.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var l=r-e;for(t=1;t<=l&&n[r-t]===i[s-t];t++);return yi=i.slice(e,1<t?1-t:void 0)}function xi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qt(){return!0}function ta(){return!1}function on(e){function n(r,t,i,s,l){this._reactName=r,this._targetInst=i,this.type=t,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qt:ta,this.isPropagationStopped=ta,this}return we(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),n}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=on(Zr),$t=we({},Zr,{view:0,detail:0}),Gf=on($t),Eo,To,it,eo=we({},$t,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==it&&(it&&e.type==="mousemove"?(Eo=e.screenX-it.screenX,To=e.screenY-it.screenY):To=Eo=0,it=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:To}}),ia=on(eo),Qf=we({},eo,{dataTransfer:0}),Vf=on(Qf),Kf=we({},$t,{relatedTarget:0}),No=on(Kf),Jf=we({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xf=on(Jf),Zf=we({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=on(Zf),eh=we({},Zr,{data:0}),oa=on(eh),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=th[e])?!!n[e]:!1}function ol(){return ih}var oh=we({},$t,{key:function(e){if(e.key){var n=nh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=on(oh),lh=we({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=on(lh),ah=we({},$t,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),uh=on(ah),ch=we({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dh=on(ch),fh=we({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hh=on(fh),ph=[9,13,27,32],sl=Pn&&"CompositionEvent"in window,gt=null;Pn&&"documentMode"in document&&(gt=document.documentMode);var gh=Pn&&"TextEvent"in window&&!gt,tc=Pn&&(!sl||gt&&8<gt&&11>=gt),la=" ",aa=!1;function ic(e,n){switch(e){case"keyup":return ph.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function mh(e,n){switch(e){case"compositionend":return oc(n);case"keypress":return n.which!==32?null:(aa=!0,la);case"textInput":return e=n.data,e===la&&aa?null:e;default:return null}}function vh(e,n){if(Nr)return e==="compositionend"||!sl&&ic(e,n)?(e=rc(),yi=tl=$n=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tc&&n.locale!=="ko"?null:n.data;default:return null}}var yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yh[e.type]:n==="textarea"}function sc(e,n,r,t){Du(t),n=Mi(n,"onChange"),0<n.length&&(r=new il("onChange","change",null,r,t),e.push({event:r,listeners:n}))}var mt=null,Ot=null;function xh(e){vc(e,0)}function no(e){var n=Cr(e);if(Cu(n))return e}function _h(e,n){if(e==="change")return n}var lc=!1;if(Pn){var Oo;if(Pn){var bo="oninput"in document;if(!bo){var ca=document.createElement("div");ca.setAttribute("oninput","return;"),bo=typeof ca.oninput=="function"}Oo=bo}else Oo=!1;lc=Oo&&(!document.documentMode||9<document.documentMode)}function da(){mt&&(mt.detachEvent("onpropertychange",ac),Ot=mt=null)}function ac(e){if(e.propertyName==="value"&&no(Ot)){var n=[];sc(n,Ot,e,Zs(e)),Uu(xh,n)}}function wh(e,n,r){e==="focusin"?(da(),mt=n,Ot=r,mt.attachEvent("onpropertychange",ac)):e==="focusout"&&da()}function Sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return no(Ot)}function jh(e,n){if(e==="click")return no(n)}function kh(e,n){if(e==="input"||e==="change")return no(n)}function Eh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Eh;function bt(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var i=r[t];if(!Ko.call(n,i)||!_n(e[i],n[i]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,n){var r=fa(e);e=0;for(var t;r;){if(r.nodeType===3){if(t=e+r.textContent.length,e<=n&&t>=n)return{node:r,offset:n-e};e=t}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fa(r)}}function uc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?uc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cc(){for(var e=window,n=Ni();n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Ni(e.document)}return n}function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Th(e){var n=cc(),r=e.focusedElem,t=e.selectionRange;if(n!==r&&r&&r.ownerDocument&&uc(r.ownerDocument.documentElement,r)){if(t!==null&&ll(r)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in r)r.selectionStart=n,r.selectionEnd=Math.min(e,r.value.length);else if(e=(n=r.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(t.start,i);t=t.end===void 0?s:Math.min(t.end,i),!e.extend&&s>t&&(i=t,t=s,s=i),i=ha(r,s);var l=ha(r,t);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),s>t?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=r;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<n.length;r++)e=n[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nh=Pn&&"documentMode"in document&&11>=document.documentMode,Or=null,ps=null,vt=null,gs=!1;function pa(e,n,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;gs||Or==null||Or!==Ni(t)||(t=Or,"selectionStart"in t&&ll(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),vt&&bt(vt,t)||(vt=t,t=Mi(ps,"onSelect"),0<t.length&&(n=new il("onSelect","select",null,n,r),e.push({event:n,listeners:t}),n.target=Or)))}function ei(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var br={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Co={},dc={};Pn&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function ro(e){if(Co[e])return Co[e];if(!br[e])return e;var n=br[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in dc)return Co[e]=n[r];return e}var fc=ro("animationend"),hc=ro("animationiteration"),pc=ro("animationstart"),gc=ro("transitionend"),mc=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,n){mc.set(e,n),_r(n,[e])}for(var Ao=0;Ao<ga.length;Ao++){var Ro=ga[Ao],Oh=Ro.toLowerCase(),bh=Ro[0].toUpperCase()+Ro.slice(1);rr(Oh,"on"+bh)}rr(fc,"onAnimationEnd");rr(hc,"onAnimationIteration");rr(pc,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(gc,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ft="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ch=new Set("cancel close invalid load scroll toggle".split(" ").concat(ft));function ma(e,n,r){var t=e.type||"unknown-event";e.currentTarget=r,Of(t,n,void 0,e),e.currentTarget=null}function vc(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var t=e[r],i=t.event;t=t.listeners;e:{var s=void 0;if(n)for(var l=t.length-1;0<=l;l--){var a=t[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ma(i,a,c),s=u}else for(l=0;l<t.length;l++){if(a=t[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ma(i,a,c),s=u}}}if(bi)throw e=cs,bi=!1,cs=null,e}function ge(e,n){var r=n[_s];r===void 0&&(r=n[_s]=new Set);var t=e+"__bubble";r.has(t)||(yc(n,e,2,!1),r.add(t))}function Po(e,n,r){var t=0;n&&(t|=4),yc(r,e,t,n)}var ni="_reactListening"+Math.random().toString(36).slice(2);function Ct(e){if(!e[ni]){e[ni]=!0,Eu.forEach(function(r){r!=="selectionchange"&&(Ch.has(r)||Po(r,!1,e),Po(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ni]||(n[ni]=!0,Po("selectionchange",!1,n))}}function yc(e,n,r,t){switch(nc(n)){case 1:var i=Wf;break;case 4:i=Yf;break;default:i=rl}r=i.bind(null,n,r,e),i=void 0,!us||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),t?i!==void 0?e.addEventListener(n,r,{capture:!0,passive:i}):e.addEventListener(n,r,!0):i!==void 0?e.addEventListener(n,r,{passive:i}):e.addEventListener(n,r,!1)}function Mo(e,n,r,t,i){var s=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var a=t.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=t.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=ur(a),l===null)return;if(u=l.tag,u===5||u===6){t=s=l;continue e}a=a.parentNode}}t=t.return}Uu(function(){var c=s,v=Zs(r),y=[];e:{var p=mc.get(e);if(p!==void 0){var m=il,_=e;switch(e){case"keypress":if(xi(r)===0)break e;case"keydown":case"keyup":m=sh;break;case"focusin":_="focus",m=No;break;case"focusout":_="blur",m=No;break;case"beforeblur":case"afterblur":m=No;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=uh;break;case fc:case hc:case pc:m=Xf;break;case gc:m=dh;break;case"scroll":m=Gf;break;case"wheel":m=hh;break;case"copy":case"cut":case"paste":m=qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=sa}var S=(n&4)!==0,b=!S&&e==="scroll",f=S?p!==null?p+"Capture":null:p;S=[];for(var d=c,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,f!==null&&(w=kt(d,f),w!=null&&S.push(At(d,w,h)))),b)break;d=d.return}0<S.length&&(p=new m(p,_,null,r,v),y.push({event:p,listeners:S}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&r!==ls&&(_=r.relatedTarget||r.fromElement)&&(ur(_)||_[Mn]))break e;if((m||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,m?(_=r.relatedTarget||r.toElement,m=c,_=_?ur(_):null,_!==null&&(b=wr(_),_!==b||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=ia,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=sa,w="onPointerLeave",f="onPointerEnter",d="pointer"),b=m==null?p:Cr(m),h=_==null?p:Cr(_),p=new S(w,d+"leave",m,r,v),p.target=b,p.relatedTarget=h,w=null,ur(v)===c&&(S=new S(f,d+"enter",_,r,v),S.target=h,S.relatedTarget=b,w=S),b=w,m&&_)n:{for(S=m,f=_,d=0,h=S;h;h=jr(h))d++;for(h=0,w=f;w;w=jr(w))h++;for(;0<d-h;)S=jr(S),d--;for(;0<h-d;)f=jr(f),h--;for(;d--;){if(S===f||f!==null&&S===f.alternate)break n;S=jr(S),f=jr(f)}S=null}else S=null;m!==null&&va(y,p,m,S,!1),_!==null&&b!==null&&va(y,b,_,S,!0)}}e:{if(p=c?Cr(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=_h;else if(ua(p))if(lc)k=kh;else{k=Sh;var E=wh}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=jh);if(k&&(k=k(e,c))){sc(y,k,r,v);break e}E&&E(e,p,c),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&rs(p,"number",p.value)}switch(E=c?Cr(c):window,e){case"focusin":(ua(E)||E.contentEditable==="true")&&(Or=E,ps=c,vt=null);break;case"focusout":vt=ps=Or=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,pa(y,r,v);break;case"selectionchange":if(Nh)break;case"keydown":case"keyup":pa(y,r,v)}var T;if(sl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nr?ic(e,r)&&(P="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(P="onCompositionStart");P&&(tc&&r.locale!=="ko"&&(Nr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nr&&(T=rc()):($n=v,tl="value"in $n?$n.value:$n.textContent,Nr=!0)),E=Mi(c,P),0<E.length&&(P=new oa(P,e,null,r,v),y.push({event:P,listeners:E}),T?P.data=T:(T=oc(r),T!==null&&(P.data=T)))),(T=gh?mh(e,r):vh(e,r))&&(c=Mi(c,"onBeforeInput"),0<c.length&&(v=new oa("onBeforeInput","beforeinput",null,r,v),y.push({event:v,listeners:c}),v.data=T))}vc(y,n)})}function At(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Mi(e,n){for(var r=n+"Capture",t=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=kt(e,r),s!=null&&t.unshift(At(e,s,i)),s=kt(e,n),s!=null&&t.push(At(e,s,i))),e=e.return}return t}function jr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function va(e,n,r,t,i){for(var s=n._reactName,l=[];r!==null&&r!==t;){var a=r,u=a.alternate,c=a.stateNode;if(u!==null&&u===t)break;a.tag===5&&c!==null&&(a=c,i?(u=kt(r,s),u!=null&&l.unshift(At(r,u,a))):i||(u=kt(r,s),u!=null&&l.push(At(r,u,a)))),r=r.return}l.length!==0&&e.push({event:n,listeners:l})}var Ah=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(Ah,`
`).replace(Rh,"")}function ri(e,n,r){if(n=ya(n),ya(e)!==n&&r)throw Error(C(425))}function Li(){}var ms=null,vs=null;function ys(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(Lh)}:xs;function Lh(e){setTimeout(function(){throw e})}function Lo(e,n){var r=n,t=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(t===0){e.removeChild(i),Nt(n);return}t--}else r!=="$"&&r!=="$?"&&r!=="$!"||t++;r=i}while(r);Nt(n)}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _a(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),kn="__reactFiber$"+qr,Rt="__reactProps$"+qr,Mn="__reactContainer$"+qr,_s="__reactEvents$"+qr,Ih="__reactListeners$"+qr,Dh="__reactHandles$"+qr;function ur(e){var n=e[kn];if(n)return n;for(var r=e.parentNode;r;){if(n=r[Mn]||r[kn]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=_a(e);e!==null;){if(r=e[kn])return r;e=_a(e)}return n}e=r,r=e.parentNode}return null}function Wt(e){return e=e[kn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function to(e){return e[Rt]||null}var ws=[],Ar=-1;function tr(e){return{current:e}}function me(e){0>Ar||(e.current=ws[Ar],ws[Ar]=null,Ar--)}function pe(e,n){Ar++,ws[Ar]=e.current,e.current=n}var nr={},Ue=tr(nr),Ke=tr(!1),gr=nr;function Wr(e,n){var r=e.type.contextTypes;if(!r)return nr;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=n[s];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Je(e){return e=e.childContextTypes,e!=null}function Ii(){me(Ke),me(Ue)}function wa(e,n,r){if(Ue.current!==nr)throw Error(C(168));pe(Ue,n),pe(Ke,r)}function xc(e,n,r){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return r;t=t.getChildContext();for(var i in t)if(!(i in n))throw Error(C(108,wf(e)||"Unknown",i));return we({},r,t)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nr,gr=Ue.current,pe(Ue,e),pe(Ke,Ke.current),!0}function Sa(e,n,r){var t=e.stateNode;if(!t)throw Error(C(169));r?(e=xc(e,n,gr),t.__reactInternalMemoizedMergedChildContext=e,me(Ke),me(Ue),pe(Ue,e)):me(Ke),pe(Ke,r)}var bn=null,io=!1,Io=!1;function _c(e){bn===null?bn=[e]:bn.push(e)}function Bh(e){io=!0,_c(e)}function ir(){if(!Io&&bn!==null){Io=!0;var e=0,n=de;try{var r=bn;for(de=1;e<r.length;e++){var t=r[e];do t=t(!0);while(t!==null)}bn=null,io=!1}catch(i){throw bn!==null&&(bn=bn.slice(e+1)),Yu(qs,ir),i}finally{de=n,Io=!1}}return null}var Rr=[],Pr=0,Bi=null,zi=0,sn=[],ln=0,mr=null,Cn=1,An="";function lr(e,n){Rr[Pr++]=zi,Rr[Pr++]=Bi,Bi=e,zi=n}function wc(e,n,r){sn[ln++]=Cn,sn[ln++]=An,sn[ln++]=mr,mr=e;var t=Cn;e=An;var i=32-yn(t)-1;t&=~(1<<i),r+=1;var s=32-yn(n)+i;if(30<s){var l=i-i%5;s=(t&(1<<l)-1).toString(32),t>>=l,i-=l,Cn=1<<32-yn(n)+i|r<<i|t,An=s+e}else Cn=1<<s|r<<i|t,An=e}function al(e){e.return!==null&&(lr(e,1),wc(e,1,0))}function ul(e){for(;e===Bi;)Bi=Rr[--Pr],Rr[Pr]=null,zi=Rr[--Pr],Rr[Pr]=null;for(;e===mr;)mr=sn[--ln],sn[ln]=null,An=sn[--ln],sn[ln]=null,Cn=sn[--ln],sn[ln]=null}var nn=null,qe=null,ve=!1,vn=null;function Sc(e,n){var r=an(5,null,null,0);r.elementType="DELETED",r.stateNode=n,r.return=e,n=e.deletions,n===null?(e.deletions=[r],e.flags|=16):n.push(r)}function ja(e,n){switch(e.tag){case 5:var r=e.type;return n=n.nodeType!==1||r.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,nn=e,qe=Kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,nn=e,qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(r=mr!==null?{id:Cn,overflow:An}:null,e.memoizedState={dehydrated:n,treeContext:r,retryLane:1073741824},r=an(18,null,null,0),r.stateNode=n,r.return=e,e.child=r,nn=e,qe=null,!0):!1;default:return!1}}function Ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function js(e){if(ve){var n=qe;if(n){var r=n;if(!ja(e,n)){if(Ss(e))throw Error(C(418));n=Kn(r.nextSibling);var t=nn;n&&ja(e,n)?Sc(t,r):(e.flags=e.flags&-4097|2,ve=!1,nn=e)}}else{if(Ss(e))throw Error(C(418));e.flags=e.flags&-4097|2,ve=!1,nn=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function ti(e){if(e!==nn)return!1;if(!ve)return ka(e),ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ys(e.type,e.memoizedProps)),n&&(n=qe)){if(Ss(e))throw jc(),Error(C(418));for(;n;)Sc(e,n),n=Kn(n.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(n===0){qe=Kn(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++}e=e.nextSibling}qe=null}}else qe=nn?Kn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=qe;e;)e=Kn(e.nextSibling)}function Yr(){qe=nn=null,ve=!1}function cl(e){vn===null?vn=[e]:vn.push(e)}var zh=Dn.ReactCurrentBatchConfig;function gn(e,n){if(e&&e.defaultProps){n=we({},n),e=e.defaultProps;for(var r in e)n[r]===void 0&&(n[r]=e[r]);return n}return n}var Fi=tr(null),Ui=null,Mr=null,dl=null;function fl(){dl=Mr=Ui=null}function hl(e){var n=Fi.current;me(Fi),e._currentValue=n}function ks(e,n,r){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===r)break;e=e.return}}function Ur(e,n){Ui=e,dl=Mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ve=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(dl!==e)if(e={context:e,memoizedValue:n,next:null},Mr===null){if(Ui===null)throw Error(C(308));Mr=e,Ui.dependencies={lanes:0,firstContext:e}}else Mr=Mr.next=e;return n}var cr=null;function pl(e){cr===null?cr=[e]:cr.push(e)}function kc(e,n,r,t){var i=n.interleaved;return i===null?(r.next=r,pl(n)):(r.next=i.next,i.next=r),n.interleaved=r,Ln(e,t)}function Ln(e,n){e.lanes|=n;var r=e.alternate;for(r!==null&&(r.lanes|=n),r=e,e=e.return;e!==null;)e.childLanes|=n,r=e.alternate,r!==null&&(r.childLanes|=n),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Fn=!1;function gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Jn(e,n,r){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,se&2){var i=t.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n,Ln(e,r)}return i=t.interleaved,i===null?(n.next=n,pl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ln(e,r)}function _i(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,el(e,r)}}function Ea(e,n){var r=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=l:s=s.next=l,r=r.next}while(r!==null);s===null?i=s=n:s=s.next=n}else i=s=n;r={baseState:t.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:t.shared,effects:t.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}function Hi(e,n,r,t){var i=e.updateQueue;Fn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?s=c:l.next=c,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;l=0,v=c=u=null,a=s;do{var p=a.lane,m=a.eventTime;if((t&p)===p){v!==null&&(v=v.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,S=a;switch(p=n,m=r,S.tag){case 1:if(_=S.payload,typeof _=="function"){y=_.call(m,y,p);break e}y=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,p=typeof _=="function"?_.call(m,y,p):_,p==null)break e;y=we({},y,p);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=m,u=y):v=v.next=m,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(v===null&&(u=y),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else s===null&&(i.shared.lanes=0);yr|=l,e.lanes=l,e.memoizedState=y}}function Ta(e,n,r){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],i=t.callback;if(i!==null){if(t.callback=null,t=r,typeof i!="function")throw Error(C(191,i));i.call(t)}}}var Tc=new ku.Component().refs;function Es(e,n,r,t){n=e.memoizedState,r=r(t,n),r=r==null?n:we({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var oo={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var t=We(),i=Zn(e),s=Rn(t,i);s.payload=n,r!=null&&(s.callback=r),n=Jn(e,s,i),n!==null&&(xn(n,e,i,t),_i(n,e,i))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var t=We(),i=Zn(e),s=Rn(t,i);s.tag=1,s.payload=n,r!=null&&(s.callback=r),n=Jn(e,s,i),n!==null&&(xn(n,e,i,t),_i(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=We(),t=Zn(e),i=Rn(r,t);i.tag=2,n!=null&&(i.callback=n),n=Jn(e,i,t),n!==null&&(xn(n,e,t,r),_i(n,e,t))}};function Na(e,n,r,t,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,s,l):n.prototype&&n.prototype.isPureReactComponent?!bt(r,t)||!bt(i,s):!0}function Nc(e,n,r){var t=!1,i=nr,s=n.contextType;return typeof s=="object"&&s!==null?s=cn(s):(i=Je(n)?gr:Ue.current,t=n.contextTypes,s=(t=t!=null)?Wr(e,i):nr),n=new n(r,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=oo,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),n}function Oa(e,n,r,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,t),n.state!==e&&oo.enqueueReplaceState(n,n.state,null)}function Ts(e,n,r,t){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=Tc,gl(e);var s=n.contextType;typeof s=="object"&&s!==null?i.context=cn(s):(s=Je(n)?gr:Ue.current,i.context=Wr(e,s)),i.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Es(e,n,s,r),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&oo.enqueueReplaceState(i,i.state,null),Hi(e,r,i,t),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ot(e,n,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(C(309));var t=r.stateNode}if(!t)throw Error(C(147,e));var i=t,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(l){var a=i.refs;a===Tc&&(a=i.refs={}),l===null?delete a[s]:a[s]=l},n._stringRef=s,n)}if(typeof e!="string")throw Error(C(284));if(!r._owner)throw Error(C(290,e))}return e}function ii(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ba(e){var n=e._init;return n(e._payload)}function Oc(e){function n(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function t(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=qn(f,d),f.index=0,f.sibling=null,f}function s(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,h,w){return d===null||d.tag!==6?(d=$o(h,f.mode,w),d.return=f,d):(d=i(d,h),d.return=f,d)}function u(f,d,h,w){var k=h.type;return k===Tr?v(f,d,h.props.children,w,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&ba(k)===d.type)?(w=i(d,h.props),w.ref=ot(f,d,h),w.return=f,w):(w=Ti(h.type,h.key,h.props,null,f.mode,w),w.ref=ot(f,d,h),w.return=f,w)}function c(f,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=Wo(h,f.mode,w),d.return=f,d):(d=i(d,h.children||[]),d.return=f,d)}function v(f,d,h,w,k){return d===null||d.tag!==7?(d=hr(h,f.mode,w,k),d.return=f,d):(d=i(d,h),d.return=f,d)}function y(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$o(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qt:return h=Ti(d.type,d.key,d.props,null,f.mode,h),h.ref=ot(f,null,d),h.return=f,h;case Er:return d=Wo(d,f.mode,h),d.return=f,d;case zn:var w=d._init;return y(f,w(d._payload),h)}if(ct(d)||et(d))return d=hr(d,f.mode,h,null),d.return=f,d;ii(f,d)}return null}function p(f,d,h,w){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(f,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Qt:return h.key===k?u(f,d,h,w):null;case Er:return h.key===k?c(f,d,h,w):null;case zn:return k=h._init,p(f,d,k(h._payload),w)}if(ct(h)||et(h))return k!==null?null:v(f,d,h,w,null);ii(f,h)}return null}function m(f,d,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(h)||null,a(d,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Qt:return f=f.get(w.key===null?h:w.key)||null,u(d,f,w,k);case Er:return f=f.get(w.key===null?h:w.key)||null,c(d,f,w,k);case zn:var E=w._init;return m(f,d,h,E(w._payload),k)}if(ct(w)||et(w))return f=f.get(h)||null,v(d,f,w,k,null);ii(d,w)}return null}function _(f,d,h,w){for(var k=null,E=null,T=d,P=d=0,N=null;T!==null&&P<h.length;P++){T.index>P?(N=T,T=null):N=T.sibling;var L=p(f,T,h[P],w);if(L===null){T===null&&(T=N);break}e&&T&&L.alternate===null&&n(f,T),d=s(L,d,P),E===null?k=L:E.sibling=L,E=L,T=N}if(P===h.length)return r(f,T),ve&&lr(f,P),k;if(T===null){for(;P<h.length;P++)T=y(f,h[P],w),T!==null&&(d=s(T,d,P),E===null?k=T:E.sibling=T,E=T);return ve&&lr(f,P),k}for(T=t(f,T);P<h.length;P++)N=m(T,f,P,h[P],w),N!==null&&(e&&N.alternate!==null&&T.delete(N.key===null?P:N.key),d=s(N,d,P),E===null?k=N:E.sibling=N,E=N);return e&&T.forEach(function(Y){return n(f,Y)}),ve&&lr(f,P),k}function S(f,d,h,w){var k=et(h);if(typeof k!="function")throw Error(C(150));if(h=k.call(h),h==null)throw Error(C(151));for(var E=k=null,T=d,P=d=0,N=null,L=h.next();T!==null&&!L.done;P++,L=h.next()){T.index>P?(N=T,T=null):N=T.sibling;var Y=p(f,T,L.value,w);if(Y===null){T===null&&(T=N);break}e&&T&&Y.alternate===null&&n(f,T),d=s(Y,d,P),E===null?k=Y:E.sibling=Y,E=Y,T=N}if(L.done)return r(f,T),ve&&lr(f,P),k;if(T===null){for(;!L.done;P++,L=h.next())L=y(f,L.value,w),L!==null&&(d=s(L,d,P),E===null?k=L:E.sibling=L,E=L);return ve&&lr(f,P),k}for(T=t(f,T);!L.done;P++,L=h.next())L=m(T,f,P,L.value,w),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?P:L.key),d=s(L,d,P),E===null?k=L:E.sibling=L,E=L);return e&&T.forEach(function(Q){return n(f,Q)}),ve&&lr(f,P),k}function b(f,d,h,w){if(typeof h=="object"&&h!==null&&h.type===Tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Qt:e:{for(var k=h.key,E=d;E!==null;){if(E.key===k){if(k=h.type,k===Tr){if(E.tag===7){r(f,E.sibling),d=i(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===zn&&ba(k)===E.type){r(f,E.sibling),d=i(E,h.props),d.ref=ot(f,E,h),d.return=f,f=d;break e}r(f,E);break}else n(f,E);E=E.sibling}h.type===Tr?(d=hr(h.props.children,f.mode,w,h.key),d.return=f,f=d):(w=Ti(h.type,h.key,h.props,null,f.mode,w),w.ref=ot(f,d,h),w.return=f,f=w)}return l(f);case Er:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){r(f,d.sibling),d=i(d,h.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else n(f,d);d=d.sibling}d=Wo(h,f.mode,w),d.return=f,f=d}return l(f);case zn:return E=h._init,b(f,d,E(h._payload),w)}if(ct(h))return _(f,d,h,w);if(et(h))return S(f,d,h,w);ii(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(r(f,d.sibling),d=i(d,h),d.return=f,f=d):(r(f,d),d=$o(h,f.mode,w),d.return=f,f=d),l(f)):r(f,d)}return b}var Gr=Oc(!0),bc=Oc(!1),Yt={},Tn=tr(Yt),Pt=tr(Yt),Mt=tr(Yt);function dr(e){if(e===Yt)throw Error(C(174));return e}function ml(e,n){switch(pe(Mt,n),pe(Pt,e),pe(Tn,Yt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:is(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=is(n,e)}me(Tn),pe(Tn,n)}function Qr(){me(Tn),me(Pt),me(Mt)}function Cc(e){dr(Mt.current);var n=dr(Tn.current),r=is(n,e.type);n!==r&&(pe(Pt,e),pe(Tn,r))}function vl(e){Pt.current===e&&(me(Tn),me(Pt))}var xe=tr(0);function $i(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Do=[];function yl(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var wi=Dn.ReactCurrentDispatcher,Bo=Dn.ReactCurrentBatchConfig,vr=0,_e=null,be=null,Ae=null,Wi=!1,yt=!1,Lt=0,Fh=0;function Be(){throw Error(C(321))}function xl(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!_n(e[r],n[r]))return!1;return!0}function _l(e,n,r,t,i,s){if(vr=s,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wi.current=e===null||e.memoizedState===null?Wh:Yh,e=r(t,i),yt){s=0;do{if(yt=!1,Lt=0,25<=s)throw Error(C(301));s+=1,Ae=be=null,n.updateQueue=null,wi.current=Gh,e=r(t,i)}while(yt)}if(wi.current=Yi,n=be!==null&&be.next!==null,vr=0,Ae=be=_e=null,Wi=!1,n)throw Error(C(300));return e}function wl(){var e=Lt!==0;return Lt=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?_e.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function dn(){if(be===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var n=Ae===null?_e.memoizedState:Ae.next;if(n!==null)Ae=n,be=e;else{if(e===null)throw Error(C(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ae===null?_e.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function It(e,n){return typeof n=="function"?n(e):n}function zo(e){var n=dn(),r=n.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var t=be,i=t.baseQueue,s=r.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}t.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,t=t.baseState;var a=l=null,u=null,c=s;do{var v=c.lane;if((vr&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),t=c.hasEagerState?c.eagerState:e(t,c.action);else{var y={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=y,l=t):u=u.next=y,_e.lanes|=v,yr|=v}c=c.next}while(c!==null&&c!==s);u===null?l=t:u.next=a,_n(t,n.memoizedState)||(Ve=!0),n.memoizedState=t,n.baseState=l,n.baseQueue=u,r.lastRenderedState=t}if(e=r.interleaved,e!==null){i=e;do s=i.lane,_e.lanes|=s,yr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[n.memoizedState,r.dispatch]}function Fo(e){var n=dn(),r=n.queue;if(r===null)throw Error(C(311));r.lastRenderedReducer=e;var t=r.dispatch,i=r.pending,s=n.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);_n(s,n.memoizedState)||(Ve=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),r.lastRenderedState=s}return[s,t]}function Ac(){}function Rc(e,n){var r=_e,t=dn(),i=n(),s=!_n(t.memoizedState,i);if(s&&(t.memoizedState=i,Ve=!0),t=t.queue,Sl(Lc.bind(null,r,t,e),[e]),t.getSnapshot!==n||s||Ae!==null&&Ae.memoizedState.tag&1){if(r.flags|=2048,Dt(9,Mc.bind(null,r,t,i,n),void 0,null),Re===null)throw Error(C(349));vr&30||Pc(r,n,i)}return i}function Pc(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Mc(e,n,r,t){n.value=r,n.getSnapshot=t,Ic(n)&&Dc(e)}function Lc(e,n,r){return r(function(){Ic(n)&&Dc(e)})}function Ic(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!_n(e,r)}catch{return!0}}function Dc(e){var n=Ln(e,1);n!==null&&xn(n,e,1,-1)}function Ca(e){var n=jn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:It,lastRenderedState:e},n.queue=e,e=e.dispatch=$h.bind(null,_e,e),[n.memoizedState,e]}function Dt(e,n,r,t){return e={tag:e,create:n,destroy:r,deps:t,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(r=n.lastEffect,r===null?n.lastEffect=e.next=e:(t=r.next,r.next=e,e.next=t,n.lastEffect=e)),e}function Bc(){return dn().memoizedState}function Si(e,n,r,t){var i=jn();_e.flags|=e,i.memoizedState=Dt(1|n,r,void 0,t===void 0?null:t)}function so(e,n,r,t){var i=dn();t=t===void 0?null:t;var s=void 0;if(be!==null){var l=be.memoizedState;if(s=l.destroy,t!==null&&xl(t,l.deps)){i.memoizedState=Dt(n,r,s,t);return}}_e.flags|=e,i.memoizedState=Dt(1|n,r,s,t)}function Aa(e,n){return Si(8390656,8,e,n)}function Sl(e,n){return so(2048,8,e,n)}function zc(e,n){return so(4,2,e,n)}function Fc(e,n){return so(4,4,e,n)}function Uc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hc(e,n,r){return r=r!=null?r.concat([e]):null,so(4,4,Uc.bind(null,n,e),r)}function jl(){}function $c(e,n){var r=dn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&xl(n,t[1])?t[0]:(r.memoizedState=[e,n],e)}function Wc(e,n){var r=dn();n=n===void 0?null:n;var t=r.memoizedState;return t!==null&&n!==null&&xl(n,t[1])?t[0]:(e=e(),r.memoizedState=[e,n],e)}function Yc(e,n,r){return vr&21?(_n(r,n)||(r=Vu(),_e.lanes|=r,yr|=r,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=r)}function Uh(e,n){var r=de;de=r!==0&&4>r?r:4,e(!0);var t=Bo.transition;Bo.transition={};try{e(!1),n()}finally{de=r,Bo.transition=t}}function Gc(){return dn().memoizedState}function Hh(e,n,r){var t=Zn(e);if(r={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null},Qc(e))Vc(n,r);else if(r=kc(e,n,r,t),r!==null){var i=We();xn(r,e,t,i),Kc(r,n,t)}}function $h(e,n,r){var t=Zn(e),i={lane:t,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Vc(n,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var l=n.lastRenderedState,a=s(l,r);if(i.hasEagerState=!0,i.eagerState=a,_n(a,l)){var u=n.interleaved;u===null?(i.next=i,pl(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}r=kc(e,n,i,t),r!==null&&(i=We(),xn(r,e,t,i),Kc(r,n,t))}}function Qc(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Vc(e,n){yt=Wi=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Kc(e,n,r){if(r&4194240){var t=n.lanes;t&=e.pendingLanes,r|=t,n.lanes=r,el(e,r)}}var Yi={readContext:cn,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},Wh={readContext:cn,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:Aa,useImperativeHandle:function(e,n,r){return r=r!=null?r.concat([e]):null,Si(4194308,4,Uc.bind(null,n,e),r)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var r=jn();return n=n===void 0?null:n,e=e(),r.memoizedState=[e,n],e},useReducer:function(e,n,r){var t=jn();return n=r!==void 0?r(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=Hh.bind(null,_e,e),[t.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:Ca,useDebugValue:jl,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=Ca(!1),n=e[0];return e=Uh.bind(null,e[1]),jn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,r){var t=_e,i=jn();if(ve){if(r===void 0)throw Error(C(407));r=r()}else{if(r=n(),Re===null)throw Error(C(349));vr&30||Pc(t,n,r)}i.memoizedState=r;var s={value:r,getSnapshot:n};return i.queue=s,Aa(Lc.bind(null,t,s,e),[e]),t.flags|=2048,Dt(9,Mc.bind(null,t,s,r,n),void 0,null),r},useId:function(){var e=jn(),n=Re.identifierPrefix;if(ve){var r=An,t=Cn;r=(t&~(1<<32-yn(t)-1)).toString(32)+r,n=":"+n+"R"+r,r=Lt++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=Fh++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Yh={readContext:cn,useCallback:$c,useContext:cn,useEffect:Sl,useImperativeHandle:Hc,useInsertionEffect:zc,useLayoutEffect:Fc,useMemo:Wc,useReducer:zo,useRef:Bc,useState:function(){return zo(It)},useDebugValue:jl,useDeferredValue:function(e){var n=dn();return Yc(n,be.memoizedState,e)},useTransition:function(){var e=zo(It)[0],n=dn().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Rc,useId:Gc,unstable_isNewReconciler:!1},Gh={readContext:cn,useCallback:$c,useContext:cn,useEffect:Sl,useImperativeHandle:Hc,useInsertionEffect:zc,useLayoutEffect:Fc,useMemo:Wc,useReducer:Fo,useRef:Bc,useState:function(){return Fo(It)},useDebugValue:jl,useDeferredValue:function(e){var n=dn();return be===null?n.memoizedState=e:Yc(n,be.memoizedState,e)},useTransition:function(){var e=Fo(It)[0],n=dn().memoizedState;return[e,n]},useMutableSource:Ac,useSyncExternalStore:Rc,useId:Gc,unstable_isNewReconciler:!1};function Vr(e,n){try{var r="",t=n;do r+=_f(t),t=t.return;while(t);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:i,digest:null}}function Uo(e,n,r){return{value:e,source:null,stack:r??null,digest:n??null}}function Ns(e,n){try{console.error(n.value)}catch(r){setTimeout(function(){throw r})}}var Qh=typeof WeakMap=="function"?WeakMap:Map;function Jc(e,n,r){r=Rn(-1,r),r.tag=3,r.payload={element:null};var t=n.value;return r.callback=function(){Qi||(Qi=!0,Ds=t),Ns(e,n)},r}function Xc(e,n,r){r=Rn(-1,r),r.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=n.value;r.payload=function(){return t(i)},r.callback=function(){Ns(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){Ns(e,n),typeof t!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),r}function Ra(e,n,r){var t=e.pingCache;if(t===null){t=e.pingCache=new Qh;var i=new Set;t.set(n,i)}else i=t.get(n),i===void 0&&(i=new Set,t.set(n,i));i.has(r)||(i.add(r),e=lp.bind(null,e,n,r),n.then(e,e))}function Pa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ma(e,n,r,t,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(n=Rn(-1,1),n.tag=2,Jn(r,n,1))),r.lanes|=1),e)}var Vh=Dn.ReactCurrentOwner,Ve=!1;function $e(e,n,r,t){n.child=e===null?bc(n,null,r,t):Gr(n,e.child,r,t)}function La(e,n,r,t,i){r=r.render;var s=n.ref;return Ur(n,i),t=_l(e,n,r,t,s,i),r=wl(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,In(e,n,i)):(ve&&r&&al(n),n.flags|=1,$e(e,n,t,i),n.child)}function Ia(e,n,r,t,i){if(e===null){var s=r.type;return typeof s=="function"&&!Al(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(n.tag=15,n.type=s,Zc(e,n,s,t,i)):(e=Ti(r.type,null,t,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(r=r.compare,r=r!==null?r:bt,r(l,t)&&e.ref===n.ref)return In(e,n,i)}return n.flags|=1,e=qn(s,t),e.ref=n.ref,e.return=n,n.child=e}function Zc(e,n,r,t,i){if(e!==null){var s=e.memoizedProps;if(bt(s,t)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=t=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return n.lanes=e.lanes,In(e,n,i)}return Os(e,n,r,t,i)}function qc(e,n,r){var t=n.pendingProps,i=t.children,s=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ir,Ze),Ze|=r;else{if(!(r&1073741824))return e=s!==null?s.baseLanes|r:r,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Ir,Ze),Ze|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=s!==null?s.baseLanes:r,pe(Ir,Ze),Ze|=t}else s!==null?(t=s.baseLanes|r,n.memoizedState=null):t=r,pe(Ir,Ze),Ze|=t;return $e(e,n,i,r),n.child}function ed(e,n){var r=n.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(n.flags|=512,n.flags|=2097152)}function Os(e,n,r,t,i){var s=Je(r)?gr:Ue.current;return s=Wr(n,s),Ur(n,i),r=_l(e,n,r,t,s,i),t=wl(),e!==null&&!Ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,In(e,n,i)):(ve&&t&&al(n),n.flags|=1,$e(e,n,r,i),n.child)}function Da(e,n,r,t,i){if(Je(r)){var s=!0;Di(n)}else s=!1;if(Ur(n,i),n.stateNode===null)ji(e,n),Nc(n,r,t),Ts(n,r,t,i),t=!0;else if(e===null){var l=n.stateNode,a=n.memoizedProps;l.props=a;var u=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=cn(c):(c=Je(r)?gr:Ue.current,c=Wr(n,c));var v=r.getDerivedStateFromProps,y=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==t||u!==c)&&Oa(n,l,t,c),Fn=!1;var p=n.memoizedState;l.state=p,Hi(n,t,l,i),u=n.memoizedState,a!==t||p!==u||Ke.current||Fn?(typeof v=="function"&&(Es(n,r,v,t),u=n.memoizedState),(a=Fn||Na(n,r,a,t,p,u,c))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=u),l.props=t,l.state=u,l.context=c,t=a):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{l=n.stateNode,Ec(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:gn(n.type,a),l.props=c,y=n.pendingProps,p=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Je(r)?gr:Ue.current,u=Wr(n,u));var m=r.getDerivedStateFromProps;(v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==y||p!==u)&&Oa(n,l,t,u),Fn=!1,p=n.memoizedState,l.state=p,Hi(n,t,l,i);var _=n.memoizedState;a!==y||p!==_||Ke.current||Fn?(typeof m=="function"&&(Es(n,r,m,t),_=n.memoizedState),(c=Fn||Na(n,r,c,t,p,_,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,_,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,_,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=_),l.props=t,l.state=_,l.context=u,t=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),t=!1)}return bs(e,n,r,t,s,i)}function bs(e,n,r,t,i,s){ed(e,n);var l=(n.flags&128)!==0;if(!t&&!l)return i&&Sa(n,r,!1),In(e,n,s);t=n.stateNode,Vh.current=n;var a=l&&typeof r.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&l?(n.child=Gr(n,e.child,null,s),n.child=Gr(n,null,a,s)):$e(e,n,a,s),n.memoizedState=t.state,i&&Sa(n,r,!0),n.child}function nd(e){var n=e.stateNode;n.pendingContext?wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&wa(e,n.context,!1),ml(e,n.containerInfo)}function Ba(e,n,r,t,i){return Yr(),cl(i),n.flags|=256,$e(e,n,r,t),n.child}var Cs={dehydrated:null,treeContext:null,retryLane:0};function As(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,n,r){var t=n.pendingProps,i=xe.current,s=!1,l=(n.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(xe,i&1),e===null)return js(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=t.children,e=t.fallback,s?(t=n.mode,s=n.child,l={mode:"hidden",children:l},!(t&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=uo(l,t,0,null),e=hr(e,t,r,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=As(r),n.memoizedState=Cs,e):kl(n,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kh(e,n,l,t,a,i,r);if(s){s=t.fallback,l=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:t.children};return!(l&1)&&n.child!==i?(t=n.child,t.childLanes=0,t.pendingProps=u,n.deletions=null):(t=qn(i,u),t.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=qn(a,s):(s=hr(s,l,r,null),s.flags|=2),s.return=n,t.return=n,t.sibling=s,n.child=t,t=s,s=n.child,l=e.child.memoizedState,l=l===null?As(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~r,n.memoizedState=Cs,t}return s=e.child,e=s.sibling,t=qn(s,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=r),t.return=n,t.sibling=null,e!==null&&(r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)),n.child=t,n.memoizedState=null,t}function kl(e,n){return n=uo({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function oi(e,n,r,t){return t!==null&&cl(t),Gr(n,e.child,null,r),e=kl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kh(e,n,r,t,i,s,l){if(r)return n.flags&256?(n.flags&=-257,t=Uo(Error(C(422))),oi(e,n,l,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=t.fallback,i=n.mode,t=uo({mode:"visible",children:t.children},i,0,null),s=hr(s,i,l,null),s.flags|=2,t.return=n,s.return=n,t.sibling=s,n.child=t,n.mode&1&&Gr(n,e.child,null,l),n.child.memoizedState=As(l),n.memoizedState=Cs,s);if(!(n.mode&1))return oi(e,n,l,null);if(i.data==="$!"){if(t=i.nextSibling&&i.nextSibling.dataset,t)var a=t.dgst;return t=a,s=Error(C(419)),t=Uo(s,t,void 0),oi(e,n,l,t)}if(a=(l&e.childLanes)!==0,Ve||a){if(t=Re,t!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(t.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(e,i),xn(t,e,i,-1))}return Cl(),t=Uo(Error(C(421))),oi(e,n,l,t)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ap.bind(null,e),i._reactRetry=n,null):(e=s.treeContext,qe=Kn(i.nextSibling),nn=n,ve=!0,vn=null,e!==null&&(sn[ln++]=Cn,sn[ln++]=An,sn[ln++]=mr,Cn=e.id,An=e.overflow,mr=n),n=kl(n,t.children),n.flags|=4096,n)}function za(e,n,r){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),ks(e.return,n,r)}function Ho(e,n,r,t,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:i}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=t,s.tail=r,s.tailMode=i)}function td(e,n,r){var t=n.pendingProps,i=t.revealOrder,s=t.tail;if($e(e,n,t.children,r),t=xe.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&za(e,r,n);else if(e.tag===19)za(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(pe(xe,t),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(r=n.child,i=null;r!==null;)e=r.alternate,e!==null&&$i(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=n.child,n.child=null):(i=r.sibling,r.sibling=null),Ho(n,!1,i,r,s);break;case"backwards":for(r=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){n.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ho(n,!0,r,null,s);break;case"together":Ho(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function In(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),yr|=n.lanes,!(r&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,r=qn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=qn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Jh(e,n,r){switch(n.tag){case 3:nd(n),Yr();break;case 5:Cc(n);break;case 1:Je(n.type)&&Di(n);break;case 4:ml(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,i=n.memoizedProps.value;pe(Fi,t._currentValue),t._currentValue=i;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(pe(xe,xe.current&1),n.flags|=128,null):r&n.child.childLanes?rd(e,n,r):(pe(xe,xe.current&1),e=In(e,n,r),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(t=(r&n.childLanes)!==0,e.flags&128){if(t)return td(e,n,r);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),t)break;return null;case 22:case 23:return n.lanes=0,qc(e,n,r)}return In(e,n,r)}var id,Rs,od,sd;id=function(e,n){for(var r=n.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Rs=function(){};od=function(e,n,r,t){var i=e.memoizedProps;if(i!==t){e=n.stateNode,dr(Tn.current);var s=null;switch(r){case"input":i=es(e,i),t=es(e,t),s=[];break;case"select":i=we({},i,{value:void 0}),t=we({},t,{value:void 0}),s=[];break;case"textarea":i=ts(e,i),t=ts(e,t),s=[];break;default:typeof i.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Li)}os(r,t);var l;r=null;for(c in i)if(!t.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(St.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in t){var u=t[c];if(a=i!=null?i[c]:void 0,t.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(s||(s=[]),s.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(St.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",e),s||a===u||(s=[])):(s=s||[]).push(c,u))}r&&(s=s||[]).push("style",r);var c=s;(n.updateQueue=c)&&(n.flags|=4)}};sd=function(e,n,r,t){r!==t&&(n.flags|=4)};function st(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,t=0;if(n)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags&14680064,t|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,t|=i.subtreeFlags,t|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=t,e.childLanes=r,n}function Xh(e,n,r){var t=n.pendingProps;switch(ul(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(n),null;case 1:return Je(n.type)&&Ii(),ze(n),null;case 3:return t=n.stateNode,Qr(),me(Ke),me(Ue),yl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ti(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vn!==null&&(Fs(vn),vn=null))),Rs(e,n),ze(n),null;case 5:vl(n);var i=dr(Mt.current);if(r=n.type,e!==null&&n.stateNode!=null)od(e,n,r,t,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(C(166));return ze(n),null}if(e=dr(Tn.current),ti(n)){t=n.stateNode,r=n.type;var s=n.memoizedProps;switch(t[kn]=n,t[Rt]=s,e=(n.mode&1)!==0,r){case"dialog":ge("cancel",t),ge("close",t);break;case"iframe":case"object":case"embed":ge("load",t);break;case"video":case"audio":for(i=0;i<ft.length;i++)ge(ft[i],t);break;case"source":ge("error",t);break;case"img":case"image":case"link":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"input":Vl(t,s),ge("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!s.multiple},ge("invalid",t);break;case"textarea":Jl(t,s),ge("invalid",t)}os(r,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?t.textContent!==a&&(s.suppressHydrationWarning!==!0&&ri(t.textContent,a,e),i=["children",a]):typeof a=="number"&&t.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ri(t.textContent,a,e),i=["children",""+a]):St.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ge("scroll",t)}switch(r){case"input":Vt(t),Kl(t,s,!0);break;case"textarea":Vt(t),Xl(t);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(t.onclick=Li)}t=i,n.updateQueue=t,t!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=l.createElement(r,{is:t.is}):(e=l.createElement(r),r==="select"&&(l=e,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):e=l.createElementNS(e,r),e[kn]=n,e[Rt]=t,id(e,n,!1,!1),n.stateNode=e;e:{switch(l=ss(r,t),r){case"dialog":ge("cancel",e),ge("close",e),i=t;break;case"iframe":case"object":case"embed":ge("load",e),i=t;break;case"video":case"audio":for(i=0;i<ft.length;i++)ge(ft[i],e);i=t;break;case"source":ge("error",e),i=t;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=t;break;case"details":ge("toggle",e),i=t;break;case"input":Vl(e,t),i=es(e,t),ge("invalid",e);break;case"option":i=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},i=we({},t,{value:void 0}),ge("invalid",e);break;case"textarea":Jl(e,t),i=ts(e,t),ge("invalid",e);break;default:i=t}os(r,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?Iu(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mu(e,u)):s==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&jt(e,u):typeof u=="number"&&jt(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(St.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",e):u!=null&&Vs(e,s,u,l))}switch(r){case"input":Vt(e),Kl(e,t,!1);break;case"textarea":Vt(e),Xl(e);break;case"option":t.value!=null&&e.setAttribute("value",""+er(t.value));break;case"select":e.multiple=!!t.multiple,s=t.value,s!=null?Dr(e,!!t.multiple,s,!1):t.defaultValue!=null&&Dr(e,!!t.multiple,t.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(r){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ze(n),null;case 6:if(e&&n.stateNode!=null)sd(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(C(166));if(r=dr(Mt.current),dr(Tn.current),ti(n)){if(t=n.stateNode,r=n.memoizedProps,t[kn]=n,(s=t.nodeValue!==r)&&(e=nn,e!==null))switch(e.tag){case 3:ri(t.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ri(t.nodeValue,r,(e.mode&1)!==0)}s&&(n.flags|=4)}else t=(r.nodeType===9?r:r.ownerDocument).createTextNode(t),t[kn]=n,n.stateNode=t}return ze(n),null;case 13:if(me(xe),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&qe!==null&&n.mode&1&&!(n.flags&128))jc(),Yr(),n.flags|=98560,s=!1;else if(s=ti(n),t!==null&&t.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[kn]=n}else Yr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ze(n),s=!1}else vn!==null&&(Fs(vn),vn=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=r,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Ce===0&&(Ce=3):Cl())),n.updateQueue!==null&&(n.flags|=4),ze(n),null);case 4:return Qr(),Rs(e,n),e===null&&Ct(n.stateNode.containerInfo),ze(n),null;case 10:return hl(n.type._context),ze(n),null;case 17:return Je(n.type)&&Ii(),ze(n),null;case 19:if(me(xe),s=n.memoizedState,s===null)return ze(n),null;if(t=(n.flags&128)!==0,l=s.rendering,l===null)if(t)st(s,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=$i(e),l!==null){for(n.flags|=128,st(s,!1),t=l.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=r,r=n.child;r!==null;)s=r,e=t,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return pe(xe,xe.current&1|2),n.child}e=e.sibling}s.tail!==null&&Ne()>Kr&&(n.flags|=128,t=!0,st(s,!1),n.lanes=4194304)}else{if(!t)if(e=$i(l),e!==null){if(n.flags|=128,t=!0,r=e.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),st(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!ve)return ze(n),null}else 2*Ne()-s.renderingStartTime>Kr&&r!==1073741824&&(n.flags|=128,t=!0,st(s,!1),n.lanes=4194304);s.isBackwards?(l.sibling=n.child,n.child=l):(r=s.last,r!==null?r.sibling=l:n.child=l,s.last=l)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Ne(),n.sibling=null,r=xe.current,pe(xe,t?r&1|2:r&1),n):(ze(n),null);case 22:case 23:return bl(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Ze&1073741824&&(ze(n),n.subtreeFlags&6&&(n.flags|=8192)):ze(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Zh(e,n){switch(ul(n),n.tag){case 1:return Je(n.type)&&Ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qr(),me(Ke),me(Ue),yl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vl(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Yr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return Qr(),null;case 10:return hl(n.type._context),null;case 22:case 23:return bl(),null;case 24:return null;default:return null}}var si=!1,Fe=!1,qh=typeof WeakSet=="function"?WeakSet:Set,U=null;function Lr(e,n){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(t){je(e,n,t)}else r.current=null}function Ps(e,n,r){try{r()}catch(t){je(e,n,t)}}var Fa=!1;function ep(e,n){if(ms=Ri,e=cc(),ll(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var i=t.anchorOffset,s=t.focusNode;t=t.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var l=0,a=-1,u=-1,c=0,v=0,y=e,p=null;n:for(;;){for(var m;y!==r||i!==0&&y.nodeType!==3||(a=l+i),y!==s||t!==0&&y.nodeType!==3||(u=l+t),y.nodeType===3&&(l+=y.nodeValue.length),(m=y.firstChild)!==null;)p=y,y=m;for(;;){if(y===e)break n;if(p===r&&++c===i&&(a=l),p===s&&++v===t&&(u=l),(m=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=m}r=a===-1||u===-1?null:{start:a,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(vs={focusedElem:e,selectionRange:r},Ri=!1,U=n;U!==null;)if(n=U,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,U=e;else for(;U!==null;){n=U;try{var _=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,b=_.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?S:gn(n.type,S),b);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){je(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,U=e;break}U=n.return}return _=Fa,Fa=!1,_}function xt(e,n,r){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ps(n,r,s)}i=i.next}while(i!==t)}}function lo(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&e)===e){var t=r.create;r.destroy=t()}r=r.next}while(r!==n)}}function Ms(e){var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof n=="function"?n(e):n.current=e}}function ld(e){var n=e.alternate;n!==null&&(e.alternate=null,ld(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[kn],delete n[Rt],delete n[_s],delete n[Ih],delete n[Dh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Li));else if(t!==4&&(e=e.child,e!==null))for(Ls(e,n,r),e=e.sibling;e!==null;)Ls(e,n,r),e=e.sibling}function Is(e,n,r){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Is(e,n,r),e=e.sibling;e!==null;)Is(e,n,r),e=e.sibling}var Pe=null,mn=!1;function Bn(e,n,r){for(r=r.child;r!==null;)ud(e,n,r),r=r.sibling}function ud(e,n,r){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(qi,r)}catch{}switch(r.tag){case 5:Fe||Lr(r,n);case 6:var t=Pe,i=mn;Pe=null,Bn(e,n,r),Pe=t,mn=i,Pe!==null&&(mn?(e=Pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(mn?(e=Pe,r=r.stateNode,e.nodeType===8?Lo(e.parentNode,r):e.nodeType===1&&Lo(e,r),Nt(e)):Lo(Pe,r.stateNode));break;case 4:t=Pe,i=mn,Pe=r.stateNode.containerInfo,mn=!0,Bn(e,n,r),Pe=t,mn=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(t=r.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){i=t=t.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Ps(r,n,l),i=i.next}while(i!==t)}Bn(e,n,r);break;case 1:if(!Fe&&(Lr(r,n),t=r.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=r.memoizedProps,t.state=r.memoizedState,t.componentWillUnmount()}catch(a){je(r,n,a)}Bn(e,n,r);break;case 21:Bn(e,n,r);break;case 22:r.mode&1?(Fe=(t=Fe)||r.memoizedState!==null,Bn(e,n,r),Fe=t):Bn(e,n,r);break;default:Bn(e,n,r)}}function Ha(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new qh),n.forEach(function(t){var i=up.bind(null,e,t);r.has(t)||(r.add(t),t.then(i,i))})}}function hn(e,n){var r=n.deletions;if(r!==null)for(var t=0;t<r.length;t++){var i=r[t];try{var s=e,l=n,a=l;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,mn=!1;break e;case 3:Pe=a.stateNode.containerInfo,mn=!0;break e;case 4:Pe=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(Pe===null)throw Error(C(160));ud(s,l,i),Pe=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cd(n,e),n=n.sibling}function cd(e,n){var r=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(n,e),Sn(e),t&4){try{xt(3,e,e.return),lo(3,e)}catch(S){je(e,e.return,S)}try{xt(5,e,e.return)}catch(S){je(e,e.return,S)}}break;case 1:hn(n,e),Sn(e),t&512&&r!==null&&Lr(r,r.return);break;case 5:if(hn(n,e),Sn(e),t&512&&r!==null&&Lr(r,r.return),e.flags&32){var i=e.stateNode;try{jt(i,"")}catch(S){je(e,e.return,S)}}if(t&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=r!==null?r.memoizedProps:s,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Au(i,s),ss(a,l);var c=ss(a,s);for(l=0;l<u.length;l+=2){var v=u[l],y=u[l+1];v==="style"?Iu(i,y):v==="dangerouslySetInnerHTML"?Mu(i,y):v==="children"?jt(i,y):Vs(i,v,y,c)}switch(a){case"input":ns(i,s);break;case"textarea":Ru(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Dr(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?Dr(i,!!s.multiple,s.defaultValue,!0):Dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Rt]=s}catch(S){je(e,e.return,S)}}break;case 6:if(hn(n,e),Sn(e),t&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){je(e,e.return,S)}}break;case 3:if(hn(n,e),Sn(e),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Nt(n.containerInfo)}catch(S){je(e,e.return,S)}break;case 4:hn(n,e),Sn(e);break;case 13:hn(n,e),Sn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nl=Ne())),t&4&&Ha(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(Fe=(c=Fe)||v,hn(n,e),Fe=c):hn(n,e),Sn(e),t&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&e.mode&1)for(U=e,v=e.child;v!==null;){for(y=U=v;U!==null;){switch(p=U,m=p.child,p.tag){case 0:case 11:case 14:case 15:xt(4,p,p.return);break;case 1:Lr(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){t=p,r=p.return;try{n=t,_.props=n.memoizedProps,_.state=n.memoizedState,_.componentWillUnmount()}catch(S){je(t,r,S)}}break;case 5:Lr(p,p.return);break;case 22:if(p.memoizedState!==null){Wa(y);continue}}m!==null?(m.return=p,U=m):Wa(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{i=y.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=y.stateNode,u=y.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Lu("display",l))}catch(S){je(e,e.return,S)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=c?"":y.memoizedProps}catch(S){je(e,e.return,S)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:hn(n,e),Sn(e),t&4&&Ha(e);break;case 21:break;default:hn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var r=e.return;r!==null;){if(ad(r)){var t=r;break e}r=r.return}throw Error(C(160))}switch(t.tag){case 5:var i=t.stateNode;t.flags&32&&(jt(i,""),t.flags&=-33);var s=Ua(e);Is(e,s,i);break;case 3:case 4:var l=t.stateNode.containerInfo,a=Ua(e);Ls(e,a,l);break;default:throw Error(C(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function np(e,n,r){U=e,dd(e)}function dd(e,n,r){for(var t=(e.mode&1)!==0;U!==null;){var i=U,s=i.child;if(i.tag===22&&t){var l=i.memoizedState!==null||si;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Fe;a=si;var c=Fe;if(si=l,(Fe=u)&&!c)for(U=i;U!==null;)l=U,u=l.child,l.tag===22&&l.memoizedState!==null?Ya(i):u!==null?(u.return=l,U=u):Ya(i);for(;s!==null;)U=s,dd(s),s=s.sibling;U=i,si=a,Fe=c}$a(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,U=s):$a(e)}}function $a(e){for(;U!==null;){var n=U;if(n.flags&8772){var r=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||lo(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!Fe)if(r===null)t.componentDidMount();else{var i=n.elementType===n.type?r.memoizedProps:gn(n.type,r.memoizedProps);t.componentDidUpdate(i,r.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Ta(n,s,t);break;case 3:var l=n.updateQueue;if(l!==null){if(r=null,n.child!==null)switch(n.child.tag){case 5:r=n.child.stateNode;break;case 1:r=n.child.stateNode}Ta(n,l,r)}break;case 5:var a=n.stateNode;if(r===null&&n.flags&4){r=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&Nt(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Fe||n.flags&512&&Ms(n)}catch(p){je(n,n.return,p)}}if(n===e){U=null;break}if(r=n.sibling,r!==null){r.return=n.return,U=r;break}U=n.return}}function Wa(e){for(;U!==null;){var n=U;if(n===e){U=null;break}var r=n.sibling;if(r!==null){r.return=n.return,U=r;break}U=n.return}}function Ya(e){for(;U!==null;){var n=U;try{switch(n.tag){case 0:case 11:case 15:var r=n.return;try{lo(4,n)}catch(u){je(n,r,u)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var i=n.return;try{t.componentDidMount()}catch(u){je(n,i,u)}}var s=n.return;try{Ms(n)}catch(u){je(n,s,u)}break;case 5:var l=n.return;try{Ms(n)}catch(u){je(n,l,u)}}}catch(u){je(n,n.return,u)}if(n===e){U=null;break}var a=n.sibling;if(a!==null){a.return=n.return,U=a;break}U=n.return}}var rp=Math.ceil,Gi=Dn.ReactCurrentDispatcher,El=Dn.ReactCurrentOwner,un=Dn.ReactCurrentBatchConfig,se=0,Re=null,Oe=null,Me=0,Ze=0,Ir=tr(0),Ce=0,Bt=null,yr=0,ao=0,Tl=0,_t=null,Qe=null,Nl=0,Kr=1/0,On=null,Qi=!1,Ds=null,Xn=null,li=!1,Wn=null,Vi=0,wt=0,Bs=null,ki=-1,Ei=0;function We(){return se&6?Ne():ki!==-1?ki:ki=Ne()}function Zn(e){return e.mode&1?se&2&&Me!==0?Me&-Me:zh.transition!==null?(Ei===0&&(Ei=Vu()),Ei):(e=de,e!==0||(e=window.event,e=e===void 0?16:nc(e.type)),e):1}function xn(e,n,r,t){if(50<wt)throw wt=0,Bs=null,Error(C(185));Ht(e,r,t),(!(se&2)||e!==Re)&&(e===Re&&(!(se&2)&&(ao|=r),Ce===4&&Hn(e,Me)),Xe(e,t),r===1&&se===0&&!(n.mode&1)&&(Kr=Ne()+500,io&&ir()))}function Xe(e,n){var r=e.callbackNode;zf(e,n);var t=Ai(e,e===Re?Me:0);if(t===0)r!==null&&ea(r),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(r!=null&&ea(r),n===1)e.tag===0?Bh(Ga.bind(null,e)):_c(Ga.bind(null,e)),Mh(function(){!(se&6)&&ir()}),r=null;else{switch(Ku(t)){case 1:r=qs;break;case 4:r=Gu;break;case 16:r=Ci;break;case 536870912:r=Qu;break;default:r=Ci}r=xd(r,fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=r}}function fd(e,n){if(ki=-1,Ei=0,se&6)throw Error(C(327));var r=e.callbackNode;if(Hr()&&e.callbackNode!==r)return null;var t=Ai(e,e===Re?Me:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=Ki(e,t);else{n=t;var i=se;se|=2;var s=pd();(Re!==e||Me!==n)&&(On=null,Kr=Ne()+500,fr(e,n));do try{op();break}catch(a){hd(e,a)}while(!0);fl(),Gi.current=s,se=i,Oe!==null?n=0:(Re=null,Me=0,n=Ce)}if(n!==0){if(n===2&&(i=ds(e),i!==0&&(t=i,n=zs(e,i))),n===1)throw r=Bt,fr(e,0),Hn(e,t),Xe(e,Ne()),r;if(n===6)Hn(e,t);else{if(i=e.current.alternate,!(t&30)&&!tp(i)&&(n=Ki(e,t),n===2&&(s=ds(e),s!==0&&(t=s,n=zs(e,s))),n===1))throw r=Bt,fr(e,0),Hn(e,t),Xe(e,Ne()),r;switch(e.finishedWork=i,e.finishedLanes=t,n){case 0:case 1:throw Error(C(345));case 2:ar(e,Qe,On);break;case 3:if(Hn(e,t),(t&130023424)===t&&(n=Nl+500-Ne(),10<n)){if(Ai(e,0)!==0)break;if(i=e.suspendedLanes,(i&t)!==t){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xs(ar.bind(null,e,Qe,On),n);break}ar(e,Qe,On);break;case 4:if(Hn(e,t),(t&4194240)===t)break;for(n=e.eventTimes,i=-1;0<t;){var l=31-yn(t);s=1<<l,l=n[l],l>i&&(i=l),t&=~s}if(t=i,t=Ne()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*rp(t/1960))-t,10<t){e.timeoutHandle=xs(ar.bind(null,e,Qe,On),t);break}ar(e,Qe,On);break;case 5:ar(e,Qe,On);break;default:throw Error(C(329))}}}return Xe(e,Ne()),e.callbackNode===r?fd.bind(null,e):null}function zs(e,n){var r=_t;return e.current.memoizedState.isDehydrated&&(fr(e,n).flags|=256),e=Ki(e,n),e!==2&&(n=Qe,Qe=r,n!==null&&Fs(n)),e}function Fs(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function tp(e){for(var n=e;;){if(n.flags&16384){var r=n.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var t=0;t<r.length;t++){var i=r[t],s=i.getSnapshot;i=i.value;try{if(!_n(s(),i))return!1}catch{return!1}}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hn(e,n){for(n&=~Tl,n&=~ao,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var r=31-yn(n),t=1<<r;e[r]=-1,n&=~t}}function Ga(e){if(se&6)throw Error(C(327));Hr();var n=Ai(e,0);if(!(n&1))return Xe(e,Ne()),null;var r=Ki(e,n);if(e.tag!==0&&r===2){var t=ds(e);t!==0&&(n=t,r=zs(e,t))}if(r===1)throw r=Bt,fr(e,0),Hn(e,n),Xe(e,Ne()),r;if(r===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ar(e,Qe,On),Xe(e,Ne()),null}function Ol(e,n){var r=se;se|=1;try{return e(n)}finally{se=r,se===0&&(Kr=Ne()+500,io&&ir())}}function xr(e){Wn!==null&&Wn.tag===0&&!(se&6)&&Hr();var n=se;se|=1;var r=un.transition,t=de;try{if(un.transition=null,de=1,e)return e()}finally{de=t,un.transition=r,se=n,!(se&6)&&ir()}}function bl(){Ze=Ir.current,me(Ir)}function fr(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ph(r)),Oe!==null)for(r=Oe.return;r!==null;){var t=r;switch(ul(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Ii();break;case 3:Qr(),me(Ke),me(Ue),yl();break;case 5:vl(t);break;case 4:Qr();break;case 13:me(xe);break;case 19:me(xe);break;case 10:hl(t.type._context);break;case 22:case 23:bl()}r=r.return}if(Re=e,Oe=e=qn(e.current,null),Me=Ze=n,Ce=0,Bt=null,Tl=ao=yr=0,Qe=_t=null,cr!==null){for(n=0;n<cr.length;n++)if(r=cr[n],t=r.interleaved,t!==null){r.interleaved=null;var i=t.next,s=r.pending;if(s!==null){var l=s.next;s.next=i,t.next=l}r.pending=t}cr=null}return e}function hd(e,n){do{var r=Oe;try{if(fl(),wi.current=Yi,Wi){for(var t=_e.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Wi=!1}if(vr=0,Ae=be=_e=null,yt=!1,Lt=0,El.current=null,r===null||r.return===null){Ce=1,Bt=n,Oe=null;break}e:{var s=e,l=r.return,a=r,u=n;if(n=Me,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=a,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var p=v.alternate;p?(v.updateQueue=p.updateQueue,v.memoizedState=p.memoizedState,v.lanes=p.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Pa(l);if(m!==null){m.flags&=-257,Ma(m,l,a,s,n),m.mode&1&&Ra(s,c,n),n=m,u=c;var _=n.updateQueue;if(_===null){var S=new Set;S.add(u),n.updateQueue=S}else _.add(u);break e}else{if(!(n&1)){Ra(s,c,n),Cl();break e}u=Error(C(426))}}else if(ve&&a.mode&1){var b=Pa(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Ma(b,l,a,s,n),cl(Vr(u,a));break e}}s=u=Vr(u,a),Ce!==4&&(Ce=2),_t===null?_t=[s]:_t.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var f=Jc(s,u,n);Ea(s,f);break e;case 1:a=u;var d=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xn===null||!Xn.has(h)))){s.flags|=65536,n&=-n,s.lanes|=n;var w=Xc(s,a,n);Ea(s,w);break e}}s=s.return}while(s!==null)}md(r)}catch(k){n=k,Oe===r&&r!==null&&(Oe=r=r.return);continue}break}while(!0)}function pd(){var e=Gi.current;return Gi.current=Yi,e===null?Yi:e}function Cl(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Re===null||!(yr&268435455)&&!(ao&268435455)||Hn(Re,Me)}function Ki(e,n){var r=se;se|=2;var t=pd();(Re!==e||Me!==n)&&(On=null,fr(e,n));do try{ip();break}catch(i){hd(e,i)}while(!0);if(fl(),se=r,Gi.current=t,Oe!==null)throw Error(C(261));return Re=null,Me=0,Ce}function ip(){for(;Oe!==null;)gd(Oe)}function op(){for(;Oe!==null&&!Cf();)gd(Oe)}function gd(e){var n=yd(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,n===null?md(e):Oe=n,El.current=null}function md(e){var n=e;do{var r=n.alternate;if(e=n.return,n.flags&32768){if(r=Zh(r,n),r!==null){r.flags&=32767,Oe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,Oe=null;return}}else if(r=Xh(r,n,Ze),r!==null){Oe=r;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);Ce===0&&(Ce=5)}function ar(e,n,r){var t=de,i=un.transition;try{un.transition=null,de=1,sp(e,n,r,t)}finally{un.transition=i,de=t}return null}function sp(e,n,r,t){do Hr();while(Wn!==null);if(se&6)throw Error(C(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Ff(e,s),e===Re&&(Oe=Re=null,Me=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||li||(li=!0,xd(Ci,function(){return Hr(),null})),s=(r.flags&15990)!==0,r.subtreeFlags&15990||s){s=un.transition,un.transition=null;var l=de;de=1;var a=se;se|=4,El.current=null,ep(e,r),cd(r,e),Th(vs),Ri=!!ms,vs=ms=null,e.current=r,np(r),Af(),se=a,de=l,un.transition=s}else e.current=r;if(li&&(li=!1,Wn=e,Vi=i),s=e.pendingLanes,s===0&&(Xn=null),Mf(r.stateNode),Xe(e,Ne()),n!==null)for(t=e.onRecoverableError,r=0;r<n.length;r++)i=n[r],t(i.value,{componentStack:i.stack,digest:i.digest});if(Qi)throw Qi=!1,e=Ds,Ds=null,e;return Vi&1&&e.tag!==0&&Hr(),s=e.pendingLanes,s&1?e===Bs?wt++:(wt=0,Bs=e):wt=0,ir(),null}function Hr(){if(Wn!==null){var e=Ku(Vi),n=un.transition,r=de;try{if(un.transition=null,de=16>e?16:e,Wn===null)var t=!1;else{if(e=Wn,Wn=null,Vi=0,se&6)throw Error(C(331));var i=se;for(se|=4,U=e.current;U!==null;){var s=U,l=s.child;if(U.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(U=c;U!==null;){var v=U;switch(v.tag){case 0:case 11:case 15:xt(8,v,s)}var y=v.child;if(y!==null)y.return=v,U=y;else for(;U!==null;){v=U;var p=v.sibling,m=v.return;if(ld(v),v===c){U=null;break}if(p!==null){p.return=m,U=p;break}U=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var b=S.sibling;S.sibling=null,S=b}while(S!==null)}}U=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,U=l;else e:for(;U!==null;){if(s=U,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xt(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,U=f;break e}U=s.return}}var d=e.current;for(U=d;U!==null;){l=U;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,U=h;else e:for(l=d;U!==null;){if(a=U,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lo(9,a)}}catch(k){je(a,a.return,k)}if(a===l){U=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,U=w;break e}U=a.return}}if(se=i,ir(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(qi,e)}catch{}t=!0}return t}finally{de=r,un.transition=n}}return!1}function Qa(e,n,r){n=Vr(r,n),n=Jc(e,n,1),e=Jn(e,n,1),n=We(),e!==null&&(Ht(e,1,n),Xe(e,n))}function je(e,n,r){if(e.tag===3)Qa(e,e,r);else for(;n!==null;){if(n.tag===3){Qa(n,e,r);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Xn===null||!Xn.has(t))){e=Vr(r,e),e=Xc(n,e,1),n=Jn(n,e,1),e=We(),n!==null&&(Ht(n,1,e),Xe(n,e));break}}n=n.return}}function lp(e,n,r){var t=e.pingCache;t!==null&&t.delete(n),n=We(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(Me&r)===r&&(Ce===4||Ce===3&&(Me&130023424)===Me&&500>Ne()-Nl?fr(e,0):Tl|=r),Xe(e,n)}function vd(e,n){n===0&&(e.mode&1?(n=Xt,Xt<<=1,!(Xt&130023424)&&(Xt=4194304)):n=1);var r=We();e=Ln(e,n),e!==null&&(Ht(e,n,r),Xe(e,r))}function ap(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),vd(e,r)}function up(e,n){var r=0;switch(e.tag){case 13:var t=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(C(314))}t!==null&&t.delete(n),vd(e,r)}var yd;yd=function(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ke.current)Ve=!0;else{if(!(e.lanes&r)&&!(n.flags&128))return Ve=!1,Jh(e,n,r);Ve=!!(e.flags&131072)}else Ve=!1,ve&&n.flags&1048576&&wc(n,zi,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;ji(e,n),e=n.pendingProps;var i=Wr(n,Ue.current);Ur(n,r),i=_l(null,n,t,e,i,r);var s=wl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Je(t)?(s=!0,Di(n)):s=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gl(n),i.updater=oo,n.stateNode=i,i._reactInternals=n,Ts(n,t,e,r),n=bs(null,n,t,!0,s,r)):(n.tag=0,ve&&s&&al(n),$e(null,n,i,r),n=n.child),n;case 16:t=n.elementType;e:{switch(ji(e,n),e=n.pendingProps,i=t._init,t=i(t._payload),n.type=t,i=n.tag=dp(t),e=gn(t,e),i){case 0:n=Os(null,n,t,e,r);break e;case 1:n=Da(null,n,t,e,r);break e;case 11:n=La(null,n,t,e,r);break e;case 14:n=Ia(null,n,t,gn(t.type,e),r);break e}throw Error(C(306,t,""))}return n;case 0:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:gn(t,i),Os(e,n,t,i,r);case 1:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:gn(t,i),Da(e,n,t,i,r);case 3:e:{if(nd(n),e===null)throw Error(C(387));t=n.pendingProps,s=n.memoizedState,i=s.element,Ec(e,n),Hi(n,t,null,r);var l=n.memoizedState;if(t=l.element,s.isDehydrated)if(s={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){i=Vr(Error(C(423)),n),n=Ba(e,n,t,r,i);break e}else if(t!==i){i=Vr(Error(C(424)),n),n=Ba(e,n,t,r,i);break e}else for(qe=Kn(n.stateNode.containerInfo.firstChild),nn=n,ve=!0,vn=null,r=bc(n,null,t,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Yr(),t===i){n=In(e,n,r);break e}$e(e,n,t,r)}n=n.child}return n;case 5:return Cc(n),e===null&&js(n),t=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,ys(t,i)?l=null:s!==null&&ys(t,s)&&(n.flags|=32),ed(e,n),$e(e,n,l,r),n.child;case 6:return e===null&&js(n),null;case 13:return rd(e,n,r);case 4:return ml(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=Gr(n,null,t,r):$e(e,n,t,r),n.child;case 11:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:gn(t,i),La(e,n,t,i,r);case 7:return $e(e,n,n.pendingProps,r),n.child;case 8:return $e(e,n,n.pendingProps.children,r),n.child;case 12:return $e(e,n,n.pendingProps.children,r),n.child;case 10:e:{if(t=n.type._context,i=n.pendingProps,s=n.memoizedProps,l=i.value,pe(Fi,t._currentValue),t._currentValue=l,s!==null)if(_n(s.value,l)){if(s.children===i.children&&!Ke.current){n=In(e,n,r);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var u=a.firstContext;u!==null;){if(u.context===t){if(s.tag===1){u=Rn(-1,r&-r),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}s.lanes|=r,u=s.alternate,u!==null&&(u.lanes|=r),ks(s.return,r,n),a.lanes|=r;break}u=u.next}}else if(s.tag===10)l=s.type===n.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(C(341));l.lanes|=r,a=l.alternate,a!==null&&(a.lanes|=r),ks(l,r,n),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===n){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}$e(e,n,i.children,r),n=n.child}return n;case 9:return i=n.type,t=n.pendingProps.children,Ur(n,r),i=cn(i),t=t(i),n.flags|=1,$e(e,n,t,r),n.child;case 14:return t=n.type,i=gn(t,n.pendingProps),i=gn(t.type,i),Ia(e,n,t,i,r);case 15:return Zc(e,n,n.type,n.pendingProps,r);case 17:return t=n.type,i=n.pendingProps,i=n.elementType===t?i:gn(t,i),ji(e,n),n.tag=1,Je(t)?(e=!0,Di(n)):e=!1,Ur(n,r),Nc(n,t,i),Ts(n,t,i,r),bs(null,n,t,!0,e,r);case 19:return td(e,n,r);case 22:return qc(e,n,r)}throw Error(C(156,n.tag))};function xd(e,n){return Yu(e,n)}function cp(e,n,r,t){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,r,t){return new cp(e,n,r,t)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dp(e){if(typeof e=="function")return Al(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Js)return 11;if(e===Xs)return 14}return 2}function qn(e,n){var r=e.alternate;return r===null?(r=an(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ti(e,n,r,t,i,s){var l=2;if(t=e,typeof e=="function")Al(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Tr:return hr(r.children,i,s,n);case Ks:l=8,i|=8;break;case Jo:return e=an(12,r,n,i|2),e.elementType=Jo,e.lanes=s,e;case Xo:return e=an(13,r,n,i),e.elementType=Xo,e.lanes=s,e;case Zo:return e=an(19,r,n,i),e.elementType=Zo,e.lanes=s,e;case Ou:return uo(r,i,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:l=10;break e;case Nu:l=9;break e;case Js:l=11;break e;case Xs:l=14;break e;case zn:l=16,t=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=an(l,r,n,i),n.elementType=e,n.type=t,n.lanes=s,n}function hr(e,n,r,t){return e=an(7,e,t,n),e.lanes=r,e}function uo(e,n,r,t){return e=an(22,e,t,n),e.elementType=Ou,e.lanes=r,e.stateNode={isHidden:!1},e}function $o(e,n,r){return e=an(6,e,null,n),e.lanes=r,e}function Wo(e,n,r){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fp(e,n,r,t,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ko(0),this.expirationTimes=ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ko(0),this.identifierPrefix=t,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rl(e,n,r,t,i,s,l,a,u){return e=new fp(e,n,r,a,u),n===1?(n=1,s===!0&&(n|=8)):n=0,s=an(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:t,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},gl(s),e}function hp(e,n,r){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:t==null?null:""+t,children:e,containerInfo:n,implementation:r}}function _d(e){if(!e)return nr;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Je(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var r=e.type;if(Je(r))return xc(e,r,n)}return n}function wd(e,n,r,t,i,s,l,a,u){return e=Rl(r,t,!0,e,i,s,l,a,u),e.context=_d(null),r=e.current,t=We(),i=Zn(r),s=Rn(t,i),s.callback=n??null,Jn(r,s,i),e.current.lanes=i,Ht(e,i,t),Xe(e,t),e}function co(e,n,r,t){var i=n.current,s=We(),l=Zn(i);return r=_d(r),n.context===null?n.context=r:n.pendingContext=r,n=Rn(s,l),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=Jn(i,n,l),e!==null&&(xn(e,i,l,s),_i(e,i,l)),l}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function Pl(e,n){Va(e,n),(e=e.alternate)&&Va(e,n)}function pp(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ml(e){this._internalRoot=e}fo.prototype.render=Ml.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));co(e,n,null,null)};fo.prototype.unmount=Ml.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xr(function(){co(null,e,null,null)}),n[Mn]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zu();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Un.length&&n!==0&&n<Un[r].priority;r++);Un.splice(r,0,e),r===0&&ec(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ho(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ka(){}function gp(e,n,r,t,i){if(i){if(typeof t=="function"){var s=t;t=function(){var c=Ji(l);s.call(c)}}var l=wd(n,t,e,0,null,!1,!1,"",Ka);return e._reactRootContainer=l,e[Mn]=l.current,Ct(e.nodeType===8?e.parentNode:e),xr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof t=="function"){var a=t;t=function(){var c=Ji(u);a.call(c)}}var u=Rl(e,0,!1,null,null,!1,!1,"",Ka);return e._reactRootContainer=u,e[Mn]=u.current,Ct(e.nodeType===8?e.parentNode:e),xr(function(){co(n,u,r,t)}),u}function po(e,n,r,t,i){var s=r._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var u=Ji(l);a.call(u)}}co(n,l,e,i)}else l=gp(r,n,e,i,t);return Ji(l)}Ju=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var r=dt(n.pendingLanes);r!==0&&(el(n,r|1),Xe(n,Ne()),!(se&6)&&(Kr=Ne()+500,ir()))}break;case 13:xr(function(){var t=Ln(e,1);if(t!==null){var i=We();xn(t,e,1,i)}}),Pl(e,1)}};nl=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var r=We();xn(n,e,134217728,r)}Pl(e,134217728)}};Xu=function(e){if(e.tag===13){var n=Zn(e),r=Ln(e,n);if(r!==null){var t=We();xn(r,e,n,t)}Pl(e,n)}};Zu=function(){return de};qu=function(e,n){var r=de;try{return de=e,n()}finally{de=r}};as=function(e,n,r){switch(n){case"input":if(ns(e,r),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<r.length;n++){var t=r[n];if(t!==e&&t.form===e.form){var i=to(t);if(!i)throw Error(C(90));Cu(t),ns(t,i)}}}break;case"textarea":Ru(e,r);break;case"select":n=r.value,n!=null&&Dr(e,!!r.multiple,n,!1)}};zu=Ol;Fu=xr;var mp={usingClientEntryPoint:!1,Events:[Wt,Cr,to,Du,Bu,Ol]},lt={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vp={bundleType:lt.bundleType,version:lt.version,rendererPackageName:lt.rendererPackageName,rendererConfig:lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:lt.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{qi=ai.inject(vp),En=ai}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mp;tn.createPortal=function(e,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(n))throw Error(C(200));return hp(e,n,null,r)};tn.createRoot=function(e,n){if(!Ll(e))throw Error(C(299));var r=!1,t="",i=Sd;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Rl(e,1,!1,null,null,r,!1,t,i),e[Mn]=n.current,Ct(e.nodeType===8?e.parentNode:e),new Ml(n)};tn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$u(n),e=e===null?null:e.stateNode,e};tn.flushSync=function(e){return xr(e)};tn.hydrate=function(e,n,r){if(!ho(n))throw Error(C(200));return po(null,e,n,!0,r)};tn.hydrateRoot=function(e,n,r){if(!Ll(e))throw Error(C(405));var t=r!=null&&r.hydratedSources||null,i=!1,s="",l=Sd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),n=wd(n,null,e,1,r??null,i,!1,s,l),e[Mn]=n.current,Ct(e),t)for(e=0;e<t.length;e++)r=t[e],i=r._getVersion,i=i(r._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[r,i]:n.mutableSourceEagerHydrationData.push(r,i);return new fo(n)};tn.render=function(e,n,r){if(!ho(n))throw Error(C(200));return po(null,e,n,!1,r)};tn.unmountComponentAtNode=function(e){if(!ho(e))throw Error(C(40));return e._reactRootContainer?(xr(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};tn.unstable_batchedUpdates=Ol;tn.unstable_renderSubtreeIntoContainer=function(e,n,r,t){if(!ho(r))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return po(e,n,r,!1,t)};tn.version="18.2.0-next-9e3b772b8-20220608";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),wu.exports=tn;var kd=wu.exports;const yp=Us(kd);var Ja=kd;Vo.createRoot=Ja.createRoot,Vo.hydrateRoot=Ja.hydrateRoot;const Ed=G.createContext(void 0);function xp({children:e}){const[n,r]=G.useState(!0),t=()=>r(!0),i=()=>r(!1),s=()=>r(!n);return o.jsx(Ed.Provider,{value:{isSidebarOpen:n,showSidebar:t,hideSidebar:i,toggleSidebar:s},children:e})}function Il(){const e=G.useContext(Ed);if(e===void 0)throw new Error("useSidebar must be used within SidebarProvider");return e}const _p="_wave_nm5to_1",wp="_gradient_nm5to_1",ui={wave:_p,gradient:wp};function Sp(){return o.jsxs("div",{className:ui.background,children:[o.jsx("div",{className:ui.wave}),o.jsx("div",{className:ui.wave}),o.jsx("div",{className:ui.wave})]})}const jp="_topbar_103sc_1",kp="_container_103sc_22",Ep="_buttonContainer_103sc_28",Tp="_title_103sc_35",Np="_iconLink_103sc_53",Op="_hamburger_103sc_75",bp="_hamburgerIcon_103sc_79",Cp="_hamburgerTop_103sc_88",Ap="_collapsed_103sc_92",Rp="_hamburgerMiddle_103sc_96",Pp="_hamburgerBottom_103sc_106",pn={topbar:jp,container:kp,buttonContainer:Ep,title:Tp,"animated-gradient":"_animated-gradient_103sc_1",iconLink:Np,hamburger:Op,hamburgerIcon:bp,hamburgerTop:Cp,collapsed:Ap,hamburgerMiddle:Rp,hamburgerBottom:Pp};var Td={exports:{}};(function(e,n){(function(t,i){e.exports=i(G)})(Gd,r=>(()=>{var t={"./node_modules/css-mediaquery/index.js":(a,u)=>{u.match=_,u.parse=S;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,v=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,y=/^(?:(min|max)-)?(.+)/,p=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function _(h,w){return S(h).some(function(k){var E=k.inverse,T=k.type==="all"||w.type===k.type;if(T&&E||!(T||E))return!1;var P=k.expressions.every(function(N){var L=N.feature,Y=N.modifier,Q=N.value,W=w[L];if(!W)return!1;switch(L){case"orientation":case"scan":return W.toLowerCase()===Q.toLowerCase();case"width":case"height":case"device-width":case"device-height":Q=d(Q),W=d(W);break;case"resolution":Q=f(Q),W=f(W);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":Q=b(Q),W=b(W);break;case"grid":case"color":case"color-index":case"monochrome":Q=parseInt(Q,10)||1,W=parseInt(W,10)||0;break}switch(Y){case"min":return W>=Q;case"max":return W<=Q;default:return W===Q}});return P&&!E||!P&&E})}function S(h){return h.split(",").map(function(w){w=w.trim();var k=w.match(c),E=k[1],T=k[2],P=k[3]||"",N={};return N.inverse=!!E&&E.toLowerCase()==="not",N.type=T?T.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],N.expressions=P.map(function(L){var Y=L.match(v),Q=Y[1].toLowerCase().match(y);return{modifier:Q[1],feature:Q[2],value:Y[2]}}),N})}function b(h){var w=Number(h),k;return w||(k=h.match(/^(\d+)\s*\/\s*(\d+)$/),w=k[1]/k[2]),w}function f(h){var w=parseFloat(h),k=String(h).match(m)[1];switch(k){case"dpcm":return w/2.54;case"dppx":return w*96;default:return w}}function d(h){var w=parseFloat(h),k=String(h).match(p)[1];switch(k){case"em":return w*16;case"rem":return w*16;case"cm":return w*96/2.54;case"mm":return w*96/2.54/10;case"in":return w*96;case"pt":return w*72;case"pc":return w*72/12;default:return w}}},"./node_modules/hyphenate-style-name/index.js":(a,u,c)=>{c.r(u),c.d(u,{default:()=>S});var v=/[A-Z]/g,y=/^ms-/,p={};function m(b){return"-"+b.toLowerCase()}function _(b){if(p.hasOwnProperty(b))return p[b];var f=b.replace(v,m);return p[b]=y.test(f)?"-"+f:f}const S=_},"./node_modules/matchmediaquery/index.js":(a,u,c)=>{var v=c("./node_modules/css-mediaquery/index.js").match,y=typeof window<"u"?window.matchMedia:null;function p(_,S,b){var f=this;if(y&&!b){var d=y.call(window,_);this.matches=d.matches,this.media=d.media,d.addListener(k)}else this.matches=v(_,S),this.media=_;this.addListener=h,this.removeListener=w,this.dispose=E;function h(T){d&&d.addListener(T)}function w(T){d&&d.removeListener(T)}function k(T){f.matches=T.matches,f.media=T.media}function E(){d&&d.removeListener(k)}}function m(_,S,b){return new p(_,S,b)}a.exports=m},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;function y(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function p(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var _={},S=0;S<10;S++)_["_"+String.fromCharCode(S)]=S;var b=Object.getOwnPropertyNames(_).map(function(d){return _[d]});if(b.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(d){f[d]=d}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=p()?Object.assign:function(m,_){for(var S,b=y(m),f,d=1;d<arguments.length;d++){S=Object(arguments[d]);for(var h in S)c.call(S,h)&&(b[h]=S[h]);if(u){f=u(S);for(var w=0;w<f.length;w++)v.call(S,f[w])&&(b[f[w]]=S[f[w]])}}return b}},"./node_modules/prop-types/checkPropTypes.js":(a,u,c)=>{var v=function(){};{var y=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p={},m=c("./node_modules/prop-types/lib/has.js");v=function(S){var b="Warning: "+S;typeof console<"u"&&console.error(b);try{throw new Error(b)}catch{}}}function _(S,b,f,d,h){for(var w in S)if(m(S,w)){var k;try{if(typeof S[w]!="function"){var E=Error((d||"React class")+": "+f+" type `"+w+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof S[w]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}k=S[w](b,w,d,f,null,y)}catch(P){k=P}if(k&&!(k instanceof Error)&&v((d||"React class")+": type specification of "+f+" `"+w+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in p)){p[k.message]=!0;var T=h?h():"";v("Failed "+f+" type: "+k.message+(T??""))}}}_.resetWarningCache=function(){p={}},a.exports=_},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,u,c)=>{var v=c("./node_modules/react-is/index.js"),y=c("./node_modules/object-assign/index.js"),p=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=c("./node_modules/prop-types/lib/has.js"),_=c("./node_modules/prop-types/checkPropTypes.js"),S=function(){};S=function(f){var d="Warning: "+f;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function b(){return null}a.exports=function(f,d){var h=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function k(R){var F=R&&(h&&R[h]||R[w]);if(typeof F=="function")return F}var E="<<anonymous>>",T={array:Y("array"),bigint:Y("bigint"),bool:Y("boolean"),func:Y("function"),number:Y("number"),object:Y("object"),string:Y("string"),symbol:Y("symbol"),any:Q(),arrayOf:W,element:he(),elementType:ye(),instanceOf:Se,node:I(),objectOf:j,oneOf:O,oneOfType:A,shape:J,exact:ke};function P(R,F){return R===F?R!==0||1/R===1/F:R!==R&&F!==F}function N(R,F){this.message=R,this.data=F&&typeof F=="object"?F:{},this.stack=""}N.prototype=Error.prototype;function L(R){var F={},q=0;function Z(ie,V,ne,re,D,oe,M){if(re=re||E,oe=oe||ne,M!==p){if(d){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}else if(typeof console<"u"){var Ie=re+":"+ne;!F[Ie]&&q<3&&(S("You are manually calling a React.PropTypes validation function for the `"+oe+"` prop on `"+re+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),F[Ie]=!0,q++)}}return V[ne]==null?ie?V[ne]===null?new N("The "+D+" `"+oe+"` is marked as required "+("in `"+re+"`, but its value is `null`.")):new N("The "+D+" `"+oe+"` is marked as required in "+("`"+re+"`, but its value is `undefined`.")):null:R(V,ne,re,D,oe)}var K=Z.bind(null,!1);return K.isRequired=Z.bind(null,!0),K}function Y(R){function F(q,Z,K,ie,V,ne){var re=q[Z],D=le(re);if(D!==R){var oe=fe(re);return new N("Invalid "+ie+" `"+V+"` of type "+("`"+oe+"` supplied to `"+K+"`, expected ")+("`"+R+"`."),{expectedType:R})}return null}return L(F)}function Q(){return L(b)}function W(R){function F(q,Z,K,ie,V){if(typeof R!="function")return new N("Property `"+V+"` of component `"+K+"` has invalid PropType notation inside arrayOf.");var ne=q[Z];if(!Array.isArray(ne)){var re=le(ne);return new N("Invalid "+ie+" `"+V+"` of type "+("`"+re+"` supplied to `"+K+"`, expected an array."))}for(var D=0;D<ne.length;D++){var oe=R(ne,D,K,ie,V+"["+D+"]",p);if(oe instanceof Error)return oe}return null}return L(F)}function he(){function R(F,q,Z,K,ie){var V=F[q];if(!f(V)){var ne=le(V);return new N("Invalid "+K+" `"+ie+"` of type "+("`"+ne+"` supplied to `"+Z+"`, expected a single ReactElement."))}return null}return L(R)}function ye(){function R(F,q,Z,K,ie){var V=F[q];if(!v.isValidElementType(V)){var ne=le(V);return new N("Invalid "+K+" `"+ie+"` of type "+("`"+ne+"` supplied to `"+Z+"`, expected a single ReactElement type."))}return null}return L(R)}function Se(R){function F(q,Z,K,ie,V){if(!(q[Z]instanceof R)){var ne=R.name||E,re=fn(q[Z]);return new N("Invalid "+ie+" `"+V+"` of type "+("`"+re+"` supplied to `"+K+"`, expected ")+("instance of `"+ne+"`."))}return null}return L(F)}function O(R){if(!Array.isArray(R))return arguments.length>1?S("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):S("Invalid argument supplied to oneOf, expected an array."),b;function F(q,Z,K,ie,V){for(var ne=q[Z],re=0;re<R.length;re++)if(P(ne,R[re]))return null;var D=JSON.stringify(R,function(M,X){var Ie=fe(X);return Ie==="symbol"?String(X):X});return new N("Invalid "+ie+" `"+V+"` of value `"+String(ne)+"` "+("supplied to `"+K+"`, expected one of "+D+"."))}return L(F)}function j(R){function F(q,Z,K,ie,V){if(typeof R!="function")return new N("Property `"+V+"` of component `"+K+"` has invalid PropType notation inside objectOf.");var ne=q[Z],re=le(ne);if(re!=="object")return new N("Invalid "+ie+" `"+V+"` of type "+("`"+re+"` supplied to `"+K+"`, expected an object."));for(var D in ne)if(m(ne,D)){var oe=R(ne,D,K,ie,V+"."+D,p);if(oe instanceof Error)return oe}return null}return L(F)}function A(R){if(!Array.isArray(R))return S("Invalid argument supplied to oneOfType, expected an instance of array."),b;for(var F=0;F<R.length;F++){var q=R[F];if(typeof q!="function")return S("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Te(q)+" at index "+F+"."),b}function Z(K,ie,V,ne,re){for(var D=[],oe=0;oe<R.length;oe++){var M=R[oe],X=M(K,ie,V,ne,re,p);if(X==null)return null;X.data&&m(X.data,"expectedType")&&D.push(X.data.expectedType)}var Ie=D.length>0?", expected one of type ["+D.join(", ")+"]":"";return new N("Invalid "+ne+" `"+re+"` supplied to "+("`"+V+"`"+Ie+"."))}return L(Z)}function I(){function R(F,q,Z,K,ie){return Ee(F[q])?null:new N("Invalid "+K+" `"+ie+"` supplied to "+("`"+Z+"`, expected a ReactNode."))}return L(R)}function H(R,F,q,Z,K){return new N((R||"React class")+": "+F+" type `"+q+"."+Z+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+K+"`.")}function J(R){function F(q,Z,K,ie,V){var ne=q[Z],re=le(ne);if(re!=="object")return new N("Invalid "+ie+" `"+V+"` of type `"+re+"` "+("supplied to `"+K+"`, expected `object`."));for(var D in R){var oe=R[D];if(typeof oe!="function")return H(K,ie,V,D,fe(oe));var M=oe(ne,D,K,ie,V+"."+D,p);if(M)return M}return null}return L(F)}function ke(R){function F(q,Z,K,ie,V){var ne=q[Z],re=le(ne);if(re!=="object")return new N("Invalid "+ie+" `"+V+"` of type `"+re+"` "+("supplied to `"+K+"`, expected `object`."));var D=y({},q[Z],R);for(var oe in D){var M=R[oe];if(m(R,oe)&&typeof M!="function")return H(K,ie,V,oe,fe(M));if(!M)return new N("Invalid "+ie+" `"+V+"` key `"+oe+"` supplied to `"+K+"`.\nBad object: "+JSON.stringify(q[Z],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(R),null,"  "));var X=M(ne,oe,K,ie,V+"."+oe,p);if(X)return X}return null}return L(F)}function Ee(R){switch(typeof R){case"number":case"string":case"undefined":return!0;case"boolean":return!R;case"object":if(Array.isArray(R))return R.every(Ee);if(R===null||f(R))return!0;var F=k(R);if(F){var q=F.call(R),Z;if(F!==R.entries){for(;!(Z=q.next()).done;)if(!Ee(Z.value))return!1}else for(;!(Z=q.next()).done;){var K=Z.value;if(K&&!Ee(K[1]))return!1}}else return!1;return!0;default:return!1}}function ue(R,F){return R==="symbol"?!0:F?F["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&F instanceof Symbol:!1}function le(R){var F=typeof R;return Array.isArray(R)?"array":R instanceof RegExp?"object":ue(F,R)?"symbol":F}function fe(R){if(typeof R>"u"||R===null)return""+R;var F=le(R);if(F==="object"){if(R instanceof Date)return"date";if(R instanceof RegExp)return"regexp"}return F}function Te(R){var F=fe(R);switch(F){case"array":case"object":return"an "+F;case"boolean":case"date":case"regexp":return"a "+F;default:return F}}function fn(R){return!R.constructor||!R.constructor.name?E:R.constructor.name}return T.checkPropTypes=_,T.resetWarningCache=_.resetWarningCache,T.PropTypes=T,T}},"./node_modules/prop-types/index.js":(a,u,c)=>{{var v=c("./node_modules/react-is/index.js"),y=!0;a.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(v.isElement,y)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=u},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,v=c?Symbol.for("react.element"):60103,y=c?Symbol.for("react.portal"):60106,p=c?Symbol.for("react.fragment"):60107,m=c?Symbol.for("react.strict_mode"):60108,_=c?Symbol.for("react.profiler"):60114,S=c?Symbol.for("react.provider"):60109,b=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,w=c?Symbol.for("react.suspense"):60113,k=c?Symbol.for("react.suspense_list"):60120,E=c?Symbol.for("react.memo"):60115,T=c?Symbol.for("react.lazy"):60116,P=c?Symbol.for("react.block"):60121,N=c?Symbol.for("react.fundamental"):60117,L=c?Symbol.for("react.responder"):60118,Y=c?Symbol.for("react.scope"):60119;function Q(M){return typeof M=="string"||typeof M=="function"||M===p||M===d||M===_||M===m||M===w||M===k||typeof M=="object"&&M!==null&&(M.$$typeof===T||M.$$typeof===E||M.$$typeof===S||M.$$typeof===b||M.$$typeof===h||M.$$typeof===N||M.$$typeof===L||M.$$typeof===Y||M.$$typeof===P)}function W(M){if(typeof M=="object"&&M!==null){var X=M.$$typeof;switch(X){case v:var Ie=M.type;switch(Ie){case f:case d:case p:case _:case m:case w:return Ie;default:var wn=Ie&&Ie.$$typeof;switch(wn){case b:case h:case T:case E:case S:return wn;default:return X}}case y:return X}}}var he=f,ye=d,Se=b,O=S,j=v,A=h,I=p,H=T,J=E,ke=y,Ee=_,ue=m,le=w,fe=!1;function Te(M){return fe||(fe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),fn(M)||W(M)===f}function fn(M){return W(M)===d}function R(M){return W(M)===b}function F(M){return W(M)===S}function q(M){return typeof M=="object"&&M!==null&&M.$$typeof===v}function Z(M){return W(M)===h}function K(M){return W(M)===p}function ie(M){return W(M)===T}function V(M){return W(M)===E}function ne(M){return W(M)===y}function re(M){return W(M)===_}function D(M){return W(M)===m}function oe(M){return W(M)===w}u.AsyncMode=he,u.ConcurrentMode=ye,u.ContextConsumer=Se,u.ContextProvider=O,u.Element=j,u.ForwardRef=A,u.Fragment=I,u.Lazy=H,u.Memo=J,u.Portal=ke,u.Profiler=Ee,u.StrictMode=ue,u.Suspense=le,u.isAsyncMode=Te,u.isConcurrentMode=fn,u.isContextConsumer=R,u.isContextProvider=F,u.isElement=q,u.isForwardRef=Z,u.isFragment=K,u.isLazy=ie,u.isMemo=V,u.isPortal=ne,u.isProfiler=re,u.isStrictMode=D,u.isSuspense=oe,u.isValidElementType=Q,u.typeOf=W})()},"./node_modules/react-is/index.js":(a,u,c)=>{a.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>y,shallowEqualObjects:()=>v});function v(p,m){if(p===m)return!0;if(!p||!m)return!1;var _=Object.keys(p),S=Object.keys(m),b=_.length;if(S.length!==b)return!1;for(var f=0;f<b;f++){var d=_[f];if(p[d]!==m[d]||!Object.prototype.hasOwnProperty.call(m,d))return!1}return!0}function y(p,m){if(p===m)return!0;if(!p||!m)return!1;var _=p.length;if(m.length!==_)return!1;for(var S=0;S<_;S++)if(p[S]!==m[S])return!1;return!0}},"./src/Component.ts":function(a,u,c){var v=this&&this.__rest||function(_,S){var b={};for(var f in _)Object.prototype.hasOwnProperty.call(_,f)&&S.indexOf(f)<0&&(b[f]=_[f]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,f=Object.getOwnPropertySymbols(_);d<f.length;d++)S.indexOf(f[d])<0&&Object.prototype.propertyIsEnumerable.call(_,f[d])&&(b[f[d]]=_[f[d]]);return b},y=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(u,"__esModule",{value:!0});var p=y(c("./src/useMediaQuery.ts")),m=function(_){var S=_.children,b=_.device,f=_.onChange,d=v(_,["children","device","onChange"]),h=(0,p.default)(d,b,f);return typeof S=="function"?S(h):h?S:null};u.default=m},"./src/Context.ts":(a,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var v=c("react"),y=(0,v.createContext)(void 0);u.default=y},"./src/index.ts":function(a,u,c){var v=this&&this.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var y=v(c("./src/useMediaQuery.ts"));u.useMediaQuery=y.default;var p=v(c("./src/Component.ts"));u.default=p.default;var m=v(c("./src/toQuery.ts"));u.toQuery=m.default;var _=v(c("./src/Context.ts"));u.Context=_.default},"./src/mediaQuery.ts":function(a,u,c){var v=this&&this.__assign||function(){return v=Object.assign||function(w){for(var k,E=1,T=arguments.length;E<T;E++){k=arguments[E];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(w[P]=k[P])}return w},v.apply(this,arguments)},y=this&&this.__rest||function(w,k){var E={};for(var T in w)Object.prototype.hasOwnProperty.call(w,T)&&k.indexOf(T)<0&&(E[T]=w[T]);if(w!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,T=Object.getOwnPropertySymbols(w);P<T.length;P++)k.indexOf(T[P])<0&&Object.prototype.propertyIsEnumerable.call(w,T[P])&&(E[T[P]]=w[T[P]]);return E},p=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(u,"__esModule",{value:!0});var m=p(c("./node_modules/prop-types/index.js")),_=m.default.oneOfType([m.default.string,m.default.number]),S={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},b={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:_,deviceHeight:_,width:_,deviceWidth:_,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:_,type:Object.keys(S)};b.type;var f=y(b,["type"]),d=v({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:_,maxHeight:_,minDeviceHeight:_,maxDeviceHeight:_,minWidth:_,maxWidth:_,minDeviceWidth:_,maxDeviceWidth:_,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:_,maxResolution:_},f),h=v(v({},S),d);u.default={all:h,types:S,matchers:b,features:d}},"./src/toQuery.ts":function(a,u,c){var v=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(u,"__esModule",{value:!0});var y=v(c("./node_modules/hyphenate-style-name/index.js")),p=v(c("./src/mediaQuery.ts")),m=function(f){return"not ".concat(f)},_=function(f,d){var h=(0,y.default)(f);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?h:d===!1?m(h):"(".concat(h,": ").concat(d,")")},S=function(f){return f.join(" and ")},b=function(f){var d=[];return Object.keys(p.default.all).forEach(function(h){var w=f[h];w!=null&&d.push(_(h,w))}),S(d)};u.default=b},"./src/useMediaQuery.ts":function(a,u,c){var v=this&&this.__importDefault||function(N){return N&&N.__esModule?N:{default:N}};Object.defineProperty(u,"__esModule",{value:!0});var y=c("react"),p=v(c("./node_modules/matchmediaquery/index.js")),m=v(c("./node_modules/hyphenate-style-name/index.js")),_=c("./node_modules/shallow-equal/dist/index.esm.js"),S=v(c("./src/toQuery.ts")),b=v(c("./src/Context.ts")),f=function(N){return N.query||(0,S.default)(N)},d=function(N){if(N){var L=Object.keys(N);return L.reduce(function(Y,Q){return Y[(0,m.default)(Q)]=N[Q],Y},{})}},h=function(){var N=(0,y.useRef)(!1);return(0,y.useEffect)(function(){N.current=!0},[]),N.current},w=function(N){var L=(0,y.useContext)(b.default),Y=function(){return d(N)||d(L)},Q=(0,y.useState)(Y),W=Q[0],he=Q[1];return(0,y.useEffect)(function(){var ye=Y();(0,_.shallowEqualObjects)(W,ye)||he(ye)},[N,L]),W},k=function(N){var L=function(){return f(N)},Y=(0,y.useState)(L),Q=Y[0],W=Y[1];return(0,y.useEffect)(function(){var he=L();Q!==he&&W(he)},[N]),Q},E=function(N,L){var Y=function(){return(0,p.default)(N,L||{},!!L)},Q=(0,y.useState)(Y),W=Q[0],he=Q[1],ye=h();return(0,y.useEffect)(function(){if(ye){var Se=Y();return he(Se),function(){Se&&Se.dispose()}}},[N,L]),W},T=function(N){var L=(0,y.useState)(N.matches),Y=L[0],Q=L[1];return(0,y.useEffect)(function(){var W=function(he){Q(he.matches)};return N.addListener(W),Q(N.matches),function(){N.removeListener(W)}},[N]),Y},P=function(N,L,Y){var Q=w(L),W=k(N);if(!W)throw new Error("Invalid or missing MediaQuery!");var he=E(W,Q),ye=T(he),Se=h();return(0,y.useEffect)(function(){Se&&Y&&Y(ye)},[ye]),(0,y.useEffect)(function(){return function(){he&&he.dispose()}},[]),ye};u.default=P},react:a=>{a.exports=r}},i={};function s(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={exports:{}};return t[a].call(c.exports,c,c.exports,s),c.exports}s.d=(a,u)=>{for(var c in u)s.o(u,c)&&!s.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},s.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),s.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var l=s("./src/index.ts");return l})())})(Td);var Nd=Td.exports;function Mp(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}function Od({selector:e,duration:n=1500,offset:r=0}){const t=G.useRef(null),i=G.useRef(0),s=G.useRef(!1),l=()=>{i.current&&cancelAnimationFrame(i.current)},a=()=>s.current=!0,u=G.useCallback(()=>{if(!t.current)return;l(),s.current=!1;const v=t.current.offsetTop,y=window.scrollY,p=v-y-r,m=performance.now();if(!p)return;const _=S=>{const b=S-m,f=b/n,d=Mp(f>1?1:f),h=y+p*d;window.scrollTo({top:h}),b<n&&!s.current?requestAnimationFrame(_):i.current=0};requestAnimationFrame(_)},[e,n,r]);return G.useEffect(()=>(t.current=document.querySelector(e),window.addEventListener("wheel",a,{passive:!0}),window.addEventListener("touchmove",a,{passive:!0}),()=>{l(),window.removeEventListener("wheel",a),window.removeEventListener("touchmove",a)}),[e]),u}function en(...e){return e.filter(Boolean).join(" ")}const Lp="_brand_18f9t_1",Ip="_bounce_18f9t_19",Dp="_glowDisappear_18f9t_23",Bp="_heartBeat_18f9t_27",zp="_rubberBand_18f9t_31",Fp="_rotate_18f9t_35",or={brand:Lp,bounce:Ip,glowDisappear:Dp,"glow-disappear":"_glow-disappear_18f9t_1",heartBeat:Bp,"heart-beat":"_heart-beat_18f9t_1",rubberBand:zp,"rubber-band":"_rubber-band_18f9t_1",rotate:Fp};function Up(){const[e,n]=G.useState(or.rotate),[r,t]=G.useState(!1),i=[or.bounce,or.glowDisappear,or.heartBeat,or.rubberBand,or.rotate],s=en(or.brand,r&&e),l=()=>t(!1),a=()=>{const u=Math.floor(Math.random()*i.length),c=i[u];t(!0),n(c)};return o.jsx("div",{className:s,onClick:a,onAnimationEnd:l,children:"JWL"})}const Hp="_container_uucyv_1",$p="_input_uucyv_6",Wp="_label_uucyv_16",Yp="_indicator_uucyv_20",Gp="_decoration_uucyv_28",Qp="_cloud_uucyv_1",Vp="_twinkle_uucyv_1",at={container:Hp,input:$p,label:Wp,indicator:Yp,decoration:Gp,cloud:Qp,twinkle:Vp};function Xa(){const e=document.documentElement,[n,r]=G.useState(!1),t=()=>{const s=new Event("themeChange");e.dispatchEvent(s)},i=()=>{r(!n),e.setAttribute("data-theme",n?"dark":"light"),t()};return G.useEffect(()=>{const s=e.getAttribute("data-theme");r(s==="light"),t()},[]),o.jsxs("div",{className:at.container,children:[o.jsx("input",{className:at.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:n,onChange:i}),o.jsxs("label",{className:at.label,htmlFor:"theme-switch",children:[o.jsx("span",{className:at.indicator}),o.jsx("span",{className:at.decoration})]})]})}function Kp(){const e=document.documentElement,[n,r]=G.useState("light"),t=()=>{const i=e.getAttribute("data-theme")??"light";r(i)};return G.useEffect(()=>(e.addEventListener("themeChange",t),()=>e.removeEventListener("themeChange",t)),[e]),n}function Jp(){const n=Kp()==="dark"?"#FFFFFF":"#181616";return o.jsx("svg",{viewBox:"0 0 128 128",children:o.jsxs("g",{fill:n,children:[o.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),o.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const Xp=72;function Zp({forwardedRef:e}){const n=G.useRef(null),r=Od({selector:"main",offset:Xp}),{isSidebarOpen:t,toggleSidebar:i}=Il(),s=Nd.useMediaQuery({maxWidth:768}),l=en(pn.hamburgerIcon,!t&&pn.collapsed),a=m=>{m.preventDefault(),r()},u=()=>i(),c=()=>!s&&o.jsx(Up,{}),v=()=>!s&&o.jsx("a",{href:"main",onClick:a,role:"button",children:o.jsx("h1",{className:pn.title,children:"LeetCode Cheatsheet"})}),y=()=>o.jsx("a",{href:"https://github.com/jwl-7/leetcode-cheatsheet","aria-label":"GitHub source",className:pn.iconLink,target:"_blank",children:o.jsx(Jp,{})}),p=()=>s?o.jsxs(o.Fragment,{children:[o.jsx(Xa,{}),y()]}):o.jsxs("div",{className:pn.buttonContainer,children:[y(),o.jsx(Xa,{})]});return o.jsx("header",{ref:n,className:pn.topbar,children:o.jsxs("div",{className:pn.container,children:[o.jsxs("div",{ref:e,className:pn.hamburger,onClick:u,children:[o.jsx("span",{className:en(l,pn.hamburgerTop)}),o.jsx("span",{className:en(l,pn.hamburgerMiddle)}),o.jsx("span",{className:en(l,pn.hamburgerBottom)})]}),c(),v(),p()]})})}const qp="_sidebar_14bou_1",eg="_exit_14bou_21",ng="_hide_14bou_24",rg="_scrollContainer_14bou_28",ci={sidebar:qp,"sidebar-enter":"_sidebar-enter_14bou_1",exit:eg,"sidebar-exit":"_sidebar-exit_14bou_1",hide:ng,scrollContainer:rg};function go(e,n){const r=t=>{const i=s=>s.current&&!s.current.contains(t.target);(Array.isArray(e)?e.every(i):i(e))&&n()};G.useEffect(()=>(document.addEventListener("click",r),()=>document.removeEventListener("click",r)),[e,n])}const tg="_accordion_1hmri_1",ig="_button_1hmri_6",og="_open_1hmri_25",sg="_content_1hmri_29",di={accordion:tg,button:ig,open:og,content:sg};function lg(e){const n=parseFloat(e);return!isNaN(n)&&isFinite(n)}function Za(e){return typeof e=="string"&&e[e.length-1]==="%"&&lg(e.substring(0,e.length-1))}function Yo(e,n,r){n===0&&!r&&(e!=null&&e.style)&&(e==null?void 0:e.children.length)>0&&(e.style.display="none")}function ag(e,n){n===0&&(e!=null&&e.style)&&(e.style.display="")}const ug={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function qa(e,n){return[e.static,n===0&&e.staticHeightZero,typeof n=="number"&&n>0?e.staticHeightSpecific:null,n==="auto"&&e.staticHeightAuto].filter(r=>r).join(" ")}const cg=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],dg=mi.forwardRef((e,n)=>{const{animateOpacity:r=!1,animationStateClasses:t={},applyInlineTransitions:i=!0,children:s,className:l="",contentClassName:a,delay:u=0,disableDisplayNone:c=!1,duration:v=500,easing:y="ease",height:p,onHeightAnimationEnd:m,onHeightAnimationStart:_,style:S,contentRef:b}=e,f=Object.assign({},e);cg.forEach(ue=>{delete f[ue]});const d=G.useRef(p),h=G.useRef(null),w=G.useRef(),k=G.useRef(),E=G.useRef(Object.assign(Object.assign({},ug),t)),T=typeof window<"u",P=G.useRef(T&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),N=P.current?0:u,L=P.current?0:v;let Y=p,Q="visible";typeof p=="number"?(Y=p<0?0:p,Q="hidden"):Za(Y)&&(Y=p==="0%"?0:p,Q="hidden");const[W,he]=G.useState(Y),[ye,Se]=G.useState(Q),[O,j]=G.useState(!1),[A,I]=G.useState(qa(E.current,p));G.useEffect(()=>{Yo(h.current,W,c)},[]),G.useEffect(()=>{if(p!==d.current&&h.current){ag(h.current,d.current),h.current.style.overflow="hidden";const ue=h.current.offsetHeight;h.current.style.overflow="";const le=L+N;let fe,Te,fn="hidden",R;const F=d.current==="auto";typeof p=="number"?(fe=p<0?0:p,Te=fe):Za(p)?(fe=p==="0%"?0:p,Te=fe):(fe=ue,Te="auto",fn=void 0),F&&(Te=fe,fe=ue);const q=[E.current.animating,(d.current==="auto"||p<d.current)&&E.current.animatingUp,(p==="auto"||p>d.current)&&E.current.animatingDown,Te===0&&E.current.animatingToHeightZero,Te==="auto"&&E.current.animatingToHeightAuto,typeof Te=="number"&&Te>0?E.current.animatingToHeightSpecific:null].filter(K=>K).join(" "),Z=qa(E.current,Te);he(fe),Se("hidden"),j(!F),I(q),clearTimeout(k.current),clearTimeout(w.current),F?(R=!0,k.current=setTimeout(()=>{he(Te),Se(fn),j(R),_==null||_(Te)},50),w.current=setTimeout(()=>{j(!1),I(Z),Yo(h.current,Te,c),m==null||m(Te)},le)):(_==null||_(fe),k.current=setTimeout(()=>{he(Te),Se(fn),j(!1),I(Z),p!=="auto"&&Yo(h.current,fe,c),m==null||m(fe)},le))}return d.current=p,()=>{clearTimeout(k.current),clearTimeout(w.current)}},[p]);const H=Object.assign(Object.assign({},S),{height:W,overflow:ye||(S==null?void 0:S.overflow)});O&&i&&(H.transition=`height ${L}ms ${y} ${N}ms`,S!=null&&S.transition&&(H.transition=`${S.transition}, ${H.transition}`),H.WebkitTransition=H.transition);const J={};r&&(J.transition=`opacity ${L}ms ${y} ${N}ms`,J.WebkitTransition=J.transition,W===0&&(J.opacity=0));const Ee=typeof f["aria-hidden"]<"u"?f["aria-hidden"]:p===0;return mi.createElement("div",Object.assign({},f,{"aria-hidden":Ee,className:`${A} ${l}`,style:H,ref:n}),mi.createElement("div",{className:a,style:J,ref:ue=>{h.current=ue,b&&(b.current=ue)}},s))});function fg(){return o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})}function He({title:e,children:n}){const[r,t]=G.useState(!1),i=r?"auto":0,s=en(di.button,r&&di.open),l=()=>t(!r);return o.jsxs("div",{className:di.accordion,children:[o.jsxs("button",{className:s,onClick:l,children:[o.jsx("span",{children:e}),o.jsx(fg,{})]}),o.jsx(dg,{animateOpacity:!0,height:i,duration:400,children:o.jsx("div",{className:di.content,children:n})})]})}const hg="_linkWrapper_1logo_1",pg="_link_1logo_1",eu={linkWrapper:hg,link:pg},gg="_tooltip_1edpy_1",mg="_exit_1edpy_13",vg="_text_1edpy_27",Go={tooltip:gg,"tooltip-enter":"_tooltip-enter_1edpy_1",exit:mg,"tooltip-exit":"_tooltip-exit_1edpy_1",text:vg};function yg({anchorRef:e,content:n,showTooltip:r}){const t=G.useRef(null),[i,s]=G.useState(null),[l,a]=G.useState(!1),u=en(Go.tooltip,!r&&Go.exit),c=()=>a(!1),v=()=>{r||a(!0)};return G.useEffect(()=>{var S;if(!r||!e.current)return;const y=e.current.getBoundingClientRect(),p=((S=t.current)==null?void 0:S.offsetHeight)??0,m=y.left+window.scrollX,_=y.top+window.scrollY-p-4;s({top:_,left:m})},[r]),(r||!l)&&e.current&&yp.createPortal(o.jsx("div",{ref:t,className:u,style:i??{},onAnimationStart:c,onAnimationEnd:v,children:o.jsx("span",{className:Go.text,children:n})}),document.body)}function z({href:e,description:n}){const r=G.useRef(null),[t,i]=G.useState(!1),s=Od({selector:e,offset:72});let l;const a=v=>{v.preventDefault(),window.history.replaceState({},"",e),clearTimeout(l),i(!1),s()},u=()=>{l=setTimeout(()=>{i(!0)},700)},c=()=>{clearTimeout(l),i(!1)};return o.jsxs("div",{className:eu.linkWrapper,children:[o.jsx("a",{ref:r,href:e,className:eu.link,onClick:a,role:"button","aria-description":n,onMouseEnter:u,onMouseLeave:c,children:n}),o.jsx(yg,{anchorRef:r,content:n,showTooltip:t})]})}function xg(){return o.jsxs(o.Fragment,{children:[o.jsxs(He,{title:"Big O",children:[o.jsx(z,{href:"#bigo-chart",description:"Time/Space Complexities"}),o.jsx(z,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),o.jsx(z,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),o.jsxs(He,{title:"Array",children:[o.jsx(z,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),o.jsx(z,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),o.jsx(z,{href:"#array-sliding-window",description:"sliding window"}),o.jsx(z,{href:"#array-prefix-sum",description:"prefix sum"}),o.jsx(z,{href:"#array-string-building",description:"efficient string building"})]}),o.jsx(He,{title:"Hash Map",children:o.jsx(z,{href:"#hashmap-number-of-subarrays",description:"number of subarrays that fit an exact criteria"})}),o.jsxs(He,{title:"Linked List",children:[o.jsx(z,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),o.jsx(z,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),o.jsx(He,{title:"Stack",children:o.jsx(z,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"})}),o.jsxs(He,{title:"Binary Tree",children:[o.jsx(z,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),o.jsx(z,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),o.jsx(z,{href:"#tree-bfs",description:"BFS"})]}),o.jsxs(He,{title:"Graph",children:[o.jsx(z,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),o.jsx(z,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),o.jsx(z,{href:"#graph-bfs",description:"BFS"}),o.jsx(z,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),o.jsx(z,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),o.jsx(z,{href:"#graph-kruskal",description:"Kruskal (mst)"}),o.jsx(z,{href:"#graph-prim",description:"Prim (mst)"}),o.jsx(z,{href:"#graph-kahn",description:"Kahn (topological sort)"})]}),o.jsx(He,{title:"Heap",children:o.jsx(z,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),o.jsxs(He,{title:"Binary Search",children:[o.jsx(z,{href:"#binarysearch-binary-search",description:"binary search"}),o.jsx(z,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),o.jsx(z,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),o.jsx(z,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),o.jsx(z,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),o.jsx(He,{title:"Backtracking",children:o.jsx(z,{href:"#backtracking-backtracking",description:"backtracking"})}),o.jsxs(He,{title:"Dynamic Programming",children:[o.jsx(z,{href:"#dp-top-down",description:"top-down DP"}),o.jsx(z,{href:"#dp-bottom-up",description:"bottom-up DP"})]}),o.jsxs(He,{title:"Bit Manipulation",children:[o.jsx(z,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),o.jsx(z,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),o.jsx(z,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),o.jsx(z,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),o.jsx(z,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),o.jsx(z,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),o.jsx(z,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),o.jsx(z,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),o.jsx(z,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),o.jsxs(He,{title:"Matrix",children:[o.jsx(z,{href:"#matrix-create-copy",description:"create / copy"}),o.jsx(z,{href:"#matrix-diagonals",description:"main / anti diagonals"}),o.jsx(z,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),o.jsxs(He,{title:"Data Structures",children:[o.jsx(z,{href:"#ds-array",description:"array"}),o.jsx(z,{href:"#ds-hash-map",description:"hashmap"}),o.jsx(z,{href:"#ds-linked-list",description:"linked list"}),o.jsx(z,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),o.jsx(z,{href:"#ds-binary-tree",description:"binary tree"}),o.jsx(z,{href:"#ds-binary-search-tree",description:"binary search tree"}),o.jsx(z,{href:"#ds-graph",description:"graph"}),o.jsx(z,{href:"#ds-union-find",description:"union find"}),o.jsx(z,{href:"#ds-union-find-optimized",description:"union find optimized"}),o.jsx(z,{href:"#ds-trie",description:"trie"})]}),o.jsxs(He,{title:"Sorting Algorithms",children:[o.jsx(z,{href:"#sort-bubble",description:"bubble sort"}),o.jsx(z,{href:"#sort-selection",description:"selection sort"}),o.jsx(z,{href:"#sort-insertion",description:"insertion sort"}),o.jsx(z,{href:"#sort-shell",description:"shell sort"}),o.jsx(z,{href:"#sort-merge",description:"mergesort"}),o.jsx(z,{href:"#sort-quick",description:"quicksort"}),o.jsx(z,{href:"#sort-tim",description:"timsort"}),o.jsx(z,{href:"#sort-heap",description:"heapsort"}),o.jsx(z,{href:"#sort-counting",description:"counting sort"}),o.jsx(z,{href:"#sort-bucket",description:"bucket sort"}),o.jsx(z,{href:"#sort-radix",description:"radix sort"}),o.jsx(z,{href:"#sort-cube",description:"cubesort"}),o.jsx(z,{href:"#sort-bogo",description:"bogo sort"}),o.jsx(z,{href:"#sort-pancake",description:"pancake sort"}),o.jsx(z,{href:"#sort-sleep",description:"sleep sort"})]})]})}function _g({hamburgerButtonRef:e}){const n=G.useRef(null),{isSidebarOpen:r,showSidebar:t,hideSidebar:i}=Il(),[s,l]=G.useState(!1),a=en(ci.sidebar,!r&&ci.exit,!r&&s&&ci.hide),u=m=>{m&&r?i():!m&&!r&&t()},c=Nd.useMediaQuery({maxWidth:768},void 0,u),v=()=>{c&&r&&i()},y=()=>l(!1),p=()=>{r||l(!0)};return go([n,e],v),o.jsx("nav",{ref:n,className:a,onAnimationStart:y,onAnimationEndCapture:p,children:o.jsx("div",{className:ci.scrollContainer,children:o.jsx(xg,{})})})}function wg(){const e=G.useRef(null);return o.jsxs("div",{id:"AppBar",children:[o.jsx(Zp,{forwardedRef:e}),o.jsx(_g,{hamburgerButtonRef:e})]})}const Sg="_main_1p6ym_1",jg="_sidebarHidden_1p6ym_11",nu={main:Sg,sidebarHidden:jg},kg="_container_1htmy_1",Eg="_sectionHeader_1htmy_7",ae={container:kg,sectionHeader:Eg},Tg="_container_5c21h_1",Ng="_label_5c21h_13",Og="_tableWrapper_5c21h_21",bg="_red_5c21h_30",Cg="_oliveGreen_5c21h_34",Ag="_green_5c21h_38",Rg="_orange_5c21h_42",Pg="_yellow_5c21h_46",Mg="_gray_5c21h_50",x={container:Tg,label:Ng,tableWrapper:Og,red:bg,oliveGreen:Cg,green:Ag,orange:Rg,yellow:Pg,gray:Mg};function Lg(){const e={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return o.jsx("section",{id:"bigo-chart",children:o.jsxs("div",{className:x.container,children:[o.jsx("h3",{children:"Big-O Complexity Chart"}),o.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[o.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:e.red}),o.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:e.orange}),o.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:e.yellow}),o.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:e.oliveGreen}),o.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:e.green}),o.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),o.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),o.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),o.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),o.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),o.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),o.jsx("text",{className:x.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),o.jsx("text",{className:x.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function Ig(){const e=G.useRef(null),[n,r]=G.useState(""),t=()=>{if(n){const s=e.current,l=s==null?void 0:s.querySelector(`tr[data-row-number="${n}"]`);l==null||l.removeAttribute("focused")}},i=s=>{const l=s.currentTarget,a=l.getAttribute("data-row-number")??"";t(),a===n?r(""):(l.setAttribute("focused",""),r(a))};return go(e,t),o.jsx("section",{id:"bigo-data-structure-operations-table",children:o.jsxs("div",{className:x.container,children:[o.jsx("h3",{children:"Data Structure Operations"}),o.jsx("div",{className:x.tableWrapper,children:o.jsx("table",{ref:e,children:o.jsxs("tbody",{children:[o.jsxs("tr",{onClick:i,"data-row-number":"1",children:[o.jsx("th",{children:"Data Structure"}),o.jsx("th",{colSpan:8,children:"Time Complexity"}),o.jsx("th",{children:"Space Complexity"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"2",children:[o.jsx("th",{}),o.jsx("th",{colSpan:4,children:"Average"}),o.jsx("th",{colSpan:4,children:"Worst"}),o.jsx("th",{children:"Worst"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"3",children:[o.jsx("th",{}),o.jsx("th",{children:"Access"}),o.jsx("th",{children:"Search"}),o.jsx("th",{children:"Insertion"}),o.jsx("th",{children:"Deletion"}),o.jsx("th",{children:"Access"}),o.jsx("th",{children:"Search"}),o.jsx("th",{children:"Insertion"}),o.jsx("th",{children:"Deletion"}),o.jsx("th",{})]}),o.jsxs("tr",{onClick:i,"data-row-number":"4",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"5",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"6",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"7",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"8",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.yellow,children:"Θ(n)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.green,children:"O(1)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"9",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.orange,children:"O(n log(n))"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"10",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.green,children:"Θ(1)"}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"11",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"12",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"13",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"14",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"15",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.gray,children:"N/A"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"16",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"17",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]})]})})})]})})}function Dg(){const e=G.useRef(null),[n,r]=G.useState(""),t=()=>{if(n){const s=e.current,l=s==null?void 0:s.querySelector(`tr[data-row-number="${n}"]`);l==null||l.removeAttribute("focused")}},i=s=>{const l=s.currentTarget,a=l.getAttribute("data-row-number")??"";t(),a===n?r(""):(l.setAttribute("focused",""),r(a))};return go(e,t),o.jsx("section",{id:"bigo-sorting-algorithms-table",children:o.jsxs("div",{className:x.container,children:[o.jsx("h3",{children:"Array Sorting Algorithms"}),o.jsx("div",{className:x.tableWrapper,children:o.jsx("table",{ref:e,children:o.jsxs("tbody",{children:[o.jsxs("tr",{onClick:i,"data-row-number":"1",children:[o.jsx("th",{children:"Algorithm"}),o.jsx("th",{colSpan:3,children:"Time Complexity"}),o.jsx("th",{children:"Space Complexity"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"2",children:[o.jsx("th",{}),o.jsx("th",{children:"Best"}),o.jsx("th",{children:"Average"}),o.jsx("th",{children:"Worst"}),o.jsx("th",{children:"Worst"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"3",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),o.jsx("td",{className:x.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.oliveGreen,children:"O(log(n))"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"4",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),o.jsx("td",{className:x.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.orange,children:"O(n log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"5",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),o.jsx("td",{className:x.yellow,children:"Ω(n)"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.orange,children:"O(n log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"6",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),o.jsx("td",{className:x.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.orange,children:"O(n log(n))"}),o.jsx("td",{className:x.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"7",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),o.jsx("td",{className:x.yellow,children:"Ω(n)"}),o.jsx("td",{className:x.red,children:"Θ(n^2)"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"8",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),o.jsx("td",{className:x.yellow,children:"Ω(n)"}),o.jsx("td",{className:x.red,children:"Θ(n^2)"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"9",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),o.jsx("td",{className:x.red,children:"Ω(n^2)"}),o.jsx("td",{className:x.red,children:"Θ(n^2)"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"10",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),o.jsx("td",{className:x.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"11",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),o.jsx("td",{className:x.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:x.red,children:"Θ(n(log(n))^2)"}),o.jsx("td",{className:x.red,children:"O(n(log(n))^2)"}),o.jsx("td",{className:x.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"12",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),o.jsx("td",{className:x.green,children:"Ω(n+k)"}),o.jsx("td",{className:x.green,children:"Θ(n+k)"}),o.jsx("td",{className:x.red,children:"O(n^2)"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"13",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),o.jsx("td",{className:x.green,children:"Ω(nk)"}),o.jsx("td",{className:x.green,children:"Θ(nk)"}),o.jsx("td",{className:x.green,children:"O(nk)"}),o.jsx("td",{className:x.yellow,children:"O(n+k)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"14",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),o.jsx("td",{className:x.green,children:"Ω(n+k)"}),o.jsx("td",{className:x.green,children:"Θ(n+k)"}),o.jsx("td",{className:x.green,children:"O(n+k)"}),o.jsx("td",{className:x.yellow,children:"O(k)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"15",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),o.jsx("td",{className:x.yellow,children:"Ω(n)"}),o.jsx("td",{className:x.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:x.orange,children:"O(n log(n))"}),o.jsx("td",{className:x.yellow,children:"O(n)"})]})]})})})]})})}function Bg(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Big O"}),o.jsx(Lg,{}),o.jsx(Ig,{}),o.jsx(Dg,{})]})}const zg="_container_12crg_1",Fg="_buttonContainer_12crg_12",Ug="_tabButtonContainer_12crg_18",Hg="_tabButton_12crg_18",fi={container:zg,buttonContainer:Fg,tabButtonContainer:Ug,tabButton:Hg},$g="_code_3reoe_1",Wg="_line_3reoe_13",ru={code:$g,line:Wg};function bd(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const r=e[n],t=typeof r;(t==="object"||t==="function")&&!Object.isFrozen(r)&&bd(r)}),e}class tu{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Cd(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Yn(e,...n){const r=Object.create(null);for(const t in e)r[t]=e[t];return n.forEach(function(t){for(const i in t)r[i]=t[i]}),r}const Yg="</span>",iu=e=>!!e.scope,Gg=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const r=e.split(".");return[`${n}${r.shift()}`,...r.map((t,i)=>`${t}${"_".repeat(i+1)}`)].join(" ")}return`${n}${e}`};class Qg{constructor(n,r){this.buffer="",this.classPrefix=r.classPrefix,n.walk(this)}addText(n){this.buffer+=Cd(n)}openNode(n){if(!iu(n))return;const r=Gg(n.scope,{prefix:this.classPrefix});this.span(r)}closeNode(n){iu(n)&&(this.buffer+=Yg)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const ou=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Dl{constructor(){this.rootNode=ou(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const r=ou({scope:n});this.add(r),this.stack.push(r)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,r){return typeof r=="string"?n.addText(r):r.children&&(n.openNode(r),r.children.forEach(t=>this._walk(n,t)),n.closeNode(r)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(r=>typeof r=="string")?n.children=[n.children.join("")]:n.children.forEach(r=>{Dl._collapse(r)}))}}class Vg extends Dl{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,r){const t=n.root;r&&(t.scope=`language:${r}`),this.add(t)}toHTML(){return new Qg(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function zt(e){return e?typeof e=="string"?e:e.source:null}function Ad(e){return Sr("(?=",e,")")}function Kg(e){return Sr("(?:",e,")*")}function Jg(e){return Sr("(?:",e,")?")}function Sr(...e){return e.map(r=>zt(r)).join("")}function Xg(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function Bl(...e){return"("+(Xg(e).capture?"":"?:")+e.map(t=>zt(t)).join("|")+")"}function Rd(e){return new RegExp(e.toString()+"|").exec("").length-1}function Zg(e,n){const r=e&&e.exec(n);return r&&r.index===0}const qg=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function zl(e,{joinWith:n}){let r=0;return e.map(t=>{r+=1;const i=r;let s=zt(t),l="";for(;s.length>0;){const a=qg.exec(s);if(!a){l+=s;break}l+=s.substring(0,a.index),s=s.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?l+="\\"+String(Number(a[1])+i):(l+=a[0],a[0]==="("&&r++)}return l}).map(t=>`(${t})`).join(n)}const em=/\b\B/,Pd="[a-zA-Z]\\w*",Fl="[a-zA-Z_]\\w*",Md="\\b\\d+(\\.\\d+)?",Ld="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Id="\\b(0b[01]+)",nm="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",rm=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=Sr(n,/.*\b/,e.binary,/\b.*/)),Yn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(r,t)=>{r.index!==0&&t.ignoreMatch()}},e)},Ft={begin:"\\\\[\\s\\S]",relevance:0},tm={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ft]},im={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ft]},om={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},mo=function(e,n,r={}){const t=Yn({scope:"comment",begin:e,end:n,contains:[]},r);t.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Bl("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return t.contains.push({begin:Sr(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),t},sm=mo("//","$"),lm=mo("/\\*","\\*/"),am=mo("#","$"),um={scope:"number",begin:Md,relevance:0},cm={scope:"number",begin:Ld,relevance:0},dm={scope:"number",begin:Id,relevance:0},fm={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ft,{begin:/\[/,end:/\]/,relevance:0,contains:[Ft]}]},hm={scope:"title",begin:Pd,relevance:0},pm={scope:"title",begin:Fl,relevance:0},gm={begin:"\\.\\s*"+Fl,relevance:0},mm=function(e){return Object.assign(e,{"on:begin":(n,r)=>{r.data._beginMatch=n[1]},"on:end":(n,r)=>{r.data._beginMatch!==n[1]&&r.ignoreMatch()}})};var hi=Object.freeze({__proto__:null,APOS_STRING_MODE:tm,BACKSLASH_ESCAPE:Ft,BINARY_NUMBER_MODE:dm,BINARY_NUMBER_RE:Id,COMMENT:mo,C_BLOCK_COMMENT_MODE:lm,C_LINE_COMMENT_MODE:sm,C_NUMBER_MODE:cm,C_NUMBER_RE:Ld,END_SAME_AS_BEGIN:mm,HASH_COMMENT_MODE:am,IDENT_RE:Pd,MATCH_NOTHING_RE:em,METHOD_GUARD:gm,NUMBER_MODE:um,NUMBER_RE:Md,PHRASAL_WORDS_MODE:om,QUOTE_STRING_MODE:im,REGEXP_MODE:fm,RE_STARTERS_RE:nm,SHEBANG:rm,TITLE_MODE:hm,UNDERSCORE_IDENT_RE:Fl,UNDERSCORE_TITLE_MODE:pm});function vm(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function ym(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function xm(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=vm,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function _m(e,n){Array.isArray(e.illegal)&&(e.illegal=Bl(...e.illegal))}function wm(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Sm(e,n){e.relevance===void 0&&(e.relevance=1)}const jm=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const r=Object.assign({},e);Object.keys(e).forEach(t=>{delete e[t]}),e.keywords=r.keywords,e.begin=Sr(r.beforeMatch,Ad(r.begin)),e.starts={relevance:0,contains:[Object.assign(r,{endsParent:!0})]},e.relevance=0,delete r.beforeMatch},km=["of","and","for","in","not","or","if","then","parent","list","value"],Em="keyword";function Dd(e,n,r=Em){const t=Object.create(null);return typeof e=="string"?i(r,e.split(" ")):Array.isArray(e)?i(r,e):Object.keys(e).forEach(function(s){Object.assign(t,Dd(e[s],n,s))}),t;function i(s,l){n&&(l=l.map(a=>a.toLowerCase())),l.forEach(function(a){const u=a.split("|");t[u[0]]=[s,Tm(u[0],u[1])]})}}function Tm(e,n){return n?Number(n):Nm(e)?0:1}function Nm(e){return km.includes(e.toLowerCase())}const su={},pr=e=>{console.error(e)},lu=(e,...n)=>{console.log(`WARN: ${e}`,...n)},kr=(e,n)=>{su[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),su[`${e}/${n}`]=!0)},Xi=new Error;function Bd(e,n,{key:r}){let t=0;const i=e[r],s={},l={};for(let a=1;a<=n.length;a++)l[a+t]=i[a],s[a+t]=!0,t+=Rd(n[a-1]);e[r]=l,e[r]._emit=s,e[r]._multi=!0}function Om(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw pr("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Xi;if(typeof e.beginScope!="object"||e.beginScope===null)throw pr("beginScope must be object"),Xi;Bd(e,e.begin,{key:"beginScope"}),e.begin=zl(e.begin,{joinWith:""})}}function bm(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw pr("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Xi;if(typeof e.endScope!="object"||e.endScope===null)throw pr("endScope must be object"),Xi;Bd(e,e.end,{key:"endScope"}),e.end=zl(e.end,{joinWith:""})}}function Cm(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Am(e){Cm(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Om(e),bm(e)}function Rm(e){function n(l,a){return new RegExp(zt(l),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,a]),this.matchAt+=Rd(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(u=>u[1]);this.matcherRe=n(zl(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(a);if(!u)return null;const c=u.findIndex((y,p)=>p>0&&y!==void 0),v=this.matchIndexes[c];return u.splice(0,c),Object.assign(u,v)}}class t{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const u=new r;return this.rules.slice(a).forEach(([c,v])=>u.addRule(c,v)),u.compile(),this.multiRegexes[a]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,u){this.rules.push([a,u]),u.type==="begin"&&this.count++}exec(a){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let c=u.exec(a);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const v=this.getMatcher(0);v.lastIndex=this.lastIndex+1,c=v.exec(a)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function i(l){const a=new t;return l.contains.forEach(u=>a.addRule(u.begin,{rule:u,type:"begin"})),l.terminatorEnd&&a.addRule(l.terminatorEnd,{type:"end"}),l.illegal&&a.addRule(l.illegal,{type:"illegal"}),a}function s(l,a){const u=l;if(l.isCompiled)return u;[ym,wm,Am,jm].forEach(v=>v(l,a)),e.compilerExtensions.forEach(v=>v(l,a)),l.__beforeBegin=null,[xm,_m,Sm].forEach(v=>v(l,a)),l.isCompiled=!0;let c=null;return typeof l.keywords=="object"&&l.keywords.$pattern&&(l.keywords=Object.assign({},l.keywords),c=l.keywords.$pattern,delete l.keywords.$pattern),c=c||/\w+/,l.keywords&&(l.keywords=Dd(l.keywords,e.case_insensitive)),u.keywordPatternRe=n(c,!0),a&&(l.begin||(l.begin=/\B|\b/),u.beginRe=n(u.begin),!l.end&&!l.endsWithParent&&(l.end=/\B|\b/),l.end&&(u.endRe=n(u.end)),u.terminatorEnd=zt(u.end)||"",l.endsWithParent&&a.terminatorEnd&&(u.terminatorEnd+=(l.end?"|":"")+a.terminatorEnd)),l.illegal&&(u.illegalRe=n(l.illegal)),l.contains||(l.contains=[]),l.contains=[].concat(...l.contains.map(function(v){return Pm(v==="self"?l:v)})),l.contains.forEach(function(v){s(v,u)}),l.starts&&s(l.starts,a),u.matcher=i(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Yn(e.classNameAliases||{}),s(e)}function zd(e){return e?e.endsWithParent||zd(e.starts):!1}function Pm(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Yn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:zd(e)?Yn(e,{starts:e.starts?Yn(e.starts):null}):Object.isFrozen(e)?Yn(e):e}var Mm="11.9.0";class Lm extends Error{constructor(n,r){super(n),this.name="HTMLInjectionError",this.html=r}}const Qo=Cd,au=Yn,uu=Symbol("nomatch"),Im=7,Fd=function(e){const n=Object.create(null),r=Object.create(null),t=[];let i=!0;const s="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Vg};function u(O){return a.noHighlightRe.test(O)}function c(O){let j=O.className+" ";j+=O.parentNode?O.parentNode.className:"";const A=a.languageDetectRe.exec(j);if(A){const I=N(A[1]);return I||(lu(s.replace("{}",A[1])),lu("Falling back to no-highlight mode for this block.",O)),I?A[1]:"no-highlight"}return j.split(/\s+/).find(I=>u(I)||N(I))}function v(O,j,A){let I="",H="";typeof j=="object"?(I=O,A=j.ignoreIllegals,H=j.language):(kr("10.7.0","highlight(lang, code, ...args) has been deprecated."),kr("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),H=O,I=j),A===void 0&&(A=!0);const J={code:I,language:H};ye("before:highlight",J);const ke=J.result?J.result:y(J.language,J.code,A);return ke.code=J.code,ye("after:highlight",ke),ke}function y(O,j,A,I){const H=Object.create(null);function J(B,$){return B.keywords[$]}function ke(){if(!D.keywords){M.addText(X);return}let B=0;D.keywordPatternRe.lastIndex=0;let $=D.keywordPatternRe.exec(X),ee="";for(;$;){ee+=X.substring(B,$.index);const ce=V.case_insensitive?$[0].toLowerCase():$[0],De=J(D,ce);if(De){const[Nn,Wd]=De;if(M.addText(ee),ee="",H[ce]=(H[ce]||0)+1,H[ce]<=Im&&(Ie+=Wd),Nn.startsWith("_"))ee+=$[0];else{const Yd=V.classNameAliases[Nn]||Nn;le($[0],Yd)}}else ee+=$[0];B=D.keywordPatternRe.lastIndex,$=D.keywordPatternRe.exec(X)}ee+=X.substring(B),M.addText(ee)}function Ee(){if(X==="")return;let B=null;if(typeof D.subLanguage=="string"){if(!n[D.subLanguage]){M.addText(X);return}B=y(D.subLanguage,X,!0,oe[D.subLanguage]),oe[D.subLanguage]=B._top}else B=m(X,D.subLanguage.length?D.subLanguage:null);D.relevance>0&&(Ie+=B.relevance),M.__addSublanguage(B._emitter,B.language)}function ue(){D.subLanguage!=null?Ee():ke(),X=""}function le(B,$){B!==""&&(M.startScope($),M.addText(B),M.endScope())}function fe(B,$){let ee=1;const ce=$.length-1;for(;ee<=ce;){if(!B._emit[ee]){ee++;continue}const De=V.classNameAliases[B[ee]]||B[ee],Nn=$[ee];De?le(Nn,De):(X=Nn,ke(),X=""),ee++}}function Te(B,$){return B.scope&&typeof B.scope=="string"&&M.openNode(V.classNameAliases[B.scope]||B.scope),B.beginScope&&(B.beginScope._wrap?(le(X,V.classNameAliases[B.beginScope._wrap]||B.beginScope._wrap),X=""):B.beginScope._multi&&(fe(B.beginScope,$),X="")),D=Object.create(B,{parent:{value:D}}),D}function fn(B,$,ee){let ce=Zg(B.endRe,ee);if(ce){if(B["on:end"]){const De=new tu(B);B["on:end"]($,De),De.isMatchIgnored&&(ce=!1)}if(ce){for(;B.endsParent&&B.parent;)B=B.parent;return B}}if(B.endsWithParent)return fn(B.parent,$,ee)}function R(B){return D.matcher.regexIndex===0?(X+=B[0],1):(yo=!0,0)}function F(B){const $=B[0],ee=B.rule,ce=new tu(ee),De=[ee.__beforeBegin,ee["on:begin"]];for(const Nn of De)if(Nn&&(Nn(B,ce),ce.isMatchIgnored))return R($);return ee.skip?X+=$:(ee.excludeBegin&&(X+=$),ue(),!ee.returnBegin&&!ee.excludeBegin&&(X=$)),Te(ee,B),ee.returnBegin?0:$.length}function q(B){const $=B[0],ee=j.substring(B.index),ce=fn(D,B,ee);if(!ce)return uu;const De=D;D.endScope&&D.endScope._wrap?(ue(),le($,D.endScope._wrap)):D.endScope&&D.endScope._multi?(ue(),fe(D.endScope,B)):De.skip?X+=$:(De.returnEnd||De.excludeEnd||(X+=$),ue(),De.excludeEnd&&(X=$));do D.scope&&M.closeNode(),!D.skip&&!D.subLanguage&&(Ie+=D.relevance),D=D.parent;while(D!==ce.parent);return ce.starts&&Te(ce.starts,B),De.returnEnd?0:$.length}function Z(){const B=[];for(let $=D;$!==V;$=$.parent)$.scope&&B.unshift($.scope);B.forEach($=>M.openNode($))}let K={};function ie(B,$){const ee=$&&$[0];if(X+=B,ee==null)return ue(),0;if(K.type==="begin"&&$.type==="end"&&K.index===$.index&&ee===""){if(X+=j.slice($.index,$.index+1),!i){const ce=new Error(`0 width match regex (${O})`);throw ce.languageName=O,ce.badRule=K.rule,ce}return 1}if(K=$,$.type==="begin")return F($);if($.type==="illegal"&&!A){const ce=new Error('Illegal lexeme "'+ee+'" for mode "'+(D.scope||"<unnamed>")+'"');throw ce.mode=D,ce}else if($.type==="end"){const ce=q($);if(ce!==uu)return ce}if($.type==="illegal"&&ee==="")return 1;if(vo>1e5&&vo>$.index*3)throw new Error("potential infinite loop, way more iterations than matches");return X+=ee,ee.length}const V=N(O);if(!V)throw pr(s.replace("{}",O)),new Error('Unknown language: "'+O+'"');const ne=Rm(V);let re="",D=I||ne;const oe={},M=new a.__emitter(a);Z();let X="",Ie=0,wn=0,vo=0,yo=!1;try{if(V.__emitTokens)V.__emitTokens(j,M);else{for(D.matcher.considerAll();;){vo++,yo?yo=!1:D.matcher.considerAll(),D.matcher.lastIndex=wn;const B=D.matcher.exec(j);if(!B)break;const $=j.substring(wn,B.index),ee=ie($,B);wn=B.index+ee}ie(j.substring(wn))}return M.finalize(),re=M.toHTML(),{language:O,value:re,relevance:Ie,illegal:!1,_emitter:M,_top:D}}catch(B){if(B.message&&B.message.includes("Illegal"))return{language:O,value:Qo(j),illegal:!0,relevance:0,_illegalBy:{message:B.message,index:wn,context:j.slice(wn-100,wn+100),mode:B.mode,resultSoFar:re},_emitter:M};if(i)return{language:O,value:Qo(j),illegal:!1,relevance:0,errorRaised:B,_emitter:M,_top:D};throw B}}function p(O){const j={value:Qo(O),illegal:!1,relevance:0,_top:l,_emitter:new a.__emitter(a)};return j._emitter.addText(O),j}function m(O,j){j=j||a.languages||Object.keys(n);const A=p(O),I=j.filter(N).filter(Y).map(ue=>y(ue,O,!1));I.unshift(A);const H=I.sort((ue,le)=>{if(ue.relevance!==le.relevance)return le.relevance-ue.relevance;if(ue.language&&le.language){if(N(ue.language).supersetOf===le.language)return 1;if(N(le.language).supersetOf===ue.language)return-1}return 0}),[J,ke]=H,Ee=J;return Ee.secondBest=ke,Ee}function _(O,j,A){const I=j&&r[j]||A;O.classList.add("hljs"),O.classList.add(`language-${I}`)}function S(O){let j=null;const A=c(O);if(u(A))return;if(ye("before:highlightElement",{el:O,language:A}),O.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);return}if(O.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),a.throwUnescapedHTML))throw new Lm("One of your code blocks includes unescaped HTML.",O.innerHTML);j=O;const I=j.textContent,H=A?v(I,{language:A,ignoreIllegals:!0}):m(I);O.innerHTML=H.value,O.dataset.highlighted="yes",_(O,A,H.language),O.result={language:H.language,re:H.relevance,relevance:H.relevance},H.secondBest&&(O.secondBest={language:H.secondBest.language,relevance:H.secondBest.relevance}),ye("after:highlightElement",{el:O,result:H,text:I})}function b(O){a=au(a,O)}const f=()=>{w(),kr("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function d(){w(),kr("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let h=!1;function w(){if(document.readyState==="loading"){h=!0;return}document.querySelectorAll(a.cssSelector).forEach(S)}function k(){h&&w()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",k,!1);function E(O,j){let A=null;try{A=j(e)}catch(I){if(pr("Language definition for '{}' could not be registered.".replace("{}",O)),i)pr(I);else throw I;A=l}A.name||(A.name=O),n[O]=A,A.rawDefinition=j.bind(null,e),A.aliases&&L(A.aliases,{languageName:O})}function T(O){delete n[O];for(const j of Object.keys(r))r[j]===O&&delete r[j]}function P(){return Object.keys(n)}function N(O){return O=(O||"").toLowerCase(),n[O]||n[r[O]]}function L(O,{languageName:j}){typeof O=="string"&&(O=[O]),O.forEach(A=>{r[A.toLowerCase()]=j})}function Y(O){const j=N(O);return j&&!j.disableAutodetect}function Q(O){O["before:highlightBlock"]&&!O["before:highlightElement"]&&(O["before:highlightElement"]=j=>{O["before:highlightBlock"](Object.assign({block:j.el},j))}),O["after:highlightBlock"]&&!O["after:highlightElement"]&&(O["after:highlightElement"]=j=>{O["after:highlightBlock"](Object.assign({block:j.el},j))})}function W(O){Q(O),t.push(O)}function he(O){const j=t.indexOf(O);j!==-1&&t.splice(j,1)}function ye(O,j){const A=O;t.forEach(function(I){I[A]&&I[A](j)})}function Se(O){return kr("10.7.0","highlightBlock will be removed entirely in v12.0"),kr("10.7.0","Please use highlightElement now."),S(O)}Object.assign(e,{highlight:v,highlightAuto:m,highlightAll:w,highlightElement:S,highlightBlock:Se,configure:b,initHighlighting:f,initHighlightingOnLoad:d,registerLanguage:E,unregisterLanguage:T,listLanguages:P,getLanguage:N,registerAliases:L,autoDetection:Y,inherit:au,addPlugin:W,removePlugin:he}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString=Mm,e.regex={concat:Sr,lookahead:Ad,either:Bl,optional:Jg,anyNumberOfTimes:Kg};for(const O in hi)typeof hi[O]=="object"&&bd(hi[O]);return Object.assign(e,hi),e},Jr=Fd({});Jr.newInstance=()=>Fd({});var Dm=Jr;Jr.HighlightJS=Jr;Jr.default=Jr;const Ul=Us(Dm),cu="[A-Za-z$_][0-9A-Za-z$_]*",Bm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],zm=["true","false","null","undefined","NaN","Infinity"],Ud=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Hd=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],$d=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Fm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Um=[].concat($d,Ud,Hd);function Hm(e){const n=e.regex,r=(j,{after:A})=>{const I="</"+j[0].slice(1);return j.input.indexOf(I,A)!==-1},t=cu,i={begin:"<>",end:"</>"},s=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(j,A)=>{const I=j[0].length+j.index,H=j.input[I];if(H==="<"||H===","){A.ignoreMatch();return}H===">"&&(r(j,{after:I})||A.ignoreMatch());let J;const ke=j.input.substring(I);if(J=ke.match(/^\s*=/)){A.ignoreMatch();return}if((J=ke.match(/^\s+extends\s+/))&&J.index===0){A.ignoreMatch();return}}},a={$pattern:cu,keyword:Bm,literal:zm,built_in:Um,"variable.language":Fm},u="[0-9](_?[0-9])*",c=`\\.(${u})`,v="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={className:"number",variants:[{begin:`(\\b(${v})((${c})|\\.)?|(${c}))[eE][+-]?(${u})\\b`},{begin:`\\b(${v})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},_={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},S={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},b={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},d={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},h=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,_,S,b,{match:/\$\d+/},y];p.contains=h.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(h)});const w=[].concat(d,p.contains),k=w.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(w)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:k},T={variants:[{match:[/class/,/\s+/,t,/\s+/,/extends/,/\s+/,n.concat(t,"(",n.concat(/\./,t),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,t],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ud,...Hd]}},N={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},L={variants:[{match:[/function/,/\s+/,t,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[E],illegal:/%/},Y={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Q(j){return n.concat("(?!",j.join("|"),")")}const W={match:n.concat(/\b/,Q([...$d,"super","import"]),t,n.lookahead(/\(/)),className:"title.function",relevance:0},he={begin:n.concat(/\./,n.lookahead(n.concat(t,/(?![0-9A-Za-z$_(])/))),end:t,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ye={match:[/get|set/,/\s+/,t,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},E]},Se="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,t,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Se)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[E]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:k,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),N,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,_,S,b,d,{match:/\$\d+/},y,P,{className:"attr",begin:t+n.lookahead(":"),relevance:0},O,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[d,e.REGEXP_MODE,{className:"function",begin:Se,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:k}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:s},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},L,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[E,e.inherit(e.TITLE_MODE,{begin:t,className:"title.function"})]},{match:/\.\.\./,relevance:0},he,{match:"\\$"+t,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[E]},W,Y,T,ye,{match:/\$[(.]/}]}}function $m(e){const n=e.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),t=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,s=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],l=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],a=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],u=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...l],c=["__debug__","Ellipsis","False","None","NotImplemented","True",...a],v=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...s],y={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:t,built_in:u,literal:c,type:v},p={className:"meta",begin:/^(>>>|\.\.\.) /},m={className:"subst",begin:/\{/,end:/\}/,keywords:y,illegal:/#/},_={begin:/\{\{/,relevance:0},S={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,p],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,p],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,p,_,m]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,p,_,m]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,_,m]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,_,m]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},b="[0-9](_?[0-9])*",f=`(\\b(${b}))?\\.(${b})|\\b(${b})\\.`,d=`\\b|${t.join("|")}`,h={className:"number",relevance:0,variants:[{begin:`(\\b(${b})|(${f}))[eE][+-]?(${b})[jJ]?(?=${d})`},{begin:`(${f})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${b})[jJ](?=${d})`}]},w={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:y,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},k={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:y,contains:["self",p,h,S,e.HASH_COMMENT_MODE,{scope:"params.operator",match:i},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return m.contains=[S,h,p],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:y,illegal:/(<\/|\?)|=>/,contains:[p,h,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},S,w,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword.def",3:"title.function"},contains:[k]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[h,k,S]},{scope:"operator",match:i}]}}Ul.registerLanguage("python",$m);Ul.registerLanguage("javascript",Hm);function Wm({code:e,language:n}){const r=G.useRef(null),[t,i]=G.useState(""),[s,l]=G.useState(""),a=en("hljs",n,ru.code),u=()=>{if(r.current){const S=e.split(`
`).map((b,f)=>{const d=Ul.highlight(b,{language:n}).value;return`<span class=${ru.line} data-line-number=${f+1}>${d}</span>`}).join("");l(S)}},c=()=>{const m=r.current,_=m==null?void 0:m.querySelectorAll("span[data-line-number]");_==null||_.forEach(S=>S.addEventListener("click",p))},v=()=>{const m=r.current,_=m==null?void 0:m.querySelectorAll("span[data-line-number]");_==null||_.forEach(S=>S.removeEventListener("click",p))},y=()=>{const m=r.current,_=m==null?void 0:m.querySelector(`span[data-line-number="${t}"]`);_==null||_.removeAttribute("focused")},p=m=>{const _=m.currentTarget,S=_.getAttribute("data-line-number")??"";y(),S===t?i(""):(_.setAttribute("focused",""),i(S))};return go(r,y),G.useEffect(()=>(u(),c(),()=>v()),[e,s,t]),o.jsx("pre",{ref:r,children:o.jsx("code",{className:a,dangerouslySetInnerHTML:{__html:s}})})}const Ym="_copyButton_1hjzm_1",Gm="_copySvg_1hjzm_25",Qm="_checkSvg_1hjzm_32",Vm="_checkSvgPath_1hjzm_37",Km="_draw_1hjzm_1",Jm="_enter_1hjzm_48",Xm="_exit_1hjzm_52",sr={copyButton:Ym,copySvg:Gm,checkSvg:Qm,checkSvgPath:Vm,draw:Km,enter:Jm,"fade-in":"_fade-in_1hjzm_1",exit:Xm,"fade-out":"_fade-out_1hjzm_1"};function Zm({onClick:e}){const[n,r]=G.useState("show"),[t,i]=G.useState("hide"),s=en(sr.copySvg,n==="enter"&&sr.enter,n==="exit"&&sr.exit),l=en(sr.checkSvg,t==="exit"&&sr.exit),a=en(sr.checkSvgPath),u=()=>{n==="show"&&t==="hide"&&(r("exit"),e())},c=()=>{n==="enter"&&r("show"),n==="exit"&&(r("hide"),i("show"))},v=()=>{t==="show"&&setTimeout(()=>{i("exit")},500),t==="exit"&&(i("hide"),r("enter"))},y=()=>n!=="hide"&&o.jsx("svg",{className:s,viewBox:"0 0 512 512",onAnimationEnd:c,children:o.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),p=()=>t!=="hide"&&o.jsx("svg",{className:l,viewBox:"0 0 16 16",onAnimationEnd:v,children:o.jsx("path",{className:a,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return o.jsxs("button",{"aria-label":"copy button",className:sr.copyButton,onClick:u,children:[y(),p()]})}function qm(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),o.jsx("stop",{offset:1,stopColor:"#306998"})]}),o.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#FFD43B"}),o.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),o.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),o.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),o.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),o.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),o.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function ev(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),o.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function g({title:e,children:n}){const[r,t]=G.useState(0),i=G.Children.toArray(n),s=i[r].props.code,l=i[r].props.language,a=v=>t(v),u=()=>navigator.clipboard.writeText(s),c=()=>i.map((v,y)=>{const p=v.props.language==="python"?qm:ev,m=`view ${v.props.language} code`;return o.jsx("button",{role:"tab","aria-label":m,"aria-selected":y===r,className:fi.tabButton,onClick:()=>a(y),children:o.jsx(p,{})},y)});return o.jsxs("div",{role:"tablist",className:fi.container,children:[o.jsx("h3",{children:e}),o.jsxs("div",{className:fi.buttonContainer,children:[o.jsx("div",{role:"tablist",className:fi.tabButtonContainer,children:c()}),o.jsx(Zm,{onClick:u})]}),o.jsx("div",{role:"tabpanel",className:"tabs-content",children:o.jsx(Wm,{code:s,language:l})})]})}g.Tab=e=>o.jsx(o.Fragment,{children:e});const nv=`def fn(arr):\r
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
`,rv=`def fn(arr1, arr2):\r
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
`,tv=`def fn(arr):\r
    n = len(arr)\r
    left = 0\r
    curr = 0\r
    ans = 0\r
\r
    for right in range(n):\r
        # TODO: add arr[right] to curr\r
\r
        while WINDOW_CONDITION_BROKEN:\r
            # TODO: remove arr[left] from curr\r
            left += 1\r
\r
        # TODO: update ans\r
\r
    return ans\r
`,iv=`def fn(arr):\r
    n = len(arr)\r
    prefix = [arr[0]]\r
\r
    for i in range(1, n):\r
        prefix.append(prefix[-1] + arr[i])\r
\r
    return prefix\r
`,ov=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,sv=`const fn = (arr) => {\r
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
`,lv=`let fn = (arr1, arr2) => {\r
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
`,av=`const fn = (arr) => {\r
    let ans = 0\r
    let curr = 0\r
    let left = 0\r
\r
    for (let right = 0; right < arr.length; right++) {\r
        // TODO: add arr[right] to curr\r
\r
        while (WINDOW_CONDITION_BROKEN) {\r
            // TODO: remove arr[left] from curr\r
            left++\r
        }\r
\r
        // TODO: update ans\r
    }\r
\r
    return ans\r
}\r
`,uv=`const fn = (arr) => {\r
    let prefix = [arr[0]]\r
\r
    for (let i = 1; i < arr.length; i++) {\r
        prefix.push(prefix[prefix.length - 1] + arr[i])\r
    }\r
\r
    return prefix\r
}\r
`,cv=`const fn = (arr) => {\r
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
`;function dv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Array"}),o.jsx("section",{id:"array-two-pointers-one-input",children:o.jsxs(g,{title:"two pointers: one input, opposite ends",children:[o.jsx(g.Tab,{code:nv,language:"python"}),o.jsx(g.Tab,{code:sv,language:"javascript"})]})}),o.jsx("section",{id:"array-two-pointers-two-inputs",children:o.jsxs(g,{title:"two pointers: two inputs, exhaust both",children:[o.jsx(g.Tab,{code:rv,language:"python"}),o.jsx(g.Tab,{code:lv,language:"javascript"})]})}),o.jsx("section",{id:"array-sliding-window",children:o.jsxs(g,{title:"sliding window",children:[o.jsx(g.Tab,{code:tv,language:"python"}),o.jsx(g.Tab,{code:av,language:"javascript"})]})}),o.jsx("section",{id:"array-prefix-sum",children:o.jsxs(g,{title:"prefix sum",children:[o.jsx(g.Tab,{code:iv,language:"python"}),o.jsx(g.Tab,{code:uv,language:"javascript"})]})}),o.jsx("section",{id:"array-string-building",children:o.jsxs(g,{title:"efficient string building",children:[o.jsx(g.Tab,{code:ov,language:"python"}),o.jsx(g.Tab,{code:cv,language:"javascript"})]})})]})}const fv=`from collections import defaultdict\r
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
`,hv=`const fn = (arr, k) => {\r
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
`;function pv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Hash Map"}),o.jsx("section",{id:"hashmap-number-of-subarrays",children:o.jsxs(g,{title:"find number of subarrays that fit an exact criteria",children:[o.jsx(g.Tab,{code:fv,language:"python"}),o.jsx(g.Tab,{code:hv,language:"javascript"})]})})]})}const gv=`def fn(head):\r
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
`,mv=`def fn(head):\r
    curr = head\r
    prev = None\r
\r
    while curr:\r
        next_node = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = next_node\r
\r
    return prev\r
`,vv=`const fn = (head) => {\r
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
`,yv=`const fn = (head) => {\r
    let curr = head\r
    let prev = null\r
\r
    while (curr) {\r
        let nextNode = curr.next\r
        curr.next = prev\r
        prev = curr\r
        curr = nextNode\r
    }\r
\r
    return prev\r
}\r
`;function xv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Linked List"}),o.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:o.jsxs(g,{title:"fast and slow pointer",children:[o.jsx(g.Tab,{code:gv,language:"python"}),o.jsx(g.Tab,{code:vv,language:"javascript"})]})}),o.jsx("section",{id:"linkedlist-reverse",children:o.jsxs(g,{title:"reverse linked list",children:[o.jsx(g.Tab,{code:mv,language:"python"}),o.jsx(g.Tab,{code:yv,language:"javascript"})]})})]})}const _v=`def fn(arr):\r
    stack = []\r
    ans = 0\r
\r
    for num in arr:\r
        # for monotonic decreasing, flip > to <\r
        while stack and stack[-1] > num:\r
            # TODO: logic\r
            stack.pop()\r
        stack.append(num)\r
\r
    return ans\r
`,wv=`const fn = (arr) => {\r
    let stack = []\r
    let ans = 0\r
\r
    for (const num of arr) {\r
        // for monotonic decreasing, flip > to <\r
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
`;function Sv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Stack"}),o.jsx("section",{id:"stack-monotonic-increasing",children:o.jsxs(g,{title:"monotonic increasing stack",children:[o.jsx(g.Tab,{code:_v,language:"python"}),o.jsx(g.Tab,{code:wv,language:"javascript"})]})})]})}const jv=`def dfs(root):\r
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
`,kv=`def dfs(root):\r
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
`,Ev=`from collections import deque\r
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
`,Tv=`const dfs = (root) => {\r
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
`,Nv=`const dfs = (root) => {\r
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
`,Ov=`const fn = (root) => {\r
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
`;function bv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Binary Tree"}),o.jsx("section",{id:"tree-dfs-recursive",children:o.jsxs(g,{title:"DFS (recursive)",children:[o.jsx(g.Tab,{code:jv,language:"python"}),o.jsx(g.Tab,{code:Tv,language:"javascript"})]})}),o.jsx("section",{id:"tree-dfs-iterative",children:o.jsxs(g,{title:"DFS (iterative)",children:[o.jsx(g.Tab,{code:kv,language:"python"}),o.jsx(g.Tab,{code:Nv,language:"javascript"})]})}),o.jsx("section",{id:"tree-bfs",children:o.jsxs(g,{title:"BFS",children:[o.jsx(g.Tab,{code:Ev,language:"python"}),o.jsx(g.Tab,{code:Ov,language:"javascript"})]})})]})}const Cv=`def fn(graph):\r
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
`,Av=`def fn(graph):\r
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
`,Rv=`from collections import deque\r
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
`,Pv=`from heapq import heappop, heappush\r
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
`,Mv=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:\r
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
`,Lv=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:\r
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
`,Iv=`from heapq import heappop\r
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
`,Dv=`from collections import defaultdict, deque\r
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
`,Bv=`const fn = (graph) => {\r
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
`,zv=`const fn = (graph) => {\r
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
`,Fv=`const fn = (graph) => {\r
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
`,Uv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Hv=`const bellmanFord = (n, edges, source) => {\r
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
`,$v=`const kruskalMst = (n, edges) => {\r
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
`,Wv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`,Yv=`const kahnTopologicalSort = (graph) => {\r
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
`;function Gv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Graph"}),o.jsx("section",{id:"graph-dfs-recursive",children:o.jsxs(g,{title:"DFS (recursive)",children:[o.jsx(g.Tab,{code:Cv,language:"python"}),o.jsx(g.Tab,{code:Bv,language:"javascript"})]})}),o.jsx("section",{id:"graph-dfs-iterative",children:o.jsxs(g,{title:"DFS (iterative)",children:[o.jsx(g.Tab,{code:Av,language:"python"}),o.jsx(g.Tab,{code:zv,language:"javascript"})]})}),o.jsx("section",{id:"graph-bfs",children:o.jsxs(g,{title:"BFS",children:[o.jsx(g.Tab,{code:Rv,language:"python"}),o.jsx(g.Tab,{code:Fv,language:"javascript"})]})}),o.jsx("section",{id:"graph-dijkstra",children:o.jsxs(g,{title:"Dijkstra (shortest path)",children:[o.jsx(g.Tab,{code:Pv,language:"python"}),o.jsx(g.Tab,{code:Uv,language:"javascript"})]})}),o.jsx("section",{id:"graph-bellman-ford",children:o.jsxs(g,{title:"Bellman-Ford (shortest path)",children:[o.jsx(g.Tab,{code:Mv,language:"python"}),o.jsx(g.Tab,{code:Hv,language:"javascript"})]})}),o.jsx("section",{id:"graph-kruskal",children:o.jsxs(g,{title:"Kruskal (mst)",children:[o.jsx(g.Tab,{code:Lv,language:"python"}),o.jsx(g.Tab,{code:$v,language:"javascript"})]})}),o.jsx("section",{id:"graph-prim",children:o.jsxs(g,{title:"Prim (mst)",children:[o.jsx(g.Tab,{code:Iv,language:"python"}),o.jsx(g.Tab,{code:Wv,language:"javascript"})]})}),o.jsx("section",{id:"graph-kahn",children:o.jsxs(g,{title:"Kahn (topological sort)",children:[o.jsx(g.Tab,{code:Dv,language:"python"}),o.jsx(g.Tab,{code:Yv,language:"javascript"})]})})]})}const Qv=`from heapq import heappop, heappush\r
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
`,Vv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`;function Kv(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Heap"}),o.jsx("section",{id:"heap-find-top-k-elements",children:o.jsxs(g,{title:"find top k elements",children:[o.jsx(g.Tab,{code:Qv,language:"python"}),o.jsx(g.Tab,{code:Vv,language:"javascript"})]})})]})}const Jv=`def fn(arr, target):\r
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
`,Xv=`def fn(arr, target):\r
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
`,Zv=`def fn(arr, target):\r
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
`,qv=`def fn(arr):\r
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
`,ey=`def fn(arr):\r
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
`,ny=`const fn = (arr, target) => {\r
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
`,ry=`const fn = (arr, target) => {\r
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
`,ty=`const fn = (arr, target) => {\r
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
`,iy=`const fn = (arr) => {\r
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
`,oy=`const fn = (arr) => {\r
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
`;function sy(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Binary Search"}),o.jsx("section",{id:"binarysearch-binary-search",children:o.jsxs(g,{title:"binary search",children:[o.jsx(g.Tab,{code:Jv,language:"python"}),o.jsx(g.Tab,{code:ny,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:o.jsxs(g,{title:"duplicate elements, left-most insertion point",children:[o.jsx(g.Tab,{code:Xv,language:"python"}),o.jsx(g.Tab,{code:ry,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:o.jsxs(g,{title:"duplicate elements, right-most insertion point",children:[o.jsx(g.Tab,{code:Zv,language:"python"}),o.jsx(g.Tab,{code:ty,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-greedy-minimum",children:o.jsxs(g,{title:"greedy (minimum)",children:[o.jsx(g.Tab,{code:qv,language:"python"}),o.jsx(g.Tab,{code:iy,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-greedy-maximum",children:o.jsxs(g,{title:"greedy (maximum)",children:[o.jsx(g.Tab,{code:ey,language:"python"}),o.jsx(g.Tab,{code:oy,language:"javascript"})]})})]})}const ly=`def backtrack(curr, OTHER_ARGUMENTS...):\r
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
`,ay=`const backtrack = (curr, OTHER_ARGUMENTS...) => {\r
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
`;function uy(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Backtracking"}),o.jsx("section",{id:"backtracking-backtracking",children:o.jsxs(g,{title:"backtracking",children:[o.jsx(g.Tab,{code:ly,language:"python"}),o.jsx(g.Tab,{code:ay,language:"javascript"})]})})]})}const cy=`def fn(arr):\r
    def dp(STATE):\r
        if BASE_CASE:\r
            return 0\r
\r
        if STATE in memo:\r
            return memo[STATE]\r
\r
        ans = RECURRENCE_RELATION(STATE)\r
        memo[STATE] = ans\r
\r
        return ans\r
\r
    memo = {}\r
\r
    return dp(STATE_FOR_WHOLE_INPUT)\r
`,dy=`def fn(arr):\r
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
`,fy=`const fn = (arr) => {\r
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
`,hy=`const fn = (arr) => {\r
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
`;function py(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Dynamic Programming"}),o.jsx("section",{id:"dp-top-down",children:o.jsxs(g,{title:"DP top-down",children:[o.jsx(g.Tab,{code:cy,language:"python"}),o.jsx(g.Tab,{code:fy,language:"javascript"})]})}),o.jsx("section",{id:"dp-bottom-up",children:o.jsxs(g,{title:"DP bottom-up",children:[o.jsx(g.Tab,{code:dy,language:"python"}),o.jsx(g.Tab,{code:hy,language:"javascript"})]})})]})}const gy=`def test_kth_bit(num: int, k: int) -> bool:\r
    return num & (1 << k) != 0\r
`,my=`def set_kth_bit(num: int, k: int) -> int:\r
    return num | (1 << k)\r
`,vy=`def clear_kth_bit(num: int, k: int) -> int:\r
    return num & ~(1 << k)\r
`,yy=`def toggle_kth_bit(num: int, k: int) -> int:\r
    return num ^ (1 << k)\r
`,xy=`def get_rightmost_set_bit(num: int) -> int:\r
    return num & -num\r
`,_y=`def count_set_bits(num: int) -> int:\r
    return bin(num).count('1')\r
`,wy=`def multiply_by_power_of_two(num: int, k: int) -> int:\r
    return num << k\r
`,Sy=`def divide_by_power_of_two(num: int, k: int) -> int:\r
    return num >> k\r
`,jy=`def is_power_of_two(num: int) -> bool:\r
    return (num & (num - 1)) == 0\r
`,ky=`def swap_variables(num1: int, num2: int) -> tuple:\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return num1, num2\r
`,Ey=`const testKthBit = (num, k) => {\r
    return num & (1 << k) !== 0\r
}\r
`,Ty=`const setKthBit = (num, k) => {\r
    return num | (1 << k)\r
}\r
`,Ny=`const clearKthBit = (num, k) => {\r
    return num & ~(1 << k)\r
}\r
`,Oy=`const toggleKthBit = (num, k) => {\r
    return num ^ (1 << k)\r
}\r
`,by=`const getRightmostSetBit = (num) => {\r
    return num & -num\r
}\r
`,Cy=`const countSetBits = (num) => {\r
    return num.toString(2).split('1').length - 1\r
}\r
`,Ay=`const multiplyByPowerOfTwo = (num, k) => {\r
    return num << k\r
}\r
`,Ry=`const divideByPowerOfTwo = (num, k) => {\r
    return num >> k;\r
}\r
`,Py=`const isPowerOfTwo = (num) => {\r
    return (num & (num - 1)) === 0\r
}\r
`,My=`const swapVariables = (num1, num2) => {\r
    num1 ^= num2\r
    num2 ^= num1\r
    num1 ^= num2\r
    return [num1, num2]\r
}\r
`;function Ly(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Bit Manipulation"}),o.jsx("section",{id:"bitmanipulation-test-kth-bit",children:o.jsxs(g,{title:"test kth-bit",children:[o.jsx(g.Tab,{code:gy,language:"python"}),o.jsx(g.Tab,{code:Ey,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-set-kth-bit",children:o.jsxs(g,{title:"set kth bit",children:[o.jsx(g.Tab,{code:my,language:"python"}),o.jsx(g.Tab,{code:Ty,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:o.jsxs(g,{title:"clear kth bit",children:[o.jsx(g.Tab,{code:vy,language:"python"}),o.jsx(g.Tab,{code:Ny,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:o.jsxs(g,{title:"toggle kth bit",children:[o.jsx(g.Tab,{code:yy,language:"python"}),o.jsx(g.Tab,{code:Oy,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:o.jsxs(g,{title:"get rightmost bit",children:[o.jsx(g.Tab,{code:xy,language:"python"}),o.jsx(g.Tab,{code:by,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-count-set-bits",children:o.jsxs(g,{title:"count set bits",children:[o.jsx(g.Tab,{code:_y,language:"python"}),o.jsx(g.Tab,{code:Cy,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:o.jsxs(g,{title:"multiply by 2^k",children:[o.jsx(g.Tab,{code:wy,language:"python"}),o.jsx(g.Tab,{code:Ay,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:o.jsxs(g,{title:"divide by 2^k",children:[o.jsx(g.Tab,{code:Sy,language:"python"}),o.jsx(g.Tab,{code:Ry,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-check-power-of-two",children:o.jsxs(g,{title:"check if number is power of 2",children:[o.jsx(g.Tab,{code:jy,language:"python"}),o.jsx(g.Tab,{code:Py,language:"javascript"})]})}),o.jsx("section",{id:"bitmanipulation-swap-variables",children:o.jsxs(g,{title:"swap two variables",children:[o.jsx(g.Tab,{code:ky,language:"python"}),o.jsx(g.Tab,{code:My,language:"javascript"})]})})]})}const Iy=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    create_matrix = [[0 for _ in range(c)] for _ in range(r)]\r
    copy_matrix = [row[:] for row in matrix]\r
`,Dy=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    main_diagonal = [matrix[i][i] for i in range(min(r, c))]\r
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]\r
`,By=`def fn(matrix: list[list[int]]):\r
    r = len(matrix)\r
    c = len(matrix[0])\r
\r
    transpose_tuple = zip(*matrix)\r
    transpose = [list(row) for row in transpose_tuple]\r
    rotate_left = transpose[::-1]\r
    rotate_right = [row[::-1] for row in transpose]\r
`,zy=`const fn = (matrix) => {\r
    const r = matrix.length;\r
    const c = matrix[0].length;\r
\r
    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))\r
    const copyMatrix = matrix.map(row => [...row])\r
}\r
`,Fy=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])\r
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])\r
}\r
`,Uy=`const fn = (matrix) => {\r
    const r = matrix.length\r
    const c = matrix[0].length\r
\r
    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))\r
    const transpose = transposeTuple.map(row => [...row])\r
    const rotateLeft = transpose.reverse()\r
    const rotateRight = transpose.map(row => row.reverse())\r
}\r
`;function Hy(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Matrix"}),o.jsx("section",{id:"matrix-create-copy",children:o.jsxs(g,{title:"create / copy",children:[o.jsx(g.Tab,{code:Iy,language:"python"}),o.jsx(g.Tab,{code:zy,language:"javascript"})]})}),o.jsx("section",{id:"matrix-diagonals",children:o.jsxs(g,{title:"diagonals / anti-diagonals",children:[o.jsx(g.Tab,{code:Dy,language:"python"}),o.jsx(g.Tab,{code:Fy,language:"javascript"})]})}),o.jsx("section",{id:"matrix-rotate-transpose",children:o.jsxs(g,{title:"rotate / transpose",children:[o.jsx(g.Tab,{code:By,language:"python"}),o.jsx(g.Tab,{code:Uy,language:"javascript"})]})})]})}const $y=`from typing import Any\r
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
`,Wy=`from typing import Any\r
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
`,Yy=`from typing import Any\r
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
`,Gy=`from typing import Any\r
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
`,Qy=`from typing import Any\r
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
`,Vy=`class Graph:\r
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
`,Ky=`from typing import Any\r
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
        curr = self.root\r
\r
        for char in word:\r
            if char not in curr.children:\r
                curr.children[char] = TrieNode()\r
\r
            curr = curr.children[char]\r
\r
        curr.is_word = True\r
\r
    def search(self, word: str) -> bool:\r
        curr = self.root\r
\r
        for char in word:\r
            if char not in curr.children:\r
                return False\r
\r
            curr = curr.children[char]\r
\r
        return curr.is_word\r
\r
    def starts_with(self, prefix: str) -> bool:\r
        curr = self.root\r
\r
        for char in prefix:\r
            if char not in curr.children:\r
                return False\r
\r
            curr = curr.children[char]\r
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
`,Xy=`class UnionFind:\r
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
`,Zy=`class UnionFind:\r
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
`,e1=`class TreeNode {\r
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
`,n1=`class TreeNode {\r
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
`,r1=`class ListNode {\r
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
`,t1=`class ListNode {\r
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
`,i1=`class Graph {\r
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
`,o1=`class HashMap {\r
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
`,s1=`class TrieNode {\r
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
        let curr = this.root\r
\r
        for (const char of word) {\r
            if (!(char in curr.children)) {\r
                curr.children[char] = new TrieNode()\r
            }\r
\r
            curr = curr.children[char]\r
        }\r
\r
        curr.isWord = true\r
    }\r
\r
    search(word) {\r
        let curr = this.root\r
\r
        for (const char of word) {\r
            if (!(char in curr.children)) {\r
                return false\r
            }\r
\r
            curr = curr.children[char]\r
        }\r
\r
        return curr.isWord\r
    }\r
\r
    startsWith(prefix) {\r
        let curr = this.root\r
\r
        for (const char of prefix) {\r
            if (!(char in curr.children)) {\r
                return false\r
            }\r
\r
            curr = curr.children[char]\r
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
`,l1=`class UnionFind {\r
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
`,a1=`class UnionFind {\r
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
`;function u1(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Data Structures"}),o.jsx("section",{id:"ds-array",children:o.jsxs(g,{title:"array",children:[o.jsx(g.Tab,{code:$y,language:"python"}),o.jsx(g.Tab,{code:qy,language:"javascript"})]})}),o.jsx("section",{id:"ds-hash-map",children:o.jsxs(g,{title:"hash map",children:[o.jsx(g.Tab,{code:Ky,language:"python"}),o.jsx(g.Tab,{code:o1,language:"javascript"})]})}),o.jsx("section",{id:"ds-linked-list",children:o.jsxs(g,{title:"linked list",children:[o.jsx(g.Tab,{code:Gy,language:"python"}),o.jsx(g.Tab,{code:r1,language:"javascript"})]})}),o.jsx("section",{id:"ds-doubly-linked-list",children:o.jsxs(g,{title:"doubly linked list",children:[o.jsx(g.Tab,{code:Qy,language:"python"}),o.jsx(g.Tab,{code:t1,language:"javascript"})]})}),o.jsx("section",{id:"ds-binary-tree",children:o.jsxs(g,{title:"binary tree",children:[o.jsx(g.Tab,{code:Wy,language:"python"}),o.jsx(g.Tab,{code:e1,language:"javascript"})]})}),o.jsx("section",{id:"ds-binary-search-tree",children:o.jsxs(g,{title:"binary search tree",children:[o.jsx(g.Tab,{code:Yy,language:"python"}),o.jsx(g.Tab,{code:n1,language:"javascript"})]})}),o.jsx("section",{id:"ds-graph",children:o.jsxs(g,{title:"graph",children:[o.jsx(g.Tab,{code:Vy,language:"python"}),o.jsx(g.Tab,{code:i1,language:"javascript"})]})}),o.jsx("section",{id:"ds-union-find",children:o.jsxs(g,{title:"union find",children:[o.jsx(g.Tab,{code:Xy,language:"python"}),o.jsx(g.Tab,{code:l1,language:"javascript"})]})}),o.jsx("section",{id:"ds-union-find-optimized",children:o.jsxs(g,{title:"union find optimized",children:[o.jsx(g.Tab,{code:Zy,language:"python"}),o.jsx(g.Tab,{code:a1,language:"javascript"})]})}),o.jsx("section",{id:"ds-trie",children:o.jsxs(g,{title:"trie",children:[o.jsx(g.Tab,{code:Jy,language:"python"}),o.jsx(g.Tab,{code:s1,language:"javascript"})]})})]})}const c1=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,d1=`def bubble_sort(arr: list) -> None:\r
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
`,f1=`def bucket_sort(arr: list) -> list:\r
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
`,h1=`def counting_sort(arr: list) -> list:\r
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
`,p1=`def cube_sort(arr: list, processors: int) -> None:\r
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
`,g1=`def heap_sort(arr: list) -> list:\r
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
`,m1=`def insertion_sort(arr: list) -> None:\r
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
`,v1=`def merge_sort(arr: list) -> list:\r
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
`,y1=`def pancake_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for size in range(n, 1, -1):\r
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
`,x1=`def quick_sort(arr: list) -> list:\r
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
`,_1=`def radix_sort(arr: list) -> None:\r
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
`,w1=`def selection_sort(arr: list) -> None:\r
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
`,S1=`def shell_sort(arr: list) -> None:\r
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
`,j1=`from threading import Thread\r
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
`,k1=`def tim_sort(arr: list) -> list:\r
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
`,E1=`const bogoSort = (arr) => {\r
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
`,T1=`const bubbleSort = (arr) => {\r
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
`,N1=`const bucketSort = (arr) => {\r
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
`,O1=`const countingSort = (arr) => {\r
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
`,b1=`const cubeSort = (arr, processors) => {\r
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
`,C1=`const heapSort = (arr) => {\r
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
`,A1=`const insertionSort = (arr) => {\r
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
`,R1=`const mergeSort = (arr) => {\r
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
`,P1=`const pancakeSort = (arr) => {\r
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
`,M1=`const quickSort = (arr) => {\r
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
`,L1=`const radixSort = (arr) => {\r
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
`,I1=`const selectionSort = (arr) => {\r
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
`,D1=`const shellSort = (arr) => {\r
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
`,B1=`const sleepSort = (arr) => {\r
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
`,z1=`const timSort = (arr) => {\r
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
`;function F1(){return o.jsxs("div",{className:ae.container,children:[o.jsx("h2",{className:ae.sectionHeader,children:"Sorting Algorithms"}),o.jsx("section",{id:"sort-bubble",children:o.jsxs(g,{title:"bubble sort",children:[o.jsx(g.Tab,{code:d1,language:"python"}),o.jsx(g.Tab,{code:T1,language:"javascript"})]})}),o.jsx("section",{id:"sort-selection",children:o.jsxs(g,{title:"selection sort",children:[o.jsx(g.Tab,{code:w1,language:"python"}),o.jsx(g.Tab,{code:I1,language:"javascript"})]})}),o.jsx("section",{id:"sort-insertion",children:o.jsxs(g,{title:"insertion sort",children:[o.jsx(g.Tab,{code:m1,language:"python"}),o.jsx(g.Tab,{code:A1,language:"javascript"})]})}),o.jsx("section",{id:"sort-shell",children:o.jsxs(g,{title:"shell sort",children:[o.jsx(g.Tab,{code:S1,language:"python"}),o.jsx(g.Tab,{code:D1,language:"javascript"})]})}),o.jsx("section",{id:"sort-merge",children:o.jsxs(g,{title:"merge sort",children:[o.jsx(g.Tab,{code:v1,language:"python"}),o.jsx(g.Tab,{code:R1,language:"javascript"})]})}),o.jsx("section",{id:"sort-quick",children:o.jsxs(g,{title:"quick sort",children:[o.jsx(g.Tab,{code:x1,language:"python"}),o.jsx(g.Tab,{code:M1,language:"javascript"})]})}),o.jsx("section",{id:"sort-tim",children:o.jsxs(g,{title:"timsort",children:[o.jsx(g.Tab,{code:k1,language:"python"}),o.jsx(g.Tab,{code:z1,language:"javascript"})]})}),o.jsx("section",{id:"sort-heap",children:o.jsxs(g,{title:"heap sort",children:[o.jsx(g.Tab,{code:g1,language:"python"}),o.jsx(g.Tab,{code:C1,language:"javascript"})]})}),o.jsx("section",{id:"sort-counting",children:o.jsxs(g,{title:"counting sort",children:[o.jsx(g.Tab,{code:h1,language:"python"}),o.jsx(g.Tab,{code:O1,language:"javascript"})]})}),o.jsx("section",{id:"sort-bucket",children:o.jsxs(g,{title:"bucket sort",children:[o.jsx(g.Tab,{code:f1,language:"python"}),o.jsx(g.Tab,{code:N1,language:"javascript"})]})}),o.jsx("section",{id:"sort-radix",children:o.jsxs(g,{title:"radix sort",children:[o.jsx(g.Tab,{code:_1,language:"python"}),o.jsx(g.Tab,{code:L1,language:"javascript"})]})}),o.jsx("section",{id:"sort-cube",children:o.jsxs(g,{title:"cubesort",children:[o.jsx(g.Tab,{code:p1,language:"python"}),o.jsx(g.Tab,{code:b1,language:"javascript"})]})}),o.jsx("section",{id:"sort-bogo",children:o.jsxs(g,{title:"bogo sort",children:[o.jsx(g.Tab,{code:c1,language:"python"}),o.jsx(g.Tab,{code:E1,language:"javascript"})]})}),o.jsx("section",{id:"sort-pancake",children:o.jsxs(g,{title:"pancake sort",children:[o.jsx(g.Tab,{code:y1,language:"python"}),o.jsx(g.Tab,{code:P1,language:"javascript"})]})}),o.jsx("section",{id:"sort-sleep",children:o.jsxs(g,{title:"sleep sort",children:[o.jsx(g.Tab,{code:j1,language:"python"}),o.jsx(g.Tab,{code:B1,language:"javascript"})]})})]})}function U1(){const{isSidebarOpen:e}=Il(),n=en(nu.main,!e&&nu.sidebarHidden);return o.jsxs("main",{className:n,children:[o.jsx(Bg,{}),o.jsx(dv,{}),o.jsx(pv,{}),o.jsx(xv,{}),o.jsx(Sv,{}),o.jsx(bv,{}),o.jsx(Gv,{}),o.jsx(Kv,{}),o.jsx(sy,{}),o.jsx(uy,{}),o.jsx(py,{}),o.jsx(Ly,{}),o.jsx(Hy,{}),o.jsx(u1,{}),o.jsx(F1,{})]})}function H1(){return o.jsx(mi.StrictMode,{children:o.jsx(xp,{children:o.jsxs("div",{className:"App",children:[o.jsx(Sp,{}),o.jsx(wg,{}),o.jsx(U1,{})]})})})}Vo.createRoot(document.getElementById("root")).render(o.jsx(H1,{}));
