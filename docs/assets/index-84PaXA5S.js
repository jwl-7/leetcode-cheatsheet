(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Uo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},Ji={},fu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ur=Symbol.for("react.element"),Qd=Symbol.for("react.portal"),Vd=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),Hs=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hu=Object.assign,gu={};function Zt(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||pu}Zt.prototype.isReactComponent={};Zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mu(){}mu.prototype=Zt.prototype;function Ho(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||pu}var $o=Ho.prototype=new mu;$o.constructor=Ho;hu($o,Zt.prototype);$o.isPureReactComponent=!0;var $s=Array.isArray,vu=Object.prototype.hasOwnProperty,Wo={current:null},yu={key:!0,ref:!0,__self:!0,__source:!0};function xu(e,n,t){var r,i={},l=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(l=""+n.key),n)vu.call(n,r)&&!yu.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ur,type:e,key:l,ref:s,props:i,_owner:Wo.current}}function lf(e,n){return{$$typeof:Ur,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Go(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ur}function of(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ws=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):n.toString(36)}function hi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ur:case Qd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+yl(s,0):r,$s(i)?(t="",e!=null&&(t=e.replace(Ws,"$&/")+"/"),hi(i,n,t,"",function(c){return c})):i!=null&&(Go(i)&&(i=lf(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ws,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",$s(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+yl(l,a);s+=hi(l,n,t,u,i)}else if(u=rf(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+yl(l,a++),s+=hi(l,n,t,u,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Yr(e,n,t){if(e==null)return e;var r=[],i=0;return hi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function sf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},gi={transition:null},af={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:gi,ReactCurrentOwner:Wo};re.Children={map:Yr,forEach:function(e,n,t){Yr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Yr(e,function(){n++}),n},toArray:function(e){return Yr(e,function(n){return n})||[]},only:function(e){if(!Go(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Zt;re.Fragment=Vd;re.Profiler=Xd;re.PureComponent=Ho;re.StrictMode=Kd;re.Suspense=ef;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=af;re.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hu({},e.props),i=e.key,l=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,s=Wo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)vu.call(n,u)&&!yu.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ur,type:e.type,key:i,ref:l,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:Jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zd,_context:e},e.Consumer=e};re.createElement=xu;re.createFactory=function(e){var n=xu.bind(null,e);return n.type=e,n};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:qd,render:e}};re.isValidElement=Go;re.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:sf}};re.memo=function(e,n){return{$$typeof:nf,type:e,compare:n===void 0?null:n}};re.startTransition=function(e){var n=gi.transition;gi.transition={};try{e()}finally{gi.transition=n}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(e,n){return We.current.useCallback(e,n)};re.useContext=function(e){return We.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return We.current.useDeferredValue(e)};re.useEffect=function(e,n){return We.current.useEffect(e,n)};re.useId=function(){return We.current.useId()};re.useImperativeHandle=function(e,n,t){return We.current.useImperativeHandle(e,n,t)};re.useInsertionEffect=function(e,n){return We.current.useInsertionEffect(e,n)};re.useLayoutEffect=function(e,n){return We.current.useLayoutEffect(e,n)};re.useMemo=function(e,n){return We.current.useMemo(e,n)};re.useReducer=function(e,n,t){return We.current.useReducer(e,n,t)};re.useRef=function(e){return We.current.useRef(e)};re.useState=function(e){return We.current.useState(e)};re.useSyncExternalStore=function(e,n,t){return We.current.useSyncExternalStore(e,n,t)};re.useTransition=function(){return We.current.useTransition()};re.version="18.2.0";fu.exports=re;var G=fu.exports;const mi=Uo(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=G,cf=Symbol.for("react.element"),df=Symbol.for("react.fragment"),ff=Object.prototype.hasOwnProperty,pf=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hf={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,t){var r,i={},l=null,s=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)ff.call(n,r)&&!hf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:cf,type:e,key:l,ref:s,props:i,_owner:pf.current}}Ji.Fragment=df;Ji.jsx=_u;Ji.jsxs=_u;du.exports=Ji;var o=du.exports,Ql={},wu={exports:{}},rn={},Su={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,b){var D=S.length;S.push(b);e:for(;0<D;){var U=D-1>>>1,X=S[U];if(0<i(X,b))S[U]=b,S[D]=X,D=U;else break e}}function t(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var b=S[0],D=S.pop();if(D!==b){S[0]=D;e:for(var U=0,X=S.length,ke=X>>>1;U<ke;){var Ee=2*(U+1)-1,ae=S[Ee],se=Ee+1,de=S[se];if(0>i(ae,D))se<X&&0>i(de,ae)?(S[U]=de,S[se]=D,U=se):(S[U]=ae,S[Ee]=D,U=Ee);else if(se<X&&0>i(de,D))S[U]=de,S[se]=D,U=se;else break e}}return b}function i(S,b){var D=S.sortIndex-b.sortIndex;return D!==0?D:S.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],g=1,v=null,h=3,m=!1,x=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var b=t(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=S)r(c),b.sortIndex=b.expirationTime,n(u,b);else break;b=t(c)}}function _(S){if(w=!1,p(S),!x)if(t(u)!==null)x=!0,Se(k);else{var b=t(c);b!==null&&O(_,b.startTime-S)}}function k(S,b){x=!1,w&&(w=!1,f(P),P=-1),m=!0;var D=h;try{for(p(b),v=t(u);v!==null&&(!(v.expirationTime>b)||S&&!W());){var U=v.callback;if(typeof U=="function"){v.callback=null,h=v.priorityLevel;var X=U(v.expirationTime<=b);b=e.unstable_now(),typeof X=="function"?v.callback=X:v===t(u)&&r(u),p(b)}else r(u);v=t(u)}if(v!==null)var ke=!0;else{var Ee=t(c);Ee!==null&&O(_,Ee.startTime-b),ke=!1}return ke}finally{v=null,h=D,m=!1}}var E=!1,N=null,P=-1,T=5,L=-1;function W(){return!(e.unstable_now()-L<T)}function Q(){if(N!==null){var S=e.unstable_now();L=S;var b=!0;try{b=N(!0,S)}finally{b?$():(E=!1,N=null)}}else E=!1}var $;if(typeof d=="function")$=function(){d(Q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ye=fe.port2;fe.port1.onmessage=Q,$=function(){ye.postMessage(null)}}else $=function(){R(Q,0)};function Se(S){N=S,E||(E=!0,$())}function O(S,b){P=R(function(){S(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,Se(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(S){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var D=h;h=b;try{return S()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,b){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var D=h;h=S;try{return b()}finally{h=D}},e.unstable_scheduleCallback=function(S,b,D){var U=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,S={id:g++,callback:b,priorityLevel:S,startTime:D,expirationTime:X,sortIndex:-1},D>U?(S.sortIndex=D,n(c,S),t(u)===null&&S===t(c)&&(w?(f(P),P=-1):w=!0,O(_,D-U))):(S.sortIndex=X,n(u,S),x||m||(x=!0,Se(k))),S},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(S){var b=h;return function(){var D=h;h=b;try{return S.apply(this,arguments)}finally{h=D}}}})(ju);Su.exports=ju;var gf=Su.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=G,tn=gf;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Eu=new Set,Sr={};function _t(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Sr[e]=n,e=0;e<n.length;e++)Eu.add(n[e])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},Ys={};function vf(e){return Vl.call(Ys,e)?!0:Vl.call(Gs,e)?!1:mf.test(e)?Ys[e]=!0:(Gs[e]=!0,!1)}function yf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,n,t,r){if(n===null||typeof n>"u"||yf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,r,i,l,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=s}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Le[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yo=/[\-:]([a-z])/g;function Qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Yo,Qo);Le[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Yo,Qo);Le[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Yo,Qo);Le[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vo(e,n,t,r){var i=Le.hasOwnProperty(n)?Le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xf(n,t,i,r)&&(t=null),r||i===null?vf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var In=ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),Et=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Ko=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),Nu=Symbol.for("react.provider"),Tu=Symbol.for("react.context"),Xo=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Ou=Symbol.for("react.offscreen"),Qs=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,xl;function ur(e){if(xl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);xl=n&&n[1]||""}return`
`+xl+e}var _l=!1;function wl(e,n){if(!e||_l)return"";_l=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),s=i.length-1,a=l.length-1;1<=s&&0<=a&&i[s]!==l[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==l[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==l[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{_l=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ur(e):""}function _f(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Et:return"Portal";case Kl:return"Profiler";case Ko:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tu:return(e.displayName||"Context")+".Consumer";case Nu:return(e._context.displayName||"Context")+".Provider";case Xo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return n=e.displayName||null,n!==null?n:Jl(e.type)||"Memo";case Bn:n=e._payload,e=e._init;try{return Jl(e(n))}catch{}}return null}function wf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(n);case 8:return n===Ko?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sf(e){var n=Cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Sf(e))}function Ru(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,n){var t=n.checked;return we({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Vs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=et(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bu(e,n){n=n.checked,n!=null&&Vo(e,"checked",n,!1)}function eo(e,n){bu(e,n);var t=et(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?no(e,n.type,t):n.hasOwnProperty("defaultValue")&&no(e,n.type,et(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ks(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function no(e,n,t){(n!=="number"||Ti(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var cr=Array.isArray;function It(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+et(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function to(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return we({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(cr(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:et(t)}}function Au(e,n){var t=et(n.value),r=et(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Zs(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Mu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){jf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),pr[n]=pr[e]})});function Lu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||pr.hasOwnProperty(e)&&pr[e]?(""+n).trim():n+"px"}function Du(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Lu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var kf=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,n){if(n){if(kf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function lo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var so=null,zt=null,Bt=null;function Js(e){if(e=Wr(e)){if(typeof so!="function")throw Error(C(280));var n=e.stateNode;n&&(n=rl(n),so(e.stateNode,e.type,n))}}function Iu(e){zt?Bt?Bt.push(e):Bt=[e]:zt=e}function zu(){if(zt){var e=zt,n=Bt;if(Bt=zt=null,Js(e),n)for(e=0;e<n.length;e++)Js(n[e])}}function Bu(e,n){return e(n)}function Fu(){}var Sl=!1;function Uu(e,n,t){if(Sl)return e(n,t);Sl=!0;try{return Bu(e,n,t)}finally{Sl=!1,(zt!==null||Bt!==null)&&(Fu(),zu())}}function kr(e,n){var t=e.stateNode;if(t===null)return null;var r=rl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var ao=!1;if(Pn)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ao=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ao=!1}function Ef(e,n,t,r,i,l,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(g){this.onError(g)}}var hr=!1,Oi=null,Ci=!1,uo=null,Nf={onError:function(e){hr=!0,Oi=e}};function Tf(e,n,t,r,i,l,s,a,u){hr=!1,Oi=null,Ef.apply(Nf,arguments)}function Of(e,n,t,r,i,l,s,a,u){if(Tf.apply(this,arguments),hr){if(hr){var c=Oi;hr=!1,Oi=null}else throw Error(C(198));Ci||(Ci=!0,uo=c)}}function wt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Hu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function qs(e){if(wt(e)!==e)throw Error(C(188))}function Cf(e){var n=e.alternate;if(!n){if(n=wt(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return qs(i),e;if(l===r)return qs(i),n;l=l.sibling}throw Error(C(188))}if(t.return!==r.return)t=i,r=l;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=l;break}if(a===r){s=!0,r=i,t=l;break}a=a.sibling}if(!s){for(a=l.child;a;){if(a===t){s=!0,t=l,r=i;break}if(a===r){s=!0,r=l,t=i;break}a=a.sibling}if(!s)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function $u(e){return e=Cf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wu(e);if(n!==null)return n;e=e.sibling}return null}var Gu=tn.unstable_scheduleCallback,ea=tn.unstable_cancelCallback,Rf=tn.unstable_shouldYield,bf=tn.unstable_requestPaint,Te=tn.unstable_now,Af=tn.unstable_getCurrentPriorityLevel,qo=tn.unstable_ImmediatePriority,Yu=tn.unstable_UserBlockingPriority,Ri=tn.unstable_NormalPriority,Pf=tn.unstable_LowPriority,Qu=tn.unstable_IdlePriority,qi=null,En=null;function Mf(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:If,Lf=Math.log,Df=Math.LN2;function If(e){return e>>>=0,e===0?32:31-(Lf(e)/Df|0)|0}var Xr=64,Zr=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=dr(a):(l&=s,l!==0&&(r=dr(l)))}else s=t&~i,s!==0?r=dr(s):l!==0&&(r=dr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-yn(n),i=1<<t,r|=e[t],n&=~i;return r}function zf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-yn(l),a=1<<s,u=i[s];u===-1?(!(a&t)||a&r)&&(i[s]=zf(a,n)):u<=n&&(e.expiredLanes|=a),l&=~a}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function jl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Hr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-yn(n),e[n]=t}function Ff(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-yn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-yn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ce=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xu,ns,Zu,Ju,qu,fo=!1,Jr=[],Yn=null,Qn=null,Vn=null,Er=new Map,Nr=new Map,Un=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function na(e,n){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(n.pointerId)}}function tr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Wr(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Hf(e,n,t,r,i){switch(n){case"focusin":return Yn=tr(Yn,e,n,t,r,i),!0;case"dragenter":return Qn=tr(Qn,e,n,t,r,i),!0;case"mouseover":return Vn=tr(Vn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Er.set(l,tr(Er.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Nr.set(l,tr(Nr.get(l)||null,e,n,t,r,i)),!0}return!1}function ec(e){var n=ut(e.target);if(n!==null){var t=wt(n);if(t!==null){if(n=t.tag,n===13){if(n=Hu(t),n!==null){e.blockedOn=n,qu(e.priority,function(){Zu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=po(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);oo=r,t.target.dispatchEvent(r),oo=null}else return n=Wr(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function ta(e,n,t){vi(e)&&t.delete(n)}function $f(){fo=!1,Yn!==null&&vi(Yn)&&(Yn=null),Qn!==null&&vi(Qn)&&(Qn=null),Vn!==null&&vi(Vn)&&(Vn=null),Er.forEach(ta),Nr.forEach(ta)}function rr(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,$f)))}function Tr(e){function n(i){return rr(i,e)}if(0<Jr.length){rr(Jr[0],e);for(var t=1;t<Jr.length;t++){var r=Jr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Yn!==null&&rr(Yn,e),Qn!==null&&rr(Qn,e),Vn!==null&&rr(Vn,e),Er.forEach(n),Nr.forEach(n),t=0;t<Un.length;t++)r=Un[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Un.length&&(t=Un[0],t.blockedOn===null);)ec(t),t.blockedOn===null&&Un.shift()}var Ft=In.ReactCurrentBatchConfig,Ai=!0;function Wf(e,n,t,r){var i=ce,l=Ft.transition;Ft.transition=null;try{ce=1,ts(e,n,t,r)}finally{ce=i,Ft.transition=l}}function Gf(e,n,t,r){var i=ce,l=Ft.transition;Ft.transition=null;try{ce=4,ts(e,n,t,r)}finally{ce=i,Ft.transition=l}}function ts(e,n,t,r){if(Ai){var i=po(e,n,t,r);if(i===null)Pl(e,n,r,Pi,t),na(e,r);else if(Hf(i,e,n,t,r))r.stopPropagation();else if(na(e,r),n&4&&-1<Uf.indexOf(e)){for(;i!==null;){var l=Wr(i);if(l!==null&&Xu(l),l=po(e,n,t,r),l===null&&Pl(e,n,r,Pi,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Pl(e,n,r,null,t)}}var Pi=null;function po(e,n,t,r){if(Pi=null,e=Jo(r),e=ut(e),e!==null)if(n=wt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Hu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Pi=e,null}function nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Af()){case qo:return 1;case Yu:return 4;case Ri:case Pf:return 16;case Qu:return 536870912;default:return 16}default:return 16}}var $n=null,rs=null,yi=null;function tc(){if(yi)return yi;var e,n=rs,t=n.length,r,i="value"in $n?$n.value:$n.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[l-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function xi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function ra(){return!1}function ln(e){function n(t,r,i,l,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qr:ra,this.isPropagationStopped=ra,this}return we(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=ln(Jt),$r=we({},Jt,{view:0,detail:0}),Yf=ln($r),kl,El,ir,el=we({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(kl=e.screenX-ir.screenX,El=e.screenY-ir.screenY):El=kl=0,ir=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:El}}),ia=ln(el),Qf=we({},el,{dataTransfer:0}),Vf=ln(Qf),Kf=we({},$r,{relatedTarget:0}),Nl=ln(Kf),Xf=we({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=ln(Xf),Jf=we({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=ln(Jf),ep=we({},Jt,{data:0}),la=ln(ep),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ip(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rp[e])?!!n[e]:!1}function ls(){return ip}var lp=we({},$r,{key:function(e){if(e.key){var n=np[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),op=ln(lp),sp=we({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oa=ln(sp),ap=we({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),up=ln(ap),cp=we({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),dp=ln(cp),fp=we({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pp=ln(fp),hp=[9,13,27,32],os=Pn&&"CompositionEvent"in window,gr=null;Pn&&"documentMode"in document&&(gr=document.documentMode);var gp=Pn&&"TextEvent"in window&&!gr,rc=Pn&&(!os||gr&&8<gr&&11>=gr),sa=" ",aa=!1;function ic(e,n){switch(e){case"keyup":return hp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tt=!1;function mp(e,n){switch(e){case"compositionend":return lc(n);case"keypress":return n.which!==32?null:(aa=!0,sa);case"textInput":return e=n.data,e===sa&&aa?null:e;default:return null}}function vp(e,n){if(Tt)return e==="compositionend"||!os&&ic(e,n)?(e=tc(),yi=rs=$n=null,Tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rc&&n.locale!=="ko"?null:n.data;default:return null}}var yp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ua(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yp[e.type]:n==="textarea"}function oc(e,n,t,r){Iu(r),n=Mi(n,"onChange"),0<n.length&&(t=new is("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var mr=null,Or=null;function xp(e){vc(e,0)}function nl(e){var n=Rt(e);if(Ru(n))return e}function _p(e,n){if(e==="change")return n}var sc=!1;if(Pn){var Tl;if(Pn){var Ol="oninput"in document;if(!Ol){var ca=document.createElement("div");ca.setAttribute("oninput","return;"),Ol=typeof ca.oninput=="function"}Tl=Ol}else Tl=!1;sc=Tl&&(!document.documentMode||9<document.documentMode)}function da(){mr&&(mr.detachEvent("onpropertychange",ac),Or=mr=null)}function ac(e){if(e.propertyName==="value"&&nl(Or)){var n=[];oc(n,Or,e,Jo(e)),Uu(xp,n)}}function wp(e,n,t){e==="focusin"?(da(),mr=n,Or=t,mr.attachEvent("onpropertychange",ac)):e==="focusout"&&da()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(Or)}function jp(e,n){if(e==="click")return nl(n)}function kp(e,n){if(e==="input"||e==="change")return nl(n)}function Ep(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Ep;function Cr(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Vl.call(n,i)||!_n(e[i],n[i]))return!1}return!0}function fa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pa(e,n){var t=fa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fa(t)}}function uc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?uc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cc(){for(var e=window,n=Ti();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Ti(e.document)}return n}function ss(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Np(e){var n=cc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&uc(t.ownerDocument.documentElement,t)){if(r!==null&&ss(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=pa(t,l);var s=pa(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tp=Pn&&"documentMode"in document&&11>=document.documentMode,Ot=null,ho=null,vr=null,go=!1;function ha(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;go||Ot==null||Ot!==Ti(r)||(r=Ot,"selectionStart"in r&&ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Cr(vr,r)||(vr=r,r=Mi(ho,"onSelect"),0<r.length&&(n=new is("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ot)))}function ei(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ct={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Cl={},dc={};Pn&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Ct.animationend.animation,delete Ct.animationiteration.animation,delete Ct.animationstart.animation),"TransitionEvent"in window||delete Ct.transitionend.transition);function tl(e){if(Cl[e])return Cl[e];if(!Ct[e])return e;var n=Ct[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dc)return Cl[e]=n[t];return e}var fc=tl("animationend"),pc=tl("animationiteration"),hc=tl("animationstart"),gc=tl("transitionend"),mc=new Map,ga="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tt(e,n){mc.set(e,n),_t(n,[e])}for(var Rl=0;Rl<ga.length;Rl++){var bl=ga[Rl],Op=bl.toLowerCase(),Cp=bl[0].toUpperCase()+bl.slice(1);tt(Op,"on"+Cp)}tt(fc,"onAnimationEnd");tt(pc,"onAnimationIteration");tt(hc,"onAnimationStart");tt("dblclick","onDoubleClick");tt("focusin","onFocus");tt("focusout","onBlur");tt(gc,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function ma(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Of(r,n,void 0,e),e.currentTarget=null}function vc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;ma(i,a,c),l=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;ma(i,a,c),l=u}}}if(Ci)throw e=uo,Ci=!1,uo=null,e}function ge(e,n){var t=n[_o];t===void 0&&(t=n[_o]=new Set);var r=e+"__bubble";t.has(r)||(yc(n,e,2,!1),t.add(r))}function Al(e,n,t){var r=0;n&&(r|=4),yc(t,e,r,n)}var ni="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[ni]){e[ni]=!0,Eu.forEach(function(t){t!=="selectionchange"&&(Rp.has(t)||Al(t,!1,e),Al(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ni]||(n[ni]=!0,Al("selectionchange",!1,n))}}function yc(e,n,t,r){switch(nc(n)){case 1:var i=Wf;break;case 4:i=Gf;break;default:i=ts}t=i.bind(null,n,t,e),i=void 0,!ao||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Pl(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=ut(a),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}a=a.parentNode}}r=r.return}Uu(function(){var c=l,g=Jo(t),v=[];e:{var h=mc.get(e);if(h!==void 0){var m=is,x=e;switch(e){case"keypress":if(xi(t)===0)break e;case"keydown":case"keyup":m=op;break;case"focusin":x="focus",m=Nl;break;case"focusout":x="blur",m=Nl;break;case"beforeblur":case"afterblur":m=Nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Vf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=up;break;case fc:case pc:case hc:m=Zf;break;case gc:m=dp;break;case"scroll":m=Yf;break;case"wheel":m=pp;break;case"copy":case"cut":case"paste":m=qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=oa}var w=(n&4)!==0,R=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,p;d!==null;){p=d;var _=p.stateNode;if(p.tag===5&&_!==null&&(p=_,f!==null&&(_=kr(d,f),_!=null&&w.push(br(d,_,p)))),R)break;d=d.return}0<w.length&&(h=new m(h,x,null,t,g),v.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&t!==oo&&(x=t.relatedTarget||t.fromElement)&&(ut(x)||x[Mn]))break e;if((m||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=c,x=x?ut(x):null,x!==null&&(R=wt(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(w=ia,_="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=oa,_="onPointerLeave",f="onPointerEnter",d="pointer"),R=m==null?h:Rt(m),p=x==null?h:Rt(x),h=new w(_,d+"leave",m,t,g),h.target=R,h.relatedTarget=p,_=null,ut(g)===c&&(w=new w(f,d+"enter",x,t,g),w.target=p,w.relatedTarget=R,_=w),R=_,m&&x)n:{for(w=m,f=x,d=0,p=w;p;p=jt(p))d++;for(p=0,_=f;_;_=jt(_))p++;for(;0<d-p;)w=jt(w),d--;for(;0<p-d;)f=jt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break n;w=jt(w),f=jt(f)}w=null}else w=null;m!==null&&va(v,h,m,w,!1),x!==null&&R!==null&&va(v,R,x,w,!0)}}e:{if(h=c?Rt(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var k=_p;else if(ua(h))if(sc)k=kp;else{k=Sp;var E=wp}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=jp);if(k&&(k=k(e,c))){oc(v,k,t,g);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&no(h,"number",h.value)}switch(E=c?Rt(c):window,e){case"focusin":(ua(E)||E.contentEditable==="true")&&(Ot=E,ho=c,vr=null);break;case"focusout":vr=ho=Ot=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,ha(v,t,g);break;case"selectionchange":if(Tp)break;case"keydown":case"keyup":ha(v,t,g)}var N;if(os)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Tt?ic(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(rc&&t.locale!=="ko"&&(Tt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Tt&&(N=tc()):($n=g,rs="value"in $n?$n.value:$n.textContent,Tt=!0)),E=Mi(c,P),0<E.length&&(P=new la(P,e,null,t,g),v.push({event:P,listeners:E}),N?P.data=N:(N=lc(t),N!==null&&(P.data=N)))),(N=gp?mp(e,t):vp(e,t))&&(c=Mi(c,"onBeforeInput"),0<c.length&&(g=new la("onBeforeInput","beforeinput",null,t,g),v.push({event:g,listeners:c}),g.data=N))}vc(v,n)})}function br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=kr(e,t),l!=null&&r.unshift(br(e,l,i)),l=kr(e,n),l!=null&&r.push(br(e,l,i))),e=e.return}return r}function jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function va(e,n,t,r,i){for(var l=n._reactName,s=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=kr(t,l),u!=null&&s.unshift(br(t,u,a))):i||(u=kr(t,l),u!=null&&s.push(br(t,u,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var bp=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function ya(e){return(typeof e=="string"?e:""+e).replace(bp,`
`).replace(Ap,"")}function ti(e,n,t){if(n=ya(n),ya(e)!==n&&t)throw Error(C(425))}function Li(){}var mo=null,vo=null;function yo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xo=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,xa=typeof Promise=="function"?Promise:void 0,Mp=typeof queueMicrotask=="function"?queueMicrotask:typeof xa<"u"?function(e){return xa.resolve(null).then(e).catch(Lp)}:xo;function Lp(e){setTimeout(function(){throw e})}function Ml(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Tr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Tr(n)}function Kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _a(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),kn="__reactFiber$"+qt,Ar="__reactProps$"+qt,Mn="__reactContainer$"+qt,_o="__reactEvents$"+qt,Dp="__reactListeners$"+qt,Ip="__reactHandles$"+qt;function ut(e){var n=e[kn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[kn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_a(e);e!==null;){if(t=e[kn])return t;e=_a(e)}return n}e=t,t=e.parentNode}return null}function Wr(e){return e=e[kn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function rl(e){return e[Ar]||null}var wo=[],bt=-1;function rt(e){return{current:e}}function me(e){0>bt||(e.current=wo[bt],wo[bt]=null,bt--)}function pe(e,n){bt++,wo[bt]=e.current,e.current=n}var nt={},Ue=rt(nt),Ve=rt(!1),gt=nt;function Wt(e,n){var t=e.type.contextTypes;if(!t)return nt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Di(){me(Ve),me(Ue)}function wa(e,n,t){if(Ue.current!==nt)throw Error(C(168));pe(Ue,n),pe(Ve,t)}function xc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(C(108,wf(e)||"Unknown",i));return we({},t,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||nt,gt=Ue.current,pe(Ue,e),pe(Ve,Ve.current),!0}function Sa(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=xc(e,n,gt),r.__reactInternalMemoizedMergedChildContext=e,me(Ve),me(Ue),pe(Ue,e)):me(Ve),pe(Ve,t)}var Cn=null,il=!1,Ll=!1;function _c(e){Cn===null?Cn=[e]:Cn.push(e)}function zp(e){il=!0,_c(e)}function it(){if(!Ll&&Cn!==null){Ll=!0;var e=0,n=ce;try{var t=Cn;for(ce=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Cn=null,il=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(e+1)),Gu(qo,it),i}finally{ce=n,Ll=!1}}return null}var At=[],Pt=0,zi=null,Bi=0,on=[],sn=0,mt=null,Rn=1,bn="";function st(e,n){At[Pt++]=Bi,At[Pt++]=zi,zi=e,Bi=n}function wc(e,n,t){on[sn++]=Rn,on[sn++]=bn,on[sn++]=mt,mt=e;var r=Rn;e=bn;var i=32-yn(r)-1;r&=~(1<<i),t+=1;var l=32-yn(n)+i;if(30<l){var s=i-i%5;l=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rn=1<<32-yn(n)+i|t<<i|r,bn=l+e}else Rn=1<<l|t<<i|r,bn=e}function as(e){e.return!==null&&(st(e,1),wc(e,1,0))}function us(e){for(;e===zi;)zi=At[--Pt],At[Pt]=null,Bi=At[--Pt],At[Pt]=null;for(;e===mt;)mt=on[--sn],on[sn]=null,bn=on[--sn],on[sn]=null,Rn=on[--sn],on[sn]=null}var nn=null,qe=null,ve=!1,vn=null;function Sc(e,n){var t=an(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ja(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,nn=e,qe=Kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,nn=e,qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:Rn,overflow:bn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=an(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,nn=e,qe=null,!0):!1;default:return!1}}function So(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jo(e){if(ve){var n=qe;if(n){var t=n;if(!ja(e,n)){if(So(e))throw Error(C(418));n=Kn(t.nextSibling);var r=nn;n&&ja(e,n)?Sc(r,t):(e.flags=e.flags&-4097|2,ve=!1,nn=e)}}else{if(So(e))throw Error(C(418));e.flags=e.flags&-4097|2,ve=!1,nn=e}}}function ka(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function ri(e){if(e!==nn)return!1;if(!ve)return ka(e),ve=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!yo(e.type,e.memoizedProps)),n&&(n=qe)){if(So(e))throw jc(),Error(C(418));for(;n;)Sc(e,n),n=Kn(n.nextSibling)}if(ka(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){qe=Kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}qe=null}}else qe=nn?Kn(e.stateNode.nextSibling):null;return!0}function jc(){for(var e=qe;e;)e=Kn(e.nextSibling)}function Gt(){qe=nn=null,ve=!1}function cs(e){vn===null?vn=[e]:vn.push(e)}var Bp=In.ReactCurrentBatchConfig;function gn(e,n){if(e&&e.defaultProps){n=we({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var Fi=rt(null),Ui=null,Mt=null,ds=null;function fs(){ds=Mt=Ui=null}function ps(e){var n=Fi.current;me(Fi),e._currentValue=n}function ko(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ut(e,n){Ui=e,ds=Mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Qe=!0),e.firstContext=null)}function cn(e){var n=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:n,next:null},Mt===null){if(Ui===null)throw Error(C(308));Mt=e,Ui.dependencies={lanes:0,firstContext:e}}else Mt=Mt.next=e;return n}var ct=null;function hs(e){ct===null?ct=[e]:ct.push(e)}function kc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,hs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Ln(e,r)}function Ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Fn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Xn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Ln(e,t)}return i=r.interleaved,i===null?(n.next=n,hs(r)):(n.next=i.next,i.next=n),r.interleaved=n,Ln(e,t)}function _i(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}function Ea(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Hi(e,n,t,r){var i=e.updateQueue;Fn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?l=c:s.next=c,s=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(l!==null){var v=i.baseState;s=0,g=c=u=null,a=l;do{var h=a.lane,m=a.eventTime;if((r&h)===h){g!==null&&(g=g.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(h=n,m=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){v=x.call(m,v,h);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(m,v,h):x,h==null)break e;v=we({},v,h);break e;case 2:Fn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=m,u=v):g=g.next=m,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(g===null&&(u=v),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);yt|=s,e.lanes=s,e.memoizedState=v}}function Na(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Nc=new ku.Component().refs;function Eo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:we({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ll={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=$e(),i=Jn(e),l=An(r,i);l.payload=n,t!=null&&(l.callback=t),n=Xn(e,l,i),n!==null&&(xn(n,e,i,r),_i(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=$e(),i=Jn(e),l=An(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Xn(e,l,i),n!==null&&(xn(n,e,i,r),_i(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=$e(),r=Jn(e),i=An(t,r);i.tag=2,n!=null&&(i.callback=n),n=Xn(e,i,r),n!==null&&(xn(n,e,r,t),_i(n,e,r))}};function Ta(e,n,t,r,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):n.prototype&&n.prototype.isPureReactComponent?!Cr(t,r)||!Cr(i,l):!0}function Tc(e,n,t){var r=!1,i=nt,l=n.contextType;return typeof l=="object"&&l!==null?l=cn(l):(i=Ke(n)?gt:Ue.current,r=n.contextTypes,l=(r=r!=null)?Wt(e,i):nt),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Oa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ll.enqueueReplaceState(n,n.state,null)}function No(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs=Nc,gs(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=cn(l):(l=Ke(n)?gt:Ue.current,i.context=Wt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Eo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ll.enqueueReplaceState(i,i.state,null),Hi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(s){var a=i.refs;a===Nc&&(a=i.refs={}),s===null?delete a[l]:a[l]=s},n._stringRef=l,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function ii(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ca(e){var n=e._init;return n(e._payload)}function Oc(e){function n(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function t(f,d){if(!e)return null;for(;d!==null;)n(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function i(f,d){return f=qn(f,d),f.index=0,f.sibling=null,f}function l(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,_){return d===null||d.tag!==6?(d=Hl(p,f.mode,_),d.return=f,d):(d=i(d,p),d.return=f,d)}function u(f,d,p,_){var k=p.type;return k===Nt?g(f,d,p.props.children,_,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&Ca(k)===d.type)?(_=i(d,p.props),_.ref=lr(f,d,p),_.return=f,_):(_=Ni(p.type,p.key,p.props,null,f.mode,_),_.ref=lr(f,d,p),_.return=f,_)}function c(f,d,p,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=$l(p,f.mode,_),d.return=f,d):(d=i(d,p.children||[]),d.return=f,d)}function g(f,d,p,_,k){return d===null||d.tag!==7?(d=pt(p,f.mode,_,k),d.return=f,d):(d=i(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qr:return p=Ni(d.type,d.key,d.props,null,f.mode,p),p.ref=lr(f,null,d),p.return=f,p;case Et:return d=$l(d,f.mode,p),d.return=f,d;case Bn:var _=d._init;return v(f,_(d._payload),p)}if(cr(d)||er(d))return d=pt(d,f.mode,p,null),d.return=f,d;ii(f,d)}return null}function h(f,d,p,_){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(f,d,""+p,_);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===k?u(f,d,p,_):null;case Et:return p.key===k?c(f,d,p,_):null;case Bn:return k=p._init,h(f,d,k(p._payload),_)}if(cr(p)||er(p))return k!==null?null:g(f,d,p,_,null);ii(f,p)}return null}function m(f,d,p,_,k){if(typeof _=="string"&&_!==""||typeof _=="number")return f=f.get(p)||null,a(d,f,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Qr:return f=f.get(_.key===null?p:_.key)||null,u(d,f,_,k);case Et:return f=f.get(_.key===null?p:_.key)||null,c(d,f,_,k);case Bn:var E=_._init;return m(f,d,p,E(_._payload),k)}if(cr(_)||er(_))return f=f.get(p)||null,g(d,f,_,k,null);ii(d,_)}return null}function x(f,d,p,_){for(var k=null,E=null,N=d,P=d=0,T=null;N!==null&&P<p.length;P++){N.index>P?(T=N,N=null):T=N.sibling;var L=h(f,N,p[P],_);if(L===null){N===null&&(N=T);break}e&&N&&L.alternate===null&&n(f,N),d=l(L,d,P),E===null?k=L:E.sibling=L,E=L,N=T}if(P===p.length)return t(f,N),ve&&st(f,P),k;if(N===null){for(;P<p.length;P++)N=v(f,p[P],_),N!==null&&(d=l(N,d,P),E===null?k=N:E.sibling=N,E=N);return ve&&st(f,P),k}for(N=r(f,N);P<p.length;P++)T=m(N,f,P,p[P],_),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?P:T.key),d=l(T,d,P),E===null?k=T:E.sibling=T,E=T);return e&&N.forEach(function(W){return n(f,W)}),ve&&st(f,P),k}function w(f,d,p,_){var k=er(p);if(typeof k!="function")throw Error(C(150));if(p=k.call(p),p==null)throw Error(C(151));for(var E=k=null,N=d,P=d=0,T=null,L=p.next();N!==null&&!L.done;P++,L=p.next()){N.index>P?(T=N,N=null):T=N.sibling;var W=h(f,N,L.value,_);if(W===null){N===null&&(N=T);break}e&&N&&W.alternate===null&&n(f,N),d=l(W,d,P),E===null?k=W:E.sibling=W,E=W,N=T}if(L.done)return t(f,N),ve&&st(f,P),k;if(N===null){for(;!L.done;P++,L=p.next())L=v(f,L.value,_),L!==null&&(d=l(L,d,P),E===null?k=L:E.sibling=L,E=L);return ve&&st(f,P),k}for(N=r(f,N);!L.done;P++,L=p.next())L=m(N,f,P,L.value,_),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?P:L.key),d=l(L,d,P),E===null?k=L:E.sibling=L,E=L);return e&&N.forEach(function(Q){return n(f,Q)}),ve&&st(f,P),k}function R(f,d,p,_){if(typeof p=="object"&&p!==null&&p.type===Nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var k=p.key,E=d;E!==null;){if(E.key===k){if(k=p.type,k===Nt){if(E.tag===7){t(f,E.sibling),d=i(E,p.props.children),d.return=f,f=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Bn&&Ca(k)===E.type){t(f,E.sibling),d=i(E,p.props),d.ref=lr(f,E,p),d.return=f,f=d;break e}t(f,E);break}else n(f,E);E=E.sibling}p.type===Nt?(d=pt(p.props.children,f.mode,_,p.key),d.return=f,f=d):(_=Ni(p.type,p.key,p.props,null,f.mode,_),_.ref=lr(f,d,p),_.return=f,f=_)}return s(f);case Et:e:{for(E=p.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){t(f,d.sibling),d=i(d,p.children||[]),d.return=f,f=d;break e}else{t(f,d);break}else n(f,d);d=d.sibling}d=$l(p,f.mode,_),d.return=f,f=d}return s(f);case Bn:return E=p._init,R(f,d,E(p._payload),_)}if(cr(p))return x(f,d,p,_);if(er(p))return w(f,d,p,_);ii(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(t(f,d.sibling),d=i(d,p),d.return=f,f=d):(t(f,d),d=Hl(p,f.mode,_),d.return=f,f=d),s(f)):t(f,d)}return R}var Yt=Oc(!0),Cc=Oc(!1),Gr={},Nn=rt(Gr),Pr=rt(Gr),Mr=rt(Gr);function dt(e){if(e===Gr)throw Error(C(174));return e}function ms(e,n){switch(pe(Mr,n),pe(Pr,e),pe(Nn,Gr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ro(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ro(n,e)}me(Nn),pe(Nn,n)}function Qt(){me(Nn),me(Pr),me(Mr)}function Rc(e){dt(Mr.current);var n=dt(Nn.current),t=ro(n,e.type);n!==t&&(pe(Pr,e),pe(Nn,t))}function vs(e){Pr.current===e&&(me(Nn),me(Pr))}var xe=rt(0);function $i(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dl=[];function ys(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var wi=In.ReactCurrentDispatcher,Il=In.ReactCurrentBatchConfig,vt=0,_e=null,Ce=null,be=null,Wi=!1,yr=!1,Lr=0,Fp=0;function ze(){throw Error(C(321))}function xs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function _s(e,n,t,r,i,l){if(vt=l,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wi.current=e===null||e.memoizedState===null?Wp:Gp,e=t(r,i),yr){l=0;do{if(yr=!1,Lr=0,25<=l)throw Error(C(301));l+=1,be=Ce=null,n.updateQueue=null,wi.current=Yp,e=t(r,i)}while(yr)}if(wi.current=Gi,n=Ce!==null&&Ce.next!==null,vt=0,be=Ce=_e=null,Wi=!1,n)throw Error(C(300));return e}function ws(){var e=Lr!==0;return Lr=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?_e.memoizedState=be=e:be=be.next=e,be}function dn(){if(Ce===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=be===null?_e.memoizedState:be.next;if(n!==null)be=n,Ce=e;else{if(e===null)throw Error(C(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},be===null?_e.memoizedState=be=e:be=be.next=e}return be}function Dr(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=dn(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=s=null,u=null,c=l;do{var g=c.lane;if((vt&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=v,s=r):u=u.next=v,_e.lanes|=g,yt|=g}c=c.next}while(c!==null&&c!==l);u===null?s=r:u.next=a,_n(r,n.memoizedState)||(Qe=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,_e.lanes|=l,yt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=dn(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);_n(l,n.memoizedState)||(Qe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function bc(){}function Ac(e,n){var t=_e,r=dn(),i=n(),l=!_n(r.memoizedState,i);if(l&&(r.memoizedState=i,Qe=!0),r=r.queue,Ss(Lc.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||be!==null&&be.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Mc.bind(null,t,r,i,n),void 0,null),Ae===null)throw Error(C(349));vt&30||Pc(t,n,i)}return i}function Pc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Mc(e,n,t,r){n.value=t,n.getSnapshot=r,Dc(n)&&Ic(e)}function Lc(e,n,t){return t(function(){Dc(n)&&Ic(e)})}function Dc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function Ic(e){var n=Ln(e,1);n!==null&&xn(n,e,1,-1)}function Ra(e){var n=jn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},n.queue=e,e=e.dispatch=$p.bind(null,_e,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=_e.updateQueue,n===null?(n={lastEffect:null,stores:null},_e.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function zc(){return dn().memoizedState}function Si(e,n,t,r){var i=jn();_e.flags|=e,i.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function ol(e,n,t,r){var i=dn();r=r===void 0?null:r;var l=void 0;if(Ce!==null){var s=Ce.memoizedState;if(l=s.destroy,r!==null&&xs(r,s.deps)){i.memoizedState=Ir(n,t,l,r);return}}_e.flags|=e,i.memoizedState=Ir(1|n,t,l,r)}function ba(e,n){return Si(8390656,8,e,n)}function Ss(e,n){return ol(2048,8,e,n)}function Bc(e,n){return ol(4,2,e,n)}function Fc(e,n){return ol(4,4,e,n)}function Uc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hc(e,n,t){return t=t!=null?t.concat([e]):null,ol(4,4,Uc.bind(null,n,e),t)}function js(){}function $c(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Wc(e,n){var t=dn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Gc(e,n,t){return vt&21?(_n(t,n)||(t=Vu(),_e.lanes|=t,yt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=t)}function Up(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),n()}finally{ce=t,Il.transition=r}}function Yc(){return dn().memoizedState}function Hp(e,n,t){var r=Jn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Qc(e))Vc(n,t);else if(t=kc(e,n,t,r),t!==null){var i=$e();xn(t,e,r,i),Kc(t,n,r)}}function $p(e,n,t){var r=Jn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Vc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,a=l(s,t);if(i.hasEagerState=!0,i.eagerState=a,_n(a,s)){var u=n.interleaved;u===null?(i.next=i,hs(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=kc(e,n,i,r),t!==null&&(i=$e(),xn(t,e,r,i),Kc(t,n,r))}}function Qc(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Vc(e,n){yr=Wi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Kc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}var Gi={readContext:cn,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Wp={readContext:cn,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:cn,useEffect:ba,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Si(4194308,4,Uc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Si(4194308,4,e,n)},useInsertionEffect:function(e,n){return Si(4,2,e,n)},useMemo:function(e,n){var t=jn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=jn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Hp.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:Ra,useDebugValue:js,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=Ra(!1),n=e[0];return e=Up.bind(null,e[1]),jn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=_e,i=jn();if(ve){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),Ae===null)throw Error(C(349));vt&30||Pc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ba(Lc.bind(null,r,l,e),[e]),r.flags|=2048,Ir(9,Mc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=jn(),n=Ae.identifierPrefix;if(ve){var t=bn,r=Rn;t=(r&~(1<<32-yn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Lr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Fp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Gp={readContext:cn,useCallback:$c,useContext:cn,useEffect:Ss,useImperativeHandle:Hc,useInsertionEffect:Bc,useLayoutEffect:Fc,useMemo:Wc,useReducer:zl,useRef:zc,useState:function(){return zl(Dr)},useDebugValue:js,useDeferredValue:function(e){var n=dn();return Gc(n,Ce.memoizedState,e)},useTransition:function(){var e=zl(Dr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:bc,useSyncExternalStore:Ac,useId:Yc,unstable_isNewReconciler:!1},Yp={readContext:cn,useCallback:$c,useContext:cn,useEffect:Ss,useImperativeHandle:Hc,useInsertionEffect:Bc,useLayoutEffect:Fc,useMemo:Wc,useReducer:Bl,useRef:zc,useState:function(){return Bl(Dr)},useDebugValue:js,useDeferredValue:function(e){var n=dn();return Ce===null?n.memoizedState=e:Gc(n,Ce.memoizedState,e)},useTransition:function(){var e=Bl(Dr)[0],n=dn().memoizedState;return[e,n]},useMutableSource:bc,useSyncExternalStore:Ac,useId:Yc,unstable_isNewReconciler:!1};function Vt(e,n){try{var t="",r=n;do t+=_f(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Fl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function To(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qp=typeof WeakMap=="function"?WeakMap:Map;function Xc(e,n,t){t=An(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Qi||(Qi=!0,Io=r),To(e,n)},t}function Zc(e,n,t){t=An(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){To(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){To(e,n),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Aa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Qp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=sh.bind(null,e,n,t),n.then(e,e))}function Pa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ma(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=An(-1,1),n.tag=2,Xn(t,n,1))),t.lanes|=1),e)}var Vp=In.ReactCurrentOwner,Qe=!1;function He(e,n,t,r){n.child=e===null?Cc(n,null,t,r):Yt(n,e.child,t,r)}function La(e,n,t,r,i){t=t.render;var l=n.ref;return Ut(n,i),r=_s(e,n,t,r,l,i),t=ws(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Dn(e,n,i)):(ve&&t&&as(n),n.flags|=1,He(e,n,r,i),n.child)}function Da(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!bs(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Jc(e,n,l,r,i)):(e=Ni(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:Cr,t(s,r)&&e.ref===n.ref)return Dn(e,n,i)}return n.flags|=1,e=qn(l,r),e.ref=n.ref,e.return=n,n.child=e}function Jc(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(Cr(l,r)&&e.ref===n.ref)if(Qe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return n.lanes=e.lanes,Dn(e,n,i)}return Oo(e,n,t,r,i)}function qc(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Dt,Je),Je|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Dt,Je),Je|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,pe(Dt,Je),Je|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,pe(Dt,Je),Je|=r;return He(e,n,i,t),n.child}function ed(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Oo(e,n,t,r,i){var l=Ke(t)?gt:Ue.current;return l=Wt(n,l),Ut(n,i),t=_s(e,n,t,r,l,i),r=ws(),e!==null&&!Qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Dn(e,n,i)):(ve&&r&&as(n),n.flags|=1,He(e,n,t,i),n.child)}function Ia(e,n,t,r,i){if(Ke(t)){var l=!0;Ii(n)}else l=!1;if(Ut(n,i),n.stateNode===null)ji(e,n),Tc(n,t,r),No(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var u=s.context,c=t.contextType;typeof c=="object"&&c!==null?c=cn(c):(c=Ke(t)?gt:Ue.current,c=Wt(n,c));var g=t.getDerivedStateFromProps,v=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";v||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Oa(n,s,r,c),Fn=!1;var h=n.memoizedState;s.state=h,Hi(n,r,s,i),u=n.memoizedState,a!==r||h!==u||Ve.current||Fn?(typeof g=="function"&&(Eo(n,t,g,r),u=n.memoizedState),(a=Fn||Ta(n,t,a,r,h,u,c))?(v||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Ec(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:gn(n.type,a),s.props=c,v=n.pendingProps,h=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=cn(u):(u=Ke(t)?gt:Ue.current,u=Wt(n,u));var m=t.getDerivedStateFromProps;(g=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==v||h!==u)&&Oa(n,s,r,u),Fn=!1,h=n.memoizedState,s.state=h,Hi(n,r,s,i);var x=n.memoizedState;a!==v||h!==x||Ve.current||Fn?(typeof m=="function"&&(Eo(n,t,m,r),x=n.memoizedState),(c=Fn||Ta(n,t,c,r,h,x,u)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,u)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),s.props=r,s.state=x,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return Co(e,n,t,r,l,i)}function Co(e,n,t,r,i,l){ed(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Sa(n,t,!1),Dn(e,n,l);r=n.stateNode,Vp.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=Yt(n,e.child,null,l),n.child=Yt(n,null,a,l)):He(e,n,a,l),n.memoizedState=r.state,i&&Sa(n,t,!0),n.child}function nd(e){var n=e.stateNode;n.pendingContext?wa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&wa(e,n.context,!1),ms(e,n.containerInfo)}function za(e,n,t,r,i){return Gt(),cs(i),n.flags|=256,He(e,n,t,r),n.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function bo(e){return{baseLanes:e,cachePool:null,transitions:null}}function td(e,n,t){var r=n.pendingProps,i=xe.current,l=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),pe(xe,i&1),e===null)return jo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,l?(r=n.mode,l=n.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=ul(s,r,0,null),e=pt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=bo(t),n.memoizedState=Ro,e):ks(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Kp(e,n,s,r,a,i,t);if(l){l=r.fallback,s=n.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=qn(a,l):(l=pt(l,s,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,s=e.child.memoizedState,s=s===null?bo(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~t,n.memoizedState=Ro,r}return l=e.child,e=l.sibling,r=qn(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ks(e,n){return n=ul({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function li(e,n,t,r){return r!==null&&cs(r),Yt(n,e.child,null,t),e=ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kp(e,n,t,r,i,l,s){if(t)return n.flags&256?(n.flags&=-257,r=Fl(Error(C(422))),li(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=ul({mode:"visible",children:r.children},i,0,null),l=pt(l,i,s,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Yt(n,e.child,null,s),n.child.memoizedState=bo(s),n.memoizedState=Ro,l);if(!(n.mode&1))return li(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(C(419)),r=Fl(l,r,void 0),li(e,n,s,r)}if(a=(s&e.childLanes)!==0,Qe||a){if(r=Ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ln(e,i),xn(r,e,i,-1))}return Rs(),r=Fl(Error(C(421))),li(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ah.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,qe=Kn(i.nextSibling),nn=n,ve=!0,vn=null,e!==null&&(on[sn++]=Rn,on[sn++]=bn,on[sn++]=mt,Rn=e.id,bn=e.overflow,mt=n),n=ks(n,r.children),n.flags|=4096,n)}function Ba(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ko(e.return,n,t)}function Ul(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function rd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=xe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,t,n);else if(e.tag===19)Ba(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(xe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&$i(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ul(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&$i(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ul(n,!0,t,null,l);break;case"together":Ul(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ji(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),yt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Xp(e,n,t){switch(n.tag){case 3:nd(n),Gt();break;case 5:Rc(n);break;case 1:Ke(n.type)&&Ii(n);break;case 4:ms(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;pe(Fi,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(pe(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?td(e,n,t):(pe(xe,xe.current&1),e=Dn(e,n,t),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return rd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(xe,xe.current),r)break;return null;case 22:case 23:return n.lanes=0,qc(e,n,t)}return Dn(e,n,t)}var id,Ao,ld,od;id=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ao=function(){};ld=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,dt(Nn.current);var l=null;switch(t){case"input":i=ql(e,i),r=ql(e,r),l=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),l=[];break;case"textarea":i=to(e,i),r=to(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Li)}io(t,r);var s;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(l||(l=[]),l.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};od=function(e,n,t,r){t!==r&&(n.flags|=4)};function or(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Zp(e,n,t){var r=n.pendingProps;switch(us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(n),null;case 1:return Ke(n.type)&&Di(),Be(n),null;case 3:return r=n.stateNode,Qt(),me(Ve),me(Ue),ys(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vn!==null&&(Fo(vn),vn=null))),Ao(e,n),Be(n),null;case 5:vs(n);var i=dt(Mr.current);if(t=n.type,e!==null&&n.stateNode!=null)ld(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return Be(n),null}if(e=dt(Nn.current),ri(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[kn]=n,r[Ar]=l,e=(n.mode&1)!==0,t){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<fr.length;i++)ge(fr[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Vs(r,l),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ge("invalid",r);break;case"textarea":Xs(r,l),ge("invalid",r)}io(t,l),i=null;for(var s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ti(r.textContent,a,e),i=["children",""+a]):Sr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ge("scroll",r)}switch(t){case"input":Vr(r),Ks(r,l,!0);break;case"textarea":Vr(r),Zs(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Li)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[kn]=n,e[Ar]=r,id(e,n,!1,!1),n.stateNode=e;e:{switch(s=lo(t,r),t){case"dialog":ge("cancel",e),ge("close",e),i=r;break;case"iframe":case"object":case"embed":ge("load",e),i=r;break;case"video":case"audio":for(i=0;i<fr.length;i++)ge(fr[i],e);i=r;break;case"source":ge("error",e),i=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),i=r;break;case"details":ge("toggle",e),i=r;break;case"input":Vs(e,r),i=ql(e,r),ge("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Xs(e,r),i=to(e,r),ge("invalid",e);break;default:i=r}io(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Du(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mu(e,u)):l==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Sr.hasOwnProperty(l)?u!=null&&l==="onScroll"&&ge("scroll",e):u!=null&&Vo(e,l,u,s))}switch(t){case"input":Vr(e),Ks(e,r,!1);break;case"textarea":Vr(e),Zs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+et(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?It(e,!!r.multiple,l,!1):r.defaultValue!=null&&It(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Be(n),null;case 6:if(e&&n.stateNode!=null)od(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=dt(Mr.current),dt(Nn.current),ri(n)){if(r=n.stateNode,t=n.memoizedProps,r[kn]=n,(l=r.nodeValue!==t)&&(e=nn,e!==null))switch(e.tag){case 3:ti(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[kn]=n,n.stateNode=r}return Be(n),null;case 13:if(me(xe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&qe!==null&&n.mode&1&&!(n.flags&128))jc(),Gt(),n.flags|=98560,l=!1;else if(l=ri(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(C(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(C(317));l[kn]=n}else Gt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Be(n),l=!1}else vn!==null&&(Fo(vn),vn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Re===0&&(Re=3):Rs())),n.updateQueue!==null&&(n.flags|=4),Be(n),null);case 4:return Qt(),Ao(e,n),e===null&&Rr(n.stateNode.containerInfo),Be(n),null;case 10:return ps(n.type._context),Be(n),null;case 17:return Ke(n.type)&&Di(),Be(n),null;case 19:if(me(xe),l=n.memoizedState,l===null)return Be(n),null;if(r=(n.flags&128)!==0,s=l.rendering,s===null)if(r)or(l,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=$i(e),s!==null){for(n.flags|=128,or(l,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(xe,xe.current&1|2),n.child}e=e.sibling}l.tail!==null&&Te()>Kt&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304)}else{if(!r)if(e=$i(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!ve)return Be(n),null}else 2*Te()-l.renderingStartTime>Kt&&t!==1073741824&&(n.flags|=128,r=!0,or(l,!1),n.lanes=4194304);l.isBackwards?(s.sibling=n.child,n.child=s):(t=l.last,t!==null?t.sibling=s:n.child=s,l.last=s)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Te(),n.sibling=null,t=xe.current,pe(xe,r?t&1|2:t&1),n):(Be(n),null);case 22:case 23:return Cs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Je&1073741824&&(Be(n),n.subtreeFlags&6&&(n.flags|=8192)):Be(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function Jp(e,n){switch(us(n),n.tag){case 1:return Ke(n.type)&&Di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Qt(),me(Ve),me(Ue),ys(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return vs(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));Gt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return Qt(),null;case 10:return ps(n.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var oi=!1,Fe=!1,qp=typeof WeakSet=="function"?WeakSet:Set,F=null;function Lt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){je(e,n,r)}else t.current=null}function Po(e,n,t){try{t()}catch(r){je(e,n,r)}}var Fa=!1;function eh(e,n){if(mo=Ai,e=cc(),ss(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,a=-1,u=-1,c=0,g=0,v=e,h=null;n:for(;;){for(var m;v!==t||i!==0&&v.nodeType!==3||(a=s+i),v!==l||r!==0&&v.nodeType!==3||(u=s+r),v.nodeType===3&&(s+=v.nodeValue.length),(m=v.firstChild)!==null;)h=v,v=m;for(;;){if(v===e)break n;if(h===t&&++c===i&&(a=s),h===l&&++g===r&&(u=s),(m=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=m}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(vo={focusedElem:e,selectionRange:t},Ai=!1,F=n;F!==null;)if(n=F,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,F=e;else for(;F!==null;){n=F;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,R=x.memoizedState,f=n.stateNode,d=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:gn(n.type,w),R);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(_){je(n,n.return,_)}if(e=n.sibling,e!==null){e.return=n.return,F=e;break}F=n.return}return x=Fa,Fa=!1,x}function xr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Po(n,t,l)}i=i.next}while(i!==r)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Mo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function sd(e){var n=e.alternate;n!==null&&(e.alternate=null,sd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[kn],delete n[Ar],delete n[_o],delete n[Dp],delete n[Ip])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Li));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,n,t),e=e.sibling;e!==null;)Lo(e,n,t),e=e.sibling}function Do(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Do(e,n,t),e=e.sibling;e!==null;)Do(e,n,t),e=e.sibling}var Pe=null,mn=!1;function zn(e,n,t){for(t=t.child;t!==null;)ud(e,n,t),t=t.sibling}function ud(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(qi,t)}catch{}switch(t.tag){case 5:Fe||Lt(t,n);case 6:var r=Pe,i=mn;Pe=null,zn(e,n,t),Pe=r,mn=i,Pe!==null&&(mn?(e=Pe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Pe.removeChild(t.stateNode));break;case 18:Pe!==null&&(mn?(e=Pe,t=t.stateNode,e.nodeType===8?Ml(e.parentNode,t):e.nodeType===1&&Ml(e,t),Tr(e)):Ml(Pe,t.stateNode));break;case 4:r=Pe,i=mn,Pe=t.stateNode.containerInfo,mn=!0,zn(e,n,t),Pe=r,mn=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Po(t,n,s),i=i.next}while(i!==r)}zn(e,n,t);break;case 1:if(!Fe&&(Lt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){je(t,n,a)}zn(e,n,t);break;case 21:zn(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,zn(e,n,t),Fe=r):zn(e,n,t);break;default:zn(e,n,t)}}function Ha(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new qp),n.forEach(function(r){var i=uh.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function pn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,mn=!1;break e;case 3:Pe=a.stateNode.containerInfo,mn=!0;break e;case 4:Pe=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(Pe===null)throw Error(C(160));ud(l,s,i),Pe=null,mn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cd(n,e),n=n.sibling}function cd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(n,e),Sn(e),r&4){try{xr(3,e,e.return),sl(3,e)}catch(w){je(e,e.return,w)}try{xr(5,e,e.return)}catch(w){je(e,e.return,w)}}break;case 1:pn(n,e),Sn(e),r&512&&t!==null&&Lt(t,t.return);break;case 5:if(pn(n,e),Sn(e),r&512&&t!==null&&Lt(t,t.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(w){je(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,s=t!==null?t.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&bu(i,l),lo(a,s);var c=lo(a,l);for(s=0;s<u.length;s+=2){var g=u[s],v=u[s+1];g==="style"?Du(i,v):g==="dangerouslySetInnerHTML"?Mu(i,v):g==="children"?jr(i,v):Vo(i,g,v,c)}switch(a){case"input":eo(i,l);break;case"textarea":Au(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var m=l.value;m!=null?It(i,!!l.multiple,m,!1):h!==!!l.multiple&&(l.defaultValue!=null?It(i,!!l.multiple,l.defaultValue,!0):It(i,!!l.multiple,l.multiple?[]:"",!1))}i[Ar]=l}catch(w){je(e,e.return,w)}}break;case 6:if(pn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){je(e,e.return,w)}}break;case 3:if(pn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(w){je(e,e.return,w)}break;case 4:pn(n,e),Sn(e);break;case 13:pn(n,e),Sn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ts=Te())),r&4&&Ha(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(c=Fe)||g,pn(n,e),Fe=c):pn(n,e),Sn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(F=e,g=e.child;g!==null;){for(v=F=g;F!==null;){switch(h=F,m=h.child,h.tag){case 0:case 11:case 14:case 15:xr(4,h,h.return);break;case 1:Lt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){je(r,t,w)}}break;case 5:Lt(h,h.return);break;case 22:if(h.memoizedState!==null){Wa(v);continue}}m!==null?(m.return=h,F=m):Wa(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{i=v.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,u=v.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Lu("display",s))}catch(w){je(e,e.return,w)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(w){je(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:pn(n,e),Sn(e),r&4&&Ha(e);break;case 21:break;default:pn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ad(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var l=Ua(e);Do(e,l,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Ua(e);Lo(e,a,s);break;default:throw Error(C(161))}}catch(u){je(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nh(e,n,t){F=e,dd(e)}function dd(e,n,t){for(var r=(e.mode&1)!==0;F!==null;){var i=F,l=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||oi;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Fe;a=oi;var c=Fe;if(oi=s,(Fe=u)&&!c)for(F=i;F!==null;)s=F,u=s.child,s.tag===22&&s.memoizedState!==null?Ga(i):u!==null?(u.return=s,F=u):Ga(i);for(;l!==null;)F=l,dd(l),l=l.sibling;F=i,oi=a,Fe=c}$a(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,F=l):$a(e)}}function $a(e){for(;F!==null;){var n=F;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:gn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Na(n,l,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Na(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&Tr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Fe||n.flags&512&&Mo(n)}catch(h){je(n,n.return,h)}}if(n===e){F=null;break}if(t=n.sibling,t!==null){t.return=n.return,F=t;break}F=n.return}}function Wa(e){for(;F!==null;){var n=F;if(n===e){F=null;break}var t=n.sibling;if(t!==null){t.return=n.return,F=t;break}F=n.return}}function Ga(e){for(;F!==null;){var n=F;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(u){je(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){je(n,i,u)}}var l=n.return;try{Mo(n)}catch(u){je(n,l,u)}break;case 5:var s=n.return;try{Mo(n)}catch(u){je(n,s,u)}}}catch(u){je(n,n.return,u)}if(n===e){F=null;break}var a=n.sibling;if(a!==null){a.return=n.return,F=a;break}F=n.return}}var th=Math.ceil,Yi=In.ReactCurrentDispatcher,Es=In.ReactCurrentOwner,un=In.ReactCurrentBatchConfig,oe=0,Ae=null,Oe=null,Me=0,Je=0,Dt=rt(0),Re=0,zr=null,yt=0,al=0,Ns=0,_r=null,Ye=null,Ts=0,Kt=1/0,On=null,Qi=!1,Io=null,Zn=null,si=!1,Wn=null,Vi=0,wr=0,zo=null,ki=-1,Ei=0;function $e(){return oe&6?Te():ki!==-1?ki:ki=Te()}function Jn(e){return e.mode&1?oe&2&&Me!==0?Me&-Me:Bp.transition!==null?(Ei===0&&(Ei=Vu()),Ei):(e=ce,e!==0||(e=window.event,e=e===void 0?16:nc(e.type)),e):1}function xn(e,n,t,r){if(50<wr)throw wr=0,zo=null,Error(C(185));Hr(e,t,r),(!(oe&2)||e!==Ae)&&(e===Ae&&(!(oe&2)&&(al|=t),Re===4&&Hn(e,Me)),Xe(e,r),t===1&&oe===0&&!(n.mode&1)&&(Kt=Te()+500,il&&it()))}function Xe(e,n){var t=e.callbackNode;Bf(e,n);var r=bi(e,e===Ae?Me:0);if(r===0)t!==null&&ea(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ea(t),n===1)e.tag===0?zp(Ya.bind(null,e)):_c(Ya.bind(null,e)),Mp(function(){!(oe&6)&&it()}),t=null;else{switch(Ku(r)){case 1:t=qo;break;case 4:t=Yu;break;case 16:t=Ri;break;case 536870912:t=Qu;break;default:t=Ri}t=xd(t,fd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function fd(e,n){if(ki=-1,Ei=0,oe&6)throw Error(C(327));var t=e.callbackNode;if(Ht()&&e.callbackNode!==t)return null;var r=bi(e,e===Ae?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ki(e,r);else{n=r;var i=oe;oe|=2;var l=hd();(Ae!==e||Me!==n)&&(On=null,Kt=Te()+500,ft(e,n));do try{lh();break}catch(a){pd(e,a)}while(!0);fs(),Yi.current=l,oe=i,Oe!==null?n=0:(Ae=null,Me=0,n=Re)}if(n!==0){if(n===2&&(i=co(e),i!==0&&(r=i,n=Bo(e,i))),n===1)throw t=zr,ft(e,0),Hn(e,r),Xe(e,Te()),t;if(n===6)Hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!rh(i)&&(n=Ki(e,r),n===2&&(l=co(e),l!==0&&(r=l,n=Bo(e,l))),n===1))throw t=zr,ft(e,0),Hn(e,r),Xe(e,Te()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:at(e,Ye,On);break;case 3:if(Hn(e,r),(r&130023424)===r&&(n=Ts+500-Te(),10<n)){if(bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xo(at.bind(null,e,Ye,On),n);break}at(e,Ye,On);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-yn(r);l=1<<s,s=n[s],s>i&&(i=s),r&=~l}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*th(r/1960))-r,10<r){e.timeoutHandle=xo(at.bind(null,e,Ye,On),r);break}at(e,Ye,On);break;case 5:at(e,Ye,On);break;default:throw Error(C(329))}}}return Xe(e,Te()),e.callbackNode===t?fd.bind(null,e):null}function Bo(e,n){var t=_r;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=Ki(e,n),e!==2&&(n=Ye,Ye=t,n!==null&&Fo(n)),e}function Fo(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function rh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!_n(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hn(e,n){for(n&=~Ns,n&=~al,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-yn(n),r=1<<t;e[t]=-1,n&=~r}}function Ya(e){if(oe&6)throw Error(C(327));Ht();var n=bi(e,0);if(!(n&1))return Xe(e,Te()),null;var t=Ki(e,n);if(e.tag!==0&&t===2){var r=co(e);r!==0&&(n=r,t=Bo(e,r))}if(t===1)throw t=zr,ft(e,0),Hn(e,n),Xe(e,Te()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,at(e,Ye,On),Xe(e,Te()),null}function Os(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(Kt=Te()+500,il&&it())}}function xt(e){Wn!==null&&Wn.tag===0&&!(oe&6)&&Ht();var n=oe;oe|=1;var t=un.transition,r=ce;try{if(un.transition=null,ce=1,e)return e()}finally{ce=r,un.transition=t,oe=n,!(oe&6)&&it()}}function Cs(){Je=Dt.current,me(Dt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pp(t)),Oe!==null)for(t=Oe.return;t!==null;){var r=t;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Di();break;case 3:Qt(),me(Ve),me(Ue),ys();break;case 5:vs(r);break;case 4:Qt();break;case 13:me(xe);break;case 19:me(xe);break;case 10:ps(r.type._context);break;case 22:case 23:Cs()}t=t.return}if(Ae=e,Oe=e=qn(e.current,null),Me=Je=n,Re=0,zr=null,Ns=al=yt=0,Ye=_r=null,ct!==null){for(n=0;n<ct.length;n++)if(t=ct[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var s=l.next;l.next=i,r.next=s}t.pending=r}ct=null}return e}function pd(e,n){do{var t=Oe;try{if(fs(),wi.current=Gi,Wi){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wi=!1}if(vt=0,be=Ce=_e=null,yr=!1,Lr=0,Es.current=null,t===null||t.return===null){Re=1,zr=n,Oe=null;break}e:{var l=e,s=t.return,a=t,u=n;if(n=Me,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var m=Pa(s);if(m!==null){m.flags&=-257,Ma(m,s,a,l,n),m.mode&1&&Aa(l,c,n),n=m,u=c;var x=n.updateQueue;if(x===null){var w=new Set;w.add(u),n.updateQueue=w}else x.add(u);break e}else{if(!(n&1)){Aa(l,c,n),Rs();break e}u=Error(C(426))}}else if(ve&&a.mode&1){var R=Pa(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ma(R,s,a,l,n),cs(Vt(u,a));break e}}l=u=Vt(u,a),Re!==4&&(Re=2),_r===null?_r=[l]:_r.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var f=Xc(l,u,n);Ea(l,f);break e;case 1:a=u;var d=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Zn===null||!Zn.has(p)))){l.flags|=65536,n&=-n,l.lanes|=n;var _=Zc(l,a,n);Ea(l,_);break e}}l=l.return}while(l!==null)}md(t)}catch(k){n=k,Oe===t&&t!==null&&(Oe=t=t.return);continue}break}while(!0)}function hd(){var e=Yi.current;return Yi.current=Gi,e===null?Gi:e}function Rs(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||!(yt&268435455)&&!(al&268435455)||Hn(Ae,Me)}function Ki(e,n){var t=oe;oe|=2;var r=hd();(Ae!==e||Me!==n)&&(On=null,ft(e,n));do try{ih();break}catch(i){pd(e,i)}while(!0);if(fs(),oe=t,Yi.current=r,Oe!==null)throw Error(C(261));return Ae=null,Me=0,Re}function ih(){for(;Oe!==null;)gd(Oe)}function lh(){for(;Oe!==null&&!Rf();)gd(Oe)}function gd(e){var n=yd(e.alternate,e,Je);e.memoizedProps=e.pendingProps,n===null?md(e):Oe=n,Es.current=null}function md(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Jp(t,n),t!==null){t.flags&=32767,Oe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Oe=null;return}}else if(t=Zp(t,n,Je),t!==null){Oe=t;return}if(n=n.sibling,n!==null){Oe=n;return}Oe=n=e}while(n!==null);Re===0&&(Re=5)}function at(e,n,t){var r=ce,i=un.transition;try{un.transition=null,ce=1,oh(e,n,t,r)}finally{un.transition=i,ce=r}return null}function oh(e,n,t,r){do Ht();while(Wn!==null);if(oe&6)throw Error(C(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Ff(e,l),e===Ae&&(Oe=Ae=null,Me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||si||(si=!0,xd(Ri,function(){return Ht(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=un.transition,un.transition=null;var s=ce;ce=1;var a=oe;oe|=4,Es.current=null,eh(e,t),cd(t,e),Np(vo),Ai=!!mo,vo=mo=null,e.current=t,nh(t),bf(),oe=a,ce=s,un.transition=l}else e.current=t;if(si&&(si=!1,Wn=e,Vi=i),l=e.pendingLanes,l===0&&(Zn=null),Mf(t.stateNode),Xe(e,Te()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qi)throw Qi=!1,e=Io,Io=null,e;return Vi&1&&e.tag!==0&&Ht(),l=e.pendingLanes,l&1?e===zo?wr++:(wr=0,zo=e):wr=0,it(),null}function Ht(){if(Wn!==null){var e=Ku(Vi),n=un.transition,t=ce;try{if(un.transition=null,ce=16>e?16:e,Wn===null)var r=!1;else{if(e=Wn,Wn=null,Vi=0,oe&6)throw Error(C(331));var i=oe;for(oe|=4,F=e.current;F!==null;){var l=F,s=l.child;if(F.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(F=c;F!==null;){var g=F;switch(g.tag){case 0:case 11:case 15:xr(8,g,l)}var v=g.child;if(v!==null)v.return=g,F=v;else for(;F!==null;){g=F;var h=g.sibling,m=g.return;if(sd(g),g===c){F=null;break}if(h!==null){h.return=m,F=h;break}F=m}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}F=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,F=s;else e:for(;F!==null;){if(l=F,l.flags&2048)switch(l.tag){case 0:case 11:case 15:xr(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,F=f;break e}F=l.return}}var d=e.current;for(F=d;F!==null;){s=F;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,F=p;else e:for(s=d;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(k){je(a,a.return,k)}if(a===s){F=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,F=_;break e}F=a.return}}if(oe=i,it(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{ce=t,un.transition=n}}return!1}function Qa(e,n,t){n=Vt(t,n),n=Xc(e,n,1),e=Xn(e,n,1),n=$e(),e!==null&&(Hr(e,1,n),Xe(e,n))}function je(e,n,t){if(e.tag===3)Qa(e,e,t);else for(;n!==null;){if(n.tag===3){Qa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=Vt(t,e),e=Zc(n,e,1),n=Xn(n,e,1),e=$e(),n!==null&&(Hr(n,1,e),Xe(n,e));break}}n=n.return}}function sh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=$e(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Me&t)===t&&(Re===4||Re===3&&(Me&130023424)===Me&&500>Te()-Ts?ft(e,0):Ns|=t),Xe(e,n)}function vd(e,n){n===0&&(e.mode&1?(n=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):n=1);var t=$e();e=Ln(e,n),e!==null&&(Hr(e,n,t),Xe(e,t))}function ah(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),vd(e,t)}function uh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),vd(e,t)}var yd;yd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ve.current)Qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Qe=!1,Xp(e,n,t);Qe=!!(e.flags&131072)}else Qe=!1,ve&&n.flags&1048576&&wc(n,Bi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ji(e,n),e=n.pendingProps;var i=Wt(n,Ue.current);Ut(n,t),i=_s(null,n,r,e,i,t);var l=ws();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(r)?(l=!0,Ii(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gs(n),i.updater=ll,n.stateNode=i,i._reactInternals=n,No(n,r,e,t),n=Co(null,n,r,!0,l,t)):(n.tag=0,ve&&l&&as(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ji(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=dh(r),e=gn(r,e),i){case 0:n=Oo(null,n,r,e,t);break e;case 1:n=Ia(null,n,r,e,t);break e;case 11:n=La(null,n,r,e,t);break e;case 14:n=Da(null,n,r,gn(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),Oo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),Ia(e,n,r,i,t);case 3:e:{if(nd(n),e===null)throw Error(C(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Ec(e,n),Hi(n,r,null,t);var s=n.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Vt(Error(C(423)),n),n=za(e,n,r,t,i);break e}else if(r!==i){i=Vt(Error(C(424)),n),n=za(e,n,r,t,i);break e}else for(qe=Kn(n.stateNode.containerInfo.firstChild),nn=n,ve=!0,vn=null,t=Cc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Gt(),r===i){n=Dn(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return Rc(n),e===null&&jo(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,s=i.children,yo(r,i)?s=null:l!==null&&yo(r,l)&&(n.flags|=32),ed(e,n),He(e,n,s,t),n.child;case 6:return e===null&&jo(n),null;case 13:return td(e,n,t);case 4:return ms(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Yt(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),La(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,s=i.value,pe(Fi,r._currentValue),r._currentValue=s,l!==null)if(_n(l.value,s)){if(l.children===i.children&&!Ve.current){n=Dn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){s=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=An(-1,t&-t),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),ko(l.return,t,n),a.lanes|=t;break}u=u.next}}else if(l.tag===10)s=l.type===n.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(C(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),ko(s,t,n),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===n){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Ut(n,t),i=cn(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=gn(r,n.pendingProps),i=gn(r.type,i),Da(e,n,r,i,t);case 15:return Jc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:gn(r,i),ji(e,n),n.tag=1,Ke(r)?(e=!0,Ii(n)):e=!1,Ut(n,t),Tc(n,r,i),No(n,r,i,t),Co(null,n,r,!0,e,t);case 19:return rd(e,n,t);case 22:return qc(e,n,t)}throw Error(C(156,n.tag))};function xd(e,n){return Gu(e,n)}function ch(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,n,t,r){return new ch(e,n,t,r)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xo)return 11;if(e===Zo)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=an(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ni(e,n,t,r,i,l){var s=2;if(r=e,typeof e=="function")bs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nt:return pt(t.children,i,l,n);case Ko:s=8,i|=8;break;case Kl:return e=an(12,t,n,i|2),e.elementType=Kl,e.lanes=l,e;case Xl:return e=an(13,t,n,i),e.elementType=Xl,e.lanes=l,e;case Zl:return e=an(19,t,n,i),e.elementType=Zl,e.lanes=l,e;case Ou:return ul(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nu:s=10;break e;case Tu:s=9;break e;case Xo:s=11;break e;case Zo:s=14;break e;case Bn:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=an(s,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function pt(e,n,t,r){return e=an(7,e,r,n),e.lanes=t,e}function ul(e,n,t,r){return e=an(22,e,r,n),e.elementType=Ou,e.lanes=t,e.stateNode={isHidden:!1},e}function Hl(e,n,t){return e=an(6,e,null,n),e.lanes=t,e}function $l(e,n,t){return n=an(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function fh(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function As(e,n,t,r,i,l,s,a,u){return e=new fh(e,n,t,a,u),n===1?(n=1,l===!0&&(n|=8)):n=0,l=an(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(l),e}function ph(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _d(e){if(!e)return nt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(Ke(t))return xc(e,t,n)}return n}function wd(e,n,t,r,i,l,s,a,u){return e=As(t,r,!0,e,i,l,s,a,u),e.context=_d(null),t=e.current,r=$e(),i=Jn(t),l=An(r,i),l.callback=n??null,Xn(t,l,i),e.current.lanes=i,Hr(e,i,r),Xe(e,r),e}function cl(e,n,t,r){var i=n.current,l=$e(),s=Jn(i);return t=_d(t),n.context===null?n.context=t:n.pendingContext=t,n=An(l,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Xn(i,n,s),e!==null&&(xn(e,i,s,l),_i(e,i,s)),s}function Xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Va(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ps(e,n){Va(e,n),(e=e.alternate)&&Va(e,n)}function hh(){return null}var Sd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}dl.prototype.render=Ms.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));cl(e,n,null,null)};dl.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){cl(null,e,null,null)}),n[Mn]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ju();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Un.length&&n!==0&&n<Un[t].priority;t++);Un.splice(t,0,e),t===0&&ec(e)}};function Ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ka(){}function gh(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Xi(s);l.call(c)}}var s=wd(n,r,e,0,null,!1,!1,"",Ka);return e._reactRootContainer=s,e[Mn]=s.current,Rr(e.nodeType===8?e.parentNode:e),xt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Xi(u);a.call(c)}}var u=As(e,0,!1,null,null,!1,!1,"",Ka);return e._reactRootContainer=u,e[Mn]=u.current,Rr(e.nodeType===8?e.parentNode:e),xt(function(){cl(n,u,t,r)}),u}function pl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var s=l;if(typeof i=="function"){var a=i;i=function(){var u=Xi(s);a.call(u)}}cl(n,s,e,i)}else s=gh(t,n,e,i,r);return Xi(s)}Xu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=dr(n.pendingLanes);t!==0&&(es(n,t|1),Xe(n,Te()),!(oe&6)&&(Kt=Te()+500,it()))}break;case 13:xt(function(){var r=Ln(e,1);if(r!==null){var i=$e();xn(r,e,1,i)}}),Ps(e,1)}};ns=function(e){if(e.tag===13){var n=Ln(e,134217728);if(n!==null){var t=$e();xn(n,e,134217728,t)}Ps(e,134217728)}};Zu=function(e){if(e.tag===13){var n=Jn(e),t=Ln(e,n);if(t!==null){var r=$e();xn(t,e,n,r)}Ps(e,n)}};Ju=function(){return ce};qu=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};so=function(e,n,t){switch(n){case"input":if(eo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=rl(r);if(!i)throw Error(C(90));Ru(r),eo(r,i)}}}break;case"textarea":Au(e,t);break;case"select":n=t.value,n!=null&&It(e,!!t.multiple,n,!1)}};Bu=Os;Fu=xt;var mh={usingClientEntryPoint:!1,Events:[Wr,Rt,rl,Iu,zu,Os]},sr={findFiberByHostInstance:ut,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vh={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$u(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{qi=ai.inject(vh),En=ai}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh;rn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ls(n))throw Error(C(200));return ph(e,n,null,t)};rn.createRoot=function(e,n){if(!Ls(e))throw Error(C(299));var t=!1,r="",i=Sd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=As(e,1,!1,null,null,t,!1,r,i),e[Mn]=n.current,Rr(e.nodeType===8?e.parentNode:e),new Ms(n)};rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$u(n),e=e===null?null:e.stateNode,e};rn.flushSync=function(e){return xt(e)};rn.hydrate=function(e,n,t){if(!fl(n))throw Error(C(200));return pl(null,e,n,!0,t)};rn.hydrateRoot=function(e,n,t){if(!Ls(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",s=Sd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=wd(n,null,e,1,t??null,i,!1,l,s),e[Mn]=n.current,Rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new dl(n)};rn.render=function(e,n,t){if(!fl(n))throw Error(C(200));return pl(null,e,n,!1,t)};rn.unmountComponentAtNode=function(e){if(!fl(e))throw Error(C(40));return e._reactRootContainer?(xt(function(){pl(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};rn.unstable_batchedUpdates=Os;rn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!fl(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return pl(e,n,t,!1,r)};rn.version="18.2.0-next-9e3b772b8-20220608";function jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jd)}catch(e){console.error(e)}}jd(),wu.exports=rn;var kd=wu.exports;const yh=Uo(kd);var Xa=kd;Ql.createRoot=Xa.createRoot,Ql.hydrateRoot=Xa.hydrateRoot;const Ed=G.createContext(void 0);function xh({children:e}){const[n,t]=G.useState(!0),r=()=>t(!0),i=()=>t(!1),l=()=>t(!n);return o.jsx(Ed.Provider,{value:{isSidebarOpen:n,showSidebar:r,hideSidebar:i,toggleSidebar:l},children:e})}function Ds(){const e=G.useContext(Ed);if(e===void 0)throw new Error("useSidebar must be used within SidebarProvider");return e}const _h="_wave_nm5to_1",wh="_gradient_nm5to_1",ui={wave:_h,gradient:wh};function Sh(){return o.jsxs("div",{className:ui.background,children:[o.jsx("div",{className:ui.wave}),o.jsx("div",{className:ui.wave}),o.jsx("div",{className:ui.wave})]})}const jh="_topbar_103sc_1",kh="_container_103sc_22",Eh="_buttonContainer_103sc_28",Nh="_title_103sc_35",Th="_iconLink_103sc_53",Oh="_hamburger_103sc_75",Ch="_hamburgerIcon_103sc_79",Rh="_hamburgerTop_103sc_88",bh="_collapsed_103sc_92",Ah="_hamburgerMiddle_103sc_96",Ph="_hamburgerBottom_103sc_106",hn={topbar:jh,container:kh,buttonContainer:Eh,title:Nh,"animated-gradient":"_animated-gradient_103sc_1",iconLink:Th,hamburger:Oh,hamburgerIcon:Ch,hamburgerTop:Rh,collapsed:bh,hamburgerMiddle:Ah,hamburgerBottom:Ph};var Nd={exports:{}};(function(e,n){(function(r,i){e.exports=i(G)})(Yd,t=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(a,u)=>{u.match=x,u.parse=w;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,g=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,v=/^(?:(min|max)-)?(.+)/,h=/(em|rem|px|cm|mm|in|pt|pc)?$/,m=/(dpi|dpcm|dppx)?$/;function x(p,_){return w(p).some(function(k){var E=k.inverse,N=k.type==="all"||_.type===k.type;if(N&&E||!(N||E))return!1;var P=k.expressions.every(function(T){var L=T.feature,W=T.modifier,Q=T.value,$=_[L];if(!$)return!1;switch(L){case"orientation":case"scan":return $.toLowerCase()===Q.toLowerCase();case"width":case"height":case"device-width":case"device-height":Q=d(Q),$=d($);break;case"resolution":Q=f(Q),$=f($);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":Q=R(Q),$=R($);break;case"grid":case"color":case"color-index":case"monochrome":Q=parseInt(Q,10)||1,$=parseInt($,10)||0;break}switch(W){case"min":return $>=Q;case"max":return $<=Q;default:return $===Q}});return P&&!E||!P&&E})}function w(p){return p.split(",").map(function(_){_=_.trim();var k=_.match(c),E=k[1],N=k[2],P=k[3]||"",T={};return T.inverse=!!E&&E.toLowerCase()==="not",T.type=N?N.toLowerCase():"all",P=P.match(/\([^\)]+\)/g)||[],T.expressions=P.map(function(L){var W=L.match(g),Q=W[1].toLowerCase().match(v);return{modifier:Q[1],feature:Q[2],value:W[2]}}),T})}function R(p){var _=Number(p),k;return _||(k=p.match(/^(\d+)\s*\/\s*(\d+)$/),_=k[1]/k[2]),_}function f(p){var _=parseFloat(p),k=String(p).match(m)[1];switch(k){case"dpcm":return _/2.54;case"dppx":return _*96;default:return _}}function d(p){var _=parseFloat(p),k=String(p).match(h)[1];switch(k){case"em":return _*16;case"rem":return _*16;case"cm":return _*96/2.54;case"mm":return _*96/2.54/10;case"in":return _*96;case"pt":return _*72;case"pc":return _*72/12;default:return _}}},"./node_modules/hyphenate-style-name/index.js":(a,u,c)=>{c.r(u),c.d(u,{default:()=>w});var g=/[A-Z]/g,v=/^ms-/,h={};function m(R){return"-"+R.toLowerCase()}function x(R){if(h.hasOwnProperty(R))return h[R];var f=R.replace(g,m);return h[R]=v.test(f)?"-"+f:f}const w=x},"./node_modules/matchmediaquery/index.js":(a,u,c)=>{var g=c("./node_modules/css-mediaquery/index.js").match,v=typeof window<"u"?window.matchMedia:null;function h(x,w,R){var f=this;if(v&&!R){var d=v.call(window,x);this.matches=d.matches,this.media=d.media,d.addListener(k)}else this.matches=g(x,w),this.media=x;this.addListener=p,this.removeListener=_,this.dispose=E;function p(N){d&&d.addListener(N)}function _(N){d&&d.removeListener(N)}function k(N){f.matches=N.matches,f.media=N.media}function E(){d&&d.removeListener(k)}}function m(x,w,R){return new h(x,w,R)}a.exports=m},"./node_modules/object-assign/index.js":a=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;function v(m){if(m==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(m)}function h(){try{if(!Object.assign)return!1;var m=new String("abc");if(m[5]="de",Object.getOwnPropertyNames(m)[0]==="5")return!1;for(var x={},w=0;w<10;w++)x["_"+String.fromCharCode(w)]=w;var R=Object.getOwnPropertyNames(x).map(function(d){return x[d]});if(R.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(d){f[d]=d}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}a.exports=h()?Object.assign:function(m,x){for(var w,R=v(m),f,d=1;d<arguments.length;d++){w=Object(arguments[d]);for(var p in w)c.call(w,p)&&(R[p]=w[p]);if(u){f=u(w);for(var _=0;_<f.length;_++)g.call(w,f[_])&&(R[f[_]]=w[f[_]])}}return R}},"./node_modules/prop-types/checkPropTypes.js":(a,u,c)=>{var g=function(){};{var v=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),h={},m=c("./node_modules/prop-types/lib/has.js");g=function(w){var R="Warning: "+w;typeof console<"u"&&console.error(R);try{throw new Error(R)}catch{}}}function x(w,R,f,d,p){for(var _ in w)if(m(w,_)){var k;try{if(typeof w[_]!="function"){var E=Error((d||"React class")+": "+f+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}k=w[_](R,_,d,f,null,v)}catch(P){k=P}if(k&&!(k instanceof Error)&&g((d||"React class")+": type specification of "+f+" `"+_+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof k+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),k instanceof Error&&!(k.message in h)){h[k.message]=!0;var N=p?p():"";g("Failed "+f+" type: "+k.message+(N??""))}}}x.resetWarningCache=function(){h={}},a.exports=x},"./node_modules/prop-types/factoryWithTypeCheckers.js":(a,u,c)=>{var g=c("./node_modules/react-is/index.js"),v=c("./node_modules/object-assign/index.js"),h=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),m=c("./node_modules/prop-types/lib/has.js"),x=c("./node_modules/prop-types/checkPropTypes.js"),w=function(){};w=function(f){var d="Warning: "+f;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function R(){return null}a.exports=function(f,d){var p=typeof Symbol=="function"&&Symbol.iterator,_="@@iterator";function k(A){var B=A&&(p&&A[p]||A[_]);if(typeof B=="function")return B}var E="<<anonymous>>",N={array:W("array"),bigint:W("bigint"),bool:W("boolean"),func:W("function"),number:W("number"),object:W("object"),string:W("string"),symbol:W("symbol"),any:Q(),arrayOf:$,element:fe(),elementType:ye(),instanceOf:Se,node:D(),objectOf:S,oneOf:O,oneOfType:b,shape:X,exact:ke};function P(A,B){return A===B?A!==0||1/A===1/B:A!==A&&B!==B}function T(A,B){this.message=A,this.data=B&&typeof B=="object"?B:{},this.stack=""}T.prototype=Error.prototype;function L(A){var B={},q=0;function J(ie,V,ne,te,I,le,M){if(te=te||E,le=le||ne,M!==h){if(d){var Z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Z.name="Invariant Violation",Z}else if(typeof console<"u"){var De=te+":"+ne;!B[De]&&q<3&&(w("You are manually calling a React.PropTypes validation function for the `"+le+"` prop on `"+te+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),B[De]=!0,q++)}}return V[ne]==null?ie?V[ne]===null?new T("The "+I+" `"+le+"` is marked as required "+("in `"+te+"`, but its value is `null`.")):new T("The "+I+" `"+le+"` is marked as required in "+("`"+te+"`, but its value is `undefined`.")):null:A(V,ne,te,I,le)}var K=J.bind(null,!1);return K.isRequired=J.bind(null,!0),K}function W(A){function B(q,J,K,ie,V,ne){var te=q[J],I=se(te);if(I!==A){var le=de(te);return new T("Invalid "+ie+" `"+V+"` of type "+("`"+le+"` supplied to `"+K+"`, expected ")+("`"+A+"`."),{expectedType:A})}return null}return L(B)}function Q(){return L(R)}function $(A){function B(q,J,K,ie,V){if(typeof A!="function")return new T("Property `"+V+"` of component `"+K+"` has invalid PropType notation inside arrayOf.");var ne=q[J];if(!Array.isArray(ne)){var te=se(ne);return new T("Invalid "+ie+" `"+V+"` of type "+("`"+te+"` supplied to `"+K+"`, expected an array."))}for(var I=0;I<ne.length;I++){var le=A(ne,I,K,ie,V+"["+I+"]",h);if(le instanceof Error)return le}return null}return L(B)}function fe(){function A(B,q,J,K,ie){var V=B[q];if(!f(V)){var ne=se(V);return new T("Invalid "+K+" `"+ie+"` of type "+("`"+ne+"` supplied to `"+J+"`, expected a single ReactElement."))}return null}return L(A)}function ye(){function A(B,q,J,K,ie){var V=B[q];if(!g.isValidElementType(V)){var ne=se(V);return new T("Invalid "+K+" `"+ie+"` of type "+("`"+ne+"` supplied to `"+J+"`, expected a single ReactElement type."))}return null}return L(A)}function Se(A){function B(q,J,K,ie,V){if(!(q[J]instanceof A)){var ne=A.name||E,te=fn(q[J]);return new T("Invalid "+ie+" `"+V+"` of type "+("`"+te+"` supplied to `"+K+"`, expected ")+("instance of `"+ne+"`."))}return null}return L(B)}function O(A){if(!Array.isArray(A))return arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array."),R;function B(q,J,K,ie,V){for(var ne=q[J],te=0;te<A.length;te++)if(P(ne,A[te]))return null;var I=JSON.stringify(A,function(M,Z){var De=de(Z);return De==="symbol"?String(Z):Z});return new T("Invalid "+ie+" `"+V+"` of value `"+String(ne)+"` "+("supplied to `"+K+"`, expected one of "+I+"."))}return L(B)}function S(A){function B(q,J,K,ie,V){if(typeof A!="function")return new T("Property `"+V+"` of component `"+K+"` has invalid PropType notation inside objectOf.");var ne=q[J],te=se(ne);if(te!=="object")return new T("Invalid "+ie+" `"+V+"` of type "+("`"+te+"` supplied to `"+K+"`, expected an object."));for(var I in ne)if(m(ne,I)){var le=A(ne,I,K,ie,V+"."+I,h);if(le instanceof Error)return le}return null}return L(B)}function b(A){if(!Array.isArray(A))return w("Invalid argument supplied to oneOfType, expected an instance of array."),R;for(var B=0;B<A.length;B++){var q=A[B];if(typeof q!="function")return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Ne(q)+" at index "+B+"."),R}function J(K,ie,V,ne,te){for(var I=[],le=0;le<A.length;le++){var M=A[le],Z=M(K,ie,V,ne,te,h);if(Z==null)return null;Z.data&&m(Z.data,"expectedType")&&I.push(Z.data.expectedType)}var De=I.length>0?", expected one of type ["+I.join(", ")+"]":"";return new T("Invalid "+ne+" `"+te+"` supplied to "+("`"+V+"`"+De+"."))}return L(J)}function D(){function A(B,q,J,K,ie){return Ee(B[q])?null:new T("Invalid "+K+" `"+ie+"` supplied to "+("`"+J+"`, expected a ReactNode."))}return L(A)}function U(A,B,q,J,K){return new T((A||"React class")+": "+B+" type `"+q+"."+J+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+K+"`.")}function X(A){function B(q,J,K,ie,V){var ne=q[J],te=se(ne);if(te!=="object")return new T("Invalid "+ie+" `"+V+"` of type `"+te+"` "+("supplied to `"+K+"`, expected `object`."));for(var I in A){var le=A[I];if(typeof le!="function")return U(K,ie,V,I,de(le));var M=le(ne,I,K,ie,V+"."+I,h);if(M)return M}return null}return L(B)}function ke(A){function B(q,J,K,ie,V){var ne=q[J],te=se(ne);if(te!=="object")return new T("Invalid "+ie+" `"+V+"` of type `"+te+"` "+("supplied to `"+K+"`, expected `object`."));var I=v({},q[J],A);for(var le in I){var M=A[le];if(m(A,le)&&typeof M!="function")return U(K,ie,V,le,de(M));if(!M)return new T("Invalid "+ie+" `"+V+"` key `"+le+"` supplied to `"+K+"`.\nBad object: "+JSON.stringify(q[J],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(A),null,"  "));var Z=M(ne,le,K,ie,V+"."+le,h);if(Z)return Z}return null}return L(B)}function Ee(A){switch(typeof A){case"number":case"string":case"undefined":return!0;case"boolean":return!A;case"object":if(Array.isArray(A))return A.every(Ee);if(A===null||f(A))return!0;var B=k(A);if(B){var q=B.call(A),J;if(B!==A.entries){for(;!(J=q.next()).done;)if(!Ee(J.value))return!1}else for(;!(J=q.next()).done;){var K=J.value;if(K&&!Ee(K[1]))return!1}}else return!1;return!0;default:return!1}}function ae(A,B){return A==="symbol"?!0:B?B["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&B instanceof Symbol:!1}function se(A){var B=typeof A;return Array.isArray(A)?"array":A instanceof RegExp?"object":ae(B,A)?"symbol":B}function de(A){if(typeof A>"u"||A===null)return""+A;var B=se(A);if(B==="object"){if(A instanceof Date)return"date";if(A instanceof RegExp)return"regexp"}return B}function Ne(A){var B=de(A);switch(B){case"array":case"object":return"an "+B;case"boolean":case"date":case"regexp":return"a "+B;default:return B}}function fn(A){return!A.constructor||!A.constructor.name?E:A.constructor.name}return N.checkPropTypes=x,N.resetWarningCache=x.resetWarningCache,N.PropTypes=N,N}},"./node_modules/prop-types/index.js":(a,u,c)=>{{var g=c("./node_modules/react-is/index.js"),v=!0;a.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(g.isElement,v)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":a=>{var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";a.exports=u},"./node_modules/prop-types/lib/has.js":a=>{a.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(a,u)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,g=c?Symbol.for("react.element"):60103,v=c?Symbol.for("react.portal"):60106,h=c?Symbol.for("react.fragment"):60107,m=c?Symbol.for("react.strict_mode"):60108,x=c?Symbol.for("react.profiler"):60114,w=c?Symbol.for("react.provider"):60109,R=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,p=c?Symbol.for("react.forward_ref"):60112,_=c?Symbol.for("react.suspense"):60113,k=c?Symbol.for("react.suspense_list"):60120,E=c?Symbol.for("react.memo"):60115,N=c?Symbol.for("react.lazy"):60116,P=c?Symbol.for("react.block"):60121,T=c?Symbol.for("react.fundamental"):60117,L=c?Symbol.for("react.responder"):60118,W=c?Symbol.for("react.scope"):60119;function Q(M){return typeof M=="string"||typeof M=="function"||M===h||M===d||M===x||M===m||M===_||M===k||typeof M=="object"&&M!==null&&(M.$$typeof===N||M.$$typeof===E||M.$$typeof===w||M.$$typeof===R||M.$$typeof===p||M.$$typeof===T||M.$$typeof===L||M.$$typeof===W||M.$$typeof===P)}function $(M){if(typeof M=="object"&&M!==null){var Z=M.$$typeof;switch(Z){case g:var De=M.type;switch(De){case f:case d:case h:case x:case m:case _:return De;default:var wn=De&&De.$$typeof;switch(wn){case R:case p:case N:case E:case w:return wn;default:return Z}}case v:return Z}}}var fe=f,ye=d,Se=R,O=w,S=g,b=p,D=h,U=N,X=E,ke=v,Ee=x,ae=m,se=_,de=!1;function Ne(M){return de||(de=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),fn(M)||$(M)===f}function fn(M){return $(M)===d}function A(M){return $(M)===R}function B(M){return $(M)===w}function q(M){return typeof M=="object"&&M!==null&&M.$$typeof===g}function J(M){return $(M)===p}function K(M){return $(M)===h}function ie(M){return $(M)===N}function V(M){return $(M)===E}function ne(M){return $(M)===v}function te(M){return $(M)===x}function I(M){return $(M)===m}function le(M){return $(M)===_}u.AsyncMode=fe,u.ConcurrentMode=ye,u.ContextConsumer=Se,u.ContextProvider=O,u.Element=S,u.ForwardRef=b,u.Fragment=D,u.Lazy=U,u.Memo=X,u.Portal=ke,u.Profiler=Ee,u.StrictMode=ae,u.Suspense=se,u.isAsyncMode=Ne,u.isConcurrentMode=fn,u.isContextConsumer=A,u.isContextProvider=B,u.isElement=q,u.isForwardRef=J,u.isFragment=K,u.isLazy=ie,u.isMemo=V,u.isPortal=ne,u.isProfiler=te,u.isStrictMode=I,u.isSuspense=le,u.isValidElementType=Q,u.typeOf=$})()},"./node_modules/react-is/index.js":(a,u,c)=>{a.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(a,u,c)=>{c.r(u),c.d(u,{shallowEqualArrays:()=>v,shallowEqualObjects:()=>g});function g(h,m){if(h===m)return!0;if(!h||!m)return!1;var x=Object.keys(h),w=Object.keys(m),R=x.length;if(w.length!==R)return!1;for(var f=0;f<R;f++){var d=x[f];if(h[d]!==m[d]||!Object.prototype.hasOwnProperty.call(m,d))return!1}return!0}function v(h,m){if(h===m)return!0;if(!h||!m)return!1;var x=h.length;if(m.length!==x)return!1;for(var w=0;w<x;w++)if(h[w]!==m[w])return!1;return!0}},"./src/Component.ts":function(a,u,c){var g=this&&this.__rest||function(x,w){var R={};for(var f in x)Object.prototype.hasOwnProperty.call(x,f)&&w.indexOf(f)<0&&(R[f]=x[f]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,f=Object.getOwnPropertySymbols(x);d<f.length;d++)w.indexOf(f[d])<0&&Object.prototype.propertyIsEnumerable.call(x,f[d])&&(R[f[d]]=x[f[d]]);return R},v=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(u,"__esModule",{value:!0});var h=v(c("./src/useMediaQuery.ts")),m=function(x){var w=x.children,R=x.device,f=x.onChange,d=g(x,["children","device","onChange"]),p=(0,h.default)(d,R,f);return typeof w=="function"?w(p):p?w:null};u.default=m},"./src/Context.ts":(a,u,c)=>{Object.defineProperty(u,"__esModule",{value:!0});var g=c("react"),v=(0,g.createContext)(void 0);u.default=v},"./src/index.ts":function(a,u,c){var g=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(u,"__esModule",{value:!0}),u.Context=u.toQuery=u.useMediaQuery=u.default=void 0;var v=g(c("./src/useMediaQuery.ts"));u.useMediaQuery=v.default;var h=g(c("./src/Component.ts"));u.default=h.default;var m=g(c("./src/toQuery.ts"));u.toQuery=m.default;var x=g(c("./src/Context.ts"));u.Context=x.default},"./src/mediaQuery.ts":function(a,u,c){var g=this&&this.__assign||function(){return g=Object.assign||function(_){for(var k,E=1,N=arguments.length;E<N;E++){k=arguments[E];for(var P in k)Object.prototype.hasOwnProperty.call(k,P)&&(_[P]=k[P])}return _},g.apply(this,arguments)},v=this&&this.__rest||function(_,k){var E={};for(var N in _)Object.prototype.hasOwnProperty.call(_,N)&&k.indexOf(N)<0&&(E[N]=_[N]);if(_!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,N=Object.getOwnPropertySymbols(_);P<N.length;P++)k.indexOf(N[P])<0&&Object.prototype.propertyIsEnumerable.call(_,N[P])&&(E[N[P]]=_[N[P]]);return E},h=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(u,"__esModule",{value:!0});var m=h(c("./node_modules/prop-types/index.js")),x=m.default.oneOfType([m.default.string,m.default.number]),w={all:m.default.bool,grid:m.default.bool,aural:m.default.bool,braille:m.default.bool,handheld:m.default.bool,print:m.default.bool,projection:m.default.bool,screen:m.default.bool,tty:m.default.bool,tv:m.default.bool,embossed:m.default.bool},R={orientation:m.default.oneOf(["portrait","landscape"]),scan:m.default.oneOf(["progressive","interlace"]),aspectRatio:m.default.string,deviceAspectRatio:m.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:m.default.bool,colorIndex:m.default.bool,monochrome:m.default.bool,resolution:x,type:Object.keys(w)};R.type;var f=v(R,["type"]),d=g({minAspectRatio:m.default.string,maxAspectRatio:m.default.string,minDeviceAspectRatio:m.default.string,maxDeviceAspectRatio:m.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:m.default.number,maxColor:m.default.number,minColorIndex:m.default.number,maxColorIndex:m.default.number,minMonochrome:m.default.number,maxMonochrome:m.default.number,minResolution:x,maxResolution:x},f),p=g(g({},w),d);u.default={all:p,types:w,matchers:R,features:d}},"./src/toQuery.ts":function(a,u,c){var g=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(u,"__esModule",{value:!0});var v=g(c("./node_modules/hyphenate-style-name/index.js")),h=g(c("./src/mediaQuery.ts")),m=function(f){return"not ".concat(f)},x=function(f,d){var p=(0,v.default)(f);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?p:d===!1?m(p):"(".concat(p,": ").concat(d,")")},w=function(f){return f.join(" and ")},R=function(f){var d=[];return Object.keys(h.default.all).forEach(function(p){var _=f[p];_!=null&&d.push(x(p,_))}),w(d)};u.default=R},"./src/useMediaQuery.ts":function(a,u,c){var g=this&&this.__importDefault||function(T){return T&&T.__esModule?T:{default:T}};Object.defineProperty(u,"__esModule",{value:!0});var v=c("react"),h=g(c("./node_modules/matchmediaquery/index.js")),m=g(c("./node_modules/hyphenate-style-name/index.js")),x=c("./node_modules/shallow-equal/dist/index.esm.js"),w=g(c("./src/toQuery.ts")),R=g(c("./src/Context.ts")),f=function(T){return T.query||(0,w.default)(T)},d=function(T){if(T){var L=Object.keys(T);return L.reduce(function(W,Q){return W[(0,m.default)(Q)]=T[Q],W},{})}},p=function(){var T=(0,v.useRef)(!1);return(0,v.useEffect)(function(){T.current=!0},[]),T.current},_=function(T){var L=(0,v.useContext)(R.default),W=function(){return d(T)||d(L)},Q=(0,v.useState)(W),$=Q[0],fe=Q[1];return(0,v.useEffect)(function(){var ye=W();(0,x.shallowEqualObjects)($,ye)||fe(ye)},[T,L]),$},k=function(T){var L=function(){return f(T)},W=(0,v.useState)(L),Q=W[0],$=W[1];return(0,v.useEffect)(function(){var fe=L();Q!==fe&&$(fe)},[T]),Q},E=function(T,L){var W=function(){return(0,h.default)(T,L||{},!!L)},Q=(0,v.useState)(W),$=Q[0],fe=Q[1],ye=p();return(0,v.useEffect)(function(){if(ye){var Se=W();return fe(Se),function(){Se&&Se.dispose()}}},[T,L]),$},N=function(T){var L=(0,v.useState)(T.matches),W=L[0],Q=L[1];return(0,v.useEffect)(function(){var $=function(fe){Q(fe.matches)};return T.addListener($),Q(T.matches),function(){T.removeListener($)}},[T]),W},P=function(T,L,W){var Q=_(L),$=k(T);if(!$)throw new Error("Invalid or missing MediaQuery!");var fe=E($,Q),ye=N(fe),Se=p();return(0,v.useEffect)(function(){Se&&W&&W(ye)},[ye]),(0,v.useEffect)(function(){return function(){fe&&fe.dispose()}},[]),ye};u.default=P},react:a=>{a.exports=t}},i={};function l(a){var u=i[a];if(u!==void 0)return u.exports;var c=i[a]={exports:{}};return r[a].call(c.exports,c,c.exports,l),c.exports}l.d=(a,u)=>{for(var c in u)l.o(u,c)&&!l.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:u[c]})},l.o=(a,u)=>Object.prototype.hasOwnProperty.call(a,u),l.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s=l("./src/index.ts");return s})())})(Nd);var Td=Nd.exports;function Mh(e){return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2}function Od({selector:e,duration:n=1500,offset:t=0}){const r=G.useRef(null),i=G.useRef(0),l=G.useRef(!1),s=()=>{i.current&&cancelAnimationFrame(i.current)},a=()=>l.current=!0,u=G.useCallback(()=>{if(!r.current)return;s(),l.current=!1;const g=r.current.offsetTop,v=window.scrollY,h=g-v-t,m=performance.now();if(!h)return;const x=w=>{const R=w-m,f=R/n,d=Mh(f>1?1:f),p=v+h*d;window.scrollTo({top:p}),R<n&&!l.current?requestAnimationFrame(x):i.current=0};requestAnimationFrame(x)},[e,n,t]);return G.useEffect(()=>(r.current=document.querySelector(e),window.addEventListener("wheel",a,{passive:!0}),window.addEventListener("touchmove",a,{passive:!0}),()=>{s(),window.removeEventListener("wheel",a),window.removeEventListener("touchmove",a)}),[e]),u}function en(...e){return e.filter(Boolean).join(" ")}const Lh="_brand_18f9t_1",Dh="_bounce_18f9t_19",Ih="_glowDisappear_18f9t_23",zh="_heartBeat_18f9t_27",Bh="_rubberBand_18f9t_31",Fh="_rotate_18f9t_35",lt={brand:Lh,bounce:Dh,glowDisappear:Ih,"glow-disappear":"_glow-disappear_18f9t_1",heartBeat:zh,"heart-beat":"_heart-beat_18f9t_1",rubberBand:Bh,"rubber-band":"_rubber-band_18f9t_1",rotate:Fh};function Uh(){const[e,n]=G.useState(lt.rotate),[t,r]=G.useState(!1),i=[lt.bounce,lt.glowDisappear,lt.heartBeat,lt.rubberBand,lt.rotate],l=en(lt.brand,t&&e),s=()=>r(!1),a=()=>{const u=Math.floor(Math.random()*i.length),c=i[u];r(!0),n(c)};return o.jsx("div",{className:l,onClick:a,onAnimationEnd:s,children:"JWL"})}const Hh="_container_uucyv_1",$h="_input_uucyv_6",Wh="_label_uucyv_16",Gh="_indicator_uucyv_20",Yh="_decoration_uucyv_28",Qh="_cloud_uucyv_1",Vh="_twinkle_uucyv_1",ar={container:Hh,input:$h,label:Wh,indicator:Gh,decoration:Yh,cloud:Qh,twinkle:Vh};function Za(){const e=document.documentElement,[n,t]=G.useState(!1),r=()=>{const l=new Event("themeChange");e.dispatchEvent(l)},i=()=>{t(!n),e.setAttribute("data-theme",n?"dark":"light"),r()};return G.useEffect(()=>{const l=e.getAttribute("data-theme");t(l==="light"),r()},[]),o.jsxs("div",{className:ar.container,children:[o.jsx("input",{className:ar.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:n,onChange:i}),o.jsxs("label",{className:ar.label,htmlFor:"theme-switch",children:[o.jsx("span",{className:ar.indicator}),o.jsx("span",{className:ar.decoration})]})]})}function Kh(){const e=document.documentElement,[n,t]=G.useState("light"),r=()=>{const i=e.getAttribute("data-theme")??"light";t(i)};return G.useEffect(()=>(e.addEventListener("themeChange",r),()=>e.removeEventListener("themeChange",r)),[e]),n}function Xh(){const n=Kh()==="dark"?"#FFFFFF":"#181616";return o.jsx("svg",{viewBox:"0 0 128 128",children:o.jsxs("g",{fill:n,children:[o.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),o.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const Zh=72;function Jh({forwardedRef:e}){const n=G.useRef(null),t=Od({selector:"main",offset:Zh}),{isSidebarOpen:r,toggleSidebar:i}=Ds(),l=Td.useMediaQuery({maxWidth:768}),s=en(hn.hamburgerIcon,!r&&hn.collapsed),a=m=>{m.preventDefault(),t()},u=()=>i(),c=()=>!l&&o.jsx(Uh,{}),g=()=>!l&&o.jsx("a",{href:"main",onClick:a,role:"button",children:o.jsx("h1",{className:hn.title,children:"LeetCode Cheatsheet"})}),v=()=>o.jsx("a",{href:"https://github.com/jwl-7/leetcode-cheatsheet","aria-label":"GitHub source",className:hn.iconLink,target:"_blank",children:o.jsx(Xh,{})}),h=()=>l?o.jsxs(o.Fragment,{children:[o.jsx(Za,{}),v()]}):o.jsxs("div",{className:hn.buttonContainer,children:[v(),o.jsx(Za,{})]});return o.jsx("header",{ref:n,className:hn.topbar,children:o.jsxs("div",{className:hn.container,children:[o.jsxs("div",{ref:e,className:hn.hamburger,onClick:u,children:[o.jsx("span",{className:en(s,hn.hamburgerTop)}),o.jsx("span",{className:en(s,hn.hamburgerMiddle)}),o.jsx("span",{className:en(s,hn.hamburgerBottom)})]}),c(),g(),h()]})})}const qh="_sidebar_14bou_1",eg="_exit_14bou_21",ng="_hide_14bou_24",tg="_scrollContainer_14bou_28",ci={sidebar:qh,"sidebar-enter":"_sidebar-enter_14bou_1",exit:eg,"sidebar-exit":"_sidebar-exit_14bou_1",hide:ng,scrollContainer:tg};function hl(e,n){const t=r=>{const i=l=>l.current&&!l.current.contains(r.target);(Array.isArray(e)?e.every(i):i(e))&&n()};G.useEffect(()=>(document.addEventListener("click",t),()=>document.removeEventListener("click",t)),[e,n])}const rg="_accordion_1hmri_1",ig="_button_1hmri_6",lg="_open_1hmri_25",og="_content_1hmri_29",di={accordion:rg,button:ig,open:lg,content:og};function sg(e){const n=parseFloat(e);return!isNaN(n)&&isFinite(n)}function Ja(e){return typeof e=="string"&&e[e.length-1]==="%"&&sg(e.substring(0,e.length-1))}function Wl(e,n,t){n===0&&!t&&(e!=null&&e.style)&&(e==null?void 0:e.children.length)>0&&(e.style.display="none")}function ag(e,n){n===0&&(e!=null&&e.style)&&(e.style.display="")}const ug={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function qa(e,n){return[e.static,n===0&&e.staticHeightZero,typeof n=="number"&&n>0?e.staticHeightSpecific:null,n==="auto"&&e.staticHeightAuto].filter(t=>t).join(" ")}const cg=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],dg=mi.forwardRef((e,n)=>{const{animateOpacity:t=!1,animationStateClasses:r={},applyInlineTransitions:i=!0,children:l,className:s="",contentClassName:a,delay:u=0,disableDisplayNone:c=!1,duration:g=500,easing:v="ease",height:h,onHeightAnimationEnd:m,onHeightAnimationStart:x,style:w,contentRef:R}=e,f=Object.assign({},e);cg.forEach(ae=>{delete f[ae]});const d=G.useRef(h),p=G.useRef(null),_=G.useRef(),k=G.useRef(),E=G.useRef(Object.assign(Object.assign({},ug),r)),N=typeof window<"u",P=G.useRef(N&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),T=P.current?0:u,L=P.current?0:g;let W=h,Q="visible";typeof h=="number"?(W=h<0?0:h,Q="hidden"):Ja(W)&&(W=h==="0%"?0:h,Q="hidden");const[$,fe]=G.useState(W),[ye,Se]=G.useState(Q),[O,S]=G.useState(!1),[b,D]=G.useState(qa(E.current,h));G.useEffect(()=>{Wl(p.current,$,c)},[]),G.useEffect(()=>{if(h!==d.current&&p.current){ag(p.current,d.current),p.current.style.overflow="hidden";const ae=p.current.offsetHeight;p.current.style.overflow="";const se=L+T;let de,Ne,fn="hidden",A;const B=d.current==="auto";typeof h=="number"?(de=h<0?0:h,Ne=de):Ja(h)?(de=h==="0%"?0:h,Ne=de):(de=ae,Ne="auto",fn=void 0),B&&(Ne=de,de=ae);const q=[E.current.animating,(d.current==="auto"||h<d.current)&&E.current.animatingUp,(h==="auto"||h>d.current)&&E.current.animatingDown,Ne===0&&E.current.animatingToHeightZero,Ne==="auto"&&E.current.animatingToHeightAuto,typeof Ne=="number"&&Ne>0?E.current.animatingToHeightSpecific:null].filter(K=>K).join(" "),J=qa(E.current,Ne);fe(de),Se("hidden"),S(!B),D(q),clearTimeout(k.current),clearTimeout(_.current),B?(A=!0,k.current=setTimeout(()=>{fe(Ne),Se(fn),S(A),x==null||x(Ne)},50),_.current=setTimeout(()=>{S(!1),D(J),Wl(p.current,Ne,c),m==null||m(Ne)},se)):(x==null||x(de),k.current=setTimeout(()=>{fe(Ne),Se(fn),S(!1),D(J),h!=="auto"&&Wl(p.current,de,c),m==null||m(de)},se))}return d.current=h,()=>{clearTimeout(k.current),clearTimeout(_.current)}},[h]);const U=Object.assign(Object.assign({},w),{height:$,overflow:ye||(w==null?void 0:w.overflow)});O&&i&&(U.transition=`height ${L}ms ${v} ${T}ms`,w!=null&&w.transition&&(U.transition=`${w.transition}, ${U.transition}`),U.WebkitTransition=U.transition);const X={};t&&(X.transition=`opacity ${L}ms ${v} ${T}ms`,X.WebkitTransition=X.transition,$===0&&(X.opacity=0));const Ee=typeof f["aria-hidden"]<"u"?f["aria-hidden"]:h===0;return mi.createElement("div",Object.assign({},f,{"aria-hidden":Ee,className:`${b} ${s}`,style:U,ref:n}),mi.createElement("div",{className:a,style:X,ref:ae=>{p.current=ae,R&&(R.current=ae)}},l))});function fg(){return o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})}function Ze({title:e,children:n}){const[t,r]=G.useState(!1),i=t?"auto":0,l=en(di.button,t&&di.open),s=()=>r(!t);return o.jsxs("div",{className:di.accordion,children:[o.jsxs("button",{className:l,onClick:s,children:[o.jsx("span",{children:e}),o.jsx(fg,{})]}),o.jsx(dg,{animateOpacity:!0,height:i,duration:400,children:o.jsx("div",{className:di.content,children:n})})]})}const pg="_linkWrapper_1logo_1",hg="_link_1logo_1",eu={linkWrapper:pg,link:hg},gg="_tooltip_1edpy_1",mg="_exit_1edpy_13",vg="_text_1edpy_27",Gl={tooltip:gg,"tooltip-enter":"_tooltip-enter_1edpy_1",exit:mg,"tooltip-exit":"_tooltip-exit_1edpy_1",text:vg};function yg({anchorRef:e,content:n,showTooltip:t}){const r=G.useRef(null),[i,l]=G.useState(null),[s,a]=G.useState(!1),u=en(Gl.tooltip,!t&&Gl.exit),c=()=>a(!1),g=()=>{t||a(!0)};return G.useEffect(()=>{var w;if(!t||!e.current)return;const v=e.current.getBoundingClientRect(),h=((w=r.current)==null?void 0:w.offsetHeight)??0,m=v.left+window.scrollX,x=v.top+window.scrollY-h-4;l({top:x,left:m})},[t]),(t||!s)&&e.current&&yh.createPortal(o.jsx("div",{ref:r,className:u,style:i??{},onAnimationStart:c,onAnimationEnd:g,children:o.jsx("span",{className:Gl.text,children:n})}),document.body)}function Y({href:e,description:n}){const t=G.useRef(null),[r,i]=G.useState(!1),l=Od({selector:e,offset:72});let s;const a=g=>{g.preventDefault(),window.history.replaceState({},"",e),clearTimeout(s),i(!1),l()},u=()=>{s=setTimeout(()=>{i(!0)},700)},c=()=>{clearTimeout(s),i(!1)};return o.jsxs("div",{className:eu.linkWrapper,children:[o.jsx("a",{ref:t,href:e,className:eu.link,onClick:a,role:"button","aria-description":n,onMouseEnter:u,onMouseLeave:c,children:n}),o.jsx(yg,{anchorRef:t,content:n,showTooltip:r})]})}function xg(){return o.jsxs(o.Fragment,{children:[o.jsxs(Ze,{title:"Big O",children:[o.jsx(Y,{href:"#bigo-chart",description:"Time/Space Complexities"}),o.jsx(Y,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),o.jsx(Y,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),o.jsxs(Ze,{title:"Array",children:[o.jsx(Y,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),o.jsx(Y,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),o.jsx(Y,{href:"#array-sliding-window",description:"sliding window"}),o.jsx(Y,{href:"#array-prefix-sum",description:"prefix sum"}),o.jsx(Y,{href:"#array-string-building",description:"efficient string building"})]}),o.jsx(Ze,{title:"Hash Map",children:o.jsx(Y,{href:"#hashmap-number-of-subarrays",description:"number of subarrays that fit an exact criteria"})}),o.jsxs(Ze,{title:"Linked List",children:[o.jsx(Y,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),o.jsx(Y,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),o.jsx(Ze,{title:"Stack",children:o.jsx(Y,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"})}),o.jsxs(Ze,{title:"Binary Tree",children:[o.jsx(Y,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),o.jsx(Y,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),o.jsx(Y,{href:"#tree-bfs",description:"BFS"})]}),o.jsxs(Ze,{title:"Graph",children:[o.jsx(Y,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),o.jsx(Y,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),o.jsx(Y,{href:"#graph-bfs",description:"BFS"}),o.jsx(Y,{href:"#graph-dijkstra",description:"Dijkstra"})]}),o.jsx(Ze,{title:"Heap",children:o.jsx(Y,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),o.jsxs(Ze,{title:"Binary Search",children:[o.jsx(Y,{href:"#binarysearch-binary-search",description:"binary search"}),o.jsx(Y,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),o.jsx(Y,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),o.jsx(Y,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),o.jsx(Y,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),o.jsx(Ze,{title:"Backtracking",children:o.jsx(Y,{href:"#backtracking-backtracking",description:"backtracking"})}),o.jsxs(Ze,{title:"Dynamic Programming",children:[o.jsx(Y,{href:"#dp-top-down",description:"top-down"}),o.jsx(Y,{href:"#dp-bottom-up",description:"bottom-up"})]}),o.jsxs(Ze,{title:"Data Structures",children:[o.jsx(Y,{href:"#ds-array",description:"array"}),o.jsx(Y,{href:"#ds-hash-map",description:"hashmap"}),o.jsx(Y,{href:"#ds-linked-list",description:"linked list"}),o.jsx(Y,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),o.jsx(Y,{href:"#ds-binary-tree",description:"binary tree"}),o.jsx(Y,{href:"#ds-binary-search-tree",description:"binary search tree"}),o.jsx(Y,{href:"#ds-graph",description:"graph"}),o.jsx(Y,{href:"#ds-union-find",description:"union find"}),o.jsx(Y,{href:"#ds-union-find-optimized",description:"union find optimized"}),o.jsx(Y,{href:"#ds-trie",description:"trie"})]}),o.jsxs(Ze,{title:"Sorting Algorithms",children:[o.jsx(Y,{href:"#sort-bubble",description:"bubble sort"}),o.jsx(Y,{href:"#sort-selection",description:"selection sort"}),o.jsx(Y,{href:"#sort-insertion",description:"insertion sort"}),o.jsx(Y,{href:"#sort-shell",description:"shell sort"}),o.jsx(Y,{href:"#sort-merge",description:"mergesort"}),o.jsx(Y,{href:"#sort-quick",description:"quicksort"}),o.jsx(Y,{href:"#sort-tim",description:"timsort"}),o.jsx(Y,{href:"#sort-heap",description:"heapsort"}),o.jsx(Y,{href:"#sort-counting",description:"counting sort"}),o.jsx(Y,{href:"#sort-bucket",description:"bucket sort"}),o.jsx(Y,{href:"#sort-radix",description:"radix sort"}),o.jsx(Y,{href:"#sort-cube",description:"cubesort"}),o.jsx(Y,{href:"#sort-bogo",description:"bogo sort"}),o.jsx(Y,{href:"#sort-pancake",description:"pancake sort"}),o.jsx(Y,{href:"#sort-sleep",description:"sleep sort"})]})]})}function _g({hamburgerButtonRef:e}){const n=G.useRef(null),{isSidebarOpen:t,showSidebar:r,hideSidebar:i}=Ds(),[l,s]=G.useState(!1),a=en(ci.sidebar,!t&&ci.exit,!t&&l&&ci.hide),u=m=>{m&&t?i():!m&&!t&&r()},c=Td.useMediaQuery({maxWidth:768},void 0,u),g=()=>{c&&t&&i()},v=()=>s(!1),h=()=>{t||s(!0)};return hl([n,e],g),o.jsx("nav",{ref:n,className:a,onAnimationStart:v,onAnimationEndCapture:h,children:o.jsx("div",{className:ci.scrollContainer,children:o.jsx(xg,{})})})}function wg(){const e=G.useRef(null);return o.jsxs("div",{id:"AppBar",children:[o.jsx(Jh,{forwardedRef:e}),o.jsx(_g,{hamburgerButtonRef:e})]})}const Sg="_main_1p6ym_1",jg="_sidebarHidden_1p6ym_11",nu={main:Sg,sidebarHidden:jg},kg="_container_1htmy_1",Eg="_sectionHeader_1htmy_7",he={container:kg,sectionHeader:Eg},Ng="_container_5c21h_1",Tg="_label_5c21h_13",Og="_tableWrapper_5c21h_21",Cg="_red_5c21h_30",Rg="_oliveGreen_5c21h_34",bg="_green_5c21h_38",Ag="_orange_5c21h_42",Pg="_yellow_5c21h_46",Mg="_gray_5c21h_50",y={container:Ng,label:Tg,tableWrapper:Og,red:Cg,oliveGreen:Rg,green:bg,orange:Ag,yellow:Pg,gray:Mg};function Lg(){const e={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return o.jsx("section",{id:"bigo-chart",children:o.jsxs("div",{className:y.container,children:[o.jsx("h3",{children:"Big-O Complexity Chart"}),o.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[o.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:e.red}),o.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:e.orange}),o.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:e.yellow}),o.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:e.oliveGreen}),o.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:e.green}),o.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),o.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),o.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),o.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),o.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),o.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),o.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),o.jsx("text",{className:y.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),o.jsx("text",{className:y.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function Dg(){const e=G.useRef(null),[n,t]=G.useState(""),r=()=>{if(n){const l=e.current,s=l==null?void 0:l.querySelector(`tr[data-row-number="${n}"]`);s==null||s.removeAttribute("focused")}},i=l=>{const s=l.currentTarget,a=s.getAttribute("data-row-number")??"";r(),a===n?t(""):(s.setAttribute("focused",""),t(a))};return hl(e,r),o.jsx("section",{id:"bigo-data-structure-operations-table",children:o.jsxs("div",{className:y.container,children:[o.jsx("h3",{children:"Data Structure Operations"}),o.jsx("div",{className:y.tableWrapper,children:o.jsx("table",{ref:e,children:o.jsxs("tbody",{children:[o.jsxs("tr",{onClick:i,"data-row-number":"1",children:[o.jsx("th",{children:"Data Structure"}),o.jsx("th",{colSpan:8,children:"Time Complexity"}),o.jsx("th",{children:"Space Complexity"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"2",children:[o.jsx("th",{}),o.jsx("th",{colSpan:4,children:"Average"}),o.jsx("th",{colSpan:4,children:"Worst"}),o.jsx("th",{children:"Worst"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"3",children:[o.jsx("th",{}),o.jsx("th",{children:"Access"}),o.jsx("th",{children:"Search"}),o.jsx("th",{children:"Insertion"}),o.jsx("th",{children:"Deletion"}),o.jsx("th",{children:"Access"}),o.jsx("th",{children:"Search"}),o.jsx("th",{children:"Insertion"}),o.jsx("th",{children:"Deletion"}),o.jsx("th",{})]}),o.jsxs("tr",{onClick:i,"data-row-number":"4",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"5",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"6",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"7",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"8",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.yellow,children:"Θ(n)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.green,children:"O(1)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"9",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.orange,children:"O(n log(n))"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"10",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.green,children:"Θ(1)"}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"11",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"12",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"13",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"14",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"15",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.gray,children:"N/A"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"16",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"17",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.oliveGreen,children:"Θ(log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]})]})})})]})})}function Ig(){const e=G.useRef(null),[n,t]=G.useState(""),r=()=>{if(n){const l=e.current,s=l==null?void 0:l.querySelector(`tr[data-row-number="${n}"]`);s==null||s.removeAttribute("focused")}},i=l=>{const s=l.currentTarget,a=s.getAttribute("data-row-number")??"";r(),a===n?t(""):(s.setAttribute("focused",""),t(a))};return hl(e,r),o.jsx("section",{id:"bigo-sorting-algorithms-table",children:o.jsxs("div",{className:y.container,children:[o.jsx("h3",{children:"Array Sorting Algorithms"}),o.jsx("div",{className:y.tableWrapper,children:o.jsx("table",{ref:e,children:o.jsxs("tbody",{children:[o.jsxs("tr",{onClick:i,"data-row-number":"1",children:[o.jsx("th",{children:"Algorithm"}),o.jsx("th",{colSpan:3,children:"Time Complexity"}),o.jsx("th",{children:"Space Complexity"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"2",children:[o.jsx("th",{}),o.jsx("th",{children:"Best"}),o.jsx("th",{children:"Average"}),o.jsx("th",{children:"Worst"}),o.jsx("th",{children:"Worst"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"3",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),o.jsx("td",{className:y.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.oliveGreen,children:"O(log(n))"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"4",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),o.jsx("td",{className:y.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.orange,children:"O(n log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"5",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),o.jsx("td",{className:y.yellow,children:"Ω(n)"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.orange,children:"O(n log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"6",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),o.jsx("td",{className:y.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.orange,children:"O(n log(n))"}),o.jsx("td",{className:y.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"7",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),o.jsx("td",{className:y.yellow,children:"Ω(n)"}),o.jsx("td",{className:y.red,children:"Θ(n^2)"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"8",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),o.jsx("td",{className:y.yellow,children:"Ω(n)"}),o.jsx("td",{className:y.red,children:"Θ(n^2)"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"9",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),o.jsx("td",{className:y.red,children:"Ω(n^2)"}),o.jsx("td",{className:y.red,children:"Θ(n^2)"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"10",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),o.jsx("td",{className:y.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"11",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),o.jsx("td",{className:y.orange,children:"Ω(n log(n))"}),o.jsx("td",{className:y.red,children:"Θ(n(log(n))^2)"}),o.jsx("td",{className:y.red,children:"O(n(log(n))^2)"}),o.jsx("td",{className:y.green,children:"O(1)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"12",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),o.jsx("td",{className:y.green,children:"Ω(n+k)"}),o.jsx("td",{className:y.green,children:"Θ(n+k)"}),o.jsx("td",{className:y.red,children:"O(n^2)"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"13",children:[o.jsx("td",{children:o.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),o.jsx("td",{className:y.green,children:"Ω(nk)"}),o.jsx("td",{className:y.green,children:"Θ(nk)"}),o.jsx("td",{className:y.green,children:"O(nk)"}),o.jsx("td",{className:y.yellow,children:"O(n+k)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"14",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),o.jsx("td",{className:y.green,children:"Ω(n+k)"}),o.jsx("td",{className:y.green,children:"Θ(n+k)"}),o.jsx("td",{className:y.green,children:"O(n+k)"}),o.jsx("td",{className:y.yellow,children:"O(k)"})]}),o.jsxs("tr",{onClick:i,"data-row-number":"15",children:[o.jsx("td",{children:o.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),o.jsx("td",{className:y.yellow,children:"Ω(n)"}),o.jsx("td",{className:y.orange,children:"Θ(n log(n))"}),o.jsx("td",{className:y.orange,children:"O(n log(n))"}),o.jsx("td",{className:y.yellow,children:"O(n)"})]})]})})})]})})}function zg(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Big O"}),o.jsx(Lg,{}),o.jsx(Dg,{}),o.jsx(Ig,{})]})}const Bg="_container_12crg_1",Fg="_buttonContainer_12crg_12",Ug="_tabButtonContainer_12crg_18",Hg="_tabButton_12crg_18",fi={container:Bg,buttonContainer:Fg,tabButtonContainer:Ug,tabButton:Hg},$g="_code_jkdwx_1",Wg="_line_jkdwx_11",tu={code:$g,line:Wg};function Cd(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(n=>{const t=e[n],r=typeof t;(r==="object"||r==="function")&&!Object.isFrozen(t)&&Cd(t)}),e}class ru{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Rd(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Gn(e,...n){const t=Object.create(null);for(const r in e)t[r]=e[r];return n.forEach(function(r){for(const i in r)t[i]=r[i]}),t}const Gg="</span>",iu=e=>!!e.scope,Yg=(e,{prefix:n})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((r,i)=>`${r}${"_".repeat(i+1)}`)].join(" ")}return`${n}${e}`};class Qg{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Rd(n)}openNode(n){if(!iu(n))return;const t=Yg(n.scope,{prefix:this.classPrefix});this.span(t)}closeNode(n){iu(n)&&(this.buffer+=Gg)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const lu=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Is{constructor(){this.rootNode=lu(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=lu({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(r=>this._walk(n,r)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Is._collapse(t)}))}}class Vg extends Is{constructor(n){super(),this.options=n}addText(n){n!==""&&this.add(n)}startScope(n){this.openNode(n)}endScope(){this.closeNode()}__addSublanguage(n,t){const r=n.root;t&&(r.scope=`language:${t}`),this.add(r)}toHTML(){return new Qg(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function Br(e){return e?typeof e=="string"?e:e.source:null}function bd(e){return St("(?=",e,")")}function Kg(e){return St("(?:",e,")*")}function Xg(e){return St("(?:",e,")?")}function St(...e){return e.map(t=>Br(t)).join("")}function Zg(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function zs(...e){return"("+(Zg(e).capture?"":"?:")+e.map(r=>Br(r)).join("|")+")"}function Ad(e){return new RegExp(e.toString()+"|").exec("").length-1}function Jg(e,n){const t=e&&e.exec(n);return t&&t.index===0}const qg=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Bs(e,{joinWith:n}){let t=0;return e.map(r=>{t+=1;const i=t;let l=Br(r),s="";for(;l.length>0;){const a=qg.exec(l);if(!a){s+=l;break}s+=l.substring(0,a.index),l=l.substring(a.index+a[0].length),a[0][0]==="\\"&&a[1]?s+="\\"+String(Number(a[1])+i):(s+=a[0],a[0]==="("&&t++)}return s}).map(r=>`(${r})`).join(n)}const em=/\b\B/,Pd="[a-zA-Z]\\w*",Fs="[a-zA-Z_]\\w*",Md="\\b\\d+(\\.\\d+)?",Ld="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Dd="\\b(0b[01]+)",nm="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",tm=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=St(n,/.*\b/,e.binary,/\b.*/)),Gn({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,r)=>{t.index!==0&&r.ignoreMatch()}},e)},Fr={begin:"\\\\[\\s\\S]",relevance:0},rm={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Fr]},im={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Fr]},lm={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},gl=function(e,n,t={}){const r=Gn({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=zs("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:St(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},om=gl("//","$"),sm=gl("/\\*","\\*/"),am=gl("#","$"),um={scope:"number",begin:Md,relevance:0},cm={scope:"number",begin:Ld,relevance:0},dm={scope:"number",begin:Dd,relevance:0},fm={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Fr,{begin:/\[/,end:/\]/,relevance:0,contains:[Fr]}]},pm={scope:"title",begin:Pd,relevance:0},hm={scope:"title",begin:Fs,relevance:0},gm={begin:"\\.\\s*"+Fs,relevance:0},mm=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var pi=Object.freeze({__proto__:null,APOS_STRING_MODE:rm,BACKSLASH_ESCAPE:Fr,BINARY_NUMBER_MODE:dm,BINARY_NUMBER_RE:Dd,COMMENT:gl,C_BLOCK_COMMENT_MODE:sm,C_LINE_COMMENT_MODE:om,C_NUMBER_MODE:cm,C_NUMBER_RE:Ld,END_SAME_AS_BEGIN:mm,HASH_COMMENT_MODE:am,IDENT_RE:Pd,MATCH_NOTHING_RE:em,METHOD_GUARD:gm,NUMBER_MODE:um,NUMBER_RE:Md,PHRASAL_WORDS_MODE:lm,QUOTE_STRING_MODE:im,REGEXP_MODE:fm,RE_STARTERS_RE:nm,SHEBANG:tm,TITLE_MODE:pm,UNDERSCORE_IDENT_RE:Fs,UNDERSCORE_TITLE_MODE:hm});function vm(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function ym(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function xm(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=vm,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function _m(e,n){Array.isArray(e.illegal)&&(e.illegal=zs(...e.illegal))}function wm(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Sm(e,n){e.relevance===void 0&&(e.relevance=1)}const jm=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(r=>{delete e[r]}),e.keywords=t.keywords,e.begin=St(t.beforeMatch,bd(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},km=["of","and","for","in","not","or","if","then","parent","list","value"],Em="keyword";function Id(e,n,t=Em){const r=Object.create(null);return typeof e=="string"?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach(function(l){Object.assign(r,Id(e[l],n,l))}),r;function i(l,s){n&&(s=s.map(a=>a.toLowerCase())),s.forEach(function(a){const u=a.split("|");r[u[0]]=[l,Nm(u[0],u[1])]})}}function Nm(e,n){return n?Number(n):Tm(e)?0:1}function Tm(e){return km.includes(e.toLowerCase())}const ou={},ht=e=>{console.error(e)},su=(e,...n)=>{console.log(`WARN: ${e}`,...n)},kt=(e,n)=>{ou[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ou[`${e}/${n}`]=!0)},Zi=new Error;function zd(e,n,{key:t}){let r=0;const i=e[t],l={},s={};for(let a=1;a<=n.length;a++)s[a+r]=i[a],l[a+r]=!0,r+=Ad(n[a-1]);e[t]=s,e[t]._emit=l,e[t]._multi=!0}function Om(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw ht("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Zi;if(typeof e.beginScope!="object"||e.beginScope===null)throw ht("beginScope must be object"),Zi;zd(e,e.begin,{key:"beginScope"}),e.begin=Bs(e.begin,{joinWith:""})}}function Cm(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw ht("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Zi;if(typeof e.endScope!="object"||e.endScope===null)throw ht("endScope must be object"),Zi;zd(e,e.end,{key:"endScope"}),e.end=Bs(e.end,{joinWith:""})}}function Rm(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function bm(e){Rm(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Om(e),Cm(e)}function Am(e){function n(s,a){return new RegExp(Br(s),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(a?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(a,u){u.position=this.position++,this.matchIndexes[this.matchAt]=u,this.regexes.push([u,a]),this.matchAt+=Ad(a)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const a=this.regexes.map(u=>u[1]);this.matcherRe=n(Bs(a,{joinWith:"|"}),!0),this.lastIndex=0}exec(a){this.matcherRe.lastIndex=this.lastIndex;const u=this.matcherRe.exec(a);if(!u)return null;const c=u.findIndex((v,h)=>h>0&&v!==void 0),g=this.matchIndexes[c];return u.splice(0,c),Object.assign(u,g)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(a){if(this.multiRegexes[a])return this.multiRegexes[a];const u=new t;return this.rules.slice(a).forEach(([c,g])=>u.addRule(c,g)),u.compile(),this.multiRegexes[a]=u,u}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(a,u){this.rules.push([a,u]),u.type==="begin"&&this.count++}exec(a){const u=this.getMatcher(this.regexIndex);u.lastIndex=this.lastIndex;let c=u.exec(a);if(this.resumingScanAtSamePosition()&&!(c&&c.index===this.lastIndex)){const g=this.getMatcher(0);g.lastIndex=this.lastIndex+1,c=g.exec(a)}return c&&(this.regexIndex+=c.position+1,this.regexIndex===this.count&&this.considerAll()),c}}function i(s){const a=new r;return s.contains.forEach(u=>a.addRule(u.begin,{rule:u,type:"begin"})),s.terminatorEnd&&a.addRule(s.terminatorEnd,{type:"end"}),s.illegal&&a.addRule(s.illegal,{type:"illegal"}),a}function l(s,a){const u=s;if(s.isCompiled)return u;[ym,wm,bm,jm].forEach(g=>g(s,a)),e.compilerExtensions.forEach(g=>g(s,a)),s.__beforeBegin=null,[xm,_m,Sm].forEach(g=>g(s,a)),s.isCompiled=!0;let c=null;return typeof s.keywords=="object"&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),c=s.keywords.$pattern,delete s.keywords.$pattern),c=c||/\w+/,s.keywords&&(s.keywords=Id(s.keywords,e.case_insensitive)),u.keywordPatternRe=n(c,!0),a&&(s.begin||(s.begin=/\B|\b/),u.beginRe=n(u.begin),!s.end&&!s.endsWithParent&&(s.end=/\B|\b/),s.end&&(u.endRe=n(u.end)),u.terminatorEnd=Br(u.end)||"",s.endsWithParent&&a.terminatorEnd&&(u.terminatorEnd+=(s.end?"|":"")+a.terminatorEnd)),s.illegal&&(u.illegalRe=n(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map(function(g){return Pm(g==="self"?s:g)})),s.contains.forEach(function(g){l(g,u)}),s.starts&&l(s.starts,a),u.matcher=i(u),u}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Gn(e.classNameAliases||{}),l(e)}function Bd(e){return e?e.endsWithParent||Bd(e.starts):!1}function Pm(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return Gn(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Bd(e)?Gn(e,{starts:e.starts?Gn(e.starts):null}):Object.isFrozen(e)?Gn(e):e}var Mm="11.9.0";class Lm extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const Yl=Rd,au=Gn,uu=Symbol("nomatch"),Dm=7,Fd=function(e){const n=Object.create(null),t=Object.create(null),r=[];let i=!0;const l="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let a={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Vg};function u(O){return a.noHighlightRe.test(O)}function c(O){let S=O.className+" ";S+=O.parentNode?O.parentNode.className:"";const b=a.languageDetectRe.exec(S);if(b){const D=T(b[1]);return D||(su(l.replace("{}",b[1])),su("Falling back to no-highlight mode for this block.",O)),D?b[1]:"no-highlight"}return S.split(/\s+/).find(D=>u(D)||T(D))}function g(O,S,b){let D="",U="";typeof S=="object"?(D=O,b=S.ignoreIllegals,U=S.language):(kt("10.7.0","highlight(lang, code, ...args) has been deprecated."),kt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),U=O,D=S),b===void 0&&(b=!0);const X={code:D,language:U};ye("before:highlight",X);const ke=X.result?X.result:v(X.language,X.code,b);return ke.code=X.code,ye("after:highlight",ke),ke}function v(O,S,b,D){const U=Object.create(null);function X(z,H){return z.keywords[H]}function ke(){if(!I.keywords){M.addText(Z);return}let z=0;I.keywordPatternRe.lastIndex=0;let H=I.keywordPatternRe.exec(Z),ee="";for(;H;){ee+=Z.substring(z,H.index);const ue=V.case_insensitive?H[0].toLowerCase():H[0],Ie=X(I,ue);if(Ie){const[Tn,Wd]=Ie;if(M.addText(ee),ee="",U[ue]=(U[ue]||0)+1,U[ue]<=Dm&&(De+=Wd),Tn.startsWith("_"))ee+=H[0];else{const Gd=V.classNameAliases[Tn]||Tn;se(H[0],Gd)}}else ee+=H[0];z=I.keywordPatternRe.lastIndex,H=I.keywordPatternRe.exec(Z)}ee+=Z.substring(z),M.addText(ee)}function Ee(){if(Z==="")return;let z=null;if(typeof I.subLanguage=="string"){if(!n[I.subLanguage]){M.addText(Z);return}z=v(I.subLanguage,Z,!0,le[I.subLanguage]),le[I.subLanguage]=z._top}else z=m(Z,I.subLanguage.length?I.subLanguage:null);I.relevance>0&&(De+=z.relevance),M.__addSublanguage(z._emitter,z.language)}function ae(){I.subLanguage!=null?Ee():ke(),Z=""}function se(z,H){z!==""&&(M.startScope(H),M.addText(z),M.endScope())}function de(z,H){let ee=1;const ue=H.length-1;for(;ee<=ue;){if(!z._emit[ee]){ee++;continue}const Ie=V.classNameAliases[z[ee]]||z[ee],Tn=H[ee];Ie?se(Tn,Ie):(Z=Tn,ke(),Z=""),ee++}}function Ne(z,H){return z.scope&&typeof z.scope=="string"&&M.openNode(V.classNameAliases[z.scope]||z.scope),z.beginScope&&(z.beginScope._wrap?(se(Z,V.classNameAliases[z.beginScope._wrap]||z.beginScope._wrap),Z=""):z.beginScope._multi&&(de(z.beginScope,H),Z="")),I=Object.create(z,{parent:{value:I}}),I}function fn(z,H,ee){let ue=Jg(z.endRe,ee);if(ue){if(z["on:end"]){const Ie=new ru(z);z["on:end"](H,Ie),Ie.isMatchIgnored&&(ue=!1)}if(ue){for(;z.endsParent&&z.parent;)z=z.parent;return z}}if(z.endsWithParent)return fn(z.parent,H,ee)}function A(z){return I.matcher.regexIndex===0?(Z+=z[0],1):(vl=!0,0)}function B(z){const H=z[0],ee=z.rule,ue=new ru(ee),Ie=[ee.__beforeBegin,ee["on:begin"]];for(const Tn of Ie)if(Tn&&(Tn(z,ue),ue.isMatchIgnored))return A(H);return ee.skip?Z+=H:(ee.excludeBegin&&(Z+=H),ae(),!ee.returnBegin&&!ee.excludeBegin&&(Z=H)),Ne(ee,z),ee.returnBegin?0:H.length}function q(z){const H=z[0],ee=S.substring(z.index),ue=fn(I,z,ee);if(!ue)return uu;const Ie=I;I.endScope&&I.endScope._wrap?(ae(),se(H,I.endScope._wrap)):I.endScope&&I.endScope._multi?(ae(),de(I.endScope,z)):Ie.skip?Z+=H:(Ie.returnEnd||Ie.excludeEnd||(Z+=H),ae(),Ie.excludeEnd&&(Z=H));do I.scope&&M.closeNode(),!I.skip&&!I.subLanguage&&(De+=I.relevance),I=I.parent;while(I!==ue.parent);return ue.starts&&Ne(ue.starts,z),Ie.returnEnd?0:H.length}function J(){const z=[];for(let H=I;H!==V;H=H.parent)H.scope&&z.unshift(H.scope);z.forEach(H=>M.openNode(H))}let K={};function ie(z,H){const ee=H&&H[0];if(Z+=z,ee==null)return ae(),0;if(K.type==="begin"&&H.type==="end"&&K.index===H.index&&ee===""){if(Z+=S.slice(H.index,H.index+1),!i){const ue=new Error(`0 width match regex (${O})`);throw ue.languageName=O,ue.badRule=K.rule,ue}return 1}if(K=H,H.type==="begin")return B(H);if(H.type==="illegal"&&!b){const ue=new Error('Illegal lexeme "'+ee+'" for mode "'+(I.scope||"<unnamed>")+'"');throw ue.mode=I,ue}else if(H.type==="end"){const ue=q(H);if(ue!==uu)return ue}if(H.type==="illegal"&&ee==="")return 1;if(ml>1e5&&ml>H.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Z+=ee,ee.length}const V=T(O);if(!V)throw ht(l.replace("{}",O)),new Error('Unknown language: "'+O+'"');const ne=Am(V);let te="",I=D||ne;const le={},M=new a.__emitter(a);J();let Z="",De=0,wn=0,ml=0,vl=!1;try{if(V.__emitTokens)V.__emitTokens(S,M);else{for(I.matcher.considerAll();;){ml++,vl?vl=!1:I.matcher.considerAll(),I.matcher.lastIndex=wn;const z=I.matcher.exec(S);if(!z)break;const H=S.substring(wn,z.index),ee=ie(H,z);wn=z.index+ee}ie(S.substring(wn))}return M.finalize(),te=M.toHTML(),{language:O,value:te,relevance:De,illegal:!1,_emitter:M,_top:I}}catch(z){if(z.message&&z.message.includes("Illegal"))return{language:O,value:Yl(S),illegal:!0,relevance:0,_illegalBy:{message:z.message,index:wn,context:S.slice(wn-100,wn+100),mode:z.mode,resultSoFar:te},_emitter:M};if(i)return{language:O,value:Yl(S),illegal:!1,relevance:0,errorRaised:z,_emitter:M,_top:I};throw z}}function h(O){const S={value:Yl(O),illegal:!1,relevance:0,_top:s,_emitter:new a.__emitter(a)};return S._emitter.addText(O),S}function m(O,S){S=S||a.languages||Object.keys(n);const b=h(O),D=S.filter(T).filter(W).map(ae=>v(ae,O,!1));D.unshift(b);const U=D.sort((ae,se)=>{if(ae.relevance!==se.relevance)return se.relevance-ae.relevance;if(ae.language&&se.language){if(T(ae.language).supersetOf===se.language)return 1;if(T(se.language).supersetOf===ae.language)return-1}return 0}),[X,ke]=U,Ee=X;return Ee.secondBest=ke,Ee}function x(O,S,b){const D=S&&t[S]||b;O.classList.add("hljs"),O.classList.add(`language-${D}`)}function w(O){let S=null;const b=c(O);if(u(b))return;if(ye("before:highlightElement",{el:O,language:b}),O.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",O);return}if(O.children.length>0&&(a.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(O)),a.throwUnescapedHTML))throw new Lm("One of your code blocks includes unescaped HTML.",O.innerHTML);S=O;const D=S.textContent,U=b?g(D,{language:b,ignoreIllegals:!0}):m(D);O.innerHTML=U.value,O.dataset.highlighted="yes",x(O,b,U.language),O.result={language:U.language,re:U.relevance,relevance:U.relevance},U.secondBest&&(O.secondBest={language:U.secondBest.language,relevance:U.secondBest.relevance}),ye("after:highlightElement",{el:O,result:U,text:D})}function R(O){a=au(a,O)}const f=()=>{_(),kt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function d(){_(),kt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let p=!1;function _(){if(document.readyState==="loading"){p=!0;return}document.querySelectorAll(a.cssSelector).forEach(w)}function k(){p&&_()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",k,!1);function E(O,S){let b=null;try{b=S(e)}catch(D){if(ht("Language definition for '{}' could not be registered.".replace("{}",O)),i)ht(D);else throw D;b=s}b.name||(b.name=O),n[O]=b,b.rawDefinition=S.bind(null,e),b.aliases&&L(b.aliases,{languageName:O})}function N(O){delete n[O];for(const S of Object.keys(t))t[S]===O&&delete t[S]}function P(){return Object.keys(n)}function T(O){return O=(O||"").toLowerCase(),n[O]||n[t[O]]}function L(O,{languageName:S}){typeof O=="string"&&(O=[O]),O.forEach(b=>{t[b.toLowerCase()]=S})}function W(O){const S=T(O);return S&&!S.disableAutodetect}function Q(O){O["before:highlightBlock"]&&!O["before:highlightElement"]&&(O["before:highlightElement"]=S=>{O["before:highlightBlock"](Object.assign({block:S.el},S))}),O["after:highlightBlock"]&&!O["after:highlightElement"]&&(O["after:highlightElement"]=S=>{O["after:highlightBlock"](Object.assign({block:S.el},S))})}function $(O){Q(O),r.push(O)}function fe(O){const S=r.indexOf(O);S!==-1&&r.splice(S,1)}function ye(O,S){const b=O;r.forEach(function(D){D[b]&&D[b](S)})}function Se(O){return kt("10.7.0","highlightBlock will be removed entirely in v12.0"),kt("10.7.0","Please use highlightElement now."),w(O)}Object.assign(e,{highlight:g,highlightAuto:m,highlightAll:_,highlightElement:w,highlightBlock:Se,configure:R,initHighlighting:f,initHighlightingOnLoad:d,registerLanguage:E,unregisterLanguage:N,listLanguages:P,getLanguage:T,registerAliases:L,autoDetection:W,inherit:au,addPlugin:$,removePlugin:fe}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString=Mm,e.regex={concat:St,lookahead:bd,either:zs,optional:Xg,anyNumberOfTimes:Kg};for(const O in pi)typeof pi[O]=="object"&&Cd(pi[O]);return Object.assign(e,pi),e},Xt=Fd({});Xt.newInstance=()=>Fd({});var Im=Xt;Xt.HighlightJS=Xt;Xt.default=Xt;const Us=Uo(Im),cu="[A-Za-z$_][0-9A-Za-z$_]*",zm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Bm=["true","false","null","undefined","NaN","Infinity"],Ud=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Hd=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],$d=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Fm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Um=[].concat($d,Ud,Hd);function Hm(e){const n=e.regex,t=(S,{after:b})=>{const D="</"+S[0].slice(1);return S.input.indexOf(D,b)!==-1},r=cu,i={begin:"<>",end:"</>"},l=/<[A-Za-z0-9\\._:-]+\s*\/>/,s={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(S,b)=>{const D=S[0].length+S.index,U=S.input[D];if(U==="<"||U===","){b.ignoreMatch();return}U===">"&&(t(S,{after:D})||b.ignoreMatch());let X;const ke=S.input.substring(D);if(X=ke.match(/^\s*=/)){b.ignoreMatch();return}if((X=ke.match(/^\s+extends\s+/))&&X.index===0){b.ignoreMatch();return}}},a={$pattern:cu,keyword:zm,literal:Bm,built_in:Um,"variable.language":Fm},u="[0-9](_?[0-9])*",c=`\\.(${u})`,g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",v={className:"number",variants:[{begin:`(\\b(${g})((${c})|\\.)?|(${c}))[eE][+-]?(${u})\\b`},{begin:`\\b(${g})\\b((${c})\\b|\\.)?|(${c})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},h={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"xml"}},x={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"css"}},w={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,h],subLanguage:"graphql"}},R={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,h]},d={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},p=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,x,w,R,{match:/\$\d+/},v];h.contains=p.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(p)});const _=[].concat(d,h.contains),k=_.concat([{begin:/\(/,end:/\)/,keywords:a,contains:["self"].concat(_)}]),E={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:k},N={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,n.concat(r,"(",n.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},P={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Ud,...Hd]}},T={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},L={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[E],illegal:/%/},W={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Q(S){return n.concat("(?!",S.join("|"),")")}const $={match:n.concat(/\b/,Q([...$d,"super","import"]),r,n.lookahead(/\(/)),className:"title.function",relevance:0},fe={begin:n.concat(/\./,n.lookahead(n.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ye={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},E]},Se="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",O={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Se)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[E]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:k,CLASS_REFERENCE:P},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),T,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,x,w,R,d,{match:/\$\d+/},v,P,{className:"attr",begin:r+n.lookahead(":"),relevance:0},O,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[d,e.REGEXP_MODE,{className:"function",begin:Se,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:k}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:i.begin,end:i.end},{match:l},{begin:s.begin,"on:begin":s.isTrulyOpeningTag,end:s.end}],subLanguage:"xml",contains:[{begin:s.begin,end:s.end,skip:!0,contains:["self"]}]}]},L,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[E,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},fe,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[E]},$,W,N,ye,{match:/\$[(.]/}]}}function $m(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},u={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},g={begin:/\{\{/,relevance:0},v={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u,g,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u,g,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,g,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,g,c]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},h="[0-9](_?[0-9])*",m=`(\\b(${h}))?\\.(${h})|\\b(${h})\\.`,x=`\\b|${r.join("|")}`,w={className:"number",relevance:0,variants:[{begin:`(\\b(${h})|(${m}))[eE][+-]?(${h})[jJ]?(?=${x})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${x})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${x})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${x})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${x})`},{begin:`\\b(${h})[jJ](?=${x})`}]},R={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},f={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",u,w,v,e.HASH_COMMENT_MODE]}]};return c.contains=[v,w,u],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[u,w,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},v,R,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[f]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[w,f,v]}]}}Us.registerLanguage("python",$m);Us.registerLanguage("javascript",Hm);function Wm({code:e,language:n}){const t=G.useRef(null),[r,i]=G.useState(""),[l,s]=G.useState(""),a=en("hljs",n,tu.code),u=()=>{if(t.current){const w=e.split(`
`).map((R,f)=>{const d=Us.highlight(R,{language:n}).value;return`<span class=${tu.line} data-line-number=${f+1}>${d}</span>`}).join(`
`);s(w)}},c=()=>{const m=t.current,x=m==null?void 0:m.querySelectorAll("span[data-line-number]");x==null||x.forEach(w=>w.addEventListener("click",h))},g=()=>{const m=t.current,x=m==null?void 0:m.querySelectorAll("span[data-line-number]");x==null||x.forEach(w=>w.removeEventListener("click",h))},v=()=>{const m=t.current,x=m==null?void 0:m.querySelector(`span[data-line-number="${r}"]`);x==null||x.removeAttribute("focused")},h=m=>{const x=m.currentTarget,w=x.getAttribute("data-line-number")??"";v(),w===r?i(""):(x.setAttribute("focused",""),i(w))};return hl(t,v),G.useEffect(()=>(u(),c(),()=>g()),[e,l,r]),o.jsx("pre",{ref:t,children:o.jsx("code",{className:a,dangerouslySetInnerHTML:{__html:l}})})}const Gm="_copyButton_1hjzm_1",Ym="_copySvg_1hjzm_25",Qm="_checkSvg_1hjzm_32",Vm="_checkSvgPath_1hjzm_37",Km="_draw_1hjzm_1",Xm="_enter_1hjzm_48",Zm="_exit_1hjzm_52",ot={copyButton:Gm,copySvg:Ym,checkSvg:Qm,checkSvgPath:Vm,draw:Km,enter:Xm,"fade-in":"_fade-in_1hjzm_1",exit:Zm,"fade-out":"_fade-out_1hjzm_1"};function Jm({onClick:e}){const[n,t]=G.useState("show"),[r,i]=G.useState("hide"),l=en(ot.copySvg,n==="enter"&&ot.enter,n==="exit"&&ot.exit),s=en(ot.checkSvg,r==="exit"&&ot.exit),a=en(ot.checkSvgPath),u=()=>{n==="show"&&r==="hide"&&(t("exit"),e())},c=()=>{n==="enter"&&t("show"),n==="exit"&&(t("hide"),i("show"))},g=()=>{r==="show"&&setTimeout(()=>{i("exit")},500),r==="exit"&&(i("hide"),t("enter"))},v=()=>n!=="hide"&&o.jsx("svg",{className:l,viewBox:"0 0 512 512",onAnimationEnd:c,children:o.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),h=()=>r!=="hide"&&o.jsx("svg",{className:s,viewBox:"0 0 16 16",onAnimationEnd:g,children:o.jsx("path",{className:a,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return o.jsxs("button",{"aria-label":"copy button",className:ot.copyButton,onClick:u,children:[v(),h()]})}function qm(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),o.jsx("stop",{offset:1,stopColor:"#306998"})]}),o.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#FFD43B"}),o.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),o.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),o.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),o.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),o.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),o.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function ev(){return o.jsxs("svg",{viewBox:"0 0 128 128",children:[o.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),o.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function j({title:e,children:n}){const[t,r]=G.useState(0),i=G.Children.toArray(n),l=i[t].props.code,s=i[t].props.language,a=g=>r(g),u=()=>navigator.clipboard.writeText(l),c=()=>i.map((g,v)=>{const h=g.props.language==="python"?qm:ev,m=`view ${g.props.language} code`;return o.jsx("button",{role:"tab","aria-label":m,"aria-selected":v===t,className:fi.tabButton,onClick:()=>a(v),children:o.jsx(h,{})},v)});return o.jsxs("div",{role:"tablist",className:fi.container,children:[o.jsx("h3",{children:e}),o.jsxs("div",{className:fi.buttonContainer,children:[o.jsx("div",{role:"tablist",className:fi.tabButtonContainer,children:c()}),o.jsx(Jm,{onClick:u})]}),o.jsx("div",{role:"tabpanel",className:"tabs-content",children:o.jsx(Wm,{code:l,language:s})})]})}j.Tab=e=>o.jsx(o.Fragment,{children:e});const nv=`def fn(arr):\r
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
`,tv=`def fn(arr1, arr2):\r
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
`,rv=`def fn(arr):\r
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
`,lv=`def fn(strs: list[str]):\r
    ans = []\r
\r
    for char in strs:\r
        ans.append(char)\r
\r
    return ''.join(ans)\r
`,ov=`const fn = (arr) => {\r
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
`,sv=`let fn = (arr1, arr2) => {\r
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
`;function dv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Array"}),o.jsx("section",{id:"array-two-pointers-one-input",children:o.jsxs(j,{title:"two pointers: one input, opposite ends",children:[o.jsx(j.Tab,{code:nv,language:"python"}),o.jsx(j.Tab,{code:ov,language:"javascript"})]})}),o.jsx("section",{id:"array-two-pointers-two-inputs",children:o.jsxs(j,{title:"two pointers: two inputs, exhaust both",children:[o.jsx(j.Tab,{code:tv,language:"python"}),o.jsx(j.Tab,{code:sv,language:"javascript"})]})}),o.jsx("section",{id:"array-sliding-window",children:o.jsxs(j,{title:"sliding window",children:[o.jsx(j.Tab,{code:rv,language:"python"}),o.jsx(j.Tab,{code:av,language:"javascript"})]})}),o.jsx("section",{id:"array-prefix-sum",children:o.jsxs(j,{title:"prefix sum",children:[o.jsx(j.Tab,{code:iv,language:"python"}),o.jsx(j.Tab,{code:uv,language:"javascript"})]})}),o.jsx("section",{id:"array-string-building",children:o.jsxs(j,{title:"efficient string building",children:[o.jsx(j.Tab,{code:lv,language:"python"}),o.jsx(j.Tab,{code:cv,language:"javascript"})]})})]})}const fv=`from collections import defaultdict\r
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
`,pv=`const fn = (arr, k) => {\r
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
`;function hv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Hash Map"}),o.jsx("section",{id:"hashmap-number-of-subarrays",children:o.jsxs(j,{title:"find number of subarrays that fit an exact criteria",children:[o.jsx(j.Tab,{code:fv,language:"python"}),o.jsx(j.Tab,{code:pv,language:"javascript"})]})})]})}const gv=`def fn(head):\r
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
`;function xv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Linked List"}),o.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:o.jsxs(j,{title:"fast and slow pointer",children:[o.jsx(j.Tab,{code:gv,language:"python"}),o.jsx(j.Tab,{code:vv,language:"javascript"})]})}),o.jsx("section",{id:"linkedlist-reverse",children:o.jsxs(j,{title:"reverse linked list",children:[o.jsx(j.Tab,{code:mv,language:"python"}),o.jsx(j.Tab,{code:yv,language:"javascript"})]})})]})}const _v=`def fn(arr):\r
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
`;function Sv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Stack"}),o.jsx("section",{id:"stack-monotonic-increasing",children:o.jsxs(j,{title:"monotonic increasing stack",children:[o.jsx(j.Tab,{code:_v,language:"python"}),o.jsx(j.Tab,{code:wv,language:"javascript"})]})})]})}const jv=`def dfs(root):\r
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
    queue = deque([root])\r
    ans = 0\r
\r
    while queue:\r
        current_length = len(queue)\r
        # TODO: logic for current level\r
\r
        for _ in range(current_length):\r
            node = queue.popleft()\r
            # TODO: logic\r
            if node.left:\r
                queue.append(node.left)\r
            if node.right:\r
                queue.append(node.right)\r
\r
    return ans\r
`,Nv=`const dfs = (root) => {\r
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
`,Tv=`const dfs = (root) => {\r
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
    let queue = [root]\r
    let ans = 0\r
\r
    while (queue.length) {\r
        let currentLength = queue.length\r
        // TODO: logic for current level\r
\r
        let nextQueue = []\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = queue[i]\r
            // TODO: logic\r
            if (node.left) {\r
                nextQueue.push(node.left)\r
            }\r
            if (node.right) {\r
                nextQueue.push(node.right)\r
            }\r
        }\r
\r
        queue = nextQueue\r
    }\r
\r
    return ans\r
}\r
`;function Cv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Binary Tree"}),o.jsx("section",{id:"tree-dfs-recursive",children:o.jsxs(j,{title:"DFS (recursive)",children:[o.jsx(j.Tab,{code:jv,language:"python"}),o.jsx(j.Tab,{code:Nv,language:"javascript"})]})}),o.jsx("section",{id:"tree-dfs-iterative",children:o.jsxs(j,{title:"DFS (iterative)",children:[o.jsx(j.Tab,{code:kv,language:"python"}),o.jsx(j.Tab,{code:Tv,language:"javascript"})]})}),o.jsx("section",{id:"tree-bfs",children:o.jsxs(j,{title:"BFS",children:[o.jsx(j.Tab,{code:Ev,language:"python"}),o.jsx(j.Tab,{code:Ov,language:"javascript"})]})})]})}const Rv=`def fn(graph):\r
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
`,bv=`def fn(graph):\r
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
`,Av=`from collections import deque\r
\r
\r
def fn(graph):\r
    queue = deque([START_NODE])\r
    seen = {START_NODE}\r
    ans = 0\r
\r
    while queue:\r
        node = queue.popleft()\r
        # TODO: logic\r
        for neighbor in graph[node]:\r
            if neighbor not in seen:\r
                seen.add(neighbor)\r
                queue.append(neighbor)\r
\r
    return ans\r
`,Pv=`from heapq import *\r
\r
\r
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
    for nei, weight in graph[node]:\r
        dist = curr_dist + weight\r
\r
        if dist < distances[nei]:\r
            distances[nei] = dist\r
            heappush(heap, (dist, nei))\r
`,Mv=`const fn = (graph) => {\r
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
`,Lv=`const fn = (graph) => {\r
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
`,Dv=`const fn = (graph) => {\r
    let queue = [START_NODE]\r
    let seen = new Set([START_NODE])\r
    let ans = 0\r
\r
    while (queue.length) {\r
        let currentLength = queue.length\r
        let nextQueue = []\r
\r
        for (let i = 0; i < currentLength; i++) {\r
            let node = queue[i]\r
            // TODO: logic\r
            for (const neighbor of graph[node]) {\r
                if (!seen.has(neighbor)) {\r
                    seen.add(neighbor)\r
                    nextQueue.push(neighbor)\r
                }\r
            }\r
        }\r
\r
        queue = nextQueue\r
    }\r
\r
    return ans\r
}\r
`,Iv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`;function zv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Graph"}),o.jsx("section",{id:"graph-dfs-recursive",children:o.jsxs(j,{title:"DFS (recursive)",children:[o.jsx(j.Tab,{code:Rv,language:"python"}),o.jsx(j.Tab,{code:Mv,language:"javascript"})]})}),o.jsx("section",{id:"graph-dfs-iterative",children:o.jsxs(j,{title:"DFS (iterative)",children:[o.jsx(j.Tab,{code:bv,language:"python"}),o.jsx(j.Tab,{code:Lv,language:"javascript"})]})}),o.jsx("section",{id:"graph-bfs",children:o.jsxs(j,{title:"BFS",children:[o.jsx(j.Tab,{code:Av,language:"python"}),o.jsx(j.Tab,{code:Dv,language:"javascript"})]})}),o.jsx("section",{id:"graph-dijkstra",children:o.jsxs(j,{title:"Dijkstra",children:[o.jsx(j.Tab,{code:Pv,language:"python"}),o.jsx(j.Tab,{code:Iv,language:"javascript"})]})})]})}const Bv=`from heapq import *\r
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
`,Fv=`/*\r
    JavaScript lacks built-in support for heaps.\r
    Try using a language that doesn't hate you, like Python.\r
*/\r
`;function Uv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Heap"}),o.jsx("section",{id:"heap-find-top-k-elements",children:o.jsxs(j,{title:"find top k elements",children:[o.jsx(j.Tab,{code:Bv,language:"python"}),o.jsx(j.Tab,{code:Fv,language:"javascript"})]})})]})}const Hv=`def fn(arr, target):\r
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
`,$v=`def fn(arr, target):\r
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
`,Wv=`def fn(arr, target):\r
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
`,Gv=`def fn(arr):\r
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
`,Yv=`def fn(arr):\r
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
`,Qv=`const fn = (arr, target) => {\r
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
`,Vv=`const fn = (arr, target) => {\r
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
`,Kv=`const fn = (arr, target) => {\r
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
`,Xv=`const fn = (arr) => {\r
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
`,Zv=`const fn = (arr) => {\r
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
`;function Jv(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Binary Search"}),o.jsx("section",{id:"binarysearch-binary-search",children:o.jsxs(j,{title:"binary search",children:[o.jsx(j.Tab,{code:Hv,language:"python"}),o.jsx(j.Tab,{code:Qv,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:o.jsxs(j,{title:"duplicate elements, left-most insertion point",children:[o.jsx(j.Tab,{code:$v,language:"python"}),o.jsx(j.Tab,{code:Vv,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:o.jsxs(j,{title:"duplicate elements, right-most insertion point",children:[o.jsx(j.Tab,{code:Wv,language:"python"}),o.jsx(j.Tab,{code:Kv,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-greedy-minimum",children:o.jsxs(j,{title:"greedy (minimum)",children:[o.jsx(j.Tab,{code:Gv,language:"python"}),o.jsx(j.Tab,{code:Xv,language:"javascript"})]})}),o.jsx("section",{id:"binarysearch-greedy-maximum",children:o.jsxs(j,{title:"greedy (maximum)",children:[o.jsx(j.Tab,{code:Yv,language:"python"}),o.jsx(j.Tab,{code:Zv,language:"javascript"})]})})]})}const qv=`def backtrack(curr, OTHER_ARGUMENTS...):\r
    if (BASE_CASE):\r
        # TODO: modify answer\r
        return\r
\r
    ans = 0\r
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
`;function ny(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Backtracking"}),o.jsx("section",{id:"backtracking-backtracking",children:o.jsxs(j,{title:"backtracking",children:[o.jsx(j.Tab,{code:qv,language:"python"}),o.jsx(j.Tab,{code:ey,language:"javascript"})]})})]})}const ty=`def fn(arr):\r
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
`,ry=`def fn(arr):\r
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
`,iy=`const fn = (arr) => {\r
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
`,ly=`const fn = (arr) => {\r
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
`;function oy(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Dynamic Programming"}),o.jsx("section",{id:"dp-top-down",children:o.jsxs(j,{title:"DP top-down",children:[o.jsx(j.Tab,{code:ty,language:"python"}),o.jsx(j.Tab,{code:iy,language:"javascript"})]})}),o.jsx("section",{id:"dp-bottom-up",children:o.jsxs(j,{title:"DP bottom-up",children:[o.jsx(j.Tab,{code:ry,language:"python"}),o.jsx(j.Tab,{code:ly,language:"javascript"})]})})]})}const sy=`from typing import Any\r
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
`,ay=`from typing import Any\r
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
`,uy=`from typing import Any\r
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
`,cy=`from typing import Any\r
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
`,dy=`from typing import Any\r
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
`,fy=`class Graph:\r
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
`,py=`from typing import Any\r
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
`,hy=`class TrieNode:\r
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
`,gy=`class UnionFind:\r
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
`,my=`class UnionFind:\r
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
`;function vy(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Data Structures"}),o.jsx("section",{id:"ds-array",children:o.jsx(j,{title:"array",children:o.jsx(j.Tab,{code:sy,language:"python"})})}),o.jsx("section",{id:"ds-hash-map",children:o.jsx(j,{title:"hash map",children:o.jsx(j.Tab,{code:py,language:"python"})})}),o.jsx("section",{id:"ds-linked-list",children:o.jsx(j,{title:"linked list",children:o.jsx(j.Tab,{code:cy,language:"python"})})}),o.jsx("section",{id:"ds-doubly-linked-list",children:o.jsx(j,{title:"doubly linked list",children:o.jsx(j.Tab,{code:dy,language:"python"})})}),o.jsx("section",{id:"ds-binary-tree",children:o.jsx(j,{title:"binary tree",children:o.jsx(j.Tab,{code:ay,language:"python"})})}),o.jsx("section",{id:"ds-binary-search-tree",children:o.jsx(j,{title:"binary search tree",children:o.jsx(j.Tab,{code:uy,language:"python"})})}),o.jsx("section",{id:"ds-graph",children:o.jsx(j,{title:"graph",children:o.jsx(j.Tab,{code:fy,language:"python"})})}),o.jsx("section",{id:"ds-union-find",children:o.jsx(j,{title:"union find",children:o.jsx(j.Tab,{code:gy,language:"python"})})}),o.jsx("section",{id:"ds-union-find-optimized",children:o.jsx(j,{title:"union find optimized",children:o.jsx(j.Tab,{code:my,language:"python"})})}),o.jsx("section",{id:"ds-trie",children:o.jsx(j,{title:"trie",children:o.jsx(j.Tab,{code:hy,language:"python"})})})]})}const yy=`import random\r
\r
\r
def bogo_sort(arr: list) -> None:\r
    target = sorted(arr)\r
\r
    while arr != target:\r
        random.shuffle(arr)\r
`,xy=`def bubble_sort(arr: list) -> None:\r
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
`,_y=`def bucket_sort(arr: list) -> list:\r
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
`,wy=`def counting_sort(arr: list) -> list:\r
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
`,Sy=`def cube_sort(arr: list, processors: int) -> None:\r
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
`,jy=`def heap_sort(arr: list) -> list:\r
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
`,ky=`def insertion_sort(arr: list) -> None:\r
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
`,Ey=`def merge_sort(arr: list) -> list:\r
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
`,Ny=`def pancake_sort(arr: list) -> None:\r
    n = len(arr)\r
\r
    for size in range(n, 1, -1):\r
        max_index = find_max_index(arr, size)\r
\r
        if max_index != size - 1:\r
            flip(arr, max_index)\r
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
`,Ty=`def quick_sort(arr: list) -> list:\r
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
`,Oy=`def radix_sort(arr: list) -> None:\r
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
`,Cy=`def selection_sort(arr: list) -> None:\r
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
`,Ry=`def shell_sort(arr: list) -> None:\r
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
`,by=`from threading import Thread\r
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
`,Ay=`def tim_sort(arr: list) -> list:\r
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
`;function Py(){return o.jsxs("div",{className:he.container,children:[o.jsx("h2",{className:he.sectionHeader,children:"Sorting Algorithms"}),o.jsx("section",{id:"sort-bubble",children:o.jsx(j,{title:"bubble sort",children:o.jsx(j.Tab,{code:xy,language:"python"})})}),o.jsx("section",{id:"sort-selection",children:o.jsx(j,{title:"selection sort",children:o.jsx(j.Tab,{code:Cy,language:"python"})})}),o.jsx("section",{id:"sort-insertion",children:o.jsx(j,{title:"insertion sort",children:o.jsx(j.Tab,{code:ky,language:"python"})})}),o.jsx("section",{id:"sort-shell",children:o.jsx(j,{title:"shell sort",children:o.jsx(j.Tab,{code:Ry,language:"python"})})}),o.jsx("section",{id:"sort-merge",children:o.jsx(j,{title:"merge sort",children:o.jsx(j.Tab,{code:Ey,language:"python"})})}),o.jsx("section",{id:"sort-quick",children:o.jsx(j,{title:"quick sort",children:o.jsx(j.Tab,{code:Ty,language:"python"})})}),o.jsx("section",{id:"sort-tim",children:o.jsx(j,{title:"timsort",children:o.jsx(j.Tab,{code:Ay,language:"python"})})}),o.jsx("section",{id:"sort-heap",children:o.jsx(j,{title:"heap sort",children:o.jsx(j.Tab,{code:jy,language:"python"})})}),o.jsx("section",{id:"sort-counting",children:o.jsx(j,{title:"counting sort",children:o.jsx(j.Tab,{code:wy,language:"python"})})}),o.jsx("section",{id:"sort-bucket",children:o.jsx(j,{title:"bucket sort",children:o.jsx(j.Tab,{code:_y,language:"python"})})}),o.jsx("section",{id:"sort-radix",children:o.jsx(j,{title:"radix sort",children:o.jsx(j.Tab,{code:Oy,language:"python"})})}),o.jsx("section",{id:"sort-cube",children:o.jsx(j,{title:"cubesort",children:o.jsx(j.Tab,{code:Sy,language:"python"})})}),o.jsx("section",{id:"sort-bogo",children:o.jsx(j,{title:"bogo sort",children:o.jsx(j.Tab,{code:yy,language:"python"})})}),o.jsx("section",{id:"sort-pancake",children:o.jsx(j,{title:"pancake sort",children:o.jsx(j.Tab,{code:Ny,language:"python"})})}),o.jsx("section",{id:"sort-sleep",children:o.jsx(j,{title:"sleep sort",children:o.jsx(j.Tab,{code:by,language:"python"})})})]})}function My(){const{isSidebarOpen:e}=Ds(),n=en(nu.main,!e&&nu.sidebarHidden);return o.jsxs("main",{className:n,children:[o.jsx(zg,{}),o.jsx(dv,{}),o.jsx(hv,{}),o.jsx(xv,{}),o.jsx(Sv,{}),o.jsx(Cv,{}),o.jsx(zv,{}),o.jsx(Uv,{}),o.jsx(Jv,{}),o.jsx(ny,{}),o.jsx(oy,{}),o.jsx(vy,{}),o.jsx(Py,{})]})}function Ly(){return o.jsx(mi.StrictMode,{children:o.jsx(xh,{children:o.jsxs("div",{className:"App",children:[o.jsx(Sh,{}),o.jsx(wg,{}),o.jsx(My,{})]})})})}Ql.createRoot(document.getElementById("root")).render(o.jsx(Ly,{}));
