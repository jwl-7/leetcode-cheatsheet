(function(){const S=document.createElement("link").relList;if(S&&S.supports&&S.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))P(j);new MutationObserver(j=>{for(const $ of j)if($.type==="childList")for(const Y of $.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&P(Y)}).observe(document,{childList:!0,subtree:!0});function p(j){const $={};return j.integrity&&($.integrity=j.integrity),j.referrerPolicy&&($.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?$.credentials="include":j.crossOrigin==="anonymous"?$.credentials="omit":$.credentials="same-origin",$}function P(j){if(j.ep)return;j.ep=!0;const $=p(j);fetch(j.href,$)}})();function ao(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var Vs={exports:{}},Ii={},$s={exports:{}},Vn={};var mc;function wf(){if(mc)return Vn;mc=1;var c=Symbol.for("react.element"),S=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Y=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),A=Symbol.iterator;function T(d){return d===null||typeof d!="object"?null:(d=A&&d[A]||d["@@iterator"],typeof d=="function"?d:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,w={};function I(d,E,tn){this.props=d,this.context=E,this.refs=w,this.updater=tn||k}I.prototype.isReactComponent={},I.prototype.setState=function(d,E){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,E,"setState")},I.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function B(){}B.prototype=I.prototype;function R(d,E,tn){this.props=d,this.context=E,this.refs=w,this.updater=tn||k}var G=R.prototype=new B;G.constructor=R,N(G,I.prototype),G.isPureReactComponent=!0;var L=Array.isArray,Q=Object.prototype.hasOwnProperty,Z={current:null},on={key:!0,ref:!0,__self:!0,__source:!0};function wn(d,E,tn){var Mn,kn={},Un=null,Nn=null;if(E!=null)for(Mn in E.ref!==void 0&&(Nn=E.ref),E.key!==void 0&&(Un=""+E.key),E)Q.call(E,Mn)&&!on.hasOwnProperty(Mn)&&(kn[Mn]=E[Mn]);var jn=arguments.length-2;if(jn===1)kn.children=tn;else if(1<jn){for(var Sn=Array(jn),ue=0;ue<jn;ue++)Sn[ue]=arguments[ue+2];kn.children=Sn}if(d&&d.defaultProps)for(Mn in jn=d.defaultProps,jn)kn[Mn]===void 0&&(kn[Mn]=jn[Mn]);return{$$typeof:c,type:d,key:Un,ref:Nn,props:kn,_owner:Z.current}}function J(d,E){return{$$typeof:c,type:d.type,key:E,ref:d.ref,props:d.props,_owner:d._owner}}function mn(d){return typeof d=="object"&&d!==null&&d.$$typeof===c}function Tn(d){var E={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(tn){return E[tn]})}var vn=/\/+/g;function cn(d,E){return typeof d=="object"&&d!==null&&d.key!=null?Tn(""+d.key):E.toString(36)}function Fn(d,E,tn,Mn,kn){var Un=typeof d;(Un==="undefined"||Un==="boolean")&&(d=null);var Nn=!1;if(d===null)Nn=!0;else switch(Un){case"string":case"number":Nn=!0;break;case"object":switch(d.$$typeof){case c:case S:Nn=!0}}if(Nn)return Nn=d,kn=kn(Nn),d=Mn===""?"."+cn(Nn,0):Mn,L(kn)?(tn="",d!=null&&(tn=d.replace(vn,"$&/")+"/"),Fn(kn,E,tn,"",function(ue){return ue})):kn!=null&&(mn(kn)&&(kn=J(kn,tn+(!kn.key||Nn&&Nn.key===kn.key?"":(""+kn.key).replace(vn,"$&/")+"/")+d)),E.push(kn)),1;if(Nn=0,Mn=Mn===""?".":Mn+":",L(d))for(var jn=0;jn<d.length;jn++){Un=d[jn];var Sn=Mn+cn(Un,jn);Nn+=Fn(Un,E,tn,Sn,kn)}else if(Sn=T(d),typeof Sn=="function")for(d=Sn.call(d),jn=0;!(Un=d.next()).done;)Un=Un.value,Sn=Mn+cn(Un,jn++),Nn+=Fn(Un,E,tn,Sn,kn);else if(Un==="object")throw E=String(d),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.");return Nn}function ne(d,E,tn){if(d==null)return d;var Mn=[],kn=0;return Fn(d,Mn,"","",function(Un){return E.call(tn,Un,kn++)}),Mn}function Gn(d){if(d._status===-1){var E=d._result;E=E(),E.then(function(tn){(d._status===0||d._status===-1)&&(d._status=1,d._result=tn)},function(tn){(d._status===0||d._status===-1)&&(d._status=2,d._result=tn)}),d._status===-1&&(d._status=0,d._result=E)}if(d._status===1)return d._result.default;throw d._result}var Yn={current:null},F={transition:null},dn={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:F,ReactCurrentOwner:Z};return Vn.Children={map:ne,forEach:function(d,E,tn){ne(d,function(){E.apply(this,arguments)},tn)},count:function(d){var E=0;return ne(d,function(){E++}),E},toArray:function(d){return ne(d,function(E){return E})||[]},only:function(d){if(!mn(d))throw Error("React.Children.only expected to receive a single React element child.");return d}},Vn.Component=I,Vn.Fragment=p,Vn.Profiler=j,Vn.PureComponent=R,Vn.StrictMode=P,Vn.Suspense=x,Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dn,Vn.cloneElement=function(d,E,tn){if(d==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+d+".");var Mn=N({},d.props),kn=d.key,Un=d.ref,Nn=d._owner;if(E!=null){if(E.ref!==void 0&&(Un=E.ref,Nn=Z.current),E.key!==void 0&&(kn=""+E.key),d.type&&d.type.defaultProps)var jn=d.type.defaultProps;for(Sn in E)Q.call(E,Sn)&&!on.hasOwnProperty(Sn)&&(Mn[Sn]=E[Sn]===void 0&&jn!==void 0?jn[Sn]:E[Sn])}var Sn=arguments.length-2;if(Sn===1)Mn.children=tn;else if(1<Sn){jn=Array(Sn);for(var ue=0;ue<Sn;ue++)jn[ue]=arguments[ue+2];Mn.children=jn}return{$$typeof:c,type:d.type,key:kn,ref:Un,props:Mn,_owner:Nn}},Vn.createContext=function(d){return d={$$typeof:Y,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},d.Provider={$$typeof:$,_context:d},d.Consumer=d},Vn.createElement=wn,Vn.createFactory=function(d){var E=wn.bind(null,d);return E.type=d,E},Vn.createRef=function(){return{current:null}},Vn.forwardRef=function(d){return{$$typeof:C,render:d}},Vn.isValidElement=mn,Vn.lazy=function(d){return{$$typeof:z,_payload:{_status:-1,_result:d},_init:Gn}},Vn.memo=function(d,E){return{$$typeof:b,type:d,compare:E===void 0?null:E}},Vn.startTransition=function(d){var E=F.transition;F.transition={};try{d()}finally{F.transition=E}},Vn.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},Vn.useCallback=function(d,E){return Yn.current.useCallback(d,E)},Vn.useContext=function(d){return Yn.current.useContext(d)},Vn.useDebugValue=function(){},Vn.useDeferredValue=function(d){return Yn.current.useDeferredValue(d)},Vn.useEffect=function(d,E){return Yn.current.useEffect(d,E)},Vn.useId=function(){return Yn.current.useId()},Vn.useImperativeHandle=function(d,E,tn){return Yn.current.useImperativeHandle(d,E,tn)},Vn.useInsertionEffect=function(d,E){return Yn.current.useInsertionEffect(d,E)},Vn.useLayoutEffect=function(d,E){return Yn.current.useLayoutEffect(d,E)},Vn.useMemo=function(d,E){return Yn.current.useMemo(d,E)},Vn.useReducer=function(d,E,tn){return Yn.current.useReducer(d,E,tn)},Vn.useRef=function(d){return Yn.current.useRef(d)},Vn.useState=function(d){return Yn.current.useState(d)},Vn.useSyncExternalStore=function(d,E,tn){return Yn.current.useSyncExternalStore(d,E,tn)},Vn.useTransition=function(){return Yn.current.useTransition()},Vn.version="18.2.0",Vn}var vc;function oo(){return vc||(vc=1,$s.exports=wf()),$s.exports}var yc;function Sf(){if(yc)return Ii;yc=1;var c=oo(),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$={key:!0,ref:!0,__self:!0,__source:!0};function Y(C,x,b){var z,A={},T=null,k=null;b!==void 0&&(T=""+b),x.key!==void 0&&(T=""+x.key),x.ref!==void 0&&(k=x.ref);for(z in x)P.call(x,z)&&!$.hasOwnProperty(z)&&(A[z]=x[z]);if(C&&C.defaultProps)for(z in x=C.defaultProps,x)A[z]===void 0&&(A[z]=x[z]);return{$$typeof:S,type:C,key:T,ref:k,props:A,_owner:j.current}}return Ii.Fragment=p,Ii.jsx=Y,Ii.jsxs=Y,Ii}var xc;function Tf(){return xc||(xc=1,Vs.exports=Sf()),Vs.exports}var r=Tf(),qa={},Ks={exports:{}},Ve={},Gs={exports:{}},Js={};var _c;function jf(){return _c||(_c=1,(function(c){function S(F,dn){var d=F.length;F.push(dn);n:for(;0<d;){var E=d-1>>>1,tn=F[E];if(0<j(tn,dn))F[E]=dn,F[d]=tn,d=E;else break n}}function p(F){return F.length===0?null:F[0]}function P(F){if(F.length===0)return null;var dn=F[0],d=F.pop();if(d!==dn){F[0]=d;n:for(var E=0,tn=F.length,Mn=tn>>>1;E<Mn;){var kn=2*(E+1)-1,Un=F[kn],Nn=kn+1,jn=F[Nn];if(0>j(Un,d))Nn<tn&&0>j(jn,Un)?(F[E]=jn,F[Nn]=d,E=Nn):(F[E]=Un,F[kn]=d,E=kn);else if(Nn<tn&&0>j(jn,d))F[E]=jn,F[Nn]=d,E=Nn;else break n}}return dn}function j(F,dn){var d=F.sortIndex-dn.sortIndex;return d!==0?d:F.id-dn.id}if(typeof performance=="object"&&typeof performance.now=="function"){var $=performance;c.unstable_now=function(){return $.now()}}else{var Y=Date,C=Y.now();c.unstable_now=function(){return Y.now()-C}}var x=[],b=[],z=1,A=null,T=3,k=!1,N=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(F){for(var dn=p(b);dn!==null;){if(dn.callback===null)P(b);else if(dn.startTime<=F)P(b),dn.sortIndex=dn.expirationTime,S(x,dn);else break;dn=p(b)}}function L(F){if(w=!1,G(F),!N)if(p(x)!==null)N=!0,Gn(Q);else{var dn=p(b);dn!==null&&Yn(L,dn.startTime-F)}}function Q(F,dn){N=!1,w&&(w=!1,B(wn),wn=-1),k=!0;var d=T;try{for(G(dn),A=p(x);A!==null&&(!(A.expirationTime>dn)||F&&!Tn());){var E=A.callback;if(typeof E=="function"){A.callback=null,T=A.priorityLevel;var tn=E(A.expirationTime<=dn);dn=c.unstable_now(),typeof tn=="function"?A.callback=tn:A===p(x)&&P(x),G(dn)}else P(x);A=p(x)}if(A!==null)var Mn=!0;else{var kn=p(b);kn!==null&&Yn(L,kn.startTime-dn),Mn=!1}return Mn}finally{A=null,T=d,k=!1}}var Z=!1,on=null,wn=-1,J=5,mn=-1;function Tn(){return!(c.unstable_now()-mn<J)}function vn(){if(on!==null){var F=c.unstable_now();mn=F;var dn=!0;try{dn=on(!0,F)}finally{dn?cn():(Z=!1,on=null)}}else Z=!1}var cn;if(typeof R=="function")cn=function(){R(vn)};else if(typeof MessageChannel<"u"){var Fn=new MessageChannel,ne=Fn.port2;Fn.port1.onmessage=vn,cn=function(){ne.postMessage(null)}}else cn=function(){I(vn,0)};function Gn(F){on=F,Z||(Z=!0,cn())}function Yn(F,dn){wn=I(function(){F(c.unstable_now())},dn)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(F){F.callback=null},c.unstable_continueExecution=function(){N||k||(N=!0,Gn(Q))},c.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<F?Math.floor(1e3/F):5},c.unstable_getCurrentPriorityLevel=function(){return T},c.unstable_getFirstCallbackNode=function(){return p(x)},c.unstable_next=function(F){switch(T){case 1:case 2:case 3:var dn=3;break;default:dn=T}var d=T;T=dn;try{return F()}finally{T=d}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(F,dn){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var d=T;T=F;try{return dn()}finally{T=d}},c.unstable_scheduleCallback=function(F,dn,d){var E=c.unstable_now();switch(typeof d=="object"&&d!==null?(d=d.delay,d=typeof d=="number"&&0<d?E+d:E):d=E,F){case 1:var tn=-1;break;case 2:tn=250;break;case 5:tn=1073741823;break;case 4:tn=1e4;break;default:tn=5e3}return tn=d+tn,F={id:z++,callback:dn,priorityLevel:F,startTime:d,expirationTime:tn,sortIndex:-1},d>E?(F.sortIndex=d,S(b,F),p(x)===null&&F===p(b)&&(w?(B(wn),wn=-1):w=!0,Yn(L,d-E))):(F.sortIndex=tn,S(x,F),N||k||(N=!0,Gn(Q))),F},c.unstable_shouldYield=Tn,c.unstable_wrapCallback=function(F){var dn=T;return function(){var d=T;T=dn;try{return F.apply(this,arguments)}finally{T=d}}}})(Js)),Js}var bc;function kf(){return bc||(bc=1,Gs.exports=jf()),Gs.exports}var wc;function Ef(){if(wc)return Ve;wc=1;var c=oo(),S=kf();function p(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P=new Set,j={};function $(n,e){Y(n,e),Y(n+"Capture",e)}function Y(n,e){for(j[n]=e,n=0;n<e.length;n++)P.add(e[n])}var C=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},A={};function T(n){return x.call(A,n)?!0:x.call(z,n)?!1:b.test(n)?A[n]=!0:(z[n]=!0,!1)}function k(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function N(n,e,t,i){if(e===null||typeof e>"u"||k(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function w(n,e,t,i,a,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){I[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];I[e]=new w(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){I[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){I[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){I[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){I[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){I[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){I[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){I[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(B,R);I[e]=new w(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(B,R);I[e]=new w(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(B,R);I[e]=new w(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){I[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),I.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){I[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function G(n,e,t,i){var a=I.hasOwnProperty(e)?I[e]:null;(a!==null?a.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(N(e,t,a,i)&&(t=null),i||a===null?T(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):a.mustUseProperty?n[a.propertyName]=t===null?a.type===3?!1:"":t:(e=a.attributeName,i=a.attributeNamespace,t===null?n.removeAttribute(e):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var L=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),Z=Symbol.for("react.portal"),on=Symbol.for("react.fragment"),wn=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),mn=Symbol.for("react.provider"),Tn=Symbol.for("react.context"),vn=Symbol.for("react.forward_ref"),cn=Symbol.for("react.suspense"),Fn=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),Yn=Symbol.for("react.offscreen"),F=Symbol.iterator;function dn(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var d=Object.assign,E;function tn(n){if(E===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);E=e&&e[1]||""}return`
`+E+n}var Mn=!1;function kn(n,e){if(!n||Mn)return"";Mn=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(_){var i=_}Reflect.construct(n,[],e)}else{try{e.call()}catch(_){i=_}n.call(e.prototype)}else{try{throw Error()}catch(_){i=_}n()}}catch(_){if(_&&i&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),o=i.stack.split(`
`),l=a.length-1,u=o.length-1;1<=l&&0<=u&&a[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(a[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||a[l]!==o[u]){var h=`
`+a[l].replace(" at new "," at ");return n.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",n.displayName)),h}while(1<=l&&0<=u);break}}}finally{Mn=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?tn(n):""}function Un(n){switch(n.tag){case 5:return tn(n.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 2:case 15:return n=kn(n.type,!1),n;case 11:return n=kn(n.type.render,!1),n;case 1:return n=kn(n.type,!0),n;default:return""}}function Nn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case on:return"Fragment";case Z:return"Portal";case J:return"Profiler";case wn:return"StrictMode";case cn:return"Suspense";case Fn:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Tn:return(n.displayName||"Context")+".Consumer";case mn:return(n._context.displayName||"Context")+".Provider";case vn:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return e=n.displayName||null,e!==null?e:Nn(n.type)||"Memo";case Gn:e=n._payload,n=n._init;try{return Nn(n(e))}catch{}}return null}function jn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nn(e);case 8:return e===wn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ue(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H(n){var e=ue(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nn(n){n._valueTracker||(n._valueTracker=H(n))}function In(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ue(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Cn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function En(n,e){var t=e.checked;return d({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hn(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Sn(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dn(n,e){e=e.checked,e!=null&&G(n,"checked",e,!1)}function zn(n,e){Dn(n,e);var t=Sn(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?$n(n,e.type,t):e.hasOwnProperty("defaultValue")&&$n(n,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Wn(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function $n(n,e,t){(e!=="number"||Cn(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Bn=Array.isArray;function X(n,e,t,i){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Sn(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,i&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function ce(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(p(91));return d({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ee(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(p(92));if(Bn(t)){if(1<t.length)throw Error(p(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Sn(t)}}function $e(n,e){var t=Sn(e.value),i=Sn(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Zr(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function wt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mt(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?wt(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var er,zi=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,a){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,a)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=er.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function tr(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lo=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(n){lo.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),rr[e]=rr[n]})});function Bi(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||rr.hasOwnProperty(n)&&rr[n]?(""+e).trim():e+"px"}function ni(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,a=Bi(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,a):n[t]=a}}var uo=d({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ei(n,e){if(e){if(uo[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(p(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(p(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(p(61))}if(e.style!=null&&typeof e.style!="object")throw Error(p(62))}}function ti(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ir=null;function Sr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tr=null,It=null,St=null;function Tt(n){if(n=bi(n)){if(typeof Tr!="function")throw Error(p(280));var e=n.stateNode;e&&(e=da(e),Tr(n.stateNode,n.type,e))}}function f(n){It?St?St.push(n):St=[n]:It=n}function O(){if(It){var n=It,e=St;if(St=It=null,Tt(n),e)for(n=0;n<e.length;n++)Tt(e[n])}}function q(n,e){return n(e)}function On(){}var ae=!1;function de(n,e,t){if(ae)return n(e,t);ae=!0;try{return q(n,e,t)}finally{ae=!1,(It!==null||St!==null)&&(On(),O())}}function sn(n,e){var t=n.stateNode;if(t===null)return null;var i=da(t);if(i===null)return null;t=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(p(231,e,typeof t));return t}var an=!1;if(C)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){an=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{an=!1}function ye(n,e,t,i,a,o,l,u,h){var _=Array.prototype.slice.call(arguments,3);try{e.apply(t,_)}catch(D){this.onError(D)}}var re=!1,ht=null,Dt=!1,ar=null,co={onError:function(n){re=!0,ht=n}};function ri(n,e,t,i,a,o,l,u,h){re=!1,ht=null,ye.apply(co,arguments)}function fo(n,e,t,i,a,o,l,u,h){if(ri.apply(this,arguments),re){if(re){var _=ht;re=!1,ht=null}else throw Error(p(198));Dt||(Dt=!0,ar=_)}}function jt(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Fi(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ii(n){if(jt(n)!==n)throw Error(p(188))}function jr(n){var e=n.alternate;if(!e){if(e=jt(n),e===null)throw Error(p(188));return e!==n?null:n}for(var t=n,i=e;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){t=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return ii(a),n;if(o===i)return ii(a),e;o=o.sibling}throw Error(p(188))}if(t.return!==i.return)t=a,i=o;else{for(var l=!1,u=a.child;u;){if(u===t){l=!0,t=a,i=o;break}if(u===i){l=!0,i=a,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,i=a;break}if(u===i){l=!0,i=o,t=a;break}u=u.sibling}if(!l)throw Error(p(189))}}if(t.alternate!==i)throw Error(p(190))}if(t.tag!==3)throw Error(p(188));return t.stateNode.current===t?n:e}function Ui(n){return n=jr(n),n!==null?Hi(n):null}function Hi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Hi(n);if(e!==null)return e;n=n.sibling}return null}var Wi=S.unstable_scheduleCallback,Vi=S.unstable_cancelCallback,gt=S.unstable_shouldYield,$i=S.unstable_requestPaint,fe=S.unstable_now,po=S.unstable_getCurrentPriorityLevel,ai=S.unstable_ImmediatePriority,Ki=S.unstable_UserBlockingPriority,kt=S.unstable_NormalPriority,ho=S.unstable_LowPriority,W=S.unstable_IdlePriority,gn=null,Ln=null;function ee(n){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(gn,n,void 0,(n.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:kr,Ke=Math.log,mt=Math.LN2;function kr(n){return n>>>=0,n===0?32:31-(Ke(n)/mt|0)|0}var Se=64,Pe=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function or(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,a=n.suspendedLanes,o=n.pingedLanes,l=t&268435455;if(l!==0){var u=l&~a;u!==0?i=zt(u):(o&=l,o!==0&&(i=zt(o)))}else l=t&~a,l!==0?i=zt(l):o!==0&&(i=zt(o));if(i===0)return 0;if(e!==0&&e!==i&&(e&a)===0&&(a=i&-i,o=e&-e,a>=o||a===16&&(o&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qn(e),a=1<<t,i|=n[t],e&=~a;return i}function Gi(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function go(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,a=n.expirationTimes,o=n.pendingLanes;0<o;){var l=31-Qn(o),u=1<<l,h=a[l];h===-1?((u&t)===0||(u&i)!==0)&&(a[l]=Gi(u,e)):h<=e&&(n.expiredLanes|=u),o&=~u}}function oi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ji(){var n=Se;return Se<<=1,(Se&4194240)===0&&(Se=64),n}function si(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function vt(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qn(e),n[e]=t}function Yi(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var a=31-Qn(t),o=1<<a;e[a]=0,i[a]=-1,n[a]=-1,t&=~o}}function ze(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qn(t),a=1<<i;a&e|n[i]&e&&(n[i]|=e),t&=~a}}var Xn=0;function Er(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rn,Nr,xe,te,sr,at=!1,Bt=[],Xe=null,K=null,ln=null,Pn=new Map,Kn=new Map,oe=[],ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qi(n,e){switch(n){case"focusin":case"focusout":Xe=null;break;case"dragenter":case"dragleave":K=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kn.delete(e.pointerId)}}function lr(n,e,t,i,a,o){return n===null||n.nativeEvent!==o?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:o,targetContainers:[a]},e!==null&&(e=bi(e),e!==null&&Nr(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function Vc(n,e,t,i,a){switch(e){case"focusin":return Xe=lr(Xe,n,e,t,i,a),!0;case"dragenter":return K=lr(K,n,e,t,i,a),!0;case"mouseover":return ln=lr(ln,n,e,t,i,a),!0;case"pointerover":var o=a.pointerId;return Pn.set(o,lr(Pn.get(o)||null,n,e,t,i,a)),!0;case"gotpointercapture":return o=a.pointerId,Kn.set(o,lr(Kn.get(o)||null,n,e,t,i,a)),!0}return!1}function Zs(n){var e=ur(n.target);if(e!==null){var t=jt(e);if(t!==null){if(e=t.tag,e===13){if(e=Fi(t),e!==null){n.blockedOn=e,sr(n.priority,function(){xe(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qi(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vo(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ir=i,t.target.dispatchEvent(i),ir=null}else return e=bi(t),e!==null&&Nr(e),n.blockedOn=t,!1;e.shift()}return!0}function nl(n,e,t){Qi(n)&&t.delete(e)}function $c(){at=!1,Xe!==null&&Qi(Xe)&&(Xe=null),K!==null&&Qi(K)&&(K=null),ln!==null&&Qi(ln)&&(ln=null),Pn.forEach(nl),Kn.forEach(nl)}function li(n,e){n.blockedOn===e&&(n.blockedOn=null,at||(at=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,$c)))}function ui(n){function e(a){return li(a,n)}if(0<Bt.length){li(Bt[0],n);for(var t=1;t<Bt.length;t++){var i=Bt[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Xe!==null&&li(Xe,n),K!==null&&li(K,n),ln!==null&&li(ln,n),Pn.forEach(e),Kn.forEach(e),t=0;t<oe.length;t++)i=oe[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<oe.length&&(t=oe[0],t.blockedOn===null);)Zs(t),t.blockedOn===null&&oe.shift()}var Or=L.ReactCurrentBatchConfig,Xi=!0;function Kc(n,e,t,i){var a=Xn,o=Or.transition;Or.transition=null;try{Xn=1,mo(n,e,t,i)}finally{Xn=a,Or.transition=o}}function Gc(n,e,t,i){var a=Xn,o=Or.transition;Or.transition=null;try{Xn=4,mo(n,e,t,i)}finally{Xn=a,Or.transition=o}}function mo(n,e,t,i){if(Xi){var a=vo(n,e,t,i);if(a===null)Po(n,e,i,Zi,t),qi(n,i);else if(Vc(a,n,e,t,i))i.stopPropagation();else if(qi(n,i),e&4&&-1<ot.indexOf(n)){for(;a!==null;){var o=bi(a);if(o!==null&&Rn(o),o=vo(n,e,t,i),o===null&&Po(n,e,i,Zi,t),o===a)break;a=o}a!==null&&i.stopPropagation()}else Po(n,e,i,null,t)}}var Zi=null;function vo(n,e,t,i){if(Zi=null,n=Sr(i),n=ur(n),n!==null)if(e=jt(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Fi(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Zi=n,null}function el(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(po()){case ai:return 1;case Ki:return 4;case kt:case ho:return 16;case W:return 536870912;default:return 16}default:return 16}}var Ft=null,yo=null,na=null;function tl(){if(na)return na;var n,e=yo,t=e.length,i,a="value"in Ft?Ft.value:Ft.textContent,o=a.length;for(n=0;n<t&&e[n]===a[n];n++);var l=t-n;for(i=1;i<=l&&e[t-i]===a[o-i];i++);return na=a.slice(n,1<i?1-i:void 0)}function ea(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ta(){return!0}function rl(){return!1}function Ge(n){function e(t,i,a,o,l){this._reactName=t,this._targetInst=a,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ta:rl,this.isPropagationStopped=rl,this}return d(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=Ge(Ar),ci=d({},Ar,{view:0,detail:0}),Jc=Ge(ci),_o,bo,di,ra=d({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:So,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==di&&(di&&n.type==="mousemove"?(_o=n.screenX-di.screenX,bo=n.screenY-di.screenY):bo=_o=0,di=n),_o)},movementY:function(n){return"movementY"in n?n.movementY:bo}}),il=Ge(ra),Yc=d({},ra,{dataTransfer:0}),qc=Ge(Yc),Qc=d({},ci,{relatedTarget:0}),wo=Ge(Qc),Xc=d({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Zc=Ge(Xc),nd=d({},Ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ed=Ge(nd),td=d({},Ar,{data:0}),al=Ge(td),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function od(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=ad[n])?!!e[n]:!1}function So(){return od}var sd=d({},ci,{key:function(n){if(n.key){var e=rd[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?id[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:So,charCode:function(n){return n.type==="keypress"?ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ld=Ge(sd),ud=d({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ol=Ge(ud),cd=d({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:So}),dd=Ge(cd),fd=d({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),pd=Ge(fd),hd=d({},ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gd=Ge(hd),md=[9,13,27,32],To=C&&"CompositionEvent"in window,fi=null;C&&"documentMode"in document&&(fi=document.documentMode);var vd=C&&"TextEvent"in window&&!fi,sl=C&&(!To||fi&&8<fi&&11>=fi),ll=" ",ul=!1;function cl(n,e){switch(n){case"keyup":return md.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dl(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cr=!1;function yd(n,e){switch(n){case"compositionend":return dl(e);case"keypress":return e.which!==32?null:(ul=!0,ll);case"textInput":return n=e.data,n===ll&&ul?null:n;default:return null}}function xd(n,e){if(Cr)return n==="compositionend"||!To&&cl(n,e)?(n=tl(),na=yo=Ft=null,Cr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sl&&e.locale!=="ko"?null:e.data;default:return null}}var _d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!_d[n.type]:e==="textarea"}function pl(n,e,t,i){f(i),e=la(e,"onChange"),0<e.length&&(t=new xo("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var pi=null,hi=null;function bd(n){Cl(n,0)}function ia(n){var e=Ir(n);if(In(e))return n}function wd(n,e){if(n==="change")return e}var hl=!1;if(C){var jo;if(C){var ko="oninput"in document;if(!ko){var gl=document.createElement("div");gl.setAttribute("oninput","return;"),ko=typeof gl.oninput=="function"}jo=ko}else jo=!1;hl=jo&&(!document.documentMode||9<document.documentMode)}function ml(){pi&&(pi.detachEvent("onpropertychange",vl),hi=pi=null)}function vl(n){if(n.propertyName==="value"&&ia(hi)){var e=[];pl(e,hi,n,Sr(n)),de(bd,e)}}function Sd(n,e,t){n==="focusin"?(ml(),pi=e,hi=t,pi.attachEvent("onpropertychange",vl)):n==="focusout"&&ml()}function Td(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ia(hi)}function jd(n,e){if(n==="click")return ia(e)}function kd(n,e){if(n==="input"||n==="change")return ia(e)}function Ed(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var st=typeof Object.is=="function"?Object.is:Ed;function gi(n,e){if(st(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var a=t[i];if(!x.call(e,a)||!st(n[a],e[a]))return!1}return!0}function yl(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xl(n,e){var t=yl(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=yl(t)}}function _l(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?_l(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function bl(){for(var n=window,e=Cn();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Cn(n.document)}return e}function Eo(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Nd(n){var e=bl(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&_l(t.ownerDocument.documentElement,t)){if(i!==null&&Eo(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var a=t.textContent.length,o=Math.min(i.start,a);i=i.end===void 0?o:Math.min(i.end,a),!n.extend&&o>i&&(a=i,i=o,o=a),a=xl(t,o);var l=xl(t,i);a&&l&&(n.rangeCount!==1||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==l.node||n.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(a.node,a.offset),n.removeAllRanges(),o>i?(n.addRange(e),n.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Od=C&&"documentMode"in document&&11>=document.documentMode,Lr=null,No=null,mi=null,Oo=!1;function wl(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oo||Lr==null||Lr!==Cn(i)||(i=Lr,"selectionStart"in i&&Eo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),mi&&gi(mi,i)||(mi=i,i=la(No,"onSelect"),0<i.length&&(e=new xo("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Lr)))}function aa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Rr={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionend:aa("Transition","TransitionEnd")},Ao={},Sl={};C&&(Sl=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function oa(n){if(Ao[n])return Ao[n];if(!Rr[n])return n;var e=Rr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Sl)return Ao[n]=e[t];return n}var Tl=oa("animationend"),jl=oa("animationiteration"),kl=oa("animationstart"),El=oa("transitionend"),Nl=new Map,Ol="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(n,e){Nl.set(n,e),$(e,[n])}for(var Co=0;Co<Ol.length;Co++){var Lo=Ol[Co],Ad=Lo.toLowerCase(),Cd=Lo[0].toUpperCase()+Lo.slice(1);Ut(Ad,"on"+Cd)}Ut(Tl,"onAnimationEnd"),Ut(jl,"onAnimationIteration"),Ut(kl,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(El,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ld=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function Al(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,fo(i,e,void 0,n),n.currentTarget=null}function Cl(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],a=i.event;i=i.listeners;n:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var u=i[l],h=u.instance,_=u.currentTarget;if(u=u.listener,h!==o&&a.isPropagationStopped())break n;Al(a,u,_),o=h}else for(l=0;l<i.length;l++){if(u=i[l],h=u.instance,_=u.currentTarget,u=u.listener,h!==o&&a.isPropagationStopped())break n;Al(a,u,_),o=h}}}if(Dt)throw n=ar,Dt=!1,ar=null,n}function se(n,e){var t=e[Fo];t===void 0&&(t=e[Fo]=new Set);var i=n+"__bubble";t.has(i)||(Ll(e,n,2,!1),t.add(i))}function Ro(n,e,t){var i=0;e&&(i|=4),Ll(t,n,i,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function yi(n){if(!n[sa]){n[sa]=!0,P.forEach(function(t){t!=="selectionchange"&&(Ld.has(t)||Ro(t,!1,n),Ro(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sa]||(e[sa]=!0,Ro("selectionchange",!1,e))}}function Ll(n,e,t,i){switch(el(e)){case 1:var a=Kc;break;case 4:a=Gc;break;default:a=mo}t=a.bind(null,e,t,n),a=void 0,!an||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function Po(n,e,t,i,a){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)n:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===a||u.nodeType===8&&u.parentNode===a)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;l=l.return}for(;u!==null;){if(l=ur(u),l===null)return;if(h=l.tag,h===5||h===6){i=o=l;continue n}u=u.parentNode}}i=i.return}de(function(){var _=o,D=Sr(t),U=[];n:{var M=Nl.get(n);if(M!==void 0){var rn=xo,fn=n;switch(n){case"keypress":if(ea(t)===0)break n;case"keydown":case"keyup":rn=ld;break;case"focusin":fn="focus",rn=wo;break;case"focusout":fn="blur",rn=wo;break;case"beforeblur":case"afterblur":rn=wo;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rn=il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rn=qc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rn=dd;break;case Tl:case jl:case kl:rn=Zc;break;case El:rn=pd;break;case"scroll":rn=Jc;break;case"wheel":rn=gd;break;case"copy":case"cut":case"paste":rn=ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rn=ol}var pn=(e&4)!==0,ve=!pn&&n==="scroll",v=pn?M!==null?M+"Capture":null:M;pn=[];for(var g=_,y;g!==null;){y=g;var V=y.stateNode;if(y.tag===5&&V!==null&&(y=V,v!==null&&(V=sn(g,v),V!=null&&pn.push(xi(g,V,y)))),ve)break;g=g.return}0<pn.length&&(M=new rn(M,fn,null,t,D),U.push({event:M,listeners:pn}))}}if((e&7)===0){n:{if(M=n==="mouseover"||n==="pointerover",rn=n==="mouseout"||n==="pointerout",M&&t!==ir&&(fn=t.relatedTarget||t.fromElement)&&(ur(fn)||fn[Et]))break n;if((rn||M)&&(M=D.window===D?D:(M=D.ownerDocument)?M.defaultView||M.parentWindow:window,rn?(fn=t.relatedTarget||t.toElement,rn=_,fn=fn?ur(fn):null,fn!==null&&(ve=jt(fn),fn!==ve||fn.tag!==5&&fn.tag!==6)&&(fn=null)):(rn=null,fn=_),rn!==fn)){if(pn=il,V="onMouseLeave",v="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(pn=ol,V="onPointerLeave",v="onPointerEnter",g="pointer"),ve=rn==null?M:Ir(rn),y=fn==null?M:Ir(fn),M=new pn(V,g+"leave",rn,t,D),M.target=ve,M.relatedTarget=y,V=null,ur(D)===_&&(pn=new pn(v,g+"enter",fn,t,D),pn.target=y,pn.relatedTarget=ve,V=pn),ve=V,rn&&fn)e:{for(pn=rn,v=fn,g=0,y=pn;y;y=Pr(y))g++;for(y=0,V=v;V;V=Pr(V))y++;for(;0<g-y;)pn=Pr(pn),g--;for(;0<y-g;)v=Pr(v),y--;for(;g--;){if(pn===v||v!==null&&pn===v.alternate)break e;pn=Pr(pn),v=Pr(v)}pn=null}else pn=null;rn!==null&&Rl(U,M,rn,pn,!1),fn!==null&&ve!==null&&Rl(U,ve,fn,pn,!0)}}n:{if(M=_?Ir(_):window,rn=M.nodeName&&M.nodeName.toLowerCase(),rn==="select"||rn==="input"&&M.type==="file")var hn=wd;else if(fl(M))if(hl)hn=kd;else{hn=Td;var _n=Sd}else(rn=M.nodeName)&&rn.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(hn=jd);if(hn&&(hn=hn(n,_))){pl(U,hn,t,D);break n}_n&&_n(n,M,_),n==="focusout"&&(_n=M._wrapperState)&&_n.controlled&&M.type==="number"&&$n(M,"number",M.value)}switch(_n=_?Ir(_):window,n){case"focusin":(fl(_n)||_n.contentEditable==="true")&&(Lr=_n,No=_,mi=null);break;case"focusout":mi=No=Lr=null;break;case"mousedown":Oo=!0;break;case"contextmenu":case"mouseup":case"dragend":Oo=!1,wl(U,t,D);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":wl(U,t,D)}var bn;if(To)n:{switch(n){case"compositionstart":var An="onCompositionStart";break n;case"compositionend":An="onCompositionEnd";break n;case"compositionupdate":An="onCompositionUpdate";break n}An=void 0}else Cr?cl(n,t)&&(An="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(An="onCompositionStart");An&&(sl&&t.locale!=="ko"&&(Cr||An!=="onCompositionStart"?An==="onCompositionEnd"&&Cr&&(bn=tl()):(Ft=D,yo="value"in Ft?Ft.value:Ft.textContent,Cr=!0)),_n=la(_,An),0<_n.length&&(An=new al(An,n,null,t,D),U.push({event:An,listeners:_n}),bn?An.data=bn:(bn=dl(t),bn!==null&&(An.data=bn)))),(bn=vd?yd(n,t):xd(n,t))&&(_=la(_,"onBeforeInput"),0<_.length&&(D=new al("onBeforeInput","beforeinput",null,t,D),U.push({event:D,listeners:_}),D.data=bn))}Cl(U,e)})}function xi(n,e,t){return{instance:n,listener:e,currentTarget:t}}function la(n,e){for(var t=e+"Capture",i=[];n!==null;){var a=n,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=sn(n,t),o!=null&&i.unshift(xi(n,o,a)),o=sn(n,e),o!=null&&i.push(xi(n,o,a))),n=n.return}return i}function Pr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rl(n,e,t,i,a){for(var o=e._reactName,l=[];t!==null&&t!==i;){var u=t,h=u.alternate,_=u.stateNode;if(h!==null&&h===i)break;u.tag===5&&_!==null&&(u=_,a?(h=sn(t,o),h!=null&&l.unshift(xi(t,h,u))):a||(h=sn(t,o),h!=null&&l.push(xi(t,h,u)))),t=t.return}l.length!==0&&n.push({event:e,listeners:l})}var Rd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function Pl(n){return(typeof n=="string"?n:""+n).replace(Rd,`
`).replace(Pd,"")}function ua(n,e,t){if(e=Pl(e),Pl(n)!==e&&t)throw Error(p(425))}function ca(){}var Mo=null,Io=null;function Do(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zo=typeof setTimeout=="function"?setTimeout:void 0,Md=typeof clearTimeout=="function"?clearTimeout:void 0,Ml=typeof Promise=="function"?Promise:void 0,Id=typeof queueMicrotask=="function"?queueMicrotask:typeof Ml<"u"?function(n){return Ml.resolve(null).then(n).catch(Dd)}:zo;function Dd(n){setTimeout(function(){throw n})}function Bo(n,e){var t=e,i=0;do{var a=t.nextSibling;if(n.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(i===0){n.removeChild(a),ui(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=a}while(t);ui(e)}function Ht(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Il(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Mr,_i="__reactProps$"+Mr,Et="__reactContainer$"+Mr,Fo="__reactEvents$"+Mr,zd="__reactListeners$"+Mr,Bd="__reactHandles$"+Mr;function ur(n){var e=n[yt];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Et]||t[yt]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Il(n);n!==null;){if(t=n[yt])return t;n=Il(n)}return e}n=t,t=n.parentNode}return null}function bi(n){return n=n[yt]||n[Et],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ir(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(p(33))}function da(n){return n[_i]||null}var Uo=[],Dr=-1;function Wt(n){return{current:n}}function le(n){0>Dr||(n.current=Uo[Dr],Uo[Dr]=null,Dr--)}function ie(n,e){Dr++,Uo[Dr]=n.current,n.current=e}var Vt={},Ae=Wt(Vt),Be=Wt(!1),cr=Vt;function zr(n,e){var t=n.type.contextTypes;if(!t)return Vt;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=e[o];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(n){return n=n.childContextTypes,n!=null}function fa(){le(Be),le(Ae)}function Dl(n,e,t){if(Ae.current!==Vt)throw Error(p(168));ie(Ae,e),ie(Be,t)}function zl(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var a in i)if(!(a in e))throw Error(p(108,jn(n)||"Unknown",a));return d({},t,i)}function pa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vt,cr=Ae.current,ie(Ae,n),ie(Be,Be.current),!0}function Bl(n,e,t){var i=n.stateNode;if(!i)throw Error(p(169));t?(n=zl(n,e,cr),i.__reactInternalMemoizedMergedChildContext=n,le(Be),le(Ae),ie(Ae,n)):le(Be),ie(Be,t)}var Nt=null,ha=!1,Ho=!1;function Fl(n){Nt===null?Nt=[n]:Nt.push(n)}function Fd(n){ha=!0,Fl(n)}function $t(){if(!Ho&&Nt!==null){Ho=!0;var n=0,e=Xn;try{var t=Nt;for(Xn=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nt=null,ha=!1}catch(a){throw Nt!==null&&(Nt=Nt.slice(n+1)),Wi(ai,$t),a}finally{Xn=e,Ho=!1}}return null}var Br=[],Fr=0,ga=null,ma=0,Ze=[],nt=0,dr=null,Ot=1,At="";function fr(n,e){Br[Fr++]=ma,Br[Fr++]=ga,ga=n,ma=e}function Ul(n,e,t){Ze[nt++]=Ot,Ze[nt++]=At,Ze[nt++]=dr,dr=n;var i=Ot;n=At;var a=32-Qn(i)-1;i&=~(1<<a),t+=1;var o=32-Qn(e)+a;if(30<o){var l=a-a%5;o=(i&(1<<l)-1).toString(32),i>>=l,a-=l,Ot=1<<32-Qn(e)+a|t<<a|i,At=o+n}else Ot=1<<o|t<<a|i,At=n}function Wo(n){n.return!==null&&(fr(n,1),Ul(n,1,0))}function Vo(n){for(;n===ga;)ga=Br[--Fr],Br[Fr]=null,ma=Br[--Fr],Br[Fr]=null;for(;n===dr;)dr=Ze[--nt],Ze[nt]=null,At=Ze[--nt],Ze[nt]=null,Ot=Ze[--nt],Ze[nt]=null}var Je=null,Ye=null,pe=!1,lt=null;function Hl(n,e){var t=it(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Wl(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Je=n,Ye=Ht(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Je=n,Ye=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=dr!==null?{id:Ot,overflow:At}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=it(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Je=n,Ye=null,!0):!1;default:return!1}}function $o(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ko(n){if(pe){var e=Ye;if(e){var t=e;if(!Wl(n,e)){if($o(n))throw Error(p(418));e=Ht(t.nextSibling);var i=Je;e&&Wl(n,e)?Hl(i,t):(n.flags=n.flags&-4097|2,pe=!1,Je=n)}}else{if($o(n))throw Error(p(418));n.flags=n.flags&-4097|2,pe=!1,Je=n}}}function Vl(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Je=n}function va(n){if(n!==Je)return!1;if(!pe)return Vl(n),pe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Do(n.type,n.memoizedProps)),e&&(e=Ye)){if($o(n))throw $l(),Error(p(418));for(;e;)Hl(n,e),e=Ht(e.nextSibling)}if(Vl(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ye=Ht(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ye=null}}else Ye=Je?Ht(n.stateNode.nextSibling):null;return!0}function $l(){for(var n=Ye;n;)n=Ht(n.nextSibling)}function Ur(){Ye=Je=null,pe=!1}function Go(n){lt===null?lt=[n]:lt.push(n)}var Ud=L.ReactCurrentBatchConfig;function ut(n,e){if(n&&n.defaultProps){e=d({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var ya=Wt(null),xa=null,Hr=null,Jo=null;function Yo(){Jo=Hr=xa=null}function qo(n){var e=ya.current;le(ya),n._currentValue=e}function Qo(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Wr(n,e){xa=n,Jo=Hr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ue=!0),n.firstContext=null)}function et(n){var e=n._currentValue;if(Jo!==n)if(n={context:n,memoizedValue:e,next:null},Hr===null){if(xa===null)throw Error(p(308));Hr=n,xa.dependencies={lanes:0,firstContext:n}}else Hr=Hr.next=n;return e}var pr=null;function Xo(n){pr===null?pr=[n]:pr.push(n)}function Kl(n,e,t,i){var a=e.interleaved;return a===null?(t.next=t,Xo(e)):(t.next=a.next,a.next=t),e.interleaved=t,Ct(n,i)}function Ct(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Kt=!1;function Zo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gl(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Lt(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Gt(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Jn&2)!==0){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,Ct(n,t)}return a=i.interleaved,a===null?(e.next=e,Xo(i)):(e.next=a.next,a.next=e),i.interleaved=e,Ct(n,t)}function _a(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ze(n,t)}}function Jl(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?a=o=e:o=o.next=e}else a=o=e;t={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ba(n,e,t,i){var a=n.updateQueue;Kt=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var h=u,_=h.next;h.next=null,l===null?o=_:l.next=_,l=h;var D=n.alternate;D!==null&&(D=D.updateQueue,u=D.lastBaseUpdate,u!==l&&(u===null?D.firstBaseUpdate=_:u.next=_,D.lastBaseUpdate=h))}if(o!==null){var U=a.baseState;l=0,D=_=h=null,u=o;do{var M=u.lane,rn=u.eventTime;if((i&M)===M){D!==null&&(D=D.next={eventTime:rn,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});n:{var fn=n,pn=u;switch(M=e,rn=t,pn.tag){case 1:if(fn=pn.payload,typeof fn=="function"){U=fn.call(rn,U,M);break n}U=fn;break n;case 3:fn.flags=fn.flags&-65537|128;case 0:if(fn=pn.payload,M=typeof fn=="function"?fn.call(rn,U,M):fn,M==null)break n;U=d({},U,M);break n;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,M=a.effects,M===null?a.effects=[u]:M.push(u))}else rn={eventTime:rn,lane:M,tag:u.tag,payload:u.payload,callback:u.callback,next:null},D===null?(_=D=rn,h=U):D=D.next=rn,l|=M;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;M=u,u=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);if(D===null&&(h=U),a.baseState=h,a.firstBaseUpdate=_,a.lastBaseUpdate=D,e=a.shared.interleaved,e!==null){a=e;do l|=a.lane,a=a.next;while(a!==e)}else o===null&&(a.shared.lanes=0);mr|=l,n.lanes=l,n.memoizedState=U}}function Yl(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],a=i.callback;if(a!==null){if(i.callback=null,i=t,typeof a!="function")throw Error(p(191,a));a.call(i)}}}var ql=new c.Component().refs;function ns(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:d({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var wa={isMounted:function(n){return(n=n._reactInternals)?jt(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Ie(),a=Qt(n),o=Lt(i,a);o.payload=e,t!=null&&(o.callback=t),e=Gt(n,o,a),e!==null&&(ft(e,n,a,i),_a(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Ie(),a=Qt(n),o=Lt(i,a);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=Gt(n,o,a),e!==null&&(ft(e,n,a,i),_a(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Ie(),i=Qt(n),a=Lt(t,i);a.tag=2,e!=null&&(a.callback=e),e=Gt(n,a,i),e!==null&&(ft(e,n,i,t),_a(e,n,i))}};function Ql(n,e,t,i,a,o,l){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!gi(t,i)||!gi(a,o):!0}function Xl(n,e,t){var i=!1,a=Vt,o=e.contextType;return typeof o=="object"&&o!==null?o=et(o):(a=Fe(e)?cr:Ae.current,i=e.contextTypes,o=(i=i!=null)?zr(n,a):Vt),e=new e(t,o),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wa,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=a,n.__reactInternalMemoizedMaskedChildContext=o),e}function Zl(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&wa.enqueueReplaceState(e,e.state,null)}function es(n,e,t,i){var a=n.stateNode;a.props=t,a.state=n.memoizedState,a.refs=ql,Zo(n);var o=e.contextType;typeof o=="object"&&o!==null?a.context=et(o):(o=Fe(e)?cr:Ae.current,a.context=zr(n,o)),a.state=n.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ns(n,e,o,t),a.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(e=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),e!==a.state&&wa.enqueueReplaceState(a,a.state,null),ba(n,t,a,i),a.state=n.memoizedState),typeof a.componentDidMount=="function"&&(n.flags|=4194308)}function wi(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(p(309));var i=t.stateNode}if(!i)throw Error(p(147,n));var a=i,o=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=a.refs;u===ql&&(u=a.refs={}),l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof n!="string")throw Error(p(284));if(!t._owner)throw Error(p(290,n))}return n}function Sa(n,e){throw n=Object.prototype.toString.call(e),Error(p(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function nu(n){var e=n._init;return e(n._payload)}function eu(n){function e(v,g){if(n){var y=v.deletions;y===null?(v.deletions=[g],v.flags|=16):y.push(g)}}function t(v,g){if(!n)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function i(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function a(v,g){return v=Zt(v,g),v.index=0,v.sibling=null,v}function o(v,g,y){return v.index=y,n?(y=v.alternate,y!==null?(y=y.index,y<g?(v.flags|=2,g):y):(v.flags|=2,g)):(v.flags|=1048576,g)}function l(v){return n&&v.alternate===null&&(v.flags|=2),v}function u(v,g,y,V){return g===null||g.tag!==6?(g=zs(y,v.mode,V),g.return=v,g):(g=a(g,y),g.return=v,g)}function h(v,g,y,V){var hn=y.type;return hn===on?D(v,g,y.props.children,V,y.key):g!==null&&(g.elementType===hn||typeof hn=="object"&&hn!==null&&hn.$$typeof===Gn&&nu(hn)===g.type)?(V=a(g,y.props),V.ref=wi(v,g,y),V.return=v,V):(V=Ha(y.type,y.key,y.props,null,v.mode,V),V.ref=wi(v,g,y),V.return=v,V)}function _(v,g,y,V){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Bs(y,v.mode,V),g.return=v,g):(g=a(g,y.children||[]),g.return=v,g)}function D(v,g,y,V,hn){return g===null||g.tag!==7?(g=_r(y,v.mode,V,hn),g.return=v,g):(g=a(g,y),g.return=v,g)}function U(v,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zs(""+g,v.mode,y),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Q:return y=Ha(g.type,g.key,g.props,null,v.mode,y),y.ref=wi(v,null,g),y.return=v,y;case Z:return g=Bs(g,v.mode,y),g.return=v,g;case Gn:var V=g._init;return U(v,V(g._payload),y)}if(Bn(g)||dn(g))return g=_r(g,v.mode,y,null),g.return=v,g;Sa(v,g)}return null}function M(v,g,y,V){var hn=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return hn!==null?null:u(v,g,""+y,V);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return y.key===hn?h(v,g,y,V):null;case Z:return y.key===hn?_(v,g,y,V):null;case Gn:return hn=y._init,M(v,g,hn(y._payload),V)}if(Bn(y)||dn(y))return hn!==null?null:D(v,g,y,V,null);Sa(v,y)}return null}function rn(v,g,y,V,hn){if(typeof V=="string"&&V!==""||typeof V=="number")return v=v.get(y)||null,u(g,v,""+V,hn);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Q:return v=v.get(V.key===null?y:V.key)||null,h(g,v,V,hn);case Z:return v=v.get(V.key===null?y:V.key)||null,_(g,v,V,hn);case Gn:var _n=V._init;return rn(v,g,y,_n(V._payload),hn)}if(Bn(V)||dn(V))return v=v.get(y)||null,D(g,v,V,hn,null);Sa(g,V)}return null}function fn(v,g,y,V){for(var hn=null,_n=null,bn=g,An=g=0,ke=null;bn!==null&&An<y.length;An++){bn.index>An?(ke=bn,bn=null):ke=bn.sibling;var qn=M(v,bn,y[An],V);if(qn===null){bn===null&&(bn=ke);break}n&&bn&&qn.alternate===null&&e(v,bn),g=o(qn,g,An),_n===null?hn=qn:_n.sibling=qn,_n=qn,bn=ke}if(An===y.length)return t(v,bn),pe&&fr(v,An),hn;if(bn===null){for(;An<y.length;An++)bn=U(v,y[An],V),bn!==null&&(g=o(bn,g,An),_n===null?hn=bn:_n.sibling=bn,_n=bn);return pe&&fr(v,An),hn}for(bn=i(v,bn);An<y.length;An++)ke=rn(bn,v,An,y[An],V),ke!==null&&(n&&ke.alternate!==null&&bn.delete(ke.key===null?An:ke.key),g=o(ke,g,An),_n===null?hn=ke:_n.sibling=ke,_n=ke);return n&&bn.forEach(function(nr){return e(v,nr)}),pe&&fr(v,An),hn}function pn(v,g,y,V){var hn=dn(y);if(typeof hn!="function")throw Error(p(150));if(y=hn.call(y),y==null)throw Error(p(151));for(var _n=hn=null,bn=g,An=g=0,ke=null,qn=y.next();bn!==null&&!qn.done;An++,qn=y.next()){bn.index>An?(ke=bn,bn=null):ke=bn.sibling;var nr=M(v,bn,qn.value,V);if(nr===null){bn===null&&(bn=ke);break}n&&bn&&nr.alternate===null&&e(v,bn),g=o(nr,g,An),_n===null?hn=nr:_n.sibling=nr,_n=nr,bn=ke}if(qn.done)return t(v,bn),pe&&fr(v,An),hn;if(bn===null){for(;!qn.done;An++,qn=y.next())qn=U(v,qn.value,V),qn!==null&&(g=o(qn,g,An),_n===null?hn=qn:_n.sibling=qn,_n=qn);return pe&&fr(v,An),hn}for(bn=i(v,bn);!qn.done;An++,qn=y.next())qn=rn(bn,v,An,qn.value,V),qn!==null&&(n&&qn.alternate!==null&&bn.delete(qn.key===null?An:qn.key),g=o(qn,g,An),_n===null?hn=qn:_n.sibling=qn,_n=qn);return n&&bn.forEach(function(bf){return e(v,bf)}),pe&&fr(v,An),hn}function ve(v,g,y,V){if(typeof y=="object"&&y!==null&&y.type===on&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:n:{for(var hn=y.key,_n=g;_n!==null;){if(_n.key===hn){if(hn=y.type,hn===on){if(_n.tag===7){t(v,_n.sibling),g=a(_n,y.props.children),g.return=v,v=g;break n}}else if(_n.elementType===hn||typeof hn=="object"&&hn!==null&&hn.$$typeof===Gn&&nu(hn)===_n.type){t(v,_n.sibling),g=a(_n,y.props),g.ref=wi(v,_n,y),g.return=v,v=g;break n}t(v,_n);break}else e(v,_n);_n=_n.sibling}y.type===on?(g=_r(y.props.children,v.mode,V,y.key),g.return=v,v=g):(V=Ha(y.type,y.key,y.props,null,v.mode,V),V.ref=wi(v,g,y),V.return=v,v=V)}return l(v);case Z:n:{for(_n=y.key;g!==null;){if(g.key===_n)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(v,g.sibling),g=a(g,y.children||[]),g.return=v,v=g;break n}else{t(v,g);break}else e(v,g);g=g.sibling}g=Bs(y,v.mode,V),g.return=v,v=g}return l(v);case Gn:return _n=y._init,ve(v,g,_n(y._payload),V)}if(Bn(y))return fn(v,g,y,V);if(dn(y))return pn(v,g,y,V);Sa(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(v,g.sibling),g=a(g,y),g.return=v,v=g):(t(v,g),g=zs(y,v.mode,V),g.return=v,v=g),l(v)):t(v,g)}return ve}var Vr=eu(!0),tu=eu(!1),Si={},xt=Wt(Si),Ti=Wt(Si),ji=Wt(Si);function hr(n){if(n===Si)throw Error(p(174));return n}function ts(n,e){switch(ie(ji,e),ie(Ti,n),ie(xt,Si),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mt(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Mt(e,n)}le(xt),ie(xt,e)}function $r(){le(xt),le(Ti),le(ji)}function ru(n){hr(ji.current);var e=hr(xt.current),t=Mt(e,n.type);e!==t&&(ie(Ti,n),ie(xt,t))}function rs(n){Ti.current===n&&(le(xt),le(Ti))}var he=Wt(0);function Ta(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var is=[];function as(){for(var n=0;n<is.length;n++)is[n]._workInProgressVersionPrimary=null;is.length=0}var ja=L.ReactCurrentDispatcher,os=L.ReactCurrentBatchConfig,gr=0,ge=null,be=null,Te=null,ka=!1,ki=!1,Ei=0,Hd=0;function Ce(){throw Error(p(321))}function ss(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!st(n[t],e[t]))return!1;return!0}function ls(n,e,t,i,a,o){if(gr=o,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=n===null||n.memoizedState===null?Kd:Gd,n=t(i,a),ki){o=0;do{if(ki=!1,Ei=0,25<=o)throw Error(p(301));o+=1,Te=be=null,e.updateQueue=null,ja.current=Jd,n=t(i,a)}while(ki)}if(ja.current=Oa,e=be!==null&&be.next!==null,gr=0,Te=be=ge=null,ka=!1,e)throw Error(p(300));return n}function us(){var n=Ei!==0;return Ei=0,n}function _t(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ge.memoizedState=Te=n:Te=Te.next=n,Te}function tt(){if(be===null){var n=ge.alternate;n=n!==null?n.memoizedState:null}else n=be.next;var e=Te===null?ge.memoizedState:Te.next;if(e!==null)Te=e,be=n;else{if(n===null)throw Error(p(310));be=n,n={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Te===null?ge.memoizedState=Te=n:Te=Te.next=n}return Te}function Ni(n,e){return typeof e=="function"?e(n):e}function cs(n){var e=tt(),t=e.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=n;var i=be,a=i.baseQueue,o=t.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}i.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,i=i.baseState;var u=l=null,h=null,_=o;do{var D=_.lane;if((gr&D)===D)h!==null&&(h=h.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),i=_.hasEagerState?_.eagerState:n(i,_.action);else{var U={lane:D,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};h===null?(u=h=U,l=i):h=h.next=U,ge.lanes|=D,mr|=D}_=_.next}while(_!==null&&_!==o);h===null?l=i:h.next=u,st(i,e.memoizedState)||(Ue=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=h,t.lastRenderedState=i}if(n=t.interleaved,n!==null){a=n;do o=a.lane,ge.lanes|=o,mr|=o,a=a.next;while(a!==n)}else a===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ds(n){var e=tt(),t=e.queue;if(t===null)throw Error(p(311));t.lastRenderedReducer=n;var i=t.dispatch,a=t.pending,o=e.memoizedState;if(a!==null){t.pending=null;var l=a=a.next;do o=n(o,l.action),l=l.next;while(l!==a);st(o,e.memoizedState)||(Ue=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,i]}function iu(){}function au(n,e){var t=ge,i=tt(),a=e(),o=!st(i.memoizedState,a);if(o&&(i.memoizedState=a,Ue=!0),i=i.queue,fs(lu.bind(null,t,i,n),[n]),i.getSnapshot!==e||o||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,Oi(9,su.bind(null,t,i,a,e),void 0,null),je===null)throw Error(p(349));(gr&30)!==0||ou(t,e,a)}return a}function ou(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function su(n,e,t,i){e.value=t,e.getSnapshot=i,uu(e)&&cu(n)}function lu(n,e,t){return t(function(){uu(e)&&cu(n)})}function uu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!st(n,t)}catch{return!0}}function cu(n){var e=Ct(n,1);e!==null&&ft(e,n,1,-1)}function du(n){var e=_t();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:n},e.queue=n,n=n.dispatch=$d.bind(null,ge,n),[e.memoizedState,n]}function Oi(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function fu(){return tt().memoizedState}function Ea(n,e,t,i){var a=_t();ge.flags|=n,a.memoizedState=Oi(1|e,t,void 0,i===void 0?null:i)}function Na(n,e,t,i){var a=tt();i=i===void 0?null:i;var o=void 0;if(be!==null){var l=be.memoizedState;if(o=l.destroy,i!==null&&ss(i,l.deps)){a.memoizedState=Oi(e,t,o,i);return}}ge.flags|=n,a.memoizedState=Oi(1|e,t,o,i)}function pu(n,e){return Ea(8390656,8,n,e)}function fs(n,e){return Na(2048,8,n,e)}function hu(n,e){return Na(4,2,n,e)}function gu(n,e){return Na(4,4,n,e)}function mu(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vu(n,e,t){return t=t!=null?t.concat([n]):null,Na(4,4,mu.bind(null,e,n),t)}function ps(){}function yu(n,e){var t=tt();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ss(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function xu(n,e){var t=tt();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&ss(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _u(n,e,t){return(gr&21)===0?(n.baseState&&(n.baseState=!1,Ue=!0),n.memoizedState=t):(st(t,e)||(t=Ji(),ge.lanes|=t,mr|=t,n.baseState=!0),e)}function Wd(n,e){var t=Xn;Xn=t!==0&&4>t?t:4,n(!0);var i=os.transition;os.transition={};try{n(!1),e()}finally{Xn=t,os.transition=i}}function bu(){return tt().memoizedState}function Vd(n,e,t){var i=Qt(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},wu(n))Su(e,t);else if(t=Kl(n,e,t,i),t!==null){var a=Ie();ft(t,n,i,a),Tu(t,e,i)}}function $d(n,e,t){var i=Qt(n),a={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(wu(n))Su(e,a);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,t);if(a.hasEagerState=!0,a.eagerState=u,st(u,l)){var h=e.interleaved;h===null?(a.next=a,Xo(e)):(a.next=h.next,h.next=a),e.interleaved=a;return}}catch{}finally{}t=Kl(n,e,a,i),t!==null&&(a=Ie(),ft(t,n,i,a),Tu(t,e,i))}}function wu(n){var e=n.alternate;return n===ge||e!==null&&e===ge}function Su(n,e){ki=ka=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Tu(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ze(n,t)}}var Oa={readContext:et,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},Kd={readContext:et,useCallback:function(n,e){return _t().memoizedState=[n,e===void 0?null:e],n},useContext:et,useEffect:pu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ea(4194308,4,mu.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ea(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ea(4,2,n,e)},useMemo:function(n,e){var t=_t();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_t();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Vd.bind(null,ge,n),[i.memoizedState,n]},useRef:function(n){var e=_t();return n={current:n},e.memoizedState=n},useState:du,useDebugValue:ps,useDeferredValue:function(n){return _t().memoizedState=n},useTransition:function(){var n=du(!1),e=n[0];return n=Wd.bind(null,n[1]),_t().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ge,a=_t();if(pe){if(t===void 0)throw Error(p(407));t=t()}else{if(t=e(),je===null)throw Error(p(349));(gr&30)!==0||ou(i,e,t)}a.memoizedState=t;var o={value:t,getSnapshot:e};return a.queue=o,pu(lu.bind(null,i,o,n),[n]),i.flags|=2048,Oi(9,su.bind(null,i,o,t,e),void 0,null),t},useId:function(){var n=_t(),e=je.identifierPrefix;if(pe){var t=At,i=Ot;t=(i&~(1<<32-Qn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ei++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Hd++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Gd={readContext:et,useCallback:yu,useContext:et,useEffect:fs,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:xu,useReducer:cs,useRef:fu,useState:function(){return cs(Ni)},useDebugValue:ps,useDeferredValue:function(n){var e=tt();return _u(e,be.memoizedState,n)},useTransition:function(){var n=cs(Ni)[0],e=tt().memoizedState;return[n,e]},useMutableSource:iu,useSyncExternalStore:au,useId:bu,unstable_isNewReconciler:!1},Jd={readContext:et,useCallback:yu,useContext:et,useEffect:fs,useImperativeHandle:vu,useInsertionEffect:hu,useLayoutEffect:gu,useMemo:xu,useReducer:ds,useRef:fu,useState:function(){return ds(Ni)},useDebugValue:ps,useDeferredValue:function(n){var e=tt();return be===null?e.memoizedState=n:_u(e,be.memoizedState,n)},useTransition:function(){var n=ds(Ni)[0],e=tt().memoizedState;return[n,e]},useMutableSource:iu,useSyncExternalStore:au,useId:bu,unstable_isNewReconciler:!1};function Kr(n,e){try{var t="",i=e;do t+=Un(i),i=i.return;while(i);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:e,stack:a,digest:null}}function hs(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gs(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Yd=typeof WeakMap=="function"?WeakMap:Map;function ju(n,e,t){t=Lt(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ia||(Ia=!0,As=i),gs(n,e)},t}function ku(n,e,t){t=Lt(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var a=e.value;t.payload=function(){return i(a)},t.callback=function(){gs(n,e)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){gs(n,e),typeof i!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),t}function Eu(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Yd;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(t)||(a.add(t),n=cf.bind(null,n,e,t),e.then(n,n))}function Nu(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Ou(n,e,t,i,a){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Lt(-1,1),e.tag=2,Gt(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=a,n)}var qd=L.ReactCurrentOwner,Ue=!1;function Me(n,e,t,i){e.child=n===null?tu(e,null,t,i):Vr(e,n.child,t,i)}function Au(n,e,t,i,a){t=t.render;var o=e.ref;return Wr(e,a),i=ls(n,e,t,i,o,a),t=us(),n!==null&&!Ue?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Rt(n,e,a)):(pe&&t&&Wo(e),e.flags|=1,Me(n,e,i,a),e.child)}function Cu(n,e,t,i,a){if(n===null){var o=t.type;return typeof o=="function"&&!Ds(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=o,Lu(n,e,o,i,a)):(n=Ha(t.type,null,i,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(o=n.child,(n.lanes&a)===0){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:gi,t(l,i)&&n.ref===e.ref)return Rt(n,e,a)}return e.flags|=1,n=Zt(o,i),n.ref=e.ref,n.return=e,e.child=n}function Lu(n,e,t,i,a){if(n!==null){var o=n.memoizedProps;if(gi(o,i)&&n.ref===e.ref)if(Ue=!1,e.pendingProps=i=o,(n.lanes&a)!==0)(n.flags&131072)!==0&&(Ue=!0);else return e.lanes=n.lanes,Rt(n,e,a)}return ms(n,e,t,i,a)}function Ru(n,e,t){var i=e.pendingProps,a=i.children,o=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Jr,qe),qe|=t;else{if((t&1073741824)===0)return n=o!==null?o.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ie(Jr,qe),qe|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:t,ie(Jr,qe),qe|=i}else o!==null?(i=o.baseLanes|t,e.memoizedState=null):i=t,ie(Jr,qe),qe|=i;return Me(n,e,a,t),e.child}function Pu(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ms(n,e,t,i,a){var o=Fe(t)?cr:Ae.current;return o=zr(e,o),Wr(e,a),t=ls(n,e,t,i,o,a),i=us(),n!==null&&!Ue?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~a,Rt(n,e,a)):(pe&&i&&Wo(e),e.flags|=1,Me(n,e,t,a),e.child)}function Mu(n,e,t,i,a){if(Fe(t)){var o=!0;pa(e)}else o=!1;if(Wr(e,a),e.stateNode===null)Ca(n,e),Xl(e,t,i),es(e,t,i,a),i=!0;else if(n===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var h=l.context,_=t.contextType;typeof _=="object"&&_!==null?_=et(_):(_=Fe(t)?cr:Ae.current,_=zr(e,_));var D=t.getDerivedStateFromProps,U=typeof D=="function"||typeof l.getSnapshotBeforeUpdate=="function";U||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||h!==_)&&Zl(e,l,i,_),Kt=!1;var M=e.memoizedState;l.state=M,ba(e,i,l,a),h=e.memoizedState,u!==i||M!==h||Be.current||Kt?(typeof D=="function"&&(ns(e,t,D,i),h=e.memoizedState),(u=Kt||Ql(e,t,u,i,M,h,_))?(U||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=_,i=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Gl(n,e),u=e.memoizedProps,_=e.type===e.elementType?u:ut(e.type,u),l.props=_,U=e.pendingProps,M=l.context,h=t.contextType,typeof h=="object"&&h!==null?h=et(h):(h=Fe(t)?cr:Ae.current,h=zr(e,h));var rn=t.getDerivedStateFromProps;(D=typeof rn=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==U||M!==h)&&Zl(e,l,i,h),Kt=!1,M=e.memoizedState,l.state=M,ba(e,i,l,a);var fn=e.memoizedState;u!==U||M!==fn||Be.current||Kt?(typeof rn=="function"&&(ns(e,t,rn,i),fn=e.memoizedState),(_=Kt||Ql(e,t,_,i,M,fn,h)||!1)?(D||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,fn,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,fn,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=fn),l.props=i,l.state=fn,l.context=h,i=_):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&M===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&M===n.memoizedState||(e.flags|=1024),i=!1)}return vs(n,e,t,i,o,a)}function vs(n,e,t,i,a,o){Pu(n,e);var l=(e.flags&128)!==0;if(!i&&!l)return a&&Bl(e,t,!1),Rt(n,e,o);i=e.stateNode,qd.current=e;var u=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&l?(e.child=Vr(e,n.child,null,o),e.child=Vr(e,null,u,o)):Me(n,e,u,o),e.memoizedState=i.state,a&&Bl(e,t,!0),e.child}function Iu(n){var e=n.stateNode;e.pendingContext?Dl(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Dl(n,e.context,!1),ts(n,e.containerInfo)}function Du(n,e,t,i,a){return Ur(),Go(a),e.flags|=256,Me(n,e,t,i),e.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function xs(n){return{baseLanes:n,cachePool:null,transitions:null}}function zu(n,e,t){var i=e.pendingProps,a=he.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=n!==null&&n.memoizedState===null?!1:(a&2)!==0),u?(o=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(a|=1),ie(he,a&1),n===null)return Ko(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(l=i.children,n=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},(i&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Wa(l,i,0,null),n=_r(n,i,t,null),o.return=e,n.return=e,o.sibling=n,e.child=o,e.child.memoizedState=xs(t),e.memoizedState=ys,n):_s(e,l));if(a=n.memoizedState,a!==null&&(u=a.dehydrated,u!==null))return Qd(n,e,l,i,u,a,t);if(o){o=i.fallback,l=e.mode,a=n.child,u=a.sibling;var h={mode:"hidden",children:i.children};return(l&1)===0&&e.child!==a?(i=e.child,i.childLanes=0,i.pendingProps=h,e.deletions=null):(i=Zt(a,h),i.subtreeFlags=a.subtreeFlags&14680064),u!==null?o=Zt(u,o):(o=_r(o,l,t,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=n.child.memoizedState,l=l===null?xs(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=n.childLanes&~t,e.memoizedState=ys,i}return o=n.child,n=o.sibling,i=Zt(o,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function _s(n,e){return e=Wa({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Aa(n,e,t,i){return i!==null&&Go(i),Vr(e,n.child,null,t),n=_s(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Qd(n,e,t,i,a,o,l){if(t)return e.flags&256?(e.flags&=-257,i=hs(Error(p(422))),Aa(n,e,l,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(o=i.fallback,a=e.mode,i=Wa({mode:"visible",children:i.children},a,0,null),o=_r(o,a,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,(e.mode&1)!==0&&Vr(e,n.child,null,l),e.child.memoizedState=xs(l),e.memoizedState=ys,o);if((e.mode&1)===0)return Aa(n,e,l,null);if(a.data==="$!"){if(i=a.nextSibling&&a.nextSibling.dataset,i)var u=i.dgst;return i=u,o=Error(p(419)),i=hs(o,i,void 0),Aa(n,e,l,i)}if(u=(l&n.childLanes)!==0,Ue||u){if(i=je,i!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|l))!==0?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ct(n,a),ft(i,n,a,-1))}return Is(),i=hs(Error(p(421))),Aa(n,e,l,i)}return a.data==="$?"?(e.flags|=128,e.child=n.child,e=df.bind(null,n),a._reactRetry=e,null):(n=o.treeContext,Ye=Ht(a.nextSibling),Je=e,pe=!0,lt=null,n!==null&&(Ze[nt++]=Ot,Ze[nt++]=At,Ze[nt++]=dr,Ot=n.id,At=n.overflow,dr=e),e=_s(e,i.children),e.flags|=4096,e)}function Bu(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Qo(n.return,e,t)}function bs(n,e,t,i,a){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:a}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=t,o.tailMode=a)}function Fu(n,e,t){var i=e.pendingProps,a=i.revealOrder,o=i.tail;if(Me(n,e,i.children,t),i=he.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bu(n,t,e);else if(n.tag===19)Bu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ie(he,i),(e.mode&1)===0)e.memoizedState=null;else switch(a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&Ta(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),bs(e,!1,a,t,o);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Ta(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}bs(e,!0,t,null,o);break;case"together":bs(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Rt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),mr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(p(153));if(e.child!==null){for(n=e.child,t=Zt(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Zt(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Xd(n,e,t){switch(e.tag){case 3:Iu(e),Ur();break;case 5:ru(e);break;case 1:Fe(e.type)&&pa(e);break;case 4:ts(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,a=e.memoizedProps.value;ie(ya,i._currentValue),i._currentValue=a;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ie(he,he.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?zu(n,e,t):(ie(he,he.current&1),n=Rt(n,e,t),n!==null?n.sibling:null);ie(he,he.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Fu(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(he,he.current),i)break;return null;case 22:case 23:return e.lanes=0,Ru(n,e,t)}return Rt(n,e,t)}var Uu,ws,Hu,Wu;Uu=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ws=function(){},Hu=function(n,e,t,i){var a=n.memoizedProps;if(a!==i){n=e.stateNode,hr(xt.current);var o=null;switch(t){case"input":a=En(n,a),i=En(n,i),o=[];break;case"select":a=d({},a,{value:void 0}),i=d({},i,{value:void 0}),o=[];break;case"textarea":a=ce(n,a),i=ce(n,i),o=[];break;default:typeof a.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ca)}ei(t,i);var l;t=null;for(_ in a)if(!i.hasOwnProperty(_)&&a.hasOwnProperty(_)&&a[_]!=null)if(_==="style"){var u=a[_];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(j.hasOwnProperty(_)?o||(o=[]):(o=o||[]).push(_,null));for(_ in i){var h=i[_];if(u=a?.[_],i.hasOwnProperty(_)&&h!==u&&(h!=null||u!=null))if(_==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(t||(t={}),t[l]=h[l])}else t||(o||(o=[]),o.push(_,t)),t=h;else _==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(_,h)):_==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(_,""+h):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(j.hasOwnProperty(_)?(h!=null&&_==="onScroll"&&se("scroll",n),o||u===h||(o=[])):(o=o||[]).push(_,h))}t&&(o=o||[]).push("style",t);var _=o;(e.updateQueue=_)&&(e.flags|=4)}},Wu=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ai(n,e){if(!pe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Le(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags&14680064,i|=a.flags&14680064,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Zd(n,e,t){var i=e.pendingProps;switch(Vo(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return Fe(e.type)&&fa(),Le(e),null;case 3:return i=e.stateNode,$r(),le(Be),le(Ae),as(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(va(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,lt!==null&&(Rs(lt),lt=null))),ws(n,e),Le(e),null;case 5:rs(e);var a=hr(ji.current);if(t=e.type,n!==null&&e.stateNode!=null)Hu(n,e,t,i,a),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(p(166));return Le(e),null}if(n=hr(xt.current),va(e)){i=e.stateNode,t=e.type;var o=e.memoizedProps;switch(i[yt]=e,i[_i]=o,n=(e.mode&1)!==0,t){case"dialog":se("cancel",i),se("close",i);break;case"iframe":case"object":case"embed":se("load",i);break;case"video":case"audio":for(a=0;a<vi.length;a++)se(vi[a],i);break;case"source":se("error",i);break;case"img":case"image":case"link":se("error",i),se("load",i);break;case"details":se("toggle",i);break;case"input":Hn(i,o),se("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},se("invalid",i);break;case"textarea":Ee(i,o),se("invalid",i)}ei(t,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?i.textContent!==u&&(o.suppressHydrationWarning!==!0&&ua(i.textContent,u,n),a=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ua(i.textContent,u,n),a=["children",""+u]):j.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&se("scroll",i)}switch(t){case"input":nn(i),Wn(i,o,!0);break;case"textarea":nn(i),Zr(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ca)}i=a,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=wt(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=l.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=l.createElement(t,{is:i.is}):(n=l.createElement(t),t==="select"&&(l=n,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):n=l.createElementNS(n,t),n[yt]=e,n[_i]=i,Uu(n,e,!1,!1),e.stateNode=n;n:{switch(l=ti(t,i),t){case"dialog":se("cancel",n),se("close",n),a=i;break;case"iframe":case"object":case"embed":se("load",n),a=i;break;case"video":case"audio":for(a=0;a<vi.length;a++)se(vi[a],n);a=i;break;case"source":se("error",n),a=i;break;case"img":case"image":case"link":se("error",n),se("load",n),a=i;break;case"details":se("toggle",n),a=i;break;case"input":Hn(n,i),a=En(n,i),se("invalid",n);break;case"option":a=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},a=d({},i,{value:void 0}),se("invalid",n);break;case"textarea":Ee(n,i),a=ce(n,i),se("invalid",n);break;default:a=i}ei(t,a),u=a;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?ni(n,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&zi(n,h)):o==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&tr(n,h):typeof h=="number"&&tr(n,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(j.hasOwnProperty(o)?h!=null&&o==="onScroll"&&se("scroll",n):h!=null&&G(n,o,h,l))}switch(t){case"input":nn(n),Wn(n,i,!1);break;case"textarea":nn(n),Zr(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Sn(i.value));break;case"select":n.multiple=!!i.multiple,o=i.value,o!=null?X(n,!!i.multiple,o,!1):i.defaultValue!=null&&X(n,!!i.multiple,i.defaultValue,!0);break;default:typeof a.onClick=="function"&&(n.onclick=ca)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(n&&e.stateNode!=null)Wu(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(p(166));if(t=hr(ji.current),hr(xt.current),va(e)){if(i=e.stateNode,t=e.memoizedProps,i[yt]=e,(o=i.nodeValue!==t)&&(n=Je,n!==null))switch(n.tag){case 3:ua(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ua(i.nodeValue,t,(n.mode&1)!==0)}o&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[yt]=e,e.stateNode=i}return Le(e),null;case 13:if(le(he),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pe&&Ye!==null&&(e.mode&1)!==0&&(e.flags&128)===0)$l(),Ur(),e.flags|=98560,o=!1;else if(o=va(e),i!==null&&i.dehydrated!==null){if(n===null){if(!o)throw Error(p(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(p(317));o[yt]=e}else Ur(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Le(e),o=!1}else lt!==null&&(Rs(lt),lt=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(he.current&1)!==0?we===0&&(we=3):Is())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return $r(),ws(n,e),n===null&&yi(e.stateNode.containerInfo),Le(e),null;case 10:return qo(e.type._context),Le(e),null;case 17:return Fe(e.type)&&fa(),Le(e),null;case 19:if(le(he),o=e.memoizedState,o===null)return Le(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)Ai(o,!1);else{if(we!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=Ta(n),l!==null){for(e.flags|=128,Ai(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)o=t,n=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,n=l.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ie(he,he.current&1|2),e.child}n=n.sibling}o.tail!==null&&fe()>Yr&&(e.flags|=128,i=!0,Ai(o,!1),e.lanes=4194304)}else{if(!i)if(n=Ta(l),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ai(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!pe)return Le(e),null}else 2*fe()-o.renderingStartTime>Yr&&t!==1073741824&&(e.flags|=128,i=!0,Ai(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(t=o.last,t!==null?t.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=fe(),e.sibling=null,t=he.current,ie(he,i?t&1|2:t&1),e):(Le(e),null);case 22:case 23:return Ms(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(qe&1073741824)!==0&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(p(156,e.tag))}function nf(n,e){switch(Vo(e),e.tag){case 1:return Fe(e.type)&&fa(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $r(),le(Be),le(Ae),as(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return rs(e),null;case 13:if(le(he),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(p(340));Ur()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return le(he),null;case 4:return $r(),null;case 10:return qo(e.type._context),null;case 22:case 23:return Ms(),null;case 24:return null;default:return null}}var La=!1,Re=!1,ef=typeof WeakSet=="function"?WeakSet:Set,un=null;function Gr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){me(n,e,i)}else t.current=null}function Ss(n,e,t){try{t()}catch(i){me(n,e,i)}}var Vu=!1;function tf(n,e){if(Mo=Xi,n=bl(),Eo(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break n}var l=0,u=-1,h=-1,_=0,D=0,U=n,M=null;e:for(;;){for(var rn;U!==t||a!==0&&U.nodeType!==3||(u=l+a),U!==o||i!==0&&U.nodeType!==3||(h=l+i),U.nodeType===3&&(l+=U.nodeValue.length),(rn=U.firstChild)!==null;)M=U,U=rn;for(;;){if(U===n)break e;if(M===t&&++_===a&&(u=l),M===o&&++D===i&&(h=l),(rn=U.nextSibling)!==null)break;U=M,M=U.parentNode}U=rn}t=u===-1||h===-1?null:{start:u,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Io={focusedElem:n,selectionRange:t},Xi=!1,un=e;un!==null;)if(e=un,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,un=n;else for(;un!==null;){e=un;try{var fn=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(fn!==null){var pn=fn.memoizedProps,ve=fn.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?pn:ut(e.type,pn),ve);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163))}}catch(V){me(e,e.return,V)}if(n=e.sibling,n!==null){n.return=e.return,un=n;break}un=e.return}return fn=Vu,Vu=!1,fn}function Ci(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var o=a.destroy;a.destroy=void 0,o!==void 0&&Ss(e,t,o)}a=a.next}while(a!==i)}}function Ra(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ts(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function $u(n){var e=n.alternate;e!==null&&(n.alternate=null,$u(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[yt],delete e[_i],delete e[Fo],delete e[zd],delete e[Bd])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ku(n){return n.tag===5||n.tag===3||n.tag===4}function Gu(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ku(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function js(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ca));else if(i!==4&&(n=n.child,n!==null))for(js(n,e,t),n=n.sibling;n!==null;)js(n,e,t),n=n.sibling}function ks(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ks(n,e,t),n=n.sibling;n!==null;)ks(n,e,t),n=n.sibling}var Ne=null,ct=!1;function Jt(n,e,t){for(t=t.child;t!==null;)Ju(n,e,t),t=t.sibling}function Ju(n,e,t){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(gn,t)}catch{}switch(t.tag){case 5:Re||Gr(t,e);case 6:var i=Ne,a=ct;Ne=null,Jt(n,e,t),Ne=i,ct=a,Ne!==null&&(ct?(n=Ne,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(ct?(n=Ne,t=t.stateNode,n.nodeType===8?Bo(n.parentNode,t):n.nodeType===1&&Bo(n,t),ui(n)):Bo(Ne,t.stateNode));break;case 4:i=Ne,a=ct,Ne=t.stateNode.containerInfo,ct=!0,Jt(n,e,t),Ne=i,ct=a;break;case 0:case 11:case 14:case 15:if(!Re&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){a=i=i.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Ss(t,e,l),a=a.next}while(a!==i)}Jt(n,e,t);break;case 1:if(!Re&&(Gr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){me(t,e,u)}Jt(n,e,t);break;case 21:Jt(n,e,t);break;case 22:t.mode&1?(Re=(i=Re)||t.memoizedState!==null,Jt(n,e,t),Re=i):Jt(n,e,t);break;default:Jt(n,e,t)}}function Yu(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new ef),e.forEach(function(i){var a=ff.bind(null,n,i);t.has(i)||(t.add(i),i.then(a,a))})}}function dt(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];try{var o=n,l=e,u=l;n:for(;u!==null;){switch(u.tag){case 5:Ne=u.stateNode,ct=!1;break n;case 3:Ne=u.stateNode.containerInfo,ct=!0;break n;case 4:Ne=u.stateNode.containerInfo,ct=!0;break n}u=u.return}if(Ne===null)throw Error(p(160));Ju(o,l,a),Ne=null,ct=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(_){me(a,e,_)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qu(e,n),e=e.sibling}function qu(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(dt(e,n),bt(n),i&4){try{Ci(3,n,n.return),Ra(3,n)}catch(pn){me(n,n.return,pn)}try{Ci(5,n,n.return)}catch(pn){me(n,n.return,pn)}}break;case 1:dt(e,n),bt(n),i&512&&t!==null&&Gr(t,t.return);break;case 5:if(dt(e,n),bt(n),i&512&&t!==null&&Gr(t,t.return),n.flags&32){var a=n.stateNode;try{tr(a,"")}catch(pn){me(n,n.return,pn)}}if(i&4&&(a=n.stateNode,a!=null)){var o=n.memoizedProps,l=t!==null?t.memoizedProps:o,u=n.type,h=n.updateQueue;if(n.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Dn(a,o),ti(u,l);var _=ti(u,o);for(l=0;l<h.length;l+=2){var D=h[l],U=h[l+1];D==="style"?ni(a,U):D==="dangerouslySetInnerHTML"?zi(a,U):D==="children"?tr(a,U):G(a,D,U,_)}switch(u){case"input":zn(a,o);break;case"textarea":$e(a,o);break;case"select":var M=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var rn=o.value;rn!=null?X(a,!!o.multiple,rn,!1):M!==!!o.multiple&&(o.defaultValue!=null?X(a,!!o.multiple,o.defaultValue,!0):X(a,!!o.multiple,o.multiple?[]:"",!1))}a[_i]=o}catch(pn){me(n,n.return,pn)}}break;case 6:if(dt(e,n),bt(n),i&4){if(n.stateNode===null)throw Error(p(162));a=n.stateNode,o=n.memoizedProps;try{a.nodeValue=o}catch(pn){me(n,n.return,pn)}}break;case 3:if(dt(e,n),bt(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ui(e.containerInfo)}catch(pn){me(n,n.return,pn)}break;case 4:dt(e,n),bt(n);break;case 13:dt(e,n),bt(n),a=n.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Os=fe())),i&4&&Yu(n);break;case 22:if(D=t!==null&&t.memoizedState!==null,n.mode&1?(Re=(_=Re)||D,dt(e,n),Re=_):dt(e,n),bt(n),i&8192){if(_=n.memoizedState!==null,(n.stateNode.isHidden=_)&&!D&&(n.mode&1)!==0)for(un=n,D=n.child;D!==null;){for(U=un=D;un!==null;){switch(M=un,rn=M.child,M.tag){case 0:case 11:case 14:case 15:Ci(4,M,M.return);break;case 1:Gr(M,M.return);var fn=M.stateNode;if(typeof fn.componentWillUnmount=="function"){i=M,t=M.return;try{e=i,fn.props=e.memoizedProps,fn.state=e.memoizedState,fn.componentWillUnmount()}catch(pn){me(i,t,pn)}}break;case 5:Gr(M,M.return);break;case 22:if(M.memoizedState!==null){Zu(U);continue}}rn!==null?(rn.return=M,un=rn):Zu(U)}D=D.sibling}n:for(D=null,U=n;;){if(U.tag===5){if(D===null){D=U;try{a=U.stateNode,_?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=U.stateNode,h=U.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Bi("display",l))}catch(pn){me(n,n.return,pn)}}}else if(U.tag===6){if(D===null)try{U.stateNode.nodeValue=_?"":U.memoizedProps}catch(pn){me(n,n.return,pn)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===n)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===n)break n;for(;U.sibling===null;){if(U.return===null||U.return===n)break n;D===U&&(D=null),U=U.return}D===U&&(D=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:dt(e,n),bt(n),i&4&&Yu(n);break;case 21:break;default:dt(e,n),bt(n)}}function bt(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Ku(t)){var i=t;break n}t=t.return}throw Error(p(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(tr(a,""),i.flags&=-33);var o=Gu(n);ks(n,o,a);break;case 3:case 4:var l=i.stateNode.containerInfo,u=Gu(n);js(n,u,l);break;default:throw Error(p(161))}}catch(h){me(n,n.return,h)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function rf(n,e,t){un=n,Qu(n)}function Qu(n,e,t){for(var i=(n.mode&1)!==0;un!==null;){var a=un,o=a.child;if(a.tag===22&&i){var l=a.memoizedState!==null||La;if(!l){var u=a.alternate,h=u!==null&&u.memoizedState!==null||Re;u=La;var _=Re;if(La=l,(Re=h)&&!_)for(un=a;un!==null;)l=un,h=l.child,l.tag===22&&l.memoizedState!==null?nc(a):h!==null?(h.return=l,un=h):nc(a);for(;o!==null;)un=o,Qu(o),o=o.sibling;un=a,La=u,Re=_}Xu(n)}else(a.subtreeFlags&8772)!==0&&o!==null?(o.return=a,un=o):Xu(n)}}function Xu(n){for(;un!==null;){var e=un;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Re||Ra(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Re)if(t===null)i.componentDidMount();else{var a=e.elementType===e.type?t.memoizedProps:ut(e.type,t.memoizedProps);i.componentDidUpdate(a,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Yl(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Yl(e,l,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var _=e.alternate;if(_!==null){var D=_.memoizedState;if(D!==null){var U=D.dehydrated;U!==null&&ui(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(p(163))}Re||e.flags&512&&Ts(e)}catch(M){me(e,e.return,M)}}if(e===n){un=null;break}if(t=e.sibling,t!==null){t.return=e.return,un=t;break}un=e.return}}function Zu(n){for(;un!==null;){var e=un;if(e===n){un=null;break}var t=e.sibling;if(t!==null){t.return=e.return,un=t;break}un=e.return}}function nc(n){for(;un!==null;){var e=un;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ra(4,e)}catch(h){me(e,t,h)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var a=e.return;try{i.componentDidMount()}catch(h){me(e,a,h)}}var o=e.return;try{Ts(e)}catch(h){me(e,o,h)}break;case 5:var l=e.return;try{Ts(e)}catch(h){me(e,l,h)}}}catch(h){me(e,e.return,h)}if(e===n){un=null;break}var u=e.sibling;if(u!==null){u.return=e.return,un=u;break}un=e.return}}var af=Math.ceil,Pa=L.ReactCurrentDispatcher,Es=L.ReactCurrentOwner,rt=L.ReactCurrentBatchConfig,Jn=0,je=null,_e=null,Oe=0,qe=0,Jr=Wt(0),we=0,Li=null,mr=0,Ma=0,Ns=0,Ri=null,He=null,Os=0,Yr=1/0,Pt=null,Ia=!1,As=null,Yt=null,Da=!1,qt=null,za=0,Pi=0,Cs=null,Ba=-1,Fa=0;function Ie(){return(Jn&6)!==0?fe():Ba!==-1?Ba:Ba=fe()}function Qt(n){return(n.mode&1)===0?1:(Jn&2)!==0&&Oe!==0?Oe&-Oe:Ud.transition!==null?(Fa===0&&(Fa=Ji()),Fa):(n=Xn,n!==0||(n=window.event,n=n===void 0?16:el(n.type)),n)}function ft(n,e,t,i){if(50<Pi)throw Pi=0,Cs=null,Error(p(185));vt(n,t,i),((Jn&2)===0||n!==je)&&(n===je&&((Jn&2)===0&&(Ma|=t),we===4&&Xt(n,Oe)),We(n,i),t===1&&Jn===0&&(e.mode&1)===0&&(Yr=fe()+500,ha&&$t()))}function We(n,e){var t=n.callbackNode;go(n,e);var i=or(n,n===je?Oe:0);if(i===0)t!==null&&Vi(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Vi(t),e===1)n.tag===0?Fd(tc.bind(null,n)):Fl(tc.bind(null,n)),Id(function(){(Jn&6)===0&&$t()}),t=null;else{switch(Er(i)){case 1:t=ai;break;case 4:t=Ki;break;case 16:t=kt;break;case 536870912:t=W;break;default:t=kt}t=cc(t,ec.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function ec(n,e){if(Ba=-1,Fa=0,(Jn&6)!==0)throw Error(p(327));var t=n.callbackNode;if(qr()&&n.callbackNode!==t)return null;var i=or(n,n===je?Oe:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Ua(n,i);else{e=i;var a=Jn;Jn|=2;var o=ic();(je!==n||Oe!==e)&&(Pt=null,Yr=fe()+500,yr(n,e));do try{lf();break}catch(u){rc(n,u)}while(!0);Yo(),Pa.current=o,Jn=a,_e!==null?e=0:(je=null,Oe=0,e=we)}if(e!==0){if(e===2&&(a=oi(n),a!==0&&(i=a,e=Ls(n,a))),e===1)throw t=Li,yr(n,0),Xt(n,i),We(n,fe()),t;if(e===6)Xt(n,i);else{if(a=n.current.alternate,(i&30)===0&&!of(a)&&(e=Ua(n,i),e===2&&(o=oi(n),o!==0&&(i=o,e=Ls(n,o))),e===1))throw t=Li,yr(n,0),Xt(n,i),We(n,fe()),t;switch(n.finishedWork=a,n.finishedLanes=i,e){case 0:case 1:throw Error(p(345));case 2:xr(n,He,Pt);break;case 3:if(Xt(n,i),(i&130023424)===i&&(e=Os+500-fe(),10<e)){if(or(n,0)!==0)break;if(a=n.suspendedLanes,(a&i)!==i){Ie(),n.pingedLanes|=n.suspendedLanes&a;break}n.timeoutHandle=zo(xr.bind(null,n,He,Pt),e);break}xr(n,He,Pt);break;case 4:if(Xt(n,i),(i&4194240)===i)break;for(e=n.eventTimes,a=-1;0<i;){var l=31-Qn(i);o=1<<l,l=e[l],l>a&&(a=l),i&=~o}if(i=a,i=fe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*af(i/1960))-i,10<i){n.timeoutHandle=zo(xr.bind(null,n,He,Pt),i);break}xr(n,He,Pt);break;case 5:xr(n,He,Pt);break;default:throw Error(p(329))}}}return We(n,fe()),n.callbackNode===t?ec.bind(null,n):null}function Ls(n,e){var t=Ri;return n.current.memoizedState.isDehydrated&&(yr(n,e).flags|=256),n=Ua(n,e),n!==2&&(e=He,He=t,e!==null&&Rs(e)),n}function Rs(n){He===null?He=n:He.push.apply(He,n)}function of(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var a=t[i],o=a.getSnapshot;a=a.value;try{if(!st(o(),a))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(n,e){for(e&=~Ns,e&=~Ma,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qn(e),i=1<<t;n[t]=-1,e&=~i}}function tc(n){if((Jn&6)!==0)throw Error(p(327));qr();var e=or(n,0);if((e&1)===0)return We(n,fe()),null;var t=Ua(n,e);if(n.tag!==0&&t===2){var i=oi(n);i!==0&&(e=i,t=Ls(n,i))}if(t===1)throw t=Li,yr(n,0),Xt(n,e),We(n,fe()),t;if(t===6)throw Error(p(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,xr(n,He,Pt),We(n,fe()),null}function Ps(n,e){var t=Jn;Jn|=1;try{return n(e)}finally{Jn=t,Jn===0&&(Yr=fe()+500,ha&&$t())}}function vr(n){qt!==null&&qt.tag===0&&(Jn&6)===0&&qr();var e=Jn;Jn|=1;var t=rt.transition,i=Xn;try{if(rt.transition=null,Xn=1,n)return n()}finally{Xn=i,rt.transition=t,Jn=e,(Jn&6)===0&&$t()}}function Ms(){qe=Jr.current,le(Jr)}function yr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Md(t)),_e!==null)for(t=_e.return;t!==null;){var i=t;switch(Vo(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fa();break;case 3:$r(),le(Be),le(Ae),as();break;case 5:rs(i);break;case 4:$r();break;case 13:le(he);break;case 19:le(he);break;case 10:qo(i.type._context);break;case 22:case 23:Ms()}t=t.return}if(je=n,_e=n=Zt(n.current,null),Oe=qe=e,we=0,Li=null,Ns=Ma=mr=0,He=Ri=null,pr!==null){for(e=0;e<pr.length;e++)if(t=pr[e],i=t.interleaved,i!==null){t.interleaved=null;var a=i.next,o=t.pending;if(o!==null){var l=o.next;o.next=a,i.next=l}t.pending=i}pr=null}return n}function rc(n,e){do{var t=_e;try{if(Yo(),ja.current=Oa,ka){for(var i=ge.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}ka=!1}if(gr=0,Te=be=ge=null,ki=!1,Ei=0,Es.current=null,t===null||t.return===null){we=1,Li=e,_e=null;break}n:{var o=n,l=t.return,u=t,h=e;if(e=Oe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var _=h,D=u,U=D.tag;if((D.mode&1)===0&&(U===0||U===11||U===15)){var M=D.alternate;M?(D.updateQueue=M.updateQueue,D.memoizedState=M.memoizedState,D.lanes=M.lanes):(D.updateQueue=null,D.memoizedState=null)}var rn=Nu(l);if(rn!==null){rn.flags&=-257,Ou(rn,l,u,o,e),rn.mode&1&&Eu(o,_,e),e=rn,h=_;var fn=e.updateQueue;if(fn===null){var pn=new Set;pn.add(h),e.updateQueue=pn}else fn.add(h);break n}else{if((e&1)===0){Eu(o,_,e),Is();break n}h=Error(p(426))}}else if(pe&&u.mode&1){var ve=Nu(l);if(ve!==null){(ve.flags&65536)===0&&(ve.flags|=256),Ou(ve,l,u,o,e),Go(Kr(h,u));break n}}o=h=Kr(h,u),we!==4&&(we=2),Ri===null?Ri=[o]:Ri.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=ju(o,h,e);Jl(o,v);break n;case 1:u=h;var g=o.type,y=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Yt===null||!Yt.has(y)))){o.flags|=65536,e&=-e,o.lanes|=e;var V=ku(o,u,e);Jl(o,V);break n}}o=o.return}while(o!==null)}oc(t)}catch(hn){e=hn,_e===t&&t!==null&&(_e=t=t.return);continue}break}while(!0)}function ic(){var n=Pa.current;return Pa.current=Oa,n===null?Oa:n}function Is(){(we===0||we===3||we===2)&&(we=4),je===null||(mr&268435455)===0&&(Ma&268435455)===0||Xt(je,Oe)}function Ua(n,e){var t=Jn;Jn|=2;var i=ic();(je!==n||Oe!==e)&&(Pt=null,yr(n,e));do try{sf();break}catch(a){rc(n,a)}while(!0);if(Yo(),Jn=t,Pa.current=i,_e!==null)throw Error(p(261));return je=null,Oe=0,we}function sf(){for(;_e!==null;)ac(_e)}function lf(){for(;_e!==null&&!gt();)ac(_e)}function ac(n){var e=uc(n.alternate,n,qe);n.memoizedProps=n.pendingProps,e===null?oc(n):_e=e,Es.current=null}function oc(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Zd(t,e,qe),t!==null){_e=t;return}}else{if(t=nf(t,e),t!==null){t.flags&=32767,_e=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{we=6,_e=null;return}}if(e=e.sibling,e!==null){_e=e;return}_e=e=n}while(e!==null);we===0&&(we=5)}function xr(n,e,t){var i=Xn,a=rt.transition;try{rt.transition=null,Xn=1,uf(n,e,t,i)}finally{rt.transition=a,Xn=i}return null}function uf(n,e,t,i){do qr();while(qt!==null);if((Jn&6)!==0)throw Error(p(327));t=n.finishedWork;var a=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(p(177));n.callbackNode=null,n.callbackPriority=0;var o=t.lanes|t.childLanes;if(Yi(n,o),n===je&&(_e=je=null,Oe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Da||(Da=!0,cc(kt,function(){return qr(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=rt.transition,rt.transition=null;var l=Xn;Xn=1;var u=Jn;Jn|=4,Es.current=null,tf(n,t),qu(t,n),Nd(Io),Xi=!!Mo,Io=Mo=null,n.current=t,rf(t),$i(),Jn=u,Xn=l,rt.transition=o}else n.current=t;if(Da&&(Da=!1,qt=n,za=a),o=n.pendingLanes,o===0&&(Yt=null),ee(t.stateNode),We(n,fe()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)a=e[t],i(a.value,{componentStack:a.stack,digest:a.digest});if(Ia)throw Ia=!1,n=As,As=null,n;return(za&1)!==0&&n.tag!==0&&qr(),o=n.pendingLanes,(o&1)!==0?n===Cs?Pi++:(Pi=0,Cs=n):Pi=0,$t(),null}function qr(){if(qt!==null){var n=Er(za),e=rt.transition,t=Xn;try{if(rt.transition=null,Xn=16>n?16:n,qt===null)var i=!1;else{if(n=qt,qt=null,za=0,(Jn&6)!==0)throw Error(p(331));var a=Jn;for(Jn|=4,un=n.current;un!==null;){var o=un,l=o.child;if((un.flags&16)!==0){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var _=u[h];for(un=_;un!==null;){var D=un;switch(D.tag){case 0:case 11:case 15:Ci(8,D,o)}var U=D.child;if(U!==null)U.return=D,un=U;else for(;un!==null;){D=un;var M=D.sibling,rn=D.return;if($u(D),D===_){un=null;break}if(M!==null){M.return=rn,un=M;break}un=rn}}}var fn=o.alternate;if(fn!==null){var pn=fn.child;if(pn!==null){fn.child=null;do{var ve=pn.sibling;pn.sibling=null,pn=ve}while(pn!==null)}}un=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,un=l;else n:for(;un!==null;){if(o=un,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Ci(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,un=v;break n}un=o.return}}var g=n.current;for(un=g;un!==null;){l=un;var y=l.child;if((l.subtreeFlags&2064)!==0&&y!==null)y.return=l,un=y;else n:for(l=g;un!==null;){if(u=un,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ra(9,u)}}catch(hn){me(u,u.return,hn)}if(u===l){un=null;break n}var V=u.sibling;if(V!==null){V.return=u.return,un=V;break n}un=u.return}}if(Jn=a,$t(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(gn,n)}catch{}i=!0}return i}finally{Xn=t,rt.transition=e}}return!1}function sc(n,e,t){e=Kr(t,e),e=ju(n,e,1),n=Gt(n,e,1),e=Ie(),n!==null&&(vt(n,1,e),We(n,e))}function me(n,e,t){if(n.tag===3)sc(n,n,t);else for(;e!==null;){if(e.tag===3){sc(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yt===null||!Yt.has(i))){n=Kr(t,n),n=ku(e,n,1),e=Gt(e,n,1),n=Ie(),e!==null&&(vt(e,1,n),We(e,n));break}}e=e.return}}function cf(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Ie(),n.pingedLanes|=n.suspendedLanes&t,je===n&&(Oe&t)===t&&(we===4||we===3&&(Oe&130023424)===Oe&&500>fe()-Os?yr(n,0):Ns|=t),We(n,e)}function lc(n,e){e===0&&((n.mode&1)===0?e=1:(e=Pe,Pe<<=1,(Pe&130023424)===0&&(Pe=4194304)));var t=Ie();n=Ct(n,e),n!==null&&(vt(n,e,t),We(n,t))}function df(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),lc(n,t)}function ff(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(p(314))}i!==null&&i.delete(e),lc(n,t)}var uc;uc=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Be.current)Ue=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ue=!1,Xd(n,e,t);Ue=(n.flags&131072)!==0}else Ue=!1,pe&&(e.flags&1048576)!==0&&Ul(e,ma,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(n,e),n=e.pendingProps;var a=zr(e,Ae.current);Wr(e,t),a=ls(null,e,i,n,a,t);var o=us();return e.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(i)?(o=!0,pa(e)):o=!1,e.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Zo(e),a.updater=wa,e.stateNode=a,a._reactInternals=e,es(e,i,n,t),e=vs(null,e,i,!0,o,t)):(e.tag=0,pe&&o&&Wo(e),Me(null,e,a,t),e=e.child),e;case 16:i=e.elementType;n:{switch(Ca(n,e),n=e.pendingProps,a=i._init,i=a(i._payload),e.type=i,a=e.tag=hf(i),n=ut(i,n),a){case 0:e=ms(null,e,i,n,t);break n;case 1:e=Mu(null,e,i,n,t);break n;case 11:e=Au(null,e,i,n,t);break n;case 14:e=Cu(null,e,i,ut(i.type,n),t);break n}throw Error(p(306,i,""))}return e;case 0:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:ut(i,a),ms(n,e,i,a,t);case 1:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:ut(i,a),Mu(n,e,i,a,t);case 3:n:{if(Iu(e),n===null)throw Error(p(387));i=e.pendingProps,o=e.memoizedState,a=o.element,Gl(n,e),ba(e,i,null,t);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){a=Kr(Error(p(423)),e),e=Du(n,e,i,t,a);break n}else if(i!==a){a=Kr(Error(p(424)),e),e=Du(n,e,i,t,a);break n}else for(Ye=Ht(e.stateNode.containerInfo.firstChild),Je=e,pe=!0,lt=null,t=tu(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ur(),i===a){e=Rt(n,e,t);break n}Me(n,e,i,t)}e=e.child}return e;case 5:return ru(e),n===null&&Ko(e),i=e.type,a=e.pendingProps,o=n!==null?n.memoizedProps:null,l=a.children,Do(i,a)?l=null:o!==null&&Do(i,o)&&(e.flags|=32),Pu(n,e),Me(n,e,l,t),e.child;case 6:return n===null&&Ko(e),null;case 13:return zu(n,e,t);case 4:return ts(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Vr(e,null,i,t):Me(n,e,i,t),e.child;case 11:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:ut(i,a),Au(n,e,i,a,t);case 7:return Me(n,e,e.pendingProps,t),e.child;case 8:return Me(n,e,e.pendingProps.children,t),e.child;case 12:return Me(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(i=e.type._context,a=e.pendingProps,o=e.memoizedProps,l=a.value,ie(ya,i._currentValue),i._currentValue=l,o!==null)if(st(o.value,l)){if(o.children===a.children&&!Be.current){e=Rt(n,e,t);break n}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var h=u.firstContext;h!==null;){if(h.context===i){if(o.tag===1){h=Lt(-1,t&-t),h.tag=2;var _=o.updateQueue;if(_!==null){_=_.shared;var D=_.pending;D===null?h.next=h:(h.next=D.next,D.next=h),_.pending=h}}o.lanes|=t,h=o.alternate,h!==null&&(h.lanes|=t),Qo(o.return,t,e),u.lanes|=t;break}h=h.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(p(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Qo(l,t,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(n,e,a.children,t),e=e.child}return e;case 9:return a=e.type,i=e.pendingProps.children,Wr(e,t),a=et(a),i=i(a),e.flags|=1,Me(n,e,i,t),e.child;case 14:return i=e.type,a=ut(i,e.pendingProps),a=ut(i.type,a),Cu(n,e,i,a,t);case 15:return Lu(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,a=e.pendingProps,a=e.elementType===i?a:ut(i,a),Ca(n,e),e.tag=1,Fe(i)?(n=!0,pa(e)):n=!1,Wr(e,t),Xl(e,i,a),es(e,i,a,t),vs(null,e,i,!0,n,t);case 19:return Fu(n,e,t);case 22:return Ru(n,e,t)}throw Error(p(156,e.tag))};function cc(n,e){return Wi(n,e)}function pf(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(n,e,t,i){return new pf(n,e,t,i)}function Ds(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hf(n){if(typeof n=="function")return Ds(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vn)return 11;if(n===ne)return 14}return 2}function Zt(n,e){var t=n.alternate;return t===null?(t=it(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Ha(n,e,t,i,a,o){var l=2;if(i=n,typeof n=="function")Ds(n)&&(l=1);else if(typeof n=="string")l=5;else n:switch(n){case on:return _r(t.children,a,o,e);case wn:l=8,a|=8;break;case J:return n=it(12,t,e,a|2),n.elementType=J,n.lanes=o,n;case cn:return n=it(13,t,e,a),n.elementType=cn,n.lanes=o,n;case Fn:return n=it(19,t,e,a),n.elementType=Fn,n.lanes=o,n;case Yn:return Wa(t,a,o,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case mn:l=10;break n;case Tn:l=9;break n;case vn:l=11;break n;case ne:l=14;break n;case Gn:l=16,i=null;break n}throw Error(p(130,n==null?n:typeof n,""))}return e=it(l,t,e,a),e.elementType=n,e.type=i,e.lanes=o,e}function _r(n,e,t,i){return n=it(7,n,i,e),n.lanes=t,n}function Wa(n,e,t,i){return n=it(22,n,i,e),n.elementType=Yn,n.lanes=t,n.stateNode={isHidden:!1},n}function zs(n,e,t){return n=it(6,n,null,e),n.lanes=t,n}function Bs(n,e,t){return e=it(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function gf(n,e,t,i,a){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=i,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fs(n,e,t,i,a,o,l,u,h){return n=new gf(n,e,t,u,h),e===1?(e=1,o===!0&&(e|=8)):e=0,o=it(3,null,null,e),n.current=o,o.stateNode=n,o.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zo(o),n}function mf(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function dc(n){if(!n)return Vt;n=n._reactInternals;n:{if(jt(n)!==n||n.tag!==1)throw Error(p(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(p(171))}if(n.tag===1){var t=n.type;if(Fe(t))return zl(n,t,e)}return e}function fc(n,e,t,i,a,o,l,u,h){return n=Fs(t,i,!0,n,a,o,l,u,h),n.context=dc(null),t=n.current,i=Ie(),a=Qt(t),o=Lt(i,a),o.callback=e??null,Gt(t,o,a),n.current.lanes=a,vt(n,a,i),We(n,i),n}function Va(n,e,t,i){var a=e.current,o=Ie(),l=Qt(a);return t=dc(t),e.context===null?e.context=t:e.pendingContext=t,e=Lt(o,l),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Gt(a,e,l),n!==null&&(ft(n,a,l,o),_a(n,a,l)),l}function $a(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pc(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Us(n,e){pc(n,e),(n=n.alternate)&&pc(n,e)}function vf(){return null}var hc=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hs(n){this._internalRoot=n}Ka.prototype.render=Hs.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(p(409));Va(n,e,null,null)},Ka.prototype.unmount=Hs.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;vr(function(){Va(null,n,null,null)}),e[Et]=null}};function Ka(n){this._internalRoot=n}Ka.prototype.unstable_scheduleHydration=function(n){if(n){var e=te();n={blockedOn:null,target:n,priority:e};for(var t=0;t<oe.length&&e!==0&&e<oe[t].priority;t++);oe.splice(t,0,n),t===0&&Zs(n)}};function Ws(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ga(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gc(){}function yf(n,e,t,i,a){if(a){if(typeof i=="function"){var o=i;i=function(){var _=$a(l);o.call(_)}}var l=fc(e,i,n,0,null,!1,!1,"",gc);return n._reactRootContainer=l,n[Et]=l.current,yi(n.nodeType===8?n.parentNode:n),vr(),l}for(;a=n.lastChild;)n.removeChild(a);if(typeof i=="function"){var u=i;i=function(){var _=$a(h);u.call(_)}}var h=Fs(n,0,!1,null,null,!1,!1,"",gc);return n._reactRootContainer=h,n[Et]=h.current,yi(n.nodeType===8?n.parentNode:n),vr(function(){Va(e,h,t,i)}),h}function Ja(n,e,t,i,a){var o=t._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var u=a;a=function(){var h=$a(l);u.call(h)}}Va(e,l,n,a)}else l=yf(t,e,n,a,i);return $a(l)}Rn=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=zt(e.pendingLanes);t!==0&&(ze(e,t|1),We(e,fe()),(Jn&6)===0&&(Yr=fe()+500,$t()))}break;case 13:vr(function(){var i=Ct(n,1);if(i!==null){var a=Ie();ft(i,n,1,a)}}),Us(n,1)}},Nr=function(n){if(n.tag===13){var e=Ct(n,134217728);if(e!==null){var t=Ie();ft(e,n,134217728,t)}Us(n,134217728)}},xe=function(n){if(n.tag===13){var e=Qt(n),t=Ct(n,e);if(t!==null){var i=Ie();ft(t,n,e,i)}Us(n,e)}},te=function(){return Xn},sr=function(n,e){var t=Xn;try{return Xn=n,e()}finally{Xn=t}},Tr=function(n,e,t){switch(e){case"input":if(zn(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var a=da(i);if(!a)throw Error(p(90));In(i),zn(i,a)}}}break;case"textarea":$e(n,t);break;case"select":e=t.value,e!=null&&X(n,!!t.multiple,e,!1)}},q=Ps,On=vr;var xf={usingClientEntryPoint:!1,Events:[bi,Ir,da,f,O,Ps]},Mi={findFiberByHostInstance:ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_f={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ui(n),n===null?null:n.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{gn=Ya.inject(_f),Ln=Ya}catch{}}return Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf,Ve.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ws(e))throw Error(p(200));return mf(n,e,null,t)},Ve.createRoot=function(n,e){if(!Ws(n))throw Error(p(299));var t=!1,i="",a=hc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=Fs(n,1,!1,null,null,t,!1,i,a),n[Et]=e.current,yi(n.nodeType===8?n.parentNode:n),new Hs(e)},Ve.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(p(188)):(n=Object.keys(n).join(","),Error(p(268,n)));return n=Ui(e),n=n===null?null:n.stateNode,n},Ve.flushSync=function(n){return vr(n)},Ve.hydrate=function(n,e,t){if(!Ga(e))throw Error(p(200));return Ja(null,n,e,!0,t)},Ve.hydrateRoot=function(n,e,t){if(!Ws(n))throw Error(p(405));var i=t!=null&&t.hydratedSources||null,a=!1,o="",l=hc;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),e=fc(e,null,n,1,t??null,a,!1,o,l),n[Et]=e.current,yi(n),i)for(n=0;n<i.length;n++)t=i[n],a=t._getVersion,a=a(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,a]:e.mutableSourceEagerHydrationData.push(t,a);return new Ka(e)},Ve.render=function(n,e,t){if(!Ga(e))throw Error(p(200));return Ja(null,n,e,!1,t)},Ve.unmountComponentAtNode=function(n){if(!Ga(n))throw Error(p(40));return n._reactRootContainer?(vr(function(){Ja(null,null,n,!1,function(){n._reactRootContainer=null,n[Et]=null})}),!0):!1},Ve.unstable_batchedUpdates=Ps,Ve.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ga(t))throw Error(p(200));if(n==null||n._reactInternals===void 0)throw Error(p(38));return Ja(n,e,t,!1,i)},Ve.version="18.2.0-next-9e3b772b8-20220608",Ve}var Sc;function Mc(){if(Sc)return Ks.exports;Sc=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(S){console.error(S)}}return c(),Ks.exports=Ef(),Ks.exports}var Tc;function Nf(){if(Tc)return qa;Tc=1;var c=Mc();return qa.createRoot=c.createRoot,qa.hydrateRoot=c.hydrateRoot,qa}var Of=Nf();const Af=ao(Of);var yn=oo();const ro=ao(yn),Ic=yn.createContext(void 0),Cf=({children:c})=>{const S=localStorage.getItem("selectedLanguage")||"python",[p,P]=yn.useState(S);return yn.useEffect(()=>{localStorage.setItem("selectedLanguage",p)},[p]),r.jsx(Ic.Provider,{value:{selectedLanguage:p,setSelectedLanguage:P},children:c})};function Lf(){const c=yn.useContext(Ic);if(c===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return c}const Dc=yn.createContext(void 0);function Rf({children:c}){const[S,p]=yn.useState(!0),P=()=>p(!0),j=()=>p(!1),$=()=>p(!S);return r.jsx(Dc.Provider,{value:{isSidebarOpen:S,showSidebar:P,hideSidebar:j,toggleSidebar:$},children:c})}function Xs(){const c=yn.useContext(Dc);if(c===void 0)throw new Error("useSidebar must be used within SidebarProvider");return c}const Pf="_wave_nm5to_1",Qa={wave:Pf};function Mf(){return r.jsxs("div",{className:Qa.background,children:[r.jsx("div",{className:Qa.wave}),r.jsx("div",{className:Qa.wave}),r.jsx("div",{className:Qa.wave})]})}const If="_topbar_103sc_1",Df="_container_103sc_22",zf="_buttonContainer_103sc_28",Bf="_title_103sc_35",Ff="_iconLink_103sc_53",Uf="_hamburger_103sc_75",Hf="_hamburgerIcon_103sc_79",Wf="_hamburgerTop_103sc_88",Vf="_collapsed_103sc_92",$f="_hamburgerMiddle_103sc_96",Kf="_hamburgerBottom_103sc_106",pt={topbar:If,container:Df,buttonContainer:zf,title:Bf,iconLink:Ff,hamburger:Uf,hamburgerIcon:Hf,hamburgerTop:Wf,collapsed:Vf,hamburgerMiddle:$f,hamburgerBottom:Kf};var io={exports:{}},Gf=io.exports,jc;function Jf(){return jc||(jc=1,(function(c,S){(function(P,j){c.exports=j(oo())})(Gf,p=>(()=>{var P={"./node_modules/css-mediaquery/index.js":((C,x)=>{x.match=N,x.parse=w;var b=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,z=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,A=/^(?:(min|max)-)?(.+)/,T=/(em|rem|px|cm|mm|in|pt|pc)?$/,k=/(dpi|dpcm|dppx)?$/;function N(G,L){return w(G).some(function(Q){var Z=Q.inverse,on=Q.type==="all"||L.type===Q.type;if(on&&Z||!(on||Z))return!1;var wn=Q.expressions.every(function(J){var mn=J.feature,Tn=J.modifier,vn=J.value,cn=L[mn];if(!cn)return!1;switch(mn){case"orientation":case"scan":return cn.toLowerCase()===vn.toLowerCase();case"width":case"height":case"device-width":case"device-height":vn=R(vn),cn=R(cn);break;case"resolution":vn=B(vn),cn=B(cn);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":vn=I(vn),cn=I(cn);break;case"grid":case"color":case"color-index":case"monochrome":vn=parseInt(vn,10)||1,cn=parseInt(cn,10)||0;break}switch(Tn){case"min":return cn>=vn;case"max":return cn<=vn;default:return cn===vn}});return wn&&!Z||!wn&&Z})}function w(G){return G.split(",").map(function(L){L=L.trim();var Q=L.match(b),Z=Q[1],on=Q[2],wn=Q[3]||"",J={};return J.inverse=!!Z&&Z.toLowerCase()==="not",J.type=on?on.toLowerCase():"all",wn=wn.match(/\([^\)]+\)/g)||[],J.expressions=wn.map(function(mn){var Tn=mn.match(z),vn=Tn[1].toLowerCase().match(A);return{modifier:vn[1],feature:vn[2],value:Tn[2]}}),J})}function I(G){var L=Number(G),Q;return L||(Q=G.match(/^(\d+)\s*\/\s*(\d+)$/),L=Q[1]/Q[2]),L}function B(G){var L=parseFloat(G),Q=String(G).match(k)[1];switch(Q){case"dpcm":return L/2.54;case"dppx":return L*96;default:return L}}function R(G){var L=parseFloat(G),Q=String(G).match(T)[1];switch(Q){case"em":return L*16;case"rem":return L*16;case"cm":return L*96/2.54;case"mm":return L*96/2.54/10;case"in":return L*96;case"pt":return L*72;case"pc":return L*72/12;default:return L}}}),"./node_modules/hyphenate-style-name/index.js":((C,x,b)=>{b.r(x),b.d(x,{default:()=>w});var z=/[A-Z]/g,A=/^ms-/,T={};function k(I){return"-"+I.toLowerCase()}function N(I){if(T.hasOwnProperty(I))return T[I];var B=I.replace(z,k);return T[I]=A.test(B)?"-"+B:B}const w=N}),"./node_modules/matchmediaquery/index.js":((C,x,b)=>{var z=b("./node_modules/css-mediaquery/index.js").match,A=typeof window<"u"?window.matchMedia:null;function T(N,w,I){var B=this;if(A&&!I){var R=A.call(window,N);this.matches=R.matches,this.media=R.media,R.addListener(Q)}else this.matches=z(N,w),this.media=N;this.addListener=G,this.removeListener=L,this.dispose=Z;function G(on){R&&R.addListener(on)}function L(on){R&&R.removeListener(on)}function Q(on){B.matches=on.matches,B.media=on.media}function Z(){R&&R.removeListener(Q)}}function k(N,w,I){return new T(N,w,I)}C.exports=k}),"./node_modules/object-assign/index.js":(C=>{var x=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function A(k){if(k==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(k)}function T(){try{if(!Object.assign)return!1;var k=new String("abc");if(k[5]="de",Object.getOwnPropertyNames(k)[0]==="5")return!1;for(var N={},w=0;w<10;w++)N["_"+String.fromCharCode(w)]=w;var I=Object.getOwnPropertyNames(N).map(function(R){return N[R]});if(I.join("")!=="0123456789")return!1;var B={};return"abcdefghijklmnopqrst".split("").forEach(function(R){B[R]=R}),Object.keys(Object.assign({},B)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}C.exports=T()?Object.assign:function(k,N){for(var w,I=A(k),B,R=1;R<arguments.length;R++){w=Object(arguments[R]);for(var G in w)b.call(w,G)&&(I[G]=w[G]);if(x){B=x(w);for(var L=0;L<B.length;L++)z.call(w,B[L])&&(I[B[L]]=w[B[L]])}}return I}}),"./node_modules/prop-types/checkPropTypes.js":((C,x,b)=>{var z=function(){};{var A=b("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),T={},k=b("./node_modules/prop-types/lib/has.js");z=function(w){var I="Warning: "+w;typeof console<"u"&&console.error(I);try{throw new Error(I)}catch{}}}function N(w,I,B,R,G){for(var L in w)if(k(w,L)){var Q;try{if(typeof w[L]!="function"){var Z=Error((R||"React class")+": "+B+" type `"+L+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[L]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Z.name="Invariant Violation",Z}Q=w[L](I,L,R,B,null,A)}catch(wn){Q=wn}if(Q&&!(Q instanceof Error)&&z((R||"React class")+": type specification of "+B+" `"+L+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof Q+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),Q instanceof Error&&!(Q.message in T)){T[Q.message]=!0;var on=G?G():"";z("Failed "+B+" type: "+Q.message+(on??""))}}}N.resetWarningCache=function(){T={}},C.exports=N}),"./node_modules/prop-types/factoryWithTypeCheckers.js":((C,x,b)=>{var z=b("./node_modules/react-is/index.js"),A=b("./node_modules/object-assign/index.js"),T=b("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),k=b("./node_modules/prop-types/lib/has.js"),N=b("./node_modules/prop-types/checkPropTypes.js"),w=function(){};w=function(B){var R="Warning: "+B;typeof console<"u"&&console.error(R);try{throw new Error(R)}catch{}};function I(){return null}C.exports=function(B,R){var G=typeof Symbol=="function"&&Symbol.iterator,L="@@iterator";function Q(H){var nn=H&&(G&&H[G]||H[L]);if(typeof nn=="function")return nn}var Z="<<anonymous>>",on={array:Tn("array"),bigint:Tn("bigint"),bool:Tn("boolean"),func:Tn("function"),number:Tn("number"),object:Tn("object"),string:Tn("string"),symbol:Tn("symbol"),any:vn(),arrayOf:cn,element:Fn(),elementType:ne(),instanceOf:Gn,node:d(),objectOf:F,oneOf:Yn,oneOfType:dn,shape:tn,exact:Mn};function wn(H,nn){return H===nn?H!==0||1/H===1/nn:H!==H&&nn!==nn}function J(H,nn){this.message=H,this.data=nn&&typeof nn=="object"?nn:{},this.stack=""}J.prototype=Error.prototype;function mn(H){var nn={},In=0;function Cn(Hn,Dn,zn,Wn,$n,Bn,X){if(Wn=Wn||Z,Bn=Bn||zn,X!==T){if(R){var ce=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw ce.name="Invariant Violation",ce}else if(typeof console<"u"){var Ee=Wn+":"+zn;!nn[Ee]&&In<3&&(w("You are manually calling a React.PropTypes validation function for the `"+Bn+"` prop on `"+Wn+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),nn[Ee]=!0,In++)}}return Dn[zn]==null?Hn?Dn[zn]===null?new J("The "+$n+" `"+Bn+"` is marked as required "+("in `"+Wn+"`, but its value is `null`.")):new J("The "+$n+" `"+Bn+"` is marked as required in "+("`"+Wn+"`, but its value is `undefined`.")):null:H(Dn,zn,Wn,$n,Bn)}var En=Cn.bind(null,!1);return En.isRequired=Cn.bind(null,!0),En}function Tn(H){function nn(In,Cn,En,Hn,Dn,zn){var Wn=In[Cn],$n=Nn(Wn);if($n!==H){var Bn=jn(Wn);return new J("Invalid "+Hn+" `"+Dn+"` of type "+("`"+Bn+"` supplied to `"+En+"`, expected ")+("`"+H+"`."),{expectedType:H})}return null}return mn(nn)}function vn(){return mn(I)}function cn(H){function nn(In,Cn,En,Hn,Dn){if(typeof H!="function")return new J("Property `"+Dn+"` of component `"+En+"` has invalid PropType notation inside arrayOf.");var zn=In[Cn];if(!Array.isArray(zn)){var Wn=Nn(zn);return new J("Invalid "+Hn+" `"+Dn+"` of type "+("`"+Wn+"` supplied to `"+En+"`, expected an array."))}for(var $n=0;$n<zn.length;$n++){var Bn=H(zn,$n,En,Hn,Dn+"["+$n+"]",T);if(Bn instanceof Error)return Bn}return null}return mn(nn)}function Fn(){function H(nn,In,Cn,En,Hn){var Dn=nn[In];if(!B(Dn)){var zn=Nn(Dn);return new J("Invalid "+En+" `"+Hn+"` of type "+("`"+zn+"` supplied to `"+Cn+"`, expected a single ReactElement."))}return null}return mn(H)}function ne(){function H(nn,In,Cn,En,Hn){var Dn=nn[In];if(!z.isValidElementType(Dn)){var zn=Nn(Dn);return new J("Invalid "+En+" `"+Hn+"` of type "+("`"+zn+"` supplied to `"+Cn+"`, expected a single ReactElement type."))}return null}return mn(H)}function Gn(H){function nn(In,Cn,En,Hn,Dn){if(!(In[Cn]instanceof H)){var zn=H.name||Z,Wn=ue(In[Cn]);return new J("Invalid "+Hn+" `"+Dn+"` of type "+("`"+Wn+"` supplied to `"+En+"`, expected ")+("instance of `"+zn+"`."))}return null}return mn(nn)}function Yn(H){if(!Array.isArray(H))return arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array."),I;function nn(In,Cn,En,Hn,Dn){for(var zn=In[Cn],Wn=0;Wn<H.length;Wn++)if(wn(zn,H[Wn]))return null;var $n=JSON.stringify(H,function(X,ce){var Ee=jn(ce);return Ee==="symbol"?String(ce):ce});return new J("Invalid "+Hn+" `"+Dn+"` of value `"+String(zn)+"` "+("supplied to `"+En+"`, expected one of "+$n+"."))}return mn(nn)}function F(H){function nn(In,Cn,En,Hn,Dn){if(typeof H!="function")return new J("Property `"+Dn+"` of component `"+En+"` has invalid PropType notation inside objectOf.");var zn=In[Cn],Wn=Nn(zn);if(Wn!=="object")return new J("Invalid "+Hn+" `"+Dn+"` of type "+("`"+Wn+"` supplied to `"+En+"`, expected an object."));for(var $n in zn)if(k(zn,$n)){var Bn=H(zn,$n,En,Hn,Dn+"."+$n,T);if(Bn instanceof Error)return Bn}return null}return mn(nn)}function dn(H){if(!Array.isArray(H))return w("Invalid argument supplied to oneOfType, expected an instance of array."),I;for(var nn=0;nn<H.length;nn++){var In=H[nn];if(typeof In!="function")return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Sn(In)+" at index "+nn+"."),I}function Cn(En,Hn,Dn,zn,Wn){for(var $n=[],Bn=0;Bn<H.length;Bn++){var X=H[Bn],ce=X(En,Hn,Dn,zn,Wn,T);if(ce==null)return null;ce.data&&k(ce.data,"expectedType")&&$n.push(ce.data.expectedType)}var Ee=$n.length>0?", expected one of type ["+$n.join(", ")+"]":"";return new J("Invalid "+zn+" `"+Wn+"` supplied to "+("`"+Dn+"`"+Ee+"."))}return mn(Cn)}function d(){function H(nn,In,Cn,En,Hn){return kn(nn[In])?null:new J("Invalid "+En+" `"+Hn+"` supplied to "+("`"+Cn+"`, expected a ReactNode."))}return mn(H)}function E(H,nn,In,Cn,En){return new J((H||"React class")+": "+nn+" type `"+In+"."+Cn+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+En+"`.")}function tn(H){function nn(In,Cn,En,Hn,Dn){var zn=In[Cn],Wn=Nn(zn);if(Wn!=="object")return new J("Invalid "+Hn+" `"+Dn+"` of type `"+Wn+"` "+("supplied to `"+En+"`, expected `object`."));for(var $n in H){var Bn=H[$n];if(typeof Bn!="function")return E(En,Hn,Dn,$n,jn(Bn));var X=Bn(zn,$n,En,Hn,Dn+"."+$n,T);if(X)return X}return null}return mn(nn)}function Mn(H){function nn(In,Cn,En,Hn,Dn){var zn=In[Cn],Wn=Nn(zn);if(Wn!=="object")return new J("Invalid "+Hn+" `"+Dn+"` of type `"+Wn+"` "+("supplied to `"+En+"`, expected `object`."));var $n=A({},In[Cn],H);for(var Bn in $n){var X=H[Bn];if(k(H,Bn)&&typeof X!="function")return E(En,Hn,Dn,Bn,jn(X));if(!X)return new J("Invalid "+Hn+" `"+Dn+"` key `"+Bn+"` supplied to `"+En+"`.\nBad object: "+JSON.stringify(In[Cn],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(H),null,"  "));var ce=X(zn,Bn,En,Hn,Dn+"."+Bn,T);if(ce)return ce}return null}return mn(nn)}function kn(H){switch(typeof H){case"number":case"string":case"undefined":return!0;case"boolean":return!H;case"object":if(Array.isArray(H))return H.every(kn);if(H===null||B(H))return!0;var nn=Q(H);if(nn){var In=nn.call(H),Cn;if(nn!==H.entries){for(;!(Cn=In.next()).done;)if(!kn(Cn.value))return!1}else for(;!(Cn=In.next()).done;){var En=Cn.value;if(En&&!kn(En[1]))return!1}}else return!1;return!0;default:return!1}}function Un(H,nn){return H==="symbol"?!0:nn?nn["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&nn instanceof Symbol:!1}function Nn(H){var nn=typeof H;return Array.isArray(H)?"array":H instanceof RegExp?"object":Un(nn,H)?"symbol":nn}function jn(H){if(typeof H>"u"||H===null)return""+H;var nn=Nn(H);if(nn==="object"){if(H instanceof Date)return"date";if(H instanceof RegExp)return"regexp"}return nn}function Sn(H){var nn=jn(H);switch(nn){case"array":case"object":return"an "+nn;case"boolean":case"date":case"regexp":return"a "+nn;default:return nn}}function ue(H){return!H.constructor||!H.constructor.name?Z:H.constructor.name}return on.checkPropTypes=N,on.resetWarningCache=N.resetWarningCache,on.PropTypes=on,on}}),"./node_modules/prop-types/index.js":((C,x,b)=>{{var z=b("./node_modules/react-is/index.js"),A=!0;C.exports=b("./node_modules/prop-types/factoryWithTypeCheckers.js")(z.isElement,A)}}),"./node_modules/prop-types/lib/ReactPropTypesSecret.js":(C=>{var x="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";C.exports=x}),"./node_modules/prop-types/lib/has.js":(C=>{C.exports=Function.call.bind(Object.prototype.hasOwnProperty)}),"./node_modules/react-is/cjs/react-is.development.js":((C,x)=>{(function(){var b=typeof Symbol=="function"&&Symbol.for,z=b?Symbol.for("react.element"):60103,A=b?Symbol.for("react.portal"):60106,T=b?Symbol.for("react.fragment"):60107,k=b?Symbol.for("react.strict_mode"):60108,N=b?Symbol.for("react.profiler"):60114,w=b?Symbol.for("react.provider"):60109,I=b?Symbol.for("react.context"):60110,B=b?Symbol.for("react.async_mode"):60111,R=b?Symbol.for("react.concurrent_mode"):60111,G=b?Symbol.for("react.forward_ref"):60112,L=b?Symbol.for("react.suspense"):60113,Q=b?Symbol.for("react.suspense_list"):60120,Z=b?Symbol.for("react.memo"):60115,on=b?Symbol.for("react.lazy"):60116,wn=b?Symbol.for("react.block"):60121,J=b?Symbol.for("react.fundamental"):60117,mn=b?Symbol.for("react.responder"):60118,Tn=b?Symbol.for("react.scope"):60119;function vn(X){return typeof X=="string"||typeof X=="function"||X===T||X===R||X===N||X===k||X===L||X===Q||typeof X=="object"&&X!==null&&(X.$$typeof===on||X.$$typeof===Z||X.$$typeof===w||X.$$typeof===I||X.$$typeof===G||X.$$typeof===J||X.$$typeof===mn||X.$$typeof===Tn||X.$$typeof===wn)}function cn(X){if(typeof X=="object"&&X!==null){var ce=X.$$typeof;switch(ce){case z:var Ee=X.type;switch(Ee){case B:case R:case T:case N:case k:case L:return Ee;default:var $e=Ee&&Ee.$$typeof;switch($e){case I:case G:case on:case Z:case w:return $e;default:return ce}}case A:return ce}}}var Fn=B,ne=R,Gn=I,Yn=w,F=z,dn=G,d=T,E=on,tn=Z,Mn=A,kn=N,Un=k,Nn=L,jn=!1;function Sn(X){return jn||(jn=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),ue(X)||cn(X)===B}function ue(X){return cn(X)===R}function H(X){return cn(X)===I}function nn(X){return cn(X)===w}function In(X){return typeof X=="object"&&X!==null&&X.$$typeof===z}function Cn(X){return cn(X)===G}function En(X){return cn(X)===T}function Hn(X){return cn(X)===on}function Dn(X){return cn(X)===Z}function zn(X){return cn(X)===A}function Wn(X){return cn(X)===N}function $n(X){return cn(X)===k}function Bn(X){return cn(X)===L}x.AsyncMode=Fn,x.ConcurrentMode=ne,x.ContextConsumer=Gn,x.ContextProvider=Yn,x.Element=F,x.ForwardRef=dn,x.Fragment=d,x.Lazy=E,x.Memo=tn,x.Portal=Mn,x.Profiler=kn,x.StrictMode=Un,x.Suspense=Nn,x.isAsyncMode=Sn,x.isConcurrentMode=ue,x.isContextConsumer=H,x.isContextProvider=nn,x.isElement=In,x.isForwardRef=Cn,x.isFragment=En,x.isLazy=Hn,x.isMemo=Dn,x.isPortal=zn,x.isProfiler=Wn,x.isStrictMode=$n,x.isSuspense=Bn,x.isValidElementType=vn,x.typeOf=cn})()}),"./node_modules/react-is/index.js":((C,x,b)=>{C.exports=b("./node_modules/react-is/cjs/react-is.development.js")}),"./node_modules/shallow-equal/dist/index.esm.js":((C,x,b)=>{b.r(x),b.d(x,{shallowEqualArrays:()=>A,shallowEqualObjects:()=>z});function z(T,k){if(T===k)return!0;if(!T||!k)return!1;var N=Object.keys(T),w=Object.keys(k),I=N.length;if(w.length!==I)return!1;for(var B=0;B<I;B++){var R=N[B];if(T[R]!==k[R]||!Object.prototype.hasOwnProperty.call(k,R))return!1}return!0}function A(T,k){if(T===k)return!0;if(!T||!k)return!1;var N=T.length;if(k.length!==N)return!1;for(var w=0;w<N;w++)if(T[w]!==k[w])return!1;return!0}}),"./src/Component.ts":(function(C,x,b){var z=this&&this.__rest||function(N,w){var I={};for(var B in N)Object.prototype.hasOwnProperty.call(N,B)&&w.indexOf(B)<0&&(I[B]=N[B]);if(N!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,B=Object.getOwnPropertySymbols(N);R<B.length;R++)w.indexOf(B[R])<0&&Object.prototype.propertyIsEnumerable.call(N,B[R])&&(I[B[R]]=N[B[R]]);return I},A=this&&this.__importDefault||function(N){return N&&N.__esModule?N:{default:N}};Object.defineProperty(x,"__esModule",{value:!0});var T=A(b("./src/useMediaQuery.ts")),k=function(N){var w=N.children,I=N.device,B=N.onChange,R=z(N,["children","device","onChange"]),G=(0,T.default)(R,I,B);return typeof w=="function"?w(G):G?w:null};x.default=k}),"./src/Context.ts":((C,x,b)=>{Object.defineProperty(x,"__esModule",{value:!0});var z=b("react"),A=(0,z.createContext)(void 0);x.default=A}),"./src/index.ts":(function(C,x,b){var z=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(x,"__esModule",{value:!0}),x.Context=x.toQuery=x.useMediaQuery=x.default=void 0;var A=z(b("./src/useMediaQuery.ts"));x.useMediaQuery=A.default;var T=z(b("./src/Component.ts"));x.default=T.default;var k=z(b("./src/toQuery.ts"));x.toQuery=k.default;var N=z(b("./src/Context.ts"));x.Context=N.default}),"./src/mediaQuery.ts":(function(C,x,b){var z=this&&this.__assign||function(){return z=Object.assign||function(L){for(var Q,Z=1,on=arguments.length;Z<on;Z++){Q=arguments[Z];for(var wn in Q)Object.prototype.hasOwnProperty.call(Q,wn)&&(L[wn]=Q[wn])}return L},z.apply(this,arguments)},A=this&&this.__rest||function(L,Q){var Z={};for(var on in L)Object.prototype.hasOwnProperty.call(L,on)&&Q.indexOf(on)<0&&(Z[on]=L[on]);if(L!=null&&typeof Object.getOwnPropertySymbols=="function")for(var wn=0,on=Object.getOwnPropertySymbols(L);wn<on.length;wn++)Q.indexOf(on[wn])<0&&Object.prototype.propertyIsEnumerable.call(L,on[wn])&&(Z[on[wn]]=L[on[wn]]);return Z},T=this&&this.__importDefault||function(L){return L&&L.__esModule?L:{default:L}};Object.defineProperty(x,"__esModule",{value:!0});var k=T(b("./node_modules/prop-types/index.js")),N=k.default.oneOfType([k.default.string,k.default.number]),w={all:k.default.bool,grid:k.default.bool,aural:k.default.bool,braille:k.default.bool,handheld:k.default.bool,print:k.default.bool,projection:k.default.bool,screen:k.default.bool,tty:k.default.bool,tv:k.default.bool,embossed:k.default.bool},I={orientation:k.default.oneOf(["portrait","landscape"]),scan:k.default.oneOf(["progressive","interlace"]),aspectRatio:k.default.string,deviceAspectRatio:k.default.string,height:N,deviceHeight:N,width:N,deviceWidth:N,color:k.default.bool,colorIndex:k.default.bool,monochrome:k.default.bool,resolution:N,type:Object.keys(w)};I.type;var B=A(I,["type"]),R=z({minAspectRatio:k.default.string,maxAspectRatio:k.default.string,minDeviceAspectRatio:k.default.string,maxDeviceAspectRatio:k.default.string,minHeight:N,maxHeight:N,minDeviceHeight:N,maxDeviceHeight:N,minWidth:N,maxWidth:N,minDeviceWidth:N,maxDeviceWidth:N,minColor:k.default.number,maxColor:k.default.number,minColorIndex:k.default.number,maxColorIndex:k.default.number,minMonochrome:k.default.number,maxMonochrome:k.default.number,minResolution:N,maxResolution:N},B),G=z(z({},w),R);x.default={all:G,types:w,matchers:I,features:R}}),"./src/toQuery.ts":(function(C,x,b){var z=this&&this.__importDefault||function(B){return B&&B.__esModule?B:{default:B}};Object.defineProperty(x,"__esModule",{value:!0});var A=z(b("./node_modules/hyphenate-style-name/index.js")),T=z(b("./src/mediaQuery.ts")),k=function(B){return"not ".concat(B)},N=function(B,R){var G=(0,A.default)(B);return typeof R=="number"&&(R="".concat(R,"px")),R===!0?G:R===!1?k(G):"(".concat(G,": ").concat(R,")")},w=function(B){return B.join(" and ")},I=function(B){var R=[];return Object.keys(T.default.all).forEach(function(G){var L=B[G];L!=null&&R.push(N(G,L))}),w(R)};x.default=I}),"./src/useMediaQuery.ts":(function(C,x,b){var z=this&&this.__importDefault||function(J){return J&&J.__esModule?J:{default:J}};Object.defineProperty(x,"__esModule",{value:!0});var A=b("react"),T=z(b("./node_modules/matchmediaquery/index.js")),k=z(b("./node_modules/hyphenate-style-name/index.js")),N=b("./node_modules/shallow-equal/dist/index.esm.js"),w=z(b("./src/toQuery.ts")),I=z(b("./src/Context.ts")),B=function(J){return J.query||(0,w.default)(J)},R=function(J){if(J){var mn=Object.keys(J);return mn.reduce(function(Tn,vn){return Tn[(0,k.default)(vn)]=J[vn],Tn},{})}},G=function(){var J=(0,A.useRef)(!1);return(0,A.useEffect)(function(){J.current=!0},[]),J.current},L=function(J){var mn=(0,A.useContext)(I.default),Tn=function(){return R(J)||R(mn)},vn=(0,A.useState)(Tn),cn=vn[0],Fn=vn[1];return(0,A.useEffect)(function(){var ne=Tn();(0,N.shallowEqualObjects)(cn,ne)||Fn(ne)},[J,mn]),cn},Q=function(J){var mn=function(){return B(J)},Tn=(0,A.useState)(mn),vn=Tn[0],cn=Tn[1];return(0,A.useEffect)(function(){var Fn=mn();vn!==Fn&&cn(Fn)},[J]),vn},Z=function(J,mn){var Tn=function(){return(0,T.default)(J,mn||{},!!mn)},vn=(0,A.useState)(Tn),cn=vn[0],Fn=vn[1],ne=G();return(0,A.useEffect)(function(){if(ne){var Gn=Tn();return Fn(Gn),function(){Gn&&Gn.dispose()}}},[J,mn]),cn},on=function(J){var mn=(0,A.useState)(J.matches),Tn=mn[0],vn=mn[1];return(0,A.useEffect)(function(){var cn=function(Fn){vn(Fn.matches)};return J.addListener(cn),vn(J.matches),function(){J.removeListener(cn)}},[J]),Tn},wn=function(J,mn,Tn){var vn=L(mn),cn=Q(J);if(!cn)throw new Error("Invalid or missing MediaQuery!");var Fn=Z(cn,vn),ne=on(Fn),Gn=G();return(0,A.useEffect)(function(){Gn&&Tn&&Tn(ne)},[ne]),(0,A.useEffect)(function(){return function(){Fn&&Fn.dispose()}},[]),ne};x.default=wn}),react:(C=>{C.exports=p})},j={};function $(C){var x=j[C];if(x!==void 0)return x.exports;var b=j[C]={exports:{}};return P[C].call(b.exports,b,b.exports,$),b.exports}$.d=(C,x)=>{for(var b in x)$.o(x,b)&&!$.o(C,b)&&Object.defineProperty(C,b,{enumerable:!0,get:x[b]})},$.o=(C,x)=>Object.prototype.hasOwnProperty.call(C,x),$.r=C=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(C,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(C,"__esModule",{value:!0})};var Y=$("./src/index.ts");return Y})())})(io)),io.exports}var zc=Jf();function Yf(c){return c<.5?2*c*c:1-Math.pow(-2*c+2,2)/2}function Bc({selector:c,duration:S=1500,offset:p=0}){const P=yn.useRef(null),j=yn.useRef(0),$=yn.useRef(!1),Y=()=>{j.current&&cancelAnimationFrame(j.current)},C=()=>$.current=!0,x=yn.useCallback(()=>{if(!P.current)return;Y(),$.current=!1;const z=P.current.offsetTop,A=window.scrollY,T=z-A-p,k=performance.now();if(!T)return;const N=w=>{const I=w-k,B=I/S,R=Yf(B>1?1:B),G=A+T*R;window.scrollTo({top:G}),I<S&&!$.current?requestAnimationFrame(N):j.current=0};requestAnimationFrame(N)},[c,S,p]);return yn.useEffect(()=>(P.current=document.querySelector(c),window.addEventListener("wheel",C,{passive:!0}),window.addEventListener("touchmove",C,{passive:!0}),()=>{Y(),window.removeEventListener("wheel",C),window.removeEventListener("touchmove",C)}),[c]),x}function Qe(...c){return c.filter(Boolean).join(" ")}const qf="_brand_18f9t_1",Qf="_bounce_18f9t_19",Xf="_glowDisappear_18f9t_23",Zf="_heartBeat_18f9t_27",np="_rubberBand_18f9t_31",ep="_rotate_18f9t_35",br={brand:qf,bounce:Qf,glowDisappear:Xf,heartBeat:Zf,rubberBand:np,rotate:ep};function tp(){const[c,S]=yn.useState(br.rotate),[p,P]=yn.useState(!1),j=[br.bounce,br.glowDisappear,br.heartBeat,br.rubberBand,br.rotate],$=Qe(br.brand,p&&c),Y=()=>P(!1),C=()=>{const x=Math.floor(Math.random()*j.length),b=j[x];P(!0),S(b)};return r.jsx("div",{className:$,onClick:C,onAnimationEnd:Y,children:"JWL"})}const rp="_container_uucyv_1",ip="_input_uucyv_6",ap="_label_uucyv_16",op="_indicator_uucyv_20",sp="_decoration_uucyv_28",Di={container:rp,input:ip,label:ap,indicator:op,decoration:sp};function kc(){const c=document.documentElement,[S,p]=yn.useState(!1),P=()=>{const $=new Event("themeChange");c.dispatchEvent($)},j=()=>{p(!S),c.setAttribute("data-theme",S?"dark":"light"),P()};return yn.useEffect(()=>{const $=c.getAttribute("data-theme");p($==="light"),P()},[]),r.jsxs("div",{className:Di.container,children:[r.jsx("input",{className:Di.input,"aria-label":"theme switch",id:"theme-switch",type:"checkbox",checked:S,onChange:j}),r.jsxs("label",{className:Di.label,htmlFor:"theme-switch",children:[r.jsx("span",{className:Di.indicator}),r.jsx("span",{className:Di.decoration})]})]})}function lp(){const c=document.documentElement,[S,p]=yn.useState("light"),P=()=>{const j=c.getAttribute("data-theme")??"light";p(j)};return yn.useEffect(()=>(c.addEventListener("themeChange",P),()=>c.removeEventListener("themeChange",P)),[c]),S}function up(){const S=lp()==="dark"?"#FFFFFF":"#181616";return r.jsx("svg",{viewBox:"0 0 128 128",children:r.jsxs("g",{fill:S,children:[r.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}),r.jsx("path",{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"})]})})}const cp=72;function dp({forwardedRef:c}){const S=yn.useRef(null),p=Bc({selector:"main",offset:cp}),{isSidebarOpen:P,toggleSidebar:j}=Xs(),$=zc.useMediaQuery({maxWidth:768}),Y=Qe(pt.hamburgerIcon,!P&&pt.collapsed),C=k=>{k.preventDefault(),window.history.replaceState({},"",window.location.pathname),p()},x=()=>j(),b=()=>!$&&r.jsx(tp,{}),z=()=>!$&&r.jsx("a",{href:"main",onClick:C,role:"button",children:r.jsx("h1",{className:pt.title,children:"LeetCode Cheatsheet"})}),A=()=>r.jsx("a",{href:"/leetcode-cheatsheet","aria-label":"GitHub source",className:pt.iconLink,target:"_blank",children:r.jsx(up,{})}),T=()=>$?r.jsxs(r.Fragment,{children:[r.jsx(kc,{}),A()]}):r.jsxs("div",{className:pt.buttonContainer,children:[A(),r.jsx(kc,{})]});return r.jsx("header",{ref:S,className:pt.topbar,children:r.jsxs("div",{className:pt.container,children:[r.jsxs("div",{ref:c,className:pt.hamburger,onClick:x,children:[r.jsx("span",{className:Qe(Y,pt.hamburgerTop)}),r.jsx("span",{className:Qe(Y,pt.hamburgerMiddle)}),r.jsx("span",{className:Qe(Y,pt.hamburgerBottom)})]}),b(),z(),T()]})})}const fp="_sidebar_14bou_1",pp="_exit_14bou_21",hp="_hide_14bou_24",gp="_scrollContainer_14bou_28",Xa={sidebar:fp,exit:pp,hide:hp,scrollContainer:gp};function so(c,S){const p=P=>{const j=$=>$.current&&!$.current.contains(P.target);(Array.isArray(c)?c.every(j):j(c))&&S()};yn.useEffect(()=>(document.addEventListener("click",p),()=>document.removeEventListener("click",p)),[c,S])}const mp="_accordion_1hmri_1",vp="_button_1hmri_6",yp="_open_1hmri_25",xp="_content_1hmri_29",Za={accordion:mp,button:vp,open:yp,content:xp};function _p(c){const S=parseFloat(c);return!isNaN(S)&&isFinite(S)}function Ec(c){return typeof c=="string"&&c[c.length-1]==="%"&&_p(c.substring(0,c.length-1))}function Ys(c,S,p){S===0&&!p&&c?.style&&c?.children.length>0&&(c.style.display="none")}function bp(c,S){S===0&&c?.style&&(c.style.display="")}const wp={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function Nc(c,S){return[c.static,S===0&&c.staticHeightZero,typeof S=="number"&&S>0?c.staticHeightSpecific:null,S==="auto"&&c.staticHeightAuto].filter(p=>p).join(" ")}const Sp=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"],Tp=ro.forwardRef((c,S)=>{const{animateOpacity:p=!1,animationStateClasses:P={},applyInlineTransitions:j=!0,children:$,className:Y="",contentClassName:C,delay:x=0,disableDisplayNone:b=!1,duration:z=500,easing:A="ease",height:T,onHeightAnimationEnd:k,onHeightAnimationStart:N,style:w,contentRef:I}=c,B=Object.assign({},c);Sp.forEach(Un=>{delete B[Un]});const R=yn.useRef(T),G=yn.useRef(null),L=yn.useRef(),Q=yn.useRef(),Z=yn.useRef(Object.assign(Object.assign({},wp),P)),on=typeof window<"u",wn=yn.useRef(on&&window.matchMedia?window.matchMedia("(prefers-reduced-motion)").matches:!1),J=wn.current?0:x,mn=wn.current?0:z;let Tn=T,vn="visible";typeof T=="number"?(Tn=T<0?0:T,vn="hidden"):Ec(Tn)&&(Tn=T==="0%"?0:T,vn="hidden");const[cn,Fn]=yn.useState(Tn),[ne,Gn]=yn.useState(vn),[Yn,F]=yn.useState(!1),[dn,d]=yn.useState(Nc(Z.current,T));yn.useEffect(()=>{Ys(G.current,cn,b)},[]),yn.useEffect(()=>{if(T!==R.current&&G.current){bp(G.current,R.current),G.current.style.overflow="hidden";const Un=G.current.offsetHeight;G.current.style.overflow="";const Nn=mn+J;let jn,Sn,ue="hidden",H;const nn=R.current==="auto";typeof T=="number"?(jn=T<0?0:T,Sn=jn):Ec(T)?(jn=T==="0%"?0:T,Sn=jn):(jn=Un,Sn="auto",ue=void 0),nn&&(Sn=jn,jn=Un);const In=[Z.current.animating,(R.current==="auto"||T<R.current)&&Z.current.animatingUp,(T==="auto"||T>R.current)&&Z.current.animatingDown,Sn===0&&Z.current.animatingToHeightZero,Sn==="auto"&&Z.current.animatingToHeightAuto,typeof Sn=="number"&&Sn>0?Z.current.animatingToHeightSpecific:null].filter(En=>En).join(" "),Cn=Nc(Z.current,Sn);Fn(jn),Gn("hidden"),F(!nn),d(In),clearTimeout(Q.current),clearTimeout(L.current),nn?(H=!0,Q.current=setTimeout(()=>{Fn(Sn),Gn(ue),F(H),N?.(Sn)},50),L.current=setTimeout(()=>{F(!1),d(Cn),Ys(G.current,Sn,b),k?.(Sn)},Nn)):(N?.(jn),Q.current=setTimeout(()=>{Fn(Sn),Gn(ue),F(!1),d(Cn),T!=="auto"&&Ys(G.current,jn,b),k?.(jn)},Nn))}return R.current=T,()=>{clearTimeout(Q.current),clearTimeout(L.current)}},[T]);const E=Object.assign(Object.assign({},w),{height:cn,overflow:ne||w?.overflow});Yn&&j&&(E.transition=`height ${mn}ms ${A} ${J}ms`,w?.transition&&(E.transition=`${w.transition}, ${E.transition}`),E.WebkitTransition=E.transition);const tn={};p&&(tn.transition=`opacity ${mn}ms ${A} ${J}ms`,tn.WebkitTransition=tn.transition,cn===0&&(tn.opacity=0));const kn=typeof B["aria-hidden"]<"u"?B["aria-hidden"]:T===0;return ro.createElement("div",Object.assign({},B,{"aria-hidden":kn,className:`${dn} ${Y}`,style:E,ref:S}),ro.createElement("div",{className:C,style:tn,ref:Un=>{G.current=Un,I&&(I.current=Un)}},$))});function jp(){return r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.jsx("polyline",{points:"6 9 12 15 18 9"})})}function De({title:c,children:S}){const[p,P]=yn.useState(!1),j=p?"auto":0,$=Qe(Za.button,p&&Za.open),Y=()=>P(!p);return r.jsxs("div",{className:Za.accordion,children:[r.jsxs("button",{className:$,onClick:Y,children:[r.jsx("span",{children:c}),r.jsx(jp,{})]}),r.jsx(Tp,{animateOpacity:!0,height:j,duration:400,children:r.jsx("div",{className:Za.content,children:S})})]})}const kp="_linkWrapper_1logo_1",Ep="_link_1logo_1",Oc={linkWrapper:kp,link:Ep},Np="_tooltip_1edpy_1",Op="_exit_1edpy_13",Ap="_text_1edpy_27",qs={tooltip:Np,exit:Op,text:Ap};var Cp=Mc();const Lp=ao(Cp);function Rp({anchorRef:c,content:S,showTooltip:p}){const P=yn.useRef(null),[j,$]=yn.useState(null),[Y,C]=yn.useState(!1),x=Qe(qs.tooltip,!p&&qs.exit),b=()=>C(!1),z=()=>{p||C(!0)};return yn.useEffect(()=>{if(!p||!c.current)return;const A=c.current.getBoundingClientRect(),T=P.current?.offsetHeight??0,k=A.left+window.scrollX,N=A.top+window.scrollY-T-4;$({top:N,left:k})},[p]),(p||!Y)&&c.current&&Lp.createPortal(r.jsx("div",{ref:P,className:x,style:j??{},onAnimationStart:b,onAnimationEnd:z,children:r.jsx("span",{className:qs.text,children:S})}),document.body)}function en({href:c,description:S}){const p=yn.useRef(null),[P,j]=yn.useState(!1),$=Bc({selector:c,offset:72});let Y;const C=z=>{z.preventDefault(),window.history.replaceState({},"",c),clearTimeout(Y),j(!1),$()},x=()=>{Y=setTimeout(()=>{j(!0)},700)},b=()=>{clearTimeout(Y),j(!1)};return r.jsxs("div",{className:Oc.linkWrapper,children:[r.jsx("a",{ref:p,href:c,className:Oc.link,onClick:C,role:"button","aria-description":S,onMouseEnter:x,onMouseLeave:b,children:S}),r.jsx(Rp,{anchorRef:p,content:S,showTooltip:P})]})}function Pp(){return r.jsxs(r.Fragment,{children:[r.jsxs(De,{title:"Big O",children:[r.jsx(en,{href:"#bigo-chart",description:"Time/Space Complexities"}),r.jsx(en,{href:"#bigo-data-structure-operations-table",description:"Data Structure Operations"}),r.jsx(en,{href:"#bigo-sorting-algorithms-table",description:"Sorting Algorithms"})]}),r.jsxs(De,{title:"Array",children:[r.jsx(en,{href:"#array-two-pointers-one-input",description:"two pointers: one input, opposite ends"}),r.jsx(en,{href:"#array-two-pointers-two-inputs",description:"two pointers: two inputs, exhaust both"}),r.jsx(en,{href:"#array-sliding-window",description:"sliding window"}),r.jsx(en,{href:"#array-prefix-sum",description:"prefix sum"}),r.jsx(en,{href:"#array-string-building",description:"efficient string building"})]}),r.jsxs(De,{title:"Hash Map",children:[r.jsx(en,{href:"#hashmap-find-number-of-subarrays",description:"find number of subarrays that fit an exact criteria"}),r.jsx(en,{href:"#hashmap-sliding-window",description:"sliding window"})]}),r.jsxs(De,{title:"Linked List",children:[r.jsx(en,{href:"#linkedlist-fast-and-slow-pointer",description:"fast and slow pointer"}),r.jsx(en,{href:"#linkedlist-reverse",description:"reverse linked list"})]}),r.jsxs(De,{title:"Stack",children:[r.jsx(en,{href:"#stack-monotonic-increasing",description:"monotonic increasing stack"}),r.jsx(en,{href:"#stack-monotonic-decreasing",description:"monotonic decreasing stack"})]}),r.jsxs(De,{title:"Binary Tree",children:[r.jsx(en,{href:"#tree-dfs-recursive",description:"DFS (recursive)"}),r.jsx(en,{href:"#tree-dfs-iterative",description:"DFS (iterative)"}),r.jsx(en,{href:"#tree-bfs",description:"BFS"})]}),r.jsxs(De,{title:"Graph",children:[r.jsx(en,{href:"#graph-dfs-recursive",description:"DFS (recursive)"}),r.jsx(en,{href:"#graph-dfs-iterative",description:"DFS (iterative)"}),r.jsx(en,{href:"#graph-bfs",description:"BFS"}),r.jsx(en,{href:"#graph-dijkstra",description:"Dijkstra (shortest path)"}),r.jsx(en,{href:"#graph-bellman-ford",description:"Bellman-Ford (shortest path)"}),r.jsx(en,{href:"#graph-kahn",description:"Kahn (topological sort)"}),r.jsx(en,{href:"#graph-kruskal",description:"Kruskal (mst)"}),r.jsx(en,{href:"#graph-prim",description:"Prim (mst)"})]}),r.jsx(De,{title:"Heap",children:r.jsx(en,{href:"#heap-find-top-k-elements",description:"find top k elements with heap"})}),r.jsxs(De,{title:"Binary Search",children:[r.jsx(en,{href:"#binarysearch-binary-search",description:"binary search"}),r.jsx(en,{href:"#binarysearch-duplicate-elements-left-insertion",description:"duplicate elements, left-most insertion point"}),r.jsx(en,{href:"#binarysearch-duplicate-elements-right-insertion",description:"duplicate elements, right-most insertion point"}),r.jsx(en,{href:"#binarysearch-greedy-minimum",description:"greedy (minimum)"}),r.jsx(en,{href:"#binarysearch-greedy-maximum",description:"greedy (maximum)"})]}),r.jsx(De,{title:"Backtracking",children:r.jsx(en,{href:"#backtracking-backtracking",description:"backtracking"})}),r.jsxs(De,{title:"Dynamic Programming",children:[r.jsx(en,{href:"#dp-top-down",description:"top-down DP"}),r.jsx(en,{href:"#dp-bottom-up",description:"bottom-up DP"}),r.jsx(en,{href:"#dp-kadane",description:"Kadane (max-sum subarray)"})]}),r.jsxs(De,{title:"Bit Manipulation",children:[r.jsx(en,{href:"#bitmanipulation-test-kth-bit",description:"test kth bit"}),r.jsx(en,{href:"#bitmanipulation-set-kth-bit",description:"set kth bit"}),r.jsx(en,{href:"#bitmanipulation-clear-kth-bit",description:"clear kth bit"}),r.jsx(en,{href:"#bitmanipulation-get-rightmost-bit",description:"get rightmost bit"}),r.jsx(en,{href:"#bitmanipulation-count-set-bits",description:"count set bits"}),r.jsx(en,{href:"#bitmanipulation-multiply-power-of-two",description:"multiply by 2^k"}),r.jsx(en,{href:"#bitmanipulation-divide-power-of-two",description:"divide by 2^k"}),r.jsx(en,{href:"#bitmanipulation-check-power-of-two",description:"check if number is power of 2"}),r.jsx(en,{href:"#bitmanipulation-swap-variables",description:"swap two variables"})]}),r.jsxs(De,{title:"Matrix",children:[r.jsx(en,{href:"#matrix-create-copy",description:"create / copy"}),r.jsx(en,{href:"#matrix-diagonals",description:"main / anti diagonals"}),r.jsx(en,{href:"#matrix-rotate-transpose",description:"rotate / transpose"})]}),r.jsxs(De,{title:"Data Structures",children:[r.jsx(en,{href:"#ds-array",description:"array"}),r.jsx(en,{href:"#ds-hash-map",description:"hashmap"}),r.jsx(en,{href:"#ds-linked-list",description:"linked list"}),r.jsx(en,{href:"#ds-doubly-linked-list",description:"doubly linked list"}),r.jsx(en,{href:"#ds-binary-tree",description:"binary tree"}),r.jsx(en,{href:"#ds-binary-search-tree",description:"binary search tree"}),r.jsx(en,{href:"#ds-graph",description:"graph"}),r.jsx(en,{href:"#ds-union-find",description:"union find"}),r.jsx(en,{href:"#ds-union-find-optimized",description:"union find optimized"}),r.jsx(en,{href:"#ds-trie",description:"trie"})]}),r.jsxs(De,{title:"Sorting Algorithms",children:[r.jsx(en,{href:"#sort-bubble",description:"bubble sort"}),r.jsx(en,{href:"#sort-selection",description:"selection sort"}),r.jsx(en,{href:"#sort-insertion",description:"insertion sort"}),r.jsx(en,{href:"#sort-shell",description:"shell sort"}),r.jsx(en,{href:"#sort-merge",description:"mergesort"}),r.jsx(en,{href:"#sort-quick",description:"quicksort"}),r.jsx(en,{href:"#sort-tim",description:"timsort"}),r.jsx(en,{href:"#sort-heap",description:"heapsort"}),r.jsx(en,{href:"#sort-counting",description:"counting sort"}),r.jsx(en,{href:"#sort-bucket",description:"bucket sort"}),r.jsx(en,{href:"#sort-radix",description:"radix sort"}),r.jsx(en,{href:"#sort-cube",description:"cubesort"}),r.jsx(en,{href:"#sort-bogo",description:"bogo sort"}),r.jsx(en,{href:"#sort-pancake",description:"pancake sort"}),r.jsx(en,{href:"#sort-sleep",description:"sleep sort"})]})]})}function Mp({hamburgerButtonRef:c}){const S=yn.useRef(null),{isSidebarOpen:p,showSidebar:P,hideSidebar:j}=Xs(),[$,Y]=yn.useState(!1),C=Qe(Xa.sidebar,!p&&Xa.exit,!p&&$&&Xa.hide),x=k=>{k&&p?j():!k&&!p&&P()},b=zc.useMediaQuery({maxWidth:768},void 0,x),z=()=>{b&&p&&j()},A=()=>Y(!1),T=()=>{p||Y(!0)};return so([S,c],z),r.jsx("nav",{ref:S,className:C,onAnimationStart:A,onAnimationEndCapture:T,children:r.jsx("div",{className:Xa.scrollContainer,children:r.jsx(Pp,{})})})}function Ip(){const c=yn.useRef(null);return r.jsxs("div",{id:"AppBar",children:[r.jsx(dp,{forwardedRef:c}),r.jsx(Mp,{hamburgerButtonRef:c})]})}const Dp="_main_1p6ym_1",zp="_sidebarHidden_1p6ym_11",Ac={main:Dp,sidebarHidden:zp},Bp="_container_1htmy_1",Fp="_sectionHeader_1htmy_7",Zn={container:Bp,sectionHeader:Fp},Up="_container_5c21h_1",Hp="_label_5c21h_13",Wp="_tableWrapper_5c21h_21",Vp="_red_5c21h_30",$p="_oliveGreen_5c21h_34",Kp="_green_5c21h_38",Gp="_orange_5c21h_42",Jp="_yellow_5c21h_46",Yp="_gray_5c21h_50",m={container:Up,label:Hp,tableWrapper:Wp,red:Vp,oliveGreen:$p,green:Kp,orange:Gp,yellow:Jp,gray:Yp};function qp(){const c={red:"rgba(255, 77, 77, 0.7)",orange:"rgba(255, 161, 22, 0.7)",yellow:"rgba(255, 216, 102, 0.7)",oliveGreen:"rgba(169, 220, 118, 0.7)",green:"rgba(63, 200, 111, 0.7)"};return r.jsx("section",{id:"bigo-chart",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Big-O Complexity Chart"}),r.jsxs("svg",{id:"chart",viewBox:"0 0 800 500",children:[r.jsx("path",{d:"M50 450 L 50 0 L 800 0 L 800 450 Z",fill:c.red}),r.jsx("path",{d:"M50 450 L 800 0 L 800 450 Z",fill:c.orange}),r.jsx("path",{d:"M50 450 L 800 450 L 800 330 Z",fill:c.yellow}),r.jsx("path",{d:"M50 450 L 800 450 L 800 410 Z",fill:c.oliveGreen}),r.jsx("path",{d:"M50 450 L 800 450 L 800 440 Z",fill:c.green}),r.jsx("path",{d:"M50 0 L 50 450 L 800 450",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("path",{d:"M50 448 L 800 448",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"700",y:"438",fill:"black",children:"O(log n), O(1)"}),r.jsx("path",{d:"M50 450 L 800 400",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"760",y:"390",fill:"black",children:"O(n)"}),r.jsx("path",{d:"M50 450 Q 400 350, 800 150",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"630",y:"190",fill:"black",children:"O(n log n)"}),r.jsx("path",{d:"M50 450 Q 180 380, 250 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"260",y:"30",fill:"black",children:"O(n^2)"}),r.jsx("path",{d:"M50 450 C 100 430, 120 350, 120 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"125",y:"20",fill:"black",children:"O(2^n)"}),r.jsx("path",{d:"M50 450 C 80 450, 80 350, 80 0",fill:"transparent",stroke:"black",strokeWidth:"2"}),r.jsx("text",{x:"80",y:"20",fill:"black",children:"O(n!)"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(30 230) rotate(-90)",fill:"black",children:"Operations"}),r.jsx("text",{className:m.label,x:"0",y:"0",transform:"translate(420 470)",fill:"black",children:"Elements"})]})]})})}function Qp(){const c=yn.useRef(null),[S,p]=yn.useState(""),P=()=>{S&&c.current?.querySelector(`tr[data-row-number="${S}"]`)?.removeAttribute("focused")},j=$=>{const Y=$.currentTarget,C=Y.getAttribute("data-row-number")??"";P(),C===S?p(""):(Y.setAttribute("focused",""),p(C))};return so(c,P),r.jsx("section",{id:"bigo-data-structure-operations-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Data Structure Operations"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{ref:c,children:r.jsxs("tbody",{children:[r.jsxs("tr",{onClick:j,"data-row-number":"1",children:[r.jsx("th",{children:"Data Structure"}),r.jsx("th",{colSpan:8,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"2",children:[r.jsx("th",{}),r.jsx("th",{colSpan:4,children:"Average"}),r.jsx("th",{colSpan:4,children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"3",children:[r.jsx("th",{}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{children:"Access"}),r.jsx("th",{children:"Search"}),r.jsx("th",{children:"Insertion"}),r.jsx("th",{children:"Deletion"}),r.jsx("th",{})]}),r.jsxs("tr",{onClick:j,"data-row-number":"4",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Array_data_structure",target:"_blank",children:"Array"})}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"5",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Stack_(abstract_data_type)",target:"_blank",children:"Stack"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"6",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",children:"Queue"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"7",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_lists",target:"_blank",children:"Singly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"8",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",children:"Doubly-Linked List"})}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.yellow,children:"Θ(n)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.green,children:"O(1)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"9",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Skip_list",target:"_blank",children:"Skip List"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"10",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",children:"Hash Table"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.green,children:"Θ(1)"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"11",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Binary_search_tree",target:"_blank",children:"Binary Search Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"12",children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cartesian_tree",target:"_blank",children:"Cartesian Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"13",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/B_tree",target:"_blank",children:"B-Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"14",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Red-black_tree",target:"_blank",children:"Red-Black Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"15",children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Splay_tree",target:"_blank",children:"Splay Tree"})}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.gray,children:"N/A"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"16",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/AVL_tree",target:"_blank",children:"AVL Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"17",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/K-d_tree",target:"_blank",children:"KD Tree"})}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.oliveGreen,children:"Θ(log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function Xp(){const c=yn.useRef(null),[S,p]=yn.useState(""),P=()=>{S&&c.current?.querySelector(`tr[data-row-number="${S}"]`)?.removeAttribute("focused")},j=$=>{const Y=$.currentTarget,C=Y.getAttribute("data-row-number")??"";P(),C===S?p(""):(Y.setAttribute("focused",""),p(C))};return so(c,P),r.jsx("section",{id:"bigo-sorting-algorithms-table",children:r.jsxs("div",{className:m.container,children:[r.jsx("h3",{children:"Array Sorting Algorithms"}),r.jsx("div",{className:m.tableWrapper,children:r.jsx("table",{ref:c,children:r.jsxs("tbody",{children:[r.jsxs("tr",{onClick:j,"data-row-number":"1",children:[r.jsx("th",{children:"Algorithm"}),r.jsx("th",{colSpan:3,children:"Time Complexity"}),r.jsx("th",{children:"Space Complexity"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"2",children:[r.jsx("th",{}),r.jsx("th",{children:"Best"}),r.jsx("th",{children:"Average"}),r.jsx("th",{children:"Worst"}),r.jsx("th",{children:"Worst"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"3",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Quicksort",target:"_blank",children:"Quicksort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.oliveGreen,children:"O(log(n))"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"4",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Merge_sort",target:"_blank",children:"Mergesort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"5",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Timsort",target:"_blank",children:"Timsort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"6",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Heapsort",target:"_blank",children:"Heapsort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"7",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",children:"Bubble Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"8",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",children:"Insertion Sort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"9",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Selection_sort",target:"_blank",children:"Selection Sort"})}),r.jsx("td",{className:m.red,children:"Ω(n^2)"}),r.jsx("td",{className:m.red,children:"Θ(n^2)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"10",children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Tree_sort",target:"_blank",children:"Tree Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"11",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Shellsort",target:"_blank",children:"Shell Sort"})}),r.jsx("td",{className:m.orange,children:"Ω(n log(n))"}),r.jsx("td",{className:m.red,children:"Θ(n(log(n))^2)"}),r.jsx("td",{className:m.red,children:"O(n(log(n))^2)"}),r.jsx("td",{className:m.green,children:"O(1)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"12",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Bucket_sort",target:"_blank",children:"Bucket Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.red,children:"O(n^2)"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"13",children:[r.jsx("td",{children:r.jsx("a",{href:"http://en.wikipedia.org/wiki/Radix_sort",target:"_blank",children:"Radix Sort"})}),r.jsx("td",{className:m.green,children:"Ω(nk)"}),r.jsx("td",{className:m.green,children:"Θ(nk)"}),r.jsx("td",{className:m.green,children:"O(nk)"}),r.jsx("td",{className:m.yellow,children:"O(n+k)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"14",children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Counting_sort",children:"Counting Sort"})}),r.jsx("td",{className:m.green,children:"Ω(n+k)"}),r.jsx("td",{className:m.green,children:"Θ(n+k)"}),r.jsx("td",{className:m.green,children:"O(n+k)"}),r.jsx("td",{className:m.yellow,children:"O(k)"})]}),r.jsxs("tr",{onClick:j,"data-row-number":"15",children:[r.jsx("td",{children:r.jsx("a",{href:"https://en.wikipedia.org/wiki/Cubesort",target:"_blank",children:"Cubesort"})}),r.jsx("td",{className:m.yellow,children:"Ω(n)"}),r.jsx("td",{className:m.orange,children:"Θ(n log(n))"}),r.jsx("td",{className:m.orange,children:"O(n log(n))"}),r.jsx("td",{className:m.yellow,children:"O(n)"})]})]})})})]})})}function Zp(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Big O"}),r.jsx(qp,{}),r.jsx(Qp,{}),r.jsx(Xp,{})]})}const nh="_container_12crg_1",eh="_buttonContainer_12crg_12",th="_tabButtonContainer_12crg_18",rh="_tabButton_12crg_18",no={container:nh,buttonContainer:eh,tabButtonContainer:th,tabButton:rh},ih="_code_1qx6e_1",ah="_line_1qx6e_13",Cc={code:ih,line:ah};function oh(c){const S=c.regex,p=c.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),P="decltype\\(auto\\)",j="[a-zA-Z_]\\w*::",Y="(?!struct)("+P+"|"+S.optional(j)+"[a-zA-Z_]\\w*"+S.optional("<[^<>]+>")+")",C={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},b={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[c.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},c.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},z={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},A={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},c.inherit(b,{className:"string"}),{className:"string",begin:/<.*?>/},p,c.C_BLOCK_COMMENT_MODE]},T={className:"title",begin:S.optional(j)+c.IDENT_RE,relevance:0},k=S.optional(j)+c.IDENT_RE+"\\s*\\(",N=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],w=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],I=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],B=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],L={type:w,keyword:N,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:I},Q={className:"function.dispatch",relevance:0,keywords:{_hint:B},begin:S.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,c.IDENT_RE,S.lookahead(/(<[^<>]+>|)\s*\(/))},Z=[Q,A,C,p,c.C_BLOCK_COMMENT_MODE,z,b],on={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:L,contains:Z.concat([{begin:/\(/,end:/\)/,keywords:L,contains:Z.concat(["self"]),relevance:0}]),relevance:0},wn={className:"function",begin:"("+Y+"[\\*&\\s]+)+"+k,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:L,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:P,keywords:L,relevance:0},{begin:k,returnBegin:!0,contains:[T],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[b,z]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:L,relevance:0,contains:[p,c.C_BLOCK_COMMENT_MODE,b,z,C,{begin:/\(/,end:/\)/,keywords:L,relevance:0,contains:["self",p,c.C_BLOCK_COMMENT_MODE,b,z,C]}]},C,p,c.C_BLOCK_COMMENT_MODE,A]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:L,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(on,wn,Q,Z,[A,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",end:">",keywords:L,contains:["self",C]},{begin:c.IDENT_RE+"::",keywords:L},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}var Qs,Lc;function sh(){if(Lc)return Qs;Lc=1;function c(f){return f instanceof Map?f.clear=f.delete=f.set=function(){throw new Error("map is read-only")}:f instanceof Set&&(f.add=f.clear=f.delete=function(){throw new Error("set is read-only")}),Object.freeze(f),Object.getOwnPropertyNames(f).forEach(O=>{const q=f[O],On=typeof q;(On==="object"||On==="function")&&!Object.isFrozen(q)&&c(q)}),f}class S{constructor(O){O.data===void 0&&(O.data={}),this.data=O.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function p(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function P(f,...O){const q=Object.create(null);for(const On in f)q[On]=f[On];return O.forEach(function(On){for(const ae in On)q[ae]=On[ae]}),q}const j="</span>",$=f=>!!f.scope,Y=(f,{prefix:O})=>{if(f.startsWith("language:"))return f.replace("language:","language-");if(f.includes(".")){const q=f.split(".");return[`${O}${q.shift()}`,...q.map((On,ae)=>`${On}${"_".repeat(ae+1)}`)].join(" ")}return`${O}${f}`};class C{constructor(O,q){this.buffer="",this.classPrefix=q.classPrefix,O.walk(this)}addText(O){this.buffer+=p(O)}openNode(O){if(!$(O))return;const q=Y(O.scope,{prefix:this.classPrefix});this.span(q)}closeNode(O){$(O)&&(this.buffer+=j)}value(){return this.buffer}span(O){this.buffer+=`<span class="${O}">`}}const x=(f={})=>{const O={children:[]};return Object.assign(O,f),O};class b{constructor(){this.rootNode=x(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(O){this.top.children.push(O)}openNode(O){const q=x({scope:O});this.add(q),this.stack.push(q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(O){return this.constructor._walk(O,this.rootNode)}static _walk(O,q){return typeof q=="string"?O.addText(q):q.children&&(O.openNode(q),q.children.forEach(On=>this._walk(O,On)),O.closeNode(q)),O}static _collapse(O){typeof O!="string"&&O.children&&(O.children.every(q=>typeof q=="string")?O.children=[O.children.join("")]:O.children.forEach(q=>{b._collapse(q)}))}}class z extends b{constructor(O){super(),this.options=O}addText(O){O!==""&&this.add(O)}startScope(O){this.openNode(O)}endScope(){this.closeNode()}__addSublanguage(O,q){const On=O.root;q&&(On.scope=`language:${q}`),this.add(On)}toHTML(){return new C(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function A(f){return f?typeof f=="string"?f:f.source:null}function T(f){return w("(?=",f,")")}function k(f){return w("(?:",f,")*")}function N(f){return w("(?:",f,")?")}function w(...f){return f.map(q=>A(q)).join("")}function I(f){const O=f[f.length-1];return typeof O=="object"&&O.constructor===Object?(f.splice(f.length-1,1),O):{}}function B(...f){return"("+(I(f).capture?"":"?:")+f.map(On=>A(On)).join("|")+")"}function R(f){return new RegExp(f.toString()+"|").exec("").length-1}function G(f,O){const q=f&&f.exec(O);return q&&q.index===0}const L=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Q(f,{joinWith:O}){let q=0;return f.map(On=>{q+=1;const ae=q;let de=A(On),sn="";for(;de.length>0;){const an=L.exec(de);if(!an){sn+=de;break}sn+=de.substring(0,an.index),de=de.substring(an.index+an[0].length),an[0][0]==="\\"&&an[1]?sn+="\\"+String(Number(an[1])+ae):(sn+=an[0],an[0]==="("&&q++)}return sn}).map(On=>`(${On})`).join(O)}const Z=/\b\B/,on="[a-zA-Z]\\w*",wn="[a-zA-Z_]\\w*",J="\\b\\d+(\\.\\d+)?",mn="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Tn="\\b(0b[01]+)",vn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",cn=(f={})=>{const O=/^#![ ]*\//;return f.binary&&(f.begin=w(O,/.*\b/,f.binary,/\b.*/)),P({scope:"meta",begin:O,end:/$/,relevance:0,"on:begin":(q,On)=>{q.index!==0&&On.ignoreMatch()}},f)},Fn={begin:"\\\\[\\s\\S]",relevance:0},ne={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Fn]},Gn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Fn]},Yn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},F=function(f,O,q={}){const On=P({scope:"comment",begin:f,end:O,contains:[]},q);On.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const ae=B("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return On.contains.push({begin:w(/[ ]+/,"(",ae,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),On},dn=F("//","$"),d=F("/\\*","\\*/"),E=F("#","$"),tn={scope:"number",begin:J,relevance:0},Mn={scope:"number",begin:mn,relevance:0},kn={scope:"number",begin:Tn,relevance:0},Un={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Fn,{begin:/\[/,end:/\]/,relevance:0,contains:[Fn]}]},Nn={scope:"title",begin:on,relevance:0},jn={scope:"title",begin:wn,relevance:0},Sn={begin:"\\.\\s*"+wn,relevance:0};var H=Object.freeze({__proto__:null,APOS_STRING_MODE:ne,BACKSLASH_ESCAPE:Fn,BINARY_NUMBER_MODE:kn,BINARY_NUMBER_RE:Tn,COMMENT:F,C_BLOCK_COMMENT_MODE:d,C_LINE_COMMENT_MODE:dn,C_NUMBER_MODE:Mn,C_NUMBER_RE:mn,END_SAME_AS_BEGIN:function(f){return Object.assign(f,{"on:begin":(O,q)=>{q.data._beginMatch=O[1]},"on:end":(O,q)=>{q.data._beginMatch!==O[1]&&q.ignoreMatch()}})},HASH_COMMENT_MODE:E,IDENT_RE:on,MATCH_NOTHING_RE:Z,METHOD_GUARD:Sn,NUMBER_MODE:tn,NUMBER_RE:J,PHRASAL_WORDS_MODE:Yn,QUOTE_STRING_MODE:Gn,REGEXP_MODE:Un,RE_STARTERS_RE:vn,SHEBANG:cn,TITLE_MODE:Nn,UNDERSCORE_IDENT_RE:wn,UNDERSCORE_TITLE_MODE:jn});function nn(f,O){f.input[f.index-1]==="."&&O.ignoreMatch()}function In(f,O){f.className!==void 0&&(f.scope=f.className,delete f.className)}function Cn(f,O){O&&f.beginKeywords&&(f.begin="\\b("+f.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",f.__beforeBegin=nn,f.keywords=f.keywords||f.beginKeywords,delete f.beginKeywords,f.relevance===void 0&&(f.relevance=0))}function En(f,O){Array.isArray(f.illegal)&&(f.illegal=B(...f.illegal))}function Hn(f,O){if(f.match){if(f.begin||f.end)throw new Error("begin & end are not supported with match");f.begin=f.match,delete f.match}}function Dn(f,O){f.relevance===void 0&&(f.relevance=1)}const zn=(f,O)=>{if(!f.beforeMatch)return;if(f.starts)throw new Error("beforeMatch cannot be used with starts");const q=Object.assign({},f);Object.keys(f).forEach(On=>{delete f[On]}),f.keywords=q.keywords,f.begin=w(q.beforeMatch,T(q.begin)),f.starts={relevance:0,contains:[Object.assign(q,{endsParent:!0})]},f.relevance=0,delete q.beforeMatch},Wn=["of","and","for","in","not","or","if","then","parent","list","value"],$n="keyword";function Bn(f,O,q=$n){const On=Object.create(null);return typeof f=="string"?ae(q,f.split(" ")):Array.isArray(f)?ae(q,f):Object.keys(f).forEach(function(de){Object.assign(On,Bn(f[de],O,de))}),On;function ae(de,sn){O&&(sn=sn.map(an=>an.toLowerCase())),sn.forEach(function(an){const xn=an.split("|");On[xn[0]]=[de,X(xn[0],xn[1])]})}}function X(f,O){return O?Number(O):ce(f)?0:1}function ce(f){return Wn.includes(f.toLowerCase())}const Ee={},$e=f=>{console.error(f)},Zr=(f,...O)=>{console.log(`WARN: ${f}`,...O)},wt=(f,O)=>{Ee[`${f}/${O}`]||(console.log(`Deprecated as of ${f}. ${O}`),Ee[`${f}/${O}`]=!0)},Mt=new Error;function er(f,O,{key:q}){let On=0;const ae=f[q],de={},sn={};for(let an=1;an<=O.length;an++)sn[an+On]=ae[an],de[an+On]=!0,On+=R(O[an-1]);f[q]=sn,f[q]._emit=de,f[q]._multi=!0}function zi(f){if(Array.isArray(f.begin)){if(f.skip||f.excludeBegin||f.returnBegin)throw $e("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Mt;if(typeof f.beginScope!="object"||f.beginScope===null)throw $e("beginScope must be object"),Mt;er(f,f.begin,{key:"beginScope"}),f.begin=Q(f.begin,{joinWith:""})}}function tr(f){if(Array.isArray(f.end)){if(f.skip||f.excludeEnd||f.returnEnd)throw $e("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Mt;if(typeof f.endScope!="object"||f.endScope===null)throw $e("endScope must be object"),Mt;er(f,f.end,{key:"endScope"}),f.end=Q(f.end,{joinWith:""})}}function rr(f){f.scope&&typeof f.scope=="object"&&f.scope!==null&&(f.beginScope=f.scope,delete f.scope)}function lo(f){rr(f),typeof f.beginScope=="string"&&(f.beginScope={_wrap:f.beginScope}),typeof f.endScope=="string"&&(f.endScope={_wrap:f.endScope}),zi(f),tr(f)}function Bi(f){function O(sn,an){return new RegExp(A(sn),"m"+(f.case_insensitive?"i":"")+(f.unicodeRegex?"u":"")+(an?"g":""))}class q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(an,xn){xn.position=this.position++,this.matchIndexes[this.matchAt]=xn,this.regexes.push([xn,an]),this.matchAt+=R(an)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const an=this.regexes.map(xn=>xn[1]);this.matcherRe=O(Q(an,{joinWith:"|"}),!0),this.lastIndex=0}exec(an){this.matcherRe.lastIndex=this.lastIndex;const xn=this.matcherRe.exec(an);if(!xn)return null;const ye=xn.findIndex((ht,Dt)=>Dt>0&&ht!==void 0),re=this.matchIndexes[ye];return xn.splice(0,ye),Object.assign(xn,re)}}class On{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(an){if(this.multiRegexes[an])return this.multiRegexes[an];const xn=new q;return this.rules.slice(an).forEach(([ye,re])=>xn.addRule(ye,re)),xn.compile(),this.multiRegexes[an]=xn,xn}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(an,xn){this.rules.push([an,xn]),xn.type==="begin"&&this.count++}exec(an){const xn=this.getMatcher(this.regexIndex);xn.lastIndex=this.lastIndex;let ye=xn.exec(an);if(this.resumingScanAtSamePosition()&&!(ye&&ye.index===this.lastIndex)){const re=this.getMatcher(0);re.lastIndex=this.lastIndex+1,ye=re.exec(an)}return ye&&(this.regexIndex+=ye.position+1,this.regexIndex===this.count&&this.considerAll()),ye}}function ae(sn){const an=new On;return sn.contains.forEach(xn=>an.addRule(xn.begin,{rule:xn,type:"begin"})),sn.terminatorEnd&&an.addRule(sn.terminatorEnd,{type:"end"}),sn.illegal&&an.addRule(sn.illegal,{type:"illegal"}),an}function de(sn,an){const xn=sn;if(sn.isCompiled)return xn;[In,Hn,lo,zn].forEach(re=>re(sn,an)),f.compilerExtensions.forEach(re=>re(sn,an)),sn.__beforeBegin=null,[Cn,En,Dn].forEach(re=>re(sn,an)),sn.isCompiled=!0;let ye=null;return typeof sn.keywords=="object"&&sn.keywords.$pattern&&(sn.keywords=Object.assign({},sn.keywords),ye=sn.keywords.$pattern,delete sn.keywords.$pattern),ye=ye||/\w+/,sn.keywords&&(sn.keywords=Bn(sn.keywords,f.case_insensitive)),xn.keywordPatternRe=O(ye,!0),an&&(sn.begin||(sn.begin=/\B|\b/),xn.beginRe=O(xn.begin),!sn.end&&!sn.endsWithParent&&(sn.end=/\B|\b/),sn.end&&(xn.endRe=O(xn.end)),xn.terminatorEnd=A(xn.end)||"",sn.endsWithParent&&an.terminatorEnd&&(xn.terminatorEnd+=(sn.end?"|":"")+an.terminatorEnd)),sn.illegal&&(xn.illegalRe=O(sn.illegal)),sn.contains||(sn.contains=[]),sn.contains=[].concat(...sn.contains.map(function(re){return uo(re==="self"?sn:re)})),sn.contains.forEach(function(re){de(re,xn)}),sn.starts&&de(sn.starts,an),xn.matcher=ae(xn),xn}if(f.compilerExtensions||(f.compilerExtensions=[]),f.contains&&f.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return f.classNameAliases=P(f.classNameAliases||{}),de(f)}function ni(f){return f?f.endsWithParent||ni(f.starts):!1}function uo(f){return f.variants&&!f.cachedVariants&&(f.cachedVariants=f.variants.map(function(O){return P(f,{variants:null},O)})),f.cachedVariants?f.cachedVariants:ni(f)?P(f,{starts:f.starts?P(f.starts):null}):Object.isFrozen(f)?P(f):f}var ei="11.9.0";class ti extends Error{constructor(O,q){super(O),this.name="HTMLInjectionError",this.html=q}}const ir=p,Sr=P,Tr=Symbol("nomatch"),It=7,St=function(f){const O=Object.create(null),q=Object.create(null),On=[];let ae=!0;const de="Could not find the language '{}', did you forget to load/include a language module?",sn={disableAutodetect:!0,name:"Plain text",contains:[]};let an={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:z};function xn(W){return an.noHighlightRe.test(W)}function ye(W){let gn=W.className+" ";gn+=W.parentNode?W.parentNode.className:"";const Ln=an.languageDetectRe.exec(gn);if(Ln){const ee=gt(Ln[1]);return ee||(Zr(de.replace("{}",Ln[1])),Zr("Falling back to no-highlight mode for this block.",W)),ee?Ln[1]:"no-highlight"}return gn.split(/\s+/).find(ee=>xn(ee)||gt(ee))}function re(W,gn,Ln){let ee="",Qn="";typeof gn=="object"?(ee=W,Ln=gn.ignoreIllegals,Qn=gn.language):(wt("10.7.0","highlight(lang, code, ...args) has been deprecated."),wt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Qn=W,ee=gn),Ln===void 0&&(Ln=!0);const Ke={code:ee,language:Qn};kt("before:highlight",Ke);const mt=Ke.result?Ke.result:ht(Ke.language,Ke.code,Ln);return mt.code=Ke.code,kt("after:highlight",mt),mt}function ht(W,gn,Ln,ee){const Qn=Object.create(null);function Ke(K,ln){return K.keywords[ln]}function mt(){if(!Rn.keywords){xe.addText(te);return}let K=0;Rn.keywordPatternRe.lastIndex=0;let ln=Rn.keywordPatternRe.exec(te),Pn="";for(;ln;){Pn+=te.substring(K,ln.index);const Kn=ze.case_insensitive?ln[0].toLowerCase():ln[0],oe=Ke(Rn,Kn);if(oe){const[ot,qi]=oe;if(xe.addText(Pn),Pn="",Qn[Kn]=(Qn[Kn]||0)+1,Qn[Kn]<=It&&(sr+=qi),ot.startsWith("_"))Pn+=ln[0];else{const lr=ze.classNameAliases[ot]||ot;Pe(ln[0],lr)}}else Pn+=ln[0];K=Rn.keywordPatternRe.lastIndex,ln=Rn.keywordPatternRe.exec(te)}Pn+=te.substring(K),xe.addText(Pn)}function kr(){if(te==="")return;let K=null;if(typeof Rn.subLanguage=="string"){if(!O[Rn.subLanguage]){xe.addText(te);return}K=ht(Rn.subLanguage,te,!0,Nr[Rn.subLanguage]),Nr[Rn.subLanguage]=K._top}else K=ar(te,Rn.subLanguage.length?Rn.subLanguage:null);Rn.relevance>0&&(sr+=K.relevance),xe.__addSublanguage(K._emitter,K.language)}function Se(){Rn.subLanguage!=null?kr():mt(),te=""}function Pe(K,ln){K!==""&&(xe.startScope(ln),xe.addText(K),xe.endScope())}function zt(K,ln){let Pn=1;const Kn=ln.length-1;for(;Pn<=Kn;){if(!K._emit[Pn]){Pn++;continue}const oe=ze.classNameAliases[K[Pn]]||K[Pn],ot=ln[Pn];oe?Pe(ot,oe):(te=ot,mt(),te=""),Pn++}}function or(K,ln){return K.scope&&typeof K.scope=="string"&&xe.openNode(ze.classNameAliases[K.scope]||K.scope),K.beginScope&&(K.beginScope._wrap?(Pe(te,ze.classNameAliases[K.beginScope._wrap]||K.beginScope._wrap),te=""):K.beginScope._multi&&(zt(K.beginScope,ln),te="")),Rn=Object.create(K,{parent:{value:Rn}}),Rn}function Gi(K,ln,Pn){let Kn=G(K.endRe,Pn);if(Kn){if(K["on:end"]){const oe=new S(K);K["on:end"](ln,oe),oe.isMatchIgnored&&(Kn=!1)}if(Kn){for(;K.endsParent&&K.parent;)K=K.parent;return K}}if(K.endsWithParent)return Gi(K.parent,ln,Pn)}function go(K){return Rn.matcher.regexIndex===0?(te+=K[0],1):(Xe=!0,0)}function oi(K){const ln=K[0],Pn=K.rule,Kn=new S(Pn),oe=[Pn.__beforeBegin,Pn["on:begin"]];for(const ot of oe)if(ot&&(ot(K,Kn),Kn.isMatchIgnored))return go(ln);return Pn.skip?te+=ln:(Pn.excludeBegin&&(te+=ln),Se(),!Pn.returnBegin&&!Pn.excludeBegin&&(te=ln)),or(Pn,K),Pn.returnBegin?0:ln.length}function Ji(K){const ln=K[0],Pn=gn.substring(K.index),Kn=Gi(Rn,K,Pn);if(!Kn)return Tr;const oe=Rn;Rn.endScope&&Rn.endScope._wrap?(Se(),Pe(ln,Rn.endScope._wrap)):Rn.endScope&&Rn.endScope._multi?(Se(),zt(Rn.endScope,K)):oe.skip?te+=ln:(oe.returnEnd||oe.excludeEnd||(te+=ln),Se(),oe.excludeEnd&&(te=ln));do Rn.scope&&xe.closeNode(),!Rn.skip&&!Rn.subLanguage&&(sr+=Rn.relevance),Rn=Rn.parent;while(Rn!==Kn.parent);return Kn.starts&&or(Kn.starts,K),oe.returnEnd?0:ln.length}function si(){const K=[];for(let ln=Rn;ln!==ze;ln=ln.parent)ln.scope&&K.unshift(ln.scope);K.forEach(ln=>xe.openNode(ln))}let vt={};function Yi(K,ln){const Pn=ln&&ln[0];if(te+=K,Pn==null)return Se(),0;if(vt.type==="begin"&&ln.type==="end"&&vt.index===ln.index&&Pn===""){if(te+=gn.slice(ln.index,ln.index+1),!ae){const Kn=new Error(`0 width match regex (${W})`);throw Kn.languageName=W,Kn.badRule=vt.rule,Kn}return 1}if(vt=ln,ln.type==="begin")return oi(ln);if(ln.type==="illegal"&&!Ln){const Kn=new Error('Illegal lexeme "'+Pn+'" for mode "'+(Rn.scope||"<unnamed>")+'"');throw Kn.mode=Rn,Kn}else if(ln.type==="end"){const Kn=Ji(ln);if(Kn!==Tr)return Kn}if(ln.type==="illegal"&&Pn==="")return 1;if(Bt>1e5&&Bt>ln.index*3)throw new Error("potential infinite loop, way more iterations than matches");return te+=Pn,Pn.length}const ze=gt(W);if(!ze)throw $e(de.replace("{}",W)),new Error('Unknown language: "'+W+'"');const Xn=Bi(ze);let Er="",Rn=ee||Xn;const Nr={},xe=new an.__emitter(an);si();let te="",sr=0,at=0,Bt=0,Xe=!1;try{if(ze.__emitTokens)ze.__emitTokens(gn,xe);else{for(Rn.matcher.considerAll();;){Bt++,Xe?Xe=!1:Rn.matcher.considerAll(),Rn.matcher.lastIndex=at;const K=Rn.matcher.exec(gn);if(!K)break;const ln=gn.substring(at,K.index),Pn=Yi(ln,K);at=K.index+Pn}Yi(gn.substring(at))}return xe.finalize(),Er=xe.toHTML(),{language:W,value:Er,relevance:sr,illegal:!1,_emitter:xe,_top:Rn}}catch(K){if(K.message&&K.message.includes("Illegal"))return{language:W,value:ir(gn),illegal:!0,relevance:0,_illegalBy:{message:K.message,index:at,context:gn.slice(at-100,at+100),mode:K.mode,resultSoFar:Er},_emitter:xe};if(ae)return{language:W,value:ir(gn),illegal:!1,relevance:0,errorRaised:K,_emitter:xe,_top:Rn};throw K}}function Dt(W){const gn={value:ir(W),illegal:!1,relevance:0,_top:sn,_emitter:new an.__emitter(an)};return gn._emitter.addText(W),gn}function ar(W,gn){gn=gn||an.languages||Object.keys(O);const Ln=Dt(W),ee=gn.filter(gt).filter(fe).map(Se=>ht(Se,W,!1));ee.unshift(Ln);const Qn=ee.sort((Se,Pe)=>{if(Se.relevance!==Pe.relevance)return Pe.relevance-Se.relevance;if(Se.language&&Pe.language){if(gt(Se.language).supersetOf===Pe.language)return 1;if(gt(Pe.language).supersetOf===Se.language)return-1}return 0}),[Ke,mt]=Qn,kr=Ke;return kr.secondBest=mt,kr}function co(W,gn,Ln){const ee=gn&&q[gn]||Ln;W.classList.add("hljs"),W.classList.add(`language-${ee}`)}function ri(W){let gn=null;const Ln=ye(W);if(xn(Ln))return;if(kt("before:highlightElement",{el:W,language:Ln}),W.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",W);return}if(W.children.length>0&&(an.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(W)),an.throwUnescapedHTML))throw new ti("One of your code blocks includes unescaped HTML.",W.innerHTML);gn=W;const ee=gn.textContent,Qn=Ln?re(ee,{language:Ln,ignoreIllegals:!0}):ar(ee);W.innerHTML=Qn.value,W.dataset.highlighted="yes",co(W,Ln,Qn.language),W.result={language:Qn.language,re:Qn.relevance,relevance:Qn.relevance},Qn.secondBest&&(W.secondBest={language:Qn.secondBest.language,relevance:Qn.secondBest.relevance}),kt("after:highlightElement",{el:W,result:Qn,text:ee})}function fo(W){an=Sr(an,W)}const jt=()=>{jr(),wt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Fi(){jr(),wt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ii=!1;function jr(){if(document.readyState==="loading"){ii=!0;return}document.querySelectorAll(an.cssSelector).forEach(ri)}function Ui(){ii&&jr()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ui,!1);function Hi(W,gn){let Ln=null;try{Ln=gn(f)}catch(ee){if($e("Language definition for '{}' could not be registered.".replace("{}",W)),ae)$e(ee);else throw ee;Ln=sn}Ln.name||(Ln.name=W),O[W]=Ln,Ln.rawDefinition=gn.bind(null,f),Ln.aliases&&$i(Ln.aliases,{languageName:W})}function Wi(W){delete O[W];for(const gn of Object.keys(q))q[gn]===W&&delete q[gn]}function Vi(){return Object.keys(O)}function gt(W){return W=(W||"").toLowerCase(),O[W]||O[q[W]]}function $i(W,{languageName:gn}){typeof W=="string"&&(W=[W]),W.forEach(Ln=>{q[Ln.toLowerCase()]=gn})}function fe(W){const gn=gt(W);return gn&&!gn.disableAutodetect}function po(W){W["before:highlightBlock"]&&!W["before:highlightElement"]&&(W["before:highlightElement"]=gn=>{W["before:highlightBlock"](Object.assign({block:gn.el},gn))}),W["after:highlightBlock"]&&!W["after:highlightElement"]&&(W["after:highlightElement"]=gn=>{W["after:highlightBlock"](Object.assign({block:gn.el},gn))})}function ai(W){po(W),On.push(W)}function Ki(W){const gn=On.indexOf(W);gn!==-1&&On.splice(gn,1)}function kt(W,gn){const Ln=W;On.forEach(function(ee){ee[Ln]&&ee[Ln](gn)})}function ho(W){return wt("10.7.0","highlightBlock will be removed entirely in v12.0"),wt("10.7.0","Please use highlightElement now."),ri(W)}Object.assign(f,{highlight:re,highlightAuto:ar,highlightAll:jr,highlightElement:ri,highlightBlock:ho,configure:fo,initHighlighting:jt,initHighlightingOnLoad:Fi,registerLanguage:Hi,unregisterLanguage:Wi,listLanguages:Vi,getLanguage:gt,registerAliases:$i,autoDetection:fe,inherit:Sr,addPlugin:ai,removePlugin:Ki}),f.debugMode=function(){ae=!1},f.safeMode=function(){ae=!0},f.versionString=ei,f.regex={concat:w,lookahead:T,either:B,optional:N,anyNumberOfTimes:k};for(const W in H)typeof H[W]=="object"&&c(H[W]);return Object.assign(f,H),f},Tt=St({});return Tt.newInstance=()=>St({}),Qs=Tt,Tt.HighlightJS=Tt,Tt.default=Tt,Qs}var lh=sh();const Xr=ao(lh);var Qr="[0-9](_*[0-9])*",eo=`\\.(${Qr})`,to="[0-9a-fA-F](_*[0-9a-fA-F])*",Rc={className:"number",variants:[{begin:`(\\b(${Qr})((${eo})|\\.)?|(${eo}))[eE][+-]?(${Qr})[fFdD]?\\b`},{begin:`\\b(${Qr})((${eo})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${eo})[fFdD]?\\b`},{begin:`\\b(${Qr})[fFdD]\\b`},{begin:`\\b0[xX]((${to})\\.?|(${to})?\\.(${to}))[pP][+-]?(${Qr})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${to})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function Fc(c,S,p){return p===-1?"":c.replace(S,P=>Fc(c,S,p-1))}function uh(c){const S=c.regex,p="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",P=p+Fc("(?:<"+p+"~~~(?:\\s*,\\s*"+p+"~~~)*>)?",/~~~/g,2),x={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},b={className:"meta",begin:"@"+p,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},z={className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[c.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:x,illegal:/<\/|#/,contains:[c.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[c.BACKSLASH_ESCAPE]},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,p],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[S.concat(/(?!else)/,p),/\s+/,p,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,p],className:{1:"keyword",3:"title.class"},contains:[z,c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+P+"\\s+)",c.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:x,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:x,relevance:0,contains:[b,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,Rc,c.C_BLOCK_COMMENT_MODE]},c.C_LINE_COMMENT_MODE,c.C_BLOCK_COMMENT_MODE]},Rc,b]}}function ch(c){const S=c.regex,p="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",P=S.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),j=S.concat(P,/(::\w+)*/),Y={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},C={className:"doctag",begin:"@[A-Za-z]+"},x={begin:"#<",end:">"},b=[c.COMMENT("#","$",{contains:[C]}),c.COMMENT("^=begin","^=end",{contains:[C],relevance:10}),c.COMMENT("^__END__",c.MATCH_NOTHING_RE)],z={className:"subst",begin:/#\{/,end:/\}/,keywords:Y},A={className:"string",contains:[c.BACKSLASH_ESCAPE,z],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:S.concat(/<<[-~]?'?/,S.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[c.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[c.BACKSLASH_ESCAPE,z]})]}]},T="[1-9](_?[0-9])*|0",k="[0-9](_?[0-9])*",N={className:"number",relevance:0,variants:[{begin:`\\b(${T})(\\.(${k}))?([eE][+-]?(${k})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},w={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:Y}]},Z=[A,{variants:[{match:[/class\s+/,j,/\s+<\s+/,j]},{match:[/\b(class|module)\s+/,j]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:Y},{match:[/(include|extend)\s+/,j],scope:{2:"title.class"},keywords:Y},{relevance:0,match:[j,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:P,scope:"title.class"},{match:[/def/,/\s+/,p],scope:{1:"keyword",3:"title.function"},contains:[w]},{begin:c.IDENT_RE+"::"},{className:"symbol",begin:c.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[A,{begin:p}],relevance:0},N,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:Y},{begin:"("+c.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[c.BACKSLASH_ESCAPE,z],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(x,b),relevance:0}].concat(x,b);z.contains=Z,w.contains=Z;const mn=[{begin:/^\s*=>/,starts:{end:"$",contains:Z}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:Y,contains:Z}}];return b.unshift(x),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:Y,illegal:/\/\*/,contains:[c.SHEBANG({binary:"ruby"})].concat(mn).concat(b).concat(Z)}}const Pc="[A-Za-z$_][0-9A-Za-z$_]*",dh=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],fh=["true","false","null","undefined","NaN","Infinity"],Uc=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Hc=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Wc=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ph=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],hh=[].concat(Wc,Uc,Hc);function gh(c){const S=c.regex,p=(F,{after:dn})=>{const d="</"+F[0].slice(1);return F.input.indexOf(d,dn)!==-1},P=Pc,j={begin:"<>",end:"</>"},$=/<[A-Za-z0-9\\._:-]+\s*\/>/,Y={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(F,dn)=>{const d=F[0].length+F.index,E=F.input[d];if(E==="<"||E===","){dn.ignoreMatch();return}E===">"&&(p(F,{after:d})||dn.ignoreMatch());let tn;const Mn=F.input.substring(d);if(tn=Mn.match(/^\s*=/)){dn.ignoreMatch();return}if((tn=Mn.match(/^\s+extends\s+/))&&tn.index===0){dn.ignoreMatch();return}}},C={$pattern:Pc,keyword:dh,literal:fh,built_in:hh,"variable.language":ph},x="[0-9](_?[0-9])*",b=`\\.(${x})`,z="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={className:"number",variants:[{begin:`(\\b(${z})((${b})|\\.)?|(${b}))[eE][+-]?(${x})\\b`},{begin:`\\b(${z})\\b((${b})\\b|\\.)?|(${b})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},T={className:"subst",begin:"\\$\\{",end:"\\}",keywords:C,contains:[]},k={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,T],subLanguage:"xml"}},N={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,T],subLanguage:"css"}},w={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[c.BACKSLASH_ESCAPE,T],subLanguage:"graphql"}},I={className:"string",begin:"`",end:"`",contains:[c.BACKSLASH_ESCAPE,T]},R={className:"comment",variants:[c.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:P+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),c.C_BLOCK_COMMENT_MODE,c.C_LINE_COMMENT_MODE]},G=[c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,k,N,w,I,{match:/\$\d+/},A];T.contains=G.concat({begin:/\{/,end:/\}/,keywords:C,contains:["self"].concat(G)});const L=[].concat(R,T.contains),Q=L.concat([{begin:/\(/,end:/\)/,keywords:C,contains:["self"].concat(L)}]),Z={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:Q},on={variants:[{match:[/class/,/\s+/,P,/\s+/,/extends/,/\s+/,S.concat(P,"(",S.concat(/\./,P),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,P],scope:{1:"keyword",3:"title.class"}}]},wn={relevance:0,match:S.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Uc,...Hc]}},J={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},mn={variants:[{match:[/function/,/\s+/,P,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[Z],illegal:/%/},Tn={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function vn(F){return S.concat("(?!",F.join("|"),")")}const cn={match:S.concat(/\b/,vn([...Wc,"super","import"]),P,S.lookahead(/\(/)),className:"title.function",relevance:0},Fn={begin:S.concat(/\./,S.lookahead(S.concat(P,/(?![0-9A-Za-z$_(])/))),end:P,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ne={match:[/get|set/,/\s+/,P,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},Z]},Gn="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+c.UNDERSCORE_IDENT_RE+")\\s*=>",Yn={match:[/const|var|let/,/\s+/,P,/\s*/,/=\s*/,/(async\s*)?/,S.lookahead(Gn)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[Z]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:C,exports:{PARAMS_CONTAINS:Q,CLASS_REFERENCE:wn},illegal:/#(?![$_A-z])/,contains:[c.SHEBANG({label:"shebang",binary:"node",relevance:5}),J,c.APOS_STRING_MODE,c.QUOTE_STRING_MODE,k,N,w,I,R,{match:/\$\d+/},A,wn,{className:"attr",begin:P+S.lookahead(":"),relevance:0},Yn,{begin:"("+c.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[R,c.REGEXP_MODE,{className:"function",begin:Gn,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:c.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:C,contains:Q}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:j.begin,end:j.end},{match:$},{begin:Y.begin,"on:begin":Y.isTrulyOpeningTag,end:Y.end}],subLanguage:"xml",contains:[{begin:Y.begin,end:Y.end,skip:!0,contains:["self"]}]}]},mn,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+c.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[Z,c.inherit(c.TITLE_MODE,{begin:P,className:"title.function"})]},{match:/\.\.\./,relevance:0},Fn,{match:"\\$"+P,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[Z]},cn,Tn,on,ne,{match:/\$[(.]/}]}}function mh(c){const S=c.regex,p=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),P=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],j=/[-+*\/%=<>&|^~]|\*\*?|\/\/?|<<=?|>>=?|\+=|-=|\*=|\/=|%=|@|<|>/,$=["bool","complex","dict","float","frozenset","int","list","set","str","tuple"],Y=["add_vertex","add","append","backtrack","bit_length","clear","collect_words","connected","counting_sort","defaultdict","deque","dfs","dp","extend","find_max_index","find","heapify","heappop","heappush","insert","insertion_sort","join","ListNode","merge_sort","pop","popleft","print_trie","quick_sort","RECURRENCE_RELATION","remove","shuffle","sort","TreeNode","TrieNode","union","UnionFind","update"],C=["BASE_CASE","BOOLEAN","CONDITION","CRITERIA","ITERATE_OVER_INPUT","MAXIMUM_POSSIBLE_ANSWER","MINIMUM_POSSIBLE_ANSWER","OTHER_ARGUMENTS","SMALLEST_SUBPROBLEM","START_NODE","STATE_FOR_WHOLE_INPUT","STATE","WINDOW_CONDITION_BROKEN"],x=["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip",...Y],b=["__debug__","Ellipsis","False","None","NotImplemented","True",...C],z=["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union",...$],A={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:P,built_in:x,literal:b,type:z},T={className:"meta",begin:/^(>>>|\.\.\.) /},k={className:"subst",begin:/\{/,end:/\}/,keywords:A,illegal:/#/},N={begin:/\{\{/,relevance:0},w={className:"string",contains:[c.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,T],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,T],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,T,N,k]},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[c.BACKSLASH_ESCAPE,T,N,k]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[c.BACKSLASH_ESCAPE,N,k]},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[c.BACKSLASH_ESCAPE,N,k]},c.APOS_STRING_MODE,c.QUOTE_STRING_MODE]},I="[0-9](_?[0-9])*",B=`(\\b(${I}))?\\.(${I})|\\b(${I})\\.`,R=`\\b|${P.join("|")}`,G={className:"number",relevance:0,variants:[{begin:`(\\b(${I})|(${B}))[eE][+-]?(${I})[jJ]?(?=${R})`},{begin:`(${B})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${R})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${R})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${R})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${R})`},{begin:`\\b(${I})[jJ](?=${R})`}]},L={className:"comment",begin:S.lookahead(/# type:/),end:/$/,keywords:A,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},Q={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:A,contains:["self",T,G,w,c.HASH_COMMENT_MODE,{scope:"params.operator",match:j},{scope:"params.comma",match:","},{scope:"params.self",match:/self/}]}]};return k.contains=[w,G,T],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:A,illegal:/(<\/|\?)|=>/,contains:[T,G,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},w,L,c.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,p],scope:{1:"keyword.def",3:"title.function"},contains:[Q]},{variants:[{match:[/\bclass/,/\s+/,p,/\s*/,/\(\s*/,p,/\s*\)/]},{match:[/\bclass/,/\s+/,p]}],scope:{1:"keyword.class",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[G,Q,w]},{scope:"operator",match:j}]}}Xr.registerLanguage("python",mh);Xr.registerLanguage("javascript",gh);Xr.registerLanguage("java",uh);Xr.registerLanguage("cpp",oh);Xr.registerLanguage("ruby",ch);function vh({code:c,language:S}){const p=yn.useRef(null),[P,j]=yn.useState(""),[$,Y]=yn.useState(""),C=Qe("hljs",S,Cc.code),x=()=>{if(p.current){const w=c.split(`
`).map((I,B)=>{const R=Xr.highlight(I,{language:S}).value;return`<span class=${Cc.line} data-line-number=${B+1}>${R}</span>`}).join("");Y(w)}},b=()=>{p.current?.querySelectorAll("span[data-line-number]")?.forEach(w=>w.addEventListener("click",T))},z=()=>{p.current?.querySelectorAll("span[data-line-number]")?.forEach(w=>w.removeEventListener("click",T))},A=()=>{p.current?.querySelector(`span[data-line-number="${P}"]`)?.removeAttribute("focused")},T=k=>{const N=k.currentTarget,w=N.getAttribute("data-line-number")??"";A(),w===P?j(""):(N.setAttribute("focused",""),j(w))};return so(p,A),yn.useEffect(()=>(x(),b(),()=>z()),[c,$,P]),r.jsx("pre",{ref:p,children:r.jsx("code",{className:C,dangerouslySetInnerHTML:{__html:$}})})}const yh="_copyButton_1hjzm_1",xh="_copySvg_1hjzm_25",_h="_checkSvg_1hjzm_32",bh="_checkSvgPath_1hjzm_37",wh="_enter_1hjzm_48",Sh="_exit_1hjzm_52",wr={copyButton:yh,copySvg:xh,checkSvg:_h,checkSvgPath:bh,enter:wh,exit:Sh};function Th({onClick:c}){const[S,p]=yn.useState("show"),[P,j]=yn.useState("hide"),$=Qe(wr.copySvg,S==="enter"&&wr.enter,S==="exit"&&wr.exit),Y=Qe(wr.checkSvg,P==="exit"&&wr.exit),C=Qe(wr.checkSvgPath),x=()=>{S==="show"&&P==="hide"&&(p("exit"),c())},b=()=>{S==="enter"&&p("show"),S==="exit"&&(p("hide"),j("show"))},z=()=>{P==="show"&&setTimeout(()=>{j("exit")},500),P==="exit"&&(j("hide"),p("enter"))},A=()=>S!=="hide"&&r.jsx("svg",{className:$,viewBox:"0 0 512 512",onAnimationEnd:b,children:r.jsx("path",{d:"M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"})}),T=()=>P!=="hide"&&r.jsx("svg",{className:Y,viewBox:"0 0 16 16",onAnimationEnd:z,children:r.jsx("path",{className:C,d:"M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"})});return r.jsxs("button",{"aria-label":"copy button",className:wr.copyButton,onClick:x,children:[A(),T()]})}function jh(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsxs("linearGradient",{id:"python_svg__a",x1:70.252,x2:170.659,y1:1237.476,y2:1151.089,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#5A9FD4"}),r.jsx("stop",{offset:1,stopColor:"#306998"})]}),r.jsxs("linearGradient",{id:"python_svg__b",x1:209.474,x2:173.62,y1:1098.811,y2:1149.537,gradientTransform:"matrix(.563 0 0 -.568 -29.215 707.817)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#FFD43B"}),r.jsx("stop",{offset:1,stopColor:"#FFE873"})]}),r.jsx("path",{fill:"url(#python_svg__a)",d:"M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721",transform:"translate(0 10.26)"}),r.jsx("path",{fill:"url(#python_svg__b)",d:"M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692",transform:"translate(0 10.26)"}),r.jsxs("radialGradient",{id:"python_svg__c",cx:1825.678,cy:444.45,r:26.743,gradientTransform:"matrix(0 -.24 -1.055 0 532.979 557.576)",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{offset:0,stopColor:"#B8B8B8",stopOpacity:.498}),r.jsx("stop",{offset:1,stopColor:"#7F7F7F",stopOpacity:0})]}),r.jsx("path",{fill:"url(#python_svg__c)",d:"M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417",opacity:.444})]})}function kh(){return r.jsxs("svg",{viewBox:"0 0 128 128",children:[r.jsx("path",{fill:"#F0DB4F",d:"M1.408 1.408h125.184v125.185H1.408z"}),r.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237"})]})}function Eh(){return r.jsxs("svg",{id:"Layer_1",x:"0px",y:"0px",width:"306px",height:"344.35px",viewBox:"0 0 306 344.35","enable-background":"new 0 0 306 344.35",children:[r.jsx("path",{fill:"#00599C",d:"M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175L302.107,258.262z"}),r.jsx("path",{fill:"#004482",d:"M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"}),r.jsx("path",{fill:"#659AD2",d:"M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"}),r.jsx("g",{children:r.jsx("path",{fill:"#FFFFFF",d:"M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841 	"})}),r.jsx("g",{children:r.jsx("polygon",{fill:"#FFFFFF",points:"297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841 	"})})]})}function Nh(){return r.jsxs("svg",{height:"800px",width:"800px",id:"Layer_1",viewBox:"0 0 511.998 511.998",children:[r.jsxs("g",{children:[r.jsx("path",{fill:"#DB380E",d:"M253.464,94.869c-23.658,16.639-50.471,35.498-64.838,66.699c-24.954,54.435,51.062,113.812,54.311,116.313c0.755,0.581,1.659,0.871,2.56,0.871c0.957,0,1.915-0.327,2.693-0.979c1.509-1.262,1.937-3.406,1.031-5.152c-0.275-0.53-27.561-53.53-26.547-91.552c0.359-13.243,18.892-28.266,38.512-44.171c17.97-14.568,38.34-31.079,50.258-50.394c26.164-42.516-2.916-84.322-3.213-84.74c-1.155-1.622-3.287-2.209-5.11-1.41c-1.821,0.804-2.83,2.773-2.414,4.72c0.059,0.277,5.714,27.923-10.022,56.406C284.203,73.25,269.959,83.268,253.464,94.869z"}),r.jsx("path",{fill:"#DB380E",d:"M353.137,113.617c1.669-1.257,2.159-3.55,1.15-5.38c-1.011-1.83-3.211-2.637-5.165-1.895c-4.019,1.528-98.416,37.915-98.416,81.88c0,30.307,12.946,46.317,22.399,58.009c3.708,4.586,6.909,8.546,7.964,11.927c2.97,9.743-4.066,27.353-7.025,33.317c-0.853,1.714-0.435,3.792,1.016,5.044c0.784,0.677,1.763,1.021,2.743,1.021c0.834,0,1.672-0.248,2.396-0.752c1.623-1.128,39.667-28.026,32.844-60.433c-2.542-12.318-8.595-21.318-13.936-29.26c-8.274-12.305-14.25-21.193-5.184-37.609C304.545,150.338,352.65,113.981,353.137,113.617z"})]}),r.jsxs("g",{children:[r.jsx("path",{fill:"#73A1FB",d:"M107.418,298.236c-1.618,4.845-0.854,9.651,2.207,13.903c10.233,14.207,46.48,22.029,102.068,22.029c0.003,0,0.005,0,0.007,0c7.532,0,15.484-0.148,23.629-0.44c88.875-3.181,121.839-30.869,123.199-32.046c1.482-1.283,1.878-3.419,0.957-5.147c-0.922-1.727-2.909-2.595-4.808-2.072c-31.301,8.546-89.748,11.58-130.288,11.58c-45.363,0-68.465-3.268-74.121-5.681c2.902-3.985,20.802-11.101,42.983-15.464c2.12-0.416,3.577-2.374,3.367-4.524s-2.016-3.79-4.177-3.79C179.439,276.584,114.234,277.628,107.418,298.236z"}),r.jsx("path",{fill:"#73A1FB",d:"M404.812,269.718c-18.331,0-35.714,9.188-36.446,9.577c-1.695,0.908-2.555,2.852-2.09,4.72c0.467,1.865,2.144,3.176,4.067,3.178c0.389,0,39.102,0.317,42.608,22.436c3.106,19.082-36.629,50-52.202,60.304c-1.682,1.113-2.335,3.263-1.554,5.123c0.665,1.583,2.206,2.573,3.868,2.573c0.29,0,0.584-0.03,0.876-0.092c3.696-0.791,90.406-19.899,81.238-70.384C439.584,276.213,420.138,269.718,404.812,269.718z"}),r.jsx("path",{fill:"#73A1FB",d:"M345.347,363.755c0.302-1.617-0.371-3.262-1.717-4.207l-20.791-14.563c-1.014-0.71-2.295-0.933-3.485-0.618c-0.217,0.055-21.959,5.771-53.525,9.276c-12.528,1.405-26.56,2.147-40.582,2.147c-31.558,0-52.192-3.708-55.197-6.428c-0.398-0.764-0.272-1.111-0.201-1.304c0.546-1.518,3.472-3.322,5.358-4.036c2.083-0.771,3.206-3.033,2.558-5.157c-0.646-2.127-2.837-3.378-4.999-2.859c-20.856,5.033-31.054,12.071-30.312,20.918c1.318,15.686,37.65,23.737,68.365,25.865c4.417,0.302,9.194,0.455,14.195,0.455c0.003,0,0.005,0,0.008,0c51.074,0,116.55-16.025,117.204-16.188C343.825,366.666,345.044,365.375,345.347,363.755z"}),r.jsx("path",{fill:"#73A1FB",d:"M188.602,397.419c1.575-1.024,2.273-2.971,1.714-4.764c-0.557-1.793-2.234-2.971-4.118-2.946c-2.795,0.074-27.349,1.182-29.068,16.815c-0.52,4.672,0.818,8.941,3.979,12.686c8.816,10.448,32.614,16.658,72.741,18.984c4.747,0.285,9.569,0.428,14.334,0.428c51.015,0,85.373-15.973,86.812-16.653c1.395-0.66,2.315-2.031,2.397-3.571s-0.687-3.001-2.003-3.806l-26.275-16.04c-0.912-0.556-2.003-0.74-3.043-0.527c-0.166,0.035-16.849,3.495-42.026,6.913c-4.764,0.648-10.73,0.977-17.73,0.977c-25.15,0-53.124-4.109-58.489-6.8C187.749,398.613,187.848,397.975,188.602,397.419z"}),r.jsx("path",{fill:"#73A1FB",d:"M224.408,486.85c116.854-0.099,179.571-20.88,191.653-33.957c4.277-4.626,4.739-9.006,4.376-11.867c-0.898-7.04-7.311-11.35-8.038-11.818c-1.754-1.128-4.108-0.833-5.476,0.745c-1.365,1.578-1.397,3.884-0.027,5.461c0.737,0.948,1.163,2.535-0.992,4.692c-4.83,4.511-53.545,18.204-134.656,22.318c-11.111,0.577-22.765,0.871-34.636,0.873c-72.623,0-125.772-9.948-132.749-15.744c2.689-3.864,21.489-10.037,41.482-13.529c2.253-0.393,3.775-2.516,3.426-4.776c-0.349-2.259-2.432-3.814-4.709-3.519c-0.564,0.077-2.478,0.191-4.694,0.327c-32.988,2.014-71.109,6.503-73.098,23.5c-0.604,5.179,0.935,9.881,4.576,13.973c8.909,10.01,34.516,23.319,153.558,23.319C224.406,486.85,224.406,486.85,224.408,486.85z"}),r.jsx("path",{fill:"#73A1FB",d:"M439.013,456.578c-1.652-0.764-3.604-0.378-4.836,0.952c-0.171,0.185-17.74,18.556-70.564,29.344c-20.223,4.052-58.183,6.107-112.826,6.107c-54.745,0-106.838-2.154-107.357-2.176c-2.176-0.106-4.037,1.476-4.333,3.618c-0.297,2.14,1.083,4.158,3.184,4.658c0.542,0.128,55.135,12.918,129.779,12.918c35.801,0,70.639-2.907,103.548-8.645c61.361-10.757,65.657-41.183,65.81-42.473C441.632,459.078,440.662,457.342,439.013,456.578z"})]})]})}function Oh(){return r.jsx("svg",{viewBox:"0 0 32 32",children:r.jsx("path",{fill:"#DB380E",d:"M9.456 27.25L28 29.782l-6.27-10.441L9.457 27.25zM29.755 7.705c-.548.823-1.097 1.645-1.644 2.468-1.879 2.827-3.758 5.654-5.635 8.482-.105.158-.24.283-.093.525 1.814 2.995 3.613 5.999 5.417 9 .285.474.572.946.941 1.401l1.094-21.852-.08-.023zm-24.76 9.338c.085.081.296.127.395.079 1.74-.855 3.491-1.691 5.192-2.617.555-.302.982-.842 1.46-1.281 1.583-1.452 3.164-2.907 4.744-4.362.097-.089.211-.176.269-.288.568-1.109 1.125-2.224 1.703-3.371-.689-.259-1.341-.512-2.002-.742-.089-.031-.231.031-.328.085-1.53.854-3.088 1.663-4.569 2.595-.741.466-1.345 1.154-2.001 1.752a263.561 263.561 0 0 0-3.156 2.915 5.385 5.385 0 0 0-.744.872c-.713 1.038-1.404 2.091-2.127 3.173.404.419.772.819 1.165 1.191zm6.358-1.418L8.738 26.672l12.286-7.916-9.671-3.13zM28.692 7.74L18.25 9.484l3.544 8.62L28.693 7.74zm-17.194 7.137l9.479 3.077a46701.83 46701.83 0 0 0-3.506-8.538l-5.973 5.461zm-6.372 4.298l-3.317 7.93 6.318-.187-3.001-7.744zm3.075 5.905l.079-.017c.758-3.154 1.528-6.287 2.303-9.565l-5.069 2.635c.864 2.246 1.785 4.615 2.688 6.947zM27.417 7.229l-3.027-.801c-1.451-.381-2.903-.758-4.353-1.143-.181-.048-.312-.08-.419.139-.512 1.05-1.041 2.092-1.561 3.138-.016.032-.013.074-.025.155l9.383-1.422.002-.066zm-5.853-2.388l8.223 2.275-1.359-3.872-6.852 1.519-.012.077zM8.899 27.856c-1.019-.117-2.064-.009-3.097.008-.849.015-1.697.047-2.545.073a.338.338 0 0 0-.262.114l21.044 1.946.014-.094-6.746-.921c-2.802-.383-5.599-.803-8.408-1.127zm-6.952-3.171c.904-2.097 1.804-4.197 2.712-6.292.091-.21.084-.353-.094-.522-.38-.361-.732-.751-1.147-1.182L1.763 24.86l.061.029c.042-.067.093-.131.124-.203zM19.763 4.287c1.524-.393 3.071-.701 4.608-1.044.099-.022.197-.055.295-.083l-.015-.075-6.606.889c.62.271 1.098.473 1.718.314z"})})}const Ah={python:jh,javascript:kh,cpp:Eh,java:Nh,ruby:Oh};function s({title:c,children:S}){const{selectedLanguage:p,setSelectedLanguage:P}=Lf(),j=yn.Children.toArray(S),$=j.findIndex(A=>A.props.language===p);let Y="";try{Y=j[$].props.code}catch{}const C=j[$].props.language,x=A=>{P(j[A].props.language)},b=()=>navigator.clipboard.writeText(Y),z=()=>j.map((A,T)=>{const k=Ah[A.props.language],N=`view ${A.props.language} code`;return r.jsx("button",{role:"tab","aria-label":N,"aria-selected":T===$,className:no.tabButton,onClick:()=>x(T),children:r.jsx(k,{})},T)});return r.jsxs("div",{role:"tablist",className:no.container,children:[r.jsx("h3",{children:c}),r.jsxs("div",{className:no.buttonContainer,children:[r.jsx("div",{role:"tablist",className:no.tabButtonContainer,children:z()}),r.jsx(Th,{onClick:b})]}),r.jsx("div",{role:"tabpanel",className:"tabs-content",children:r.jsx(vh,{code:Y,language:C})})]})}s.Tab=c=>r.jsx(r.Fragment,{children:c});const Ch=`def fn(arr):
    ans = 0
    left = 0
    right = len(arr) - 1

    while left < right:
        # TODO: logic with left and right
        if CONDITION:
            left += 1
        else:
            right -= 1

    return ans
`,Lh=`def fn(arr1, arr2):
    i = 0
    j = 0
    ans = 0

    while i < len(arr1) and j < len(arr2):
        # TODO: logic
        if CONDITION:
            i += 1
        else:
            j += 1

    while i < len(arr1):
        # TODO: logic
        i += 1

    while j < len(arr2):
        # TODO: logic
        j += 1

    return ans
`,Rh=`def fn(arr):
    n = len(arr)
    window = 0
    left = 0
    ans = 0

    for right in range(n):
        # TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN:
            # TODO: remove arr[left] from window
            left += 1

        # TODO: update ans

    return ans
`,Ph=`def fn(arr):
    n = len(arr)
    prefix = [arr[0]]

    for i in range(1, n):
        prefix.append(prefix[-1] + arr[i])

    return prefix
`,Mh=`def fn(strs: list[str]):
    ans = []

    for char in strs:
        ans.append(char)

    return ''.join(ans)
`,Ih=`const fn = (arr) => {
    let ans = 0
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++
        } else {
            right--
        }
    }

    return ans
}
`,Dh=`let fn = (arr1, arr2) => {
    let ans = 0
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        // TODO: logic
        if (CONDITION) {
            i++
        } else {
            j++
        }
    }

    while (i < arr1.length) {
        // TODO: logic
        i++
    }

    while (j < arr2.length) {
        // TODO: logic
        j++
    }

    return ans
}
`,zh=`const fn = (arr) => {
    let window = 0
    let ans = 0
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++
        }

        // TODO: update ans
    }

    return ans
}
`,Bh=`const fn = (arr) => {
    let prefix = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        prefix.push(prefix[prefix.length - 1] + arr[i])
    }

    return prefix
}
`,Fh=`const fn = (arr) => {
    let ans = []

    for (const c of arr) {
        ans.push(c)
    }

    return ans.join('')
}

const fn = (arr) => {
    let ans = ''

    for (const c of arr) {
        ans += c
    }

    return ans
}
`,Uh=`public int fn(int[] arr) {
    int ans = 0;
    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
`,Hh=`public int fn(int[] arr1, int[] arr2) {
    int i = 0;
    int j = 0;
    int ans = 0;

    while (i < arr1.length && j < arr2.length) {
        // TODO: logic
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.length) {
        // TODO: logic
        i++;
    }

    while (j < arr2.length) {
        // TODO: logic
        j++;
    }

    return ans;
}
`,Wh=`public int fn(int[] arr) {
    int n = arr.length;
    int window = 0;
    int left = 0;
    int ans = 0;

    for (int right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,Vh=`import java.util.ArrayList;
import java.util.List;


public int[] fn(int[] arr) {
    int n = arr.length;
    int[] prefix = new int[n];
    prefix[0] = arr[0];

    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}
`,$h=`public String fn(char[] strs) {
    StringBuilder sb = new StringBuilder();

    for (char c: strs) {
        sb.append(c);
    }

    return sb.toString();
}
`,Kh=`#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int ans = 0;
    int left = 0;
    int right = arr.size() - 1;

    while (left < right) {
        // TODO: logic with left and right
        if (CONDITION) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
}
`,Gh=`#include <vector>

using namespace std;


int fn(vector<int>& arr1, vector<int>& arr2) {
    int i = 0;
    int j = 0;
    int ans = 0;

    while (i < arr1.size() && j < arr2.size()) {
        // TODO: logic
        if (CONDITION) {
            i++;
        } else {
            j++;
        }
    }

    while (i < arr1.size()) {
        // TODO: logic
        i++;
    }

    while (j < arr2.size()) {
        // TODO: logic
        j++;
    }

    return ans;
}
`,Jh=`#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    int n = arr.size();
    int window = 0;
    int left = 0;
    int ans = 0;

    for (int right = 0; right < n; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,Yh=`#include <iostream>
#include <vector>

using namespace std;


vector<int> fn(vector<int>& arr) {
    int n = arr.size();
    vector<int> prefix;
    prefix.push_back(arr[0]);

    for (int i = 1; i < n; ++i) {
        prefix.push_back(prefix.back() + arr[i]);
    }

    return prefix;
}
`,qh=`string fn(vector<char>& arr) {
    return string(arr.begin(), arr.end())
}
`,Qh=`def fn(arr)
  ans   = 0
  left  = 0
  right = arr.length - 1

  while left < right
    # TODO: logic with left and right
    if CONDITION
      left  += 1
    else
      right -= 1
    end
  end

  ans
end`,Xh=`def fn(arr1, arr2)
  i, j  = 0, 0
  ans   = 0

  while i < arr1.length && j < arr2.length
    # TODO: Logic
    if CONDITION
      i += 1
    else
      j += 1
    end
  end

  while i < arr1.length
    # TODO: Logic
    i += 1
  end

  while j < arr2.length
    # TODO: Logic
    j += 1
  end

  ans
end
`,Zh=`def fn(arr)
  n       = arr.length
  window  = 0
  left    = 0
  result  = 0

  (0...n).each do |right|
    # TODO: add arr[right] to window

    while WINDOW_CONDITION_BROKEN
      # TODO: remove arr[left] from window
      left += 1
    end

    # TODO: update result
  end

  result
end
`,ng=`# This method computes the prefix sum of an array.
# It returns a new array where each element at index i is the sum of elements from index 0 to i-1 in the original array.
# # For example, given the array [1, 2, 3], the prefix sum array will be [1, 3, 6].
def prefix_sum(arr)
  n       = arr.length
  prefix  = [arr[0]]

  (1...n).each do |i|
    prefix << (prefix.last + arr[i])
  end

  prefix
end
`,eg=`def fn(strs)
  # array of strings/chrs
  ans = []

  strs.each do |char|
    ans << char
  end

  ans.join('')
end

# simple
def fn2(strs)
  strs.join
end
`;function tg(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Array"}),r.jsx("section",{id:"array-two-pointers-one-input",children:r.jsxs(s,{title:"two pointers: one input, opposite ends",children:[r.jsx(s.Tab,{code:Ch,language:"python"}),r.jsx(s.Tab,{code:Ih,language:"javascript"}),r.jsx(s.Tab,{code:Uh,language:"java"}),r.jsx(s.Tab,{code:Kh,language:"cpp"}),r.jsx(s.Tab,{code:Qh,language:"ruby"})]})}),r.jsx("section",{id:"array-two-pointers-two-inputs",children:r.jsxs(s,{title:"two pointers: two inputs, exhaust both",children:[r.jsx(s.Tab,{code:Lh,language:"python"}),r.jsx(s.Tab,{code:Dh,language:"javascript"}),r.jsx(s.Tab,{code:Hh,language:"java"}),r.jsx(s.Tab,{code:Gh,language:"cpp"}),r.jsx(s.Tab,{code:Xh,language:"ruby"})]})}),r.jsx("section",{id:"array-sliding-window",children:r.jsxs(s,{title:"sliding window",children:[r.jsx(s.Tab,{code:Rh,language:"python"}),r.jsx(s.Tab,{code:zh,language:"javascript"}),r.jsx(s.Tab,{code:Wh,language:"java"}),r.jsx(s.Tab,{code:Jh,language:"cpp"}),r.jsx(s.Tab,{code:Zh,language:"ruby"})]})}),r.jsx("section",{id:"array-prefix-sum",children:r.jsxs(s,{title:"prefix sum",children:[r.jsx(s.Tab,{code:Ph,language:"python"}),r.jsx(s.Tab,{code:Bh,language:"javascript"}),r.jsx(s.Tab,{code:Vh,language:"java"}),r.jsx(s.Tab,{code:Yh,language:"cpp"}),r.jsx(s.Tab,{code:ng,language:"ruby"})]})}),r.jsx("section",{id:"array-string-building",children:r.jsxs(s,{title:"efficient string building",children:[r.jsx(s.Tab,{code:Mh,language:"python"}),r.jsx(s.Tab,{code:Fh,language:"javascript"}),r.jsx(s.Tab,{code:$h,language:"java"}),r.jsx(s.Tab,{code:qh,language:"cpp"}),r.jsx(s.Tab,{code:eg,language:"ruby"})]})})]})}const rg=`from collections import defaultdict


def fn(arr, k):
    counts = defaultdict(int)
    counts[0] = 1
    ans = curr = 0

    for num in arr:
        # TODO: logic to change curr
        ans += counts[curr - k]
        counts[curr] += 1

    return ans
`,ig=`def fn(arr):
    window = set()
    ans = 0
    left = 0

    for right, ELEMENT in enumerate(arr):
        # TODO: add arr[right] to window

        while WINDOW_CONDITION_BROKEN:
            # TODO: remove arr[left] from window
            left += 1

        # TODO: update ans

    return ans
`,ag=`const fn = (arr, k) => {
    let counts = new Map()
    counts.set(0, 1)
    let ans = 0
    let curr = 0

    for (const num of arr) {
        // TODO: logic to change curr
        ans += counts.get(curr - k) || 0
        counts.set(curr, (counts.get(curr) || 0) + 1)
    }

    return ans
}
`,og=`function fn(arr) {
    let window = new Set()
    let ans = 0
    let left = 0

    for (let right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left += 1
        }

        // TODO: update ans
    }

    return ans
}
`,sg=`import java.util.HashMap;
import java.util.Map;


public int fn(int[] arr, int k) {
    Map<Integer, Integer> counts = new HashMap<>();
    counts.put(0, 1);
    int ans = 0;
    int curr = 0;

    for (int num: arr) {
        // TODO: logic to change curr
        ans += counts.getOrDefault(curr - k, 0);
        counts.put(curr, counts.getOrDefault(curr, 0) + 1);
    }

    return ans;
}
`,lg=`import java.util.HashSet;
import java.util.Set;


public int fn(int[] arr) {
    Set<Integer> window = new HashSet<>();
    int ans = 0;
    int left = 0;

    for (int right = 0; right < arr.length; right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,ug=`#include <vector>
#include <unordered_map>

using namespace std;


int fn(vector<int>& arr, int k) {
    unordered_map<int, int> counts;
    counts[0] = 1;
    int ans = 0;
    int curr = 0;

    for (int num : arr) {
        // TODO: logic to change curr
        ans += counts[curr - k];
        counts[curr]++;
    }

    return ans;
}
`,cg=`#include <vector>
#include <unordered_set>

using namespace std;


int fn(vector<int>& arr) {
    unordered_set<int> window;
    int ans = 0;
    int left = 0;

    for (int right = 0; right < arr.size(); right++) {
        // TODO: add arr[right] to window

        while (WINDOW_CONDITION_BROKEN) {
            // TODO: remove arr[left] from window
            left++;
        }

        // TODO: update ans
    }

    return ans;
}
`,dg=`def fn(arr, k)
  counts    = Hash.new(0)
  counts[0] = 1
  ans       = 0
  curr      = 0

  arr.each do |num|
    # TODO: logic to change curr
    ans += counts[curr - k]
    counts[curr] += 1
  end

  ans
end
`,fg=`require 'set'

def fn(arr)
  window  = Set.new
  ans     = 0
  left    = 0

  arr.each_with_index do |ELEMENT, right|
    # TODO: add arr[right] to window

    while WINDOW_CONDITION_BROKEN
      # TODO: remove arr[left] from window
      left += 1
    end

    # TODO: update ans
  end

  ans
end
`;function pg(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Hash Map"}),r.jsx("section",{id:"hashmap-find-number-of-subarrays",children:r.jsxs(s,{title:"find number of subarrays that fit an exact criteria",children:[r.jsx(s.Tab,{code:rg,language:"python"}),r.jsx(s.Tab,{code:ag,language:"javascript"}),r.jsx(s.Tab,{code:sg,language:"java"}),r.jsx(s.Tab,{code:ug,language:"cpp"}),r.jsx(s.Tab,{code:dg,language:"ruby"})]})}),r.jsx("section",{id:"hashmap-sliding-window",children:r.jsxs(s,{title:"sliding window",children:[r.jsx(s.Tab,{code:ig,language:"python"}),r.jsx(s.Tab,{code:og,language:"javascript"}),r.jsx(s.Tab,{code:lg,language:"java"}),r.jsx(s.Tab,{code:cg,language:"cpp"}),r.jsx(s.Tab,{code:fg,language:"ruby"})]})})]})}const hg=`def fn(head):
    slow = head
    fast = head
    ans = 0

    while fast and fast.next:
        # TODO: logic
        slow = slow.next
        fast = fast.next.next

    return ans
`,gg=`def fn(head):
    prev = None
    curr = head

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    return prev
`,mg=`const fn = (head) => {
    let ans = 0
    let slow = head
    let fast = head

    while (fast && fast.next) {
        // TODO: logic
        slow = slow.next
        fast = fast.next.next
    }

    return ans
}
`,vg=`const fn = (head) => {
    let prev = null
    let curr = head

    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}
`,yg=`public int fn(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    int ans = 0;

    while (fast != null && fast.next != null) {
        // TODO: logic
        slow = slow.next;
        fast = fast.next.next;
    }

    return ans;
}
`,xg=`public ListNode fn(ListNode head) {
    ListNode curr = head;
    ListNode prev = null;

    while (curr != null) {
        ListNode nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
}
`,_g=`int fn(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    int ans = 0;

    while (fast && fast->next) {
        // TODO: logic
        slow = slow->next;
        fast = fast->next->next;
    }

    return ans;
}
`,bg=`ListNode* fn(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;

    while (curr) {
        ListNode* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }

    return prev;
}
`,wg=`def fn(head)
  slow  = head
  fast  = head
  ans   = 0

  until fast.nil? || fast.next.nil?
    # TODO: logic
    slow = slow.next
    fast = fast.next.next
  end

  ans
end
`,Sg=`def fn(head)
  prev = nil
  curr = head

  until curr.nil?
    nxt = curr.next
    curr.next = prev
    prev = curr
    curr = nxt
  end

  prev
end
`;function Tg(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Linked List"}),r.jsx("section",{id:"linkedlist-fast-and-slow-pointer",children:r.jsxs(s,{title:"fast and slow pointer",children:[r.jsx(s.Tab,{code:hg,language:"python"}),r.jsx(s.Tab,{code:mg,language:"javascript"}),r.jsx(s.Tab,{code:yg,language:"java"}),r.jsx(s.Tab,{code:_g,language:"cpp"}),r.jsx(s.Tab,{code:wg,language:"ruby"})]})}),r.jsx("section",{id:"linkedlist-reverse",children:r.jsxs(s,{title:"reverse linked list",children:[r.jsx(s.Tab,{code:gg,language:"python"}),r.jsx(s.Tab,{code:vg,language:"javascript"}),r.jsx(s.Tab,{code:xg,language:"java"}),r.jsx(s.Tab,{code:bg,language:"cpp"}),r.jsx(s.Tab,{code:Sg,language:"ruby"})]})})]})}const jg=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] > num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,kg=`def fn(arr):
    stack = []
    ans = 0

    for num in arr:
        while stack and stack[-1] < num:
            # TODO: logic
            stack.pop()
        stack.append(num)

    return ans
`,Eg=`const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        while (stack.length && stack[stack.length - 1] > num) {
            // TODO: logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
`,Ng=`const fn = (arr) => {
    let stack = []
    let ans = 0

    for (const num of arr) {
        while (stack.length && stack[stack.length - 1] < num) {
            // TODO: logic
            stack.pop()
        }

        stack.push(num)
    }

    return ans
}
`,Og=`import java.util.Stack;


public int fn(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int ans = 0;

    for (int num : arr) {
        while (!stack.isEmpty() && stack.peek() > num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,Ag=`import java.util.Stack;


public int fn(int[] arr) {
    Stack<Integer> stack = new Stack<>();
    int ans = 0;

    for (int num : arr) {
        while (!stack.isEmpty() && stack.peek() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,Cg=`#include <stack>
#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    stack<int> stack;
    int ans = 0;

    for (int num : arr) {
        while (!stack.empty() && stack.top() > num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,Lg=`#include <stack>
#include <vector>

using namespace std;


int fn(vector<int>& arr) {
    stack<int> stack;
    int ans = 0;

    for (int num : arr) {
        while (!stack.empty() && stack.top() < num) {
            // TODO: logic
            stack.pop();
        }
        stack.push(num);
    }

    return ans;
}
`,Rg=`def fn(arr)
  stack = []
  ans   = 0

  arr.each do |num|
    while !stack.empty? && stack[-1] > num
      # TODO: logic
      stack.pop
    end
    stack << num
  end

  ans
end
`,Pg=`def fn(arr)
  stack = []
  ans   = 0

  arr.each do |num|
    while !stack.empty? && stack[-1] < num
      # TODO: logic
      stack.pop
    end
    stack << num
  end

  ans
end
`;function Mg(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Stack"}),r.jsx("section",{id:"stack-monotonic-increasing",children:r.jsxs(s,{title:"monotonic increasing stack",children:[r.jsx(s.Tab,{code:jg,language:"python"}),r.jsx(s.Tab,{code:Eg,language:"javascript"}),r.jsx(s.Tab,{code:Og,language:"java"}),r.jsx(s.Tab,{code:Cg,language:"cpp"}),r.jsx(s.Tab,{code:Rg,language:"ruby"})]})}),r.jsx("section",{id:"stack-monotonic-decreasing",children:r.jsxs(s,{title:"monotonic decreasing stack",children:[r.jsx(s.Tab,{code:kg,language:"python"}),r.jsx(s.Tab,{code:Ng,language:"javascript"}),r.jsx(s.Tab,{code:Ag,language:"java"}),r.jsx(s.Tab,{code:Lg,language:"cpp"}),r.jsx(s.Tab,{code:Pg,language:"ruby"})]})})]})}const Ig=`def dfs(root):
    if not root:
        return

    ans = 0

    # TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
`,Dg=`def dfs(root):
    stack = [root]
    ans = 0

    while stack:
        node = stack.pop()
        # TODO: logic
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

    return ans
`,zg=`from collections import deque


def fn(root):
    que = deque([root])
    ans = 0

    while que:
        current_length = len(que)
        # TODO: logic for current level
        for _ in range(current_length):
            node = que.popleft()
            # TODO: logic
            if node.left:
                que.append(node.left)
            if node.right:
                que.append(node.right)

    return ans
`,Bg=`const dfs = (root) => {
    if (!root) {
        return
    }

    let ans = 0

    // TODO: logic
    dfs(root.left)
    dfs(root.right)

    return ans
}
`,Fg=`const dfs = (root) => {
    let stack = [root]
    let ans = 0

    while (stack.length) {
        let node = stack.pop()
        // TODO: logic
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
    }

    return ans
}
`,Ug=`const fn = (root) => {
    let que = [root]
    let ans = 0

    while (que.length) {
        let currentLength = que.length
        let nextQue = []
        // TODO: logic for current level

        for (let i = 0; i < currentLength; i++) {
            let node = que[i]
            // TODO: logic
            if (node.left) {
                nextQue.push(node.left)
            }
            if (node.right) {
                nextQue.push(node.right)
            }
        }

        que = nextQue
    }

    return ans
}
`,Hg=`public int dfs(TreeNode root) {
    if (root == null) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    ans += dfs(root.left);
    ans += dfs(root.right);

    return ans;
}
`,Wg=`import java.util.Stack;


public int dfs(TreeNode root) {
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    int ans = 0;

    while (!stack.isEmpty()) {
        TreeNode node = stack.pop();
        // TODO: logic
        if (node.left != null) {
            stack.push(node.left);
        }
        if (node.right != null) {
            stack.push(node.right);
        }
    }

    return ans;
}
`,Vg=`import java.util.LinkedList;
import java.util.Queue;


public int fn(TreeNode root) {
    Queue<TreeNode> que = new LinkedList<>();
    que.add(root);
    int ans = 0;

    while (!que.isEmpty()) {
        int currentLength = que.size();
        // TODO: logic for current level
        for (int i = 0; i < currentLength; i++) {
            TreeNode node = que.remove();
            // TODO: logic
            if (node.left != null) {
                que.add(node.left);
            }
            if (node.right != null) {
                que.add(node.right);
            }
        }
    }

    return ans;
}
`,$g=`int dfs(TreeNode* root) {
    if (root == nullptr) {
        return 0;
    }

    int ans = 0;

    // TODO: logic
    dfs(root.left);
    dfs(root.right);

    return ans;
}
`,Kg=`#include <stack>

using namespace std;


int dfs(TreeNode* root) {
    stack<TreeNode*> stack;
    stack.push(root);
    int ans = 0;

    while (!stack.empty()) {
        TreeNode* node = stack.top();
        stack.pop();
        // TODO: logic
        if (node->left) {
            stack.push(node->left);
        }
        if (node->right) {
            stack.push(node->right);
        }
    }

    return ans;
}
`,Gg=`#include <queue>

using namespace std;


int fn(TreeNode* root) {
    queue<TreeNode*> que;
    que.push(root);
    int ans = 0;

    while (!que.empty()) {
        int currentLength = que.size();
        // TODO: logic for current level

        for (int i = 0; i < currentLength; i++) {
            TreeNode* node = que.front();
            que.pop();
            // TODO: logic
            if (node->left != nullptr) {
                que.push(node->left);
            }
            if (node->right != nullptr) {
                que.push(node->right);
            }
        }
    }

    return ans;
}
`,Jg=`def dfs(root)
  return unless root

  ans = 0

  # TODO: logic
  dfs(root.left)
  dfs(root.right)

  ans
end
`,Yg=`def dfs(root)
  stack = [root]
  ans   = 0

  until stack.empty?
    node = stack.pop
    # TODO: logic

    stack << node.left if node.left
    stack << node.right if node.right
  end

  ans
end
`,qg=`def fn(root)
  queue = [root]
  ans   = 0

  until queue.empty?
    current_length = queue.length
    # TODO: logic for current level

    current_length.times do
      node = queue.shift
      # TODO: logic

      queue << node.left if node.left
      queue << node.right if node.right
    end
  end

  ans
end
`;function Qg(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Binary Tree"}),r.jsx("section",{id:"tree-dfs-recursive",children:r.jsxs(s,{title:"DFS (recursive)",children:[r.jsx(s.Tab,{code:Ig,language:"python"}),r.jsx(s.Tab,{code:Bg,language:"javascript"}),r.jsx(s.Tab,{code:Hg,language:"java"}),r.jsx(s.Tab,{code:$g,language:"cpp"}),r.jsx(s.Tab,{code:Jg,language:"ruby"})]})}),r.jsx("section",{id:"tree-dfs-iterative",children:r.jsxs(s,{title:"DFS (iterative)",children:[r.jsx(s.Tab,{code:Dg,language:"python"}),r.jsx(s.Tab,{code:Fg,language:"javascript"}),r.jsx(s.Tab,{code:Wg,language:"java"}),r.jsx(s.Tab,{code:Kg,language:"cpp"}),r.jsx(s.Tab,{code:Yg,language:"ruby"})]})}),r.jsx("section",{id:"tree-bfs",children:r.jsxs(s,{title:"BFS",children:[r.jsx(s.Tab,{code:zg,language:"python"}),r.jsx(s.Tab,{code:Ug,language:"javascript"}),r.jsx(s.Tab,{code:Vg,language:"java"}),r.jsx(s.Tab,{code:Gg,language:"cpp"}),r.jsx(s.Tab,{code:qg,language:"ruby"})]})})]})}const Xg=`def fn(graph):
    def dfs(node):
        ans = 0
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                ans += dfs(neighbor)

        return ans

    seen = {START_NODE}

    return dfs(START_NODE)
`,Zg=`def fn(graph):
    stack = [START_NODE]
    seen = {START_NODE}
    ans = 0

    while stack:
        node = stack.pop()
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                stack.append(neighbor)

    return ans
`,nm=`from collections import deque


def fn(graph):
    que = deque([START_NODE])
    seen = {START_NODE}
    ans = 0

    while que:
        node = que.popleft()
        # TODO: logic
        for neighbor in graph[node]:
            if neighbor not in seen:
                seen.add(neighbor)
                que.append(neighbor)

    return ans
`,em=`from heapq import heappop, heappush


def dijkstras(graph: list[list[tuple[int, int]]], source: int) -> list[int]:
    n = len(graph)
    distances = [float('inf')] * n
    distances[source] = 0
    heap = [(0, source)]

    while heap:
        curr_dist, node = heappop(heap)

        if curr_dist > distances[node]:
            continue

        for neighbor, weight in graph[node]:
            dist = curr_dist + weight

            if dist < distances[neighbor]:
                distances[neighbor] = dist
                heappush(heap, (dist, neighbor))

    return distances
`,tm=`def bellman_ford(n: int, edges: list[tuple[int, int, int]], source: int) -> list[int]:
    distances = [float('inf')] * n
    distances[source] = 0

    for _ in range(n - 1):
        for u, v, w in edges:
            if distances[u] != float('inf') and distances[u] + w < distances[v]:
                distances[v] = distances[u] + w

    for u, v, w in edges:
        if distances[u] != float('inf') and distances[u] + w < distances[v]:
            return []

    return distances
`,rm=`from collections import defaultdict, deque


def kahn_topological_sort(graph: dict[int, list[int]]) -> list[int]:
    result = []
    indegree = defaultdict(int)

    for vertices in graph.values():
        for v in vertices:
            indegree[v] += 1

    que = deque([node for node in graph if not indegree[node]])

    while que:
        node = que.popleft()
        result.append(node)

        for neighbor in graph[node]:
            indegree[neighbor] -= 1

            if not indegree[neighbor]:
                que.append(neighbor)

    return result if len(result) == len(graph) else []
`,im=`def kruskal_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    for w, u, v in edges:
        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,am=`from heapq import heappop


def prim_mst(n: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    mst = []
    uf = UnionFind(n)
    edges.sort()

    while edges:
        w, u, v = heappop(edges)

        if not uf.connected(u, v):
            uf.union(u, v)
            mst.append((w, u, v))

    return mst
`,om=`const fn = (graph) => {
    const dfs = (node) => {
        let ans = 0
        // TODO: logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor)
                ans += dfs(neighbor)
            }
        }

        return ans
    }

    let seen = new Set([START_NODE])

    return dfs(START_NODE)
}
`,sm=`const fn = (graph) => {
    let stack = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (stack.length) {
        let node = stack.pop()
        // TODO: logic
        for (const neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor)
                stack.push(neighbor)
            }
        }
    }

    return ans
}
`,lm=`const fn = (graph) => {
    let que = [START_NODE]
    let seen = new Set([START_NODE])
    let ans = 0

    while (que.length) {
        let currentLength = que.length
        let nextQue = []

        for (let i = 0; i < currentLength; i++) {
            let node = que[i]
            // TODO: logic
            for (const neighbor of graph[node]) {
                if (!seen.has(neighbor)) {
                    seen.add(neighbor)
                    nextQue.push(neighbor)
                }
            }
        }

        que = nextQue
    }

    return ans
}
`,um=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,cm=`const bellmanFord = (n, edges, source) => {
    let distances = new Array(n).fill(Infinity)
    distances[source] = 0

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < edges.length; j++) {
            let [u, v, w] = edges[j]

            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w
            }
        }
    }

    for (let i = 0; i < edges.length; i++) {
        let [u, v, w] = edges[i]

        if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
            return []
        }
    }

    return distances
}
`,dm=`const kahnTopologicalSort = (graph) => {
    const result = []
    const queue = []
    const indegree = new Map()

    for (let nodes of Object.values(graph)) {
        for (let node of nodes) {
            if (indegree.has(node)) {
                indegree.set(node, indegree.get(node) + 1)
            } else {
                indegree.set(node, 1)
            }
        }
    }

    for (let node of Object.keys(graph)) {
        if (!indegree.has(node)) {
            queue.push(node)
        }
    }

    while (queue.length > 0) {
        const node = queue.shift()
        result.push(node)

        if (graph[node]) {
            for (let neighbor of graph[node]) {
                indegree.set(neighbor, indegree.get(neighbor) - 1)

                if (indegree.get(neighbor) === 0) {
                    queue.push(neighbor)
                }
            }
        }
    }

    return result.length === Object.keys(graph).length ? result : []
}
`,fm=`const kruskalMst = (n, edges) => {
    let mst = []
    let uf = new UnionFind(n)

    edges.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < edges.length; i++) {
        let [w, u, v] = edges[i]

        if (!uf.connected(u, v)) {
            uf.union(u, v)
            mst.push([w, u, v])
        }
    }

    return mst
}
`,pm=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,hm=`import java.util.HashSet;
import java.util.Set;


Set<Integer> seen = new HashSet<>();

public int fn(int[][] graph) {
    seen.add(START_NODE);
    return dfs(START_NODE, graph);
}

public int dfs(int node, int[][] graph) {
    int ans = 0;
    // TODO: logic
    for (int neighbor: graph[node]) {
        if (!seen.contains(neighbor)) {
            seen.add(neighbor);
            ans += dfs(neighbor, graph);
        }
    }

    return ans;
}
`,gm=`import java.util.Stack;
import java.util.HashSet;
import java.util.Set;


public int fn(int[][] graph) {
    Stack<Integer> stack = new Stack<>();
    Set<Integer> seen = new HashSet<>();
    stack.push(START_NODE);
    seen.add(START_NODE);
    int ans = 0;

    while (!stack.empty()) {
        int node = stack.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                stack.push(neighbor);
            }
        }
    }

    return ans;
}
`,mm=`import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;


public int fn(int[][] graph) {
    Queue<Integer> que = new LinkedList<>();
    Set<Integer> seen = new HashSet<>();
    que.offer(START_NODE);
    seen.add(START_NODE);
    int ans = 0;

    while (!que.isEmpty()) {
        int node = que.remove();
        // TODO: Logic
        for (int neighbor: graph[node]) {
            if (!seen.contains(neighbor)) {
                seen.add(neighbor);
                que.add(neighbor);
            }
        }
    }

    return ans;
}
`,vm=`import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.List;


public int[] dijkstras(List<List<int[]>> graph, int source) {
    int n = graph.size();
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[source] = 0;

    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
    pq.offer(new int[]{source, 0});

    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0];
        int dist = curr[1];

        if (dist > distances[node]) {
            continue;
        }

        for (int[] edge : graph.get(node)) {
            int neighbor = edge[0];
            int weight = edge[1];
            int newDist = dist + weight;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.offer(new int[]{neighbor, newDist});
            }
        }
    }

    return distances;
}
`,ym=`import java.util.Arrays;
import java.util.List;


public int[] bellmanFord(int n, List<int[]> edges, int source) {
    int[] distances = new int[n];
    Arrays.fill(distances, Integer.MAX_VALUE);
    distances[source] = 0;

    for (int i = 0; i < n - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int w = edge[2];

            if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    for (int[] edge : edges) {
        int u = edge[0];
        int v = edge[1];
        int w = edge[2];

        if (distances[u] != Integer.MAX_VALUE && distances[u] + w < distances[v]) {
            return new int[]{};
        }
    }

    return distances;
}
`,xm=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;


public static List<Integer> kahnTopologicalSort(Map<Integer, List<Integer>> graph) {
    List<Integer> result = new ArrayList<>();
    Map<Integer, Integer> indegree = new HashMap<>();
    Queue<Integer> que = new LinkedList<>();

    for (List<Integer> vertices : graph.values()) {
        for (int v : vertices) {
            indegree.put(v, indegree.getOrDefault(v, 0) + 1);
        }
    }

    for (Integer node : graph.keySet()) {
        if (!indegree.containsKey(node)) {
            que.offer(node);
        }
    }

    while (!que.isEmpty()) {
        int node = que.poll();
        result.add(node);

        if (graph.containsKey(node)) {
            for (int neighbor : graph.get(node)) {
                indegree.put(neighbor, indegree.get(neighbor) - 1);

                if (indegree.get(neighbor) == 0) {
                    que.offer(neighbor);
                }
            }
        }
    }

    if (result.size() != graph.size()) {
        return new ArrayList<>();
    }

    return result;
}
`,_m=`import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


public List<int[]> kruskalMST(int n, List<int[]> edges) {
    List<int[]> mst = new ArrayList<>();
    UnionFind uf = new UnionFind(n);
    Collections.sort(edges, (a, b) -> Integer.compare(a[0], b[0]));

    for (int[] edge : edges) {
        int weight = edge[0];
        int u = edge[1];
        int v = edge[2];

        if (!uf.connected(u, v)) {
            uf.union(u, v);
            mst.add(edge);
        }
    }

    return mst;
}
`,bm=`import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;


public List<int[]> primMST(int n, List<int[]> edges) {
    List<int[]> mst = new ArrayList<>();
    UnionFind uf = new UnionFind(n);
    PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(edge -> edge[0]));

    for (int[] edge : edges) {
        pq.offer(edge);
    }

    while (!pq.isEmpty()) {
        int[] edge = pq.poll();
        int w = edge[0];
        int u = edge[1];
        int v = edge[2];

        if (!uf.connected(u, v)) {
            uf.union(u, v);
            mst.add(edge);
        }
    }

    return mst;
}
`,wm=`#include <unordered_set>
#include <vector>

using namespace std;


unordered_set<int> seen;

int fn(vector<vector<int>>& graph) {
    seen.insert(START_NODE);
    return dfs(START_NODE, graph);
}

int dfs(int node, vector<vector<int>>& graph) {
    int ans = 0;
    // TODO: logic
    for (int neighbor: graph[node]) {
        if (seen.find(neighbor) == seen.end()) {
            seen.insert(neighbor);
            ans += dfs(neighbor, graph);
        }
    }

    return ans;
}
`,Sm=`#include <stack>
#include <unordered_set>
#include <vector>

using namespace std;


int fn(vector<vector<int>>& graph) {
    stack<int> stack;
    unordered_set<int> seen;
    stack.push(START_NODE);
    seen.insert(START_NODE);
    int ans = 0;

    while (!stack.empty()) {
        int node = stack.top();
        stack.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                stack.push(neighbor);
            }
        }
    }
}
`,Tm=`#include <queue>
#include <unordered_set>
#include <vector>

using namespace std;


int fn(vector<vector<int>>& graph) {
    queue<int> que;
    unordered_set<int> seen;
    que.push(START_NODE);
    seen.insert(START_NODE);
    int ans = 0;

    while (!que.empty()) {
        int node = que.front();
        que.pop();
        // TODO: logic
        for (int neighbor: graph[node]) {
            if (seen.find(neighbor) == seen.end()) {
                seen.insert(neighbor);
                que.push(neighbor);
            }
        }
    }
}
`,jm=`#include <limits>
#include <queue>
#include <utility>
#include <vector>

using namespace std;


vector<int> dijkstra(vector<vector<pair<int, int>>>& graph, int source) {
    int n = graph.size();
    vector<int> distances(n, INT_MAX);
    distances[source] = 0;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> heap;
    heap.push({0, source});

    while (!heap.empty()) {
        int currDist = heap.top().first;
        int node = heap.top().second;
        heap.pop();

        if (currDist > distances[node]) {
            continue;
        }

        for (pair<int, int> edge : graph[node]) {
            int neighbor = edge.first;
            int weight = edge.second;
            int dist = currDist + weight;

            if (dist < distances[neighbor]) {
                distances[neighbor] = dist;
                heap.push({dist, neighbor});
            }
        }
    }

    return distances;
}
`,km=`#include <vector>
#include <utility>
#include <limits>

using namespace std;


vector<int> bellman_ford(int n, vector<pair<pair<int, int>, int>>& edges, int source) {
    vector<int> distances(n, numeric_limits<int>::max());
    distances[source] = 0;

    for (int i = 0; i < n - 1; ++i) {
        for (const auto& edge : edges) {
            int u = edge.first.first;
            int v = edge.first.second;
            int w = edge.second;

            if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    for (const auto& edge : edges) {
        int u = edge.first.first;
        int v = edge.first.second;
        int w = edge.second;

        if (distances[u] != numeric_limits<int>::max() && distances[u] + w < distances[v]) {
            return vector<int>();
        }
    }

    return distances;
}
`,Em=`#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;


vector<int> kahn_topological_sort(unordered_map<int, vector<int>>& graph) {
    vector<int> result;
    unordered_map<int, int> indegree;

    for (auto& [node, neighbors] : graph) {
        for (int neighbor : neighbors) {
            indegree[neighbor]++;
        }
    }

    queue<int> que;

    for (auto& [node, _] : graph) {
        if (indegree[node] == 0) {
            que.push(node);
        }
    }

    while (!que.empty()) {
        int node = que.front();
        que.pop();
        result.push_back(node);

        for (int neighbor : graph[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                que.push(neighbor);
            }
        }
    }

    return (result.size() == graph.size()) ? result : vector<int>();
}
`,Nm=`#include <vector>
#include <algorithm>

using namespace std;


vector<tuple<int, int, int>> kruskal_mst(int n, vector<tuple<int, int, int>>& edges) {
    vector<tuple<int, int, int>> mst;
    UnionFind uf(n);
    sort(edges.begin(), edges.end());

    for (auto& [w, u, v] : edges) {
        if (!uf.connected(u, v)) {
            uf.unionNodes(u, v);
            mst.emplace_back(w, u, v);
        }
    }

    return mst;
}
`,Om=`#include <vector>
#include <queue>
#include <algorithm>

using namespace std;


vector<tuple<int, int, int>> prim_mst(int n, vector<tuple<int, int, int>>& edges) {
    vector<tuple<int, int, int>> mst;
    UnionFind uf(n);
    make_heap(edges.begin(), edges.end());

    while (!edges.empty()) {
        auto [w, u, v] = edges.front();
        pop_heap(edges.begin(), edges.end());
        edges.pop_back();

        if (!uf.connected(u, v)) {
            uf.unionNodes(u, v);
            mst.emplace_back(w, u, v);
        }
    }

    return mst;
}
`,Am=`require 'set'

def fn(graph)
  seen = Set.new([START_NODE])

  dfs = lambda do |node|
    ans = 0
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        ans += dfs.call(neighbor)
      end
    end
    ans
  end

  dfs.call(START_NODE)
end
`,Cm=`require 'set'

def fn(graph)
  stack = [START_NODE]
  seen  = Set.new([START_NODE])
  ans   = 0

  until stack.empty?
    node = stack.pop
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        stack << neighbor
      end
    end
  end

  ans
end
`,Lm=`require 'set'

def fn(graph)
  queue = [START_NODE]
  seen  = Set.new([START_NODE])
  ans   = 0

  until queue.empty?
    node = queue.shift
    # TODO: logic
    graph[node].each do |neighbor|
      unless seen.include?(neighbor)
        seen.add(neighbor)
        queue << neighbor
      end
    end
  end

  ans
end
`,Rm=`require 'priority_queue'

def dijkstras(graph, source)
  n         = graph.size
  distances = Array.new(n, Float::INFINITY)

  distances[source] = 0

  heap = PriorityQueue.new
  heap[source] = 0

  until heap.empty?
    node, curr_dist = heap.delete_min
    next if curr_dist > distances[node]

    graph[node].each do |neighbor, weight|
      dist = curr_dist + weight
      if dist < distances[neighbor]
        distances[neighbor] = dist
        heap[neighbor] = dist
      end
    end
  end

  distances
end
`,Pm=`def bellman_ford(n, edges, source)
  distances         = Array.new(n, Float::INFINITY)
  distances[source] = 0

  (n - 1).times do
    edges.each do |u, v, w|
      if distances[u] != Float::INFINITY && distances[u] + w < distances[v]
        distances[v] = distances[u] + w
      end
    end
  end

  edges.each do |u, v, w|
    if distances[u] != Float::INFINITY && distances[u] + w < distances[v]
      return []
    end
  end

  distances
end
`,Mm=`def kahn_topological_sort(graph)
  result    = []
  indegree  = Hash.new(0)

  graph.each_value do |vertices|
    vertices.each do |v|
      indegree[v] += 1
    end
  end

  queue = graph.keys.select { |node| indegree[node] == 0 }

  until queue.empty?
    node = queue.shift
    result << node

    graph[node].each do |neighbor|
      indegree[neighbor] -= 1
      queue << neighbor if indegree[neighbor] == 0
    end
  end

  result.size == graph.size ? result : []
end
`,Im=`def kruskal_mst(n, edges)
  mst = []
  uf  = UnionFind.new(n)
  edges.sort.each do |w, u, v|
    unless uf.connected(u, v)
      uf.union(u, v)
      mst << [w, u, v]
    end
  end

  mst
end
`,Dm=`def prim_mst(n, edges)
  mst = []
  uf  = UnionFind.new(n)
  edges.sort.each do |w, u, v|
    unless uf.connected(u, v)
      uf.union(u, v)
      mst << [w, u, v]
    end
  end

  mst
end
`;function zm(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Graph"}),r.jsx("section",{id:"graph-dfs-recursive",children:r.jsxs(s,{title:"DFS (recursive)",children:[r.jsx(s.Tab,{code:Xg,language:"python"}),r.jsx(s.Tab,{code:om,language:"javascript"}),r.jsx(s.Tab,{code:hm,language:"java"}),r.jsx(s.Tab,{code:wm,language:"cpp"}),r.jsx(s.Tab,{code:Am,language:"ruby"})]})}),r.jsx("section",{id:"graph-dfs-iterative",children:r.jsxs(s,{title:"DFS (iterative)",children:[r.jsx(s.Tab,{code:Zg,language:"python"}),r.jsx(s.Tab,{code:sm,language:"javascript"}),r.jsx(s.Tab,{code:gm,language:"java"}),r.jsx(s.Tab,{code:Sm,language:"cpp"}),r.jsx(s.Tab,{code:Cm,language:"ruby"})]})}),r.jsx("section",{id:"graph-bfs",children:r.jsxs(s,{title:"BFS",children:[r.jsx(s.Tab,{code:nm,language:"python"}),r.jsx(s.Tab,{code:lm,language:"javascript"}),r.jsx(s.Tab,{code:mm,language:"java"}),r.jsx(s.Tab,{code:Tm,language:"cpp"}),r.jsx(s.Tab,{code:Lm,language:"ruby"})]})}),r.jsx("section",{id:"graph-dijkstra",children:r.jsxs(s,{title:"Dijkstra (shortest path)",children:[r.jsx(s.Tab,{code:em,language:"python"}),r.jsx(s.Tab,{code:um,language:"javascript"}),r.jsx(s.Tab,{code:vm,language:"java"}),r.jsx(s.Tab,{code:jm,language:"cpp"}),r.jsx(s.Tab,{code:Rm,language:"ruby"})]})}),r.jsx("section",{id:"graph-bellman-ford",children:r.jsxs(s,{title:"Bellman-Ford (shortest path)",children:[r.jsx(s.Tab,{code:tm,language:"python"}),r.jsx(s.Tab,{code:cm,language:"javascript"}),r.jsx(s.Tab,{code:ym,language:"java"}),r.jsx(s.Tab,{code:km,language:"cpp"}),r.jsx(s.Tab,{code:Pm,language:"ruby"})]})}),r.jsx("section",{id:"graph-kahn",children:r.jsxs(s,{title:"Kahn (topological sort)",children:[r.jsx(s.Tab,{code:rm,language:"python"}),r.jsx(s.Tab,{code:dm,language:"javascript"}),r.jsx(s.Tab,{code:xm,language:"java"}),r.jsx(s.Tab,{code:Em,language:"cpp"}),r.jsx(s.Tab,{code:Mm,language:"ruby"})]})}),r.jsx("section",{id:"graph-kruskal",children:r.jsxs(s,{title:"Kruskal (mst)",children:[r.jsx(s.Tab,{code:im,language:"python"}),r.jsx(s.Tab,{code:fm,language:"javascript"}),r.jsx(s.Tab,{code:_m,language:"java"}),r.jsx(s.Tab,{code:Nm,language:"cpp"}),r.jsx(s.Tab,{code:Im,language:"ruby"})]})}),r.jsx("section",{id:"graph-prim",children:r.jsxs(s,{title:"Prim (mst)",children:[r.jsx(s.Tab,{code:am,language:"python"}),r.jsx(s.Tab,{code:pm,language:"javascript"}),r.jsx(s.Tab,{code:bm,language:"java"}),r.jsx(s.Tab,{code:Om,language:"cpp"}),r.jsx(s.Tab,{code:Dm,language:"ruby"})]})})]})}const Bm=`from heapq import heappop, heappush


def fn(arr, k):
    heap = []

    for num in arr:
        # TODO: logic to push onto heap according to problem's criteria
        heappush(heap, (CRITERIA, num))

        if len(heap) > k:
            heappop(heap)

    return [num for num in heap]
`,Fm=`/*
    JavaScript lacks built-in support for heaps.
    Try using a language that doesn't hate you, like Python.
*/
`,Um=`import java.util.PriorityQueue;


public int[] fn(int[] arr, int k) {
    PriorityQueue<Integer> heap = new PriorityQueue<>(CRITERIA);

    for (int num: arr) {
        // TODO: logic to push onto heap according to problem's criteria
        heap.add(num);

        if (heap.size() > k) {
            heap.remove();
        }
    }

    int[] ans = new int[k];

    for (int i = 0; i < k; i++) {
        ans[i] = heap.remove();
    }

    return ans;
}
`,Hm=`#include <vector>
#include <queue>

using namespace std;


vector<int> fn(vector<int>& arr, int k) {
    priority_queue<int, vector<int>, greater<int>> min_heap;
    vector<int> result;

    for (int num : arr) {
        // TODO: logic to push onto heap according to problem's criteria
        min_heap.push(num);

        if (min_heap.size() > k) {
            min_heap.pop();
        }
    }

    while (!min_heap.empty()) {
        result.push_back(min_heap.top());
        min_heap.pop();
    }

    return result;
}
`,Wm=`def fn(arr, k)
  heap = []

  arr.each do |num|
    # TODO: logic to push onto heap according to problem's criteria
    heap.push([CRITERIA, num])

    if heap.size > k
      # TODO: pop the top element from heap
      heap.pop
    end
  end

  heap.map { |item| item[1] }
end
`;function Vm(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Heap"}),r.jsx("section",{id:"heap-find-top-k-elements",children:r.jsxs(s,{title:"find top k elements",children:[r.jsx(s.Tab,{code:Bm,language:"python"}),r.jsx(s.Tab,{code:Fm,language:"javascript"}),r.jsx(s.Tab,{code:Um,language:"java"}),r.jsx(s.Tab,{code:Hm,language:"cpp"}),r.jsx(s.Tab,{code:Wm,language:"ruby"})]})})]})}const $m=`def fn(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            # TODO: logic
            return
        if arr[mid] > target:
            right = mid - 1
        else:
            left = mid + 1

    return left
`,Km=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] >= target:
            right = mid
        else:
            left = mid + 1

    return left
`,Gm=`def fn(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = (left + right) // 2

        if arr[mid] > target:
            right = mid
        else:
            left = mid + 1

    return left
`,Jm=`def fn(arr):
    def check(x):
        return BOOLEAN

    left = MINIMUM_POSSIBLE_ANSWER
    right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right:
        mid = (left + right) // 2

        if check(mid):
            right = mid - 1
        else:
            left = mid + 1

    return left
`,Ym=`def fn(arr):
    def check(x):
        return BOOLEAN

    left = MINIMUM_POSSIBLE_ANSWER
    right = MAXIMUM_POSSIBLE_ANSWER

    while left <= right:
        mid = (left + right) // 2

        if check(mid):
            left = mid + 1
        else:
            right = mid - 1

    return right
`,qm=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target) {
            // TODO: logic
            return
        }

        if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,Qm=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,Xm=`const fn = (arr, target) => {
    let left = 0
    let right = arr.length

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}
`,Zm=`const fn = (arr) => {
    const check = (x) => {
        return BOOLEAN
    }

    let left = MINIMUM_POSSIBLE_ANSWER
    let right = MAXMIMUM_POSSIBLE_ANSWER

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (check(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}
`,nv=`const fn = (arr) => {
    const check = (x) => {
        return BOOLEAN
    }

    let left = MINIMUM_POSSIBLE_ANSWER
    let right = MAXMIMUM_POSSIBLE_ANSWER

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (check(mid)) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}
`,ev=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            // TODO: logic
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,tv=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,rv=`public int fn(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,iv=`public int fn(int[] arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

public boolean check(int x) {
    return BOOLEAN
}
`,av=`public int fn(int[] arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

public boolean check(int x) {
    return BOOLEAN
}
`,ov=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            // TODO: logic
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,sv=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,lv=`#include <vector>

using namespace std;


int fn(vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size();

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,uv=`#include <vector>

using namespace std;


bool check(int x) {
    return BOOLEAN;
}

int fn(vector<int>& arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
`,cv=`#include <vector>

using namespace std;


bool check(int x) {
    return BOOLEAN;
}

int fn(vector<int>& arr) {
    int left = MINIMUM_POSSIBLE_ANSWER;
    int right = MAXIMUM_POSSIBLE_ANSWER;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (check(mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}
`,dv=`def fn(arr, target)
  left  = 0
  right = arr.length - 1

  while left <= right
    mid = (left + right) / 2

    if arr[mid] == target
      # TODO: logic
      return
    elsif arr[mid] > target
      right = mid - 1
    else
      left = mid + 1
    end
  end

  left
end
`,fv=`def fn(arr, target)
  left  = 0
  right = len(arr)

  while left < right
    mid = (left + right) / 2

    if arr[mid] >= target
      right = mid
    else
      left = mid + 1
    end
  end

  left
end
`,pv=`def fn(arr, target)
  left  = 0
  right = len(arr)

  while left < right
    mid = (left + right) / 2

    if arr[mid] > target
      right = mid
    else
      left = mid + 1
    end
  end

  left
end
`,hv=`def fn(arr)
  left  = MINIMUM_POSSIBLE_ANSWER
  right = MAXIMUM_POSSIBLE_ANSWER

  while left <= right
    mid = (left + right) / 2 # int div

    if check(mid)
      right = mid - 1
    else
      left = mid + 1
    end
  end

  left
end

def check(x)
  BOOLEAN
end`,gv=`def fn(arr)
  left  = MINIMUM_POSSIBLE_ANSWER
  right = MAXIMUM_POSSIBLE_ANSWER

  while left <= right
    mid = (left + right) / 2 # integer division

    if check(mid)
      left = mid + 1
    else
      right = mid - 1
    end

  end

  right
end

def check(x)
  BOOLEAN
end
`;function mv(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Binary Search"}),r.jsx("section",{id:"binarysearch-binary-search",children:r.jsxs(s,{title:"binary search",children:[r.jsx(s.Tab,{code:$m,language:"python"}),r.jsx(s.Tab,{code:qm,language:"javascript"}),r.jsx(s.Tab,{code:ev,language:"java"}),r.jsx(s.Tab,{code:ov,language:"cpp"}),r.jsx(s.Tab,{code:dv,language:"ruby"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-left-insertion",children:r.jsxs(s,{title:"duplicate elements, left-most insertion point",children:[r.jsx(s.Tab,{code:Km,language:"python"}),r.jsx(s.Tab,{code:Qm,language:"javascript"}),r.jsx(s.Tab,{code:tv,language:"java"}),r.jsx(s.Tab,{code:sv,language:"cpp"}),r.jsx(s.Tab,{code:fv,language:"ruby"})]})}),r.jsx("section",{id:"binarysearch-duplicate-elements-right-insertion",children:r.jsxs(s,{title:"duplicate elements, right-most insertion point",children:[r.jsx(s.Tab,{code:Gm,language:"python"}),r.jsx(s.Tab,{code:Xm,language:"javascript"}),r.jsx(s.Tab,{code:rv,language:"java"}),r.jsx(s.Tab,{code:lv,language:"cpp"}),r.jsx(s.Tab,{code:pv,language:"ruby"})]})}),r.jsx("section",{id:"binarysearch-greedy-minimum",children:r.jsxs(s,{title:"greedy (minimum)",children:[r.jsx(s.Tab,{code:Jm,language:"python"}),r.jsx(s.Tab,{code:Zm,language:"javascript"}),r.jsx(s.Tab,{code:iv,language:"java"}),r.jsx(s.Tab,{code:uv,language:"cpp"}),r.jsx(s.Tab,{code:hv,language:"ruby"})]})}),r.jsx("section",{id:"binarysearch-greedy-maximum",children:r.jsxs(s,{title:"greedy (maximum)",children:[r.jsx(s.Tab,{code:Ym,language:"python"}),r.jsx(s.Tab,{code:nv,language:"javascript"}),r.jsx(s.Tab,{code:av,language:"java"}),r.jsx(s.Tab,{code:cv,language:"cpp"}),r.jsx(s.Tab,{code:gv,language:"ruby"})]})})]})}const vv=`def backtrack(curr, OTHER_ARGUMENTS...):
    if (BASE_CASE):
        # TODO: modify answer
        return

    ans = 0

    for (ITERATE_OVER_INPUT):
        # TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        # TODO: undo modification of current state

    return ans
`,yv=`const backtrack = (curr, OTHER_ARGUMENTS...) => {
    if (BASE_CASE) {
        // TODO: modify answer
        return
    }

    let ans = 0

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...)
        // TODO: undo modification of current state
    }

    return ans
}
`,xv=`public int backtrack(STATE curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // TODO: modify answer
        return 0;
    }

    int ans = 0;

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // TODO: undo modification of current state
    }

    return ans;
}
`,_v=`int backtrack(STATE curr, OTHER_ARGUMENTS...) {
    if (BASE_CASE) {
        // TODO: modify answer
        return 0;
    }

    int ans = 0;

    for (ITERATE_OVER_INPUT) {
        // TODO: modify current state
        ans += backtrack(curr, OTHER_ARGUMENTS...);
        // TODO: undo modification of current state
    }

    return ans;
}
`,bv=`def backtrack(curr, OTHER_ARGUMENTS...)
  if(BASE_CASE)
    # TODO: modify answer
    return
  end

  ans = 0

  INPUTS.each do |i|
    # TODO: modify current state
    ans += backtrack(curr, OTHER_ARGUMENTS...)
    # TODO: undo modification of current state
  end

  ans
end
`;function wv(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Backtracking"}),r.jsx("section",{id:"backtracking-backtracking",children:r.jsxs(s,{title:"backtracking",children:[r.jsx(s.Tab,{code:vv,language:"python"}),r.jsx(s.Tab,{code:yv,language:"javascript"}),r.jsx(s.Tab,{code:xv,language:"java"}),r.jsx(s.Tab,{code:_v,language:"cpp"}),r.jsx(s.Tab,{code:bv,language:"ruby"})]})})]})}const Sv=`def fn(arr):
    @cache
    def dp(STATE):
        if BASE_CASE:
            return 0
        return RECURRENCE_RELATION(STATE)

    return dp(STATE_FOR_WHOLE_INPUT)
`,Tv=`def fn(arr):
    if BASE_CASE:
        return 0

    dp = [BASE_CASE] * (STATE_FOR_WHOLE_INPUT + 1)

    for STATE in range(SMALLEST_SUBPROBLEM, STATE_FOR_WHOLE_INPUT + 1):
        if BASE_CASE:
            dp[STATE] = BASE_CASE
        else:
            dp[STATE] = RECURRENCE_RELATION(STATE)

    return dp[STATE_FOR_WHOLE_INPUT]
`,jv=`def kadane(arr: list[int]) -> int:
    curr_sub = max_sub = arr[0]

    for num in arr[1:]:
        curr_sub = max(curr_sub + num, num)
        max_sub = max(max_sub, curr_sub)

    return max_sub
`,kv=`const fn = (arr) => {
    const dp = (STATE) => {
        if (BASE_CASE) {
            return 0
        }

        if (memo[STATE] != -1) {
            return memo[STATE]
        }

        let ans = RECURRENCE_RELATION(STATE)
        memo[STATE] = ans

        return ans
    }

    let memo = ARRAY_SIZED_ACCORDING_TO_STATE

    return dp(STATE_FOR_WHOLE_INPUT)
}
`,Ev=`const fn = (arr) => {
    const dp = new Array(STATE_FOR_WHOLE_INPUT + 1).fill(BASE_CASE)

    for (let state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; state++) {
        if (BASE_CASE) {
            dp[state] = BASE_CASE
        } else {
            dp[state] = RECURRENCE_RELATION(state)
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT]
}
`,Nv=`const kadane = (arr) => {
    let currSub = arr[0]
    let maxSub = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i])
        maxSub = Math.max(maxSub, currSub)
    }

    return maxSub
}
`,Ov=`import java.util.HashMap;
import java.util.Map;


Map<STATE, Integer> memo = new HashMap<>();

public int fn(int[] arr) {
    return dp(STATE_FOR_WHOLE_INPUT, arr);
}

public int dp(STATE, int[] arr) {
    if (BASE_CASE) {
        return 0;
    }

    if (memo.contains(STATE)) {
        return memo.get(STATE);
    }

    int ans = RECURRENCE_RELATION(STATE);
    memo.put(STATE, ans);
    return ans;
}
`,Av=`import java.util.Arrays;


public int fn(int[] arr) {
    if (BASE_CASE) {
        return 0;
    }

    int[] dp = new int[STATE_FOR_WHOLE_INPUT + 1];
    Arrays.fill(dp, BASE_CASE);

    for (int STATE = SMALLEST_SUBPROBLEM; STATE <= STATE_FOR_WHOLE_INPUT; STATE++) {
        if (BASE_CASE) {
            dp[STATE] = BASE_CASE;
        } else {
            dp[STATE] = RECURRENCE_RELATION(STATE);
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT];
}
`,Cv=`public int kadane(int[] arr) {
    int currSub = arr[0];
    int maxSub = arr[0];

    for (int i = 1; i < arr.length; i++) {
        currSub = Math.max(currSub + arr[i], arr[i]);
        maxSub = Math.max(maxSub, currSub);
    }

    return maxSub;
}
`,Lv=`#include <unordered_map>

using namespace std;


unordered_map<STATE, int> memo;

int fn(vector<int>& arr) {
    return dp(STATE_FOR_WHOLE_INPUT, arr);
}

int dp(STATE, vector<int>& arr) {
    if (BASE_CASE) {
        return 0;
    }

    if (memo.find(STATE) != memo.end()) {
        return memo[STATE];
    }

    int ans = RECURRENCE_RELATION(STATE);
    memo[STATE] = ans;
    return ans;
}
`,Rv=`#include <vector>
#include <algorithm>

using namespace std;


int fn(int arr[], int size) {
    if (BASE_CASE) {
        return 0;
    }

    vector<int> dp(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE);

    for (int state = SMALLEST_SUBPROBLEM; state <= STATE_FOR_WHOLE_INPUT; ++state) {
        if (BASE_CASE) {
            dp[state] = BASE_CASE;
        } else {
            dp[state] = RECURRENCE_RELATION(state);
        }
    }

    return dp[STATE_FOR_WHOLE_INPUT];
}
`,Pv=`#include <vector>
#include <algorithm>

using namespace std;


int kadane(vector<int>& arr) {
    int curr_sub = arr[0];
    int max_sub = arr[0];

    for (size_t i = 1; i < arr.size(); ++i) {
        curr_sub = max(curr_sub + arr[i], arr[i]);
        max_sub = max(max_sub, curr_sub);
    }

    return max_sub;
}
`,Mv=`def fn(arr)
  cache = {}

  dp = lambda do |state|
    return 0 if BASE_CASE
    return cache[state] if cache.key?(state)

    cache[state] = RECURRENCE_RELATION(state)
  end

  dp.call(STATE_FOR_WHOLE_INPUT)
end
`,Iv=`def fn(arr)
  if BASE_CASE
    return 0
  end

  dp = Array.new(STATE_FOR_WHOLE_INPUT + 1, BASE_CASE)

  (SMALLEST_SUBPROBLEM..STATE_FOR_WHOLE_INPUT).each do |state|
    if BASE_CASE
      dp[state] = BASE_CASE
    else
      dp[state] = RECURRENCE_RELATION(state)
    end
  end

  dp[STATE_FOR_WHOLE_INPUT]
end
`,Dv=`def kadane(arr)
  curr_sub  = arr[0]
  max_sub   = arr[0]

  arr[1..-1].each do |num|
    curr_sub = [curr_sub + num, num].max
    max_sub = [max_sub, curr_sub].max
  end

  max_sub
end
`;function zv(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Dynamic Programming"}),r.jsx("section",{id:"dp-top-down",children:r.jsxs(s,{title:"DP top-down",children:[r.jsx(s.Tab,{code:Sv,language:"python"}),r.jsx(s.Tab,{code:kv,language:"javascript"}),r.jsx(s.Tab,{code:Ov,language:"java"}),r.jsx(s.Tab,{code:Lv,language:"cpp"}),r.jsx(s.Tab,{code:Mv,language:"ruby"})]})}),r.jsx("section",{id:"dp-bottom-up",children:r.jsxs(s,{title:"DP bottom-up",children:[r.jsx(s.Tab,{code:Tv,language:"python"}),r.jsx(s.Tab,{code:Ev,language:"javascript"}),r.jsx(s.Tab,{code:Av,language:"java"}),r.jsx(s.Tab,{code:Rv,language:"cpp"}),r.jsx(s.Tab,{code:Iv,language:"ruby"})]})}),r.jsx("section",{id:"dp-kadane",children:r.jsxs(s,{title:"Kadane (max-sum subarray)",children:[r.jsx(s.Tab,{code:jv,language:"python"}),r.jsx(s.Tab,{code:Nv,language:"javascript"}),r.jsx(s.Tab,{code:Cv,language:"java"}),r.jsx(s.Tab,{code:Pv,language:"cpp"}),r.jsx(s.Tab,{code:Dv,language:"ruby"})]})})]})}const Bv=`def test_kth_bit(num: int, k: int) -> bool:
    return num & (1 << k) != 0
`,Fv=`def set_kth_bit(num: int, k: int) -> int:
    return num | (1 << k)
`,Uv=`def clear_kth_bit(num: int, k: int) -> int:
    return num & ~(1 << k)
`,Hv=`def toggle_kth_bit(num: int, k: int) -> int:
    return num ^ (1 << k)
`,Wv=`def get_rightmost_set_bit(num: int) -> int:
    return num & -num
`,Vv=`def count_set_bits(num: int) -> int:
    return bin(num).count('1')
`,$v=`def multiply_by_power_of_two(num: int, k: int) -> int:
    return num << k
`,Kv=`def divide_by_power_of_two(num: int, k: int) -> int:
    return num >> k
`,Gv=`def is_power_of_two(num: int) -> bool:
    return (num & (num - 1)) == 0
`,Jv=`def swap_variables(num1: int, num2: int) -> tuple:
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return num1, num2
`,Yv=`const testKthBit = (num, k) => {
    return num & (1 << k) !== 0
}
`,qv=`const setKthBit = (num, k) => {
    return num | (1 << k)
}
`,Qv=`const clearKthBit = (num, k) => {
    return num & ~(1 << k)
}
`,Xv=`const toggleKthBit = (num, k) => {
    return num ^ (1 << k)
}
`,Zv=`const getRightmostSetBit = (num) => {
    return num & -num
}
`,n1=`const countSetBits = (num) => {
    return num.toString(2).split('1').length - 1
}
`,e1=`const multiplyByPowerOfTwo = (num, k) => {
    return num << k
}
`,t1=`const divideByPowerOfTwo = (num, k) => {
    return num >> k;
}
`,r1=`const isPowerOfTwo = (num) => {
    return (num & (num - 1)) === 0
}
`,i1=`const swapVariables = (num1, num2) => {
    num1 ^= num2
    num2 ^= num1
    num1 ^= num2
    return [num1, num2]
}
`,a1=`public boolean testKthBit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,o1=`public int setKthBit(int num, int k) {
    return num | (1 << k);
}
`,s1=`public int clearKthBit(int num, int k) {
    return num & ~(1 << k);
}
`,l1=`public int toggleKthBit(int num, int k) {
    return num ^ (1 << k);
}
`,u1=`public int getRightmostSetBit(int num) {
    return num & -num;
}
`,c1=`public int countSetBits(int num) {
    int count = 0;

    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,d1=`public int multiplyByPowerOfTwo(int num, int k) {
    return num << k;
}
`,f1=`public int divideByPowerOfTwo(int num, int k) {
    return num >> k;
}
`,p1=`public boolean isPowerOfTwo(int num) {
    return (num & (num - 1)) == 0;
}
`,h1=`public int[] swapVariables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return new int[] { num1, num2 };
}
`,g1=`bool test_kth_bit(int num, int k) {
    return (num & (1 << k)) != 0;
}
`,m1=`int set_kth_bit(int num, int k) {
    return num | (1 << k);
}
`,v1=`int clear_kth_bit(int num, int k) {
    return num & ~(1 << k);
}
`,y1=`int toggle_kth_bit(int num, int k) {
    return num ^ (1 << k);
}
`,x1=`int get_rightmost_set_bit(int num) {
    return num & -num;
}
`,_1=`int count_set_bits(int num) {
    int count = 0;

    while (num) {
        count += num & 1;
        num >>= 1;
    }

    return count;
}
`,b1=`int multiply_by_power_of_two(int num, int k) {
    return num << k;
}
`,w1=`int divide_by_power_of_two(int num, int k) {
    return num >> k;
}
`,S1=`bool is_power_of_two(int num) {
    return (num & (num - 1)) == 0;
}
`,T1=`#include <tuple>

using namespace std;


tuple<int, int> swap_variables(int num1, int num2) {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return std::make_tuple(num1, num2);
}
`,j1=`def test_kth_bit(num, k)
  num & (1 << k) != 0
end
`,k1=`def set_kth_bit(num, k)
  num | (1 << k)
end
`,E1=`def clear_kth_bit(num, k)
  num & ~(1 << k)
end
`,N1=`def toggle_kth_bit(num, k)
  num ^ (1 << k)
end
`,O1=`def get_rightmost_set_bit(num)
  num & -num
end
`,A1=`def count_set_bits(num)
  num.to_s(2).count('1')
end
`,C1=`def multiply_by_power_of_two(num, k)
  num << k
end
`,L1=`def divide_by_power_of_two(num, k)
  num >> k
end
`,R1=`def is_power_of_two(num)
  (num & (num - 1)) == 0
end
`,P1=`# in-memory swaps
# unnecessary for modern languages
def swap_variables(num1, num2)
  num1 ^= num2
  num2 ^= num1
  num1 ^= num2

  return num1, num2
end
`;function M1(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Bit Manipulation"}),r.jsx("section",{id:"bitmanipulation-test-kth-bit",children:r.jsxs(s,{title:"test kth-bit",children:[r.jsx(s.Tab,{code:Bv,language:"python"}),r.jsx(s.Tab,{code:Yv,language:"javascript"}),r.jsx(s.Tab,{code:a1,language:"java"}),r.jsx(s.Tab,{code:g1,language:"cpp"}),r.jsx(s.Tab,{code:j1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-set-kth-bit",children:r.jsxs(s,{title:"set kth bit",children:[r.jsx(s.Tab,{code:Fv,language:"python"}),r.jsx(s.Tab,{code:qv,language:"javascript"}),r.jsx(s.Tab,{code:o1,language:"java"}),r.jsx(s.Tab,{code:m1,language:"cpp"}),r.jsx(s.Tab,{code:k1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-clear-kth-bit",children:r.jsxs(s,{title:"clear kth bit",children:[r.jsx(s.Tab,{code:Uv,language:"python"}),r.jsx(s.Tab,{code:Qv,language:"javascript"}),r.jsx(s.Tab,{code:s1,language:"java"}),r.jsx(s.Tab,{code:v1,language:"cpp"}),r.jsx(s.Tab,{code:E1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-toggle-kth-bit",children:r.jsxs(s,{title:"toggle kth bit",children:[r.jsx(s.Tab,{code:Hv,language:"python"}),r.jsx(s.Tab,{code:Xv,language:"javascript"}),r.jsx(s.Tab,{code:l1,language:"java"}),r.jsx(s.Tab,{code:y1,language:"cpp"}),r.jsx(s.Tab,{code:N1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-get-rightmost-bit",children:r.jsxs(s,{title:"get rightmost bit",children:[r.jsx(s.Tab,{code:Wv,language:"python"}),r.jsx(s.Tab,{code:Zv,language:"javascript"}),r.jsx(s.Tab,{code:u1,language:"java"}),r.jsx(s.Tab,{code:x1,language:"cpp"}),r.jsx(s.Tab,{code:O1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-count-set-bits",children:r.jsxs(s,{title:"count set bits",children:[r.jsx(s.Tab,{code:Vv,language:"python"}),r.jsx(s.Tab,{code:n1,language:"javascript"}),r.jsx(s.Tab,{code:c1,language:"java"}),r.jsx(s.Tab,{code:_1,language:"cpp"}),r.jsx(s.Tab,{code:A1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-multiply-power-of-two",children:r.jsxs(s,{title:"multiply by 2^k",children:[r.jsx(s.Tab,{code:$v,language:"python"}),r.jsx(s.Tab,{code:e1,language:"javascript"}),r.jsx(s.Tab,{code:d1,language:"java"}),r.jsx(s.Tab,{code:b1,language:"cpp"}),r.jsx(s.Tab,{code:C1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-divide-power-of-two",children:r.jsxs(s,{title:"divide by 2^k",children:[r.jsx(s.Tab,{code:Kv,language:"python"}),r.jsx(s.Tab,{code:t1,language:"javascript"}),r.jsx(s.Tab,{code:f1,language:"java"}),r.jsx(s.Tab,{code:w1,language:"cpp"}),r.jsx(s.Tab,{code:L1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-check-power-of-two",children:r.jsxs(s,{title:"check if number is power of 2",children:[r.jsx(s.Tab,{code:Gv,language:"python"}),r.jsx(s.Tab,{code:r1,language:"javascript"}),r.jsx(s.Tab,{code:p1,language:"java"}),r.jsx(s.Tab,{code:S1,language:"cpp"}),r.jsx(s.Tab,{code:R1,language:"ruby"})]})}),r.jsx("section",{id:"bitmanipulation-swap-variables",children:r.jsxs(s,{title:"swap two variables",children:[r.jsx(s.Tab,{code:Jv,language:"python"}),r.jsx(s.Tab,{code:i1,language:"javascript"}),r.jsx(s.Tab,{code:h1,language:"java"}),r.jsx(s.Tab,{code:T1,language:"cpp"}),r.jsx(s.Tab,{code:P1,language:"ruby"})]})})]})}const I1=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    create_matrix = [[0 for _ in range(c)] for _ in range(r)]
    copy_matrix = [row[:] for row in matrix]
`,D1=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    main_diagonal = [matrix[i][i] for i in range(min(r, c))]
    anti_diagonal = [matrix[i][~i] for i in range(min(r, c))]
`,z1=`def fn(matrix: list[list[int]]):
    r = len(matrix)
    c = len(matrix[0])

    transpose_tuple = zip(*matrix)
    transpose = [list(row) for row in transpose_tuple]
    rotate_left = transpose[::-1]
    rotate_right = [row[::-1] for row in transpose]
`,B1=`const fn = (matrix) => {
    const r = matrix.length;
    const c = matrix[0].length;

    const createMatrix = Array.from({ length: r }, () => Array(c).fill(0))
    const copyMatrix = matrix.map(row => [...row])
}
`,F1=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const mainDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][i])
    const antiDiagonal = Array.from({ length: Math.min(r, c) }, (_, i) => matrix[i][~i])
}
`,U1=`const fn = (matrix) => {
    const r = matrix.length
    const c = matrix[0].length

    const transposeTuple = matrix[0].map((_, i) => matrix.map(row => row[i]))
    const transpose = transposeTuple.map(row => [...row])
    const rotateLeft = transpose.reverse()
    const rotateRight = transpose.map(row => row.reverse())
}
`,H1=`import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    List<List<Integer>> createMatrix = new ArrayList<>();
    List<List<Integer>> copyMatrix = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int i = 0; i < r; i++) {
        List<Integer> row = new ArrayList<>();

        for (int j = 0; j < c; j++) {
            row.add(0);
        }

        createMatrix.add(row);
    }

    for (List<Integer> row : matrix) {
        copyMatrix.add(new ArrayList<>(row));
    }
}
`,W1=`import java.util.ArrayList;
import java.util.List;


public void fn(List<List<Integer>> matrix) {
    List<Integer> mainDiagonal = new ArrayList<>();
    List<Integer> antiDiagonal = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int i = 0; i < Math.min(r, c); i++) {
        mainDiagonal.add(matrix.get(i).get(i));
    }

    for (int i = 0; i < Math.min(r, c); i++) {
        antiDiagonal.add(matrix.get(i).get(c - 1 - i));
    }
}
`,V1=`import java.util.ArrayList;
import java.util.List;


public static void fn(List<List<Integer>> matrix) {
    List<List<Integer>> transpose = new ArrayList<>();
    List<List<Integer>> rotateLeft = new ArrayList<>();
    List<List<Integer>> rotateRight = new ArrayList<>();
    int r = matrix.size();
    int c = matrix.get(0).size();

    for (int j = 0; j < c; j++) {
        List<Integer> newRow = new ArrayList<>();

        for (int i = 0; i < r; i++) {
            newRow.add(matrix.get(i).get(j));
        }

        transpose.add(newRow);
    }

    for (int i = transpose.size() - 1; i >= 0; i--) {
        rotateLeft.add(transpose.get(i));
    }

    for (List<Integer> row : transpose) {
        List<Integer> newRow = new ArrayList<>();

        for (int i = row.size() - 1; i >= 0; i--) {
            newRow.add(row.get(i));
        }

        rotateRight.add(newRow);
    }
}
`,$1=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<vector<int>> create_matrix(r, vector<int>(c, 0));
    vector<vector<int>> copy_matrix(matrix);
}
`,K1=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();

    vector<int> main_diagonal;
    vector<int> anti_diagonal;

    for (int i = 0; i < min(r, c); ++i) {
        main_diagonal.push_back(matrix[i][i]);
        anti_diagonal.push_back(matrix[i][c - i - 1]);
    }
}
`,G1=`#include <vector>

using namespace std;


void fn(vector<vector<int>>& matrix) {
    int r = matrix.size();
    int c = matrix[0].size();
    vector<vector<int>> transpose(c, vector<int>(r));
    vector<vector<int>> rotate_left(c, vector<int>(r));
    vector<vector<int>> rotate_right(c, vector<int>(r));

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }

    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_left[i][j] = transpose[c - i - 1][j];
        }
    }

    for (int i = 0; i < c; ++i) {
        for (int j = 0; j < r; ++j) {
            rotate_right[i][j] = transpose[i][r - j - 1];
        }
    }
}
`,J1=`def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  create_matrix = Array.new(r) { Array.new(c, 0) }
  copy_matrix = matrix.map(&:dup)
end
`,Y1=`def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  main_diagonal = (0...[r, c].min).map { |i| matrix[i][i] }
  anti_diagonal = (0...[r, c].min).map { |i| matrix[i][-i - 1] }
end
`,q1=`def fn(matrix)
  r = matrix.size
  c = matrix[0].size

  transpose = matrix[0].zip(*matrix[1..-1])
  rotate_left = transpose.reverse
  rotate_right = transpose.map(&:reverse)
end
`;function Q1(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Matrix"}),r.jsx("section",{id:"matrix-create-copy",children:r.jsxs(s,{title:"create / copy",children:[r.jsx(s.Tab,{code:I1,language:"python"}),r.jsx(s.Tab,{code:B1,language:"javascript"}),r.jsx(s.Tab,{code:H1,language:"java"}),r.jsx(s.Tab,{code:$1,language:"cpp"}),r.jsx(s.Tab,{code:J1,language:"ruby"})]})}),r.jsx("section",{id:"matrix-diagonals",children:r.jsxs(s,{title:"diagonals / anti-diagonals",children:[r.jsx(s.Tab,{code:D1,language:"python"}),r.jsx(s.Tab,{code:F1,language:"javascript"}),r.jsx(s.Tab,{code:W1,language:"java"}),r.jsx(s.Tab,{code:K1,language:"cpp"}),r.jsx(s.Tab,{code:Y1,language:"ruby"})]})}),r.jsx("section",{id:"matrix-rotate-transpose",children:r.jsxs(s,{title:"rotate / transpose",children:[r.jsx(s.Tab,{code:z1,language:"python"}),r.jsx(s.Tab,{code:U1,language:"javascript"}),r.jsx(s.Tab,{code:V1,language:"java"}),r.jsx(s.Tab,{code:G1,language:"cpp"}),r.jsx(s.Tab,{code:q1,language:"ruby"})]})})]})}const X1=`from typing import Any


class Array:
    def __init__(self, size: int) -> None:
        self.size = size
        self.data = [None] * size

    def __getitem__(self, index: int) -> Any:
        return self.data[index]

    def __setitem__(self, index: int, value: Any) -> None:
        self.data[index] = value

    def __len__(self) -> int:
        return len(self.data)

    def __repr__(self) -> str:
        return repr(self.data)
`,Z1=`from typing import Any


class TreeNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self, data: Any) -> None:
        if not self.root:
            self.root = TreeNode(data)
        else:
            self.insert_node(self.root, data)

    def insert_node(self, node: TreeNode | None, data: Any) -> TreeNode:
        if not node:
            return TreeNode(data)

        if not node.left:
            node.left = TreeNode(data)
        elif not node.right:
            node.right = TreeNode(data)
        else:
            node.left = self.insert_node(node.left, data)

        return node

    def __repr__(self) -> str:
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)

    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:
        if node is None:
            return ''

        result = ''
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)

        return result
`,ny=`from typing import Any


class TreeNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self) -> None:
        self.root = None

    def insert(self, data: Any) -> None:
        if not self.root:
            self.root = TreeNode(data)
        else:
            self.insert_node(self.root, data)

    def insert_node(self, node: TreeNode | None, data: Any) -> None:
        if data < node.data:
            if not node.left:
                node.left = TreeNode(data)
            else:
                self.insert_node(node.left, data)
        else:
            if not node.right:
                node.right = TreeNode(data)
            else:
                self.insert_node(node.right, data)

    def __repr__(self) -> str:
        return 'Empty tree' if not self.root else self._print_tree(self.root, '', True)

    def _print_tree(self, node: TreeNode | None, prefix: str, is_left: bool) -> str:
        if node is None:
            return ''

        result = ''
        result += self._print_tree(node.right, prefix + ('│   ' if is_left else '    '), False)
        result += prefix + ('└── ' if is_left else '┌── ') + str(node.data) + '\\n'
        result += self._print_tree(node.left, prefix + ('    ' if is_left else '│   '), True)

        return result
`,ey=`from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.next = None

    def __repr__(self) -> str:
        return f'[{self.data}]'


class LinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        curr.next = ListNode(data)

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        prev = None
        curr = self.head

        while curr:
            if curr.data == data:
                prev.next = curr.next
                return

            prev = curr
            curr = curr.next

    def reverse(self) -> None:
        prev = None
        curr = self.head

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt

        self.head = prev

    def __repr__(self) -> str:
        if not self.head:
            return 'None'

        nodes = []
        node = self.head

        while node:
            nodes.append(repr(node))
            node = node.next

        return ' -> '.join(nodes) + ' -> None'
`,ty=`from typing import Any


class ListNode:
    def __init__(self, data: Any) -> None:
        self.data = data
        self.prev = None
        self.next = None

    def __repr__(self) -> str:
        return f'[{self.data}]'


class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None

    def append(self, data: Any) -> None:
        if not self.head:
            self.head = ListNode(data)
            return

        curr = self.head

        while curr.next:
            curr = curr.next

        new_node = ListNode(data)
        curr.next = new_node
        new_node.prev = curr

    def delete(self, data: Any) -> None:
        if not self.head:
            return

        if self.head.data == data:
            self.head = self.head.next
            if self.head:
                self.head.prev = None
            return

        curr = self.head
        while curr:
            if curr.data == data:
                prev_node = curr.prev
                prev_node.next = curr.next
                if curr.next:
                    curr.next.prev = prev_node
                return
            curr = curr.next

    def reverse(self) -> None:
        curr = self.head
        prev = None

        while curr:
            nxt = curr.next
            curr.next = prev
            curr.prev = nxt
            prev = curr
            curr = nxt

        self.head = prev

    def __repr__(self) -> str:
        if not self.head:
            return 'None'

        nodes = []
        curr = self.head

        while curr:
            nodes.append(repr(curr))
            curr = curr.next

        return ' <-> '.join(nodes) + ' <-> None'
`,ry=`class Graph:
    def __init__(self) -> None:
        self.graph = {}

    def add_vertex(self, vertex: str) -> None:
        if vertex not in self.graph:
            self.graph[vertex] = []

    def add_edge(self, a: str, b: str) -> None:
        self.add_vertex(a)
        self.add_vertex(b)
        self.graph[a].append(b)
        self.graph[b].append(a)

    def get_neighbors(self, vertex: str) -> list[str]:
        return self.graph.get(vertex, [])

    def __repr__(self) -> str:
        output = ''

        for vertex, neighbors in self.graph.items():
            output += f'{vertex} - {' - '.join(neighbors)}\\n'

        return output
`,iy=`from typing import Any


class HashMap:
    def __init__(self) -> None:
        self.size = 100000
        self.bucket = [None] * self.size

    def _hash(self, key: int) -> int:
        return hash(key) % self.size

    def __setitem__(self, key: int, value: Any) -> None:
        self.bucket[self._hash(key)] = value

    def __getitem__(self, key: int) -> Any:
        return self.bucket[self._hash(key)]

    def __delitem__(self, key: int) -> None:
        self.bucket[self._hash(key)] = None
`,ay=`class TrieNode:
    def __init__(self) -> None:
        self.children = {}
        self.is_word = False


class Trie:
    def __init__(self) -> None:
        self.root = TrieNode()

    def build(self, words: list[str]) -> None:
        for word in words:
            self.insert(word)

    def insert(self, word: str) -> None:
        node = self.root

        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]

        node.is_word = True

    def search(self, word: str) -> bool:
        node = self.root

        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]

        return node.is_word

    def starts_with(self, prefix: str) -> bool:
        node = self.root

        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]

        return True

    def collect_words(self, node: TrieNode, prefix: str) -> list[str]:
        words = []

        if node.is_word:
            words.append(prefix)

        for char, child_node in node.children.items():
            words.extend(self.collect_words(child_node, prefix + char))

        return words

    def __repr__(self) -> str:
        return 'Trie:\\n' + self._print_trie(self.root)

    def _print_trie(self, node: TrieNode | None, level: int = 0, prefix: str = '') -> str:
        output = ''
        prefix_str = '    ' * level + prefix

        if not node:
            return output

        if node.is_word:
            output += prefix_str + ' ├─ ' + '(*)' + '\\n'

        for i, (char, child_node) in enumerate(node.children.items()):
            is_last = i == len(node.children) - 1
            marker = '└─ ' if is_last else '├─ '
            output += prefix_str + marker + char + '\\n'
            output += self._print_trie(child_node, level + 1, '    │' if not is_last else '     ')

        return output
`,oy=`class UnionFind:
    def __init__(self, n: int) -> None:
        self.root = list(range(n))

    def find(self, a: int) -> int:
        return a if a == self.root[a] else self.find(self.root[a])

    def union(self, a: int, b: int) -> None:
        self.root[self.find(a)] = self.find(b)

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)

    def __repr__(self) -> str:
        n = len(self.root)
        lines = []
        components = {}

        for i in range(n):
            root = self.find(i)

            if root not in components:
                components[root] = []

            components[root].append(i)

        for component in components.values():
            lines.append(' - '.join(f'({node})' for node in component))

        return '\\n'.join(lines)
`,sy=`class UnionFind:
    def __init__(self, n: int) -> None:
        self.root = list(range(n))
        self.rank = [1] * n

    def find(self, a: int) -> int:
        return a if a == self.root[a] else self.find(self.root[a])

    def union(self, a: int, b: int) -> None:
        root_a = self.find(a)
        root_b = self.find(b)

        if root_a != root_b:
            if self.rank[root_a] < self.rank[root_b]:
                self.root[root_a] = root_b
            elif self.rank[root_a] > self.rank[root_b]:
                self.root[root_b] = root_a
            else:
                self.root[root_b] = root_a
                self.rank[root_a] += 1

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)

    def __repr__(self) -> str:
        n = len(self.root)
        lines = []
        components = {}

        for i in range(n):
            root = self.find(i)

            if root not in components:
                components[root] = []

            components[root].append(i)

        for component in components.values():
            lines.append(' - '.join(f'({node})' for node in component))

        return '\\n'.join(lines)
`,ly=`class Array {
    constructor(size) {
        this.size = size
        this.data = new Array(size).fill(null)
    }

    getItem(index) {
        return this.data[index]
    }

    setItem(index, value) {
        this.data[index] = value
    }

    get length() {
        return this.data.length
    }

    toString() {
        return this.data.toString()
    }
}
`,uy=`class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data)
        } else {
            this.insertNode(this.root, data)
        }
    }

    insertNode(node, data) {
        if (!node) {
            return new TreeNode(data)
        }

        if (!node.left) {
            node.left = new TreeNode(data)
        } else if (!node.right) {
            node.right = new TreeNode(data)
        } else {
            node.left = this.insertNode(node.left, data)
        }

        return node
    }

    toString() {
        return this.root ? this.printTree(this.root, '', true) : 'Empty tree'
    }

    printTree(node, prefix, isLeft) {
        if (!node) {
            return ''
        }

        let result = ''
        result += this.printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'
        result += this.printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)

        return result
    }
}
`,cy=`class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data)
        } else {
            this._insertNode(this.root, data)
        }
    }

    _insertNode(node, data) {
        if (data < node.data) {
            if (!node.left) {
                node.left = new TreeNode(data)
            } else {
                this._insertNode(node.left, data)
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(data)
            } else {
                this._insertNode(node.right, data)
            }
        }
    }

    toString() {
        return this.root ? this._printTree(this.root, '', true) : 'Empty tree'
    }

    _printTree(node, prefix, isLeft) {
        if (!node) {
            return ''
        }

        let result = ''
        result += this._printTree(node.right, prefix + (isLeft ? '│   ' : '    '), false)
        result += prefix + (isLeft ? '└── ' : '┌── ') + node.data + '\\n'
        result += this._printTree(node.left, prefix + (isLeft ? '    ' : '│   '), true)

        return result
    }
}
`,dy=`class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }

    toString() {
        return \`[\${this.data}]\`
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        if (!this.head) {
            this.head = new ListNode(data)
            return
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        curr.next = new ListNode(data)
    }

    delete(data) {
        if (!this.head) {
            return
        }

        if (this.head.data === data) {
            this.head = this.head.next
            return
        }

        let prev = null
        let curr = this.head

        while (curr) {
            if (curr.data === data) {
                prev.next = curr.next
                return
            }

            prev = curr
            curr = curr.next
        }
    }

    reverse() {
        let prev = null
        let curr = this.head

        while (curr) {
            let nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }

        this.head = prev
    }

    toString() {
        if (!this.head) {
            return 'None'
        }

        let nodes = []
        let node = this.head

        while (node) {
            nodes.push(node.toString())
            node = node.next
        }

        return nodes.join(' -> ') + ' -> None'
    }
}
`,fy=`class ListNode {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }

    toString() {
        return \`[\${this.data}]\`
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        if (!this.head) {
            this.head = new ListNode(data)
            return
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }

        const new_node = new ListNode(data)
        curr.next = new_node
        new_node.prev = curr
    }

    delete(data) {
        if (!this.head) {
            return
        }

        if (this.head.data === data) {
            this.head = this.head.next
            if (this.head) {
                this.head.prev = null
            }
            return
        }

        let curr = this.head
        while (curr) {
            if (curr.data === data) {
                const prev_node = curr.prev
                prev_node.next = curr.next
                if (curr.next) {
                    curr.next.prev = prev_node
                }
                return
            }
            curr = curr.next
        }
    }

    reverse() {
        let curr = this.head
        let prev = null

        while (curr) {
            const nxt = curr.next
            curr.next = prev
            curr.prev = nxt
            prev = curr
            curr = nxt
        }

        this.head = prev
    }

    toString() {
        if (!this.head) {
            return 'None'
        }

        const nodes = []
        let curr = this.head

        while (curr) {
            nodes.push(curr.toString())
            curr = curr.next
        }

        return nodes.join(' <-> ') + ' <-> None'
    }
}
`,py=`class Graph {
    constructor() {
        this.graph = {}
    }

    addVertex(vertex) {
        if (!(vertex in this.graph)) {
            this.graph[vertex] = []
        }
    }

    addEdge(a, b) {
        this.addVertex(a)
        this.addVertex(b)
        this.graph[a].push(b)
        this.graph[b].push(a)
    }

    getNeighbors(vertex) {
        return this.graph[vertex] || []
    }

    toString() {
        let output = ''

        for (const [vertex, neighbors] of Object.entries(this.graph)) {
            output += \`\${vertex} - \${neighbors.join(' - ')}\\n\`
        }

        return output
    }
}
`,hy=`class HashMap {
    constructor() {
        this.size = 100000
        this.bucket = new Array(this.size).fill(null)
    }

    _hash(key) {
        return key % this.size
    }

    setItem(key, value) {
        this.bucket[this._hash(key)] = value
    }

    getItem(key) {
        return this.bucket[this._hash(key)]
    }

    deleteItem(key) {
        this.bucket[this._hash(key)] = null
    }
}
`,gy=`class TrieNode {
    constructor() {
        this.children = {}
        this.isWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    build(words) {
        for (const word of words) {
            this.insert(word)
        }
    }

    insert(word) {
        let node = this.root

        for (const char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }

        node.isWord = true
    }

    search(word) {
        let node = this.root

        for (const char of word) {
            if (!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }

        return node.isWord
    }

    startsWith(prefix) {
        let node = this.root

        for (const char of prefix) {
            if (!(char in node.children)) {
                return false
            }
            node = node.children[char]
        }

        return true
    }

    collectWords(node, prefix) {
        const words = []

        if (node.isWord) {
            words.push(prefix)
        }

        for (const [char, childNode] of Object.entries(node.children)) {
            words.push(...this.collectWords(childNode, prefix + char))
        }

        return words
    }

    toString() {
        return 'Trie:\\n' + this._printTrie(this.root)
    }

    _printTrie(node, level = 0, prefix = '') {
        let output = ''
        const prefixStr = '    '.repeat(level) + prefix

        if (!node) {
            return output
        }

        if (node.isWord) {
            output += prefixStr + ' ├─ ' + '(*)' + '\\n'
        }

        const children = Object.entries(node.children)
        children.forEach(([char, childNode], i) => {
            const isLast = i === children.length - 1
            const marker = isLast ? '└─ ' : '├─ '
            output += prefixStr + marker + char + '\\n'
            output += this._printTrie(childNode, level + 1, isLast ? '     ' : '    │')
        })

        return output
    }
}
`,my=`class UnionFind {
    constructor(n) {
        this.root = [...Array(n).keys()]
    }

    find(a) {
        return a === this.root[a] ? a : this.find(this.root[a])
    }

    union(a, b) {
        this.root[this.find(a)] = this.find(b)
    }

    connected(a, b) {
        return this.find(a) === this.find(b)
    }

    toString() {
        const n = this.root.length
        const lines = []
        const components = {}

        for (let i = 0; i < n; i++) {
            const root = this.find(i)

            if (!(root in components)) {
                components[root] = []
            }

            components[root].push(i)
        }

        for (const component of Object.values(components)) {
            lines.push(\`(\${component.join(' - ')})\`)
        }

        return lines.join('\\n')
    }
}
`,vy=`class UnionFind {
    constructor(n) {
        this.root = [...Array(n).keys()]
        this.rank = Array(n).fill(1)
    }

    find(a) {
        return a === this.root[a] ? a : this.find(this.root[a])
    }

    union(a, b) {
        const rootA = this.find(a)
        const rootB = this.find(b)

        if (rootA !== rootB) {
            if (this.rank[rootA] < this.rank[rootB]) {
                this.root[rootA] = rootB
            } else if (this.rank[rootA] > this.rank[rootB]) {
                this.root[rootB] = rootA
            } else {
                this.root[rootB] = rootA
                this.rank[rootA]++
            }
        }
    }

    connected(a, b) {
        return this.find(a) === this.find(b)
    }

    toString() {
        const n = this.root.length
        const lines = []
        const components = {}

        for (let i = 0; i < n; i++) {
            const root = this.find(i)

            if (!(root in components)) {
                components[root] = []
            }

            components[root].push(i)
        }

        for (const component of Object.values(components)) {
            lines.push(component.map(node => \`(\${node})\`).join(' - '))
        }

        return lines.join('\\n')
    }
}
`,yy=`public class Array<T> {
    private int size;
    private T[] data;

    @SuppressWarnings("unchecked")
    public Array(int size) {
        this.size = size;
        this.data = (T[]) new Object[size];
    }

    public T get(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        return data[index];
    }

    public void set(int index, T value) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        data[index] = value;
    }

    public int size() {
        return size;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("[");

        for (int i = 0; i < size; i++) {
            sb.append(data[i]);
            if (i < size - 1) {
                sb.append(", ");
            }
        }

        sb.append("]");
        return sb.toString();
    }
}
`,xy=`public class TreeNode<T> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class BinaryTree<T> {
    TreeNode<T> root;

    public BinaryTree() {
        root = null;
    }

    public void insert(T data) {
        root = insertNode(root, data);
    }

    private TreeNode<T> insertNode(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (node.left == null) {
            node.left = new TreeNode<>(data);
        } else if (node.right == null) {
            node.right = new TreeNode<>(data);
        } else {
            node.left = insertNode(node.left, data);
        }

        return node;
    }

    @Override
    public String toString() {
        return root == null ? "Empty tree" : printTree(root, "", true);
    }

    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {
        if (node == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));

        return sb.toString();
    }
}
`,_y=`public class TreeNode<T extends Comparable<T>> {
    T data;
    TreeNode<T> left;
    TreeNode<T> right;

    public TreeNode(T data) {
        this.data = data;
        left = null;
        right = null;
    }
}

public class BinarySearchTree<T extends Comparable<T>> {
    TreeNode<T> root;

    public BinarySearchTree() {
        root = null;
    }

    public void insert(T data) {
        root = insertNode(root, data);
    }

    private TreeNode<T> insertNode(TreeNode<T> node, T data) {
        if (node == null) {
            return new TreeNode<>(data);
        }

        if (data.compareTo(node.data) < 0) {
            node.left = insertNode(node.left, data);
        } else if (data.compareTo(node.data) > 0) {
            node.right = insertNode(node.right, data);
        }

        return node;
    }

    @Override
    public String toString() {
        return root == null ? "Empty tree" : printTree(root, "", true);
    }

    private String printTree(TreeNode<T> node, String prefix, boolean isLeft) {
        if (node == null) {
            return "";
        }

        StringBuilder sb = new StringBuilder();
        sb.append(printTree(node.right, prefix + (isLeft ? "│   " : "    "), false));
        sb.append(prefix).append(isLeft ? "└── " : "┌── ").append(node.data).append("\\n");
        sb.append(printTree(node.left, prefix + (isLeft ? "    " : "│   "), true));

        return sb.toString();
    }
}
`,by=`class ListNode {
    public int data;
    public ListNode next;

    public ListNode(int data) {
        this.data = data;
        this.next = null;
    }

    @Override
    public String toString() {
        return "[" + data + "]";
    }
}

class LinkedList {
    private ListNode head;

    public LinkedList() {
        this.head = null;
    }

    public void append(int data) {
        if (head == null) {
            head = new ListNode(data);
            return;
        }

        ListNode current = head;

        while (current.next != null) {
            current = current.next;
        }

        current.next = new ListNode(data);
    }

    public void delete(int data) {
        if (head == null) {
            return;
        }

        if (head.data == data) {
            head = head.next;
            return;
        }

        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            if (current.data == data) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    public void reverse() {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        head = prev;
    }

    @Override
    public String toString() {
        if (head == null) {
            return "None";
        }

        StringBuilder result = new StringBuilder();
        ListNode current = head;

        while (current != null) {
            result.append(current.toString()).append(" -> ");
            current = current.next;
        }

        result.append("None");
        return result.toString();
    }
}
`,wy=`public class ListNode<T> {
    T data;
    ListNode<T> prev;
    ListNode<T> next;

    public ListNode(T data) {
        this.data = data;
        prev = null;
        next = null;
    }

    @Override
    public String toString() {
        return "[" + data + "]";
    }
}

public class DoublyLinkedList<T> {
    ListNode<T> head;

    public DoublyLinkedList() {
        head = null;
    }

    public void append(T data) {
        if (head == null) {
            head = new ListNode<>(data);
            return;
        }

        ListNode<T> curr = head;

        while (curr.next != null) {
            curr = curr.next;
        }

        ListNode<T> newNode = new ListNode<>(data);
        curr.next = newNode;
        newNode.prev = curr;
    }

    public void delete(T data) {
        if (head == null) {
            return;
        }

        if (head.data.equals(data)) {
            head = head.next;
            if (head != null) {
                head.prev = null;
            }
            return;
        }

        ListNode<T> curr = head;

        while (curr != null) {
            if (curr.data.equals(data)) {
                ListNode<T> prevNode = curr.prev;
                prevNode.next = curr.next;
                if (curr.next != null) {
                    curr.next.prev = prevNode;
                }
                return;
            }
            curr = curr.next;
        }
    }

    public void reverse() {
        ListNode<T> curr = head;
        ListNode<T> prev = null;

        while (curr != null) {
            ListNode<T> nextNode = curr.next;
            curr.next = prev;
            curr.prev = nextNode;
            prev = curr;
            curr = nextNode;
        }

        head = prev;
    }

    @Override
    public String toString() {
        if (head == null) {
            return "None";
        }

        StringBuilder sb = new StringBuilder();
        ListNode<T> curr = head;

        while (curr != null) {
            sb.append(curr.toString()).append(" <-> ");
            curr = curr.next;
        }

        sb.append("None");
        return sb.toString();
    }
}
`,Sy=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class Graph {
    Map<String, List<String>> graph;

    public Graph() {
        graph = new HashMap<>();
    }

    public void addVertex(String vertex) {
        if (!graph.containsKey(vertex)) {
            graph.put(vertex, new ArrayList<>());
        }
    }

    public void addEdge(String a, String b) {
        addVertex(a);
        addVertex(b);
        graph.get(a).add(b);
        graph.get(b).add(a);
    }

    public List<String> getNeighbors(String vertex) {
        return graph.getOrDefault(vertex, new ArrayList<>());
    }

    @Override
    public String toString() {
        StringBuilder output = new StringBuilder();

        for (Map.Entry<String, List<String>> entry : graph.entrySet()) {
            output.append(entry.getKey()).append(" - ").append(String.join(" - ", entry.getValue())).append("\\n");
        }

        return output.toString();
    }
}
`,Ty=`public class HashMap {
    private int size;
    private Object[] bucket;

    public HashMap() {
        size = 100000;
        bucket = new Object[size];
    }

    private int hash(int key) {
        return key % size;
    }

    public void put(int key, Object value) {
        bucket[hash(key)] = value;
    }

    public Object get(int key) {
        return bucket[hash(key)];
    }

    public void remove(int key) {
        bucket[hash(key)] = null;
    }
}
`,jy=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


class TrieNode {
    Map<Character, TrieNode> children;
    boolean isWord;

    public TrieNode() {
        this.children = new HashMap<>();
        this.isWord = false;
    }
}

class Trie {
    TrieNode root;

    public Trie() {
        this.root = new TrieNode();
    }

    public void build(String[] words) {
        for (String word : words) {
            insert(word);
        }
    }

    public void insert(String word) {
        TrieNode node = root;

        for (char ch : word.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                node.children.put(ch, new TrieNode());
            }
            node = node.children.get(ch);
        }

        node.isWord = true;
    }

    public boolean search(String word) {
        TrieNode node = root;

        for (char ch : word.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                return false;
            }
            node = node.children.get(ch);
        }

        return node.isWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode node = root;

        for (char ch : prefix.toCharArray()) {
            if (!node.children.containsKey(ch)) {
                return false;
            }
            node = node.children.get(ch);
        }

        return true;
    }

    public List<String> collectWords(TrieNode node, String prefix) {
        List<String> words = new ArrayList<>();

        if (node.isWord) {
            words.add(prefix);
        }

        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            words.addAll(collectWords(entry.getValue(), prefix + entry.getKey()));
        }

        return words;
    }

    @Override
    public String toString() {
        return "Trie:\\n" + printTrie(root, 0, null);
    }

    private String printTrie(TrieNode node, int level, String prefix) {
        StringBuilder output = new StringBuilder();
        String prefixStr = "\\t".repeat(level) + prefix;

        if (node == null) {
            return output.toString();
        }

        if (node.isWord) {
            output.append(prefixStr).append(" ├─ ").append("(*)").append("\\n");
        }

        int i = 0;

        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            boolean isLast = i == node.children.size() - 1;
            String marker = isLast ? "└─ " : "├─ ";
            output.append(prefixStr).append(marker).append(entry.getKey()).append("\\n");
            output.append(printTrie(entry.getValue(), level + 1, isLast ? "    │" : "     "));
            i++;
        }

        return output.toString();
    }
}
`,ky=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class UnionFind {
    private int[] root;

    public UnionFind(int n) {
        this.root = new int[n];
        for (int i = 0; i < n; i++) {
            this.root[i] = i;
        }
    }

    public int find(int a) {
        if (a == root[a]) {
            return a;
        }
        return root[a] = find(root[a]);
    }

    public void union(int a, int b) {
        root[find(a)] = find(b);
    }

    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    @Override
    public String toString() {
        int n = root.length;
        List<List<Integer>> components = new ArrayList<>();
        Map<Integer, List<Integer>> componentMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int root = find(i);

            if (!componentMap.containsKey(root)) {
                componentMap.put(root, new ArrayList<>());
            }

            componentMap.get(root).add(i);
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> component : componentMap.values()) {
            sb.append(" - ").append(component);
        }

        return sb.toString();
    }
}
`,Ey=`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


class UnionFind {
    int[] root;
    int[] rank;

    public UnionFind(int n) {
        this.root = new int[n];
        this.rank = new int[n];

        for (int i = 0; i < n; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }

    public int find(int a) {
        if (a == root[a]) {
            return a;
        }
        return root[a] = find(root[a]);
    }

    public void union(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) {
            if (rank[rootA] < rank[rootB]) {
                root[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                root[rootB] = rootA;
            } else {
                root[rootB] = rootA;
                rank[rootA]++;
            }
        }
    }

    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    @Override
    public String toString() {
        int n = root.length;
        Map<Integer, List<Integer>> componentMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            int root = find(i);

            if (!componentMap.containsKey(root)) {
                componentMap.put(root, new ArrayList<>());
            }

            componentMap.get(root).add(i);
        }

        StringBuilder sb = new StringBuilder();

        for (List<Integer> component : componentMap.values()) {
            sb.append(" - ").append(component);
        }

        return sb.toString();
    }
}
`,Ny=`#include <iostream>
#include <stdexcept>

using namespace std;


template<typename T>
class Array {
private:
    T* data;
    size_t size;

public:
    Array(size_t size) : size(size) {
        data = new T[size];
    }

    ~Array() {
        delete[] data;
    }

    T& operator[](size_t index) {
        if (index >= size) {
            throw std::out_of_range("Index out of range");
        }
        return data[index];
    }

    const T& operator[](size_t index) const {
        if (index >= size) {
            throw out_of_range("Index out of range");
        }
        return data[index];
    }

    size_t len() const {
        return size;
    }

    friend ostream& operator<<(ostream& os, const Array<T>& arr) {
        os << "[";
        for (size_t i = 0; i < arr.size; ++i) {
            os << arr.data[i];
            if (i < arr.size - 1) {
                os << ", ";
            }
        }
        os << "]";
        return os;
    }
};
`,Oy=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class BinaryTree {
private:
    shared_ptr<TreeNode<T>> root;

public:
    BinaryTree() : root(nullptr) {}

    void insert(const T& data) {
        root = insertNode(root, data);
    }

    shared_ptr<TreeNode<T>> insertNode(shared_ptr<TreeNode<T>> node, const T& data) {
        if (!node) {
            return make_shared<TreeNode<T>>(data);
        }

        if (!node->left) {
            node->left = make_shared<TreeNode<T>>(data);
        } else if (!node->right) {
            node->right = make_shared<TreeNode<T>>(data);
        } else {
            node->left = insertNode(node->left, data);
        }

        return node;
    }

    string printTree() const {
        return root ? printNode(root, "", true) : "Empty tree";
    }

    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {
        string result;
        if (node) {
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);
        }
        return result;
    }
};
`,Ay=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class BinarySearchTree {
private:
    shared_ptr<TreeNode<T>> root;

public:
    BinarySearchTree() : root(nullptr) {}

    void insert(const T& data) {
        if (!root) {
            root = make_shared<TreeNode<T>>(data);
        } else {
            insertNode(root, data);
        }
    }

    void insertNode(shared_ptr<TreeNode<T>>& node, const T& data) {
        if (data < node->data) {
            if (!node->left) {
                node->left = make_shared<TreeNode<T>>(data);
            } else {
                insertNode(node->left, data);
            }
        } else {
            if (!node->right) {
                node->right = make_shared<TreeNode<T>>(data);
            } else {
                insertNode(node->right, data);
            }
        }
    }

    string printTree() const {
        return root ? printNode(root, "", true) : "Empty tree";
    }

    string printNode(const shared_ptr<TreeNode<T>>& node, const string& prefix, bool isLeft) const {
        string result;
        if (node) {
            result += printNode(node->right, prefix + (isLeft ? "│   " : "    "), false);
            result += prefix + (isLeft ? "└── " : "┌── ") + to_string(node->data) + "\\n";
            result += printNode(node->left, prefix + (isLeft ? "    " : "│   "), true);
        }
        return result;
    }
};
`,Cy=`#include <iostream>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    ListNode* next;

    ListNode(const T& data) : data(data), next(nullptr) {}
};

template<typename T>
class LinkedList {
private:
    ListNode<T>* head;

public:
    LinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = new ListNode<T>(data);
            return;
        }

        ListNode<T>* curr = head;

        while (curr->next) {
            curr = curr->next;
        }

        curr->next = new ListNode<T>(data);
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            ListNode<T>* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            if (curr->data == data) {
                prev->next = curr->next;
                delete curr;
                return;
            }

            prev = curr;
            curr = curr->next;
        }
    }

    void reverse() {
        ListNode<T>* prev = nullptr;
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }

        head = prev;
    }

    ~LinkedList() {
        ListNode<T>* curr = head;

        while (curr) {
            ListNode<T>* temp = curr;
            curr = curr->next;
            delete temp;
        }
    }

    void display() {
        ListNode<T>* curr = head;

        while (curr) {
            cout << "[" << curr->data << "]";
            if (curr->next) {
                cout << " -> ";
            }
            curr = curr->next;
        }

        cout << " -> None" << endl;
    }
};
`,Ly=`#include <iostream>
#include <memory>
#include <string>

using namespace std;


template<typename T>
class ListNode {
public:
    T data;
    shared_ptr<ListNode<T>> prev;
    shared_ptr<ListNode<T>> next;

    ListNode(const T& data) : data(data), prev(nullptr), next(nullptr) {}
};

template<typename T>
class DoublyLinkedList {
private:
    shared_ptr<ListNode<T>> head;

public:
    DoublyLinkedList() : head(nullptr) {}

    void append(const T& data) {
        if (!head) {
            head = make_shared<ListNode<T>>(data);
            return;
        }

        auto curr = head;

        while (curr->next) {
            curr = curr->next;
        }

        auto new_node = make_shared<ListNode<T>>(data);
        curr->next = new_node;
        new_node->prev = curr;
    }

    void deleteNode(const T& data) {
        if (!head) {
            return;
        }

        if (head->data == data) {
            head = head->next;
            if (head) {
                head->prev = nullptr;
            }
            return;
        }

        auto curr = head;

        while (curr) {
            if (curr->data == data) {
                auto prev_node = curr->prev;
                prev_node->next = curr->next;

                if (curr->next) {
                    curr->next->prev = prev_node;
                }

                return;
            }
            curr = curr->next;
        }
    }

    void reverse() {
        auto curr = head;
        shared_ptr<ListNode<T>> prev = nullptr;

        while (curr) {
            auto next_node = curr->next;
            curr->next = prev;
            curr->prev = next_node;
            prev = curr;
            curr = next_node;
        }

        head = prev;
    }

    string toString() const {
        if (!head) {
            return "None";
        }

        string result;
        auto curr = head;

        while (curr) {
            result += "[" + to_string(curr->data) + "]";

            if (curr->next) {
                result += " <-> ";
            }

            curr = curr->next;
        }

        result += " <-> None";
        return result;
    }
};
`,Ry=`#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

using namespace std;


class Graph {
private:
    unordered_map<string, vector<string>> graph;

public:
    Graph() {}

    void addVertex(const string& vertex) {
        if (graph.find(vertex) == graph.end()) {
            graph[vertex] = {};
        }
    }

    void addEdge(const string& a, const string& b) {
        addVertex(a);
        addVertex(b);
        graph[a].push_back(b);
        graph[b].push_back(a);
    }

    vector<string> getNeighbors(const string& vertex) {
        return graph[vertex];
    }

    string toString() {
        string output;

        for (const auto& [vertex, neighbors] : graph) {
            output += vertex + " - ";

            for (const auto& neighbor : neighbors) {
                output += neighbor + " - ";
            }

            output.pop_back();
            output.pop_back();
            output += "\\n";
        }

        return output;
    }
};
`,Py=`#include <iostream>
#include <vector>

using namespace std;


template<typename KeyType, typename ValueType>
class HashMap {
private:
    const size_t size = 100000;
    vector<pair<KeyType, ValueType>> buckets[size];

    size_t hash(const KeyType& key) {
        return hash<KeyType>{}(key) % size;
    }

public:
    HashMap() {}

    void setItem(const KeyType& key, const ValueType& value) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }

        buckets[index].emplace_back(key, value);
    }

    ValueType& getItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto& pair : buckets[index]) {
            if (pair.first == key) {
                return pair.second;
            }
        }

        throw out_of_range("Key not found");
    }

    void delItem(const KeyType& key) {
        size_t index = hash(key);

        for (auto it = buckets[index].begin(); it != buckets[index].end(); ++it) {
            if (it->first == key) {
                buckets[index].erase(it);
                return;
            }
        }
    }
};
`,My=`#include <iostream>
#include <unordered_map>
#include <vector>
#include <memory>

using namespace std;


class TrieNode {
public:
    unordered_map<char, shared_ptr<TrieNode>> children;
    bool is_word;

    TrieNode() : is_word(false) {}
};

class Trie {
private:
    shared_ptr<TrieNode> root;

public:
    Trie() : root(make_shared<TrieNode>()) {}

    void build(const vector<string>& words) {
        for (const auto& word : words) {
            insert(word);
        }
    }

    void insert(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                node->children[ch] = make_shared<TrieNode>();
            }
            node = node->children[ch];
        }

        node->is_word = true;
    }

    bool search(const string& word) {
        shared_ptr<TrieNode> node = root;

        for (char ch : word) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return node->is_word;
    }

    bool startsWith(const string& prefix) {
        shared_ptr<TrieNode> node = root;

        for (char ch : prefix) {
            if (node->children.find(ch) == node->children.end()) {
                return false;
            }
            node = node->children[ch];
        }

        return true;
    }

    vector<string> collectWords(shared_ptr<TrieNode> node, const string& prefix) {
        vector<string> words;

        if (node->is_word) {
            words.push_back(prefix);
        }

        for (const auto& [ch, childNode] : node->children) {
            auto childWords = collectWords(childNode, prefix + ch);
            words.insert(words.end(), childWords.begin(), childWords.end());
        }

        return words;
    }

    vector<string> collectWords() {
        return collectWords(root, "");
    }
};
`,Iy=`#include <iostream>
#include <string>
#include <vector>

using namespace std;


class UnionFind {
private:
    vector<int> root;

public:
    UnionFind(int n) : root(n) {
        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }
    }

    int find(int a) {
        return a == root[a] ? a : root[a] = find(root[a]);
    }

    void unionSets(int a, int b) {
        root[find(a)] = find(b);
    }

    bool connected(int a, int b) {
        return find(a) == find(b);
    }

    string toString() {
        int n = root.size();
        vector<vector<int>> components(n);

        for (int i = 0; i < n; ++i) {
            components[find(i)].push_back(i);
        }

        string result;

        for (const auto& component : components) {
            if (!component.empty()) {
                for (int node : component) {
                    result += "(" + to_string(node) + ") - ";
                }
                result.pop_back();
                result.pop_back();
                result += "\\n";
            }
        }

        return result;
    }
};
`,Dy=`#include <iostream>
#include <string>
#include <vector>

using namespace std;


class UnionFind {
private:
    vector<int> root;
    vector<int> rank;

public:
    UnionFind(int n) : root(n), rank(n, 1) {
        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }
    }

    int find(int a) {
        return a == root[a] ? a : root[a] = find(root[a]);
    }

    void unionSets(int a, int b) {
        int rootA = find(a);
        int rootB = find(b);

        if (rootA != rootB) {
            if (rank[rootA] < rank[rootB]) {
                root[rootA] = rootB;
            } else if (rank[rootA] > rank[rootB]) {
                root[rootB] = rootA;
            } else {
                root[rootB] = rootA;
                rank[rootA]++;
            }
        }
    }

    bool connected(int a, int b) {
        return find(a) == find(b);
    }

    string toString() {
        int n = root.size();
        vector<vector<int>> components(n);

        for (int i = 0; i < n; ++i) {
            components[find(i)].push_back(i);
        }

        string result;

        for (const auto& component : components) {
            if (!component.empty()) {
                for (int node : component) {
                    result += "(" + to_string(node) + ") - ";
                }
                result.pop_back();
                result.pop_back();
                result += "\\n";
            }
        }

        return result;
    }
};
`,zy=`
class Array
  def initialize(size)
    @size = size
    @data = Array.new(size)
  end

  def [](index)
    @data[index]
  end

  def []=(index, value)
    @data[index] = value
  end

  def length
    @data.length
  end

  def to_s
    @data.to_s
  end
end
`,By=`class TreeNode
  attr_accessor :data, :left, :right

  def initialize(data)
    @data   = data
    @left   = nil
    @right  = nil
  end
end

class BinaryTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(data)
    if @root.nil?
      @root = TreeNode.new(data)
    else
      insert_node(@root, data)
    end
  end

  def insert_node(node, data)
    return TreeNode.new(data) if node.nil?

    if node.left.nil?
      node.left = TreeNode.new(data)
    elsif node.right.nil?
      node.right = TreeNode.new(data)
    else
      node.left = insert_node(node.left, data)
    end

    node
  end

  def to_s
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)
  end

  private

  def print_tree(node, prefix, is_left)
    return '' if node.nil?

    result = ''
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)

    result
  end
end
`,Fy=`class TreeNode
  attr_accessor :data, :left, :right

  def initialize(data)
    @data   = data
    @left   = nil
    @right  = nil
  end
end

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(data)
    if @root.nil?
      @root = TreeNode.new(data)
    else
      insert_node(@root, data)
    end
  end

  def insert_node(node, data)
    if data < node.data
      if node.left.nil?
        node.left = TreeNode.new(data)
      else
        insert_node(node.left, data)
      end
    else
      if node.right.nil?
        node.right = TreeNode.new(data)
      else
        insert_node(node.right, data)
      end
    end
  end

  def to_s
    @root.nil? ? 'Empty tree' : print_tree(@root, '', true)
  end

  private

  def print_tree(node, prefix, is_left)
    return '' if node.nil?

    result = ''
    result += print_tree(node.right, prefix + (is_left ? '│   ' : '    '), false)
    result += prefix + (is_left ? '└── ' : '┌── ') + node.data.to_s + "\\n"
    result += print_tree(node.left, prefix + (is_left ? '    ' : '│   '), true)

    result
  end
end
`,Uy=`class ListNode
  attr_accessor :data, :next

  def initialize(data)
    @data = data
    @next = nil
  end

  def to_s
    "[#{@data}]"
  end
end

class LinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def append(data)
    if @head.nil?
      @head = ListNode.new(data)
      return
    end

    curr = @head
    curr = curr.next while curr.next
    curr.next = ListNode.new(data)
  end

  def delete(data)
    return if @head.nil?

    if @head.data == data
      @head = @head.next
      return
    end

    prev = nil
    curr = @head

    while curr
      if curr.data == data
        prev.next = curr.next
        return
      end
      prev = curr
      curr = curr.next
    end
  end

  def reverse
    prev = nil
    curr = @head

    while curr
      nxt = curr.next
      curr.next = prev
      prev = curr
      curr = nxt
    end

    @head = prev
  end

  def to_s
    return 'nil' if @head.nil?

    nodes = []
    curr = @head
    while curr
      nodes << curr.to_s
      curr = curr.next
    end

    nodes.join(' -> ') + ' -> nil'
  end
end
`,Hy=`class ListNode
  attr_accessor :data, :prev, :next

  def initialize(data)
    @data = data
    @prev = nil
    @next = nil
  end

  def to_s
    "[#{@data}]"
  end
end

class DoublyLinkedList
  attr_accessor :head

  def initialize
    @head = nil
  end

  def append(data)
    if @head.nil?
      @head = ListNode.new(data)
      return
    end

    curr = @head
    curr = curr.next while curr.next

    new_node = ListNode.new(data)
    curr.next = new_node
    new_node.prev = curr
  end

  def delete(data)
    return if @head.nil?

    if @head.data == data
      @head = @head.next
      @head.prev = nil if @head
      return
    end

    curr = @head
    while curr
      if curr.data == data
        prev_node = curr.prev
        prev_node.next = curr.next
        curr.next.prev = prev_node if curr.next
        return
      end
      curr = curr.next
    end
  end

  def reverse
    curr = @head
    prev = nil

    while curr
      nxt = curr.next
      curr.next = prev
      curr.prev = nxt
      prev = curr
      curr = nxt
    end

    @head = prev
  end

  def to_s
    return 'None' if @head.nil?

    nodes = []
    curr = @head
    while curr
      nodes << curr.to_s
      curr = curr.next
    end

    nodes.join(' <-> ') + ' <-> None'
  end
end
`,Wy=`class Graph
  attr_accessor :graph

  def initialize
    @graph = {}
  end

  def add_vertex(vertex)
    @graph[vertex] ||= []
  end

  def add_edge(a, b)
    add_vertex(a)
    add_vertex(b)
    @graph[a] << b
    @graph[b] << a
  end

  def get_neighbors(vertex)
    @graph.fetch(vertex, [])
  end

  def to_s
    output = ''
    @graph.each do |vertex, neighbors|
      output += "#{vertex} - #{neighbors.join(' - ')}\\n"
    end
    output
  end
end
`,Vy=`class HashMap
  def initialize
    @size   = 100_000
    @bucket = Array.new(@size)
  end

  def hash_key(key)
    key.hash % @size
  end

  def []=(key, value)
    @bucket[hash_key(key)] = value
  end

  def [](key)
    @bucket[hash_key(key)]
  end

  def delete(key)
    @bucket[hash_key(key)] = nil
  end
end
`,$y=`class TrieNode
  attr_accessor :children, :is_word

  def initialize
    @children = {}
    @is_word  = false
  end
end

class Trie
  attr_accessor :root

  def initialize
    @root = TrieNode.new
  end

  def build(words)
    words.each { |word| insert(word) }
  end

  def insert(word)
    node = @root
    word.each_char do |char|
      node.children[char] ||= TrieNode.new
      node = node.children[char]
    end
    node.is_word = true
  end

  def search(word)
    node = @root
    word.each_char do |char|
      return false unless node.children.key?(char)
      node = node.children[char]
    end
    node.is_word
  end

  def starts_with(prefix)
    node = @root
    prefix.each_char do |char|
      return false unless node.children.key?(char)
      node = node.children[char]
    end
    true
  end

  def collect_words(node = @root, prefix = '')
    words = []
    words << prefix if node.is_word
    node.children.each do |char, child_node|
      words.concat(collect_words(child_node, prefix + char))
    end
    words
  end

  def to_s
    "Trie:\\n" + print_trie(@root)
  end

  private

  def print_trie(node, level = 0, prefix = '')
    return '' unless node

    output = ''
    prefix_str = '    ' * level + prefix
    output += prefix_str + ' ├─ (*)' + "\\n" if node.is_word

    node.children.each_with_index do |(char, child_node), i|
      is_last = i == node.children.size - 1
      marker = is_last ? '└─ ' : '├─ '
      output += prefix_str + marker + char + "\\n"
      new_prefix = is_last ? '     ' : '    │'
      output += print_trie(child_node, level + 1, new_prefix)
    end

    output
  end
end
`,Ky=`class UnionFind
  attr_accessor :root

  def initialize(n)
    @root = Array.new(n) { |i| i }
  end

  def find(a)
    return a if a == @root[a]

    @root[a] = find(@root[a])
  end

  def union(a, b)
    @root[find(a)] = find(b)
  end

  def connected(a, b)
    find(a) == find(b)
  end

  def to_s
    n = @root.size
    components = Hash.new { |h, k| h[k] = [] }

    (0...n).each do |i|
      root_i = find(i)
      components[root_i] << i
    end

    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")
  end
end
`,Gy=`class UnionFind
  attr_accessor :root, :rank

  def initialize(n)
    @root = Array.new(n) { |i| i }
    @rank = Array.new(n, 1)
  end

  def find(a)
    return a if a == @root[a]

    @root[a] = find(@root[a])
  end

  def union(a, b)
    root_a = find(a)
    root_b = find(b)

    return if root_a == root_b

    if @rank[root_a] < @rank[root_b]
      @root[root_a] = root_b
    elsif @rank[root_a] > @rank[root_b]
      @root[root_b] = root_a
    else
      @root[root_b] = root_a
      @rank[root_a] += 1
    end
  end

  def connected(a, b)
    find(a) == find(b)
  end

  def to_s
    n = @root.size
    components = Hash.new { |h, k| h[k] = [] }

    (0...n).each do |i|
      root_i = find(i)
      components[root_i] << i
    end

    components.values.map { |comp| comp.map { |node| "(#{node})" }.join(' - ') }.join("\\n")
  end
end
`;function Jy(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Data Structures"}),r.jsx("section",{id:"ds-array",children:r.jsxs(s,{title:"array",children:[r.jsx(s.Tab,{code:X1,language:"python"}),r.jsx(s.Tab,{code:ly,language:"javascript"}),r.jsx(s.Tab,{code:yy,language:"java"}),r.jsx(s.Tab,{code:Ny,language:"cpp"}),r.jsx(s.Tab,{code:zy,language:"ruby"})]})}),r.jsx("section",{id:"ds-hash-map",children:r.jsxs(s,{title:"hash map",children:[r.jsx(s.Tab,{code:iy,language:"python"}),r.jsx(s.Tab,{code:hy,language:"javascript"}),r.jsx(s.Tab,{code:Ty,language:"java"}),r.jsx(s.Tab,{code:Py,language:"cpp"}),r.jsx(s.Tab,{code:Vy,language:"ruby"})]})}),r.jsx("section",{id:"ds-linked-list",children:r.jsxs(s,{title:"linked list",children:[r.jsx(s.Tab,{code:ey,language:"python"}),r.jsx(s.Tab,{code:dy,language:"javascript"}),r.jsx(s.Tab,{code:by,language:"java"}),r.jsx(s.Tab,{code:Cy,language:"cpp"}),r.jsx(s.Tab,{code:Uy,language:"ruby"})]})}),r.jsx("section",{id:"ds-doubly-linked-list",children:r.jsxs(s,{title:"doubly linked list",children:[r.jsx(s.Tab,{code:ty,language:"python"}),r.jsx(s.Tab,{code:fy,language:"javascript"}),r.jsx(s.Tab,{code:wy,language:"java"}),r.jsx(s.Tab,{code:Ly,language:"cpp"}),r.jsx(s.Tab,{code:Hy,language:"ruby"})]})}),r.jsx("section",{id:"ds-binary-tree",children:r.jsxs(s,{title:"binary tree",children:[r.jsx(s.Tab,{code:Z1,language:"python"}),r.jsx(s.Tab,{code:uy,language:"javascript"}),r.jsx(s.Tab,{code:xy,language:"java"}),r.jsx(s.Tab,{code:Oy,language:"cpp"}),r.jsx(s.Tab,{code:By,language:"ruby"})]})}),r.jsx("section",{id:"ds-binary-search-tree",children:r.jsxs(s,{title:"binary search tree",children:[r.jsx(s.Tab,{code:ny,language:"python"}),r.jsx(s.Tab,{code:cy,language:"javascript"}),r.jsx(s.Tab,{code:_y,language:"java"}),r.jsx(s.Tab,{code:Ay,language:"cpp"}),r.jsx(s.Tab,{code:Fy,language:"ruby"})]})}),r.jsx("section",{id:"ds-graph",children:r.jsxs(s,{title:"graph",children:[r.jsx(s.Tab,{code:ry,language:"python"}),r.jsx(s.Tab,{code:py,language:"javascript"}),r.jsx(s.Tab,{code:Sy,language:"java"}),r.jsx(s.Tab,{code:Ry,language:"cpp"}),r.jsx(s.Tab,{code:Wy,language:"ruby"})]})}),r.jsx("section",{id:"ds-union-find",children:r.jsxs(s,{title:"union find",children:[r.jsx(s.Tab,{code:oy,language:"python"}),r.jsx(s.Tab,{code:my,language:"javascript"}),r.jsx(s.Tab,{code:ky,language:"java"}),r.jsx(s.Tab,{code:Iy,language:"cpp"}),r.jsx(s.Tab,{code:Ky,language:"ruby"})]})}),r.jsx("section",{id:"ds-union-find-optimized",children:r.jsxs(s,{title:"union find optimized",children:[r.jsx(s.Tab,{code:sy,language:"python"}),r.jsx(s.Tab,{code:vy,language:"javascript"}),r.jsx(s.Tab,{code:Ey,language:"java"}),r.jsx(s.Tab,{code:Dy,language:"cpp"}),r.jsx(s.Tab,{code:Gy,language:"ruby"})]})}),r.jsx("section",{id:"ds-trie",children:r.jsxs(s,{title:"trie",children:[r.jsx(s.Tab,{code:ay,language:"python"}),r.jsx(s.Tab,{code:gy,language:"javascript"}),r.jsx(s.Tab,{code:jy,language:"java"}),r.jsx(s.Tab,{code:My,language:"cpp"}),r.jsx(s.Tab,{code:$y,language:"ruby"})]})})]})}const Yy=`import random


def bogo_sort(arr: list) -> None:
    target = sorted(arr)

    while arr != target:
        random.shuffle(arr)
`,qy=`def bubble_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        swapped = False

        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        if not swapped:
            break
`,Qy=`def bucket_sort(arr: list) -> list:
    num_buckets = 10
    min_num = min(arr)
    max_num = max(arr)
    bucket_size = (max_num - min_num) / num_buckets
    buckets = [[] for _ in range(num_buckets)]

    for num in arr:
        index = min(int((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].append(num)

    return [num for bucket in buckets for num in sorted(bucket)]
`,Xy=`def counting_sort(arr: list) -> list:
    max_num = max(arr)
    min_num = min(arr)
    count_range = max_num - min_num + 1
    count = [0] * count_range
    output = [0] * len(arr)

    for num in arr:
        count[num - min_num] += 1

    for i in range(1, count_range):
        count[i] += count[i - 1]

    for num in arr[::-1]:
        output[count[num - min_num] - 1] = num
        count[num - min_num] -= 1

    return output
`,Zy=`def cube_sort(arr: list, processors: int) -> None:
    n = len(arr)
    subarrays = []
    subarray_size = n // processors

    for i in range(processors):
        subarray = arr[i * subarray_size : (i + 1) * subarray_size]
        subarrays.append(subarray)

    for subarray in subarrays:
        subarray.sort()

    for dimension in range(processors.bit_length() - 1):
        for i in range(processors):
            partner = i ^ (1 << dimension)
            if i < partner:
                merged = subarrays[i] + subarrays[partner]
            else:
                merged = subarrays[partner] + subarrays[i]
            merged.sort()
            subarrays[i] = merged[:subarray_size]
            subarrays[partner] = merged[subarray_size:]

    arr[:] = [num for subarray in subarrays for num in subarray]
`,n0=`def heap_sort(arr: list) -> list:
    n = len(arr)

    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

    return arr

def heapify(arr: list, n: int, i: int) -> None:
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
`,e0=`def insertion_sort(arr: list) -> None:
    n = len(arr)

    for i in range(1, n):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key
`,t0=`def merge_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    mid = n // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []

    while left and right:
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)
        output.append(min_num)

    output.extend(left)
    output.extend(right)

    return output
`,r0=`def pancake_sort(arr: list) -> None:
    n = len(arr)

    for size in reversed(range(2, n + 1)):
        max_idx = find_max_index(arr, size)

        if max_idx != size - 1:
            flip(arr, max_idx)
            flip(arr, size - 1)

def flip(arr: list, i: int) -> None:
    left = 0

    while left < i:
        arr[left], arr[i] = arr[i], arr[left]
        left += 1
        i -= 1

def find_max_index(arr: list, n: int) -> int:
    max_idx = 0

    for i in range(n):
        if arr[i] > arr[max_idx]:
            max_idx = i

    return max_idx
`,i0=`def quick_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    pivot = arr[n // 2]
    left = [x for x in arr if x < pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)
`,a0=`def radix_sort(arr: list) -> None:
    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

def counting_sort(arr: list, exp: int) -> None:
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        idx = arr[i] // exp
        count[idx % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1

    while i >= 0:
        idx = arr[i] // exp
        output[count[idx % 10] - 1] = arr[i]
        count[idx % 10] -= 1
        i -= 1

    for i in range(n):
        arr[i] = output[i]
`,o0=`def selection_sort(arr: list) -> None:
    n = len(arr)

    for i in range(n):
        min_i = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_i]:
                min_i = j

        if min_i != i:
            arr[i], arr[min_i] = arr[min_i], arr[i]
`,s0=`def shell_sort(arr: list) -> None:
    n = len(arr)
    gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for gap in gaps:
        for i in range(gap, n):
            tmp = arr[i]
            j = i

            while j >= gap and arr[j - gap] > tmp:
                arr[j] = arr[j - gap]
                j -= gap

            if j != i:
                arr[j] = tmp
`,l0=`from threading import Thread
from time import sleep


def sleep_sort(arr: list ) -> list:
    sorted_arr = []
    threads = []

    for num in arr:
        thread = Thread(target=snorlax, args=(num, sorted_arr))
        threads.append(thread)

    for thread in threads:
        thread.start( )

    for thread in threads:
        thread.join()

    return sorted_arr

def snorlax(num: float, arr: list) -> None:
    sleep(num / 1000.0)
    arr.append(num)
`,u0=`def tim_sort(arr: list) -> list:
    n = len(arr)
    min_run = 32

    for start in range(0, n, min_run):
        end = min(start + min_run - 1, n - 1)
        insertion_sort(arr, start, end)

    size = min_run

    while size < n:
        for left in range(0, n, 2 * size):
            mid = min(n - 1, left + size - 1)
            right = min((left + 2 * size - 1), (n - 1))
            arr[left : right + 1] = merge(arr[left : mid + 1], arr[mid + 1 : right + 1])
        size *= 2

    return arr

def insertion_sort(arr: list, left: int, right: int) -> None:
    for i in range(left + 1, right + 1):
        key = arr[i]

        while i > 0 and key < arr[i - 1]:
            arr[i] = arr[i - 1]
            i -= 1

        arr[i] = key

def merge_sort(arr: list) -> list:
    n = len(arr)

    if n <= 1:
        return arr

    mid = n // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left: list, right: list) -> list:
    output = []

    while left and right:
        min_num = left.pop(0) if left[0] <= right[0] else right.pop(0)
        output.append(min_num)

    output.extend(left)
    output.extend(right)

    return output
`,c0=`const bogoSort = (arr) => {
    const isSorted = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false
            }
        }

        return true
    }

    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

        return arr
    }

    while (!isSorted(arr)) {
        arr = shuffleArray(arr)
    }
}
`,d0=`const bubbleSort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let swapped = false

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }
        }

        if (!swapped) {
            break
        }
    }
}
`,f0=`const bucketSort = (arr) => {
    const num_buckets = 10
    const min_num = Math.min(...arr)
    const max_num = Math.max(...arr)
    const bucket_size = (max_num - min_num) / num_buckets
    const buckets = Array.from({ length: num_buckets }, () => [])

    for (const num of arr) {
        const index = Math.min(Math.floor((num - min_num) / bucket_size), num_buckets - 1)
        buckets[index].push(num)
    }

    return buckets.flatMap(bucket => bucket.sort((a, b) => a - b))
}
`,p0=`const countingSort = (arr) => {
    const max_num = Math.max(...arr)
    const min_num = Math.min(...arr)
    const count_range = max_num - min_num + 1
    const count = Array(count_range).fill(0)
    const output = Array(arr.length)

    for (const num of arr) {
        count[num - min_num]++
    }

    for (let i = 1; i < count_range; i++) {
        count[i] += count[i - 1]
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min_num] - 1] = arr[i]
        count[arr[i] - min_num]--
    }

    return output
}
`,h0=`const cubeSort = (arr, processors) => {
    const n = arr.length
    const subarrays = []
    const subarraySize = Math.floor(n / processors)

    for (let i = 0; i < processors; i++) {
        const subarray = arr.slice(i * subarraySize, (i + 1) * subarraySize)
        subarray.sort((a, b) => a - b)
        subarrays.push(subarray)
    }

    for (let dimension = 0; dimension < Math.floor(Math.log2(processors)); dimension++) {
        for (let i = 0; i < processors; i++) {
            const partner = i ^ (1 << dimension)
            if (i < partner) {
                const merged = subarrays[i].concat(subarrays[partner])
                merged.sort((a, b) => a - b)
                subarrays[i] = merged.slice(0, subarraySize)
                subarrays[partner] = merged.slice(subarraySize)
            }
        }
    }

    arr.splice(0, arr.length, ...subarrays.flat())
}
`,g0=`const heapSort = (arr) => {
    const n = arr.length

    const heapify = (arr, n, i) => {
        let largest = i
        const left = 2 * i + 1
        const right = 2 * i + 2

        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            heapify(arr, n, largest)
        }
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]]
        heapify(arr, i, 0)
    }

    return arr
}
`,m0=`const insertionSort = (arr) => {
    const n = arr.length

    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = key
    }
}
`,v0=`const mergeSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const mid = Math.floor(n / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    const output = []

    while (left.length && right.length) {
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()
        output.push(minNum)
    }

    output.push(...left)
    output.push(...right)

    return output
}
`,y0=`const pancakeSort = (arr) => {
    const n = arr.length

    for (let size = n; size > 1; size--) {
        const maxIdx = findMaxIndex(arr, size)

        if (maxIdx !== size - 1) {
            flip(arr, maxIdx)
            flip(arr, size - 1)
        }
    }
}

const flip = (arr, i) => {
    let left = 0

    while (left < i) {
        [arr[left], arr[i]] = [arr[i], arr[left]]
        left++
        i--
    }
}

const findMaxIndex = (arr, n) => {
    let maxIdx = 0

    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i
        }
    }

    return maxIdx
}
`,x0=`const quickSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const pivot = arr[Math.floor(n / 2)]
    const left = arr.filter(x => x < pivot)
    const right = arr.filter(x => x > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]
}
`,_0=`const radixSort = (arr) => {
    const maxVal = Math.max(...arr)
    let exp = 1

    while (maxVal / exp > 0) {
        countingSort(arr, exp)
        exp *= 10
    }
}

const countingSort = (arr, exp) => {
    const n = arr.length
    const output = new Array(n).fill(0)
    const count = new Array(10).fill(0)

    for (let i = 0; i < n; i++) {
        const idx = Math.floor(arr[i] / exp)
        count[idx % 10] += 1
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
    }

    let i = n - 1

    while (i >= 0) {
        const idx = Math.floor(arr[i] / exp)
        output[count[idx % 10] - 1] = arr[i]
        count[idx % 10] -= 1
        i -= 1
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i]
    }
}
`,b0=`const selectionSort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        let minIndex = i

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
}
`,w0=`const shellSort = (arr) => {
    const n = arr.length
    const gaps = [701, 301, 132, 57, 23, 10, 4, 1]

    for (const gap of gaps) {
        for (let i = gap; i < n; i++) {
            const tmp = arr[i]
            let j = i

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap]
                j -= gap
            }

            if (j !== i) {
                arr[j] = tmp
            }
        }
    }
}
`,S0=`const sleepSort = (arr) => {
    const sortedArr = []
    const promises = []

    for (const num of arr) {
        promises.push(new Promise((resolve) => setTimeout(() => {
            sortedArr.push(num)
            resolve()
        }, num)))
    }

    return Promise.all(promises).then(() => sortedArr)
}
`,T0=`const timSort = (arr) => {
    const n = arr.length
    const minRun = 32

    for (let start = 0; start < n; start += minRun) {
        const end = Math.min(start + minRun - 1, n - 1)
        insertionSort(arr, start, end)
    }

    let size = minRun

    while (size < n) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(n - 1, left + size - 1)
            const right = Math.min((left + 2 * size - 1), (n - 1))
            const merged = merge(arr.slice(left, mid + 1), arr.slice(mid + 1, right + 1))
            arr.splice(left, right - left + 1, ...merged)
        }
        size *= 2
    }

    return arr
}

const insertionSort = (arr, left, right) => {
    for (let i = left + 1; i <= right; i++) {
        const key = arr[i]
        let j = i

        while (j > left && key < arr[j - 1]) {
            arr[j] = arr[j - 1]
            j--
        }

        arr[j] = key
    }
}

const mergeSort = (arr) => {
    const n = arr.length

    if (n <= 1) {
        return arr
    }

    const mid = Math.floor(n / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

const merge = (left, right) => {
    const output = []

    while (left.length && right.length) {
        const minNum = left[0] <= right[0] ? left.shift() : right.shift()
        output.push(minNum)
    }

    return output.concat(left).concat(right)
}
`,j0=`import java.util.Arrays;
import java.util.Random;


public static void bogoSort(int[] arr) {
    int[] target = Arrays.copyOf(arr, arr.length);
    Arrays.sort(target);

    while (!Arrays.equals(arr, target)) {
        shuffleArray(arr);
    }
}

public static void shuffleArray(int[] arr) {
    Random rnd = new Random();

    for (int i = arr.length - 1; i > 0; i--) {
        int index = rnd.nextInt(i + 1);
        int temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
}
`,k0=`public static void bubbleSort(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n; i++) {
        boolean swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
`,E0=`import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;


public static int[] bucketSort(int[] arr) {
    int numBuckets = 10;
    int index;
    int[] result = new int[arr.length];
    int minNum = Arrays.stream(arr).min().getAsInt();
    int maxNum = Arrays.stream(arr).max().getAsInt();
    double bucketSize = (double) (maxNum - minNum) / numBuckets;
    List<List<Integer>> buckets = new ArrayList<>(numBuckets);

    for (int i = 0; i < numBuckets; i++) {
        buckets.add(new ArrayList<>());
    }

    for (int num : arr) {
        index = Math.min((int) ((num - minNum) / bucketSize), numBuckets - 1);
        buckets.get(index).add(num);
    }

    index = 0;

    for (List<Integer> bucket : buckets) {
        Collections.sort(bucket);

        for (int num : bucket) {
            result[index++] = num;
        }
    }

    return result;
}
`,N0=`import java.util.Arrays;


public static int[] countingSort(int[] arr) {
    int maxNum = Arrays.stream(arr).max().orElse(Integer.MIN_VALUE);
    int minNum = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);
    int countRange = maxNum - minNum + 1;
    int[] count = new int[countRange];
    int[] output = new int[arr.length];

    for (int num : arr) {
        count[num - minNum]++;
    }

    for (int i = 1; i < countRange; i++) {
        count[i] += count[i - 1];
    }

    for (int i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - minNum] - 1] = arr[i];
        count[arr[i] - minNum]--;
    }

    return output;
}
`,O0=`import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public static void cubeSort(int[] arr, int processors) {
    int n = arr.length;
    List<int[]> subarrays = new ArrayList<>();
    int subarraySize = (n + processors - 1) / processors;

    for (int i = 0; i < processors; i++) {
        int[] subarray = new int[Math.min(subarraySize, n - i * subarraySize)];
        System.arraycopy(arr, i * subarraySize, subarray, 0, subarray.length);
        Arrays.sort(subarray);
        subarrays.add(subarray);
    }

    for (int dimension = 0; dimension < Integer.SIZE - 1; dimension++) {
        for (int i = 0; i < processors; i++) {
            int partner = i ^ (1 << dimension);

            if (i < partner && partner < processors) {
                int[] merged = merge(subarrays.get(i), subarrays.get(partner));
                System.arraycopy(merged, 0, subarrays.get(i), 0, subarraySize);
                System.arraycopy(merged, subarraySize, subarrays.get(partner), 0, subarraySize);
            }
        }
    }

    int index = 0;

    for (int[] subarray : subarrays) {
        for (int num : subarray) {
            arr[index++] = num;
        }
    }
}

public static int[] merge(int[] arr1, int[] arr2) {
    int[] merged = new int[arr1.length + arr2.length];
    int i = 0, j = 0, k = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }

    while (i < arr1.length) {
        merged[k++] = arr1[i++];
    }

    while (j < arr2.length) {
        merged[k++] = arr2[j++];
    }

    return merged;
}
`,A0=`public static int[] heapSort(int[] arr) {
    int n = arr.length;

    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        heapify(arr, i, 0);
    }

    return arr;
}

public static void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}
`,C0=`public static void insertionSort(int[] arr) {
    int n = arr.length;

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}
`,L0=`import java.util.Arrays;


public static int[] mergeSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    int[] left = Arrays.copyOfRange(arr, 0, mid);
    int[] right = Arrays.copyOfRange(arr, mid, n);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

public static int[] merge(int[] left, int[] right) {
    int[] output = new int[left.length + right.length];
    int i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            output[k++] = left[i++];
        } else {
            output[k++] = right[j++];
        }
    }

    while (i < left.length) {
        output[k++] = left[i++];
    }

    while (j < right.length) {
        output[k++] = right[j++];
    }

    return output;
}
`,R0=`public static void pancakeSort(int[] arr) {
    int n = arr.length;

    for (int size = n; size >= 2; size--) {
        int maxIdx = findMaxIndex(arr, size);

        if (maxIdx != size - 1) {
            flip(arr, maxIdx);
            flip(arr, size - 1);
        }
    }
}

public static void flip(int[] arr, int i) {
    int left = 0;

    while (left < i) {
        int temp = arr[left];
        arr[left] = arr[i];
        arr[i] = temp;
        left++;
        i--;
    }
}

public static int findMaxIndex(int[] arr, int n) {
    int maxIdx = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] > arr[maxIdx]) {
            maxIdx = i;
        }
    }

    return maxIdx;
}
`,P0=`import java.util.ArrayList;
import java.util.List;


public static int[] quickSort(int[] arr) {
    int n = arr.length;

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    List<Integer> left = new ArrayList<>();
    List<Integer> right = new ArrayList<>();

    for (int x : arr) {
        if (x < pivot) {
            left.add(x);
        } else if (x > pivot) {
            right.add(x);
        }
    }

    int[] sortedLeft = quickSort(left.stream().mapToInt(i -> i).toArray());
    int[] sortedRight = quickSort(right.stream().mapToInt(i -> i).toArray());
    int[] result = new int[n];

    System.arraycopy(sortedLeft, 0, result, 0, sortedLeft.length);
    result[sortedLeft.length] = pivot;
    System.arraycopy(sortedRight, 0, result, sortedLeft.length + 1, sortedRight.length);

    return result;
}
`,M0=`import java.util.Arrays;


public static void radixSort(int[] arr) {
    int maxVal = Arrays.stream(arr).max().getAsInt();
    int exp = 1;

    while (maxVal / exp > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }
}

public static void countingSort(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10];

    for (int i = 0; i < n; i++) {
        int idx = arr[i] / exp;
        count[idx % 10]++;
    }

    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; i--) {
        int idx = arr[i] / exp;
        output[count[idx % 10] - 1] = arr[i];
        count[idx % 10]--;
    }

    System.arraycopy(output, 0, arr, 0, n);
}
`,I0=`public static void selectionSort(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n; i++) {
        int minIdx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}
`,D0=`public static void shellSort(int[] arr) {
    int n = arr.length;
    int[] gaps = {701, 301, 132, 57, 23, 10, 4, 1};

    for (int gap : gaps) {
        for (int i = gap; i < n; i++) {
            int tmp = arr[i];
            int j = i;

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            if (j != i) {
                arr[j] = tmp;
            }
        }
    }
}
`,z0=`import java.util.ArrayList;
import java.util.List;


public static int[] sleepSort(int[] arr) {
    List<Integer> sortedArr = new ArrayList<>();
    List<Thread> threads = new ArrayList<>();

    for (int num : arr) {
        Thread thread = new Thread(() -> snorlax(num, sortedArr));
        threads.add(thread);
    }

    for (Thread thread : threads) {
        thread.start();
    }

    for (Thread thread : threads) {
        try {
            thread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    return sortedArr.stream().mapToInt(i -> i).toArray();
}

public static void snorlax(int num, List<Integer> arr) {
    try {
        Thread.sleep(num);
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
    arr.add(num);
}
`,B0=`public static int[] timSort(int[] arr) {
    int n = arr.length;
    int minRun = 32;

    for (int start = 0; start < n; start += minRun) {
        int end = Math.min(start + minRun - 1, n - 1);
        insertionSort(arr, start, end);
    }

    int size = minRun;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = Math.min(n - 1, left + size - 1);
            int right = Math.min(left + 2 * size - 1, n - 1);
            arr = merge(arr, left, mid, right);
        }
        size *= 2;
    }

    return arr;
}

public static void insertionSort(int[] arr, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= left && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

public static int[] merge(int[] arr, int left, int mid, int right) {
    int[] output = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            output[k++] = arr[i++];
        } else {
            output[k++] = arr[j++];
        }
    }

    while (i <= mid) {
        output[k++] = arr[i++];
    }

    while (j <= right) {
        output[k++] = arr[j++];
    }

    System.arraycopy(output, 0, arr, left, output.length);
    return arr;
}
`,F0=`#include <algorithm>
#include <random>
#include <vector>

using namespace std;


void BogoSort(vector<int>& arr) {
    vector<int> target = arr;
    sort(target.begin(), target.end());

    random_device rd;
    mt19937 g(rd());

    while (!is_sorted(arr.begin(), arr.end())) {
        shuffle(arr.begin(), arr.end(), g);
    }
}
`,U0=`#include <vector>

using namespace std;


void BubbleSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
}
`,H0=`#include <vector>
#include <algorithm>

using namespace std;


vector<int> BucketSort(vector<int>& arr) {
    int num_buckets = 10;
    int min_num = *min_element(arr.begin(), arr.end());
    int max_num = *max_element(arr.begin(), arr.end());
    double bucket_size = static_cast<double>(max_num - min_num) / num_buckets;
    vector<vector<int>> buckets(num_buckets);
    vector<int> result;

    for (int num : arr) {
        int index = min(static_cast<int>((num - min_num) / bucket_size), num_buckets - 1);
        buckets[index].push_back(num);
    }

    for (auto& bucket : buckets) {
        sort(bucket.begin(), bucket.end());
        result.insert(result.end(), bucket.begin(), bucket.end());
    }

    return result;
}
`,W0=`#include <vector>
#include <algorithm>

using namespace std;


vector<int> CountingSort(vector<int>& arr) {
    int max_num = *max_element(arr.begin(), arr.end());
    int min_num = *min_element(arr.begin(), arr.end());
    int count_range = max_num - min_num + 1;
    vector<int> count(count_range, 0);
    vector<int> output(arr.size(), 0);

    for (int num : arr) {
        count[num - min_num]++;
    }

    for (int i = 1; i < count_range; ++i) {
        count[i] += count[i - 1];
    }

    for (int i = arr.size() - 1; i >= 0; --i) {
        output[count[arr[i] - min_num] - 1] = arr[i];
        count[arr[i] - min_num]--;
    }

    return output;
}
`,V0=`#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;


void CubeSort(vector<int>& arr, int processors) {
    int n = arr.size();
    vector<vector<int>> subarrays;
    int subarray_size = n / processors;

    for (int i = 0; i < processors; ++i) {
        vector<int> subarray(arr.begin() + i * subarray_size, arr.begin() + (i + 1) * subarray_size);
        sort(subarray.begin(), subarray.end());
        subarrays.push_back(subarray);
    }

    for (int dimension = 0; dimension < log2(processors); ++dimension) {
        for (int i = 0; i < processors; ++i) {
            int partner = i ^ (1 << dimension);
            vector<int> merged;
            if (i < partner) {
                merged = subarrays[i];
                merged.insert(merged.end(), subarrays[partner].begin(), subarrays[partner].end());
            } else {
                merged = subarrays[partner];
                merged.insert(merged.end(), subarrays[i].begin(), subarrays[i].end());
            }
            sort(merged.begin(), merged.end());
            subarrays[i].assign(merged.begin(), merged.begin() + subarray_size);
            subarrays[partner].assign(merged.begin() + subarray_size, merged.end());
        }
    }

    arr.clear();
    for (auto& subarray : subarrays) {
        arr.insert(arr.end(), subarray.begin(), subarray.end());
    }
}
`,$0=`#include <vector>

using namespace std;


void Heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr[i], arr[largest]);
        Heapify(arr, n, largest);
    }
}

void HeapSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = n / 2 - 1; i >= 0; --i) {
        Heapify(arr, n, i);
    }
    for (int i = n - 1; i > 0; --i) {
        swap(arr[0], arr[i]);
        Heapify(arr, i, 0);
    }
}
`,K0=`#include <vector>

using namespace std;


void InsertionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}
`,G0=`#include <vector>

using namespace std;


vector<int> Merge(vector<int>& left, vector<int>& right) {
    vector<int> output;

    while (!left.empty() && !right.empty()) {
        int min_num = (left[0] <= right[0]) ? left[0] : right[0];
        output.push_back(min_num);

        if (left[0] <= right[0]) {
            left.erase(left.begin());
        } else {
            right.erase(right.begin());
        }
    }

    output.insert(output.end(), left.begin(), left.end());
    output.insert(output.end(), right.begin(), right.end());

    return output;
}

vector<int> MergeSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int mid = n / 2;
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());

    left = MergeSort(left);
    right = MergeSort(right);

    return Merge(left, right);
}
`,J0=`#include <vector>

using namespace std;


int FindMaxIndex(vector<int>& arr, int n) {
    int max_idx = 0;

    for (int i = 0; i < n; ++i) {
        if (arr[i] > arr[max_idx]) {
            max_idx = i;
        }
    }

    return max_idx;
}

void Flip(vector<int>& arr, int i) {
    int left = 0;

    while (left < i) {
        swap(arr[left], arr[i]);
        left++;
        i--;
    }
}

void PancakeSort(vector<int>& arr) {
    int n = arr.size();

    for (int size = n; size >= 2; --size) {
        int max_idx = FindMaxIndex(arr, size);

        if (max_idx != size - 1) {
            Flip(arr, max_idx);
            Flip(arr, size - 1);
        }
    }
}
`,Y0=`#include <vector>

using namespace std;


vector<int> QuickSort(vector<int>& arr) {
    int n = arr.size();

    if (n <= 1) {
        return arr;
    }

    int pivot = arr[n / 2];
    vector<int> left, right;

    for (int x : arr) {
        if (x < pivot) {
            left.push_back(x);
        } else if (x > pivot) {
            right.push_back(x);
        }
    }

    left = QuickSort(left);
    right = QuickSort(right);

    left.push_back(pivot);
    left.insert(left.end(), right.begin(), right.end());

    return left;
}
`,q0=`#include <vector>

using namespace std;


void CountingSort(vector<int>& arr, int exp) {
    int n = arr.size();
    vector<int> output(n, 0);
    vector<int> count(10, 0);

    for (int i = 0; i < n; ++i) {
        int idx = arr[i] / exp % 10;
        count[idx]++;
    }

    for (int i = 1; i < 10; ++i) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; --i) {
        int idx = arr[i] / exp % 10;
        output[count[idx] - 1] = arr[i];
        count[idx]--;
    }

    for (int i = 0; i < n; ++i) {
        arr[i] = output[i];
    }
}

void RadixSort(vector<int>& arr) {
    int max_val = *max_element(arr.begin(), arr.end());
    int exp = 1;

    while (max_val / exp > 0) {
        CountingSort(arr, exp);
        exp *= 10;
    }
}
`,Q0=`#include <vector>

using namespace std;


void SelectionSort(vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n; ++i) {
        int min_i = i;

        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[min_i]) {
                min_i = j;
            }
        }

        if (min_i != i) {
            swap(arr[i], arr[min_i]);
        }
    }
}
`,X0=`#include <vector>

using namespace std;


void ShellSort(vector<int>& arr) {
    int n = arr.size();
    vector<int> gaps = {701, 301, 132, 57, 23, 10, 4, 1};

    for (int gap : gaps) {
        for (int i = gap; i < n; ++i) {
            int tmp = arr[i];
            int j = i;

            while (j >= gap && arr[j - gap] > tmp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            if (j != i) {
                arr[j] = tmp;
            }
        }
    }
}
`,Z0=`#include <chrono>
#include <thread>
#include <vector>

using namespace std;


void Snorlax(double num, vector<double>& arr) {
    this_thread::sleep_for(chrono::milliseconds(static_cast<int>(num)));
    arr.push_back(num);
}

vector<double> SleepSort(vector<double>& arr) {
    vector<double> sorted_arr;
    vector<thread> threads;

    for (double num : arr) {
        threads.emplace_back(Snorlax, num, ref(sorted_arr));
    }

    for (thread& t : threads) {
        t.join();
    }

    return sorted_arr;
}
`,nx=`#include <vector>
#include <algorithm>

using namespace std;


void InsertionSort(vector<double>& arr, int left, int right) {
    for (int i = left + 1; i <= right; ++i) {
        double key = arr[i];
        int j = i - 1;

        while (j >= left && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j;
        }

        arr[j + 1] = key;
    }
}

vector<double> Merge(const vector<double>& left, const vector<double>& right) {
    vector<double> output;

    int left_index = 0;
    int right_index = 0;

    while (left_index < left.size() && right_index < right.size()) {
        if (left[left_index] <= right[right_index]) {
            output.push_back(left[left_index++]);
        } else {
            output.push_back(right[right_index++]);
        }
    }

    while (left_index < left.size()) {
        output.push_back(left[left_index++]);
    }

    while (right_index < right.size()) {
        output.push_back(right[right_index++]);
    }

    return output;
}

vector<double> TimSort(vector<double>& arr) {
    int n = arr.size();
    int min_run = 32;

    for (int start = 0; start < n; start += min_run) {
        int end = min(start + min_run - 1, n - 1);
        InsertionSort(arr, start, end);
    }

    int size = min_run;

    while (size < n) {
        for (int left = 0; left < n; left += 2 * size) {
            int mid = min(n - 1, left + size - 1);
            int right = min((left + 2 * size - 1), (n - 1));
            vector<double> merged = Merge(
                vector<double>(arr.begin() + left, arr.begin() + mid + 1),
                vector<double>(arr.begin() + mid + 1, arr.begin() + right + 1)
            );
            copy(merged.begin(), merged.end(), arr.begin() + left);
        }
        size *= 2;
    }

    return arr;
}
`,ex=`def bogo_sort(arr)
  target = arr.sort

  until arr == target
    arr.shuffle!
  end
end
`,tx=`def bubble_sort(arr)
  n = arr.size

  n.times do |i|
    swapped = false

    (0...(n - i - 1)).each do |j|
      if arr[j] > arr[j + 1]
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
        swapped = true
      end
    end

    break unless swapped
  end
end
`,rx=`def bucket_sort(arr)
  num_buckets = 10
  min_num     = arr.min
  max_num     = arr.max
  bucket_size = (max_num - min_num).to_f / num_buckets
  buckets     = Array.new(num_buckets) { [] }

  arr.each do |num|
    index = [( (num - min_num) / bucket_size ).to_i, num_buckets - 1].min
    buckets[index] << num
  end

  buckets.map { |bucket| bucket.sort }.flatten
end
`,ix=`
def counting_sort(arr)
  max_num     = arr.max
  min_num     = arr.min
  count_range = max_num - min_num + 1
  count       = Array.new(count_range, 0)
  output      = Array.new(arr.size, 0)

  arr.each do |num|
    count[num - min_num] += 1
  end

  (1...count_range).each do |i|
    count[i] += count[i - 1]
  end

  arr.reverse_each do |num|
    output[count[num - min_num] - 1] = num
    count[num - min_num] -= 1
  end

  output
end
`,ax=`def cube_sort(arr, processors)
  n             = arr.size
  subarrays     = []
  subarray_size = n / processors

  (0...processors).each do |i|
    subarray = arr[i * subarray_size, subarray_size]
    subarrays << subarray
  end

  subarrays.each(&:sort!)

  (0...(processors.bit_length - 1)).each do |dimension|
    (0...processors).each do |i|
      partner = i ^ (1 << dimension)
      if i < partner
        merged = subarrays[i] + subarrays[partner]
      else
        merged = subarrays[partner] + subarrays[i]
      end
      merged.sort!
      subarrays[i] = merged[0...subarray_size]
      subarrays[partner] = merged[subarray_size, subarray_size]
    end
  end

  arr.replace(subarrays.flatten)
end
`,ox=`def heap_sort(arr)
  n = arr.size

  (n / 2 - 1).downto(0) do |i|
    heapify(arr, n, i)
  end

  (n - 1).downto(1) do |i|
    arr[i], arr[0] = arr[0], arr[i]
    heapify(arr, i, 0)
  end

  arr
end

def heapify(arr, n, i)
  largest = i
  left = 2 * i + 1
  right = 2 * i + 2

  largest = left if left < n && arr[left] > arr[largest]
  largest = right if right < n && arr[right] > arr[largest]

  if largest != i
    arr[i], arr[largest] = arr[largest], arr[i]
    heapify(arr, n, largest)
  end
end
`,sx=`def insertion_sort(arr)
  n = arr.size

  (1...n).each do |i|
    key = arr[i]
    j = i - 1

    while j >= 0 && key < arr[j]
      arr[j + 1] = arr[j]
      j -= 1
    end

    arr[j + 1] = key
  end
end
`,lx=`def merge_sort(arr)
  n = arr.size
  return arr if n <= 1

  mid   = n / 2
  left  = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])

  merge(left, right)
end

def merge(left, right)
  output = []

  until left.empty? || right.empty?
    if left.first <= right.first
      output << left.shift
    else
      output << right.shift
    end
  end

  output + left + right
end
`,ux=`def pancake_sort(arr)
  n = arr.size

  (2..n).to_a.reverse.each do |size|
    max_idx = find_max_index(arr, size)

    if max_idx != size - 1
      flip(arr, max_idx)
      flip(arr, size - 1)
    end
  end
end

def flip(arr, i)
  left = 0

  while left < i
    arr[left], arr[i] = arr[i], arr[left]
    left += 1
    i -= 1
  end
end

def find_max_index(arr, n)
  max_idx = 0

  n.times do |i|
    max_idx = i if arr[i] > arr[max_idx]
  end

  max_idx
end
`,cx=`def quick_sort(arr)
  n = arr.size
  return arr if n <= 1

  pivot = arr[n / 2]
  left  = arr.select { |x| x < pivot }
  right = arr.select { |x| x > pivot }

  quick_sort(left) + [pivot] + quick_sort(right)
end
`,dx=`def radix_sort(arr)
  max_val = arr.max
  exp     = 1

  while max_val / exp > 0
    counting_sort(arr, exp)
    exp *= 10
  end
end

def counting_sort(arr, exp)
  n       = arr.size
  output  = Array.new(n, 0)
  count   = Array.new(10, 0)

  n.times do |i|
    idx = arr[i] / exp
    count[idx % 10] += 1
  end

  (1...10).each do |i|
    count[i] += count[i - 1]
  end

  (n - 1).downto(0) do |i|
    idx = arr[i] / exp
    output[count[idx % 10] - 1] = arr[i]
    count[idx % 10] -= 1
  end

  n.times do |i|
    arr[i] = output[i]
  end
end
`,fx=`def selection_sort(arr)
  n = arr.size

  n.times do |i|
    min_i = i

    ((i + 1)...n).each do |j|
      min_i = j if arr[j] < arr[min_i]
    end

    arr[i], arr[min_i] = arr[min_i], arr[i] if min_i != i
  end
end
`,px=`def shell_sort(arr)
  n     = arr.size
  gaps  = [701, 301, 132, 57, 23, 10, 4, 1]

  gaps.each do |gap|
    (gap...n).each do |i|
      tmp = arr[i]
      j = i

      while j >= gap && arr[j - gap] > tmp
        arr[j] = arr[j - gap]
        j -= gap
      end

      arr[j] = tmp if j != i
    end
  end
end
`,hx=`def sleep_sort(arr)
  sorted_arr  = []
  threads     = []

  arr.each do |num|
    threads << Thread.new do
      sleep(num / 1000.0)
      sorted_arr << num
    end
  end

  threads.each(&:join)
  sorted_arr
end
`,gx=`def tim_sort(arr)
  n       = arr.size
  min_run = 32

  (0...n).step(min_run) do |start_idx|
    end_idx = [start_idx + min_run - 1, n - 1].min
    insertion_sort(arr, start_idx, end_idx)
  end

  size = min_run

  while size < n
    (0...n).step(2 * size) do |left|
      mid = [left + size - 1, n - 1].min
      right = [left + 2 * size - 1, n - 1].min
      arr[left..right] = merge(arr[left..mid], arr[(mid + 1)..right])
    end
    size *= 2
  end

  arr
end

def insertion_sort(arr, left, right)
  (left + 1..right).each do |i|
    key = arr[i]
    j = i
    while j > left && key < arr[j - 1]
      arr[j] = arr[j - 1]
      j -= 1
    end
    arr[j] = key
  end
end

def merge_sort(arr)
  return arr if arr.size <= 1

  mid = arr.size / 2
  left = merge_sort(arr[0...mid])
  right = merge_sort(arr[mid..-1])

  merge(left, right)
end

def merge(left, right)
  output = []

  until left.empty? || right.empty?
    if left.first <= right.first
      output << left.shift
    else
      output << right.shift
    end
  end

  output + left + right
end
`;function mx(){return r.jsxs("div",{className:Zn.container,children:[r.jsx("h2",{className:Zn.sectionHeader,children:"Sorting Algorithms"}),r.jsx("section",{id:"sort-bubble",children:r.jsxs(s,{title:"bubble sort",children:[r.jsx(s.Tab,{code:qy,language:"python"}),r.jsx(s.Tab,{code:d0,language:"javascript"}),r.jsx(s.Tab,{code:k0,language:"java"}),r.jsx(s.Tab,{code:U0,language:"cpp"}),r.jsx(s.Tab,{code:tx,language:"ruby"})]})}),r.jsx("section",{id:"sort-selection",children:r.jsxs(s,{title:"selection sort",children:[r.jsx(s.Tab,{code:o0,language:"python"}),r.jsx(s.Tab,{code:b0,language:"javascript"}),r.jsx(s.Tab,{code:I0,language:"java"}),r.jsx(s.Tab,{code:Q0,language:"cpp"}),r.jsx(s.Tab,{code:fx,language:"ruby"})]})}),r.jsx("section",{id:"sort-insertion",children:r.jsxs(s,{title:"insertion sort",children:[r.jsx(s.Tab,{code:e0,language:"python"}),r.jsx(s.Tab,{code:m0,language:"javascript"}),r.jsx(s.Tab,{code:C0,language:"java"}),r.jsx(s.Tab,{code:K0,language:"cpp"}),r.jsx(s.Tab,{code:sx,language:"ruby"})]})}),r.jsx("section",{id:"sort-shell",children:r.jsxs(s,{title:"shell sort",children:[r.jsx(s.Tab,{code:s0,language:"python"}),r.jsx(s.Tab,{code:w0,language:"javascript"}),r.jsx(s.Tab,{code:D0,language:"java"}),r.jsx(s.Tab,{code:X0,language:"cpp"}),r.jsx(s.Tab,{code:px,language:"ruby"})]})}),r.jsx("section",{id:"sort-merge",children:r.jsxs(s,{title:"merge sort",children:[r.jsx(s.Tab,{code:t0,language:"python"}),r.jsx(s.Tab,{code:v0,language:"javascript"}),r.jsx(s.Tab,{code:L0,language:"java"}),r.jsx(s.Tab,{code:G0,language:"cpp"}),r.jsx(s.Tab,{code:lx,language:"ruby"})]})}),r.jsx("section",{id:"sort-quick",children:r.jsxs(s,{title:"quick sort",children:[r.jsx(s.Tab,{code:i0,language:"python"}),r.jsx(s.Tab,{code:x0,language:"javascript"}),r.jsx(s.Tab,{code:P0,language:"java"}),r.jsx(s.Tab,{code:Y0,language:"cpp"}),r.jsx(s.Tab,{code:cx,language:"ruby"})]})}),r.jsx("section",{id:"sort-tim",children:r.jsxs(s,{title:"timsort",children:[r.jsx(s.Tab,{code:u0,language:"python"}),r.jsx(s.Tab,{code:T0,language:"javascript"}),r.jsx(s.Tab,{code:B0,language:"java"}),r.jsx(s.Tab,{code:nx,language:"cpp"}),r.jsx(s.Tab,{code:gx,language:"ruby"})]})}),r.jsx("section",{id:"sort-heap",children:r.jsxs(s,{title:"heap sort",children:[r.jsx(s.Tab,{code:n0,language:"python"}),r.jsx(s.Tab,{code:g0,language:"javascript"}),r.jsx(s.Tab,{code:A0,language:"java"}),r.jsx(s.Tab,{code:$0,language:"cpp"}),r.jsx(s.Tab,{code:ox,language:"ruby"})]})}),r.jsx("section",{id:"sort-counting",children:r.jsxs(s,{title:"counting sort",children:[r.jsx(s.Tab,{code:Xy,language:"python"}),r.jsx(s.Tab,{code:p0,language:"javascript"}),r.jsx(s.Tab,{code:N0,language:"java"}),r.jsx(s.Tab,{code:W0,language:"cpp"}),r.jsx(s.Tab,{code:ix,language:"ruby"})]})}),r.jsx("section",{id:"sort-bucket",children:r.jsxs(s,{title:"bucket sort",children:[r.jsx(s.Tab,{code:Qy,language:"python"}),r.jsx(s.Tab,{code:f0,language:"javascript"}),r.jsx(s.Tab,{code:E0,language:"java"}),r.jsx(s.Tab,{code:H0,language:"cpp"}),r.jsx(s.Tab,{code:rx,language:"ruby"})]})}),r.jsx("section",{id:"sort-radix",children:r.jsxs(s,{title:"radix sort",children:[r.jsx(s.Tab,{code:a0,language:"python"}),r.jsx(s.Tab,{code:_0,language:"javascript"}),r.jsx(s.Tab,{code:M0,language:"java"}),r.jsx(s.Tab,{code:q0,language:"cpp"}),r.jsx(s.Tab,{code:dx,language:"ruby"})]})}),r.jsx("section",{id:"sort-cube",children:r.jsxs(s,{title:"cubesort",children:[r.jsx(s.Tab,{code:Zy,language:"python"}),r.jsx(s.Tab,{code:h0,language:"javascript"}),r.jsx(s.Tab,{code:O0,language:"java"}),r.jsx(s.Tab,{code:V0,language:"cpp"}),r.jsx(s.Tab,{code:ax,language:"ruby"})]})}),r.jsx("section",{id:"sort-bogo",children:r.jsxs(s,{title:"bogo sort",children:[r.jsx(s.Tab,{code:Yy,language:"python"}),r.jsx(s.Tab,{code:c0,language:"javascript"}),r.jsx(s.Tab,{code:j0,language:"java"}),r.jsx(s.Tab,{code:F0,language:"cpp"}),r.jsx(s.Tab,{code:ex,language:"ruby"})]})}),r.jsx("section",{id:"sort-pancake",children:r.jsxs(s,{title:"pancake sort",children:[r.jsx(s.Tab,{code:r0,language:"python"}),r.jsx(s.Tab,{code:y0,language:"javascript"}),r.jsx(s.Tab,{code:R0,language:"java"}),r.jsx(s.Tab,{code:J0,language:"cpp"}),r.jsx(s.Tab,{code:ux,language:"ruby"})]})}),r.jsx("section",{id:"sort-sleep",children:r.jsxs(s,{title:"sleep sort",children:[r.jsx(s.Tab,{code:l0,language:"python"}),r.jsx(s.Tab,{code:S0,language:"javascript"}),r.jsx(s.Tab,{code:z0,language:"java"}),r.jsx(s.Tab,{code:Z0,language:"cpp"}),r.jsx(s.Tab,{code:hx,language:"ruby"})]})})]})}function vx(){const{isSidebarOpen:c}=Xs(),S=Qe(Ac.main,!c&&Ac.sidebarHidden);return r.jsxs("main",{className:S,children:[r.jsx(Zp,{}),r.jsx(tg,{}),r.jsx(pg,{}),r.jsx(Tg,{}),r.jsx(Mg,{}),r.jsx(Qg,{}),r.jsx(zm,{}),r.jsx(Vm,{}),r.jsx(mv,{}),r.jsx(wv,{}),r.jsx(zv,{}),r.jsx(M1,{}),r.jsx(Q1,{}),r.jsx(Jy,{}),r.jsx(mx,{})]})}function yx(){return r.jsx(ro.StrictMode,{children:r.jsx(Rf,{children:r.jsx(Cf,{children:r.jsxs("div",{className:"App",children:[r.jsx(Mf,{}),r.jsx(Ip,{}),r.jsx(vx,{})]})})})})}Af.createRoot(document.getElementById("root")).render(r.jsx(yx,{}));
